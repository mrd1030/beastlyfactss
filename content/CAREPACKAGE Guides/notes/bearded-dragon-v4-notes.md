# Bearded Dragon Care Package: notes for v4

Notes for **3.0 (September 2026, 34 pages, template t3)**, the worked example the template guide
points at.

Read this before touching `source/bearded-dragon.html`.

## This file has no parked blocks, and that is a statement about its history

Nothing is parked here because **this package was not fitted in the session that wrote
the other notes files**, and no removal record for it exists anywhere.

The relevant history, from the version block on the sources page: v3.0 was rebuilt and
expanded from 22 pages to 34, correcting the supplement schedule, splitting food-refusal
thresholds by age, adding metric units throughout, and adding the thermostat and UVB
distance page, the feeder and safe-foods charts, sexing and growth, females and egg
binding, parasites, poop and hydration, the outage and travel plan, the pet-sitter sheet,
and the sources page. That was an expansion, not a fitting pass, so there was little to
cut and no cut list was kept.

Per the template guide's rule, this is recorded rather than filled in from memory. Writing
plausible markup for blocks nobody can confirm were ever removed would make this file
worse than an empty one.

**What v4 should do about it:** start the parked-block section from the next fitting pass
on this package, whenever that happens. The two headroom findings below are the obvious
trigger for one.

## Where v3.0 landed

34 pages. This is the reptile skeleton's canonical length and the shape the whole
template is drawn around, so it is a genuine target here rather than an outcome.

## Two pages are under the 15 px headroom threshold, found while auditing the series

This is the one actionable finding in this file, and it is new. Running the overflow
measurement across every package in the series turned up two pages in this one that do
not meet the guide's own standard:

| Page | Title | Free space | Threshold |
|---|---|---|---|
| 6 | Temperature, UVB & humidity | **6 px** | 15 px |
| 8 | Substrate, furnishings & handling | **12 px** | 15 px |

Neither is clipping today, so nothing is missing from the printed PDF. Both are close
enough that a single added sentence, a font substitution on a machine without Fraunces or
Inter, or a browser update that changes line breaking by a hair would push them over, and
`.page` is `overflow:hidden`, so the failure would be silent.

Page 4 is also worth watching at 15 px, exactly on the line.

**What to do in v4, in the order the guide prescribes:**

1. Tighten layout first. Neither page currently uses `class="dense"` on its tables or
   `compact` on its lists, and a callout at `margin:7pt 0` would buy more than the 9 px
   needed on page 6 without touching a word.
2. If that is not enough, page 8 is the natural split: "Substrate, furnishings & handling"
   is two topics sharing a page, and **this is the same shape of page that had to be split
   in the ball python package** after handling detail was trimmed to fit onto it. That is
   not a coincidence worth ignoring.

Do not resolve either page by shortening the UVB distance figures, the supplement
schedule, or the handling guidance.

## Accuracy notes carried in the template guide that came from this package

Listed here because they are this package's scar tissue and a v4 editor should not
reintroduce them:

- Plain calcium is the daily dust; calcium with D3 is 1 to 2 times a week. Never "D3 at
  every feeding" under strong UVB.
- Food-refusal and no-stool thresholds split by age, because juveniles have far less
  margin than adults.
- Captive lifespan in the quick profile, never the wild figure from `bio.wildLifespan`.
- Budget line items must add up to the printed totals, with the thermostat, the infrared
  gun and the vet exam as separate lines.
- Yellow fungus is *Nannizziopsis guarroi*, not CANV or *N. vriesii*.
- ADV spreads by contact and feces, not by feeder insects. Stargazing is the sign to name.
- No internal notes in the printed footer. "No external links appear in this document"
  actually shipped in v2.0.

## Open content gaps for this package

From the gap log in the template guide, still open from the v3.0 build: the full
safe-foods chart as a site article, and the health-issues expansion. Four others from that
list have since shipped and are crossed off there.

## Ideas for v4, not yet drafted

- **A UVB distance and fixture diagram.** Page 7 carries the distances as a table. The
  relationship between fixture type, mesh, and distance is geometric and would be clearer
  drawn, in the same inline-SVG style as the housing diagram.
- **Brumation.** `bearded-dragon-brumation-guide.mdx` has shipped since v3.0 was built,
  so the package can now source a brumation page from the site instead of leaving it out.
  This is the highest-value addition available.
- **Growth and weight charts by age**, matching what the ball python package carries. The
  species has good published figures and the owner log currently has nothing to compare
  a reading against.
- **A morph and lineage page.** Less urgent than the ball python equivalent, since bearded
  dragon morphs carry fewer documented welfare costs, but silkbacks and their skin care
  are a genuine gap.
- **Adult versus juvenile insect-to-greens ratio, as a visual.** The shift from mostly
  insects to mostly greens is the single most misunderstood thing in bearded dragon
  feeding and it is currently a table.

## If a future edition needs to be shorter

It should not need to be. 34 pages is the skeleton's own length and every page maps to a
template section. If pages must go:

1. **Sexing and growth**, if the site ever carries an article to point at.
2. **Females, eggs and egg binding**, for a male-only edition only.

