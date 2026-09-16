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
        { label: "Enclosure and water", value: "36 by 18 inches is a workable minimum, but larger is considerably better, closer to 5.5 feet by 3 feet for an eastern box turtle, or around 4 feet by 2 feet for the somewhat smaller ornate box turtle. Both land and shallow water access, non-negotiable for this species, a dry-only or water-only setup doesn't match how box turtles actually live.", source: "box-turtle-tank-setup-guide" },
        { label: "Outdoor pen", value: "Bury fencing 6 to 12 inches deep around the perimeter, or lay a solid barrier of brick or rock along it as an alternative to buried mesh.", source: "outdoor-reptile-housing-guide" },
        { label: "Temperature", value: "Basking zone 90 to 100°F, cooler end roughly 70 to 75°F. Extra heat and light are not necessary overnight as long as the enclosure holds 65 to 70°F. Bring a box turtle indoors once the temperature drops below 60°F.", source: "box-turtle-tank-setup-guide" },
        { label: "Humidity", value: "Relatively humid, 60 to 80%. Mist daily and provide a shallow water dish large enough for your turtle to genuinely soak in. Hatchlings and young turtles dehydrate especially easily and need consistently moist substrate.", source: "box-turtle-tank-setup-guide" },
        { label: "Substrate", value: "Wood chips or a topsoil and coconut fiber mix, at least 2 to 3 inches deep to support burrowing. Avoid gravel, sand, additive-laden potting soil, crushed walnut shells, and cat litter entirely.", source: "box-turtle-tank-setup-guide" },
        { label: "UVB", value: "A 6% T5 HO bulb in a reflective fixture, targeting a basking-area UV index of 3.0 to 4.0. Run a longer photoperiod in summer, around 14 hours, tapering to about 10 hours in winter.", source: "box-turtle-tank-setup-guide" },
        { label: "Diet", value: "Roughly half animal matter and half plant matter. Earthworms, insects, and occasional lean protein alongside leafy greens and vegetables make up a balanced diet for this species.", source: "box-turtle-tank-setup-guide" },
        { label: "Feeding and calcium", value: "Adults eat daily or every other day. Calcium with D3 is dusted on food two or three times a week.", source: "box-turtle-cost-guide" },
        { label: "Handling", value: "Support the full body with both hands, keep sessions short, and never drop, shake, or flip a box turtle upside down, this causes real stress and can interfere with normal breathing.", source: "box-turtle-handling-guide" },
        { label: "Budget", value: "Roughly $345 to $453 upfront and roughly $40 to $70 monthly. A routine exotic exam runs $60 to $135, and an emergency visit starts around $150 and can reach $500 or more with treatment.", source: "box-turtle-cost-guide" },
        { label: "Adult size", value: "4.5 to 7 inches (11 to 18 cm)." },
        { label: "Lifespan", value: "Documented past 60 years of age, with very old individuals reaching more than 100.", source: "box-turtle-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
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
    funFact: "Red-eared sliders are one of the world's most invasive species. Released or escaped pets have established populations on every continent except Antarctica!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. The cold-water line, the daily
    // health check, and hygiene cite the shared reptile guides in the
    // sidebar's Health and More list. Reconciled 2026-09-09 after the
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "What restricts red-eared sliders is a patchwork of state invasive-species laws, so check your specific state before you buy.", source: "red-eared-slider-legal-guide" },
        { label: "Tank size and water depth", value: "Roughly 10 gallons of water per inch of shell length is the rule of thumb for an aquatic turtle. In practice that means a practical adult minimum of 75 to 100 gallons for one turtle, with many experienced keepers recommending 100 to 125 gallons or more for better water quality and swimming room. Water depth should be at least 1.5 to 2 times the shell length, enough for the turtle to right itself if flipped, but not so deep that a weak or sick animal struggles to reach the surface.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Water and basking temperature", value: "Water temperature should sit at 72 to 82°F, though stability matters more than hitting an exact number. Basking surface temperature should reach 85 to 95°F per that same guidance.", source: "red-eared-slider-tank-setup-guide" },
        { label: "UVB", value: "Mandatory for this species. Sliders fall into Ferguson Zone 3, which puts the target UV index at roughly 2.0 to 3.0 at the basking surface, using a linear T5 HO fluorescent bulb rather than a compact coil bulb, run 10 to 12 hours a day.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Filtration and water changes", value: "Filtration needs to be powerful, sliders produce a lot of waste, and over-filtering, using a canister filter rated well above your actual tank volume, is a common and reasonable recommendation, not overkill. Change the tank water at least once weekly, or more often if it becomes dirty.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Substrate", value: "Many keepers prefer bare bottom, it's the easiest to clean and carries no ingestion risk. Avoid fine sand or small gravel entirely, both can be ingested.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Adult size", value: "Females grow noticeably larger than males: the average adult female shell is 25.4 cm (about 10 inches) against 17.78 cm (about 7 inches) for males.", source: "red-eared-slider-tank-setup-guide" },
        { label: "Feeding schedule", value: "Juveniles eat daily, adults move to every 2 to 3 days rather than daily. Offer as much as the turtle can finish in about 15 to 20 minutes, then remove any uneaten food.", source: "red-eared-slider-feeding-guide" },
        { label: "Diet split", value: "Adult ratios run from about half protein and half plant down to as little as a quarter protein.", source: "red-eared-slider-feeding-guide" },
        { label: "Handling and cohabiting", value: "Scoop from underneath, supporting the full body and limbs, never grab from above. Housing multiple sliders without enough space and basking spots leads to aggression, stacking, and injuries between animals.", source: "red-eared-slider-handling-guide" },
        { label: "Budget", value: "Roughly $550 to $1,250 or more upfront and roughly $380 to $720 a year. Routine wellness exams often run $80 to $180, and emergency or treatment visits start around $150 to $400 for the exam alone.", source: "red-eared-slider-cost-guide" },
        { label: "Lifespan", value: "20 to 30 years with good care is the consensus range, with 20 to 25 cited as typical.", source: "red-eared-slider-cost-guide" },
        { label: "Cold water floor", value: "Water below 65 to 70°F (18 to 21°C) overnight is when bacterial infection risk and appetite loss start.", source: "reptile-emergency-plan-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact with the animal, its enclosure, its water, or anything that's touched either, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "red-eared-slider-health-issues-guide",
      callNow: [
        "Difficulty breathing",
        "Severe lethargy",
        "An inability to dive or swim properly",
        "Deep shell lesions",
        "Large abscesses",
        "A complete refusal to eat for more than a few days",
      ],
      vetLine: "A reptile vet. Respiratory infections can progress quickly, so treat one as urgent and see a reptile vet promptly rather than waiting to see if it resolves, and an aural abscess almost always requires surgical drainage and antibiotics rather than being something that resolves at home. Annual or semi-annual wellness exams catch most of this early.",
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
    tagline: "The tropical omnivore tortoise that splits the difference between Russian and sulcata!",
    funFact: "Unlike the strictly plant-eating Russian and sulcata tortoises, red-footed tortoises are true omnivores that eat carrion, insects, and land snails in the wild - a real taste for animal protein most pet tortoises never develop!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Quarantine, the thermostat probe,
    // and hygiene cite the shared reptile and chelonian guides in the
    // sidebar's Health and More list. Reconciled 2026-09-15 after the
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "Nothing on the exotic pet law map bans this species, which puts it in a small group among reptiles. New Jersey, New Mexico and Delaware require a permit, and Massachusetts, Hawaii, Vermont, Minnesota and New York City attach conditions.", source: "red-footed-tortoise-legal-guide" },
        { label: "Quarantine", value: "A minimum of six months, kept completely separate from any other chelonian in the house, with lab testing during it.", source: "chelonian-herpesvirus-quarantine-guide" },
        { label: "Enclosure", value: "An indoor minimum around 18 to 24 square feet of floor space for one adult. An enclosed, front-opening design with a solid or mostly solid top is the actual requirement, and good ventilation still matters.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Temperature", value: "A basking spot around 90 to 95°F, a cool side in the mid-70s to 80°F, and a nighttime floor that doesn't drop much below 70°F.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture.", source: "reptile-heating-thermostats-guide" },
        { label: "Humidity", value: "70 to 80% ambient humidity, with brief spikes higher being fine.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber, cypress mulch, or a peat-based mix, kept evenly damp rather than either bone dry or waterlogged, at least 4 to 6 inches deep.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "UVB", value: "Daily UVB, run about 12 hours a day. The usual recommendation is a T5 HO fixture in the Arcadia 12% or Zoo Med ReptiSun 10.0 range; the forest-edge origin puts this species in a lower Ferguson zone, which is the case for a more moderate Arcadia Forest 6% instead.", source: "red-footed-tortoise-tank-setup-guide" },
        { label: "Diet", value: "Roughly 90% plant matter and 10% animal matter. Leafy greens and vegetables are the everyday base.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Protein isn't optional", value: "Red-footed tortoises raised on a plant-only diet commonly develop hind-leg weakness or paralysis, along with poor fertility and weak hatchlings.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Feeding schedule", value: "Offer food daily for tortoises under about 5 years old. Past that age, many keepers shift to every other day for adults, which helps prevent the overly fast growth that drives shell pyramiding.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Calcium", value: "Dust food with a calcium and D3 supplement several times a week, more often for fast-growing juveniles, since indoor tortoises without regular unfiltered sunlight need dietary D3 to actually use that calcium.", source: "red-footed-tortoise-feeding-guide" },
        { label: "Handling", value: "Keep it low to the ground, support the shell fully from underneath with both hands, and never flip it onto its back.", source: "red-footed-tortoise-handling-guide" },
        { label: "Budget", value: "Captive-bred hatchlings commonly run $150 to $300, well-started juveniles $350 to $600, and full adults from a reputable breeder $550 to $900. The setup runs roughly $500 to $950, and upkeep roughly $650 to $850 a year.", source: "red-footed-tortoise-cost-guide" },
        { label: "Adult size", value: "11 to 16 inches, occasionally up to 20. Most individuals reach close to full adult size within 5 to 10 years, continuing to fill out gradually for a while after that.", source: "red-footed-tortoise-handling-guide" },
        { label: "Lifespan", value: "50 to 70 years or more is the commonly cited range, and exceptionally well-kept individuals are reported close to 90.", source: "red-footed-tortoise-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
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
      vetLine: "Chronically dry, cool conditions are what put this species at risk, the exact opposite husbandry mistake from the one that threatens a Russian or sulcata tortoise, so raise humidity and warmth while you arrange the appointment. It's worth finding a vet with chelonian experience specifically rather than a general exotics practice.",
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
        { label: "UVB", value: "A 10 to 12% T5 HO tube, covering a third to half the enclosure, for a basking-area UVI near 3.0 to 4.0. Coil and compact bulbs aren't adequate.", source: "russian-tortoise-tank-setup-guide" },
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
    tagline: "The third-largest tortoise: a lifetime commitment that may outlive you!",
    funFact: "Sulcata tortoises (African spurred tortoises) are the third-largest tortoise species on Earth. A hatchling the size of a ping-pong ball can grow to over 100 lbs and 3 feet long, in the same home!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Brumation cites the
    // shared tortoise guide in the sidebar's Health and More list.
    //
    // The old hub asserted a 70-to-150-year lifespan no deep dive supported,
    // stated pyramiding causation as settled where the health guide calls it
    // debated, and gave a sexing threshold, an outdoor-space figure and a
    // shelter temperature that all disagreed with the deep dives.
    // Reconciled 2026-09-14 for batch H (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Several states restrict this species, interstate transport can need a tick certificate, and California's rules are frequently confused with the ones covering its native desert tortoise.", source: "sulcata-tortoise-legal-guide" },
        { label: "Space, indoor and out", value: "A juvenile under 10 inches wants about 7 feet by 3.5 by 2.5 indoors. An adult kept inside would need 8 by 8 feet at an absolute minimum, and in practice indoor-only housing doesn't work for a full-grown sulcata. Budget 80 to 100 square feet per tortoise, ideally several hundred.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "Fencing and terrain", value: "Escape-proof fencing is the starting requirement, and it has to go down as well as up, because a sulcata that wants to leave will dig under it. A tortoise that flips onto its back in a hot enclosure can die there, so build terrain it can climb without tipping.", source: "sulcata-tortoise-enrichment-guide" },
        { label: "Temperatures and outdoor shelter", value: "Basking 95 to 105°F, ambient 80 to 90°F, cool side 75 to 85°F, never sustained under 70°F. Lightless heat, a ceramic heat emitter or radiant panel, once nighttime temperatures drop below 50°F, set to maintain 70 to 75°F.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "No brumation", value: "Where winters are cold, the tortoise winters indoors.", source: "tortoise-brumation-guide" },
        { label: "Humidity", value: "Adults do best in a dry, well-ventilated environment. Hatchlings and juveniles need humid hides, roughly 70% humidity, to support proper shell growth and reduce pyramiding risk, the same way wild sulcatas use humid burrow microclimates even in an otherwise arid habitat.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "Substrate", value: "A diggable mix: organic topsoil and play sand at about 60/40, coconut fiber, or cypress mulch. Depth counts, 6 inches for juveniles and up to 24 for adults, which dig and burrow in earnest. Keep it dry, since damp substrate leads straight to shell rot.", source: "sulcata-tortoise-tank-setup-guide" },
        { label: "Diet", value: "Grass and grass hay should make up the overwhelming majority of a sulcata's diet, commonly cited at 75 to 80% or more.", source: "sulcata-tortoise-feeding-guide" },
        { label: "Supplements", value: "A phosphorus-free calcium supplement dusted onto food roughly 2 to 3 times a week for juveniles and about weekly for adults, more often for animals still growing quickly.", source: "sulcata-tortoise-feeding-guide" },
        { label: "Never feed", value: "Animal protein entirely, no dog or cat food, no meat: it causes progressive kidney and liver damage over time and is considered one of the leading causes of premature death in captive sulcatas. Fruit should be avoided or offered only as a rare, tiny treat.", source: "sulcata-tortoise-feeding-guide" },
        { label: "Handling", value: "Low to the ground, always. A sulcata pushes off hard with its legs, and even a short fall can crack the shell. Never flip one onto its back. An adult runs 80 to 110 pounds, and a male can reach 200.", source: "sulcata-tortoise-handling-guide" },
        { label: "Two males", value: "Not together. They're territorial, and adult males fight hard enough to cause real shell injuries and chronic stress.", source: "sulcata-tortoise-handling-guide" },
        { label: "Budget", value: "An indoor juvenile setup runs a few hundred dollars, and that's the cheap phase. A basic outdoor enclosure can easily reach $1,000, and a proper heated shelter for cold nights or winters adds another $1,000 or more on top of that.", source: "sulcata-tortoise-cost-guide" },
        { label: "Lifespan", value: "Commonly 70 to 100 years, and some estimates reach further still.", source: "sulcata-tortoise-cost-guide" },
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
      vetLine: "Nearly everything on this list traces back to the enclosure: the temperature gradient, the humidity a growing tortoise gets, and whether the substrate stays dry. A reptile vet with chelonian experience is a long-term partner for this species rather than an emergency contact.",
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
