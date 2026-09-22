# October animal days: the prep

Scoped 2026-09-22, finished the same day. The destination, all five articles and
all five heroes are done. Voice clean at zero errors and zero warnings, every
date verified against the founding organization rather than an aggregator
calendar, and every build gate green including `check-images`. Nothing is
outstanding; this cluster is ready to merge to main.

Why October first: the cluster runs 4 to 22 October and a new page needs a few
weeks to index and settle. Anything written after about the first week of
October misses the spike it was written for and waits a year.

## Status

| Date 2026 | Day | Slug | Published | State |
|---|---|---|---|---|
| Sun 4 Oct | World Animal Day | `world-animal-day` | 24 Sep | **Ready** |
| Thu 8 Oct | World Octopus Day | `world-octopus-day` | 25 Sep | **Ready** |
| Sat 17 Oct | International Sloth Day | `international-sloth-day` | 26 Sep | **Ready** |
| Wed 21 Oct | Reptile Awareness Day | `reptile-awareness-day` | 28 Sep | **Ready** |
| Thu 22 Oct | International Wombat Day | `international-wombat-day` | 29 Sep | **Ready** |

Publish dates are spread one per day and all fall before the cluster, so each
article has one to four weeks to index before the day it is written for.

## Where these live

`/animal-days/` is the destination, `src/pages/AnimalDays.jsx`, wired into the
route registry, the preload table, prerender, the sitemap and the navbar. It is
a section of the site rather than a blog post, next to Fact Files.

The calendar started as an MDX article and was retired before it ever shipped.
Two URLs answering "animal awareness days calendar" would have split the signal
between them, and the article's dates were static text that would go stale. The
page resolves every date from `ANIMAL_EVENTS` instead, so the calendar and the
homepage band read the same data and can never disagree.

Membership is the `animalDay` frontmatter flag, holding an `ANIMAL_EVENTS` id.
Same reasoning as Fact Files' `factFile` flag: a category would have made the
page a mirror of an auto-generated `/blog/category/<x>/` listing. An article
never states its own date.

So each new October article needs exactly one extra frontmatter line:

```
animalDay: "world-octopus-day"
```

Articles stay at `/blog/<slug>/`. `/animal-days/` links to them.

World Animal Day is blocked only on its hero. `check-images.mjs` runs at the
front of `build` and exits 1 on a missing source image, so a push to main
without it fails the deploy rather than shipping a 404. Prompt is in
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

## Rules that bit on the first article

- `check-voice.mjs` flags `intensifier-heading` on anything like "What It
  Actually Is Now", and `intensifier-excerpt` on "actually" in the excerpt.
- `contrast-cadence` caps "X rather than Y" and "X, not Y" at 2 per article. A
  calendar article reaches for that construction constantly. Watch it.
- `seoDescription` is capped at 160 and the checker counts exactly.
- Every article needs its hero registered before it can ship.

## What is not in scope here

November onward. `national-axolotl-day` on 12 November is the next one after
this cluster and nothing has been researched for it.

## Category, settled 2026-09-22

All five get `category: "Wild Animals"` and `categories: ["Wild Animals"]`.
Nothing else, and specifically not Roundups: that pill is defined in
`categories.js` as multi-pet care comparisons, and `world-animal-day` was
briefly mis-filed there while it was paired with the calendar article.

The temptation with the remaining four is to file them by animal, so octopus day
under Aquatic Life and reptile awareness day under Reptiles. Do not. Those pills
are care-guide pills, and an awareness-day piece landing among tank setups and
feeding schedules reads as a filing error to anyone browsing them. Wild Animals
is defined as "Wildlife, conservation, and wild animal facts", which is exactly
what these are, and it keeps the five clustered.

## Where each article shows up

- `/blog/<slug>/`, its own page and its canonical URL
- `/blog/` and `/blog/category/wild-animals/`
- `/animal-days/`, under its date, via the `animalDay` flag
- The homepage event band, for the three days either side of its date
- The homepage "Latest articles" block while it is among the newest five

Not Fact Files, which needs the `factFile` flag, and not Beastlypedia, which
needs a Beastfile to name the article in its `relatedFiles`.

## The hub lists the animal content, added 2026-09-22

Every day row now carries the site's Fact Files, fact roundups and Beastfiles
about that day's animals. 83 links across 26 of the 32 days.

Membership is `factFile: true` or a `10-surprising-<x>-facts` slug, not the
`-guide` suffix. Filtering on the suffix alone let husbandry straight through:
`bearded-dragon-shopping-list`, `bioactive-setups-bearded-dragons`,
`why-bearded-dragons-need-uvb-lighting`, `cockatoo-screaming-feather-plucking`,
`why-rabbits-need-unlimited-hay` and `why-your-dog-needs-daily-exercise` are all
guides in everything but the URL, and a day page listing them is a care
catalogue with a date on it.

### The six empty days, and why

| Day | Why |
|---|---|
| World Turtle Day | no Fact File on any turtle or tortoise |
| World Sea Turtle Day | same |
| International Dog Day | same for dogs |
| National Honey Bee Day | the bee article matches World Bee Day's wider list, not this one's |
| International Cat Day | see below |
| World Animal Day | `animals: []` by design; it is every animal, so it matches none |

