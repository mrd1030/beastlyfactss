# Beastlypedia image checklist

Every Beastfile needs two images.

**Hero** — landscape, **always a new image**, never a fact photo. Lands at
`/assets/beastlypedia/<slug>-hero.jpg`.
Target **1600 x 900**. It renders full-bleed at a fixed height (224px mobile,
416px desktop), so on a wide screen it is cropped hard top and bottom. **Keep the
animal centred vertically with headroom** or heads get cut off.

**Secondary** — portrait preferred, may reuse an existing fact photo. New ones
land at `/assets/beastlypedia/<slug>-secondary.jpg`. Target **1000 x 1500**.
Rendered uncropped at roughly 340px wide, so anything under ~700px wide will look
soft.

General: real-photograph style, natural light, shallow depth of field, no text,
no watermark, no collage, single animal unless noted.

> The brief says 15 Beastfiles but lists **16**. Counted here as 16.

---

## Need BOTH hero and secondary (6 animals, 12 images)

No usable photo exists for any of these.

### Fennec Fox — `fennec-fox`
- `fennec-fox-hero.jpg` (1600x900) — A fennec fox standing on pale desert sand at
  golden hour, enormous ears held upright, cream coat, full body in profile, soft
  dune background.
- `fennec-fox-secondary.jpg` (1000x1500) — Head and shoulders portrait of a fennec
  fox looking at the camera, ears dominating the frame, sharp eyes.
- *Accuracy:* smallest fox in the world, ears disproportionately huge, coat pale
  cream not red. Not a red fox, not a corsac.

### Panther Chameleon — `panther-chameleon`
- `panther-chameleon-hero.jpg` (1600x900) — A male panther chameleon gripping a
  branch in Madagascan foliage, vivid banded blue, red and green colouring, tail
  curled.
- `panther-chameleon-secondary.jpg` (1000x1500) — Vertical close-up of a panther
  chameleon on a vertical stem, showing the turret eye and casque.
- *Accuracy:* **Furcifer pardalis, not a veiled chameleon.** The site already has
  `chameleon.jpg` and it is the wrong species, so it cannot be reused. Males are
  boldly banded; no tall head casque like a veiled.

### Gaboon Viper — `gaboon-viper`
- `gaboon-viper-hero.jpg` (1600x900) — A Gaboon viper coiled in rainforest leaf
  litter, its geometric brown, purple and cream pattern blending into dead leaves,
  broad triangular head visible.
- `gaboon-viper-secondary.jpg` (1000x1500) — Vertical head study of a Gaboon
  viper, showing the enormous triangular head and the small nasal horns.
- *Accuracy:* massively broad head, stout body, leaf-litter camouflage. Not a
  rattlesnake or an adder.

### Green Anaconda — `green-anaconda`
- `green-anaconda-hero.jpg` (1600x900) — A green anaconda partly submerged at the
  edge of a slow tropical river, thick olive-green body with black oval blotches,
  eyes and nostrils above the waterline.
- `green-anaconda-secondary.jpg` (1000x1500) — Vertical view of a green anaconda's
  coiled body among wetland vegetation, showing scale texture and pattern.
- *Accuracy:* olive-green with round black blotches, extremely thick-bodied. Not a
  reticulated python and not bright green.

### Blue Poison Dart Frog — `blue-poison-dart-frog`
- `blue-poison-dart-frog-hero.jpg` (1600x900) — A blue poison dart frog on a wet
  dark leaf, brilliant cobalt body with irregular black spots, rainforest bokeh.
- `blue-poison-dart-frog-secondary.jpg` (1000x1500) — Vertical macro of a blue
  poison dart frog on a mossy stem, glossy skin, black spots crisp.
- *Accuracy:* Dendrobates tinctorius "azureus". Solid deep blue with black spots,
  darker blue legs. Not a green-and-black or strawberry dart frog.

### Victoria Crowned Pigeon — `victoria-crowned-pigeon`
- `victoria-crowned-pigeon-hero.jpg` (1600x900) — A Victoria crowned pigeon
  walking on a rainforest floor, blue-grey plumage, lacy white-tipped crest,
  maroon breast, red eye.
