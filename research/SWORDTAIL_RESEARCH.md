# Swordtail (Xiphophorus hellerii, green swordtail and trade forms): Research Notes

Researched 2026-11-01. Research only: no article copy here. Every claim below comes from a page opened in this session unless it is listed under "Seen but not opened". Quotes are short extracts. Pages fetched with curl and PDFs read with pdftotext were read directly; PubMed Central, OUP, MDPI and some publisher pages block direct download, so those were read through the fetch tool (its extract, not line-by-line against the full text) or through the Crossref API for metadata and abstracts. Each row says which. Where a source used an en dash in a range, the range is written here with "to", because this file carries no em or en dashes. Quoted text keeps the source's own spelling (Seriously Fish, Practical Fishkeeping and Fishkeeper are British).

Purpose: check every factual claim and figure in the swordtail pages so a later pass can correct them in one go. Builds on LIVEBEARER_GROUP_RESEARCH.md (its ids S1 to S11 are cited where reused; swordtail ids here are W1 onward). Format follows NEON_TETRA_RESEARCH.md and CARDINAL_TETRA_RESEARCH.md; GUPPY_RESEARCH.md and MOLLY_RESEARCH.md are the sister files (their ids G and M are cited where reused and marked "not reopened").

Pages checked: content/guides/swordtail-{cost,tank-setup,feeding,handling,health-issues,enrichment}-guide.mdx (all six exist; there are no other swordtail-*.mdx files), the swordtail hub in src/lib/data/guides/fish.js (`id: "swordtail"`, line 1437, plus the swordtail row in the livebearer branch at line 61), the encyclopedia entry in src/lib/data/encyclopedia/fish.js (line 199), and the swordtail lines of content/guides/platy-swordtail-molly-overview.mdx (lines 45 to 68; the overview has no Sources block).

Verdict labels: SUPPORTED, PARTLY (supported with a caveat), CONTRADICTED, UNSUPPORTED (no strong source found that states it).

Scoping facts that matter for every number: "swordtail" on these pages means the green swordtail, Xiphophorus hellerii, and its trade forms (hi-fin, lyretail, koi, neon, red velvet, pineapple and others). Seriously Fish says: "Selective breeding has led to the development of a bewildering array of ornamental forms ... Some of these forms are also the result of artificial hybridisation with other members of the genus, particularly X. maculatus and X. variatus." Numbers for the wild species are used as the best available for trade fish. Practical Fishkeeping's "Great fish: Swordtails" covers the Montezuma and Chiapas swordtails, not X. hellerii, so its figures are marked as genus-level.

Line numbers: the cost and tank-setup numbers are file lines; for the other guides, locate by the quoted text.

---

## Source list and tier

Strongest first. "Read how" says whether the page was read directly or through the fetch tool.

