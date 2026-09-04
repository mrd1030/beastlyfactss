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

---

## 2.1 corrections pass, 4 September 2026

A cross-check of the whole package against the bird articles published since
2.0, primarily the fifteen in commit `42fd86f` plus the five cross-species bird
guides that landed the day before it. No new pages of content, one structural
change, and thirteen pages touched. Guide version 2.0 to 2.1, template still t3.

The articles checked against: `bird-pellet-conversion-guide`,
`bird-sexing-weight-body-condition-guide`, `bird-wing-clipping-guide`,
`bird-chronic-egg-laying-guide`, `bird-feather-loss-and-molt-guide`,
`bird-emergency-travel-guide`, `bird-body-language-guide`,
`bird-first-aid-kit-and-grooming-guide`, `choosing-a-pet-bird-guide`,
`bird-household-hazards-guide`, `bird-photoperiod-sleep-guide`,
`bird-quarantine-guide`, `bird-droppings-guide`, `avian-gastric-yeast-guide`.

### The structural change: two reference pages, not one

The sources page overflowed by 519 px once the new citations went on, so the
back matter split into **page 38, Sources & Further Reading** and **page 39,
Where the Sources Disagree, Version History & About**. That is the shape
`TEMPLATE_GUIDE.md` already prescribes as the default for a bird package that
sources properly, and it is what Cockatiel 1.0 and Cockatoo 1.0 already do. The
guide went from 38 pages to 39. No existing page number moved, because the split
is at the very back.

### The CSS pass came first, and it did the work again

Twelve pages were tight or overflowing after the content edits. Porting the
Cockatiel head values into this file (page padding 0.56/0.60/0.50, line height
1.36, `p`/`li` at 9.9pt, `td` padding 3.7pt, `table` 9.4pt, callouts 7/11pt and
9.6pt/1.36, `check-item` 3.2pt/9.5pt, `h2.h` 12.4pt with 7.5/2.5 margins,
`section-title` 18pt, `table.dense td` 2.2pt/1.26) cleared **eleven of the
twelve** on its own, and only the sources page still needed the split. The
lovebird head was the loosest of the four bird files because it was the first
one built; it now matches Cockatiel. Third build running where the CSS pass beat
every content change combined.

Final measurement: all 39 pages clear, minimum 19 px free (page 9).

### Pages changed, old text and new

**Page 7, light and sleep.** Covering demoted, and two figures added.
- Old: "Cover the cage with a plain breathable cover, or move it to a quiet room at a fixed bedtime."
- New: "Moving the cage to a quiet, dark room at a fixed bedtime is the reliable fix. A cover on the everyday cage helps some birds, but UC Davis's avian behavior guidance is that covering may not give a bird optimal rest on its own, because a cover stops the light and not the television or the people walking through."
- Old: "Routine care is 10 to 12 hours of darkness."
- New: adds Merck's "more than 12 hours of light" as a documented risk factor for excessive laying, and LafeberVet's 8 to 10 hours beside VCA's 8 as the intervention range.

**Page 8, household hazards.** Three fixes.
- Old: "PTFE also turns up in some irons and ironing board covers, self-cleaning oven cycles, certain space heaters and heat pumps, and some heat lamps and hair dryers."
- New: "Merck also names irons and ironing board covers, some self-cleaning ovens, heating elements in some reverse-cycle heat pumps, and some heat lamps." The old line attributed space heaters and hair dryers to a veterinary source that does not list them.
- Added a carbon monoxide detector line to the airborne paragraph, "lead tastes sweet, so a bird that finds it keeps chewing" to the proofing checklist, and changed "A cat scratch is a same-day vet visit" to "Any cat contact is a same-day vet visit: Pasteurella can turn septic within hours."
- Avocado now carries persin, the greater sensitivity of smaller birds, and the roughly 12-hour onset of respiratory distress. The same detail went onto the never-feed row on page 12.

**Page 9, one bird or two.** The hand-raised row gained the tradeoff it was missing: Schmid, Doherr and Steiger (2006) on hand-reared parrots imprinting on people, becoming socially dependent, and showing more aggression, feather picking and stereotyped behavior than parent-reared birds. Put in the table cell rather than a callout because this page has the least headroom in the guide.

**Page 10, diet and conversion.** The weighing instruction was wrong.
- Old: "Weigh the bird before you start and every few days through the change, and stop and reassess if weight drops."
- New: daily weighing before the first feed, Lafeber's 12-hour limit for a small bird going without food, and the 10% drop threshold that means stop and call a vet.
- Added VCA's stall valve as a third schedule row: hold at 20% seed and 80% pellets rather than forcing the last step.

**Page 15, wing clipping.** Two changes, one of them a real error.
- Added Merck's method: four to seven of the outermost primaries on both wings, cut below the coverts, secondaries left alone, fewer feathers on a heavier bird, and never one wing only.
- Old: "Apply gentle pressure with gauze or cornstarch... A feather that keeps bleeding usually needs pulling at the base, which is a vet job, not a home one."
- New: firm, steady pressure; powder on the exposed broken tip and never into an open follicle; vet at two to three minutes; and VCA's actual position, that pulling a blood feather at home is not recommended and is a last resort even in a clinic. The old text framed pulling as the normal next step.

