# Care Package template & content sourcing

The reusable layout lives at [source/_template.html](source/_template.html). It has the
full CSS design system and every page skeleton with `{{PLACEHOLDER}}` tokens. This doc
is the map of **where to pull real content from** for each page, so a new animal guide
can be built by copying from the site instead of writing from scratch.

The worked example is [source/bearded-dragon.html](source/bearded-dragon.html)
(guide 3.0 on t3, 34 pages). When a template comment says "see the bearded dragon file",
copy that page's structure and swap the species content.

## Where site content actually lives

| Content type | Location | Format |
|---|---|---|
| Encyclopedia entry | `beastlyfactss/src/lib/data/encyclopedia/{category}.js` | JS array, NOT mdx |
| Main guide/care page | `beastlyfactss/src/lib/data/guides/{category}.js` | JS array, NOT mdx |
| Deep-dive articles | `beastlyfactss/content/guides/{slug}-{topic}-guide.mdx` | MDX, one file per topic |

`{category}` is one of: `lizards`, `geckos`, `amphibians`, `birds`, `fish`,
`smallMammals`, `turtles` (check the file list if unsure which an animal falls under).

`{slug}` is the animal's kebab-case id, e.g. `leopard-gecko`, `bearded-dragon`.

### Encyclopedia field shape (`encyclopedia/{category}.js`)
```
id, name, scientific, category, emoji, difficulty, guideId, available, image,
bio: { overview, origin, habitat, adultSize, wildDiet, wildLifespan, conservation }
```
`bio.wildLifespan` is the **wild** figure only. Never copy it into the PDF's "Captive
lifespan" row. That mix-up is a real bug that has been found and fixed in 4 different
animals (bearded dragon, axolotl, leopard gecko, budgie) so double check this one
specifically.

### Guide field shape (`guides/{category}.js`)
```
id, name, emoji, difficulty, petType, image, tagline, funFact,
costs: { setup: [...], annual: [...] },
sections: { housing, diet, enrichment, health },
checklist: [...],
faqs: [...]
```

### Deep-dive MDX files (`content/guides/`)
Standard set per animal, all following `{slug}-{topic}-guide.mdx`:
- `{slug}-tank-setup-guide.mdx`: enclosure size, temperature/heat, UVB, humidity, substrate, furnishings
- `{slug}-health-issues-guide.mdx`: every condition, red flags, symptom detail
- `{slug}-cost-guide.mdx`: setup cost, ongoing cost, emergency/vet cost figures
- `{slug}-handling-guide.mdx`: handling technique and taming timeline
- `{slug}-enrichment-guide.mdx`: enrichment ideas and priority
- `{slug}-feeding-guide.mdx`: diet, feeding frequency by age, supplement dosing

Some animals also have a one-off extra, e.g. `leopard-gecko-temperature-guide.mdx`, or
a comparison piece like `{a}-vs-{b}-guide.mdx` that can carry species-specific facts
outside the normal glob. Worth a quick search by animal name if a number seems to be
missing from the standard six.

**The MDX deep-dives are the primary source for PDF body content.** They're the most
detailed and the ones that got the closest fact-check against real external sources
(VCA Hospitals, PetMD, Merck Veterinary Manual, etc.) during the site-wide audit.
`guides/{category}.js` is a shorter, secondary source; if it disagrees with the MDX,
the MDX wins, but flag the JS copy to fix too so the two don't stay out of sync.

Read the Ball Python 2.1 note under **Site content gaps by package** before leaning on
that last sentence. "The MDX wins" picks a side without checking whether either side is
right. When two internal sources disagree on a number that matters, go to the external
source first.

### External sources: recommended, not a whitelist

VCA Hospitals, PetMD, and the Merck Veterinary Manual are the ones leaned on most here,
but they are recommendations, not the only sites allowed. Any credible source is usable:
veterinary schools and teaching hospitals, peer-reviewed papers and journals, government
wildlife and agriculture agencies, accredited zoos and aquariums, species and breed
societies, and established species-specific references. ReptiFiles settled the ball
python humidity drift, so a well-sourced species reference can outrank a general portal.
Reach for the better-placed source when one exists.

What does not count as credible: forums, Reddit threads, Facebook groups, care sheets on
retailer or breeder sales pages, AI-generated content farms, and anything with no named
author or organization behind it.

Two more rules that hold whatever the source is. Cite only what you actually opened and
read, never a figure recalled from memory. This governs figures and claims, not topics:
deciding a package needs a page on wing clipping or PTFE fumes is knowledge work and is
exactly what you should be doing. Writing the safe temperature onto that page is
sourcing work. And when two credible sources disagree on a number, print the range
instead of picking a side, and name both on the Sources page so a reader can see why
it's a range.

### Writing site articles for content the site does not have

**Order of operations: the PDF ships first, the articles follow.** Do not stop a package
build to go write five articles. Build and render the PDF, sourcing each page from the
site where the site has it, then log what it did not have under **Site content gaps by
package** near the end of this file (build workflow step 11). The articles are separate
work, picked up when asked, and the log is what turns them into a plan.

Gaps come from two places, and **both are required**. Neither one finds what the other
does.

**Derived gaps** are mechanical. The page skeleton is fixed, so every page has a defined
content requirement before the animal is chosen. Read what the site actually holds for
that animal (`encyclopedia/{category}.js`, `guides/{category}.js`, and every
`content/guides/{slug}-*.mdx`), map it onto the page list, and the pages left without a
source are derived gaps. Each resolves to an existing cross-species article
(`reptile-emergency-plan-guide`, `reptile-shedding-complete-guide`, the UVB guides), or
to research, or to a logged row.

**Proposed gaps come from your own knowledge of the animal, and this is where the
valuable articles come from.** The site cannot tell you what it is missing, and the
skeleton only asks for what the last animal needed. So say plainly what a keeper of this
species has to know that neither one covers. Wing clipping is the worked example: nothing
in the bird page list asks for it and a grep finds only a glossary definition and two
Quaker legal mentions, yet it is one of the first real decisions a new bird owner faces.
No amount of reading the repo surfaces that. Only knowing birds does.

Do this deliberately on every package, not as an afterthought, and put those rows in the
gap block alongside the derived ones. Species-specific husbandry decisions, the common
beginner mistakes, the household hazards, and the routine care a care sheet skips are all
worth proposing.

Two things keep it honest, and they are narrow:

- **Mark which kind a row is.** A derived row can cite its hit count. A proposed row
  cannot, so label it proposed and say what it is based on. Do not present a proposal as
  a grep result, and do not claim "zero hits" without actually grepping `content/` and
  `src/` both, since the glossary and the guides JS carry real coverage the MDX does not.
- **Proposing a topic is not the same as writing its content.** Name the topic from
  knowledge, then source every figure, dose, temperature, and claim before it goes into a
  PDF page or an article. The topic is yours. The numbers are the source's.

Until an article exists, the PDF text is the only copy of those figures, so nothing can
fact-check them against the site later. That is the actual risk the log tracks, and why
the block gets written while the sourcing is fresh rather than later. Pick off the
**cross-species** rows first, since one article closes the same gap in every future
package, and when one does get written, re-source that PDF page from it and cross the
row off.

What the build checks actually enforce is worth knowing before you lean on them:

| Requirement | Enforced by | Covers a care package article? |
|---|---|---|
| 1-2+ in-body internal links, written into the prose | `scripts/check-internal-links.mjs` (`npm run check:links`) | **Yes.** Walks every `.mdx` under `content/`, so a new article is caught the moment it exists |
| Every `RELATED_ARTICLES` slug resolves to a real file, every guide id key is real | `scripts/check-related-articles.mjs` (`npm run check:related`) | **Yes**, for dead slugs and typo'd keys, which is what catches a renamed article |
| The article is attached to at least one guide at all | same script, orphan check | **No.** The orphan check only fires on articles tagged "Dog Health" or "Cat Health". A reptile, bird, or fish article with no entry passes silently |
| Photos exist and are wired by id | `scripts/check-images.mjs` (`npm run check:images`) | Yes, when the article adds photos |

That third row is the one that bites. `getAutoDetectedSlugs` wires a slug for free only
when it is exactly `{guideId}-{suffix}` for one of the six standard suffixes
(`cost-guide`, `handling-guide`, `health-issues-guide`, `tank-setup-guide`,
`feeding-guide`, `enrichment-guide`, per `STANDARD_SUFFIXES` in `relatedArticles.js`).
A species whose article prefix differs from its guide id (`african-grey` vs
`african-grey-parrot-`, `tegu` vs `argentine-tegu-`) does not auto-detect either, even
on a standard suffix, and is wired by hand.

Most articles written for a care package page match none of that: `safe-foods-guide`,
`brumation-guide`, `growth-weight-checks-guide`, `eggs-and-egg-binding-guide`,
`quarantine-guide`, and `reptile-emergency-plan-guide` all auto-detect against nothing.
So **write the `RELATED_ARTICLES` entry by hand, every time**, against the guide ids the
article actually serves, and do not expect a check to remind you. Nothing will. An
unwired article is reachable only by search.

Run `npm run check:links` and `npm run check:related` after installing the article, plus
`npm run check:images` if it added photos. Stop there: per CLAUDE.md, content installs do
not run `npm run build` unless explicitly asked.

The rest is judgment, unenforced. Combine narrow topics so each article is long enough
to stand on its own, and spread publish dates across days rather than dumping a batch on
one. The four standard split guides stay as they are; these are additions, never
replacements. Expanding an existing guide in place is often the better move than a new
thin article, and several gap rows below call for exactly that.

The t3 bearded dragon package drove the first round of this, and all six are now done
and live:

| PDF page need | Article | Status |
|---|---|---|
| Safe-foods charts, prey-size rule, gut-loading | `bearded-dragon-safe-foods-guide.mdx` | live |
| Sexing, growth reference, body condition, stool and urates | `bearded-dragon-growth-weight-checks-guide.mdx` | live |
| Females, infertile eggs, lay box, egg binding | `bearded-dragon-eggs-and-egg-binding-guide.mdx` | live |
| Brumation routine (the site had a paragraph, not a routine) | `bearded-dragon-brumation-guide.mdx` | live |
| Power outage, travel, transport, pet-sitter sheet | `reptile-emergency-plan-guide.mdx` | live, site-wide, wired into 31 reptile guide ids |
| Parasites and the fecal test, mouth rot, tail rot, eye problems, burns, prolapse | `bearded-dragon-health-issues-guide.mdx` | live, expanded in place |

Two shipped under different slugs than first planned. Link the real ones:
`bearded-dragon-growth-weight-checks-guide` (not `-growth-and-health-checks-`) and
`reptile-emergency-plan-guide` (not `reptile-power-outage-and-travel-`).

**Still open for every other species.** Those six cover the bearded dragon only. Every
other animal's package hits the same gaps, and the rows marked "check for a species
article" in the sourcing table below are where they land. For a new animal, check
whether that species has its own version first. If it does, source from it. If it
doesn't, either write it (preferred, when the topic has enough species-specific
substance to stand alone) or use the bearded dragon file as the structural pattern and
verify every single number against veterinary sources for that species. Never carry a
bearded dragon figure across to another animal.

## Page-by-page sourcing (reptile skeleton, 34 pages)

