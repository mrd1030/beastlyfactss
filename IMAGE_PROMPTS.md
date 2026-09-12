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

### bearded-dragon-shopping-list.jpg
Photorealistic photograph of an adult bearded dragon perched on the rim of a red
plastic shopping basket on a light wood floor, head tilted as it inspects the
haul inside: a ceramic dome lamp, a long tube light fixture in plain packaging,
a digital thermometer, a small unmarked jar of white supplement powder, and a
slate tile leaning against the basket. Bright clean daylight from a window at
the right, warm terracotta and sand palette, sharpest on the dragon's face and
the basket rim, 50mm, f/2.8, 3:2. No text, brand names, or legible packaging
anywhere.

### t5-vs-compact-uvb-guide.jpg
Photorealistic photograph inside a spacious desert vivarium: an adult bearded
dragon basking on a flat rock under a long linear tube light that casts one
even band of brightness down the full length of the enclosure, fading softly
into a shaded cool end with a cork bark hide. In the near foreground outside
the glass, a small unplugged compact coil bulb lies retired on the tabletop,
slightly out of focus. Warm amber light against cool shadow, red desert sand
and slate palette, sharpest on the dragon mid-frame, 35mm, f/4, 3:2. No text,
logos, or brand markings on any equipment.

### bearded-dragon-brumation.jpg
Photorealistic photograph of an adult bearded dragon brumating, asleep and
half-tucked inside the mouth of a wide cork bark tube on the cool side of a
naturalistic enclosure. Head and shoulders out on the substrate, body and tail
still in shadow inside the tube, chin resting flat on the ground, posture low
and settled rather than propped up or alert.

THE VISIBLE EYE IS FULLY SHUT. The lower lid domes smoothly up over the socket
as a soft scaled mound, meeting a fine gold-rimmed seam above it. No eyeball, no
glossy globe, no iris, no pupil, no sclera and no catchlight anywhere in the eye
socket. This is the detail that decides the picture: an eye that reads open or
cloudy turns a sleeping dragon into a sick one, which is the exact confusion the
article exists to clear up.

She is healthy, only dormant: full rounded tail base, no visible hip bones or
ribs, smooth unwrinkled skin, colour muted and dusty rather than bright.

Substrate is a dark naturalistic soil mix with scattered dry brown leaf litter
around the mouth of the tube, drifting to a paler sandy area at the right of the
frame. Enclosure glass and a dark frame edge sit out of focus along the top.

Dim, low, warm side light raking in from the left across the cork and the top of
the head, deep shadow filling the tube and the right foreground, no lamp visible
and nothing lit. Muted brown, grey and cork palette, quiet and still, the feel of
a dim autumn evening. Camera low at substrate level and close, sharpest on the
closed eyelid and the ridge of spines along the jaw, leaf litter crisp in the
near foreground, 100mm, f/2.8, 3:2.

Must not contain: an open or partially open eye, a visible eyeball, iris or
pupil, a cloudy, milky, blue-grey, opaque or filmy eye, or a bulging eye; wood
chips, bark chips or gravel; a lit or glowing lamp of any kind; a red or coloured
night bulb; sunken eyes, wrinkled skin, a visible spine or hip bones, an open
mouth, or any other cue that reads as a sick dragon rather than a sleeping one.
No text, logos, or brand markings anywhere.

### bearded-dragon-eggs-and-egg-binding.jpg
Photorealistic photograph of a large lay box set up on the warm side of a
bearded dragon enclosure, with an adult female standing beside it.

THE LAY BOX IS THE SUBJECT AND MUST READ AS LARGE. It is a full-size
translucent household storage tub with the lid off, roughly the size of a
laundry basket, wide enough that the dragon could comfortably turn around
inside it and clearly longer than she is from nose to tail base. It occupies
about two thirds of the frame width and its near rim rises to roughly the
height of her shoulder. Do not render it as a small tray, seed dish, food bowl,
plant pot or nest box.

The tub is filled deep with a damp dark 50/50 mix of organic topsoil and washed
play sand, packed to within a few inches of the rim, the depth of the fill
plainly visible as a dense band through the translucent side wall. The surface
is worked over rather than smooth, with one shallow test hole started near the
front corner, its walls holding their shape without slumping. The mix looks
damp and cohesive, not dusty and not muddy.

The adult female stands on the enclosure floor beside the tub in three-quarter
view, alert and healthy, body normal and well muscled, one front foot raised
against the tub's outer wall as if about to climb in. She is secondary to the
box in the composition and noticeably smaller in the frame than it is. The
enclosure floor she stands on is smooth grey slate tile, bare and clean, so the
filled box reads as an obviously separate container rather than as loose
substrate spread across the enclosure. This contrast between bare tile floor and
deep filled box is the whole point of the image.

Warm terracotta basking light from a lamp just out of frame at the upper right,
earthy brown, tan and slate palette, soft shadow under the tub's rim. Camera
low at floor level and pulled back far enough to hold the full tub in frame,
sharpest on the tub's near rim and the test hole, the dragon's face still clearly
readable, 35mm, f/4, 3:2.

Must not contain: eggs of any kind, a small or shallow container, loose soil or
sand spread across the enclosure floor outside the box, a gravid belly shown
distended or distressed, a dark beard, gaping, or any cue of illness. No text,
logos, or brand markings anywhere.

### bearded-dragon-growth-weight-checks.jpg
Photorealistic photograph of an adult bearded dragon standing calmly on the
flat platform of a small digital kitchen scale on a light wood counter, a
person's hand resting nearby ready to steady it rather than gripping the
animal, the scale's display softly out of focus so no digits are legible. A
small notebook and pen sit just behind the scale, slightly blurred. Bright
clean daylight from a window at the left, warm terracotta and honey palette,
sharpest on the dragon's face and front legs, 50mm, f/2.8, 3:2. No text,
logos, or brand markings anywhere.

### bearded-dragon-safe-foods.jpg
Photorealistic overhead photograph of a freshly chopped bearded dragon salad on
a flat grey slate feeding tile: finely shredded collard and mustard greens,
grated orange butternut squash, and small diced red and yellow bell pepper,
loosely piled so the individual pieces read separately. A single dubia roach
sits on the slate beside the tile, lightly and unevenly coated in fine white
calcium powder. Bright clean daylight from the upper left, high key, vivid
green and orange against cool grey stone, water droplets on the greens. Shot
straight down, 50mm, f/4, 3:2. Overhead and high key so it doesn't collide with
the warm floor-level look of `bearded-dragon-shopping-list.jpg`. No fruit, no
lettuce, no bowl, no hands, no text, logos, or brand markings anywhere.

### reptile-emergency-plan.jpg
Photorealistic photograph of a power outage kit assembled on a plain wood floor
beside a ventilated clear plastic transport tub, seen from a low three-quarter
angle. The tub lid rests to one side and a folded thick towel lines the base; a
flat cloth hand warmer sits on the floor beside the tub rather than inside it,
next to a small battery thermometer with an unlit display and a folded index
card with handwriting too soft to read. Dim warm side light as though the room
lights are out, deep shadow falling away behind, muted amber and grey-brown
palette. Camera low at floor level, sharpest on the tub rim and the hand
warmer, 35mm, f/3.5, 3:2. The hand warmer stays outside the tub and no animal
appears, since the guide's own rule is that an emergency heat source never
touches the reptile. No candles or open flame, for the same reason the article
rules them out. No legible text, logos, or brand markings anywhere.

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

### Enrichment guides, batch 5 (2026-10-22 to 10-23)

Geckos. Same rules: 3:2 at 1168x784, animal mid-behavior.

#### african-fat-tail-enrichment.jpg
```
An African fat-tailed gecko emerging from the mouth of a humid hide packed with
visibly damp sphagnum moss, head and forelimbs out, condensation on the moss.
Warm banded brown and cream markings, thick tail. Dim evening lighting suited to
a crepuscular species, shallow depth of field on the face. The damp hide is the
subject. No hands, no people.
```

#### mourning-gecko-enrichment.jpg
```
Three or four small mourning geckos at different heights on the broad leaves and
stems of a densely planted bioactive vivarium, one on a vertical cork slab.
Mottled grey-brown geckos against green foliage, visible humidity. Soft diffuse
light. Photographed as a colony spread through vertical space, which is the
whole article. No hands, no people.
```

#### gargoyle-gecko-enrichment.jpg
```
A gargoyle gecko with knobbly cranial bumps gripping a vertical cork slab
partway up a tall planted vivarium, head angled down. Branches at several angles
and dense foliage filling the frame behind, a shallow feeding ledge with gecko
diet mounted high. Warm dim light. The enclosure should read as full from floor
to ceiling. No hands, no people.
```

