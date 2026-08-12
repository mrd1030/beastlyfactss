# Needs Image

Notes on animal facts that were drafted but did NOT make it into `src/lib/data/facts.js` because a verified photo couldn't be secured. These are FYI only, not added to the live data.

## Pending

**Shima Enaga.** Fun fact, Beastlypedia entry (`birds.js`), and a full Wild
Animals article (`shima-enaga-japans-snow-fairy-bird.mdx`) were all written and
verified working in commit `c7ae476`, then reverted because the photos were
sourced from Wikimedia Commons instead of AI-generated, breaking the "every
new fact/Beastfile needs its own generated photo, no reuse" rule (see
`BEASTLYPEDIA_FACT_GAPS.md`). The full text for all three pieces is intact in
that commit; retrieve with e.g. `git show c7ae476:content/guides/shima-enaga-japans-snow-fairy-bird.mdx`
rather than redrafting from scratch once photos exist.

Three photos needed, no reuse between them:

| Slot | Path |
|---|---|
| Fact card + Beastfile secondary (shared, per convention) | `public/assets/facts/shima-enaga.jpg` |
| Beastfile hero | `public/assets/beastlypedia/shima-enaga-hero.jpg` |
| Article header | `public/assets/images/shima-enaga-snow-fairy-facts.jpg` |

**Prompts:**

*Fact card / Beastfile secondary:*
> Photorealistic wildlife photograph of a shima enaga (Japanese long-tailed tit, Aegithalos caudatus japonicus), perched on a thin bare branch in a snowy Hokkaido forest in winter. Tiny round bird, body fluffed into an almost perfectly spherical white puff shape, long black-and-white tail trailing below like a handle. The face must be completely white with no dark eye-stripe or mask, small black eye, tiny dark beak. Soft overcast winter daylight, blurred snowy forest bokeh background. Sharp focus on the face and eye, crisp feather detail, natural bird photography style, not cartoonish or plush-toy rendering. Portrait or square orientation.

*Beastfile hero:*
> Photorealistic close-up wildlife photograph of a shima enaga (Japanese long-tailed tit), Japan's "snow fairy" bird, perched on a frost-dusted branch in a Hokkaido woodland. Round, fluffed white body for winter insulation, long slender black-and-white tail, completely white face with no dark markings around the eyes (this is the key identifying feature, unlike other long-tailed tit subspecies), small black eye, short dark beak, black wing markings visible along the folded wing. Soft diffused winter light, light snow visible on nearby twigs, gently blurred forest background. Ultra-detailed feathers, genuine wildlife photography look. Landscape orientation, wide enough for a page hero banner.

*Article header:*
> Photorealistic wildlife photograph of a shima enaga (Japanese long-tailed tit) mid-perch on a snow-covered branch in a Hokkaido forest, captured from a slight side angle. Small round fluffed white body, long thin black-and-white tail extending down and back, completely white face with a small black eye and short dark bill, no dark eye-stripe. Bright but soft winter daylight, a few out-of-focus snowflakes optional, softly blurred wintry background with hints of bare branches. Crisp, editorial nature-photography quality suitable for a blog article header image. Landscape orientation (roughly 4:3 or 16:9).

*Accuracy note: the completely white face (no dark eye-stripe) is the single
trait that separates this subspecies from every other long-tailed tit. If a
generated image shows a dark mask or stripe through the eye, reject it.*

## Completed

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