Do not cut: the UVB distance page, the thermostat page, the supplement schedule, the
feeder chart, the safe-foods chart, the poop and hydration page, or any owner-tool page.
The supplement schedule and the UVB distances are the two things this package exists to
get right, and both have already been wrong once.

## 5 September 2026: the cross-species article cross-check, v3.0 to v3.1

This block was marked Closed in the gap log, but the Sep 4 articles postdate it
and the Ball Python block names this package as sharing its stool and urates row,
so the pages those articles touch were audited anyway. Four content changes, and
the two headroom findings this file has been carrying since it was written are
now fixed.

**Page 7, controller type.** "Use an **on/off or pulse thermostat** for a ceramic
heat emitter or deep heat projector" became "**pulse proportional or dimming**".
`reptile-heating-thermostats-guide.mdx` is clear that on/off suits a heat mat,
which changes slowly, and that a fast-responding source can overshoot in the
window before an on/off unit cuts.

**Page 7, second thermometer.** Added: keep a second thermometer away from the
thermostat probe and read it daily, because a thermostat stuck on or a probe that
has drifted gives no other warning. The article names probe drift as the most
common failure and the silent one.

**Page 7, probe placement. Left alone, deliberately, and this is the one open
conflict in the whole cross-check.** The page says to put the probe beside the
basking platform, not on it. The site article says the probe belongs on the
basking spot itself for an overhead source. Ball Python page 7 and Leopard Gecko
page 7 both agree with the article, which makes this package the outlier. It was
researched before deciding: VCA's bearded dragon housing page covers thermometer
placement, one at each end, and says heating pads should be thermostat controlled,
but gives no probe position. Merck's husbandry page requires thermostat control
and says nothing about probes. LafeberVet gives thermometer placement, including a
third at the basking spot, and its burns article is behind a member login. **No
named veterinary source states a thermostat probe position for an overhead basking
lamp.** The only sources that answer it directly are reptile retailers, which is
below this project's bar and is the class of source the site is currently removing
from 21 articles. A safety instruction does not move on retailer sourcing, so page
7 keeps its figure and page 34 carries a callout stating the disagreement openly.
If a veterinary source turns up, this is the first thing v4 should settle.

**Page 8, Salmonella.** Rewritten from `reptile-salmonella-hygiene-guide.mdx`. The
old callout already had three of the four risk groups, which is better than the
audit first recorded, but it was missing that one negative test clears nothing,
that the sink rule covers a bathroom sink and a bath as well as a kitchen sink
with a dedicated tub as the answer, not kissing the animal, adults over 65, and
the CDC's actual line for under-fives, which is not to handle reptiles or their
environments at all rather than simply to avoid handling.

**Pages 18 and 33, quarantine.** "60 to 90 days" became "3 to 6 months" in both
the atadenovirus section and the glossary. Merck recommends 3 to 6 months for a
new reptile and the article is explicit that 60 to 90 days is the hobby floor.

**Page 21, urates.** "Dehydration, or excess calcium being passed" was a mechanism
error: urates are uric acid made in the liver from protein digestion, not calcium.
`reptile-stool-urates-hydration-guide.mdx` gives dehydration, then a urate or
kidney problem, then gout, and the row now says so. Worth recording that all four
reptile packages carrying this row had drifted apart on the second cause: ball
python and leopard gecko were clean, this one blamed calcium and the Russian
tortoise blamed the liver. All five now read the same.

**Page 21, insect parts.** "Undigested insect parts" flagged as abnormal became
"Whole recognizable insect parts. Chitin fragments are normal", because the
article lists visible exoskeleton fragments as normal in an insectivore's stool
and the old wording flagged the normal case. The tortoise and both gecko packages
already had this right.

**Page 21, soak.** No change. The 15 to 20 minutes here already matches
`reptile-shedding-complete-guide.mdx`, and it is the figure the other three
reptile packages were moved onto.

**The two headroom findings from this file are resolved.** Page 6 was at 6 px and
page 8 at 12 px, both under the 15 px print floor, and this file prescribed the
fix: tighten layout first, `dense` on the tables and `compact` on the lists, and a
callout at `margin:7pt 0`. That worked exactly as predicted. Page 6 went from 6 px
to 77 px on the layout pass alone, with no words touched. Pages 7 and 8 also
needed the `.snug` rule block the other t3 guides carry and this one did not: `p`
and `li` at line-height 1.42, `li` margin 2pt, `h2.h` margins 9/3, callouts at
8/12pt and 7pt margins, `table.dense td` at 1.32. Added to the head and applied to
pages 7 and 8 only. Page 7 finished at 20 px and page 8 at 19 px, both carrying new
content. **Page 8 did not need the split this file recommended as the fallback.**

**Pages 34 and 35.** The single reference page split into a sources page and a
version history page, taking the package to 35. The sources page gained Merck's
husbandry and disease pages, Iowa State CFSPH, and the cross-species article list,
plus the open-disagreement callout about the probe.

**Parked blocks:** still none, and this pass adds none. Nothing was removed to fit;
every page cleared on layout and word-level tightening. The trigger this file named
for starting a parked-block section, a real fitting pass, has now happened and
produced nothing to park, which is worth knowing.
