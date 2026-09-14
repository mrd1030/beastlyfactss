# Needs Image

Notes on animal facts that were drafted but did NOT make it into `src/lib/data/facts.js` because a verified photo couldn't be secured. These are FYI only, not added to the live data.

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

## 2026-09-14 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Frigatebird** (Birds) - The Basketball-Sized Balloon. Male magnificent frigatebirds court females by inflating a bright red throat pouch that swells to roughly the size of a basketball, a process that takes about 20 minutes. Once it is fully inflated he drums his bill against it and shakes and shimmies to show it off, and a bigger, redder pouch tends to win more attention from females. Visual hook: a male frigatebird perched with its huge red throat pouch fully inflated.
2. **Newfoundland** (Dogs & Cats) - The Built-In Life Vest. Newfoundlands have webbed feet and an oily double coat suited to cold water, plus a broad chest that gives them unusually large lung capacity for sustained swimming. Instead of the usual doggy paddle, they swim with a rowing motion closer to a breaststroke, which is part of why the breed has long been used for water rescue along the coast of its namesake Canadian island. Visual hook: a Newfoundland swimming with its webbed front paws visible breaking the surface.
3. **Numbat** (Mammals) - 20,000 Termites a Day. A numbat can eat up to 20,000 termites in a single day, flicking them up with a long sticky tongue instead of chewing. Unlike almost every other marsupial, females have no pouch at all, so newborns simply cling to the fur on her belly, and numbats are also the only marsupial that is active exclusively during daylight. Visual hook: a numbat's striped back and long snout close to the ground near a termite mound.
4. **Immortal Jellyfish** (Ocean) - The Jellyfish That Rewinds. When Turritopsis dohrnii is injured, starved, or otherwise stressed, it can revert its adult body back into an earlier polyp stage instead of dying, with its cells transforming back into a younger form in a process called transdifferentiation. The resulting polyp colony can then bud off new, genetically identical jellyfish, so in theory the cycle can repeat indefinitely, though individuals still die from disease or predation. Visual hook: a tiny transparent jellyfish next to a settled polyp colony on the seafloor, showing both life stages side by side.
5. **Marine Iguana** (Reptiles) - The Lizard That Sneezes Salt. Marine iguanas are the only lizards on Earth that forage in the ocean, diving along the Galapagos coastline to graze on algae. Because their diet is so salty, glands behind the nose filter the excess out of their blood, and they clear it with a forceful sneeze that can leave a crust of white salt crystals on the snout. Visual hook: a marine iguana perched on dark volcanic rock with a visible crust of salt on its snout.

## Related

Beastlypedia has its own separate gap list in `BEASTLYPEDIA_FACT_GAPS.md`, for
facts that are blocked on photos *and* tied to a specific Beastfile page. Three
Gaboon viper facts are outstanding there.
