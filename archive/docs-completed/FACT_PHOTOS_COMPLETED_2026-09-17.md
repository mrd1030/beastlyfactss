# Fact photos completed, 2026-09-17

The batch record for 22 fact photos. The live queue is NEEDS_IMAGE.md in root,
which stays there and cycles; this file is the closed batch, written once the
images landed.

## What shipped

**Ids 297 to 314, eighteen photos.** The block created alongside their species'
care guides and left behind while ids 315 to 324 were finished. Discus, cardinal
tetra, molly, flying squirrel, platy, swordtail, zebra danio, bristlenose pleco,
cherry shrimp, amano shrimp, ghost shrimp, zebra finch, parrotlet, fancy rat,
fancy mouse, red-footed tortoise, garter snake, rosy boa.

**Ids 325 to 328, four photos.** The bald eagle set, written the same day the
Beastfile was added: the record nest, the white head as an age marker, the
curved dive, and the name.

After this, every fact on the site resolves its own photo, 328 of 328, with no
photo serving two facts. FACT_IMAGES is 200 entries, identical in
`src/lib/data/factImages.js` and `public/_worker.js`.

Knock-on: the daily social poster picks from photographed facts only, so its
pool went from 178 to 200. `docs/social-feed-automation.md` is updated to match.

## Two corrections worth keeping

**Fact photos are not cropped to 3:2.** The lightbox renders them with
`object-contain` and shows the whole frame, and 63 existing fact photos are
portrait at 784x1168. The first pass at this batch centre-cropped every delivery
to 1168x784 and threw away 17% of the width on five of the fish and 10% of the
height on the rest. All 22 were reinstalled at the size they arrived. Guide and
Beastfile heroes are the ones with a fixed ratio, not these.

**1168x784, never enlarged.** A 1600x1067 pass was generated once before and
thrown away because it upscaled six of ten frames. That applies to heroes; for
fact photos, re-encode at whatever size arrives through mozjpeg quality 80.

## Per-frame checks that caught something

Prompts for all 22 are in IMAGE_PROMPTS.md with their check lines. The ones that
decided whether a frame was usable: the cardinal tetra's red must run the full
body or it is a neon, the platy's tail must have no lower spike or it is a
swordtail, the three shrimp had to read as three different animals because their
facts sit adjacent, the rat maze prop had to carry no lettering, the flying
squirrel had to have no dorsal stripe because the fact is that it is not a sugar
glider, the second zebra finch needed a black beak to be a juvenile rather than
a female, and the immature eagle needed a dark head and dark bill.
