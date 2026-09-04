# Lovebird v3 notes

Written during the 2.0 rebuild (September 2026), the first bird package on the t3
template. Read this before starting v3, along with the **Lovebird 2.0** block under
**Site content gaps by package** in `../TEMPLATE_GUIDE.md`.

## What 2.0 is

38 pages, guide version 2.0, template t3, built from `../source/lovebird-src/`. It
replaces the 21-page 1.0 edition, which was pre-t3. Source fragments, a build script that
owns every page number, and a README explaining both live in that directory.

## Page count: 38, and it was a floor, not a choice

The count came from the measurement script, not from judgment. 37 was the first draft and
the egg page split in two during the overflow pass, because chronic laying and egg binding
are separate jobs for the reader: one is a management protocol you run for weeks, the
other is a decision you make in ten minutes. Neither half fitted on a shared page once the
calcium material was in.

The template guide's bird row predicted 32 to 36. That estimate was made before any bird
package existed and it is low. **Take 36 to 39 for a small parrot.** What the reptile
skeleton has no slot for, and what a bird genuinely needs:

- Household hazards and bird-proofing. PTFE fumes alone justify the page, and no other
  class in this series has a hazard that kills with no warning and no visible cause.
- Light, sleep and photoperiod, as husbandry rather than as a lighting note. Day length is
  the main lever on hormonal behavior, which makes it a health page in disguise.
- The pairing decision. Species-specific, but every social bird will need some version.
- Wing clipping. Every new owner is asked about it in week one, usually by someone selling
  the trim, and the site says nothing at all.
- Molt and hormonal seasons, replacing brumation and shed.
- Two egg pages rather than one, for any hen-laying species. Lovebirds, cockatiels and
  budgerigars are the three named most often for chronic laying, so this is not a
  lovebird-only need.

What the reptile skeleton has that a bird does not need at all: the thermostat and UVB
distance page (page 7 becomes light and sleep), the feeder insect page, the substrate
page (a paper liner is two sentences), and the Salmonella callout.

## Nothing was cut for space

Worth stating plainly, because the usual purpose of this file is to hold what got cut.
The overflow pass moved about a dozen blocks between pages and tightened the CSS; no
paragraph, table row, figure or callout was dropped to make the guide fit. The one thing
removed from 1.0 was its closing footer line, "No external links or website CTAs appear in
this document," which is an internal production note that should never have shipped to a
buyer. `TEMPLATE_GUIDE.md` already names it.

So there are no parked blocks below. If v3 needs room, the cut list at the end of this
file is where to start.

## Where the pages ended up on space

After the final pass every page cleared with at least 16 px free. The tight ones, and
therefore the ones that will overflow first if anything is added:

| Page | Free px | Note |
| --- | --- | --- |
| 9, One bird or two | 16 | Holds a 3-row comparison table and two callouts. Already at 8.5pt |
| 23, Nutritional disease, mites and injuries | 17 | Six conditions on one page. The obvious split if v3 needs a page |
| 17, Hens, hormones and chronic egg laying | 18 | Three callouts. The trigger table is the part that must not shrink |
| 24, Molt, hormones and seasonal behavior | 29 | Absorbed bathing and night frights during the pass |
| 5, Cage size, bar spacing and placement | 32 | The diagram sets the floor here |

The pages with real headroom, if v3 needs somewhere to put a block: 13 mistakes (179),
22 feather plucking (136), 19 health red flags (125), 27 budget (114), 18 egg binding
(99), and 15 wing clipping (94).

## Ideas raised and never drafted

In rough priority order. Each would need sourcing before it goes on a page.

1. **Choosing where the bird comes from.** Hand-raised versus parent-raised is named in
   the cost guide as the decision that sets how tame the bird gets, and it sits alongside
   breeder versus shop versus rescue, what questions to ask, and what a healthy bird looks
   like in the cage you are buying it from. The hamster and rabbit packages both needed a
   version of this page; birds need it more, because the hand-raising question has no
   mammal equivalent. Probably the single strongest addition available for v3.
