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

## 3. Species sections by group

## Birds (10)

Suggested sessions: B1 conure, canary, quaker-parakeet, african-grey, cockatoo. B2 parrotlet, cockatiel, budgie, zebra-finch, lovebird.

Site-wide bird gaps with no shared guide: daily food amount in real units (budgie, cockatiel, lovebird, grey, cockatoo, parrotlet), daily out-of-cage time, cage and dish cleaning routine, finding an avian vet. The "wild parrots forage up to six hours a day" figure and the "training outperformed medication" cockatoo study are stated as fact on several pages while cockatoo-enrichment-guide says neither traces to a readable source; each page is listed below.

### Quaker parakeet (quaker-parakeet)
Status: open (leftovers marked OPEN or PARTIAL below)

**Gaps: truly missing**
- [ ] [TRULY MISSING] What to do when moving to a ban state (Sep 8-15). Belongs in quaker-parakeet-legal-guide. OPEN 2026-09-25: legal file, out of scope for wave 3b.

### Cockatoo (cockatoo)
Status: open (leftovers marked OPEN or PARTIAL below)

**Gaps: truly missing**
- [ ] [TRULY MISSING] Noise, leases and neighbors (Sep 8-15). Belongs in cockatoo-legal-guide. OPEN 2026-09-25: legal file, out of scope for wave 3b.

## Invertebrates (8)

Suggested sessions: I1 millipede, tarantula, jumping-spider, stick-insect. I2 hermit-crab, emperor-scorpion, praying-mantis, hissing-cockroach.

No shared guide covers invertebrate sexing, and invertebrate-molting-guide has no scorpion or mantis numbers.

### Giant millipede (millipede)
Status: open (leftovers marked OPEN or PARTIAL below)

**Gaps: truly missing**
- [ ] [TRULY MISSING] How the USDA permit is actually obtained (Sep 8-15). Belongs in giant-millipede-legal-guide. OPEN 2026-09-25: legal files are out of scope for wave 3.

## 4. Non-species articles

Suggested sessions: N1 the C and D pages (wild animals). N2 fun facts wiring and the shared guide fixes. N3 Chronicles and overviews.

### Fun facts (content/fun-facts, b16)
Status: open

- [ ] [ERROR] fun-facts-axolotl, fun-facts-boa-constrictor, fun-facts-cuttlefish, fun-facts-humpback-whale, fun-facts-octopus, fun-facts-rabbit (all B, thin): no care guide link and empty Deep Dive and Health and More lists. Wire them like fun-facts-1.

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

## Wave 2 results

Shipped 2026-09-25 on claude/fix-plan-wave-2-reptiles-81w4hm and merged to main as c9c485b4.

- Done: every open item in Reptiles, Amphibians and section 4, ticked above, except two left open: the leopard gecko screen-top gap (no source gives a number) and the fun-facts wiring [ERROR] (needs an owner decision on guide ids, same as the wave 1 leftover).
- New shared sections: "Enclosure cleaning schedule" in reptile-salmonella-hygiene-guide and "Choosing a healthy reptile and a reptile vet" in reptile-quarantine-guide. Species cleaning, breeder and vet items link to them.
- Hub and encyclopedia edits applied from agent requests: kingsnake encyclopedia overview and history; tegu cost routing line; tiger salamander cohabitation row; Jackson's chameleon sexing row repointed to the health guide; mourning gecko buy list and dystocia line; leaf-tailed gecko shed-check row removed; garter snake thiaminase FAQ swapped for feeding frequency; veiled chameleon water-dish FAQ swapped for egg-binding; leopard gecko lifespan row and encyclopedia set to 10 to 20 years, some reaching 25 to 30.
- Checks: sync-articles, check-internal-links, check-voice --strict (0 errors), check-related-articles, check-publish-dates, check-rotation, check-seo-tags, check-hub-rows, check-hub-figures all pass.
- Partly done, noted on their lines: blue-tongued skink weights by life stage, Russian tortoise female ramming, savannah monitor DIY build cost, outdoor housing drowning numbers, seven fun facts pages still under 575 words.

## Wave 3a results

Done 2026-09-25 on claude/adsense-readiness-review-7u43dx in one commit. Not merged to main.