| Page | Title | Primary source |
|---|---|---|
| 1 | Cover | `encyclopedia` bio.overview for the hook; `guides` tagline for tone. Fill the four "Inside" bullets with the package's strongest selling points |
| 2 | Contents | none, your own finalized outline |
| 3 | How to use this package | boilerplate; reword only the "why this package exists" callout if there's a specific outdated-care-sheet myth worth naming |
| 4 | Quick profile & cost overview | `encyclopedia` bio{} fields + `guides` costs{} + funFact; cross-check emergency-cost note against `{slug}-cost-guide.mdx` |
| 5 | Housing & enclosure (+ diagram) | `{slug}-tank-setup-guide.mdx` Enclosure Size / Furnishings |
| 6 | Temperature, UVB & humidity (or filtration / water quality for aquatic) | `{slug}-tank-setup-guide.mdx` Temperature Gradient / UVB / Humidity, or `{slug}-temperature-guide.mdx` if one exists |
| 7 | Thermostats, timers & UVB distance | `{slug}-tank-setup-guide.mdx` plus `uvb-lighting-complete-guide.mdx` and `t5-vs-compact-uvb-guide.mdx`. Reptiles and birds only; aquatic animals replace this with a water-testing page |
| 8 | Substrate, furnishings & handling | `{slug}-tank-setup-guide.mdx` Substrate / Furnishings + `{slug}-handling-guide.mdx` (Salmonella callout for every reptile and amphibian) |
| 9 | Diet & feeding by age | `{slug}-feeding-guide.mdx`. Verify the supplement table specifically: plain calcium vs calcium-with-D3 vs multivitamin, by age. This has been wrong before |
| 10 | Feeder insects (insectivores and omnivores) | `{slug}-feeding-guide.mdx` + `gut-loading-feeder-insects-guide.mdx`; check for a species article first (`{slug}-safe-foods-guide.mdx`, which bearded dragon has), otherwise use the bearded dragon page as the pattern |
| 11 | Safe greens & vegetables (herbivores and omnivores) | `{slug}-feeding-guide.mdx` + `{slug}-safe-foods-guide.mdx` where one exists; check for a species article first, otherwise use the bearded dragon page as the pattern |
| 12 | Fruit, extras & the never-feed list | same |
| 13 | Common mistakes & enrichment | `{slug}-enrichment-guide.mdx` + `guides` sections.enrichment |
| 14 | Sexing, growth & body condition | `{slug}-growth-weight-checks-guide.mdx` where one exists (bearded dragon does); check for a species article first, otherwise bearded dragon page as pattern, verify against vet sources. Snakes have nothing for this yet |
| 15 | Females, eggs & egg binding (egg-laying species) | `{slug}-eggs-and-egg-binding-guide.mdx` where one exists (bearded dragon does); check for a species article first, otherwise bearded dragon page as pattern. Birds: egg binding is in `{slug}-health-issues-guide.mdx` |
| 16 | Health red flags | `{slug}-health-issues-guide.mdx` intro / when-to-call-a-vet. Split food-refusal thresholds by age wherever the species has a juvenile/adult difference |
| 17 to 19 | Condition pages (2 to 3, one pair or trio each) | `{slug}-health-issues-guide.mdx`, ranked by severity/frequency; the last one collects the minor conditions (parasites, mouth rot, eyes, burns, prolapse) |
| 20 | Brumation, shed & behavior page | `{slug}-brumation-guide.mdx` where one exists (bearded dragon and snakes do) and `reptile-shedding-complete-guide.mdx` for the shed cycle, else `{slug}-health-issues-guide.mdx` + `{slug}-feeding-guide.mdx` brumation section |
| 21 | Reading poop & hydration | `{slug}-growth-weight-checks-guide.mdx` where one exists (bearded dragon's covers stool, urates and dehydration signs); check for a species article first, otherwise bearded dragon page as pattern. Open as a cross-species gap |
| 22 | Setup checklist & targets | `{slug}-tank-setup-guide.mdx` FAQs + `guides` checklist[] |
| 23 | Emergency & quick targets card | no new content; restates numbers from pages 5 to 21, plus fill-in lines for vet numbers and bulb dates |
| 24 | Budget & shopping list | `{slug}-cost-guide.mdx` (primary) + `guides` costs{}. Make the line items actually sum to the totals |
| 25 | First 30 days checklist | synthesized from tank-setup + handling + health MDX guides |
| 26 | Symptom quick reference | `{slug}-health-issues-guide.mdx`, condensed to a table, every condition page gets a row |
| 27 | Daily, weekly & seasonal routine | synthesized from tank-setup + feeding + enrichment MDX guides |
| 28 | Power outages, travel & transport | `reptile-emergency-plan-guide.mdx`, the site-wide article; adjust the tolerable temperature floor per species |
| 29 | Pet-sitter sheet | `reptile-emergency-plan-guide.mdx` pet-sitter section, plus boilerplate with species numbers filled in |
| 30 | Owner log | blank fillable, 16 rows |
| 31 | Equipment, supplement & vet log | blank fillable plus the 12-month planner |
| 32 | Enrichment checklist & log | `{slug}-enrichment-guide.mdx`, condensed |
| 33 | Glossary | terms actually used earlier in the same document |
| 34 | Sources, version history & about | the site articles' own Sources blocks, plus the external references you checked |

## Adapting the skeleton by animal class

The table above is the **reptile** skeleton. It is the only one written page by page,
because it came first, and every other class is an adaptation of it. Pages 1 to 4 and
pages 22 to 34 (the checklists, budget, logs, glossary and sources) carry across every
class almost unchanged. The husbandry and health middle is what moves.

Read the row for your class before building, then read the matching package's gap block
further down. Page counts below are what shipped, not estimates.

| Class | Built | Pages | The middle, in short |
|---|---|---|---|
| Reptile | Bearded Dragon 3.0, Ball Python 2.1, Leopard Gecko 2.0, Crested Gecko 2.0 | 34 | The canonical table above |
| Aquatic | Betta 2.2, Goldfish 2.1, Axolotl 2.1 | 37 to 42 | Water systems replace heat systems |
| Mammal | Rabbit 2.0, Hamster 3.0 | 36 to 39 | Diet and health dominate; no environmental control pages |
| Invertebrate | Tarantula 2.1 | 43 | Molt and rehousing replace handling; prevention replaces treatment |
| Bird, small parrot | Lovebird 2.0, Budgie 2.0, Cockatiel 1.0 | 36 to 40 | Light and sleep replace heat; hazards, pairing and clipping are new pages |
| Bird, large parrot | Cockatoo 1.0 | 42 to 45 | The above, plus a decision page, a species-choice page, dust and human health, training, bonding, screaming, legal and succession |

**Aquatic.** Collapse pages 5 to 8 into tank size, filtration, cycling, and water quality
and testing, and drop pages 7, 10, 14 (keep body condition), 15, and the UVB rows on 22
and 23. Cycling, water chemistry, and water changes each need their own page rather than
a shared one, which is why Betta landed at 36, then 37 once its reference page split.
Goldfish needed 39, then 40, because filtration sizing and media maintenance also split. Water quality is this class's whole health
story: goldfish spends pages 21 to 25 on it and still routes most conditions back to the
test kit.

A fully aquatic amphibian takes this same skeleton rather than a class of its own. Axolotl
2.1 landed at 42, and the two places it diverges are worth knowing before the next one.
**Cooling replaces heating as the entire environmental story**, and it takes two pages, one
for the numbers and one for the methods, because the equipment answer changes with the
buyer's climate. And a tubbing, cooling and salt bath page appears that no other class has,
carrying the interventions a keeper actually performs at home. Handling shrinks to a
paragraph inside an arrival and quarantine page, since the answer is no. Everything else,
tank size, filtration, cycling, water chemistry, water changes, the logs and the reference
pages, carries across from the fish builds essentially unchanged.

**Budget two reference pages at the back of an aquatic build, not one.** All three aquatic
packages shipped with a single page carrying sources, version history, the colophon and,
for the axolotl, a source-drift section, and all three overflowed the moment the September
2026 article cross-check added source lines and a version row: betta by 143px against 37px
of headroom, goldfish by 253px against 26px, axolotl by 363px against 32px. Betta stayed
81px over even with every existing history row and the closing disclaimer cut to the bone,
so this is not a compression problem. It is the same finding the Cockatiel 1.0 build
recorded, and it is not a bird quirk: **any package that sources properly needs a sources
page and a version-history page.** Splitting them took betta to 37, goldfish to 40 and
axolotl to 42. On a `-src` build it is one `<!--PAGE-->` marker and one line in `SECTIONS`;
on a single hand-edited file it is an append at the very end, which moves no existing page
number. One trap on a `-src` build: a version-history row that describes an earlier edition
using `{{PAGE_COUNT}}` will silently follow the new count, so hardcode the old number
before splitting.
**Arboreal reptiles are still the reptile skeleton, with two swaps.** Crested Gecko 2.0
landed on 34 pages with no page count change, and the substitutions are worth knowing before
the next arboreal build (gargoyle, chahoua, leachianus, mourning gecko, and the day geckos).
Page 5's diagram turns vertical and the enclosure figure becomes height rather than length.
Page 7 stops being thermostats and UVB distance and becomes misting, ventilation and
lighting, carrying a humidity-cycle chart instead of a lamp-distance diagram: for a species
whose whole husbandry is a daily wet-dry swing, one graph of that swing does more work than
any table. And where a desert species' emergency page is about losing heat, an arboreal
tropical one needs a heatwave half, since a sealed glass box in a sunny window passes a
crested gecko's 85&deg;F (29&deg;C) ceiling in under an hour. That page ends up better than the
reptile original rather than a compromise. The food pages also reorder for any species on a
complete powdered diet: the powder is page 10 because it is the base, insects move to 11, and
fruit and the never list stay on 12.

**Mammal.** The heat, UVB, thermostat and substrate pages have no equivalent and come
out. What replaces them is diet and health, both much larger than the reptile skeleton
allows. Rabbit 2.0 gave hay, greens and pellets, and life-stage feeding three pages, and
gave GI stasis three pages of its own before dental, flystrike and snuffles, and the
E. cuniculi group. It also needed pages the reptile table has no slot for: litter
training and rabbit-proofing, bonding and companionship, spay and neuter, and grooming,
nails and molting. Expect health to be the biggest section in the package, and expect
prey-species behavior to change the handling pages: picking one up is a page, and reading
its body language is another.

Page count scales with the animal inside the class, so take it from the nearest species
rather than from the class. A rabbit runs 38 to 40. Hamster 3.0 came in at 36, and its
block below puts a rodent at 34 to 37, because a smaller animal genuinely has less
husbandry to describe. Two pages a rodent needs that a reptile does not are species
choice, since temperament varies enormously inside one common name, and torpor. Read the
Hamster block before any small-mammal build: it lists six pairs of pages that had drifted
into duplicates, and warns that a topic which genuinely needs one page will try to take
two, with the second usually the first one's prose restated.

**Invertebrate.** The heat, UVB and thermostat pages come out. Handling inverts: Tarantula
2.1 spends three pages on why the answer is no, what interacting actually looks like,
and urticating hairs and bites, where a reptile gets one handling page. Molting takes two
pages and replaces the brumation and shed page. Rehousing takes two more and has no
reptile equivalent at all. A legal page earns its place, which the reptile skeleton does
not have. Eggs and egg binding, and reading stool, both drop. Expect 40 to 43, expect
husbandry to be short and health to lean toward prevention, because veterinary care for
invertebrates barely exists.

**Bird.** Written from the Lovebird 2.0 build, the first bird package on this template.
It came out at 38 pages, not the 32 to 36 this note used to predict, and the prediction was
low for reasons that will repeat on every bird: **take 36 to 39 for a small parrot.**

What was right in the original hypothesis: page 7 survives and changes meaning, from
thermostats to light, photoperiod and the 10 to 12 hour sleep requirement. Page 10, feeder
insects, drops. Pages 11 and 12 become pellet versus seed, safe fresh foods, and a never
list where avocado, onion and chocolate carry real weight. Page 15 becomes chronic egg
laying rather than a single clutch. Page 20 becomes molt and behavior instead of brumation
and shed. The substrate page collapses to two sentences about a paper liner, and the
Salmonella callout goes.

What the hypothesis missed, and where the extra pages went:

- **Household hazards and bird-proofing is a mandatory page, and it is the most valuable
  page in the package.** PTFE gas from an overheated nonstick pan kills at around 536&deg;F
  (280&deg;C) with acute death often the only sign, and no other class in this series has a
  hazard that is invisible, odorless, and routine in a normal kitchen. Aerosols, candles,
  smoke, zinc and lead in cage hardware, and a cat's mouth all belong on it. Nothing in the
  reptile skeleton asks for this page.
- **Light and sleep is a health page, not a lighting note.** Day length is the main lever on
  hormonal behavior, so the photoperiod figure on page 7 is the same figure the egg pages
  depend on. Print the routine number and the intervention number: 10 to 12 hours of
  darkness normally, and light cut to 8 hours a day to break a laying cycle.
- **The social-structure decision needs its own page** for any bird kept singly or in pairs.
  For a lovebird it is one bird or two, and it decides whether the buyer gets a tame pet or
  an aviary pair. It is the page a buyer picks a species-specific guide for.
- **Wing clipping needs a page.** Every new owner is asked about it in the first week,
  usually by whoever is selling the trim, and the site covers it nowhere.
- **The egg material wants two pages, not one**, for any hen-laying species. Chronic laying
  is a management protocol run over weeks; egg binding is a decision made in ten minutes.
  Budgerigars, cockatiels and lovebirds are the three species named most often for both.

Expect the health pages to source well, because the site is strong here (PBFD in 9 files,
psittacosis in 7, feather plucking in 18, egg binding in 8), and expect the husbandry pages
to source badly, because bird husbandry on the site is thin outside the tank-setup guides.
The 38-page count was a measured floor, not a choice: see `notes/lovebird-v3-notes.md` for
the per-page free space and the ranked cut list.

Two things a bird build will hit that no other class does. Five of ten birds
(budgie, canary, conure, lovebird, quaker parakeet) have **no feeding guide at all**, so
the diet pages source from nothing for those species. And `guides/birds.js` carries a
"rough starting ranges, not verified current pricing" comment on its cost block, which
pages 4 and 24 both draw from, so bird costs need checking against the MDX cost guide
rather than trusting the JS. Budgie still has a pre-t3 package at 20 pages, so that one is a rebuild
rather than a new build; lovebird was the rebuild that produced this row.

Cockatiel 1.0 was the first bird package that was a genuinely new build rather than a
rebuild, and it was the cleanest one available: seven articles including a feeding guide,
and it shares the chronic-laying problem, so pages 17 and 18 of the lovebird package
transferred as a shape exactly as predicted. It landed at 40, one over the small-parrot
band, and the extra page is structural rather than about the animal: **a bird package that
sources properly needs two reference pages at the back, not one**, because the source table
outgrows a single page and the source-drift table needs somewhere to live. Take that as the
default for every future package rather than a cockatiel quirk.

**A large cockatoo is a different build, and the 36 to 39 band does not stretch to it.**
Cockatoo 1.0 came in at 44 and none of the extra pages are padding. Eight pages exist that
no small-parrot package has a slot for: a decision test written to talk some readers out of
the purchase, since this species has a documented surrender pattern that the buyer rather
than the bird causes; a species-choice page, because "cockatoo" spans birds differing
threefold in weight and tenfold in price; feather dust and human respiratory health, which
is a household problem at this scale and has no equivalent anywhere else in the series;
training, which is the only page in the series resting on a species-specific treatment
trial; over-bonding and independence, which is the defining failure mode and is created in
the first three weeks; screaming, which is a housing decision rather than a behaviour note;
a legal page, since three commonly kept species are CITES Appendix I or IUCN Endangered and
Maine's carve-out catches them; and succession, because this is the only animal in the
series that may outlive its owner. **Take 42 to 45 for a large parrot.**

Two mechanical findings from that build that apply to any package past about 38 pages. The
contents page needs `column-count:2`, because at 44 entries a single column overflows by
roughly 110 px and clears with 370 px free in two. And any page that is mostly `check-item`
rows should be two-column by default: splitting the five week-sections of a First 30 Days
page into columns took it from 42 px of overflow to 16 px of clearance and reads better.

Mammals drop pages 6, 7 and 8's reptile half entirely: heat, UVB, thermostats and UVB
distance have no mammal equivalent. Rabbit v2.0 spent the freed room on indoors versus
outdoors, flooring and litter training, proofing, bonding, and spay and neuter, and landed
at 39 pages. Hamster 3.0 needed far less of that, because the animal is solitary, lives
two to three years, and has one enclosure standard rather than a housing philosophy, and
landed at 36. Take 34 to 39 as the mammal range rather than a single number, and let the
animal's social life decide where in it you fall: a species that is kept in pairs needs a
companionship page and a bonding page, and a solitary one needs neither.

Both mammal builds also want a page reptiles never need, on choosing which animal within
the common name, because temperament varies more inside "rabbit" and "hamster" than inside
"ball python." One page, not two: see the hamster section below for what happens when it
takes two.

### Page count is a target, not a budget

Every page count in this doc is the expected shape, not a quota to hit. **Going over or
under is fine.** Accurate, complete, genuinely useful content beats landing on a number,
every time. The shipped range across four classes is 34 to 43, and the spread is the
point: the animal decides the length, not the template.

So never cut a real husbandry detail, a health red flag, a supplement dose, or a
temperature target to make a page fit. Ball Python had to be rebuilt precisely
because husbandry detail got trimmed to fit, and the restored version came out at 34
pages. When a page runs long, in this order: combine it with a neighboring page that
shares its topic, split it into two pages and renumber, or just let the guide run longer.
When a page runs short, extend it with content that earns its place, the species' own
specifics, a worked example, a table that saves the reader a lookup, rather than padding
with filler or stretching the type to fill space.

Two half-empty pages are worse than one full page, and one clipped page is worse than
either. The one hard rule is that the count has to be *consistent* once it's locked in:
update the cover, the contents page, every in-text "page N" cross-reference, and every
footer to match, per step 8 of the build workflow.

## Guide version and template version are different numbers

Two numbers, kept apart, both printed on the last page of every package:

- **Guide version** (`1.0`, `2.1`, `3.0`): how many times *this* guide has been revised.
  A guide starts at 1.0 the day it is published, however mature the skeleton it was built
  on. Only a rebuild or a correction moves it.
- **Template generation** (`t3`, or `pre-t3`): which generation of `source/_template.html`
  the edition was built on. `t3` is this 34-page skeleton. `pre-t3` covers the older
  22-page layout in `care-packages/`, whose generations were never numbered.

So a brand new lion guide off this file is **1.0 / t3**. Revise it twice and it is
**2.1 / t3**, which is not a claim about the template. **Never bump the guide version to
match the template number.** That mistake was made in September 2026: Ball Python, Betta
Fish, Rabbit and Tarantula were pushed to 3.0 because they sat on the third-generation
template, and Goldfish was built at 3.0 from the start, skipping its real 2.0. All five were put back
and re-rendered. See `rebuilt/past versions/README.md` for the full account.

Where each number goes:

| Place | Carries |
|---|---|
| Cover badge | guide version only, e.g. `Version 2.1 · Sep 2026` |
| Version history table | a `Template` column, one cell per edition: `t3` or `pre-t3` |
| Colophon, last page | both: `Version 2.1 · Template t3 · September 2026` |
| PDF filename | guide version only, `{Animal}_Care_Package_v2.1.pdf` |
| `carePackages.js` | guide version only, in `version:` |

The payoff is the query you cannot run otherwise. When t4 exists, every guide still
reading `t3` is the backfill list, and an old guide is distinguishable from a new one
built on old bones. Merging the two numbers destroys exactly that.

A guide's version history table must show the template generation of *every* edition, not
just the current one, which is what makes a row like "1.0 / pre-t3, first edition on the
earlier 22-page layout" readable years later.


## Build workflow

0. **Read `notes/{slug}-v*-notes.md` first, before touching anything.** If a previous
   edition of this animal exists, its notes file is the single most useful input to the
   build and it is mandatory reading, not optional background. It carries the exact HTML
   of everything the last edition had to cut, the page count it landed on and whether
   that was a measured floor or a choice, the pages that were wanted and never drafted,
   and the cut list in priority order. Rebuilding without it means re-researching content
   that is already written and sitting in the file, and re-litigating a page limit that
   was already measured. Also read the animal's block under **Site content gaps by
   package** and any gap article that has shipped since, so pages sourced from the PDF
   last time now get sourced from the site.

1. Copy `source/_template.html` to `source/{slug}.html`.
2. Pick an unused accent color triple (`--accent` / `--accent-dark` / `--accent-tint`).
   Check the other files' `:root` blocks so no two animals share one.
3. **Re-tone the cover chrome to match that accent.** The `:root` triple only drives the
   interior pages. Page 1 carries its own hard-coded palette, and in `_template.html`
   that palette is the bearded dragon's browns, so a new guide inherits them and ships a
   brown cover behind an animal that has nothing brown about it. This regressed the
   goldfish once already: the 2.0 rebuild's first build had a brown cover behind a teal photo
   because the cover was copied from the template verbatim.

   Every one of these is on the cover and every one needs changing:

   | What | Template (dragon) | Goldfish | Axolotl |
   |---|---|---|---|
   | Backdrop gradient | `#2B2420,#3A2E24,#4A3524` | `#12262B,#163640,#1B4552` | `#2B2420,#33283A,#432E44` |
   | Brand strip text | `#D8A876` | `#8FD0E0` | `#DBA4BE` |
   | Kicker and "Inside" label | `#C77C3F` | `#5FB8D6` | `#C77CA0` |
   | Icon and tick circle fill | `#E39257` | `#5FC8DC` | `#E39BC4` |
   | Tick check and icon eye | `#2B2420` | `#12262B` | `#2B2420` |
   | Headline | `#FBF3E7` | `#F2FAFB` | `#FBF3E7` |
   | Subhead and chip text | `#D8CBB8` | `#C7DEE3` | `#D8CBB8` |
   | "Inside" bullet text | `#E8DCC8` | `#EAF6F8` | `#E8DCC8` |
   | Chip borders | `#6B5540` | `#3E6672` | `#6B5566` |
   | Rule above "Inside" | `#5A4633` | `#2F5A66` | `#5A4633` |
   | Photo overlay rgba | `43,36,32` / `30,24,18` | `18,38,43` / `13,28,32` | unchanged |

   The gradient's first stop stays near-black in every guide; it is the second and third
   stops that carry the hue. Tint the vertical photo overlay to the same dark, or its
   bottom fade prints as a warm haze over cool water. Warm-toned animals (dragons, geckos,
   tortoises, birds, rodents) can legitimately keep the browns; anything cool-toned should
   not. Grep the cover block for `#3A2E24`, `#C77C3F`, `#E39257` and `#6B5540` before you
   call the cover done, and confirm the render, since a brown cover looks deliberate in
   markup and obvious on screen.
4. Fill in placeholders page by page using the sourcing table above. Do not paraphrase
   numbers from memory. Copy the exact figure from the MDX and re-verify anything that
   looks off against a real external source before "fixing" it.
5. Give every temperature and dimension in both units: `95 to 110°F (35 to 43°C)`,
   `4×2×2 ft (120×60×60 cm)`. Gumroad buyers are global.
6. Build the housing diagram last, as inline SVG, once the housing paragraph text is
   final. Keep labels short (title / number / sub-label on separate lines). Check that
   every `<text>` fits inside its `<rect>` in the render; the bearded dragon 3.0 first
   render had two labels spilling out of their boxes.
7. Base64-encode the chosen cover photo with a small script (never paste the base64
   string into a chat context) and drop it into `{{COVER_IMAGE_DATA_URI}}` using the
   existing `mask-image` fade, never a flat-color gradient overlay. Pick a photo where
   the animal faces the headline (toward the left), it reads far better than one
   facing off the page.
8. Fix the TOC page numbers, every in-text "page N" cross-reference, and every
   `.pagefoot` page number once the final page count is locked in. Grep for `page `
   and check each one.
9. Render to `rebuilt/{Animal}_Care_Package_v{N}.pdf`, where N is the **guide** version
   on the cover, never the template generation. See **Guide version and template version
   are different numbers** above; getting this wrong has already cost one full re-render
   of five packages. Never overwrite the previous version's PDF; the old file stays as the record
   of what buyers of that version received. Once the new build replaces it, move the old
   file into `rebuilt/past versions/` and add a row to the README there saying what
   changed, so `rebuilt/` only ever holds the current edition of each animal. Careful
   with what "current" means: the bearded dragon's live edition is the 22-page
   unversioned file, not the newer 3.0 build, because 3.0 has not been listed yet. Check
   `carePackages.js` before moving anything.
10. Check for overflow. `.page` is `overflow:hidden`, so text that runs long
   is silently clipped, not pushed to the next page. Measure before trusting your eyes:

   ```bash
   # Windows (Edge)
   "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="../rebuilt/{Animal}_Care_Package_v{N}.pdf" --print-to-pdf-no-header "file:///C:/Users/Mike D/Desktop/CAREPACKAGE Guides/source/{slug}.html"

   # Linux / a Claude cloud session (Playwright's Chromium)
   /opt/pw-browsers/chromium-*/chrome-linux/chrome --headless --disable-gpu --no-sandbox --no-pdf-header-footer --virtual-time-budget=10000 --print-to-pdf="{Animal}_Care_Package_v{N}.pdf" "file:///abs/path/{slug}.html"
   ```

   Overflow check: append this to a copy of the file just before `</body>`, run the
   same Chromium with `--dump-dom`, and read `data-measure` off the body. Negative
   numbers are pixels of overflow; anything under about 15 is too tight for print.

   ```html
   <script>document.fonts.ready.then(()=>{const out=[];document.querySelectorAll('.page').forEach((p,i)=>{const pr=p.getBoundingClientRect();const f=p.querySelector('.pagefoot');const ft=f?f.getBoundingClientRect().top:pr.bottom;let mx=pr.top;p.querySelectorAll('*').forEach(e=>{if(f&&f.contains(e))return;if(i===0)return;const r=e.getBoundingClientRect();if(r.height>0&&r.bottom>mx)mx=r.bottom;});out.push('p'+(i+1)+':'+Math.round(ft-mx-8));});document.body.setAttribute('data-measure',out.join('  '));});</script>
   ```

   A cloud session has no internet access from Chromium, so Google Fonts won't load
   there. Download the woff2 files with curl and swap the `@import` for local
   `@font-face` rules in the render copy only; leave the `@import` in the source file.
11. Icons must be small inline SVGs matching the existing minimalist style, never a raw
   emoji character or HTML entity. Headless Chromium print has rendered those as
   broken or flatly wrong glyphs 3 separate times already (crested gecko, goldfish,
   axolotl all had this bug). The `&#9633;` checkbox glyph in the 12-month planner is
   the one exception that has rendered fine.
12. **Log the gaps before you call it done.** Every package ends up with pages the site
   has no article for, and that list is the most valuable byproduct of building one: it
   is a ready-made content plan, already filtered to things a paying customer wanted
   enough to read. Add a block for your animal under **Site content gaps by package**
   below. Do it while the sourcing is fresh, not later.

   Four things to record, none of them optional:

   - **Derived gaps**, the pages that found no source in the site's own content.
   - **Proposed gaps**, the topics a keeper of this species needs that neither the page
     list nor the site raised. This is a required pass, not a bonus. Ask directly what
     this animal's owners get wrong, what decisions they face early, and what in a normal
     house can kill one, then write down whatever the repo does not already answer. The
     best articles in the log came from here, not from the greps. Label these rows
     **proposed** so a later reader knows they rest on knowledge rather than a hit count.
   - **What you found already covered**, so nobody rewrites it.
   - **Any number in the PDF with no site source at all**, because that is the copy no
     one can fact-check against the site later.

   Run the reach test on every row before you write it, and read the existing blocks
   for your class first. See **Before logging a row: how far does it reach?** at the top
   of that section. A gap another package already logged gets its row extended, never a
   second row.

13. Park everything you cut into `notes/{slug}-v{N+1}-notes.md`. See the next section.


## Always keep a next-version notes file

Every package gets `notes/{slug}-v{N+1}-notes.md`, written as you build, not afterward.
N is the **guide** version, so a guide at 2.1 parks its notes in `{slug}-v3-notes.md`.
Fitting a page count means cutting good content, and without this file that content gets
cut twice: once out of the PDF and once out of memory, so the next edition researches and
writes it again from nothing.

What goes in it:

- **The exact HTML of every block you removed**, in a fenced code block, with a one-line
  label saying which page it came off and why it went. Reinstating a block should be a
  paste plus a re-run of the overflow check, not a rewrite. Note its rough word count so
  a future editor knows whether it needs a page split to absorb.
- **The page count you landed on, and whether it was a floor or a choice.** Say whether
  the number came from the measurement script or from judgment, so nobody re-litigates a
  limit that was already measured.
- **Ideas raised and never drafted.** The pages you wanted and did not build, with enough
  detail to start from. This is usually the most valuable part of the file.
- **The proposed gaps from step 12**, the topics you know this animal's keepers need that
  neither the page list nor the site raised. They belong here as well as in the gap log:
  the log drives site articles, this file drives the next edition of the PDF, and a topic
  can deserve both. Keep them labeled as proposals so a later reader knows they still
  need sourcing.
- **A cut list for next time, in priority order.** Having just built the thing, you know
  better than anyone which pages would survive being dropped, and which are the product.
  Name the ones that must not be cut.

Two rules that matter:

- **Cut by parking, never by trimming.** When a page overflows, first split it or move a
  block to a page with headroom; park the block only when neither works. Do not shave
  sentences to make text fit, and never let `overflow:hidden` clip content silently. A
  fact half-stated is worse than the same fact on the next page.
- **Tighten layout before you cut content.** A `class="dense"` table, a `compact` list, a
  callout at `margin:7pt 0`, or a two-column block reclaims 20 to 100 px a page and costs
  nothing. Most small overflows are a layout problem wearing a content problem's clothes.

The goldfish 2.0 rebuild is the worked example: `notes/goldfish-v3-notes.md`. It is
also what step 0 makes mandatory reading for the next goldfish edition: 17 parked blocks with their
original markup, a measured 39-page floor, six undrafted ideas, and a ranked cut list.
Writing the file and reading it are the two halves of the same rule, and the file is
worth nothing if the next build starts without opening it.

## Renumbering: generate it, don't hand-edit it

Splitting or merging one page moves every page number after it, and there are three
places each number appears: the TOC, the `.pagefoot`, and every in-text "page N"
cross-reference. Hand-editing those is where stale numbers ship.

Build the file from per-page fragments carrying `<!--PAGE key-->` and `<!--FOOT key-->`
markers, write cross-references as symbolic `{{P:key}}` tokens, and let a small build
script assign numbers in document order, generate the TOC from a section map, and resolve
the tokens. The script should refuse to build on a duplicate page key, a page missing from
the TOC, a TOC entry with no page, an unknown `{{P:key}}`, or a leftover placeholder. Then
a split costs one edit instead of forty, and a wrong number becomes a build failure rather
than a proofreading job. The goldfish 2.0 build script is the pattern.


## Pre-publish accuracy checks (learned the hard way)

- Supplement schedule: plain calcium is the daily dust; calcium with D3 is 1 to 2 times
  a week; never "D3 at every feeding" under strong UVB.
- Food-refusal and no-stool thresholds split by age (juveniles have far less margin).
- Captive lifespan, not wild lifespan, in the quick profile.
- Budget line items must add up to the printed totals, with the thermostat, the
  infrared gun, and the vet exam as separate lines.
- Latin names current: yellow fungus is *Nannizziopsis guarroi*, not CANV / *N. vriesii*.
- ADV spreads by contact and feces, not by feeder insects; stargazing is the sign to name.
- US spelling in body text ("discolored"), no em or en dashes anywhere.
- Every page ends with at least 15 px of free space by the overflow check.
- No internal notes in the printed footer ("no external links appear in this document"
  was a real one that shipped in v2.0).

## Site content gaps by package

The running list of site articles the packages need. Build workflow step 12 says to add
a block here when you finish a package; this is what turns "the PDF says something the
site doesn't" into a content plan.

How to use it: pick off the **cross-species** rows first, because one article closes the
same gap in every future package.

### Before logging a row: how far does it reach?

**Every gap gets a reach test before it gets written down.** Skipping it is how the fish
set came to look like four articles when it needed two: Betta and Goldfish each logged
cycling and each logged power outages, from their own build, in their own words. That is
duplicate bookkeeping, not duplicate work, and it is invisible until someone reads both
blocks side by side.

Two questions, in order, and the second is the one that gets skipped:

1. **Which animals hit this same gap?** Answer with the widest honest set, not the animal
   in front of you. Universal (every pet on the site), one class (every fish, every
   reptile, every small mammal), a sub-group (snakes, New World tarantulas), or genuinely
   this species alone. Write that set into the Scope column.
2. **Would one article actually serve all of them, or does the advice change?** A shared
   topic is not a shared article. This is the question that decides whether you write one
   guide or several, and it is answered by the content, not the title.

Cycling an aquarium is identical for a betta and a goldfish, so it is one article. Power
outages are a universal *topic* where the advice inverts by class, which is why
`reptile-emergency-plan-guide.mdx` is noted as **not transferring** in three separate
blocks below: it is temperature-first, and for a rabbit the priority flips to feeding,
because a rabbit that stops eating is in more danger than a cold one. Same topic, three
articles. Getting this backwards is worse than duplicating: one article stretched over
animals it does not fit gives every one of them slightly wrong advice.

**Then check the log before adding your row.** Read every existing block for the same
class and the universal rows in all of them. If your gap is already there, do not add a
second row: extend the existing one with your package's page numbers and anything your
animal needs that the original missed. If it is new but reaches past your animal, say so
in the Scope column so the next build finds it.

When you write a merged article, cross the row off in *every* block that logged it and
name the slug in each. The aquatic rows below are annotated where this applies.
`reptile-emergency-plan-guide.mdx` is the worked example of a correctly scoped one: a
single article wired into 31 reptile guide ids, deliberately not stretched to mammals or
fish.

A practical consequence for naming. Scope decides the slug, and the slug is hard to
change once it is wired into `RELATED_ARTICLES`. A universal or class-wide article should
not carry a species prefix, or the next animal that needs it will look like it has no
article and get logged again. `reptile-emergency-plan-guide` and
`gut-loading-feeder-insects-guide` are the right shape. `bearded-dragon-power-outage-guide`
would have been the wrong one.

Note on version numbers: block headings carry the **guide** version, not the template
generation. Five blocks read 3.0 for a while after the September 2026 renumbering, which
has since been undone; see **Guide version and template version are different numbers**
above.

When you write one, re-source that PDF page from the new article, cross the row off here,
and note the slug so the next person knows it exists.

Anything still open is copy that lives only in a PDF, so it has no site article to be
fact-checked against later. That is the actual risk this table tracks.

When you write one, follow the rules and the check table under **Writing site articles
for content the site does not have** above. The short version: 1 to 2+ in-body internal
links, a hand-written `RELATED_ARTICLES` entry unless the slug is exactly
`{guideId}-{suffix}` for one of the six auto-detecting suffixes, and dates spread across
days rather than dumped on one. No check will catch a missing entry on a reptile, bird,
or fish article.

### Bearded Dragon 3.0, t3 (Aug 2026)

**Closed.** All six are live, listed in the table under **Writing site articles for
content the site does not have** above. The last two shipped since this block was
written: `bearded-dragon-safe-foods-guide.mdx` carries the full staple / occasional /
rare / never chart, and `bearded-dragon-health-issues-guide.mdx` was expanded in place
with internal parasites and the fecal test, mouth rot, tail rot and toe loss, eye
problems, and burns and prolapse. `reptile-emergency-plan-guide.mdx` covers the power
outage, travel, and pet-sitter pages for every reptile package, not just this one.

### Ball Python 2.1, t3 (Sep 2026)

Already covered, do not rewrite: pages 28 and 29 from `reptile-emergency-plan-guide.mdx`,
which carries a ball python temperature row. Page 20's shed cycle from
`reptile-shedding-complete-guide.mdx`. Note `pet-obesity-body-condition-guide.mdx` does
**not** transfer, it is a dog and cat article on the 9-point scale.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Heating hardware: thermostats, probe placement, heat source types | 7 | Cross-species | Also page 7 of Leopard Gecko 2.0, where the same hole appears for mats rather than for snake heat sources: on/off versus pulse for a mat, the probe taped flat inside the warm hide rather than on the glass, and why an unregulated mat is the classic burn. No dedicated article. `thermostat` is mentioned in 62 files under `content/guides/` and 9 under `src/lib/data/`, but only ever as a line item in a cost or setup list, never explained. The site has three UVB articles and nothing on the device that actually prevents burns. On/off vs pulse vs dimming, probe on the surface not the mat, wattage as a guess not a target. Serves ball python, corn snake, kingsnake, hognose, garter, boa, milk snake, rosy boa |
| Quarantine for a new reptile | 18, 31 | Cross-species | Also Leopard Gecko 2.0 pages 17 and 25, where it is the entire prevention story for cryptosporidiosis, and Crested Gecko 2.0 page 25. Zero hits. The prevention story for both mites and IBD: 60 to 90 days, separate room, paper towel, separate tools, established animals first and the new one last |
| Snake sexing, growth &amp; body condition | 14 | Cross-species (snakes) | Nothing for any snake. Probing and popping and why an owner should not do either, weight-based growth ranges, triangular vs loaf cross-section |
| Reading reptile stool, urates &amp; hydration | 21 | Cross-species | Nothing. Open on the bearded dragon list too, and now on both gecko lists (Leopard Gecko 2.0 page 21, Crested Gecko 2.0 page 21), so one article closes four packages. The gecko versions need a hydration half that a snake article would not: the humid hide for a leopard gecko, misted droplets for a crested one |
| Internal parasites and the fecal test, IBD, prolapse | 19, 21 | Ball python | Expand `ball-python-health-issues-guide.mdx`, not a new URL. IBD currently exists only as a paragraph in `guides/snakes.js`, which is the secondary source |
| Prey chart, thawing method, freezer storage | 11, 12 | Ball python | Expand `ball-python-feeding-guide.mdx`. It has schedule, prey size, and refusal reasons, but not the tier chart (ASF, day-old chicks, quail), thaw temperature and method, or storage |
| Female ball pythons: follicles, eggs &amp; egg binding | 15 | Ball python | No snake equivalent of `bearded-dragon-eggs-and-egg-binding-guide.mdx`. The page with the least site backing in the whole package, so the one most worth grounding |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the growth table on page 14, the body-condition descriptions on page 14, the
thermostat type guidance on page 7, and the prey tiers on page 11.

**Source drift, resolved Sep 2026.** `snakes.js` said cool side 76 to 80&deg;F and
humidity 50 to 60%; the MDX said 75 to 80&deg;F and 55 to 70%. Researched rather than
picking a winner, and the "MDX wins" call was only half right. ReptiFiles, republished by
Zen Habitats, gives warm side 90 to 95&deg;F, cool side **75 to 80&deg;F**, and ambient
humidity **55 to 65%**. So the cool side went to the MDX figure, but neither humidity
figure was correct: `snakes.js` was too low and the MDX was too high at the top. Both are
now 55 to 65% ambient with 70 to 80% through a shed, along with
`ball-python-tank-setup-guide.mdx`, `ball-python-health-issues-guide.mdx`, and the two
comparison articles, which had drifted separately to 50 to 60%. The package was rebuilt
as v2.1 to match.

The lesson worth keeping: when two internal sources disagree, "the dedicated guide wins"
picks a side without checking whether either side is right. Go to the external source
first when the number matters.

### Betta Fish 2.2, t3 (Sep 2026)

The first aquatic package on the t3 template. At the time, `goldfish.html` and
`axolotl.html` predated t3 and carried none of its CSS additions, so the aquatic layout
here was derived from the adaptation note in this guide rather than copied from them. Both
have since been rebuilt on t3, so a new aquatic build should copy from one of those. It came out at 36 pages, 37 since the reference page split, not
the 28 to 30 that note predicted at the time, because cycling, water chemistry, and water
changes need a page each rather than a shared one. That estimate has since been raised to
34 to 36 in the adaptation note, and it is what prompted the **Page count is a target,
not a budget** rule above.

Already covered, do not rewrite: `betta-fish-water-parameters-guide.mdx` carries the full
parameter table, the testing schedule, and the GH/KH note, and it is the dedicated guide
so it wins over `betta-fish-tank-setup-guide.mdx` on pH (6.5 to 7.5, not 6.5 to 7.8).
`betta-fish-enrichment-guide.mdx` covers all three studies and the mirror finding.
`betta-fish-feeding-guide.mdx` covers portioning, the never-feed list, and the six
refusal reasons. Note `reptile-emergency-plan-guide.mdx` does **not** transfer: it is
reptile-only, and an aquarium blackout is a different problem with different physics.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Aquarium power outages: oxygen, heat and the filter | 29 | Cross-species (aquatic) | **CLOSED Sep 4 2026 by `aquarium-power-outage-and-transport-guide`.** Package rebuilt as 2.2: page 29 reordered so aeration comes first. Original row follows. **One article with "Transporting and moving fish" below and the Goldfish block's "Aquarium power outages and transporting a fish" row. All three are the same aquatic emergency and transport article, the fish equivalent of `reptile-emergency-plan-guide.mdx`.** No article anywhere. The whole page is externally sourced. The 8-hour aeration cycle, insulating rather than heating, unplugging the filter so it cannot flush rotting media back in, and no feeding. Serves betta, goldfish, axolotl, and every future fish package. **The axolotl needs one added section rather than its own article**: for a cold-water animal the blackout inverts into keeping heat out, so insulating the tank, sealed frozen bottles rather than loose ice, and the 1 to 2&deg;F (about 1&deg;C) an hour ceiling on any temperature change all belong in the same piece (Axolotl 2.0, page 35) |
| Fishless cycling, start to finish | 7 | Cross-species (aquatic) | **CLOSED Sep 4 2026 by `aquarium-cycling-guide`.** Also closes the Goldfish block's cycling row. Original row follows. **One article with the Goldfish block's "Cycling an aquarium, fishless and fish-in" row. Write it once for both, covering fishless and fish-in.** `betta-fish-water-parameters-guide.mdx` explains what the cycle is and gives the 4 to 6 week figure, but not how to run one: ammonia dosing to 2 to 4 ppm, seeding, the 24-hour completion test, and the stall table. Closes the same gap for every aquatic package, the axolotl included: the Axolotl 2.0 package sources page 11 from nothing for exactly this reason |
| Transporting and moving fish | 30 | Cross-species (aquatic) | **CLOSED Sep 4 2026 by `aquarium-power-outage-and-transport-guide`.** One figure unresolved: the article gives a two thirds water bag ratio that its own cited source contradicts, see the site list. Original row follows. **Merged into the aquatic emergency and transport article above, not separate.** Nothing. Bag versus bucket, the air gap a labyrinth fish needs, oxygen-filled bags, and carrying the filter sponge submerged so the cycle survives the move |
| Aquarium salt, and medicating a small tank | 18, 19 | Cross-species (aquatic) | **PARTLY CLOSED Sep 4 2026 by `fish-quarantine-and-treatment-guide`.** Duration, carbon and aeration are now sourced on the site and the package's 10 day ceiling has gone. The 1 tsp per gallon dose is still unsourced and is on the site list. Original row follows. Nothing on dosing or duration. 1 tsp per gallon, the 10-day ceiling, replacing only what a water change removes, and why plants, snails, and shrimp need a hospital tank. Also the carbon-removal and aeration rules that apply to every treatment |
| Betta body condition from above | 15 | Betta | Nothing. `betta-fish-feeding-guide.mdx` gives portions but no way to check whether they are right. The top-down torpedo test, shoulders versus the middle third, and the one-pellet correction over 2 weeks |
| Velvet, columnaris and telling them apart | 19 | Betta | Expand `betta-fish-health-issues-guide.mdx`, not a new URL. It names both in a sentence each. The package needs the differential (grains versus metallic dust versus cottony saddle) and, more importantly, that ich wants the temperature raised and columnaris wants it lowered |
| Betta tankmates and sororities | 22 | Betta | Nothing, and the site currently points the wrong way (see drift below). The honest version: alone is the default, snails are usually fine, shrimp and schooling fish are risky and need a real separation plan, and the group-housing research is about fish reared together from hatching |
| Sexing a betta | 35 (glossary) | Betta | Nothing on the site. Only in the glossary here (page 35) because there was no page to justify, but a short article would let a future edition carry it properly: ovipositor, ventral fin length, anal fin shape, beard size, and why the egg spot is suggestive rather than conclusive |

**Numbers with no site source at all**, updated Sep 4 2026 after the cross-check:

- Blackout plan, page 29: **now carried** by `aquarium-power-outage-and-transport-guide`,
  which supplies aeration-first ordering and the agitation interval. The old 8-hour oxygen
  cycle was dropped rather than sourced, because it contradicted the article.
- Fishless cycling doses and the completion test, page 7: **now carried** by
  `aquarium-cycling-guide`.
- Aquarium salt, page 18: the 10-day ceiling is **gone**, replaced by the endpoint rule in
  `fish-quarantine-and-treatment-guide`. The 1 tsp per gallon dose is **still PDF only**
  and is on the site list below.
- Ich at 82&deg;F (28&deg;C) and columnaris toward 76&deg;F (24.5&deg;C), pages 18 and 19:
  **still PDF only.** No article covers either treatment temperature.
- Body-condition descriptions, page 15: **still PDF only.** No article.
- Transport, page 30: the method is now carried by the outage and transport article. The
  6-hour figure and the trip-length table are **still PDF only**.

**Source drift, resolved Sep 2026.** All five were researched rather than settled by the
precedence rule, and two of the first calls were wrong.

- **Cost.** `betta-fish-cost-guide.mdx` said both "$20 to $30 a month" and "$100 to $250
  a year," which cannot both be true. The package originally used an itemised $6 to $20 a
  month, and that was also wrong: the electricity line was understated. Heating a small
  tank runs $30 to $100 a year depending on climate, so about $3 to $8 a month on its own.
  Corrected everywhere to **$10 to $25 a month, $120 to $300 a year**, with a note that a
  year needing a course of medication runs higher. Package rebuilt as v2.0.
- **Mirrors.** `guides/fish.js` called brief mirror exposure "natural and healthy in small
  doses." The enrichment MDX was right and the JS is now corrected. The supporting study
  is *Androgens and corticosteroids increase in response to mirror images and interacting
  conspecifics in males of the Siamese fighting fish Betta splendens* (Hormones and
  Behavior, 2021): plasma cortisol and androgens rose to the aggression challenge
  independent of stimulus type, so a mirror produces the same endocrine response as a live
  rival, with live rivals only drawing more attempted bites.
- **Sororities.** `guides/fish.js` described them without the caveats. Now carries the
  20 gallon minimum, experienced-keeper framing, high failure rate, backup tank, and the
  rearing point from the BMC Zoology isolation study.
- **Feeding window.** The first call, that the MDX's 60 seconds beat `fish.js`'s two
  minutes, was **wrong**. Vet-reviewed guidance is 1 to 2 minutes with no leftovers, so
  `fish.js` was closer. The MDX and the package both moved to 1 to 2 minutes instead.
- **pH.** `betta-fish-tank-setup-guide.mdx` gave 6.5 to 7.8 against the dedicated guide's
  6.5 to 7.5. External sources back 6.5 to 7.5 as ideal with tolerance to about 8.0 and
  stability mattering more than the exact figure, so the setup guide was brought into line
  and gained the tolerance note. The package already used 6.5 to 7.5 and did not change.

**Site work found by the Sep 4 2026 cross-check, not fixed there.** Three items, all in
site content rather than the package:

- **The transport bag ratio in `aquarium-power-outage-and-transport-guide.mdx` is wrong,
  and its own cited source says so.** The article states "A roughly two-thirds water,
  one-third air split is standard for bettas." The Fish Site page it cites says
  "Approximately 75 percent of the volume in the bag should be oxygen," and UF/IFAS FA212,
  on *Betta splendens* specifically, says "Ninety percent of the bag's volume is reserved
  for air to allow the betta enough oxygen to breath during shipment." Both put air well
  above water, which is the direction the packages already had. Betta page 30 and goldfish
  page 33 were left as they are. **The article is the thing to correct.**
- **Velvet genus.** `betta-fish-health-issues-guide.mdx` names *Oodinium*. Merck's parasitic
  diseases page gives *Piscinoodinium* as the freshwater counterpart, and
  `goldfish-health-issues-guide.mdx` already uses it. The package was corrected on page 19;
  the MDX still needs it.
- **Columnaris is still thin.** The velvet and columnaris row above is crossed off for the
  package, but the MDX expansion only went halfway: it gained a columnaris section of one
  sentence and still does not carry the point that ich wants the temperature raised and
  columnaris wants it lowered, which is the reason the row was logged.

### Rabbit 2.0, t3 (Sep 2026)

The first mammal package on the t3 template, and the layout needed real surgery: the
reptile heat, UVB, thermostat and substrate pages have no mammal equivalent, so they were
replaced with indoors versus outdoors and temperature, flooring and litter training,
rabbit-proofing, bonding, and spay and neuter. Section 03 went the other way and grew,
because GI stasis needs three pages on its own. It came out at 39 pages.

For the next mammal build: expect the health section to be the long one rather than the
husbandry section, and expect a vet-choice page, which reptiles never need. The 38 to 40
page range this note used to predict held for the rabbit and did not survive contact with
the hamster, which came out at 36. See the hamster section below: the companionship page
predicted here does not exist for a solitary species, and the page count follows the
animal's social life more than anything else.

Already covered, do not rewrite: `rabbit-tank-setup-guide.mdx` carries the House Rabbit
Society space standard and the litter-training method. `rabbit-feeding-guide.mdx` carries
the full life-stage table and the never-feed list. `rabbit-gi-stasis-guide.mdx` and
`rabbit-health-issues-guide.mdx` between them cover triggers, warning signs and treatment.
`rabbit-enrichment-guide.mdx` covers all three studies.
`why-rabbits-need-unlimited-hay-and-what-happens-to-their-teeth-without-it.mdx` covers the
dental mechanism.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Small-mammal temperature, heat stress &amp; cold | 7 | Cross-species (small mammals) | Nothing anywhere. The tank setup guide gives the indoor-versus-outdoor lifespan figures but no temperature ranges, no heatstroke signs, and no cooling method. Serves rabbit, guinea pig, chinchilla, hamster, and every future small mammal |
| Bonding a pair, step by step | 15 | Rabbit | Nothing, and `rabbit-enrichment-guide.mdx` currently promises that the handling guide covers introductions when it does not (see drift below). Side-by-side pens, neutral territory, stress bonding, what is normal negotiation versus a real fight, and the weeks it actually takes |
| Spay and neuter beyond the price | 16 | Rabbit | `rabbit-cost-guide.mdx` has the cost and the 80% uterine cancer figure. Nothing on timing, what it changes behaviorally, how to choose a clinic, or the point that rabbits must **not** be fasted before surgery, which is also the best question for vetting a practice |
| Rabbit-proofing a room | 6 | Rabbit | Nothing. Cables first because that is the one that kills, then plants, baseboards, carpet corners, and pairing every block with an outlet |
| Grooming, nails &amp; molting | 24 | Cross-species (small mammals) | Nothing. Molt frequency, why a rabbit cannot cough up a hairball and what that means for GI stasis, nail trim interval and technique, scent glands, and why you never bath a rabbit |
| Reading droppings &amp; cecotropes | 25 | Rabbit | `rabbit-gi-stasis-guide.mdx` explains cecotropes in a FunFact. There is no reference for what the litter box is telling you, which is the earliest signal this species gives and the cheapest daily check in the whole package |
| Small-mammal power outages &amp; travel | 32, 33 | Cross-species (small mammals) | Nothing, and `reptile-emergency-plan-guide.mdx` does not transfer. Note the advice inverts for a rabbit: keep feeding through an outage, because a rabbit that stops eating is in more danger than a cold one |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the temperature table and heatstroke signs on page 7, the bonding stages on page
15, the spay and neuter timing on page 16, the nail trim interval and scent gland
schedule on page 24, and the droppings reference table on page 25.

**Source drift found while building:**

- **Three different GI stasis thresholds across three articles.**
  `rabbit-feeding-guide.mdx` says 3 to 12 hours, `rabbit-gi-stasis-guide.mdx` says 8 to
  12 hours, and `rabbit-health-issues-guide.mdx` says 8 hours or more. This is the single
  most important number in rabbit care and it should read the same everywhere. The package
  uses 8 hours as the line, with the 3-to-12 spread described as the range sources give.
  Pick one and propagate it.
- **A broken cross-reference promise.** `rabbit-enrichment-guide.mdx` says "Our handling
  guide covers introductions." `rabbit-handling-guide.mdx` contains nothing about
  introductions or bonding. Either write the bonding article above and point at it, or fix
  the sentence.
- **Pellet and green portions disagree between guides.**
  `rabbit-tank-setup-guide.mdx` gives 1/4 cup of pellets per 5 lb;
  `rabbit-feeding-guide.mdx` gives 1/8 to 1/4 cup per 5 to 6 lb. The dedicated feeding
  guide's range is the better figure and is what the package uses. Same for greens, where
  the feeding guide's "1 to 4 cups per several pounds depending on the source" is too
  vague to act on next to the setup guide's 1 cup per 2 lb.

### Hamster 3.0, t3 (Sep 2026)

The second mammal package, and the one that shows the small-mammal skeleton runs
narrower than the rabbit's, not wider. It was first built at 42 pages and cut to 36 by
combining six pairs of pages that shared a topic. Every block removed is in
`notes/hamster-v4-notes.md` in full markup.

Where v2.0 had drifted wider than the reptile skeleton, and what it cost:

| Drift | Template shape | Fixed to |
| --- | --- | --- |
| Two species-choice pages | The skeleton has none | One page, choosing and where from |
| Two mistakes pages, one of them named "mistakes" twice | One (template page 13) | One, folded in with the first week |
| Two torpor pages, on top of a torpor section on the temperature page | One behavior page (template page 20) | One |
| Two legality pages | Not in the skeleton at all | One |
| Power outages and travel on separate pages | One (template page 28) | One |
| Enrichment log as its own page | One (template page 32) | Folded into the equipment log |

For the next small-mammal build: a hamster is a shorter animal than a rabbit, so expect
34 to 37 rather than the 38 to 40 the rabbit note predicts, and expect the split to fall
the same way, with the health section long and the husbandry section short. The two
places a rodent needs pages a reptile does not are species choice, because temperament
varies enormously inside one common name, and torpor.

**What actually caused the duplication, so nobody draws the wrong lesson.** This was not
judgment drift. The build hit an API error partway through and the session restarted, and
on resuming it rebuilt pages it had already written instead of continuing from where it
stopped. Three of the six merges above were that: the same topic written twice, the
second copy being the first one's prose restated. They cost nothing to merge because
neither copy was wrong, there were simply two.

That makes it a resume hazard, not a content hazard, and it will happen again on any
interrupted build. **Before continuing an interrupted build, reconcile before you write
another page.** List the page keys already in the file, compare them against your section
map and the contents page, and find where the last completed page actually ends. Never
resume by starting the page list again.

This is exactly what the duplicate page key check in **Renumbering: generate it, don't
hand-edit it** is for. A build script that refuses to build on a duplicate key turns this
class of error into a build failure instead of six pages nobody notices until the page
count comes in eight over. Worth having on any package long enough to be interrupted.

Already covered, do not rewrite: the bedding-depth study is reported with all three of
its figures on page 7 and is the package's strongest single page.

Known gaps, listed in the notes file: there is no target weight anywhere despite the
owner log asking for grams, no sexing page despite the guide telling the reader twice to
check the sex, and nothing on cheek pouches.

### Tarantula 2.1, t3 (Sep 2026)

The first invertebrate package on the t3 template. The reptile heat, UVB and thermostat
pages collapse into a single temperature and ventilation page, which frees a lot of room,
and the freed room goes to things no reptile package needs: two pages on molting, a page
on water alone, a rehousing method, urticating hair and bite first aid, and a legality
page. It came out at 43 pages, the longest in the series so far, largely because molting
and the handling question each split in two.

For the next invertebrate build: expect 40 to 43 pages, expect husbandry to be short and
the behavior and molting sections to be long, and expect the health section to be weighted
toward prevention because veterinary care for invertebrates barely exists.

Already covered, do not rewrite: `tarantula-legal-guide.mdx` carries the full state table
on page 28. `tarantula-enrichment-guide.mdx` carries the PLoS ONE study with all four of
its findings, which is the honest version and the one the package uses.
`tarantula-feeding-guide.mdx` carries the life-stage intervals and the seven reasons for
refusing food. `invertebrate-molting-guide.mdx` covers molting cross-species, though not
at the depth pages 13 and 14 needed.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Household pesticides and invertebrate pets | 26 | Cross-species (invertebrates) | Nothing anywhere, and it is one of the few ways a well-kept spider dies suddenly with no warning. Bug spray, plug-in insect killers, flea and tick treatment on a pet in the same room, ant powder, and wild-caught feeders. Serves tarantula, scorpion, mantis, millipede, and every future invertebrate |
| Rehousing an invertebrate | 18, 19 | Cross-species (invertebrates) | Nothing. The catch-cup-and-card method, working inside a larger tub, low to the ground, what to do when it bolts, and never during a molt. Two pages here because the preparation and the method are separate jobs |
| Urticating hair first aid | 17 | Cross-species (New World species) | `tarantula-handling-guide.mdx` explains the risk and cites the eye-injury literature but gives no first aid. Tape rather than washing for skin, flush and same-day attention for eyes, ventilation and a mask for airway |
| Sexing a tarantula from the exuvia | 27 | Tarantula | Nothing. The spermatheca in the shed skin is the only reliable home method, and it decides whether the animal is a 5-year pet or a 20-year one, which makes it more consequential here than sexing is for most species |
| Enclosure type by lifestyle | 7 | Tarantula | `tarantula-tank-setup-guide.mdx` says most pet species are terrestrial and stops there. No terrestrial versus fossorial versus arboreal table, which is the decision every other husbandry choice depends on, and getting it wrong is the commonest genuine welfare failure in the hobby |
| Water, and reading the abdomen | 9 | Tarantula | `tarantula-health-issues-guide.mdx` covers dehydration as a condition. Nothing frames the water dish as the single most important object in the enclosure, and there is no reference for reading the abdomen from plump through premolt to death curl |
| Invertebrate power outages, travel &amp; shipping | 35, 36 | Cross-species (invertebrates) | Nothing. Mostly reassuring, which is worth writing down: a tarantula is fine alone for two weeks. The transport and shipping half is where the real risk is |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the enclosure height ceiling and the 3&times;-leg-span floor rule on page 6, the
substrate depths by type on page 7, the abdomen reference table on page 9, the premolt
sign list and hardening windows on pages 13 and 14, and the sexing method on page 27.

**Source drift found while building:** none. The tarantula guides agree with each other,
which is worth noting because they are also unusually honest about where the underlying
sources disagree. The humidity range on page 8 is presented as an open disagreement rather
than a settled number, because `tarantula-tank-setup-guide.mdx` is right that it is one:
40 to 60% from the care-guide side, 65 to 75% from the clinical side, and a full water
dish plus one damp corner is what both sides actually do.

### Goldfish 2.1, t3 (Sep 2026)

Already covered, do not rewrite: page 6's bowl-myth argument from
`goldfish-tank-size-bowl-myth.mdx`, which is a full deep dive. Page 13's slime coat and
net-and-cup handling from `goldfish-handling-guide.mdx`. Page 19's enrichment research,
the 90 percent planted versus 10 percent barren finding and the substrate foraging work,
from `goldfish-enrichment-guide.mdx`. Note `betta-fish-water-parameters-guide.mdx`
partially transfers: its GH and KH section and testing schedule are species-neutral, but
its target ranges are betta numbers and a goldfish is a coldwater fish, so do not lift the
table. `reptile-emergency-plan-guide.mdx` does **not** transfer at all, it is temperature
floors for reptiles and a fish outage is an oxygen problem.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Cycling an aquarium, fishless and fish-in | 9 | Cross-species (aquatic) | **CLOSED Sep 4 2026 by `aquarium-cycling-guide`.** Same article as the Betta block's cycling row. Original row follows. **One article with the Betta block's "Fishless cycling, start to finish" row. Same article, write it once for both.** The single biggest gap in the fish set. `goldfish-tank-setup-guide.mdx` gives cycling three sentences, and roughly ten other fish tank-setup guides mention the nitrogen cycle without ever explaining it. Needs the fishless stages week by week, and the fish-in recovery plan: test daily, 25 to 30% change above 0.25 ppm, ammonia binder, do not clean the filter. Most new owners are in the fish-in case, and the axolotl package hits the same gap at page 11 |
| Aquarium filtration: turnover, media types, maintenance | 7, 8 | Cross-species (fish) | **CLOSED Sep 4 2026 by `aquarium-filtration-guide`.** Package turnover raised from 4x to the article's 10x figure for a heavily stocked tank. Original row follows. The MDX gives 4 to 10x turnover and nothing else. Needs the gph math worked for common tank sizes, mechanical vs biological vs chemical and which to disturb, why manufacturer ratings overstate, and rinse-in-tank-water-only with the reason |
| Freshwater pH, GH and KH for coldwater fish | 10 | Cross-species (fish) | **CLOSED Sep 4 2026 by `freshwater-ph-gh-kh-guide`.** KH retargeted to 100 ppm and up and GH brought onto the USGS classes. Original row follows. The betta article covers hardness well but at tropical targets. Needs the goldfish-appropriate ranges and, more usefully, the KH-buffers-pH mechanism and why chasing a pH number with adjusting chemicals backfires |
| Quarantining and treating a new or sick fish | 13, 25 | Cross-species (fish) | **CLOSED Sep 4 2026 by `fish-quarantine-and-treatment-guide`.** Also closes the Betta block's quarantine wording. Both packages moved to the 30 day minimum. Original row follows. `quarantine` returns hits only in the angelfish guides, in passing. Needs the 2 to 4 week minimum, the bare hospital tank, seeding it from a mature sponge filter, and why medicating the display tank costs you the bacteria colony |
| Aquarium power outages and transporting a fish | 33 | Cross-species (aquatic) | **CLOSED Sep 4 2026 by `aquarium-power-outage-and-transport-guide`.** Same article as the two Betta block rows. Original row follows. **One article with the Betta block's power outage and transport rows. Same article, write it once for both.** Nothing anywhere. Aeration first and temperature a distant second, battery air pump, the cup-pour trick, pulling biological media into an aerated container, and why restarting a long-dead filter without rinsing dumps decomposed waste into the tank |
| Goldfish safe foods chart | 15 to 18 | Goldfish | **CLOSED Sep 4 2026.** The expansion happened: `goldfish-feeding-guide.mdx` now carries a staple, supplement, occasional and never tier table, blanching, and the never list with reasons. Original row follows. Expand `goldfish-feeding-guide.mdx`, not a new URL. It has the diet shape but no tier chart. Pellet vs gel vs flake, the vegetable list with blanching, protein foods weekly not daily, and the never list with reasons |
| Flukes, anchor worm, velvet, popeye and ulcers | 25 | Goldfish | **CLOSED Sep 4 2026.** The expansion happened: all five are now in `goldfish-health-issues-guide.mdx`. One figure differs between site and PDF, see the site list. Original row follows. Expand `goldfish-health-issues-guide.mdx`. It covers ich, fin rot, swim bladder, dropsy, fungus and ammonia, and stops there. The five added in v3.0 carry published veterinary doses that currently exist only in the PDF |
| Goldfish varieties, tankmate matching and sexing | 20 | Goldfish | Nothing on the site. Fancy vs single-tail vs eye varieties with adult sizes and minimums, why mixing body types is a feeding-time mismatch rather than a preference, and the honest answer that sexing is unreliable outside breeding condition |
| Reading fish waste | 26 | Cross-species (fish) | **CLOSED Sep 4 2026 by `spotting-a-sick-fish-guide`.** The article is the reason the package's waste rows are now nonspecific: the white versus pale split it assumed does not hold. Original row follows. Nothing. White stringy versus pale trailing is the most useful early signal an owner has and it appears in no article |
| Goldfish growth, body condition and lifespan | 21 | Goldfish | Nothing. Also the place to make the point that a fish is not weighed weekly, water readings are its vital signs, which contradicts the reptile-shaped owner log in the template |

**Numbers with no site source at all**, carried by the PDF only until the articles above
updated Sep 4 2026 after the cross-check:

- pH, GH and KH targets, page 10: **now carried** by `freshwater-ph-gh-kh-guide`, and the
  package moved to its figures.
- gph turnover, page 7: **now carried** by `aquarium-filtration-guide`, and the package
  moved from a 4x floor to its 10x figure.
- Growth table, page 21, and variety adult sizes and minimums, page 20: **still PDF only.**
  No article.
- Praziquantel and diflubenzuron, page 25: **still PDF only** as doses. Both are now on the
  site in `goldfish-health-issues-guide.mdx`, but the diflubenzuron figures differ between
  the two, see the site list below.

**Site work found by the Sep 4 2026 cross-check, not fixed there.** The two site expansion
rows are both done, but `goldfish-health-issues-guide.mdx` and page 25 now print different
diflubenzuron doses, and both are correctly sourced. Merck's parasitic diseases page says
"Diflubenzuron (0.03 mg/L, once) is the most effective treatment for crustacean parasites,"
which is what the package prints. UF/IFAS FA185, on *Lernaea* specifically, gives
0.066 mg/L, which is what the MDX prints. This is a genuine difference between two
published sources rather than an error in either place, so neither was changed. Somebody
should decide which the site leads with and say so in both. The praziquantel figure,
5 mg/L as a prolonged bath, agrees in both.

**Source drift, unresolved.** `guides/fish.js` costs for goldfish still carry the
`// Rough starting ranges, not verified current pricing` comment and disagree with the
itemized budget on page 29, which sums to $208 to $500 of equipment against the JS
block's implied $170 to $345. The PDF figures are the researched ones. Worth correcting
`fish.js` so the two stop drifting.

### Axolotl 2.1, t3 (Sep 2026)

A rebuild rather than a new build: 1.0 was 20 pages on the pre-t3 layout. It came out at
41 pages, and 42 once the reference page split in 2.1, and the count was measured rather than chosen. The one real split was the
temperature page, which overflowed by 182px and became a numbers page and a cooling
methods page. `notes/axolotl-v3-notes.md` carries the parked blocks, the per-page free
space, seven undrafted page ideas and a ranked cut list. Source is fragments plus a build
script in `source/axolotl-src/`, the second package after goldfish to use that layout.

Worth knowing for the next amphibian: this class sits between the aquatic and reptile
skeletons and takes the aquatic one. Tank size, filtration, cycling, water chemistry and
water changes all carry across from the fish packages unchanged. What is different is that
**cooling replaces heating as the whole environmental story**, which is two pages rather
than one, and that the handling page shrinks to a paragraph inside an arrival page while a
tubbing and treatment page appears that no other class has. Pages 1 to 6 and 29 to 41 came
across from the fish builds almost untouched.

Already covered, do not rewrite: the seven site axolotl guides are unusually good on
husbandry basics. `axolotl-tank-setup-guide.mdx` carries the 20 gallon long minimum, the
60 to 68&deg;F range, the sub-1mm sand or bare bottom rule, low-flow filtration and the
dim lighting point. `axolotl-feeding-guide.mdx` carries the full age-by-age schedule, the
never-feed list with reasons, and the no-supplements point. `axolotl-health-issues-guide.mdx`
carries fungal infection, impaction, ammonia and nitrite burns, heat stress and the
when-to-see-a-vet thresholds. `axolotl-handling-guide.mdx` carries the hands-off argument,
the submerged-container method and the no-nets rule. `axolotl-enrichment-guide.mdx` carries
hides, the sand saucer, foraging and the safety rules. `axolotl-legal-guide.mdx` carries the
whole legal page including the Virginia correction and the 2025 Lacey Act listing, and is
the single best-sourced article in the set. `why-axolotls-need-cold-clean-water.mdx` carries
the nitrogen cycle and the water change routine. Note `reptile-emergency-plan-guide.mdx`
does **not** transfer, and neither does the fish version of the same page without the
cold-water section noted in the Betta block above.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Tubbing, cooling as treatment, and salt baths | 28 | Cross-species (amphibians) | **CLOSED Sep 4 2026 by `amphibian-tubbing-and-salt-baths-guide`.** The figures matched; the framing did not, and the package now prints them as the published ceiling rather than a prescription. Original row follows. **Proposed, and the most valuable row here.** Nothing on the site, and it is the intervention an axolotl keeper reaches for first in every forum thread. Needs the tub setup and the 100 percent daily change, the salt bath figures (10 to 15 g per liter, 10 minutes, once or twice daily, non-iodized), the veterinary cooling range of 41 to 59&deg;F (5 to 15&deg;C) for treatment, and a hard line on where home care stops. Every figure in the PDF page came from Loh's WSAVA proceedings, not from the site |
| Cooling an aquarium without a chiller | 8, 9, 35 | Cross-species (any tank in a heat wave) | **CLOSED Sep 4 2026 by `cooling-an-aquarium-without-a-chiller-guide`.** Rate of change tightened to 1&deg;F an hour and the per-method degree figures withdrawn as unsourced. Original row follows. The site says a chiller is needed and stops. Needs the method comparison: moving the tank, cutting heat sources, evaporative cooling with a fan across the surface, insulation, room air conditioning, and the chiller itself, with the honest note that frozen bottles are a stopgap whose swing is itself a stressor, and the 1 to 2&deg;F an hour ceiling. Serves goldfish and every future coldwater build, not just this one |
| Choosing an axolotl, morphs and sexing | 15 | Axolotl | **Proposed.** Nothing on the site. What to check before paying, the morph list in plain terms, the male cloacal bulge and black nails against the female's rounder body, that none of it is reliable before about a year, and the tiger salamander larva mix-up at point of sale, which `tiger-salamander-vs-axolotl-guide.mdx` sets up but does not close |
| Cohabitation, cannibalism and the no-fish rule | 16 | Axolotl | **Proposed.** `guides/amphibians.js` says they are social enough to house in pairs and mentions gill nipping, which understates it. Needs the juvenile cannibalism window, the size-matching rule, the second-tank-ready requirement, and why fish fail on temperature as well as on gills |
| Reading the gills as a daily health check | 24 | Axolotl | The health MDX mentions curled gills twice, in passing. This is the earliest warning signal a keeper of this species gets, and it deserves its own section: fanned and full against curled forward, pale against dark red, and filaments shortening over weeks |
| Growth, body condition and reading waste | 22 | Axolotl | Pairs with the goldfish block's growth and waste rows but does not share an article: body condition here is body width against head width viewed from above, and obesity from an adult still on a juvenile feeding schedule is the specific failure |
| Quarantine and acclimation for an amphibian | 17 | Cross-species (amphibians) | **CLOSED Sep 4 2026 by `amphibian-quarantine-and-water-guide`.** Package quarantine raised to six to eight weeks with the Bsal rationale added. Original row follows. The goldfish block logs the fish version. The amphibian one differs enough to be its own piece: no netting at any point, temperature-first acclimation, the fecal screen during quarantine, and Bsal as the reason biosecurity matters for this genus specifically |
| Water hardness, and what to do about soft or RO water | 12 | Cross-species (amphibians) | **CLOSED Sep 4 2026 by `amphibian-quarantine-and-water-guide`, in the honest direction.** The article established that no GH or KH figure for this species traces to a primary source, so the package now prints no hardness target at all and keeps only the RO and distilled rule. Original row follows. The site says axolotls need hard water and gives no number, and neither does this package, deliberately. The GH and KH figures that circulate are not well sourced for this species, and Holtfreter's solution is a laboratory practice rather than home husbandry. Needs someone to do the sourcing properly. **The biggest genuine hole in the water chemistry coverage** |
| Juvenile rearing, 0 to 6 months | 18, 22 | Axolotl | **Proposed.** Covered in passing across three pages of the package and nowhere on the site. Live food, individual housing, the cannibalism problem, and the size at which sand becomes an option |

**Numbers with no site source at all**, updated Sep 4 2026 after the cross-check:

- Salt bath figures and the 41 to 59&deg;F (5 to 15&deg;C) treatment range, page 28:
  **now carried** by `amphibian-tubbing-and-salt-baths-guide`, which also supplied the
  correction to how they are framed.
- Cooling method comparison, pages 8 and 9: **now carried** by
  `cooling-an-aquarium-without-a-chiller-guide`. The per-method degree figures were
  **withdrawn** rather than sourced, since the article prints none. The chiller price is
  still PDF only.
- Blackout plan, page 35: **now carried** by `aquarium-power-outage-and-transport-guide`,
  including its axolotl section.
- Antibiotic classes and the 5 mg/kg figure, page 25: **partly carried.** The tubbing
  article names enrofloxacin and trimethoprim-sulfonamides only, so the dose, gentamicin,
  amikacin and the tetracycline caution are **still PDF only**.
- Sexing criteria, page 15, and the growth table, page 22: **still PDF only.** No article.

**Source drift, unresolved.** Three worth fixing on the site.

- **pH.** `axolotl-tank-setup-guide.mdx` gives 7.4 to 7.8. LafeberVet gives 7.4 to 7.6
  ideally, and the Ambystoma Genetic Stock Center gives a tolerable band of 6.5 to 8. The
  package prints 7.4 to 7.6 as the target inside a tolerable 6.5 to 8.0, since stability
  matters more than the figure. The MDX should come into line.
- **Adult size.** `encyclopedia/amphibians.js` gives 9 to 12 in (23 to 30 cm). LafeberVet
  and VCA both give 23 to 25 cm (9 to 10 in) for most adults. Both are printed on page 4
  as a typical figure and an upper one, which is the honest reading, and the encyclopedia
  entry would be better phrased the same way.
- **Substrate.** `guides/amphibians.js` says never use gravel smaller than a golf ball,
  which is a memorable line and a different standard from the one every other source uses.
  The test that actually matters is larger than the animal's head, or fine enough to pass.
  Also `guides/amphibians.js` still carries the
  `// Rough starting ranges, not verified current pricing` comment on its cost block, and
  the axolotl cost figures there disagree with `axolotl-cost-guide.mdx`, which is the
  researched one and is what pages 5 and 30 use.

### Lovebird 2.1, t3 (Sep 2026)

**At 2.1, eleven of the twelve rows below are closed.** The corrections pass of 4 September
2026 cross-checked every page against the bird articles published since 2.0 and re-sourced
what those articles now carry; see `notes/lovebird-v3-notes.md` for the page-by-page record.
The back matter split into two reference pages and the guide went from 38 pages to 39. Only
the lovebird feeding guide row is still open.

The first bird package on the t3 template, and a rebuild rather than a new build: 1.0 was
21 pages on the pre-t3 layout. It came out at 38 pages, and 39 at 2.1. The class adaptation note above was
rewritten from this build, and `notes/lovebird-v3-notes.md` carries the per-page free space,
seven undrafted page ideas, and a ranked cut list.

The headline finding for the whole bird set: **the health pages source well and the
husbandry pages source badly.** PBFD, psittacosis, egg binding and feather plucking are all
in the site's articles. Almost everything a keeper actually does day to day, the diet split,
sleep, hazards, quarantine, droppings, clipping, is not, which is why nine of the rows below
are cross-species rather than lovebird-specific.

Already covered, do not rewrite: `lovebird-tank-setup-guide.mdx` carries cage size, the
3/8 to 5/8 in bar spacing safety figure, the powder-coated and stainless materials rule, the
65 to 80&deg;F range, the no-grit point, and the full case against nest boxes and happy huts.
`lovebird-handling-guide.mdx` carries the territorial temperament, the one-versus-two
decision, the cage-aggression fixes and the 4 to 8 week grief figure for a separated pair.
`lovebird-enrichment-guide.mdx` carries the 60 to 80% foraging figure, contra-freeloading,
and the 3 to 5 toy weekly rotation. `lovebird-cost-guide.mdx` carries the bird price tiers
and the vet figures. `lovebird-health-issues-guide.mdx` names PBFD, chronic laying and egg
binding, plucking, respiratory disease and polyomavirus, though at a paragraph each rather
than at package depth. Note `reptile-emergency-plan-guide.mdx` does **not** transfer: it is
temperature-first, and a bird outage is a fumes problem, since what endangers the bird is
what people light for heat and light, not the cold.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Household hazards for pet birds | 8 | Cross-species (birds) | **Closed by `bird-household-hazards-guide`, Sep 2026.** **The single highest-value article the bird set could have, and there is nothing on it anywhere.** A bird's respiratory system makes fumes that merely irritate a person lethal to it. PTFE gas off overheated nonstick cookware at about 536&deg;F (280&deg;C), with acute death often the only sign; irons, self-cleaning ovens, some heaters and hair dryers as the other PTFE sources; aerosols, candles, plug-ins and smoke; zinc from galvanized hardware and lead from curtain weights and mirror backings; and why a cat's mouth is a same-day vet visit with no visible wound. Serves every one of the ten birds on the site |
| Photoperiod, sleep and hormonal management | 7, 17, 24 | Cross-species (birds) | **Closed by `bird-photoperiod-sleep-guide`, Sep 2026.** Nothing, and it is the lever the whole hormonal section turns on. 10 to 12 hours of uninterrupted darkness as routine, light cut to 8 hours a day to break a laying cycle, why a lit living room at midnight is a long summer day to a bird, and the link between sleep debt and feather plucking. `uvb-lighting-complete-guide.mdx` mentions birds 18 times but is a reptile article |
| Converting a seed eater to pellets | 10 | Cross-species (birds) | **Closed by `bird-pellet-conversion-guide`, Sep 2026.** Nothing, and it is one of the two or three things every new small-parrot owner has to do. Both VCA schedules (75/25 to 50/50 to 25/75 at 3-day steps, or 90/10 tapering 10% a day to day 10), why you never starve a bird onto pellets, weighing through the change, and the tricks that work. Serves all ten birds |
| Quarantining a new bird | 20, 29 | Cross-species (birds) | **Closed by `bird-quarantine-guide`, Sep 2026.** Nothing. 30 days minimum and 45 to 60 in a multi-bird house, a separate room ideally off the same air, separate dishes and tools, established birds first and the new one last, and the PCR panel for PBFD, polyomavirus and psittacosis. The reptile and fish sets logged their own quarantine rows and neither transfers: the pathogens, the airborne route and the test panel are all different |
| Wing clipping, flighted versus clipped | 15 | Cross-species (birds) | **Closed by `bird-wing-clipping-guide`, Sep 2026.** Nothing, and every new owner is asked about it in week one by whoever is selling the trim. Both cases made honestly, blood feathers and why only mature feathers are cut, what a correct trim leaves the bird able to do, that it grows out at the next molt, and that clipping fixes no behavior problem |
| Reading bird droppings | 25 | Cross-species (birds) | **Closed by `bird-droppings-guide`, Sep 2026.** Nothing. The three components (feces, urates, urine), polyuria versus true diarrhea and why the difference matters, the color table, the 20 to 30 minute frequency, and the 24-hour rule. The reptile and fish sets both logged their own version of this row and neither transfers. Cheapest daily health check a bird owner has |
| Bird power outages, travel and transport | 32 | Cross-species (birds) | **Closed by `bird-emergency-travel-guide`, Sep 2026.** Nothing, and `reptile-emergency-plan-guide.mdx` does not transfer. The advice inverts: keep feeding, because a 50 g bird has no reserve, and the danger in an outage is the candles, generators and camping heaters people reach for, not the temperature. Plus carrier versus cage, and never leaving a bird in a parked car |
| Sexing a monomorphic parrot, weight and body condition | 16 | Cross-species (birds) | **Closed by `bird-sexing-weight-body-condition-guide`, Sep 2026.** Nothing. No reliable external difference in most kept species, DNA testing on blood or a feather as the actual answer, weight as this class's vital sign with a gram scale and a perch, keel scoring 1 to 5, and obesity at roughly 20% over ideal. Note `pet-obesity-body-condition-guide.mdx` does **not** transfer, it is the dog and cat 9-point scale |
| Molt in companion birds | 24 | Cross-species (birds) | **Closed by `bird-feather-loss-and-molt-guide`, Sep 2026.** Nothing. Symmetrical loss with new feathers up before old ones drop, pin feathers and sheaths, why a molting bird is quieter and touchier, bathing to help, and the three-way differential against plucking and PBFD that owners get wrong constantly |
| A lovebird feeding guide, at all | 10, 11, 12 | Lovebird | **Still open at 2.1.** The species has **no feeding guide**, which is the largest single hole behind this package. Five of the ten birds are in the same position (budgie, canary, conure, lovebird, quaker parakeet). Needs the 75 to 80% pellets and 20 to 40% fresh split, the vegetable and fruit tier charts, the never list, treat portioning, and the no-grit point |
| Chronic egg laying and egg binding, at package depth | 17, 18 | Cross-species (hen-laying birds) | **Closed by `bird-chronic-egg-laying-guide`, Sep 2026.** Expand `lovebird-health-issues-guide.mdx`, not a new URL, and consider a cross-species article: budgerigars, cockatiels and lovebirds are the three named most often. It currently has a paragraph on each. Needs the full trigger list, the do-not-pull-the-clutch point with the 21 to 28 day incubation cycle, the 8-hour photoperiod intervention, the hormone injection and implant options, and the egg-binding sign list in order of appearance |
| Choosing a bird: hand-raised versus parent-raised, and where from | not in 2.0 | Cross-species (birds) | **Closed by `choosing-a-pet-bird-guide`, Sep 2026.** Proposed, from the build rather than from a grep. `lovebird-cost-guide.mdx` names hand-raised versus parent-raised as the decision that sets how tame the bird becomes, then stops. Nothing covers breeder versus shop versus rescue, what to ask, or what a healthy bird looks like in the cage you are buying it from. Both mammal packages needed their own version of this page; birds need it more, because hand-raising has no mammal equivalent |

**Site work found by the Sep 4 2026 cross-check, not fixed there.** The package edits are
done; these are article changes the pass turned up and deliberately left alone, because the
brief was the packages.

- `bird-emergency-travel-guide.mdx`. Currently reads: "The same sheet notes a budgie's
  resting heart rate runs about **seven times faster than a human's**, which is the flip
  side of having so little mass." The sheet it cites, LafeberVet's *Basic Information Sheet
  for the Parakeet*, gives the budgerigar heart rate as "**Approximately 274**" bpm. Against a
  typical human resting rate that is roughly **3 to 4.5 times**, not seven. **Fix:** either
  restate the multiple or drop the comparison and print 274 bpm, which is what the sheet
  actually supplies. This is an article error rather than a disagreement: Budgie page 19
  prints 274 and is correct, and the vitals on Cockatiel page 19 and Cockatoo page 23 were
  checked against the same sheet during this pass and matched it. Lovebird has no vitals
  page, so this package is unaffected; the row is logged here because this is the block the
  article's own gap row sits in.

**Numbers with no site source at all.** This list was rewritten at 2.1, because most of it
now has one. Closed since 2.0: the hazards page 8 and the PTFE figure, the 8-hour photoperiod
intervention, the pellet conversion schedules, the keel scoring on page 16, the egg-binding
signs on page 18, the quarantine periods on pages 20 and 29, and the droppings table on
page 25 are all sourced now, and page 38 cites them. What is still PDF-only: the 40 to 60 g
weight range on pages 4 and 16, which LafeberVet disagrees with and page 39 now records; the
vegetable and fruit tier charts on pages 11 and 12, which need the lovebird feeding guide
that still does not exist; the genetic-component and cage-rearrangement claims on page 17;
the fair-to-good egg-binding outlook on page 18; the full-spectrum lamp and vitamin D3 claim
on page 7, which needs an external check; and the itemized budget on page 28.

**Source drift found while building.** Four, and the cost one is the worst in the series so
far.

- **Diet split.** `guides/birds.js` says pellets should be 60 to 70% of the diet. VCA's
  lovebird feeding page, which is the species-specific veterinary source, says **75 to 80%
  pellets with fruit and vegetables at 20 to 40%**. The package uses the VCA figures.
  `birds.js` is worth correcting, and the same 60 to 70% line appears on several other
  species in that file.
- **Cost, and it does not add up against itself.** `lovebird-cost-guide.mdx` headlines
  "roughly $70 to $125 a month," but its own annual table (pellets $70 to $110, vegetables
  $80 to $130, toys $40 to $70, vet $70 to $120) totals $260 to $430 a year, which is $22 to
  $36 a month. Its own monthly narrative ($20 to $30 pellets plus $10 to $15 produce) does
  not reach $70 either. The annual table is the coherent half: a 44 oz bag of small-parrot
  pellets feeds one 50 g bird for months. Page 28 itemizes to **$25 to $50 a month for one
  bird and $45 to $90 for a pair**, with the lines summing to the totals. The MDX headline
  and the FAQ that repeats it both need fixing, and `guides/birds.js` still carries the
  "rough starting ranges, not verified current pricing" comment on its cost block.
- **Cage minimum.** The site gives 18&times;18&times;24 in for one bird. VCA's lovebird
  profile gives 3 ft long by 2 ft wide by 2 ft tall, which is considerably larger. Neither
  was picked: page 5 prints both, with the smaller as a floor and the larger as the target,
  and page 38 says why.
- **A wild lifespan field carrying a captive figure.** `encyclopedia/birds.js` has
  `bio.wildLifespan: "5-15 years (up to 15-20 years in captivity)"` for the lovebird. That
  field is the wild figure only, and stuffing the captive range into it is how the captive
  and wild numbers get mixed up in a package, which this guide has already caught four times
  in other animals. The captive figure also disagrees with the cost guide and with VCA, which
  both give 10 to 15 typical and about 20 maximum. The package uses 10 to 15, up to about 20.
  Worth splitting that field and picking one captive range across the three files.

### Budgie 2.1, t3 (Sep 2026)

**At 2.1, five of the eight rows below are closed and a sixth is half closed.** The
corrections pass of 4 September 2026 found the worst errors in the bird set here: a 24-hour
no-eating threshold where Lafeber gives 12 for a budgerigar, a quarantine page offering
prophylactic antibiotics that the public-health compendium discourages, a doxycycline course
missing its budgerigar exception, and an avian gastric yeast entry that overstated the
species. See `notes/budgie-v3-notes.md`. The back matter split into two reference pages and
the guide went from 39 pages to 40.

The second bird package, and a rebuild rather than a new build: 1.0 was 20 pages on the
pre-t3 layout. It came out at 39 pages, and 40 at 2.1. Source is fragments plus a build script in
`source/budgie-src/`, and `notes/budgie-v3-notes.md` carries the parked blocks, the
per-page free space, seven undrafted page ideas and a ranked cut list.

**Read the head CSS note in that file before the next build of anything.** The lovebird
head was already tightened from `_template.html`; this build tightened it again (line
height 1.40, `p`/`li` at 10.1pt, `td` padding 4.5pt, callouts at 8/12pt and 10pt/1.40,
`check-item` 4pt/9.8pt, `h2.h` 13pt with 9/3 margins, `table.dense td` 2.6pt/1.30) and
that one pass took the guide from 22 overflowing pages to zero, reclaiming roughly 130 to
200 px a page. It is worth more than every content cut combined and it should be the first
move on any package that runs long, not the last.

Confirms the bird row: 36 to 39 for a small parrot held, and the lovebird's finding that
**health sources well and husbandry sources badly** held exactly. Nine of the rows below
are cross-species rows the lovebird block already opened, and they are extended there
rather than duplicated here.

Already covered, do not rewrite: `budgie-tank-setup-guide.mdx` carries the width-over-height
argument, the half-inch bar spacing, the perch variety point, the 10 to 12 hour darkness
figure and the PTFE warning. `budgie-health-issues-guide.mdx` names fatty liver, lipomas
and xanthomas, scaly face mites, egg binding, psittacosis and the same-day red flag list.
`budgie-cere-color-guide.mdx` is the best single article behind this package and carries
the whole of page 16's cere material, including the point that a brown crusty cere means
different things in the two sexes. `budgie-handling-guide.mdx` carries the settle-first
week, the three-step taming progression, the no-dominance rule and the hen-bites-harder
note. `budgie-enrichment-guide.mdx` carries foraging-first and the enrichment and plucking
link. Note `reptile-emergency-plan-guide.mdx` does **not** transfer, for the same reason it
does not transfer to the lovebird.

Rows already open on the Lovebird block that this package hit identically, and that are
**extended there rather than repeated here**: household hazards for pet birds (page 8);
photoperiod, sleep and hormonal management (pages 7, 17, 33); converting a seed eater to
pellets (page 10); quarantining a new bird (pages 27, 35); wing clipping (page 15);
reading bird droppings (page 26); bird power outages, travel and transport (page 34);
molt in companion birds (page 25); and choosing a bird and where from (proposed, page 4).
Every one of those rows is now closed; the slugs are named in the Lovebird block.
Two notes from this build, one of them a correction. The **quarantine** row's figure was
logged here as "30 to 45 days with testing or prophylactic treatment," which misread the
source: the NASPHV and CDC psittacosis compendium gives at least 30 days with testing and
says routine prophylactic antibiotic treatment is **highly discouraged**, because it can
harm the bird and breed resistant strains. That error had been copied into page 27 of the
package and both were fixed at 2.1. The same document gives the 45-day doxycycline course
**with a 30-day exception for budgerigars**, which page 21 was missing and now carries. And the **pellet conversion** row has a second veterinary schedule
worth including beside VCA's lovebird one: VCA's budgie page gives four methods rather
than a percentage ramp (pellets first thing in the morning, spread on a flat surface,
ground to powder over a moist food, or mixed into the seed with the seed decreasing),
plus the honest line that conversion takes days, weeks or months.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Megabacteriosis, or avian gastric yeast | 23, 32 | Cross-species (small pet birds) | **Closed by `avian-gastric-yeast-guide`, Sep 2026.** Note the article corrects this row: Merck names budgerigars, parrotlets, lovebirds, cockatiels and finches together, and a peer-reviewed case series found it more often in the cockatiels examined than the budgies, so the "more common in budgerigars than anything else" framing below was an overstatement and was fixed on page 23 at 2.1. Originally logged as:** **Proposed, and the highest-value row here.** `Macrorhabdus ornithogaster` appears on the site only as three words in `budgie-health-issues-guide.mdx`. It is more common in budgerigars than in anything else kept, it kills 10 to 80% of affected birds depending on strain, and its whole presentation is a bird eating well and losing weight, which is invisible without a scale. Needs the going-light picture, whole seed in the droppings, that shedding is intermittent so one clear sample rules nothing out, the amphotericin B protocol at 100 mg/kg twice daily for 30 days with the note that shorter courses fail, and the liver and kidney monitoring during treatment. Serves budgie, cockatiel, canary, finch, lovebird and parrotlet |
| Neoplasia in budgerigars, and lameness as a presenting sign | 20, 32 | Budgie | **Still open at 2.1.** **Proposed.** Nothing on the site connects a limping budgie to anything but injury, and renal tumors are specifically noted as common in this species, presenting as unilateral or bilateral lameness from compression of the nerve plexus rather than as a visible mass. Also the cere-color change in a mature cock. `budgie-health-issues-guide.mdx` has one line on lipomas and xanthomas and should be expanded rather than given a new URL |
| Avian polyomavirus and French moult | 22 | Cross-species (birds, budgie-weighted) | **Closed by `avian-polyomavirus-guide`, Sep 2026.** ** Originally: zero hits anywhere in `content/` or `src/`. The disease is named budgerigar fledgling disease and the aviary term for its survivors has been in use for a century. Needs the acute form in unweaned chicks (crop stasis, death in 24 to 48 hours, signs at 7 to 10 days), the feather form in birds that survive past three weeks, the vaccine schedule from 35 days with a booster at 2 to 3 weeks, and the differential against PBFD, which is the part owners actually need |
| Iodine deficiency and goiter | 21, 23 | Cross-species (seed-fed birds) | **Closed by `bird-pellet-conversion-guide`, Sep 2026.** ** which carries the Merck goiter material and the Lugol's figure. Originally: nothing. `guides/birds.js` mentions goiter in one clause on the budgie entry and nowhere else. The useful point is that it presents as a breathing noise rather than a lump, because the thyroid presses on the syrinx, so it is easy to mistake for a respiratory infection. Lugol's iodine at 1 drop per 250 mL of water until the bird is converted to pellets |
| Exhibition versus pet-type budgies | 4, 16 | Budgie | **Still open at 2.1.** **Proposed.** Two visibly different animals sold under one name, differing in adult weight, build, lifespan and price, and the difference makes any published weight range unusable without knowing which you have. The site does not distinguish them at all. Belongs in a choosing-a-budgie article alongside the cross-species row the lovebird block already opened |
| Talking and training a budgie | 9, 13 | Budgie | **Half closed at 2.1.** The training half is `parrot-training-guide`; the talking odds are still open. The species is bought for this more than for anything else and the site's coverage is two FAQ answers in `guides/birds.js`. Needs the honest odds (males, single birds, consistent repetition), what target and recall training actually look like, and the trade against getting a pair, which is the decision on page 9 of this package |
| Colony and aviary keeping | not in 2.0 | Cross-species (budgie, canary, finch) | **Closed by `bird-colony-aviary-keeping-guide`, Sep 2026.** The article establishes that no verified space-per-bird or sex-ratio figure exists in a citable source, so page 9 at 2.1 carries the principles and deliberately prints no numbers.** Originally: **Proposed.** Budgies are the one small parrot commonly kept in groups, and both the site and this package answer only one-or-two. Space per bird, sex ratios, nest-site control in a group, and the point that a mixed colony is a breeding setup whether or not you intended one |
| Reading small-parrot body language | 24, 25 | Cross-species (birds) | **Closed by `bird-body-language-guide`, Sep 2026.** At 2.1 the cues split by meaning: the one-foot against two-foot fluff and the fanned against bobbing tail went to page 19 with the red flags, and beak grinding and eye pinning to page 24, which finally moved beak grinding off page 31.** Originally: **Proposed.** Beak grinding, eye pinning, the one-foot sleep, fluffed-relaxed against fluffed-ill, tail fanning, head bobbing. This package puts beak grinding in a callout on page 31 purely because there was nowhere else for it, and the fluffed-relaxed against fluffed-ill distinction is the one an owner most needs and most often gets wrong |

**Site work found by the Sep 4 2026 cross-check, not fixed there.** As above, an article
change the pass turned up and left alone.

- `bird-sexing-weight-body-condition-guide.mdx`. The FAQ currently reads: "**Budgies and
  cockatiels are genuine exceptions with real visual cues**, and mature white cockatoos show
  a partial one in iris color, but for most commonly kept parrots, DNA testing is the only
  reliable answer." The body delivers only two of those three: the budgie cere and the
  cockatoo iris. **Cockatiel dimorphism appears nowhere in the article**, which mentions the
  species just three times, in the image alt text, in that FAQ sentence, and in the care
  package block. **Fix:** add the cockatiel section the FAQ promises, the yellow face and
  orange cheeks against a duller face, the barred underwing and tail, and the point that
  lutino, pied, whiteface, albino and pearl birds cannot be sexed this way at all; or narrow
  the FAQ claim to budgies. Until one or the other happens, the **Cockatiel** block's sexing
  row cannot close, which is why it is still open at 1.1 despite the article existing.

**Numbers with no site source at all.** Rewritten at 2.1, because most of this list now has
one. Closed: the amphotericin B protocol and the 10 to 80% mortality figure, the Lugol's
iodine figure, the polyomavirus timeline and vaccine schedule, the lead and zinc source
lists, the quarantine periods and the human psittacosis picture, the keel scoring, and the
droppings material are all sourced now and cited on page 39. The **25 to 35 g weight range
also comes off this list**: LafeberVet's parakeet information sheet gives exactly 25 to 35 g,
and was confirmed during this pass to also match the 274 bpm heart rate, the 60 to 75
respiratory rate, the 107.1&deg;F body temperature, the 7 to 15 year life span, the 18-day
incubation and the 4 to 6 egg clutch the package already prints. What is still PDF-only: the
MSD cage table figure and bar spacing on pages 4, 5, 28 and 29; the leuprolide and deslorelin
dosing on page 17; the ivermectin and moxidectin dosing on page 23; the neoplasia material on
pages 20 and 32; the exhibition against pet-type distinction; and the itemized budget on
page 30.

**Source drift found while building.** Four, and the millet one is the most consequential
because it concerns the food every budgie owner overfeeds.

- **Millet spray frequency.** `guides/birds.js` says "a small piece 2 to 3 times per week
  maximum." VCA's budgie feeding page says millet spray or branches "should only be offered
  in small quantities once or twice a month," and adds that honey sticks are not
  recommended at all by most avian veterinarians. That is roughly a tenfold difference on
  the single highest-fat thing in the cage, in a species whose commonest killer is fatty
  liver disease. The package uses the VCA figure. `birds.js` needs correcting.
- **Pellet share.** `budgie-tank-setup-guide.mdx` says 60 to 80% pellets with 20 to 25%
  fresh, which matches VCA exactly and is right. `guides/birds.js` says 60 to 70% on the
  budgie entry, and the lovebird block already flagged the same 60 to 70% line appearing on
  several species in that file. One correction pass fixes both.
- **Lifespan, three different figures and none of them the source's.**
  `encyclopedia/birds.js` gives `bio.wildLifespan: "4-6 years (up to 12-15 years in
  captivity)"`, which is the same field-stuffing bug the lovebird block flagged, and
  `guides/birds.js` says 7 to 12 in one FAQ. LafeberVet's parakeet information sheet gives
  a mean life span of 7 to 15 years. The package prints 7 to 15 with the note that the low
  end is almost always diet. Split the encyclopedia field and pick one captive range across
  the three files.
- **Cage minimum, and it is a genuine disagreement rather than an error.**
  `budgie-tank-setup-guide.mdx` gives 18&times;18&times;18 in minimum and 30&times;18&times;18
  for a pair; `guides/birds.js` gives 18&times;18&times;24. LafeberVet gives a minimum of 18 in
  wide and long with the note that length beats height, and the MSD Veterinary Manual's
  cage table gives 20&times;20&times;30 in with 0.5 in bar spacing. Neither was picked: page 5
  prints 18&times;18 in as the floor and 20&times;20&times;30 in as the target and says why,
  which is the same treatment the lovebird package gave the same disagreement. Bar spacing
  is printed as a range, 3/8 to 1/2 in, for the same reason.

**Cost.** `guides/birds.js` still carries the `// Rough starting ranges, not verified
current pricing` comment. `budgie-cost-guide.mdx` gives $175 to $475 for setup and $350 to
$900 for the first year. The itemized budget on page 30 reproduces the setup figure almost
exactly at $184 to $477, but reaches $470 to $1,200 for the first year, and the difference
is four line items no starter list carries: a gram scale, a travel carrier, a sleep cage,
and a real veterinary line rather than an amortized annual check. The MDX first-year figure
is the one worth revisiting.

### Guinea Pig 2.0, t3 (Sep 2026)

The third mammal package, and a rebuild rather than a new build: 1.0 was 22 pages on the
pre-t3 layout. It came out at 39 pages, at the rabbit end of the small-mammal range rather
than the hamster end, and the reason is worth carrying forward: **page count in this class
follows the animal's social life and the size of its health section, not its body size.**
A guinea pig is smaller than a rabbit and needs the same page count, because it is social
(so it needs the pairing and bonding pages a hamster does not) and because it has the
longest health section in the series so far at ten pages. Source is fragments plus a build
script in `source/guinea-pig-src/`, over five page files, and
`notes/guinea-pig-v3-notes.md` carries the parked blocks, the per-page free space, seven
undrafted page ideas and a ranked cut list.

Only three pages needed any trimming, which is the Budgie 2.0 head CSS doing its job. Use
that head as the starting point for the next package in any class.

Already covered, do not rewrite: `guinea-pig-tank-setup-guide.mdx` carries the 7.5 and
10.5 sq ft figures, the solid-floor rule, the C&C recommendation, the bedding list and the
"never in the water" point. `guinea-pig-scurvy-vitamin-c-guide.mdx` is the best article
behind this package and carries the three-stage scurvy table, the pellet degradation
argument and the bell pepper point in full; page 22 is sourced almost entirely from it.
`guinea-pig-feeding-guide.mdx` carries the seven reasons a guinea pig stops eating, the
8 to 12 hour threshold, the 24 to 48 hour deterioration window and the 24 to 72 hour
recovery figure, and it is unusually good. `guinea-pig-handling-guide.mdx` carries the
approach-from-the-side method, both-ends support, stay-low, and the stress and contentment
signals. `guinea-pig-enrichment-guide.mdx` carries the up-to-80% foraging figure, the
hides-reduce-stress research and the multiple-hides point. Note
`reptile-emergency-plan-guide.mdx` does **not** transfer, for the same reason the Rabbit
block gives: the advice inverts, and in an outage a guinea pig keeps eating.

Rows already open on the Rabbit 2.0 block that this package hit identically, and that are
**extended there rather than repeated here**: small-mammal temperature, heat stress and
cold (pages 7 and 35, and this build found published figures to write it from, below);
grooming, nails and molting (page 16, plus the boar-cleaning section below); and
small-mammal power outages and travel (page 35, with the keep-feeding inversion confirmed
for a second species). Two Rabbit rows do **not** transfer and get their own rows below:
bonding, because the method genuinely differs, and reading droppings, because cecotropes
are the rabbit's story and consistency and count are the guinea pig's.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Antibiotic-associated enterotoxemia in small mammals | 26, 32 | Cross-species (small mammals) | **Proposed, and the highest-value row in this block by a distance.** Zero hits anywhere in `content/` or `src/`. A guinea pig's gut flora is predominantly Gram-positive, so antibiotics that target Gram-positive organisms wipe it out and let toxin-producing <em>Clostridium</em>, particularly <em>C. difficile</em>, overgrow. Penicillin, ampicillin, streptomycin, clindamycin, lincomycin, spiramycin, chlortetracycline, erythromycin and bacitracin are all implicated. Needs the list, the mechanism, the signs, and the framing that this is a question to ask rather than a prescription to refuse. Serves guinea pig, chinchilla, rabbit, hamster, degu and every future hindgut-fermenting small mammal. **Nothing else logged in this file is as likely to prevent a death caused by an ordinary vet visit** |
| Sexing a guinea pig, and the breeding deadline | 17, 9 | Guinea pig | **Proposed.** Nothing on the site, and mis-sexing at point of sale is common enough that surprise litters are routine. Two things belong in it. Sows can conceive from 4 to 5 weeks, so mixed litters separate at three weeks. And the pubic symphysis ossifies in a sow who has never given birth, so a first litter after about 6 to 9 months means obstructed labor and a caesarean or death, which is the concrete reason an intact boar and a sow must not share a cage. Also the four to six week post-neuter fertility window, which produces litters every year |
| Heat stress in small mammals, as an emergency page | 7, 34 | Cross-species (small mammals) | **Extends the Rabbit block's row, which asked for temperature ranges and cooling methods and had no figures.** This build found them: comfortable at 65 to 79&deg;F (18 to 26&deg;C) with 30 to 60% humidity, dangerous above 82&deg;F (28&deg;C), and a genuinely comfortable band nearer 64 to 73&deg;F. No sweat glands. The sign order is lying stretched flat with the back feet trailing, then panting, then drooling, then weakness, then convulsions. First aid is cool but not iced water on the fur then straight to a vet, because iced water shuts the surface vessels and slows cooling. The article should carry all of it |
| Bonding two guinea pigs, step by step | 10 | Guinea pig | Nothing, and the Rabbit block's bonding row does not transfer: neutral territory and a full cage strip do most of the work here, there is no rabbit-style stress bonding, and the normal-negotiation list (rumblestrutting, mounting, teeth chattering, chasing) is different enough that borrowing the rabbit version would mislead. Needs the sequence, the separate-now list, the two-of-everything rule, and the honest note that a small number of pairings fail and that is not a reason to keep either animal alone |
| Reading guinea pig droppings | 27 | Guinea pig | Nothing. The Rabbit block logged its own version and it does not transfer: a rabbit owner is reading cecotropes and a guinea pig owner is reading count, size and dryness as a daily proxy for gut motility and dental function. Needs the size-and-count reference, soft against truly liquid, the normal chalky calcium residue in the urine, and cecotrophy as normal behavior that an obese or long-coated pig may be unable to perform |
| Ovarian cysts, at article depth | 24 | Guinea pig | **CLOSED Sep 3 2026 by the in-place expansion of `guinea-pig-health-issues-guide.mdx`.** It now carries the symmetrical flank hair loss sign, the mite differential as its own table, the crusty nipples and abdominal swelling, palpation against ultrasound, and ovariohysterectomy as the definitive treatment. Page 24 of the package agrees with it and did not change. Original row follows. Expand `guinea-pig-health-issues-guide.mdx`, not a new URL. It said "ovarian cysts, which show up in intact females" and stopped. This is the most common reproductive tract disorder in sows, and the single sign that identifies it, **symmetrical flank hair loss with normal skin underneath**, is exactly what distinguishes it from mites and appears nowhere on the site. Needs that, plus the swollen abdomen, crusty nipples and temperament change, and the hormonal, draining and surgical options honestly compared |
| Bladder stones and urinary disease, at article depth | 23 | Guinea pig | **CLOSED Sep 3 2026 by the same expansion.** It now carries calcium carbonate at roughly 90% of stones, the dietary levers, squeaking on urination, the blockage warning, and that no diet dissolves a formed stone. Page 23 of the package agrees with it and did not change. Original row follows. Expand the same article. One clause at the time. Needed calcium carbonate as the stone type, the dietary levers (alfalfa in adults, the same high-calcium green every day, low water intake), the sign list with squeaking on urination as the memorable one, that a fully blocked bladder is fatal within a day, and that there is no dietary way to dissolve a formed stone |
| Guinea pig vocalizations and body language | 11 | Guinea pig | **Proposed.** `guides/smallMammals.js` lists five sounds in a sentence and the FAQ explains wheeking. This species is the most vocal in the whole catalogue and the sounds are genuinely diagnostic: a high tense purr means the opposite of a low slow one, and rapid teeth chattering is a warning that owners read as cute. Pairs naturally with popcorning and the freeze |
| The rectal pouch in older boars | 16 | Guinea pig | Nothing. Boars have a rectal pouch behind the anus that becomes impacted with feces in older intact males, causing odor, irritation, infection and secondary urinary infections. It is a weekly owner task for any boar over about two, it is unpleasant enough that nobody warns buyers, and no site article mentions it. Pairs with the grease gland, which the Rabbit grooming row does not cover either |
| Anesthesia and surgery in guinea pigs | 26 | Cross-species (small mammals) | **Proposed.** Two things that differ from a dog or a cat and that owners are never told: guinea pigs are **not fasted** before anesthesia, because they cannot vomit and a fasted herbivore arrives with a slowing gut; and the cage mate should come to the appointment, because a pig recovering alone eats less and eating is the whole game. Belongs with the antibiotics article above or beside it |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the per-kilogram vitamin C figures on pages 4, 13 and 29; the 1 to 2 teaspoon pellet
portion and the 1 to 2 cup produce figure on pages 14, 15 and 29; adult weights split by sex,
body temperature, heart rate and respiratory rate on pages 4, 18 and 29; gestation, litter size,
weaning age and the 4 to 5 week conception figure on page 17; the pubic symphysis deadline
on page 17; the ivermectin and selamectin dosing on page 25; the 4 to 6 week dental
recurrence interval on page 20; the antibiotic list on page 26; the whole heat-stress
sequence on pages 7 and 34; the rectal pouch on page 16; and the itemized budget on page 30.

**Source drift found while building.** Five, and the pellet one is the largest disagreement
found in any package in this series.

- **Pellet portion, off by roughly a factor of three.** `guinea-pig-tank-setup-guide.mdx`
  and `guides/smallMammals.js` both give 1/8 cup, about 2 tablespoons, per pig per day. The
  Merck Veterinary Manual gives **1 to 2 teaspoons**. Two tablespoons is six teaspoons, so
  the site figure is three to six times the veterinary one, on the one component of the diet
  that displaces hay when overfed. The package prints 1 to 2 teaspoons as the starting
  point, says the larger figure suits a growing, pregnant or underweight animal, and tells
  the reader to let hay intake and body condition decide. Both site files need correcting,
  and this is the one to do first.
- **Vitamin C, given as a flat figure where the source is per kilogram.**
  `guinea-pig-tank-setup-guide.mdx` says "10 to 50 milligrams a day," which is VCA's flat
  figure and is defensible on its own. Merck gives **10 to 25 mg/kg daily for adults and
  30 mg/kg or more for growing, pregnant, lactating or ill animals**, which scales with the
  animal and carries the life-stage multiplier the flat figure loses entirely. The package
  prints the per-kilogram figures as primary and notes that the two overlap at roughly 10 to
  25 mg for a typical 900 g adult. The site should carry both, with the per-kg one leading.
- **Floor space, contradicting itself inside one paragraph.** `guides/smallMammals.js` says
  "the minimum is 7.5 square feet of unobstructed floor space, **the same whether it's one
  guinea pig or a pair**" and then, two sentences later, recommends at least 10.5 sq ft for
  a pair. Merck gives 7.5 sq ft for one plus 2 to 4 sq ft per additional animal, which
  agrees with the second half and not the first. Delete the clause.
- **Lifespan, and a `wildLifespan` field for a species with no wild population.**
  `encyclopedia/smallMammals.js` gives `bio.wildLifespan: "4-8 years"` for an animal whose
  own `habitat` field correctly reads "Fully domesticated; no wild population." The field is
  meaningless here and should hold the captive figure or be blanked. `guides/smallMammals.js`
  gives 4 to 8 with 5 to 7 average; LafeberVet gives a mean of 6 to 8. The package prints
  4 to 8 with 6 to 8 typical under good care.
- **Cost, and it does not add up against itself.** `guinea-pig-cost-guide.mdx` headlines
  $33 to $70 a month for one pig and $60 to $135 for a pair, then breaks the pair down as
  $30 to $50 pellets plus $20 to $50 vegetables plus $40 to $60 hay, which totals $90 to
  $160 and exceeds its own stated range. The pellet line is also implausible on its own: at
  1 to 2 teaspoons per pig per day a pair gets through roughly 600 g a month, which is not
  $30 to $50 of anything. Page 30 itemizes to **$71 to $172 a month for a pair before vet
  costs**, with hay at $25 to $60 and pellets at $6 to $15, and the lines sum to the totals.
  The headline and the breakdown both need fixing.

### Russian Tortoise 2.0, t3 (Sep 2026)

The third reptile package, and a rebuild rather than a new build: 1.0 was 21 pages on the
pre-t3 layout. It came out at 37 pages against the canonical 34, and the three extra pages
are worth knowing about because a chelonian will want the same three every time: **outdoor
housing and escape-proofing**, **weeds and grazing** (which replaces the feeder-insect page
a herbivore has no use for and is worth more than the page it replaced), and a **legal
page**, following the Tarantula 2.1 precedent. Two skeleton pages were merged the other way:
thermostats and UVB distance fold into the UVB page, because the equipment story here is
short and belongs with the fixture it controls, and the brumation-shed-behavior page becomes
brumation alone, because a tortoise does not shed the way a snake does and the shed material
is three sentences at the end of the minor-conditions page. Source is fragments plus a build
script in `source/russian-tortoise-src/` over six page files, and
`notes/russian-tortoise-v3-notes.md` carries the parked blocks, the per-page free space,
seven undrafted page ideas and a ranked cut list.

Worth knowing for the next chelonian: the reptile skeleton transfers almost intact, and the
places it does not are all the same place, which is that this animal walks and grazes rather
than sits and eats prey. Everything downstream of that, floor area rather than volume,
scatter feeding, weeds, outdoor pens, follows from it.

Already covered, do not rewrite: `russian-tortoise-legal-guide.mdx` is the best article
behind this package and carries the whole of page 25 including the 21 CFR 1240.62 text, the
business exception, and the Hawaii, New Jersey, Montana and Rhode Island positions.
`russian-tortoise-tank-setup-guide.mdx` carries the tortoise-table argument, the 95 to
100&deg;F basking figure, the 60&deg;F night tolerance, the UVI 3.0 to 4.0 target and the
coil-bulb warning. `russian-tortoise-health-issues-guide.mdx` carries MBD, respiratory
infection, shell rot, pyramiding and the parasite point, and its closing "husbandry pattern"
paragraph is the shape page 17 uses. `russian-tortoise-enrichment-guide.mdx` carries the
digging-as-welfare-necessity argument, the substrate depths, the buried-wall figure and the
scatter-feeding method. `uvb-lighting-complete-guide.mdx` and `t5-vs-compact-uvb-guide.mdx`
carry page 7's Ferguson Zone framing, the 12-month replacement rule, the glass and mesh
attenuation point and the coil argument. `reptile-emergency-plan-guide.mdx` **does** transfer
and carries a Russian tortoise row, 60&deg;F tolerated and act below 60&deg;F outside
brumation, which is what page 32 is built on.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Chelonian herpesvirus, and quarantining a new tortoise | 19, 21 | Cross-species (chelonians) | **Proposed, and the highest-value row here.** Nothing on the site. <em>Testudo</em> tortoises are susceptible to epidemics of viral disease and should be treated as potential high-risk carriers of herpes-type organisms; an infected animal is highly contagious, can look well for long periods, and in an unquarantined group mortality can approach 100%. There is no cure and a survivor is a carrier for life. Needs the signs (runny nose, oral plaques, difficulty swallowing, neurological signs), the months-not-weeks quarantine, separate room and separate equipment, and the point that ranavirus and mycoplasma make the same argument. Serves every tortoise and box turtle on the site |
| Reptile brumation for tortoises | 23 | Cross-species (Testudo and box turtles) | `bearded-dragon-brumation-guide.mdx` and `snake-brumation-guide.mdx` both exist and **neither transfers**: the temperatures, the fasting requirement, the duration and the method are all different, and the fridge technique has no lizard or snake equivalent. Needs the do-not-brumate list, the 2 to 4 week fast with heat still on, the 40 to 55&deg;F (4 to 13&deg;C) band for 2 to 4 months, weekly weighing with the roughly 1% a month loss limit, and the gradual warm-up and immediate soak. The site currently has a paragraph saying brumation exists and is optional |
| Safe weeds and plants for herbivorous reptiles | 12, 13 | Cross-species (tortoises, uromastyx, iguana) | **Proposed.** Nothing on the site names a single weed. This is the page that changes a keeper's costs and the animal's diet quality more than anything else, and it is entirely absent: dandelion, plantain, clover, sow thistle, hawkbit, mallow, chickweed, with identification notes, where not to pick, and how to grow and dry forage. Pairs with a toxic-plant list, which is also missing |
| Sexing a tortoise | 15 | Cross-species (chelonians) | Nothing. Tail length and thickness, vent position relative to the shell margin, plastron concavity, carapace profile, and the point that none of it is reliable below about 4 in of shell. Cheap to write and asked constantly |
| Tortoise eggs and egg binding | 16 | Cross-species (chelonians) | Nothing, and `bearded-dragon-eggs-and-egg-binding-guide.mdx` does not transfer: the nest-site requirement, the depth, the digging behavior and the intervention are all different. Needs the gravid signs, the nest site provided before it is needed, the do-not-palpate warning, the dystocia sign list, and the point that a single female with no male still lays |
| Reading reptile stool, urates and hydration | 24 | Cross-species | **Extends the row already open on the Bearded Dragon and Ball Python blocks.** This species is the strongest case for writing it: a tortoise's urates are the best hydration gauge any reptile owner gets, gritty urates are the warning that precedes a urate blockage, and the weekly soak is when you see both. Add the tortoise column when the article is written |
| Salmonella and reptile hygiene | 10 | Cross-species (all reptiles) | **Proposed.** `salmonella` returns hits only in the three red-eared slider articles. It is the reason the federal four-inch rule exists, it is a real risk rather than a regulatory relic, and every reptile package in the series has to say something about it in a callout because there is nothing to link to. One universal article closes it for reptiles, amphibians and turtles alike: shedding by healthy animals, the hand-to-face route, no kitchen sinks, and who in a household is actually at risk |
| Cloacoliths and urate blockage | 22 | Cross-species (reptiles) | Nothing. A hardened urate stone in the cloaca, presenting as straining while vocalizing, which is a true emergency and one of the very few sounds a tortoise makes. The underlying cause is chronic dehydration, which ties it to the soaking and urates rows above |
| Outdoor housing for reptiles | 9 | Cross-species (tortoises, and some lizards seasonally) | Nothing. Pen construction, the buried barrier depth, permanent shade, shelter, predator cover, and the five ways an outdoor tortoise dies. The site's enrichment guide mentions outdoor pens approvingly and gives one figure |
| Hexamita parva | 21 | Russian tortoise | **Proposed.** A parasite of the renal and urinary system identified frequently in <em>T. horsfieldii</em>, causing rapid weight loss, dehydration and terminal renal failure if untreated, with a published metronidazole dose. Belongs as a section in an expanded `russian-tortoise-health-issues-guide.mdx` rather than a new URL, alongside the other conditions that article names in a sentence each |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the ReptiFiles 8&times;4 ft enclosure figure and the per-additional-animal space on
pages 4 and 5; the UVB mounting distances on page 7; the burrow temperature figures and the
maximum verified 22 cm size on pages 4 and 6; the sexing criteria on page 15; the clutch and
nest-site figures on page 16; the whole brumation protocol on page 23; the <em>Hexamita</em>
dose on page 21; the herpesvirus mortality figure on page 19; the weed identification notes
on page 12; the ninety-days-a-year wild feeding pattern on page 11; and the itemized budget
on page 28.

**Source drift found while building.** Four, and two of them are genuine disagreements
between credible sources rather than errors, which is how they are printed.

- **Enclosure size, a real disagreement.** `russian-tortoise-tank-setup-guide.mdx` gives an
  indoor minimum of 4&times;2&times;2 ft and a functional size nearer 7 ft by 3.5 ft;
  `guides/turtles.js` gives 4&times;2 ft indoor and 4&times;4 ft outdoor. The ReptiFiles
  species care sheet gives 8&times;4 ft, about 32 sq ft, plus at least 10 sq ft per
  additional tortoise. That is a fourfold gap. Neither was picked: page 5 prints 4&times;2 ft
  as the floor and 8&times;4 ft as the target and says why, which is the treatment the
  lovebird and budgie packages gave the same kind of disagreement. The site articles would be
  better carrying both figures too.
- **Humidity, the other real disagreement.** The site gives 30 to 50% ambient and warns that
  high ambient humidity causes respiratory infection. ReptiFiles gives 40 to 75%, lower by
  day and higher at night, following what the animal experiences in a burrow. Both are
  printed on page 8, with the point that they agree on the shape of the answer even where the
  numbers differ: a dry ventilated surface with a genuinely humid microclimate underneath.
  Worth adding that framing to the site article, because "keep it dry" alone produces the
  dehydrated, pyramided tortoise that page 18 describes.
- **Fruit.** The site says fruit should be minimal, under 5% of the diet.
  The Tortoise Trust's position is that fruits are entirely inappropriate for arid-habitat
  species. The package prints the under-5% figure with the specialist position beside it and
  the note that zero is a defensible answer for this species.
- **Cost.** `guides/turtles.js` still carries the `// Rough starting ranges, not verified
  current pricing` comment. `russian-tortoise-cost-guide.mdx` gives $400 to $600 for setup
  and $500 to $650 a year. Page 28 itemizes to **$372 to $775 for equipment and $365 to $715
  a year**, and the wider setup range is the thermostat, the infrared gun and the gram scale,
  which the site's list omits and which are exactly the items that prevent the conditions on
  pages 18 and 19. Also worth adding to the MDX: at those figures the animal costs roughly
  $15,000 to $30,000 over a forty-year life, which is the number that should decide the
  purchase and appears nowhere.

### Cockatiel 1.1, t3 (Sep 2026)

**At 1.1, three of the six rows below are closed.** The corrections pass of 4 September
2026 fixed a blood-feather instruction that told owners the feather "must be pulled", the
highest warming figure in the bird set, an unsourced wing-regrowth interval and an invented
multi-bird quarantine period, and added the nail-trim technique, an avian gastric yeast
entry and the bird fancier's lung note this species needed. See
`notes/cockatiel-v2-notes.md`. Still 40 pages.

The third bird package and the first bird package that was a new build rather than a
rebuild. 40 pages. Source is fragments plus a build script in `source/cockatiel-src/`, and
`notes/cockatiel-v2-notes.md` carries the parked blocks, the per-page free space, seven
undrafted page ideas and a ranked cut list.

**Read the head CSS note in that file before the next build of anything.** The budgie head
was already tightened from the lovebird's; this build tightened it again (page padding
0.56/0.60/0.50, line height 1.36, `p`/`li` at 9.9pt, `td` padding 3.7pt, `table` 9.4pt,
callouts at 7/11pt and 9.6pt/1.36, `check-item` 3.2pt/9.5pt, `h2.h` 12.4pt with 7.5/2.5
margins, `section-title` 18pt, `table.dense td` 2.2pt/1.26) and that one pass took the guide
from **19 overflowing pages to one**, reclaiming roughly 90 to 160 px a page. That is now
two builds in a row where the CSS pass beat every content cut combined. The narrowed side
padding is the part worth calling out separately: 0.06 in off each side is 11.5 px of extra
line width, which removes a wrapped line from most paragraphs on a text-heavy page.

