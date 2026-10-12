# Needs Image

The live queue for images that are blocked or drafted and not yet on disk. Open
items only. **Finished work does not stay here**: once a batch lands it is
recorded in `archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md` and
removed from this file, which is the only place that history lives.

## Open right now

**The 11 facts below need their own photo (found 2026-10-04).** As of 2026-09-28 every guide hero is on disk and every fact on the
site resolves its own photo, 342 of 342, none shared between two facts.

The five October heroes and the five parked facts all landed the same day.
`check-images.mjs` passes on 1,674 referenced paths.

## Facts that need their own photo (found 2026-10-04)

These 11 facts have no entry in FACT_IMAGES, so `imagePathFor()` falls back to ANIMAL_IMAGES by animal name and shows a photo another page already uses (the reason for the old fetch ban). Owner rule, 2026-10-04: one source photo appears once across the site, the packages and the books. Fix: give each fact its own new photo in FACT_IMAGES by fact id (never ANIMAL_IMAGES), mirrored in `public/_worker.js`; the hub, encyclopedia and article keep theirs. Photos may be free-licensed under the photo rule in CLAUDE.md, or generated; show the owner each one before installing. Fact photos are not cropped (CLAUDE.md). Once all 11 are in, the matching ANIMAL_IMAGES fallbacks can go.

Allowed reuse, not on this list: Beastle and the store's package cards; a fact photo as a Beastlypedia secondary image (never the head); a care guide hub and its encyclopedia entry (one page with a toggle); the legal section's shared hero. `python tools/image-audit/find_repeats.py` rechecks.

- [ ] Fact 1, Octopus: "Three Hearts of Love". Now shows `/assets/images/fun-facts-octopus.jpg`, the octopus fun-facts article hero.
- [ ] Fact 2, Hedgehog: "Spiny Situation". Now shows `/assets/guides/hedgehog.jpg`, the hedgehog hub and encyclopedia head.
- [ ] Fact 5, Bearded Dragon: "Mood Ring Lizards". Now shows `/assets/guides/bearded-dragon.jpg`, the bearded dragon hub and encyclopedia head (the owner's own Dex or Cera photos are a candidate).
- [ ] Fact 6, Rabbit: "Purring Bunnies". Now shows `/assets/guides/rabbit.jpg`, the rabbit hub and encyclopedia head.
- [ ] Fact 14, Axolotl: "Axolotl Superpowers". Now shows `/assets/images/fun-facts-axolotl.jpg`, the axolotl fun-facts article hero.
- [ ] Fact 39, Ball Python: "Months Without Eating". Now shows `/assets/guides/ball-python.jpg`, the ball python hub and encyclopedia head.
- [ ] Fact 41, Leopard Gecko: "Tail Fat Reserves". Now shows `/assets/guides/leopard-gecko.jpg`, the leopard gecko hub and encyclopedia head.
- [ ] Fact 42, Crested Gecko: "Rediscovered in 1994". Now shows `/assets/guides/crested-gecko.jpg`, the crested gecko hub and encyclopedia head.
- [ ] Fact 56, Guinea Pig: "Guinea Pigs Are Social". Now shows `/assets/guides/guinea-pig.jpg`, the guinea pig hub and encyclopedia head.
- [ ] Fact 72, Cuttlefish: "Hypnotic Skin". Now shows `/assets/images/fun-facts-cuttlefish.jpg`, the cuttlefish fun-facts article hero.
- [ ] Fact 149, Boa Constrictor: "Not a Suffocation Squeeze". Now shows `/assets/images/fun-facts-boa-constrictor.jpg`, the boa constrictor fun-facts article hero.

## Guide heroes still needed

None. The five October heroes (world animal day, octopus, sloth, reptile
awareness, wombat) arrived at 1168x784 exactly, so nothing was resized and
nothing was enlarged.

The eight wrong-species replacements landed 2026-09-12 alongside the federal law
guide hero, the fourteen legal-guide heroes on 2026-09-11, and the nine
feeding-guide heroes on 2026-09-09.

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
