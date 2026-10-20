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

## Batch G: facts 126 to 150

Results: `docs/fact-sources/batchG.json`. 2 confirmed, 22 partly, 1 unconfirmed.

**Unconfirmed:**

- 128 Pebble-Proposing Love Birds: The pebble proposal and lifelong pair bond. Checked the Australian Antarctic Program Adélie page (pebble nests only) and Discover Wildlife, which says evidence for the proposal story is hard to come by; males do gather and steal pebbles for the nest.

**Partly (these details could not be confirmed):**

- 126: "packed with blood vessels" (not on this page); "and legs" (the page says the sides of the body); "fast-flowing, low-oxygen streams" (the page gives no stream detail)
- 127: "naturally about 3.8% alcohol" (3.8% is the maximum; the mean is 0.6%); "roughly beer strength"; "Special metabolic enzymes keep it perfectly sober" (the paper says how they cope is unclear); "starts every day" (the paper says daily, with no time of day)
- 129: "Wandering" (the article speaks of albatrosses generally); "for hours"; "up to 11 feet" (the source says up to 12 feet); "the widest of any living bird"; "circle the globe on wind alone"
- 130: "up to 20 times per second"; "each impact is too brief to cause damage" (the abstract credits braincase size and shape)
- 131: "drink" (the source says food or rest only)
- 133: "up to 18 minutes without oxygen" (the release gives at least five hours at low oxygen, no zero-oxygen figure); "nearly immune to cancer" (source: rarely gets cancer); "one of the only mammals" (source: a cold-blooded mammal, no uniqueness claim)
- 134: "little more than a built-in supply of sperm for life" (the page does not mention sperm)
- 135: "to confuse predators" (the review gives predators as a trigger, not confusion as the purpose); "a full set" (the review says most of or even all organs, and the cloaca stays behind)
- 136: "lay ... at once" (the figure is potential fecundity, eggs counted in a female); "almost none survive to adulthood"
- 137: "roughly the size of a dinner plate"; "built to catch the faintest flickers of bioluminescent light" (the abstract says suited to spotting large predators such as sperm whales); giant squid share the record with colossal squid
- 138: "more G-force than a human fighter pilot can withstand" (the paper gives 264 g but makes no pilot comparison); "snap back with its prey in a fraction of a second"
- 139: "light-sensing 'third eye' on top of their skull" (not on this page); "a metabolism so slow" (the page says slow growth); "live past 100" (the page says up to 100); "predates the dinosaurs" (the page says thrived in the age of the dinosaurs)
- 140: "nearly 3,000 pounds" (the source gives 2,125 pounds); "the muscles that open its jaw are so weak a person can hold its mouth shut with bare hands" (not on this page)
- 141: "as far as 60 meters" (the source says 20 to 30 meters)
- 143: "the only mammals capable of true, sustained flight" (not on this page; NPS states it on its sibling page How Bats Fly); "in total darkness"; "up to 200 calls per second"; "build a live map"
- 144: "over 2,000 meters deep"; "up to two hours"; "longer than almost any other mammal"
- 145: "one of the only mammals" (the paper contrasts cats with most omnivores, herbivores and dogs, but makes no rarity claim)
- 146: "an unusually shaped larynx"; "nicknamed the 'baroo'"
- 147: "Their wet nose actually helps by trapping scent chemicals" (not on this page)
- 148: The card states the width rule and gap testing as fact; the source repeats them but says they are "not scientifically proven"
- 149: "faints within seconds" (the rats were already anesthetized; the paper reports blood pressure halving within 6 seconds); "well before it would ever suffocate" (no comparison with suffocation timing); "tiny vestigial hind-leg spurs" (not in this paper)
- 150: "'popcorn,' leaping straight up and twisting mid-air, when they're overjoyed" (not on this page)

## Batch H: facts 151 to 175

Results: `docs/fact-sources/batchH.json`. 5 confirmed, 19 partly, 1 unconfirmed.

**Unconfirmed:**

- 160 Always Running Warm: The core claim (higher body temperature and metabolism) was searched on the CFA breed page and in a web search for veterinary sources; only pet blogs repeat it. The bathing detail is supported by CFA.

**Partly (these details could not be confirmed):**

