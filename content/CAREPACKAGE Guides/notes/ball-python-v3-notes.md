# Ball Python Care Package: notes for v3

Notes for **2.1 (September 2026, 34 pages)**, built on template t3. Briefly mislabelled
3.0 in September 2026 and put back; see TEMPLATE_GUIDE.md.

Read this before touching `source/ball-python.html`.

## The parked blocks from this package are NOT recoverable, and here is why

This is the one package in the series where content was genuinely cut to fit a page count,
and it is also the one package whose cuts cannot be reproduced here as real markup. Both
facts have the same cause, and it is worth writing down so nobody goes looking.

**What happened.** The first build of this package on the t3 template came in at 33 pages,
with substrate and handling sharing a single page. Getting them onto one page meant cutting
handling technique, session frequency, and settling-in guidance. The overflow measurement
was clean, so nothing looked wrong.

**What fixed it.** The trimmed detail was noticed and the package was rebuilt. The cut
content was restored in full and the shared page was split in two, taking the package to
34 pages. That rebuild is the reason the template guide now says, in "Page count is a
target, not a budget", that Ball Python v2.0 had to be rebuilt precisely because husbandry
detail got trimmed to fit.

**Why the markup is gone.** The cuts and the restoration both happened before this notes
file existed, and `source/ball-python.html` was first committed to git only after the
restoration. There is therefore no commit, no stash and no reflog entry holding the
33-page state, and this session's own record of the edits was compacted away. Per the rule
in the template guide, that is written down here rather than paraphrased from memory: a
parked block is only worth anything if it is the real markup, and reconstructing those
paragraphs from recollection would produce something that reads like the original without
being it.

**The practical consequence is nil.** Everything cut was restored, so nothing is missing
from 2.1. This section exists so that a future editor does not spend an afternoon looking
for a park file that was never written.

## Where 2.1 landed

34 pages, with a measured minimum of 20 px of headroom on the tightest page. **Not a
measured floor.** It is 33 pages plus the split that fixed the trimming, and it matches
the reptile skeleton's expected shape exactly, which is unsurprising given this is the
animal class the skeleton was drawn for.

## The "should anything move out of 2.1 and into here?" pass

Done, page by page, and the answer is **no**. Recorded with reasoning, because this
package is the one most likely to be asked the question again.

The three pages that looked like candidates:

- **Growth reference table (page 14).** Superficially the kind of context table that
  could be parked, and the goldfish notes park an equivalent. Keeping it, because unlike
  the goldfish version this one is load-bearing: the callout directly beneath it defines
  a vet visit as "a juvenile that stops gaining for 4 to 6 weeks" and "an adult that
  loses about 10% of its body weight", and both thresholds are meaningless without the
  expected ranges above them.
- **Sexing by probing and popping (page 14).** Reads like information the owner cannot
  act on, since the page tells them not to attempt it. Keeping it, because that is the
  point: a first-time owner who has read why probing injures a snake is a first-time
  owner who does not try it after watching a video.
- **The Kaufmann rack study paragraph (page 13).** The only citation in the package that
  could be summarised away. Keeping it, because it is the evidence for the single most
  contested claim in ball python keeping, which is that a rack is not an acceptable
  permanent home. Without the study it is an opinion.

Nothing else came close. This package was rebuilt once for exactly this reason, and
re-cutting it to save pages would repeat the error the rebuild corrected.

## Corrections made after v2.0, for the record

- **Ambient humidity, v2.1.** v2.0 said 55 to 70% baseline in six places. The ReptiFiles
  and Zen Habitats care sheets give 55 to 65% ambient, so all six were corrected. The
  70 to 80% shed range is unchanged. The site's `guides/snakes.js` had drifted the other
  way at 50 to 60%, and two comparison articles had drifted separately to the same wrong
  figure; all were corrected in the same pass.
- **Cool side.** `guides/snakes.js` said 76 to 80 degrees F against the MDX's 75 to 80.
  ReptiFiles gives 75 to 80, so the JS was corrected. The package was already right.
