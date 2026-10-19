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

## 2026-10-18 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Tawny Frogmouth** (Birds) - The Branch That Wasn't. Tawny frogmouths hunt mostly from dusk to dawn, waiting still on a perch until prey wanders close, then dropping down and snatching it with their wide beak rather than their feet. By day they freeze bolt upright with feathers flattened and eyes narrowed to slits, a pose called stumping that makes them look like a snapped off tree branch, and if a predator gets too close anyway, the bird abandons the disguise and puffs up to look larger. Visual hook: a tawny frogmouth frozen upright on a branch at dusk, feathers flattened and eyes narrowed, blending in like broken wood.
2. **Xoloitzcuintli** (Dogs & Cats) - The Aztec Dog That Survived. The Xoloitzcuintli is one of the oldest dog breeds in the Americas, with clay figures resembling it found in Mexican burial sites dating back roughly 3,000 years. The Aztecs linked the hairless dog to the god Xolotl and often buried the dogs alongside their owners, and the breed nearly vanished after the Spanish conquest, surviving mainly in remote villages until a 1950s expedition tracked down enough dogs to rebuild the line. Visual hook: a Xoloitzcuintli's smooth, hairless gray skin and alert ears, standing in warm late afternoon light.
3. **Binturong** (Mammals) - The Scent of Popcorn. The binturong, also called the bearcat, is neither a bear nor a cat but a long tailed relative of civets found in South and Southeast Asian forests. Its urine carries a compound called 2-acetyl-1-pyrroline, the same chemical that gives popcorn its smell, and the animal rubs it onto branches and its own feet with every step to mark territory, though researchers who confirmed the chemical in a 2016 study still are not sure exactly where in the binturong's body it is produced. Visual hook: a binturong curled in a tree with its long prehensile tail wrapped around a branch.
4. **Immortal Jellyfish** (Ocean) - The Jellyfish That Rewinds. Turritopsis dohrnii, a jellyfish only a few millimeters wide, can respond to injury, starvation, or harsh temperature by collapsing its adult body into a cyst and regrowing as the juvenile polyp stage it started life as, a process called transdifferentiation where mature cells convert directly into different cell types instead of dying off. This does not make the species invincible since it can still be eaten or killed outright, but the ability to restart its own life cycle earned it the nickname the immortal jellyfish. Visual hook: a tiny, near transparent jellyfish beside a small polyp colony, showing both life stages side by side.
5. **Blue-Tongued Skink** (Reptiles) - A Tongue Built to Startle. When a blue-tongued skink is cornered, it flashes a bright blue tongue that reflects ultraviolet light, with the back of the tongue glowing almost twice as bright as the tip. A 2020 study found the lizards rely on camouflage first and save this display for a last resort, and they flashed it far more often at models of birds and foxes than at snake or goanna models, suggesting the sudden burst of color works as a startle display timed to throw off an attacker rather than a signal aimed at other skinks. Visual hook: a blue-tongued skink with its mouth wide open, bright blue tongue extended as a warning.

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
