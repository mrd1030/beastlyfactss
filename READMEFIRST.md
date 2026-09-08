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
- Article endings: branch claude/more-on-block adds a "More on the <animal>"
  block after the FAQ (src/components/blog/MoreOnSpecies.jsx), rendered
  from RELATED_ARTICLES so it is in the prerendered HTML, and fixes the
  sidebar so Deep Dive and Health and More prerender too (before this the
  whole sidebar was the string "Loading..." in every static page). You May
  Also Like excludes what the block shows; on phones the sidebar hides its
  copy of the species list. No MDX was touched. Prose closers stay as they
  are until the closer rule is tightened (next jobs).
- Date rule, decided 2026-09-08: navigation-only and FunFact edits do not
  bump lastUpdated or lastReviewed. Only a fact added or reviewed does.
- The 111 baseline blog posts: noted, left alone for now.
- Sources rule: retailer product pages never go in Sources. Cost guides
  carry one plain "Prices last checked <Month Year> at ..." line under the
  last cost table instead.
- Care packages: analyzed, not edited. Leaner than the site on
  intensifiers (1.2 per 1,000 words). No action planned.

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
4. Tighten the closer rule in scripts/check-voice.mjs (count the last two
   paragraphs, and no article ends on a link sentence), then one pass by
   series that keeps the sibling sentence with a reason and drops the
   category and overview sentences the new block now carries. The pill row
   shape (`[Cost](/..) · [Handling](/..)`) is the fallback where no closing
   sentence earns its place; allow `•` as well as `·` in the checker first.
5. The 111 baseline blog posts: noted.

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

