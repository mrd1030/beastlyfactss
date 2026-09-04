# Budgie v3 notes

Written during the 2.0 rebuild (Sep 2026). 1.0 was 20 pages on the pre-t3 layout; 2.0 is
39 pages on t3, built from fragments in `source/budgie-src/`.

Read this before starting v3. It carries the parked blocks, the measured free space per
page, the pages that were wanted and never drafted, and the cut list.

## Page count: 39, and it was a choice inside a measured floor

The lovebird build put a small parrot at 36 to 39 and this landed at the top of that. The
count was not forced by overflow: after the head CSS was tightened (below) every page
cleared with at least 15px free and several had 100px or more. 39 is where the content
sat, not where the measurement stopped.

The two structural decisions that set it:

- **The enrichment log was folded into the routine page**, following the Hamster 3.0
  precedent, so `equiplog` is Equipment & Vet Log rather than a third log page. Section 05
  is eight pages instead of nine. If v3 grows, splitting it back out is the cheapest way to
  add a page that earns its place.
- **The health section is nine pages**, one more than the lovebird's seven, because this
  species has three conditions no other bird package needs at depth: megabacteriosis,
  goiter, and the tumor load. They share page 23 and page 20 respectively and both pages
  are full.

## Head CSS: tightened again from the lovebird's

The lovebird head was already tightened from `_template.html`. This build tightened it
further and it is what took the guide from 22 overflowing pages to zero:

| Rule | Lovebird | Budgie 2.0 |
|---|---|---|
| `p` / `li` | 1.44 / 10.3pt | 1.40 / 10.1pt |
| `li` margin-bottom | 2.4pt | 2pt |
| `table` | margin-top 8pt, 9.7pt | margin-top 6pt, 9.6pt |
| `td` padding | 5.2pt | 4.5pt |
| `.callout` | 9.5/13pt, margin 8pt, 10.2pt/1.44 | 8/12pt, margin 7pt, 10pt/1.40 |
| `.check-item` | 4.6pt, 10pt/1.4 | 4pt, 9.8pt/1.36 |
| `h2.h` | 13.5pt, margin 11/4 | 13pt, margin 9/3 |
| `table.dense td` | 2.9pt / 1.34 | 2.6pt / 1.30 |

That single pass reclaimed roughly 130 to 200 px a page. It is still comfortably readable
at print size, checked on the rendered PDF rather than on screen. **Do this before cutting
anything on the next build**, on any package: it was worth more than every content trim
combined.

## Free space per page, final measurement

```
p2=39  p3=236  p4=166  p5=15  p6=121  p7=174  p8=34  p9=84  p10=123  p11=41  p12=84
p13=137  p14=25  p15=64  p16=15  p17=15  p18=61  p19=30  p20=19  p21=44  p22=85  p23=50
p24=33  p25=103  p26=69  p27=121  p28=108  p29=15  p30=31  p31=67  p32=15  p33=31
p34=51  p35=39  p36=157  p37=45  p38=28  p39=40
```

Pages with real headroom for v3: 3 (howto), 4 (profile), 7 (light), 13 (mistakes),
27 (quarantine), 28 (checklist), 36 (owner log), 10 (diet), 6 (furnishings).

## Parked blocks

### Cut from the budget page (page 30), to fit after the diagram went in on page 5

Two callouts were merged into one and the "Where not to save" section was demoted to a
single muted line. The original, roughly 90 words:

```html
  <h2 class="h">Where not to save</h2>
  <p class="muted" style="font-size:9.8pt;">The cage, because a small one gets replaced. The bar spacing, because it is a safety limit. The pellets, because the whole health section of this book runs through the diet. Save instead on toys, which are shredded paper and untreated wood and cost nothing to make, and on perches, which grow on apple, willow and manzanita trees for free once you have checked they are unsprayed.</p>
```

And the emergency-fund callout, which now lives merged into the first-year callout:

```html
  <div class="callout never">
    <span class="label">The emergency fund is a line item</span>
    Diagnostics run $50 to $300 on top of an exam. Emergency care runs $100 to $1,500 or more. Pet insurance is rarely available for a budgie, so most owners self-insure, which only works if the money exists. Put $20 a month somewhere separate from the day it arrives, and by the end of year one you can say yes to the work-up rather than choosing between it and the rent.
  </div>
```

