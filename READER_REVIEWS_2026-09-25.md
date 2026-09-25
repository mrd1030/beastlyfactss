# Reader Reviews, 2026-09-25

Source: 24 reader review files in `.reader/r0925-out/` (c01 to c24), one section per species. Readers followed `.reader/prompt-r0925.md`: read the hub (00), the encyclopedia (01) and every deep dive as plain text, then Grep the set's `sidebar/` folder, which held the FULL text of every Health and More article, before calling anything a gap. Legal guides were excluded on purpose, so every "legal guide not in this set" gap is dropped below.

Grades are the readers' own. Every conflict and every ad-like quote in sections 2 and 4 was checked against the real files (`content/guides/*.mdx`, `src/lib/data/guides/*.js`, `src/lib/data/encyclopedia/*.js`). Line numbers are as of today.

---

## 1. Summary

### Scope

| | Count |
|---|---|
| Review files | 24 |
| Species care sets (every non-dog, non-cat species) | 84 |
| Pages graded | 709 (84 hubs, 84 encyclopedias, 504 standard deep dives, 37 other deep dives) |
| Conflicts checked | 63 (sections 2 and 4 of the reviews) |
| Gaps listed by readers | 209 |

### Page grades by page type

| Page type | A | A- | B+ | B | B- | C+ | Total |
|---|---|---|---|---|---|---|---|
| Hub | 82 | 1 | 1 | 0 | 0 | 0 | 84 |
| Encyclopedia | 25 | 17 | 25 | 16 | 0 | 1 | 84 |
| Cost | 75 | 3 | 4 | 1 | 1 | 0 | 84 |
| Handling | 79 | 4 | 1 | 0 | 0 | 0 | 84 |
| Health issues | 76 | 5 | 1 | 2 | 0 | 0 | 84 |
| Tank setup | 79 | 4 | 1 | 0 | 0 | 0 | 84 |
| Feeding | 81 | 3 | 0 | 0 | 0 | 0 | 84 |
| Enrichment | 51 | 18 | 10 | 5 | 0 | 0 | 84 |
| Other (vs. pages, special topics) | 13 | 9 | 11 | 4 | 0 | 0 | 37 |
| **Total** | **561 (79%)** | **64 (9%)** | **54 (8%)** | **28 (4%)** | **1** | **1** | **709** |

No page got C, D or F. A grep for a bare "F" in the reviews only finds Fahrenheit values ("65F", "130F" in the uromastyx review); it is not a grade.

### Set grades (84 sets)

| Grade | Sets |
|---|---|
| A | 25 |
| A- | 46 |
| B+ | 13 |
| B or lower | 0 |

At B+: molly, cardinal tetra, amano shrimp, parrotlet, cockatoo, conure, hedgehog, gargoyle gecko, green iguana, red-eared slider, Russian tortoise, sulcata tortoise, tiger salamander.

Gargoyle gecko's B+ rests on a reader error (section 2); on content it reads as A-. Sulcata's B+ partly rests on another (the import ban is real and sourced on its legal guide).

### Compared with 2026-09-24

The 09-24 run graded 756 species pages, dogs and cats included, without full sidebar text. Its non-dog, non-cat species sets at B+ or lower were millipede, fire skink, degu, corydoras, tiger salamander, canary, quaker parakeet and cockatoo. Six of those eight moved up: millipede and corydoras to A, fire skink, degu, canary and quaker to A-. Cockatoo and tiger salamander stay at B+.

| | 09-24 (all species incl. dog/cat) | 09-25 (non-dog, non-cat) |
|---|---|---|
| Species pages at A | 76% | 79% |
| Species pages at C or below | 2 (corydoras handling, tiger salamander vs. axolotl) | 0 (one C+: conure encyclopedia) |
| Sets at A | 29% | 30% |
| Sets at B+ | 11% | 15% |

The B+ count rose for a new reason: with the sidebar text in hand, readers checked species pages against the shared guides. Seven of the 13 B+ sets were marked down mainly for a species-vs-sidebar conflict. The encyclopedia is still the weakest page type (50% at B+ or lower, against 40% on 09-24), mostly for having "nothing to act on".

### The 5 most important findings

1. **The care guides are strong and still improving.** 88% of pages got A or A-, no page fell below C+, and hubs (82 of 84 at A) and feeding guides (81 of 84) are nearly flawless. The two C pages from 09-24 are now A (corydoras handling) and B (tiger salamander vs. axolotl).
2. **Most confirmed conflicts now sit between a species page and a shared Health and More guide.** Of 46 confirmed conflicts, 24 are species page vs. shared guide. The biggest cluster is fish: four species give 2 to 3 or 2 to 4 weeks of quarantine against the shared guide's 30-day floor, three livebearers give a 2 to 4 week cycle against 4 to 6, and three species disagree with the ich guide on heat. The shared guide is not always the right side: the UVB guide's zone numbers, three overview articles and the tortoise soaking guide are the side that needs the edit.
3. **The UVB guide's Ferguson zone numbers look shifted.** `uvb-lighting-complete-guide.mdx` gives Zone 3 (bearded dragons) a UVI of 1.1 to 3.0 and Zone 4 a UVI of 2.9 to 7.4. In Baines et al. 2016, the source the page cites, those look like the Zone 2 and Zone 3 maximums. That comparison came from the compiling agent's memory of the paper, not a fresh read, so it is unverified: load Baines 2016 and check before editing. This one table sets up conflicts with bearded dragon, leopard gecko, crested gecko and fire skink.
4. **The sidebar overview articles drift from the species pages.** The "Four Pets" and "Three Pets" overviews repeat hedgehog legal status and a 10% wobbly hedgehog figure that the hedgehog pages correct, a "documented majority" for ferret adrenal disease, a different sugar glider group size, a different ferret protein floor, and a 16-inch tokay. Readers use these pages to check the species pages.
5. **Gaps got specific.** Once the sidebar check was applied, 166 of 209 gaps held up. The recurring ones are introductions and pairing, bite first aid, sexing, how to find an exotic vet, buy lists missing a needed item (air pump, thermostat), and shared small mammal guides (grooming, vet travel, heat) written around rabbits and guinea pigs. Hamster, mouse, rat, ferret, hedgehog, chinchilla, gerbil and flying squirrel readers all landed on pages that never mention their animal.

