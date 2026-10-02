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

### One correction after review

The corrected warming figure went onto page 18 but never reached the page 29
emergency card, which had a room-temperature row and no sick-bird row. That
breaks the rule that a fixed figure reads the same on the care page, the quick
reference and the card, so the card gained the row: 80 to 85 F (27 to 29 C) with
the overheating signs. Re-rendered over the same 1.1 file. All 40 pages clear,
minimum 17 px.

### Still only in this PDF

Night frights on page 7, the sexing dimorphism and the mutations that break it on
page 16, and the whistling-by-sex material on page 9 all still have no site article
behind them and stay open in the gap log. The
`bird-sexing-weight-body-condition-guide` names cockatiels as a visual-sexing
exception in one FAQ line but never covers the dimorphism or the mutations, which
is why that row could not be closed. The claim on page 17 that VCA finds
reproductive problems more common in cockatiels than budgies also stays flagged for
an external check.

---

## Cut in 1.2

Version 1.2 (October 2026) was a cross-check against the site. These words left the
page, for space or because the site no longer supports them, and are kept here.

**Page 39, the guides paragraph, cut for space.** The list of guides became "sixteen
cross-species bird guides, from household hazards and quarantine to first aid and
feather dust." The 1.1 wording:

> Beastly Facts guides drawn on: cockatiel cage setup, feeding, health issues, handling,
> enrichment and cost, plus the cockatiel and cockatoo comparison, and the cross-species
> bird guides written since this edition, which now carry pages this package used to
> source externally: household hazards, photoperiod and sleep, pellet conversion,
> quarantine, droppings, wing clipping, sexing and body condition, feather loss and molt,
> chronic egg laying, emergency and travel, first aid and grooming, body language, parrot
> training, avian gastric yeast, feather dust and air quality, and choosing a pet bird.

**Page 29, the first-aid kit callout, cut for space:** "Assemble it in week one, where
anyone can find it in the dark." Now "Keep it where anyone can find it in the dark."

**Page 29, the weight row,** was "A fall of about 10% from baseline, or three declining
weighings" and is now "A 10% fall, three falling weighings, or 1 to 2% a week in a diet
change". The quarantine row lost "with an existing bird" along with the old 45 to 60 days.

**Page 15, the recall callout,** ended "and it takes a fortnight." No site page gives a
timeline for recall training, so it now ends "built a little more distance at a time."

**Page 9, the pairing paragraph,** opened "Two hens or two cocks avoids the egg problem
entirely and they will still bond." The first half was wrong (hens lay with no male); the
second half went with it.

**Page 18 and page 29, the sick-bird warming figure,** was 80 to 85 F (27 to 29 C). The site
gives 75 to 80 F for a sick bird, so the package now prints about 80 F (27 C), the top of
that range and the bottom of LafeberVet's 80 to 90 F for supplemental heat.

**Page 7, the sleep paragraph, cut for space** when the abbreviation pass spelled out UVB,
NHLBI and HEPA on the same page. The 1.2 draft wording:

> It is also the cheapest thing in this book to fix. Before you change the diet, buy a toy,
> or call a behaviorist about a screaming bird, count the hours of real darkness it is
> actually getting.

Now "It is also the cheapest fix in this book. Before you change the diet, buy a toy, or
call a behaviorist, count the hours of real darkness it gets."

**Page 39, the Lafeber night fright row, cut for space** when NASPHV, MSD and UC Davis
were spelled out. Was "The mechanism, the night light recommendation, partial rather than
full covering, identifying external triggers, and the response when one happens." Now "The
mechanism, the night light, partial rather than full covering, external triggers, and the
response when one happens."

## Review fixes, 1.2

Editor's review, applied 1 October 2026. Still 41 pages; nothing was cut and no page was
added. Pages 7 and 8 overflowed after the glosses went in and were brought back by
rebalancing table columns and two rewordings that keep every fact (logged below).

**Spelling and US usage**

- Page 29: "Laboured breathing" is now "Labored breathing".
- Page 31: "pencilled into the planner" is now "penciled into the planner".
- Page 34: "A reptile in a power cut ... A cockatiel in a power cut" is now "power outage"
  in both places. Glossary CDC and CO entries: "in a power cut" / "during a power cut" are
  now "in a power outage" / "during a power outage".
