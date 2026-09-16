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
        { label: "Legal check", value: "Hawaii is illegal statewide and New York City bans the entire family Pythonidae by name. New Jersey and Delaware require a permit, and Minnesota allows one from a permitted breeder.", source: "ball-python-legal-guide" },
        { label: "Enclosure", value: "The current standard for an adult is a 4x2x2 ft (48x24x24 inches, roughly 120 gallons, about 8 square feet of floor space) setup, with the enclosure at least as long as the snake itself. House one snake per enclosure.", source: "ball-python-tank-setup-guide" },
        { label: "Temperatures and heat", value: "Warm side and basking 88 to 92°F, with air temp not exceeding 95°F anywhere. Cool side 75 to 80°F. Nighttime 72 to 75°F. Every single heat source needs to run through a thermostat, no exceptions. Skip hot rocks entirely.", source: "ball-python-tank-setup-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture.", source: "reptile-heating-thermostats-guide" },
        { label: "Humidity", value: "Ambient 55 to 65%, raised to 70 to 80% specifically during shedding cycles. Check it with a real digital hygrometer, not a cheap analog dial.", source: "ball-python-tank-setup-guide" },
        { label: "Substrate, hides, and water", value: "Cypress mulch or coconut coir/husk, 3 to 4 inches deep. At least two hides, one on the warm side and one on the cool side, sized snugly so the snake's body touches the sides at multiple points. Add a heavy, tip-resistant water bowl large enough for the snake to soak in.", source: "ball-python-tank-setup-guide" },
        { label: "Feeding schedule and prey size", value: "Hatchlings (0-6 months) every 5-7 days, juveniles (6-18 months) every 7-10 days, adults (18+ months) every 10-14 days. Prey roughly the same width as the widest point of the snake's body. For most adult ball pythons, that's a medium rat.", source: "ball-python-feeding-guide" },
        { label: "Thawing and refusals", value: "Refrigerate until fully thawed, or seal it in a bag and submerge it in cool to lukewarm water. Never thaw on a counter for hours and never use a microwave. A healthy adult ball python can go 3-6 months without eating.", source: "ball-python-feeding-guide" },
        { label: "Winter appetite", value: "Ball pythons especially show a natural seasonal dip in appetite from roughly October through March even without any deliberate cooling.", source: "snake-brumation-guide" },
        { label: "Handling", value: "Don't handle a newly acquired snake for the first one to two weeks, and don't start until it's eating regularly. Then 2 to 3 sessions a week, up to 3 to 5 for a snake that handles well, 15 to 30 minutes at most. Wait 48 to 72 hours after feeding, and never during a shed.", source: "ball-python-handling-guide" },
        { label: "Weight checks", value: "Weigh rather than measure. Monthly is a reasonable default for a growing juvenile, less often once an adult has leveled off.", source: "snake-sexing-growth-body-condition-guide" },
        { label: "Budget", value: "A standard or wild-type ball python runs $40 to $100. Total setup typically lands at $300 to $800. Most owners land around $200 to $500 a year in ongoing costs once the setup is finished.", source: "ball-python-cost-guide" },
        { label: "Adult size", value: "3 to 5 feet, females significantly larger." },
        { label: "Lifespan", value: "20 to 30 years, up to 48 years recorded in captivity." },
        { label: "Quarantine", value: "A new snake is quarantined for 3 to 6 months.", source: "reptile-quarantine-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact with the animal, its enclosure, its water, or anything that's touched either.", source: "reptile-salmonella-hygiene-guide" },
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, hygiene, and power
    // outage cite the shared reptile guides in the sidebar's Health and More
    // list. This species has no feeding guide, so the feeding row is sourced
    // to the Diet Basics section of the setup guide. Reconciled 2026-09-14 for
    // batch G (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new snake is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "A 20-gallon tank works for a hatchling or young snake, and the ideal adult enclosure is 48 inches long by 24 inches wide by 24 inches tall, front-opening.", source: "california-kingsnake-tank-setup-guide" },
        { label: "Security", value: "California kingsnakes are accomplished escape artists, so a tightly clamped, secure lid isn't optional.", source: "california-kingsnake-tank-setup-guide" },
        { label: "Temperatures", value: "Warm side 85 to 88°F, cool side 72 to 78°F. Get there with an under-tank heat pad, an overhead source, or both, always on a thermostat.", source: "california-kingsnake-tank-setup-guide" },
        { label: "Humidity", value: "Low, 40 to 60%. Good ventilation and a water bowl that isn't overfilled hold that range on their own.", source: "california-kingsnake-tank-setup-guide" },
        { label: "Substrate", value: "Aspen shavings, the classic choice, since they support natural burrowing. Pine and cedar are out, their aromatic oils irritate the respiratory system, and so are sand and anything chemically treated.", source: "california-kingsnake-tank-setup-guide" },
        { label: "Feeding and water", value: "Hatchlings and juveniles every 5 to 7 days, adults every 10 to 14 days, on frozen/thawed rodents. Size the prey to roughly the width of the snake at its thickest point. Fresh water in a dish the snake can sit in, and never offer live rodents, which can injure a snake that does not strike cleanly.", source: "california-kingsnake-tank-setup-guide" },
        { label: "Handling", value: "No handling until it is eating reliably. First sessions run no more than 5 minutes, two to three times a week, with around 10 to 15 minutes as the upper limit depending on room temperature. Wait at least 48 hours after a meal, and skip the whole shed cycle.", source: "california-kingsnake-handling-guide" },
        { label: "Living alone", value: "Never house it with, or allow contact with, another snake of any kind.", source: "california-kingsnake-handling-guide" },
        { label: "Space and cover", value: "More space only helps if the snake will cross it. Break the floor up with cork tubes and flats, leaf litter over aspen, and enough clutter that the animal is never fully exposed anywhere. A firmly braced branch or a stack of cork adds a second usable level, and stability is the requirement rather than height.", source: "california-kingsnake-enrichment-guide" },
        { label: "Shed trouble", value: "Retained skin from humidity running too low. Manageable at home with a humid hide lined with damp sphagnum moss.", source: "california-kingsnake-health-issues-guide" },
        { label: "Budget", value: "$45 to $300 for the snake, $200 to $500 for the setup, and roughly $15 to $30 a month after that.", source: "california-kingsnake-cost-guide" },
        { label: "Vet costs", value: "$50 to $135 for a routine exotic exam.", source: "california-kingsnake-cost-guide" },
        { label: "Adult size", value: "2.5 to 4 feet (75 to 120 cm)." },
        { label: "Lifespan", value: "20 years or more is achievable with good care, with some individuals surpassing that.", source: "california-kingsnake-cost-guide" },
        { label: "Where it's banned", value: "Hawaii bans the whole snake suborder outright, Delaware requires a permit, and Oregon and Nevada both write their rules around the snake's color pattern rather than its species.", source: "kingsnake-legal-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the snake out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "65 to 75°F is the normal night low. Below 65°F, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "california-kingsnake-health-issues-guide",
      callNow: [
        "Wheezing, open-mouth breathing, nasal mucus, or lethargy",
        "Discolored, uneven, or damaged scales, sometimes with swelling and a foul odor",
        "Tiny black or red specks moving around the eyes and vent",
        "Unusual amounts of time spent soaking in the water bowl",
        "Cheesy or yellowish material around the gums, along with swelling",
      ],
      vetLine: "Early cases of respiratory infection sometimes resolve once parameters are corrected, advanced cases need a vet for antibiotics. Mouth rot: always see a vet, this can become life-threatening if untreated. Mites can become genuinely life-threatening if left unaddressed, and treatment needs to cover both the snake and a full enclosure cleaning. The vast majority of health problems in captive kingsnakes trace directly to incorrect temperatures, inadequate humidity, dirty conditions, or improper feeding, not genetic susceptibility.",
    },
    routes: [
      { slug: "california-kingsnake-cost-guide", line: "$45 to $300 for the snake, $200 to $500 for the setup, $15 to $30 a month, and the one cost consideration that isn't about money." },
      { slug: "california-kingsnake-tank-setup-guide", line: "The 48x24x24 adult enclosure, the temperature and humidity targets, substrate, feeding, and the two security rules this species carries." },
      { slug: "california-kingsnake-handling-guide", line: "Session lengths, the timing rules around feeding and shedding, the five fear signals, and why this snake must live alone." },
      { slug: "california-kingsnake-health-issues-guide", line: "Respiratory infection, scale rot, mites, mouth rot, retained shed, and why nearly all of it traces back to husbandry." },
      { slug: "california-kingsnake-enrichment-guide", line: "No kingsnake study exists, so this is the corn snake and ratsnake evidence, labeled as borrowed, on floor space, cover, climbing and scent." },
      { slug: "kingsnake-legal-guide", line: "Hawaii's total snake ban, Delaware's permit, and the two states that judge a kingsnake by its color pattern rather than its species." },
    ],
    buyList: [
      "48x24x24 inch front-opening enclosure",
      "Under-tank heat pad, overhead heat source, or both",
      "Thermostat",
      "Two cork bark hides, one per temperature zone",
      "Humid hide with damp sphagnum moss",
      "Aspen shavings or cypress mulch substrate",
      "Water dish the snake can sit in",
      "Digital thermometer and hygrometer",
      "Branches or stacked cork for climbing",
      "Feeding tongs",
      "Frozen/thawed rodents",
    ],
    faqs: [
      { q: "Why do California kingsnakes need to be housed alone?", a: "In the wild, California kingsnakes eat other snakes, including venomous species like copperheads, cottonmouths, and rattlesnakes. That instinct doesn't turn off in captivity, so this species must never be housed with, or allowed contact with, another snake of any kind." },
      { q: "Are California kingsnakes resistant to venom?", a: "Partly. Serum research on the genus found meaningful resistance to rattlesnake venom, and how much varies by population. Coral snakes are a different case: kingsnakes have little to no protection against that neurotoxic venom." },
      { q: "Are California kingsnakes prone to health problems?", a: "Not inherently. Incorrect temperatures, inadequate humidity, dirty conditions, or improper feeding explain the vast majority of problems in captive kingsnakes, not genetic susceptibility, so getting the basics right heads off nearly all of this list." },
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine, hygiene, weight checks and the
    // shedding line cite the shared reptile and snake guides in the
    // sidebar's Health and More list. Reconciled 2026-09-15 after the garter
    // snake set test (docs/READER_REVIEWS.md).
    //
    // The old hub's basking figure was its own: "85 to 88 degrees F surface,
    // basking air up to 90", against the setup guide's table of 85 to 90°F
    // with some sources to 95 and its steer to treat the lower end as a
    // floor rather than a ceiling. Its under-tank heater price was $35 to
    // $60 against the cost guide's $35 to $70, and its UVB line was the only
    // place on the site giving a strength for this species.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "Because it's native almost everywhere, most states don't regulate the garter snake as an ordinary pet-trade reptile at all. They regulate it as wildlife, which often means more paperwork than an imported ball python or corn snake ever needs.", source: "garter-snake-legal-guide" },
        { label: "Quarantine", value: "A new snake is quarantined for 3 to 6 months, in a bare enclosure on plain paper towel.", source: "reptile-quarantine-guide" },
        { label: "Enclosure and lid", value: "A single adult does well in a 36x18x18 inch enclosure or an equivalent 40-gallon breeder tank as the minimum. A tight-fitting, locking lid is not optional, and any ventilation gaps or cord holes should be sealed with mesh or silicone.", source: "garter-snake-tank-setup-guide" },
        { label: "Temperature", value: "Basking or warm side 85 to 90°F, up to 95°F for reliable digestion, so treat the lower end as a floor rather than a ceiling. Cool side 70 to 75°F, and nights as low as 64°F are tolerated. Whatever heat source you choose runs through a thermostat, the part with zero exceptions.", source: "garter-snake-tank-setup-guide" },
        { label: "Humidity", value: "30 to 60% ambient works well for most setups, raised slightly during shedding.", source: "garter-snake-tank-setup-guide" },
        { label: "The water feature", value: "Size the container so the snake can fully submerge, not just dip its head in. Change it weekly at minimum, or immediately if soiled, since this species fouls its water faster than a typical snake.", source: "garter-snake-tank-setup-guide" },
        { label: "Substrate", value: "1 to 2 inches of a moisture-retentive substrate: coconut fiber, cypress mulch, or dry leaf litter all work, and a bioactive soil-and-sand mix is a more elaborate option.", source: "garter-snake-tank-setup-guide" },
        { label: "Many won't eat mice", value: "Budget for fish and earthworms as the default plan.", source: "garter-snake-feeding-guide" },
        { label: "Feeding frequency and prey size", value: "Earthworm-heavy diets twice a week, fish-heavy every 5 to 7 days, mouse-eating adults about once a week, and juveniles on any diet every other day to every 3 to 5 days. No more than about 1.5 times the width of the snake at its widest point, or roughly up to 10% of body weight per meal.", source: "garter-snake-feeding-guide" },
        { label: "Feeder fish", value: "Switch to thiaminase-free fish like tilapia, salmon, and silversides, and add a B1 supplement if fish make up more than roughly a quarter of the diet.", source: "garter-snake-feeding-guide" },
        { label: "Handling", value: "Give a newly acquired garter snake one to two weeks to settle into its enclosure and start eating reliably before attempting to handle it. When a garter snake feels threatened, its first move is almost always to release musk from glands near the base of the tail rather than striking.", source: "garter-snake-handling-guide" },
        { label: "Weight checks", value: "Weigh rather than measure. Monthly is a reasonable default for a growing juvenile, less often once an adult has leveled off.", source: "snake-sexing-growth-body-condition-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact with the animal, its enclosure, its water, or anything that's touched either.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Budget", value: "$20 to $50 for a normal, wild-type animal, with albino and checkered albino commonly $150 to $350. Setup runs roughly $200 to $400.", source: "garter-snake-cost-guide" },
        { label: "Adult size", value: "18 to 26 inches (46 to 66 cm) typical; large females occasionally exceed 3.5 feet (107+ cm)." },
        { label: "Lifespan", value: "Captivity changes that substantially: 6 to 10 years is typical with good care, and individuals have been documented living past 20.", source: "garter-snake-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "garter-snake-health-issues-guide",
      callNow: [
        "Muscle tremors, loss of coordination, a twisted or tilted neck (torticollis), an arched rigid posture (opisthotonos, sometimes called stargazing), and apparent blindness in advanced cases (thiamine deficiency). Left uncorrected it progresses to death. Initial treatment is injectable thiamine from a vet; the actual fix is dietary",
        "Open-mouth breathing, wheezing or a gurgling sound, mucus or discharge around the nose or mouth, and lethargy (respiratory infection). This needs a reptile vet and prescription antibiotics, not a wait-and-see approach",
        "Excess drooling, redness or small hemorrhage spots on the gums, visible swelling, discharge, and reduced appetite (mouth rot). This needs veterinary treatment, antibiotics plus cleaning of affected tissue, rather than home care",
        "Tiny black or red specks on the scales or in the water dish (mites), or the signs of internal parasites this species carries more risk of than most pet snakes because of what it eats",
        "Patches of skin, or retained eye caps, that didn't come off cleanly (retained shed). Usually a humidity problem, and a humid hide plus the soaking water this species already needs prevents most of it",
      ],
      vetLine: "A veterinary fecal exam is genuinely worth prioritizing for this species, for any newly acquired garter snake and periodically after that, rather than treating it as optional. Earthworms, fish, and any wild-caught prey are more likely to introduce internal parasites than a diet of commercially bred frozen rodents, and that is especially true for a wild-caught snake, which may already be carrying a parasite load picked up before it was ever your pet.",
    },
    routes: [
      { slug: "garter-snake-cost-guide", line: "$20 to $50 for a normal and up past $350 for a morph, the $200 to $400 setup, and why a free wild-caught snake still costs the same to keep." },
      { slug: "garter-snake-tank-setup-guide", line: "The 36x18x18 minimum, a water feature sized to swim in rather than sip from, the thermostat with zero exceptions, and the lid that has to latch." },
      { slug: "garter-snake-feeding-guide", line: "Why a real share of garter snakes never take a mouse, the frequency table by diet type, and the thiaminase problem behind the cheapest feeder fish." },
      { slug: "garter-snake-handling-guide", line: "Musk before bite and what a 2014 field study found about which snakes do it, the rear-fanged question answered honestly, and a settling-in timeline." },
      { slug: "garter-snake-health-issues-guide", line: "Thiamine deficiency as the one that makes this species different on a vet's table, respiratory infection, mouth rot, and a heavier parasite load than most pet snakes." },
      { slug: "garter-snake-enrichment-guide", line: "The enrichment study everyone credits to garter snakes that was actually done on ratsnakes, and what the corn snake work supports instead." },
      { slug: "garter-snake-legal-guide", line: "Why a native species is often harder to keep legally than an imported one, and the state that permits a pet-store animal the same as a wild-caught one." },
    ],
    buyList: [
      "36x18x18 inch enclosure, or a 40-gallon breeder",
      "A lid that latches or locks",
      "Mesh or silicone for every gap",
      "Under-tank heater, or an overhead halogen basking bulb",
      "Thermostat",
      "Digital thermometer and hygrometer",
      "Coconut fiber, cypress mulch, or leaf litter",
      "A basin big enough to swim in",
      "Water conditioner",
      "Cork tubes and flats, plus low planting",
      "Frozen and thawed thiaminase-free fish",
      "Earthworms",
      "Vitamin B1 supplement, for a fish-heavy diet",
      "Feeding tongs",
      "A kitchen scale",
    ],
    faqs: [
      { q: "Why do some garter snakes refuse to eat mice?", a: "Garter snake populations split into rough dietary groups, fish and amphibian specialists, worm and slug specialists, and generalists, and that specialization is real enough that some individuals will refuse even a mouse scented with fish to disguise it, for their entire lives. New keepers who assume every snake eventually 'converts' to convenient frozen mice are often caught off guard. Plan for fish and earthworms as the default expectation, not a fallback." },
      { q: "What is thiaminase, and why does it matter for a garter snake's diet?", a: "Thiaminase is an enzyme, concentrated in the viscera of certain fish, that breaks down thiamine (vitamin B1) into inactive components. A diet leaning heavily on thiaminase-rich fish, goldfish and rosy red minnows are the worst offenders, can cause a real thiamine deficiency over time, with neurological symptoms including head tremors, loss of coordination, and in advanced cases, apparent blindness and death. Feeding thiaminase-free fish (tilapia, salmon, silversides) and supplementing vitamin B1 when fish make up more than about a quarter of the diet prevents it." },
      { q: "Does a garter snake need a swimmable water feature?", a: "Yes, not just a nice extra. Garter snakes are semi-aquatic and proficient swimmers in the wild, and captive individuals use a water feature sized for full submersion for soaking, drinking, and even defecating. A shallow dish that only lets the snake dip its head misses a real, natural behavior this species needs access to." },
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
        { label: "Legal check", value: "Georgia and West Virginia are the two states where hognose ownership itself is off the table. Colorado now allows captive-bred Western and Plains hognose snakes to be possessed, sold, and transported with documentation, effective May 1, 2026.", source: "hognose-snake-legal-guide" },
        { label: "Enclosure", value: "For adult males, a 20-gallon-equivalent enclosure (around 30x13x13 inches) works as a minimum. Females grow noticeably larger, and a 40-gallon-equivalent setup (36x18x16 inches) is a more appropriate minimum for them.", source: "hognose-snake-tank-setup-guide" },
        { label: "Temperatures and heat", value: "Basking area around 90 to 95°F on one end, cool side 70 to 75°F, with a night temperature around 75 to 78°F. Whichever heat source you choose, the thermostat itself is not optional.", source: "hognose-snake-tank-setup-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture.", source: "reptile-heating-thermostats-guide" },
        { label: "Humidity", value: "30 to 50% ambient humidity, genuinely on the dry side compared to many other pet snakes. Don't mist the whole enclosure to raise humidity, instead provide one dedicated humid hide for shedding, and only add moisture there as needed.", source: "hognose-snake-tank-setup-guide" },
        { label: "Substrate", value: "3 to 6 inches of loose, dry, diggable substrate, a soil and sand mix works well, roughly 70% soil-based substrate to 30% reptile-safe sand is a common ratio.", source: "hognose-snake-tank-setup-guide" },
        { label: "Cover and digging", value: "Deep substrate on the cool end, basking surface on the warm end, cover at both. Two secure hides minimum, one warm and one cool, so being concealed never costs the snake its preferred temperature.", source: "hognose-snake-enrichment-guide" },
        { label: "Lighting", value: "Hognoses are active during the day, unlike many pet snakes, and benefit from a normal 12-hour light and dark cycle.", source: "hognose-snake-tank-setup-guide" },
        { label: "Where to feed", value: "Hognoses are enthusiastic, somewhat messy eaters, and they're prone to swallowing substrate along with their food. Feeding in a separate container away from the loose substrate is the single most effective prevention.", source: "hognose-snake-health-issues-guide" },
        { label: "Daily check", value: "Snake stool is semi-formed, sometimes carrying fur, bone, or feather from whole prey, with white, chalky urates released alongside it since snakes share one cloacal opening.", source: "reptile-stool-urates-hydration-guide" },
        { label: "Weight checks", value: "Weigh rather than measure, monthly for a growing juvenile as a reasonable default.", source: "snake-sexing-growth-body-condition-guide" },
        { label: "Handling and venom", value: "Wash your hands before handling to remove any prey scent, and avoid handling right after your snake has eaten. Western hognoses are rear-fanged and mildly venomous, but that venom is not considered medically significant to a healthy person.", source: "hognose-snake-handling-guide" },
        { label: "Budget", value: "Normal, wild-type animals run $50 to $100. Roughly $200 to $500 for the upfront setup, and roughly $10 to $25 a month in ongoing costs.", source: "hognose-snake-cost-guide" },
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
      { slug: "hognose-snake-feeding-guide", line: "Prey size by gram weight for hatchlings, how the schedule slows with age, frozen thawed prey, and scenting a hatchling that refuses." },
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
      { q: "Are Western hognose snakes dangerous to handle?", a: "The rear-fanged venom isn't considered medically significant to a healthy person, and the one documented bite case in the literature came down the same way: not a dangerous species, just one to handle thoughtfully. That case is still worth knowing about: swelling, bruising, and mild cellulitis at the bite site, no systemic effects, and a recovery that ran about five months." },
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Quarantine, hygiene and
    // power outage cite the shared reptile guides in the sidebar's Health and
    // More list. This species has no feeding guide, so the feeding rows are
    // sourced to the Diet Basics section of the setup guide. The old hub sold
    // an under-tank heater as the primary heat source where the setup guide
    // calls it a supplement, put the enclosure floor below the setup guide's
    // minimum, and gave Sinaloans 4 to 5 feet against a cited 40 to 48 inches.
    // Reconciled 2026-09-14 for batch H (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new snake is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Legal check", value: "Worth settling before price does: a handful of states restrict this species outright, and the rules turn on whether the subspecies is native rather than on the animal being a milk snake.", source: "milk-snake-legal-guide" },
        { label: "Enclosure", value: "Most milk snakes stay at or under 48 inches long, which puts the minimum adult enclosure at 48 inches long by 24 inches wide by 24 inches tall. A secure, genuinely escape-proof lid matters more with this species than some others.", source: "milk-snake-tank-setup-guide" },
        { label: "Heat and temperatures", value: "A halogen flood bulb positioned over a basking stone is the commonly recommended heat source for this species, generally preferred over ceramic, colored, or red bulbs. Basking surface 85 to 90°F, cool side 75 to 80°F, nighttime 70 to 75°F.", source: "milk-snake-tank-setup-guide" },
        { label: "Humidity", value: "40 to 60%, monitored with a digital probe hygrometer. A dedicated humid hide with moist sphagnum moss is what actually prevents retained shed, and mist as needed to maintain the range.", source: "milk-snake-tank-setup-guide" },
        { label: "Substrate", value: "Aspen bedding or cypress mulch both work well and support natural burrowing.", source: "milk-snake-tank-setup-guide" },
        { label: "UVB", value: "Not strictly required, but low-level UVB offers real benefit according to current husbandry guidance.", source: "milk-snake-tank-setup-guide" },
        { label: "Feeding and water", value: "Juveniles every 7 to 10 days, adults every 10 to 14, on frozen/thawed rodents. No more than 1.5 times the snake's width at its widest point, or roughly 10% of its body weight. A bowl large enough for the snake to curl up in and soak, topped up with fresh water.", source: "milk-snake-tank-setup-guide" },
        { label: "Living alone", value: "Milk snakes are cannibalistic. This isn't a rare edge case: never house two milk snakes in the same enclosure under any circumstances.", source: "milk-snake-handling-guide" },
        { label: "Cover and clutter", value: "The practical test is whether the snake can cross the entire enclosure without ever being fully exposed. Cork tubes and flats at intervals, leaf litter over aspen deep enough to push into, and planting dense enough to break sightlines.", source: "milk-snake-enrichment-guide" },
        { label: "The moisture dial", value: "Substrate kept too wet is the direct cause of scale rot, one of the more serious conditions on the list. Low humidity, the opposite problem, causes retained shed. Manageable at home with a properly maintained humid hide and correct overall humidity.", source: "milk-snake-health-issues-guide" },
        { label: "Budget", value: "$60 to $500 for the snake depending on subspecies and morph, roughly $300 to $600 for the setup, and roughly $15 to $30 a month after that. $50 to $100 for a routine reptile exam, with a fecal test adding $25 to $50.", source: "milk-snake-cost-guide" },
        { label: "Lifespan", value: "Milk snakes commonly live 20 years or more with good care.", source: "milk-snake-cost-guide" },
        { label: "Adult size", value: "2 to 4 feet (60 to 120 cm) depending on subspecies." },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the snake out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "65 to 75°F is the normal night low for a colubrid this size. Below 65°F, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "milk-snake-health-issues-guide",
      callNow: [
        "Wheezing, nasal or oral discharge, and open-mouth breathing",
        "Red, inflamed skin and fluid-filled blisters, typically on the belly",
        "Tiny black or red specks around the eyes and scales",
        "Restlessness and excessive soaking",
        "Signs of mouth rot (infectious stomatitis)",
      ],
      vetLine: "Respiratory infection always needs a vet, since it needs antibiotics and won't clear up on its own. So does scale rot, which veterinary sources document as a real risk that can progress to septicemia and become fatal if left untreated, and the substrate and cleaning routine have to be fixed at the same time: treatment alone doesn't fix a setup that's still too damp.",
    },
    routes: [
      { slug: "milk-snake-cost-guide", line: "$60 to $500 by subspecies and morph, the $300 to $600 setup, and why the real commitment here is time rather than money." },
      { slug: "milk-snake-tank-setup-guide", line: "The 48x24x24 minimum, the halogen bulb over a basking stone, the moisture balance, feeding, and the no-cohabitation rule." },
      { slug: "milk-snake-handling-guide", line: "A muskier, flightier temperament than a corn snake's, the cannibalism rule, and where the red-touches-yellow rhyme stops working." },
      { slug: "milk-snake-health-issues-guide", line: "Respiratory infection, scale rot, mites, retained shed, and the one dial, moisture, that sits behind three of them." },
      { slug: "milk-snake-enrichment-guide", line: "Why a snake that hides constantly needs more cover rather than a smaller enclosure, and how to clutter one properly." },
      { slug: "milk-snake-legal-guide", line: "Where a native subspecies changes the answer, and the states that restrict this snake without ever naming it." },
    ],
    buyList: [
      "48x24x24 inch wood or PVC vivarium",
      "Halogen basking bulb and fixture",
      "Thermostat",
      "Optional low-level 5% UVB",
      "Multiple snug hides, including a dedicated humid hide",
      "Sphagnum moss for the humid hide",
      "Aspen bedding or cypress mulch substrate",
      "Cork tubes and flats, plus a braced branch",
      "Water bowl large enough to soak in",
      "Digital thermometer and probe hygrometer",
      "Feeding tongs",
      "Frozen/thawed rodents",
    ],
    faqs: [
      { q: "Can I keep two milk snakes together?", a: "No, never. Milk snakes are cannibalistic, and housing two together in the same enclosure under any circumstances is a firm rule with no exceptions." },
      { q: "Does the 'red touches yellow, kill a fellow' rhyme work?", a: "Only as a rough US regional guideline, and even then it has real limits. Central and South America have dozens of coral snake species with different band orders, and young or damaged, twisted specimens can make the pattern hard to read, even for experienced herpetologists. It's essentially a non-issue for a captive-bred pet, since there's no real confusion risk in a home setting." },
      { q: "My milk snake hides all the time. Does it need a smaller enclosure?", a: "That is the conclusion most keepers reach and the colubrid research points elsewhere. Given enclosures longer than their body, corn snakes stretched out fully and preferred the larger option. A snake that hides constantly in a large bare enclosure is short of cover rather than short of walls." },
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
    funFact: "A rosy boa runs 24 to 36 inches and rarely tops 4 feet, a fraction of a boa constrictor's adult length, yet it can live just as long: documented individuals have reached past 30 years. The lifespan commitment doesn't shrink with the snake, only the space and setup cost do.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry. Quarantine, the thermostat probe, shedding and hygiene cite the
    // shared reptile guides in the sidebar's Health and More list. Built
    // 2026-09-15 for the rosy boa set test (docs/READER_REVIEWS.md). The old hub
    // put shed humidity at 60 to 65%, above the ceiling the health guide's whole
    // argument rests on, which is the one a beginner reading only the hub would
    // have acted on; it also had the adult feeding interval at every 2 to 4
    // weeks against the feeding guide's 10 to 14 days, juveniles at 7 to 10 days
    // against 5 to 7, and an annual cost table every line of which disagreed
    // with the cost guide.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "New York City's blanket Boidae ban catches it regardless of size, Colorado's 2026 rewrite limited its Boidae exemption to tropical species and dropped the rosy boa out of it, New Jersey's exemption is written for a different genus, and Hawaii bans every snake outright.", source: "rosy-boa-legal-guide" },
        { label: "Enclosure size", value: "Adults, which typically reach 24 to 36 inches, are commonly kept in a 20 to 30 gallon enclosure, and a roomier 36x18x18 inch setup is the higher-end recommendation.", source: "rosy-boa-tank-setup-guide" },
        { label: "Temperature", value: "A basking surface temperature of 90°F, with a cool side around 65 to 75°F.", source: "rosy-boa-tank-setup-guide" },
        { label: "Humidity", value: "Well under 60 percent, with a baseline closer to 30 to 40 percent for most of the year. Bump that to roughly 40 to 50 percent only during the shed cycle, using a humid hide, then let it drop back down.", source: "rosy-boa-tank-setup-guide" },
        { label: "Hides", value: "This is a ground-dwelling, secretive species that spends much of its time tucked into rock crevices, so a snug hide matters more here than raw floor space. House rosy boas individually, never together.", source: "rosy-boa-tank-setup-guide" },
        { label: "Diet and prey size", value: "Whole, frozen-thawed mice, pinkies or fuzzies for young snakes, progressing to small or medium adult mice as they grow. Roughly 1 to 1.5 times the width of your snake's body at its thickest point.", source: "rosy-boa-feeding-guide" },
        { label: "Feeding frequency", value: "Young rosy boas do well eating every 5 to 7 days. Adults need far less, every 10 to 14 days is a commonly recommended baseline, and many keepers stretch mature, well-established adults to every 3 to 4 weeks, particularly outside the warmer months.", source: "rosy-boa-feeding-guide" },
        { label: "Handling", value: "Support the body at multiple points along its length using both hands, never gripping near the head or tail alone. Wait at least 48 hours after feeding before handling, disturbing digestion risks regurgitation, and skip handling during the shed cycle, when cloudy eyes mean temporarily impaired vision.", source: "rosy-boa-handling-guide" },
        { label: "The humidity reversal", value: "This species evolved in dry Southwestern desert and chaparral, and excess ambient moisture is the primary trigger for respiratory infection here.", source: "rosy-boa-health-issues-guide" },
        { label: "Budget, the snake", value: "A normal, standard-colored rosy boa typically runs $150 to $200.", source: "rosy-boa-cost-guide" },
        { label: "Budget, the setup", value: "Roughly $150 to $250.", source: "rosy-boa-cost-guide" },
        { label: "Running costs", value: "Roughly $6 to $11 a month for consumables: two or three frozen mice at under $1 each, aspen changed every three to six months, and $1 to $2 of electricity for a small heat mat.", source: "rosy-boa-cost-guide" },
        { label: "Vet set-aside", value: "A published exotic price list puts an established-client wellness exam at $78 and a new-client exam at $128, and $100 to $200 a year is a reasonable set-aside.", source: "rosy-boa-cost-guide" },
        { label: "Lifespan", value: "20 to 30 years is typical in captivity, documented individuals have lived past 30, and the captive average sits nearer 18 to 22.", source: "rosy-boa-cost-guide" },
        { label: "Adult size", value: "24 to 36 inches (60 to 90 cm), rarely over 4 feet (122 cm)." },
        { label: "Quarantine", value: "Quarantine periods of 3 to 6 months are recommended for a new reptile, and a different room is the reptile-room version of a different building.", source: "reptile-quarantine-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture.", source: "reptile-heating-thermostats-guide" },
        { label: "Hygiene", value: "Children younger than 5 should not handle or touch reptiles or amphibians or their environments at all.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "rosy-boa-health-issues-guide",
      callNow: [
        "Any wheezing, open-mouth breathing, or nasal discharge, this one is urgent",
        "Belly scale discoloration that's spreading",
        "A shed that comes off in pieces rather than one clean piece, especially with retained eye caps",
        "Noticeable weight gain or loss without a change in feeding",
        "Any loss of appetite lasting well beyond this species' normal slow feeding rhythm",
      ],
      vetLine: "Correcting the humidity alone isn't enough once a respiratory infection has set in, though it's essential to prevent a recurrence. For scale rot, see a vet and correct the substrate and humidity alongside treatment, not instead of it.",
    },
    routes: [
      { slug: "rosy-boa-cost-guide", line: "$150 to $400 for the snake, roughly $150 to $250 for the setup, $6 to $11 a month, and the vet set-aside that outweighs all of it." },
      { slug: "rosy-boa-tank-setup-guide", line: "A modest enclosure, a 90°F basking surface, and the low humidity that runs opposite to every other pet boa." },
      { slug: "rosy-boa-feeding-guide", line: "Frozen-thawed mice, prey sized to body width, an adult interval longer than most keepers expect, and why overfeeding is the real risk." },
      { slug: "rosy-boa-handling-guide", line: "One of the calmest snakes you can own, the 48-hour post-feeding wait, and the balling response it rarely bothers to use." },
      { slug: "rosy-boa-health-issues-guide", line: "Respiratory infection, scale rot, retained shed, rostral abrasion, and obesity, with humidity behind most of the list." },
      { slug: "rosy-boa-enrichment-guide", line: "Floor space first, deep dry substrate second, and why the standard 20 gallon long was never actually tested." },
      { slug: "rosy-boa-legal-guide", line: "Where the family-wide Boidae exemptions catch this snake and where they drop it, state by state." },
    ],
    buyList: [
      "20 to 30 gallon enclosure for an adult, or 36x18x18 inches for a roomier setup",
      "10 to 15 gallon terrarium for a juvenile",
      "A smooth, well-fitted lid, not a coarse screen",
      "Under-tank heater with a thermostat",
      "Digital thermometer and hygrometer",
      "Dry aspen shavings, deep enough to hold a tunnel",
      "Two snug crevice hides, one at each end of the gradient",
      "Damp sphagnum moss hide, for the shed cycle only",
      "Water dish",
      "Feeding tongs",
      "Frozen small mice",
    ],
    faqs: [
      { q: "How humid should a rosy boa enclosure be?", a: "Well under 60 percent, with a baseline closer to 30 to 40 percent for most of the year. Bump that to roughly 40 to 50 percent only during the shed cycle, using a humid hide, then let it drop back down. This species tolerates brief humidity spikes, like a splash from the water dish, as long as the enclosure is allowed to dry back out, the goal is a dry baseline, not zero humidity at all times." },
      { q: "How often should I feed my rosy boa?", a: "Young rosy boas do well eating every 5 to 7 days. Adults need far less, every 10 to 14 days is a commonly recommended baseline, and many keepers stretch mature, well-established adults to every 3 to 4 weeks, particularly outside the warmer months. When in doubt, less frequent is safer than more for this species." },
      { q: "What causes respiratory infection in rosy boas?", a: "Almost always humidity running too high, the reverse of the usual snake-care warning. Watch for audible or open-mouth breathing, mucus around the nostrils, wheezing or popping sounds, and lethargy. This needs veterinary care and antibiotics, correcting the humidity alone isn't enough once an infection has set in, though it's essential to prevent a recurrence." },
    ],
  },
];
