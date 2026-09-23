export const turtleGuides = [
  {
    id: "box-turtle",
    name: "Box Turtle",
    emoji: "🐢",
    difficulty: "Intermediate",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/box-turtle.jpg",
    tagline: "The self-closing, woodland wanderer that can live for over 100 years!",
    seoTitle: "Box Turtle Care Guide: Setup, Diet, and Brumation",
    seoDescription: "Box turtles live past 60 and need more than a tank: the enclosure worth building, humidity and UVB, a diet that shifts with age, brumation, and state laws.",
    funFact: "Box turtles have a hinged plastron (lower shell) that closes so tightly that no predator can get in. They are the only turtles that can completely seal themselves inside their shell!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Quarantine, outdoor
    // fencing, brumation, hygiene, and the cold-stress line cite the shared
    // reptile and chelonian guides in the sidebar's Health and More list.
    // Rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    // Reconciled 2026-09-09 after the box turtle set test
    // (docs/READER_REVIEWS.md). The old hub's basking spot (85 to 88°F),
    // UVB strength (6 to 12%), 6 inch substrate, juvenile protein share
    // (60 to 70%), and cost tables were all figures no deep dive carried;
    // they are gone rather than moved.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal", value: "Several states restrict or ban it outright, and a captive-bred turtle still comes with conditions: Florida, West Virginia, and others attach caps or paperwork. Taking one from the wild is restricted or banned in Indiana, North Carolina, Connecticut, Texas, and West Virginia.", source: "box-turtle-legal-guide" },
        { label: "Quarantine", value: "A minimum of six months, completely separate from any other chelonian, with lab testing. Two or three weeks is not long enough for the herpesvirus.", source: "chelonian-herpesvirus-quarantine-guide" },
        { label: "Enclosure", value: "36 by 18 inches is a workable minimum, and closer to 5.5 by 3 feet for an eastern or 4 by 2 for an ornate is much better. Floor space over height, with land and shallow water both, and a 4 to 5 inch opaque barrier along the front glass against pacing.", source: "box-turtle-tank-setup-guide" },
        { label: "Outdoor pen", value: "Fencing buried 6 to 12 inches, or a solid brick or rock barrier along the perimeter. Indoors once the temperature drops below 60°F.", source: "outdoor-reptile-housing-guide" },
        { label: "Temperature", value: "Basking 90 to 100°F, cool end 70 to 75°F, and no overnight heat as long as the enclosure holds 65 to 70°F.", source: "box-turtle-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80%, misted daily, with a shallow dish big enough to soak in. Hatchlings dehydrate fast and need consistently moist substrate.", source: "box-turtle-tank-setup-guide" },
        { label: "Substrate", value: "Wood chips or a topsoil and coconut fiber mix, 2 to 3 inches deep for burrowing. No gravel, sand, additive potting soil, walnut shell, or cat litter.", source: "box-turtle-tank-setup-guide" },
        { label: "UVB", value: "A 6% T5 HO in a reflective fixture at a UV index of 3.0 to 4.0, around 14 hours a day in summer tapering to about 10 in winter.", source: "box-turtle-tank-setup-guide" },
        { label: "Diet", value: "Roughly half animal, half plant: earthworms, insects, occasional lean protein, with leafy greens and vegetables.", source: "box-turtle-tank-setup-guide" },
        { label: "Feeding and calcium", value: "Adults daily or every other day, with calcium and D3 dusted on two or three times a week.", source: "box-turtle-cost-guide" },
        { label: "Handling", value: "Both hands under the full body, short sessions, never dropped, shaken, or flipped. Hiding with lethargy and reduced appetite is a vet visit, not shyness.", source: "box-turtle-handling-guide" },
        { label: "Enrichment", value: "Deep substrate to burrow through first, then hides and cover throughout, then floor space and outdoor time. Never on newspaper or a bare liner.", source: "box-turtle-enrichment-guide" },
        { label: "Brumation", value: "Its own protocol, not a tortoise's: a 10 to 14 day fast and a band of 45 to 50 degrees Fahrenheit, with a vet exam first.", source: "tortoise-brumation-guide" },
        { label: "Budget", value: "Roughly $345 to $453 upfront and $40 to $70 a month. A routine exam is $60 to $135; an emergency starts around $150 and can reach $500.", source: "box-turtle-cost-guide" },
        { label: "Adult size", value: "4.5 to 7 inches (11 to 18 cm)." },
        { label: "Lifespan", value: "Documented past 60, with very old individuals over 100.", source: "box-turtle-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap after any contact, and never clean the enclosure or water dish in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Diet by age", value: "Young turtles up to roughly four to six years are primarily carnivores, and adults tend toward herbivorous.", source: "box-turtle-feeding-guide" },
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
      { slug: "box-turtle-feeding-guide", line: "The plant and animal split and how it shifts with age, how often an adult eats, the greens to keep off the base, and two calcium schedules." },
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
    seoTitle: "Red-Eared Slider Care Guide: Tank, Diet, and Health",
    seoDescription: "Plan for the adult slider: 10 gallons of water per inch of shell, water and basking temperatures, mandatory UVB, filtration, and a diet that shifts with age.",
    funFact: "Red-eared sliders are one of the world's most invasive species. Released or escaped pets have established populations on every continent except Antarctica!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Hygiene cites the shared reptile
    // guides in the sidebar's Health and More list. Rewritten to the template
    // shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md): the tank row says the
    // hatchling tank is temporary, the refusal window is the feeding guide's
    // 2 to 3 weeks outside brumation, and brumation is on the card. Reconciled
    // 2026-09-09 after the
    // red-eared slider set test (docs/READER_REVIEWS.md). The old hub's
    // 100-gallon adult minimum, 72 to 78°F water (which disagreed with its
    // own checklist's 75 to 80°F), every-other-day adult feeding, 50% pellet
    // share, 20 to 40 year captive lifespan, the glass-approach claim the
    // enrichment guide argues against, and the cost tables all contradicted
    // the deep dives; they are gone rather than moved. The old hub's nitrate
    // ceiling (under 40 ppm) is dropped too: no deep dive and no source on
    // the site states it.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal", value: "Federal law bans the sale of turtles under 4 inches, not ownership. State invasive-species laws are what restrict sliders, so check yours before buying, and never release one into a pond: illegal nearly everywhere.", source: "red-eared-slider-legal-guide" },
        { label: "Tank size", value: "Roughly 10 gallons of water per inch of shell, so a practical adult minimum of 75 to 100 gallons for one turtle, 100 to 125 better. A hatchling's tank is temporary; size for the adult it becomes.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Water", value: "72 to 82°F, held steady, at a depth of 1.5 to 2 times the shell length: enough to right itself, not so deep a weak turtle cannot surface. Changed at least weekly, since a filter is not a substitute.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Basking", value: "A surface of 85 to 95°F on a platform that lets the turtle dry fully, with cool-side air in the mid-70s to low 80s and nights in the mid-60s to mid-70s.", source: "red-eared-slider-tank-setup-guide" },
        { label: "UVB", value: "Mandatory: a linear T5 HO at a UV index of 2.0 to 3.0 at the basking surface, 10 to 12 hours a day, replaced every 6 to 12 months even if it still lights.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Filtration", value: "A canister rated well above the tank volume. Sliders produce a lot of waste, and over-filtering is the reasonable recommendation.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Substrate and lid", value: "Bare bottom, or rock bigger than the turtle's head. No sand or small gravel, which gets swallowed. A secure lid: they climb.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Nesting site", value: "A gravid female with nowhere to lay risks egg-binding.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Adult size", value: "Females average a 25.4 cm (about 10 inch) shell, males 17.78 cm (about 7 inches).", source: "red-eared-slider-tank-setup-guide" },
        { label: "Feeding schedule", value: "Juveniles daily, adults every 2 to 3 days, what it finishes in 15 to 20 minutes, always in the water, since a slider cannot swallow on land.", source: "red-eared-slider-feeding-guide" },
        { label: "Diet split", value: "Young turtles need more animal protein; adults shift toward plants, from about half protein down to as little as a quarter. The shift with age is the part that matters.", source: "red-eared-slider-feeding-guide" },
        { label: "Supplements", value: "A reptile multivitamin about weekly and a calcium block or cuttlebone about twice a week.", source: "red-eared-slider-feeding-guide" },
        { label: "Brumation and refusal", value: "Appetite drops roughly October through March, though a warm indoor slider often does not fully brumate. Outside brumation, 2 to 3 weeks of total refusal is the point to see a vet, sooner with lethargy.", source: "red-eared-slider-feeding-guide" },
        { label: "Handling", value: "Scooped from underneath with the full body supported, never from above. A drop can kill a turtle this size, and the sharp beak draws blood.", source: "red-eared-slider-handling-guide" },
        { label: "Cohabiting", value: "Several sliders without enough space and basking spots means aggression, stacking, and injuries.", source: "red-eared-slider-handling-guide" },
        { label: "Budget", value: "Roughly $550 to $1,250 or more upfront and $380 to $720 a year. A wellness exam runs $80 to $180, an emergency $150 to $400 before treatment.", source: "red-eared-slider-cost-guide" },
        { label: "Lifespan", value: "20 to 30 years, 20 to 25 typical.", source: "red-eared-slider-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap after any contact with the turtle, its tank, or its water, and never clean any of it in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "red-eared-slider-health-issues-guide",
      callNow: [
        "Difficulty breathing, or an inability to dive or swim properly",
        "Severe lethargy",
        "Deep shell lesions, or a large abscess",
      ],
      soon: [
        "A complete refusal to eat for 2 to 3 weeks outside the October to March brumation slowdown, sooner with lethargy",
      ],
      vetLine: "A reptile vet. A soft shell is bone disease; a hard shell with peaked scutes is pyramiding. Respiratory infection progresses quickly, and an ear abscess almost always needs surgical drainage and antibiotics. Annual or semi-annual exams catch most of this early.",
    },
    routes: [
      { slug: "red-eared-slider-cost-guide", line: "What the turtle costs against what it grows into: the adult-sized setup, the yearly running total, routine and emergency vet prices, and why the lifespan is the real budgeting number." },
      { slug: "red-eared-slider-tank-setup-guide", line: "The 10 gallons per inch rule and the adult minimum it produces, water and basking temperatures, water depth, Ferguson Zone 3 UVB, substrate, and the filtration that has to keep up." },
      { slug: "red-eared-slider-handling-guide", line: "Why brief and necessary handling suits this species, the scoop from underneath, the bite and the beak behind it, hand-feeding, and what housing two sliders together costs." },
      { slug: "red-eared-slider-health-issues-guide", line: "Metabolic bone disease against pyramiding, which are not the same problem, shell rot, respiratory infection, aural abscesses, vitamin A deficiency, and what counts as an emergency." },
      { slug: "red-eared-slider-feeding-guide", line: "The schedule by age, the portion cue, the protein-to-plant shift no source will put an exact number on, safe and unsafe foods, and seven reasons a slider stops eating." },
      { slug: "red-eared-slider-enrichment-guide", line: "The pond slider study that measured escape behavior, the priority order it argues for, and why water volume comes before any object you can buy." },
      { slug: "red-eared-slider-legal-guide", line: "The 1975 federal sale rule that never banned ownership, the states that do restrict one, Colorado's 2026 invasive classification, and why release is illegal nearly everywhere." },
    ],
    buyList: [
      "An adult-sized enclosure or pond setup, planned for the adult rather than the hatchling",
      "Canister filter rated well above the actual tank volume",
      "Large basking platform that lets the turtle dry off completely",
      "Linear T5 HO UVB fixture and bulb",
      "Basking heat lamp and dome fixture",
      "Submersible water heater",
      "Water quality test kit",
      "A secure lid",
      "Commercial aquatic turtle pellets and dark leafy greens",
      "Calcium block or cuttlebone, and a reptile multivitamin",
    ],
    faqs: [
      { q: "How big of a tank does an adult red-eared slider need?", a: "A practical minimum of 75 to 100 gallons for one turtle, with many experienced keepers recommending 100 to 125 gallons or more. The rule of thumb is roughly 10 gallons of water per inch of shell length, and females, which commonly reach 10 to 12 inches or more, need proportionally more space than males." },
      { q: "How long do red-eared sliders live, and why does that matter for budgeting?", a: "20 to 30 years is the consensus range, with a handful of far less documented claims reaching 40 to 70 years. This is a multi-decade commitment, and the setup you buy for a palm-sized hatchling needs to work for an animal that will eventually need a 75 to 100-plus gallon home." },
      { q: "Does the federal 4-inch turtle rule mean it's illegal to own a red-eared slider?", a: "No. The 1975 FDA rule only bans selling turtles with a shell under 4 inches, to cut down on salmonella exposure in young kids. It has never applied to owning one, buying an adult-sized turtle, or keeping one you already have." },
    ],
  },
  {
    id: "red-footed-tortoise",
    name: "Red-Footed Tortoise",
    emoji: "🐢",
    difficulty: "Intermediate",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/red-footed-tortoise.jpg",
    tagline: "The tropical tortoise with painted legs and a real taste for fruit!",
    seoTitle: "Red-Footed Tortoise Care Guide: Setup, Diet, and Health",
    seoDescription: "Red-footed tortoises need humidity an open table cannot hold: an 18 to 24 square foot enclosed floor, damp substrate, the protein it cannot skip, and shell rot.",
    funFact: "Unlike the strictly plant-eating Russian and sulcata tortoises, red-footed tortoises are true omnivores that eat carrion, insects, and land snails in the wild - a real taste for animal protein most pet tortoises never develop!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Quarantine cites the shared
    // chelonian guide in the sidebar's Health and More list. Rewritten to the
    // template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Reconciled
    // 2026-09-15 after the
    // red-footed tortoise set test (docs/READER_REVIEWS.md). The old hub
    // fought its own articles on six figures and each one is gone rather
    // than moved: floor space (32 to 72 sq ft against the setup guide's 18
    // to 24), the annual cost table (roughly $375 to $645 against the cost
    // guide's $650 to $850), calcium without D3 against the feeding guide's
    // calcium with D3 several times a week, a diet split of 55% fruit,
    // flowers and leafy greens against the feeding guide's leafy-green base,
    // a 65 to 70°F night floor against a floor that shouldn't drop much
    // below 70°F, and a flat Arcadia 12% UVB call that dropped the setup
    // guide's Ferguson-zone caveat.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal", value: "Banned nowhere. New Jersey, New Mexico, and Delaware require a permit; Massachusetts, Hawaii, Vermont, Minnesota, and New York City attach conditions, New York City's by size: a hatchling under four inches is barred.", source: "red-footed-tortoise-legal-guide" },
        { label: "Quarantine", value: "A minimum of six months, completely separate from any other chelonian, with lab testing. Two or three weeks is not long enough for the herpesvirus.", source: "chelonian-herpesvirus-quarantine-guide" },
        { label: "Enclosure", value: "18 to 24 square feet of floor for an adult indoors. A 4x2x2 ft enclosed enclosure carries a hatchling through juvenile; adults outgrow the shelf and get a custom build or a stock tank.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Enclosed, not open-top", value: "An open tortoise table cannot hold humidity; it escapes upward. A front-opening enclosure with a solid top, still ventilated.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Temperature", value: "Basking 90 to 95°F, cool side mid-70s to 80°F, nights not much below 70°F. Supplemental heat day and night: no cold tolerance, and no brumation, ever.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Humidity", value: "70 to 80%, from damp substrate, a humid hide, a large soak dish, and misting or a fogger. Not a one-time spray.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber, cypress mulch, or a peat mix, evenly damp, 4 to 6 inches deep. No dry sandy substrate, which is built for a different species.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "UVB", value: "About 12 hours a day from a T5 HO, in the Arcadia 12% or ReptiSun 10.0 range or a Forest 6%, with real shade to retreat into.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Diet", value: "Roughly 90% plant and 10% animal: about 70% leafy greens, 20% other vegetables, and 10 to 15% fruit, far more fruit than a sulcata gets, but too much still means loose stools.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Protein is not optional", value: "A plant-only diet produces hind-leg weakness or paralysis. Earthworms, snails, dubia, and feeder insects, rather than dog or cat food.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Feeding schedule", value: "Daily under about 5 years, then many keepers go to every other day, which slows the fast growth behind pyramiding. A soakable water dish always.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Calcium", value: "Calcium with D3 several times a week, more for fast-growing juveniles, since an indoor tortoise needs dietary D3 to use it. A cuttlebone left in.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Handling", value: "Low to the ground, shell supported from underneath with both hands, never flipped. Adults reach 20 pounds, so a drop is a real risk. Occasional and purposeful.", source: "red-footed-tortoise-handling-guide" },
        { label: "Growth", value: "1.5 to 2 inches at hatching, 3 to 4 by the first birthday, 7 to 9 by age 2, 9 to 11 by 5. Size the enclosure for the adult.", source: "red-footed-tortoise-handling-guide" },
        { label: "Feed it scattered", value: "One salad in one dish gives no foraging. Scatter food, vary what appears and where, and grow edible planting inside.", source: "red-footed-tortoise-enrichment-guide" },
        { label: "Budget", value: "$150 to $300 for a captive-bred hatchling, $350 to $600 for a started juvenile, $550 to $900 for an adult. Setup $500 to $950, then $650 to $850 a year. A checkup is $75 to $100 with a chelonian-experienced vet, and an illness with bloodwork or medication $150 to $400 or more.", source: "red-footed-tortoise-cost-guide" },
        { label: "Adult size", value: "11 to 16 inches, occasionally up to 20, reached within 5 to 10 years.", source: "red-footed-tortoise-handling-guide" },
        { label: "Lifespan", value: "50 to 70 years or more, some reported close to 90.", source: "red-footed-tortoise-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "red-footed-tortoise-health-issues-guide",
      callNow: [
        "Wheezing, nasal discharge, lethargy, and open-mouth breathing (respiratory infection). Always see a vet immediately, this does not resolve on its own and needs antibiotics",
        "A soft or deformed shell and weak limbs (metabolic bone disease). Always see a vet",
        "Soft, discolored, or foul-smelling patches on the shell, sometimes with lifting or flaking scutes (shell rot). See a vet promptly, this can progress to a genuine life-threatening infection if left untreated",
        "Hind-leg weakness or outright paralysis, which a plant-only diet causes in this species specifically",
        "Abnormal, raised, cone-shaped growth of the shell scutes instead of a smooth, flat carapace (pyramiding). Permanent once it happens, so prevention is the only real strategy",
      ],
      vetLine: "Shell rot comes from substrate that is soggy and dirty, not from humidity: humid and constantly wet are different things. Chronically dry, cool conditions are what put this species at risk, the exact opposite husbandry mistake from the one that threatens a Russian or sulcata tortoise, so raise humidity and warmth while you arrange the appointment. It's worth finding a vet with chelonian experience specifically rather than a general exotics practice.",
    },
    routes: [
      { slug: "red-footed-tortoise-cost-guide", line: "$150 to $300 for a hatchling and up to $900 for an adult, the $500 to $950 setup, roughly $650 to $850 a year, and the humidity equipment a Russian tortoise owner never buys." },
      { slug: "red-footed-tortoise-tank-setup-guide", line: "The 18 to 24 square foot floor, why an open-topped table fails here, 70 to 80% humidity and how to actually hold it, damp substrate, and the two UVB strengths that both work." },
      { slug: "red-footed-tortoise-feeding-guide", line: "The 90/10 split and the plant-side split under it, why fruit gets more room here than with any other pet tortoise, and why skipping animal protein cripples this species." },
      { slug: "red-footed-tortoise-handling-guide", line: "An observation pet that comes when called, the two-handed lift a 20 pound adult demands, and the growth chart that tells you what to build." },
      { slug: "red-footed-tortoise-health-issues-guide", line: "Respiratory infection from dry and cool, the difference between humid and soggy that decides shell rot, and the controlled study on what drives pyramiding." },
      { slug: "red-footed-tortoise-enrichment-guide", line: "The cognitive bias study that found enriched tortoises judging ambiguity optimistically, the touchscreen work, and the priority order that follows from both." },
      { slug: "red-footed-tortoise-legal-guide", line: "No outright ban anywhere, the three permit states, and the five jurisdictions that attach conditions, including one that measures the shell rather than naming the species." },
    ],
    buyList: [
      "Enclosed, front-opening enclosure (4x2x2 ft from hatchling through juvenile)",
      "A custom build or converted stock tank for the adult",
      "T5 HO UVB fixture and bulb",
      "Halogen basking bulb and fixture",
      "Ceramic heat emitter for overnight heat",
      "Thermostat",
      "Digital thermometer and hygrometer",
      "Coconut fiber, cypress mulch, or a peat-based substrate",
      "Humid hide packed with damp sphagnum moss",
      "Automatic fogger or misting system, or a spray bottle",
      "Large soak-able water dish",
      "Calcium and D3 supplement",
      "Cuttlebone",
      "Tortoise forage seed mix for growable browse",
      "Clicker and target stick",
      "A vet with chelonian experience, found before you need one",
    ],
    faqs: [
      { q: "How much humidity does a red-footed tortoise need, and how do I hit that number?", a: "70 to 80% ambient humidity, with brief spikes higher being fine. Moisture-retentive substrate, a humid hide, a large soak dish, and either regular manual misting or an automatic fogger or misting system are how keepers hold that number, rather than a one-time spray." },
      { q: "Why is animal protein not optional for red-footed tortoises?", a: "On a plant-only diet, this species commonly develops hind-leg weakness or paralysis, poor fertility, and weak hatchlings. A sulcata is the opposite case, where a meaningful amount of animal protein causes kidney and liver damage, so don't carry a hay-and-weeds routine over from an arid species." },
      { q: "How long do red-footed tortoises live, and why does that matter for budgeting?", a: "50 to 70 years or more is the commonly cited range, and exceptionally well-kept individuals are reported near 90. Like any pet tortoise, that's a commitment that can outlast the owner who bought it, worth planning for as seriously as the upfront cost." },
    ],
  },
  {
    id: "russian-tortoise",
    name: "Russian Tortoise",
    emoji: "🐢",
    difficulty: "Intermediate",
    petType: "Turtles & Tortoises",
    image: "/assets/guides/russian-tortoise.jpg",
    tagline: "The compact, hardy tortoise that digs first and asks later!",
    seoTitle: "Russian Tortoise Care Guide: Setup, Diet, and Brumation",
    seoDescription: "A Russian tortoise can outlive 40 years. The floor past the 8 square foot minimum, basking heat and UVB, a grazing diet over salad, and the brumation decision.",
    funFact: "Russian tortoises are one of the world's most cold-tolerant tortoise species. They can survive sub-zero temperatures in the wild by hibernating (brumating) deep underground for months at a time!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Hygiene cites the shared
    // reptile hygiene guide in the sidebar's Health and More list. Reconciled
    // 2026-09-08 after the Russian tortoise set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal", value: "One state, Colorado, bans it, four require a permit, four attach a condition, and Hawaii, which bans almost everything, expressly allows it. Forty-three states place no rule on it at all.", source: "russian-tortoise-legal-guide" },
        { label: "Enclosure", value: "A 4x2x2 ft tortoise table, about 8 square feet, is the absolute indoor minimum, genuinely a minimum rather than a goal. Sources disagree on the target: at least 12 square feet, or our own functional recommendation of roughly 7x3.5 ft, about 24 square feet.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Temperature", value: "Basking 95 to 100°F at the surface, cool side in the 70s°F. Night drops to about 60°F are fine, and most homes need no supplemental night heat.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Humidity", value: "Ambient 30 to 50%, low and dry for this arid species, but a moist hide lined with peat moss for a humid microclimate to hydrate and shed in.", source: "russian-tortoise-tank-setup-guide" },
        { label: "UVB", value: "A 10 to 12% T5 HO tube, covering a third to half the enclosure, for a basking-area UVI near 3.0 to 4.0. Coil and compact bulbs aren't adequate.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Substrate", value: "A 50/50 topsoil and coconut coir mix, or a similar sand and loam blend, deep enough to burrow in and kept slightly damp. No pure sand.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Diet", value: "Unlimited grass hay and a rotation of wild weeds, dandelion, plantain, and clover among them, as the staple, rather than cultivated grocery greens. High-oxalate greens like spinach and chard stay off the rotation. Fruit minimal to none.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Brumation", value: "Physiologically programmed to brumate 2 to 4 months over winter at 40 to 55°F, but indoor keepers can skip it entirely by maintaining full lighting, heat, and feeding year-round.", source: "russian-tortoise-tank-setup-guide" },
        { label: "Handling", value: "An observation pet, not one built for regular handling. House males separately, they ram and bully other tortoises. Skilled climber and digger, more of an escape risk than it looks.", source: "russian-tortoise-handling-guide" },
        { label: "Budget", value: "$50 to $150 for a hatchling ($225 to $400 older captive-bred). $372 to $775 to set up. $365 to $715 a year.", source: "russian-tortoise-cost-guide" },
        { label: "Adult size", value: "5 to 10 inches." },
        { label: "Lifespan", value: "40 years or more typical, some individuals reaching 50-plus.", source: "russian-tortoise-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the tortoise out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Soaking", value: "Juveniles 10 to 15 minutes twice a week, adults about once a week, in lukewarm water no deeper than the elbows, and never unattended. Watch for urates: white and soft is hydrated, dry and gritty is not.", source: "tortoise-soaking-guide" },
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
      { slug: "russian-tortoise-feeding-guide", line: "Why grazing and fiber beat a bowl of salad, the calcium ceiling as well as the floor, and the test for a tortoise carrying too much." },
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
    tagline: "The tortoise that starts palm-sized and ends up the size of a coffee table!",
    seoTitle: "Sulcata Tortoise Care Guide: Space, Diet, and Health",
    seoDescription: "Sulcata tortoises reach 100 pounds and live for decades: the outdoor space and shelter to plan now, a grass and hay diet, preventing pyramiding, and state laws.",
    funFact: "Sulcata tortoises (African spurred tortoises) are the third-largest tortoise species on Earth. A hatchling the size of a ping-pong ball can grow to over 100 lbs and 3 feet long, in the same home!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Quarantine and
    // brumation cite the shared chelonian and tortoise guides in the sidebar's
    // Health and More list. Rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md): a UVB row, a quarantine row, a legal row
    // that matches the legal guide's "no state prohibits", and a diet row
    // scoped to every age.
    //
    // The old hub asserted a 70-to-150-year lifespan no deep dive supported,
    // stated pyramiding causation as settled where the health guide calls it
    // debated, and gave a sexing threshold, an outdoor-space figure and a
    // shelter temperature that all disagreed with the deep dives.
    // Reconciled 2026-09-14 for batch H (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Before anything else", value: "Whether you will have, within a few years, the outdoor space, the shelter budget, and a multi-generational plan for an animal of 80 to 110 pounds that outlives you.", source: "sulcata-tortoise-cost-guide" },
        { label: "Legal check", value: "No state prohibits owning one. The real rule is the federal import ban since 2000; California's restrictions cover its native desert tortoise.", source: "sulcata-tortoise-legal-guide" },
        { label: "Quarantine", value: "A minimum of six months, completely separate from any other chelonian, with lab testing. Two or three weeks is not long enough for the herpesvirus.", source: "chelonian-herpesvirus-quarantine-guide" },
        { label: "Indoor space", value: "About 7 by 3.5 by 2.5 feet for a juvenile under 10 inches. An adult would need 8 by 8 feet at the least, and in practice indoor-only does not work for a grown sulcata.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "Outdoor space", value: "80 to 100 square feet per tortoise, ideally several hundred, needed within a few years of a hatchling coming home, since they grow fast through the first 5 to 10 years. No outdoor space then means the wrong species.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "Fencing", value: "Escape-proof, down as well as up: a sulcata that wants to leave digs under it.", source: "sulcata-tortoise-enrichment-guide" },
        { label: "Temperatures", value: "Basking 95 to 105°F, ambient 80 to 90°F, cool side 75 to 85°F, never sustained under 70°F. Lightless heat in the outdoor shelter once nights drop below 50°F, holding 70 to 75°F.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "UVB", value: "Essential for any indoor housing: a T5 HO UVB fixture, the prevention for the shell and bone disease on the emergency card. Outdoors, sunlight does it better and free.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "No brumation", value: "Named among the species that should never be hibernated, since it comes from a climate with no cold season. Cold winters are spent indoors.", source: "tortoise-brumation-guide" },
        { label: "Humidity, by age", value: "Adults dry and well ventilated. Hatchlings and juveniles need humid hides at roughly 70% for shell growth, as wild sulcatas use humid burrows.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "Substrate", value: "Topsoil and play sand at about 60/40, coconut fiber, or cypress mulch, 6 inches deep for juveniles and up to 24 for adults, kept dry: damp substrate is shell rot.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "Diet", value: "Grass and grass hay at 75 to 80% or more, at every age. No animal protein, ever, which causes the kidney and liver damage behind many early deaths; fruit a rare tiny treat. One that stops eating is usually too cold.", source: "sulcata-tortoise-feeding-guide" },
        { label: "Supplements", value: "Phosphorus-free calcium 2 to 3 times a week for juveniles and about weekly for adults, a multivitamin with A and D3 between weekly and every few weeks.", source: "sulcata-tortoise-feeding-guide" },
        { label: "Pyramiding", value: "Permanent once it happens. Humid hides while growing and a paced diet are the defense, whichever study is right about the cause.", source: "sulcata-tortoise-health-issues-guide" },
        { label: "Handling", value: "A juvenile low to the ground, never flipped: it pushes off hard and a short fall cracks the shell. An adult of 80 to 110 pounds is not lifted; interaction happens at ground level. Two males never together.", source: "sulcata-tortoise-handling-guide" },
        { label: "Budget", value: "A few hundred dollars for the indoor juvenile setup, the cheap phase. A basic outdoor enclosure reaches $1,000 and a heated shelter adds $1,000 or more. Getting an 80-plus pound adult to a vet is a logistics problem to plan early.", source: "sulcata-tortoise-cost-guide" },
        { label: "Lifespan", value: "Commonly 70 to 100 years.", source: "sulcata-tortoise-cost-guide" },
        { label: "Adult size", value: "24 to 30 inches (61 to 76 cm); 80 to 110 lbs typical, with large males over 40 inches and 200 lbs." },
      ],
    },
    emergencyCard: {
      source: "sulcata-tortoise-health-issues-guide",
      callNow: [
        "Soft, discolored, pitted or foul-smelling patches on the shell",
        "A soft or rubbery shell, a misshapen jaw, or trouble walking",
        "Nasal discharge, wheezing, open-mouth breathing or lethargy",
        "A cracked shell, which needs immediate vet care and pain management",
      ],
      vetLine: "Nearly everything on this list traces back to the enclosure: the temperature gradient, the humidity a growing tortoise gets, and whether the substrate stays dry. Outdoors, shade over sun-baked concrete, and no yard chemicals, fertilizer, pesticide, or snail bait anywhere it can reach. A reptile vet with chelonian experience is a long-term partner for this species rather than an emergency contact.",
    },
    routes: [
      { slug: "sulcata-tortoise-cost-guide", line: "Adoption over purchase, monthly figures by life stage, the winter electricity line, and the shelter that costs more than the tortoise." },
      { slug: "sulcata-tortoise-tank-setup-guide", line: "Every number you need to build: sizes at each stage, the temperature gradient, substrate depth, and why indoor housing is a stage rather than a plan." },
      { slug: "sulcata-tortoise-feeding-guide", line: "The grass-and-hay majority, the supplement cadence by age, the eight reasons a sulcata stops eating, and the protein rule that matters most." },
      { slug: "sulcata-tortoise-handling-guide", line: "Keeping juveniles low, why an adult is handled at ground level, the two-males rule, and when sexing becomes possible." },
      { slug: "sulcata-tortoise-health-issues-guide", line: "Pyramiding and the two studies that disagree about its cause, shell rot, metabolic bone disease, and the outdoor hazards worth clearing first." },
      { slug: "sulcata-tortoise-enrichment-guide", line: "Grazing, target training a hundred-pound animal, and the terrain that can flip a tortoise onto its back." },
      { slug: "sulcata-tortoise-legal-guide", line: "The state table, the tick certificate interstate transport needs, and the California desert tortoise mix-up." },
    ],
    buyList: [
      "Outdoor enclosure with fencing buried as deep as it stands",
      "Heated shelter with a ceramic heat emitter or radiant panel",
      "Thermostat",
      "Tortoise table for the juvenile stage",
      "Strong T5 HO UVB fixture for indoor housing",
      "Basking lamp",
      "Organic topsoil and play sand, deep enough to dig",
      "Humid hide for a growing tortoise",
      "Grass hay, by the box",
      "Phosphorus-free calcium and a tortoise multivitamin",
      "Cuttlebone or crushed oyster shell",
      "Shallow water dish large enough to soak in",
      "A chelonian-experienced reptile vet",
    ],
    faqs: [
      { q: "What causes shell pyramiding in sulcata tortoises?", a: "It's debated. One well-known study put the key driver at low humidity during growth, with dietary protein only a minor factor. Another found supplemental night heat and faster growth rates produced pyramiding with humidity held constant. Either way, humid hides while a tortoise is growing and a properly paced diet are the defense, and pyramiding is permanent once it happens." },
      { q: "When does a sulcata tortoise need to move outdoors?", a: "Sooner than most new owners expect. Sulcatas grow fast through their first 5 to 10 years, so outdoor housing arrives within a few years of a hatchling coming home, not someday. Without meaningful outdoor space in that window, this is the wrong species rather than a harder version of the right one." },
      { q: "Can you pick up an adult sulcata tortoise?", a: "Not safely. An adult runs 80 to 110 pounds, and a male can reach 200. Interaction with a grown sulcata happens at ground level: time in its space, hand-feeding, and letting it come to you." },
    ],
  },
];
