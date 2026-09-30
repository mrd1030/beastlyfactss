-- Site activity pings: quiz completions, push opt-ins and new Critter
-- Keeper dragons ("beardies") land in
-- public.site_events, and each new row posts a notification to ntfy so it
-- shows up on the owner's phone.
--
-- Where the rows come from:
--   - Quizzes and Critter Keeper adoptions: the browser inserts directly
--     (src/lib/siteEvents.js). Anon may insert those kinds only, never read.
--   - Push opt-ins: a trigger on push_subscriptions.
--   - Comments are NOT logged here: notify_new_comment (blog_comments_notify)
--     already pings ntfy with Approve/Reject buttons, and this would double it.
--
-- The ntfy topic lives in Vault, never in the bundle, so nobody can read it off
-- the site and spam the phone. By default these pings reuse the comment
-- topic (ntfy_comment_topic). To split them onto their own topic:
--   select vault.create_secret('<your-topic>', 'ntfy_topic');
--
-- Flood guards: at most 300 anon rows per hour are accepted, and at most 20
-- pings go out per 10 minutes. Everything past that is still in the table.
--
-- Applied as migration site_events_ntfy. Re-runnable.

create table if not exists public.site_events (
  id bigint generated always as identity primary key,
  kind text not null check (kind in ('personality_quiz', 'themed_quiz', 'animal_quiz', 'push_opt_in', 'beardie_adopted')),
  label text not null default '' check (char_length(label) <= 160),
  created_at timestamptz not null default now()
);

-- Kinds added after the table first existed: create table if not exists
-- leaves the old check in place, so replace it.
alter table public.site_events drop constraint if exists site_events_kind_check;
alter table public.site_events add constraint site_events_kind_check
  check (kind in ('personality_quiz', 'themed_quiz', 'animal_quiz', 'push_opt_in', 'beardie_adopted'));

create index if not exists site_events_created_at_idx on public.site_events (created_at desc);

alter table public.site_events enable row level security;

drop policy if exists "anyone can log a quiz" on public.site_events;
create policy "anyone can log a quiz"
  on public.site_events for insert
  to anon, authenticated
  with check (kind in ('personality_quiz', 'themed_quiz', 'animal_quiz', 'beardie_adopted'));

revoke all on public.site_events from anon, authenticated;
grant insert on public.site_events to anon, authenticated;

-- Drops quiz rows past the hourly cap instead of erroring, so a flood can't
-- grow the table without bound and the reader never sees a failure.
create or replace function public.site_events_cap()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.kind in ('personality_quiz', 'themed_quiz', 'animal_quiz', 'beardie_adopted')
     and (select count(*) from public.site_events
          where created_at > now() - interval '1 hour'
            and kind in ('personality_quiz', 'themed_quiz', 'animal_quiz', 'beardie_adopted')) >= 300 then
    return null;
  end if;
  return new;
end;
$$;

drop trigger if exists site_events_cap on public.site_events;
create trigger site_events_cap
  before insert on public.site_events
  for each row execute function public.site_events_cap();

create or replace function public.site_events_ntfy()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  topic text;
  title text;
begin
  select coalesce(
    (select decrypted_secret from vault.decrypted_secrets where name = 'ntfy_topic'),
    (select decrypted_secret from vault.decrypted_secrets where name = 'ntfy_comment_topic')
  ) into topic;
  if topic is null or topic = '' then return new; end if;

  if (select count(*) from public.site_events where created_at > now() - interval '10 minutes') > 20 then
    return new;
  end if;

  title := case new.kind
    when 'personality_quiz' then 'Critter quiz finished'
    when 'themed_quiz' then 'Quiz finished'
    when 'animal_quiz' then 'Beastlypedia quiz finished'
    when 'push_opt_in' then 'New push subscriber'
    when 'beardie_adopted' then 'New Beardie adopted'
  end;

  perform net.http_post(
    url := 'https://ntfy.sh',
    body := jsonb_build_object(
      'topic', topic,
      'title', title,
      'message', coalesce(nullif(new.label, ''), title),
      'tags', jsonb_build_array(case new.kind when 'push_opt_in' then 'bell'
                                              when 'beardie_adopted' then 'lizard'
                                              else 'tada' end),
      -- Beastle finishes and new beardies buzz (3, default); quiz and push
      -- pings stay quiet in the shade (2, low).
      'priority', case when new.kind = 'beardie_adopted' or new.label like 'Beastle #%' then 3 else 2 end
    )
  );
  return new;
end;
$$;

drop trigger if exists site_events_ntfy on public.site_events;
create trigger site_events_ntfy
  after insert on public.site_events
  for each row execute function public.site_events_ntfy();

create or replace function public.log_push_event()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.site_events (kind, label) values ('push_opt_in', 'A reader turned on notifications');
  return new;
end;
$$;

drop trigger if exists log_push_event on public.push_subscriptions;
create trigger log_push_event
  after insert on public.push_subscriptions
  for each row execute function public.log_push_event();

revoke execute on function public.site_events_cap(), public.site_events_ntfy(),
  public.log_push_event() from public, anon, authenticated;