---

## 2. Conflicts, verified

Result: **46 CONFIRMED, 14 PARTLY, 3 READER ERROR** (63 checked; the three-species cycling row counts as three). Five more pairs that readers raised and then dismissed themselves are listed at the end and not counted.

### CONFIRMED

**Lifespan**

| Species | Side A | Side B | Fix |
|---|---|---|---|
| Cockatoo | Hub `birds.js:335` and `cockatoo-cost-guide.mdx:18`: "40 to 60 years is typical" | `choosing-a-pet-bird-guide.mdx:41,68,84,177`: "25 to 45 years ... 70 to 80 or more in the larger species" (VCA) | VCA is the only named source seen. Needs a source check; likely split by species size on the hub and cost guide. |
| Ball python | Encyclopedia `snakes.js:11` (field `wildLifespan`): "around 20 years in captivity" | Hub, cost, both vs. pages: "20 to 30 years, up to 48 recorded" | Take the captive figure out of the wild field and match 20 to 30. |
| Sulcata tortoise | Hub `turtles.js:389`: "70 years or more, potentially 100" as the typical figure | Encyclopedia `turtles.js:67`: ADW "average captive longevity at 54.3 years, and 70 years or more is achievable" | The encyclopedia cites ADW. Hub and cost guide should say 50 to 70 typical, 70+ achievable. |
| Uromastyx vs. bearded dragon | `uromastyx-vs-bearded-dragon-guide.mdx:47,68`: dragon "8-12 years" | Bearded dragon hub `lizards.js:56` and encyclopedia: 10 to 15 years | Match the dragon's own pages. |

**Sizes**

| Species | Side A | Side B | Fix |
|---|---|---|---|
| Zebra finch | Encyclopedia `birds.js:135`: "0.3-0.5 oz" (8.5 to 14 g) | `zebra-finch-health-issues-guide.mdx:78`: "10 to 16 grams" | Needs a source check; convert whichever wins so oz and g agree. |
| Tokay gecko | `uromastyx-tokay-africangrey-jumpingspider-overview.mdx:67`: "averaging 10 to 12 inches and capable of reaching 16" | Encyclopedia `geckos.js:93` and hub `geckos.js:577`: "10-15 inches" | Bring the overview to 10 to 15. |
| Mourning gecko | `mourning-gecko-cost-guide.mdx:70,80`: prices an "18x18x24 in planted vivarium" as the setup | Setup guide `:43,63` and hub `geckos.js:472`: start with 12x18x18, step up later | The hub was fixed for this on 09-16 (comment at `geckos.js:448`). Price the 12x18x18 in the cost guide. |
| Green iguana | `green-iguana-cost-guide.mdx:101`: "6 by 3 by 6 foot ... at a floor, with 10 by 5 by 6 as the working minimum" | `green-iguana-tank-setup-guide.mdx:61`: "a minimum of 10 feet long by 5 feet wide by 6 feet tall" | Drop 6x3x6 as a "floor" in the cost guide. |

**Temperature, water and light**

| Species | Side A | Side B | Fix |
|---|---|---|---|
| Discus | `discus-health-issues-guide.mdx:61` and hub `fish.js:496`: ich heat "toward roughly 90°F rather than the 82 to 86°F" | `aquarium-ich-treatment-guide.mdx:79`: "Discus: 82 to 86°F is its normal range / Yes, it lives there already" | The discus page cites discus.com's ich article, the ich guide cites VCA's 86°F. Needs a source check; most likely the ich guide's discus row should note the discus-specialist 90°F practice. |
| Betta | Hub `fish.js:119`: "raise the tank slowly to 86°F ... inside this species' range" | Setup guide `:45,67`: "76 to 82°F"; ich guide row: "Betta: 76 to 82°F / Yes, raised slowly, for the course only" | Hub wording: 86°F is a treatment ceiling, not inside the range. |
| Cardinal tetra | `cardinal-tetra-health-issues-guide.mdx:47,78`: raising temperature is advice "this protocol does not call for" | Ich guide `:43`: "Discus and cardinal tetras can" take 86°F; cardinal setup guide `:49,69` says it tolerates 86°F | The ich guide and the species' own setup guide agree. Add the heat option to the health guide. |
| Swordtail | `swordtail-handling-guide.mdx:58`: "pH 7.0 to 8.0" | Setup `:51` and hub `fish.js:1183`: "pH 7.0 to 8.4" | Handling guide to 8.4. |
| Molly, platy, swordtail (cycling) | `molly-tank-setup-guide.mdx:57,107`, `platy-tank-setup-guide.mdx:55,99`, `swordtail-tank-setup-guide.mdx:117`, hub `fish.js:810,1084`: fishless cycle "2 to 4 weeks" | `aquarium-cycling-guide.mdx:39,81`: "Most fishless cycles finish in four to six weeks" | The cycling guide cites sequencing data. Change to 4 to 6. |
| Amano shrimp | `amano-shrimp-tank-setup-guide.mdx:48,72`: "4 to 15 dGH ... many keepers targeting 6 to 8" | `shrimp-molting-guide.mdx:48,69,106`: "Caridina species GH 4 to 6" | Needs a source check. The 4 to 6 band fits bee and crystal Caridina, not hard-water-tolerant amano. Add an amano exception to the molting guide. |
| Chinchilla | `chinchilla-tank-setup-guide.mdx:50,79,88` and hub `smallMammals.js:28`: dust bath "10 to 30 minutes" | `small-mammal-grooming-nails-molting-guide.mdx:50,123`: Merck "up to 15 minutes at a time" | Merck supports up to 15. Change the chinchilla pages. |
| Leopard gecko | Setup `:75` and hub `geckos.js:375`: UVI "0.5 to 1.5" | `uvb-lighting-complete-guide.mdx:93`: Zone 1 "UVI 0.6 to 1.4" | Small drift. Match 0.6 to 1.4 once the zone table is checked. |
| Crested gecko | Setup `:49` and hub `geckos.js:117`: UVI "1.0 to 2.0" | UVB guide Zone 1, which names crested geckos: "0.6 to 1.4" | Needs a source check. Gargoyle (`geckos.js:199`) and leaf-tailed (`geckos.js:297,332`) use the same 1.0 to 2.0, so check all three together. |
| Bearded dragon | `bearded-dragon-tank-setup-guide.mdx:87,94`: basking "UVI ... 4.0-4.5" | UVB guide `:95`: Zone 3 "UVI 1.1 to 3.0" | The dragon page is probably right. Fix the UVB guide's zone table against Baines 2016 (see finding 3). |
| Uromastyx | `uromastyx-tank-setup-guide.mdx:76`: "nighttime dropping to around 65F, usually without needing supplemental night heat" | `reptile-emergency-plan-guide.mdx:75`: normal night low "68°F", act at "68°F, and never below 65°F" | Needs a source check (the table cites Chicago Exotics). Make the setup guide's night low 68. |
| White's tree frog | `whites-tree-frog-tank-setup-guide.mdx:50,83`, cost guide `:95`: replace UVB "every 9 to 12 months" | UVB guide `:47,128`: amphibian bulbs "every 6 to 8 months" | Change the frog pages to 6 to 8. |
| Tiger salamander vs. axolotl | `tiger-salamander-vs-axolotl-guide.mdx:67`: axolotl "60-64°F" | Same file `:94`: "60 to 68 degrees F" | 68 to 64, matching the axolotl pages. |
| Uromastyx vs. bearded dragon | `uromastyx-vs-bearded-dragon-guide.mdx:65`: dragon basking "~100°F" | Dragon hub `lizards.js:243`: "95 to 110°F for adults" | Match the dragon hub. |

