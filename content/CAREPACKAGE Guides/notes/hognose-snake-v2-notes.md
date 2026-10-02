# Hognose Snake v2 notes

Written during the 1.0 build (October 2026), the first hognose package. Read this before
starting v2, along with the **Hognose Snake 1.0** gap block below, which is waiting to be
merged into `../TEMPLATE_GUIDE.md` under **Site content gaps by package**.

## What 1.0 is

44 pages, guide version 1.0, template t3, built from fragments plus a build script in
`../source/hognose-snake-src/` (seven `pages_*.html` files, read in name order). The species
is the western hognose, *Heterodon nasicus*, only: it is what the site's hognose guides
describe and what the pet trade sells. The eastern and southern hognoses appear only on the
species page and in the law section. Cover photo is the owner's
`images/hognose-snake-cover-1.jpg` (1696x2528), embedded as is at `object-position:18% 50%`.

## Which skeleton, and why

The reptile skeleton, with Ball Python 2.1 as the content-shape reference, and five changes:

- **A species page (5).** "Hognose" covers three US species, and the law turns on which one
  a keeper has. The size table by sex lives here too, because the enclosure minimum depends
  on it.
- **Behavior and handling became four pages (14 to 17):** the defensive display, the venom
  and bite research, handling and hygiene, and enrichment. The display and the venom are the
  two things this species is bought and feared for, and each needed a full page.
- **A three-page law section (21 to 23)** built from `legalStatus.json` and `stateNotes.js`,
  all 52 jurisdictions, statuses matched to the data file by script at build time of these
  notes (27 legal, 15 conditional, 4 permit, 6 banned).
- **The feeding section is prey size, frozen prey and refusals**, the ball python shape, but
  the refusal page is built around this species' scenting step.
- **Seasonal slowdown got its own health page (29)** in place of the ball python's combined
  shed and behavior page, because a buried, fasting hognose in winter is the commonest false
  alarm and the site's snake brumation guide carries the illness table.

## Page count: 44, a choice, not a floor

Every page cleared on the first measure except two (legal at -16, glossary page 2 at -72);
both were fixed by moving blocks and tightening one callout, nothing cut. Final measured free
space:

```
p2=336  p3=145  p4=155  p5=111  p6=146  p7=150  p8=176  p9=122  p10=177  p11=215
p12=211  p13=124  p14=238  p15=244  p16=273  p17=260  p18=75  p19=165  p20=206  p21=28
p22=207  p23=137  p24=184  p25=314  p26=229  p27=236  p28=222  p29=230  p30=247  p31=292
p32=170  p33=73  p34=301  p35=325  p36=390  p37=158  p38=231  p39=206  p40=123  p41=54
p42=55  p43=167  p44=187
```

Tightest: 21 (law, 28), 41 and 42 (glossary, 54 and 55), 33 (budget, 73), 18 (arrival, 75).
Roomiest: 36 (routine), 35 (symptoms), 25 (respiratory), 34 (first 30 days). A v2 has real
room on the health pages without a split. Page 21 has the venom callout at 9.1pt with a 4pt
margin to fit; anything added there needs a split, not a squeeze.

## Claims removed in the source-check pass

Nothing was cut for space. These were drafted and removed because no source loaded during the
build carried them. Kept here so nobody re-adds them unsourced.

- Page 12, feeding tub row: "close the lid and leave the room. A snake that is watched may not
  eat". Plausible, unsourced.
- Page 13, scenting: "the liquid from the can or a rub of the flesh", and "many keepers scent
  less and less until it takes plain mice". Both unsourced method detail.
- Page 14, a normal-or-worth-a-look row: "Musk with no handling or disturbance at all" as a
  warning sign. Unsourced.
- Page 15, bite first aid: "Then wash the bite". Ordinary first aid, but no source in hand.
- Page 18: quarantine "matters even if this is your only reptile, because the same weeks are
  when mites and parasites declare themselves". Replaced by the narrower sourced point.
- Page 20, laying box "slightly damp" soil, and "Never try to massage eggs out at home".
- Page 27, mites: "ears" in ReptiFiles' list of where mites cluster (snakes have no external
  ears); the *Cryptosporidium* swelling "about a third of the way down the body" (Merck says
  the gastric region only).
