# Russian tortoise v3 notes

Written during the 2.0 rebuild (Sep 2026). 1.0 was 21 pages on the pre-t3 layout; 2.0 is
37 pages on t3, built from fragments in `source/russian-tortoise-src/` across six page
files.

Read this before starting v3, along with the Russian Tortoise 2.0 block in
`TEMPLATE_GUIDE.md`.

## Page count: 37, against a 34-page reptile skeleton

Three pages the canonical reptile skeleton has no slot for, and all three earned it:

- **Outdoor housing and escape-proofing.** No other reptile in the series is routinely kept
  outdoors, and for this species an outdoor pen is the standard experienced keepers aim for
  rather than a bonus. It also carries the escape and dog-attack material, which had nowhere
  else sensible to go.
- **Weeds, grazing and growing your own.** The reptile skeleton's page 10 is feeder insects,
  which drops entirely for a herbivore. What replaced it is worth more than the page it
  replaced: this is the page that turns a $200-a-year salad bill into free food, and no
  other package in the series has an equivalent.
- **The legal page**, following the Tarantula 2.1 precedent. `russian-tortoise-legal-guide.mdx`
  is one of the best articles on the site and the four-inch rule is misquoted by nearly
  everyone, so a page that quotes the regulation and its business exception is genuinely
  useful rather than filler.

Two skeleton pages were merged rather than kept apart. **Thermostats, timers and UVB
distance** (skeleton page 7) folded into the UVB page, because for this species the
equipment story is short and it belongs with the fixture it controls. **Brumation, shed and
behavior** (skeleton page 20) became a brumation page alone, with shedding moved to the end
of the minor-conditions page, because a tortoise does not shed the way a snake or a lizard
does and the shed material is three sentences.

## Free space per page, final measurement

```
p2=74  p3=217  p4=105  p5=~30  p6=34  p7=16  p8=42  p9=27  p10=51  p11=48  p12=86
p13=33  p14=103  p15=47  p16=103  p17=20  p18=39  p19=46  p20=16  p21=20  p22=16
p23=45  p24=53  p25=80  p26=161  p27=69  p28=16  p29=119  p30=16  p31=133  p32=16
p33=90  p34=157  p35=45  p36=264  p37=146
```

Pages with real headroom for v3: 36 (glossary), 3 (howto), 26 (checklist), 34 (owner log),
31 (routine), 29 (first 30 days), 14 (mistakes), 16 (sexing).

Eight pages needed trimming, more than the budgie or the guinea pig, and the reason was the
same each time: this species has a lot of hard numbers that all have to be printed with both
units. The head CSS inherited from Budgie 2.0 is doing the heavy lifting and should not be
loosened.

## Parked blocks

### Cut from the weeds page (page 12)

The foraging-as-enrichment section, roughly 60 words, removed because page 14 already covers
scatter feeding. Reinstate only if page 14 loses it:

```html
  <h2 class="h">Foraging as enrichment</h2>
  <p>Scatter greens in several places rather than piling them, tuck them into the folds of a crumpled towel or a forage mat, and move the locations every day or two. A tortoise that walks the enclosure searching is a tortoise getting exercise, and exercise is a large part of the answer to the weight and pyramiding problems on page {{P:mbd}}. It costs nothing and takes ten seconds longer than filling a bowl.</p>
```

### Cut from the budget page (page 28)

Four line items merged into two, and the where-to-save callout demoted to a muted paragraph.
The originals, with their own figures:

```html
    <tr><td>Halogen basking lamp and fixture</td><td>$20</td><td>$45</td></tr>
    <tr><td>Dimming thermostat or lamp dimmer</td><td>$30</td><td>$60</td></tr>
    <tr><td>Digital probe thermometer and hygrometer</td><td>$15</td><td>$30</td></tr>
    <tr><td>Substrate, initial fill</td><td>$25</td><td>$60</td></tr>
    <tr><td>Water dish and feeding tile</td><td>$12</td><td>$25</td></tr>
    <tr><td>Digital kitchen scale, grams</td><td>$12</td><td>$25</td></tr>
```

### Added rather than cut

