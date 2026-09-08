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
   file. Bearded dragon, rabbit, and leopard gecko: done 2026-09-08, next
   is any species with a care package (goldfish, axolotl, ...). Raw
   reader output and the running "not covered anywhere" list are in
   docs/READER_LOG.md, one entry per species.
6. Hub reconciliation, one species per session, with its set test and
   fixes in the same session: the species prompt at the end of this file
   (Sonnet, default effort). Rabbit, bearded dragon, and leopard gecko
   done and on main. Next: goldfish, axolotl, then the rest of the
   species with a care package, then the others. Legacy
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


## The species prompt, for a fresh session (Sonnet, default effort)

One species per session. Paste this, replacing <species> with the guide id
(the folder prefix in content/guides, for example leopard-gecko) and
<Animal> with the name. Rabbit, bearded dragon, and leopard gecko are done
and merged to main. Next up: goldfish.

```
Read READMEFIRST.md, CLAUDE.md, docs/RULES.md (all of it, then the Hubs
and Linking sections twice), and the "How a test runs" and "What the
tests changed so far" sections of docs/READER_REVIEWS.md. Then do the
<Animal> set, on a new branch claude/hub-<species> from main. Stop and
report at the end; never merge to main. Never use a second agent for
anything but the one reader test below, never run npm run build, never
take screenshots unless you changed src/pages/GuideDetail.jsx.

1. Baseline. Run `node scripts/check-species-numbers.mjs <species>` and
   save the output to the scratchpad. Run
   `node scripts/reader-extract.mjs <species> .reader/<species>`. Launch
   one reader agent (run_in_background) with the set test prompt from
   READMEFIRST, the same model as you, on that folder. While it runs, do
   step 2.

2. Hub. Rewrite the <species> entry in src/lib/data/guides/*.js to the
   router shape. The rabbit (smallMammals.js), bearded dragon
   (lizards.js), and leopard gecko (geckos.js) entries are the template;
   copy their structure exactly (layout, firstWeek, emergencyCard,
   routes, buyList, faqs) and drop costs, sections, and the old faqs.
   Rules, none optional:
   - Every first-week row's value is copied from the deep dive named in
     its `source`, in that article's words, with its numbers unchanged.
     No figure of your own. Rows the deep dives do not cover (lifespan,
     adult size) may use the encyclopedia entry with no source.
   - Add rows sourced to the shared Health and More guides that apply
     (reptiles: quarantine, hygiene, emergency plan; small mammals: heat
     stress, grooming, vet trips). The extract shows that list with
     excerpts.
   - The emergency card copies the health guide's call-the-vet list in
     full. Count the bullets in the guide and count them in your card.
   - One route per own deep dive (not the shared ones, not vs pieces),
     one plain sentence each saying what is on the page.
   - Buy list without prices, from the cost guide's setup table and the
     tank setup guide.
   - Three FAQs copied verbatim from the deep dives' frontmatter.
   - Difficulty stays what the encyclopedia entry says.
   - If a source slug ends in a suffix not in SHORT_LABELS in
     src/pages/GuideDetail.jsx, add it there. Nothing else in that file.
   Then `node -e` import the file to confirm it parses, run
   `npx eslint src/pages/GuideDetail.jsx`, and run the numbers checker
   again: no line marked `hub` may disagree with a deep dive. Commit:
   "<Animal> hub: router shape".

3. Review. When the reader returns, paste its review into
   docs/READER_REVIEWS.md under a "## <Animal> (date, first pass)"
   heading in the same shape as the leopard gecko and rabbit sections:
   the grade table, set grade, hub conflicts quoted both sides, deep
   dives against each other, gaps (checked against the Health and More
   list before you call one real), stranded questions, the
   one-link-per-page table, trust, the reader's two changes. Commit:
   "Reader reviews: <animal> first pass".

4. Fixes, in the deep dives only, from the review and the numbers
   checker:
   - Two pages disagree on a number: the page whose Sources cite it wins,
     and the other page changes to match. If both cite a source, change
     nothing and list it for Mike. Never invent a number. Never change a
     hedge.
   - A schedule or diet aside repeated on two pages (calcium by age, the
     diet section in a tank setup guide): one page keeps it, the other
     becomes a one-sentence pointer with a link, and the affiliate link
     in the cut paragraph moves into the pointer.
   - Recommended links: add each one only if it passes all of these: at
     most one link per article to the same species' cost, handling,
     health-issues, tank-setup, feeding, enrichment, or legal guide (the
     checker errors on two); no link before the first H2; no link inside
     a ComparisonTable cell (cells do not take markdown); the sentence is
     about the animal, not about the site. Skip the rest and list them.
   - Fragments, placeholder cells, "upcoming" references to published
     pages: fix.
   - lastUpdated bumps only when a fact or number changed, never for a
     link. Use the US Eastern date.
   Run `node scripts/check-voice.mjs --slug <slug>` on every file you
   touched (zero errors; warnings that were there before you may stay),
   then check-internal-links, check-related-articles, check-affiliate-mdx,
   check-cost-coverage, check-seo-tags, and `npx eslint . --quiet`.
   Commit: "<Animal>: reader fixes", with every original sentence you
   changed listed before and after in the commit message.

5. Push the branch (`git push -u origin claude/hub-<species>`) and report
   in one message: the set grade and hub grade, every number you
   changed with both sides, every original sentence changed (before and
   after), the links added and the ones skipped with the reason, the
   items you left for Mike (both-sourced conflicts, difficulty, anything
   in a component), and the branch name. End with "Ready for your review;
   nothing merged." Then stop and wait. Do not merge, do not start a
   second species, do not re-run the reader after the fixes.

Ask Mike before doing any of these, and wait for the answer: changing a
number where both pages cite a source; changing a difficulty label;
editing any file in src/ other than the guide data file and the
SHORT_LABELS line; deleting a FunFact, a Sources entry, or an affiliate
link; anything not covered above.
```