- Page 28, mouth rot "usually riding on stress or another problem". Merck's owner page does
  not say so.
- Page 30, "a check that the warm end is not running too hot" for a soaking snake. Unsourced.
- Page 9, "the strength sold for partial-sun species" on the 5.0 and 6% tubes.
- Page 33, "Many care sheets put a hognose setup at $200 to $500". Now attributed as a common
  headline figure, which is the site's own.

Package-only wording that survived because it is description rather than a figure: page 28's
burn signs, "damaged or discolored skin where the snake lay against the heat". VCA's snake page
gives the cause of burns but no signs. Source it or soften it in v2.

## External sources used (all loaded and read during the build)

- Weinstein and Keyler (2009), Toxicon 54(3):354-360, abstract via Europe PMC (PMID 19393681,
  DOI 10.1016/j.toxicon.2009.04.015). The bite case and its conclusion.
- Damm, Vilcinskas, Kreuels and Lüddecke (2026), Frontiers in Amphibian and Reptile Science,
  10.3389/famrs.2026.1754226. The 63-report bite survey.
- Durso and Mullin, Ethology 120:140-148, abstract via Crossref (DOI 10.1111/eth.12188).
- Nagabaskaran, Skinner and Miller (2022), Animals 12(23):3347, abstract via Crossref.
- Kerns, Animal Diversity Web, Heterodon nasicus.
- Galewood, Reptiles Magazine, Western Hognose Snake Care and Breeding.
- ReptiFiles (Healey): hognose care guide; temperatures, humidity and lighting; handling and
  body language; brumation; mites.
- Merck Veterinary Manual: Disorders and Diseases of Reptiles (owner version); Parasitic
  Diseases of Reptiles (veterinary version).
- VCA Animal Hospitals: Common Snake Health Issues (snakes-problems).

Not usable: the ScienceDirect, Wiley, ResearchGate and OUCI pages all returned 403, so the two
journal abstracts came from Europe PMC and Crossref instead. The "Stinky fingers" 2022 bite
case report (Toxicon: X) could not be loaded and is not cited.

## Ideas raised and never drafted

In rough priority order. Each needs sourcing before it goes on a page.

1. **Wild amphibians as food.** Hognoses eat toads in the wild, and keepers of a stubborn
   refuser are tempted to offer one. The parasite and toxin risk of wild-caught amphibian prey
   needs a veterinary source; the search during this build found only hobby pages.
2. **Hognose morphs and their welfare.** The cost guide prices albino, anaconda and rare
   combinations. Whether any line carries a known health cost, as some ball python morphs do,
   is unanswered here.
3. **A burn signs and treatment reference** for snakes, sourced, so page 28 stops describing
   burns from logic.
4. **A weight reference that is not one breeder's.** Page 5's weights are Galewood's and ADW's.
   The site's snake body condition guide says no verified species weight ranges exist; a
   veterinary or study source would let the owner log use them.
5. **What happens to a lone adult female.** Page 20 says plainly that no source used covers
   whether a female hognose kept alone produces eggs.
6. **The feeding-tub move against the 48-hour rule.** Page 12 moves the snake back "gently and
   briefly" after eating. No source reconciles the two site rules.

## Proposed gaps

Also in the gap block below. They rest on knowledge of the species, not a grep.

- Wild amphibian prey (idea 1).
- Morph welfare (idea 2).
- The feeding container and the post-meal handling rule (idea 6).
- Mite treatment safety for hognoses (permethrin).
- Hognose bite first aid, with the 2026 survey.

## Cut list for v2, in priority order

If v2 has to lose pages:

1. **Page 23's legal-state list** could fold into page 22 as a short paragraph, since legal
   states need no note except the few with a catch. Keep the "Before you buy" list.
2. **Page 29, the winter slowdown**, could fold its check table into page 13 (refusals).
3. **Page 17, enrichment and mistakes**: the mistakes table repeats fixes found elsewhere; the
   study and the priority order are the unique part.

**Do not cut, in any version:**