### Cut from the symptom page (page 32)

```html
  <div class="callout never">
    <span class="label">The rule that overrides this table</span>
    A budgie that has visibly changed is a budgie that has been unwell for a while. When in doubt, call. There is no version of this where waiting a few days to see improves the outcome.
  </div>
```

Its content survives compressed into that page's `section-sub`. Reinstate the callout if
the table ever loses two rows.

### Moved rather than cut

- **The escape-and-recovery callout** moved from the outage page to the emergency card
  (page 29), where it reads better anyway because the leg band line is right above it.
- **The enrichment checklist** moved from the equipment log to the routine page (33).

Nothing else was removed. No fact, dose, temperature or figure was cut to make a page fit.

## Pages wanted and never drafted

1. **Choosing a budgie, and where from.** Both mammal packages and the lovebird block call
   for this and it is the same gap here: pet shop against breeder against rescue, what a
   healthy bird looks like in the cage you are buying it from, the questions to ask, and
   the English/exhibition versus pet-type distinction, which changes adult weight, lifespan
   and price and is invisible to a first-time buyer. There is currently one line about it
   on page 4. **This is the strongest candidate for v3 and it should be a full page.**
2. **Talking and training, as its own page.** Currently three rows in the flock table plus
   a mention on the enrichment page. Target training, recall, and the honest odds on
   speech, which is the single most common reason people buy this species specifically.
3. **A budgie-specific first-aid page.** Bleeding blood feather, a bird stunned by a window
   strike, a bird found on the floor, overheating. The emergency card points at the vet and
   stops. Half a page of what to do in the ten minutes before the car.
4. **Colony and aviary keeping.** Budgies are the one small parrot commonly kept in groups
   rather than pairs, and this package answers only one-or-two. Space per bird, sex ratios,
   nest-site control in a group, and why a colony is a breeding setup by default.
5. **Reading budgie body language.** Fluffed against relaxed-fluffed, eye pinning, beak
   grinding, tail fanning, the one-foot sleep. Page 31 mentions beak grinding in a callout
   because there was nowhere else to put it.
6. **A cere and mutation reference.** Page 16 handles sexing, but the mutations that break
   cere sexing (recessive pied, lutino, albino) get one clause. A short visual reference
   would carry its weight, and it pairs with the buying page above.
7. **Air quality as its own page.** Hazards (page 8) is a list of acute killers. There is a
   separate, slower story about dander, dust, humidity and air filtration in a small room,
   which matters to the owner's lungs as well as the bird's.

## Proposed gaps: what a budgie keeper needs that neither the page list nor the site raised

These are proposals from knowledge of the species, not grep results. They are also logged
in `TEMPLATE_GUIDE.md`.

- **Megabacteriosis (`Macrorhabdus ornithogaster`).** The site does not mention it outside
  one clause in `budgie-health-issues-guide.mdx`. It is the classic quiet killer of this
  species and the reason to own a scale.
- **The renal and gonadal tumor load in budgerigars**, and lameness as the presenting sign.
  Nothing on the site connects a limping budgie to anything but injury.
- **French moult / avian polyomavirus.** Named in aviculture for a century and absent from
  the site entirely.
- **Iodine-deficiency goiter** as a respiratory sign rather than a lump.
- **Exhibition versus pet-type budgies.** Different animal, different weight, different
  lifespan, sold under the same name.

## Cut list for v3, in priority order

Cut first, if something has to go:

1. The twelve-month planner on page 37. It duplicates what a calendar does.
2. The seasonal table on page 33, which is the least species-specific block in the package.
3. The "four ways to convert a seed eater" could compress to two if page 10 ever has to
   give room, though the source gives four and printing all four is the honest version.

**Do not cut, in this order:** page 8 (hazards), page 10 (diet), page 20 (obesity, fatty
liver and tumors), page 16 (weight and body condition), pages 17 and 18 (the egg pair),
page 27 (quarantine). Those seven are the product. Page 8 in particular is the single page
most likely to prevent a death, and page 10 is the one that decides whether the bird lives
seven years or fifteen.