#### leaf-tailed-gecko-enrichment.jpg
```
A leaf-tailed gecko flattened head-down against a vertical cork slab, edges of
the body blending into the bark so the outline is genuinely hard to resolve.
Dense mossy planting and layered branches around it, high humidity with fine
mist visible in the air. Low contrast, muted greens and browns, shallow depth of
field. The camouflage should be the difficulty of the photo. No hands, no people.
```

### Enrichment guides, batch 6 (2026-10-23 to 10-25)

Chameleons, iguana, anole, uromastyx and rosy boa. Same rules: 3:2 at 1168x784,
animal mid-behavior, show the enrichment being used rather than the enclosure
standing empty.

#### veiled-chameleon-enrichment.jpg
```
A veiled chameleon mid-stride on a thin diagonal branch inside a heavily planted
screen enclosure, one foot lifted and gripping forward, tail partly curled.
Dense layered foliage around and behind it so the animal is partly obscured, fine
water droplets clinging to the leaves. Bright green casque and banded flanks.
Soft daylight through the mesh, shallow depth of field. The planting density is
the subject as much as the animal. No hands, no people.
```

#### green-iguana-enrichment.jpg
```
A large adult green iguana stretched along a thick anchored branch high in a
tall enclosure, head raised and surveying, dewlap visible. Wide basking platform
and a seagrass hammock lower in frame, broad leaves for scale. Warm basking light
from above casting long shadow. Shot from slightly below so the animal reads as
high up and large. No hands, no people.
```

#### green-anole-enrichment.jpg
```
A bright green anole gripping a thin vertical stem partway up a densely planted
terrarium, body upright in a perching posture, throat pale. Broad leaves and fine
branches at several heights around it, water droplets on the foliage catching
the light. Bright naturalistic daylight, shallow depth of field. Vertical
structure should dominate the composition. No hands, no people.
```

#### jacksons-chameleon-enrichment.jpg
```
A male Jackson's chameleon with three prominent horns moving along a mossy
branch in a cool, densely planted enclosure. Fine mist hanging in the air, water
beading on moss and leaves, muted green palette suggesting montane forest rather
than desert warmth. Overcast diffuse lighting, cooler colour temperature than the
other reptile shots. No hands, no people.
```

#### uromastyx-enrichment.jpg
```
A uromastyx flattened wide on a slab of hot stone directly under a basking lamp,
limbs splayed, spiny tail extended. Beside it a bank of deep pale sand with the
mouth of an excavated burrow clearly visible, scattered greens and seed on the
substrate nearby. Harsh bright desert lighting, strong shadows, warm ochre
palette. Heat and burrow in one frame. No hands, no people.
```

#### rosy-boa-enrichment.jpg
```
A rosy boa half buried in dry aspen shavings, front third of the body emerging
and head raised, the rest of the animal under substrate. A stacked slate crevice
with a narrow gap immediately behind it. Warm orange and slate-grey stripes on
cream. Dim evening lighting for a crepuscular species, dry dusty palette, shallow
depth of field on the head. The burying is the subject. No hands, no people.
```

### Enrichment guides, batch 7 (2026-10-26 to 10-27)

The last reptiles and the amphibians. Same rules: 3:2 at 1168x784, animal
mid-behavior, show the enrichment being used rather than the enclosure standing
empty. Amphibian shots should read damp and softly lit, not dry and bright.

#### whites-tree-frog-enrichment.jpg
```
A plump White's tree frog sitting on a broad leaf partway up a densely planted
terrarium, toe pads gripping, body settled and relaxed. Layered foliage above and
below so the frog is nested inside cover rather than perched on top of it. Soft
green light, high humidity, water droplets on the leaves. Shallow depth of field
on the frog's face. No hands, no people.
```

#### red-eared-slider-enrichment.jpg
```
A red-eared slider mid-swim in clear water, angled downward toward a scattered
food item on the substrate, front limbs extended. Submerged driftwood and sturdy
planting around it, a dry basking platform visible above the waterline in the
upper frame. Bright clean underwater lighting, visible red ear stripe. The turtle
should read as actively searching. No hands, no people.
```

#### fire-skink-enrichment.jpg
```
A fire skink emerging head-first from deep leaf litter on a forest floor setup,
front half out and body still partly buried. Brilliant red and black barred
flanks catching low light against dark damp substrate and dead leaves. Cork flat
laid nearby, low planting behind. Warm dim lighting, shallow depth of field on
the head. The emergence is the subject. No hands, no people.
```

#### pacman-frog-enrichment.jpg
```
A pacman frog buried to the eyes in damp coconut fibre substrate, only the top of
the head, eyes and wide mouth line visible above the surface, sphagnum moss
scattered around. Mottled green and brown. Shot low and close so the frog is
almost part of the ground. Soft diffuse light, high humidity, very still
composition. The burial is the whole photo. No hands, no people.
```

#### fire-bellied-toad-enrichment.jpg
```
Two fire-bellied toads on a mossy bank at the edge of a shallow planted water
section, one half in the water, green and black mottled backs visible. Artificial
and live planting both in the water and on the land side, clear shallow water.
Bright naturalistic daylight, since these are diurnal. Land and water should both
read as real parts of the enclosure. No hands, no people.
```

#### tiger-salamander-enrichment.jpg
```
A tiger salamander emerging at night from the mouth of a burrow in deep damp
substrate, glossy black skin with bold yellow blotches, head and forelimbs out.
Leaf litter and cork flats across the surface around the burrow entrance. Cool
dim lighting, damp earthy palette, shallow depth of field. Substrate depth should
be visible in the frame. No hands, no people.
```

#### sulcata-tortoise-enrichment.jpg
```
A large adult sulcata tortoise mid-stride across rough grazing grass, head down
and actively cropping, thick scaled forelimbs and heavily marked shell. The mouth
of a dug burrow and a low shelter visible behind, secure fencing at the far edge
of frame. Bright dry outdoor daylight, arid palette. Scale should read large,
photographed from low down. No hands, no people.
```

### Enrichment guides, batch 8 (2026-10-28 to 10-29)

Small mammals. Same rules: 3:2 at 1168x784, animal mid-behavior, show the
enrichment being used rather than the enclosure standing empty.

#### gerbil-enrichment.jpg
```
A gerbil emerging head-first from a tunnel entrance in deep aspen bedding, the
tunnel mouth clearly holding its shape and leading down out of frame. Bedding
piled several inches deep and visibly excavated, chew sticks and a partly buried
hideout nearby. Warm bright lighting, shallow depth of field on the gerbil's
face. The burrow structure has to read clearly. No hands, no people.
```

#### mouse-enrichment.jpg
```
A mouse looking out from the entrance of a large domed nest built from shredded
white and brown paper, only the head and one forepaw visible. The nest should be
substantial and obviously constructed, filling much of the frame. Soft warm
lighting, cardboard tube and chew stick visible at the edge. The size of the nest
is the subject. No hands, no people.
```

#### rabbit-enrichment.jpg
```
Two rabbits side by side in a large outdoor-style run, one grazing and one
sitting up alert, bodies close together. A generous pile of timothy hay, a
cardboard tunnel and a low platform in the background. Bright natural daylight,
open space visible beyond them. The pairing and the space should both read
clearly. No hands, no people.
```

#### degu-enrichment.jpg
```
Two degus mid-roll in a shallow tray of pale bathing sand, sand visibly kicked up
around them, one on its side. Tall multi-level cage with solid wooden shelves and
branches behind. Bright daylight, since degus are diurnal. Warm brown fur against
pale sand, motion in the dust. No hands, no people.
```

#### hedgehog-enrichment.jpg
```
An African pygmy hedgehog running on a large solid-surface wheel at night, spines
flattened and legs mid-stride, wheel showing motion blur. A fleece hide and
snuggle sack visible beside it on a deep-floored enclosure. Warm low lighting
suited to a nocturnal animal, shallow depth of field. The wheel in use is the
subject. No hands, no people.
```

#### sugar-glider-enrichment.jpg
```
Two sugar gliders on a branch high in a tall cage at night, one gripping vertical
and one reaching across a gap, large dark eyes catching the light. A hanging
fleece pouch and further branches at varied heights behind them. Cool dim
lighting, grey fur with the dark dorsal stripe visible. Height and the pair both
have to read. No hands, no people.
```

