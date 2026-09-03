-- Web Push subscriptions: one row per browser/device that opted in to "get
-- notified about new posts" (see NotificationOptIn.jsx). No accounts here -
-- same anonymous-write model as blog_post_likes/shares in schema.sql.
--
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New
-- query), after schema.sql. Re-runnable: every statement is IF NOT EXISTS or
-- drop-then-create.
--
-- Setup after running this file - see supabase/functions/send-notification
-- for the piece that actually sends a push:
--   1. Generate a VAPID key pair once (this repo already generated one; ask
--      for it, or run `npx web-push generate-vapid-keys` yourself).
--   2. Deploy the edge function: `supabase functions deploy send-notification`
--   3. Set its secrets:
--        supabase secrets set VAPID_PUBLIC_KEY=... VAPID_PRIVATE_KEY=... \
--          VAPID_SUBJECT=mailto:you@example.com \
--          SEND_NOTIFICATION_SECRET=<any random string you pick>
--      SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are already available to
--      every edge function automatically - nothing to set for those.
--   4. The VAPID_PUBLIC_KEY must also be pasted into
--      src/lib/pushNotifications.js (VAPID_PUBLIC_KEY constant) - it's the
--      same public key on both sides, private key only ever lives here.

create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  -- Unique per subscription: a browser hands out a new endpoint if the user
  -- clears site data or the old one expires, so this is the natural
  -- upsert/dedupe key rather than anything device-fingerprint-ish.
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  created_at timestamptz not null default now()
);

alter table public.push_subscriptions enable row level security;

-- Insert-only from the client. No select/update/delete policy: a reader has
-- no reason to list, edit, or remove anyone's subscription row (including
-- their own) directly - unsubscribing just calls
-- pushManager.getSubscription().unsubscribe() browser-side, which doesn't
-- touch this table at all, and dead rows get cleaned up server-side by
-- send-notification when a push service reports one as gone. That function
-- uses the service role key, which bypasses RLS entirely.
drop policy if exists "anyone can subscribe" on public.push_subscriptions;
create policy "anyone can subscribe"
  on public.push_subscriptions for insert
  to anon, authenticated
  with check (true);

revoke all on public.push_subscriptions from anon, authenticated;
grant insert on public.push_subscriptions to anon, authenticated;

-- --------------------------------------------------------------------------
-- Daily send: ledger + schedule
-- --------------------------------------------------------------------------
--
-- Applied to this project already (migrations notification_sends_ledger,
-- enable_pg_cron, schedule_daily_push_notification). Kept here so the whole
-- push setup reads in one place, and so it can be rebuilt from scratch.
--
-- Why a schedule at all: this site's content is git-based, and every article
-- ships deployed and crawlable with a future frontmatter date as the only
-- thing holding it out of the blog list and the feed (see src/lib/utils/date.js
-- and public/_worker.js). Nothing happens at publish time to hang a send off,
-- so the schedule watches the dates instead and the edge function reads the
-- live /articles.json to decide what, if anything, went live today.
--
-- This started life as a GitHub Actions cron and moved here because Actions
-- could not hit a morning reliably: on this repo, scheduled runs landed
-- between 34 minutes and 6 hours late, every single time. pg_cron runs inside
-- Postgres and fires on the minute.

create extension if not exists pg_cron;
create extension if not exists pg_net;

-- One row per calendar day the daily push went out. The function inserts here
-- BEFORE sending, so a retry, the second cron entry, or a hand-run of the
-- daily mode all hit the primary key and no-op rather than buzzing the same
-- phone twice.
create table if not exists public.notification_sends (
  send_date date primary key,
  article_count integer not null default 0,
  sent_at timestamptz not null default now()
);

alter table public.notification_sends enable row level security;

-- No policies at all: only the edge function touches this, via the service
-- role key, which bypasses RLS. Same posture as push_subscriptions above.
revoke all on public.notification_sends from anon, authenticated;

-- The shared secret lives in Vault so it never appears in the job definition
-- or in cron.job_run_details. Set it once (use your own value):
--
--   select vault.create_secret('<SEND_NOTIFICATION_SECRET>', 'send_notification_secret');
--
-- Two entries because pg_cron schedules in UTC while the site's day is
-- America/New_York: 13:00 UTC is 9am EDT, 14:00 UTC is 9am EST. The function
-- checks the real ET hour and no-ops on whichever entry is not 9am, so exactly
-- one send happens per day, year round, with nothing to change at the
-- daylight-saving boundaries.

select cron.schedule(
  'notify-new-posts-1300z',
  '0 13 * * *',
  $job$
  select net.http_post(
    url := 'https://ipqqeofzlwvfnunduuru.supabase.co/functions/v1/send-notification',
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-send-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'send_notification_secret')
    ),
    body := jsonb_build_object('mode', 'daily')
  );
  $job$
);

select cron.schedule(
  'notify-new-posts-1400z',
  '0 14 * * *',
  $job$
  select net.http_post(
    url := 'https://ipqqeofzlwvfnunduuru.supabase.co/functions/v1/send-notification',
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-send-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'send_notification_secret')
    ),
    body := jsonb_build_object('mode', 'daily')
  );
  $job$
);

-- Handy checks:
--   select jobname, schedule, active from cron.job;
--   select jobname, status, return_message, start_time
--     from cron.job_run_details order by start_time desc limit 10;
--   select * from public.notification_sends order by send_date desc limit 7;
