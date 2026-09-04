# Cockatiel v2 notes

Written during the 1.0 build (September 2026), the third bird package on the t3 template
and the first bird package that was a genuinely new build rather than a rebuild of a
pre-t3 edition. Read this before starting v2, along with the **Cockatiel 1.0** block under
**Site content gaps by package** in `../TEMPLATE_GUIDE.md`.

## What 1.0 is

40 pages, guide version 1.0, template t3, built from fragments plus a build script in
`../source/cockatiel-src/`. There is no earlier edition; this species had no care package
before now.

## Page count: 40, and it was a choice inside a measured floor

The lovebird build put a small parrot at 36 to 39 and the budgie landed at 39. This came
in at 40, one over the band, and the extra page is the **sources split**: the source table
grew to eleven veterinary and public-health rows and overflowed by 199 px, so "Sources and
further reading" and "Where the sources disagree, version history and about" became two
pages. That is worth carrying forward. **A bird package that sources properly needs two
reference pages at the back, not one**, and the second one is where the source-drift table
belongs.

Nothing else was forced by overflow. After the head CSS pass below, every page cleared with
at least 18 px free and several had over 200.

## Head CSS: tightened again from the budgie's

The budgie head was already tightened from the lovebird's, and its note says that pass was
worth more than every content cut combined. That is exactly what happened again here.
**The first draft had 19 of 39 pages overflowing.** One CSS pass took it to one.

| Rule | Budgie 2.0 | Cockatiel 1.0 |
|---|---|---|
| `.page` padding | 0.62 / 0.66 / 0.55 | **0.56 / 0.60 / 0.50** |
| `.pagefoot` inset | 0.3in, 0.66in | 0.28in, 0.60in |
| `p` / `li` | 1.40 / 10.1pt | **1.36 / 9.9pt** |
| `li` margin-bottom | 2pt | 1.6pt |
| `table` | margin-top 6pt, 9.6pt | margin-top 5pt, 9.4pt |
| `th` padding | 5pt 8pt | 4.2pt 7pt |
| `td` padding | 4.5pt 8pt | 3.7pt 7pt |
| `.callout` | 8/12pt, margin 7pt, 10pt/1.40 | 7/11pt, margin 6pt, 9.6pt/1.36 |
| `.check-item` | 4pt, 9.8pt/1.36 | 3.2pt, 9.5pt/1.30 |
| `h2.h` | 13pt, margin 9/3 | 12.4pt, margin 7.5/2.5 |
| `h3.h` | 11pt, margin 8/3 | 10.6pt, margin 6.5/2.5 |
| `.section-title` | 19pt | 18pt |
| `.section-sub` | 9.7pt, margin 8pt | 9.4pt, margin 6.5pt |
| `.eyebrow` | 9.5pt, margin 4pt | 9pt, margin 3pt |
| `table.dense` | 8.7pt, td 2.6pt/1.30 | 8.5pt, td 2.2pt/1.26 |
| `table.log td` | 25pt | 23pt |

That reclaimed roughly **90 to 160 px a page**. The narrowed left and right page padding is
the part worth noting separately: 0.06in off each side is 11.5 px of extra line width, which
removes a wrapped line from most paragraphs on a text-heavy page and compounds fast.

**Do this before cutting anything on the next package**, whatever the animal. It is now two
builds in a row where the CSS pass was worth more than every content trim combined.

## Free space per page, final measurement

```
p2=36  p3=279  p4=67  p5=48  p6=172  p7=192  p8=31  p9=205  p10=58  p11=18  p12=219
p13=176  p14=97  p15=196  p16=33  p17=150  p18=135  p19=28  p20=82  p21=19  p22=52
p23=19  p24=96  p25=135  p26=156  p27=51  p28=206  p29=139  p30=53  p31=99  p32=107
p33=121  p34=92  p35=157  p36=228  p37=129  p38=203  p39=239  p40=470
```