- Page 8: "Ceiling fans and hobs" is now "Ceiling fans and stove burners". No other "hob"
  in the book.
- Page 26: "berries or beetroot" is now "berries or beets".
- Pages 4 and 19: "About 107.1°F (41.8°C)" is now "About 41.8°C (107.2°F)".
- Page 7: "a louder, bitier, more anxious cockatiel" is now "a louder, more bite-prone, more
  anxious cockatiel".

**Jargon glossed at first use, each with a new glossary entry**

- Page 8, zinc row: "Chelated by a vet" is now "Treated by a vet with chelation, a course of
  drugs that bind the metal so the body can pass it". Glossary: Chelation (pages 8, 23).
- Page 21: "the problem is at the syrinx" is now "the syrinx, the bird's voice box at the
  base of the windpipe". Glossary: Syrinx.
- Page 15: "cut below the coverts that overlay them" is now "cut below the coverts, the short
  feathers that overlay the base of the flight feathers". Glossary: Coverts.
- Page 18: "Calcium is what makes the oviduct contract" is now "The oviduct is the tube an
  egg travels down to be laid, and calcium is what makes it contract". Glossary: Oviduct.
- Page 22: "the mouth, nose or cloaca" now adds "the shared chamber under the tail that
  droppings and eggs leave through". Glossary: Cloaca.
- Page 7 (first use of cere): "a bleeding cere" is now "a bleeding cere (the nostril patch
  above the beak)". The Cere glossary entry already existed.

**Consistency**

- Page 4: "Page 30 itemizes it." is now "Page 30 adds a scale, a carrier, a sleep cage and
  the first exam and lands at $392 to $1,027."
- Page 9: "Roughly 1.6 to 1.8 times, not double" is now "Roughly 1.8 times one bird, not
  double". Page 30 pair row: low end $515 is now $513 (285 x 1.8); high end $990 (550 x
  1.8) was already right.
- Page 8, zinc row: added "A buyer cannot tell which kind a cage has, so treat all
  galvanized metal as out" after the electroplated/hot-dipped sentence, matching pages 6
  and 28.
- Page 26: "Plain paper, changed daily, no grate in the way if you can manage it." is now
  "Plain paper, changed daily; a grate is fine if the paper under it is still readable."
- Page 6, nails: "keep the bird off its water dish for a few hours" is now "keep it out of
  the bath and away from the water dish for a few hours so the clot is not washed off".
- Glossary, UC Davis: dropped "and of the point that covering a cage may not give a bird its
  best rest", which page 7 never says. The Sources page row still lists that point as
  something the source covers.

**Health entries completed**

- Page 23, Giardia box: added "Treated with an antiparasitic course from the vet; the
  itching stops once the parasite is cleared."
- Page 23, Bumblefoot row: added "Treated with perch changes, weight loss and, if the sole
  is broken, antibiotics and dressings from the vet."
- Page 20, Hypovitaminosis A: added "Recovery follows the diet change over weeks, and the
  vet rechecks the bird to confirm it." Calcium deficiency: added "Once the diet is
  corrected, recovery follows over weeks, and the vet rechecks the bird to confirm it." Kept
  to that general wording because the book's sources give no recovery timeline.

**Owner tools**

- Page 33, enrichment log: four rows is now seven, which fills the page.
- Page 37, twelve-month planner: Month column left blank, as in every other package. It
  reads as a rolling planner started from whatever month the bird arrives.

**Reworded to fit, no content removed**

- Page 7, sleep paragraph: "count the hours of real darkness it gets" is now "count its
  hours of real darkness".
- Page 7 settings table: label column 32% is now 25%. Page 8 hazards table: Hazard column
  24% is now 20%, "What it does" 30% is now 36%.

## Review fixes, 1.3

Applied 2 October 2026. The rule from docs/RULES.md, "The source goes in the block, not the
sentence": every outside source named in the care text (Merck/MSD, VCA, LafeberVet/Lafeber,
CDC, CPSC, NHLBI) is rewritten as a plain statement in the book's own words. 32 mentions
across 29 passages on pages 5 to 34; pages 38 to 41 (glossary, sources, where the sources
disagree, version history) are untouched apart from four glossary page pointers. Every number,
instruction and safety point is unchanged. Still 41 pages, nothing cut; minimum free space
16px (page 40, unchanged). Each source is still credited on page 40.

**Care text, before and after**

