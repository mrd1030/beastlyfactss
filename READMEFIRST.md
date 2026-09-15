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
5. Grep every changed file and every new hub row for source names in the
   body prose: VCA, Merck, LafeberVet, Lafeber, RSPCA, PetMD, AZA,
   NASPHV, Smithsonian, Wildwood. The `<Sources>` block is where they
   belong. Watch the router step especially, since it copies deep-dive
   wording into hub rows verbatim and will carry a name across with it.
   Batch D's check graded all five species A- with this defect in every
   one, because it verified the numbers were right and never asked
   whether the source name belonged in the sentence. See "The source goes
   in the block, not the sentence" in docs/RULES.md.
6. Read three articles yourself, before and after, as a stranger would.
7. Commit per batch, push the branch, report, and wait for "merge".

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
   Batch B (budgie, cockatiel, cockatoo, lovebird, tarantula) done and
   checked 2026-09-09 on branch claude/batch-b-startup-ve7avl; not yet
   merged. Budgie and cockatiel got the full two-pass treatment with a
   Fable check each; cockatoo, lovebird, and tarantula got a leaner
   single-pass treatment (one reader test, fixes folded into one pass)
   to spend less per species, with one Fable agent covering all three
   in a single combined check rather than three separate ones, the same
   cost-saving batch A used for its five-species check. That
   single-pass-plus-one-combined-check shape worked well enough on cost
   that it is now the batch prompt's default for every future batch, not
   just a one-off: one reader pass per species, no second pass unless
   the check agent's redo verdict calls for one, and one Fable check
   after all five species are done and pushed rather than one per
   species. The Fable check also now grades the batch session's own
   execution, not just the content, so a sloppy pass gets flagged even
   when every individual fix looks fine. Every reader report and the
   closing Fable report now get shown to Mike in chat in full as soon
   as they come back, not just filed and summarized at the end. Batch C
   (corn snake, boa constrictor, african grey, chinchilla, ferret) done,
   checked, and merged to main 2026-09-09 on branch
   claude/batch-c-setup-kgvj92: five router hubs rebuilt, every
   hub-versus-deep-dive conflict resolved (cage and wheel sizes, humidity
   and temperature ranges, feeding schedules, a fur-density fact, a
   mislabeled chinchilla wildLifespan field), one real cross-guide
   contradiction found and fixed with a peer-reviewed source (ferret
   adrenal disease vs. the health guide on neuter age), and the species
   check caught a wrong CITES date correction (reverted to the
   verified-correct October 2, 2016, both in the legal guide and the
   encyclopedia) plus two hubs still carrying old FAQs instead of
   verbatim deep-dive copies. Pass grade B-, all fixed on the branch
   before merge. Batch D (green iguana, conure, rat, hermit crab, box
   turtle) done, checked, and merged to main 2026-09-09 on branch
   claude/batch-d-opus-agents-7jgjwi: five router hubs, every
   hub-versus-deep-dive conflict resolved, and four number decisions made
   against opened sources (LafeberVet and Chicago Exotics on green iguana
   adult length, Animal Diversity Web on its wild lifespan, PetMD on the
   rat cage minimum, and for box turtle VCA's 60 F outdoor floor and 90
   to 100 F basking zone plus Indiana DNR's documented 60-plus year
   lifespan). Every species finished at pass grade A-, and that grade did
   not hold up: the check confirmed the numbers and never asked whether
   the source name belonged in the sentence, so it passed source
   narration through on all five species. The router step then copied it
   into 28 hub rows that had been clean (turtles 0 to 8, smallMammals 0
   to 10, amphibians 0 to 4). Fixed 2026-09-09 on the batch D branch,
   after the merge, so main carries it until that branch lands. The rule
   was not missing at the time: "cut the site talking about itself" is in
   the ground rules above. No Fable check ran
   on batch D by Mike's decision; an extra Opus check took its place, and
   docs/NOTES.md carries the standing question of whether Fable returns
   for later batches. Batch E (red-eared slider, guppy, blue-tongue skink,
   hognose snake, White's tree frog), spanning turtles, fish, lizards,
   snakes and amphibians, five different classes: written,
   reader-passed, species-checked and merged to main 2026-09-09. Pass
   grade B. All four of its husbandry number changes
   held up against opened sources: skink setup $400-800 to $330-635
   (main's header never matched its own table, the new one sums exactly,
   and to $430-1,335 with the animal), skink UVB 10.0-12% to 5-12% (both
   cited sources list Reptisun 5.0 and Arcadia Forest 6% through Desert
   12%, so the old range excluded the 6% bulb that article's own
   affiliate link sells), guppy ideal temp 73-79 F to 76-78 F (Aquarium
   Co-Op gives exactly that), and slider basking 85-90 F to 85-95 F (the
   LafeberVet aquatic turtle handout gives 85-95 F basking and 72-82 F
   water). Two apparent losses cleared: the Weinstein & Keyler bite
   citation was upgraded from a plain-text PubMed ID to a linked DOI, and
   the removed Zen Habitats source was a bare homepage replaced with the
   specific care page. Four defects fixed: "faecal" twice in the skink
   health guide against "fecal" seven times elsewhere in that same set; a
   White's tree frog ongoing-cost heading claiming $13 to $24 a month
   while the paragraph under it said substrate and power sit on top; a
   water-change line naming its source in the sentence; and 13 hub rows
   carrying the unnamed form of the source habit ("sources give a real
   range", "most sources recommend", "depending on where you look"). The
   worst of those was the red-eared slider Diet split row, which narrated
   the disagreement and gave no ratio at all, so a reader consulting the
   hub for a protein-to-plant split got a paragraph about sources instead
   of a number. The router step is where this batch consistently leaked,
   which is the same finding as batch D.
   Open, found by the batch E check and not fixed: only 7 of 84 cost
   guides carry the "Prices last checked <Month Year> at ..." line
   RULES asks for. Batch D added it to 2 of its 5 species, batch E to
   none. Writing the line without a real price pass would assert a check
   nobody performed, so it needs one, and it is a corpus-wide gap rather
   than a batch E defect.
   None of the 58 remaining legacy species carry a sellable care package
   (all 13 care-package species are already reconciled across batches A to
   C plus the ad-hoc set), so batches D and E are picked on popularity and
   class spread instead. Then the remaining species, then dogs and cats
   last. Legacy hubs keep rendering the old
   care sheet until then. Rabbit
   difficulty settled at Beginner/Intermediate on the
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


## The batch prompt, for a fresh session (Opus 5, high effort): five species, one branch, one reader pass each, one Fable check at the end

Replaces the one-species prompt and the separate check session
(2026-09-08). The worker decides from the sources instead of asking; Mike
reads the reports afterwards. Batch A (betta-fish, crested-gecko,
guinea-pig, hamster, russian-tortoise) done and checked 2026-09-08 on
branch claude/readmefirst-batch-a-9opaeb, not yet merged. Batch B
(budgie, cockatiel, cockatoo, lovebird, tarantula) done and checked
2026-09-09 on branch claude/batch-b-startup-ve7avl, not yet merged.
Batch B started as the five-species-five-branches-five-checks shape
below, then switched mid-batch to one reader pass per species and one
combined Fable check for the last three species to spend less; that
worked well enough that it is now the default for every batch, not a
one-off, and the prompt below reflects it: one reader pass per
species (a second pass only if the closing Fable check's verdict says
redo), and the Fable check runs once, after all five species are
pushed, not once per species. Also new: every reader report and the
closing Fable check's report get shown to Mike in chat in full, as
their own message, the moment they come back, not just filed into
docs/READER_REVIEWS.md and summarized at the end. Batch C (corn snake,
boa constrictor, african grey, chinchilla, ferret) done, checked, and
merged to main 2026-09-09 on branch claude/batch-c-setup-kgvj92,
spanning reptiles, birds, and small mammals rather than staying inside
one class the way batch B did; pass grade B-, see the species-check
section of docs/READER_REVIEWS.md for what the check caught. Batch D
(green iguana, conure, rat, hermit crab, box turtle) done, checked and
merged to main 2026-09-09 on branch claude/batch-d-opus-agents-7jgjwi,
every species at pass grade A-, with an extra Opus check standing in for
the Fable one. Batch E (red-eared slider, guppy, blue-tongue skink,
hognose snake, White's tree frog) done, checked and merged to main
2026-09-09, pass grade B. That makes 31 router hubs; the 77 still on
the legacy care sheet are listed by class in docs/TODO.md, section 7,
dogs and cats last. None of them carry a sellable care package, so
batches are picked for popularity and class spread.

Model decision, 2026-09-14, closing the open question in docs/NOTES.md:
the worker is Opus 5 at high effort and the closing check is one Fable
agent per batch, not Opus. Batches D and E both ran Opus-only checks and
both shipped the same defect the check step failed to catch: the router
step copied source narration into hub rows (28 rows in D, 13 in E), and
the batch E check listed open items instead of fixing them. The check
is the one place the more expensive model earns its cost, and it runs
once per batch. Two things are now hard rules below: the numbers
checker runs strict before and after, and the check agent fixes what
it finds rather than reporting it.

Batch F (pacman frog, zebra finch, angelfish, tokay gecko, sugar
glider), spanning amphibian, bird, fish, gecko and small mammal, done and
checked 2026-09-14 on branch claude/hub-pacman-frog-80291s; not yet
merged. Five router hubs, 130 first-week rows, one reader pass per
species and one Fable check covering all five at the end, which is the
first batch run on the model decision above. Pass grade B+, the best so
far and the first batch where the router step did not leak source
narration into hub rows, which is what the Fable check was reinstated to
catch. What it did catch instead: a sugar glider emergency-card bullet
written rather than copied from the health guide, an angelfish hub row
mixing two sources, a zebra finch hub row left stale against the batch's
own later fix, a retired lifespan still sitting in a frontmatter
`description` field the numbers checker never reads, and one hedge lost
to the de-narration pass. The frontmatter-field one is worth carrying
forward: `description`, `excerpt` and `seoDescription` are same-page
copies the checker cannot see, so grep them by hand whenever a number
moves. Tokay gecko needed a sourced Diet Basics section added to its tank
setup guide, since the species has no feeding guide and the old hub's
diet prose was the set's only feeding content, the same move Russian
tortoise needed in batch A. Two hub-only figures were retired rather than
carried forward as unsourced rows, the angelfish weekly 25 percent water
change and the sugar glider 12-inch wheel, both filed as gaps in
docs/READER_LOG.md.

Batch F merged to main 2026-09-14. That makes 36 router hubs; the 72
still on the legacy care sheet are listed by class in docs/TODO.md,
section 7, dogs and cats last.

Batch G (canary, neon tetra, veiled chameleon, California kingsnake,
hedgehog), spanning bird, fish, lizard, snake and small mammal, done and
checked 2026-09-14 on branch claude/hub-pacman-frog-80291s; not yet
merged. Five router hubs, 131 first-week rows, one reader pass per
species and one Fable check covering all five. Pass grade B+ again, and
the check caught the same pattern batches D through F named: three
frontmatter copies of a moved figure left behind on canary, one canary
hub row stale against the batch's own later fix, two hedgehog rows
carrying the feeding guide's source narration, a California kingsnake
hub with no vetLine (the only router hub of 41 missing one), one date
not bumped, and a captive figure sitting under "Wild Lifespan" with no
label. Neon tetra came back clean, the first species in three batches
to do so.

Two things worth carrying forward. California kingsnake, like tokay
gecko in batch F and Russian tortoise in batch A, has no feeding guide,
so its tank setup guide gained a sourced Diet Basics section; that is
now the standard move, not an improvisation. And the sharpest defect of
the batch was not a hub one: the kingsnake setup guide asked for an
enclosure "at least two-thirds of your snake's body length", which is
exactly the condition the enrichment guide's cited preference test found
snakes rejected. A router pass reads the deep dives against each other
for the first time, which is how that surfaced, so expect one real
deep-dive contradiction per batch rather than treating the hub as the
only thing being fixed.

Batch G merged to main 2026-09-14. That makes 41 router hubs; the 67
still on the legacy care sheet are listed by class in docs/TODO.md,
section 7, dogs and cats last.

Next up is batch H: cardinal tetra, milk snake, gargoyle gecko, gerbil,
sulcata tortoise (fish, snake, gecko, small mammal, turtle). One per
class, and three of the five are cross-linked by work that just merged,
the same reasoning that put canary first in batch G: the neon tetra set
cross-links cardinal tetra, the California kingsnake set names milk
snake repeatedly, and the hedgehog set points at sulcata tortoise four
times. Cardinal tetra goes first for a second reason: its hub carries a
misspelled parasite, "Pleistophora hyphessobrycetis", flagged during
batch F and left because the species was out of scope then. Paste this
with the next five species filled in when picking up the batch after
that.

```
Read READMEFIRST.md, CLAUDE.md, docs/RULES.md (all of it, then the Hubs
and Linking sections twice), the "How a test runs" and "What the tests
changed so far" sections of docs/READER_REVIEWS.md, and the leopard
gecko, goldfish, and axolotl sections of the same file (they show what
the check catches). Then do these five species, in this order, one at
a time, on one shared branch: <species-1>, <species-2>, <species-3>,
<species-4>, <species-5>. Never merge to main. Do not stop between
species for my confirmation, and do not ask me questions: decide from
the sources by the rules below, record the decision, and move on. I
read the reports afterwards. One reader agent at a time, run in the
background while you work the current species; do not run a second
reader pass on a species unless the closing Fable check calls for one.
Save real money: no Fable agent runs until every species below is
done and pushed, then exactly one Fable check covers the whole batch
(see "After all five" below). Never run npm run build, never take
screenshots.

A separate session added history sections to every encyclopedia entry
(src/lib/data/encyclopedia/*.js) through batch A; that pass is done.
Starting with batch B, the encyclopedia is back in scope for the
current batch's five species only, narrowly: when a deep dive's sourced
figure disagrees with the encyclopedia (batch A found this on Russian
tortoise, an unsupported "40-80 years" wild lifespan against the cost
guide's sourced 40-to-50-plus), research it for real (WebSearch and
WebFetch, real opened sources, same as any other fact) and fix
whichever side is wrong, by the same source-ranking rules as any other
conflict in step 4. Touch only the one field that conflicts, only for a
species in this batch, never a history section or anything else in the
file. If research turns up nothing better than what is already there
(the Russian tortoise fix landed on "not well documented in the wild,
the widely quoted range is a captive-care figure" because no source
gives a real wild figure), write that, the same way the crested gecko
entry already does for its own undocumented wild lifespan. Record what
was found and changed in the review file under "Encyclopedia" either
way.

Branches. One branch for the whole batch, claude/hub-<species-1> from
main (or whatever branch name the session was actually given; some
sessions are pinned to a pre-created branch instead of choosing this
one, follow that instead when it applies). Push after every species'
step 5, so work is never sitting unpushed. If the session's context
runs low, finish the species in progress through step 5, push, note
where the batch stands, and stop; the next session starts this prompt
again with the species left, then runs the closing Fable check once
all five are actually done.

Per species:

1. Baseline. Run `node scripts/check-species-numbers.mjs <species>
   --strict` and save the output to the scratchpad; every conflict it
   prints is a decision step 4 has to make, and the list goes into the
   review file under "Numbers checker" so nothing is decided silently.
   Run
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
   - The row carries the figure, never the source's name or the fact
     that sources disagree. "Sources give a real range", "most sources
     recommend", "depending on where you look", "ReptiFiles says": none
     of that goes in a row. The source lives in the `source` field. A
     deep dive that narrates a disagreement instead of stating a figure
     is a step 4 conflict to settle first, and the row waits for the
     settled figure. This is where batches D and E leaked.
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

3. Review. When the reader returns, show me its full report in chat,
   as its own message, before doing anything else with it, every time,
   not summarized and not folded silently into a commit. Then paste its
   raw output into docs/READER_LOG.md under "## <Animal> (date)" and
   file the review in docs/READER_REVIEWS.md under "## <Animal> (date,
   first pass)" in the same shape as the leopard gecko and axolotl
   sections: the grade table, set grade, hub conflicts quoted both
   sides, deep dives against each other, gaps (checked against the
   Health and More list before you call one real), stranded questions,
   the one-link-per-page table, trust, the reader's two changes.
   Commit: "Reader reviews: <animal> first pass".

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

5. Push the branch (`git push -u origin claude/hub-<species-1>`, or the
   branch this session was actually given). Then the next species,
   starting again from step 1. Do not run a second reader pass here by
   default; that only happens if the closing Fable check's verdict
   says redo, and only for the species it names.

After all five species have gone through steps 1 to 5 and are pushed:

6. One combined check. Launch one Fable agent (the Agent tool, model
   "fable", run_in_background false, wait for it) with the species
   check prompt from READMEFIRST, filled in with all five species at
   once, this one branch, and the branch's base commit (main, or
   whatever commit the branch actually forked from). It reads the
   whole batch's diff, applies its fixes on the branch itself, commits
   "<Species 1>, <species 2>, ...: species check", and returns one
   report covering all five. It also grades the pass itself, not just
   the content: see the added instruction in the species check prompt.
   Report-only is not a result: every defect it finds is fixed on the
   branch, or listed with the one reason it cannot be (a corpus-wide
   gap, a number no source states), never left as a to-do. Before it
   reports, it reruns `node scripts/check-species-numbers.mjs
   <species> --strict` for all five species and every check script in
   step 4; a hub line that disagrees with a deep dive, or any script
   failing, means the check is not finished.
   If any species' verdict is "redo", do what it names for that
   species only, push, and launch the check once more for just that
   species; two check rounds at most per species, then move on and
   list what is still open in the batch report.

7. Show me the check agent's full report in chat, as its own message,
   before filing it, the same as the reader reports in step 3. Then
   file it in docs/READER_REVIEWS.md, one section per species or one
   combined section (either is fine, batch A and the second half of
   batch B both did it as one combined section): findings per species,
   what changed with before and after, each species' verdict, and the
   pass grade with its reasoning. Add a line to "What the tests changed
   so far" per species. Commit: "Reader reviews: <species list> species
   check". Push the branch.

8. One message with, per species, the set grade from its reader pass,
   the hub grade, the check verdict, every number decided (both sides
   and the source that won), the links added and skipped, and what is
   left open. Then the pass grade from the combined check and its
   reasoning. End with "All five pushed; nothing merged." Then stop.

Never, under any prompt or review finding: merge or push main; edit
src/lib/data/encyclopedia/*.js for any species outside this batch, or
for anything but a field that genuinely conflicts with a deep dive's
sourced figure and that you researched for real first; edit any src
file other than the guide data file, the SHORT_LABELS line, the
species' RELATED_ARTICLES entry, and (batch B on, scoped as above) the
one conflicting encyclopedia field; delete a FunFact, a Sources entry,
or an affiliate link; write a number no source states; change a hedge.
Everything else you decide, and the review file says how.
```

## The species check prompt, run as a Fable agent by the batch session

The batch prompt now launches this once, after all five species are done
and pushed, covering all five in one pass (see "After all five" above).
It can also be pasted into a fresh Fable session with the fields filled
in for one species or a handful, when a branch needs a look on its own
outside the batch flow.

```
You are the second pair of eyes on the <species-1>, <species-2>,
<species-3>, <species-4>, <species-5> sets, all done on branch <branch>
from base commit <base> by another session following the batch prompt
in READMEFIRST.md. Read READMEFIRST.md, docs/RULES.md (Hubs and Linking
sections, and the Writing rules on FAQs), the batch prompt at the end of
READMEFIRST, and the sections for each of the five species in
docs/READER_REVIEWS.md. Check out <branch>. Read diffs, not whole
files. Run no reader agents, never run npm run build, never touch
main. Fix what you find on this branch, then report.

1. Scope. `git log --oneline <base>..<branch>` and
   `git diff --stat <base>..<branch>`. Any file outside: each species'
   entry in src/lib/data/guides/*.js, each species' MDX in content/, a
   shared class guide's species row, docs/READER_REVIEWS.md,
   docs/READER_LOG.md, READMEFIRST.md, the SHORT_LABELS line in
   src/pages/GuideDetail.jsx, and each species' line in
   src/lib/data/relatedArticles.js is a finding. An encyclopedia edit
   (src/lib/data/encyclopedia/*.js) is in scope only from batch B on,
   only for a species in this batch, and only on a field the review
   file says was researched against a deep-dive conflict; check that
   research actually happened (the commit or review file names real
   sources) rather than trusting the diff alone, and revert anything
   wider (another species, a history section, an untraced change).

2. Hub, per species. `node scripts/check-species-numbers.mjs <species>`:
   every line marked `hub` must appear, numbers unchanged, in the deep
   dive its row names. For each firstWeek row, grep its numbers and its
   key phrases in the source article; a row that merges two source
   ranges into one, or states a threshold the source does not, is a
   finding. Count the emergency card bullets against the health guide's
   call-the-vet list, and check the vetLine keeps the health guide's
   hedges. Confirm routes cover every own deep dive and nothing shared,
   the buy list has no prices, the three FAQs are verbatim copies of
   deep-dive frontmatter FAQs, and difficulty equals the encyclopedia
   entry's.

3. Deep dives, per species. `git diff <base>..<branch> -- content/`,
   every hunk:
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
   - Links added: at most one per article to that species' suffix
     guides (`grep -o "](/blog/<species>-[a-z-]*-guide/)" | sort |
     uniq -c`), none before the first H2, none inside ComparisonTable
     cells, the sentence about the animal not the site.
   - lastUpdated bumped only where a fact or number changed, never for
     a link only; not bumped where one did change.
   - `node scripts/check-voice.mjs --slug <slug>` on every changed MDX,
     against the same slug at <base> (`git archive <base> content
     scripts src package.json | tar -x -C <scratch>` and run it there).
     A warning count that went up is a finding, and says which rule.

4. Review file. Each species' pass section (and, after you, its species
   check section) exists in docs/READER_REVIEWS.md, follows the leopard
   gecko and axolotl shape, quotes both sides of each conflict, and its
   "fixed" notes and counts match what the diff actually did. A species
   that only got one reader pass (the new default) needs no second-pass
   section; do not flag that as missing on its own.

5. Grade the pass itself, not just the content. Separately from each
   species' set grade (which grades the site's writing), give the batch
   session one grade for how well it executed this process: did it
   follow the router-hub rules exactly, cite real sources for every
   number it changed rather than asserting a fix, avoid touching
   anything outside scope, keep hedges intact, and file the review
   sections completely and accurately. A session that made a few
   findings you had to fix here is not automatically a bad grade; a
   session that skipped steps, faked research, or left the review file
   inconsistent with the diff is. State the grade (A to F) with the one
   or two sentences that justify it, the same register as a reader's
   set grade.

6. Fix every finding on the branch under the batch prompt's rules and
   its "Never" list. Then the gates on the branch head, once for the
   whole branch: check-internal-links, check-related-articles,
   check-affiliate-mdx, check-cost-coverage, check-seo-tags,
   check-voice --strict, check-species-numbers for each of the five
   species, `npx eslint . --quiet`. Commit
   "<species list>: species check" with every change listed before and
   after, and push the branch.

Report, in this order, per species: anything outside scope (file, what
was done, what you did about it); hub rows that did not match their
source (row, hub text, source text, the fix); number changes that went
against the source ranking (both sides, which source, the fix); links
that broke a limit; date bumps wrong either way; FAQ or sentence
rewrites the prompt did not ask for (before, after, kept or reverted
and why); review-file mismatches; that species' verdict ("clean",
"fixed on the branch", or "redo" with the one thing the batch session
must do itself, only for work you cannot do under the Never list, such
as a figure that needs new research). Then, once, for the whole batch:
gate results and the pass grade from step 5 with its reasoning.
Nothing merged.
```
