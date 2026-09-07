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

## State as of 2026-09-07

- Voice pass: done across every series (handling, enrichment, tank setup,
  cost, health, feeding, legal, overview, vs, 10-surprising). The strict
  gate passes. The 111 baseline slugs are one-off blog posts; they are the
  only articles still failing, and nobody has decided whether to pass them.
- Beef-up: batch 1 (crested gecko humidity, leopard gecko temperature,
  tokay and uromastyx health) is on main, fact-checked against every cited
  source. Batches 2 to 5 are scoped in docs/BEEF_UP_PLAN.md and not started.
- Care packages: analyzed, not edited. They are already leaner than the
  site on intensifiers (1.2 per 1,000 words). Their one tic is "X, not Y"
  cadence. No action planned.

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

## Known display problems, not yet fixed

These were spotted on the live site on 2026-09-07 and are the next job.
They are rendering and data problems, not writing problems.

### 1. Title and lede shown twice at the top of most articles

Two separate causes, both in how the page renders:

- **Duplicate title.** 709 of 772 MDX bodies begin with `# <Title>`. The
  page already renders `post.title` as the H1 (src/pages/Blog.jsx, around
  line 860), and the body's H1 is passed through
  src/components/mdx/DemotedH1.jsx, which turns it into an H2. So the title
  appears twice: once in the header, once as a styled H2 above the body.
  Fix: make DemotedH1 return `null` (one line, no content churn), then check
  the "On This Page" table of contents still builds from H2s in the body
  and does not list the demoted title. Stripping the `# ` lines from the
  709 files is the alternative if the component route breaks something.
- **Duplicate lede.** In 232 articles the body's first paragraph is the
  same sentence as the `excerpt` field, and Blog.jsx renders the excerpt as
  an italic block with an orange bar right above the body. Fix at sync
  time: in scripts/sync-articles.js, compare the normalized first body
  paragraph to the excerpt and emit a flag (for example
  `ledeMatchesExcerpt: true`) into the generated article data; then in
  Blog.jsx skip the italic excerpt block when the flag is set. Do not
  rewrite 232 excerpts by hand; the cards and meta descriptions still use
  them.

### 2. FAQ answers show raw markdown links

Blog.jsx renders each FAQ answer as plain text (`<p>{faq.a}</p>`), so a
markdown link in an answer prints as `[text](/url/)`. Five answers carry
one: aquarium-filtration-guide, bird-sexing-weight-body-condition-guide,
discus-handling-guide, outdoor-reptile-housing-guide,
zebra-danio-feeding-guide. Fix: strip those five links to their anchor text
(the FAQ schema text should be plain anyway), and add an error rule to
scripts/check-voice.mjs (`faq-link`) so no FAQ answer carries `](` again.
Do not add a markdown renderer to the FAQ block.

## Next jobs, in order

1. The two display fixes above (one session, small code change plus a
   checker rule, verify on a local build with `npm run dev` screenshots).
2. `/beef-up 2 go` (seven cost guides), then verify per the loop above.
3. `/beef-up 3 go` and `/beef-up 4 go` (handling guides).
4. Decide what to do with the 111 baseline blog posts.

## The prompt to paste into a new session

See the end of this file. It assumes Fable 5.1, a fresh branch, and that
Mike will say "merge" when a piece is done.

---

```
Read READMEFIRST.md, then CLAUDE.md, then the "Writing an article" section
of docs/RULES.md. Work on a new branch from main. Never push main unless I
say merge. Max two agents at a time.

Job 1: fix the two display problems in READMEFIRST.md, section "Known
display problems". Duplicate title: make DemotedH1 render nothing and
confirm the On This Page list still works. Duplicate lede: add a sync-time
flag in scripts/sync-articles.js and hide the excerpt block in Blog.jsx
when the lede matches it. FAQ links: strip the markdown links out of the
five FAQ answers listed there to plain text, and add a faq-link error rule
to scripts/check-voice.mjs. Run the strict voice check, the link check,
and the related-articles check. Start the dev server and screenshot the
goldfish tank setup guide and the discus handling guide top and FAQ,
before and after, so I can see it. Push the branch and stop.

Job 2, after I say merge: run /beef-up 2 go on a new branch, then verify
it the way READMEFIRST.md describes, including one fact-check agent that
opens every cited source. Fix what it finds, push the branch, report the
before and after word counts and anything you left unfixed, and stop.
```
