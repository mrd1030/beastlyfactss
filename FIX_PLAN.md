# Fix Plan by Species

Built 2026-09-25 from READER_REVIEWS_2026-09-24.md and its raw reviews (docs/reader-run-2026-09-24/reviews/, s01 to s70 and b01 to b25), READER_GAPS.md (Sep 8 to 15 runs), SHORT_ARTICLES.md, the articles in content/guides, and RELATED_ARTICLES in src/lib/data/relatedArticles.js. Every "not covered" item was checked against the shared class guides by opening them.

## 1. How to use this plan

- **One group per session, 4 to 6 species per session.** Suggested session splits sit at the top of each group. Start with Session 0 below: it is one RELATED_ARTICLES edit that closes sidebar gaps for about 30 species at once.
- **Finish a species before moving on**, in this order:
  1. Errors and contradictions (pick one number, fix every page that states it).
  2. Gaps: covered not linked (wire the shared guide into RELATED_ARTICLES, then write one species-specific sentence with an in-body link where the question comes up).
  3. Gaps: covered and linked (usually one species-specific number or sentence; no new link needed unless noted).
  4. Gaps: truly missing (research first: web search, real sources, per CLAUDE.md; nothing from memory).
  5. Low grades, thin pages, short pages.
- **Done sections leave this file.** When a species section is complete, change its status line to "Status: done YYYY-MM-DD", move the whole section to archive/docs-completed/FIX_PLAN_COMPLETED_<date>.md (newest first), and delete it here. This file holds open work only.
- Legal guides were excluded from the Sep 24 run, so its "legal page missing" flags are ignored. Legal items that do appear come from the older runs or are confirmed errors.
- Where an older-run (Sep 8 to 15) grade is worse than the Sep 24 grade for the same page, the Sep 24 grade wins and the old grade is dropped. Older-run missing-information items are kept, because READER_GAPS.md verified them against the live articles on 2026-09-24.
- House rules that shape the fixes: in-body links go to other species, cross-species guides, the encyclopedia or an overview, never to the same species' own sibling guides (the Deep Dive list carries those). So when two sibling pages disagree, fix the text on both; do not "solve" it with a sibling link. No "see our" phrasing. No em or en dashes. US spelling.

**File key.** A bare slug means content/guides/<slug>.mdx. "Hub" means the species entry in src/lib/data/guides/<group>.js. "Encyclopedia" means src/lib/data/encyclopedia/<group>.js. Fun facts live in content/fun-facts/. Shrimp hubs and encyclopedia entries are in the invertebrates.js files.

**Labels.** Every checklist line starts with one tag: [ERROR], [CONTRADICTION], [LOW GRADE], [THIN], [DOUBTED], [COVERED+LINKED], [COVERED, NOT LINKED], [TRULY MISSING], [SHORT]. "(Sep 8-15)" marks an item that only the older run raised.

---

## 2. Shared guides: what they already answer

Checked by opening each guide. "Wiring" notes where RELATED_ARTICLES and the body links disagree.

| Shared guide | Gap themes it answers (confirmed in the text) | Serves | Wiring notes |
|---|---|---|---|
| aquarium-cycling-guide | Fishless and fish-in cycling, ammonia and nitrite targets, stalled cycles | Fish, shrimp, axolotl | red-eared-slider body-links it but has no sidebar entry |
| aquarium-water-changes-guide | Weekly percentage, nitrate 20/40 ppm thresholds, how to match new water, cherry shrimp 10% a week row, old tank rescue | Fish, shrimp, axolotl | |
| aquarium-filtration-guide | Turnover (GPH) math, filter types by use, media care, never replace all media at once, copper hurts biofilters | Fish, shrimp, axolotl | Not wired for fire-bellied-toad or red-eared-slider, both of which raised filter questions. No pond numbers |
| aquarium-stocking-and-tankmates-guide | Tankmate checks, species-by-species table, group size, adding new fish (float, rearrange decor), ghost shrimp prey on cherry shrimp | Fish, shrimp | |
| fish-quarantine-and-treatment-guide | 30 to 60 day quarantine, 10 to 20 gallon bare hospital tank, medication rules, copper removal before treatment | Fish, shrimp, axolotl | |
| aquarium-ich-treatment-guide | Heat ceiling per species, salt, malachite green, 30 days after | Fish | Table does not say how to place an unlisted species |
| freshwater-ph-gh-kh-guide | GH/KH/pH meaning, softening hard water, RO blending and remineralizing | Fish, shrimp, axolotl | No species-specific ranges beyond goldfish |
| spotting-a-sick-fish-guide | Test water first, waste and behavior signs, names Spironucleus and Capillaria, when to see an aquatic vet | Fish, shrimp, axolotl | Does not say how to find an aquatic vet |
| aquarium-power-outage-and-transport-guide | Outages, bagging, moving a tank | Fish, axolotl | |
| cooling-an-aquarium-without-a-chiller-guide | Heat-wave methods, when to buy a chiller | Coldwater fish, axolotl, tiger salamander, shrimp | No chiller sizing |
| shrimp-molting-guide | Molt cycle, GH 6 to 12 (Neocaridina) and 4 to 6 (Caridina), white ring | Shrimp | No number for Palaemon (ghost shrimp) |
| amphibian-quarantine-and-water-guide | Quarantine setup, temperature-first acclimation, fecal screen, dechlorinating, hardness | Amphibians | Hardness section is axolotl only; no conditioner dose |
| amphibian-tubbing-and-salt-baths-guide | Tubbing, cooling as treatment, salt baths | Amphibians | |
| gut-loading-feeder-insects-guide | 24 to 72 hour gut-load window, what to feed feeders, dusting still needed | All insectivores | In RELATED_ARTICLES for whites-tree-frog only, body-linked from about 20 species; this is why its sidebar shows only White's tree frog articles |
| reptile-quarantine-guide | 3 to 6 month quarantine, separate tools and order, vet workup and fecal screen scope (coccidia, protozoa, worms), disinfection before introduction | Snakes, lizards | Not wired for red-eared-slider (which also lacks the chelonian guide) |
| chelonian-herpesvirus-quarantine-guide | Tortoise and box turtle quarantine, 6 to 12 months | Tortoises, box turtle | |
| reptile-heating-thermostats-guide | On/off vs dimming vs pulse, why bulbs need dimming, probe placement, wattage as a starting guess, night heat (mat, CHE, deep heat projector) | Reptiles | No maximum basking surface temperature; no prices |
| uvb-lighting-complete-guide | Ferguson zones with snake and lizard examples, low UVB now advised for nocturnal species, replace every 12 months, tortoise UVB | Reptiles, amphibians, birds | In RELATED_ARTICLES for zero species; body-linked from about 25 |
| t5-vs-compact-uvb-guide | Fixture choice | Four lizards | Species table covers three groups only |
| reptile-shedding-complete-guide, snake-shedding-humidity-myth-guide | Stuck shed, shed mechanism | Reptiles, snakes | |
| snake-sexing-growth-body-condition-guide | Sexing is a vet job, weight tracking, cross-section body condition | Snakes | |
| snake-brumation-guide | Whether to brumate, breeding protocol, abort signs (mentions kingsnakes) | Snakes | Wired for ball-python and corn-snake only. Lacks a "normal seasonal slowdown vs illness" checklist |
| tortoise-brumation-guide | Species that should not brumate, fast, temperature band, weight-loss ceiling, and box turtle numbers by name (45 to 50°F, 10 to 14 day fast, 10% ceiling) | Tortoises, box turtle, slider | |
| tortoise-soaking-guide | Schedule by age and species (red-foot adults 2 to 3 times a week), depth, temperature, 10 to 30 minutes | Tortoises, box turtle | |
| tortoise-sexing-eggs-and-egg-binding-guide, herbivorous-reptile-safe-plants-guide, outdoor-reptile-housing-guide | Sexing and eggs, forage, pens | Tortoises, herbivorous lizards | |
| reptile-emergency-plan-guide, reptile-stool-urates-hydration-guide, reptile-salmonella-hygiene-guide | Outages and travel, daily health check, hygiene rules | Reptiles | None gives an enclosure cleaning schedule |
| chameleon-hydration-drippers-misters-fogging | Dripper run time (20 to 30 min, once or twice a day), misting (3 to 5 min, 2 to 4 times a day) | Chameleons | |
| bird-quarantine-guide | 30/45/90 day tiers, introducing a new bird after quarantine | Birds | Does not say when the first well-bird exam falls |
| bird-sexing-weight-body-condition-guide | DNA sexing, gram-scale weighing, keel | Birds | |
| bird-photoperiod-sleep-guide | Dark hours, what a cage cover does and does not do | Birds | |
| bird-pellet-conversion-guide, bird-wing-clipping-guide, bird-first-aid-kit-and-grooming-guide, bird-droppings-guide, bird-household-hazards-guide, bird-body-language-guide, bird-emergency-travel-guide | Conversion, clipping, nails and beak, droppings, hazards, body language, outages | Birds | Emergency travel has no heat threshold |
| bird-feather-dust-air-quality-guide | Bathing or misting for dust species (VCA: mist daily or shower a cockatoo) | Cockatoo, grey, cockatiel and others | |
| bird-colony-aviary-keeping-guide | Group housing, feeding stations, sex ratios, adding birds | Budgies, canaries, finches only | Nothing for cockatiel pairing |
| bird-chronic-egg-laying-guide | Triggers, egg binding | Budgie, cockatiel, lovebird named | Canary not named |
| choosing-a-pet-bird-guide, rehomed-parrot-guide, parrot-training-guide | Where to buy, healthy bird checks, rescue settling, training ladder | Birds | Lifespan table has two species |
| small-mammal-grooming-nails-molting-guide | Nails (hamsters, gerbils, rats, degus wear them down; check for overgrowth), bathing by species | Rodents, rabbits, chinchillas | Nothing on hedgehogs or gliders |
| small-mammal-temperature-heat-stress-guide | Ranges, heat signs; FAQ says hedgehogs and gliders need a heat lamp or CHE to stay above about 75°F | Rodents, rabbits | Not wired for sugar-glider, hedgehog, ferret |
| small-mammal-vet-visits-and-travel-guide | Carriers, anesthesia fasting, finding an exotics vet | Small mammals | |
| small-mammal-enterotoxemia-guide | Dangerous antibiotic classes by species | Herbivorous small mammals | |
| invertebrate-molting-guide | Frequency and signs for tarantula, hermit crab, jumping spider, millipede, stick insect; eating the old exoskeleton; failed molt signs and "do not help" | Those five | Not wired for emperor-scorpion, praying-mantis, hissing-cockroach, all of which body-link it. Covers no scorpion or mantis numbers |
| invertebrate-quarantine-cleaning-and-escapes-guide | Three-month quarantine, weekly spot cleans, substrate every 6 to 12 months, mites, escapes | Invertebrates | |
| invertebrate-rehousing-guide, invertebrate-pesticide-hazards-guide, invertebrate-emergency-travel-shipping-guide | Rehousing, urticating hair first aid, pesticides, outages and shipping | Invertebrates | |

**Themes nothing on the site answers** (they recur below as TRULY MISSING): lizard, small mammal, invertebrate, amphibian and fish sexing; small mammal introductions and bonding; fish arrival acclimation (drip vs float); livebearer fry handling; reptile, bird and small mammal enclosure cleaning schedules; finding a reptile, avian, aquatic or invertebrate vet; choosing a healthy reptile or fish and vetting a breeder; daily food amounts for parrots; lizard brumation. If the owner wants shared guides for these, the first four would close the most lines. Otherwise each goes on the species page named below.

---

## Session 0: RELATED_ARTICLES wiring pass (one edit, before any group)

These species already link the shared guide in body text or clearly need it, and no new sentence is required, so they are listed once here instead of in every section. Run `node scripts/check-related-articles.mjs` afterwards.

- [x] Add gut-loading-feeder-insects-guide to: fire-bellied-toad, pacman-frog, tiger-salamander, african-fat-tail, crested-gecko, gargoyle-gecko, leaf-tailed-gecko, leopard-gecko, mourning-gecko, tokay-gecko, ackie-monitor, bearded-dragon, blue-tongue-skink, fire-skink, green-anole, jacksons-chameleon, veiled-chameleon, savannah-monitor, red-eared-slider, jumping-spider, praying-mantis, tarantula. This also fixes the gut-loading page's White's-tree-frog-only sidebar (b19).
- [x] Add uvb-lighting-complete-guide to: whites-tree-frog, african-fat-tail, crested-gecko, gargoyle-gecko, leaf-tailed-gecko, leopard-gecko, mourning-gecko, tokay-gecko, ackie-monitor, tegu, bearded-dragon, blue-tongue-skink, fire-skink, green-anole, green-iguana, jacksons-chameleon, veiled-chameleon, savannah-monitor, uromastyx, box-turtle, red-eared-slider, russian-tortoise, sulcata-tortoise, african-grey (all body-link it). Rosy boa, boa and red-foot are handled in their sections because they also need a sentence.
- [x] Add invertebrate-molting-guide to: emperor-scorpion, praying-mantis, hissing-cockroach (all body-link it).
- [x] Add aquarium-cycling-guide to red-eared-slider (body-linked from its tank setup guide).
- [x] Add snake-brumation-guide to california-kingsnake, garter-snake, rosy-boa, boa-constrictor. Hognose and milk snake are in their sections because they also need a sentence.
- [x] Add small-mammal-vet-visits-and-travel-guide, small-mammal-grooming-nails-molting-guide and small-mammal-temperature-heat-stress-guide to mouse (its only sidebar entry is the rat/mouse/flying squirrel overview, which the s08 reader called unrelated).
- [x] Wire the two orphaned standard articles (details in the tegu and millipede sections): argentine-tegu-feeding-guide and giant-millipede-feeding-guide. Neither is auto-detected because their prefixes differ from the guide ids, and neither is listed anywhere.

---

## 3. Species sections by group

## Fish and shrimp (18)

Suggested sessions: F1 swordtail, cherry-shrimp, corydoras-catfish, koi, oscar. F2 discus, betta-fish, ghost-shrimp, neon-tetra, goldfish. F3 cardinal-tetra, amano-shrimp, angelfish, bristlenose-pleco, guppy. F4 molly, platy, zebra-danio (short, can fold into F3).

Fish acclimation (drip vs float, how many to add at once) is not covered by any shared guide; aquarium-stocking-and-tankmates-guide only mentions floating the bag. It is listed per species below.

### Swordtail (swordtail)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Male to female ratio: hub "one male to three or four females" vs hub FAQ "some say two or three" vs swordtail-enrichment-guide "two to three females per male minimum". Give the hub the same range the deep dives use.
- [x] [CONTRADICTION] Feeding frequency: hub "once or twice a day" vs swordtail-feeding-guide "some care sheets recommend two to three smaller meals". Carry the disagreement onto the hub.

**Low grades and thin pages**
- [ ] [THIN] swordtail-handling-guide (B+): "First-Time Keeper Mistakes" repeats the enrichment guide's "What Not to Do" list point for point (two males, small tank, no lid, platy hybrids). Cut one list.
- [ ] [THIN] swordtail-cost-guide and swordtail-handling-guide both retell platy interbreeding and the 20 to 100 fry every four weeks as a new discovery. Keep one full telling.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Plant list and lighting spec that keep the female-refuge plants alive under the "basic LED, 8 to 10 hours" setup. Belongs in swordtail-tank-setup-guide.

### Cherry shrimp (cherry-shrimp)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Origin: encyclopedia "Taiwan and eastern China" vs cherry-shrimp-tank-setup-guide "Taiwan, eastern China, the Korean peninsula, and Vietnam". Pick one sourced range.
- [x] [ERROR] cherry-shrimp-cost-guide says the ghost shrimp risk is something "our health issues guide touches on", but cherry-shrimp-health-issues-guide never mentions tankmate predation. Repoint the sentence (see covered+linked below).

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Ghost shrimp predation: aquarium-stocking-and-tankmates-guide lists ghost shrimp as a cherry shrimp predator (in sidebar). Rewrite the cost guide sentence to link there instead of the health guide.
- [x] [COVERED+LINKED] Soft source water: freshwater-ph-gh-kh-guide covers RO blending and remineralizing (sidebar). The hub FAQ says only "test and adjust gradually".

**Gaps: truly missing**
- [ ] [TRULY MISSING] Starting dose of a remineralizer for water that tests too soft. Belongs in cherry-shrimp-tank-setup-guide.

### Corydoras catfish (corydoras-catfish)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Barbel erosion (framing): corydoras-catfish-health-issues-guide calls sharp substrate "the usual explanation" vs corydoras-catfish-enrichment-guide "probably wrong about the reason", bacterial load first (Vanderzwalmen 2022). The health guide's seoDescription still states "barbel erosion from sharp substrate" flat (Sep 8-15). Align both to the enrichment guide's cited position.

**Low grades and thin pages**
- [ ] [LOW GRADE] corydoras-catfish-handling-guide (C, thin): a handling guide for an unhandled fish that restates the hub's schooling and air-gulping facts. Rebuild it around the one contact moment: netting (pectoral spines lock in mesh, a fact now sitting in the enrichment guide), arrival acclimation, water changes around a bottom feeder, and dwarf vs standard ID (Sep 8-15).
- [ ] [THIN] The "Jackson's Chameleon, Canary, Giant Millipede & Corydoras compared" link and blurb is pasted into five of six deep dives. Keep it on one page.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine and cycling: fish-quarantine-and-treatment-guide and aquarium-cycling-guide are in the sidebar. The hub's first-week list should name the 30 day quarantine with an in-body link.

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to vacuum sand without clouding the tank. Belongs in corydoras-catfish-tank-setup-guide.
- [ ] [TRULY MISSING] Which Corydoras species want cooler or warmer water (Sep 8-15). Belongs in corydoras-catfish-tank-setup-guide.
- [ ] [TRULY MISSING] Arrival acclimation method. Belongs in the rebuilt handling guide.

