# Feeding guides to do

Written 2026-09-11. Sixteen species have a full deep-dive set but no feeding
guide. Model each one on `content/guides/bearded-dragon-feeding-guide.mdx`.

## Missing feeding guides

Status 2026-09-16: the 14 species below that have a full four-guide set now have feeding guides, dated 2026-12-03 to 2026-12-16, each with three opened sources, its hub route repointed from the stand-in species, and a body link from its health guide. Fire skink and quaker parakeet followed the same day, dated 2026-12-17 and 2026-12-18, so every species with a full set now has a feeding guide.

- argentine-tegu
- california-kingsnake
- canary
- fire-bellied-toad
- fire-skink
- giant-millipede
- green-anole
- jacksons-chameleon
- leaf-tailed-gecko
- milk-snake
- praying-mantis
- quaker-parakeet
- savannah-monitor
- stick-insect
- tiger-salamander
- tokay-gecko

## Plan

- Work on a branch. Nothing reaches main until "push".
- Four batches of four. Each guide gets real web research, 3 to 5 sources
  opened for the article, and follows the bearded dragon guide's layout.
- Include a portion line wherever the sources give one, so the new guides
  do not add to the open portions issue below.
- Dates: one a day starting 2026-10-07, the day after the last scheduled
  feeding guide (lovebird, 2026-10-06).
- Never fetch photos. Log the 16 hero images in archive/docs-completed/NEEDS_IMAGE.md at
  `/assets/images/<species>-feeding.jpg`.
- Run `scripts/sync-articles.js` after writing, or the guides render as raw
  slugs and never appear in Deep Dive.
- The feeding suffix auto-wires RELATED_ARTICLES. None of these 16 hubs is a
  router yet, so there is no hub route to add.
- Stop at the image and internal-link checks. No full build.
- Post a short progress note after each batch.

## Open: portions in the existing feeding guides

The 2026-09-09 readers of the nine new feeding guides (conure, budgie, hermit
crab, hognose, White's tree frog, Russian tortoise, lovebird, box turtle,
green iguana) all flagged missing portion sizes. Commit 776bcb98 left it for a
separate pass. Done 2026-09-16 for the five that lacked a figure: conure (a tablespoon is a dinner plate), budgie and lovebird (a thumbnail is a dinner plate, and a quarter-full dish once a day for the lovebird), hermit crab (nightly, out by morning, amount per the food label, since no source gives a pinch figure). Hognose, White's tree frog, green iguana and box turtle already carried portions or splits, and the Russian tortoise guide says honestly that no published portion exists.
