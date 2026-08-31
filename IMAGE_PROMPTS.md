# Image prompts

Every image in `public/assets/guides/` and `public/assets/images/` added in the
2026 dog and cat pass was generated from a prompt below. Kept as a record, not a
to-do list: when one of these needs regenerating, or a new page needs an image
that sits beside them, start here so the set stays coherent.

All are 3:2. Guides are 1168x784. Article images normally sit at 1600x1067, but
this batch was generated at 1168x784 and installed at that size rather than
upscaled, since the largest tier `scripts/generate-thumbnails.js` derives is
640x480 and enlarging would only invent detail. Everything is re-encoded through
mozjpeg at quality 80 on the way in.

## How these handle illness

Sampled from `rabbit-gi-stasis.jpg`, `cat-hairball-vomiting.jpg`,
`ferret-adrenal-disease.jpg` and `dog-bloat-gdv.jpg`, the site follows one rule:
**never show the disease, show the thing standing next to it.**

- GI stasis shows a healthy rabbit on a bed of hay, which is the prevention.
- Hairballs show a longhair cat grooming in a sunlit window, which is the cause,
  framed as ordinary and beautiful.
- Adrenal disease shows a ferret warm and comfortable in blankets.
- Bloat shows a large dog resting quietly after eating.

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

## Breed accuracy

Generators routinely miss the traits that define a breed, so each of these was
checked against the standard before installing: the Scottish Fold ears fold flat
to the skull, the Sphynx reads downy rather than bald, the American Shorthair
keeps a working cat build rather than drifting British Shorthair, and the
Rottweiler carries a natural undocked tail, docking being unlawful in the UK and
most of Europe. Worth the same check on anything added later.

Three accuracy choices are written into the prompts themselves and should
survive any rewrite: the Pug wears a harness and no collar, since neck pressure
is contraindicated in brachycephalic obstructive airway syndrome; the Rottweiler
tail is undocked; and the obesity image measures food rather than photographing
an overweight animal.

---

# Breed images, `public/assets/guides/`, 1168x784

### cat-american-shorthair.jpg
Photorealistic photograph of a silver tabby American Shorthair standing in
profile on a pale hardwood floor in a bright sunlit hallway, head turned toward
the camera. Dense black tabby markings on a silver ground with a clear bullseye
swirl on the flank, full cheeks, medium round face, muscular working cat build,
short thick coat, gold eyes. Not a British Shorthair: longer body, less flat
face, no plush blue coat. Late morning sun striping the floor, shallow depth of
field, 85mm, f/2, 3:2.

### cat-scottish-fold.jpg
Photorealistic photograph of a Scottish Fold cat sitting upright on a windowsill
in three-quarter profile against soft backlight, so the folded ears read as one
smooth unbroken dome from crown to cheek. Ears folded tightly forward and down,
flat to the skull. Large round eyes, short curved nose, dense blue-grey plush
coat. Bright hazy morning light through sheer curtains, rim light along the fur,
cool airy palette, 50mm, f/2, 3:2.

### cat-sphynx.jpg
Photorealistic photograph of a Sphynx cat curled inside a chunky knitted wool
blanket on a sofa, only the head, shoulders and one forepaw emerging, in warm
lamplight. Skin covered in fine downy peach fuzz rather than bare rubber, deep
soft wrinkles across the forehead, neck and shoulders. Very large wide-set ears,
prominent cheekbones, large lemon-shaped eyes, warm pinkish-grey skin with faint
tabby patterning. Cozy amber palette, close portrait, 85mm, f/1.8, 3:2.

### dog-beagle.jpg
Photorealistic photograph of an adult tricolor Beagle working a scent trail
across an autumn lawn, nose down in fallen leaves, ears swinging forward, one
front paw lifted mid-step. Black saddle, tan head and legs, white chest and
muzzle, white tail tip held upright. Bright overcast daylight, damp grass, russet
and green palette, side on at the dog's eye level, a little motion blur in the
ears, 70mm, f/2.8, 3:2.

### dog-bulldog.jpg
Photorealistic photograph of an adult English Bulldog sitting square on a shaded
stone porch step on a warm afternoon, facing the camera. Broad heavy head,
moderate nose roll, wide undershot jaw, small rose ears, heavy shoulders,
characteristic wide bowed front stance, short smooth fawn and white coat. Mouth
closed, breathing easily, clear bright eyes. Cool open shade against a warm
sunlit garden behind, thrown well out of focus, 50mm, f/2, 3:2.

