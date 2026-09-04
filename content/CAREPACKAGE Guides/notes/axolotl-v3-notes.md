# Axolotl v3 notes

Written during the 2.0 rebuild (September 2026), the first axolotl edition on the t3
template. Read this before starting v3, per build workflow step 0 in `TEMPLATE_GUIDE.md`.

Source lives in `source/axolotl-src/` as fragments plus `build.py`, the same pattern as
`goldfish-src/`. Page numbers, the contents page and every in-text cross-reference are
generated, so splitting or merging a page costs one edit and one line in `SECTIONS`.

## Page count: 41, mostly a floor

The build landed at 41 pages and the number came from the measurement script, not from
judgment. The first assembly was 40 pages with 13 pages tight or overflowing, the worst
at -256px. Everything except one page was resolved by layout tightening (heading margins
from 14pt to 9pt, `dense` tables, `compact` lists) plus sentence-level trims.

The one genuine split was the temperature page, which overflowed by 182px and became two:

- **Temperature: the numbers that matter** (targets table, why warm water is dangerous,
  which cooling method your climate needs, measuring where the animal is)
- **Cooling methods & the summer plan** (the six methods, frozen bottles, buying and
  running a chiller)

That split is worth keeping. Cooling is the single subject this species lives or dies on
and one page could not hold both the physiology and the equipment.

Free space per page at the final measurement, for anyone deciding where a new block fits:

```
p1=1048 p2=363 p3=59  p4=194 p5=109 p6=35  p7=157 p8=154 p9=39  p10=29
p11=48  p12=62 p13=18 p14=68 p15=15 p16=117 p17=21 p18=143 p19=61 p20=231
p21=40  p22=30 p23=132 p24=21 p25=34 p26=53 p27=78 p28=19 p29=115 p30=133
p31=20  p32=92 p33=109 p34=98 p35=52 p36=126 p37=66 p38=50 p39=84 p40=27 p41=32
```

The roomiest pages are 20 (common mistakes, 231px), 18 (staples and never-feed, 143px),
30 (budget, 133px) and 36 (pet-sitter sheet, 126px). The tightest are 15 (choosing),
13 (substrate), 28 (tubbing) and 10 (cycling).

## Parked blocks

Everything below was written, measured and cut for space. Reinstating one is a paste plus
a re-run of `_render.mjs axolotl "Axolotl" <v> --measure`, not a rewrite.

### 1. Blackout aeration without an air pump (~25 words)

Cut from the "Do" column of the power outage page (p35), which finished at 52px free and
went 35px over with this and the block below both in. It is the only fallback the page
offers for a keeper with no battery pump, so it is the first thing to restore if that page
ever gains a neighbor with headroom.

```html
        <li>With no air pump, scoop a cup of water and pour it back from a height every hour or two. Crude, and it works.</li>
```

### 2. Frozen bottle placement during transport (~18 words)

Cut from the transport list on the same page. Matters more for this species than for a
fish, because a cold-water animal in a warm car is the failure mode.

```html
    <li>Put a sealed frozen bottle in the cooler, not in the container, so the cold arrives gradually.</li>
```

### 3. Cloudy water row, early warnings table (~25 words)

Cut from the water changes page (p13, finished at 18px free). The same symptom survives
on the symptom quick reference, page 33, so nothing was lost outright.

```html
    <tr><td>Cloudy water or a sour smell</td><td>Uneaten food breaking down, or a filter that has stopped. Both need attention today.</td></tr>
```

### 4. Hatchling row, growth reference (~20 words)

Cut from the growth page (p22). The package deliberately does not cover rearing hatchlings
in depth, so this row pointed at content that is not there. If v3 adds a juvenile rearing
page, this row goes back and the table starts at hatchling again.

```html
    <tr><td>Hatchling</td><td>Under 1 in (2.5 cm)</td><td>Live food only, kept individually, bare bottom.</td></tr>
```

### 5. Regurgitation row, reading waste (~30 words)

Cut from the same page. Real content with no other home in the package, and the highest
priority restore of this group.

