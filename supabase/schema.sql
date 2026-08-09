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

-- ---------------------------------------------------------------------------
-- Replies (one level deep only)
-- ---------------------------------------------------------------------------
-- A reply is just a row in the same table with parent_id set, so it inherits
-- moderation, the notify trigger and every CHECK constraint above for free.
-- on delete cascade: replies to a comment that gets deleted (not rejected,
-- actually deleted from the dashboard) go with it rather than becoming
-- orphaned rows with a dangling parent_id.
alter table public.blog_comments
  add column if not exists parent_id uuid references public.blog_comments(id) on delete cascade;

create index if not exists blog_comments_parent_id_idx
  on public.blog_comments (parent_id);

-- Enforced here rather than left to the client: a reply must target an
-- approved, top-level comment on the same post. The parent_id is not null
-- check on the target is what actually caps nesting at one level - a reply
-- can never itself be replied to, because its own id can never pass this
-- check as someone else's parent_id.
--
-- security definer is load-bearing, not optional: a plain trigger function
-- runs as the inserting role (anon), which has no select grant on
-- blog_comments at all (reads go through public_blog_comments). Without
-- definer, every reply insert fails with "permission denied for table
-- blog_comments" the moment this exists() subquery runs, not because the
-- reply is invalid but because anon cannot even ask the question.
create or replace function public.validate_comment_reply()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $fn$
begin
  if new.parent_id is not null and not exists (
    select 1 from public.blog_comments
    where id = new.parent_id
      and post_id = new.post_id
      and status = 'approved'
      and parent_id is null
  ) then
    raise exception 'Replies must target an approved top-level comment on the same post';
  end if;
  return new;
end
$fn$;

drop trigger if exists blog_comments_validate_reply on public.blog_comments;
create trigger blog_comments_validate_reply
  before insert on public.blog_comments
  for each row
  execute function public.validate_comment_reply();

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
-- Comment likes
-- ---------------------------------------------------------------------------
-- Same shape and same reasoning as blog_post_likes: one like per device per
-- comment, enforced by the database rather than trusted from localStorage,
-- and no update/delete policy since unliking is not a feature here either.
-- Applies equally to top-level comments and replies, they are both just rows
-- in blog_comments.
create table if not exists public.blog_comment_likes (
  id          uuid primary key default gen_random_uuid(),
  comment_id  uuid not null references public.blog_comments(id) on delete cascade,
  session_key text not null,
  created_at  timestamptz not null default now(),
  unique (comment_id, session_key)
);

create index if not exists blog_comment_likes_comment_id_idx
  on public.blog_comment_likes (comment_id);

alter table public.blog_comment_likes enable row level security;

drop policy if exists "anyone can read comment likes" on public.blog_comment_likes;
create policy "anyone can read comment likes"
  on public.blog_comment_likes for select
  to anon, authenticated
  using (true);

