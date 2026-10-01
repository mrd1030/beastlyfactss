# White's Tree Frog v2 notes

Written during the 1.0 build (October 2026), the first White's tree frog package and the
first terrestrial amphibian in the series. Read this before starting v2, along with the
**White's Tree Frog 1.0** block under **Site content gaps by package** in
`../TEMPLATE_GUIDE.md`.

## What 1.0 is

39 pages, guide version 1.0, template t3, built from fragments plus a build script in
`../source/whites-tree-frog-src/`. There is no earlier edition. Cover photo is the owner's
`images/whites-tree-frog-cover-1.jpg`; `whites-tree-frog-cover-2.jpg` is the alternate.

## Which skeleton, and why

The axolotl block says an amphibian takes the aquatic skeleton. That holds for a fully
aquatic one only. This frog meets water in a dish and a mister, so it took the **arboreal
reptile skeleton** (Crested Gecko 2.0) and changed four things:

- **A water page replaces the water-chemistry block.** No cycling, no filtration, no
  hardness target. What the page carries is which water is safe to mist with, chloramine
  against chlorine, and the dish depth. It is the page a frog owner most often gets wrong.
- **A cleaning and household chemicals page** that no reptile package has. Permeable skin
  makes the cleaning products a health topic, not a chore.
- **The health section grows to seven pages**: red flags, obesity, chytrid, red-leg, bone
  disease and vitamin A, skin injuries and chemical exposure and dehydration, and the minor
  conditions. The reptile skeleton's eggs, sexing-growth and stool pages drop; sexing moved
  into the group housing page, and there is no species growth table to print.
- **Body condition gets its own page** in the feeding section, because obesity is the
  signature risk and the ridge test is how it is read.

## Page count: 39, a choice, not a floor

Every page cleared on the first measured build, minimum 92 px free, so 39 was never forced
by overflow. The head CSS is the cockatoo's, copied unchanged except for the accent triple,
and it left real headroom. Several pages run 250 to 340 px free (obesity, red-leg, bone
disease, first 30 days, symptoms, routine, about), which is the room a v2 has for new
material without a split. Nothing was cut for space.

```
p2=431  p3=292  p4=156  p5=192  p6=113  p7=276  p8=215  p9=163  p10=119  p11=105
p12=214  p13=206  p14=244  p15=251  p16=202  p17=141  p18=212  p19=220  p20=235
p21=271  p22=220  p23=281  p24=290  p25=146  p26=202  p27=180  p28=213  p29=92
p30=343  p31=300  p32=330  p33=117  p34=218  p35=174  p36=105  p37=98  p38=96  p39=335
```

Tightest: 29 (budget, 92), 38 (sources, 96), 37 (glossary, 98), 36 (equipment log, 105),
11 (cleaning, 105). Roomiest: 30 (first 30 days), 39 (about), 32 (routine), 31 (symptoms).

## Blocks removed during drafting

Nothing was cut for space. These were removed in the source-check pass because no source
loaded during the build carried them. Kept here so nobody re-adds them unsourced.

- Page 6, "Why gentle": "A frog ... loses water through its skin as it warms" and "needs
  somewhere 10 degrees lower to go". The 10-degree figure was invented; the water-loss
  mechanism had no source in hand.
- Page 6, the signs table row "Frog pressed low on the glass, pale, restless | The warm end
  may be over 90&deg;F (32&deg;C)". No source describes overheating signs for this species.
  Replaced by a row that reads the thermometer instead.
- Page 12, "or start nibbling a sleeping frog" on leftover crickets. Plausible, unsourced.
- Page 13, dubia roaches "do not chirp or climb out". True of the insect, irrelevant to the
  frog, unsourced.
- Page 15, "goes very pale and flat" as a handling stress sign. Unsourced.
- Page 24, "a frog with a bent jaw may need prey offered from forceps for life". Unsourced.
- Page 30, "Offer a small feeding on day 2 or 3". An invented day count.
- Page 26, "belly firm" as an impaction sign. Unsourced.

## Ideas raised and never drafted

In rough priority order. Each needs sourcing before it goes on a page.

1. **A heat-stress page.** The package prints a 90&deg;F (32&deg;C) ceiling from one vet
   care sheet and a heat-wave method adapted from logic rather than a source. What an
   overheated tree frog looks like, and what to do in the first ten minutes, was not found
   in any veterinary source loaded during the build. The crested gecko block logs the
   reptile version of the same gap.
