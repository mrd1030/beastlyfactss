# Guppy (Poecilia reticulata): Research Notes

Researched 2026-11-01. Research only: no article copy here. Purpose: check every factual claim and figure in the guppy pages against strong sources so a later pass can correct them all at once, and name stronger replacements for the weak sources in the guides' Sources blocks. Builds on LIVEBEARER_GROUP_RESEARCH.md (sperm storage, FishBase and Seriously Fish quotes); nothing there was redone except where the guppy pages needed a second look.

Quote conventions: quotes are short extracts as returned by the page when opened in this session. Where a source used an en dash in a range, it is written here with "to", because this file carries no em or en dashes. Quoted text keeps the source's own spelling (Seriously Fish is British). "Verbatim" means the page HTML was downloaded and read directly (FishBase, Seriously Fish, FishBase synonym list, and PDFs converted with pdftotext). "Fetch tool" means the web fetch tool returned the extract (PMC, PubMed, Merck, publisher abstract pages); re-check a fetch-tool quote against the page before it goes on the site as a quotation. "Search extract" means the figure was seen only in a web search result and the page itself was not opened; nothing in a "search extract" row is recorded as verified.

Pages checked: content/guides/guppy-{cost,tank-setup,feeding,handling,health-issues,enrichment}-guide.mdx (all six exist; there are no other guppy-*.mdx files), the guppy hub in src/lib/data/guides/fish.js (`id: "guppy"`, line 901), the encyclopedia entry in src/lib/data/encyclopedia/fish.js (line 115), the guppy row in the livebearer hub branches (fish.js line 40), and the guppy lines in content/guides/sulcata-hedgehog-lovebird-guppy-overview.mdx. content/guides/platy-swordtail-molly-overview.mdx has no guppy lines (grep returned nothing), so nothing to check there.

Line numbers: cost and tank-setup numbers are file lines. For the feeding, handling, health-issues and enrichment guides they count from a view with the Featured Image, Author and Affiliate frontmatter blocks removed, so the real file line is roughly 7 to 10 higher. Locate by the quoted text.

## Source list and tier

Strongest first. "Tier" follows docs/RULES.md: peer-reviewed, then .gov, then museums and universities (including veterinary references), then established husbandry references.

