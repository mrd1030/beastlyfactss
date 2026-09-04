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
