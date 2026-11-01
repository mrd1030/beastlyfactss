# Platy (Xiphophorus maculatus, X. variatus and trade forms): Research Notes

Researched 2026-11-01. Research only: no article copy here. Every claim below comes from a page opened and read in this session unless it is listed under "Seen but not opened" or marked "search extract". Quotes are short extracts. Pages fetched with curl and stripped to text (FishBase, Seriously Fish, Practical Fishkeeping, Fishkeeper) and PDFs read with pdftotext (UF/IFAS, Siciliano) were read directly ("verbatim"). Everything else came back through the fetch tool, which paraphrases, so only its quoted fragments are quotations. Where a source used an en dash in a range, the range is written here with "to", because this file carries no em or en dashes. Quoted text keeps the source's own spelling (Seriously Fish, Practical Fishkeeping and Fishkeeper are British).

Purpose: check every factual claim and figure in the platy pages so a later pass can correct them in one go. Builds on LIVEBEARER_GROUP_RESEARCH.md (its ids S1 to S11 are cited as "group S#" where reused; platy ids here are P1 onward). Format follows NEON_TETRA_RESEARCH.md, CARDINAL_TETRA_RESEARCH.md and the finished GUPPY_RESEARCH.md and MOLLY_RESEARCH.md.

Pages checked: content/guides/platy-{cost,tank-setup,feeding,handling,health-issues,enrichment}-guide.mdx (all six exist; no other platy-*.mdx guide exists, the-platypus-natures-most-wonderfully-bizarre-mammal.mdx is about the platypus), the platy hub in src/lib/data/guides/fish.js (`id: "platy"`, from line 1343; the livebearer group hub's Tank, Temperature, Water and Size row at line 54 and its Ich row at line 77), the encyclopedia entry in src/lib/data/encyclopedia/fish.js (line 185), and the platy lines of content/guides/platy-swordtail-molly-overview.mdx (lines 49 to 53, plus the intro, FAQ and FunFact; the overview has no Sources block). One related fact, src/lib/data/facts.js id 301 ("Lab Stars Since the 1920s"), repeats the melanoma history and is noted where it matters.

Verdict labels: SUPPORTED, PARTLY (supported with a caveat or only for one of the two species), CONTRADICTED, UNSUPPORTED (no source found that states it).

Scoping fact that matters for every number: "platy" on these pages covers two wild species (the southern platy, X. maculatus, and the variable or variatus platy, X. variatus) plus trade forms that are often hybrids with each other and with the swordtail. FishBase, Seriously Fish and Fishkeeper give different numbers for the two species (temperature, hardness, adult size, gestation), and the guides use one set for both. Where the species differ, both values are given.

---

## Source list and tier

Strongest first.

| # | Source | Tier | URL |
|---|--------|------|-----|
| P1 | Kallman KD, Borkoski V (1978). "A Sex-Linked Gene Controlling the Onset of Sexual Maturity in Female and Male Platyfish (Xiphophorus maculatus), Fecundity in Females and Adult Size in Males." Genetics (volume and pages not shown in the extract). Abstract via fetch tool | Peer-reviewed | https://pmc.ncbi.nlm.nih.gov/articles/PMC1213833/ |
| P2 | Siciliano MJ (1972). "Evidence for a spontaneous ovarian cycle in fish of the genus Xiphophorus." Biological Bulletin 142:480-488 (PDF read directly; it cites Van Oordt 1928 and Vallowe 1953) | Peer-reviewed | https://archive.org/download/biostor-9057/biostor-9057.pdf |
| P3 | Schartl M, Lu Y (2024). "Validity of Xiphophorus fish as models for human disease." Disease Models & Mechanisms 17(1):dmm050382 (first 100,000 of 227,434 characters read through the fetch tool) | Peer-reviewed | https://journals.biologists.com/dmm/article/17/1/dmm050382/342684/Validity-of-Xiphophorus-fish-as-models-for-human |
| P4 | Plath M, Makowicz AM, Schlupp I, Tobler M (2007). "Sexual harassment in live-bearing fishes (Poeciliidae): comparing courting and noncourting species." Behavioral Ecology 18(4):680-688 (abstract via fetch tool, two records; the full-text PDF returned 403) | Peer-reviewed | https://academic.oup.com/beheco/article/18/4/680/229404 , https://econpapers.repec.org/RePEc:oup:beheco:v:18:y:2007:i:4:p:680-688 |
| P5 | Prodocimo V, Freire CA (2001). Critical thermal maxima and minima of the platyfish Xiphophorus maculatus. Revista Brasileira de Zoologia (journal attribution per search extract; one later paper cites it under another journal). The SciELO page returned 403 to curl and to the fetch tool, so the abstract was read only as a search-result extract | Peer-reviewed (abstract, search extract only) | https://scielo.br/j/rbzool/a/43qK6cRWw4bc4zSSXtsm5VD/?lang=en |
| P6 | Basolo AL (2006). "Genetic linkage and color polymorphism in the southern platyfish (Xiphophorus maculatus): a model system for studies of color pattern evolution." Zebrafish 3(1):65-83 (PubMed abstract) | Peer-reviewed | https://pubmed.ncbi.nlm.nih.gov/18248247/ |
| P7 | "The Colorful Sex Chromosomes of Teleost Fish." PMC5977173 (authors and journal not captured by the extract; first 100,000 of 153,811 characters read) | Peer-reviewed review (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5977173 |
| P8 | Riesch R et al. (2022). "Resource competition explains rare cannibalism in the wild in livebearing fishes." Ecology and Evolution 12:e8872 (first 100,000 of 223,636 characters read; 17 species, none Xiphophorus) | Peer-reviewed | https://pmc.ncbi.nlm.nih.gov/articles/PMC9109233/ |
| P9 | USGS Nonindigenous Aquatic Species: Southern Platyfish (Xiphophorus maculatus), species ID 872 | .gov | https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=872 |
| P10 | UF/IFAS Extension CIR920 (EDIS FA006), Francis-Floyd R, Yanong RP, Pouder DB: "Ichthyophthirius multifiliis (White Spot) Infections in Fish" (PDF read directly) | University extension | https://ask.ifas.ufl.edu/publication/FA006/pdf |
| P11 | Merck Veterinary Manual: "Parasitic Diseases of Fish" (ich section) | Veterinary reference | https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/parasitic-diseases-of-fish |
| P12 | Merck Veterinary Manual: "Disorders and Diseases of Fish" (credited elsewhere to University of Florida veterinarians). The guide cites the /all-other-pets/fish/ path | Veterinary reference | https://www.merckvetmanual.com/all-other-pets/fish/disorders-and-diseases-of-fish |
| P13 | Merck Veterinary Manual: "Bacterial Diseases of Fish" | Veterinary reference | https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/bacterial-diseases-of-fish |
| P14 | Merck Veterinary Manual: "Nutritional Diseases of Fish" | Veterinary reference | https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/nutritional-diseases-of-fish |
| P15 | VCA Animal Hospitals: Fish White Spot Disease (Ich) (already cited on the site) | Veterinary | https://vcahospitals.com/know-your-pet/fish-white-spot-disease-ich |
| P16 | Texas State University, Xiphophorus Genetic Stock Center: "History of the XGSC" (group S7; reread with the fetch tool) | University | https://imls.txst.edu/history.html |
| P17 | Reavill D, "Generalized Edema of a Lionhead Goldfish (Carassius auratus)." IAAAM Archive, VIN poster (undated on the page, listed under 1994). One goldfish case report, used only for the sentence about what "dropsy" means | Veterinary case report | https://vin.com/doc/?id=3864135 |
| P18 | FishBase: Xiphophorus maculatus, Southern platyfish (page HTML read directly) | Museum/university-tier database | https://www.fishbase.se/summary/Xiphophorus-maculatus.html |
| P19 | FishBase: Xiphophorus variatus, Variable platyfish (page HTML read directly) | Museum/university-tier database | https://www.fishbase.se/summary/Xiphophorus-variatus.html |
| P20 | Seriously Fish: Xiphophorus maculatus (page HTML read directly) | Established husbandry reference | https://www.seriouslyfish.com/species/xiphophorus-maculatus/ |
| P21 | Seriously Fish: Xiphophorus variatus (page HTML read directly) | Established husbandry reference | https://www.seriouslyfish.com/species/xiphophorus-variatus/ |
| P22 | Practical Fishkeeping: "How to breed livebearing fish" (the guide already cites it; no byline or date on the page; page HTML read directly) | Fishkeeping magazine | https://www.practicalfishkeeping.co.uk/features/articles/how-to-breed-livebearing-fish |
| P23 | Practical Fishkeeping: "Quick guide to livebearers" (no byline; page HTML read directly) | Fishkeeping magazine | https://www.practicalfishkeeping.co.uk/features/quick-guide-to-livebearers/ |
| P24 | Practical Fishkeeping: "How to Cycle a Fish Tank: The Complete Guide" (no byline; page HTML read directly) | Fishkeeping magazine | https://www.practicalfishkeeping.co.uk/features/how-to-cycle-a-fish-tank-the-complete-guide/ |
| P25 | Fishkeeper (UK): Platy species profile (retailer-published husbandry text; no price taken; page HTML read directly) | Husbandry reference | https://www.fishkeeper.co.uk/fish/freshwater/livebearers/platy- |

Retail price observations (not sources, never cite): ThatPetPlace "Live Platies" listing page (opened with the fetch tool 2026-11-01). Two search-result extracts: PetSmart and LiveAquaria. See section 12.

Seen but not opened (nothing cited from them): the Yanar et al. 2021 Turkish Journal of Fisheries and Aquatic Sciences thermal tolerance paper on platy and swordtail (only a search extract; its English abstract appears to swap species labels, so do not use it); the 2014 Naturwissenschaften paper on Poeciliopsis (search extract says Xiphophorus is among genera without superfetating species, citing Reznick and Miles; the page is behind a login); Wiley and Rhodes University pages (403) for the swordtail cannibalism thesis; Nature and BHL pages (login or 403); IUCN Red List pages (not tried, status taken via FishBase); AnAge (no entry for Xiphophorus maculatus, the page says "AnAge entry not found"); the Springer Kallman 1975 handbook chapter (seen only as a citation).

---

## 1. Identity, range, habitat, conservation

1.1 Names and classification
- FishBase: Xiphophorus maculatus (Gunther, 1866), Southern platyfish; Poeciliidae. Greek xiphos (sword) plus pherein (to carry). (P18)
- Seriously Fish (verbatim): "Xiphophorus : from the Ancient Greek ... meaning 'bearing', in allusion to the presence of a gonopodium in males of this genus." and "maculatus : from the Latin for spotted, a reference to the abdominal spot." (P20) So "sword bearer" in the overview is SUPPORTED, and the genus name refers to the gonopodium, not the swordtail's sword (the swordtail guides should not get that wrong).
- Seriously Fish: "X. variatus ... from the Latin varius, meaning variegated". (P21)
- Fishkeeper: synonyms "Poecilia maculata, Platypoecilus maculatus". (P25) The XGSC history page says platyfish "were assigned to Platypoecilus" (group S7).

1.2 Range
- FishBase X. maculatus (verbatim): "North and Central America: Ciudad Veracruz, Mexico to northern Belize." (P18) USGS: "Atlantic Slope of Middle America from Ciudad Veracruz, Mexico, to Belize". (P9) Seriously Fish: "Atlantic coastal plain of Mexico, Nicaragua, Guatemala, Belize". (P20)
- FishBase X. variatus: "North America: endemic to Mexico from southern Tamaulipas to northern Veracruz." (P19) Seriously Fish: "Originally endemic to the Atlantic slope of Mexico but introduced or feral populations now exist in several other countries, including Costa Rica, Colombia, the USA, Hawaii, Singapore and Hong Kong." (P21)
- Verdict, encyclopedia origin ("Atlantic coastal plain of Mexico, Belize, and Guatemala (X. variatus more localized to northeastern Mexico)"): SUPPORTED. Guatemala and Nicaragua come from Seriously Fish only; FishBase and USGS stop at Belize. The variatus clause matches FishBase.

1.3 Habitat
- FishBase X. maculatus (verbatim): "Adults occur in warm springs, canals and ditches with typically slow-moving water, silt bottoms and weedy banks ... Also inhabit creeks and swamps". (P18) Seriously Fish X. maculatus: "It can be found in streams and rivers." (P20) Seriously Fish X. variatus: "Typically found in shallow, heavily vegetated streams, ponds, swamps, canals and ditches." (P21) Fishkeeper: "warm springs, canals and ditches with slow moving water and abundant plant growth" and "normally in areas where the local geology means that conditions are hard and alkaline". (P25)
- Verdict: encyclopedia habitat ("Slow-moving, densely vegetated canals, ditches, ponds, and warm springs over muddy substrate") and the tank guide FunFact ("warm springs, ditches, and slow-moving canals ... mineral-rich rather than soft") are SUPPORTED. Note that Seriously Fish also lists streams and rivers, so "slow-moving" is FishBase's wording for adults, not the whole range. The mineral-rich point is supported by Fishkeeper's geology sentence and the Practical Fishkeeping line that poeciliids are "generally found in moderately hard to hard water of about 10 to 30 GH". (P23)

1.4 Conservation
- FishBase (verbatim): X. maculatus "Data deficient (DD); Date assessed: 03 April 2018"; X. variatus "Least Concern (LC); Date assessed: 28 March 2018". (P18, P19) The IUCN pages were not opened, so this is "via FishBase".
- Verdict, encyclopedia conservation line: SUPPORTED via FishBase.

1.5 Introduced populations
- USGS (fetch tool, quoted fragments): the species is "locally established, or possibly established locally, in several states, including Florida"; the profile lists Hawaii (observations from 1922 to 2005 on Hawaii, Maui and Oahu); "Southern platys, and other introduced poeciliids, have been implicated in the decline of native damselflies on Oahu, Hawaii."; release is "Probably the result of fish farm or aquarium releases." (P9)
- Verdict, handling guide ("Released platies have established wild populations in several US states, including Florida and Hawaii, and on Oahu, platies and other introduced livebearers have been implicated in the decline of native damselflies"): SUPPORTED. USGS's own hedge is "locally established, or possibly established locally", so "established" is slightly firm for a state list. Seriously Fish adds that X. variatus is feral in the USA, Hawaii, Costa Rica and elsewhere. (P21)

## 2. Size

- Seriously Fish (verbatim): X. maculatus and X. variatus both "Max size 50 mm SL 2.0 in SL". (P20, P21)
- FishBase X. maculatus (verbatim): "Max length : 4.0 cm TL male/unsexed; 6.0 cm TL (female); common length : 2.4 cm TL male/unsexed". FishBase X. variatus: "Max length : 7.0 cm TL male/unsexed; common length : 3.9 cm TL". (P18, P19)
- USGS: "Females to about 6 cm TL; males to 4 cm TL." (P9) Fishkeeper: "Maximum Size 6cm (2.36")". (P25) Fishkeeper and Practical Fishkeeping both say females are the larger sex ("females grow larger than males", P22).
- Conversions: 4 cm = 1.6 in, 6 cm = 2.4 in, 7 cm = 2.8 in; 3 inches is 7.6 cm.
- Verdict: "Adults run about 2 to 3 inches, with males the smaller sex" (handling guide line 54), hub "Adult size: 2 to 3 inches (5 to 7.5 cm), females larger than males" (fish.js line 1394), encyclopedia adultSize "2-3 inches (5-7.5 cm); females larger than males", livebearer hub row "2 to 3 in" (fish.js line 54) and overview "At 2 to 3 inches": PARTLY. Females larger than males is SUPPORTED. The 3 inch top end is above every source for X. maculatus (6 cm, 2.4 in) and is reached only by X. variatus (7 cm, 2.8 in). Defensible wording: about 1.5 to 2.5 inches (4 to 6 cm) for the southern platy, up to about 2.8 inches (7 cm) for the variatus.

## 3. Lifespan

- No lifespan in FishBase, Seriously Fish, USGS or Fishkeeper. AnAge has no entry for Xiphophorus maculatus. A search for a laboratory survival or aging study on X. maculatus returned only hobby pages and a 2022 diet study that tracked survival to six months. No peer-reviewed or institutional lifespan was found.
- Verdict: cost guide FAQ and body ("2 to 4 years, with 3 to 4 achievable ... excellent water pushing a fish toward 5"), hub first-week row and the overview intro ("platies a little less at 2 to 4"): UNSUPPORTED. The cost guide's link for the figure goes to a retailer blog (Aquarium Co-Op). Encyclopedia wildLifespan "3-5 years": UNSUPPORTED; it also sits above the captive figure the guides give, which is the reverse of what a wild-versus-captive comparison usually shows. Suggested honest wording: "no authoritative figure; hobby sources say 2 to 4 years".

## 4. Tank, water, equipment

4.1 Tank size and footprint
- Seriously Fish (verbatim, both species): "Aquarium base 60 × 30 cm 24 × 12 in Volume ~54 litres ~14 US gal". FishBase (both species): "Aquarium keeping: minimum aquarium size 60 cm". (P20, P21, P18, P19)
- Verdict: the guides' "minimum base footprint of 24 by 12 inches" is SUPPORTED, and the observation that a standard 10 gallon (20 by 10) misses it and a 20 long (30 by 12) meets it is arithmetic on a SUPPORTED figure. "A real 10 gallons ... holds a small group of about five": UNSUPPORTED as a stocking number (no source gives a group size for a given volume; Seriously Fish's own volume is about 14 US gal). The hub row and tank guide are already honest about the footprint.
- Lid because "platies are capable jumpers": no source found. UNSUPPORTED, low risk.