### dog-dachshund.jpg
Photorealistic photograph of a smooth-coated standard Dachshund standing in full
profile on a garden path, camera at ground level so the long low body runs the
full width of the frame. Deep chest with a prominent forechest, level topline,
short strong legs, long tapering muzzle, long low-set ears, rich red coat, tail
carried level with the back. Warm low evening sun raking along the back from the
side, long shadow across the path, 85mm, f/2.5, 3:2.

### dog-rottweiler.jpg
Photorealistic photograph of an adult Rottweiler sitting calmly on open grass in
golden early evening light, body angled three-quarters to camera, head turned to
face it. Short dense black coat with crisp rust markings over the eyes, on the
cheeks, muzzle, chest and legs. Broad head, medium triangular ears carried
forward, powerful level topline. Natural full undocked tail carried low and
clearly visible. Calm steady expression, mouth closed, warm backlight rimming the
coat, 85mm, f/2, 3:2.

---

# Legal guide image, `public/assets/guides/`, 1168x784

### conformation-breeding-laws.jpg
Photorealistic editorial photograph of a quiet empty veterinary consulting room
in cool morning light. A stainless steel examination table in the foreground
holds a stethoscope, a plain clipboard with blank unmarked paper, and a simple
wooden measuring caliper. Pale walls, a window softly out of focus behind, no
people and no animals. Restrained documentary still life, neutral grey and steel
palette, slight overhead angle, 35mm, f/4, 3:2. No text, logos, branding, flags
or legible writing anywhere in the frame.

---

# Article images, `public/assets/images/`, 1600x1067

### brachycephalic-airway-syndrome.jpg
Photorealistic photograph of a fawn Pug walking on a padded Y-front harness
across short grass in cool early morning light, head up, mouth closed, moving
easily and comfortably. Low sun behind casting a soft rim along the coat, dew on
the grass, light mist in the background, cool blue-green palette warming toward
the horizon. Camera low at the dog's chest height, 70mm, f/2.5, 3:2. Harness
only, no collar around the neck. No panting and no distress.

### cardiomyopathy-cats-dogs.jpg
Photorealistic photograph of a calm grey shorthair cat standing on a soft towel
on a veterinary examination table while a vet's hands hold a stethoscope gently
against its chest. Only hands and blue scrub sleeves visible, no face. The cat is
relaxed and upright, eyes open and unbothered. Soft diffused overhead clinic
light, clean pale green and brushed steel palette, close crop on the cat and the
hands, sharpest on the stethoscope head, 85mm, f/2, 3:2.

### feline-kidney-disease.jpg
Photorealistic photograph of a ceramic pet water fountain running on a pale
kitchen floor, a fine arc of water catching the light, an older cream and grey
cat leaning in to drink with its chin wet and whiskers pushed forward. Bright
clean morning daylight, cool white and pale blue palette, high key. Water motion
frozen sharply. Camera low at floor level, focused on the water and the cat's
face, kitchen soft behind, 50mm, f/2.2, 3:2.

### hip-and-elbow-dysplasia.jpg
Photorealistic photograph of a young adult Labrador Retriever trotting across an
open field of bright green grass in full profile, all four legs visible
mid-stride, ears lifted, moving freely and soundly. Bright open daylight under a
soft overcast sky, vivid green and white palette. Panning shot so the background
streaks slightly while the dog stays sharp. Camera low at knee height, 135mm,
f/3.2, 3:2.

### inherited-eye-disease.jpg
Photorealistic extreme close-up macro photograph of a healthy dog's eye filling
most of the frame, rough collie or spaniel type. Sharp on the iris, showing fine
radial detail in warm amber-brown, a clean dark pupil, a bright square window
catchlight, and individual eyelashes and surrounding fur in crisp detail. Clear
and bright, no cloudiness or redness. Soft window light from the side, very
shallow depth of field falling away toward the muzzle, 100mm macro, f/3.5, 3:2.

### ivdd-chondrodystrophy.jpg
Photorealistic photograph of a long-haired Dachshund walking calmly up a
carpeted pet ramp onto a sofa in a warm living room, seen from the side, back
held straight and level along the slope. Soft evening lamplight, warm amber and
oatmeal palette, cushions and a throw blanket softly out of focus. The ramp is
plainly the subject alongside the dog. Camera at sofa-seat height, 50mm, f/2,
3:2. No stairs and no jumping.

