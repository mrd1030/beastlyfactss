# October animal days: the prep

Scoped 2026-09-22. Two of the five are written. The other three are researched
to the point where a session can open the file and write, with dates verified
against the founding organization rather than an aggregator calendar.

Why October first: the cluster runs 4 to 22 October and a new page needs a few
weeks to index and settle. Anything written after about the first week of
October misses the spike it was written for and waits a year.

## Status

| Date 2026 | Day | Slug | State |
|---|---|---|---|
| Sun 4 Oct | World Animal Day | `world-animal-day` | Written, voice clean, hero needed |
| Thu 8 Oct | World Octopus Day | `world-octopus-day` | Researched, not written |
| Sat 17 Oct | International Sloth Day | `international-sloth-day` | Researched, not written |
| Wed 21 Oct | Reptile Awareness Day | `reptile-awareness-day` | Researched, not written |
| Thu 22 Oct | International Wombat Day | `international-wombat-day` | Researched, not written |

Plus the hub, `animal-awareness-days-calendar`, written and voice clean, hero
needed.

Both written articles are blocked only on their heroes. `check-images.mjs` runs
at the front of `build` and exits 1 on a missing source image, so a push to main
without them fails the deploy rather than shipping a 404. Prompts are in
`IMAGE_PROMPTS.md`.

## The date correction already made

`src/lib/data/animalEvents.js` had International Sloth Day hardcoded to
20 October. AIUNAU, the Colombian foundation that created the day in 2010, sets
it as the third Saturday in October. That is **17 October in 2026**, a Tuesday
versus a Saturday, so the homepage FeaturedEvent block was firing on the wrong
three days. Fixed to a `ranges` entry for 2026 and 2027, and World Pangolin Day
and International Rabbit Day were extended to 2027 at the same time so they do
not go dormant.

20 October was the third Saturday in 2013. Every calendar printing it as a fixed
annual date is reprinting that year.

## World Octopus Day, 8 October

**Verified.** Started 2007 by members of TONMO, The Octopus News Magazine
Online, as the first of Cephalopod Awareness Days. 8 October for the eight arms.
9 October is Nautilus Night, 10 October covers squid and cuttlefish, 11 October
is myths and legends.

Angle: the day is a forum's invention that stuck, which is worth saying, and the
octopus nervous system is the thing to build the body on. Roughly two thirds of
its neurons sit in the arms. Existing Beastfiles to link: `octopus`, `cuttlefish`.

Sources to open: TONMO's own thread, and a peer-reviewed reference for the
neuron distribution rather than the figure as it circulates.

## International Sloth Day, third Saturday in October

**Verified.** Founded 2010 by Fundación AIUNAU in Colombia, named by Sarita
Kendall and Tinka Plese, marking the first international meeting on sloth
welfare and conservation held in Medellín in November 2010.

Angle: the date error is the hook, and it is a correction the page can own,
since the large aggregators all carry 20 October. Body on the animal after that.
Existing Beastfile: `sloth`.

Source: `https://aiunau.org/en/activities/sloth-international-day/`

## Reptile Awareness Day, 21 October

**Verified date, unverified origin.** No founding organization claims it. The
earliest solid traces are promotion by reptile publications and conservation
groups. Do not invent a founder: the honest version is that the date is settled
and the origin is not, and saying so is the differentiator against every page
that made one up.

Angle: the largest reptile audience on the site by far. This is the one October
page with a direct route into the care catalogue, so it carries the most
internal-link value. Beastfiles: `gaboon-viper`, `panther-chameleon`,
`thorny-devil`, `green-anaconda`.

## International Wombat Day, 22 October

**Verified date, unverified origin.** Traces to 2005, no named founder. The
usual explanation about Australian spring planting is folklore and should be
flagged as such, not repeated as fact.

Angle: cubic droppings, and the mechanism behind them, which is the last stretch
of intestine rather than the anus. Existing Beastfile: `wombat`.

## Rules that bit on the first two

- `check-voice.mjs` flags `intensifier-heading` on anything like "What It
  Actually Is Now", and `intensifier-excerpt` on "actually" in the excerpt.
- `contrast-cadence` caps "X rather than Y" and "X, not Y" at 2 per article. A
  calendar article reaches for that construction constantly. Watch it.
- `seoDescription` is capped at 160 and the checker counts exactly.
- Every article needs its hero registered before it can ship.

## What is not in scope here

November onward. `national-axolotl-day` on 12 November is the next one after
this cluster and nothing has been researched for it.