The tight ones, and therefore the pages that will overflow first if anything is added:
11 (safe vegetables, 18), 21 (respiratory and psittacosis, 19), 23 (foreign bodies and
mites, 19), 19 (health red flags, 28), 30 (budget, 53). Real headroom if v2 needs somewhere
to put a block: 40 (about, 470), 39 (sources, 239), 36 (owner log, 228), 12 (fruit, 219),
28 (checklist, 206), 9 (one cockatiel or two, 205).

## Parked blocks

Nothing was cut for space in the sense of being removed from the package. Four blocks were
tightened rather than dropped, and the original wording is here so a future editor knows
what the longer version said.

### Budget page (30), the emergency-fund callout before it was shortened

```html
  <div class="callout never">
    <span class="label">The line nobody budgets for</span>
    An avian exam is $85 to $200 before any testing, and diagnostics add more. A reproductive emergency, which is the likeliest one in this species, runs <strong>$300 to $800 or more</strong>. Pet insurance for a bird barely exists, so almost every cockatiel owner self-insures, and self-insuring only works if the money is somewhere. Put $20 a month aside from the day the bird arrives and by the end of year one you can say yes to the work-up instead of choosing between it and the rent.
  </div>
```

### Budget page (30), the pair-cost note before it was folded into a table row

```html
  <p class="small" style="margin-top:4pt;">A pair is roughly 1.8 times one bird rather than double: food and toys nearly double, the cage, scale and carrier do not, and two wellness exams do.</p>
```

### Respiratory page (21), the sentence dropped from the human-illness callout

```html
Anyone immunocompromised, pregnant, or elderly should take that more seriously rather than less.
```

That one is worth reinstating in v2 if the page gains headroom. It is real advice and it
was cut for 20 px.

## Ideas raised and never drafted

In rough priority order. Each needs sourcing before it goes on a page.

1. **Choosing a cockatiel, and where from.** Hand-raised versus parent-raised, breeder
   versus shop versus rescue, what to ask, and what a healthy bird looks like in the cage
   you are buying it from. The lovebird and both mammal packages all logged the same gap,
   and the cockatoo package solved it with a species-choice page. A cockatiel needs a
   smaller version: colour mutations, and the fact that a lutino or pied bird cannot be
   sexed by looking, which currently lives as a paragraph on page 16.
2. **Talking, whistling and noise expectations**, properly. The species is bought for the
   whistling and the package answers it in a callout on page 9. Worth a page that sets
   expectations before purchase, including the honest odds by sex.
3. **Training protocols, step by step.** Page 13 lists training as enrichment and page 14
   covers taming, but neither teaches target training, recall, or a station cue. Recall in
   particular is a safety behaviour for a flighted bird and page 15 promises it without
   teaching it. The cockatoo package has this page and it transfers as a shape.
4. **Grooming and a bird first-aid kit as its own page.** Currently the kit is a callout on
   page 23 and nails are one line on page 6. A page could carry nail trim interval and
   technique, towel restraint taught with rewards, when a beak needs a vet rather than a
   trim, and the full kit list.
5. **A one-page "is a cockatiel right for you" quiz**, ahead of the quick profile. The
   cockatoo package's page 5 is the worked example and it is the strongest page in that
   book. A cockatiel version would be gentler and shorter, and would sit naturally on page 3.
6. **Cockatiel mutations and what they cost.** Normal grey, lutino, pied, pearl, whiteface,
   cinnamon, albino. It affects price, it affects sexing, and there is a real welfare point
   about lutinos and the bald patch behind the crest.
7. **A page on introducing a cockatiel to other pets**, which the quarantine page on 27
   touches only for other birds.

## Proposed gaps, carried from the build

These are also in the gap log in `TEMPLATE_GUIDE.md`, where they drive site articles. They
are repeated here because they drive the *next edition of the PDF* too, and they still need
sourcing before either use.

- **Night frights.** Cockatiel-specific, and the single most preventable injury in the
  species. Nothing on the site covers it beyond two mentions in `guides/birds.js`.
