-- Ask Beastly test site log (owner, 2026-11-06).
--
-- One row per question asked on the test site
-- (beastlyfactss-sharetest.pages.dev), written by public/_worker.js. Kept
-- apart from ask_log so the reader log, the gap list and the weekly counts
-- hold readers only. Same columns as ask_log plus the answer text, so a test
-- answer can be read back. Never pushed to the phone.
--
-- Only the worker writes, with the service role key. RLS is on with no
-- policies. Re-runnable.

create table if not exists public.ask_log_test (
  id bigint generated always as identity primary key,
  question text not null,
  matched_slugs text[] not null default '{}',
  result text not null,
  answer text,
  answer_slug text,
  router jsonb,
  created_at timestamptz not null default now()
);

create index if not exists ask_log_test_created_at_idx on public.ask_log_test (created_at desc);

alter table public.ask_log_test enable row level security;

-- The two columns briefly added to ask_log for test rows on 2026-11-06 come
-- out again, unless a test row already used them.
do $$
declare used boolean;
begin
  if exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'ask_log' and column_name = 'test') then
    execute 'select exists (select 1 from public.ask_log where test)' into used;
    if not used then
      alter table public.ask_log drop column if exists test;
      alter table public.ask_log drop column if exists answer;
    end if;
  end if;
end $$;
