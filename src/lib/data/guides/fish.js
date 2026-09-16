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
    // entry, which no deep dive repeats. Cycling, quarantine, power outage,
    // filtration and the sick-fish check cite the shared aquarium guides in the
    // sidebar's Health and More list. The old hub's weekly 25% water change was
    // a figure no deep dive carries, so it is retired here and filed as a gap in
    // docs/READER_LOG.md. Built 2026-09-14 for the angelfish set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "The tank", value: "29 gallons, and specifically a tall configuration, is the practical minimum for a single adult. Prioritize height, aim for at least 18 to 20 inches, over length. Angelfish can jump, and a tank left uncovered, or covered with meaningful gaps, is a real risk.", source: "angelfish-tank-setup-guide" },
        { label: "Temperature and heater", value: "A genuinely tropical species, comfortable in the 78 to 82°F range and tolerant down to about 75°F. Keep fluctuation within about 2 degrees in either direction. Budget roughly 3 to 5 watts per gallon, meaning a 200 to 250 watt heater for a 55-gallon tank.", source: "angelfish-tank-setup-guide" },
        { label: "Water chemistry", value: "Slightly acidic to neutral, pH 6.5 to 7.0, with soft water genuinely preferred, especially if you're hoping for breeding pairs to form.", source: "angelfish-tank-setup-guide" },
        { label: "Filtration and substrate", value: "Gentle to moderate flow works best, angelfish are relatively weak swimmers and don't do well fighting strong current. Fine sand or small, smooth gravel.", source: "angelfish-tank-setup-guide" },
        { label: "Group size", value: "Either keep a bonded pair, or keep enough fish in a large enough tank that aggression spreads across the group. Two or three adults in a modest tank is the setup that produces a bullied fish.", source: "angelfish-enrichment-guide" },
        { label: "Adding them to the tank", value: "Add angelfish to a tank last, after the other community fish are already established. An adult angelfish will eat small fish, neon tetras and guppies among them, once it reaches roughly 3 inches.", source: "angelfish-handling-guide" },
        { label: "Feeding", value: "Omnivores with a protein-leaning diet. Adults once or twice a day, a pinch of food at a time, letting them clear it within about 2 to 5 minutes before removing anything left over. Newly introduced angelfish commonly refuse food for the first 2 to 4 days in a new tank.", source: "angelfish-feeding-guide" },
        { label: "Budget", value: "Common freshwater angelfish run $3 to $20 for standard varieties, $3 to $50 across most varieties, with fancy morphs higher and rare or extra-large specimens pushing past $100. Roughly $300 to $600 upfront for a proper tank, then roughly $15 to $40 a month. Marine angelfish are a different, far pricier group entirely, commonly $150 to $1,500, and need a saltwater reef setup rather than a freshwater community tank.", source: "angelfish-cost-guide" },
        { label: "Lifespan", value: "8 to 12 years is typical with good care, up to around 15 years under genuinely ideal conditions.", source: "angelfish-cost-guide" },
        { label: "Adult size", value: "6 inches (15 cm) body, 8 to 10 inches (20 to 25 cm) including fins." },
        { label: "Cycling", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Quarantine", value: "At least 30 days for a new or sick fish, and 30 to 60 days for one you especially don't want to lose or don't want introducing something to an established tank.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "The threat is oxygen, not darkness. Unplug the filter deliberately rather than letting it sit dead in the water.", source: "aquarium-power-outage-and-transport-guide" },
        { label: "Sick fish check", value: "Clear water doesn't mean safe water. Test the water before assuming illness.", source: "spotting-a-sick-fish-guide" },
      ],
    },
    emergencyCard: {
      source: "angelfish-health-issues-guide",
      callNow: [
        "Small white spots resembling grains of salt, flashing against decor, clamped fins, and rapid gill movement",
        "Pitting lesions on the head and along the lateral line, white stringy feces, appetite loss, and fading color",
        "Ragged, receding fins with discolored edges",
        "Fluffy white growths, typically secondary to an injury or a period of stress",
      ],
      vetLine: "Most keepers manage the conditions above at home rather than through a clinic visit. Test and correct the water first, since treatment alone without fixing the environment tends not to hold.",
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
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
        { label: "Quarantine", value: "At least 30 days in a bare hospital tank before joining others. Thirty days is the floor, not the target.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Oxygen loss is the fast danger, not the cold or the dark. Aerate right away with a battery air pump, or agitate the surface by hand roughly every 10 to 15 minutes in a small tank. A betta's transport bag needs far more air than a typical fish bag, since it breathes air directly through its labyrinth organ.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "betta-fish-health-issues-guide",
      callNow: [
        "Raised, pinecone-like scales (dropsy), usually a poor prognosis but worth same-day vet contact",
        "Pale or greyish saddle-shaped patches, ragged fin edges, or a cottony fuzz (columnaris), one to act on the same day you see it",
        "A fine gold or rust-colored dusty sheen (velvet), which moves fast and can be fatal quickly",
        "Buoyancy problems (floating, sinking, or swimming at odd angles) that don't clear after a 2 to 3 day fast",
        "Any illness that doesn't improve once water quality and temperature are corrected",
      ],
      vetLine: "An aquatic vet, found before you need one. Most of what's on this list is prevented, not treated, through consistent water quality, temperature, and a proper heated, filtered, cycled tank; aquatic vets are the exception, reserved for genuinely serious or unclear cases.",
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
    tagline: "The tentacle-snouted algae cleaner that actually stays small, unlike the 'baby pleco' at the pet store!",
    funFact: "Most of the cheap, inch-long 'plecos' sold for algae control are common plecos (Hypostomus plecostomus) or a related Pterygoplichthys species, and neither stays small: both regularly reach 12 to 24 inches and need a 75-gallon-or-larger tank as adults, a size surprise so common that escaped and released pet plecos have established breeding, invasive populations in Texas and Florida rivers. Researchers pulled more than 400 invasive armored catfish from a single stretch of Texas's San Marcos River in one 2022 removal effort. The bristlenose pleco profiled here is a different, deliberately smaller species that tops out around 4 to 6 inches for life, which is exactly why it's the pleco actually worth recommending to a beginner.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Cycling, filtration, the hospital tank, water
    // chemistry, the power outage rule and the sick-fish check cite the shared
    // aquarium guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the bristlenose pleco set test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Confirm the species first", value: "The single most expensive mistake in this hobby isn't a bristlenose pleco, it's buying a fish labeled simply \"pleco\" that turns out to be a common pleco (*Hypostomus plecostomus*) instead. A common pleco grows into a 12 to 24-inch adult that needs a 75-gallon-plus tank, while a bristlenose stays 4 to 6 inches for life.", source: "bristlenose-pleco-cost-guide" },
        { label: "The tank", value: "20 gallons is the practical minimum for a single adult bristlenose, and 29 to 30 gallons is genuinely the better long-term choice given how much waste one fish produces relative to its size. 74 to 80°F suits most captive-bred bristlenose, with some sources citing a somewhat wider tolerance either side of that range. Aim for a pH around 6.5 to 7.8, and keep ammonia and nitrite at zero through regular water changes.", source: "bristlenose-pleco-tank-setup-guide" },
        { label: "Driftwood is required, not decorative", value: "Skipping it entirely is genuinely associated with digestive problems even in a fish that's otherwise being fed correctly.", source: "bristlenose-pleco-tank-setup-guide" },
        { label: "Wood, caves and filtration", value: "Give a substantial piece, or several. Nocturnal fish that spend the day wedged into something. A cave gives that, and males use caves as spawning sites, which is why a cave per fish is sensible when you keep more than one. Plecos produce a lot of waste and need real filtration and current.", source: "bristlenose-pleco-enrichment-guide" },
        { label: "Feeding, and the algae myth", value: "Feed once a day, ideally after lights-out since this is a nocturnal species that does most of its grazing overnight. Tank algae rarely grows fast enough to keep pace with a full-grown adult, and a bristlenose left to fend for itself on algae and other fish's leftovers gradually loses condition rather than failing suddenly, which makes the problem easy to miss until it's fairly advanced.", source: "bristlenose-pleco-feeding-guide" },
        { label: "Never handled, and hard to net", value: "A bristlenose pleco has stiff, lockable spines on its pectoral and dorsal fins, a defense mechanism it can raise when startled. Many experienced keepers avoid netting a pleco directly and instead herd it into a cup or wide plastic container, then lift the container out with the fish inside.", source: "bristlenose-pleco-handling-guide" },
        { label: "The copper warning", value: "Copper-based treatments belong on the avoid list entirely, use an alternative medication for any copper-susceptible parasite instead.", source: "bristlenose-pleco-health-issues-guide" },
        { label: "Budget, the fish", value: "Common color morphs like albino and brown typically run $7 to $10, with green dragon and lemon varieties close behind and red bristlenose running a bit more, around $12.", source: "bristlenose-pleco-cost-guide" },
        { label: "Budget, the setup", value: "Roughly $155 to $265, and ongoing costs run about $45 to $85 a year.", source: "bristlenose-pleco-cost-guide" },
        { label: "Lifespan", value: "5 to 10 years is typical with decent care, and well-kept individuals are reasonably often reported living 12 to 14 years.", source: "bristlenose-pleco-cost-guide" },
        { label: "Adult size", value: "4 to 6 inches (10 to 15 cm)." },
        { label: "Cycling, the finish line", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Hospital tank", value: "A bare hospital tank with its own net and siphon hose, never shared with the display tank, and disinfected and stored dry between uses.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "The threat is oxygen, not darkness. Unplug the filter deliberately rather than letting it sit dead in the water.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "bristlenose-pleco-health-issues-guide",
      callNow: [
        "A sunken, concave belly, sometimes alongside faded color or fins that start to look ragged even without an infection driving it",
        "Small, pinhead-sized white spots across the body and fins",
        "Frayed or discolored fin edges",
        "Barbel and fin damage from rough decor: sharp gravel or rough decor can injure the soft underbelly and barbels as a bristlenose forages and grazes along the bottom, and an open wound like that is a real entry point for bacterial infection",
      ],
      vetLine: "Diet drives the single biggest risk, decor and substrate drive physical injury, and water quality sits underneath nearly everything else on this list. A consistent, dedicated bottom-feeder food, rather than leftover algae and scraps, keeps a bristlenose in the kind of steady condition that makes it more resilient generally. Malnutrition: the biggest real risk. Slow malnutrition from relying on tank algae instead of a real diet. It's not dramatic, there's no single obvious symptom on day one, which is exactly why it does more long-term damage than a faster-moving illness that gets noticed and treated right away.",
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
    tagline: "The neon tetra's brighter, warmer-water-tolerant cousin, with a red stripe that runs the full body!",
    funFact: "Huge numbers of cardinal tetras are still sustainably wild-harvested from Brazil's Rio Negro every year through community-based fisheries, a rare case where the aquarium trade directly funds rainforest conservation by giving local communities a real economic reason to keep the river intact.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Cycling and the
    // hospital tank cite the shared fish guides in the sidebar's Health and
    // More list. The old hub narrowed the temperature band to 73-81 against
    // the setup guide's 73-84, put the school floor at 6 against the
    // handling and enrichment guides' 10, and misspelled the neon tetra
    // disease parasite as "hyphessobrycetis". Reconciled 2026-09-14 for
    // batch H (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Tank size", value: "A 10-gallon tank is workable for the bare minimum school of 6. The recommended footprint, roughly 24x12 inches of base, lines up closely with a 20-gallon long tank, a better practical minimum for the fuller 8 to 10 fish school most sources recommend for this species.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "School size", value: "The workable minimum is 10, since fewer fish kept together tend to develop sickness from stress; start with 8 to 10 or more for natural schooling behavior, a notably higher bar than the six-fish floor commonly cited for neon tetra.", source: "cardinal-tetra-handling-guide" },
        { label: "Temperature and water", value: "73 to 84°F is the tolerated range for this species, with general care closer to 77 to 82°F. Soft and acidic: roughly pH 5.0 to 7.0, and toward the lower end where possible. Ammonia and nitrite both need to read zero before stocking.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "Flow, substrate and blackwater", value: "Keep the flow gentle. A sponge filter is a common, effective choice. Fine gravel or sand, and a darker color makes cardinal tetra's red and blue stripe stand out more against the background. Driftwood and Indian almond leaves release natural tannins that stain the water and lower pH, mimicking the shaded, leaf-litter-covered streams this species evolved in.", source: "cardinal-tetra-tank-setup-guide" },
        { label: "Settling them in", value: "Cardinals often arrive after a long chain of transfers, already stressed, and losses in the first fortnight are common. Acclimate slowly, have the tank cycled and stable before they arrive, dim the lights, and leave them alone.", source: "cardinal-tetra-enrichment-guide" },
        { label: "Feeding", value: "A high-quality micro-pellet or crushed flake as the staple, supplemented with live or frozen bloodworms, mosquito larvae, and daphnia. Cardinal tetras are small-mouthed fish, so food needs to be sized down: whole flakes and standard pellets are usually too large. Twice a day is the practical standard, offering only what the school finishes in a couple of minutes.", source: "cardinal-tetra-feeding-guide" },
        { label: "The rule that protects the school", value: "Never leave a dead fish in the tank or let tankmates scavenge a visibly sick fish's body.", source: "cardinal-tetra-feeding-guide" },
        { label: "Quarantine", value: "Quarantining any new fish for a full 30 days before introduction is the most effective way to keep ich out of an established tank in the first place.", source: "cardinal-tetra-health-issues-guide" },
        { label: "Budget", value: "$1 to $3 a fish, so roughly $8 to $30 for a starting school of 8 to 10, and $65 to $230 for the core equipment. Add substrate and basic decor and most first-time setups land around $100 to $250.", source: "cardinal-tetra-cost-guide" },
        { label: "Lifespan", value: "About five years in captivity under good, stable conditions, and individuals may reach ten.", source: "cardinal-tetra-cost-guide" },
        { label: "Adult size", value: "2 inches (5 cm)." },
      ],
    },
    emergencyCard: {
      source: "cardinal-tetra-health-issues-guide",
      callNow: [
        "Restless or erratic swimming, often more noticeable at night",
        "Fading or patchy color",
        "Visible lumps under the skin",
        "A curved or deformed spine in advanced cases",
        "Small white spots resembling grains of salt, with flashing against decor and rapid breathing",
        "Discoloration on the fin edges, then fraying",
        "Floating at the surface unable to swim down, or struggling to rise from the bottom",
      ],
      vetLine: "Nearly everything treatable on this list traces back to water quality and stability, exactly what a properly cycled tank with consistent temperature and regular water changes prevents. The one condition that isn't treatable, neon tetra disease, is prevented primarily through quarantine, the single habit that matters most for keeping this species healthy long-term.",
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
    // encyclopedia entry, which no deep dive repeats. Cycling, the hospital
    // tank and sick-fish signs cite the shared fish guides in the sidebar's
    // Health and More list. The old hub priced a tank at double the cost
    // guide's figure and a filter at more than double, gave "10 to 20 gallon"
    // without saying 10 is pygmy-only, and omitted the heater and test kit
    // the cost guide calls required. Reconciled 2026-09-15 for batch I
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Before any fish", value: "A tank that has finished cycling reads zero ammonia and zero nitrite while still processing a dose, which is a different question from how long it has been running.", source: "aquarium-cycling-guide" },
        { label: "Tank size", value: "A 20-gallon long is the practical minimum for a school of six standard-sized cories; dwarf and pygmy species manage in about 10 gallons.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Temperature and water", value: "72 to 78°F covers most species in the hobby, though preferences vary: some take warmer water, others want it cooler. pH 7.0 to 7.8 for captive-bred cories, which is most of what the trade sells.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Substrate and flow", value: "Soft sand, or smooth, fine, rounded gravel, about 2 inches deep. Gentle water movement with calm areas to rest in, rather than one strong current everywhere. They also need clear access to the surface, since they gulp air periodically as part of normal breathing.", source: "corydoras-catfish-tank-setup-guide" },
        { label: "Group size", value: "Six of the same species, minimum. Treat the number as a welfare requirement.", source: "corydoras-catfish-handling-guide" },
        { label: "Not algae eaters", value: "The cleanup crew reputation is wrong. Algae and scraps won't keep them alive.", source: "corydoras-catfish-handling-guide" },
        { label: "Feeding", value: "A sinking pellet or wafer made for bottom feeders or catfish, around 30 to 40% protein, does the staple work. Once or twice daily, and only what the group clears in 2 to 3 minutes. Flakes get eaten by mid and upper-tank fish long before they sink far enough to matter, so a tank fed exclusively with flakes can leave cories functionally unfed even though food goes in daily.", source: "corydoras-catfish-feeding-guide" },
        { label: "Barbel erosion", value: "Sharp substrate is the usual explanation, and eroding barbels may owe as much to poor water quality as to grain shape, so a dirty substrate is what to manage first.", source: "corydoras-catfish-health-issues-guide" },
        { label: "Medication sensitivity", value: "They're armored catfish with sensitive, naked bellies, and notably more medication sensitive than many community fish. That means reduced doses, sometimes a half or a quarter of the standard amount, and no full-strength copper, malachite green, or formalin.", source: "corydoras-catfish-health-issues-guide" },
        { label: "Netting one", value: "Take real care, since the pectoral spines lock and tangle in mesh.", source: "corydoras-catfish-enrichment-guide" },
        { label: "Quarantine", value: "A new or sick fish belongs in a bare hospital tank first, and how long it stays there is settled by the rules rather than by how the fish looks.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Budget", value: "$3 to $8 each for the common ones, and groups of six or more are the requirement, so price the school rather than the fish. Roughly $150 to $215 upfront, and $10 to $20 a month after that.", source: "corydoras-catfish-cost-guide" },
        { label: "Lifespan", value: "5 to 10 years is typical, and some individuals live well past that, with occasional reports of up to 15 years in ideal conditions.", source: "corydoras-catfish-cost-guide" },
        { label: "Adult size", value: "1 to 3 inches (2.5 to 7.5 cm) depending on species." },
      ],
    },
    emergencyCard: {
      source: "corydoras-catfish-health-issues-guide",
      callNow: [
        "Barbels shortened, red, or gone entirely",
        "Red or bloody-looking sores on the belly and flanks",
        "Small white spots resembling grains of salt",
        "Frayed or receding fins",
      ],
      vetLine: "Aquatic vets are uncommon, so most of this is handled by correcting water quality and using appropriate medication at a reduced dose. This species is notably more medication sensitive than many community fish: sometimes a half or a quarter of the standard amount, and no full-strength copper, malachite green, or formalin.",
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
    tagline: "The self-styled king of the aquarium, a tall, social cichlid that raises its fry on its own skin!",
    funFact: "Newly hatched discus fry feed on a nutrient-rich mucus secreted from both parents' skin, most intensively for roughly the first two weeks after they become free-swimming, with a gradual weaning over the following two weeks. It is one of the only documented cases of sustained direct parental feeding in fish, and a 2010 study found the mucus carries immune antibodies and protein at levels that rise and fall across the feeding period, in a pattern the researchers compared to mammalian milk.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Cycling, filtration, the hospital tank, water
    // chemistry, the power outage rule and the sick-fish check cite the shared
    // aquarium guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the discus set test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Tank size", value: "Several experienced discus-keeping sources push back on treating 55 gallons as anything more than a floor, recommending 75 gallons or larger instead, since a 55-gallon tank forces meaningfully more frequent water changes to keep pace with a proper group's waste output.", source: "discus-tank-setup-guide" },
        { label: "How many", value: "Plan for a real group, 5 to 6 fish or more, since this is a genuinely social species that does poorly alone or in a pair outside of breeding.", source: "discus-tank-setup-guide" },
        { label: "Temperature and water changes", value: "82 to 86°F, warmer than nearly every other common community fish and warm enough that it genuinely limits realistic tankmate options. Weekly changes in the 25 to 50% range are commonly recommended, and some serious keepers change water every 2 to 3 days rather than weekly.", source: "discus-tank-setup-guide" },
        { label: "Filtration, which is genuinely debated", value: "Canister filters, sized well above the tank's actual volume, are the most common modern choice and handle this species' heavy bioload well. At least one discus-specialty source pushes back on canister filters specifically, arguing they're sealed systems that compete with the fish for dissolved oxygen and can fail dangerously during a power outage, recommending a hang-on-back filter instead, or a canister paired with extra surface agitation.", source: "discus-tank-setup-guide" },
        { label: "Feeding", value: "Adults 2 to 3 times a day, small amounts cleared within a few minutes. A quality discus-formulated pellet or granule, sized appropriately for this species' small mouth, supplemented regularly with frozen or live bloodworms and brine shrimp.", source: "discus-feeding-guide" },
        { label: "Acclimation, where sources disagree", value: "At least one discus-specialty breeder argues the opposite for this species, that drip acclimation keeps the fish confined in shipping water longer while oxygen depletes, and recommends a faster, controlled temperature and pH match instead. What does line up: keep the lights off during acclimation and for several hours after, and don't feed a newly introduced discus right away.", source: "discus-handling-guide" },
        { label: "Tankmates", value: "Cardinal tetras are named most consistently across dedicated discus sources, alongside rummynose tetras, Sterbai cory catfish, and bristlenose plecos. Neon tetras are a genuine point of disagreement, so cardinals are the safer default if you want a warm-water tetra.", source: "discus-handling-guide" },
        { label: "Budget, the fish", value: "$20 to $450 or more, and price is heavily strain-dependent. With a group of 5 to 6, the starting cost is closer to $150 to $250 even at the budget end.", source: "discus-cost-guide" },
        { label: "Budget, the setup", value: "Roughly $600 to $800, with ongoing costs of $20 to $50 a month.", source: "discus-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years with excellent, stable care is the commonly cited range, though some sources put the typical captive lifespan closer to 8 to 10 years.", source: "discus-cost-guide" },
        { label: "Adult size", value: "6 to 8 inches (15 to 20 cm) in diameter." },
        { label: "Cycling, the finish line", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Hospital tank", value: "A bare hospital tank with its own net and siphon hose, never shared with the display tank, and disinfected and stored dry between uses.", source: "fish-quarantine-and-treatment-guide" },
      ],
    },
    emergencyCard: {
      source: "discus-health-issues-guide",
      callNow: [
        "Small white spots on the skin and gills, usually preceded by flashing against decor, weakness, and appetite loss",
        "Pitting, small holes, and erosion around the head and along the lateral line",
        "Labored or rapid breathing, flashing against decor, excess mucus production, and sometimes visible spots on the body",
        "Ragged, receding fins with discolored edges, along with cloudy eyes or abdominal swelling in more advanced bacterial cases",
      ],
      vetLine: "Ich treatment for this species goes noticeably higher than the standard advice given for other fish, toward roughly 90\u00B0F rather than the 82 to 86\u00B0F this species already lives at, since discus have less headroom left before hitting ich's own upper survival limit. The common hobbyist explanation for hole-in-the-head disease is a calcium-to-phosphorus imbalance in the diet, beef heart in particular gets blamed. A 2019 controlled study in the Journal of Fish Diseases tested this directly: researchers fed discus a diet with a severely unfavorable calcium-to-phosphorus ratio for 16 weeks and found it did not produce hole-in-the-head lesions or measurable bone resorption in that window. Water quality and stress remain the better-supported explanations. Catching it early matters, advanced lesions can be genuinely disfiguring and are less likely to fully resolve.",
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
    tagline: "The pond classic that outgrows its reputation - and its bowl - in a hurry!",
    funFact: "Goldfish have real, months-long memories and can be trained to push levers, navigate mazes, and recognize shapes and colors - directly contradicting the popular '3-second memory' myth. They also grow to the size of their environment: a goldfish kept in a tiny bowl doesn't stay small because it's content, it's stunted, which is a sign of poor welfare rather than a convenient feature.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Lifespan comes from the encyclopedia
    // entry, which no deep dive repeats as a single figure. Quarantine and
    // power outage cite the shared aquarium guides in the sidebar's Health and
    // More list. Built 2026-09-08 for the goldfish set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
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
        { label: "Quarantine", value: "At least 30 days in a bare hospital tank before joining others. Thirty days is the floor, not the target, and a full two months is reasonable for a fish you especially don't want to lose.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Oxygen loss is the fast danger, not the cold or the dark. Aerate right away with a battery air pump, or agitate the surface by hand roughly every 10 to 15 minutes in a small tank and every 20 to 30 minutes in a larger one. Don't feed, and don't restart a filter that's been off for hours without checking it first.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "goldfish-health-issues-guide",
      callNow: [
        "Persistent loss of buoyancy",
        "Severe fin damage",
        "Visible ulcers",
        "Ongoing lethargy or appetite refusal",
        "An over-the-counter treatment that isn't working",
      ],
      vetLine: "An aquatic vet, found before you need one. Most of what's on the health issues list is prevented, not treated, through consistent water quality, quarantining new fish, and appropriate feeding.",
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Tank size", value: "5 gallons works as a bare minimum for a small trio, but 10 gallons is the more practical beginner starting point for a group of 5 or 6.", source: "guppy-tank-setup-guide" },
        { label: "Water temperature", value: "A genuinely tropical species, comfortable in the 72 to 82°F range, with 76 to 78°F as a solid target. A heater is necessary unless your room stays consistently warm year-round, budget roughly 3 to 5 watts per gallon, so a 25 to 50 watt heater for a 10-gallon tank.", source: "guppy-tank-setup-guide" },
        { label: "Water chemistry and flow", value: "Guppies do best with a pH of 7.0 or above and moderately hard water, good calcium and magnesium content. Keep the flow gentle. A sponge filter works well and is the safer choice if you're allowing breeding, since it won't pull fry into strong current.", source: "guppy-tank-setup-guide" },
        { label: "Sex ratio", value: "Two to three females per male minimum, and more females is better still. Or keep males only, which avoids the harassment question entirely, avoids the endless fry, and keeps the color.", source: "guppy-enrichment-guide" },
        { label: "Feeding", value: "Adults: once to three times a day. The portion rule matters more than the count, whichever frequency you settle on: feed only what's fully cleared within about 1 to 2 minutes. The base diet should be a high-quality tropical fish flake or small pellet formulated for community fish, not goldfish food, which has a different, lower-protein profile.", source: "guppy-feeding-guide" },
        { label: "Population plan", value: "Keep males and females in separate tanks if you want to avoid breeding entirely. Keep males only for a colorful, breeding-free tank.", source: "guppy-handling-guide" },
        { label: "Adult size", value: "Males are the smaller, more colorful sex, around an inch and a half, while females run larger and comparatively plain, up to about 2.4 inches.", source: "guppy-handling-guide" },
        { label: "Budget", value: "Standard, wild-type guppies run $2 to $5 each, and fancy varieties $10 to $20 per pair. A basic 10-gallon starter kit, tank, filter, heater, water conditioner, and substrate, commonly runs $30 to $100 depending on the brand and size you choose.", source: "guppy-cost-guide" },
        { label: "Lifespan", value: "2 to 3 years on average, up to 4 or 5 with excellent care.", source: "guppy-cost-guide" },
        { label: "Cycling", value: "Most fishless cycles run four to six weeks at a warm, stable temperature, though real tanks have taken anywhere from about three weeks to two months.", source: "aquarium-cycling-guide" },
        { label: "Quarantine", value: "At least 30 days in a bare hospital tank before joining others, and 30 to 60 days for a fish you want to be genuinely sure about.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Power outage", value: "Aerate right away. A battery-powered air pump with an airstone is the cleanest fix.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      // The health issues guide carries no call-the-vet list of its own; the
      // feeding guide's "When to Worry" section is the only one in the set, so
      // the card copies that list bullet for bullet.
      source: "guppy-feeding-guide",
      callNow: [
        "Appetite loss combined with lethargy, hiding, or erratic swimming",
        "Gasping at the surface",
        "Clamped or discolored fins",
        "Cloudy eyes",
        "Visible injuries",
        "White spots",
        "A swollen pinecone-like body",
      ],
      vetLine: "Any of these, especially if spreading to other fish, is a signal to test water parameters immediately and consider a fish-health specialist rather than waiting. There's no single, universally agreed number for how long a guppy can safely go without food: a vet-affiliated source recommends contacting a vet if decreased appetite lasts more than one day, notably stricter than hobbyist consensus.",
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
    // entry. Quarantine, cycling and the power-outage row cite the shared
    // aquarium guides in the sidebar's Health and More list. Built 2026-09-15 for
    // the koi set test (docs/READER_REVIEWS.md), which found the old hub giving a
    // 2 to 4 week quarantine against the health guide's 4 to 6 weeks or longer, a
    // 25 to 35 year lifespan against the cost guide's 25 to 50, peas as an
    // untroubled treat against the feeding guide's choking warning, and a setup
    // table summing to $2,450-$9,200 under a cost guide that says $5,100-$15,875.
    // Its headline funFact also ran the Hanako 226-year claim the cost guide
    // debunks in the same set, and that is gone.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "The pond", value: "Roughly 250 gallons per adult koi, or about 10 gallons per inch of body length. In practice, 1,000 gallons is the frequently cited minimum practical pond volume, and it only comfortably supports a few fish, larger is strongly preferred for water stability and healthy growth. Minimum 3 feet, ideally 3 to 5 feet or more.", source: "koi-tank-setup-guide" },
        { label: "Temperature", value: "Koi are hardy coldwater fish, comfortable in a 64 to 75°F range, with 59 to 77°F as the outer limits.", source: "koi-tank-setup-guide" },
        { label: "Filtration and predators", value: "An oversized filtration system paired with a UV clarifier is the right call here, not overkill, with strong aeration and oxygenation alongside it. Herons, raccoons, and similar predators are real threats. An appropriately sized netting kit and adequate depth both matter here.", source: "koi-tank-setup-guide" },
        { label: "Feeding by temperature", value: "Stop below about 48 to 50°F. Feed sparingly once or twice a day between 50 and 68°F, and 2 to 4 times a day in the 68 to 86°F growth range. Koi have no true stomach, food passes straight into the intestine. If a koi enters cold-water torpor with food still in its gut, undigested material can let harmful bacteria cross the intestinal wall into the bloodstream.", source: "koi-feeding-guide" },
        { label: "Seasonal food", value: "A lower-protein wheat-germ formula, roughly 25 to 32% crude protein, is easier to digest at low metabolic rates and is the right choice in the 50 to 64°F range.", source: "koi-feeding-guide" },
        { label: "Handling", value: "Handle as little as possible, ideally only for necessary treatment, transport, or showing, never for casual interaction.", source: "koi-handling-guide" },
        { label: "Quarantine and KHV", value: "Strict quarantine of 4 to 6 weeks or longer, sometimes at specific temperatures, is the critical prevention step for koi herpesvirus. Koi Herpesvirus is the most serious concern.", source: "koi-health-issues-guide" },
        { label: "Stock for the adults", value: "Size the filtration for the fish the koi will become, not the ones swimming now.", source: "koi-enrichment-guide" },
        { label: "Budget, the fish", value: "$10 to $100 for a juvenile pond-quality domestic koi, often $10 to $50 for a small 4 to 6 inch fish.", source: "koi-cost-guide" },
        { label: "Budget, the pond and the year", value: "A residential pond in the 6x8 to 11x16 foot range, roughly 1,000 gallons to several thousand, commonly runs $5,100 to $15,875 installed, averaging around $10,000 in recent cost analyses. Commonly $1,000 to $2,000 or more a year all in.", source: "koi-cost-guide" },
        { label: "Lifespan", value: "25 to 50 years with good care is the commonly cited range, and Japanese bloodlines are often noted as hardier and longer lived than some domestic lines, which may average closer to 15 years.", source: "koi-cost-guide" },
        { label: "Adult size", value: "12 to 36 inches (30 to 90 cm) depending on pond size and variety." },
        { label: "Power outage", value: "An aquarium's biggest threat in a power outage is oxygen loss, not darkness, and the same three problems, oxygen, temperature, and a dead filter, drive safe transport and moving day too.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "koi-health-issues-guide",
      callNow: [
        "Gasping combined with high ammonia",
        "Rapid widespread mortality",
        "Severe open ulcers",
        "Suspected KHV: gill necrosis, excess mucus, lethargy, and skin lesions. This is emergency and culling level serious",
      ],
      vetLine: "Get water quality corrected immediately and involve a vet if one is available. For valuable fish or any unclear diagnosis, always lean toward professional guidance, though many keepers rely on experienced koi specific resources for routine issues since aquatic vets are genuinely limited in availability.",
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
    // guide. Cycling, the hospital tank, water chemistry, filter maintenance,
    // the power outage rule and the sick-fish check cite the shared aquarium
    // guides in the sidebar's Health and More list. Reconciled 2026-09-15
    // after the molly set test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Tank size", value: "20 gallons is the real minimum for a small group, a step up from the 10-gallon tank that works fine for guppies. Sailfin varieties, or any growing group, do better in 30 gallons or more. Go long and rectangular rather than tall, and use a lid, mollies are capable jumpers.", source: "molly-tank-setup-guide" },
        { label: "Temperature and water", value: "A tropical range of 72 to 82°F works well. Mollies do best with a pH of 7.5 to 8.5 and medium-hard to hard water. If your tap water runs soft, a mineral supplement, crushed coral or a commercial buffering product, can bring it into range.", source: "molly-tank-setup-guide" },
        { label: "Hard water, not salt", value: "The advice to add salt to a molly tank is a crude proxy for what they actually want: hard, alkaline, mineral-rich water. Get the hardness right and the salt question mostly disappears.", source: "molly-enrichment-guide" },
        { label: "Filtration", value: "For a standard or growing group, a hang-on-back or canister filter handles the bioload comfortably; the general guidance is a filter that can turn over the full tank volume at least four times an hour.", source: "molly-tank-setup-guide" },
        { label: "Cycle first", value: "Building the beneficial bacteria colony that processes waste takes 2 to 4 weeks with a fishless cycle, or somewhat less with a bottled bacteria product.", source: "molly-tank-setup-guide" },
        { label: "Feeding", value: "Adults: once or twice a day is the most commonly cited range, feeding only what's fully cleared within a minute or two. A high-quality flake or pellet formulated for tropical community fish as the base, with real vegetable content layered on top rather than treated as optional.", source: "molly-feeding-guide" },
        { label: "Sex ratio", value: "At least two to three females per male, and more females is better.", source: "molly-enrichment-guide" },
        { label: "Breeding rate", value: "Gestation runs roughly 4 to 6 weeks, and a typical brood lands somewhere between 20 and 60 fry, though the documented range runs as wide as 10 to over 100 depending on the female's age and condition.", source: "molly-handling-guide" },
        { label: "Shimmy, the species condition", value: "A distinctive side-to-side, almost snake-like rocking motion as the fish swims. Treatment starts with correcting the environment, not medicating the fish: raise the temperature toward the 76 to 80°F range, check and correct pH toward 7.5 to 8.5, and address mineral hardness if your water runs very soft.", source: "molly-health-issues-guide" },
        { label: "Quarantine", value: "Quarantining new fish for 2 to 3 weeks before adding them to an established tank catches most problems, shimmy included, before they spread.", source: "molly-health-issues-guide" },
        { label: "Budget", value: "Common short-fin varieties, black, silver, and dalmatian mollies, run about $2 to $8 each, nearer $4 a fish in a six-pack. A 20-gallon setup, tank, filter, heater, and basic supplies, commonly runs $130 to $260, and full monthly upkeep lands around $20 to $30.", source: "molly-cost-guide" },
        { label: "Lifespan", value: "3 to 5 years on average, up to 5 to 7 years with excellent, stable water quality.", source: "molly-cost-guide" },
        { label: "Adult size", value: "Most common short-fin varieties run roughly 3 to 4.5 inches as adults, with sailfin varieties, distinguished by their males' tall, sail-like dorsal fin, reaching 4 to 6 inches.", source: "molly-handling-guide" },
      ],
    },
    emergencyCard: {
      source: "molly-health-issues-guide",
      callNow: [
        "A distinctive side-to-side, almost snake-like rocking motion as the fish swims",
        "Small white spots resembling grains of salt across the body and fins, with flashing against decor",
        "A fine, gold or rust-colored dusty coating on the body, with appetite loss, lethargy and scratching against decor",
        "Ragged, frayed, or discolored fin edges",
        "Fluid buildup in the abdomen that makes the scales stand out in a raised, pinecone-like pattern",
        "Buoyancy problems: floating, sinking, or swimming at odd angles",
      ],
      vetLine: "Stress, poor or unstable water quality, overcrowding, and skipping quarantine are the common thread behind nearly every condition on this list, not just shimmy. Test the water first: a properly cycled tank, a stable temperature, and regular partial water changes with a conditioner prevent far more than any medication does after the fact. Dropsy is the hardest condition here to treat successfully and often carries a poor outlook by the time it's obvious.",
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
    // entry, which no deep dive repeats. Cycling, quarantine, filtration, water
    // chemistry, the power outage rule and the sick-fish check cite the shared
    // aquarium guides in the sidebar's Health and More list. The old hub's
    // weekly 20 to 25% water change was a figure no deep dive carries, so it is
    // retired here and filed as a gap in docs/READER_LOG.md. Built 2026-09-14
    // for the neon tetra set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "How many", value: "Six is the floor, not the target. If the tank supports it, buy ten rather than six, and prefer one species of ten to two species of five.", source: "neon-tetra-enrichment-guide" },
        { label: "Tank size", value: "10 gallons is the practical minimum for a proper school of 6. If you're aiming for the better group size of 10 to 15 fish, step up to a 20-gallon long tank.", source: "neon-tetra-tank-setup-guide" },
        { label: "Temperature and water", value: "70 to 81°F works, with 72 to 78°F being a solid, commonly recommended target. Soft, slightly acidic water, a pH of 6.0 to 7.0 and low hardness. Ammonia and nitrite both need to read zero.", source: "neon-tetra-tank-setup-guide" },
        { label: "Flow and lighting", value: "Keep the flow gentle, neon tetras dislike strong current. Dim to moderate, roughly 8 to 10 hours a day.", source: "neon-tetra-tank-setup-guide" },
        { label: "Feeding", value: "Small amounts twice daily, morning and evening, only as much as the fish finish in about 2 to 3 minutes. Their mouths are only about 1 to 2mm across. A high-quality tropical flake or micro-pellet designed for small, nano fish, supplemented several times a week with small frozen or live foods: baby brine shrimp, daphnia, cyclops, and finely chopped bloodworms, plus some plant or algae content.", source: "neon-tetra-feeding-guide" },
        { label: "The rule that protects the school", value: "Never leave a dead fish in the tank or let tankmates scavenge a visibly sick fish's body.", source: "neon-tetra-feeding-guide" },
        { label: "Quarantine", value: "Quarantine new fish for 2 to 4 weeks before adding them to an established tank, given the disease risk this species carries.", source: "neon-tetra-tank-setup-guide" },
        { label: "Tankmates", value: "Peaceful, similarly sized community fish. Avoid anything large enough to eat a neon tetra and anything inclined to nip fins.", source: "neon-tetra-handling-guide" },
        { label: "Budget", value: "Most neon tetras run $1 to $3, occasionally reaching $5 depending on the source, and a school of 6 to 12 runs $10 to $40 total. Upfront setup is roughly $100 to $300, with complete starter kits at this size commonly $50 to $200 and the tank alone $20 to $150.", source: "neon-tetra-cost-guide" },
        { label: "Lifespan", value: "Around 5 years is achievable with good, stable care, though average conditions often see neon tetras live closer to 2 to 3 years.", source: "neon-tetra-cost-guide" },
        { label: "Adult size", value: "1 to 1.5 inches (2.5 to 4 cm)." },
        { label: "Cycling", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Power outage", value: "The threat is oxygen, not darkness. Unplug the filter deliberately rather than letting it sit dead in the water.", source: "aquarium-power-outage-and-transport-guide" },
        { label: "Sick fish check", value: "Clear water doesn't mean safe water. Test the water before assuming illness.", source: "spotting-a-sick-fish-guide" },
      ],
    },
    emergencyCard: {
      source: "neon-tetra-health-issues-guide",
      callNow: [
        "Restless or erratic swimming, often more noticeable at night",
        "Fading or patchy color, particularly along the back",
        "Visible lumps under the skin",
        "A curved or deformed spine in advanced cases",
        "Difficulty swimming normally",
        "Small white spots resembling grains of salt, with flashing against decor and rapid breathing",
        "Ragged or bloody-edged fins",
      ],
      vetLine: "Nearly everything treatable on this list traces back to water quality and stability, exactly what a properly cycled tank with consistent temperature and regular water changes prevents. Neon tetra disease is the exception and has no cure, though it is likely over-diagnosed: true cases are relatively uncommon in a well-established, well-filtered tank, and the symptoms genuinely overlap with more treatable bacterial infections.",
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
    // encyclopedia entry. Cycling, quarantine, filter maintenance and the
    // sick-fish check cite the shared aquarium guides in the sidebar's
    // Health and More list. Reconciled 2026-09-15 after the oscar set test
    // (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Cycling", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Quarantine", value: "At least 30 days for a new or sick fish, and 30 to 60 days for one you especially don't want to lose or don't want introducing something to an established tank.", source: "fish-quarantine-and-treatment-guide" },
        { label: "Tank size", value: "75 gallons is the widely recommended minimum for a single adult, with 100 to 125-plus gallons for a pair or small group. A 2-inch juvenile oscar reaches 12 inches or more within its first year, so starting small and upgrading later is both more expensive overall and more disruptive for the fish than getting the adult tank from the start.", source: "oscar-fish-tank-setup-guide" },
        { label: "Filtration", value: "Canister filters are the standard choice, sized to handle roughly 4 to 5 times the tank's total volume per hour.", source: "oscar-fish-tank-setup-guide" },
        { label: "Temperature", value: "74 to 81°F, kept stable. A reliable submersible heater is required, ideally one with a built-in thermometer for easy monitoring, since this is a genuinely tropical species with no cold tolerance.", source: "oscar-fish-tank-setup-guide" },
        { label: "Water chemistry and changes", value: "A pH range of 6 to 8 and soft to moderately hard water both suit this species well. Weekly changes of 25 to 30% are mandatory, not optional, and this connects directly to preventing hole-in-the-head disease.", source: "oscar-fish-tank-setup-guide" },
        { label: "Substrate and lid", value: "Sand, which oscars genuinely enjoy sifting through, or smooth, pea-sized or larger gravel. A tight, secure lid is essential, since oscars are capable jumpers.", source: "oscar-fish-tank-setup-guide" },
        { label: "Feeding", value: "A high-quality cichlid pellet at 35 to 45% protein, making up roughly 80% of the diet, sized appropriately for the fish. Babies under 3 to 4 inches eat 3 times daily. Juveniles around 3 to 8 inches eat twice daily. Adults over about 8 inches, or a year old, eat once or at most twice daily. Feed only what's eaten in 2 to 3 minutes and remove anything uneaten.", source: "oscar-fish-feeding-guide" },
        { label: "Not feeder goldfish", value: "Live feeder goldfish and rosy-red minnows shouldn't be a staple. They also carry a real risk of parasites, disease, and excess fat.", source: "oscar-fish-feeding-guide" },
        { label: "Tank mates", value: "A useful rule of thumb from experienced keepers: if something fits in an oscar's mouth, it will eventually end up there.", source: "oscar-fish-handling-guide" },
        { label: "Sick fish check", value: "Clear water doesn't mean safe water. Test the water before assuming illness.", source: "spotting-a-sick-fish-guide" },
        { label: "Budget", value: "$7 to $35 for a common juvenile, over $100 for a specialty variety, and $99 and up for an already-grown fish. A 55-gallon starter setup has been estimated at around $560 as a low-end build, and the total easily exceeds $1,000 with premium filtration and the 75-gallon-plus tank this species eventually requires. Upkeep runs roughly $35 to $40 a month.", source: "oscar-fish-cost-guide" },
        { label: "Adult size", value: "10 to 14 inches (25 to 36 cm); up to 16 inches in optimal conditions." },
        { label: "Lifespan", value: "10 to 15 years typically, with well-kept individuals occasionally reaching close to 20.", source: "oscar-fish-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "oscar-fish-health-issues-guide",
      callNow: [
        "Small pitted lesions or holes developing on the head and along the lateral line, appetite and weight loss, lethargy, and stringy white feces (hole-in-the-head disease). Caught early this is genuinely treatable at home with a near-zero fatality rate: correct water quality, address nitrate specifically, adjust diet, and treat with metronidazole if a parasite is involved",
        "Small white spots across the body and fins (ich), triggered by temperature swings or general stress. Manageable at home with a standard commercial ich treatment and correcting whatever stressor triggered it",
        "Frayed, discolored fin edges (fin and tail rot), bacterial and tied to poor water quality. Treatment without fixing the underlying water rarely holds",
        "One or both eyes swollen or bulging (popeye), usually bacterial or linked to water quality. See a vet if available, or treat with water correction and antibacterial medication if not",
        "Swelling, a distended abdomen, and scales that raise into a pinecone-like pattern (dropsy). This typically signals serious internal illness and often carries a poor outlook by the time it's visibly obvious",
      ],
      vetLine: "Poor water quality, elevated nitrates especially, is the common thread running through nearly every condition on this list, hole-in-the-head disease most directly of all. Weekly water changes and heavy-duty filtration aren't optional extras for this species, they're genuinely the primary defense against the health issue oscars are most known for.",
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
    // encyclopedia entry. Cycling, the hospital tank, water chemistry, filter
    // maintenance, the power outage rule and the sick-fish check cite the
    // shared aquarium guides in the sidebar's Health and More list.
    // Reconciled 2026-09-15 after the platy set test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Tank size", value: "10 gallons is where most care sheets start, and it holds a small group of about five platies. Step up to a full 20 gallons for a group of six or more, or if you're letting the group breed.", source: "platy-tank-setup-guide" },
        { label: "Temperature and water", value: "68 to 79°F, with the mid-70s the usual target. Platies do best with a pH of 7.0 to 8.2, and tolerate 6.8 to 8.5. They prefer medium-hard to hard water, roughly 10 to 30 dGH, and genuinely won't thrive in very soft, acidic conditions the way some other tropical fish will.", source: "platy-tank-setup-guide" },
        { label: "Cycle first", value: "Building the beneficial bacteria colony that processes waste takes 2 to 4 weeks with a fishless cycle, or somewhat less with a bottled bacteria product.", source: "platy-tank-setup-guide" },
        { label: "Stocking and cover", value: "Peaceful, social fish that do better in numbers. Two to three females per male minimum, more females better. Or keep a single-sex group, which sidesteps both the harassment and the population question. Dense live planting along the sides and back, plus floating plants.", source: "platy-enrichment-guide" },
        { label: "Feeding", value: "Adults do well fed once or twice a day, sometimes stretched to three times for very small portions, feeding only what's fully cleared within a minute or two. A high-quality flake or small pellet works as the staple. Watch for a long, stringy trail of waste hanging from the fish after a meal, a well-documented sign the portion was too large.", source: "platy-feeding-guide" },
        { label: "Breeding rate", value: "A typical brood runs 20 to 50 fry, with a documented range up to 80 in ideal conditions, roughly every 4 to 6 weeks.", source: "platy-cost-guide" },
        { label: "Fry", value: "If you want fry to survive, dense live planting or a dedicated breeding or nursery tank gives them somewhere to hide until they're large enough to hold their own.", source: "platy-handling-guide" },
        { label: "Quarantine", value: "Quarantining new fish for 2 to 3 weeks before adding them to an established tank catches most problems, shimmy included, before they spread.", source: "platy-health-issues-guide" },
        { label: "Budget", value: "Standard varieties, reds, blues, tuxedos, wags, and most of the common patterns, run $2 to $6 each, with a six-pack landing around $30. A basic setup, tank, filter, heater, and a bit of planting, commonly runs $60 to $120, and full monthly upkeep for a 10-gallon tank lands around $15 to $20.", source: "platy-cost-guide" },
        { label: "Lifespan", value: "2 to 4 years, with 3 to 4 achievable under stable conditions and excellent, consistent water quality pushing a fish toward 5.", source: "platy-cost-guide" },
        { label: "Adult size", value: "2 to 3 inches (5 to 7.5 cm), females larger than males." },
        { label: "Power outage", value: "The threat is oxygen, not darkness. Unplug the filter deliberately rather than letting it sit dead in the water.", source: "aquarium-power-outage-and-transport-guide" },
        { label: "Sick fish check", value: "Clear water doesn't mean safe water. Test the water before assuming illness.", source: "spotting-a-sick-fish-guide" },
      ],
    },
    emergencyCard: {
      source: "platy-health-issues-guide",
      callNow: [
        "Small white spots resembling grains of salt across the body and fins",
        "Fin edges that turn white, ragged, or frayed, working inward from the tips toward the base",
        "Fluid buildup in the abdomen that makes the scales stand out in a raised, pinecone-like pattern",
        "Buoyancy problems: floating, sinking, or swimming at an odd angle",
        "A distinctive side-to-side, almost snake-like rocking motion as the fish swims",
      ],
      vetLine: "Stress, poor or unstable water quality, overcrowding, and skipping quarantine are the common thread behind nearly every condition on this list, shimmy and the bacterial issues especially. A properly cycled tank, a stable temperature, and regular partial water changes with a conditioner prevent far more than any medication does after the fact. Dropsy is the hardest condition here to treat successfully and often carries a poor outlook by the time it's obvious.",
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
    // encyclopedia entry. Cycling, filtration, the hospital tank, water
    // chemistry, the power outage rule and the sick-fish check cite the shared
    // aquarium guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the swordtail set test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Stocking: not two males", value: "With two, every contest is between the same pair and the loser has nowhere to be. One male with a group of females is the simplest answer. Combined with the rule above: one male and four or more females is a clean, easy setup. Dense live planting along the sides and back, with open water through the middle.", source: "swordtail-enrichment-guide" },
        { label: "Tank size and the lid", value: "Go long and rectangular rather than tall, and use a lid. A 20-gallon long tank is a workable starting point for a small trio, with a step up to 29 or 30 gallons the better real-world target for most keepers. A full mesh or glass lid with no meaningful gaps is the fix, not an optional upgrade.", source: "swordtail-tank-setup-guide" },
        { label: "Temperature", value: "A tropical range of roughly 64 to 82°F works, with 72 to 79°F cited most often as the steadier, more comfortable target.", source: "swordtail-tank-setup-guide" },
        { label: "Filtration", value: "SeriouslyFish specifically recommends filter flow at 4 to 5 times the tank's volume per hour for this species, and a bigger, more active fish in a bigger tank produces a bigger bioload to match.", source: "swordtail-tank-setup-guide" },
        { label: "Feeding", value: "Once or twice a day is the most commonly cited range for adults, though some sources recommend two to three smaller meals. Either way, feed only what's fully cleared within about 2 minutes, swordtails are active enough that overfeeding is the more common real mistake.", source: "swordtail-feeding-guide" },
        { label: "Bringing them home", value: "Float the sealed bag in your tank for 15 to 20 minutes to equalize temperature, then drip acclimate over 45 to 60 minutes so the fish adjusts gradually to your water chemistry. A separate tank for 2 to 4 weeks before adding a new fish to your established tank catches most problems before they spread, the same practice that applies across nearly every aquarium fish.", source: "swordtail-handling-guide" },
        { label: "Budget", value: "$3 to $25 a fish, more for lyretail and specialty patterns. Upfront setup is $115 to $190, more if you size up to the 29 or 30 gallons the setup guide recommends, and ongoing costs run $20 to $35 a month.", source: "swordtail-cost-guide" },
        { label: "Lifespan", value: "3 to 5 years on average with stable water quality, the same range as a molly or platy despite the size difference.", source: "swordtail-cost-guide" },
        { label: "Adult size", value: "Males up to 5.5 inches (14 cm) including the sword; females up to 6.2 inches (16 cm) and typically the larger sex overall." },
        { label: "Cycling, the finish line", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Power outage", value: "The threat is oxygen, not darkness. Unplug the filter deliberately rather than letting it sit dead in the water.", source: "aquarium-power-outage-and-transport-guide" },
        { label: "Sick fish check", value: "Clear water doesn't mean safe water. Test the water before assuming illness.", source: "spotting-a-sick-fish-guide" },
      ],
    },
    emergencyCard: {
      source: "swordtail-health-issues-guide",
      callNow: [
        "Small white spots resembling grains of salt across the body and fins",
        "Ragged, frayed, or discolored fin edges",
        "Fluid buildup in the abdomen that makes the scales stand out in a raised, pinecone-like pattern",
        "Buoyancy problems, floating, sinking, or swimming at odd angles, usually from overfeeding or constipation",
        "Chewed fins or clamped, listless behavior in a male-heavy tank",
      ],
      vetLine: "Poor or unstable water quality, overcrowding, and skipping quarantine are the common thread behind nearly every pathogen-driven condition on this list. Put plainly, an unbalanced male-to-female ratio doesn't just look unpleasant to watch, it measurably raises the odds of the pathogen-driven conditions above actually taking hold. Dropsy is the hardest condition on this list to treat successfully, often carrying a poor outlook by the time it's obvious.",
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
    tagline: "The tireless, torpedo-striped schooler that's equally at home in a beginner's tank and a genetics lab!",
    funFact: "Zebra danios, known to scientists as zebrafish, are the most widely used non-mammalian vertebrate model organism in developmental biology and genetics research. Their embryos develop transparently outside the mother's body within hours of fertilization, letting researchers watch organs form in real time, and roughly 70 percent of human genes have a working counterpart in the zebrafish genome, sequenced in full in 2013. That same genetic malleability is also how GloFish, the first genetically modified animal ever sold as a pet, came to exist: they're fluorescent zebra danios.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Cycling, filtration, the hospital tank, water
    // chemistry, the power outage rule, summer cooling and the sick-fish check
    // cite the shared aquarium guides in the sidebar's Health and More list.
    // Reconciled 2026-09-15 after the zebra danio set test
    // (docs/READER_REVIEWS.md).
    //
    // Retired rather than moved: a whole cost table written independently of
    // the cost guide, with the tank at $50 to $100 against $18 to $60, the
    // filter at $20 to $35 against $8 to $15, food at $30 to $50 against $15
    // to $25, and the test kit filed as annual where the cost guide files it
    // as a one-time purchase. Also "Feed small amounts once or twice daily"
    // against the feeding guide's twice a day minimum, and a heater listed as
    // optional equipment without the range that makes it optional.
    //
    // Group size is stated twice on purpose and is not a disagreement. The
    // handling guide gives the floor and the target together, 5 to 6 workable
    // against 8 to 10 or more for natural schooling; the enrichment guide
    // gives the behavioral reason for the higher number. The old hub said
    // "at least five or six" and stopped at the floor, which is the same
    // failure the swordtail hub had with its sex ratio.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "How many", value: "At least 6. Aquarium Co-Op names 5 to 6 as the workable minimum, but Seriously Fish recommends starting with 8 to 10 or more for natural schooling behavior.", source: "zebra-danio-handling-guide" },
        { label: "Tank size", value: "A 10-gallon tank is workable for the bare minimum school of 6. Seriously Fish's recommended footprint, roughly 90x30cm even for a small group, lines up closely with a 20-gallon long tank, a better practical minimum for the fuller 8 to 10 fish school most sources recommend.", source: "zebra-danio-tank-setup-guide" },
        { label: "Temperature and water chemistry", value: "Not strictly needed. Multiple care sources put their comfortable range at 64 to 77°F, close enough to room temperature in most homes that a heater is optional. Seriously Fish lists a comfortable pH range of 6.0 to 8.0 and hardness anywhere from about 90 to 357 ppm, soft to fairly hard water both work. Ammonia and nitrite should still read zero before stocking regardless.", source: "zebra-danio-tank-setup-guide" },
        { label: "Filtration and the lid", value: "Seriously Fish recommends filtration that turns over roughly 4 to 5 times the tank volume per hour. A sponge filter or hang-on-back filter both work well. A tight-fitting lid isn't optional the way it might be for a calmer fish.", source: "zebra-danio-tank-setup-guide" },
        { label: "Feeding", value: "Twice a day is the practical standard, offering only what the school finishes in two to three minutes. If you don't want fry, skip the daily live-food routine and don't add fine-leaved plants or marbles the eggs can fall into and survive in.", source: "zebra-danio-feeding-guide" },
        { label: "Acclimation and quarantine", value: "Float the sealed bag for 15 to 20 minutes to match temperature, then add a quarter cup of tank water to the bag every 5 minutes for another 15 to 20 minutes before netting the fish into the tank. Two to four weeks before new fish join an established tank.", source: "zebra-danio-handling-guide" },
        { label: "Budget", value: "Roughly $2 to $3 a fish, so about $12 to $30 for a starting school of 6 to 10. Core equipment runs roughly $60 to $150, and most first setups land around $100 to $180 once substrate and a test kit go in.", source: "zebra-danio-cost-guide" },
        { label: "The GloFish premium", value: "The same species, genetically engineered to carry a fluorescent protein gene. They run about $8 each regardless of pack size, roughly four times the price of a plain wild-type danio.", source: "zebra-danio-cost-guide" },
        { label: "Lifespan", value: "Outbred zebra danios average around 3.5 years in captivity and can live up to 5.5 years with excellent care, according to the AnAge longevity database.", source: "zebra-danio-cost-guide" },
        { label: "Adult size", value: "1.5 to 2.5 inches (4 to 6 cm); occasionally to 3 inches (7.5 cm) in captivity." },
        { label: "The condition to know about", value: "Mycobacteriosis, sometimes called fish tuberculosis. There's no reliable cure once a fish is visibly symptomatic. Mycobacterium marinum can also infect people, usually through a small cut or scrape exposed to contaminated tank water.", source: "zebra-danio-health-issues-guide" },
        { label: "Cycling, the finish line", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
      ],
    },
    emergencyCard: {
      source: "zebra-danio-health-issues-guide",
      callNow: [
        "Small white spots resembling grains of salt, alongside increased mucus production, flashing against decor, rapid breathing, and lethargy",
        "Discoloration on the fin edges first, then fraying as infected tissue dies off",
        "Lethargy, loss of appetite, and emaciation, along with skin ulcers, pale patches, and in advanced cases visible white nodules or a swollen abdomen",
        "Buoyancy problems, floating at the surface unable to swim down, or struggling to rise from the bottom",
        "A slow-growing, sometimes painful bump or nodule on your own skin at the site of exposure after working in a tank",
      ],
      vetLine: "Nearly everything treatable on this list traces back to water quality and stability, exactly what a properly cycled tank with consistent temperature and regular water changes prevents. Mycobacteriosis is the exception: there's no reliable cure once a fish is visibly symptomatic, and prevention through quarantine, clean equipment, and stable water is the real defense for home keepers. The bump on your own skin is uncommon and treatable, but it's a real reason to wear gloves or avoid putting broken skin in tank water, and to see a doctor if a slow-healing bump shows up after aquarium work.",
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