- **<em>Giardia</em> and the under-wing itch.** The cockatiel plucking differential nobody
  checks. VCA names it for this species specifically.
- **Sexing the normal grey after the first molt**, and why the mutations break it.
- Plus the nine cross-species bird rows the lovebird and budgie blocks already opened, all
  of which this package hit identically.

## Cut list for v2, in priority order

If v2 has to lose pages, in this order:

1. **Page 15, wing clipping**, only if the site has published a clipping article by then and
   the page can become a half-page pointer. It is a genuinely useful page and it is still
   the first thing to go.
2. **Page 25, molt and seasonal behavior**, folded into page 24 (plucking) as a "normal
   versus not" section. The three-way differential callout is the part that must survive.
3. **Page 12, fruit and extras**, folded into page 11 (vegetables). It is the thinnest of
   the food charts and page 12 has 219 px free.
4. **Page 40, where the sources disagree**, folded back into page 39 at 8pt. Only if the
   source table has shrunk, which it will not have.

**Do not cut, in any version:**

- **Page 7, light, sleep and night frights.** The night-light page is the one most likely to
  prevent an injury, and it is the page that makes this guide different from a generic
  small-parrot one.
- **Page 8, household hazards.** PTFE alone justifies it.
- **Pages 17 and 18, the egg pages.** VCA is explicit that reproductive problems are more
  common in cockatiels than in budgies, which makes these the health pages this species
  most needs.
- **Page 10, diet.** Half of section 03 traces back to a seed bowl.
- **Page 16, sexing and weight.** The gram scale routine is the single most useful habit in
  the book, and the dimorphism is one of this species' real advantages.
- **The fillable pages, 35 to 37.** Sitter sheet, owner log, equipment and vet log. They are
  the reason a buyer prints the thing.

## One process note for the next bird package

The cockatiel and cockatoo packages were built in the same session and they share nine
cross-species bird pages in shape but almost nothing in figures. Building them together
made the differences obvious in a way building them apart would not have: the cage figure,
the bar spacing, the lifespan, the weight, the noise, the bite risk and the entire
behavioural section are different animals. **Do not carry a figure between them**, and be
particularly careful with the ones that look transferable, the diet split and the
photoperiod, because those two genuinely are the same and every other number is not.

---

## 1.1 corrections pass, 4 September 2026

Cross-check of the whole package against the bird articles published since this
edition: the fifteen in commit `42fd86f` plus the five cross-species bird guides
that landed the day before it. Guide version 1.0 to 1.1, template still t3,
40 pages unchanged.

### Errors corrected

**Page 23, the blood feather instruction was wrong twice.** It said to apply
"gentle pressure with clean gauze and cornstarch" and that "if it does not stop
within a few minutes the feather must be pulled." VCA's current guidance is firm,
steady pressure, clotting powder on the exposed broken tip and never into an open
follicle, a vet at two to three minutes, and explicitly that pulling a blood
feather at home is **not recommended**, because it leaves the shaft open and can
cost more blood than it saves. Even in a clinic a vet pulls one only as a last
resort, because it is painful and can permanently damage the follicle. Now
corrected here and on the symptom table on page 32.

**Page 18, the warming figure was the highest of the four bird packages.** It gave
85 to 90 F (29 to 32 C). Harmonized to **80 to 85 F (27 to 29 C)**, which sits
inside the 80 to 90 F range LafeberVet gives for a bird under supplemental heat,
with VCA's 75 to 80 F for a recovering bird named beside it, and the signs of
overheating added: flat sleek feathers, wings held out, open-mouth breathing.

**Page 15, the regrowth interval had no source.** "A clip lasts one molt cycle,
roughly six to twelve months" is gone. Merck's position is that molt timing varies
with nutrition, daylight and humidity, so the page now says to check the wings
rather than the calendar. Merck's method was added: four to seven of the outermost
primaries on both wings, cut below the coverts, secondaries left alone.

