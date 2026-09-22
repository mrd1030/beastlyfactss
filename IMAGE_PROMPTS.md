# Image prompts

How to write an image prompt for this site. The prompts that produced the
images already on disk are not here: they are in
`archive/docs-completed/IMAGE_PROMPTS_COMPLETED_2026-09-17.md`. Start there when
regenerating an existing frame, and start here when writing a new one.

## Sizes and formats

- Guide images, Beastlypedia heroes and article images are 3:2 at 1168x784.
  Beastlypedia secondaries are portrait.
- **Fact photos are not cropped.** They keep whatever aspect they arrive at,
  because the lightbox renders them with `object-contain` and shows the whole
  frame. 63 of the fact photos on disk are portrait at 784x1168. Cropping one to
  3:2 throws away real content for nothing.
- Everything is re-encoded through mozjpeg at quality 80 on the way in, and
  **nothing is ever enlarged**. A frame that arrives smaller than the target is
  installed at the size it arrived. A 1600x1067 pass was generated once and
  thrown away because it upscaled six of ten frames and softened them for
  nothing.

## The shape of a prompt

1. Open with the subject and what it is doing, in one sentence. The behaviour is
   usually the point, not the animal standing still.
2. Name the identifying features that decide the species, in the body of the
   prompt rather than as an afterthought. Generators miss exactly these.
3. Rule out the animal it will otherwise produce, by name: "Not a neon tetra:
   the red runs the entire length of the body." This single move catches more
   bad frames than anything else here.
4. Setting, light and palette.
5. Lens and aperture where it matters, then the ratio.
6. Negatives last: no hands, no people, no text, no watermark, and anything
   specific to that frame.
7. Close with a **Check:** line naming the one or two features to verify before
   installing. Write it for someone who will look at the frame quickly.

Props carry no lettering. A generator asked for a scale, a maze or a chart will
invent garbage text on it, and the site's own watermark goes on afterwards.

## How these handle illness

Sampled from `rabbit-gi-stasis.jpg`, `cat-hairball-vomiting.jpg`,
`ferret-adrenal-disease.jpg` and `dog-bloat-gdv.jpg`, the site follows one rule:
**never show the disease, show the thing standing next to it.**

- GI stasis shows a healthy rabbit on a bed of hay, which is the prevention.
- Hairballs show a longhair cat grooming in a sunlit window, which is the cause,
  framed as ordinary and beautiful.
- Adrenal disease shows a ferret warm and comfortable in blankets.
- Bloat shows a large dog resting quietly after eating.

The same rule covers anything unpleasant: the mouse whose fact is about
coprophagy is photographed grooming.

Each of the nine article images takes a different one of those angles, so no two
share a setting, palette or camera position.

| Article | Angle | Look |
|---|---|---|
| BOAS | vitality, managed well | cool misty morning, outdoors |
| Cardiomyopathy | the screening moment | clinic light, hands and stethoscope |
| Feline kidney | the prevention object | high key kitchen, running water |
| Hip and elbow | what is being protected | bright green field, motion |
| Inherited eye | the healthy version, up close | macro, amber iris |
| IVDD | the management tool | warm lamplit sofa, ramp |
| Periodontal | prevention in progress | bright bathroom, toothbrush |
| DNA testing | the kit | overhead flat lay, pale oak |
| Obesity | the intervention | warm kitchen, measuring scoop |

## Breed and species accuracy

Generators routinely miss the traits that define a breed, so each is checked
against the standard before installing: the Scottish Fold ears fold flat to the
skull, the Sphynx reads downy rather than bald, the American Shorthair keeps a
working cat build rather than drifting British Shorthair, and the Rottweiler
carries a natural undocked tail, docking being unlawful in the UK and most of
Europe.

Three accuracy choices are written into the prompts themselves and should
survive any rewrite: the Pug wears a harness and no collar, since neck pressure
is contraindicated in brachycephalic obstructive airway syndrome; the Rottweiler
tail is undocked; and the obesity image measures food rather than photographing
an overweight animal.

On a handling guide, check what the guide actually recommends before calling a
hands-off frame a mismatch. The tokay gecko article says a hand in the enclosure
draws a gape and a bite, so a tokay sitting calmly on an open palm would
contradict its own page.

