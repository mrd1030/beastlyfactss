export const lizardGuides = [
  {
    id: "ackie-monitor",
    name: "Ackie Monitor",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/ackie-monitor.jpg",
    tagline: "The miniature Komodo dragon with a huge personality!",
    funFact: "Ackie monitors 'taste' the air constantly with their forked tongues, using their Jacobson's organ to detect prey scent, just like their giant Komodo cousins!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "6x3x3 ft+ enclosure", low: 300, high: 600 },
        { item: "Deep substrate (12 in+ sandy soil mix)", low: 80, high: 150 },
        { item: "High-wattage basking bulb + fixture", low: 30, high: 60 },
        { item: "Quality thermostat", low: 40, high: 70 },
        { item: "Strong desert UVB (T5 HO Arcadia Dragon 12%)", low: 70, high: 110 },
        { item: "Infrared thermometer gun", low: 25, high: 40 },
        { item: "Cork bark and rock structures", low: 40, high: 80 },
        { item: "Water dish", low: 10, high: 20 },
      ],
      annual: [
        { item: "Large insect variety", low: 200, high: 350 },
        { item: "Calcium and multivitamin supplements", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (high-wattage basking)", low: 100, high: 180 },
        { item: "Annual vet wellness check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `A 6x3x3 ft enclosure is the minimum for a pair of ackie monitors - and ackies do well and often prefer living in bonded pairs or trios when raised together. Single animals can be kept in slightly smaller spaces but will benefit from the larger footprint for activity and thermal gradient establishment.

The deep substrate is the defining feature of an ackie monitor setup. A minimum of 12 inches of a sandy soil mixture (60% organic topsoil, 40% playsand is a common ratio) must be provided. Ackies are native to the arid rocky outcrops of western and central Australia and spend large portions of their time burrowing to thermoregulate. Burrowing is not optional behavior - it is essential for health and wellbeing.

The basking spot temperature is the most critical parameter: 120 to 150 degrees F at the surface directly under the basking light. This sounds extreme because it is - ackie monitors require these temperatures to fully thermoregulate, activate their immune system, and digest prey efficiently. Without adequate basking temperatures, even an otherwise well-kept ackie will show chronic health problems, poor growth, and reduced lifespan. Use high-wattage halogen or flood bulbs and verify surface temperatures with an infrared temperature gun.

Strong desert UVB (T5 HO Arcadia Dragon 12% or equivalent) on a 10 to 12 hour cycle is mandatory. The cool side of the enclosure should be 80 to 85 degrees F ambient. Humidity in the burrow area (achieved by allowing one section of the substrate to stay slightly more moist than the rest) should be 40 to 60%.`,
      diet: `Ackie monitors are primarily insectivorous in the wild, and their captive diet should reflect this. Large dubia roaches, crickets, superworms, hornworms, and silkworms form the core of a balanced diet. Gut-load all insects 24 to 48 hours before feeding - the nutritional quality of a gut-loaded insect versus an empty one is dramatically different.

Adult ackies can be offered occasional pinky or fuzzy mice as a protein supplement - not as a staple. Whole prey items offer nutritional completeness when used judiciously. Eggs (quail or scrambled chicken eggs) are another excellent nutritional supplement offered occasionally.

Feed juveniles daily with as many insects as they will actively pursue and eat. Adults eat 3 to 5 times per week. Reduce feeding frequency if the animal is becoming visibly obese (fat deposits around the neck, limbs, and tail base). Dust prey with calcium w/D3 and a reptile multivitamin on a consistent schedule.

Fresh water in a shallow dish must always be available. Many ackies will soak in their water dish, which supports hydration and shedding. Replace the water daily.`,
      enrichment: `The deep substrate is the most important enrichment - ackies spend significant time excavating burrow systems that can extend 12 to 24 inches underground. Providing adequate substrate depth allows this natural behavior. Watching an ackie monitor engineer a complex burrow system is one of the most impressive behaviors in the reptile hobby.

Add rock structures (securely stacked so they cannot topple and crush the monitor), cork bark pieces at the surface for additional hiding and temperature regulation spots, and branches for climbing. Ackies are more terrestrial than truly arboreal but will use low branches and rock edges frequently.

Foraging enrichment dramatically improves quality of life for intelligent monitor lizards. Hide insects in the substrate, under rocks, and inside cork bark. Vary feeding locations. Offer live insects that require pursuit. Ackies in enriched environments with foraging opportunities show dramatically more natural, active behavior than those fed in predictable ways.

Young ackies can be fast and defensive and may bite. Consistent, patient handling from a young age produces remarkably tame animals. Adults often become confident and genuinely interactive, approaching their keepers and exploring hands voluntarily.`,
      health: `Inadequate basking temperature is the most common and most serious husbandry failure in ackie monitors. An ackie that cannot reach 130 to 150 degrees F at the basking surface cannot fully activate its immune system, cannot adequately digest food, and cannot thermoregulate its core body temperature. This leads to chronic immune suppression, poor growth, repeated infections, and a significantly shortened lifespan. Invest in high-quality, high-wattage bulbs and verify temperatures regularly.

Metabolic Bone Disease (MBD) from inadequate UVB or calcium supplementation presents as weak, trembling limbs, rubber jaw, difficulty climbing, and lethargy. Strong UVB and consistent supplementation prevent it.

Parasites - particularly pentastomids (tongue worms) in wild-caught animals - are a significant concern. Source captive-bred animals from reputable breeders whenever possible. Wild-caught ackies frequently carry heavy parasite loads that require veterinary treatment. Annual fecal exams are recommended for all monitors.

Respiratory infections and scale rot can occur if humidity and temperatures are incorrect. Always have a reptile veterinarian with monitor experience identified before acquiring an ackie. These are rewarding but high-maintenance animals that deserve expert veterinary care.`,
      checklist: ["6x3x3 ft+ enclosure", "Deep substrate (12 inch+ sandy soil mix)", "High-wattage basking bulb (120 to 150 degrees F surface)", "Quality thermostat", "Strong desert UVB (T5 HO Arcadia Dragon 12%)", "Digital thermometer (IR gun recommended)", "Calcium w/D3 + multivitamin", "Large insect variety", "Cork bark and rock structures", "Water dish + humid microhabitat area"],
    },
    faqs: [
      { q: "How hot does an ackie monitor's basking spot need to be?", a: "120 to 150 degrees F at the basking surface, measured with an infrared temperature gun. This is the most critical parameter in ackie monitor care and the most commonly failed. Without adequate basking temperatures, ackies cannot fully thermoregulate, digest food, or activate their immune systems - leading to chronic health problems. High-wattage halogen or flood bulbs achieve these temperatures effectively." },
      { q: "Can ackie monitors be kept in pairs or groups?", a: "Yes - ackies often do well and sometimes prefer living in bonded pairs or trios when raised together from a young age. Cohab success depends on having adequate space (6x3x3 ft minimum for a pair), multiple basking sites, and deep substrate for individual burrowing. Monitor for aggression and be prepared to separate if conflict arises." },
      { q: "What do ackie monitors eat?", a: "Primarily insects in captivity: large dubia roaches, crickets, superworms, hornworms, and silkworms are the staples. Adults can have occasional pinky or fuzzy mice as a protein supplement and quail or scrambled eggs periodically. Gut-load all insects 24 to 48 hours before feeding. Feed juveniles daily, adults 3 to 5 times per week." },
      { q: "How big do ackie monitors get?", a: "Adults typically reach 24 to 28 inches total length - significantly smaller than most other monitor species, which is one reason ackies are popular. They are powerfully built for their size, with strong legs, sharp claws, and an active, energetic temperament. Their manageable size combined with their big personality makes them the most popular dwarf monitor in the hobby." },
      { q: "Are ackie monitors good pets?", a: "Yes, for experienced keepers ready for their specific requirements. Ackies are intelligent, active, and become remarkably tame with patient, consistent handling from a young age - many seek out their keepers and explore hands and arms voluntarily. The key commitments are the extreme basking temperatures (verified with an IR gun), deep burrowing substrate, and a diverse insect-heavy diet." },
      { q: "What's the difference between a red and yellow ackie monitor?", a: "They're two recognized subspecies from different parts of Australia, not just a color variant of the same animal. The Red Ackie (Varanus acanthurus acanthurus) shows deeper reddish-orange base coloring, while the Yellow Ackie (Varanus acanthurus brachyurus) runs more yellow-tan and tends to stay slightly smaller. Care requirements are identical between the two - the difference is purely cosmetic and geographic, not a husbandry consideration." },
    ],
  },
  {
    id: "tegu",
    name: "Argentine Black and White Tegu",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/tegu.jpg",
    tagline: "The dog-like mega-lizard that can learn its own name!",
    funFact: "Tegus are one of the only reptiles known to have near-endothermic (warm-blooded) properties. During breeding season, their body temperature rises above ambient temperatures!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Adult housing is often custom-built; setup range reflects that.
    costs: {
      setup: [
        { item: "8x4x4 ft+ custom enclosure or room", low: 500, high: 1200 },
        { item: "High-wattage basking setup", low: 40, high: 70 },
        { item: "Strong desert UVB (T5 HO 12%+)", low: 80, high: 120 },
        { item: "Substrate (4-6 in soil/sand mix)", low: 60, high: 120 },
        { item: "Large water tub for soaking", low: 30, high: 60 },
        { item: "Quality thermostat", low: 40, high: 70 },
      ],
      annual: [
        { item: "Whole prey and varied diet (rats, eggs, protein)", low: 250, high: 450 },
        { item: "Calcium and multivitamin supplements", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 80, high: 120 },
        { item: "Electricity (high-wattage basking)", low: 120, high: 220 },
        { item: "Annual vet wellness check", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `Argentine black and white tegus are among the largest lizards kept as pets and require enclosures that reflect their impressive size. Adults typically reach 3.5 to 4.5 ft for males and 2.5 to 3.5 ft for females, with some males exceeding 5 ft. The minimum enclosure for an adult is 8x4x4 ft, and many dedicated keepers build entire rooms for their tegus - a converted bedroom or large wooden enclosure the size of a garden shed.

A very hot basking spot of 100 to 110 degrees F or higher is required at the surface. Tegus are from the subtropical and tropical regions of South America and require intense heat for digestion and immune function. The ambient warm side should be 85 to 90 degrees F and the cool side 75 to 80 degrees F. Strong desert UVB (T5 HO Arcadia Dragon 12%) is mandatory.

Substrate of 4 to 6 inches minimum is needed for natural burrowing behavior. A 50/50 mix of organic topsoil and play sand works well, as does a commercial reptile bedding mix. Tegus burrow extensively and need substrate they can actually dig into.

Brumation - a winter dormancy period lasting several months - is a natural and necessary part of tegu biology. Beginning in autumn, tegus slow down, stop eating, and eventually become largely inactive. Provide a cool (55 to 65 degrees F), dark brumation space, or allow them to burrow in their enclosure. Do not try to prevent or interrupt brumation; forced wakefulness causes significant health problems.`,
      diet: `Argentine tegus are true omnivores with a wide-ranging diet that changes with age. Juveniles and young adults eat primarily animal protein: whole prey items like appropriately sized rats and chicks, organ meats (heart, liver), lean ground turkey, and eggs. As tegus mature, plant matter becomes an increasingly important part of the diet - mature adults may be 40 to 60% plant-based in the warmer months.

Whole prey items are ideal for the protein component: rats (frozen/thawed), quail eggs, raw whole chicken or turkey pieces, and shrimp provide nutritional variety. Eggs - especially raw scrambled or hard-boiled - are an excellent regular protein source. Avoid exclusively feeding one prey type.

Plant matter includes dark leafy greens (collard, mustard, dandelion greens), squash, berries (in moderation), and seasonal fruits as treats. Do not over-supplement with fruit, which is high in sugar. Supplement all food with calcium w/D3 and a reptile multivitamin on a regular schedule.

Never feed dog or cat food as a staple - the preservatives, artificial additives, and non-nutritional fillers are inappropriate for tegus despite the protein content. Fresh water must always be available in a large tub they can soak in.`,
      enrichment: `Argentine tegus are often described as the most dog-like of all reptiles - and this is not hyperbole. Well-socialized adult tegus recognize their names, come when called, follow their keepers around the house, seek out physical contact, and form genuine bonds over time. They are some of the most cognitively sophisticated reptiles accessible to hobbyists.

Provide supervised free-roaming time daily in a tegu-proofed area. Tegus explore confidently, investigate novel objects with their tongues, and interact with household pets (under supervision) and family members. Puzzle feeders, hiding food in different locations, introducing novel safe objects, and training sessions - where the tegu learns to touch a target stick for food rewards - are all excellent enrichment.

Handling from a young age produces the most socialized adults. Juvenile tegus can be fast and defensive. Consistent calm handling sessions, even short ones, over weeks and months produce remarkable results. Adult tegus that have been consistently handled are generally very calm large animals.

Brumation period enrichment means preparing an appropriate cool, dark space and respecting the natural dormancy. Do not disturb a brumating tegu unnecessarily. Check on the animal briefly every 1 to 2 weeks to confirm it is alive and healthy, and offer water occasionally, but do not force feeding or activity.`,
      health: `Inadequate enclosure size is the most common welfare problem in tegus. A tegu kept in a small enclosure cannot properly thermoregulate, cannot exercise, and cannot express natural behavior - this leads to physical and psychological deterioration. If you cannot provide an 8x4x4 ft or larger adult setup, a tegu is not the right animal for your situation.

Metabolic Bone Disease from inadequate UVB or calcium is less common in tegus than in some other species when husbandry is correct, but still possible. Strong UVB and consistent supplementation prevent it.

Parasites - particularly internal parasites - are common in tegus, especially those sourced from unknown backgrounds or import chains. Annual fecal exams with a reptile vet are recommended. Tegus sourced from reputable captive breeders typically have fewer parasite issues.

These are powerful animals. A tame adult tegu can still cause injury unintentionally - their claws and tail are strong. Approach with confidence, never fear, and never force interactions. A veterinarian with large lizard experience is an essential part of responsible tegu ownership. Annual wellness checks are strongly recommended for all adult tegus.`,
      checklist: ["8x4x4 ft+ custom enclosure or room", "Very hot basking spot (100 to 110 degrees F+)", "Strong desert UVB (T5 HO 12%+)", "4 to 6 inch substrate (soil/sand mix)", "Large water tub for soaking", "Quality thermostat", "Whole prey and varied diet", "Calcium and multivitamin", "Enrichment objects and puzzle feeders", "Brumation space (cool, dark area)"],
    },
    faqs: [
      { q: "Are tegus really like dogs?", a: "In many meaningful ways, yes. Well-socialized tegus recognize and respond to their names, come when called, follow their keepers around, seek physical contact, and form genuine bonds that deepen over years. They are widely regarded as the most dog-like reptile accessible to hobbyists. This intelligence also means they require enrichment, space, and interaction to thrive." },
      { q: "What is brumation and do tegus need it?", a: "Brumation is a natural winter dormancy period lasting 3 to 5 months, typically beginning in autumn. Tegus slow dramatically, stop eating, and become largely inactive. This is normal and essential biology - do not attempt to prevent or interrupt it. Provide a cool (55 to 65 degrees F), dark space for brumation. Forced wakefulness during this period causes significant stress and health problems." },
      { q: "How big do tegus get?", a: "Argentine black and white tegu males typically reach 3.5 to 4.5 feet, with some exceeding 5 feet. Females are 2.5 to 3.5 feet. They are powerfully muscled animals - an adult male tegu is a substantial animal requiring an 8x4x4 ft minimum enclosure, and many experienced keepers convert entire rooms to accommodate them properly." },
      { q: "What do tegus eat?", a: "True omnivores with age-dependent ratios. Juveniles eat primarily animal protein: whole prey (rats, quail, chicks), organ meats, raw eggs, and lean ground turkey. As they mature, plant matter becomes increasingly important - adults may be 40 to 60% plant-based during the warmer months. Eggs are an excellent regular protein source at any age. Avoid dog or cat food as a staple." },
      { q: "How long do tegus live?", a: "15 to 20 years with appropriate care, proper diet, adequate housing, and annual wellness veterinary checks. A tegu is a multi-decade commitment. Their cognitive sophistication and social bonding make them deeply rewarding animals - but only for keepers who can genuinely provide the space, time, and resources their long lives require." },
      { q: "Is a tegu a monitor lizard?", a: "No, despite the frequent comparison. Tegus (family Teiidae) are New World lizards from South and Central America, while monitor lizards, like the [Ackie monitor](/guides/ackie-monitor/) and [Savannah monitor](/guides/savannah-monitor/), belong to a completely separate Old World family (Varanidae). They end up compared constantly because both are large, intelligent, dog-like lizards popular with the same keepers, not because they're closely related." },
      { q: "Are tegus dangerous, aggressive, or venomous?", a: "Not venomous, no venom gland or delivery system has ever been documented in tegus. \"Aggressive\" is more a socialization story than a species trait: wild-caught or undersocialized tegus can be genuinely defensive, but consistently handled captive-bred tegus are widely considered among the calmest large lizards kept as pets. [We go through the research behind this in full](/blog/argentine-tegus-are-not-venomous/), including why they read as unusually alert for a reptile." },
    ],
  },
  {
    id: "bearded-dragon",
    name: "Bearded Dragon",
    emoji: "🦎",
    difficulty: "Beginner/Intermediate",
    petType: "Lizards",
    image: "/assets/guides/bearded-dragon.jpg",
    tagline: "The chill, cuddly lizard that changes color with its mood!",
    funFact: "Bearded dragons wave at each other as a sign of submission, basically saying 'Hey, you're the boss!'",
    relatedStory: {
      slug: "chronicles-of-dex-the-bearded-dragon-the-sun-the-glass-and-the-cricket-that-got-away",
      title: "Chronicles of Dex: The Sun, the Glass, and the Cricket That Got Away",
    },
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Lifespan is the exception: it comes
    // from the encyclopedia entry, which no deep dive repeats. Day one,
    // shedding, hygiene, and power outage cite the shared reptile guides in
    // the sidebar's Health and More list, which the set test reported as
    // gaps because the reader never opened them. Reconciled
    // 2026-09-08 after the bearded dragon set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new dragon is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "4x2x2 ft, about 120 gallons, and that is the adult minimum, not an upgrade for later.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Basking surface", value: "95 to 110°F for adults, 105 to 115°F for juveniles, measured with an infrared thermometer aimed at the surface itself.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Rest of the gradient", value: "Warm side air about 90°F, cool side 75 to 85°F, nights 65 to 75°F. Heat overnight only if the room falls below 65°F, with a ceramic heat emitter.", source: "bearded-dragon-tank-setup-guide" },
        { label: "UVB", value: "A linear T5 HO tube over about two-thirds of the enclosure, 12 to 18 inches from the basking surface, never behind glass. 10 to 14 hours a day, replaced every 6 to 12 months.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Humidity", value: "30 to 40%.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Floor", value: "Paper towel, newspaper, or tile. No loose sand, calcium sand included.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Diet ratio", value: "Juveniles roughly 80% insects and 20% greens. Adults flip to about 80% greens.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Feeding schedule", value: "Hatchlings 2 to 3 times daily, 1 to 4 months twice daily, juveniles once daily, adults once daily or every other day with greens daily and insects a few times a week.", source: "bearded-dragon-feeding-guide" },
        { label: "Calcium", value: "Gut-load the feeders, then dust with plain calcium: near-daily for juveniles, 2 to 3 times a week for adults, calcium with D3 a couple of times a week, a multivitamin once or twice a week.", source: "bearded-dragon-feeding-guide" },
        { label: "Handling", value: "Wait 7 to 14 days before the first session. Scoop from below with all four feet supported. A black beard means the session is over.", source: "bearded-dragon-handling-guide" },
        { label: "Vet", value: "An annual fecal exam with a sample less than 24 hours old, and a vet check before brumation season.", source: "bearded-dragon-health-issues-guide" },
        { label: "Budget", value: "$400 to $800 to set up, $50 to $108 a month, and an emergency fund of a few hundred dollars.", source: "bearded-dragon-cost-guide" },
        { label: "Adult size", value: "16 to 24 inches nose to tail tip, most adults 18 to 22.", source: "bearded-dragon-growth-weight-checks-guide" },
        { label: "Lifespan", value: "10 to 15 years in captivity." },
        { label: "Shedding", value: "Raise humidity toward the high end during the shed, give rough surfaces to rub on, and never pull loose skin. A 30-minute chin-deep soak at cage temperature loosens retained shed.", source: "reptile-shedding-complete-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the dragon out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "65°F is the normal night low. Below 60°F for more than a day or two, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "bearded-dragon-health-issues-guide",
      callNow: [
        "Tremors or muscle twitching",
        "Swelling in the jaw or limbs",
        "A juvenile refusing food for 2 to 3 days",
        "An adult refusing food for 1 to 2 weeks outside brumation, or any refusal with lethargy, abnormal stool, or a swollen abdomen",
        "No stool for five or more days",
        "A beard that stays dark for extended periods",
        "Difficulty moving or climbing",
        "Labored or open-mouth breathing",
        "Diarrhea, or stool that's runny or foul-smelling for more than 2 days",
        "Stargazing: the head held tilted up and back",
        "Any skin lesions or discoloration",
        "Swollen or bleeding gums, or cheesy material in the mouth",
        "A toe or the tail tip turning dark, dry, or hard",
        "Eyes swollen or closed for more than 2 days",
        "Blistered, blackened, or peeling skin",
        "Tissue protruding from the vent",
      ],
      vetLine: "A reptile vet, not a general clinic. Never dose an over-the-counter dewormer blind: get a fecal exam and treat what it finds.",
    },
    routes: [
      { slug: "bearded-dragon-cost-guide", line: "$40 to $100 for the dragon, $400 to $800 for the setup around it, and the surgery bill correct husbandry prevents." },
      { slug: "bearded-dragon-shopping-list", line: "Every item in the cart with a price range and the reason it is there." },
      { slug: "bearded-dragon-tank-setup-guide", line: "The full temperature table, UVB distance and replacement, humidity, and the substrate that will not impact." },
      { slug: "bearded-dragon-feeding-guide", line: "Schedule by age, the insect-to-greens flip, gut-loading and dusting, and eight reasons a dragon stops eating." },
      { slug: "bearded-dragon-safe-foods-guide", line: "Staple greens, occasional foods, the daily salad, and the never-feed list." },
      { slug: "bearded-dragon-handling-guide", line: "Wait 7 to 14 days, scoop from below, and the signals that end a session." },
      { slug: "bearded-dragon-health-issues-guide", line: "Metabolic bone disease, impaction, parasites, yellow fungus, atadenovirus, and the list that means the vet today." },
      { slug: "bearded-dragon-brumation-guide", line: "How to tell brumation from illness, the pre-brumation vet check, and what a normal three months looks like." },
      { slug: "bearded-dragon-growth-weight-checks-guide", line: "Weekly weigh-ins, the growth reference by age, and the 10 percent drop that means a vet." },
      { slug: "bearded-dragon-eggs-and-egg-binding-guide", line: "Females lay without a male: the lay box, the digging window, and when it has become egg binding." },
      { slug: "bearded-dragon-enrichment-guide", line: "Climbing, the dig box, foraging, supervised free-roam, and the priority order." },
    ],
    buyList: [
      "4x2x2 ft PVC enclosure",
      "Linear T5 HO UVB kit (Arcadia 14% Dragon or ReptiSun 10.0)",
      "75W basking bulb and a ceramic dome fixture",
      "Dimming thermostat",
      "Digital thermometer and hygrometer for the cool side",
      "Infrared temp gun for the basking surface",
      "Paper towel or tile for the floor",
      "Cork bark hide for the cool end, and a basking platform",
      "Hammock",
      "Dubia roaches or crickets, and feeding tongs",
      "Plain calcium, calcium with D3, and a multivitamin",
      "Shallow water dish",
    ],
    faqs: [
      { q: "How hot does the basking spot need to be?", a: "95 to 110°F on the basking surface for adults, and 105 to 115°F for juveniles, measured with an infrared thermometer aimed at the actual surface rather than the air. That heat comes from a separate basking bulb, not the UVB tube, which supplies UV but little usable heat on its own." },
      { q: "Why has my bearded dragon stopped eating?", a: "Often it's brumation, a shed, or, in females, a gravid cycle before laying, all normal. It becomes a concern when the enclosure's temperature isn't letting the dragon digest, or when refusal comes with lethargy, abnormal stool, or a swollen abdomen." },
      { q: "What is the most common health problem in pet bearded dragons?", a: "Metabolic bone disease. It comes from too little calcium, inadequate or incorrect UVB, or a diet too high in phosphorus relative to calcium, and juveniles under two years old are hit hardest. Almost every case is preventable with correct lighting and supplementation." },
    ],
  },
  {
    id: "blue-tongue-skink",
    name: "Blue Tongue Skink",
    emoji: "🦎",
    difficulty: "Beginner/Intermediate",
    petType: "Lizards",
    image: "/assets/guides/blue-tongue-skink.jpg",
    tagline: "The chunky, blue-tongued charmer who loves a good meal!",
    funFact: "Blue tongue skinks give live birth instead of laying eggs, and they are one of the largest skink species kept as pets.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size is the exception: it comes
    // from the encyclopedia entry, which no deep dive repeats. Northern and
    // Indonesian animals are two different husbandry problems under one name,
    // so every row the tank setup guide splits by subspecies stays split here
    // rather than being flattened into one range. Day one, shedding, hygiene,
    // and power outage cite the shared reptile guides in the sidebar's Health
    // and More list, which the set tests keep reporting as gaps because the
    // reader never opens them. Reconciled 2026-09-09 after the blue tongue
    // skink set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Which skink is it", value: "Most Indonesian skinks sold in the US pet trade are wild-caught, and wild-caught animals commonly carry parasite loads picked up before import. Northern skinks are almost universally captive-bred. Knowing which one you have changes almost everything below.", source: "blue-tongue-skink-health-issues-guide" },
        { label: "Enclosure", value: "Adult minimum is 4x2x2 feet, roughly 8 square feet of floor space, for either type. Bigger is always better. Front-opening PVC enclosures are preferred over glass since they hold humidity more effectively, which matters more for Indonesian skinks specifically.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Basking surface", value: "Northern basking surface: 105 to 115°F. Indonesian basking surface: slightly cooler, 100 to 105°F.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Rest of the gradient", value: "Cool side (both): 70 to 80°F. Nighttime: stays above roughly 70°F for both types. A heat source (halogen or a deep heat projector) is required, mounted with a basking dome fixture and run on a thermostat, which is what holds the surface inside those ranges instead of letting an unregulated bulb climb past them and burn the animal.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Humidity", value: "Northerns need relatively low humidity, around 40%. Indonesians need considerably more, 60 to 80%. Achieve the higher Indonesian range through moisture-retentive substrate, regular misting, and a larger water bowl.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Floor", value: "A naturalistic soil mix works for both, roughly 60% topsoil to 40% play sand for Northerns, with Indonesian setups benefiting from added moisture-retentive elements, leaf litter, sphagnum moss, or a coco-fiber-based product. Keep it 4 to 6 inches deep.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb anywhere from 5 to 12% output, picked against how high above the basking area it will hang, spanning at least half the enclosure on the warm side, replaced every 12 months regardless of whether it still visibly lights up. Keep the skink no closer than about 10 inches from the bulb.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Photoperiod", value: "Run a photoperiod of roughly 11 to 13 hours depending on season for either type.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Diet ratio", value: "Young skinks, under about 12 months and by some guidance up to 24, need a protein-heavy diet, roughly 70 to 80% animal matter. Mature adults shift toward plant-heavy, roughly 40 to 60% animal protein and 45 to 60% leafy greens and vegetables, with about 5 to 10% fruit as treats.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Feeding schedule", value: "Babies, hatching to 3 to 5 months, are fed daily, sometimes 2 to 3 times a day, plus one designated fasting day a week. Juveniles, roughly 3 to 10 months, 3 to 4 times a week. Subadults and adults eat every 1 to 3 days on veterinary guidance; leaner schedules of once or twice a week circulate widely, and the veterinary interval is the one to follow.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Portion", value: "One meal roughly the size of the skink's own skull, or about 1 to 2 tablespoons for an adult, is the commonly cited portion.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Supplements", value: "Dust feeder insects with calcium, low or no phosphorus, frequency ranges from every feeding to a few times a week depending on the product and source. A separate multivitamin is used more sparingly, once or twice a week to once or twice a month.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Weight checks", value: "Sources converge in the 7 to 10% body-weight-loss range as an urgent threshold, weighing weekly on a gram-accurate scale and keeping a log is the standard way to catch a slow decline before it becomes obvious.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Handling", value: "Leave a new skink alone for 2 to 3 weeks before attempting to handle it, giving it time to settle into its enclosure and start eating normally. Build trust gradually through food-based interaction, and let handling follow from there.", source: "blue-tongue-skink-handling-guide" },
        { label: "Session length", value: "Start at 5 minutes a day, adding a minute each time the skink sits still, until it holds still for at least 15 minutes. Start a juvenile or a new wild-caught Indonesian at the 5-minute end. A settled captive-bred Northern can run to the full 15 minutes.", source: "blue-tongue-skink-handling-guide" },
        { label: "Picking one up", value: "Come in from the side, where it can see you. Slide a hand under the body and support the whole animal along your forearm, tail included. Never lift or hold one by the tail. Wash your hands first, so they do not smell like a food item.", source: "blue-tongue-skink-handling-guide" },
        { label: "Reading the animal", value: "Short snorts or huffs mean annoyance, tail flicking or wagging means irritation, and long huffs or hisses with the body tilted and puffed up mean the skink has moved on to aggression. What to do is the same at every step: stop, take your hands out, and end the session there.", source: "blue-tongue-skink-handling-guide" },
        { label: "Enrichment", value: "Scatter food across the substrate. Hide portions under cork and leaf litter. Vary where the food appears from day to day, so the search stays a search. Blue tongues are terrestrial and cover ground, so footprint beats height every time.", source: "blue-tongue-skink-enrichment-guide" },
        { label: "The skink", value: "Northern (Australian) blue-tongued skinks typically run $150 for babies up to $250 for adults, with high-color or rare morphs reaching $400 to $700. Indonesian skinks are noticeably cheaper, generally $100 to $250.", source: "blue-tongue-skink-cost-guide" },
        { label: "Budget", value: "Roughly $330 to $635 to set up, and total initial investment with the animal commonly lands between $430 and $1,335. Ongoing, roughly $490 to $830 a year, or about $41 to $69 a month once averaged out.", source: "blue-tongue-skink-cost-guide" },
        { label: "Vet", value: "A routine exam runs roughly $100 to $150, with annual checkups recommended for any skink. Wild-caught Indonesian skinks frequently need a fecal exam and deworming treatment right after purchase, an added cost that Northern buyers usually skip entirely.", source: "blue-tongue-skink-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years is the commonly cited average, with well-documented cases living past 30.", source: "blue-tongue-skink-cost-guide" },
        { label: "Adult size", value: "17-24 inches (43-60 cm)." },
        { label: "Shedding", value: "Raise humidity toward the high end during the shed, give rough surfaces to rub on, and never pull loose skin. A 30-minute chin-deep soak at cage temperature loosens retained shed.", source: "reptile-shedding-complete-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, keep reptiles out of the kitchen entirely, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "The normal night low stays above about 70°F. Act below 70°F: add heat, move the animal, or call ahead to a sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "blue-tongue-skink-health-issues-guide",
      callNow: [
        "A soft or rubbery jaw",
        "A kinked spine",
        "Tremors",
        "Difficulty walking",
        "A wild-caught or unspecified-origin skink that has not had a fecal exam and deworming",
        "Nasal or oral discharge",
        "Bubbling",
        "Open-mouth breathing",
        "Wheezing",
        "Retained shed on the toes or tail that has progressed to infection",
        "Scale rot on the belly that has progressed to infection",
      ],
      vetLine: "Metabolic bone disease is a vet situation always, and advanced cases are irreversible. Early respiratory cases often resolve once temperature and humidity are corrected, advanced cases need a vet and antibiotics. Always see a vet for a fecal exam and appropriate deworming, fenbendazole for roundworms and pinworms, praziquantel for tapeworms and flukes, if you've acquired a wild-caught or unspecified-origin skink.",
    },
    routes: [
      { slug: "blue-tongue-skink-cost-guide", line: "What the animal costs, why a Northern costs more than an Indonesian, the setup table, the annual running total, and vet costs." },
      { slug: "blue-tongue-skink-tank-setup-guide", line: "The 4x2x2 ft minimum, and the temperature and humidity split that makes a Northern and an Indonesian two different setups." },
      { slug: "blue-tongue-skink-handling-guide", line: "The bluff display, the huff scale, how to pick a heavy lizard up, and how long a session should run." },
      { slug: "blue-tongue-skink-health-issues-guide", line: "Metabolic bone disease, the parasite load that comes with a wild-caught animal, respiratory infection, obesity, retained shed and scale rot." },
      { slug: "blue-tongue-skink-feeding-guide", line: "Schedule by age, the protein-to-greens flip, the portion size, the toxic list, and eight reasons a skink stops eating." },
      { slug: "blue-tongue-skink-enrichment-guide", line: "The mealworm study that reduced hiding, scatter feeding, the dig box, and the priority order to build in." },
    ],
    buyList: [
      "4x2x2 ft front-opening PVC enclosure",
      "T5 HO UVB kit spanning at least half the warm side",
      "Halogen bulb or deep heat projector, and a basking dome fixture",
      "Thermostat for the heat source",
      "Digital thermometer and hygrometer",
      "Topsoil and play sand, or a coco-fiber-based substrate, 4 to 6 inches deep",
      "Leaf litter or sphagnum moss, for an Indonesian setup",
      "Multiple hides, one at each end of the gradient",
      "A water dish large enough for the skink to fully submerge in",
      "Calcium, low or no phosphorus, and a reptile multivitamin",
      "Gut-loaded feeder insects, and soft-tipped feeding tongs",
      "A gram-accurate scale for weekly weigh-ins",
      "A storage tub for a dig box",
    ],
    faqs: [
      { q: "Do Northern and Indonesian skinks need different temperatures?", a: "Yes, slightly. Northern basking surface should run 105 to 115°F, Indonesian basking surface a bit cooler at 100 to 105°F. Both need a cool side of 70 to 80°F and nighttime temperatures staying above roughly 70°F." },
      { q: "Is the cheaper Indonesian skink the better budget choice?", a: "Not usually. Wild-caught Indonesian skinks frequently need a fecal exam and deworming right after purchase, which Northern buyers typically skip, and they take longer to tame. For a first-time keeper, a captive-bred Northern often works out to a comparable total cost with meaningfully lower risk." },
      { q: "What is the first sign of metabolic bone disease in a blue-tongued skink?", a: "A soft or rubbery jaw is often the first thing owners notice, followed by a kinked spine, tremors, and difficulty walking in more advanced cases. It's caused by inadequate UVB and or calcium. This is a vet situation always, and advanced cases are irreversible, which is exactly why UVB and calcium supplementation matter from day one." },
    ],
  },
  {
    id: "fire-skink",
    name: "Fire Skink",
    emoji: "🦎",
    difficulty: "Beginner",
    petType: "Lizards",
    image: "/assets/guides/fire-skink.jpg",
    tagline: "Spectacular red and gold, and it will spend most of its life underground!",
    funFact: "Fire skinks are one of the most brightly colored lizards in the hobby and one of the most rarely seen in their own enclosure. Give one four inches of substrate and it will vanish; give it eight to ten and it will build a burrow system, come out to bask, and behave like a completely different animal.",
    // Labels match `covers` strings in affiliateProducts.js and the figures are those
    // products' vetted prices. See scripts/check-cost-coverage.mjs.
    costs: {
      setup: [
        { item: "36x18x18 in enclosure", low: 202, high: 258 },
        { item: "Moist substrate (coconut fiber + topsoil)", low: 10, high: 16 },
        { item: "Halogen basking bulb + fixture", low: 18, high: 25 },
        { item: "Moderate UVB (T5 HO Arcadia 6%)", low: 95, high: 115 },
        { item: "Cork bark slabs and flat stones", low: 28, high: 40 },
        { item: "Sphagnum moss for moist hide", low: 8, high: 14 },
        { item: "Shallow water dish", low: 8, high: 14 },
        { item: "Digital thermometer and hygrometer", low: 11, high: 19 },
      ],
      annual: [
        { item: "Live insects (crickets, dubia, worms)", low: 200, high: 380 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "UVB bulb replacement (every 6-12 months)", low: 111, high: 141 },
        { item: "Feeding tongs", low: 8, high: 14 },
        { item: "Electricity for heat and lighting", low: 70, high: 140 },
        { item: "Exotic vet check", low: 70, high: 150 },
      ],
    },
    sections: {
      housing: `A single adult wants 36x18x18 inches as a floor-space-first enclosure. Height is close to irrelevant here; fire skinks are terrestrial and fossorial, and the useful dimension is length and depth.

Substrate is the whole game with this species. Use four to six inches of a mix that holds a tunnel. ReptiFiles gives 40 percent organic topsoil, 40 percent coconut fiber and 20 percent fine sand, kept slightly damp, with leaf litter on top. A fire skink in shallow bedding hides in one corner under a hide and looks permanently nervous. The same animal in deep substrate builds a burrow, uses the whole enclosure and comes out to bask.

Provide a basking surface of 92 to 96 degrees F, a cool end of 75 to 85, and a night drop to 70 to 75. Use a halogen flood on a dimmer rather than a ceramic emitter, since these animals do respond to visible basking light.

Fit UVB. A linear T5 at 5 to 6 percent across part of the enclosure is right; a small coil bulb is not. Humidity should sit at 60 to 70 percent, which deep damp substrate largely does on its own, topped up by misting morning and evening. Ventilate enough that it dries a little between mistings.

Include a humid hide, a shallow water dish big enough to sit in, and plenty of cork bark and leaf cover. A skink that feels exposed will not come out.`,
      diet: `Fire skinks are insectivores with an appetite. Feed a rotation of appropriately sized live insects: dubia roaches, crickets, black soldier fly larvae, silkworms and the occasional superworm. Adults eat twice a week, juveniles daily to every other day. Offer as much as the animal clears in about five minutes, with no feeder bigger than its head.

Gut load the insects for at least 24 hours before offering them, on greens, squash and a commercial gut-load. An insect that has eaten nothing is close to an empty shell nutritionally.

Dust with a plain calcium at most feedings and a calcium with D3 plus a multivitamin once or twice a week, adjusted down if your UVB is strong and well positioned. Metabolic bone disease is the main nutritional failure in this species and it comes from the calcium and UVB side rather than from protein.

Some individuals take small amounts of soft fruit or the occasional pinky as adults. Neither is necessary and neither should be routine.

Keep fresh water available at all times in a dish heavy enough not to be tipped or buried.`,
      enrichment: `The enrichment for a fire skink is mostly the substrate, and it is not a nice-to-have. Depth, moisture and leaf litter turn a hiding animal into an active one.

Add cork bark tunnels, flat stones near the basking area, sphagnum-stuffed hides and a dense litter layer. Live plants such as pothos survive in a fire skink enclosure better than they do with larger lizards, though the digging will disturb roots.

Feed with tongs or scatter feed into the litter. Scatter feeding gets them foraging through the leaves, which is what they do in the wild and is the easiest natural behavior to encourage.

Handling is possible but should be earned slowly. Fire skinks are fast and initially flighty, and a stressed one will drop its tail. Start with tong feeding, then short sessions low over a soft surface. Many settle into being reliably handleable; some never do.

Keep one per enclosure unless you have real experience. Males will fight, and mixed pairs need enough space and hides for the female to get away.`,
      health: `Metabolic bone disease is the main preventable problem, from insufficient UVB, insufficient calcium, or both. Watch for tremors, a soft or bowed jaw, difficulty lifting the body off the floor and a reluctance to climb.

Retained shed on the toes and tail tip is the most common minor complaint and is nearly always a humidity problem. A humid hide and a slightly damp substrate layer usually resolve it. Rings of retained skin left in place can cut off circulation.

Impaction is the reason to avoid sand, gravel and any loose particulate that does not hold moisture. A soil and coco fiber mix is both better for burrowing and safer to swallow incidentally.

Wild-caught animals are still common in this trade and often arrive with parasite loads, dehydration and injuries. Ask about origin. A captive-bred fire skink costs more and starts far healthier, and a fresh import should have a fecal check early.

Mouth rot and respiratory infections follow from enclosures that are wet rather than humid, with no ventilation or no thermal gradient.`,
      checklist: [
        "36x18x18 in front-opening terrarium",
        "4 to 6 inches of topsoil, coco fiber and sand",
        "Leaf litter layer and cork bark cover",
        "Halogen basking bulb on a dimmer, 92 to 96 F",
        "Linear T5 UVB, 5 to 6 percent",
        "Humid hide and shallow water dish",
        "Digital thermometer and hygrometer",
        "Varied live insects, gut loaded",
        "Calcium and D3 plus multivitamin",
        "Exotic veterinarian experienced with skinks"
      ],
    },
    faqs: [
      { q: "Why does my fire skink hide all the time?", a: "Almost always because the substrate is too shallow. Fire skinks are burrowers, and in four inches of bedding the only option is to wedge under a hide and stay there. At six to ten inches of a soil and coco fiber mix that holds a tunnel, they build a burrow system and start using the whole enclosure, basking in the open and foraging through the leaf litter. Depth of substrate changes this species more than any other single factor." },
      { q: "Do fire skinks need UVB?", a: "Yes. They are diurnal and bask, and while some keepers raise them without UVB using heavy D3 supplementation, the results are far more consistent with it. Use a linear T5 at 5 to 6 percent over part of the enclosure rather than a compact coil, mount it at the distance the manufacturer specifies, and replace it every twelve months even though it still emits visible light." },
      { q: "Can you handle a fire skink?", a: "Some, with patience. They are fast and start out flighty, and a stressed one can drop its tail, which regrows but never matches. Build up through tong feeding first, then short sessions held low over a soft surface so a jump does not end badly. Plenty of fire skinks become reliably handleable adults, and some simply stay display animals. Buying captive bred makes a calm outcome much more likely." },
      { q: "Is my fire skink wild caught?", a: "Quite possibly, and it is worth asking directly. A large share of fire skinks in the trade are still imported, and wild-caught animals typically arrive dehydrated, carrying parasites, and sometimes with injuries or missing toes. They can settle in well, but they need a fecal test and a quiet acclimation period. Captive-bred animals cost more and start much healthier." },
      { q: "How big do fire skinks get?", a: "About 12 to 15 inches including the tail, with the body itself a good deal shorter than that suggests. They are heavy-bodied for their length rather than lanky. That size makes a 36x18x18 inch enclosure a comfortable adult home for one animal, prioritizing floor area over height since they spend their time on and under the ground." },
    ],
  },
  {
    id: "green-anole",
    name: "Green Anole",
    emoji: "🦎",
    difficulty: "Beginner/Intermediate",
    petType: "Lizards",
    image: "/assets/guides/green-anole.jpg",
    tagline: "America's tiny chameleon: the little green lizard that turns brown with its mood!",
    funFact: "Green anoles can change color from bright green to brown depending on temperature, stress, or mood, earning them the nickname 'American chameleon,' though they're not true chameleons at all!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "18x18x24 in tall planted enclosure", low: 80, high: 150 },
        { item: "UVB (T5 HO 5-6%)", low: 50, high: 90 },
        { item: "Basking bulb", low: 15, high: 30 },
        { item: "Dense live plants", low: 25, high: 45 },
        { item: "Thin branches and cork bark", low: 15, high: 25 },
        { item: "Automatic mister or manual misting bottle", low: 10, high: 40 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
      ],
      annual: [
        { item: "Small feeder insects (crickets, fruit flies)", low: 60, high: 120 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "UVB bulb replacement", low: 50, high: 90 },
        { item: "Electricity (heat and lighting)", low: 30, high: 50 },
        { item: "Annual vet wellness check", low: 40, high: 80 },
      ],
    },
    sections: {
      housing: `A well-planted 18x18x24" vertical enclosure works for 1 to 2 green anoles. Never house two males together - they fight aggressively and will injure or kill each other. A male-female pair or a group of females can be housed together in a sufficiently large and well-planted enclosure.

These are arboreal lizards requiring height and dense vegetation. Live plants - pothos, bromeliads, ficus pumila - are strongly recommended. Anoles drink water droplets from leaves after misting and rarely drink from standing water dishes. Dense plantings are therefore both enrichment and a critical hydration mechanism.

Maintain daytime temperatures of 80 to 85 degrees F with a basking spot of 90 degrees F, dropping to 65 to 75 degrees F at night. Humidity should be 60 to 80%. UVB (T5 HO 5 to 6%) is essential for health and calcium metabolism. An automatic misting system set for morning and evening replicates natural rainfall cycles and ensures adequate hydration.`,
      diet: `Green anoles are insectivores. Feed small live insects: appropriately sized crickets, small dubia roaches, fruit flies (for hatchlings and small juveniles), and waxworms as occasional treats. Prey should be no wider than the space between the anole's eyes - this small lizard has a small mouth and appropriately sized prey prevents choking.

Feed daily for juveniles, every other day for adults. Gut-load all feeder insects 24 to 48 hours before offering. Dust with calcium w/D3 every 2 to 3 feedings and a reptile multivitamin once weekly.

Green anoles are delicate animals and their small size means nutritional deficiencies develop quickly. Consistent, appropriate supplementation is critical. Never offer oversized prey - stress from struggling to swallow inappropriate prey is real and harmful.`,
      enrichment: `Dense vertical plantings at multiple levels, thin branches for perching, cork bark, and live plant cover create the ideal environment. Green anoles are best enjoyed as a display species - their natural behaviors (dewlap displays, color changes from green to brown, territorial posturing, hunting behavior) are fascinating to observe through the glass.

Frequent handling causes significant and cumulative stress. Green anoles are not handling animals - keep interaction minimal. The dewlap display (a bright red throat fan extended for territorial communication) and color-shifting in response to temperature, mood, and stress are the primary visual appeal.

A dripper system or automatic misting system running twice daily (morning and late afternoon) replicates natural rain cycles, triggers activity and feeding responses, provides drinking water on leaves, and maintains appropriate humidity. This is one of the most important environmental features for anole health.`,
      health: `Dehydration is the most common cause of declining health in green anoles. They rarely drink from standing water and must have water droplets available on leaves after misting. A green anole with sunken eyes is severely dehydrated and requires immediate intervention: increase misting frequency and provide a shallow water dish with a small sponge or pebbles to prevent drowning.

Poor UVB causes calcium deficiency and MBD, which presents as muscle trembling, inability to climb, and soft jaw in these small lizards. Quality UVB on a consistent 12-hour cycle prevents this entirely.

Stress from over-handling, male-male aggression, or overly sparse housing causes immune suppression, anorexia, and shortened lifespan. Green anoles are sensitive animals that require precise husbandry and a low-stress environment. Retained shed on toes can cause constriction and digit loss - consistent humidity prevents it. Annual veterinary checks with an exotic animal vet are recommended.`,
      checklist: [
        "18x18x24\"+ tall planted enclosure",
        "UVB T5 HO (5 to 6%)",
        "Basking bulb (90 degrees F hot spot)",
        "Dense live plants (pothos, bromeliads)",
        "Thin branches and cork bark",
        "Automatic mister or daily hand misting (x2)",
        "Digital thermometer and hygrometer",
        "Small live feeder insects (crickets, fruit flies)",
        "Calcium w/D3 + multivitamin supplements",
        "Reptile-savvy exotic veterinarian",
      ],
    },
    faqs: [
      { q: "Are green anoles good pets to handle?", a: "Green anoles are better appreciated as display animals than handling pets. They are sensitive to stress, and frequent handling causes immune suppression and shortened lifespan. Their natural behaviors - dewlap displays, color shifts from green to brown, territorial posturing, and active hunting - are the primary appeal and are best observed through the glass." },
      { q: "Why does my green anole turn brown?", a: "Color change in green anoles is triggered by temperature, stress, mood, and ambient conditions - not just camouflage. A cold or stressed anole turns brown; a warm, relaxed anole is bright green. This color-shifting ability is why they are sometimes called 'American chameleons,' though they are not true chameleons. Brown color alone is not a sign of illness." },
      { q: "What do green anoles eat?", a: "Green anoles are strict insectivores. Feed small live insects - appropriately sized crickets, small dubia roaches, and fruit flies for juveniles and smaller adults. Prey should be no wider than the space between the anole's eyes. Feed daily for juveniles, every other day for adults. Gut-load all insects 24 to 48 hours before offering." },
      { q: "How big do green anoles get?", a: "Adults reach 5 to 8 inches total length - most of which is the slender, whip-like tail. They are lightweight, delicate animals. Males develop a distinctive red dewlap (throat fan) used in territorial and courtship displays. Two males should never be housed together as they fight aggressively." },
      { q: "Do green anoles need UVB?", a: "Yes, UVB is essential. A T5 HO 5 to 6% UVB bulb on a 12-hour cycle supports calcium metabolism and vitamin D3 synthesis. Without adequate UVB, green anoles develop calcium deficiency and metabolic bone disease. A proper automatic misting system is equally critical - they drink from water droplets on leaves and rarely from standing water dishes." },
    ],
  },
  {
    id: "green-iguana",
    name: "Green Iguana",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/green-iguana.jpg",
    tagline: "A six foot arboreal herbivore sold as a six inch hatchling!",
    funFact: "Green iguanas have a pale scale on the top of the head called the parietal eye. It is a genuine third eye with a lens and a retina, wired to the pineal gland rather than to vision, and it detects shadow moving overhead. It is an early warning system for birds of prey.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Day one, hygiene, and power outage cite
    // the shared reptile guides in the sidebar's Health and More list, which
    // the set tests keep reporting as gaps because the reader never opens
    // them. This species has no feeding guide, so the diet rows cite the
    // health issues and enrichment guides, which is where the diet material
    // actually lives. Reconciled 2026-09-09 after the green iguana set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Adult enclosure", value: "A single adult needs a minimum of 10 feet long by 5 feet wide by 6 feet tall, some vet and husbandry sources recommend 12 by 6 by 6. No commercial enclosure is large enough, this has to be a custom, walk-in build.", source: "green-iguana-tank-setup-guide" },
        { label: "First enclosure", value: "A juvenile can start temporarily in something like a 4x2x4 foot enclosure or a 40 to 55 gallon tank, but outgrows it within the first year, plan for the move into adult housing rather than being surprised by it.", source: "green-iguana-tank-setup-guide" },
        { label: "Temperature", value: "Basking area 100 to 120°F, cool end around 80°F, nighttime not dropping below the low 70s°F. Heat via a cluster of halogen bulbs, roughly six bulbs to adequately cover an adult's basking branch, positioned over a sturdy climbing perch.", source: "green-iguana-tank-setup-guide" },
        { label: "UVB", value: "High-output T5 HO UVB is required for survival in this species, not a nice-to-have, replaced every 12 months regardless of whether the bulb still produces visible light. Glass blocks UVB entirely, so a sunny window is never an adequate substitute.", source: "green-iguana-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80%, through misting twice daily with a pressure sprayer or an automated misting system, plus a large soaking tub the iguana can fully access. Chronically low humidity is directly linked to dehydration and kidney disease.", source: "green-iguana-tank-setup-guide" },
        { label: "Floor", value: "2 to 4 inches of coconut husk or large-particle cypress mulch, sized specifically to reduce impaction risk. Avoid sand, gravel, corncob bedding, kitty litter, and wood shavings entirely.", source: "green-iguana-tank-setup-guide" },
        { label: "Climbing", value: "Roughly two-thirds of an iguana's total length is tail, and this is fundamentally a climbing animal that needs genuine vertical space and sturdy branches positioned near the basking zone, not just floor area.", source: "green-iguana-tank-setup-guide" },
        { label: "Diet", value: "Strictly plant-based: no insects, no dog or cat food, no eggs, ever. Too much animal protein in that diet is one of the husbandry failures behind kidney disease, along with chronic dehydration and over-supplementing vitamin D.", source: "green-iguana-health-issues-guide" },
        { label: "Feeding routine", value: "Clip whole leaves at height so feeding happens where the animal already is. Put food in more than one place, rotate greens across the week so the salad is not identical every day, and dust with a plant-eater supplement.", source: "green-iguana-enrichment-guide" },
        { label: "Handling", value: "Approaching from directly above triggers a strong defensive response, it reads as an aerial predator attack to the iguana, approach from the side instead. The tail can drop under grasping pressure, even fairly light pressure, so never grab or restrain by the tail.", source: "green-iguana-handling-guide" },
        { label: "Breeding season", value: "Testosterone-driven aggression in mature males is real and can transform a previously calm, handleable iguana into an unpredictable one for a period each year, head-bobbing, color intensifying toward orange or red, and territorial chasing or biting.", source: "green-iguana-handling-guide" },
        { label: "Housing together", value: "Adults are territorial. Adult males will fight each other, and a breeding-season male can be genuinely dangerous to the person keeping him.", source: "green-iguana-enrichment-guide" },
        { label: "Parasite screening", value: "Do not skip parasite screening, given what the captive welfare assessment found: eight iguanas observed over 22 days in an exotic animal facility, and all eight carried endoparasites.", source: "green-iguana-enrichment-guide" },
        { label: "Adult size", value: "An adult male green iguana reaches 6 to 7 feet including tail and up to 20 pounds, a completely different animal from the small, manageable baby most people bring home.", source: "green-iguana-handling-guide" },
        { label: "Lifespan", value: "With excellent care, green iguanas live 15 to 20 years, sometimes 25.", source: "green-iguana-cost-guide" },
        { label: "First year", value: "An estimated 70% of captive green iguanas die within their first year of life, and inadequate diet, lighting, and housing are named as the leading cause.", source: "green-iguana-health-issues-guide" },
        { label: "The iguana", value: "Farm-raised babies are cheap, commonly $20 to $100. Morph lines cost considerably more: albino, hypomelanistic, axanthic, and purple translucent animals commonly run $300 to $1,000 or more.", source: "green-iguana-cost-guide" },
        { label: "Budget", value: "$700 to $2,500 or more upfront, and it is two purchases. Ongoing, roughly $60 to $150 a month, covering fresh produce, calcium and multivitamin supplements, substrate, and meaningful electricity to heat and light a large enclosure.", source: "green-iguana-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, keep reptiles out of the kitchen entirely, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "This species is not in the guide's cold-floor table. Its rule for a species that is not listed: check its tank setup guide for the documented nighttime low and use that as your floor.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "green-iguana-health-issues-guide",
      callNow: [
        "A swollen or rubbery lower jaw",
        "Swollen or bowed hind limbs",
        "Soft bones",
        "Tremors",
        "An inability to lift the trunk while walking",
        "Signs of kidney disease, which follows chronic dehydration, animal protein in the diet, or over-supplemented vitamin D",
        "Mouth rot",
        "Respiratory infection",
        "Skin or fungal infections",
        "A female you suspect is egg bound, whether or not she has ever been near a male",
        "Thermal burns from a heat source the iguana can contact directly",
        "Substrate impaction",
      ],
      vetLine: "Always see a vet for metabolic bone disease and kidney disease: advanced cases need immediate, long-term treatment. Mouth rot, respiratory infection, and skin or fungal infections need professional treatment rather than home correction alone. Egg binding is always an emergency, get to a vet immediately if you suspect it.",
    },
    routes: [
      { slug: "green-iguana-cost-guide", line: "$20 to $100 for the hatchling, $700 to $2,500 or more for the setup, and why the adult enclosure is a second purchase a year later." },
      { slug: "green-iguana-tank-setup-guide", line: "The 10x5x6 ft adult minimum, the basking and humidity numbers, substrate, UVB, and the vertical space an arboreal lizard needs." },
      { slug: "green-iguana-handling-guide", line: "Claws, tail whipping, tail drop, how to approach, and what breeding season does to a mature male." },
      { slug: "green-iguana-health-issues-guide", line: "Metabolic bone disease, kidney disease, mouth rot, egg binding, burns, and impaction, with the husbandry failure behind each." },
      { slug: "green-iguana-feeding-guide", line: "The greens to build the salad on, which ones block calcium, why animal protein risks gout, and the calcium schedule by age." },
      { slug: "green-iguana-enrichment-guide", line: "The hatchling sociality research, height and climbing routes, foraging for a herbivore, and why space is the whole problem." },
    ],
    buyList: [
      "Juvenile enclosure, 4x2x4 ft PVC",
      "A plan and a budget for the walk-in adult enclosure",
      "T5 HO UVB kit, 36 inch, 12% or 14% bulb",
      "Halogen basking bulbs, 75 watt, two or three",
      "Dimming thermostat",
      "Misting system starter kit, or a pressure sprayer for twice-daily misting",
      "Coconut husk or large-particle cypress mulch, 2 to 4 inches",
      "A large soaking tub the iguana can fully access",
      "Sturdy climbing branches positioned near the basking zone",
      "Plain newspaper or butcher paper, if you are starting a juvenile on paper",
      "Digital thermometer and hygrometer",
    ],
    faqs: [
      { q: "What size enclosure does an adult green iguana need?", a: "An adult needs at least 10 feet long, 5 wide, and 6 tall, with 12 by 6 by 6 also recommended. Nothing commercial comes that big, so it is a custom walk-in build. A juvenile can start in a 4x2x4 or a 40 to 55 gallon tank, but will outgrow it inside a year." },
      { q: "What does the upfront setup cost?", a: "$700 to $2,500 or more, and it is two purchases. A 4x2x4 foot juvenile setup runs roughly $985 to $1,000. The adult enclosure comes a year or two later: a walk-in build is several hundred dollars in materials, a custom builder $1,000 and up, and a made to order 6x3x6 foot box $3,740." },
      { q: "What is the most common health issue in green iguanas?", a: "Metabolic bone disease, probably the most common medical problem in pet iguanas and the disease most commonly seen in lizards generally. Watch for a swollen or rubbery lower jaw, swollen or bowed hind limbs, soft bones, and tremors." },
    ],
  },
  {
    id: "jacksons-chameleon",
    name: "Jackson's Chameleon",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/chameleon.jpg",
    tagline: "The horned, color-shifting dinosaur of the reptile world!",
    funFact: "Jackson's chameleons are one of the few chameleon species that give live birth rather than laying eggs. Females can birth 8 to 30 live young!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x48 in all-screen enclosure", low: 150, high: 300 },
        { item: "Strong UVB (T5 HO Arcadia 6-12%)", low: 70, high: 110 },
        { item: "Basking bulb", low: 20, high: 40 },
        { item: "Dripper system and automatic mister", low: 50, high: 100 },
        { item: "Live plants (pothos, ficus)", low: 40, high: 80 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
      ],
      annual: [
        { item: "Gut-loaded feeder insects (variety)", low: 150, high: 300 },
        { item: "Calcium w/ and w/o D3 + multivitamin", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (heat, lighting, mister)", low: 50, high: 90 },
        { item: "Annual vet wellness check (chameleon-experienced)", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `A 24x24x48" all-screen enclosure is the minimum for a single adult Jackson's chameleon. Screen construction is non-negotiable - stagnant air in glass or plastic enclosures causes rapid onset respiratory infections in chameleons. Airflow must be constant and significant. Many experienced keepers use screen cages outdoors in appropriate climates, which is close to ideal.

Live plants are essential, not decorative. Pothos, ficus, hibiscus, and dracaena provide natural humidity regulation, visual barriers for security, resting surfaces, and environmental complexity. Bare enclosures produce chronically stressed, sick chameleons. Aim for at least 60 to 70% plant coverage of the enclosure interior.

Temperature requirements: daytime ambient of 72 to 80 degrees F with a basking spot of 85 to 88 degrees F. Jackson's chameleons prefer cooler temperatures than most other chameleon species - they originate from the cool highlands of East Africa and Hawaii's Maui island. Nighttime temperatures can drop to 55 to 65 degrees F, which is actually beneficial. Never allow temperatures to exceed 90 degrees F. Strong UVB (T5 HO Arcadia 6% or 12%) is mandatory.

A dripper system and/or automatic misting system is required for hydration. Chameleons almost never drink from standing water - they drink water droplets from leaves and their environment after rainfall. A dripper creating slow drips onto leaves for 30 to 60 minutes morning and afternoon, combined with a fine misting system that runs for 3 to 5 minutes several times daily, meets hydration and humidity needs.`,
      diet: `Jackson's chameleons eat live insects exclusively. The variety of feeder insects is one of the most important factors in long-term health. Offer crickets, dubia roaches, hornworms, silkworms, black soldier fly larvae, and blue bottle flies. Each insect species has a different nutritional profile, and rotation provides comprehensive nutrition. Avoid relying on a single feeder type.

Gut-loading feeder insects 24 to 48 hours before feeding is critical. Feed insects a high-quality commercial gut-load or fresh vegetables (collard greens, mustard greens, sweet potato, carrot, apple). The chameleon's nutrition is entirely dependent on what its prey ate. An unloaded cricket offers minimal nutritional value.

Feed juveniles daily (as many as they will eat in 15 minutes). Feed adults every other day, offering 5 to 10 appropriately sized insects. Prey should be no larger than the width of the chameleon's head. Overfeeding causes obesity, which stresses the liver and reproductive system.

Supplementation schedule: calcium without D3 at every or every-other feeding, calcium with D3 twice weekly, and a reptile multivitamin once per week. Jackson's chameleons are sensitive to over-supplementation as much as under-supplementation. Follow this schedule precisely.`,
      enrichment: `Dense, multi-level branching is the most important structural enrichment. Chameleons are almost entirely arboreal and spend their lives navigating through a three-dimensional network of branches and leaves. Horizontal branches at multiple heights, thin perching vines at the top (where they feel safest), and thick branches lower for basking create the complexity they need.

The dripper and misting system doubles as enrichment - chameleons investigate and drink droplets naturally and actively. Watching a chameleon track and hunt live prey is a major appeal of keeping them; the prey variety itself provides mental engagement.

Handle minimally. Chameleons are not handling animals. Stress is a primary health concern - a chronically stressed chameleon will stop eating, develop immune suppression, and die. Many chameleons spend their entire lives in their enclosure without needing to be handled. When handling is necessary (for veterinary visits, enclosure cleaning), move slowly, allow the chameleon to walk onto your hand voluntarily, and keep sessions as brief as possible.

Jackson's chameleons are live-bearing (viviparous), unlike most chameleon species that lay eggs. A gravid female needs adequate nutrition and a suitable warm, humid hiding area. Breeding is not recommended without extensive experience.`,
      health: `Chameleons are masters of concealing illness. By the time a chameleon shows obvious signs of sickness - color changes, sunken eyes, closed eyes during the day, gaping mouth, lethargy - it has usually been ill for some time and is severely compromised. Attentive daily observation of baseline behavior is essential. Know what your chameleon's normal colors, activity level, and feeding response look like.

Dehydration is the single most common cause of early death in pet chameleons. Sunken eyes (the most visible sign), dark coloration, and lethargy indicate dehydration. A chameleon that is not drinking needs immediate intervention: long misting sessions, paper towel soaks, and veterinary care if the animal does not rehydrate quickly. Maintain the dripper and misting schedule without gaps.

Metabolic Bone Disease (MBD) from inadequate UVB or supplementation causes swollen limbs, deformities, and difficulty moving. Maintain proper UVB schedules, replace UVB bulbs on schedule, and follow supplementation protocols exactly.

Respiratory infections result from stagnant air and temperature fluctuations. The all-screen enclosure mandate is specifically to prevent this. Female Jackson's chameleons can develop reproductive problems (dystocia, retained offspring) that require veterinary intervention. Find a reptile vet with chameleon experience before you need one - do not wait for an emergency to identify your veterinary resource.`,
      checklist: ["24x24x48\" all-screen enclosure", "Strong UVB lighting (T5 HO Arcadia 6% or 12%)", "Basking bulb (80 to 85 degrees F hot spot)", "Dripper system and automatic mister", "Live plants (pothos, ficus)", "Gut-loaded feeder insects", "Calcium w/D3 and without D3 supplements", "Multivitamin supplement", "Digital thermometer and hygrometer", "Reptile vet with chameleon experience"],
    },
    faqs: [
      { q: "Are chameleons hard to keep?", a: "Chameleons are widely considered one of the most demanding reptiles in the hobby and are not recommended for first-time reptile keepers. They require very specific conditions: all-screen enclosures for ventilation, precise temperature gradients, high humidity with a wet-dry cycle, strong UVB lighting, live gut-loaded insects at every feeding, and a dripper or automatic misting system for hydration. They are also highly stress-sensitive - improper conditions or a high-traffic cage location cause rapid health decline. Experienced keepers find them deeply rewarding; beginners often experience significant losses." },
      { q: "Why do chameleons change color?", a: "Chameleons change color primarily to communicate mood, social status, and reproductive readiness - not primarily for camouflage as commonly believed. Bright, vivid colors often signal excitement, territorial aggression, or a male displaying to a female. Dark, muted colors typically indicate stress, illness, or cold. The color change is achieved by manipulating nanocrystals within specialized skin cells called iridophores, which reflect different wavelengths of light depending on their arrangement." },
      { q: "How do I get my chameleon to drink water?", a: "Chameleons rarely drink from standing water bowls - in the wild, they drink droplets from leaves after rain. Provide water by misting the enclosure 2 to 3 times daily so the chameleon can drink from leaves and cage walls. A dripper system that slowly keeps leaves wet is highly effective. Always use dechlorinated or filtered water. Signs of dehydration include sunken eyes, lethargy, and yellow-orange urates - the urate portion of droppings should be white, not yellow." },
      { q: "How big do veiled chameleons get?", a: "Male veiled chameleons typically reach 18 to 24 inches total length and 140 to 200 grams - they are among the larger chameleon species kept in captivity. Females are noticeably smaller at 10 to 13 inches, but require more advanced care because they are prone to reproductive issues. Females produce infertile eggs even without a male and must have a deep laying box available at all times to prevent fatal egg-binding." },
      { q: "How long do chameleons live?", a: "Captive-bred veiled chameleons live 5 to 8 years with optimal care, with males often outliving females (females that lay frequent clutches have significantly shortened lifespans). Jackson's chameleons live 5 to 10 years. Panther chameleons live 3 to 7 years. Wild-caught chameleons rarely survive long in captivity due to extreme capture stress. Regular access to a vet experienced with chameleons dramatically improves outcomes at any age." },
      { q: "How can I tell if my Jackson's chameleon is male or female?", a: "By the horns. Male Jackson's chameleons grow three distinct horns on the front of the face, giving them a small Triceratops-like look, while females typically have no horns or only tiny, rudimentary nubs. It's one of the clearest, easiest sexing calls of any commonly kept reptile." },
    ],
  },
  {
    id: "savannah-monitor",
    name: "Savannah Monitor",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/savannah-monitor.jpg",
    tagline: "The powerful, intelligent monitor that needs serious space and a serious keeper!",
    funFact: "Savannah monitors are built for digging. In the wild they may create burrows several feet deep to escape the African heat. A deep substrate is one of the most important enrichment features you can give them!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Adult housing is often custom-built; setup range reflects that.
    costs: {
      setup: [
        { item: "8x4x4 ft+ custom enclosure or room", low: 500, high: 1200 },
        { item: "12 in+ deep substrate (topsoil/sand mix)", low: 100, high: 200 },
        { item: "High-wattage basking bulb + fixture", low: 30, high: 60 },
        { item: "Strong desert UVB (T5 HO Arcadia Dragon 12%)", low: 70, high: 110 },
        { item: "Quality thermostat", low: 40, high: 70 },
        { item: "Infrared thermometer gun", low: 25, high: 40 },
        { item: "Large water tub for soaking", low: 30, high: 60 },
      ],
      annual: [
        { item: "Varied diet (roaches, eggs, occasional mice/rats)", low: 250, high: 450 },
        { item: "Calcium and multivitamin supplements", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (high-wattage basking)", low: 120, high: 220 },
        { item: "Annual vet wellness check", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: "Adult savannah monitors can reach 3 to 5 ft and require enormous enclosures. A minimum 8x4x4 ft is recommended, and many keepers build custom rooms. Deep substrate (12 inches or more of a 50/50 topsoil/sand mix) is essential for burrowing and thermoregulation. A very hot basking spot (130 to 150 degrees F surface) is critical. Ambient warm side: 90 to 95 degrees F. Cool side: 78 to 82 degrees F. Strong desert UVB (Arcadia Dragon 12%) is mandatory. High humidity (60 to 70%) in the cool/burrow area, low humidity under the basking spot.",
      diet: `Savannah monitors are carnivores that benefit from a varied diet reflecting their natural feeding habits. In the wild, savannah monitors eat a wide variety of invertebrates, small vertebrates, and eggs - not primarily rodents. Research consistently shows that monitors fed primarily on mice and rats develop severe obesity, fatty liver disease, and cardiac problems. An invertebrate-heavy diet is significantly healthier.

Appropriate feeders include large dubia roaches, superworms, crickets, hornworms, silkworm pupae, and large insects. Whole prey items - appropriate-sized mice, rats (infrequently), raw quail, feeder fish, and whole raw eggs - provide variety and nutritional completeness. Eggs (raw chicken or quail) are an excellent regular food item.

Feed juveniles daily. Feed adults 3 to 5 times per week. Watch body condition carefully - a healthy savannah monitor has visible muscle tone but no pronounced fat deposits on the neck or limbs. Obesity is one of the most common and serious welfare problems in pet savannah monitors.`,
      enrichment: `Deep burrowing substrate is the most important enrichment. Savannah monitors in the wild create burrows many feet deep. A minimum of 12 inches of substrate (topsoil/sand mix) allows natural burrowing behavior that is fundamental to their physical and psychological wellbeing.

Provide large rock structures (securely stacked), cork bark hides, climbing logs and branches, and a large water tub for soaking. Savannah monitors can become remarkably tame and interactive with consistent, confident handling from a young age. Mental stimulation through foraging enrichment (hiding prey in substrate or under rocks), novel objects, and varied prey items prevents the boredom that leads to stereotypic pacing behavior.

Free-roam time in a safe, supervised area provides exercise and exploration opportunities beyond the enclosure. Savannah monitors that are handled regularly and given enrichment opportunities are genuinely engaging, interactive animals.`,
      health: `Obesity from an all-rodent diet is the most common and serious welfare problem in savannah monitors. Whole-mammal diets (exclusively mice and rats) cause progressive fatty liver disease, cardiovascular problems, and lifespan reduction to 5 to 8 years instead of the 15 to 20 years possible with appropriate care. An invertebrate-diverse diet with only occasional whole prey mammals dramatically improves long-term health outcomes.

Metabolic Bone Disease from inadequate UVB causes soft bones and skeletal deformities. Strong desert UVB (Arcadia Dragon 12%) is mandatory and should run on a consistent schedule. Replace bulbs on schedule - UV output degrades before visible light does.

These are powerful animals. Adult savannah monitors can inflict significant injuries with their tail (whipping), claws, and jaws. Approach with confidence and calm, never fear or aggression. Annual veterinary wellness checks with a reptile vet experienced in monitor lizards are essential.`,
      checklist: [
        "8x4x4 ft+ custom enclosure or room",
        "12 inch+ deep substrate (topsoil/sand mix)",
        "High-wattage basking bulb (130 to 150 degrees F surface)",
        "Strong desert UVB (T5 HO Arcadia Dragon 12%)",
        "Quality thermostat",
        "Digital thermometer (IR gun essential)",
        "Large water tub for soaking",
        "Varied whole prey diet (roaches, eggs, mice, rats)",
        "Calcium + multivitamin supplements",
        "Reptile vet with monitor lizard experience",
      ],
    },
    faqs: [
      { q: "What is the biggest mistake in savannah monitor care?", a: "Feeding primarily or exclusively rodents. A diet of mice and rats causes severe obesity, fatty liver disease, and cardiovascular problems that dramatically shorten lifespan to 5 to 8 years instead of the 15 to 20 years achievable with appropriate care. Wild savannah monitors eat primarily invertebrates. An invertebrate-heavy diet - dubia roaches, superworms, eggs, large insects - is the correct dietary model, with whole prey mammals offered only occasionally." },
      { q: "How big do savannah monitors get?", a: "Adults typically reach 3 to 5 feet in total length and weigh 6 to 15+ lbs. This is a large, powerful animal requiring enormous housing - 8x4x4 ft at minimum, and many dedicated keepers build custom rooms. Prospective owners should research adult size requirements thoroughly before acquiring a hatchling." },
      { q: "Do savannah monitors become tame?", a: "Yes, with consistent confident handling from a young age, many savannah monitors become remarkably calm and tolerant. Adult tame monitors can be handled confidently and even enjoy interaction. The key is consistent calm handling that builds trust - never fear or forced interaction. Adults that were handled regularly as juveniles are dramatically different animals from those that were not." },
      { q: "How hot does a savannah monitor's basking spot need to be?", a: "130 to 150 degrees F at the surface, measured with an infrared temperature gun. Without adequate basking temperatures, savannah monitors cannot properly thermoregulate, digest food, or activate their immune systems. High-wattage halogen or flood bulbs in a quality fixture achieve these temperatures." },
      { q: "How long do savannah monitors live?", a: "With an invertebrate-based diet, appropriate housing (8x4x4 ft+), correct basking temperatures, and regular veterinary care, savannah monitors can live 15 to 20 years. The species has a reputation for short captive lifespans because most are fed primarily rodents - this is an entirely preventable outcome." },
    ],
  },
  {
    id: "uromastyx",
    name: "Uromastyx",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Lizards",
    image: "/assets/guides/uromastyx.jpg",
    tagline: "The colorful, seed-eating desert dragon that thrives on extreme heat!",
    funFact: "Uromastyx (also called spiny-tailed lizards) are almost entirely herbivorous. They get nearly all their water from their food and rarely need a standing water dish! They're one of the few reptiles that thrive on seeds.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "4x2x2 ft+ enclosure", low: 150, high: 300 },
        { item: "High-wattage basking bulb + fixture", low: 25, high: 45 },
        { item: "Quality thermostat", low: 40, high: 70 },
        { item: "Strong desert UVB (T5 HO Arcadia Dragon 12%)", low: 70, high: 110 },
        { item: "Sandy desert substrate", low: 20, high: 35 },
        { item: "Infrared thermometer gun", low: 25, high: 40 },
      ],
      annual: [
        { item: "Dark leafy greens daily", low: 100, high: 180 },
        { item: "Seeds and legumes", low: 30, high: 60 },
        { item: "Calcium and multivitamin supplements", low: 20, high: 30 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (high-wattage basking)", low: 70, high: 120 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `Adults need a minimum 4x2x2 ft enclosure. Uromastyx are desert lizards from North Africa and the Middle East requiring extremely hot basking spots. A surface temperature of 120 to 140 degrees F at the basking site is not optional - it is biologically critical for digestion, immune function, and thermoregulation. Without adequate basking heat, uromastyx cannot function properly.

The cool side should remain at 80 to 90 degrees F ambient. Strong T5 HO desert UVB (Arcadia Dragon 12% or equivalent) is mandatory and should run on a 10 to 12 hour cycle. Use a sandy desert substrate - fine play sand or an 80/20 sand-to-soil mix - 3 to 4 inches deep for natural digging behavior. Humidity should be kept very low (20 to 30%), mimicking their arid native habitat. A water dish is typically unnecessary and can raise humidity to unhealthy levels.

Enclosure temperatures must be measured with an infrared temperature gun for accuracy. A high-wattage halogen or flood bulb on a quality thermostat achieves the required basking surface temperature.`,
      diet: `Uromastyx are primarily herbivores and enthusiastic seed-eaters - this is relatively unusual among reptiles and makes them interesting to feed. Staple greens include collard greens, mustard greens, dandelion greens, endive, and escarole. Dark leafy greens should form the bulk of plant matter offered.

Seeds form a nutritionally important part of the diet: millet, lentils, split peas, various legume seeds, and quinoa are all appropriate. Offer seeds mixed into the greens or provided separately. Uromastyx eat them with obvious enthusiasm. Seeds provide protein, fat, and trace minerals that complement the leafy green base.

Do not provide a water dish as part of the regular setup - uromastyx get adequate hydration from their food, and a water dish raises humidity significantly, which is inappropriate for this arid-adapted species. Dust greens with calcium 2 to 3 times per week and a reptile multivitamin once weekly. Avoid high-oxalate foods like spinach as primary staples.`,
      enrichment: `Uromastyx are active, curious lizards that explore their enclosure during the warm hours of the day and engage with their environment in ways that many reptiles do not. They can become remarkably personable - many develop what keepers describe as dog-like personalities, seeking interaction and responding to their keeper's presence.

Provide rock stacks (securely stacked to prevent toppling), cork bark hides, and burrowing substrate deep enough for natural digging behavior. Uromastyx enjoy rearranging their environment and will push cork bark and rocks around to suit their preferences. This is entirely normal and engaging to watch.

Foraging enrichment is highly effective: hide seeds in the substrate, under rocks, or in puzzle feeders to encourage natural searching behavior. Supervised handling sessions build trust quickly with this species. Most uromastyx become calm and manageable adults with consistent, gentle interaction.`,
      health: `Inadequate basking temperature is the most common and most serious husbandry failure in uromastyx. A basking surface temperature below 120 degrees F means the uromastyx cannot properly thermoregulate its core body temperature, digest food, or activate immune responses. This leads to chronic digestive problems, immune suppression, and a dramatically shortened lifespan. Monitor basking temperatures regularly.

Metabolic Bone Disease from inadequate UVB or calcium supplementation causes softened bones and skeletal deformities. Strong UVB and consistent calcium supplementation prevent it. Respiratory infections can occur if humidity rises too high - keep the enclosure dry and well-ventilated.

Impaction from moist substrate is possible if the sandy substrate is kept too wet. Keep it dry throughout. Annual wellness checks with a reptile veterinarian experienced in lizards are strongly recommended.`,
      checklist: [
        "4x2x2 ft+ enclosure",
        "High-wattage basking bulb (120 to 140 degrees F surface)",
        "Quality thermostat",
        "Strong desert UVB (T5 HO Arcadia Dragon 12%)",
        "Sandy desert substrate (fine sand/soil mix, 3 to 4 inch deep)",
        "Digital thermometer (IR gun essential)",
        "Calcium + multivitamin supplements",
        "Staple dark leafy greens daily",
        "Seeds and legumes (millet, lentils, split peas)",
        "Reptile vet experienced with uromastyx",
      ],
    },
    faqs: [
      { q: "Do uromastyx need a water dish?", a: "No - and providing one is actively discouraged for most setups. Uromastyx are adapted to extremely arid environments and get all necessary hydration from their food. A water dish raises enclosure humidity significantly, which is inappropriate for this desert-adapted species. Remove any water dish from a standard uromastyx setup and rely on fresh vegetables for hydration." },
      { q: "How hot does the basking spot need to be for uromastyx?", a: "120 to 140 degrees F at the surface, measured with an infrared temperature gun. This is biologically critical - uromastyx cannot digest food, activate immune function, or properly thermoregulate without access to these extreme surface temperatures. High-wattage halogen or flood bulbs on a quality thermostat are the standard approach." },
      { q: "What do uromastyx eat?", a: "Dark leafy greens (collard greens, mustard greens, dandelion greens, endive, escarole) form the plant base. Uniquely, they are enthusiastic seed-eaters - millet, lentils, split peas, and various legume seeds are a nutritionally important supplement. They are nearly entirely herbivorous with no insects in the diet. Keep humidity very low (20 to 30%) and do not provide a water dish." },
      { q: "How big do uromastyx get?", a: "10 to 18 inches total length, depending on the species. Ornate uromastyx and Egyptian uromastyx are among the larger commonly kept species. All are stocky, heavyset lizards with thick, spiny tails used for defense. They reach adult size by 3 to 5 years of age." },
      { q: "How long do uromastyx live?", a: "15 to 20+ years in captivity with appropriate care - primarily the correct extreme basking temperatures (120 to 140 degrees F surface), dry conditions (20 to 30% humidity), a primarily herbivorous diet with seeds, and strong desert UVB. They are hardy animals once their specific needs are met." },
    ],
  },
  {
    id: "veiled-chameleon",
    name: "Veiled Chameleon",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Lizards",
    image: "/assets/guides/veiled-chameleon.jpg",
    tagline: "The Arabian casque-crowned climber often called the most forgiving chameleon to start with!",
    funFact: "Veiled chameleons are remarkably drought-adapted for a chameleon. Native to the mountains of Yemen and Saudi Arabia, they tolerate wider temperature and humidity swings than most other chameleon species. Females are also famous for laying large clutches of infertile eggs even without ever having contact with a male.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, hygiene, the thermostat
    // probe and the emergency plan cite the shared reptile guides in the
    // sidebar's Health and More list. Built 2026-09-14 for the veiled chameleon
    // set test (docs/READER_REVIEWS.md). The old hub's supplement schedule was
    // roughly four times the feeding guide's, on the two supplements that guide
    // says cause gular edema in excess; that is the row to check first if this
    // hub ever drifts again.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Hawaii and Washington DC are the two places you cannot keep one, and neither ban is written about chameleons: DC permits only non-venomous snakes, fish and turtles, so every lizard is out, and Hawaii bars anything not on an approved list. New Jersey wants a permit, and Minnesota allows one obtained from a permitted breeder. Check your city ordinance too.", source: "veiled-chameleon-legal-guide" },
        { label: "Enclosure", value: "2 feet by 2 feet by 4 feet (24x24x48 inches) is the practical minimum for an adult, bigger, 4x2x4 feet, is better if you have the space. Juveniles can start smaller, around 18x18x36 inches, but veiled chameleons reach adult size in just 6 to 8 months, so plan and budget for the adult enclosure from the start.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Enclosure type", value: "A screen enclosure is the traditional choice and provides excellent airflow. Hybrid enclosures, with partially solid sides, hold humidity better and are increasingly preferred. Glass terrariums can work but need serious attention to ventilation, and most aren't large enough for an adult anyway.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Temperature", value: "Basking spot around 85°F for females and juveniles, up to 90 to 95°F for adult males. Ambient temperature 72 to 80°F, with a beneficial night drop to 55 to 65°F.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Humidity", value: "40 to 50% during the day and 80 to 100% at night, raised through misting sessions morning and evening plus a dripper or an overnight cool-mist humidifier using distilled water.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Lighting", value: "A linear T5 HO UVB tube (ReptiSun 5.0 or Arcadia 6% are the commonly recommended options) spanning the enclosure, with the basking branch positioned roughly 6 to 9 inches below it. UVB and daylight lighting both run 12 hours a day. Replace the bulb every 6 to 12 months regardless of whether it still visibly lights up. Skip compact or coil-style UVB bulbs.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Water", value: "Veiled chameleons do not recognize standing water as something to drink. They only respond to moving droplets on leaves and branches. A water dish alone will not keep your chameleon hydrated, no matter how often you refill it. A dripper or misting system is a genuine essential, not an accessory.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Drainage", value: "Daily misting produces real runoff, and the enclosure needs somewhere for that water to go.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Substrate", value: "Bare bottom or paper towel is the safest, easiest option. Coco fiber or a soil-based mix works for planted, bioactive setups. Avoid sand, gravel, and wood chips, all carry a real impaction risk if ingested during a feeding strike.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Laying bin, females", value: "Even a female with no male present will produce eggs, and without somewhere appropriate to lay them, she's at real risk of egg-binding. Keep a moist sand or soil bin, roughly 5 to 10 inches deep, permanently available, not something you set up only once she shows signs of needing it.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Feeding schedule", value: "Babies at 1 to 3 months eat as much as they'll eat, roughly twice daily. Juveniles at 3 to 6 months take around 10 to 12 small crickets daily. Sub-adults at 6 to 12 months take 8 to 10 medium crickets daily or every other day. Adults from 12 months take roughly 4 to 6 feeders every other day, and adult females specifically should be fed a somewhat restricted amount.", source: "veiled-chameleon-feeding-guide" },
        { label: "Prey size", value: "Size prey to the space between your chameleon's eyes, nothing bigger.", source: "veiled-chameleon-feeding-guide" },
        { label: "Diet", value: "Primarily insectivorous, built on genuine variety: crickets, dubia roaches, black soldier fly larvae, superworms, silkworms, and locusts as rotating staples. Hornworms, waxworms, and butterworms are higher in fat or water and belong in treat territory, no more than about twice a week.", source: "veiled-chameleon-feeding-guide" },
        { label: "Supplements", value: "Dust feeders with plain calcium, no D3, no phosphorus, at nearly every feeding. Separately, use a calcium with D3 supplement about every other week, and a multivitamin with a real vitamin A source on roughly the same twice-monthly schedule. D3 specifically can become toxic in excess, which is exactly why it's dosed less often than plain calcium.", source: "veiled-chameleon-feeding-guide" },
        { label: "Gut-loading", value: "Gut-load feeder insects on collard greens, mustard greens, dandelion, and squash for 24 to 48 hours before offering them.", source: "veiled-chameleon-feeding-guide" },
        { label: "Handling", value: "Solitary, territorial display animals that generally don't tolerate handling well. Approach slowly from below with your palm open and let the chameleon choose to climb onto your hand rather than grabbing from above, which reads as a predator attack. Keep sessions infrequent.", source: "veiled-chameleon-handling-guide" },
        { label: "Reading a defensive display", value: "Hissing, gaping, inflating or flattening the body, and darkening color are all stress and defense signals. A darkened, gaping chameleon isn't aggressive in the way that word implies, it's frightened, and treating the display as a warning to back off gets better results.", source: "veiled-chameleon-handling-guide" },
        { label: "Rearing and company", value: "Hatchlings reared in isolation for their first two months grew into animals that were more submissive, darker and duller in color, and worse at finding food. That is not a license to house adults together, because adults are territorial and cohabiting them goes badly.", source: "veiled-chameleon-enrichment-guide" },
        { label: "Budget", value: "$20 to $100 for a captive-bred juvenile, and roughly $400 to $800 for the upfront setup. Experienced keepers commonly report around $500 for a complete single-animal setup, with elaborate builds reaching $1,200 or more.", source: "veiled-chameleon-cost-guide" },
        { label: "The emergency that costs most", value: "Egg-binding in females is the emergency risk: medical management runs $200 to $400, and surgery can run $800 to $1,500 or more.", source: "veiled-chameleon-cost-guide" },
        { label: "Lifespan", value: "Males commonly live 6 to 8 years. Females typically live considerably shorter, often just 2 to 6 years, and many don't make it past 2 to 3, driven by the physical toll of producing egg clutches.", source: "veiled-chameleon-cost-guide" },
        { label: "Adult size", value: "Males 18 to 24 inches (46 to 61 cm), females 10 to 14 inches (25 to 36 cm)." },
        { label: "Quarantine", value: "A new lizard can look completely healthy while it is still shedding mites or a fatal virus, so a real quarantine runs months rather than weeks, in its own enclosure in a separate room, with a fecal exam and a vet workup before it meets an established pet.", source: "reptile-quarantine-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture. For an overhead source, follow your controller's own instruction and confirm the result with independent checks.", source: "reptile-heating-thermostats-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact with the chameleon, its enclosure, or anything that has touched either. Never clean the enclosure or its water bowl in a kitchen sink or a shared bathtub. Children younger than 5 should not handle or touch reptiles or their environments.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage or a sitter", value: "Check this species' tank setup guide for the documented nighttime low and use that as the floor, which for a veiled chameleon is the 55 to 65°F night drop it already wants.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "veiled-chameleon-health-issues-guide",
      callNow: [
        "A soft or bendable rubber jaw, curved or broken limbs, tremors, or an inability to grip branches or shoot the tongue",
        "In a female: restlessness, digging without producing eggs, straining, lethargy, and swelling",
        "Eye discharge, or turret abscesses and infections",
        "Wheezing, gaping, and visible mucus",
      ],
      vetLine: "Egg-binding is the emergency: it can kill within 24 hours, and severe cases often require surgery. Metabolic bone disease caught early is only partly reversible and advanced cases are permanent, so it is a vet visit rather than a wait. Sky-blue spots on the flanks are a normal sign after a female has successfully laid, worth knowing so you don't mistake healthy post-laying color for illness.",
    },
    routes: [
      { slug: "veiled-chameleon-cost-guide", line: "$20 to $100 for the animal, $400 to $800 for the setup, and why a female's vet bill is the line that matters." },
      { slug: "veiled-chameleon-tank-setup-guide", line: "24x24x48 as the floor, the thermal gradient, UVB distance, the laying bin, and why the dripper is not optional." },
      { slug: "veiled-chameleon-feeding-guide", line: "Portions by age, the eye-spacing prey rule, and the supplement schedule that decides whether this animal gets bone disease." },
      { slug: "veiled-chameleon-handling-guide", line: "Why this is a display animal, what gaping and darkening actually mean, and how to pick one up when you must." },
      { slug: "veiled-chameleon-health-issues-guide", line: "Metabolic bone disease, egg-binding, eye problems, respiratory infection, and the signs that mean a vet today." },
      { slug: "veiled-chameleon-enrichment-guide", line: "The isolation-rearing study done on this exact species, planting density, branch diameters, and prey release." },
      { slug: "veiled-chameleon-legal-guide", line: "The two places that ban every lizard without naming one, the permit states, and why your city matters." },
    ],
    buyList: [
      "24x24x48 inch screen or hybrid enclosure, larger if the space allows",
      "Linear T5 HO UVB fixture and tube, ReptiSun 5.0 or Arcadia 6%",
      "Basking bulb",
      "Thermostat, thermometer and hygrometer",
      "Dripper system or automatic mister",
      "Drainage tray or setup for misting runoff",
      "Live plants: pothos, hibiscus, ficus, parlor palm",
      "Branches at varied diameters",
      "Laying bin with 5 to 10 inches of moist sand or soil, for females",
      "Plain calcium without D3 or phosphorus",
      "Calcium with D3, and a multivitamin with a real vitamin A source",
      "Gut-load greens: collard, mustard, dandelion, squash",
      "Varied feeder insects",
      "Reptile vet contact",
    ],
    faqs: [
      { q: "What size enclosure does an adult veiled chameleon need?", a: "24x24x48 inches is the practical floor for an adult, and 4x2x4 feet is better if the space is there. Because they hit adult size in 6 to 8 months, buy the adult enclosure up front rather than planning an upgrade." },
      { q: "Why can't I just use a water dish?", a: "Standing water does not read as drinking water to this species. Only moving droplets on leaves and branches get a response, so refilling a dish more often will not fix hydration. The dripper or misting system is the essential piece, not an accessory." },
      { q: "What is the correct calcium and vitamin schedule for a veiled chameleon?", a: "Plain calcium, no D3 and no phosphorus, on nearly every feeding. Calcium with D3 goes on about every other week, and a multivitamin carrying a real vitamin A source runs on that same twice-monthly schedule. Excess D3 can turn toxic, which is why it's dosed less often." },
    ],
  },
];
