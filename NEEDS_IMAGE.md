# Needs Image

Notes on animal facts that were drafted but did NOT make it into `src/lib/data/facts.js` because a verified photo couldn't be secured. These are FYI only, not added to the live data.

## Guide heroes still needed

**2026-09-09: conure-feeding.jpg.** The conure feeding guide is written and
wired (hub route added, RELATED_ARTICLES auto-detects the -feeding-guide
suffix). Needs a 1600x1067 3:2 hero at mozjpeg quality 80. Prompt was given in
chat: a green cheek conure on the rim of a steel bowl of pellets, one foot
lifted holding a pellet, chopped vegetables beside it, cool window light.


**2026-09-09: green-iguana-feeding.jpg.** The green iguana feeding guide is
written and wired (hub route, RELATED_ARTICLES auto-detects the -feeding-guide
suffix), and every gate passes except the image check, which reports
`/assets/images/green-iguana-feeding.jpg` referenced by
`content/guides/green-iguana-feeding-guide.mdx`. Needs a 1600x1067 3:2 hero at
mozjpeg quality 80, matching the sibling green iguana series. Photos are
site-owner-sourced, so this one is Mike's to produce.

## Completed

**2026-08-24: Kea, Dachshund, Pygmy Marmoset, Barreleye Fish, Basilisk Lizard.**
Added as ids 292 to 296. Photos were AI-generated (Adobe Firefly, site-owner-run
externally) matching each fact's visual hook, resized to max 1600px/quality 80
and placed in `public/assets/facts/`. `FACT_IMAGES` entries added to both
`src/lib/data/factImages.js` and `public/_worker.js`.

**2026-08-17: Kakapo, Maine Coon, Okapi, Nudibranch, Gila Monster.** Added as
ids 287 to 291. Photos were AI-generated (Adobe Firefly, site-owner-run
externally) matching each fact's visual hook, resized to max 1600px/quality 80
and placed in `public/assets/facts/`. `FACT_IMAGES` entries added to both
`src/lib/data/factImages.js` and `public/_worker.js`.

**2026-08-12: 2 more Shima Enaga facts, 3 Gaboon Viper facts, Gaboon Viper
article.** Added as ids 282 to 286, all site-owner-sourced real photos.
Tracked and promoted via `BEASTLYPEDIA_FACT_GAPS.md`, not here, since both are
Beastfile-linked. The Gaboon viper Beastfile now has real matched facts
instead of falling back to its authored `funFacts`, and its Wild Animals
article shipped once the header photo landed.

**2026-08-11: Cassowary, Border Collie, Pronghorn, Lionfish, Coconut Crab.**
Added as ids 276 to 280. The first four used photos the site owner sourced
directly. Coconut Crab's AI-generated attempt turned out to be a generic shore
crab, nothing like the real animal, so that one's a real CC BY 2.0 photo from
Wikimedia Commons instead, logged in `IMAGE_CREDITS.md`. Each fact got its own
photo in `public/assets/facts/`, with `FACT_IMAGES` entries added to both
`factImages.js` and `public/_worker.js`.

**2026-08-03: Kiwi, Greyhound, Orangutan, Sawfish, Mudskipper.** Drafted and
published the same day as ids 269 to 273, using photos the site owner sourced
directly. Each fact got its own photo in `public/assets/facts/`, with
`FACT_IMAGES` entries added to both `factImages.js` and `public/_worker.js`.

**2026-07-27: Toco Toucan, Beagle, Red Fox, Giant Manta Ray, Frilled-necked
Lizard, Slow Loris.** Completed the same day, same route.

