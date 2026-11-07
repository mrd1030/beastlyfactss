# Leopard Gecko (Eublepharis macularius): Research Notes

Rebuilt 2026-11-06 in the structure of the fish research files. Research only: no article copy here. The rebuild works only from what was already recorded: the 2026-11-06 sweep notes (the earlier version of this file), the six guides content/guides/leopard-gecko-{cost,handling,health-issues,tank-setup,feeding,enrichment}-guide.mdx and their Sources blocks, the hub entry in src/lib/data/guides/geckos.js, and the lookups done on 2026-11-06. No page was opened and no search was run for the rebuild itself.

How each item was seen is marked on it:
- "verbatim page read": the page was opened on 2026-11-06 and the quote is as returned.
- "abstract read": the abstract was read, not the full paper.
- "search summary": seen in a search result summary only; desktop check before leaning on it.
- "press coverage only": seen in news coverage, not in the paper.
- "guide states": a figure the guide carries, with the guide's Sources block named. Which page in that block states the figure was not recorded, and the pages were not reopened for this file.

Owner decisions are dated "Owner (2026-11-06): ...". Sweep changes the writer made under house rules are dated "Sweep (2026-11-06): ...". Nothing here is cut from a guide without the owner's say. Where a source used an en dash in a range, it is written here with "to".

Purpose: one place for what the six leopard gecko guides rest on, which source backs each figure, and what still has no source. The Replacement map is near the end.

## Source list and tier

Strongest first. "Tier" follows docs/RULES.md: peer-reviewed, then .gov, then museums and universities (including veterinary references), then established husbandry references. ReptiFiles and Zen Habitats are approved reptile care references (owner, 2026-11-06).