#### flying-squirrel-enrichment.jpg
```
A southern flying squirrel clinging to a vertical branch near the top of a tall
cage at night, body flattened and huge dark eyes forward, loose skin of the
patagium visible along the flank. Branches and ropes spanning gaps behind it, a
nest box mounted high. Cool dim night lighting, soft grey-brown fur. The gliding
membrane should be visible. No hands, no people.
```

### Enrichment guides, batch 9 (2026-10-30 to 10-31)

Birds. Same rules: 3:2 at 1168x784, bird mid-behavior, show the enrichment being
used rather than the cage standing empty.

#### cockatoo-enrichment.jpg
```
A sulphur-crested cockatoo gripping a large wooden foraging toy with one foot and
working it apart with its beak, crest partly raised, wood fragments scattered
below. Heavy-gauge cage bars and further shredded toys behind. Bright warm
lighting, white plumage against darker background. Destruction in progress is the
subject. No hands, no people.
```

#### canary-enrichment.jpg
```
A yellow canary caught in mid-flight between two perches at opposite ends of a
long flight cage, wings spread, open flight path visible through the frame.
Natural branch perches of varied thickness at the ends, shallow bath below.
Bright clean daylight, shallow depth of field. The flight distance is the point of
the composition. No hands, no people.
```

#### zebra-finch-enrichment.jpg
```
A pair of zebra finches perched close together on a natural branch, the male with
orange cheek patches and barred throat, the female plainer, one holding a strand
of grass in its beak. Long flight cage with clear open span behind them. Bright
warm daylight, shallow depth of field on the pair. The closeness of the two birds
is the subject. No hands, no people.
```

#### conure-enrichment.jpg
```
A green cheek conure hanging upside down from a hanging foraging toy, one foot
gripping, beak working at a wrapped paper parcel, shredded paper below. Colourful
small parrot toys and a rope perch around it. Bright warm lighting, green and
maroon plumage. Active problem-solving posture. No hands, no people.
```

#### quaker-parakeet-enrichment.jpg
```
A quaker parakeet holding a willow strip in its beak and pushing it into the cage
bars, several strips already woven into place around it, more natural twigs and
seagrass scattered on the perch. Bright daylight, grey chest and green back
clearly visible. The weaving in progress is the whole photo, and it should look
deliberate rather than accidental. No hands, no people.
```

#### parrotlet-enrichment.jpg
```
A small green parrotlet gripping a hanging sola ball forage toy with one foot,
beak buried in it, body angled sideways. Cuttlebone and varied natural branch
perches in the background, cage bars close-spaced. Bright warm lighting, shallow
depth of field. Scale should read small, the attitude should not. No hands, no
people.
```

### Enrichment guides, batch 10 (2026-11-01 to 11-02)

Invertebrates. Same rules: 3:2 at 1168x784, animal mid-behavior, show the
enrichment being used rather than the enclosure standing empty. The arachnid and
insect shots should be sharp macro work, the shrimp shots clean underwater macro.

#### tarantula-enrichment.jpg
```
A Brazilian black tarantula at the mouth of a burrow it has dug in deep substrate,
front legs out on the surface and the rest of the body still inside, silk webbing
visible around the entrance. Cork bark laid nearby, shallow water dish at the
edge. Warm low lighting, velvety black setae catching a highlight. Macro, shallow
depth of field on the front legs. No hands, no people.
```

#### emperor-scorpion-enrichment.jpg
```
A large glossy black emperor scorpion emerging from under a piece of cork bark in
deep damp substrate, pincers forward and tail arched low. Visible humidity on the
substrate, more cork hides in the background. Warm dim lighting suited to a
nocturnal animal, macro with shallow depth of field on the pincers. No hands, no
people.
```

#### praying-mantis-enrichment.jpg
```
A green praying mantis hanging upside down from mesh at the top of a tall
enclosure, body fully extended downward, clear empty vertical space beneath it.
Thin twigs and foliage lower in the frame, well clear of the drop. Bright clean
lighting, macro on the head and forelimbs. The vertical clearance below the animal
is the point of the composition. No hands, no people.
```

#### stick-insect-enrichment.jpg
```
A stick insect hanging from a fresh bramble stem in a tall mesh enclosure, mid-
feed with a leaf edge visibly notched where it has been eating. Cut stems standing
in a covered water container below, more fresh foliage around. Soft green natural
light, macro, shallow depth of field on the head. Fresh living plant is the
subject. No hands, no people.
```

#### giant-millipede-enrichment.jpg
```
A large dark giant millipede half buried in deep leaf litter and crumbling rotting
hardwood, front third of the body out and antennae forward, segments and legs
clearly visible. A cuttlebone resting on the substrate nearby. Damp earthy palette,
soft diffuse lighting, macro. Substrate depth has to read clearly in the frame.
No hands, no people.
```

#### cherry-shrimp-enrichment.jpg
```
Several bright red cherry shrimp grazing across a clump of green moss growing on
driftwood, legs actively picking at the surface, one shrimp on a fallen leaf below.
Clear planted freshwater aquarium behind. Bright clean underwater macro, shallow
depth of field, strong red against green. Grazing in progress, not shrimp sitting
still. No hands, no people.
```

#### amano-shrimp-enrichment.jpg
```
A large translucent amano shrimp gripping a sinking wafer on a piece of driftwood,
both front claws working at it, body angled over the food. Planted aquarium
background, a second shrimp approaching. Clean underwater macro, shallow depth of
field on the claws. The animal actively feeding is the point. No hands, no people.
```

#### ghost-shrimp-enrichment.jpg
```
A translucent ghost shrimp picking through brown leaf litter on an aquarium floor,
internal organs faintly visible through the shell, antennae extended. Dense moss
and planting behind providing cover. Soft diffuse underwater lighting, clean macro,
shallow depth of field. The transparency should read clearly against the darker
leaf litter. No hands, no people.
```

### Enrichment guides, batch 11 (2026-11-03 to 11-05)

Fish. Same rules: 3:2 at 1168x784, fish mid-behavior, show the enrichment being
used rather than the tank standing empty. Clean underwater photography, no
distracting equipment in frame unless the article is about it.

#### neon-tetra-enrichment.jpg
```
A tight shoal of a dozen neon tetras moving together through the open middle of a
densely planted aquarium, all facing the same way, blue and red stripes catching
the light. Dense planting at the sides and back, tannin-tinted water, driftwood
below. Soft subdued lighting rather than a bright tank. The size and cohesion of
the group is the subject. No hands, no people.
```

#### angelfish-enrichment.jpg
```
A tall silver and black angelfish turning between vertical plant stems in a deep
planted aquarium, long trailing fins fully extended, body upright and filling the
vertical frame. Upright driftwood behind, open water to one side. Soft clean
lighting. The height of the fish and the height of the tank should both read. No
hands, no people.
```

#### zebra-danio-enrichment.jpg
```
A group of zebra danios in fast motion along the length of a long planted
aquarium, bodies streaked with horizontal blue stripes, slight motion blur on the
tails. Planting at the sides and back with a clear open lane through the middle.
Bright clean lighting. Speed and horizontal distance are the subject. No hands, no
people.
```

#### guppy-enrichment.jpg
```
Several female guppies resting among dense planting and floating plant roots, with
one brightly coloured male displaying at the edge of frame, clearly separated from
them by foliage. Soft warm lighting, planted freshwater aquarium. The cover
between the females and the male is the point of the composition. No hands, no
people.
```

#### corydoras-catfish-enrichment.jpg
```
A group of five or six corydoras catfish working a bed of fine pale sand, several
with snouts buried and barbels spread, sand slightly disturbed around them. Broad
plant leaves and driftwood behind. Bright clean lighting, shallow depth of field on
the front fish. Sifting in progress, not fish sitting still. No hands, no people.
```

#### cardinal-tetra-enrichment.jpg
```
A shoal of cardinal tetras in tannin-stained tea-coloured water among submerged
branches and brown leaf litter, the full-length red stripe glowing against the dark
background. Dim shaded lighting, blackwater aesthetic, dense planting behind. The
water colour is as much the subject as the fish. No hands, no people.
```

#### molly-enrichment.jpg
```
A black molly grazing algae from the surface of a large piece of driftwood, mouth
against the wood, body angled down. Planted aquarium behind with more grazeable
surfaces, a second molly working a plant leaf. Bright clean lighting. Grazing in
progress is the subject. No hands, no people.
```

#### platy-enrichment.jpg
```
A group of orange and red platies among dense planting near the surface of a
planted aquarium, spread across the frame rather than clustered, floating plant
roots hanging down. Warm bright lighting, healthy green planting. A well-stocked
ordinary tank done properly. No hands, no people.
```