Confirms the lovebird finding that **health sources well and husbandry sources badly**, with
one twist: the cockatiel's health articles are thinner than the budgie's but the veterinary
literature on this species is unusually rich, because it is one of the most-studied pet
birds there is. Almost every page in section 03 is sourced externally rather than from the
site.

Already covered, do not rewrite: `cockatiel-tank-setup-guide.mdx` carries the 20&times;20&times;30 in
minimum, the half-inch bar spacing, the width-over-height argument, the 10 to 12 hour sleep
figure, the PTFE warning and the pellet-forward diet position. `cockatiel-feeding-guide.mdx`
is the best article behind this package: the 75 to 80% pellet split, the safe and toxic food
lists, the no-grit point, the six reasons a cockatiel stops eating, and an unusually honest
passage admitting the site could not find a sourced figure for how long a cockatiel can go
without food. `cockatiel-handling-guide.mdx` carries the 7 to 14 day settling period, the
flat-palm rule, the crest-as-mood-dial material and the full stress and comfort lists.
`cockatiel-enrichment-guide.mdx` carries the 2020 and 2025 studies and the under-one-hour
bowl-feeding figure. `cockatiel-health-issues-guide.mdx` names nutritional disease, the
reproductive group, plucking, psittacosis and the rope-fiber and heavy-metal habit, at a
paragraph each. Note `reptile-emergency-plan-guide.mdx` does **not** transfer, for the same
reason it does not transfer to the lovebird or the budgie.

