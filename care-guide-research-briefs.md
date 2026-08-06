# Care Guide Research Briefs — Gerbil, Degu, Green Iguana, Fire Skink, Quaker Parakeet

Research pass for the cost / handling / health-issues / tank-setup deep-dive batch
(see `templates/RESEARCH_BRIEF_TEMPLATE.md` for the four-part shape, and
`diet-feeding-research-briefs.md` for the sibling feeding-guide pass).

Sources were fetched and read rather than recalled. Every number below carries the
source it came from. **Use this as the source when drafting the four articles per
species. Do not re-derive numbers from memory.**

Two things this pass does not cover, both flagged rather than guessed:

- **Costs.** None of the veterinary or care-sheet sources consulted publish pricing.
  Every figure currently in `src/lib/data/guides/*.js` for these five species is an
  unverified estimate, carrying the same `not verified current pricing` comment the
  other 81 guide entries already use. Pricing needs a separate retail/breeder pass.
- **Fire skink and degu vet literature.** Merck has no chapter for either. The fire
  skink brief rests on ReptiFiles, the degu brief on the RSPCA. Both are reputable
  but neither is a veterinary reference on the level of the Merck gerbil chapter.

A `⚠ CORRECTION` block at the end of each species lists where the already-shipped
encyclopedia entry or care guide disagrees with what the sources actually say.

---

## Sources consulted

| Source | Used for | URL |
|---|---|---|
| Merck Veterinary Manual, Gerbils | gerbil biology, health, husbandry | https://www.merckvetmanual.com/exotic-and-laboratory-animals/rodents/gerbils |
| Merck Veterinary Manual, Overview of Rodents | rodent husbandry background | https://www.merckvetmanual.com/exotic-and-laboratory-animals/rodents/overview-of-rodents |
| Merck Veterinary Manual, Nutritional/Metabolic Diseases of Reptiles | MBD background | https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/nutritional-metabolic-and-endocrine-diseases-of-reptiles |
| Merck Veterinary Manual, Management and Husbandry of Reptiles | reptile husbandry background | https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles |
| Merck Veterinary Manual, Nutritional Diseases of Pet Birds | bird nutrition background | https://www.merckvetmanual.com/exotic-and-laboratory-animals/pet-birds/nutritional-diseases-of-pet-birds |
| RSPCA, Degus (+ diet, environment, health sub-pages) | degu husbandry and health | https://www.rspca.org.uk/adviceandwelfare/pets/rodents/degus |
| RSPCA, Gerbils | gerbil husbandry | https://www.rspca.org.uk/adviceandwelfare/pets/rodents/gerbils |
| ReptiFiles, Fire Skink Care | fire skink husbandry numbers | https://reptifiles.com/fire-skink-care/ |
| ReptiFiles, Green Iguana Care | iguana husbandry numbers | https://reptifiles.com/green-iguana-care/ |
| Lafeber, Quaker Parakeet | Quaker biology, health, temperament | https://lafeber.com/pet-birds/species/quaker-parakeet/ |

---

## Gerbil (*Meriones unguiculatus*)

Best-sourced species in this batch. Merck has a full veterinary chapter.

**Biology and lifespan**
Merck: "The normal lifespan of a gerbil is 2–3 years." Normal body temperature 37–39°C
(98–102°F). Litter size 3–7. Sexual maturity: males 70–84 days. Wild burrows are
2–3 feet long in soft soil. Coat colours are genetically characterised: agouti is
autosomal dominant; sandy, black and red-eyed albino are all recessive.

**Handling**
Merck is explicit and it is the single most important handling fact for the species:
"Thin skin covers the tail of the gerbil. Unlike mice, if a gerbil is picked up by the
tip of its tail, the skin will often slip off (degloving injury), leaving a raw,
exposed tail that eventually becomes necrotic and sloughs." Treatment is prompt
amputation of the bare portion. Merck's handling instruction is **not** "never touch
the tail" but "only the base of the tail should be grasped during handling."