**Short pages**
- [ ] [SHORT] corydoras-catfish-handling-guide 417, corydoras-catfish-health-issues-guide 535, corydoras-catfish-cost-guide 582, corydoras-catfish-tank-setup-guide 559.

### Koi (koi)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Adult size: hub and encyclopedia "12-36 inches" vs koi-handling-guide and koi-vs-goldfish-guide "24 to 25 inches, up to 3 feet" vs koi-enrichment-guide "around two feet". The 12 inch floor appears nowhere else. State one range.

**Low grades and thin pages**
- [ ] [THIN] koi-vs-goldfish-guide (B, filler): the size and lifespan sections rerun cost and setup numbers. Replace with material only a comparison can give.
- [ ] [THIN] Encyclopedia graded B (background only). Low priority.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Water test targets (ammonia and nitrite at zero) and the first pond cycle: aquarium-cycling-guide (sidebar). koi-tank-setup-guide and koi-health-issues-guide tell readers to "correct water quality" without the numbers; add them with an in-body link.
- [x] [COVERED+LINKED] Filtration sizing method: aquarium-filtration-guide gives turnover math (sidebar) but no pond figures. Link it from koi-tank-setup-guide and add the pond number (see truly missing).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Pond filtration sizing in GPH or turnover per hour against volume and stocking, and EPDM liner sizing math. Belongs in koi-tank-setup-guide.
- [ ] [TRULY MISSING] What happens after a KHV diagnosis and who it is reported to (Sep 8-15). Belongs in koi-health-issues-guide.
- [ ] [TRULY MISSING] Arrival acclimation (Sep 8-15). Belongs in koi-handling-guide.

**Short pages**
- [ ] [SHORT] koi-handling-guide 480.

### Oscar (oscar)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Hole-in-the-head causes (framing): oscar-fish-health-issues-guide lists nitrate, nutrition, "prolonged carbon use" vs oscar-fish-feeding-guide overfeeding, water quality, diet monotony, vitamins. Give both pages the same disputed-cause list.

**Doubted claims**
- [x] [DOUBTED] oscar-fish-cost-guide: "$235 average vet exam" quoted flat with no source. Source it or drop it.
- [x] [DOUBTED] oscar-fish-cost-guide leans on "an aquarium retailer" for lifespan (Sep 8-15). Use the encyclopedia's source.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Cycling before day one: aquarium-cycling-guide is in the sidebar only. Add "cycle first" with an in-body link to the hub first-week list or oscar-fish-tank-setup-guide.
- [x] [COVERED+LINKED] Introducing a tankmate or second oscar: aquarium-stocking-and-tankmates-guide "Adding New Fish Without a Fight" (sidebar). oscar-fish-handling-guide states the "fits in its mouth" rule but not the introduction; add one oscar-specific line with the link.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Metronidazole dose, product and vet-vs-home line for hole-in-the-head. Belongs in oscar-fish-health-issues-guide. Nothing on the site gives a dose.
- [ ] [TRULY MISSING] Stand and floor loading for 75 to 125 gallons (Sep 8-15). Belongs in oscar-fish-tank-setup-guide.

**Short pages**
- [ ] [SHORT] oscar-fish-handling-guide 441, oscar-fish-health-issues-guide 500, oscar-fish-cost-guide 588, oscar-fish-tank-setup-guide 511, oscar-fish-feeding-guide 433.

### Discus (discus)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: encyclopedia wild "10 to 13 years" vs discus-cost-guide "10 to 15 years... some sources put the typical captive lifespan closer to 8 to 10". Label wild vs captive on both.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Power outage risk for a warm, canister-filtered tank: aquarium-power-outage-and-transport-guide (sidebar). discus-tank-setup-guide raises the canister failure risk; add an in-body link there.
- [x] [COVERED+LINKED] RO remineralizing: freshwater-ph-gh-kh-guide (sidebar) (Sep 8-15).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Grow-out housing for juveniles (Sep 8-15). Belongs in discus-tank-setup-guide.

### Betta fish (betta-fish)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Feeding frequency (framing): betta-fish-feeding-guide says sources disagree (once a day vs up to three meals) vs betta-fish-tank-setup-guide FAQ flat "once or twice a day". Carry the hedge into the FAQ.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Tankmates and group sizes: aquarium-stocking-and-tankmates-guide (sidebar). The hub names a few tankmates; add an in-body link where it does.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Lighting and photoperiod (Sep 8-15). Belongs in betta-fish-tank-setup-guide.
- [ ] [TRULY MISSING] Picking a healthy betta at the store (Sep 8-15). Belongs in betta-fish-cost-guide.

**Short pages**
- [ ] [SHORT] betta-fish-handling-guide 461, betta-fish-cost-guide 585, betta-fish-tank-setup-guide 523.

### Ghost shrimp (ghost-shrimp)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Species identity (framing): encyclopedia commits to Palaemon paludosus as "the most common aquarium species" vs ghost-shrimp-enrichment-guide "ghost shrimp is not one species", uncited. Source the mixing claim or soften it to match.

**Low grades and thin pages**
- [ ] [LOW GRADE] ghost-shrimp-enrichment-guide (B-, filler): mostly restates handling and health advice as "recovery", plus a research section.

**Doubted claims**
- [x] [DOUBTED] ghost-shrimp-enrichment-guide cites "the decapod sentience review" with no name, year or link, unlike every other page in the set. Cite it properly or cut the section.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Molting: shrimp-molting-guide (sidebar and body) gives GH for Neocaridina and Caridina only. The Palaemon number is truly missing (below).

**Gaps: truly missing**
- [ ] [TRULY MISSING] GH target for a clean molt in Palaemon, as opposed to the 3 to 15 dGH housing range. Belongs in ghost-shrimp-health-issues-guide.
- [ ] [TRULY MISSING] What to do after a positive copper test (carbon, water changes, how long). Belongs in ghost-shrimp-health-issues-guide.
- [ ] [TRULY MISSING] How to tell which species is in the bag and whether the numbers change. Belongs in ghost-shrimp-cost-guide or the encyclopedia.

### Neon tetra (neon-tetra)
Status: open

**Low grades and thin pages**
- [ ] [THIN] neon-tetra-tank-setup-guide (B+): the tank-size paragraph appears twice back to back ("10 gallons is the practical minimum" then "A 10-gallon tank is a solid starting point"). Cut one.
- [ ] [THIN] FAQ blocks on tank size and feeding frequency repeat word for word across the hub, tank setup and feeding pages.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Named tankmates: aquarium-stocking-and-tankmates-guide "Species by Species" (sidebar). neon-tetra-tank-setup-guide says only "peaceful, similarly sized"; name a few species with an in-body link.
- [x] [COVERED+LINKED] Ich temperature: aquarium-ich-treatment-guide (sidebar). neon-tetra-health-issues-guide still has no number (Sep 8-15).
- [x] [COVERED+LINKED] Softening hard tap water: freshwater-ph-gh-kh-guide (body-linked) (Sep 8-15).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Acclimation method and how many fish to add at once. Belongs in neon-tetra-handling-guide.
- [ ] [TRULY MISSING] Sexing and breeding. Belongs in neon-tetra-handling-guide or the hub.
- [ ] [TRULY MISSING] Euthanasia method (the page recommends it without saying how) (Sep 8-15). Belongs in neon-tetra-health-issues-guide.

**Short pages**
- [ ] [SHORT] neon-tetra-handling-guide 421, neon-tetra-health-issues-guide 490, neon-tetra-cost-guide 538, neon-tetra-tank-setup-guide 527, neon-tetra-feeding-guide 500.

### Goldfish (goldfish)
Status: open

**Low grades and thin pages**
- [ ] [THIN] goldfish-handling-guide (B, thin): the slime coat point is restated three times across sections and FAQ. Replace the repeats with acclimation (below).
- [ ] [THIN] Encyclopedia graded B (history only). Low priority.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Cycling timeline and ammonia dosing: aquarium-cycling-guide (body-linked from goldfish-tank-setup-guide). Optional: one line summarizing the cycling steps.

**Gaps: truly missing**
- [ ] [TRULY MISSING] A settled adult feeding frequency: goldfish-feeding-guide FAQ splits once daily vs two to three into "1 to 2 small meals". Decide or flag it as unresolved on the hub too.
- [ ] [TRULY MISSING] Drip or temperature acclimation (Sep 8-15). Belongs in goldfish-handling-guide.
- [ ] [TRULY MISSING] Treatment doses for fin rot and dropsy (only anchor worm and flukes have doses) (Sep 8-15). Belongs in goldfish-health-issues-guide.
- [ ] [TRULY MISSING] Spotting a healthy fish vs a "feeder" goldfish (Sep 8-15). Belongs in goldfish-cost-guide.

**Short pages**
- [ ] [SHORT] goldfish-handling-guide 451, goldfish-cost-guide 581, goldfish-tank-setup-guide 531.

### Cardinal tetra (cardinal-tetra)
Status: open

**Low grades and thin pages**
- [ ] [LOW GRADE] cardinal-tetra-tank-setup-guide (B, filler): "A 10-gallon tank is workable for the bare minimum school of 6" then two lines later "A 10-gallon tank covers a school of 6 at minimum". Cut one.
- [ ] [LOW GRADE] cardinal-tetra-handling-guide (B): the group-size number is stated three times.
- [ ] [THIN] The Rio Negro harvest story and the 2008 Acta Amazonica nitrite study are retold in six pages; the neon tetra disease paragraph is duplicated between health and feeding.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Water change routine: aquarium-water-changes-guide (sidebar). Only the hub has one summary line.
- [x] [COVERED+LINKED] Quarantine duration: fish-quarantine-and-treatment-guide (body-linked). The health guide says "settled by the hospital tank rules" without the 30 days; state it.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Euthanasia method (Sep 8-15). Belongs in cardinal-tetra-health-issues-guide.
- [ ] [TRULY MISSING] Arrival acclimation (Sep 8-15). Belongs in cardinal-tetra-handling-guide.

**Short pages**
- [ ] [SHORT] cardinal-tetra-handling-guide 509.

### Amano shrimp (amano-shrimp)
Status: open

**Low grades and thin pages**
- [ ] [LOW GRADE] amano-shrimp-enrichment-guide (B, filler): "What the Decapod Sentience Review Found" admits it has no shrimp data, then quotes it anyway.
- [ ] [THIN] amano-shrimp-handling-guide (B+): half of it retells the breeding biology. The eggs-need-brackish-water explanation appears in five pages; keep one full telling.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine tank size: fish-quarantine-and-treatment-guide gives a bare 10 to 20 gallon hospital tank (sidebar). The hub buy list says only "a separate cycled tank"; add the number.
- [ ] [COVERED+LINKED] Water change percent: aquarium-water-changes-guide has a shrimp row (cherry shrimp, 10% a week) (sidebar). State amano's own figure on the hub.
- [x] [COVERED+LINKED] Sponge vs hang-on-back: aquarium-filtration-guide "Filter Types" (sidebar). amano-shrimp-tank-setup-guide recommends a HOB without saying whether it replaces the hub's sponge filter; say which.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Quarantine tank cost (Sep 8-15). Belongs in amano-shrimp-cost-guide.

### Angelfish (angelfish)
Status: open

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Sunken belly parasites: spotting-a-sick-fish-guide names Spironucleus and Capillaria (sidebar). angelfish-feeding-guide still says "a stomach parasite specific to cichlids" (Sep 8-15 too); name them.
- [x] [COVERED+LINKED] Hospital tank and 30 to 60 day quarantine: fish-quarantine-and-treatment-guide (body-linked). Ich ceiling: aquarium-ich-treatment-guide (sidebar).
- [x] [COVERED+LINKED] Nitrate target: aquarium-water-changes-guide (sidebar) (Sep 8-15).

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to find an aquatic vet. spotting-a-sick-fish-guide says when, not how. Belongs in angelfish-health-issues-guide (or a shared vet guide).
- [ ] [TRULY MISSING] Arrival acclimation (Sep 8-15). Belongs in angelfish-handling-guide.

**Short pages**
- [ ] [SHORT] angelfish-handling-guide 537, angelfish-health-issues-guide 444, angelfish-cost-guide 569, angelfish-tank-setup-guide 594.

### Bristlenose pleco (bristlenose-pleco)
Status: open

**Low grades and thin pages**
- [ ] [THIN] bristlenose-pleco-handling-guide (B+): a handling guide for an unhandled fish; it earns space with net-spine mechanics but could be reframed around netting and transfer.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Ich temperature and a copper-free option: aquarium-ich-treatment-guide covers heat and salt (sidebar). bristlenose-pleco-health-issues-guide still has neither (Sep 8-15).
- [x] [COVERED+LINKED] GH/KH meaning: freshwater-ph-gh-kh-guide (sidebar). The species range is truly missing (below).

**Gaps: truly missing**
- [ ] [TRULY MISSING] GH/KH range for bristlenose. Belongs in bristlenose-pleco-tank-setup-guide.
- [ ] [TRULY MISSING] How to tell a juvenile bristlenose from a common pleco before the 3 inch bristle stage. Belongs in bristlenose-pleco-cost-guide.
- [ ] [TRULY MISSING] Portion size for the 85/15 plant-to-protein ratio. Belongs in bristlenose-pleco-feeding-guide.
- [ ] [TRULY MISSING] Driftwood preparation (Sep 8-15). Belongs in bristlenose-pleco-tank-setup-guide.

**Short pages**
- [ ] [SHORT] bristlenose-pleco-handling-guide 598, bristlenose-pleco-health-issues-guide 490.

### Guppy (guppy)
Status: open

**Gaps: truly missing**
- [ ] [TRULY MISSING] Visual sexing by the gonopodium, not just size and color. Belongs in guppy-handling-guide (the population plan page).
- [ ] [TRULY MISSING] What to do when fry appear: birthing box or dense-cover tank, netting fry, when they rejoin adults. Belongs in guppy-handling-guide.

**Short pages**
- [ ] [SHORT] guppy-handling-guide 519, guppy-health-issues-guide 485.

### Molly (molly)
Status: open

**Low grades and thin pages**
- [ ] [THIN] molly-handling-guide (B+): opens by restating the hub tagline that mollies are not handled before earning it.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Water change walkthrough (percent, nitrate 20/40 ppm): aquarium-water-changes-guide (sidebar). The set has only a hub bullet.
- [x] [COVERED+LINKED] Filter choice: aquarium-filtration-guide (body-linked). molly-tank-setup-guide leaves it as "what you're optimizing for"; give a default (for example sponge first, HOB if not breeding).

### Platy (platy)
Status: open

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Cycling steps and water testing: aquarium-cycling-guide and freshwater-ph-gh-kh-guide (both body-linked). No action beyond an optional one-line summary of the ammonia dosing step in platy-tank-setup-guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] What to do with unwanted fry: rehoming or selling venues, when to separate. Belongs in platy-handling-guide (the breeding plan page).

### Zebra danio (zebra-danio)
Status: open

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Swim bladder first test: spotting-a-sick-fish-guide "Test the Water Before You Do Anything Else" (sidebar). zebra-danio-health-issues-guide names poor water quality without saying which reading to take first; name it.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Rough fry survival from an accidental spawn in a planted community tank. Belongs in zebra-danio-feeding-guide, where the tradeoff is raised.
- [ ] [TRULY MISSING] Quarantine tank cost (Sep 8-15). Belongs in zebra-danio-cost-guide.

## Reptiles (31)

Suggested sessions: R1 green-iguana, box-turtle, crested-gecko, uromastyx, fire-skink. R2 african-fat-tail, california-kingsnake, rosy-boa, red-eared-slider, sulcata-tortoise. R3 tegu, bearded-dragon, jacksons-chameleon, tokay-gecko, hognose-snake. R4 milk-snake, corn-snake, ball-python, blue-tongue-skink, green-anole, russian-tortoise. R5 ackie-monitor, boa-constrictor, leopard-gecko, savannah-monitor, veiled-chameleon. R6 mourning-gecko, gargoyle-gecko, leaf-tailed-gecko, garter-snake, red-footed-tortoise.

No shared guide covers lizard sexing, lizard brumation, reptile enclosure cleaning schedules, finding a reptile vet, or choosing a breeder; those lines are marked TRULY MISSING per species.

### Green iguana (green-iguana)
Status: open

**Errors and contradictions**
- [x] [ERROR] green-iguana-cost-guide: body says "Add those rows and the kit lands at about $1,041 to $1,105" (the table sums to $1,041 at the low end), while the same page's FAQ and the hub say "about $985 to $1,100". Fix the FAQ and hub to the table.
- [x] [CONTRADICTION] Basking bulbs: hub first-week list and green-iguana-tank-setup-guide FAQ say "roughly six halogens" vs hub buy list and cost kit "75 watt, two or three". Say juvenile kit vs adult branch in both places.
- [x] [CONTRADICTION] Insects (framing): hub "no insects... ever" vs green-iguana-feeding-guide "a published tolerance, at under 5% of an adult iguana's diet" before advising against. Soften the hub to match.

**Low grades and thin pages**
- [x] [THIN] green-iguana-tank-setup-guide: "very short for the most consequential subject in the set" (Sep 8-15), 464 words.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine and fecal screen: reptile-quarantine-guide (body-linked from the enrichment guide). The cost is truly missing (below).

**Gaps: truly missing**
- [x] [TRULY MISSING] Quarantine workup cost (fecal, first exam) for an iguana. Belongs in green-iguana-cost-guide.

**Short pages**
- [x] [SHORT] green-iguana-handling-guide 461, green-iguana-health-issues-guide 482, green-iguana-tank-setup-guide 464.

### Box turtle (box-turtle)
Status: open