- **Outage floor.** Page 28 originally said 70 degrees F, contradicting both
  `reptile-emergency-plan-guide.mdx` and the package's own page 6. Corrected to 72.

## Ideas raised while writing v2.0 but never drafted

- **Morphs, and what they cost the animal.** The package says a normal is not a lesser
  snake and morphs are no easier or harder to keep, which is true of colour alone. It
  does not cover the neurological wobble in spider and related morphs, or the duckbill
  and kinking associated with some super forms. A buyer's page on which morphs carry a
  known welfare cost would change purchases, and it is the most conspicuous gap.
- **A shed-cycle timeline.** Blue phase, clearing, and the shed itself are described
  across pages 19 and 20. A single dated timeline showing what to change and when would
  serve better than prose, and would carry the humidity bump visually.
- **Rack-to-enclosure transition.** The package argues against racks and assumes the
  reader is buying an enclosure. Many buyers acquire a snake already rack-kept, and the
  move needs its own guidance on going slowly and expecting refusals.
- **A prey-size photo or diagram scale.** Prey width against snake width at the widest
  point is the rule, and it is a visual comparison currently made in words.
- **Feeding response and safety around it.** Tap training, hook training, and why a
  snake that has learned an opening lid means food is a bite risk. Currently one line in
  the handling page.
- **Brumation and seasonal cycling.** The package notes reduced appetite from roughly
  October to March and stops there. Whether to cool, and what a deliberate cycle involves,
  is not covered.

## If a future edition needs to be shorter

In the order I would cut, having reviewed it. **Read the top section first**: this is the
package that was already shortened once and had to be rebuilt.

1. **The 12-month planner** on the equipment log page, which is the most generic owner
   tool in the package.
2. **Sexing** from page 14, if and only if a site article exists to point at. It is
   already a logged content gap.
3. **The females, eggs and egg binding page (15)**, for a male-only edition. Not for a
   general one: a female owner who has never seen a male still needs it.

Do not cut: the thermostat and probe-placement page, the prey chart, the thawing and
refusal page, the humidity figures anywhere they appear, the substrate or handling pages,
the body condition cards, or any owner-tool page. The substrate and handling pages are
specifically the ones that were cut last time and had to be put back.

## 5 September 2026: the cross-species article cross-check, v2.1 to v2.2

Audited against the fourteen cross-species reptile articles published 3 and 4
September 2026. Nine pages changed. Old text and new text below, in page order.

**Page 7, thermostat type.** "Use a **dimming (proportional) thermostat** if you
run an overhead halogen" became "Use a **dimming thermostat** if you run an
overhead halogen". `reptile-heating-thermostats-guide.mdx` separates pulse
proportional from dimming as two distinct controller types, so the parenthetical
was conflating them.

**Page 7, clearance.** Added: "VCA puts any overhead source at least 4 to 6 in
(10 to 15 cm) above the highest spot the snake can reach, behind a screened top."
The page had no clearance figure at all.

**Page 7, second thermometer.** Added to the "Measure, don't assume" callout:
"Keep a second thermometer away from the thermostat's probe and read it daily: a
thermostat stuck on, or a probe that has slipped, gives no other warning." This
is the failure mode the article names as the dangerous one and the package did
not cover it.

**Page 9, Salmonella.** The shared four-package callout was rewritten from
`reptile-salmonella-hygiene-guide.mdx`. Old: "Healthy reptiles carry *Salmonella*
with no sign of it. Wash your hands with soap before and after handling, keep the
animal and its gear away from food-prep areas, and never clean dishes in the
kitchen sink. Children under five, pregnant people, and anyone immunocompromised
should not handle the snake." New text adds that one negative test clears
nothing, extends the sink rule to a bathroom sink and a bath people use with a
dedicated tub as the answer, adds not kissing the animal, adds adults over 65 as
the fourth risk group, and replaces the general handling restriction with the
CDC's actual line for under-fives, which is not to handle reptiles or their
environments at all.