**Health issues (the real top set, from Merck)**

1. **Nasal dermatitis** ("sore nose", "facial eczema"). Merck calls it "a common
   condition in pet gerbils". Caused by excess Harderian gland porphyrin secretion
   acting as a skin irritant. Starts as redness around the nostrils, progresses to
   hair loss and moist dermatitis, can extend into the maxillary sinuses and cause
   anorexia, weight loss and death. **Trigger is humidity above 50% and overcrowding.**
   Prevention: keep humidity below 40%, reduce stress, allow sand bathing.
2. **Tyzzer disease** (*Clostridium piliforme*). Merck: "the most frequently described
   fatal infectious disease of gerbils." Fecal-oral, contracted from infected bedding.
   Sudden death or death after a short illness; hepatic necrosis; diarrhoea possible.
3. **Aural cholesteatoma.** Merck: "occur in 50% of gerbils > 2 years old." Clinical
   sign is head tilt. Leads to bone necrosis and inner ear destruction.
4. **Neoplasia.** 25–40% incidence in gerbils over 2–3 years. Squamous cell carcinoma
   of the ventral marking gland (males) and ovarian granulosa cell tumours (females)
   account for 80% of tumours in animals over 3 years. Marking gland tumours invade
   locally and can metastasise.
5. **Periodontal disease, obesity and diabetic change**, specifically from being fed
   standard rat/mouse diets. Merck's Pearls & Pitfalls box: "always feed gerbils diets
   labeled specifically for their species."

**Diet (Merck)**
Pelleted rodent diets at **18–20% protein**; **5–8 g/day** of pelleted chow. Diets over
**4% fat** produce high blood cholesterol, more pronounced in males. Sunflower seeds
are called out as high fat and low calcium. Deficiency problems arise on homemade
diets, sunflower-heavy diets or table scraps.

**Enclosure (Merck)**
Solid-bottom cages required. Floor-to-lid height must accommodate standing erect on
the hindlimbs. **Low humidity is advisable**, below 40% to prevent nasal dermatitis.
Sand bathing is required to stop the coat matting; a bath is "usually completed within
5 minutes", and deprivation measurably changes behaviour. Lead paint and lead-alloy
cages cause chronic lead toxicosis because gerbils gnaw and concentrate urine.

**Seizures**
Merck attributes the well-known gerbil seizure syndrome to selectively bred lines and
to dihydrostreptomycin toxicosis, noting pet gerbils can also be susceptible. Onset
around 2 months. Seizures pass in a few minutes and have no lasting effects.
Anticonvulsants unnecessary. Frequency and severity "often decrease with age" **but**
"certain subsets of adult gerbils do not improve with age but have progressively more
severe seizures." Handling frequently during the first 3 weeks of life suppresses them
in predisposed animals.

**⚠ CORRECTION to shipped content**

- Encyclopedia says lifespan **2-4 years**. Merck says **2–3**. Fix.
- Guide diet section recommends "a good gerbil **or hamster** seed mix ... roughly a
  tablespoon per gerbil per day". Merck recommends a **pelleted diet labelled for
  gerbils specifically**, 18–20% protein, 5–8 g/day, and explicitly warns that
  standard rodent diets cause periodontal disease, obesity and diabetic change.
  A hamster mix is the wrong species label. **Rewrite this section.**
- Guide says nothing about **humidity**. Merck makes below-40% humidity a primary
  disease-prevention measure. **Add.**
- Guide health section omits **nasal dermatitis** (Merck: common) and **aural
  cholesteatoma** (Merck: 50% of gerbils over 2). **Add both.**
- Guide FAQ says seizure-prone gerbils are "often in younger animals that grow out of
  it". Merck says severity often decreases with age but a subset gets progressively
  worse. **Soften.**
- Guide says "Never grab the tail". Merck's instruction is to grasp **only the base**.
  Refine rather than reverse.
- Guide recommends **8 to 12 inches** of bedding. No consulted source states a depth;
  this is a hobby recommendation. Merck notes wild burrows run 2–3 feet horizontally.
  **Keep but do not present as veterinary guidance.**

