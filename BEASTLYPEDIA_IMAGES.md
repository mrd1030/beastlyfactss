# Beastlypedia image checklist

## Status: original 16 Beastfiles complete. 26 Route A heroes now open.

All 22 images for the original sixteen are delivered and installed, including
the three heroes listed as outstanding below.

**The live queue is now the Route A batch at the bottom of this file: 26 hero
images, one per new Beastfile.** Those 26 Beastfiles are written and committed,
carrying `draft: true`, which keeps them off the site until their hero lands.
Nothing renders as a placeholder. Drop in a hero, set `heroImage` and remove
`draft`, and that file publishes with its article link, its fun facts and its
secondary photo already attached.

Only the wolverine needs a secondary as well, because it is the one animal with
no facts and therefore no fact photo to borrow.

<details>
<summary>Historical: the original 22 (all delivered)</summary>

### Status at the time: 19 of 22 delivered and installed

All 19 checked before install: correct orientation, and the six
species-confusion risks below all came back accurate (the panther chameleon is
properly banded with no veiled casque, the anaconda has the right oval blotches,
the dart frog is *azureus*).

**Still needed, 3 heroes:**

- `aye-aye-hero.jpg`
- `thorny-devil-hero.jpg`
- `gaboon-viper-hero.jpg`

Prompts for all three are in the sections below. All six new secondaries are
done.


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

</details>

---

## Route A: 26 new Beastfile heroes

These 26 Beastfiles are written and committed carrying `draft: true`, so none
of them is on the site yet. Each one publishes the moment its hero lands, and
arrives with its article link, its linked fun facts and its secondary photo
already attached.

Hero spec is the same as above: **landscape 1600 x 900**, always a new image,
never a fact photo. Keep the animal centred with headroom, since the banner
crops hard top and bottom on wide screens. Real-photograph style, natural
light, shallow depth of field, no text, no watermark, single animal.

Secondaries are already handled: every one of these borrows an existing fact
photo, except the wolverine.

### Marine Life (10)

**Bottlenose Dolphin** `dolphin-hero.jpg`
- A bottlenose dolphin breaking the surface of open blue water, beak and melon clear of the waterline, spray around it.
- *Accuracy:* Tursiops truncatus. Blunt short beak and a curved dorsal fin. Not a common dolphin with hourglass flank markings, and not an orca.

**Clownfish** `clownfish-hero.jpg`
- A clownfish among the tentacles of a sea anemone on a tropical reef, orange body and white bands sharp against the anemone.
- *Accuracy:* Amphiprion ocellaris. Three white bands edged in black. The anemone tentacles must surround it, that relationship is the whole point.

**Immortal Jellyfish** `immortal-jellyfish-hero.jpg`
- A tiny transparent jellyfish against dark water, bell backlit, red stomach visible inside, fine tentacles trailing.
- *Accuracy:* Turritopsis dohrnii is about four millimetres across. Bell-shaped and transparent with a bright red gut. Not a moon jelly, not a big trailing sea nettle.

**Seahorse** `seahorse-hero.jpg`
- A seahorse gripping a strand of seagrass with its curled tail in clear shallow water, body upright.
- *Accuracy:* The tail must be curled around something, that is the fact. Upright posture, tubular snout, bony ridged body.

**Hagfish** `hagfish-hero.jpg`
- A hagfish on dark seafloor sediment, pale eel-shaped body curved across the mud, cold low light.
- *Accuracy:* Jawless, barbels around the mouth, no real fins. Not an eel, and not a lamprey with a round sucker disc.

**Sharks** `shark-hero.jpg`
- A shark cruising through open blue water in profile, light rippling across its back, full body in frame.
- *Accuracy:* Any recognisable shark, ideally not a great white breaching. Calm and cruising suits an article about how little danger they actually pose.

**Octopus** `octopus-hero.jpg`
- An octopus on a rocky seabed, arms curled beneath it, skin textured and coloured to match the rock.
- *Accuracy:* Octopus vulgaris. Eight arms, horizontal slit pupil, bulbous mantle. Not a squid or cuttlefish: no fin skirt, no long feeding tentacles.

**Mantis Shrimp** `mantis-shrimp-hero.jpg`
- A peacock mantis shrimp at the mouth of its burrow on a reef, green and orange shell, stalked eyes raised.
- *Accuracy:* Odontodactylus scyllarus. Independently mobile stalked eyes and folded raptorial clubs. Not a true shrimp or prawn.

**Cuttlefish** `cuttlefish-hero.jpg`
- A cuttlefish hovering above sand with arms held forward, a rippling pattern moving across its skin, fin skirt undulating.
- *Accuracy:* Sepia officinalis. W-shaped pupil and a fin running the full length of the body. Not a squid, not an octopus.

**Humpback Whale** `humpback-whale-hero.jpg`
- A humpback whale breaching clear of the ocean surface, water streaming off its very long pectoral fin.
- *Accuracy:* Megaptera novaeangliae. Extremely long white pectoral fins and a knobbly head. Not a blue or sperm whale.

### Mammals (13)