**Costs and arithmetic**

| Species | Side A | Side B | Fix |
|---|---|---|---|
| Lovebird | `lovebird-cost-guide.mdx:71` table: cage "$80 - $150" | Same file `:46,78`: "$80 to $200" | Table to $80 to $200. |
| Parrotlet | `parrotlet-cost-guide.mdx:81,95`: "$21 to $33 a Month" | Same file FAQ `:48`: "$20 to $40 a month" | FAQ to $21 to $33 (the body shows the math). |
| Milk snake | `milk-snake-cost-guide.mdx:4,17,18,19,60`: snake "$60 to $500" | Same file `:44,62`: cheapest subspecies (Pueblan) "$70 to $100" | $60 to $70 in all five places, or show a $60 listing. |

**Diet**

| Species | Side A | Side B | Fix |
|---|---|---|---|
| Ferret | `ferret-feeding-guide.mdx:40,62`, hub `smallMammals.js:403`: "roughly 32 to 40% protein" | `veiled-chameleon-ferret-hognose-overview.mdx:62`: "35 to 40% protein" | Overview to 32 to 40. |
| Tegu | Hub `lizards.js:156` and `argentine-tegu-tank-setup-guide.mdx:98`: daily, every other day to three years, every third day after | `argentine-tegu-feeding-guide.mdx:41,64,65`: 3 times a week at 1 to 2 years, twice a week past 2; `:71` calls the other schedule "older care sheets" | Hub and setup guide to the feeding guide's table. |

**Health and treatment**

| Species | Side A | Side B | Fix |
|---|---|---|---|
| Molly, platy | `molly-health-issues-guide.mdx:52`, `platy-health-issues-guide.mdx:52`, hub `fish.js:817,1093`: quarantine "2 to 3 weeks" | `fish-quarantine-and-treatment-guide.mdx:42,138`: "at least 30 days ... the floor, not the target" (Merck, VCA) | 30 days. |
| Swordtail | `swordtail-health-issues-guide.mdx:52`, `swordtail-handling-guide.mdx:46,60`, hub `fish.js:1190`: "2 to 4 weeks" | Same shared guide | 30 days. |
| Neon tetra | `neon-tetra-health-issues-guide.mdx:18,51,68`, `neon-tetra-tank-setup-guide.mdx:104`, hub `fish.js:903`: "2 to 4 weeks" | Same shared guide | 30 days. `zebra-danio-handling-guide.mdx:73` has the same "two to four weeks" and wasn't flagged. |
| Leaf-tailed gecko | `leaf-tailed-gecko-health-issues-guide.mdx:74`: "a 4 to 6 week quarantine on paper towel" | Hub `geckos.js:292` and `reptile-quarantine-guide.mdx:39,66`: "3 to 6 months" (Merck) | 3 to 6 months. |
| Hedgehog | `sulcata-hedgehog-lovebird-guppy-overview.mdx:62`: wobbly hedgehog syndrome "roughly 10%" | `hedgehog-health-issues-guide.mdx:18,43`: "closer to 3%" with a cited study | Overview to about 3%. |
| California kingsnake | Hub funFact `snakes.js:171`: "immune to the venom of rattlesnakes, copperheads, and cottonmouths" | Same hub FAQ `snakes.js:240`: "Partly"; encyclopedia `snakes.js:34`: "strong, not total" | Fun fact to "strongly resistant, not immune". |

**Other**