#### swordtail-enrichment.jpg
```
A male swordtail with a long sword extension swimming through open water in a
long planted tank, females visible further back among planting. Clear horizontal
distance in the frame, planting breaking up the background. Bright clean lighting,
shallow depth of field on the male. No hands, no people.
```

#### bristlenose-pleco-enrichment.jpg
```
A bristlenose pleco clamped to the surface of a large piece of driftwood, mouth
rasping, bristles on the snout clearly visible, rasping marks on the wood. Dimly
lit planted aquarium, cave visible in the background. Warm low lighting suited to
a nocturnal fish, macro detail on the snout. No hands, no people.
```

#### discus-enrichment.jpg
```
A group of five or six discus hanging together in open water among tall plant
stems and vertical driftwood, bodies broad and disc-shaped, patterns clearly
visible. Dark background, soft even lighting, no bright hotspots. Calm and settled
rather than darting. The group is the subject. No hands, no people.
```

#### oscar-fish-enrichment.jpg
```
A large oscar pushing substrate around the base of a piece of driftwood with its
mouth, sand visibly disturbed and clouding slightly, a displaced stone nearby.
Large sparsely aquascaped tank behind. Warm lighting, mottled orange and black
markings. Active rearranging is the subject, not a fish posing. No hands, no
people.
```

#### koi-enrichment.jpg
```
Several large koi rising together toward the surface of a deep planted pond,
viewed slightly from above at an angle, white, orange and black patterns clear
through the water. Depth visible below them, pond planting at the margins,
dappled outdoor daylight. The size of the fish and the depth of the pond should
both read. No hands, no people.
```

### Enrichment guides, batch 12 (2026-11-06 to 11-08)

Dogs and cats, the last batch. Same rules: 3:2 at 1168x784, animal mid-behavior,
show the enrichment being used rather than the product sitting there. These are
the highest-traffic pages on the site, so the photography should be the most
polished of the set.

#### dog-enrichment.jpg
```
A dog nose-down working a scent trail through long grass, ears forward, tail
level, whole body committed to following something. Open field, low golden
afternoon light, shallow depth of field on the muzzle. Mixed-breed or unremarkable
breed so it reads as any dog. The concentration is the subject. No hands, no
people, no lead visible.
```

#### cat-enrichment.jpg
```
A cat mid-pounce on a wand toy, front paws off the ground and both aimed at the
toy, body fully extended. A tall cat tree and a scratching post visible in the
background, plus a puzzle feeder on the floor. Bright warm domestic lighting,
shallow depth of field on the cat. Full predatory posture, not a cat batting
idly. No hands, no people, the wand toy end only.
```

#### border-collie-enrichment.jpg
```
A black and white border collie in the classic low crouch with its eye locked on
something just out of frame, ears forward, body coiled and still. Open grass,
crisp daylight, shallow depth of field. The intensity of the stare is the whole
photo. No hands, no people, no sheep in frame.
```

#### beagle-enrichment.jpg
```
A beagle nose-down and fully absorbed in a scent trail across grass, ears hanging
forward around the muzzle, tail up. Tricolour markings, bright natural daylight,
low camera angle at the dog's head height. Shallow depth of field on the nose. No
hands, no people, no lead.
```

#### labrador-enrichment.jpg
```
A labrador working at a puzzle feeder on a kitchen floor, nose pushing a slider,
one paw resting on the edge of the toy, completely absorbed. Warm indoor light,
shallow depth of field on the face. Lean and fit rather than heavy. Problem
solving in progress. No hands, no people.
```

#### siberian-husky-enrichment.jpg
```
A siberian husky leaning hard into a pulling harness on a long line across open
ground, body low and driving forward, mouth open. Cool overcast daylight, winter
or early spring landscape. Shot from the side so the pulling posture reads
clearly. No hands, no people, the line trailing out of frame.
```

#### french-bulldog-enrichment.jpg
```
A french bulldog working a snuffle mat on a cool tiled floor indoors, nose buried
in the fabric strips, bat ears up. Calm indoor lighting, shallow depth of field on
the face. Relaxed and settled rather than exerting. The low-effort mental work is
the point. No hands, no people.
```

#### bulldog-enrichment.jpg
```
An english bulldog lying down on a cool tiled floor working a puzzle feeder with
one paw, heavy body settled and relaxed, breathing easy. Soft indoor lighting,
shallow depth of field on the face and the toy. Everything at floor level, nothing
requiring effort. No hands, no people.
```

#### dachshund-enrichment.jpg
```
A dachshund digging enthusiastically into a sandpit, front paws buried and sand
flying, tail up, nose down. Outdoor daylight, contained pit with a wooden edge
visible. Shallow depth of field, motion in the sand. Four feet on the ground and
clearly delighted. No hands, no people.
```

#### bengal-cat-enrichment.jpg
```
A spotted bengal cat mid-leap between two high wall shelves, body fully extended
in the air, rosetted coat catching the light. Domestic room below with more
shelves forming a route across the wall. Bright daylight, fast shutter freezing
the jump. The vertical route should be readable in the background. No hands, no
people.
```

#### sphynx-cat-enrichment.jpg
```
A sphynx cat curled contentedly inside an enclosed heated bed on a high carpeted
shelf, only the head and one forepaw out, eyes half closed. Wrinkled skin and
large ears clearly visible. Warm low lighting, cosy domestic setting. Warmth and
height in the same frame is the point. No hands, no people.
```

#### persian-cat-enrichment.jpg
```
A long-haired persian cat reaching up from a low padded platform to bat at a wand
toy held just above it, paw extended, flat face and large eyes clear. Low stepped
cat furniture around it, warm domestic lighting, shallow depth of field. Engaged
and playing, but low to the ground and unhurried. No hands, no people, the toy end
only.
```

## Shedding mechanism

Sits beside `reptile-shedding.jpg`, which shows a clean finished shed. This one
shows the stage before it, so the pair reads as cause and effect rather than two
takes on the same moment.

#### snake-shedding-humidity-myth.jpg
```
A corn snake resting on a piece of cork bark, head turned toward the camera, both
eyes clouded a milky blue-white in the pre-shed phase. Skin dull and slightly
matte compared to normal. Dry enclosure, aspen substrate, warm side lighting
picking out the scale texture along the body. Shallow depth of field with the
eye sharp. The cloudy eye is the subject and must be unmistakable. No hands, no
people, no shed skin in frame.
```

---

# Legal guide heroes, `public/assets/guides/`, 1168x784

Six added with the legal guides dated 30 September to 2 October 2026. Each is a
new photograph rather than a reuse: nothing here shares a file with a care guide,
a Beastfile or another legal guide, and no two share a setting, palette or camera
position.

The house rule for this set is that the hero shows **the reason the law exists**
where the species has one, and the healthy animal where it does not. The quaker
parakeet shows the nest, because the nest is why thirteen states ban the bird.
The prairie dog shows the colony landscape, because the surprise in that article
is Colorado banning an animal that lives there. The rest show the animal.

## Species accuracy

Generators confuse four of these six with a near relative. Check before installing:

- **Snapping turtle** must be *Chelydra serpentina*, not the alligator snapping
  turtle. Smooth to slightly serrated carapace with no three raised keels, no
  hooked eagle beak, long saw-toothed tail, and a head that is broad rather than
  massive. The article turns on the difference between the two species.
- **Burmese python** must not drift reticulated or ball. Dark brown blotches with
  cream borders on a tan ground, an arrowhead marking on top of the head, a heavy
  body. Not the fine diamond net of a reticulated python.
- **Green anole** must be *Anolis carolinensis*, bright green with a pink dewlap,
  not the brown anole that is the invasive species in the same article.
- **Prairie dog** must be black-tailed *Cynomys*: short black-tipped tail, blunt
  face, tan coat. Not a ground squirrel, marmot or meerkat, and not standing in a
  meerkat sentry pose.

## The prompts

#### prairie-dog-legal.jpg
```
Photorealistic photograph of a black-tailed prairie dog sitting upright on the
bare mound at its burrow entrance on open short-grass prairie, alert, front paws
tucked at the chest, head turned slightly toward the camera. Tan-buff coat, blunt
rounded face, short tail with a black tip. More burrow mounds and a second animal
soft in the background so the colony reads. Low golden evening light raking
across the grass, wide plains horizon, dry gold and sage palette, at the animal's
eye level, 200mm, f/4, 3:2. Not a meerkat, not a ground squirrel, no sentry pose.
```