### The cat gap, decided 2026-09-22

Both articles were read. They are Fact Files in substance; only one of them is
ready to be one.

**`cats-invented-the-meow-for-humans` is promoted.** It carries four real
citations, a `<KeyTakeaway>`, and the same shape as the rhino keratin file. It
now has `factFile`, `animal: "Cat"`, and a myth/truth pair, and its plain
`## Sources` list became a `<Sources>` block with three verified DOIs (Nicastro
2004, Nicastro and Owren 2003, McComb et al. 2009). The Bradshaw book reference
was dropped rather than left as an unlinked line: the three papers carry every
specific claim, and an unlinked line is exactly what `countSources` was written
to stop counting. Two body paragraphs that sat below the old Sources heading
moved above it, which is where every other Fact File puts them.

The APA DOIs return 403 to a scripted request. That is a bot block, not a dead
link, and `check-source-links.mjs` already separates the two.

**`cats-always-land-on-their-feet-not-always-unhurt` is not promoted.** Its
source block has one real citation (Whitney and Mehlhaff 1987) and two lines
that name a body of literature rather than a source: "Feline vestibular and
skeletal anatomy references" and "Feline developmental literature on the
emergence of the righting reflex". Those are precisely the placeholder lines
`countSources` refuses to count, so the article scores one source and would
land on `/fact-files/` next to files carrying three to seven. It needs real
sources found for the clavicle anatomy and the kitten developmental timeline
before it can be tagged. That is an article job, not a tagging job, and it is
the only thing standing between it and promotion.

One rejected shortcut, recorded so nobody retries it: the `Fun Facts` tag looks
like it would widen the hub's rule cheaply, but it sits on
`why-rabbits-need-unlimited-hay`, `why-your-dog-needs-daily-exercise` and
`why-bearded-dragons-need-uvb-lighting` as well, so it lets husbandry straight
back in.

### Two matcher bugs found and fixed

- `matchesAnimal` is head-final, so "Lions Are the Only Social Cat" read as a
  cat article and landed on International Cat Day. Fixed with an `exclude` on
  the event, the same narrow fix the tiger/salamander case already uses.
- The `exclude` test itself was using `matchesAnimal`, which is bidirectional,
  so `matchesAnimal('Tiger', 'Tiger Salamander')` is true and the Tiger
  Beastfile was excluded from International Tiger Day by its own salamander
  guard. Exclusion is now a one-way, singularised containment test.

## Pre-merge verification, 2026-09-22

Run against a real `npm run build` rather than source, because the orphan audit
reads `dist/` and nothing else can answer the question.

### Two bugs this caught, both introduced by this work

**The homepage band pointed at the wrong article on two of the five days.**
`getEventArticle()` picks by title match, then by date, and neither rule
happened to work for these:

- World Animal Day declares `animals: []`, so it falls through to the category
  fallback and takes the newest `Wild Animals` post. That was the wombat
  article, published four days after the World Animal Day one.
- Reptile Awareness Day declares geckos, snakes, turtles, tortoises, bearded
  dragons and chameleons. None of those words appear in the title "Reptile
  Awareness Day Has No Founder Anyone Can Name", so 21 October resolved to
  `tokay-gecko-feeding-guide`, a care guide.

Fixed by having `getEventArticle()` prefer an article whose `animalDay` matches
the event id, before any title or category matching. That is what the flag is
for. `animalDay` had to be added to the `articles-index.json` bundle as well as
`mdx-meta.json`, since the band reads the index.

A second guard came out of the same test: an article written for one day must
never stand in for another. Without it, World Oceans Day picked up the World
Octopus Day piece, because it was the newest article with "Octopus" in the
title. 8 June would have led with another day's article.

**Four of the five articles would have failed the build.**
`audit-internal-links.mjs` fails when the thin-page count rises above `BUDGET`,
which is 13, and its threshold is 3 content links per page. World animal day,
octopus, sloth and wombat each carried 2. Each gained a third link written as a
real sentence rather than a nav line.

### What the build reports now

- Build exits 0.
- Thin pages: 7 of a budget of 13. None of them is a new page. The script
  suggests ratcheting `BUDGET` to 7; left alone deliberately, as that tightens
  the standard for everything and is a separate decision.
- `/animal-days/` carries 60 content links. The five articles carry 6 to 7 each.
- All 32 days resolve an article for the homepage band, and all five October
  days resolve their own.
- All five fact pages generate with the right `og:image`, which confirms the
  `factImages.js` and `_worker.js` copies agree.

### One thing fixed after the first build

`/animal-days/` was in the navbar but the navbar entry sits inside the mobile
menu, which does not prerender. A crawler landing on any page except
`world-animal-day` had no path to the section. Added to the footer beside Fact
Files, which does prerender on every page.

### Known and not a problem

- The five articles are dated 24 to 29 September, so until those dates they are
  scheduled rather than released and do not appear in `/blog/`. `/animal-days/`
  lists them regardless, which is the same treatment the homepage preview gives
  unreleased posts.
- Individual fact pages are not in the sitemap and have no inbound links. That
  is true of all 333 and is the existing design: the pages exist to carry
  per-fact `og:image` for sharing, and `/facts/` is a client-rendered filter.
