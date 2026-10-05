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

**None.** The 2026-09-27 run of five and the 2026-09-28 serval run of three were
promoted on 2026-09-28 as ids 334 to 341, and the sea otter pocket fact as 342, recorded in
`archive/docs-completed/NEEDS_IMAGE_COMPLETED_2026-09-17.md`.

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

## 2026-10-05 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Hoopoe** (Birds) - The Rotten Nest Trick. Nesting hoopoe mothers coat their eggs in a foul smelling secretion from a gland near the tail, and once the chicks hatch they keep up the defense by aiming their own droppings at anything that gets too close to the nest. The smell has been compared to rotting meat, and it appears to help fend off predators and keep feather damaging bacteria in check. Visual hook: a hoopoe chick at the nest entrance with its rear raised toward an approaching intruder.
2. **Manx Cat** (Dogs & Cats) - Born Without a Tail. A single dominant gene shortens the tail bones in Manx cats, so litters range from normal tailed kittens to completely tailless ones. That same gene can shorten the spine itself, and a kitten that inherits two copies of it is usually lost before birth, which is why responsible breeders never pair two tailless Manx cats together. Visual hook: a round rumped Manx cat seen from behind, sitting upright with no tail at all.
3. **Maned Wolf** (Mammals) - Not Really a Wolf. The maned wolf is neither a wolf nor a fox. It is the only living member of its own genus, and roughly half its diet is fruit and vegetables, especially a tomato like fruit called lobeira. Pairs are mostly loners that share a home range and raise pups together but hunt separately through the tall grass at night. Visual hook: a tall, long legged canid with fox like coloring standing alone in savanna grass at dusk, a red lobeira fruit nearby.
4. **Sarcastic Fringehead** (Ocean) - Mouth to Mouth Combat. This small territorial fish, rarely longer than about 8 inches, can stretch its mouth open to roughly four times its closed size. When a rival strays too close, two fringeheads press their gaping mouths together in a wrestling match, and the one with the smaller mouth backs down first. Visual hook: two small fish pressed mouth to mouth, jaws stretched open far wider than their own heads.
5. **Velvet Worm** (Weird & Wonderful) - The Slime Cannon. Velvet worms fire two jets of sticky slime from nozzles near their head, reaching prey up to a foot away and hardening in seconds to trap it in place. Their basic body plan has barely changed in hundreds of millions of years, making them one of the closest things alive to a true living fossil. Visual hook: a velvet worm firing twin jets of slime at a cornered insect in leaf litter.