#### quaker-parakeet-legal.jpg
```
Photorealistic photograph of a single quaker parakeet perched on a bare branch in
the foreground with a large untidy stick nest structure filling the background,
slightly out of focus. Bright green back and wings, blue-tinged flight feathers,
grey face, throat and breast with fine scalloped barring, pale horn-colored beak.
The nest is bulky and woven from twigs, clearly built rather than found. Warm
overcast daylight, subtropical green and grey palette, three-quarter view,
135mm, f/2.8, 3:2. One bird only, no cage, no hands.
```

#### green-anole-legal.jpg
```
Photorealistic macro photograph of a green anole on a broad green leaf, body in
profile, head toward the camera, pink throat dewlap fully extended. Vivid leaf
green above with a pale cream underside, long slender tail curling off the leaf
edge, expanded toe pads visible. Humid southeastern woodland background thrown
fully out of focus. Bright dappled morning light, saturated green palette with
the pink dewlap as the only warm accent, 100mm macro, f/3.5, 3:2. Green anole,
not a brown anole.
```

#### capybara-legal.jpg
```
Photorealistic photograph of a single adult capybara standing in shallow water at
a reedy bank, side on, water halfway up its legs, head turned toward the camera.
Coarse reddish-brown shaggy coat, blunt squared muzzle, small high-set ears and
eyes, no visible tail, partially webbed feet. Reeds and still water behind, a
mirrored reflection under the body. Soft flat light just after sunrise, muted
green-brown palette, low camera close to the waterline, 135mm, f/4, 3:2. One
animal, no people, no enclosure fencing.
```

#### snapping-turtle-legal.jpg
```
Photorealistic photograph of a common snapping turtle at the muddy edge of a
pond, body in profile, neck extended and head raised clear of the shell, mouth
closed. Dark olive-brown carapace lightly serrated at the rear with no raised
keels, thick limbs, heavily clawed feet, long tail with a saw-toothed ridge
trailing into the water. Duckweed on the surface behind it. Flat overcast light,
cool green and mud-brown palette, low angle from the waterline, 200mm, f/5.6,
3:2. Common snapping turtle, not an alligator snapping turtle: no hooked beak,
no three ridged keels.
```

#### burmese-python-legal.jpg
```
Photorealistic photograph of a Burmese python coiled on a bed of dry leaf litter,
head resting on the outermost coil, facing the camera. Heavy-bodied, tan and
cream ground color with large dark brown saddle blotches edged in cream, a
distinct dark arrowhead marking on top of the head, iridescent sheen across the
scales. Warm side lighting picking out the pattern, muted earth palette, shallow
depth of field with the head sharp, slightly above the snake looking down,
100mm, f/4, 3:2. Not a reticulated python and not a ball python: heavy build,
blotches rather than a fine diamond net, no hands, no people.
```

---

# Legal guide heroes, `public/assets/guides/`, 1168x784

The fourteen species on the exotic pet law map with no legal guide art. Same
spec as the rest of the guide set: 3:2, 1168x784, mozjpeg quality 80. Derived
`-thumb` and `-card` tiers are gitignored and rebuilt by
`generate-thumbnails.js`.

The legal series follows `tarantula-legal.jpg`, `box-turtle-legal.jpg` and
`serval-legal.jpg`: a clean portrait of the animal in a believable setting. No
gavels, no cages, no maps, no flags. The article carries the law, the image
carries the animal. No two below share a setting, palette or camera position.

### crested-gecko-legal.jpg
Photorealistic photograph of a crested gecko gripping a vertical cork bark
branch at eye level in a planted terrarium, head turned slightly toward the
camera. The eyelash-like crests above the eyes and the fringed toe pads are
sharp and clearly readable. Buff and olive skin with fine cream mottling, no
eyelids, tail present. Deep green pothos foliage falling out of focus behind.
Soft diffused daylight, cool green and cream palette, 100mm macro, f/4, 3:2.

### leopard-gecko-legal.jpg
Photorealistic photograph of a leopard gecko standing alert on warm sand-toned
slate, body side-on and head turned to the camera, tail thick and unregrown.
Crisp black spots on a pale yellow ground, movable eyelids clearly visible,
toes without adhesive pads. Low warm side light casting a long soft shadow to
the right, terracotta and amber palette, shot level with the animal, 85mm, f/2.8,
3:2.

### green-iguana-legal.jpg
Photorealistic photograph of a large adult green iguana in profile on a thick
horizontal branch, filling most of the frame. Pronounced dewlap, tall dorsal
crest running from nape to tail, the large round subtympanic scale below the ear
clearly visible, banded tail. Bright humid daylight with broad tropical leaves
behind. Saturated green palette, slightly low camera angle to convey size, 70mm,
f/4, 3:2.

### blue-tongue-skink-legal.jpg
Photorealistic photograph of a northern blue-tongued skink on damp leaf litter
with its bright blue tongue extended in a defensive display, front three-quarter
view from just above ground level. Smooth glossy scales, broad banded body,
short legs, heavy triangular head. Overcast even light, muted brown and slate
palette, 50mm, f/5.6, 3:2.

### gerbil-legal.jpg
Photorealistic photograph of a Mongolian gerbil sitting upright on deep aspen
bedding, forepaws tucked to the chest, tufted tail visible behind. Agouti coat
with a pale belly, dark eye catching a small highlight, furred tail rather than
a bare rat tail. Bright clean high-key light, warm sandy palette, soft pale
out-of-focus background, 100mm macro, f/3.5, 3:2.

### bearded-dragon-legal.jpg
Photorealistic photograph of an adult bearded dragon basking on a flat sandstone
slab, body side-on, head raised. Spiny lateral flanks and throat beard clearly
textured, mouth closed. Warm overhead basking light from upper left, arid ochre
and rust palette, straight side-on composition, 85mm, f/4, 3:2.

### hissing-cockroach-legal.jpg
Photorealistic macro photograph of a Madagascar hissing cockroach on a piece of
cork bark, viewed from just above and in front of the head. Glossy chestnut
segmented carapace catching a single soft highlight along its length, antennae
forward, wingless body. Dark earthy background falling to near black, low key
lighting, 100mm macro, f/8, 3:2.

### degu-legal.jpg
Photorealistic photograph of a degu perched on a wooden ledge holding a piece of
dried forage in its forepaws, eye level and close. Agouti brown coat, pale
belly, large dark eye, tufted tail tip, orange incisors just visible. Warm
indoor daylight from a window to the left, honey and pale wood palette, 85mm,
f/2.8, 3:2.

### tokay-gecko-legal.jpg
Photorealistic photograph of a tokay gecko clinging head-down to a dark tree
trunk, body vertical in a horizontal frame. Vivid blue-grey skin with orange and
rust spotting, large lidless eye with a vertical pupil, broad adhesive toe pads
splayed against the bark. Dramatic directional light from the right against a
near-black background, high contrast, 85mm, f/4, 3:2.

### jacksons-chameleon-legal.jpg
Photorealistic photograph of a male Jackson's chameleon in sharp profile on a
thin branch, all three brown horns clearly separated against the background.
Bright leaf-green body with a serrated dorsal crest, independently swivelling
turret eye, prehensile tail coiled. Cool misty highland morning light, fresh
green palette, clean profile silhouette, 135mm, f/2.8, 3:2.

### guinea-pig-legal.jpg
Photorealistic photograph of two guinea pigs side by side on a bed of timothy
hay, one mid-chew with a strand in its mouth. Different coats, one smooth
tricolor and one abyssinian with rosettes, both well conditioned. Soft window
light from the left, warm straw and cream palette, camera low at hay level,
50mm, f/2.8, 3:2.

### rabbit-legal.jpg
Photorealistic photograph of a rabbit sitting alert on a clean indoor floor,
ears up, whole body in frame, front three-quarter view. Dense well-groomed coat,
bright eye, hind feet tucked. No cage or hutch anywhere in the frame. Bright
airy daylight, soft neutral grey and white palette, 85mm, f/2.8, 3:2.

### nile-monitor-legal.jpg
Photorealistic photograph of a Nile monitor at the edge of shallow water, body
in three-quarter view and long forked tongue extended. Powerful build, dark
olive skin with yellow rosette banding, long curved claws, laterally compressed
tail. Harsh midday sun with hard shadows, olive and wet-stone palette, framed
wide enough to read the animal's full length, 70mm, f/5.6, 3:2.

### red-footed-tortoise-legal.jpg
Photorealistic photograph of a red-footed tortoise walking across damp forest
floor, front three-quarter view low to the ground. Domed dark carapace with pale
areolae, and the red and orange scales on the legs and head catching the light,
which are the identifying feature. Dappled shade through leaves above, rich
brown and leaf-green palette, 50mm, f/4, 3:2.

