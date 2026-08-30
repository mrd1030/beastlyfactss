# Pending image prompts

10 referenced images do not exist yet, so `scripts/check-images.mjs` fails and
the build stops before Vite. This file holds a prompt for each. Delete an entry
once its file is committed.

The seven breed images are done and their prompts have been removed. What is
left is the legal guide image and the nine article images.

Both directories want a 3:2 frame. Guides are 1168x784, articles are 1600x1067.
Export JPEG quality 80. `scripts/generate-thumbnails.js` derives the thumb and
card variants at build time.

## How the existing health images handle illness

Sampled from `rabbit-gi-stasis.jpg`, `cat-hairball-vomiting.jpg`,
`ferret-adrenal-disease.jpg` and `dog-bloat-gdv.jpg`, the site already follows
one rule: **never show the disease, show the thing standing next to it.**

- GI stasis shows a healthy rabbit on a bed of hay, which is the prevention.
- Hairballs show a longhair cat grooming in a sunlit window, which is the cause,
  framed as ordinary and beautiful.
- Adrenal disease shows a ferret warm and comfortable in blankets.
- Bloat shows a large dog resting quietly after eating.

So each of the nine article prompts below takes a different one of those angles,
and no two share a setting, palette or camera position:

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

## Sourcing

The seven breed images were generated and checked against breed standards before
being installed, including the traits generators usually miss: the Scottish Fold
ears actually fold, the Sphynx reads as downy rather than bald, and the
Rottweiler carries a natural undocked tail. Worth the same check on anything
added later, since those are the details a reader who owns the breed will catch.

Generation is fine for the remaining ten. No specific animal is being identified
in any of them, which is how the existing article set was made.

---

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

## After generating or sourcing

1. Resize to the dimensions above, JPEG quality 80, commit to the right directory.
2. Log anything from Wikimedia Commons in `IMAGE_CREDITS.md` with author and
   license. Adobe Stock, generated and Canva images are not tracked there.
3. Re-run `node scripts/check-images.mjs` to confirm the list is clear.
