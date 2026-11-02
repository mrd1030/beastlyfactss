# Ask Beastly

A reader asks a question in plain words and gets a 2 to 3 sentence answer drawn
only from our own pages, with links to the pages that cover it. Claude Haiku 5.5
writes the answer from the sections we send it and nothing else. If nothing on
the site covers the question, the reader is told so and no model is called.

The original spec is the "Ask Beastly Spec (Haiku only)" doc (owner, 2026-11-01).
This file is the spec as built. Where the build differs, it says why.

## Where readers find it

- **The chat, on every page.** A round button in the bottom right corner (above
  the phone tab bar) opens it. On a phone it is a sheet from the bottom; on
  wider screens a floating panel dragged by its header, or docked down the right
  edge as a sidebar over the page (the page does not shift, so an article stays
  centered). Minimize folds it to a small bar,
  close returns it to the button. Hidden on /composer/ and in the installed
  Beastle app. Code: `src/components/ask/AskBeastlyChat.jsx`, mounted by
  `AskBeastlyChatSlot.jsx` in AppLayout after the page settles, never during
  prerender.
- **The search page.** A query of three words or more shows an Ask Beastly
  button under the search box (Enter asks it too), with the answer full width
  above the results. Code: `src/components/search/AskBeastly.jsx`.
- **Today's history.** Both share today's questions and answers, kept in the
  reader's browser only (localStorage `beastly-ask-history`), like My Pack.
  It clears at midnight Eastern, or with the chat's clear button. Code:
  `src/lib/askBeastly.js`.
- Each question is answered on its own: no follow-up memory (owner, 2026-11-02).
- The answer arrives whole, not streamed, because the worker checks it (dashes,
  links, a cut sentence) before anyone sees it.
- Critter Keeper's floating dragon bubble is parked to free the corner
  (CRITTER_KEEPER.md).

## What it searches

`scripts/build-ask-index.mjs` turns every published page into chunks in
`.ask-index/chunks.json` (gitignored), about 8,000 of them:

| Type | What | Link |
|---|---|---|
| guide | every content/guides and content/blog article, split at each `##` | `/blog/<slug>/#<anchor>` |
| faq | each article's frontmatter FAQs | `/blog/<slug>/` |
| fun-facts | content/fun-facts, split at each `##` | `/blog/<slug>/` |
| fact | each fact in facts.js, with its FACT_SOURCES publisher | `/facts/<slug>/` |
| beastfile | each published Beastlypedia entry | `/beastlypedia/<id>/` |
| encyclopedia | each encyclopedia profile | `/encyclopedia/animal/<id>/` |
| glossary | each glossary term | `/glossary/#<slugify(term)>` |
| legal | legal guide sections, kept but never sent to the model | |

Skipped: Chronicles (content/short-story), `content/_scheduled-*`, care package
sources, `noIndex: true`, anything not `status: published`, and every Sources
section. Anchors follow TableOfContents.jsx. Cost placeholders and CostTable
rows resolve through src/lib/costs.js; ComparisonTables become one line per
row. A section over 450 words splits at paragraph breaks. The script also
writes `.ask-index/meta.json`: the searchAliases.js nicknames, the species list
with care guide ids, and the legal matrix's states and animals.

## The index in D1

`scripts/load-ask-index.mjs` loads it into the D1 database `ask-index`
(binding `ASK_DB`) through the Cloudflare REST API. Two slots, `chunks_a` and
`chunks_b`, each with an FTS5 table (porter stemming); a load fills the idle
slot, checks the row count, then flips `ask_meta.slot`, so readers never see a
half loaded index and a failed load leaves the live one alone. It never fails
the build.

It runs at the end of `npm run build` when the branch is main, or when
`ASK_INDEX_LOAD=1`, and only with `CLOUDFLARE_API_TOKEN` (D1 Edit) set. The
account ID is in the script.

## POST /api/ask

In `public/_worker.js`, listed in `public/_routes.json`. In order:

1. Turnstile with `TURNSTILE_SECRET_KEY`, skipped while unset (as the contact
   form does).
2. 5 questions per visitor per hour in KV `ASK_KV`, keyed on a hash of the IP
   and the Eastern date; no IP is stored. Off on the sharetest site (by host),
   so testing is unlimited and beastlyfacts.com always has it.