---

# Federal law guide hero, `public/assets/guides/`, 1168x784

One image, `federal-exotic-pet-laws.jpg`, for the federal law guide dated
2026-09-12. Same spec and the same house rule as the legal series above: no
gavels, no flags, no documents, no rulers, no hands. The article carries the
law.

The subject is a hatchling red-eared slider, because the FDA four-inch rule is
the federal rule the most readers have actually run into, and a hatchling is the
animal it was written about. It must read as a hatchling: a rounded carapace a
few inches across, the vivid juvenile green and yellow striping, the red temple
patch, proportionally large eye and head.

### federal-exotic-pet-laws.jpg
```
Photorealistic photograph of a single hatchling red-eared slider resting on a
wet dark rock at the waterline, body in three-quarter view, head raised and
turned slightly toward the camera. Small rounded carapace with fresh green and
yellow striping and fine growth rings, bright red patch behind the eye, wet
shell reflecting the sky. Shallow still water and soft green bank out of focus
behind. Soft overcast morning light, cool green and slate palette, camera down
at water level so the animal reads small in the frame, 100mm macro, f/4, 3:2.
No hands, no ruler, no coin, no tank, no people.
```

---

# Wrong-species replacements, `public/assets/guides/`, 1168x784

Eight files from the 2026-09-12 hero skim (docs/TODO.md item 5). Each one shows
a different animal from the one its guide is about. Same spec as the rest of
the set: 3:2, 1168x784, mozjpeg quality 80, no hands, no people.

Every miss here was a close relative the generator substituted, so each prompt
carries the identifying features in the prompt itself and a check line under it.
Verify against the check line before installing. None of these may reuse the
setting, palette or camera position of the species' other art.

## The prompts

#### hedgehog.jpg
```
Photorealistic photograph of an African pygmy hedgehog walking across a fleece
blanket on a smooth indoor floor in daytime, whole animal in frame, front
three-quarter view, quills relaxed and lying back. Cream quills each banded with
a single brown stripe, white face and cheeks, white belly fur, small dark button
eye, pink-brown pointed snout. Bright soft window light, warm neutral palette,
camera at floor level, 85mm, f/2.8, 3:2.
```
Check: cream-and-brown banded quills, white face, small enough to sit in two
hands. Not the European hedgehog: no dark brown spines, no dark grey face, no
garden or leaf-litter setting.

#### hissing-cockroach.jpg
```
Photorealistic photograph of one adult Madagascar hissing cockroach on a slab of
cork bark over dark coconut fibre, side-on three-quarter view, antennae forward.
Uniformly glossy chestnut red-brown carapace, wingless, head tucked out of sight
beneath the smooth pronotal shield, two blunt bumps on the pronotum, a row of
darker spiracle dots along each flank, stout unspined legs. Warm dim light
raking across the shell, deep brown palette, macro at the animal's level, 100mm,
f/5.6, 3:2.
```
Check: one colour from head to abdomen, head hidden under the shield. Not a
black head and thorax with an orange abdomen, no beetle wing cases, no spiny
cricket legs, no exposed mandibles.

#### california-kingsnake.jpg
```
Photorealistic photograph of a California kingsnake crossing sun-warmed granite
in open chaparral, head raised and body in a loose S, most of the length in
frame. Crisp alternating glossy black-brown and cream bands that continue
unbroken around the body, smooth unkeeled scales, small rounded head barely
wider than the neck, round pupil, black tongue. Late afternoon side light, warm
grey and cream palette, camera low at snake level, 100mm, f/5.6, 3:2.
```
Check: rings, not blotches. Not a gopher or bull snake: no saddled dorsal
blotches on a pale ground, no red tongue, no dry grass prairie.

#### ball-python.jpg
```
Photorealistic photograph of a ball python coiled on leaf litter in a planted
enclosure, head raised and facing the camera, thick body stacked in loose coils.
Blocky wedge-shaped head clearly wider than the neck, short heavy body, dark
chocolate ground with gold and tan side blotches enclosing darker spots, a cream
stripe running from the nostril through the eye, heat pits along the upper lip.
Warm low side light, brown and gold palette, camera at head height, 85mm, f/4,
3:2.
```
Check: blocky head, short heavy body, gold side blotches. Not an African rock
python: no slender head, no arrowhead marking on the crown, no banding across
the back, no dry scrub.

#### emperor-scorpion.jpg
```
Photorealistic photograph of an adult emperor scorpion on damp leaf litter at
night, side view with the whole animal in frame, pincers forward and tail curled
low over the back. Uniformly glossy jet black over the body, legs, pincers and
tail alike, massive granular pincers as thick as the forearms, a single bulbous
telson with one dark sting. Cool torchlight from the upper left against near
black, macro, 100mm, f/8, 3:2.
```
Check: black everywhere, one pair of pincers, eight walking legs. Never orange
or red legs, never a second pair of claws, never a segmented tail ending in
anything but one telson and one sting.

#### emperor-scorpion-legal.jpg
```
Photorealistic photograph of an adult emperor scorpion standing on damp red-brown
coconut fibre in a shaft of daylight, high three-quarter view looking down the
length of the animal, tail low and pincers apart. Uniformly glossy jet black
body, legs, pincers and tail, heavy granular pincers, single bulbous telson with
one dark sting, pale comb-like pectines just visible under the body. Cool
diffused daylight, rust and black palette, 60mm, f/8, 3:2.
```
Check: as above. Different light, angle and ground from `emperor-scorpion.jpg`,
which is the night shot.

#### savannah-monitor-legal.jpg
```
Photorealistic photograph of a savannah monitor on hard dusty ground in open
West African scrub, body in three-quarter view, head turned toward the camera.
Short blunt rounded snout, thick neck, heavy stocky body, grey-brown to tan
ground colour carrying rows of paired dark-edged cream ocelli across the back,
short blunt tail round in cross-section, pale forked tongue just out. Hard midday
sun, dust and straw palette, camera low and ahead of the animal, 135mm, f/5.6,
3:2.
```
Check: blunt snout, stocky build, rows of paired ocelli, round tail. Not a Nile
monitor: no long tapering snout, no laterally flattened keeled tail, and not at
a riverbank, which is `nile-monitor-legal.jpg`.

#### corydoras-catfish.jpg
```
Photorealistic underwater photograph of a single bronze corydoras resting on pale
fine sand in a planted aquarium, front three-quarter view, barbels spread and
clearly visible. Stout arched back, blunt downturned snout, two overlapping rows
of bony armour plates along each flank instead of scales, three pairs of short
barbels at the mouth, tall triangular dorsal fin, small adipose fin, forked tail.
Bright clean aquarium light, green and pale sand palette, camera at substrate
level, 100mm macro, f/5.6, 3:2.
```
Check: armoured plates and an arched stout body. Not a minnow, barb or gudgeon:
no scaled flanks, no torpedo body, no long trailing whiskers.

#### oscar.jpg
```
Photorealistic photograph of an adult tiger oscar hanging in midwater in a
planted aquarium, full side profile, whole fish in frame including the tail.
Deep oval heavy-bodied cichlid with a large blunt head and thick lips, dark
charcoal ground marbled with irregular red-orange banding, and a black eyespot
ringed in bright orange at the base of the tail where the caudal fin meets the
body. Long low dorsal and anal fins running back to the tail. Driftwood and
broad-leaved plants behind, bright clean aquarium light, bronze and green
palette, camera level with the fish, 60mm macro, f/5.6, 3:2.
```
Check: the orange-ringed black spot at the tail base is the whole identification
and must be unmistakable. Not a tilapia, which is silver-grey with vertical bars
and no eyespot, and not a generic spotted cichlid.

#### goldfish.jpg
```
Photorealistic photograph of a single common goldfish in full side profile in a
bright planted aquarium, whole fish in frame, swimming left to right. Deep
orange metallic scales grading to pale on the belly, a short single caudal fin,
and a plain rounded snout with a small terminal mouth and no whiskers of any
kind at the corners. Green stem plants and pale gravel behind, clean daylight
aquarium lighting, orange and green palette, camera level with the fish,
60mm macro, f/5.6, 3:2. Absolutely no barbels.
```
Check: nothing whisker-like anywhere near the mouth. A pair of barbels at the
corners of the mouth makes it a koi, which is the exact difference the koi
versus goldfish guide turns on, and the previous frame appeared to have them.
Not a fancy goldfish either: no double tail, no head growth, no telescope eyes.

