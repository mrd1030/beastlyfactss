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
  centered). Minimize folds it to a small bar, close returns it to the
  button. Docked, both minimize and close tuck it into a tab on the right
  edge, and while it is open the same tab peeks out from behind the
  sidebar's left edge, so one tab opens it and tucks it away to show the
  article's own sidebar (owner, 2026-11-02). On a phone, while reading an
  article, the minimized bar and the round button slide off and fade with
  the bottom tab bar, and come back with it: a tap on the page, near the
  top, or at the end (owner, 2026-11-02). Hidden on /composer/ and in the installed
  Beastle app. Code: `src/components/ask/AskBeastlyChat.jsx`, mounted by
  `AskBeastlyChatSlot.jsx` in AppLayout after the page settles, never during
  prerender. The slot wraps the chat in an error boundary: an error inside it
  removes the chat, logs to the console and resets its saved layout, and
  never blanks the page (a drag after undocking once did, 2026-11-02).
- **The search page.** A query of three words or more shows an Ask Beastly
  button under the search box (Enter asks it too), with the answer full width
  above the results. Code: `src/components/search/AskBeastly.jsx`.
- **Conversations and history** (owner, 2026-11-02, on a Fable layout). The
  chat is an answer card, not a chat log. A conversation is up to 3 answers
  on one topic: the first question plus follow-ups ("what about babies?").
  A follow-up sends only the previous question as context, so the search
  keeps the animal and topic and Haiku sees "Earlier question: ..."; the
  previous answer is never sent. A question naming a different animal, a
  legal answer, or the 3 answer cap starts a new conversation. Only answers that gave the
  reader something count toward the 3 (answered, hub links, law answers,
  matched pages); a question the guides do not cover does not use one up
  (owner, 2026-11-02). Its reply reads "That one isn't in our guides yet. Try
  asking it another way, or search the site.", plus "If something seems wrong
  with your pet, a vet is the safest call." when the question sounds like a
  health problem. History is
  its own view (the clock button): the last 7 days of conversations, at most
  30, by day, each with its own delete and "Clear all" behind a confirm;
  tapping one opens it read only. Kept in the reader's browser only
  (localStorage `beastly-ask-history`), shared with the search page box,
  which always asks a fresh question. The vet line shows once, under the
  input. Legal cells show status, meaning and cite, with the rest under
  "Why". "Search the site" in a reply searches for the animal the reply
  names, not the whole question. Answer links to a section land on its
  heading (ScrollToTop waits for the lazy article body). Code:
  `src/lib/askBeastly.js`, `src/components/ask/`.
- Critter Keeper's floating dragon bubble is parked to free the corner
  (CRITTER_KEEPER.md).

## What it searches

`scripts/build-ask-index.mjs` turns every published page into chunks in
`.ask-index/chunks.json` (gitignored), about 8,500 of them:

| Type | What | Link |
|---|---|---|
| guide | every content/guides and content/blog article, split at each `##` | `/blog/<slug>/#<anchor>` |
| faq | each article's frontmatter FAQs | `/blog/<slug>/` |
| fun-facts | content/fun-facts, split at each `##` | `/blog/<slug>/` |
| fact | each fact in facts.js, with its FACT_SOURCES publisher | `/facts/<slug>/` |
| beastfile | each published Beastlypedia entry | `/beastlypedia/<id>/` |
| encyclopedia | each encyclopedia profile | `/encyclopedia/animal/<id>/` |
| glossary | each glossary term | `/glossary/#<slugify(term)>` |
| hub | each care guide hub: first week, emergency card and FAQs on router hubs; written sections, cost table and FAQs on dog and cat hubs (owner, 2026-11-02) | `/guides/<id>/` |
| legal | legal guide sections, kept but never sent to the model | |

Skipped: Chronicles (content/short-story), `content/_scheduled-*`, care package
sources, `noIndex: true`, anything not `status: published`, and every Sources
section. Anchors follow TableOfContents.jsx. Cost placeholders and CostTable
rows resolve through src/lib/costs.js; ComparisonTables become one line per
row. A section over 450 words splits at paragraph breaks. The script also
writes `.ask-index/meta.json`: the searchAliases.js nicknames, the species list
with care guide ids, the legal matrix's states and animals, every fact page's
url (`facts`, for "show me a fun fact"), and the words in more than 5% of the
searchable chunks with their counts (`common`, left out of the any-word
search). The output is deterministic: two builds of the same content match
byte for byte.

## The index in D1