---

## Degu (*Octodon degus*)

No Merck chapter. RSPCA is the primary source here and is thinner on numbers.

**Biology**
RSPCA: native to **northern and central Chile**, found at elevations to 1,200 m in the
Andes. Diurnal. Long thin tail with a tufted black tip. **Lifespan 6–7 years in
captivity.** Teeth are naturally yellow-orange; **white teeth are a sign of poor
health**.

**Diet (RSPCA)**
Fibre-heavy, more so than other rodents. **Good-quality hay should make up the majority
of the diet and is "much more important than commercial degu nuggets."** Nuggets and
leafy veg as a small measured daily portion. Constant water from a bottle.

Substitute pellets: **guinea pig or chinchilla nuggets are acceptable provided they
contain no molasses.** Foods formulated for **rabbits, hamsters and gerbils are not
suitable**, nor are chinchilla mixes containing dried fruit.

Sugar: degus are prone to **Type 2 diabetes** and need a low sugar, low fat diet. No
fruit. Carrot, sweet potato, beetroot and parsnip are named as higher-sugar vegetables
to give only in very small pieces as an occasional treat. Commercial treat products are
flagged as often too sugary.

**Coprophagy**: RSPCA states degus "need to be able to eat their own droppings to get
their essential nutrients and keep their digestive system healthy."

**Enclosure (RSPCA)**
- **Solid roof.** Degus are a prey species whose main wild predators are birds of prey,
  and they are frightened by movement overhead.
- **Plenty of vertical space to climb.** In the wild they climb shrubs and small trees.
  Provide branches of safe wood (pear, apple, beech) and platforms at different levels
  to climb and jump between. Stable rock formations also work.
- Space to run, jump, climb, chew, dust bathe, dig and nest.
- Wooden, rope and cardboard toys. **Avoid plastic, and avoid cedar** as toxic.

**Health (RSPCA)**
Named conditions to know: **vitamin A deficiency, liver disease, diabetes, tail loss,
heat stroke, pneumonia and other respiratory infections.** Teeth should be checked at
least weekly for colour, length and shape; only a vet should correct overgrowth. Annual
vet health check recommended. RSPCA notes degus are a relatively new pet species and
recommends registering with an exotics vet experienced in them.

Daily check list: nasal discharge, wetness around the mouth, opaque whitening of the
eyes (cataract), white teeth.

**⚠ CORRECTION to shipped content**

- Encyclopedia says lifespan **6-8 years** captive. RSPCA says **6–7**. Fix.
- Encyclopedia says origin "**Central Chile**". RSPCA says **northern and central**. Fix.
- Guide says "**more floor area beats more height**". RSPCA explicitly calls for plenty
  of **vertical** space with branches and platforms, since degus climb shrubs and small
  trees in the wild. **This is backwards. Rewrite.**
- Guide says "**Rabbit and guinea pig pellets are usually unsuitable**". RSPCA says
  **guinea pig** or chinchilla nuggets **are** acceptable if molasses-free; it is
  rabbit, hamster and gerbil food that is unsuitable. **Wrong. Fix.**
- Guide says "**No ... carrot**" outright. RSPCA permits carrot in very small pieces as
  an occasional treat. **Soften.**
- Guide omits **coprophagy**, which RSPCA treats as a nutritional requirement. **Add.**
- Guide omits **vitamin A deficiency** and **liver disease** from the health list, both
  named by RSPCA. **Add.**
- Guide omits the **solid roof** requirement and the reason for it. **Add.**
- Guide says white teeth indicate "malnutrition". RSPCA says "**poor health**", which is
  broader. Use theirs.

---

## Fire Skink (*Lepidothyris fernandi*)

ReptiFiles only; no veterinary chapter exists for this species. Numbers are specific
and internally consistent, but single-sourced.

**Size and enclosure**
Grows up to **15″ / 38 cm**. Minimum enclosure for a single adult:
**36″L x 18″W x 18″H (90 x 45 x 45 cm)**, larger strongly recommended.