```html
    <tr><td>A regurgitated meal</td><td>Often oversized food, a warm tank, or handling too soon after feeding. Once is a note, twice is a pattern to act on.</td></tr>
```

### 6. Soft water skin fragility row (~30 words)

Cut from the other conditions page (p27). The underlying fact survives as the hardness row
on the water targets page (p12) and in the glossary, so this was a duplicate rather than a
loss, but the condition framing was useful.

```html
    <tr><td>Skin fragility from very soft water</td><td>Dull, poor-condition skin over weeks</td><td>Axolotls need mineral content. Do not keep them in distilled, RO or very soft water without remineralizing it.</td></tr>
```

### 7. Two log rows

Cut from the equipment and maintenance log (p38) purely for height.

```html
    <tr><td>Thermometer, battery or replacement</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
```

```html
    <tr><td style="text-align:left;">Check decor for sharp edges</td><td>&#9633;</td><td></td><td></td><td>&#9633;</td><td></td><td></td><td>&#9633;</td><td></td><td></td><td>&#9633;</td><td></td><td></td></tr>
```

## Ideas raised and never drafted

These are the pages that were wanted and not built. Each needs sourcing before it goes in,
per the rule that the topic is yours and the numbers are the source's.

- **Juvenile rearing, 0 to 6 months.** The package covers juveniles in passing: bare
  bottom, daily food, raised separately. A buyer who ends up with a 3 inch animal, or who
  hatches an accidental clutch, has no page. Wants live food culture, the cannibalism
  problem, individual housing, and the size at which sand becomes an option. Two thirds of
  a page of it already exists scattered across the feeding, substrate and tankmates pages.
- **What a vet visit actually involves.** Exam, fecal test, imaging for a suspected
  impaction, and the fact that anesthesia and analgesia in amphibians are their own field.
  Would reduce the number of owners who never call because they do not know what they are
  buying. Needs a veterinary source for anything procedural.
- **Breeding, deliberately excluded.** The package tells a buyer how to avoid breeding
  (page 15) and does not explain how to do it. That was the right call for a first t3
  edition, and a future edition could add a single honest page: what a clutch actually
  commits you to, rather than a how-to.
- **Water hardness and remineralizing, properly.** The package says moderately hard, never
  distilled or RO, and stops there because the GH and KH figures that circulate are not
  well sourced for this species. Holtfreter's solution is a laboratory practice, not home
  husbandry, and translating it into a home aquarium number needs work. This is the
  biggest genuine gap in the water chemistry coverage.
- **Xochimilco and the ethics of the trade.** Critically Endangered in the wild, millions
  in tanks, and effectively zero genetic connection between the two populations. It is the
  most interesting thing about this animal after regeneration, and it is currently three
  lines on the profile page.
- **Morph genetics.** The choosing page gives morphs as a plain list. What leucistic
  actually is, why albino and leucistic get confused, and what GFP means would fill a page
  and needs a real genetics source rather than breeder copy.
- **A DIY cooling build.** Fan-over-surface rigs and insulated cabinets are what most
  keepers actually build. Cannot be written from memory, and product-specific advice ages
  badly, so it needs care.

## Proposed gaps, for the site rather than the PDF

Logged under **Site content gaps by package** in `TEMPLATE_GUIDE.md` as well. These rest
on knowledge of the species rather than on a grep result, and each still needs sourcing
before any figure goes into an article.

- Tubbing, cooling as treatment, and salt baths. The site has none of it and it is the
  most-searched axolotl intervention after "why is my axolotl floating."
- Cooling a tank without a chiller, as a real method comparison rather than a sentence.
- Choosing and sexing, including the tiger salamander larva mix-up at point of sale.
- Cohabitation, including the cannibalism window in juveniles.
- Reading the gills as a daily health check.

## Cut list for v3, in priority order

If a future edition has to come down in length, cut in this order. Everything below the
line is the product and should not be cut.

1. **Equipment and maintenance log (p38).** Useful, and the least missed. The twelve-month
   planner could fold into the owner log page.
