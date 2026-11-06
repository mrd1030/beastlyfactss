# Guide Sweep (set up 2026-11-06)

Every species' care guides brought up to the current rules in docs/RULES.md and CLAUDE.md. Open work only: when a species is done, move its row (with the grade and a few words on what changed) to `archive/docs-completed/GUIDE_SWEEP_COMPLETED_<YYYY-MM-DD>.md`, newest first, and delete it here. When the list is empty this file leaves root the same way.

Already done and out of scope: the legal guides, the livebearers (guppy, platy, molly, swordtail) and the tetras (black skirt, cardinal, ember, glowlight, neon, rummy-nose).

## Scope

Six guides per species: cost, handling, health issues, tank setup, feeding, enrichment. The fish group overview pages are checked when the sweep reaches a species they cover.

## Per article

1. Fable grades the article without opening the sources, taking the facts as correct, and lists anything that sounds odd or incorrect for owner review.
2. Run the checkers for the species: `check-internal-links`, `check-voice`, `check-source-links`, `check-source-promo`, `check-related-articles`, `check-hub-figures`, `check-hub-rows`, `check-species-numbers`.
3. Rules checklist:
   - Sources: 3 to 5, cap 6 (health 8). Same-site entries combined. No hobby sites; Seriously Fish and Practical Fishkeeping only on their conditions. Past a cap: stop and ask.
   - Internal links: 2 to 3, 4 at most, 2 sibling links at most. No hub link, no "see our", no link library, no care-guide sentence under the opener.
   - Closing section: 2 to 4 sentences under a specific heading, no new facts, products, prices or sources, no "In the end", "Overall" or "Remember" opener.
   - Fish temperatures: the overlap of FishBase and Seriously Fish, no target inside it.
   - US spelling, "gray", no dashes, US date order ("October 21st"), no "prices checked" lines.
   - The deep dive owns each number; the hub and other guides match it.
4. Fact-check fixes only what a source contradicts. Unsourced claims stay and go on the species' "Kept without a source (owner review)" list in `research/`.
5. `lastUpdated` moves only on changed guides, on the owner's Eastern date.
6. Any change the care package book also carries goes under that animal in FIX_PACKAGES.md with file and line.

One commit per species, pushed to the working branch.

## Order

### 1. Care package animals (20)

- [ ] bearded-dragon (in progress: cost guide graded B-, fixes and bioactive row applied 2026-11-06; morph paragraph added from owner MorphMarket screenshots. Bioactive guide should carry the DIY floor figure when the sweep reaches it)
- [ ] leopard-gecko
- [ ] crested-gecko
- [ ] gargoyle-gecko
- [ ] african-fat-tail
- [ ] ball-python
- [ ] hognose-snake
- [ ] russian-tortoise
- [ ] axolotl
- [ ] whites-tree-frog
- [ ] betta-fish
- [ ] goldfish
- [ ] rabbit
- [ ] guinea-pig
- [ ] hamster
- [ ] budgie
- [ ] lovebird
- [ ] cockatiel
- [ ] cockatoo
- [ ] tarantula

### 2. Everything else (58), to be ranked by Search Console impressions before starting

- [ ] ackie-monitor
- [ ] african-grey-parrot
- [ ] amano-shrimp
- [ ] angelfish
- [ ] argentine-tegu
- [ ] blue-tongue-skink
- [ ] boa-constrictor
- [ ] box-turtle
- [ ] bristlenose-pleco
- [ ] california-kingsnake
- [ ] canary
- [ ] cherry-shrimp
- [ ] chinchilla
- [ ] conure
- [ ] corn-snake
- [ ] corydoras-catfish
- [ ] degu
- [ ] discus
- [ ] emperor-scorpion
- [ ] ferret
- [ ] fire-bellied-toad
- [ ] fire-skink
- [ ] flying-squirrel
- [ ] garter-snake
- [ ] gerbil
- [ ] ghost-shrimp
- [ ] giant-millipede
- [ ] green-anole
- [ ] green-iguana
- [ ] hedgehog
- [ ] hermit-crab
- [ ] jacksons-chameleon
- [ ] jumping-spider
- [ ] koi
- [ ] leaf-tailed-gecko
- [ ] madagascar-hissing-cockroach
- [ ] milk-snake
- [ ] mourning-gecko
- [ ] mouse
- [ ] oscar-fish
- [ ] pacman-frog
- [ ] parrotlet
- [ ] praying-mantis
- [ ] quaker-parakeet
- [ ] rat
- [ ] red-eared-slider
- [ ] red-footed-tortoise
- [ ] rosy-boa
- [ ] savannah-monitor
- [ ] stick-insect
- [ ] sugar-glider
- [ ] sulcata-tortoise
- [ ] tiger-salamander
- [ ] tokay-gecko
- [ ] uromastyx
- [ ] veiled-chameleon
- [ ] zebra-danio
- [ ] zebra-finch

## Owner decisions open

- Tarantula: uneaten prey out within 24 hours, or never overnight? (Also blocks the tarantula book.)
- Guinea pig: "wild guinea pig" becomes wild cavies once the source is checked?
- UVB replacement tubes in the catalog: still deferred?