**Temperatures**
- Basking surface: **92–96°F (33–35.5°C)**
- Cool zone: **75–85°F (24–29°C)**
- Night: **70–75°F (21–24°C)**
Two digital probe thermometers, one on the basking surface and one at the cool end.

**UVB**
Target **UVI 3.0–4.0** in the basking area. For an 18″ tall enclosure: a **22″ Arcadia
T5 HO Forest 6%** kit, or a Zoo Med T5 HO Reptisun 5.0 with a Vivarium Electronics
fixture (ReptiFiles notes Zoo Med's own hood reduces output). Solarmeter 6.5 recommended
to verify placement.

**Humidity**
**60–70%**, tracked with a digital probe hygrometer placed mid-enclosure. Raised by
misting morning and evening; enclosure should be ventilated enough to dry between
mistings. Optional night fogger with RO or distilled water, cleaned weekly.

**Substrate**
Moisture-retentive, tropical-soil-like. DIY mix: **40% organic topsoil, 40% coconut
fiber, 20% fine sand**. Depth **4–6″ / 10–15 cm**. Spot clean daily, full replacement
every 3–4 months.

**Feeding**
Insectivore. **Juveniles daily to every other day; adults 2x per week.** Offer as many
insects as the animal can eat in a **5-minute period**, each feeder **no larger than the
skink's head**. Feeders listed: crickets, isopods, dubia and discoid roaches, mealworms
and beetles, superworms and beetles, earthworms, hornworms, silkworms.

**⚠ CORRECTION to shipped content**

- Guide says basking **95 to 100°F**. ReptiFiles says **92–96°F**. **Too hot. Fix.**
- Guide says cool end **75 to 78**. ReptiFiles says **75–85**. Widen.
- Guide says **6 to 10 inches** of substrate. ReptiFiles says **4–6 inches**.
  **Overstated. Fix.**
- Guide says humidity **60 to 75%**. ReptiFiles says **60–70%**. Tighten.
- Guide says adults eat "**every two to three days**". ReptiFiles says adults **2x per
  week**. **Too frequent. Fix.**
- Guide substrate mix omits the **20% fine sand** component. Add.
- Enclosure size **36x18x18** and UVB **5–6%** as shipped both match. No change.

---

## Green Iguana (*Iguana iguana*)

ReptiFiles for husbandry numbers; Merck reptile chapters for the MBD mechanism.

**Enclosure**
Arboreal, so height matters as well as length. **Minimum for a single adult:
10′L x 5′W x 6′H (3 x 1.5 x 1.8 m)**, described explicitly as a minimum rather than a
target. Temporary juvenile housing 4′x2′x4′ "will give you some time, but not much."

**Temperatures**
- Basking **surface** temperature: **~120°F (50°C)**
- General air temperature: **75–88°F (24–31°C)**
- Night: **73–84°F (23–28°C)**
Needs a basking area large enough to heat the whole body evenly: at least **2 bulbs for
a juvenile and 4+ for an adult**, halogen floods in ceramic-socket domes.

**UVB**
Target **UVI 3.0–4.0** at the basking site. **Arcadia T5 HO Dragon 14%** at 13–16″
(33–41 cm), or **Arcadia T5 HO Desert 12%** at 12–15″ (31–38 cm), with longer distances
given for larger enclosures. Solarmeter 6.5 recommended, especially with multiple bulbs.

**Humidity**
Daytime average **60–80%**, with night spikes to **100%**.

**Substrate**
40% plain topsoil / 40% coconut fiber / 20% play sand.

**Diet**
**60% dark leafy greens, 30% other vegetables, about 10% fruit.**

**⚠ CORRECTION to shipped content**

- Guide says basking **95 to 100°F**. ReptiFiles says basking **surface ~120°F**.
  **Materially wrong. Fix.**
- Guide says adult enclosure "roughly **8x4x6 ft**". ReptiFiles minimum is
  **10 x 5 x 6 ft**. **Undersized. Fix in both the guide and the checklist.**
- Guide says UVB "**10 to 12 percent**". ReptiFiles specifies **12% or 14%** Arcadia
  T5 HO depending on distance. **Fix.**
- Guide says diet is "**80 to 90 percent dark leafy greens**" with fruit as "an
  occasional garnish". ReptiFiles gives **60 / 30 / 10** greens / other veg / fruit.
  **Fix both figures.**
- Guide says humidity **65 to 75%**. ReptiFiles says **60–80%** day, 100% night spikes.
  Widen.
- The no-animal-protein rule, the MBD mechanism and the seasonal male aggression as
  shipped are all consistent with the sources. No change.

---

## Quaker Parakeet (*Myiopsitta monachus*)

Lafeber for species detail; Merck pet-bird chapters for nutritional background.

**Biology**
Lafeber: a **12-inch** bird, lime green with a **storm-grey face, neck and chest**,
blue-tinged underwings, horn-coloured beak. Frequently **confused with conures** on size
and colour. Blue and cinnamon mutations exist and are expensive. **Lifespan up to 30
years.** Clutch of 6–8 eggs, up to 13 recorded.

**Nesting**
"The only parrot that builds its nest as opposed to nesting in a hole in a tree", making
elaborate oven-shaped many-chambered structures from thousands of twigs. Sometimes
reluctant to use nest boxes, and bred more successfully when given twigs and
substantial nesting material.

**Temperament and noise**
"Anything but silent" — Lafeber warns explicitly that someone with noise sensitivity
should think twice, that they will wake a heavy sleeper and may disturb neighbours.
Talking ability "rivals the much more expensive African grey and Amazon parrot", and
they start talking relatively young. Highly trainable with food or praise. Hand-raised
birds are affectionate; untamed birds tame down with patience.

**Health (Lafeber)**
"The most common health problems with the quaker parrots are **feather destructive
behaviors**, such as plucking out feathers, and **fatty liver disease**, which is
associated with a high-fat diet; namely a seed-based diet." Recommended diet is
pelleted plus fresh fruit and vegetables and healthy table foods.

**Legal**
Lafeber corroborates the legal picture independently of our own matrix research:
"because quaker parakeets are so prolific and destructive when they colonize in the
wild, they are illegal to sell or own in some states, so check state laws before you
acquire or sell a quaker." It adds a detail worth carrying into the articles: **"These
birds have been confiscated and euthanized in states where they are illegal to own."**
It also advises checking the laws of any state you might move to.

**⚠ CORRECTION to shipped content**

- Guide health section uses the term "**Quaker mutilation syndrome**". Lafeber describes
  the same problem as "feather destructive behaviors" and does not use that name. The
  term is real in avian medicine but is **not corroborated by the source consulted**.
  Either soften the wording or find a veterinary source before using it as a named
  condition.
- Encyclopedia gives lifespan "**15-20 years (up to 25-30 in captivity)**". Lafeber says
  **up to 30**. Compatible, no change needed.
- Size, grey face/chest, nest-building, noise, talking ability, seed-diet fatty liver
  and the legal warning as shipped are all corroborated. No change.
- **Add** the confiscated-and-euthanised detail and the check-before-you-move advice.
  Both are concrete and come straight from the source.
- No consulted source gave a **minimum cage size** for this species. The 24x24x30 in
  currently in the guide is unverified. Flag or source separately.

---

## Still to research

- **Costs for all five.** No source consulted publishes pricing. Needs a retail and
  breeder pass, and until then every cost figure in these five guide entries is an
  estimate.
- **Quaker minimum cage dimensions** from an avian veterinary or welfare source.
- **Degu enclosure dimensions.** RSPCA describes requirements qualitatively and gives no
  minimum figures. The 24x18x36 in currently shipped is unverified.
- **Gerbil bedding depth** from a welfare source rather than hobby consensus.
- A **second source for the fire skink**, which currently rests entirely on ReptiFiles.
