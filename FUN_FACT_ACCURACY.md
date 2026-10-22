# Fun fact accuracy check

A list only: nothing here has been changed on the site. Checked 2026-10-22 at
the owner's request. These fun facts stay where they are (they are not fact
cards); this file records what is wrong with them so they can be fixed later.

Two sets were checked:

- **Guide fun facts (108):** the one-line `funFact` per pet species in
  `src/lib/data/guides/*.js`, shown on each care guide hub and encyclopedia page.
- **Article fun fact boxes (697):** every `<FunFact>` callout across 675
  articles in `content/`.

Each finding was backed by a source the checker fetched or saw quoted in a
search result. Severity:

- **wrong:** a credible source contradicts it.
- **outdated:** it was true, newer data differs.
- **overstated:** the core is right, but a superlative, number or certainty goes
  past the source.
- **unverified:** a specific claim the checker searched for and could not
  confirm on any credible page. Not proof it is wrong.

Suggested fixes are a starting point, not final copy. Recheck each against its
source before applying it, and read the box in its article first.

**68 findings:** 23 wrong, 3 outdated, 23 overstated, 19 unverified. 37 boxes with checkable claims were not finished because the search budget ran out; they are listed at the end.

## Guide fun facts (16)

### Wrong (4)

- `src/lib/data/guides/birds.js:662`
  - **Says:** The quaker is the only parrot that does not nest in a tree cavity.
  - **Problem:** Other parrots do not use tree cavities either: the burrowing parrot digs its nests in cliffs, in colonies of tens of thousands of burrows. What is unique to the quaker (shared only with its close relative the cliff parakeet) is building a stick nest.
  - **Source:** "the colony extended along 9 km of a sandstone cliff facing the Altantic Ocean, in the province of Río Negro, Patagonia, Argentina, and contained 51412 burrows, an estimated 37527 of which were active." (https://sedici.unlp.edu.ar/bitstream/handle/10915/127056/Documento_completo.pdf-PDFA.pdf?sequence=1)
  - **Suggested fix:** The quaker is the only common pet parrot that builds its own nest instead of using a cavity.
- `src/lib/data/guides/smallMammals.js:391`
  - **Says:** also called the 'dooking.' Dooking means your ferret is having the time of their life!
  - **Problem:** Dooking is the soft clucking sound ferrets make, not another name for the war dance. The two often happen together.
  - **Source:** "This is a common noise made by ferrets known as dooking." (https://www.chewy.com/education/small-pet/ferret/ferret-body-language-what-your-ferret-trying-to-tell-you)
  - **Suggested fix:** often paired with a soft clucking sound called dooking. Both mean your ferret is having the time of their life!
- `src/lib/data/guides/snakes.js:109`
  - **Says:** Boa constrictors can sense the heartbeat of their prey using heat-sensitive pits. They literally feel your pulse!
  - **Problem:** The 2012 study showed boas feel the prey's heartbeat through their coils while constricting and adjust the squeeze to it; heat pits play no part.
  - **Source:** "Through its thick coils, a boa can sense the tiny heartbeats of its prey." (https://www.nationalgeographic.com/science/phenomena/2012/01/17/snakes-know-when-to-stop-squeezing-because-they-sense-the-heartbeats-of-their-prey/)
  - **Suggested fix:** Boa constrictors can feel their prey's heartbeat through their coils and keep squeezing until it stops. They literally feel the pulse!
- `src/lib/data/guides/turtles.js:16`
  - **Says:** They are the only turtles that can completely seal themselves inside their shell!
  - **Problem:** Other turtles, such as some mud turtles, also have hinged plastrons that close the shell completely.
  - **Source:** "which allows the large plastron to completely close the shell" (https://turtles.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=8016)
  - **Suggested fix:** They are among the few turtles that can completely seal themselves inside their shell!

### Outdated (1)

- `src/lib/data/guides/cats.js:74`
  - **Says:** In the largest genetic survey of cat breeds its observed heterozygosity measured 0.57
  - **Problem:** The 0.57 / 0.51 / 0.65 / 0.34 figures are correct but come from Lipinski et al. 2008, a microsatellite study of 22 breeds (555 purebred cats). A 2022 study of 11,036 cats across 90 breeds is now the largest, so 'largest' no longer applies to the 2008 survey.
  - **Source:** "In the largest DNA-based study of domestic cats to date, 11,036 individuals (10,419 pedigreed cats and 617 non-pedigreed cats) were genotyped" (https://pmc.ncbi.nlm.nih.gov/articles/PMC9202916/)
  - **Suggested fix:** In a 2008 genetic survey of 22 cat breeds its observed heterozygosity measured 0.57

### Overstated (8)

- `src/lib/data/guides/cats.js:131`
  - **Says:** 17.24 percent among 2,230 Bengals tested across the US and UK, a rate beaten only by the Singapura at 41.4 percent
  - **Problem:** The 2,230 Bengals at 17.24 percent are samples submitted specifically for PK testing (the paper's 'biased' set), and the Singapura's 41.4 percent is the UK subset only; the Singapura's overall figure in the same table is 32.7 percent.
  - **Source:** "Bengal Total 2230 1510 671 39 0.1724 ... Singapura (UK) 168 60 77 31 0.414 ... Singapura Total 318 148 132 38 0.327" (https://pmc.ncbi.nlm.nih.gov/articles/PMC3534511/)
  - **Suggested fix:** 17.24 percent among 2,230 Bengals submitted for PK testing in the US and UK, a rate beaten only by the Singapura at 32.7 percent (41.4 percent in UK samples)
- `src/lib/data/guides/dogs.js:422`
  - **Says:** They come from an FGF4 retrogene, a copied gene that reinserted itself on chromosome 12, and it sits at a frequency of about 0.99 in the breed.
  - **Problem:** Dachshunds carry two FGF4 retrogenes, on chromosomes 18 and 12, both at about 0.99 frequency. The chromosome 18 copy was the first one shown to cause the Dachshund's short legs; the chromosome 12 copy is the one tied to disc disease (odds ratio 51.23).
  - **Source:** "They determined that a FGF4 retrogene insertion on CFA18 ∼25 Mb from the parental copy of the FGF4 locus was responsible for the “chondrodysplasia” phenotype in a number of breeds, such as the basset hound, Pembroke Welsh corgi, and dachshund." (https://pmc.ncbi.nlm.nih.gov/articles/PMC5664524/)
  - **Suggested fix:** They come from two FGF4 retrogenes, copies of a gene that reinserted themselves on chromosomes 18 and 12, and both sit at a frequency of about 0.99 in the breed. The chromosome 12 copy also drives premature disc degeneration
- `src/lib/data/guides/dogs.js:650`
  - **Says:** The appetite gene that makes Labradors chubby is the same gene that makes them good guide dogs.
  - **Problem:** The study found the POMC deletion at 45 percent in assistance dog breeding stock versus 12 percent in pets, but the authors only hypothesize that food motivation makes carriers more likely to be selected; they did not show the gene makes dogs better guide dogs.
  - **Source:** "We therefore hypothesize that dogs carrying the POMC deletion may be more likely to be selected as assistance dogs." (https://pmc.ncbi.nlm.nih.gov/articles/PMC4873617/)
  - **Suggested fix:** The appetite gene that makes Labradors chubby is far more common in guide dog breeding stock, and researchers suspect that is no accident.
- `src/lib/data/guides/geckos.js:112`
  - **Says:** rediscovered in 1994 during a tropical storm in New Caledonia
  - **Problem:** The account that mentions a storm says a sighting was reported after a tropical cyclone, and the gecko was then rediscovered by an expedition. No source says the rediscovery happened during the storm.
  - **Source:** "Then in 1994, following a tropical cyclone, there was a report of a Correlophus ciliatus being sighted on the Isle of Pines" (https://exo-terra.com/explore/care-guides/lizards/correlophus-ciliatus/)
  - **Suggested fix:** rediscovered in 1994 on New Caledonia's Isle of Pines, after a tropical storm
- `src/lib/data/guides/geckos.js:194`
  - **Says:** A 2024 genome study confirmed the difference: same family, one very different superpower.
  - **Problem:** The 2024 study sequenced only the crested gecko genome as a resource for future comparisons; it did not sequence the gargoyle gecko or confirm the difference between them. The regeneration difference was already known from observation.
  - **Source:** "Our assembly of the crested gecko genome provides a valuable resource for future comparative genomic studies between non-regenerative and regenerative geckos" (https://sciety.org/articles/activity/10.20944/preprints202409.2389.v1)
  - **Suggested fix:** A 2024 study sequenced the crested gecko's genome so scientists can work out why it lost the ability its cousins kept.
- `src/lib/data/guides/geckos.js:471`
  - **Says:** Every individual is female
  - **Problem:** Populations are mostly female, but males do occur rarely (usually sterile).
  - **Source:** "parthenogenetic mostly all-female populations (males occur quite rarely)" (https://pmc.ncbi.nlm.nih.gov/articles/PMC4492922)
  - **Suggested fix:** Nearly every individual is female (the rare males are usually sterile)
- `src/lib/data/guides/invertebrates.js:385`
  - **Says:** making it the only true millipede
  - **Problem:** The describing paper calls it the first true millipede with more than 1,000 legs, not the only one that can ever exist.
  - **Source:** "the first true millipede with more than 1000 legs" (https://pmc.ncbi.nlm.nih.gov/articles/PMC8677783/)
  - **Suggested fix:** making it the first known true millipede
- `src/lib/data/guides/smallMammals.js:899`
  - **Says:** Rabbits can jump up to 4 feet high
  - **Problem:** The Guinness record for a rabbit high jump is 99.5 cm (39.2 in), just over 3 feet.
  - **Source:** "The world record for the highest rabbit jump is 99.5 cm (39.2 in) and was achieved by Mimrelunds Tösen." (https://www.guinnessworldrecords.com/world-records/highest-jump-by-a-rabbit)
  - **Suggested fix:** Rabbits can jump more than 3 feet high (the record is 39.2 inches)

### Unverified (3)

- `src/lib/data/guides/cats.js:288`
  - **Says:** submissions to the UK lab that runs it went from 29 percent positive in 2005 to 10 percent in 2009
  - **Problem:** Langford's own PKD page confirms the test began in April 2005 and that the positive rate declined, but gives the trend only as a graph with no stated figures. Searches for the 29 percent and 10 percent values (Langford, GCCF, VIN, Royal Canin pages) found no page stating them.
  - **Source:** "The following graph shows the percentage of PKD Affected cats detected by the Molecular Diagnostic Unit between 2005 and 2018. This clearly shows a decline in the percentage of cats testing positive for the AD-PKD genetic mutation" (https://langfordvets.co.uk/media/bunbx0in/polycystic-kidney-disease.pdf)
  - **Suggested fix:** the share of cats testing positive at the UK lab that runs it fell steadily after the test launched in 2005
- `src/lib/data/guides/dogs.js:705`
  - **Says:** Rottweilers were among the first dogs used as guide dogs for the blind
  - **Problem:** Searched for Rottweilers in early guide dog history; the credible histories found describe the first guide dog school (Germany, 1916) and German Shepherds as the early breed, with no mention of Rottweilers. The AKC and American Rottweiler Club pages could not be retrieved.
  - **Source:** "The modern guide dog story started in Germany in 1916-1917, when dogs were trained to lead soldiers blinded in World War I." (https://www.unmc.edu/newsroom/2002/06/27/dogs-began-as-guides-during-world-war-i/)
  - **Suggested fix:** cut, or replace with: Rottweilers have worked as police dogs, service dogs and guide dogs
- `src/lib/data/guides/invertebrates.js:482`
  - **Says:** In the wild, land hermit crabs can live 20 to 30+ years
  - **Problem:** Searched for wild lifespan data on Coenobita; found no credible wild figure. The long lifespans on record come from captive crabs, including one kept more than 42 years.
  - **Source:** "the oldest decapod aged with a direct method is a hermit crab that was reared in captivity for more than 42 years" (https://www.scielo.br/j/nau/a/Cf6qbGDR4hJ9TgXMTjCwgvt/?lang=en)
  - **Suggested fix:** Well-kept land hermit crabs have lived 20 to 30+ years in captivity, and one passed 40

## Article fun fact boxes (52)

### Wrong (19)

- `content/guides/amano-shrimp-cost-guide.mdx:69`
  - **Says:** resting on a species that still can't be farmed commercially
  - **Problem:** Amano shrimp are now bred at scale on commercial farms, mainly in Taiwan, alongside seasonal wild collection. Larval rearing is hard and costly, which keeps the price up, but commercial breeding does happen. Note: both sources are trade wholesalers, the only kind found that address supply.
  - **Source:** "bred in huge numbers on commercial farms" (https://www.qualitymarine.com/news/japanese-algae-eating-shrimp-caridina-multidentata/)
  - **Suggested fix:** resting on a species whose saltwater larvae are hard and costly to raise, even on the commercial farms that now breed it
- `content/guides/bearded-dragon-tank-setup-guide.mdx:95`
  - **Says:** A bearded dragon's basking spot at a UVI of 4.0-4.5 is roughly equivalent to the UV intensity of full, direct desert sun
  - **Problem:** Full midday sun in the Australian summer reaches UVI 11 or more, more than double 4.5. A UVI of 4 to 4.5 matches the moderate exposure bearded dragons take while basking (Ferguson zone 3 to 4, about 2.9 to 7.4), not full desert sun.
  - **Source:** "In Australia the UV Index is at its most damaging in January when average values are forecast to be 11 or more across most of the country on clear sky days." (https://www.cancer.org.au/assets/pdf/cancer-council-stresses-importance-of-improved-understanding-as-uv-reaches-extreme-levels-this-summer)
  - **Suggested fix:** A basking spot at a UVI of 4.0-4.5 sits inside the range wild bearded dragons take while basking. That is well below full midday desert sun, which can pass UVI 11 in an Australian summer.
- `content/guides/box-turtle-legal-guide.mdx:125`
  - **Says:** lay only three or four eggs a year
  - **Problem:** Agency sources give clutches of roughly one to eight eggs, and a female can lay more than one clutch a season, so 'three or four a year' understates it and states a fixed number that does not exist.
  - **Source:** "A clutch is usually 2–8 eggs, which hatch in about 3 months. ... There may be multiple clutches each season." (https://mdc.mo.gov/discover-nature/field-guide/three-toed-box-turtle)
  - **Suggested fix:** lay small clutches, usually just a handful of eggs
- `content/guides/cherry-shrimp-health-issues-guide.mdx:78`
  - **Says:** with copper's 96-hour lethal concentration measured at roughly one-tenth the level of the next most toxic metal
  - **Problem:** The paper's 96-h LC50 for copper is 0.0313 mg/L and for cadmium, the next most toxic, 0.0539 mg/L. Copper's value is a little over half of cadmium's, not one-tenth.
  - **Source:** "Cadmium (II): 0.0539 ... Copper (II): 0.0313 ... the ranking of the five metals from most toxic to least toxic was: copper, cadmium, antimony, gallium, and indium" (https://pmc.ncbi.nlm.nih.gov/articles/PMC4107944/)
  - **Suggested fix:** with copper's 96-hour lethal concentration measured at roughly half the level of cadmium, the next most toxic metal, and far below the other three
- `content/guides/constriction-does-not-crush-or-suffocate.mdx:69`
  - **Says:** That is longer than a cricket pitch is wide by some margin
  - **Problem:** The comparison is garbled. A pitch is only 3.05 m wide, so 19 m is about six times the width, and if length was meant, 19 m is slightly shorter than a pitch's 20.12 m.
  - **Source:** "The pitch is a rectangular area of the ground 22 yards/20.12 m in length and 10 ft/3.05 m in width." (https://www.icc-cricket.com/news/mens-test-match-clause-6-the-pitch)
  - **Suggested fix:** That is nearly the length of a cricket pitch
- `content/guides/discus-tank-setup-guide.mdx:76`
  - **Says:** pH commonly sits around 6.0 to 6.5 and can drop as low as 4 in some spots
  - **Problem:** Blackwater habitat like the Rio Negro is typically below pH 5, not 6.0 to 6.5. The 6.0 to 6.5 figure is closer to the aquarium range than to the native blackwater.
  - **Source:** "These acids impart the dark brown color to the water and make itacidic (pH usually below 5.0)." (https://ask.ifas.ufl.edu/publication/FA166)
  - **Suggested fix:** pH usually sits below 5.0 and can drop to around 4 in some spots
- `content/guides/do-dolphins-have-names-what-the-research-shows.mdx:101`
  - **Says:** One showed self-directed behavior at a mirror at 5.5 months old.
  - **Problem:** The study reports the earliest self-directed mirror behavior at 7 months, not 5.5 months. The 12 to 15 month figure for children is correct.
  - **Source:** "One dolphin first showed self-directed behavior indicative of mirror self-recognition at 7 months of age" (https://phys.org/news/2018-01-dolphins-humans-chimps-early-self-awareness.html)
  - **Suggested fix:** One showed self-directed behavior at a mirror at 7 months old.
- `content/guides/dung-beetles-navigate-by-the-milky-way.mdx:55`
  - **Says:** The wombat cube study won the same prize six years later.
  - **Problem:** The dung beetle work won the 2013 Joint Prize in Biology and Astronomy, but the wombat study won the 2019 Physics Prize. It was an Ig Nobel, but not the same prize.
  - **Source:** "2019 ... PHYSICS PRIZE ... "for studying how, and why, wombats make cube-shaped poo." / 2013 "JOINT PRIZE IN BIOLOGY AND ASTRONOMY."" (https://improbable.com/ig/winners/)
  - **Suggested fix:** The wombat cube study won an Ig Nobel of its own, in physics, six years later.
- `content/guides/feline-kidney-disease-ckd-pkd-guide.mdx:121`
  - **Says:** with up to 20% of perfectly well Birmans falling outside standard laboratory reference intervals
  - **Problem:** In the Paltrinieri study, 20% of healthy Birmans were above the SDMA reference interval, but 40% were above the creatinine interval. "Up to 20%" understates the creatinine result, which is the more striking one.
  - **Source:** "In 20/50 Birman cats (40.0%) serum creatinine was higher than both the non-breed-specific RI of our laboratory ... The concentration of SDMA was higher than the pre-existing RI in 10/50 Birmans (20.0%)" (https://pmc.ncbi.nlm.nih.gov/articles/PMC11129243)
  - **Suggested fix:** with 40% of healthy Birmans above the standard creatinine reference interval and 20% above the SDMA one
- `content/guides/flying-squirrel-cost-guide.mdx:70`
  - **Says:** Researchers who mapped the genetics behind marsupial gliders found that gliding membranes evolved convergently across several unrelated mammal groups, including rodents, bats, and colugos, each landing on a similar structure through a different genetic path.
  - **Problem:** The 2024 Nature study (Moreno et al.) analyzed only marsupial genomes and found the same gene, Emx2, behind gliding membranes in each glider lineage, switched on by different regulatory elements. It did not study rodent, bat or colugo genetics, and bats fly rather than glide.
  - **Source:** "Patagia repeatedly originated through a process of convergent genomic evolution, whereby regulation of Emx2 was altered by distinct cis-regulatory elements in independently evolved species." (https://pmc.ncbi.nlm.nih.gov/articles/PMC11062917/)
  - **Suggested fix:** A 2024 study of marsupial gliders found that the same gene, Emx2, was recruited again and again in separate glider lineages. Rodents and colugos evolved their gliding membranes independently of marsupials.
- `content/guides/giraffe-heart-myth-what-the-research-shows.mdx:77`
  - **Says:** The 2025 review proposes something genuinely new
  - **Problem:** Aalkjaer et al. 2025 (Acta Physiologica 241(5):e70046, PMC12012874) is an original research paper reporting new hemodynamic measurements, not a review. The article body above the callout also calls it a review.
  - **Source:** "Here, we provide quantitative hemodynamic measures during head movement and drinking." (https://pmc.ncbi.nlm.nih.gov/articles/PMC12012874/)
  - **Suggested fix:** The 2025 study proposes something genuinely new
- `content/guides/hamster-health-issues-guide.mdx:70`
  - **Says:** O'Neill and colleagues tracked 4,504 pet hamsters under UK veterinary care
  - **Problem:** The study covered 16,605 hamsters, and the disorder and mortality analysis used a random sample of 3,998. The number 4,504 does not appear in the paper. The 7.33% and 6.27% figures check out.
  - **Source:** "The EPRs of a random sample of 3998/16,605 (24.08%) hamsters were manually examined" (https://pmc.ncbi.nlm.nih.gov/articles/PMC9796486/)
  - **Suggested fix:** O'Neill and colleagues reviewed the records of a random sample of 3,998 pet hamsters under UK veterinary care
- `content/guides/kingsnake-legal-guide.mdx:82`
  - **Says:** its unprotected-reptile category, NAC 503.090, specifically singles out California kingsnakes that lack a continuous banded or ringed pattern from head to vent as the unprotected form
  - **Problem:** NAC 503.090 is the open and closed seasons rule and says nothing about kingsnakes. The pattern-based kingsnake entry sits in NAC 503.140, the list of species that may be possessed without a Department permit or license, not in a reptile protection category.
  - **Source:** "NAC 503.140 Species for which certain permits and licenses are not required ... the following animals may be possessed, transported, imported and exported without a permit or license issued by the Department: ... (ss) California kingsnakes ( Lampropeltis californiae ) that do not have between their head and vent a continuous pattern of bands or rings regardless of whether the bands or rings are opened or closed." (https://www.leg.state.nv.us/NAC/NAC-503.html)
  - **Suggested fix:** Nevada runs a similar pattern-based test from the opposite direction: NAC 503.140, its list of animals that need no Department permit, names only California kingsnakes that lack a continuous banded or ringed pattern from head to vent.
- `content/guides/mantis-shrimp-16-color-vision-punch-power.mdx:89`
  - **Says:** are more distantly related to crabs and lobsters than they are to the shrimp you'd find in a cocktail
  - **Problem:** True shrimp, crabs and lobsters all belong to the same order, Decapoda, within Eumalacostraca, while stomatopods sit apart from that whole group. Mantis shrimp are therefore no closer to cocktail shrimp than to crabs and lobsters.
  - **Source:** "the Stomatopoda were distinguished as a separate group from the rest of the Eumalacostraca ... Sometimes, they are placed just outside of that group" (https://ucmp.berkeley.edu/arthropoda/crustacea/malacostraca/eumalacostraca/stomatopodasy.html)
  - **Suggested fix:** and are only distantly related to the shrimp you'd find in a cocktail, no more closely than they are to crabs and lobsters.
- `content/guides/mouse-handling-guide.mdx:68`
  - **Says:** A standard 5-gallon bucket runs about 12 inches tall
  - **Problem:** Standard 5-gallon pails are about 14.5 inches tall, not 12. Retailer and manufacturer specs agree on 14.5 inches.
  - **Source:** "Height: 14.5 inch" (https://www.acehardware.com/departments/paint-and-supplies/painting-tools-and-supplies/paint-pails/1147461)
  - **Suggested fix:** A standard 5-gallon bucket runs about 14.5 inches tall
- `content/guides/praying-mantis-tank-setup-guide.mdx:85`
  - **Says:** A mantis needs an enclosure roughly three times its own body length tall, with four times its length in clear drop below the perch
  - **Problem:** The two numbers contradict each other: an enclosure only three body lengths tall cannot hold a drop of four body lengths below the perch. The care source the article cites sets four body lengths of drop as the minimum, so the enclosure must be taller than that.
  - **Source:** "the distance from the top of the branch to the floor must be at least four times the length of the insect." (https://www.amentsoc.org/insects/caresheets/praying-mantids.html)
  - **Suggested fix:** A mantis needs at least four times its own body length in clear drop from the top of its perch to the floor, so the enclosure has to stand taller than that
- `content/guides/savannah-monitor-legal-guide.mdx:84`
  - **Says:** Every species in the genus *Varanus* is on CITES Appendix II, and has been since 1975.
  - **Problem:** Five monitor species are on Appendix I, not Appendix II: the Bengal, yellow, desert and clouded monitors and the Komodo dragon. The rest of the genus is covered by the Appendix II "Varanus spp." listing.
  - **Source:** "Of the 88 species, 83 are listed in Appendix II and five (Bengal Monitor, V. bengalensis; Yellow Monitor, V. flavescens; Desert Monitor, V. griseus; Komodo Dragon, V. komodoensis; Clouded Monitor, V. nebulosus; Fig. 1) are listed in CITES Appendix I." (https://journals.ku.edu/reptilesandamphibians/article/download/22850/21876/92156)
  - **Suggested fix:** Every monitor species is listed under CITES: the genus has been on Appendix II since 1975, apart from five species, the Komodo dragon among them, that sit on the stricter Appendix I.
- `content/guides/serval-legal-guide.mdx:88`
  - **Says:** The caracal, a cat of very similar size and temperament, is not on the list and therefore cannot be kept.
  - **Problem:** The caracal is not on the noncontrolled list, but Montana does not ban it. ARM 12.6.2208 classes it as a controlled species, which can be kept under a possession permit (12.6.2210). That also means naming on the white list is not the only way in.
  - **Source:** "Caracal cat -- Caracal caracal; and ... A permit is required for all controlled species except those identified in ARM 12.6.2208(2)(b) and (c)." (https://www.animallaw.info/administrative/mt-exotic-pets-sub-chapter-22-exotic-wildlife)
  - **Suggested fix:** The caracal, a cat of very similar size and temperament, is not on that list: Montana classes it as a controlled species, so keeping one takes a state permit.
- `content/guides/tokay-gecko-handling-guide.mdx:56`
  - **Says:** the loud, distinctive "to-KAY" bark it uses as part of its defensive display
  - **Problem:** The to-kay call is the male's territorial and mating call, not a defensive display. The bioacoustics study lists a separate bark of intimidation for defense.
  - **Source:** "The "long sequence" is considered to be a territorial proclamation which also functions as a mating-call." (https://bioacoustics.info/article/acoustic-signals-nocturnal-lizard-gekko-gecko-analysis-long-complex-sequence)
  - **Suggested fix:** the loud, distinctive "to-KAY" call males use to claim territory and attract mates

### Outdated (2)

- `content/guides/amphibian-quarantine-and-water-guide.mdx:102`
  - **Says:** Bd's host range crossing 200 documented amphibian species, per the USGS
  - **Problem:** The USGS Bsal page does say Bd affects more than 200 species, but that figure is stale. A 2019 global study in Science tied chytrid to declines in more than 500 species, 90 of them presumed extinct.
  - **Source:** "has caused dramatic population declines in more than 500 amphibian species" (https://cmns.umd.edu/news-events/news/fungal-disease-threatens-hundreds-amphibian-species-worldwide)
  - **Suggested fix:** Bd's link to declines in more than 500 amphibian species, per a 2019 global study in Science,
- `content/guides/why-your-dog-needs-daily-exercise.mdx:27`
  - **Says:** over 56% of dogs in the United States are classified as overweight or obese
  - **Problem:** The 56% figure comes from APOP's 2018 survey. Its 2022 survey found 59% of dogs overweight or obese.
  - **Source:** "in 2022, 59% of dogs and 61% of cats were classified as overweight or having obesity." (https://www.petobesityprevention.org/articlesandnews/new-survey-reveals-alarming-rates-of-pet-obesity-in-the-us)
  - **Suggested fix:** 59% of dogs in the United States were classified as overweight or obese in its 2022 survey

### Overstated (15)

- `content/guides/angelfish-cost-guide.mdx:68`
  - **Says:** commonly $150 to $1,500
  - **Problem:** The commonest marine angelfish in the trade, dwarf angels such as the coral beauty, sell for well under $150. The $150 floor only fits larger Pomacanthus and Holacanthus species. The same figure also appears in the FAQ at line 48.
  - **Source:** "Regular price $59.99 (coral beauty angelfish, sizes S 1" to 2", M 2" to 3", L 3" to 4")" (https://www.liveaquaria.com/products/coral-beauty-angelfish)
  - **Suggested fix:** from about $50 for a dwarf angel to well over $1,000 for rare species
- `content/guides/betta-fish-vs-goldfish-guide.mdx:82`
  - **Says:** and even recognize their owners for months at a time
  - **Problem:** The research that busts the three-second myth shows goldfish retaining learned tasks and feeding cues for months. Owner recognition lasting months is not what those studies tested.
  - **Source:** "goldfish can retain memories for at least three months." (https://www.discoverwildlife.com/animal-facts/fish/goldfish-memory)
  - **Suggested fix:** research showing goldfish can learn tasks and feeding routines and remember them for at least three months
- `content/guides/boa-constrictor-legal-guide.mdx:62`
  - **Says:** part of why the agency concluded a federal ban would do little beyond inconveniencing existing legal owners
  - **Problem:** FWS said widespread ownership and domestic breeding made import and interstate transport bans less effective. It did not say a ban would only inconvenience owners.
  - **Source:** "the circumstances surrounding the species, which include widespread private ownership and domestic breeding, ... render importation and interstate transport prohibitions less effective" (https://www.fws.gov/press-release/2015-03/service-lists-four-nonnative-large-constrictor-snakes-injurious-wildlife)
  - **Suggested fix:** part of why the agency concluded that import and interstate transport bans would be less effective for this species
- `content/guides/cherry-shrimp-cost-guide.mdx:100`
  - **Says:** In Europe, the agency notes established wild populations are currently limited to thermally polluted waterways
  - **Problem:** The screening says many European populations, not all, are confined to thermal or thermally polluted waters.
  - **Source:** "many of those in Europe are restricted to thermal or thermally polluted waters" (https://www.fws.gov/media/ecological-risk-screening-summary-cherry-shrimp-neocaridina-davidi-high-risk)
  - **Suggested fix:** In Europe, the agency notes many established wild populations are restricted to thermal or thermally polluted waters
- `content/guides/cockatoo-legal-guide.mdx:92`
  - **Says:** Goffin's, the smallest cockatoo commonly kept
  - **Problem:** The cockatiel, which this same paragraph names, is a true cockatoo and the smallest one, and it is far more commonly kept than the Goffin's. The superlative only holds if cockatiels are excluded.
  - **Source:** ""The smallest species of cockatoo" is the cockatiel. ... recent molecular and biochemical studies have confirmed it is a true cockatoo" (https://www.guinnessworldrecords.com/world-records/447056-smallest-cockatoo)
  - **Suggested fix:** Goffin's, one of the smallest of the large cockatoos commonly kept
- `content/guides/gargoyle-gecko-handling-guide.mdx:68`
  - **Says:** A 2024 genome study confirmed gargoyle geckos regenerate their tails while crested geckos have permanently lost that ability.
  - **Problem:** The 2024 study is a crested gecko genome assembly. It describes the crested gecko as non-regenerating and lists the gargoyle gecko among its regenerating relatives, but it did not test or confirm gargoyle regeneration.
  - **Source:** "C. ciliatus is the only non-regenerative lizard species capable of hybridizing with regenerative relatives ... specifically C. sarasinorum, Mniarogekko chahoua, and Rhacodactylus auriculatus" (https://pmc.ncbi.nlm.nih.gov/articles/PMC11558660/)
  - **Suggested fix:** Gargoyle geckos regrow lost tails, while crested geckos are one of only about fourteen gecko species that cannot, a gap a 2024 crested gecko genome study set out to explain.
- `content/guides/ghost-shrimp-tank-setup-guide.mdx:75`
  - **Says:** the larvae can survive there, but the odds improve with a trace of salinity
  - **Problem:** The cited Lowe and Provenzano (1990) abstract reports hatching and metamorphosis across 0 to 5 ppt, with fresh water included, but gives no rates showing better results at low salinity than at 0 ppt. The 'odds improve with a trace of salinity' conclusion is not in the source.
  - **Source:** "with ensuing egg hatching and metamorphosis limited to 0-5 ppt. ... Starved larvae hatched from field-caught ovigerous females in 0 ppt were able to metamorphose in salinities of 0-30 ppt" (https://academic.oup.com/jcb/article-lookup/doi/10.2307/1548408)
  - **Suggested fix:** the larvae can develop there, so a plain freshwater tank sits inside the range the study found workable
- `content/guides/giraffe-heart-myth-what-the-research-shows.mdx:77`
  - **Says:** The authors call it a mechanism unique to this species.
  - **Problem:** In the paper, 'a mechanism unique to this species' describes the neck-vein blood pooling response. About the swallowing pump, the authors only say they know of no other animal where it has been described, and they hedge it as 'most likely'.
  - **Source:** "We are not aware that this mechanism has been described for any other animal." (https://pmc.ncbi.nlm.nih.gov/articles/PMC12012874/)
  - **Suggested fix:** The authors say they know of no other animal in which this has been described.
- `content/guides/how-dangerous-are-sharks-really.mdx:42`
  - **Says:** The 2025 total of 65 unprovoked bites was actually **below** the recent 10-year average of 72. The nine deaths were above the 10-year average of six
  - **Problem:** The article's own cited source, the ISAF 2025 summary, does not use a 10-year average. It calls 65 bites in line with the five-year average of 61, which puts this year slightly above average rather than below it, and it calls nine unprovoked deaths in line with the five-year average of eight. The 72 and 6 figures come from press coverage, not from ISAF.
  - **Source:** "in line with the most recent five-year (2020-2024) average of 61 incidents annually ... in line with the most recent five-year annual global average of eight unprovoked fatalities per year" (https://www.floridamuseum.ufl.edu/shark-attacks/yearly-worldwide-summary/)
  - **Suggested fix:** The 2025 total of 65 unprovoked bites was in line with the recent five-year average of 61, and the nine unprovoked deaths were close to the five-year average of eight.
- `content/guides/milk-snake-legal-guide.mdx:96`
  - **Says:** the one written for keepers covers captive-bred color variants acquired from a legal source ... in Wisconsin a milk snake that is not a captive-bred color morph is on its way out of private hands.
  - **Problem:** The adopted rule defines 'color variant' narrowly: albino, fully melanistic, piebald with 10% or more pure white, and for milk snakes patternless animals. Most pet-trade milk snake morphs fall outside that definition, so being a captive-bred morph is not enough.
  - **Source:** "NR 16.01 (2m) “Color variant” means any of the following atypical native amphibians and reptiles of any age class: (a) Individuals, regardless of species, that are: 1. Tyrosinase-negative albino (light pink or yellow body with red eyes). 2. Fully melanistic animals (entirely black). 3. Piebald (10% or more of the animal is pure white). (b) Gophersnakes and milksnakes that are patternless." (https://usark.org/wp-content/uploads/2026/05/26-wi-herp-rules-final.pdf)
  - **Suggested fix:** the one written for keepers covers captive-bred color variants acquired from a legal source, which the rule defines narrowly as albino, fully black, piebald (10% or more pure white) or, for milk snakes, patternless animals. ... in Wisconsin a milk snake that does not fit one of those defined color variants is on its way out of private hands.
- `content/guides/milk-snake-vs-corn-snake-guide.mdx:86`
  - **Says:** A corn snake's name comes from its belly, a checkerboard pattern of black and white marks resembling kernels of maize
  - **Problem:** The belly-pattern origin is one of several proposed explanations, alongside the snake's habit of living around corn cribs and fields. The Smithsonian's National Zoo presents it only as a possibility.
  - **Source:** "The name corn snake may have originated from the markings on this snake's belly, which resemble maize, or Indian corn." (https://nationalzoo.si.edu/animals/corn-snake)
  - **Suggested fix:** A corn snake's name most likely comes from its belly, a checkerboard pattern of black and white marks resembling kernels of maize, though some trace it to the snake's habit of hunting around corn cribs.
- `content/guides/rabbit-cost-guide.mdx:82`
  - **Says:** In some rabbit strains, 80% of unspayed females develop uterine cancer by 3 years of age.
  - **Problem:** Merck repeats this line, but the underlying colony data put rates near 80% in does aged 5 to 6, not 3; Greene's own 1941 colony study reported 16.7% of all females over 2. Other vet-school sources give up to 50% at 5 years or older.
  - **Source:** "Prevalence may be up to 50% in rabbits 5 years or older." (https://cvm.missouri.edu/diseases-of-research-animals-dora/rabbits/uterine-adenocarcinoma/)
  - **Suggested fix:** Uterine cancer becomes very common in unspayed females as they age, with studies reporting rates of 50% or more in older does and higher still in some strains.
- `content/guides/rabbit-health-issues-guide.mdx:90`
  - **Says:** That 80% arrives by age 3, early in a rabbit's life.
  - **Problem:** Same figure as entry 14. The high rates in the research colonies came from does aged 5 to 6, and Greene's 1941 study found 16.7% of all females over 2. The risk climbs with age and does not reach 80% by 3.
  - **Source:** "an incidence of 16.7 per cent in the total female population over 2 years of age" (https://pmc.ncbi.nlm.nih.gov/articles/PMC2135129)
  - **Suggested fix:** That risk climbs steeply from middle age onward, well within a pet rabbit's normal lifespan.
- `content/guides/sulcata-tortoise-vs-russian-tortoise-guide.mdx:79`
  - **Says:** emerged from an egg smaller than a golf ball
  - **Problem:** Sulcata eggs measure 41 to 44 mm across, which is about the same size as a golf ball (42.7 mm), not smaller.
  - **Source:** "the white eggs are almost spherical (41-44 mm)" (https://turtles.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=8156)
  - **Suggested fix:** emerged from an egg about the size of a golf ball
- `content/guides/veiled-chameleon-tank-setup-guide.mdx:90`
  - **Says:** It channels droplets down toward the mouth as an extra natural adaptation
  - **Problem:** Casque water channeling is a widely repeated hypothesis, but no study measuring it was found. A university herpetarium states it only as a belief.
  - **Source:** "It is believed in the wild that this collects dew at night and directs it to their mouths." (https://www.bgsu.edu/arts-and-sciences/biological-sciences/facilities-and-resources/bgsu-herpetarium/animals/reptiles/veiled-chameleon.html)
  - **Suggested fix:** The casque is believed to collect dew and direct it toward the mouth, on top of the drinking the chameleon does from misted leaves and branches.

### Unverified (16)

- `content/guides/ackie-monitor-handling-guide.mdx:60`
  - **Says:** A wild ackie digs burrows as deep as about 1.3 feet. When it retreats into one, it inflates its lungs and plugs the entrance behind it with its spiny tail as a defense.
  - **Problem:** Searched for V. acanthurus burrow depth and lung inflation plus tail plugging; no credible page gave a 1.3 foot depth or the inflate-and-plug behavior. The documented behavior is the lizard wedging its spiny tail into rock crevices so a predator cannot pull it out. The article's cited sources (ReptiFiles handling page checked) do not mention it.
  - **Source:** "This monitor wedges its spiny tail into rocks so it cannot be pried out by predators." (https://www.nczoo.org/wildlife/animals/spiny-tailed-monitor)
  - **Suggested fix:** A wild ackie retreats into rock crevices and burrows to escape predators, and it wedges its spiny tail into the rock so it cannot be pried out.
- `content/guides/aquarium-stocking-and-tankmates-guide.mdx:108`
  - **Says:** In the group-size study, the loneliest fish were not the worst off. Neon tetras were more aggressive in twos and fives than in a proper school
  - **Problem:** The Saxby et al. 2010 abstract reports that aggression fell as groups grew. It says nothing about single fish faring better than pairs. A lone fish has no tankmate to be aggressive toward, so 'not the worst off' goes beyond the published finding.
  - **Source:** "Neon tetras and white cloud mountain minnows displayed reduced aggression and darting" (https://research-portal.uws.ac.uk/en/publications/the-effect-of-group-size-on-the-behaviour-and-welfare-of-four-fis/)
  - **Suggested fix:** In the group-size study, neon tetras kept in twos and fives were more aggressive and darted more than those in groups of 10
- `content/guides/blue-tongue-skink-cost-guide.mdx:86`
  - **Says:** documented living more than 32 years
  - **Problem:** The 32-year figure shows up only on pet-care pages. AnAge lists a maximum of 26.6 years for Tiliqua scincoides, and the Aquarium of the Pacific says more than thirty.
  - **Source:** "Blue-tongued skinks live approximately twenty years in human care, with some living to more than thirty years old." (https://aquariumofpacific.org/onlinelearningcenter/species/blue_tongued_skink)
  - **Suggested fix:** reported living more than 30 years in human care
- `content/guides/boa-constrictor-cost-guide.mdx:82`
  - **Says:** before being euthanized due to age-related health problems in 1977
  - **Problem:** Guinness confirms the age and the death at Philadelphia Zoo, but the euthanasia detail appears only on listicle sites. I found no credible source for it.
  - **Source:** "Greatest reliable age recorded for a snake is 40 yrs 3 months 14 days - a male boa constrictor who died at Philadelphia Zoo." (https://x.com/GWR/status/427790694237749248)
  - **Suggested fix:** who lived 40 years and 3 months before dying there in 1977
- `content/guides/box-turtle-legal-guide.mdx:125`
  - **Says:** Wildlife agencies describe this as a species where "removing even a few adult turtles can destabilize a local population for decades,"
  - **Problem:** This is presented as a direct quote from wildlife agencies, but it does not appear on the agency pages the article cites (Indiana DNR FAQ checked) and an exact-phrase web search returned nothing. The Indiana page makes a similar point in different words.
  - **Source:** "Continued collection of wild box turtles greatly reduces another box turtle's chance of reproduction." (https://www.in.gov/dnr/fish-and-wildlife/wildlife-resources/animals/eastern-box-turtle/)
  - **Suggested fix:** Indiana's wildlife agency warns that "continued collection of wild box turtles greatly reduces another box turtle's chance of reproduction,"
- `content/guides/box-turtle-legal-guide.mdx:125`
  - **Says:** long-term field studies have documented population crashes of 70 to 80 percent in some intensively studied areas over several decades
  - **Problem:** No study is named and the article's cited agency pages (Indiana DNR, Missouri MDC) give no percentage, only that populations are declining. I could not reach a primary study confirming the 70 to 80 percent figure.
  - **Source:** "Populations are declining throughout their range." (https://www.in.gov/dnr/fish-and-wildlife/wildlife-resources/animals/eastern-box-turtle/)
  - **Suggested fix:** and wildlife agencies report populations declining throughout the range
- `content/guides/dog-enrichment-guide.mdx:77`
  - **Says:** Both groups got twenty minutes of activity with a person.
  - **Problem:** No account of the Duranton and Horowitz design gives a 20 minute figure; they describe two group classes plus daily home practice over two weeks. The number may come from the study's 20 dogs. Searched secondary accounts and tried the ScienceDirect, Crossref and Europe PMC abstracts, which were blocked or empty.
  - **Source:** "The 10 dog/owner pairs in this group attended two weekly group classes. ... The owners practiced the assigned heel work exercises on a daily basis." (https://thesciencedog.com/2019/01/28/science-says-nose-work-is-good-for-your-dog/)
  - **Suggested fix:** Both groups got the same structure: group classes and daily practice with their owner for two weeks.
- `content/guides/hedgehog-health-issues-guide.mdx:66`
  - **Says:** found a considerably lower confirmed rate, closer to 3%
  - **Problem:** The study is Gonzalez et al. 2023 (JAVMA 261, 49 hedgehogs from 7 US institutions, 2000 to 2020). It enrolled only hedgehogs with WHS confirmed at postmortem, so the abstract gives no population prevalence and no 3% figure. The full text is paywalled, and searches for a 3% figure found nothing. The 3.3-year mean onset is confirmed. The same 3% claim also appears in the seoDescription and FAQ (lines 18 and 43).
  - **Source:** "Inclusion criteria were hedgehogs of any sex or age with postmortem CNS histopathology consistent with WHS. ... the mean ± SD age at onset was 3.3 ± 1.5 years" (https://europepmc.org/article/MED/37217171)
  - **Suggested fix:** A 2023 retrospective of 49 confirmed cases across seven US veterinary institutions put the average age of onset around 3.3 years, older than earlier estimates suggested. (Cut the 3% rate unless the full text supports it.)
- `content/guides/immortal-jellyfish-turritopsis-dohrnii-explained.mdx:50`
  - **Says:** Maria Pia Miglietta, one of the researchers who has spent the most time on this animal, put the scale of it simply: "This is equivalent to a butterfly that goes back to a caterpillar."
  - **Problem:** An exact-phrase search for the quote found nothing. The Scientist, which the article cites, gives a similar line but attributes it to Stefano Piraino. Mother Jones uses the butterfly comparison only in its own narration, not as a direct quote from Miglietta.
  - **Source:** "it might be comparable to a butterfly that would be able to revert to the caterpillar stage" (https://www.the-scientist.com/an-immortal-jellyfish-offers-clues-into-biological-aging-73346)
  - **Suggested fix:** Stefano Piraino, a marine zoologist at the University of Salento, put the scale of it simply: it "might be comparable to a butterfly that would be able to revert to the caterpillar stage."
- `content/guides/leaftailedgecko-kingsnake-boxturtle-oscar-overview.mdx:84`
  - **Says:** Research on serum from the kingsnake genus found real, documented resistance to rattlesnake venom specifically, though it offers little to no protection against a coral snake's neurotoxin.
  - **Problem:** The classic serum study (Philpot and Smith 1950) tested pit viper venoms, mainly cottonmouth with rattlesnake as a secondary test, so 'rattlesnake specifically' misdescribes it. Searches for kingsnake serum or resistance against coral snake (Micrurus) venom found no study supporting 'little to no protection', and the article cites none.
  - **Source:** "King snake serum, detoxicated by heating, and in doses well below toxic levels protected white mice against as high as 7 LD50's of moccasin venom injected intraperitoneally ... A protective action against rattlesnake venom was also demonstrated." (https://www.ebm-journal.org/journals/experimental-biology-and-medicine/articles/10.3181/00379727-74-17959/full)
  - **Suggested fix:** Research on kingsnake serum found real, documented protection against pit viper venoms, including cottonmouth and rattlesnake venom.
- `content/guides/mouse-handling-guide.mdx:68`
  - **Says:** Mice can jump roughly 13 inches straight up from a standstill, and some have been recorded escaping containers as tall as 24 inches by combining a jump with a bit of climbing along the way.
  - **Problem:** A USDA lab study of rodent abilities measured a maximum jump of 25 cm (about 10 inches) for house mice, and extension figures run about 12 inches. I found no credible record of mice escaping 24 inch containers; with the bucket at 14.5 inches, the 'not tall enough' premise also needs rethinking.
  - **Source:** "House Mice jumped a maximum of 25 cm." (https://digitalcommons.unl.edu/icwdm_usdanwrc/1341)
  - **Suggested fix:** Mice can jump about 10 to 12 inches straight up, so a lidless container needs real height and a smooth inner wall to hold one.
- `content/guides/the-best-dog-toys-for-big-and-small-dogs-a-2026-guide.mdx:67`
  - **Says:** A Mastiff's bite force of around 550 PSI actually exceeds that of a wolf, which averages around 400 PSI.
  - **Problem:** The 550 PSI Mastiff and 400 PSI wolf figures trace to pop-culture breed lists, not measured studies. A veterinary review of measured dog bite force reports wide variation and says no representative value can be fixed. Searched for a primary source for both numbers and found none.
  - **Source:** "Due to the wide range of the reported bite forces and the high variability, a representative value is difficult to determine" (https://www.frontiersin.org/articles/10.3389/fvets.2018.00076/full)
  - **Suggested fix:** cut
- `content/guides/the-best-dog-toys-for-big-and-small-dogs-a-2026-guide.mdx:81`
  - **Says:** A Mastiff's bite force can exceed 550 PSI
  - **Problem:** Same unsourced breed-list figure as entry 22. Measured studies of dog bite force do not support a breed-specific PSI number.
  - **Source:** "bite force was found to range from 13 to 1,394 Newtons (N), with a mean value of 256 N." (https://www.frontiersin.org/articles/10.3389/fvets.2018.00076/full)
  - **Suggested fix:** A Mastiff's powerful jaws can destroy most standard dog toys in minutes.
- `content/guides/the-octopus-has-three-hearts-and-uses-all-of-them.mdx:101`
  - **Says:** though death usually comes 4 to 8 hours after exposure rather than immediately
  - **Problem:** Searched clinical and case-report sources for a typical time to death and found no 4 to 8 hour figure. A pediatric case report instead warns an untreated bite could kill within minutes, and none of the article's cited sources covers this.
  - **Source:** "an untreated bite of this animal could have lead to death within minutes" (https://www.qxmd.com/r/19238736)
  - **Suggested fix:** Symptoms begin within minutes, and without breathing support the paralysis can progress to fatal respiratory failure
- `content/guides/tortoise-soaking-guide.mdx:115`
  - **Says:** A tortoise drinks with both ends. The cloaca takes up water during a soak
  - **Problem:** Searched for evidence that tortoises take up water through the cloaca during a soak. Cloacal uptake is documented for ions and oxygen in some aquatic turtles, but no credible source confirms it as drinking in tortoises. The article's own vet sources say only that soaking encourages drinking.
  - **Source:** "Soaking encourages drinking, urination, and defecation." (https://lafeber.com/vet/basic-information-sheet-mediterranean-tortoises/)
  - **Suggested fix:** A soak gets a tortoise drinking and then emptying itself, which is why one can go from bone dry to passing urine in twenty minutes.
- `content/guides/zebra-danio-handling-guide.mdx:75`
  - **Says:** They can clear 20 to 30cm (roughly 8 to 12 inches)
  - **Problem:** Searched for a measured zebrafish jump height and found none; the only source for the figure is a pet blog (HousedPet) cited by the article. The article's credible species source, Seriously Fish, does not mention jumping at all.
  - **Source:** "No credible page found giving a jump height for Danio rerio; the Seriously Fish species profile has no mention of jumping, jump height or lids." (https://www.seriouslyfish.com/species/danio-rerio/)
  - **Suggested fix:** They are known to jump from uncovered tanks, an impressive feat for a fish that tops out around 2 inches long.

## Not checked (search budget ran out)

These boxes contain checkable claims the checkers did not finish verifying. They are not cleared.

- `src/lib/data/guides/dogs.js:705`: Despite the guarding reputation, Rottweilers were among the first dogs used as guide dogs for the blind, and in more recent decades they worked search and...
- `src/lib/data/guides/dogs.js:247`: A Beagle's enrichment needs are olfactory, not athletic. Dogs carry roughly 800 to 1,200 functional olfactory receptor genes, and scenthounds like the...
- `src/lib/data/guides/amphibians.js:261`: Tiger salamanders are one of North America's largest terrestrial salamanders, reaching 13 inches. They are also among the most cold-tolerant amphibians on...
- `src/lib/data/guides/dogs.js:132`: Medium-sized dogs (roughly 20 to 60 lbs) often show the most behavioral versatility. Studies show they tend to score higher on trainability assessments,...
- `src/lib/data/guides/cats.js:14`: Cats spend approximately 30 to 50% of their waking hours grooming themselves. This is not just cleanliness: grooming regulates body temperature, stimulates...
- `content/fun-facts/10-surprising-argentine-tegu-facts.mdx:46`: Generating your own body heat overnight with no outside source is normally filed under birds and mammals. The tegu does it only in the breeding season,...
- `content/guides/american-alligator-legal-guide.mdx:130`: The alligator is the one animal on this map that is banned in Texas and unregulated in Alaska. Texas's alligator proclamation bars possessing a live one...
- `content/guides/box-turtle-handling-guide.mdx:64`: The hinge in a box turtle's plastron closes the shell almost completely, sealing out most predators, and it's the literal source of the name "box" turtle, a...
- `content/guides/california-kingsnake-enrichment-guide.mdx:75`: "Snakes feel secure in small spaces" is the most repeated claim in snake keeping and it has been tested once, in a close relative of this animal, with a...
- `content/guides/california-kingsnake-handling-guide.mdx:61`: Research on serum from the kingsnake genus found meaningful resistance to rattlesnake venom specifically. That resistance isn't universal, though,...
- `content/guides/cherry-amano-ghost-shrimp-overview.mdx:69`: All three of these shrimp get lumped together as "cleanup crew," but they come from two different shrimp families and don't even agree on how to reproduce....
- `content/guides/cockatoo-enrichment-guide.mdx:73`: The uncomfortable part of this literature is not which intervention wins, it is that van Zeeland and colleagues trace feather damaging behavior partly to...
- `content/guides/cougar-legal-guide.mdx:131`: The Florida panther has been on the federal endangered list since 1967, before the Endangered Species Act existed, under the list's predecessor statute. Its...
- `content/guides/ferret-legal-guide.mdx:82`: California's ban is the one that has been challenged hardest. In June 2025 the Fish and Game Commission voted unanimously to accept Petition 2025-003, which...
- `content/guides/giant-millipede-legal-guide.mdx:71`: A specific story circulates on hobbyist forums claiming all millipede imports were banned in 2006 over concerns about mites damaging cotton crops. We...
- `content/guides/gray-squirrel-legal-guide.mdx:100`: Texas is the state most often listed as squirrel-friendly, and the squirrel it is friendly to is the [flying squirrel](/blog/flying-squirrel-legal-guide/),...
- `content/guides/green-anole-legal-guide.mdx:105`: Arkansas wrote its exception for exactly this animal. Its unrestricted species list clears the anoline lizards by naming eight genera, and then adds:...
- `content/guides/hedgehog-legal-guide.mdx:78`: Two states are routinely listed as hedgehog permit states and neither one is. Maine's Department of Inland Fisheries and Wildlife publishes an Unrestricted...
- `content/guides/green-iguana-health-issues-guide.mdx:58`: Many captive green iguanas die young, and inadequate diet, lighting, and housing (the exact same three factors behind metabolic bone disease) are named as...
- `content/guides/iguana-fireskink-quaker-overview.mdx:73`: Line these three up by first impression and the mismatch holds for every one of them. The iguana's price tag says nothing about the six-foot, twenty-pound,...
- `content/guides/kinkajou-legal-guide.mdx:102`: Nebraska and Oklahoma both draw the line between the kinkajou and the coati, and they draw it in opposite directions from the same fact. Both states' lists...
- `content/guides/pet-monkey-legal-guide.mdx:138`: Oklahoma catches the lemur's federal listing and lets it go in the next sentence. 29 O.S. § 7-502(A)(2) bars possessing an endangered species, which the...
- `content/guides/molly-handling-guide.mdx:66`: A single mating can be enough to keep a female molly producing fry for a long stretch afterward, since females can store sperm internally and don't need a...
- `content/guides/platy-health-issues-guide.mdx:85`: Xiphophorus fish have been used in melanoma research for over 70 years, making them one of the oldest continuously studied animal models for any cancer,...
- `content/guides/quaker-parakeet-enrichment-guide.mdx:72`: Feral quaker colonies in the United States and Europe build their communal nests on electricity pylons and transformers, which is the actual reason the...
- `content/guides/stick-insect-cost-guide.mdx:101`: Rare giant stick insect species can command prices exceeding $1,000 for a single adult, a striking contrast to the common Indian stick insect, which often...
- `content/guides/sugar-glider-legal-guide.mdx:78`: A few states are frequently listed as banning sugar gliders by pet blogs, but don't hold up against the actual rule text. Georgia explicitly permits...
- `content/guides/snapping-turtle-legal-guide.mdx:101`: Texas has two snapping turtles and two completely different answers. The common snapping turtle, *Chelydra serpentina*, is on the nongame list at six per...
- `content/guides/reticulated-python-legal-guide.mdx:106`: Two states have the species on their books under a name science has retired, and two more under a spelling that was never right. Connecticut's Category Two...
- `content/guides/red-eared-slider-legal-guide.mdx:98`: This one moved fast. Colorado Parks and Wildlife approved a full herpetofauna rule overhaul (Chapter W-7) in March 2026, effective May 1, 2026, which...
- `content/guides/whites-tree-frog-tank-setup-guide.mdx:82`: A T5 UVB bulb can keep glowing visibly long after its actual UVB output has crashed. That's exactly why the bulb gets replaced every 6 to 8 months on a...
- `content/guides/tiger-legal-guide.mdx:96`: Michigan dated its tiger window to the day, twenty-two years before Congress did. The Large Carnivore Act, which took effect in 2000, lets a person possess...
- `content/guides/two-toed-sloth-legal-guide.mdx:97`: Montana clears one two-toed sloth and not the other. ARM 12.6.2205(1)(f) puts "Two-toed sloth - Choloepus didoctylus" on the noncontrolled list, a...
- `content/guides/venomous-snake-laws-by-state.mdx:135`: Oregon is the one state that answers cobras one species at a time. OAR 635-056-0060 lists the Egyptian cobra, the black and white cobra, the Indian cobra,...
- `content/guides/virginia-opossum-legal-guide.mdx:95`: The gray short-tailed opossum, Monodelphis domestica, is the opossum that turns up on pet lists, and the states treat it as a different animal from the one...
- `content/guides/white-tailed-deer-legal-guide.mdx:96`: Kansas is the one state whose statute says the word. K.S.A. 47-2101 defines a domesticated deer as any legally obtained cervid "being sold or raised in a...
- `content/guides/wolfdog-legal-guide.mdx:104`: Louisiana's rule bans the wolfdog and says the ban is over, in the same section. LAC 76:V.115.C.1 still prints "f. wolf dog hybrid (Canis lupus or Canis...