- `victoria-crowned-pigeon-secondary.jpg` (1000x1500) — Vertical portrait
  emphasising the fan-like lace crest and the red iris.
- *Accuracy:* turkey-sized, blue-grey, crest tipped white and lace-like. Not a
  regular crowned pigeon and definitely not a common wood pigeon.

---

## Need hero only (10 animals, 10 images)

Secondary reuses an existing fact photo, listed with each.

| Animal | Hero to create | Secondary reuses | Notes |
|---|---|---|---|
| Pangolin | `pangolin-hero.jpg` | `/assets/facts/pangolin-3.jpg` (784x1168 portrait) | ideal portrait already |
| Capybara | `capybara-hero.jpg` | `/assets/facts/capybara-2.jpg` (784x1168 portrait) | ideal portrait already |
| Narwhal | `narwhal-hero.jpg` | `/assets/facts/narwhal-2.jpg` (1168x784 landscape) | works, not portrait |
| Aye-Aye | `aye-aye-hero.jpg` | `/assets/facts/aye-aye.jpg` (784x1168 portrait) | ideal portrait already |
| Thorny Devil | `thorny-devil-hero.jpg` | `/assets/facts/thorny-devil.jpg` (1587x942 landscape) | works, not portrait |
| Glass Frog | `glass-frog-hero.jpg` | `/assets/facts/glass-frog.jpg` (681x511) | **small**, consider replacing |
| Axolotl | `axolotl-hero.jpg` | `/assets/facts/axolotl-2.jpg` (784x1168 portrait) | ideal portrait already |
| Shoebill | `shoebill-hero.jpg` | `/assets/facts/shoebill.jpg` (1063x1600 portrait) | ideal portrait already |
| Manta Ray | `manta-ray-hero.jpg` | `/assets/facts/giant-manta-ray.jpg` (1168x784 landscape) | works, not portrait |
| Leafy Sea Dragon | `leafy-sea-dragon-hero.jpg` | `/assets/facts/leafy-sea-dragon.jpg` (1600x1065 landscape) | works, not portrait |

### Hero prompts

- **Pangolin** — A pangolin walking across dry ground at dusk, overlapping
  keratin scales catching low light, long tail, small head low to the ground.
- **Capybara** — A capybara sitting at the edge of a river in soft morning light,
  blunt muzzle, calm expression, water and reeds behind.
- **Narwhal** — A narwhal at the surface among Arctic sea ice, single long spiral
  tusk clear of the water, mottled grey skin, cold blue light.
- **Aye-Aye** — An aye-aye clinging to a branch at night in Madagascan forest,
  huge orange eyes, enormous bat-like ears, wiry black coat, long thin middle
  finger visible. *Not a ring-tailed lemur.*
- **Thorny Devil** — A thorny devil walking across red desert sand, conical
  spines catching low sunlight, false head behind the neck visible.
- **Glass Frog** — A glass frog on a backlit green leaf, translucent underside
  showing internal organs, tiny body, rainforest bokeh.
- **Axolotl** — An axolotl in clear freshwater, feathery external gills fanned
  out, pale pink body, dark planted background. *Larval salamander, not a fish.*
- **Shoebill** — A shoebill standing still in African wetland reeds, enormous
  shoe-shaped bill dominating the frame, grey plumage, unblinking stare.
- **Manta Ray** — A giant manta ray gliding through open blue water seen from
  below, wide diamond wings, cephalic fins rolled, sunlight shafts above.
- **Leafy Sea Dragon** — A leafy sea dragon among kelp, leaf-shaped appendages
  along the body, gold and green colouring, drifting posture.

---

## Totals

- **16 heroes** — all new, landscape 1600x900
- **6 secondaries** — new, portrait 1000x1500
- **10 secondaries** — reuse existing fact photos, nothing to make
- **22 new images total**

## After the images land

1. Drop files into `public/assets/beastlypedia/`.
2. Set `heroImage` on each Beastfile (currently `null`, which renders a visible
   "image pending" block so nothing ships looking finished by accident).
3. Run `node scripts/generate-thumbnails.js` — `assets/beastlypedia` is already in
   `CARD_VARIANT_DIRS`, so the index cards get their `-card` tier automatically.
