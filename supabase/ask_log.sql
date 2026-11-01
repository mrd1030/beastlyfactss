-- Ask Beastly request log (docs/ASK_BEASTLY.md).
--
-- One row per question sent to POST /api/ask in public/_worker.js. Written to
-- be re-runnable, same as the other files here.
--
-- What is kept: the question as typed, the slugs of the pages it matched, and
-- what happened. What is not: no IP address, no visitor key, nothing that
-- identifies the reader. The per-visitor rate limit lives in Cloudflare KV
-- under a hash of the IP and the date, and is never written here.
--
-- result:
--   answered   the model answered from our sources
--   no_match   nothing on the site covered it (the weekly READER_GAPS.md list)
--   capped     the visitor's hourly limit or the site's daily limit was hit
--   refused    the model declined or errored; the reader got search results
--   legal      a legality question, answered with links to the legal pages
--
-- Only the worker writes, with the service role key, which bypasses RLS. RLS is
-- on with no policies, so anon and signed-in users can neither read nor write.

create table if not exists public.ask_log (
  id bigint generated always as identity primary key,
  question text not null,
  matched_slugs text[] not null default '{}',
  result text not null check (result in ('answered', 'no_match', 'capped', 'refused', 'legal')),
  created_at timestamptz not null default now()
);

create index if not exists ask_log_created_at_idx on public.ask_log (created_at desc);
create index if not exists ask_log_result_idx on public.ask_log (result, created_at desc);

alter table public.ask_log enable row level security;

revoke all on public.ask_log from anon, authenticated;
