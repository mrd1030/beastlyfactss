-- Automation for the on-site social feed: a pg_cron job that posts due entries
-- from public/social-feed-queue.json (served at beastlyfacts.com) into
-- public.social_posts once a day, via the post-social-feed edge function.
--
-- Re-runnable, same as social_feed.sql. Run after that file.
--
-- Setup, once:
--   1. Deploy the function: supabase/functions/post-social-feed/index.ts
--      (or via the deploy tooling that shipped it).
--   2. Pick a long random secret. Set it in BOTH places:
--        a. Dashboard -> Edge Functions -> post-social-feed -> Secrets:
--           POST_FEED_SECRET=<value>
--        b. SQL editor: select vault.create_secret('<value>', 'post_feed_secret');
--   3. Run this file.
--
-- The function is idempotent (queue_id dedupe + post_date gate), so the cron
-- firing extra times, or the queue file going stale, publishes nothing twice
-- and nothing early. 15:00 UTC is 11am EDT / 10am EST, comfortably after the
-- midnight ET article release and the morning notification.

-- Dedupe key for queue-driven posts. Null for posts made by hand in the
-- composer, so those are untouched.
alter table public.social_posts
  add column if not exists queue_id text unique;

select cron.unschedule('post-social-feed-daily')
where exists (select 1 from cron.job where jobname = 'post-social-feed-daily');

select cron.schedule(
  'post-social-feed-daily',
  '0 15 * * *',
  $$
  select net.http_post(
    url := 'https://ipqqeofzlwvfnunduuru.supabase.co/functions/v1/post-social-feed',
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-post-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'post_feed_secret')
    ),
    body := '{}'::jsonb
  );
  $$
);