**Page 11, freezer life.** "for no more than about six months" became the FDA
framing: food held at a steady 0 degrees F stays safe indefinitely but quality
falls, so work through stock rather than letting it stand a year. The six-month
figure had no source. Added the CDC prey-handling rules in the same callout:
dedicated containers and tongs, never the dish sink, wash hands afterwards.
Frozen feeder rodents are a documented human *Salmonella* source and the package
said nothing about it.

**Page 12, prey temperature.** Removed "The core should reach roughly 100 to
105&deg;F (38 to 41&deg;C)". The expanded `ball-python-feeding-guide.mdx`
deliberately declines to state a figure, Merck says only "at room temperature, or
preferably warmer", and the Zen Habitats care sheet the package already cites
says "lukewarm" with no number. Replaced with judging by touch, plus the warning
that too hot cooks the prey and can scald the snake.

**Page 14, sexing.** "Two soft clues exist. Adult males tend to have larger
cloacal spurs" became "Read nothing into cloacal spurs: the one measured
difference comes from a wild Bahamian boa population and says nothing about the
animal in your hands." Added ultrasound as the third route, which is documented
as reliable for snakes and carries no injury risk, and which the package had
omitted entirely while telling the reader not to attempt the other two.

**Page 14, adult length.** Added a note printing both sides: the ReptiFiles and
PetMD figures the table uses, and VCA's 5 to 6 ft at maturity. The sub-adult row
already matched VCA. Also stated plainly that the weight column has no veterinary
source, since `snake-sexing-growth-body-condition-guide.mdx` says outright that
no verified species-by-species snake weight ranges could be sourced.

**Pages 18, 19 and 31, quarantine.** "60 to 90 days" became "3 to 6 months" in
all three places, which is the Merck figure. The article is explicit that 60 to
90 days is the hobby floor and the veterinary literature runs longer. Page 18
also gained the VCA first exam within two weeks of pickup, with a fecal sample.

**Page 19, IBD.** "associated with arenaviruses" became "caused by
**reptarenaviruses**", and the boa against python difference was added: a boa can
carry it for months to years showing little, a python declines fast once signs
start. That difference is the practical argument for the longer quarantine window
and the page had it missing.

**Page 20, shed.** "clear again for two or three days before the snake sheds"
became "clear again one to two days before", matching
`reptile-shedding-complete-guide.mdx`. Soak time on pages 20 and 21 went from 20
to 30 minutes to 15 to 20, the same article's figure.

**Page 21, urates.** "Dehydration" became "Dehydration, and left uncorrected a
urate or kidney problem", with the gout link added to the action column.

**Page 21, fur row.** "Visible fur clumped and undigested" became "Fur in a solid
undigested clump. Loose fur and bone fragments are normal", because
`reptile-stool-urates-hydration-guide.mdx` lists fur and bone in snake stool as
normal and the old wording flagged the normal case.

**Pages 34 and 35.** The single reference page split into a sources page and a
version history page, per the rule in `TEMPLATE_GUIDE.md`. This appends at the
end and moves no existing page number. The sources page gained Merck, VCA, the
CDC, Iowa State CFSPH, the FDA, and the three papers behind the new sexing and
body-condition material, none of which the old page carried. A "Where the sources
disagree" block was added covering adult length, the unsourced growth weights and
the prey-warming temperature.

**Layout.** Contents row padding tightened to absorb the extra reference row.
Page 14 gained a `page14-tight` class shrinking the body-condition card padding.
Page 7 and page 14 callouts went to `margin:7pt 0; padding:9pt 13pt`. No figure
was changed by any of it. Final measure: 35 pages, minimum 15 px free on page 7.

**Left in the PDF with no site source**, checked and still true: the growth
weight column on page 14, and the female follicles and egg binding page 15, which
has no snake article anywhere on the site. The prey tiers on page 11 and the
body-condition descriptions on page 14 are now carried by site articles and are
no longer package-only.
