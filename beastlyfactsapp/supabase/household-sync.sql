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

create or replace function public.generate_household_invite_code()
returns text
language plpgsql
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
set search_path = public
as $$
declare
  v_household public.households;
begin
  insert into public.households (name, invite_code, snapshot)
  values (
    trim(p_household_name),
    public.generate_household_invite_code(),
    coalesce(p_snapshot, '{}'::jsonb)
  )
  returning * into v_household;

  return query
  select v_household.id, v_household.name, v_household.invite_code, v_household.updated_at, v_household.snapshot;
end;
$$;

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
language sql
security definer
set search_path = public
as $$
  select id, name, invite_code, updated_at, snapshot
  from public.households
  where invite_code = upper(trim(p_invite_code))
  limit 1;
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
  update public.households
  set
    name = coalesce(nullif(trim(p_household_name), ''), name),
    snapshot = coalesce(p_snapshot, snapshot),
    updated_at = timezone('utc', now())
  where invite_code = upper(trim(p_invite_code))
  returning * into v_household;

  if v_household.id is null then
    raise exception 'household_not_found';
  end if;

  return query
  select v_household.id, v_household.name, v_household.invite_code, v_household.updated_at, v_household.snapshot;
end;
$$;

grant execute on function public.create_household(text, jsonb) to anon, authenticated;
grant execute on function public.get_household_snapshot(text) to anon, authenticated;
grant execute on function public.upsert_household_snapshot(text, text, jsonb) to anon, authenticated;
