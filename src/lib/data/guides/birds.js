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
    // the hub keeps no number of its own. Adult size and lifespan come from
    // the encyclopedia entry, which no deep dive repeats. Day one and power
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "Flight cage (24-30 in wide)", low: 60, high: 120 },
        { item: "Perches of varied diameters", low: 15, high: 25 },
        { item: "Shallow bath dish", low: 8, high: 15 },
        { item: "Cuttlebone or mineral block", low: 5, high: 10 },
      ],
      annual: [
        { item: "Seed mix or pellets", low: 50, high: 80 },
        { item: "Fresh greens and vegetables", low: 50, high: 90 },
        { item: "Egg food (molting/breeding season)", low: 15, high: 25 },
        { item: "Annual avian vet check", low: 40, high: 70 },
      ],
    },
    sections: {
      housing: "A flight cage at least 24 to 30 inches wide is far better than a typical small cage, since canaries are active fliers that need horizontal space more than height. Provide multiple natural perches of varying diameter positioned so the bird can fly lengthwise across the cage. Position away from drafts, kitchen fumes (which are lethal to birds), and direct sun. Canaries do best kept singly or in a compatible pair - males housed together, especially during breeding season, will often fight. Cover the cage at night to provide a consistent 10 to 12 hours of uninterrupted darkness for sleep.",
      diet: "A high-quality canary or finch seed mix can form a base, but a pelleted diet or seed heavily supplemented with fresh greens (dandelion, spinach, chickweed) and vegetables closes the nutritional gaps that come with a seed-only diet. Egg food - hard-boiled egg mixed with bread or a commercial egg food supplement - provides valuable protein, especially important during molting and breeding season. A cuttlebone or mineral block supplies calcium and trace minerals. Provide fresh water daily.",
      enrichment: "Canaries are primarily an observation and listening bird rather than a hands-on interactive pet - most do not enjoy handling and are happiest simply watched and listened to. Provide a shallow bath dish, since canaries bathe enthusiastically and regularly. Natural light exposure supports healthy singing behavior and normal molt cycles. Swings and simple toys add modest enrichment, though canaries are far less toy-driven than parrots. A stable, calm, consistent daily routine matters more to their wellbeing than direct interaction ever will.",
      health: "Mites, including scaly-leg mites, cause crusty growths on the legs and beak and are treatable with an avian-specific antiparasitic. Respiratory infections show as tail-bobbing with each breath, labored breathing, and fluffed feathers, and require urgent veterinary attention. Obesity from seed-heavy diets is common and preventable with a more balanced diet. Egg-binding can occur in females even without a male present, since a single hen can still lay infertile eggs - watch for straining, fluffed and lethargic behavior, and seek veterinary care immediately if suspected. Annual avian veterinary checkups are recommended.",
      checklist: [
        "Flight cage at least 24-30 inches wide",
        "Multiple perches of varying diameter",
        "High-quality seed mix or pellets",
        "Fresh greens and vegetables daily",
        "Egg food during molting/breeding season",
        "Cuttlebone or mineral block",
        "Shallow bath dish",
        "Cage cover for nighttime darkness",
        "Avian veterinarian contact",
      ],
    },
    faqs: [
      { q: "Do canaries need a companion?", a: "Not necessarily. Unlike flock parrots, many canaries thrive alone and are actually calmer and sing more without competition from another male in the room. A compatible pair can work, but males housed together frequently fight, especially during breeding season." },
      { q: "Why won't my canary sing?", a: "A few possibilities: it may be a hen rather than a male (only males typically sing), it may be going through a molt (birds sing far less during this period), or it could simply be an individual quirk, since not every male canary sings constantly. Stress or illness can also suppress singing, so rule those out if the change is sudden." },
      { q: "Can canaries be handled?", a: "Generally, no. Canaries are an observation bird that stresses easily with handling, and most are content simply being watched and listened to rather than physically interacted with." },
      { q: "What do canaries eat?", a: "A quality seed mix or pellet diet as a base, with daily fresh greens and vegetables to fill nutritional gaps, plus egg food during breeding and molting season for extra protein." },
      { q: "How long do canaries live?", a: "8 to 10 years is typical, with some canaries reaching 12 to 15 years under excellent care." },
      { q: "Should I get a canary or a zebra finch?", a: "Both are quiet, low-handling birds that don't need one-on-one interaction the way a parrot does, but their social setups are opposite. A canary does best alone or in a same-sex pair, since males often fight over territory, and it's kept mainly to be heard: only males sing, and that song is the whole point. A zebra finch should never be kept alone and doesn't sing in that same elaborate, solo way, but a bonded pair or small flock is genuinely enjoyable to watch interact all day. Pick a canary if you want a soloist you can listen to. Pick a zebra finch if you like the idea of watching a little flock." },
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
        { label: "Day one", value: "At least 30 days quarantined in a separate room with its own airspace, away from any bird you already own. Thirty days is the floor, published guidance runs 30 to 45, and a multi-bird household is safer nearer the 90 days recommended for an aviary.", source: "bird-quarantine-guide" },
        { label: "Cage size", value: "24x24x30 inches is the common minimum for a single adult, but treat that as a floor, not a target. Bigger is always better, aim for 30 to 36 inches or more in multiple dimensions, or a genuine flight cage if you can manage it. Your bird should be able to fully stretch and flap its wings without touching the sides.", source: "conure-tank-setup-guide" },
        { label: "Bar spacing", value: "Bar spacing should be 1/2 to 5/8 inch maximum to prevent head entrapment or escape.", source: "conure-tank-setup-guide" },
        { label: "Temperature", value: "Normal household temperatures of 65 to 80°F work well. Avoid drafts, direct air-conditioning vents, and sudden temperature swings. No supplemental heating is needed in a typical indoor environment.", source: "conure-tank-setup-guide" },
        { label: "Lighting and sleep", value: "Full-spectrum UV lighting made for birds (UVB 5.0 or a similar avian-specific bulb) is recommended by multiple care sources for 10 to 12 hours daily, supporting vitamin D synthesis, especially important for indoor birds with limited natural sunlight. Maintain a consistent day and night photoperiod, covering the cage at night gives 10 to 12 hours of real darkness.", source: "conure-tank-setup-guide" },
        { label: "Cage bottom", value: "Most keepers use a grate with paper, newspaper, or a cage liner underneath for easy daily cleaning. Avoid loose substrates like corn cob or wood chips, both can be ingested or harbor mold.", source: "conure-tank-setup-guide" },
        { label: "Placement", value: "Never use non-stick or Teflon cookware near the bird, the fumes are highly toxic. For placement, a family living area helps the bird feel like part of the flock, but keep one side of the cage against a wall for security, and stay well away from the kitchen, both the fumes and the heat are risks there.", source: "conure-tank-setup-guide" },
        { label: "Out-of-cage time", value: "Out-of-cage time, several hours of supervised free time daily, isn't optional, it's essential for both physical and mental health.", source: "conure-tank-setup-guide" },
        { label: "Diet", value: "Fatty liver disease and vitamin A deficiency both stem from the same root cause: an all-seed or high-fat diet with too little vegetable variety and not enough exercise. Caught early, this is manageable with diet correction, feeding a quality pelleted diet alongside fresh vegetables instead of a seed-only bowl. Seed-only diets are one of the most common, and most preventable, causes of chronic illness in this species.", source: "conure-health-issues-guide" },
        { label: "Pellet conversion", value: "Two workable methods, both built around gradual substitution rather than an abrupt swap: 75% seed and 25% pellets for 3 days, then a 50/50 mix for 3 days, then 25% seed and 75% pellets until the bird is fully converted; or a daily taper from 90% seed down to 0% on day 10. Either one can take days, weeks or months.", source: "bird-pellet-conversion-guide" },
        { label: "Feeding style", value: "Wild parrots spend up to six hours a day searching for, selecting and manipulating food. A conure with a full bowl is finished in minutes, and everything that goes wrong behaviorally with parrots tends to grow in that empty stretch. Stop using a bowl as the primary delivery method.", source: "conure-enrichment-guide" },
        { label: "Handling", value: "Genuine nippiness shows up more in young birds, especially under one to two years old, and in hormonal adults. Watch for warning signs before a bite happens: pinned eyes, flared tail feathers, or lunging.", source: "conure-handling-guide" },
        { label: "Sexing", value: "Green cheek conures are sexually monomorphic, males and females look the same, so there's no reliable visual test, despite claims floating around about head shape or foot color. If you actually need to know, DNA testing is the standard.", source: "conure-handling-guide" },
        { label: "Budget", value: "$250 to $700+ for the bird itself, more at pet stores. Roughly $400 to $900 or more to set up before the bird. Roughly $250 to $500 a year after that, and a routine wellness exam commonly runs $80 to $160.", source: "conure-cost-guide" },
        { label: "Adult size", value: "10 inches (25 cm) including tail; 2-2.5 oz." },
        { label: "Lifespan", value: "20 to 25 years or more is the commonly cited range, with some individuals reaching 30 years under excellent care.", source: "conure-cost-guide" },
        { label: "Disease risk", value: "Psittacine Beak and Feather Disease (PBFD), Proventricular Dilatation Disease (PDD), and polyomavirus are the ones to know. These are contagious, spreading through new birds, contaminated equipment, or breeding facilities, and there's no reliable cure for most of these.", source: "conure-health-issues-guide" },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "18x18x24 in cage (larger preferred)", low: 100, high: 280 },
        { item: "Perches of varied diameters", low: 15, high: 25 },
        { item: "Foraging and shreddable toys", low: 20, high: 40 },
        { item: "Food and water dishes", low: 10, high: 20 },
        { item: "Cuttlebone or mineral block", low: 5, high: 12 },
        { item: "Nail clippers", low: 8, high: 12 },
      ],
      annual: [
        { item: "Small parrot pellets", low: 70, high: 110 },
        { item: "Fresh vegetables", low: 80, high: 130 },
        { item: "Toys (rotating)", low: 40, high: 70 },
        { item: "Annual avian vet check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `A minimum cage of 18x18x24 inches suits a single parrotlet, though wider and more horizontal space is always appreciated since, despite their tiny size, parrotlets are active and energetic. Bar spacing of 3/8 to 1/2 inch keeps a parrotlet from squeezing through or getting a head or foot caught, since these birds are proportionally stronger and more determined than their size suggests.

Position the cage at eye level against a wall, away from the kitchen, drafts, and direct sunlight. Cooking fumes, especially from overheated non-stick cookware, are instantly lethal to a bird this small. Parrotlets are alert, watchful birds that feel most secure with a stable wall behind them and a clear view of the room.

Provide several perches of varying diameters (natural wood is preferred over uniform dowels) along with a swing and a ladder or two. Parrotlets are surprisingly strong chewers for their size, so cage bars and accessories should be sturdy rather than the flimsiest budget option.

A consistent 10 to 12 hours of covered darkness each night supports healthy sleep. If you plan to keep a bonded pair rather than a single bird, budget for a noticeably larger cage, since two parrotlets need meaningfully more space than the minimum for one.`,
      diet: `A high-quality small parrot pellet should form the base of a parrotlet's diet, supplemented daily with finely chopped fresh vegetables and a small amount of fruit. Pellet-based nutrition heads off the fatty liver disease and vitamin deficiencies that come from a seed-heavy diet, a problem parrotlets are just as prone to as any larger parrot despite their size.

Offer fresh vegetables daily: leafy greens, bell pepper, broccoli, carrot, and peas are all good choices. Introduce new foods gradually and expect some initial refusal, since parrotlets can be surprisingly stubborn about trying unfamiliar food.

Seed mix can be offered in small amounts, ideally through a foraging toy rather than an open dish, and a few pieces of millet work well as a training reward. A cuttlebone or mineral block should be available at all times for calcium.

Strictly avoid avocado, chocolate, caffeine, onion, garlic, alcohol, and xylitol, all of which are toxic to birds. Fresh water changed daily is essential.`,
      enrichment: `Parrotlets have a genuinely outsized personality: bold, curious, and seemingly unaware that they are one of the smallest parrots kept as pets. That confidence needs an outlet, or it curdles into nippiness and territorial behavior.

Daily out-of-cage time of at least an hour in a bird-safe, supervised space is important. Parrotlets are strong, fast fliers that enjoy exploring, so bird-proof the room thoroughly before letting one out: cover windows, secure other pets, and close off small gaps they could squeeze into.

Consistent, gentle daily handling from a young age is what determines whether a parrotlet grows into an affectionate, easygoing bird or a defensive, bitey one. Unlike a zebra finch, a parrotlet actively bonds to a person and can learn to say a handful of words, but that bond has to be built and maintained through regular interaction, not assumed.

If you keep a bonded pair, expect them to bond tightly to each other rather than to you, which is a perfectly good outcome if companionship rather than a hands-on pet is what you want. A single, well-socialized parrotlet is the better choice if a close human bond is the goal.`,
      health: `Feather plucking and other feather-destructive behavior can develop from boredom, stress, or an under-stimulated environment, the same as in larger parrots. Rule out medical causes with an avian vet before assuming it is purely behavioral.

Obesity from a seed-heavy, low-exercise diet is a common and preventable problem. A pelleted diet and daily out-of-cage activity are the two most effective safeguards. Respiratory infections show up as tail-bobbing with each breath, nasal discharge, and fluffed, lethargic posture, and need prompt veterinary attention since birds mask illness until it is fairly advanced.

Parrotlets are otherwise considered a fairly hardy small parrot with no major breed-specific disease, but their small size and fearless personality make them vulnerable to household accidents: being stepped on, caught in a door or gap, or grabbed by a curious cat or dog. Supervision during out-of-cage time matters as much for physical safety as for behavior.

Annual avian veterinary checkups are recommended. With good care, parrotlets are notably long-lived for such a small bird, commonly reaching 15 to 20 years and occasionally into their 20s or 30s, so budget for a companion animal that may be around for two decades.`,
      checklist: [
        "18x18x24 in cage minimum (larger preferred)",
        "High-quality small parrot pellets",
        "Fresh vegetables daily, seed as a treat/training reward",
        "Cuttlebone or mineral block",
        "Multiple perches, a swing, and chew-safe toys",
        "Daily out-of-cage time in a bird-proofed space",
        "Consistent gentle handling from a young age",
        "Avian veterinarian contact",
      ],
    },
    faqs: [
      { q: "Is a parrotlet a good first parrot?", a: "It can be, but it is a different kind of beginner bird than a budgie or cockatiel. Parrotlets are small and relatively low-maintenance in terms of space and noise, but they are bold and strong-willed, and an under-socialized bird can become genuinely nippy. Someone willing to commit to consistent, gentle daily handling from early on will likely find a parrotlet rewarding. Someone wanting a more forgiving, hands-off-friendly first bird may be happier starting with a budgie or cockatiel." },
      { q: "Can parrotlets talk?", a: "Some can, though they are not among the most talkative parrots. A parrotlet may learn to say a handful of words or phrases, especially a hand-raised bird bonded closely to one person, but they are not in the same league as a budgie or an African grey. This is still a real point of contrast with a zebra finch, which cannot be taught to talk at all." },
      { q: "Should I get one parrotlet or a bonded pair?", a: "It depends on what you want from the relationship. A single, well-socialized parrotlet bonds intensely to its person and can become a genuinely affectionate companion. A bonded pair will bond mainly to each other rather than to you, which is a fine outcome if you want to watch and enjoy two birds together rather than form a close hands-on bond with one. Mixing the two goals rarely works well." },
      { q: "How long do parrotlets live?", a: "Commonly 15 to 20 years in captivity with good care, and some individuals live into their 20s or even 30s. That is notably long for a bird this small; a zebra finch of similar size typically lives only 5 to 10 years. A parrotlet is a two-decade commitment, not a short-lived starter pet." },
      { q: "Are parrotlets aggressive?", a: "Not inherently, but they are feisty and can become nippy or territorial without regular, gentle socialization. Their bite is noticeably stronger than a budgie's for their size, which is part of why they are usually recommended for adults or older children rather than young kids. Consistent, calm daily handling from early on is the main thing that keeps a parrotlet's boldness from turning into aggression." },
      { q: "Parrotlet or budgie: which is the better first bird?", a: "A budgie is generally the more forgiving choice: gentler by temperament, more likely to learn an extensive vocabulary, cheaper to buy, and just as content solo with plenty of attention or paired up with another budgie. A parrotlet is smaller and quieter but has a noticeably stronger bite for its size and a bolder, more assertive personality that needs consistent handling to stay friendly rather than nippy. If you want the lower-drama, kid-friendlier option, get the budgie. If you want a bird with outsized personality and don't mind putting in the socialization work, a parrotlet is a great alternative." },
    ],
  },
  {
    id: "quaker-parakeet",
    name: "Quaker Parakeet",
    emoji: "🦜",
    difficulty: "Intermediate",
    petType: "Birds",
    image: "/assets/guides/quaker-parakeet.jpg",
    tagline: "A bold, talkative little parrot that several states will not let you keep!",
    funFact: "The Quaker is the only parrot in the world that builds its own stick nest instead of using a tree hollow. Wild colonies raise apartment-block structures with a separate chamber per pair, and captive Quakers will try the same thing with anything you leave in the cage.",
    // Labels match `covers` strings in affiliateProducts.js and the figures are those
    // products' vetted prices. See scripts/check-cost-coverage.mjs.
    costs: {
      setup: [
        { item: "Flight cage (24-30 in wide)", low: 120, high: 220 },
        { item: "Perches of varied diameters", low: 10, high: 25 },
        { item: "Foraging and shreddable toys", low: 10, high: 22 },
        { item: "Food and water dishes", low: 10, high: 18 },
        { item: "Cuttlebone or mineral block", low: 8, high: 12 },
        { item: "Gram scale (weight monitoring)", low: 30, high: 40 },
        { item: "Travel carrier", low: 15, high: 20 },
      ],
      annual: [
        { item: "Small parrot pellets", low: 15, high: 22 },
        { item: "Fresh vegetables and some fruit", low: 200, high: 400 },
        { item: "Toys (rotating)", low: 10, high: 22 },
        { item: "Shallow bird bath", low: 12, high: 16 },
        { item: "Annual avian vet exam", low: 90, high: 200 },
      ],
    },
    sections: {
      housing: `Check your state law before you buy. This is the only common pet parrot with a real legal problem attached: escaped Quakers build enormous stick nests on electrical infrastructure and have established breeding colonies across the US, so several states ban or restrict the species outright and others require permits or banding. It is the first thing to settle, not the last.

Give a single Quaker at least 24x24x30 inches, and more if you can. They are only about eleven inches long but they are stocky, busy and territorial, and they use every inch. Bar spacing should be around five eighths of an inch.

They will try to build. Quakers are the one parrot that constructs a nest rather than occupying a hollow, and a caged Quaker will weave paper, wood, rope and anything else into a corner. Giving them safe material to do it with is enrichment; leaving a nest box or a dark enclosed hide in the cage encourages hormonal and territorial behavior and is best avoided.

Keep the cage out of the kitchen. Fumes from overheated non-stick cookware are lethal to parrots, and Quakers are small enough to be killed quickly. Scented candles, aerosols and self-cleaning oven cycles carry the same risk.

Room temperature of 65 to 80 degrees F suits them, away from drafts and direct sun.`,
      diet: `Base the diet on a quality pellet, not a seed mix. Seed-only diets are the leading nutritional cause of illness in pet parrots, producing obesity, fatty liver disease and vitamin A deficiency. Pellets should make up roughly 60 to 70 percent of intake.

Add fresh vegetables daily: dark leafy greens, broccoli, carrot, squash, peppers and sweet potato. Fruit is a smaller share, offered as a treat rather than a staple, since Quakers put on weight readily.

Seed and nut go in as training rewards rather than as a meal. A few sunflower seeds have real value as a reinforcer; a bowl of them is a health problem.

Never give avocado, chocolate, caffeine, alcohol, onion, garlic, or anything containing xylitol. Avocado in particular is acutely toxic to parrots.

Fresh water daily in a bowl that gets washed properly, since Quakers dunk food and foul water quickly.`,
      enrichment: `Quakers are famously bold for their size and they need a job. Expect to replace toys constantly: shreddable palm, paper, soft wood, foraging puzzles and anything they can dismantle.

They are among the best talkers of any small parrot, often building vocabularies in the dozens or beyond, and they pick up words readily from repetition in context rather than from drilling.

Plan on several hours of out-of-cage time daily, with supervision. A playstand outside the cage gives them somewhere legitimate to be.

Watch the territoriality. Quakers frequently become defensive about the cage itself while being perfectly friendly away from it, and many bond hard to one person and get sharp with everyone else. Handling by several people from early on, and doing interactions away from the cage, both help a lot.

They are loud. Not macaw loud, but a Quaker has a piercing contact call it uses when it wants company, and that is a genuine consideration in an apartment.`,
      health: `Feather destructive behavior is the problem most associated with this species, and in Quakers it can go past plucking into self-inflicted skin damage, usually on the chest and shoulders. Causes are tangled and include boredom, hormonal frustration, poor diet, allergy and anxiety, and it needs an avian vet promptly rather than waiting to see whether it settles. Keepers often call the severe form Quaker mutilation syndrome, though the sources we checked describe it simply as feather destructive behavior.

Fatty liver disease follows from seed-heavy diets and too little exercise, and Quakers are prone to it.

Psittacosis, aspergillosis and general respiratory infection show up as tail bobbing, nasal discharge, fluffed-up posture and changes in droppings. Birds mask illness until late, so any visible change is already worth a call.

Egg binding affects females, including those with no male present, and chronic egg laying is an issue in hormonal hens. Reduce daylight hours and remove nest-like spaces if it starts.

Establish care with an avian vet, not a general small animal practice, and get a baseline exam early. Annual checks catch the slow problems while they are still fixable.`,
      checklist: [
        "Check state and city law before buying, and before moving",
        "24x24x30 in cage minimum, 5/8 in bar spacing",
        "Pelleted base diet, not a seed mix",
        "Fresh vegetables daily",
        "Varied perch types and sizes",
        "Constant supply of shreddable and foraging toys",
        "Several hours of supervised out-of-cage time",
        "No non-stick cookware in the home",
        "Playstand away from the cage for handling",
        "Avian veterinarian, with an annual exam"
      ],
    },
    faqs: [
      { q: "Are Quaker parakeets legal to own?", a: "Not everywhere, and this is the species where you must check first. Escaped Quakers build large communal stick nests on power infrastructure and have established breeding colonies well outside their native range, so a number of US states ban them outright and others require permits, banding or wing clipping. It is the only common pet parrot with a widespread legal problem attached. Lafeber notes birds have been confiscated and euthanized in states where they are illegal to own, so check your state and city before buying, and check again before moving to a new one." },
      { q: "Do Quaker parakeets talk?", a: "Yes, and they are among the most reliable talkers of any small parrot. Many build vocabularies of dozens of words and use them in context, often with clearer diction than a budgie. They learn best from repetition tied to a real situation, a greeting as you walk in, a word as you hand over food, rather than from recordings. Not every individual talks, and hand-raised birds that get plenty of interaction are the most likely to." },
      { q: "Why is my Quaker plucking its feathers?", a: "Quaker mutilation syndrome is a recognized problem in this species, going beyond ordinary plucking to self-inflicted skin damage, usually on the chest and shoulders. The causes overlap: boredom, hormonal frustration, poor diet, allergies and anxiety all contribute, and it can become a habit that outlives the original trigger. See an avian vet early rather than waiting, because the earlier it is addressed the better the outcome." },
      { q: "Should I give my Quaker a nest box?", a: "No, in almost all pet situations. Quakers are the only parrots that build their own nests and the drive is strong, but a nest box or any dark enclosed space encourages hormonal behavior, territorial aggression and chronic egg laying in hens. Give them shreddable and weavable material to satisfy the building instinct out in the open instead, and keep enclosed hides out of the cage." },
      { q: "Are Quaker parakeets loud?", a: "Moderately, with a piercing contact call they use to locate their flock, which in a home means you. They are not in macaw or cockatoo territory, but they are louder than a budgie and they call persistently when they want company. In an apartment that is worth thinking about honestly. Regular out-of-cage time and enough to do reduces attention calling considerably, though it will not eliminate the natural morning and evening noise." },
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
    // entry, which no deep dive repeats. Quarantine, household hazards, pellet
    // conversion, droppings, and photoperiod cite the shared bird guides in the
    // sidebar's Health and More list. Built 2026-09-14 for the zebra finch set
    // test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Never one bird", value: "This comes before cage dimensions, because it changes what the cage is for. Long-term solo housing isn't a design choice here the way it can be for a solo canary, it's a welfare problem. Plan the cage size, perch layout, and even the number of feeding stations around at least two birds from the very start.", source: "zebra-finch-tank-setup-guide" },
        { label: "Group size", value: "Wild zebra finches most often forage, drink and travel in groups of two, 94 percent of them mixed-sex and probably pair bonds, or in groups of three to ten. Larger groups were rarely seen. Two, or a handful. Not one, and not a crowd.", source: "zebra-finch-enrichment-guide" },
        { label: "Cage size", value: "At least 24 inches long by 14 inches wide by 18 inches tall as a minimum for a pair. Treat that as a floor, not a target, since more horizontal space is genuinely better.", source: "zebra-finch-tank-setup-guide" },
        { label: "Cage shape", value: "Zebra finches fly rather than climb, so a wide flight cage that lets the birds cross the length of it in real flight suits this species far better than a tall, narrow cage built with a climbing bird in mind.", source: "zebra-finch-tank-setup-guide" },
        { label: "Bar spacing", value: "No wider than 3/8 inch. That's tighter than the roughly 1/2 inch that works for a canary, since zebra finches are a genuinely smaller bird, and wider spacing carries a real risk of a head getting caught or a bird squeezing through entirely.", source: "zebra-finch-tank-setup-guide" },
        { label: "Temperature", value: "Normal household temperature, 65 to 80°F. Keep the cage away from drafts, air conditioning vents, and direct sun. No supplemental heat is needed indoors.", source: "zebra-finch-tank-setup-guide" },
        { label: "Light cycle", value: "Approximately 12 hours of light and 12 hours of darkness each day, with natural daylight or full-spectrum artificial lighting during the day. A consistent daily schedule matters more than hitting an exact hour count.", source: "zebra-finch-tank-setup-guide" },
        { label: "Perches and bathing", value: "Several perches of varied diameter, positioned with enough distance between them that the birds fly rather than just hop across. A shallow bird bath is genuinely worth adding too, zebra finches bathe readily and it supports healthy feather condition.", source: "zebra-finch-tank-setup-guide" },
        { label: "Cage lining", value: "A paper liner on the cage floor, spot-cleaned daily and fully changed weekly, which also makes it easy to monitor droppings for early signs of illness.", source: "zebra-finch-tank-setup-guide" },
        { label: "Nesting material", value: "Zebra finches carry, shred and arrange material constantly. A nest site plus material readily triggers breeding, so if you do not want chicks, provide the material and no nest. Never use loose fibrous nesting fluff, which wraps around legs and toes.", source: "zebra-finch-enrichment-guide" },
        { label: "Diet split", value: "Pellets roughly 70% of the diet, and 60% at an absolute minimum, with fresh fruit and vegetables another 20% and seed limited to about one level teaspoon per bird per day.", source: "zebra-finch-feeding-guide" },
        { label: "How food is offered", value: "The pelleted diet stays constantly available in a separate dish, while the seed portion is measured out separately and kept small rather than left freely available around the clock. Fresh water continuously, with dishes cleaned daily. Pull fresh greens or produce within a couple of hours of offering them.", source: "zebra-finch-feeding-guide" },
        { label: "Cuttlebone", value: "A cuttlebone or mineral block should be a permanent fixture in the cage, giving the birds a way to peck out calcium as they need it, and it matters most for laying hens.", source: "zebra-finch-feeding-guide" },
        { label: "Egg food", value: "A small amount of boiled egg mixed with bread, or a commercial egg food supplement, for a protein boost that matters most during molting and breeding. Offer it fresh and remove any uneaten portion within a couple hours, moist egg mixes spoil quickly.", source: "zebra-finch-feeding-guide" },
        { label: "Grit", value: "Not needed. Zebra finches hull their seeds, so they don't need grit to mechanically break down whole seeds, and overconsumption can cause gastrointestinal tract obstruction.", source: "zebra-finch-feeding-guide" },
        { label: "Handling", value: "These are hands-off birds, not really trainable the way a parrot type bird is, and they do not enjoy being held. Forcing contact will likely terrify and stress the bird and tends to produce a more fearful, harder-to-approach one instead of a tamer one.", source: "zebra-finch-handling-guide" },
        { label: "Catching one", value: "A small, fine-mesh finch net is the gentlest option: let the bird land on a perch, wall, or the cage floor, then carefully slide the net over it rather than chasing it around the cage. Never grab or restrain a finch by the tail, it causes real, painful feather loss.", source: "zebra-finch-handling-guide" },
        { label: "Vet schedule", value: "The first veterinary visit within 1 to 2 weeks of bringing a bird home, with at least annual checkups after that, twice yearly preferred.", source: "zebra-finch-cost-guide" },
        { label: "Budget", value: "Commonly $15 to $60 per bird, and at least two birds, so roughly $30 to $120 for a starting pair. Upfront setup runs roughly $180 to $400 for a pair including the birds, with the cage the single biggest line item at $120 to $220, then roughly $10 to $25 a month.", source: "zebra-finch-cost-guide" },
        { label: "Lifespan", value: "Typically 5 to 7 years in captivity against 2 to 3 years in the wild, with some birds only reaching 3 to 5.", source: "zebra-finch-cost-guide" },
        { label: "Adult size", value: "3.9 to 4.3 inches (10 to 11 cm), 0.3 to 0.5 oz." },
        { label: "Quarantine", value: "At least 30 days is the floor, not a suggestion with room to shave off a week if the bird seems fine, and 30 to 45 days in a separate, isolated room is the wider window. Where birds come from multiple sources, 90 days of quarantine and testing before introduction. Care for your established birds first every single day and handle the quarantined bird last.", source: "bird-quarantine-guide" },
        { label: "Household fumes", value: "PTFE coatings start releasing toxic gas once they're heated above 280°C (536°F). A pan left empty on a hot burner, or one preheating longer than needed, can reach that point in a few minutes, well before it looks or smells like anything is wrong.", source: "bird-household-hazards-guide" },
        { label: "Seed to pellets", value: "Gradual substitution, never an abrupt swap: 75% seed and 25% pellets for 3 days, then a 50/50 mix for 3 days, then 25% seed and 75% pellets until the bird is fully converted. Weigh the bird daily on a gram scale, and a drop of more than 10% from its starting weight means stop and call an avian vet rather than waiting it out.", source: "bird-pellet-conversion-guide" },
        { label: "Daily droppings check", value: "Line the cage tray with plain white paper instead of a patterned liner, so color changes are actually visible, and swap it daily so you're comparing today's droppings against a clean baseline rather than a smear of several days at once.", source: "bird-droppings-guide" },
        { label: "Sleep and hormones", value: "10 to 12 hours of uninterrupted sleep a night, a range that holds across the species kept as pets, small finches and large parrots alike. A bird's brain reads day length as a season, and an ordinary lit-up evening reads as an endless summer.", source: "bird-photoperiod-sleep-guide" },
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