**Page 27, the multi-bird quarantine figure was invented.** "45 to 60 days" became
Merck's **90 days** with testing for an aviary or an established group, since an
infected adult can shed polyomavirus intermittently for up to 90 days.

### Added

- **Page 6, nail-trim technique**, and deliberately **no interval**, because the article establishes there is no verified one: the quick, the pink core on a pale nail against nothing visible on a dark one, backlighting with a torch, taking a little at a time, and the cut-quick sequence (pinch the toe above the nail, styptic to the cut end, off the water dish for a few hours).
- **Page 7, bird fancier's lung.** Merck names cockatiels with cockatoos as heavy powder-down producers, and the NHLBI lists pet birds in the home as a risk factor for hypersensitivity pneumonitis, usually diagnosed between 50 and 70, with lung fibrosis at the serious end. Control hierarchy and the line that matters most: tell your doctor you keep a parrot. This row had only ever been logged under Cockatoo, and the article's own scope names cockatiels.
- **Page 26, avian gastric yeast**, reached through the droppings page, which is where whole undigested seed actually shows up. Merck names cockatiels among the species it most affects and one case series found it more often in cockatiels than budgerigars, so this is not a budgie-only disease.
- **Page 23**, the point the *Giardia* article turns on: the "or" is doing real work, and plenty of infected cockatiels show only the itch with a normal-looking tray throughout, so a clear sample rules nothing out.
- Page 7: Merck's over-12-hour photoperiod threshold and LafeberVet's 8 to 10 hour intervention range. Page 8: lead's sweet taste, electroplated against hot-dipped zinc, a carbon monoxide detector, avocado's persin and 12-hour onset, and the cat-bite window corrected from "about 48 hours" to within hours. Page 17: the 19 to 21 day incubation marked as the species figure rather than the general 21 to 28. Page 18: VCA's 48-hour egg marker. Page 25: Merck's partial second molt. Page 26: polyuria as often the first sign of kidney damage from zinc. Page 34: the CDC's 20 feet for a generator and a CO detector. Page 40: VCA's 10 to 14 years with a maximum of 24 added to the life span disagreement, which now has four figures in it.

### Fitting it, which took four passes

The content edits left six pages over: 8, 23, 26, 6, 7 and 39. Three of the new
blocks were simply in the wrong place for space, and moving them improved the book
as well as the measurement: the dust note went from page 8 to page 7, which is the
page about the room the bird lives in; the nail technique went to page 6, next to
the perch material that decides how fast nails grow; and the avian gastric yeast
entry went from the page 23 conditions table to page 26, where the droppings sign
that flags it already lives. That is also the fallback placement agreed before the
pass started.

Then a second CSS pass. This head had been the tightest of the four bird files, but
the **cockatoo head is tighter still**, and porting its values here (table margin
4.5pt, callouts 6.5/10.5pt with 5pt margins, `section-sub` 5.5pt, `check-item`
2.8pt, `h2.h` 6.5/2 margins, `table.dense td` 2.0pt/1.24) cleared five of the six
remaining pages at once. The cockatoo's two-column contents rule was deliberately
not ported: at 40 entries this contents page does not need it.

Page 23 was the last holdout at 6 px and would not yield to prose trimming, because
what sets the floor there is a table, not a paragraph. Moving the **first-aid kit
box to page 29**, beside the emergency card, cleared it and puts the kit where
someone reaching for it in a hurry is already looking.

Final measurement: all 40 pages clear, minimum 17 px free.

### Still only in this PDF

Night frights on page 7, the sexing dimorphism and the mutations that break it on
page 16, and the whistling-by-sex material on page 9 all still have no site article
behind them and stay open in the gap log. The
`bird-sexing-weight-body-condition-guide` names cockatiels as a visual-sexing
exception in one FAQ line but never covers the dimorphism or the mutations, which
is why that row could not be closed. The claim on page 17 that VCA finds
reproductive problems more common in cockatiels than budgies also stays flagged for
an external check.