**Errors and contradictions**
- [x] [ERROR] box-turtle-health-issues-guide has no Sources block (confirmed; a medical page). Add 3 to 5 real sources.
- [x] [CONTRADICTION] Adult feeding: hub and box-turtle-tank-setup-guide "daily or every other day" vs box-turtle-feeding-guide "daily works only on the looser of the two... the slower end is the safer default". Move the hub to the feeding guide's default.
- [x] [CONTRADICTION] Substrate depth: box-turtle-tank-setup-guide "2 to 3 inches deep" vs box-turtle-enrichment-guide "deep enough that the turtle can fully disappear". Say 2 to 3 inches is the floor and give the enrichment target in the setup guide.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Brumation protocol: tortoise-brumation-guide covers box turtles by name (45 to 50°F, 10 to 14 day fast, 10% weight-loss ceiling) (sidebar). The reader thought no box turtle protocol existed; put those three numbers on the hub or health guide with an in-body link.
- [x] [COVERED+LINKED] Six month quarantine: chelonian-herpesvirus-quarantine-guide (sidebar).
- [x] [COVERED+LINKED] Outdoor sun and a lighter calcium schedule: box-turtle-feeding-guide assumes outdoor housing; outdoor-reptile-housing-guide is body-linked. State the outdoor case in the feeding text rather than relying on the setup guide.

**Gaps: truly missing**
- [x] [TRULY MISSING] What the homing instinct means after an escape (Sep 8-15). Belongs in box-turtle-handling-guide.

**Short pages**
- [x] [SHORT] box-turtle-handling-guide 511, box-turtle-health-issues-guide 434, box-turtle-tank-setup-guide 599.

### Crested gecko (crested-gecko)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: encyclopedia "the widely quoted 10-20 years is a captive range" vs hub and crested-gecko-cost-guide "15 to 20 years in captivity". Pick one captive range.
- [x] [CONTRADICTION] Weigh-ins: crested-gecko-health-issues-guide "Weigh your gecko weekly" vs crested-gecko-feeding-guide "Weighing the gecko monthly". Pick one.
- [x] [ERROR] crested-gecko-tank-setup-guide basking row reads "82-85°F at the surface... (some sources: 72-75°F to be safe)", undercutting itself. State one target.

**Low grades and thin pages**
- [x] [LOW GRADE] crested-gecko-tank-setup-guide (B), for the row above.
- [x] [LOW GRADE] crested-gecko-enrichment-guide (B): generic plant and hide sections that fit any arboreal reptile.

**Gaps: truly missing**
- [x] [TRULY MISSING] Cleaning and refill schedule for the water dish. Belongs in crested-gecko-tank-setup-guide.
- [x] [TRULY MISSING] Gravid female and infertile egg care (Sep 8-15). Belongs in crested-gecko-health-issues-guide.
- [x] [TRULY MISSING] Sexing (Sep 8-15). Belongs in crested-gecko-handling-guide.
- [x] [TRULY MISSING] Grow-out enclosure size for juveniles (Sep 8-15). Belongs in crested-gecko-tank-setup-guide.

**Short pages**
- [x] [SHORT] crested-gecko-handling-guide 567, crested-gecko-cost-guide 432, crested-gecko-enrichment-guide 364.

### Uromastyx (uromastyx)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Substrate: uromastyx-health-issues-guide (citing vet guidance) "sand, dirt, and even wood chips can cause impaction... use tile, reptile carpet, or paper" vs hub and uromastyx-tank-setup-guide, where sand packed 4 inches deep is required for burrowing. Say why sand is used here despite the general warning.
- [x] [CONTRADICTION] Substrate wording: hub "fine sand" vs tank setup sand, topsoil and excavator clay mix. Give the hub the mix.
- [x] [CONTRADICTION] UVB labeling: uromastyx-vs-bearded-dragon-guide "Ferguson Zone 4 (most intense)" vs uromastyx-tank-setup-guide, which gives a UVI number and never names a zone. Add the zone to the setup guide.

**Low grades and thin pages**
- [x] [THIN] uromastyx-enrichment-guide (B+): restates the tank guide's heat and burrow requirements at length.
- [x] [THIN] uromastyx-cost-guide: "the table has two rows and then hands the rest to prose" (Sep 8-15).

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine before joining a collection: reptile-quarantine-guide (sidebar only). Add an in-body link where cohousing comes up.

**Gaps: truly missing**
- [x] [TRULY MISSING] Sexing and managing a pair or cohabiting animals. Belongs in uromastyx-handling-guide.
- [x] [TRULY MISSING] Brumation logistics: how to cool, whether to feed. Belongs in uromastyx-health-issues-guide or the feeding guide.
- [x] [TRULY MISSING] Hatchling housing and cleaning cadence (Sep 8-15). Belongs in uromastyx-tank-setup-guide.

**Short pages**
- [x] [SHORT] uromastyx-handling-guide 346, uromastyx-cost-guide 464, uromastyx-tank-setup-guide 492.

### Fire skink (fire-skink)
Status: open

**Errors and contradictions**
- [x] [ERROR] Hub and fire-skink-cost-guide give "Setup roughly $660 to $720 with the on/off thermostat" ($130 on/off unit in the table) while both pages say its maker forbids running a basking bulb on it. Price a dimming thermostat into the total. Existing entries in affiliateProducts.js: dimming-thermostat-pt02t, dimming-thermostat-exo-terra-proportional, dimming-thermostat-reptizoo-pid (check price and date it).
- [x] [CONTRADICTION] Temperament (framing): encyclopedia "most become confident enough to feed from tongs" vs fire-skink-handling-guide "even settled fire skinks tend to stay squirmy and quick". Add a clause separating tong feeding from handling.

**Low grades and thin pages**
- [x] [LOW GRADE] fire-skink-cost-guide (B-), for the thermostat problem above.
- [x] [THIN] fire-skink-enrichment-guide (B+): borrowed blue-tongue study. The blue-tongue comparison also appears in cost, handling, health and tank setup; trim.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Why a bulb needs a dimming controller and how to pick wattage: reptile-heating-thermostats-guide (body-linked). The specific bulb wattage is truly missing (below).

**Gaps: truly missing**
- [x] [TRULY MISSING] Basking bulb wattage for the 36x18x18 build. Belongs in fire-skink-tank-setup-guide.
- [x] [TRULY MISSING] Sexing and breeding. Belongs in fire-skink-handling-guide.
- [x] [TRULY MISSING] Whether females can be group housed, and how. Belongs in fire-skink-enrichment-guide.
- [x] [TRULY MISSING] First aid for a dropped tail (Sep 8-15). Belongs in fire-skink-health-issues-guide.
- [x] [TRULY MISSING] Substrate volume to buy (topsoil and sand quantities) (Sep 8-15). Belongs in fire-skink-cost-guide.

**Short pages**
- [x] [SHORT] fire-skink-handling-guide 377, fire-skink-health-issues-guide 432.

### African fat-tailed gecko (african-fat-tail)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: encyclopedia "the widely quoted 10-20 years is a captive range" vs hub and african-fat-tail-cost-guide "15 to 20 years is the commonly cited range". Pick one.
- [x] [CONTRADICTION] Sand and impaction (framing): african-fat-tail-tank-setup-guide "tends to happen in geckos that are already unhealthy... not simply from naturalistic substrate" vs african-fat-tail-feeding-guide "can cause impaction if swallowed with prey". Give feeding the setup guide's narrower claim.

**Low grades and thin pages**
- [x] [THIN] african-fat-tail-enrichment-guide (thin): one borrowed leopard gecko study plus a caveat.
- [x] [THIN] The leopard gecko comparison appears in cost, handling, health, tank setup and enrichment. Keep one or two.

**Gaps: truly missing**
- [x] [TRULY MISSING] Sexing. Belongs in african-fat-tail-handling-guide.
- [x] [TRULY MISSING] A decision on cohabitation and males (Sep 8-15). Belongs in african-fat-tail-enrichment-guide.
- [x] [TRULY MISSING] Spot-clean and full clean schedule. Belongs in african-fat-tail-tank-setup-guide.
- [x] [TRULY MISSING] Hygrometer and scale missing from the cost table (Sep 8-15). Belongs in african-fat-tail-cost-guide.

**Short pages**
- [x] [SHORT] african-fat-tail-handling-guide 363, african-fat-tail-health-issues-guide 504, african-fat-tail-cost-guide 453, african-fat-tail-enrichment-guide 546.

### California kingsnake (california-kingsnake)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: hub and california-kingsnake-cost-guide "20 years or more" vs encyclopedia "up to 33.3 years in captivity". Say typical vs record.
- [x] [CONTRADICTION] Feeding interval: hub "Hatchlings and juveniles every 5 to 7 days" vs california-kingsnake-feeding-guide table hatchling 5 to 6, juvenile 5 to 7. Split the hub row.

**Low grades and thin pages**
- [x] [THIN] The corn snake comparison appears in nearly every deep dive, and the solo-housing paragraph is rewritten seven times. Trim both.
- [x] [THIN] Encyclopedia graded B. Low priority.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] Winter cooling (Sep 8-15): snake-brumation-guide covers whether a pet snake needs brumation and names kingsnakes. Wire it (Session 0) and add one kingsnake sentence with an in-body link in california-kingsnake-feeding-guide where winter appetite comes up.

**Gaps: truly missing**
- [x] [TRULY MISSING] Juvenile enclosure step between the 20 gallon hatchling tank and the 48x24x24 adult. Belongs in california-kingsnake-tank-setup-guide.
- [x] [TRULY MISSING] Vetting a breeder and confirming a pure captive-bred kingsnake. Belongs in california-kingsnake-cost-guide.
- [x] [TRULY MISSING] Temperature and humidity numbers and a food-refusal threshold in the health guide (Sep 8-15). Belongs in california-kingsnake-health-issues-guide.
- [x] [TRULY MISSING] Hatchling temperatures and hygrometer placement (Sep 8-15). Belongs in california-kingsnake-tank-setup-guide.

**Short pages**
- [x] [SHORT] california-kingsnake-health-issues-guide 410, california-kingsnake-cost-guide 437, california-kingsnake-tank-setup-guide 577, california-kingsnake-enrichment-guide 520.

### Rosy boa (rosy-boa)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: hub "20 to 30 years typical, the captive average nearer 18 to 22" (two ranges in one line) vs encyclopedia and rosy-boa-cost-guide "18-22 years in captivity with documented individuals past 30". Fix the hub.
- [x] [CONTRADICTION] Enclosure size: rosy-boa-enrichment-guide argues against the 20 gallon figure in rosy-boa-tank-setup-guide using two borrowed studies (Sep 8-15 and Sep 24). Reconcile or frame 20 gallons as a floor.

**Low grades and thin pages**
- [x] [LOW GRADE] rosy-boa-enrichment-guide (B): see the size point above.
- [x] [THIN] rosy-boa-handling-guide (B+): about a third is boa constrictor comparison, which also appears in five of six deep dives.

**Doubted claims**
- [x] [DOUBTED] Every FAQ repeats the same numbers in the same order across pages, "what a templated content system produces". Vary or trim the FAQs.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] UVB yes or no: uvb-lighting-complete-guide says low-output UVB is now advised for nocturnal and crepuscular species and puts snakes in Zones 1 to 2. Add uvb-lighting-complete-guide to RELATED_ARTICLES['rosy-boa'] and one rosy boa sentence with an in-body link in the lighting section of rosy-boa-tank-setup-guide.

**Gaps: truly missing**
- [x] [TRULY MISSING] Substrate depth in inches (or a starting fill in cubic feet). Belongs in rosy-boa-tank-setup-guide.
- [x] [TRULY MISSING] How often to handle (Sep 8-15). Belongs in rosy-boa-handling-guide.
- [x] [TRULY MISSING] Photoperiod (Sep 8-15). Belongs in rosy-boa-tank-setup-guide.

**Short pages**
- [x] [SHORT] rosy-boa-handling-guide 514.

### Red-eared slider (red-eared-slider)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan ceiling: encyclopedia "captive up to 41.3 years" vs red-eared-slider-cost-guide "40 to 70 years". State one range and label the record.
- [x] [CONTRADICTION] Adult size: encyclopedia "5-12 inches (13-30 cm)" vs red-eared-slider-tank-setup-guide averages of 25.4 cm females and 17.78 cm males. Align the encyclopedia.

**Low grades and thin pages**
- [x] [LOW GRADE] red-eared-slider-enrichment-guide (B, filler): about half re-runs the tank guide's water volume, filtration and basking advice. Keep the colored-objects study and new material.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Cycling and ammonia and nitrite targets: aquarium-cycling-guide (body-linked; sidebar in Session 0). The buy list's test kit has no target values; add "ammonia and nitrite at zero" with the link.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] Quarantine before adding a second slider: reptile-quarantine-guide (months, separate tools, disinfection before introduction). Sliders have neither it nor the chelonian quarantine guide in RELATED_ARTICLES. Add reptile-quarantine-guide and one sentence with an in-body link in red-eared-slider-handling-guide where multiple turtles come up.
- [x] [COVERED, NOT LINKED] Filter media swap and deep clean (Sep 8-15): aquarium-filtration-guide "Never Replace All Your Media at Once". Add aquarium-filtration-guide to RELATED_ARTICLES['red-eared-slider'] and a sentence with an in-body link in red-eared-slider-tank-setup-guide.

**Gaps: truly missing**
- [x] [TRULY MISSING] Introduction steps and signs to separate when adding a second slider. Belongs in red-eared-slider-handling-guide.
- [x] [TRULY MISSING] The tank setup guide's nesting option and the feeding guide's egg binding section never mention each other; add the egg-binding reason to the nesting line in text (sibling pages, so no link).

**Short pages**
- [x] [SHORT] red-eared-slider-handling-guide 466.

### Sulcata tortoise (sulcata-tortoise)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: hub "Commonly 70 to 100 years" (also sulcata-hedgehog-lovebird-guppy-overview) vs encyclopedia "average captive longevity at 54.3 years, and 70 years or more is achievable". Soften the hub and overview.
- [x] [CONTRADICTION] Pyramiding (uneven detail): sulcata-tortoise-feeding-guide FAQ adds that Wiesner and Iben's method "has itself been criticized"; sulcata-tortoise-health-issues-guide, which carries the main discussion, does not. Move the caveat into the health guide.

**Low grades and thin pages**
- [x] [THIN] sulcata-tortoise-enrichment-guide (A-, honestly thin on native research). Low priority.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] UVB replacement: uvb-lighting-complete-guide says replace every 12 months (body-linked from the tank setup guide, which the reader could not find in the set; sidebar in Session 0).
- [x] [COVERED+LINKED] Six month quarantine reasoning: chelonian-herpesvirus-quarantine-guide (sidebar). The hub states six months with no why; add a clause and link.

**Gaps: truly missing**
- [x] [TRULY MISSING] UVB bulb specifics for a sulcata (tube strength, distance). Belongs in sulcata-tortoise-tank-setup-guide.
- [x] [TRULY MISSING] Emergency vet cost figure (Sep 8-15). Belongs in sulcata-tortoise-cost-guide.
- [x] [TRULY MISSING] How to move or transport an adult (Sep 8-15). Belongs in sulcata-tortoise-handling-guide.

**Short pages**
- [x] [SHORT] sulcata-tortoise-handling-guide 524.

### Argentine tegu (tegu)
Status: open

**Errors and contradictions**
- [x] [ERROR] argentine-tegu-feeding-guide is orphaned: it is not in RELATED_ARTICLES['tegu'] and cannot auto-detect (prefix argentine-tegu, guide id tegu), and no page links it. The s11 reader found diet only inside the tank setup guide. Add it to RELATED_ARTICLES['tegu'] (Session 0).

**Doubted claims**
- [x] [DOUBTED] argentine-tegu-feeding-guide cites "Florida's wildlife agency" and "the reptile manual" without names (b02). Name the sources.
- [x] [DOUBTED] argentine-tegu-feeding-guide sends brumation readers to tortoise-brumation-guide with a caveat. Add a short tegu bridging sentence on what differs.

**Gaps: truly missing**
- [x] [TRULY MISSING] Sexing. Belongs in argentine-tegu-handling-guide.
- [x] [TRULY MISSING] Maintenance and spot-cleaning of 12 to 18 inches of burrow substrate. Belongs in argentine-tegu-tank-setup-guide.
- [x] [TRULY MISSING] Price of the 8x4x4 adult build (Sep 8-15). Belongs in argentine-tegu-cost-guide.

**Short pages**
- [x] [SHORT] argentine-tegu-health-issues-guide 497.

### Bearded dragon (bearded-dragon)
Status: open

**Errors and contradictions**
- [x] [ERROR] bearded-dragon-cost-guide: the upfront table includes "Initial vet exam and fecal test, $120-$245" inside the "$400 to $800" total, while the text two paragraphs later says the exam and fecal "sit on top of that". Make the table and text agree.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Handling clock vs quarantine clock: reptile-quarantine-guide (sidebar). Add one sentence tying the 7 to 14 day settle-in to the 3 to 6 month quarantine in bearded-dragon-handling-guide.

**Gaps: truly missing**
- [x] [TRULY MISSING] How to find and vet a reptile-experienced vet. Belongs in bearded-dragon-health-issues-guide (or a shared vet guide).
- [x] [TRULY MISSING] Where to buy (breeder, store, rescue) and health checks before buying. Belongs in bearded-dragon-cost-guide.

**Short pages**
- [x] [SHORT] bearded-dragon-handling-guide 566.

### Jackson's chameleon (jacksons-chameleon)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Ambient temperature: jacksons-chameleon-tank-setup-guide "68-75°F" vs jacksons-chameleon-feeding-guide "lives at 70-80°F". Use one band.

**Low grades and thin pages**
- [x] [LOW GRADE] jacksons-chameleon-handling-guide (B, thin): repeats the live-birth fact already in the encyclopedia and cost guide; the Sep 8-15 run also called it "thin on actual technique".