#### angelfish.jpg
```
Photorealistic photograph of a single freshwater angelfish in full side profile
in a planted freshwater aquarium, whole fish in frame including the fin tips,
hanging almost still in midwater. Tall disc-shaped body flattened side to side
and clearly taller than it is long, a very tall triangular dorsal fin and a
matching anal fin sweeping back to fine points, a pair of long thread-like
ventral filaments trailing below, and a silver body crossed by four vertical
black bars, one running down through the eye and one at the base of the tail.
Tall ribbon-leaved plants and a dark background behind, soft diffused aquarium
light from above, silver and deep green palette, camera level with the fish,
60mm macro, f/5.6, 3:2.
```
Check: freshwater Pterophyllum, so a tall thin disc with trailing fins and
vertical bars in a planted tank. Never a marine angelfish, never coral, reef
rock, open blue water or sunbeams through saltwater, which is what the previous
frame showed. Not a discus either: a discus is a rounded disc with short fins
and no trailing filaments, and it has its own hero.



---

# Fact photos awaiting art, `public/assets/facts/`, 1600x1067

The ten facts drafted but held out of `facts.js` because no photo exists, listed
in NEEDS_IMAGE.md under the 2026-08-31 and 2026-09-07 runs. Every fact needs its
own photo, no reuse from a guide hero, a Beastfile hero or another fact: the
photo is the whole interaction on a Beastfile page, where clicking a fact opens
it in a lightbox.

Each prompt names the identifying features in the body and carries a check line,
the same shape the legal set uses, because the 2026-09-12 hero skim found eight
guide images showing the wrong species. No hands, no people, no text in frame.

Promotion steps once a photo lands are in BEASTLYPEDIA_FACT_GAPS.md.

Status 2026-09-12: eight frames delivered and accepted. The orca came back with
a bull's dorsal fin and the bowerbird with a maypole hut instead of an avenue;
both prompts below carry the corrected wording.

#### orca.jpg
```
Photorealistic photograph of an adult female orca swimming at the surface with
two smaller orcas tucked close behind and slightly below her, all three
travelling in the same direction in tight formation. Her dorsal fin is short and
strongly falcate, curved backward like a sickle and no more than about half the
height of a bull's tall erect triangular fin. Crisp white oval eye patch behind
each eye, white lower jaw and flank patch, pale grey saddle behind the dorsal
fin, glossy black back beaded with water. Cold open ocean, low grey daylight,
slate and white palette, camera at water level, 200mm, f/4, 3:2.
No tall straight dorsal fins anywhere in the frame, since that is an adult male.
```
Check: falcate curved fin on the lead animal, because the matriarch is female
and the fact is that she leads. Not a false killer whale, which has no white
patches, and not a pilot whale, which has a bulbous head and a broad low fin.

#### pembroke-welsh-corgi.jpg
```
Photorealistic photograph of a Pembroke Welsh Corgi standing in full profile on
short grass, side on to the camera, legs straight and body level, whole dog in
frame. Long deep body carried on very short straight legs, normal-sized fox-like
head with large upright pointed ears, red and white coat with a white chest
blaze, no tail. Bright overcast daylight, green and rust palette, camera at the
dog's chest height so the leg-to-body ratio reads, 85mm, f/4, 3:2.
```
Check: no tail and upright pointed ears. A Cardigan has a long bushy tail and
rounded ears. Legs short but straight and sound, not bowed.

#### short-beaked-echidna.jpg
```
Photorealistic photograph of a short-beaked echidna probing its snout into damp
leaf litter and loose soil, body three-quarter on, head low and working. Short
bare tubular snout with tiny nostrils at the tip, very small dark eye, stocky
rounded body covered in coarse brown fur with cream-and-black tipped spines
lying back over it, heavy clawed digging forefeet. Soft dappled forest floor
light, brown and olive palette, camera down at ground level close to the snout,
100mm macro, f/5.6, 3:2.
```
Check: spines short and interspersed with visible fur, snout bare and tubular.
Not a porcupine, not a hedgehog.

#### atlantic-puffin.jpg
```
Photorealistic photograph of two Atlantic puffins standing bill to bill at the
mouth of a grassy clifftop burrow, heads angled together mid-billing, bodies
upright. Breeding-season bill, deep and triangular and banded in orange, yellow
and blue-grey with a fine pale line, white face with a grey eye patch and the
red-rimmed eye ornament, black crown and back, white breast, bright orange
webbed feet. Sea thrift and worn turf at the burrow entrance, soft coastal
light, green and orange palette, camera at bird height, 300mm, f/5.6, 3:2.
```
Check: white face, banded triangular bill, orange feet. Not a tufted puffin,
which has a dark face and straw-coloured head plumes.

#### king-cobra.jpg
```
Photorealistic photograph of a king cobra coiled low beside a large mound of
compacted dead leaves on a forest floor, head raised only slightly and turned
toward the mound, hood not spread. Olive-brown to tan body with faint pale
chevrons across the back, large smooth-scaled head noticeably wider than the
neck with a pair of big occipital shields behind the crown, plain narrow hood,
round eye with a round pupil. Humid lowland forest, warm filtered green light,
olive and leaf-brown palette, camera low and level with the nest, 135mm, f/4,
3:2.
```
Check: narrow plain hood and paired occipital shields. Not a spectacled cobra
with a broad marked hood. The mound must read as deliberately piled, not as
scattered litter.

#### satin-bowerbird.jpg
```
Photorealistic photograph of a male satin bowerbird standing on the cleared
court at one open end of his bower, holding a blue flower in his bill. The bower
is an avenue: two separate parallel walls of thin vertical twigs pushed into the
ground about a hand's width apart, forming a short roofless corridor open at
both ends, with daylight and forest floor visible straight through the gap. The
flat court in front of it is scattered with blue bottle caps, blue flowers, blue
feathers and blue plastic fragments. The bird is glossy blue-black with a
violet-blue iris and a pale horn-coloured bill. Dappled understorey light, deep
green and blue palette, camera at ground level slightly off the corridor's axis
so both walls and the gap between them are readable, 200mm, f/4, 3:2.
```
Check: two distinct walls with a see-through gap between them and no roof. Not a
dome, hut, tunnel or teepee, which is a maypole bower built by a different
species, and never a cup nest or anything in a tree. The glossy blue-black bird
is the adult male; the olive-green one is the female and the wrong subject.

#### siamese-cat.jpg
```
Photorealistic photograph of a Siamese kitten a few weeks old sitting on a pale
blanket, front three-quarter view, one forepaw forward. Body still pale cream
with the points only beginning to come in: ears shading to dark seal at the
edges, a faint smudge of a mask around the nose, darkening on the paw tips and
the tail. Deep blue almond eyes, wedge-shaped head, large ears. Soft bright
window light, cream and taupe palette, camera at the kitten's eye level, 85mm,
f/2.8, 3:2.
```
Check: the torso must read clearly paler than the ears and paws. A finished
adult Siamese does not show the fact.

#### aardvark.jpg
```
Photorealistic photograph of an aardvark at night with its snout pushed into a
torn-open termite mound, long sticky tongue extended into the breach, body in
three-quarter view. Long tubular pig-like snout, very long upright rabbit-like
ears, arched back, thick tapering tail, sparse yellowish-grey hair over pinkish
skin, heavy spade-like claws on the forefeet. Dry savanna at night, warm
torchlight falling on the animal against near-black, dust and umber palette,
camera low and ahead of the shoulder, 135mm, f/4, 3:2.
```
Check: long ears, arched back, thick tail, sparse hair. Not a giant anteater,
not a pangolin.

#### dumbo-octopus.jpg
```
Photorealistic photograph of a small dumbo octopus drifting in open black water,
photographed from slightly below and in front, the two ear-like fins on the
mantle held out mid-flap. Translucent pinkish gelatinous body, large dark eyes,
short arms joined by a continuous web so the underside reads as a soft umbrella,
no long trailing arms. Lit by a single cold ROV lamp from the upper left,
everything beyond the animal falling to pure black, marine snow drifting through
the beam, pink and black palette, 60mm, f/8, 3:2.
```
Check: paired fins above the eyes, webbed umbrella of short arms. No coral, rock
or sand anywhere in frame, since this animal lives kilometres above any of it.

#### horned-lizard.jpg
```
Photorealistic photograph of a Texas horned lizard on sun-baked sandy ground,
body braced and head turned, a thin jet of blood arcing from the corner of one
eye toward the edge of the frame. Flattened round disc-shaped body, a crown of
two long central horns and shorter spines at the back of the head, two rows of
fringe scales along each flank, tan and rust camouflage banding with a pale
dorsal line. Hard midday desert light, ochre and rust palette, camera at ground
level slightly ahead of the animal, 100mm macro, f/5.6, 3:2.
```
Check: flat round body, crown of horns at the back of the skull. Not a thorny
devil, not a frilled lizard. Thin arcing stream, not a spray, predator out of
frame.