Rows already open on the Lovebird block that this package hit identically, and that are
**extended there rather than repeated here**: household hazards for pet birds (page 8);
photoperiod, sleep and hormonal management (pages 7, 17, 29); converting a seed eater to
pellets (page 10); quarantining a new bird (pages 27, 29); wing clipping (page 15); reading
bird droppings (page 26); bird power outages, travel and transport (page 34); molt in
companion birds (page 25); and choosing a bird and where from (proposed, page 4). Two notes
to add to those rows from this build. The **pellet conversion** row now has a fifth method
worth including beside VCA's four: eating the food in front of the bird, which works
unusually well in a species that decides what counts as food by watching its flock, and
which converts more birds than any product does. And the **quarantine** row has a citable
species hook: the NASPHV and CDC psittacosis compendium names **cockatiels first** among the
pet birds behind human cases.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Night frights | 7 | Cockatiel, with a smaller cross-species note | **Still open at 1.1.** **The highest-value row here and the one most specific to this species.** Cockatiels are far more prone than most parrots to thrashing panics in the dark, and the injuries are real: broken blood feathers, a bleeding cere, a damaged wing, a foot caught in a toy. The site mentions it only in `guides/birds.js`, in two answers, with no article anywhere. Needs the mechanism (birds do not see in the dark, so a startled bird cannot find a perch), the dim night light as the fix, the partial rather than full cage cover, identifying external triggers like sweeping headlights, the calm response when one happens, and the check-for-blood step afterwards. Lafeber's night fright material is the source to build it on |
| <em>Giardia</em>, and the itch that looks behavioural | 23, 24 | Cross-species (birds, cockatiel-weighted) | **Closed by `bird-feather-loss-and-molt-guide`, Sep 2026.** which carries the VCA passage verbatim; page 23 gained the article's key point at 1.1, that the itch is often the only sign and a clear tray rules nothing out.** Originally: **Proposed, and the best differential in the package.** VCA notes cockatiels are specifically susceptible to <em>Giardia</em>, and that infected birds may be intensely itchy and attack themselves, especially under the wings, which then drives a feather-destructive habit that looks entirely behavioural. Nothing on the site connects a plucking cockatiel to a fecal test. Needs the presentation, the loose-stool-or-itch split, that the itch is often the only sign, and the point that a bird plucking under the wings gets a fecal test before anyone rearranges the cage |
| Sexing a cockatiel, and why the mutations break it | 16 | Cockatiel | **Still open at 1.1.** `bird-sexing-weight-body-condition-guide` names cockatiels as a visual-sexing exception in one FAQ line and never covers the dimorphism or the mutations, so this row did not close. The normal grey is genuinely dimorphic after the first molt, which is one of this species' real advantages and appears nowhere on the site. Needs the yellow face and orange cheeks against a duller face, the solid versus barred underwing, the barred tail, and the whistling difference. Then the important half: lutino, pied, whiteface, albino and pearl birds cannot be sexed this way at all, a pied bird may keep hen-type barring for life, and a DNA test on a feather is the answer wherever it matters. Slots naturally into a wider cockatiel mutations article |
| Talking, whistling and what to expect by sex | 9 | Cockatiel | **Still open at 1.1.** The species is bought for the whistling and the site's coverage is one FAQ answer in `guides/birds.js`. Needs the honest odds (males, single birds, consistent repetition), the fact that hens rarely whistle tunes to any degree, and the trade against getting a pair, which is the decision on page 9 of this package. Related to the budgie block's talking row but not the same article: the behaviour and the odds both differ |
| Training protocols for a small parrot, step by step | 13, 15 | Cross-species (birds) | **Closed by `parrot-training-guide`, Sep 2026.** written once and cross-species, as this row asked, and wired into both this package and the cockatoo's.** Originally: **Proposed.** Extends the budgie block's talking row into the thing underneath it. Target training, step up and down, station, and recall, which page 15 of this package promises as the safe alternative to clipping without teaching it. The cockatoo package's page 16 is the large-parrot version and the mechanics are the same; the article should be written once, cross-species, and wired into both |
| A cockatiel first-aid kit and basic grooming | 23 | Cross-species (birds) | **Closed by `bird-first-aid-kit-and-grooming-guide`, Sep 2026.** At 1.1 the nail-trim technique went onto page 6 and the kit moved to page 29. Note the article establishes there is no verified trim interval, so none is printed.** Originally: nothing. Nail trim interval and technique, towel restraint taught with rewards rather than imposed, when an overgrown beak is a liver sign rather than a grooming job, broken blood feather first aid, and the kit list. The reptile and mammal sets logged their own versions and neither transfers, because the restraint and the bleeding risk are both different in a 90 g animal |