4.2 Temperature
- Seriously Fish (verbatim, both species): "Temp 20-26 °C 68-79 °F". FishBase: X. maculatus "Tropical; 18°C - 25°C", X. variatus "Subtropical; 15°C - 25°C". Fishkeeper: "20-25°C". (P20, P21, P18, P19, P25) Conversions: 18 to 25 °C is 64 to 77°F; 15 to 25 °C is 59 to 77°F; 20 to 25 °C is 68 to 77°F.
- Verdict: "68 to 79°F, with the mid-70s the usual target": SUPPORTED (matches Seriously Fish exactly; FishBase and Fishkeeper top out at 77°F). "Variatus-line platies tolerate the cooler end better than most tropical fish" and "the variatus the better pick for a room-temperature tank": PARTLY. FishBase gives variatus a lower floor (15 vs 18 °C) and calls it subtropical; Seriously Fish gives both species the same 20 to 26 °C. "Than most tropical fish" is not stated by any source.
- "Avoid swings larger than about 2°F in 24 hours": UNSUPPORTED. No opened source gives a swing threshold for platies (the molly file reached the same conclusion for the same sentence).
- Thermal limits, lab (P5, search extract of the abstract): fish acclimated seven days at 15, 20, 25 and 30 °C had mean CTmax of 39.8, 39.8, 40.4 and 41.5 °C and CTmin of 9.6, 12.8, 13.1 and 16.0 °C; the authors describe the species as "more heat- than cold- tolerant". 30 °C is 86°F. See Contradictions item 7.

4.3 pH and hardness
- Seriously Fish (verbatim): X. maculatus "pH 7.0-8.2, Hardness 10-30 dGH"; X. variatus "pH 7.0-8.2, Hardness 14-30 dGH"; both "must be maintained in moderately hard or harder water; it will not thrive in soft, acidic water." FishBase (both): "pH range: 7.0 - 8.0; dH range: 9 - 19". Fishkeeper: "pH: 7.0-8.0, dH: 8-20 degrees". Practical Fishkeeping: "The platy is best maintained in a neutral to slightly alkaline (pH 7.0-8.2), medium-hard set-up", and poeciliids generally "moderately hard to hard water of about 10-30 GH". (P20, P21, P18, P19, P25, P23)
- Verdict: "pH 7.0 to 8.2" SUPPORTED (Seriously Fish, Practical Fishkeeping). "10 to 30 dGH" SUPPORTED for X. maculatus (variatus 14 to 30 per Seriously Fish; FishBase and Fishkeeper run lower, 8 to 20). "Tolerate 6.8 to 8.5": UNSUPPORTED (no opened source states either end; the nearest ranges end at 8.0 and 8.2). "Won't thrive in very soft, acidic water": SUPPORTED, near-verbatim.
- Crushed coral or a buffering product for soft tap water: no source opened; reasonable, UNSUPPORTED.

4.4 Salt
- Practical Fishkeeping (verbatim): "Guppies, platies and Swordtails do not generally require salt as they tend to be found in pure freshwater habitats." (P23) FishBase lists X. maculatus as "Freshwater" only. The guides do not recommend maintenance salt, so no conflict. Salt appears only in the ich treatment (section 10).

4.5 Filtration, substrate, lighting, plants
- Seriously Fish (verbatim): "Not critical but this species does appreciate a planted aquarium, and will be seen at its best if kept in this type of setup." and "Areas of dense planting will also help." (P20) Supports planting.
- Sponge filter safer for fry: Practical Fishkeeping (verbatim, a fry tank): "use an air-powered sponge filter, as this gentle filtration won't suck up or damage any tiny fish." (P22) SUPPORTED in kind. Seriously Fish's equipment note recommends "a turnover of four to five times the volume an hour", a more active figure than "platies don't need aggressive flow" implies. PARTLY; gentle flow for platies specifically is not stated by any source.
- "Darker substrate makes coloring stand out", "avoid sharp or coarse gravel", "8 to 10 hour LED cycle", "fine gravel or sand both work": no source found. UNSUPPORTED (matches the guppy and molly findings).

4.6 Cycling
- Practical Fishkeeping (verbatim): "Most aquariums can often take four to six weeks to cycle fully"; "We typically recommend aiming for a concentration of 3ppm ammonia"; "Continue to test and dose ammonia until the 3ppm of ammonia becomes zero within 24 hours." (P24) The tank guide's 4 to 6 weeks, 3 ppm and "zero within 24 hours" are SUPPORTED. "Less with a bottled bacteria product": PARTLY (the page says bottled bacteria "influence the cycle length" but does not say shorter). The page has no byline or date.

## 5. Group size, sex ratio, temperament, tankmates