| Species | Side A | Side B | Fix |
|---|---|---|---|
| Hedgehog (legal status in a non-legal page) | `sulcata-hedgehog-lovebird-guppy-overview.mdx:39`: "restricted in Pennsylvania and Maine, and require a permit in New Jersey and Wisconsin" | `hedgehog-cost-guide.mdx:65`: banned in six places including Pennsylvania; New Jersey the only permit state | Overview to match the cost guide and the hedgehog legal guide. |
| Conure | Encyclopedia `birds.js:76`: bond "without requiring as intensive a daily time commitment" | Enrichment: "three to four hours of supervised out-of-cage time every day"; cage and handling guides agree | Rewrite the encyclopedia line. |
| Milk snake | Hub `snakes.js:510`, `milk-snake-cost-guide.mdx:98`, `milk-snake-handling-guide.mdx:42,80`, `milk-snake-vs-corn-snake-guide.mdx:43,76`: "textbook case of Batesian mimicry" | Encyclopedia `snakes.js:97`: ranges "where no coral snake occurs at all ... difficult to square with mimicry as the whole explanation" | Soften the five fact-style lines to "widely explained as mimicry". |
| Uromastyx | `uromastyx-tank-setup-guide.mdx:72`: "After those two months the dish comes out" | `uromastyx-health-issues-guide.mdx:84` and hub `lizards.js:953`: "A bowl stays available" | Needs a source check. Pick one and state it in all three. |
| Axolotl | Hub `amphibians.js:25` and setup `:64`: "a 40-gallon breeder better if keeping two" | `axolotl-enrichment-guide.mdx:19,49`: "Cohousing isn't enrichment, it's a bite risk" | Add the bite caveat and "housing separately is the safer default" to the hub and setup lines. |
| Tiger salamander | `tiger-salamander-tank-setup-guide.mdx:65` and cost `:100`: "Two adults can share only when they are close in size" | `tiger-salamander-enrichment-guide.mdx:121`: "Do not house two together" | Make the enrichment rule conditional, or make both flat. |
| Sugar glider | Encyclopedia `smallMammals.js:160`: "groups of 10-15 individuals" | `boa-glider-mantis-tetra-overview.mdx:67`: "groups of six to ten" | Needs a source check. |
| Hognose snake | `hognose-snake-tank-setup-guide.mdx:90`: replace substrate "about every three months" | `reptile-salmonella-hygiene-guide.mdx:126`: loose sand or soil "replaced completely once or twice a month" | Needs a source check. At minimum, say why hognose differs from the shared rule. |
| Russian tortoise | Hub `turtles.js:305`, feeding guide `:94`, soaking guide FAQ `:44`: "no deeper than the elbows" | `tortoise-soaking-guide.mdx:76` table: "Russian juvenile ... no deeper than the knees" | The soaking guide contradicts itself. Change that table row to elbows. |
| Red-eared slider | `red-eared-slider-enrichment-guide.mdx:71`: "[chelonian enrichment study](/blog/red-footed-tortoise-enrichment-guide/)" describes Case, Lewbart and Doerr | That study is reported in `box-turtle-enrichment-guide.mdx`; the red-footed page only lists it in Sources (`:124`) | Point the link at the box turtle enrichment guide. |

### PARTLY (14)

- **Amano, cherry and ghost shrimp quarantine** (3 items). The species pages say 2 to 4 weeks or "at least two weeks" (`invertebrates.js:44,142,328`). The 30-day rule in `fish-quarantine-and-treatment-guide.mdx` is written for fish ("Quarantine every new fish"), so it is not a direct contradiction. Still worth one line on the shrimp pages saying why shrimp get less.
- **Ghost shrimp, solitary vs. colony.** The enrichment guide (`:47,96`) says "solitary" but also "a group works when...". Hub and stocking table say "Groups" and "10 gallons for a colony". The instruction agrees; the stocking table label reads as a requirement.
- **African grey vet cadence.** Health guide `:89`: "at least once a year, with many avian vets advising twice." `bird-quarantine-guide.mdx:89`: "at least twice a year." Different baseline, not a contradiction.
- **Quaker power outages.** Hub `birds.js:645`: 498 outages in the first five months of 2001. `quaker-parakeet-handling-guide.mdx:54`: "over 1,000 power outages in Florida in a single year". The two fit the same rate, but the handling line has no year or source. Tie it to the FPL 2001 figure.
- **Guinea pig heat.** Hub `smallMammals.js:654` and setup `:68`: risk "above 80°F". The heat guide's own table (`:72`) also gives 80°F (VCA, Merck) and adds that RSPCA puts the start at 75°F, while its prose (`:82`) leads with 75°F. The species pages leave out the 75°F early-risk note. The "single degree" margin line should mention it.
- **Hamster comfort ceiling.** Setup `:48,68`: comfortable 65 to 75°F. Heat guide `:75`: 65 to 80°F per VCA. Both put the danger line at 80°F.
- **Corn snake digestion temperature.** Feeding guide `:86`: "roughly 82 to 85°F on the warm side to digest". Setup and hub: 85 to 90°F. They meet at 85. Say "at least 85°F".
- **Corn snake brumation length.** Feeding guide `:83`: "2 to 4 months". `snake-brumation-guide.mdx:94`: "Typically 60-90 days ... species-dependent". Overlapping ranges.
- **Mourning gecko humidity.** Range 60 to 80% (`:47`) plus dry back "to 50 to 60% before the next misting" (`:95`). That is a wet/dry cycle, not a contradiction, but the stated range should include the trough.
- **Blue-tongue skink size.** Hub and encyclopedia: "17-24 inches". Health guide `:85`: the Northern averages 17, up to 22. One is the genus range, the other a single type's average. Say so on the health page.
- **Russian tortoise lifespan.** Hub "some individuals reaching 50-plus" vs. encyclopedia "some individuals reported past 60". Only the upper bound differs.
- **Hedgehog lifespan.** Hub "3 to 6 years" vs. overview "a mean lifespan of 3 to 5 years". Mean vs. range.

### READER ERROR (3)

- **Gargoyle gecko night temperature.** The emergency plan row (`reptile-emergency-plan-guide.mdx:68`) gives "65-72°F overnight" as normal and flags lethargy only when it is "sustained below 72°F day and night". The gargoyle pages' "65°F is the floor" agrees.
- **Degu hub "names the wrong species".** The antibiotic line the reader quoted is the Health and More blurb for the shared enterotoxemia article (degu hub txt line 96), not a first-week row. The chinchilla hub (`smallMammals.js:36`) has the chinchilla wording. The blurb doesn't mention degus, which is a minor gap at most.
- **Sulcata "federal import ban since 2000" unsupported.** `sulcata-tortoise-legal-guide.mdx:17,55` documents the USDA ban on importing sulcata and two other African tortoises. The reader had no legal guide. The general `federal-exotic-pet-laws-guide.mdx` doesn't mention it, which is a small gap in that page.

Raised and dismissed by readers themselves (not counted): emperor scorpion "3 to 4 crickets" vs. "2 to 3 insects"; rabbit nail trim "6 to 8 weeks" vs. "one to two months"; canary pellet share (disclosed and reconciled); goldfish anchor worm dose (disclosed); Jackson's chameleon insect count (reconciled in the article).

---

## 3. Gaps after the sidebar check

Of 209 gap lines, **43 were dropped** and **166 kept**. Dropped:

- 17 asked for a legal guide that was excluded from the run: tarantula (plus its facts page), emperor scorpion, jumping spider, hermit crab, African grey CITES travel, quaker, leaf-tailed CITES paperwork, ball python, corn snake, milk snake, California kingsnake, hognose, garter, rosy boa, boa, box turtle, red-footed tortoise.
- 25 are answered in a sidebar article the reader had, or on the species' own pages. Spot checks with Grep confirmed the ones that looked doubtful. They are still worth a link or a number on the species page: hissing cockroach and stick insect quarantine (invertebrate quarantine guide); neon daily quarantine watch list; cockatoo first-exam bloodwork (bird quarantine guide); millipede quarantine (on its own cost and health pages); stick insect escape as release; leopard gecko cleaning cadence (hygiene guide); box turtle and red-footed tortoise egg laying (tortoise eggs guide); box turtle outdoor pen and tegu outdoor housing (outdoor housing guide); sulcata hatchling soaking (soaking guide); ball python weigh-ins while off food (brumation guide); cockatiel "no nest-like hides" (egg-laying guide); rabbit antibiotic risk (enterotoxemia guide); axolotl salt bath dose (tubbing guide); goldfish and koi pH (pH/GH/KH guide); uromastyx forage list (safe weeds guide); garter substrate interval (hygiene guide); White's tree frog bulb distance (UVB guide); quarantine duration missing from the hub row for discus, bristlenose, gargoyle gecko and Russian tortoise (shared quarantine guides).
- 1 is too minor: an emperor scorpion hiding-spot search routine. The shared escape guide's catch method covers it.

### Recurring gaps (species named)

1. **Introducing or pairing a second animal** (15): budgie (second budgie), African grey, conure, quaker, canary (mate), angelfish (fish into a paired tank), guppy (males-only pecking order), mouse (new female), ferret, rabbit (pre-bonding quarantine, and signs bonding is failing), millipede (merging after quarantine), degu (health check before intro), blue-tongue skink, ackie monitor, red-footed tortoise (cohousing at all). Spot check: rabbit and ferret pages have no "quarantin" or "introduc" hits at all, and budgie's only hits are "keep newly introduced birds separate".
2. **Bite or sting first aid for the keeper** (7): tarantula, tokay, savannah monitor, green iguana, veiled chameleon, Jackson's chameleon, oscar (bite on moving day).
3. **Sexing** (6): blue-tongue skink, ackie monitor, savannah monitor, green iguana, uromastyx (non-Mali species), cardinal tetra (no sexing or breeding section; neon has both). Spot check: iguana and cardinal pages have no sexing text.
4. **Finding or vetting an exotic, avian or amphibian vet** (6): quaker, canary, zebra finch, pacman frog, Jackson's chameleon, ball python.
5. **Shared small mammal guides that don't cover the species** (11): `small-mammal-vet-visits-and-travel-guide.mdx` is written around rabbits and guinea pigs (ferret fasting rules differ because ferrets vomit; hedgehog warm carrier; rat and mouse anesthesia; "Bring the Cage Mate" contradicts solitary Syrians). `small-mammal-grooming-nails-molting-guide.mdx` has no chinchilla, hedgehog, flying squirrel or mouse nail care and no gerbil scent gland routine. `small-mammal-temperature-heat-stress-guide.mdx` has no gerbil or mouse row.
6. **Owner absence, boarding or pet sitting** (4): hamster, gerbil, ferret, African grey.
7. **Buy list missing an item the pages require** (6): air pump for the sponge filter (betta, zebra danio); thermostat (box turtle, red-eared slider); TDS meter (cherry shrimp); goldfish buy list shows one filter while the setup guide calls two "common practice".
8. **Equipment specs with no number** (13): angelfish tank footprint; savannah water basin size; koi de-icer sizing; fire skink mesh vs. glass top; Russian tortoise wall height and screen mesh; fire-bellied toad land substrate depth; rosy boa water dish change interval; green anole UVB replacement interval; axolotl photoperiod; neon and cardinal CO2 or fertilizer for the dense planting; hermit crab salt dish without a hydrometer; mourning gecko gap-sealing technique; swordtail "several males in a large tank" with no numbers.
9. **A dose or protocol named without a number** (5): betta fin rot salt dose; koi pond-scale salt dose; pacman frog warm soak (temperature, depth, time limit); tarantula substrate mite product; tokay seasonal cool-down (whether and how).
10. **Costs raised but not priced** (9): oscar 75-gallon tank; cockatiel cage; boa monthly costs; bearded dragon lay box and spay surgery; veiled chameleon spay; uromastyx emergency visit; degu neuter; mourning gecko egg-binding surgery; kingsnake second and third enclosures. Amano quarantine priced only at 10 gallons.
11. **Positive tankmate lists** (7): guppy, molly, platy, swordtail, bristlenose, amano (the stocking table says only "anything that eats shrimp"), corydoras (matching feeding speed).
12. **Water chemistry for mixed tanks** (2): molly and platy never say that a livebearer community tank means compromising hardness and pH for one species.
13. **Pre-purchase or seller checklist** (9): ball python, corn snake, milk snake (telling subspecies apart as hatchlings), tegu (finding a legal captive-bred seller), blue-tongue skink (proof of captive breeding), rosy boa (IBD vetting; boa has one), boa (cost guide doesn't link the health guide's checklist), fire-bellied toad (spotting a wild-caught or stressed toad), ghost shrimp (telling a pet source from a feeder tank).
14. **Breeding, eggs and fry** (8): conure single-hen egg laying (the shared egg guide covers only budgies, cockatiels and lovebirds); zebra finch accidental clutch; bristlenose and cardinal breeding; swordtail hybrid fry; platy male fertility age; guppy water changes for a heavily pregnant female; cherry shrimp managing a colony that outgrows its tank.
15. **Health follow-through** (8): sugar glider parasites and GI infection; molly Camallanus; hamster day-to-day diabetes management; degu bloat; guinea pig spay aftercare and quarantine contents; chinchilla recovery care; axolotl normal slough vs. fungus; mourning gecko plan if UVB is skipped.
16. **Cleaning and substrate schedules** (3): guinea pig cage cleaning; tiger salamander deep damp substrate (mold, pests, replacement); plus the hognose interval in section 2.
17. **Weaning age or minimum age to buy** (2): budgie, parrotlet.
18. **Outdoor keeping with no page behind it** (3): canary aviary, goldfish pond overwintering, red-eared slider outdoor pond.