**Numbers with no site source at all.** Rewritten at 1.1, because most of this list now has
one. Closed: the hazards page and the PTFE, lead and zinc material, the 8-hour photoperiod
intervention, the pellet conversion methods, the keel scoring, the egg-binding signs, the
<em>Giardia</em> material, the quarantine period, and the droppings table are all sourced now
and cited on page 39. What is still PDF-only: the night fright material on page 7, which is
the highest-value row still open; the 80 to 125 g weight range and the dimorphism on page 16;
the vegetable and fruit tier charts on pages 11 and 12; the incubation and clutch figures on
page 17; the body temperature, heart rate and respiratory rate on page 19; and the itemized
budget on page 30.

**Source drift found while building.** Four, and the bar spacing one is a safety figure.

- **Bar spacing, and the safe answer is the stricter one.** LafeberVet gives 0.5 to 0.75 in
  (1.3 to 1.9 cm) for a cockatiel. `cockatiel-tank-setup-guide.mdx` gives half an inch or
  smaller and calls wider spacing a genuine head-entrapment risk; `guides/birds.js` gives
  1/2 to 3/4 in, matching LafeberVet. The package prints **1/2 in (13 mm)** and says why: the
  cost of being wrong is a trapped bird, and the top of the published range is not worth the
  convenience. `guides/birds.js` is the file to correct, and the tank-setup guide is already
  right.