## Source drift found while building

Logged in full in `TEMPLATE_GUIDE.md` under the Budgie 2.0 block. The short version:
`guides/birds.js` says 60 to 70% pellets against VCA's 60 to 80%; `guides/birds.js` gives
millet 2 to 3 times a week against VCA's small quantities once or twice a month, which is
a large gap on the one treat every owner overfeeds; `encyclopedia/birds.js` stuffs a
captive figure into `bio.wildLifespan`; and the site's three lifespan figures (12 to 15,
7 to 12, and 7 to 12 again) do not agree with each other or with LafeberVet's 7 to 15.

---

## 2.1 corrections pass, 4 September 2026

A cross-check of the whole package against the bird articles published since
2.0: the fifteen in commit `42fd86f` plus the five cross-species bird guides
that landed the day before it. Sixteen pages touched, one structural change.
Guide version 2.0 to 2.1, template still t3, 39 pages to 40.

### Four real errors, and this package had the worst of the set

**Page 10, the 24-hour rule was wrong for this species.** The page said "a
budgie that stops eating is a vet visit within 24 hours." Lafeber's Stephanie
Lamb is specific that a small bird like a budgerigar should not go more than
**12 hours** without eating; 24 hours is the figure for an African grey or
larger. Now 12 hours, with the 10% weight-loss threshold beside it.

**Page 27, the package recommended something the source discourages.** It said
the public health guidance is to "test or prophylactically treat" a new bird
before adding it to a group. The NASPHV and CDC compendium says the opposite:
"routine prophylactic antibiotic treatment is highly discouraged as it may cause
adverse effects and could generate resistant strains." The alternative is gone,
it is testing only, and the page now says why. The gap log row in
`TEMPLATE_GUIDE.md` carried the same error and was fixed with it.

**Page 21, the doxycycline course was missing its species exception.** The page
gave a flat 45 days. The compendium's own wording is 45 days historically,
"except budgerigars required only 30 days," with recent work putting 21 to 30
days within reach for psittacines generally and a retest two to four weeks
after. In a budgie package that exception is the whole point. Now printed.

**Page 23, the avian gastric yeast framing was an overstatement.** It said the
organism is "more common in small pet birds such as budgerigars than in anything
else." Merck names budgerigars, parrotlets, lovebirds, cockatiels and finches
together, and a peer-reviewed case series found it more often in the cockatiels
it examined than the budgies. Rebalanced, with the budgerigar's longer history
kept. The four-weekly liver enzyme, bile acid and uric acid monitoring line was
replaced with the fecal recheck schedule the source actually supports, and the
uncommon acute form was added: budgerigars in good condition collapsing and
dying within 12 to 24 hours from proventricular bleeding, as a same-day flag.

### The rest, page by page

