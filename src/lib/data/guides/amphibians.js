export const amphibianGuides = [
  {
    id: "axolotl",
    name: "Axolotl",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Amphibians",
    image: "/assets/guides/axolotl.jpg",
    tagline: "The 'forever larva' with feathery gills and superhero-level regeneration!",
    funFact: "Axolotls are neotenic, meaning they retain their larval (juvenile) features throughout their entire adult life and never undergo full metamorphosis. They keep their feathery external gills, tail fins, and aquatic lifestyle permanently. Scientists study them intensively because they can regenerate not just limbs but heart tissue, spinal cord sections, and parts of their brain with zero scarring.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size and lifespan come from the
    // encyclopedia entry, which no deep dive repeats. Quarantine and the
    // heat-wave power-outage row cite the shared aquarium and amphibian guides
    // in the sidebar's Health and More list. Built 2026-09-08 for the axolotl
    // set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Banned or effectively banned in California, New Jersey, and Maine, and reported banned in Washington, D.C.; several other states require a permit rarely issued for pets. Legal in Virginia since August 2021, despite widely repeated claims otherwise. Check your state before buying.", source: "axolotl-legal-guide" },
        { label: "Tank size", value: "A 20-gallon long tank is the minimum for one axolotl, with a 40-gallon breeder better if keeping two.", source: "axolotl-tank-setup-guide" },
        { label: "Water temperature", value: "Between 60 and 68°F. Above 72°F starts to cause chronic stress, and it can become fatal in the mid-70s. Never use a heater, plan for an aquarium chiller.", source: "axolotl-tank-setup-guide" },
        { label: "Water parameters", value: "Ammonia and nitrite at 0, nitrate ideally under 10 ppm, pH around 7.4 to 7.8.", source: "axolotl-tank-setup-guide" },
        { label: "Cycling", value: "The tank needs to be fully cycled before an axolotl goes in, this isn't a species that tolerates an uncycled tank while it establishes itself.", source: "axolotl-tank-setup-guide" },
        { label: "Substrate", value: "Fine sand with grains under 1mm, or bare-bottom. Never gravel or small rocks, axolotls gulp their food and swallow loose substrate along with it.", source: "axolotl-tank-setup-guide" },
        { label: "Filtration", value: "Low flow only, a gentle sponge filter or a canister filter with the output diffused through a spray bar. Axolotls dislike current.", source: "axolotl-tank-setup-guide" },
        { label: "Feeding schedule", value: "Hatchlings eat live food 2 to 3 times daily, juveniles about once a day, sub-adults every 1 to 3 days, adults every 2 to 3 days.", source: "axolotl-feeding-guide" },
        { label: "Diet", value: "Earthworms or nightcrawlers as the gold-standard staple, paired with a quality sinking pellet formulated for axolotls. Size each meal to roughly the axolotl's head, remove anything uneaten after 15 to 30 minutes.", source: "axolotl-feeding-guide" },
        { label: "Handling", value: "Minimal, reserved for genuine necessity. Guide it into a submerged container rather than lifting it out by hand or using a net, and keep it in water at all times.", source: "axolotl-handling-guide" },
        { label: "Not eating / floating", value: "See a vet promptly for fungal growth that hasn't improved within 48 hours of correcting water quality, suspected impaction, red streaking or open wounds, or appetite loss lasting 5 days or more.", source: "axolotl-health-issues-guide" },
        { label: "Budget", value: "$30 to $100 for the axolotl itself, $200 to $500 for a basic setup or $450 to $900 with a chiller, and $15 to $45 a month after that.", source: "axolotl-cost-guide" },
        { label: "Adult size", value: "9 to 12 inches." },
        { label: "Lifespan", value: "10 to 15 years typical in captivity." },
        { label: "Quarantine", value: "6 to 8 weeks per general veterinary guidance, landing closer to the 8-week end than the shortest end. The clock resets, not just pauses, if the animal shows illness partway through.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Heat wave / power outage", value: "The emergency runs in reverse for axolotls: heat is the danger, not cold. Sustained water above about 75°F causes reduced appetite, ascites, and uncontrollable floating. Insulate against heat, float sealed frozen water bottles rather than loose ice, and as a stopgap move the axolotl to a dish in the refrigerator.", source: "aquarium-power-outage-and-transport-guide" },
      ],
    },
    emergencyCard: {
      source: "axolotl-health-issues-guide",
      callNow: [
        "Fungal growth that hasn't improved within 48 hours of correcting water quality",
        "Suspected impaction",
        "Red streaking or open wounds",
        "Appetite loss lasting 5 days or more",
      ],
      vetLine: "An aquatic or exotic-amphibian vet, found before you need one. General small-animal clinics often aren't equipped for this species.",
    },
    routes: [
      { slug: "axolotl-cost-guide", line: "The axolotl itself $30 to $100, why the chiller can double your setup cost, and the real monthly budget." },
      { slug: "axolotl-tank-setup-guide", line: "Cold water 60 to 68°F, no gravel ever, low-flow filtration, and the water parameters that matter." },
      { slug: "axolotl-feeding-guide", line: "Schedule by life stage, the gold-standard nightcrawler diet, and why gravel is the mistake that sends axolotls to surgery." },
      { slug: "axolotl-handling-guide", line: "Why hands-off is the default, the submerged-container method, and drip-matching a new arrival in without touching it." },
      { slug: "axolotl-health-issues-guide", line: "Fungal infection, impaction, ammonia burns, heat stress, and the signs that mean a vet visit." },
      { slug: "axolotl-enrichment-guide", line: "Hides and structure, foraging that isn't a static food pile, and why every item in the tank has to be smooth." },
      { slug: "axolotl-legal-guide", line: "Which states restrict axolotls, the Virginia myth corrected, and what the 2025 federal salamander rule actually changes." },
    ],
    buyList: [
      "20-gallon long tank (40-gallon breeder if keeping two)",
      "Aquarium chiller, or fan-based cooling in cooler climates",
      "Gentle sponge filter or a canister filter with the output diffused through a spray bar",
      "Fine sand under 1mm, or no substrate at all (never gravel)",
      "Digital thermometer",
      "Water test kit",
      "Water conditioner/dechlorinator",
      "Caves, PVC pipes, and hides",
      "Secure lid",
      "Nightcrawlers and a sinking pellet formulated for axolotls",
    ],
    faqs: [
      { q: "Is it legal to own an axolotl in Virginia?", a: "Yes, and this corrects a widely repeated mistake. As of August 1, 2021, the Virginia Department of Wildlife Resources confirms it is legal to import, export, sell, and possess axolotls in Virginia, no permit required. Many hobbyist sites still incorrectly list Virginia as banned." },
      { q: "What is heat stress in axolotls and how serious is it?", a: "It's the condition most axolotl health problems trace back to. Watch for curled or forward-facing gill tips, appetite loss, floating, and pale patches, extended exposure above roughly 72°F suppresses the immune system, and temperatures above about 75°F can be fatal, so dropping the water temperature immediately is the priority." },
      { q: "Why is gravel substrate dangerous for axolotls?", a: "They gulp food instead of picking it out, so gravel goes down with the meal. That blockage in the intestine can require surgery and can be fatal. Use fine sand under about 1mm, or run the tank bare-bottom." },
    ],
  },
  {
    id: "fire-bellied-toad",
    name: "Fire-Bellied Toad",
    emoji: "🐸",
    difficulty: "Beginner",
    petType: "Amphibians",
    image: "/assets/guides/fire-bellied-toad.jpg",
    tagline: "The vivid red and black toad that warns predators of its mild toxicity!",
    funFact: "When threatened, fire-bellied toads perform the Unkenreflex: they arch their backs and flip their limbs upward to display the bright red and black warning coloration on their bellies. This 'unken' pose is a classic example of aposematism, advertising: 'I am toxic, do not eat me!'",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Priced for a small group (3-5), the natural social size for this species.
    costs: {
      setup: [
        { item: "20-gallon paludarium (land + water sections)", low: 100, high: 200 },
        { item: "Aquarium filter for water section", low: 25, high: 50 },
        { item: "Live or artificial plants + cork bark", low: 30, high: 55 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
      ],
      annual: [
        { item: "Small live feeder insects", low: 60, high: 110 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "Dechlorinated/RO water treatment", low: 15, high: 30 },
      ],
    },
    sections: {
      housing: `A paludarium - a terrarium with both land and water sections - is the ideal and most natural setup for fire-bellied toads. A 20-gallon tank with approximately 60% water section and 40% land section works well for a group of 3 to 5 adults. The water section should be 3 to 4 inches deep with a small aquarium filter to keep the water clean between changes. The land section should feature moist coconut fiber substrate, sheet moss, and live or quality artificial plants.

Temperature is critically important: fire-bellied toads prefer 65 to 75 degrees F and are distinctly cool-temperature amphibians. Temperatures above 80 degrees F cause significant and rapid heat stress. In warm climates, keeping them cool requires an air-conditioned room or a small fan directed at the tank. They do not require supplemental heating in most temperate home environments.

Humidity of 70 to 80% is appropriate. The water section naturally maintains this. Mist the land section lightly in the evenings. Use only dechlorinated or reverse-osmosis water for both the water section and misting - frogs absorb everything through their permeable skin.`,
      diet: `Fire-bellied toads eat small live insects. Appropriately-sized crickets (no larger than the space between the toad's eyes) are the most practical staple feeder. Fruit flies are appropriate for juveniles and very small adults. Dubia roaches, small mealworms, and black soldier fly larvae add variety. Waxworms are an occasional treat - too high in fat for regular feeding.

Feed every 2 to 3 days. Dust all feeders with calcium w/D3 powder at every other feeding session, and with a reptile multivitamin once weekly. Gut-load insects 24 to 48 hours before offering: feed the crickets or roaches collard greens, carrot, and commercial gut-load powder so the nutritional value is passed to the toad.

One natural advantage of the paludarium setup: toads will actively hunt small aquatic invertebrates (daphnia, blackworms, small bloodworms) in the water section. Adding these to the water occasionally provides excellent naturalistic enrichment and supplemental nutrition.`,
      enrichment: `Fire-bellied toads are unusual among frogs for being diurnal - they are active and visible during daylight hours. This makes them far more engaging display animals than most nocturnal frog species, which spend their days hidden. A group of fire-bellied toads in a well-planted paludarium with floating cork bark, aquatic plants, and varied terrain is genuinely beautiful and actively interesting to watch.

Provide floating cork bark platforms and submerged branches at different heights in the water section for toads to climb onto and bask. Dense live or artificial plants on the land section give the toads areas to hide between their active periods. Leaf litter on the land section adds natural texture and encourages rooting behavior.

They are social and do well in same-species groups of 3 to 6 individuals. Their characteristic "unken" warning-display behavior (arching the back to show the red belly) is one of the most distinctive behaviors in amphibian keeping. They live 10 to 15 years with good care, making them a long-term companion species.`,
      health: `Fire-bellied toads produce mild skin toxins (pumiliotoxins) - not dangerous in normal contact, but always wash hands thoroughly after handling and before touching eyes, mouth, or face. They should not be housed with other amphibian species: not with fire-bellied newts (common mistake, different care requirements and potential toxin incompatibility), not with tree frogs, and not with any species that might be a prey item.

Water quality is the primary health variable. The aquatic section must be filtered and changed regularly: perform 25% water changes weekly using dechlorinated or RO water. Dirty water causes red-leg syndrome (bacterial infection causing redness, lethargy, and ulceration of the legs and belly). Treat red-leg under veterinary guidance with antibiotics and improved water quality.

Chytrid fungus (Bd) quarantine protocols apply to all new animals: quarantine any new toad for 30 to 60 days in a separate enclosure before introduction. Watch for lethargy, excessive skin shedding, and loss of appetite as early illness signs. An exotic/amphibian vet should be identified before acquiring this species.`,
      checklist: [
        "20-gallon paludarium (land and water sections)",
        "Aquarium filter for water section",
        "Dechlorinated or RO water only",
        "Moist coconut fiber and moss on land section",
        "Live or quality artificial plants",
        "Cork bark for basking",
        "Calcium w/D3 + multivitamin supplements",
        "Small live feeder insects",
        "Digital thermometer and hygrometer (keep cool, 65 to 75 degrees F)",
        "Wash hands immediately after handling (mild skin toxins)",
      ],
    },
    faqs: [
      { q: "Are fire-bellied toads poisonous?", a: "They produce mild skin toxins (pumiliotoxins) as a chemical defense. These are not dangerous to healthy humans in normal contact - touching a fire-bellied toad and then touching your eyes or mouth would cause irritation, but skin contact alone is low-risk. Always wash hands thoroughly immediately after handling, and avoid touching eyes, mouth, or face before doing so. The toxins are far more dangerous to other animals: never house fire-bellied toads with other amphibian species, and keep them away from other pets." },
      { q: "What is the unken reflex?", a: "The unken reflex (Unkenreflex in German, where the behavior was first scientifically named) is the defensive posture fire-bellied toads perform when threatened: they arch their back upward and flip their feet and hands outward to expose the bright red and black warning coloration on their belly. This is a textbook example of aposematism - advertising toxicity through conspicuous coloration. It tells predators 'I taste terrible and will make you sick.' A fire-bellied toad performing the unken reflex in captivity usually means it has been startled by a sudden reach or movement." },
      { q: "What temperature do fire-bellied toads need?", a: "65 to 75 degrees F is the ideal range - they are distinctly cool-temperature amphibians. Temperatures above 80 degrees F cause rapid and serious heat stress: hyperactivity, labored breathing, attempting to climb out of the enclosure, and deteriorating health. In warm climates, keeping fire-bellied toads requires either air conditioning or a cool basement. They typically do not need supplemental heating in temperate home environments. Never use under-tank heaters, heat lamps, or place the enclosure in direct sunlight." },
      { q: "Can fire-bellied toads be kept in groups?", a: "Yes - they are one of the few social frog species that genuinely benefit from group housing. A group of 3 to 6 same-species individuals in a proper paludarium setup is natural and engaging. Do not mix them with other frog or amphibian species: not with fire-bellied newts (common mistake, different care requirements and potential toxin incompatibility), not with tree frogs, not with any species that could be perceived as prey or competition. Within-species, same-size groups are stable and actively enjoyable to observe." },
      { q: "How long do fire-bellied toads live?", a: "10 to 15 years with proper care - a significantly longer lifespan than many keepers expect. The key factors for longevity are: consistent cool temperature (never above 80°F), pristine water quality in the aquatic section (25% water changes weekly using dechlorinated or RO water), a varied gut-loaded insect diet with calcium supplementation, and prompt attention to any signs of red-leg syndrome or other illness. Annual exotic vet checkups are worthwhile given their long potential lifespan." },
    ],
  },
  {
    id: "pacman-frog",
    name: "Pacman Frog",
    emoji: "🐸",
    difficulty: "Beginner",
    petType: "Amphibians",
    image: "/assets/guides/pacman-frog.jpg",
    tagline: "The round, grumpy ambush predator that is essentially all mouth!",
    funFact: "Pacman frogs (horned frogs, genus Ceratophrys) have an extraordinarily powerful bite for an amphibian. Their bite force relative to body size is comparable to some predatory dinosaurs. They will attempt to eat anything that moves near them, including other frogs, small mice, and keepers' fingers.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "10-20 gallon terrarium", low: 40, high: 80 },
        { item: "Deep coconut fiber or topsoil substrate", low: 15, high: 25 },
        { item: "Low-wattage heat lamp/mat with thermostat", low: 30, high: 55 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Small shallow water dish", low: 5, high: 10 },
        { item: "Feeding tongs (short, soft-tipped)", low: 8, high: 15 },
      ],
      annual: [
        { item: "Gut-loaded live insects (dubia, crickets, earthworms)", low: 70, high: 130 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "Monthly substrate replacement", low: 30, high: 50 },
      ],
    },
    sections: {
      housing: "A 10 to 20 gallon terrarium is sufficient for a single adult. Pacman frogs are sedentary ambush predators that spend most of their time buried in moist substrate with just their eyes and mouth exposed. They do not need tall enclosures. They need deep (3 to 4 inch), very moist coconut fiber or organic topsoil substrate. The substrate must feel damp like a wrung-out sponge at all times. They absorb all their water through their skin and a dried-out Pacman frog will go into estivation (a state of dormancy) and potentially die. Temperature: 75 to 85 degrees F. Humidity: 70 to 90%.",
      diet: `Pacman frogs eat with reckless, impressive aggression. Offer appropriately sized live or freshly deceased prey: dubia roaches, crickets, and nightcrawlers (earthworms are an excellent nutritional staple) form the primary diet. Occasional pinky mice for large adult frogs and waxworms as very occasional treats are acceptable. Prey should be no larger than the width of the frog's head.

Adults eat every 3 to 4 days. Juveniles eat every 1 to 2 days. Dust prey with calcium w/D3 2 to 3 times per week and a reptile multivitamin once weekly. Use feeding tongs at all times - a Pacman frog's bite is strong enough to break skin. They strike at movement reflexively and will bite anything that moves near their face, including fingers.

Gut-load all feeder insects 24 to 48 hours before offering. Remove uneaten prey promptly - prey left overnight in the enclosure stresses the frog and can cause unnecessary strikes and injury to the prey.`,
      enrichment: `Pacman frogs are sedentary ambush predators - enrichment for this species is primarily about providing the correct environmental conditions rather than toys or interaction. The most important enrichment element is deep, moist substrate (3 to 4 inches of coconut fiber or organic topsoil) that allows complete burial with just the eyes and top of the head exposed. This is natural resting posture for a Pacman frog.

Provide a small, shallow water dish large enough to soak in, and a hide for when the frog is not buried. Some leaf litter on the substrate surface adds natural texture and aesthetics. The frog will rearrange and bury through it naturally.

Observe rather than handle. Pacman frogs are display animals - watching them hunt prey and seeing them emerge during their active periods (usually at night) is the primary enrichment for the keeper. Handle very minimally and only with feeding tongs within arm's reach at all times. Their bite can draw blood and they hold on tenaciously.`,
      health: "Toxic out syndrome (TOS): this happens when a Pacman frog is kept on unsafe substrate (gravel, artificial turf with dyes, paper towels with chemicals). The frog absorbs toxins through the skin, causing neurological symptoms (spinning, thrashing, paralysis). Only use chemical-free substrates. Metabolic bone disease from lack of supplementation causes jaw deformities over time. Red-leg syndrome (bacterial infection) results from unsanitary water. Change the substrate monthly and use only dechlorinated or RO water.",
      checklist: [
        "10 to 20 gallon terrarium",
        "3 to 4 inch deep damp coconut fiber or organic topsoil substrate",
        "Digital thermometer and hygrometer",
        "Calcium w/D3 + multivitamin supplements",
        "Gut-loaded live insects (dubia, crickets, earthworms)",
        "Feeding tongs (mandatory, they bite hard)",
        "Dechlorinated or RO water for substrate moisture and dish",
        "Small shallow water dish",
        "Low-wattage heat lamp or under-enclosure mat with thermostat",
        "Monthly full substrate replacement",
      ],
    },
    faqs: [
      { q: "Do Pacman frogs bite?", a: "Yes, and it is not a warning nip - Pacman frogs have a strong, reflexive bite that can break skin. They strike at any movement near their face as an instinctive ambush response, and once they bite they tend to hold. Always use feeding tongs to offer prey and keep fingers away from their striking zone (within a body length in front of the frog). If a Pacman frog bites your finger: stay calm, lower the frog toward the ground, and gently press the frog's lower jaw downward - they release once they realize they haven't caught prey." },
      { q: "How big do Pacman frogs get?", a: "Adults are typically 3 to 5 inches in diameter - roughly the size of a tennis ball. Females grow significantly larger than males; a large female Horned Frog (the most common species, Ceratophrys cranwelli or ornata) can reach 5 to 6 inches in diameter and weigh over 200 grams. Their near-circular shape - almost as wide as they are long - and their massive gape for their body size gives them their 'Pac-Man' nickname. Despite their impressive bite, they are completely sedentary and spend most of their lives buried up to their eyes in substrate." },
      { q: "How often should I feed my Pacman frog?", a: "Adults: every 3 to 4 days is the standard recommendation. Juveniles and young frogs: every 1 to 2 days. Pacman frogs are prone to obesity from overfeeding - their sedentary lifestyle means they burn very few calories. Feed prey sized no larger than the width of the frog's head. A healthy adult Pacman frog should have a rounded but not pendulous abdomen and should show active interest in food at feeding time. If a frog consistently refuses food for more than 2 to 3 weeks, investigate environmental conditions (temperature, humidity, substrate moisture)." },
      { q: "Why doesn't my Pacman frog move?", a: "This is almost certainly normal. Pacman frogs are sit-and-wait ambush predators: their entire strategy is to remain completely motionless, buried in substrate with only the top of their head exposed, and strike anything that moves within range. Extended periods of stillness - sometimes days at a time - are natural and healthy. As long as the frog is eating on schedule, maintaining weight, and shows alertness when approached, inactivity is expected behavior, not illness." },
      { q: "What is estivation and how do I prevent it?", a: "Estivation is a drought-triggered dormancy where the Pacman frog seals itself in a mucus cocoon to prevent moisture loss during dry conditions. In captivity it is almost always caused by substrate that has dried out. The substrate must feel like a wrung-out sponge at all times - never allow it to dry. A frog found in estivation (rigid, cocooned, unresponsive) should be gently rehydrated in a shallow dish of dechlorinated lukewarm water for 20 to 30 minutes and the enclosure humidity corrected. Repeated estivation cycles shorten the frog's lifespan." },
      { q: "How can I tell if my Pacman frog is male or female?", a: "The most reliable sign only shows up in mature, vocal males: a dark patch of loose skin on the throat, the vocal sac, which females don't have. A male calling - a distinctive buzzing chirp, most often at night or after rain-like misting - confirms it instantly. Outside of that, females tend to grow noticeably larger than males, but size alone isn't a reliable method for a single frog with nothing to compare it to." },
    ],
  },
  {
    id: "tiger-salamander",
    name: "Tiger Salamander",
    emoji: "🐸",
    difficulty: "Intermediate",
    petType: "Amphibians",
    image: "/assets/guides/tiger-salamander.jpg",
    tagline: "North America's largest land-dwelling salamander and a remarkably personable pet!",
    funFact: "Tiger salamanders are one of North America's largest terrestrial salamanders, reaching 13 inches. They are also among the most cold-tolerant amphibians on the continent, naturally overwintering underground in frozen soil across much of the US and Canada.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "20-gallon long aquarium (terrestrial setup)", low: 80, high: 160 },
        { item: "Deep moist substrate (coconut fiber, soil, moss)", low: 20, high: 40 },
        { item: "Flat cork bark and rock hides", low: 15, high: 30 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Shallow soaking water dish", low: 8, high: 15 },
      ],
      annual: [
        { item: "Nightcrawlers, crickets, and dubia roaches", low: 70, high: 130 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "Dechlorinated/RO water treatment", low: 15, high: 30 },
        { item: "Annual vet check (exotic/amphibian)", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 20-gallon long aquarium is the recommended minimum for one adult tiger salamander, though 40 gallons is significantly better and allows more natural behavior. Longer, lower enclosures suit this ground-dwelling species better than tall enclosures. Provide deep substrate - 4 to 6 inches minimum - of a mix of coconut fiber, organic potting soil (no perlite, no fertilizer, no bark dyes), and sphagnum moss. Tiger salamanders are semi-fossorial: they will burrow into this substrate and spend significant time underground.

Temperature is critical and often overlooked. Tiger salamanders are cool-adapted temperate amphibians: 60 to 72 degrees F is the ideal range. They struggle noticeably above 75 degrees F and can die from prolonged exposure above 80 degrees F. In warm climates, an air-conditioned room or basement location is mandatory. Do not use under-tank heaters or heat lamps - these are cooling-requirement animals.

Provide flat cork bark slabs, flat stones, and low hides to supplement the burrowing substrate. A shallow, wide water dish (not heated) should be available at all times for soaking. The substrate should feel consistently moist - like a wrung-out sponge - with the humidity maintained at 70 to 80%.`,
      diet: `Tiger salamanders are opportunistic carnivores with a hearty appetite. Nightcrawlers (large earthworms from a bait shop or pesticide-free garden) are the best single food item: nutritionally complete, naturally scented, eagerly accepted, and available year-round from bait shops. Cut to appropriate size for juveniles.

Live crickets and dubia roaches are excellent staples. Superworms (Zophobas morio) are acceptable as supplemental feeders. Large adults can be offered occasional pinky mice as a nutritional supplement - but not regularly, as mice are very high in fat and can cause obesity and fatty liver disease in captive salamanders over time.

Feed juveniles every other day, adults 2 to 3 times per week. Prey should be no larger than the space between the salamander's eyes. Dust all feeders with calcium w/D3 powder at every other feeding and with a reptile multivitamin once weekly. Tiger salamanders can be trained to eat from feeding tongs, which is more hygienic and efficient than live prey in the enclosure.`,
      enrichment: `Tiger salamanders are among the most personable salamander species in the hobby. Unlike many amphibians that remain reclusive and stressed by keeper interaction, tiger salamanders regularly recognize their keeper, approach the front of the enclosure at feeding time, and develop observable feeding routines. This personability makes them highly rewarding to keep.

Provide burrowing substrate deep enough to disappear completely. Varied hides at the surface (cork bark, flat stones, commercial reptile hides) supplement the burrowing option and allow the salamander to choose its comfort level. A shallow soaking dish large enough for the whole body is important - tiger salamanders soak regularly, especially before and after shedding.

Handle with clean, slightly damp, chemical-free hands only. They tolerate brief, calm handling better than most salamander species. Keep sessions short (under 10 minutes) and allow the salamander to move voluntarily rather than restraining it. Observe for stress signs: rapid or labored breathing, excessive squirming, or mucus secretion indicate the salamander should be returned to its enclosure.`,
      health: `The most pervasive health risk for tiger salamanders - and all amphibians - is chemical exposure through their highly permeable skin. Never handle after applying lotion, sunscreen, insect repellent, or hand sanitizer. Even trace amounts of these substances are toxic. Always rinse and dampen hands with dechlorinated or RO water immediately before handling. Use only dechlorinated or RO water for the soaking dish and substrate misting - tap water chlorine is absorbed directly through the skin.

Chytrid fungus (Bd) is the most serious amphibian disease globally and is present in wild populations. Quarantine any new salamander for 30 to 60 days in a separate enclosure before introducing it near other amphibians. Watch for lethargy, reddening of the skin (especially the underside and limbs), excessive skin shedding, loss of righting response, and refusal to eat as symptoms of Bd or other illness.

Annual health checks with an exotic or amphibian veterinarian are strongly recommended. Tiger salamanders can live 10 to 20 years in captivity - this is a long-term commitment, and preventive veterinary care pays dividends over the animal's lifespan.`,
      checklist: [
        "20-gallon long aquarium",
        "4 to 6 inch moist substrate (coconut fiber, organic soil, sphagnum)",
        "Flat cork bark and rock hides",
        "Shallow soaking water dish (dechlorinated water, always available)",
        "Digital thermometer and hygrometer (keep cool, 60 to 72 degrees F)",
        "Calcium w/D3 + reptile multivitamin",
        "Gut-loaded live insects and nightcrawlers",
        "Feeding tongs",
        "Dechlorinated or RO water only",
        "Exotic/amphibian vet contact",
      ],
    },
    faqs: [
      { q: "Are tiger salamanders good pets?", a: "Yes - they are unusually personable for salamanders. Unlike most amphibians that remain permanently reclusive and stressed by any keeper interaction, tiger salamanders regularly learn to recognize their keeper, approach the front of the enclosure at feeding time, and develop predictable feeding routines. Many keepers describe them as having 'personality' in a way that surprises people who have only kept more typical reclusive amphibians. Their size (up to 13 inches), bold coloration, and interactive feeding behavior make them one of the most rewarding salamander species in the hobby." },
      { q: "What temperature do tiger salamanders need?", a: "60 to 72 degrees F is the ideal range - they are cool-adapted temperate amphibians that naturally overwinter in frozen soil across much of North America. They begin showing visible stress above 75 degrees F: reduced activity, attempting to escape, and immune suppression. Prolonged temperatures above 80 degrees F can be fatal. Never use under-tank heaters or heat lamps. In warm climates, an air-conditioned room or basement location is mandatory. This temperature requirement is the most common reason new keepers struggle with this species." },
      { q: "What should tiger salamanders eat?", a: "Nightcrawlers (large earthworms from a bait shop or pesticide-free garden) are the best single staple: nutritionally complete, eagerly accepted, and available year-round. Live crickets and dubia roaches are excellent variety. Superworms are acceptable supplemental feeders. Large adults can have occasional pinky mice but not regularly - mice are high in fat and cause obesity and fatty liver disease over time. Feed juveniles every other day, adults 2 to 3 times per week. Dust all feeders with calcium w/D3 powder at every other feeding and with a reptile multivitamin once weekly." },
      { q: "How big do tiger salamanders get?", a: "Up to 13 inches in length, making them one of the largest terrestrial salamanders in North America. Adults are robust, stocky animals with proportionally large heads. The eastern tiger salamander complex (Ambystoma tigrinum and related species) varies somewhat in adult size by subspecies and geographic origin, but most pet trade individuals reach 8 to 11 inches as adults. Their size, combined with their sturdy build and bold feeding response, makes them significantly more physically impressive than most other terrestrial salamander species available in the hobby." },
      { q: "How long do tiger salamanders live?", a: "10 to 20 years in captivity with proper care - a genuinely long-lived amphibian. The longevity range is wide because it depends heavily on care quality: animals kept at proper cool temperatures, on appropriate chemical-free substrate, with dechlorinated water, varied gut-loaded prey, and regular veterinary attention commonly reach 15 years. The most common life-shortening factors are temperature too warm, chemical exposure through permeable skin (soap, lotion, tap water chlorine), and metabolic bone disease from insufficient calcium supplementation." },
      { q: "How can I tell if my tiger salamander is male or female?", a: "Outside of breeding season it's genuinely difficult, tiger salamanders don't show strong everyday external differences. During breeding condition, mature males develop a visibly swollen cloaca (vent) and often a taller, more compressed tail fin than females. Most keepers of a single, non-breeding salamander simply can't sex it with confidence, and that's normal." },
    ],
  },
  {
    id: "whites-tree-frog",
    name: "White's Tree Frog",
    emoji: "🐸",
    difficulty: "Beginner",
    petType: "Amphibians",
    image: "/assets/guides/whites-tree-frog.jpg",
    tagline: "The chubby, chilled-out tree frog with a permanent smile and incredible tolerability!",
    funFact: "White's tree frogs are also called 'dumpy tree frogs' because they develop adorable fat rolls (parotoid glands and lipid ridges) as adults. These rolly features are a sign of a well-fed, healthy frog, not obesity!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "18x18x24 in+ arboreal terrarium", low: 100, high: 200 },
        { item: "Broad-leafed plants or artificial foliage", low: 25, high: 45 },
        { item: "Cork bark and PVC pipe hides", low: 15, high: 30 },
        { item: "Low-output UVB (T5 HO 5%)", low: 45, high: 80 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
      ],
      annual: [
        { item: "Gut-loaded live insect feeders", low: 80, high: 150 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "UVB bulb replacement", low: 45, high: 80 },
        { item: "Dechlorinated/RO water treatment", low: 15, high: 30 },
      ],
    },
    sections: {
      housing: "A tall 18x18x24 inch or larger arboreal terrarium suits one to two adults. Provide plenty of broad-leafed plants or artificial foliage, cork bark, and PVC pipe sections for perching and hiding. These frogs like to perch up high during the day. Temperature should stay between 75 and 85 degrees F during the day, dropping to 65 to 75 degrees F at night. Never let temperatures exceed 90 degrees F. A low-output UVB (T5 HO 5% or Zoo Med 5.0 compact) is now strongly recommended by amphibian veterinarians and improves bone density and health outcomes. Humidity should be maintained at 50 to 70% during the day and 80 to 100% at night (mist in the evening to simulate natural humidity cycles).",
      diet: `White's tree frogs are insectivores. Feed live insects sized appropriately - no wider than the space between the frog's eyes. Dubia roaches are an excellent staple. Crickets, hornworms, silkworms, and black soldier fly larvae provide variety and different nutritional profiles. Waxworms are extremely high in fat and should be used only as occasional treats.

Adults eat every other day to 3 times per week. Juveniles eat daily. Gut-load all insects 24 to 48 hours before offering - feed them collard greens, carrot, sweet potato, and commercial gut-load powder so the frog receives that nutrition. Dust feeders with calcium w/D3 at every other feeding and a reptile multivitamin once weekly.

Always use dechlorinated or reverse-osmosis water for the water dish and for misting. Tap water treated with a reptile dechlorinator (not just a generic aquarium dechlorinator) is appropriate. Frogs absorb everything through their skin - water quality matters as much as food quality.`,
      enrichment: `White's tree frogs are one of the most handleable amphibian species. They are notably calm, curious, and tolerant of gentle interaction. Handle with clean, slightly damp hands - never with dry hands or hands that have any residue of soap, lotion, hand sanitizer, or any chemical. Frogs absorb substances through their skin and even trace amounts of common household chemicals are toxic to them.

Allow the frog to climb voluntarily onto your hand rather than grabbing it. Most White's tree frogs sit contentedly on hands, fingers, and shoulders and rarely make sudden jumps. They are most active and alert in the evening - plan handling sessions at dusk for the most relaxed interactions.

Provide broad-leafed plants or quality artificial foliage at different heights, cork bark, PVC pipe sections, and a shallow water dish. Rotate the positions of enrichment items occasionally to provide environmental novelty. Evening misting creates the rain-like conditions that trigger natural activity.`,
      health: "The most common health issues are chytridiomycosis (Bd fungus, a devastating amphibian disease preventable through quarantine and hygiene), red-leg syndrome (bacterial infection causing redness on the legs, from poor water quality or substrate), and obesity from overfeeding waxworms. Never handle a frog immediately after using hand sanitizer, lotion, or any chemical. Always use dechlorinated or RO water for misting and water dishes. Quarantine any new frog for 30 to 60 days before introducing it near other amphibians.",
      checklist: [
        "18x18x24 inch+ arboreal terrarium",
        "Coconut fiber or bioactive substrate",
        "Broad-leafed plants or quality artificial foliage",
        "Cork bark and PVC pipe hides",
        "Low-output UVB (T5 HO 5%) strongly recommended",
        "Digital thermometer and hygrometer",
        "Automatic mister or evening misting routine",
        "Calcium w/D3 + reptile multivitamin",
        "Gut-loaded live insect feeders",
        "Dechlorinated or RO water only (misting and dishes)",
      ],
    },
    faqs: [
      { q: "Are White's tree frogs' fat rolls normal?", a: "Yes - the fat ridges (lipid reserves and parotoid gland folds) that develop on well-fed adult White's tree frogs are completely normal and are actually a sign of a healthy, thriving animal. They are often called 'dumpy tree frogs' precisely because of these characteristic rolls. True obesity in White's tree frogs comes from overfeeding waxworms and other high-fat insects, and presents as a dramatically swollen, pendulous abdomen rather than simply the natural folds that develop with age and good nutrition." },
      { q: "How long do White's tree frogs live?", a: "15 to 20 years with excellent care - one of the longer lifespans in the pet frog hobby. The keys to reaching this lifespan are: a varied diet of gut-loaded live insects with proper calcium supplementation, UVB lighting (strongly recommended by amphibian vets), consistent humidity cycling, and dechlorinated water for all contact. Frogs that develop metabolic bone disease from insufficient calcium or UVB rarely reach their potential lifespan." },
      { q: "Can White's tree frogs be handled?", a: "Yes - they are one of the most handleable amphibian species available. They are calm, curious, and tolerant of gentle interaction in a way that most frog species are not. The mandatory rule is: always handle with clean, slightly damp, chemical-free hands. Even trace amounts of soap, lotion, hand sanitizer, or sunscreen absorbed through their permeable skin are toxic. Rinse hands with dechlorinated water before every session. Evening is the best time as they are naturally active and most relaxed then." },
      { q: "What should White's tree frogs eat?", a: "Live insects sized no wider than the space between the frog's eyes. Dubia roaches are the best staple - nutritionally excellent and easy to gut-load. Crickets, hornworms, silkworms, and black soldier fly larvae provide variety. Waxworms are extremely high in fat and should be used only as rare treats. Gut-load all insects 24 to 48 hours before feeding (collard greens, carrot, commercial gut-load powder). Dust with calcium w/D3 at every other feeding and a multivitamin once weekly." },
      { q: "Do White's tree frogs need UVB lighting?", a: "UVB is now strongly recommended by amphibian veterinarians, even though White's tree frogs are nocturnal. Field studies show they receive measurable UV exposure during dawn/dusk activity periods. A low-output T5 HO 5% or Zoo Med 5.0 compact bulb positioned appropriately within or above the enclosure meaningfully improves bone density, calcium metabolism, and immune function. This is one of the most impactful single care upgrades for long-term frog health - the evidence for amphibian UVB benefits has grown significantly in recent years." },
    ],
  },
];
