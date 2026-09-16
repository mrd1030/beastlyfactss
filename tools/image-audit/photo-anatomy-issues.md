# Photo Anatomy Audit

Tracks AI-generated site photos with real anatomical/species errors, found by
visually checking each image against known diagnostic features for the real
animal (not art style, lighting, or composition, actual wrong anatomy).

Pass 1 covered the 156 species master photos in `public/assets/guides/`
(these are what show up on encyclopedia cards, guide cards, and category
pages). Pass 2 covered the ~613 per-article photos in `public/assets/images/`
(cost/handling/health-issues/tank-setup/feeding, one unique image per
article, plus standalone fun-fact and comparison-article images).

Mark an item `[x]` once its photo has been replaced.

Status 2026-09-16: the boxes were never ticked, but spot checks show replacements landed (the corydoris master photo and the lovebird cost photo are both anatomically correct now). The gargoyle gecko feeding photo still shows a spotted, lidless gecko that reads as a leopard gecko; treat the rest as replaced unless a fresh look says otherwise.

## Pass 1: species master photos (`public/assets/guides/`)

### Confirmed

- [ ] **Corydoras Catfish** — `public/assets/guides/corydoras-catfish.jpg`
  - Body shows overlapping fish scales; real Corydoras are scaleless armored catfish with bony plates instead.
  - Tail is deeply forked; real Corydoras have a small, roughly squared-off tail.
  - Wrong barbel placement.
  - See the dedicated Corydoras section below, this species is wrong across nearly every one of its photos.

- [ ] **Angelfish** — `public/assets/guides/angelfish.jpg`
  - Shows a marine reef fish (rounded/oval body, short fins, coral-reef background), not the freshwater angelfish (*Pterophyllum scalare*) used everywhere else on the site. Wrong species, not just a detail.
  - Good news: confirmed isolated to this one file. All 6 per-article angelfish photos and both overview-grid angelfish panels checked and are correct.

- [ ] **Tiger Salamander** — `public/assets/guides/tiger-salamander-legal.jpg`, `public/assets/images/tiger-salamander-health-issues.jpg`
  - Pattern matches a European fire salamander (glossy jet-black skin, bold irregular yellow blotches, sometimes white-speckled snout), not a real tiger salamander (duller skin, plain snout matching body pattern).
  - `tiger-salamander.jpg`, `-cost.jpg`, `-handling.jpg`, `-tank-setup.jpg`, `-tank-setup-guide-1.jpg`, and `-vs-axolotl.jpg` were all checked and are correct, only these two files have the issue.

- [ ] **Neon Tetra** — `public/assets/guides/neon-tetra.jpg`
  - Coarse, sharply-outlined scales and a tall sail-like dorsal fin, more like a barb or danio. Real neon tetras are near-scaleless and translucent with a small, low dorsal fin.
  - Confirmed isolated to this one file, all 6 per-article neon-tetra photos are correct.

- [ ] **Oscar** — `public/assets/guides/oscar.jpg`
  - Heart-shaped pupil, anatomically impossible.
  - Confirmed isolated to this one file. Renders correctly everywhere else: the `oscar-fish-*.jpg` per-article set, and both overview-grid oscar panels.

- [ ] **Koi** (one panel) — `public/assets/guides/koi-conure-slider-scorpion-overview.jpg`
  - The koi panel has no barbels at all. Real koi always have two pairs at the mouth corners. Reads more like a goldfish.
  - Confirmed isolated to this master overview file. The in-body figure version (`koi-conure-slider-scorpion-overview-1.jpg`) and all per-article koi photos correctly show barbels.

- [ ] **Tetra** (one panel) — `public/assets/guides/boa-glider-mantis-tetra-overview.jpg`
  - Solid orange/red head hard-transitioning to solid turquoise-blue body/tail. Real neon/cardinal tetras have a horizontal iridescent stripe running the full length.
  - Confirmed isolated to this master file. The in-body figure version (`boa-glider-mantis-tetra-overview-1.jpg`) correctly shows the stripe pattern.

### Worth a second look (not confident enough to hard-flag)

- **Box Turtle** — `public/assets/guides/box-turtle-legal.jpg` — shell dome reads unusually smooth and high, more tortoise-like than a real box turtle's shape.
- **Deep-sea anglerfish** (fun-fact article) — `public/assets/images/weirdest-creatures-deep-sea-facts-that-will-blow-your-mind-0.jpg` — dark high-contrast lighting near the eyes could read as a doubled eye shape, couldn't confirm either way.

## Pass 2: per-article photos (`public/assets/images/`)

### Corydoras Catfish — wrong across nearly the whole set

Every photo below needs replacing or independent re-checking; this species has the highest error rate found in the whole audit.

- [ ] `corydoras-catfish-cost.jpg` — exaggerated tall, pointed, sail-like dorsal fin; real Corydoras have a small triangular fin with a single stiff spine.
- [ ] `corydoras-catfish-handling.jpg` — visible scales and a deep two-lobed forked tail (should be scaleless, small/near-square tail).
- [ ] `corydoras-catfish-health-issues.jpg` — horn-like protrusions on top of the head; real Corydoras barbels grow only around the mouth.
- [ ] `jacksonschameleon-canary-millipede-corydoras-overview-1.jpg` (corydoras panel only) — deeply forked tail. The chameleon, canary, and millipede panels in this same grid are fine.
- `corydoras-catfish-feeding.jpg` and `corydoras-catfish-tank-setup-guide-1.jpg` were checked and are correct. `corydoras-catfish-tank-setup.jpg` has fish too small/distant to judge confidently.

### Lovebird — a different, consistent issue

