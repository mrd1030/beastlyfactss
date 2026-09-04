-- IndexNow automation: a pg_cron job fires the submit-indexnow edge function
-- daily; the function diffs the live sitemap against public.indexnow_urls and
-- announces only new or changed URLs to api.indexnow.org (which shares
-- submissions with Bing, DuckDuckGo, Yandex, Seznam, and Naver).
--
-- This replaced a standalone Cloudflare Worker ("indexnow") that resubmitted
-- the entire sitemap to two endpoints every day and earned two straight weeks
-- of 429s, ending in a SiteVerificationNotCompleted hold. That worker must
-- stay deleted; running both would restart the spam.
--
-- Already applied to the project as migration indexnow_automation, which also
-- created:
--   - public.indexnow_urls (url pk, lastmod, submitted_at), RLS on with no
--     policies - only the service-role function touches it.
--   - vault secret 'indexnow_secret' (the value lives only in vault).
--   - public.get_indexnow_secret(), security definer, EXECUTE revoked from
--     public/anon/authenticated and granted to service_role only - how the
--     function verifies its caller without a dashboard-managed secret.
--
-- The key pair: public/5e1ddc33-7c77-4b68-8932-387fff51d6b6.txt is served at
-- the site root and named as keyLocation in every submission.
--
-- 06:10 UTC is after any late-evening ET deploys and comfortably clear of
-- the other crons. A failed submission (429, verification hold, outage) does
-- not advance state, so the same diff simply retries on the next firing.

select cron.unschedule('submit-indexnow-daily')
where exists (select 1 from cron.job where jobname = 'submit-indexnow-daily');

select cron.schedule(
  'submit-indexnow-daily',
  '10 6 * * *',
  $$
  select net.http_post(
    url := 'https://ipqqeofzlwvfnunduuru.supabase.co/functions/v1/submit-indexnow',
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-indexnow-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'indexnow_secret')
    ),
    body := '{}'::jsonb
  );
  $$
);