### periodontal-dental-disease.jpg
Photorealistic photograph of a person's hands gently brushing a relaxed
medium-sized dog's teeth with a small soft pet toothbrush, the lip lifted just
enough to show clean white teeth and healthy pink gums. Only hands and forearms
visible, no face. The dog is calm and cooperative with soft eyes. Bright even
bathroom daylight, clean white and pale wood palette, close crop, 85mm, f/2.5,
3:2. No tartar, no redness, no visible disease.

### pet-dna-testing.jpg
Photorealistic overhead flat lay photograph on a pale oak table: a plain
unbranded cheek swab in a clear plastic tube, a small white cardboard mailer box
with the lid lifted off, and a blank unmarked instruction card, arranged with
generous negative space. A relaxed dog's chin and one paw rest at the bottom edge
of the frame, slightly soft. Bright clean daylight from above, minimal white and
natural wood palette, 35mm, f/4, 3:2. No text, logos, barcodes or legible print
on anything.

### pet-obesity-body-condition.jpg
Photorealistic photograph of a person leveling off a measuring scoop of dry
kibble over a stainless steel bowl in a warm kitchen, hands and forearms only, no
face. A patient Beagle sits waiting a little behind, softly out of focus,
watching the scoop. Warm afternoon light from a window at the left, honey and
cream palette, sharpest on the scoop and the falling kibble, 85mm, f/2, 3:2. Calm
and matter of fact, never comic.

---

## Adding another

1. Match the 3:2 frame, re-encode at mozjpeg quality 80, commit the base file
   only. The `-thumb` and `-card` tiers are gitignored and rebuilt by
   `scripts/generate-thumbnails.js`, which runs ahead of `check-images.mjs`.
2. Log anything from Wikimedia Commons in `IMAGE_CREDITS.md` with author and
   license. Adobe Stock, generated and Canva images are not tracked there.
3. Run `node scripts/check-images.mjs`.

---

## Enrichment guides, batch 1 (2026-10-14 to 10-15)

Six anchor guides, the ones with direct published studies behind them. All 3:2
at 1168x784, same as the pass above, and installed at that size rather than
upscaled. House rule for this set: **show the enrichment being used, not the
enclosure standing empty.** An animal mid-behavior is the whole argument these
articles make.

Filenames go in `public/assets/images/` and must match the frontmatter exactly.

### ball-python-enrichment.jpg
```
A ball python in a large, heavily furnished bioactive terrarium, mid-movement
across the floor with the front third of its body raised and braced against a
thick horizontal cork branch. Deep dark substrate with scattered leaf litter,
live pothos and bromeliads breaking up the space, a wide shallow water basin
large enough for the snake to enter, cork bark tubes at both ends. Warm low
side-lighting, shallow depth of field, photographed slightly above eye level.
Naturalistic and lived-in, not a showroom setup. No hands, no people.
```

### corn-snake-enrichment.jpg
```
An orange and red corn snake stretched out almost fully along a long branch
spanning a wide planted terrarium, body extended rather than coiled. Enclosure
clearly much longer than the snake, deep substrate, leaf litter, cork flats and
dense low planting breaking the floor into cover. Soft daylight from one side,
shallow depth of field on the head, the length of the body receding into the
enclosure. Emphasize horizontal space and the fully extended posture.
No hands, no people.
```

### hamster-enrichment.jpg
```
A Syrian hamster emerging head-first from a burrow entrance it has dug in very
deep bedding, cross-section not visible, viewed from just above substrate level
so the depth of the bedding dominates the frame. Thick layered aspen and paper
bedding piled high, scattered seed and a few chew items on the surface, a large
solid-surface wheel out of focus behind. Warm domestic light, shallow depth of
field on the hamster's face. The bedding depth is the subject.
No hands, no people, no wire bars in focus.
```

### african-grey-parrot-enrichment.jpg
```
An African grey parrot gripping a wooden foraging toy with one foot, actively
working a piece of food out of a drilled compartment with its beak, wood
shavings and shredded palm scattered below. Perched on a natural apple-wood
branch among perches of visibly different diameters. Neutral soft studio-daylight
background, shallow depth of field, close enough to read the concentration in the
eye. The bird is working, not posing. No cage bars in the foreground, no people.
```