2. **Enrichment checklist and log (p39).** The enrichment page itself carries the content;
   this is the worksheet version.
3. **First 30 days (p32).** Genuinely helpful, and every item on it appears elsewhere in
   the package.
4. **Choosing, morphs and sexing (p15).** The morph half is cosmetic. The pre-purchase
   checks half should survive into another page if this one goes.
5. **Cost, commitment and fun facts (p5).** The numbers duplicate the budget page. Only the
   commitment table is unique.

---

Do not cut, in any edition:

- **Temperature (p8) and cooling methods (p9).** This is the animal's whole survival story.
- **Substrate (p14).** The other thing that kills them, and the one page with a body count.
- **Cycling (p11), water targets (p12) and water changes (p13).** Take one away and the
  other two stop making sense.
- **The health section (p23 to p28)**, particularly gills (p24) and tubbing (p28). Gill
  reading is the earliest warning a keeper gets, and tubbing is the intervention nobody
  explains anywhere on the site.
- **Emergency card (p30) and pet-sitter sheet (p36).** Both are printed and posted, which
  is the format doing something a website cannot.

## Sep 4 2026: cross-check against the new aquatic and amphibian articles (v2.0 to v2.1)

Cross-checked against `amphibian-tubbing-and-salt-baths-guide`,
`amphibian-quarantine-and-water-guide`, `cooling-an-aquarium-without-a-chiller-guide`,
`aquarium-cycling-guide`, and `aquarium-power-outage-and-transport-guide`. All edits went
into `source/axolotl-src/` and were rebuilt with `build.py`. Page count unchanged at 41.
Version bumped 2.0 to 2.1, template stays t3.

This package had almost no headroom to spend. The per-page free space recorded earlier in
this file was the real constraint: five pages needed existing prose tightened to make room
for a sourced addition. Those tightenings are listed under each page and none of them
dropped a fact.

### Page 4, Quick profile

- Was, water chemistry row: "...pH 7.4 to 7.6, moderately hard water"
- Now: "...pH 7.4 to 7.6, dechlorinated tap water"

### Page 8, Temperature: the numbers that matter

- Was: "Above 75&deg;F (24&deg;C) | High probability of illness. Expect appetite loss, uncontrolled floating, and bacterial or fungal infection."
- Now: "Above 75&deg;F (24&deg;C) | High probability of illness. Expect appetite loss, ascites (fluid swelling in the abdomen), uncontrolled floating, and bacterial or fungal infection."

### Page 9, Cooling methods & the summer plan

The per-method degree figures were withdrawn. The article that now covers this ground ranks
the methods but prints no degree figures, and nothing was found to attribute them to, so
they became qualitative rather than staying as unsourced numbers.

- Was: "Cut heat sources | 1 to 2&deg;F | Dimmer light, shorter photoperiod, and check whether the filter or pump motor itself is warming the water."
- Now: "Cut heat sources | Small | Lights off, lid cracked open, shorter photoperiod, and turn a canister down: its motor makes heat that flow pushes into the tank."
- Was: "Fan across the surface | 2 to 5&deg;F | ..."
- Now: "Fan across the surface | Best cheap fix | ..."
- Was: "Insulate the tank sides | A few &deg;F | ..."
- Now: "Insulate the tank sides | Prevention | ..."
- Added: "More aeration | Margin | Does not cool. Warm water holds less oxygen while the animal needs more, so run an air stone alongside."

Reduced canister flow was folded into the cut-heat-sources row rather than given its own,
for space. Chiller price left at $150 to $400 as instructed. To fit, the chiller row note
was tightened: "The only method that holds a number regardless of the weather. $150 to $400,
plus running cost. In a warm climate it is core equipment, not an upgrade." became "The only
method that holds a number whatever the weather. $150 to $400 plus running cost, and core
equipment in a warm climate."

Rate of change, one of four identical instances:

- Was: "Aim for a change of no more than 1 to 2&deg;F (about 1&deg;C) an hour in either direction."
- Now: "Aim for 1&deg;F per hour, and never more than 1&deg;C even for a tolerant species, in either direction."

