# Needs Image

The live queue for images that are blocked or drafted and not yet on disk. Open
items only. **Finished work does not stay here**: once a batch lands it is
recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md` and
removed from this file, which is the only place that history lives.

## Open right now

Every fact on the site resolves its own photo. The 11 facts that were
borrowing another page's photo got their own on 2026-10-18.

The five October heroes and the five parked facts all landed the same day.
`check-images.mjs` passes on 1,674 referenced paths.

## Guide heroes still needed

None. All 17 animal-day heroes (docs/NOV_DEC_ANIMAL_DAYS.md) landed on
2026-10-18, owner-generated, installed at 1168x784 through mozjpeg at quality
80. The 13 that arrived larger (1264x848 or 1728x1152) were scaled down, never up.

## Facts awaiting images

The 2026-10-05 run of five (hoopoe, Manx cat, maned wolf, sarcastic
fringehead, velvet worm) was promoted the same day as ids 343 to 347, recorded in
`archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md`. The run below is
the current open batch.

## 2026-10-12 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Frigatebird** (Birds) - The Red Balloon Display. Male frigatebirds attract mates by inflating a bright red throat pouch called a gular sac into a balloon nearly as large as their own body, then drumming their bill against it to make a resonating sound. The inflation can take around 20 minutes, and once a male pairs up, the pouch deflates and fades from red to pale orange. Visual hook: a male frigatebird with its giant red throat pouch fully inflated like a balloon, wings spread on a low branch.
2. **Scottish Fold** (Dogs & Cats) - The Folded Ear Gene. A Scottish Fold cat's signature folded ears come from a single gene mutation in TRPV4, identified by researchers in 2016. That same mutation affects cartilage throughout the body, and cats with two copies of it are prone to painful joint and bone problems, which is why vets and welfare groups discourage breeding two folds together. Visual hook: a close-up of a Scottish Fold cat's forward-folded ears against its round face.
3. **Fossa** (Mammals) - Not Actually a Cat. The fossa looks like a small cougar, but it is actually Madagascar's largest carnivore and a close relative of the mongoose, not a cat. It can climb down tree trunks head first using semi-retractable claws and flexible ankles, and lemurs make up more than half of its diet. Visual hook: a fossa descending a tree trunk head first, claws gripping the bark.
4. **Chambered Nautilus** (Ocean) - The Ancient Spiral Shell. Chambered nautiluses have barely changed in roughly 500 million years, making them one of the oldest living lineages in the ocean. Their spiral shell holds more than 30 gas-filled chambers connected by a thin tube called the siphuncle, which the animal uses to shift fluid in and out and control its buoyancy as it rises and sinks. Visual hook: a cross-section of a chambered nautilus shell showing its spiral chambers, with the live animal's tentacles visible at the shell's opening.
5. **Paradise Flying Snake** (Reptiles) - Swimming Through the Air. The paradise flying snake spends most of its life round like any other snake, but to glide between trees it splays its ribs outward and pulls in its belly, flattening into a dome-shaped cross-section that generates lift. Once airborne it undulates side to side as if swimming, steering itself toward a landing branch. Visual hook: a flying snake mid-glide between trees, its body flattened and curved in an S-shape against the sky.

## 2026-10-19 run: 6 facts split off, awaiting images

Each of these was a second point bundled into facts 348 to 351. Under the one
fact, one point rule they become their own cards, each needing its own photo.
The claims come from the original 2026-10-18 drafts and have not been
re-checked against sources yet.

1. **Tawny Frogmouth** (Birds) - Plan B: Puffing Up. If a predator comes too close to a stumping tawny frogmouth anyway, the bird abandons the branch disguise and puffs up its feathers to look larger. Visual hook: a tawny frogmouth with feathers fluffed out wide and beak open, facing the camera.
2. **Tawny Frogmouth** (Birds) - A Beak, Not Talons. Tawny frogmouths hunt mostly from dusk to dawn, waiting still on a perch until prey wanders close, then dropping down and snatching it with their wide beak rather than their feet. Visual hook: a tawny frogmouth dropping from a low branch at dusk, wide beak open toward an insect on the ground.
3. **Xoloitzcuintli** (Dogs & Cats) - The Dog of Xolotl. The Aztecs linked the hairless Xoloitzcuintli to the god Xolotl and often buried the dogs alongside their owners. Visual hook: a Xoloitzcuintli resting beside carved stone in warm light, its smooth gray skin and tall ears in profile.
4. **Xoloitzcuintli** (Dogs & Cats) - Saved by an Expedition. The Xoloitzcuintli nearly vanished after the Spanish conquest, surviving mainly in remote villages until a 1950s expedition tracked down enough dogs to rebuild the breed. Visual hook: a small group of Xoloitzcuintli in a dusty rural village lane.
5. **Binturong** (Mammals) - Neither Bear Nor Cat. The binturong is often called the bearcat, but it is neither a bear nor a cat. It is a long tailed relative of civets, found in the forests of South and Southeast Asia. Visual hook: a binturong's face close up, white tufted ears and long white whiskers against dark fur.
6. **Blue-Tongued Skink** (Reptiles) - A Tongue That Glows in UV. A blue-tongued skink's tongue reflects ultraviolet light, and the back of the tongue reflects almost twice as brightly as the tip. Visual hook: a blue-tongued skink's open mouth from the front, the tongue lit so its deep blue glows against the pink mouth.

## How a blocked fact works

A fact can be drafted and parked here when no verified photo exists. Parked
facts are **not** added to `src/lib/data/facts.js`: a promoted fact whose image
never lands renders as dead text in a list where every neighbour opens a
picture. Promotion steps are in `BEASTLYPEDIA_FACT_GAPS.md`.

A full Wild Animals article can be parked the same way, saved as
`<slug>.mdx.draft` under `content/guides/`. The `.draft` suffix keeps
`check-images.mjs` and `sync-articles.js` from seeing it. Rename to `.mdx` once
the photo lands.

## Related

`BEASTLYPEDIA_FACT_GAPS.md` holds facts blocked on photos *and* tied to a
specific Beastfile page. Prompt style rules are in `IMAGE_PROMPTS.md`; the
prompts that produced existing images are in
`archive/docs-completed/IMAGE_PROMPTS_COMPLETED_2026-09-17.md`.
