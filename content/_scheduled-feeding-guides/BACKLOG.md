# Feeding Guide Backlog

Species that have the full 4-guide care set (cost / handling / health-issues / tank-setup)
but no feeding guide yet. Generated 2026-08-03.

**Status: 61 species with a full 4-set, 27 have a feeding guide, 34 missing.**

The publish queue at `queue.json` is currently empty. Move filenames into its `pending`
array to schedule them for the daily auto-publish routine.

## Reptiles (12)

- [ ] ackie-monitor
- [ ] argentine-tegu
- [ ] boa-constrictor
- [ ] california-kingsnake
- [ ] green-anole
- [ ] hognose-snake
- [ ] jacksons-chameleon
- [ ] leaf-tailed-gecko
- [ ] milk-snake
- [ ] savannah-monitor
- [ ] tokay-gecko
- [ ] veiled-chameleon

## Birds (6)

- [ ] african-grey-parrot
- [ ] budgie
- [ ] canary
- [ ] cockatoo
- [ ] conure
- [ ] lovebird

## Invertebrates (5)

- [ ] emperor-scorpion
- [ ] giant-millipede
- [ ] hermit-crab
- [ ] praying-mantis
- [ ] stick-insect

## Amphibians (4)

- [ ] axolotl
- [ ] fire-bellied-toad
- [ ] tiger-salamander
- [ ] whites-tree-frog

## Fish (3)

- [ ] corydoras-catfish
- [ ] neon-tetra
- [ ] oscar-fish

## Turtles & Tortoises (3)

- [ ] box-turtle
- [ ] russian-tortoise
- [ ] sulcata-tortoise

## Small & Exotic Pets (1)

- [ ] sugar-glider

## Cross-linking checklist for each new feeding guide

The 2026-08-03 health sweep found 8 published feeding guides sitting as orphans with
zero inbound links, because the auto-publish routine moves the file but does not wire
it up. Every new feeding guide needs both of these, or it ships with no internal link
equity:

1. **Add the slug to `src/lib/data/relatedArticles.js`.** The key is the *structured
   guide id* from `src/lib/data/guides/*.js`, which is not always the article slug
   prefix. Known mismatches in this backlog:

   | article slug prefix | relatedArticles key |
   |---|---|
   | `argentine-tegu` | `tegu` |
   | `fire-bellied-toad` | `fire-belly-toad` |
   | `giant-millipede` | `millipede` |
   | `oscar-fish` | `oscar` |
   | `jacksons-chameleon` | `chameleon` |
   | `african-grey-parrot` | `african-grey` |

   `scripts/site-health-sweep.js` resolves through guide slugs rather than keys, so it
   will not flag a correctly-wired species just because the names differ. It will still
   catch a key that matches no guide id at all.

2. **Add a body link from a sibling article.** The established pattern is one sentence
   at the end of the species' health-issues guide, in the "when to see a vet" closing
   paragraph, tying a diet cause to something on the health list. See
   `bearded-dragon-health-issues-guide.mdx` or `corn-snake-health-issues-guide.mdx`.
   Where a species has no health-issues guide, link from the nearest sibling instead
   (the dog feeding guides cross-link each other for this reason).

## Species-specific notes

- **Insectivores** (ackie monitor, green anole, jackson's chameleon, leaf-tailed gecko,
  tokay gecko, veiled chameleon, emperor scorpion, praying mantis, fire-bellied toad,
  tiger salamander, white's tree frog) should link
  `/blog/gut-loading-feeder-insects-guide/`. Scorpions and mantises cannot be dusted,
  so for those two gut-loading is the only route nutrition takes into the animal, worth
  saying explicitly.
- **Veiled chameleon** should also link the existing
  `chameleon-hydration-drippers-misters-fogging` article, since chameleons drink from
  droplets and hydration is part of the feeding routine.
- **Jackson's chameleon** shares the `chameleon` guide id with the hydration article, so
  its feeding guide lands on that same relatedArticles key.
- **Tortoises** (russian, sulcata) and **box turtle** run the opposite way from the
  insectivores: the failure mode is protein and fruit rather than insufficient feeder
  nutrition. Do not link gut-loading from these.
- **Hermit crab** and **giant millipede** overlap with the existing
  `invertebrate-molting-guide`, worth linking both directions.
- **Budgie / cockatoo / african grey / conure / lovebird / canary** all share the seed-diet
  versus pellet-diet problem. Vary the framing so the six do not read as one article
  rewritten, and cross-link them to each other rather than all pointing at the same hub.
