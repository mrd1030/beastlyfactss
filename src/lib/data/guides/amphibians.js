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
    funFact: "The bright red-orange belly is a warning display, not decoration. Threatened, the toad arches its back and lifts its limbs to show the color off, and every stage after that arch is the animal spending toxin on whatever is holding it.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size and lifespan come from the
    // encyclopedia entry and the cost guide. Quarantine and hygiene cite the
    // shared amphibian and reptile guides in the sidebar's Health and More
    // list. Built 2026-09-15 for the fire-bellied toad set test
    // (docs/READER_REVIEWS.md). The old hub named the skin toxin as
    // "pumiliotoxins", which is a dendrobatid alkaloid this species does not
    // produce; it also contradicted its own deep dives on tank size, layout,
    // water depth, heating, feeders and every line of both cost tables. This
    // species has no feeding guide, so the diet rows come from the tank setup
    // guide's Diet Basics section.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Enclosure size and layout", value: "10 gallons covers one to three toads, since this is a social species that does fine in a small group of its own kind. The screen lid has to fit tightly: they are strong jumpers and genuine escape artists. Roughly half land, half water, a true paludarium setup, or alternatively an all-water base with floating cork bark or flat rocks providing land access points.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Water depth and quality", value: "Deep enough for your toads to genuinely swim, sloping gradually to about 3 inches, deeper if you want, with easy access in and out. Always dechlorinate tap water before it goes in. Run a small filter in the water section, or commit to frequent partial water changes, up to half the water weekly if you're not filtering.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Temperature", value: "75 to 78°F through the day, dropping at night. Treat 65°F as the floor and 82°F as the hard ceiling. Most rooms at normal temperature need no supplemental heat at all.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber or a naturalistic soil blend for the land portion. For the water section, use no substrate at all, or large smooth river rock or slate, never small gravel, which can be swallowed and cause impaction.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Diet and supplements", value: "Live crickets make up the majority of the diet, with waxworms, earthworms, blackworms, small silkworms, dubia roach nymphs and black soldier fly larvae substituted in every few feedings for variety. Skip mealworms and the other hard-shelled feeders, which carry the same impaction risk as gravel. Gut-load feeders for at least 24 hours before they go in, then dust them with a calcium and vitamin D supplement at every feeding session, adding a multivitamin once or twice a week.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Feeding schedule", value: "Two to six food items per toad every two to three days works well for an adult, and juveniles are fed daily in smaller quantities.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Handling and the toxin", value: "Unless ingested, a fire-bellied toad's skin toxins aren't dangerous to people under normal handling. Even so, minimal handling is the right default for this species, not an overcautious rule. Never let a toad's skin secretions come into contact with your eyes, mouth, or any open wound.", source: "fire-bellied-toad-handling-guide" },
        { label: "Tankmates", value: "Their skin toxins can harm tankmates that aren't the same species, so they should only ever be housed with their own kind.", source: "fire-bellied-toad-handling-guide" },
        { label: "Budget", value: "$10 to $25 for a standard oriental fire-bellied toad, sometimes as little as $5 to $10, with albino and other color variants reaching $100 or more. Roughly $150 to $300 for the setup, and $15 to $30 a month after that.", source: "fire-bellied-toad-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years is the figure to plan around, and the documented ceiling runs well past it: 20 years in human care is recorded, and the maximum on record is 30.", source: "fire-bellied-toad-cost-guide" },
        { label: "Adult size", value: "1.5 to 2 inches (4 to 5 cm)." },
        { label: "Quarantine", value: "Six to eight weeks is typically adequate for a new amphibian, and a single pet keeper can reasonably land in the middle of that range rather than at the minimum.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "Children younger than 5 should not handle or touch reptiles or amphibians or their environments at all.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "fire-bellied-toad-health-issues-guide",
      callNow: [
        "Reddening on the underside and legs, lethargy, and visible sores (red leg syndrome). This is a genuine emergency, always see a vet immediately, it is frequently fatal without prompt antibiotic treatment, and it progresses fast",
        "Discolored skin, abnormal shedding, a real change in behavior, and lethargy (chytridiomycosis or fungal infection). Always see a vet",
        "Fluid retention or bloat, which can point to infection, organ or kidney disease, or impaction. See a vet, severe bloat often carries a poor outlook",
        "Muscle twitching alongside bloating, usually tied to calcium deficiency or parasites. See a vet, and review your supplementation routine",
      ],
      vetLine: "Mild swelling tied specifically to water chemistry issues sometimes improves once the water is properly conditioned and cleaned, worth ruling out before assuming a more serious cause. For a newly acquired toad, a vet fecal exam is genuinely worth doing: parasite loads carried in from the wild are common in this species' trade.",
    },
    routes: [
      { slug: "fire-bellied-toad-cost-guide", line: "The toad at $10 to $25, what the paludarium actually costs to build, the monthly run rate, and a lifespan with a documented ceiling of 30 years." },
      { slug: "fire-bellied-toad-tank-setup-guide", line: "The half-land half-water build, water quality as the whole game, temperature, substrate, lighting, and diet basics." },
      { slug: "fire-bellied-toad-handling-guide", line: "The staged warning display, which toxin this animal actually has, and why it is a minimal-handling, single-species animal." },
      { slug: "fire-bellied-toad-health-issues-guide", line: "Red leg syndrome first, then chytrid, bloat, twitching, and the parasite load that comes with wild-caught stock." },
      { slug: "fire-bellied-toad-enrichment-guide", line: "Planting the water, moving the food around, and what the borrowed amphibian evidence does and does not support." },
    ],
    buyList: [
      "10 gallon tank minimum for one to three toads, larger for more",
      "Tight-fitting screen lid",
      "Small aquarium or sponge filter for the water section",
      "Water conditioner or dechlorinator",
      "Coconut fiber or naturalistic soil blend for the land portion",
      "Large smooth river rock or slate for the water section, never small gravel",
      "Cork bark or flat rocks for land access",
      "Live or artificial plants and hides",
      "Thermometer",
      "Low-output UVB bulb in the 5 to 7% range, optional",
      "Crickets, plus waxworms, earthworms, blackworms or silkworms for variety",
      "Calcium with vitamin D and a multivitamin",
    ],
    faqs: [
      { q: "What is red leg syndrome and why is it an emergency?", a: "A bacterial infection, often Aeromonas, that takes hold in dirty or poorly maintained water. Reddening on the underside and legs, lethargy, and visible sores. Frequently fatal without prompt antibiotic treatment, and it progresses fast. Always see a vet immediately." },
      { q: "What size enclosure does a fire-bellied toad need?", a: "10 gallons covers one to three toads, since this is a social species that does fine in a small group of its own kind. Scale up for more. The screen lid has to fit tightly: they are strong jumpers and genuine escape artists." },
      { q: "Is it safe to handle a fire-bellied toad?", a: "Unless ingested, a fire-bellied toad's skin toxins aren't dangerous to people under normal handling, according to veterinary sources. Even so, minimal handling is the right default for this species, not an overcautious rule." },
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Quarantine, water, and hygiene rows cite
    // the shared amphibian and reptile guides in the sidebar's Health and More
    // list. Built 2026-09-14 for the pacman frog set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Enclosure, one frog only", value: "A 10 to 20 gallon terrarium works well for an adult, with 24x18x18 inches as an ideal. Floor space matters far more than height here, this isn't a climbing species. Always house one frog per enclosure. Pacman frogs are cannibalistic, and cohabitation isn't a workable option regardless of enclosure size.", source: "pacman-frog-tank-setup-guide" },
        { label: "Temperature and heat source", value: "Daytime around 75 to 85°F, with a slightly warmer basking area near 83°F, dropping to 65 to 75°F at night. A side-mounted under-tank heat mat on a thermostat, or a low-wattage overhead bulb.", source: "pacman-frog-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80% is the target range, maintained through moisture-retentive substrate and daily misting. Let it drop back toward the lower end of that range between mistings rather than keeping the enclosure constantly waterlogged.", source: "pacman-frog-tank-setup-guide" },
        { label: "Substrate", value: "3 to 4 inches of coco fiber or coco husk, kept moist enough for burrowing, with a light layer of sphagnum moss or leaf litter on top if you like. Avoid gravel, rocks, bark chips, and charcoal entirely.", source: "pacman-frog-tank-setup-guide" },
        { label: "Lighting", value: "No special lighting is required. A standard 12-hour light, 12-hour dark cycle using a basic LED works fine.", source: "pacman-frog-tank-setup-guide" },
        { label: "Feeding schedule and portion", value: "Juveniles eat daily or every 1 to 2 days. Adults eat roughly 1 to 3 times a week. Size prey no wider than the frog's own head, and judge portion by body condition, round but not visibly bloated.", source: "pacman-frog-feeding-guide" },
        { label: "Diet", value: "The staple rotation is gut-loaded crickets, dubia roaches, and earthworms or nightcrawlers. Mealworms and waxworms work as occasional treats only.", source: "pacman-frog-feeding-guide" },
        { label: "Gut-loading and supplements", value: "Gut-load feeder insects on a nutrient-dense diet for roughly 24 to 72 hours before offering them. Dust with calcium and vitamin D3 daily for juveniles and a few times a week for adults, plus a general reptile multivitamin about once a week.", source: "pacman-frog-feeding-guide" },
        { label: "Handling and feeding tool", value: "Feed with forceps, tongs, or by dropping food into a dish, never with your fingers. A Pacman frog genuinely cannot always distinguish a finger from prey. Keep sessions brief and infrequent.", source: "pacman-frog-handling-guide" },
        { label: "Adult size", value: "Typically 4 to 7 inches, with females substantially larger than males, sometimes close to double the body mass.", source: "pacman-frog-handling-guide" },
        { label: "Budget", value: "$15 to $100 for the frog itself, roughly $100 to $225 for the upfront setup, and a complete first setup, frog included, commonly totals around $225. An exotic or amphibian-experienced vet exam commonly runs $50 to $150, with a dedicated exotic emergency fee often starting around $250 at specialty hospitals.", source: "pacman-frog-cost-guide" },
        { label: "Lifespan", value: "6 to 10 years is the most commonly cited range, and 10 to 15 years is achievable with excellent care.", source: "pacman-frog-cost-guide" },
        { label: "Quarantine", value: "6 to 8 weeks per general veterinary guidance, landing closer to that range than to the shortest end.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Water", value: "Dechlorinated tap water is the practical default, using a conditioner that neutralizes both chlorine and chloramine. Distilled and reverse-osmosis water are usually not electrolyte-balanced, and using either without rebalancing can be fatal to amphibians.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact with the frog, its enclosure, or its water. Children younger than 5 should not handle or touch amphibians or their environments.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "pacman-frog-health-issues-guide",
      callNow: [
        "A hard lump in the belly, bloating, and refusal to move, the signs of a blockage that isn't passing",
        "A droopy jaw, bowed legs, and twitching",
        "Red spots on the belly or thighs, cloudy eyes, and lethargy: quarantine the frog and get to a vet promptly",
        "Severe swelling combined with an inability to right itself",
        "A frog under about a year old going dormant",
      ],
      vetLine: "An exotic or amphibian-experienced vet, found before you need one. Severe swelling with an inability to right itself needs immediate veterinary attention rather than a wait-and-see approach.",
    },
    routes: [
      { slug: "pacman-frog-cost-guide", line: "The frog $15 to $100, the modest setup this species actually needs, and the vet bill that impaction brings." },
      { slug: "pacman-frog-tank-setup-guide", line: "Enclosure size, 75 to 85°F days, 60 to 80% humidity, and why the heat mat never goes underneath." },
      { slug: "pacman-frog-feeding-guide", line: "Schedule by age, the staple rotation, gut-loading, and the eight reasons a Pacman frog stops eating." },
      { slug: "pacman-frog-handling-guide", line: "Why this is a display animal, how to pick one up on the rare occasion you must, and sexing a mature frog." },
      { slug: "pacman-frog-health-issues-guide", line: "Obesity, impaction, metabolic bone disease, red-leg, and the signs that mean a vet now." },
      { slug: "pacman-frog-enrichment-guide", line: "What the amphibian research actually supports, the priority order, and reading body condition without touching the frog." },
    ],
    buyList: [
      "10 to 20 gallon terrarium (24x18x18 inches if you want the ideal)",
      "Coco fiber or coco husk substrate, enough for 3 to 4 inches",
      "Sphagnum moss or leaf litter for the surface",
      "Side-mounted heat mat on a thermostat, or a low-wattage overhead bulb",
      "Digital thermometer and hygrometer",
      "Shallow water dish that won't drown a burrowed frog",
      "A basic hide",
      "Short, soft-tipped feeding tongs",
      "Water conditioner that neutralizes chlorine and chloramine",
      "Calcium with D3 and a reptile multivitamin",
      "Gut-loaded crickets, dubia roaches, and earthworms or nightcrawlers",
    ],
    faqs: [
      { q: "Can you put a heat mat under a Pacman frog's tank?", a: "No, never underneath. Pacman frogs burrow to the floor of the substrate, so a mat below the tank can burn a frog sitting right on top of it. Mount the mat on the side, on a thermostat, or use a low-wattage overhead bulb." },
      { q: "What causes impaction in Pacman frogs, and is it serious?", a: "Yes, it can be fatal. A Pacman frog strikes explosively and often swallows whatever is on the ground with the prey: loose substrate, sand-coated feeders, or an item too big to pass. A hard lump in the belly, bloating, and refusal to move are the signs. Warm soaks sometimes clear a mild case, but a blockage that doesn't pass needs a vet." },
      { q: "Why should you never hand-feed a Pacman frog?", a: "Because a Pacman frog can't reliably tell a finger from prey. The bite that follows a feeding mistake is a real, painful injury, not a nip. Feed with forceps, tongs, or by dropping food into a dish." },
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, moving a new arrival, and
    // hygiene cite the shared amphibian and reptile guides in the sidebar's
    // Health and More list. Built 2026-09-15 for the tiger salamander set test
    // (docs/READER_REVIEWS.md), which found the old hub telling readers distilled
    // water was a fine substitute while the shared amphibian water guide calls it
    // potentially fatal, and carrying the set's only feeding schedule with
    // nothing sourcing it. This species has no feeding guide, so the diet row
    // below comes from the tank setup guide's Diet Basics section.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Eleven jurisdictions ban this animal, and two of them get there by pointing at the federal list rather than writing their own.", source: "tiger-salamander-legal-guide" },
        { label: "Enclosure size and cohabitation", value: "A 20-gallon long tank, 24 inches long by 18 inches wide by 12 inches tall, works as a minimum for a single adult. Favor horizontal floor space over height, this is a ground-dwelling, burrowing species, not a climber. Cohabitation generally isn't recommended, competition and even cannibalism are real risks, though some very large enclosures can occasionally support a small group, worth researching carefully before attempting.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Temperature", value: "60 to 75°F, and genuinely never above about 78°F, heat stress is a real concern for this species. Most rooms need no supplemental heat at all if they stay above roughly 60°F.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Humidity", value: "70 to 75%, maintained through consistently moist, never soggy, substrate and a shallow water dish.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Substrate", value: "At least 3 to 4 inches of moisture-retentive, burrow-supporting material, coconut fiber, a commercial reptile soil product, organic fertilizer-free topsoil, or cypress mulch all work, and deeper is better. Avoid peat moss specifically, its acidity can cause real harm over time, and skip gravel, sand, small bark chips, and anything containing vermiculite or perlite.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Water", value: "A shallow dish of dechlorinated water should always be available. Treat all water with a conditioner before use, or use bottled spring water instead. Distilled and reverse-osmosis water are the two to leave on the shelf.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Lighting", value: "This species is largely nocturnal and fossorial, and doesn't require UVB, though a low level is considered optional and potentially beneficial by some sources.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Feeding schedule and supplements", value: "Feed a growing juvenile every one to two days and an adult two to three times a week, at night, in small measured quantities. Dust feeders with a calcium and vitamin D3 supplement plus a multivitamin, at every feeding while the animal is growing and every second to fourth feeding once it is adult.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Handling", value: "Direct handling should genuinely be avoided with this species. If it is necessary, wear wet, powder-free nitrile gloves and keep any handling brief.", source: "tiger-salamander-handling-guide" },
        { label: "Out of sight is normal", value: "Don't mistake a salamander that's rarely visible for one that's unhealthy or hiding from stress.", source: "tiger-salamander-handling-guide" },
        { label: "Budget", value: "$30 to $50 for a juvenile barred or eastern tiger salamander, the most common types in the trade, with rarer morphs and larger animals reaching $125 or more. Roughly $150 to $400 for the setup, and roughly $15 to $30 a month after that.", source: "tiger-salamander-cost-guide" },
        { label: "Lifespan", value: "12 to 15 years is typical, with well-documented cases reaching considerably longer.", source: "tiger-salamander-cost-guide" },
        { label: "Adult size", value: "8 to 13 inches (20 to 33 cm)." },
        { label: "Quarantine and moving a new arrival", value: "Six to eight weeks is typically adequate for a new amphibian, and a single pet keeper can reasonably land in the middle of that range rather than at the minimum. A container, never a net, especially for any amphibian's skin. Run a fecal screen somewhere in that window.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "Children younger than 5 should not handle or touch reptiles or amphibians or their environments at all.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "tiger-salamander-health-issues-guide",
      callNow: [
        "Suspected substrate impaction. Always see a vet, this can become genuinely fatal if left untreated",
        "Metabolic bone disease, from calcium or vitamin D3 deficiency",
        "Red or discolored skin, abnormal shedding, a real change in behavior, or appetite loss, any of which can mean a skin or bacterial infection including chytrid fungus. Always see a vet",
        "Suspected parasites, often carried by wild-caught feeders or wild-origin animals",
      ],
      vetLine: "A vet fecal exam is worth doing for peace of mind, especially given how commonly wild-caught stock shows up in this species' trade. Appetite loss is the signal to act on: this species is normally such a voracious eater that any drop in appetite is a genuine red flag.",
    },
    routes: [
      { slug: "tiger-salamander-cost-guide", line: "The animal at $30 to $125, the upfront setup, the monthly feeder bill, and the lifespan that is the real commitment." },
      { slug: "tiger-salamander-tank-setup-guide", line: "Enclosure size, 60 to 75°F, humidity, the substrate avoid-list, water, lighting, diet basics, and the larval-to-adult changeover." },
      { slug: "tiger-salamander-handling-guide", line: "Why handling stays minimal, what to do when it is unavoidable, and why an animal you rarely see is behaving normally." },
      { slug: "tiger-salamander-health-issues-guide", line: "Obesity, substrate impaction, metabolic bone disease, skin and bacterial infection including chytrid, and parasites." },
      { slug: "tiger-salamander-enrichment-guide", line: "Substrate depth as the whole guide, what the amphibian enrichment research does and does not say, and the priority order." },
      { slug: "tiger-salamander-legal-guide", line: "The January 2025 federal rule, the bait-trade regulations it gets confused with, and where all 52 jurisdictions land." },
    ],
    buyList: [
      "20-gallon long tank, 24 by 18 by 12 inches",
      "Coconut fiber, commercial reptile soil, fertilizer-free topsoil, or cypress mulch, enough for 3 to 4 inches and deeper if the enclosure allows",
      "Leaf litter for surface cover",
      "Flat cork bark and low hides",
      "Shallow water dish large enough to sit in",
      "Water conditioner, or bottled spring water",
      "Digital thermometer and hygrometer combo",
      "Low-wattage light on a 10 to 12 hour cycle",
      "Calcium with vitamin D3 and a multivitamin",
      "Nightcrawlers, crickets, and roaches",
      "Feeding tongs",
      "Secure lid",
    ],
    faqs: [
      { q: "What temperature and humidity does a tiger salamander need?", a: "60 to 75°F, and never above about 78°F, since heat stress is a real concern. Humidity should stay around 70 to 75%, maintained through consistently moist, never soggy, substrate and a shallow water dish." },
      { q: "Why does my tiger salamander stay hidden underground so much?", a: "This species is fossorial and spends most of its time burrowed rather than visible on the surface. A salamander that's rarely visible isn't unhealthy or stressed, that's normal behavior, and it's exactly why deep, burrowable substrate matters so much." },
      { q: "What is the most common health issue in pet tiger salamanders?", a: "Obesity. Tiger salamanders don't reliably self-regulate intake, they're opportunistic feeders that keep eating whatever is offered." },
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
    // entry, which no deep dive repeats. Quarantine, moving a new arrival,
    // and hygiene cite the shared amphibian and reptile guides in the
    // sidebar's Health and More list. Built 2026-09-09 for
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
        { label: "Substrate", value: "Coarse orchid bark, coco fiber or coco husk, or a bioactive soil mix, kept lightly moist rather than soggy. Avoid fine, loose substrate that's easy to accidentally ingest during feeding.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "UVB", value: "A low-output T5 bulb in the 5 to 7% range works well, positioned so the basking branch sits at least 6 inches below the fixture, and the bulb gets replaced every 9 to 12 months on a schedule, regardless of whether it still looks like it's working.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Feeding and body condition", value: "Keep adult feeding to roughly 3 to 4 appropriately sized insects, 2 to 3 times a week, rather than free-feeding, and limit high-fat feeders like waxworms and superworms to once a week at most. Fat deposits build up visibly over the tympanum (the external eardrum) and in the armpit area.", source: "whites-tree-frog-health-issues-guide" },
        { label: "Handling", value: "Keep sessions short, roughly 5 to 15 minutes, and don't handle more than about twice a week. Wash your hands thoroughly with plain water only, no soap, immediately before handling, or wear powder-free nitrile gloves lightly wetted with dechlorinated water.", source: "whites-tree-frog-handling-guide" },
        { label: "Cover and group housing", value: "Live planting with broad leaves at several heights, so a frog can sit supported and out of sight at any level. They tolerate company well and can be kept in groups, provided every animal is a similar size. A White's tree frog will swallow anything that fits, including a smaller frog, and a mixed-size group is a feeding accident waiting to happen.", source: "whites-tree-frog-enrichment-guide" },
        { label: "Budget", value: "$20 to $60 for a standard animal, most complete setups landing in the $200 to $400 range, and roughly $13 to $24 a month in consumables after that, before substrate and power. An exotic or amphibian-experienced vet exam commonly runs $50 to $150.", source: "whites-tree-frog-cost-guide" },
        { label: "Lifespan", value: "The average lifespan is about 16 years, with one individual recorded living 21 years in human care.", source: "whites-tree-frog-cost-guide" },
        { label: "Adult size", value: "3 to 4.5 inches (7 to 11 cm)." },
        { label: "Quarantine and moving a new arrival", value: "Six to eight weeks is typically adequate for a new amphibian. The clock should reset, not just pause, if the animal shows any illness partway through. A container, not a net.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "Children younger than 5 years old should not handle or touch reptiles or amphibians or their environments.", source: "reptile-salmonella-hygiene-guide" },
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
      { q: "How long do White's tree frogs live, and how does that affect budgeting?", a: "The average is about 16 years, and one individual reached 21 in human care. More conservative figures run 10 to 15-plus years. Either way, plan on well over a decade of ongoing care." },
      { q: "Is it safe to handle a White's tree frog?", a: "Yes, more so than the great majority of frog and toad species kept as pets. They're docile, slow-moving, and tolerate handling well once they're used to it. The risk isn't the frog hurting you, it's accidentally harming the frog through chemical exposure on your hands." },
    ],
  },
];
