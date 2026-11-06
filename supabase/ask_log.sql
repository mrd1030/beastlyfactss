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
--   clarify    a pet named only by "he" or "my baby": the reply asked which
--              animal (owner, 2026-11-02)
--   catalog    "what animals do you cover": answered from the build's counts
--              with links to the category pages (owner, 2026-11-03)
--
-- answer_slug: on an answered row, the page the model named as its source
-- (READ). matched_slugs is in search order, so the two side by side show how
-- often the model picked something other than the top hit.
--
-- router (owner, 2026-11-04): what the router (one Haiku call that reads
-- each question, docs/ASK_BEASTLY.md "The router") made of the question:
--   {"animal": "Rabbit", "group": null, "unknown": null, "switched": false,
--    "kind": "care_question", "search": "droppings shape"}
-- or {"failed": "timeout"} when the rules ran alone (timeout, http 529,
-- refusal, cut off, invalid, no key, error), or null when the router was
-- not asked (small talk, thanks, legal questions, replies to the chat's own
-- questions). Derived from the question, nothing more; the worker retries
-- an insert without it when the column is missing, so no row depends on it.
--
-- Test site questions are not here: they go to ask_log_test
-- (supabase/ask_log_test.sql, owner, 2026-11-06).
--
-- Only the worker writes, with the service role key, which bypasses RLS. RLS is
-- on with no policies, so anon and signed-in users can neither read nor write.

create table if not exists public.ask_log (
  id bigint generated always as identity primary key,
  question text not null,
  matched_slugs text[] not null default '{}',
  result text not null check (result in ('answered', 'no_match', 'capped', 'refused', 'legal', 'clarify', 'catalog')),
  answer_slug text,
  router jsonb,
  created_at timestamptz not null default now()
);

-- Added 2026-11-02 to a table that already existed; 'catalog' joined the
-- check on 2026-11-03; router on 2026-11-04.
alter table public.ask_log add column if not exists answer_slug text;
alter table public.ask_log add column if not exists router jsonb;
alter table public.ask_log drop constraint if exists ask_log_result_check;
alter table public.ask_log add constraint ask_log_result_check
  check (result in ('answered', 'no_match', 'capped', 'refused', 'legal', 'clarify', 'catalog'));

create index if not exists ask_log_created_at_idx on public.ask_log (created_at desc);
create index if not exists ask_log_result_idx on public.ask_log (result, created_at desc);

alter table public.ask_log enable row level security;

revoke all on public.ask_log from anon, authenticated;