**Doubted claims**
- [x] [DOUBTED] jacksons-chameleon-tank-setup-guide: humidity "day-low, night-high" is phrased loosely enough to be unfalsifiable. Give the day and night numbers.
- [x] [DOUBTED] Hub adult size row (9 to 13 inches) has no source link.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine walkthrough: reptile-quarantine-guide (sidebar). The hub has a one-line "day one" item; add an in-body link there.

**Gaps: truly missing**
- [x] [TRULY MISSING] Care of the 5 to 30 live-born young: housing, feeding, age to rehome. Belongs in jacksons-chameleon-health-issues-guide or feeding guide.
- [x] [TRULY MISSING] Gravid female, birth and dystocia section; respiratory infection beyond a passing line (Sep 8-15). Belongs in jacksons-chameleon-health-issues-guide.
- [x] [TRULY MISSING] Sourcing a captive-bred animal, and how a legal Hawaiian animal reaches the mainland trade (Sep 8-15). Belongs in jacksons-chameleon-cost-guide.
- [x] [TRULY MISSING] UVB distance from the branch and how to hold a room at 68 to 75°F (Sep 8-15). Belongs in jacksons-chameleon-tank-setup-guide.

**Short pages**
- [x] [SHORT] jacksons-chameleon-handling-guide 424, jacksons-chameleon-health-issues-guide 405, jacksons-chameleon-cost-guide 543.

### Tokay gecko (tokay-gecko)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Gut-load window: hub "24 to 72 hours, 48 the most cited" vs tokay-gecko-feeding-guide "gut-load for two to three days". Use the hub range on both.

**Doubted claims**
- [x] [DOUBTED] tokay-gecko-tank-setup-guide: the 18x18x36 minimum is bracketed by its sources rather than confirmed (Sep 8-15).

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Gut-load window: gut-loading-feeder-insects-guide (body-linked; sidebar in Session 0).

**Gaps: truly missing**
- [x] [TRULY MISSING] Pair introduction timeline and when to separate. Belongs in tokay-gecko-enrichment-guide.

**Short pages**
- [x] [SHORT] tokay-gecko-cost-guide 430, tokay-gecko-tank-setup-guide 545.

### Hognose snake (hognose-snake)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Female enclosure: hub and hognose-snake-tank-setup-guide "36x18x16" vs hognose-snake-cost-guide single line "36x18x18 in enclosure", no sex split. Match the cost table to the setup guide.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] Brumation: raised twice (feeding guide and hub) as a reason for appetite loss, never explained. snake-brumation-guide covers whether a pet snake needs it and the abort signs. Add it to RELATED_ARTICLES['hognose-snake'] and one hognose sentence with an in-body link in hognose-snake-feeding-guide. Note the guide lacks a "normal slowdown vs illness" checklist (non-species section).

**Gaps: truly missing**
- [x] [TRULY MISSING] Hatchling housing and cleaning cadence (Sep 8-15). Belongs in hognose-snake-tank-setup-guide.
- [x] [TRULY MISSING] Handling technique: support, lift, session length (Sep 8-15, verified). Belongs in hognose-snake-handling-guide.

**Short pages**
- [x] [SHORT] hognose-snake-health-issues-guide 541.

### Milk snake (milk-snake)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Hatchling feeding: hub feeding row covers juveniles and adults only (7 to 10 days) vs milk-snake-feeding-guide hatchlings every 5 to 7 days on pinkies. Add the hatchling row to the hub.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine steps: reptile-quarantine-guide (sidebar). The hub gives only a title; add an in-body link with the 3 to 6 months.
- [x] [COVERED+LINKED] Halogen vs ceramic: reptile-heating-thermostats-guide explains heat source types (body-linked). milk-snake-tank-setup-guide names the disagreement; add how to choose.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] Brumation vs winter slowdown: snake-brumation-guide. Add it to RELATED_ARTICLES['milk-snake'] and a sentence with an in-body link in milk-snake-feeding-guide's winter slowdown passage.

**Gaps: truly missing**
- [x] [TRULY MISSING] What to do about musking or nipping in a settling juvenile. Belongs in milk-snake-handling-guide.
- [x] [TRULY MISSING] Pick-up method, session length, first week (Sep 8-15, verified). Belongs in milk-snake-handling-guide.
- [x] [TRULY MISSING] Cleaning cadence (Sep 8-15). Belongs in milk-snake-tank-setup-guide.
- [x] [TRULY MISSING] Choosing and buying (Sep 8-15). Belongs in milk-snake-cost-guide.

**Short pages**
- [x] [SHORT] milk-snake-handling-guide 539, milk-snake-health-issues-guide 465, milk-snake-cost-guide 535, milk-snake-tank-setup-guide 524, milk-snake-enrichment-guide 513.

### Corn snake (corn-snake)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Humidity: corn-snake-tank-setup-guide gives "40 to 60%" with a flagged minority "65 to 75%" vs corn-snake-vs-hognose-snake-guide flat "40-60%". Carry the caveat into the comparison table.

**Low grades and thin pages**
- [x] [THIN] corn-snake-vs-hognose-snake-guide (B+), for the flattening above.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine setup steps: reptile-quarantine-guide (sidebar). The hub gives duration only; add an in-body link.

**Gaps: truly missing**
- [x] [TRULY MISSING] How to verify an enclosure is escape-proof (Sep 8-15). Belongs in corn-snake-handling-guide or tank setup.

**Short pages**
- [x] [SHORT] corn-snake-handling-guide 546, corn-snake-health-issues-guide 529.

### Ball python (ball-python)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Refusal causes (framing): ball-python-feeding-guide lists breeding season (October to March) first vs ball-python-health-issues-guide, which never mentions the season. Use one ordered list on both.

**Gaps: truly missing**
- [x] [TRULY MISSING] What to do after an escape (Sep 8-15, verified). Belongs in ball-python-handling-guide.
- [x] [TRULY MISSING] Cleaning cadence and a safe disinfectant (Sep 8-15). Belongs in ball-python-tank-setup-guide.
- Resolved, no action: "10 Surprising Ball Python Facts" exists at content/fun-facts/10-surprising-ball-python-facts.mdx; the reader only lacked it in the set.

**Short pages**
- [x] [SHORT] ball-python-cost-guide 535.

### Blue-tongued skink (blue-tongue-skink)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: encyclopedia calls 15 to 20 years "a captive figure" vs hub "15 to 20 years, some past 30" with no caveat. Add the caveat to the hub.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Heat bulb wattage for a 4x2x2 (Sep 8-15): reptile-heating-thermostats-guide gives the method (body-linked); add the starting wattage.

**Gaps: truly missing**
- [x] [TRULY MISSING] Body condition reference (weight and shape by life stage), which the feeding guide tells readers to use; adult weight figure (Sep 8-15). Belongs in blue-tongue-skink-health-issues-guide. Wave 2: adult weight (283 to 510 g, Smithsonian) and shape signs added; no source gives weights by life stage.
- [x] [TRULY MISSING] Brumation temperatures (Sep 8-15). Belongs in blue-tongue-skink-health-issues-guide.
- [x] [TRULY MISSING] Cleaning cadence (Sep 8-15). Belongs in blue-tongue-skink-tank-setup-guide.

**Short pages**
- [x] [SHORT] blue-tongue-skink-health-issues-guide 544.

### Green anole (green-anole)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Adult size: encyclopedia and hub "5 to 8 inches" vs green-anole-handling-guide FAQ "6 to 8 inches". Pick one.

**Doubted claims**
- [x] [DOUBTED] green-anole-cost-guide: escaped internal note "a genuinely new addition to the gear we recommend" (Sep 8-15, not rechecked). Grep and remove.

**Gaps: truly missing**
- [x] [TRULY MISSING] Sexing (the dewlap is display, not identification). Belongs in green-anole-handling-guide.
- [x] [TRULY MISSING] Spot-clean and substrate refresh schedule. Belongs in green-anole-tank-setup-guide.
- [x] [TRULY MISSING] Named live plant species. Belongs in green-anole-tank-setup-guide.
- [x] [TRULY MISSING] Egg laying (Sep 8-15, verified). Belongs in green-anole-health-issues-guide.
- [x] [TRULY MISSING] How to catch or restrain one (Sep 8-15, verified). Belongs in green-anole-handling-guide.
- [x] [TRULY MISSING] green-anole-enrichment-guide says keep a shallow dish "and do not count on it" without the reason (drowning in deep dishes, stated in the feeding guide). Add the reason in text (sibling pages, no link).

**Short pages**
- [x] [SHORT] green-anole-handling-guide 490, green-anole-health-issues-guide 399, green-anole-cost-guide 517.

### Russian tortoise (russian-tortoise)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Pyramiding cause (framing): russian-tortoise-feeding-guide "long attributed to" fast growth on protein vs russian-tortoise-health-issues-guide, VCA "not completely understood". Give the feeding guide the health guide's hedge.

**Low grades and thin pages**
- [x] [LOW GRADE] russian-tortoise-handling-guide (B, thin; 285 words, the shortest article on the site): restates "observation pet" and the sulcata comparison. Add ram and bite injury between housed females and an escape-proofing checklist. Wave 2: no source found for female ramming or biting; page covers female bullying stress, male fights and courtship biting instead.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Soak depth, temperature and minutes: tortoise-soaking-guide (sidebar). The hub gives frequency only.

**Short pages**
- [x] [SHORT] russian-tortoise-handling-guide 285, russian-tortoise-enrichment-guide 451.

### Ackie monitor (ackie-monitor)
Status: open

**Errors and contradictions**
- [x] [ERROR] ackie-monitor-handling-guide lists its two internal links (bearded dragon, blue-tongued skink) twice each. Remove the duplicates.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Sexing and breeding (the feeding guide already discusses reproductive females). Belongs in ackie-monitor-handling-guide or health guide.
- [ ] [TRULY MISSING] Temperature target for the humid dig zone. Belongs in ackie-monitor-tank-setup-guide.
- [ ] [TRULY MISSING] How to build a Retes stack. Belongs in ackie-monitor-tank-setup-guide.
- [ ] [TRULY MISSING] Session frequency for target training and puzzle feeding. Belongs in ackie-monitor-enrichment-guide.
- [ ] [TRULY MISSING] Ambient humidity number and bulb wattage in the text (Sep 8-15). Belongs in ackie-monitor-tank-setup-guide.
- [ ] [TRULY MISSING] Target adult weight for the weekly weigh-in (Sep 8-15). Belongs in ackie-monitor-health-issues-guide.
- [ ] [TRULY MISSING] Breeder vetting (Sep 8-15). Belongs in ackie-monitor-cost-guide.

**Short pages**
- [ ] [SHORT] ackie-monitor-health-issues-guide 494, ackie-monitor-cost-guide 581.

### Boa constrictor (boa-constrictor)
Status: open

**Low grades and thin pages**
- [ ] [LOW GRADE] boa-constrictor-health-issues-guide (B): zero citations and every section ends on the same "always see a vet" line.

**Doubted claims**
- [x] [DOUBTED] Same page: no sources at all next to a handling guide with five named sources. Add 3 to 5.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] UVB type and strength: uvb-lighting-complete-guide (Ferguson zones, low UVB for snakes). Add it to RELATED_ARTICLES['boa-constrictor'] and a boa sentence with an in-body link in boa-constrictor-tank-setup-guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Locks or latches for an animal this strong. Belongs in boa-constrictor-tank-setup-guide.
- [ ] [TRULY MISSING] What to do when a healthy adult refuses a meal (also Sep 8-15). Belongs in boa-constrictor-feeding-guide.
- [ ] [TRULY MISSING] A checklist for a "reputable breeder", the health guide's whole IBD prevention plan; mention the cost guide's lineage-fraud warning in the same passage (sibling, in text). Belongs in boa-constrictor-health-issues-guide.

**Short pages**
- [ ] [SHORT] boa-constrictor-health-issues-guide 447, boa-constrictor-feeding-guide 491.

### Leopard gecko (leopard-gecko)
Status: open

**Doubted claims**
- [x] [DOUBTED] leopard-gecko-health-issues-guide: "Around half of captive leopard geckos may carry it" (Cryptosporidium) could not be traced to a source (Sep 8-15). Source or cut.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] What the first fecal test screens for: reptile-quarantine-guide "Vet Workup" (coccidia, protozoa, intestinal worms) (body-linked). Add one line in the health guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Screen top gap tolerance. Belongs in leopard-gecko-tank-setup-guide.
- [ ] [TRULY MISSING] Egg-binding prevention and a lay box (Sep 8-15, verified). Belongs in leopard-gecko-health-issues-guide.
- [ ] [TRULY MISSING] Respiratory infection section (Sep 8-15, verified). Belongs in leopard-gecko-health-issues-guide.

**Short pages**
- [ ] [SHORT] leopard-gecko-handling-guide 586, leopard-gecko-cost-guide 489.

### Savannah monitor (savannah-monitor)
Status: open

**Low grades and thin pages**
- [ ] [LOW GRADE] savannah-monitor-health-issues-guide (NG, filler risk: fourth page to lead with obesity; Sep 8-15 C+ "names four problems and says see a vet").

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Night heat: reptile-heating-thermostats-guide "Night Heat Is a Different Setup" (heat mat, ceramic emitter or deep heat projector, no light) (sidebar). savannah-monitor-tank-setup-guide bans ceramic emitters as the primary basking source and never says what holds 70 to 75°F at night; say which it uses, with an in-body link.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Build plan and cost for the 8x4x4 enclosure (also Sep 8-15). Belongs in savannah-monitor-cost-guide.
- [ ] [TRULY MISSING] Body condition numbers (Sep 8-15). Belongs in savannah-monitor-health-issues-guide.
- [ ] [TRULY MISSING] Deep soil bed maintenance (Sep 8-15). Belongs in savannah-monitor-tank-setup-guide.
- [ ] [TRULY MISSING] How to buy and finding a vet (Sep 8-15). Belongs in savannah-monitor-cost-guide and health guide.

**Short pages**
- [ ] [SHORT] savannah-monitor-health-issues-guide 423, savannah-monitor-cost-guide 550.

### Veiled chameleon (veiled-chameleon)
Status: open

**Low grades and thin pages**
- [ ] [THIN] "Never recognize standing water" appears in the hub, tank setup, feeding, health and enrichment. Cut to three.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Dripper and misting settings for the 80 to 100% night target: chameleon-hydration-drippers-misters-fogging gives dripper runs (20 to 30 min, once or twice a day) and misting (3 to 5 min, 2 to 4 times a day) (body-linked). Add the night setting to veiled-chameleon-tank-setup-guide.
- [x] [COVERED+LINKED] Quarantine before meeting another pet: reptile-quarantine-guide (sidebar). Move it into the hub's day-one flow.

**Gaps: truly missing**
- [ ] [TRULY MISSING] What to do with a clutch of infertile eggs. Belongs in veiled-chameleon-health-issues-guide.
- [ ] [TRULY MISSING] Photoperiod and cleaning or drainage routine (Sep 8-15, verified). Belongs in veiled-chameleon-tank-setup-guide.

**Short pages**
- [ ] [SHORT] veiled-chameleon-handling-guide 560, veiled-chameleon-health-issues-guide 449.

### Mourning gecko (mourning-gecko)
Status: open

**Gaps: truly missing**
- [ ] [TRULY MISSING] Whether adults need a standing water dish or misting is enough. Belongs in mourning-gecko-tank-setup-guide and the hub buy list.
- [ ] [TRULY MISSING] Where separated hatchlings live and when they rejoin. Belongs in mourning-gecko-tank-setup-guide.
- [ ] [TRULY MISSING] Egg and surplus-animal management (Sep 8-15, verified). Belongs in mourning-gecko-health-issues-guide.
- [ ] [TRULY MISSING] Cleaning and cleanup-crew upkeep (Sep 8-15, verified). Belongs in mourning-gecko-tank-setup-guide.
- [ ] [TRULY MISSING] The health guide's egg-binding section lacks the feeding guide's "swollen abdomen with straining" tell. Add it in text (sibling pages, no link).

**Short pages**
- [ ] [SHORT] mourning-gecko-health-issues-guide 439, mourning-gecko-tank-setup-guide 460, mourning-gecko-enrichment-guide 579.

### Gargoyle gecko (gargoyle-gecko)
Status: open

**Low grades and thin pages**
- [ ] [THIN] gargoyle-gecko-enrichment-guide (B+, honestly thin). The Sep 8-15 note that it "links no gargoyle sibling" is dropped: house rules forbid in-body sibling links.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] UVB product example: uvb-lighting-complete-guide Zone 1 names low-output products (body-linked). Name one in the tank setup text next to "12-inch low-output T5".

**Gaps: truly missing**
- [ ] [TRULY MISSING] Breeding, sexing and egg incubation. Belongs in gargoyle-gecko-health-issues-guide or handling guide.
- [ ] [TRULY MISSING] One plain sentence that pet-trade gargoyles are captive-bred only (the encyclopedia implies it). Belongs in gargoyle-gecko-cost-guide.
- [ ] [TRULY MISSING] Cleanup crew quantity (Sep 8-15). Belongs in gargoyle-gecko-cost-guide.

**Short pages**
- [ ] [SHORT] gargoyle-gecko-handling-guide 503, gargoyle-gecko-enrichment-guide 513.

### Leaf-tailed gecko (leaf-tailed-gecko)
Status: open

**Low grades and thin pages**
- [ ] [THIN] Encyclopedia graded B (background only). The "sheds in one clean piece, no sunken eyes" check appears in hub, tank setup and health; keep it in health.

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to identify which Uroplatus species you are buying and confirm it is captive-bred. Belongs in leaf-tailed-gecko-cost-guide.
- [ ] [TRULY MISSING] Enclosure and humidity numbers for species other than the satanic leaf-tail. Belongs in leaf-tailed-gecko-tank-setup-guide.

