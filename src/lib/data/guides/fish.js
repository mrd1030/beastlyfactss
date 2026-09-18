export const fishGuides = [
  {
    id: "angelfish",
    name: "Angelfish",
    emoji: "🐠",
    difficulty: "Intermediate",
    petType: "Fish",
    image: "/assets/guides/angelfish.jpg",
    tagline: "The elegant Amazonian cichlid that pairs for life and rules its corner of the tank!",
    funFact: "Angelfish are cichlids that often form long-term monogamous breeding pairs, and unlike most fish, both parents cooperatively guard their eggs and fry - fanning them with fresh water and defending the territory together. Their tall, laterally flattened body shape is a natural adaptation for slipping between roots and plant stems in flooded Amazon forest, effectively letting them disguise themselves as a drifting leaf.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine and power outage cite the
    // shared aquarium guides in the sidebar's Health and More list. Rewritten to
    // the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). The old hub's
    // weekly 25% water change was
    // a figure no deep dive carries, so it is retired here and filed as a gap in
    // docs/READER_LOG.md. Built 2026-09-14 for the angelfish set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "29 gallons, tall, for a single adult. A 55-gallon is the better choice for a group of four to six adults, and at a standard 20 inches tall it clears the height requirement on its own.", source: "angelfish-tank-setup-guide" },
        { label: "Height over length", value: "At least 18 to 20 inches tall. A 20-gallon long is often only about 12 inches tall, too shallow for this body shape.", source: "angelfish-tank-setup-guide" },
        { label: "Temperature", value: "78 to 82°F, tolerating down to about 75°F, with swings held within about 2 degrees. A heater is essential: 3 to 5 watts per gallon, 200 to 250 watts on a 55.", source: "angelfish-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 6.5 to 7.0 and soft water preferred, especially if you want pairs to form. Zero ammonia and zero nitrite matters more here than for hardier community fish.", source: "angelfish-tank-setup-guide" },
        { label: "Filtration", value: "Gentle to moderate flow; angelfish are weak swimmers. A sponge filter if you are breeding, so fry are not pulled into it.", source: "angelfish-tank-setup-guide" },
        { label: "Substrate and decor", value: "Fine sand or small smooth gravel, nothing sharp against those fins. Build vertically: tall driftwood and broadleaf plants break sightlines and double as spawning surfaces. A cover without gaps, since angelfish jump.", source: "angelfish-tank-setup-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "How many", value: "Cichlids, not shoaling fish, so no group-size rule protects them. Either a bonded pair, or enough fish in a big enough tank that aggression spreads. Two or three adults in a modest tank produces a bullied fish.", source: "angelfish-enrichment-guide" },
        { label: "Pairing", value: "Sexing by eye is very difficult. Most keepers raise six or more juveniles and let pairs form; a bonded pair turns noticeably more territorial.", source: "angelfish-handling-guide" },
        { label: "Tankmates", value: "Add angelfish last. Once past roughly 3 inches an adult eats neon tetras and guppies, even ones it was raised with; cardinal tetras are the usual substitute. No fin nippers.", source: "angelfish-handling-guide" },
        { label: "Feeding schedule", value: "Adults once or twice a day, cleared within 2 to 5 minutes. Juveniles 2 to 3 times a day.", source: "angelfish-feeding-guide" },
        { label: "Diet", value: "A quality flake as the staple, with live or frozen protein at least twice a week: bloodworms, brine shrimp, daphnia, mysis. Tubifex only from a cultured source, never wild-collected.", source: "angelfish-feeding-guide" },
        { label: "Off food", value: "Normal for the first 2 to 4 days in a new tank. Past 4 to 5 days, or paired with a sunken belly, clamped fins or stringy white feces, test the water and quarantine.", source: "angelfish-feeding-guide" },
        { label: "Budget", value: "$3 to $50 for a freshwater angelfish, most under $20. Roughly $300 to $600 for a proper tank, then $15 to $40 a month. Marine angelfish are a different group at $150 to $1,500 and need a reef tank.", source: "angelfish-cost-guide" },
        { label: "Lifespan", value: "8 to 12 years typical, up to around 15.", source: "angelfish-cost-guide" },
        { label: "Adult size", value: "6 inches (15 cm) body, 8 to 10 inches (20 to 25 cm) including fins." },
        { label: "Quarantine", value: "At least 30 days in a separate tank with its own nets and siphon, 30 to 60 for a fish you especially do not want to lose. Thirty is the floor, not the target.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "angelfish-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Small white spots like grains of salt, flashing, clamped fins, rapid gill movement: ich, treated by raising the temperature toward 86°F with an anti-ich or copper medication",
        "Pitting lesions on the head and along the lateral line, white stringy feces, appetite loss, fading color",
        "Ragged, receding fins with discolored edges",
        "Fluffy white growths, usually after an injury or a period of stress",
      ],
      vetLine: "Treatment without fixing the water does not hold. Correct the environment, then treat.",
    },
    routes: [
      { slug: "angelfish-cost-guide", line: "$3 to $50 for the fish, $300 to $600 for the tank that makes it work, and the marine-versus-freshwater price trap." },
      { slug: "angelfish-tank-setup-guide", line: "Why height beats length, heater wattage math, pH 6.5 to 7.0, gentle flow, and the lid nobody expects to need." },
      { slug: "angelfish-feeding-guide", line: "Schedule by life stage, the 2 to 5 minute rule, what is safe to feed, and the sunken belly that outranks appetite." },
      { slug: "angelfish-handling-guide", line: "The territoriality that arrives with maturity, why angelfish go in last, and how pairs form." },
      { slug: "angelfish-health-issues-guide", line: "Ich, hexamita, fin rot, cotton wool, and why fixing the water outlasts any medication." },
      { slug: "angelfish-enrichment-guide", line: "The study that found group size did not matter for this fish, and what to optimize instead." },
    ],
    buyList: [
      "55-gallon tank and stand, or a 29-gallon tall for a single adult",
      "Hang-on-back or canister filter sized for the tank, gentle to moderate flow",
      "Sponge filter if you plan to breed",
      "Aquarium heater, roughly 3 to 5 watts per gallon",
      "Fine sand or small, smooth gravel",
      "Tall driftwood and broadleaf plants: Amazon sword, Java fern, anubias",
      "Standard LED light",
      "A secure lid with no meaningful gaps",
      "Liquid water test kit",
      "Water conditioner",
      "High-quality flake food",
      "Frozen or live bloodworms, brine shrimp, daphnia, or mysis shrimp",
    ],
    faqs: [
      { q: "What size tank does an angelfish need?", a: "29 gallons in a tall configuration is the practical minimum for one adult, and 55 gallons suits a small group of four to six adults. Watch out for the \"20-gallon long\": bigger volume, but often only about 12 inches of height, which is too shallow here. Buy height, at least 18 to 20 inches, before length." },
      { q: "Do angelfish need a tank lid?", a: "Yes. They can jump, so an uncovered tank, or one with meaningful gaps in the cover, is a real risk. The lid is a non-obvious requirement here." },
      { q: "Why is a sunken belly a warning sign even if my angelfish is still eating?", a: "A specific stomach parasite common in cichlids, the family angelfish belong to, can cause a fish to keep eating voraciously while still losing significant weight and developing a sunken belly. Appetite alone isn't a reliable health check for this species." },
    ],
  },
  {
    id: "betta-fish",
    name: "Betta Fish",
    emoji: "🐠",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/betta-fish.jpg",
    tagline: "The flowing-finned solo showoff that thrives in its own space and recognizes its keeper!",
    funFact: "Wild betta fish live in shallow rice paddies and slow-moving water that can run low on oxygen, so they evolved a labyrinth organ that lets them gulp air directly from the surface. Males also build floating bubble nests out of saliva-coated air bubbles to hold their eggs - a behavior captive males will still perform even without a female present.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Lifespan comes from the deep dives
    // (no single figure disagreed once tank setup's temperature/change-percent
    // numbers were reconciled). Quarantine, cycling, and power outage cite the
    // shared aquarium guides in the sidebar's Health and More list. Reconciled
    // 2026-09-08 after the betta fish set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "5 gallons, heated and filtered, is the real minimum. Not the bowls or unheated cups bettas are often sold in.", source: "betta-fish-tank-setup-guide" },
        { label: "Heater and filter", value: "A 15 to 25 watt adjustable heater holding a stable 76 to 82°F, 78 to 80°F the sweet spot. A gentle, low-flow filter such as a sponge filter, since a betta's long fins can't handle strong current.", source: "betta-fish-tank-setup-guide" },
        { label: "Water parameters", value: "Ammonia and nitrite at 0 ppm with no safe nonzero reading for either, nitrate under 20 ppm, pH 6.5 to 7.5. Weekly water changes of 25 to 30%, always with a dechlorinator.", source: "betta-fish-water-parameters-guide" },
        { label: "Cycling", value: "Cycle the tank before adding the fish. A fishless cycle typically takes 4 to 6 weeks at a stable warm temperature.", source: "aquarium-cycling-guide" },
        { label: "Feeding schedule", value: "2 to 4 small, high-protein betta pellets, once or twice a day, no more than would fit in the size of the fish's eye. Fast one day a week.", source: "betta-fish-feeding-guide" },
        { label: "Not eating", value: "A healthy adult can physically survive up to about two weeks, but that's an emergency ceiling, not a target. Start investigating around 5 to 7 days of refused food, sooner with a swollen belly, clamped fins, or lethargy.", source: "betta-fish-feeding-guide" },
        { label: "Handling", value: "Never bare hands, it strips the protective slime coat on contact. Move the fish with a net or a cup. Float a new bag about 15 minutes before release so temperatures can equalize.", source: "betta-fish-handling-guide" },
        { label: "Budget", value: "$5 to $30 for the fish, up to about $55 for rare varieties. $100 to $300 for a full setup. $10 to $25 a month after that.", source: "betta-fish-cost-guide" },
        { label: "Adult size", value: "2.5 to 3 inches." },
        { label: "Lifespan", value: "2 to 4 years typical, up to 5 years in captivity with excellent care." },
        { label: "Tankmates", value: "One male, alone or with corydoras, mystery snails, ghost shrimp or small tetras. Never tiger barbs, any nipper, or a long-finned fish. A female sorority needs 10 gallons and cover.", source: "aquarium-stocking-and-tankmates-guide" },
        { label: "Ich", value: "White spots: raise the tank slowly to 86°F with an air stone, inside this species' range, and hold it two weeks. Or a tablespoon of aquarium salt per 5 gallons. Quarantine 30 days after.", source: "aquarium-ich-treatment-guide" },
        { label: "Quarantine", value: "At least 30 days in a bare hospital tank before joining others. Thirty days is the floor, not the target.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Oxygen loss is the fast danger, not the cold or the dark. Aerate right away with a battery air pump, or agitate the surface by hand roughly every 10 to 15 minutes in a small tank. A betta's transport bag needs far more air than a typical fish bag, since it breathes air directly through its labyrinth organ.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "betta-fish-health-issues-guide",
      heading: "Test the water and temperature first, then act on these the same day.",
      callNow: [
        "Raised, pinecone-like scales (dropsy), a poor prognosis but worth same-day contact with an aquatic vet",
        "Pale or greyish saddle-shaped patches, ragged fin edges, or a cottony fuzz (columnaris)",
        "A fine gold or rust-colored dusty sheen (velvet), which moves fast and can kill quickly",
        "Buoyancy problems that do not clear after a 2 to 3 day fast",
        "Any illness that does not improve once water quality and temperature are corrected",
      ],
      vetLine: "An aquatic vet, found before you need one, for the serious or unclear cases. Most of this list is prevented by a heated, filtered, cycled tank.",
    },
    routes: [
      { slug: "betta-fish-cost-guide", line: "$5 to $30 for the fish, a $100 to $300 setup, and $10 to $25 a month after that." },
      { slug: "betta-fish-tank-setup-guide", line: "The 5-gallon minimum, the heater and sponge filter that actually fit a betta's fins, and cycling before the fish goes in." },
      { slug: "betta-fish-water-parameters-guide", line: "The target ranges for temperature, pH, ammonia, nitrite, and nitrate, and the testing schedule that actually catches trouble early." },
      { slug: "betta-fish-feeding-guide", line: "Portion size relative to the fish's own eye, safe treats and foods to avoid, and the honest range of reasons a betta stops eating." },
      { slug: "betta-fish-handling-guide", line: "Why bare hands strip the slime coat, safe net and cup transfers, and how to read stress signs from a distance instead." },
      { slug: "betta-fish-health-issues-guide", line: "Fin rot, ich, velvet, columnaris, swim bladder disorder, dropsy, and why water quality is almost always the first fix." },
      { slug: "betta-fish-enrichment-guide", line: "What three published studies say about space and planting, and why a mirror is a stress test, not a toy." },
    ],
    buyList: [
      "5+ gallon tank with a tight-fitting lid (bettas jump)",
      "Aquarium heater sized for the tank",
      "Gentle sponge filter",
      "Soft substrate (sand or smooth gravel)",
      "Live or silk plants (no sharp plastic)",
      "Water conditioner/dechlorinator",
      "Liquid-reagent water test kit",
      "Net and a transfer cup",
      "Betta-specific pellets",
      "Freeze-dried or frozen bloodworms/brine shrimp for variety",
    ],
    faqs: [
      { q: "What size tank does a betta fish need?", a: "Five gallons is the current standard minimum, a genuine improvement over older bowl-based advice. Bettas can technically survive in smaller volumes, but bigger tanks are easier to keep stable since temperature and water chemistry swing less in more water. Always use a lid, bettas are surprisingly good jumpers." },
      { q: "Why won't my betta eat?", a: "Most commonly it's stress from a recent move or tank change, pickiness about a new food, or water that's too cold or of poor quality. Bettas need water in the roughly 76 to 82°F range, cooler water slows their metabolism and appetite noticeably. Check water quality and temperature before assuming anything more serious." },
      { q: "What should I do before reaching for medication?", a: "Test and correct water quality and temperature first. A heated, filtered tank on a consistent water-change schedule is what makes a huge share of betta illness resolve or never start. Most cases never need an aquatic vet, though one is worth finding for a serious or unclear illness." },
    ],
  },
  {
    id: "bristlenose-pleco",
    name: "Bristlenose Pleco",
    emoji: "\u{1F41F}",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/bristlenose-pleco.jpg",
    tagline: "The bristly-nosed algae grazer that politely stays small!",
    funFact: "Most of the cheap, inch-long 'plecos' sold for algae control are common plecos (Hypostomus plecostomus) or a related Pterygoplichthys species, and neither stays small: both regularly reach 12 to 24 inches and need a 75-gallon-or-larger tank as adults, a size surprise so common that escaped and released pet plecos have established breeding, invasive populations in Texas and Florida rivers. Researchers pulled more than 400 invasive armored catfish from a single stretch of Texas's San Marcos River in one 2022 removal effort. The bristlenose pleco profiled here is a different, deliberately smaller species that tops out around 4 to 6 inches for life, which is exactly why it's the pleco actually worth recommending to a beginner.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. The power outage rule cites the shared aquarium
    // guides in the sidebar's Health and More list. Reconciled 2026-09-15 after
    // the bristlenose pleco set test (docs/READER_REVIEWS.md), rewritten to the
    // template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The reader graded the old hub B- and said the tank price alone "is the
    // kind of thing that makes me re-check everything else." Retired rather
    // than moved: a tank line of $90 to $170 against the cost guide's $35 to
    // $60, roughly a factor of two on the biggest purchase; a filter at $30 to
    // $50 against $45 to $60 and a heater at $20 to $35 against $18 to $30, both
    // drifting the other way; a test kit filed as an annual cost where the cost
    // guide has it upfront; a setup total of $165 to $305 against a stated $155
    // to $265, with the test kit line missing entirely; "Keep water heated
    // between 74 and 82 degrees F" against the setup guide's 74 to 80; and a
    // checklist calling for a "20-30 gallon tank" where the cost guide prices a
    // 20 long as the minimum, so a beginner shopping off the checklist either
    // overpays or misreads the floor.
    //
    // The hub also called this fish "scaleless", where the health guide calls
    // it an armored catfish with an unprotected belly. Those are different
    // bodies, and the copper warning depends on which one is true, so the row
    // below takes the health guide's wording.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Confirm the species first", value: "A juvenile labeled only \"pleco\" may be a common pleco, which grows to 12 to 24 inches and needs 75 gallons or more. A bristlenose stays 4 to 6 inches for life. Ask for the species name.", source: "bristlenose-pleco-cost-guide" },
        { label: "Why the bristles do not settle it", value: "They usually do not show until around 3 inches, and then reliably only on males.", source: "bristlenose-pleco-tank-setup-guide" },
        { label: "Tank size", value: "20 gallons for a single adult, and 29 to 30 is the better long-term choice given how much waste one fish makes. Add roughly 10 gallons per extra pleco, and favor floor space and wood surface over height.", source: "bristlenose-pleco-tank-setup-guide" },
        { label: "Temperature and water", value: "74 to 80°F and pH around 6.5 to 7.8, with ammonia and nitrite at zero through regular water changes.", source: "bristlenose-pleco-tank-setup-guide" },
        { label: "Driftwood is required", value: "They rasp wood constantly, and skipping it is tied to digestive problems even in a fish fed correctly. One small ornament piece is a decoration they strip in a couple of weeks; give a substantial piece or several.", source: "bristlenose-pleco-tank-setup-guide" },
        { label: "Caves and shade", value: "A cave per fish, since males spawn in them and fight over them, plus wood overhangs and broad-leaved plants. A pleco in the open all day has nowhere better to be.", source: "bristlenose-pleco-enrichment-guide" },
        { label: "Grazing surface", value: "Leave the back and sides of the glass unscrubbed and clean only the front. Biofilm on rock, leaves and glass is a real food source.", source: "bristlenose-pleco-enrichment-guide" },
        { label: "Filtration and oxygen", value: "Real filtration and current, with surface agitation. A warm, well-stocked tank with a large catfish runs low on oxygen faster than people expect.", source: "bristlenose-pleco-enrichment-guide" },
        { label: "Feeding schedule", value: "Once a day, after lights-out, a wafer or vegetable portion cleared within a few hours, near a favorite cave so a shy fish finds it. Remove anything still there next morning.", source: "bristlenose-pleco-feeding-guide" },
        { label: "The algae myth", value: "Tank algae rarely keeps pace with an adult. A bristlenose left to leftovers loses condition slowly, which is why the problem is missed until it is advanced.", source: "bristlenose-pleco-feeding-guide" },
        { label: "Tankmates", value: "Peaceful toward other species. Males are territorial toward each other and toward similar bottom dwellers, competing over caves, so give enough hides that no two males share.", source: "bristlenose-pleco-handling-guide" },
        { label: "Moving one", value: "Lockable fin spines catch in net mesh. Herd it into a cup or wide container and lift that out instead.", source: "bristlenose-pleco-handling-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Copper", value: "An unprotected belly and a mucous coat that copper damages badly. Copper-based treatments stay off the list entirely; use an alternative for any copper-susceptible parasite.", source: "bristlenose-pleco-health-issues-guide" },
        { label: "Budget", value: "$7 to $10 for common albino and brown morphs, up to $20 to $25 for specialty fish. A 20-gallon setup runs about $155 to $265, then $45 to $85 a year. Aquatic vets are uncommon; the keeper manages most problems.", source: "bristlenose-pleco-cost-guide" },
        { label: "Lifespan", value: "5 to 10 years typical, with well-kept fish reported at 12 to 14.", source: "bristlenose-pleco-cost-guide" },
        { label: "Adult size", value: "4 to 6 inches (10 to 15 cm)." },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "bristlenose-pleco-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "A sunken, concave belly, with or without faded color and ragged fins: slow starvation, the biggest real risk",
        "Small, pinhead-sized white spots across the body and fins: ich, treated by raising the temperature with strong aeration and a reduced medication dose, never copper",
        "Frayed or discolored fin edges",
        "An open wound on the belly or barbels from sharp gravel or rough decor, an entry point for infection",
      ],
      vetLine: "A dedicated bottom-feeder food fixes the first, smooth substrate the last, and water quality sits under everything else. No copper-based treatment, ever.",
    },
    routes: [
      { slug: "bristlenose-pleco-cost-guide", line: "$7 to $25 for the fish, $155 to $265 for the tank around it, and the labeling mistake that costs the most of all." },
      { slug: "bristlenose-pleco-tank-setup-guide", line: "20 gallons as a floor and 29 to 30 as the real answer, 74 to 80F, and why driftwood is not decoration." },
      { slug: "bristlenose-pleco-feeding-guide", line: "Once a day after lights-out, and why the algae myth is the most damaging thing a new keeper believes." },
      { slug: "bristlenose-pleco-handling-guide", line: "Spines that lock into a net, why you herd one into a cup instead, and why you never see it during the day." },
      { slug: "bristlenose-pleco-health-issues-guide", line: "A sunken belly as the tell, the copper medications that are off the list entirely, and what rough decor does to barbels." },
      { slug: "bristlenose-pleco-enrichment-guide", line: "What the wood-eating research actually settles, how much driftwood counts as enough, and the back glass you leave unscrubbed." },
    ],
    buyList: [
      "20-gallon long tank as a floor, 29 to 30 gallons for the long term",
      "Submersible aquarium heater",
      "Filter rated above the tank volume, for a messy eater",
      "Substantial driftwood, or several pieces, not an ornament",
      "A cave per fish, plus wood overhangs and broad-leaved plants for shade",
      "Smooth substrate, sand or rounded gravel",
      "Sinking wafers formulated for catfish and bottom feeders",
      "Zucchini and cucumber to blanch",
      "Liquid water test kit",
      "Water conditioner",
    ],
    faqs: [
      { q: "What size tank does a bristlenose pleco need?", a: "20 gallons is the practical floor for one adult, though 29 to 30 holds up better long term, since this fish produces a lot of waste for its size. Add about 10 gallons per extra bristlenose." },
      { q: "Can bristlenose plecos be treated with copper-based medication?", a: "No. Bristlenose plecos are armored catfish with an unprotected belly and a mucous coating that copper damages badly, and this species is more medication sensitive than many community fish. Copper-based treatments belong on the avoid list entirely, use an alternative medication for any copper-susceptible parasite instead." },
      { q: "Why does my bristlenose pleco need driftwood if I'm already feeding it?", a: "Bristlenose rasp driftwood constantly and instinctively, and most care guides tie this to healthy digestion, ingesting fiber and the biofilm growing on the wood's surface. Skipping driftwood is associated with digestive problems even in a well-fed fish." },
    ],
  },
  {
    id: "cardinal-tetra",
    name: "Cardinal Tetra",
    emoji: "🐠",
    difficulty: "Beginner-Intermediate",
    petType: "Fish",
    image: "/assets/guides/cardinal-tetra.jpg",
    tagline: "The neon tetra's flashier cousin, lit up red from nose to tail!",
    funFact: "Huge numbers of cardinal tetras are still sustainably wild-harvested from Brazil's Rio Negro every year through community-based fisheries, a rare case where the aquarium trade directly funds rainforest conservation by giving local communities a real economic reason to keep the river intact.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Water chemistry and the
    // power outage rule cite the shared fish guides in the sidebar's Health and
    // More list. Rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md). The old hub narrowed the temperature band to 73-81 against
    // the setup guide's 73-84, put the school floor at 6 against the
    // handling and enrichment guides' 10, and misspelled the neon tetra
    // disease parasite as "hyphessobrycetis". Reconciled 2026-09-14 for
    // batch H (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Before any fish", value: "A 2008 study on this species found it tolerates ammonia better than assumed but is sensitive to nitrite, so a finished cycle before stocking is the single most useful habit.", source: "cardinal-tetra-health-issues-guide" },
        { label: "School size", value: "Ten or more. Smaller groups develop stress sickness, and cardinals shoal tighter and color up better in bigger groups. Six is a floor, not a target.", source: "cardinal-tetra-handling-guide" },
        { label: "Tank size", value: "A 20-gallon long, roughly 24x12 inches of base, for the 8 to 10 fish school. A 10-gallon holds only the bare minimum of 6.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "Temperature", value: "77 to 82°F for general care, inside a tolerated 73 to 84°F. Cardinals take water up to 86°F, against roughly 77°F for neons, so they suit a warmer community tank.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "Water chemistry", value: "Soft and acidic, pH 5.0 to 7.0 and toward the low end. Test your source water first rather than assuming it fits, and ammonia and nitrite read zero before stocking.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "Filtration and substrate", value: "Gentle flow, a sponge filter is the common choice, over fine gravel or sand. A darker substrate makes the red and blue stripe stand out.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "Light and blackwater", value: "Dim to moderate light, driftwood and Indian almond leaves for tannins, dense planting. Bright light over bare glass leaves them pale and near the bottom.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "Mostly wild caught", value: "Still largely collected from the Rio Negro, and losses in the first fortnight are common. Buy from a shop that has held them a while, acclimate slowly, dim the lights and leave them alone.", source: "cardinal-tetra-enrichment-guide" },
        { label: "Diet", value: "A micro-pellet or crushed flake as the staple, with live or frozen bloodworms, mosquito larvae or daphnia. Whole flakes and standard pellets are too big for the mouth and get spat out, which starves the fish.", source: "cardinal-tetra-feeding-guide" },
        { label: "Feeding schedule", value: "Twice a day, what the school finishes in a couple of minutes, or split into three or four smaller feeds. Food still visible after that means cut back: nitrite is the parameter they tolerate worst.", source: "cardinal-tetra-feeding-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "A dead fish", value: "Never leave one in the tank or let the others scavenge it. There is no cure for neon tetra disease, and fish that eat an infected body contract it.", source: "cardinal-tetra-feeding-guide" },
        { label: "Quarantine", value: "A full 30 days for any new fish, the most effective way to keep ich out of an established tank.", source: "cardinal-tetra-health-issues-guide" },
        { label: "Budget", value: "$1 to $3 a fish, roughly $8 to $30 for the school, and most first setups land around $100 to $250. Vet care does not apply; water quality and over-the-counter treatment are the whole of it.", source: "cardinal-tetra-cost-guide" },
        { label: "Lifespan", value: "About five years, some to ten. In the wild it is close to an annual fish.", source: "cardinal-tetra-cost-guide" },
        { label: "Adult size", value: "2 inches (5 cm)." },
        { label: "Water chemistry, the wider picture", value: "KH holds pH in place, and dosing pH-up or pH-down against it is how keepers crash a tank. Work with what the source water gives you.", source: "freshwater-ph-gh-kh-guide" },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "cardinal-tetra-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Small white spots like grains of salt, flashing against decor, rapid breathing: ich, treated with medication and not with heat, since this species dies near 33.7°C",
        "Discoloration on the fin edges, then fraying: fin rot, treatable",
        "Floating at the surface unable to swim down, or struggling to rise: poor water quality first, then overfeeding",
        "Restless or erratic swimming at night, fading or patchy color, lumps under the skin, a curved spine: neon tetra disease, no cure, and the fish is separated so the others cannot eat it",
      ],
      vetLine: "Everything treatable here traces back to water quality and stability. The untreatable one is prevented by quarantine.",
    },
    routes: [
      { slug: "cardinal-tetra-cost-guide", line: "$1 to $3 a fish, the $65 to $230 setup, and the Rio Negro fishery behind why this one prices above a neon." },
      { slug: "cardinal-tetra-tank-setup-guide", line: "The 20-gallon long, 73 to 84°F, soft acidic water, gentle flow, and the blackwater tannins that change the fish." },
      { slug: "cardinal-tetra-feeding-guide", line: "Micro-pellet portions, the two-minute rule, and why removing a dead fish immediately is the real defense against an incurable disease." },
      { slug: "cardinal-tetra-handling-guide", line: "Why this is an observation fish, the ten-fish minimum that functions as a welfare need, and the stripe that tells it from a neon." },
      { slug: "cardinal-tetra-health-issues-guide", line: "Neon tetra disease, ich, fin rot, swim bladder trouble, and the 2008 study that says nitrite, not ammonia, is the number to watch." },
      { slug: "cardinal-tetra-enrichment-guide", line: "Most of them are still wild caught, what that means for the first fortnight, and the borrowed neon tetra finding that says ten." },
    ],
    buyList: [
      "20-gallon long tank (10-gallon for a bare minimum school of 6)",
      "Aquarium heater",
      "Sponge filter or a baffled hang-on-back",
      "Water test kit",
      "Water conditioner",
      "Dark fine gravel or sand",
      "Dense live plants",
      "Driftwood and Indian almond leaves",
      "Micro-pellet or crushed flake food",
      "Live or frozen bloodworm, daphnia, and mosquito larvae",
      "A separate bare tank with its own sponge filter, for quarantine",
    ],
    faqs: [
      { q: "How many cardinal tetras should I keep together?", a: "Animal Diversity Web puts the workable minimum at 10, noting that fewer fish kept together tend to develop sickness from stress, and Seriously Fish recommends starting with 8 to 10 or more for natural schooling behavior, a notably higher bar than the six-fish floor commonly cited for neon tetra. A group that's too small produces fish that are pale, stressed, and constantly hiding." },
      { q: "Can cardinal tetras get neon tetra disease?", a: "Yes. It's named after neon tetra specifically, but the Merck Veterinary Manual documents the parasite affecting tetras broadly, along with angelfish, rasboras, barbs, and zebrafish, so cardinal tetra falls within that group. It's caused by a microsporidian parasite, Pleistophora hyphessobryconis, that invades muscle tissue. Watch for restless or erratic swimming, fading or patchy color, visible lumps under the skin, and a curved spine in advanced cases." },
      { q: "What's the non-obvious detail that makes the biggest difference in a cardinal tetra tank?", a: "Recreating blackwater conditions. Driftwood and Indian almond leaves release natural tannins that stain the water and lower pH, mimicking the shaded, leaf-litter-covered streams this species evolved in. Pair that with dense planting and dim lighting, and color and confidence both improve noticeably." },
    ],
  },
  {
    id: "corydoras-catfish",
    name: "Corydoras Catfish",
    emoji: "🐟",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/corydoras-catfish.jpg",
    tagline: "The armored little bottom-cleaner that schools, snoozes, and shimmies to the surface for air!",
    funFact: "Corydoras catfish can breathe atmospheric air by gulping it at the surface and absorbing oxygen through their intestine - a backup adaptation for the low-oxygen waters they evolved in. This means an occasional dash to the surface for a quick gulp of air is completely normal behavior, not a sign of a sick or distressed fish.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. The cycling row cites the
    // shared fish guides in the sidebar's Health and More list. Rewritten to the
    // template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). The old hub priced a tank at double the cost
    // guide's figure and a filter at more than double, gave "10 to 20 gallon"
    // without saying 10 is pygmy-only, and omitted the heater and test kit
    // the cost guide calls required. Reconciled 2026-09-15 for batch I
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Before any fish", value: "A finished cycle reads zero ammonia and zero nitrite while still processing a dose, which is a different question from how long the tank has been running.", source: "aquarium-cycling-guide" },
        { label: "Tank size", value: "A 20-gallon long for a school of six standard cories; dwarf and pygmy species manage in about 10 gallons. 29 or 30 gallons is better, especially for 8 to 15.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Group size", value: "Six of the same species, minimum, and more is better. A lone or paired cory hides, darts and goes off its food.", source: "corydoras-catfish-handling-guide" },
        { label: "Temperature", value: "72 to 78°F covers most species in the hobby. Run a heater unless the room stays warm year-round, and hold the number steady rather than chasing a precise one.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 7.0 to 7.8 for captive-bred cories, which is most of the trade. Ammonia and nitrite at zero, nitrate low through regular water changes.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Substrate", value: "Soft sand, or smooth rounded gravel, about 2 inches deep. No sharp or coarse gravel, and some sharp-grained planted-tank sands are flagged unsuitable for bottom-dwellers.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Flow and surface", value: "Gentle movement with calm places to rest, and clear access to the surface, since they gulp air as part of normal breathing.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Surface dashes", value: "An occasional dash up for air is normal. Constant ones mean the water is short of oxygen or fouled.", source: "corydoras-catfish-enrichment-guide" },
        { label: "Not algae eaters", value: "The cleanup-crew reputation is wrong. Cories pick leftovers off the bottom and need sinking food of their own; algae and scraps will not keep them alive.", source: "corydoras-catfish-handling-guide" },
        { label: "Staple food", value: "A sinking pellet or wafer for bottom feeders, around 30 to 40% protein, with worms in the rotation: live blackworms, frozen bloodworms, Vibra Bites. Flakes get eaten higher up before they ever reach the floor.", source: "corydoras-catfish-feeding-guide" },
        { label: "Portion", value: "Once or twice daily, cleared in 2 to 3 minutes: one wafer per 3 to 4 fish or 2 to 3 small pellets each, cut back if food sits 20 to 30 minutes. A new cory may take up to a week to eat normally.", source: "corydoras-catfish-feeding-guide" },
        { label: "Feeding after dark", value: "Sinking food fed for them after lights out, if faster tankmates are taking it.", source: "corydoras-catfish-enrichment-guide" },
        { label: "Barbel erosion", value: "Shortened, red or missing barbels, the signature cory problem, owing as much to a dirty substrate as to grain shape. Move to soft sand, do a big water change and hold nitrate under 20 ppm; barbels can regrow over 4 to 8 weeks.", source: "corydoras-catfish-health-issues-guide" },
        { label: "Medication", value: "Naked bellies make them more sensitive than most community fish: reduced doses, sometimes a half or a quarter, and no full-strength copper, malachite green or formalin. For ich, raise the temperature gradually toward 82°F with strong aeration.", source: "corydoras-catfish-health-issues-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Budget", value: "$3 to $8 each, and six or more is the requirement, so price the school. Roughly $150 to $215 for the equipment, then $10 to $20 a month. Aquatic vets are uncommon; keepers handle most problems through water quality.", source: "corydoras-catfish-cost-guide" },
        { label: "Lifespan", value: "5 to 10 years typical, with reports of up to 15.", source: "corydoras-catfish-cost-guide" },
        { label: "Adult size", value: "1 to 3 inches (2.5 to 7.5 cm), pygmy species at the low end." },
      ],
    },
    emergencyCard: {
      source: "corydoras-catfish-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Barbels shortened, red, or gone",
        "Red or bloody-looking sores on the belly and flanks: red blotch disease, water fixed plus a broad-spectrum antibiotic at half dose",
        "Small white spots like grains of salt",
        "Frayed or receding fins",
      ],
      vetLine: "Correct the water and treat at a reduced dose, sometimes a half or a quarter of the label amount. No full-strength copper, malachite green, or formalin.",
    },
    routes: [
      { slug: "corydoras-catfish-cost-guide", line: "$3 to $8 a fish and you need six, the $150 to $215 setup, and why the substrate line matters more here than for most community fish." },
      { slug: "corydoras-catfish-tank-setup-guide", line: "The 20-gallon-long minimum, the substrate that decides everything, gentle flow with calm resting spots, and clear access to the surface." },
      { slug: "corydoras-catfish-feeding-guide", line: "Why the cleanup-crew reputation starves them, the sinking staple, portion by the group, and seven reasons a cory stops eating." },
      { slug: "corydoras-catfish-handling-guide", line: "An observation fish, the six-fish welfare floor, and why the dash to the surface is not distress." },
      { slug: "corydoras-catfish-health-issues-guide", line: "Barbel erosion, red blotch, ich at a reduced dose, and why this species tolerates medication worse than its tankmates." },
      { slug: "corydoras-catfish-enrichment-guide", line: "What the barbel story actually rests on, the behavioral case for sand, and feeding after lights out." },
    ],
    buyList: [
      "20-gallon long tank, 29 or 30 gallons preferred",
      "Heater",
      "Gentle-flow filter",
      "Water test kit",
      "Water conditioner",
      "Soft sand, about 2 inches deep",
      "Plants and hides for shaded cover",
      "Sinking pellets or wafers for bottom feeders",
      "Frozen or live worms for the rotation",
      "Gravel vacuum",
      "A group of six or more of one species",
    ],
    faqs: [
      { q: "Do corydoras catfish eat algae?", a: "Not effectively. Left to live off leftovers and algae film as a self-sufficient cleanup crew, a cory can slowly starve, especially alongside faster, more aggressive eaters. They need dedicated sinking food, offered on purpose every time." },
      { q: "Does gravel wear down corydoras barbels?", a: "That is the standard explanation, and no controlled study establishes it, or any competing mechanism. What is documented is that substrate of any kind harbors pathogenic bacteria, so a clean substrate matters more than its grain shape, and plenty of keepers have raised healthy corydoras on smooth gravel for decades." },
      { q: "Why are corydoras catfish more medication sensitive than other fish?", a: "They're armored catfish with sensitive, naked bellies, and notably more medication sensitive than many community fish. That means reduced doses, sometimes a half or a quarter of the standard amount, and no full-strength copper, malachite green, or formalin, which this species tolerates poorly." },
    ],
  },
  {
    id: "discus",
    name: "Discus",
    emoji: "\u{1F41F}",
    difficulty: "Intermediate-Advanced",
    petType: "Fish",
    image: "/assets/guides/discus.jpg",
    tagline: "The king of the aquarium, and it knows exactly how good it looks!",
    funFact: "Newly hatched discus fry feed on a nutrient-rich mucus secreted from both parents' skin, most intensively for roughly the first two weeks after they become free-swimming, with a gradual weaning over the following two weeks. It is one of the only documented cases of sustained direct parental feeding in fish, and a 2010 study found the mucus carries immune antibodies and protein at levels that rise and fall across the feeding period, in a pattern the researchers compared to mammalian milk.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. The hospital tank and the power outage rule cite the
    // shared aquarium guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the discus set test (docs/READER_REVIEWS.md), rewritten
    // to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // Retired rather than moved: a tank line of "$290 | $450" against the cost
    // guide's "$290 - $310", a $140 gap at the top; a checklist reading
    // "Frequent large water changes (25-50% every 2-3 days in serious setups)",
    // which flattens the setup guide's weekly baseline into the enthusiast
    // cadence; "a group of 6 or more" against a cost guide that says 5 to 6;
    // and a fry-feeding window of "one to two weeks" in the funFact against
    // "about a month total" in its own diet section, a page contradicting
    // itself. The funFact survives a router conversion, so it is corrected here
    // against the feeding guide rather than retired: roughly two weeks
    // intensively, then two weeks weaning.
    //
    // Two rows deliberately carry a hedge the old hub had flattened. The hub
    // checklist said "Strong but gentle canister filtration" as settled where
    // the setup guide records a discus-specialty source pushing back on
    // canisters specifically, and the hub answered the neon tetra question flat
    // where the handling guide calls it "a genuine point of disagreement". The
    // reader preferred the article in both cases, and so does the router.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "55 gallons is the entry point and a floor, not a target; experienced keepers recommend 75 or larger, since a 55 forces far more frequent water changes for a proper group. Taller and deeper over long and shallow.", source: "discus-tank-setup-guide" },
        { label: "How many", value: "5 to 6 or more. Three gives the bottom fish nothing but the bottom; six spreads the pecking order thin. The dark fish hanging at the surface in a corner is the one to act on, and the answer is more fish or more tank.", source: "discus-tank-setup-guide" },
        { label: "Temperature", value: "82 to 86°F, warmer than nearly every community fish, which is what limits tankmates. Many keepers run two heaters, since a heater failure at this temperature is a bigger problem.", source: "discus-tank-setup-guide" },
        { label: "Water chemistry", value: "Soft and slightly acidic, roughly pH 6.0 to 7.0. Hard tap water usually needs an RO or RO/DI unit to get there, and that unit belongs in the budget.", source: "discus-tank-setup-guide" },
        { label: "Water changes", value: "The routine that defines a working discus tank: weekly changes of 25 to 50%, and some serious keepers change every 2 to 3 days.", source: "discus-tank-setup-guide" },
        { label: "Filtration", value: "A canister sized well above the tank volume is the common choice. A canister competes with the fish for oxygen and fails badly in an outage, so pair it with surface agitation or use a hang-on-back. No under-gravel filters.", source: "discus-tank-setup-guide" },
        { label: "Put the tank somewhere quiet", value: "Nervous fish. A low-traffic wall, approached from the side rather than above, a background on the rear glass, and feeding at the same times each day.", source: "discus-enrichment-guide" },
        { label: "Structure and open water", value: "Tall stems and upright driftwood to orient to and break sight lines, with open water left to cruise in.", source: "discus-enrichment-guide" },
        { label: "Feeding schedule", value: "Adults 2 to 3 times a day, small amounts cleared within a few minutes. A short gut suits frequent small meals over one large one.", source: "discus-feeding-guide" },
        { label: "Diet", value: "A discus-formulated pellet or granule sized for a small mouth, with frozen or live bloodworms and brine shrimp regularly. Beef-heart mix as a supplement, not the staple.", source: "discus-feeding-guide" },
        { label: "Acclimation", value: "The default is a slow drip of 60 to 90 minutes. One discus breeder argues for a fast temperature and pH match instead, since oxygen depletes in the shipping water. Either way: lights off, and no food on day one.", source: "discus-handling-guide" },
        { label: "Tankmates", value: "Cardinal tetras, rummynose tetras, Sterbai cories and bristlenose plecos are the ones named consistently. Neons are disputed at 82 to 86°F, so cardinals are the safer warm-water tetra.", source: "discus-handling-guide" },
        { label: "Sexing", value: "Difficult outside of breeding. Raise a group and let pairs reveal themselves.", source: "discus-handling-guide" },
        { label: "Budget", value: "$20 to $40 for young common-strain fish, so a group of 5 to 6 starts at $150 to $250 even at the budget end; premium strains reach $200 to $450 a fish. Setup roughly $600 to $800, then $20 to $50 a month.", source: "discus-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years with stable care; some sources put typical closer to 8 to 10.", source: "discus-cost-guide" },
        { label: "Adult size", value: "6 to 8 inches (15 to 20 cm) in diameter." },
        { label: "Quarantine", value: "A bare hospital tank with its own net and siphon, never shared with the display. A sponge filter gives gentle biological filtration.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "discus-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Small white spots on skin and gills after flashing against decor, weakness, appetite loss",
        "Pitting, small holes, and erosion around the head and along the lateral line",
        "Labored or rapid breathing, flashing, excess mucus, sometimes spots on the body",
        "Ragged, receding fins with discolored edges, cloudy eyes, or abdominal swelling",
      ],
      vetLine: "Ich treatment for discus runs hotter than the standard advice, toward roughly 90°F rather than the 82 to 86°F they already live at.",
    },
    routes: [
      { slug: "discus-cost-guide", line: "$20 to $450 a fish by strain, $600 to $800 for the tank around them, and why the fish is rarely the biggest line." },
      { slug: "discus-tank-setup-guide", line: "55 gallons as a floor and 75 as the real answer, 82 to 86F, and the water-change routine that defines the tank." },
      { slug: "discus-feeding-guide", line: "Two to three small meals for a short gut, the small-mouth sizing issue, and the peer-reviewed truth about discus milk." },
      { slug: "discus-handling-guide", line: "Why the acclimation advice genuinely splits, the narrow tankmate list, and sexing that mostly cannot be done by eye." },
      { slug: "discus-health-issues-guide", line: "Ich at 90F rather than 86, flukes, and the hole-in-the-head study that undercuts the usual beef-heart explanation." },
      { slug: "discus-enrichment-guide", line: "Why six is the number, the singled-out fish to watch for, and the free enrichment decision nobody mentions." },
    ],
    buyList: [
      "55-gallon tank as an entry point, 75 gallons or larger for a proper group",
      "Five to six discus, not one or two",
      "Reliable heater, or two, sized for 82 to 86F",
      "Canister filter above the tank volume, or a hang-on-back, plus extra surface agitation",
      "Tall plant stems and upright driftwood, with open cruising water left clear",
      "Background for the rear glass",
      "Liquid water test kit",
      "Water conditioner",
      "Discus-formulated pellet or granule, sized for a small mouth",
      "Frozen or live bloodworms and brine shrimp",
      "Python or similar for the water-change routine",
    ],
    faqs: [
      { q: "What size tank does a discus need?", a: "55 gallons is commonly cited as the practical minimum for a small group, though several experienced sources push that to 75 gallons or more, since a 55-gallon tank forces noticeably more frequent water changes to keep pace with this species' bioload. Taller tanks are preferred over long, low ones given this fish's body shape." },
      { q: "What temperature do discus need?", a: "82 to 86\u00B0F, warmer than nearly every other common community fish, warm enough that it narrows the tankmate list. Wild Heckel discus take water closer to 90\u00B0F, but 82 to 86\u00B0F is the standard target for captive-bred fish." },
      { q: "How often should I feed my discus?", a: "Adults 2 to 3 times a day, in small amounts they clear within a few minutes, rather than one large daily meal. Discus have a short gut for their body size, and smaller, more frequent meals suit that digestive setup better than a single big feeding." },
    ],
  },
  {
    id: "goldfish",
    name: "Goldfish",
    emoji: "🐟",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/goldfish.jpg",
    tagline: "The pond classic that outgrows the bowl, the myth, and your expectations!",
    funFact: "Goldfish have real, months-long memories and can be trained to push levers, navigate mazes, and recognize shapes and colors - directly contradicting the popular '3-second memory' myth. They also grow to the size of their environment: a goldfish kept in a tiny bowl doesn't stay small because it's content, it's stunted, which is a sign of poor welfare rather than a convenient feature.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Lifespan comes from the encyclopedia
    // entry, which no deep dive repeats as a single figure. Quarantine and
    // power outage cite the shared aquarium guides in the sidebar's Health and
    // More list. Built 2026-09-08 for the goldfish set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "20+ gallons for one fancy goldfish (29+ gallons is the better setup), plus 10 more gallons per additional fish. 55 gallons minimum for one common or comet, more per additional fish, better in an outdoor pond. 40 gallons minimum for a shubunkin, 55+ gallons or a pond better.", source: "goldfish-tank-size-bowl-myth" },
        { label: "Filtration", value: "Process the tank's total volume at least 4 times an hour, ideally 5 to 10 times. Running two filters on one goldfish tank is common practice among experienced keepers, not overkill.", source: "goldfish-tank-setup-guide" },
        { label: "Water temperature", value: "A coldwater species, comfortable in the 65 to 75°F range. No heater strictly required.", source: "goldfish-tank-setup-guide" },
        { label: "Water parameters", value: "Ammonia and nitrite at 0, nitrate under roughly 20 ppm. Weekly water changes of 25 to 50%, always with a dechlorinator treating the new water first.", source: "goldfish-tank-setup-guide" },
        { label: "Cycling", value: "Cycle the tank fully before adding any fish, the same as any other species.", source: "goldfish-tank-setup-guide" },
        { label: "Feeding schedule", value: "Juveniles get 2 to 3 small feedings a day. For adults, sources genuinely diverge, so treat 1 to 2 small meals a day as the safe range, feeding only what's eaten in about 30 seconds to 2 minutes.", source: "goldfish-feeding-guide" },
        { label: "Diet", value: "A quality sinking pellet formulated specifically for goldfish as the base, not tropical fish flake. Supplement 2 to 3 times a week with blanched vegetables and high-protein treats in moderation.", source: "goldfish-feeding-guide" },
        { label: "Not eating", value: "Short gaps of 3 to 4 days are fine for a healthy adult in an established tank. The trigger to seek help is 24 to 48 hours of refusal combined with lethargy, pineconing scales, clamped fins, abnormal floating or sinking, gasping at the surface, visible wounds or white spots, cotton-like growths, or a visibly thinning body.", source: "goldfish-feeding-guide" },
        { label: "Handling", value: "Guide it into a container of tank water rather than lifting it out by hand. If a net is needed, wet it first and use soft rubber, never knotted nylon. Keep the fish out of water as briefly as possible.", source: "goldfish-handling-guide" },
        { label: "Budget", value: "The fish itself often costs less than $10. A complete setup typically runs $150 to $400. Ongoing costs run $10 to $30 a month.", source: "goldfish-cost-guide" },
        { label: "Adult size", value: "6 to 8 inches for a fancy goldfish, 10 to 14+ inches for a common or comet, 10 to 12 inches for a shubunkin.", source: "goldfish-tank-size-bowl-myth" },
        { label: "Lifespan", value: "10 to 15 years typical; 20 to 30+ years in spacious, well-kept ponds." },
        { label: "Tankmates", value: "Fancy with fancy, single-tail with single-tail. Not a tropical tank: guppies and anything slower at the food are the pairings that fail.", source: "aquarium-stocking-and-tankmates-guide" },
        { label: "Ich", value: "No heat cure: 86°F is past a coldwater ceiling. Salt at a tablespoon per 5 gallons or malachite green at full strength until the deaths stop.", source: "aquarium-ich-treatment-guide" },
        { label: "Quarantine", value: "At least 30 days in a bare hospital tank before joining others. Thirty days is the floor, not the target, and a full two months is reasonable for a fish you especially don't want to lose.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Oxygen loss is the fast danger, not the cold or the dark. Aerate right away with a battery air pump, or agitate the surface by hand roughly every 10 to 15 minutes in a small tank and every 20 to 30 minutes in a larger one. Don't feed, and don't restart a filter that's been off for hours without checking it first.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "goldfish-health-issues-guide",
      heading: "Test the water first, then act on these today.",
      callNow: [
        "Persistent loss of buoyancy",
        "Severe fin damage",
        "Visible ulcers",
        "Ongoing lethargy or appetite refusal",
        "An over-the-counter treatment that is not working",
      ],
      vetLine: "An aquatic vet, found before you need one. Most of the health list is prevented, not treated, through water quality, quarantine, and appropriate feeding.",
    },
    routes: [
      { slug: "goldfish-cost-guide", line: "The fish itself under $10, a $150 to $400 setup where filtration is the real cost, and $10 to $30 a month after that." },
      { slug: "goldfish-tank-setup-guide", line: "The real tank size, filtration turnover math, water parameters, and cycling before the fish goes in." },
      { slug: "goldfish-tank-size-bowl-myth", line: "Why goldfish don't grow to fit their tank, the real space requirements by variety, and what self-cleaning bowl kits get wrong." },
      { slug: "goldfish-feeding-guide", line: "Schedule by life stage, pellets versus flakes versus gel, safe foods by tier, and the honest range of reasons a goldfish stops eating." },
      { slug: "goldfish-handling-guide", line: "Why the slime coat matters, the net-and-container method, and what to do when bare hands are unavoidable." },
      { slug: "goldfish-health-issues-guide", line: "Ich, flukes, anchor worm, velvet, fin rot, swim bladder disorder, dropsy, popeye, ulcers, and the signs that mean a vet visit." },
      { slug: "goldfish-enrichment-guide", line: "What the research actually shows about plants and substrate, space and layout, and social stocking done right." },
    ],
    buyList: [
      "20+ gallon tank (55+ gallons or a pond for common/comet varieties)",
      "Canister filter or a strong hang-on-back filter, rated well above the tank's actual size",
      "Water test kit",
      "Water conditioner/dechlorinator",
      "Gravel vacuum and two dedicated buckets",
      "Smooth gravel or sand substrate",
      "Plants, hardscape, and smooth decor, nothing sharp or fin-trapping",
      "Soft rubber net, transfer container, thermometer, and lid",
      "Sinking goldfish-specific pellets",
    ],
    faqs: [
      { q: "Can I keep a goldfish and a betta together?", a: "Not recommended. Goldfish need cooler water (65-75°F) than bettas (78-80°F), and goldfish are voracious fin-nippers that will target a betta's long fins. The temperature mismatch alone makes this pairing a poor fit for either species." },
      { q: "How do I know if my current goldfish tank is too small?", a: "Test the water. If ammonia or nitrite ever reads above zero between water changes, or if you're doing water changes more than twice a week just to keep the fish alive, the tank is undersized for the bioload it's carrying - regardless of what the fish looks like." },
      { q: "Why has my goldfish stopped eating?", a: "Water quality problems are the single most commonly cited cause, ammonia or nitrite spikes especially in a newer tank. Overfeeding-driven constipation, stress from tank mates or a small enclosure, and early disease are the other common culprits. Seasonal pond dormancy and spawning behavior can also reduce appetite normally." },
    ],
  },
  {
    id: "guppy",
    name: "Guppy",
    emoji: "🐠",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/guppy.jpg",
    tagline: "The colorful, prolific livebearer that turns a starter tank into a thriving colony fast!",
    funFact: "Guppies are livebearers, meaning females give birth to free-swimming fry rather than laying eggs, and a single female can store sperm from one mating to produce several broods of 20 to 50+ fry over the following months. The species is named after Robert John Lechmere Guppy, who submitted specimens from Trinidad to the British Museum in the 1860s.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own, which is why there is no feeding frequency
    // here: the feeding guide says outright that sources disagree, so the hub
    // carries that disagreement instead of picking a side. Quarantine, cycling,
    // and power outage cite the shared aquarium guides in the sidebar's Health
    // and More list. Built 2026-09-09 for the guppy set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "5 gallons is a bare minimum for a trio; 10 gallons is the practical start for 5 or 6, and 20 the better long-term choice if males and females share a tank.", source: "guppy-tank-setup-guide" },
        { label: "Temperature", value: "76 to 78°F as the target inside 72 to 82°F. A heater unless the room stays warm year-round, at 3 to 5 watts per gallon, so 25 to 50 watts on a 10-gallon.", source: "guppy-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 7.0 or above and moderately hard water. Soft tap water gets a mineral supplement.", source: "guppy-tank-setup-guide" },
        { label: "Filtration and substrate", value: "Gentle flow, a sponge filter if fry are wanted, an adjustable hang-on-back if not. Fine gravel or sand, darker for color, nothing sharp near those fins.", source: "guppy-tank-setup-guide" },
        { label: "Lighting", value: "A basic LED on an 8 to 10 hour cycle.", source: "guppy-tank-setup-guide" },
        { label: "Sex ratio", value: "Two to three females per male minimum, six or more is common and fine. Or males only, which ends the harassment question and the endless fry, and keeps the color.", source: "guppy-enrichment-guide" },
        { label: "Feeding schedule", value: "Adults once to three times a day, only what clears in about 1 to 2 minutes. Fry 3 to 5 times a day, juveniles around 3 to 4.", source: "guppy-feeding-guide" },
        { label: "Diet", value: "A tropical flake or small pellet for community fish, not goldfish food, with live or frozen protein and small blanched vegetable matter in rotation.", source: "guppy-feeding-guide" },
        { label: "Tankmates", value: "Not bettas, not goldfish. Past the floor, add fish only while nitrate holds under 20 ppm before the weekly change; count every fish at adult size.", source: "aquarium-stocking-and-tankmates-guide" },
        { label: "Population plan", value: "Separate the sexes, keep males only, or let it happen and plan to rehome fry or let predation control numbers. Decide before the first brood.", source: "guppy-handling-guide" },
        { label: "Handling", value: "An observation pet. Guide with a net rather than touching.", source: "guppy-handling-guide" },
        { label: "Adult size", value: "Males around an inch and a half; females larger and plainer, up to about 2.4 inches.", source: "guppy-handling-guide" },
        { label: "Budget", value: "$2 to $5 for a wild-type guppy, $10 to $20 a pair for fancy varieties. A basic 10-gallon kit runs $30 to $100.", source: "guppy-cost-guide" },
        { label: "Lifespan", value: "2 to 3 years, up to 4 or 5 with excellent care.", source: "guppy-cost-guide" },
        { label: "Cycling", value: "Four to six weeks fishless, sometimes three weeks to two months. A water change once ammonia or nitrite passes roughly 0.1 to 0.25 ppm.", source: "aquarium-cycling-guide" },
        { label: "Quarantine", value: "At least 30 days in a bare hospital tank, 30 to 60 for a fish you want to be sure about. Thirty is the floor.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Aerate right away with a battery air pump, or agitate the surface by hand every 10 to 15 minutes in a small tank and every 20 to 30 in a larger one.", source: "aquarium-power-outage-and-transport-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
      ],
    },
    emergencyCard: {
      source: "guppy-feeding-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Appetite loss with lethargy, hiding, or erratic swimming",
        "Gasping at the surface",
        "Clamped or discolored fins, or cloudy eyes",
        "White spots: ich, treated by raising the tank toward 82°F with ich medication. Or visible injuries",
        "A swollen, pinecone-like body",
      ],
      vetLine: "Any of these spreading to other fish means test the water immediately and consider a fish-health specialist rather than waiting.",
    },
    routes: [
      { slug: "guppy-cost-guide", line: "$2 to $5 for a standard fish, $10 to $20 a pair for fancy strains, a modest setup, and the cost nobody budgets for: more guppies than you started with." },
      { slug: "guppy-tank-setup-guide", line: "Tank size by group, the temperature target and heater math, water chemistry, gentle filtration, and cycling before the fish go in." },
      { slug: "guppy-feeding-guide", line: "Frequency by life stage, the 1 to 2 minute portion rule, what to feed and what to skip, and six reasons a guppy stops eating." },
      { slug: "guppy-handling-guide", line: "Why this is a watching pet rather than a handling one, how livebearer breeding actually works, and the four ways to manage the population." },
      { slug: "guppy-health-issues-guide", line: "Ich, velvet, fin and tail rot, dropsy, and swim bladder disorder, each with its visible signs and treatment, plus why heavy salting is a bad idea with this species." },
      { slug: "guppy-enrichment-guide", line: "What the harassment research says about sex ratio, why dense cover is a social tool rather than decor, and the priority order that follows from both." },
    ],
    buyList: [
      "10 gallon tank, or 20 gallons if you're not separating the sexes",
      "Aquarium heater sized to the tank",
      "Sponge filter, or a hang-on-back filter with adjustable flow",
      "Dense live or silk plants, floating plants included",
      "Fine gravel or sand substrate",
      "Tight-fitting lid",
      "Water conditioner",
      "Water test kit",
      "High-quality tropical flake or micro-pellet food",
      "Frozen or live brine shrimp and daphnia for variety",
    ],
    faqs: [
      { q: "What size tank does a guppy need?", a: "5 gallons is the bare minimum for a trio; 10 gallons is the practical starting point for a group of 5 or 6. Guppies breed readily, so a 20-gallon holds up better long term unless you separate males and females." },
      { q: "How do I manage guppy population if I don't want constant breeding?", a: "Keep males and females in separate tanks to avoid breeding entirely, or keep males only for a colorful, breeding-free tank. If you do want controlled breeding, a ratio of roughly one male to two or three females reduces females getting harassed too heavily by mating attempts." },
      { q: "How often should I feed my guppy?", a: "Adults land somewhere between once and three times a day. The portion rule is the part that does not vary: only offer what's fully cleared in about 1 to 2 minutes. Overfeeding, not underfeeding, is the more common real mistake, guppies beg regardless of actual hunger." },
    ],
  },
  {
    id: "koi",
    name: "Koi",
    emoji: "🎏",
    difficulty: "Intermediate",
    petType: "Fish",
    image: "/assets/guides/koi.jpg",
    tagline: "The living jewels of the pond world that can genuinely outlive their keepers!",
    funFact: "Koi recognize individual people and will learn to approach a familiar keeper at the pond's edge for food. Long-term keepers describe fish that surface for one household member and ignore another, which is a considerable amount of animal for something sold as pond decoration.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry. The power-outage row cites the shared aquarium guides in the
    // sidebar's Health and More list. Rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Built 2026-09-15 for
    // the koi set test (docs/READER_REVIEWS.md), which found the old hub giving a
    // 2 to 4 week quarantine against the health guide's 4 to 6 weeks or longer, a
    // 25 to 35 year lifespan against the cost guide's 25 to 50, peas as an
    // untroubled treat against the feeding guide's choking warning, and a setup
    // table summing to $2,450-$9,200 under a cost guide that says $5,100-$15,875.
    // Its headline funFact also ran the Hanako 226-year claim the cost guide
    // debunks in the same set, and that is gone.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Pond volume", value: "Roughly 250 gallons per adult, or 10 gallons per inch of fish. 1,000 gallons is the cited practical minimum and supports only a few fish; size for the adults they become, not the juveniles you bought.", source: "koi-tank-setup-guide" },
        { label: "Depth", value: "3 feet minimum, 3 to 5 feet or more preferred. Depth buys temperature stability, predator protection and survival through a frozen winter.", source: "koi-tank-setup-guide" },
        { label: "Indoors is temporary", value: "An aquarium can hold a juvenile. Matching an adult's volume and filtration indoors is impractical for most keepers, which is why the outdoor pond is the standard.", source: "koi-tank-setup-guide" },
        { label: "Temperature", value: "Comfortable at 64 to 75°F, with 59 to 77°F the outer limits. The real risk is a rapid swing of more than about 2°F a day, not the absolute number.", source: "koi-tank-setup-guide" },
        { label: "Filtration", value: "Oversized filtration with a UV clarifier and strong aeration, which is where most beginner ponds fall short. No UVB: the UV unit treats the water, not the fish.", source: "koi-tank-setup-guide" },
        { label: "Predators", value: "Herons and raccoons are real threats. Netting sized to the pond, and depth.", source: "koi-tank-setup-guide" },
        { label: "How many", value: "A single koi is a poorer arrangement than a group, and the constraint is pond volume, not compatibility.", source: "koi-enrichment-guide" },
        { label: "Feeding by temperature", value: "Stop below about 48 to 50°F. Sparingly once or twice a day from 50 to 68°F, 2 to 4 times a day from 68 to 86°F, and cut back again above 86 to 90°F.", source: "koi-feeding-guide" },
        { label: "Why cold feeding is dangerous", value: "Koi have no true stomach. Food left in the gut as the fish enters cold torpor lets bacteria cross the intestinal wall into the blood.", source: "koi-feeding-guide" },
        { label: "Portion and food", value: "What is cleaned up in 3 to 5 minutes, the easiest rule to overfeed on; 1 to 4% of body weight a day is the precise alternative. Wheat-germ formula in the 50 to 64°F range, growth formula above about 60 to 64°F.", source: "koi-feeding-guide" },
        { label: "Handling", value: "As little as possible. Guide the fish into a floating bowl with a net rather than lifting it, with wet hands: dry surfaces strip the slime coat.", source: "koi-handling-guide" },
        { label: "Quarantine", value: "A strict 4 to 6 weeks or longer for every new fish. It is the prevention for koi herpesvirus, which kills 80 to 100% in an outbreak, has no cure, and leaves survivors as lifelong carriers.", source: "koi-health-issues-guide" },
        { label: "Spring restart", value: "A dose of beneficial bacteria at startup, with the oversized filtration and UV, prevents more of the health list than any treatment.", source: "koi-health-issues-guide" },
        { label: "Budget, the fish", value: "$10 to $100 for a pond-quality juvenile, often $10 to $50 for a 4 to 6 inch fish. Imported Japanese koi average $100 to $1,500, show quality $1,200 to $15,000.", source: "koi-cost-guide" },
        { label: "Budget, the pond", value: "An installed residential pond commonly runs $5,100 to $15,875, small prefab setups from around $500, and $1,000 to $2,000 or more a year to run. Aquatic vets are uncommon; a routine exam, where one exists, runs in the low to mid hundreds.", source: "koi-cost-guide" },
        { label: "Lifespan", value: "25 to 50 years with good care; some domestic lines average closer to 15.", source: "koi-cost-guide" },
        { label: "Adult size", value: "12 to 36 inches (30 to 90 cm) depending on pond size and variety." },
        { label: "Power outage", value: "Oxygen loss is the threat, not darkness, and the same three problems, oxygen, temperature and a dead filter, govern moving a fish too.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "koi-health-issues-guide",
      heading: "Test the water first, then act on these today. Involve a vet if one is available.",
      callNow: [
        "Gasping combined with high ammonia",
        "Rapid, widespread mortality, or flashing and sores from the common parasites: ich, Costia, Trichodina, flukes, anchor worm, fish lice",
        "Severe open ulcers",
        "Suspected KHV: gill necrosis, excess mucus, lethargy, skin lesions. Emergency and culling-level serious",
      ],
      vetLine: "Correct water quality immediately. For valuable fish or any unclear diagnosis lean toward professional guidance, though aquatic vets are limited and many keepers rely on koi-specific resources.",
    },
    routes: [
      { slug: "koi-cost-guide", line: "The fish from $10 to $50,000, what a pond actually costs to build, the yearly run rate, and a lifespan that outlasts most mortgages." },
      { slug: "koi-tank-setup-guide", line: "Volume, depth, temperature, substrate, and the filtration sizing that decides whether the pond works." },
      { slug: "koi-feeding-guide", line: "The temperature-banded feeding schedule, seasonal protein, portion rules, and why koi stop eating." },
      { slug: "koi-handling-guide", line: "Why handling stays minimal, the net-into-a-floating-bowl method, and the one variety that acts like a dog." },
      { slug: "koi-health-issues-guide", line: "Parasites, bacterial ulcers, water quality crises, and koi herpesvirus, split into what is an emergency and what is not." },
      { slug: "koi-enrichment-guide", line: "Volume then depth, stocking for the adults rather than the juveniles, and what the fish literature does and does not support." },
    ],
    buyList: [
      "Outdoor pond of at least 1,000 gallons, larger strongly preferred",
      "EPDM rubber liner and underlayment",
      "A deep zone of 3 feet minimum, 3 to 5 feet or more preferred",
      "Oversized mechanical and biological filtration",
      "UV clarifier or sterilizer",
      "Pump sized to circulate the full volume every 1 to 2 hours",
      "Aeration kit or waterfall pump",
      "Predator netting",
      "De-icer, in climates that freeze",
      "Seasonal koi pellets, wheat-germ and warm-season growth formulas",
      "Water test kit",
      "Beneficial bacteria, for spring startup",
      "Water conditioner",
      "Pond net and a floating bowl or soft container",
      "A separate quarantine system for new arrivals",
    ],
    faqs: [
      { q: "How big should a koi pond be?", a: "Plan on roughly 250 gallons per adult, or 10 gallons per inch of body length. The commonly cited practical minimum is 1,000 gallons, which supports only a few fish, so go larger for water stability and healthy growth." },
      { q: "Why do I need to stop feeding koi in cold water?", a: "Koi have no true stomach, food passes straight into the intestine. If a koi enters cold-water torpor with food still in its gut, undigested material can let harmful bacteria cross the intestinal wall into the bloodstream. Stopping feeding before it gets that cold isn't just a rule of thumb, it's the actual reason koi ponds get into trouble in winter." },
      { q: "What is koi herpesvirus (KHV) and how serious is it?", a: "The most serious koi disease, causing gill necrosis, excess mucus, lethargy, and skin lesions. Outbreaks can carry mortality rates of 80 to 100%, it's temperature dependent, and there's no reliable cure. Survivors can remain carriers, which is exactly why strict quarantine of 4 to 6 weeks or longer is the critical prevention step." },
    ],
  },
  {
    id: "molly",
    name: "Molly",
    emoji: "\u{1F420}",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/molly.jpg",
    tagline: "The hardy, prolific livebearer with a genuine tolerance for brackish water!",
    funFact: "Unlike most freshwater aquarium fish, mollies are naturally a brackish-water species that can tightly regulate their salt and water balance well past normal seawater concentration. Whether a healthy freshwater tank needs aquarium salt added is genuinely disputed among experienced keepers though, some use it routinely, others argue consistent water changes do the same job without salt's downsides for live plants and snails.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the handling
    // guide. The power outage rule cites the shared aquarium guides in the
    // sidebar's Health and More list. Reconciled 2026-09-15 after the molly set
    // test (docs/READER_REVIEWS.md), rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // Three hub-only figures are retired rather than moved. "Keep water
    // between 72 and 78 degrees F" sat below the health guide's own shimmy
    // fix of 76 to 80; the species range is now 72 to 82 across every page,
    // from the vet-authored care sheet both the setup and health guides
    // cite. The salt dose of "roughly a tablespoon per 5 gallons" appeared
    // here as standing practice where the tank setup guide gives it as a
    // hospital-tank treatment dose only. And "weekly 20-25% water changes"
    // is a schedule no molly deep dive carries, so it is retired here and
    // filed as a gap in docs/READER_LOG.md.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "20 gallons for a small group, 30 or more for sailfins or any group that has started breeding. Long rather than tall, with a lid, since mollies jump.", source: "molly-tank-setup-guide" },
        { label: "Temperature", value: "72 to 82°F, held steady: a swing of more than about 2°F in 24 hours is one of the commonly cited shimmy triggers. A heater unless the room stays warm year-round.", source: "molly-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 7.5 to 8.5 and medium-hard to hard water. Soft tap water gets crushed coral or a buffering product to bring it into range.", source: "molly-tank-setup-guide" },
        { label: "Salt", value: "Not a standing requirement. Its place is shimmy treatment, 1 tablespoon of aquarium salt per 5 gallons in a hospital tank, and only plain aquarium salt, never marine mix or table salt.", source: "molly-tank-setup-guide" },
        { label: "Filtration", value: "A hang-on-back or canister turning over the full volume at least four times an hour. A sponge filter for a breeding or nursery tank, so fry are not pulled into the current.", source: "molly-tank-setup-guide" },
        { label: "Cycle first", value: "2 to 4 weeks fishless, less with bottled bacteria, and a conditioner on every bucket of tap water. Ammonia and chlorine are both recognized shimmy triggers.", source: "molly-tank-setup-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Plants, a population lever", value: "Parents eat their fry. Dense live plants hide them and survival climbs; skip the cover and predation keeps the numbers down instead.", source: "molly-tank-setup-guide" },
        { label: "Feeding schedule", value: "Adults once or twice a day, only what clears in a minute or two. Fry need small amounts at least 3 to 5 times a day.", source: "molly-feeding-guide" },
        { label: "Diet", value: "Tropical flake or pellet as the base with real vegetable content on top: blanched zucchini, spinach, cucumber, lettuce or peas two to three times a week. An all-protein diet is the most repeated molly mistake.", source: "molly-feeding-guide" },
        { label: "Sex ratio", value: "Two to three females per male, and more is better. An all-male group avoids fry entirely but needs space and numbers, since male mollies squabble more than male guppies.", source: "molly-enrichment-guide" },
        { label: "Fry are coming", value: "Gestation 4 to 6 weeks and broods of 20 to 60. Females store sperm, so store-bought females keep producing without a male present.", source: "molly-handling-guide" },
        { label: "Quarantine", value: "2 to 3 weeks in a separate tank before new fish join the display. It catches most problems, shimmy included, before they spread.", source: "molly-health-issues-guide" },
        { label: "Shimmy", value: "A side-to-side rocking as the fish swims, a sign of lost nerve and muscle control rather than a disease. Correct the water first: temperature toward 76 to 80°F, pH toward 7.5 to 8.5, hardness up if the water runs soft.", source: "molly-health-issues-guide" },
        { label: "Budget", value: "$2 to $8 a fish for common short-fins, $15 to $20 for specialty strains. A 20-gallon setup runs $130 to $260 and upkeep $20 to $30 a month. Mollies rarely see a vet.", source: "molly-cost-guide" },
        { label: "Lifespan", value: "3 to 5 years, up to 5 to 7 with stable water.", source: "molly-cost-guide" },
        { label: "Adult size", value: "3 to 4.5 inches for short-fin varieties, 4 to 6 inches for sailfins.", source: "molly-handling-guide" },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "molly-health-issues-guide",
      heading: "Test the water first, then act on these today. Mollies rarely see a vet; nearly all of this is handled at home.",
      callNow: [
        "A side-to-side, snake-like rocking as the fish swims: shimmy, fixed by correcting temperature, pH, and hardness",
        "Small white spots like grains of salt, with flashing against decor: ich, treated with copper sulfate or formalin medication plus the water fix that let it in",
        "A fine gold or rust-colored dusty coating, with appetite loss, lethargy, and scratching",
        "Ragged, frayed, or discolored fin edges",
        "Buoyancy problems: floating, sinking, or swimming at odd angles",
        "Scales standing out in a raised, pinecone pattern: dropsy, the hardest condition here to treat",
      ],
      vetLine: "Stress, unstable water, overcrowding, and skipped quarantine sit behind nearly every condition on this list.",
    },
    routes: [
      { slug: "molly-cost-guide", line: "$2 to $8 a common molly, the $130 to $260 the tank costs around it, and the $20 to $30 a month after that." },
      { slug: "molly-tank-setup-guide", line: "A real 20 gallons, 72 to 82\u00B0F, hard alkaline water, four-times turnover, and the salt question answered honestly." },
      { slug: "molly-feeding-guide", line: "Once or twice a day, blanched vegetables two to three times a week, and why an all-protein diet is the molly-specific mistake." },
      { slug: "molly-handling-guide", line: "A netting-only fish, gonopodium versus gravid spot, and the breeding plan you need before you buy." },
      { slug: "molly-health-issues-guide", line: "The shimmy protocol, ich, velvet, fin rot and dropsy, and the quarantine window that stops most of it." },
      { slug: "molly-enrichment-guide", line: "The harassment research done on a molly, the sex ratio it implies, and why a spotless tank starves a grazer." },
    ],
    buyList: [
      "20-gallon long tank, or 30-plus for sailfin varieties or a growing colony",
      "Tight-fitting lid",
      "Submersible aquarium heater",
      "Hang-on-back or canister filter rated to turn the tank over four times an hour",
      "Sponge filter, for a breeding or nursery tank",
      "Fine gravel or sand",
      "Dense live plants, including floating plants",
      "Driftwood or rock for biofilm to grow on",
      "Basic LED light on a timer",
      "Liquid water test kit",
      "Water conditioner",
      "Crushed coral or a commercial buffering product, if your tap water runs soft",
      "Flake or pellet with real vegetable or algae content, plus algae wafers",
      "Zucchini, spinach, cucumber, lettuce or peas to blanch",
      "Plain additive-free aquarium salt, only if you decide to use it",
    ],
    faqs: [
      { q: "What size tank does a molly need?", a: "20 gallons is the minimum for a small group, noticeably more than the 10-gallon starting point that works for guppies. Sailfin varieties, or any growing colony, do better in 30 gallons or more. Go long and rectangular over tall, and use a lid, mollies can jump." },
      { q: "Do mollies need aquarium salt in their tank setup?", a: "Not strictly, and this is more debated than most molly care advice lets on. Mollies are a real brackish-tolerant species biologically, but whether a healthy freshwater tank needs salt added is disputed among experienced keepers, some argue good water changes and stable parameters do the same job without the downsides salt carries for live plants and snails." },
      { q: "How do I manage molly population if I don't want constant breeding?", a: "Keep males and females in separate tanks to avoid breeding entirely, or keep a males-only group for a colorful, breeding-free tank, which needs space and numbers rather than a trio because males squabble among themselves. If you do want controlled breeding, a ratio of roughly one male to two or three females cuts down on females getting chased and stressed by mating attempts." },
    ],
  },
  {
    id: "neon-tetra",
    name: "Neon Tetra",
    emoji: "🐠",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/neon-tetra.jpg",
    tagline: "The tiny electric-blue schooler that turns any planted tank into a shimmering river scene!",
    funFact: "A neon tetra's iridescent blue stripe isn't pigment - it's produced by light-reflecting cells called iridophores. That stripe actually dims or goes nearly dark while the fish sleeps at night, a completely natural nocturnal color change rather than a sign of illness.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, water chemistry, the power
    // outage rule and the sick-fish check cite the shared aquarium guides in the
    // sidebar's Health and More list. Rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md). The old hub's
    // weekly 20 to 25% water change was a figure no deep dive carries, so it is
    // retired here and filed as a gap in docs/READER_LOG.md. Built 2026-09-14
    // for the neon tetra set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "How many", value: "Ten. Groups of ten showed less aggression and darting and fed sooner than smaller groups. Six is the floor, and one species of ten beats two species of five.", source: "neon-tetra-enrichment-guide" },
        { label: "Tank size", value: "10 gallons for a school of 6, a 20-gallon long for the better 10 to 15. Schooling plays out horizontally, so long beats tall.", source: "neon-tetra-tank-setup-guide" },
        { label: "Temperature", value: "72 to 78°F as the target inside a workable 70 to 81°F, held steady: swings stress them more than a slightly imperfect setting. A heater on any tank of 10 gallons or more.", source: "neon-tetra-tank-setup-guide" },
        { label: "Water chemistry", value: "Soft and slightly acidic, pH 6.0 to 7.0 with low hardness, which is a different water from what a guppy tolerates. Test your source water first. Ammonia and nitrite read zero.", source: "neon-tetra-tank-setup-guide" },
        { label: "Filtration and substrate", value: "Gentle flow, a sponge filter or a baffled hang-on-back, over fine gravel or sand. A darker substrate makes the neon stripe pop.", source: "neon-tetra-tank-setup-guide" },
        { label: "Light and blackwater", value: "Dim to moderate for 8 to 10 hours a day. Driftwood and Indian almond leaves for tannins, dense plants and floating cover; bright light stresses a fish from shaded streams.", source: "neon-tetra-tank-setup-guide" },
        { label: "Feeding schedule", value: "Twice daily, what the school finishes in about 2 to 3 minutes. Fry and juveniles 3 to 4 small feeds a day, adults from about 6 months on twice.", source: "neon-tetra-feeding-guide" },
        { label: "Diet", value: "A quality tropical flake crushed fine, or a micro-pellet, for a mouth only 1 to 2mm across. Baby brine shrimp, daphnia or chopped bloodworms 2 to 3 feeds a week. Food too large is spat out, which starves the fish while the tank looks fed.", source: "neon-tetra-feeding-guide" },
        { label: "A dead fish", value: "Never leave one in the tank or let the others scavenge it. Neon tetra disease has no cure, and fish that eat an infected body contract it.", source: "neon-tetra-feeding-guide" },
        { label: "Quarantine", value: "2 to 4 weeks in a separate tank before a new fish joins the school, given the disease risk this species carries.", source: "neon-tetra-tank-setup-guide" },
        { label: "Tankmates", value: "Peaceful, similarly sized community fish. Nothing with a mouth big enough for a neon, and no fin nippers.", source: "neon-tetra-handling-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Budget", value: "$1 to $3 a fish, occasionally $5, a school of 6 to 12 for $10 to $40. Setup roughly $100 to $300. Vet care does not apply; water quality and over-the-counter treatment are the whole of it.", source: "neon-tetra-cost-guide" },
        { label: "Lifespan", value: "Around 5 years with stable care; average conditions see closer to 2 to 3.", source: "neon-tetra-cost-guide" },
        { label: "Adult size", value: "1 to 1.5 inches (2.5 to 4 cm)." },
        { label: "Water chemistry, the wider picture", value: "KH holds pH in place, and dosing pH-up or pH-down against it is how keepers crash a tank. Work with what the source water gives you.", source: "freshwater-ph-gh-kh-guide" },
        { label: "Cycle first", value: "Cycle the tank fully before any neon goes in. A fish this small has no margin for an ammonia spike, and the treatable conditions on the health list all trace to water.", source: "neon-tetra-enrichment-guide" },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "neon-tetra-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Small white spots like grains of salt, flashing against decor, rapid breathing: ich, treatable",
        "Ragged or bloody-edged fins: fin rot, treatable",
        "Restless swimming at night, fading color along the back, lumps under the skin, a curved spine: neon tetra disease, no cure, and the fish is separated so the others cannot eat it",
      ],
      vetLine: "Everything treatable here traces back to water quality and stability. Neon tetra disease is likely over-diagnosed; true cases are uncommon in a well-established tank.",
    },
    routes: [
      { slug: "neon-tetra-cost-guide", line: "$1 to $3 a fish, why the purchase is a group, and the $100 to $300 that goes into the tank around them." },
      { slug: "neon-tetra-tank-setup-guide", line: "10 gallons for six and a 20 long for ten, soft acidic water, gentle flow, dim light, and the blackwater detail." },
      { slug: "neon-tetra-feeding-guide", line: "Twice a day in 2 to 3 minutes, why a 1 to 2mm mouth changes what you buy, and the rule that stops an outbreak." },
      { slug: "neon-tetra-handling-guide", line: "Why this is a netting-only fish, the school floor, and the tankmates that turn a shoal into lunch." },
      { slug: "neon-tetra-health-issues-guide", line: "Neon tetra disease and why it is over-diagnosed, plus ich, fin rot, and swim bladder trouble." },
      { slug: "neon-tetra-enrichment-guide", line: "The 2010 study that tested group size properly, and why the answer came back ten rather than six." },
    ],
    buyList: [
      "10-gallon tank for a school of six, or a 20-gallon long for ten to fifteen",
      "Ten neon tetras rather than six, where the tank supports it",
      "Aquarium heater",
      "Sponge filter, or a hang-on-back unit you can baffle",
      "Fine gravel or sand in a darker color",
      "Driftwood and Indian almond leaves",
      "Dense midground live plants and floating plants",
      "Dim to moderate aquarium light on a timer",
      "Liquid water test kit",
      "Water conditioner",
      "Micro or nano pellet, or a tropical flake to crush",
      "Frozen baby brine shrimp, daphnia, or bloodworms",
    ],
    faqs: [
      { q: "What size tank does a school of neon tetras need?", a: "10 gallons for a school of 6, which is the practical floor. For the better group of 10 to 15, move up to a 20-gallon long. Schooling happens sideways, so favor length over height." },
      { q: "How often should I feed neon tetras?", a: "Twice a day for adults, morning and evening, only as much as they finish in about 2 to 3 minutes. Fry and juveniles need 3 to 4 small feedings a day until about 6 months old." },
      { q: "So is six enough?", a: "Six is the number most care sheets give and the study found ten better. The smallest functioning shoaling unit is often put at six to eight, so six is a floor rather than a target. If you can house ten, house ten." },
    ],
  },
  {
    id: "oscar",
    name: "Oscar",
    emoji: "🐟",
    difficulty: "Intermediate",
    petType: "Fish",
    image: "/assets/guides/oscar.jpg",
    tagline: "The big-personality cichlid that recognizes its keeper and rearranges the tank on a whim!",
    funFact: "Oscars are sometimes nicknamed 'water dogs' because of how strongly they bond with and recognize individual keepers - learning to beg at the glass, follow a finger around the tank, and in some cases tolerate supervised hand-feeding, behavior that sets them apart from most other fish.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine and the sick-fish check cite the shared
    // aquarium guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the oscar set test (docs/READER_REVIEWS.md), rewritten to
    // the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The old hub understated this build in every line that had a price on
    // it, all gone rather than moved: the canister filter at $100 to $200
    // against the cost guide's $325 to $340, the heater at $25 to $45
    // against $18 to $30, and a tank line of $150 to $350 on a page whose
    // own cost guide says the total "easily exceeds $1,000". It also opened
    // with "a minimum of 55 gallons for one juvenile", a figure no deep dive
    // carries, where the setup guide says to build the 75-gallon adult tank
    // immediately rather than upgrade into it. And it gave adult size twice,
    // as "12 to 14 inches or longer" in one place and "10 to 14, up to 16"
    // in another.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "75 gallons for a single adult, 100 to 125-plus for a pair. A 2-inch juvenile reaches 12 inches or more inside its first year, so buy the adult tank now.", source: "oscar-fish-tank-setup-guide" },
        { label: "Space first", value: "Everything else is downstream. No enrichment compensates for an adult oscar in a 40 gallon.", source: "oscar-fish-enrichment-guide" },
        { label: "Filtration", value: "A canister sized to 4 to 5 times the tank volume an hour, often with a second hang-on-back for redundancy, which in oscar keeping is the baseline rather than overkill.", source: "oscar-fish-tank-setup-guide" },
        { label: "Temperature", value: "74 to 81°F, kept stable, from a reliable submersible heater. No cold tolerance at all.", source: "oscar-fish-tank-setup-guide" },
        { label: "Water chemistry and changes", value: "pH 6 to 8 and soft to moderately hard water both suit them. Weekly changes of 25 to 30% are mandatory, and tie directly to preventing hole-in-the-head.", source: "oscar-fish-tank-setup-guide" },
        { label: "Substrate and decor", value: "Sand to sift, or smooth pea-sized gravel; nothing sharp near a mouth that works the floor. Anchor everything, consider thicker glass, and fit a tight lid, since they jump.", source: "oscar-fish-tank-setup-guide" },
        { label: "Let them move things", value: "They dig, shift decor and uproot plants on purpose. Give movable furniture: smooth stones, big driftwood, a deep sand bed. The layout will not stay put, and that is the point.", source: "oscar-fish-enrichment-guide" },
        { label: "Staple food", value: "A cichlid pellet at 35 to 45% protein for roughly 80% of the diet, the rest frozen or fresh: shrimp, krill, earthworms, mysis, occasional peas or zucchini.", source: "oscar-fish-feeding-guide" },
        { label: "Feeding frequency", value: "Under 3 to 4 inches, 3 times daily. 3 to 8 inches, twice. Adults over about 8 inches once, at most twice, cleared in 2 to 3 minutes. Many keepers fast adults one day a week.", source: "oscar-fish-feeding-guide" },
        { label: "Not feeder goldfish", value: "Feeders carry thiaminase, which breaks down vitamin B1, along with parasites and fat. Never a staple.", source: "oscar-fish-feeding-guide" },
        { label: "Tank mates", value: "Predatory, not just assertive: what fits in the mouth ends up there. Large tough fish, severums or big plecos, in a large tank, or alone.", source: "oscar-fish-handling-guide" },
        { label: "Not a hands-on pet", value: "They recognize their keeper and can be hand-fed, but the relationship lives at the glass. Lying motionless as if dead is documented normal behavior, not illness.", source: "oscar-fish-handling-guide" },
        { label: "Quarantine", value: "At least 30 days in a separate tank with its own nets and siphon, 30 to 60 for a fish you especially do not want to lose.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Budget", value: "$7 to $35 for a common juvenile, over $100 for a specialty variety. A low-end 55-gallon build is around $560, and the total easily passes $1,000 with the 75-gallon tank they need. Upkeep $35 to $40 a month.", source: "oscar-fish-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years, occasionally close to 20.", source: "oscar-fish-cost-guide" },
        { label: "Adult size", value: "10 to 14 inches (25 to 36 cm); up to 16 inches in optimal conditions." },
        { label: "Sick fish check", value: "Clear water is not safe water. Ammonia, nitrite and low oxygen are invisible, and gasping at the surface is the visible sign. Test before assuming illness.", source: "spotting-a-sick-fish-guide" },
      ],
    },
    emergencyCard: {
      source: "oscar-fish-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Small pitted holes on the head and along the lateral line, weight loss, stringy white feces: hole-in-the-head, treatable at home if caught early",
        "Small white spots across the body and fins: ich, treatable with a standard remedy plus fixing the stressor",
        "Frayed, discolored fin edges: fin rot, which does not clear until the water does",
        "One or both eyes swollen or bulging: popeye, water correction and antibacterial medication",
        "A distended abdomen and scales raised into a pinecone pattern: dropsy, often a poor outlook by the time it shows",
      ],
      vetLine: "Elevated nitrate is the common thread, hole-in-the-head most of all. Weekly water changes and heavy filtration are the primary defense.",
    },
    routes: [
      { slug: "oscar-fish-cost-guide", line: "$7 to $35 for the fish and past $1,000 for the tank it needs, the itemized build, and why the animal is the smallest number in the equation." },
      { slug: "oscar-fish-tank-setup-guide", line: "The 75-gallon adult minimum to build immediately rather than grow into, filtration sized to 4 or 5 times the volume, and the decor an oscar will move anyway." },
      { slug: "oscar-fish-feeding-guide", line: "The 80/20 pellet-and-frozen split, feeding frequency by size, and why feeder goldfish are the one mistake that matters most." },
      { slug: "oscar-fish-handling-guide", line: "The aquatic dog reputation and what is actually behind it, the sulking after a water change, and the rule that anything fitting in an oscar's mouth ends up there." },
      { slug: "oscar-fish-health-issues-guide", line: "Hole-in-the-head disease, treatable at home when caught early, plus ich, fin rot, popeye and dropsy, and the nitrate line running under all of them." },
      { slug: "oscar-fish-enrichment-guide", line: "Why the enrichment case here is argued from behavior rather than studies, the decor an oscar is allowed to rearrange, and target training a fish." },
    ],
    buyList: [
      "75-gallon or larger glass or acrylic aquarium",
      "Canister filter rated for 4 to 5 times the tank volume",
      "A secondary hang-on-back filter for redundancy",
      "Submersible heater with a built-in thermometer",
      "Water test kit",
      "Water conditioner",
      "Sand, or smooth pea-sized or larger gravel",
      "Heavy driftwood and smooth stones, anchored",
      "A tight, secure lid",
      "Gravel vacuum and buckets for weekly changes",
      "High-quality cichlid pellets, 35 to 45% protein",
      "Frozen shrimp, krill, mysis or earthworms",
      "A quarantine tank with its own net and hose",
    ],
    faqs: [
      { q: "What size tank does an oscar need?", a: "75 gallons is the usual minimum for one adult, and 100 to 125-plus for a pair or small group. A 2-inch juvenile hits 12 inches or more inside a year, so build for the adult rather than upgrading later." },
      { q: "Can I feed my oscar live feeder goldfish?", a: "Don't make it a staple. Feeder goldfish and rosy-red minnows commonly carry thiaminase, an enzyme that destroys vitamin B1, along with real parasite and disease risk and excess fat. A thiamine deficiency shows up as lethargy, weight loss, and nerve problems, and it can eventually be fatal." },
      { q: "What is hole-in-the-head disease in oscars?", a: "The signature oscar problem, common enough here to have earned its own hobby name. Look for small pitted lesions or holes on the head and down the lateral line, along with appetite and weight loss, lethargy, and stringy white feces." },
    ],
  },
  {
    id: "platy",
    name: "Platy",
    emoji: "\u{1F420}",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/platy.jpg",
    tagline: "The endlessly colorful beginner livebearer that's about as close to foolproof as fish get!",
    funFact: "Nearly every color and pattern of platy in the hobby, from Mickey Mouse to tuxedo to bumblebee, comes from generations of selective breeding and repeated hybridization between two closely related species, Xiphophorus maculatus and X. variatus, and even the swordtail. Wild platies are actually a fairly drab olive-brown; the huge color range sold today simply doesn't exist in nature.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. The power outage rule cites the shared aquarium
    // guides in the sidebar's Health and More list. Reconciled 2026-09-15 after
    // the platy set test (docs/READER_REVIEWS.md), rewritten to the template
    // shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // Retired rather than moved: "Keep water between 72 and 78 degrees F",
    // which the hub's own FAQ then contradicted with "down toward the low 70s
    // or even high 60s"; a tank line of $40 to $80 against the cost guide's
    // $20 to $40, with the filter and food rows drifting the same way; "20 to
    // 80 fry per birth", which quotes the documented extreme as the norm where
    // the cost and handling guides both say 20 to 50 with 80 as the ceiling;
    // a diet claim that platies "genuinely benefit from a real vegetable or
    // algae component ... rather than a purely protein-heavy diet" against a
    // feeding guide that says the opposite, that platies "aren't as strictly
    // dependent on a big vegetable ratio"; and "weekly 20 to 25 percent water
    // changes", a schedule no platy deep dive carries, filed as a gap in
    // docs/READER_LOG.md.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "10 gallons holds a small group of about five, though its 20 by 10 inch base misses the stricter 24 by 12 footprint. A 20 gallon long meets it, and is the size for six or more or a breeding group.", source: "platy-tank-setup-guide" },
        { label: "Temperature", value: "68 to 79°F, the mid-70s the usual target, held steady: swings over about 2°F in 24 hours are a cited shimmy trigger. A heater is the safer default even for cool-tolerant variatus lines.", source: "platy-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 7.0 to 8.2, tolerating 6.8 to 8.5, in medium-hard to hard water of roughly 10 to 30 dGH. They will not thrive in very soft, acidic water.", source: "platy-tank-setup-guide" },
        { label: "Cycle first", value: "2 to 4 weeks fishless, less with bottled bacteria. A platy survives an uncycled tank, which is exactly why this step gets skipped, and it does so while breathing ammonia.", source: "platy-tank-setup-guide" },
        { label: "A group", value: "Five or more. Numbers spread any chasing instead of focusing it on one fish.", source: "platy-enrichment-guide" },
        { label: "Sex ratio", value: "Two to three females per male at minimum, or an all-male group. Buying on color alone produces a male-heavy tank without anyone deciding to make one.", source: "platy-enrichment-guide" },
        { label: "Cover", value: "Dense live plants along the sides and back plus floating plants, with open water through the middle. Cover lets a chased female stop being chased and gives fry a survival rate you can manage.", source: "platy-enrichment-guide" },
        { label: "Feeding schedule", value: "Adults once or twice a day, cleared within a minute or two. Juveniles two to three smaller meals a day. Spread the food out so chased females still eat.", source: "platy-feeding-guide" },
        { label: "Diet", value: "A quality flake or small pellet as the staple, with blanched spinach, cucumber, zucchini or peas a couple of times a week. Platies need less vegetable than mollies.", source: "platy-feeding-guide" },
        { label: "The portion sign", value: "A long stringy trail of waste after a meal means the portion was too large. Overfeeding drives constipation and swim bladder trouble, and is far more common than underfeeding.", source: "platy-feeding-guide" },
        { label: "Fry are coming", value: "Broods of 20 to 50 roughly every 4 to 6 weeks, and a female stores sperm for months, so an all-female group bought from a mixed tank still produces fry.", source: "platy-cost-guide" },
        { label: "Sexing", value: "Males grow a rod-like anal fin, the gonopodium, at anywhere from about two to six and a half months. Females keep the fan-shaped fin and often show a dark gravid spot near the vent.", source: "platy-handling-guide" },
        { label: "Quarantine", value: "2 to 3 weeks in a separate tank before new fish join the display, which catches most problems, shimmy included, before they spread.", source: "platy-health-issues-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Budget", value: "$2 to $6 a fish, a six-pack around $30. A basic setup runs $60 to $120, and a 10-gallon costs about $15 to $20 a month to run. Vet care does not apply.", source: "platy-cost-guide" },
        { label: "Lifespan", value: "2 to 4 years, with excellent water pushing a fish toward 5.", source: "platy-cost-guide" },
        { label: "Adult size", value: "2 to 3 inches (5 to 7.5 cm), females larger than males." },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "platy-health-issues-guide",
      heading: "Test the water first, then act on these today. Platies rarely see a vet; nearly all of this is handled at home.",
      callNow: [
        "Small white spots like grains of salt across the body and fins: ich, treated with copper sulfate or formalin medication plus the water fix that let it in",
        "Fin edges turning white, ragged, or frayed from the tips inward",
        "Buoyancy problems: floating, sinking, or swimming at an odd angle",
        "A side-to-side, snake-like rocking as the fish swims: shimmy, fixed by correcting the water",
        "Scales standing out in a raised, pinecone pattern: dropsy, the hardest condition here to treat",
      ],
      vetLine: "Stress, unstable water, overcrowding, and skipped quarantine sit behind nearly every condition on this list.",
    },
    routes: [
      { slug: "platy-cost-guide", line: "$2 to $6 a fish, $60 to $120 for the tank around them, and the fry cost nobody budgets for." },
      { slug: "platy-tank-setup-guide", line: "A real 10 gallons and why a 20 long meets the stricter footprint, hard alkaline water, and a filter that won't shred fry." },
      { slug: "platy-feeding-guide", line: "Once or twice a day, why the vegetable side matters less here than for a molly, and the stringy-waste sign you overfed." },
      { slug: "platy-handling-guide", line: "Gonopodium versus gravid spot, when a platy is old enough to sex, and four concrete ways to manage the population." },
      { slug: "platy-health-issues-guide", line: "Ich, fin rot, dropsy, swim bladder and shimmy, plus the melanoma story told honestly in both directions." },
      { slug: "platy-enrichment-guide", line: "The livebearer harassment research, the sex ratio it implies, and what cover actually does in a tank full of fry." },
    ],
    buyList: [
      "10-gallon tank for a small group, or a 20-gallon long to meet the stricter footprint",
      "Tight-fitting lid",
      "Submersible aquarium heater",
      "Gentle filter, or a sponge filter if fry survival matters",
      "Dense live plants along the sides and back, plus floating plants",
      "Crushed coral or a commercial buffering product, if your tap water runs soft",
      "Liquid water test kit",
      "Water conditioner",
      "High-quality flake or small pellet",
      "Spinach, cucumber, zucchini or peas to blanch",
      "Frozen brine shrimp, bloodworms or daphnia",
    ],
    faqs: [
      { q: "What temperature do platies need?", a: "68 to 79\u00B0F, with the mid-70s the usual target. Hold it steady rather than chasing a number: swings over about 2\u00B0F in a day are the problem. Variatus-line platies handle the cool end better than most tropical fish, though a heater is still the safer default unless the room stays warm all year." },
      { q: "How often should I feed my platy?", a: "Adults do well fed once or twice a day, sometimes stretched to three times for very small portions, feeding only what's fully cleared within a minute or two. Juveniles need two to three smaller meals a day to keep pace with faster growth." },
      { q: "Is it true that platies can get tumors?", a: "Yes, and it's one of the most studied facts in the species, but keep it in perspective. Certain platy and swordtail genetic lines develop melanoma through a well-understood mechanism, and Xiphophorus fish have been used as a cancer research model for over 70 years. Importantly, this does not happen spontaneously in an ordinary pet-store platy under normal conditions, it requires deliberate cross-breeding between platies and swordtails in a lab setting to unmask the trait. If you find a lump or dark growth on your own platy, it's far more likely to be an injury, a cyst, or an unrelated growth than that specific research-famous condition, a vet or fish-health specialist can help rule out the more common, more treatable causes." },
    ],
  },
  {
    id: "swordtail",
    name: "Swordtail",
    emoji: "\u{1F420}",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/swordtail.jpg",
    tagline: "The active, sword-tailed livebearer that's basically a guppy's bigger, livelier cousin!",
    funFact: "Female swordtails that have already given birth can sometimes go on to develop a sword, male coloring, and even father broods of their own later in life. Hobbyists have reported the switch for generations, and scientists have studied it since the 1930s, though researchers still debate whether it's a true sex reversal or male traits simply emerging late in a fish that was missexed as a juvenile.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Cycling and the power outage rule cite the shared
    // aquarium guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the swordtail set test (docs/READER_REVIEWS.md),
    // rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // Retired rather than moved: "A 20-gallon tank is a reasonable minimum",
    // which takes the floor as the recommendation where the setup guide's own
    // title is "A Real 29 to 30 Gallons"; "Keep water between 70 and 82 degrees
    // F" against 64 to 82 with 72 to 79 cited most often, a range whose low end
    // matched neither; a tank line of "$70 | $150" against the cost guide's $35
    // to $60, with the filter, food, conditioner and test kit rows all drifting
    // too; and "one male with two or three females", which is the floor the
    // handling guide explicitly calls the weaker option.
    //
    // The ratio reads as three different numbers across the set and is not
    // actually a disagreement: handling and health both say one male to three
    // or four females, handling notes some sources say two or three, and
    // enrichment says two to three minimum with four or more as the clean
    // version. The hub was the only page that took the floor as the answer.
    //
    // The hub also never stated the enrichment guide's single most useful
    // stocking rule, that two males is the problem number. It is the first
    // behavioral row below.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Not two males", value: "The single most useful stocking rule. With two, every contest is the same pair and the loser has nowhere to be. One male with a group of females, or several males in a large planted tank where the aggression spreads.", source: "swordtail-enrichment-guide" },
        { label: "Tank size", value: "20 gallons is the floor for a small trio; 29 to 30 gallons is the realistic starting point for an active, open-water fish. Long rather than tall, over fine gravel or sand, nothing sharp near a lyretail's fins.", source: "swordtail-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 7.0 to 8.4 in moderately hard to hard water, 12 to 30 dGH. Soft tap water gets crushed coral or a buffering product.", source: "swordtail-tank-setup-guide" },
        { label: "Temperature", value: "72 to 79°F is the steady target inside a workable 64 to 82°F, with swings under about 2°F in 24 hours.", source: "swordtail-tank-setup-guide" },
        { label: "The lid", value: "They escape through gaps well under an inch. A full mesh or glass lid, a feeding hatch no larger than necessary, and a check after any rearranging.", source: "swordtail-tank-setup-guide" },
        { label: "Filtration", value: "Flow of 4 to 5 times the tank volume an hour, from a hang-on-back or canister. A sponge filter only if fry survival is the priority.", source: "swordtail-tank-setup-guide" },
        { label: "Cover", value: "Dense live plants along the sides and back, open water through the middle. Cover for pursued females, and broken sight lines that stop a dominant male tracking a subordinate across the tank.", source: "swordtail-enrichment-guide" },
        { label: "Feeding", value: "Once or twice a day, cleared within about 2 minutes; overfeeding is the common mistake. Vegetable content a few times a week, and bloodworms, brine shrimp or daphnia in regular rotation.", source: "swordtail-feeding-guide" },
        { label: "Acclimation", value: "Float the sealed bag 15 to 20 minutes, then drip over 45 to 60 minutes. Net the fish in; bag water carries transport ammonia.", source: "swordtail-handling-guide" },
        { label: "Quarantine", value: "2 to 4 weeks in a separate tank before a new fish joins the display.", source: "swordtail-handling-guide" },
        { label: "Sexing", value: "Males carry the sword and a rod-like anal fin. Females have neither and are the larger sex.", source: "swordtail-handling-guide" },
        { label: "Sex ratio", value: "One male to three or four females. Chewed fins or a clamped, listless fish in a male-heavy tank means move it to a recovery tank and fix the ratio at the same time.", source: "swordtail-health-issues-guide" },
        { label: "Budget", value: "$3 to $25 a fish, more for lyretails. Setup $115 to $190, more at 29 or 30 gallons, then $20 to $35 a month. Swordtails rarely see a vet.", source: "swordtail-cost-guide" },
        { label: "Lifespan", value: "3 to 5 years with stable water.", source: "swordtail-cost-guide" },
        { label: "Adult size", value: "Males up to 5.5 inches (14 cm) including the sword; females up to 6.2 inches (16 cm)." },
        { label: "Fry are coming", value: "A single female produces 20 to 100 or more fry roughly every 4 weeks without a fresh mating. Swordtails and platies interbreed readily, so a mixed livebearer tank breeds hybrids.", source: "swordtail-cost-guide" },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
      ],
    },
    emergencyCard: {
      source: "swordtail-health-issues-guide",
      heading: "Test the water first, then act on these today. Swordtails rarely see a vet; nearly all of this is handled at home.",
      callNow: [
        "Small white spots like grains of salt across the body and fins",
        "Ragged, frayed, or discolored fin edges",
        "Buoyancy problems, usually from overfeeding or constipation",
        "Chewed fins or a clamped, listless fish in a male-heavy tank: move it and fix the ratio",
        "Scales standing out in a raised, pinecone pattern: dropsy, the hardest condition here to treat",
      ],
      vetLine: "An unbalanced male-to-female ratio measurably raises the odds of the pathogen-driven conditions above taking hold.",
    },
    routes: [
      { slug: "swordtail-cost-guide", line: "$3 to $25 a fish, $115 to $190 for the tank, and why sizing up costs more than the table says." },
      { slug: "swordtail-tank-setup-guide", line: "A real 29 to 30 gallons, 64 to 82F, four to five times turnover, and a lid that actually seals." },
      { slug: "swordtail-feeding-guide", line: "The two-minute rule, vegetables a few times a week, and the five reasons a swordtail goes off its food." },
      { slug: "swordtail-handling-guide", line: "Float then drip, net rather than pour, quarantine two to four weeks, and sexing by the sword." },
      { slug: "swordtail-health-issues-guide", line: "Ich, fin rot, dropsy and swim bladder, plus the sex ratio treated as the health issue it is." },
      { slug: "swordtail-enrichment-guide", line: "Why two males is the problem number, the ratio that follows from it, and what planting actually does." },
    ],
    buyList: [
      "20-gallon long as a floor, 29 or 30 gallons as the real target",
      "Lid that seals, with no gaps at the back or around cutouts",
      "Submersible aquarium heater",
      "Filter rated for 4 to 5 times the tank volume per hour",
      "Sponge filter, if fry survival matters",
      "Dense live plants along the sides and back, open water through the middle",
      "One male and four or more females, or a single-sex group",
      "Liquid water test kit",
      "Water conditioner",
      "Staple flake or pellet",
      "Zucchini, spinach or peas to blanch",
    ],
    faqs: [
      { q: "What size tank does a swordtail need?", a: "20 gallons is the genuine floor for a small trio, one male and two or three females, but 29 to 30 gallons is the more realistic starting point that most direct retailers and care sheets recommend, since swordtails are more active, open-water swimmers than a molly or platy. Go long and rectangular over tall, and use a lid, swordtails are capable jumpers." },
      { q: "What temperature do swordtails need?", a: "Tropical, roughly 64 to 82\u00B0F, with 72 to 79\u00B0F cited most often as the steadier target. Hold it steady rather than chasing a number: keep swings under about 2\u00B0F a day. A submersible heater is necessary unless the room stays warm all year." },
      { q: "Why does male-to-female ratio matter so much with swordtails?", a: "Because males can be persistent toward females and combative toward each other. Sources commonly recommend one male to three or four females, some say two or three is enough, but the higher end spreads out mating attempts more effectively and reduces the fin damage and stress that come with a single female fielding constant attention." },
    ],
  },
  {
    id: "zebra-danio",
    name: "Zebra Danio",
    emoji: "🐠",
    difficulty: "Beginner",
    petType: "Fish",
    image: "/assets/guides/zebra-danio.jpg",
    tagline: "The tireless little striped torpedo that never stops commuting!",
    funFact: "Zebra danios, known to scientists as zebrafish, are the most widely used non-mammalian vertebrate model organism in developmental biology and genetics research. Their embryos develop transparently outside the mother's body within hours of fertilization, letting researchers watch organs form in real time, and roughly 70 percent of human genes have a working counterpart in the zebrafish genome, sequenced in full in 2013. That same genetic malleability is also how GloFish, the first genetically modified animal ever sold as a pet, came to exist: they're fluorescent zebra danios.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Water chemistry, summer cooling and the power outage
    // rule cite the shared aquarium guides in the sidebar's Health and More
    // list. Reconciled 2026-09-15 after the zebra danio set test
    // (docs/READER_REVIEWS.md), rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // Retired rather than moved: a whole cost table written independently of
    // the cost guide, with the tank at $50 to $100 against $18 to $60, the
    // filter at $20 to $35 against $8 to $15, food at $30 to $50 against $15
    // to $25, and the test kit filed as annual where the cost guide files it
    // as a one-time purchase. Also "Feed small amounts once or twice daily"
    // against the feeding guide's twice a day minimum, and a heater listed as
    // optional equipment without the range that makes it optional.
    //
    // Group size gives the floor and the target together, 6 workable against 8
    // to 10 for natural schooling, with the enrichment guide's behavioral reason
    // for the higher number in the same row. The old hub said "at least five or
    // six" and stopped at the floor, which is the same failure the swordtail hub
    // had with its sex ratio.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "How many", value: "At least 6, and 8 to 10 is the better start. In a small group the nipping lands on the same fish over and over; a larger one spreads it out.", source: "zebra-danio-handling-guide" },
        { label: "Tank size", value: "A 10-gallon works for the bare minimum school of 6. A 20-gallon long is the better minimum for 8 to 10, and long beats tall: danios in a short tank run laps.", source: "zebra-danio-tank-setup-guide" },
        { label: "Heater", value: "Optional at 64 to 77°F, which is room temperature in most homes. Add one if the room runs cool or tropical tankmates need warmer, steadier water.", source: "zebra-danio-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 6.0 to 8.0 and hardness anywhere from about 90 to 357 ppm. Ammonia and nitrite still read zero before stocking.", source: "zebra-danio-tank-setup-guide" },
        { label: "Filtration and flow", value: "Turnover 4 to 5 times the volume an hour, sponge or hang-on-back, with the outlet aimed along the tank so there is a fast end and a slow end.", source: "zebra-danio-tank-setup-guide" },
        { label: "The lid", value: "They jump 20 to 30 cm, and a small gap in the hood is enough. A tight lid is not optional.", source: "zebra-danio-tank-setup-guide" },
        { label: "Planting", value: "Substrate and live plants, not bare glass. Plant the sides and back and leave the middle open, so there is cover and somewhere to sprint.", source: "zebra-danio-enrichment-guide" },
        { label: "Feeding", value: "Twice a day, what the school finishes in two to three minutes.", source: "zebra-danio-feeding-guide" },
        { label: "Fry you did not plan", value: "Daily live or frozen food is what triggers spawning. Keep it an occasional treat if you do not want fry.", source: "zebra-danio-feeding-guide" },
        { label: "Acclimation", value: "Float the sealed bag 15 to 20 minutes, then a quarter cup of tank water every 5 minutes for another 15 to 20. The bag water goes down the drain, not in the tank.", source: "zebra-danio-handling-guide" },
        { label: "Quarantine", value: "Two to four weeks in a 10 to 20-gallon bare tank with its own sponge filter and heater. It doubles as the hospital tank later.", source: "zebra-danio-handling-guide" },
        { label: "Budget", value: "$2 to $3 a fish, about $12 to $30 for the school; GloFish are the same species at about $8 each. Most first setups land around $100 to $180.", source: "zebra-danio-cost-guide" },
        { label: "Lifespan", value: "Around 3.5 years, up to 5.5 with excellent care.", source: "zebra-danio-cost-guide" },
        { label: "Adult size", value: "1.5 to 2.5 inches (4 to 6 cm); occasionally to 3 inches (7.5 cm) in captivity." },
        { label: "Mycobacteriosis", value: "Lethargy, emaciation, ulcers and pale patches, with no reliable cure once visible. It can infect people through a cut, so gloves for tank maintenance if you have one.", source: "zebra-danio-health-issues-guide" },
        { label: "Water chemistry, the wider picture", value: "KH holds pH in place, and dosing pH-up or pH-down against it is how keepers crash a tank. Test the source water and work with what it gives you.", source: "freshwater-ph-gh-kh-guide" },
        { label: "Water changes", value: "25 to 30% weekly from the substrate, with conditioned water at tank temperature. Test nitrate first: under 20 ppm the routine is right, past 40 ppm the next change is 50%.", source: "aquarium-water-changes-guide" },
        { label: "Power outage", value: "Oxygen is the threat, not darkness. Unplug the filter rather than letting it sit dead in the water, and keep the surface moving.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "zebra-danio-health-issues-guide",
      heading: "Test the water first, then act on these today. Aquatic vets are rare, so nearly all of this is handled at home.",
      callNow: [
        "Small white spots like grains of salt, extra mucus, flashing, rapid breathing: ich, treated with a gradual temperature rise plus ich medication and daily partial water changes",
        "Fin edges discoloring, then fraying: fin rot, treatable",
        "Floating at the surface unable to swim down, or struggling to rise",
        "Lethargy, appetite loss, and emaciation, with ulcers, pale patches, or white nodules: mycobacteriosis, no reliable cure once visible",
      ],
      vetLine: "A slow-growing, sometimes painful bump on your own skin after tank work is a doctor's visit; the same bacterium infects people through cuts.",
    },
    routes: [
      { slug: "zebra-danio-cost-guide", line: "$2 a fish, $100 to $180 for a first setup, and why GloFish cost four times as much for identical care." },
      { slug: "zebra-danio-tank-setup-guide", line: "The 90x30cm footprint, 64 to 77F, and the rare community fish that might not need a heater." },
      { slug: "zebra-danio-feeding-guide", line: "Twice a day, two to three minutes, and the live food that triggers an accidental spawn." },
      { slug: "zebra-danio-handling-guide", line: "Trap and guide rather than chase, float-and-drip timings, and the school size that matters more than technique." },
      { slug: "zebra-danio-health-issues-guide", line: "Ich, fin rot, swim bladder, and the fish tuberculosis this species is studied for." },
      { slug: "zebra-danio-enrichment-guide", line: "The enrichment study that measured survival rather than behavior, and why a cube is the wrong tank." },
    ],
    buyList: [
      "A school of 8 to 10, not two or three to start",
      "20-gallon long for that school, 10 gallons only for a bare minimum six",
      "Tight-fitting lid, every seam checked",
      "Sponge or hang-on-back filter at 4 to 5 times tank volume per hour",
      "Heater, only if the room runs cool or tankmates need one",
      "Substrate and live plants along the sides and back, open water through the middle",
      "Driftwood for structure",
      "Liquid water test kit",
      "Water conditioner",
      "Flake or micro-pellet food",
      "Frozen bloodworms or brine shrimp, for variety rather than daily",
    ],
    faqs: [
      { q: "What size tank does a school of zebra danios need?", a: "A 10-gallon tank is workable for the bare minimum school of 6. Seriously Fish's recommended footprint, roughly 90x30cm even for a small group, lines up closely with a 20-gallon long tank, a better practical minimum for the fuller 8 to 10 fish school most sources recommend." },
      { q: "Do zebra danios need a heater?", a: "Not strictly. Multiple care sources put their comfortable range at 64 to 77\u00B0F, close enough to room temperature in most homes that a heater is optional. It's still worth adding if your home runs cool or if danios share a tank with tropical fish that need warmer, more stable water." },
      { q: "How many zebra danios should I keep together?", a: "At least 6. Aquarium Co-Op names 5 to 6 as the workable minimum, but Seriously Fish recommends starting with 8 to 10 or more for natural schooling behavior. A group that's too small is more likely to direct fin-nipping energy at tankmates instead of schooling normally." },
    ],
  },
];