3. Legal questions never reach the model. A legal word, or a state name with
   own / have / keep / buy / get, returns links: the state's law page, the
   animal's law page and its legal guide.
4. Search: nicknames expanded, the named species used as a filter ("tortoise"
   also reaches sulcata and Russian), a few reader word synonyms (tank and
   enclosure, eat and feed, poop and droppings), a boost for the matching split
   care guide and for headings that name the question, and guides ahead of
   facts on care questions. A weak best match returns `no_match` with no model
   call.
5. 300 answers a day across the site in KV, resetting at midnight Eastern.
6. Haiku: the top 4 chunks, about 3,000 tokens at most, in `<sources>`, the
   question last.

Reply: `{ result, answer, links, emergency, species }`. `result` is answered,
legal, no_match, capped, refused or unavailable. Every link comes from the
chunks sent. On the sharetest site an answer also carries `sources`, the chunks
the model saw, for the source check.

## The model call

`claude-haiku-5-5`, `max_tokens` 300, thinking off, the system prompt below in
a cache block. Two differences from the original spec:

- **No temperature.** Haiku 5.5 rejects any non-default value with a 400.
- **The cache block does nothing yet.** The prompt is about 150 tokens, under
  the 512 token minimum, so it is never cached. It costs nothing to keep.

```
You answer animal and pet care questions for Beastly Facts using ONLY the text inside <sources>.
Rules:
- 2 to 3 short sentences. Plain words. No em or en dashes.
- If the sources do not answer the question, reply exactly: NO_ANSWER
- Never add facts, numbers, doses, or brands that are not in the sources.
- Keep hedges from the sources (can, may, often). Do not make them stronger.
- Never give medication doses. Never say a symptom is fine to wait out.
- Speak to the reader directly. Never mention the sources, "Source 2", or "the sources say".
- End with the title of the one source that answers best, in the form: READ: <title>
```

The "speak directly" rule was added after the first reader test, where six of
17 answers said "the sources say".

The worker turns NO_ANSWER into `no_match`, a refusal or an API error into
`refused` (the matched pages shown as plain links), dashes into "to" in a
number range and a comma elsewhere, and drops a half sentence cut by
`max_tokens`. The reader never sees an error.

## Emergency card

`emergency` is true when the question has a health word (not eating, won't eat,
lethargic, bleeding, prolapse, swollen, breathing, gasping, wheezing, seizure)
or the best match is a health guide section that has one. The original rule
counted any matched section, which turned the card on for feeding and substrate
answers. The page then shows "If this is happening now, call an exotics vet."
above the answer and the species' emergency card from its router hub under it
(species without a router hub get the line alone). Every answer ends with
"Answers come from our guides. Not a substitute for a vet."

## Logging

Supabase table `ask_log` (supabase/ask_log.sql): question, matched_slugs,
result (answered, no_match, capped, refused, legal), created_at. No IP. RLS on
with no policies; only the worker's service role writes. Once a week, pull
every `no_match` row into READER_GAPS.md: real questions the guides do not
answer yet.

## Setup

| Where | What |
|---|---|
| Anthropic Console | key `beastlyfacts-ask`; monthly spend limit $10 with an email alert |
| Cloudflare D1 | `ask-index`, bound as `ASK_DB` |
| Cloudflare KV | `ask-limits`, bound as `ASK_KV` |
| Pages secrets | `ANTHROPIC_API_KEY`; `CLOUDFLARE_API_TOKEN` (D1 Edit, for the build's load) |
| Already there on main | `TURNSTILE_SECRET_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |

The sharetest project builds with
`npx vite build && node scripts/build-ask-index.mjs && ASK_INDEX_LOAD=1 node scripts/load-ask-index.mjs`.
Main needs only its bindings and secrets; `npm run build` already ends with
both scripts.

## Cost

Haiku 5.5 is $0.10 per million input tokens and $0.50 per million output under
100,000 tokens a prompt. An answer is about 3,800 tokens in and 250 out, about
$0.0005, so 2,000 answers per dollar. The 300 a day cap holds the worst day
near $0.15. Misses cost nothing.
