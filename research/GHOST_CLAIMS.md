# Ghost claims: figures and claims that live outside their species' corrected guides

Built 2026-11-01 for guppy, molly, platy, swordtail, neon tetra, cardinal tetra. Read-only audit: nothing in content/ or src/ was changed. Searched content/guides, content/_scheduled-*, content/blog, content/fun-facts, src/lib/data/guides, encyclopedia, guideGroups, facts, glossaryTerms, costItems, relatedArticles. Skipped care-packages/.

**Path shorthand in Table A:** a bare `name-g` is `content/guides/name-guide.mdx`; `HUB:n` is `src/lib/data/guides/fish.js:n`; `ENC:n` is `src/lib/data/encyclopedia/fish.js:n`; `ST/` is `content/_scheduled-tetras/`. Table B uses full paths. Line numbers are as of this commit and shift with edits.

## Table B: corrected here, stale elsewhere

Every row is a figure or claim a research file marks as contradicted (or, where noted, cut as unsupported) that the species' own six guides now correct, still stated outside those six guides and the species' own hub. "Soft hit" means the page is narrower than the claim but still out of step. Hits by species: Guppy 3, Molly 5, Platy 5, Swordtail 4, Neon tetra 4, Cardinal tetra 5 (total 26 rows).

| Species | Old claim | Corrected claim | Source (research file) | Stale at |
|---|---|---|---|---|
| Guppy | 5 gallons works for a small trio (also 10 for 5 or 6) | About 11 US gal minimum (18 x 12 in base); FishBase 60 cm | GUPPY_RESEARCH.md C1 (Seriously Fish, FishBase) | content/guides/aquarium-stocking-and-tankmates-guide.mdx:147 "5 gallons for a trio, 10 for 5 or 6" |
| Guppy | Female stores sperm 5 to 10 months, about 8 broods | Up to eight successive monthly cycles; "6 months or more"; no 10 month ceiling | GUPPY_RESEARCH.md C2 (Gasparini 2018, Seriously Fish) | content/guides/sulcata-hedgehog-lovebird-guppy-overview.mdx:44 "store sperm for 5 to 10 months ... up to about 8 separate broods" |
| Guppy | Lifespan 2 to 3 years, 4 or 5 with care (soft hit) | No firm figure; lab females averaged about 13 months from experiment start; a well-kept fish may live longer | GUPPY_RESEARCH.md U7 (Evans 2012) | content/guides/sulcata-hedgehog-lovebird-guppy-overview.mdx:84 "a guppy might not see its third birthday" |
| Molly | Lifespan 3 to 5 years (and 5 to 7 with care) | About 2 to 5 years; wild sailfin 2 to 3; no source gives 5 to 7 | MOLLY_RESEARCH.md A1 (NEMESIS, PetMD, Florida Museum) | content/guides/platy-swordtail-molly-overview.mdx:45 "mollies and swordtails commonly live 3 to 5 years" |
| Molly | Hardy, forgiving fish | Hardy only in hard, stable water; sources also say delicate, prone to disease | MOLLY_RESEARCH.md A9 (Seriously Fish, Practical Fishkeeping, TFH) | content/guides/platy-swordtail-molly-overview.mdx:45 "genuinely easy, hardy fish that forgive a new owner's mistakes" |
| Molly | Short-fin size 3 to 4.5 inches | About 3 to 4 inches (sailfin up to 6) | MOLLY_RESEARCH.md A12 (FishBase, Fishkeeper, Seriously Fish) | content/guides/platy-swordtail-molly-overview.mdx:63 "a standard molly's 3 to 4.5" |
| Molly | One temperature ceiling, 82F, for every molly (soft hit) | Sailfin 70 to 79F; short-fin 70 to 82F | MOLLY_RESEARCH.md A4 (Seriously Fish) | content/guides/aquarium-ich-treatment-guide.mdx:84 "Guppy, molly, swordtail / Up to 82°F" |
| Molly | Aquarium salt container $20 to $25 | About $12 observed | MOLLY_RESEARCH.md left-out list ("Salt $22") | src/lib/data/costItems.js:1671-1675 'molly-aquarium-salt-optional-long' low 20, high 25 |
| Platy | Color range entirely man-made, "none of that color is natural" | Named varieties are bred; wild platies are already one of the most color-variable fish, with red, orange, yellow pigment | PLATY_RESEARCH.md #5 (Basolo 2006) | content/guides/platy-swordtail-molly-overview.mdx:18, :19, :49 (heading "The Color Range Is Entirely Man-Made"), :51 "None of that color is natural. Wild platies are a fairly drab olive-brown" |
| Platy | Adults about 2 to 3 inches | Males about 1.6 in, females up to about 2.4 in (variatus a little longer) | PLATY_RESEARCH.md #8 (FishBase, USGS, Seriously Fish) | content/guides/platy-swordtail-molly-overview.mdx:51 "At 2 to 3 inches and hardy" |
| Platy | Hardy, one of the easiest first fish | A beginner fish when the water is hard enough; many trade platies are not hardy (inbreeding) | PLATY_RESEARCH.md #10 (Seriously Fish) | content/guides/platy-swordtail-molly-overview.mdx:45, :51 "hardy" |
| Platy | Adults readily eat their fry | Seriously Fish, both species: adults will not eat their young; fry are eaten by other fish and sometimes adults | PLATY_RESEARCH.md #2 (Seriously Fish; same source covers swordtail) | content/guides/swordtail-handling-guide.mdx:76 "adults will readily eat their own fry"; content/guides/swordtail-tank-setup-guide.mdx:107 "adults will eat them given the chance" |
| Platy | About a quarter of backcross offspring develop melanoma | A fraction of backcross fish in the classic scheme (encyclopedia already reworded) | PLATY_RESEARCH.md #21 (partly supported) | src/lib/data/facts.js:303 (id 301) "about a quarter of the offspring turn heavily pigmented" |
| Swordtail | 20 gallons is the floor for a trio | 29 US gal, 48 in long is the floor (Seriously Fish); Fishkeeper 3 ft minimum | SWORDTAIL_RESEARCH.md C2 | content/guides/aquarium-stocking-and-tankmates-guide.mdx:148 "20 for mollies or a swordtail trio" |
| Swordtail | Sword plays no role in swimming | Not a swimming aid and may raise swimming energy cost (Basolo and Alcaraz 2003) | SWORDTAIL_RESEARCH.md C5 | content/guides/platy-swordtail-molly-overview.mdx:57 "plays no role in swimming at all" |
| Swordtail | Females reach 6.2 inches | 16.0 cm TL is 6.3 in | SWORDTAIL_RESEARCH.md C16 (FishBase) | content/guides/platy-swordtail-molly-overview.mdx:57 "reaching 6.2 inches" |
| Swordtail | Lifespan 3 to 5 years | Hobby sources say 3 to 5; no firm figure exists | SWORDTAIL_RESEARCH.md U1/U34 | content/guides/platy-swordtail-molly-overview.mdx:45 |
| Neon tetra | Six is the floor for a school | Eight is the least to buy, ten better (Seriously Fish 8 to 10; Saxby 2010 and PFK) | NEON_TETRA_RESEARCH.md replacement map, handling guide (CONTRADICTION) | content/guides/boa-glider-mantis-tetra-overview.mdx:18 "six neon tetras minimum", :19 "at least six", :44 "Six is the floor, not a suggestion", :79 heading "Six Is the Floor", :81 "Six is the minimum" |
| Neon tetra | Six is the floor (stocking rule) | Eight least, ten better | NEON_TETRA_RESEARCH.md (same) | content/guides/aquarium-stocking-and-tankmates-guide.mdx:47 "Six is the floor most species pages give", :51 "below the floor of six", :104 "Every schooling species page here says six minimum", :165 "a group at the floor" |
| Neon tetra | Six is the floor (tetra group hub FAQs) | Eight least, ten better | NEON_TETRA_RESEARCH.md (same) | src/lib/data/guides/fish.js:193 "Six is the floor most species pages give", :195 "each below the floor of six" |
| Neon tetra | NTD found in cardinals (cut from guides, no cardinal case record) | Family-level host range only; cardinal-specific record not found | NEON_TETRA_RESEARCH.md 'Cut clauses ... NOT restored'; CARDINAL_TETRA_RESEARCH.md Gaps | src/lib/data/glossaryTerms.js:372 "found in cardinals, angelfish, rasboras, barbs, and danios too" |
| Cardinal tetra | Two-week 86F ich hold is possible for cardinals | Cardinals tolerate 86F only in short spells (96 h test, juveniles); two-week hold has no source; medication is the safer route | CARDINAL_TETRA_RESEARCH.md Gaps, replacement map (VCA, Acta C3) | content/guides/aquarium-ich-treatment-guide.mdx:43 "Only if your fish can live at 86°F for two weeks ... cardinal tetras ... possible", :81 "Possible with strong aeration, watched closely" |
| Cardinal tetra | Same, in the tetra group hub | As above | CARDINAL_TETRA_RESEARCH.md Gaps | src/lib/data/guides/fish.js:188 (Ich rule: "Cardinals tolerate it in short spells"), :194 (FAQ "possible with strong aeration") |
| Cardinal tetra | Same, scheduled glowlight health guide | As above | CARDINAL_TETRA_RESEARCH.md Gaps | content/_scheduled-tetras/glowlight-tetra-health-issues-guide.mdx:94 "The cardinal tetra is such a fish" |
| Cardinal tetra | Rio Negro fishery conservation case is "contested" (word cut from cardinal guides, no dissenting source) | "Contested" has no opened source; Chao 2001 and Silva Ladislau support the benign-fishery argument | CARDINAL_TETRA_RESEARCH.md Gaps, 'Cut clauses' | content/guides/zebra-danio-bristlenose-pleco-discus-cardinal-tetra-overview.mdx:69 "contested rather than settled"; src/lib/data/encyclopedia/fish.js:48 "that claim is contested" |
| Cardinal tetra | Tank item priced as a 10-gallon (soft hit) | 60 x 30 cm base (about 14 gal); 20 long for 10 fish | CARDINAL_TETRA_RESEARCH.md replacement map (Seriously Fish, FishBase) | src/lib/data/costItems.js:1611 'cardinal-tetra-10-20-gallon-tank' product tank-10-gallon |

