-- Blog likes and comments, migrated off base44 entities.
--
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New query).
-- It is written to be re-runnable: every statement is IF NOT EXISTS or CREATE OR REPLACE.
--
-- Design notes, because two things here are deliberately stricter than the base44
-- setup they replace:
--
-- 1. Commenter emails are never publicly readable. The old BlogComment read policy
--    returned the whole row for any approved comment, author_email included, to
--    anyone who asked. Here the table itself is not readable by the public at all;
--    reads go through public_blog_comments, a view that simply does not select the
--    email column. The column still exists so you can contact someone if you need to.
--
-- 2. The spam checks that used to live in the submitBlogComment function are CHECK
--    constraints now. There is no server between the browser and the database any
--    more, so a rule enforced in JavaScript would be a rule enforced nowhere. In
--    Postgres they cannot be bypassed.

-- ---------------------------------------------------------------------------
-- Likes
-- ---------------------------------------------------------------------------
create table if not exists public.blog_post_likes (
  id          uuid primary key default gen_random_uuid(),
  post_id     text not null,
  session_key text not null,
  created_at  timestamptz not null default now(),
  -- One like per device per post. The old setup relied on the client checking
  -- localStorage first, which meant a determined visitor could inflate a count
  -- by clearing storage. This makes it a database rule instead.
  unique (post_id, session_key)
);

create index if not exists blog_post_likes_post_id_idx
  on public.blog_post_likes (post_id);

alter table public.blog_post_likes enable row level security;

drop policy if exists "anyone can read likes" on public.blog_post_likes;
create policy "anyone can read likes"
  on public.blog_post_likes for select
  to anon, authenticated
  using (true);

drop policy if exists "anyone can like" on public.blog_post_likes;
create policy "anyone can like"
  on public.blog_post_likes for insert
  to anon, authenticated
  with check (
    length(post_id) between 1 and 200
    and length(session_key) between 8 and 100
  );

-- No update or delete policy: with RLS on, the absence of a policy denies the
-- action outright for anon. Unliking is not a feature, and nobody should be able
-- to clear someone else's likes.

-- ---------------------------------------------------------------------------
-- Shares
-- ---------------------------------------------------------------------------
-- One row per reader per post, same shape as likes. This started out without a
-- unique constraint, on the reasoning that "times shared" should count share
-- events. In practice that just meant the number climbed on every click of the
-- button, which makes it a click counter rather than a measure of reach, and
-- leaves the table open to being inflated by holding down one button. Counting
-- distinct readers is both the more meaningful number and the bounded one.
create table if not exists public.blog_post_shares (
  id          uuid primary key default gen_random_uuid(),
  post_id     text not null,
  session_key text not null,
  created_at  timestamptz not null default now(),
  unique (post_id, session_key)
);

-- The unique above only applies to a fresh install, since create table if not
-- exists leaves an existing table alone. This adds it to one already deployed.
-- Safe to re-run; it will fail only if duplicate rows exist, in which case
-- delete them first and run again.
alter table public.blog_post_shares
  drop constraint if exists blog_post_shares_post_id_session_key_key;
alter table public.blog_post_shares
  add constraint blog_post_shares_post_id_session_key_key unique (post_id, session_key);

create index if not exists blog_post_shares_post_id_idx
  on public.blog_post_shares (post_id);

alter table public.blog_post_shares enable row level security;

drop policy if exists "anyone can read shares" on public.blog_post_shares;
create policy "anyone can read shares"
  on public.blog_post_shares for select
  to anon, authenticated
  using (true);

drop policy if exists "anyone can share" on public.blog_post_shares;
create policy "anyone can share"
  on public.blog_post_shares for insert
  to anon, authenticated
  with check (
    length(post_id) between 1 and 200
    and length(session_key) between 8 and 100
  );

-- ---------------------------------------------------------------------------
-- Comments
-- ---------------------------------------------------------------------------
create table if not exists public.blog_comments (
  id           uuid primary key default gen_random_uuid(),
  post_id      text not null,
  post_title   text not null default '',
  author_name  text not null,
  author_email text not null default '',
  content      text not null,
  status       text not null default 'pending',
  created_at   timestamptz not null default now(),

  constraint blog_comments_status_valid
    check (status in ('pending', 'approved', 'rejected')),

  -- Ported from submitBlogComment: reject very short comments.
  constraint blog_comments_content_length
    check (char_length(btrim(content)) between 5 and 5000),

  constraint blog_comments_author_name_length
    check (char_length(btrim(author_name)) between 1 and 80),

  -- Ported from submitBlogComment: more than one link reads as spam.
  constraint blog_comments_link_limit
    check ((length(content) - length(replace(lower(content), 'http', ''))) / 4 <= 1)
);

create index if not exists blog_comments_post_id_status_idx
  on public.blog_comments (post_id, status);

alter table public.blog_comments enable row level security;

-- Anyone may submit, but only ever as 'pending'. The with check clause is what
-- stops a visitor from crafting a request that self-approves, which is the whole
-- reason moderation is worth anything.
drop policy if exists "anyone can submit a comment" on public.blog_comments;
create policy "anyone can submit a comment"
  on public.blog_comments for insert
  to anon, authenticated
  with check (status = 'pending');

-- Deliberately no select policy for anon on the base table. Public reads go
-- through the view below, so author_email is never exposed.

-- ---------------------------------------------------------------------------
-- Public read surface
-- ---------------------------------------------------------------------------
-- security_invoker = off so the view can read the base table even though anon
-- has no select policy on it. The view is the boundary: it exposes approved
-- comments only, without emails.
drop view if exists public.public_blog_comments;
create view public.public_blog_comments
  with (security_invoker = off) as
  select id, post_id, author_name, content, created_at
  from public.blog_comments
  where status = 'approved';

-- The revoke is load-bearing, not tidying. Supabase grants anon and
-- authenticated full privileges on new objects in the public schema, and this
-- view is a simple single-table select, which Postgres treats as automatically
-- updatable (information_schema.views reports is_updatable = YES). Combined with
-- security_invoker = off, which makes the view run as its owner and therefore
-- skip RLS on blog_comments, the default grants would let anyone holding the
-- publishable key UPDATE or DELETE approved comments, or INSERT one that is
-- already approved, straight through the view. Revoking first and granting only
-- select is what makes the view genuinely read-only.
revoke all on public.public_blog_comments from anon, authenticated;
grant select on public.public_blog_comments to anon, authenticated;

-- ---------------------------------------------------------------------------
-- Moderating
-- ---------------------------------------------------------------------------
-- Approve:  update public.blog_comments set status = 'approved' where id = '...';
-- Reject:   update public.blog_comments set status = 'rejected' where id = '...';
-- Queue:    select id, post_title, author_name, content, created_at
--             from public.blog_comments where status = 'pending' order by created_at;
--
-- Run these from the SQL editor or the Table editor while signed in to the
-- dashboard, which uses the service role and bypasses RLS. No admin UI is
-- shipped in the site itself, so there is no admin surface to attack.
--
-- Optional: to get the email notification the old function sent, add a Database
-- Webhook (Dashboard -> Database -> Webhooks) on insert to blog_comments.