Page 5 came in at 322px free once the diagram was in, which is a half-empty page by the
standard in `TEMPLATE_GUIDE.md`. It was filled with a four-point list on what a table
actually needs (wall height, sealed floor, a genuinely cool end, lamp clearance) and a
callout on why hatchlings do not need a smaller enclosure, which is a common piece of bad
advice that had no other home in the package.

Nothing was removed that carried a figure, a dose or a threshold.

## Pages wanted and never drafted

1. **Choosing a tortoise, and where from.** The strongest candidate for v3. Captive-bred
   against wild-caught, what a healthy tortoise looks like in the seller's enclosure, the
   questions to ask, why an animal with no hatch date is a red flag, and the rescue route,
   which for a forty-year animal is a genuinely good option. Currently one callout on page 21
   and one on page 25.
2. **A soaking page.** Soaking is mentioned on five separate pages and explained fully on
   none. Method, water depth and temperature, frequency by age and season, what to look for
   in the water, and what to do with a tortoise that panics in it.
3. **Life stages.** Hatchling rearing, the first year, and old age, which for this species
   means a tortoise that may outlive its keeper. Currently scattered across pages 11, 12 and
   16.
4. **Shell anatomy and reading a shell.** Page 16 and page 18 both reach for it. A labeled
   scute diagram would let both pages say more in less space, and it is the single clearest
   thing a diagram could add to this package.
5. **Cohabitation, in detail.** Page 10 gives the rules in six lines. There is a longer piece
   to write on group dynamics, monitoring, and the honest answer that most owners who add a
   second tortoise are solving their own problem rather than the animal's.
6. **Winter, indoors, without brumation.** The package treats the brumation decision fully
   and then says little about what an active winter actually costs and involves: heating a
   basking spot in a cold room, the electricity, the shorter photoperiod, and the appetite
   drop that happens anyway.
7. **The succession plan.** Named as a problem on pages 4 and 32 and never given a page.
   Who takes the animal, how to write it down, what rescues actually accept, and how to hand
   over a forty-year animal with its records intact. No other package in the series needs
   this and this one genuinely does.

## Cut list for v3, in priority order

Cut first, if something has to go:

1. The supplement and soak grid on page 35, which duplicates the routine page.
2. The seasonal table on page 31.
3. The enrichment tick-list on page 35, if the equipment log ever needs the room.

**Do not cut, in this order:** page 7 (UVB), page 5 (enclosure), page 18 (MBD and
pyramiding), page 13 (the never list), page 19 (respiratory and herpesvirus), page 23
(brumation), page 21 (parasites and quarantine). Those seven are the product. Page 7 is the
one that decides whether the animal's shell forms correctly, and page 13 is the one that
decides whether it deforms from the other direction.

## 5 September 2026: the cross-species article cross-check, v2.0 to v2.1

Audited against the cross-species reptile and chelonian articles published 3 and
4 September 2026. This package changed more than any other in the set: eleven
pages, and the brumation page was corrected in six separate places. All edits are
in the fragments, rebuilt with `build.py`. Old text and new text below.

**Page 5, housing.** Gained the "When outdoors is not an option" paragraph
briefly during fitting and then gave it back to page 9, where it belongs. Net
change to page 5: none.

**Page 9, outdoor housing.** The buried-barrier row read "at least 12 in (30 cm),
and ideally 30 cm", which reads as though 30 cm were deeper than 12 in. Rewritten
to cite VCA's 6 to 12 in range and say build to the deep end. Added a **water
row**, which the pen table did not have at all: a dish with a sloped edge it can
walk out of, and VCA's actual threshold, which is depth rather than size, never
higher than the tortoise's own head. The overhead-cover row gained the Segura et
al. 2020 finding: 75 mm (about 3 in) of shell is the size above which ravens
stopped being a threat, and on open ground ravens took every recorded young
tortoise death. Raccoons added to the predator list. The fifth of the five ways
an outdoor tortoise dies was "Pesticide"; it is now "Pesticide, and the wrong
plant", because the article's fifth cause is an ornamental growing in the pen and
the package had no check for it.