**Short pages**
- [ ] [SHORT] leaf-tailed-gecko-handling-guide 435, leaf-tailed-gecko-health-issues-guide 455, leaf-tailed-gecko-cost-guide 490, leaf-tailed-gecko-enrichment-guide 566.

### Garter snake (garter-snake)
Status: open

**Low grades and thin pages**
- [ ] [THIN] The thiamine mechanism is explained in full on the hub, health guide and feeding guide. Keep one full telling.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Ongoing cost split by diet type (fish and worm eater vs mouse eater). Belongs in garter-snake-cost-guide.
- [ ] [TRULY MISSING] Wait-after-meal handling rule (Sep 8-15, verified). Belongs in garter-snake-handling-guide.
- [ ] [TRULY MISSING] A decision on cohabitation, raised and never settled (Sep 8-15). Belongs in garter-snake-enrichment-guide.

**Short pages**
- [ ] [SHORT] garter-snake-enrichment-guide 530.

### Red-footed tortoise (red-footed-tortoise)
Status: open

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Soak schedule, depth, temperature, minutes: tortoise-soaking-guide gives red-foot numbers (adults 2 to 3 times a week, lukewarm, elbow depth, 10 to 30 min) (sidebar). Soaking is mentioned three times in the set without a number; add them with an in-body link.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] UVB strength for a forest species: uvb-lighting-complete-guide (Ferguson zones). Add it to RELATED_ARTICLES['red-footed-tortoise'] and link it from red-footed-tortoise-tank-setup-guide's UVB section. The decision rule is still missing (below).

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to choose between the T5 HO and the Arcadia Forest 6% option for a given enclosure. Belongs in red-footed-tortoise-tank-setup-guide.

## Birds (10)

Suggested sessions: B1 conure, canary, quaker-parakeet, african-grey, cockatoo. B2 parrotlet, cockatiel, budgie, zebra-finch, lovebird.

Site-wide bird gaps with no shared guide: daily food amount in real units (budgie, cockatiel, lovebird, grey, cockatoo, parrotlet), daily out-of-cage time, cage and dish cleaning routine, finding an avian vet. The "wild parrots forage up to six hours a day" figure and the "training outperformed medication" cockatoo study are stated as fact on several pages while cockatoo-enrichment-guide says neither traces to a readable source; each page is listed below.

### Conure (conure)
Status: open

**Errors and contradictions**
- [x] [ERROR] conure-enrichment-guide states "Wild parrots spend up to six hours a day" as fact in the excerpt, seoDescription, FAQ and body (plus "The six hour figure is worth sitting with"), while cockatoo-enrichment-guide dropped the figure because it does "not trace to a source worth citing". Source it or reword as cockatoo did.
- [x] [ERROR] conure-cost-guide (Sep 8-15, verified): non-bird rows add to about $230 to $470 against "$400 to $900 or more before the bird"; vet line $70 to $120 against body $80 to $160; toys $50 to $90 a year against $10 to $30 a month.
- [x] [CONTRADICTION] Lifespan: hub and conure-cost-guide "20 to 25 years or more, some reaching 30" vs encyclopedia "the captive average is nearer 10 years". Say which number to plan around and why they differ.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Wing clipping: bird-wing-clipping-guide (sidebar). conure-tank-setup-guide discusses free flight at length; add a conure line with an in-body link.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Daily out-of-cage time (Sep 8-15). Belongs in conure-enrichment-guide.

**Short pages**
- [ ] [SHORT] conure-handling-guide 593.

### Canary (canary)
Status: open

**Errors and contradictions**
- [x] [ERROR] canary-health-issues-guide has no Sources block (confirmed; a medical page).
- [x] [CONTRADICTION] Lifespan: hub and canary-cost-guide "6 to 12 years, up to 15 reported" vs encyclopedia "up to 24 years recorded in captivity". Label the record.
- [x] [CONTRADICTION] Diet: canary-tank-setup-guide offers "a quality canary seed mix or a pelleted food" as equals vs canary-feeding-guide pellets at about three quarters. Align the setup guide.

**Doubted claims**
- [x] [DOUBTED] The same Jackson's chameleon comparison plug is pasted into five articles, "an SEO habit more than a genuine see also". Keep it on one page.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] What a cage cover is for: bird-photoperiod-sleep-guide FAQ on covering the cage at night (body-linked). The hub buy list lists a cover without saying why.
- [x] [COVERED+LINKED] Hen egg binding (Sep 8-15): bird-chronic-egg-laying-guide (sidebar) explains triggers and binding but names budgies, cockatiels and lovebirds only. Add a canary hen section with an in-body link in canary-health-issues-guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Egg food amount (only "two or three times a week"). Belongs in canary-feeding-guide.
- [ ] [TRULY MISSING] Recheck canary-cost-guide headline against its table (Sep 8-15, not rechecked).

**Short pages**
- [ ] [SHORT] canary-health-issues-guide 476, canary-cost-guide 489, canary-tank-setup-guide 507.

### Quaker parakeet (quaker-parakeet)
Status: open

**Errors and contradictions**
- [x] [ERROR] quaker-parakeet-handling-guide seoDescription "banned in 10 states" vs body and FAQ "Thirteen jurisdictions". Fix the seoDescription.
- [x] [ERROR] quaker-parakeet-enrichment-guide line 69 states "Training sessions outperformed medication and feeding enrichment" and "wild parrots spend up to six hours a day" as fact, and line 87 "The six hour gap applies here", both of which cockatoo-enrichment-guide declines to repeat. Reword to match cockatoo.
- [x] [ERROR] quaker-parakeet-tank-setup-guide still carries reptile template headings "Humidity" and "Substrate and Lining" (Sep 8-15, confirmed in the file).

**Low grades and thin pages**
- [ ] [THIN] quaker-parakeet-tank-setup-guide (A-, bordering filler): the nest-box warning appears a third time. Keep one full statement.

**Doubted claims**
- [x] [DOUBTED] quaker-parakeet-health-issues-guide opens on "hardy birds" next to a self-mutilation section (Sep 8-15, not rechecked).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Step-up, bite response and cage-territorial routine (Sep 8-15, verified). Belongs in quaker-parakeet-handling-guide.
- [ ] [TRULY MISSING] Cleaning cadence (Sep 8-15, verified). Belongs in quaker-parakeet-tank-setup-guide.
- [ ] [TRULY MISSING] What to do when moving to a ban state (Sep 8-15). Belongs in quaker-parakeet-legal-guide.

**Short pages**
- [ ] [SHORT] quaker-parakeet-health-issues-guide 539, quaker-parakeet-tank-setup-guide 512.

### African grey (african-grey)
Status: open

**Errors and contradictions**
- [x] [ERROR] Hub fun fact "can learn over 1,000 words" vs encyclopedia (Alex "over 150 words") and african-grey-parrot-handling-guide (N'kisi's "hundreds" treated as anecdote). Cut or correct the hub line.
- [x] [ERROR] african-grey-parrot-enrichment-guide line 105 cites the sulphur-crested cockatoo study as "training outperformed medication" and links cockatoo-enrichment-guide, which declines to make that claim. Reword.
- [x] [CONTRADICTION] Lifespan (minor): african-grey-parrot-vs-cockatoo-guide "40-60 years" vs african-grey-parrot-cost-guide "mean 45, some to 60, exceptional 70-80". Match the table to the cost guide.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Bathing: bird-feather-dust-air-quality-guide covers misting and bathing for greys (sidebar). Enrichment priority 6 "bathing opportunity" has no frequency or method; add it with an in-body link.

**Gaps: truly missing**
- [ ] [TRULY MISSING] What CITES paperwork a captive-bred grey should come with (the cost guide raises it). Belongs in african-grey-parrot-cost-guide.
- [ ] [TRULY MISSING] Daily food amount (Sep 8-15, verified). Belongs in african-grey-parrot-feeding-guide.
- [ ] [TRULY MISSING] What a baseline avian workup includes (Sep 8-15). Belongs in african-grey-parrot-health-issues-guide.

**Short pages**
- [ ] [SHORT] african-grey-parrot-handling-guide 418, african-grey-parrot-health-issues-guide 383, african-grey-parrot-cost-guide 529, african-grey-parrot-tank-setup-guide 393.

### Cockatoo (cockatoo)
Status: open

**Errors and contradictions**
- [x] [ERROR] Cage cost: hub FAQ and first-week card "$250 to $1,300 or more" vs cockatoo-cost-guide table stainless cage alone "$1,450 to $1,550" vs the paragraph under that table "a large, appropriately sized cage runs $200 to $1,000". One number across all three.
- [x] [ERROR] Diet math: hub and cockatoo-feeding-guide "75 to 80% pellets, with fresh vegetables and fruit covering no more than another 20 to 40%" (can exceed 100%) vs cockatoo-tank-setup-guide "most of the rest is vegetables, seeds under about 10%". Use the version that adds up.

**Low grades and thin pages**
- [ ] [LOW GRADE] cockatoo-cost-guide (B, thin math), for the cage numbers above.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Bathing: bird-feather-dust-air-quality-guide quotes VCA, mist daily or shower (body-linked). Add frequency and method to cockatoo-tank-setup-guide or enrichment guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Daily food amount (Sep 8-15, verified). Belongs in cockatoo-feeding-guide.
- [ ] [TRULY MISSING] Cage and dish cleaning routine (Sep 8-15, verified). Belongs in cockatoo-tank-setup-guide.
- [ ] [TRULY MISSING] PBFD screening cost before purchase (Sep 8-15). Belongs in cockatoo-cost-guide.
- [ ] [TRULY MISSING] Daily out-of-cage time (Sep 8-15). Belongs in cockatoo-enrichment-guide.
- [ ] [TRULY MISSING] Noise, leases and neighbors (Sep 8-15). Belongs in cockatoo-legal-guide.

**Short pages**
- [ ] [SHORT] cockatoo-health-issues-guide 476, cockatoo-cost-guide 512, cockatoo-tank-setup-guide 489, cockatoo-feeding-guide 501.

### Parrotlet (parrotlet)
Status: open

**Errors and contradictions**
- [x] [ERROR] parrotlet-enrichment-guide states "up to six hours a day" (FAQ and body) and "Training sessions outperformed medication and feeding enrichment" (body and FAQ) as fact; cockatoo-enrichment-guide declines both. Reword to match.
- [x] [CONTRADICTION] Bowls: parrotlet-feeding-guide is bowl-based vs parrotlet-enrichment-guide "Stop using a food bowl as the default" (Sep 8-15). Reconcile.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine protocol and screening list (bird-quarantine-guide), photoperiod and egg laying (bird-photoperiod-sleep-guide), pellet conversion (bird-pellet-conversion-guide): all in the sidebar, none linked in body (the set's only in-body link is its overview). Add in-body links where each comes up in the health and feeding guides; the feeding guide currently links the budgie version for conversion.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Daily food amount (Sep 8-15, verified). Belongs in parrotlet-feeding-guide.
- [ ] [TRULY MISSING] Daily out-of-cage figure (Sep 8-15). Belongs in parrotlet-enrichment-guide.

### Cockatiel (cockatiel)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: hub and cockatiel-cost-guide "10 to 15 years" (the cost guide's whole commitment argument) vs cockatiel-vs-cockatoo-guide "15 to 25 year lifespan" and encyclopedia "up to 25 years in captivity, the oldest on record 36".
- [x] [CONTRADICTION] Toy material safety in cockatiel-enrichment-guide vs the rope-fiber warning in cockatiel-health-issues-guide (Sep 8-15, not rechecked).

**Doubted claims**
- [x] [DOUBTED] The 10 to 15 year figure itself: "the kind of number a careless second writer would grab". Source whichever range survives.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Bathing: bird-feather-dust-air-quality-guide names cockatiels as dust birds and recommends misting or bathing (sidebar). Enrichment priority 5 has no frequency or method.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Pairing a cockatiel with a companion bird: species match and introduction (bird-colony-aviary-keeping-guide covers budgies, canaries and finches only). Belongs in cockatiel-handling-guide (also Sep 8-15).
- [ ] [TRULY MISSING] Daily food amount (Sep 8-15, verified). Belongs in cockatiel-feeding-guide.
- [ ] [TRULY MISSING] Out-of-cage hours (Sep 8-15, verified). Belongs in cockatiel-enrichment-guide.
- [ ] [TRULY MISSING] What is safe to clean the cage with (Sep 8-15). Belongs in cockatiel-tank-setup-guide.

**Short pages**
- [ ] [SHORT] cockatiel-handling-guide 422, cockatiel-health-issues-guide 561, cockatiel-cost-guide 547, cockatiel-tank-setup-guide 469.

### Budgie (budgie)
Status: open

**Errors and contradictions**
- [x] [ERROR] budgie-tank-setup-guide has no Sources block (Sep 8-15, confirmed in the file).
- [x] [CONTRADICTION] Solo bird: budgie-enrichment-guide "It can be" vs budgie-tank-setup-guide "Not well" (Sep 8-15, not rechecked).

**Low grades and thin pages**
- [ ] [LOW GRADE] budgie-enrichment-guide (B, thin): generic "forage, chew, fly, socialize" parrot advice, and it restates the cage guide's social needs section. Add budgie-specific material.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine clock vs taming clock: bird-quarantine-guide (body-linked). Add one sentence in budgie-handling-guide saying whether taming prep starts during the 30 to 45 days or after.

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to find and evaluate an avian vet. Belongs in budgie-health-issues-guide (or a shared vet guide).
- [ ] [TRULY MISSING] When the first well-bird exam falls relative to quarantine (bird-quarantine-guide does not say). Belongs in budgie-health-issues-guide.
- [ ] [TRULY MISSING] Daily food amount (Sep 8-15, verified). Belongs in budgie-feeding-guide.
- [ ] [TRULY MISSING] Cleaning routine (Sep 8-15). Belongs in budgie-tank-setup-guide.

**Short pages**
- [ ] [SHORT] budgie-handling-guide 498, budgie-cost-guide 474, budgie-cere-color-guide 374, budgie-enrichment-guide 451.

### Zebra finch (zebra-finch)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Within zebra-finch-tank-setup-guide: "width matters more than height" then the RSPCA paragraph "compromise on width" while keeping height and length generous. Say that the sacrificed dimension is depth.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Adding a third bird: bird-quarantine-guide (quarantine before introducing) and bird-colony-aviary-keeping-guide (feeding stations, sex ratios) (both linked). The enrichment guide has a one-line warning; add finch-specific steps.
- [x] [COVERED+LINKED] Day-one steps: bird-quarantine-guide (sidebar). Add a short day-one list to the hub.
- [x] [COVERED+LINKED] Body weight habit: bird-sexing-weight-body-condition-guide (body-linked). A normal weight in grams for a zebra finch is still missing (Sep 8-15); add it.

### Lovebird (lovebird)
Status: open

**Doubted claims**
- [x] [DOUBTED] lovebird-tank-setup-guide: round cages "can cause disorientation given how this species positions its eyes", asserted twice with no source or explanation.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Why no other species in the cage: lovebird-vs-budgie-guide explains mismatched cage-mate aggression (body-linked). lovebird-handling-guide states the rule twice without the reason; add it.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Daily food amount (Sep 8-15, verified). Belongs in lovebird-feeding-guide.
- [ ] [TRULY MISSING] Cleaning routine (Sep 8-15, verified). Belongs in lovebird-tank-setup-guide.
- [ ] [TRULY MISSING] Introducing a second lovebird beyond "do it slowly" (Sep 8-15). Belongs in lovebird-handling-guide.
- [ ] [TRULY MISSING] Daily time math for a single bird (Sep 8-15). Belongs in lovebird-enrichment-guide.

**Short pages**
- [ ] [SHORT] lovebird-handling-guide 598, lovebird-tank-setup-guide 566, lovebird-enrichment-guide 477.

## Small mammals (12)

Suggested sessions: M1 degu, sugar-glider, guinea-pig, flying-squirrel, rat, hedgehog. M2 chinchilla, hamster, gerbil, rabbit, ferret, mouse.

Site-wide gaps with no shared guide: sexing and introductions or bonding (glider, rat, gerbil, guinea pig, hamster, degu, chinchilla, flying squirrel), cage cleaning schedules, room-proofing for free roam (hamster, glider, degu, gerbil, mouse, hedgehog: Sep 8-15).

### Degu (degu)
Status: open

**Errors and contradictions**
- [x] [ERROR] Cage size, three numbers: hub and degu-tank-setup-guide body "28 by 18 by 28 inches minimum for a pair" vs the same guide's FAQ "24 by 18 by 24 inches" vs degu-cost-guide table "24x24x48 in multi-level cage". Use one minimum on all three.
- [x] [CONTRADICTION] Wheel: hub and degu-tank-setup-guide "11 to 12 inches" vs degu-cost-guide "12-14 in solid exercise wheel".
- [x] [CONTRADICTION] Lifespan: every guide "5 to 8 years" vs degu-vs-chinchilla-guide table "5 to 9".

**Low grades and thin pages**
- [ ] [LOW GRADE] degu-cost-guide (B) and degu-tank-setup-guide (B), both for the conflicts above.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Pick-up method beyond "scoop", bonding and sexing (Sep 8-15). Belongs in degu-handling-guide.
- [ ] [TRULY MISSING] Room-proofing for time out of the cage (Sep 8-15). Belongs in degu-enrichment-guide.

**Short pages**
- [ ] [SHORT] degu-handling-guide 432, degu-health-issues-guide 569.

### Sugar glider (sugar-glider)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: hub and sugar-glider-cost-guide "10 to 15 years in captivity" vs encyclopedia "up to 17.8 years recorded in captivity". Label the record.
- [x] [CONTRADICTION] Pennsylvania: sugar-glider-cost-guide body "effectively illegal" vs the same page's FAQ "requires a special permit". Use one wording (match the legal guide).
- [x] [CONTRADICTION] Solitary housing (framing): hub "a major welfare risk by veterinary consensus" vs sugar-glider-enrichment-guide, citing a study that found solitary animals healthy; health guide flatly says self-mutilation happens in intact solitary males. Give the hub the enrichment guide's nuance.

**Doubted claims**
- [x] [DOUBTED] sugar-glider-feeding-guide oxalate list bundles carrots, beets, pears, lettuce, figs and collards with spinach (Sep 8-15, verified). Check each against a source.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] Holding a room at 75 to 88°F (Sep 8-15): small-mammal-temperature-heat-stress-guide FAQ says gliders need a heat lamp or ceramic emitter to stay above about 75°F (partial answer). Add it to RELATED_ARTICLES['sugar-glider'] and a glider sentence with an in-body link in sugar-glider-tank-setup-guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to introduce two gliders ("introductions need care and time" is the whole instruction). Belongs in sugar-glider-handling-guide.
- [ ] [TRULY MISSING] Sexing and what neutering involves. Belongs in sugar-glider-health-issues-guide.
- [ ] [TRULY MISSING] Escape recovery (Sep 8-15). Belongs in sugar-glider-handling-guide.
- [ ] [TRULY MISSING] Wheel diameter in the body text and a cleaning cadence (Sep 8-15, verified). Belongs in sugar-glider-tank-setup-guide.