### betta-fish-enrichment.jpg
```
A male betta with long flowing fins swimming in open water through a densely
planted aquarium, broad-leaved plants and fine-leaved stems filling the
background, a piece of driftwood breaking the frame diagonally. Slightly tannin
stained water, soft top-down light, dark background. The fish is out in the open
with cover clearly available behind it. Shallow depth of field on the fish.
No mirror, no bowl, no plastic ornaments, no people.
```

### hermit-crab-enrichment.jpg
```
Two or three land hermit crabs on deep damp sand-and-coco substrate, one crab
actively inspecting an empty shell with its claws while six or seven other empty
shells of clearly different sizes and openings lie scattered nearby. A piece of
cork and a climbing branch at the edge of frame. Warm humid light, shallow depth
of field on the inspecting crab. Natural unpainted shells only. The act of
choosing is the subject. No hands, no people.
```

### Enrichment guides, batch 2 (2026-10-16 to 10-17)

Same rules as batch 1: 3:2 at 1168x784, the animal mid-behavior rather than an
empty enclosure.

#### hognose-snake-enrichment.jpg
```
A western hognose snake actively burrowing, head and upturned snout pushed down
into loose sandy substrate with a shallow furrow trailing behind it, most of the
body still on the surface. Deep loose substrate filling the lower half of frame,
a large shallow water dish and a cork tube visible on the cool side, soft
diffuse light from above. Close, low camera angle at substrate level so the
depth reads. The digging is the subject. No hands, no people.
```

#### tokay-gecko-enrichment.jpg
```
A tokay gecko, vivid blue-grey with orange spots, gripping a vertical cork slab
partway up a tall densely planted terrarium, body oriented head-down. Large
pothos and bromeliad foliage, branches at multiple heights, visible humidity on
the glass. Dim warm evening lighting suited to a nocturnal species, shallow
depth of field on the gecko's head and foot pads. Emphasize vertical space that
is full rather than empty. No hands, no people.
```

#### blue-tongue-skink-enrichment.jpg
```
A blue tongue skink walking across deep cypress mulch with its tongue extended,
nosing among scattered chopped greens and a few insects spread across the
substrate and partly hidden under leaf litter and a cork flat. Wide low camera
angle showing floor space running away from the animal. Warm basking light from
one side. Foraging across ground, not eating from a dish. No bowl in frame,
no hands, no people.
```

#### box-turtle-enrichment.jpg
```
An eastern box turtle pushing forward through deep cypress mulch and leaf
litter, front half emerging from under a fallen log, substrate visibly disturbed
around it. Damp mossy patches, low ferns, dappled light as if through a canopy.
Camera at substrate level, shallow depth of field on the turtle's face and the
red eye. The animal is burrowing out, not sitting on a bare surface.
No hands, no people, no newspaper.
```

#### ferret-enrichment.jpg
```
A ferret in mid-leap emerging from the open end of a fabric play tunnel, all
four feet off the ground, body stretched out. Behind it a multi-level cage with
hammocks slung at two heights and a second tunnel connecting levels. Bright
domestic daylight, fast shutter feel, slight motion energy. Playing, caught mid
movement, not posed. No hands, no people.
```

#### rat-enrichment.jpg
```
Two fancy rats in a tall multi-level cage, one climbing a knotted rope and the
other sitting in a hanging hammock, with a shallow dig tub, cardboard tubes and
a wooden hideout visible across different levels. Nesting material pulled into
one corner. Warm domestic light, shallow depth of field on the climbing rat.
The frame should read as a cage covering many different kinds of enrichment at
once, which is the point of the article. No hands, no people.
```

### Enrichment guides, batch 3 (2026-10-18 to 10-19)

Same rules: 3:2 at 1168x784, the animal mid-behavior.

#### chinchilla-enrichment.jpg
```
A chinchilla mid-roll on its back inside an open dust bath house, a visible puff
of fine dust in the air around it, all four feet up. Solid-floor cage with
bedding and solid wooden shelves at several heights visible behind, a wooden
chew block on the floor. Bright even light, fast shutter to freeze the dust.
Joyful and undignified, which is what dust bathing actually looks like.
No wire flooring anywhere in frame, no hands, no people.
```

