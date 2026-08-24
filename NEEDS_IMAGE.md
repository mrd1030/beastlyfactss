# Needs Image

Notes on animal facts that were drafted but did NOT make it into `src/lib/data/facts.js` because a verified photo couldn't be secured. These are FYI only, not added to the live data.

## 2026-08-24 run: 5 facts drafted, awaiting images

Ready for the site owner to generate photos and add to facts.js.

1. **Kea** (Birds) - The Alpine Kleptomaniac. Kea are the world's only alpine parrots, living high in New Zealand's mountains, and are ranked among the smartest birds alive, with problem solving skills that can outperform some primates in lab tests. They are also notorious thieves, stripping rubber from cars and snatching gloves, wallets, and food from tourists at ski resorts. Researchers think this constant tinkering with new objects is how kea learn about their world. Visual hook: a kea perched on a car side mirror gripping a stolen glove in its beak, with snowy alpine peaks behind it.
2. **Dachshund** (Dogs & Cats) - Built for the Burrow. Dachshunds were bred in 18th century Germany specifically to hunt badgers, and their name literally means badger dog in German. Their short legs and long spine come from chondrodysplasia, a form of dwarfism that keeps the leg bones short while the rest of the body grows normally, ideal for squeezing through narrow burrows. That same long spine is why the breed is prone to disc problems later in life. Visual hook: a dachshund's long low body silhouetted at the mouth of a dirt burrow entrance.
3. **Pygmy Marmoset** (Mammals) - Too High to Hear. The pygmy marmoset is the smallest monkey in the world, weighing about as much as a stick of butter and small enough to fit in a human palm. They feed largely on tree sap, gouging small holes in bark with their teeth and returning to the same trees again and again to drink what oozes out. Some of their calls are pitched above the range of human hearing, letting them coordinate with their group without alerting nearby predators. Visual hook: a pygmy marmoset clinging to a tree trunk beside a cluster of small gouge holes in the bark.
4. **Barreleye Fish** (Ocean) - Eyes That Swivel Forward. The barreleye fish has a transparent, fluid filled dome for a head, with its two tubular eyes visible right through the shield. Scientists long assumed those eyes were fixed looking straight up, until a 2009 study showed the fish can actually rotate them forward to track food drifting in front of its mouth. The see-through shield is thought to protect its eyes while it steals scraps from the stinging tentacles of jellyfish-like siphonophores. Visual hook: a translucent-headed barreleye fish in deep blue water, its two green tubular eyes visible rotating forward through its dome-shaped head.
5. **Basilisk Lizard** (Reptiles) - Sprinting Across the Surface. The basilisk lizard, nicknamed the Jesus Christ lizard, can run across the surface of water on its hind legs without sinking. Fringed scales on its long toes unfurl with each step, and by slapping the water fast enough, up to 20 steps per second, it creates air pockets that briefly support its weight before it sinks back down. It can keep this up for roughly 20 meters before dropping into a swim. Visual hook: a basilisk lizard mid-stride on its hind legs across a pond's surface, water splashing up around its spread toes.

## Completed

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

## Related

Beastlypedia has its own separate gap list in `BEASTLYPEDIA_FACT_GAPS.md`, for
facts that are blocked on photos *and* tied to a specific Beastfile page. Three
Gaboon viper facts are outstanding there.