- Page 5, cage size (LafeberVet): "Credible sources give different cage figures and both are printed here rather than averaged. LafeberVet gives a minimum of 20 to 24 in (50 to 60 cm) long and wide for a cockatiel. Care references commonly cite 20×20×30 in (51×51×76 cm) as a minimum, and many keepers" is now "A cockatiel cage needs a minimum of 20 to 24 in (50 to 60 cm) of length and width, with 20×20×30 in (51×51×76 cm) the smallest workable box, and many keepers"
- Page 5, bar spacing (LafeberVet): "LafeberVet gives 0.5 to 0.75 in (1.3 to 1.9 cm) as the range. Care guidance for pet cockatiels is stricter and gives half an inch or smaller, and that is the figure to build to: a cockatiel's head is small enough that the top of the published range is a genuine entrapment risk," is now "Recommended spacing runs from 0.5 to 0.75 in (1.3 to 1.9 cm). Build to the narrow end, half an inch or smaller, because a cockatiel's head is small enough that the top of that range is a genuine entrapment risk,"
- Page 7, light table (LafeberVet, Merck): "which is 16 hours of dark; LafeberVet gives the same intervention as 8 to 10 hours. An intervention, run under vet advice, not a permanent setting. Merck names a photoperiod over 12 hours as a documented risk factor for excessive laying." is now "which is 16 hours of dark; the intervention runs 8 to 10 hours, and 8 is the end to use. An intervention, run under vet advice, not a permanent setting. A photoperiod over 12 hours is a recognized risk factor for excessive laying."
- Page 7, dust and lungs (Merck): "Cockatiels are a powder-down species; Merck names them with cockatoos as heavy producers of the keratin dust that films a room." is now "Cockatiels are a powder-down species and, like cockatoos, shed a heavy load of the keratin dust that films a room."
- Page 7, dust and lungs (NHLBI): "bird fancier's lung: the NHLBI (US National Heart, Lung, and Blood Institute) lists pet birds in the home as a risk factor, usually diagnosed between 50 and 70," is now "bird fancier's lung. Pet birds in the home are a recognized risk factor; it is usually diagnosed between 50 and 70,"
- Page 8, PTFE (Merck): "and the Merck Veterinary Manual notes that acute death is often the only clinical sign." is now "and often the first and only sign is a dead bird."
- Page 8, PTFE sources (Merck): "Cookware is not the only source. Merck also lists irons" is now "Cookware is not the only source. The same fumes can come from irons"
- Page 10, diet target (VCA): "VCA (Veterinary Centers of America), a large US chain of veterinary hospitals, gives the target as 75 to 80% formulated pellets, 20 to 25% fresh vegetables and fruit, and seed as a very small part of the diet rather than the base of it." is now "The target is 75 to 80% formulated pellets, 20 to 25% fresh vegetables and fruit, and seed as a very small share of the diet, never the base of it."
- Page 10, seed callout (Merck): "and Merck notes that even a half-seed, half-pellet diet leaves a bird vitamin A deficient." is now "and even a diet split evenly between seed and pellets leaves a bird low in vitamin A."
- Page 10, conversion (VCA): "VCA is blunt that this can take days, weeks or months." is now "Expect this to take days, weeks or months."
- Page 10, treats (VCA): "VCA describes honey sticks plainly as seeds stuck together with sugar and honey, and similarly nutrient-deficient." is now "Honey sticks are just seed glued together with sugar and honey, with the same nutritional gaps as a seed bowl."
- Page 15, wing clipping (Merck): "There is no fixed interval to quote: Merck notes molt timing varies with nutrition, daylight and humidity, so check" is now "There is no fixed interval to quote: molt timing shifts with diet, day length and humidity, so check"
- Page 15, blood feathers (Merck): "Merck's method is four to seven of the outermost primaries" is now "The standard clip takes four to seven of the outermost primaries"
- Page 16, weight table (Merck): "Merck's working definition of obesity in a bird. Page 20" is now "The working definition of obesity in a bird. Page 20"
- Page 17, section subhead (VCA): "VCA notes reproductive problems are even more common" is now "Reproductive problems are even more common"
- Page 17, leave the clutch (LafeberVet): "incubation runs 19 to 21 days, which is this species' own figure from LafeberVet rather than the 21 to 28 days quoted as a general parrot range, so" is now "incubation runs 19 to 21 days, shorter than the 21 to 28 day range for parrots in general, so"
- Page 18, egg binding opener (VCA): "VCA names cockatiels among the small birds most often affected, and states plainly that small birds can die within a few hours of becoming egg-bound, from compromised circulation and pressure on the airways." is now "Cockatiels are among the small birds it strikes most often, and a small bird that is egg-bound can be dead within a few hours, from compromised circulation and pressure on the airways."
- Page 18, signs (VCA): "And VCA's marker, which stands on its own before any of the rest appears:" is now "And one marker that counts on its own, before any of the rest appears:"
- Page 18, first aid warmth (LafeberVet): "and where LafeberVet's 80 to 90°F (27 to 32°C) range for supplemental heat begins." is now "and the bottom of the 80 to 90°F (27 to 32°C) range for supplemental heat."
- Page 20, hypovitaminosis A (Merck): "and Merck is specific that it is not only all-seed diets that cause it: even a diet of half seed and half pellets leaves a bird deficient." is now "and an all-seed diet is not the only cause: a bowl that is half seed, half pellets still leaves a bird short."
- Page 20, calcium (Merck): "not through a hypocalcemia syndrome, which Merck highlights in African greys rather than cockatiels, but through" is now "not through a hypocalcemia syndrome, which is an African grey problem rather than a cockatiel one, but through"
- Page 20, obesity (Merck): "Merck's working figure for obesity is roughly 20% over ideal weight" is now "The working threshold for obesity is roughly 20% over ideal weight"
- Page 23, Giardia (VCA): "VCA describes infected birds as having loose stools or being intensely itchy, attacking themselves violently, especially under the wings, and that itch" is now "An infected bird shows loose stools or an intense itch, turning on itself violently, mostly under the wings, and that itch"
- Page 23, blood feather row (VCA): "Do not pull it: VCA does not recommend pulling a blood feather at home, and even in clinic it is a last resort." is now "Do not pull it: pulling is not a home procedure, and even in clinic it is a last resort."
- Page 25, molt (Merck): "Merck's picture is a full molt at least annually, with many birds also running a smaller partial molt about six months after the main one." is now "Expect a full molt at least once a year, and in many birds a smaller partial molt about six months after the main one."
- Page 26, polyuria row (VCA): "and VCA notes polyuria is often the first sign of kidney damage from zinc." is now "and polyuria is often the first sign of kidney damage from zinc."
- Page 26, undigested seed row (Merck): "Always abnormal, and Merck lists whole seed in the droppings as a sign of avian gastric yeast," is now "Always abnormal, and whole seed in the droppings is a sign of avian gastric yeast,"
- Page 26, gastric yeast box (Merck): "Merck lists it as a sign of avian gastric yeast, Macrorhabdus ornithogaster, and names cockatiels among the species it most affects;" is now "It is a sign of avian gastric yeast, Macrorhabdus ornithogaster, and cockatiels are among the species it hits hardest;"
- Page 27, quarantine (Merck): "For an aviary or an established group, Merck's figure is 90 days with testing," is now "For an aviary or an established group, make it 90 days with testing,"
- Page 34, generator (CDC, CPSC): "A generator runs outside and at least 20 feet from any door, window or vent, the figure from the CDC (US Centers for Disease Control and Prevention), and the CPSC (US Consumer Product Safety Commission) rules out running one in or near an enclosed space, so an open garage door does not qualify." is now "A generator runs outside, at least 20 feet from any door, window or vent, and never in or near an enclosed space: an open garage door does not make a garage safe."

Kept on purpose: page 26, "one case series found it more often in cockatiels than
budgerigars". It names no outside source, so it is outside this pass.

**Glossary pointers repointed to the sources page**

- CDC and CPSC: Page 34 is now Page 40 (page 34 no longer names either).
- NHLBI: Page 7 is now Page 40.
- VCA: Page 10 is now Page 40.
- MSD already pointed at page 40. No definition was shortened. Photoperiod still points at
  page 7, which still uses the word.

**Version**

- Cover badge and colophon: Version 1.2 is now Version 1.3 (Oct 2026).
- Version history: added the 1.3 row, "Outside sources named in the care text rewritten as
  plain statements; every source is still credited on page 40."
- Rendered to rebuilt/Cockatiel_Care_Package_v1.3.pdf; v1.2 left in place.