**Short pages**
- [ ] [SHORT] sugar-glider-handling-guide 382, sugar-glider-health-issues-guide 446, sugar-glider-cost-guide 578, sugar-glider-tank-setup-guide 456, sugar-glider-feeding-guide 550.

### Guinea pig (guinea-pig)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Hay share: hub and guinea-pig-tank-setup-guide "roughly 80%" vs guinea-pig-feeding-guide "70 to 80%".
- [x] [CONTRADICTION] Alfalfa for adults: guinea-pig-feeding-guide FAQ gives "avoid outright" and "occasional treat" without choosing. Pick a side.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Which antibiotics are dangerous: small-mammal-enterotoxemia-guide (body-linked). guinea-pig-health-issues-guide raises antibiotics for bladder stones; name the drug classes inline.

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to introduce and bond two guinea pigs (also Sep 8-15). Belongs in guinea-pig-handling-guide.
- [ ] [TRULY MISSING] Whether to spay preventively given how common ovarian cysts are. Belongs in guinea-pig-health-issues-guide.
- [ ] [TRULY MISSING] Neuter cost for a mixed pair (Sep 8-15). Belongs in guinea-pig-cost-guide.

**Short pages**
- [ ] [SHORT] guinea-pig-handling-guide 488, guinea-pig-cost-guide 577, guinea-pig-enrichment-guide 505.

### Flying squirrel (flying-squirrel)
Status: open

**Errors and contradictions**
- [x] [ERROR] flying-squirrel-legal-guide: heading "The Four Clean States" opens "Nine states are a clean yes" (confirmed). Rename the heading.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Finding a vet (Sep 8-15): small-mammal-vet-visits-and-travel-guide "Finding an Exotics Vet" (sidebar).

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] Tooth and nail checks (Sep 8-15): small-mammal-grooming-nails-molting-guide covers rodent nail checks (partial; flying squirrels are not named). Add it to RELATED_ARTICLES['flying-squirrel'] and one sentence with an in-body link in flying-squirrel-health-issues-guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Calcium and D3 supplement dose (how much powder, how often) and portions in real units (also Sep 8-15). Belongs in flying-squirrel-feeding-guide.
- [ ] [TRULY MISSING] Introducing a new squirrel to a pair or group, with a quarantine period. Belongs in flying-squirrel-handling-guide.
- [ ] [TRULY MISSING] Escape recovery (Sep 8-15). Belongs in flying-squirrel-handling-guide.
- [ ] [TRULY MISSING] Zoonoses (Sep 8-15). Belongs in flying-squirrel-health-issues-guide.

**Short pages**
- [ ] [SHORT] flying-squirrel-health-issues-guide 558.

### Rat (rat)
Status: open

**Errors and contradictions**
- [x] [ERROR] rat-enrichment-guide uses the British "centrepiece" twice (FAQ and body). Change to "centerpiece".

**Doubted claims**
- [x] [DOUBTED] rat-enrichment-guide leans on an unnamed study (Sep 8-15). Name it.
- [x] [DOUBTED] The "mouse encyclopedia profile" closing aside appears in five of six deep dives, templated by the fourth. Keep one.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Spay or neuter cost and mammary tumor removal cost ("one of the more common surgical costs" with no number). Belongs in rat-cost-guide.
- [ ] [TRULY MISSING] Whether scatter feeding counts toward the twice-daily portion. Belongs in rat-feeding-guide.
- [ ] [TRULY MISSING] Sexing and introducing a new rat to a group. Belongs in rat-handling-guide.

### Hedgehog (hedgehog)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Daily amount, within hedgehog-feeding-guide: recommendation "2 to 3 teaspoons of a protein base plus 1 to 2 teaspoons of chopped produce" vs cited figures "3 to 4 teaspoons a day up to 1 to 3 tablespoons". Pick one amount and explain the spread.

**Low grades and thin pages**
- [ ] [THIN] Encyclopedia graded B (by design). The sulcata comparison appears near verbatim in cost, handling and tank setup; trim.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Finding the right vet (Sep 8-15): small-mammal-vet-visits-and-travel-guide (sidebar).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Whether and how to bathe a hedgehog (small-mammal-grooming-nails-molting-guide does not cover hedgehogs). Belongs in hedgehog-health-issues-guide or handling guide.
- [ ] [TRULY MISSING] Sexing. Belongs in hedgehog-handling-guide.
- [ ] [TRULY MISSING] Spay decision and cost (Sep 8-15). Belongs in hedgehog-health-issues-guide and cost guide.
- [ ] [TRULY MISSING] Salmonella comes up only after self-anointing (Sep 8-15, verified); move a hygiene line earlier in hedgehog-handling-guide.

**Short pages**
- [ ] [SHORT] hedgehog-handling-guide 494, hedgehog-health-issues-guide 589.

### Chinchilla (chinchilla)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Size: hub and encyclopedia "9 to 15 inches; 1 to 2 lbs" vs chinchilla-vs-hamster-guide table "1-1.5 lbs" and its FAQ "14 to 19 inches including its tail". Match the weight and label the tail in the table.

**Low grades and thin pages**
- [ ] [THIN] "Tank Setup" label on a cage guide (template label, site-wide for bird and mammal cage guides).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Healthy weight gain from about 200 g at weaning to adult. Belongs in chinchilla-health-issues-guide or feeding guide.
- [ ] [TRULY MISSING] Introductions (Sep 8-15). Belongs in chinchilla-handling-guide.
- [ ] [TRULY MISSING] Finding and vetting a breeder or rescue (Sep 8-15). Belongs in chinchilla-cost-guide.

**Short pages**
- [ ] [SHORT] chinchilla-handling-guide 587, chinchilla-cost-guide 548, chinchilla-tank-setup-guide 570, chinchilla-enrichment-guide 592.

### Hamster (hamster)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Bedding depth (soft): hamster-tank-setup-guide "6 inches" as the minimum vs its own fun fact and hamster-enrichment-guide study, 15 to 30 inches (40 to 80 cm) improves welfare; the setup page only explains in its last line. State both numbers where 6 inches first appears.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Nail trimming: small-mammal-grooming-nails-molting-guide says hamsters wear nails down and need only an overgrowth check (sidebar). Add that line to the hub or health guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Whether dwarf species (Winter White, Campbell's, Roborovski, Chinese) can be pair or group housed. Belongs in hamster-handling-guide or enrichment guide.
- [ ] [TRULY MISSING] Settling period before first handling (Sep 8-15, verified) and introduction steps. Belongs in hamster-handling-guide.
- [ ] [TRULY MISSING] Sexing (Sep 8-15). Belongs in hamster-handling-guide.
- [ ] [TRULY MISSING] Cage cleaning frequency (Sep 8-15, verified). Belongs in hamster-tank-setup-guide.

**Short pages**
- [ ] [SHORT] hamster-handling-guide 565, hamster-tank-setup-guide 581.

### Gerbil (gerbil)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] What matters most (framing): gerbil-tank-setup-guide "Gerbil care comes down to one detail more than any other: providing deep substrate" vs gerbil-enrichment-guide "roughly half the answer", a tunnel-and-chamber structure is needed (Wiedenmayer 1997). Put the burrow requirement on the setup page.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Nail trimming: small-mammal-grooming-nails-molting-guide (gerbils wear nails down) (sidebar). One line on the hub.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Aftercare after a tail slip or amputation. Belongs in gerbil-health-issues-guide.
- [ ] [TRULY MISSING] Adding a third or fourth gerbil, and declanning signs (also Sep 8-15). Belongs in gerbil-handling-guide.
- [ ] [TRULY MISSING] Settling period (Sep 8-15, verified). Belongs in gerbil-handling-guide.
- [ ] [TRULY MISSING] Sexing and accidental litters (Sep 8-15). Belongs in gerbil-handling-guide or cost guide.

**Short pages**
- [ ] [SHORT] gerbil-handling-guide 459, gerbil-cost-guide 599, gerbil-tank-setup-guide 483, gerbil-feeding-guide 529, gerbil-legal-guide 516.

### Rabbit (rabbit)
Status: open

**Doubted claims**
- [x] [DOUBTED] rabbit-feeding-guide FAQ: "The window the site now uses everywhere" leaks internal editing language. Reword.
- [x] [DOUBTED] rabbit-feeding-guide: "Roughly 70% of rabbits recover" could not be traced to a source (Sep 8-15).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Space, pellet and hay scaled for large and giant breeds (the encyclopedia gives 2.5 to 20+ lbs; every number after is flat). Belongs in rabbit-tank-setup-guide and rabbit-feeding-guide.
- [ ] [TRULY MISSING] RHDV2 vaccine schedule (start age, booster interval) and cost (also Sep 8-15, verified). Belongs in rabbit-health-issues-guide and rabbit-cost-guide.

**Short pages**
- [ ] [SHORT] rabbit-handling-guide 545, rabbit-cost-guide 487, rabbit-tank-setup-guide 512, rabbit-legal-guide 591 (legal, low priority).

### Ferret (ferret)
Status: open

**Low grades and thin pages**
- [ ] [LOW GRADE] ferret-adrenal-disease-guide (B, thin against the health guide): its causes section repeats ferret-health-issues-guide nearly word for word, same Dutch neutering study and fun fact. Differentiate (the symptom table and treatment options are its value) or merge.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Deslorelin implant cost and how long it lasts. Belongs in ferret-cost-guide and ferret-adrenal-disease-guide.
- [ ] [TRULY MISSING] Where to get a ferret responsibly, beyond price by source. Belongs in ferret-cost-guide.

**Short pages**
- [ ] [SHORT] ferret-adrenal-disease-guide 516.

### Mouse (mouse)
Status: open

**Low grades and thin pages**
- [ ] [THIN] "Male mice smell more, don't fully strip the cage" appears near verbatim in mouse-health-issues-guide and mouse-enrichment-guide. Keep one.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Whether one hideout serves both nesting and cover, or two are needed. Belongs in mouse-tank-setup-guide.
- Sidebar wiring for mouse is in Session 0.

## Amphibians (5)

Suggested session: A1 all five.

No shared guide covers amphibian sexing or breeding, and amphibian-quarantine-and-water-guide's hardness section is axolotl only.

### Tiger salamander (tiger-salamander)
Status: open

**Errors and contradictions**
- [x] [ERROR] tiger-salamander-cost-guide: heading "Upfront Setup: Roughly $150 to $400" (also seoTitle, seoDescription, description) while the table rows sum to about $72 to $121 plus "Hides and decor: Varies", with no sentence bridging the gap (confirmed).
- [x] [CONTRADICTION] Handling: tiger-salamander-handling-guide "Direct handling should genuinely be avoided with this species" vs tiger-salamander-vs-axolotl-guide "one of the more handling-tolerant salamander species... some genuinely recognize their keeper" (Sep 8-15 also: gloves only vs damp hands).
- [x] [CONTRADICTION] Temperature: hub and tiger-salamander-tank-setup-guide "60-75°F, never above ~78°F" vs tiger-salamander-vs-axolotl-guide "60-72°F, dies above ~80°F" and "80°F can be fatal".
- [x] [CONTRADICTION] Lifespan: hub and tiger-salamander-cost-guide "12 to 15 years typical, 25 the captive record" vs tiger-salamander-vs-axolotl-guide "10-20 years".

**Low grades and thin pages**
- [x] [LOW GRADE] tiger-salamander-vs-axolotl-guide (C): reconcile all three conflicts above with the species' own guides.
- [x] [THIN] tiger-salamander-health-issues-guide: "not one number anywhere" (Sep 8-15, verified).

**Gaps: truly missing**
- [x] [TRULY MISSING] Enclosure size and animal count before cohabitation is safe, and signs of aggression. Belongs in tiger-salamander-tank-setup-guide.
- [x] [TRULY MISSING] Numbers in the health guide and a description of a normal shed (Sep 8-15). Belongs in tiger-salamander-health-issues-guide.
- [x] [TRULY MISSING] Prey size rule (Sep 8-15, verified). Belongs in tiger-salamander-feeding-guide.
- [x] [TRULY MISSING] What kind of vet to look for (Sep 8-15). Belongs in tiger-salamander-health-issues-guide.

**Short pages**
- [x] [SHORT] tiger-salamander-handling-guide 386, tiger-salamander-health-issues-guide 461, tiger-salamander-cost-guide 558.

### Pacman frog (pacman-frog)
Status: open

**Errors and contradictions**
- [x] [ERROR] Hub budget: "$15 to $100 for the frog, $100 to $225 for the setup, about $225 all in". The two ranges can exceed the "all in" total; pacman-frog-cost-guide says "around $225, frog included". Make the three figures reconcile.

**Doubted claims**
- [x] [DOUBTED] The bite-force-vs-dinosaurs fun fact appears word for word in pacman-frog-cost-guide, pacman-frog-handling-guide and pacman-frog-tank-setup-guide, "a marketing asset getting reused". Keep one.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Dechlorination method (Sep 8-15): amphibian-quarantine-and-water-guide "Dechlorinating the Water You Actually Have" (sidebar). Add a line with an in-body link in pacman-frog-tank-setup-guide.

**Gaps: truly missing**
- [x] [TRULY MISSING] What to do when a healthy adult starts to aestivate (only the under-a-year danger case is covered). Belongs in pacman-frog-health-issues-guide or feeding guide.
- [x] [TRULY MISSING] When the juvenile feeding schedule becomes the adult one (Sep 8-15, verified). Belongs in pacman-frog-feeding-guide.
- [x] [TRULY MISSING] Spot-clean routine (Sep 8-15, verified). Belongs in pacman-frog-tank-setup-guide.

**Short pages**
- [x] [SHORT] pacman-frog-handling-guide 551, pacman-frog-health-issues-guide 575, pacman-frog-cost-guide 473, pacman-frog-tank-setup-guide 487.

### Fire-bellied toad (fire-bellied-toad)
Status: open

**Errors and contradictions**
- [x] [ERROR] fire-bellied-toad-cost-guide: the line items do not add to the page's own stated total; the page admits it. Make the table and total agree.

**Low grades and thin pages**
- [x] [LOW GRADE] fire-bellied-toad-cost-guide (B), for the arithmetic.
- [x] [THIN] fire-bellied-toad-enrichment-guide (B+): honest that no Bombina research exists; borrowed evidence only.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Acclimating a new toad and the 6 to 8 week quarantine: amphibian-quarantine-and-water-guide "Temperature-First Acclimation" (body-linked from the hub only). Repeat the quarantine length with a link in fire-bellied-toad-tank-setup-guide.

**Gaps: covered, not linked**
- [x] [COVERED, NOT LINKED] Filter size for the 10 gallon water section: aquarium-filtration-guide turnover math. Add it to RELATED_ARTICLES['fire-bellied-toad'] and one sentence with the target turnover and an in-body link in fire-bellied-toad-tank-setup-guide.

**Gaps: truly missing**
- [x] [TRULY MISSING] Night temperature (only a 65°F floor). Belongs in fire-bellied-toad-tank-setup-guide.
- [x] [TRULY MISSING] Sexing and breeding. Belongs in fire-bellied-toad-handling-guide (the toxic skin page) or health guide.
- [x] [TRULY MISSING] Water conditioner and dose. Belongs in fire-bellied-toad-tank-setup-guide.

**Short pages**
- [x] [SHORT] fire-bellied-toad-health-issues-guide 495, fire-bellied-toad-cost-guide 546.

### Axolotl (axolotl)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Adult size: axolotl-feeding-guide "12-plus months, over about 7.5 inches" vs hub and encyclopedia adult "9 to 12 inches". Say 7.5 inches is the adult threshold, 9 to 12 the typical range.

**Low grades and thin pages**
- [x] [THIN] The no-gravel warning is written out in full in tank setup, feeding, health and enrichment. Keep it in tank setup.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine before drip acclimation (Sep 8-15, verified): amphibian-quarantine-and-water-guide (sidebar). axolotl-handling-guide goes straight to drip acclimation; add the quarantine step with an in-body link.

**Gaps: truly missing**
- [x] [TRULY MISSING] How to pick a healthy axolotl at the store. Belongs in axolotl-cost-guide.
- [x] [TRULY MISSING] What mosaic and GFP morphs are (the cost guide prices them; the axolotl profile only lists color names). Belongs in axolotl-cost-guide.
- [x] [TRULY MISSING] Chiller sizing against tank volume (cooling-an-aquarium-without-a-chiller-guide gives none). Belongs in axolotl-tank-setup-guide.
- [x] [TRULY MISSING] Vet visit cost (Sep 8-15, verified). Belongs in axolotl-cost-guide.