### Species one-offs

Rat: activity pattern never stated (no "nocturnal" or "crepuscular" on any rat page), and barbering. Hermit crab: how long a buried molt can go before checking. Jumping spider: no row in the shared rehousing guide, and how long a fruit fly culture lasts. Hissing cockroach: colony sex ratio, noise and odor. Millipede: a fallback on isopods in breeding tanks. Tiger salamander and White's tree frog: a quarantine container that suits a burrower and a climber. Red-eared slider: which quarantine protocol an aquatic turtle follows. African fat-tail: missing from the emergency plan and the UVB zone list. Leaf-tailed gecko: dechlorinating the tap water it recommends. Emperor scorpion: acclimation for wild-collected animals. Ghost shrimp: a whisker shrimp found weeks later. Oscar: adult hospital tank size. Discus: floor load. Green anole: a body condition routine. Bearded dragon: whether the pre-brumation visit is a second yearly exam. Lovebird: a daily-time floor for a solo bird. Parrotlet: no standalone comparison page (low priority). Hognose: health guide cites no sources. Quaker: bathing.

---

## 4. Trust and advertising flags

### Named products or outside sellers in body copy (verified in content/)

All of these sit on pages with an affiliate disclosure. The ones that name a brand in running prose, not just in a buy list or a table cell, are marked **prose**.

