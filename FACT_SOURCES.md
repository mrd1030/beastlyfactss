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

## Batch B: facts 1 to 25

Results: `docs/fact-sources/batchB.json`. 4 confirmed, 20 partly, 1 unconfirmed.

**Unconfirmed:**

- 20 Breath-Holding Sloths: neither the 40 minute breath hold nor the heart rate slowing to a third could be confirmed; searched zoo, conservation and journal sources, and the figures appear only on blogs, newsletters and a kids' page with no study cited (the National Zoo page confirms only that sloths swim well).

**Partly (these details could not be confirmed):**

- 2: "Each spine lasts about a year before it falls out"
- 3: "They can also learn over 100 words and even understand context"
- 4: "named 'panda' nearly 50 years before the giant panda"; "NOT related" (source: not closely related)
- 5: "darken when cold or stressed, and lighten up when warm and happy"; "beard puffs out and turns black when they're showing off"
- 6: "binkies (joyful leaps and twists in the air)"
- 8: "press it into the Jacobson's organ" (the tongue leaves chemicals on pads on the floor of the mouth)
- 9: "it means they love" (source: trust, not necessarily love); "marking you as 'theirs'"
- 10: "friend"; "bring gifts to people who feed them, from shiny buttons to earrings"
- 11: "When it gets old or stressed" (source: rejuvenates after reproducing)
- 12: "16 types of color receptors" (source: 12); "polarized light"; "punch with the force of a bullet"
- 13: "hold funerals"; "deceased family members" (study: they do not single out relatives); "with their trunks"; "stand vigil for hours"; "seen crying"
- 14: "their heart" (source: parts of the heart)
- 15: "very dry gut lets the corners hold"; "sit on rocks and logs without rolling off"; "scent messages carrying identity and breeding status"; "wombats are not territorial"
- 16: "until consensus is reached" (source: quorum, not consensus)
- 17: "or seagrass"; "mostly keep together by watching, listening"
- 18: "and ceilings"
- 22: "the only animals where the male gives birth" (pipefishes and seadragons too); "until they hatch"
- 23: "It also has a venomous spur" (males only)
- 24: "so relaxed they often let other animals sit on them: birds, monkeys, even caimans" (the card's headline point); "native to South America" (source: Central and South America)
- 25: "300 degrees F" (source: nearly 100 C, about 212 F); "for decades"

## Batch C: facts 26 to 50

Results: `docs/fact-sources/batchC.json`. 8 confirmed, 17 partly, 0 unconfirmed.

**Unconfirmed:**

none.

**Partly (these details could not be confirmed):**

- 26: "up to 10 feet" and "water temperature"
- 29: the generalization "A single starfish arm can regenerate an entire new body" (only a few species, such as Linckia) and "Some species can even split in half and grow into two complete starfish"
- 31: "competing for food", "It's their main defense mechanism" (source says their only defense is flight) and "can travel up to 10 feet"
- 33: "the pressure keeps it looking like a normal fish" (curators credit the water's support) and "with a big nose" (the droopy nose forms only out of water)
- 34: "twice that of humans" (source compares with mammals of similar size) and "6-foot neck"
- 35: "(to absorb heat)" and "because it reflects visible light, like snow"
- 38: "three times their normal size" and "1,200 times more deadly than cyanide"
- 39: ball pythons specifically, and "months without eating" (source covers breeding snakes in general)
- 40: "and a polite greeting in dragon language"
- 42: "now one of the most popular gecko species in the hobby"
- 43: "Color changes signal stress, excitement, readiness to mate" (paper shows dominance, submission and female rejection displays)
- 44: "and moisten the eye" and "You can sometimes spot it when a dog is sleepy"
- 45: "Some kennel clubs have started using nose prints" (the Canadian Kennel Club has accepted them since 1938)
- 46: "Dogs dream just like humans do" as fact, "remarkably similar to ours" and "as they relive their day"
- 47: "completely blind and deaf", "rely entirely on smell and touch" and "eyes open around 2 weeks" (source: 8 to 10 days)
- 49: "only" and "not at other cats", "They invented the meow" (source says they more probably repurposed existing calls) and "each cat develops its own unique vocabulary"
- 50: "known to promote bone healing" (a hypothesis in a conference abstract), "reduce stress" and "for both the cat and the human nearby"

## Batch D: facts 51 to 75

Results: `docs/fact-sources/batchD.json`. 0 confirmed, 25 partly, 0 unconfirmed.

**Unconfirmed:**

none.

**Partly (these details could not be confirmed):**

- 51: "specialized collarbone", "always land on their feet", "kicks in within milliseconds"
- 52: "Skip the milk bowl" (source says most adult cats tolerate a small amount)
- 53: "up to 70% of their lives sleeping", "conserve energy the rest of the time"
- 54: "need social interaction daily", "highly intelligent birds that thrive on engagement"
- 55: "at least 3 hours of exercise" (3 hours at midday was the restricted condition that raised stress), "not low-maintenance pets"
- 56: "lonely, anxious, and even depressed"
- 57: "Tortoises" in general (source is Aldabra giant tortoises), "include them in your will"
- 58: "Many parrots can mimic not just single words but full sentences, tones, and even laughs"
- 59: "from over a meter away" (source says within a few inches)
- 60: "to extract grubs from bark", "pass these techniques on to their young, making it a form of animal culture"
- 61: "Scientists once thought it was blood" (source: an ancient myth), "oily", "nickname 'blood sweat'"
- 62: "farming for over 50 million years" as said of leafcutters (66 million years is for fungus-farming ants as a group)
- 63: "and elephants", "a sense of self-awareness"
- 64: "They eat, sleep, and even mate in the sky"
- 65: "or kills prey instantly"
- 66: "like a fingerprint", "by their stripe pattern alone", "within hours of being born"
- 67: "in 1995", "elk behavior changed", and the rivers link (the 2025 re-analysis is about willows)
- 68: "up to an inch per day" (source: more than 2 cm), "velvet, a soft skin", "harden each autumn"
- 69: "permanently", "Finding Nemo got it backwards!"
- 70: "nearly immune", "filmed getting bitten by cobras, going limp for a few minutes, then waking up and continuing to eat the snake"
- 71: "perfectly mimic almost any sound", "car alarms, camera shutters", "human voices", "entire construction sites"
- 72: "hypnotize", "freezes crabs and shrimp in place", "dazzling light show", "at high speed"
- 73: "over 15 different species", "lionfish, flatfish, and sea snakes", "changing color in real time"
- 74: "see in full color" (contradicted: lens eyes are color-blind), "arranged in four clusters", "no brain"
- 75: "regional" (accents are shared within social groups, not regions)

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

## Batch F: facts 101 to 125

Results: `docs/fact-sources/batchF.json`. 3 confirmed, 21 partly, 1 unconfirmed.

**Unconfirmed:**

- 106 Mission Impossible Tails: Searched tamarin tail signaling. The only lead was Moynihan (1970), Smithsonian Contributions to Zoology 28, which has a tail-pattern section among many visual displays, but the Smithsonian repository PDF returned 403 and no other source was found.

**Partly (these details could not be confirmed):**

- 101: "born the size of a grape", "crawl into their mother's pouch", "up to 40 mph" (the source gives almost 35 mph)
- 102: "When they swim," (the source ties the heart roles to no activity); "in deep ocean environments" (the source says cold, low-oxygen ocean conditions)
- 104: "just as sensitive as ours" (source says delicate); "unique 'mustache' whiskers that contribute to their charming personality"; "naturally hairless" is overstated (source says not always totally hairless)
- 105: "mainly single-celled" (the source lists dinoflagellates alongside ostracods and other plankton); "blue-green" (the source says blue)
- 107: "thousands of miles" (the source says long distances)
- 108: "taken for their scales and meat" (not on this page)
- 109: "in the blink of an eye"; texture change is credited to chromatophores on the card, but the source credits papillae; "mesmerizing underwater performers"
- 110: "up to 30 feet" (source: generally 13 to 26 feet); "see clearly underwater thanks to their unique eye structure"
- 111: "one of the longest-living pets out there"; "survive for months without food" (the page describes months of brumation but says nothing about food)
- 112: "up to 6 miles per hour" (6.5 feet per second is about 4.4 mph); "curl up into little balls for cuddles when they're feeling safe" (the source says they curl up when threatened)
- 113: "up to 10 feet" (source says nine feet); "helping these mystical creatures navigate the frigid Arctic waters" (source suggests salinity sensing, possibly linked to ice formation, mating or food, not navigation)
- 114: "echoing through the Australian outback at sunrise" (no timing on the page, and the species lives in eastern Australia rather than the outback)
- 115: "up to 600 volts" (source says up to 800 volts); "enough to stun a horse"
- 116: "even run on ceilings" (the paper quotes Aristotle on running down trees head first, not ceilings)
- 117: "Unlike other big cats" and "the only large felines that never truly roar" (the source says cheetahs do not roar, not that they are the only ones)
- 119: "It's nature's smart way to balance populations in hot climates!" (not in the source)
- 121: "don't have round eyeballs like us - they have fixed eye tubes" (the source calls them eyeballs locked by the sclerotic ring and does not mention tube shape)
- 122: "the only mammals known" (the paper says "may have a unique mechanism"); "eye color" (it is the reflective tapetum lucidum behind the retina, not the iris); "dim Arctic twilight" (paper says winter darkness)
- 123: "Miracle" (the page names him Mike); "over 18 months" (page says eighteen months); "a famous traveling sideshow attraction" (page says Life magazine and fame, no sideshow)
- 124: "parachutes and rudders", "steer mid-air, control its descent" (no steering on the page); "distant" branches is loose (up to 15 meters)
- 125: "up to a liter"; "in just 0.1 seconds" (paper: under 0.4 seconds); "perfect smoky getaway"

## Batches B to N

| Batch | Facts | Status |
|---|---|---|
| B | 1 to 25 | done |
| C | 26 to 50 | done |
| D | 51 to 75 | done |
| E | 76 to 100 | done |
| F | 101 to 125 | done |
| G | 126 to 150 | running |
| H | 151 to 175 | running |
| I | 176 to 200 | running |
| J | 201 to 225 | running |
| K | 226 to 250 | running |
| L | 251 to 275 | waiting |
| M | 276 to 306 | waiting |
| N | 307 to 348 | waiting |