- **Captive lifespan, three internal figures and none of them the source's.**
  `encyclopedia/birds.js` has `bio.wildLifespan: "10-15 years (up to 20-25 years in
  captivity)"`, which is the same field-stuffing bug the lovebird and budgie blocks both
  flagged, now confirmed in a third species. `guides/birds.js` says 15 to 25; the cost guide
  says 15 to 20; `cockatiel-vs-cockatoo-guide.mdx` says 15 to 25. LafeberVet gives **12 to 15
  with up to 25 reported**. The package prints the veterinary range. Split that encyclopedia
  field and pick one captive range across the four files.
- **Diet split.** `guides/birds.js` says pellets should be 60 to 70% for the cockatiel, the
  same line the lovebird and budgie blocks flagged on other species in that file. VCA's
  cockatiel feeding page gives **75 to 80% pellets with 20 to 25% fresh**, and
  `cockatiel-tank-setup-guide.mdx` gives 60 to 80% with 20 to 30% fresh, which overlaps.
  The package uses the VCA figures. One correction pass on `birds.js` fixes this for at
  least four species now.
- **Cage size, and it is a genuine disagreement rather than an error.**
  `cockatiel-tank-setup-guide.mdx` gives about 20&times;20&times;30 in as a commonly cited
  minimum with 24&times;24&times;30 in as what many keepers aim for; `guides/birds.js` gives
  24&times;24&times;30 in as the minimum and 30&times;24&times;36 in as strongly preferred;
  LafeberVet gives at least 20 to 24 in (50 to 60 cm) long and wide. Neither end was picked:
  page 5 prints 20&times;20 in as the floor and 24&times;24&times;30 in as the target and says
  why, which is the same treatment the lovebird and budgie packages gave the same
  disagreement.

