# Consistency Sweep (2026-10-05, re-checked 2026-10-15)

Read-only sweep of the 20 care package animals plus the four highest-traffic
non-package species (molly, blue-tongue skink, zebra danio, jumping spider).
Each line: the conflict, then the page that should win (the deep dive that owns
the topic, per RULES.md "the deep dives own the numbers"). Original line
numbers are origin/main as of 2026-10-05; each kept item carries a
"Re-checked 2026-10-15" line with current files, lines and quotes. Open work
only; finished items live in
archive/docs-completed/CONSISTENCY_SWEEP_COMPLETED_2026-10-15.md.

Re-check 2026-10-15: of the 57 original conflicts, 47 were already fixed or
never needed a fix (the five safety items among them). 10 remain, below.

## Factual

- [ ] Ball python: cost guide `ball-python-cost-guide.mdx:106` hand-types "The
  snake, the full setup and the first vet exam come to $560 to $1,450". The
  same guide at :77 and the hub `snakes.js:43` use `%%setup:ball-python%%`
  with the first vet exam, which resolves to $560 to $1,395 before the snake.
  Snake ($40 to $100, :61) plus setup plus exam is $600 to $1,495. Owner: the
  token. Re-checked 2026-10-15, open.

## Minor

- [ ] Crested gecko: cost guide `crested-gecko-cost-guide.mdx:66` "even two
  females need at least double the space of an 18x18x36 inch enclosure" vs
  tank setup `:61` and `:43` "The minimum for one adult is 18x18x24 inches".
  Owner: tank setup. Re-checked 2026-10-15, open.
- [ ] Crested gecko: tank setup `crested-gecko-tank-setup-guide.mdx:74` cool
  area "70 - 75°F" vs its own `:81` "at or below about 72°F for extended
  periods cause lethargy and a dropped appetite ... a heat source is needed
  only when the room runs cooler than about 72°F". Settle the cool-area floor
  against the lethargy line. Re-checked 2026-10-15, open.
- [ ] African fat-tailed gecko: cost guide `african-fat-tail-cost-guide.mdx:57`
  heading "Averaging $100 to $200 for Normals" vs `:59` "commonly around $100"
  and hub `geckos.js:47` "Normals around $100". Owner: the body and hub.
  Re-checked 2026-10-15, open.
- [ ] White's tree frog: hub buy list `amphibians.js:415` "Calcium w/D3 and a
  reptile multivitamin" vs feeding guide `whites-tree-frog-feeding-guide.mdx:84`
  "Whether the calcium carries vitamin D3 depends on the lighting". The cost
  guide side is resolved (item `calcium-repashy-plus-6oz`, labeled "Calcium
  and multivitamin, all in one" in `costItems.js:737`). Owner: feeding guide.
  Re-checked 2026-10-15, only the hub line left.
- [ ] Axolotl: hub `amphibians.js:28` "Banned in California, New Jersey, New
  Mexico, Wyoming, Alabama, and Washington, D.C. ... and unclear in Arkansas"
  vs legal guide `axolotl-legal-guide.mdx:40` "Arkansas puts the axolotl on its
  prohibited list" (the matrix reads banned since 2026-10-08). The guide's
  description `:19` already matches its FAQ. Owner: legal guide. Re-checked
  2026-10-15, only the hub line left.
- [ ] Hamster: `chinchilla-vs-hamster-guide.mdx:49` "small enough to support
  securely in one cupped hand" and `:93` "easy to support securely in one
  cupped hand once it's tame" vs handling guide
  `hamster-handling-guide.mdx:44` "Cup both hands and scoop from underneath".
  The lines cited on 2026-10-05 (:69, :101) are fixed; the one-hand wording
  survives at :49 and :93. Owner: handling guide. Re-checked 2026-10-15.
- [ ] Molly: hub route line `fish.js:857` hand-types "the $130 to $260 the tank
  costs around it" vs hub Budget `fish.js:837` and cost guide
  `molly-cost-guide.mdx:70`, both `%%setup:molly%%`, which resolves to $190 to
  $410. The other side moved to the token; the route line is now further off.
  Owner: the token. Re-checked 2026-10-15.
- [ ] Zebra danio: feeding guide FAQ `zebra-danio-feeding-guide.mdx:44` "don't
  add fine-leaved plants or marbles the eggs can fall into" vs tank setup
  `zebra-danio-tank-setup-guide.mdx:95` "a patch of fine-leaved plants gives
  any eggs a place to fall" and the feeding guide's own `:74` and `:80`, which
  now hedge toward planted tanks. Only the FAQ is left. Owner: tank setup.
  Re-checked 2026-10-15.
- [ ] Jumping spider: hub buy list `invertebrates.js:631` "4x4x7 inches at the
  least" vs tank setup `jumping-spider-tank-setup-guide.mdx:61` "about 8 inches
  (20 cm) tall" and the hub's own `:592` "about 8 inches (20 cm) tall". The
  setup guide no longer carries a 4x4x7 figure. Owner: tank setup. Re-checked
  2026-10-15, open.