-- RLS policy expressions run as the calling role too, the same trap as the
-- reply trigger above: a raw "exists (select 1 from blog_comments ...)"
-- inside with check fails for anon with "permission denied for table
-- blog_comments", since anon has insert-only on that table. Routing the
-- check through a security definer function is the fix, same pattern as
-- moderate_comment() below - the function briefly runs with elevated
-- privilege to answer one narrow, read-only question, and nothing else.
create or replace function public.comment_is_approved(p_comment_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, extensions
as $fn$
  select exists (
    select 1 from public.blog_comments
    where id = p_comment_id and status = 'approved'
  );
$fn$;

revoke all on function public.comment_is_approved(uuid) from public;
grant execute on function public.comment_is_approved(uuid) to anon, authenticated;

-- The check is what stops someone liking a pending or rejected comment,
-- since public_blog_comments never exposes their ids for a real reader to
-- reference in the first place, but a crafted request could still try.
drop policy if exists "anyone can like a comment" on public.blog_comment_likes;
create policy "anyone can like a comment"
  on public.blog_comment_likes for insert
  to anon, authenticated
  with check (
    length(session_key) between 8 and 100
    and public.comment_is_approved(comment_id)
  );

-- ---------------------------------------------------------------------------
-- Public read surface
-- ---------------------------------------------------------------------------
-- security_invoker = off so the view can read the base table even though anon
-- has no select policy on it. The view is the boundary: it exposes approved
-- comments only, without emails. parent_id is included so the client can
-- build the two-level comment/reply tree; it is null for top-level comments.
drop view if exists public.public_blog_comments;
create view public.public_blog_comments
  with (security_invoker = off) as
  select id, post_id, parent_id, author_name, content, created_at
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
-- Least-privilege grants on the base tables
-- ---------------------------------------------------------------------------
-- Supabase grants anon and authenticated everything on new tables in the public
-- schema, including TRUNCATE. RLS is not a complete backstop for that: it filters
-- SELECT, INSERT, UPDATE and DELETE, but TRUNCATE is a table-level operation that
-- RLS does not gate at all, so it rests solely on the grant. PostgREST exposes no
-- TRUNCATE verb, so this is not reachable over the REST API today - but it is a
-- privilege nothing needs, sitting one surface change away from mattering.
--
-- Cutting the grants to exactly what the site uses also means a mistake in a
-- policy can no longer become a data-loss bug on its own. This matches the
-- pattern the app already uses on households/household_members in this same
-- database, which revoke everything and expose only security-definer RPCs.
--
-- blog_comments gets INSERT only: reads go through public_blog_comments, and
-- supabase-js sends Prefer: return=minimal unless .select() is chained, so the
-- insert needs no read privilege of its own.
revoke all on public.blog_post_likes from anon, authenticated;
revoke all on public.blog_post_shares from anon, authenticated;
revoke all on public.blog_comments from anon, authenticated;
revoke all on public.blog_comment_likes from anon, authenticated;

grant select, insert on public.blog_post_likes to anon, authenticated;
grant select, insert on public.blog_post_shares to anon, authenticated;
grant insert on public.blog_comments to anon, authenticated;
grant select, insert on public.blog_comment_likes to anon, authenticated;

-- ---------------------------------------------------------------------------
-- Moderating
-- ---------------------------------------------------------------------------
-- Approve:  update public.blog_comments set status = 'approved' where id = '...';
-- Reject:   update public.blog_comments set status = 'rejected' where id = '...';
-- Queue:    select id, post_title, author_name, content, parent_id, created_at
--             from public.blog_comments where status = 'pending' order by created_at;
--           A non-null parent_id means it's a reply; the notification title
--           already distinguishes "New reply:" from "New comment:" too.
--
-- Run these from the SQL editor or the Table editor while signed in to the
-- dashboard, which uses the service role and bypasses RLS. No admin UI is
-- shipped in the site itself, so there is no admin surface to attack. That is
-- deliberate: an approve/reject route on a public site would be the single
-- largest attack surface in this design, and moderation happens rarely enough
-- that the dashboard is no hardship.

-- ---------------------------------------------------------------------------
-- New-comment notification (replaces base44's SendEmail)
-- ---------------------------------------------------------------------------
-- Pushes to ntfy.sh on insert, which needs no account, no API key and no
-- domain: the topic name is itself the secret, so it lives in Vault rather
-- than inline here. Subscribe by adding that topic in the ntfy app.
--
-- pg_net posts asynchronously, so the reader's insert never waits on the
-- network. The exception handler matters just as much: this trigger runs
-- inside the insert's transaction, so anything it raised would roll the
-- comment back. A failed notification must never cost a real comment.
--
-- To change where alerts go, update the secret rather than this function:
--   select vault.update_secret(
--     (select id from vault.secrets where name = 'ntfy_comment_topic'),
--     'new-topic-name'
--   );
-- To stop them: drop trigger blog_comments_notify on public.blog_comments;
create extension if not exists pg_net;

do $vault$
begin
  if not exists (select 1 from vault.secrets where name = 'ntfy_comment_topic') then
    perform vault.create_secret(
      'CHANGE-ME-set-your-own-unguessable-topic',
      'ntfy_comment_topic',
      'ntfy.sh topic that new blog comment alerts are published to'
    );
  end if;
end
$vault$;

-- Per-comment moderation token. This is what the notification's Approve and
-- Reject buttons carry, rather than a key. The obvious implementation puts a
-- privileged key in the push payload, which then sits on the phone and passes
-- through ntfy's servers; a token instead affects exactly one comment and stops
-- working the moment it is used.
alter table public.blog_comments
  add column if not exists moderation_token uuid;

-- Forced server-side, never taken from the request. Without this an attacker
-- could insert a comment carrying a token they chose and immediately approve
-- it, which would make the whole moderation step decorative. status is pinned
-- here too, belt and braces with the insert policy's with check.
create or replace function public.set_comment_moderation_token()
returns trigger
language plpgsql
set search_path = public, extensions
as $fn$
begin
  new.moderation_token := gen_random_uuid();
  new.status := 'pending';
  return new;
end
$fn$;

drop trigger if exists blog_comments_set_token on public.blog_comments;
create trigger blog_comments_set_token
  before insert on public.blog_comments
  for each row
  execute function public.set_comment_moderation_token();

-- Single-use: the token is cleared on use, so a replayed tap does nothing.
-- Returns a short string because ntfy shows the response body in a toast.
create or replace function public.moderate_comment(p_token uuid, p_decision text)
returns text
language plpgsql
security definer
set search_path = public, extensions
as $fn$
declare
  updated_title text;
begin
  if p_decision not in ('approved', 'rejected') then
    return 'Invalid decision';
  end if;

  update public.blog_comments
     set status = p_decision,
         moderation_token = null
   where moderation_token = p_token
   returning coalesce(nullif(post_title, ''), post_id) into updated_title;

  if updated_title is null then
    return 'Already handled or expired';
  end if;

  return case p_decision
    when 'approved' then 'Approved, now live on ' || updated_title
    else 'Rejected'
  end;
end
$fn$;

revoke all on function public.moderate_comment(uuid, text) from public, anon, authenticated;
grant execute on function public.moderate_comment(uuid, text) to anon;

create or replace function public.notify_new_comment()
returns trigger
language plpgsql
security definer
set search_path = public, extensions, vault, net
as $fn$
declare
  topic text;
  api_url text := 'https://ipqqeofzlwvfnunduuru.supabase.co/rest/v1/rpc/moderate_comment';
  -- The publishable key, which is public by design and already in the site
  -- bundle. It is not what authorises the decision: the per-comment token is.
  api_key text := 'sb_publishable_1TIAo_Nad3LtMO_O6LaU-A_wy0ZoyD4';
  action_headers jsonb;
begin
  select decrypted_secret into topic
  from vault.decrypted_secrets
  where name = 'ntfy_comment_topic';

  if topic is null or topic = '' then
    return new;
  end if;

  action_headers := jsonb_build_object(
    'apikey', api_key,
    'Authorization', 'Bearer ' || api_key,
    'Content-Type', 'application/json'
  );

  perform net.http_post(
    url := 'https://ntfy.sh',
    body := jsonb_build_object(
      'topic', topic,
      'title', (case when new.parent_id is not null then 'New reply: ' else 'New comment: ' end)
               || coalesce(nullif(new.post_title, ''), new.post_id),
      -- author_email is deliberately not included: it is not needed to decide
      -- whether to approve, and a phone notification is a poor place for it.
      'message', new.author_name || ' wrote:' || chr(10) || chr(10)
                 || left(new.content, 400)
                 || chr(10) || chr(10) || 'id: ' || new.id::text,
      'tags', jsonb_build_array('speech_balloon'),
      'priority', 3,
      'click', 'https://beastlyfacts.com/blog/' || new.post_id || '/',
      'actions', jsonb_build_array(
        jsonb_build_object(
          'action', 'http', 'label', 'Approve', 'method', 'POST',
          'url', api_url, 'headers', action_headers, 'clear', true,
          'body', jsonb_build_object('p_token', new.moderation_token, 'p_decision', 'approved')::text
        ),
        jsonb_build_object(
          'action', 'http', 'label', 'Reject', 'method', 'POST',
          'url', api_url, 'headers', action_headers, 'clear', true,
          'body', jsonb_build_object('p_token', new.moderation_token, 'p_decision', 'rejected')::text
        )
      )
    ),
    headers := jsonb_build_object('Content-Type', 'application/json')
  );

  return new;
exception
  when others then
    return new;
end
$fn$;

drop trigger if exists blog_comments_notify on public.blog_comments;
create trigger blog_comments_notify
  after insert on public.blog_comments
  for each row
  execute function public.notify_new_comment();