- **Page 7.** Merck's over-12-hour photoperiod threshold and LafeberVet's 8 to 10 hour version of the intervention added beside VCA's 8.
- **Page 8.** The PTFE source list said to check "irons, space heaters, hair dryers, air fryers and drip coffee makers"; Merck lists irons and ironing board covers, some self-cleaning ovens, reverse-cycle heat pump elements and some heat lamps, so the list now matches the source it implies. Lead now noted as sweet-tasting, zinc split into electroplated (safe) against hot-dipped (not), a carbon monoxide detector line added, and the cat-bite window corrected from "within a day or two" to "within hours," which is what the Pasteurella mechanism actually gives you.
- **Page 9.** A short colony-and-aviary paragraph, deliberately with no numbers in it, because no verified space-per-bird or sex-ratio figure exists in a citable source.
- **Page 12.** Avocado gained persin, the greater sensitivity of small birds, and the roughly 12-hour onset.
- **Page 15.** "Regains flight at the next molt, usually within six to twelve months" removed, because Merck's position is that molt timing varies with nutrition, daylight and humidity and has no fixed interval. Merck's four-to-seven outermost primaries and the untouched secondaries added.
- **Page 16.** Weighing moved from weekly to daily, before the first feed, citing Orosz.
- **Page 17.** The 18-day incubation kept, with a line saying it is the budgerigar's own figure rather than the 21 to 28 days quoted as a general parrot range.
- **Page 18.** The vent bulge, the prolapse, the late leg weakness and VCA's 48-hour marker added. The warming figure kept at 80 to 85 F but now named against LafeberVet's 80 to 90 F clinical range and VCA's 75 to 80 F for a recovering bird, with the overheating signs.
- **Page 19.** Two illness cues sharpened: the one-foot against two-foot fluff, and a fanned tail against a bobbing one.
- **Page 22.** VCA's up-to-100% mortality in birds under 15 days, and the vertical transmission route documented in budgerigars alone.
- **Page 24.** Beak grinding as contentment and eye pinning as arousal rather than happiness, which is where the material stranded on page 31 finally belongs.
- **Page 25.** Blood-feather first aid rewritten from "firm gentle pressure" (which is self-contradictory) to firm steady pressure, powder on the exposed tip and never into an open follicle, a vet at two to three minutes, and no pulling at home. Merck's partial second molt about six months after the main one added.
- **Page 26.** The 20 to 30 minute dropping frequency, the larger morning dropping as normal, whole undigested seed cross-referenced to avian gastric yeast, and polyuria as often the first sign of kidney damage from zinc.
- **Page 29.** The emergency card warming row matched to pages 18 and 21.
- **Page 31.** The stranded beak-grinding line now points at pages 19 and 24 instead of explaining itself.
- **Page 32.** The bleeding row matched to page 25.
- **Page 34.** The CDC's 20 feet from any door, window or vent for a generator, and a carbon monoxide detector.

### Where the body-language material actually landed

It was drafted as a five-row table on page 24, which overflowed that page by
107 px, then a callout on page 25, which overflowed by 45. Splitting it by
meaning fixed it and reads better: the two illness cues went to page 19 with the
rest of the red flags, and the two contentment and arousal cues to page 24 with
the behaviour material. A mid-document page would have forced hand renumbering,
which `TEMPLATE_GUIDE.md` forbids.

### Structural: the second reference page

The sources page overflowed by 471 px once the new citations went on, so the back
matter split into **page 39, Sources & Further Reading** and **page 40, Where the
Sources Disagree, Version History & About**. Page 40 gave the five source
disagreements a home in the PDF for the first time; they had only ever lived in
the gap log. This is the shape `TEMPLATE_GUIDE.md` already prescribes and that
Cockatiel and Cockatoo already use. 39 pages to 40, no existing page number moved.

### The CSS pass, third build running

Fifteen pages were tight or overflowing after the content edits. The budgie head
had already been tightened once from the lovebird's; porting the Cockatiel values
into it (padding 0.56/0.60/0.50, line height 1.36, `p`/`li` 9.9pt, `td` 3.7pt,
`table` 9.4pt, callouts 7/11pt and 9.6pt/1.36, `check-item` 3.2pt/9.5pt, `h2.h`
12.4pt with 7.5/2.5 margins, `section-title` 18pt, `table.dense td` 2.2pt/1.26)
cleared thirteen of them. All four bird files now share one head.

Final measurement: all 40 pages clear, minimum 25 px free.

### One correction after review

Page 21's supportive-care line carried the 80 to 85 F figure but not the source
naming or the overheating signs that pages 18 and 29 had gained, so the same
number read three different ways inside one book. Completed to match: LafeberVet's
80 to 90 F range and VCA's 75 to 80 F both named, and flat sleek feathers, wings
held out or open-mouth breathing as the too-hot signs. Re-rendered over the same
2.1 file. All 40 pages clear, minimum 25 px.

### Still only in this PDF

The neoplasia material on pages 20 and 32, the exhibition against pet-type
distinction on pages 4 and 16, and the talking odds on page 9 have no site
article behind them and stay open in the gap log. The 25 to 35 g weight range no
longer belongs on that list: LafeberVet's parakeet sheet gives exactly that
figure, along with the 274 bpm heart rate, the 60 to 75 respiratory rate, the
107.1 F body temperature, the 7 to 15 year life span, the 18-day incubation and
the 4 to 6 egg clutch this package already prints. All were checked against the
sheet during this pass and all matched.