- **Page 9, dry air.** The one number that prevents the two commonest illnesses.
- **Pages 14 and 15, the display and the venom.** What this species is bought and feared for.
- **Pages 21 and 22, the law.** High-traffic, and the only place the species split is laid out.
- **Page 13, refusals.** The commonest worry a new owner has.
- **Pages 32, 38, 39.** The emergency card, sitter sheet and owner log are what people print.

## Site may be wrong, found during the build

Listed in the build report too. None of these were edited on the site.

- **Legal guide, venomous exemptions by name.** `hognose-snake-legal-guide.mdx` says (FAQ and
  first table row) that Kentucky, Louisiana, Arkansas and Florida venomous-reptile bans carve
  out *Heterodon* by name. Per `legalStatus.json`, only Kentucky (and Alabama) name
  *Heterodon*; Arkansas clears it through an unrestricted list, Florida as a "nonvenomous,
  unprotected" reptile, and Louisiana's lists simply do not name it. Page 21 names only
  Kentucky and Alabama.
- **Legal guide and hub, California.** The legal guide calls California "the open question" and
  the hub's Legal check row repeats it, while `legalStatus.json` records California as legal
  under § 671(c)(7), verified 1 October 2026. The hub row also lists only Georgia and West
  Virginia as ruling it out; the data file has six bans (Georgia, Hawaii, Kansas, New York
  State, New York City, West Virginia). Page 23 follows the data file.
- **Legal guide, heading order.** "## The Takeaway" is followed directly by "### West Virginia
  Is the Second Ownership Ban", so the West Virginia section sits under the takeaway heading.
- **"The one documented bite case."** `hognose-snake-handling-guide.mdx` (body and FAQ), the hub
  FAQ and `corn-snake-vs-hognose-snake-guide.mdx` call Weinstein and Keyler the one documented
  bite case in the literature. The 2009 paper itself reviews several documented *Heterodon*
  bites, and Damm and colleagues (2026) collected 63 bite reports. Page 15 prints both.
- **Night temperature.** `hognose-snake-tank-setup-guide.mdx`, the hub and
  `reptile-emergency-plan-guide.mdx` give nights of 75 to 78°F and act below 75°F. The setup
  guide's own cited source, ReptiFiles, says "no colder than 60°F (16°C)" and that hognoses
  need no night bulb, and `reptile-heating-thermostats-guide.mdx` says a snake needs no night
  heat if the room holds 65 to 70°F. The site figure is not unsafe, but it sends owners to buy
  night heat they may not need. The package prints the site figure and the 60°F floor beside
  it (pages 7 and 44).
- **Cost guide arithmetic.** `hognose-snake-cost-guide.mdx` headlines $200 to $500 setup and
  $10 to $25 a month. Its own annual lines sum to $180 to $330, which is $15 to $28 a month,
  and its setup table prices an under-tank mat although the setup guide recommends a halogen
  on a dimming thermostat, and omits the infrared thermometer, sand, scale and feeding tub.
  Page 33 itemizes to $273 to $471 of equipment.
- **Adult length.** `corn-snake-vs-hognose-snake-guide.mdx` gives 2 to 3.5 ft for adult
  hognoses. Western males typically run 16 to 24 in (Galewood) and the species 14 to 37 in
  (ADW), so the comparison overstates the male. Page 5 prints the split by sex.
- **Weighing interval.** `hognose-snake-health-issues-guide.mdx` says weigh weekly; the hub's
  Weight checks row says monthly while growing (from the shared snake body condition guide).
  The package uses weekly.
- **Encyclopedia wild lifespan field.** `encyclopedia/snakes.js` hognose `bio.wildLifespan` is
  "9-19 years in the wild, averaging 14; 15-20 years in human care": a captive figure inside
  the wild field, the same class of bug logged for the crested gecko.

## Site content gaps (to merge into TEMPLATE_GUIDE.md)

### Hognose Snake 1.0, t3 (Oct 2026)

A new build, the first hognose and the second snake, 44 pages. Source is fragments plus a
build script in `source/hognose-snake-src/`, and `notes/hognose-snake-v2-notes.md` carries the
per-page free space, the claims removed in the source-check pass, six undrafted ideas and a
ranked cut list. It took the reptile skeleton with Ball Python 2.1 as the shape, and grew to
44 through three additions any future snake with a reputation or a legal split will want: a
species page, a four-page behavior and handling section, and a three-page law section built
from `legalStatus.json` and `stateNotes.js` with every status matched to the data file.
**Take 40 to 45 for a snake with a legal split and a famous display; 34 still holds for a
plain one.**

