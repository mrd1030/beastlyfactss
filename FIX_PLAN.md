# Fix Plan by Species

Care package fixes (the 20 printable books, their store pages and their gear) live in FIX_PACKAGES.md, not here.

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

## Found during the 2026-10-03 pricing, UVB and gear pass (open)
- [ ] Public image credits page (from the 2026-10-04 photo rule; owner's plan for 2026-10-05: first go through the 11 Commons photos in IMAGE_CREDITS.md and decide keep or replace, then build the page, then the 11 fact photos in NEEDS_IMAGE.md): CC BY and CC BY-SA photos need visible credit where they are shown. IMAGE_CREDITS.md lists 11 Wikimedia Commons photos (author, license, source) but nothing on the site shows it. Add an /image-credits/ page listing every row (author, license with a link, source, "cropped" where true), link it from the footer, and keep it in step with IMAGE_CREDITS.md.

Checked against main on 2026-10-04. Each line: species, file, the problem, the fix or the decision needed.

- [ ] Supplements, non-package reptiles. The package reptiles now link the owner's own Zoo Med Repti Calcium with D3 (B094DBWD8C) and ReptiVite without D3 (B00167S5GC). These still link Miner-All Indoor (calcium with D3, B01IQMEZP4) or Rep-Cal Herptivite (B07MMW2MV9): blue-tongue-skink-cost-guide (supplement row and relatedProducts) and blue-tongue-skink-health-issues-guide (relatedProducts), Miner-All; garter-snake-cost-guide ("Thiamine (B1) and calcium supplements" row), Herptivite; the uromastyx ("Calcium and multivitamin supplements"), box turtle ("Calcium with D3") and red-footed tortoise ("Calcium and D3 supplement") hub buy lists, Miner-All through its covers; the mourning gecko hub ("A multivitamin for the weekly rotation"), Herptivite. Also found: jacksons-chameleon-feeding-guide lists both in relatedProducts while its text calls for plain calcium, and savannah-monitor-feeding-guide lists Miner-All Indoor while its text says plain calcium under a working UVB bulb and D3 only without one. Decision for the owner: switch or keep, species by species, after checking each species' care text for its D3 and phosphorus rules (ReptiVite contains dicalcium phosphate). Done 2026-10-04 for the Jackson's chameleon feeding guide only (its product card now shows the D3-free Zoo Med calcium its text calls for). The savannah monitor text allows calcium with D3 when there is no UVB, so its card stays; the rest wait on the owner.
- [ ] Cages with no fitting catalog product (links removed, the buy list lines stand unlinked): conure hub "24x24x30 inch cage or larger", parrotlet hub "Cage of at least 18x18x24 inches" with 1/4 in bars, zebra finch hub "Long flight cage, at least 24 by 14 by 18 inches" with bars no wider than 3/8 in, flying squirrel hub "A tall aviary-style cage, 24x24x36 inches". Cockatoo: a 3/4 in bar cage at least 36x24x48 for Goffin's and galah cockatoos. Fix: the owner supplies a product for each, or the lines stay unlinked.
- [ ] BN-LINK 24-hour timer (B0D6VSDFH4), cost guide rows: $5 to $15 in ball-python, betta-fish, hognose-snake and whites-tree-frog cost guides; $10 to $20 in leopard-gecko and russian-tortoise; $5 to $20 in african-fat-tail. Fix: pick one range and use it site-wide.
- [ ] Cockatoo hub buy list "Stainless bolt-on dishes and swing-out feeders" links only the Prevue 30 oz bolt-on coop cup (coop-cup-prevue-30oz-bolt-on), the dish half. Decision for the owner: split the line into dishes and swing-out feeders, or leave it.
- [ ] Emperor scorpion (emperor-scorpion-cost-guide, emperor-scorpion-tank-setup-guide, emperor-scorpion-health-issues-guide) and pacman frog (pacman-frog-tank-setup-guide) link the Reptile Growth 10 gallon terrarium (B09MQBB6CP), which has a removable mesh top. Neither species' care text rules out mesh today. Check: whether a mesh top holds the humidity each species needs; if not, note it in the text or swap the product.

---

## Source overlap sweep (after the consistency sweep, owner-approved 2026-10-05)

Every article's Sources block, site wide: combine several pages from one site into one entry naming the pages; drop a source whose every claim another listed source already covers; keep 3 to 5. About 308 articles list two or more pages from the same site (some are legal guides citing separate government documents, which stay separate). Common knowledge, such as prey that is too large causing impaction, can stand unsourced (owner, 2026-10-05).

Claims found with no listed source, to source or soften during the sweep:
- [ ] chinchilla pages: the 50 to 68F comfort band comes from the setup guide; Merck (65 to 80F) and PetMD (55 to 70F), both listed on the comparison page, run warmer. Settle one band with sources.

---

## 3. Species sections by group

## Birds (10)

Suggested sessions: B1 conure, canary, quaker-parakeet, african-grey, cockatoo. B2 parrotlet, cockatiel, budgie, zebra-finch, lovebird.

Site-wide bird gaps with no shared guide: daily food amount in real units (budgie, cockatiel, lovebird, grey, cockatoo, parrotlet), daily out-of-cage time, cage and dish cleaning routine, finding an avian vet. The "wild parrots forage up to six hours a day" figure and the "training outperformed medication" cockatoo study are stated as fact on several pages while cockatoo-enrichment-guide says neither traces to a readable source; each page is listed below.

## Invertebrates (8)

Suggested sessions: I1 millipede, tarantula, jumping-spider, stick-insect. I2 hermit-crab, emperor-scorpion, praying-mantis, hissing-cockroach.

No shared guide covers invertebrate sexing, and invertebrate-molting-guide has no scorpion or mantis numbers.

## 4. Non-species articles

Suggested sessions: N1 the C and D pages (wild animals). N2 fun facts wiring and the shared guide fixes. N3 Chronicles and overviews.

### Fun facts (content/fun-facts, b16)
Status: open

- [ ] [ERROR] fun-facts-axolotl, fun-facts-boa-constrictor, fun-facts-cuttlefish, fun-facts-humpback-whale, fun-facts-octopus, fun-facts-rabbit (all B, thin): no care guide link and empty Deep Dive and Health and More lists. Wire them like fun-facts-1.

## Wave 1 results

The results record moved to the archive 2026-10-04. Open notes only.

**Worth knowing, not fixed (out of scope)**
- Neon tetra temperature: the two shared fish guides disagree. aquarium-stocking-and-tankmates-guide says neons top out near 77°F; aquarium-ich-treatment-guide says 81°F.

## Wave 3a results

The results record moved to the archive 2026-10-04. Open notes only.

**Worth knowing, not fixed (out of scope)**
- Pages now over five sources, each with an MDX comment above Sources: spotting-a-sick-fish-guide (10), tarantula-cost-guide (9), ghost-shrimp-health-issues-guide (9), swordtail-tank-setup-guide (8), aquarium-stocking-and-tankmates-guide, discus-tank-setup-guide, platy-handling-guide and bristlenose-pleco-tank-setup-guide (7), cherry-shrimp-tank-setup-guide, emperor-scorpion-health-issues-guide and praying-mantis-health-issues-guide (6). docs/RULES.md lists only two overruns.
- Weaker sources added where nothing better was found: Wikipedia (Ancistrus, Pterygoplichthys), a WordPress blog and a Google Sites database (millipede), exopetguides.com (says it uses AI drafting; jumping spider), retailer blogs (Bulk Reef Supply, Aquasabi, gensou.sg).
- Retailer product pages still cited in amano-shrimp-cost-guide (aquaticarts) and bristlenose-pleco-cost-guide (aqua-imports, angelsplus).
- discus-tank-setup-guide uses "X, not Y" 7 times (limit 2).

## Still open under wave 1 (needs another look)

- [ ] Line 1677, fun-facts wiring: axolotl, boa and rabbit are wired. Cuttlefish, humpback whale and octopus (and world-octopus-day, the-octopus-has-three-hearts-and-uses-all-of-them) have no guide id to attach to. Needs an owner decision on whether they get one.

---

## Found in the legal additions (2026-09-25, not yet fixed)

- [ ] quaker-parakeet-legal-guide "Moving to a Ban State": Nebraska (166 NAC 8, rules.nebraska.gov failed TLS) and Colorado's non-grandfather exceptions were not read first-hand; confirm "no private route" for both.
- [ ] giant-millipede-legal-guide: no government page states whether the PPQ 526 carries a fee; the section says nothing about one. Add it if APHIS publishes it.

