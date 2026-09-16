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
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
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
    // encyclopedia entry and the cost guide. Quarantine, the water rule and
    // hygiene cite the shared amphibian and reptile guides in the sidebar's
    // Health and More list. Rewritten to the template shape 2026-09-16
    // (docs/HUB_ROUTER_REVIEWS.md). Built 2026-09-15 for the fire-bellied toad set test
    // (docs/READER_REVIEWS.md). The old hub named the skin toxin as
    // "pumiliotoxins", which is a dendrobatid alkaloid this species does not
    // produce; it also contradicted its own deep dives on tank size, layout,
    // water depth, heating, feeders and every line of both cost tables. This
    // species has no feeding guide, so the diet rows come from the tank setup
    // guide's Diet Basics section.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Enclosure", value: "10 gallons for one to three toads, a social species, with a tight screen lid for a strong jumper. Half land, half water, or an all-water base with floating cork and flat rock.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Water", value: "Deep enough to swim, sloping to about 3 inches, with easy exits. Water quality is the defining requirement: dechlorinated tap water, and a small filter or partial changes of up to half the water weekly.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Why not RO or distilled", value: "Not electrolyte-balanced, and fatal to an amphibian without rebalancing. Dechlorinated tap water, checked with a test kit, is the practical start.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Temperature", value: "75 to 78°F by day, cooler at night, with 65°F the floor and 82°F the hard ceiling. Most rooms need no heat; if yours does, a low-wattage bulb or a thermostat-controlled under-tank heater.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber or soil on the land side. Bare, or large smooth river rock, in the water, never small gravel, which is swallowed.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Lighting", value: "Low-level UVB is a benefit, not a requirement: a 5 to 7% bulb 8 to 13 inches above the substrate.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Diet", value: "Mostly live crickets, with waxworms, earthworms, blackworms, silkworms, dubia nymphs, and soldier fly larvae rotated in. No mealworms or hard-shelled feeders, which impact like gravel.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Feeding schedule", value: "Two to six items per adult every two to three days, juveniles daily, cleared within about 15 minutes. Feeders gut-loaded 24 hours, dusted with calcium and D every feeding, a multivitamin once or twice a week.", source: "fire-bellied-toad-tank-setup-guide" },
        { label: "Handling", value: "Minimal by default. The skin toxins are not dangerous under normal handling, but never near eyes, mouth, or an open wound. An arched back means the toad has classed the hand as a predator: close the lid.", source: "fire-bellied-toad-handling-guide" },
        { label: "Tankmates", value: "Its own kind only; the skin toxins harm anything else.", source: "fire-bellied-toad-handling-guide" },
        { label: "Red leg syndrome", value: "Reddening on the underside and legs, lethargy, and sores, from dirty water. Fast and frequently fatal without antibiotics.", source: "fire-bellied-toad-health-issues-guide" },
        { label: "Wild-caught stock", value: "Most in the trade are wild-caught, which is why a fecal exam for any new toad is worth doing.", source: "fire-bellied-toad-health-issues-guide" },
        { label: "Budget", value: "$10 to $25 for a standard toad, $100 or more for an albino. Setup roughly $150 to $300, then $15 to $30 a month. An exam runs $50 to $135, an emergency from $150 to $300.", source: "fire-bellied-toad-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years to plan around, with 20 recorded and a maximum of 30.", source: "fire-bellied-toad-cost-guide" },
        { label: "Adult size", value: "1.5 to 2 inches (4 to 5 cm)." },
        { label: "Quarantine", value: "Six to eight weeks for a new amphibian; zoos run a 30-day minimum with 60 preferred.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "A healthy-looking amphibian sheds Salmonella, by hands and surfaces to mouth. Children younger than 5 do not touch amphibians or their environments.", source: "reptile-salmonella-hygiene-guide" },
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
    // list. Rewritten to the template shape 2026-09-16
    // (docs/HUB_ROUTER_REVIEWS.md). They sit in the same sidebar Health and More
    // list. Built 2026-09-14 for the pacman frog set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Enclosure", value: "A 10 to 20 gallon terrarium for an adult, 24x18x18 inches ideal, floor space over height. One frog per enclosure: cannibalistic at any size.", source: "pacman-frog-tank-setup-guide" },
        { label: "Temperature", value: "75 to 85°F by day with a basking area near 83°F, 65 to 75°F at night, from a side-mounted heat mat on a thermostat or a low-wattage bulb. Never a mat under the tank: it burrows to the floor and burns.", source: "pacman-frog-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80% from moist substrate and daily misting, allowed to fall toward the low end between mistings rather than kept waterlogged.", source: "pacman-frog-tank-setup-guide" },
        { label: "Substrate", value: "3 to 4 inches of coco fiber or husk, moist enough to burrow, changed every 2 to 3 months as waste turns it acidic. No gravel, rock, bark chips, or charcoal.", source: "pacman-frog-tank-setup-guide" },
        { label: "Lighting", value: "A 12-hour cycle from a basic LED. Low-level UVB is optional with a supplemented diet.", source: "pacman-frog-tank-setup-guide" },
        { label: "Feeding schedule", value: "Juveniles daily or every 1 to 2 days, adults 1 to 3 times a week, on prey no wider than the head, judged by a body that is round but not bloated.", source: "pacman-frog-feeding-guide" },
        { label: "Diet", value: "Gut-loaded crickets, dubia, and earthworms as the rotation, mealworms and waxworms as treats. Thawed rodents for adults only, every other week at most, never live or microwaved.", source: "pacman-frog-feeding-guide" },
        { label: "Supplements", value: "Feeders gut-loaded 24 to 72 hours, dusted with calcium and D3 daily for juveniles and a few times a week for adults, plus a multivitamin about weekly.", source: "pacman-frog-feeding-guide" },
        { label: "Feeding tool", value: "Forceps, tongs, or a dish, never fingers. It cannot always tell a finger from prey.", source: "pacman-frog-handling-guide" },
        { label: "Handling", value: "Brief and infrequent, supported from underneath or held around the base of the rear legs, ready for a jump, with hands washed before and after.", source: "pacman-frog-handling-guide" },
        { label: "Off food", value: "Fine while active, alert, hydrated, with normal feces and stable weight. Weigh weekly; about 10% loss over a couple of weeks is the signal to act.", source: "pacman-frog-feeding-guide" },
        { label: "Budget", value: "$15 to $100 for the frog, $100 to $225 for the setup, about $225 all in. An exam is $50 to $150, an exotic emergency fee from around $250.", source: "pacman-frog-cost-guide" },
        { label: "Adult size", value: "4 to 7 inches, females close to double a male's mass.", source: "pacman-frog-handling-guide" },
        { label: "Lifespan", value: "6 to 10 years, 10 to 15 achievable.", source: "pacman-frog-cost-guide" },
        { label: "Quarantine", value: "6 to 8 weeks, and the clock resets if illness shows partway. A new amphibian moves in a container, never a net.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Water", value: "Dechlorinated tap water with a conditioner for chlorine and chloramine. Distilled and reverse-osmosis water are not electrolyte-balanced and can kill an amphibian.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "Wash hands with soap after any contact, never clean the enclosure in a kitchen sink or shared bathtub, and children under 5 do not touch amphibians or their environments.", source: "reptile-salmonella-hygiene-guide" },
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
    // entry, which no deep dive repeats. Quarantine and hygiene cite the
    // shared amphibian and reptile guides in the sidebar's Health and More
    // list. Rewritten to the template shape 2026-09-16
    // (docs/HUB_ROUTER_REVIEWS.md). Built 2026-09-15 for the tiger salamander set test
    // (docs/READER_REVIEWS.md), which found the old hub telling readers distilled
    // water was a fine substitute while the shared amphibian water guide calls it
    // potentially fatal, and carrying the set's only feeding schedule with
    // nothing sourcing it. This species has no feeding guide, so the diet rows
    // below come from the tank setup guide's Diet Basics section.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal check", value: "Eleven jurisdictions ban it. The January 2025 federal injurious-wildlife listing restricts import and shipment, not ownership. New Jersey's endangered listing reaches a pet whatever its origin.", source: "tiger-salamander-legal-guide" },
        { label: "Enclosure", value: "A 20-gallon long, 24 by 18 by 12 inches, minimum for one adult, floor over height for a burrower. Cohabitation is not recommended: competition and cannibalism.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Temperature", value: "60 to 75°F and never above about 78°F. No heat in a room that stays above 60°F.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Humidity", value: "70 to 75%, from moist, never soggy, substrate and a shallow dish, with one end slightly damper than the other so it can choose.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Substrate", value: "3 to 4 inches or more of coconut fiber, reptile soil, fertilizer-free topsoil, or cypress mulch. No peat, gravel, sand, small bark, vermiculite, or perlite.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Water", value: "A shallow dish of conditioned tap water or bottled spring water, always. Distilled and reverse-osmosis stay on the shelf.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Lighting", value: "No UVB needed for a nocturnal burrower, though a low level is optional. A low-wattage light on a 10 to 12 hour cycle.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Feeding schedule", value: "Juveniles every one to two days, adults two to three times a week, at night, in measured amounts: it does not stop when full, and obesity is its commonest problem.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Supplements", value: "Calcium with D3 plus a multivitamin on the feeders, every feeding while growing and every second to fourth as an adult. A thawed pinkie is a rare treat, never live.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Handling", value: "Avoided. If necessary, wet powder-free nitrile gloves and a brief session.", source: "tiger-salamander-handling-guide" },
        { label: "Out of sight is normal", value: "Fossorial, so it spends most of its time underground. Rarely visible does not mean unhealthy.", source: "tiger-salamander-handling-guide" },
        { label: "Appetite loss", value: "A specific red flag in an animal this voracious, not routine pickiness.", source: "tiger-salamander-health-issues-guide" },
        { label: "Life stage change", value: "A larval salamander starts fully aquatic, like an axolotl, and the enclosure changes entirely to deep burrowable land as it metamorphoses. Normal, not something gone wrong.", source: "tiger-salamander-tank-setup-guide" },
        { label: "Budget", value: "$30 to $50 for a juvenile barred or eastern, $125 or more for rarer morphs. Setup $150 to $400, then $15 to $30 a month. An exam runs $50 to $135, an emergency from $150 to $300.", source: "tiger-salamander-cost-guide" },
        { label: "Lifespan", value: "12 to 15 years typical, 25 the captive record.", source: "tiger-salamander-cost-guide" },
        { label: "Adult size", value: "8 to 13 inches (20 to 33 cm)." },
        { label: "Quarantine", value: "Six to eight weeks, with a fecal screen in that window. Bd, and Bsal for salamanders specifically, have a documented pet-trade pathway. Moved in a container, never a net.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "A healthy-looking amphibian sheds Salmonella, by hands and surfaces to mouth. Children younger than 5 do not touch amphibians or their environments.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "tiger-salamander-health-issues-guide",
      callNow: [
        "Bloating, straining, or no stool after a meal on loose substrate: impaction, fatal if left",
        "Red or discolored skin, abnormal shedding, or a real change in behavior: a skin or bacterial infection, chytrid included",
        "Appetite loss, in an animal this voracious",
        "Weak or bowed limbs or tremors: calcium or D3 deficiency",
        "Weight loss or loose stool in a wild-origin animal or one fed wild-caught feeders: a fecal exam for parasites",
      ],
      vetLine: "A fecal exam is worth doing for any new salamander, given how much wild-caught stock is in this trade.",
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
    // sidebar's Health and More list. Rewritten to the template shape
    // 2026-09-16 (docs/HUB_ROUTER_REVIEWS.md). Built 2026-09-09 for
    // the White's tree frog set test (docs/READER_REVIEWS.md), which found the
    // old hub telling readers to mist with reverse-osmosis water while the tank
    // setup guide told them never to; the deep dive was right and the hub's
    // instruction is gone.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Enclosure", value: "18 by 18 by 24 inches tall minimum for one adult, or 24x18x24 for a group of two to four of similar size. A frog swallows anything that fits, smaller frogs included.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Temperature", value: "Cool side 70 to 75°F, basking 80 to 85°F, mid-70s at night. A gentle gradient, not intense heat.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Humidity", value: "50 to 60% baseline with misting spikes to 70 to 80% once or twice daily, then a dry-down. Constant high humidity is what brings bacterial and red-leg problems.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Water", value: "Dechlorinated tap or spring water only, never distilled or reverse-osmosis, which are not electrolyte-balanced and can kill an amphibian.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Substrate", value: "Coarse orchid bark, coco fiber or husk, or a bioactive mix, lightly moist. Nothing fine enough to swallow while feeding.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "UVB", value: "Recommended: a 5 to 7% T5 with the basking branch at least 6 inches below it, replaced every 9 to 12 months on schedule.", source: "whites-tree-frog-tank-setup-guide" },
        { label: "Feeding", value: "3 to 4 insects, 2 to 3 times a week for an adult, never free-fed, with waxworms and superworms once a week at most.", source: "whites-tree-frog-health-issues-guide" },
        { label: "Obesity check", value: "Fat bulging over the tympanum and in the armpits, not general roundness, is the line between the natural dumpy look and a problem.", source: "whites-tree-frog-health-issues-guide" },
        { label: "Handling", value: "5 to 15 minutes, no more than about twice a week, with hands washed in plain water only, no soap, or in wet powder-free nitrile gloves.", source: "whites-tree-frog-handling-guide" },
        { label: "Cover", value: "Broad-leaved live plants at several heights so it can sit supported and unseen. Always immediately visible means not enough in there.", source: "whites-tree-frog-enrichment-guide" },
        { label: "Budget", value: "$20 to $60 for the frog, $200 to $400 for most complete setups, then $13 to $24 a month. An exam runs $50 to $150, an exotic emergency fee from around $250.", source: "whites-tree-frog-cost-guide" },
        { label: "Lifespan", value: "About 16 years on average, one recorded at 21; conservative figures say 10 to 15-plus.", source: "whites-tree-frog-cost-guide" },
        { label: "Adult size", value: "3 to 4.5 inches (7 to 11 cm)." },
        { label: "Quarantine", value: "Six to eight weeks, resetting if illness shows partway. Zoos run a 30-day minimum with 60 preferred.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Moving a new arrival", value: "In a small clear container with some of its own water, never a net, so it is never touched or forced through mesh.", source: "amphibian-quarantine-and-water-guide" },
        { label: "Hygiene", value: "A healthy-looking amphibian sheds Salmonella, by hands and surfaces to mouth. Children younger than 5 do not touch amphibians or their environments.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "whites-tree-frog-health-issues-guide",
      callNow: [
        "Lethargy and weight loss in a new or suspect animal: chytridiomycosis, quarantine it and get to a vet",
        "Redness on the belly and legs with lethargy and appetite loss: red-leg syndrome",
        "Skin lesions or a bacterial infection, which a wet, poorly ventilated enclosure invites",
        "Weak limbs, a droopy jaw, or twitching: calcium or UVB catching up with the frog",
        "Fat bulging over the tympanum and armpits: obesity, a diet fix at home, and a vet once the liver is involved",
      ],
      vetLine: "An amphibian-experienced vet, found before you need one. Amphibian medicine has real limits, and husbandry does more than treatment ever will.",
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