2. **Froglet and juvenile rearing.** One table row covers frogs under 4 cm. Buyers of small
   juveniles, and anyone whose pair bred, need prey sizing, enclosure scale-down, and growth
   expectations. No species growth table or weight range was found anywhere.
3. **A weight reference.** No published gram ranges for this species turned up, so the owner
   log tracks ridges and insect counts rather than weight. If a source appears, a weight
   column belongs on page 35.
4. **Bioactive, properly.** The substrate page lists it and stops. Drainage layer, soil mix,
   springtails and isopods, plant choice, and the maintenance comparison against paper towel.
5. **Choosing a color morph.** Blue, snowflake and other designer lines, what the prices
   buy, and whether any carry health problems. Needs a genetics or veterinary source.
6. **What an amphibian vet visit involves.** Exam, fecal, PCR swab, radiographs, and what
   they cost. The axolotl notes carry the same idea.
7. **A full state legal page.** Only possible once White's tree frog is added to
   `legalStatus.json` and researched against all 52 jurisdictions.

## Proposed gaps, carried from the build

Also logged in the gap block in `TEMPLATE_GUIDE.md`, where they drive site articles. They
rest on knowledge of the species rather than on a grep, and still need sourcing.

- An amphibian emergency plan: outages, heat waves, travel and transport for terrestrial
  amphibians. `reptile-emergency-plan-guide` does not cover them and the aquatic outage
  article does not fit a frog in a dish-and-mister setup.
- Chytrid for keepers, cross-species: signs, the PCR swab, what treatment involves,
  quarantine and disinfection. Every frog, toad and salamander on the site needs it.
- Amphibian heat stress.
- An amphibian health-signs reference: dehydration, toxic exposure, rostral abrasion,
  short tongue syndrome, gastric overload, ranavirus.
- Escaped-frog recovery, which every tree frog owner meets once.

## Cut list for v2, in priority order

If v2 has to lose pages:

1. **Page 19, shedding, color, calling and normal behavior.** Its normal-or-worth-a-look
   table is the part to keep; fold it into page 20.
2. **Page 26, impaction, parasites and shedding problems.** Could fold into page 25 if both
   lose a little.
3. **Page 18, common mistakes and enrichment.** The mistakes table duplicates fixes found
   elsewhere; the research paragraph and priority order are the unique part.

**Do not cut, in any version:**

- **Page 8, the water that is safe to mist with.** The commonest serious error with this
  species is the wrong water, and the hub once printed it wrong.
- **Page 7, the humidity cycle.** The detail that separates this package from a generic
  care sheet.
- **Page 14, body condition, and page 21, obesity.** The signature risk.
- **Page 22, chytrid, and page 17, quarantine.** The disease that kills, and the habit that
  prevents it.
- **Pages 28, 34, 35.** The emergency card, sitter sheet and owner log are what people print.

## Site may be wrong, found during the build

Listed in the build report too. None of these were edited on the site.

- **Setup cost.** `whites-tree-frog-cost-guide.mdx` headlines $200 to $400 and its own seo
  title says so, while its priced lines already sum to $200 to $380 without the frog, and it
  says a heat source, substrate and branches go on top. Priced from `affiliateProducts.js`,
  those lines take equipment to $289 to $528. Page 29 prints the itemized figure and a note
  explaining the gap.
- **Glove material.** `whites-tree-frog-handling-guide.mdx` and the hub specify powder-free
  nitrile. Merck's clinical techniques page names moistened powder-free vinyl, and
  LafeberVet (McDermott and Pollock) reports mortalities in tadpoles exposed to latex and
  nitrile, and to a lesser extent vinyl. Not a clear error for an adult frog, but the
  articles could say "powder-free nitrile or vinyl" and note the froglet caution. The
  package prints that.
- **Where to wash equipment.** `whites-tree-frog-tank-setup-guide.mdx` says to wash in "a
  laundry sink or bathtub rather than the kitchen". `reptile-salmonella-hygiene-guide.mdx`,
  on CDC guidance, says never a bathtub people use, and to clean it thoroughly if one is
  used. The package follows the hygiene guide.
- **The fat ridges.** `guides/amphibians.js` `funFact` says the frog's "fat rolls (parotoid
  glands and lipid ridges)" are "a sign of a well-fed, healthy frog, not obesity", while
  `whites-tree-frog-feeding-guide.mdx` and its source (Rich) read sagging or folding ridges
  above the eardrum as obesity. The two need to agree: a defined ridge is healthy, a folding
  one is not.