| Species | Quote | File | Brand in prose? |
|---|---|---|---|
| Bristlenose | Hikari sinking wafers (twice), AquaClear 70, CaribSea Super Naturals Aquascape Sunset Gold | `bristlenose-pleco-cost-guide.mdx:77`, `-tank-setup-guide.mdx:100`, feeding guide | **prose** (AffiliateLink text inside advice) |
| Cockatoo | "the Prevue Pet Products Imperial Extra Large Stainless Steel Bird Cage" and "Empire X-Large" | `cockatoo-tank-setup-guide.mdx:76` | **prose** |
| Quaker | "The Prevue flight cage ... lists at $286 and sells for $190" | `quaker-parakeet-cost-guide.mdx:82` | **prose**, but flags the cage's own 20-inch depth flaw |
| Rat | "Prevue rolling cage runs around $200", "Critter Nation ... $280 to $360" | `rat-cost-guide.mdx:52` | **prose** |
| Guinea pig | "The MidWest Guinea Habitat, an 8 sq ft option at around $100 to $109" | `guinea-pig-cost-guide.mdx:70` | **prose** (dated price context) |
| Gerbil | "Oxbow's Garden Select among them" | `gerbil-feeding-guide.mdx:60` | **prose** |
| Ferret | "a high-protein food like Marshall Premium Ferret Diet" inside the insulinoma section | `ferret-health-issues-guide.mdx:78` | **prose**, inside medical content |
| Green iguana | "a higher-end multi-nozzle system like the MistKing Starter System" | `green-iguana-tank-setup-guide.mdx` | **prose** |
| Red-footed tortoise | "Florida Iguana & Tortoise Breeders" (Andrews bloodline); MistKing Starter twice | `red-footed-tortoise-cost-guide.mdx:62,79` | **prose**, names an outside seller with a live link |
| Axolotl | "JBJ Arctica Titanium ... the frequently-recommended premium pick", near verbatim in two guides | `axolotl-cost-guide.mdx:101`, `axolotl-tank-setup-guide.mdx` | **prose** |
| Molly | Walmart salt link: "$22 and treats up to 434 gallons" | `molly-cost-guide.mdx:84` | **prose**, names an outside site |
| Rabbit, hamster, gerbil, chinchilla (shared) | "A carrier built specifically for the job, like the Petsfit small-animal carrier" | `small-mammal-vet-visits-and-travel-guide.mdx:79` | **prose** in a shared vet guide, so it shows in every small mammal set |
| Blue-tongue skink, ackie | "T5 HO Arcadia 6%", "Arcadia 12%/Desert" | `blue-tongue-skink-cost-guide.mdx:70`, `ackie-monitor-cost-guide.mdx:74` | Table cell only |
| Garter snake | Backwater Reptiles listing at $49.99 | `garter-snake-cost-guide.mdx:45` | **prose**, framed as a dated snapshot. Readers didn't mind it. |
| Box turtle | "A 6% T5 HO bulb, or the equivalent Zoo Med ReptiSun 5.0" (mixes two brands' rating scales) | `box-turtle-tank-setup-guide.mdx:53` | **prose**, flagged for accuracy, not as an ad |
| Budgie, lovebird, Russian tortoise, leopard gecko, bearded dragon | "[card: the printable care package ...]" | `<CarePackageBlock` in 63 guide files | Site's own product. Readers flagged six on one dragon set as excessive. Out of scope for the fix list. |

### Claims called wrong, overstated or unsourced (verified to exist)

- Angelfish encyclopedia `fish.js:13`: the Indeever Madireddy genome story stated flat, no source.
- Neon tetra: "likely over-diagnosed" three times (`neon-tetra-health-issues-guide.mdx:47,71`, `fish.js:878`) with no named source.
- Cardinal tetra: "sustainably wild-harvested" unqualified on the hub (`fish.js:270`), encyclopedia (`fish.js:48`) and overview; the "genuinely contested" caveat is only in the enrichment guide.
- Flat, unsourced fun facts and figures: hissing cockroach "the father plays an active role in rearing offspring" (`invertebrates.js:652`); mantis "the only insect that can turn its head 180 degrees" (`invertebrates.js:747`); budgie Puck "knew 1,728 words" (`birds.js:84`, `facts.js:59`); cockatiel earthquake anecdote (`cockatiel-tank-setup-guide.mdx:86`); Flemish Giant drinks "as much in a day as a 25-pound dog" (`rabbit-feeding-guide.mdx:84`); "a 2025 survey of 1,181 guinea pig keepers" (`guinea-pig-enrichment-guide.mdx:69`); hamsters and guinea pigs "returned or rehomed at a fairly high rate" (`hamster-vs-guinea-pig-guide.mdx:54`). The cockatiel reader's other complaint, that the enrichment studies name no journal, is partly wrong: Sources gives journal and year, not authors.
- Mouse `mouse-cost-guide.mdx:52`: "many owners skip routine vet visits". Caveated, but it normalizes skipping care.
- Degu: "never toward 77°F" stated as fact while the heat guide `:48` says "We couldn't verify a specific degu temperature range from a veterinary source". Valid flag.
- Ferret overview `veiled-chameleon-ferret-hognose-overview.mdx:60`: "a documented majority of US pet ferrets develop adrenal disease", against the health guide's "one frequently cited figure ... around 70% ... debated" (`:41`).
- Leaf-tailed gecko `leaf-tailed-gecko-health-issues-guide.mdx:38,58`, `geckos.js:319`: "specialist breeders describe dehydration as a genuine fast killer", repeated with no named breeder.
- Tokay `tokay-gecko-health-issues-guide.mdx:86`, hub `geckos.js:574`: 42.9% parasites from n=21. The hub version drops the sample size.
- Crested gecko feeding `:77`: avocado and citrus "genuinely toxic" with no hedge. A watch item.
- Bearded dragon handling `:87`: a Salmonella outbreak "closed in December 2025, made 20 people sick across 14 states", no link.
- Uromastyx: encyclopedia `lizards.js:141` "wildLifespan: 15-25 years", above the 15 to 20 captive figure with no note; cost guide `:99` "possibly as long as 60" unsourced.
- Green anole cost `:55,111`: "twenty to thirty times the lizard's own price tag". Against the $5 low end it is 80 to 94 times. The arithmetic undersells the page's own point.
- Fire skink setup `:83`: 5 to 6% tube called "a reasonable, well-supported choice" right after the page says published targets differ by a factor of four.
- Pacman frog handling `:59`, hub `amphibians.js:175`: bite force "should reach close to 500 newtons", an extrapolation presented firmly.
- Veiled chameleon cost `:110`: "Spaying a female can meaningfully extend her life", no source.
- Tiger salamander cost `:96`: "$50 to $135, sometimes cited higher, $150 to $300", no source for the higher band.
- Fire-bellied toad setup `:97`: "5 mL per 30 gallons where it uses chloramine", based on one utility's report but stated as general.
- Oscar cost `:4,18,43,67`: "easily exceeds $1,000" while the table leaves the tank as "Budget for adult size from day one" with no number.
- California kingsnake "immune" and milk snake "textbook mimicry": see section 2.
- Reader errors: platy's Oahu damselfly claim is sourced to USGS in the page's source notes (`platy-handling-guide.mdx:104`). Sulcata's import ban is real (section 2).

---

## 5. Thin, filler and weakest pages

Graded B- or lower:

- **Cockatiel cost guide (B-):** the cage row says "Often the single biggest expense" with no price range. It is the only cost guide in the batch without a cage figure.
- **Conure encyclopedia (C+):** short, and its time-commitment line undercuts every other page in the set (section 2).

Tagged (thin) or (filler), or described that way:

- **Amano shrimp enrichment (B, "filler-adjacent"):** copper, molting cover and feeding cadence repeat guides 04 to 06 nearly word for word. Only the sentience citation is new.
- **Hamster health issues (B, "thin on one point"):** strong on wet tail, but never mentions the antibiotic risk the shared enterotoxemia guide names for hamsters.
- **Boa constrictor cost (B+, "thin ongoing cost section"):** "Ongoing Costs: Modest" with no dollar figures. Every sibling snake cost guide has them.
- **Sulcata enrichment (B+, "thin on species-specific evidence"):** borrowed red-footed cognition research, speculative for a 100-pound animal.
- **Pacman frog enrichment (A, "borderline filler"):** re-argues "buried is not bored" for the third time in the set.

For context, the 28 B pages: 16 are encyclopedias ("no action items", accepted by most readers); 5 are enrichment guides (amano, cockatiel, leaf-tailed, bearded dragon, uromastyx); 4 are other deep dives (bearded dragon shopping list and vs. leopard gecko, uromastyx vs. bearded dragon, tiger salamander vs. axolotl); the rest are cardinal health, hamster health and iguana cost. The bearded dragon shopping list was called a rerun of the cost guide.

---

## 6. Suggested fix list

Only files this doc checked. No legal guides, care packages, or dog and cat pages.

### A. Confirmed conflicts (line references are in section 2)

1. **UVB zone table** (`uvb-lighting-complete-guide.mdx:93-96`): check the UVI figures against Baines et al. 2016, then align the Zone 1 gecko pages (leopard 0.5 to 1.5; crested, gargoyle, leaf-tailed 1.0 to 2.0 in `geckos.js` and the crested setup guide). [done: table checked against Baines et al. 2016 Table 1 and was shifted one zone; zones corrected, fire skink to Zone 2, tegu to Zone 3; leopard, crested, leaf-tailed to 0.6 to 1.4; gargoyle stays 1.0 to 2.0 (paper puts it in Zone 2); dragon 4.0 to 4.5 is inside the corrected Zone 3 peak. Infographic uvb-lighting-complete-guide-1.jpg still shows the old zones and needs a new image]
2. **Fish quarantine to 30 days:** molly, platy, swordtail (health and handling), neon (health and setup), zebra danio handling, and hub rows `fish.js:817,903,1093,1190`. [done]
3. **Fishless cycle to 4 to 6 weeks:** molly, platy and swordtail tank setup guides, `fish.js:810,1084`. [done]
4. **Ich heat:** betta hub wording (`fish.js:119`); add the 86°F option to the cardinal health guide; discus vs. ich guide after a source check. [done: discus ich heat starts at 86°F, discus protocols go to about 90°F, same wording on health guide, hub and ich guide]
5. **Leaf-tailed health guide:** 4 to 6 weeks to 3 to 6 months. [done]
6. **Hedgehog overview:** state list and WHS 3%. [done]
7. **Kingsnake fun fact:** "immune" to "strongly resistant, not immune". [done]
8. **Chinchilla dust bath:** up to 15 minutes in the setup guide and hub. [done]
9. **Iguana cost guide:** drop 6x3x6 as a "floor". [done]
10. **Tortoise soaking table:** Russian juvenile "knees" to "elbows". [done]
11. **White's tree frog:** UVB replacement to 6 to 8 months (setup and cost). [done]
12. **Uromastyx:** water dish rule, night low (65 vs. 68), and the dragon figures on the vs. page. [done: dish stays at every age; night about 68°F, never below 65°F; vs page dragon figures matched]
13. **Axolotl hub and setup:** add the bite risk to the two-axolotl line. [done]
14. **Tiger salamander:** 68°F to 64°F on the vs. page; one cohousing rule. [done: one conditional rule, close in size and split at the first nip]
15. **Tegu:** hub and setup feeding schedule to the feeding guide's table. [done]
16. **Ball python encyclopedia:** fix the `wildLifespan` field. [done]
17. **Cockatoo lifespan:** reconcile hub and cost guide with the VCA figure (source check). [done: 25 to 45 typical, larger species 70 to 80 or more (VCA, LafeberVet)]
18. **Sulcata lifespan:** typical vs. achievable on hub and cost guide. [done]
19. **Milk snake:** soften "textbook" mimicry in five places; fix the $60 floor. [done]
20. **Hognose substrate interval** vs. the hygiene guide (source check). [done: three months kept for a dry bed with droppings pulled the same day; damp or soiled bed gets the monthly change]
21. **In-page costs:** lovebird cage table, parrotlet FAQ. [done]
22. **Small drift:** zebra finch weight, swordtail pH, mourning gecko cost table. [open: mourning gecko cost table. 12x18x18 is not a stocked retail size (nearest 12x12x18 or 18x18x18), so pricing it needs a call on which size the setup guide and hub should name. Zebra finch weight (10 to 16 g, 0.35 to 0.56 oz) and swordtail pH done]
23. **Overview syncs:** ferret protein and adrenal wording, sugar glider group size (source check), tokay size. [done: sugar glider is up to seven adults and their young per nest (Australian Museum, ADW)]
24. **Conure encyclopedia** time-commitment line. [done]
25. **Red-eared slider** enrichment link to the box turtle enrichment guide. [done]
26. **Shrimp molting guide:** amano GH exception (source check). [done: amano GH 5 to 15 (Shrimp Science); amano setup guide corrected from 4 to 15]

### B. Most common gaps

27. **Buy lists:** add an air pump next to the sponge filter (betta and zebra danio hubs in `fish.js`); add a thermostat (box turtle and red-eared slider hubs in `turtles.js`); add a TDS meter (cherry shrimp, `invertebrates.js`).
28. **Shared small mammal guides:** in `small-mammal-vet-visits-and-travel-guide.mdx`, add ferret fasting, hedgehog warmth, rat and mouse notes, and scope "Bring the Cage Mate" to bonded species. In `small-mammal-grooming-nails-molting-guide.mdx`, add chinchilla, hedgehog, mouse and flying squirrel nails and the gerbil scent gland. In `small-mammal-temperature-heat-stress-guide.mdx`, add gerbil and mouse rows.
29. **Shared reptile guides:** African fat-tail row in `reptile-emergency-plan-guide.mdx` and a zone in `uvb-lighting-complete-guide.mdx`; jumping spider row in `invertebrate-quarantine-cleaning-and-escapes-guide.mdx`; conure in the chronic egg-laying guide's scope.
30. **Link or number where the answer lives only in the sidebar:** rabbit and hamster health guides link the enterotoxemia guide; axolotl health links the salt bath guide; box turtle and red-footed tortoise link the tortoise eggs guide; sulcata feeding carries the hatchling soak schedule; uromastyx feeding links the safe weeds guide; leopard gecko setup links the hygiene cadence; goldfish and koi setup state a pH; hub quarantine rows for discus, bristlenose, gargoyle gecko and Russian tortoise state the duration.
31. **Introductions:** a short intro protocol for budgie, rabbit (pre-bonding quarantine and failed-bond signs), ferret, conure, quaker and canary, reusing the cockatiel and chinchilla protocols as the model.
32. **Bite first aid:** one or two lines in the handling guides for tarantula, tokay, savannah monitor, green iguana, veiled and Jackson's chameleon.
33. **Sexing:** blue-tongue skink, ackie monitor, savannah monitor, green iguana, cardinal tetra handling guides.
34. **Unpriced costs:** oscar tank (`oscar-fish-cost-guide.mdx:77`), cockatiel cage, boa monthly costs, bearded dragon lay box and spay, veiled chameleon spay.
35. **Positive tankmate lists:** guppy, molly, platy, swordtail, bristlenose, plus a livebearer hardness note for molly and platy.
36. **Species one-liners:** rat activity pattern; green anole UVB replacement interval; axolotl photoperiod; fire-bellied toad land substrate depth; savannah basin size.

### C. Trust flags

37. **Move brand names out of advice prose into the buy list or a labeled recommendation:** bristlenose (Hikari, AquaClear, CaribSea), `cockatoo-tank-setup-guide.mdx:76`, `rat-cost-guide.mdx:52`, `ferret-health-issues-guide.mdx:78` (especially: it sits inside insulinoma treatment), `green-iguana-tank-setup-guide.mdx`, `red-footed-tortoise-cost-guide.mdx:62,79` (named breeder), axolotl JBJ (cost and setup), `small-mammal-vet-visits-and-travel-guide.mdx:79` (Petsfit).
38. **Source or soften the flat claims:** budgie Puck (`birds.js:84`), mantis 180 degrees (`invertebrates.js:747`), cockroach paternal care (`invertebrates.js:652`), cockatiel earthquakes, Flemish Giant water intake, guinea pig 1,181-keeper survey, hamster return rates, bearded dragon outbreak (`bearded-dragon-handling-guide.mdx:87`), veiled spay claim, pacman bite force, uromastyx 60 years and wild lifespan (`lizards.js:141`), neon "over-diagnosed", angelfish genome story (`fish.js:13`).
39. **Carry the caveat to where most readers see it:** the cardinal "sustainably harvested" hedge onto `fish.js:270`, the encyclopedia `fish.js:48` and the overview; degu temperature as a precaution, not a vet figure; tokay parasite stat with n=21 on the hub (`geckos.js:574`).
40. **Arithmetic:** green anole "twenty to thirty times" (`green-anole-cost-guide.mdx:55,111`) to a range that holds at the $5 low end.
