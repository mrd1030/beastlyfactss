# Pending image prompts

17 referenced images do not exist yet, so `scripts/check-images.mjs` fails and
the build stops before Vite. This file holds a prompt for each one. Delete an
entry once its file is committed.

## House style, from the existing set

Two different looks, and they are not interchangeable.

**`public/assets/guides/` breed images (1168x784, ~250 to 320KB).** Real
photography. Domestic interior, natural window light, shallow depth of field,
animal sharp and side-lit, environmental context (cat tree, sofa, rug, yard).
The animal fills roughly half the frame and the breed's defining traits are
clearly readable. See `cat-maine-coon.jpg` for the reference.

**`public/assets/images/` article images (1600x1067, ~200KB).** Warmer and more
cinematic. Low camera angle, golden hour or soft window light, animal at rest,
muted domestic background at wide aperture. Suggests the condition through mood
and posture rather than showing symptoms. See `dog-bloat-gdv.jpg`.

## Sourcing recommendation

**Use real stock photos for the seven breed images.** Breed morphology is the
whole point of those pages, and image generators reliably get it wrong in ways a
reader who owns the breed will spot instantly: Scottish Fold ears rendered as
normal ears, Sphynx as bald rubber rather than downy and wrinkled, American
Shorthair drawn as a British Shorthair, Dachshund proportions normalized toward
a generic small dog. `IMAGE_CREDITS.md` already logs one case of exactly this
failure mode with the coconut crab. The existing breed images in
`public/assets/guides/` are real photographs and the new ones should match.

**Generation is fine for the nine article images and the legal one.** Those are
mood and concept pieces where no specific animal is being identified, which is
how the existing article set was already made.

## Every prompt below assumes

Photorealistic, shot on a full frame camera with a 50mm or 85mm lens at f/2,
natural light, no text or watermarks anywhere in the frame, no visible injury,
blood, surgical detail or medical distress, no human faces in focus.

---

# Breed images, `public/assets/guides/`, 1168x784

### `cat-american-shorthair.jpg`
A classic silver tabby American Shorthair standing on a hardwood floor in a
sunlit living room. Dense bold black tabby markings on a silver ground, a
distinct bullseye swirl on the flank, round but not flat face, full cheeks,
medium-large muscular working cat build, short thick even coat, copper to gold
eyes. Not a British Shorthair: the face is less flat, the body is longer and
more athletic, the coat is not plush or blue. Alert, looking slightly off
camera. Shallow depth of field, warm daylight from a window at left.

### `cat-scottish-fold.jpg`
A Scottish Fold cat sitting upright on a soft blanket by a window. Ears folded
tightly forward and down, lying flat against the rounded skull, so the head
reads as a smooth dome in profile. Large round eyes, short nose with a gentle
curve, dense plush coat, blue-cream or grey tabby. Calm and comfortable, sitting
naturally with legs tucked, not in the splayed "Buddha sit" pose. Soft diffuse
daylight, quiet domestic background thrown well out of focus.

### `cat-sphynx.jpg`
A Sphynx cat sitting on a knitted throw on a sofa in warm indoor light. Skin is
covered in a very fine downy peach-fuzz, not bare or rubbery, with pronounced
soft wrinkles across the forehead, shoulders and neck. Very large wide-set ears,
prominent cheekbones, large lemon-shaped eyes, long slender neck, whip tail,
visible barrel chest and rounded belly. Warm pinkish-grey skin tone with faint
tabby patterning. Relaxed, curious, direct eye contact.

### `dog-beagle.jpg`
An adult tricolor Beagle standing in dappled shade on a garden lawn, head up and
nose lifted as if catching a scent. Classic black saddle, tan head and legs,
white chest, muzzle and tail tip. Long soft low-set ears hanging close to the
cheeks, square muzzle, large soft brown eyes, sturdy compact 13 to 15 inch
build, white tail tip carried upright. Bright natural daylight, background
foliage soft and out of focus.

### `dog-bulldog.jpg`
An adult English Bulldog lying on a cool tile floor in a bright kitchen, front
legs stretched forward, head up and alert. Broad heavy head, pronounced but not
extreme nose roll, wide undershot jaw, small rose ears, heavy shoulders, short
smooth fawn and white coat, characteristic wide-set bowed front legs. Mouth
closed and breathing comfortably, not panting hard, eyes clear. Cool even
daylight from a window behind the camera.

### `dog-dachshund.jpg`
A smooth-coated standard Dachshund standing in profile on a living room rug,
clearly showing the long low body against short strong legs. Deep chest with a
prominent forechest, level topline, long tapering muzzle, long low-set ears
framing the face, dark expressive almond eyes, rich red or black and tan coat.
Standing square and confident, tail carried level with the back. Low camera
angle at the dog's eye level, warm afternoon light from the side.