Already covered, do not rewrite: `hognose-snake-tank-setup-guide.mdx` carries the enclosure
by sex and age, the gradient, 30 to 50% humidity, the 70/30 substrate and the three-month
change rule. `hognose-snake-feeding-guide.mdx` carries prey by gram weight, the schedule by
sex and maturity, scenting after three refusals, and frozen-thawed only.
`hognose-snake-health-issues-guide.mdx` carries respiratory infection, impaction, obesity,
scale rot, the regurgitation plan and the shed method. `hognose-snake-handling-guide.mdx`
carries the display, the session rules and the cool-water release.
`hognose-snake-enrichment-guide.mdx` carries the Nagabaskaran study and the priority order.
The legal pages are fully sourced from the data files. `reptile-emergency-plan-guide.mdx` has
a hognose row and carries page 37. `snake-brumation-guide.mdx` carries page 29's illness table.
`reptile-quarantine-guide.mdx` now carries choosing a healthy reptile and the vet workup, which
closes the "choosing and sourcing a reptile" proposal in the Leopard Gecko block for snakes.
Note `ball-python-feeding-guide.mdx` and `ball-python-health-issues-guide.mdx` supply the
thawing, storage and prolapse first aid, which are species-independent.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Mite treatment safety, and permethrin in hognoses | 27 | Hognose (check other colubrids) | **Derived and proposed.** `hognose-snake-health-issues-guide.mdx` says mites are "treatable" and stops. A western hognose breeder in Reptiles Magazine warns permethrin-based products, pest strips and some mite sprays are highly toxic to hognoses, while ReptiFiles' hognose mites page describes a home permethrin (Nix) protocol and Merck notes a permethrin licensed for reptiles. Expand the health guide: vet-only treatment, the enclosure clean, and why a hognose owner should not follow a generic snake-mite protocol |
| *Cryptosporidium* in a hognose | 27 | Cross-species (snakes) | **Derived.** Covered in the ball python, corn snake and milk snake health guides but not the hognose's. Merck's signs (regurgitation after meals, weight loss, mid-body gastric swelling), acid-fast stain diagnosis and the lack of effective treatment are PDF-only for this species. One paragraph in `hognose-snake-health-issues-guide.mdx` |
| Hognose bites: the 2026 survey and first aid | 15 | Hognose | **Derived.** The site cites only Weinstein and Keyler and calls it the one documented case (see the site list). Damm and colleagues (2026) give 63 reports, hold time against symptoms, recovery in days, and quick removal as the main mitigation. Expand `hognose-snake-handling-guide.mdx`'s venom section |
| Female snakes: follicles, eggs and egg binding | 20 | Cross-species (snakes) | **Extends the Ball Python block's row**, still open. The hognose half: the pre-lay shed with laying 7 to 11 days later, the laying box, clutch size and incubation (Galewood, ADW), and VCA's dystocia causes. Whether a lone female lays is unsourced |
| UVB specification for a hognose | 9 | Hognose | **Derived.** The setup guide says "a low-output linear T5" only. ReptiFiles' Zone 2, UVI up to 2.0 to 3.0, T5 HO 5.0 or 6%, half to two thirds of the length, 10 to 14 in through mesh, and yearly replacement are PDF-only. Small expansion of `hognose-snake-tank-setup-guide.mdx` |
| Hognose size and weight by sex | 5, 19 | Hognose | **Derived.** The site gives 1.5 to 3.5 ft for the genus and 2 to 3.5 ft in the comparison guide. Male 16 to 24 in, female 21 to 30 in, hatchling 4 to 7 g, and adult weights (Galewood; ADW 80 to 350 g) are PDF-only. Relevant because the enclosure minimum depends on sex |
| Wild amphibians as prey | 13 | Cross-species (hognose, garter) | **Proposed.** A refusing hognose tempts owners to offer a wild toad. Needs a veterinary source on parasites and toxins in wild-caught amphibian prey; this build found none worth citing |
| The feeding container and the 48-hour rule | 12 | Cross-species (snakes fed off-substrate) | **Proposed.** The site recommends both a separate feeding container and no handling for 48 hours after a meal, without saying how to move the snake back. Page 12 prints a brief return move with no handling session; no source reconciles them |
| Morph welfare in hognoses | none | Hognose | **Proposed.** The cost guide prices albino, anaconda and rare combinations. Whether any line carries a health cost is unanswered anywhere on the site |
| Overheating in a hot room | 36 | Cross-species (reptiles) | **Extends the Crested Gecko block's overheating row.** Page 36's summer line, that a hot room pushes the basking surface past 95°F (35°C), is logic, not a source |
| Cohabitation | 6 | Cross-species (reptiles) | **Extends the Leopard Gecko block's cohabitation row.** For a hognose the only sourced reason is that sharing an enclosure is a listed cause of regurgitation |