| # | Source | Tier | URL | Cited in |
|---|--------|------|-----|----------|
| L1 | Nipithakul et al. (2025). "Cryptosporidium varanii Infection in Captive Leopard Gecko (Eublepharis macularius) and Its Association with Wasting Syndrome in Thailand." Animals | Peer-reviewed | https://pmc.ncbi.nlm.nih.gov/articles/PMC12784683/ | cost, health |
| L2 | Schlief SC, Richman JM, Brink KS (2025). "Bone labeling experiments and intraskeletal growth patterns in captive leopard geckos (Eublepharis macularius)." Journal of Anatomy | Peer-reviewed | https://pmc.ncbi.nlm.nih.gov/articles/PMC12034826/ | feeding |
| L3 | Bashaw MJ, et al. (2016). "Does enrichment improve reptile welfare? Leopard geckos (Eublepharis macularius) respond to five types of environmental enrichment." Applied Animal Behaviour Science 184: 150-160 | Peer-reviewed | https://www.sciencedirect.com/science/article/pii/S0168159116302350 | enrichment |
| L4 | Rickman EL, Wilkinson A, Pike TW, et al. (2025). "The impact of enriched housing on the behaviour and welfare of captive leopard geckos (Eublepharis macularius)." Applied Animal Behaviour Science 283: 106487. DOI 10.1016/j.applanim.2024.106487 | Peer-reviewed (abstract read via the Refinement Database, 2026-11-06) | https://doi.org/10.1016/j.applanim.2024.106487 | enrichment |
| L5 | Oonincx DGAB, et al. (2020). "The nocturnal leopard gecko (Eublepharis macularius) uses UVb radiation for vitamin D3 synthesis." Comparative Biochemistry and Physiology Part B 250: 110506. PubMed 32950659 | Peer-reviewed (search summary of the abstract, 2026-11-06) | https://www.pubmed.gov/32950659/ | tank setup |
| L6 | Gould A, et al. (2018). "A comparison of blood vitamin D and ionized calcium concentrations in leopard geckos exposed to UV light or dietary vitamin D." Journal of Herpetological Medicine and Surgery 28(1-2): 34-39 | Peer-reviewed (search summary, 2026-11-06) | none in the guide's Sources block | tank setup |
| L7 | Baines F, et al. (2016). "How much UVB does my reptile need? The UV-Tool, a guide to the selection of UV lighting for reptiles and amphibians in captivity." Journal of Zoo and Aquarium Research 4(1): 42-63 | Peer-reviewed | https://jzar.org/jzar/article/view/150 | tank setup |
| L8 | Vetere A, Bigliardi E, Masi M, Rizzi M, Leandrin E, Di Ianni F (2023). "Egg Removal via Cloacoscopy in Three Dystocic Leopard Geckos (Eublepharis macularius)." Animals | Peer-reviewed | https://pmc.ncbi.nlm.nih.gov/articles/PMC10000207/ | health |
| L9 | Higham TE, Russell AP. "Flip, flop and fly: modulated motor control and highly variable movement patterns of autotomized gecko tails." Biology Letters (online September 2009, cited as 2010) | Peer-reviewed (press coverage only, 2026-11-06; desktop check of the citation) | none recorded | handling FunFact source prop only, not in the Sources block |
| L10 | PetMD (https://www.petmd.com/): Leopard Gecko Care Sheet; stick tail disease; reptile egg binding; reptile body condition | Veterinary | care sheet: https://www.petmd.com/reptile/leopard-gecko-care-sheet (verbatim page read 2026-11-06) | cost, handling, tank setup (care sheet); health (care sheet plus the three other pages, one combined entry) |
| L11 | VCA Animal Hospitals: "Leopard Geckos, Care and Feeding"; "Reptiles, Dystocia" | Veterinary | https://vcahospitals.com/know-your-pet/leopard-geckos-care-and-feeding ; https://vcahospitals.com/know-your-pet/reptiles---dystocia | tank setup, feeding (care and feeding); health (dystocia) |
| L12 | MedVet: Leopard Gecko Information & Care Sheet | Veterinary | https://www.medvet.com/leopard-gecko-information-care-sheet/ | feeding |
| L13 | Yarmouth Veterinary Center: The Gravid Gecko | Veterinary | https://yarmouthvetcenter.com/yvcipedia/the-gravid-gecko-yarmouth-veterinary-center/ | health |
| L14 | LafeberVet: Basic Information Sheet, Leopard Gecko | Veterinary reference (could not be reached, 2026-11-06) | https://lafeber.com/vet/basic-information-for-leopard-gecko/ | handling, feeding |
| L15 | RSPCA: How to care for a leopard gecko | Animal welfare charity care page | https://www.rspca.org.uk/adviceandwelfare/pets/other/leopardgecko | enrichment |
| L16 | ReptiFiles (https://reptifiles.com/): leopard gecko care guide index; handling and body language chapter; respiratory infection page | Approved reptile care reference (owner, 2026-11-06) | handling: https://reptifiles.com/leopard-gecko-care/leopard-gecko-handling-body-language/ ; respiratory: https://reptifiles.com/leopard-gecko-care/leopard-gecko-diseases-health/leopard-gecko-respiratory-infection/ (index and handling chapter: verbatim page read 2026-11-06) | handling, health |
| L17 | Zen Habitats: Leopard Gecko Complete Food Guide | Approved reptile care reference (owner, 2026-11-06) | https://www.zenhabitats.com/blogs/reptile-care-sheets-resources/leopard-gecko-complete-food-guide | feeding |

Removed or never cited, so nothing rests on them:
- The Vet Desk and Reptile Direct: Sweep (2026-11-06): out of the cost guide's Sources (hobby sites). The price figures they carried stay in the guide and are on the owner review list.
- Bare Zoo Med homepage: Owner (2026-11-06): cut from the cost guide with the T5 HO wattage sentence it was the only source for (section 4.6).
- Lincoln news page on Rickman et al.: Sweep (2026-11-06): replaced by the paper itself (L4).
- Arcadia distance and UV index chart: named inline in the tank setup guide as a manufacturer spec, but no Arcadia page is in Sources (owner review list).
- LafeberVet leopard gecko sheet: no sheet could be reached on 2026-11-06, so nothing in it was confirmed (see Gaps).
- ReptiFiles handling chapter at its old path: returned 404 on 2026-11-06 (see Gaps).

---

## 1. Identity and size

1.1 Adult size and weight
- Guide states (handling guide, and the hub's "Adult size" row copied from it): adults "only 6 to 9 inches long, males weigh 60 to 90 grams, and a female can weigh as little as 45 grams." Sources block: ReptiFiles handling (L16), PetMD (L10), LafeberVet (L14). Which page states it is not recorded, and LafeberVet could not be reached (see Gaps).
- Schlief et al. 2025 (L2), guide states (feeding guide): seven captive geckos weighed from hatching to adulthood averaged 4.4 grams at hatching, 38 grams at 300 days and 52 grams at 400 days, then growth slowed to adult weights of 60 to 75 grams in that study. Those geckos were fed every day.
- Sweep (2026-11-06): the feeding guide's "adult weights of 60 to 75 grams" now reads "in that study" (seven geckos); the handling guide and the hub carry the species range.

1.2 Sexual maturity
- Guide states (feeding guide): sexual maturity at 9 to 18 months, so a female can start producing eggs while still growing. Sources block: VCA (L11), MedVet (L12), Zen Habitats (L17), LafeberVet (L14), Schlief (L2).

1.3 Eyelids
- PetMD care sheet (L10), verbatim page read 2026-11-06: "Unlike many gecko species, leopard geckos have functional eyelids." and "they can blink and even close their eyes while sleeping!"
- ReptiFiles care guide index (L16), verbatim page read 2026-11-06: leopard geckos "also have eyelids, eliminating the need for using their tongue to clean their eyes".
- Backs the health guide FunFact (section 7.5) and the hub funFact ("Unlike most geckos, leopard geckos have eyelids and can blink and wink at you!"). PetMD says "many", the hub says "most" (see Gaps).

1.4 Tail as a fat store
- PetMD care sheet (L10), verbatim page read 2026-11-06: "Leopard geckos use their tails to store fat and nutrients as an emergency energy source".
- Guide states: cost guide (a thick tail is a health sign when buying; a thin one is the first sign of wasting disease); handling guide (the tail stores fat the gecko relies on); feeding guide (the tail is the gauge for how long a gecko can go without food); health guide (a healthy adult's tail is nearly as wide as the body). Hub funFact: "They also store fat in their chunky tails for energy reserves."

1.5 Activity pattern
- Guide states (feeding, handling and enrichment guides): crepuscular, so evening feeding and evening handling match natural activity. Oonincx et al. (L5) call the species nocturnal in the paper's title.

## 2. Wild habitat

- Nothing recorded. No source on range, wild habitat or wild climate was opened for these guides, and none of the six guides states one.
- Guide states (feeding guide): brumation is "a natural winter slowdown triggered by cooler temperatures and shorter days". Sources block: VCA (L11), MedVet (L12), Zen Habitats (L17), LafeberVet (L14), Schlief (L2).

## 3. Lifespan

- PetMD care sheet (L10), verbatim page read 2026-11-06: "Up to 10 to 20 years with proper care".
- ReptiFiles care guide index (L16), verbatim page read 2026-11-06: "15 to 20+ years", and "15-20 years on average" in captivity.
- Guide states (cost guide, and the hub's "Lifespan" row copied from it): "10 to 20 years with proper care, and some reach 25 to 30." The 10 to 20 years matches PetMD. The "25 to 30" has no recorded source (see Gaps). ReptiFiles is not in the cost guide's Sources block.

## 4. Enclosure, heat and UVB

4.1 Enclosure size and housing
- Guide states (tank setup guide, and the hub's "Enclosure" row): 36x18x18 inches is the adult minimum, past the old 20-gallon-long standard (roughly 30x12x12 inches); a hatchling can start in a 10-gallon; floor space counts more than height; front-opening, ventilated, escape-proof screen top. House alone: not a social species. Sources block: PetMD (L10), VCA (L11), Gould (L6), Oonincx (L5), Baines (L7).

4.2 Temperatures
- Guide states (tank setup guide): warm hide floor 88 to 92°F measured on the surface; cool side about 70 to 77°F; nights in the 70s, with 65°F the floor. The hub's "Temperatures" row (warm side air 80 to 84°F added) comes from leopard-gecko-temperature-guide.mdx, outside the six guides in this file.
- Guide states: an under-tank heat mat under the warm hide, always on a thermostat (burn and fire risk without one); no colored night bulbs; a ceramic heat emitter for supplemental night heat; no overhead heat lamps as the primary source (FAQ).

4.3 Humidity and the humid hide
- Guide states (tank setup and enrichment guides, hub "Humidity" row): 30 to 40% in the enclosure, 70 to 80% inside the humid hide only, on the cool or middle side, lined with damp sphagnum moss replaced often so it does not mold. Raising the whole enclosure is a respiratory infection risk. Three hides: warm dry, cool dry, humid.

4.4 Substrate
- Guide states (tank setup guide): paper towel or tile safest; bioactive sand or soil for experienced keepers; never calcium sand or fine loose sand; no corncob or crushed walnut shell (swallowed, can block the intestines; walnut shell is abrasive). Paper towel replaced when soiled; droppings and uneaten insects out daily.

4.5 UVB and vitamin D3
- Oonincx et al. 2020 (L5), search summary of the abstract, 2026-11-06: juveniles under low-level UVB had higher plasma 25(OH)D3 than controls (61 plus or minus 20 against 38 plus or minus 8 nmol/L); growth did not differ, so dietary D3 alone may meet growth needs in the first six months.
- Sweep (2026-11-06): the Oonincx entry in the tank setup guide had no title, year or link. Now: Oonincx et al. (2020), "The nocturnal leopard gecko (Eublepharis macularius) uses UVb radiation for vitamin D3 synthesis", Comparative Biochemistry and Physiology Part B 250: 110506 (PubMed 32950659).
- Gould et al. 2018 (L6), search summary, 2026-11-06: twelve adult males; 2 hours of daily UVB raised 25(OH)D3 against controls. Backs the tank setup guide's "as little as two hours a day, raises their vitamin D3 levels through the skin."
- Baines et al. 2016 (L7), guide states (tank setup guide, hub "UVB" row): a UVI of 0.6 to 1.4 at the basking spot for normally pigmented geckos, the Ferguson Zone 1 range.
- Guide states, no recorded source for these figures (see Gaps): 0.5 to 0.7 or lower for albino and other less-pigmented morphs; a low-output linear T5 tube about two-thirds the enclosure length, so about 24 inches on a 36-inch enclosure; a screen lid blocks about 30% of the UVB; a 2.5% ShadeDweller Max goes 8 to 14 inches above the basking spot over mesh and 10 to 18 inches inside; for albino and pale morphs, 12 to 14 inches over mesh or 14 to 18 inside; add an inch or two for the gecko's height.
- Owner (2026-11-06): UVB tube replacement is worded as every 6 to 12 months (tank setup guide: "on the maker's schedule"), and the cost guide budgets two tubes a year at about $5 a month.
- Arcadia's chart (1.0 against 0.65 UVI at 12 inches): named inline, no Arcadia page in Sources. On the owner review list.

4.6 Cost guide T5 sentence
- Owner (2026-11-06): the T5 HO wattage-to-length sentence (24, 39 and 54 W; copied from the bearded dragon guide) contradicted the 14 W, 24 inch ShadeDweller the guide sells, and its only source was the bare Zoo Med homepage. Both cut. The cost guide now cites 2 sources, under the 3 to 5 target: PetMD (L10) and the Cryptosporidium study (L1). Not padded; flagged for the next source pass.

4.7 Lighting hours
- Guide states (tank setup guide): lights 14 hours a day in summer, 12 in winter. No cited source states it. On the owner review list.

4.8 "Diet, Briefly"
- Owner (2026-11-06): the tank setup guide's "Diet, Briefly" section cut: the feeding guide owns the diet, and the section ended in a link-only sentence.

## 5. Diet and feeding

All "guide states" items in this section are from the feeding guide. Sources block: VCA (L11), MedVet (L12), Zen Habitats (L17), LafeberVet (L14), Schlief (L2). Which page states each figure is not recorded.

5.1 Schedule and portions
- Guide states (and the hub's "Feeding schedule" row): hatchlings and young geckos daily, insects around a quarter inch; juveniles daily or every 1 to 2 days; adults every 2 to 4 days once the tail is as thick as the neck, stretching to 5 once it has fully filled out. A few insects at a time, or what it clears in about 15 minutes. Prey no bigger than the space between the eyes (also enrichment guide). Evening feeding.
- Guide states: weigh a hatchling weekly and an adult every two weeks to a month.

5.2 What they eat
- Guide states: obligate insectivores; no fruit or vegetables. Commercially raised, never wild-caught: crickets the usual staple, with dubia roaches, discoid roaches, mealworms and black soldier fly larvae (calciworms, Phoenix worms). Captive-bred hornworms are safe and blue-green; wild hornworms are bright green and toxic. Fireflies are toxic.
- Sweep (2026-11-06): waxworms "limit them to a couple times a week" read as a staple beside "occasional treats"; now "keep them to an occasional treat". Superworms are adults only (size and hard exoskeleton).
- Owner (2026-11-06): no mice for leopard geckos, the same house rule as bearded dragons (snakes and larger reptiles are fine). The feeding guide had said adults, females especially, may take a pinky mouse one to two days old, no more than one a week. It now says pinky mice and other rodents stay off the menu, with insects covering protein at every age.
- Zen Habitats (L17): Owner (2026-11-06): approved as a source, the same standing as ReptiFiles. It stays in the feeding guide.

5.3 Gut-loading and supplements
- Guide states (and the hub's "Calcium" row): gut-load 24 to 72 hours; plain calcium at most feedings for juveniles and breeding females, 2 to 3 times a week for adults; calcium with D3 a couple of times a week without meaningful UVB; a multivitamin about once a week; an optional dish of plain calcium in the enclosure.
- Oonincx (L5, section 4.5) bears on the D3 point: dietary D3 alone may meet growth needs in the first six months.

5.4 Not eating
- Guide states (and the hub's "Not eating" row): normal causes are brumation, shedding, a temperature too low (88 to 92°F warm hide floor, 70 to 77°F cool side), stress, breeding season and prey boredom; illness or impaction when it comes with bloating, straining, loose stools, discoloration, poor shedding or shrunken eyes. A healthy adult with a plump tail is usually fine for about two weeks, sometimes up to a month; a thinning tail is the signal to see a vet.

## 6. Behavior, handling and enrichment

6.1 Settling in and readiness
- Guide states (handling guide, hub "Handling" row): wait one to two weeks, as a benchmark rather than a countdown; start once it stops fleeing or hiding and eats normally. Sources block: ReptiFiles handling (L16), PetMD (L10), LafeberVet (L14).
- Handling readiness, search summary of hobby pages only, NOT citable (2026-11-06): no source gives a size cutoff; hobby pages use a week or more after arrival, eating and passing droppings normally, and short 5-minute sessions.
- Sweep (2026-11-06): the handling guide's "hold off on regular handling until it reaches roughly 6 inches" waited until near adult size (adults are 6 to 9 inches), and no source gives a size cutoff. Replaced with readiness, matching the guide's settle-in section.

6.2 Sessions
- Guide states (handling guide): 5-minute sessions every other day, building toward 10 to 20 minutes; a few short sessions a week for young geckos; evenings; never during a shed; skip about 48 hours after a large meal (regurgitation); no daily handling needed. Two-handed scoop from below, or let it walk onto a flat hand; stay low.

6.3 Body language
- Guide states (handling guide): stress signs are chirping or squeaking, screaming (more common in juveniles), a slow side-to-side tail swish with arched back, fast retreats, refusing food afterward. A rapid tail flick or rattle is excitement (prey, or in an adult male a potential mate).
- Guide states: "A gecko barking isn't necessarily distress, since it can just mean it's hungry". No source in the guide states it. On the owner review list.

6.4 Tail loss (caudal autotomy)
- ReptiFiles handling chapter (L16), verbatim page read 2026-11-06: "Never grab the tail, as it is detachable."
- ReptiFiles care guide index (L16), verbatim page read 2026-11-06: "they are able to detach and regrow their tail if needed".
- PetMD care sheet (L10), verbatim page read 2026-11-06: "Their tail will regrow within about 30 days, but the new tail will not look the same as the original." Backs the handling guide's regrowth line (body and FAQ).
- Guide states, no recorded source for the detail: the regrown tail is built on cartilage instead of bone and comes back shorter and thicker; after a drop, paper towel substrate, a clean enclosure, no handling for 1 to 2 weeks, and a vet for swelling, discharge, discoloration or a foul smell at the stump.
- Higham and Russell (L9), press coverage only (2026-11-06): detached leopard gecko tails jump, flip and lunge, read as a decoy for predators. Backs the handling FunFact (source prop "Higham and Russell 2010, Biology Letters"). The FunFact's "for a minute or more" is not in what was recorded. Desktop check of the citation (owner review list).

6.5 Enrichment
- Bashaw et al. 2016 (L3), guide states (enrichment guide): five types of environmental enrichment tested; thermal and feeding enrichment produced the strongest responses; mirror-based visual enrichment was the weakest.
- Rickman et al. 2025 (L4), abstract read via the Refinement Database (2026-11-06): enriched housing showed "a range of behaviours indicative of improved welfare"; "no differences between Enriched and Standard housing conditions in the behavioural tests of anxiety"; "the geckos displayed a strong preference for the Naturalistic enriched enclosure"; N = 6, each gecko four weeks in each of three conditions. The guide's wording matches.
- Sweep (2026-11-06): Rickman et al. 2025 is cited from the paper (Applied Animal Behaviour Science 283: 106487, doi 10.1016/j.applanim.2024.106487), not the Lincoln news page.
- RSPCA (L15): in the enrichment guide's block; the claim it backs is not recorded.
- Guide states (enrichment guide): priority order is belly heat plus three hides, then feeding and hunting presentation, then low climbing and cover, then a dig box (some females), then light novelty last. Hides snug and cave-like.
- Owner (2026-11-06): the enrichment guide's bearded dragon feeder toy and timed-release containers cut.
- Owner (2026-11-06): the enrichment FunFact cut: it cited unnamed "additional work".
- Sweep (2026-11-06): the toys-do-not-replace-hides point cut from FAQ 2; the KeyTakeaway and What Not to Do keep it.

## 7. Health

Sources block (health guide): PetMD combined entry (L10), Nipithakul (L1), VCA dystocia (L11), Yarmouth (L13), ReptiFiles respiratory (L16), Vetere (L8). Six entries, under the health cap of 8.

7.1 Metabolic bone disease
- Guide states: common because many are kept without UVB, calcium or enough heat; signs are fractures, bent limbs, soft jaw ("rubber jaw"), tremors, difficulty eating, lethargy, weight loss. Leopard geckos "appear to rely heavily on UVB and correct basking temperature to process calcium." Section 4.5 (Oonincx, Gould) is the UVB evidence on file; neither is in the health guide's block.

7.2 Cryptosporidiosis ("stick tail")
- Nipithakul et al. 2025 (L1), guide states (health and cost guides, hub FAQ): a PCR screen of one Thai breeding facility found it in 51% of geckos tested; associated with wasting.
- Guide states: no cure; paromomycin manages it; fecal PCR with false negatives; symptomatic mortality around 50%; no response within a month is a poor outlook; asymptomatic carriers spread it; quarantine new geckos 3 to 6 months (links the reptile quarantine guide). Which of L1 and the PetMD stick tail page states each is not recorded.
- Owner (2026-11-06): the health FunFact (the stick tail nickname, a disease topic) replaced with the eyelid fact (section 7.5).

7.3 Impaction and shedding
- Guide states: impaction from loose substrate (most often sand) or oversized prey, with low basking temperature, dehydration and parasites contributing; warm baths and belly massage for mild cases; surgery for a true blockage. Dysecdysis from low humidity or vitamin A deficiency; retained shed at eyes, toes and tail tip; constricting bands can cause tissue death and lost digits; soak, never peel; the humid hide prevents most of it.

7.4 Obesity
- Guide states: tail wider than the body, spine and ribs not felt, jowls under the neck, pear-shaped torso; cut waxworms and superworms first. PetMD reptile body condition page (L10) is in the block.

7.5 Health FunFact
- Owner (2026-11-06): replaced with the eyelid fact. FunFact text: "Unlike many geckos, leopard geckos have working eyelids: they can blink, and they close their eyes to sleep." Backed by the PetMD quotes in section 1.3.

7.6 Respiratory infection
- ReptiFiles respiratory infection page (L16), guide states: bacterial, almost always from an enclosure too cool, too damp or both; open-mouth breathing, bubbly saliva, clogged nostrils, lethargy, appetite and weight loss; antibiotics, usually with a probiotic; fluids and assisted feeding.

7.7 Prolapse and the vet list
- Guide states: vent or cloacal prolapse is an emergency. The "When to See a Vet" list is copied into the hub's emergency card.

## 8. Breeding and egg laying

- Guide states (health guide): a female can produce eggs with no male; gravid signs are a bulging belly, weight gain, restlessness, digging, a smaller appetite; a clutch is two eggs; a lay box of damp sphagnum moss at about 70 to 80% humidity in a quiet corner; laying should be over in less than 48 hours; dystocia causes are temperature, humidity, missing UVB, low calcium or protein, dehydration; treatment may start with fluids, calcium and hormone injections, with surgery if those fail. Sources: VCA dystocia (L11), Yarmouth (L13), Vetere (L8), PetMD reptile egg binding (L10). Vetere describes egg removal via cloacoscopy in three dystocic leopard geckos.
- Guide states, no source shown: "Most reptiles brought to a vet for egg binding are single females that have never met a male". On the owner review list.
- Guide states, no source shown: "A mature female can lay four to five clutches in a season, about a month apart". On the owner review list.
- Sexual maturity at 9 to 18 months: section 1.2.

## 9. Price observations (retail listings, NOT sources, do not cite)

From the cost guide as it stands on 2026-11-06. These figures had The Vet Desk and Reptile Direct behind them until those came out of Sources (Sweep, 2026-11-06); they are on the owner review list.
- The gecko: $20 to $45 at a pet store (standard or wild-type); $50 to $150 from a breeder, even for basic morphs; popular morphs $75 to $300; rare designer morphs $500 to $3,500 or more.
- Live shipping: $35 to $100.
- Vet: annual wellness exam $85 to $105; sick or emergency visits $100 to $800 or more, higher with diagnostics or surgery. The hub's "Budget" row repeats both.
- Monthly table, no source in the guide: feeder insects $10 to $35; supplement top-ups $5 to $10; electricity $5 to $15; substrate and miscellaneous $5 to $20; UVB tube replacement about $5 (owner wording, section 4.5).
- UVB: a replacement tube at about $25 each (cost FAQ).
- Sweep (2026-11-06): the $30 monthly floor only adds up with the optional UVB row; the annual line now says "with the UVB row" ($360 to $1,020 a year; $3,600 to $20,400 over 10 to 20 years).
- Owner (2026-11-06): the cost FunFact cut: it was advice the body already gives.
- Owner (2026-11-06): there is no site rule requiring "X to Y" number ranges.

## Gaps

- Wild range and habitat: nothing recorded, and no guide states any.
- Lifespan "some reach 25 to 30" (cost guide and hub): no recorded source. PetMD gives up to 10 to 20 years, ReptiFiles 15 to 20+.
- Adult size and weights (6 to 9 inches; males 60 to 90 grams; females as light as 45): which page in the handling guide's block states them is not recorded.
- LafeberVet (L14): no leopard gecko sheet could be reached on 2026-11-06, but it stays in the handling and feeding blocks. Nothing it backs is confirmed. Desktop check.
- ReptiFiles handling chapter (L16): the URL with the old path returned 404 on 2026-11-06. Whether the handling guide's link (https://reptifiles.com/leopard-gecko-care/leopard-gecko-handling-body-language/) is the old path or the working one was not recorded. Desktop check.
- Gould et al. 2018 (L6): no link in the tank setup guide's Sources block, and seen only in a search summary.
- Oonincx et al. 2020 (L5): seen only in a search summary of the abstract.
- Higham and Russell (L9): seen through press coverage only, not in the handling guide's Sources block (FunFact prop only), and the FunFact's "for a minute or more" is not in what was recorded. Desktop check of the citation.
- UVB distances (8 to 14 and 10 to 18 inches; 12 to 14 and 14 to 18 for pale morphs), the 30% screen loss, the 0.5 to 0.7 UVI for pale morphs and the two-thirds tube length: no source recorded in this file. The Arcadia chart (1.0 against 0.65) is on the owner review list.
- Tail regrowth "built on cartilage instead of bone": no recorded source.
- Hub funFact says "Unlike most geckos"; PetMD says "Unlike many gecko species".
- Cost guide at 2 sources, under the 3 to 5 target: not padded, flagged for the next source pass (owner, 2026-11-06).
- RSPCA (L15): what it backs in the enrichment guide is not recorded.

---

## Replacement map

Format: the guide's current Sources, what each backs as far as recorded, then open items.

### leopard-gecko-cost-guide.mdx
Current Sources (2): PetMD care sheet (L10); Nipithakul et al. 2025 (L1).
- PetMD (L10): lifespan up to 10 to 20 years; the tail as a fat store (the buying checklist's thick tail).
- Nipithakul (L1): 51% of geckos screened at one Thai facility; no cure; healthy carriers spread it.
- Removed: The Vet Desk and Reptile Direct (hobby sites, Sweep 2026-11-06); the bare Zoo Med homepage with the T5 sentence (Owner 2026-11-06).
- Open: all prices are observations (section 9) and on the owner review list; "some reach 25 to 30" years has no source; 2 sources is under target and was not padded; ReptiFiles (L16) states 15 to 20+ years if a lifespan source is wanted.

### leopard-gecko-enrichment-guide.mdx
Current Sources (3): Bashaw et al. 2016 (L3); Rickman et al. 2025 (L4); RSPCA (L15).
- Bashaw (L3): five enrichment types; thermal and feeding strongest; mirrors weakest.
- Rickman (L4): improved welfare indicators in enriched housing, no anxiety-test difference, strong preference for the naturalistic enclosure (N = 6). Cited from the paper, not the Lincoln news page.
- RSPCA (L15): claim not recorded.
- Cut (Owner 2026-11-06): the FunFact; the bearded dragon feeder toy and timed-release containers. Cut (Sweep 2026-11-06): the toys-do-not-replace-hides point from FAQ 2 (kept in the KeyTakeaway and What Not to Do).

### leopard-gecko-feeding-guide.mdx
Current Sources (5): VCA care and feeding (L11); MedVet (L12); Zen Habitats (L17); LafeberVet (L14); Schlief et al. 2025 (L2).
- Schlief (L2): growth weights and the 60 to 75 grams "in that study" (seven geckos, fed daily).
- VCA, MedVet, Zen Habitats, LafeberVet: the schedule, feeder list, gut-loading and dusting, and not-eating causes; which page states which figure is not recorded. Zen Habitats approved (Owner 2026-11-06).
- Changed: no mice (Owner 2026-11-06); waxworms as an occasional treat (Sweep 2026-11-06).
- Open: LafeberVet could not be reached on 2026-11-06.

### leopard-gecko-handling-guide.mdx
Current Sources (3): ReptiFiles handling chapter (L16); PetMD care sheet (L10); LafeberVet (L14). FunFact source prop: Higham and Russell 2010 (L9).
- ReptiFiles (L16): "Never grab the tail, as it is detachable."; the index adds "able to detach and regrow their tail".
- PetMD (L10): tail regrows within about 30 days and does not look the same; the tail stores fat.
- Higham and Russell (L9): the detached tail as a moving decoy (press coverage only).
- Changed: the 6-inch handling cutoff replaced with readiness (Sweep 2026-11-06).
- Open: the barking line (owner review); LafeberVet unreachable; the ReptiFiles handling URL (old path 404); the Higham and Russell citation; the size and weight figures' page; "cartilage instead of bone".

### leopard-gecko-health-issues-guide.mdx
Current Sources (6, cap 8): PetMD combined entry (care sheet, stick tail disease, reptile egg binding, reptile body condition) (L10); Nipithakul et al. 2025 (L1); VCA dystocia (L11); Yarmouth Veterinary Center (L13); ReptiFiles respiratory infection (L16); Vetere et al. 2023 (L8).
- PetMD (L10): eyelid FunFact (verbatim); stick tail, egg binding and body condition pages for those sections.
- Nipithakul (L1): 51% prevalence and wasting.
- VCA dystocia (L11), Yarmouth (L13), Vetere (L8): egg binding signs, lay box and treatment; Vetere for egg removal via cloacoscopy.
- ReptiFiles respiratory (L16): respiratory infection section.
- Changed: FunFact replaced with the eyelid fact (Owner 2026-11-06).
- Open: the single-female egg binding claim and the four to five clutches (owner review).

### leopard-gecko-tank-setup-guide.mdx
Current Sources (5): PetMD care sheet (L10); VCA care and feeding (L11); Gould et al. 2018 (L6); Oonincx et al. 2020 (L5); Baines et al. 2016 (L7).
- Gould (L6): 2 hours of daily UVB raised 25(OH)D3 (search summary). No link in the block.
- Oonincx (L5): low-level UVB raised plasma 25(OH)D3 in juveniles; growth did not differ (search summary). Entry completed with title, year and link (Sweep 2026-11-06).
- Baines (L7): UVI 0.6 to 1.4, Ferguson Zone 1.
- PetMD, VCA: enclosure size, temperatures, humidity and substrate; which page states which figure is not recorded.
- Changed: "Diet, Briefly" cut (Owner 2026-11-06); tube replacement every 6 to 12 months (Owner 2026-11-06).
- Open: lighting hours and the Arcadia chart (owner review); the UVB distances and pale-morph UVI have no recorded source.

## Owner decisions, 2026-11-06 (late)

- Mice: the guides and care package book do not mention mice at all (owner).
  The feeding guide line was cut; the book rows are queued for removal in
  FIX_PACKAGES.md.

## Hub check, 2026-11-06

Hub fields compared with the guides only (no sources opened). Changed: funFact
follows the health guide ("Unlike many geckos", blink and close their eyes to
sleep); Heat row follows the temperature guide (on/off probe thermostat, probe
on the warm hide floor, overhead heat works but belly heat preferred); buy list
infrared gun reads the warm hide floor; vetLine asks for the fresh fecal and
the cryptosporidiosis PCR by name; Handling row adds the hatchling readiness
line.

## Kept without a source (owner review)

The open items are also triaged in research/OWNER_REVIEW.md (2026-11-06), with a suggested decision for each.

- Cost guide, after The Vet Desk and Reptile Direct came out (2026-11-06): $20 to $45 at a pet store; $50 to $150 from a breeder; popular morphs $75 to $300 and rare morphs $500 to $3,500 or more; $35 to $100 for live shipping; an annual exam at $85 to $105; sick or emergency visits $100 to $800 or more. Kept as written.
- Handling: "A gecko barking isn't necessarily distress, since it can just mean it's hungry". No source in the guide states it. Kept as written.
- Health: "Most reptiles brought to a vet for egg binding are single females that have never met a male". Strong statistical claim with no source shown. Kept as written.
- Health: "A mature female can lay four to five clutches in a season, about a month apart". Kept as written.
- Tank setup: lights "14 hours a day in summer and cut back to 12 hours in winter". No cited source states it. Kept as written.
- Tank setup: "Arcadia's own chart puts this 24-inch, 14-watt tube at a higher UV index than the short 12-inch 7% kit at the same distance (1.0 against 0.65 at 12 inches)". Named inline as a manufacturer spec, but no Arcadia page is in Sources; desktop check of the chart and add it.
- Handling FunFact source (Higham and Russell, Biology Letters): desktop check of the citation.
- Cost guide morphs (owner, 2026-11-06): the guide gives price bands only (basic, popular, rare designer) and names no morphs, with no MorphMarket entry in Sources. Same as the crested gecko: keep the bands; a named-morph section with MorphMarket prices is deferred to a later date.
- 2026-11-06: The single-female egg binding line is sourced: VCA dystocia (L11), already in the health Sources, states it ('Most of the time, pet reptiles brought to a veterinary hospital for examination of dystocia are single females', verbatim in research/CRESTED_GECKO_RESEARCH.md, C4). The four to five clutches line stays unsourced; VCA's page as read gives no clutch count. Desktop links: Higham and Russell, doi 10.1098/rsbl.2009.0577 (published online 2009; the print volume is 2010); the Arcadia ShadeDweller 7% ProT5 chart is found only on retailer pages (0.65 UVI at 300 mm), not yet on an Arcadia page.
- 2026-11-06: Higham and Russell (L9) confirmed from the owner's desktop PDF of the abstract: Biol. Lett. (2010) 6(1): 70-73, doi 10.1098/rsbl.2009.0577, published online 9 Sep 2009; 'extremely complex movement patterns for up to 30 min following autotomy, including acrobatic flips up to 3 cm in height'; keyword 'predator avoidance'. Handling FunFact rewritten (owner): was 'keep twitching on its own for a minute or more... a leftover distraction mechanism'; now 'keep moving on its own for up to 30 minutes, swinging, lunging and even flipping as high as about an inch (3 cm)'.
- 2026-11-06: Yarmouth 'The Gravid Gecko' (L13) read verbatim from the owner's desktop PDF. It backs the gravid signs ('bulging abdomen', weight increase, 'increased digging or restlessness', lethargy, 'decreased appetite'), the lay box ('The ideal option is sphagnum moss', damp not waterlogged, 'humidity level of 70-80%', a quiet secure part of the enclosure, introduced 'as soon as you notice signs of gravidity'), calcium and vitamin support, and a post-laying vet check. It gives no clutch count or spacing, so 'four to five clutches in a season, about a month apart' stays on the owner review list. It also gives the lay box at the enclosure's range 'ideally between 77-86°F' and incubation at 78-92°F, 75-100% humidity (not used by the guide).