### Page 11, Cycling

Cold-water slowdown figure added to the stall callout:

- Was: "Nitrite that will not clear is the usual sticking point. Check that the temperature has not dropped so low that bacterial growth crawls,"
- Now: "Nitrite that will not clear is the usual sticking point. Cold is usually why: a drop of just 1&deg;C (about 2&deg;F) cuts ammonia oxidation by around 30 percent, so a tank at axolotl temperatures cycles at the slow end by design. Check the temperature has not fallen further,"

Fish-in action line, now identical across all three aquatic packages:

- Was: "Change 25 to 50 percent of the water with dechlorinated, temperature-matched water whenever either reads above 0.25 ppm."
- Now: "Watch from 0.1 ppm and change water at 0.25 ppm. Scale the change to the reading: 25 to 30 percent just over the line, 50 percent or more once either number is clearly climbing."

### Page 12, Water targets & testing

The hardness target came out. The article established that the GH and KH figures circulating
for this species do not trace to a primary source, so the package now prints none, which is
what the gap log had already suspected.

- Was: "Hardness | Moderately hard | Very soft or distilled | Axolotls need mineral content to maintain skin integrity. Soft water also lets pH swing."
- Now: "Hardness | No sourced target | Distilled or RO water | The circulating GH and KH figures trace to no primary source, so none is printed. Distilled and RO water are not electrolyte balanced and can be fatal unless remineralized."
- Was, tap water callout: "If your supply is very soft or you use RO water, it needs remineralizing before it goes near an axolotl."
- Now: "Distilled and RO water are not electrolyte balanced and can be fatal, so either needs remineralizing first. Dechlorinated tap water is the practical default."

To fit, the liquid test kit callout was tightened by one line. No fact dropped.

### Page 17, Bringing one home, quarantine & handling

- Was: "Set it up in its own small tank or tub, cycled or with daily water changes, for a few weeks while you watch it eat, move, breathe and pass waste normally. This is also the window for a first veterinary check, including a fecal test for parasites."
- Now: "Give it its own tank or tub, cycled or with daily water changes, for six to eight weeks, the period veterinary guidance calls adequate for a new amphibian. Zoos run a 30 day minimum and prefer 60. Watch it eat, move, breathe and pass waste normally, and use the window for a first vet check including a fecal test."

Bsal rationale added as a new paragraph:

- Added: "Why stricter than for a fish: *Batrachochytrium salamandrivorans*, Bsal, kills salamanders specifically and reached Europe through the pet trade. So a new arrival is quarantined even if it never leaves the house, and a captive amphibian is never released outdoors."

This page had 21px of headroom, so four existing passages were tightened to fund the above:
two acclimation steps, the handling paragraph, the vet-visit table row, and the closing
callout. All copy edits, no facts dropped.

### Page 24, Heat stress & reading the gills

- Was, signs: "...restlessness or the opposite, uncontrolled floating, pale patches, and a general fragility..."
- Now: "...restlessness or the opposite, uncontrolled floating, ascites (fluid swelling in the abdomen), pale patches, and a general fragility..."
- Was, response: "bring the temperature down, steadily rather than instantly, and test the water while you do it."
- Now: "bring the temperature down steadily, and test the water while you do it. For an animal already in crisis, the veterinary literature names a dish in the refrigerator as a stopgap while the tank is cooled."

Funded by tightening the cold-is-not-the-mirror-image callout, two gill table cells, and the
gills early-warning callout.

### Page 25, Fungal & bacterial infection

- Was: "Salt baths at the dose on page 28 are the standard next step."
- Now: "A salt bath is what most keepers reach for next, but the figures on page 28 are a published ceiling, not a prescription, so get the dose from a vet."

### Page 28, Tubbing, cooling & salt baths

The figures were right and the framing was wrong. The source gives 10 to 15 g/L for 10
minutes once or twice daily in a section on toxicosis, as the point at which salt starts
damaging skin and gills. It names no condition the bath treats and no salt type, both of
which the package had been printing as though they came from the source. Figures unchanged.

