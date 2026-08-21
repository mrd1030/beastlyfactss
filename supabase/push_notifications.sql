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
