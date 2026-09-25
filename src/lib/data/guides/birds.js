export const birdGuides = [
  {
    id: "african-grey",
    name: "African Grey Parrot",
    emoji: "🦜",
    difficulty: "Advanced",
    petType: "Birds",
    image: "/assets/guides/african-grey.jpg",
    tagline: "The parrot that learns your words, your routine, and your microwave beep!",
    seoTitle: "African Grey Parrot Care Guide: Cage, Diet, and Health",
    seoDescription: "African grey care for a bird that can outlive you: the 36x24x48 cage, a pellet-first diet, why bites happen, and the illness signs a grey hides until late.",
    funFact: "The famous grey Alex, the subject of landmark peer-reviewed research, could label 50 objects, 7 colors, and 5 shapes, count quantities up to six, and grasp the concept of 'none'.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size and lifespan come from
    // the encyclopedia entry, which no deep dive repeats. Day one and power
    // outage cite the shared bird guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 for batch C (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "At least 30 days, and up to 45, quarantined in a separate room with its own airspace, away from any bird you already own. A multi-bird household or aviary is safer nearer 90 days.", source: "bird-quarantine-guide" },
        { label: "Cage size", value: "36 wide by 24 deep by 48 inches tall is a commonly cited minimum, with some veterinary guidance recommending closer to 40 by 30 by 60. Your bird needs to be able to fully extend and flap its wings without touching the bars in any direction.", source: "african-grey-parrot-tank-setup-guide" },
        { label: "Bar spacing", value: "No more than 1 inch.", source: "african-grey-parrot-tank-setup-guide" },
        { label: "Temperature", value: "Standard household temperatures, roughly 65 to 80°F, work well. Avoid drafts and cold spots, but no special heating or cooling is needed indoors.", source: "african-grey-parrot-tank-setup-guide" },
        { label: "Placement", value: "Excellent ventilation without direct drafts, well away from the kitchen entirely, fumes from overheated non-stick cookware are genuinely deadly to birds, and safely separated from household cats or dogs.", source: "african-grey-parrot-tank-setup-guide" },
        { label: "Sleep", value: "Full-spectrum or UV lighting supports vitamin D3 and calcium metabolism. Maintain 10 to 12 hours of genuine darkness for sleep every night.", source: "african-grey-parrot-tank-setup-guide" },
        { label: "Diet", value: "Pellets make up 75 to 80% of daily intake. Fresh vegetables make up most of the remaining 20 to 25%, with fruit held to 10% or less.", source: "african-grey-parrot-feeding-guide" },
        { label: "Interaction", value: "Roughly 4 to 5 hours of genuine daily time investment to stay well-adjusted. This isn't a bird that thrives on occasional attention.", source: "african-grey-parrot-handling-guide" },
        { label: "Not eating", value: "African greys hide illness well. Call an avian vet the same day for any clear, noticeable drop in appetite or activity rather than waiting to see if it resolves on its own.", source: "african-grey-parrot-feeding-guide" },
        { label: "Budget", value: "$500 to $1,500 to set up. Roughly $50 to $100 a month ongoing. An annual avian wellness exam runs $150 to $300.", source: "african-grey-parrot-cost-guide" },
        { label: "Adult size", value: "13 inches; 14 to 21 oz." },
        { label: "Lifespan", value: "Mean 45 years in captivity, with some individuals reaching 60 and exceptional cases living 70 to 80 years, compared to about 23 years in the wild.", source: "african-grey-parrot-cost-guide" },
        { label: "Power outage", value: "Keep feeding and watering through an outage rather than pulling food the way you would for a reptile; an African grey carries far less fat reserve than its size suggests. The real danger is combustion, not cold: no candles, gas heat, or a generator run anywhere near the bird's room.", source: "bird-emergency-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "african-grey-parrot-health-issues-guide",
      callNow: [
        "Muscle tremors, weakness, or seizures (hypocalcemia)",
        "Labored breathing, sneezing, lethargy, and weight loss (aspergillosis)",
        "Tail-bobbing, wheezing, nasal discharge, diarrhea, or a fluffed-up appearance (psittacosis)",
        "Abnormal feather growth with progressive immune failure (PBFD)",
      ],
      vetLine: "An avian vet, found before you need one. A seizure is an emergency: get to a vet immediately for injectable calcium. Psittacosis is zoonotic and can spread to people in the household.",
    },
    routes: [
      { slug: "african-grey-parrot-cost-guide", line: "$1,000 to $4,000 for the bird, $500 to $1,500 for the setup, and why the lifespan changes the entire budgeting picture." },
      { slug: "african-grey-parrot-tank-setup-guide", line: "Cage size and placement, the temperature range, and why enrichment isn't optional for this species." },
      { slug: "african-grey-parrot-feeding-guide", line: "The pellet-first diet, why grit isn't needed, toxic foods, and the honest list of reasons a grey stops eating." },
      { slug: "african-grey-parrot-handling-guide", line: "Just how intelligent Alex really was, why the bites happen, and how this species compares to smaller parrots." },
      { slug: "african-grey-parrot-health-issues-guide", line: "Hypocalcemia, feather-destructive behavior, aspergillosis, psittacosis, and PBFD, with what causes each." },
      { slug: "african-grey-parrot-enrichment-guide", line: "The foraging studies that actually measured an outcome, and why a food bowl is the enemy of this species' wellbeing." },
      { slug: "african-grey-parrot-legal-guide", line: "CITES Appendix I explained, the captive-breeding exemption that keeps ownership legal, and Vermont's one real ban." },
    ],
    buyList: [
      "36x24x48 inch cage or larger",
      "Multiple perches of varied diameters and textures",
      "Full-spectrum UVB light",
      "Foraging and puzzle toys",
      "Sleep cage or covered area",
      "Misting bottle or shower perch",
      "High-quality parrot pellets",
      "Fresh vegetables and limited fruit",
      "A gram scale",
    ],
    faqs: [
      { q: "How intelligent are African grey parrots?", a: "Very. Alex, the grey at the center of the landmark peer-reviewed work, labeled 50 objects, 7 colors, and 5 shapes, counted quantities to six, and grasped the concept of none." },
      { q: "What is the most common health issue in African grey parrots?", a: "Hypocalcemia, low blood calcium. Veterinary sources call it the most common cause of central nervous system disease in greys, and the signs are muscle tremors, weakness, and seizures in serious cases." },
      { q: "Is an African grey a reasonable first parrot?", a: "For most people, no. This is a long-lived, highly intelligent species with a documented vulnerability to feather-damaging behavior when under-occupied, and the enrichment workload is a daily commitment rather than a one-time purchase." },
    ],
  },
  {
    id: "budgie",
    name: "Budgie / Parakeet",
    emoji: "🐦",
    difficulty: "Beginner",
    petType: "Birds",
    image: "/assets/guides/budgie.jpg",
    tagline: "The cheerful little chatterbox that picks up phrases you never taught it!",
    seoTitle: "Budgie Care Guide: Cage Setup, Feeding, and Health",
    seoDescription: "Budgie care done right from week one: why a wide cage beats a tall one, the pellet share of the diet, taming step by step, and the signs that need a vet today.",
    funFact: "Budgies can learn to talk and have been known to learn over 1,700 words! The Guinness World Record holder was a budgie named Puck who knew 1,728 words, more than any other bird on record!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size and lifespan come from
    // the encyclopedia entry, which no deep dive repeats. Day one and power
    // outage cite the shared bird guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 after the budgie set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "At least 30 days, and up to 45, quarantined in a separate room with its own airspace, away from any bird you already own. A multi-bird household or aviary is safer nearer 90 days.", source: "bird-quarantine-guide" },
        { label: "Enclosure", value: "18x18x18 inches is the figure often cited as an absolute minimum for one bird, but a wider flight-style cage serves them far better, something closer to 30x18x18 inches for a pair. Width matters more than height, since budgies fly side to side rather than climbing.", source: "budgie-tank-setup-guide" },
        { label: "Bar spacing", value: "Half an inch or less. Wider spacing risks a bird squeezing through and escaping, or getting its head caught trying.", source: "budgie-tank-setup-guide" },
        { label: "Diet", value: "Pellets should make up roughly 60 to 80% of the diet, with fruit, vegetables, and greens at another 20 to 25%, and seeds treated as an occasional extra. A seed-only diet is directly linked to malnutrition, obesity, and fatty liver disease.", source: "budgie-tank-setup-guide" },
        { label: "Temperature", value: "A practical ambient range is about 65 to 85°F, with 70 to 75°F ideal. Budgies have no sweat glands and are more heat-sensitive than that range might suggest.", source: "budgie-tank-setup-guide" },
        { label: "Handling", value: "Give a new bird a week or two to settle before any taming. Then work through hand-in-the-cage, millet from the fingers, and step-up training, in that order, moving on only once the bird is calm at the current step.", source: "budgie-handling-guide" },
        { label: "Sexing", value: "Adult males typically show a blue to purple-blue cere, adult females a tan, brown, or pale white one. Juveniles of both sexes show pink or pale purple until it settles into adult color, usually between 6 and 12 months.", source: "budgie-cere-color-guide" },
        { label: "Budget", value: "$20 to $80 for the bird, $175 to $475 for a complete starter setup, and first-year totals (including the bird) commonly $350 to $900. Food runs $5 to $15 a month, toys and perches $10 to $30.", source: "budgie-cost-guide" },
        { label: "Adult size", value: "7 inches (18 cm); 1 to 1.4 oz." },
        { label: "Lifespan", value: "Not well documented in the wild; typically 7 to 15 years in captivity, with the oldest documented individual living 29 years, 2 months." },
        { label: "Zoonotic risk", value: "Psittacosis, caused by Chlamydia psittaci, is zoonotic, meaning it can spread to people. Signs include respiratory symptoms, diarrhea, weakness, and an enlarged liver. If your budgie shows these signs, mention the possibility to your vet directly, and keep any newly introduced bird separate from the rest of your flock while you watch for signs like these.", source: "budgie-health-issues-guide" },
        { label: "Power outage", value: "Keep feeding and watering through an outage rather than pulling food the way you would for a reptile; a budgie carries almost no fat reserve. The real danger is combustion, not cold: no candles, gas heat, or a generator run anywhere near the bird's room.", source: "bird-emergency-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "budgie-health-issues-guide",
      callNow: [
        "Fluffed-up feathers combined with sleeping during the day",
        "Tail-bobbing with each breath",
        "Open-mouth breathing",
        "Sitting on the floor of the cage instead of perching",
      ],
      vetLine: "An avian vet, found before you need one. Budgies mask illness well, so any of the above means a vet within 24 hours, not a few days of watching and waiting.",
    },
    routes: [
      { slug: "budgie-cost-guide", line: "$20 to $80 for the bird, $175 to $475 for a starter setup, and the avian vet costs most owners underestimate." },
      { slug: "budgie-tank-setup-guide", line: "The 18x18x18 minimum, why width beats height, bar spacing, and the pellet-first diet." },
      { slug: "budgie-handling-guide", line: "Letting a new bird settle, the taming progression from hand-in-cage to step-up, and why punishing a bite backfires." },
      { slug: "budgie-health-issues-guide", line: "Fatty liver disease, the tumor that can look like a limp, egg binding, and the signs that mean a vet the same day." },
      { slug: "budgie-feeding-guide", line: "How much of the diet is pellets, the iodine deficiency budgies are prone to and the breathing sound it makes, and why grit is a risk." },
      { slug: "budgie-enrichment-guide", line: "Foraging first, destructible toys, and the difference between a resting bird and a bored one." },
      { slug: "budgie-cere-color-guide", line: "Reading the cere to sex a budgie, and when a color change means more than hormones." },
    ],
    buyList: [
      "18x18x18 inch cage or larger, wider rather than taller",
      "Perches of varied diameters and textures, plus a swing",
      "Cuttlebone or mineral block",
      "High-quality small parrot pellets",
      "Fresh vegetables",
      "Foraging toys and puzzle feeders",
      "Shreddable and chew toys",
      "Food and water dishes",
      "Nail clippers",
      "Cage cover for nighttime darkness",
    ],
    faqs: [
      { q: "How much does a budgie itself cost?", a: "$20 to $80. It's the cheapest part of ownership, the cage and long-term avian vet care are where the budget goes." },
      { q: "Is a budgie the same thing as a parakeet?", a: "Yes, in the way most people in the US use the word. 'Parakeet' is a broad, non-scientific term for a large group of small to medium parrots with long tail feathers, and the budgerigar (Melopsittacus undulatus), the bird this guide covers, is just one species within that group, though it's by far the most commonly kept one. So every budgie is a parakeet, but not every parakeet is a budgie, ring-necked and monk parakeets are different species entirely. When a US pet store sells a bird simply labeled 'parakeet' with no other name attached, it's almost always a budgie." },
      { q: "What size cage does a budgie need?", a: "18x18x18 inches is the figure usually cited as an absolute minimum for one bird, but a wide flight-style cage serves them far better, nearer 30x18x18 for a pair. Width beats height, since budgies fly side to side rather than climbing." },
      { q: "What are the signs a budgie needs to see a vet the same day?", a: "Fluffed feathers plus daytime sleeping, tail-bobbing with each breath, open-mouth breathing, or sitting on the cage floor instead of perching. Budgies mask illness well, so any of those means a vet within 24 hours, not a few days of watching." },
    ],
  },
  {
    id: "canary",
    name: "Canary",
    emoji: "🐦",
    difficulty: "Beginner",
    petType: "Birds",
    image: "/assets/guides/canary.jpg",
    tagline: "The tiny opera singer that would rather be heard than held!",
    seoTitle: "Canary Care Guide: Cage, Diet, and Song",
    seoDescription: "Canary care for a look-and-listen bird: why cage width beats height, the air-quality rule that keeps it alive, diet, and what a silent male is telling you.",
    funFact: "Only male canaries sing (with rare exceptions), and their song is directly tied to testosterone and daylight length. Centuries of selective breeding have produced distinct song 'breeds,' like the Roller canary, bred specifically for the complexity, tone, and softness of its song rather than for appearance.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, household hazards, pellet
    // conversion, and sleep and droppings cite the shared bird guides in the
    // sidebar's Health and More list. Rewritten to the template shape
    // 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). This species has no feeding
    // guide, so the diet rows point at the tank setup guide's Diet Basics
    // section, added in the same pass. Built 2026-09-14 for the canary set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Cage size and shape", value: "24 by 18 by 18 inches is a reasonable minimum, but width matters more than height: canaries fly horizontally. Leave the middle open as a flight path. Bar spacing half an inch or less.", source: "canary-tank-setup-guide" },
        { label: "Perches", value: "Varied diameter and natural branch, sited at the ends so the flight path stays clear. Uniform dowel holds the foot in one position all day, which is how pressure sores start. No sandpaper covers.", source: "canary-enrichment-guide" },
        { label: "Temperature and light", value: "65 to 80°F, 65 to 75°F ideal, away from drafts, vents, and radiators. Bright indirect light with the day length following the season, and no direct sun on the cage.", source: "canary-tank-setup-guide" },
        { label: "Air quality", value: "Non-stick cookware fumes, aerosols, and smoke can kill a canary. The cage stays well away from the kitchen.", source: "canary-tank-setup-guide" },
        { label: "Cage lining and bath", value: "A paper liner spot-cleaned daily and changed weekly, on powder-coated steel, never galvanized or lead-painted parts. A shallow bath, which they use.", source: "canary-tank-setup-guide" },
        { label: "Diet", value: "Seed alone is deficient in vitamins, minerals, protein, and calcium. A canary pellet as about three quarters of the diet, seed a small part, fresh fruit and vegetables daily, egg food through molt and breeding, and a cuttlebone. No grit needed.", source: "canary-tank-setup-guide" },
        { label: "How much", value: "Up to 30% of body weight a day, which for a 12 to 30 gram bird is a small measured amount, not a heaped dish.", source: "canary-tank-setup-guide" },
        { label: "Why he sings", value: "An unpaired male sings constantly; a mate greatly reduces it. Song volume is not a welfare readout. Two males fight; a pair, a group of females, or a single bird in a good flight cage all work.", source: "canary-enrichment-guide" },
        { label: "Handling", value: "A look-and-listen bird, not one to train to step up. The only handling it needs is a vet's, and the catch is done in the dark with the perches out.", source: "canary-handling-guide" },
        { label: "Sexing before you buy", value: "Only mature males from around 6 months develop full song; females chirp. Confirm the sex with the seller if you want a singer.", source: "canary-handling-guide" },
        { label: "A male gone quiet", value: "Most stop singing during the summer molt. Silence outside the molt runs the list: new environment, stress, health.", source: "canary-handling-guide" },
        { label: "Budget", value: "$25 to $60 for a common yellow, $80 to $150 for a Red Factor, $100 to $250 or more for a song breed, males 20 to 50% more. Setup roughly $150 to $275, then $10 to $30 a month, and $50 to $100 for an annual avian exam.", source: "canary-cost-guide" },
        { label: "Lifespan", value: "6 to 12 years, up to 15 reported.", source: "canary-cost-guide" },
        { label: "Adult size", value: "4.5 to 5 inches (11 to 13 cm), 12 to 30 grams." },
        { label: "Quarantine", value: "At least 30 days, 30 to 45 in a separate isolated room, with the established birds cared for first every day and the new bird last.", source: "bird-quarantine-guide" },
        { label: "Household fumes", value: "PTFE coatings release toxic gas above 280°C (536°F), which an empty pan on a hot burner reaches in minutes, before anything looks or smells wrong.", source: "bird-household-hazards-guide" },
        { label: "Seed to pellets", value: "Gradual: 75% seed and 25% pellets for 3 days, 50/50 for 3 days, then 25% seed until converted. Weigh daily; a drop past 10% means stop and call an avian vet.", source: "bird-pellet-conversion-guide" },
        { label: "Sleep and droppings", value: "10 to 12 hours of dark, uninterrupted sleep, since a lit-up evening reads as endless summer and drives egg laying. Plain white paper in the tray, swapped daily, so dropping changes show.", source: "bird-photoperiod-sleep-guide" },
      ],
    },
    emergencyCard: {
      source: "canary-health-issues-guide",
      callNow: [
        "A loss of song in a previously singing male",
        "Fluffed or dull feathers",
        "General lethargy",
        "Open-mouth breathing, clicking or wheezing sounds",
        "Ruffled feathers with discharge and labored breathing",
        "Crusty, roughened buildup around the beak, eyes, legs, and feet",
        "Bald patches, nighttime itching, or feather-picking: mites, a diet gap, boredom, or stress, with a vet first",
      ],
      vetLine: "A canary that stops singing, shows fluffed or dull feathers, or becomes generally lethargic is signaling something's wrong, well before more specific symptoms might appear. Paying attention to these early, general signs matters more than waiting for a specific symptom to confirm what's going on.",
    },
    routes: [
      { slug: "canary-cost-guide", line: "$25 to $500 depending on what you are buying it for, the setup, and the one question to ask a seller before paying." },
      { slug: "canary-tank-setup-guide", line: "Why width beats height, half-inch bars, 65 to 80°F, the air-quality rule, and what a canary actually eats." },
      { slug: "canary-feeding-guide", line: "One to two teaspoons a day, mostly pellets, produce as a quarter, egg food through the molt, a cuttlebone and no grit." },
      { slug: "canary-handling-guide", line: "Why this is a look and listen bird, what a silent male means in July against any other month, and the dark catch." },
      { slug: "canary-health-issues-guide", line: "Air-sac mites, scaly face and leg mites, red mites, respiratory infection, and the early signs that come first." },
      { slug: "canary-enrichment-guide", line: "What the song research says about a constantly singing male, flight distance, perches, and the corticosterone finding." },
    ],
    buyList: [
      "Wide flight cage, at least 24 by 18 by 18 inches, bar spacing half an inch or less, powder-coated steel",
      "Natural wood perches of varied diameter",
      "Shallow bird bath",
      "Cuttlebone",
      "Pellets formulated for canaries, plus a little seed",
      "Fresh greens and vegetables",
      "Egg food for molt and breeding season",
      "Plain white paper for the cage tray",
      "Cage cover, which darkens the cage for sleep but does nothing about a noisy room",
      "Gram scale",
      "Avian veterinarian contact",
    ],
    faqs: [
      { q: "What size and shape cage does a canary need?", a: "24 by 18 by 18 inches is a reasonable minimum, but the shape counts for more than the dimensions. Canaries fly horizontally rather than climbing, so a wide, long flight cage suits them far better than a tall, narrow one built for a climbing bird." },
      { q: "Does more singing mean a happier canary?", a: "Not reliably. In canaries, the absence of a potential mate increases the number of songs produced, and the presence of a mate greatly reduces singing. Song is a signaling behavior with a function, and reading its volume as a contentment score gets it backwards as often as not." },
      { q: "I bought a canary for its singing and it's quiet, what happened?", a: "There's a good chance you have a female. This is worth confirming the sex with your seller directly if song was the whole point of the purchase." },
    ],
  },
  {
    id: "cockatiel",
    name: "Cockatiel",
    emoji: "🦜",
    difficulty: "Beginner",
    petType: "Birds",
    image: "/assets/guides/cockatiel.jpg",
    tagline: "The crested whistler that will learn your ringtone and improve on it!",
    seoTitle: "Cockatiel Care Guide: Cage, Feeding, and Handling",
    seoDescription: "A cockatiel settles in on your patience: the 20x20x30 cage floor, a pellet-first diet, trust before the step-up, reading the crest, and the kitchen danger.",
    funFact: "Cockatiels are masters of mimicry. Males especially love to learn whistled tunes and will serenade you (and any reflective surface) for hours. Many can even learn short phrases!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Day one and power
    // outage cite the shared bird guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 after the cockatiel set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "At least 30 days, and up to 45, quarantined in a separate room with its own airspace, away from any bird you already own. A multi-bird household or aviary is safer nearer 90 days.", source: "bird-quarantine-guide" },
        { label: "Enclosure", value: "Reference tables put the minimum near 20 by 20 by 30 inches for one bird, and many keepers go to 24 by 24 by 30 for easier movement. Width matters more than height, since cockatiels are horizontal flyers.", source: "cockatiel-tank-setup-guide" },
        { label: "Bar spacing", value: "Half an inch or smaller. Wider spacing creates a genuine and avoidable risk of head entrapment.", source: "cockatiel-tank-setup-guide" },
        { label: "Sleep", value: "10 to 12 hours of quiet, dark sleep every night. Cockatiels are prone to night frights, sudden panicked flapping in the dark, so a cage cover or a small night light can help prevent injuries during these episodes.", source: "cockatiel-tank-setup-guide" },
        { label: "Diet", value: "Pellets should make up roughly 75 to 80% of daily intake, with fresh vegetables and fruit filling no more than another 20 to 25% and seeds kept to a small minority. All-seed diets are a well-documented cause of malnutrition in pet cockatiels.", source: "cockatiel-feeding-guide" },
        { label: "Feeding style", value: "Free-choice, not scheduled: refresh the base pellet bowl in the morning when they're hungriest and top it up if it empties before evening, it should never sit empty for long.", source: "cockatiel-feeding-guide" },
        { label: "Handling", value: "Give a new bird 7 to 14 days with no handling attempts. Build trust with treats through the bars, then a hand inside the cage, before offering a flat palm (not a single finger) for step-up training, in sessions of 10 to 15 minutes.", source: "cockatiel-handling-guide" },
        { label: "Budget", value: "$75 to $250 for the bird, $320 to $860 for a complete starter setup, and $200 to $350 a year after that. An initial or annual avian exam runs $85 to $200; reproductive emergencies like egg binding can run $300 to $800 or more.", source: "cockatiel-cost-guide" },
        { label: "Adult size", value: "12 to 13 inches (30 to 33 cm) including tail; 2.5 to 3.5 oz." },
        { label: "Lifespan", value: "Typically 12 to 15 years, and up to about 25 has been reported, so budget for the long end.", source: "cockatiel-cost-guide" },
        { label: "Zoonotic risk", value: "Psittacosis, caused by Chlamydia psittaci, is zoonotic, meaning it can pass to people in the household.", source: "cockatiel-health-issues-guide" },
        { label: "Power outage", value: "Keep feeding and watering through an outage rather than pulling food the way you would for a reptile; a small bird carries almost no fat reserve. The real danger is combustion, not cold: no candles, gas heat, or a generator run anywhere near the bird's room.", source: "bird-emergency-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "cockatiel-health-issues-guide",
      callNow: [
        "Discharge from the eyes, nose, or mouth",
        "Bleeding",
        "Changes in droppings",
        "Sitting on the cage floor instead of perching",
        "Persistently fluffed feathers",
        "Tail-bobbing or labored breathing",
        "Any sudden change in appetite or behavior",
      ],
      vetLine: "An avian vet, found before you need one. Cockatiels hide illness so effectively that these signs usually mean the problem is already advanced, so none of them should wait.",
    },
    routes: [
      { slug: "cockatiel-cost-guide", line: "$75 to $250 for the bird, $320 to $860 for a starter setup, and the avian vet cost that catches people off guard." },
      { slug: "cockatiel-tank-setup-guide", line: "The 20x20x30 minimum, why width beats height, bar spacing, and the kitchen danger worth repeating." },
      { slug: "cockatiel-handling-guide", line: "Building trust before you touch, the flat-palm step-up, and reading a stressed versus comfortable crest." },
      { slug: "cockatiel-health-issues-guide", line: "Nutritional disease, reproductive disease, the kitchen danger, and the signs that mean an avian vet now." },
      { slug: "cockatiel-feeding-guide", line: "Pellets as 75 to 80% of the bowl, how much fresh food belongs beside them, the foods to avoid, and the reasons a cockatiel goes off food." },
      { slug: "cockatiel-enrichment-guide", line: "What two real studies found, why foraging comes first, and a priority order for everything else." },
    ],
    buyList: [
      "20x20x30 inch cage or larger, wider rather than taller (24x24x30 for easier movement)",
      "Perches of varied diameter and texture",
      "Food and water dishes",
      "Cuttlebone or mineral block",
      "Foraging and shreddable toys",
      "Nightlight or cage cover (night frights)",
    ],
    faqs: [
      { q: "How much does a cockatiel cost upfront?", a: "The bird itself runs $75 to $250 depending on color mutation, with normal grey typically the cheapest. A complete starter setup, cage, perches, dishes, and toys, brings most first-time owners to $320 to $860 total." },
      { q: "What size cage does a cockatiel need?", a: "Reference tables put the minimum near 20 by 20 by 30 inches for one bird, and many keepers go to 24 by 24 by 30 for easier movement. Width matters more than height, since cockatiels are horizontal flyers." },
      { q: "What symptoms mean I should call an avian vet right away?", a: "Discharge from the eyes, nose, or mouth, bleeding, a change in droppings, sitting on the cage floor instead of perching, feathers fluffed for long stretches, tail-bobbing or labored breathing, or any sudden shift in appetite or behavior. Cockatiels hide illness so effectively that these signs usually mean the problem is already advanced, so none of them should wait." },
    ],
  },
  {
    id: "cockatoo",
    name: "Cockatoo",
    emoji: "🦜",
    difficulty: "Advanced",
    petType: "Birds",
    image: "/assets/guides/cockatoo.jpg",
    tagline: "The feathered drama major that loves you loudly and forever!",
    seoTitle: "Cockatoo Care Guide: Cage, Diet, and Behavior",
    seoDescription: "Before a cockatoo comes home: the 36x24x48 cage floor, the over-bonding trap, why they scream and pluck, the diet that prevents fatty liver, and state laws.",
    funFact: "Cockatoos are considered the most affection-dependent parrots in aviculture. In the wild they maintain near-constant physical contact with their flock and mate, and a captive cockatoo often expects the same level of contact from its owner - which is exactly why the species has one of the highest rates of severe feather-plucking and behavioral problems of any commonly kept parrot when that need isn't met.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Day one and power
    // outage cite the shared bird guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 after the cockatoo set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "At least 30 days, and up to 45, quarantined in a separate room with its own airspace, away from any bird you already own. A multi-bird household or aviary is safer nearer 90 days.", source: "bird-quarantine-guide" },
        { label: "Enclosure", value: "36 inches wide by 24 inches deep by 48 inches tall is a commonly cited minimum, with many avian vets recommending closer to 48 by 48 by 60 inches as a genuinely comfortable size. Bigger is always better with this species.", source: "cockatoo-tank-setup-guide" },
        { label: "Bar spacing", value: "Three-quarters of an inch to 1 inch for large cockatoos. Secure, genuinely escape-proof locks matter more here than with most birds, cockatoos are notorious escape artists with the intelligence and strength to work out standard latches.", source: "cockatoo-tank-setup-guide" },
        { label: "Cage material", value: "Stainless steel is the gold standard, rust-proof and able to withstand a beak this powerful for decades. Heavy-gauge powder-coated steel is an acceptable, more affordable alternative. Avoid galvanized or zinc-coated cages entirely, a bird that chews the bars risks metal toxicity from that coating.", source: "cockatoo-tank-setup-guide" },
        { label: "Sleep", value: "10 to 12 hours of genuine darkness and quiet for sleep every night. Sleep deprivation in this species measurably worsens screaming and other behavioral issues.", source: "cockatoo-tank-setup-guide" },
        { label: "Diet", value: "Pellets should make up 75 to 80% of daily intake, fresh vegetables most of the remaining 20 to 25%, fruit a smaller share, and seeds under about 10%, kept to high-fat treats rather than the foundation.", source: "cockatoo-feeding-guide" },
        { label: "Bonding", value: "Avoid over-bonding in the first weeks, it cements an anxious dependency rather than a healthy one. Real engagement with this species means 4 to 6 hours of interaction most days, not an occasional check-in, but consistent shoulder and lap time can itself become the problem if a cockatoo forms a pair bond with one person.", source: "cockatoo-handling-guide" },
        { label: "Budget", value: "$700 to $3,000 for common species (rarer species run higher), $880 to $1,800 for a complete setup, mostly the cage, and $20 to $50 a month for food after that. Toy replacement is the bigger recurring cost, since cockatoos destroy wooden toys fast.", source: "cockatoo-cost-guide" },
        { label: "Adult size", value: "18 inches (46 cm); 1.1 to 1.7 lbs." },
        { label: "Lifespan", value: "40 to 60 years is typical, with some individuals living into their 70s or beyond.", source: "cockatoo-cost-guide" },
        { label: "Disease risk", value: "Psittacine beak and feather disease is incurable, often fatal, and highly contagious. Confirm with a vet through PCR testing, and quarantine any new bird before it meets an established one.", source: "cockatoo-health-issues-guide" },
        { label: "Power outage", value: "Keep feeding and watering through an outage rather than pulling food the way you would for a reptile; a bird carries far less fat reserve than its size suggests. The real danger is combustion, not cold: no candles, gas heat, or a generator run anywhere near the bird's room.", source: "bird-emergency-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "cockatoo-health-issues-guide",
      callNow: [
        "Over-preening to bare skin, or in serious cases, self-mutilation",
        "Abnormal or clubbed feathers, or a beak that looks glossy from lost powder-down",
        "Beak deformity",
        "A sudden change in a previously stable bird's vocal or behavioral pattern",
        "An enlarged liver, or changes in beak or nail keratin",
      ],
      vetLine: "An avian vet, found before you need one. Always start with a vet visit to rule out a medical cause before assuming plucking or screaming is purely behavioral, and confirm PBFD with a vet through PCR testing.",
    },
    routes: [
      { slug: "cockatoo-cost-guide", line: "$700 to $3,000 for the bird, $880 to $1,800 for setup, and the lifespan number that should drive the whole decision." },
      { slug: "cockatoo-handling-guide", line: "Why cockatoos get surrendered so often, the over-bonding trap, and the 4 to 6 hour daily reality." },
      { slug: "cockatoo-health-issues-guide", line: "Feather-destructive behavior, PBFD, lipomas, fatty liver disease, and when a behavior change means the vet." },
      { slug: "cockatoo-tank-setup-guide", line: "The 36x24x48 minimum, stainless steel versus powder-coated, bar spacing, and sleep." },
      { slug: "cockatoo-screaming-feather-plucking-explained", line: "The research behind why cockatoos scream and pluck, and what actually helps versus what doesn't." },
      { slug: "cockatoo-feeding-guide", line: "The 75 to 80% pellet ratio, the toxic food list, and the mistakes that lead to fatty liver disease." },
      { slug: "cockatoo-enrichment-guide", line: "What the research actually supports, foraging to fill the gap a bowl leaves, and destruction done deliberately." },
      { slug: "cockatoo-legal-guide", line: "State by state, including the states that treat an endangered species as off-limits regardless of a permit." },
    ],
    buyList: [
      "Large stainless steel cage, or a heavy-gauge powder-coated alternative",
      "Escape-proof, cockatoo-specific locks",
      "Perches, bowls, and dishes",
      "Destructible foraging toys (wood, cardboard, palm fiber)",
      "A play gym",
      "An air purifier",
      "Formulated large-parrot pellets",
    ],
    faqs: [
      { q: "How much does a cockatoo cost to buy?", a: "$700 to $3,000 for common species like Goffin's, Galah, and Umbrella cockatoos, with Umbrella cockatoos commonly running $1,000 to $3,000. Moluccan cockatoos typically run $1,400 to $3,500, and rarer species like the palm cockatoo can reach $2,000 to $16,000 or more." },
      { q: "What size cage does a cockatoo need?", a: "36 by 24 by 48 inches is the commonly cited minimum, and many avian vets recommend closer to 48 by 48 by 60 as a comfortable size. Bigger is always better with this species." },
      { q: "Why are cockatoos so often surrendered?", a: "The demands outrun what most owners signed up for. One parrot behavior consultant reports that cockatoos are among the most consistently relinquished parrots, and that over half her clients own one. Rescue organizations describe the same pattern." },
    ],
  },
  {
    id: "conure",
    name: "Green Cheek Conure",
    emoji: "🦜",
    difficulty: "Intermediate",
    petType: "Birds",
    image: "/assets/guides/conure.jpg",
    tagline: "The clownish, cuddly little conure that never stops entertaining!",
    seoTitle: "Green Cheek Conure Care Guide: Cage, Diet, and Health",
    seoDescription: "Green cheek conure care that starts with quarantine: cage and room setup, pellets over seed, why most beak contact is balance, and the diseases new birds carry.",
    funFact: "Green cheek conures are notorious for learning to hang upside down, play dead, and roll over on command. They're often called the 'class clown' of the parrot world and learn tricks faster than almost any other small parrot!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Day one, pellet
    // conversion, and power outage cite the shared bird guides in the
    // sidebar's Health and More list. Rewritten to the template shape
    // 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). This species has no feeding guide of
    // its own, so the pellet conversion row is where a new owner finds the
    // seed-to-pellet schedule. Reconciled 2026-09-09 for batch D
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "At least 30 days quarantined in a separate room with its own airspace. Thirty is the floor, 30 to 45 the published range, and nearer 90 in a multi-bird household.", source: "bird-quarantine-guide" },
        { label: "Cage size", value: "24x24x30 inches is the common minimum for a single adult, a floor: aim for 30 to 36 inches or more, or a flight cage. The bird should stretch and flap without touching the sides. Bar spacing 1/2 to 5/8 inch.", source: "conure-tank-setup-guide" },
        { label: "Temperature", value: "65 to 80°F, off drafts and vents, no sudden swings, no supplemental heat.", source: "conure-tank-setup-guide" },
        { label: "Lighting and sleep", value: "An avian full-spectrum bulb 10 to 12 hours daily for vitamin D, and the cage covered at night for 10 to 12 hours of real darkness on a consistent photoperiod.", source: "conure-tank-setup-guide" },
        { label: "Cage bottom", value: "A grate over paper or a liner, cleaned daily. No corn cob or wood chips, which are eaten or mold.", source: "conure-tank-setup-guide" },
        { label: "Placement", value: "A family living area with one side against a wall, and well away from the kitchen, where non-stick fumes and heat both kill.", source: "conure-tank-setup-guide" },
        { label: "Out-of-cage time", value: "Several hours of supervised free time daily, essential rather than optional.", source: "conure-tank-setup-guide" },
        { label: "Diet", value: "A quality pellet alongside fresh vegetables, not a seed bowl. An all-seed, high-fat diet is the root of both fatty liver disease and vitamin A deficiency, the most preventable chronic illness in this species.", source: "conure-health-issues-guide" },
        { label: "Pellet conversion", value: "Gradual, never abrupt: 75% seed and 25% pellets for 3 days, 50/50 for 3 days, then 25% seed until converted, or a daily taper from 90% seed to 0% on day 10. It can take days or months.", source: "bird-pellet-conversion-guide" },
        { label: "Water", value: "Available at all times, in dishes washed daily with soap and water.", source: "conure-feeding-guide" },
        { label: "Feeding style", value: "Wild parrots spend a large share of the waking day working for food; a full bowl is done in minutes, and most behavior problems grow in that empty stretch. Loud, disproportionately, and no enrichment fixes that. Alone works only with a very involved owner.", source: "conure-enrichment-guide" },
        { label: "Handling", value: "Nippiness runs highest in birds under one to two years and in hormonal adults. Pinned eyes, a flared tail, or lunging come before the bite.", source: "conure-handling-guide" },
        { label: "Sexing", value: "Green cheeks are monomorphic, so no visual test works. DNA testing if you need to know.", source: "conure-handling-guide" },
        { label: "Budget", value: "$250 to $700 or more for the bird, roughly $230 to $470 to set up, $360 to $780 a year after, and $80 to $160 for a wellness exam.", source: "conure-cost-guide" },
        { label: "Adult size", value: "10 inches (25 cm) including tail; 2-2.5 oz." },
        { label: "Lifespan", value: "20 to 25 years or more, some reaching 30. Plan around that: the captive average of nearer 10 years reflects poor diet and neglect.", source: "conure-cost-guide" },
        { label: "Disease risk", value: "PBFD, PDD, and polyomavirus are contagious through new birds and shared equipment, and most have no reliable cure. Quarantine is the defense.", source: "conure-health-issues-guide" },
        { label: "Power outage", value: "Keep feeding and watering through it; a small bird carries almost no fat reserve. The danger is combustion, not cold: no candles, propane, or gas stove for heat in the bird's room, and never an indoor generator.", source: "bird-emergency-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "conure-health-issues-guide",
      callNow: [
        "Difficulty breathing",
        "An inability to perch",
        "Severe lethargy",
        "Seizures",
        "Significant bleeding",
        "A sudden refusal to eat",
      ],
      vetLine: "An avian vet, found before you need one. Annual wellness exams remain the best early-warning system for this species, birds are good at masking illness until it's fairly advanced. A respiratory infection can progress quickly, so treat it as potentially serious and see a vet promptly.",
    },
    routes: [
      { slug: "conure-cost-guide", line: "$250 to $700+ for the bird, what a full setup runs, avian vet pricing, and why the lifespan is the biggest cost driver." },
      { slug: "conure-tank-setup-guide", line: "Cage size and bar spacing, temperature and humidity, UV lighting, perches, and the safety list for a room a bird flies in." },
      { slug: "conure-handling-guide", line: "Why most beak contact is balance rather than biting, building trust with a step-up cue, and why you cannot sex one by looking." },
      { slug: "conure-health-issues-guide", line: "Fatty liver and vitamin A deficiency, feather-destructive behavior, respiratory infection and aspergillosis, and the viruses to know." },
      { slug: "conure-feeding-guide", line: "How much of the diet is pellets, what the fresh share should be, the four things an all-seed diet breaks, and the foods that are toxic." },
      { slug: "conure-enrichment-guide", line: "The parrot foraging studies that measured an outcome, why a food bowl is the problem, and the priority order to work through." },
    ],
    buyList: [
      "24x24x30 inch cage or larger, 30 to 36 inches preferred",
      "Perches of varied diameters, natural wood, rope, and a concrete or grooming perch",
      "Foraging and shreddable toys",
      "Snuggle pouch or bird tent",
      "Full-spectrum avian UV lighting and fixture",
      "Dishes, water bottle, cage cover, and cuttlebone",
      "High-quality small parrot pellets",
      "Fresh vegetables and limited fruit",
      "Newspaper or a cage liner for the cage bottom",
    ],
    faqs: [
      { q: "How much does a green cheek conure cost?", a: "$250 to $500 from a breeder for a normal (green) color, with common listings around $275 to $400. Common morphs like Pineapple, Yellow-Sided, and Cinnamon run $350 to $600, and high-red or combination morphs can reach $450 to $700 or more. Pet store pricing is often $600 to $1,300, noticeably higher than buying direct from a breeder for what you get." },
      { q: "What size cage does a green cheek conure need?", a: "24x24x30 inches is the common minimum for one adult, and it is a floor rather than a target: go to 30 to 36 inches or more in multiple dimensions where you can. Bar spacing tops out at 1/2 to 5/8 inch, to prevent head entrapment or escape." },
      { q: "Are conures as demanding as bigger parrots?", a: "Behaviorally, close to it. They are full parrots in a small body: intelligent, social, destructive and loud for their size. Buying one expecting a budgie with more color is how conures end up rehomed." },
    ],
  },
  {
    id: "lovebird",
    name: "Lovebird",
    emoji: "❤️",
    difficulty: "Intermediate",
    petType: "Birds",
    image: "/assets/guides/lovebird.jpg",
    tagline: "The feisty, affectionate little parrot that bonds deeply with its person!",
    seoTitle: "Lovebird Care Guide: Cage, Feeding, and Handling",
    seoDescription: "Lovebird care starts with one decision: one bird or two. Then the cage floor, bar spacing as safety, why the nest box waits, and taming a defensive bird.",
    funFact: "Lovebirds mate for life in the wild and are famous for their strong pair bonds. They even feed each other and sit side-by-side for hours! This is where they got their name.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Day one and power
    // outage cite the shared bird guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 after the lovebird set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "At least 30 days, and up to 45, quarantined in a separate room with its own airspace, away from any bird you already own. A multi-bird household or aviary is safer nearer 90 days.", source: "bird-quarantine-guide" },
        { label: "Enclosure", value: "18 by 18 by 24 inches minimum for one bird, 24 by 18 by 24 for a pair, and bigger is always better. Long, horizontal cages suit lovebirds, which fly side to side rather than climbing.", source: "lovebird-tank-setup-guide" },
        { label: "Bar spacing", value: "Between three-eighths and five-eighths of an inch, half an inch ideally. Wider spacing lets a lovebird trap its head between the bars, which can be fatal.", source: "lovebird-tank-setup-guide" },
        { label: "Cage material", value: "Powder-coated or stainless steel only. Avoid homemade cages, wood components, or galvanized wire, all carry a real risk of zinc or other toxic exposure, and lovebirds chew constantly.", source: "lovebird-tank-setup-guide" },
        { label: "What to leave out", value: "No nest box or happy hut unless you're actually breeding. Nest-like furnishings, tunnel-shaped bird tents included, are one of the most common and avoidable triggers for hormonal aggression and chronic egg-laying in this species.", source: "lovebird-tank-setup-guide" },
        { label: "One bird or two", value: "A single hand-raised lovebird bonds to you and becomes tame and interactive, but needs roughly two hours of daily interaction. A bonded pair bonds to each other instead, largely ignores its keeper, and is closer to keeping a pair of finches, entertaining but rarely tame.", source: "lovebird-handling-guide" },
        { label: "Handling", value: "Territorial and aggressive when frightened or threatened, especially females and during hormonal periods. Reaching into the cage of a defensive bird is a reliable trigger; switching to exterior food dishes and stick-training avoids it.", source: "lovebird-handling-guide" },
        { label: "Budget", value: "$50 to $150 for a common color, $200 to $400 or more for rare mutations. Roughly $300 for a complete starter setup, and $20 to $35 a month after that.", source: "lovebird-cost-guide" },
        { label: "Adult size", value: "5 to 6.5 inches (13 to 17 cm); 1.5 to 2 oz." },
        { label: "Lifespan", value: "10 to 15 years typically, up to 20 with excellent care.", source: "lovebird-cost-guide" },
        { label: "Disease risk", value: "Psittacine beak and feather disease hits feather and beak cells and the immune system, and lovebirds are particularly susceptible. It's often fatal, has no cure, and spreads easily, so test any new bird before it meets an established one.", source: "lovebird-health-issues-guide" },
        { label: "Power outage", value: "Keep feeding and watering through an outage rather than pulling food the way you would for a reptile; a small bird carries almost no fat reserve. The real danger is combustion, not cold: no candles, gas heat, or a generator run anywhere near the bird's room.", source: "bird-emergency-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "lovebird-health-issues-guide",
      callNow: [
        "Lethargy or appetite loss",
        "Feathers held fluffed for long stretches",
        "Any shift in normal behavior",
        "Breathing difficulty",
        "Straining or visible abdominal swelling (possible egg binding)",
      ],
      vetLine: "An avian vet, found before you need one. Lovebirds mask symptoms well, so a sudden change is worth acting on rather than waiting.",
    },
    routes: [
      { slug: "lovebird-cost-guide", line: "$50 to $150 for the bird, roughly $300 for setup, and the real cost decision: one bird or two." },
      { slug: "lovebird-handling-guide", line: "Why the name is misleading, exterior food dishes over reaching in, and stick-training a defensive bird." },
      { slug: "lovebird-health-issues-guide", line: "PBFD, egg binding, feather plucking, and when a change in behavior means the vet." },
      { slug: "lovebird-tank-setup-guide", line: "The 18x18x24 minimum, bar spacing as a safety issue, and why the nest box has to wait." },
      { slug: "lovebird-feeding-guide", line: "The pellet and vegetable split, the vitamin A and calcium gaps this species runs into, what chronic laying costs a hen, and why dusting seed fails." },
      { slug: "lovebird-enrichment-guide", line: "Contra-freeloading, the toy count that actually works, and the signs enrichment isn't covering current needs." },
    ],
    buyList: [
      "18x18x24 inch cage minimum, 24x18x24 for a pair",
      "Perches of varied diameter and material",
      "Shreddable and chew toys",
      "A plain breathable cage cover, not an enclosed \"happy hut\"",
      "Food and water dishes",
    ],
    faqs: [
      { q: "How much does a lovebird cost to buy?", a: "$50 to $150 for a common peach-faced or Fischer's. Rare mutations (lutino, blue, pied, and combinations) go for $200 to $400 or more, and exceptional individuals reach $1,000. Adoption typically runs $20 to $100. A hand-raised bird costs more than a parent-raised one and is generally the better choice for a tame, interactive pet." },
      { q: "What size cage does a lovebird need?", a: "18 by 18 by 24 inches minimum for one bird, 24 by 18 by 24 for a pair, and bigger is always better. Long, horizontal cages suit lovebirds, which fly side to side rather than climbing." },
      { q: "When is a lovebird health issue an emergency?", a: "They mask symptoms, so a sudden change is worth acting on: lethargy, appetite loss, feathers held fluffed, or any shift in normal behavior all warrant a prompt vet visit instead of waiting. Egg-binding, breathing difficulty, and severe lethargy all mean an immediate trip to an avian vet." },
    ],
  },
  {
    id: "parrotlet",
    name: "Parrotlet",
    emoji: "🐦",
    difficulty: "Intermediate",
    petType: "Birds",
    image: "/assets/guides/parrotlet.jpg",
    tagline: "The pocket parrot with a personality several sizes too big for it!",
    seoTitle: "Parrotlet Care Guide: Cage, Diet, and Handling",
    seoDescription: "Parrotlet care for a pocket parrot with a big bite: quarter-inch bars, pellets with no grit, the warning nip most owners miss, and one bird versus a pair.",
    funFact: "Despite being smaller than a budgie, the Pacific parrotlet has a noticeably stronger bite and a personality so bold that keepers often describe it as a big parrot's attitude packed into a tiny bird. It genuinely does not seem to know how small it is.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, household hazards,
    // chronic egg laying, and sexing and weight cite the shared bird guides in
    // the sidebar's Health and More list. Rewritten to the template shape
    // 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Built 2026-09-15
    // for the parrotlet set test (docs/READER_REVIEWS.md), which found the old
    // hub recommending 3/8 to 1/2 inch bar spacing, the range the setup guide
    // calls a lovebird range, and stating a 15 to 20 year lifespan the cost
    // guide treats as the contested upper end. The old hub's "at least an hour"
    // of out-of-cage time was retired rather than carried forward, since no deep
    // dive or opened source states it; filed as a gap in docs/READER_LOG.md.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Cage", value: "18x18x24 inches minimum for one bird, wider a genuine upgrade, and meaningfully more for a pair. Bar spacing 1/4 inch, 1/2 the widest worth considering: a parrotlet's head is smaller than a lovebird's.", source: "parrotlet-tank-setup-guide" },
        { label: "Cage material", value: "Powder-coated or stainless steel only. No painted, galvanized, lead, or zinc parts, no round cages, and every opening locks.", source: "parrotlet-tank-setup-guide" },
        { label: "Temperature", value: "65 to 80°F, off drafts and direct sun.", source: "parrotlet-tank-setup-guide" },
        { label: "Lighting and sleep", value: "10 to 12 hours of covered darkness, for sleep and a steadier hormonal cycle in hens. Supplemental UV for indoor birds, since window glass filters what they need for vitamin D3.", source: "parrotlet-tank-setup-guide" },
        { label: "Diet", value: "A small-parrot pellet as the foundation, fresh vegetables and fruit finely chopped daily, seeds and nuts limited to about once a day. Free-choice eaters: refresh the pellet bowl in the morning, pull fresh food within a couple of hours, and clean the water dish daily.", source: "parrotlet-feeding-guide" },
        { label: "No grit, always calcium", value: "Grit causes crop or intestinal impaction in a bird that hulls its seed. A cuttlebone or mineral block at all times, most of all for a hen, since calcium deficiency is the factor most linked to egg binding.", source: "parrotlet-feeding-guide" },
        { label: "Toxic foods", value: "Avocado above all, then chocolate, caffeine, alcohol, onion, garlic, xylitol, and the seeds or pits of apple, cherry, and peach.", source: "parrotlet-feeding-guide" },
        { label: "Handling sessions", value: "5 to 10 minutes, two or three times a day, with millet for calm behavior. A warning nip comes before a real bite; back off rather than push through. Unhandled, they turn nippy and territorial, and a one-person bird gets jealous of everyone else.", source: "parrotlet-handling-guide" },
        { label: "One bird or a pair", value: "Singly is the safer default for a bird territorial even with its own kind. A pair only through a slow, supervised introduction, never two strangers in one cage.", source: "parrotlet-handling-guide" },
        { label: "Out-of-cage time", value: "Daily, in a bird-proofed supervised space. The socialization is what keeps a parrotlet friendly rather than nippy.", source: "parrotlet-tank-setup-guide" },
        { label: "Foraging", value: "Part of the ration goes into foraging, the pellet bowl the fallback. Hanging forage toys for a small beak, food wrapped in paper, tucked in cardboard, split across several sites, and a bath, which they take readily.", source: "parrotlet-enrichment-guide" },
        { label: "Budget", value: "$100 to $400 for a common green or blue Pacific, $350 to $900 for rare mutations, $50 to $300 adoption. Setup roughly $160 to $300, then about $21 to $33 a month. An annual avian checkup is $60 to $90, and an emergency can run $300 or more.", source: "parrotlet-cost-guide" },
        { label: "Lifespan", value: "8 to 12 years average, with well-kept birds to around 20 and some reported into their 30s.", source: "parrotlet-cost-guide" },
        { label: "Adult size", value: "4.3 to 5.5 inches (11 to 14 cm), 1 to 1.4 oz." },
        { label: "Quarantine", value: "Thirty days is the floor, 30 to 45 in a separate isolated room, while the new bird is screened for chlamydia, salmonella, polyomavirus, and PBFD.", source: "bird-quarantine-guide" },
        { label: "Kitchen and air", value: "An overheated nonstick pan or a scented candle can kill a bird in minutes with no warning.", source: "bird-household-hazards-guide" },
        { label: "Chronic egg laying", value: "Depletes calcium for shell after shell, and the downstream effects are weakness, brittle bones that fracture in normal handling, egg binding, seizures, and death.", source: "bird-chronic-egg-laying-guide" },
        { label: "Sexing and weight", value: "You cannot tell a hen from a cock by looking; DNA testing is the only reliable answer. A gram scale and a keel check catch illness before it is visible.", source: "bird-sexing-weight-body-condition-guide" },
      ],
    },
    emergencyCard: {
      source: "parrotlet-health-issues-guide",
      callNow: [
        "Tail-bobbing with each breath, open-mouth breathing, coughing, or general lethargy and a fluffed appearance. Avian vets treat respiratory signs as a same-day emergency until proven otherwise",
        "Discharge from the nostrils or around the eyes, or frequent sneezing",
        "In a hen: sitting on the bottom of the cage, straining, a bobbing tail with breathing difficulty, and a visibly distended abdomen. Egg binding is an emergency, not a wait-and-see situation, and can turn fatal within hours",
        "Feather plucking. See a vet before assuming it's purely behavioral, since infections, mites, liver disease, or a nutritional deficiency need to be ruled out first",
        "Any sudden change: lethargy, appetite loss, fluffed feathers held constantly, or a shift in normal behavior",
      ],
      vetLine: "Because parrotlets mask symptoms so effectively, any sudden change is worth a prompt vet visit rather than a wait-and-see approach. Subtle is often all the warning you get. Routine and emergency avian vet visits are worth budgeting for ahead of time rather than after an emergency.",
    },
    routes: [
      { slug: "parrotlet-cost-guide", line: "The bird at $100 to $900, the setup, the monthly run rate, avian vet pricing, and how one bird versus two changes the budget." },
      { slug: "parrotlet-tank-setup-guide", line: "Cage size, the 1/4 inch bar spacing this species needs, safe materials, lighting, and setting up for a pair rather than a single bird." },
      { slug: "parrotlet-feeding-guide", line: "Free-choice pellets, seed once a day, why this species needs no grit, the safe list, and the toxic list." },
      { slug: "parrotlet-handling-guide", line: "A bite stronger than a budgie's, the warning nip most owners miss, the socialization routine, and what an under-socialized parrotlet becomes." },
      { slug: "parrotlet-health-issues-guide", line: "Respiratory signs, feather plucking, obesity and fatty liver, egg binding in a hen, and the accidents a fearless bird this small runs into." },
      { slug: "parrotlet-enrichment-guide", line: "Foraging instead of a bowl, constant chewing material, perches at varied diameter, and the priority order to work through." },
    ],
    buyList: [
      "Cage of at least 18x18x24 inches, wider preferred, with 1/4 inch bar spacing",
      "Powder-coated or stainless steel construction, no round cages",
      "Perches of varied diameter and natural wood, no uniform dowels or sandpaper covers",
      "Hanging forage toys sized for a small beak",
      "Shreddable chew toys, plain paper and cardboard, replaced as destroyed",
      "Food and water dishes",
      "Cuttlebone or mineral block",
      "Formulated small parrot pellets",
      "Fresh vegetables and a little fruit",
      "Millet, for training rewards",
      "Paper cage liner",
      "A cage cover, for 10 to 12 hours of dark",
      "Gram scale",
      "Avian vet contact, located before you need one",
    ],
    faqs: [
      { q: "Can a female parrotlet get egg-bound without a male present?", a: "Yes. A hen can be triggered into laying without a mate, and egg binding, a life-threatening emergency, follows the same calcium-deficiency mechanism documented across small parrot species generally. Watch for straining, a swollen abdomen, and a bird sitting on the cage floor, this needs same-day veterinary attention." },
      { q: "Do parrotlets need grit to digest their food?", a: "No. Parrotlets, like other true parrots, hull seeds with their beak before swallowing them, so grit serves no digestive purpose. It's more than just unnecessary, free access to grit can cause a dangerous crop or intestinal impaction, so it shouldn't be offered unless a vet specifically recommends it." },
      { q: "How much does a parrotlet cost to buy?", a: "$100 to $400 from a breeder for a common green or blue Pacific. Rarer mutations (American yellow, lutino, dilute turquoise, pied) commonly run $350 to $900, and exceptional individuals pass $1,000. Adoption or rehoming typically runs $50 to $300." },
    ],
  },
  {
    id: "quaker-parakeet",
    name: "Quaker Parakeet",
    emoji: "🦜",
    difficulty: "Intermediate",
    petType: "Birds",
    image: "/assets/guides/quaker-parakeet.jpg",
    tagline: "The little architect that would rather build a nest than move into one!",
    seoTitle: "Quaker Parakeet Care Guide: Legality, Cage, and Diet",
    seoDescription: "Check the law before the cage: thirteen states ban the quaker parakeet. Then cage size, bar spacing, why a nest box never goes in, and a pellet-first diet.",
    funFact: "The quaker is the only parrot that does not nest in a tree cavity. It weaves a bulky stick nest instead, often on electrical infrastructure, and the nest material arcs the current. Every US state ban on this bird is an escape-and-establishment rule rather than a dangerous-animal one.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry. Quarantine, household hazards and droppings cite the shared bird
    // guides in the sidebar's Health and More list. Rewritten to the template
    // shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md): the diet row no longer
    // sums past 100 percent, and the vet row says the exam price is for an
    // established client. Built 2026-09-15 for the
    // quaker parakeet set test (docs/READER_REVIEWS.md). The old hub had a
    // 24x24x30 cage minimum against the setup guide's and VCA's 24x24x36, pellets
    // at 60 to 70 percent against VCA's stated minimum of 70, an annual table
    // that summed to a different monthly figure than the cost guide's, and a vet
    // ceiling no deep dive carried. This species has no feeding guide, so the
    // diet rows come from the tank setup guide's Diet Basics section.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal check first", value: "Thirteen states ban it: California, Colorado, Connecticut, Georgia, Hawaii, Kansas, Kentucky, Nebraska, New Jersey, Pennsylvania, Vermont, Wisconsin, and Wyoming. Maine, Rhode Island, and Arkansas require a permit, Virginia attaches a condition, Tennessee is unresolved.", source: "quaker-parakeet-legal-guide" },
        { label: "Why the bans exist", value: "The only parrot that builds a stick nest rather than using a cavity, often on electrical infrastructure. Florida Power and Light logged 498 outages from the birds in the first five months of 2001.", source: "quaker-parakeet-legal-guide" },
        { label: "Cage", value: "24 by 24 by 36 inches minimum, a 30 to 36 inch flight-style cage the better target, on heavy-gauge bars spaced 1/2 to 5/8 inch and never past 3/4. Never a nest box: it triggers hormonal aggression.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Temperature and light", value: "Room temperature, off drafts, and never outdoors as it climbs toward 90°F. Full-spectrum lighting is optional, up to about 4 hours a day if you run one.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Diet", value: "Pellets at a minimum of 70 percent of the diet, with fruits, vegetables, and greens making up the rest and fruit the smallest share. Seed only as a very small part: a seed diet drives the fatty liver this species is prone to.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Fresh food", value: "Dark greens, broccoli, carrot, squash, peppers, sweet potato, pulled after a couple of hours. Never avocado, onion, chocolate, caffeine, or alcohol.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Out-of-cage time", value: "Several hours of supervised time daily. Too intelligent and social a bird for cage time alone.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Weaving material", value: "Untreated twigs, willow and palm strips, seagrass, plain paper strips, which they work into the bars for hours. Nothing stringy that wraps a toe or neck. If nest building brings spring aggression, scale the material back rather than removing it.", source: "quaker-parakeet-enrichment-guide" },
        { label: "Company and sleep", value: "A quaker in a busy room is watching social contact, not getting it. Daily interaction or a companion sits fourth on its enrichment list, and it needs ten to twelve hours of dark, quiet sleep.", source: "quaker-parakeet-enrichment-guide" },
        { label: "Fatty liver disease", value: "One of the commonest problems here, almost always from a seed-heavy diet: anorexia, lethargy, overgrown beak and nails, green-tinted droppings, labored breathing, a swollen abdomen.", source: "quaker-parakeet-health-issues-guide" },
        { label: "Feather plucking", value: "In quakers it can go past plucking into self-inflicted skin damage on the chest and shoulders. A vet first, to rule out a medical cause.", source: "quaker-parakeet-health-issues-guide" },
        { label: "Budget", value: "$250 to $500 for a well-socialized bird from a breeder, roughly $300 to $800 for the setup, and $40 to $110 a month, toys the row that never stops.", source: "quaker-parakeet-cost-guide" },
        { label: "Vet costs", value: "A wellness exam runs $78 to $115 for an established client, so a new patient pays more; bloodwork $158, grooming $35 a service.", source: "quaker-parakeet-cost-guide" },
        { label: "Lifespan", value: "20 to 30 years, sometimes longer.", source: "quaker-parakeet-cost-guide" },
        { label: "Adult size", value: "11 to 12 inches (28 to 30 cm), 3 to 5 oz." },
        { label: "Quarantine", value: "Thirty days is the floor, 30 to 45 in a separate isolated room, while the new bird is screened for chlamydia, salmonella, polyomavirus, and PBFD.", source: "bird-quarantine-guide" },
        { label: "Kitchen and air", value: "An overheated nonstick pan or a scented candle can kill a bird in minutes with no warning.", source: "bird-household-hazards-guide" },
        { label: "Droppings", value: "They change every day, and reading them is the cheapest, earliest health check an owner has.", source: "bird-droppings-guide" },
      ],
    },
    emergencyCard: {
      source: "quaker-parakeet-health-issues-guide",
      callNow: [
        "Labored breathing or a swollen abdomen, with anorexia, lethargy, or green-tinted droppings: fatty liver disease",
        "A bird in the household with respiratory signs and diarrhea when people are also unwell: psittacosis passes to humans",
        "An overgrown beak and nails, the slow sign of the same liver disease",
        "Feather plucking, or self-inflicted skin damage on the chest and shoulders: a vet before assuming it is behavioral",
        "Feather, beak, or immune abnormalities: PBFD has no cure, and early diagnosis stops it spreading",
      ],
      vetLine: "Fix the diet first, since an all-seed diet drives the liver disease and the deficiencies. Hygiene and quarantine handle PBFD and psittacosis.",
    },
    routes: [
      { slug: "quaker-parakeet-legal-guide", line: "All 52 jurisdictions read against the state codes themselves, thirteen outright bans, and why every one of them is an invasive species rule." },
      { slug: "quaker-parakeet-cost-guide", line: "$250 to $500 for the bird, dated retail prices for the setup, real clinic pricing, and the toy line that never stops." },
      { slug: "quaker-parakeet-tank-setup-guide", line: "Cage size and bar spacing, why a nest box is the one thing never to add, diet basics, and lighting that is optional rather than required." },
      { slug: "quaker-parakeet-handling-guide", line: "Temperament, the nest-building instinct behind the cage aggression, and the legal trap that catches buyers before they ever handle one." },
      { slug: "quaker-parakeet-feeding-guide", line: "Pellets at 70 percent, produce as the rest, seed as a treat, a small handful a day, and the fatty liver a seed diet builds." },
      { slug: "quaker-parakeet-health-issues-guide", line: "Fatty liver disease from a seed diet, feather-destructive behavior, PBFD, and the psittacosis that can reach people." },
      { slug: "quaker-parakeet-enrichment-guide", line: "Weaving material first, food through foraging, and the priority order that keeps a clever bird from turning on itself." },
    ],
    buyList: [
      "Cage of at least 24x24x36 inches, wider preferred, with 1/2 to 5/8 inch bar spacing on heavy-gauge bars",
      "No nest box, ever",
      "Safe untreated twigs, willow and palm strips, seagrass and plain paper strips",
      "Foraging and shreddable toys, replaced as destroyed",
      "Perches of varied diameter",
      "Formulated pellets",
      "Fresh vegetables and greens",
      "Cuttlebone",
      "Plain cage liner or newspaper",
      "A cage cover, for 10 to 12 hours of dark",
      "Travel carrier",
      "Avian vet contact, located before you need one",
    ],
    faqs: [
      { q: "Which states ban quaker parrots?", a: "Thirteen: California, Colorado, Connecticut, Georgia, Hawaii, Kansas, Kentucky, Nebraska, New Jersey, Pennsylvania, Vermont, Wisconsin and Wyoming. Maine, Rhode Island and Arkansas require a permit, Virginia allows them on a condition, and Tennessee is unresolved. In the remaining 34 jurisdictions on our map, including New York City, nothing reaches the species." },
      { q: "What size cage does a Quaker parakeet need?", a: "24 by 24 by 36 inches is a reasonable minimum, though a wider flight-style cage at 30 to 36 inches is the better real-world target for an active bird. Bar spacing 1/2 to 5/8 inch, never past 3/4, on heavy-gauge bars, since this species chews hard." },
      { q: "What is the most common health issue in Quaker parakeets?", a: "Fatty liver disease (hepatic lipidosis), almost always tied to a seed-heavy, high-fat diet. The MSD Veterinary Manual lists anorexia, lethargy, an overgrown beak and nails, and green-tinted droppings among the signs, and Merck's Veterinary Manual flags Quaker parakeets as one of the parrot species prone to obesity, which raises the risk." },
    ],
  },
  {
    id: "zebra-finch",
    name: "Zebra Finch",
    emoji: "🐦",
    difficulty: "Beginner",
    petType: "Birds",
    image: "/assets/guides/zebra-finch.jpg",
    tagline: "The busy little finch that wants a friend far more than a finger!",
    seoTitle: "Zebra Finch Care Guide: Cage, Diet, and Group Size",
    seoDescription: "Zebra finches are never kept alone. Group size, a wide flight cage over a tall one, the pellet and seed split, why they are not hand-tamed, and vet signs.",
    funFact: "Zebra finches are the most widely studied songbird in neuroscience. Only males sing, and they learn their song from a tutor as juveniles in a process remarkably similar to how human babies learn speech, which has made them one of science's best models for understanding vocal learning.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, household hazards, pellet
    // conversion, and sleep and droppings cite the shared bird guides in the
    // sidebar's Health and More list. Rewritten to the template shape
    // 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md): the pellet ratio is a target
    // reached gradually, and quarantine says what it is from. Built 2026-09-14 for the zebra finch set
    // test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Never one bird", value: "Solo housing is a welfare problem here, not a design choice. Plan the cage, perches, and feeding stations around at least two from the start.", source: "zebra-finch-tank-setup-guide" },
        { label: "Group size", value: "Wild zebra finches most often move in twos, 94 percent of them mixed-sex, or in groups of three to ten. Two, or a handful, and a mixed-sex pair is the decision that brings eggs; two of the same sex does not.", source: "zebra-finch-enrichment-guide" },
        { label: "Cage", value: "At least 24 by 14 by 18 inches for a pair, a floor not a target, and long rather than tall: they fly the length of it. Bar spacing no wider than 3/8 inch, tighter than a canary's.", source: "zebra-finch-tank-setup-guide" },
        { label: "Temperature and light", value: "65 to 80°F, away from drafts, vents, and direct sun. About 12 hours of light and 12 of dark on a consistent schedule.", source: "zebra-finch-tank-setup-guide" },
        { label: "Perches and bathing", value: "Varied diameters spaced far enough apart that the birds fly rather than hop, and a shallow bath, which they use readily.", source: "zebra-finch-tank-setup-guide" },
        { label: "Cage lining", value: "A plain paper liner, spot-cleaned daily and changed weekly, which makes droppings easy to read.", source: "zebra-finch-tank-setup-guide" },
        { label: "Nesting material", value: "They carry and shred material constantly, and material plus a nest site triggers breeding. No chicks wanted: material and no nest. Never loose fibrous fluff, which wraps legs and toes.", source: "zebra-finch-enrichment-guide" },
        { label: "Diet split", value: "The target once converted is pellets at roughly 70% of the diet, 60% at minimum, fresh fruit and vegetables 20%, and seed at about one level teaspoon per bird per day. Pellets stay available; seed is measured.", source: "zebra-finch-feeding-guide" },
        { label: "Seed to pellets", value: "Birds arrive seed-fed and the switch is gradual, never abrupt: 75% seed and 25% pellets for 3 days, 50/50 for 3 days, then 25% seed until converted. Weigh daily; a drop past 10% means stop and call an avian vet.", source: "bird-pellet-conversion-guide" },
        { label: "Cuttlebone, egg food, water", value: "A cuttlebone or mineral block permanently in the cage, most important for a laying hen. Egg food during molt and breeding, pulled within a couple of hours. Fresh water continuously, dishes cleaned daily. No grit: they hull their seed.", source: "zebra-finch-feeding-guide" },
        { label: "Handling", value: "Hands-off birds that do not enjoy being held; forcing contact makes a more fearful bird. To catch one, slide a fine-mesh net over it on a perch or the floor, and never by the tail.", source: "zebra-finch-handling-guide" },
        { label: "Vet schedule", value: "A first visit within 1 to 2 weeks of bringing a bird home, then at least annually.", source: "zebra-finch-cost-guide" },
        { label: "Budget", value: "$15 to $60 a bird, at least two, so $30 to $120 for a pair. Setup roughly $180 to $400 including the birds, the cage $120 to $220 of it, then $10 to $25 a month.", source: "zebra-finch-cost-guide" },
        { label: "Lifespan", value: "5 to 7 years in captivity, some only 3 to 5, against 2 to 3 in the wild.", source: "zebra-finch-cost-guide" },
        { label: "Adult size", value: "3.9 to 4.3 inches (10 to 11 cm), 0.3 to 0.5 oz." },
        { label: "Day one and quarantine", value: "New birds go straight into their own room for 30 days, 30 to 45 by vet guidance. Residents are fed and cleaned first each day, newcomers last. A pair bought together stays together.", source: "bird-quarantine-guide" },
        { label: "Household fumes", value: "PTFE coatings release toxic gas above 280°C (536°F), which an empty pan on a hot burner reaches in minutes.", source: "bird-household-hazards-guide" },
        { label: "Sleep and droppings", value: "10 to 12 hours of uninterrupted dark. A lit-up evening reads as endless summer and drives chronic egg laying.", source: "bird-photoperiod-sleep-guide" },
      ],
    },
    emergencyCard: {
      source: "zebra-finch-health-issues-guide",
      callNow: [
        "A laying hen on the cage floor, straining, with a swollen abdomen: egg binding, same-day",
        "Labored or open-mouth breathing, sneezing, or a tail bobbing with each breath: air sac mites in a heavy infection, or a respiratory infection",
        "Balance problems or a head tilt",
        "Ruffled or unkempt feathers, sleeping more, eating or drinking less, especially in combination",
        "Diarrhea or abnormal droppings",
      ],
      vetLine: "Any of these, especially in combination, is a same-day call to an avian vet: a finch has a long illness head start by the time it shows anything.",
    },
    routes: [
      { slug: "zebra-finch-cost-guide", line: "$15 to $60 a bird, why the minimum order is two, and the flight cage that is the real line item." },
      { slug: "zebra-finch-tank-setup-guide", line: "Cage dimensions, 3/8 inch bar spacing, 65 to 80°F, the light cycle, and the paper liner that doubles as a health check." },
      { slug: "zebra-finch-feeding-guide", line: "The 70/20/teaspoon split, why all-seed falls short, cuttlebone and egg food, and why grit is not needed." },
      { slug: "zebra-finch-handling-guide", line: "Why this bird is not hand-tamed, what forcing it costs, and how to catch one safely when you have to." },
      { slug: "zebra-finch-health-issues-guide", line: "Air sac mites, egg binding, obesity from seed, scaly face and leg mites, and the signs that mean a vet today." },
      { slug: "zebra-finch-enrichment-guide", line: "What the field data says about group size, flight length, perch placement, and nesting material without a nest." },
    ],
    buyList: [
      "Long flight cage, at least 24 by 14 by 18 inches for a pair, bar spacing no wider than 3/8 inch",
      "At least two birds, never one",
      "Perches of varied diameter, natural branch rather than uniform dowel",
      "Shallow bird bath",
      "Cuttlebone or mineral block",
      "A small finch or canary pellet formula",
      "Quality finch seed mix, millet and canary seed based",
      "Fresh dark leafy greens",
      "Egg food for molting and breeding season",
      "Clamp-on food and water dishes that attach to the cage bars",
      "Plain white paper for the cage tray",
      "Gram scale",
      "Avian veterinarian contact",
    ],
    faqs: [
      { q: "What does a full zebra finch setup cost upfront?", a: "Roughly $180 to $400 for a pair, including the birds, a wide flight cage, perches of varied diameter, a shallow bath, and a cuttlebone. The cage is the single biggest line item at $120 to $220 for a quality flight cage." },
      { q: "How do I safely catch a zebra finch when I need to?", a: "Use a small, fine-mesh finch net if you have one, letting the bird land before carefully sliding the net over it rather than chasing. A lightweight towel works too in an open room. Never grab or restrain a finch by the tail, it causes painful feather loss and doesn't stop the bird." },
      { q: "Should I give them a nest?", a: "Only if you want eggs, since a nest and nesting material readily trigger breeding. Nesting material for shredding and carrying is enriching, and if you do not want chicks, offer the material without a nest site." },
    ],
  },
];