**Short pages**
- [x] [SHORT] axolotl-handling-guide 462, axolotl-health-issues-guide 477, axolotl-cost-guide 548, axolotl-tank-setup-guide 551, axolotl-enrichment-guide 422, axolotl-feeding-guide 469.

### White's tree frog (whites-tree-frog)
Status: open

**Gaps: truly missing**
- [x] [TRULY MISSING] Sexing and telling morphs apart before purchase. Belongs in whites-tree-frog-cost-guide.
- [x] [TRULY MISSING] Household chemicals and scents (candles, air fresheners, sprays) and amphibian skin, beyond hand washing. Belongs in whites-tree-frog-health-issues-guide.
- [x] [TRULY MISSING] Breeding and eggs if a pair is kept. Belongs in whites-tree-frog-health-issues-guide or handling guide.
- [x] [TRULY MISSING] Normal skin sloughing (Sep 8-15). Belongs in whites-tree-frog-health-issues-guide.
- [x] [TRULY MISSING] Cleaning cadence and water dish change interval (Sep 8-15, verified). Belongs in whites-tree-frog-tank-setup-guide.

**Short pages**
- [x] [SHORT] whites-tree-frog-handling-guide 473, whites-tree-frog-health-issues-guide 505, whites-tree-frog-tank-setup-guide 462, whites-tree-frog-feeding-guide 585.

## Invertebrates (8)

Suggested sessions: I1 millipede, tarantula, jumping-spider, stick-insect. I2 hermit-crab, emperor-scorpion, praying-mantis, hissing-cockroach.

No shared guide covers invertebrate sexing, and invertebrate-molting-guide has no scorpion or mantis numbers.

### Giant millipede (millipede)
Status: open

**Errors and contradictions**
- [x] [ERROR] giant-millipede-feeding-guide is orphaned: not in RELATED_ARTICLES['millipede'], cannot auto-detect (prefix giant-millipede, guide id millipede), linked from nowhere. Add it (Session 0).
- [x] [CONTRADICTION] Isopods: hub "Isopods and springtails are fine as a cleanup crew in a display tank" and the giant-millipede-tank-setup-guide body agree, but the same guide's heading "Skip Isopods as Cleanup Crew" and fun fact "Isopods can harass or weaken a giant millipede" say the opposite. Fix the heading and fun fact.

**Low grades and thin pages**
- [ ] [LOW GRADE] giant-millipede-tank-setup-guide (B), for the isopod conflict.
- [ ] [LOW GRADE] giant-millipede-enrichment-guide (B, filler): the "priority order" recaps the tank setup substrate section.

**Doubted claims**
- [x] [DOUBTED] giant-millipede-enrichment-guide: eggshell as calcium is unvetted (Sep 8-15).

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine: invertebrate-quarantine-cleaning-and-escapes-guide, three months (sidebar).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Sexing. Belongs in giant-millipede-handling-guide.
- [ ] [TRULY MISSING] Setting up and running a breeding tank (the hub mentions one). Belongs in giant-millipede-tank-setup-guide.
- [ ] [TRULY MISSING] Where to buy (Sep 8-15). Belongs in giant-millipede-cost-guide.
- [ ] [TRULY MISSING] How the USDA permit is actually obtained (Sep 8-15). Belongs in giant-millipede-legal-guide.

**Short pages**
- [ ] [SHORT] giant-millipede-health-issues-guide 486, giant-millipede-cost-guide 455.

### Tarantula (tarantula)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Male lifespan: hub and tarantula-cost-guide "4 to 7 years" vs tarantula-vs-emperor-scorpion-guide "3 to 6 years, often less". Align or say the species differ.
- [x] [CONTRADICTION] Headline lifespan: hub fun fact uses a female Mexican red knee at 25 to 30 years, tarantula-cost-guide uses a female Chilean rose hair at 15 to 20, each as "the number to remember". Name the species each time.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Rehousing method: invertebrate-rehousing-guide, catch cup and card (sidebar). The set names it only as a title; add an in-body link where rehousing comes up.
- [x] [COVERED+LINKED] Stuck vs slow molt: invertebrate-molting-guide warning signs (stuck half in and half out for hours with no progress) (body-linked). Add the tarantula line to tarantula-health-issues-guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] A subadult or adult that refuses food with no premolt signs. Belongs in tarantula-feeding-guide.
- [ ] [TRULY MISSING] Sexing a female before buying (Sep 8-15). Belongs in tarantula-cost-guide.
- [ ] [TRULY MISSING] Sling housing (Sep 8-15). Belongs in tarantula-tank-setup-guide.
- [ ] [TRULY MISSING] Choosing a seller (Sep 8-15). Belongs in tarantula-cost-guide.

**Short pages**
- [ ] [SHORT] tarantula-handling-guide 554, tarantula-health-issues-guide 492, tarantula-cost-guide 455, tarantula-tank-setup-guide 531.

### Jumping spider (jumping-spider)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: encyclopedia "Wild Lifespan: 1-2 years" vs hub and jumping-spider-cost-guide "1 to 3 years overall", not flagged as captive. Label both.
- [x] [CONTRADICTION] Vet care (framing): jumping-spider-cost-guide "exotic vets rarely treat spiders" vs hub emergency card and jumping-spider-feeding-guide, a stuck molt "warrants an exotic-animal vet". Reconcile.

**Doubted claims**
- [x] [DOUBTED] jumping-spider-cost-guide cites a for-sale listing page in Sources (Sep 8-15).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Sexing before maturity (price depends on it). Belongs in jumping-spider-cost-guide.
- [ ] [TRULY MISSING] Humidity number for the tropical relatives the text says "need more". Belongs in jumping-spider-tank-setup-guide.
- [ ] [TRULY MISSING] Finding a vet who treats spiders. Belongs in jumping-spider-health-issues-guide.
- [ ] [TRULY MISSING] A humidity number on the health page, whose thesis is humidity (Sep 8-15, verified). Belongs in jumping-spider-health-issues-guide.
- [ ] [TRULY MISSING] What the "damp cotton ball setup" is (Sep 8-15, verified). Belongs in jumping-spider-tank-setup-guide.

**Short pages**
- [ ] [SHORT] jumping-spider-handling-guide 334, jumping-spider-health-issues-guide 393, jumping-spider-cost-guide 394, jumping-spider-tank-setup-guide 481.

### Stick insect (stick-insect)
Status: open

**Errors and contradictions**
- [x] [CONTRADICTION] Lifespan: encyclopedia "Wild Lifespan: 6 months-2 years" sits beside the hub's captive breakdown without being labeled a different measure. Label it.

**Low grades and thin pages**
- [ ] [THIN] Encyclopedia (B, thin but earns it) and stick-insect-health-issues-guide (B, thin; Sep 8-15 "no numbers at all").

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Whether to intervene in a failing molt (Sep 8-15): invertebrate-molting-guide "When a Molt Actually Goes Wrong" covers stick insects (body-linked). Add the stick insect answer to the health guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] How to identify which species you have (most advice branches on species). Belongs in the encyclopedia or stick-insect-cost-guide.
- [ ] [TRULY MISSING] Where to legally source a species native to your state (also Sep 8-15). Belongs in stick-insect-cost-guide.
- [ ] [TRULY MISSING] What a vet visit would look like. Belongs in stick-insect-health-issues-guide.
- [ ] [TRULY MISSING] Mesh aperture for nymphs (Sep 8-15). Belongs in stick-insect-tank-setup-guide.

**Short pages**
- [ ] [SHORT] stick-insect-health-issues-guide 449, stick-insect-cost-guide 540, stick-insect-tank-setup-guide 558.

### Hermit crab (hermit-crab)
Status: open

**Doubted claims**
- [x] [DOUBTED] hermit-crab-health-issues-guide: "before a molt a crab reabsorbs calcium from its old exoskeleton" is uncited. Source it.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] How long to quarantine a new crab and the mite procedure: invertebrate-quarantine-cleaning-and-escapes-guide (sidebar; also Sep 8-15). Add an in-body link from the health or handling guide.
- [x] [COVERED+LINKED] What to do with the shed exoskeleton: invertebrate-molting-guide FAQ says crabs eat it for calcium, leave it (body-linked). Add one line to hermit-crab-health-issues-guide.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Marine salt mix ratio or specific gravity for the saltwater dish (also Sep 8-15, verified). Belongs in hermit-crab-tank-setup-guide.
- [ ] [TRULY MISSING] How to test substrate moisture by feel. Belongs in hermit-crab-tank-setup-guide.
- [ ] [TRULY MISSING] Sexing and choosing a healthy crab (Sep 8-15). Belongs in hermit-crab-handling-guide or cost guide.
- [ ] [TRULY MISSING] Price of a group-sized tank (Sep 8-15). Belongs in hermit-crab-cost-guide.

**Short pages**
- [ ] [SHORT] hermit-crab-handling-guide 488, hermit-crab-health-issues-guide 507, hermit-crab-cost-guide 551.

### Emperor scorpion (emperor-scorpion)
Status: open

**Low grades and thin pages**
- [ ] [THIN] The UV fluorescence fun fact appears four times (hub, encyclopedia, tank setup, enrichment); the Guo et al. 2024 soft-exoskeleton quote three times. Keep one of each.

**Gaps: covered and linked**
- [x] [COVERED+LINKED] Quarantine before joining a group and mite treatment (Sep 8-15): invertebrate-quarantine-cleaning-and-escapes-guide (sidebar). The group-housing sections in emperor-scorpion-tank-setup-guide and enrichment guide should link it in body.
- [x] [COVERED+LINKED] A molt that looks stuck: invertebrate-molting-guide's general rule (do not intervene, warning signs) (body-linked; sidebar in Session 0). The scorpion-specific answer is truly missing (below).

**Gaps: truly missing**
- [ ] [TRULY MISSING] Molt count to adulthood and adult molt frequency (the molting guide has no scorpion data; also Sep 8-15). Belongs in emperor-scorpion-health-issues-guide.
- [ ] [TRULY MISSING] What, if anything, a keeper can try at home for a stuck scorpion molt. Belongs in emperor-scorpion-health-issues-guide.
- [ ] [TRULY MISSING] Sexing, and first aid for a sting or deep pinch (Sep 8-15). Belongs in emperor-scorpion-handling-guide.

**Short pages**
- [ ] [SHORT] emperor-scorpion-handling-guide 481, emperor-scorpion-feeding-guide 462.

### Praying mantis (praying-mantis)
Status: open

**Low grades and thin pages**
- [ ] [LOW GRADE] praying-mantis-handling-guide (B).
- [ ] [THIN] Encyclopedia (B, thin by design). Solo housing, premolt signs and crickets chewing a molting mantis are each repeated in four pages.

**Gaps: truly missing**
- [ ] [TRULY MISSING] Sexing (the set repeats that females outlive males three times). Belongs in praying-mantis-handling-guide.
- [ ] [TRULY MISSING] Number of molts to adulthood (not in invertebrate-molting-guide either). Belongs in praying-mantis-health-issues-guide.
- [ ] [TRULY MISSING] Cold diapause temperature and length for temperate oothecae. Belongs in praying-mantis-ootheca-guide.
- [ ] [TRULY MISSING] Temperature and humidity for African mantises. Belongs in praying-mantis-tank-setup-guide.
- [ ] [TRULY MISSING] Culturing feeders (Sep 8-15, verified). Belongs in praying-mantis-feeding-guide.
- [ ] [TRULY MISSING] How hand-feeding a mismolted mantis differs from normal tong feeding (Sep 8-15); state it in the health guide text (sibling pages, no link).
- [ ] [TRULY MISSING] Recheck praying-mantis-cost-guide table against its text (Sep 8-15, not rechecked).

**Short pages**
- [ ] [SHORT] praying-mantis-handling-guide 530, praying-mantis-cost-guide 594, praying-mantis-ootheca-guide 521.

### Madagascar hissing cockroach (hissing-cockroach)
Status: open

**Low grades and thin pages**
- [ ] [THIN] madagascar-hissing-cockroach-health-issues-guide (NG, thin but earns it for a low-risk species). The molting vulnerability passage is duplicated in the health and enrichment guides; keep one.

**Gaps: truly missing**
- [ ] [TRULY MISSING] How many males make a safe all-male group, and whether adult males fight. Belongs in madagascar-hissing-cockroach-handling-guide.
- [ ] [TRULY MISSING] Which of the two disputed feeding schedules the hub's numbers follow. Belongs on the hub and madagascar-hissing-cockroach-feeding-guide.
- [ ] [TRULY MISSING] Ventilation spec (Sep 8-15). Belongs in madagascar-hissing-cockroach-tank-setup-guide.

**Short pages**
- [ ] [SHORT] madagascar-hissing-cockroach-health-issues-guide 431, madagascar-hissing-cockroach-cost-guide 544, madagascar-hissing-cockroach-tank-setup-guide 509.

## 4. Non-species articles

Suggested sessions: N1 the C and D pages (wild animals). N2 fun facts wiring and the shared guide fixes. N3 Chronicles and overviews.

### Wild animals and other (b22 to b25)
Status: open

- [x] [LOW GRADE] the-incredible-axolotl-nature-s-smiling-salamander (D, thin; 475 words): reads like a truncated care excerpt with the affiliate disclosure before any content. Expand into a real profile (regeneration explained, life cycle, conservation) and move the disclosure down. It is also the page axolotl-cost-guide points to for morphs, which it does not explain.
- [x] [LOW GRADE] hedgehogs-are-lactose-intolerant-despite-what-cartoons-show (C, filler): cut the padded opener and closer, dedupe the fact list that repeats in body and bullets, lead with the dairy myth.
- [x] [CONTRADICTION] Same article: quills "up to 7,000" in the opener vs "between 5,000 and 7,000" later.
- [x] [LOW GRADE] mantis-shrimp-16-color-vision-punch-power (C, filler): drop the exclamation opener; the title leads with "16-color vision" that the body undercuts.
- [x] [DOUBTED] Same article: "mates for life" is asserted and never sourced.
- [x] [LOW GRADE] weirdest-creatures-deep-sea-facts-that-will-blow-your-mind (C, filler): replace hype with named researchers, years and journals per animal.
- [x] [DOUBTED] Same article: "more than 80 percent of Earth's oceans remains largely unexplored", twice, unsourced.
- [x] [LOW GRADE] why-parrots-need-social-interaction-and-what-loneliness-does-to-them (C).
- [x] [DOUBTED] Same article: grey "emotional intelligence comparable to a 5-year-old", Alex "over 100 words meaningfully" (the encyclopedia says over 150), the limbic system claim; all uncited. Source or hedge.
- [x] [THIN] why-axolotls-need-cold-clean-water (B): little original insight and it closes on a test kit sale.
- [x] [THIN] why-rabbits-need-unlimited-hay-and-what-happens-to-their-teeth-without-it (B): generic, unsourced pet-care copy.
- [x] [THIN] sharks-are-older-than-trees-and-9-other-facts-that-will-blow-your-mind (B): items 7 and 9 add nothing beyond a definition; cut or merge.
- [x] [THIN] main-blog-post (B, thin; 390 words): the welcome post gives a new visitor one example link. Add a second topic area.
- [x] [ERROR] Every page in wild-animals-2, wild-animals-4 and wild-animals-6 shows "none" for both sidebar lists. Wire relevant ones (axolotl profile to the axolotl guide, octopus day to the octopus pieces, hedgehog lactose to the hedgehog guide).
- [x] [THIN] crows-are-smarter-than-you-think-and-they-probably-already-know-it and do-dolphins-have-names-what-the-research-shows both explain the contested mirror test in full; keep one and cross-link.
- [x] [THIN] wolverine-facts-the-toughest-animal-pound-for-pound: the "the legend is real, but" frame repeats in nearly every section.

### Fun facts (content/fun-facts, b16)
Status: open

- [x] [ERROR] fun-facts-axolotl: says leucistic axolotls glow from jellyfish GFP; only genetically modified axolotls do. Fix.
- [ ] [ERROR] fun-facts-axolotl, fun-facts-boa-constrictor, fun-facts-cuttlefish, fun-facts-humpback-whale, fun-facts-octopus, fun-facts-rabbit (all B, thin): no care guide link and empty Deep Dive and Health and More lists. Wire them like fun-facts-1.
- [x] [DOUBTED] 10-surprising-argentine-tegu-facts: heat generation "rewrote" the endotherm definition, strong for an aside.
- [ ] [THIN] 10-surprising-bearded-dragon-facts (B). fun-facts-octopus and fun-facts-cuttlefish both retell the three-hearts fact; 10-surprising-argentine-tegu-facts and 10-surprising-emperor-scorpion-facts share the same platypus aside. Vary.
- [ ] [SHORT] 10-surprising-hissing-cockroach-facts 434, 10-surprising-bearded-dragon-facts 439, 10-surprising-fire-bellied-toad-facts 442, 10-surprising-hedgehog-facts 457, 10-surprising-leopard-gecko-facts 462, 10-surprising-emperor-scorpion-facts 480, fun-facts-rabbit 480, 10-surprising-ball-python-facts 481, 10-surprising-betta-fish-facts 490, fun-facts-axolotl 493, 10-surprising-argentine-tegu-facts 499, 10-surprising-tarantula-facts 515, fun-facts-humpback-whale 516, 10-surprising-praying-mantis-facts 535, fun-facts-cuttlefish 535, 10-surprising-cockatoo-facts 544, 10-surprising-hermit-crab-facts 544, fun-facts-octopus 597.

### Shared class guides (b01 to b09, b19 to b21)
Status: open
- [x] [ERROR] long-lived-pet-succession-planning-guide is filed under Dogs and Cats but is entirely about cockatoos and tortoises. Refile its category.