- [ ] `lovebird-cost.jpg`, `lovebird-enrichment.jpg`, `lovebird-health-issues.jpg`
  - All three give the bird a bold white bare-skin eye-ring paired with a pale horn-colored beak. Peach-faced lovebirds (the coloring shown) have no eye-ring at all; the lovebird species that do have a white eye-ring (Fischer's, masked) have red beaks, not pale ones. This exact trait combination doesn't match any real lovebird species.
  - `lovebird-handling.jpg` and `lovebird-tank-setup-guide-1.jpg` are correct (no eye-ring, consistent with peach-faced coloring).

### Everything else (one-off issues)

- [ ] **Axolotl** — `public/assets/images/axolotl-handling.jpg` — dorsal tail fin has sharp triangular spikes/serrations; real axolotl fin crests are smooth and softly wavy-edged.
- [ ] **Blue-Tongue Skink** — `public/assets/images/blue-tongue-skink-feeding.jpg` — extended tongue is pink/flesh-toned instead of blue, missing the species' single defining trait. (Its own `-health-issues.jpg` and tank-setup infographic get this right.)
- [ ] **Rat** — `public/assets/images/rat-handling.jpg` — tail (prominently shown, coiled around fingers) is smooth and glossy with no scale-ring texture at all.
- [ ] **Praying Mantis** — `public/assets/images/praying-mantis-ootheca.jpg` — the egg case is drawn as a smooth round ball with a fruit-like solid core; real oothecae are elongated, foam-textured, and internally segmented into many small egg chambers.
- [ ] **Hamster vs. Guinea Pig** — `public/assets/images/hamster-vs-guinea-pig.jpg` — the guinea pig is given large upright cupped ears, essentially a scaled-up hamster ear; real guinea pig ears are small, low-set, and rounded against the head.
- [ ] **Goldfish** — `public/assets/images/goldfish-cost.jpg` — has a pair of barbels at the mouth; goldfish are barbel-less (that's a defining difference from koi/carp). Isolated to this one file, the other 6 goldfish photos are correct.
- [ ] **Crow** (fun-fact article) — `public/assets/images/crows-are-smarter-than-you-think-and-they-probably-already-know-it-0.jpg` — beak is pale grey/bone-white instead of solid black. (The `-1.jpg` in the same article is correct.)
- [ ] **Madagascar Hissing Cockroach** — `public/assets/images/madagascar-hissing-cockroach-feeding.jpg` — "hands" gripping food look like crustacean pincers rather than a cockroach's simple legs/mandibles, plus a raised hook-curled body segment instead of the real flat oval abdomen.
- [ ] **Mantis Shrimp** (fun-fact article, two images) — `public/assets/images/mantis-shrimp-16-color-vision-punch-power-4.jpg` and `-5.jpg` — both actually show a spiny lobster (long antennae, lobster-style fanned tail, no raptorial claw), not a mantis shrimp. `-5.jpg` is a real stock photo carrying a National Geographic watermark, so that one is a wrong-photo-sourced problem, not an AI-generation problem.
- [ ] **Fire-Bellied Toad** — `public/assets/images/fire-bellied-toad-cost.jpg` — smooth-skinned, long-legged "true frog" body instead of the stocky, warty *Bombina orientalis* texture. (Its own `-handling.jpg` and `-health-issues.jpg` get the warty texture right.)
- [ ] **Madagascar Hissing Cockroach** (fun-fact article) — `public/assets/images/fun-facts-hissing-cockroach.jpg` — drawn with a large folded wing; Madagascar hissing cockroaches are wingless in both sexes, one of the species' best-known traits.
- [ ] **Humpback Whale** (fun-fact article) — `public/assets/images/fun-facts-humpback-whale.jpg` — open mouth shows sharp pointed teeth; humpback whales are baleen whales with no teeth, only fringed keratin plates.
- [ ] **Gargoyle Gecko** — `public/assets/images/gargoyle-gecko-feeding.jpg` — this is anatomically a leopard gecko (bold yellow/black bands, movable eyelids, plain clawed toes, no adhesive pads), not a gargoyle gecko (mottled grey/brown/tan, lidless fixed spectacle, adhesive lamellae toe pads). This looks like the wrong photo got attached to the article rather than a bad generation, may just need a straight file swap.

Everything else across the ~613 files (16 review batches, full file list in git history if you want it) checked out clean against real diagnostic features for each species.

## Skipped — not doing snake edits

These 7 confirmed/soft-flagged issues involve snake species and are being
left as-is by owner decision, not because they aren't real:

- **Corn Snake** — `public/assets/guides/corn-snake.jpg`, `public/assets/images/corn-snake-feeding.jpg` — vertical slit pupil (should be round, corn snakes are colubrids not pit vipers).
- **Corn Snake vs. Hognose Snake** — `public/assets/images/corn-snake-vs-hognose-snake.jpg` — hognose missing its signature upturned snout.
- **Ball Python** (fun-fact article) — `public/assets/images/fun-facts-ball-python.jpg` — neon teal/orange coloring, no real morph looks like this.
- **Boa Constrictor** (fun-fact article) — `public/assets/images/fun-facts-boa-constrictor.jpg` — shows ball python patterning instead of a boa's saddle blotches.
- **California Kingsnake** (soft flag) — `public/assets/guides/california-kingsnake.jpg` — tongue fork unconfirmable at available resolution.
- **Rosy Boa** (soft flag) — `public/assets/guides/rosy-boa-legal.jpg` — unusually uniform grey, could be a real pale morph.
- **Boa Constrictor** (soft flag) — `public/assets/images/boa-constrictor-health-issues.jpg` — odd reddish eye-area marks, most likely shadowed nostrils.