| # | Source | Tier | Read how | URL |
|---|--------|------|----------|-----|
| W1 | Fedder J (2023). "Sex Determination and Male Differentiation in Southern Swordtail Fishes: Evaluation from an Evolutionary Perspective." Fishes 8(8): 407. DOI 10.3390/fishes8080407 | Peer-reviewed review | Abstract from the Crossref API (MDPI page returned 403) | https://doi.org/10.3390/fishes8080407 |
| W2 | Basolo AL and Alcaraz G (2003). "The turn of the sword: length increases male swimming costs in swordtails." Proc R Soc B 270(1524): 1631 to 1636. DOI 10.1098/rspb.2003.2388 (species studied: X. montezumae) | Peer-reviewed | PMC copy via fetch tool | https://pmc.ncbi.nlm.nih.gov/articles/PMC1691409 |
| W3 | Oufiero CE, Meredith RW, Jugo KN, Tran P, Chappell MA, Springer MS, Reznick DN, Garland T Jr (2014). "The evolution of the sexually selected sword in Xiphophorus does not compromise aerobic locomotor performance." Evolution 68(6): 1806 (19 Xiphophorus species) | Peer-reviewed | OUP abstract via fetch tool | https://academic.oup.com/evolut/article/68/6/1806/6851728 |
| W4 | Basolo AL (1990). "Female preference for male sword length in the green swordtail, Xiphophorus helleri (Pisces: Poeciliidae)." Animal Behaviour 40: 332 to 338. DOI 10.1016/S0003-3472(05)80928-5 | Peer-reviewed | Citation confirmed through Crossref API (title, journal, volume, pages, year, author). Abstract wording only from a search extract of a bibliography site (mexfish.info, page itself returned 403); Elsevier, ScienceDirect and Semantic Scholar withhold the abstract | https://doi.org/10.1016/S0003-3472(05)80928-5 |
| W5 | Basolo AL (1998). "Evolutionary change in a receiver bias: a comparison of female preference functions." Proc R Soc B 265(1411): 2223 to 2228. DOI 10.1098/rspb.1998.0563 | Peer-reviewed | PMC copy via fetch tool | https://pmc.ncbi.nlm.nih.gov/articles/PMC1689508 |
| W6 | Yanar M, Ozdes A, Erdogan E, Evliyaoglu E (2021). "Determination of thermal tolerance parameters of swordtail (Xiphophorus helleri) and platy fish (X. maculatus) acclimated to different temperature levels." Ege Journal of Fisheries and Aquatic Sciences 38(2). DOI 10.12714/egejfas.38.2.12 | Peer-reviewed | Abstract page downloaded with curl and read (the English abstract swaps the two species names; the title and the Turkish abstract both give swordtail = X. helleri) | https://dergipark.org.tr/en/pub/egejfas/article/809511 |
| W7 | Huang C, Dong Q, Walter RB, Tiersch TR (2004). "Initial studies on sperm cryopreservation of a live-bearing fish, the green swordtail Xiphophorus helleri." Theriogenology 62(1-2): 179 to 194 | Peer-reviewed | PMC copy via fetch tool | https://pmc.ncbi.nlm.nih.gov/articles/PMC5593138 |
| W8 | Ernst TR et al. (2025). "Long-Term Sperm Storage in a Superfetatious Live-Bearing Fish (Poeciliopsis gracilis, Poeciliidae)." Ecology and Evolution 15(9): e72086 (S9 in the group file). Used here only for its Table 1 of earlier Xiphophorus storage records | Peer-reviewed | PMC copy via fetch tool | https://pmc.ncbi.nlm.nih.gov/articles/PMC12410990 |
| W9 | Gasparini C, Devigili A, Pilastro A (2012). "Cross-generational effects of sexual harassment on female fitness in the guppy." Evolution 66(2): 532 to 543 (guppy; the guides' borrowed evidence) | Peer-reviewed | PubMed abstract via fetch tool | https://pubmed.ncbi.nlm.nih.gov/22276546/ |
| W10 | UF/IFAS Extension CIR920 (EDIS FA006), Francis-Floyd R, Yanong RP, Pouder DB: "Ichthyophthirius multifiliis (White Spot) Infections in Fish" (M7, G14) | University extension | PDF downloaded, read with pdftotext | https://ask.ifas.ufl.edu/publication/FA006/pdf |
| W11 | UF/IFAS Extension FA031: "Ammonia in Aquatic Systems" (EDIS FA16/FA031) | University extension | PDF downloaded, read with pdftotext | https://ask.ifas.ufl.edu/publication/FA031/pdf |
| W12 | Merck Veterinary Manual: "Parasitic Diseases of Fish"; "Disorders and Diseases of Fish"; "Bacterial Diseases of Fish"; "Nutritional Diseases of Fish" (M8) | Veterinary reference | Fetch tool | https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/parasitic-diseases-of-fish , https://www.merckvetmanual.com/all-other-pets/fish/disorders-and-diseases-of-fish , https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/bacterial-diseases-of-fish , https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/nutritional-diseases-of-fish |
| W13 | VCA Animal Hospitals: Fish White Spot Disease (Ich) (M23) | Veterinary | Fetch tool | https://vcahospitals.com/know-your-pet/fish-white-spot-disease-ich |
| W14 | Texas State University, Xiphophorus Genetic Stock Center: "XGSC Manual" (Walter RB, "The Xiphophorus Genetic Stock Center"; PDF, 4,240 lines) | University | PDF downloaded, read with pdftotext | https://gato-docs.its.txst.edu/jcr:8d3206c0-db84-408d-b92b-edf308e97b31/XGSC%20Manual.pdf |
| W15 | Texas State University IMLS: "History of the XGSC" (contains Kallman's own account; S7 in the group file) | University | HTML downloaded with curl, read | https://imls.txst.edu/history.html |
| W16 | US Fish and Wildlife Service, Ecological Risk Screening Summary: Green Swordtail (Xiphophorus hellerii), 2019 (quotes Nico et al. 2018 for USGS and FishBase) | .gov | PDF downloaded, read with pdftotext | https://www.fws.gov/sites/default/files/documents/Ecological-Risk-Screening-Summary-Green-Swordtail.pdf |
| W17 | USGS Nonindigenous Aquatic Species: Green Swordtail species profile (SpeciesID 869) | .gov | HTML downloaded with curl, read | https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=869 |
| W18 | Montana Fish, Wildlife and Parks, Montana Field Guide: Green Swordtail | .gov | HTML downloaded with curl, read | https://fieldguide.mt.gov/speciesDetail.aspx?elcode=AFCNC06010 |
| W19 | FishBase: Xiphophorus hellerii (S1) | Museum/university-tier database | HTML downloaded with curl, read | https://www.fishbase.se/summary/Xiphophorus-hellerii.html |
| W20 | Seriously Fish: Xiphophorus hellerii (S5; "Last revised 2026") | Established husbandry reference | HTML downloaded with curl, read | https://www.seriouslyfish.com/species/xiphophorus-hellerii/ |
| W21 | Practical Fishkeeping (Nathan Hill): "Great fish: Swordtails" (undated; covers X. montezumae and X. alvarezi, genus-level for X. hellerii) | Fishkeeping magazine, named author | Fetch tool | https://www.practicalfishkeeping.co.uk/features/great-fish-swordtails/ |
| W22 | Practical Fishkeeping: "Quick guide to livebearers" (M18; has an X. helleri entry) | Fishkeeping magazine | Fetch tool | https://www.practicalfishkeeping.co.uk/features/quick-guide-to-livebearers/ |
| W23 | Practical Fishkeeping: "How to breed livebearing fish" | Fishkeeping magazine | Fetch tool | https://www.practicalfishkeeping.co.uk/features/how-to-breed-livebearing-fish/ |
| W24 | Practical Fishkeeping: "A guide to acclimatising your new fish or shrimp" (N15) | Fishkeeping magazine | Fetch tool | https://www.practicalfishkeeping.co.uk/features/how-to-acclimatise-your-new-fish-or-shrimp/ |
| W25 | Fishkeeper (UK): Swordtail profile (retailer-published, no prices on the page) | Husbandry reference | Fetch tool | https://fishkeeper.co.uk/fish/freshwater/livebearers/swordtail |
| W26 | Human Ageing Genomic Resources, AnAge: Xiphophorus hellerii entry | Academic database (rated "Questionable" by its own scale) | Fetch tool | https://genomics.senescence.info/species/entry.php?species=Xiphophorus_hellerii |
| W27 | Essenberg JM (1926). "Complete sex-reversal in the viviparo teleost Xiphophorus helleri." Biological Bulletin 51: 98 to 111; Lodi E (1980). "Sex inversion in domesticated strains of the swordtail, Xiphophorus helleri Heckel." Bollettino di zoologia 47(1-2): 1 to 8 | Peer-reviewed, old | Citation metadata only, through the Crossref API. Abstracts not read (see Gaps) | https://doi.org/10.2307/1536541 , https://doi.org/10.1080/11250008009440315 |
| W28 | Plath et al. 2008 (M5) and Koehler et al. 2011 (M4), Poecilia mexicana harassment studies | Peer-reviewed | Not reopened; findings taken from MOLLY_RESEARCH.md | see MOLLY_RESEARCH.md |

Price observations only (retailers, never citations): PetSmart US live fish page, opened 2026-11-01 (https://www.petsmart.com/fish/live-fish): "Red Velvet Swordtail" $3.99 and "Pineapple Swordtail" $3.99. Aquatic Arts product page, opened 2026-11-01 (https://aquaticarts.com/products/premium-assorted-swordtails-xiphophorus-hellerii-tank-bred): tank-bred assorted swordtails, 1 male $6.79 (regular $7.99), 3 males $14.44, 1 female $5.94, 3 females $13.59; the page also says "Minimum tank size: 20 gallons", "Average adult size: 3 to 4 inches" and "pH: 7.0 to 8.3" (retailer figures, shown only so the later pass knows where the 20 gallon and 3 to 4 inch numbers circulate).

Seen but not opened, so nothing is cited from them: Beaugrand and colleagues' Cogprints papers on male X. helleri dominance (1984 mixed-group study; 1991 and 1996 dyad and triad studies; Southampton archive returned 403 to curl and to the fetch tool; search extracts only, one reported "dominant males also are responsible for 80% of all sexual activity"); Tuckett QM, Ritch JL, Lawson KM, Lawson LL, Hill JE (2016), "Variation in cold tolerance in escaped and farmed non-native green swordtails (Xiphophorus hellerii) revealed by laboratory trials and field introductions" (title confirmed in a reference list, results not read); a Rhodes University repository abstract on intercohort cannibalism in captive-bred swordtails (403; the search extract reported refuges and a false bottom or false side lowered cannibalism and that "the removal of males under farming conditions resulted in a 19.5% reduction in the rate of cannibalism"); Texas State "Fishes of Texas" (503); encyclopedia.pub and MDPI full text of Fedder 2023 (403); Costa Rican lab sex-reversal and growth paper on redalyc (403); Eschmeyer's Catalog of Fishes and IUCN (not tried, IUCN status taken from FishBase). A first fetch of an Animal Diversity Web URL returned a 404.

---

## 1. Identity, size, range, status

1.1 Adult size
- FishBase: "Max length : 14.0 cm TL male/unsexed; ... 16.0 cm TL (female); common length : 2.8 cm TL male/unsexed". (W19) USGS NAS repeats it: "Females to 16 cm TL; males to 14 cm TL". (W17) Seriously Fish: "140mm SL / 6in SL" (no sex split), and "Adult males tend to be smaller than females". (W20) Fishkeeper: "14cm (5.5")" maximum. (W25)
- Guides: "Males reach about 5.5 inches including the sword ... females ... up to about 6.2 inches" (handling guide, hub, encyclopedia, overview line 57). 14.0 cm is 5.5 in, SUPPORTED. 16.0 cm is 6.3 in, so "6.2" is a rounding slip, SUPPORTED within 0.1 in (the group file noted the same). Whether FishBase's male TL includes the sword is not stated on the page; the guides say "including the sword", which is an inference.
- "Females are the larger sex": SUPPORTED (FishBase, Seriously Fish).
- Retailer figures of "3 to 4 inches" (Aquatic Arts) and "10 to 12 cm" (Aqua-Fish) are for typical trade fish, not maxima; no guide uses them.

1.2 Range and habitat
- Seriously Fish: "Native to southeastern Mexico, central Guatemala, southern Belize, and northwestern Honduras. Its known range extends south from the Rio Nautla ... in central Veracruz state, Mexico, to the Rio Usumacinta drainage in Guatemala, the Rio Sarstun ... and the rios Copan and Chamelecon in Honduras." (W20) FishBase: "North and Central America: Rio Nantla, Veracruz in Mexico to northwestern Honduras." (W19)
- Encyclopedia `origin`: "Atlantic slope of Mexico, Belize, Guatemala, and Honduras (Veracruz to the Rio Usumacinta drainage)". PARTLY: the countries match; the parenthetical stops at the Usumacinta, short of the Belize and Honduras part of the range.
- Habitat. Seriously Fish: "Natural populations are found in various types of habitat from sea level to around 1500 m altitude, including fast-flowing, rocky streams, to springs, ditches, ponds, and rivers containing clear to turbid water. In most cases the water is less than 1.5 m deep and there is no aquatic vegetation. In flowing water adults tend to congregate in areas with greater current, while juveniles and subadults display a preference for quiet marginal zones." (W20) FishBase says the opposite on plants: "Adults are found mainly in rapidly flowing streams and rivers, preferring heavily vegetated habitats". (W19) The encyclopedia habitat line ("Fast-flowing rocky streams, springs, ditches, ponds, and rivers from sea level to 1,500 m; adults favor stronger current than juveniles") is SUPPORTED by Seriously Fish. The guides' advice to plant densely is husbandry, not a claim about the wild habitat, but note Seriously Fish says wild habitat usually has no vegetation.
- Introduced populations: "now present on all major continents except Antarctica" (Seriously Fish); USGS: "Most introductions probably due to aquarium releases." Not used in the guides.

1.3 Conservation
- FishBase: IUCN "Least Concern (LC); Date assessed: 29 March 2018" (IUCN list version 2025-2). (W19) Encyclopedia "Least Concern (IUCN)": SUPPORTED, via FishBase (IUCN not opened).

1.4 Etymology and history
- Seriously Fish: "Xiphophorus: from the Ancient Greek xiphos (ksiphos), meaning 'a kind of double-edged sword', and -phoros ... meaning 'bearing', in allusion to the presence of a gonopodium in males of this genus." "hellerii: named in honour of Austrian botanist and naturalist Karl Bartholomaeus Heller (1824-1880), who explored Mexico between 1845-1848 and brought the type series of X. hellerii to Vienna." Authority "Heckel, 1848", "Type locality is 'Orizaba, Mexico'". (W20) Encyclopedia history paragraph on Heller and Heckel: SUPPORTED. "Sword bearer" in the overview and encyclopedia: SUPPORTED (Seriously Fish glosses the sword as the gonopodium, but "sword bearer" is the literal Greek).
- XGSC history (W14, W15). Gordon "began his scientific work in 1924 while still an undergraduate student with 6 platyfish of a domesticated stock, and the following year he added some swordtails." (W15) SUPPORTED for "begun working on these fish at Cornell in 1924". The Manual: "In 1939, Dr. Myron Gordon established the Xiphophorus Genetic Stock Center (XGSC) at the American Museum of Natural History", and its Figure 1 caption says "collections he made in Mexico from 1929-1959" while the text says "the early 1930's". (W14) The encyclopedia says expeditions "from 1930 onward": PARTLY (the Manual gives 1929 in a caption and "early 1930's" in text; the Cornell Mexico Expedition was 1932 per W15).
- Order of institutions. Encyclopedia: "run out of the New York Aquarium and then the American Museum of Natural History". W15 supports Gordon's lab being at the New York Aquarium (Castle Clinton, 1938) before moving to the American Museum, and Kallman writes that the lab "stayed at the American Museum until 1968, when it moved ... at the New York Aquarium in Coney Island". The Manual says the Center was established "at the American Museum". So the 1939 founding is described differently by the two Texas State pages; "Aquarium then Museum" is supported for the lab, but the encyclopedia compresses 1939 to 1968 and omits the 1968 move back to the Aquarium. Low risk.
- "Klaus Kallman took the collection over after Gordon's death in 1959": SUPPORTED (Manual: "In 1959, upon Dr. Gordon's passing the Stock Center was maintained and substantially expanded by Dr. Klaus Kallman"). "Moved to Texas in 1992": CONTRADICTED by the Manual, which says "In 1993, due to Dr. Kallman's retirement, the XGSC was transferred to Texas State University". Kallman's own text on the history page says "after my retirement in 1992, the laboratory would be moved to Texas". So 1992 is the retirement year and 1993 the transfer.

## 2. Lifespan

- Seriously Fish, FishBase, Fishkeeper and both Practical Fishkeeping pages give no lifespan. USGS and the Montana guide give none. (W17 to W22, W25)
- AnAge lists "5 years (captivity)" as maximum longevity, citing FishLore (a hobby forum site) and rating the data "Questionable" with a "Small" sample. (W26)
- Nothing opened gives a wild lifespan.
- Verdicts. "3 to 5 years on average with stable water quality" (cost guide FAQ and body, hub, overview "mollies and swordtails commonly live 3 to 5 years"): UNSUPPORTED by any strong source; the only appearance of 5 is a Questionable AnAge record sourced to a hobby site. The retailer-tier pages that carry 3 to 5 (Aquarium Source) and 3 to 4 (Aqua-Fish, "in captivity") were opened for tracing only. Encyclopedia `wildLifespan: "3-5 years"`: UNSUPPORTED, and it presents an aquarium figure as a wild one.

## 3. Tank size and footprint

- Seriously Fish: "An aquarium with surface dimensions of 120 x 30 cm (48 x 12 in) or equivalent should be the smallest considered." Volume "~108 litres ~29 US gal". (W20) FishBase: "Aquarium keeping: the males aggressive towards each other; minimum aquarium size 80 cm." (W19) Fishkeeper: "a minimum of 3ft in length, and preferably longer". (W25) Practical Fishkeeping gives no tank size for swordtails. (W21, W22)
- Guides: "20 gallons is the genuine floor for a small trio" (cost, tank-setup, hub, enrichment "A 20 gallon long is a sensible floor"), with "29 to 30 gallons" the realistic target (tank-setup title, hub).
- Verdict. CONTRADICTED for the 20-gallon floor: the only strong sources set 48 inches (Seriously Fish), 3 ft (Fishkeeper) or 80 cm (FishBase) as the smallest length. A standard "20 gallon long" is about 30 inches long (general knowledge, not from a source here; check the linked product before rewriting). SUPPORTED for "29 to 30 gallons": it is exactly Seriously Fish's ~29 US gal at 48 x 12 in. The retailer figures that circulate (20 gallons Aquatic Arts; 15 gallons Aquarium Source; 26 gallons Aqua-Fish) are not authoritative.

## 4. Water: temperature, pH, hardness, salt

4.1 Temperature
- Seriously Fish: 16 to 28 C (61 to 82 F). FishBase: 22 to 28 C (72 to 82 F). Fishkeeper: 15 to 28 C (59 to 82 F). Practical Fishkeeping: "22-28 C / 72-82 F" for swordtails in general. (W19 to W21, W25) Montana FWP: swordtails can exist there "only in warm springs, ponds, and resultant streams in water temperatures of 68-80 degrees F". (W18)
- Guides: "roughly 65 to 82 F, with 75 to 79 F the steadier target". PARTLY: the 82 F ceiling is SUPPORTED by all four husbandry sources (28 C). The 65 F floor is inside Seriously Fish and Fishkeeper but below FishBase and Practical Fishkeeping (72 F). The 75 to 79 F target is UNSUPPORTED by these sources (Aquarium Source calls it a "sweet spot"; it sits inside 72 to 82 F).
- Lab limits: Yanar et al. 2021 (W6), swordtail: critical thermal minimum 9.38, 11.5 and 13.23 C and critical thermal maximum 36.94, 38.89 and 40.07 C after acclimation at 20, 24 and 28 C. "Acclimation temperature affected the lower and upper temperature tolerances of fish by 3-4 degrees C." So the species is not fragile at 30 C (86 F); the husbandry ceiling is a comfort and oxygen limit, not a lethal limit.

4.2 pH
- FishBase: pH 7.0 to 8.0 (dH 9 to 19). Seriously Fish: pH 7.0 to 8.0. Fishkeeper: "pH: 7-8". Practical Fishkeeping Great fish: "Aim for a pH of between 7.0 and 8.0." Practical Fishkeeping Quick guide: "Water should be neutral to slightly alkaline (pH 7.0-8.3)." (W19 to W22, W25)
- Guides: "pH 7.0 to 8.4" (tank-setup FAQ and body, handling guide, hub, hub comparison row `ranges: { ph: [7.0, 8.4] }`). CONTRADICTED: no strong source goes above 8.3. The 8.4 appears on Aquarium Source ("7.0 to 8.4 (slightly alkaline)"), which the tank-setup and handling guides cite.

4.3 Hardness
- Seriously Fish: 10 to 25 dGH. Practical Fishkeeping Great fish: "a hardness value between 10 and 20 DH". Fishkeeper: "dH: 8-20 degrees". FishBase: dH 9 to 19. (W19 to W21, W25)
- Guides: "roughly 10 to 25 dGH". SUPPORTED by Seriously Fish; the three others stop at 19 or 20.
- "Soft tap water can be brought up with crushed coral or a buffering product": UNSUPPORTED (no source opened covers remineralizing). "Moderately hard to hard": SUPPORTED in kind.
- Salt tolerance. FishBase lists "Freshwater; brackish". No salinity figure for X. hellerii was found. The guides do not claim salt tolerance beyond the ich-salt line (see section 9).

## 5. Group size, sex ratio, aggression, tankmates

- Seriously Fish: "In confined spaces groups of males tend to form dominance hierarchies and may invest a significant proportion of time maintaining their respective positions." Social rating "needs to be in a group"; compatibility "fine with others"; no ratio given. (W20) FishBase: "the males aggressive towards each other". (W19)
- Practical Fishkeeping Quick guide, X. helleri entry: "It's best to avoid more than one male of these in the same tank, as they can be aggressive towards each other." (W22) Practical Fishkeeping Great fish: "Always keep more females than males", "Male swords often bicker and display for dominance over each other", losers "much likelier to be picked on"; ratio "one male to two or more females" (Montezuma) and "One male to two or three females" (Chiapas). (W21)
- Fishkeeper: "Keep one male per tank in smaller setups"; in larger groups "three or more males to spread aggression, outnumbered by females". Tankmates: community tanks "where no tiny fish are present". (W25)
- Guides: "at least two or three females per male, and three or four where the tank allows" (handling, enrichment, health, hub): the floor of two or three is SUPPORTED (Practical Fishkeeping); "three or four better" is UNSUPPORTED (no swordtail source gives it; Aquarium Source says "four females to a single male").
- "Two males in one tank is the arrangement that reliably produces a hounded loser", "exactly two males is the one combination to avoid", "Several males in a large, well-planted tank works because the aggression distributes" (enrichment guide, handling guide, hub "Not two males"): PARTLY. Fishkeeper supports the spreading idea (three or more males in a larger group). No opened source singles out exactly two. Practical Fishkeeping's Quick guide says avoid more than one male, which is the stricter rule. The "problem number is two" framing is the guides' own inference (dyads concentrating attack is plausible and Beaugrand's dyad studies exist, but they were not opened).
- "Male swordtails are more aggressive toward each other than guppies or platies are" and "Mollies and guppies get by on a looser ratio" (enrichment FAQ, handling guide): UNSUPPORTED as a comparison. The sources say swordtail males squabble; none compares them with other livebearers. Sailfin molly males are described as squabbling too in MOLLY_RESEARCH.md.
- Tankmates "platies, mollies, cory catfish, rosy barbs, kuhli loaches and otocinclus" (tank-setup): UNSUPPORTED by name; Seriously Fish says only "fine with others", Fishkeeper says no tiny fish. "A swordtail does not defend itself and turns timid around [aggressive fish]": UNSUPPORTED.

## 6. Diet and feeding

- Seriously Fish: "Stomach analyses of wild specimens have shown it to be a generalised omnivore, feeding on a range of aquatic and terrestrial invertebrates, organic detritus, algae, and other plant material. In the aquarium it is unfussy and will accept just about anything offered. Offer a balanced diet comprising good quality dried products along with small live and frozen foods such as Daphnia, Artemia and chironomid larvae (bloodworm)." (W20) FishBase: "They feed on worms, crustaceans, insects and plant matter." (W19) Fishkeeper: flakes (standard and green) plus frozen foods; "graze algae and biofilm from live plants". (W25)
- Feeding guide's wild diet (almost word for word Seriously Fish) and food list: SUPPORTED. "In roughly even measure" / "genuinely balanced mix": UNSUPPORTED as a proportion (the sources say generalised omnivore, no split). The comparison with the molly ("leans considerably more herbivorous") is SUPPORTED for the sailfin molly and only partly for the short-finned molly (MOLLY_RESEARCH.md section on diet).
- Merck, "Nutritional Diseases of Fish": "Most aquarium fish should be fed at least daily"; "Ideally, adult fish should be fed 3% of their body weight daily for maintenance"; "Fry and fingerlings can be fed up to 5% of their body weight daily"; "Feeding a wide variety of feeds is one way to try to meet the nutritional requirements". The page "does not discuss overfeeding". (W12)
- Verdicts. "Once or twice a day for adults": SUPPORTED in kind (Merck "at least daily"; the exact count is not sourced). "Feed only what is cleared within about 2 minutes": UNSUPPORTED (Merck gives a body-weight percentage, no minutes). "Overfeeding drives constipation and swim bladder problems directly": UNSUPPORTED (Merck does not discuss overfeeding).
- Fry. Practical Fishkeeping: "Feed three times a day if you can" and "Baby brineshrimp is one of the best-known fry foods for nearly all fish". (W23) Quick guide: "Newly hatched brine shrimp are considered best". (W22) Guide: "3 to 5 times a day", "finely crushed flake or newly hatched baby brine shrimp", "infusoria stage is usually unnecessary": brine shrimp SUPPORTED, "3 to 5 times" PARTLY (Practical Fishkeeping says three), "born larger and more developed than egg-layer fry ... infusoria unnecessary" UNSUPPORTED.
- Why a swordtail stops eating (stress, cold, impending birth, illness): UNSUPPORTED by any opened source (general husbandry). "Impending birth ... eat less in the day or so beforehand": UNSUPPORTED.
- Juveniles "more frequent, higher-protein feeding": the guide itself says "less precisely documented"; UNSUPPORTED, honestly flagged.

## 7. Breeding: maturity, gestation, brood size, interval, sperm storage, fry

- FishBase: "Female produces 20 to 200 young after a gestation period of 24 to 30 days. Attains sexual maturity after eight to twelve months." (W19) Fishkeeper: gestation "24-28 days after insemination", "up to 50 free-swimming fry", "roughly every 28 days in mixed groups"; adults "will prey on fry unless separated, though some survive in well-planted tanks". (W25) Practical Fishkeeping: "each spawning may result in a good 20 to 80 fry, with 30 being common"; swordtails "sometimes stretch to 40 day cycles between broods"; fry "are likely to be eaten in any tank into which they are introduced". (W21, W23) XGSC Manual (lab, all Xiphophorus): "brood sizes typically range from 5-35 individuals"; "producing females will drop new broods about every 30 days"; "In platyfishes, the cycle from birth to sexual maturity may take from 3-6 months, whereas in swordtails, this cycle may take a year or more"; the Belize stock "can reach maturity at about 6 months of age"; the Cd stock "may take anywhere from 6 months to one year". (W14) Montana FWP: "Sexually mature in 3-4 months ... Several broods per year under favorable conditions." (W18)
- Sperm storage. Seriously Fish: "Females are also capable of storing viable male sperm for months," (the sentence is cut off on the live page). Huang et al. 2004: females may "store sperm for months or years" and "release broods about every 30 days" (fetch tool extract). (W7) Ernst et al. 2025 Table 1 lists earlier X. helleri records: "≥ 10 months" (7 fish, Van Oordt 1928) and "≈7 months" (Clark 1950, "reported without direct experimentation"); the 1953 Vallowe isolation study of 5 females is listed under X. maculatus in the table although the text calls it X. helleri. (W8)
- Verdicts. "Gestation runs about 4 weeks": SUPPORTED (24 to 30 days). "A single mating can keep a female producing fry for months": SUPPORTED (Seriously Fish, Huang, Ernst Table 1). "20 to 100 or more fry" (cost FAQ, hub, handling FunFact "typical brood ... between 20 and 100 or more"): PARTLY. FishBase's 20 to 200 covers it, but "typical" is high against Practical Fishkeeping (30 common), Fishkeeper (up to 50) and the XGSC lab (5 to 35); say "20 to 200 reported, 30 common". "Roughly every 4 weeks": SUPPORTED (28 to 30 days; Practical Fishkeeping notes up to 40). "Without a fresh mating each time": SUPPORTED by sperm storage.
- Maturity: no guide states it. If added, the sources span 3 to 4 months (Montana), 8 to 12 months (FishBase) and 6 months to over a year (XGSC), so give a range.
- "Swordtail parents don't provide any care ... adults will readily eat their own fry": SUPPORTED in kind (Fishkeeper, Practical Fishkeeping).
- "Dense live planting or a dedicated breeding tank": SUPPORTED in kind (Fishkeeper "some survive in well-planted tanks").
- "Gentle sponge filter for fry": UNSUPPORTED (no opened source).
- Platy hybrids and "interbreed readily": see section 10.

## 8. Sex, sword and sex reversal

8.1 Sexing
- Seriously Fish: "Adult males tend to be smaller than females and possess a prominent gonopodium, plus the characteristic extension of the lower caudal-fin lobe. In some ornamental strains the upper caudal-fin lobe or other fins may also be extended, however, including in females." (W20) This last sentence matters: in trade strains females can carry extended fins, so "females lack the sword entirely" and "females carry no sword at all" (handling guide) is PARTLY true for the wild species only; the guide's "females have a fuller fan-shaped anal fin" and "dark gravid spot near the vent" are UNSUPPORTED.
- Practical Fishkeeping: "Only male swordtails have the elongated tail. A female's looks more like those of a platy." (W23)

8.2 The sword and female choice
- Basolo 1990: females given a choice between two males differing in sword length "preferred males with longer swords" in all five tests and the preference "was shown to be an increasing function of difference in sword length", with preferences reversing when sword lengths were reversed. (W4; wording from a search extract of the abstract, citation confirmed by Crossref.) Seriously Fish: females "exhibit preferences for numerous physical and behavioural traits such as sword length (long, short, or without), colour pattern, body size, vertical barring on the body, chemical cues and specific nuptial behaviours". (W20) Basolo 1998: in X. helleri "The preference functions for body size and sword length ... are not significantly different". (W5)
- Cost guide FunFact ("a 1990 study ... found that the strength of the preference actually increases as the gap in sword length grows"): SUPPORTED (abstract extract). "Textbook example of sexual selection through female choice": SUPPORTED in kind. "It's a genuine part of why the fancier, longer-finned varieties cost more at the store": UNSUPPORTED (inference).
- Overview and encyclopedia: "females show measurable preferences for males with longer swords and bolder patterning": PARTLY. Longer swords SUPPORTED (Basolo 1990); "bolder patterning" is covered by Seriously Fish's list of traits, not by Basolo 1990 for this species.
- "The sword plays no role in swimming" (cost FunFact, overview line 57, encyclopedia): CONTRADICTED in the sense the guides intend. Basolo and Alcaraz 2003 (X. montezumae): "males with longer swords expend more energy than males with shortened swords during both types of swimming" and the sword raises the cost of courtship swimming. Oufiero et al. 2014 (19 species) found "no significant relationship between sword length and critical swimming speed" and concluded variation in sword length "is not costly for this aspect of swimming performance". So the sources say the sword is not a swimming aid, and whether it is a cost depends on the measure; "plays no role" is too strong. Safer: "doesn't help it swim and may cost it energy".

8.3 Sex reversal
- FishBase: "This species has a tendency to undergo sex reversal (from female to male) under certain environmental conditions." (W19)
- Fedder 2023 abstract: "Natural sex change has not been documented sufficiently convincingly in swordtails, but, at least in some subspecies, two or more male phenotypes exist." It also says "swordtails are very easy to breed in freshwater aquaria". (W1)
- Essenberg 1926 (title: "Complete sex-reversal in the viviparo teleost Xiphophorus helleri") and Lodi 1980 ("Sex inversion in domesticated strains of the swordtail") exist as citations (W27); a search extract of the Lodi abstract said it concluded many alleged cases were probably males with underdeveloped gonads, but I could not open it, so do not state that as verified.
- XGSC history, Kallman: Gordon's expedition collected X. helleri at Jalapa and "were puzzled by the many large males with incompletely formed gonopodia and undifferentiated gonads". (W15) XGSC Manual: individual stocks differ widely in age at maturity (see section 7). Both support the "late-developing male" explanation the handling guide gives.
- Verdicts. Handling guide: "researchers disagree on whether this is true sex reversal or simply male traits emerging late in a fish that was missexed as a juvenile": SUPPORTED, and it is the best-calibrated wording on the site. "It's been studied since the 1930s": CONTRADICTED on the date (Essenberg's paper is 1926). "Hobbyists have reported, for generations, ... even fathering broods of their own": the fathering claim is UNSUPPORTED by anything opened (Essenberg reported it per a search extract). Hub FunFact: "Female swordtails that have already given birth can sometimes go on to develop a sword, male coloring, and even father broods of their own later in life": presents the contested claim as a statement of fact before hedging; PARTLY. Enrichment guide ("Older females sometimes develop a sword and male-like features. It is a genuine and well-documented quirk of the species"; FAQ "Occasionally ... a well-known quirk of the species"): CONTRADICTED. Fedder 2023 says natural sex change "has not been documented sufficiently convincingly"; FishBase says only "tendency ... under certain environmental conditions". "Older" and "after giving birth" are UNSUPPORTED by the opened sources. The enrichment guide and the handling guide disagree with each other (settled quirk against open question).

## 9. Health: ich, fin rot, dropsy, swim bladder, quarantine

- Ich. UF/IFAS: a single organism produces "as many as 1024 new 'daughter' parasites (tomites)"; "At warm temperatures (75F to 79F), the life cycle is completed in about 3 to 6 days. At these temperatures, chemical treatments should be applied daily, and a minimum of 3 to 5 treatments are required"; "at warmer water temperatures (75-79F), use of 4-5 g/L (= 4-5 ppt) salt (sodium chloride) in a prolonged bath for 7 to 10 days is another effective treatment in smaller systems, provided the fish species can handle the increased salt concentration"; "Do not use copper sulfate if the total alkalinity is less than 50 mg/L." (W10) Merck: "Clinical signs of ich include lethargy, clamped fins, and dark coloration; white dots are often visible on the skin"; "Formalin or copper are often drugs of choice"; "At warm temperatures typical of home aquaria (eg, >26 C), infected fish should be treated daily"; "Over-the-counter medications for pet fish often contain formalin and malachite green"; the Ich section recommends no heat treatment; freshwater table row: "increase salinity to 5 g/L for one week at >=24 C (75 F) if the fish species will tolerate it". (W12) VCA: "Most strains of ich cannot survive in water temperatures above 86F" and "Not all fish can stand the heat, though", salt "about a tablespoon of salt per 5 gallons", "only suitable for scaled fish". (W13)
- Verdicts. Description, life cycle, malachite green or formalin, copper only after an alkalinity test: SUPPORTED. "Warm the tank slowly to about 82 F with good aeration" and "82 F is as warm as a swordtail goes, short of the heat that kills ich on its own": PARTLY. 82 F (28 C) is the husbandry ceiling in every source (section 4), and VCA supports heat plus oxygen, but Merck and UF/IFAS give chemical and salt protocols only. Does the swordtail tolerate 86 F? By physiology yes (Yanar CTMax 40.07 C at 28 C acclimation), by listed husbandry range no; the heat hold is therefore a judgment call, not a sourced instruction. The guides omit that at 82 F treatments should be daily (Merck, UF/IFAS). The salt line gives no dose; UF/IFAS gives 4 to 5 g/L for 7 to 10 days, VCA about 1 tablespoon per 5 gallons (roughly a fifth of that, MOLLY_RESEARCH.md does the arithmetic). Swordtail salt tolerance at 5 ppt is unsourced beyond FishBase "brackish" and UF/IFAS's "most freshwater fish can tolerate 5 ppt for several weeks".
- Dropsy. Merck: "fluid accumulation in the abdomen ('dropsy' and 'pinecone disease')" is a sign of Aeromonas infection; "Aeromonas infection is the most common bacterial infection of freshwater aquarium fish". (W12) SUPPORTED for the description and Aeromonas link. "The hardest condition on this list to treat ... poor outlook": UNSUPPORTED (Merck: antimicrobials "when fish are dying", remove stressors).
- Fin and tail rot. Merck's bacterial page does not use the terms fin rot, tail rot or dropsy; it ties Aeromonas to "low dissolved oxygen, other water quality problems" and says "Ulcerative lesions are common". (W12) "Bacterial in origin and usually tied to poor water quality": PARTLY. "Improving water quality alongside an antibacterial treatment resolves most cases caught early": UNSUPPORTED. "Fin damage from male chasing is a real, documented trigger": UNSUPPORTED for swordtails (no opened source documents fin damage from chasing; Practical Fishkeeping says losers are "picked on").
- Swim bladder. No veterinary or extension page opened covers it; hobby results only. "Usually from overfeeding or constipation ... short fast": UNSUPPORTED.
- Water quality as the common thread: Merck: disorders "are the result of stress, poor water quality, overcrowding, and failure to quarantine any new or sick fish". SUPPORTED. "Unbalanced sex ratio ... measurably raises the odds of the pathogen-driven conditions" (health guide FunFact, hub `vetLine`): UNSUPPORTED for swordtails (the stress-immunity link is general; no opened source measures it here).
- Quarantine. UF/IFAS: "a minimum 30-day quarantine period is recommended for new fish." SUPPORTED (hub, handling, health).
- Health-guide claim that a "livebearer-specific shimmy occasionally turns up in swordtails": UNSUPPORTED for swordtails (shimmy is a molly topic in MOLLY_RESEARCH.md).
- "Swordtails rarely see a vet" (cost guide, hub): UNSUPPORTED.
- Cycling (tank-setup guide: "takes 4 to 6 weeks with a fishless cycle"; hub rules): UF/IFAS FA031: "A new biofilter requires six to eight weeks to build up sufficient bacteria to effectively reduce ammonia and nitrite levels." CONTRADICTED by the stronger source (shared aquarium-cycling guide may need the same fix).
- Acclimation (handling guide: "Float the sealed bag ... 15 to 20 minutes ... drip acclimate over 45 to 60 minutes"): Practical Fishkeeping says floating lets the bag water "slowly match the water of their new home" and the step of adding tank water "could take anywhere from 30-60 minutes"; the whole drip process "is likely to take a couple of hours", and advises "it is good practice not to pour the contents of the whole bag into your aquarium". (W24) The "net rather than pour" advice is SUPPORTED; the minute figures are UNSUPPORTED and lower than the magazine's.

## 10. Hybridization with platies, hybrids in the trade

- Seriously Fish: trade forms are partly "the result of artificial hybridisation with other members of the genus, particularly X. maculatus and X. variatus". USFWS (quoting Nico et al. 2018): "Many ornamental swordtails are hybrids of X. hellerii with the either X. maculatus or X. variatus." (W16, W20) The same USFWS text says Nevada Xiphophorus "were identified as hybrids of X. hellerii x X. maculatus" in some collections.
- XGSC Manual: "Xiphophorus interspecies hybrids are almost always fertile"; and "With the exception of crosses between X. helleri and X. maculatus most interspecies hybrid crosses do not require artificial insemination." (W14) Read plainly, in the stock center's lab setting the helleri x maculatus cross is the exception that does need artificial insemination.
- XGSC history: Kosswig (1928) and Gordon (1931) worked on platyfish x swordtail melanoma; Gordon began with swordtails in 1925. (W15) SUPPORTED for "crossed intentionally for almost a century".
- Verdicts. "Platies and swordtails share a genus and have been intentionally crossed for almost a century" (cost guide, overview, encyclopedia): SUPPORTED. "Interbreed readily" (cost guide, tank-setup, hub caution, overview, encyclopedia): PARTLY. Hybrids exist in the trade and in the wild, but no opened source says they mate readily in a community tank, and the XGSC singles out this exact cross as needing insemination in the lab. "By most current accounts most swordtails already sold in the hobby carry at least some platy ancestry" (cost guide): CONTRADICTED in strength: Seriously Fish says "Some of these forms", USFWS says "Many ornamental swordtails", and the hybrid partner is platy or variatus. "Many" is the safe word.
- Cost-guide FAQ: "swordtails and platies share a genus and interbreed readily, so an unplanned mix ... can leave you with fry that aren't cleanly one species": see above; the fry-mixture consequence is UNSUPPORTED for tank conditions.

## 11. Behavior and welfare research (enrichment guide)

- Gasparini, Devigili and Pilastro 2012 (guppy): prior work "mostly measured its direct costs to females, such as energy expenditure and reduced foraging"; high-harassment mothers had daughters with smaller bodies and sons "with shorter gonopodia". (W9) The enrichment guide's "costs to females ... energy expenditure, reduced foraging and increased vigilance" and "A guppy study found effects reaching into the next generation": SUPPORTED. "Increased vigilance" comes from Plath et al. 2008 in Poecilia mexicana (W28, not reopened): surface females "are more vigilant in the presence of a male ... which detracts from the time spent feeding". "Males attempt to mate almost constantly, females are largely non-responsive": UNSUPPORTED in that wording (MOLLY_RESEARCH.md reached the same verdict).
- "Nothing on swordtails specifically": PARTLY. There is male-male dominance work on X. helleri (Beaugrand and colleagues; not opened) and Basolo's female-choice work, but I found no peer-reviewed welfare or harassment study in swordtails. The honest-borrowing framing is correct.
- "Swordtails are the largest and most active of the common livebearers": "largest" SUPPORTED narrowly (FishBase swordtail female 16.0 cm TL against sailfin molly male 15.0 cm TL; MOLLY_RESEARCH.md found the molly enrichment guide claims the same of mollies, so the two pages contradict each other); "most active" UNSUPPORTED (Seriously Fish: "does seem to appreciate a degree of water movement"). "Use horizontal distance" and "from moving water": SUPPORTED in kind (fast-flowing rocky streams, adults in current).
- "Aim the outflow along the length so there is a faster end and a slower end": UNSUPPORTED, but Seriously Fish's habitat note (adults in current, juveniles in quiet margins) points the same way.
- "Swordtails graze more than guppies" (vegetable content): UNSUPPORTED as a comparison; the omnivore diet is supported.
- Tank guide vegetation: Vallisneria 'Tiger' (30 to 50 cm), hornwort, anubias: plant facts cited to Tropica, a plant producer; they are horticultural facts outside this file's scope, and the wild habitat note (section 1.2) says vegetation is often absent.

## 12. Jumping, filtration, lighting, substrate

- Jumping ("powerful jumpers", "gaps of well under an inch"): no strong source opened mentions it (FishBase, Seriously Fish, Fishkeeper, both Practical Fishkeeping pages are silent). Only retailers and hobby pages say it. UNSUPPORTED by strong sources; the advice itself (lid) is low risk. "Hobbyist reports" is the honest framing the guides use.
- Filtration. Seriously Fish: "Filtration does not need to be particularly strong though it does seem to appreciate a degree of water movement." Its equipment line: "At ~108 litres ~29 US gal and a turnover of four to five times the volume an hour, look for a filter rated 430 to 540 lph." (W20) The figure "4 to 5 times" is therefore SUPPORTED as Seriously Fish's sizing, but "Swordtails need more real filtration capacity than a guppy or molly" is CONTRADICTED by "does not need to be particularly strong".
- Lighting "8 to 10 hour daily cycle": UNSUPPORTED (no source). Substrate "fine gravel or sand, avoid sharp": UNSUPPORTED by strong sources; Seriously Fish says it "tends to look best in a heavily-planted set-up with a dark substrate".

## 13. Price observations (retailers, not sources)

- Guide: "$3 to $6 each", "six-pack ... about $29.99, roughly $5 per fish", hi-fin lyretail six-pack "$37.99", "rarer patterns ... $15 to $25 or more", monthly upkeep "$20 to $35" (cost guide). Observed 2026-11-01: PetSmart $3.99 for Red Velvet and Pineapple; Aquatic Arts $5.94 to $6.79 each for single tank-bred fish. The $3 to $6 range holds. The $15 to $25 rare-pattern range and the $20 to $35 monthly upkeep: no observation or source (the cost tables are the site's own price system). The $29.99 six-pack and $37.99 hi-fin pack were not re-observed.

---

## Contradictions and unsupported claims

### Contradicted (sources say something different)

C1. pH. tank-setup FAQ and body, handling guide, hub `firstWeek` "Water chemistry" row and the hub comparison row (`ranges: { ph: [7.0, 8.4] }`, "7.0 to 8.4"): "pH 7.0 to 8.4". FishBase, Seriously Fish and Fishkeeper: 7.0 to 8.0; Practical Fishkeeping: 7.0 to 8.0 (Great fish) and 7.0 to 8.3 (Quick guide). 8.4 appears only on Aquarium Source, a cited weak source. Change to 7.0 to 8.0.

C2. Tank floor. cost guide ("20 gallons is the genuine floor for a small trio"), tank-setup FAQ and "Tank Size" ("20 gallons is the genuine floor"), hub tank row and FAQ and comparison value ("20 gallons for a trio"), enrichment ("A 20 gallon long is a sensible floor rather than a generous provision"). Seriously Fish: 120 x 30 cm (48 x 12 in), ~29 US gal, "should be the smallest considered"; Fishkeeper: "a minimum of 3ft in length"; FishBase: "minimum aquarium size 80 cm". Make the 29 gallon, 48 inch tank the floor, which the tank guide's own title already says.

C3. Sex change as documented fact. enrichment FAQ ("Occasionally. Older females sometimes develop a sword and male-like features, which is a well-known quirk of the species") and enrichment FunFact ("It is a genuine and well-documented quirk of the species"); hub `funFact` ("Female swordtails that have already given birth can sometimes go on to develop a sword, male coloring, and even father broods of their own later in life"). Fedder 2023: "Natural sex change has not been documented sufficiently convincingly in swordtails, but, at least in some subspecies, two or more male phenotypes exist." FishBase: "tendency to undergo sex reversal (from female to male) under certain environmental conditions". Align all pages with the handling guide's "disputed question" wording.

C4. Date of sex-change studies. handling guide and hub `funFact`: "It's been studied since the 1930s" / "scientists have studied it since the 1930s". Essenberg's paper on complete sex reversal in X. helleri is Biological Bulletin 51 (1926). Say "since the 1920s".

C5. "The sword plays no role in swimming." cost guide FunFact ("It plays no role in swimming"), overview line 57 ("plays no role in swimming at all"), encyclopedia overview ("plays no role in swimming"). Basolo and Alcaraz 2003: longer swords raised swimming energy cost in X. montezumae; Oufiero et al. 2014: no relationship with critical swimming speed across 19 species. Say it is not a swimming aid and may cost energy.

C6. Filtration. tank-setup "Swordtails need more real filtration capacity than a guppy or molly" and the hub row/routes line. Seriously Fish: "Filtration does not need to be particularly strong though it does seem to appreciate a degree of water movement." (The 4 to 5 times figure is Seriously Fish's sizing for a 29 gallon tank and stands.)

C7. Cycling time. tank-setup: "takes 4 to 6 weeks with a fishless cycle". UF/IFAS FA031: "A new biofilter requires six to eight weeks to build up sufficient bacteria".

C8. Platy ancestry. cost guide: "by most current accounts most swordtails already sold in the hobby carry at least some platy ancestry". Seriously Fish: "Some of these forms are also the result of artificial hybridisation"; USFWS: "Many ornamental swordtails are hybrids" with X. maculatus or X. variatus. Use "many".

C9. "Interbreed readily". cost guide, tank-setup, hub caution, overview, encyclopedia. XGSC Manual: "With the exception of crosses between X. helleri and X. maculatus most interspecies hybrid crosses do not require artificial insemination." Hybrids are well attested in the trade and wild (USFWS), so the fix is wording ("can and do hybridize"), not removal.

C10. Two-male rule, partly. enrichment ("two males in one tank is the arrangement that reliably produces a hounded loser"; "exactly two males is the one combination to avoid"). Practical Fishkeeping Quick guide: "best to avoid more than one male"; Fishkeeper: one male in smaller setups, "three or more males" in larger groups. No source names two as the problem number.

C11. Encyclopedia transfer year. "moved to Texas in 1992". XGSC Manual: "In 1993 ... the XGSC was transferred to Texas State University" (Kallman retired 1992).

C12. Acclimation minutes. handling FAQ and hub: "Float the sealed bag ... 15 to 20 minutes ... drip ... 45 to 60 minutes". Practical Fishkeeping: 30 to 60 minutes for the tank-water step, "a couple of hours" for the whole drip. (Figures differ; the 15 to 20 minute and 45 to 60 minute numbers have no source.)

C13. Brood size "typical". handling FunFact ("a typical brood lands somewhere between 20 and 100 or more fry"), cost FAQ ("20 to 100 or more"), hub. FishBase 20 to 200; Practical Fishkeeping "20 to 80 fry, with 30 being common"; Fishkeeper "up to 50"; XGSC lab "typically range from 5-35". Safe: 20 to 200 reported, about 30 common.

C14. Temperature floor. tank-setup FAQ and body, hub ("65 to 82F"). FishBase and Practical Fishkeeping give 72 F as the low end; Seriously Fish 61 F; Fishkeeper 59 F. PARTLY, listed here because the hub routes line and comparison row repeat 65 F as the working floor.

C15. Encyclopedia `origin` parenthetical "(Veracruz to the Rio Usumacinta drainage)" stops short of the Belize and Honduras part of the range that Seriously Fish gives.

C16. Overview line 57 and hub: "Females ... 6.2 inches". 16.0 cm TL is 6.3 inches.

C17. Encyclopedia `wildLifespan: "3-5 years"` presents an aquarium estimate as a wild lifespan; no source gives a wild lifespan.

### Unsupported (no strong source found), count 36

U1. "3 to 5 years" lifespan (cost FAQ and body, hub, overview).
U2. "75 to 79 F" as the steadier target (tank-setup, hub).
U3. "Three or four females per male is better" (handling, enrichment, health, hub).
U4. "More aggressive toward each other than guppies or platies" / "mollies and guppies get by on a looser ratio" (enrichment FAQ, handling guide).
U5. Tankmate list (platies, mollies, corys, rosy barbs, kuhli loaches, otocinclus) and "does not defend itself and turns timid" (tank-setup).
U6. "Wild diet ... in roughly even measure" (feeding FAQ and body).
U7. "Cleared within about 2 minutes" (feeding, hub, health).
U8. "Overfeeding drives constipation and swim bladder problems directly" (feeding FAQ and body, health).
U9. Fry "born larger and more developed ... infusoria unnecessary" and "3 to 5 times a day" (feeding; Practical Fishkeeping says three).
U10. Reasons a swordtail stops eating, including "impending birth" (feeding).
U11. Juvenile feeding (feeding; self-flagged).
U12. Dark gravid spot near the vent; fuller fan-shaped female anal fin (handling).
U13. "Fathering broods of their own" (handling, hub).
U14. Sex-change in "older" females or "after giving birth" (enrichment, hub).
U15. "Gentle sponge filter" for fry (tank-setup, hub, health).
U16. Dropsy "hardest to treat, poor outlook" (health FAQ and body, hub).
U17. Fin rot "resolves most cases caught early" with antibacterial treatment (health).
U18. Fin damage from male chasing as a "real, documented trigger" (health).
U19. Swim bladder "usually overfeeding or constipation; short fast" (health, hub).
U20. Unbalanced ratio "measurably raises the odds" of disease (health FunFact, hub).
U21. Shimmy "occasionally turns up in swordtails" (health).
U22. "Swordtails rarely see a vet; aquatic vets uncommon" (cost, hub).
U23. Remineralizing soft tap water with crushed coral or a buffer (tank-setup).
U24. Jumping through "gaps of well under an inch" (tank-setup, hub; hobby reports only).
U25. Lighting "8 to 10 hour daily cycle" (tank-setup).
U26. Substrate "fine gravel or sand ... sharp gravel damages fins" (tank-setup).
U27. "More active than a molly or platy" and "most active of the common livebearers" (cost, tank-setup, enrichment).
U28. Rare patterns "$15 to $25 or more" and monthly upkeep "$20 to $35" (cost; site price system, no observation).
U29. "Longer, fancier varieties cost more because of the sword" (cost FunFact).
U30. "Bigger, more active fish ... eats a bit more and runs a stronger filter" so upkeep is higher than a molly's (cost).
U31. "Swordtails graze more than guppies" (enrichment).
U32. Outflow "faster end and a slower end" (enrichment).
U33. Hub tagline "basically a guppy's bigger, livelier cousin" (different genera; loose, not a figure).
U34. Overview "swordtails commonly live 3 to 5 years" (same as U1, separate page) and "platies a little less at 2 to 4" is outside this file.
U35. "Fish are large enough that overstocking hits water quality quickly" (enrichment; inference).
U36. Ich treatment by heat (82 F hold with salt or medication): no opened veterinary source recommends heat as a treatment; VCA supports it.

(U34 counts the overview line separately from U1 so each page can be fixed; if the later pass counts by claim, the unsupported total is 35.)

---

## Gaps

- Lifespan: no strong source; AnAge (Questionable, hobby citation) is the only record.
- Sperm-storage ceiling for X. helleri: Ernst Table 1 gives at least 10 months (Van Oordt 1928, 7 fish) but the primary papers were not opened and the Vallowe 1953 species attribution is inconsistent inside Ernst.
- Sex reversal: Essenberg 1926 and Lodi 1980 abstracts not read (Crossref metadata only); Fedder 2023 read as abstract only (MDPI 403). Dzwillo (1960s hormone work) and Schartl reviews not tried.
- Male-male dominance in X. helleri (Beaugrand and colleagues): Southampton archive blocked, only search extracts. This is the nearest peer-reviewed evidence for the "two males" rule and for the dominant-male-does-80-percent-of-mating figure; worth opening if the enrichment guide is rewritten.
- Cold tolerance: Tuckett et al. 2016 (green swordtail cold tolerance) not read; Yanar et al. 2021 gives critical thermal limits only.
- Basolo 1990 abstract: wording is from a search extract of a bibliography site; confirm on the publisher's page before quoting.
- Salt dose for swordtails: no swordtail-specific tolerance figure found.
- Jumping, tankmate compatibility, lighting, substrate, fry-feeding specifics: no strong source found.
- Practical Fishkeeping "Great fish: Swordtails" is about X. montezumae and X. alvarezi; its temperature, pH and ratio figures are genus-level for X. hellerii.
- Cannibalism study (Rhodes) and the Costa Rican sex-reversal and growth paper: blocked, extracts only.
- Eschmeyer's Catalog of Fishes and IUCN pages: not tried, IUCN status via FishBase.
- Price observations are single-day snapshots (2026-11-01).

---

## Replacement map

Format: claim or current source, then the stronger source from these notes and the figure to change.

### swordtail-cost-guide.mdx
Current Sources: Aquarium Co-Op "Top 10 Livebearer Fish to Try Breeding" (retailer; opened: its swordtail entry says "4-6 inches (10-16 cm)", "70-80F (21-27C)", warns against keeping swordtails and platies together, and says they "were crossbred with platies"; no author named); Basolo (1990) DOI link (keep, add pages "Animal Behaviour 40: 332 to 338"); SeriouslyFish (keep).
- Price $3 to $6: drop Aquarium Co-Op as a source. Use section 13 as a labeled price observation (PetSmart $3.99, Aquatic Arts $5.94 to $6.79), not a citation.
- Lifespan "3 to 5 years": no strong source (U1). Cut the number or say "no authoritative figure; AnAge lists 5 years (Questionable)".
- "20 gallons is the genuine floor": Seriously Fish W20 (48 x 12 in, ~29 US gal). Change the floor to 29 gallons or call 20 a stopgap for a pair or trio.
- Hybrids: "most swordtails carry platy ancestry" becomes "many" (USFWS W16, Seriously Fish W20); keep "close to a century" (XGSC W15: Kosswig 1928, Gordon 1931); "interbreed readily" becomes "can hybridize" (XGSC W14).
- "Sword plays no role in swimming": Basolo and Alcaraz 2003 (W2) and Oufiero 2014 (W3).
- "Female preference increases as the gap grows": Basolo 1990 (W4), keep.
- Fry "20 to 100 or more ... every 4 weeks": FishBase W19 (20 to 200, 24 to 30 days), Practical Fishkeeping W21 (30 common), XGSC W14 (about every 30 days).

### swordtail-tank-setup-guide.mdx
Current Sources: SeriouslyFish (keep); Aquarium Source "Swordtail Fish 101" (byline Alison Yang; commercial blog; opened: it is where "7.0 to 8.4", "65F to 82F (75 to 79 ... sweet spot)", "12 to 35 dGH", "3 to 5 years" and a 15 gallon minimum circulate); Tropica (plant producer; fine for plant specs only).
- Tank size: Seriously Fish W20 (48 x 12 in, ~29 US gal), Fishkeeper W25 (3 ft), FishBase W19 (80 cm). Replace Aquarium Source.
- pH 7.0 to 8.4: change to 7.0 to 8.0 (FishBase W19, Seriously Fish W20, Practical Fishkeeping W21, Fishkeeper W25).
- Temperature 65 to 82 F: Seriously Fish W20 (61 to 82 F), FishBase W19 and Practical Fishkeeping W21 (72 to 82 F); say "72 to 82 F, down to the mid 60s if it must".
- Hardness 10 to 25 dGH: Seriously Fish W20 (keep); note 8 to 20 in Fishkeeper W25.
- Filtration "4 to 5 times": Seriously Fish W20, but drop "more than a molly or guppy"; its text says "does not need to be particularly strong".
- Cycling "4 to 6 weeks": UF/IFAS FA031 W11 (six to eight weeks).
- Jumping, lighting, substrate, tankmate list, sponge filter: leave unsourced or cut (U5, U15, U24 to U26).

### swordtail-feeding-guide.mdx
Current Sources: SeriouslyFish (keep); Aquarium Co-Op top 10 livebearers (retailer; its swordtail entry has no feeding information); Aqua-Fish "Complete Swordtail Fish Care Guide" (no byline; opened: "feed them once or twice a day", gestation "about 28 days", "20-100 fry", lifespan "3-4 years").
- Wild diet and food list: Seriously Fish W20 (keep) plus FishBase W19 (worms, crustaceans, insects, plant matter).
- "At least daily", variety, flake size: Merck "Nutritional Diseases of Fish" W12 (new, veterinary tier). Drop "even measure".
- Fry feeding: Practical Fishkeeping "How to breed livebearing fish" W23 ("Feed three times a day if you can"; baby brine shrimp). Change "3 to 5 times" to "about three times a day" or keep as unsourced.
- Two-minute rule, constipation and swim bladder: cut or leave unsourced (U7, U8).

### swordtail-handling-guide.mdx
Current Sources: SeriouslyFish (keep); Wikipedia "Green Swordtail" (replace); Aquarium Source (replace); Aqua-Fish (replace).
- Size (5.5 and 6.2 inches): FishBase W19 and USGS W17 (14.0 and 16.0 cm TL); correct 6.2 to 6.3 in.
- Sexing: Seriously Fish W20 (males smaller, gonopodium plus caudal extension; extended fins can occur in ornamental females), Practical Fishkeeping W23. Drop gravid spot and fan-shaped anal fin or leave unsourced.
- Sex ratio: Practical Fishkeeping W21 and W22 (one male to two or more females; "more females than males"), Fishkeeper W25. Drop "three or four" or source it to Aquarium Source's "four females to a single male" with that caveat.
- Sex reversal: FishBase W19 and Fedder 2023 W1 for the open question; Essenberg 1926 and Lodi 1980 (W27) as the original papers; fix "since the 1930s" to "since the 1920s".
- Gestation 4 weeks, sperm storage, brood size: FishBase W19, Seriously Fish W20, Huang 2004 W7, Ernst Table 1 W8, XGSC W14.
- Acclimation: Practical Fishkeeping W24 (30 to 60 minutes for adding tank water; drip "a couple of hours"; net the fish rather than pour the bag).
- Quarantine 30 days: UF/IFAS W10.
- Hybridization: XGSC W14, USFWS W16.

### swordtail-health-issues-guide.mdx
Current Sources: Merck "Disorders and Diseases of Fish" (keep); Aquarium Co-Op "Common Diseases Affecting Livebearer Fish" (retailer; replace); Wikipedia "Green Swordtail" (replace); Aquarium Source (replace).
- Ich life cycle, signs, daily treatment, salt 4 to 5 g/L for 7 to 10 days, copper alkalinity rule: UF/IFAS W10 and Merck "Parasitic Diseases of Fish" W12 (both new). Keep VCA W13 (add it to the Sources block) for the 86 F line.
- Heat hold: say 82 F is the top of the husbandry range (W19, W20) and that Merck and UF/IFAS give chemical and salt protocols only; add that treatment is daily at warm temperatures.
- Dropsy and Aeromonas: Merck W12 (disorders page); drop "hardest ... poor outlook".
- Fin rot: Merck bacterial page W12 supports only the water-quality link; shorten.
- Swim bladder: leave unsourced or cut.
- Quarantine 30 days and the water-quality pattern: UF/IFAS W10 and Merck W12.
- Ratio as a health issue: Practical Fishkeeping W21 for aggression and picking on losers; the immune-suppression claim stays unsourced.
- Sex reversal does not appear on this page.

### swordtail-enrichment-guide.mdx
Current Sources: Borrowed-evidence note; PubMed cross-generational guppy paper (keep, now confirmed: Gasparini, Devigili and Pilastro, Evolution 66(2): 532 to 543, 2012); ResearchGate "Male harassment reduces short-term female fitness in guppies" (mirror, not opened here; replace with the journal or PubMed record); Aqueon livebearer care guide (manufacturer; not opened; replace).
- Harassment evidence: keep PubMed W9; add Plath et al. 2008 and Koehler et al. 2011 (W28, from MOLLY_RESEARCH.md) for the Poecilia mexicana claim, noting the cave-form exception.
- Two-males rule: Practical Fishkeeping W21 and W22 and Fishkeeper W25 as the husbandry evidence; Seriously Fish W20 for "groups of males form dominance hierarchies". State that the exact-two rule is the guide's own reasoning.
- Sex ratio: Practical Fishkeeping W21.
- Sex change FunFact and FAQ: Fedder 2023 W1 and FishBase W19 (see C3).
- Size ("largest common livebearer"): FishBase W19, with the molly guide's contradictory claim fixed in the same pass.
- Tank "20 gallon long is a sensible floor": Seriously Fish W20.

### Hub (src/lib/data/guides/fish.js, id "swordtail") and livebearer row (line 61)
The hub copies the deep-dive figures; fix them once the guides change. Rows to change: Tank size (20 gallon floor), Water chemistry (pH 7.0 to 8.4, `ranges.ph`), Temperature (65 to 82 F), Filtration, Lifespan, Fry (20 to 100), Adult size (6.2 to 6.3 in), Acclimation minutes, `funFact` (sex change, "since the 1930s"), `vetLine`, the "Not two males" row, and the route line "four to five times turnover". Comparison row values "20 gallons for a trio" and "7.0 to 8.4".

### Encyclopedia (src/lib/data/encyclopedia/fish.js, id "swordtail")
- Overview: "plays no role in swimming" (Basolo and Alcaraz W2, Oufiero W3); "bolder patterning" (Seriously Fish W20 list of female preferences).
- `origin`: extend to Honduras (Seriously Fish W20, FishBase W19).
- `wildLifespan`: remove or replace with "no wild figure published".
- `history`: Heller, Heckel, Orizaba and 1845 to 1848 are SUPPORTED (Seriously Fish W20); Gordon 1924 at Cornell SUPPORTED (W15); 1939 founding SUPPORTED (W14); "from 1930 onward" and "New York Aquarium and then AMNH" are PARTLY (W14, W15); change "moved to Texas in 1992" to 1993 (W14) or "after Kallman's 1992 retirement" (W15).

### platy-swordtail-molly-overview.mdx (swordtail lines)
- Line 45 "mollies and swordtails commonly live 3 to 5 years": U1, no strong source.
- Line 57: "plays no role in swimming at all" (C5); "6.2 inches" to 6.3 (C16); "females show measurable preferences for males with longer swords and bolder patterning" (Basolo W4, Seriously Fish W20); "favor faster-flowing streams than platies" is SUPPORTED (FishBase W19, group file S1); "intentionally crossed for almost a century" SUPPORTED (W15).
- Line 68: "a swordtail, close enough to a platy to interbreed with one, isn't any harder to breed by accident": see C9; "easy to breed" is SUPPORTED by Fedder 2023 ("very easy to breed in freshwater aquaria").

---

## Kept without a source (owner review)

Added 2026-11-01 after the correction pass on content/guides/swordtail-*.mdx. Per the owner's rule, only claims the sources contradict were changed; every unsupported claim below was left as written. "No source yet" means no page opened for this file states it. Items marked (partly) have a source for part of the claim.

### swordtail-cost-guide.mdx
- FAQ and body: "Hi-fin and lyretail varieties cost a bit more, roughly $6 to $10 each, and rarer patterns like koi or neon swordtails can reach $15 to $25 or more from specialty sellers." No retailer observation covers hi-fin, koi or neon pricing (U28). (also elsewhere: yes)
- Body: "A six-pack of assorted swordtails sells for about $29.99, roughly $5 per fish" and "a hi-fin lyretail six-pack runs about $37.99, about $6.30 per fish". Not re-observed on 2026-11-01. (also elsewhere: no)
- FAQ and body: "Full monthly upkeep on a properly sized setup commonly lands around $20 to $35". The site's own price system, no outside observation (U28). (also elsewhere: yes)
- Body: "a little higher than a molly's, mainly because a bigger, more active fish in a bigger tank eats a bit more and runs a stronger filter" (U30). **[conflict fixed: "and runs a stronger filter" removed; the bigger tank and larger appetite carry the figure]** (also elsewhere: no)
- FAQ and Lifespan section: "3 to 5 years on average" and "the same range as a molly or platy despite the size difference". Only a Questionable AnAge record (5 years, hobby-site citation) exists (U1). **[conflict fixed: "3 to 5 years on average... the same range as a molly or platy" to "Hobby sources say 3 to 5 years... though no firm figure exists. That overlaps a molly's 2 to 5 years and a platy's 2 to 4" (FAQ and body)]** (also elsewhere: yes)
- FAQ and body: "swordtails are noticeably more active swimmers than a molly or platy" and "more active, open-water swimmers than a molly or platy of similar size". No source compares activity across livebearers (U27). **[wording merged: the activity claim now sits in the body only; the setup FAQ states the 29 to 30 gallon floor without repeating it]** (also elsewhere: yes)
- Body: "Retail listings give a 20-gallon minimum for standard swordtails, but recommend at least 30 gallons ... for hi-fin lyretails". A retailer claim; the sources give 29 gallons for all forms. **[conflict fixed: "Retail listings give a 20-gallon minimum for standard swordtails, but recommend at least 30" to "Retail listings recommend at least 30 gallons" after "29 gallons is the genuine floor... whatever the form"; "comfortable starting point" to "the 29-gallon floor"]** (also elsewhere: no)
- FunFact: "it's a genuine part of why the fancier, longer-finned varieties cost more at the store". Inference (U29). (also elsewhere: no)
- Vet Costs: "swordtails rarely see a vet" and "uncommon and rarely necessary for a species this hardy" (U22). (also elsewhere: yes)
- Body: "A male swordtail can be a persistent, near-constant presence around a female he's courting". Behavioral claim, no swordtail-specific source (the Practical Fishkeeping pages say only that males bicker and losers are picked on). (also elsewhere: yes)
- FAQ and body: "fry that aren't cleanly one species or the other" as the consequence of keeping platies and swordtails together; hybrids are attested but the community-tank outcome is not (partly, C9). (also elsewhere: yes)
- Body: "Swordtails are also true dietary generalists rather than the more herbivore-leaning molly" (partly; supported for the sailfin molly only). **[wording merged: tied to the food line ("so the food line carries real protein as well as vegetable variety")]** (also elsewhere: yes)
- Table: the setup table prices a 20-gallon long tank (cost sheet item, src/lib/data/costSheets/fish.js), which the research puts below the 29 gallon, 48 inch floor. The glass lid link note also says it fits a 20 gallon long. **[conflict fixed in text only: the FAQ now says the table "still prices a 20-gallon long tank as the base" and that about 29 gallons is the floor; the table itself lives in src/lib/data/costSheets/fish.js and still prices the 20 long (not touched)]** (also elsewhere: no)
- Excerpt and opener: "the common livebearer that outgrows a 20-gallon starting point the fastest". The superlative has no source. **[conflict fixed: "outgrows a 20-gallon starting point the fastest" to "needs the most tank from day one"; seoDescription "sizing up past 20 gallons" to "starting at the 29-gallon floor"; description "a real 20 to 30 gallon starter setup" to "a real 29 to 30 gallon starter setup"]** (also elsewhere: no)

### swordtail-tank-setup-guide.mdx
- FAQ and Temperature: "75 to 79°F the steadier target" (U2). (also elsewhere: yes)
- FAQ and Water Chemistry: "Soft tap water can be brought up with crushed coral or a commercial buffering product" (U23). (also elsewhere: yes)
- Water Chemistry section: the tankmate list "platies, mollies, cory catfish, rosy barbs, kuhli loaches and otocinclus all fit", and "a swordtail does not defend itself and turns timid around them" (U5). (also elsewhere: no)
- FAQ, Jumping section and FunFact: "Swordtails are powerful jumpers", "gaps of well under an inch", "a few inches at the back of a lid is often enough". Hobbyist reports only (U24). **[wording merged: one gap figure, "a gap at the back of a lid well under an inch wide" (body); FAQ and FunFact already said under an inch]** (also elsewhere: yes)
- FAQ and Filtration: "a gentle sponge filter is the better call specifically if you're prioritizing fry survival" and "it won't pull small fry into strong current the way a power filter can" (U15). (also elsewhere: yes)
- Filtration: "a bigger, more active fish in a bigger tank produces a bigger bioload to match". (also elsewhere: no)
- Substrate: "Fine gravel or sand both work well. Avoid sharp or coarse gravel, which can damage fins" (U26; Seriously Fish says only that the species looks best over a dark substrate). (also elsewhere: yes)
- Lighting: "A basic LED light on an 8 to 10 hour daily cycle" (U25). (also elsewhere: yes)
- Tank Size and FAQ: "swordtails are noticeably more active, open-water swimmers than a molly or platy" (U27). (also elsewhere: yes)
- Cycling: "or somewhat less with a bottled bacteria product" and "one of the most common beginner mistakes in the hobby generally". No source in this file. (also elsewhere: yes)
- Planting: "planting gives females somewhere to physically break line of sight from a persistent male"; the plant specs (Vallisneria 'Tiger' 30 to 50 cm, hornwort, Anubias) rest on a plant producer. The Tropica Sources entry is a site homepage, not a specific page, and the research file has no Tropica page. **[wording merged: the homepage Sources entry replaced by the three Tropica plant pages (Vallisneria spiralis 'Tiger', Ceratophyllum demersum, Anubias barteri var. nana), all opened and returning 200; 30 to 50 cm leaf length, low light and low CO2, and the rhizome-rot warning confirmed on the pages]** (also elsewhere: yes)
- The linked product is a 20-gallon long tank, now described as a stopgap for a pair; the research gives no length for a 20 long (general knowledge says about 30 inches, which is under the 48 inch floor). **[conflict fixed: "a workable stopgap for a pair" to "a temporary home for a pair at most: at 30 inches long it falls short of the 48-inch floor above" (product covers list gives 30 by 12 by 12 in)]** (also elsewhere: no)

### swordtail-feeding-guide.mdx (no fact was contradicted; only the Sources block changed)
- FAQ and body: "in fairly even measure" and "in roughly even measure" for the wild diet; "genuinely balanced mix"; "splits far more evenly between plant matter and small invertebrates" (U6, FunFact). "Considerably more herbivorous" for the molly is supported for the sailfin molly only. (also elsewhere: yes)
- FAQ and body: "feed only what's fully cleared within about 2 minutes" (U7). (also elsewhere: yes)
- FAQ and body: "Overfeeding drives constipation and swim bladder problems directly" (U8). (also elsewhere: yes)
- FAQ and Fry bullet: "born larger and more developed than egg-layer fry", "the infusoria stage is usually unnecessary", "at least 3 to 5 times a day" (U9; Practical Fishkeeping says three times a day). (also elsewhere: yes)
- Juveniles bullet: "More frequent, higher-protein feeding than adults" (U11, self-flagged). (also elsewhere: yes)
- Why Swordtails Stop Eating: stress from a male-heavy ratio, cold water slowing metabolism, "Impending birth" (U10). (also elsewhere: yes)
- "Avoid an all-flake diet with no vegetable content at all ... digestive trouble over time"; "don't refeed frozen food that's already thawed". General husbandry. (also elsewhere: no)

### swordtail-handling-guide.mdx
- FAQ and Sexing: "have a fuller fan-shaped anal fin" for females, and "Females also tend to develop a dark gravid spot near the vent" (U12). "Females lack the sword entirely" and "carry no sword at all" hold for the wild form only; Seriously Fish says extended fins occur in some ornamental females (partly). **[conflict fixed: "Females lack the sword entirely" / "carry no sword at all" to "lack the sword, with rare exceptions" (FAQ and body)]** (also elsewhere: yes)
- Sexing: "individual swordtails that spend months looking and acting like a female before eventually developing a sword, male coloring, and even fathering broods of their own" and "hobbyists have reported, for generations" (U13). The "disputed question" wording is supported by Fedder 2023 and FishBase. (also elsewhere: yes)
- FAQ and Ratio: "three or four where the tank allows: the higher end spreads out mating attempts more effectively and reduces the fin damage and stress" (U3). Practical Fishkeeping supports "more females than males" and two or three per male. (also elsewhere: yes)
- Ratio section: "shows real, measurable stress", "Persistent chasing leads to fin damage" (U18). (also elsewhere: yes)
- Intro: "an unbalanced tank causes more real stress here than with a molly or platy"; What Swordtails Are Like: "noticeably more vigorous open-water swimmers than a molly or platy" (U4, U27). (also elsewhere: no)
- Males "about 5.5 inches including the sword". FishBase does not say whether its male figure includes the sword (inference). **[wording merged: "including the sword" dropped]** (also elsewhere: yes)
- Acclimation: "inside the swordtail's hard, alkaline range, the float is enough", "bag water ... can carry ammonia the fish produced during transport", and "if your water is soft or acidic, drip acclimate". Practical Fishkeeping supports netting and the 30 to 60 minute and couple of hours timings, not the chemistry rule. (also elsewhere: yes)
- Quarantine: "A modest tank with a gentle sponge filter is enough, and it catches most problems, ich and fin rot included" and FAQ "catches most problems before they spread". (also elsewhere: yes)
- Managing Population: "exactly two males is the one combination to avoid" (C10, partly: Practical Fishkeeping advises one male, no source names two). (also elsewhere: yes)
- Comparison section: "Mollies and guppies get by on a looser one-to-two-or-three ratio" and "swordtail males are consistently described as more combative with each other and more persistent with females" (U4). **[conflict fixed: "Mollies and guppies get by on a looser one-to-two-or-three ratio... consistently described as more combative" to "The ratio itself is much the same across the three"; the persistence of males toward females carries the handling point, and all-male molly groups are noted to need space and numbers]** (also elsewhere: no)
- "an unusual size reversal for a fish where the male carries the more elaborate ornament". Framing, no source. (also elsewhere: yes)

### swordtail-health-issues-guide.mdx (no fact was contradicted; only the Sources block changed)
- Ich: "An 82°F tank is as warm as a swordtail goes, short of the heat that kills ich on its own" and the heat-plus-salt-or-medication plan (partly: 82°F is the husbandry ceiling and VCA supports heat, but Merck and UF/IFAS give chemical and salt protocols only) (U36). Daily treatment at warm temperatures is not stated on the page (UF/IFAS and Merck say it). (also elsewhere: yes)
- Ich: "a single organism can produce hundreds of new ones". UF/IFAS gives up to 1024; "hundreds" understates it but is not wrong. **[wording merged: "up to about a thousand new ones" (UF/IFAS gives up to 1,024)]** (also elsewhere: yes)
- Fin rot: "Improving water quality alongside an antibacterial treatment resolves most cases caught early" (U17); "fin damage from male chasing is a real, documented trigger" (U18). (also elsewhere: yes)
- Dropsy (FAQ and body): "the hardest condition on this list to treat successfully, often carrying a poor outlook" (U16). (also elsewhere: yes)
- Swim bladder: "usually from overfeeding or constipation. Often manageable at home with a short fast" (U19). (also elsewhere: yes)
- Sex ratio FunFact and FAQ: "measurably raises the odds of the pathogen-driven conditions" and "takes real fin damage from chasing and nipping" (U20, U18). Also "three or four where the tank allows" (U3). (also elsewhere: yes)
- Pattern section: "feeding only what the group clears in about two minutes" (U7); "a livebearer-specific shimmy that occasionally turns up in swordtails too" (U21). (also elsewhere: yes)
- Hub/FAQ-linked: "Dedicated aquatic vets" lines are not on this page; the hub says "Swordtails rarely see a vet" (U22). (also elsewhere: yes)

### swordtail-enrichment-guide.mdx
- Title, excerpt, KeyTakeaway, FAQ, Not Two Males, What Not to Do: "two males in one tank is the arrangement that reliably produces a hounded loser", "exactly two males is the one combination to avoid", "by far the most common way a swordtail tank goes wrong" (C10, partly). Practical Fishkeeping Quick guide advises avoiding more than one male; Seriously Fish says groups of males form dominance hierarchies; no source names two as the problem number. The reasoning (all contests fall on one pair) is the guide's own. (also elsewhere: yes)
- FAQ: "Male swordtails are more aggressive toward each other than guppies or platies are" and "which is not true of the other common livebearers" (U4). **[conflict fixed: "more aggressive toward each other than guppies or platies are" to "can be aggressive toward each other"; "which is not true of the other common livebearers" to "much as it does for male sailfin mollies kept without females"]** (also elsewhere: no)
- FAQ: "three or four is better"; Priority Order and Sex Ratio: "three or four better" (U3). (also elsewhere: yes)
- FAQ, Length, What Not to Do: "the largest and most active of the common livebearers" ("largest" narrowly supported by FishBase; "most active" has no source) (U27). "Do not use a small tank for the largest common livebearer". (also elsewhere: yes)
- Research section: "males attempt to mate almost constantly, females are largely non-responsive". Plath 2008 supports vigilance and hampered feeding in surface Atlantic mollies, not this wording, and notes cave mollies are the exception. (also elsewhere: yes)
- Flow: "Aim the outflow along the length so there is a faster end and a slower end" (U32); "messy enough to need real filtration". **[wording merged: "messy enough to need real filtration" to "big enough to need a filter sized for the tank"]** (also elsewhere: no)
- Feeding: "swordtails graze more than guppies" (U31). **[wording merged: "graze on algae and biofilm", guppy comparison dropped]** (also elsewhere: no)
- Plan for the Fry: "the fish are large enough that overstocking hits water quality quickly" (U35). (also elsewhere: yes)
- The jumping line "They are also excellent jumpers. A tank without a lid will lose fish" (U24). (also elsewhere: yes)
- The Sources entry for Gasparini et al. 2012 is kept; the Koehler et al. 2011 record was not added because its abstract was never read. (also elsewhere: no)

## Kept without a source (owner review): hobby-site Sources removal, 2026-11-01

Owner rule (docs/RULES.md, "No hobby sites"): retailer care pages and blogs, hobby blogs, hobby magazines, Practical Fishkeeping pages without a named author, its news items and course pages left the Sources blocks. The claims below lost their only cited source in that guide's block and stay in the body as written; the owner decides.

- swordtail-feeding-guide.mdx, fry: newly hatched baby brine shrimp as a first food, and the feeding frequency (W23 said three times a day; the guide says 3 to 5). Was Practical Fishkeeping "How to breed livebearing fish" (W23, no byline). (also elsewhere: yes)
- swordtail-handling-guide.mdx FAQ, acclimation: tank water added in stages over 30 to 60 minutes, and a full drip over a couple of hours for soft or acidic water. Was Practical Fishkeeping acclimatising (W24, no named author). (also elsewhere: yes)
- swordtail-enrichment-guide.mdx lost Practical Fishkeeping "Quick guide to livebearers" (W22, no byline); its two-male aggression line is also carried by Nathan Hill's "Great fish: Swordtails" (W21). Nothing listed.
