-- Beastle daily results, for "how did everyone else do": one row per
-- finished daily puzzle, written by the browser, read back only as totals
-- through get_beastle_stats. Archive and unlimited games are never logged.
--
-- Applied as migration beastle_results. Re-runnable.

create table if not exists public.beastle_results (
  id bigint generated always as identity primary key,
  day integer not null check (day >= 1),
  -- Guesses it took, or null for a miss.
  guesses smallint check (guesses between 1 and 6),
  created_at timestamptz not null default now()
);

create index if not exists beastle_results_day_idx on public.beastle_results (day);

alter table public.beastle_results enable row level security;

-- Insert only, and only for today's puzzle on the site clock (a day of slack
-- either side for devices whose clocks are off). Beastle #1 is 2026-09-28,
-- matching EPOCH in src/lib/beastle/day.js.
drop policy if exists "anyone can log a finished daily" on public.beastle_results;
create policy "anyone can log a finished daily"
  on public.beastle_results for insert
  to anon, authenticated
  with check (
    abs(day - (((now() at time zone 'America/New_York')::date - date '2026-09-28') + 1)) <= 1
  );

revoke all on public.beastle_results from anon, authenticated;
grant insert on public.beastle_results to anon, authenticated;

-- A ceiling per day so a script cannot flood one day's totals without limit.
create or replace function public.beastle_results_cap()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (select count(*) from public.beastle_results where day = new.day) >= 100000 then
    return null;
  end if;
  return new;
end;
$$;

drop trigger if exists beastle_results_cap on public.beastle_results;
create trigger beastle_results_cap
  before insert on public.beastle_results
  for each row execute function public.beastle_results_cap();

-- Totals for one day: players, solves, and how many solved in 1..6 guesses.
create or replace function public.get_beastle_stats(p_day integer)
returns json
language sql
stable
security definer
set search_path = public
as $$
  select json_build_object(
    'played', count(*),
    'wins', count(guesses),
    'dist', json_build_array(
      count(*) filter (where guesses = 1),
      count(*) filter (where guesses = 2),
      count(*) filter (where guesses = 3),
      count(*) filter (where guesses = 4),
      count(*) filter (where guesses = 5),
      count(*) filter (where guesses = 6)
    )
  )
  from public.beastle_results
  where day = p_day;
$$;

revoke all on function public.get_beastle_stats(integer) from public;
grant execute on function public.get_beastle_stats(integer) to anon, authenticated;
revoke execute on function public.beastle_results_cap() from public, anon, authenticated;
