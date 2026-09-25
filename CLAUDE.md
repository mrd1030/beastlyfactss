# BeastlyFacts

Solo developer passion project. Prefer fast, decisive work over exploration.

## Decision Style
- Be decisive. Pick one reasonable approach and implement it immediately.
- Do not list multiple alternatives or explore side paths unless explicitly asked.
- Prefer editing existing files over reading more files.
- If you start thinking about alternative approaches, edge cases, or related changes not requested: **STOP immediately and ask me**.
- When uncertain about something important, ask clear question(s) up front and wait for my answer, don't spiral into a slow back-and-forth. Default to one question. If the task genuinely needs more than one answer to proceed, ask them all together in a single message instead of trickling them out one at a time. If it's not important enough to block on, make the call yourself and move on.
- Keep intermediate reasoning short. Do not narrate every consideration.

## Collaboration Preferences
- No trailing summaries or recaps of what you just did.
- When I say "push", commit and push.
- Branch pushes are free: Cloudflare preview builds are disabled, only pushes to main build and deploy. Push your working branch freely to preserve work, bundled into few pushes, but never push to main unprompted. To push main without triggering a deploy, put [CI Skip] in the head commit message. Always use [CI Skip] when the push only touches docs, the ledger, or anything else that cannot change the built site.
- Cloud sessions lose unpushed commits when the session's machine is reclaimed, so push branch work before wrapping up.
- Bundle related changes into fewer commits when it makes sense.
- Don't ask for permission before acting on clear instructions.
- All times are my time, US Eastern, in both directions: scheduled check-ins, deploy windows, log timestamps you quote back, "come back in an hour". Write them bare, "12:40", with no zone label. Only name a zone when it is not mine, and only then. Cloud sessions run on UTC, so convert before speaking, and check EDT against EST rather than assuming a fixed offset. Where a raw UTC value genuinely matters, put it in parentheses after mine.

## Writing & Content Rules
- The full consolidated rulebook is docs/RULES.md. Read it before writing or editing content. The rules below are the non-negotiables.
- Never use em or en dashes. Say it another way: split the sentence, use a colon, or cut the aside. A comma is not a dash substitute.
- Use US spelling in prose. British variants are fine in SEO tags. Prefer the spelling "grey".
- Keep the existing split structure for care guides (cost / handling / health / tank setup). Do not turn them into long-form pillar pages.
- Never renumber facts. Removing a fact must leave an id gap (favorites are keyed by id).
- Never share one photo across multiple facts. Add new photos to FACT_IMAGES by id, never to ANIMAL_IMAGES by name.
- Every article needs 1-2+ in-body internal links, and that is a floor, not a target: link wherever another page is the real answer to something the article raised. This is enforced by scripts/check-internal-links.mjs at the front of `build`, but write the links yourself rather than relying on the check to catch it. Link whatever page is the real answer: another species, a cross-species guide, the encyclopedia profile, an overview, or the same species' own sibling guide when that is where the answer lives. At most 2 sibling links per article; cross-species links are not capped. Never link the care guide hub (the navigation carries it), and never in a sentence that exists only to carry the link. No "see our" or "check out our" phrasing: the sentence says what the other page settles. No closing paragraph that is a link library. The bearded dragon guides are the reference. No care-guide sentence under the opener.
- Every new article gets wired into RELATED_ARTICLES in src/lib/data/relatedArticles.js, against the guide ids it actually serves. Species articles ending in a standard suffix (cost/handling/health-issues/tank-setup/feeding/enrichment) auto-detect and need no entry. Anything else, and every cross-breed dog or cat hub, does. scripts/check-related-articles.mjs enforces this for articles tagged "Dog Health" or "Cat Health" and also fails on dead slugs and unknown guide ids, but wire it yourself when you write the article.
- An article's `date` is the day it ships, never a future date: the page is live and crawlable the moment it deploys. scripts/check-publish-dates.mjs fails the build on a future date. To write ahead, keep the article in `content/_scheduled-*` and move it into `content/` on the day it goes out. Spread a batch by shipping a few per day (max 4-5/day), not by dating ahead. Future dating comes back only if an automated release queue is built that moves files out of `content/_scheduled-*` on their day.
- Every new article needs a rotation number for Today's reads: run `node scripts/check-rotation.mjs --assign` after `node scripts/sync-articles.js` and commit `src/lib/data/rotation.json`. Numbers are permanent, like fact ids: never renumber, a removed article leaves a gap. The build fails on an unnumbered article.
- Dates in content (publish dates, lastUpdated, lastReviewed) use my local date, US Eastern, not the container clock. Cloud sessions run on UTC and tick over to tomorrow at 8pm my time; check before stamping a date after that hour.

## Technical Notes & Commands
- Always Read a file before making changes to it.
- "Research" means web search with real, verifiable sources. Never write research-shaped content from memory, and never hand me citations flagged as unverified. Aim for 3 to 5 source URLs per article, and go to 6 only when every source is quoted in the body and trimming one would orphan a cited claim. Never pad a Sources block to hit a number.
- Never fetch photos or source new affiliate products yourself. Grep affiliateProducts.js for exact existing links, never from memory.
- Infographic/content installs must stop at the image and internal-link checks. Do not run `npm run build` unless explicitly asked.
- Content pipeline order: matrix → legal guide → encyclopedia/Beastfile → care guides.
- **A cloud session cannot browse the external web.** Both engines launch fine
  and both fail the same way: every external https page dies with
  ERR_CERT_AUTHORITY_INVALID, because neither Chrome trusts the sandbox's
  TLS-interception CA. Playwright's Chromium at /opt/pw-browsers and
  puppeteer's own Chrome in ~/.cache/puppeteer are equally affected. Do not try
  to fix it by pinning the CA with --ignore-certificate-errors-spki-list: the
  sandbox blocks that as a containment escape, correctly. Rendering a local
  file or a localhost dev server still works, which is all the prerender and
  care-package scripts ever needed. Anything that must fetch a real site from a
  browser has to run on my desktop.
- When a headless run reports how many pages it handled, count the ones that
  returned text. Counting "entries without an error" reported 24 successful
  renders on a run where the browser loaded nothing, because the inputs were
  pages that had fetched fine and arrived empty.

## Docs and where they live
- Docs live in root. CLAUDE.md never moves from root under any circumstances.
- Finishing a batch of work does not move the doc that tracks it. The cycling
  docs (NEEDS_IMAGE.md, IMAGE_PROMPTS.md, BEASTLYPEDIA_FACT_GAPS.md) stay in
  root and hold open work only. Each has ONE companion in
  archive/docs-completed/ named `<NAME>_COMPLETED_<YYYY-MM-DD>.md`, and that
  companion is the only place its finished work lives: append the batch there,
  newest first, and delete it from the live file. A live doc never grows a
  history section.
- Only a one-off plan with nothing left in it leaves root, renamed the same way.
  If in doubt it stays in root: a live doc sitting in the archive is invisible,
  which is how NEEDS_IMAGE.md went quiet while 18 facts shipped without photos.
- Fact photos are not cropped. Guide and Beastfile heroes are 3:2 at 1168x784;
  a fact photo keeps whatever aspect it arrives at, because the lightbox shows
  the whole frame with object-contain. Re-encode through mozjpeg at quality 80,
  never enlarge.
