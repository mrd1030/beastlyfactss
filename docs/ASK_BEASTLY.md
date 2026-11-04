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
- **Beta** (owner, 2026-11-04). A small "Beta" pill (`BetaTag` in
  AskReply.jsx) sits next to the chat title and inside the search page's
  Ask Beastly button, not on the history view's title or the edge tab.
  Plain text, so a screen reader hears "Ask Beastly Beta". The empty chat's
  second line adds "Beastly is new and still learning, so if an answer
  misses, ask it another way."; the footer under the input stays as it was.
- **Conversations and history** (owner, 2026-11-02, on a Fable layout). The
  chat is an answer card, not a chat log. A conversation is up to 3 answers
  on one topic: the first question plus follow-ups ("what about babies?").
  A follow-up sends only the previous question as context, so the search
  keeps the animal and topic and Haiku sees "Earlier question: ..."; the
  previous answer is never sent. A question naming a different animal, a
  legal answer, or the 3 answer cap starts a new conversation.
  The conversation's animal carries (owner, 2026-11-04, from a real
  conversation: "I have a platy fish", "she has 3 babies and she has no
  food", then "what to feed them so that their colour can come out" got
  "which animal?", because only the last question travels and it named
  none). The client also sends the last animal the worker reported in the
  conversation (`context.species`, the name from the last reply that
  carried one); the worker checks it against the species list and uses it
  only on a follow-up where neither the question nor the previous one
  names an animal. A named animal always wins, the "another" fact rule is
  unchanged, and after "which animal?" a reply that names none is still a
  new question. Only answers that gave the
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
url, species and title (`facts`, for "show me a fun fact" and "chicken
facts"), each species' enrichment guide, gear page and hub (`gift`, for
"what is a good gift for my hamster"), the words in more than 5% of the
searchable chunks with their counts (`common`, left out of the any-word
search), and the care guide catalog by category (`catalog`, for "what
animals do you cover"). The output is deterministic: two builds of the same content match
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
owner's word. A new meta key the test site needs before main loads it can
be written straight into ask_meta (done once for `catalog`, 2026-11-03, 2
rows written); the next main load rewrites it with the same value.

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
5. Facts (owner, 2026-11-03, on a Fable design): a message that says fact
   or facts, whatever else is around it ("fun facts", "can you show me
   chicken fun facts"), gets one fact, result `fact`: a lead line "<Animal>
   fact: <title>" linked to the fact page, the fact as written without its
   Source line, then links to the fact page, the animal's care guide when
   it has one, and More facts (/facts/). The animal is the one named, else
   the one carried from the last turn, else any. A fact reply keeps its
   animal for the next turn: the client sends the fact's url as
   `context.fact`, the worker takes the animal from it when the last
   question names none, skips that fact on the next pick, and takes a bare
   "another", "one more" or "next" after it as a fact ask. An animal with
   no facts (or whose only fact was just shown) gets "No <animal> facts
   yet" with its care guide, then a fact of another animal in the same
   format. No model call, one row read: the pick comes from
   `ask_meta.facts` (url, species and title per fact), the text by key.
   "How many facts do you have" stays a catalog count. The site keeps no
   popularity count, so "most popular" gets a random one too. Counts
   toward the 3 answers.
   A bare animal name ("the chicken", "chickens", "a hamster" that is not
   the answer to "which animal?") gets its hub as a link (result
   `navigate`), or with no hub a fact of it in the fact format. Never the
   model.
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
   Frustration (owner, 2026-11-04, from a real conversation that ended "U
   are useless"): "useless", "this is dumb", "you suck", "not helpful",
   "stupid bot", "wrong", "not what I asked", "you didn't answer my
   question" and the like are a `frustrated` group in ASK_SMALL_TALK, on
   the same terms (result `greeting`, no model call, not logged, not
   counted). One of four short apologies, never an argument, each pointing
   to the search and the contact page, with "Search the site" (/search/)
   and "Contact page" (/contact/) as links; a small talk group may carry
   links, and the chat shows them under the line. "ugh" stays a reaction.
   Statements (owner, 2026-11-04, from the same conversation: "I have a
   platy fish" went to the model, which answered from the cost guide, and
   "I love my platy fish" came back not covered): a message that names an
   animal and asks nothing gets a warm line and the animal's pages, result
   `statement`, no model call. The rule (askStatement, after the new-pet
   rule, before the gift rule, on the reader's own words): no question
   mark, an opener like "I have", "I love", "we keep", "we just named"
   (ASK_STATEMENT_RE) or "my <animal> is the best / so cute / my favorite"
   (ASK_STATEMENT_NICE_RE), and once those words, the animal and a few
   fillers are out nothing is left, except up to two words after "named" or
   "called" (the pet's name). "I have a platy fish, how often do I feed her"
   leaves "often feed" and is a question; "my dog is fat" is not a
   compliment and goes to the search; "I got a leopard gecko, what do I do"
   is a new pet, checked first. Not as the reply to "which animal?", where
   the name answers that question. Reply with a hub: "A platy! Everything
   we have on the platy starts with its care guide. Ask me anything about
   yours, from feeding to health, and I'll check the guides." with the hub
   (the guide id, or the hub `ask_meta.gift` names for Dog and the
   breeds). No hub: "A platypus! We don't have a care guide for the
   platypus, but its Beastlypedia entry has the essentials. Ask me anything
   about it and I'll check what we have." with the encyclopedia entry
   (first) or the Beastlypedia entry, found through the FTS index on the
   species name (about 200 rows at most, never a scan of the chunks
   table); with neither, a fact page ("but we do have a fact or two"), and
   with nothing "We don't have a guide on the <animal> yet, but ask me
   anything and I'll check what we have." Logged as `answered` with the
   page as the slug and `answer_slug` (no new log result), pushed as
   Answered. Not counted toward the 3 (nothing was asked), but it joins
   the conversation, so the animal carries to the next question. "Platy
   fish" alone is the platy: a "fish" after a fish's name is part of the
   name in the bare-name, where-is and new-pet rules (it went to the model
   before).
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
   "What's on the site" (owner, 2026-11-03): "what animals do you cover",
   "how many animals are in the guides", "can you list the reptiles you
   have", "do you have anything on frogs", "which fish do you have" are
   answered from the catalog, result `catalog`, no search, no model call,
   counted toward the 3 like a hub link. The build counts it
   (`ask_meta.catalog`: the eleven category pages in the guides page's
   order, each with its slug and the names of its animals and breeds, plus
   the total), so no number is typed into code and a new guide changes the
   reply on the next build. Group hubs (tetras, livebearers, the dog and
   cat essentials, the dog size pages) are not animals and are left out.
   The rule, resolved in `askRetrieve` after the legal check and before the
   pronoun check: a catalog word (list, how many, what/which
   animals/species/pets, do you have/cover, anything on, guides on, in the
   guides, on the site), no care word (ASK_CARE_RE), and no species named,
   or only a group word. ASK_GROUPS maps group words to category pages:
   reptiles are geckos, lizards, snakes and turtles-tortoises; frogs,
   toads, newts and salamanders are amphibians; rodents, hamsters, rabbits
   and mammals are small-mammals; bugs, insects, spiders, tarantulas,
   shrimp and scorpions are invertebrates; parrots are birds; kittens are
   cats, puppies are dogs; and each category's own name. A group word that
   is also a species in the index ("snake", "gecko", "hamster") counts as
   the group here. Three replies: a count ("how many": the total and the
   groups with their counts, link to /guides/), a group listing (the count,
   up to 8 names in turn across the categories then "and N more", one link
   per category page), and the general one ("what do you have": the
   breakdown plus the facts and legal counts, links to /guides/, /facts/
   and /exotic-pet-laws/). "How many facts do you have" gives the facts
   count. After a catalog answer, a follow-up that only names a group
   ("what about snakes?") lists it. "Do you have a guide on axolotls" names
   a species, so it is a where-is question and gets the hub (ASK_HAVE_RE
   joined the where-is words for that); "what do reptiles eat" has a care
   word and goes to the search.
   Gifts (owner, 2026-11-03, on a Fable design): "what is a good gift for
   my hamster", "christmas present for my cat", "gift for someone who loves
   frogs" get an instant reply, result `gift`, no search, no model call,
   counted toward the 3 like a hub link. The rule (ASK_GIFT_RE, resolved
   after the legal and new-pet checks, before the catalog and pronoun
   checks): a gift word (gift, present, stocking stuffer, "something to buy
   for"), or an occasion (birthday, Christmas, the holidays, Hanukkah,
   Valentine's; ASK_OCCASION) with buy or get, and no treat or snack word:
   "what treats can I give my
   bearded dragon" is a feeding question and goes to the search, and "can I
   give my dog grapes" has no gift word. The animal is the one named or
   carried as usual. The reply is one line in the chat's own voice, then
   the animal's enrichment guide and its gear page, both from
   `ask_meta.gift` (per species as its chunks name it: the enrichment
   article's url and short name, the gear page url for the 97 animals in
   gear-by-animal.json, and the hub id). Whichever exists is linked; with
   neither, the hub. A group word alone (frogs, geckos) gets its category
   page, and a species with no guide gets /guides/. The affiliate line
   ("The gear page carries affiliate links. As an Amazon Associate I earn
   from qualifying purchases, at no extra cost to you.") travels as
   `disclosure` and shows under the links only when the gear link is there
   (FTC: disclosure next to the link). A gift for a person ("someone who
   loves frogs", "a frog lover", "my friend who has a gecko",
   ASK_GIFT_PERSON_RE) adds "For the person, a care package from our store
   is the gift that fits." and a third link, Beastly Facts care packages
   (/care-packages/store/); a gift for the pet never does. No animal ("good
   gift for a pet lover"): "Which animal is the gift for? Tell me the
   species and I'll point you to the right pages.", result `clarify`, and
   the next message carries the question, so "a hamster" answers it as a
   gift. Logged as `answered` with the pages as the slugs and the first
   link as `answer_slug`; the clarify as `clarify`. No new log result.
   A new pet (owner, 2026-11-03, from the phone test, on a Fable design):
   "I got a leopard gecko, what do I do", "I was gifted a pet", "I was
   given a hamster", "my mom got me a bearded dragon for christmas, what
   now", "just got a betta, help", "surprise gift, what do I do" get a line
   and the animal's care guide hub, result `new_pet`, no search, no model
   call, counted toward the 3 like a hub link. Before the test, "I was
   gifted a leopard gecko, what do I do" went to the search and came back
   not covered ("gifted" is not a gift word), and "surprised gift, what do I
   do" after a dog gift question got the dog gift list again. The rule
   (askNewPet, resolved after the legal check and before the gift rule, on
   the reader's own words): the pet arrived, said one of three ways, the
   reader got it (ASK_GOT_RE: I got, we adopted, just bought, I was given,
   I was gifted, picked up, brought home), someone gave it (ASK_RECEIVED_RE:
   gifted, got me, gave us, as a gift, it was a surprise, my mom got a),
   or a surprise with a "what do I do" and no "for" (ASK_SURPRISE_RE:
   "surprise gift for my hamster" is shopping); and nothing else asked: once
   the arrival words, the "what now" words (ASK_NEW_PET_ASK_RE: what do I
   do, what now, where do I start, help, tips, advice), the animal, an
   occasion, the giver and a few fillers (ASK_NEW_PET_FILLER_RE, and the
   "tell me about it" words) are taken out, no word may be left. "I got a
   hamster, what should I feed him" leaves "feed" and goes to the search as
   before. The animal is the one named in the message, never one carried
   from the last question: a received pet is not the one just shopped for.
   Reply: "Congrats on the new leopard gecko. Start with its care guide:
   setup, feeding, handling and health are all in there." with the hub,
   from the species' guide id or the hub `ask_meta.gift` names (Dog, Golden
   Retriever: no guide id of their own). A group word alone (gecko, frog):
   "Congrats on the new frog. Each species needs a different setup, so find
   yours in the amphibian care guides and start there." with the category
   page (the reader's word for the animal, the group's for the guides). A
   species with no guide (platypus): "We don't have a platypus care guide
   yet. The care guides cover the common pets, and that's the place to
   look." with /guides/. No animal: "Which animal did you get? Tell me the
   species and I'll point you to its care guide.", result `clarify`, and the
   next message names it ("a leopard gecko", "a gecko", "hamster"); a reply
   that asks something else ("a hamster, what should I feed him") is a
   question of its own and takes the normal follow-up path, and one that
   only says again that it arrived ("it was a surprise") is asked again.
   Logged as `answered` with the hub
   as the slug and `answer_slug`; the clarify as `clarify`. No new log
   result, and no disclosure: no gear link is shown.
   "Is the gecko the gift?" (owner, 2026-11-03, from the phone test): an
   occasion and an animal with no gift word and no buy or get ("gecko for
   birthday", "gecko for her birthday", "leopard gecko for christmas", "a
   hamster for my son's birthday") could mean the animal is the gift or the
   gift is for someone who has one, so the reply asks: "Is the gecko the
   gift, or is the gift for someone who has one?", result `clarify`, not
   counted. Before, these went to the search and came back not covered. The
   rule (askDirectionAsk, after the gift rule): ASK_OCCASION, an animal or
   group word, and nothing else once the occasion, the person words and a
   few fillers are out; a treat or care word, or any other word ("is a
   christmas tree safe for my cat") leaves it to the search. When the person
   is already clear ("a gecko for a gecko lover's birthday", "for someone
   who has one", ASK_GIFT_CLEAR_PERSON_RE) it is the gift reply for a
   person, with no question. The next message answers it
   (askDirectionAnswer): "the gecko is the gift", "it's the gift", "yes",
   "getting her one" or just the animal's name gets the new-pet reply in its
   giving form ("Giving a leopard gecko means giving its setup too, so start
   with its care guide: setup, feeding, handling and health are all in
   there."); "someone who has one", "she already has one", "no", "for her
   gecko" gets the gift reply for a person (care packages included); "for my
   gecko" the gift reply for the pet. The animal is the one in the question
   asked, or the one the reply names. A reply that says anything else
   ("what do leopard geckos eat") is a question of its own. A bare "yes" or
   "no" is small talk everywhere else; right after this question it is the
   answer (askAnswersDirection, checked before the small talk reply).
   How a follow-up knows which question it answers: the client only says a
   clarify came before (`context.clarify`), so the worker reads the last
   question again with the same rules that chose the clarify the first
   time (askClarifyKind): an occasion question with no direction asked "is
   the gecko the gift?", an arrival with no animal asked "which animal did
   you get?", and anything else asked "which animal?" (the gift one or the
   pet one), which the existing follow-up path answers by carrying the last
   question along. Nothing new travels from the client.
6. Search: spoken filler dropped first (owner, 2026-11-02): "like", "um",
   "uh", "kinda", "idk", "lol" and stretched forms ("ummmm", "hmmm",
   "sooo"), so "like, um, a hamster" searches as "hamster". British
   spellings the guides write the US way are mapped first (owner,
   2026-11-04: "so that their colour can come out" matched nothing):
   colour, behaviour, favourite, litre, fibre, mould and odour, on the
   word's front so colours, coloured and colourful follow (ASK_BRITISH).
   "grey" stays as typed: the site keeps it in names (African grey,
   greyhound) and a search for "gray" would miss them. Then nicknames expanded, the named species used as a filter ("tortoise"
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
`result` is answered, fact, gift, new_pet, statement, navigate, catalog, clarify, thanks, greeting, legal, no_match,
capped, refused or unavailable. A `greeting` reply may carry links (the
frustration apology links the search and contact pages). A `gift` reply also carries `disclosure`, the
affiliate line, empty unless a gear link is among the links. A `fact` reply also carries `fact` (url,
title, animal) and `missing` (the animal that had none), and is logged as
answered with the fact's url. `followUp` says whether the question joined the conversation;
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
result (answered, no_match, capped, refused, legal, clarify, catalog),
answer_slug, created_at. Hub links, facts, gifts, new pets and statements
are logged as `answered` with the page as `answer_slug`; small talk, thanks
and the frustration apology are not logged. No IP. `answer_slug` is the page the model named (READ) on an
answered row; `matched_slugs` is in search order, so the pair shows how
often the model picked something other than the top hit (added 2026-11-02
on Grok's review). RLS on
with no policies; only the worker's service role writes. Once a week, pull
every `no_match` row into READER_GAPS.md: real questions the guides do not
answer yet.

Kept 12 months (owner, 2026-11-04): the pg_cron job `ask-log-retention`
(supabase/ask_log_retention.sql) deletes older rows daily at 08:20 UTC. The
privacy policy, section 6, promises it, so it stays scheduled. Questions
asked on the sharetest host are neither logged nor pushed (owner,
2026-11-04), so the gap list and weekly counts hold readers only.

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

## Upkeep

What keeps it answering (Fable review, 2026-11-04), by risk:

1. Cloudflare KV free plan: 1,000 writes a day, reset 00:00 UTC. A question
   takes 1 write (hourly limit) plus 1 for each answer, so roughly 500 to 900
   questions a day use it up. The hourly limit fails open since 2026-11-04 (a
   failed KV call lets the question through instead of answering every visitor
   with nothing); the daily cap's write sits inside the answer's try, so a
   failure there shows links. Workers Paid ($5 a month, 1 million KV writes)
   removes the ceiling if the KV dashboard shows more than about 400 writes a
   day.
2. Anthropic credits and the $10 Console spend limit: a dead balance or the
   limit turns every answer into links ("No answer, links shown" on the
   phone). Auto reload on in the Console.
3. `NTFY_TOKEN` on the Pages Production environment: the contact form awaits
   ntfy and shows an error when ntfy refuses the shared anonymous quota.
4. Model retirement: `claude-haiku-5-5` retires no sooner than 2027-10-07,
   with at least 60 days' email notice. A retired model also shows as links.
   Swap `ASK_MODEL`, mind the `thinking` field (Sonnet 5.5 rejects
   `disabled`), and rerun docs/ASK_BEASTLY_TEST.md on the sharetest host first.
5. D1 and Supabase limits: not close. Never run `ASK_INDEX_FORCE=1` twice in
   one UTC day.

The sharetest host is behind Cloudflare Access since 2026-11-04, which also
covers its `/api/ask`, so its open hourly limit, returned sources and the
Sonnet switch (`ASK_MODEL_COMPARE`) are the owner's only.

## Open items

Left for later on purpose (owner, 2026-11-03); pick back up if the log
shows them on real questions.

- **Guides that cite their sources inline.** Some article bodies say "per
  veterinary sources" or "enthusiast sites cite" next to a figure (the
  bearded dragon feeding guide's hatchling schedule, for one). Haiku copies
  the phrase, and the clean-up's backstop then drops the whole sentence, so
  an answer can come out shorter than it should (2 of 6 runs of "what about
  babies" after the bearded dragon feeding question lost the hatchling
  line). A content decision, under docs/RULES.md: reword those passages, or
  leave them and change the backstop to strip the phrase instead of the
  sentence.
- **Clean-up next steps, if needed:** on the test site only, return the
  model's raw text with the cleaned answer, to see exactly what gets cut;
  the backstop strips the phrase and keeps the sentence unless what is left
  is under about 4 words; "per X sources" and "X sources cite / put / give /
  list / report" join the speaker rule; the "some suggest" rule also takes
  "and", "with" and "or" (the betta feeding answer said "and some suggest
  up to three smaller meals").
- **Choosing a pet.** "What is the best pet as a gift" and "my friend wants
  a pet, what is easy for a kid" come back not covered; they need a search
  built around the comparison and beginner pet articles.
- **Two wording slips seen in that run.** Cutting "the guide says" can leave
  a broken sentence ("For fry, to feed infusoria several times a day"), and
  the urgent-sign rule's own wording ("what the guides tie that sign to")
  comes back as "Our guides tie wheezing to...". Neither changes a fact.
  Still open for those two shapes; the "so the guide suggests" family is
  fixed, see below.

Fixed (2026-11-03, on a Fable review of the bearded dragon worm answers):

- A speaker plus verb after "so", "which is why" or "and so" ("They are
  high in fat, so the guide suggests keeping them to occasional feedings")
  left ", so keeping them to occasional feedings". The whole clause goes now
  (`ASK_SO_ATTRIBUTION_RE`), leaving "They are high in fat."
- One topic word between the determiner and the speaker ("the feeding guide
  recommends") left "the feeding". The speaker rule allows the word.
- "though some sources recommend daily greens" left "though daily greens".
  The "though some ... recommend" rule now runs before the speaker rule and
  takes "sources" or "guides" after "some", giving ", or daily greens".
- Routing: "eaten" and "ate" join the eat synonym group, and "hasnt havent
  hadnt didnt wasnt arent werent" are stopwords, so "my bearded dragon hasnt
  eaten in 3 days" lands on the feeding guide's When to Worry.