Where two facts sit next to each other on the same page, their photos have to
read as different animals. The three shrimp are specified as solid red on a
leaf, translucent with dashed sides on wood, and glass-clear on sand for that
reason.

## Animal awareness days, 2026-09-22

One guide hero, 3:2 at 1168x784. It is a concept frame rather than a species
portrait, which is unusual for this site, so the species accuracy rules above
matter less than keeping it free of invented lettering. A generator handed a
banner will fill it with garbled words, and the watermark goes on afterwards.

The calendar hero that was queued here was dropped: the calendar became the
`/animal-days/` route rather than an article, and listing pages use the default
OG image.

**`/assets/images/world-animal-day.jpg`**

The interior of a large early twentieth century public assembly hall, seen from
the back of the room over the heads of a seated crowd filling every row toward a
distant lit stage. Period architecture: iron roof trusses, tall arched windows
high on the side walls, hanging globe lamps. The crowd is a mass of dark coats
and hats rather than individual faces, nobody in the foreground identifiable.
Monochrome or very desaturated sepia, heavy grain, the look of a 1920s press
photograph. Light falls from the high windows and pools on the stage. Shot wide,
28mm, deep focus. No readable banners, no signage, no text, no visible modern
clothing, no watermark. 3:2.
**Check:** nobody in the frame is a recognisable individual, and no banner or
sign carries legible lettering.

## October animal days, 2026-09-22

Four guide heroes, 3:2 at 1168x784. Unlike the World Animal Day frame these are
species portraits, so the accuracy rules above apply in full: name the features
that decide the species and rule out the animal the generator will otherwise
produce. No lettering in any of them.

**`/assets/images/world-octopus-day.jpg`**

A common octopus on a rocky seabed, several arms extended and gripping stone,
skin mottled and papillae raised to match the rock. Horizontal rectangular
pupil clearly visible. Not a squid or cuttlefish: eight arms only, no pair of
long feeding tentacles, a soft rounded mantle with no fin along the edge and no
internal shell outline. Clear shallow water, dappled daylight from above, muted
blue green and rust palette. Shot at 60mm macro, f/8, the near arms sharp and
the background falling away. No divers, no hands, no equipment, no text, no
watermark. 3:2.
**Check:** eight arms, no feeding tentacles, and the pupil reads as a
horizontal bar rather than a round dot.

**`/assets/images/international-sloth-day.jpg`**

A brown-throated three-toed sloth hanging below a branch by its foreclaws in
rainforest canopy, face turned toward the camera, the pale face mask and dark
eye stripe clear. Three curved claws on the visible forelimb. Coat slightly
green with algae. Not a two-toed sloth: three claws on the front limb, a
rounder flatter face, and a short tail. Humid green canopy light, soft and
diffuse, high humidity haze. Shot at 200mm, f/4, background compressed to
green. No people, no hands, no tourist contact, no text, no watermark. 3:2.
**Check:** three foreclaws, the face mask and eye stripe present, and the
animal is hanging rather than posed on a person.

**`/assets/images/reptile-awareness-day.jpg`**

A wild lizard basking on warm rock in low sun, body angled toward the light,
head raised, one foreleg lifted off the hot stone. A plain, unremarkable small
lizard of no obvious pet species: brown and grey, keeled scales, nothing
ornamental. This is deliberate, the article's point is that the threatened
reptiles are the ones nobody photographs. Dry scrub habitat, long golden light,
rock texture sharp. Shot at 100mm macro, f/5.6. Not a bearded dragon, not a
leopard gecko, not a chameleon. No terrarium, no substrate, no glass, no hands,
no text, no watermark. 3:2.
**Check:** it reads as a wild animal on real rock, not a pet on a basking
platform, and it is not a recognisable pet-trade species.

**`/assets/images/international-wombat-day.jpg`**

A bare-nosed wombat standing at the mouth of its burrow on dry grass in evening
light, facing the camera, stocky and low to the ground. Bare leathery nose,
small rounded ears, coarse brown grey fur. Not a koala and not a hairy-nosed
wombat: a naked nose with no fur on it, short rounded ears rather than large
fluffy ones, and a heavy barrel body on very short legs. Australian dry
grassland at dusk, warm low light, burrow entrance visible behind. Shot at
135mm, f/4. No people, no fences in focus, no text, no watermark. 3:2.
**Check:** the nose is bare and leathery, the ears are small and rounded, and
the animal is clearly not a koala.
