# Fact sources

Tracks the fact sourcing review: every fact gets one credible source, shown later as a plain "Source: Publisher" line in the fact pop-up, with no link. Full results per batch (source URL, confirming quote, corrected wording) are in `docs/fact-sources/`. Nothing here has been applied to `facts.js` yet.

Rules for each batch: one source per fact; if the first page does not contain the claim, try one more page; if that fails too, write the fact down here as unconfirmed and move on.

## Batch A: 25 newest facts with numbers or studies (ids 295 to 352)

Results: `docs/fact-sources/batchA.json`. 5 confirmed, 20 partly, 0 unconfirmed.

**Unconfirmed:** none.

**Partly (these details could not be confirmed):**

- 295: "a 2009 study": the paper is Robison and Reisenbichler, Copeia 2008(4):780-784; MBARI's press release came out February 23, 2009.
- 296: "up to 20 steps per second" is not found for basilisks (20 steps per second is a figure reported for grebes). "roughly 20 meters": the source gives about 4.5 meters. "Fringed scales on its long toes unfurl" is not in this source.
- 297: "bite at for minutes at a time" is not in the abstract. "a pattern the researchers compared to hormonally regulated mammalian milk": they compared the antibody peak to colostrum and the behavior to mammalian weaning; no hormonal regulation claim. "one of the only documented cases" is "unusual among fish species" in the source.
- 301: "one of the oldest continuously studied animal models for any cancer, human or otherwise" is not in the source. "an ordinary pet-store platy has essentially no risk of developing it" is not supported: the review notes the Xmrk oncogene can act in some non-hybrid Xiphophorus species too. "over 70 years" is true but understates it (since the 1920s).
- 302: "plays no role in swimming, it's pure ornament": the sword raises the energy cost of swimming (it had no effect on escape performance). "a landmark 1990 study found the strength of that preference actually increases as the gap in sword length grows": Basolo 1990 (Animal Behaviour 40:332) is paywalled and I could not open its abstract to confirm it. A search-engine copy of the abstract says preference strength rose with the length difference, but it was not verified on a page.
- 303: "zebra danios with a jellyfish-derived fluorescent gene": the first GloFish sold was red and used a sea anemone gene. The jellyfish gene was in Gong's original lab fish, not every GloFish.
- 310: "rats were chosen specifically because they learned routes quickly and consistently enough to be scientifically useful" and "a trait a well-socialized pet rat still shows off today" are not in the source; it says the layout was chosen to echo rodent burrows. "the origin of an entire field" overstates "other researchers had adopted the maze". APA Monitor dates the start of the work to 1899.
- 311: "direct evidence the behavior responds to actual nutritional demand rather than instinct alone": the authors found the behavior was only partly suppressed, crept back up on the fortified diet, and may be largely habitual.
- 313: The link held only in Terrestrial Gartersnakes, one of the two species studied, not garter snakes in general. "genuinely costs the snake something" goes beyond the source's "suggesting resource-dependent behavior". "spray" is not in the source.
- 317: "up to 100 times a minute", "underground", and "a sense usually only found in animals that live in water" are not in the source.
- 318: "for 15 to 20 years", "the pair spends most of the year apart at sea" and "preen each other" are not in the source. The page gives an average clutch of 1 egg rather than saying a single chick.
- 323: "in the crushing cold of the hadal zone": NHM says the sighting only suggests they could live there. (The original paper, Jamieson and Vecchione 2020, Marine Biology, uses a 6,000 m hadal boundary and calls 6,957 m hadal, so this hinges on the definition.)
- 325: "Nothing else in North America builds a bigger nest in a tree": the source says only "some of the largest of all bird nests". "20 feet deep" is "20 feet tall" in the source.
- 327: The curved-dive behavior is not shown for bald eagles. The paper models an 'ideal falcon' ("could resolve"), and the field evidence (companion paper, Tucker et al. 2000) comes from peregrine falcons. "single one humans have" is not in the source.
- 329: "two working claws on each wing" and "the claws disappear as the bird matures" are not stated (the paper says only that adult claw proportions are quite different). Not in this source at all: the stinkbird nickname, crop fermentation like a cow, and "up to 45 hours" (Grajal and Parra 1995, Condor, give mean retention of about 45.7 hours for the largest marker particles, not a whole meal).
- 331: "between 15,000 and 20,000": the source gives up to 20,000, observed in captive animals. "a tongue that stretches about 10 centimeters": the source says it extends at least 5 cm beyond the nose. "teeth ... small, blunt and barely used" is not in this profile (a second DBCA sheet, 071540.pdf, says the teeth are poorly developed and many do not protrude above the gums). "almost every other Australian marsupial" is "most other marsupials" in the source.
- 338: "roughly 300 trident-shaped teeth arranged in 25 rows" and "living fossil status, largely unchanged for tens of millions of years" are not in this source. The paper notes the frilled shark is often treated as primitive but that some of its traits may be derived, and that some gestation estimates are only 1 to 2 years.
- 346: "rarely longer than about 8 inches" and "stretch its mouth open to roughly four times its closed size" are not in the paper (it calls this the largest species in the genus). "the one with the smaller mouth backs down first": the paper says the bigger fish usually wins and the bout ends when one bites the other.
- 350: "rubs it onto branches and its own feet with every step": the source says binturongs soak their feet and tails by squatting to pee, then drag their tails through the trees to leave a scent trail. Nothing about rubbing it on with every step.
- 351: "A 2020 study": the study (Badiane et al., Behavioral Ecology and Sociobiology 72:104) was published in July 2018. "far more" overstates the source's "strongest".

