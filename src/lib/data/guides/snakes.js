export const snakeGuides = [
  {
    id: "ball-python",
    name: "Ball Python",
    emoji: "🐍",
    difficulty: "Intermediate",
    petType: "Snakes",
    image: "/assets/guides/ball-python.jpg",
    tagline: "The gentle noodle that curls into a perfect ball when shy!",
    funFact: "Ball pythons can go 3 to 6 months without eating (though they shouldn't have to). When scared, they curl into a tight ball to protect their head, hence the name!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size and lifespan come from the
    // encyclopedia entry, which no deep dive repeats in full. Quarantine, the
    // thermostat probe, hygiene, the power-outage floor, winter appetite, and
    // weight checks cite the shared reptile and snake guides in the sidebar's
    // Health and More list. Built 2026-09-08 for the ball python set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Broadly legal across the US, and the federal and state rules aimed at invasive constrictors were deliberately written to exclude them. Hawaii is illegal statewide and New York City bans the entire family Pythonidae by name. New Jersey and Delaware require a permit, and Minnesota allows one from a permitted breeder. Everywhere else, check city and county exotic-pet ordinances since local rules can still vary.", source: "ball-python-legal-guide" },
        { label: "Enclosure", value: "The current standard for an adult is a 4x2x2 ft (48x24x24 inches, roughly 120 gallons, about 8 square feet of floor space) setup, with the enclosure at least as long as the snake itself. Hatchlings up to about 300 grams do well in a 10-gallon or 20x11x13 inch enclosure, and juveniles under 3 feet can move into a 36x18x18 inch setup. PVC holds humidity far more effectively than glass. House one snake per enclosure.", source: "ball-python-tank-setup-guide" },
        { label: "Temperatures", value: "Warm side and basking 88 to 92°F, with air temp not exceeding 95°F anywhere. Cool side 75 to 80°F. Nighttime 72 to 75°F.", source: "ball-python-tank-setup-guide" },
        { label: "Heat", value: "Every single heat source needs to run through a thermostat, no exceptions. It is what prevents burns and fire hazards. Skip hot rocks entirely.", source: "ball-python-tank-setup-guide" },
        { label: "Thermostat probe", value: "For an under-tank mat the probe goes on the floor of the warm hide, the surface the animal actually lies on, held down with foil tape so it can't drift. The probe reads at the animal's level, not up in the airspace near the fixture.", source: "reptile-heating-thermostats-guide" },
        { label: "Humidity", value: "Ambient 55 to 65%, raised to 70 to 80% specifically during shedding cycles. Too dry leads to bad sheds and raises respiratory infection risk. Too wet without adequate ventilation swings toward scale rot. Check it with a real digital hygrometer, not a cheap analog dial.", source: "ball-python-tank-setup-guide" },
        { label: "Substrate", value: "Cypress mulch or coconut coir/husk, 3 to 4 inches deep. Avoid aspen entirely, it tends to mold at the humidity level ball pythons require, and never use pine or cedar.", source: "ball-python-tank-setup-guide" },
        { label: "Hides and water", value: "At least two hides, one on the warm side and one on the cool side, sized snugly so the snake's body touches the sides at multiple points. Add a heavy, tip-resistant water bowl large enough for the snake to soak in.", source: "ball-python-tank-setup-guide" },
        { label: "Cover", value: "The whole floor should offer cover, so the snake can be somewhere other than inside a box without being exposed: cork bark tubes and flats, leaf litter, and enough plant cover to break up sightlines. Add a sturdy climbing branch braced firmly at both ends and it will use it.", source: "ball-python-enrichment-guide" },
        { label: "Feeding schedule", value: "Hatchlings (0-6 months) every 5-7 days, juveniles (6-18 months) every 7-10 days, adults (18+ months) every 10-14 days.", source: "ball-python-feeding-guide" },
        { label: "Prey size", value: "Prey roughly the same width as the widest point of the snake's body. For most adult ball pythons, that's a medium rat. Too large means regurgitation, too small means nutritional inadequacy.", source: "ball-python-feeding-guide" },
        { label: "Thawing", value: "Refrigerate until fully thawed, or seal it in a bag and submerge it in cool to lukewarm water. Never thaw on a counter for hours and never use a microwave. Don't feed it straight from the refrigerator: prey should not be fed cold but at room temperature, or preferably warmer.", source: "ball-python-feeding-guide" },
        { label: "Not eating", value: "A healthy adult ball python can go 3-6 months without eating. Worry if rapid weight loss, lethargy plus refusal, mucus around the mouth, or wheezing accompanies the fast.", source: "ball-python-feeding-guide" },
        { label: "Winter appetite", value: "Most pet-only keepers can skip brumation, it is primarily a breeder's tool. Ball pythons especially show a natural seasonal dip in appetite from roughly October through March even without any deliberate cooling.", source: "snake-brumation-guide" },
        { label: "Handling", value: "Don't handle a newly acquired snake for the first one to two weeks, and don't start until it's eating regularly. Then 2 to 3 sessions a week, up to 3 to 5 for a snake that handles well, 15 to 30 minutes at most. Wait 48 to 72 hours after feeding, and never during a shed.", source: "ball-python-handling-guide" },
        { label: "Weight checks", value: "Weigh rather than measure. Monthly is a reasonable default for a growing juvenile, less often once an adult has leveled off. A well-conditioned snake reads as a rounded loaf in cross-section, and a triangular cross-section with a visible ridge down the spine points to underweight.", source: "snake-sexing-growth-body-condition-guide" },
        { label: "Budget", value: "A standard or wild-type ball python runs $40 to $100. Total setup typically lands at $300 to $800. Most owners land around $200 to $500 a year in ongoing costs once the setup is finished.", source: "ball-python-cost-guide" },
        { label: "Adult size", value: "3 to 5 feet, females significantly larger." },
        { label: "Lifespan", value: "20 to 30 years, up to 48 years recorded in captivity." },
        { label: "Quarantine", value: "The Merck Veterinary Manual's husbandry guidance recommends quarantine periods of 3 to 6 months for new reptiles. Mites usually show themselves within weeks, while inclusion body disease can sit with no visible signs for months to years, and pythons are one of the two groups it affects.", source: "reptile-quarantine-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact with the animal, its enclosure, its water, or anything that's touched either. Never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "72-75°F is the cold floor. Below this range for more than a day or two is the classic winter trigger for respiratory infection.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "ball-python-health-issues-guide",
      callNow: [
        "Any wheezing, open-mouth breathing, or visible mucus, this one is urgent",
        "Belly scale discoloration that's spreading or blistering",
        "Signs of mouth rot",
        "A prolapse (keep the area moist and get to a vet as soon as possible)",
        "Visible mites",
      ],
      vetLine: "A reptile-experienced vet, found before you need one. Respiratory infection needs vet-prescribed antibiotics, not a wait-and-see approach, and left untreated it can progress to pneumonia and become fatal.",
    },
    routes: [
      { slug: "ball-python-cost-guide", line: "$40 to $100 for a standard snake, $300 to $800 for the setup, and what the first year and a sick visit really cost." },
      { slug: "ball-python-tank-setup-guide", line: "The 4x2x2 standard, the temperature gradient, why PVC beats glass, and the humidity range that decides how this goes." },
      { slug: "ball-python-feeding-guide", line: "Schedule by age, prey size and type, how to thaw and warm a rodent properly, and the honest list of reasons one stops eating." },
      { slug: "ball-python-handling-guide", line: "The settling-in weeks, the two timing rules around feeding and shed, how to support the body, and the stress signs." },
      { slug: "ball-python-health-issues-guide", line: "Respiratory infection, scale rot, mouth rot, mites, parasites, retained shed, thermal burns, IBD, prolapse, and the list that means the vet today." },
      { slug: "ball-python-enrichment-guide", line: "What a 35-snake housing study actually found, cover across the whole floor, climbing structure, and a priority order." },
      { slug: "ball-python-legal-guide", line: "Why the federal python ban never touched this species, the two places it is banned outright, and the states that want a permit." },
    ],
    buyList: [
      "4x2x2 ft enclosure, secure and locking, PVC preferred over glass",
      "Heat source: under-tank heater, heat tape, ceramic heat emitter, or radiant panel",
      "Thermostat, one for every heat source",
      "Digital thermometer and hygrometer",
      "Infrared temperature gun for surface readings",
      "Cypress mulch or coconut coir substrate, 3 to 4 inches deep",
      "Two snug hides, one warm side and one cool side",
      "Humid hide packed with damp sphagnum moss",
      "Heavy, tip-resistant water bowl big enough to soak in",
      "Cork bark, sturdy branches, leaf litter, and plants for cover",
      "Feeding tongs",
      "Frozen-thawed rats or mice",
      "Optional low-level UVB and a photoperiod LED on a timer",
    ],
    faqs: [
      { q: "What humidity level does a ball python need?", a: "Ambient 55 to 65%, raised to 70 to 80% while the snake is in shed. Dry air gives bad sheds and raises respiratory infection risk; too wet without ventilation goes the other way, toward scale rot." },
      { q: "Is it normal for a ball python to refuse food?", a: "Yes. Ball pythons are famous for hunger strikes, and a snake in good body condition that turns down a meal or two isn't automatically an emergency. With temperature, humidity, and everything else checking out, offering again in a couple of weeks is often reasonable." },
      { q: "How long should I wait to handle after feeding?", a: "48 to 72 hours. Picking a snake up on a full stomach is one of the most common ways keepers cause a regurgitation, and that is hard on the digestive system and slow to recover from." },
    ],
  },
  {
    id: "boa-constrictor",
    name: "Boa Constrictor",
    emoji: "🐍",
    difficulty: "Intermediate/Advanced",
    petType: "Snakes",
    image: "/assets/guides/boa-constrictor.jpg",
    tagline: "The powerful, graceful heavyweight of the pet snake world!",
    funFact: "Boa constrictors can sense the heartbeat of their prey using heat-sensitive pits. They literally feel your pulse!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, hygiene, and power
    // outage cite the shared reptile guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 for batch C (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new snake is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window. Boas specifically can carry inclusion body disease for months to years with no visible signs, which is exactly why the window runs this long.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "Adults typically need somewhere around 6 to 8 feet long, 2 to 3 feet wide, and 3 to 4 feet tall, roughly 10 square feet of floor space at minimum. A 6ft+ adult PVC enclosure is a solid way to build for that final size from the start. House boas individually, never together.", source: "boa-constrictor-tank-setup-guide" },
        { label: "Security", value: "A heat source is required and must be genuinely inaccessible to direct contact, no exposed heating elements a snake this size and strength could reach. A thermostat is essential, not optional, for a heat source powering an enclosure this large.", source: "boa-constrictor-tank-setup-guide" },
        { label: "Temperatures", value: "Basking area 88 to 92°F, occasionally up to 95°F, ambient warm side 80 to 85°F, cool side 75 to 80°F, nighttime 70 to 80°F.", source: "boa-constrictor-tank-setup-guide" },
        { label: "Humidity", value: "60 to 70%, higher during shedding cycles. A large water bowl, regular misting, moisture-retentive substrate, and a dedicated humid hide hold it there.", source: "boa-constrictor-tank-setup-guide" },
        { label: "Hides", value: "Two, not one: a snug hide on the warm side and a separate one on the cool side, so the boa can thermoregulate while always having cover.", source: "boa-constrictor-tank-setup-guide" },
        { label: "Feeding schedule", value: "Babies (0 to 6 months) every 5 to 7 days, juveniles (6 to 12 months) every 7 to 10 days, adults (3-plus years) every 10 to 14 days, extending to every 2 to 4 weeks for mature animals. Offer prey no wider than your boa's body at its widest point.", source: "boa-constrictor-feeding-guide" },
        { label: "Handling", value: "Once a boa exceeds about 6 feet, handle it with a second person. Wait at least 48 hours after feeding, and never let a boa form a complete loop around your neck.", source: "boa-constrictor-handling-guide" },
        { label: "Budget", value: "$400 to $1,200 to set up. A routine wellness exam runs $50 to $135, a fecal parasite check adds $25 to $90. Budgeting around $200 a year for vet care is a reasonable planning figure.", source: "boa-constrictor-cost-guide" },
        { label: "Adult size", value: "5 to 13 feet, with females significantly larger than males." },
        { label: "Lifespan", value: "20 to 30 years is typical, and boas can exceed 40 with excellent care.", source: "boa-constrictor-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the snake out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "70 to 80°F is the normal night low. Below 70°F, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "boa-constrictor-health-issues-guide",
      callNow: [
        "Wheezing, nasal discharge, or open-mouth breathing",
        "Discolored, soft, or blistered belly scales",
        "Swollen gums or visible pus in the mouth",
        "Head tilting, corkscrewing movements, or staring off into space",
        "Chronic regurgitation paired with weight loss",
        "Weight loss and lethargy, or small dark specks resembling tiny ticks",
      ],
      vetLine: "A reptile-experienced vet familiar with large snakes, found before you need one. A severe respiratory infection can progress to septicemia, and inclusion body disease has no cure, so prevention is buying captive-bred from a reputable breeder and quarantining every new snake.",
    },
    routes: [
      { slug: "boa-constrictor-cost-guide", line: "$50 to $200 for the snake, $400 to $1,200 for the setup, and what vet care and the decades-long commitment really run." },
      { slug: "boa-constrictor-tank-setup-guide", line: "Sizing the enclosure for the adult it will become, the thermostat that's non-negotiable, and why height matters as much as floor space." },
      { slug: "boa-constrictor-feeding-guide", line: "The schedule by age, prey sizing, and why adults eat so rarely compared to other snakes." },
      { slug: "boa-constrictor-handling-guide", line: "The second-handler rule past 6 feet, why a boa should never loop around your neck, and how to read one before you reach in." },
      { slug: "boa-constrictor-health-issues-guide", line: "Respiratory infection, scale rot, mouth rot, inclusion body disease, and parasites, with what causes each." },
      { slug: "boa-constrictor-enrichment-guide", line: "Why a big snake in a box is still a snake in a box, and what the ball python housing study implies for this species." },
      { slug: "boa-constrictor-legal-guide", line: "Withdrawn from the federal injurious-wildlife list, banned in Hawaii and NYC, and permit rules in a handful of other states." },
    ],
    buyList: [
      "6ft+ adult PVC enclosure",
      "Thermostat",
      "Supplemental heat source",
      "Two snug hides (warm side and cool side)",
      "Large soak-able water dish",
      "Coconut fiber, cypress mulch, or reptile-specific soil substrate",
      "Digital thermometer and hygrometer",
      "Frozen/thawed rodents (mice progressing to rats)",
      "Feeding tongs",
    ],
    faqs: [
      { q: "What does the upfront setup cost for a boa constrictor?", a: "Roughly $400 to $1,200. That covers a proper adult PVC enclosure (the largest single expense by far), a thermostat, a heat source, hides, a water bowl, substrate, and a thermometer and hygrometer. The thermostat isn't optional for a snake this size." },
      { q: "What temperature does a boa constrictor enclosure need?", a: "Basking 88 to 92°F, occasionally to 95°F, warm side 80 to 85°F, cool side 75 to 80°F, nights 70 to 80°F. The heat source has to sit where the snake cannot reach it: no exposed heating elements. Run it on a thermostat." },
      { q: "At what size does a boa constrictor need a second handler?", a: "About 6 feet. Exotic veterinary guidance works from roughly one handler per 3 to 4 feet of snake, and extends that to routine jobs like cleaning the enclosure. A boa that size is strong enough that a second set of hands is basic safety." },
    ],
  },
  {
    id: "california-kingsnake",
    name: "California Kingsnake",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/california-kingsnake.jpg",
    tagline: "The boldly banded beginner snake that becomes a gem with handling!",
    funFact: "Kingsnakes are immune to the venom of rattlesnakes, copperheads, and cottonmouths, and they actively hunt and eat other snakes, including venomous ones! The name 'King' is well earned.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "4x2x2 ft escape-proof enclosure", low: 130, high: 250 },
        { item: "Under-tank heater with thermostat", low: 35, high: 60 },
        { item: "Two snug hides", low: 15, high: 25 },
        { item: "Aspen or cypress mulch substrate", low: 15, high: 25 },
        { item: "Soak-able water dish", low: 10, high: 15 },
        { item: "Feeding tongs", low: 5, high: 10 },
        { item: "Digital thermometer", low: 15, high: 20 },
        { item: "Branches for enrichment", low: 15, high: 25 },
      ],
      annual: [
        { item: "Frozen/thawed mice", low: 80, high: 150 },
        { item: "Substrate replacement", low: 25, high: 40 },
        { item: "Electricity (heat)", low: 40, high: 70 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 4x2x2 ft enclosure is appropriate for most adult California kingsnakes. This species is active and curious and will use all available space meaningfully. California kingsnakes are determined, persistent escape artists - they methodically test every seam, hinge, and gap. A lockable lid is essential. Check all seams regularly.

Provide a warm end with a surface temperature of 85 to 88 degrees F via an under-tank heater on a thermostat, and a cool end at 72 to 75 degrees F. Two snug hides - one at each end - are required. Aspen shavings or cypress mulch work well as substrate. Ambient humidity of 30 to 50% is appropriate. A moist hide with damp sphagnum moss supports healthy shedding.

Fresh water in a soak-able dish must always be available, changed at least twice weekly.`,
      diet: `California kingsnakes are typically excellent, reliable feeders. Feed appropriately sized frozen/thawed mice - prey width should match the snake's widest mid-body. Always use feeding tongs at every feeding. Feed juveniles every 5 to 7 days, sub-adults every 7 to 10 days, adults every 10 to 14 days. Allow 48 to 72 hours after feeding before handling.

Thaw frozen prey fully in warm water until the core reaches 100 to 105 degrees F. Never feed live prey - it is dangerous to the snake and ethically unnecessary. If a kingsnake regurgitates, wait 2 full weeks before the next feeding attempt and reassess temperatures and prey size.

Note that kingsnakes are ophiophagous (snake-eaters) in the wild. Never house with other snakes under any circumstances.`,
      enrichment: `California kingsnakes are active explorers that investigate every inch of their enclosure. Provide branches for climbing, multiple hides in different sizes and shapes, cork bark pieces, and a water dish large enough to soak in. Rearranging the enclosure layout periodically gives the snake new territory to explore.

Handle regularly and with confidence. Juvenile California kings often musk and may strike defensively. This typically diminishes quickly with consistent calm handling. Most adults become very handleable snakes. Remain calm and still during any defensive displays - panicked movements escalate the snake's response.`,
      health: `California kingsnakes are very hardy when husbandry is correct. Respiratory infections from cold, damp conditions are the primary concern: signs include wheezing and mucus. Retained shed from low humidity is the second most common issue - the moist hide prevents it. Retained eye caps are the most serious form: soak and gently remove, or seek veterinary assistance.

Escape prevention is a practical safety issue - an escaped kingsnake faces cold, dehydration, and household hazards. Inspect all enclosure seals regularly. Annual wellness checks are recommended for all snakes even when they appear healthy.`,
      checklist: [
        "4x2x2 ft escape-proof enclosure (lockable lid)",
        "Under-tank heater with thermostat (85 to 88 degrees F warm end)",
        "Two snug hides (warm and cool ends)",
        "Aspen or cypress mulch substrate",
        "Shallow water dish (soak-able)",
        "Frozen/thawed appropriately-sized mice",
        "Feeding tongs",
        "Digital thermometer",
        "Branches for enrichment",
        "Reptile-savvy vet contact",
      ],
    },
    faqs: [
      { q: "Are California kingsnakes immune to snake venom?", a: "Yes. California kingsnakes are ophiophagous - they eat other snakes in the wild, including venomous species like rattlesnakes, copperheads, and cottonmouths, to whose venom they are largely immune. The name 'King' reflects this apex predatory status. Never house with other snakes; they will attempt to eat enclosure mates regardless of species." },
      { q: "How big do California kingsnakes get?", a: "Adults typically reach 3 to 4 feet in total length - a manageable, handleable size that makes them popular with first-time snake owners and experienced collectors alike. They are slender, muscular snakes that feel confident in the hand. They reach adult size by 2 to 3 years of age." },
      { q: "Are California kingsnakes good beginner snakes?", a: "Yes. They feed reliably on frozen/thawed prey, tame down quickly with consistent calm handling, and have straightforward temperature and humidity requirements. Juvenile kingsnakes can be defensive - musking, hissing, or striking - but this diminishes significantly with regular interaction. Most adults become calm, handleable snakes within weeks to months of consistent work." },
      { q: "What humidity do California kingsnakes need?", a: "Low to moderate - 30 to 50% ambient humidity is appropriate. This is generally achievable at room humidity in most homes without additional measures. The most important shedding support is a moist hide (a box packed with damp sphagnum moss) available at all times. Retained shed on eye caps is preventable with consistent access to a humid microhabitat." },
      { q: "Why is my California kingsnake musking?", a: "Musking - releasing a pungent musk from cloacal glands - is a normal defensive behavior in juveniles and newly acquired adults. It is not an indication of illness or permanent temperament. Most California kingsnakes reduce or eliminate musking with consistent, calm handling over weeks. Never react to musking with fear or by putting the snake down - this reinforces the behavior." },
    ],
  },
  {
    id: "corn-snake",
    name: "Corn Snake",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/corn-snake.jpg",
    tagline: "The curious, colorful beginner snake that never stops exploring!",
    funFact: "Corn snakes are named for their distinctive belly pattern that resembles Indian corn kernels, not because they're found in corn fields (though they are)!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, hygiene, and power
    // outage cite the shared reptile guides in the sidebar's Health and More
    // list. Reconciled 2026-09-09 for batch C (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new snake is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "A 40-gallon breeder (36x18x18 inches) is the adult minimum, with 4x2x2 feet (48x24x24 inches) as the preferred size for a fully grown adult. Front-opening PVC enclosures are generally preferred over glass. House corn snakes singly.", source: "corn-snake-tank-setup-guide" },
        { label: "Security", value: "Every heat source must run through a thermostat, with zero exceptions. An unregulated heat mat can climb to around 120°F, hot enough to cause a serious burn. Corn snakes are notorious escape artists, so confirm the enclosure locks or latches securely before your snake ever goes in.", source: "corn-snake-tank-setup-guide" },
        { label: "Temperatures", value: "Warm/basking side 85 to 88°F (some sources say 80 to 85°F is acceptable), cool side 72 to 78°F, overall ambient 75 to 82°F, nighttime 65 to 75°F.", source: "corn-snake-tank-setup-guide" },
        { label: "Humidity", value: "Sources disagree, some recommend 65 to 75%, others cite 40 to 60% as sufficient, raised to 60 to 70% during shedding. Either range works in practice; what matters more is a dedicated humid hide with damp sphagnum moss during shed cycles.", source: "corn-snake-tank-setup-guide" },
        { label: "UVB", value: "Not required. Corn snakes have been kept for decades without it, though it is increasingly seen as beneficial long term. If you add one, use a low-output T5 targeting a UVI around 2.0 to 3.0.", source: "corn-snake-tank-setup-guide" },
        { label: "Substrate", value: "Aspen shavings are the classic choice. Keep it 3 to 4 inches deep to allow natural burrowing behavior. Avoid pine or cedar entirely, both contain oils that are toxic to reptiles.", source: "corn-snake-tank-setup-guide" },
        { label: "Feeding schedule", value: "Hatchlings under about 3 months eat every 5 to 7 days, working down to every 14 to 21 days for a fully mature adult. Size prey at roughly 1 to 1.5 times the width of the snake's body at its widest point.", source: "corn-snake-feeding-guide" },
        { label: "Not eating", value: "A healthy adult can physically survive roughly 2 to 3 months without food thanks to a slow reptile metabolism. A hatchling going without food for over about a week is already worth taking seriously and may need veterinary attention.", source: "corn-snake-feeding-guide" },
        { label: "Handling", value: "Give it time to acclimate and eat successfully 3 to 4 times, roughly one to two weeks at minimum, before handling. Then 5 or 10 minute sessions a couple of times a week, building up gradually. Wait 48 to 72 hours after feeding and skip handling during a shed.", source: "corn-snake-handling-guide" },
        { label: "Budget", value: "$250 to $600 to set up, up to $1,150 fully equipped. Most owners land around $200 to $500 a year. An initial vet exam runs $50 to $160.", source: "corn-snake-cost-guide" },
        { label: "Adult size", value: "3.5 to 5 feet." },
        { label: "Lifespan", value: "15 to 20 years in captivity, with the oldest verified individual reaching 32.", source: "corn-snake-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the snake out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "65 to 75°F is the normal night low. Below 65°F, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "corn-snake-health-issues-guide",
      callNow: [
        "Open-mouth breathing or wheezing",
        "Visible mites",
        "Discolored or soft belly scales",
        "Repeated regurgitation",
        "Any mouth swelling or discharge",
        "Neurological symptoms (star-gazing or corkscrewing movements)",
      ],
      vetLine: "A reptile-experienced vet, found through the Association of Reptilian and Amphibian Veterinarians before you need one. Get a new corn snake checked within the first few weeks of ownership, then an annual wellness exam with a fecal test after that.",
    },
    routes: [
      { slug: "corn-snake-cost-guide", line: "$25 to $70 for the snake, $250 to $600 for the setup, $200 to $500 a year, and what it costs over a two-decade lifespan." },
      { slug: "corn-snake-tank-setup-guide", line: "The 40-gallon breeder minimum, the one non-negotiable thermostat rule, and the genuine humidity disagreement worth knowing about." },
      { slug: "corn-snake-feeding-guide", line: "The age and weight based schedule, prey sizing, and the honest range of reasons a corn snake stops eating." },
      { slug: "corn-snake-handling-guide", line: "Settling-in time, the two-handed support, the timing rules around feeding and shedding, and the stress signs." },
      { slug: "corn-snake-health-issues-guide", line: "Respiratory infection, scale rot, mites, retained shed, mouth rot, and the list that means the vet today." },
      { slug: "corn-snake-enrichment-guide", line: "The 2021 studies on enclosure size and odor discrimination, and why floor space is the enrichment for this species." },
      { slug: "corn-snake-legal-guide", line: "Banned in Georgia as a native species, restricted morphs in New Jersey and Illinois, and where it's legal outright." },
    ],
    buyList: [
      "40-gallon breeder or 4x2x2 ft PVC enclosure",
      "Heat source (under-tank heater or overhead halogen)",
      "Thermostat",
      "At least two hides",
      "Soak-able water bowl",
      "Aspen shavings or other suitable substrate",
      "Digital thermometer and hygrometer",
      "Branches or cork bark for climbing",
      "Feeding tongs",
      "Frozen/thawed mice or small rats",
      "Optional low-output T5 UVB",
    ],
    faqs: [
      { q: "How much does a corn snake itself cost?", a: "A normal morph runs $25 to $70. Rare or designer morphs climb into the hundreds or occasionally low thousands, but the animal itself is the cheap part of ownership either way." },
      { q: "What humidity level does a corn snake need?", a: "Sources disagree, some recommend 65-75%, others cite 40-60% as sufficient, raised to 60-70% during shedding. Either range works in practice, what matters more is consistency and a dedicated humid hide with damp sphagnum moss during shed cycles." },
      { q: "Why has my corn snake stopped eating?", a: "Most commonly it's shedding, brumation, or, in males especially, breeding-season restlessness, all normal. It becomes a concern when it's paired with weight loss, lethargy, respiratory signs, or when the enclosure's warm side isn't warm enough for the snake to digest food safely." },
    ],
  },
  {
    id: "garter-snake",
    name: "Garter Snake",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/garter-snake.jpg",
    tagline: "The backyard classic that eats fish and worms instead of mice!",
    funFact: "Garter snakes give birth to live young instead of laying eggs, and a single litter can range from a handful of babies to as many as 80!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "36x18x18 in or 40-gallon breeder enclosure", low: 120, high: 220 },
        { item: "Under-tank heater + thermostat", low: 35, high: 60 },
        { item: "Warm, cool, and humid hides", low: 15, high: 30 },
        { item: "Large swimmable water dish", low: 15, high: 25 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Aspen or cypress mulch substrate", low: 15, high: 25 },
      ],
      annual: [
        { item: "Frozen/thawed fish, earthworms, and mice", low: 70, high: 140 },
        { item: "Thiamine (B1) and calcium supplements", low: 10, high: 20 },
        { item: "Substrate replacement", low: 25, high: 40 },
        { item: "Electricity (heat)", low: 40, high: 70 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 36x18x18 in enclosure or 40-gallon breeder tank suits a single adult garter snake; a mated pair does well in a 55-gallon equivalent. Garter snakes are active and inquisitive, and unlike most colubrids on this site, they're semi-aquatic - a water dish large enough to fully submerge in isn't optional decor, it's a core part of their natural behavior.

Provide a warm end with a surface temperature of 85 to 88 degrees F (basking air up to 90 degrees F) via an under-tank heater on a thermostat, and a cool end at 70 to 75 degrees F. Ambient humidity of 30 to 60% is appropriate, with a humid hide (damp sphagnum moss) available for shedding support. UVB isn't strictly required but is increasingly recommended by keepers and vets for overall health - a low-output 5% T8 or 2 to 5% T5 tube is sufficient.

A secure, front-opening or lockable-lid enclosure matters; garter snakes are capable escape artists. Provide warm, cool, and humid hides at minimum, plus branches and cover - garter snakes are surprisingly active and will use all the enrichment you give them.`,
      diet: `This is the single most important thing to get right before bringing home a garter snake, and it's genuinely different from every other snake on this site: garter snakes are semi-aquatic hunters that specialize in fish, earthworms, amphibians, slugs, and snails in the wild, not rodents. Many individual garter snakes will refuse plain mice entirely, their whole lives, no matter how they're offered.

A varied captive diet of frozen/thawed earthworms, appropriately sized frozen/thawed fish (tilapia, salmon, or silversides - avoid feeding exclusively on goldfish or minnows), and frozen/thawed pinky mice covers their nutritional needs well. Feed juveniles every other day and adults roughly once a week if eating mice, or twice a week if eating mostly earthworms.

Watch the fish-heavy diet carefully: many common feeder fish contain thiaminase, an enzyme that breaks down vitamin B1, and a diet that leans too heavily on fish long-term can cause a serious thiamine deficiency. Supplement with vitamin B1 and calcium a couple of times a month if fish or earthworms make up a significant part of the diet, and never feed live prey - it isn't necessary and can injure the snake.`,
      enrichment: `Garter snakes are diurnal, alert, and among the most consistently active snakes commonly kept as pets - they explore, forage, and swim far more than a typical sedentary colubrid. A water feature big enough to actually swim in, not just soak in, is genuinely enriching for this species and reflects their wild semi-aquatic habits.

Provide varied hides, branches for climbing, and a naturalistic substrate they can push through. Hiding earthworms in leaf litter or substrate for the snake to hunt out taps into natural foraging behavior. Many garter snakes become confident, food-motivated, and easy to observe once settled.

Handle regularly once acclimated. New or stressed garter snakes may musk (release a foul-smelling secretion) or strike defensively, but this diminishes quickly with calm, consistent handling. Most become quite tolerant of gentle handling within weeks.`,
      health: `A thiamine (vitamin B1) deficiency from an unsupplemented, fish-heavy diet is a genuine and somewhat unique health risk for garter snakes compared to other pet snakes. Signs include lethargy, loss of appetite, and neurological symptoms in advanced cases. Regular B1 supplementation when feeding fish or earthworms prevents this entirely.

Retained shed from low humidity and respiratory infections from cold, damp conditions are the same general risks seen across small colubrids - a moist hide and correct temperatures prevent most cases. Mouth rot (infectious stomatitis) can also occur, usually linked to enclosure hygiene or minor injuries, and requires veterinary treatment if it develops.

Mites and general parasite loads are worth checking for in any new garter snake, particularly one of unknown or wild-caught origin. Annual wellness checks with a reptile-experienced vet, including a fecal exam, are a reasonable baseline even for animals that appear healthy.`,
      checklist: [
        "36x18x18 in or 40-gallon breeder enclosure",
        "Under-tank heater + thermostat (85 to 88 degrees F warm end)",
        "Warm, cool, and humid hides",
        "Large swimmable water dish",
        "Digital thermometer and hygrometer",
        "Aspen or cypress mulch substrate",
        "Frozen/thawed earthworms, fish, and mice",
        "Thiamine (B1) and calcium supplements",
        "Feeding tongs",
        "Reptile-savvy vet contact",
      ],
    },
    faqs: [
      { q: "What do garter snakes eat?", a: "Fish, earthworms, amphibians, slugs, and snails in the wild - not primarily rodents like most pet snakes. Many garter snakes refuse plain mice entirely. A varied captive diet of frozen/thawed earthworms, fish (tilapia, salmon, or silversides), and pinky mice works well. If fish make up a large part of the diet, supplement with vitamin B1, since many feeder fish contain thiaminase, which can cause a serious deficiency over time." },
      { q: "Are garter snakes venomous?", a: "Technically yes, in the same limited sense as the hognose snake: they have a mild rear-fanged venom from a Duvernoy's gland that helps subdue small prey like fish and amphibians. It's harmless to humans in essentially all cases - garter snake bites cause minimal irritation at most and are not medically significant." },
      { q: "How big do garter snakes get?", a: "Most adults reach 18 to 26 inches, though large females occasionally exceed 3.5 feet. They're one of the smaller, more manageable snakes commonly kept as pets, comparable in size to a milk snake or California kingsnake." },
      { q: "Do garter snakes lay eggs?", a: "No - garter snakes are live-bearing (ovoviviparous), giving birth to fully formed young rather than laying eggs. This is different from every other snake on this site, all of which are egg-layers. A single litter can range from just a few babies to as many as 80." },
      { q: "Are garter snakes good pets for beginners?", a: "Yes, with one real catch: diet. They're small, inexpensive, hardy, and among the most common snakes found in backyards across the US, which makes them approachable. But new keepers who assume every snake eats frozen mice are often caught off guard when their garter snake refuses them - budget for sourcing earthworms and appropriate feeder fish instead." },
      { q: "How does a garter snake compare to a hognose snake?", a: "They share more than you'd expect for two very different-looking snakes: both are rear-fanged with a mild Duvernoy's-gland venom that's harmless to people, and both eat prey that trips up new keepers expecting a standard mouse-eater. The [hognose snake](/guides/hognose-snake/) specializes in toads and can be a stubborn feeder as a hatchling; the garter snake is semi-aquatic and often refuses mice outright in favor of fish, worms, and amphibians for life. Neither is a reliable mouse-only snake, so plan a different feeding routine than you would for a corn snake or ball python." },
    ],
  },
  {
    id: "hognose-snake",
    name: "Hognose Snake",
    emoji: "🐍",
    difficulty: "Intermediate",
    petType: "Snakes",
    image: "/assets/guides/hognose-snake.jpg",
    tagline: "The drama queen of snakes: the whole display is bluff!",
    funFact: "When threatened, hognose snakes will flatten their neck, hiss, lunge (mouth closed), and if that fails, flip over and play dead complete with open mouth and tongue hanging out!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, the thermostat probe,
    // hygiene, the daily stool check, weight checks, and the power-outage
    // floor cite the shared reptile and snake guides in the sidebar's Health
    // and More list. The old hub's 40 to 60% humidity and its crepuscular
    // activity line are both retired here: the tank setup guide's 30 to 50%
    // and its diurnal reading are the sourced ones (ReptiFiles, The Bio Dude).
    // Reconciled 2026-09-09 for batch E (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new snake is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Legal check", value: "Every venomous-reptile law we checked draws its line well above hognose. Georgia and West Virginia are the two states where hognose ownership itself is off the table. Colorado now allows captive-bred Western and Plains hognose snakes to be possessed, sold, and transported with documentation, effective May 1, 2026. Eastern hognose is excluded from the new legalization entirely. Treat California alone as the open question, and confirm it with the state agency rather than an aggregator.", source: "hognose-snake-legal-guide" },
        { label: "Enclosure", value: "A useful rule of thumb is roughly one square foot of floor space per foot of snake length. For adult males, a 20-gallon-equivalent enclosure (around 30x13x13 inches) works as a minimum. Females grow noticeably larger, and a 40-gallon-equivalent setup (36x18x16 inches) is a more appropriate minimum for them. A 2x2x2 foot or similarly sized front-opening PVC enclosure makes a solid adult setup for either sex. Floor space matters more than height here, this is a ground-dwelling, burrowing species, not a climber.", source: "hognose-snake-tank-setup-guide" },
        { label: "Temperatures", value: "Basking area around 90 to 95°F on one end, cool side 70 to 75°F, with a night temperature around 75 to 78°F.", source: "hognose-snake-tank-setup-guide" },
        { label: "Heat", value: "A heat source is required, and the commonly recommended choice is a low-wattage halogen basking bulb positioned over the substrate, on a thermostat or dimmer, rather than relying on a heat mat or ceramic heat emitter as the primary source. You may see some general care sheets recommend an under-tank heat mat and thermostat kit instead, this is a genuine point of disagreement in the hobby, but halogen basking bulbs are the more current, specialist-endorsed choice. Whichever heat source you choose, the thermostat itself is not optional.", source: "hognose-snake-tank-setup-guide" },
        { label: "Thermostat probe", value: "For an under-tank mat the probe goes on the floor of the warm hide, the surface the animal actually lies on, held down with foil tape so it can't drift. The probe reads at the animal's level, not up in the airspace near the fixture.", source: "reptile-heating-thermostats-guide" },
        { label: "Humidity", value: "30 to 50% ambient humidity, genuinely on the dry side compared to many other pet snakes. Don't mist the whole enclosure to raise humidity, instead provide one dedicated humid hide for shedding, and only add moisture there as needed. Running the whole enclosure damp is a direct path to respiratory infection and scale rot.", source: "hognose-snake-tank-setup-guide" },
        { label: "Substrate", value: "3 to 6 inches of loose, dry, diggable substrate, a soil and sand mix works well, roughly 70% soil-based substrate to 30% reptile-safe sand is a common ratio. Aspen or coconut fiber substrate also works well as the soil-based component. Keep it dry, damp substrate combined with this species' preference for arid conditions is a fast route to skin and respiratory problems.", source: "hognose-snake-tank-setup-guide" },
        { label: "Where the digging goes", value: "Deep substrate on the cool end, basking surface on the warm end, cover at both. The snake never has to choose between the temperature it wants and the behavior it wants. The preference was stronger when the enriched side was cooler, which means substrate depth and thermal choice reinforce each other when you place them together.", source: "hognose-snake-enrichment-guide" },
        { label: "Cover", value: "Two secure hides minimum, one warm and one cool, so being concealed never costs the snake its preferred temperature. Cork tubes and flats plus leaf litter break the floor up further, so the snake has cover everywhere and not only in two boxes.", source: "hognose-snake-enrichment-guide" },
        { label: "Lighting", value: "Hognoses are active during the day, unlike many pet snakes, and benefit from a normal 12-hour light and dark cycle. UVB isn't strictly required by every source, but a low-output linear T5 bulb spanning part of the enclosure is increasingly recommended for this diurnal species.", source: "hognose-snake-tank-setup-guide" },
        { label: "Where to feed", value: "Hognoses are enthusiastic, somewhat messy eaters, and they're prone to swallowing substrate along with their food. Feeding in a separate container away from the loose substrate is the single most effective prevention.", source: "hognose-snake-health-issues-guide" },
        { label: "How much to feed", value: "In captivity they get less activity than in the wild, and they're sometimes fed too much or too often for their enclosure size, and it's a real contributor to shortened lifespans in this species. Match feeding frequency and portion size to your snake's activity level and adult size, not the schedule that suited it as a fast-growing juvenile.", source: "hognose-snake-health-issues-guide" },
        { label: "Daily check", value: "Snake stool is semi-formed, sometimes carrying fur, bone, or feather from whole prey, with white, chalky urates released alongside it since snakes share one cloacal opening. Garter and hognose snakes often eat amphibians, fish, or worms rather than rodents, so expect less fur and more mucus.", source: "reptile-stool-urates-hydration-guide" },
        { label: "Weight checks", value: "Weigh rather than measure, monthly for a growing juvenile as a reasonable default. A well-conditioned snake reads as a rounded loaf or a slightly rounded rectangle in cross-section. A triangular cross-section with a visible ridge down the spine points to underweight, and a round body with skin folds or a doughy feel over the ribs points to overweight.", source: "snake-sexing-growth-body-condition-guide" },
        { label: "Handling", value: "Real bites are rare and typically tied to a feeding response, the snake mistaking a hand for food, rather than defense. Wash your hands before handling to remove any prey scent, and avoid handling right after your snake has eaten. The first-timer mistakes: panicking at the hood-and-hiss display and handling roughly or dropping the snake, when calm, steady handling actually works better; handling immediately after feeding; not washing hands beforehand, raising the odds of a feeding-response bite.", source: "hognose-snake-handling-guide" },
        { label: "Venom", value: "Western hognoses are rear-fanged and mildly venomous, but that venom is not considered medically significant to a healthy person. The one documented bite case in the scientific literature, a keeper bitten while offering a mouse, produced local swelling, bruising, and mild cellulitis, with no systemic effects and a full recovery in about five months. The researchers still concluded hognoses shouldn't be considered dangerous, just handled thoughtfully, especially around feeding time.", source: "hognose-snake-handling-guide" },
        { label: "Budget", value: "Normal, wild-type animals run $50 to $100. Roughly $200 to $500 for the upfront setup, and roughly $10 to $25 a month in ongoing costs. A routine reptile wellness exam runs roughly $50 to $100, with a fecal test around $25 to $50.", source: "hognose-snake-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years is the commonly cited lifespan range for a Western hognose, with 15 to 20 years genuinely achievable under excellent husbandry.", source: "hognose-snake-cost-guide" },
        { label: "Adult size", value: "1.5 to 3.5 feet (45 to 107 cm) depending on species." },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the snake out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "75 to 78°F is the normal night low. Below 75°F, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "hognose-snake-health-issues-guide",
      callNow: [
        "Open-mouth breathing, wheezing, drooling or visible mucus, and lethargy",
        "A failure to pass waste, bloating, and lethargy that doesn't clear within a reasonable window",
        "Discolored or blistered belly scales that progress beyond mild discoloration",
        "Mites or internal parasites, which periodic fecal checks catch early, especially on a newly acquired snake",
      ],
      vetLine: "A reptile-experienced vet, found before you need one. A respiratory infection always needs a vet, since it needs antibiotics and won't resolve on its own. With impaction, mild cases sometimes resolve on their own, and anything that doesn't pass within a reasonable window needs a vet, with severe cases sometimes requiring surgery.",
    },
    routes: [
      { slug: "hognose-snake-cost-guide", line: "What the snake costs by morph, the $200 to $500 setup, the low monthly running cost, and what vet visits run." },
      { slug: "hognose-snake-tank-setup-guide", line: "Enclosure size split by sex, the temperature gradient, the dry humidity range, and the deep substrate this species digs into." },
      { slug: "hognose-snake-handling-guide", line: "The puff adder act, the death-feigning routine, what the one documented bite case actually involved, and when bites happen." },
      { slug: "hognose-snake-health-issues-guide", line: "Respiratory infection, impaction, obesity and fatty liver, scale rot, and parasites, with the cause behind each." },
      { slug: "hognose-snake-enrichment-guide", line: "The preference study where the snakes chose enrichment, why the digging goes on the cool side, and a priority order." },
      { slug: "hognose-snake-legal-guide", line: "Why venomous-reptile bans exclude this genus, the two states where ownership is off the table, and Colorado's 2026 split rule." },
    ],
    buyList: [
      "2x2x2 foot or 36x18x18 inch PVC or glass enclosure, front-opening and securely latching",
      "Low-wattage halogen basking bulb, or an under-tank heat mat",
      "Thermostat or dimmer, whichever heat source you use",
      "Digital thermometer and hygrometer",
      "Loose, dry, diggable substrate: soil-based mix with reptile-safe sand, aspen, or coconut fiber",
      "Warm, cool, and humid hides",
      "Cork bark, branches, and leaf litter for cover",
      "Water dish big enough for the snake to get into",
      "A separate container for feeding off the substrate",
      "Feeding tongs",
      "Frozen/thawed mice",
      "Optional low-output linear T5 UVB on a 12-hour timer",
    ],
    faqs: [
      { q: "How humid should a hognose snake enclosure be?", a: "30 to 50% ambient, dry compared with most pet snakes. Rather than misting the whole enclosure, run one dedicated humid hide for shedding and add moisture only there." },
      { q: "Why are hognose snakes prone to impaction?", a: "Hognoses are enthusiastic, somewhat messy eaters, and they're prone to swallowing substrate along with their food. Feeding in a separate container away from the loose substrate is the single most effective prevention. Watch for a failure to pass waste, bloating, and lethargy, and see a vet if it doesn't resolve within a reasonable window." },
      { q: "Are Western hognose snakes dangerous to handle?", a: "The rear-fanged venom isn't considered medically significant to a healthy person, and the researchers behind the one documented bite case in the literature concluded the species isn't dangerous, only worth handling thoughtfully. That case is still worth knowing about: swelling, bruising, and mild cellulitis at the bite site, no systemic effects, and a recovery that ran about five months." },
    ],
  },
  {
    id: "milk-snake",
    name: "Milk Snake",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/milk-snake.jpg",
    tagline: "The brilliantly banded mimic that wears venomous colors with no venom required!",
    funFact: "Milk snakes are harmless, but their red, black, and yellow banding mimics the deadly coral snake: a survival trick called Batesian mimicry. The rhyme 'Red touch yellow, kill a fellow; red touch black, friend of Jack' helps tell them apart!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "3x1.5x1.5 ft to 4x2x2 ft enclosure", low: 100, high: 250 },
        { item: "Under-tank heater with thermostat", low: 35, high: 60 },
        { item: "Multiple snug hides", low: 15, high: 25 },
        { item: "Aspen shavings substrate", low: 15, high: 25 },
        { item: "Soak-able water dish", low: 8, high: 15 },
        { item: "Digital thermometer", low: 15, high: 20 },
        { item: "Cork bark and branches", low: 15, high: 25 },
        { item: "Feeding tongs", low: 5, high: 10 },
      ],
      annual: [
        { item: "Frozen/thawed mice", low: 70, high: 130 },
        { item: "Substrate replacement", low: 25, high: 40 },
        { item: "Electricity (heat)", low: 40, high: 70 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 3x1.5x1.5 ft to 4x2x2 ft enclosure suits most adult milk snakes depending on subspecies - they range from a compact 2 ft (scarlet king subspecies) to over 5 ft (Sinaloan milk snake). Milk snakes are secretive, semi-fossorial animals that spend most of their time hidden. Multiple snug hides are essential.

Provide a warm end (85 to 88 degrees F surface temperature via UTH on thermostat) and a cool end (72 to 75 degrees F). Maintain 40 to 60% humidity. Aspen shavings are an excellent substrate: they allow natural burrowing behavior, maintain appropriate humidity, and spot-clean easily. Provide 3 to 4 inches of substrate depth for burrowing.

A secure, lockable lid is non-negotiable. Milk snakes test every seam consistently and are skilled escape artists. Check all enclosure seals regularly.`,
      diet: `Feed appropriately sized frozen/thawed mice every 7 to 10 days for juveniles, every 10 to 14 days for adults. Milk snakes are typically strong, reliable feeders. Always use feeding tongs at every feeding - without exception.

Some subspecies and individual milk snakes can be defensive or nippy as juveniles. This usually diminishes rapidly with regular, calm handling. The smell of prey on your hands can trigger feeding responses, so always wash hands before handling and feed with tongs. Allow 48 to 72 hours after feeding before handling.

Like kingsnakes, milk snakes are ophiophagous (snake-eaters) in the wild. Never house with other snakes.`,
      enrichment: `Milk snakes are semi-fossorial and spend much of their time burrowed in or hiding under substrate. Providing substrate deep enough to burrow in (3 to 4 inches of aspen), multiple hides at both temperature ends, cork bark rounds and pieces, and a water dish large enough to soak in meets their enrichment needs.

Milk snakes explore their enclosure actively during the evening and night. Rearranging hide positions and adding varied objects (cork bark, small logs) periodically provides novelty. Handle regularly for taming - most adults become very calm and handleable with consistent interaction.`,
      health: `Milk snakes are extremely hardy when husbandry is correct. Respiratory infections from cold or damp conditions and retained shed from too-low humidity are the primary concerns. A moist hide with damp sphagnum moss prevents most shedding issues.

Their secretive nature means illness can be hidden until advanced. Monitor feeding response, alertness, and activity level as baseline health indicators. Any sudden change in these warrants investigation. Annual wellness checks with a reptile vet are recommended even for apparently healthy animals.`,
      checklist: [
        "3x1.5x1.5 ft to 4x2x2 ft escape-proof enclosure",
        "Under-tank heater with thermostat",
        "Multiple snug hides (warm and cool ends)",
        "Aspen shavings substrate (3 to 4 inch deep for burrowing)",
        "Shallow soak-able water dish",
        "Frozen/thawed appropriately-sized mice",
        "Feeding tongs",
        "Digital thermometer",
        "Cork bark and branches",
        "Reptile-savvy vet contact",
      ],
    },
    faqs: [
      { q: "Are milk snakes venomous?", a: "No. Milk snakes are completely harmless. Their vivid red, black, and yellow banding mimics the pattern of the coral snake - a venomous species - in a survival strategy called Batesian mimicry. The old rhyme helps: 'Red touches black, friend of Jack; red touches yellow, kill a fellow.' On a milk snake, red touches black. They have no venom and pose no danger to humans." },
      { q: "How big do milk snakes get?", a: "Size varies significantly by subspecies. The Eastern milk snake reaches 2 to 3 feet; Sinaloan milk snakes (one of the most popular) can reach 4 to 5 feet; the Mexican milk snake stays around 2.5 to 3 feet. Choose your enclosure and prey size based on your specific subspecies. All are slender, graceful snakes." },
      { q: "How do I tell a milk snake from a coral snake?", a: "Use the rhyme: 'Red touches black, friend of Jack; red touches yellow, kill a fellow.' Milk snakes have red bands bordered by black bands. Coral snakes have red bands bordered by yellow bands. This rhyme applies to North American species. In all cases, never handle an unidentified snake in the wild." },
      { q: "Are milk snakes good beginner snakes?", a: "Yes - once established, they are strong feeders and straightforward to care for. Juvenile milk snakes can be nippy initially, but this diminishes rapidly with consistent calm handling. Their smaller size (compared to ball pythons or corn snakes) makes them easy to manage. Ensure a secure, lockable lid - milk snakes are persistent escape artists that will test every seam." },
      { q: "How long do milk snakes live?", a: "12 to 20 years in captivity with appropriate care - correct temperatures, consistent prey, humidity appropriate for the subspecies, and annual wellness checks with a reptile-savvy veterinarian. A milk snake acquired as a hatchling is a long-term commitment." },
      { q: "Is a milk snake the same as a king snake?", a: "Closely related, not the same. Milk snakes (Lampropeltis triangulum) are actually a species within the kingsnake genus, Lampropeltis, so every milk snake is technically a kingsnake, but not every kingsnake is a milk snake. The California kingsnake, for example, is a separate species in the same genus with different patterning, usually banded or striped in black and white, rather than the red-black-yellow banding milk snakes are known for. Care requirements are nearly identical between the two." },
    ],
  },
  {
    id: "rosy-boa",
    name: "Rosy Boa",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/rosy-boa.jpg",
    tagline: "The pint-sized desert boa that's calmer than snakes twice its size!",
    funFact: "Rosy boas rarely top 3 feet - a fraction of a Boa constrictor's 5 to 13 foot adult length - yet they can live just as long: some captive rosy boas have been documented living past 30 years!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "20-30 gallon or 36x18x18 in enclosure", low: 100, high: 200 },
        { item: "Under-tank heater + thermostat", low: 35, high: 60 },
        { item: "Two snug hides", low: 15, high: 25 },
        { item: "Small water dish", low: 8, high: 15 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Aspen or sand/soil blend substrate", low: 15, high: 25 },
      ],
      annual: [
        { item: "Frozen/thawed mice", low: 50, high: 100 },
        { item: "Substrate replacement", low: 20, high: 35 },
        { item: "Electricity (heat)", low: 35, high: 60 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `Adult rosy boas are content in a 20 to 30 gallon or 36x18x18 in enclosure - noticeably smaller than the 6x3x3 ft or larger space a Boa constrictor needs as an adult. They're a ground-dwelling, secretive species that spends much of its time tucked into rock crevices, so a snug hide matters more than floor space or height.

Provide a warm end with a basking surface temperature around 88 to 90 degrees F via an under-tank heater on a thermostat, and a cool end of 65 to 75 degrees F. Rosy boas tolerate cooler nighttime temperatures than most tropical boas and pythons, reflecting their desert origin.

Humidity is the other major difference from the site's other boa: rosy boas want only moderate humidity, around 40% ambient, rising to 60 to 65% during shed - well below the 60 to 80% a Boa constrictor needs. They're genuinely sensitive to overly damp conditions, so a dry, sandy-soil or aspen substrate blend suits them far better than the moisture-retentive substrates used for tropical species. Keep decor simple: a couple of secure hides and some flat rock or cork bark is typically all a rosy boa uses.`,
      diet: `Rosy boas eat appropriately sized frozen/thawed mice - fuzzies for juveniles, progressing to small or medium adult mice for full-grown snakes. Prey should be roughly as wide as the snake's thickest point.

Feed juveniles every 7 to 10 days. Adults have slow metabolisms and low activity levels even by boa standards, and do well on a mouse every 2 to 4 weeks - overfeeding a rosy boa is a more realistic risk than underfeeding, given how little they move. Always use feeding tongs and feed frozen/thawed only.

Many keepers reduce or stop feeding for a few weeks during winter, mirroring the natural seasonal slowdown rosy boas experience in the wild, though this isn't required for a snake kept at stable indoor temperatures year-round. Fresh water should always be available, even though rosy boas drink and soak less than more tropical species.`,
      enrichment: `Rosy boas are famously docile and slow-moving, often described as one of the calmest snakes commonly kept as pets - even compared to other boas. They rarely bite and tend to move deliberately rather than darting or thrashing, which makes them an easy, low-stress snake to handle regularly.

Provide secure hides at both temperature ends and some rock or cork bark cover; rosy boas are fond of tight spaces and will spend much of the day hidden. Activity increases in the evening and at night during hot months, shifting toward dawn and dusk in cooler seasons - offering a hide near the warm side lets them thermoregulate on their own schedule.

Handle confidently and gently; most rosy boas settle into handling with very little acclimation needed compared to flightier species. Support the body rather than gripping, since a startled rosy boa's main defense is simply trying to move away and hide, not bite.`,
      health: `Excess humidity and damp substrate, not dryness, are the main environmental risk for rosy boas - the reverse of the concern with tropical boas and pythons. Chronically damp conditions can cause scale rot and respiratory infections in a species adapted to arid desert air. Keep substrate on the dry side and only raise humidity briefly around shedding.

Obesity from overfeeding is a real and common issue given how sedentary rosy boas are; resist feeding on the same schedule used for a more active snake. Retained shed, especially on the tail tip, can occur if humidity isn't bumped slightly during the shed cycle - a brief soak resolves most cases.

As with other boas, Inclusion Body Disease (IBD) is a rare but serious viral risk within the boid family. Source only captive-bred animals from reputable breeders and quarantine any new snake before introducing it to an existing collection. Annual wellness checks with a reptile vet are recommended, especially given how long-lived this species is.`,
      checklist: [
        "20-30 gallon or 36x18x18 in enclosure",
        "Under-tank heater + thermostat (88 to 90 degrees F warm end)",
        "Two snug hides (warm and cool ends)",
        "Small water dish",
        "Digital thermometer and hygrometer",
        "Aspen or sand/soil blend substrate (kept dry)",
        "Frozen/thawed mice, appropriately sized",
        "Feeding tongs",
        "Rock or cork bark cover",
        "Reptile-savvy vet contact",
      ],
    },
    faqs: [
      { q: "How big do rosy boas get?", a: "Most adults reach 24 to 36 inches, occasionally a bit over 3 feet - a fraction of a [Boa constrictor's](/guides/boa-constrictor/) 5 to 13 foot adult length. This dramatic size difference is one of the main reasons rosy boas appeal to keepers who want a true boa without the eventual space and handling demands of a much larger species." },
      { q: "Are rosy boas good pets for beginners?", a: "Yes - widely considered one of the best beginner boas available. They stay small, tolerate handling exceptionally well, rarely bite, and have simple desert-style care requirements with lower humidity than most other boas and pythons. Their slow, deliberate movement and calm temperament make them easy to work with even for a first-time snake owner." },
      { q: "How long do rosy boas live?", a: "20 to 30 years in captivity is typical with good care, and some individuals have been documented living past 30. This is a genuinely long-lived pet for its small size - comparable to or longer than many much larger snakes." },
      { q: "What do rosy boas eat?", a: "Appropriately sized frozen/thawed mice - fuzzies for juveniles, small to medium adult mice for grown snakes. Adults eat far less often than most pet snakes, typically once every 2 to 4 weeks, since rosy boas have slow metabolisms and low activity levels even by boa standards. Overfeeding is a more realistic risk than underfeeding this species." },
      { q: "Do rosy boas need high humidity like other boas?", a: "No - this is one of the biggest differences between a rosy boa and the site's other boa, the Boa constrictor. Rosy boas come from arid Southwestern desert and chaparral and do best around 40% ambient humidity, only rising during shed. Housing one in the humid, moisture-retentive setup used for a tropical boa risks scale rot and respiratory infections." },
      { q: "How does a rosy boa compare to a Boa constrictor?", a: "Wildly different despite belonging to the same family. A rosy boa tops out around 3 feet and comes from dry Southwestern desert; a [Boa constrictor](/guides/boa-constrictor/) can reach 8 to 10+ feet and needs a 6x3x3 ft or larger enclosure with tropical humidity. If a Boa constrictor's eventual size is the dealbreaker, a rosy boa offers the same docile, easy-to-handle boa temperament in a snake that never outgrows a modest enclosure." },
    ],
  },
];