- Done: every open item in Fish and shrimp and Invertebrates, ticked above, except five left open or partial and noted on their lines: ghost shrimp Palaemon molt GH (no source), goldfish encyclopedia history (nothing to add), amano water change percent (no source), millipede USDA permit (legal file), praying mantis handling length (about 560 words, no more sourced material).
- New shared sections: "Getting New Fish From the Bag Into the Tank" in aquarium-stocking-and-tankmates-guide; "How to Find a Vet Who Treats Fish" and "When Euthanasia Is the Kindest Option" in spotting-a-sick-fish-guide. Species acclimation, vet and euthanasia items link to them.
- Hub and encyclopedia edits applied from agent requests: corydoras handling route line and algae row source; tarantula humidity and feeding rows no longer narrate source disagreement; neon tetra hub FAQ swapped tank size for sexing; goldfish feeding row settled at one meal a day; cardinal tetra and stick insect hub FAQs re-copied from their deep dives; emperor scorpion fun fact and molting row; hissing cockroach feeding row; koi, stick insect, emperor scorpion and praying mantis encyclopedia overviews.
- Checks: sync-articles, check-internal-links, check-voice --strict (0 errors), check-related-articles, check-publish-dates, check-rotation, check-seo-tags, check-hub-rows, check-hub-figures all pass.

**Worth knowing, not fixed (out of scope)**
- Pages now over five sources, each with an MDX comment above Sources: spotting-a-sick-fish-guide (10), tarantula-cost-guide (9), ghost-shrimp-health-issues-guide (9), swordtail-tank-setup-guide (8), aquarium-stocking-and-tankmates-guide, discus-tank-setup-guide, platy-handling-guide and bristlenose-pleco-tank-setup-guide (7), cherry-shrimp-tank-setup-guide, emperor-scorpion-health-issues-guide and praying-mantis-health-issues-guide (6). docs/RULES.md lists only two overruns.
- Weaker sources added where nothing better was found: Wikipedia (Ancistrus, Pterygoplichthys), a WordPress blog and a Google Sites database (millipede), exopetguides.com (says it uses AI drafting; jumping spider), retailer blogs (Bulk Reef Supply, Aquasabi, gensou.sg).
- Retailer product pages still cited in amano-shrimp-cost-guide (aquaticarts) and bristlenose-pleco-cost-guide (aqua-imports, angelsplus).
- Neon tetra health and tank setup say quarantine 2 to 4 weeks; fish-quarantine-and-treatment-guide says 30 to 60 days.
- Hermit crab tank size: the site says 10 gallons for 2 to 3 small crabs; Crab Street Journal says 10 gallons per crab.
- Millipede lifespan: hub says up to 10 years in captivity; Tree of Life Exotics says 5 to 7.
- discus-tank-setup-guide uses "X, not Y" 7 times (limit 2).

## Still open under wave 1 (needs another look)

- [ ] Line 1677, fun-facts wiring: axolotl, boa and rabbit are wired. Cuttlefish, humpback whale and octopus (and world-octopus-day, the-octopus-has-three-hearts-and-uses-all-of-them) have no guide id to attach to. Needs an owner decision on whether they get one.

---

## Waves 2 and 3 (set up 2026-09-24)

Wave 1 is merged. What is left is writing: [TRULY MISSING] items need web research and new
text, [THIN], [LOW GRADE] and [SHORT] items need existing pages rewritten or expanded. Split
by animal group, so every species is finished inside one wave:

| Wave | Groups | Open items |
|---|---|---|
| 2 | Reptiles, Amphibians, section 4 non-species articles | done |
| 3a | Fish and shrimp, Invertebrates | done |
| 3b | Birds, Small mammals | done (17 lines left open, partial or newly found, each marked) |

Wave 3 runs as two sessions to hold down credit use. 3a and 3b never run at
the same time. 3a keeps fish and shrimp together with invertebrates because
the shrimp hubs and encyclopedia entries live in the invertebrates.js files.