## 2026-08-31 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Orca** (Ocean) - Killer Whale Family Trees. Orca pods are led by a matriarch, the oldest female, and her sons and daughters stay by her side for life. Each pod also has its own dialect of clicks and whistles that calves spend years learning, and these vocal traditions can stay nearly unchanged for decades. Visual hook: an orca matriarch swimming alongside two smaller orcas in tight formation.
2. **Pembroke Welsh Corgi** (Dogs & Cats) - The Copied Gene Legs. A corgi's short legs come from an extra copy of a gene called FGF4 that got inserted into a new spot in the dog genome, causing the leg bones to stop growing early. The same duplicated gene shows up in at least 19 short legged breeds, including dachshunds and basset hounds. Visual hook: a corgi standing side on so its short legs and long body are obvious against its normal sized head.
3. **Short-Beaked Echidna** (Weird & Wonderful) - The Land Animal That Senses Electricity. Echidnas have no teeth at all and grind up ants and termites with hard pads in their mouth after flicking a sticky tongue in and out up to 100 times a minute. Their snout is also packed with electroreceptors that pick up the faint electrical signals of prey underground, a sense usually only found in animals that live in water. Visual hook: a close up of an echidna's long snout probing into leaf litter or soil.
4. **Atlantic Puffin** (Birds) - Same Burrow, Same Mate. Atlantic puffins come back to the exact same burrow year after year, often reuniting with the same partner for 15 to 20 years even though the pair spends most of the year apart at sea. When they find each other again they tap bills and preen each other before settling back in to raise a single chick. Visual hook: a puffin pair standing bill to bill at the mouth of a grassy cliffside burrow.
5. **King Cobra** (Reptiles) - The Snake That Builds a Nest. The female king cobra is the only snake known to build a nest, spending days dragging leaves into a pile and compacting them into a waterproof mound that can stand almost a meter tall. She then lays her eggs inside and stays close by to guard them until they hatch. Visual hook: a king cobra coiled protectively beside a large mound of compacted leaves.

## 2026-09-07 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Bowerbird** (Birds) - The Blue Collector. Male satin bowerbirds build a twig avenue called a bower purely to impress mates, it is not a nest. They decorate it with objects and show a strong preference for blue, even stealing blue items from rival bowers, and females favor males whose bowers are bluer. Visual hook: a male satin bowerbird's twig bower scattered with blue bottle caps, flowers, and feathers.
2. **Siamese Cat** (Dogs & Cats) - Born Blank, Colored by Cold. Siamese kittens are born nearly all white because a mutation in their pigment enzyme only works in cooler body temperatures. As the ears, face, paws, and tail cool down after birth, those extremities darken into the breed's signature points while the warmer torso stays pale. Visual hook: a Siamese kitten showing the contrast between its still-pale body and its darkening ear and paw tips.
3. **Aardvark** (Mammals) - Teeth Like Tubes. Aardvarks are the only living species in their entire mammalian order, and their teeth are unlike any other mammal's, they have no enamel, no roots, and keep growing throughout life as bundles of tiny hexagonal tubes. At night they use a long sticky tongue, roughly a foot long, to mop up ants and termites by the thousands. Visual hook: an aardvark's long snout and tongue reaching into a torn open termite mound at night.
4. **Dumbo Octopus** (Ocean) - The Deepest Swimmer. Dumbo octopuses get their name from the two ear like fins on their mantle that flap to propel them through the water. They live deeper than any other known octopus, with one confirmed at nearly 7,000 meters down, in the crushing cold of the hadal zone. Visual hook: a small translucent dumbo octopus with its ear-like fins spread, drifting in the dark deep sea.
5. **Horned Lizard** (Reptiles) - The Eyes That Bleed on Command. When a coyote or other canine gets too close, a horned lizard can rupture blood vessels near its eyes and shoot a thin stream of blood several feet, loaded with chemicals from the ants it eats that canines find repulsive. The trick barely works on birds, so it is a defense aimed squarely at four legged hunters. Visual hook: a horned lizard mid-defense with a thin jet of blood arcing from near its eye toward an out of frame predator.

## Related

Beastlypedia has its own separate gap list in `BEASTLYPEDIA_FACT_GAPS.md`, for
facts that are blocked on photos *and* tied to a specific Beastfile page. Three
Gaboon viper facts are outstanding there.