`scripts/load-ask-index.mjs` loads it into the D1 database `ask-index`
(binding `ASK_DB`) through the Cloudflare REST API: `chunks_live` with an FTS5
table over it (porter stemming), and `legal_live`, the legal matrix
(src/lib/data/legalStatus.json) one row per animal and jurisdiction.

The load is incremental (owner, 2026-11-02). D1's free plan allows 100,000
written rows a day and the site can deploy many times a day, so every chunk
and legal cell carries a hash of its content; the load reads the live hashes
and writes only what is new, changed or gone. A new fact or an edited section
is a few rows, a build with no content change writes nothing, and only the
very first load (about 21,000 rows) writes everything. `ASK_INDEX_FORCE=1`
wipes and reloads. A load that fails partway leaves the old rows serving and
the next load finishes the job. It never fails the build.

Reads are a budget too (5,000,000 a day). Comparing chunk by chunk and
counting both tables read about 26,000 rows a build, and a night of branch
pushes every few minutes went over 100,000 rows read per 15 minutes
(2026-11-01). Now the load saves one hash over every chunk and legal cell
(`ask_meta.content_hash`); when it, the meta hash and the chunk count match
and both tables still hold rows, the load stops after reading about 6 rows.
A `COUNT(*)` reads the whole table in D1, so the check reads one row from
each instead. Push branch work with [CI Skip] unless a test build is
wanted; every sharetest build runs the load.

On 2026-11-01 repeated full reloads, before the incremental load existed,
wrote about 130,000 rows in one D1 day (the day resets at 00:00 UTC, 19:00
Eastern in winter). Over the limit, writes fail: the load logs "Ask index
load FAILED, live index left as it was" and the site keeps serving the old
index; anything stored in ask_meta (the fingerprint, `facts`, `common`)
waits for the next build after the reset. A missing `facts` or `common`
falls back to the normal search.

The sharetest project and main share this database. Since the merge
(2026-11-03) the sharetest build command is `npx vite build` again, so only
main loads the index; the test site reads the same index and writes nothing.
Test-site builds come only from a branch push without [CI Skip], at the
owner's word.

It runs at the end of `npm run build` when the branch is main, or when
`ASK_INDEX_LOAD=1`, and only with `CLOUDFLARE_API_TOKEN` (D1 Edit) set. The
account ID is in the script.

## POST /api/ask

In `public/_worker.js`, listed in `public/_routes.json`. In order:

1. Turnstile with `TURNSTILE_SECRET_KEY`, skipped while unset (as the contact
   form does). One success earns a 30-minute pass (owner, 2026-11-03): the
   expiry time signed with HMAC-SHA256 under the same secret, returned as
   `pass`, kept in localStorage `beastly-ask-pass` and sent with each
   question; while it is valid the widget is hidden and Turnstile skipped.
   Nothing is stored server side; a pass cannot be forged or stretched. The
   hourly limit and daily cap still apply. Before it, a token being single
   use meant the widget ran before every question.
2. 12 questions per visitor per hour (owner, 2026-11-02; a follow-up counts as
   a question) in KV `ASK_KV`, keyed on a hash of the IP
   and the Eastern date; no IP is stored. Off on the sharetest site (by host),
   so testing is unlimited and beastlyfacts.com always has it. Off for the
   owner signed in as admin (owner, 2026-11-03): in a browser that has
   signed in at /composer/ (localStorage `bf-auth`), the chat sends the
   Supabase session token, and the worker calls `is_admin()` with it, which
   checks the email against `app_admins`. One extra Supabase call per
   question from that browser only; no token, no call. The daily cap still
   applies to the admin.
3. Legal questions never reach the model. A legal word ("legal", "permit",
   "license", "what states", "where can I own"), or a state name or postal
   code with own / have / keep / buy / get, makes it a legal question. When it
   names an animal and a state, the reply carries that legal matrix cell word
   for word (owner, 2026-11-02): status with the law map's own label and blurb,
   cite, quote, note, existing owners, the local ordinance line and the date
   checked, laid out like a state row on the animal law page. An unclear rule
   shows its label and the links only. A cell never read shows "Not checked
   yet", never unrestricted. Always with links: the state's law page, the
   animal's law page and its legal guide.
