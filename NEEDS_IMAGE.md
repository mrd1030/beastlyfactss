# Needs Image

Notes on animal facts that were drafted but did NOT make it into `src/lib/data/facts.js` because a verified photo couldn't be secured. These are FYI only, not added to the live data.

## Status

Guide heroes: none outstanding. Fact photos: none outstanding as of 2026-09-17,
when ids 297 to 314 and 325 to 328 landed. That batch is recorded in
archive/docs-completed/FACT_PHOTOS_COMPLETED_2026-09-17.md; this file stays in
root and keeps cycling as new drafts need art.

## Guide heroes still needed

None outstanding. The eight wrong-species replacements landed 2026-09-12
alongside the federal law guide hero, the fourteen legal-guide heroes on
2026-09-11, and the nine feeding-guide heroes on 2026-09-09.

## Completed

**2026-09-12: eight wrong-species heroes replaced.** hedgehog,
hissing-cockroach, ball-python, california-kingsnake, emperor-scorpion,
emperor-scorpion-legal, corydoras-catfish and savannah-monitor-legal, all
found by the hero skim in docs/TODO.md item 5. Each arrived as a 1264x848 PNG
at 1.5 to 2.2MB and was resized and converted to 1168x784 JPEG at mozjpeg
quality 80, landing at 93 to 205KB, the same treatment the hognose and tokay
frames got. Installed at the existing filenames, so no data file, guide or
encyclopedia entry needed rewiring. The replaced files are kept in
`public/assets/guides/alternates/` with a README identifying what each actually
shows.

**2026-09-12: federal law guide hero installed.** `federal-exotic-pet-laws.jpg`,
a hatchling red-eared slider at the waterline, arrived at 1168x784 JPEG already
matching the house guide size and was re-encoded through mozjpeg at quality 80,
228KB down to 75KB. The article moved out of `content/_scheduled-legal-guides/`
into `content/guides/` the same day, wired into RELATED_ARTICLES against 14
guide ids and linked from the hub's federal section. Prompt is in
IMAGE_PROMPTS.md.

**2026-09-11: fourteen legal guide heroes installed.** crested-gecko,
leopard-gecko, green-iguana, blue-tongue-skink, gerbil, bearded-dragon,
hissing-cockroach, degu, tokay-gecko, jacksons-chameleon, guinea-pig, rabbit,
nile-monitor and red-footed-tortoise, all at `<id>-legal.jpg`. Eleven arrived as
1168x784 JPEG and were re-encoded through mozjpeg at quality 80. Three
(nile-monitor, blue-tongue-skink, tokay-gecko) arrived as 1264x848 PNG and were
resized and converted the same way the hognose frame was, landing at 148 to
196KB. The set went from 8.9MB to 1.7MB in total. Prompts are in
IMAGE_PROMPTS.md.

Five of the fourteen had articles waiting and went live with the art: crested
gecko, leopard gecko, green iguana, blue-tongued skink and gerbil. The other
nine heroes are installed and unreferenced until those guides are written, which
`check-images` does not mind.


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

## Facts awaiting images

None. The ten facts drafted in the 2026-08-31 and 2026-09-07 runs were promoted
to `facts.js` on 2026-09-12 as ids 315 to 324: orca, Pembroke Welsh Corgi,
short-beaked echidna, Atlantic puffin, king cobra, satin bowerbird, Siamese cat,
aardvark, dumbo octopus and horned lizard. Photos are in
`public/assets/facts/` under the animal's name, and each id is wired into
FACT_IMAGES in both `src/lib/data/factImages.js` and `public/_worker.js`.

Two of the ten were regenerated before they were accepted. The orca came back
with a bull's tall erect dorsal fin when the fact is that the pod is led by a
matriarch, and the satin bowerbird came back with a roofed hut, which is a
maypole bower built by a different species, rather than the two-walled roofless
avenue a satin builds. Both prompts in IMAGE_PROMPTS.md carry the corrected
wording, so a future regeneration starts from the version that worked.

The bowerbird's `animal` field reads "Satin Bowerbird" rather than the drafted
"Bowerbird", to match the fact text, which is specifically about satin
bowerbirds, and the photo filename. No Beastfile matches any of the ten by
name, so nothing moved off its authored fallback.

## Related

Beastlypedia has its own separate gap list in `BEASTLYPEDIA_FACT_GAPS.md`, for
facts that are blocked on photos *and* tied to a specific Beastfile page. It has
nothing outstanding: the three Gaboon viper facts it used to hold shipped on
2026-08-12 as ids 282 to 286. Corrected 2026-09-12, this line still claimed they
were waiting.

Full prompts for the ten facts above are in IMAGE_PROMPTS.md under "Fact photos
awaiting art". Eight frames were delivered and accepted 2026-09-12; the orca and
the satin bowerbird came back wrong and their prompts carry corrected wording.
