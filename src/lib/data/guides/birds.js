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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "36x24x48 in cage (larger preferred)", low: 300, high: 600 },
        { item: "Multiple textured perches", low: 30, high: 60 },
        { item: "Full-spectrum UVB light", low: 40, high: 70 },
        { item: "Foraging and puzzle toys", low: 40, high: 80 },
        { item: "Sleep cage or covered area", low: 80, high: 150 },
        { item: "Misting bottle", low: 8, high: 15 },
      ],
      annual: [
        { item: "High-quality parrot pellets", low: 150, high: 250 },
        { item: "Fresh vegetables and limited fruit", low: 150, high: 250 },
        { item: "Rotating toys", low: 80, high: 150 },
        { item: "Annual avian vet exam + bloodwork", low: 150, high: 300 },
      ],
    },
    sections: {
      housing: `African grey parrots require significantly more space than their body size might suggest. A minimum cage of 36x24x48 inches is required, though 48x36x60 inches or larger is strongly preferred. African greys need room to climb, flap, and move. Bar spacing of 3/4 to 1 inch. Stainless steel cages are the safest long-term investment.

Position the cage at eye level against a wall (providing psychological security) and away from the kitchen, drafts, and direct sunlight. Cooking fumes - especially from overheated non-stick cookware - are instantly lethal to birds. African greys are sensitive to environmental stress and benefit from a stable, consistent location.

Provide multiple perches of different diameters and textures: natural wood (manzanita, java, natural branch), rope, and cement perches help maintain foot health. Vary perch heights and placement throughout the cage. A separate sleep cage in a quiet, dark room used consistently each night provides the 10 to 12 hours of uninterrupted sleep African greys need.

Full-spectrum UVB lighting during daytime hours supports vitamin D3 synthesis and healthy calcium metabolism. African greys are notably prone to calcium deficiency and UVB exposure is a meaningful preventative measure.`,
      diet: `High-quality formulated pellets (Harrison's, Roudybush, or Lafeber's) should make up 60 to 70% of an African grey's daily intake. Pellets provide complete, balanced nutrition that seed-only diets cannot replicate. Transitioning from seeds to pellets takes patience - weeks of gradually mixing pellets into seed while monitoring weight - but is one of the most important health investments for a long-lived bird.

Fresh vegetables should constitute 20 to 30% of the diet. Leafy greens (kale, chard, romaine, dandelion), bell peppers, broccoli, carrots, sweet potato, and squash are excellent choices. Rotate offerings daily. Dark leafy greens provide Vitamin A - African greys are particularly prone to Vitamin A deficiency, which suppresses the immune system and causes respiratory and skin problems.

Fruit should be limited to 5 to 10% of diet (high sugar). Nuts (almond, walnut, Brazil nut) can be used as training rewards but are high in fat. Strictly avoid avocado, chocolate, caffeine, onion, garlic, alcohol, xylitol, and high-salt foods - these are toxic to birds. Fresh water changed twice daily is essential.`,
      enrichment: `African greys are frequently cited as the most cognitively sophisticated of all parrot species, with the intellectual capacity of a 5-year-old human child. Without adequate mental stimulation and social interaction, African greys develop severe behavioral problems: feather destructive behavior, excessive screaming, self-mutilation, and stereotypic compulsive behaviors.

Provide a rotating selection of foraging toys, puzzle feeders, shreddable toys, and novel objects every day. Training sessions using positive reinforcement (food rewards for tricks, words, and target behaviors) are excellent daily enrichment that strengthen the bird-keeper bond. African greys learn quickly - they need new challenges regularly.

Provide a minimum of 2 to 4 hours of supervised out-of-cage time daily in a bird-safe environment. A playstand outside the cage stocked with toys and foraging opportunities extends their active territory meaningfully.

Social interaction with their primary human is irreplaceable. African greys form intense pair bonds that transfer to a primary human caregiver in captivity. This requires a significant daily time commitment for the life of the bird - often 40 to 60+ years. Consider this seriously before acquiring an African grey.`,
      health: `Feather Destructive Behavior (FDB) - feather plucking or barbering - is the most visible sign of psychological distress. Causes include boredom, loneliness, hormonal imbalance, nutritional deficiency, infections, and allergies. Addressing FDB requires identifying the underlying cause through veterinary and behavioral assessment. It is rarely simple to resolve.

Psittacine Beak and Feather Disease (PBFD) is a serious viral disease that attacks feather follicles and the immune system. Symptoms include abnormal feather growth and progressive immune failure. There is no cure. Test all new birds before contact with existing birds.

Calcium deficiency manifests as seizures and muscle weakness in African greys - they are metabolically predisposed to this condition more than most parrots. UVB exposure and adequate dietary calcium are preventative. Aspergillosis (fungal respiratory infection) is also common, particularly in birds with compromised immune systems.

Annual avian veterinary exams including complete blood panel are essential. Find an avian vet before you need one. African greys can live 40 to 60 years - establish a long-term veterinary relationship early.`,
      checklist: [
        "Minimum 36x24x48\" cage (larger preferred)",
        "High-quality parrot pellets (Harrison's or Roudybush)",
        "Fresh vegetables and limited fruit daily",
        "Multiple textured perches",
        "Foraging toys and puzzle feeders",
        "UVB light (full spectrum, 10 to 12 hours/day)",
        "Shower or misting bottle for bathing",
        "Safe chew toys (bird-safe wood, rope)",
        "Sleep cage or covered area",
        "Avian veterinarian experienced with parrots"
      ],
    },
    faqs: [
      { q: "How intelligent are African grey parrots?", a: "African greys are widely considered the most cognitively sophisticated parrots, with the intellectual capacity equivalent to a 5-year-old human child. The famous research parrot Alex demonstrated the ability to identify colors, shapes, and materials, count small quantities, and understand the concept of same and different - all in response to open-ended questions, not fixed cues. Most pet African greys do not reach Alex's level, but they demonstrate extraordinary contextual understanding that consistently surprises their keepers." },
      { q: "What should African grey parrots eat?", a: "60 to 70% of the diet should be high-quality formulated pellets (Harrison's, Roudybush, or Lafeber's) providing complete balanced nutrition. 20 to 30% should be fresh vegetables daily - leafy greens, bell peppers, broccoli, carrot, and sweet potato. African greys are particularly prone to Vitamin A deficiency, which suppresses immunity and causes respiratory and skin problems. Dark orange and green vegetables are the most important corrective. Limit fruit to 5 to 10% of the diet due to high sugar content." },
      { q: "How long do African grey parrots live?", a: "40 to 60 years in captivity with excellent care, and some individuals have exceeded 70 years. This makes the African grey one of the longest-lived companion animals available. The commitment is profound - most African greys outlive their original keepers and require provisions in estate plans for their long-term care. Entering into ownership of an African grey without explicit planning for their entire lifespan is a common ethical failure that leads to rehoming trauma for an emotionally sensitive species." },
      { q: "What causes feather plucking in African greys?", a: "Feather destructive behavior (plucking or barbering) is the most common behavioral problem in African greys and has multiple possible causes: boredom, inadequate social contact, hormonal imbalance, nutritional deficiency (especially Vitamin A), bacterial or fungal skin infections, heavy metal toxicity, and allergies. It is rarely simple to resolve and requires systematic veterinary and behavioral investigation. Prevention through adequate enrichment, social interaction, proper diet, and regular veterinary care is far more effective than treating established plucking." },
      { q: "Are African greys prone to calcium deficiency?", a: "Yes - African greys are metabolically predisposed to calcium deficiency more than most parrot species. Calcium deficiency causes muscle tremors, weakness, and in severe cases seizures. The two key preventatives are dietary calcium (dark leafy greens, calcium-enriched pellets, and limited dairy products) and UVB lighting, which enables Vitamin D3 synthesis and calcium absorption. An avian vet-quality UV-B bulb (not a reptile basking bulb) positioned appropriately within the cage is a meaningful investment for this species." },
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
        { label: "Day one", value: "At least 30 days quarantined in a separate room with its own airspace, away from any bird you already own. NASPHV and VCA both put the floor at 30 days, up to 45, and a multi-bird household is safer nearer the 90 days Merck recommends for an aviary.", source: "bird-quarantine-guide" },
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
        { label: "Day one", value: "At least 30 days quarantined in a separate room with its own airspace, away from any bird you already own. NASPHV and VCA both put the floor at 30 days, up to 45, and a multi-bird household is safer nearer the 90 days Merck recommends for an aviary.", source: "bird-quarantine-guide" },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "3x2x4 ft heavy-gauge cage with locks", low: 500, high: 1200 },
        { item: "Destructible wood chew toys (initial supply)", low: 60, high: 120 },
        { item: "Foraging toys (large parrot, heavy-duty)", low: 50, high: 100 },
        { item: "Cage-specific padlocks", low: 15, high: 30 },
      ],
      annual: [
        { item: "Large parrot pellets", low: 200, high: 350 },
        { item: "Fresh vegetables, fruit, and nuts", low: 200, high: 350 },
        { item: "Toys (rotating, heavy destruction rate)", low: 150, high: 300 },
        { item: "Annual avian vet exam + bloodwork", low: 150, high: 300 },
      ],
    },
    sections: {
      housing: "Provide the largest cage that can reasonably fit in your home - a minimum of 3x2x4 feet, with larger strongly preferred, since cockatoos are large, powerful birds that need real room to climb, stretch, and flap. Cage bars must be heavy-gauge metal, since cockatoos have immensely strong beaks capable of bending weaker cages or working open standard latches; many owners add cage-specific padlocks for this reason. Position the cage in a social area of the home, since isolation is especially damaging to this species. Keep a constant supply of destructible wood toys available, since chewing is a critical behavioral outlet and supports beak health.",
      diet: "A high-quality large parrot pellet should form 60 to 70% of the diet, supplemented daily with fresh vegetables, fruit, and a rotating variety of nuts (almonds and in-shell walnuts are excellent for foraging and enrichment). Seed-only diets cause the same fatty liver disease and nutritional deficiencies seen in smaller parrots, at greater scale given a cockatoo's size and long lifespan. Foraging-based feeding - food hidden in puzzle toys or wrapped in paper - is strongly recommended, both for nutritional enrichment and to occupy a bird that's otherwise prone to problem behaviors out of sheer boredom.",
      enrichment: "This is the single most important factor in a cockatoo's long-term wellbeing. Cockatoos require hours of daily direct interaction and are widely considered unsuitable for owners who are away from home for long stretches without a plan for companionship. Without adequate attention, cockatoos are highly prone to feather-destructive behavior, self-mutilation, excessive screaming, and severe anxiety. Provide a large, rotating supply of destructible wood and foraging toys, daily supervised out-of-cage time, and consistent physical affection - most cockatoos crave cuddling and close physical contact more than almost any other parrot. A realistic, honest assessment of available daily time is essential before acquiring this species.",
      health: "Feather-destructive behavior (plucking and self-mutilation) is extremely common in captive cockatoos and is very often behavioral or psychological - insufficient attention, boredom, or anxiety - rather than purely medical, though a vet should always rule out underlying illness or nutritional causes first. Screaming is a natural cockatoo vocalization but becomes excessive and distressing for the household when the bird's social needs aren't being met. Psittacine beak and feather disease (PBFD) is a serious viral concern in parrots, and screening new birds is recommended. Cockatoos can live 40 to 60 years or more, meaning many owners need a long-term care plan since the bird may well outlive them. Annual avian veterinary checkups are essential.",
      checklist: [
        "Large cage (3x2x4 ft minimum, heavy-gauge bars with secure locks)",
        "High-quality large parrot pellets",
        "Fresh vegetables, fruit, and nuts daily",
        "Foraging toys",
        "Constant supply of destructible wood chew toys",
        "Hours of daily direct interaction",
        "Social placement within the home",
        "Cage-specific padlocks",
        "Avian veterinarian contact",
        "A realistic long-term care plan (40-60+ year lifespan)",
      ],
    },
    faqs: [
      { q: "Are cockatoos good pets?", a: "They can be deeply affectionate and rewarding companions, but they're widely regarded as one of the most demanding parrots to keep responsibly. They need hours of daily interaction, are prone to severe behavioral problems like screaming and feather plucking without it, and can live 40 to 60+ years - meaning the commitment often outlasts an owner's active caregiving years. They aren't recommended for first-time bird owners or households that can't offer near-daily direct attention." },
      { q: "Why do cockatoos scream?", a: "Screaming is a natural, far-carrying flock-contact call used in the wild to locate other flock members. In captivity, it becomes excessive when a cockatoo's social and attention needs aren't being met, or as a learned behavior if screaming reliably gets a reaction from the owner." },
      { q: "Why is my cockatoo plucking its feathers?", a: "Feather-destructive behavior is very often linked to insufficient social interaction, boredom, or anxiety, though a vet should always rule out underlying medical or nutritional causes first. It's one of the most common and serious welfare issues in captive cockatoos and is far easier to prevent than to reverse once it becomes established." },
      { q: "How long do cockatoos live?", a: "40 to 60 years is typical, with some individuals living even longer. This exceptionally long lifespan means most people who acquire a cockatoo need a realistic plan for its care well into the future, potentially including rehoming arrangements later in life." },
      { q: "How much attention do cockatoos need?", a: "More than almost any other commonly kept parrot. Cockatoos evolved to maintain near-constant physical contact with their flock, and captive birds often expect the same level of attention from their owner. Hours of daily direct interaction are typically necessary to prevent serious behavioral problems." },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x30 in+ cage (larger preferred)", low: 100, high: 180 },
        { item: "Perches of varied diameters", low: 20, high: 40 },
        { item: "Foraging and shreddable toys", low: 30, high: 60 },
        { item: "Snuggle pouch or bird tent", low: 10, high: 20 },
      ],
      annual: [
        { item: "Small parrot pellets", low: 80, high: 120 },
        { item: "Fresh vegetables and limited fruit", low: 80, high: 140 },
        { item: "Toys (rotating)", low: 50, high: 90 },
        { item: "Annual avian vet check", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `A minimum cage of 24x24x30 inches is required for a green cheek conure, though 24x24x36 inches or larger is strongly preferred. Green cheeks are active and athletic birds that need room to climb, swing, and flap. Bar spacing of 1/2 to 3/4 inch prevents head entrapment. Stainless steel or powder-coated wrought iron cages from reputable manufacturers are the safest options.

Position the cage at eye level against a wall, away from the kitchen (cooking fumes are lethal to birds), drafts, and direct sunlight. Conures feel most secure when perched at human eye level with a stable background. Avoid positioning the cage where foot traffic passes on all sides - birds feel exposed and stressed when movement surrounds them from every direction.

Provide multiple perches of varying diameters (3/8 to 3/4 inch): natural wood perches in various sizes, a rope perch for foot exercise, and a cement perch for nail maintenance. A swing, ladders, and elevated platforms make the cage more enriching. At least one perch near the top provides the high-elevation security birds naturally prefer.

Cover at night with a breathable cage cover and ensure 10 to 12 hours of darkness. Green cheeks are less prone to night frights than cockatiels but still benefit from consistent darkness for hormonal health and proper sleep. A covered sleep cage in a quiet, dark room is ideal.`,
      diet: `High-quality small parrot pellets (Harrison's Fine, Roudybush Maintenance, or Lafeber's Nutriberries) should constitute 60 to 70% of a green cheek conure's nutritional intake. Seed-only diets cause the same pattern of nutritional deficiency seen in all parrots: fatty liver, vitamin A and D deficiency, immune suppression, and significantly shortened lifespan. Pellet transition from seeds typically takes weeks of patient gradual mixing.

Fresh vegetables should be offered daily: dark leafy greens (kale, chard, romaine, dandelion), bell peppers (excellent Vitamin A source), broccoli, carrot, cooked sweet potato, and snap peas. Varied daily vegetable offerings provide comprehensive micronutrients. Many green cheeks are adventurous eaters - introduce new foods consistently and they usually adapt.

Fruit in small quantities (a few blueberries, a slice of apple or mango) can be offered as enrichment treats. Seed mix in small amounts can be used in foraging toys rather than fed from an open dish. Strictly avoid avocado, chocolate, caffeine, onion, garlic, and xylitol. Fresh water changed daily (or twice daily if the bird bathes in it).`,
      enrichment: `Green cheek conures are often described as the "apartment parrot" - quieter than most conure species, intensely affectionate, and highly playful. They earn the nickname "class clown" for their habit of hanging upside down, playing dead, rolling over, and generally making a spectacle of themselves. This playful intelligence requires significant daily enrichment.

Provide a rotating selection of foraging toys, shreddable toys (palm leaf mats, paper, thin wood pieces, cork), trick training props, and a snuggle pouch or bird tent for the green cheek's characteristic love of burrowing and cuddling. Green cheeks adore being under clothing, snuggled against a warm neck, or tucked in a shirt pocket.

Minimum 2 to 3 hours of supervised out-of-cage time daily in a bird-safe space is required. Green cheeks bond intensely to their primary human and will seek out contact, follow you from room to room, and vocalize to maintain contact with you. This relationship is deeply rewarding but requires consistent daily availability.

Green cheeks are highly trainable using positive reinforcement. Target training (touching a target stick for a food reward), step-up training, and trick training (wave, spin, turn around, lie down) are all achievable with this intelligent species and provide excellent daily mental stimulation.`,
      health: `Feather destructive behavior (FDB) - plucking or barbering feathers - is the most visible sign of chronic psychological distress in green cheek conures. It ranges from over-preening to complete removal of contour feathers. Causes include boredom, inadequate social contact, dietary deficiency, hormonal imbalance, infections, and allergies. Identifying the underlying cause requires veterinary and behavioral assessment. Prevention through adequate enrichment and social interaction is the best approach.

Respiratory infections progress rapidly in birds. Signs include breathing with the tail visibly bobbing, nasal discharge, fluffed feathers, voice changes, and lethargy. Birds mask illness as an evolutionary defense mechanism - by the time symptoms are visible, the bird is usually significantly compromised. Seek avian veterinary care the day symptoms appear.

Proventricular Dilatation Disease (PDD) - also called Avian Bornavirus disease - is a neurological disease that affects the nerves of the digestive tract, causing the proventriculus (stomach) to dilate and preventing normal digestion. Signs include weight loss, regurgitation, and neurological symptoms. It is caused by Avian Bornavirus (ABV), which can spread between birds. There is no cure, but supportive management can extend quality life.

Annual avian veterinary wellness examinations are essential. Green cheek conures can live 15 to 25 years - a long-term commitment that requires a consistent relationship with an avian veterinarian.`,
      checklist: [
        "24x24x30\"+ cage (larger preferred)",
        "High-quality small parrot pellets",
        "Fresh vegetables daily (greens, peppers, broccoli)",
        "Variety of perches (natural wood, rope, different diameters)",
        "Foraging toys and shreddable toys",
        "Trick training props (target stick, cups)",
        "Snuggle pouch or bird tent",
        "Misting bottle or shower perch for bathing",
        "Night cover (10 to 12 hours darkness)",
        "Avian veterinarian experienced with conures",
      ],
    },
    faqs: [
      { q: "Are green cheek conures noisy?", a: "They are among the quietest of all conure species - which is why they are often called the 'apartment parrot.' That said, quiet is relative: green cheeks still have contact calls, alarm vocalizations, and excited chatter that can be heard across a room. They are not the piercing, apartment-wall-penetrating screaming of sun conures or nanday conures. For someone weighing noise level as a factor, green cheeks are a genuinely good middle ground: small-parrot personality without small-parrot silence." },
      { q: "Can green cheek conures learn tricks and talk?", a: "They are exceptional trick learners - target training, wave, spin, roll over, play dead, and retrieving small objects are all achievable with consistent positive reinforcement training. Many green cheeks also learn a small vocabulary of words and phrases, though their speech is less clear and their vocabulary smaller than budgies or cockatiels. If talking is the primary goal, a budgie is a more reliable choice. If trainability and interactive play are the goal, green cheeks are excellent." },
      { q: "How long do green cheek conures live?", a: "15 to 25 years with excellent care - a lifespan that far exceeds what many keepers expect when they first encounter this relatively small bird. The full lifespan requires high-quality nutrition (pellet-based diet, daily vegetables), regular avian veterinary care, adequate daily enrichment, and consistent social interaction with their primary human. Green cheeks form intense bonds with their person; birds that are neglected or rehomed multiple times often have significantly shortened lifespans from chronic stress." },
      { q: "Are green cheek conures suitable for first-time bird owners?", a: "They're a reasonable step up from cockatiels and budgies but are more demanding than either. Green cheeks need a minimum of 2 to 3 hours of direct daily interaction, comprehensive bird-proofing for free-roam time, a pellet-based diet, and an avian veterinary relationship. Someone with no bird experience who genuinely commits to these requirements can keep a green cheek successfully. Someone expecting a low-maintenance pet will struggle. Previous bird experience or serious prior research makes the transition significantly smoother." },
      { q: "Are green cheek conures affectionate?", a: "Extremely - this is their defining characteristic. Green cheeks seek physical contact constantly: burrowing under collars, riding inside shirt pockets, pressing against a warm neck, and demanding to be held during any quiet activity. They bond so intensely to their primary human that some green cheeks become jealous of attention given to other people, other pets, or even devices. Snuggle pouches (small fabric tents attached to cage or stand) are popular because green cheeks will choose to hang out inside them for hours." },
      { q: "Is a pineapple green cheek conure a different bird?", a: "No - it's the same species (Pyrrhura molinae) with a different color mutation, the same way a black Labrador and a yellow Labrador are still both Labradors. \"Pineapple\" combines the yellow-sided and cinnamon mutations, producing a mostly yellow-olive body with an orange face, instead of the wild-type green body, gray head, and red belly patch. Care, temperament, and lifespan are identical across all green cheek color mutations - the differences are purely cosmetic." },
      { q: "How can I tell if my green cheek conure is male or female?", a: "You can't tell by looking - green cheek conures are visually identical between sexes, with no reliable plumage, size, or behavioral difference. The only accurate methods are DNA sexing (a blood or feather sample sent to a lab, the standard and least invasive option) or surgical sexing by an avian vet. If you need to know for certain, budget for a DNA test rather than guessing from appearance or personality." },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "18x18x24 in+ cage (larger for a pair)", low: 80, high: 150 },
        { item: "Perches and swings", low: 20, high: 35 },
        { item: "Shreddable toys", low: 20, high: 40 },
        { item: "Breathable cage cover", low: 10, high: 20 },
      ],
      annual: [
        { item: "Small parrot pellets", low: 70, high: 110 },
        { item: "Fresh vegetables", low: 80, high: 130 },
        { item: "Toys (rotating)", low: 40, high: 70 },
        { item: "Annual avian vet check + psittacosis testing", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `Lovebirds are small but intensely active and need more cage space than their size implies. A minimum of 18x18x24 inches is required for a single bird, or 24x18x24 inches for a pair, and larger is always better. Bar spacing of 1/2 inch is appropriate. Lovebirds are powerful chewers - cage bars should be thick enough to resist their strong beaks, and any cage with powder coating should be confirmed non-toxic.

Provide multiple perches at different heights and diameters (1/2 to 3/4 inch), swings, and a variety of toys. Natural wood perches are preferred over dowels for foot health. Position the cage at eye level, away from the kitchen, drafts, and direct sunlight. Lovebirds are highly alert and feel most secure when positioned at human eye level with a wall behind the cage.

Provide a consistent sleep routine with 10 to 12 hours of covered darkness at night, using a plain, breathable cage cover rather than an enclosed sleeping tent or "happy hut." Those tunnel-shaped, nest-like products are a documented trigger for hormonal aggression and chronic egg-laying in this species.

Lovebirds are highly social within their species. A bonded pair of lovebirds is happier and healthier than a solo bird, and bonded pairs often have less aggressive territorial behavior toward humans. Introducing a second lovebird requires a careful slow-introduction process.`,
      diet: `High-quality small parrot pellets (Harrison's Fine, Roudybush, or Lafeber's Nutriberries) should constitute 60 to 70% of the diet. A seed-only diet causes the same nutritional deficiencies seen in other parrots: fatty liver, vitamin deficiencies, and shortened lifespan. Pellet transition from seeds is often challenging with lovebirds - they are stubborn - but persistence pays off.

Fresh vegetables should be offered daily: bell peppers, leafy greens, broccoli, carrots, cooked sweet potato, and snap peas are all excellent choices. Lovebirds tend to be bolder about trying new foods than some other parrot species. Use the basket trick - weaving vegetables and herbs through the cage bars - to encourage foraging for fresh foods.

Millet is a high-fat treat that lovebirds love intensely. Limit to a small piece 2 to 3 times per week. A seed mix can be offered as enrichment in a foraging toy rather than as the primary food source. Strictly avoid avocado, chocolate, caffeine, onion, garlic, and xylitol. Fresh water changed daily.`,
      enrichment: `Lovebirds are nicknamed the "pocket parrot" - they are intensely bonded, affectionate, and active little birds with large personalities. Enrichment is not optional; without adequate stimulation, lovebirds become cage-bound, hormonal, territorial, and difficult.

Shreddable toys are lovebird favorites: palm leaf mats, paper strips, thin cardboard tubes, and soft wood pieces allow them to display their natural nesting and foraging behaviors. Swings and ladders get heavy use. Provide foraging toys where food is hidden - this is a much more enriching way to offer seeds or pellets than in an open dish.

Daily supervised out-of-cage time of at least 1 to 2 hours in a bird-safe space allows flying, exploring, and interaction with their keeper. Many lovebirds become remarkably affectionate and social with their primary human, seeking contact, playing peekaboo, and vocalizing extensively in response to interaction.

Lovebirds can be territorial with other bird species and with other lovebirds of different sex unless properly bonded. House only with thoroughly bonded partners and never mix lovebirds with other parrot species in the same cage without extensive supervised introductions.`,
      health: `Respiratory infections are common in lovebirds and progress rapidly. Signs include breathing with the tail bobbing, nasal discharge, fluffed feathers, and sitting low on a perch. Seek veterinary care promptly - birds mask illness and by the time symptoms are visible, the bird is usually significantly ill.

Egg binding is a life-threatening emergency in female lovebirds. A hen unable to pass an egg develops rapidly worsening distress, sitting puffed on the cage floor, straining, and visibly distressed. This requires immediate emergency veterinary intervention. Minimize hormonal triggers (long daylight hours, nesting materials, excessive handling of the back) to reduce egg-laying stimulation in female lovebirds.

Psittacosis (Chlamydiosis) is a bacterial infection that can spread to humans. Annual testing or monitoring for this disease is recommended. Any new lovebird should be tested or treated prophylactically.

Obesity from seed-heavy diets causes fatty liver disease in lovebirds just as in other parrots. Annual avian veterinary wellness checks are strongly recommended, particularly blood panels for birds on seed-heavy diets.`,
      checklist: [
        "Minimum 18x18x24\" cage for one bird, 24x18x24\" for a pair (larger preferred)",
        "High-quality lovebird or small parrot pellets",
        "Fresh vegetables and limited fruit",
        "Multiple perches, swings, and ladders",
        "Lots of shreddable toys (paper, cardboard)",
        "Foraging toys and puzzle feeders",
        "Millet sprays for treats",
        "Safe chew toys (bird-safe wood)",
        "Nail clippers",
        "Avian veterinarian experienced with lovebirds"
      ],
    },
    faqs: [
      { q: "Do lovebirds need to be kept in pairs?", a: "The old myth that a solo lovebird will die of loneliness is not literally true - solo lovebirds can live long healthy lives. However, a solo lovebird requires intensive daily human interaction (roughly two hours of direct engagement) as a substitute for a flock companion. A bonded pair of lovebirds is generally healthier, happier, and easier to keep because the birds meet each other's social needs. If your schedule cannot guarantee consistent daily time with the bird, a bonded pair is the more humane choice." },
      { q: "Can lovebirds learn to talk?", a: "Occasionally, but lovebirds are not known as talkers. Unlike budgies or African greys, speech is rare and the vocabulary stays very small when it does occur. What lovebirds excel at instead is vocalization, contact calling, and developing a strong interactive bond with their keeper. If talking ability is important to you, a budgie or a cockatiel (males) are more reliable choices. Lovebirds compensate with personality, affection, and playfulness." },
      { q: "Do lovebirds bite?", a: "Yes - lovebirds have a strong beak for their size and will use it when frightened, territorial, or over-stimulated. Consistent calm handling from a young age, respecting the bird's signals (fluffing, lunging, eye pinning), and never reaching into the cage when the bird is in a territorial mood significantly reduces biting. Lovebirds that are handled regularly from a young age and bonded to a primary human are generally no worse than any other small parrot, and many are remarkably gentle with their person." },
      { q: "What should lovebirds eat?", a: "60 to 70% of the diet should be high-quality small parrot pellets (Harrison's Fine, Roudybush, or Lafeber's Nutriberries). Fresh vegetables daily - leafy greens, bell peppers, broccoli, carrot, and cooked sweet potato - make up the remainder. Limit seed mix to use as enrichment in foraging toys rather than as a dietary staple. Millet is a high-fat treat to be used sparingly. Seed-only diets cause fatty liver disease, vitamin deficiencies, and significantly shortened lifespan in lovebirds just as in all parrots." },
      { q: "How long do lovebirds live?", a: "10 to 20 years with excellent care - a lifespan that surprises many keepers who assume small birds have short lives. The full 20-year potential requires a pellet-based diet, regular avian veterinary care, adequate enrichment and social contact, and minimizing hormonal stress (particularly in egg-laying females). Lovebirds rehomed in middle age after years of poor nutrition often have reduced lifespans. Starting with proper care from day one makes a measurable difference in long-term health." },
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
      housing: "A flight cage at least 24 inches wide is important, since zebra finches are active, fast-flying birds that use horizontal space far more than height - the same style of cage recommended for canaries. Bar spacing of 1/2 inch or less keeps a finch from squeezing through or getting a head caught. Provide several natural perches of different diameters positioned so the birds can fly the length of the cage rather than just hop between two close perches. Position away from drafts, kitchen fumes (instantly lethal to birds), and direct sun. Unlike every parrot on this site, zebra finches should never be kept as a single bird: they are a genuinely flock-oriented species, and a pair or small group bonds to each other, not to a human keeper, so plan on at least two finches from the start. Cover the cage at night for a consistent 10 to 12 hours of darkness.",
      diet: "A quality finch seed mix (millet and canary seed) has traditionally been the base of a zebra finch's diet, though avian vets increasingly recommend building the diet around a pelleted food instead, since seed alone runs short on vitamins, minerals, and protein. Add fresh greens and vegetables daily - spinach, dandelion, and shredded carrot are all readily eaten. Egg food, a small amount of hard-boiled egg mixed with bread or a commercial egg food supplement, provides extra protein that matters most during molting and breeding. A cuttlebone or mineral block supplies calcium. Fresh water changed daily is essential.",
      enrichment: "Zebra finches are not a hands-on pet the way a parrot is: most will never enjoy being held, cannot be taught to talk, and do not form the one-on-one bond with an owner that a budgie or lovebird can. That is not a lesser version of a parrot, it is a genuinely different kind of bird, and expecting parrot-style interaction from a finch leads to a disappointed owner and a stressed bird. Their real social life happens with each other: a bonded pair spends the day perched side by side, preening one another and calling back and forth in a near-constant, cheerful chatter that is nowhere near as loud or piercing as a parrot's screech. Give them the space and company to do that, and a zebra finch asks for very little else - a shallow bath dish for regular bathing and a stable, predictable routine matter more than toys. Some hand-raised individuals will tolerate a finger, but this is the exception, not something to expect or train for.",
      health: "Scaly-face and scaly-leg mites (Knemidocoptes) cause crusty growths on the beak, legs, and around the eyes, and are treated with an avian-specific antiparasitic. Air sac mites (Sternostoma tracheacolum) live in the airway and cause clicking or squeaking breath sounds, tail-bobbing, and open-mouthed breathing in heavy infections, though mild cases can be symptomless. Respiratory infections and obesity from seed-heavy diets are common, and are the main reasons avian vets increasingly push finch keepers toward a pelleted diet. Hens can lay eggs even without a male present, and egg binding is an emergency - watch for a fluffed, straining, lethargic bird and seek care immediately. Annual avian veterinary checkups are recommended despite the zebra finch's reputation as a low-maintenance bird.",
      checklist: [
        "Flight cage at least 24 inches wide",
        "At least one companion finch - never keep a single bird",
        "Quality finch seed mix or pelleted diet",
        "Fresh greens and vegetables daily",
        "Egg food during molting/breeding season",
        "Cuttlebone or mineral block",
        "Shallow bath dish",
        "Cage cover for nighttime darkness",
        "Avian veterinarian contact",
      ],
    },
    faqs: [
      { q: "Can I keep just one zebra finch?", a: "It is not recommended. Zebra finches are a genuinely flock-oriented species, and unlike a budgie or lovebird, a solo finch does not reliably transfer that social need onto a human keeper. A single zebra finch left without company is effectively isolated. Keep at least a pair, and same-sex pairs or small groups work well if you are not looking to breed them." },
      { q: "How can I tell if my zebra finch is male or female?", a: "Look at the face and chest. Males have a solid orange cheek patch, a fine black-and-white barred throat, a black breast band, chestnut flanks spotted with white, and a bright red bill. Females are a plain, uniform grey with none of those markings and have a paler orange bill. Young males don't develop full adult coloring until around 2 to 3 months of age, so very young birds can be harder to sex by eye." },
      { q: "Do zebra finches talk or bond with their owner like a parrot?", a: "No. Zebra finches cannot be taught to talk and generally do not bond one-on-one with a person the way a parrot does. Most will not enjoy being handled even with patient socialization. They are also much quieter and less destructive than any parrot on this site: no screeching, no shredded furniture, just frequent soft chirping and chatter between cage mates. If you want a bird that talks or cuddles, this isn't that bird. If you want an easy, low-drama pet that's genuinely happy to just be watched and listened to, it's an excellent one." },
      { q: "How long do zebra finches live?", a: "Typically 5 to 10 years in captivity with good care, occasionally longer. Wild zebra finches live only 2 to 3 years on average, so the jump in captivity comes from reliable food, shelter from predators, and veterinary care, the same pattern seen across most small pet birds." },
      { q: "Is a zebra finch a good alternative to a canary, or are they basically the same?", a: "They are both small, low-handling finches, but their social needs are quite different. A canary is typically kept alone or in a same-sex pair and is prized for the male's song. A zebra finch should never be kept alone and doesn't sing in the same elaborate, seasonal way, but both sexes stay in near-constant vocal contact with their cage mates. If you want a bird you can keep solo and enjoy for its singing, go with a canary. If you like the idea of watching a bonded pair or small flock interact, a zebra finch is the better fit." },
    ],
  },
];