### `dog-rottweiler.jpg`
An adult Rottweiler sitting calmly on grass in soft early evening light. Short
dense black coat with clearly defined rust markings over the eyes, on the cheeks,
muzzle, chest and legs. Broad head, medium triangular ears carried forward,
powerful level topline, muscular but not overbuilt. Natural undocked tail, long
and carried low, since docking is unlawful across the UK and most of Europe.
Calm and steady expression, mouth closed, looking directly at the camera.

### `conformation-breeding-laws.jpg`
Interpretive, no real trademarks or identifiable places. A quiet, well-lit
veterinary consulting room in soft daylight. On the examination table, a plain
clipboard and a stethoscope beside a small unbranded stack of documents. In the
mid-ground, softly out of focus, a mixed-breed dog sits patiently beside its
owner, only the owner's hands and torso visible. Cool neutral colour palette,
calm and administrative rather than clinical or distressing. No text, no logos,
no flags, no legible writing on any document.

---

# Article images, `public/assets/images/`, 1600x1067

### `brachycephalic-airway-syndrome.jpg`
A young flat-faced dog, French Bulldog or Pug type, resting on a cool floor in
front of an open patio door on a warm day, chin down on its paws, eyes half
closed. Slightly parted mouth and a visible sense of effortful rest, but calm
and comfortable, not in distress. Warm backlight from the doorway, low camera
angle at floor level, interior soft and dim behind.

### `cardiomyopathy-cats-dogs.jpg`
A quiet, tender scene. An adult cat lying curled on a folded blanket in a pool
of low evening window light, chest visibly rising, eyes soft and half closed. A
person's hand rests gently on its side, face out of frame. Deep warm shadows,
muted palette, shallow focus on the cat's chest and the resting hand. Peaceful
and intimate rather than clinical.

### `feline-kidney-disease.jpg`
An older cat, slightly thin with a slightly dull coat, sitting beside a wide
ceramic water bowl on a kitchen floor, mid-drink or just lifting its head with
its chin still wet. Soft grey morning light through a window. Quiet and
domestic. The water bowl is clearly the emotional centre of the frame, since
increased thirst is the earliest sign owners notice. Muted cool palette.

### `hip-and-elbow-dysplasia.jpg`
A large breed dog, German Shepherd or Labrador type, pausing partway up a short
flight of carpeted interior stairs, weight shifted forward onto the front legs,
looking back over its shoulder toward the camera. Warm hallway light from above.
The hesitation reads in the posture, not in any visible deformity. Low angle
from the bottom of the stairs, background softly out of focus.

### `inherited-eye-disease.jpg`
A tight, softly lit portrait of a dog's face filling the frame, focus precisely
on one eye. The eye is clear, dark and healthy, catching a bright window
reflection, with the fine detail of the iris and the surrounding lashes and fur
sharply rendered. Collie or spaniel type with a gentle expression. Warm side
light, very shallow depth of field so the far eye and muzzle fall away. No
cloudiness, no visible disease.

### `ivdd-chondrodystrophy.jpg`
A Dachshund lying stretched out along a low sofa cushion in warm lamplight, body
fully extended, chin resting on its front paws, watching the camera calmly.
Emphasise the long back line as the compositional subject, running horizontally
through the frame. Comfortable and at ease, no ramp, harness or medical
equipment visible. Cosy evening interior, shallow focus, low camera angle level
with the cushion.

### `periodontal-dental-disease.jpg`
A cat or small dog yawning widely in soft daylight, caught mid-yawn with the
mouth open naturally, showing clean healthy white teeth and pink gums. Bright,
light and slightly comic in tone rather than clinical. Shot from slightly above
and to the side, sharp on the muzzle, bright domestic interior thrown out of
focus behind. No tartar, no inflammation, no visible disease.

### `pet-dna-testing.jpg`
A plain, unbranded cheek swab in a small clear tube resting on a light wooden
kitchen table, beside a folded blank instruction card and a plain white
cardboard mailer box. A relaxed mixed-breed dog sits just behind, softly out of
focus, watching the table. Clean bright natural daylight, calm and unremarkable.
No text, no logos, no brand marks, nothing legible on any surface.

### `pet-obesity-body-condition.jpg`
An overweight but comfortable and content tabby cat lying on its side on a
carpet in warm afternoon sun, stretched out, eyes closed, clearly relaxed. The
rounded body shape is evident from the side-on angle without the framing being
unkind or comic. Warm golden light, low camera angle at carpet level, soft
domestic background. Affectionate in tone, never mocking.

---

## After generating or sourcing

1. Resize to the target dimensions above, JPEG quality 80, and commit to the
   right directory. Both directories also get thumbnail and card variants, which
   `scripts/generate-thumbnails.js` derives automatically at build time.
2. Log anything from Wikimedia Commons in `IMAGE_CREDITS.md` with author and
   licence. Adobe Stock, generated and Canva images are not tracked there.
3. Re-run `node scripts/check-images.mjs` to confirm the list is clear.
