export const geckoGuides = [
  {
    id: "african-fat-tail",
    name: "African Fat-Tailed Gecko",
    emoji: "🦎",
    difficulty: "Beginner",
    petType: "Geckos",
    image: "/assets/guides/african-fat-tail.jpg",
    tagline: "The calm, velvety cousin of the leopard gecko: gentle as can be!",
    seoTitle: "African Fat-Tailed Gecko Care Guide: Heat, Diet, and Shed",
    seoDescription: "African fat-tailed gecko care from the first week: the 20-gallon long floor, the humidity that sets it apart from a leopard gecko, portions, and when to handle.",
    funFact: "African fat-tailed geckos store fat in their wide, sausage-shaped tails as an energy reserve, just like leopard geckos. A plump tail is a sign of a healthy, well-fed gecko!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Quarantine and hygiene
    // cite the shared reptile guides in the sidebar's Health and More list.
    // Rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md):
    // the substrate row scopes paper towel to juveniles and quarantine, the
    // heat row says warm-side floor. The old hub narrowed ambient humidity to 50-60% against the
    // setup guide's 50-70%, never gave the humid hide figure at all, had the
    // D3 supplement schedule backwards against the feeding guide, and gave a
    // cool side and a lifespan that disagreed with the deep dives.
    // Reconciled 2026-09-15 for batch I (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "Quarantined away from any reptile you already keep, on paper towel, with its own tools and a fecal exam inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "A 20-gallon long minimum for one adult, a 36x18x16 inch 40-gallon breeder better. Height buys little for a terrestrial burrower.", source: "african-fat-tail-tank-setup-guide" },
        { label: "Heat", value: "A heat mat on a thermostat for a warm-side floor of 88 to 92°F, a cool side of 75 to 80°F, and nights of 70 to 75°F. No heat rocks or strong overhead bulbs, which burn.", source: "african-fat-tail-tank-setup-guide" },
        { label: "Humidity", value: "Ambient 50 to 70%, higher than a leopard gecko, with a permanent humid hide at 70 to 80%, which is what prevents shedding trouble.", source: "african-fat-tail-tank-setup-guide" },
        { label: "Substrate", value: "For healthy adults, roughly 70% topsoil to 30% play sand at least 4 inches deep. Juveniles and animals in quarantine go on paper towel. Never pure sand, which dries the gecko and impacts.", source: "african-fat-tail-tank-setup-guide" },
        { label: "UVB and light", value: "A high-D3 calcium can carry a nocturnal gecko without it, but a 2 to 5% low-output UVB is increasingly recommended. A 10 to 12 hour photoperiod either way.", source: "african-fat-tail-tank-setup-guide" },
        { label: "Three hides", value: "Warm, cool, and humid, so it chooses temperature and moisture while concealed. Thermal choice ranked first in the leopard gecko enrichment study.", source: "african-fat-tail-enrichment-guide" },
        { label: "Feeding schedule", value: "Hatchlings daily. Juveniles daily, easing toward 3 times a week as the tail fills out. Adults 3 times a week down to every 5 days for a gecko with a visibly fat tail.", source: "african-fat-tail-feeding-guide" },
        { label: "Portion", value: "About 2 bugs per inch of body, or what it eats in about 15 minutes, none wider than the space between the eyes: crickets, dubia, discoids, mealworms, superworms, soldier fly larvae, in the evening. Fresh water in a shallow dish, changed daily.", source: "african-fat-tail-feeding-guide" },
        { label: "Calcium", value: "Plain, phosphorus-free calcium at most feedings, at least 3 times a week, and a calcium-with-D3 combo once or twice a week.", source: "african-fat-tail-feeding-guide" },
        { label: "Never feed", value: "Ladybugs, fireflies, monarchs, box elder bugs, centipedes, bees, or wasps. Only captive-bred, farmed insects.", source: "african-fat-tail-feeding-guide" },
        { label: "The tail is the gauge", value: "A fall and winter appetite drop is normal in adults, and the tail fat lets a healthy adult fast for weeks. A tail thinner than the neck is the warning sign.", source: "african-fat-tail-feeding-guide" },
        { label: "Handling, week one", value: "Two weeks after it comes home and once it is eating. Support the whole body and let it walk across your hands; a chirp or squeak means put it down. Never the tail, which drops and regrows smoother.", source: "african-fat-tail-handling-guide" },
        { label: "Stuck shed", value: "Retained shed on the toes and tail tip is the commonest fat-tail problem, from low humidity or no moist hide, and the hide prevents almost all of it.", source: "african-fat-tail-health-issues-guide" },
        { label: "Budget", value: "Normals around $100 inside a $75 to $600 range, morphs to $600 to $1,000. Roughly $200 to $500 for the setup, then $10 to $25 a month.", source: "african-fat-tail-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years cited; the best-documented captive maximum is just over 16.", source: "african-fat-tail-cost-guide" },
        { label: "Adult size", value: "7 to 9 inches (18 to 23 cm)." },
        { label: "Hygiene", value: "Wash hands with soap after any contact, keep the gecko out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "african-fat-tail-health-issues-guide",
      callNow: [
        "A female straining to lay",
        "Wheezing, mucus, or open-mouth breathing, which needs antibiotics and will not clear alone",
        "Bloating, lethargy, appetite loss, and straining: impaction",
        "Lethargy, difficulty standing or walking, swollen joints, muscle twitches, or spinal curvature: bone disease",
      ],
      soon: [
        "Retained shed constricting a toe or the tail tip once home correction has failed",
        "Cloudiness, swelling, or discharge in the eyes outside a normal shed",
      ],
      vetLine: "Eye problems are reported relatively often in this species, so anything outside a shed cycle is worth a visit.",
    },
    routes: [
      { slug: "african-fat-tail-cost-guide", line: "$75 to $600 for a normal and past $1,000 for stacked morphs, the $200 to $500 setup, and what a documented 16-year maximum means for budgeting." },
      { slug: "african-fat-tail-tank-setup-guide", line: "The 20-gallon-long floor, the heat mat gradient, the humidity that separates this species from a leopard gecko, and 4 inches of substrate to burrow in." },
      { slug: "african-fat-tail-feeding-guide", line: "Portion by body length, the schedule by age, the phosphorus-free calcium rule, and why the tail is a better gauge than a day count." },
      { slug: "african-fat-tail-handling-guide", line: "Two weeks before the first session, what a chirp means, and why the tail is never a handhold." },
      { slug: "african-fat-tail-health-issues-guide", line: "Retained shed, metabolic bone disease, impaction, respiratory infection, and egg-binding." },
      { slug: "african-fat-tail-enrichment-guide", line: "The leopard gecko study that ranked thermal and feeding enrichment first and mirrors last, and the one thing that does not transfer." },
    ],
    buyList: [
      "20-gallon long enclosure, 40-gallon breeder preferred",
      "Under-tank heat mat",
      "Thermostat",
      "Digital thermometer and hygrometer",
      "Optional low-output 2 to 5% UVB",
      "Topsoil and play sand, enough for 4 inches",
      "Warm hide, cool hide, and a permanent humid hide",
      "Sphagnum moss for the humid hide",
      "Shallow water dish",
      "Gut-loaded crickets and dubia roaches",
      "Plain phosphorus-free calcium, plus a calcium and D3 combo",
      "Feeding tongs",
    ],
    faqs: [
      { q: "How humid should the enclosure be?", a: "Higher than a leopard gecko needs, though the enclosure stays mostly dry. Ambient around 50 to 70% works, and a permanent humid hide at 70 to 80% is the piece that prevents shedding problems." },
      { q: "How often should I dust with calcium?", a: "Plain, phosphorus-free calcium at most feedings: every feeding at the strict end, at least 3 times a week at the other. A calcium and D3 combo is generally used just once or twice a week on top of that." },
      { q: "Will an African fat-tailed gecko drop its tail like a leopard gecko?", a: "Yes, if it is grabbed roughly or badly frightened, which is why the tail is never a handhold. The tail does grow back. The replacement is smoother and more bulbous than the one it lost." },
    ],
  },
  {
    id: "crested-gecko",
    name: "Crested Gecko",
    emoji: "🦎",
    difficulty: "Beginner",
    petType: "Geckos",
    image: "/assets/guides/crested-gecko.jpg",
    tagline: "The velvety, fan-fringed gecko that needs no heat lamp!",
    seoTitle: "Crested Gecko Care Guide: Setup, Humidity, and Diet",
    seoDescription: "A crested gecko needs you to avoid heat: the 18x18x24 vertical setup, the 85°F ceiling it cannot cross, why powdered diet is the staple, and what needs a vet.",
    funFact: "Crested geckos were thought to be extinct until rediscovered in 1994 during a tropical storm in New Caledonia!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Quarantine and hygiene
    // cite the shared reptile guides in the sidebar's Health and More list.
    // Reconciled 2026-09-08 after the crested gecko set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "A new gecko is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "18x18x24 inches is the minimum for one adult, and taller is genuinely better, a 2x2x2 foot enclosure is a common upgrade. Height matters more than floor space here.", source: "crested-gecko-tank-setup-guide" },
        { label: "Temperature", value: "Ambient 72 to 78°F. 85°F is a hard ceiling with zero exceptions, this species runs into heat danger faster than cold.", source: "crested-gecko-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80%, spiking to 80% or higher right after the evening mist and drying to 45 to 50% by late afternoon before the next one. The daily swing is the point, not a constant number.", source: "crested-gecko-humidity-guide" },
        { label: "UVB", value: "Not strictly required, since a complete diet powder already supplies vitamin D3, but low-level UVB is still worth adding: a 24-inch T5 HO around 5.0, for a UVI of 0.6 to 1.4.", source: "crested-gecko-tank-setup-guide" },
        { label: "Floor", value: "Paper towel for hatchlings and quarantine setups. Coconut fiber, sphagnum, or a bioactive mix for adults, at least 2 inches deep.", source: "crested-gecko-tank-setup-guide" },
        { label: "Feeding schedule", value: "Hatchlings and juveniles get commercial crested gecko diet (CGD) daily, with live insects 1 to 2 times a week. Adults move to CGD every 2 to 3 days, with insects about once a week.", source: "crested-gecko-feeding-guide" },
        { label: "Not eating", value: "A healthy, good-weight adult can typically go 2 to 3 weeks without eating, but a vet consult is worth considering after the second week, especially with visible weight loss.", source: "crested-gecko-feeding-guide" },
        { label: "Handling", value: "Wait about two weeks, and until the gecko is a sub-adult of 8 to 15 grams (roughly 4 to 5 inches, about 6 months old). Then 1 to 2 minute sessions building to 15 minutes, under 20 minutes total a day. Never grab the tail, it does not grow back.", source: "crested-gecko-handling-guide" },
        { label: "Budget", value: "$50 to $200 for a normal morph, up to $500 to $1,000+ for rare morphs. $335 to $530 of equipment, $400 to $740 with the first vet exam. $31 to $52 a month after that.", source: "crested-gecko-cost-guide" },
        { label: "Adult size", value: "7 to 9 inches including tail." },
        { label: "Lifespan", value: "15 to 20 years in captivity, with the earliest known captive individuals living into their 30s.", source: "crested-gecko-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the gecko out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "65 to 72°F is the normal night low. Sustained below 72°F, day or night, causes lethargy and appetite loss, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "crested-gecko-health-issues-guide",
      callNow: [
        "A soft or misshapen jaw",
        "No bowel movement for a week or more",
        "Breathing difficulty",
        "Ongoing weight loss",
        "Any neurological symptoms",
      ],
      vetLine: "An exotic vet, found before you need one. Bring a new gecko in within the first 30 days of ownership, then an annual wellness exam with a fecal test as a baseline, not just when something looks wrong.",
    },
    routes: [
      { slug: "crested-gecko-cost-guide", line: "$50 to $200 for the gecko, $335 to $530 of equipment, and $31 to $52 a month after that." },
      { slug: "crested-gecko-tank-setup-guide", line: "The 18x18x24 vertical minimum, the 85°F hard ceiling, and why this species needs you to avoid heat rather than provide it." },
      { slug: "crested-gecko-humidity-guide", line: "The 60 to 80% daily swing, a misting schedule that actually works, and the signs humidity is running too low or too high." },
      { slug: "crested-gecko-feeding-guide", line: "Why powdered diet, not live insects, should be the staple, portion size by age, and the honest range of reasons a gecko stops eating." },
      { slug: "crested-gecko-handling-guide", line: "Settling-in time, the treadmilling technique, and why tail loss here is permanent, not regrowable." },
      { slug: "crested-gecko-health-issues-guide", line: "Metabolic bone disease, floppy tail syndrome, impaction, stuck shed, and when a soft jaw or missed bowel movement means the vet." },
      { slug: "crested-gecko-enrichment-guide", line: "Vertical climbing structure, cover at height, and foraging that asks for a little effort." },
    ],
    buyList: [
      "18x18x24 inch front-opening arboreal enclosure",
      "Low-output UVB (T5 HO, around 5.0)",
      "Low-wattage heat bulb and fixture, on a thermostat",
      "Digital thermometer and hygrometer",
      "Coconut fiber or bioactive substrate",
      "Cork bark tubes and branches",
      "Live or artificial plants",
      "Fine misting bottle or fogger",
      "Commercial crested gecko diet (CGD)",
      "Occasional feeder insects (crickets, dubia) and a calcium supplement",
    ],
    faqs: [
      { q: "How long can a crested gecko go without eating?", a: "About 2 to 3 weeks for a healthy adult at a good weight, though a vet consult is worth considering once the second week passes, especially alongside visible weight loss. Juveniles hold far less reserve and don't get that grace period. Water runs on a shorter clock: roughly 3 days." },
      { q: "Does a crested gecko's tail grow back if it drops?", a: "No, and this is the critical difference from species like leopard geckos. A crested gecko's tail does not grow back once dropped. The good news is a tailless gecko, often called a \"frog butt\" by keepers, lives a completely normal, healthy life." },
      { q: "What's the maximum safe temperature for a crested gecko enclosure?", a: "85°F, a hard ceiling with zero exceptions. New Caledonia, where they come from, tops out at 79-85°F in the hot season, and a long stretch above that risks fatal heat stroke. Too much heat is the bigger danger with this species." },
    ],
  },
  {
    id: "gargoyle-gecko",
    name: "Gargoyle Gecko",
    emoji: "🦎",
    difficulty: "Beginner",
    petType: "Geckos",
    image: "/assets/guides/gargoyle-gecko.jpg",
    tagline: "The bumpy-headed climber that drops its tail and simply grows another!",
    seoTitle: "Gargoyle Gecko Care Guide: Setup, Feeding, and Health",
    seoDescription: "Gargoyle geckos need more than a crested gecko setup: the 86°F ceiling, the daily wet-dry humidity cycle, why insects are required, and a tail that grows back.",
    funFact: "Gargoyle geckos are named for the horn-like bumps on their heads, and unlike their crested gecko cousins they can regrow a dropped tail. A 2024 genome study confirmed the difference: same family, one very different superpower.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Quarantine and hygiene
    // cite the shared reptile guides in the sidebar's Health and More list.
    // Rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    // The old hub disagreed with the deep dives on temperature,
    // insect frequency, supplement schedule, handling session length, time of
    // day, temperament and tail regrowth, and its own diet section and FAQ
    // disagreed with each other on insects. Reconciled 2026-09-14 for batch H
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "A new gecko is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a fecal exam inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "18x18x24 inches minimum for an adult, 24x24x24 ideal, vertical over floor, one gecko per enclosure. Hatchlings under about 12 grams do better in a smaller grow-out.", source: "gargoyle-gecko-tank-setup-guide" },
        { label: "Temperature", value: "A cool end of 70 to 75°F and a basking spot of 82 to 85°F, from a low-wattage bulb or ceramic emitter on a thermostat. Nights to the mid-60s are fine and 65°F is the floor. The belief that it needs no heat is the most repeated mistake.", source: "gargoyle-gecko-tank-setup-guide" },
        { label: "The ceiling", value: "Air above 86°F is dangerous, lower than almost any lizard in the hobby. Away from sunny windows: room heat is what pushes a gargoyle past it.", source: "gargoyle-gecko-tank-setup-guide" },
        { label: "Humidity", value: "50 to 70%: mist heavily in the evening and let it dry back toward 50% before misting again. They drink the droplets; a shallow dish is a backup. Constant wet causes respiratory infection.", source: "gargoyle-gecko-tank-setup-guide" },
        { label: "Substrate and clutter", value: "Coconut fiber, or paper towel for hatchlings and sick geckos; no sand, wood chips, or gravel. Heavy clutter of branches, vines, and cork, since resting on bare glass is how floppy tail starts.", source: "gargoyle-gecko-tank-setup-guide" },
        { label: "UVB", value: "Survivable without, since a complete powdered diet supplies D3, but a 12-inch low-output T5 at a basking UVI of 1.0 to 2.0 over open mesh, 12 hours a day, has real benefits.", source: "gargoyle-gecko-tank-setup-guide" },
        { label: "Staple diet", value: "A powdered crested gecko diet at 2 to 3 parts water to 1 part powder in a cup or on a ledge, rotating 3 or more brands. Hatchlings and juveniles daily, adults every 2 to 3 days.", source: "gargoyle-gecko-feeding-guide" },
        { label: "Insects are required", value: "Unlike a crested gecko: 1 to 2 times a week for juveniles, once a week for adults, gut-loaded 24 to 48 hours and dusted with calcium without D3 most times, with D3 periodically.", source: "gargoyle-gecko-feeding-guide" },
        { label: "Foods to avoid", value: "Citrus, starfruit, rhubarb, garlic, onion, eggplant, dairy, and avocado.", source: "gargoyle-gecko-feeding-guide" },
        { label: "Not eating", value: "A healthy adult goes up to 2 to 3 weeks; a juvenile not past 4 to 5 days. Water is the time-critical one: no more than 2 to 3 days without access. Weigh regularly; a thinning tail is the early sign.", source: "gargoyle-gecko-feeding-guide" },
        { label: "Handling, week one", value: "Wait two weeks after it comes home, then 5-minute sessions every other day, working toward 15 and a daily total near 20. Adults are calm; juveniles are jumpy.", source: "gargoyle-gecko-handling-guide" },
        { label: "Tail and teeth", value: "Never hold the tail. It regrows, unlike a crested gecko's. A bite is rare and provoked, and can break skin: soap and water.", source: "gargoyle-gecko-handling-guide" },
        { label: "Budget", value: "$50 to $300 for a common animal, $500 to $1,000 or more for a premium morph, and $230 to $445 in gear. $10 to $25 a month, and $50 to $150 for a routine exam.", source: "gargoyle-gecko-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years, some breeding well past 20.", source: "gargoyle-gecko-cost-guide" },
        { label: "Adult size", value: "7 to 9 inches (18 to 23 cm) including tail." },
        { label: "Hygiene", value: "Wash hands with soap after any contact, keep the gecko out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "gargoyle-gecko-health-issues-guide",
      callNow: [
        "Any kinked tail, soft jaw, or tremor (possible MBD)",
        "Open-mouth breathing or mucus (possible respiratory infection)",
        "A tail that stays deformed despite adding hides (possible FTS)",
        "Any sign of parasites or impaction",
      ],
      vetLine: "Retained shed wraps a toe like a tourniquet until it dies, so a stuck band is a same-day soak. New geckos are quarantined and given a fecal exam before joining a collection.",
    },
    routes: [
      { slug: "gargoyle-gecko-cost-guide", line: "$50 to $300 for a common animal and past $1,000 for a morph, the $230 to $445 of gear, and what a 15-to-20-year lifespan costs." },
      { slug: "gargoyle-gecko-tank-setup-guide", line: "The gradient this species needs, the 86°F ceiling it cannot cross, the daily wet-dry humidity cycle, and the clutter that prevents floppy tail syndrome." },
      { slug: "gargoyle-gecko-feeding-guide", line: "Powdered diet versus live insects, the schedule by age, where the sources genuinely disagree, and how to read appetite loss." },
      { slug: "gargoyle-gecko-handling-guide", line: "Two weeks before the first session, the two defense mechanisms, the bite that breaks skin, and the tail that grows back." },
      { slug: "gargoyle-gecko-health-issues-guide", line: "Metabolic bone disease, floppy tail syndrome, respiratory infection, parasites, and the vet-today list." },
      { slug: "gargoyle-gecko-enrichment-guide", line: "No gargoyle study exists, so this is the crested and leopard gecko evidence, labeled as borrowed, on height, novelty and feeding." },
    ],
    buyList: [
      "18x18x24 inch arboreal terrarium (24x24x24 preferred)",
      "Low-wattage basking bulb or ceramic heat emitter",
      "Thermostat",
      "Digital thermometer and hygrometer",
      "Low-output T5 UVB and hood",
      "Coconut fiber, bioactive soil mix, or paper towel",
      "Branches, vines, and cork bark, generously",
      "Fine mist spray bottle",
      "Shallow water dish and a feeding ledge",
      "Powdered crested gecko diet, three or more flavors",
      "Gut-loaded feeder insects and calcium without D3",
      "A gram scale",
    ],
    faqs: [
      { q: "Can a gargoyle gecko regrow its tail, unlike a crested gecko?", a: "Yes, and this is one of the biggest differences between the two species. Gargoyle geckos regenerate a dropped tail, confirmed by peer-reviewed genome research, while crested geckos cannot. The regrown tail is prehensile and cartilage-based rather than bone, with somewhat asymmetrical scales, but it's fully functional." },
      { q: "Do gargoyle geckos need live insects, or is powder enough?", a: "Unlike crested geckos, insects are described as a required supplement here, not optional enrichment. Gargoyle geckos are unusually carnivorous for their gecko family, wild individuals are documented preying on other lizards, even young crested geckos, alongside insects." },
      { q: "Why does a gargoyle gecko setup need so much clutter?", a: "Because gargoyle geckos climb glass poorly compared to crested geckos and need grippable branches instead, and because heavy clutter helps prevent floppy tail syndrome, a condition linked to sleeping flat against bare glass. Sparse decor is the wrong instinct for this species." },
    ],
  },
  {
    id: "leaf-tailed-gecko",
    name: "Leaf-Tailed Gecko",
    emoji: "\u{1F98E}",
    difficulty: "Advanced",
    petType: "Geckos",
    image: "/assets/guides/leaf-tailed-gecko.jpg",
    tagline: "Nature's ultimate camouflage artist, hiding in plain sight!",
    seoTitle: "Leaf-Tailed Gecko Care Guide: Setup, Humidity, and Health",
    seoDescription: "Leaf-tailed geckos punish shortcuts: why captive-bred matters, a cool tank with no basking spot, humidity and a drying cycle, and dehydration, the fast killer.",
    funFact: "Satanic leaf-tailed geckos (Uroplatus phantasticus) look exactly like dead, decaying leaves, right down to the 'bite marks' and brown patches on their edges!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Salmonella, quarantine and the emergency plan cite
    // the shared reptile guides in the sidebar's Health and More list.
    // Rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    // Reconciled 2026-09-15 after the leaf-tailed gecko
    // set test (docs/READER_REVIEWS.md).
    //
    // The reader graded the old hub C+ and said the plainest version of what
    // a mismatched hub costs: "If the landing page tells me 24x24x36 and 80 to
    // 100% while the setup article says 18x18x24 and 60 to 80%, I stop
    // trusting whichever one I read second." Retired rather than moved: "A
    // minimum of 24x24x36 for smaller species" against a setup guide and a
    // cost guide that both say 18x18x24 for the satanic leaf-tailed gecko;
    // "Humidity must stay at 80 to 100%" against 60 to 80% for most species,
    // with the hub's own checklist giving a third figure of 70 to 90%; "65 to
    // 75 degrees F during the day, dropping to 60 to 68 at night" against 68
    // to 75 with a drop to 64 to 68; an FAQ calling for "strong UVB" where the
    // setup guide says to avoid high-output basking-style UVB entirely and the
    // hub's own checklist said low-output, so it contradicted itself inside one
    // page; a lifespan of 5 to 10 years against the cost guide's 5 to 15; and
    // a setup table running about $335 to $815 against a stated $300 to $600.
    // The hub's diet section was the only feeding content in the set, so a
    // sourced Diet Basics section went into the tank setup guide instead, the
    // standing move for a species with no feeding guide.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Buy captive-bred", value: "Wild-caught animals consistently live shorter lives, and the genus is often wild-caught with the health problems that brings.", source: "leaf-tailed-gecko-cost-guide" },
        { label: "Quarantine", value: "3 to 6 months for a new reptile, on plain paper towel with dedicated tools, serviced last. For a wild-caught gecko, wait 1 to 2 months before parasite treatment so a stressed animal is not treated too soon.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "12x12x18 inches for the smaller species, 18x18x18 better; the satanic leaf-tail does well in 18x18x24 as an adult, and Henkel's needs much more. Height over floor.", source: "leaf-tailed-gecko-tank-setup-guide" },
        { label: "Temperature", value: "Ambient 75 to 79F, nights 64 to 72F. No basking heat: thin-skinned, easily dehydrated, and heat stress is the danger, the opposite priority from most reptiles.", source: "leaf-tailed-gecko-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80% for most species, and 90 to 100% overnight for the satanic leaf-tail, from morning and evening misting, live plants, and moisture-holding substrate.", source: "leaf-tailed-gecko-tank-setup-guide" },
        { label: "The drying cycle", value: "High humidity with drying periods between mistings. Constant saturation is as bad as constant dryness, and a misting system is one of the few pieces of gear that changes outcomes for this genus.", source: "leaf-tailed-gecko-enrichment-guide" },
        { label: "Lighting and water", value: "Low-output UVB for a UVI of 0.6 to 1.4 at the top branch, about 13 hours of light in summer and 11 in winter, never basking-strength. Tap water, not distilled, for misting and drinking, for the minerals.", source: "leaf-tailed-gecko-tank-setup-guide" },
        { label: "Cover, and the test for it", value: "Vertical cork, branches of varied diameter, and dense planting in layers. If you can always find the gecko instantly, it is too sparse.", source: "leaf-tailed-gecko-enrichment-guide" },
        { label: "Feeding", value: "Juveniles daily, adults every other day, as much as it takes in one night: dubia, discoid and red runner roaches, crickets, hornworms, silkworms, snails, sized to the species. Feeders lightly dusted with calcium at every other feeding.", source: "leaf-tailed-gecko-tank-setup-guide" },
        { label: "Uneaten prey", value: "Food goes in as the gecko becomes active at night, and anything still loose next day comes out. Insects wandering the cage disturb a resting gecko and can injure a freshly shed one.", source: "leaf-tailed-gecko-tank-setup-guide" },
        { label: "Feed at height", value: "A magnetic ledge mounted high, or live prey released at night, since an arboreal ambush hunter will not descend to a floor dish.", source: "leaf-tailed-gecko-enrichment-guide" },
        { label: "Leave them alone", value: "Highly strung and easily stressed. Low traffic, low disturbance, and minimal handling do more than anything you can add. The satanic leaf-tail never regrows a dropped tail.", source: "leaf-tailed-gecko-handling-guide" },
        { label: "Adult size", value: "2.5 to 12 inches (6 to 30 cm) depending on species." },
        { label: "Budget", value: "$250 to $800 or more for the gecko, priced by species and locality. Roughly $300 to $600 for the setup, then $20 to $40 a month. A routine exam runs $60 to $135.", source: "leaf-tailed-gecko-cost-guide" },
        { label: "Lifespan", value: "5 to 15 years in captivity.", source: "leaf-tailed-gecko-cost-guide" },
        { label: "Salmonella", value: "Never clean the enclosure or its equipment in a kitchen sink or a shared bathtub, and children under 5 do not touch reptiles or their environments.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "A healthy adult tolerates a few hours to one cool night. A day or two below the normal night low is when cold stress and respiratory infection become real.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "leaf-tailed-gecko-health-issues-guide",
      callNow: [
        "Sunken or dull eyes, wrinkled or loose-looking skin, lethargy, difficulty shedding properly, and appetite loss",
        "Limb weakness or tremors, a soft \"rubber jaw,\" bone deformities, and fractures that can occur from even gentle handling",
        "Wheezing or clicking sounds, open-mouth breathing, mucus, and lethargy",
        "Weight loss, diarrhea, regurgitation, and lethargy",
        "Swelling, redness, discharge, or a foul odor at the site where a tail dropped",
      ],
      vetLine: "Dehydration is the fastest-moving danger here, manageable at home if caught early by raising humidity immediately. MBD can worsen rapidly once it starts and respiratory infection needs prescription antibiotics, so both are vet-now rather than wait-and-see. A dropped tail is usually managed at home by minimizing handling, with a vet only if the site looks infected.",
    },
    routes: [
      { slug: "leaf-tailed-gecko-cost-guide", line: "$250 to $800 by species and locality, $300 to $600 for the enclosure, and why wild-caught is the expensive option." },
      { slug: "leaf-tailed-gecko-tank-setup-guide", line: "18x18x24 for the smallest species, a cool enclosure with no basking spot, the humidity that defines this genus, and tap water over distilled." },
      { slug: "leaf-tailed-gecko-feeding-guide", line: "As much as it eats in a night, daily young and every other day adult, insects sized to the species, dusted lightly, and the mist as the water supply." },
      { slug: "leaf-tailed-gecko-handling-guide", line: "Stress signals worth recognizing, and the species whose tail never grows back." },
      { slug: "leaf-tailed-gecko-health-issues-guide", line: "Dehydration as the fast killer, plus MBD, respiratory infection, and why you wait before deworming an import." },
      { slug: "leaf-tailed-gecko-enrichment-guide", line: "No Uroplatus research at all, said plainly, and one usable test for whether the enclosure is dense enough." },
    ],
    buyList: [
      "18x18x24in vertical terrarium for a satanic leaf-tailed gecko, more for the larger species",
      "Automated misting system",
      "Low-output UVB for a UVI of 0.6 to 1.4, never a basking-style bulb",
      "Vertical cork slabs and branches of varied diameter",
      "Dense live planting, layered rather than in one plane",
      "Moisture-retentive substrate",
      "Digital hygrometer and thermometer combo",
      "Magnetic feeding ledge, mounted high",
      "All-in-one calcium and vitamin powder",
      "Crickets, dubia roaches or isopods, sized to the eye gap",
    ],
    faqs: [
      { q: "How humid should a leaf-tailed gecko enclosure be?", a: "60 to 80% for most species. The satanic leaf-tailed gecko is the exception, needing 90 to 100% overnight, and it dehydrates fast without it." },
      { q: "What temperature does a leaf-tailed gecko need?", a: "Ambient 75 to 79F, dropping to 64 to 72F at night. No basking spot: heat is generally unnecessary here and can be dangerous, the reverse of most reptile setups." },
      { q: "Do they need a misting system?", a: "For most keepers it is the practical answer. Uroplatus need high humidity with proper drying cycles between mistings, and hand spraying several times a day is difficult to sustain. Automated misting is one of the few pieces of equipment that changes outcomes for this genus." },
    ],
  },
  {
    id: "leopard-gecko",
    name: "Leopard Gecko",
    emoji: "🦎",
    difficulty: "Beginner",
    petType: "Geckos",
    image: "/assets/guides/leopard-gecko.jpg",
    tagline: "The smiling gecko that's perfect for first-time reptile parents!",
    seoTitle: "Leopard Gecko Care Guide: Setup, Feeding, and Health",
    seoDescription: "Start a leopard gecko right: the 36x18x18 tank that replaced the 20-gallon standard, three hides, belly heat on a thermostat, feeding by age, and vet signs.",
    funFact: "Unlike most geckos, leopard geckos have eyelids and can blink and wink at you! They also store fat in their chunky tails for energy reserves.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Lifespan and adult size come from the
    // encyclopedia entry, which no deep dive repeats. Day one, hygiene, and
    // power outage cite the shared reptile guides in the sidebar's Health
    // and More list. Reconciled 2026-09-08 after the leopard gecko set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "A new gecko is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "36x18x18 inches is the adult minimum, well past the old 20-gallon-long standard. A hatchling can start in a 10-gallon. Floor space counts for more than height.", source: "leopard-gecko-tank-setup-guide" },
        { label: "Heat", value: "A heat mat under the warm hide, always on a thermostat, with the probe inside the warm hide and the mat's surface checked with an infrared gun. Skip overhead heat lamps as the primary source.", source: "leopard-gecko-temperature-guide" },
        { label: "Temperatures", value: "Warm hide floor 88 to 92°F, warm side air 80 to 84°F, cool side 70 to 77°F. Nights in the 70s, with 65°F the floor.", source: "leopard-gecko-temperature-guide" },
        { label: "Hides", value: "Three, not one: a warm dry hide, a cool dry hide, and a humid hide lined with damp substrate on the cool or middle side.", source: "leopard-gecko-tank-setup-guide" },
        { label: "Humidity", value: "30 to 40% in the enclosure, 70 to 80% inside the humid hide only. Raising the whole enclosure to hit that number is a respiratory infection risk.", source: "leopard-gecko-tank-setup-guide" },
        { label: "UVB", value: "Optional but worth doing, kept low: a UVI of 0.6 to 1.4 at the basking spot for normally pigmented geckos, 0.5 to 0.7 or lower for albino and other pale morphs.", source: "leopard-gecko-tank-setup-guide" },
        { label: "Floor", value: "Paper towel or tile. Never calcium sand.", source: "leopard-gecko-tank-setup-guide" },
        { label: "Feeding schedule", value: "Hatchlings daily, juveniles daily or every 1 to 2 days, adults every 2 to 4 days once the tail is as thick as the neck.", source: "leopard-gecko-feeding-guide" },
        { label: "Calcium", value: "Gut-load feeders for 24 to 48 hours, dust with plain calcium at most feedings for juveniles and breeding females and 2 to 3 times a week for adults, calcium with D3 a couple of times a week if there is no UVB, a multivitamin about once a week.", source: "leopard-gecko-feeding-guide" },
        { label: "Not eating", value: "A healthy adult with a plump tail can go a couple of weeks. A visibly thinning tail is the signal to stop waiting and see a reptile vet.", source: "leopard-gecko-feeding-guide" },
        { label: "Handling", value: "Wait one to two weeks, and until it eats normally and stops fleeing. Then 5-minute sessions every other day, building to 10 to 20 minutes. Never by the tail, never during a shed.", source: "leopard-gecko-handling-guide" },
        { label: "Budget", value: "$250 to $400 to set up, $20 to $50 a month. An annual wellness exam runs $85 to $105; sick visits $100 to $800 or more.", source: "leopard-gecko-cost-guide" },
        { label: "Adult size", value: "6 to 9 inches; males 60 to 90 grams, females as light as 45.", source: "leopard-gecko-handling-guide" },
        { label: "Lifespan", value: "10 to 20 years with proper care, some reaching 25 to 30.", source: "leopard-gecko-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the gecko out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "70°F is the normal night low. Below 65°F, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "leopard-gecko-health-issues-guide",
      callNow: [
        "A thinning \"stick\" tail combined with weight loss",
        "Jaw softness or visible deformity",
        "Tremors",
        "Any breathing difficulty",
        "Drooling or pus around the mouth",
        "Appetite loss that persists more than a few days",
        "Prolapse",
        "Retained shed that's swollen, darkened, or won't clear from the eyes or toes",
      ],
      vetLine: "A reptile-experienced vet, found before you need one. Treat a tail thinning to a stick as cryptosporidiosis until a fecal PCR says otherwise: one clear test doesn't fully rule it out, and there is no cure.",
    },
    routes: [
      { slug: "leopard-gecko-cost-guide", line: "$20 to $45 for the gecko, $250 to $400 for the setup, $20 to $50 a month, and what a sick visit really costs." },
      { slug: "leopard-gecko-tank-setup-guide", line: "The 36x18x18 minimum, belly heat on a thermostat, the three-hide system, and the humid hide that prevents most shedding problems." },
      { slug: "leopard-gecko-temperature-guide", line: "Every zone's target, mat versus overhead, the thermostat rule, night temperatures, and the signs the numbers are wrong." },
      { slug: "leopard-gecko-feeding-guide", line: "How often by age, what they eat, the safe treats and the foods to avoid, and the reasons one refuses food, from a normal shed to a vet visit." },
      { slug: "leopard-gecko-handling-guide", line: "Settling-in time, the two-handed scoop, the stress signs, and why you never grab the tail." },
      { slug: "leopard-gecko-health-issues-guide", line: "Metabolic bone disease, cryptosporidiosis, impaction, stuck shed, egg binding, prolapse, and the list that means the vet today." },
      { slug: "leopard-gecko-enrichment-guide", line: "What the research says, why the three hides come first, hunting presentation, climbing and dig options, and a priority order." },
    ],
    buyList: [
      "36x18x18 inch enclosure",
      "Under-tank heat mat and an on/off probe thermostat",
      "Three hides: warm dry, cool dry, and a humid hide",
      "Damp substrate for the humid hide (not loose sphagnum moss)",
      "Digital thermometer and hygrometer",
      "Infrared temp gun for the mat's surface",
      "Paper towel or tile for the floor",
      "Shallow water dish and a small calcium dish",
      "Feeding tongs",
      "Plain calcium, calcium with D3, and a multivitamin",
      "Feeder insects: dubia roaches, crickets, black soldier fly larvae",
      "Optional low-output T5 UVB",
    ],
    faqs: [
      { q: "What's the one setup detail people get wrong most often?", a: "Humidity. Keep the general enclosure at 30 to 40%, but separately provide a dedicated humid hide at 70 to 80% humidity. Raising humidity across the whole enclosure to hit that number instead just creates a respiratory infection risk." },
      { q: "Why has my leopard gecko stopped eating?", a: "Most of the time it's normal: a shed cycle, brumation in cooler months, a recent move, or just a temperature that's a little too low for proper digestion. Check the warm side of the enclosure first, that's the single most common fixable cause. It only becomes a concern if it's paired with visible weight loss, a thinning tail, lethargy, or it drags on for weeks with no improvement." },
      { q: "What is stick tail disease in leopard geckos?", a: "It's the common name for cryptosporidiosis, a severe and highly contagious parasite with no cure. Around half of captive leopard geckos may carry it, and it causes the tail to thin out to a stick shape along with emaciation and appetite loss. Symptomatic cases have a mortality rate around 50%." },
    ],
  },
  {
    id: "mourning-gecko",
    name: "Mourning Gecko",
    emoji: "🦎",
    difficulty: "Beginner/Intermediate",
    petType: "Geckos",
    image: "/assets/guides/mourning-gecko.jpg",
    tagline: "Tiny, all-female, and happiest as a whole chattering colony!",
    seoTitle: "Mourning Gecko Care Guide: Setup, Feeding, and Colonies",
    seoDescription: "Mourning geckos live in all-female colonies, so start a group: a 12x18x18 tank for three to five, escape-proofing, powdered diet, and the calcium they burn.",
    funFact: "Mourning geckos are parthenogenetic. Every individual is female, and they can reproduce without males by cloning themselves!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine and shedding cite the shared reptile
    // guides in the sidebar's Health and More list. Reconciled 2026-09-15
    // after the mourning gecko set test (docs/READER_REVIEWS.md), rewritten to
    // the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The old hub was a full care sheet at lower resolution than the pages
    // under it, and the reader found six things wrong with it. Five were
    // numbers, all gone rather than moved: the enclosure (18x18x24 for a
    // colony of 3 to 5, against the setup guide's 12x18x18 for that group
    // and 18x18x24 for a bigger one), prey size (the space between the
    // eyes, against the feeding guide's width of the head), calcium dusting
    // (with D3 2 to 3 times a week, against dusting at most feedings),
    // adult size (3 to 4 inches, against the handling guide's and
    // ReptiFiles' 3.5 to 4), and a CGD schedule of every 2 to 3 days that
    // no article carried. The sixth was not a number: the FAQ written to
    // clear up the house gecko confusion named the wrong genus,
    // "Lygodactylus lugubris", in a set where every other page has
    // Lepidodactylus. Two more the reader caught went with the old
    // sections: hatchling geckos called "nymphs", which is an insect word,
    // and a garbled sentence beginning "Monitor colony reproductive rate in
    // optimal conditions".
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "Quarantined away from any reptile you already keep, on paper towel, with its own tools and a fecal exam inside that window.", source: "reptile-quarantine-guide" },
        { label: "Buy more than one", value: "Parthenogenetic, all female, and colonial, so the social question is settled and group size is an enrichment decision. A lone gecko survives fine and still lays viable eggs.", source: "mourning-gecko-enrichment-guide" },
        { label: "Enclosure", value: "A 12x18x18 inch tall, front-opening enclosure for a group of three to five; an 18x18x24 houses the bigger group the colony will become. Height over floor. Adults may eat hatchlings, so separate young as they appear.", source: "mourning-gecko-tank-setup-guide" },
        { label: "Escape-proofing", value: "Hatchlings are under an inch and slip through ventilation gaps and door frames that hold any other gecko. Seal every gap with aquarium-safe putty before the geckos go in.", source: "mourning-gecko-tank-setup-guide" },
        { label: "Temperature", value: "70 to 80°F by day with a basking spot up to 85°F, 65 to 72°F at night. Most homes need no heat source at all.", source: "mourning-gecko-tank-setup-guide" },
        { label: "Humidity and substrate", value: "60 to 80% with brief peaks to 90% from daily misting, then a slight dry-down against mold. Coconut coir or a coir and sphagnum blend, moist but never waterlogged.", source: "mourning-gecko-tank-setup-guide" },
        { label: "UVB", value: "A 5 to 6% low-output tube is strongly recommended, given how often females lay and the calcium that costs. A 12-hour cycle.", source: "mourning-gecko-tank-setup-guide" },
        { label: "Fill the height", value: "Live planting gives usable surface, cover so animals can avoid each other, and humidity at once. Empty height is wasted height.", source: "mourning-gecko-enrichment-guide" },
        { label: "Staple food", value: "A powdered crested gecko diet at 2 to 3 parts water to 1 part powder, fresh every 48 hours, in a cup mounted on a wall rather than the floor.", source: "mourning-gecko-feeding-guide" },
        { label: "Insects", value: "Once or twice a week: pinhead crickets, fruit flies for hatchlings, newborn dubia or discoid nymphs, small mealworms in moderation, nothing wider than the head.", source: "mourning-gecko-feeding-guide" },
        { label: "Calcium", value: "Dusted at most insect feedings, even on fruit flies, with a multivitamin swapped in about weekly, plus an open dish of calcium in the enclosure.", source: "mourning-gecko-feeding-guide" },
        { label: "Why calcium never lets up", value: "A clutch of two eggs roughly every 4 to 6 weeks, with no male needed. Not a breeding event but a constant drain.", source: "mourning-gecko-health-issues-guide" },
        { label: "Feed in more than one place", value: "Shallow dishes at several heights, since a dominant female may guard a single dish.", source: "mourning-gecko-enrichment-guide" },
        { label: "Do not handle", value: "Adults are 3.5 to 4 inches and hatchlings under an inch, and a small drop can be fatal at that scale. Let one walk onto your hand, low and slow. Firing between brown and light tan is normal, not stress.", source: "mourning-gecko-handling-guide" },
        { label: "Shedding", value: "It comes off in pieces rather than one sock. A band left around a toe or tail tip needs humidity raised and a moist hide.", source: "reptile-shedding-complete-guide" },
        { label: "Budget", value: "$15 to $50 each, a trio around $60. Setup roughly $200 to $450, upkeep $10 to $25 a month, and a routine exam $35 to $105.", source: "mourning-gecko-cost-guide" },
        { label: "Adult size", value: "3.5 to 4 inches (8.5 to 10 cm)." },
        { label: "Lifespan", value: "Up to 10 years, some reports of 15.", source: "mourning-gecko-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "mourning-gecko-health-issues-guide",
      callNow: [
        "A kinked or wavy tail, depleted calcium sacs (the two white ovals under the throat), curved limbs, appetite loss, loss of coordination, and in severe cases seizures (metabolic bone disease). Early cases are often manageable with corrected UVB and calcium; advanced deformities are permanent and warrant a vet",
        "A female that cannot pass her eggs (egg-binding, or dystocia): a swollen abdomen with straining, weakness, one egg passed and not the second, or discharge from the vent. A genuine emergency, not something to wait out at home; in lizards dystocia can progress to death quickly",
        "Shed that doesn't come off cleanly and constricts around the toes or tail tip. Generally manageable at home by raising humidity and providing a moist hide, but see a vet if tissue looks like it's dying or the constriction won't release",
        "Redness, swelling, or a cottage-cheese-like discharge around the mouth (mouth rot). Needs a vet",
        "Weight loss and poor appetite despite normal feeding (parasites), diagnosed through a fecal exam. Needs a vet",
        "A visibly thin tail combined with weight loss, which usually points to an underlying issue, whether that's parasites, disease, or simply insufficient feeding for a colony that's grown larger than you originally planned for",
      ],
      vetLine: "Skipping UVB or calcium and D3 supplementation doesn't just risk MBD in the abstract, it directly raises egg-binding risk in a species that's laying eggs constantly regardless of whether you're trying to breed it. Given how small a mourning gecko is, a thermometer and hygrometer that's actually accurate matters more than usual for catching drift before it becomes a health problem.",
    },
    routes: [
      { slug: "mourning-gecko-cost-guide", line: "$15 to $50 a gecko and cheaper by the trio, the $200 to $450 planted setup, and why the Type A to D labels on listings are not morphs." },
      { slug: "mourning-gecko-tank-setup-guide", line: "The 12x18x18 that holds a small group, the escape-proofing step that matters more than anything else here, humidity that peaks and dries back, and low-output UVB." },
      { slug: "mourning-gecko-feeding-guide", line: "Powdered diet every 48 hours and dusted insects weekly, the calcium demand that never pauses, and seven reasons a mourning gecko stops eating." },
      { slug: "mourning-gecko-handling-guide", line: "Why an animal this size is a display pet, what tail loss actually is, and why easy care and handleable are not the same claim." },
      { slug: "mourning-gecko-health-issues-guide", line: "Metabolic bone disease and the egg-binding it leads to, the two-egg clutch every 4 to 6 weeks behind both, retained shed, and what a thin tail means." },
      { slug: "mourning-gecko-enrichment-guide", line: "The one gecko where group housing is the starting point, the tokay study that supports it at a distance, and why empty height is wasted height." },
    ],
    buyList: [
      "12x18x18 inch tall, front-opening enclosure for a small group",
      "An 18x18x24 for the colony it becomes",
      "Aquarium-safe putty for every gap",
      "Tight-fitting escape-proof lid",
      "Low-output UVB in the 5 to 6% range",
      "Coconut coir, or coir and sphagnum moss",
      "Live plants, cork bark and branches",
      "Fine mist spray bottle or a misting system, the main water source",
      "Optional: a bottle-cap-shallow water dish",
      "Hygrometer and thermometer",
      "Powdered crested gecko diet",
      "Shallow feeding dishes for several heights",
      "Small ventilated plastic cups and 32 oz deli cups, for eggs and hatchlings",
      "Fruit fly culture or pinhead crickets",
      "Calcium powder, for dusting and for an open dish",
      "A multivitamin for the weekly rotation",
      "Two or more geckos",
    ],
    faqs: [
      { q: "Can you handle a mourning gecko?", a: "Not realistically. Adults measure just 3.5 to 4 inches total, hatchlings are under an inch, and a small drop that wouldn't concern you with almost any other pet can be fatal at this scale. It's best kept as a display and observation pet." },
      { q: "Why does a single pet mourning gecko still need consistent calcium?", a: "Because every mourning gecko is female and reproduces by parthenogenesis, a lone pet with no companion at all still lays a pair of eggs roughly every 4 to 6 weeks, year-round. Egg production never pauses, so calcium demand is constant rather than seasonal, even for an unbred gecko." },
      { q: "What's the single most important setup detail for a mourning gecko?", a: "Escape-proofing. Hatchling mourning geckos are small enough to slip through ventilation gaps and door frames that would contain nearly any other gecko species. Seal every gap you can find with aquarium-safe putty or a similar barrier before adding any mourning geckos to a new enclosure." },
    ],
  },
  {
    id: "tokay-gecko",
    name: "Tokay Gecko",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Geckos",
    image: "/assets/guides/tokay-gecko.jpg",
    tagline: "The jewel-toned, loud-voiced gecko that's not for the faint of heart!",
    seoTitle: "Tokay Gecko Care Guide: Setup, Bites, and Feeding",
    seoDescription: "Tokay gecko care starts with the bite: reading one before it strikes, the 18x18x36 tank, heat and humidity, feeding by age, and why the cheap one costs more.",
    funFact: "Tokay geckos are named after their incredibly loud 'TO-KAY!' call. Males use this booming vocalization to defend territory and attract mates. You'll hear them from across a room!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Gut-loading, hygiene and the stool
    // check cite the shared reptile guides in the sidebar's Health and More
    // list. Rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md): the enclosure row says one per enclosure
    // unless deliberately pairing, and the night floor is the setup guide's
    // 75 to 80F with the "not below 70" dropped. This species has no feeding
    // guide, so the diet rows point at the tank setup guide's Diet Basics
    // section, added in the same pass. Built 2026-09-14 for the tokay gecko set
    // test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal check", value: "No permit needed in 48 of 52 US jurisdictions. Hawaii allows it for research and exhibition only, the District of Columbia bars it by omission, West Virginia asks for an importation permit, Minnesota treats lizards as protected wild animals.", source: "tokay-gecko-legal-guide" },
        { label: "Quarantine", value: "3 to 6 months for a new reptile, the longer window for a wild-caught animal, in its own room, with a fecal exam early and a repeat before it ends, and a weekly weight.", source: "tokay-gecko-health-issues-guide" },
        { label: "Enclosure", value: "18x18x36 inches tall at least, 24x24x48 the target, front-opening for a defensive species, with branches, cork, and foliage spanning the full height. One per enclosure unless deliberately pairing.", source: "tokay-gecko-tank-setup-guide" },
        { label: "Temperature", value: "Basking 90 to 105F, cooler zone 80 to 85F, and nights at 75 to 80F, warmer than many homes run, from a ceramic emitter or deep heat projector on a thermostat. This species needs night heat more than most.", source: "tokay-gecko-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80%, from daily misting, 2 to 3 inches of coconut fiber under moss and leaf litter, and airflow so it does not mold. No pine or cedar.", source: "tokay-gecko-tank-setup-guide" },
        { label: "Lighting", value: "Survivable without UVB on a D3-supplemented diet, but a 5% forest-strength T5 has real benefit, replaced every 6 to 12 months. Nights genuinely dark.", source: "tokay-gecko-tank-setup-guide" },
        { label: "Diet", value: "Gut-loaded crickets, dubia, and similar, nothing wider than the head, dusted with calcium and D3. Juveniles daily, adults every other day, with dechlorinated water in a shallow dish. A tokay will not take powdered fruit diet.", source: "tokay-gecko-tank-setup-guide" },
        { label: "Gut-loading", value: "24 to 72 hours, 48 the most cited, and fed out within a few hours of coming off the gut-load, since insects void their gut once removed from food.", source: "gut-loading-feeder-insects-guide" },
        { label: "Handling", value: "A tokay that barks, gapes, or bites gets no sessions: this is a hands-off terrarium subject. One that tolerates a flat hand gets a few minutes sitting unrestrained on it.", source: "tokay-gecko-handling-guide" },
        { label: "If it bites", value: "Do not pull; tugging tightens the grip. Set it down with all four feet on a surface near a retreat and wait. Never lift by the tail, which detaches and regrows in about 30 days.", source: "tokay-gecko-handling-guide" },
        { label: "Two males", value: "Never. They fight, often with serious or fatal results.", source: "tokay-gecko-handling-guide" },
        { label: "Pair housing", value: "A 2024 study found pair housing improved welfare in captive-bred tokays. One study, and pairing needs quarantine, careful introduction, space and cover for both, and a plan for separating them. Do not pair casually.", source: "tokay-gecko-enrichment-guide" },
        { label: "Parasites", value: "A 2025 study of 21 farmed tokays found intestinal parasites in 42.9% of them, a small sample. A gecko carries a load for months before it shows, so an annual exam with fecal testing.", source: "tokay-gecko-health-issues-guide" },
        { label: "Budget", value: "$15 to $50 for a wild-caught tokay, which is not the budget option once parasite treatment and a harder animal are counted. Captive-bred normals $100 to $150, morphs $150 to $400. Setup $300 to $500, then $15 to $30 a month, and $50 to $100 for a routine exam.", source: "tokay-gecko-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years, documented past 20.", source: "tokay-gecko-cost-guide" },
        { label: "Adult size", value: "10 to 15 inches (25 to 38 cm)." },
        { label: "Daily stool check", value: "Yellow, orange, or gritty urates instead of smooth white point to dehydration. A free, five-second check.", source: "reptile-stool-urates-hydration-guide" },
        { label: "Hygiene", value: "Wash hands with soap after any contact, never clean the enclosure in a kitchen sink or shared bathtub, and children under 5 do not touch reptiles or their environments.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "tokay-gecko-health-issues-guide",
      callNow: [
        "Tissue protruding from the vent: always an emergency, and never pushed back yourself",
        "Nasal discharge or any change in breathing",
        "Any injury or trauma, or swelling and color change in the skin",
        "Ulcers or excessive discharge in the mouth",
        "Limping or difficulty moving",
        "Loss of appetite or unusual inactivity that outlasts a settling-in period",
        "Weight loss on the weekly scale",
        "Loose or abnormal droppings, eye discharge or swelling, or retained shed",
      ],
      vetLine: "Any of these means a call, not a wait. Retained shed alone is a humidity boost and a fine mist at home.",
    },
    routes: [
      { slug: "tokay-gecko-cost-guide", line: "$15 to $400 for the gecko depending on where it came from, a $300 to $500 setup, and why the cheap one is not the budget option." },
      { slug: "tokay-gecko-tank-setup-guide", line: "18x18x36 minimum, a 90 to 105F basking zone, 60 to 80% humidity, night heat, and what this insectivore eats." },
      { slug: "tokay-gecko-handling-guide", line: "The two kinds of bite, reading a tokay before it bites, what to do when it has hold of you, and session length by tameness." },
      { slug: "tokay-gecko-feeding-guide", line: "Five minutes of insects no wider than the head, daily young and every other day adult, gut-loaded 24 to 72 hours, mice twice a month at most." },
      { slug: "tokay-gecko-health-issues-guide", line: "MBD, respiratory infection, retained shed, parasites, prolapse, the wild-caught quarantine, and the vet-call list." },
      { slug: "tokay-gecko-enrichment-guide", line: "The 2024 pair-housing study, usable vertical structure, retreats at every level, and the priority order." },
      { slug: "tokay-gecko-legal-guide", line: "Legal in 48 of 52 jurisdictions, the four that are not, and why New Jersey exempts this gecko specifically." },
    ],
    buyList: [
      "Vertical arboreal enclosure, 18x18x36 inches or larger, front-opening",
      "Halogen basking bulb",
      "Ceramic heat emitter or deep heat projector for night heat",
      "Thermostat",
      "Low-output UVB, a 5% or forest-strength T5 bulb",
      "Coconut fiber or bioactive substrate, enough for 2 to 3 inches",
      "Sphagnum moss and leaf litter",
      "Cork bark, branches, and foliage spanning the full height",
      "Digital thermometer and hygrometer",
      "Fine mist spray bottle or an automatic mister",
      "Shallow water dish",
      "Gut-loaded crickets or dubia roaches",
      "Calcium with D3 and a reptile multivitamin",
      "Gram scale",
      "Reptile vet contact",
    ],
    faqs: [
      { q: "What temperatures does a tokay gecko need?", a: "A basking area of 90 to 105F, a cooler zone of 80 to 85F, and nighttime temperatures staying warmer than many homes naturally run, 75 to 80F, not dropping below about 70F." },
      { q: "Does buying a captive-bred tokay gecko make it easier to handle?", a: "It helps, and meaningfully. A captive-bred tokay runs calmer and more tolerant than a wild-caught one, though most keep a real baseline of defensiveness. Even a settled individual is a display animal, not a handling pet." },
      { q: "Are tokay geckos legal in the US?", a: "In 48 of 52 jurisdictions, with no permit. Only Hawaii and the District of Columbia bar them, West Virginia asks for an importation permit, and Minnesota attaches conditions that apply to every lizard rather than to this species specifically." },
    ],
  },
];