| # | Source | Tier | URL |
|---|--------|------|-----|
| G1 | Evans JP (2012). "Lifetime Number of Mates Interacts with Female Age to Determine Reproductive Success in Female Guppies." PLoS ONE 7(10): e47507. DOI 10.1371/journal.pone.0047507 | Peer-reviewed (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3470546/ |
| G2 | Gasparini C, Daymond E, Evans JP (2018). "Extreme fertilization bias towards freshly inseminated sperm in a species exhibiting prolonged female sperm storage." Royal Society Open Science 5(3): 172195 | Peer-reviewed (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5882737/ |
| G3 | Reznick D, Bryant M, Holmes D (2006). "The Evolution of Senescence and Post-Reproductive Lifespan in Guppies (Poecilia reticulata)." PLoS Biology (online Dec 27, 2005) | Peer-reviewed (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC1318473 |
| G4 | Gasparini C, Devigili A, Pilastro A (2012). "Cross-generational effects of sexual harassment on female fitness in the guppy." Evolution 66(2): 532-543. DOI 10.1111/j.1558-5646.2011.01455.x | Peer-reviewed (PubMed abstract via fetch tool) | https://pubmed.ncbi.nlm.nih.gov/22276546/ |
| G5 | Plath M, Makowicz AM, Schlupp I, Tobler M (2007). "Sexual harassment in live-bearing fishes (Poeciliidae): comparing courting and noncourting species." Behavioral Ecology 18(4): 680-688 (abstract page) | Peer-reviewed | https://econpapers.repec.org/RePEc:oup:beheco:v:18:y:2007:i:4:p:680-688 |
| G6 | Darden SK, Croft DP (2008). "Male harassment drives females to alter habitat use and leads to segregation of the sexes." Biology Letters 4(5): 449-451 | Peer-reviewed (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC2610095 |
| G7 | Killen SS, Croft DP, Salin K, Darden SK (2016). "Male sexually coercive behaviour drives increased swimming efficiency in female guppies." Functional Ecology 30(4): 576-583 | Peer-reviewed (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC4949636 |
| G8 | Levsen A, Jakobsen PJ (2002). "Selection pressure towards monoxeny in Camallanus cotti (Nematoda, Camallanidae) facing an intermediate host bottleneck situation." Parasitology 124(6): 625-629. And Levsen A, Berland B (2002), Folia Parasitologica 49(3): 231-238 (guppy as experimental definitive host) | Peer-reviewed (abstract pages, fetch tool) | https://www.cambridge.org/core/journals/parasitology/article/abs/selection-pressure-towards-monoxeny-in-camallanus-cotti-nematoda-camallanidae-facing-an-intermediate-host-bottleneck-situation/F8CB94F20A55B3EDE6A0610E0E522FDA , https://folia.paru.cas.cz/link/2002/3/231.html |
| G9 | van Oosterhout C, Smith AM, Hanfling B, Ramnarine IW, Mohammed RS, Cable J (2007). "The guppy as a conservation model: implications of parasitism and inbreeding on reintroduction success." Conservation Biology 21(6): 1573-1583 | Peer-reviewed (abstract page, fetch tool) | https://ueaeprints.uea.ac.uk/id/eprint/24907/ |
| G10 | Norazmi-Lokman NH, Baderi AA, Zabidi ZM, Diana AW (2020). "Effects of different feeding frequency on Siamese fighting fish (Betta splenden) and Guppy (Poecilia reticulata) Juveniles: Data on growth performance and survival rate." Data in Brief 32: 106046 | Peer-reviewed data article (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7393462/ |
| G11 | Kent M, Ojanguren AF (2015). "The effect of water temperature on routine swimming behaviour of new born guppies (Poecilia reticulata)." Biology Open | Peer-reviewed (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC4400596 |
| G12 | Gordon SP, Reznick D, Arendt JD, Roughton A, Ontiveros Hernandez MN, Bentzen P, Lopez-Sepulcre A (2015). "Selection analysis on the rapid evolution of a secondary sexual trait." Proc R Soc B 282(1813): 20151244 (describes Endler's translocation) | Peer-reviewed (fetch tool) | https://pmc.ncbi.nlm.nih.gov/articles/PMC4632628 |
| G13 | USGS Nonindigenous Aquatic Species: Poecilia reticulata fact sheet (speciesID 863) | .gov (verbatim) | https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=863 |
| G14 | UF/IFAS Extension CIR920 (EDIS FA006), Francis-Floyd, Yanong, Pouder: "Ichthyophthirius multifiliis (White Spot) Infections in Fish" | University extension (PDF text read with pdftotext) | https://ask.ifas.ufl.edu/publication/FA006/pdf |
| G15 | Merck Veterinary Manual (professional): "Parasitic Diseases of Fish" | Veterinary reference (fetch tool) | https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/parasitic-diseases-of-fish |
| G16 | Merck Veterinary Manual (professional): "Bacterial Diseases of Fish" | Veterinary reference (fetch tool) | https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/bacterial-diseases-of-fish |
| G17 | Merck Veterinary Manual (pet owner): "Disorders and Diseases of Fish" (already cited in the health guide) | Veterinary reference (fetch tool) | https://www.merckvetmanual.com/all-other-pets/fish/disorders-and-diseases-of-fish |
| G18 | Merck Veterinary Manual (pet owner): "Breeding and Reproduction of Fish" (already cited in the handling guide) | Veterinary reference (fetch tool) | https://www.merckvetmanual.com/all-other-pets/fish/breeding-and-reproduction-of-fish |
| G19 | Merck Veterinary Manual (professional): "Nutritional Diseases of Fish" | Veterinary reference (fetch tool) | https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/nutritional-diseases-of-fish |
| G20 | Texas A&M IACUC guidance TAMU-G-048, "Guidelines on Euthanasia of Fish, Amphibians and Reptiles" (restates AVMA 2020) | University guidance (PDF text read with pdftotext) | https://research.tamu.edu/wp-content/uploads/2024/12/TAMU-G-048-Guidelines-on-Euthanasia-of-Fish-Amphibians-and-Reptiles.pdf |
| G21 | FishBase: Poecilia reticulata, Guppy (species page and synonym list) | Museum/university-tier database (verbatim) | https://www.fishbase.se/summary/Poecilia-reticulata.html , https://www.fishbase.se/Nomenclature/SynonymsList.php?ID=3228&SynCode=30500&GenusName=Poecilia&SpeciesName=reticulata |
| G22 | Seriously Fish: Poecilia reticulata (page "Last revised 2026") | Established husbandry reference (verbatim) | https://www.seriouslyfish.com/species/poecilia-reticulata/ |
| G23 | Practical Fishkeeping (John Rundle): "The Guppy: First loves never die" (no date shown on page) | Fishkeeping magazine (fetch tool) | https://www.practicalfishkeeping.co.uk/features/the-guppy-first-loves-never-die/ |
| G24 | Practical Fishkeeping: "How to Cycle a Fish Tank: The Complete Guide" (no named author, no date on page) | Fishkeeping magazine (fetch tool); weaker than G23 because no byline | https://www.practicalfishkeeping.co.uk/features/how-to-cycle-a-fish-tank-the-complete-guide/ |
| G25 | VCA Animal Hospitals: Fish White Spot Disease (Ich), by Gregory Rich, DVM (already cited elsewhere on the site) | Veterinary (fetch tool) | https://vcahospitals.com/know-your-pet/fish-white-spot-disease-ich |

Lower tier, opened, usable only with a flag:

| # | Source | Why flagged | URL |
|---|--------|-------------|-----|
| L1 | Jayantha UL, Dangolla A, Silva I (2001). "Some aspects of breeding of the wild and neon strains of guppy." Proceedings and Abstracts of the Annual Research Sessions, University of Peradeniya, p. 171 | One-paragraph conference abstract; Sri Lankan aquarium strains | https://ir.lib.pdn.ac.lk/handle/20.500.14444/1164 |
| L2 | Aquarium Co-Op: Camallanus worms | Retailer blog, no named author; opened only to see what the guide's claims rest on | https://www.aquariumcoop.com/blogs/aquarium/camallanus-worms |

Seen only in search results, page not opened, nothing below is recorded as verified:
- Chervinski J (1984), J Fish Biol 24(4): 449-452, "Salinity tolerance of the guppy." The journal page returned 403. A search returned a Usenet transcription of the abstract (guppies 11 to 40 mm; moved straight from fresh water into "50% seawater" with no deaths; gradual acclimation to 150% seawater). The transcription carries a "[sic]" and inconsistent percentages, so it is not usable as a quote.
- Chung KS (2001), Hydrobiologia 462: 253-257, DOI 10.1023/A:1013158904036: guppies from a Venezuelan canal, CTM 38.95 to 40.61°C, death points 41.22 to 42.86°C after four weeks acclimated at 24 to 33°C (Peeref listing, search extract).
- Nakadate M, Shikano T, Taniguchi N, "Inbreeding depression and heterosis in various quantitative traits of the guppy" (AGRIS record, search extract): survival at day 120 and salinity tolerance fell significantly with full-sib mating.
- Sahin and colleagues (2012 conference item, IBU repository): newborn guppies, Artemia nauplii three times a day, Artemia for the first 2 weeks "necessary for better survival and stress resistance" (search extract).
- Padur, Wedekind, Oeztuerk (2009), Behaviour, and Koehler et al. (2011), Behav Ecol Sociobiol, on harassment in Poecilia mexicana (search extract).
- Zandona et al. (2015), PLoS ONE, wild guppy diet (page returned 403): in the dry season high-predation guppies fed mostly on invertebrates, low-predation guppies mainly on detritus (search extract).
- Eschmeyer's Catalog of Fishes (403), the AMNH Rosen and Bailey 1963 PDF (not opened), Animal Diversity Web (page holds taxonomy only), Wikipedia, Merck "Disorders" page on fin rot or swim bladder (neither mentioned).

---

## 1. Identity, name history, native range, conservation

1.1 Scientific name and authority
- FishBase (verbatim): "Poecilia reticulata Peters, 1859". Etymology: "Poecilia: Greek, poikilos = with a lot of colours". (G21)
- FishBase synonym list (verbatim): "Girardinus guppii Günther, 1866" is a "junior" synonym; "Lebistes poecilioides De Filippi, 1861" is a junior synonym; "Lebistes reticulatus (Peters, 1859)" is a "new" combination (no author for the genus move is given). (G21)
- Seriously Fish (verbatim): "Peters, 1859 · Formerly Lebistes poecilioides De Filippi, 1861 · Girardinus guppii Günther, 1866". Type locality: "Guayre River, Caracas, Venezuela". (G22)
- Reading: the genus name Lebistes dates to De Filippi 1861 in both sources. Nothing opened says Charles Tate Regan "assigned" Lebistes reticulatus in 1913, or that Rosen and Bailey "restored the original name in 1963" (see Contradictions, item 24). The interval "seven years before" (1859 to 1866) is correct arithmetic from FishBase.

1.2 The Guppy namesake
- FishBase (verbatim): "Robert John Lechmere Guppy (1836 to 1916) was a British-born civil engineer, schools inspector, civil servant and naturalist in Trinidad & Tobago". (G21; the page shows an en dash between the years)
- "Submitted specimens to the British Museum in the 1860s": only secondary support (a search extract citing the Cal Academy catalog listing BMNH syntypes, which I could not open). The Günther name is dated 1866 in two opened sources. Treat the British Museum detail as unverified.

1.3 Native range
- FishBase (verbatim): "South America: Venezuela, Barbados, Trinidad, northern Brazil and the Guyanas." (G21)
- Seriously Fish (verbatim): "Native to northeastern South America and the southern Caribbean with its original range considered to cover Venezuela, Guyana, Suriname, French Guiana plus the islands of Trinidad and Tobago, Barbados, Antigua and Barbuda and the Netherlands Antilles." Note: Brazil is not in Seriously Fish's list; the encyclopedia origin line ("Venezuela, Trinidad, Guyana, Brazil") follows FishBase. (G22)
- USGS (verbatim): "Southern Lesser Antilles and and northern South America from western Venezuela to Guyana". (G13)
- Verdict: encyclopedia origin and overview wording are supported.

1.4 Habitat
- FishBase (verbatim): "Adults inhabit warm springs and their effluents, weedy ditches and canals". "They are found in various habitats, ranging from highly turbid water in ponds, canals and ditches at low elevations to pristine mountain streams at high elevations". "Their salinity range is wide but requires fairly warm temperatures (23-24 °C) and quiet vegetated water for survival". (G21)
- Seriously Fish (verbatim): "An incredibly adaptable species that occurs in almost every imaginable biotope, from high-altitude streams to turbid swamps and ditches. Some populations also exist in brackish conditions." (G22)
- Encyclopedia habitat ("Freshwater streams, ditches, and slow-moving rivers") is supported in substance.

1.5 Conservation status
- FishBase (verbatim): "Least Concern (LC) ; Date assessed: 18 May 2020" (IUCN version 2025-2). The IUCN page itself was not opened; say "via FishBase". Also "Threat to humans: Potential pest". (G21)

1.6 Introductions, mosquito control, impact
- FishBase (verbatim): "Widely introduced and established elsewhere, mainly for mosquito control, but had rare to non-existing effects on mosquitoes, and negative to perhaps neutral effects on native fishes (Ref. 12217)." "Several countries report adverse ecological impact after introduction." (G21)
- USGS (verbatim): "Most introductions probably are fish farm or aquarium releases ... Some California introductions were made intentionally for mosquito control". "The guppy is considered a threat to native cyprinids and killifishes". Also "This species is widely studied as a model species ecology and evolutionary biology". (G13)
- Seriously Fish (verbatim): "has been introduced into many third world countries as a means of malaria control, as these fish feed voraciously on mosquito larvae." (G22)
- Encyclopedia overview says guppies "have also been introduced globally as a natural mosquito-control agent, since they readily eat mosquito larvae". True as history, but the strongest sources add that the effect on mosquitoes was rare to non-existing and the introductions harmed natives. See Contradictions, item 21.

## 2. Size

- Seriously Fish: "Max size 60 mm SL 2.4 in SL"; females "larger, plumper and generally exhibit dull colouration". (G22)
- FishBase: "Max length: 5.0 cm SL male/unsexed; 6.0 cm SL (female); common length: 2.8 cm TL male/unsexed". "Males are about half the size of females". (G21)
- USGS: "Males to 2.5 cm SL; females to 6 cm SL." (G13)
- Verdict: females to about 2.4 inches (6 cm) is supported by all three. The handling guide's "males ... around an inch and a half" (3.8 cm) sits between USGS (1 inch) and FishBase's 5 cm maximum; the encyclopedia's "1-2.4 inches (2.5-6 cm)" matches USGS exactly.

## 3. Lifespan

- No lifespan in FishBase, Seriously Fish or USGS. FishBase gives generation time "0.6 (0.2 - 0.7) years". (G21)
- Evans 2012 (lab, fish from a stock population): "On average, females lived for 388.1 days from the start of the experiment (range: 185-821)"; last death "27 months after the commencement of the experiment". The paper adds "we presently lack information about natural lifespan in the focal population". The start age of the females is not in the extract, so this is not a captive lifespan. (G1)
- Reznick et al. 2006: lifespans reported only in relative terms; about 60% of lab females "had post-reproductive lifespans exceeding their 90th percentile"; post-reproductive time was 6.4% of total lifespan at the median and 13.6% on average. (G3)
- A search extract of a master's thesis (Old Dominion University, citing Haskins and Reznick) gives "one to four years"; weak tier, not opened.
- Verdict: the cost guide's "2 to 3 years on average, up to 4 or 5" and the encyclopedia's wild "2-3 years" have no support in any opened source. "Female fertility drops off after around age 2" is also unsupported: no age was found. The honest range from sources is "no firm figure; lab females in one study averaged about 13 months from experiment start".

## 4. Tank, water, equipment

4.1 Tank size and footprint
- Seriously Fish (verbatim): "Aquarium base 45 × 30 cm 18 × 12 in", "Volume ~41 litres ~11 US gal 45 ∗ 30 ∗ 30 cm". (G22)
- FishBase (verbatim): "Aquarium keeping: in groups of 5 or more individuals; minimum aquarium size 60 cm". (G21)
- Practical Fishkeeping (Rundle): his breeding tanks are "46 x 23 x 30cm/18 x 9 x 12" and stock and grow-on tanks 60 x 30 x 30 cm. (G23)
- CONTRADICTION: the tank guide, hub and FAQ say "5 gallons is the bare minimum for a trio". Seriously Fish sets about 41 L / 11 US gallons for the species and FishBase sets a minimum 60 cm tank. "10 gallons ... for a group of 5 or 6" is close to Seriously Fish (a standard 10 gallon is 20 x 10 x 12 in by general knowledge, not from a source here; verify the owner's dimensions before rewriting). "20 gallons holds up better long term" is consistent with 60 cm. The aquarium-stocking-and-tankmates-guide.mdx table repeats "5 gallons for a trio" (outside scope, same fix).

4.2 Temperature
- Seriously Fish: "Temp 17 to 28 °C, 63 to 82 °F". (G22)
- FishBase: "Tropical; 18°C - 28°C" (64 to 82°F). Breeding and egg or fry temperatures not given. (G21)
- Kent and Ojanguren: stock fish held at "20°C to 26°C"; newborn guppies tested at 17, 20, 23, 26, 29 and 32°C for at least 18 hours with "no mortality as a result of temperature manipulations". (G11)
- Verdict: "comfortable from 72 to 82°F" sits inside the references (the low end is narrower than 63 to 64°F). The 76 to 78°F "target" has no source (Practical Fishkeeping gestation figure was measured at 75 to 81°F). 82°F is the ceiling in both Seriously Fish and FishBase.
- "Sustained temperatures well below about 72°F for more than two days is treated as a real risk" (feeding guide): unsupported; the references' floor is 63 to 64°F. "Velvet ... from poor water conditions or low temperature": unsupported.
- Heater "3 to 5 watts per gallon, 25 to 50 watts on a 10-gallon": not found in a general source. Seriously Fish's auto-calculation says "roughly 50 W" for its ~41 L tank holding 17 to 28°C in a 20°C room, which is about 4.5 W per gallon (that block carries affiliate links, so cite it as a worked example only).

4.3 pH and hardness
- Seriously Fish: "pH 7.0 to 8.5", "Hardness 8 to 30 dGH". "This is a hard water fish and while it may manage in soft and/or acidic conditions, long-term maintenance should be in moderately hard or harder water." (G22)
- FishBase: "pH range: 7.0 - 8.0; dH range: 9 - 19". (G21)
- Practical Fishkeeping: "General quoted parameters are pH 7 to 8." (G23)
- Verdict: "pH 7.0 or above and moderately hard" is supported. The hub's filter-chart range `ph: [7.0, 9.0]` (fish.js line 41) tops out at 9.0; the sources top out at 8.0 to 8.5.

4.4 Filtration and flow
- Seriously Fish: "Strong currents should be avoided." "a planted tank with floating vegetation is appreciated." (G22) Supports gentle flow. Sponge filter versus hang-on-back and fry being pulled into current: no source (reasonable, unsourced).

4.5 Lighting, substrate, lid
- "8 to 10 hour cycle", "darker substrate makes guppy coloring stand out", "avoid coarse gravel that can damage fins", "use a lid, guppies are capable jumpers": no source found for any (Seriously Fish and FishBase are silent).

4.6 Cycling and quarantine
- Practical Fishkeeping (no named author): "Most aquariums can often take four to six weeks to cycle fully." (G24) Supports "four to six weeks" but the page has no byline or date.
- UF/IFAS (verbatim): "At the warm water temperatures required for many aquarium fish, active disease will often become evident 1 to 3 weeks after shipping. For this reason, a minimum 30-day quarantine period is recommended for new fish." (page prints an en dash in "1-3") (G14) Supports the "at least 30 days" line in the health guide.
- "Fishless cycle ... less with a bottled bacteria product": no source opened.

4.7 Water chemistry minerals
- "Wonder shell or similar mineral supplement can buffer soft tap water": no source (consistent with the hard-water requirement, but the method is unsourced).

## 5. Group size, sex ratio, temperament, tankmates

- FishBase: "in groups of 5 or more individuals". (G21) Seriously Fish: "Social needs: to be in a group". (G22)
- Seriously Fish (verbatim): "It is advisable to keep several females to each male as males can be quite vigorous in their constant pursuit of females." (G22) Supports the direction; no source gives "two to three" or "six or more".
- Killen et al. 2016: harassment manipulated with 1:1 (high-male) and 1:5.7 (low-male) ratios "consistent with those found in the wild". (G7)
- Males-only tank: logical corollary, but no opened source tests it. Seriously Fish: "if you do not want a tank full of fry buy fish of only one sex." (G22)
- Temperament and tankmates, Seriously Fish (verbatim): "A very peaceful fish. Do not keep with fin-nipping species such as tiger barbs, serpae tetras etc. Does well in a quiet community tank with other livebearers, rasboras, corydoras, small loricariids and tetras." (G22) The tank guide's tankmate sentence follows this closely. The betta and goldfish warnings are not in any opened source.

## 6. Breeding, brood size, sperm storage, fry care

6.1 Gestation and interbrood interval
- FishBase (verbatim): "Females can store sperms for later fertilization and may produce young every four weeks." "After a gestation period of four to six weeks females give birth to 20-40 live young." (G21)
- Seriously Fish (verbatim): "Between 5-100 young may be produced from a single female, and gestation takes between 4-6 weeks." (G22)
- Practical Fishkeeping (Rundle): "The Guppy gestation period ranges from 21-30 days", given "at 24-27ºC/75-81°F". (G23)
- Reznick et al. 2006: "Fish usually reproduced at regular intervals of 22-35 days." (G3)
- Peradeniya abstract (L1, flagged): wild-strain gestation averaged 21 days, neon-strain 30 days.
- Verdict: the handling guide's "A brood arrives every 21 to 30 days ... at 75 to 81°F" is supported as a range by Rundle (gestation) and Reznick (interbrood, 22 to 35); FishBase and Seriously Fish give a longer 4 to 6 weeks. The earlier flag in LIVEBEARER_GROUP_RESEARCH.md (21 days below every figure) is withdrawn: Rundle and L1 give 21 days. Safest wording: "about 3 to 6 weeks depending on temperature and strain".

6.2 Brood size
- FishBase: "20-40 live young". Seriously Fish: "5-100 young". Evans 2012 (lab): "mean brood size ± SE: LM = 13.61±0.53; HM = 12.40±0.36". Rundle: his own brood yielded "some 50 young fish". (G21, G22, G1, G23)
- Verdict: the handling guide's "about 25 on average ... up to about 50" and the hub's "20 to 50+ fry" fit FishBase and Seriously Fish. The overview's "12 to 14 fry" in one study is exact for Evans; "well-fed females in warm water average about 25 and can reach 50" has no source of its own (Rundle's 50 is one brood).

6.3 Lifetime offspring and receptivity (overview lines 79)
- Evans 2012: "mean ± SE total number of offspring produced: LM = 99.81±13.70; HM = 98.02±9.32". Guppies are receptive "ca. 1-2 days after producing a brood" (Introduction); Methods give "receptive (2-3 days post-partum)". (G1) The overview's "around 100 offspring" and "receptive again within a day or two" are supported (these are lab figures from one experiment, so say "in one lab study").

6.4 Sperm storage
- Gasparini et al. 2018: "females are able to store sperm arising from a single copulation for up to eight successive reproductive cycles", each cycle "approx. one month". In their own insemination work females produced "up to five consecutive broods". "In natural populations stored sperm have been shown to be fertile well beyond the male's lifetime." (G2)
- Seriously Fish (verbatim): "the females are still able to produce young for 6 months or more if no males are present." (G22)
- Verdict: "up to 8 broods" is supported. "5 to 10 months" is not: the published ceiling is about 8 monthly cycles, Seriously Fish says "6 months or more", and no opened source gives 10 months. Suggested wording: "up to about 8 monthly broods from one mating". Affected text appears in cost FAQ and body, handling seoDescription, FAQ and FunFact, and the overview FAQ.

6.5 Sexing, gravid spot, maturity
- Seriously Fish: male "possesses a gonpodium, which is a modification of the anal fin ... and is stick-like in appearance"; "A pregnant female can be identified by the gravid spot (darkened area) behind her anal fin just behind the belly." (G22) FishBase: "Pregnant females are recognizable by black triangle between anal and pelvic fins." (G21) Supported.
- Gonopodium "about 10mm long": no source (guide FAQ and body). Remove the figure or find a measurement.
- FishBase: "Males mature at 2 months and females at 3 months of age". (G21) The handling guide says "Breeders can sort a brood by sex at about three weeks old". The Peradeniya abstract (L1) gives male maturity by gonopodium development at "21-35 days" (wild strain) and 28 to 50 days (neon strain). Supports "visible by about 3 to 7 weeks, strain dependent", not a hard 3 weeks.
- Seriously Fish: "the survival of the fry" best in "a densley planted species tank with lots of floating vegetation". "Adult fish will eat the young so it is better to remove them after the fry are born". (G22) Merck pet: "Fry should be separated from adults because the adults (including the parents) tend to eat them." (G18) FishBase: "parents may even prey on their young." Supported. Merck also describes a mesh "nursery" box. That the breeding trap "stresses a heavily pregnant female" and that moving a pregnant female is "a common and avoidable cause of stress-induced loss": no source.

## 7. Diet and feeding

7.1 Wild diet
- FishBase: "They feed on zooplankton, small insects and detritus." Trophic level "3.2 ±0.40 se; based on food items." (G21) Seriously Fish: "Wild fish are primarily insectivorous, but today's tank-bred fish ... will accept most foods offered." (G22)
- Encyclopedia wildDiet ("Mosquito larvae, algae, small invertebrates, and detritus"): zooplankton, small insects (which include mosquito larvae), detritus and invertebrates are supported. Algae is supported only by the Zandona search extract (not opened).
- Feeding guide "Guppies are omnivores": defensible (trophic level 3.2), but Seriously Fish calls the wild fish "primarily insectivorous".

7.2 Frequency, portion, fry
- Merck (professional): "Most aquarium fish should be fed at least daily"; "adult fish should be fed 3% of their body weight daily for maintenance"; fry and fingerlings "up to 5% of their body weight daily"; "Flaked feeds may be too large for a small-mouthed fish to easily ingest ... can be crushed"; "Feeding a wide variety of feeds is one way to try to meet the nutritional requirements." (G19)
- Norazmi-Lokman et al. 2020: guppies 30 days old fed 1, 2, 3 or 4 meals a day for 60 days; "Survival: 100% in all four treatments"; four meals gave the highest weight growth, one meal the lowest feed conversion ratio. The page names no optimal frequency. (G10)
- Sahin et al. (search extract only): Artemia nauplii three times a day to newborn guppies; Artemia for the first 2 weeks beneficial.
- Verdict: "once to three times a day" for adults is not contradicted (Merck: at least daily). "Feed only what clears in about 1 to 2 minutes" (hub, cost, seoDescription): no source. "Every 2 to 3 hours in the earliest days" and "3 to 5 times a day for fry", "juveniles 3 to 4 meals": no opened source; G10 shows 1 to 4 meals all gave 100% survival, so a hard juvenile number cannot be sourced.
- Merck: "Fry should be separated from adults" (G18) and "Most livebearers have fewer and larger fry than egg layers" (G18).

7.3 Specific foods and rules with no source
- "Teeth set toward the back" (feeding guide: "guppies have small mouths with teeth set toward the back"): no source.
- Goldfish food has a "different, lower-protein profile": no source.
- Boiled egg yolk, scooping out the seedy center of tomato or cucumber, tubifex "(commercial source)": no source.
- Overfeeding causes "constipation, swim bladder problems": Merck pages opened do not mention overfeeding or swim bladder.
- "A vet-affiliated source says contact a vet when decreased appetite runs past one day": the source is not named in the guide; Merck says nothing numeric. Treat as unsupported until the exact page is cited.
- Pregnant females eating less before birth: no source.

## 8. Health

8.1 Ich (white spot)
- UF/IFAS (verbatim): "These lesions look like small white dots, blisters, or salt grains on the skin or fins of the fish." Prior to spots "fish may have shown signs of irritation, flashing, increased mucus, weakness, loss of appetite, and decreased activity." "outbreaks ... often appear when water temperatures are changing more rapidly." The disease "spreads rapidly from one fish to another" by a direct life cycle; "Preventing introduction of this parasite is one of the most important reasons that all incoming fish should be quarantined." At "75 to 79°F, the life cycle is completed in about 3 to 6 days ... chemical treatments should be applied daily, and a minimum of 3 to 5 treatments are required." "use of 4-5 g/L (= 4-5 ppt) salt (sodium chloride) in a prolonged bath for 7 to 10 days is another effective treatment in smaller systems, provided the fish species can handle the increased salt concentration." (G14)
- Merck professional (fetch tool): "treat infected fish daily" above 26°C, "three to seven treatments"; a freshwater salinity option of 5 g/L for one week at 24°C or higher "if the species tolerates it". (G15) Merck pet: "Treatment is with either copper sulfate or formalin"; applied "at specific intervals based on the water temperature". (G17)
- VCA (Gregory Rich, DVM): "Most strains of ich cannot survive in water temperatures above 86ºF." "Not all fish can stand the heat, though." Salt: "Add about a tablespoon of salt per 5 gallons of water." (G25)
- Guppy heat tolerance, lab: newborn guppies tested at 32°C (89.6°F) for 18 hours with no deaths (G11); Chung 2001 (search extract) CTM 38.95 to 40.61°C. But Seriously Fish and FishBase cap husbandry at 28°C (82°F). No source tests ich heat treatment on guppies.
- Verdict: "raise to around 82°F alongside a commercial ich medication" is within the species range and consistent with Merck and UF/IFAS (daily chemical treatment at warm temperatures). It is not contradicted. "Caused by stress" is a framing problem: ich is a parasite introduced with fish or equipment; stress and temperature swings favor outbreaks (UF/IFAS), but the guide should not say stress causes it. The guppy salt line in the FAQ ("a salt course") and the FunFact differ from both salt doses in the sources (UF/IFAS 4 to 5 ppt for 7 to 10 days, VCA a tablespoon per 5 gallons, which is much weaker by the arithmetic in the neon notes).

8.2 Salt tolerance of guppies
- FishBase: "Freshwater; brackish"; "Their salinity range is wide". (G21) Seriously Fish: "Some populations also exist in brackish conditions." (G22)
- The health guide's FunFact ("in one study they survived being moved straight into half-strength seawater"), cited to Chervinski 1984: only a transcription of the abstract was seen (search extract), and the journal page returned 403. Re-check before keeping. "Better than most freshwater fish" is a comparison no opened source makes.
- Hub route line for the health guide says "plus why heavy salting is a bad idea with this species" but the guide has no such section and its FunFact says the opposite. Internal contradiction; no source supports "heavy salting is bad" either.

8.3 Velvet
- Merck professional: "small golden spots on the skin", "Copper sulfate and chloroquine are used for nonfood fish"; no salt or temperature protocol for velvet. (G15) Merck pet: "Your veterinarian may recommend chloroquine"; "A recheck of the fish in 7 to 10 days may be needed." (G17)
- Verdict: "copper-based medication" is supported by G15. "From poor water conditions or low temperature", "raise the temperature slightly" and "dim the lights" are unsupported by any opened source (hobby and retailer pages only).

8.4 Fin and tail rot
- No opened Merck page names fin or tail rot (the pet page does not mention it; the bacterial page links vibriosis to fin and tail damage). Unsupported by a tiered source.

8.5 Dropsy
- Merck pet: Aeromonas infection signs include "fluid accumulation in the abdomen ("dropsy" and "pinecone disease")"; "Many bacterial infections can be treated with antibiotics, but laboratory testing is necessary to determine which antibiotics will work". Renal dropsy (Sphaerospora auratus): "There is no practical treatment." (G17) Merck professional: ascites is a nonspecific sign of mycobacteriosis, for which "There are no effective treatments that eliminate mycobacteria in fish." (G16)
- Verdict: cause "systemic bacterial infection" is a partial match (Aeromonas); "advanced internal or organ failure" and "hardest condition on this list to treat" have no source. Dropsy is a sign with several causes, which the guide could say.

8.6 Camallanus
- Merck professional: "Cyclops and Daphnia spp are common intermediate hosts for Camallanus spp." Signs: blood-red worms protruding from the anus. Treatment: "fenbendazole or levamisole". The page names guppies in this context: Camallanus is pathogenic for guppies and other aquarium fish. (G15)
- Levsen and Berland 2002: guppies were definitive hosts and the copepod Macrocyclops albidus the intermediate host. (G8)
- Levsen and Jakobsen 2002: "the parasite can infect the fish host both indirectly via copepods, and directly"; it "may reproduce and persist in copepod-free aquaria for several months"; the indirect route gave "significantly higher fitness". (G8)
- Aquarium Co-Op (L2, flagged): worms "¼ to ½ inch (0.6 to 1.3 cm)"; "Wait two weeks after the first treatment, then dose again"; 25% water change about 24 hours after dosing; "levamisole does not affect unhatched eggs"; "fish can be infected by eating feces containing larvae".
- Verdict: the treatment shape (levamisole, repeat dose about two weeks later, treat all fish, 25% change) matches the retailer page and the Merck drug choice. The guide's infection route (crustaceans only) is incomplete: direct infection is documented. "It shows up most in small livebearers like guppies" and "a few worms ... enough to do serious harm in a fish this size": no opened source (Merck says only that guppies are affected). "A 25% water change a day later" and the second dose interval rest on the retailer page alone.

8.7 Swim bladder disorder
- "Usually from overfeeding or constipation ... short fast": no opened source (Merck pages do not cover it).

8.8 Water quality as root cause
- Merck pet: disorders "Are the result of stress, poor water quality, overcrowding, and failure to quarantine"; it does not single out water quality. (G17) The headline "Water quality is the root of almost everything" is stronger than the page; the multi-cause wording ("stress, poor water quality, overcrowding, failure to quarantine") is exact.

8.9 Inbreeding and "fancier strains are less resilient"
- Seriously Fish (verbatim): "Many commercially bred guppies are weakened by inbreeding and over-production" and "many commercially bred guppies are not very hardy due to inbreeding and over-production and are prone to disease and premature death." (G22)
- van Oosterhout et al. 2007: "The body size and fertility of guppies was significantly reduced due to inbreeding depression"; captive-bred guppies "extremely susceptible to gyrodactylid parasites (58% survival rate)", wild fish about 96%. These are Trinidadian captive lines, not ornamental fancy strains, so say so. (G9)
- Verdict: cost-guide FunFact claim "fancier, more expensive strains tend to be somewhat less resilient than plain wild-type guppies" is supported at the "commercially bred guppies" level by Seriously Fish; that the expensive strains are worse than cheap ones is not tested by any opened source.

8.10 Euthanasia
- TAMU (restating AVMA 2020, verbatim): "Clove oil and its derivatives are not FDA approved for use as an agent of euthanasia. These are described as extra-label euthanasia agents in fish in the AVMA Guidelines for the Euthanasia of Animals, 2020 Edition." "Fish should be left in the anesthetic solution for a minimum of 10 minutes after cessation of opercular movement." "Rapid freezing of conscious fish is not considered humane." Rapid chilling in ice slurry is described as suitable for small tropical fish "3.8 cm in length ... or smaller". (G20)
- Verdict: the guide's "clove oil overdose" and "putting it in the freezer is not [humane]" match. Add "extra-label" and the 10 minute rule. Flushing a live fish is not addressed by TAMU. Adult female guppies (to 6 cm) exceed the 3.8 cm ice-slurry size limit; adult males (USGS: to 2.5 cm SL) would fit it.

8.11 Vet access
- "Dedicated aquatic vets exist but are uncommon": no source; harmless, but unsupported.

## 9. Sexual harassment and welfare (enrichment guide)

- Gasparini et al. 2012, abstract (fetch tool): high-harassment females produced "(1) daughters with smaller bodies and (2) sons with shorter gonopodia", and "Female lifetime fecundity did not differ between the groups"; the sons were less attractive and less successful in coercive matings; the authors caution that treatment sex ratio differences may have influenced results. Supports the enrichment guide's cross-generation paragraph and FAQ. (G4)
- Plath et al. 2007: nine species including the guppy (listed as a courting species), and the platy X. variatus and the molly P. latipinna: "focal females spent significantly less time feeding in the presence of a male than when together with another female", all species except the cave form of P. mexicana. (G5) Supports "reduced foraging" for the guppy directly.
- Darden and Croft 2008: harassment "drives females into habitats that they otherwise do not prefer to occupy" (wild Trinidadian guppies, deep water). Supports "females break line of sight, seek refuge" in spirit. (G6)
- Killen et al. 2016: females under higher harassment used less oxygen to swim at a given speed after 5 months; this is an efficiency effect, not a direct "energy expenditure" cost. (G7)
- The guide's Poecilia mexicana lines ("attempt to mate almost constantly while females are mostly non-responsive", "more vigilant in the presence of males", "hampered feeding opportunities") match search extracts of Padur, Wedekind, Oeztuerk (2009) and Koehler et al. (2011); neither is in the guide's Sources block. Add Plath 2007 (opened) as the cited source for feeding costs.
- "Dense planting gives females somewhere to break line of sight": Seriously Fish supports planted tanks and floating vegetation for fry survival; no opened source tests cover reducing harassment, so state it as the keeper's inference.
- "Guppy is one of the most-studied fish in evolutionary biology": USGS ("widely studied as a model species ecology and evolutionary biology") and FishBase ("Used in genetics research") support it; "short generations" matches FishBase generation time 0.6 years.
- The enrichment FAQ "Female fertility ... Lifetime fecundity did not differ" is consistent with G4.

## 10. Encyclopedia history paragraph: Endler's transplant

- Gordon et al. 2015: Endler moved guppies "from a stretch of the Aripo River rich in predators, to an upstream reach"; "When he resampled the streams 2 years later" he "found a significant increase in carotenoid, structural and melanistic coloration in the transplanted guppy populations". The article does not give the year of the move; its reference list dates Endler's paper to 1980. (G12)
- A search extract of a teaching case gives 1976 and a waterfall barrier; not opened. The encyclopedia says "In the late 1970s", which fits 1976 only loosely (mid-1970s). Verify the year in Endler 1980 (Evolution 34: 76 to 91) before keeping "late 1970s".

## 11. Price observations (retail listings, NOT sources, do not cite)

Observed 2026-11-01 on US retailer pages.
- Aquatic Arts, collection page https://aquaticarts.com/collections/livebearers : named fancy strains (tank bred or "Bred by Aquatic Arts") "from $11.99" to "from $16.99" each; "Assorted Fancy Guppy Culls, Males and Females" "from $9.99". The unit behind the "from" price is not stated on the collection page.
- Aquatic Arts product page, Koi Tuxedo Guppy, https://aquaticarts.com/products/koi-tuxedo-guppy : 1 male $14.99; 1 female $14.99; 1 male/female pair $27.99 (sold out), locally bred pair $24.99 (available); Dumbo ear pair $22.99; three pairs $79.99. Live fish ship by UPS 1 Day Air only, shipping extra.
- Not obtained: a plain "common" or wild-type guppy price. Petco returned 403, and the Aquahuna, Superior Shrimp and LiveAquaria guppy pages returned 404. A search extract of one eBay seller listed "6 Guppies 3 Male & 3 Female Adult Assorted Red Color" at $15.00; not opened.
- Observed fancy range online: about $12 to $17 per fish, $23 to $28 per pair from a specialty breeder, plus overnight shipping. The cost guide's "$10 to $20 per pair for fancy varieties" is at or below the low end of what was observed; local store prices were not observed.
- The cost guide says "Standard, wild-type guppies run $2 to $5". Seriously Fish: "the wild form is seldom seen for sale"; most trade fish are bred varieties. The $2 to $5 figure could not be checked against any opened listing; the wording "wild-type" is the problem, not necessarily the price.

---

## Contradictions and unsupported claims

Numbered for the Replacement map. File, quoted text, verdict. "C" = contradicted by a source I opened, "U" = no support found, "P" = partly supported or needs a rewording.

1. C. guppy-tank-setup-guide.mdx (FAQ and body), hub `firstWeek` "Tank size", guppy-enrichment-guide ("10 gallon ... starting point" is fine): "5 gallons works as a bare minimum for a small trio". Seriously Fish: base 45 x 30 cm, "~41 litres ~11 US gal". FishBase: "minimum aquarium size 60 cm". Same figure in aquarium-stocking-and-tankmates-guide.mdx ("5 gallons for a trio").
2. C. guppy-cost-guide.mdx (FAQ line 53 and body line 97), guppy-handling-guide.mdx (seoDescription line 18, FAQ line 28, FunFact line 57), sulcata-hedgehog-lovebird-guppy-overview.mdx (FAQ line 44): "store sperm for 5 to 10 months ... up to around 8 separate broods". Gasparini 2018: "up to eight successive reproductive cycles" of about one month each; Seriously Fish "6 months or more". The 10 month ceiling has no source.
3. C. src/lib/data/guides/fish.js line 41 (livebearer hub): `ph: [7.0, 9.0]`. Seriously Fish pH 7.0 to 8.5, FishBase 7.0 to 8.0.
4. C. fish.js guppy hub `routes` for guppy-health-issues-guide: "plus why heavy salting is a bad idea with this species". The guide has no such section; its FunFact says guppies "cope with salt far better than most freshwater fish". Pick one, and source it (UF/IFAS 4 to 5 ppt only "provided the fish species can handle" it).
5. C (price observation). guppy-cost-guide.mdx (FAQ line 45, body line 63): "$10 to $20 per pair for fancy varieties". One specialty breeder: $22.99 to $27.99 per pair, $11.99 to $16.99 per fish.
6. P. guppy-cost-guide.mdx line 63 and FAQ: "Standard, wild-type guppies run $2 to $5 each". Seriously Fish: "The wild form is seldom seen for sale." Price unverified; "wild-type" mislabels the common trade fish.
7. U. guppy-cost-guide.mdx lines 51 and 93, hub `firstWeek` "Lifespan", encyclopedia `wildLifespan: "2-3 years"`: "On average 2 to 3 years, and 4 or 5 with excellent care." No lifespan in FishBase, Seriously Fish or USGS; Evans 2012 lab females averaged 388 days from experiment start.
8. U. guppy-cost-guide.mdx lines 51 and 93: "Female fertility falls off after about age 2". No age found. Reznick 2006: post-reproductive span averaged 13.6% of lifespan.
9. U. guppy-handling-guide.mdx lines 32 and 48: "a narrow rod about 10mm long". No source for the length.
10. P. guppy-handling-guide.mdx lines 50 and 74: "Breeders can sort a brood by sex at about three weeks old". FishBase: males mature at 2 months; the Peradeniya abstract gives gonopodium maturity at 21 to 35 days (wild strain) and 28 to 50 days (neon strain). Say "3 to 7 weeks depending on strain and temperature".
11. P. guppy-handling-guide.mdx line 44 and hub: males "around an inch and a half". USGS: males to 2.5 cm (1 inch) SL; FishBase male maximum 5.0 cm SL. Use "1 to 2 inches".
12. P. guppy-handling-guide.mdx line 54 and hub: "A brood arrives every 21 to 30 days, about 25 on average at 75 to 81°F, up to about 50". Rundle: gestation "21-30 days" at "75-81°F"; Reznick: interbrood 22 to 35 days; FishBase and Seriously Fish: 4 to 6 weeks and 20 to 40 or 5 to 100 young. The "about 25 average" has no source of its own.
13. U. guppy-handling-guide.mdx line 66: breeding traps stress a pregnant female; guppy-enrichment-guide.mdx line 111: "moving a heavily pregnant female ... a common and avoidable cause of stress-induced loss". No source.
14. U. guppy-handling-guide.mdx lines 44, 64, 74 and FAQ: "two or three females for every male"; guppy-enrichment-guide.mdx line 67: "Six or more females per male is a common recommendation". Seriously Fish says only "several females to each male". The two-to-three number has no source.
15. U. guppy-tank-setup-guide.mdx FAQ and line 182: heater "3 to 5 watts per gallon, so 25 to 50 watts on a 10-gallon". Only Seriously Fish's worked example (about 50 W for 41 L) is nearby.
16. U. guppy-tank-setup-guide.mdx line 200: "8 to 10 hour daily cycle". guppy-tank-setup-guide.mdx line 196: "darker substrate colors tend to make guppy coloring stand out", "coarse gravel ... can damage delicate fins". Line 176: "use a lid, guppies are capable jumpers". None sourced.
17. U. guppy-feeding-guide.mdx (FAQ, lines 26, 44, 46, 71, hub): "only offer what's fully cleared in about 1 to 2 minutes"; fry "every 2 to 3 hours" and "3 to 5 times a day"; juveniles "3 to 4 meals a day"; adults "once and three times a day". Merck: "at least daily", 3% body weight adults, up to 5% for fry. Norazmi-Lokman: 1 to 4 meals a day gave 100% survival in 30-day-old juveniles.
18. U. guppy-feeding-guide.mdx line 52: "guppies have small mouths with teeth set toward the back". Line 50 and 58: goldfish food "has a different, lower-protein profile"; boiled egg yolk; tomato or cucumber jelly center. No source.
19. U. guppy-feeding-guide.mdx lines 58 and 62, guppy-health-issues-guide.mdx line 65: overfeeding "causes constipation, swim bladder problems"; "Swim bladder ... usually from overfeeding or constipation ... a short fast". No opened source mentions swim bladder.
20. U. guppy-feeding-guide.mdx lines 63 to 71: "A vet-affiliated source recommends contacting a vet if decreased appetite lasts more than one day"; "Sustained temperatures well below about 72°F for more than two days is treated as a real risk"; pregnant females stop eating. None sourced.
21. P. encyclopedia `overview` (src/lib/data/encyclopedia/fish.js): guppies "introduced globally as a natural mosquito-control agent, since they readily eat mosquito larvae". FishBase: "rare to non-existing effects on mosquitoes ... Several countries report adverse ecological impact"; USGS: most US introductions "are fish farm or aquarium releases"; the guppy "is considered a threat to native cyprinids and killifishes".
22. P. hub `funFact` and encyclopedia: "named after Robert John Lechmere Guppy, who submitted specimens ... to the British Museum in the 1860s". FishBase supports the namesake as a Trinidad naturalist, and Günther's 1866 name; the British Museum detail is secondary only. The fish was described by Peters in 1859, so "named after" refers to the common name.
23. P. encyclopedia `history`: "In the late 1970s John Endler moved guppies from a predator-heavy stretch of Trinidad's Aripo River to a site upstream that predators could not reach". Gordon 2015 supports river, upstream reach and color result but gives no year; a search extract says 1976. "That predators could not reach" is not in the page (a waterfall barrier appears only in a search extract).
24. U. encyclopedia `history`: "Lebistes reticulatus, assigned by Charles Tate Regan in 1913" and "Rosen and Bailey restored the original name in 1963". FishBase and Seriously Fish list Lebistes as De Filippi 1861 and give no Regan or Rosen and Bailey act. Not verified; AMNH PDF of Rosen and Bailey 1963 not opened.
25. P. guppy-health-issues-guide.mdx line 45 and FAQ: ich "Caused by stress, often from temperature swings or poor water quality". UF/IFAS: ich is a parasite with a direct life cycle spread by infected fish and equipment, favored by "decreases in fish immune function" and rapid temperature change; quarantine prevents introduction.
26. P. guppy-health-issues-guide.mdx lines 45 and 53 and seoDescription: "raising the tank temperature to around 82°F alongside a commercial ich medication". Supported as within range (Seriously Fish and FishBase cap at 82°F; Merck: treat daily above 26°C), but no source tests heat on guppy ich. Do not extend to 86°F without a source: VCA's 86°F is a general-strain statement and "Not all fish can stand the heat".
27. U. guppy-health-issues-guide.mdx line 53 and FAQ: velvet "From poor water conditions or low temperature ... raise the temperature slightly, and dim the tank lights". Merck lists copper sulfate and chloroquine, no temperature or light protocol.
28. U. guppy-health-issues-guide.mdx line 57: fin and tail rot "Improving water quality alongside an antibacterial treatment resolves most cases caught early". No opened source names fin rot.
29. P. guppy-health-issues-guide.mdx line 61: dropsy "advanced internal or organ failure ... hardest condition on this list to treat". Merck: dropsy is a sign of Aeromonas infection (antibiotics after lab testing) or other causes; renal dropsy has "no practical treatment".
30. P. guppy-health-issues-guide.mdx line 69: Camallanus "a healthy guppy that eats those crustaceans picks up the worm". Levsen and Jakobsen 2002: direct infection also occurs and the parasite persists in copepod-free tanks for months.
31. U. guppy-health-issues-guide.mdx line 69: "It shows up most in small livebearers like guppies, because a few worms that a larger fish could carry are enough to do serious harm in a fish this size". No opened source (Merck says only that Camallanus is pathogenic for guppies and other aquarium fish).
32. P. guppy-health-issues-guide.mdx line 71: "a 25% water change a day later ... second dose two weeks after the first". Only the Aquarium Co-Op page (retailer) opened; drug choice (levamisole or fenbendazole) is confirmed by Merck.
33. P. guppy-health-issues-guide.mdx line 48: "Guppies cope with salt far better than most freshwater fish: in one study they survived being moved straight into half-strength seawater". Chervinski 1984 abstract seen only as a transcription; FishBase supports "wide salinity range". Re-check the paper before the sentence stays.
34. P. guppy-health-issues-guide.mdx line 79 and headline: "Water Quality Is the Root of Almost Everything". Merck lists "stress, poor water quality, overcrowding, and failure to quarantine".
35. P. guppy-health-issues-guide.mdx line 83: "Flushing a live guppy or putting it in the freezer is not [humane]". TAMU: rapid freezing of conscious fish not humane; flushing not addressed. Clove oil is "extra-label"; minimum 10 minutes after gills stop.
36. P. guppy-cost-guide.mdx line 66 (FunFact): "the fancier, more expensive strains tend to be somewhat less resilient than plain wild-type guppies". Seriously Fish: commercially bred guppies "weakened by inbreeding and over-production"; van Oosterhout: captive-bred Trinidadian lines, not fancy strains. Price-tier comparison untested.
37. U. guppy-cost-guide.mdx lines 49 and 89: "Dedicated aquatic vets exist but are uncommon". No source.
38. P. guppy-enrichment-guide.mdx lines 53 to 55 and FAQ: the Poecilia mexicana lines come from papers not in the Sources block (Padur et al. 2009, Koehler et al. 2011, search extracts). Plath 2007 (guppy included) supports the feeding cost directly. "Energy expenditure": Killen 2016 shows an efficiency effect, not an energy cost per se.
39. U. guppy-enrichment-guide.mdx lines 75 to 79: dense planting lets females "break line of sight and stop being pursued". Plausible and consistent with Darden and Croft's refuge finding, but no study tested cover as a harassment reducer. Present as inference.
40. P. sulcata-hedgehog-lovebird-guppy-overview.mdx line 79: "well-fed females in warm water average about 25 and can reach 50" (no source); "12 to 14 fry" and "around 100 offspring" in one study (Evans 2012: 12.40 to 13.61 per brood, 98.02 to 99.81 total, lab) are supported; "receptive again within a day or two" supported (Evans: "ca. 1-2 days", methods 2-3 days).
41. U. guppy-tank-setup-guide.mdx FAQ and line 204: "A fishless cycle takes four to six weeks ... less with a bottled bacteria product". Four to six weeks is supported by Practical Fishkeeping (no byline); the bottled product claim is not.

Count: 41 items. Of these, items marked U (no source found): 7, 8, 9, 13, 14, 15, 16, 17, 18, 19, 20, 24, 27, 28, 31, 37, 39, 41 = 18 unsupported claims. Contradicted (C): 1, 2, 3, 4, 5 = 5. Partly supported or needs rewording (P): 6, 10, 11, 12, 21, 22, 23, 25, 26, 29, 30, 32, 33, 34, 35, 36, 38, 40 = 18.

Supported and needing no change (for completeness): guppy native range and Caribbean islands; conservation Least Concern via FishBase; livebearer biology (gonopodium, females larger and plainer, gravid spot); pH 7.0 or above and hard water; gentle flow; 72 to 82°F range; tankmate list and fin-nipper warning; adults eat fry; ich signs and 30 day quarantine; clove oil and freezing wording; cross-generational harassment findings; "one of the most-studied fish in evolutionary biology".

## Gaps

- Guppy lifespan (wild and captive): no authoritative figure found. A thesis extract says one to four years (not opened). Next step: Bryant and Reznick 2004 (American Naturalist), full text.
- Wild versus aquarium temperature for ich: no study of heat treatment on guppy ich found.
- Chervinski 1984 and Nakadate et al.: only abstracts or transcriptions seen. Chung 2001 CTM figures: search extract only.
- Gonopodium length in millimeters: not found (search pointed to a Dryad dataset and Ecology and Evolution doi 10.1002/ece3.7351 that was not opened).
- Name history (Regan 1913, Rosen and Bailey 1963, British Museum 1860s): Eschmeyer's Catalog of Fishes returned 403; the AMNH monograph PDF was not opened.
- Endler transplant year: Endler 1980 (Evolution 34: 76 to 91) not opened.
- Wild diet composition (algae): Zandona et al. 2015 returned 403.
- Sahin et al. Artemia feeding trial: search extract only; no peer-reviewed fry feeding schedule found.
- Cycling duration: no .edu or .gov source found; only Practical Fishkeeping (no byline).
- Common (non-fancy) guppy retail price: not observed; Petco, Aquahuna, Superior Shrimp and LiveAquaria pages unavailable.
- Velvet and fin rot treatment for guppies: nothing beyond Merck's drug names.
- Camallanus redose interval and the 25% water change: retailer page only.
- Whether PetMD, Hepper, FishLab and Aqua-Fish pages carry the claims attributed to them: not opened (they are the weak sources being replaced).

## Replacement map

Format: claim, current source, then the stronger source and the figure to use. Weak sources first (all HTTP 200 unless noted).

### guppy-cost-guide.mdx
Current Sources: The Aquarium Expert (price blog); Aqua-Fish (retailer-style care page, no named author).
- Price $2 to $5, $10 to $20 per pair, $25 and up: drop both as sources. Use section 11 as a labeled price observation, not a citation. Fix "wild-type" wording (Seriously Fish G22: "The wild form is seldom seen for sale"). Fancy pair figure: observed $22.99 to $27.99 at one breeder.
- Lifespan "2 to 3 years, 4 or 5": no source; remove the numbers or say no firm figure exists (Evans G1: lab females averaged 388 days from experiment start). Drop "fertility falls off after age 2".
- Sperm storage "5 to 10 months, up to 8 broods": Gasparini 2018 G2 ("up to eight successive reproductive cycles", each "approx. one month") and Seriously Fish G22 ("6 months or more"). Change "5 to 10 months" to "up to about 8 monthly broods".
- FunFact (fancy strains less resilient): Seriously Fish G22 ("weakened by inbreeding and over-production") and van Oosterhout G9 (captive lines, 58% versus 96% parasite survival); keep the claim at "commercially bred".

### guppy-tank-setup-guide.mdx
Current Sources: Seriously Fish (keep); PetMD; Aquarium Co-Op (retailer).
- Tank size: replace "5 gallons bare minimum for a trio" with Seriously Fish G22 (45 x 30 cm base, ~41 L / 11 US gal) and FishBase G21 (60 cm). Rundle G23 for 60 x 30 x 30 cm stock tanks.
- Temperature: Seriously Fish G22 (63 to 82°F), FishBase G21 (18 to 28°C). Keep 72 to 82°F as the guide's narrower range; drop "76 to 78 target" or label it a keeper preference.
- pH and hardness: Seriously Fish G22 (pH 7.0 to 8.5, 8 to 30 dGH), FishBase G21 (pH 7.0 to 8.0, dH 9 to 19).
- Gentle flow: Seriously Fish G22 ("Strong currents should be avoided").
- Cycling 4 to 6 weeks: Practical Fishkeeping G24 (note: no byline).
- Heater watts, lighting hours, substrate color, lid: unsourced; keep as experience or cut.
- Fry cover: Seriously Fish G22 (planted tank, floating vegetation).

### guppy-feeding-guide.mdx
Current Sources: PetMD; Aquarium Co-Op; FishLab; Hepper (articles.hepper.com returned 403 to a script, page not read).
- Wild diet and omnivory: FishBase G21 (zooplankton, small insects, detritus; trophic level 3.2) and Seriously Fish G22 ("primarily insectivorous").
- Daily feeding, ration, crush flakes, varied diet: Merck G19 ("at least daily", 3% body weight, fry up to 5%, crushed flakes, variety).
- Frequency evidence: Norazmi-Lokman G10 (1 to 4 meals, 100% survival, no optimum). Remove "every 2 to 3 hours" or flag as unsourced; Sahin (search extract) is the only Artemia schedule and is not opened.
- Cold water danger "below 72°F for two days", appetite rules, egg yolk, tomato centers, teeth, goldfish food protein: no source; cut or leave unsourced.
- Temperature range line: Seriously Fish G22 and FishBase G21 replace Hepper.

### guppy-handling-guide.mdx
Current Sources: Practical Fishkeeping homepage (non-specific link, two article titles); Merck breeding (keep, URL works); Aqua-Fish; Build Your Aquarium (page returned 403 to a script).
- Practical Fishkeeping: replace the homepage link with the exact article, Rundle G23 ("The Guppy: First loves never die"), which supports "21 to 30 days" gestation at 75 to 81°F and the 50-fry brood. The "How to breed livebearing fish" title was not found as a page.
- Fry eaten by parents; separating fry: Merck G18 (verbatim), FishBase G21, Seriously Fish G22.
- Sperm storage and "up to 8": Gasparini G2; change "5 to 10 months".
- Brood size: FishBase G21 (20 to 40), Seriously Fish G22 (5 to 100), Evans G1 (mean 12 to 14, lab).
- Interbrood interval: Reznick G3 (22 to 35 days).
- Sexing: Seriously Fish G22 (stick-like gonopodium, gravid spot) and FishBase G21 (black triangle). Drop "about 10mm". Maturity: FishBase "Males mature at 2 months and females at 3 months"; the "three weeks" line needs the strain caveat (L1, flagged).
- Sizes: USGS G13 (males to 2.5 cm SL, females to 6 cm) and Seriously Fish G22 (60 mm SL).
- Sex ratio: Seriously Fish G22 ("several females to each male"); Killen G7 for wild ratios; drop "two or three" or label it a keeper rule of thumb.
- Replace Aqua-Fish and Build Your Aquarium with the above.

### guppy-health-issues-guide.mdx
Current Sources: Merck Disorders and Diseases of Fish (keep, G17); PetMD; Aquarium Co-Op Camallanus (retailer); Chervinski 1984 (keep, re-check).
- Ich signs, daily treatment at warm temperature, quarantine: UF/IFAS G14 (white dots or "salt grains", flashing, 3 to 5 daily treatments at 75 to 79°F, 30-day quarantine, 4 to 5 ppt salt bath only if the species can handle it) and Merck G15 (daily above 26°C, 3 to 7 treatments). Keep VCA G25 only for "ich cannot survive above 86ºF" and "Not all fish can stand the heat". Reword "caused by stress" (item 25).
- Velvet: Merck G15 (copper sulfate and chloroquine); remove low-temperature and dimming claims.
- Dropsy: Merck G17 (sign of Aeromonas infection, antibiotics after lab testing) and Merck G16 (ascites with mycobacteriosis, no effective treatment).
- Camallanus: replace Aquarium Co-Op with Merck G15 (cyclops intermediate hosts, fenbendazole or levamisole) and Levsen and Jakobsen G8 (direct infection also occurs). Keep the dose-interval text only if the retailer page is named as the interval's source.
- Salt FunFact: Chervinski needs journal-page verification; FishBase G21 ("Freshwater; brackish"; wide salinity range) is the opened support.
- Euthanasia: TAMU G20 (extra-label clove oil, 10 minutes after opercular movement stops, freezing not humane).
- Quarantine at least 30 days: UF/IFAS G14.
- Replace PetMD with Merck G17.

### guppy-enrichment-guide.mdx
Current Sources: Gasparini 2012 PubMed (keep, G4; add DOI 10.1111/j.1558-5646.2011.01455.x); ResearchGate "Male harassment reduces short-term female fitness in guppies" (403 to a script; ResearchGate is not a primary host); Evans 2012 PMC (keep, G1; the paper is about mate number and age, not harassment, so cite it for "females lived on average 388 days from start" or drop it from the harassment claim); St Andrews PhD thesis (university, not peer-reviewed; keep only as background).
- Replace ResearchGate with Plath et al. 2007 G5 (guppy included; less feeding time with a male present).
- Add Darden and Croft 2008 G6 (refuge from harassment) and Killen 2016 G7 (wild sex ratios, 1:1 to 1:5.7).
- Sex ratio: Seriously Fish G22 ("several females to each male"); drop the "two to three" and "six or more" numbers or label them keeper rules.
- Cover and fry: Seriously Fish G22 (floating vegetation).
- FunFact (most-studied fish): USGS G13 and FishBase G21.

### Hub (src/lib/data/guides/fish.js, id "guppy" and the livebearer row)
- `ph: [7.0, 9.0]` to `[7.0, 8.5]` (Seriously Fish G22).
- First-week rows: tank size (item 1), sperm storage not present, lifespan row (item 7), feeding rows (item 17), sex ratio (item 14), brood size in funFact "20 to 50+" (FishBase 20 to 40, Seriously Fish 5 to 100).
- funFact: British Museum detail (item 22) and "several broods of 20 to 50+ fry" fine for FishBase/Seriously Fish.
- Health route line: remove "why heavy salting is a bad idea with this species" or add the section (item 4).

### Encyclopedia (src/lib/data/encyclopedia/fish.js, id "guppy")
- Overview mosquito-control sentence: FishBase G21 and USGS G13 (item 21).
- origin, habitat, adultSize: FishBase G21, Seriously Fish G22, USGS G13 (supported).
- wildLifespan "2-3 years": unsupported; use no figure.
- conservation "Least Concern (IUCN)": add "assessed 18 May 2020, via FishBase" (G21).
- history: Peters 1859, Günther 1866 (FishBase G21 synonym list, Seriously Fish G22); fix or verify Regan 1913 and Rosen and Bailey 1963 (item 24); Endler year (item 23, Gordon G12).

### sulcata-hedgehog-lovebird-guppy-overview.mdx (guppy lines only)
- FAQ sperm storage: Gasparini G2 (item 2).
- Arithmetic paragraph: Evans G1 supports 12 to 14 fry per brood, about 100 lifetime offspring (lab), receptive 1 to 2 days after a brood; "average about 25 and can reach 50" needs FishBase G21 (20 to 40) or Seriously Fish G22 (5 to 100). Existing source (Evans G1, PMC link) is already strong.

---

## Kept without a source (owner review), 2026-11-01

Added 2026-11-01 after the restore pass. The first correction pass cut these unsupported items; they are back, added next to the corrected wording (the corrected sentences are untouched). Each is UNSUPPORTED or only PARTLY supported by the pages in this file; the reason is "no opened page states it" unless a different reason is given. "Restored" means the old text went back as written. "Restored, figure aligned" means the old text went back with one figure or word changed to match the correction.

**guppy-cost-guide.mdx**
- "Standard guppies run $2 to $5 each." (body, price paragraph): restored, figure aligned. The old "wild-type" label is dropped because Seriously Fish says "The wild form is seldom seen for sale". The $2 to $5 figure matches the hub budget row but no common-guppy listing was observed (research section 11). (also elsewhere: yes)
- "Rare selectively-bred strains, Purple Moscow, 24k Gold, Dragon, and Koi patterns, can run $25 and up, occasionally reaching hundreds of dollars from specialty breeders." (body) and the FAQ version "Rare selectively-bred strains such as Purple Moscow, 24k Gold, Dragon, and Koi can run $25 and up, occasionally reaching hundreds from specialty breeders.": restored. The one specialty breeder seen listed $11.99 to $16.99 a fish and $22.99 to $27.99 a pair; nothing near "hundreds" was seen, and Koi now sits in the $12 to $17 observation, so the two lines overlap. [Review applied 2026-11-01: conflict fixed: Koi dropped from the rare list and "hundreds" to "the rarest lines priced well above that" (body and FAQ)] (also elsewhere: no)
- "The fancier, more expensive strains tend to be somewhat less resilient than plain guppies, so you're often paying a premium for looks, not hardiness." (FunFact): restored, figure aligned ("wild-type" dropped). Seriously Fish supports "commercially bred guppies" being weakened; no opened source compares expensive strains with cheap ones. [Review applied 2026-11-01: wording merged into the hardiness sentence] (also elsewhere: no)
- "Dedicated aquatic vets exist but are uncommon and rarely necessary for guppies specifically." (Vet Costs): restored. No source. (also elsewhere: yes)
- "On average 2 to 3 years, and 4 or 5 with excellent care." (Lifespan body and FAQ): restored. No lifespan in FishBase, Seriously Fish or USGS. The correction (lab females averaged about 13 months, counted from the start of the experiment, not birth) measures something else, so the figure was left as written, and it still matches the hub row. Owner: decide whether to keep both. [Review applied 2026-11-01: conflict fixed: "2 to 3 years, and 4 or 5 with excellent care" to "a well-kept aquarium fish may live longer" (body and FAQ); hub row in fish.js still says 2 to 3 years] (also elsewhere: yes)
- "Female fertility drops off after around age 2." (body) and "Female fertility falls off after about age 2, which matters if you are planning a breeding population instead of a display tank." (FAQ): restored. No age found for the drop in fertility (Reznick 2006 gives only relative post-reproductive time). [Review applied 2026-11-01: conflict fixed: "after around age 2" to "with age" (body and FAQ)] (also elsewhere: no)

**guppy-enrichment-guide.mdx**
- "A number of studies identify direct costs of sexual harassment including energy expenditure and reduced foraging ability." (body and FAQ): restored. Reduced foraging is supported by Plath 2007; "energy expenditure" is not (Killen 2016 found a swimming-efficiency effect, not an energy cost). (also elsewhere: yes)
- "In the closely related Poecilia mexicana, males attempt to mate almost constantly while females are largely non-responsive. Females flee, become more vigilant in the presence of males, and have hampered feeding opportunities as a result." (body) and the FAQ version: restored. Rests on search extracts of Padur et al. 2009 and Koehler et al. 2011, neither opened. (also elsewhere: yes)
- "Two to three females per male at minimum." (FAQ and body) and "Six or more females per male is a common recommendation and there is nothing wrong with it." (body): restored. Seriously Fish says only "several females to each male". [Review applied 2026-11-01: wording merged (FAQ and Sex Ratio paragraph)] (also elsewhere: yes)
- "Dense planting also gives females somewhere to break line of sight and rest. In a livebearer tank, cover is a social tool rather than decoration." (FAQ) and "That is what the cover is for here: it is the mechanism that lets a female get a rest." (body, lightly adapted to follow the corrected sentence): restored. No study tested cover as a harassment reducer; keeper's inference. [Review applied 2026-11-01: wording merged (FAQ folded into one sentence; body "That is what the cover is for here" reworded)] (also elsewhere: yes)
- "...and survive at a rate you can actually manage" (floating plants): restored. Seriously Fish supports fry survival in floating vegetation, not the rate. (also elsewhere: yes)
- "Fast, greedy surface feeders." (Feeding): restored. No source. (also elsewhere: no)
- "And take real care moving a heavily pregnant female, which is a common and avoidable cause of stress-induced loss." (What Not to Do, with its link): restored. No source. (also elsewhere: yes)

**guppy-feeding-guide.mdx**
- FAQ "Can I feed guppies goldfish food?" (whole FAQ): restored. "Lower-protein profile" has no source. (also elsewhere: yes)
- FAQ "How long can a guppy safely go without eating?" and the matching paragraph in When to Worry ("A vet-affiliated source recommends contacting a vet if decreased appetite lasts more than one day..."): restored. The vet-affiliated source is not named; Merck gives no number. (also elsewhere: no)
- "Adults land somewhere between once and three times a day. Only offer what's fully cleared in about 1 to 2 minutes, because guppies beg regardless of actual hunger." (FAQ), "Guppies will beg for food no matter how full they already are, which flips the usual feeding worry..." (intro), and "Sources give a real range rather than one number, once or twice a day, one to three times daily, or two to three times daily..., feed only what's fully cleared within about 1 to 2 minutes." (Adults bullet): restored. Merck says only "at least daily"; no source for the 1 to 2 minutes or for begging. [Review applied 2026-11-01: wording merged into the corrected opening sentence] (also elsewhere: yes)
- Fry bullet "Sources range from 3 to 5 times a day up to every 2 to 3 hours in the earliest days, when fry can only handle infusoria-sized food" and Juveniles bullet "Around 3 to 4 meals a day..." (both restored whole), and the FAQ sentences "Infusoria or liquid fry food suits the first few days. Move to newly hatched baby brine shrimp and microworms as they grow past about one to two weeks, and feed them far more often than adults, some sources say every 2 to 3 hours in the earliest days." (restored, figure aligned: the old clause "their mouths are too small for anything else" is left out because Merck says flaked feeds can be crushed for small-mouthed fish). Norazmi-Lokman shows 1 to 4 meals all gave 100% survival, so a hard juvenile number cannot be sourced. [Review applied 2026-11-01: Juveniles bullet: wording merged with the trial sentence (moved up from the Fry and juveniles bullet)] (also elsewhere: yes)
- "Guppies are omnivores." / "The base should not be goldfish food, which has a different, lower-protein profile." / "Guppies will also naturally graze on tank algae." / "Add vegetable matter too, blanched and cut small: spinach, zucchini, cucumber, peas, and lettuce." / "Rotate in tubifex worms and microworms, especially for fry." / "Small amounts of boiled egg yolk are an occasional protein treat some keepers use." (What Guppies Eat): restored, the goldfish line lightly recast to follow the corrected paragraph. Seriously Fish calls the wild fish "primarily insectivorous"; the rest has no source. [Review applied 2026-11-01: wording merged into the corrected What Guppies Eat paragraph (vegetables listed once)] (also elsewhere: yes)
- Paragraph "Thaw frozen food before feeding, never microwave it... guppies have small mouths with teeth set toward the back..." and the whole "Safe Treats and Foods to Avoid" section (Safe list; Avoid list with tomato and cucumber centers, spoiled food, "overfeeding... causes constipation, swim bladder problems"): restored. No source for the teeth, tubifex, egg yolk or the overfeeding claims. It now overlaps with the corrected "Leftovers and Foods to Skip" section. [Review applied 2026-11-01: wording merged: Safe Treats and Foods to Avoid folded into Leftovers and Foods to Skip (nothing dropped; Safe list items now live in What Guppies Eat)] (also elsewhere: yes)
- Why Guppies Stop Eating: item "Impending birth" restored whole, "An imbalanced male-to-female ratio is a trigger too, and roughly 1 male per 2 to 3 females reduces mating-chase stress" restored, and "Cold water slows metabolism directly... 76 to 78°F is cited as the steadiest ideal range. Sustained temperatures well below about 72°F for more than two days is treated as a real risk" added to the water-range item. FAQ gets "For a female close to giving birth, this is often completely normal..." and "cold water". Unsupported; the references' floor is 63 to 64°F. [Review applied 2026-11-01: wording merged: duplicate male-ratio trigger sentence folded into one] (also elsewhere: yes)

**guppy-handling-guide.mdx**
- "A ratio of roughly one male to two or three females reduces females getting harassed too heavily by mating attempts." (FAQ) and "In a mixed tank, two or three females for every male spreads the male's attention the same way." (body): restored. Seriously Fish: "several females". [Review applied 2026-11-01: wording merged (FAQ and body duplicates)] (also elsewhere: yes)
- "about 10mm long" (FAQ) and "The gonopodium is about 10mm long." (body): restored. No measurement found. (also elsewhere: no)
- "Males are around an inch and a half." (body): restored. Sits between USGS (1 inch) and FishBase (5 cm maximum), inside the corrected "1 to 2 inches". [Review applied 2026-11-01: wording merged into "around 1 to 2 inches and typically about an inch and a half"] (also elsewhere: yes)
- "Breeders can sort a brood by sex at about three weeks old." and "Splitting a brood by sex at three weeks is the usual plan.": restored. The Peradeniya abstract (flagged) gives 21 to 35 days for the wild strain, 28 to 50 for the neon strain; FishBase gives maturity at 2 months. (also elsewhere: no)
- "A brood arrives every 21 to 30 days, about 25 on average at 75 to 81°F, and a female can release up to about 50 young at a time.": restored. Rundle gives gestation of 21 to 30 days at 75 to 81°F and a brood of about 50; "about 25 on average" has no source. FishBase and Seriously Fish say 4 to 6 weeks, so it sits beside the corrected "3 to 6 weeks". [Review applied 2026-11-01: conflict fixed: "every 21 to 30 days, about 25 on average at 75 to 81F, up to about 50" to "nearer 21 to 30 days in water at 75 to 81F" inside the 3 to 6 weeks sentence] (also elsewhere: yes)
- "Many experienced keepers avoid the trap, because the confined box stresses a heavily pregnant female." (breeding trap): restored. No source. (also elsewhere: yes)

**guppy-tank-setup-guide.mdx**
- "Go long and rectangular rather than tall, and use a lid, guppies are capable jumpers." (FAQ and body): restored. No source. (also elsewhere: yes)
- "Aim for 76 to 78°F as a solid target" and "budget roughly 3 to 5 watts per gallon, so a 25 to 50 watt heater for a 10-gallon tank." (FAQ and body): restored. Only Seriously Fish's worked example (about 50 W for 41 L) is nearby. (also elsewhere: yes)
- "Guppies like good calcium and magnesium content, and if your tap water runs soft, a mineral supplement (a wonder shell or similar product) can help buffer it into a more suitable range." (FAQ and body): restored. No source for the product. [Review applied 2026-11-01: wording merged: "wonder shell" to "a mineral block or crushed coral" (FAQ and body)] (also elsewhere: yes)
- "Strong, powerful filtration built for larger or messier fish isn't necessary here and can actually stress guppies." (FAQ and body): restored. Seriously Fish only says strong currents should be avoided. [Review applied 2026-11-01: wording merged to match the FAQ phrasing] (also elsewhere: yes)
- "A fishless cycle can take less with a bottled bacteria product." (FAQ and body): restored. Practical Fishkeeping says four to six weeks; nothing on bottled bacteria. (also elsewhere: yes)
- "## Substrate" (fine gravel or sand, darker substrate, avoid coarse gravel) and "## Lighting" (basic LED, 8 to 10 hour cycle): both sections restored whole at their old spot. No source. (also elsewhere: yes)
- "Dense plants like Java fern or vallisneria give fry somewhere to hide from adult fish, meaningfully increasing survival rates." (FunFact): restored. Seriously Fish supports floating vegetation, not these plants or the size of the effect. [Review applied 2026-11-01: wording merged: plant names kept, repeated survival clause cut] (also elsewhere: yes)

**guppy-health-issues-guide.mdx**
- "Fish may also show rapid breathing and lethargy." (ich body and FAQ): restored. UF/IFAS lists other signs. [Review applied 2026-11-01: wording merged: moved beside flashing and mucus (body and FAQ)] (also elsewhere: yes)
- "Guppies cope with salt far better than most freshwater fish: in one study they survived being moved straight into half-strength seawater, so a salt course... is a sound alternative to medication for this species." (FunFact) and "Guppies handle salt better than most freshwater fish, so a salt course is an alternative to medication." (FAQ): restored. Chervinski 1984 was seen only as a transcription of the abstract and was dropped from Sources in the swap, so the sentence now has no Sources entry. "Better than most" is a comparison no opened source makes. (also elsewhere: yes)
- Velvet: "From poor water conditions or low temperature. Raise the temperature slightly, and dim the tank lights during treatment." (body) and "It comes from poor water conditions or low temperature, so raise the temperature slightly and dim the lights during treatment." (FAQ): restored. Merck gives only drugs (copper sulfate, chloroquine). (also elsewhere: no)
- Fin rot: "Ammonia buildup or an untreated injury can also start it. Improving water quality alongside an antibacterial treatment resolves most cases caught early. Left unaddressed, it can progress and become systemic.": restored. No opened Merck page names fin rot. [Review applied 2026-11-01: wording merged: causes first, over-treatment line after (body)] (also elsewhere: yes)
- Dropsy: "This is a visible sign of advanced internal or organ failure, and the hardest condition on this list to treat successfully, and it often carries a poor outlook by the time it's visibly obvious." (body and FAQ): restored. Merck says some causes respond to antibiotics, so the outlook claim is partly in tension with the corrected text. [Review applied 2026-11-01: conflict fixed: "advanced organ failure, hardest condition on this list" to "By the time the pinecone pattern is visibly obvious, the outlook is often poor" (body and FAQ)] (also elsewhere: yes)
- "## Swim Bladder Disorder" (usually from overfeeding or constipation, a short fast): whole section restored at its old spot. No opened source. (also elsewhere: yes)
- Camallanus: "The worms are about ¼ to ½ inch long." / "It shows up most in small livebearers like guppies, because a few worms that a larger fish could carry are enough to do serious harm in a fish this size." / "Shared plants, gravel and nets carry it between tanks too." / "A 25% water change a day later helps, and the drug does not touch eggs that have not hatched, so the tank gets a second dose two weeks after the first.": restored. The size, dose interval and water change rest on a retailer page (Aquarium Co-Op); the "small livebearers" claim has no source. [Review applied 2026-11-01: wording merged: "does not touch eggs that have not hatched" to "does not reach the larvae"] (also elsewhere: no)
- "...and they prevent far more than any medication does after the fact", "Quarantine catches most problems before they spread." and the whole "Uneaten food is a common and avoidable driver of the water-quality decline behind most of these conditions. Guppies beg whether they are hungry or not..." paragraph: restored. No source for "most of these conditions". [Review applied 2026-11-01: wording merged: FAQ trimmed to one statement each of the routine and quarantine; "most of these conditions" to "several of these conditions"] (also elsewhere: yes)
- Euthanasia: "Dropsy that has reached the pinecone stage... is past what a home tank can fix, and flushing a live guppy is not humane either. Use a small container of the guppy's own tank water for the clove oil.": restored. TAMU does not address flushing or the container. [Review applied 2026-11-01: wording merged: repeated opening clause cut, flushing line and container advice kept] (also elsewhere: yes)

**Left out as contradicted (guppy)**
- Cost: "$10 to $20 per pair for fancy varieties" (one breeder listed $22.99 to $27.99 a pair); "5 to 10 months" of sperm storage (Gasparini 2018: up to eight monthly cycles; Seriously Fish "6 months or more").
- Tank: "5 gallons works as a bare minimum for a small trio" (Seriously Fish about 41 L, FishBase 60 cm).
- Health: ich "Caused by stress" (UF/IFAS: a parasite spread by fish and equipment); "Water quality is the root of almost everything" and "the common thread running through nearly every condition" (Merck lists stress, poor water quality, overcrowding, failure to quarantine); dropsy "usually from a systemic bacterial infection" (Merck: several causes); "a healthy guppy that eats those crustaceans picks up the worm" as the only route (Levsen and Jakobsen: direct infection also occurs).
- Handling: gravid spot "just ahead of that fin" (Seriously Fish: behind the anal fin).
- Feeding FAQ clause "their mouths are too small for anything else" (Merck: flaked feeds can be crushed).