2. **Which lovebird.** Nine species in the genus, and the peach-faced, Fischer's and
   masked are not interchangeable in size, temperament or noise. Fischer's is Near
   Threatened, which raises acquisition questions the other two do not. This is the bird
   version of the species-choice page the two mammal builds both needed, and it is
   currently one line in the quick profile.
3. **Training protocols, properly.** Page 14 covers taming and page 13 lists training as
   enrichment, but neither gives a step-by-step for target training, recall, or a stationing
   cue. Recall in particular is a safety behavior for a flighted bird, and page 15 promises
   it without teaching it.
4. **Introducing a second bird, step by step.** Page 9 says buy a bonded pair rather than
   assembling one, which is good advice and also an admission that the package does not
   explain how to do the harder thing. Side-by-side cages, neutral territory, what normal
   negotiation looks like versus a real fight, and when to stop. The rabbit package logged
   the same gap for bonding; the advice does not transfer, but the page shape does.
5. **Grooming: nails, beak, and a first-aid kit.** Currently three scattered sentences.
   A page could carry nail trim interval and technique, when a beak needs a vet rather
   than a trim, restraint for a small bird, and a bird first-aid kit list (cornstarch,
   gauze, a carrier, a heat source, the vet's after-hours number).
6. **Talking, whistling and noise expectations.** The site's FAQ is honest that lovebirds
   are not talkers, and noise is one of the top reasons small parrots get rehomed. Worth a
   page that sets expectations before purchase rather than a paragraph on page 24.
7. **A one-page "is a lovebird right for you" quiz**, ahead of the quick profile. Ten
   questions covering daily hours, noise, a 15-year commitment, a nonstick-free kitchen,
   and whether anyone in the house is immunocompromised. Cheap to write, and it would sit
   naturally on page 3.

## Proposed gaps, carried from the build

These are also in the gap log in `TEMPLATE_GUIDE.md`, where they drive site articles.
They are repeated here because they drive the *next edition of the PDF* too, and because
they still need sourcing before either use.

- Household hazards for pet birds. Cross-species, and the highest-value single article the
  bird set could have.
- Photoperiod, sleep and hormonal management. Cross-species for parrots.
- Wing clipping, flighted versus clipped. Cross-species.
- Quarantining a new bird. Cross-species, and it closes the same gap the fish and reptile
  sets logged, though the advice does not transfer between classes.
- Reading bird droppings. Cross-species.
- Converting a seed eater to pellets. Cross-species, and one of the two or three things
  every new small-parrot owner has to do.

## Cut list for v3, in priority order

If v3 has to lose pages, in this order:

1. **Page 15, wing clipping.** Only if the site has published a clipping article by then
   and the page can become a half-page pointer. It is a genuinely useful page and this is
   still the first thing to go.
2. **Page 24, molt and seasonal behavior**, folded into page 22 (feather plucking) as a
   "normal versus not" section. The quick differentiator callout is the part that must
   survive.
3. **Page 12, fruit and extras**, folded into page 11 (vegetables) at 8pt. It is the
   thinnest of the three food charts.
4. **Page 6, perches and dishes**, folded into page 5 (cage). Only with the diagram
   redrawn smaller.

**Do not cut, in any version:**

- **Page 8, household hazards.** The PTFE page is the one most likely to keep a bird
  alive, and nothing else in the package competes with that.
- **Page 9, one bird or two.** The decision the whole species hinges on, and the reason a
  buyer picks a lovebird guide over a generic parrot one.
- **Pages 17 and 18, the egg pages.** Chronic laying and egg binding are the commonest way
  a well-meaning owner loses a hen.
- **Page 10, diet.** Half of section 03 traces back to a seed bowl.
- **The fillable pages, 33 to 36.** Owner log, equipment and vet log, sitter sheet and
  enrichment log. They are the reason a buyer prints the thing.

## One process note for whoever builds the next bird package

A reversed string slice during the overflow pass silently duplicated a section of the
light page rather than removing it, and the page measurement was the only thing that
caught it. The build script's duplicate-key check catches a repeated *page*, not a
repeated *block inside* a page. Assert that a cut's start index precedes its end index,
and grep for a distinctive sentence from every block you move. This is the same class of
error as the hamster duplication, arriving by a different route.
