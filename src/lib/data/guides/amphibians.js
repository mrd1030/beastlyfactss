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
        { label: "Legal check", value: "Banned outright in California, Wyoming, and Alabama, effectively banned in New Jersey, permit-only and not issued for pets in Maine, and reported banned in Washington, D.C.; several other states restrict them in some way. Legal in Virginia since August 2021, despite widely repeated claims otherwise. Check your state before buying.", source: "axolotl-legal-guide" },
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
        { item: "Dechlorinated water treatment", low: 15, high: 30 },
      ],
    },
    sections: {
      housing: `A paludarium - a terrarium with both land and water sections - is the ideal and most natural setup for fire-bellied toads. A 20-gallon tank with approximately 60% water section and 40% land section works well for a group of 3 to 5 adults. The water section should be 3 to 4 inches deep with a small aquarium filter to keep the water clean between changes. The land section should feature moist coconut fiber substrate, sheet moss, and live or quality artificial plants.

Temperature is critically important: fire-bellied toads prefer 65 to 75 degrees F and are distinctly cool-temperature amphibians. Temperatures above 80 degrees F cause significant and rapid heat stress. In warm climates, keeping them cool requires an air-conditioned room or a small fan directed at the tank. They do not require supplemental heating in most temperate home environments.

Humidity of 70 to 80% is appropriate. The water section naturally maintains this. Mist the land section lightly in the evenings. Use only dechlorinated tap water for both the water section and misting, never distilled or reverse-osmosis water, which carries none of the electrolytes an amphibian needs and can be fatal without rebalancing. Frogs absorb everything through their permeable skin.`,
      diet: `Fire-bellied toads eat small live insects. Appropriately-sized crickets (no larger than the space between the toad's eyes) are the most practical staple feeder. Fruit flies are appropriate for juveniles and very small adults. Dubia roaches, small mealworms, and black soldier fly larvae add variety. Waxworms are an occasional treat - too high in fat for regular feeding.

Feed every 2 to 3 days. Dust all feeders with calcium w/D3 powder at every other feeding session, and with a reptile multivitamin once weekly. Gut-load insects 24 to 48 hours before offering: feed the crickets or roaches collard greens, carrot, and commercial gut-load powder so the nutritional value is passed to the toad.

One natural advantage of the paludarium setup: toads will actively hunt small aquatic invertebrates (daphnia, blackworms, small bloodworms) in the water section. Adding these to the water occasionally provides excellent naturalistic enrichment and supplemental nutrition.`,
      enrichment: `Fire-bellied toads are unusual among frogs for being diurnal - they are active and visible during daylight hours. This makes them far more engaging display animals than most nocturnal frog species, which spend their days hidden. A group of fire-bellied toads in a well-planted paludarium with floating cork bark, aquatic plants, and varied terrain is genuinely beautiful and actively interesting to watch.

Provide floating cork bark platforms and submerged branches at different heights in the water section for toads to climb onto and bask. Dense live or artificial plants on the land section give the toads areas to hide between their active periods. Leaf litter on the land section adds natural texture and encourages rooting behavior.

They are social and do well in same-species groups of 3 to 6 individuals. Their characteristic "unken" warning-display behavior (arching the back to show the red belly) is one of the most distinctive behaviors in amphibian keeping. They live 10 to 15 years with good care, making them a long-term companion species.`,
      health: `Fire-bellied toads produce mild skin toxins (pumiliotoxins) - not dangerous in normal contact, but always wash hands thoroughly after handling and before touching eyes, mouth, or face. They should not be housed with other amphibian species: not with fire-bellied newts (common mistake, different care requirements and potential toxin incompatibility), not with tree frogs, and not with any species that might be a prey item.

Water quality is the primary health variable. The aquatic section must be filtered and changed regularly: perform 25% water changes weekly using dechlorinated tap water. Dirty water causes red-leg syndrome (bacterial infection causing redness, lethargy, and ulceration of the legs and belly). Treat red-leg under veterinary guidance with antibiotics and improved water quality.

Chytrid fungus (Bd) quarantine protocols apply to all new animals: quarantine any new toad for 30 to 60 days in a separate enclosure before introduction. Watch for lethargy, excessive skin shedding, and loss of appetite as early illness signs. An exotic/amphibian vet should be identified before acquiring this species.`,
      checklist: [
        "20-gallon paludarium (land and water sections)",
        "Aquarium filter for water section",
        "Dechlorinated tap water only",
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
      { q: "How long do fire-bellied toads live?", a: "10 to 15 years with proper care - a significantly longer lifespan than many keepers expect. The key factors for longevity are: consistent cool temperature (never above 80°F), pristine water quality in the aquatic section (25% water changes weekly using dechlorinated tap water), a varied gut-loaded insect diet with calcium supplementation, and prompt attention to any signs of red-leg syndrome or other illness. Annual exotic vet checkups are worthwhile given their long potential lifespan." },
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
      health: "Toxic out syndrome (TOS): this happens when a Pacman frog is kept on unsafe substrate (gravel, artificial turf with dyes, paper towels with chemicals). The frog absorbs toxins through the skin, causing neurological symptoms (spinning, thrashing, paralysis). Only use chemical-free substrates. Metabolic bone disease from lack of supplementation causes jaw deformities over time. Red-leg syndrome (bacterial infection) results from unsanitary water. Change the substrate monthly and use only dechlorinated tap water, never distilled or reverse-osmosis water, which lacks the electrolytes an amphibian needs.",
      checklist: [
        "10 to 20 gallon terrarium",
        "3 to 4 inch deep damp coconut fiber or organic topsoil substrate",
        "Digital thermometer and hygrometer",
        "Calcium w/D3 + multivitamin supplements",
        "Gut-loaded live insects (dubia, crickets, earthworms)",
        "Feeding tongs (mandatory, they bite hard)",
        "Dechlorinated tap water for substrate moisture and dish",
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
        { item: "Dechlorinated water treatment", low: 15, high: 30 },
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
      health: `The most pervasive health risk for tiger salamanders - and all amphibians - is chemical exposure through their highly permeable skin. Never handle after applying lotion, sunscreen, insect repellent, or hand sanitizer. Even trace amounts of these substances are toxic. Always rinse and dampen hands with dechlorinated tap water immediately before handling. Use only dechlorinated tap water for the soaking dish and substrate misting, never distilled or reverse-osmosis water, which carries none of the electrolytes an amphibian needs. Tap water chlorine is absorbed directly through the skin, which is what dechlorinating removes.

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
        "Dechlorinated tap water only",
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, the water rule, the
    // container-not-a-net move, and hygiene cite the shared amphibian and
    // reptile guides in the sidebar's Health and More list. Built 2026-09-09 for
    // the White's tree frog set test (docs/READER_REVIEWS.md), which found the
    // old hub telling readers to mist with reverse-osmosis water while the tank
    // setup guide told them never to; the deep dive was right and the hub's
    // instruction is gone.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Enclosure size", value: "18 inches long by 18 inches wide by 24 inches tall is the standard minimum for one adult, sized for a vertical, arboreal species. A 20-gallon-equivalent enclosure is comfortable for a single frog, and 24x18x24 inches works well for a small group of two to four.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Temperature", value: "Keep a gradient: cool side around 70 to 75°F, a basking area around 80 to 85°F, dropping into the mid-70s at night. This species doesn't need intense heat, just a gentle, reliable gradient.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Humidity", value: "A baseline around 50 to 60% with misting spikes up to 70 to 80% once or twice daily, then letting it drop back down between mistings. Constant, unbroken high humidity is directly linked to bacterial and red-leg issues.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Water", value: "Use only dechlorinated tap water or spring water for misting and drinking, never distilled or reverse-osmosis water.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Why not RO or distilled", value: "The AZA's Amphibian Husbandry Resource Guide states plainly that distilled and RO water are usually not electrolyte-balanced and can be fatal to amphibians without rebalancing with buffers, electrolytes, and pH adjustment. Dechlorinated tap water, checked with a test kit, is the more practical starting point for most home keepers.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Substrate", value: "Coarse orchid bark, coco fiber or coco husk, or a bioactive soil mix, kept lightly moist rather than soggy. Avoid fine, loose substrate that's easy to accidentally ingest during feeding.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "UVB", value: "Low-level UVB is recommended, this species survives without it but genuinely does better with it. A low-output T5 bulb in the 5 to 7% range works well, positioned so the basking branch sits at least 6 inches below the fixture, and the bulb gets replaced every 9 to 12 months on a schedule, regardless of whether it still looks like it's working.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Feeding", value: "Keep adult feeding to roughly 3 to 4 appropriately sized insects, 2 to 3 times a week, rather than free-feeding, and limit high-fat feeders like waxworms and superworms to once a week at most.", source: "whites-tree-frog-health-issues-guide" },
        { label: "Obesity check", value: "Fat deposits build up visibly over the tympanum (the external eardrum) and in the armpit area. The line between the breed's natural \"dumpy\" look and genuine obesity comes down to fat visibly bulging over the tympanum and armpits, not the frog's general roundness.", source: "whites-tree-frog-health-issues-guide" },
        { label: "Handling", value: "Keep sessions short, roughly 5 to 15 minutes, and don't handle more than about twice a week. Wash your hands thoroughly with plain water only, no soap, immediately before handling, or wear powder-free nitrile gloves lightly wetted with dechlorinated water.", source: "whites-tree-frog-handling-guide" },
        { label: "Cover", value: "Live planting with broad leaves at several heights, so a frog can sit supported and out of sight at any level. If the frog is always immediately visible, there is not enough in there.", source: "whites-tree-frog-enrichment-guide" },
        { label: "Group housing", value: "They tolerate company well and can be kept in groups, provided every animal is a similar size. A White's tree frog will swallow anything that fits, including a smaller frog, and a mixed-size group is a feeding accident waiting to happen.", source: "whites-tree-frog-enrichment-guide" },
        { label: "Budget", value: "$20 to $60 for a standard animal, most complete setups landing in the $200 to $400 range, and roughly $13 to $24 a month after that.", source: "whites-tree-frog-cost-guide" },
        { label: "Vet costs", value: "An exotic or amphibian-experienced vet exam commonly runs $50 to $150. A dedicated exotic emergency visit fee alone often starts around $250 at specialty hospitals, before any treatment.", source: "whites-tree-frog-cost-guide" },
        { label: "Lifespan", value: "The Smithsonian's National Zoo states the average lifespan is about 16 years, with one individual recorded living 21 years in human care. Other sources cite a slightly more conservative 10 to 15-plus years with excellent care.", source: "whites-tree-frog-cost-guide" },
        { label: "Adult size", value: "3 to 4.5 inches (7 to 11 cm)." },
        { label: "Quarantine", value: "The Merck Veterinary Manual puts a 6- to 8-week period as typically adequate for a new amphibian. Zoos and aquariums following the AZA's Amphibian Husbandry Resource Guide run a 30-day minimum and 60 days preferred before release from quarantine. The clock should reset, not just pause, if the animal shows any illness partway through.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Moving a new arrival", value: "A container, not a net. LafeberVet describes placing the animal along with some of its own tank water into a small, clear, water-tight container, which lets you view it from any angle without ever needing to touch it directly or force it through mesh.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "A completely healthy-looking reptile or amphibian can carry and shed Salmonella with no outward sign of illness at all, and the route is hands and surfaces to mouth rather than bites. The CDC's wording is that children younger than 5 years old should not handle or touch reptiles or amphibians or their environments.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "whites-tree-frog-health-issues-guide",
      callNow: [
        "Lethargy and weight loss, especially in a new or suspect animal (chytridiomycosis). This is a genuine emergency, quarantine any new or suspect animal immediately and get to a vet right away",
        "Redness on the belly and legs, lethargy, and loss of appetite (red-leg syndrome). This needs a vet",
        "Signs of a bacterial or skin infection, which enclosures kept too humid without adequate ventilation invite. Always see a vet if signs appear",
        "Inadequate calcium supplementation or missing UVB catching up with the frog (metabolic bone disease). This needs a vet",
        "Advanced obesity with liver involvement. Advanced cases with liver involvement need a vet",
      ],
      vetLine: "An exotic or amphibian-experienced vet, found before you need one. Amphibian veterinary care has real limitations, and prevention through correct husbandry does more work here than treatment ever will.",
    },
    routes: [
      { slug: "whites-tree-frog-cost-guide", line: "The frog at $20 to $60, a $200 to $400 setup, the recurring lines that add up to $13 to $24 a month, and what a 16-year average lifespan does to the budget." },
      { slug: "whites-tree-frog-tank-setup-guide", line: "The 18x18x24 minimum, the temperature gradient, the humidity that dips instead of sitting high, substrate, UVB, and the water that is safe to mist with." },
      { slug: "whites-tree-frog-handling-guide", line: "Why plain water beats soap, when gloves are the safer option, how long a session runs, and why the risk points at the frog rather than at you." },
      { slug: "whites-tree-frog-health-issues-guide", line: "Obesity as the signature risk, chytridiomycosis, red-leg syndrome, bacterial and skin infections, metabolic bone disease, and the husbandry pattern behind all of them." },
      { slug: "whites-tree-frog-feeding-guide", line: "The insects worth offering, how often by size and age, gut loading and dusting, and the ridge test that says whether the frog is too heavy." },
      { slug: "whites-tree-frog-enrichment-guide", line: "The red-eyed tree frog plant study and what it actually measured, dense layered planting, broad perches near the top, prey released into cover, and the one rule for group housing." },
    ],
    buyList: [
      "18x18x24 in+ arboreal terrarium (24x18x24 for a small group of two to four)",
      "Coarse orchid bark, coco husk, or a bioactive soil mix",
      "Broad-leafed live plants, with artificial foliage filling out the dense parts",
      "Cork bark and PVC pipe hides",
      "Sturdy climbing branches and broad leaves or platforms, mounted high",
      "Shallow water dish that's easy to keep clean",
      "Low-output UVB (T5 HO in the 5 to 7% range)",
      "Low-wattage bulb or side-mounted heat mat",
      "Digital thermometer and hygrometer",
      "Water conditioner/dechlorinator",
      "Calcium w/D3 and a reptile multivitamin",
      "Gut-loaded live insect feeders",
    ],
    faqs: [
      { q: "What humidity level is correct for a White's tree frog?", a: "Hold a baseline of 50 to 60% and let misting push it to 70 to 80% once or twice a day, then let it fall. Humidity that never drops is linked to bacterial and red-leg issues, so damp around the clock is the thing to avoid." },
      { q: "How long do White's tree frogs live, and how does that affect budgeting?", a: "The Smithsonian's National Zoo puts the average at about 16 years, and one individual reached 21 in human care. Other sources are slightly more conservative at 10 to 15-plus years. Either way, plan on well over a decade of ongoing care." },
      { q: "Is it safe to handle a White's tree frog?", a: "Yes, more so than the great majority of frog and toad species kept as pets. They're docile, slow-moving, and tolerate handling well once they're used to it. The risk isn't the frog hurting you, it's accidentally harming the frog through chemical exposure on your hands." },
    ],
  },
];