**Page 16, sexing, weight and body condition.**
- Old: "weigh at the same time of day once a week."
- New: daily, before the first feed, citing Orosz for the gram scale and the written chart. The table row "Weekly variation" became "Day-to-day variation."

**Page 17, hens and chronic egg laying.**
- Old: "a full incubation cycle, generally 21 to 28 days."
- New: 18 to 24 days, LafeberVet's species figure, with a line saying explicitly that this is the species number rather than the general parrot range, because the bird's own biology decides when she gives up on a clutch.

**Page 18, egg binding.** Two signs added and the warming figure fixed.
- Added an egg visible at the vent or tissue prolapsing, and VCA's 48-hour marker: no egg passed in 48 hours by a hen known to be laying is enough on its own.
- Old: "keep her warm, dark and quiet."
- New: 80 to 85 F (27 to 29 C), named against LafeberVet's 80 to 90 F clinical range and VCA's 75 to 80 F for a recovering bird, plus the signs of overheating (flat sleek feathers, wings held out, open-mouth breathing) that no page carried before.

**Page 20, quarantine.**
- Old: "A minimum of 30 days apart, and 45 to 60 is better in a multi-bird house."
- New: 30 days as the public-health floor, and Merck's 90 days with testing for an aviary or an established multi-bird house, because an infected adult can shed polyomavirus intermittently for up to 90 days. The 45 to 60 figure was invented rather than sourced.

**Page 21, supportive care.** The warming line matched to page 18 and page 27.
- Old: "a quiet, draft-free room in the upper 70s to low 80s F (about 25 to 28 C)."
- New: the same 80 to 85 F wording, both sources named, overheating signs included.

**Page 24, molt.** Added Merck's picture of a full molt at least once a year with many birds running a smaller partial molt about six months later.

**Page 25, droppings.** Three additions.
- Polyuria row now carries VCA's point that polyuria is often the first sign of kidney damage from zinc, pointing back to page 8.
- Undigested seed row now names avian gastric yeast, which is what Merck lists whole seed in the droppings as a sign of, and tells the reader to weigh the bird.
- Added that one noticeably larger dropping first thing in the morning is normal.

**Page 27, emergency card.** Warming row moved from 77 to 82 F to 80 to 85 F,
matching pages 18 and 21. "Bleeding that does not stop with gentle pressure"
became "with two to three minutes of firm, steady pressure."

**Page 30, symptom quick reference.** Blood feather row rewritten to match page
15: firm steady pressure, powder on the broken tip and never in the follicle,
vet at two to three minutes.

**Page 32, outages and travel.** Two changes.
- Added the CDC's 20 feet from any door, window or vent for a generator, and the CPSC's point that "near" an enclosed space is also excluded, so an open garage door does not qualify.
- Old: "a hand warmer wrapped in a towel and taped outside the carrier."
- New: a wrapped hot water bottle set near rather than against the carrier, a carbon monoxide detector in the kit, and an explicit note that chemical hand warmers are out because some vent fumes. The old line contradicted the budgie package, which already said not to use them.

**Pages 38 and 39, back matter.** Sources gained LafeberVet's lovebird sheet and
emergency care page, VCA's wing clipping, blood feather, egg binding, sexual
behaviour and nursing care pages, Lafeber's Lamb and Orosz pieces, the NASPHV and
CDC compendium, the UC Davis behaviour handout, CDC and CPSC for the outage page,
and Schmid, Doherr and Steiger. A line was added naming the thirteen cross-species
bird articles that now carry pages this package used to source externally.

Three disagreements were added to the block on page 39:
- **Adult weight.** The package prints 40 to 60 g from the site's own guides. LafeberVet gives 45 to 70 g, mean 50. Both printed, neither picked.
- **Captive life span.** The package prints 10 to 15 typical and about 20 at most, from VCA and the cost guide. LafeberVet gives a mean of 15 with up to 30 reported.
- **Room temperature.** Page 7 prints 65 to 80 F from the site's cage-setup guide; LafeberVet gives 70 to 80 F as generally acceptable.

### Verified and deliberately left alone

- **Oxytocin on page 18**, "may be used to induce contractions and can be repeated once." Checked against Merck's dosage table, which gives oxytocin at 5 to 10 U/kg IM, "may repeat once." Correct as printed. Merck is now cited for it.
- **The 40 to 60 g weight and the 10 to 15 year life span** on pages 4 and 16, kept and recorded as disagreements rather than changed.

### One correction after review

The page 27 card carried the corrected 80 to 85 F figure but not the overheating
signs that pages 18 and 21 gained, and that the other three packages' cards
ended up with. Added as a sub-line on the card row, so all four cards now warn
when to stop warming as well as what to warm to. Re-rendered over the same 2.1
file. All 39 pages clear, minimum 19 px.

### Still only in this PDF

Carried by the package with no site article behind them: the 40 to 60 g weight
range, the note that chronic laying probably has a genetic component in small
birds, the claim that rearranging cage furniture genuinely reduces laying, and
the fair-to-good outlook for a promptly treated egg-bound hen. The full-spectrum
lamp and vitamin D3 claim on page 7 also has no source behind it and needs an
external check before the next edition. There is still no lovebird feeding guide
on the site, so the diet split and the produce tier charts on pages 10 to 12
remain PDF-only.
