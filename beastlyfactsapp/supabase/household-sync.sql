create extension if not exists pgcrypto;

create table if not exists public.households (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  invite_code text not null unique,
  snapshot jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.households enable row level security;

revoke all on public.households from anon, authenticated;

-- Tracks which authenticated accounts belong to which household. This is
-- the actual authorization gate added alongside real accounts: knowing a
-- household's invite_code no longer grants access by itself - only
-- redeeming it via join_household() (which requires a signed-in auth.uid())
-- does, and every pull/push RPC below re-checks membership here before
-- touching household data. Same lockdown pattern as `households` itself:
-- RLS on, all grants revoked, the only door in is the security-definer
-- RPCs below (which run as the function owner and bypass both).
create table if not exists public.household_members (
  household_id uuid not null references public.households(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default timezone('utc', now()),
  primary key (household_id, user_id)
);

alter table public.household_members enable row level security;

revoke all on public.household_members from anon, authenticated;

-- Supabase installs pgcrypto into the `extensions` schema, not `public` -
-- every function below that needs gen_random_bytes()/gen_random_uuid()
-- must include `extensions` in its search_path or those calls fail with
-- "function gen_random_bytes(integer) does not exist" (confirmed live
-- against this project - the very first deploy hit exactly this).
create or replace function public.generate_household_invite_code()
returns text
language plpgsql
set search_path = public, extensions
as $$
declare
  code text;
begin
  loop
    code := upper(substring(encode(gen_random_bytes(4), 'hex') from 1 for 8));
    exit when not exists (select 1 from public.households where invite_code = code);
  end loop;
  return code;
end;
$$;

-- Creating a household now requires a signed-in account (auth.uid() is null
-- for an anonymous caller) and auto-enrolls the creator as its first
-- member, so they can pull/push it back on later syncs.
create or replace function public.create_household(
  p_household_name text,
  p_snapshot jsonb
)
returns table (
  household_id uuid,
  household_name text,
  invite_code text,
  updated_at timestamptz,
  snapshot jsonb
)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_household public.households;
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'not_authenticated';
  end if;

  insert into public.households (name, invite_code, snapshot)
  values (
    trim(p_household_name),
    public.generate_household_invite_code(),
    coalesce(p_snapshot, '{}'::jsonb)
  )
  returning * into v_household;

  insert into public.household_members (household_id, user_id) values (v_household.id, v_uid);

  return query
  select v_household.id, v_household.name, v_household.invite_code, v_household.updated_at, v_household.snapshot;
end;
$$;

-- Redeems an invite code - the actual authorization step. Requires a
-- signed-in account and enrolls it as a household member (idempotent: a
-- device re-joining a household it's already in just no-ops the insert)
-- before returning the snapshot to pull. Distinct from
-- get_household_snapshot below, which re-fetches for someone who is
-- ALREADY a member and does not enroll anyone new.
create or replace function public.join_household(
  p_invite_code text
)
returns table (
  household_id uuid,
  household_name text,
  invite_code text,
  updated_at timestamptz,
  snapshot jsonb
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_household public.households;
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'not_authenticated';
  end if;

  -- `as h` + `h.invite_code` (not bare `invite_code`) - this function's own
  -- RETURNS TABLE names an output column `invite_code` too, which PL/pgSQL
  -- treats as a variable in scope for the whole function body alongside the
  -- table's own column of the same name. A bare reference is genuinely
  -- ambiguous between the two and fails at call time ("column reference is
  -- ambiguous") - confirmed live against this project rolling out the auth
  -- gate, the same bug class as upsert_household_snapshot hit in Phase 1,
  -- reintroduced here (and in get_household_snapshot / upsert_household_
  -- snapshot below) by copying this lookup into three new/changed
  -- functions without re-applying the qualification.
  select * into v_household from public.households as h where h.invite_code = upper(trim(p_invite_code));
  if v_household.id is null then
    raise exception 'household_not_found';
  end if;

  -- Not `on conflict (household_id, user_id) do nothing` - that conflict
  -- target list hits the exact same ambiguity as the bare `invite_code`
  -- lookup above (household_id is also one of this function's RETURNS
  -- TABLE output columns), confirmed live against this project. An
  -- explicit exists-check sidesteps it; a genuine concurrent double-join
  -- by the same user is not a real-world race worth an atomic upsert here.
  if not exists (
    select 1 from public.household_members m
    where m.household_id = v_household.id and m.user_id = v_uid
  ) then
    insert into public.household_members (household_id, user_id) values (v_household.id, v_uid);
  end if;

  return query
  select v_household.id, v_household.name, v_household.invite_code, v_household.updated_at, v_household.snapshot;
end;
$$;

-- Repeat pulls (pullConnectedHousehold / syncConnectedHousehold) go through
-- this - it requires the caller to already be a household_members row,
-- confirmed live against this project after the auth rollout ("not_a_member"
-- raised correctly for a signed-in user who was never added via
-- join_household). Switched from `language sql` to `language plpgsql` since
-- the membership check needs conditional logic.
create or replace function public.get_household_snapshot(
  p_invite_code text
)
returns table (
  household_id uuid,
  household_name text,
  invite_code text,
  updated_at timestamptz,
  snapshot jsonb
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_household public.households;
begin
  -- `as h` / `h.invite_code` - see join_household above for why the bare
  -- form is ambiguous here (same RETURNS TABLE column-name collision).
  select * into v_household from public.households as h where h.invite_code = upper(trim(p_invite_code));
  if v_household.id is null then
    raise exception 'household_not_found';
  end if;

  if not exists (
    select 1 from public.household_members m
    where m.household_id = v_household.id and m.user_id = auth.uid()
  ) then
    raise exception 'not_a_member';
  end if;

  return query
  select v_household.id, v_household.name, v_household.invite_code, v_household.updated_at, v_household.snapshot;
end;
$$;

create or replace function public.upsert_household_snapshot(
  p_invite_code text,
  p_household_name text,
  p_snapshot jsonb
)
returns table (
  household_id uuid,
  household_name text,
  invite_code text,
  updated_at timestamptz,
  snapshot jsonb
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_household public.households;
begin
  -- `as h` / `h.invite_code` - see join_household above for why the bare
  -- form is ambiguous here (same RETURNS TABLE column-name collision).
  select * into v_household from public.households as h where h.invite_code = upper(trim(p_invite_code));
  if v_household.id is null then
    raise exception 'household_not_found';
  end if;

  if not exists (
    select 1 from public.household_members m
    where m.household_id = v_household.id and m.user_id = auth.uid()
  ) then
    raise exception 'not_a_member';
  end if;

  -- Same ambiguity, different columns: this UPDATE's own SET targets
  -- (`name`, `snapshot`, `updated_at`) are unambiguous (SET's left-hand
  -- side always resolves against the target table), but reading the
  -- *current* value back on the right-hand side (`h.name`, `h.snapshot`)
  -- needs the alias, and updating by `h.id` (rather than re-matching
  -- invite_code a second time) reuses the v_household already looked up
  -- above for the membership check.
  update public.households as h
  set
    name = coalesce(nullif(trim(p_household_name), ''), h.name),
    snapshot = coalesce(p_snapshot, h.snapshot),
    updated_at = timezone('utc', now())
  where h.id = v_household.id
  returning * into v_household;

  return query
  select v_household.id, v_household.name, v_household.invite_code, v_household.updated_at, v_household.snapshot;
end;
$$;

-- Only signed-in callers may invoke these now - anon lost all access, which
-- is the point: create_household requires an account, join_household is
-- the authorization step, and get_household_snapshot / upsert_household_
-- snapshot both re-check membership on every call (see function bodies
-- above).
--
-- Revoking `from public` (not just `anon, authenticated`) matters:
-- Postgres grants EXECUTE on a newly created function to PUBLIC by
-- default, and this project's schema also has default privileges that
-- auto-grant new `public` functions to anon/authenticated/service_role -
-- confirmed live (join_household's ACL showed an `anon=X/postgres` entry
-- immediately after its first deploy, despite never being granted to anon
-- anywhere in this file). Revoking only the role-specific grant left the
-- PUBLIC entry standing, which every role - including anon - inherits
-- automatically, silently defeating the lockdown. `revoke all ... from
-- public, anon, authenticated` clears every path before the explicit
-- `grant ... to authenticated` below re-opens just the one that should
-- exist.
revoke all on function public.create_household(text, jsonb) from public, anon, authenticated;
revoke all on function public.join_household(text) from public, anon, authenticated;
revoke all on function public.get_household_snapshot(text) from public, anon, authenticated;
revoke all on function public.upsert_household_snapshot(text, text, jsonb) from public, anon, authenticated;

grant execute on function public.create_household(text, jsonb) to authenticated;
grant execute on function public.join_household(text) to authenticated;
grant execute on function public.get_household_snapshot(text) to authenticated;
grant execute on function public.upsert_household_snapshot(text, text, jsonb) to authenticated;