- 151: "for hours" (the paper says long periods); "researchers believe helps them conserve body heat while wading in cold water" (heat loss is one older hypothesis; this paper proposes reduced muscle effort instead); "locking a joint" (the paper describes a passive gravitational stay apparatus, not a lock); "no extra muscle effort" (the paper says little)
- 152: "up to 35 times a second" (the source says about 35 beats per second); "some species" (the source says a single seahorse, with no species split)
- 154: "dozens" (the source says a large number); "and familiar humans"; "over long stretches of time"
- 156: the whole sleep sentence: "as little as 10 minutes a night, taken in a couple of short bursts" and "giraffes in zoos ... sleep several hours more"
- 158: "0 to 60 mph in about three seconds" (the source says 0 to 45 mph in 2.5 seconds); "faster than most sports cars"; "20-30 seconds before overheating" (the source says full sprints last about 20 seconds and gives no overheating cause); "Unlike other big cats" (the source compares the claw-tipped footprints with a typical cat's, not other big cats)
- 159: "almost freely"; "spin around and bite an attacker even while pinned by the scruff of its neck" (the source says twist and escape the grip)
- 161: "Lysiosquillina maculata" by name (the source says lysiosquillids as a group); "mate for life"; "for up to 20 years"
- 162: "up to a million hairs" (the source says more than a million at its thickest); "their only insulation" (the source also credits a high metabolism for staying warm)
- 163: "no brain and no blood" (not on this page); "hundreds of" tube feet; "too big to swallow"
- 164: "For decades scientists believed toxic mouth bacteria killed" ... "research later revealed" (the page still credits bacteria and venom together and does not frame the bacteria idea as overturned); "crash the victim's blood pressure" (the source says massive blood loss and shock)
- 165: "spend years trying to find their way back"; "wildlife experts say never to relocate one you find"
- 167: "termites by the thousands" (the page says they feed mostly on ants); the page describes pangolins in general, not the giant pangolin specifically, and counts the tongue together with its muscles
- 168: "the wild population now survives in just one place, a shrinking canal system" (the source says three isolated sites in two lakes, Xochimilco and Chalco)
- 169: "1930s" (the earliest captive study cited is Schenkel 1947); "a bestselling 1970 book" (Mech 1970 is only cited among works holding the prevailing view); "the same biologist who coined the term" (Mech did not coin it; the paper credits the alpha labels to Schenkel's 1947 captive study); "spent years afterward trying to get the myth retracted"
- 170: "sweat milk"; "it pools into little grooves for the babies to lap up" (the source says the young suckle from the milk patches)
- 171: "the only birds that can fly backwards" (the source says they can, not that they alone can); "for a moment"; "a unique shoulder joint that lets their wings rotate in a full circle"; "slashing their heart rate by up to 95%"
- 172: "independently evolved" and "a textbook case" of convergence (the source says they share the feature and are not closely related, but does not say it evolved separately)
- 174: "2,000 to 3,000 teeth over a lifetime" (the paper gives no total; 80 teeth replaced about 50 times each implies about 4,000); "the moment it wears down or snaps off" (the paper says about once a year)
- 175: "can destroy anthrax, botulism, and cholera bacteria" (the source credits disease resistance and a strong immune system along with acid, and says the acid destroys most bacteria); "bloodstream" (the source says intestines); "roadkill"

## Batch I: facts 176 to 200

Results: `docs/fact-sources/batchI.json`. 4 confirmed, 20 partly, 1 unconfirmed.

**Unconfirmed:**

- 192 Ocean's Biggest Brain: Searched for Ari and D'Agostino (2016), Journal of Ethology, the manta mirror study; Springer and ResearchGate both returned bot challenges and the publisher withholds the abstract, so neither the brain size claim nor the mirror results could be read.

**Partly (these details could not be confirmed):**

- 176: "usually only ones who" (the paper finds past food received is the best predictor, not a near-exclusive rule); "Skip your turn to share, and the colony remembers" (the paper favors long-term bonds over turn-taking and says nothing of colony-wide memory)
- 178: "powerful enough to be felt in a diver's chest from meters away"; "hunt giant squid in total darkness thousands of feet down" (the paper says the clicks suit long-range biosonar but names no prey or depth)
- 179: "thanks to the shape of their mouth"; "if food gets scarce, restarting it once conditions improve" (the source ties the paused embryo to whether the joey in the pouch survives, not to food)
- 180: "for hours" (source: stand and wait); "snap a lungfish or baby crocodile in half" (source: prey is usually decapitated before swallowing, and young crocodiles are only occasional prey); "specifically for slicing through tough prey" (source: sharp edges aid in capturing and eating prey)
- 181: "purely"; "nearly invisible"; "swim using" (the page names the fins but not their role); "look like drifting seaweed rather than a fish"
- 182: "never need to drink with their mouths" (the paper says the water is swallowed at the mouth with jaw movements); "from any damp surface, including morning dew" (the paper discusses rain and moist sand, not dew); the false head defense (not in the paper)
- 183: "watch their heart beating and blood moving through their organs" (the paper says bones and other organs are visible, and in the species studied the heart sits inside a reflective sac)
- 184: "on a raised mound"; "eagles and jackals"; "roughly every hour"; "so everyone gets a turn to forage"; the whole scorpion venom and stinger point
- 185: "resetting for another strike in a fraction of a second" (the paper measures 15 ms of foot contact, not time between strikes); "keep their body safely out of biting range" (the paper says long legs are assumed to be selected for rapid foot strikes, nothing on biting range); "up to five times" (the paper reports an average of 5.1 body weights from one bird)
- 186: the inside-out defensive posture with "spiny projections" and "instead of fleeing" (not in the paper); "twilight zone" (the paper places them at 600 to 900 m in the oxygen minimum zone)
- 187: "blow bubbles"; "underwater"; "needle-thin"; "built purely for snatching fish, too fragile to take down anything larger"
- 188: "double-jointed" (the page says highly flexible); "up to eight times a second" (the page says continuously and rapidly); "a foraging trick found nowhere else in the animal kingdom"
- 189: "more than a third of its body surface"
- 190: "around 120 beagles working major airports nationwide" (the page gives over 180 agriculture canine teams, not a beagle count); "over bigger sniffer breeds" (the page says beagles are preferred at airports without comparing breeds)
- 191: "the largest natural range of any wild carnivore on Earth, found across nearly the entire Northern Hemisphere" (not in the paper); "kill rate on that heading" (success was highest for attacks aimed north, 340 to 40 degrees, and 60 percent in the opposite southern segment; north-east is only the preferred jump direction)
- 193: "tail held out for balance"
- 196: "turns over organic matter and aerates the soil"; "the burrows they abandon get taken over by other animals looking for shelter"
- 198: "Smithsonian-led" (the release says SCBI and partners, with an SCBI scientist as co-author); "used that deep split to build" (the split is a finding of the tree, not its basis); "a seized scale" (the release says products in marketplaces)
- 199: "Pangolin scales are keratin, the same protein your fingernails and hair are made of" (not on this page)
- 200: "including in the 1996 paper that made it famous" (the abstract names no 1996 paper; its reference list cites a 1992 paper on reversal in "Turritopsis nutricula")

## Batch J: facts 201 to 225

Results: `docs/fact-sources/batchJ.json`. 2 confirmed, 22 partly, 1 unconfirmed.

**Unconfirmed:**

- 221 Thirty Years in One Anemone: Searched for Buston and García (2007), Journal of Fish Biology 70: 1710-1719, which search snippets say estimates a 30-year female life expectancy, twice any other reef damselfish. The Buston Lab page lists only the citation and the CORE record returned 403.

**Partly (these details could not be confirmed):**

- 201: "collapses its bell into a small blob" (the paper says the medusa settles and transforms into a cyst, with no description of the bell)
- 202: "such as muscle becoming nerve"; "One researcher described" (the page says the process "has been likened" to a butterfly turning back into a caterpillar and names no researcher)
- 203: "with a bright red stomach glowing through a nearly transparent bell"; "ringed by dozens of white tentacles" (the page gives eight tentacles in Panama and 24 or more in the Mediterranean and Japan, with no color)
- 204: "came back identical" (the sequences differed by an average of 0.31%, and only 15 animals from four of the countries shared one haplotype); "spread across the planet recently" (not stated); "One scientist called it" (the paper has two authors, Miglietta and Lessios, and uses the phrase as its title)
- 205: "11 adult males" and "Shark Bay" (not in the abstract); "going on each male's track record across the population, not just their own encounters with him" (the abstract says females respond "based on their experience of individual male behavior")
- 206: "so identity is most of the conversation" (the source says around 50%, which is half, not most)
- 208: "stripping out every trace of the original animal's voice" (the copy stimuli were "predominantly synthetic", not all); "none responded to whistles that were not theirs" (the abstract says so, but the results report matching calls after two familiar-control playbacks, and none after unfamiliar ones)
- 209: "What mirror behavior proves about self-awareness is still genuinely debated" (the paper does not discuss this)
- 210: "it sits well inside human hearing" and "They were audible all along" (not stated); "That detail quietly kills a popular claim" (the paper says the infrasound idea lacks systematic evidence but does not say the hums disprove it); "Nobody had listened for 947 hours"
- 211: "For over a century"; "Genetic work in 2016"; "do not interbreed in the wild"; "separated by differences comparable to those between polar and brown bears" (none on this page)
- 212: "The textbook explanation, a siphon effect pulling it back, was rejected by a 2025 review because a collapsed vein cannot sustain a siphon" (the 2025 source is an experimental study, not a review, and does not mention a siphon)
- 213: "anatomists have argued for decades" (the paper cites earlier studies on both sides but gives no time span); "The current view" (this is the 2016 study's finding, not a stated consensus)
- 214: "dozens of non-breeders who are fertile but suppressed" (the abstract says all other females "remain infertile" and gives no colony size)
- 215: "A mouse in a zero-oxygen chamber dies in under a minute"; "Plants use this pathway"; "No other mammal is known to deploy it as a whole-body rescue" (none in the abstract)
- 216: "the whole colony's accent shifts when a new queen takes over" (the abstract says dialect cohesiveness drops when the queen is lost and re-emerges only when a new queen rises)
- 218: "reabsorbing their own tissue" (the paper says it has no information on the mechanism and only suggests tissue resorption as a possibility)
- 219: "because crossing open reef means being eaten and challenging a bigger fish means losing" (the paper says only that queuing beats dispersing or contesting); "They even limit their own growth to stay unthreatening"; "The wait can last decades"
- 220: "extremely low" (the paper says lower, "substantially smaller" than in non-symbiotic damselfish); "They are not wearing a disguise" (the paper lists mucus mimicry as one of three hypotheses and does not rule it out)
- 222: "in the southern part of their range" (the page says the upper Midwestern United States and southern Canada); "The gap comes mostly from urea" (the paper says the tolerance derives in part from a urea and glucose system); "roughly eight times the plasma urea of temperate ones" (the 8-fold rise compares winter-conditioned Alaskan frogs with Alaskan frogs in late summer, not with temperate frogs)
- 223: "the instant freezing begins" (the paper says quickly after freezing begins); "at concentrations that would put a mammal in a diabetic coma"; "The ice forms outside the cells, and the sugar keeps what is left inside them dilute enough to survive" (the paper says both agents reduce the amount of ice forming in the body)
- 224: "does not warm from the outside in" (not stated); "The heartbeat comes back within an hour and reaches near-normal function within a few hours" (the abstract gives no times for the heart, only that early heart rates were below normal and rose as the frog warmed)
- 225: "It gets away with it by freezing rather than digging" (the page does not mention freezing); "not underground and not in water, so it sits through whatever the winter does" (the page says only beneath stumps, logs or leaf litter)

## Batch K: facts 226 to 250

Results: `docs/fact-sources/batchK.json`. 2 confirmed, 22 partly, 1 unconfirmed.

**Unconfirmed:**

- 243 Calls Below Human Hearing: the 14 Hz floor, upper harmonics, carrying range and dusk inversion peak; Cornell Elephant Listening Project pages blocked (403) and Larom et al. 1997 not on PubMed or PMC.

**Partly (these details could not be confirmed):**

- 226: "The pouch seals shut"; "and feeding"; "a mammal's placenta grows from embryonic tissue". The paper calls the tissue a pseudoplacenta and says its skin origin is "considered", not proven.
- 227: "they lost their spleen" (not in this paper); "A vertebrate missing all that should be defenseless" (the paper says other TLRs partly compensate).
- 228: "lysozyme"; "When a female transfers her eggs, non-sterile seawater goes into the pouch with them" (the paper says the pouch is filled with seawater, not when it enters); "warm"; "handling bacteria the missing immune hardware no longer can".
- 229: "It has no destination and no idea which way it is going".
- 230: "two meter arena"; "With the Milky Way visible" (the source says a moonless, starry night); "That gap is also what light pollution costs an animal, measured directly".
- 231: "they fell apart" (the source says they took much longer).
- 234: "behind most human cat allergies"; "less a toxin evolved to attack nerves or blood"; "Much of the damage is done by the victim's own immune response" (the paper only links anaphylaxis in some people to allergen sensitivity).
- 235: "nail clippers or pliers" (pliers appear only in a quoted YouTube comment); "without anesthetic"; "Infection and blood loss kill many before they reach a buyer"; "cannot eat its natural diet or defend itself".
- 236: "The brain stem sits low ... angled into the neck"; "most of the skull"; "It also missed the jugular".
- 237: "On 17 March 1947" (the source says spring 1947); "hotel" (the source says motel).
- 238: "in the brain stem" (the source names spinal cord circuits); "flap"; "Mike was that ordinary phenomenon stretched to 18 months"; "including walking and balancing, was never consciously driven".
- 239: "wild cats grow out of"; "Adult cats living together for years"; "relying on scent and body language instead".
- 240: "without being told which is which" (implied by the playback test, not stated); "harder to ignore" (the source says less pleasant).
- 241: "the only social cat out of roughly forty species" (the source says most social).
- 242: "food per lion does not reliably improve with group size, because a kill split more ways feeds each one less"; "where prey must come to drink".
- 244: "as a surface wave that outruns the airborne version" (the paper says seismic signals "travel at different rates"); "up the leg to the middle ear" (the paper names bone conduction only as a proposed pathway).
- 245: "around 350 Hz"; "Enough of these and the rival dancer stops" (the source says the signals inhibit dancing).
- 246: "fifteen to twenty" (the source says about 15); "about 80 percent of the time" (the source says almost always); "The queen does not participate".
- 247: "Gentoos, by contrast, can exceed 90 percent"; "The difference is ... whether the species builds a nest: a fixed spot gives two birds somewhere to find each other again".
- 248: "below minus 40 Celsius"; "for roughly 65 days"; "can lose close to half his body weight"; "to the middle" (the source has birds rejoining on the leeward side and passing through the warm center).
- 249: "archosaurs" (term not used); "They are dinosaur relatives that lived while their cousins did not".
- 250: "Being ectothermic cuts food needs roughly tenfold against a mammal the same size"; "fresh water" (the source says rivers, lakes and coasts).

## Batch L: facts 251 to 275

Results: `docs/fact-sources/batchL.json`. 0 confirmed, 23 partly, 2 unconfirmed.

**Unconfirmed:**

- 251 A Species That Fits in a Town: the population figure (about 5,500 across thirteen countries, from near 100,000 a century ago); the Smithsonian tiger page has only an outdated 1,500 to 3,200 estimate and WWF's Global Tiger Forum story could not be fetched (403). Range loss and the extinct subspecies are supported.
- 252 Striped to the Skin: the stripes being in the skin, so a shaved tiger stays striped; searched the Smithsonian National Zoo and San Diego Zoo tiger pages, which cover unique stripe patterns only.

**Partly (these details could not be confirmed):**

- 253: "structurally closer to an enormous callus" (the page compares horn tissue to hooves, baleen and bird beak tips, not a callus)
- 254: "Because there is no bone in it"; "cut above the growth plate"; "repeated every couple of years"; "the horn is used for defense and in disputes"
- 255: "On the ground it cannot walk and drags itself by its front claws"; "roughly fifty times a year" (follows from weekly but is not stated); "half of sloth predation deaths" (the paper says more than half of all documented adult deaths were predation at or near the ground)
- 256: "grooves" (the paper says transverse cracks); "tints wild sloths green"; "It is contested but nothing better has replaced it"
- 257: "of any carnivore" (the page says any member of the canid family); "a dense network of shallow blood vessels"; "without panting away water it cannot spare" (the same page says extreme panting helps fennecs regulate temperature, up to 690 breaths a minute)
- 258: "go its whole life without drinking free water" (the page says long periods); "its kidneys concentrate urine"; "the air down in the den stays cooler and far more humid"; "in most of its range there is nothing to drink"
- 259: "spreads the animal's weight so it can move across a loose surface without sinking" (the page says traction); "put itself out of sight underground in a few seconds"
- 260: "Claims above nine meters have circulated for over a century without one being confirmed" (the page cites alleged sightings over 24 meters and a record 8.43 meter animal, with no time span)
- 261: "The snake tightens as its prey breathes out, so each exhalation gives away a little more room and never gets it back"; "far faster than suffocation would" (the abstract makes no comparison); the study used boas, not anacondas
- 262: "each already around half a meter long and able to swim and hunt immediately"; "There is no parental care after that"; "a big female can be several times the weight of any male" (the page says considerably larger)
- 263: "one of the most photographed frogs on Earth"
- 264: "Take that diet away and the toxicity goes with it"; "Captive-bred frogs raised on fruit flies and springtails are effectively non-toxic, which is why keeping one is possible at all and why a wild-caught animal is a completely different proposition"
- 265: "Around 170 species get called poison dart frogs"; "in a small area"; "the coating stayed effective for months"
- 266: "around 75 centimeters long and up to roughly 2.5 kilograms"; "a deep red eye"; "spends nearly all of its time walking the forest floor"; "northern" New Guinea (the page says New Guinea); "flies up mainly to roost or to get away from something"
- 267: "Each feather in it has a bare shaft for most of its length and opens into a small triangular tip of white barbs at the end"; "Two other crowned pigeon species" (the page compares it with one, the common crowned pigeon)
- 268: "protein and fat rich"; "It is not milk in any mammalian sense and contains no lactose" (the page says pigeon milk has a chemical composition similar to mammal milk); "the male through the day and the female overnight"
- 269: "up to a fifth of the mother's body weight" (the page says an average of 15 percent); "the largest egg to body ratio of any bird alive" (the page says second largest); "the ostrich, whose egg is only about 2 percent of her weight"
- 270: "up to 45 miles per hour" (the AKC gives a world record of 41.83 mph)
- 271: "arm span can stretch up to 7 feet"; "more than 95 percent of their time up in the canopy"; "Shoulder and hip joints that rotate more freely than a human's"; "largest tree-dwelling animals on Earth" (the page says mammals)
- 272: "packed with thousands of electroreceptor pores"; "find prey buried in sand or mud without ever seeing it"
- 273: "for hours"; "up to 60 percent of the oxygen they need on land"; "prop themselves up on their front fins like little arms to hop across mudflats and even climb mangrove roots"; "as long as their skin stays wet"
- 274: "about 15 kilograms"; "take marrow that other scavengers walk away from"; "which is most of how a wolverine gets through a northern winter"
- 275: "driving wolves ... off a carcass" (the chapter says wolves sometimes kill wolverines); "repeated accounts" (bear driving is cited only as reputation); "thick hide"; "no apparent reverse gear"; "a larger animal often decides the meal is not worth the trouble"; "12 to 18 kilograms" applies to adult males only (females 8 to 12)

## Batch M: facts 276 to 306

Results: `docs/fact-sources/batchM.json`. 0 confirmed, 22 partly, 3 unconfirmed.

**Unconfirmed:**

- 304 Not Actually Whiskers: the bristles are not odontodes; the 1999 Ancistrus paper (Sabaj, Armbruster and Page) says they are fleshy tentacles grown from the skin sheath around an odontode, and the cheek spines, not the tentacles, are used in fights.
- 305 Recycling Its Own Shell: no source for shrimp eating their own molt to reclaim calcium; searched Neocaridina and freshwater shrimp exuviae and calcium, found only hobbyist pages and an isopod study.
- 306 Needs Salt Water to Be Born, Dies From It as an Adult: the adult half (a small dose of salt kills an adult) is not in the 2021 Crustacean Research larval study, which supports only the larvae needing brackish to sea water; no other source found.

**Partly (these details could not be confirmed):**

- 276: "over 4 inches" (the source says up to 4 inches); "if the bird feels cornered"; "shy" and "would much rather vanish into the undergrowth than confront a person"
- 277: "pick a specific one out of a huge pile just by hearing its name" (the release says she was tested under controlled conditions but does not describe the test setup)
- 278: "the second fastest land animal on Earth after the cheetah" (the source says fastest in North America); "extinct for thousands of years"; "Scientists believe" (the source says possibly)
- 279: "rarely fatal to humans"; "one of the most damaging invasive species" (the source says they are the first invasive fish to establish in the Western Atlantic); "preying on more than 70 different reef species" (the source says they eat any fish or invertebrate that fits in their mouths)
- 280: "largest land dwelling arthropod" (the paper says largest terrestrial crustacean); "rivals a lion's bite" (no lion comparison in the paper); "Researchers measured the biggest crabs pinching with over 3,000 newtons" (the highest measured force was about 1,765 N; 3,300 N is an estimate for a 4 kg crab); "easily enough to crack open a coconut shell"
- 281: "in winter they fluff their feathers for insulation until they look like a round white snowball with a long tail stuck on the back" (the source only says it is likened to a snow fairy in winter)
- 282: "shima enaga included" (the page covers the long-tailed tit in general); "enclosed"; "moss"; "instead of the parents needing to rebuild it partway through raising a brood"; "gathered one at a time"
- 283: "Its name comes from hishaku, a long-handled ladle" (no name origin on this page; the shima enaga page on the same site says "shima" means island, for Hokkaido)
- 284: "a function of simply being a very large-headed, heavy-bodied snake" (the page does not link yield to body size); "The venom is not the most potent by weight"
- 285: "Most vipers strike, inject and let go, then track the animal down"; "prey is less likely to stagger off somewhere it cannot follow"; "what makes a bite on a person so much worse than the fang length alone suggests"
- 286: "heavy enough that the side-to-side motion most snakes use works badly for it" (the paper does not give weight as the reason); "closer to a caterpillar" (the paper compares it to earthworms)
- 287: "the world's only flightless parrot" (the source says flightless, not the only one); "unusual among parrots"; "a deep booming call that can carry for miles"; "individuals recorded living past 80 years" (the source gives a possible lifespan of 60 to 90 years)
- 288: "males often weighing 15 to 25 pounds" (the source says a mature male often reaches or exceeds 20 pounds); "measuring 40-plus inches from nose to tail"; "The longest Maine Coon on record, a cat named Stewie, measured 48.5 inches"
- 289: "14 to 18 inches long" (the source gives no length); "lick its own eyes and ears clean" (the source says reach)
- 290: "jellyfish" (the paper says cnidarian prey; its study species eats sea anemones); "Scientists are still working out exactly how it keeps the stolen stingers from firing along the way" (the open question in the paper is how the stingers are selected and stored)
- 291: "its slow metabolism lets it get by on just a few meals a year, living off fat stored in its tail"; "later helped inspire the GLP-1 medications behind Ozempic"
- 292: "the world's only alpine parrots"; "can outperform some primates in lab tests"; "stripping rubber from cars and snatching gloves, wallets, and food from tourists at ski resorts" (the source says damage to cars and buildings); "Researchers think this constant tinkering with new objects is how kea learn about their world"
- 293: "chondrodysplasia, a form of dwarfism that keeps the leg bones short while the rest of the body grows normally"; "That same long spine is why the breed is prone to disc problems later in life"
- 294: "letting them coordinate with their group without alerting nearby predators"
- 298: "the metallic stripe actually functions as camouflage, reflecting available light in a way that creates false or confusing targets" (the paper suggests the fading of the stripes in bright light may be camouflage, and does not describe reflected light or false targets); "actually" (the paper offers it as a suggestion)
- 299: "coastal saltwater lagoons" (the source says estuaries); "unusually wide range of salinities for an aquarium fish"; "sometimes just a short distance apart"
- 300: "glide the exact same way, a furred membrane stretched from wrist to ankle"; "each arriving at a similar structure through a different genetic path" (the paper studied marsupials only, and found separate gliders changed control of the same gene, Emx2)

## Batches B to N

| Batch | Facts | Status |
|---|---|---|
| B | 1 to 25 | done |
| C | 26 to 50 | done |
| D | 51 to 75 | done |
| E | 76 to 100 | done |
| F | 101 to 125 | done |
| G | 126 to 150 | done |
| H | 151 to 175 | done |
| I | 176 to 200 | done |
| J | 201 to 225 | done |
| K | 226 to 250 | done |
| L | 251 to 275 | done |
| M | 276 to 306 | done |
| N | 307 to 348 | running |