## Batch E: facts 76 to 100

Results: `docs/fact-sources/batchE.json`. 4 confirmed, 19 partly, 2 unconfirmed.

**Unconfirmed:**

- 89 Frog Rainmakers: no source says its croaking brings rain or carries for miles; UF/IFAS EDIS shows the reverse (rain triggers breeding and calling). Searched rainmaker nickname and rain-calling links.
- 93 Singing Spiders: no source found for house spiders 'singing' with vibrations to attract mates; searched Parasteatoda tepidariorum courtship vibration and stridulation, found only related species (Steatoda, black widows, Argiope).

**Partly (these details could not be confirmed):**

- 76: "with specialized receptors in their feet and trunk" (the release says elephants may sense vibrations through the feet, via bone conduction or foot receptors similar to those in the trunk) and "They can 'hear' messages from other elephants up to 20 miles away" (20 miles is a modeled travel distance for the signal, not a shown detection range)
- 77: "with a rapid-fire popping sound" (not on the page); "up to 500 pulses per second" understates the page's 368 to 735 pulses per second
- 78: "(a cleaner wrasse fish has since joined them)" (not in this paper) and "immediately" (the marked birds removed the mark after a few minutes, and the paper reports this for two birds, Gerti and Goldie)
- 81: "depending on their mood" (the paper is about social signaling in male contests and courtship, not mood)
- 82: "Their tireless work as pollinators helps produce about one-third of the food we eat" (not on the page)
- 83: "or confuse predators" (the page says camouflage from predators and prey, not confusing them)
- 84: "showcasing their fitness and charm" (the paper says the display's function still needs study) and the generalization to male crickets as a whole (the study is on the house cricket)
- 85: "mimicking human speech with astonishing accuracy", "social skills" and "displaying personalities that can change depending on their environments" (none on the page)
- 86: "all while going into a state of cryptobiosis" (not on the page)
- 87: "can last for 20 minutes" (the page says about 15 minutes) and "or simply to communicate with their fellow swimmers"
- 88: "it's not just for camouflage" and "masters of both disguise" (the page does not mention camouflage)
- 90: "up to 5 hours" (the source says several hours, for sea turtles generally), "dive deep" and "one of the ocean's most efficient swimmers"
- 91: "They cut leaves" (leafcutters are not named in the abstract) and "thousands of years before humans" (the source dates ant agriculture to about 66 million years ago)
- 92: "three-toed" (the page says sloths generally) and "pulling themselves along with their long front arms"
- 95: "can also temporarily impair a predator's sense of smell" (the review lists this only as a proposed function, not a shown one)
- 96: "just like cats", "primarily to communicate with their family members" and "helps strengthen social bonds and keep everyone feeling safe" (for males the study finds the purr is used most in aggressive encounters)
- 98: "cramming their entire mating season into just a week or two", "right as snowmelt fills" and "serenading females" (not on the page)
- 99: "providing each other with protection and food" (the fish gets protection and food; the anemone's stated benefits are parasite removal and water circulation)
- 100: "sometimes living just a few hours as adults" and "mating, and then dying in the same day" (the page gives one to four days for most adults)

## Batches B to N

| Batch | Facts | Status |
|---|---|---|
| B | 1 to 25 | running |
| C | 26 to 50 | running |
| D | 51 to 75 | running |
| E | 76 to 100 | done |
| F | 101 to 125 | running |
| G | 126 to 150 | waiting |
| H | 151 to 175 | waiting |
| I | 176 to 200 | waiting |
| J | 201 to 225 | waiting |
| K | 226 to 250 | waiting |
| L | 251 to 275 | waiting |
| M | 276 to 306 | waiting |
| N | 307 to 348 | waiting |
