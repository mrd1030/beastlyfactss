# Photo Anatomy Audit

Tracks AI-generated site photos with real anatomical/species errors, found by
visually checking each image against known diagnostic features for the real
animal (not art style, lighting, or composition, actual wrong anatomy).

Pass 1 covered the 156 species master photos in `public/assets/guides/`
(these are what show up on encyclopedia cards, guide cards, and category
pages). Pass 2 (per-article cost/handling/health/tank-setup/feeding photos in
`public/assets/images/`, ~613 files) is tracked separately below once it
runs.

Mark an item `[x]` once its photo has been replaced.

## Pass 1: species master photos (`public/assets/guides/`)

### Confirmed

- [ ] **Corydoras Catfish** — `public/assets/guides/corydoras-catfish.jpg` (also the corydoras panel in `public/assets/guides/jacksonschameleon-canary-millipede-corydoras-overview.jpg`)
  - Body shows overlapping fish scales; real Corydoras are scaleless armored catfish with bony plates instead.
  - Tail is deeply forked; real Corydoras have a small, roughly squared-off tail.
  - Barbel placement is wrong (found on the `-handling` and `-health-issues` article photos too, see Pass 2 note below).

- [ ] **Angelfish** — `public/assets/guides/angelfish.jpg`
  - Shows a marine reef fish (rounded/oval body, short fins, coral-reef background), not the freshwater angelfish (*Pterophyllum scalare*) used everywhere else on the site. Wrong species, not just a detail. Compare to the correctly-rendered one in `ackie-milksnake-mhc-angelfish-overview.jpg`.

- [ ] **Corn Snake** — `public/assets/guides/corn-snake.jpg`
  - Vertical slit pupil. Corn snakes are colubrids with round pupils; a vertical slit is a pit-viper trait (e.g. copperhead).

- [ ] **Tiger Salamander** — `public/assets/guides/tiger-salamander-legal.jpg`
  - Pattern matches a European fire salamander (glossy jet-black skin, bold irregular yellow blotches in loose paired rows, white-speckled snout), not a real tiger salamander (duller skin, plain snout matching body pattern). The plain `tiger-salamander.jpg` is fine, only this `-legal` variant is wrong.

- [ ] **Neon Tetra** — `public/assets/guides/neon-tetra.jpg`
  - Coarse, sharply-outlined scales and a tall sail-like dorsal fin, more like a barb or danio. Real neon tetras are near-scaleless and translucent with a small, low dorsal fin and a visible adipose fin.

- [ ] **Oscar** — `public/assets/guides/oscar.jpg`
  - Heart-shaped pupil, anatomically impossible. Same species renders correctly elsewhere (`leaftailedgecko-kingsnake-boxturtle-oscar-overview.jpg`), so this looks like an isolated generation flaw rather than a systemic one.

- [ ] **Koi** (one panel) — `public/assets/guides/koi-conure-slider-scorpion-overview.jpg`
  - The koi panel has no barbels at all. Real koi (domesticated common carp) always have two pairs at the mouth corners. Reads more like a goldfish.

- [ ] **Tetra** (one panel) — `public/assets/guides/boa-glider-mantis-tetra-overview.jpg`
  - Solid orange/red head hard-transitioning to solid turquoise-blue body/tail. Real neon/cardinal tetras have a horizontal iridescent stripe running the full length, never a front-head/back-body color block split.

### Worth a second look (not confident enough to hard-flag)

- **Box Turtle** — `public/assets/guides/box-turtle-legal.jpg` — shell dome reads unusually smooth and high, more tortoise-like than a real box turtle's shape.
- **California Kingsnake** — `public/assets/guides/california-kingsnake.jpg` — tongue fork unconfirmable at available resolution, worth zooming in yourself.
- **Rosy Boa** — `public/assets/guides/rosy-boa-legal.jpg` — unusually uniform grey, low contrast. Could be a real pale morph, could be an error.
- **Rat** — `public/assets/guides/rat.jpg` — tail reads smooth rather than visibly scale-ringed, plausible at this render detail level rather than a clear error.

## Pass 2: per-article photos (`public/assets/images/`)

Not yet run. ~613 files (cost/handling/health-issues/tank-setup/feeding
photos, one unique image per article). Known from the corydoras case that
this tier has its own independent errors not caught by the Pass 1 check
(the `corydoras-catfish-cost.jpg` dorsal fin issue and `corydoras-catfish-
handling.jpg` scale issue), so it needs its own full sweep, not just a
recheck of species already flagged in Pass 1.