- Seriously Fish (verbatim): "Very peaceful and can be kept with most community species. They exhibit none of the aggression of some swordtails and mollies, and even males tolerate one another." and "When males and females are to be housed in the same tank, there should be more females to spread out the attention of the males which can be relentless." and (reproduction) "We recommend that several females should be kept to every male in order to dissipate vigorous harassment by males." (P20; the variatus page repeats the last two) Fishkeeper: "males can be persistent, and these sociable fish are best kept in groups where males are outnumbered by females" and "males will display and pursue their rivals and are best kept in odd numbers in small aquaria". (P25)
- Verdict, "two to three females per male": PARTLY. "More females", "several females to every male" and "outnumbered" are all SUPPORTED; the numeral 2 to 3 is the guides' own (Seriously Fish says "several"). The feeding guide's "the breeders' standard" is UNSUPPORTED.
- "Peaceful": SUPPORTED. "Peaceful enough for almost any community of similar-sized fish: cory catfish, bristlenose plecos, rainbowfish, small rasboras, and snails": no source lists tankmates by name; Seriously Fish says "most community species". UNSUPPORTED as a list, low risk.
- Enrichment guide, "Platy males are generally less relentless than guppy males" (also in the FAQ): UNSUPPORTED, and Seriously Fish uses the word "relentless" for platy males. No source compares platy and guppy persistence. See Contradictions item 9.
- "A group of five or more", "do better in groups", "do not keep a pair": UNSUPPORTED for platies. No group-size welfare study covers platies (Saxby et al. 2010, found in the neon file, tested guppies, neon tetras, zebrafish and white clouds, not platies). Fishkeeper says "sociable" and "odd numbers". The practical rule (more females than males) is supported; the number five is not.
- "A platy sharing a tank with mollies gives ground toward them ... the shared tank runs at about 7.5 to 8.2": reasoning from SUPPORTED ranges (platy 7.0 to 8.2; the molly file's 7.5 to 8.5). Soft-water tetras pulling the other way: SUPPORTED in kind by Seriously Fish's "will not thrive in soft, acidic water" and Practical Fishkeeping's warning about catfish and loaches in hard water. (P23)

## 6. Diet and feeding

- FishBase (verbatim): "They feed on worms, crustaceans, insects and plant matter". Trophic level "3.2 ±0.40 se; based on food items". Seriously Fish X. maculatus: "Unfussy and will accept most foods, whether frozen, live or dried." X. variatus: "Omnivorous by nature, feeding on a variety of zoobenthos and detritus in the wild." (P18, P20, P21)
- Verdict: "true omnivores", "unfussy", encyclopedia wildDiet ("Small crustaceans, insects, annelid worms, algae, and plant matter"): SUPPORTED except "algae", which FishBase does not list (Seriously Fish's X. variatus habitat line mentions algae and phytoplankton, not diet). PARTLY on that one word.
- Merck Nutritional Diseases: "Most aquarium fish should be fed at least daily"; "Ideally, adult fish should be fed 3% of their body weight daily for maintenance."; "Feeding a wide variety of feeds is one way to try to meet the nutritional requirements."; "Flaked feeds may be too large for a small-mouthed fish to easily ingest. Such feeds can be crushed to enable easy ingestion."; "Fry and fingerlings can be fed up to 5% of their body weight daily." (P14, fetch tool)
- Verdict, adults "once or twice a day": SUPPORTED as consistent with "at least daily" (no source names platy frequency). "Variety beats one food": SUPPORTED (Merck). "Feed only what's cleared within a minute or two": UNSUPPORTED (no source gives a time).
- Fry: Seriously Fish (verbatim): "The fry are quite large and will accept brine shrimp nauplii or powdered flake from birth. They grow very quickly if fed 2-3 times per day." Practical Fishkeeping: "Once the fry are born they will be immediately ready to eat"; "Feed three times a day if you can". (P20, P22) Verdict: "crushed flake or newly hatched brine shrimp immediately, no infusoria" SUPPORTED. "3 to 4 times a day for roughly the first two months" PARTLY: the sources say 2 to 3 and 3 times, and give no duration.
- Juveniles "two to three smaller meals a day": UNSUPPORTED (Seriously Fish's 2 to 3 is for fry).
- Platies "need less vegetable than mollies" (hub row, feeding guide, FAQ), "platies take more plant matter than guppies do" (enrichment guide), "vegetables ... support better color and digestion": UNSUPPORTED. No opened source compares plant content across the three species, and none ties vegetables to platy color. The hub's own retired-claims comment shows this has flip-flopped before.
- "A long stringy trail of waste after a meal means the portion was too large" (feeding FunFact, FAQ, hub row, "well-documented sign"): UNSUPPORTED. No source opened mentions it; "well-documented" is not backed.
- "Overfeeding drives constipation and swim bladder problems directly", "platies keep eating past the point of being full": UNSUPPORTED at any strong tier (Merck Nutritional Diseases does not address overfeeding; see section 10).
- "Cold water slows metabolism": PARTLY. Merck Disorders: fish are cold-blooded, "their body temperature is close to and fluctuates with the temperature of their environment". (P12) "Female close to giving birth may eat less": UNSUPPORTED.

## 7. Breeding: gestation, brood size, interval, sperm storage, fry

7.1 Gestation and brood interval
- FishBase X. maculatus: "After 24 to 30 days gestation, 20 to 80 young are born (Ref 7020)." X. variatus: "After 24 days gestation, up to 100 young are born." (P18, P19)
- Seriously Fish (verbatim): X. maculatus "Gestation takes around 4-6 weeks and large broods of up to 80 fry are not uncommon." X. variatus "Gestation takes around 4-7 weeks and large broods of over 100 fry are not uncommon." (P20, P21)
- Siciliano 1972 (verbatim from the PDF): Vallowe (1953) "calculated a mean interval of 33.5 days between broods of Xiphophorus maculatus (platyfish)". In Siciliano's own artificial-insemination work "Almost all broods were dropped from 23 to 50 days following artificial insemination or the birth of a previous brood", the mean for those broods 36.0 days (subsequent broods 35.1). (P2)
- Practical Fishkeeping (verbatim): "The most commonly bred livebearer, the Platy, can release young every thirty days, and at full potential can produce up to 90 young per brood." (P22)
- Verdict: "Gestation about 4 to 6 weeks" SUPPORTED by Seriously Fish; FishBase's 24 to 30 days (about 3.5 to 4.3 weeks) is shorter, so "4 to 6 weeks" runs a little long at the top; the measured brood interval is about 30 to 36 days (about 4.5 to 5 weeks). "Roughly every 4 to 6 weeks" is PARTLY: supported as a loose span, with the data clustering near 5 weeks. "Roughly monthly" (enrichment) is SUPPORTED (Practical Fishkeeping, 30 days).

7.2 Brood size
- Verdict: "documented range up to 80" SUPPORTED (FishBase 20 to 80; Seriously Fish up to 80; Practical Fishkeeping says up to 90; variatus over 100). "A typical brood runs 20 to 50 fry": UNSUPPORTED as a "typical" figure; FishBase gives 20 to 80 and no source gives 50 as the norm. The hub's comment says it retired "20 to 80 per birth" as quoting the extreme, but FishBase's lower bound is 20 and its upper bound 80, so "20 to 80" is a range, not an extreme. Reconsider. Brood size also scales with female size (Practical Fishkeeping, general livebearers: "parent size plays a big role in numbers produced").

7.3 Sperm storage
- Siciliano 1972 (verbatim): "After insemination by a male, sperm usually continue to survive in the folds of the female ovarian tissue and as many as 8 successive broods can be produced by one insemination (Van Oordt, 1928)." Practical Fishkeeping: "females can store sperm after mating, so if you mate her once she could produce three batches of fry from the same original mating." (P2, P22)
- Verdict: "store sperm ... for months, one mating fertilizes several broods" SUPPORTED. Eight broods at about 35 days each is about 9 months, but that is a 1928 secondary citation, so keep "months". The guides say "folds of their oviduct"; the paper says "folds of the female ovarian tissue". Minor wording PARTLY.
- "Without a male present": the all-female group bought from a mixed tank (hub "Fry are coming" row) is SUPPORTED by the same finding.

7.4 Superfetation
- Handling guide seoDescription (line 18) and description (line 19): "how they breed via superfetation" and "the superfetation-driven breeding biology". Siciliano shows platy broods dropped in discrete cycles of about 35 days (P2). A search extract of a 2014 Poeciliopsis paper says Xiphophorus is among genera "not including superfoetating species" (citing Reznick and Miles); the page was not opened. The group file also found no source saying any of the four species superfetates. Verdict: UNSUPPORTED, and likely CONTRADICTED. It appears only in metadata (the body text does not use the word). See Contradictions item 4.

7.5 Fry and parental care
- Seriously Fish (verbatim, both species): "The adult fish will not eat their young but the best method of raising them is still to remove the gravid female to a separate tank and allow her to give birth there before returning her to the main aquarium." (P20, P21)
- Practical Fishkeeping: a breeding trap "prevents her eating them"; without protection "the fry may survive predation without help from you"; "chased and eaten by other larger fish". The page is about livebearers in general. (P22)
- Riesch et al. 2022 (fetch tool): "We found cannibalism to be quite rare in the wild"; "cannibalism in captive settings can be much more frequent". The 17 species studied were Gambusia, Heterophallus milleri and Poecilia reticulata, none Xiphophorus. (P8)
- Verdict: "Platy parents provide no care after birth" SUPPORTED. "Adults will readily eat their own fry given the chance" (handling line 68) and tank guide "adults will eat them given the chance" (line 105): CONTRADICTED for platies by the one platy-specific husbandry reference, uncertain otherwise. See Contradictions item 2. "Dense planting gives fry somewhere to hide": SUPPORTED (Seriously Fish, Practical Fishkeeping).

7.6 Maturity and sexing
- Kallman and Borkoski (fetch tool, quoted fragments): "P1P1 males become mature at eight weeks and 21 mm"; "P2P2 and P3P3 males between eleven and 13.5 weeks and 25 to 29 mm"; "P4P4 males at 25 weeks and 37 mm"; "P2P5 males at 28 weeks and 38 mm"; females "would mature as early as eleven weeks, provided they had attained at least 29 mm", and "For P5P5 females, which become mature between 34 and 73 weeks of age". (P1) FishBase: aquarium varieties "attain sexual maturity after 3-4 months". (P18)
- Verdict, handling guide ("anywhere from about two to six and a half months ... eight weeks at around 21mm to 28 weeks at around 38mm"): SUPPORTED for males (8 weeks is 1.8 months; 28 weeks is 6.5 months). Female maturity spans a wider range (11 to 73 weeks) than the "for this species" framing implies. PARTLY. "The earliest male platies mature at about eight weeks": SUPPORTED. "A young fish with a fan-shaped anal fin at two months can still be a male": SUPPORTED by the same data.
- Gonopodium and fan-shaped anal fin: Fishkeeper (verbatim): "Males possess an obvious spike-shaped gonopodium, females retain a fan-shaped anal fin." Seriously Fish: "Males are the smaller sex and possess a gonopodium." (P25, P20) SUPPORTED.
- Gravid spot: Practical Fishkeeping (verbatim): "the black mark visible on the bellies of pregnant females. It's most visible on olive-coloured, wild-type fish, though it may even show on bright red or orange ones too ... becomes most visible late in the pregnancy". (P22) The handling guide's "clearest on olive, wild-type fish" is SUPPORTED. "Near the vent" (FAQ, hub) is not in Practical Fishkeeping ("on the bellies"). PARTLY.
- "Males-only group for a breeding-free tank": SUPPORTED (Seriously Fish: "If you're not interested in breeding them, buy only male fish.").

## 8. Hybridization and color history

8.1 Hybrids
- Seriously Fish (verbatim): X. maculatus "Some of these are produced by crossbreeding with X. helleri or X. variatus." X. variatus "Some of these are produced by crossbreeding with X. helleri or X. maculatus." and for wild fish "care must be taken to avoid crossbreeding with domestic forms". (P20, P21)
- Fishkeeper (verbatim): "Their ability to hybridise with closely related species such as Swordtails, as well as Variatus platies, made the transfer of characteristics possible and now there's a huge overlap between all of these fishes ... it may be best to view all but the most primitive of breeds as Xiphophorus hybrids." Also "found its way to Europe around 1900 and was soon bred into a range of colour forms that are remarkably different from their drabber wild ancestors." (P25)
- Practical Fishkeeping: platy "hybridises easily with congeners, which has led to the production of many hybrids differing in colour and finnage". (P23)
- P3: "Almost a century ago, it was discovered that certain platyfish and swordtail hybrids" developed melanoma. XGSC: Gordon's hybrids "included platyfish (X. maculatus) crossed with swordtails (X. helleri)" (group S7).
- Verdict: platy and swordtail interbreed and many trade lines carry hybrid ancestry: SUPPORTED. "Almost every platy in the trade is a hybrid of two species" (enrichment FunFact, line 74): PARTLY. Fishkeeper's "all but the most primitive of breeds" is the closest support, but it speaks of hybrid ancestry across up to three species, not two, and it is a retailer-published profile; Seriously Fish says only "some". "Bred for color for over a century" is SUPPORTED by Fishkeeper (Europe around 1900), weakly. "Crossed for almost a century" (overview): SUPPORTED by P3.

8.2 Wild color
- Basolo 2006 abstract (fetch tool, quoted fragment): "The southern platyfish, Xiphophorus maculatus, represents one of the most extreme examples of color pattern polymorphism." (P6) The "Colorful Sex Chromosomes" review: "Many Xiphophorus species are polymorphic with black pigment patterns", patterns include "pepper-and-salt-like spotting on the body, blotches on the flanks, or stripes and spots in the dorsal and caudal fins", and "Some of the Mdl patterns occur together with red, orange, or yellow pigmentation of the iris, fins, or regions of the trunk". It reports no wild frequencies for the platy. (P7) Practical Fishkeeping: the gravid spot is clearest on "olive-coloured, wild-type fish" (P22), and Fishkeeper calls the wild ancestors "drabber". (P25)
- Verdict: "Wild platies are a fairly drab olive-brown ... the huge color range simply doesn't exist in nature" (hub funFact, fish.js line 1352), "In the wild, platies are actually quite plain: a dull olive-green with dark marbling" (cost FunFact), "Wild platies are actually a fairly drab olive-brown; virtually all of that color range is the product of generations of captive breeding" (encyclopedia) and "None of that color is natural" (overview): PARTLY at best, and CONTRADICTED where absolute. Wild platies are genetically extreme polymorphs with black macromelanophore patterns and red, orange or yellow pigment. The trade's named varieties (Mickey Mouse, tuxedo, wagtail, hi-fin) are bred, which is supported, but "none of that color" and "simply doesn't exist in nature" are not. Texas State's XGSC also maintains wild-derived platy stocks with pattern genes (P16, "954 platyfish" collected in one pool). See Contradictions item 5.

## 9. History and melanoma (health guide, encyclopedia, FAQ)

- P3 (fetch tool, quoted fragments): "Almost a century ago, it was discovered that certain platyfish and swordtail hybrids ..."; Xiphophorus is "one of the oldest animal systems for studying melanoma"; the discovery is cited to "Häussler (1928), Kosswig (1928), and Gordon (1931)"; "Although rarely observed, melanoma can develop in purebred species"; "these spontaneous melanomas in purebred fish are associated with the higher androgen levels of dominant males"; spontaneous tumors "are almost exclusively seen in mature males of advanced age"; "The occurrence of melanoma in Xiphophorus is not restricted to hybrids."; the sentence on ornamental breeds begins "Ornamental breeds of three species, green swordtail (Xiphophorus hellerii) ... southern platyfish (Xiphophorus maculatus) and variable platyfish (Xiphophorus variatus)" and ends "and can be found in every pet shop." Xmrk "encodes a mutant duplicated version of the epidermal growth factor receptor"; Wittbrodt et al. (1989) isolated the candidate gene and "To distinguish it from the proto-oncogene egfrb, it was designated xmrk for Xiphophorus melanoma receptor kinase." On the suppressor side, the authors caution that overexpressing cdkn2ab "do[es] not conclusively show that cdkn2ab is indeed the critical gene encoded by the R/Diff locus." Backcross figure caption: "One quarter of these backcross segregants recapitulate the genotype of F1 hybrids", with those inheriting only "R/Diff-free chromosomes" developing "highly malignant melanoma". (P3) The pages I did not read (characters 100,000 on) might qualify these.
- XGSC (fetch tool): "Kosswig (1928) pointed out that the melanoma was hereditary"; Gordon "clearly identified the macromelanophore gene of X. maculatus" (1931). (P16)
- Verdicts:
  - Encyclopedia history, "Between 1928 and 1931, working independently, Haussler, Kosswig and Myron Gordon each found ...": SUPPORTED (1928, 1928, 1931).
  - "In 1989 Wittbrodt and colleagues traced the tumors to Xmrk, a mutated and duplicated copy of the epidermal growth factor receptor gene": SUPPORTED.
  - "about a quarter of the backcross fish in the classic scheme" (encyclopedia; also facts.js id 301): PARTLY. The Schartl and Lu caption supports a quarter of backcross segregants being the F1-like genotype and the R/Diff-free ones developing malignant melanoma; I did not find a sentence that states 25 percent as the proportion with tumors.
  - Health guide "Since the 1920s ... one of the longest-running animal models": SUPPORTED. "Over 70 years" (FunFact line 86, FAQ, hub FAQ): understated, since the same sources say "almost a century"; inconsistent with the guide's own "Since the 1920s".
  - "Melanoma only breaks through when platies are deliberately crossed with swordtails in a lab setting"; "this does not happen spontaneously in an ordinary pet-store platy ... it requires deliberate cross-breeding": CONTRADICTED in its absolute form. See Contradictions item 3.
  - "A 2024 review in the journal Disease Models & Mechanisms is explicit that this does not happen in the ordinary green swordtails, southern platies, and variable platies sold in pet shops, and that spontaneous melanoma in purebred fish is rare, occurring almost exclusively in mature males of advanced age": PARTLY. The "rare, almost exclusively mature males of advanced age" half is SUPPORTED nearly verbatim. The "explicit that this does not happen" half is not in the text I read, which says melanoma "can develop in purebred species" and is "not restricted to hybrids".
  - "Pigment-cell gene that promotes melanoma, kept in check by a separate tumor-suppressor gene": PARTLY. The oncogene Xmrk is well established; the regulator is called the R/Diff locus and the authors say cdkn2ab is not conclusively that gene. "Well-understood mechanism" (FAQ) overstates the suppressor side.

## 10. Health

- Ich, biology: Merck (fetch tool): "Ichthyophthirius multifiliis has a direct life cycle but has massive reproductive potential"; encysted adults release "hundreds of immature parasites (tomites)"; "While encysted, parasitic life stages are refractory to chemical treatment." UF/IFAS (verbatim): lesions "look like small white dots, blisters, or salt grains on the skin or fins". (P11, P10) SUPPORTED for the signs, the "burrows into skin" and "hundreds" statements.
- Ich, temperature and treatment: UF/IFAS (verbatim): "At warm temperatures (75°F-79°F), the life cycle is completed in about 3 to 6 days. At these temperatures, chemical treatments should be applied daily, and a minimum of 3 to 5 treatments are required." Salt: "at warmer water temperatures (75-79°F), use of 4-5 g/L (= 4-5 ppt) salt (sodium chloride) in a prolonged bath for 7 to 10 days is another effective treatment in smaller systems, provided the fish species can handle the increased salt concentration." Copper: "NEVER use copper sulfate without first testing the total alkalinity"; "Do not use copper sulfate if the total alkalinity is less than 50 mg/L." Formalin "usually applied at a concentration of 25 mg/L". Merck: "At warm temperatures typical of home aquaria (eg, >26°C), infected fish should be treated daily"; "Formalin or copper are often drugs of choice"; "Three to seven treatments may be required"; over-the-counter pet products "often contain formalin and malachite green and are effective". VCA: "Most strains of ich cannot survive in water temperatures above 86ºF." and "Not all fish can stand the heat, though"; salt "about a tablespoon of salt per 5 gallons", "only suitable for scaled fish"; it names formalin and copper sulfate, not malachite green. (P10, P11, P15)
- Verdict, health guide ("warmed only to 79°F with strong aeration, then treated with aquarium salt or a malachite green or formalin product ... copper sulfate is the last pick, since its dose rests on an alkalinity test"): SUPPORTED in substance. 79°F is the top of Seriously Fish's range and inside UF/IFAS's 75 to 79°F treatment band; malachite green and formalin are supported by Merck; the copper caution is UF/IFAS. The guide gives no salt dose, so the VCA-versus-UF/IFAS mismatch noted in the neon file does not arise here, but note that a tablespoon per 5 gallons (my arithmetic: about 0.9 g/L if a tablespoon is about 17 g, a conversion I did not source) is far below UF/IFAS's 4 to 5 ppt. The statement "platies cannot take the heat that kills ich outright" is in Contradictions item 7.
- Fin rot: Merck Bacterial Diseases (fetch tool): Aeromonas and Pseudomonas are "more common in freshwater animals", predisposing factors "low dissolved oxygen, other water quality problems, handling stress, or trauma"; "Antimicrobial therapy is recommended if fish are dying" with "drug selection ... based on sensitivity testing when possible"; "Control is based on removal of predisposing factors." Columnaris: "most common in warmwater species", "unidentified water quality conditions predispose susceptible fish", "by the time the condition is seen it may be difficult to control". The page does not use the term fin rot or tail rot. (P13) Verdict: causes (Flavobacterium columnare, Aeromonas, Pseudomonas) and "root trigger is environmental" SUPPORTED. "A broad-spectrum antibacterial medication": PARTLY (Merck says choose by sensitivity testing). "Caught early, most cases resolve fully": UNSUPPORTED (Merck says columnaris is hard to control once seen).
- Dropsy: Reavill case report (fetch tool): "These terms describe clinical signs and not specific disease entities."; "Aeromonas hydrophila group was isolated from the caudal kidney" in one goldfish; the owner chose symptomatic therapy "because of the poor prognosis given" and the fish relapsed. (P17) Verdict: "Fluid buildup, raised scales, often carrying a poor outlook": PARTLY (one goldfish case, weak tier). "Typically ... a systemic Aeromonas bacterial infection": PARTLY; the case report calls dropsy a sign, not a disease, and Merck lists Aeromonas hemorrhagic septicemia without the word dropsy. "Hardest condition on this list to treat": UNSUPPORTED as a comparison. No veterinary manual or extension source on dropsy was found.
- Swim bladder: no veterinary, extension or university source found. A search returned only hobby and retailer pages; the Merck and VCA pages opened do not mention swim bladder. Verdict: "Buoyancy problems from overfeeding or constipation; fast; blanched pea": UNSUPPORTED at any strong tier. The cited source is Wikipedia.
- Shimmy: no platy-specific source. Seriously Fish's platy pages do not mention shimmy. For the molly, Seriously Fish says soft or acidic water weakens the fish, "frequently indicated by shimmying" (molly file M14). Practical Fishkeeping's livebearer guide says livebearers do not do well in soft water (P23). Verdict: shimmy "seen across livebearers" and tied to "low pH or mineral hardness" and poor water quality: PARTLY (the soft, acidic water link is supported in kind, by the molly pages). "Low water temperature" as a trigger, "temperature instability", "a sign the fish has lost some nerve and muscle control", and the fix "raise the temperature toward the mid-to-upper 70s": UNSUPPORTED (same finding as the molly file).
- Quarantine: UF/IFAS (verbatim): "At the warm water temperatures required for many aquarium fish, active disease will often become evident 1-3 weeks after shipping. For this reason, a minimum 30-day quarantine period is recommended for new fish." (P10) "At least 30 days" SUPPORTED. Merck Disorders (verbatim fragment): disorders are often "the result of stress, poor water quality, overcrowding, and failure to quarantine any new or sick fish". (P12) The husbandry-pattern paragraph ("stress, poor or unstable water quality, overcrowding, and skipping quarantine are the common thread") is SUPPORTED, near-verbatim; "water quality is the root of nearly everything" would not be.
- Euthanasia, vet disclaimers: none in the platy guides.

## 11. Welfare research (enrichment guide)

- Plath et al. 2007 (fetch tool, two records): nine live-bearing species; "courting" species were "Poecilia latipinna, Poecilia reticulata, Xiphophorus cortezi, Xiphophorus variatus"; in every species except the cave form of P. mexicana "focal females spent significantly less time feeding in the presence of a male than when together with another female"; feeding time fell as male mating activity rose. (P4)
- Verdict: "Nothing on platies specifically" / "Not on platies directly" / "No welfare study covers platies": CONTRADICTED. X. variatus, one of the two trade species, is in this study. The FAQ's "direct costs ... including energy expenditure, reduced foraging and increased vigilance" is a guppy and molly summary; for the platy the supported part is reduced feeding time. Add Plath 2007 as the cited source. See Contradictions item 1.
- The guide's molly paragraph (P. mexicana males "attempt to mate almost constantly") has no source in the block; the molly file recorded it as UNSUPPORTED in that wording and noted the cave-form exception. The guppy cross-generation finding is covered in the guppy file (Gasparini et al. 2012); the guide's two links are a PubMed record and a ResearchGate repost of a guppy paper.
- "Dense planting breaks line of sight so a pursued female can stop being pursued": the keeper's inference. Seriously Fish supports planting and "more females", not the sight-line mechanism. UNSUPPORTED as a tested result.
- "Hardy ... tolerate small tanks, temperature swings and undercycled setups better than most community fish": UNSUPPORTED as a comparison. Seriously Fish rates platies difficulty "5 of 8" (Beginner) but lists "Hardiness unknown", and says "Many commercially bred platies are not very hardy because of inbreeding and over-production" and are "prone to disease and premature death". (P20, P21) That is CONTRADICTED in tone: the enrichment guide's headline is "the fish that survives the beginner mistakes", the encyclopedia says "exceptionally hardy", and the hub tagline says "about as close to foolproof as fish get". Seriously Fish says the beginner-friendliness holds "as long as the water is moderately hard or harder" and that mass-bred stock is often weak. See Contradictions item 10.
- "Hardiness is partly a consequence: generations of tank-bred fish selected under exactly the conditions hobbyists keep them in": UNSUPPORTED, and cuts against Seriously Fish's inbreeding comment.

## 12. Price observations (retail listings, NOT sources, do not cite)

- ThatPetPlace "Live Platies" listing page, opened 2026-11-01: 14 listings from $1.99 (Black Platy) to $5.99 (Assorted Platy, Tiger Platy), most at $3.99 or $4.99; all but the Assorted Platy listing showed "Out of Stock"; no six-pack or multi-pack listing; no tiger ruby (only "Tiger Platy" at $5.99). The cost guide's anchor link for "%%animal:platy%% each" points to this page. The macro value is $2 to $6 (src/lib/data/costSheets/fish.js line 256).
- Search-result extracts only (not opened): PetSmart US "Green Lantern Platy" $2.99, in-store only; LiveAquaria 12-pack of assorted platies $29.99 (sold out).
- Verdict: the $2 to $6 range SUPPORTED by these observations. "A six-pack around $30" (cost FAQ, body, hub Budget row) is $5 a fish, the top of the range, and no listing seen sells a six-pack. "Tiger ruby platies can reach $8 to $9": UNSUPPORTED (not listed on the page the guide links to; one tiger variety at $5.99). Monthly cost $15 to $20 and setup cost: no source (shared with the other fish guides).

## 13. Overview lines (platy-swordtail-molly-overview.mdx)

- "Two closely related species, the southern platy and the variatus platy, are sold interchangeably": SUPPORTED (Seriously Fish: hybrids and domestic forms overlap; Fishkeeper).
- "Decades of selective breeding between the two, plus hybridization with swordtails ... Mickey Mouse and wagtail to calico, tuxedo, and bumblebee": SUPPORTED in kind (Seriously Fish names mickey mouse, wagtail, tuxedo, moon, blue, red, comet and hi-fin; calico appears in Fishkeeper; "bumblebee" is in no opened source).
- "Wild platies are a fairly drab olive-brown ... muddy, densely vegetated canals and ponds": PARTLY (section 8.2).
- "None of that color is natural" and heading "The Color Range Is Entirely Man-Made": CONTRADICTED (section 8.2).
- "At 2 to 3 inches": PARTLY (section 2). "With reasonable care ... platies a little less at 2 to 4" years: UNSUPPORTED (section 3).
- Intro "mollies and swordtails commonly live 3 to 5 years": belongs to those two files.
- FAQ "Platies and swordtails share the same genus, Xiphophorus, are close enough to interbreed, and have been intentionally crossed for almost a century": SUPPORTED (P3, group S7, S8).
- "Selective breeding ... Xiphophorus, Greek for 'sword bearer'": SUPPORTED.

## 14. Livebearer hub and group-level lines that touch the platy

- fish.js line 77 (livebearer group hub, Ich): "86°F held for two weeks kills most strains, and it sits above every livebearer here." VCA says "Most strains of ich cannot survive in water temperatures above 86ºF" and gives no duration, so "held for two weeks" is UNSUPPORTED here (the group file and sister files may have sourced it elsewhere; not checked). "Sits above every livebearer here" is the same claim as Contradictions item 7.
- fish.js line 54 (hub comparison row): "24 x 12 in base", "68 to 79°F", "7.0 to 8.2" SUPPORTED; "2 to 3 in" PARTLY.
- fish.js line 73 (group hub "Sex ratio" rule citing the platy handling guide): "Keeping the sexes in separate tanks is the only way to stop breeding" SUPPORTED in substance (Seriously Fish: "buy only male fish"; Practical Fishkeeping on keeping the sexes apart).

---

## Contradictions and unsupported claims

Numbered by weight. File and line, quoted text, what the sources say.

1. **platy-enrichment-guide.mdx lines 43, 67 and the Sources block** (also hub routes line for enrichment): "Not on platies directly." / "Nothing on platies specifically." / "No welfare study covers platies." Plath et al. 2007 (Behavioral Ecology 18:680-688) tested X. variatus, a trade platy species, and found females fed significantly less with a male present. CONTRADICTED. Fix: cite Plath 2007 and say the platy evidence is reduced feeding time, with the other costs borrowed from guppies and mollies.

2. **platy-handling-guide.mdx line 68** "adults will readily eat their own fry given the chance"; **platy-tank-setup-guide.mdx line 105** "adults will eat them given the chance"; **platy-handling-guide.mdx FAQ and body** (dense planting to protect fry). Seriously Fish, on both species: "The adult fish will not eat their young but the best method of raising them is still to remove the gravid female". Practical Fishkeeping (livebearers in general) describes fry eaten by "larger fish" and uses traps so the mother does not eat them. Wild cannibalism in livebearers is rare and common in captivity (Riesch 2022; no Xiphophorus in its 17 species). Verdict: CONTRADICTED for platy-specific husbandry text, genuinely uncertain in practice. Fix: say fry are eaten by other fish and sometimes by adults, and that cover and a separate birthing tank help.

3. **platy-health-issues-guide.mdx lines 89 and FAQ (also fish.js hub FAQ at line 1434)**: "this does not happen spontaneously in an ordinary pet-store platy ... it requires deliberate cross-breeding between platies and swordtails in a lab setting"; "A 2024 review ... is explicit that this does not happen in the ordinary green swordtails, southern platies, and variable platies sold in pet shops". Schartl and Lu 2024: "Although rarely observed, melanoma can develop in purebred species"; "The occurrence of melanoma in Xiphophorus is not restricted to hybrids."; spontaneous tumors "almost exclusively seen in mature males of advanced age". CONTRADICTED in absolute form; the practical advice (very unlikely in a pet-store platy, more likely an injury or cyst) is a fair inference but is not what the review says. Also "over 70 years" (health FunFact line 86, FAQ, hub FAQ line 1434) against the same review's "almost a century" and the guide's own "since the 1920s".

4. **platy-handling-guide.mdx lines 18 and 19** (seoDescription, description): "how they breed via superfetation"; "the superfetation-driven breeding biology". Platy broods come in discrete cycles of about 35 days (Siciliano 1972); a search extract places Xiphophorus among genera without superfetating species; no opened source says platies superfetate. UNSUPPORTED, probably CONTRADICTED. Fix: replace with "sperm storage".

5. **Wild color.** platy-swordtail-molly-overview.mdx line 49 heading "The Color Range Is Entirely Man-Made" and line 51 "None of that color is natural"; fish.js hub funFact line 1352 "the huge color range sold today simply doesn't exist in nature"; platy-cost-guide.mdx FunFact (line 66) "In the wild, platies are actually quite plain: a dull olive-green with dark marbling"; encyclopedia "virtually all of that color range is the product of generations of captive breeding". Basolo 2006: "one of the most extreme examples of color pattern polymorphism"; patterns with red, orange or yellow pigment exist in wild-derived stocks. CONTRADICTED where "entirely" or "none"; PARTLY for "most" and for "bred varieties". Fix: "the named trade varieties are bred; wild platies already vary in spotting and in red and yellow pigment".

6. **platy-enrichment-guide.mdx FunFact (line 74)** "Almost every platy in the trade is a hybrid of two species, bred for color for over a century." Seriously Fish: "Some of these are produced by crossbreeding"; Fishkeeper: "all but the most primitive of breeds" are best treated as hybrids, across up to three species (maculatus, variatus, hellerii). PARTLY. The overview's wording ("hybridization with swordtails") is closer.

7. **platy-health-issues-guide.mdx line 63 and FAQ (hub emergency card, fish.js line 1402; hub first-week; group row fish.js line 77)**: "Platies cannot take the heat that kills ich outright, so the ich treatment guide has them warmed only to 79°F". The husbandry ceiling is 77 to 79°F (FishBase 25 °C, Seriously Fish 26 °C, Fishkeeper 25 °C), so a 79°F cap is SUPPORTED as a husbandry choice. But the one thermal-limit study (Prodocimo and Freire, abstract only) held fish seven days at 30 °C (86°F) and measured CTmax of 40.4 to 41.5 °C, calling the species more heat- than cold-tolerant. So "cannot take the heat" is UNSUPPORTED as a statement of tolerance (nothing tests chronic 86°F exposure for ich treatment, and the lab figure is an acute loss-of-equilibrium endpoint). Suggested truth: 86°F is above every published husbandry range for the species and untested for a multi-week ich course, not shown to be lethal. Also UF/IFAS treats ich at 75 to 79°F with daily chemical treatment, so 79°F plus medication is a sourced protocol.

8. **Size.** platy-handling-guide.mdx line 54 "Adults run about 2 to 3 inches"; fish.js line 1394 and line 54; encyclopedia adultSize "2-3 inches (5-7.5 cm)"; overview "At 2 to 3 inches". FishBase 4 cm male and 6 cm female (X. maculatus), 7 cm (X. variatus); USGS 6 cm; Seriously Fish 50 mm SL. The 7.5 cm top end exceeds every source. PARTLY.

9. **platy-enrichment-guide.mdx** "Platy males are generally less relentless than guppy males" (body and FAQ "Platy males are less relentless than guppy males but the same dynamic applies"). Seriously Fish on platies: males' attention "which can be relentless". No source compares the two species. UNSUPPORTED, and the platy source uses the opposite word. Related: the hub "sex ratio" is fine.

10. **Hardiness.** platy-enrichment-guide.mdx title and KeyTakeaway ("tolerate small tanks, wide temperature ranges, hard water and shaky cycling better than almost anything else"; FAQ "Are platies that hardy? Yes"); encyclopedia "exceptionally hardy"; hub tagline "about as close to foolproof as fish get"; cost guide "a species this hardy". Seriously Fish: "Many commercially bred platies are not very hardy because of inbreeding and over-production and are prone to disease and premature death" and "Hardiness unknown". The tolerance of poor conditions is not supported by any opened source and the strongest husbandry reference says the opposite about trade stock. CONTRADICTED. Fix: keep "a beginner fish when the water is hard enough", drop "hardiest".

11. **platy-tank-setup-guide.mdx lines 51 and 75, hub fish.js line 1380**: "tolerate 6.8 to 8.5". No source states it (Seriously Fish 7.0 to 8.2, FishBase 7.0 to 8.0, Practical Fishkeeping 7.0 to 8.2). UNSUPPORTED.

12. **Brood and interval figures.** platy-cost-guide.mdx FAQ and line 98, platy-handling-guide.mdx FAQ and FunFact, hub fish.js line 1388: "A typical brood runs 20 to 50 fry" (UNSUPPORTED as "typical"; FishBase says 20 to 80, Seriously Fish "up to 80 ... not uncommon", Practical Fishkeeping up to 90). "Roughly every 4 to 6 weeks" PARTLY: measured interval 33.5 days (Vallowe), 36 days (Siciliano), "every thirty days" (Practical Fishkeeping), FishBase gestation 24 to 30 days. The hub comment's claim that "20 to 80" quotes "the documented extreme as the norm" is wrong for FishBase, where 20 to 80 is the stated range.

13. **Lifespan** (cost guide FAQ and line 94, overview intro, hub line 1393, encyclopedia "3-5 years" wild): UNSUPPORTED, no authoritative figure exists in any opened source (section 3).

14. **Feeding.** platy-feeding-guide.mdx: "3 to 4 times a day" for fry (sources 2 to 3 and 3, PARTLY); "Platies need less vegetable than mollies" and enrichment "platies take more plant matter than guppies do" (UNSUPPORTED); "A long, stringy trail of waste ... a well-documented sign the portion was too large" (UNSUPPORTED); "Overfeeding drives constipation and swim bladder problems directly" (UNSUPPORTED); "a ratio of roughly two to three females per male, the breeders' standard" (UNSUPPORTED); "cleared within a minute or two" (UNSUPPORTED); "vegetables ... support better color and digestion" (UNSUPPORTED).

15. **Shimmy** (health guide, hub): "temperature instability is one of the more commonly cited triggers" (tank guide line 71, hub line 1379 and FAQ), "a sign the fish has lost some nerve and muscle control", "low water temperature", and "raise the temperature toward the mid-to-upper 70s°F": UNSUPPORTED. Only soft or acidic water and poor water quality are sourced, and only through the molly pages.

16. **Dropsy and swim bladder, fin rot outcome.** "Hardest condition on this list to treat"; "typically ... a systemic Aeromonas bacterial infection"; swim bladder causes and the pea remedy; fin rot "caught early, most cases resolve fully": UNSUPPORTED or PARTLY, no strong source (section 10). Merck calls columnaris "difficult to control" once seen.

17. **Gestation tie to "Female platies store sperm in the folds of their oviduct"** (cost guide line 98, handling FAQ): the paper says "folds of the female ovarian tissue". PARTLY (wording).

18. **Maturity** (handling guide, hub "Sexing"): "about two to six and a half months" is SUPPORTED for males; females range 11 to 73 weeks (Kallman and Borkoski); FishBase says 3 to 4 months for aquarium varieties. PARTLY.

19. **Price.** platy-cost-guide.mdx FAQ and line 63: "six-pack around $30", "tiger ruby platies can reach $8 to $9": the first is the top of the observed range, the second UNSUPPORTED (section 12).

20. **Group size and tankmates.** "A group of five or more"; "do not keep a pair"; the tankmate list (cory, bristlenose, rainbowfish, small rasboras, snails); "10 gallons ... holds about five"; "capable jumpers"; substrate and lighting claims: UNSUPPORTED (sections 4 and 5).

21. **Encyclopedia quarter-backcross and facts.js id 301** ("about a quarter of the offspring turn heavily pigmented and develop invasive melanomas"): PARTLY (section 9).

22. **platy-handling-guide.mdx FAQ and line 54** "the variatus the better pick for a room-temperature tank" and hub "Variatus-line platies handle the cool end better than most tropical fish": PARTLY (section 4.2).

23. **Salt dose, if added.** The ich section names aquarium salt with no dose. If a dose is ever added, UF/IFAS says 4 to 5 ppt for 7 to 10 days at 75 to 79°F "provided the fish species can handle the increased salt concentration"; VCA says a tablespoon per 5 gallons and "only suitable for scaled fish". The two differ several-fold. No platy salt-tolerance figure was found.

Count: the numbered list above has 23 items. By claim, I counted 12 contradicted or flagged-as-contradicted claims (items 1 to 7, 10, plus the absolute wording in 5, 3 and 2), and about 40 distinct UNSUPPORTED claims once the sub-claims inside items 12 to 16 and 20 are counted separately.

Supported and needing no change: gonopodium and fan-shaped anal fin; Xiphophorus meaning "sword bearer"; pH 7.0 to 8.2; 68 to 79°F and mid-70s; 24 by 12 inch base footprint (and the observation that a 10 gallon misses it); 10 to 30 dGH for X. maculatus; soft, acidic water unsuitable; "hard water fish" framing; native range; slow-water habitat; Least Concern and Data Deficient via FishBase; omnivore diet; fry accept crushed flake and brine shrimp nauplii at birth; sperm storage for months and several broods per mating; gestation 4 to 6 weeks (Seriously Fish); brood up to 80; males mature from about eight weeks; the males-only tank and sex-ratio advice in direction; platy and swordtail interbreed and many trade lines are hybrids; crossed for almost a century; 30 day quarantine; 4 to 6 week fishless cycle with 3 ppm dosing; ich signs, life cycle and "hundreds"; formalin, malachite green and copper as ich drugs and the copper alkalinity caution; fin rot environmental triggers; Florida and Hawaii introductions and the Oahu damselfly decline; encyclopedia melanoma history (dates, Xmrk 1989, EGFR).

---

## Weak sources in the guides' Sources blocks and replacements

Retailer pages and sites with no named author are listed as weak. "Opened" means opened in this session.

**platy-cost-guide.mdx**
- Fishkeeping World: Platy Fish Care (fishkeepingworld.com): hobby site, not opened here (a search extract showed it among pages giving 3 to 5 years). Replace with Seriously Fish P20/P21 and FishBase P18 for size and diet, and state that no source gives lifespan.
- Aquarium Co-Op: Care Guide for Platy Fish (retailer, also the inline link on "2 to 4 years"): replace for lifespan with nothing (UNSUPPORTED), for fry and sperm storage with Siciliano P2 and Practical Fishkeeping P22, for brood size with FishBase P18 and Seriously Fish P20.
- Splashy Fish Store (retailer blog): replace with Seriously Fish P20 and Practical Fishkeeping P22.
- Bubble Magus: How Much Does a Fish Tank Setup Really Cost? (equipment retailer blog): carries the setup cost framing; no source replaces a price; keep as an observation or cut.
- ThatPetPlace inline link ("%%animal:platy%% each"): retailer; keep only as a price observation (section 12).
- Keep: Seriously Fish X. maculatus.

**platy-tank-setup-guide.mdx**
- Aquarium Co-Op, Splashy Fish Store, Fishkeeping World: replace with Seriously Fish P20 and P21 (temperature, pH, hardness, 60 by 30 cm base), FishBase P18 and P19 (60 cm, pH, dH), Practical Fishkeeping P23 (pH 7.0 to 8.2, 10 to 30 GH, no salt needed) and P24 (cycling, 3 ppm). Keep Seriously Fish.
- Figures to change: drop "tolerate 6.8 to 8.5"; cite the swing and 8 to 10 hour light claims to nothing or remove.

**platy-feeding-guide.mdx**
- Aquarium Co-Op, Splashy Fish Store, Fishkeeping World: replace with Seriously Fish P20 and P21 (diet, fry foods and 2 to 3 times a day), FishBase P18 (wild diet), Merck Nutritional Diseases P14 (at least daily, 3 percent of body weight, variety, crush flake, fry up to 5 percent), Practical Fishkeeping P22 (fry food, feed three times a day).
- Wikipedia: Southern Platyfish: replace with FishBase P18 and Seriously Fish P20.
- Figures to change: fry "3 to 4 times a day" to 2 to 3 or "three times a day if you can".

**platy-handling-guide.mdx**
- Aquarium Co-Op (Care Guide for Platy Fish; How to Breed Livebearers for Profit): retailer; the Sources comment says it carries the aquarium-society outlet, sex ratio, fry eating and brood size. Replace sex ratio and brood size with Seriously Fish P20 and FishBase P18; replace fry eating with Seriously Fish P20 (and correct the claim); the society outlet has no strong replacement (Practical Fishkeeping P22 covers only shops and saturation).
- Keep: Seriously Fish; Practical Fishkeeping How to breed livebearing fish (P22); USGS (P9); Kallman and Borkoski (P1). Add: Siciliano 1972 (P2) for sperm storage and the brood interval.
- Figures to change: adult size, "typical 20 to 50", the "superfetation" metadata, "readily eat their own fry".

**platy-health-issues-guide.mdx**
- Fritz Aquatics: Fin and Tail Rot (equipment retailer): replace with Merck Bacterial Diseases P13 and Merck Disorders P12.
- Wikipedia: Swim Bladder Disease: no veterinary replacement found; cut the specific causes and remedy, or mark them as general hobby practice.
- Aquarium Co-Op: How to Treat Common Diseases that Affect Livebearer Fish (retailer): replace ich with UF/IFAS P10 and Merck Parasitic Diseases P11 (keep VCA P15 for the 86°F line); shimmy has no strong source (see section 10).
- Keep: Merck Disorders and Diseases (P12) and Schartl and Lu 2024 (P3), adding the rows of P3 quoted above. Add UF/IFAS P10 for the 30 day quarantine.
- Figures to change: "this does not happen"/"is explicit that this does not happen" wording, "over 70 years", "Platies cannot take the heat".

**platy-enrichment-guide.mdx**
- Aqueon: Livebearer care guide (manufacturer page): replace with Seriously Fish P20/P21 (more females, planting).
- ResearchGate repost of "Male harassment reduces short-term female fitness in guppies": replace with the primary record or with Plath et al. 2007 (P4), which covers X. variatus. Keep the PubMed record for the cross-generation guppy paper.
- Add: Plath 2007 (P4), Seriously Fish P20/P21.
- Figures to change: "Nothing on platies specifically", "less relentless than guppy males", "almost every platy ... hybrid of two species", "hardy".

---

## Gaps

- **Platy lifespan:** no authoritative figure (FishBase, Seriously Fish, USGS, AnAge silent; no lab aging cohort found). The 2 to 4 and 3 to 5 year figures rest on hobby sites only.
- **Thermal tolerance:** Prodocimo and Freire's abstract was read only as a search extract (the page blocks automated fetches), and its journal is attributed inconsistently by a later paper. The 2021 Turkish paper's English abstract appears to swap species labels. No chronic-exposure study at 30 °C (86°F) for platies or ich-treatment tolerance was found. Open the full text before quoting numbers on the site.
- **Superfetation in Xiphophorus:** the statement that the genus lacks it is a search extract of a 2014 Poeciliopsis paper (citing Reznick and Miles); not opened. Reznick and Miles 1989 (Biological Reviews) would settle it.
- **Platy cannibalism:** the only peer-reviewed cannibalism work found is a swordtail (X. hellerii) thesis (page blocked) and the 2022 wild survey (no Xiphophorus). Seriously Fish is the only platy-specific source.
- **Schartl and Lu 2024:** only the first 100,000 of 227,434 characters were read; the section on pet-store fish and on the R/Diff regulator might refine items 3 and the "well-understood mechanism" wording.
- **Group size and sex ratio numbers:** no platy-specific study; only Seriously Fish ("several females") and Fishkeeper ("outnumbered").
- **Wild color frequencies:** no source gives wild red, yellow or black pattern frequencies for the platy; Basolo 2006 (abstract only) and the Colorful Sex Chromosomes review (PMC5977173, authors not captured) support "polymorphic", not numbers.
- **Swim bladder, dropsy, shimmy:** no veterinary manual or extension source found for platies; Merck pages opened do not cover them.
- **Salt tolerance of platies and a safe ich-salt dose:** no figure found.
- **Texas State XGSC page:** the fetch tool did not return a founding date or the Haussler citation; Haussler (1928) comes from the Schartl and Lu citation only.
- **Quarter-backcross wording:** the exact proportion of backcross fish that develop melanoma was not located in the pages read.
- **IUCN pages:** not opened; statuses are via FishBase.
- **Hard-water claim for Fishkeeper and prices:** Fishkeeper is retailer-published; used only for corroboration, never alone.

---

## Replacement map

Per guide: old source to new source, figure to change and its replacement. "Keep" means no change.

### platy-cost-guide.mdx
- Sources block: remove Fishkeeping World, Aquarium Co-Op, Splashy Fish Store, Bubble Magus. Add Seriously Fish X. maculatus and X. variatus (keep the existing link), FishBase X. maculatus (P18), Siciliano 1972 (P2) for sperm storage and the brood interval, Practical Fishkeeping "How to breed livebearing fish" (P22). Note: no source for lifespan.
- Lifespan: "2 to 4 years, 3 to 4 achievable ... toward 5" (FAQ, body, and the inline Aquarium Co-Op link): no strong replacement exists. Either say "no authoritative figure; hobby sources say 2 to 4 years" or cut the number. Drop the link.
- Brood: "A typical brood runs 20 to 50 fry, with a documented range up to 80 ... roughly every 4 to 6 weeks" to "20 to 80 young per brood (FishBase), more in large females; a new brood about every 30 to 36 days (Siciliano 1972, Practical Fishkeeping)". Sperm storage: keep "months"; add "as many as eight successive broods from one insemination (Van Oordt, 1928, cited by Siciliano)" only if wanted.
- Wild color FunFact: "quite plain: a dull olive-green with dark marbling" to "wild platies vary, but the Mickey Mouse, tuxedo and wag-tail trade varieties are selectively bred" (Basolo 2006, Seriously Fish).
- Price: "six-pack around $30" to "about $3 to $6 each" (observation); drop "tiger ruby platies ... $8 to $9" or restate as "premium strains cost more" with no number.
- Hardy: "a species this hardy" to "a beginner fish if the water is hard enough" (Seriously Fish).

### platy-tank-setup-guide.mdx
- Sources block: replace Aquarium Co-Op, Splashy Fish Store and Fishkeeping World with Seriously Fish X. maculatus and X. variatus (P20, P21), FishBase (P18, P19), Practical Fishkeeping Quick guide to livebearers (P23) and How to cycle a fish tank (P24).
- pH: "tolerate 6.8 to 8.5" to cut; keep "7.0 to 8.2" (P20, P23). Hardness: "10 to 30 dGH" keep for X. maculatus, note X. variatus 14 to 30 (P21).
- Temperature: keep "68 to 79°F". Drop "swings over about 2°F a day" unless sourced; "variatus handle the cooler end better than most tropical fish" to "FishBase lists variatus down to 15 °C (59°F) against 18 °C for the southern platy".
- Tank: "holds about five platies" to "the smallest tank Seriously Fish gives is a 24 by 12 inch base, about 14 US gallons"; keep the 20 long observation.
- Fry: "adults will eat them given the chance" to "Seriously Fish says adults do not eat their young, but other fish will; cover and a separate birthing tank protect fry (Seriously Fish, Practical Fishkeeping)".
- Cycling: keep "4 to 6 weeks", "3 ppm", "zero within 24 hours"; cite P24; "less with bottled bacteria" to "bottled bacteria shorten or lengthen it depending on the product (P24 says it influences the length)" or cut.

### platy-feeding-guide.mdx
- Sources block: replace Aquarium Co-Op, Splashy Fish Store, Fishkeeping World and Wikipedia with Seriously Fish (P20, P21), FishBase (P18), Merck Nutritional Diseases (P14), Practical Fishkeeping (P22).
- Fry frequency: "3 to 4 times a day for roughly their first two months" to "2 to 3 times a day (Seriously Fish) or three if you can (Practical Fishkeeping)"; drop "two months".
- Diet: "algae" in wild diet is not in FishBase; use "worms, crustaceans, insects and plant matter". Adult "at least daily; about 3 percent of body weight" (Merck) as the sourced frame; keep "once or twice a day".
- Remove or soften: "stringy waste trail ... well-documented sign"; "platies keep eating past the point of being full"; "the breeders' standard" ratio (use "more females than males", Seriously Fish); vegetable comparisons with mollies and guppies; "support better color".

### platy-handling-guide.mdx
- Sources block: keep Seriously Fish, Practical Fishkeeping, USGS, Kallman and Borkoski. Remove Aquarium Co-Op, or keep only for the society outlet; add FishBase (P18), Siciliano 1972 (P2).
- Metadata: "how they breed via superfetation" and "the superfetation-driven breeding biology" to "sperm storage".
- Size: "Adults run about 2 to 3 inches" to "about 1.5 to 2.4 inches for the southern platy (4 to 6 cm, FishBase, USGS), up to about 2.8 inches for the variatus".
- Brood and interval: as in the cost guide. Sperm storage: "folds of their oviduct" to "folds of the ovarian tissue" (Siciliano), or "females store sperm".
- Fry: "adults will readily eat their own fry" to "other fish will eat fry, and adults sometimes will (Seriously Fish says not)".
- Maturity: keep the male figures (8 to 28 weeks); add that females range wider (11 to 73 weeks, Kallman and Borkoski).
- Gravid spot: "near the vent" to "on the belly, clearest on olive wild-type fish" (P22).
- "The variatus the better pick for a room-temperature tank" to "FishBase lists variatus down to 15 °C, but Seriously Fish gives both species the same 20 to 26 °C".
- Introductions: keep USGS wording; "established" to "locally established or possibly established".

### platy-health-issues-guide.mdx
- Sources block: remove Fritz Aquatics, Wikipedia swim bladder, Aquarium Co-Op livebearer disease. Add UF/IFAS CIR920 (P10), Merck Parasitic Diseases (P11), Merck Bacterial Diseases (P13), VCA ich (P15, keep for the 86°F line), Plath not needed here.
- Ich heat: "Platies cannot take the heat that kills ich outright" to "86°F is above every published husbandry range for platies and untested for a multi-week course, so treat at the top of the range (79°F) with medication, as UF/IFAS does (75 to 79°F, treat daily)". Hub emergency card and the group Ich row (fish.js line 77): same edit; drop "held for two weeks" unless sourced.
- Melanoma: "this does not happen spontaneously in an ordinary pet-store platy ... requires deliberate cross-breeding" to "In purebred fish melanoma is rare and almost always in mature males of advanced age; it is not limited to hybrids (Schartl and Lu 2024). A lump on a pet-store platy is far more likely an injury, cyst or other growth." Remove "is explicit that this does not happen". "Over 70 years" to "almost a century". "Well-understood mechanism" to "the main driver is the Xmrk oncogene (an EGFR duplicate); the regulating locus is still debated". Keep the history dates.
- Quarantine: keep "at least 30 days"; cite UF/IFAS ("a minimum 30-day quarantine period is recommended").
- Fin rot: "Caught early, most cases resolve fully" to cut or "Merck calls columnaris hard to control by the time it is seen"; "broad-spectrum antibacterial" to "choose the drug by sensitivity testing where possible (Merck)".
- Dropsy: add "dropsy describes signs, not one disease (Reavill case report)"; soften "typically Aeromonas".
- Swim bladder and shimmy: no strong replacement; mark as general hobby practice or cut the temperature-based causes and the "mid-to-upper 70s" remedy.

### platy-enrichment-guide.mdx
- Sources block: remove Aqueon and the ResearchGate link; add Plath et al. 2007 (P4) and Seriously Fish (P20, P21); keep the PubMed guppy cross-generation record.
- "Nothing on platies specifically" (and the FAQ and the block's first bullet) to "One comparative study of nine livebearers included X. variatus and found females fed less with a male present (Plath et al. 2007); the other costs come from guppies and mollies".
- "Platy males are generally less relentless than guppy males" to cut, or "Seriously Fish calls platy male attention relentless".
- FunFact "Almost every platy in the trade is a hybrid of two species" to "Many trade platies carry hybrid ancestry from X. maculatus, X. variatus and the swordtail (Seriously Fish, Fishkeeper)"; "hardiness is partly a consequence" to cut (Seriously Fish says mass-bred stock is often weak).
- "Hardy" framing (title, KeyTakeaway, FAQ) to "forgiving when the water is hard enough, but mass-bred stock is often weak (Seriously Fish)".
- "Group of five or more" and "Two to three females per male": keep as the guides' recommendation, remove any implication of a source, and cite Seriously Fish for "more females" only.

### fish.js hub (platy, from line 1343) and encyclopedia
- Hub funFact: "the huge color range sold today simply doesn't exist in nature" to the section 8.2 wording; "Wild platies are actually a fairly drab olive-brown" to "wild platies are olive with black spotting and sometimes red or yellow".
- Hub first-week: Tank size (keep), Temperature (keep, drop the swing and variatus clauses as above), Water chemistry ("tolerating 6.8 to 8.5" cut), Fry are coming ("20 to 50" to "20 to 80"; "4 to 6 weeks" to "about every 30 to 36 days"), Lifespan (unsourced, per cost guide), Adult size ("2 to 3 inches (5 to 7.5 cm)" to "about 1.5 to 2.4 inches (4 to 6 cm), a little longer for the variatus").
- Hub FAQ line 1434: tumor answer as in the health guide.
- Comparison row (line 54): "2 to 3 in" to "about 1.5 to 2.4 in".
- Encyclopedia: adultSize as above; wildLifespan "3-5 years" to remove (UNSUPPORTED); wildDiet: drop "algae" or keep with the Seriously Fish X. variatus habitat note; overview "virtually all of that color range" to "most named varieties"; history "about a quarter of the backcross fish" to "in the classic backcross scheme a fraction of the fish developed highly malignant melanoma" unless the proportion is confirmed in Schartl and Lu beyond the characters read; conservation, origin and the 1928 to 1989 history: keep.

### platy-swordtail-molly-overview.mdx
- Heading "The Color Range Is Entirely Man-Made" and "None of that color is natural" to "Most of the named color varieties are man-made" with the wild-polymorphism note (Basolo 2006).
- "At 2 to 3 inches" to "about 1.5 to 2.4 inches"; "platies a little less at 2 to 4" to cut or restate as unsourced.
- No Sources block exists; adding one with Seriously Fish X. maculatus, X. variatus, FishBase and Schartl and Lu 2024 would cover the platy section.

---

## Kept without a source (owner review)

Added 2026-11-01 after the correction pass. Left in place as written (owner rule: fact-check passes never drop content). Each is UNSUPPORTED or only PARTLY supported by the pages in this file; the reason is "no page opened here states it" unless a different reason is given. Edits made in this pass were limited to contradicted claims and source swaps.

**platy-cost-guide.mdx**
- "with a six-pack landing around $30" (body and FAQ): $5 a fish, top of the $2 to $6 range; no multi-pack listing seen. (also elsewhere: yes)
- "Less common varieties like tiger ruby platies can reach $8 to $9" / "Premium or less common strains like tiger ruby platies can reach $8 to $9": not on the linked listing page (one tiger variety at $5.99). (also elsewhere: no)
- "2 to 4 years, with 3 to 4 achievable under stable conditions and excellent, consistent water quality pushing a fish toward 5" (body and FAQ, including "close to a guppy's lifespan, and noticeably shorter than a molly's, which commonly reaches 3 to 5 years"): no authoritative platy lifespan found; the Aquarium Co-Op link was dropped from the sentence. **[conflict fixed: "close to a guppy's lifespan, and noticeably shorter than a molly's, which commonly reaches 3 to 5 years" to "well past a guppy's lab-study average of about 13 months, and a little shorter than a molly's 2 to 5 years" (body and FAQ)]** (also elsewhere: yes)
- "A typical brood runs 20 to 50 fry, with a documented range up to 80 ... roughly every 4 to 6 weeks": "typical 20 to 50" has no source (FishBase says 20 to 80); the interval is only PARTLY supported (measured 30 to 36 days). (also elsewhere: yes)
- "A 10-gallon tank holds a small group of about five": no source gives a group size for a volume. **[wording merged: five fit a 10 gallon by volume; the 24 by 12 inch footprint points to a 20 long, now a separate sentence]** (also elsewhere: yes)
- "Full monthly upkeep ... $15 to $20", "close to what a guppy setup costs": no source (price and setup figures live in the cost sheet). (also elsewhere: yes)
- "Most platy health issues ... get managed at home with water quality correction and over-the-counter medication": no source. (also elsewhere: yes)

**platy-tank-setup-guide.mdx**
- "holds about five", "a fuller group of six or more": no stocking source. (also elsewhere: yes)
- "platies are capable jumpers": no source. (also elsewhere: yes)
- "swings over about 2°F in a day are the problem" and "temperature instability is one of the more commonly cited triggers behind the livebearer shimmy": no source gives a swing threshold or a temperature link to shimmy. (also elsewhere: yes)
- "Variatus-line platies handle the cool end better than most tropical fish": PARTLY (FishBase gives variatus a lower floor, 15 vs 18 °C; Seriously Fish gives both the same range; "than most tropical fish" is in no source). **[wording merged: "better than the southern platy does" replaces "than most tropical fish" (FAQ and body)]** (also elsewhere: yes)
- "platies tolerate 6.8 to 8.5": nearest sources end at 8.0 and 8.2. (also elsewhere: yes)
- Crushed coral or a buffering product for soft tap water: reasonable, no source. (also elsewhere: yes)
- "cory catfish, bristlenose plecos, rainbowfish, small rasboras, and snails": no source lists tankmates by name (Seriously Fish: "most community species"). (also elsewhere: yes)
- "mollies want pH 7.5 to 8.5 ... the shared tank runs at about 7.5 to 8.2" and neon and cardinal tetras as soft-water fish: reasoning from other species' files, not from this one. (also elsewhere: yes)
- "platies don't need aggressive flow": PARTLY (Seriously Fish suggests a turnover of four to five times the volume an hour). **[wording merged: "a strong current" replaces "aggressive flow" and "aggressive turnover" (FAQ and body)]** (also elsewhere: no)
- "Fine gravel or sand both work well", "avoid sharp or coarse gravel", "darker substrate tends to make platy coloring stand out", "8 to 10 hour daily cycle": no source. (also elsewhere: yes)
- "less with a bottled bacteria product" (cycling, FAQ and body): PARTLY (Practical Fishkeeping says bottled bacteria influence the cycle length, not that it is shorter). (also elsewhere: yes)
- "Skipping this step is one of the most common beginner mistakes in the hobby" and "ammonia-driven stress that shows up as shimmy": no source. (also elsewhere: yes)
- "skipping dense cover lets normal predation keep numbers in check": the keeper's inference. **[wording merged: "predation by tankmates"]** (also elsewhere: yes)

**platy-feeding-guide.mdx**
- "in the wild their diet already mixes algae and plant matter with small crustaceans, insects, and worms": "algae" is not in FishBase's diet line. (also elsewhere: yes)
- "Juveniles: Two to three smaller meals a day" (and FAQ): Seriously Fish's 2 to 3 times a day is for fry. **[wording merged: "two or three smaller meals a day, the top of the adult range" (body and FAQ)]** (also elsewhere: yes)
- "feed only what's fully cleared within a minute or two": no source gives a time. (also elsewhere: yes)
- "3 to 4 times a day" and "roughly 2 months" for fry (body and FAQ): PARTLY (Seriously Fish 2 to 3 times, Practical Fishkeeping three times, neither gives a duration). "no infusoria stage needed" is an inference from "accept brine shrimp nauplii or powdered flake from birth". (also elsewhere: no)
- "Unlike mollies ... platies aren't as strictly dependent on a big vegetable ratio" and "still supports better color and digestion": no source compares plant content across species or ties vegetables to color. (also elsewhere: yes)
- "platies genuinely do better on variety than most fish": the "than most fish" comparison has no source (Merck supports variety in general). **[wording merged: "than most fish" dropped]** (also elsewhere: no)
- "Platies will keep eating past the point of being full", "overfeeding drives constipation and swim bladder problems directly", "a long, stringy trail of waste ... a well-documented sign the portion was too large" (FAQ, FunFact, body): no source; "well-documented" is not backed. (also elsewhere: yes)
- "a ratio of roughly two to three females per male, the breeders' standard": the numeral and "breeders' standard" have no source (Seriously Fish: "several females to every male"). **[wording merged: "the breeders' standard" dropped]** (also elsewhere: yes)
- "cold water slows metabolism ... weakened immune response": PARTLY (Merck: body temperature follows the water; immune response not covered). (also elsewhere: yes)
- "A female close to giving birth may eat less": no source. (also elsewhere: yes)
- "a guppy is similarly unfussy and similarly prone to being overfed": no source in this file. (also elsewhere: yes)

**platy-handling-guide.mdx**
- "about as forgiving as community fish get": hardiness comparison, no source. **[conflict fixed: "about as forgiving as community fish get" to "a beginner fish when the water is hard enough"]** (also elsewhere: yes)
- "the variatus the better pick for a room-temperature tank": PARTLY (see tank setup). (also elsewhere: yes)
- "appearing as the fish matures anywhere from about two to six and a half months" for the species: supported for males only; females range 11 to 73 weeks. **[wording merged: FAQ now says "appearing in males anywhere from about two to six and a half months after birth"]** (also elsewhere: yes)
- "often show a dark 'gravid spot' near the vent" (FAQ): Practical Fishkeeping says "on the bellies". (also elsewhere: yes)
- "hobbyist sources routinely describe it as something you can't prevent by accident": no source. **[wording merged: "something that happens unless you separate the sexes"]** (also elsewhere: yes)
- "A typical brood lands between 20 and 50 fry ... Gestation runs roughly 4 to 6 weeks ... roughly every 4 to 6 weeks" (FunFact, FAQ): same as the cost guide; FishBase gestation is 24 to 30 days. (also elsewhere: yes)
- "a ratio of roughly two to three females per male" (FAQ and body): numeral is the guides' own. (also elsewhere: yes)
- "natural predation will keep numbers in check": inference. **[wording merged: "predation by tankmates"]** (also elsewhere: yes)
- Shop outlet "expect little or nothing in exchange, and shops favor well-colored, matching fish": Practical Fishkeeping covers saturation, the preferences are not confirmed. (also elsewhere: no)
- "A local aquarium society. Livebearer breeders sell to clubs as well as shops ... the likeliest home": Aquarium Co-Op was the only source and was removed from the block; no replacement found. (also elsewhere: no)
- "Released platies have established wild populations": USGS hedges ("locally established, or possibly established locally"). **[wording merged: "formed local populations"]** (also elsewhere: no)
- "a small starting group of 5 or 6 platies can grow within two or three months": no source. (also elsewhere: no)
- "Platy broods tend to run a bit larger than a guppy's but smaller than a molly's, and platies need less room to start than a molly does while asking for a touch more than a guppy": no source; "the guppy is the one that can be sexed within weeks of birth" and "the molly the one whose males fight hardest in an all-male group" belong to those species' files. **[conflict fixed: brood ranking against guppy and molly dropped; the tank-size comparison kept ("the platy is the middle ground on tank size")]** (also elsewhere: no)
- "all three store sperm internally, all three produce repeat broods": platy only is sourced here. (also elsewhere: yes)

**platy-health-issues-guide.mdx**
- Fin rot: "a broad-spectrum antibacterial medication" (Merck: choose by sensitivity testing) and "caught early, most cases resolve fully" (no source; Merck calls columnaris hard to control once seen); "the root trigger is almost always environmental" is close to Merck but "almost always" is not stated. **[wording merged: "almost always environmental" to "usually environmental"; "most cases resolve fully" to "it usually clears"]** (also elsewhere: yes)
- Dropsy: "usually/typically ... a systemic Aeromonas bacterial infection", "the hardest condition on this list to treat successfully", "pinecone-like": the one case report (a goldfish) calls dropsy a sign, not a disease. (also elsewhere: yes)
- Swim bladder: "most often from overfeeding or constipation, though low water temperature and internal parasites can contribute", "a short fast, sometimes paired with a blanched, deshelled pea": no veterinary or extension source found; the old source was Wikipedia (removed from the block). (also elsewhere: yes)
- Shimmy: "seen across livebearers generally, mollies, platies, swordtails, and guppies alike", "a sign the fish has lost some nerve and muscle control", "low water temperature" as a trigger, "raise the temperature toward the mid-to-upper 70s", "resolves most cases without medication": only soft or acidic water and poor water quality are supported, and only via the molly pages. (also elsewhere: yes)
- Ich: "a single organism can produce hundreds of new ones" is supported by Merck; "aquarium salt" is named with no dose, and the VCA and UF/IFAS salt doses differ several-fold. (also elsewhere: yes)
- "well-understood mechanism" (melanoma, FAQ and body): PARTLY (the regulating locus is still debated); "a pigment-cell gene ... kept in check by a separate tumor-suppressor gene": PARTLY for the same reason. **[wording merged: "well-studied mechanism" (FAQ; the body never used the phrase)]** (also elsewhere: yes)
- "stress, poor or unstable water quality, overcrowding, and skipping quarantine are the common thread behind nearly every condition on this list": Merck supports the pattern for many disorders, not "nearly every condition". **[wording merged: "most conditions on this list"]** (also elsewhere: yes)
- "prevent far more than any medication does after the fact", "Uneaten food is a common and avoidable driver of the water-quality decline behind most of these conditions": no source. (also elsewhere: yes)
- "a modest separate tank ... doubles as a place to isolate a sick fish or a female about to give birth": no source. (also elsewhere: yes)

**platy-enrichment-guide.mdx**
- "direct costs to females from constant male pursuit including energy expenditure, reduced foraging and increased vigilance" (FAQ and body): the ResearchGate guppy page that carried it was removed from the block; Plath 2007 supports reduced feeding time only. (also elsewhere: yes)
- "In the molly Poecilia mexicana, males attempt to mate almost constantly while females are largely non-responsive, so females flee, become more vigilant and feed less": unsupported wording (Plath 2007 found the cave form is the exception). (also elsewhere: yes)
- "At least two to three females per male" / "Two to three females per male minimum": the numeral is the guides' own (Seriously Fish: "several females"). (also elsewhere: yes)
- "A group of five or more", "a group of five or more spreads any chasing", "Do not keep a pair": no platy group-size source. (also elsewhere: yes)
- "Dense planting ... lets a pursued female stop being pursued" (sight-line mechanism) and "gives fry a survival rate you can manage rather than none or all": the keeper's inference; Seriously Fish supports planting only. (also elsewhere: yes)
- "platies are active mid-water fish": no source. (also elsewhere: no)
- "A platy will live through an uncycled tank. It will do so while being exposed to ammonia.": no source. (also elsewhere: yes)
- "platies take more plant matter than guppies do": no source. (also elsewhere: no)
- "Within a year an unmanaged tank is overstocked": inference from the brood interval. (also elsewhere: no)
- "The smallest and the least demanding of the three" (overview link sentence): no source. **[wording merged: "the smallest and the simplest to house of the three"]** (also elsewhere: no)
- "tank mates that will predate fry": supported in kind (Practical Fishkeeping, larger fish eat fry), not platy-specific. (also elsewhere: yes)
- "A 10 gallon tank is a reasonable starting point for a small group": below Seriously Fish's 24 by 12 inch base footprint. **[wording merged: "by volume" caveat added with the 20 by 10 inch base against the 24 by 12 inch footprint, linked to the tank guide]** (also elsewhere: yes)

## Kept without a source (owner review): hobby-site Sources removal, 2026-11-01

Owner rule (docs/RULES.md, "No hobby sites"): retailer care pages and blogs, hobby blogs, hobby magazines, Practical Fishkeeping pages without a named author, its news items and course pages left the Sources blocks. The claims below lost their only cited source in that guide's block and stay in the body as written; the owner decides.

- platy-enrichment-guide.mdx: tankmates that will predate fry as one way to handle the population. Was Practical Fishkeeping "How to breed livebearing fish" (P22, no byline). (also elsewhere: yes)
- platy-feeding-guide.mdx: fry fed three to four small meals a day (FAQ and body). P22 gave three; Seriously Fish gives 2 to 3. (also elsewhere: yes)
- platy-handling-guide.mdx FAQ: females often show a dark gravid spot. Was P22. (also elsewhere: no)
- platy-handling-guide.mdx: other fish will eat fry given the chance. Was P22. (also elsewhere: yes)
- platy-tank-setup-guide.mdx: a fishless cycle takes 4 to 6 weeks, less with a bottled bacteria product (FAQ and body). Was Practical Fishkeeping "How to Cycle a Fish Tank" (P24, no byline). (also elsewhere: yes)
- platy-cost-guide.mdx also lost P22; its brood interval and sperm storage stay on Siciliano 1972. Nothing listed.