**Page 10, handling.** The *Salmonella* section gained the two things it was
missing: that one negative test clears nothing because shedding is intermittent,
and that the sink rule covers a bathroom sink and a bath people use as well as a
kitchen sink, with a dedicated plastic tub as the answer. Risk groups extended
from children under five and the immunocompromised to include adults over 65 and
pregnancy. The CDC's actual line for under-fives added: not to handle reptiles or
their environments at all.

**Pages 8, 13, 24, 26, 29 and 35, soaking.** "A weekly soak of 20 to 30 minutes"
became "at least 20 minutes, two to three times a week" for an indoor tortoise, in
all six places. The Tortoise Trust ties that frequency directly to reducing
bladder-stone risk, and this package leans on soaking harder than on anything else.

**Page 12, weeds.** "several of them are lethal" was an unsupported
reptile-specific claim. Replaced with the honest version: the toxicity data behind
those lists comes from dogs, cats and horses and reptile thresholds are barely
studied, which argues for more caution rather than less. Added the buttercup field
marks, glossy waxy flowers against a dandelion's matte, and hand-lobed leaves
rather than a flat rosette, because buttercup grows exactly where you pick clover.
The 80-plant wild diet figure stays, cited to the Tortoise Trust.

**Page 15, sexing.** The male plastron read "Barely convex, sometimes very
slightly dished", which is self-contradictory and leads with the wrong word.
Merck gives concave in males and flat in females, and calls the plastron the most
useful cue on an adult. Corrected to "Concave, dished inward", with the female
row noting the flat plastron leaves room for eggs to pass.

**Page 16, eggs.** Two corrections. The dystocia list included going off food, and
triggered on "trying to nest for more than a couple of days"; VCA's distinction is
that a healthy gravid female often stops eating for days or weeks and stays
bright, active and alert, and a chelonian can hold a clutch for weeks waiting for
a nest site she will accept. Rewritten around the bright-active-alert test rather
than a clock. The nest-site depth of "8 to 12 in (20 to 30 cm)" came out: the
article declines to give a figure in inches and says so, because it scales with
the animal, so the body-length rule stands alone. Added that an unmated female is
the **higher** retention risk, not the safer case, since it is usually fertilized
eggs that get laid.

**Page 19, herpesvirus.** "mortality can approach 100%" was the Tortoise Trust's
figure with nothing published behind it. Page 19 now prints the documented one:
Marenzoni et al. 2018, 75% of twenty exposed tortoises, fifteen animals, described
as one outbreak rather than a rate, with the Tortoise Trust's higher figure named
beside it. Added the detail that makes the case: the source tortoise had already
completed a full year of quarantine and showed nothing for three years beyond an
occasional wet nose. Signs extended with ocular discharge, drooling, regurgitation
and pneumonia, and the mild-conjunctivitis presentation added, which is the whole
reason symptom-watching is not screening. *Mycoplasma* gained its own
asymptomatic-carrier point.

**Page 21, quarantine and *Hexamita*.** "Three to six months is the figure most
tortoise keepers use" became "Six months, minimum", which is the EAZWV floor, with
the 2018 outbreak facility's full year named and six months to a year given as the
real range. The vet row changed from "ask about screening" to testing as the point
of the window: an exam at each end, a fecal test, and PCR or serology where
available with the serology repeated some weeks later. The *Hexamita* metronidazole
dose of 260 mg/kg **was removed**. It traces to the Tortoise Trust,
`russian-tortoise-health-issues-guide.mdx` was expanded with a *Hexamita* section
that deliberately declines to print a dose, and a mg/kg figure in a consumer care
package is not something to publish when the site's own article will not. Replaced
with the drug name and the reason a vet sets the dose. Added the early sign the
page did not have: abnormally watery or jelly-like urine with soft droppings.

**Page 22, cloacoliths.** Folded in the bladder-stone material from the expanded
health-issues article: a 2021 survey of 101 tortoises put Russian tortoises at
8.9% of urolithiasis cases, every stone analyzed pure ammonium acid urate, with
straining and reduced appetite the commonest signs and some animals showing
nothing until the stone was large.

**Page 23, brumation. Six corrections, and the first is the one that mattered.**

