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
- Bundle related changes into fewer commits when it makes sense.
- Don't ask for permission before acting on clear instructions.

## Writing & Content Rules
- Never use em or en dashes. Use commas or periods instead.
- Use US spelling in prose. British variants are fine in SEO tags. Prefer the spelling "grey".
- Keep the existing split structure for care guides (cost / handling / health / tank setup). Do not turn them into long-form pillar pages.
- Never renumber facts. Removing a fact must leave an id gap (favorites are keyed by id).
- Never share one photo across multiple facts. Add new photos to FACT_IMAGES by id, never to ANIMAL_IMAGES by name.
- Every article needs 1-2+ in-body internal links. This is enforced by scripts/check-internal-links.mjs at the front of `build`, but write the links yourself rather than relying on the check to catch it.
- When publishing new articles, spread dates across days (max 4-5/day). Never dump a whole batch on today's date.

## Technical Notes & Commands
- Always Read a file before making changes to it.
- Never fetch photos or source new affiliate products yourself. Grep affiliateProducts.js for exact existing links, never from memory.
- Infographic/content installs must stop at the image and internal-link checks. Do not run `npm run build` unless explicitly asked.
- Content pipeline order: matrix → legal guide → encyclopedia/Beastfile → care guides.