**Cost.** `guides/birds.js` still carries the `// Rough starting ranges, not verified current
pricing` comment. `cockatiel-cost-guide.mdx` gives $320 to $860 for setup and $200 to $350 a
year. Page 30 itemizes to **$392 to $1,027 to be properly set up and $300 to $565 a year**,
and the difference is four line items no starter list carries: a gram scale, a travel
carrier, a sleep cage or cover, and a real first veterinary visit rather than an amortized
annual check. The MDX figures are worth revisiting, and the annual one specifically, since
its own $60 to $100 vet line is below the $85 to $200 the same article gives for an exam.

### Cockatoo 1.1, t3 (Sep 2026)

**At 1.1, five of the seven rows below are closed.** The corrections pass of 4 September
2026 found one error that mattered more than the rest: page 31 called a rehomed bird's
withdrawal grief, where Merck treats reduced vocalizing and interaction as potential signs
of illness, so the page was telling a new owner to wait out something that wants a vet.
See `notes/cockatoo-v2-notes.md`. The back matter went to three reference pages and the
guide went from 44 pages to 45.

The fourth bird package, the first large parrot in the series, and the build that produced
the second bird row in the class table above. 44 pages, and 45 at 1.1. Source is fragments plus a build
script in `source/cockatoo-src/`, over five page files, and `notes/cockatoo-v2-notes.md`
carries the parked blocks, the per-page free space, seven undrafted page ideas and a ranked
cut list.

This build inverts the lovebird finding. **For the cockatoo the behaviour material sources
well and everything else sources badly**, because the site's cockatoo set is unusually
strong on exactly the thing this species is famous for: `cockatoo-enrichment-guide.mdx`
carries the sulphur-crested feather-plucking treatment study, and
`cockatoo-screaming-feather-plucking-explained.mdx` is a full behavioural deep dive. What
the site does not have is anything about the household: dust, human respiratory risk, the
purchase decision, succession, or the cost of a forty-year animal.

Already covered, do not rewrite: `cockatoo-tank-setup-guide.mdx` carries the 36&times;24&times;48 in
minimum and the 48&times;48&times;60 in target, the 3/4 to 1 in bar spacing, the stainless
versus powder-coated argument, the never-galvanized rule, the escape-artist point, the 10 to
12 hour sleep figure and the air purifier. `cockatoo-feeding-guide.mdx` carries the 75 to
80% pellet ratio, the toxic list, the no-grit point and the lipoma link.
`cockatoo-handling-guide.mdx` carries the surrender pattern with the consultant's
over-half-her-practice figure, the bite risk, the sexual-maturity change at 5 to 7 years and
the four first-timer mistakes including over-bonding.
`cockatoo-health-issues-guide.mdx` names feather-destructive behaviour, PBFD, lipomas and
hepatic lipidosis. `cockatoo-enrichment-guide.mdx` is the best article behind this package
and carries the training result, the six-hour wild foraging figure, the destruction-as-normal
point and the independence trap. `cockatoo-legal-guide.mdx` carries the whole of page 30.
Note `reptile-emergency-plan-guide.mdx` does **not** transfer, for the same reason it does
not transfer to any bird.

