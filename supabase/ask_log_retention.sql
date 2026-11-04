-- Ask Beastly question log retention (owner, 2026-11-04): ask_log rows are
-- kept 12 months, then deleted. The privacy policy (section 6) promises this,
-- so the job must stay scheduled while the policy says so.
--
-- A daily pg_cron job at 08:20 UTC (03:20 or 04:20 Eastern). It reads only
-- the old rows through ask_log_created_at_idx. Re-runnable: it unschedules
-- the job first.
--
-- Applied to the project as migration ask_log_retention.

select cron.unschedule('ask-log-retention')
where exists (select 1 from cron.job where jobname = 'ask-log-retention');

select cron.schedule(
  'ask-log-retention',
  '20 8 * * *',
  $$delete from public.ask_log where created_at < now() - interval '12 months'$$
);