- [ ] [LOW GRADE] why-bearded-dragons-need-uvb-lighting-and-why-skipping-it-is-deadly (B, filler): restates uvb-lighting-complete-guide with no named sources.
- [x] [DOUBTED] Same article: "research consistently shows that UVB-synthesized D3 is more bioavailable... than oral supplements alone", uncited.
- [x] [CONTRADICTION] Bulb replacement: uvb-lighting-complete-guide "12 months for reptiles" vs why-bearded-dragons-need-uvb-lighting-and-why-skipping-it-is-deadly "every 6 to 12 months" (T5 HO), "every 6 months" (T8), CFL "6 months" while calling CFL supplemental only.
- [ ] [LOW GRADE] bioactive-setups-bearded-dragons (B): anecdote and affiliate driven, no cost or shopping list.
- [ ] [THIN] snake-brumation-guide (B+, thin; 466 words): add a normal seasonal slowdown vs illness checklist to match tortoise-brumation-guide. This is what the hognose, milk snake and kingsnake readers needed.
- [x] [DOUBTED] t5-vs-compact-uvb-guide (B+): reads as a buyer's guide; the "how much UVB" table covers three groups only.
- [ ] [TRULY MISSING] reptile-heating-thermostats-guide: no maximum basking surface temperature to verify against.
- [x] [ERROR] reptile-quarantine-guide: the FAQ says lizards are not established to get IBD, but the symptom table lists IBD neurological signs without that caveat. Repeat it in the table.
- [ ] [THIN] outdoor-reptile-housing-guide: drowning and overheating are asserted, not quantified the way raven predation is.
- [ ] [TRULY MISSING] amphibian-quarantine-and-water-guide: the hardness section is axolotl only though the title says amphibians; add a short honest note for fire-bellied toad, tiger salamander, pacman and White's.
- [ ] [TRULY MISSING] aquarium-ich-treatment-guide: say how to place a species not in the table.
- [ ] [THIN] fish-quarantine-and-treatment-guide: VCA's tablespoon per 5 gallons and Merck's g/L salt frameworks sit side by side; separate them visually.
- [x] [DOUBTED] invertebrate-emergency-travel-shipping-guide: hermit crab "breathes through modified gills" is its one uncited biology claim.
- [x] [DOUBTED] invertebrate-quarantine-cleaning-and-escapes-guide: "Releasing any non-native invertebrate or its eggs is prohibited", no source or jurisdiction.
- [x] [DOUBTED] small-mammal-enterotoxemia-guide: subtitle "most vets don't warn you about" is unsupported in the body.
- [x] [CONTRADICTION] small-mammal-temperature-heat-stress-guide: key takeaway danger at 80°F vs the same table's RSPCA guinea pig risk from 75°F. Make the takeaway species-dependent. Also cut the subtitle dig at "round numbers that circulate on forums".
- [ ] [TRULY MISSING] bird-emergency-travel-guide: no heat threshold for a carrier in sun, to match its cold guidance.
- [x] [DOUBTED] bird-sexing-weight-body-condition-guide: "more than half of bird species" not dimorphic rests on one 2023 study; add a second source.
- [ ] [THIN] choosing-a-pet-bird-guide: lifespan table covers cockatiel and cockatoo only.
- [ ] [THIN] parrot-training-guide and rehomed-parrot-guide both make the "behavior does not transfer between handlers" point without linking each other; bird-pellet-conversion-guide and bird-household-hazards-guide likewise on small body mass. Cross-link.
- [ ] [THIN] avian-gastric-yeast-guide: name the case series' sample size and species split in the body.
- [ ] [THIN] Bird guides carry the same 25-item sidebar on every page (b07). Structural; note only.

### Chronicles (b10 to b11)
Status: open

- [ ] [LOW GRADE] "The Day He Decided the Garden Belonged to Him" (chronicles-otis-1, C): Otis squeezes into the garden as a stranger, contradicting Part 13 "The First Afternoon" (arrived at four months "clipped to a leash"). Relabel as a flashback or prequel, or drop it.
- [x] [ERROR] "What the Glass Was For" (chronicles-dex-2): subtitle "one hundred and forty three afternoons" vs closing "four seasons of afternoons".
- [ ] [THIN] The nap, dream, wake structure is used six times in sixteen parts in each series (Dex: Pirate of the Sand Sea, The Dragon Who Flew, The Night He Breathed Fire, The Long Drop, Terrarium 500; Otis: First Flight, High Noon at Clover Gulch, Otis Goes Downtown, The Golden Carrot, The Great Warren Expedition, The Moon Made of Clover). Vary the wake-up beat and space them out. Otis Goes Downtown, The Great Warren Expedition and The Moon Made of Clover were graded B.

### Overviews (b17 to b18)
Status: open

- [ ] [THIN] The Argentine tegu paragraph (dog-like once socialized, 2 to 4 month brumation) appears near verbatim in greenanole-tegu-firebelliedtoad-tigersalamander-overview and iguana-fireskink-quaker-overview (the b17 reader counted three overviews; only these two name the tegu). Vary it.
- [ ] [THIN] rabbit-budgie-overview (254 words) and zebra-finch-parrotlet-overview are two-species entries in a four-species format. Expand or justify.
- [x] [CONTRADICTION] sulcata-hedgehog-lovebird-guppy-overview repeats the sulcata hub's "70 to 100" years (see sulcata section).
- [ ] [THIN] iguana-fireskink-quaker-overview: say up front that the iguana section retells the outgrows-the-setup story from the tegu and monitor pieces.
- [ ] [THIN] savannah-russiantortoise-cockatoo-stickinsect-overview: add that savannah monitor obesity is captivity-driven, not inherited.
- [ ] [SHORT] rabbit-budgie-overview 254, degu-gerbil-overview 348, uromastyx-tokay-africangrey-jumpingspider-overview 371, guinea-pig-cockatiel-betta-tarantula-overview 384, five-beginner-reptiles-overview 396, iguana-fireskink-quaker-overview 397, gargoyle-mourning-african-fat-tail-gecko-overview 418, koi-conure-slider-scorpion-overview 421, veiled-chameleon-ferret-hognose-overview 444, sulcata-hedgehog-lovebird-guppy-overview 460, boa-glider-mantis-tetra-overview 463, four-unusual-pets-overview 464, savannah-russiantortoise-cockatoo-stickinsect-overview 469, ackie-milksnake-mhc-angelfish-overview 495, hamster-skink-whitestreefrog-pacmanfrog-overview 505, zebra-finch-parrotlet-overview 534, leaftailedgecko-kingsnake-boxturtle-oscar-overview 581, cherry-amano-ghost-shrimp-overview 593.

---

## Wave 1 results

Shipped 2026-09-24 in commit 4c5ae0a, pushed to claude/adsense-readiness-review-7u43dx and claude/fix-plan-wave-1-kjrerp. Not merged to main.

**Results**
- Done: Session 0 wiring plus 229 of the 231 in-scope items ([ERROR], [CONTRADICTION], [DOUBTED], [COVERED, NOT LINKED], [COVERED+LINKED]), all ticked above.
- Checks: sync-articles ran, and check-internal-links, check-voice --strict, check-related-articles, check-publish-dates and check-rotation all pass. check-voice shows 0 errors, same as before the wave. Hub rows and hub figures also pass; the sulcata hub is 1 word over the cap, inside the allowed slack.
- Dates: pages with corrected facts carry lastUpdated 2026-09-24. Pages that only gained a link keep their dates.

**Changes made beyond the agents' work**
- Fun-facts files renamed: fun-facts-axolotl, fun-facts-rabbit and fun-facts-boa-constrictor are now named after their slugs (10-surprising-*-facts). The site finds these pages by the slug in their frontmatter, but check-related-articles looks them up by filename, so wiring them under the old names failed the check the build runs.
- Change reverted: an agent refiled long-lived-pet-succession-planning-guide as Birds. Its category was already Pet Care, Birds and Turtles & Tortoises, never Dogs and Cats. The reader's complaint came from the name of the batch it was reviewed in.
- Claim removed: hamster-tank-setup-guide got a line saying hamsters on 10 cm of bedding "slept in hides". No source states that, so it was cut.

**Spot-checks**
- Gerbil burrow claim (Wiedenmayer 1997): checked against the paper's abstract; it holds.
- Pacman frog bite force (Lappin et al. 2017): the paper supports the new figures.
- Parrot training vs foraging wording: the van Zeeland 2009 review supports it. It lists training among many treatments and names foraging as the one with evidence.

**Worth knowing, not fixed (out of scope)**
- One new source is weak: canary-health-issues-guide now cites Pet Assure, a pet discount plan's blog. It backs the red mite night-feeding and anemia lines, which had no source before.
- The cockatoo care package HTML (content/CAREPACKAGE Guides/source/cockatoo.html and cockatoo-src/pages_*.html) still says "six hours a day", "$250 to $1,300" setup and "20 to 40% fresh". The site pages were corrected away from those figures.
- Neon tetra temperature: the two shared fish guides disagree. aquarium-stocking-and-tankmates-guide says neons top out near 77°F; aquarium-ich-treatment-guide says 81°F.
- Platy cycling time: platy-tank-setup-guide says a fishless cycle takes 2 to 4 weeks; aquarium-cycling-guide says 4 to 6.
- Source homepages, which the rules forbid: pacman-frog-cost-guide and pacman-frog-handling-guide (a-z-animals.com, backwaterreptiles.com, thecritterdepot.com), pacman-frog-tank-setup-guide (mramphibian.com), why-bearded-dragons-need-uvb-lighting-and-why-skipping-it-is-deadly (ARAV), why-parrots-need-social-interaction-and-what-loneliness-does-to-them (AAV), hamster-tank-setup-guide (Merck).
- 10-surprising-argentine-tegu-facts: "no reptile had ever been documented" warming itself may be contradicted by pythons that warm their eggs.
- Jackson's chameleon ambient temperature is now 70 to 80°F (LafeberVet). The wave 2 item at line 668 still quotes the old 68 to 75.

## Still open under wave 1 (needs another look)

- [ ] Line 308, amano shrimp water change percent: no source gives an amano-specific percentage (The Shrimp Farm, Aquarium Co-Op and Fish Laboratory checked). Left the hub alone rather than invent one.
- [ ] Line 1677, fun-facts wiring: axolotl, boa and rabbit are wired. Cuttlefish, humpback whale and octopus (and world-octopus-day, the-octopus-has-three-hearts-and-uses-all-of-them) have no guide id to attach to. Needs an owner decision on whether they get one.
- [ ] Weakly verified sources: hamster-tank-setup-guide's Hauzenberger 2006 figures were read from the abstract in search results (ScienceDirect returned 403; the figures match hamster-enrichment-guide). rat-enrichment-guide's Schneidewind and Windschnurer 2026 finding was seen only in a search summary; only the attribution was changed. Confirm both against the papers.
- [ ] Pet Assure source on canary-health-issues-guide: replace with a vet or university page covering red mites if one can be found.
- [ ] Leftover phrasing and comments found in passing: hedgehog-health-issues-guide still has "our guide to" (around line 78); 10-surprising-argentine-tegu-facts has "For care basics, see our full..." (line 26); the milk snake hub comment in snakes.js still says the species has no feeding guide; the degu hub comment in smallMammals.js still describes the old 11 to 12 inch wheel history; sugar-glider-cost-guide Sources has an unlinked World Population Review entry.

---

## Waves 2 and 3 (set up 2026-09-24)

Wave 1 is merged. What is left is writing: [TRULY MISSING] items need web research and new
text, [THIN], [LOW GRADE] and [SHORT] items need existing pages rewritten or expanded. Split
by animal group, so every species is finished inside one wave:

| Wave | Groups | Open items |
|---|---|---|
| 2 | Reptiles, Amphibians, section 4 non-species articles | 208 |
| 3 | Fish and shrimp, Birds, Small mammals, Invertebrates | 205 |

Rules for both waves:
- Per species, in order: [COVERED+LINKED] leftovers, then [TRULY MISSING], then [LOW GRADE] and [THIN], then [SHORT].
- Research means web search with real sources (CLAUDE.md). Aim for 3 to 5 sources per article; never cite from memory; a claim with no source found is left out.
- A [TRULY MISSING] item that a shared guide could hold for many species goes in that shared guide once, with one species sentence and link on each page, not copied per species.
- Keep the split guide structure. No new pillar pages. New articles only if an item cannot fit an existing page, and then they get a rotation number and RELATED_ARTICLES wiring.
- Dogs and cats are out of scope. Care package updates (section 5) are out of scope.
- Stamp lastUpdated with the Eastern date on every page touched.
- No commits until the whole wave is done. Then run sync-articles, check-internal-links, check-voice --strict, check-related-articles, check-publish-dates, check-rotation, check-seo-tags, check-hub-rows, check-hub-figures, and make ONE commit and ONE push to the working branch. Merge to main only when the owner says so.

Wave 2 prompt (paste into a fresh session on branch claude/adsense-readiness-review-7u43dx):

```
Wave 2 of FIX_PLAN.md. Read CLAUDE.md, docs/RULES.md and FIX_PLAN.md
("Waves 2 and 3" section first). Scope: every open item in the Reptiles,
Amphibians and section 4 groups. Follow the wave rules in that section.
Use Opus for yourself and for research and writing agents; run one agent
per group of 4 to 6 species in parallel, no two agents editing the same
file. Tick items in FIX_PLAN.md as they are done. Spot-check each agent's
diff and verify new citations load. One commit and one push at the end;
do not merge to main. Summary only at the end.
```

Wave 3 prompt: the same, with scope "Fish and shrimp, Birds, Small
mammals and Invertebrates groups".

---

## 5. Care package updates (noted 2026-09-24, not edited)

The printable packages still carry figures the site has since corrected. Fix
these at the next package rebuild. Edit `content/CAREPACKAGE Guides/source/<slug>.html`,
or for axolotl, budgie, cockatiel, cockatoo, goldfish, guinea-pig, lovebird and
russian-tortoise the `<slug>-src/pages_*.html` fragments (build.py regenerates
the HTML), then re-render the PDF.

**Package wrong, site right (change the package):**
- [ ] Leopard gecko p17: "around half of captive leopard geckos may carry it" and "most commonly diagnosed reptile". Replace with the single Thai farm 51% finding.
- [ ] Tarantula (profile, pp. 11, 27): male lifespan "4 to 7 years". Site: about 5 for a rose hair, 10 at the outside.
- [ ] Cockatoo: "75 to 80% pellets... no more than 20 to 40%" fresh (four places). Site: remaining 20 to 25%, seeds under about 10%.
- [ ] Cockatoo: bathing "two or three times a week". Site: offer a bath daily (VCA).
- [ ] Cockatoo: cage "$700" to "$1,550". Site: $820 to $880 powder-coated, $1,450 to $1,550 stainless.
- [ ] Lovebird: "75 to 80% pellets, 20 to 40% fresh". Site: remaining 20 to 25%.
- [ ] Cockatiel: bathing dish "two or three times a week". Site: a bath offered daily.
- [ ] Crested gecko p14: "weigh weekly". Site settled on at least monthly, more often while off food.
- [ ] Russian tortoise: soak "at least 20 minutes, two to three times a week". Site: adults weekly 10 to 20 minutes, juveniles 10 to 15 minutes twice a week, no deeper than the elbows.
- [ ] Russian tortoise: "that is what causes pyramiding". Site: one suspected driver, not completely understood.
- [ ] Guinea pig: "hay is 70 to 80% of the diet". Site: roughly 80%.
- [ ] Ball python p12: list refusal causes with temperature and humidity first, then shed, stress, breeding season.
- [ ] Goldfish p8: cycle by dosing ammonia to about 3 ppm, done when a full dose reads zero within 24 hours.
- [ ] Betta p10: feeding "once or twice a day" can add "or up to three smaller meals 6 to 8 hours apart" (optional).

**Package better than the site (fix the site, not the package):**
- [x] Axolotl pH: package "7.4 to 7.6" (LafeberVet) vs hub and tank setup guide "7.4 to 7.8".
- [x] Hamster torpor: package "below 41°F (5°C)" (Merck, LafeberVet) vs hub "under 60°F risks torpor".

**Package and site disagree, no source settles it yet (research before changing either):**
- [ ] Rabbit lifespan: package 7 to 10 indoors, outdoor about 2; site 8 to 12, some to 14, outdoor 3 to 5.
- [ ] Cockatoo lifespan: package 30 to 45 (veterinary), Moluccan to 70; site hub 40 to 60 typical, Moluccan to 92.
- [ ] Bird quarantine (cockatiel, cockatoo): package 30 days, 45 to 60 with an existing bird; hub 30 to 45, multi-bird nearer 90.
- [ ] Betta ich: package about 82°F with copper or formalin; hub 86°F or aquarium salt.
- [ ] Goldfish filtration: package 10x tank volume per hour minimum; hub at least 4x, ideally 5 to 10.
- [ ] Bearded dragon costs: package equipment $420 to $860, exam $75 to $200, monthly $60 to $130; cost guide $400 to $800, $120 to $245, $50 to $108.
- [ ] Leopard gecko costs: package setup $175 to $495, monthly $32 to $91; hub $250 to $400, $20 to $50.
- [ ] Cockatiel yearly cost: package $300 to $565; hub $200 to $350.
- [ ] Russian tortoise brumation: package 10 to 14 weeks at most; hub 2 to 4 months.

No differences: budgie.

## 6. Site items found during the package check

- [x] Cockatiel encyclopedia (`src/lib/data/encyclopedia/birds.js` line 53) still says "typically 10 to 15 years in captivity"; every other page now says 12 to 15 (LafeberVet). Change to 12 to 15.
- [x] UVB replacement interval: owner's call is **6 to 12 months** (Tree of Life Exotic Pet Medical Center: "should be replaced every 6-12 months depending on the model, even if they are still producing visible light"). Wave 1 changed `uvb-lighting-complete-guide.mdx` (FAQ line 47, checklist line 159) to "12 months for a quality T5 HO". Bring it back to 6 to 12 months citing Tree of Life, matching the bearded dragon hub, tank setup guide, UVB article and package.
