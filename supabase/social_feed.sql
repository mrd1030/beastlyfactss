-- The social feed composer: a private page (/composer/) where the site owner
-- posts a photo or video + caption, and a public page (/feed/) that lists
-- them. Built for one job: getting stuff already posted to Instagram/X/etc
-- onto the site too, without wiring up any social platform's API.
--
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New
-- query), after schema.sql. Re-runnable like that file: every statement is
-- IF NOT EXISTS or CREATE OR REPLACE.
--
-- Setup after running this file:
--   1. Dashboard -> Authentication -> Users -> Add user. Create yourself an
--      account with an email + password. There is no public sign-up page on
--      the site - this is the only way an account gets created, on purpose.
--   2. Run: insert into public.app_admins (email) values ('you@example.com');
--      using the same email as the account you just created. Until a row
--      exists here, that account can log in but every write it attempts
--      (posting, deleting) is refused by RLS.

-- ---------------------------------------------------------------------------
-- Admin allowlist
-- ---------------------------------------------------------------------------
-- Deliberately not exposed through the API at all (no policies below means
-- RLS denies every row to anon and authenticated alike). The only way in or
-- out of this table is the SQL editor / dashboard, same as blog comment
-- moderation in schema.sql. Adding a second admin later is one insert here,
-- no code change.
create table if not exists public.app_admins (
  email text primary key
);

alter table public.app_admins enable row level security;
revoke all on public.app_admins from anon, authenticated;

-- security definer + stable: runs once per check as the table owner so it can
-- read app_admins even though the calling role (authenticated) has no grant
-- on it at all - same pattern as comment_is_approved() in schema.sql. Every
-- write policy below calls this instead of querying app_admins directly.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public, extensions
as $fn$
  select exists (
    select 1 from public.app_admins where email = auth.email()
  );
$fn$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- ---------------------------------------------------------------------------
-- Posts
-- ---------------------------------------------------------------------------
create table if not exists public.social_posts (
  id          uuid primary key default gen_random_uuid(),
  media_type  text not null check (media_type in ('image', 'video')),
  media_url   text not null,
  caption     text not null default '',
  link_url    text,
  created_at  timestamptz not null default now(),

  constraint social_posts_caption_length check (char_length(caption) <= 2000),
  constraint social_posts_link_length check (link_url is null or char_length(link_url) <= 2000)
);

create index if not exists social_posts_created_at_idx
  on public.social_posts (created_at desc);

alter table public.social_posts enable row level security;

drop policy if exists "anyone can read posts" on public.social_posts;
create policy "anyone can read posts"
  on public.social_posts for select
  to anon, authenticated
  using (true);

drop policy if exists "admins can post" on public.social_posts;
create policy "admins can post"
  on public.social_posts for insert
  to authenticated
  with check (public.is_admin());

drop policy if exists "admins can delete posts" on public.social_posts;
create policy "admins can delete posts"
  on public.social_posts for delete
  to authenticated
  using (public.is_admin());

-- No update policy: a post is edited by deleting and reposting. Nothing here
-- needs an edit-in-place flow yet.

revoke all on public.social_posts from anon, authenticated;
grant select on public.social_posts to anon, authenticated;
grant insert, delete on public.social_posts to authenticated;

-- ---------------------------------------------------------------------------
-- Media storage
-- ---------------------------------------------------------------------------
-- Public bucket: reads happen straight through the CDN URL, not through
-- PostgREST, so the select policy below is only what lets the composer page
-- list/manage files - a public bucket already serves GETs to anyone with the
-- URL regardless of storage.objects policies.
insert into storage.buckets (id, name, public)
values ('social-feed', 'social-feed', true)
on conflict (id) do nothing;

drop policy if exists "anyone can list social-feed media" on storage.objects;
create policy "anyone can list social-feed media"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'social-feed');

drop policy if exists "admins can upload social-feed media" on storage.objects;
create policy "admins can upload social-feed media"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'social-feed' and public.is_admin());

drop policy if exists "admins can delete social-feed media" on storage.objects;
create policy "admins can delete social-feed media"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'social-feed' and public.is_admin());