Rows already open on the Lovebird block that this package hit identically, and that are
**extended there rather than repeated here**: household hazards for pet birds (page 11);
photoperiod, sleep and hormonal management (pages 9, 22); converting a seed eater to pellets
(page 12); quarantining a new bird (page 29); wing clipping (page 20); reading bird droppings
(page 28); bird power outages, travel and transport (page 38); molt in companion birds (page
24, folded into the plucking differential); and choosing a bird and where from (page 6,
which this package finally drafted as a full page and which is the shape that article should
take). One note to add to the **hazards** row: for a large parrot it needs a mains-cable
section, because this beak goes through a cable a small parrot could not dent.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Feather dust, air quality and bird fancier's lung | 10 | Cross-species (birds, cockatoo and African grey weighted) | **Closed by `bird-feather-dust-air-quality-guide`, Sep 2026.** The cockatiel package gained a note from it at 1.1 too, since the article's scope names cockatiels and only this block had logged the row.** Originally: **The highest-value row here, and there is nothing on it anywhere.** Powder-down species produce enough keratin dust to film every surface in a room daily, and prolonged exposure to avian proteins in that dust and in dried droppings causes hypersensitivity pneumonitis in people, with progressive pulmonary fibrosis as the serious complication and removal of exposure as part of the treatment. Needs the control hierarchy (HEPA purifier, bathing the bird two or three times a week, damp-wiping rather than dry dusting, hard floors, not the bedroom), the point that dust is also the PBFD transmission route, and the advice to tell a doctor you keep a parrot if you develop an unexplained cough. Serves cockatoo, African grey and cockatiel, and it is the page a buyer most needs before purchase rather than after |
| Succession and estate planning for a long-lived pet | 31 | Cross-species (large parrots, tortoises) | **Closed by `long-lived-pet-succession-planning-guide`, Sep 2026.** which reaches tortoises as this row predicted, and supplied the pet trust law position page 31 gained at 1.1.** Originally: **Proposed, and it reaches well past birds.** A cockatoo lives 30 to 45 years and a Moluccan up to 70; a Russian tortoise block in this same file already notes a forty-year animal costing $15,000 to $30,000. The site has nothing on what happens to either when the owner does not outlive it. Needs the named guardian who has actually agreed, the sanctuary fallback contacted in advance, money attached to the animal because inheriting one without funds is inheriting a bill, the will clause since pets pass with the estate as property, the care file, and a rehoming section that says go to a rescue rather than a classified ad and never advertise free to a good home |
| Training as the primary intervention for a large parrot | 16 | Cross-species (large parrots) | **Closed by `parrot-training-guide`, Sep 2026.** written once and cross-species as this row insisted, and wired into both this package and the cockatiel's.** Originally: **Proposed, and it has the best evidence behind it of anything in the bird set.** The site's cockatoo enrichment guide reports the sulphur-crested study finding that training sessions beat medication, socialization and feeding enrichment, then stops. An article should teach the thing: ten to fifteen minutes twice a day, positive reinforcement with a marker, ending while the bird still wants more, rotated between everyone in the household, and the behaviour ladder of target, step up and down, station, recall, voluntary crate entry and towel acceptance. The cockatiel block logs the small-parrot version of the same gap; **write one cross-species article, not two**, since the mechanics are identical and only the reward and the bite risk scale |
| Over-bonding and building independence | 18 | Cross-species (large parrots) | **Still open at 1.1.** `parrot-training-guide` supports the rotation half through VCA, but nothing covers the prevention protocol. Extends rather than duplicates the site's screaming and plucking article, which explains the behaviour but not the prevention. Needs the specific first-weeks warning, that intense one-on-one time early cements an anxious dependency rather than a healthy attachment, and then the protocol: several people in rotation, rewarding self-directed activity, leaving the room constantly and briefly, a play stand that is genuinely good to be on, low-key departures, and the shoulder question. Expand `cockatoo-screaming-feather-plucking-explained.mdx` rather than opening a new URL |
| Sexing a monomorphic parrot, iris colour and DNA | 21 | Cross-species (birds) | **Closed by `bird-sexing-weight-body-condition-guide`, Sep 2026.** which absorbed the cockatoo half as this row asked, and supplied the pale grey juvenile iris page 21 gained at 1.1.** Extends the lovebird block's sexing row with the cockatoo half, which the lovebird build did not need. Mature white <em>Cacatua</em> hens often show a reddish or chestnut iris against the male's dark brown to black, and it is useful, partial, species-dependent, lighting-dependent and absent in juveniles. DNA on a blood spot or a plucked feather remains the answer. The lovebird row should absorb this rather than a second row being opened |
| A large-parrot noise reference, with a measured figure | 5, 19 | Cross-species (large parrots) | **Still open, and now known to be unfillable from public sources.** `choosing-a-pet-bird-guide` searched for a measured sound-pressure figure and reports that none exists from an acoustic or veterinary source worth citing, and that the decibel numbers in circulation trace back to no study. The package still prints none, which is now a documented position rather than a gap. Originally: **Proposed, and it is the one hole in this package that a source could have filled and did not.** Page 19 handles screaming honestly but prints no measured sound level, because none was found in a source worth citing. Noise is one of the top reasons a cockatoo is rehomed and it is the question a buyer in an apartment most needs answered. A sound-pressure figure from an acoustic or veterinary source, plus the dawn-and-dusk contact-calling pattern and the fact that quieting the bird is not an achievable goal, would make the housing decision concrete rather than adjectival |
| Working with a rescue or rehomed parrot | 6, 31 | Cross-species (large parrots) | **Closed by `rehomed-parrot-guide`, Sep 2026.** and it corrected this package rather than only extending it: page 31 called a rehomed bird's withdrawal grief, where Merck treats reduced vocalizing and interaction as potential signs of illness. Fixed at 1.1.** Originally: **Proposed.** The package recommends adoption on page 6 and then teaches nothing about it. An adult bird with a plucking history, an existing bond to someone else, and unknown handling is a different starting position from a weaned baby, and it is the position an increasing share of large-parrot owners are actually in. Needs the transition period, the grief behaviours, what to ask a rescue, and what a rescue will ask you |

**Numbers with no site source at all.** Rewritten at 1.1, because most of this list now has
one. Closed: the feather dust and bird fancier's lung page, the iris sexing and keel scoring,
the PTFE, lead and zinc material, the 8-hour photoperiod intervention, the egg-binding signs,
the quarantine period, the droppings table, and the whole of the succession page are all
sourced now and cited on pages 43 and 44. What is still PDF-only: the weights by species and
the life span band on pages 4, 6 and 21; the sexual maturity, incubation, clutch and weaning
figures on pages 4, 17 and 22; the body temperature, heart rate and respiratory rate on page
23; the 45-day doxycycline course on page 27; the PBFD form and incubation detail on page 25;
and the itemized budget on page 34. Plus the measured noise figure on pages 5 and 19, which
the package deliberately does not print and which `choosing-a-pet-bird-guide` has since
confirmed does not exist in a citable source.

**Source drift found while building.** Four.

- **Life span.** `cockatoo-cost-guide.mdx` and `guides/birds.js` give 40 to 70-plus and 40 to
  60, with umbrellas at 50 to 70. LafeberVet's veterinary information sheet gives **30 to 45
  years generally, with Moluccans up to 70**. The package prints the veterinary range with
  the documented upper figure beside it, because the planning consequence on page 31 is
  identical either way. `encyclopedia/birds.js` also carries `bio.wildLifespan: "40-60 years"`
  for the cockatoo, which unlike the lovebird, budgie and cockatiel entries is at least not
  stuffed with a captive figure, so this one is fine as it stands.
- **Diet split.** `guides/birds.js` says a large parrot pellet should form 60 to 70% of the
  diet for the cockatoo. VCA's cockatoo feeding page gives **75 to 80% pellets** with fresh
  food at no more than 20 to 40%, and `cockatoo-tank-setup-guide.mdx` and
  `cockatoo-feeding-guide.mdx` both already say 75 to 80%. This is the same `birds.js` line
  now flagged on five species across four blocks. It is one correction pass and it should be
  done.
- **Weight.** `encyclopedia/birds.js` gives 1.1 to 1.7 lb for the umbrella, roughly 500 to
  770 g. LafeberVet gives **400 to 700 g**. The ranges overlap and neither is wrong; the
  package prints the veterinary figure and says on page 21 that the bird's own stable
  baseline matters far more than the published range.
- **Setup cost, and it is the largest gap in the series so far.** `cockatoo-cost-guide.mdx`
  headlines $250 to $1,300 for setup while its own table lists a stainless cage at $1,450 to
  $1,550 and a powder-coated one at $820 to $880, so the headline is below the price of the
  single largest item in its own list. Page 34 itemizes to **$1,205 to $2,980 of equipment,
  $2,105 to $6,930 to be fully set up including the bird and a first vet visit with a PCR
  panel, and $1,160 to $2,380 a year**, with the lines summing to the totals. The additions
  over the site's list are a play stand, an air purifier, a gram scale, a large carrier and a
  real veterinary line. The MDX headline needs fixing, and the annual figure is worth adding,
  because at these numbers the animal costs **$46,000 to $95,000 over a forty-year life**
  before a single emergency, which is the figure that should decide the purchase and appears
  nowhere on the site.
### Leopard Gecko 2.0, t3 (Sep 2026)

A rebuild, not a new build: 1.0 was 22 pages on the pre-t3 layout. It came out at 34 pages,
the canonical reptile count, with no page added or dropped from the skeleton. Three
skeleton pages changed meaning rather than moving: page 7 is thermostats and probe placement
rather than UVB distance (a mat species has no lamp-height problem, it has a probe-placement
problem), page 11 became the gut-load chart rather than a greens chart, and page 12 became
treats plus the food-refusal thresholds, which is where this species' real decision lives.

Already covered, do not rewrite: `leopard-gecko-tank-setup-guide.mdx` carries the
36&times;18&times;18 in minimum, the three-hide system, the 30 to 40% versus 70 to 80% humidity
split, and the UVB position. `leopard-gecko-temperature-guide.mdx` carries the full gradient
and the measurement argument. `leopard-gecko-feeding-guide.mdx` carries the schedule by age,
the safe and unsafe feeder lists, the seven refusal reasons and the honest "no one agrees on
a day count" framing. `leopard-gecko-health-issues-guide.mdx` carries cryptosporidiosis at
real depth, MBD, impaction, dysecdysis, dystocia and prolapse.
`leopard-gecko-handling-guide.mdx` carries the settling period, the session lengths and the
tail-autotomy section. `leopard-gecko-enrichment-guide.mdx` carries the Bashaw and Rickman
studies and the priority order, which is unusual: most enrichment pages in this series are
extrapolation and this one is evidence. `gut-loading-feeder-insects-guide.mdx` carries the
whole of page 11, ratios and timing window included. `reptile-emergency-plan-guide.mdx`
carries pages 28 and 29 and has a leopard gecko row in its temperature table.
`reptile-shedding-complete-guide.mdx` carries the shed cycle on page 20.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Gecko sexing, growth and body condition | 14 | Cross-species (geckos) | Nothing for any gecko, and the snake row above does not transfer: no probing, no popping, and pores plus hemipenal bulges instead. Needs the age-by-weight table, what a tail as thick as the neck actually means, and the fat-pad signs of an obese adult. Serves leopard, crested, gargoyle, African fat-tail, tokay, mourning and leaf-tailed |
| Female lizards: infertile clutches, lay boxes and egg binding | 15 | Cross-species (egg-laying lizards) | `bearded-dragon-eggs-and-egg-binding-guide.mdx` exists and is the pattern, but it is a bearded dragon article and none of its numbers transfer. A lizard-wide or gecko-wide version needs the "a lone female still lays" point, the lay-box build, the under-48-hours rule, and the calcium drain of repeated clutches |
| Leopard gecko growth and weight reference | 14 | Leopard gecko | Expand `leopard-gecko-health-issues-guide.mdx` or add a growth-and-weight-checks article. The site has no weight figures at all for this species, which is awkward given that weight is the single check this package leans on hardest |
| Choosing and sourcing a reptile | not in 2.0 | Cross-species (reptiles) | **Proposed**, from the build rather than a grep. Both mammal packages and the bird package needed their own version of this page. For reptiles it is breeder versus shop versus rescue versus expo, what a healthy animal looks like in the enclosure you are buying it from, what to ask about feeding history and quarantine, and for leopard geckos specifically, what a morph price actually buys |
| Morph-linked care differences in leopard geckos | 6, 7 | Leopard gecko | **Proposed.** Pigment is not cosmetic here: albino and other pale morphs burn under UVB that a normally pigmented gecko handles, which the package prints as a lower UVI target with no site article behind it. The neurological problems reported in some morph lines belong in the same article, and nothing on the site touches either |
| Cohabitation: why one reptile per enclosure | 5 | Cross-species (reptiles) | **Proposed.** Every reptile guide on the site says "house singly" in a sentence and moves on. The article is the reasoning: resource competition at the one warm spot, the injuries that follow, why two females "getting along" is usually one female losing quietly, and the disease-transmission half that quarantine articles only half cover |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the growth table on page 14, the body-condition descriptions on page 14, the sexing
detail on page 14, the lay-box dimensions and the under-48-hours dystocia rule on page 15,
the itemized budget subtotals on page 24, and the bladder-stone paragraph on page 19.

**Source drift found while building.** Three, none serious, all worth a pass.

- **Cool-side temperature.** `leopard-gecko-tank-setup-guide.mdx` and `guides/geckos.js`
  both say 72 to 78&deg;F, `leopard-gecko-temperature-guide.mdx` says 70 to 77&deg;F, and
  ReptiFiles gives 70 to 77&deg;F. The package prints 70 to 78&deg;F rather than picking a
  side, since the spread is small and every version is inside a safe band. Worth aligning the
  three site files anyway.
- **Adult length.** The encyclopedia says 7 to 11 in (18 to 28 cm), ReptiFiles says 7 to 10 in
  and LafeberVet says 6.5 to 8 in (17 to 20 cm). Page 4 prints the full 6.5 to 11 in span and
  page 34 says why. This is a genuine disagreement in the literature, not a site error.
- **The checklist omits plain calcium.** `guides/geckos.js` lists "Calcium w/D3 supplement"
  and a multivitamin in the leopard gecko `checklist[]`, but not plain phosphorus-free
  calcium, which is the daily dusting in its own `sections.diet` text and in the MDX. A
  buyer working from that checklist buys the backup and misses the staple.

### Crested Gecko 2.0, t3 (Sep 2026)

A rebuild: 1.0 was 21 pages on the pre-t3 layout. It came out at 34 pages, and the reptile
skeleton absorbed an arboreal tropical species with two page swaps rather than a new shape.
See the arboreal note under **Adapting the skeleton by animal class** for what moved.

Already covered, do not rewrite: `crested-gecko-tank-setup-guide.mdx` carries the
18&times;18&times;24 in minimum, the front-opening argument, the temperature table and the
85&deg;F ceiling, the substrate depth and cleaning intervals, and the UVB spec.
`crested-gecko-humidity-guide.mdx` carries the 60 to 80% range, the wet-dry cycle, the screen
top fix and the low-humidity signs. `crested-gecko-feeding-guide.mdx` is the strongest
article of the set: portions by age, the "do not introduce insects first" point, the picky
eater and flavor rotation finding, the safe and toxic food lists, the nine refusal reasons
and the 2 to 3 week versus 3 day thresholds. `crested-gecko-health-issues-guide.mdx` carries
MBD, floppy tail syndrome, impaction, dysecdysis, respiratory infection and the weekly
weigh-in advice. `crested-gecko-handling-guide.mdx` carries the settling period, the weight
thresholds for handling, treadmilling, and the permanent tail-loss section with the genome
paper behind it. Note `reptile-emergency-plan-guide.mdx` **only half transfers**: its
temperature table has a crested gecko row and its sitter section is fine, but it is built
around losing heat, and for this species the emergency runs the other way.

| Gap | Pages | Scope | Shape |
|---|---|---|---|
| Overheating: heat stress in reptiles and what to do about it | 19, 28 | Cross-species (reptiles) | Nothing anywhere on the site, and it is the highest-value row in this block. Every reptile article on the site is written around providing heat. What a heat-stressed reptile looks like, what to do in the ten minutes after you find one, how to cool a room and an enclosure without shocking the animal, and the species where the ceiling matters more than the floor: crested, gargoyle and leachianus geckos, and any tropical species in a glass tank in a sunny room |
| Complete diet powders: brands, mixing, storage and rotation | 10 | Cross-species (fruit-eating geckos) | The feeding guide covers the schedule and the picky-eater fix but not the product itself. Mixing ratio and consistency, why made-up diet is not stored, how long a bag actually lasts, what "complete" means and why nothing is dusted into it, and the flavor rotation that keeps a fussy gecko eating. Serves crested, gargoyle, chahoua, leachianus and mourning geckos |
| Floppy tail syndrome, at package depth | 17 | Cross-species (crested and gargoyle) | Expand `crested-gecko-health-issues-guide.mdx`, not a new URL. It currently gets a paragraph. Needs the flat-glass-sleeping mechanism, the furnishing fix that prevents it, the honest "irreversible but generally benign" framing, and where it does and does not overlap MBD |
| Gecko sexing, growth and body condition | 14 | Cross-species (geckos) | Same row as the leopard gecko block above, and one article closes both. The crested half is weight-milestone shaped rather than length-shaped: under 10 g, 8 to 15 g, adult at 35 to 55 g |
| Female lizards: infertile clutches, lay boxes and egg binding | 15 | Cross-species (egg-laying lizards) | Same row as the leopard gecko block above. The crested half adds the every-4-to-6-week cycle and the calcium-crash risk in an over-bred pair |
| Bioactive setups, properly | 5, 13, 32 | Cross-species (tropical reptiles) | **Proposed.** `crested-gecko-enrichment-guide.mdx` names bioactive and says it is optional, which is true and not useful to someone deciding. The article is the drainage layer, the ABG-style mix, springtails and isopods, plant choice, the establishment period before an animal goes in, and the honest maintenance comparison against a paper-towel setup |
| Handling a jumper | 8 | Cross-species (arboreal geckos) | **Proposed.** The handling guide has treadmilling and the tail warning, both good, but nothing on the practical problem every new crested gecko owner hits in week three: the gecko launches. Where to sit, what to do when it is on the curtain, how to catch one without grabbing it, and why the answer is never the tail |

**Numbers with no site source at all**, carried by the PDF only until the articles above
exist: the weight-milestone table and the sexing detail on page 14, the lay-box dimensions
and the under-48-hours dystocia rule on page 15, the heat-stress response on page 19, the
itemized budget subtotals on page 24, and the heatwave plan on page 28.

**Source drift found while building.** Three.

- **The cost block is flagged unverified and it shows.** `guides/geckos.js` carries a
  "rough starting ranges, not verified current pricing, needs a review pass" comment on the
  crested gecko `costs{}`, and its annual list and `crested-gecko-cost-guide.mdx` do not
  itemize the same things. Page 24 rebuilds the list from the MDX plus the misting bottle
  from the JS, and the lines sum to the printed totals: $335 to $530 equipment, $400 to $740
  all in, $31 to $52 a month. That comment has now outlived two packages and should be
  resolved rather than carried.
- **Calcium with D3 on every insect feeding.** `guides/geckos.js` says feeder insects should
  be "lightly dusted with calcium w/D3 supplement each time they're offered", on top of a
  complete diet powder that already supplies D3. The MDX says a calcium supplement rather
  than specifying D3, which is the safer wording. D3 is fat-soluble and accumulates, so the
  package prints plain calcium on most insect feedings and D3 once or twice a week. The JS
  line is worth correcting; this is the same class of error the bearded dragon package was
  rebuilt to fix.
- **A wild lifespan field carrying a captive figure.** `encyclopedia/geckos.js` gives the
  crested gecko `bio.wildLifespan: "10-20 years"`, which is the captive range every source
  quotes, not a wild one. The leopard gecko entry in the same file gets this right and says
  so explicitly. African fat-tail carries the same 10 to 20 figure and is worth checking too.
  The package uses 15 to 20 years captive, with the earliest captives into their 30s, and
  never touches the wild field.

**One finding worth carrying to the next arboreal build.** The temperature ceiling is not a
husbandry detail on this species, it is the organising idea of the whole package, and pages
3, 5, 6, 13, 19, 23, 26 and 28 all point back at it. Writing it as a single line in a table
the way the reptile skeleton assumes would waste the most useful thing the guide has to say.
