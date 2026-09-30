-- Beastle daily reminder: an opt-in flag on an existing push subscription.
-- The 9:05 run in supabase/functions/send-notification ({"mode":"beastle"},
-- scheduled at the bottom of this file) sends "Beastle #N is live" only to
-- subscriptions with the flag set, once per day. It is five minutes after
-- the 9:00 article and fact run so the two never land in the same second.
--
-- Run once in the SQL editor, after push_notifications.sql. Re-runnable.
-- Then redeploy the function: supabase functions deploy send-notification

alter table public.push_subscriptions
  add column if not exists beastle_reminder boolean not null default false;

-- The browser cannot update push_subscriptions (insert-only, see
-- push_notifications.sql), so the toggle goes through this function. The
-- endpoint is the key: only the device holding the subscription knows it,
-- the same trust the insert policy already relies on.
create or replace function public.set_beastle_reminder(p_endpoint text, p_on boolean)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.push_subscriptions set beastle_reminder = p_on where endpoint = p_endpoint;
  return found;
end;
$$;

revoke all on function public.set_beastle_reminder(text, boolean) from public;
grant execute on function public.set_beastle_reminder(text, boolean) to anon, authenticated;

-- One row per day the reminder went out. Claimed before sending, like
-- notification_sends, so a retry or the second cron entry never sends twice.
create table if not exists public.beastle_notification_sends (
  send_date date primary key,
  day_number integer not null,
  sent_at timestamptz not null default now()
);

alter table public.beastle_notification_sends enable row level security;
revoke all on public.beastle_notification_sends from anon, authenticated;

-- 9:05 ET. Two entries, like the 9:00 run in push_notifications.sql: one of
-- 13:05 and 14:05 UTC is 9:05 ET depending on daylight saving, and the
-- function skips the other. Applied as migration beastle_reminder_at_905.
do $$
declare j text;
begin
  foreach j in array array['notify-beastle-1305z', 'notify-beastle-1405z'] loop
    if exists (select 1 from cron.job where jobname = j) then perform cron.unschedule(j); end if;
  end loop;
end $$;

select cron.schedule('notify-beastle-1305z', '5 13 * * *', $cmd$
  select net.http_post(
    url := 'https://ipqqeofzlwvfnunduuru.supabase.co/functions/v1/send-notification',
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-send-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'send_notification_secret')
    ),
    body := jsonb_build_object('mode', 'beastle')
  );
$cmd$);

select cron.schedule('notify-beastle-1405z', '5 14 * * *', $cmd$
  select net.http_post(
    url := 'https://ipqqeofzlwvfnunduuru.supabase.co/functions/v1/send-notification',
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-send-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'send_notification_secret')
    ),
    body := jsonb_build_object('mode', 'beastle')
  );
$cmd$);