Rules for both waves:
- Per species, in order: [COVERED+LINKED] leftovers, then [TRULY MISSING], then [LOW GRADE] and [THIN], then [SHORT].
- Research means web search with real sources (CLAUDE.md). Aim for 3 to 5 sources per article; never cite from memory; a claim with no source found is left out.
- A [TRULY MISSING] item that a shared guide could hold for many species goes in that shared guide once, with one species sentence and link on each page, not copied per species.
- Keep the split guide structure. No new pillar pages. New articles only if an item cannot fit an existing page, and then they get a rotation number and RELATED_ARTICLES wiring.
- Dogs and cats are out of scope. Care package updates (section 5) are out of scope.
- Stamp lastUpdated with the Eastern date on every page touched.
- Never edit legal files (content/guides/*-legal-guide.mdx, src/lib/data/legalStatus.json, src/lib/data/stateNotes.js, the exotic-pet-laws pages), care packages, or anything about dogs and cats.
- Do not name outside sites in the prose unless the sentence needs it; the Sources block carries attribution.
- Setup guides: follow the naming rule in docs/RULES.md (Tank, Pond, Cage, Housing or Enclosure in visible text; the slug never changes).
- No commits until the whole wave (or part) is done. Then run sync-articles, check-internal-links, check-voice --strict, check-related-articles, check-publish-dates, check-rotation, check-seo-tags, check-hub-rows, check-hub-figures, and make ONE commit and ONE push to the working branch. Merge to main only when the owner says so.

Wave 3 prompts. Paste 3a into a fresh session. Start 3b only after 3a has
pushed.

```
Wave 3a of FIX_PLAN.md. Work on branch claude/adsense-readiness-review-7u43dx
(git fetch, check it out, pull; do not create or push any other branch).
Read CLAUDE.md, docs/RULES.md and FIX_PLAN.md ("Waves 2 and 3" section
first). Scope: every open item in the Fish and shrimp and Invertebrates
groups, nothing else. Follow the wave rules in that section.

Credit limits, hard: never more than 3 agents running at once. Each agent
takes 4 to 6 species and works them one after another. Start the next
agent only when one finishes. No two agents edit the same file; hub and
encyclopedia edits come back to you as requests and you apply them.

Never touch legal files, care packages, or dog and cat pages. Use Opus for
yourself and the agents. Tick items in FIX_PLAN.md as they are done.
Spot-check each agent's diff and verify new citations load.

Commits: NONE until every 3a item is done or marked open. Then run the
checks listed in the wave rules, make exactly ONE commit and ONE push to
claude/adsense-readiness-review-7u43dx. No checkpoint commits, no second
push. Do not merge to main. Summary only at the end.
```

```
Wave 3b of FIX_PLAN.md. Work on branch claude/adsense-readiness-review-7u43dx
(git fetch, check it out, pull so 3a's commit is in; do not create or
push any other branch). Read CLAUDE.md, docs/RULES.md and FIX_PLAN.md
("Waves 2 and 3" section first). Scope: every open item in the Birds and
Small mammals groups, nothing else. Follow the wave rules in that section.

Credit limits, hard: never more than 3 agents running at once. Each agent
takes 4 to 6 species and works them one after another. Start the next
agent only when one finishes. No two agents edit the same file; hub and
encyclopedia edits come back to you as requests and you apply them.

Never touch legal files, care packages, or dog and cat pages. Use Opus for
yourself and the agents. Tick items in FIX_PLAN.md as they are done.
Spot-check each agent's diff and verify new citations load.

Commits: NONE until every 3b item is done or marked open. Then run the
checks listed in the wave rules, make exactly ONE commit and ONE push to
claude/adsense-readiness-review-7u43dx. No checkpoint commits, no second
push. Do not merge to main. Summary only at the end.
```

---

## Reader review fixes (set up 2026-09-25)

Source: READER_REVIEWS_2026-09-25.md, section 6 (40 items). Every conflict
there was checked against the site files; section 2 has the file and line
for each. Two sessions to hold down credits: R1 runs items 1 to 26
(confirmed conflicts), R2 runs items 27 to 40 (gaps and trust flags). R2
starts only after R1 has pushed.

Prompt R1 (paste into a fresh session):

```
Reader review fixes, part R1. Work on branch
claude/adsense-readiness-review-7u43dx (git fetch, check it out, pull; do
not create or push any other branch). Read CLAUDE.md, docs/RULES.md,
the "Reader review fixes" section of FIX_PLAN.md, and
READER_REVIEWS_2026-09-25.md sections 2 and 6. Scope: section 6 items 1
to 26, nothing else.

For each item, confirm the conflict still exists, then fix it so every
place that states the fact agrees: body, frontmatter FAQs,
seoDescription, description, excerpt, KeyTakeaway, hub rows and hub FAQs
(hub FAQs stay word for word with the guide FAQ), encyclopedia,
overviews and vs guides. Where an item says "source check", or where the
two sides need a source to decide, research with real web sources (never
from memory; never an AI-drafted site such as ExoPetGuides or
SpectrumCare; prefer vets, universities, government, peer-reviewed).
Item 1 (UVB zones) is unverified: load Baines et al. 2016 and change the
table only if the paper shows it is wrong. Sources stay at 5 per
article, 6 only when each backs its own claim, with a one-line comment
saying why. No outside site or brand named in prose unless the sentence
needs it. No links to the same species' sibling guides. Stamp
lastUpdated with the Eastern date on every page touched.

Credit limits, hard: never more than 3 agents running at once, each
taking several items in sequence; no two agents edit the same file. Use
Opus. Never touch legal files, care packages, or dog and cat pages.

Tick each item in READER_REVIEWS_2026-09-25.md section 6 ("[done]" or
"[open: reason]"). At the end run sync-articles, check-internal-links,
check-voice --strict, check-related-articles, check-publish-dates,
check-rotation, check-seo-tags, check-hub-rows, check-hub-figures and
check-hub-faqs. All must pass. Then exactly ONE commit and ONE push to
claude/adsense-readiness-review-7u43dx. No checkpoint commits. Do not
merge to main. Summary only at the end.
```

Prompt R2 (paste into a fresh session after R1 has pushed):

```
Reader review fixes, part R2. Work on branch
claude/adsense-readiness-review-7u43dx (git fetch, check it out, pull so
R1's commit is in; do not create or push any other branch). Read
CLAUDE.md, docs/RULES.md, the "Reader review fixes" section of
FIX_PLAN.md, and READER_REVIEWS_2026-09-25.md sections 3, 4 and 6.
Scope: section 6 items 27 to 40, plus the product list at the end.

Gap items (27 to 36): for each, confirm the gap still exists on the
species' own pages and in its Health and More guides, then add short,
sourced text where the reader asked the question. A gap already
answered by a shared guide gets one species sentence with an in-body
link to that guide, not a copy of it. Buy list additions (item 27) use
only products already in src/lib/data/affiliateProducts.js; grep for
exact existing links, never invent or source a new product yourself. If
no existing product fits, add the item to the buy list as plain text
and log it in NEEDS_PRODUCT.md (below).

Trust items (37 to 40): move brand names and outside site names out of
advice prose (the Sources block carries attribution). This includes
older pages that say "according to VCA", "according to Merck" or name
another site in the body or FAQs, such as bird-chronic-egg-laying-guide
and avian-polyomavirus-guide; grep content/guides for "according to"
and fix every hit that names an organization or site, unless the
sentence genuinely needs the name. Source, soften or cut the flat claims
readers doubted. Carry each caveat to every page that states the
claim. Fix the green anole arithmetic.

Research with real web sources (never from memory; never an AI-drafted
site such as ExoPetGuides or SpectrumCare; prefer vets, universities,
government, peer-reviewed). A claim with no source found is left out.
For each change, update every place that states the fact: body,
frontmatter FAQs, seoDescription, description, excerpt, KeyTakeaway,
hub rows and hub FAQs (hub FAQs stay word for word with the guide FAQ),
encyclopedia, overviews and vs guides. Sources stay at 5 per article,
6 only when each backs its own claim, with a one-line comment saying
why. No links to the same species' sibling guides, no "see our" or
"check out" phrasing, no sentence that exists only to carry a link.
Stamp lastUpdated with the Eastern date on every page touched.

Product list, last step, after all fixes: create NEEDS_PRODUCT.md in the
repo root (a live doc like NEEDS_IMAGE.md: open items only; finished
items later move to archive/docs-completed/NEEDS_PRODUCT_COMPLETED_<date>.md).
It lists every product the owner should find on Amazon. Build it from:
(a) every item you added as plain text in this session; (b) every hub
buyList entry in src/lib/data/guides/*.js that has no product link; (c)
every row in a cost guide table (ComparisonTable) that names an
equipment item with no AffiliateLink; (d) every equipment item named in
a tank setup guide's body that has no link, where the page recommends
buying it. Group by product type (heating, lighting, filtration, water
testing, enclosures and cages, substrate, food and supplements, health
and first aid, other), one line per product: what it is, the spec that
matters (size, wattage, gallons, dimensions, UVB percent), and every
species or page that needs it. Mark each line NEED (a buy list or cost
table already names it) or COULD (prose recommends it). Put the NEED
lines first. Do not search Amazon and do not add any link; the owner
supplies the links.

Credit limits, hard: never more than 3 agents running at once, each
taking several items in sequence; no two agents edit the same file. Use
Opus. Never touch legal files, care packages, or dog and cat pages.

Tick each item in READER_REVIEWS_2026-09-25.md section 6 ("[done]" or
"[open: reason]"). At the end run sync-articles, check-internal-links,
check-voice --strict, check-related-articles, check-publish-dates,
check-rotation, check-seo-tags, check-hub-rows, check-hub-figures,
check-hub-faqs, check-affiliate-mdx and check-cost-coverage. All must
pass. Then exactly ONE commit and ONE push to
claude/adsense-readiness-review-7u43dx. No checkpoint commits. Do not
merge to main. Summary only at the end, including the NEED and COULD
counts from NEEDS_PRODUCT.md.
```

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
- [ ] Ball python (about lines 315 and 725): says brooding females heat eggs by shivering. A 2015 study found ball pythons do not shiver-brood; the site's fun facts page was corrected in wave 2.
- [ ] Leopard gecko (profile p. 3, growth table, p. 34): adult length "6.5 to 11 in, sources differ" and "8 to 11 in" adults. Site now uses 6 to 9 inches (PetMD 6 to 9, LafeberVet 6.5 to 8).
- [ ] Betta p10: feeding "once or twice a day" can add "or up to three smaller meals 6 to 8 hours apart" (optional).

Added 2026-09-25 from the wave 2 changes:
- [ ] Axolotl (diet page, pages_2.html:138): "Whole or halved nightcrawler" for adults. Site: worms cut to head-sized portions, never whole, even for a large adult (axolotl-feeding-guide).
- [ ] Axolotl (handling page, pages_2.html:115): hand washing assumes bare-hand contact. Site: if it must be touched, clean disposable nitrile gloves, since skin oils harm it (axolotl-handling-guide).
- [ ] Ball python (cleaning, lines 489, 1013, 1260): "Change the substrate fully every 4 to 8 weeks". Site: monthly if messy, at least quarterly if not; bowl and decor scrubbed weekly with 3% bleach left on 10 minutes (ball-python-tank-setup-guide).
- [ ] Bearded dragon (First 30 days, line 1088): wellness visit "within the first two weeks". Site: first exam within 48 hours (bearded-dragon-health-issues-guide, cost guide; VCA).
- [ ] Bearded dragon (Salmonella box, line 492): only under-fives told not to handle. Site: under 5, 65 and older, and the immunocompromised should not handle the dragon or touch its enclosure (bearded-dragon-handling-guide; CDC).
- [ ] Crested gecko (sexing p14, line 666): sexable "at 15 to 18 months". Site: hemipenal bulge shows at 18 to 25 g; under that with no bulge means unsexed, not female (crested-gecko-handling-guide; ReptiFiles).
- [ ] Crested gecko (lines 458, 522, 859, 1084, 1266): dishes scrubbed weekly, deep clean monthly. Site: dishes washed and disinfected daily, non-bioactive enclosure fully cleaned at least weekly, bleach left on 10 minutes (crested-gecko-tank-setup-guide).
- [ ] Leopard gecko (handling p8 line 480, behavior p19 line 845): rapid tail flicking means end the session, slow wave "not a complaint". Site says the reverse: slow swish with an arched back is the warning, rapid flick or rattle is excitement at prey or a mate (leopard-gecko-handling-guide; ReptiFiles, LafeberVet).
- [ ] Leopard gecko (profile, line 285): "15 to 20 years typical, up to 25 to 30". Site: 10 to 20 years, some reaching 25 to 30 (hub, cost guide, fun facts; PetMD, LafeberVet).
- [ ] Russian tortoise (outdoor pen, pages_2.html:89): walls "at least 12 in above ground". Site: about 2 ft high with an inward lip of about 4 in, buried at least 12 in, mesh cover (russian-tortoise-handling-guide).

Added 2026-09-25 from the wave 3a changes:
- [ ] Betta (betta-fish.html:794): float the bag "about 15 minutes". Site: 20 to 30 minutes, slow drip only when the temperature gap is over 10°F or the chemistry differs (aquarium-stocking-and-tankmates-guide; Merck, UF/IFAS FA119).
- [ ] Goldfish (pages_1.html:414, pages_3.html:147): float "15 to 20 minutes". Site: 20 to 30 minutes (same guide; Merck).
- [ ] Goldfish (pages_1.html:152): goldfish and koi "cannot interbreed". Site: they can be crossed, mostly by artificial spawning, and first-generation hybrid males examined were sterile (koi-vs-goldfish-guide; Gomelsky et al. 2012).
- [ ] Goldfish (pages_2.html:14, 16): adults "1 to 2 a day", sources disagree. Site: one small meal a day eaten in under 2 minutes, which may be split in two; juveniles 2 to 3 (goldfish-feeding-guide; PetMD).
- [ ] Goldfish (pages_2.html:336): fin rot "an antibacterial treatment is warranted". Site: no home antibiotic dose; a spreading case is a vet case (goldfish-health-issues-guide; Aquatic Veterinary Services).
- [ ] Goldfish (pages_3.html:168): quarantine "2 to 4 week minimum". Site: 30 days as the floor (goldfish-cost-guide, hub; AVMA, Merck). Also clashes with the package's own 30 to 60 days (pages_1.html:409, pages_3.html:478).
- [ ] Goldfish (pages_1.html:190, 359; pages_3.html:17, 105, 422): "fine sand or smooth rounded gravel". Site: bare bottom, fine sand, or gravel only at 1/2 inch and up, since pea gravel lodges in the mouth (goldfish-tank-setup-guide; Wildgoose).
- [ ] Tarantula: no quarantine for a new spider. Hub now says at least three months apart. Add it.

Added 2026-09-25 from the wave 3b changes:
- [ ] Budgie (budgie-src/pages_1.html:262): "a bird does not need a special lamp". Site: without unfiltered sunlight, a full-spectrum bird UV light 10 to 12 hours a day (budgie-cost-guide; PetMD). The other bird packages already recommend one.
- [ ] Cockatiel (cockatiel-src/pages_1.html:349): "Two hens or two cocks avoids the egg problem entirely". Site: hens lay with no male; two males are the pairing with no eggs (cockatiel-handling-guide; Lafeber, PetMD, VCA).
- [ ] Lovebird (lovebird-src/pages_1.html:337, pages_2.html:111): "Two hours a day is the working figure". Site: no study backs a fixed number; daily interaction and time out, and hours alone did not change feather damage odds (lovebird-enrichment-guide; Ebisawa et al. 2021, PetMD).
- [ ] Budgie, cockatiel, lovebird (budgie-src/pages_2.html:227-229; cockatiel-src/pages_2.html:236, pages_4.html:256; lovebird-src/pages_2.html:242): only a 10% drop is given as a weight trigger. Add: during a diet conversion, more than 1 to 2% lost in a week means the change is too fast (feeding guides; UF Small Animal Hospital).
- [ ] Rabbit (rabbit.html:1069, 1406, 1578): "Annual vaccination" with one box a year. Site: first course is two doses 21 days apart from 4 weeks old, then yearly; starter series $80 to $180, booster $60 to $75 (rabbit-health-issues-guide, rabbit-cost-guide; Bosco-Lauth et al. 2024).
- [ ] Hamster (hamster.html:658): Syrians nurse "roughly 26 to 28 days". Site: weaned at about 20 days, can breed at 7 to 8 weeks (hamster-handling-guide; Merck).
- [ ] Hamster (hamster.html:1342, 1347, 1364, 1519): wheel, dishes and hideout washed monthly, bedding partly replaced every 3 to 4 months. Site: water bottle daily; full clean weekly for a small cage, every few weeks for a large deep-bedded one, nest and hoard set aside and returned (hamster-tank-setup-guide; PetMD, PDSA).

Added 2026-09-25 from the wave 3a changes:

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

Added 2026-09-25 from the wave 2 changes:
- [ ] Axolotl feeding portion (pages_2.html:143): package "what it finishes in two to three minutes"; site "what it takes in 5 to 10 minutes" (axolotl-feeding-guide).
- [ ] Axolotl maturity and sexing (pages_1.html:106, pages_2.html:42, 265, pages_3.html:538): package "about a year" (Genetic Stock Center); site males about 10 months, females 12 to 18 months (axolotl-handling-guide; LafeberVet, Chicago Exotics).
- [ ] Axolotl nets (pages_2.html:115): package "Never: Nets"; site allows a soft fine-mesh net for seconds when nothing else works (axolotl-handling-guide).
- [ ] Crested gecko vet cost (lines 311, 988): package first exam with fecal "$65 to $210"; site routine visit about $40 to $70 (crested-gecko-cost-guide).
- [ ] Crested gecko price (lines 302, 988): package normals "$50 to $200", rare "$500 to $1,000 or more"; site normals under $100, standard morphs to about $200, rare upward of $1,000 (crested-gecko-cost-guide).

No differences: budgie.

Added 2026-09-25 from the wave 3a changes:
- [ ] Betta sorority (betta-fish.html:1019): package "not for beginners, frequently ends in serious injury"; site allows a sorority in at least 10 gallons (betta-fish-handling-guide; PetMD).
- [ ] Betta tankmates (betta-fish.html:1016, 1017): package ghost shrimp 10 gal and up, schooling fish and corydoras 15 to 20 gal; site lists them with no size above the 5 gallon floor (betta-fish-handling-guide; PetMD).
- [ ] Betta setup cost (betta-fish.html:310): package $157 to $336; site $100 to $300.
- [ ] Goldfish costs (pages_1.html:135, 139; pages_3.html:113): package equipment $208 to $500, monthly $13 to $32; site $150 to $400, $10 to $30.
- [ ] Tarantula humidity (tarantula.html:465, 1249): package leaves 40 to 75% unsettled; site picks 40 to 60% for dry-adapted species like the rose hair.
- [ ] Tarantula juvenile feeding (tarantula.html:543): package frames 4 to 7 days vs 7 to 14 as a disagreement; site gives them as one schedule by age. Wording only.
- [ ] Tarantula oral nematodes (tarantula.html:1124): site adds wild-caught risk, collection spread and more signs (palps tucked, wet sternum, sweet smell); package has the short version.

Added 2026-09-25 from the wave 3b changes:
- [ ] Budgie cere (budgie-src/pages_2.html:213): package names recessive pied, lutino and albino as keeping a pink cere; site names pastel and solid-color mutations (budgie-cere-color-guide; Lafeber, Wissman DVM).
- [ ] Cockatoo first-week vet (cockatoo-src/pages_4.html:325): package exam plus 3-test PCR panel $200 to $450; site exam with PBFD test $140 to $210, $24.50 per PCR at the lab (cockatoo-cost-guide). Different scope.
- [ ] Cockatoo annual vet (cockatoo-src/pages_4.html:339): package exam plus bloodwork $150 to $300; site wellness exam $78 to $115, no bloodwork (cockatoo-cost-guide).
- [ ] Lovebird seed (lovebird-src/pages_2.html:12): package seed is treat only, never free-fed, millet 2 to 3 times a week (VCA); site allows 1 to 2 teaspoons a day (lovebird-feeding-guide; Bird Vet Melbourne).
- [ ] Guinea pig spay (guinea-pig-src/pages_3.html:132): package spay only for a medical reason (Merck); site says exotics vets now recommend a preventive flank ovariectomy for young sows (guinea-pig-health-issues-guide; Illinois CVM).
- [ ] Hamster settling (hamster.html:797, 920): package no handling for the first week; site leave it 24 hours, then start hand-in-cage taming (hamster-handling-guide; RSPCA, Woodgreen).
- [ ] Hamster groups (hamster.html:577): package lists the Chinese hamster among dwarfs kept in same-sex groups; site says Chinese hamsters live alone, only Roborovski, Campbell's and Winter White can share (hamster-handling-guide; RSPCA).
- [ ] Hamster (hamster.html:1595): the package cites SpectrumCare, which the site no longer allows (AI-drafted). Replace or drop at the next rebuild.