Not found outside the species' own pages (checked, clean): guppy pH 7.0 to 9.0, 5 to 10 month figure beyond the overview, $10 to $20 a pair, "wild-type" label; molly gestation 4 to 6 weeks, "naturally brackish", herbivore, largest livebearer, Norton misattribution; swordtail pH 8.4, sex change as well documented, 1930s, 1992 transfer; platy superfetation and the 79F "cannot take the heat" line; cardinal "some reach ten" and $3 price.

### Own-hub leftovers (outside the requested scope, noted because they are the same fix)

- src/lib/data/guides/fish.js:1490 swordtail Lifespan row still "3 to 5 years with stable water" while the cost guide now says no firm figure exists.
- src/lib/data/guides/fish.js:472 cardinal funFact still says the conservation claim "is contested".

## Table A: unsourced, appears elsewhere

One row per item on the six Kept lists (238 items). 180 also appear on at least one other page, 58 appear nowhere else. Most "yes" rows are copies in the species' own hub (hubs copy guide figures by design) or in sibling livebearer guides repeating the same boilerplate; a hub-only hit is listed first as `HUB:`. These are the same unsourced claim spread across pages: fixing or sourcing one means touching the others.

| Species | Claim | Guide file | Also in |
|---|---|---|---|
| Guppy | Standard guppies $2 to $5 | guppy-cost-guide.mdx | HUB:935,956 |
| Guppy | Rare strains (Purple Moscow, 24k Gold, Dragon) $25 and up | guppy-cost-guide.mdx | none found |
| Guppy | Fancier strains less resilient | guppy-cost-guide.mdx | none found |
| Guppy | Dedicated aquatic vets uncommon | guppy-cost-guide.mdx | molly-cost-g:93; platy-cost-g:90; swordtail-cost-g:92; HUB:945 |
| Guppy | Lifespan 2 to 3 years, 4 or 5 with excellent care | guppy-cost-guide.mdx | sulcata-hedgehog-lovebird-guppy-overview.mdx:84 ("might not see its third birthday", looser) |
| Guppy | Female fertility drops after about age 2 | guppy-cost-guide.mdx | none found |
| Guppy | Harassment costs: energy expenditure, reduced foraging | guppy-enrichment-guide.mdx | molly-enrichment-g:71; platy-enrichment-g:43,69; swordtail-enrichment-g:43,69 |
| Guppy | P. mexicana males mate almost constantly, females flee | guppy-enrichment-guide.mdx | molly-enrichment-g:43,69; platy-enrichment-g:69; swordtail-enrichment-g:69 |
| Guppy | Two to three females per male; six or more common | guppy-enrichment-guide.mdx | HUB:72,81,928,977; molly-enrichment-g:45,79; platy-enrichment-g:45,79; swordtail-enrichment-g:47,85; aquarium-stocking-and-tankmates-guide.mdx:147 |
| Guppy | Dense planting lets females break line of sight | guppy-enrichment-guide.mdx | molly-enrichment-g:105; platy-enrichment-g:49; swordtail-tank-setup-g:109; swordtail-health-issues-g:85 |
| Guppy | Floating plants: fry survive at a manageable rate | guppy-enrichment-guide.mdx | platy-enrichment-g:93; HUB:1383 |
| Guppy | Fast, greedy surface feeders | guppy-enrichment-guide.mdx | none found |
| Guppy | Moving a heavily pregnant female causes stress loss | guppy-enrichment-guide.mdx | guppy-handling-g:74 (breeding-trap line) |
| Guppy | Goldfish food is lower protein, not a base | guppy-feeding-guide.mdx | HUB:930 |
| Guppy | Vet-affiliated source: call a vet if appetite down over a day | guppy-feeding-guide.mdx | none found |
| Guppy | Adults once to three times a day; clears in 1 to 2 minutes; beg | guppy-feeding-guide.mdx | HUB:929,978 |
| Guppy | Fry 3 to 5 times a day / every 2 to 3 hours; juveniles 3 to 4 | guppy-feeding-guide.mdx | HUB:929 |
| Guppy | Omnivores; veg, tubifex, egg yolk; not goldfish food | guppy-feeding-guide.mdx | HUB:930 |
| Guppy | Thaw food; small mouths, teeth at back; overfeeding gives constipation, swim bladder | guppy-feeding-guide.mdx | molly-feeding-g:48,85; platy-feeding-g:44; swordtail-feeding-g:46,84 (overfeeding claim only; teeth claim none found) |
| Guppy | Impending birth stops eating; 1 male per 2 to 3 females; cold below 72F | guppy-feeding-guide.mdx | molly-feeding-g:46,77,80; platy-feeding-g:46,76,79; swordtail-feeding-g:44,79 |
| Guppy | Ratio one male to two or three females | guppy-handling-guide.mdx | HUB:72,81,977; molly-handling-g:44,74; platy-handling-g:44,72 |
| Guppy | Gonopodium about 10mm long | guppy-handling-guide.mdx | none found |
| Guppy | Males around an inch and a half | guppy-handling-guide.mdx | HUB:934 |
| Guppy | Sex a brood at about three weeks | guppy-handling-guide.mdx | none found |
| Guppy | Brood every 21 to 30 days, about 25 average, up to 50 | guppy-handling-guide.mdx | sulcata-hedgehog-lovebird-guppy-overview.mdx:79 |
| Guppy | Breeding traps stress a heavily pregnant female | guppy-handling-guide.mdx | guppy-enrichment-g:127 |
| Guppy | Long tank and a lid, guppies jump | guppy-tank-setup-guide.mdx | HUB:976; molly-tank-setup-g:47,67; platy-tank-setup-g:65; swordtail-tank-setup-g:47,63 |
| Guppy | 76 to 78F target; 3 to 5 watts per gallon | guppy-tank-setup-guide.mdx | HUB:924 |
| Guppy | Mineral supplement for soft tap water | guppy-tank-setup-guide.mdx | HUB:925; molly-tank-setup-g:51,77; platy-tank-setup-g:51,83; swordtail-tank-setup-g:51,77 |
| Guppy | Strong filtration stresses guppies | guppy-tank-setup-guide.mdx | HUB:926 (gentle flow) |
| Guppy | Fishless cycle shorter with bottled bacteria | guppy-tank-setup-guide.mdx | molly-tank-setup-g:57,109; platy-tank-setup-g:55,101; swordtail-tank-setup-g:121; HUB:1108,1380 |
| Guppy | Substrate (fine, dark, no coarse gravel) and 8 to 10 hour lighting | guppy-tank-setup-guide.mdx | HUB:926,927; molly-tank-setup-g:101,105; platy-tank-setup-g:93,97; swordtail-tank-setup-g:99,103 |
| Guppy | Java fern, vallisneria hide fry and raise survival | guppy-tank-setup-guide.mdx | HUB:71; molly-tank-setup-g:113; platy-tank-setup-g:105 |
| Guppy | Ich: rapid breathing and lethargy | guppy-health-issues-guide.mdx | neon-tetra-health-issues-g:49,82; cardinal-tetra-health-issues-g:47,76 |
| Guppy | Guppies handle salt better than most; salt course | guppy-health-issues-guide.mdx | HUB:960 |
| Guppy | Velvet: low temperature cause; raise temp, dim lights | guppy-health-issues-guide.mdx | none found |
| Guppy | Fin rot resolves when caught early with water quality plus antibacterial | guppy-health-issues-guide.mdx | molly-health-issues-g:87,91; platy-health-issues-g:48,67; swordtail-health-issues-g:67; cardinal-tetra-health-issues-g:49 |
| Guppy | Dropsy: advanced organ failure, poor outlook | guppy-health-issues-guide.mdx | molly-health-issues-g:50,95; platy-health-issues-g:46,71; swordtail-health-issues-g:48,71; HUB:1132,1405,1505 |
| Guppy | Swim bladder from overfeeding or constipation; fast | guppy-health-issues-guide.mdx | molly-health-issues-g:99; platy-health-issues-g:75; swordtail-health-issues-g:75; HUB:1503 |
| Guppy | Camallanus details (size, small livebearers, 2-week redose) | guppy-health-issues-guide.mdx | none found (HUB:960 names Camallanus only) |
| Guppy | Quarantine catches most problems; uneaten food drives water decline | guppy-health-issues-guide.mdx | molly-health-issues-g:52,103,105; platy-health-issues-g:52,95,97; swordtail-health-issues-g:52,89,91; HUB:1115,1389 |
| Guppy | Flushing a live fish is not humane; clove oil in tank water | guppy-health-issues-guide.mdx | neon-tetra-health-issues-g:100; cardinal-tetra-health-issues-g:72; spotting-a-sick-fish-g:125 |
| Molly | Ongoing costs table (food $25-50, conditioner $10-15, test kit $15-40) | molly-cost-guide.mdx | HUB:1117 (%%monthly%%); cardinal-tetra-cost-g:50 (same conditioner and kit figures) |
| Molly | 20-gallon upkeep $20 to $30 a month | molly-cost-guide.mdx | HUB:1117,1137 |
| Molly | Skimping on plant side is a common molly mistake | molly-cost-guide.mdx | HUB:1112,1139 |
| Molly | Balloon and lyretail about $6 in a six-pack | molly-cost-guide.mdx | none found |
| Molly | Fancier fin shapes need more swimming room | molly-cost-guide.mdx | none found |
| Molly | Salt container treats up to 434 gallons | molly-cost-guide.mdx | none found |
| Molly | Mollies rarely see a vet; aquatic vets uncommon | molly-cost-guide.mdx | guppy-cost-g:89; platy-cost-g:90; swordtail-cost-g:92; HUB:1125 |
| Molly | Typical brood 20 to 60 fry | molly-cost-guide.mdx | molly-handling-g:42,67; platy-cost-g:53,98 (20 to 50); HUB:1387 (platy) |
| Molly | Bigger, pricier setup than a guppy | molly-cost-guide.mdx | none found |
| Molly | P. mexicana males mate almost constantly | molly-enrichment-guide.mdx | guppy-enrichment-g:45,69; platy-enrichment-g:69; swordtail-enrichment-g:69 |
| Molly | Guppy literature: energy expenditure, reduced foraging | molly-enrichment-guide.mdx | guppy-enrichment-g:45,69; platy-enrichment-g:43,69; swordtail-enrichment-g:43,69 |
| Molly | Two to three females per male, more is better | molly-enrichment-guide.mdx | guppy-enrichment-g:49,83; platy-enrichment-g:45,79; HUB:1113 |
| Molly | Male mollies squabble more than male guppies | molly-enrichment-guide.mdx | molly-handling-g:44,74; HUB:1113,1164 |
| Molly | Mollies graze algae continuously; spotless tank starves them | molly-enrichment-guide.mdx | HUB:1142 |
| Molly | Delicate reputation traces to wrong water | molly-enrichment-guide.mdx | none found |
| Molly | Overstocking hits water quality faster than guppies | molly-enrichment-guide.mdx | swordtail-enrichment-g:113 |
| Molly | Fry and juveniles fed 3 to 5 times a day | molly-feeding-guide.mdx | HUB:1111; guppy-feeding-g:58; swordtail-feeding-g:42,54 |
| Molly | Adults once or twice a day | molly-feeding-guide.mdx | HUB:1111,1139; platy-feeding-g:40,56; swordtail-feeding-g:40,56 |
| Molly | Blanched vegetables two to three times a week | molly-feeding-guide.mdx | HUB:1112,1139 |
| Molly | Pellets hold nutrition better than flake | molly-feeding-guide.mdx | none found |
| Molly | Skipping vegetables is the single most common molly mistake | molly-feeding-guide.mdx | HUB:1112,1139 |
| Molly | Pregnant female eats less before birth | molly-feeding-guide.mdx | guppy-feeding-g:46,75; platy-feeding-g:46,79; swordtail-feeding-g:44,79 |
| Molly | Overfeeding drives constipation and swim bladder problems | molly-feeding-guide.mdx | guppy-feeding-g:71; platy-feeding-g:44; swordtail-feeding-g:46,84; HUB:1386 |
| Molly | Females fuller, rounder; easy sexing | molly-handling-guide.mdx | HUB:1140 (gonopodium vs gravid spot); swordtail-handling-g:64 |
| Molly | Typical brood 20 to 60 fry | molly-handling-guide.mdx | molly-cost-g:54,101; platy-handling-g:42 |
| Molly | Mollies run larger broods than guppies | molly-handling-guide.mdx | none found |
| Molly | Male mollies squabble more than male guppies | molly-handling-guide.mdx | molly-enrichment-g:45,79; HUB:1113,1164 |
| Molly | Shimmy traces to water-quality stress; no-plan mixed group is top mistake | molly-handling-guide.mdx | HUB:1116,1141; platy-health-issues-g:47,48,59 |
| Molly | Shimmy: nerve and muscle loss; cold, low pH, chlorine; raise temp | molly-health-issues-guide.mdx | HUB:1115,1116; glossaryTerms.js:377; platy-health-issues-g:47,59,79; swordtail-health-issues-g:93 |
| Molly | Overseas fancy mollies in harder water prone to shimmy | molly-health-issues-guide.mdx | none found |
| Molly | 1 tablespoon per 5 gallons shimmy dose; snails; brackish tolerant | molly-health-issues-guide.mdx | molly-tank-setup-g:53,89; HUB:1106,1163 |
| Molly | Sailfin regulates salt to about 65 ppt | molly-health-issues-guide.mdx | ENC:146; HUB:1081; molly-tank-setup-g:83 |
| Molly | Table salt has iodine and anti-caking agents | molly-health-issues-guide.mdx | molly-tank-setup-g:91 |
| Molly | Velvet signs, high death rates, contagious | molly-health-issues-guide.mdx | none found |
| Molly | Fin rot: bacterial; water quality plus antibacterial resolves most | molly-health-issues-guide.mdx | guppy-health-issues-g:74; platy-health-issues-g:48,67; swordtail-health-issues-g:67 |
| Molly | Dropsy: Aeromonas endpoint, hardest to treat | molly-health-issues-guide.mdx | guppy-health-issues-g:76; platy-health-issues-g:46,71; swordtail-health-issues-g:48,71; HUB:1132,1405,1505 |
| Molly | Swim bladder from overfeeding or constipation | molly-health-issues-guide.mdx | guppy-health-issues-g:82; platy-health-issues-g:75; swordtail-health-issues-g:75; HUB:1503 |
| Molly | Use a lid, mollies jump | molly-tank-setup-guide.mdx | HUB:976,1162; guppy-tank-setup-g:44,64; platy-tank-setup-g:65; swordtail-tank-setup-g:47,63 |
| Molly | Temperature swings and chlorine trigger shimmy | molly-tank-setup-guide.mdx | molly-health-issues-g:44,65; platy-tank-setup-g:49,71; HUB:1104,1108,1378 |
| Molly | Cory catfish, danios and loaches as tankmates | molly-tank-setup-guide.mdx | none found (swordtail-tank-setup-g:79 lists other species) |
| Molly | Wild mollies in lagoons and roadside ditches | molly-tank-setup-guide.mdx | facts.js:301 (estuaries to ditches); platy-tank-setup-g:80 (platy ditches) |
| Molly | Salt can harm snails | molly-tank-setup-guide.mdx | molly-health-issues-g:46,77; platy-tank-setup-g:77; HUB:1163; aquarium-ich-treatment-g:49 |
| Molly | Never use table salt in a freshwater tank | molly-tank-setup-guide.mdx | molly-health-issues-g:54,79 |
| Molly | Skipping the cycle is a top beginner mistake | molly-tank-setup-guide.mdx | guppy-tank-setup-g:52,92; platy-tank-setup-g:55,101; swordtail-tank-setup-g:121 |
| Platy | Six-pack around $30 | platy-cost-guide.mdx | HUB:1391 |
| Platy | Tiger ruby platies $8 to $9 | platy-cost-guide.mdx | none found |
| Platy | Lifespan 2 to 4 years, toward 5 with excellent water | platy-cost-guide.mdx | HUB:1392; platy-swordtail-molly-overview.mdx:45 |
| Platy | Brood 20 to 50, up to 80, every 4 to 6 weeks | platy-cost-guide.mdx | HUB:1387; platy-handling-g:42,65 |
| Platy | 10-gallon holds about five | platy-cost-guide.mdx | aquarium-stocking-and-tankmates-guide.mdx:148; HUB:1377,1381 |
| Platy | Upkeep $15 to $20 a month, near a guppy setup | platy-cost-guide.mdx | HUB:1391 (%%monthly:platy%%) |
| Platy | Health issues managed at home, no vet | platy-cost-guide.mdx | HUB:1399; molly-cost-g:93; guppy-cost-g:89 |
| Platy | Holds about five; six or more needs more room | platy-tank-setup-guide.mdx | HUB:1377,1381; aquarium-stocking-and-tankmates-guide.mdx:148 |
| Platy | Platies are capable jumpers | platy-tank-setup-guide.mdx | guppy-tank-setup-g:44,64; molly-tank-setup-g:47,67; HUB:976,1162 |
| Platy | Swings over 2F a day; temperature instability triggers shimmy | platy-tank-setup-guide.mdx | HUB:1104,1378,1431; molly-tank-setup-g:49,73 |
| Platy | Variatus handle cool end better | platy-tank-setup-guide.mdx | HUB:1378,1393,1431; platy-handling-g:54 |
| Platy | Platies tolerate pH 6.8 to 8.5 | platy-tank-setup-guide.mdx | HUB:1379 |
| Platy | Crushed coral or buffer for soft tap water | platy-tank-setup-guide.mdx | HUB:1423; molly-tank-setup-g:51,77; swordtail-tank-setup-g:51,77 |
| Platy | Tankmates: cory, bristlenose, rainbowfish, rasboras, snails | platy-tank-setup-guide.mdx | bristlenose-pleco-handling-g:78 (lists platies as good company) |
| Platy | Mollies want pH 7.5 to 8.5; neon and cardinal soft-water fish | platy-tank-setup-guide.mdx | HUB:1105 (molly pH); HUB:1195 (neon "different water from a guppy") |
| Platy | Platies do not need aggressive flow | platy-tank-setup-guide.mdx | none found |
| Platy | Fine gravel or sand; avoid coarse; darker substrate; 8 to 10 hour light | platy-tank-setup-guide.mdx | guppy-tank-setup-g:84,88; molly-tank-setup-g:101,105; swordtail-tank-setup-g:99,103 |
| Platy | Cycle shorter with bottled bacteria | platy-tank-setup-guide.mdx | HUB:1380; guppy-tank-setup-g:52,92; molly-tank-setup-g:57,109 |
| Platy | Skipping the cycle is a top beginner mistake | platy-tank-setup-guide.mdx | guppy-tank-setup-g:52,92; molly-tank-setup-g:57,109; swordtail-tank-setup-g:121 |
| Platy | Skipping cover lets predation keep numbers down | platy-tank-setup-guide.mdx | HUB:1110 (molly), 932 (guppy); platy-handling-g:68 |
| Platy | Wild diet mixes algae, plant matter, crustaceans, insects | platy-feeding-guide.mdx | ENC:192 |
| Platy | Juveniles two to three smaller meals | platy-feeding-guide.mdx | HUB:1384,1432 |
| Platy | Feed what clears in a minute or two | platy-feeding-guide.mdx | HUB:1384; swordtail-health-issues-g (about two minutes) |
| Platy | Fry 3 to 4 times a day for about 2 months | platy-feeding-guide.mdx | none found |
| Platy | Platies need less vegetable than mollies | platy-feeding-guide.mdx | HUB:1385,1412 |
| Platy | Platies do better on variety than most fish | platy-feeding-guide.mdx | none found |
| Platy | Overfeeding drives constipation, swim bladder; stringy waste | platy-feeding-guide.mdx | HUB:1386; molly-feeding-g:48,85; guppy-feeding-g:71; swordtail-feeding-g:46,84 |
| Platy | Two to three females per male, breeders' standard | platy-feeding-guide.mdx | HUB:1382; guppy-handling-g:42; molly-handling-g:44 |
| Platy | Cold water slows metabolism, weakens immunity | platy-feeding-guide.mdx | swordtail-feeding-g (stop-eating list); guppy-feeding-g:75 |
| Platy | Female near birth may eat less | platy-feeding-guide.mdx | guppy-feeding-g:46,75; molly-feeding-g:46,80; swordtail-feeding-g:44,79 |
| Platy | Guppy similarly unfussy and prone to overfeeding | platy-feeding-guide.mdx | guppy-feeding-g:71 |
| Platy | About as forgiving as community fish get | platy-handling-guide.mdx | platy-swordtail-molly-overview.mdx:45,51 (hardy) |
| Platy | Variatus better pick for room-temperature tank | platy-handling-guide.mdx | HUB:1378,1431 |
| Platy | Gonopodium appears at 2 to 6.5 months | platy-handling-guide.mdx | HUB:1388 |
| Platy | Dark gravid spot near the vent | platy-handling-guide.mdx | HUB:1388,1413; guppy-handling-g:44,62; molly-handling-g:40,58; swordtail-handling-g:64 |
| Platy | Breeding is something you cannot prevent by accident | platy-handling-guide.mdx | platy-swordtail-molly-overview.mdx:40,68 |
| Platy | Brood 20 to 50; gestation 4 to 6 weeks; interval | platy-handling-guide.mdx | HUB:1387; platy-cost-g:53,98 |
| Platy | Two to three females per male | platy-handling-guide.mdx | HUB:1382; guppy-handling-g:42; molly-handling-g:44 |
| Platy | Predation keeps numbers in check | platy-handling-guide.mdx | HUB:1110; molly-tank-setup-g:113 |
| Platy | Shops expect little in exchange; favor matched fish | platy-handling-guide.mdx | none found |
| Platy | Local aquarium society is the likeliest home for fry | platy-handling-guide.mdx | none found |
| Platy | Released platies formed wild populations | platy-handling-guide.mdx | none found |
| Platy | 5 or 6 platies grow in two or three months | platy-handling-guide.mdx | none found |
| Platy | Brood size ranked against guppy and molly | platy-handling-guide.mdx | none found |
| Platy | All three livebearers store sperm and repeat-breed | platy-handling-guide.mdx | HUB:31; platy-swordtail-molly-overview.mdx:40,68 |
| Platy | Fin rot: broad-spectrum antibacterial; most cases resolve | platy-health-issues-guide.mdx | guppy-health-issues-g:74; molly-health-issues-g:87,91; swordtail-health-issues-g:67 |
| Platy | Dropsy: Aeromonas, hardest to treat | platy-health-issues-guide.mdx | guppy-health-issues-g:76; molly-health-issues-g:50,95; swordtail-health-issues-g:48,71; HUB:1132,1405,1505 |
| Platy | Swim bladder from overfeeding; fast, pea | platy-health-issues-guide.mdx | guppy-health-issues-g:82; molly-health-issues-g:99; swordtail-health-issues-g:75; HUB:1503 |
| Platy | Shimmy across livebearers; temperature trigger; nerve loss | platy-health-issues-guide.mdx | molly-health-issues-g:44,65; HUB:1414; glossaryTerms.js:377 |
| Platy | One ich organism produces hundreds more; salt without dose | platy-health-issues-guide.mdx | swordtail-health-issues-g:63 |
| Platy | Melanoma mechanism "well-understood" | platy-health-issues-guide.mdx | HUB:1433 (platy hub FAQ: "well-studied mechanism") |
| Platy | Stress, water, overcrowding, no quarantine behind conditions | platy-health-issues-guide.mdx | HUB:1134 (molly vetLine); guppy-health-issues-g:51 |
| Platy | Prevention beats cure; uneaten food drives water decline | platy-health-issues-guide.mdx | guppy-health-issues-g:92,94; molly-health-issues-g:103,105; swordtail-health-issues-g:89,91 |
| Platy | Separate tank doubles as sick-fish and birthing tank | platy-health-issues-guide.mdx | swordtail-handling-g:46,60; HUB:1115,1389 |
| Platy | Harassment costs: energy expenditure, foraging, vigilance | platy-enrichment-guide.mdx | guppy-enrichment-g:45,69; molly-enrichment-g:71; swordtail-enrichment-g:43,69 |
| Platy | P. mexicana males mate almost constantly | platy-enrichment-guide.mdx | guppy-enrichment-g:45,69; molly-enrichment-g:43,69; swordtail-enrichment-g:69 |
| Platy | At least two to three females per male | platy-enrichment-guide.mdx | guppy-enrichment-g:49,83; molly-enrichment-g:45,79; swordtail-enrichment-g:47,85; HUB:1382 |
| Platy | Group of five or more; do not keep a pair | platy-enrichment-guide.mdx | HUB:1377,1381 |
| Platy | Dense planting lets a pursued female stop being pursued | platy-enrichment-guide.mdx | guppy-enrichment-g:53,91; molly-enrichment-g:105; swordtail-tank-setup-g:109 |
| Platy | Platies are active mid-water fish | platy-enrichment-guide.mdx | none found |
| Platy | Platy survives an uncycled tank, breathing ammonia | platy-enrichment-guide.mdx | HUB:1380 |
| Platy | Platies take more plant matter than guppies | platy-enrichment-guide.mdx | none found |
| Platy | Unmanaged tank overstocked within a year | platy-enrichment-guide.mdx | none found |
| Platy | Smallest and simplest of the three | platy-enrichment-guide.mdx | none found |
| Platy | Tankmates that predate fry | platy-enrichment-guide.mdx | platy-handling-g:68; platy-tank-setup-g:105; molly-tank-setup-g:113 |
| Platy | 10 gallon reasonable start for a small group | platy-enrichment-guide.mdx | HUB:1377; aquarium-stocking-and-tankmates-guide.mdx:148 |
| Swordtail | Hi-fin and lyretail $6 to $10; koi, neon swordtails $15 to $25 | swordtail-cost-guide.mdx | HUB:1489 ("more for lyretails", no figure) |
| Swordtail | Six-pack $29.99; hi-fin lyretail six-pack $37.99 | swordtail-cost-guide.mdx | none found |
| Swordtail | Upkeep $20 to $35 a month | swordtail-cost-guide.mdx | HUB:1489 (%%monthly:swordtail%%) |
| Swordtail | Upkeep above a molly's because bigger fish eat more | swordtail-cost-guide.mdx | none found |
| Swordtail | Lifespan 3 to 5 years | swordtail-cost-guide.mdx | HUB:1490; platy-swordtail-molly-overview.mdx:45; ENC:206 |
| Swordtail | More active swimmers than molly or platy | swordtail-cost-guide.mdx | platy-swordtail-molly-overview.mdx:57; ENC:202; swordtail-tank-setup-g:67; swordtail-handling-g:54 |
| Swordtail | Retailers: 30 gallons for hi-fin lyretails | swordtail-cost-guide.mdx | none found |
| Swordtail | Sword is part of why fancy varieties cost more | swordtail-cost-guide.mdx | none found |
| Swordtail | Swordtails rarely see a vet | swordtail-cost-guide.mdx | HUB:1499; molly-cost-g:93; platy-cost-g:90; guppy-cost-g:89 |
| Swordtail | Male persistent, near-constant presence around a female | swordtail-cost-guide.mdx | swordtail-tank-setup-g:109; swordtail-handling-g:44,82; swordtail-health-issues-g:79 |
| Swordtail | Platy and swordtail together give mixed-species fry | swordtail-cost-guide.mdx | platy-swordtail-molly-overview.mdx:38; HUB:66,1492 |
| Swordtail | Swordtails are dietary generalists, unlike herbivore-leaning molly | swordtail-cost-guide.mdx | ENC:206; swordtail-feeding-g:17,38 |
| Swordtail | Setup table prices a 20-gallon long tank | swordtail-cost-guide.mdx | none found |
| Swordtail | Livebearer that outgrows a 20-gallon fastest | swordtail-cost-guide.mdx | none found |
| Swordtail | 75 to 79F the steadier target | swordtail-tank-setup-guide.mdx | HUB:1480 |
| Swordtail | Crushed coral or buffer for soft water | swordtail-tank-setup-guide.mdx | HUB:1479; molly-tank-setup-g:51,77; platy-tank-setup-g:51,83 |
| Swordtail | Tankmate list (platies, mollies, corys, rosy barbs, kuhlis, otos) | swordtail-tank-setup-guide.mdx | none found |
| Swordtail | Powerful jumpers; gaps well under an inch | swordtail-tank-setup-guide.mdx | HUB:1481; swordtail-enrichment-g:93 |
| Swordtail | Sponge filter for fry survival | swordtail-tank-setup-guide.mdx | HUB:1482 (sponge filter only if fry survival is the priority) |
| Swordtail | Bigger fish, bigger bioload | swordtail-tank-setup-guide.mdx | none found |
| Swordtail | Fine gravel or sand; avoid sharp gravel | swordtail-tank-setup-guide.mdx | guppy-tank-setup-g:84; molly-tank-setup-g:101; platy-tank-setup-g:93 |
| Swordtail | Basic LED 8 to 10 hour cycle | swordtail-tank-setup-guide.mdx | guppy-tank-setup-g:88; molly-tank-setup-g:105; platy-tank-setup-g:97; HUB:927 |
| Swordtail | More active open-water swimmers than molly or platy | swordtail-tank-setup-guide.mdx | platy-swordtail-molly-overview.mdx:57; ENC:202; swordtail-cost-g:73 |
| Swordtail | Cycle shorter with bottled bacteria; common beginner mistake | swordtail-tank-setup-guide.mdx | guppy-tank-setup-g:52,92; molly-tank-setup-g:57,109; platy-tank-setup-g:55,101 |
| Swordtail | Planting lets females break line of sight; plant specs | swordtail-tank-setup-guide.mdx | platy-enrichment-g:49; molly-enrichment-g:105; guppy-enrichment-g:53 (line of sight only; plant specs none found) |
| Swordtail | Linked 20-gallon long tank is a stopgap | swordtail-tank-setup-guide.mdx | none found |
| Swordtail | Wild diet in roughly even plant and invertebrate measure | swordtail-feeding-guide.mdx | ENC:206 (generalist omnivore); swordtail-cost-g:88 |
| Swordtail | Feed what clears in about 2 minutes | swordtail-feeding-guide.mdx | HUB:1484; swordtail-health-issues-g:89 |
| Swordtail | Overfeeding drives constipation, swim bladder | swordtail-feeding-guide.mdx | guppy-feeding-g:71; molly-feeding-g:48,85; platy-feeding-g:44; HUB:1386,1503 |
| Swordtail | Fry born larger; no infusoria; 3 to 5 times a day | swordtail-feeding-guide.mdx | molly-feeding-g:44,56; guppy-feeding-g:58; HUB:1111 |
| Swordtail | Juveniles need more frequent, higher-protein feeding | swordtail-feeding-guide.mdx | guppy-feeding-g:59; molly-feeding-g:44 |
| Swordtail | Stops eating: male-heavy ratio, cold, impending birth | swordtail-feeding-guide.mdx | guppy-feeding-g:75,76; molly-feeding-g:77,80; platy-feeding-g:76,79 |
| Swordtail | Avoid all-flake diet with no vegetables | swordtail-feeding-guide.mdx | none found |
| Swordtail | Female fuller fan-shaped anal fin; gravid spot | swordtail-handling-guide.mdx | HUB:1140,1388; guppy-handling-g:44,62; platy-handling-g:40,58; molly-handling-g:40,58 |
| Swordtail | Fish that look female, later grow sword and father broods | swordtail-handling-guide.mdx | HUB:1446; swordtail-enrichment-g:51 |
| Swordtail | Three or four females per male where tank allows | swordtail-handling-guide.mdx | HUB:1488; swordtail-enrichment-g:47,85; swordtail-health-issues-g:85 |
| Swordtail | Unbalanced ratio causes measurable stress, fin damage | swordtail-handling-guide.mdx | swordtail-health-issues-g:79,85; HUB:1488 |
| Swordtail | Unbalanced tank stresses swordtails more than molly or platy | swordtail-handling-guide.mdx | none found |
| Swordtail | Males about 5.5 inches including sword | swordtail-handling-guide.mdx | HUB:1491; ENC:204; platy-swordtail-molly-overview.mdx:57 |
| Swordtail | Acclimation: float in hard water, drip if soft; bag ammonia | swordtail-handling-guide.mdx | HUB:1485 |
| Swordtail | Quarantine tank catches most problems, ich and fin rot | swordtail-handling-guide.mdx | molly-health-issues-g:103,105; platy-health-issues-g:95; guppy-health-issues-g:92,94; HUB:1115,1389 |
| Swordtail | Exactly two males is the combination to avoid | swordtail-handling-guide.mdx | HUB:1477; swordtail-enrichment-g (Not Two Males) |
| Swordtail | Mollies and guppies get by on a looser ratio | swordtail-handling-guide.mdx | none found |
| Swordtail | Unusual size reversal: larger female, ornamented male | swordtail-handling-guide.mdx | platy-swordtail-molly-overview.mdx:57; ENC:205; HUB:1487 |
| Swordtail | 82F ceiling plus heat with salt or medication for ich | swordtail-health-issues-guide.mdx | aquarium-ich-treatment-g:84 |
| Swordtail | One ich organism produces hundreds of new ones | swordtail-health-issues-guide.mdx | platy-health-issues-g:63 |
| Swordtail | Fin rot resolves when caught early; chasing damage | swordtail-health-issues-guide.mdx | guppy-health-issues-g:74; molly-health-issues-g:87,91; platy-health-issues-g:48,67 |
| Swordtail | Dropsy hardest to treat, poor outlook | swordtail-health-issues-guide.mdx | guppy-health-issues-g:76; molly-health-issues-g:50,95; platy-health-issues-g:46,71; HUB:1132,1405,1505 |
| Swordtail | Swim bladder from overfeeding; fast | swordtail-health-issues-guide.mdx | guppy-health-issues-g:82; molly-health-issues-g:99; platy-health-issues-g:75; HUB:1503 |
| Swordtail | Bad sex ratio raises odds of disease; chasing damage | swordtail-health-issues-guide.mdx | HUB:1488; swordtail-handling-g:80 |
| Swordtail | Feed what clears in about two minutes; occasional shimmy | swordtail-health-issues-guide.mdx | HUB:1484; molly-health-issues-g:44 (shimmy) |
| Swordtail | Swordtails rarely see a vet | swordtail-health-issues-guide.mdx | HUB:1499; molly-cost-g:93; platy-cost-g:90 |
| Swordtail | Two males produce a hounded loser; avoid exactly two | swordtail-enrichment-guide.mdx | HUB:1477; swordtail-handling-g (Managing Population) |
| Swordtail | Males more aggressive than guppies or platies | swordtail-enrichment-guide.mdx | none found |
| Swordtail | Three or four females per male is better | swordtail-enrichment-guide.mdx | HUB:1488; swordtail-handling-g:44,80; swordtail-health-issues-g:85 |
| Swordtail | Largest and most active common livebearer | swordtail-enrichment-guide.mdx | ENC:205 (largest sex); platy-swordtail-molly-overview.mdx:57; HUB:1487 |
| Swordtail | Males attempt to mate almost constantly, females non-responsive | swordtail-enrichment-guide.mdx | guppy-enrichment-g:45,69; molly-enrichment-g:43,69; platy-enrichment-g:69 |
| Swordtail | Outflow along length: faster end and slower end | swordtail-enrichment-guide.mdx | none found |
| Swordtail | Swordtails graze more than guppies | swordtail-enrichment-guide.mdx | none found |
| Swordtail | Large fish: overstocking hits water quality quickly | swordtail-enrichment-guide.mdx | molly-enrichment-g:101 |
| Swordtail | Excellent jumpers; lidless tank loses fish | swordtail-enrichment-guide.mdx | HUB:1481; guppy-tank-setup-g:44; molly-tank-setup-g:47 |
| Swordtail | Gasparini 2012 Sources entry | swordtail-enrichment-guide.mdx | none found (a source entry, not a claim) |
| Neon tetra | Lifespan: about 5 years, often 2 to 3; guppy comparison | neon-tetra-cost-guide.mdx | none found |
| Neon tetra | FAQ: about 5 years in good care, 2 to 3 typical | neon-tetra-cost-guide.mdx | none found |
| Neon tetra | Covered neon is a brighter fish | neon-tetra-enrichment-guide.mdx | neon-tetra-handling-g:76; neon-tetra-tank-setup-g:84; cardinal-tetra-enrichment-g:51 (cardinal version) |
| Neon tetra | NTD mistaken for columnaris, costia; film under skin; spores in liver, spleen | neon-tetra-health-issues-guide.mdx | HUB:1217,1219,1226; glossaryTerms.js:372 (lumps under skin); neon-tetra-health-issues-g:43,47,64,71; cardinal-tetra-health-issues-g:43,64 |
| Neon tetra | Wild diet 20 to 30% plant matter and algae | neon-tetra-feeding-guide.mdx | none found |
| Neon tetra | Mouth only about 1 to 2mm | neon-tetra-feeding-guide.mdx | none found (HUB:1199,1224 say "very small mouth" only) |
| Neon tetra | Fry and juveniles 3 to 4 small feedings until 6 months | neon-tetra-feeding-guide.mdx | none found |
| Neon tetra | Female stripe looks bent, male straight | neon-tetra-handling-guide.mdx | none found |
| Neon tetra | Eggs hatch up to 36 hours; fry swim free 3 to 4 days | neon-tetra-handling-guide.mdx | none found |
| Neon tetra | Neons react more to chemistry shifts than most community fish | neon-tetra-handling-guide.mdx | neon-tetra-cost-g:108; neon-tetra-tank-setup-g:100 |
| Neon tetra | Darker color makes neon coloring pop | neon-tetra-tank-setup-guide.mdx | neon-tetra-enrichment-g:103; neon-tetra-handling-g:76; cardinal-tetra-enrichment-g:51 |
| Neon tetra | Dim to moderate light, 8 to 10 hours a day | neon-tetra-tank-setup-guide.mdx | none found (HUB:1197 has no hours) |
| Neon tetra | More sensitive to water instability than hardy fish | neon-tetra-tank-setup-guide.mdx | neon-tetra-handling-g:48,64,86; neon-tetra-cost-g:108 |
| Neon tetra | Neons react to chemistry shifts more than most community fish | neon-tetra-cost-guide.mdx | neon-tetra-handling-g:48,64,86; neon-tetra-tank-setup-g:100 |
| Neon tetra | Blackwater fish under bright light hide | neon-tetra-enrichment-guide.mdx | neon-tetra-handling-g:60; cardinal-tetra-enrichment-g:95,101; spotting-a-sick-fish-g:45 |
| Cardinal tetra | Cross-link to zebra, pleco, discus, cardinal overview | cardinal-tetra-cost-guide.mdx | discus-cost-g:105; zebra-danio-cost-g:120; bristlenose-pleco-cost-g:102 |
| Cardinal tetra | Small groups turn pale, hide, get sick | cardinal-tetra-handling-guide.mdx | boa-glider-mantis-tetra-overview.mdx:44,81 (neon version); neon-tetra-handling-g:56 |
| Cardinal tetra | Cardinals shoal tighter and color up in bigger groups | cardinal-tetra-enrichment-guide.mdx | aquarium-stocking-and-tankmates-guide.mdx:104,106 (shoaling); neon-tetra-enrichment-g:103 |
| Cardinal tetra | Tea-colored water vs bright clear water look different | cardinal-tetra-enrichment-guide.mdx | facts.js:300; HUB:494 |
| Cardinal tetra | Blackwater fish under bright light stay near bottom | cardinal-tetra-enrichment-guide.mdx | facts.js:300; neon-tetra-enrichment-g:101 |
| Cardinal tetra | Fin rot progresses in stages | cardinal-tetra-health-issues-guide.mdx | HUB:513; glossaryTerms.js:363; ST/glowlight-tetra-health-issues-guide.mdx:103 |
| Cardinal tetra | Most fish recover in one to two weeks | cardinal-tetra-health-issues-guide.mdx | none found |
| Cardinal tetra | 30 to 60 days quarantine for a fish worth being sure of | cardinal-tetra-health-issues-guide.mdx | fish-quarantine-and-treatment-g:42,71; HUB:82,938 |
| Cardinal tetra | Dry-season stranding kills most wild cardinals | cardinal-tetra-cost-guide.mdx | none found |