---

# Colour refresh: goldfish and koi, `public/assets/guides/`, 1168x784

Not species fixes. The goldfish installed 2026-09-12 is correct and the koi has
always been correct; both are just muted, and these two animals are the most
colour-driven species on the site. Same spec as the rest of the guide set.

The pair also has to stay distinguishable, because the koi versus goldfish
comparison guide turns on the difference: koi carry a pair of barbels at the
corners of the mouth and goldfish have none. Saturate the colour, not the
identification.

#### goldfish.jpg
```
Photorealistic photograph of a single common goldfish in full side profile in a
brightly lit planted aquarium, whole fish in frame, swimming left to right.
Vivid tangerine to deep red-orange scales with a metallic sheen, each scale
edge catching the light so the flank reads like hammered copper, belly fading to
pale cream gold, fins translucent amber with orange rays. Saturated emerald stem
plants filling the background and clean pale sand below. Strong clean daylight
from above raking across the fish, high colour saturation and high local
contrast, orange against deep green, camera level with the fish, 60mm macro,
f/5.6, 3:2. A plain rounded snout with a small terminal mouth and absolutely no
barbels or whiskers of any kind.
```
Check: colour rich and clearly orange, never washed pale or brown. Nothing
whisker-like at the mouth, which would make it a koi. Single caudal fin, no
double tail, no head growth, no telescope eyes.

#### koi.jpg
```
Photorealistic photograph of three koi swimming just under the surface of a
clear garden pond, seen from above at a slight angle, bodies overlapping in a
loose diagonal, all three whole in frame. One kohaku with a brilliant white
ground and deep lacquer-red markings, one showa with jet black over red and
white, one solid metallic orange-gold, all with crisp saturated edges where the
colours meet. Two short barbels at each mouth, clearly visible. Sunlight
striking the water so the colours glow against dark green depth, water clear
enough to read every scale, a few lily pads at the frame edge. High colour
saturation, red and white against deep green, 100mm, f/5.6, 3:2.
```
Check: barbels present at the corners of each mouth, the feature that separates
a koi from a goldfish. Colour blocks crisp and saturated, not muddy or pastel,
and the white genuinely white rather than cream.

---

# Composite panel fixes, `public/assets/guides/`

Four overview grids from the 2026-09-12 skim carry one wrong panel each
(docs/TODO.md item 5). Three have straight dividers, so the fix is a single
replacement panel spliced into the existing file at the panel's exact size,
which keeps the panels that are already right. The fourth has diagonal
dividers and needs the whole grid regenerated.

Each single panel must match its neighbours in the grid it is going into, so
the lighting and palette notes below are not decoration: a panel lit differently
from the three beside it reads as a mistake even when the animal is correct.

#### koi-conure-slider-scorpion-overview.jpg, bottom-right panel only, 584x392
Replaces a scorpion with bright orange legs and a second pair of pincers.
```
Photorealistic photograph of an adult emperor scorpion on dark damp soil, full
side view, whole animal in frame, pincers forward and tail curled low over the
back. Uniformly glossy jet black over the body, legs, pincers and tail alike,
massive granular pincers as thick as the forearms, a single bulbous telson with
one dark sting. Dark earth background falling away behind, hard directional
light from the upper left picking out the gloss on the carapace, black and
umber palette, macro, 3:2.
```
Check: black everywhere including the legs, one pair of pincers, eight walking
legs. The frame must sit beside a koi, a conure and a red-eared slider without
looking brighter or flatter than they are.

#### sulcata-hedgehog-lovebird-guppy-overview.jpg, top-right panel only, 584x392
Replaces a European hedgehog with the pet species.
```
Photorealistic photograph of an African pygmy hedgehog walking across the floor
of an indoor enclosure, body in three-quarter view, whole animal in frame,
quills relaxed. Cream quills each banded with a single brown stripe, white face
and cheeks, white belly fur, small dark button eye, pink-brown pointed snout.
Soft indoor light from the left, warm neutral palette, wire enclosure panel soft
in the background, camera at floor level, 3:2.
```
Check: banded cream quills and a white face, small enough to sit in two hands.
Never the European hedgehog's dark brown spines and dark grey face, which is
what this panel currently shows.

#### gargoyle-mourning-african-fat-tail-gecko-overview.jpg, right panel only, 389x784 portrait
Replaces a knob-headed gecko that is not the species.
```
Photorealistic vertical photograph of an African fat-tailed gecko standing on
warm orange sand beside a clay hide, body in three-quarter view, head toward the
camera, whole animal in frame including the tail. Smooth rounded head with no
crests, knobs or spines anywhere, chunky body in broad chocolate-brown and tan
bands, a thick blunt tail as wide as the body, a narrow cream stripe running
down the spine, vertical pupil in a dark eye. Warm low side light, terracotta
and chocolate palette, camera at sand level, tall portrait crop, 1:2.
```
Check: a smooth head. Any crest, spike or knob makes it the wrong species,
which is the current fault. Fat blunt tail, not slender or leaf-shaped, and the
banding broad rather than speckled.

#### five-beginner-reptiles-overview.jpg, whole grid, 1264x848
The fifth panel shows a banded milk or kingsnake where the article's fifth
species is the corn snake. Diagonal dividers mean the grid gets regenerated.
```
Photorealistic composite of five vertical panels separated by thin diagonal
white dividers, one animal per panel, all five shot in the same warm low light
against soft tan and brown backgrounds so the set reads as one series, 1264x848.
Panel one, a bearded dragon on a branch, spiny beard and rows of lateral spines,
head raised. Panel two, a leopard gecko on bark, plump tail and black spotting
on cream. Panel three, a ball python coiled on wood, blocky head clearly wider
than the neck, gold and dark brown side blotches. Panel four, a crested gecko
gripping bark, eyelash crests over the eyes, no spines along the flanks.
Panel five, a corn snake on bark with its head raised, orange ground carrying
dark-bordered dorsal saddles, a spear-point marking on the crown, smooth
unkeeled scales.
```
Check panel five hardest: saddles, which are blotches along the back that do not
wrap the body, never full rings. A snake with complete bands is a milk snake or
kingsnake, which is what the current frame shows, and both of those have their
own heroes elsewhere in this folder.

---

# Legal hero fixes, second round, `public/assets/guides/`, 1168x784

Two from the fourth skim pass (docs/TODO.md item 5). Both are look-alike
substitutions rather than obviously wrong animals, so each prompt leads with the
one feature that separates the species from its double.

#### red-eared-slider-legal.jpg
Replaces a turtle that reads as a painted turtle.
```
Photorealistic photograph of a red-eared slider basking on a half-submerged log
at the edge of a pond, body in three-quarter view with the head turned toward
the camera so the side of the face is fully visible. A broad red stripe running
back from behind each eye across the temple, thin yellow-green stripes down the
neck and legs, an olive-brown carapace with faint yellow streaking and a
serrated rear edge, a plain yellow plastron, webbed hind feet with long claws.
Still green water and soft bank planting behind, warm midday light, olive and
yellow palette, camera at water level, 200mm, f/5.6, 3:2.
```
Check: the red temple stripe, which is the feature the species is named for, and
a carapace with no red anywhere on it. A turtle with red bars along the shell
margins is a painted turtle, *Chrysemys picta*, which is what the current frame
shows. A yellow blotch instead of a red stripe makes it a yellow-bellied slider.

#### tiger-salamander-legal.jpg
Replaces an animal that reads as a European fire salamander.
```
Photorealistic photograph of a tiger salamander at the mouth of its burrow in
damp dark soil, body in three-quarter view, head low and toward the camera.
Stocky heavy build with a broad rounded head, small dark eyes set well apart, a
blunt snout, clear vertical costal grooves down each flank, and irregular dull
olive to mustard blotches and bars over a dark brown ground, the markings soft
edged rather than crisp. Damp earth and scattered leaf litter, cool overcast
light, brown and olive palette, camera at ground level close to the snout,
100mm macro, f/5.6, 3:2.
```
Check: dull olive-mustard markings on brown, a broad blunt head and visible
costal grooves. Not a fire salamander, *Salamandra salamandra*: no glossy
jet-black skin, no bright egg-yellow patches, and no prominent bulging parotoid
glands behind the eyes. The standalone `tiger-salamander.jpg` is correct and is
the reference to match.

