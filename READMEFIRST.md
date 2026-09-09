# READ ME FIRST: starting a new session on BeastlyFacts

Point a new Claude Code session at this file. It says where things are,
what state the site is in, and what to do next. Read CLAUDE.md and
docs/RULES.md after this; they carry the writing and workflow rules and win
over anything here.

## Ground rules that cost money or trust when broken

- Work on a branch. Branch pushes are free (no build). Only main builds
  and deploys. Never push main unless Mike says so in the session. Use
  `[CI Skip]` in the head commit when a main push touches only docs, the
  ledger, or the baseline.
- Never use em or en dashes anywhere. Split the sentence or use a colon.
- Never change a fact, number, hedge, link target, component, affiliate
  link, date, tag, or Sources entry unless the task is that change. Hedges
  ("can", "may", "often", "should") are facts.
- Mike's original sentences are not sacred (decided 2026-09-08). If an
  edit makes the article better for a reader, make it: cut a section that
  restates an earlier one, cut a warning said three times, cut the site
  talking about itself, tighten a sentence. The line above still holds
  (facts, numbers, hedges, links, dates), and every original sentence
  changed gets reported with before and after so Mike can veto.
- At most two agents running at once. Opus for mechanical rewrites, Fable
  for judgment, research, and reading. One series or batch per session.
- Content dates use US Eastern. Cloud sessions run UTC and tick over at
  8pm Eastern: `TZ=America/New_York date +%F`.
- Research means web search with sources you opened. Three to five per
  article. Never cite a page you did not load. Sources are for facts;
  retailer product pages never go in Sources. Retail prices get one plain
  "Prices last checked <Month Year> at ..." line under the last cost table.

## Where things live