- Removed: "Salt type | Non-iodized aquarium or sea salt, with no anti-caking additives"
- Removed: "Used for | Fungal infection, alongside correcting the water. Not a general tonic"
- Added: "What these are | The published ceiling before salt damages skin and gills, not a prescription"
- Added: "Who sets the dose | A vet who has examined the animal"
- Was: "Dissolve the salt fully before the animal goes in, never over it. Stay for the full ten minutes, end early if it shows real distress, then return it to clean, cool tubbed water. Excessive salt treatment does harm, so more and longer is not better, and salt does not belong in the display tank as a preventive."
- Now: "The paper gives these as the point where salt starts doing damage, not a dose to run, and never says which condition a bath treats or which salt. If a vet directs one: dissolve it fully first, never over the animal, end early on real distress, then return the animal to clean, cool tubbed water."

### Page 29, Setup checklist & targets

- Was: "Hardness | Moderately hard. Never distilled, RO or very soft water without remineralizing"
- Now: "Hardness | No well-sourced target exists. Never distilled or RO water without remineralizing it first"

### Page 30, Emergency & quick targets card

- Was: "Salt bath, if directed | 10 to 15 g per liter, 10 minutes, once or twice daily"
- Now: "Salt bath, only if a vet directs | 10 to 15 g per liter, 10 minutes, once or twice daily. A published ceiling, not a prescription"
- Was: "Aim for no more than 1 to 2&deg;F (about 1&deg;C) an hour of change."
- Now: "Aim for no more than 1&deg;F per hour, and never more than 1&deg;C even for a tolerant species."

### Page 33, Symptom quick reference

- Was: "White or grey cottony growth | Fungal infection on stressed tissue | Correct water, cool, salt bath, vet at 48 hours."
- Now: "...| Correct water and cool. Vet at 48 hours, and for any salt bath dose."

### Page 35, Power outages, heat waves & transport

- Was: "Don't tip loose ice into the tank, and don't chase a fast temperature drop. Aim for no more than 1 to 2&deg;F (about 1&deg;C) an hour."
- Now: "...Aim for no more than 1&deg;F per hour, and never more than 1&deg;C even for a tolerant species."

### Page 40, Glossary

- Was, Salt bath: "A short therapeutic bath, 10 to 15 g of non-iodized salt per liter for 10 minutes, used against fungal infection alongside correcting the water."
- Now: "A short therapeutic bath. The published figures, 10 to 15 g per liter for 10 minutes, are the ceiling before salt does harm, so a vet sets the actual dose."

### Page 41, Sources, version history & about

Loh's entry rewritten to say the salt figures are a ceiling. Added AZA's Amphibian Husbandry
Resource Guide, Merck's amphibian husbandry and aquatic environmental disease pages, USGS on
Bsal, NC State on power outages, and Texas A&M AgriLife on temperature swings and aeration.
The "Where sources disagree" section gained a third entry, on hardness being missing rather
than disputed. Cover badge and colophon moved to Version 2.1 and a 2.1 row was added.

This page did not fit as one page, running 363px over against a 32px baseline, the worst of
the three because it also carries the source-drift section.

### Page 42, new: Where sources disagree, version history & about

**The package is now 42 pages.** Page 41 keeps the two source lists; "Where sources
disagree", the version history, the disclaimer and the colophon moved to a new page 42,
which is the right grouping anyway since the drift section is commentary on the sources
rather than a source. One `<!--PAGE versions-->` and `<!--FOOT versions-->` pair plus one
line in `SECTIONS`, and `build.py` did the rest. The 2.0 history row already had its page
count hardcoded, so the `{{PAGE_COUNT}}` trap that bit the goldfish build did not apply.

Page 41 finished at 206px free and page 42 at 318px. Worth knowing for v3: the per-page
free space list near the top of this file is now out of date for pages 41 onward, and
several other pages moved by a line or two in this pass. Re-measure before planning a
restore rather than trusting those numbers.
