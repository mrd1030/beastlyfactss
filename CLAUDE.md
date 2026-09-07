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

## Writing & Content Rules
- The full consolidated rulebook is docs/RULES.md. Read it before writing or editing content. The rules below are the non-negotiables.
- Never use em or en dashes. Say it another way: split the sentence, use a colon, or cut the aside. A comma is not a dash substitute.
- Use US spelling in prose. British variants are fine in SEO tags. Prefer the spelling "grey".
- Keep the existing split structure for care guides (cost / handling / health / tank setup). Do not turn them into long-form pillar pages.
- Never renumber facts. Removing a fact must leave an id gap (favorites are keyed by id).
- Never share one photo across multiple facts. Add new photos to FACT_IMAGES by id, never to ANIMAL_IMAGES by name.
- Every article needs 1-2+ in-body internal links. This is enforced by scripts/check-internal-links.mjs at the front of `build`, but write the links yourself rather than relying on the check to catch it.
- Every new article gets wired into RELATED_ARTICLES in src/lib/data/relatedArticles.js, against the guide ids it actually serves. Species articles ending in a standard suffix (cost/handling/health-issues/tank-setup/feeding/enrichment) auto-detect and need no entry. Anything else, and every cross-breed dog or cat hub, does. scripts/check-related-articles.mjs enforces this for articles tagged "Dog Health" or "Cat Health" and also fails on dead slugs and unknown guide ids, but wire it yourself when you write the article.
- When publishing new articles, spread dates across days (max 4-5/day). Never dump a whole batch on today's date.
- Dates in content (publish dates, lastUpdated, lastReviewed) use my local date, US Eastern, not the container clock. Cloud sessions run on UTC and tick over to tomorrow at 8pm my time; check before stamping a date after that hour.

## Technical Notes & Commands
- Always Read a file before making changes to it.
- "Research" means web search with real, verifiable sources. Never write research-shaped content from memory, and never hand me citations flagged as unverified. Aim for 3 to 5 source URLs per article, and go to 6 only when every source is quoted in the body and trimming one would orphan a cited claim. Never pad a Sources block to hit a number.
- Never fetch photos or source new affiliate products yourself. Grep affiliateProducts.js for exact existing links, never from memory.
- Infographic/content installs must stop at the image and internal-link checks. Do not run `npm run build` unless explicitly asked.
- Content pipeline order: matrix → legal guide → encyclopedia/Beastfile → care guides.