| What | Where |
|---|---|
| Writing rulebook | docs/RULES.md ("Writing an article" section) |
| Voice checker, runs in front of `build` | scripts/check-voice.mjs (`--slug`, `--match <regex>`, `--strict`, `--write-baseline`, `--json`) |
| Legacy failures the strict gate skips | scripts/voice-baseline.json (111 slugs, all standalone blog posts outside any series) |
| Voice pass command | .claude/commands/voice-pass.md, run as `/voice-pass <regex> [limit N] [go]` |
| Thin-article expansion plan | docs/BEEF_UP_PLAN.md (batches 1 to 5) |
| Expansion command | .claude/commands/beef-up.md, run as `/beef-up <batch> go` |
| Article content | content/{guides,blog,fun-facts,short-story}/*.mdx |
| Article page renderer | src/pages/Blog.jsx (title, excerpt block, FAQ list, schema) |
| MDX components | src/components/mdx/ (ComparisonTable, FunFact, AffiliateLink, DemotedH1, ...) |
| Related-links wiring | src/lib/data/relatedArticles.js, enforced by scripts/check-related-articles.mjs |
| Firsthand byline notes | src/lib/data/firsthand.js |
| Care package sources | content/CAREPACKAGE Guides/source/*.html |
| Reader set test write-ups, per species | docs/READER_REVIEWS.md |
| Reader set test raw output and the running "not covered anywhere" list | docs/READER_LOG.md |

## State as of 2026-09-08 (evening)

- Voice pass: done across every series (handling, enrichment, tank setup,
  cost, health, feeding, legal, overview, vs, 10-surprising). The strict
  gate passes. The 111 baseline slugs are one-off blog posts; they are the
  only articles still failing, and nobody has decided whether to pass them.
- Display fixes: done and on main. The body H1 renders nothing
  (src/components/mdx/DemotedH1.jsx), the excerpt block no longer renders
  on article pages at all (branch claude/more-on-block; the
  `ledeMatchesExcerpt` skip caught 196 of 435 near-copies, so the block
  went), and FAQ answers cannot carry a markdown link (`faq-link` rule).
- Beef-up: batches 1 to 5 are on main, each fact-checked against every
  cited source and checked by a second session. Three batch 5 articles
  (toad, millipede, cockroach) carry two sources, not three, by decision.
  Batches 6 to 10 (pick-up sections for the hands-on handling guides) are
  scoped in docs/BEEF_UP_PLAN.md and not started.
- Article pages, 2026-09-08 (branch claude/more-on-block, merged): the
  Deep Dive list prerenders (the sidebar used to be the string
  "Loading..." in every static page) and opens with a "<Species> care
  guide" row; on phones it renders as "More on the <Species>" after the
  FAQ (src/components/blog/MoreOnSpecies.jsx), on desktop only in the
  sticky sidebar. The excerpt block is gone from article pages. The
  contents card highlights the current section. Subscribe is last on
  phones, You Might Also Like is desktop only, Random Fact draws from
  facts under 50 words.
- Linking pass, done 2026-09-08 across all 532 species series guides
  (RULES, Linking): no same-species sibling links, no care-guide sentence,
  no link-only sentences, no site self-reference in prose; the Deep Dive
  carries the care guide and every sibling. In-body links across the
  series went from 4,339 to 1,251, all of them cross-species, encyclopedia,
  overview, or the one allowed sibling with a reason. sibling-link is now a
  checker error. Every edit to Mike's original text is listed in the
  commit messages of the linking-pass branches (small mammals, reptiles,
  birds, rest).
- Date rule, decided 2026-09-08: navigation-only and FunFact edits do not
  bump lastUpdated or lastReviewed. Only a fact added or reviewed does.
- The 111 baseline blog posts: noted, left alone for now.
- Sources rule: retailer product pages never go in Sources. Cost guides
  carry one plain "Prices last checked <Month Year> at ..." line under the
  last cost table instead.
- Care packages: analyzed, not edited. Leaner than the site on
  intensifiers (1.2 per 1,000 words). No action planned.
- Hubs, 2026-09-08 (branch claude/hub-rabbit-bd, on top of
  claude/reader-tests): the rabbit and bearded dragon hubs are router
  hubs (RULES, Hubs): first-week numbers copied from the deep dives with
  a link per row, emergency card from the health guide, one line per
  deep dive, buy list without prices, three copied FAQs; the package
  card stays in the sidebar. The whole-guide print modal is gone from every hub;
  the print icon (router hubs only) prints the emergency card and the
  setup checklist. src/pages/GuideDetail.jsx renders both shapes.
  scripts/check-species-numbers.mjs lists conflicting figures per
  species. The rabbit and bearded dragon deep dives got the fixes the
  set tests asked for (tank setup diet sections cut to pointers, the
  calcium schedule by age moved into the bearded dragon feeding guide,
  the eight recommended links, the two enrichment fragments, the cost
  table cell). Both hubs also carry rows sourced to the shared Health and
  More guides (heat, nails, molting, vet trips; quarantine, shedding,
  hygiene, power outage), because both set tests reported those as gaps
  the sidebar already covered; the extractor now shows that list with
  excerpts so the next reader sees it.

## How a batch gets verified (do this every time)

The commands do the editing. Verification is separate, and it is what
catches the defects the commands produce. Per batch:

1. `node scripts/check-voice.mjs --slug <slug>` on every file, then
   `--strict`, `check-internal-links.mjs`, `check-related-articles.mjs`.
2. Diff against the pre-edit copy (`git show main:<file>`): link targets,
   `<AffiliateLink>` hrefs, component names, and the Sources block must be
   identical unless the task adds sources. Body length within reason.
3. For every rewritten FAQ answer, compare old and new: no hedge lost
   ("can" to "will", "many" to "most", "see a vet" to "always see a vet"),
   no medical, legal, or cost term that the body does not carry, no growth.
4. For any new researched text, run one agent that opens every cited URL
   and classifies each claim as supported, unsupported, misattributed, or
   contradicted. Fix everything it finds. Batch 1 needed two rounds.
5. Read three articles yourself, before and after, as a stranger would.
6. Commit per batch, push the branch, report, and wait for "merge".

## Next jobs, in order

1. Merge claude/more-on-block once Mike says merge.
2. FunFact repeats: 22 FunFact boxes restate a body sentence nearly
   verbatim. Prompt at the end of this file.
3. `/beef-up 6 go` through `/beef-up 9 go` (pick-up sections). Prompt at
   the end of this file. Batch 10 is optional.
4. Linking pass, remainder: 48 self-reference and 82 section-link
   warnings are left, all on articles outside the species series (vs
   guides, overviews, cross-species guides, standalone posts). The vs and
   overview pieces link both species early by design, so decide the rule
   for them before a pass, then flip those two warnings to errors. The
   enrichment series' "borrowed evidence, covered in full in our X
   enrichment guide" provenance lines were left as cross-species links
   with a reason; normalize them if the phrasing bothers you.
5. Reader set tests, one species at a time (docs/READER_REVIEWS.md). Run
   `node scripts/reader-extract.mjs <species> <out-dir>`, hand the files to
   one Opus agent with the set test prompt at the end of this file, paste
   the review into READER_REVIEWS.md under the species, then fix what it
   found: conflicting numbers between hub and deep dives (pick the sourced
   value, make the hub agree), one link per page where the reader was
   stranded (the sibling-link exception in RULES), fragments and
   placeholder cells, unsourced claims. About 70k tokens per species. Do
   the bearded dragon and rabbit findings first, they are already in the
   file. Bearded dragon, rabbit, leopard gecko, goldfish, axolotl, and
   ball python: done 2026-09-08, next is any species with a care package.
   Raw reader output and the running "not covered anywhere" list are in
   docs/READER_LOG.md, one entry per species.
6. Hub reconciliation, five species per session, one branch each, with
   the set test, fixes, and a Fable check per species: the batch prompt
   at the end of this file (Sonnet, default effort). Rabbit, bearded
   dragon, leopard gecko, goldfish, axolotl, and ball python done and on
   main; leopard gecko, goldfish, axolotl, and ball python passed the
   species check on 2026-09-08. Batch A (betta fish, crested gecko,
   guinea pig, hamster, russian tortoise) done and passed its species
   check 2026-09-08 on branch claude/readmefirst-batch-a-9opaeb (one
   Fable agent covering all five, since the session was pinned to a
   single branch rather than five, so it ran the check once against the
   whole batch instead of once per species); not yet merged to main.
   Next: batch B (budgie, cockatiel, cockatoo,
   lovebird, tarantula), then the others. Legacy
   hubs keep rendering the old care sheet until then. Dogs and cats
   last. Rabbit difficulty settled at Beginner/Intermediate on the
   site's legend and rabbit lifespan at 8 to 12 years indoors (House
   Rabbit Society, VCA, RSPCA), 2026-09-08. Open question Mike has not
   answered: whether the legacy hubs should lose their print button
   before they are reconciled (they have, since the whole-guide print is
   gone).
7. The 111 baseline blog posts: noted.

## The prompt to paste into a new session

See the end of this file. It assumes Fable 5.1, a fresh branch, and that
Mike will say "merge" when a piece is done.

---

```
Read READMEFIRST.md, then CLAUDE.md, then the "Writing an article" section
of docs/RULES.md, then .claude/commands/beef-up.md. Work on a new branch
from main named claude/beef-up-batch-5. Never push main unless I say
merge. Max two agents at a time.

Run /beef-up 5 go. Then verify it the way READMEFIRST.md describes:
checker on every slug plus the strict, link, and related-articles gates;
diff each file against main so no link target, affiliate link, component,
date, or existing number changed; compare every rewritten FAQ answer to
the old one for lost hedges or figures the body does not carry; then run
one fact-check agent that opens every cited URL and classifies each added
claim as supported, unsupported, misattributed, or contradicted, and
checks that any pre-existing number in the article was not changed. Fix
everything it finds and run it once more. Sources hold facts only: no
retailer product pages. Push the branch and report the before and after
word counts per article, the sources added, and anything left unfixed.
Then stop and wait for me to say merge.
```

## The check prompt, for a fresh session after a batch is pushed

```
Read READMEFIRST.md, then CLAUDE.md, then the "Writing an article" section
of docs/RULES.md. Fetch origin and check out branch claude/beef-up-batch-5.
Do not push main. Max two agents at a time.

You are the second pair of eyes on a batch another session wrote. Verify
it the way READMEFIRST.md describes, in this order:
1. node scripts/check-voice.mjs --slug on every changed guide, then
   --strict, check-internal-links.mjs, check-related-articles.mjs,
   check-affiliate-mdx.mjs, check-seo-tags.mjs.
2. Diff every changed file against main: link targets, AffiliateLink
   hrefs, component names, dates, tags, and every pre-existing number must
   be unchanged. Sources may only gain entries, and none may be a retailer
   product or listing page. No em or en dashes anywhere in the diff.
3. For every rewritten FAQ answer, compare old and new: no hedge lost, no
   figure the body does not carry, no growth, no near-verbatim body copy.
4. Run one agent that opens every cited URL and classifies each added
   claim as supported, unsupported, misattributed, or contradicted, checks
   arithmetic in any table, and flags any pre-existing number that
   changed.
5. Read two of the guides yourself, before and after, as a stranger.
Fix every defect on the branch, rerun step 1, commit "Beef up: batch 5
check", push the branch, and report: what the batch got right, what you
fixed with before and after quotes, and anything you left because it was
in Mike's original text. Then stop and wait for me to say merge.
```

## The pick-up prompt, for a fresh session (Opus, medium effort)

Writing and fact-checking here are mechanical against named sources, so
Opus at medium effort does the batch and its own fact-check agent. Use
Fable only for the second-eyes check prompt above, and only after the
batch is pushed.

```
Read READMEFIRST.md, then CLAUDE.md, then the "Writing an article" section
of docs/RULES.md, then .claude/commands/beef-up.md. Work on a new branch
from main named claude/beef-up-batch-6. Never push main unless I say
merge. Max two agents at a time, one at a time where you can.

Run /beef-up 6 go. The section is "How to pick one up", described per slug
in the batch 6 table of docs/BEEF_UP_PLAN.md: approach, where the hands
go, how the body is supported, how the animal goes back down. 120 to 180
words. Do not repeat the stress signs or session lengths already on the
page. Ceiling 1,000 body words, 1,100 for the slugs the table marks.
Verify the way READMEFIRST.md describes: checker on every slug plus the
strict, link, related-articles, affiliate, and SEO gates; diff each file
against main so no link target, affiliate link, component, date, tag, or
existing number changed; then one fact-check agent (Opus) that opens every
cited URL and classifies each added claim as supported, unsupported,
misattributed, or contradicted. Fix everything it finds. Sources hold
facts only: no retailer pages. Push the branch and report before and
after word counts, sources added, and anything left unfixed. Then stop
and wait for me to say merge.
```

Then the same prompt with 7, 8, 9 in place of 6.

## The FunFact prompt, for a fresh session (Opus, low effort)

```
Read READMEFIRST.md, then CLAUDE.md, then the "Writing an article" section
of docs/RULES.md. Work on a new branch from main named claude/funfact-repeats.
Never push main unless I say merge. No agents.

These 22 files carry a <FunFact> box that restates a body sentence nearly
word for word, which a reader review called the thing that made the page
look unread:

guides/african-grey-parrot-cost-guide, guides/african-grey-parrot-tank-setup-guide,
guides/argentine-tegu-cost-guide, guides/bird-pellet-conversion-guide,
guides/cockatoo-handling-guide, guides/cockatoo-health-issues-guide,
guides/corydoras-catfish-health-issues-guide, guides/fire-bellied-toad-tank-setup-guide,
guides/giant-millipede-cost-guide, guides/green-anole-cost-guide,
guides/herbivorous-reptile-safe-plants-guide, guides/jumping-spider-health-issues-guide,
guides/milk-snake-handling-guide, guides/oscar-fish-handling-guide,
guides/red-footed-tortoise-health-issues-guide, guides/russian-tortoise-tank-setup-guide,
guides/savannah-monitor-cost-guide, guides/savannah-monitor-health-issues-guide,
guides/stick-insect-cost-guide, guides/stick-insect-tank-setup-guide,
guides/uromastyx-tank-setup-guide, guides/veiled-chameleon-handling-guide.

For each: read the whole article, then rewrite the FunFact so it carries an
angle the body does not already state in those words, using only facts
the body or its Sources already carry. Two sentences, under 50 words, no
intensifiers, no dashes, no links. If the body leaves nothing to say, cut
the FunFact. Never edit the body. Do not bump lastUpdated or lastReviewed.
Run node scripts/check-voice.mjs --slug on each, then --strict. Commit
"FunFact repeats: 22 boxes", push the branch, and report each file as
rewritten or cut with the old and new text. Then stop and wait for me to
say merge.
```

## The set test prompt (one Opus agent, run_in_background, about 70k tokens)

Extract first: `node scripts/reader-extract.mjs <species> /tmp/<species>`.
Then:

```
You are someone about to get a <animal> who reads care websites carefully
and has no patience for filler. Read the plain-text pages in /tmp/<species>/
with `cat`, in filename order: 00 is the species' care guide hub (the page
the site's navigation lands on first), 01 the encyclopedia entry, then the
deep-dive articles. Each file ends with the internal links its body carries
and the Deep Dive list the page shows in its sidebar (on phones, after the
FAQ), so treat those as real, clickable navigation. Do not look at anything
else, do not run git, do not search the web. You know nothing about who
wrote them or how.

Review the set, under 900 words, plain prose with short lists, no em or en
dashes:
1. One line per page: would you finish it, what you can act on, grade A to F.
2. The hub and the encyclopedia: do they earn their place next to the deep
   dives, or repeat them? Does anything on the hub disagree with a deep dive
   (numbers, sizes, costs, schedules)? Quote both sides where they disagree.
3. The set as a whole: after all of them, could you set up, buy, feed, and
   keep a <animal> healthy, and what is still missing? Where did a page
   raise a question whose answer is on another page in this set, without
   the text saying so?
4. Overlap and conflict across the deep dives: what did you read twice, and
   do any numbers or instructions disagree? Quote both sides.
5. One link per page: for each page, name the single sentence where a link
   to another page in this set would have helped you most, quote it, and say
   which page it should point to. If a page needs none, say so.
6. Trust: anything that made you doubt them, and the one sentence across the
   set that most convinced you a person who keeps these animals wrote it.
7. Grade the set A to F with one line of reason, and the two changes you
   would make first.
8. Last, a separate section labeled "Not covered anywhere": anything you
   flagged as missing in question 3 that still has no answer after you
   check it against the Health and More list in the sidebar (the shared
   class guides, not just this species' own pages). List each one in one
   line. If everything you flagged is actually covered somewhere in the
   set, say "None" here rather than skip the section.
```


## The batch prompt, for a fresh session (Sonnet, default effort): five species, one branch each, a Fable check after each

Replaces the one-species prompt and the separate check session
(2026-09-08). The worker decides from the sources instead of asking; Mike
reads the reports afterwards. Batch A (betta-fish, crested-gecko,
guinea-pig, hamster, russian-tortoise) done and checked 2026-09-08 on
branch claude/readmefirst-batch-a-9opaeb, not yet merged. Species with a
care package still to do: budgie, cockatiel, cockatoo, lovebird, tarantula
(batch B). Paste this with the five species filled in.

```
Read READMEFIRST.md, CLAUDE.md, docs/RULES.md (all of it, then the Hubs
and Linking sections twice), the "How a test runs" and "What the tests
changed so far" sections of docs/READER_REVIEWS.md, and the leopard
gecko, goldfish, and axolotl sections of the same file (they show what
the check catches). Then do these five species, in this order, one at
a time, each on its own branch: <species-1>, <species-2>, <species-3>,
<species-4>, <species-5>. Never merge to main. Do not stop between
species for my confirmation, and do not ask me questions: decide from
the sources by the rules below, record the decision, and move on. I
read the reports afterwards. Two agents at once at most: the reader
agent while you work, then the Fable check agent after you push. Never
run npm run build, never take screenshots.

Another session is editing the encyclopedia entries
(src/lib/data/encyclopedia/*.js) and adding a history section. Never
touch those files. Where the encyclopedia disagrees with a deep dive,
the deep dive's sourced figure is what the hub carries, and the
disagreement goes in the review file under "Encyclopedia".

Branches. Species 1's branch is claude/hub-<species-1> from main.
Each later species branches from the previous species' branch head,
so every branch carries the ones before it and any of them can be
merged on its own. A branch is pushed twice: once after step 6 (before
the check) and once after step 8. If the session's context runs low,
finish the species in progress through step 8, push, write the batch
report for the species done, and stop; the next session starts this
prompt again with the species left.

Per species:

1. Baseline. Run `node scripts/check-species-numbers.mjs <species>`
   and save the output to the scratchpad. Run
   `node scripts/reader-extract.mjs <species> .reader/<species>`.
   Launch one reader agent (run_in_background, the same model as you)
   with the set test prompt from READMEFIRST on that folder. While it
   runs, do step 2.

2. Hub. Rewrite the <species> entry in src/lib/data/guides/*.js to the
   router shape. The rabbit (smallMammals.js), bearded dragon
   (lizards.js), leopard gecko (geckos.js), goldfish (fish.js), and
   axolotl (amphibians.js) entries are the template; copy their
   structure exactly (layout, firstWeek, emergencyCard, routes, buyList,
   faqs) and drop costs, sections, and the old faqs. Rules, none
   optional:
   - Every first-week row's value is copied from the deep dive named in
     its `source`, in that article's words, numbers unchanged. A source
     sentence with two ranges keeps both ranges in the row; never merge
     them into one. No figure of your own. Rows the deep dives do not
     cover (lifespan, adult size) may use the encyclopedia entry with
     no source.
   - Add rows sourced to the shared Health and More guides that apply
     (reptiles: quarantine, hygiene, emergency plan; small mammals:
     heat stress, grooming, vet trips; fish and amphibians: quarantine,
     cycling, power outage; birds: whatever the extract's Health and
     More list shows). The extract shows that list with excerpts.
   - The emergency card copies the health guide's call-the-vet list in
     full, bullet for bullet; when the guide states the list as a
     sentence, one bullet per item in that sentence. Count both. The
     vetLine keeps every hedge the health guide uses.
   - One route per own deep dive (not the shared ones, not vs pieces),
     one plain sentence each saying what is on the page. An article
     whose slug starts with <species>- and that is not a vs piece is an
     own deep dive even without a -guide suffix.
   - Buy list without prices, from the cost guide's setup table and the
     tank setup guide.
   - Three FAQs copied verbatim from the deep dives' frontmatter.
   - Difficulty is the encyclopedia entry's. If the old hub disagreed,
     the hub changes.
   - If a source slug ends in a suffix not in SHORT_LABELS in
     src/pages/GuideDetail.jsx, add it there. If one of the species'
     own articles is missing from its entry in
     src/lib/data/relatedArticles.js (the extract will not show it in
     the Deep Dive list), add it there. Those two lines and the guide
     data file are the only src edits; nothing else in src/.
   Then `node -e` import the file to confirm it parses, run
   `npx eslint src/pages/GuideDetail.jsx src/lib/data/relatedArticles.js`,
   and run the numbers checker again: no line marked `hub` may disagree
   with a deep dive. Commit: "<Animal> hub: router shape".

3. Review. When the reader returns, paste its raw output into
   docs/READER_LOG.md under "## <Animal> (date)" and file the review in
   docs/READER_REVIEWS.md under "## <Animal> (date, first pass)" in the
   same shape as the leopard gecko and axolotl sections: the grade
   table, set grade, hub conflicts quoted both sides, deep dives
   against each other, gaps (checked against the Health and More list
   before you call one real), stranded questions, the
   one-link-per-page table, trust, the reader's two changes. Commit:
   "Reader reviews: <animal> first pass".

4. Fixes, in the deep dives only, from the review and the numbers
   checker. Decide every one; nothing waits for Mike.
   - Two pages disagree on a number. Read both pages' Sources blocks.
     The page whose cited source actually states the figure wins; when
     the Sources block alone does not settle it, open the source URLs
     with WebFetch and check. If each page's source states its own
     figure, rank the sources by RULES, Sources: a peer-reviewed paper,
     then a .gov agency, then a veterinary manual or hospital (Merck,
     VCA, LafeberVet, a university vet school), then a museum or
     university, then an established husbandry reference (Zen Habitats,
     ReptiFiles, the RSPCA), then everything else. Higher tier wins;
     same tier, the species-specific source beats the general one;
     still tied, the page whose subject is that topic wins (the
     temperature guide on temperatures, the feeding guide on feeding,
     the tank setup guide on sizes). The other page changes to match,
     and if a shared class guide (emergency plan, quarantine, the
     aquarium guides) carries a species row that disagrees with the
     winner, that row changes too. If neither source states the figure,
     the page whose subject is that topic keeps its figure, the other
     page changes to match, and the review file lists it under
     "Unsourced, needs a fact-check". Never invent a number. Never
     change a hedge; when a count changes and the hedge next to it
     would now be false, keep the hedge's shape and say so in the
     review.
   - Two pages disagree on a recommendation rather than a number
     (cohousing, UVB, a food): the page whose Sources back its
     recommendation keeps it and the other page loses the contradicting
     clause; if neither cites, both stay and the review lists it.
   - A same-page fix leaves nothing behind: when a body sentence, a
     FAQ, a table cell, the seoDescription, the excerpt, a Takeaway
     section, or the hub's copy of any of these carries the old figure,
     every one of them changes in the same commit. A FAQ answer may
     change only when it contradicts its own body or the figure that
     won above; the rewrite keeps every hedge, adds no number the body
     does not carry, and copies no body sentence (the checker's
     faq-copied rule).
   - A schedule or diet aside repeated on two pages (calcium by age,
     the diet section in a tank setup guide): one page keeps it, the
     other becomes a one-sentence pointer with a link, and the
     affiliate link in the cut paragraph moves into the pointer.
   - Recommended links: add each one only if it passes all of these:
     at most one link per article to the same species' cost, handling,
     health-issues, tank-setup, feeding, enrichment, or legal guide (the
     checker errors on two); no link before the first H2; no link
     inside a ComparisonTable cell (cells do not take markdown); the
     sentence is about the animal, not about the site. Skip the rest
     and list them with the reason. Links to the shared class guides,
     the encyclopedia profile, another species, or an overview do not
     count against the one.
   - Fragments, placeholder cells, "upcoming" references to published
     pages: fix.
   - lastUpdated bumps only when a fact or number changed, never for a
     link. Use the US Eastern date (`TZ=America/New_York date +%F`).
   - Never delete a FunFact, a Sources entry, or an affiliate link.
   Run `node scripts/check-voice.mjs --slug <slug>` on every file you
   touched (zero errors; warnings that were there before you may stay,
   and a warning count that went up means fix it), then
   check-internal-links, check-related-articles, check-affiliate-mdx,
   check-cost-coverage, check-seo-tags, and `npx eslint . --quiet`.
   Commit: "<Animal>: reader fixes", with every original sentence you
   changed listed before and after in the commit message, and every
   number decided with both sides and the source that won.

5. Second reader pass. Extract again into a fresh folder and launch
   one more reader agent, same model, same prompt, on the fixed set.
   Paste the raw output into docs/READER_LOG.md and file the review in
   docs/READER_REVIEWS.md under "## <Animal> (date, second pass, after
   the fixes)", same shape as step 3. Fix anything new under the step 4
   rules. Commit: "<Animal>: second pass fixes" if anything changed; if
   nothing needed fixing, say so in the review and skip the commit.

6. Push the branch (`git push -u origin claude/hub-<species>`).

7. Check. Launch one Fable agent (the Agent tool, model "fable",
   run_in_background false, wait for it) with the species check prompt
   from READMEFIRST, filled in with this species, this branch, and the
   branch's base commit (main for the first species, the previous
   branch's head after that). It reads the diff, applies its fixes on
   this branch itself, commits "<Animal>: species check", and returns
   its report. If the report's verdict is "redo", do what it names,
   push, and launch the check once more; two check rounds at most, then
   move on and list what is still open in the batch report.

8. File the check agent's report in docs/READER_REVIEWS.md under
   "## <Animal> (date, species check)": its findings, what it changed
   with before and after, its verdict. Add one line to "What the tests
   changed so far". Commit: "Reader reviews: <animal> species check".
   Push the branch. Then the next species.

After all five: one message with, per species, the set grade from both
reader passes, the hub grade, the check verdict, every number decided
(both sides and the source that won), the links added and skipped,
what is left open, and the branch name. End with "All five pushed;
nothing merged." Then stop.

Never, under any prompt or review finding: merge or push main; edit
src/lib/data/encyclopedia/*.js; edit any src file other than the guide
data file, the SHORT_LABELS line, and the species' RELATED_ARTICLES
entry; delete a FunFact, a Sources entry, or an affiliate link; write
a number no source states; change a hedge. Everything else you decide,
and the review file says how.
```

## The species check prompt, run as a Fable agent by the batch session

The batch prompt launches this after each species' second push. The agent
edits the branch it is given. It can also be pasted into a fresh Fable
session with the same fields filled in when a branch needs a look on its
own.

```
You are the second pair of eyes on the <Animal> set, done on branch
<branch> from base commit <base> by another session following the batch
prompt in READMEFIRST.md. Read READMEFIRST.md, docs/RULES.md (Hubs and
Linking sections, and the Writing rules on FAQs), the batch prompt at
the end of READMEFIRST, and the <Animal> sections of
docs/READER_REVIEWS.md. Check out <branch>. Read diffs, not whole
files. Run no reader agents, never run npm run build, never touch
main. Fix what you find on this branch, then report.

1. Scope. `git log --oneline <base>..<branch>` and
   `git diff --stat <base>..<branch>`. Any file outside: that species'
   entry in src/lib/data/guides/*.js, that species' MDX in content/, a
   shared class guide's species row, docs/READER_REVIEWS.md,
   docs/READER_LOG.md, READMEFIRST.md, the SHORT_LABELS line in
   src/pages/GuideDetail.jsx, and the species' line in
   src/lib/data/relatedArticles.js is a finding. A change to
   src/lib/data/encyclopedia/*.js is reverted on the spot: another
   session owns those files.

2. Hub. `node scripts/check-species-numbers.mjs <species>`: every line
   marked `hub` must appear, numbers unchanged, in the deep dive its row
   names. For each firstWeek row, grep its numbers and its key phrases
   in the source article; a row that merges two source ranges into one,
   or states a threshold the source does not, is a finding. Count the
   emergency card bullets against the health guide's call-the-vet list,
   and check the vetLine keeps the health guide's hedges. Confirm routes
   cover every own deep dive and nothing shared, the buy list has no
   prices, the three FAQs are verbatim copies of deep-dive frontmatter
   FAQs, and difficulty equals the encyclopedia entry's.

3. Deep dives. `git diff <base>..<branch> -- content/`, every hunk:
   - Edits the prompt did not ask for: a FAQ rewritten with no
     contradiction behind it, a reworded sentence with no number or
     link change, a cut or added paragraph, a Sources or affiliate link
     removed, a hedge changed.
   - Every number changed: find the figure on the other page and in
     both Sources blocks, and confirm the winner is the one the batch
     prompt's source ranking picks; open the source URLs with WebFetch
     when the review file's stated reason does not settle it. A change
     that went the wrong way, or a same-page copy left behind (FAQ,
     table cell, seoDescription, excerpt, Takeaway, hub copy, a shared
     guide's species row, a vs piece for this species), is a finding.
   - Links added: at most one per article to the same species' suffix
     guides (`grep -o "](/blog/<species>-[a-z-]*-guide/)" | sort |
     uniq -c`), none before the first H2, none inside ComparisonTable
     cells, the sentence about the animal not the site.
   - lastUpdated bumped only where a fact or number changed, never for
     a link only; not bumped where one did change.
   - `node scripts/check-voice.mjs --slug <slug>` on every changed MDX,
     against the same slug at <base> (`git archive <base> content
     scripts src package.json | tar -x -C <scratch>` and run it there).
     A warning count that went up is a finding, and says which rule.

4. Review file. The species' first pass, second pass, and (after you)
   species check sections exist in docs/READER_REVIEWS.md, follow the
   leopard gecko and axolotl shape, quote both sides of each conflict,
   and their "fixed" notes and counts match what the diff actually did.

5. Fix every finding on the branch under the batch prompt's rules and
   its "Never" list. Then the gates on the branch head:
   check-internal-links, check-related-articles, check-affiliate-mdx,
   check-cost-coverage, check-seo-tags, check-voice --strict,
   check-species-numbers for the species, `npx eslint . --quiet`.
   Commit "<Animal>: species check" with every change listed before and
   after, and push the branch.

Report, in this order: anything outside scope (file, what was done,
what you did about it); hub rows that did not match their source (row,
hub text, source text, the fix); number changes that went against the
source ranking (both sides, which source, the fix); links that broke a
limit; date bumps wrong either way; FAQ or sentence rewrites the prompt
did not ask for (before, after, kept or reverted and why); review-file
mismatches; gate results. Then one verdict: "clean", "fixed on the
branch", or "redo" with the one thing the batch session must do
itself (only for work you cannot do under the Never list, such as a
figure that needs new research). Nothing merged.
```