4. "Where is it" questions (owner, 2026-11-02): a species with a care guide
   plus a request for a place on the site ("show me where the betta files
   are", "take me to the leopard gecko guide", "how to find the betta fish
   files") gets that species' hub as a link, result `navigate`, with no
   model call. "Files", "hub" or "section" with a species counts on its
   own, with no "where" or "find" needed. Any form of "where" counts
   (where's, wheres), and "find" but not "find out". A real "where"
   question ("where do bettas live in the wild") names no part of the site
   and goes to the search.
5. "Show me a fun fact" (owner, 2026-11-02): a question that says fact or
   facts and names no animal gets one fact at random from the facts page,
   as written, with links to that fact and to /facts/. No model call, one
   row read (by key, from the url list in `ask_meta.facts`). The site keeps
   no popularity count, so "most popular" gets a random one too. With an
   animal named, the normal search answers.
   "Which animal?" (owner, 2026-11-02, after Grok and Fable reviews): a
   question about a particular pet ("he's acting weird", "my baby won't
   eat") that names no animal and carries none from the last question gets
   "Which animal is this about? Tell me the species and I'll check our
   guides.", result `clarify`, no model call, not counted toward the 3. In
   the chat the reader's next message carries it: "a hamster" searches as
   "a hamster he's acting weird" (the client sends `context.clarify`; only
   then does a question naming an animal carry the last one along). Any he,
   she, it, they or "my pet" counts, whatever the question: with no animal
   there is nothing to answer, and the chat cannot see the page (a reader on
   the bearded dragon hub may mean that animal). A question choosing a pet
   ("my friend wants a pet, what's easy") never gets it.
   Small talk (owner, 2026-11-03): a message that is only a known phrase
   gets a reply in kind, result `greeting`, on the same terms as thanks.
   ASK_SMALL_TALK in the worker lists them by kind: greetings ("hi", "what's
   up", "how are you"), tests ("testing", "is this working"), questions
   about the bot ("who are you", "what can you do", "help"), goodbyes and
   reactions ("lol", "wow", "hmm"). Filler, punctuation, stretched letters
   ("heyyyy", "hiii") and a name ("beastly") around the phrase do not
   matter; anything more makes it a question. The chat sends from 2
   characters, so "hi" goes through. After "which animal?", a reply that
   still names no animal is a new question, not carried with the last one.
   Thanks (owner, 2026-11-02): a thank-you turn is skipped when the next
   question looks back for its follow-up context. A message that is only thanks or an
   acknowledgement ("thanks!", "ty so much", "ok cool, got it", "that
   helps") gets a short "You're welcome" back, result `thanks`: no search,
   no model call, not logged, not counted toward the hourly limit or the 3
   answers, and it stays in the conversation. Every word must be a thanks
   or filler word, so "thanks, what about babies?" is still a question.
   Before, thanks was all filler: alone it came back "not in our guides",
   and after an answer it re-asked the previous question.
   From the 20-question test (owner, 2026-11-02, Fable review):
   - A named animal keeps the search on that animal. When its pages do not
     match, the reply is "not covered" with its hub, never a whole-site
     search (that once linked the platypus for "my hamster is acting weird").
   - A vague change with the animal known ("acting weird", "not himself",
     "something's wrong", no sign named) gets a fixed reply written in code:
     "Our guides can't narrow down a change like that without a specific
     sign, so the safest move is to have an exotics vet (a vet for dogs and
     cats) look at your <animal>.", with the hub. No model call.
   - No animal named and the best passages each about a different animal
     ("how often should I clean the tank"): "Which animal?". Not when a best
     passage is general (a glossary term, a guide about no one animal), not
     for "what is" questions ("what is uvb"), not when choosing a pet.
6. Search: spoken filler dropped first (owner, 2026-11-02): "like", "um",
   "uh", "kinda", "idk", "lol" and stretched forms ("ummmm", "hmmm",
   "sooo"), so "like, um, a hamster" searches as "hamster". Then nicknames expanded, the named species used as a filter ("tortoise"
   also reaches sulcata and Russian), a few reader word synonyms (tank and
   enclosure, eat and feed, poop and droppings), a boost for the matching split
   care guide and for headings that name the question, and guides ahead of
   facts on care questions. A question that names a species and only general
   words ("how do I take care of a leopard gecko", "tips for a new hamster
   owner") ranks that species' hub first. A weak best match returns `no_match`
   with no model call.
   Rows read per search (owner, 2026-11-01, on a Fable recommendation): the
   species goes inside the full text match, so a species question reads
   about 110 rows instead of 6,000. A question with no species tries every
   word first; the any-word search runs when that found fewer than 4 (it
   briefly ran only on none, which missed "When do reptiles brumate?": the
   guides never say "reptiles"), and
   leaves out words in more than 5% of the chunks (`ask_meta.common`),
   keeping the two rarest if all are common, and skips an empty word list.
   Ranking happens inside the FTS index and only the top rows are joined.
   Measured on the test night: searches averaged 3,200 rows read, and one
   any-word search over common words read 8,120. Fable's estimate after the
   change is 250 to 400 per question; check the D1 query metrics once it is
   live. A legal question skips the search.
7. 1,000 answers a day across the site in KV (owner, 2026-11-02), resetting at
   midnight Eastern.
8. Haiku: the top 4 chunks, about 3,000 tokens at most, in `<sources>`, the
   question last.

Reply: `{ result, answer, links, emergency, species, followUp, health }`.
`result` is answered, navigate, clarify, thanks, legal, no_match, capped, refused or
unavailable. `followUp` says whether the question joined the conversation;
`health` marks a no_match that sounds like a health problem. On the sharetest
site an answer also carries `sources`, the chunks the model saw, for the
source check.

Links under an answer (owner, 2026-11-02, on a Fable recommendation): at most
two, each one a page the answer came from. First the page the model names
(READ). Second, a page it says it also used (ALSO, matched against the titles
sent), or else the species' care guide hub, unless the first link already is
the hub or its encyclopedia profile (one page with a toggle). Other search
hits never show: for "where do bettas live in the wild" they were a lifespan
line in a health article and a feeding article. With no READ, the top three
search hits.

## The model call

`claude-haiku-5-5`, `max_tokens` 300, thinking off, the system prompt below in
a cache block. Two differences from the original spec:

- **No temperature.** Haiku 5.5 rejects any non-default value with a 400.
- **The cache block does nothing yet.** The prompt is about 150 tokens, under
  the 512 token minimum, so it is never cached. It costs nothing to keep.

```
You answer animal and pet care questions for Beastly Facts using ONLY the text inside <sources>.
Rules:
- At most 3 short sentences, usually 2. Plain words. No lists. No em or en dashes.
- If nothing in the sources answers the question, reply exactly: NO_ANSWER. Do not describe a different condition instead.
- Never add facts, numbers, doses, or brands that are not in the sources. Take each claim from the section that actually states it; do not credit one section with another's words.
- Keep hedges from the sources (can, may, often). Do not make them stronger.
- Never give medication doses. Never say a symptom is fine to wait out or to watch for now.
- If a source calls the sign urgent, or lists it under "call the vet now", the first sentence tells the reader to call the vet the source names (reptile vet, rabbit-savvy vet) now. The remaining sentences say what the guides tie that sign to.
- Health gap: if the reader describes a sign, symptom, injury or change in the animal and no source names that sign, the first sentence is: "Our guides don't cover <the sign>, so the safest move is to have a <vet type the sources name, or an exotics vet> look at your <species>." You may add ONE sentence on the closest sign the guides do cover for the same body part or behavior. It starts with "While you wait, check" or "In the meantime, check", names that sign and how urgent it is, and never names a condition as the likely cause. Never write "the closest sign", "the guides cover", or "what I can tell you".
- Other gap: only when the reader asked for a non-health specific (a step, a number) that no source gives AND you have answered another part, add one sentence: "Our guides don't cover X." Never guess to fill a gap.
- Speak to the reader directly, in the site's own voice. Never comment on what the passages do or do not cover, agree on, or recommend: no "is covered in our guides", "the sources", "Source 2", "most sources agree", "according to veterinary sources", "I can't say", "I can't tell you", "I don't know", or any sentence about what you are unable to do. Write "our guides" at most once per answer, and only in a gap sentence.
- Say each point once. Do not restate it in other words.
- End with the title of the one source that answers best, in the form: READ: <title>
- Only if your answer also took a fact from a second source, add one more line: ALSO: <title>. Use titles exactly as given in <sources>.
```

The "speak directly" rule was added after the first reader test, where six of
17 answers said "the sources say". The "answer only part" rule followed the
source check, where the axolotl gills answer filled a gap with a cause no guide
gives. Behind both, the worker drops any sentence that talks about the sources
themselves ("the sources say", "Source 2 notes"); a source's own wording such
as "vet sources give a broader range" stays. An answer with nothing left
becomes `no_match`.

The prompt was rewritten on Fable's review of the third run (2026-11-02): the
gap rule had fired on nearly every health answer, sometimes contradicting the
answer itself, and pushed answers to 4 or 5 sentences. Now: at most 3
sentences, an urgent sign opens with "call the vet now", one "Our guides don't
cover X." sentence only when a specific thing asked is missing, and each claim
credited to the section that states it. The worker rewrites source talk
("the sources don't cover" to "our guides don't cover"; lead-ins such as
"Sources say" stripped) rather than cutting sentences, and keeps at most one
"not covered" sentence.

Health gap (owner, 2026-11-02, Fable wording): a sign the guides do not name
opens with "Our guides don't cover <the sign>, so the safest move is to have a
<vet> look at your <species>", plus at most one sentence on the closest covered
sign, worded as something to check, never as the cause (since tightened, see
the wording fixes below). When the reader names no sign at all ("acting
weird", "seems off"), only the first sentence: a "check" sentence there
would point at something the reader never said (2026-11-02, Grok and Fable). "I can't tell you"
and similar are cut by the cleanup. The owner considered adding "a fall or a
bump, watch it, vet if it gets worse" to jaw answers; it stays out: no guide
names a fall as a cause and the bearded dragon guide lists jaw swelling under
call the vet now. If it is ever added, it goes into the guide, researched.

Wording fixes (owner, 2026-11-02, on a Fable review of the live test):
answers said "stuck shed is covered in our guides", "the range most sources
agree on" and "according to veterinary sources", and a health-gap second
sentence read as a guessed cause. The prompt now bans comments on what the
passages cover or agree on, keeps "our guides" to gap sentences, and makes
the health-gap extra sentence start "While you wait, check" or "In the
meantime, check". The articles compare their own sources, so the worker also
rewrites that talk out of a sentence first ("the range most sources agree
on" becomes "the usual range", "according to ... sources" is cut, "X is
covered in our guides, and it" becomes "X") and drops a sentence only if
source talk is still left, so a number in it survives. Not yet checked
against live answers: rerun the three questions on the next test build.

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
result (answered, no_match, capped, refused, legal, clarify), answer_slug,
created_at. No IP. `answer_slug` is the page the model named (READ) on an
answered row; `matched_slugs` is in search order, so the pair shows how
often the model picked something other than the top hit (added 2026-11-02
on Grok's review). RLS on
with no policies; only the worker's service role writes. Once a week, pull
every `no_match` row into READER_GAPS.md: real questions the guides do not
answer yet.

Pushes to the owner's phone through ntfy (owner, 2026-11-02, on a Fable
recommendation). Since 2026-11-03 they go out from Supabase, not the worker:
ntfy.sh's free quota is per sending IP, Cloudflare's shared addresses use it
up, and pushes from the worker were refused with 429 (the Beastle pings,
sent from Supabase, always arrived). The worker calls
`public.ntfy_push('ntfy_ask_topic', payload)` (supabase/ntfy_push.sql), which
reads the topic from Vault and queues the POST through pg_net. The contact
form (`ntfy_contact_topic`) and new-subscriber alerts
(`ntfy_subscriber_topic`) use the same function, each its own chat in the
app. With no Vault topic the worker falls back to its old direct push with
`NTFY_ASK_TOPIC`. `ASK_NTFY_MODE`: `all` (the default) pushes every
question with its result and the page it came from; `gaps` pushes only
questions the site does not cover. Start with `all` while traffic is small,
switch to `gaps` once it passes about 10 a day. `capped` never pushes. An
answered push carries the answer and the title of the page the model took it
from (owner, 2026-11-02); other results show the closest page.

## Setup

| Where | What |
|---|---|
| Anthropic Console | key `beastlyfacts-ask`; monthly spend limit $10 with an email alert |
| Cloudflare D1 | `ask-index`, bound as `ASK_DB` |
| Cloudflare KV | `ask-limits`, bound as `ASK_KV` |
| Pages secrets | `ANTHROPIC_API_KEY`; `CLOUDFLARE_API_TOKEN` (D1 Edit, for the build's load); optional `NTFY_ASK_TOPIC` and `ASK_NTFY_MODE` |
| Already there on main | `TURNSTILE_SECRET_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |

The sharetest project builds with
`npx vite build && node scripts/build-ask-index.mjs && ASK_INDEX_LOAD=1 node scripts/load-ask-index.mjs`.
Main needs only its bindings and secrets; `npm run build` already ends with
both scripts.

## Cost

Haiku 5.5 is $0.10 per million input tokens and $0.50 per million output under
100,000 tokens a prompt. Measured in the reader test (Console usage,
2026-11-02): an answer averages about 1,850 tokens in and 130 out, about
$0.00025, so 4,000 answers per dollar. The 1,000 a day cap holds the worst day
near $0.25, about $7.50 a month, under the $10 Console spend limit, which is
the backstop. Misses and legal answers cost nothing.
