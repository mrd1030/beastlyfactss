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