**Giraffe** `giraffe-hero.jpg`
- An adult giraffe in profile on open savanna, neck raised, acacia trees behind, warm low light.
- *Accuracy:* Full neck in frame. Keep the head well inside the top of the crop, this is the easiest one in the batch to decapitate.

**Naked Mole Rat** `naked-mole-rat-hero.jpg`
- A naked mole rat in a soil tunnel, wrinkled pink hairless skin, large protruding incisors, tiny eyes.
- *Accuracy:* Hairless and pink with buck teeth outside the lips. Not a mole, and not a shaved rodent that still shows fur.

**Slow Loris** `slow-loris-hero.jpg`
- A slow loris gripping a branch at night in rainforest, huge round eyes reflecting the light, hands wrapped around the wood.
- *Accuracy:* Nycticebus. Enormous forward-facing eyes, short round face, almost no tail. Not a bushbaby, not a tarsier.

**African Elephant** `african-elephant-hero.jpg`
- An African elephant on open savanna at golden hour, ears spread, trunk lowered, full body in profile.
- *Accuracy:* African, not Asian: large fan-shaped ears and a dipped back. Both sexes can carry tusks.

**Three-Toed Sloth** `sloth-hero.jpg`
- A three-toed sloth hanging beneath a rainforest branch, long curved claws hooked over the wood, face toward the camera.
- *Accuracy:* Bradypus. Three claws on the front limb and the dark mask around the eyes. Not a two-toed sloth.

**Gray Wolf** `gray-wolf-hero.jpg`
- A grey wolf standing in snow at the edge of conifer forest, looking toward the camera, thick winter coat.
- *Accuracy:* Canis lupus. Long legs, broad muzzle, heavy ruff. Not a husky and not a German shepherd.

**Lion** `lion-hero.jpg`
- A male lion lying on open savanna grass at golden hour, full mane, looking into the distance.
- *Accuracy:* Adult male with a full mane, in savanna rather than an enclosure.

**Tiger** `tiger-hero.jpg`
- A wild tiger walking through tall grass at the forest edge, striped flank catching the light, full body in frame.
- *Accuracy:* Panthera tigris. Orange with black stripes and a white ruff. Not a white tiger.

**Rhinoceros** `rhinoceros-hero.jpg`
- A rhinoceros standing in open grassland in profile, horn and heavy folded skin clearly visible.
- *Accuracy:* Any African species. The horn must be prominent and intact, it is the subject of the article.

**Wombat** `wombat-hero.jpg`
- A wombat at the entrance to its burrow on grassy ground, stocky body and broad bare nose visible.
- *Accuracy:* Vombatus ursinus. Stocky, short-legged, bare leathery nose. Not a badger and not a quokka.

**Honey Badger** `honey-badger-hero.jpg`
- A honey badger walking across dry ground, black body and broad pale back stripe clearly visible.
- *Accuracy:* Mellivora capensis. Black below with a wide pale mantle from crown to tail. Not an American or European badger with a striped face.

**Platypus** `platypus-hero.jpg`
- A platypus swimming at the surface of a still river, bill and dense brown fur visible, ripples spreading.
- *Accuracy:* Ornithorhynchus anatinus. Duck-like bill, flat paddle tail, webbed forefeet. Not an otter, not a beaver.

**Wolverine** `wolverine-hero.jpg`
- A wolverine moving across deep snow in boreal forest, dark coat and pale flank stripe visible, low winter light.
- *Accuracy:* Gulo gulo. Bear-like build on a small frame, with a pale stripe along each flank meeting at the rump. Not a badger, not a small bear.
- **Also needs 2 fact photos**, landscape, since facts 274 and 275 were written for it and are live without images. `wolverine.jpg` and `wolverine-2.jpg` into `public/assets/facts/`. The Beastfile secondary then borrows `wolverine.jpg`, so no separate secondary is needed.
- Once those exist, add to FACT_IMAGES in **both** `factImages.js` and `public/_worker.js`: `274: '/assets/facts/wolverine.jpg',` and `275: '/assets/facts/wolverine-2.jpg',`

### Birds (2)

**Emperor Penguin** `emperor-penguin-hero.jpg`
- An emperor penguin standing on Antarctic sea ice in low light, orange ear patches and pale bill visible.
- *Accuracy:* Aptenodytes forsteri. The tallest penguin, with orange-yellow ear patches that bleed into the chest. Not a king penguin, whose orange is sharply defined.

**Crow** `crow-hero.jpg`
- A crow perched on a bare branch against an overcast sky, glossy black plumage and heavy bill.
- *Accuracy:* All black including bill and legs. Not a magpie, not a jackdaw with a pale eye, not a raven with a wedge-shaped tail.

### Other (1)

**Tardigrade** `tardigrade-hero.jpg`
- A tardigrade under high magnification, plump segmented body and eight clawed legs.
- *Accuracy:* Eight legs ending in claws, barrel body, blunt head. A stylised electron-microscope look is fine here, since nobody sees one unaided.

### Installing one

1. Save as `public/assets/beastlypedia/<id>-hero.jpg`.
2. In the Beastfile: set `heroImage` to that path, then delete the `draft: true` line.
3. `node scripts/generate-thumbnails.js`
4. `node scripts/generate-beastlypedia-index.js`
