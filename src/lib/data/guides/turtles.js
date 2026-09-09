export const turtleGuides = [
  {
    id: "box-turtle",
    name: "Box Turtle",
    emoji: "🐢",
    difficulty: "Intermediate",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/box-turtle.jpg",
    tagline: "The self-closing, woodland wanderer that can live for over 100 years!",
    funFact: "Box turtles have a hinged plastron (lower shell) that closes so tightly that no predator can get in. They are the only turtles that can completely seal themselves inside their shell!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Quarantine, outdoor
    // fencing, brumation, hygiene, and the cold-stress line cite the shared
    // reptile and chelonian guides in the sidebar's Health and More list.
    // Reconciled 2026-09-09 after the box turtle set test
    // (docs/READER_REVIEWS.md). The old hub's basking spot (85 to 88°F),
    // UVB strength (6 to 12%), 6 inch substrate, juvenile protein share
    // (60 to 70%), and cost tables were all figures no deep dive carried;
    // they are gone rather than moved.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "Several states genuinely restrict or ban this outright, and a legally purchased, captive-bred box turtle does not come with zero conditions either: Florida, West Virginia, and a handful of other states attach real caps or paperwork requirements even to turtles you bought fair and square.", source: "box-turtle-legal-guide" },
        { label: "Quarantine", value: "A minimum of six months, kept completely separate from any other chelonian in the house, with lab testing during it. A two or three week quarantine, common advice for other reptiles, is not long enough for this specific disease.", source: "chelonian-herpesvirus-quarantine-guide" },
        { label: "Enclosure", value: "36 by 18 inches is a workable minimum, but larger is considerably better, closer to 5.5 feet by 3 feet for an eastern box turtle, or around 4 feet by 2 feet for the somewhat smaller ornate box turtle. Floor space matters far more than height.", source: "box-turtle-tank-setup-guide" },
        { label: "Outdoor pen", value: "VCA Animal Hospitals' box turtle housing guidance calls for burying fencing 6 to 12 inches deep around the perimeter, or a solid barrier of brick or rock laid along it as an alternative to buried mesh.", source: "outdoor-reptile-housing-guide" },
        { label: "Temperature", value: "VCA puts the basking zone at 90 to 100°F and the cooler end at roughly 70 to 75°F, and says extra heat and light are not necessary overnight as long as the enclosure holds 65 to 70°F.", source: "box-turtle-tank-setup-guide" },
        { label: "Outdoors", value: "Bring a box turtle indoors once the temperature drops below 60°F.", source: "box-turtle-tank-setup-guide" },
        { label: "Humidity", value: "Relatively humid, 60 to 80%. Mist daily and provide a shallow water dish large enough for your turtle to genuinely soak in. Hatchlings and young turtles dehydrate especially easily and need consistently moist substrate.", source: "box-turtle-tank-setup-guide" },
        { label: "Substrate", value: "Wood chips or a topsoil and coconut fiber mix, at least 2 to 3 inches deep to support burrowing. Avoid gravel, sand, additive-laden potting soil, crushed walnut shells, and cat litter entirely.", source: "box-turtle-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb (6% strength or the equivalent Zoo Med ReptiSun 5.0 T5 HO) in a reflective fixture, targeting a basking-area UV index of 3.0 to 4.0. Run a longer photoperiod in summer, around 14 hours, tapering to about 10 hours in winter.", source: "box-turtle-tank-setup-guide" },
        { label: "Land and water", value: "Both land and shallow water access, non-negotiable for this species, a dry-only or water-only setup doesn't match how box turtles actually live. A 4 to 5 inch opaque barrier along the front glass helps curb the stress-driven pacing that clear-walled enclosures can cause.", source: "box-turtle-tank-setup-guide" },
        { label: "Diet", value: "Roughly half animal matter and half plant matter. Earthworms, insects, and occasional lean protein alongside leafy greens and vegetables make up a balanced diet for this species.", source: "box-turtle-tank-setup-guide" },
        { label: "Feeding and calcium", value: "Adults eat daily or every other day. Calcium with D3 is dusted on food two or three times a week.", source: "box-turtle-cost-guide" },
        { label: "Handling", value: "Support the full body with both hands, keep sessions short, and never drop, shake, or flip a box turtle upside down, this causes real stress and can interfere with normal breathing.", source: "box-turtle-handling-guide" },
        { label: "Enrichment", value: "Deep substrate that can be burrowed and pushed through first, then multiple hides and cover throughout, then floor space and outdoor time where climate and security allow. Do not keep a box turtle on newspaper or bare liner.", source: "box-turtle-enrichment-guide" },
        { label: "Brumation", value: "Box turtles run their own protocol rather than a tortoise's: a shorter 10 to 14 day fast and a band a touch warmer at 45 to 50 degrees Fahrenheit, both per Chicago Exotics Animal Hospital, with a vet exam before anything else changes.", source: "tortoise-brumation-guide" },
        { label: "Budget", value: "Roughly $345 to $453 upfront and roughly $40 to $70 monthly. A routine exotic exam runs $60 to $135, and an emergency visit starts around $150 and can reach $500 or more with treatment.", source: "box-turtle-cost-guide" },
        { label: "Adult size", value: "4.5 to 7 inches (11 to 18 cm)." },
        { label: "Lifespan", value: "Documented past 60 years of age, with very old individuals reaching more than 100.", source: "box-turtle-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Cold stress", value: "The signs that mean stop managing it yourself and call a vet are open-mouth breathing, audible wheezing or clicking, mucus around the nose or mouth, and any animal that stays limp or unresponsive once it's back in a normal temperature range.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "box-turtle-health-issues-guide",
      callNow: [
        "A misshapen shell, deformed legs, and slow or stunted growth (metabolic bone disease). Always see a vet",
        "Swollen, puffy eyes, sometimes sealed shut entirely, along with eye or nasal discharge and occasionally ear abscesses (vitamin A deficiency). See a vet",
        "Nasal discharge, mucus bubbles, wheezing, open-mouth breathing, and lethargy (respiratory infection). Always see a vet, this will not resolve without antibiotic treatment",
        "Discolored patches on the shell with a foul odor (shell rot). See a vet",
        "Diarrhea and weight loss, which a heavier internal parasite load causes. A vet is required for diagnosis and treatment",
      ],
      vetLine: "A reptile-experienced vet with chelonian experience, found before you need one. Because box turtles hide illness so effectively, an annual wellness exam is genuinely worth doing even when your turtle seems completely healthy, and vitamin A deficiency often sets the stage for a respiratory infection, so treating one without addressing the other doesn't fully solve the problem.",
    },
    routes: [
      { slug: "box-turtle-cost-guide", line: "The $345 to $453 setup where lighting and heating dominate, the $40 to $70 month, what an exotic exam and an emergency visit cost, and the sourcing question that comes before any of it." },
      { slug: "box-turtle-tank-setup-guide", line: "The 36x18 inch minimum and the sizes worth building to instead, the basking and cool-end targets, 60 to 80% humidity, burrowable substrate, T5 HO UVB, and why land and water are both non-negotiable." },
      { slug: "box-turtle-handling-guide", line: "Why this is a limited-handling species, the two-handed support, the hinged plastron that gives the animal its name, telling males from females, and shyness against actual illness." },
      { slug: "box-turtle-health-issues-guide", line: "Metabolic bone disease, vitamin A deficiency and the respiratory infection it sets up, shell rot, internal parasites, and why the annual exam matters on a turtle that looks fine." },
      { slug: "box-turtle-enrichment-guide", line: "The study that put 38 eastern box turtles on newspaper or on mulch and measured the difference in their blood, and the priority order it argues for." },
      { slug: "box-turtle-legal-guide", line: "State by state, where a box turtle is banned, capped, or permitted, why captive-bred does not always help, and the conditions that follow a turtle you already own." },
    ],
    buyList: [
      "36x18x18 inch enclosure, or an outdoor pen with the fencing buried",
      "T5 HO UVB fixture and bulb (6% strength, or a Zoo Med ReptiSun 5.0 T5 HO)",
      "Basking bulb and a basking dome fixture",
      "Deep topsoil and coconut fiber substrate, or wood chips",
      "Large soak-able water dish",
      "Hides, cork, and leaf litter for cover",
      "A 4 to 5 inch opaque barrier for the front glass",
      "Calcium with D3",
      "Earthworms, mealworms, dark leafy greens, and berries",
    ],
    faqs: [
      { q: "What size enclosure does a box turtle need?", a: "36 by 18 inches is the workable minimum, though bigger is considerably better: near 5.5 by 3 feet for an eastern, around 4 by 2 feet for the smaller ornate. Height barely matters for a ground-dwelling, burrowing animal." },
      { q: "Why do annual checkups matter for a box turtle that seems healthy?", a: "Box turtles hide illness well, so a yearly wellness exam with a reptile-experienced vet is worth doing on a turtle that looks fine. Catching something early, the vitamin A and respiratory infection pair especially, makes a real difference in outcome." },
      { q: "Is it legal to collect a box turtle from the wild?", a: "In most of their native US range, no, or only with heavy restriction. Several states prohibit wild collection entirely, with fines running into the thousands of dollars per animal. Both major box turtle species groups are also CITES Appendix II listed, and wild populations are generally declining." },
    ],
  },
  {
    id: "red-eared-slider",
    name: "Red-Eared Slider",
    emoji: "🐢",
    difficulty: "Advanced",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/red-eared-slider.jpg",
    tagline: "The iconic pet turtle that grows much larger than the pet store suggests!",
    funFact: "Red-eared sliders are one of the world's most invasive species. Released or escaped pets have established populations on every continent except Antarctica!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "100+ gallon enclosure or pond setup", low: 300, high: 700 },
        { item: "Powerful canister filter (2-3x tank volume)", low: 120, high: 250 },
        { item: "Large basking platform", low: 25, high: 50 },
        { item: "Strong UVB (T5 HO)", low: 60, high: 100 },
        { item: "Basking heat lamp", low: 20, high: 40 },
        { item: "Submersible water heater", low: 30, high: 60 },
        { item: "Water quality test kit", low: 15, high: 25 },
      ],
      annual: [
        { item: "Commercial turtle pellets", low: 40, high: 80 },
        { item: "Dark leafy greens", low: 60, high: 100 },
        { item: "UVB bulb replacement", low: 60, high: 100 },
        { item: "Filter media replacement", low: 40, high: 80 },
        { item: "Electricity (filter, heat, lighting)", low: 100, high: 180 },
        { item: "Annual vet wellness check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `The standard rule for red-eared slider housing is 10 gallons of water capacity per inch of shell length. A 10-inch adult female (females grow significantly larger than males) needs a 100-gallon or larger aquarium or stock tank. Many experienced keepers house adults in outdoor ponds in appropriate climates, which is close to ideal. The pet store 10-gallon starter kits sold with hatchlings are inadequate within months.

A large, elevated basking platform that allows the turtle to completely exit the water and dry off fully is essential. Turtles that cannot dry off completely develop shell rot and skin infections. Position a basking light over the platform to create a basking spot of 85 to 95 degrees F.

Water filtration is critically important. Red-eared sliders are extremely messy - they defecate in the water they eat in. A powerful canister filter rated for 2 to 3 times the tank volume is the minimum. Even with strong filtration, weekly 25 to 30% water changes are required. Water temperature should be maintained at 72 to 78 degrees F with a submersible aquarium heater.

Strong UVB lighting (T5 HO Reptisun 10.0 or equivalent) positioned over the basking platform is mandatory. UVB is essential for vitamin D3 synthesis and calcium metabolism. Without adequate UVB, turtles develop soft shell syndrome and metabolic bone disease over time.`,
      diet: `A varied, balanced diet is essential for long-term health. High-quality commercial turtle pellets (Mazuri Aquatic Turtle Diet, Zoo Med Natural Aquatic Turtle Food) should form the nutritional foundation - approximately 50% of the diet. These pellets are scientifically formulated to meet the turtle's nutrient requirements.

Supplement with dark leafy greens and aquatic vegetation: romaine lettuce (not iceberg - no nutrition), dandelion greens, kale, water hyacinth, duckweed, and aquatic plants. Plant matter becomes increasingly important as the turtle matures; adult sliders are significantly more herbivorous than juveniles.

Protein supplements include occasional feeder fish (small goldfish, guppies), cooked shrimp, earthworms, and mealworms. Juveniles benefit from more protein; limit protein for adults to prevent kidney stress. Feed juveniles daily and adults every other day.

Calcium supplementation: cuttlebone in the water and calcium-dusted food provides supplemental calcium. Vitamin A deficiency is common in sliders fed primarily pellets without vegetables - dark greens prevent this. Fresh water (changed at water changes) must always be available.`,
      enrichment: `Red-eared sliders are more intelligent than most people expect and will learn to associate their keeper with feeding time. Many sliders track movement outside their tank and approach the glass when they see their keeper - this is associative learning and a sign of normal, healthy cognitive engagement.

Provide underwater hiding spots: clay pots, PVC pipes, and smooth river rocks create visual cover and security. Vary the substrate (large smooth pebbles or bare bottom - avoid small gravel that can be ingested). Live or plastic aquatic plants provide cover and environmental complexity.

Target training using a small target stick tapped on the glass, with food as a reward, teaches the slider to touch the target voluntarily and can make veterinary handling much easier. Novel foods offered in different locations and ways provide foraging enrichment.

Outdoor pond time or pond housing in appropriate climates provides the richest possible environment: natural sunlight (the most effective UVB source), live aquatic prey, natural plant matter, and environmental complexity that indoor setups cannot replicate.`,
      health: `Water quality is the single most critical factor in red-eared slider health. Poor water quality causes the majority of health problems in captive sliders: shell rot (bacterial and fungal infection of the shell and skin), respiratory infections, eye infections, and general immune suppression. Test water weekly for ammonia, nitrite, nitrate, and pH. Ammonia and nitrite should always read zero. Nitrate should stay below 40 ppm. Weekly water changes and monthly deep cleans are minimum maintenance.

Shell rot begins as soft, discolored, or pitting areas on the shell. Early detection and treatment (cleaning, antifungal/antibacterial ointment under veterinary guidance, improved water quality, and adequate drying time on the basking platform) can resolve mild cases. Advanced shell rot penetrates the shell and bloodstream and requires aggressive veterinary treatment.

Vitamin A deficiency is common in sliders fed primarily commercial pellets without adequate vegetable variety. Signs include swollen, closed eyes (ear abscesses are a classic presentation), nasal discharge, and lethargy. Treatment requires veterinary vitamin A injection - never self-treat with over-the-counter supplements, as vitamin A overdose is toxic.

Metabolic bone disease from inadequate UVB causes soft shell and skeletal deformities. Annual wellness visits with a reptile vet experienced in chelonians (turtles and tortoises) are strongly recommended.`,
      checklist: ["100+ gallon enclosure (or pond)", "Powerful canister filter (2 to 3x tank volume)", "Large basking platform", "Strong UVB bulb (T5 HO)", "Basking heat lamp (85 to 95 degrees F)", "Water heater (75 to 80 degrees F)", "Commercial turtle pellets", "Dark leafy greens", "Water quality test kit", "Aquarium vacuum for substrate cleaning"],
    },
    faqs: [
      { q: "How big do red-eared sliders get?", a: "Females typically reach 10 to 12 inches shell length; males stay at 6 to 8 inches. This size is dramatically larger than the 4-inch hatchlings sold in pet stores. An adult female slider needs a minimum 100-gallon tank - the 10-gallon starter kits sold with hatchlings become inadequate within months. Research adult size requirements before acquiring any slider." },
      { q: "How long do red-eared sliders live?", a: "20 to 40 years in captivity with appropriate care - proper water quality, strong UVB, a balanced diet, and regular veterinary attention. This is a multi-decade commitment. Many sliders end up in rescue because their owners underestimated their adult size and lifespan. Outdoor pond housing in appropriate climates is often the best long-term solution for adults." },
      { q: "What do red-eared sliders eat?", a: "High-quality commercial aquatic turtle pellets should form about 50% of the diet. Supplement with dark leafy greens (romaine, dandelion greens, kale), aquatic plants, and occasional protein (feeder fish, cooked shrimp, earthworms). Juveniles eat more protein; adults become significantly more herbivorous. Feed in the water, where they naturally eat." },
      { q: "Do red-eared sliders need a filter?", a: "Yes - a powerful one. Red-eared sliders are extremely messy, defecating heavily in the water where they eat. A canister filter rated for 2 to 3 times the tank volume is the minimum. Even with strong filtration, weekly 25 to 30% water changes are required. Poor water quality causes the majority of health problems in captive sliders." },
      { q: "Are red-eared sliders legal to own?", a: "In many regions yes, but check local regulations carefully. They are one of the world's most invasive species - released or escaped pets have established wild populations on every continent except Antarctica. It is illegal to release them into the wild anywhere in the US. Some areas have restrictions on ownership. Sale of sliders with shells under 4 inches is illegal in the US under federal law." },
      { q: "Are red-eared sliders good pets for beginners?", a: "Despite being the most commonly sold pet turtle, not really. The 4-inch hatchlings in pet stores grow into 10 to 12 inch adults that need a 100+ gallon setup with serious filtration, and most of the sliders that end up surrendered to rescues got there because an owner didn't expect the adult size or the decades-long lifespan." },
    ],
  },
  {
    id: "red-footed-tortoise",
    name: "Red-Footed Tortoise",
    emoji: "🐢",
    difficulty: "Intermediate",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/red-footed-tortoise.jpg",
    tagline: "The tropical omnivore tortoise that splits the difference between Russian and sulcata!",
    funFact: "Unlike the strictly plant-eating Russian and sulcata tortoises, red-footed tortoises are true omnivores that eat carrion, insects, and land snails in the wild - a real taste for animal protein most pet tortoises never develop!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "Large indoor enclosure (adult) or humid outdoor pen", low: 250, high: 600 },
        { item: "Strong UVB (T5 HO Arcadia 12%)", low: 60, high: 100 },
        { item: "Basking bulb(s)", low: 25, high: 45 },
        { item: "Humidity-retaining substrate (cypress mulch/coco coir)", low: 30, high: 60 },
        { item: "Large soak dish", low: 15, high: 25 },
        { item: "Fogger or humidifier", low: 40, high: 90 },
      ],
      annual: [
        { item: "Fruit, leafy greens, and protein sources (snails, insects)", low: 150, high: 260 },
        { item: "Calcium and multivitamin supplements", low: 15, high: 25 },
        { item: "UVB bulb replacement", low: 60, high: 100 },
        { item: "Electricity (heat, lighting, humidifier)", low: 90, high: 160 },
        { item: "Annual vet wellness check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `Adult red-footed tortoises need at least 32 to 72 sq ft of floor space - smaller than a sulcata's eventual yard, but still a genuinely large indoor enclosure or outdoor pen, not a tabletop setup. In warm, humid climates, a secure outdoor pen with a heated, insulated shelter works well. Everyone else needs a large indoor tortoise enclosure with strong UVB (T5 HO Arcadia 12%) and a basking spot of 90 to 95 degrees F, with an ambient gradient of 75 to 85 degrees F and nighttime lows no cooler than 65 to 70 degrees F.

Humidity is the single biggest difference from the site's other tortoises: red-foots need ambient humidity of 70 to 80%, with a damp hide pushing even higher. Cypress mulch, coconut fiber, or a moisture-retaining topsoil mix holds humidity far better than the dry sand mixes used for sulcatas or Russian tortoises. Good ventilation still matters - the goal is a humid rainforest floor, not a stagnant box - so balance moisture with airflow to avoid respiratory problems.

A large, shallow soak dish should always be available; red-foots drink and soak often. Daily misting or a reptile fogger helps maintain humidity between waterings, especially in drier climates or centrally heated homes.`,
      diet: `Red-footed tortoises are genuine omnivores, and this is the most important way they differ from the sulcata and Russian tortoises on this site. A balanced diet runs roughly 90% plant matter and 10% animal matter: about 55% fruit, flowers, and leafy greens; 35% grasses and vegetables; and a real 10% slice of protein and mushrooms. Appropriate fruit includes papaya, mango, banana, and berries; leafy greens should be varied (collard, mustard, dandelion, endive); protein sources include earthworms, land snails, and occasional cooked lean meat or a small amount of low-iron commercial carnivore diet.

This is a meaningfully different feeding plan than a sulcata or Russian tortoise, both of which should almost never get animal protein or much fruit. Skipping animal protein entirely is a real health risk for this species specifically - tortoises raised on a plant-only diet frequently develop hind-leg weakness or paralysis, along with poor fertility and weak hatchlings, so don't default to a hay-and-weeds-only routine out of habit if you're used to keeping an arid-species tortoise.

Feed juveniles daily; shift adults to every other day to prevent obesity. Dust food with calcium (without D3 most feedings, with D3 twice weekly for indoor animals without natural sunlight). Fresh water should always be available in a soakable dish.`,
      enrichment: `Red-footed tortoises are active, curious foragers that do best in a densely planted, naturalistic enclosure - leaf litter, logs, cork bark, and low plants to push through and investigate. Their omnivorous diet also makes foraging enrichment easy: scattering food items, hiding snails or worms in leaf litter, and offering a rotating variety of fruit and greens keeps them engaged.

Many keepers find red-foots more food-motivated and personable than drier-climate tortoise species, readily approaching for feeding and recognizing their keeper over time. A humid, planted vivarium with climbing opportunities over logs and rocks also lets them express natural rainforest-floor behavior far more than a bare tortoise table would.

Outdoor time in warm, humid weather on pesticide-free grass is excellent enrichment where climate allows, though unlike a Russian tortoise, a red-foot cannot handle cold snaps and should be brought inside well before temperatures drop.`,
      health: `Low humidity, not excess humidity, is the main husbandry risk for red-footed tortoises - the opposite failure mode from the site's arid-species tortoises. Insufficient humidity causes shell pyramiding, dehydration, and irregular shell growth just as surely as an incorrect diet does. Check ambient humidity with a reliable hygrometer rather than guessing.

Diet-related problems are the other major risk, and they cut both ways: too much protein or fruit causes the same kind of shell and organ problems seen in overfed sulcatas, while too little animal protein causes hind-leg weakness or paralysis, poor fertility, and weak hatchlings in this species specifically. Getting the roughly 90/10 plant-to-protein balance right matters more here than in a strictly herbivorous tortoise.

Red-footed tortoises do not need to brumate and should not be allowed to get cold enough to attempt it - unlike a Russian tortoise, they have no natural cold-hardiness, and a botched brumation attempt can be fatal. Annual wellness checks with a chelonian-experienced reptile vet are recommended for this long-lived species.`,
      checklist: [
        "Large indoor enclosure (32-72 sq ft) or humid outdoor pen",
        "Strong UVB (T5 HO Arcadia 12%)",
        "Basking spot (90 to 95 degrees F)",
        "Ambient gradient (75 to 85 degrees F, 65 to 70 degrees F at night)",
        "Humidity-retaining substrate (cypress mulch/coco coir)",
        "Fogger or humidifier (70 to 80% ambient humidity)",
        "Large soak dish (always available)",
        "Fruit, leafy greens, and occasional animal protein",
        "Calcium + multivitamin supplements",
        "Reptile vet with chelonian experience",
      ],
    },
    faqs: [
      { q: "How big do red-footed tortoises get?", a: "Adults typically reach 11 to 16 inches in shell length, with exceptional individuals up to 20 inches. That puts them squarely between the [Russian tortoise](/guides/russian-tortoise/) (5 to 10 inches) and the [sulcata tortoise](/guides/sulcata-tortoise/) (24 to 36 inches and 70+ lbs) - a big part of why red-foots are popular with keepers who want more tortoise than a Russian but nowhere near a sulcata's eventual size." },
      { q: "What do red-footed tortoises eat?", a: "Genuine omnivores - roughly 90% plant matter (fruit, flowers, and leafy greens) and 10% animal matter (earthworms, land snails, occasional cooked lean meat). This is a real, important difference from strictly plant-eating tortoises like the sulcata and Russian tortoise. Skipping the protein isn't just a diet preference either - red-foots raised without any animal protein commonly develop hind-leg weakness and fertility problems. Feed juveniles daily and adults every other day." },
      { q: "Do red-footed tortoises need to hibernate?", a: "No. Unlike the Russian tortoise, which brumates through cold Central Asian winters, red-footed tortoises come from warm, humid, equatorial South America and have no natural cold-hardiness. Never let a red-foot get cold enough to attempt brumation - it should stay warm and active year-round." },
      { q: "How much humidity do red-footed tortoises need?", a: "A lot - 70 to 80% ambient humidity, well above what a sulcata or Russian tortoise wants. This is the biggest husbandry difference between a red-foot and the site's other tortoises. Moisture-retaining substrate, a large soak dish, and a fogger or regular misting are typically needed to hit that range indoors, especially in dry climates." },
      { q: "How long do red-footed tortoises live?", a: "50 to 70 years or more with good care, and some captive individuals are reported near 90. Like any pet tortoise, this is a multi-decade commitment that outlasts many keepers' living situations, so plan for long-term care the same way you would with a Russian or sulcata tortoise." },
      { q: "Are red-footed tortoises good pets for beginners?", a: "A reasonable step up from a Russian tortoise rather than a true first tortoise - the omnivorous diet and high humidity requirement take more attention to get right than a simple hay-and-weeds herbivore setup. They're a popular choice for keepers who've kept a Russian tortoise before and want more size without sulcata-level commitment." },
    ],
  },
  {
    id: "russian-tortoise",
    name: "Russian Tortoise",
    emoji: "🐢",
    difficulty: "Intermediate",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/russian-tortoise.jpg",
    tagline: "The compact, hardy tortoise that can live over 50 years with proper care!",
    funFact: "Russian tortoises are one of the world's most cold-tolerant tortoise species. They can survive sub-zero temperatures in the wild by hibernating (brumating) deep underground for months at a time!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Hygiene cites the shared
    // reptile hygiene guide in the sidebar's Health and More list. Reconciled
    // 2026-09-08 after the Russian tortoise set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "One state, Colorado, bans it, four require a permit, four attach a condition, and Hawaii, which bans almost everything, expressly allows it. Forty-three states place no rule on it at all.", source: "russian-tortoise-legal-guide" },
        { label: "Enclosure", value: "A 4x2x2 ft tortoise table, about 8 square feet, is the absolute indoor minimum, genuinely a minimum rather than a goal. Sources disagree on the target: at least 12 square feet, or our own functional recommendation of roughly 7x3.5 ft, about 24 square feet.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Temperature", value: "Basking 95 to 100°F at the surface, cool side in the 70s°F. Night drops to about 60°F are fine, and most homes need no supplemental night heat.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Humidity", value: "Ambient 30 to 50%, low and dry for this arid species, but a moist hide lined with peat moss for a humid microclimate to hydrate and shed in.", source: "russian-tortoise-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO tube (Arcadia 12% or Zoo Med ReptiSun 10.0), covering a third to half the enclosure, for a basking-area UVI near 3.0 to 4.0. Coil and compact bulbs aren't adequate.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Substrate", value: "A 50/50 topsoil and coconut coir mix, or a similar sand and loam blend, deep enough to burrow in and kept slightly damp. No pure sand.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Diet", value: "Unlimited grass hay and a rotation of wild weeds, dandelion, plantain, and clover among them, as the staple, rather than cultivated grocery greens. High-oxalate greens like spinach and chard stay off the rotation. Fruit minimal to none.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Brumation", value: "Physiologically programmed to brumate 2 to 4 months over winter at 40 to 55°F, but indoor keepers can skip it entirely by maintaining full lighting, heat, and feeding year-round.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Handling", value: "An observation pet, not one built for regular handling. House males separately, they ram and bully other tortoises. Skilled climber and digger, more of an escape risk than it looks.", source: "russian-tortoise-handling-guide" },
        { label: "Budget", value: "$50 to $150 for a hatchling ($225 to $400 older captive-bred). $372 to $775 to set up. $365 to $715 a year.", source: "russian-tortoise-cost-guide" },
        { label: "Adult size", value: "5 to 10 inches." },
        { label: "Lifespan", value: "40 years or more typical, some individuals reaching 50-plus.", source: "russian-tortoise-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the tortoise out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "russian-tortoise-health-issues-guide",
      callNow: [
        "Wheezing, nasal discharge, open-mouth breathing, or lethargy (respiratory infection, does not resolve on its own)",
        "Soft, discolored, or foul-smelling patches on the shell (shell rot, can progress to life-threatening septicemia)",
        "Watery, jelly-like urine, or straining to urinate",
        "A soft or deformed shell with weak limbs",
      ],
      vetLine: "A reptile-experienced vet, found before you need one. Run a fecal test on any newly acquired tortoise regardless of symptoms; respiratory infection needs antibiotics and doesn't wait.",
    },
    routes: [
      { slug: "russian-tortoise-cost-guide", line: "$50 to $400 for the tortoise, $372 to $775 to set up, and why the 40-plus year lifespan should decide the purchase." },
      { slug: "russian-tortoise-tank-setup-guide", line: "The real floor target beyond the 8 sq ft minimum, the 95-100°F basking spot, low ambient humidity with a moist hide, and the brumation decision indoor keepers get to make." },
      { slug: "russian-tortoise-handling-guide", line: "Why this is an observation pet, the talented climbing and digging that makes escapes easy, and why males need separate enclosures." },
      { slug: "russian-tortoise-health-issues-guide", line: "Metabolic bone disease, respiratory infection, shell rot, pyramiding, parasites, and the kidney infection specific to this genus." },
      { slug: "russian-tortoise-enrichment-guide", line: "Deep diggable substrate, scatter feeding over a bowl, and why secure outdoor time is the richest enrichment available." },
    ],
    buyList: [
      "4x2 ft (or larger) open-top tortoise table",
      "T5 HO UVB fixture and bulb (Arcadia 12% or Zoo Med ReptiSun 10.0)",
      "Halogen basking bulb and a dimming thermostat",
      "Infrared temperature gun",
      "Digital probe thermometer and hygrometer",
      "Deep topsoil/coconut coir substrate",
      "3 hides (warm, cool, moist)",
      "Shallow water dish, feeding tile, and a digital gram scale",
      "Calcium (no added phosphorus) and multivitamin supplements",
    ],
    faqs: [
      { q: "What size enclosure does a Russian tortoise need?", a: "4 feet by 2 by 2 is the absolute indoor minimum, though something nearer 7 feet by 3.5 is the comfortable working size. Use an open-topped tortoise table rather than a closed glass aquarium." },
      { q: "Is a respiratory infection an emergency in a Russian tortoise?", a: "Yes. It's caused by temperatures running chronically low, excess humidity, or drafts, and it does not resolve on its own, it needs antibiotics. Always see a vet immediately, and raise temperature and ensure hydration while arranging care." },
      { q: "Do Russian tortoises need to brumate?", a: "They're physiologically programmed to, entering roughly 2 to 4 months of dormancy over winter at 40 to 55°F. Indoor keepers have a real choice most others don't: by maintaining full lighting, heat, and feeding year-round, you can keep your tortoise active through winter instead of brumating it." },
    ],
  },
  {
    id: "sulcata-tortoise",
    name: "Sulcata Tortoise",
    emoji: "🐢",
    difficulty: "Advanced",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/sulcata-tortoise.jpg",
    tagline: "The third-largest tortoise: a lifetime commitment that may outlive you!",
    funFact: "Sulcata tortoises (African spurred tortoises) are the third-largest tortoise species on Earth. A hatchling the size of a ping-pong ball can grow to over 100 lbs and 3 feet long, in the same home!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Adult outdoor housing varies enormously (fencing, heated shelter
    // construction), so these numbers are wide on purpose.
    costs: {
      setup: [
        { item: "Indoor tortoise table (for hatchlings/juveniles)", low: 150, high: 300 },
        { item: "Outdoor enclosure materials + buried fencing", low: 300, high: 1500 },
        { item: "Heated shelter (materials + heater)", low: 200, high: 600 },
        { item: "Strong UVB (Arcadia 12%, indoor setups)", low: 60, high: 100 },
        { item: "Basking bulb", low: 20, high: 40 },
      ],
      annual: [
        { item: "Grass hay (Bermuda, orchard, Timothy)", low: 100, high: 200 },
        { item: "Edible weeds and leafy greens", low: 60, high: 120 },
        { item: "Calcium supplements", low: 15, high: 25 },
        { item: "Electricity (heated shelter)", low: 150, high: 350 },
        { item: "Annual vet wellness check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: "Baby sulcatas can start indoors, but adults require large outdoor enclosures. Adults need at least 100+ square feet of outdoor space, and many keepers give them an entire yard. Outdoor walls must be buried 12 to 18 inches underground (they will dig under anything). A heated shelter with temperatures maintained at 60 degrees F+ is essential for cooler climates. Indoor basking spot: 95 to 105 degrees F. Strong UVB (Arcadia 12%) is mandatory. These tortoises will eventually demolish most enclosure furniture. Plan accordingly.",
      diet: `Sulcata tortoises require a high-fiber, very low protein, low sugar diet. The primary food source should be grass - Bermuda grass, orchard grass, Timothy hay, and other grass hays make up 70 to 80% of the diet. Unlimited hay must always be available. An outdoor enclosure with natural grass pasture is the ideal setup.

Supplement with edible weeds and leafy greens: dandelion (entire plant including flowers), clover, mulberry leaves, cactus pads (Opuntia, spines removed), grape leaves, and hibiscus flowers. These foods are nutrient-dense and appropriate for sulcatas. Do not offer fruit, high-oxalate foods, animal protein, or excessive amounts of commercial tortoise pellets - these cause the shell pyramiding and organ damage that plague improperly fed sulcatas.

Calcium supplementation (without D3 for outdoor animals that get natural sunlight, with D3 for indoor animals) 2 to 3 times per week. Fresh water always available in a large, shallow dish they can soak in - sulcatas drink and soak frequently.`,
      enrichment: `Sulcata tortoises are powerful, surprisingly fast, and incredibly motivated to dig and move. They need large areas to roam, graze, and dig. A minimum of 100 square feet of outdoor space for an adult - though a full yard is better. Natural grass pastures provide the richest enrichment and the most appropriate diet simultaneously.

Provide varied terrain: mounds of soil for digging, large flat rocks for basking, logs and boulders to navigate, and varied plant material to graze on. Sulcatas recognize their keepers and approach for food and interaction. Many develop distinct personalities and are genuinely engaging animals.

Be aware of their physical power: adult male sulcatas weigh 100 to 200+ lbs and can ram, knock over, and destroy most enclosure furniture and lightweight fencing. Build for their adult size and strength from the beginning. They can knock over small children and animals. Always supervise interactions.`,
      health: `Shell pyramiding (raised, bumpy shell scutes) is the most visible sign of poor husbandry in sulcatas and is caused by excessive protein intake, low humidity during growth, and rapid growth rate from inappropriate feeding. Once pyramiding occurs it is irreversible. Correct diet - primarily grass and fibrous weeds with minimal protein - and appropriate humidity levels during growth prevent it.

Respiratory infections occur in cool, damp conditions. Provide a heated shelter that maintains 60 degrees F or higher at night, and a dry environment. Hatchlings are significantly more delicate than adults and require careful temperature management and humidity control during their first year.

Sulcatas regularly outlive their owners - they can live 70 to 150+ years. This is not a decision to make lightly. Research reputable tortoise rescue organizations and create a contingency plan for the animal before acquiring one. A reptile vet with chelonian experience is an essential long-term partner for sulcata ownership.`,
      checklist: [
        "Large outdoor enclosure (100+ sq ft for adults)",
        "Underground-buried walls (12 to 18 inch deep)",
        "Heated shelter (60 degrees F+ minimum at night)",
        "Strong UVB (Arcadia 12% for indoor setups)",
        "Basking spot (95 to 105 degrees F)",
        "Unlimited Bermuda/orchard/timothy grass and hay",
        "Edible weeds (dandelion, clover, cactus pads)",
        "Calcium supplementation (2 to 3x/week)",
        "Large shallow water dish (always available)",
        "Reptile vet + long-term rehoming plan in place",
      ],
    },
    faqs: [
      { q: "How big do sulcata tortoises get?", a: "Sulcatas are the third-largest tortoise species in the world. Adults commonly reach 24 to 36 inches shell length and 80 to 150+ lbs, with some exceptional males exceeding 200 lbs. That palm-sized hatchling at the pet store will become an animal that requires a yard and a heated shelter. Research adult size and space requirements very carefully before acquiring a sulcata." },
      { q: "How long do sulcata tortoises live?", a: "70 to 150+ years - they will almost certainly outlive you. Before acquiring a sulcata, establish a contingency rehoming plan with a reputable tortoise rescue organization. This is a responsibility that may need to be passed to the next generation. Many sulcatas end up in rescue because their owners were not prepared for their adult size and lifespan." },
      { q: "What do sulcata tortoises eat?", a: "80% of the diet should be grass - Bermuda grass, orchard grass, Timothy hay - with edible weeds and leafy greens as a supplement. Do not feed fruit, animal protein, or excessive commercial tortoise pellets. These cause the shell pyramiding and organ damage common in improperly fed sulcatas. A natural grass pasture outdoor enclosure is ideal." },
      { q: "What causes shell pyramiding in sulcatas?", a: "Pyramiding - raised, bumpy scutes - is caused by excessive protein or fruit in the diet, rapid growth from inappropriate high-calorie feeding, and low humidity during the growth phase. Once pyramiding occurs, it is irreversible. The only prevention is a correct high-fiber, low-protein diet and appropriate growth rate from hatching." },
      { q: "Can I keep a baby sulcata tortoise indoors?", a: "Yes, but only temporarily. Hatchlings and juveniles can be kept indoors with a T5 HO UVB lamp (Arcadia 12%) and basking spot of 95 to 105 degrees F. As they grow - which happens faster than most people expect - they need progressively larger outdoor enclosures. An adult sulcata cannot be kept indoors in any practical sense." },
      { q: "Are sulcata tortoises good pets for beginners?", a: "No, and this is one of the most consequential mismatches in the pet trade. A ping-pong-ball-sized hatchling grows into an animal that can exceed 150 pounds, needs 100+ square feet of outdoor space, and can outlive its owner by decades. Sulcatas are one of the most commonly surrendered tortoises specifically because they're sold to beginners who had no idea what they were taking on." },
      { q: "How can I tell if my sulcata tortoise is male or female?", a: "It's genuinely difficult before the tortoise is several years old and around 8 to 10 inches in shell length - sulcatas don't show reliable external differences as hatchlings. Once mature, males have a longer, thicker tail, a more concave plastron to accommodate mating, and larger, more pronounced anal scutes than females. Males also tend to grow a bit larger overall. For a young tortoise, patience is the honest answer more often than any quick trick." },
      { q: "How does a sulcata tortoise compare to smaller tortoises like the Russian or red-footed?", a: "Sulcatas are dramatically larger than both - a 100+ lb adult next to a 5 to 10 inch Russian tortoise or an 11 to 16 inch red-footed tortoise. The three also come from very different climates: Russian tortoises come from cold Central Asian steppe and brumate, red-footed tortoises come from humid tropical South America and don't, and sulcatas come from the hot, dry Sahel. If a sulcata's eventual size feels like too much responsibility, the [red-footed tortoise](/guides/red-footed-tortoise/) or [Russian tortoise](/guides/russian-tortoise/) are worth considering instead." },
    ],
  },
];
