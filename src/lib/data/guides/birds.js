export const birdGuides = [
  {
    id: "african-grey",
    name: "African Grey Parrot",
    emoji: "🦜",
    difficulty: "Advanced",
    petType: "Birds",
    image: "/assets/guides/african-grey.jpg",
    tagline: "The genius of the parrot world, one of the most intelligent animals on Earth!",
    funFact: "African Greys have the cognitive ability of a 5-year-old child and can learn over 1,000 words. The famous parrot Alex could identify colors, shapes, and even understand the concept of 'same' and 'different'!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Day one and power
    // outage cite the shared bird guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 for batch C (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
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
    tagline: "The cheerful, chatty little parakeet that's perfect for first-time bird owners!",
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
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
    tagline: "The classic singing songbird that's happiest observed, not handled!",
    funFact: "Only male canaries sing (with rare exceptions), and their song is directly tied to testosterone and daylight length. Centuries of selective breeding have produced distinct song 'breeds,' like the Roller canary, bred specifically for the complexity, tone, and softness of its song rather than for appearance.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, household hazards and
    // photoperiod cite the shared bird guides in the sidebar's Health and
    // More list. This species has no feeding
    // guide, so the diet rows point at the tank setup guide's Diet Basics
    // section, added in the same pass. Built 2026-09-14 for the canary set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Cage size, shape, and material", value: "24 inches long by 18 inches wide by 18 inches tall is a reasonable minimum, but the shape matters more than the raw dimensions. Canaries fly horizontally rather than climbing the way parrots do, so prioritize width over height. Avoid galvanized metal or lead-painted cage components entirely, powder-coated steel is the safe standard.", source: "canary-tank-setup-guide" },
        { label: "Bar spacing", value: "Half an inch or less, this prevents both head entrapment and escape.", source: "canary-tank-setup-guide" },
        { label: "Flight path and perches", value: "Leave the middle open so there is a flight path, and resist the urge to fill the center with toys. Perches of varied diameter and natural branch with irregular surfaces let the foot change position.", source: "canary-enrichment-guide" },
        { label: "Temperature", value: "Normal household temperature, 65 to 80°F, works well, with 65 to 75°F frequently cited as ideal. Keep the cage away from drafts, air conditioning vents, and radiators. No supplemental heat is needed indoors.", source: "canary-tank-setup-guide" },
        { label: "Diet and portion", value: "Build on a quality canary seed mix or pellet and supplement daily with fresh fruits and vegetables, plus egg food as a protein source during molt and breeding. Up to 30% of body weight a day, which for a 12 to 30 gram bird is a small measured amount rather than a permanently heaped dish.", source: "canary-tank-setup-guide" },
        { label: "Grit and cuttlebone", value: "Canaries do not require grit, but they should be offered a cuttlebone, which supplies the calcium a seed-based diet runs short on.", source: "canary-tank-setup-guide" },
        { label: "Two males", value: "Males should not be housed together, since they are territorial and will fight. A male and female pair, or a group of females, can work in a large enough flight cage, and a single canary in a good flight cage is a perfectly reasonable setup.", source: "canary-enrichment-guide" },
        { label: "Handling and catching", value: "Most canaries aren't kept as hands-on pets at all. The only handling a canary needs is a vet's, and even the catch is done in the dark: lights out, perches out, taking the bird quickly before its eyes adjust.", source: "canary-handling-guide" },
        { label: "Budget", value: "$25 to $60 for a common yellow canary, $80 to $150 for a Red Factor, and $100 to $250 or more for a specialized song breed, with prize singers and exhibition birds reaching $200 to $500. Setup runs roughly $150 to $275, then $10 to $30 a month.", source: "canary-cost-guide" },
        { label: "Vet costs", value: "An annual avian wellness exam, worth budgeting for even though it's easy to skip, runs $50 to $100 or more.", source: "canary-cost-guide" },
        { label: "Lifespan", value: "6 to 12 years is the typical span, with up to 15 reported.", source: "canary-cost-guide" },
        { label: "Adult size", value: "4.5 to 5 inches (11 to 13 cm), 12 to 30 grams." },
        { label: "Quarantine", value: "At least 30 days is the floor, not a suggestion with room to shave off a week if the bird seems fine, and 30 to 45 days in a separate, isolated room is the wider window.", source: "bird-quarantine-guide" },
        { label: "Household fumes", value: "PTFE coatings start releasing toxic gas once they're heated above 280°C (536°F). A pan left empty on a hot burner, or one preheating longer than needed, can reach that point in a few minutes, well before it looks or smells like anything is wrong.", source: "bird-household-hazards-guide" },
        { label: "Sleep and hormones", value: "10 to 12 hours of uninterrupted sleep a night, a range that holds across the species kept as pets.", source: "bird-photoperiod-sleep-guide" },
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
        "Bald patches and visible nighttime itching",
      ],
      vetLine: "A canary that stops singing, shows fluffed or dull feathers, or becomes generally lethargic is signaling something's wrong, well before more specific symptoms might appear. Paying attention to these early, general signs matters more than waiting for a specific symptom to confirm what's going on.",
    },
    routes: [
      { slug: "canary-cost-guide", line: "$25 to $500 depending on what you are buying it for, the setup, and the one question to ask a seller before paying." },
      { slug: "canary-tank-setup-guide", line: "Why width beats height, half-inch bars, 65 to 80°F, the air-quality rule, and what a canary actually eats." },
      { slug: "canary-handling-guide", line: "Why this is a look and listen bird, what a silent male means in July against any other month, and the dark catch." },
      { slug: "canary-health-issues-guide", line: "Air-sac mites, scaly face and leg mites, red mites, respiratory infection, and the early signs that come first." },
      { slug: "canary-enrichment-guide", line: "What the song research says about a constantly singing male, flight distance, perches, and the corticosterone finding." },
    ],
    buyList: [
      "Wide flight cage, at least 24 by 18 by 18 inches, bar spacing half an inch or less, powder-coated steel",
      "Natural wood perches of varied diameter",
      "Shallow bird bath",
      "Cuttlebone",
      "Quality canary seed mix or pellet",
      "Fresh greens and vegetables",
      "Egg food for molt and breeding season",
      "Plain white paper for the cage tray",
      "Cage cover",
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
    tagline: "The whistling, crested charmer that's the perfect first parrot!",
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
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
        { label: "Lifespan", value: "Cockatiels live 10 to 15 years, so this is a long-term financial commitment even though the entry cost is modest.", source: "cockatiel-cost-guide" },
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
      { slug: "cockatiel-feeding-guide", line: "Free-choice feeding, the safe and toxic food lists, and six honest reasons a cockatiel stops eating." },
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
    tagline: "The affectionate, screaming, decades-long commitment of a parrot that bonds almost too well!",
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "At least 30 days, and up to 45, quarantined in a separate room with its own airspace, away from any bird you already own. A multi-bird household or aviary is safer nearer 90 days.", source: "bird-quarantine-guide" },
        { label: "Enclosure", value: "36 inches wide by 24 inches deep by 48 inches tall is a commonly cited minimum, with many avian vets recommending closer to 48 by 48 by 60 inches as a genuinely comfortable size. Bigger is always better with this species.", source: "cockatoo-tank-setup-guide" },
        { label: "Bar spacing", value: "Three-quarters of an inch to 1 inch for large cockatoos. Secure, genuinely escape-proof locks matter more here than with most birds, cockatoos are notorious escape artists with the intelligence and strength to work out standard latches.", source: "cockatoo-tank-setup-guide" },
        { label: "Cage material", value: "Stainless steel is the gold standard, rust-proof and able to withstand a beak this powerful for decades. Heavy-gauge powder-coated steel is an acceptable, more affordable alternative. Avoid galvanized or zinc-coated cages entirely, a bird that chews the bars risks metal toxicity from that coating.", source: "cockatoo-tank-setup-guide" },
        { label: "Sleep", value: "10 to 12 hours of genuine darkness and quiet for sleep every night. Sleep deprivation in this species measurably worsens screaming and other behavioral issues.", source: "cockatoo-tank-setup-guide" },
        { label: "Diet", value: "Pellets should make up 75 to 80% of daily intake, with fresh vegetables and fruit covering no more than another 20 to 40% and seeds and nuts kept to high-fat treats rather than the foundation.", source: "cockatoo-feeding-guide" },
        { label: "Bonding", value: "Avoid over-bonding in the first weeks, it cements an anxious dependency rather than a healthy one. Real engagement with this species means 4 to 6 hours of interaction most days, not an occasional check-in, but consistent shoulder and lap time can itself become the problem if a cockatoo forms a pair bond with one person.", source: "cockatoo-handling-guide" },
        { label: "Budget", value: "$700 to $3,000 for common species (rarer species run higher), $250 to $1,300 or more for a complete setup, and $20 to $50 a month for food after that. Toy replacement is the bigger recurring cost, since cockatoos destroy wooden toys fast.", source: "cockatoo-cost-guide" },
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
      { slug: "cockatoo-cost-guide", line: "$700 to $3,000 for the bird, $250 to $1,300 or more for setup, and the lifespan number that should drive the whole decision." },
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
    funFact: "Green cheek conures are notorious for learning to hang upside down, play dead, and roll over on command. They're often called the 'class clown' of the parrot world and learn tricks faster than almost any other small parrot!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Day one, pellet
    // conversion, and power outage cite the shared bird guides in the
    // sidebar's Health and More list; this species has no feeding guide of
    // its own, so the pellet conversion row is where a new owner finds the
    // seed-to-pellet schedule. Reconciled 2026-09-09 for batch D
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "At least 30 days quarantined in a separate room with its own airspace, away from any bird you already own.", source: "bird-quarantine-guide" },
        { label: "Cage size", value: "24x24x30 inches is the common minimum for a single adult, but treat that as a floor, not a target. Bigger is always better, aim for 30 to 36 inches or more in multiple dimensions, or a genuine flight cage if you can manage it.", source: "conure-tank-setup-guide" },
        { label: "Bar spacing", value: "Bar spacing should be 1/2 to 5/8 inch maximum to prevent head entrapment or escape.", source: "conure-tank-setup-guide" },
        { label: "Temperature", value: "Normal household temperatures of 65 to 80°F work well. Avoid drafts, direct air-conditioning vents, and sudden temperature swings.", source: "conure-tank-setup-guide" },
        { label: "Sleep", value: "Maintain a consistent day and night photoperiod, covering the cage at night gives 10 to 12 hours of real darkness.", source: "conure-tank-setup-guide" },
        { label: "Cage bottom", value: "Most keepers use a grate with paper, newspaper, or a cage liner underneath for easy daily cleaning. Avoid loose substrates like corn cob or wood chips, both can be ingested or harbor mold.", source: "conure-tank-setup-guide" },
        { label: "Kitchen and cookware", value: "Never use non-stick or Teflon cookware near the bird, the fumes are highly toxic.", source: "conure-tank-setup-guide" },
        { label: "Out-of-cage time", value: "Out-of-cage time, several hours of supervised free time daily, isn't optional, it's essential for both physical and mental health.", source: "conure-tank-setup-guide" },
        { label: "Diet", value: "Fatty liver disease and vitamin A deficiency both stem from the same root cause: an all-seed or high-fat diet with too little vegetable variety and not enough exercise. Caught early, this is manageable with diet correction, feeding a quality pelleted diet alongside fresh vegetables instead of a seed-only bowl.", source: "conure-health-issues-guide" },
        { label: "Seed to pellets", value: "Two workable methods, both built around gradual substitution rather than an abrupt swap: 75% seed and 25% pellets for 3 days, then a 50/50 mix for 3 days, then 25% seed and 75% pellets until the bird is fully converted; or a daily taper from 90% seed down to 0% on day 10.", source: "bird-pellet-conversion-guide" },
        { label: "Handling", value: "Genuine nippiness shows up more in young birds, especially under one to two years old, and in hormonal adults. Watch for warning signs before a bite happens: pinned eyes, flared tail feathers, or lunging.", source: "conure-handling-guide" },
        { label: "Budget", value: "$250 to $700+ for the bird itself, more at pet stores. Roughly $400 to $900 or more to set up before the bird. Roughly $250 to $500 a year after that, and a routine wellness exam commonly runs $80 to $160.", source: "conure-cost-guide" },
        { label: "Adult size", value: "10 inches (25 cm) including tail; 2-2.5 oz." },
        { label: "Lifespan", value: "20 to 25 years or more is the commonly cited range, with some individuals reaching 30 years under excellent care.", source: "conure-cost-guide" },
        { label: "Power outage", value: "Keep feeding and watering through an outage rather than pulling food the way you would for a reptile; a small bird carries almost no fat reserve. The real danger is combustion, not cold: no candles, propane heater, or gas stove used for heat in any room the bird is in, and never an indoor generator.", source: "bird-emergency-travel-guide" },
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
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
    tagline: "The smallest parrot you can keep, with a personality far too big for its tiny body!",
    funFact: "Despite being smaller than a budgie, the Pacific parrotlet has a noticeably stronger bite and a personality so bold that keepers often describe it as a big parrot's attitude packed into a tiny bird. It genuinely does not seem to know how small it is.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine and household hazards
    // cite the shared bird guides in the sidebar's Health and More list.
    // Built 2026-09-15
    // for the parrotlet set test (docs/READER_REVIEWS.md), which found the old
    // hub recommending 3/8 to 1/2 inch bar spacing, the range the setup guide
    // calls a lovebird range, and stating a 15 to 20 year lifespan the cost
    // guide treats as the contested upper end. The old hub's "at least an hour"
    // of out-of-cage time was retired rather than carried forward, since no deep
    // dive or opened source states it; filed as a gap in docs/READER_LOG.md.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Cage size", value: "Minimum 18x18x24 inches for a single bird, but wider is a genuine upgrade rather than a nice-to-have.", source: "parrotlet-tank-setup-guide" },
        { label: "Bar spacing and cage material", value: "1/4 inch, and 1/2 inch is the widest worth considering at all. Powder-coated or stainless steel only. Avoid painted finishes, galvanized wire, or anything using lead or zinc in its construction, all carry a real risk of toxic exposure if chewed.", source: "parrotlet-tank-setup-guide" },
        { label: "Temperature", value: "Normal household range, roughly 65 to 80°F, works well.", source: "parrotlet-tank-setup-guide" },
        { label: "Sleep", value: "Roughly 10 to 12 hours of genuine, covered darkness supports both healthy sleep and a more stable hormonal cycle in females.", source: "parrotlet-tank-setup-guide" },
        { label: "Diet", value: "A formulated small parrot pellet as the foundation, supplemented daily with fresh vegetables and fruit, finely chopped since this is a genuinely small bird. Seeds and nuts stay limited to about once a day rather than the base of the diet.", source: "parrotlet-feeding-guide" },
        { label: "Grit and calcium", value: "Parrotlets don't need grit. A cuttlebone or mineral block should be available at all times for calcium, and it matters even more for a hen, since a calcium deficiency is the factor most consistently linked to egg binding.", source: "parrotlet-feeding-guide" },
        { label: "Toxic foods", value: "Avocado is the single most consistently flagged toxic food. Chocolate, caffeine, alcohol, onion and garlic, and xylitol are all genuine dangers, and the seeds or pits from rose-family fruits (apple, cherry, peach) affect heart function, which is why apple gets its seeds removed first.", source: "parrotlet-feeding-guide" },
        { label: "Handling sessions", value: "Short sessions, 5 to 10 minutes, two or three times a day, work better than one long forced session.", source: "parrotlet-handling-guide" },
        { label: "One bird or a pair", value: "A pair is a workable option for an owner with less free time to give, and singly is the safer default: this is a territorial bird even with its own kind.", source: "parrotlet-handling-guide" },
        { label: "Out-of-cage time", value: "Daily out-of-cage time in a bird-proofed, supervised space matters as much as anything in the cage itself, and the socialization that comes with it is what keeps a parrotlet friendly rather than nippy.", source: "parrotlet-tank-setup-guide" },
        { label: "Budget", value: "$100 to $400 from a breeder for a common green or blue Pacific, with rarer mutations commonly $350 to $900 and adoption $50 to $300. Roughly $160 to $300 for the setup, and roughly $250 to $400 a year, about $21 to $33 a month, after that.", source: "parrotlet-cost-guide" },
        { label: "Lifespan", value: "8 to 12 years is the average, and individual birds are reported into their 20s and occasionally their 30s.", source: "parrotlet-cost-guide" },
        { label: "Adult size", value: "4.3 to 5.5 inches (11 to 14 cm), 1 to 1.4 oz." },
        { label: "Quarantine", value: "Thirty days is the floor, not a suggestion with room to shave off a week if the bird seems fine, and 30 to 45 days in a separate, isolated room is the wider window, while the new arrival is screened for chlamydia, salmonella, polyomavirus, and PBFD.", source: "bird-quarantine-guide" },
        { label: "Kitchen and air", value: "A bird's respiratory system turns ordinary household fumes, from an overheated nonstick pan to a scented candle, into something that can kill it in minutes with no warning.", source: "bird-household-hazards-guide" },
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
    tagline: "The only parrot that builds its own stick nest, and the reason thirteen states ban it!",
    funFact: "The quaker is the only parrot that does not nest in a tree cavity. It weaves a bulky stick nest instead, often on electrical infrastructure, and the nest material arcs the current. Every US state ban on this bird is an escape-and-establishment rule rather than a dangerous-animal one.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry. Quarantine and household hazards cite the shared bird guides in
    // the sidebar's Health and More list. Built 2026-09-15 for the
    // quaker parakeet set test (docs/READER_REVIEWS.md). The old hub had a
    // 24x24x30 cage minimum against the setup guide's and VCA's 24x24x36, pellets
    // at 60 to 70 percent against VCA's stated minimum of 70, an annual table
    // that summed to a different monthly figure than the cost guide's, and a vet
    // ceiling no deep dive carried. This species has no feeding guide, so the
    // diet rows come from the tank setup guide's Diet Basics section.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check first", value: "Thirteen states ban it: California, Colorado, Connecticut, Georgia, Hawaii, Kansas, Kentucky, Nebraska, New Jersey, Pennsylvania, Vermont, Wisconsin and Wyoming. Maine, Rhode Island and Arkansas require a permit, Virginia allows them on a condition, and Tennessee is unresolved.", source: "quaker-parakeet-legal-guide" },
        { label: "Cage size", value: "24 by 24 by 36 inches is a reasonable minimum, though a wider flight-style cage at 30 to 36 inches is the better real-world target for an active bird.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Bar spacing", value: "1/2 to 5/8 inch, never past 3/4, on heavy-gauge bars, since this species chews hard.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "No nest box", value: "Never for a pet bird. Doing so reliably triggers unwanted breeding-style hormonal aggression. Provide plenty of shreddable wood and foraging toys instead.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Temperature", value: "Ordinary room temperature. Keep the cage off drafts and away from extremes, and never leave a Quaker outdoors as temperatures climb toward 90°F.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Diet", value: "Pellets are the base, and the figure to hold to is a minimum of 70 percent of the diet. Fruits, vegetables and greens make up the rest, no more than 20 to 40 percent of daily intake, with fruit kept to the smaller end of that because of its water and sugar content.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Fresh food and what never goes in", value: "Dark leafy greens, broccoli, carrot, squash, peppers and sweet potato all work. Pull fresh food after a couple of hours, sooner in a warm room, before it spoils. Avocado and onion are potentially toxic and never go in, and neither do chocolate, caffeine in any form, or alcohol.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Out-of-cage time", value: "Several hours of supervised time daily. This is too intelligent and social a bird to thrive on cage time alone, and out-of-cage time paired with varied perch diameters supports both foot health and mental wellbeing.", source: "quaker-parakeet-tank-setup-guide" },
        { label: "Weaving material", value: "Safe untreated twigs, willow and palm strips, seagrass and plain paper strips. Avoid anything stringy or fibrous that can wrap around a toe or a neck.", source: "quaker-parakeet-enrichment-guide" },
        { label: "Sleep", value: "Ten to twelve hours of dark, quiet sleep.", source: "quaker-parakeet-enrichment-guide" },
        { label: "Fatty liver disease", value: "One of the most common problems in this species, and almost always tied to a seed-heavy, high-fat diet.", source: "quaker-parakeet-health-issues-guide" },
        { label: "Budget: the bird, the setup, then monthly", value: "$250 to $500 from a reputable breeder for a well-socialized bird. Roughly $300 to $800. Roughly $40 to $110 a month. Toys are the row that never stops: whatever you buy on day one gets shredded.", source: "quaker-parakeet-cost-guide" },
        { label: "Vet costs", value: "A wellness exam runs $78 to $115 for an established client, basic bloodwork is $158, and grooming is $35 a service if you do not learn to do it yourself.", source: "quaker-parakeet-cost-guide" },
        { label: "Lifespan", value: "20 to 30 years, sometimes longer.", source: "quaker-parakeet-cost-guide" },
        { label: "Adult size", value: "11 to 12 inches (28 to 30 cm), 3 to 5 oz." },
        { label: "Quarantine", value: "Thirty days is the floor, not a suggestion with room to shave off a week if the bird seems fine, and 30 to 45 days in a separate, isolated room is the wider window, while the new arrival is screened for chlamydia, salmonella, polyomavirus, and PBFD.", source: "bird-quarantine-guide" },
        { label: "Kitchen and air", value: "A bird's respiratory system turns ordinary household fumes, from an overheated nonstick pan to a scented candle, into something that can kill it in minutes with no warning.", source: "bird-household-hazards-guide" },
      ],
    },
    emergencyCard: {
      source: "quaker-parakeet-health-issues-guide",
      callNow: [
        "Anorexia, lethargy, an overgrown beak and nails, green-tinted droppings, labored breathing or a swollen abdomen (fatty liver disease)",
        "Feather plucking, especially self-inflicted skin damage on the chest and shoulders. Always see a vet first to rule out a medical cause",
        "Feather, beak or immune-system abnormalities (PBFD). There's no cure, which makes early diagnosis and preventing spread to other birds genuinely important",
        "A bacterial infection spread through droppings and respiratory secretions that can pass to people in the household (psittacosis). See a vet, this needs proper diagnosis and treatment for everyone's sake, not just the bird's",
      ],
      vetLine: "Fix the diet first: an all-seed diet drives both the fatty liver disease and the vitamin deficiencies here. Then cover social interaction and enrichment, which is what keeps feather plucking down. Hygiene and quarantine handle PBFD and psittacosis.",
    },
    routes: [
      { slug: "quaker-parakeet-legal-guide", line: "All 52 jurisdictions read against the state codes themselves, thirteen outright bans, and why every one of them is an invasive species rule." },
      { slug: "quaker-parakeet-cost-guide", line: "$250 to $500 for the bird, dated retail prices for the setup, real clinic pricing, and the toy line that never stops." },
      { slug: "quaker-parakeet-tank-setup-guide", line: "Cage size and bar spacing, why a nest box is the one thing never to add, diet basics, and lighting that is optional rather than required." },
      { slug: "quaker-parakeet-handling-guide", line: "Temperament, the nest-building instinct behind the cage aggression, and the legal trap that catches buyers before they ever handle one." },
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
    tagline: "The tiny, sociable finch that thrives in pairs and doesn't need or want to be handled!",
    funFact: "Zebra finches are the most widely studied songbird in neuroscience. Only males sing, and they learn their song from a tutor as juveniles in a process remarkably similar to how human babies learn speech, which has made them one of science's best models for understanding vocal learning.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine and household hazards
    // cite the shared bird guides in the sidebar's Health and More list.
    // Built 2026-09-14 for the zebra finch set
    // test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Never one bird", value: "Plan the cage size, perch layout, and even the number of feeding stations around at least two birds from the very start.", source: "zebra-finch-tank-setup-guide" },
        { label: "Cage size and shape", value: "At least 24 inches long by 14 inches wide by 18 inches tall as a minimum for a pair. Treat that as a floor, not a target, since more horizontal space is genuinely better.", source: "zebra-finch-tank-setup-guide" },
        { label: "Bar spacing", value: "No wider than 3/8 inch.", source: "zebra-finch-tank-setup-guide" },
        { label: "Temperature", value: "Normal household temperature, 65 to 80°F. Keep the cage away from drafts, air conditioning vents, and direct sun. No supplemental heat is needed indoors.", source: "zebra-finch-tank-setup-guide" },
        { label: "Light cycle", value: "Approximately 12 hours of light and 12 hours of darkness each day, with natural daylight or full-spectrum artificial lighting during the day.", source: "zebra-finch-tank-setup-guide" },
        { label: "Nesting material", value: "A nest site plus material readily triggers breeding, so if you do not want chicks, provide the material and no nest. Never use loose fibrous nesting fluff, which wraps around legs and toes.", source: "zebra-finch-enrichment-guide" },
        { label: "Diet split", value: "Pellets roughly 70% of the diet, and 60% at an absolute minimum, with fresh fruit and vegetables another 20% and seed limited to about one level teaspoon per bird per day.", source: "zebra-finch-feeding-guide" },
        { label: "How food is offered", value: "The pelleted diet stays constantly available in a separate dish, while the seed portion is measured out separately and kept small rather than left freely available around the clock. Fresh water continuously, with dishes cleaned daily.", source: "zebra-finch-feeding-guide" },
        { label: "Cuttlebone", value: "A cuttlebone or mineral block should be a permanent fixture in the cage, giving the birds a way to peck out calcium as they need it, and it matters most for laying hens.", source: "zebra-finch-feeding-guide" },
        { label: "Handling and catching", value: "These are hands-off birds, not really trainable the way a parrot type bird is, and they do not enjoy being held. Never grab or restrain a finch by the tail, it causes real, painful feather loss.", source: "zebra-finch-handling-guide" },
        { label: "Vet schedule", value: "The first veterinary visit within 1 to 2 weeks of bringing a bird home, with at least annual checkups after that, twice yearly preferred.", source: "zebra-finch-cost-guide" },
        { label: "Budget", value: "Commonly $15 to $60 per bird, and at least two birds, so roughly $30 to $120 for a starting pair. Upfront setup runs roughly $180 to $400 for a pair including the birds, with the cage the single biggest line item at $120 to $220, then roughly $10 to $25 a month.", source: "zebra-finch-cost-guide" },
        { label: "Lifespan", value: "Typically 5 to 7 years in captivity against 2 to 3 years in the wild, with some birds only reaching 3 to 5.", source: "zebra-finch-cost-guide" },
        { label: "Adult size", value: "3.9 to 4.3 inches (10 to 11 cm), 0.3 to 0.5 oz." },
        { label: "Quarantine", value: "At least 30 days is the floor, not a suggestion with room to shave off a week if the bird seems fine, and 30 to 45 days in a separate, isolated room is the wider window.", source: "bird-quarantine-guide" },
        { label: "Household fumes", value: "PTFE coatings start releasing toxic gas once they're heated above 280°C (536°F). A pan left empty on a hot burner, or one preheating longer than needed, can reach that point in a few minutes, well before it looks or smells like anything is wrong.", source: "bird-household-hazards-guide" },
      ],
    },
    emergencyCard: {
      source: "zebra-finch-health-issues-guide",
      callNow: [
        "Ruffled or unkempt feathers",
        "Reduced eating or drinking",
        "Sleeping more than usual",
        "Labored or open-mouth breathing",
        "Tail bobbing with each breath",
        "Diarrhea or abnormal droppings",
        "Balance problems",
        "Head tilt",
      ],
      vetLine: "Any of these, especially in combination, is worth a same-day call to an avian vet rather than a wait-and-see approach, given how much of an illness head start this species already has by the time it shows. A laying hen sitting on the cage floor, straining, with a swollen abdomen is the one that cannot wait at all: egg binding is treated as same-day urgent.",
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
      "Wide flight cage, at least 24 by 14 by 18 inches for a pair, bar spacing no wider than 3/8 inch",
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