#### cockatiel-enrichment.jpg
```
A grey cockatiel with orange cheek patches gripping a hanging foraging toy with
one foot, actively shredding a paper or palm element with its beak, fragments
falling. Perched on a natural branch among perches of visibly different
diameters and materials. Soft daylight, plain neutral background, shallow depth
of field on the head and beak. The bird is destroying something on purpose.
No cage bars in the foreground, no people.
```

#### red-footed-tortoise-enrichment.jpg
```
A red-footed tortoise walking across a humid planted enclosure floor toward
scattered chopped greens and berries spread across leaf litter and low growing
plants, several separate feeding spots visible rather than one dish. Damp dark
substrate, broad-leaved planting, warm humid light with visible moisture.
Camera low at shell height. Grazing across ground, not eating from a bowl.
No dish in frame, no hands, no people.
```

#### jumping-spider-enrichment.jpg
```
A regal jumping spider on a small cork bark flat, front-facing so the two large
forward eyes dominate, body angled as if tracking something. Behind it a layered
enclosure with small branches, foliage at multiple depths and a silk retreat
visible in an upper corner. Extreme shallow depth of field, macro, soft
directional light picking out the iridescent chelicerae. The eyes are the
subject, because vision is the whole article. No hands, no people.
```

#### madagascar-hissing-cockroach-enrichment.jpg
```
A cluster of six or seven Madagascar hissing cockroaches of mixed sizes packed
together on and under a stack of overlapping cork bark slabs, over deep dark
coconut fibre substrate with leaf litter and pieces of rotting wood. Warm dim
light, visible humidity. Photographed as a colony rather than a specimen, which
is the point of the article. Glossy chestnut carapaces catching the light.
No hands, no people.
```

#### ackie-monitor-enrichment.jpg
```
An ackie monitor mid-dig, front legs buried and substrate spraying backwards,
head down at the entrance of a burrow in very deep red-brown sandy substrate.
Large enclosure with rock stacks and cork visible behind, strong overhead
basking light casting a hard shadow. Camera low at substrate level so the depth
of the substrate fills the lower third. Active excavation, not a basking pose.
No hands, no people.
```

### Enrichment guides, batch 4 (2026-10-20 to 10-21)

First borrowed-evidence batch. Same rules: 3:2 at 1168x784, animal mid-behavior.

#### argentine-tegu-enrichment.jpg
```
An Argentine black and white tegu mid-dig, forelimbs buried to the elbow in
deep dark substrate with soil sprayed backwards, head lowered at a burrow
entrance. Very large enclosure, cork and logs behind, strong basking light from
above right. Low camera at substrate level. The bold black and white banding
should read clearly against the dark soil. No hands, no people.
```

#### savannah-monitor-enrichment.jpg
```
A savannah monitor standing over deep substrate with its forked tongue extended
mid-flick, investigating a partly buried food item. Heavy-bodied, keeled scales
catching hard overhead basking light, rock stack and a large water tub behind.
Camera low and slightly ahead of the animal. Investigating, not basking.
No hands, no people.
```

#### california-kingsnake-enrichment.jpg
```
A black and white banded California kingsnake moving through leaf litter over
aspen substrate, head raised and tongue out, body winding between cork tubes and
low planting so it is partly obscured along its length. Wide horizontal frame
emphasizing floor length. Soft even light. Travelling under cover, not coiled in
a hide. No hands, no people.
```

#### milk-snake-enrichment.jpg
```
A red, black and white banded milk snake emerging head-first from beneath a cork
flat, most of the body still hidden under leaf litter, only the head and a few
inches of neck visible. Densely cluttered enclosure floor with overlapping cork,
litter and low plants leaving almost no open ground. Warm low light.
The clutter is the subject. No hands, no people.
```

#### boa-constrictor-enrichment.jpg
```
A boa constrictor draped in loose coils across a thick horizontal branch,
supporting its own weight, several feet off the enclosure floor. Large planted
enclosure below with a big water tub and cork rounds visible. Warm light from
one side, shallow depth of field on the head. Scale should read: this is a heavy
animal on structure strong enough to hold it. No hands, no people.
```

#### garter-snake-enrichment.jpg
```
A slender garter snake with yellow dorsal stripes moving quickly through dense
low planting, head up and tongue extended, body in an active S-curve rather than
coiled. Shallow water dish large enough to swim in visible at the edge of frame,
damp planted substrate. Bright daylight, since this is a diurnal species.
Hunting, in motion. No hands, no people.
```
