-- ntfy pushes sent from Supabase instead of the Cloudflare worker
-- (owner, 2026-11-03).
--
-- ntfy.sh's free tier counts messages per sending IP address. Cloudflare
-- Workers send from addresses shared with a great many other sites, so the
-- daily quota is often used up before our push arrives and ntfy answers 429.
-- The Beastle, quiz and comment pings never had that problem: they go out
-- from Supabase through pg_net (site_events.sql, schema.sql). This function
-- gives the worker the same route.
--
-- public.ntfy_push(secret_name, payload): looks the topic up in Vault under
-- one of the allowed names, adds it to the payload and queues the POST to
-- ntfy.sh. Returns 'queued', or 'no topic' when that Vault secret does not
-- exist, in which case the worker falls back to its old direct push.
--
-- Each kind has its own ntfy topic, so each lands in its own chat in the app.
-- Create them once in the SQL editor (the topic names never touch the repo):
--   select vault.create_secret('<ask topic>',        'ntfy_ask_topic');
--   select vault.create_secret('<contact topic>',    'ntfy_contact_topic');
--   select vault.create_secret('<subscriber topic>', 'ntfy_subscriber_topic');
--
-- Only the service role (the worker) may call it. Nothing is stored in a
-- table of ours; pg_net keeps its own request queue until the POST is sent
-- and the response for a few hours, then drops them.
--
-- Applied as migrations ntfy_push and ntfy_push_trim_topic. Re-runnable.

create or replace function public.ntfy_push(secret_name text, payload jsonb)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  topic text;
begin
  if secret_name not in ('ntfy_ask_topic', 'ntfy_contact_topic', 'ntfy_subscriber_topic') then
    return 'not allowed';
  end if;
  -- Trimmed: a pasted topic can carry a space or line break ntfy refuses.
  select btrim(decrypted_secret, E' \t\r\n') into topic from vault.decrypted_secrets where name = secret_name;
  if topic is null or topic = '' then return 'no topic'; end if;
  perform net.http_post(
    url := 'https://ntfy.sh',
    body := payload || jsonb_build_object('topic', topic)
  );
  return 'queued';
end;
$$;

revoke all on function public.ntfy_push(text, jsonb) from public, anon, authenticated;
grant execute on function public.ntfy_push(text, jsonb) to service_role;
