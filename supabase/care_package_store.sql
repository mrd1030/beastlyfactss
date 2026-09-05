-- Self-hosted care package storefront: purchases, download log, and the
-- private bucket the PDFs live in.
--
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New
-- query). Written to be re-runnable, same as schema.sql and social_feed.sql:
-- every statement is IF NOT EXISTS, CREATE OR REPLACE, or a drop-then-create.
--
-- Three things here are deliberate and worth reading before changing them:
--
-- 1. Nothing writes to these tables from the browser. Rows are inserted by
--    the /api/care-packages/ routes in public/_worker.js holding the service
--    role key, which bypasses RLS entirely. The policies below therefore only
--    ever govern reads, and the grants give anon nothing at all. A storefront where the buyer's own
--    browser can insert a purchase row is a storefront with no paywall.
--
-- 2. Ownership is keyed on email, not on auth.uid(). There are no buyer
--    accounts at checkout: Stripe collects an email, the webhook records it,
--    and the buyer later signs in to the library with an email OTP. The row
--    and the session are joined by the address, which is the only identifier
--    that exists on both sides. Both sides are lower-cased so a buyer who
--    typed Sam@Example.com at checkout and sam@example.com at sign-in is the
--    same person.
--
-- 3. The bucket is private and has no storage.objects policies. A signed-in
--    buyer cannot read it through supabase-js at all. Downloads go through
--    the download route, which checks the purchase row and mints a signed
--    URL with a short expiry. That indirection is what makes "one object per
--    package at a stable path" safe: the path never changes, so uploading a
--    corrected edition over it is the whole publishing step, and the path
--    being guessable costs nothing because it is not reachable without a
--    signature.

-- ---------------------------------------------------------------------------
-- Purchases
-- ---------------------------------------------------------------------------
-- One row per completed Stripe Checkout session. stripe_session_id is unique,
-- which is what makes the webhook idempotent: Stripe retries a delivery it did
-- not get a 2xx for, and it can send checkout.session.completed more than once
-- for the same session, so the insert is written as an upsert against this
-- constraint rather than trusting delivery to happen exactly once.
create table if not exists public.purchases (
  id                   uuid primary key default gen_random_uuid(),
  email                text not null,
  package_id           text not null,
  stripe_session_id    text not null unique,
  stripe_payment_intent text,
  amount_cents         integer not null default 0,
  currency             text not null default 'usd',
  -- The catalog version the buyer paid for, copied from carePackages.js at
  -- checkout. Not what they download: that is always the current edition.
  -- Kept so "you bought v2.2, the file is now v2.4" is answerable.
  edition              text not null default '',
  livemode             boolean not null default false,
  created_at           timestamptz not null default now(),

  constraint purchases_email_length check (char_length(email) between 3 and 320),
  constraint purchases_package_id_length check (char_length(package_id) between 1 and 100)
);

-- The lookup the library page makes on every visit: every purchase for one
-- address. Functional index on lower(email) because the RLS policy and the
-- library query both compare lower-cased.
create index if not exists purchases_email_idx
  on public.purchases (lower(email));

create index if not exists purchases_package_id_idx
  on public.purchases (package_id);

alter table public.purchases enable row level security;

-- ---------------------------------------------------------------------------
-- Download log
-- ---------------------------------------------------------------------------
-- One row per signed URL minted. The point is not analytics, it is being able
-- to answer "which edition does this buyer actually have" when someone writes
-- in about a correction: edition records what the file said at the moment the
-- URL was handed out, which a re-upload cannot retroactively change.
create table if not exists public.care_package_downloads (
  id           uuid primary key default gen_random_uuid(),
  purchase_id  uuid references public.purchases(id) on delete set null,
  email        text not null,
  package_id   text not null,
  edition      text not null default '',
  storage_path text not null default '',
  created_at   timestamptz not null default now()
);

create index if not exists care_package_downloads_email_idx
  on public.care_package_downloads (lower(email));

create index if not exists care_package_downloads_created_at_idx
  on public.care_package_downloads (created_at desc);

alter table public.care_package_downloads enable row level security;

-- ---------------------------------------------------------------------------
-- Read policies
-- ---------------------------------------------------------------------------
-- auth.email() rather than a join through auth.users: it reads the address out
-- of the request's JWT, so it costs nothing and cannot be pointed at someone
-- else's row. Deliberately not `to anon`: an anonymous visitor has no email in
-- their token, so with RLS on and no policy for that role the table is simply
-- invisible to the publishable key.
drop policy if exists "buyers read their own purchases" on public.purchases;
create policy "buyers read their own purchases"
  on public.purchases for select
  to authenticated
  using (lower(email) = lower(coalesce(auth.email(), '')));

drop policy if exists "buyers read their own downloads" on public.care_package_downloads;
create policy "buyers read their own downloads"
  on public.care_package_downloads for select
  to authenticated
  using (lower(email) = lower(coalesce(auth.email(), '')));

-- No insert, update or delete policy on either table for any browser role.
-- With RLS on, the absence of a policy denies the action outright, so a buyer
-- holding the publishable key cannot mint themselves a purchase, edit an
-- amount, or clear their download history. The webhook and download routes
-- write with the service role, which bypasses RLS and is never in the bundle.

-- ---------------------------------------------------------------------------
-- Least-privilege grants
-- ---------------------------------------------------------------------------
-- Same reasoning as the tail of schema.sql: Supabase grants anon and
-- authenticated everything on a new public-schema table, TRUNCATE included,
-- and RLS does not gate TRUNCATE at all. Revoke first, then hand back only the
-- select the library page actually performs.
revoke all on public.purchases from anon, authenticated;
revoke all on public.care_package_downloads from anon, authenticated;

grant select on public.purchases to authenticated;
grant select on public.care_package_downloads to authenticated;

-- ---------------------------------------------------------------------------
-- PDF storage
-- ---------------------------------------------------------------------------
-- Private, unlike the social-feed bucket. public = false means Storage refuses
-- an unsigned GET even with the full object path, which is the entire security
-- model for a paid file: the path is stable and guessable on purpose, and the
-- signature is what is scarce.
--
-- One object per package id at a stable path: care-packages/<package-id>.pdf.
-- Publishing a corrected edition is uploading a new file over that same path
-- (Dashboard -> Storage -> care-packages -> Upload, overwrite), and every
-- buyer's next download is the new file. Bump `version` in
-- src/lib/data/carePackages.js in the same commit so the library and the
-- download log report the edition that is actually being served.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('care-packages', 'care-packages', false, 52428800, array['application/pdf'])
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Deliberately no storage.objects policies for this bucket. anon and
-- authenticated get no select, insert, update or delete on it, so the only
-- ways in are the service role (the download Function, minting signed URLs)
-- and the dashboard (uploading a new edition). If a policy is ever added here,
-- the paywall is gone.

-- ---------------------------------------------------------------------------
-- Operating notes
-- ---------------------------------------------------------------------------
-- What did someone buy:
--   select package_id, edition, amount_cents, created_at
--     from public.purchases where lower(email) = lower('buyer@example.com')
--     order by created_at;
--
-- Which edition do they hold:
--   select package_id, edition, created_at
--     from public.care_package_downloads
--     where lower(email) = lower('buyer@example.com')
--     order by created_at desc limit 10;
--
-- Grant a package manually (a refund reversal, a comp copy, a Gumroad buyer
-- being migrated across). stripe_session_id has to be unique but does not have
-- to come from Stripe:
--   insert into public.purchases (email, package_id, stripe_session_id, amount_cents, edition)
--   values ('buyer@example.com', 'hamster', 'manual_' || gen_random_uuid(), 0, '2.2');
