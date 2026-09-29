-- Beastle daily reminder: an opt-in flag on an existing push subscription.
-- The 9am run in supabase/functions/send-notification sends "Beastle #N is
-- live" only to subscriptions with the flag set, once per day.
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
