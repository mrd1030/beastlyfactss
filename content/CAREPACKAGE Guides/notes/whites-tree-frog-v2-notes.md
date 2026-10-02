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
  may be over 90&deg;F (32&deg;C)". Those particular signs had no source. Replaced by a row that
  reads the thermometer instead. Correction from the review: Mader (Reptiles Magazine,
  already a source) does describe overheating in amphibians generally, "hyperactivity,
  incoordination, lethargy and, ultimately, death", and page 6 now carries those signs.
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
   care sheet and a heat-wave method adapted from logic rather than a source. The signs are
   now sourced: Mader's amphibian hypo/hyperthermia section gives "hyperactivity,
   incoordination, lethargy and, ultimately, death", and first aid of fresh, chlorine-free
   water at the proper temperature, with fluids from a vet for severe cases. That is
   amphibians in general, not this species, and a species-specific first ten minutes is
   still unsourced. The crested gecko block logs the reptile version of the same gap.
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

## Review fixes, 1.0

An editor's review, applied in place on 1.0 (October 2026). Still 39 pages; minimum free
space after the fixes is 23 px, on the glossary (page 37). Page numbers below are the 39-page
PDF. Replaced wording, old then new:

- **Page 15, gloves.** "Powder-free disposable gloves, wetted with dechlorinated water" became
  "Powder-free vinyl gloves (nitrile is a second choice), never latex, wetted with dechlorinated
  water", per Merck (moistened powder-free vinyl, not latex). The froglet caution moved here
  from the page 39 table: tadpole deaths reported from latex, nitrile and, to a lesser extent,
  vinyl (LafeberVet). Page 39 row "Powder-free disposable gloves, wetted. Vinyl is the cautious
  choice for a froglet" became "Powder-free vinyl, nitrile second, never latex, wetted. The
  froglet caution is on page 15". Page 27 checklist lists no handling supplies, so no glove
  line was added.
- **Page 11, bleach.** "household bleach at 30 mL per liter" became "plain, unscented
  household bleach (not splashless or scented) at 30 mL per liter".
- **Page 5, enclosure.** "A 20-gallon-equivalent enclosure is comfortable for a single frog"
  contradicted the 18x18x24 in minimum (about 34 gallons). Now "A 20-gallon tall tank is the
  smallest figure any veterinary source gives; this package uses 18x18x24 in."
- **Page 33, trip table.** Adult, 1 to 2 nights: "A sitter every 1 to 2 days" became "A sitter
  daily", matching daily misting and dish changes and the note under the table.
- **Jargon.** Page 6 "the hygrometer" became "the hygrometer (humidity meter)", plus a glossary
  entry. Page 24 "a cloacal prolapse" became "a cloacal prolapse (tissue pushed out of the
  vent, the frog's single rear opening)", plus a glossary entry that also defines the vent.
  "Cloaca" is never used bare. Page 22 "the fungus's DNA" became "the fungus's DNA
  (deoxyribonucleic acid, the genetic code)".
- **Page 26, health entries.** Impaction gained a Recovery row: "Depends on what was blocking
  and how it was removed. Afterward, smaller prey and a coarse or bare floor". Swelling gained
  Signs ("A body or limbs puffed up with fluid. With ranavirus, reddened skin and bleeding
  under the belly; with chytrid, the skin signs on page 22") and Recovery ("Follows the cause.
  Ranavirus is frequently fatal; chytrid caught early can respond to treatment. The frog stays
  apart from any others until the vet clears it"). Its "Causes" row is now "Cause", and the
  ranavirus skin signs moved from Cause to Signs.
- **UVB tube, one phrasing.** Page 4 "a low-output 5 to 7% T5 tube, the slim fluorescent kind
  (T5 means 5/8 inch across)" became "a 5 to 7% UVB T5 HO tube ... T5 is the slim fluorescent
  kind, 5/8 inch across; HO, high output, is the tube format; the 5 to 7% rating is what keeps
  it gentle". Page 9 "Low-output T5, 5 to 7%" became "5 to 7% UVB T5 HO tube", and "A low-output
  tube is cheap insurance" became "A gentle 5 to 7% tube is cheap insurance". Page 27
  "Low-output UVB, T5 HO (high output) 5 to 7%" became "5 to 7% UVB T5 HO (high output) tube".
  Page 29 "Low-output UVB, T5 HO 5%, fixture and tube" became "UVB fixture and 5 to 7% UVB T5
  HO tube" (price unchanged). Glossary T5 HO entry adds "5 to 7% keeps it gentle".
- **Page 22, chytrid treatment.** "Raising the enclosure temperature above about 73&deg;F
  (23&deg;C) may help halt the infection, which a vet will fold into the plan rather than leave
  to guesswork" became "Keeping the frog at the warm end of its range, as the vet directs, may
  help halt the infection". The whole gradient already sits above 73&deg;F. Sources page Merck
  line "the 23&deg;C (73&deg;F) point" became "warmth as part of treatment".
- **Page 22, Bd range.** "more than 200 amphibian species" became "hundreds of amphibian
  species".
- **Page 12, smaller adult.** "3 to 4 insects, about three-week-old crickets" became "2 to 4
  insects, crickets about three to four weeks old", covering Chicago Exotics' sub-adult "one
  to two, three to four week old crickets".
- **Heat stress.** Verified against the live Mader article (Amphibian Hypo/Hyperthermia):
  "Signs include hyperactivity, incoordination, lethargy and, ultimately, death." Page 6 gained
  a signs row: "Hyperactive or uncoordinated, then lethargic | Signs of overheating. Read the
  warm end now; past 90&deg;F (32&deg;C), turn the heat off, give fresh treated water at room
  temperature, and call the vet". Page 33 "a frog that is limp, flat or will not move: cool
  the room and call the vet" became "a frog that is hyperactive, uncoordinated or lethargic,
  the signs of overheating: cool the room, give it fresh treated water at room temperature,
  and call the vet". Sources page Mader line adds "overheating".
- **Page 3, repeated phrase.** "because two frogs of different sizes is a feeding accident
  waiting to happen" became "because when two frogs differ in size, the bigger one may try to
  swallow the smaller". Page 16 keeps the original wording.
- **Page 36, vet visit log.** Header "Treatment and follow-up" became "Treatment, follow-up",
  which now sits on one line.

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