**Numbers with no site source at all:** the 75 to 85°F middle band and the 60°F night floor
(page 7, ReptiFiles); the UVB specification (page 9); lengths and weights by sex and the
hatchling weights (page 5, Galewood and ADW); every figure on page 20 (mating months, pre-lay
shed timing, clutch size, incubation); the *Cryptosporidium* and mite-treatment material on
page 27 (Merck, Galewood); the 2026 bite survey figures on page 15 and the Durso and Mullin
findings on page 14; and the budget lines that come from `affiliateProducts.js` prices rather
than an article (halogen bulb, dome, dimming thermostat, infrared thermometer, reptile sand,
large water dish) plus two package estimates with no source at all (feeding tub $5 to $10,
kitchen scale $10 to $20), and with them the $273 to $471 equipment and $398 to $721 all-in
totals on pages 4 and 33.

**Site work found by the build, not fixed there.** The nine items under "Site may be wrong"
above, of which the legal guide's by-name exemption claim and its stale California line are
the two to fix first, since the legal guide is the high-traffic page.

**Source drift found while building.** Night temperature (site 75 to 78°F against ReptiFiles'
60°F floor), adult length (four ranges), lifespan (three), activity (day-active against ADW's
crepuscular), quarantine (3 to 6 months, 60 to 90 days, 2 to 3 months), weighing (weekly
against monthly), and UVB tube life (12 months against 6 to 12). Page 44 prints each spread
and the figure chosen.

## Owner review fixes, 1.0

- The lidded feeding tub ($5 to $10) and kitchen scale ($10 to $20) had no source for their prices, so both moved to the "not in the totals" line, unpriced. Equipment is now $258 to $441 and all in $383 to $691, on pages 4, 33 and 44.
- "commonest" now reads "most common".

## Pointer trim, 1.0

Page pointers trimmed by the maze rules so every package reads alike: tool pages (how to use,
setup checklist, emergency card, first 30 days, symptom reference with its Page column,
routine, sitter sheet) keep one pointer per row; everywhere else one pointer per destination
per page, no pointer to the page you are on, no pointer to the next or previous page in the
same section, no ping-pong (A to B and B to A), and nothing points to the glossary. Glossary
entries keep every page that covers the term; each listed page was checked and still covers
it ("Conditional" points to the States with Conditions page, which lists them).

| | Before | After |
|---|---|---|
| Pointers, total | 162 | 140 |
| On tool pages | 47 | 47 |
| Repeats on care pages | 7 | 0 |
| Glossary pointers (out) | 39 | 39 |
| Ping-pong pairs | 6 | 0 |
| Pointers to the glossary | 0 | 0 |
| Self-pointers | 0 | 0 |

The 22 removed: ping-pong returns (species to growth, humidity to respiratory, feeding to
impaction, thawing to impaction, display to enrichment, impaction to stool); same-section
neighbors (profile to species twice, enclosure to temperature, temperature to heating twice,
substrate to humidity, feeding to thawing, thawing to refusals, display to venom, impaction
to parasites); second pointers to the same page (profile's lighting row, the refusals page's
regurgitation callout, growth's size hint, the stool page's mites line); and the About
page's two pointers back to Sources. "Work through page 13" now reads "work through the
refusal checklist that follows". All 44 pages still fit (minimum 28px free).