1. **The weight-loss figure was inverted.** The page read "A loss of more than
   roughly 1% of body weight a month ends the brumation early." About 1% a month
   is the **normal** rate: RVC's example is a 1,000 g tortoise losing around 10 g
   a month. An owner following the old text would abort a healthy brumation. The
   action point is **total** loss past about 7%, which is the more conservative
   of the two published thresholds.
2. **Temperature.** "40 to 55&deg;F (4 to 13&deg;C)" became "35 to 50&deg;F (2 to
   10&deg;C), aiming for 41&deg;F (5&deg;C)", with below 35&deg;F or above
   60&deg;F named as unsafe. The old top of band was above the published ceiling.
3. **Duration.** "for 2 to 4 months" became a ceiling rather than a target: 10
   weeks at most for a small animal, 14 for a large one, waking from 6 weeks on
   being normal. Four months exceeded every sourced figure. Changed on pages 4,
   23, 26 and the glossary together.
4. **The fast.** "two to four weeks" became "one to three weeks", the longer end
   for a bigger animal, with the 70 to 80&deg;F hold through the fast and the
   heat coming off about a week before brumation rather than with the food, plus
   the roughly 5&deg;C a week ramp down.
5. **Age floor.** "Under about two years old" became "Under about four years old".
6. **Vet check.** Made an annual autumn job with a fecal parasite screen, and the
   overwinter-warm alternative added for an animal that fails the list, never
   below 60&deg;F (15&deg;C).
   Also added the fridge details the page lacked: a probe thermometer rather than
   the dial, and a bowl of water in the bottom because a fridge runs dry.

**Page 24, urates.** "Yellow or orange suggests concentration or liver
involvement" was the wrong organ. Urates are uric acid from protein digestion, and
the article's chain is dehydration, then a urate or kidney problem, then gout.
Corrected.

**Page 32, succession.** The callout named the problem and stopped at "name
someone". Now carries what a plan actually is: the carer has to agree and know the
animal, be written into the estate papers with a second name behind them, that
money does not travel with a pet because the law treats an animal as property,
that a pet trust does and all fifty states and DC have pet trust laws, the care
file, and rehoming through a rescue rather than a free listing.

**Pages 37 and 38.** The single reference page split into a sources page and a
"Where the sources disagree, and version history" page, taking the package from 37
to 38. The sources table gained EAZWV, Marenzoni et al. 2018, the Royal Veterinary
College, the Texas Veterinary Medical Foundation, the CDC and Segura et al. 2020.
The disagreement table is new and carries five entries: the herpesvirus mortality
figures side by side, the enclosure-size and humidity disagreements that were
previously only stated inline, fruit, and the *Hexamita* dose this edition stopped
printing.

## Parked at 2.1

### Cut from the brumation page (page 23)

The closing callout, removed because both of its facts are already protocol steps
2 and 4 and the page needed the room for the corrections above. A one-line muted
pointer replaced it. Reinstate if the page ever gains room:

```html
  <div class="callout never">
    <span class="label">Two things that kill brumating tortoises</span>
    <strong>Food left in the gut.</strong> The fast is not optional. <strong>Temperature that drifts.</strong> Too warm and it burns the fat and liver reserves it needs to restart; below freezing and it loses its eyesight or its life. A brumation with no thermometer on it is a gamble.
  </div>
```

Nothing else was removed. Everything else on the six over-running pages was
tightened word by word, and the callouts on pages 21 and 22 went to
`margin:6pt 0; padding:7pt 11pt`. No figure, dose or threshold was lost to
fitting. Final measure: 38 pages, minimum 15 px free on pages 9 and 10.

**Still in the PDF with no site source**, checked: the ReptiFiles 8x4 ft enclosure
figure and per-animal space, the UVB mounting distances on page 7, the burrow
temperature figures, the maximum verified 22 cm size, the 4 in sexing threshold,
the ninety-days-a-year wild feeding pattern, and the itemized budget. The
brumation protocol, the herpesvirus mortality figure, the weed identification
notes, the sexing cue set, the nest-site rule and the cloacolith material are all
now carried by site articles and are no longer package-only.
