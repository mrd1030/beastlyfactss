export const invertebrateGuides = [
  {
    id: "amano-shrimp",
    name: "Amano Shrimp",
    emoji: "🦐",
    difficulty: "Beginner/Intermediate",
    petType: "Invertebrates",
    image: "/assets/guides/amano-shrimp.jpg",
    tagline: "The champion algae eater that clears a tank and never overruns it!",
    seoTitle: "Amano Shrimp Care Guide: Tank, Water, and Feeding",
    seoDescription: "Amano shrimp care built around the molt: the 10-gallon tank floor, the hardness a new shell needs, copper to keep out, and which algae they actually eat.",
    funFact: "Amano shrimp can't reproduce in a home freshwater aquarium at all. Females carry eggs and release free-swimming larvae just fine, but those larvae need brackish to full-strength salt water to survive past their first few hours of life, then must be raised through several weeks of saltwater development before metamorphosing into juveniles that can return to fresh water. Because of this, almost every Amano shrimp sold in stores today is wild-caught, not captive-bred.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. No row cites the shared aquarium guides; they sit in
    // the sidebar's Health and More list. Reconciled 2026-09-15 after the amano
    // shrimp set test (docs/READER_REVIEWS.md), rewritten to the template shape
    // 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The old hub's prices were all above the cost guide's table and none
    // of them are moved: the tank at $45 to $90 against $18 to $30, the
    // heater at $15 to $25 against $18 to $30, the sponge filter at $10 to
    // $20 against $8 to $15, and algae wafers at $10 to $20 against $8 to
    // $12. It also gave temperature twice and differently, 65 to 82°F in
    // prose and 68 to 76°F on the checklist, where the setup guide says 64
    // to 82 tolerated with the cooler two-thirds better.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "A 10-gallon is the practical minimum. Surviving in 5 gallons is not the same as having room to forage.", source: "amano-shrimp-tank-setup-guide" },
        { label: "How many", value: "One per 2 gallons to start, five in a 10-gallon. A tank fighting an algae outbreak carries more, but more shrimp on the same algae only means it runs out sooner.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Temperature", value: "64 to 82°F tolerated, and shrimp kept in the upper 60s to mid-70s live longer, since warm water speeds metabolism. Set the heater conservatively.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 6.0 to 7.5, KH 2 to 8, and GH 4 to 15 with 6 to 8 dGH the usual target. Too little hardness and a new shell cannot harden; too much and the old one is too rigid to break out of. A conditioner on every drop of tap water.", source: "amano-shrimp-tank-setup-guide" },
        { label: "With cherry shrimp", value: "Usually fine, with the caveat that amanos are considerably bigger and outcompete them at feeding time.", source: "amano-shrimp-enrichment-guide" },
        { label: "The lid", value: "Not optional. They climb out through a gap the width of a cord, especially in the first days, and turn up dried out in the morning.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Filter intake, not flow", value: "A sponge filter because a standard intake pulls in a freshly molted shrimp. It is an intake-safety choice, not a flow limit: this is a fast-stream animal.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Copper", value: "Shrimp blood runs on copper, which is why free copper is so disproportionately dangerous. Common copper fish medications and some fertilizers run 0.15 to 0.20 mg/L, inside the range where a 2025 study found shrimp harmed.", source: "amano-shrimp-health-issues-guide" },
        { label: "What they eat", value: "Hair algae, thread algae, and black beard algae, which most fish and snails leave. Not flat green spot algae, and not cyanobacteria.", source: "amano-shrimp-feeding-guide" },
        { label: "Algae runs out", value: "It is a starting supply, not a renewable one, and a group clears it faster than expected. Supplementing is part of the diet, not a fallback; a shrimp climbing the glass and decor searching is hungry.", source: "amano-shrimp-feeding-guide" },
        { label: "How often to feed", value: "A small amount every couple of days, leftovers out after a few hours, so they stay motivated to work the tank. In more than one spot: a single wafer becomes one shrimp's wafer.", source: "amano-shrimp-feeding-guide" },
        { label: "Drip acclimation", value: "One to two hours at one to two drops per second, three or four hours if the water gap is large. Osmotic shock is a known trigger for failed molts.", source: "amano-shrimp-handling-guide" },
        { label: "Quarantine", value: "Two to four weeks in a separate cycled tank, a bare 10 to 20 gallons. Virtually every amano sold is wild-caught, so hitchhikers and stress get time to show.", source: "amano-shrimp-handling-guide" },
        { label: "Molting", value: "A failed molt is the shell splitting all the way around the body instead of at the head, usually from GH and KH swinging around a water change or a diet short on calcium. There is no treatment once it starts.", source: "amano-shrimp-health-issues-guide" },
        { label: "Water changes", value: "Small and steady, since swings in hardness around a change trigger failed molts. Test nitrate rather than changing by the calendar.", source: "aquarium-water-changes-guide" },
        { label: "Budget", value: "$5 to $12 each, cheaper in a group. Core equipment roughly $60 to $150.", source: "amano-shrimp-cost-guide" },
        { label: "Lifespan", value: "2 to 3 years, longer at the cool end of the range.", source: "amano-shrimp-cost-guide" },
        { label: "Adult size", value: "Up to about 2 inches (5 cm); large for a dwarf shrimp." },
      ],
    },
    emergencyCard: {
      source: "amano-shrimp-health-issues-guide",
      heading: "Test the water first, then act on these today. No vet treats a shrimp; prevention is the whole plan.",
      callNow: [
        "A shell split all the way around the body instead of opening at the head: a failed molt, with no treatment once it starts",
        "A whole group dying suddenly with no warning: ask what changed in the water, a copper exposure, an ammonia or pH swing, a rushed water change",
        "Shrimp climbing the glass and decor in constant search: hunger, and the algae has run out",
      ],
      vetLine: "Check the label of any fish medication or fertilizer before it goes near the tank: the copper doses considered safe for fish sit inside the range that harms shrimp.",
    },
    routes: [
      { slug: "amano-shrimp-cost-guide", line: "$5 to $12 a shrimp with real listings behind it, the $60 to $150 setup, and why a cooler tank is the cheaper one across a shrimp's life." },
      { slug: "amano-shrimp-tank-setup-guide", line: "The 10-gallon minimum and one shrimp per 2 gallons, general hardness as a molting input, a sponge filter for intake safety rather than calm water, and the lid." },
      { slug: "amano-shrimp-feeding-guide", line: "What the best algae eater in the hobby actually eats, the flat adhered algae it can't, and why a clean tank means supplementing before they starve." },
      { slug: "amano-shrimp-handling-guide", line: "Netting instead of hands, drip acclimation over one to two hours, and the quarantine a wild-caught animal earns." },
      { slug: "amano-shrimp-health-issues-guide", line: "Failed molts and what causes them, the 2025 copper study and the doses that harm before they kill, and why eggs that never hatch are normal." },
      { slug: "amano-shrimp-enrichment-guide", line: "Grazing surface as the whole enrichment question, biofilm over bare glass, and somewhere soft to hide out a molt." },
    ],
    buyList: [
      "10-gallon or larger tank",
      "A tight-fitting lid with every gap sealed",
      "Sponge filter, or a sponge pre-filter over a stronger intake",
      "Submersible heater set toward the cooler end",
      "Water test kit, including GH and KH",
      "Water conditioner",
      "Mineral supplement if the tap water runs soft",
      "Driftwood, rocks and live plants for grazing",
      "Sinking algae wafers",
      "Blanched zucchini, spinach or cucumber",
      "Soft, fine-mesh net",
      "Airline tubing for drip acclimation",
      "A separate cycled tank for quarantine, a bare 10 to 20 gallons",
    ],
    faqs: [
      { q: "Why is my amano shrimp carrying eggs that never hatch?", a: "Because this species cannot complete its life cycle in freshwater. A female mates and carries fertilized eggs normally, and they even hatch into free-swimming larvae, but those larvae need brackish to marine water within their earliest stages to survive and develop. In a standard freshwater tank they die within days, and the whole cycle repeats with the next batch of eggs. It's completely normal, not a sign anything is wrong with your shrimp." },
      { q: "How sensitive are amano shrimp to copper?", a: "Very sensitive, and it's backed by real research, not just hobby folklore. A 2025 study in the Journal of Crustacean Biology put the acute lethal copper threshold for this species at 1.15 mg/L, but found measurable sublethal harm, including a reduced ability to detect food odors, at concentrations well below that. Common copper-based fish medications and some plant fertilizers are formulated around roughly 0.15 to 0.20 mg/L, a level considered safe for treating fish parasites but squarely inside the range where shrimp show real harm." },
      { q: "What algae are amano shrimp good at eating?", a: "Hair algae and thread algae are where they excel, and they'll take on black beard algae too, which most fish and snails leave completely alone. A well-established beard algae mat is still more than one animal can fully clear on its own." },
    ],
  },
  {
    id: "cherry-shrimp",
    name: "Cherry Shrimp",
    emoji: "\u{1F990}",
    difficulty: "Beginner",
    petType: "Invertebrates",
    image: "/assets/guides/cherry-shrimp.jpg",
    tagline: "The tiny, self-multiplying cleanup crew that turns one bag of shrimp into a colony!",
    seoTitle: "Cherry Shrimp Care Guide: Tank, Water, and Colony",
    seoDescription: "A cherry shrimp colony that thrives: a mature tank before the shrimp, the GH and KH that decide a molt, the copper limit, and why a colony mostly feeds itself.",
    funFact: "Every color of cherry shrimp in the hobby, from clear to fire-engine red to jet black, is the exact same species. Neocaridina davidi's natural wild coloring is actually a dull, camouflaged greenish-brown; decades of selective breeding by hobbyists produced the entire modern color palette, right down to the graded 'Fire Red' and 'Painted Fire Red' tiers sold today.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. No row cites the shared aquarium
    // guides; they sit in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the cherry shrimp set test (docs/READER_REVIEWS.md),
    // rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The old hub said in its own comment that its pricing was unverified, and
    // the reader graded it C+ as "where I got most of my wrong ideas." Retired
    // rather than moved: GH of "roughly 7 to 14 dGH" against the setup guide's
    // 6 to 8, which barely overlaps; pH "between 6.5 and 8.0" against 6.5 to
    // 7.5; a temperature range of "about 65 to 85 degrees F, with the high 60s
    // to high 70s being the most comfortable zone" against 60 to 82 with 72 to
    // 76 optimal; a heater trigger of "below 65F" against the setup guide's
    // high 50s; a shrimp price of "$2 to $4 for a common red shrimp" against
    // the cost guide's $4 to $5 for standard grades; every cost row, with the
    // tank at $25 to $50 against $18 to $30 and food at $12 to $25 against $8
    // to $12; a claim that "a shrimp-specific sinking pellet should still form
    // the base of a deliberate diet" on a set whose feeding guide says cherry
    // shrimp mostly feed themselves; and a checklist demanding a
    // "Calcium/mineral supplement for molting" where the feeding guide says
    // diet and stable hardness "cover most of that need without a dedicated
    // supplement."
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank size", value: "5 gallons is the practical minimum, 10 or larger for a self-sustaining colony, since volume buffers the small constant shifts a growing colony causes.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Mature, not just cycled", value: "The biofilm a shrimp grazes arrives later than the bacteria that clear ammonia, so the tank has to be mature before shrimp go in. Ammonia and nitrite read zero at all times.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Water hardness", value: "The most shrimp-specific requirement: GH at least 6 degrees (about 110 ppm) and KH at least 2 (about 40 ppm), with pH held between 6.5 and 7.5. Too soft and molts fail.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Temperature", value: "60 to 82°F, 72 to 76°F optimal, so most rooms need no heater. Add one if the room runs cooler than the high 50s or you want a stable setpoint for breeding.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Filtration", value: "A sponge filter, or a pre-filter sponge over a standard intake, which otherwise pulls in baby shrimp. Gentle flow.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Water changes", value: "About 10% a week or 20% every two weeks. Larger or more frequent changes shock shrimp even with clean, dechlorinated water.", source: "cherry-shrimp-health-issues-guide" },
        { label: "A colony, not a few", value: "Ten or more to start. A pair or trio stays hidden; a colony is active, visible and confident, grazing dense plants, moss, driftwood and leaf litter all day.", source: "cherry-shrimp-enrichment-guide" },
        { label: "Feeding", value: "Mostly grazing on biofilm, with a sinking wafer a couple of times a week on top. A pea-sized piece, or a quarter wafer, feeds 10 to 20 shrimp; if the last feeding is still there, skip the next.", source: "cherry-shrimp-feeding-guide" },
        { label: "Leave the shed shell", value: "For a day or two: the colony picks it apart for the calcium. Remove it only in a tank already fighting a parasite or bacterial problem.", source: "cherry-shrimp-feeding-guide" },
        { label: "Molt frequency", value: "Adults roughly every 3 to 4 weeks, younger shrimp more often. Hiding and stillness for a few days after a molt is the shell hardening, not illness.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Copper", value: "Shrimp tolerate almost none. A 2014 study on a related shrimp found a lethal concentration of just 0.0313 mg/L, with a safe target nearer 0.003 mg/L, and it hides in fish medications, some fertilizers, and the pesticide on store-bought plants.", source: "cherry-shrimp-health-issues-guide" },
        { label: "New plants", value: "Quarantine them in clean water for at least five days with daily water changes before they go near the shrimp tank.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Acclimation", value: "A slow drip, one drop every one to two seconds until the water volume doubles, 60 to 90 minutes. A sudden shift in pH, hardness or temperature triggers osmotic shock.", source: "cherry-shrimp-handling-guide" },
        { label: "Quarantine", value: "At least two weeks in a separate established tank before new shrimp join a colony. Some retailers hold shrimp a full 30 days before sale.", source: "cherry-shrimp-handling-guide" },
        { label: "Budget", value: "$4 to $5 a shrimp for standard grades, $6 to $8 for the deepest color. Core equipment roughly $45 to $110, and a complete first setup lands around $80 to $150. No practical vet care exists for a shrimp.", source: "cherry-shrimp-cost-guide" },
        { label: "Lifespan", value: "Up to 2 years under stable conditions, often closer to one in a typical home tank.", source: "cherry-shrimp-cost-guide" },
        { label: "Never release them", value: "A 2025 federal screening rates this species a high invasion risk across much of the US. Rehome extras through a local fish store or forum.", source: "cherry-shrimp-cost-guide" },
        { label: "Adult size", value: "Up to about 1.5 inches (4 cm)." },
      ],
    },
    emergencyCard: {
      source: "cherry-shrimp-health-issues-guide",
      heading: "Test the water first, then act on these today. No vet treats a shrimp; prevention is the whole plan.",
      callNow: [
        "A complete white band around the middle of the body instead of a clean split at the head, the white ring of death",
        "A shrimp whose body has visibly separated from its shell",
        "Stillness and hiding that lasts well beyond a few days after a molt",
        "Sudden losses across the colony with no obvious cause",
        "A shrimp that looks pale or ashy",
      ],
      vetLine: "Nearly all of it traces to water stability and mineral content. A failed molt is usually fatal once it happens, so stable GH, gradual water changes, and a test kit are the leverage.",
    },
    routes: [
      { slug: "cherry-shrimp-cost-guide", line: "$4 to $8 a shrimp by grade, $45 to $110 for the tank around them, and why you never release the extras." },
      { slug: "cherry-shrimp-tank-setup-guide", line: "5 gallons as a floor and 10 for a colony, the GH and KH that decide whether a molt works, and a filter intake that won't eat the babies." },
      { slug: "cherry-shrimp-feeding-guide", line: "Why a colony mostly feeds itself, a portion the size of a pea, and the shed shell you leave in the tank." },
      { slug: "cherry-shrimp-handling-guide", line: "Netting only, and why drip acclimation matters more for a shrimp than for any fish you have kept." },
      { slug: "cherry-shrimp-health-issues-guide", line: "The white ring of death, the copper number, and the short list behind every unexplained colony die-off." },
      { slug: "cherry-shrimp-enrichment-guide", line: "What the decapod sentience review actually concluded, and why surface area is the whole enrichment question here." },
    ],
    buyList: [
      "10-gallon tank for a colony, or 5 gallons to start small",
      "Sponge filter, or a pre-filter sponge over an existing intake",
      "Heater, only if the room runs cooler than the high 50s",
      "Java moss, dense live plants and driftwood",
      "Indian almond leaves and other leaf litter",
      "GH and KH test kit, plus an ammonia and nitrite test",
      "Remineralizing product, if your source water comes up short",
      "Water conditioner",
      "Sinking wafers",
      "Zucchini, spinach or carrot to blanch",
      "Ten or more shrimp, rather than a pair or trio",
    ],
    faqs: [
      { q: "What size tank do cherry shrimp need?", a: "5 gallons is the commonly cited practical minimum. Shrimp can technically survive in a 2-gallon nano tank, but 10 gallons or more suits a stable breeding colony, since more water absorbs the small parameter shifts a growing colony causes." },
      { q: "Should I remove a shrimp's shed shell after it molts?", a: "No, leave it in the tank for a day or two. Shrimp (including the one that just molted) eat the discarded shell to reclaim the calcium and minerals in it, which directly supports hardening the new shell underneath. The only exception is a tank dealing with a parasite or bacterial outbreak, where old shells should be removed instead." },
      { q: "How many should I keep?", a: "More than a handful. Cherry shrimp are more active, more visible and more confident in a colony, and ten or more is a sensible starting point in a tank of reasonable size. A pair or trio spends most of its time hidden." },
    ],
  },
  {
    id: "emperor-scorpion",
    name: "Emperor Scorpion",
    emoji: "🦂",
    difficulty: "Beginner/Intermediate",
    petType: "Invertebrates",
    image: "/assets/guides/emperor-scorpion.jpg",
    tagline: "The glossy black heavyweight with a pinch far scarier than its sting!",
    seoTitle: "Emperor Scorpion Care Guide: Setup, Feeding, and Laws",
    seoDescription: "Emperor scorpion care from the legal check on: the humidity that matters most, burrowing depth, feeding by life stage, the pinch risk, and what is urgent.",
    funFact: "Scorpions molt an average of five times before reaching maturity, and there are no reports of one molting after it. An adult emperor scorpion bought at full size has finished molting for good.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size and lifespan come from the
    // encyclopedia entry. Rehousing and pesticides share one row citing the
    // shared invertebrate guides in the sidebar's Health and More list.
    // Rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    // Built 2026-09-15 for the emperor scorpion set test (docs/READER_REVIEWS.md),
    // which found the old hub wrong against its own deep dives on substrate
    // depth, humidity, temperature, adult and juvenile feeding frequency, the
    // fasting window, prey size, and enclosure size, and telling readers to feed
    // with tongs while the enrichment guide says to release prey and let the
    // animal hunt.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal check", value: "Banned in New York City, Hawaii, and the District of Columbia, permit-only in Maine and Rhode Island, conditional in Oregon, unclear in Idaho, Arkansas, New Mexico, and New Jersey. Nothing restricts one in the other forty-two jurisdictions.", source: "emperor-scorpion-legal-guide" },
        { label: "Enclosure", value: "A 10-gallon, roughly 20x10x12 inches, for one adult, with a tight lid: they climb and escape. A group wants 20 to 30 gallons and more hides than animals.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Humidity", value: "70 to 90%, with 75 to 80% the sweet spot. Substrate damp not soggy, misting daily or every other day. Condensation or mold means too wet; dry cracked substrate means too dry.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Temperature", value: "75 to 85°F ambient, 70 to 90°F the outer limits with a gradient. A side-mounted heat mat on a thermostat, never under the tank, makes a warm side of 85 to 90°F at its hottest.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Substrate depth", value: "5 to 6 inches minimum and deeper is better, since they burrow. Coco fiber, peat or soil mixes, damp and well aerated. No UVB; a 12-hour light cycle.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Hides", value: "One for a single animal. In a group, one per scorpion at least: the standard failure is one good hide and three scorpions.", source: "emperor-scorpion-enrichment-guide" },
        { label: "Diet", value: "Gut-loaded feeders only: crickets and dubia as staples, locusts and the occasional mealworm or superworm for variety. Gut-load for at least 24 hours; supplement the food, never the scorpion.", source: "emperor-scorpion-feeding-guide" },
        { label: "Feeding frequency", value: "Juveniles every 2 to 4 days. Adults once a week, sometimes 2 to 3 insects, no prey larger than the abdomen, and uneaten prey out within 24 hours.", source: "emperor-scorpion-feeding-guide" },
        { label: "How to offer it", value: "Release live prey in the evening and let a nocturnal ambush hunter hunt, rather than presenting it with tongs.", source: "emperor-scorpion-enrichment-guide" },
        { label: "Fasting", value: "A month or two is safe, especially before a molt, and refusing food then is normal.", source: "emperor-scorpion-feeding-guide" },
        { label: "Never feed", value: "Wild-caught insects, for pesticide and parasite risk, and fireflies, which are toxic to scorpions.", source: "emperor-scorpion-feeding-guide" },
        { label: "Handling", value: "Stressful and risky on both sides, and a fall can seriously injure the scorpion. If necessary, padded long forceps, or let it walk onto a tool or hand over a soft low surface. Never grab the tail.", source: "emperor-scorpion-handling-guide" },
        { label: "Pinch versus sting", value: "Far more likely to pinch than sting. The venom is mild: local pain, redness and swelling, unless you are already sensitive to bites and stings.", source: "emperor-scorpion-handling-guide" },
        { label: "Molting", value: "Live prey out and no handling around a molt. The new exoskeleton is too soft to protect it from predators or other scorpions, and an adult no longer molts.", source: "emperor-scorpion-health-issues-guide" },
        { label: "Budget", value: "$25 to $100 for a captive-bred scorpion, roughly $80 to $250 for the setup. Exotic vets who see invertebrates are uncommon; an exam, where one exists, runs $80 to $200-plus with limited treatment options.", source: "emperor-scorpion-cost-guide" },
        { label: "Lifespan", value: "5 to 8 years in captivity, a full range of 4 to 9.", source: "emperor-scorpion-cost-guide" },
        { label: "Adult size", value: "7 to 8 inches (18 to 20 cm)." },
        { label: "Rehousing and pesticides", value: "A move is the likeliest moment for an escape or an injury, so plan it as a procedure. Household insecticide reaches an enclosure by more routes than keepers expect.", source: "invertebrate-rehousing-guide" },
      ],
    },
    emergencyCard: {
      source: "emperor-scorpion-health-issues-guide",
      heading: "Check humidity, heat and substrate depth first, then act on these today. Vets rarely treat invertebrates.",
      callNow: [
        "A stuck molt: pieces of old exoskeleton that will not come off, with lethargy around molt time. Often fatal without experienced help",
        "Severe dehydration: a shriveled, sunken look with lethargy",
        "An open wound showing signs of infection",
        "A complete refusal to eat long after a molt has finished",
      ],
      vetLine: "Mild dehydration, minor mites, and early humidity-related lethargy generally resolve once the husbandry is corrected.",
    },
    routes: [
      { slug: "emperor-scorpion-cost-guide", line: "$25 to $100 for the animal, roughly $80 to $250 for the setup, what invertebrate vet care costs, and the $800 price claim debunked." },
      { slug: "emperor-scorpion-tank-setup-guide", line: "Enclosure size, the humidity that matters most, substrate deep enough to burrow in, and why no UVB is needed." },
      { slug: "emperor-scorpion-feeding-guide", line: "Gut-loaded feeders, frequency by life stage, the abdomen rule for prey size, and the fast before a molt." },
      { slug: "emperor-scorpion-handling-guide", line: "Why handling stays occasional, the pinch that is more likely than the sting, and the falls that do the real damage." },
      { slug: "emperor-scorpion-health-issues-guide", line: "Dehydration, failed molts, mites, cage-mate injuries, and which of them are emergencies." },
      { slug: "emperor-scorpion-enrichment-guide", line: "Hide count as the thing that makes a group work, releasing prey instead of tong-feeding, and what the tarantula housing study does and does not transfer." },
      { slug: "emperor-scorpion-legal-guide", line: "Three jurisdictions that ban it, two that want a permit, two that are unclear, and the CITES Appendix II listing that touches imports rather than ownership." },
    ],
    buyList: [
      "10-gallon enclosure minimum for one adult, 20 to 30 gallons or more for a group",
      "A secure, tight-fitting lid",
      "Coco fiber, peat, or a soil-based mix, enough for 5 to 6 inches and deeper if you can",
      "Sphagnum moss, to hold moisture between mistings",
      "More hides than animals: cork bark, half-logs, broken clay pots",
      "Shallow water dish, deep enough to drink from and not to drown in",
      "Side-mounted heat mat with a thermostat",
      "Digital thermometer and hygrometer",
      "Mister or spray bottle",
      "Long forceps with soft padding",
      "Gut-loaded crickets or dubia roaches, and a commercial gut-load",
      "UV torch, optional, for viewing",
    ],
    faqs: [
      { q: "How often should I feed my emperor scorpion?", a: "Juveniles and nymphs every 2 to 4 days, since they're growing and more voracious. Adults once a week is standard, sometimes 2 to 3 insects. Keep prey no larger than the abdomen." },
      { q: "What humidity and temperature does an emperor scorpion need?", a: "Humidity first: 70 to 90%, with 75 to 80% the practical target. Temperature is more forgiving, 75 to 85°F ambient, with 70 to 90°F as the outer limits provided there is a gradient." },
      { q: "How deep should the substrate be?", a: "5 to 6 inches minimum, and deeper is better, because the species uses that depth to burrow rather than decorate. Coco fiber, peat, soil-based mixes, or commercial products all work, kept damp but well-aerated." },
    ],
  },
  {
    id: "ghost-shrimp",
    name: "Ghost Shrimp",
    emoji: "🦐",
    difficulty: "Beginner",
    petType: "Invertebrates",
    image: "/assets/guides/ghost-shrimp.jpg",
    tagline: "The see-through scavenger that costs pennies and earns its keep!",
    seoTitle: "Ghost Shrimp Care Guide: Tank, Feeding, and Health",
    seoDescription: "Most ghost shrimp start life as feeder stock. How to get them through the first two weeks, the right filter, the copper ceiling, and why they eat each other.",
    funFact: "Despite looking like a smaller, cheaper cousin of the cherry and Amano shrimp sold right next to them in the store, ghost shrimp aren't closely related to either. They belong to the family Palaemonidae, while cherry and Amano shrimp both belong to the unrelated family Atyidae, and each lineage independently evolved from marine ancestors into fresh water at a different point in history. Their famous hardiness is exactly why they're sold cheaply in bulk as feeder shrimp for larger fish, even though plenty of keepers keep them purely as pets.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Summer cooling cites the shared
    // guides in the sidebar's Health and More list. Reconciled 2026-09-15 after
    // the ghost shrimp set test (docs/READER_REVIEWS.md), rewritten to the
    // template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // Retired rather than moved: "Heater if room runs below 65F" against the
    // setup guide's 72 to 82F comfortable range, seven degrees apart on whether
    // a keeper buys a heater at all; "pH 6.5-8.0" against 7 to 8; "5-15 dGH"
    // against 3 to 15; and a cost table that differed from the cost guide on
    // every line, tank $25-50 against $18-30, heater $15-25 against $18-30,
    // food $8-18 against $16-35.
    //
    // Two claims retired as wrong rather than merely different. The hub called
    // ghost shrimp "unusually bold and active... they wander openly in search
    // of food", where the feeding guide cites this species as largely nocturnal
    // and hidden by day, and the health guide lists staying hidden as a stress
    // sign, so the hub's version turned a normal animal into a worrying one.
    // And the hub said true Palaemonetes paludosus "can complete their entire
    // life cycle in freshwater" where the setup guide's 1990 Journal of
    // Crustacean Biology source puts viable hatching and metamorphosis in a 0
    // to 5 ppt band, with the researchers concluding the species can complete
    // its life cycle in brackish water. Freshwater is inside the window, not
    // the whole of it.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Where yours came from", value: "Most ghost shrimp move through the trade as live feed with no screening or quarantine. Lethargy, hiding, refusing food, and losses inside a small group shortly after purchase are feeder-tank stress.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Recovery first", value: "A quiet, stable, planted tank and low expectations for two weeks. Losses in that window are common and usually not something you did.", source: "ghost-shrimp-enrichment-guide" },
        { label: "Tank size", value: "5 gallons is the workable minimum, 10 gallons gives a small colony stability and room to forage.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Temperature and water chemistry", value: "72 to 82°F, pH 7 to 8, hardness 3 to 15 dGH. Wide tolerance does not mean ammonia and nitrite can read anything but zero before stocking.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Filtration", value: "A sponge filter. It has no intake tube to pull in a shrimp, freshly molted ones especially, the way a hang-on-back does.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Copper", value: "The non-negotiable rule: in a 2014 study, 0.0313 mg/L killed half of a related freshwater prawn within four days, and 0.003 mg/L is the proposed safe level. Copper fish medications, some plant fertilizers, and old copper plumbing are all realistic routes, so confirm anything is invertebrate-safe before it goes in.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Cover", value: "Dense plants and driftwood, so a freshly molted shrimp can vanish for the hours it is soft. Fish and other ghost shrimp both target one.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Molting, what normal looks like", value: "Going still and off food for an hour or more beforehand, then an empty shell in the tank. Young shrimp molt roughly weekly, older ones roughly monthly. Leave the shells in: they eat them for the minerals.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Molting, what failure looks like", value: "A solid white band where the shell should split cleanly at the head, trapping the shrimp between old and new shell, usually fatal. It traces to low calcium and hardness.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Feeding", value: "A small amount every day or two, a sinking wafer or a few pellets, with leftovers out after a few hours. They scavenge most of their own food, and they are a detritus crew more than an algae crew.", source: "ghost-shrimp-feeding-guide" },
        { label: "They eat each other", value: "Documented, not rare, and freshly molted shrimp are the target. Dense cover and consistent feeding both cut it.", source: "ghost-shrimp-feeding-guide" },
        { label: "Tankmates", value: "Prey or predator by size. A shrimp past roughly 1.5 inches is too big for most bettas to bother with; juveniles are at risk. Think about size in both directions, not the word \"peaceful\".", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Getting them into the tank", value: "A soft net, never hands, and a slow drip of 1 to 2 hours before they touch new water. A thin permeable shell makes sudden change far harder on a shrimp than a fish.", source: "ghost-shrimp-handling-guide" },
        { label: "Quarantine", value: "2 to 4 weeks in a separate tank before new shrimp join an established one.", source: "ghost-shrimp-handling-guide" },
        { label: "Budget", value: "Well under $1 each in bulk, $1 to $3 individually as pets. Equipment roughly $40 to $130, and ongoing costs minimal. There is no practical vet care for a shrimp this size.", source: "ghost-shrimp-cost-guide" },
        { label: "Lifespan", value: "Roughly one year, some closer to two, shorter than an Amano's 2 to 3.", source: "ghost-shrimp-cost-guide" },
        { label: "Water changes", value: "Small and steady, since swings in hardness around a change trigger failed molts. Test nitrate rather than changing by the calendar.", source: "aquarium-water-changes-guide" },
        { label: "A hot week", value: "Room air conditioning and a fan first, frozen bottles as a last resort, and the aeration running throughout: warm water holds less oxygen.", source: "cooling-an-aquarium-without-a-chiller-guide" },
      ],
    },
    emergencyCard: {
      source: "ghost-shrimp-health-issues-guide",
      heading: "Test the water first, then act on these today. No vet treats a shrimp; prevention is the whole plan.",
      callNow: [
        "Lethargy, hiding well past the first day or two, refusing food, and rapid losses inside a small group soon after purchase: feeder-tank stress",
        "A solid band around the body where the shell should split at the head, trapping the shrimp between old and new shell",
        "A whole group dying suddenly: ask what changed in the water, copper above all",
      ],
      vetLine: "Four habits prevent nearly all of this: quarantine new arrivals, confirm the cycle before stocking, keep copper at zero, and hold water chemistry steady for reliable molts.",
    },
    routes: [
      { slug: "ghost-shrimp-cost-guide", line: "Under $1 as feeder stock against $1 to $3 as a pet, and why the cheapest source is rarely the healthiest." },
      { slug: "ghost-shrimp-tank-setup-guide", line: "5 gallons as a floor, 72 to 82F, pH 7 to 8, and the sponge filter that exists for the intake." },
      { slug: "ghost-shrimp-feeding-guide", line: "A wafer every day or two, why they are not an algae crew, and the cannibalism nobody warns about." },
      { slug: "ghost-shrimp-handling-guide", line: "Net rather than hands, drip for 1 to 2 hours, quarantine two to four weeks, and what stress looks like." },
      { slug: "ghost-shrimp-health-issues-guide", line: "Copper lethal at 0.0313 mg/L to a related prawn, the feeder-tank history behind most early losses, and the white ring of death." },
      { slug: "ghost-shrimp-enrichment-guide", line: "Recovery as the real enrichment, the decapod sentience review, and why the label is not always the species in the bag." },
    ],
    buyList: [
      "5 gallon tank as a floor, 10 gallons for a colony",
      "Gentle sponge filter, or a guarded intake on anything else",
      "Heater, only if the room runs below the comfortable range",
      "Sand or fine gravel substrate",
      "Dense live plants, moss, wood and leaf litter",
      "Liquid water test kit",
      "Water conditioner",
      "Sinking wafer food",
      "Copper-free medications and fertilizers, checked before they go near the tank",
      "A separate quarantine tank for new arrivals",
    ],
    faqs: [
      { q: "What size tank do ghost shrimp need?", a: "5 gallons is the workable minimum according to The Shrimp Farm, and 10 gallons gives a small colony more stability and room to forage. Bigger is always more forgiving with water quality, but ghost shrimp don't demand the larger footprint some other species do." },
      { q: "Why are ghost shrimp so sensitive to copper?", a: "Like all freshwater shrimp, their gills and exoskeleton absorb dissolved metals efficiently, and copper is toxic to them at concentrations that barely register for fish. In a 2014 toxicity study on a related freshwater prawn, 0.0313 mg/L of copper killed half the animals within four days, and the researchers put a safe level nearer 0.003 mg/L, and copper-based fish medications, some plant fertilizers, and old copper plumbing are all realistic exposure routes. Keep it as close to zero as possible and confirm any medication or fertilizer is explicitly invertebrate-safe before using it." },
      { q: "Why does drip acclimation matter so much for shrimp specifically?", a: "Because shrimp can't quickly regulate their internal water balance the way fish can, and a permeable exoskeleton means a sudden shift in water chemistry causes real osmotic stress fast. A slow drip, commonly run for 1 to 2 hours, lets a shrimp adjust gradually instead of being shocked by an abrupt change, and it meaningfully reduces the risk of a failed molt or death shortly after introduction." },
    ],
  },
  {
    id: "millipede",
    name: "Giant African Millipede",
    emoji: "🐛",
    difficulty: "Self-Sufficient",
    petType: "Invertebrates",
    image: "/assets/guides/millipede.jpg",
    tagline: "The slow-motion recycler that turns a pile of leaves into garden soil!",
    seoTitle: "Giant African Millipede Care Guide: Setup, Diet, and Laws",
    seoDescription: "Giant African millipede care where the substrate is also the food: enclosure size, the humidity that prevents the top killer, safe handling, and permit rules.",
    funFact: "Despite their name, millipedes do not have 1,000 legs. Most species have 40 to 400 legs. However, a species discovered in 2021 (Eumillipes persephone) was found 60 meters underground in Australia and has a record 1,306 legs, making it the only true millipede.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pesticides and the travel and outage plan cite the
    // shared invertebrate guides in the sidebar's Health and More list.
    // Reconciled 2026-09-15 after the giant millipede set test
    // (docs/READER_REVIEWS.md), rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The old hub's cost table was above the cost guide on every line it
    // shared: the tank at $40 to $80 against $35 to $60, substrate at $20 to
    // $40 against $17 to $21+, and the hygrometer at $15 to $25 against $11 to
    // $19. It also had no purchase price and no mention of the federal permit,
    // which the reader named as the two things a landing page most needed.
    //
    // Three claims retired rather than moved. The old hub housed "2 to 3 adult
    // North American giant millipedes (Narceus americanus) or African giant
    // millipedes (Archispirostreptus gigas)" on a page whose species is
    // Archispirostreptus gigas, so the second species is gone. Its mite advice,
    // "treat with substrate replacement and drying one section of the
    // enclosure", is not what the health guide says to do. And its "5 to 10
    // years with appropriate care" collapsed a wild figure and a captive one
    // into a single number.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Budget", value: "$75 to $150 or more for the millipede, priced by scarcity rather than difficulty: there is no import ban, but USDA permits have dried up imports, so stock is captive-bred. Setup another $75 to $150, then a few dollars a month. Vets are rarely needed.", source: "giant-millipede-cost-guide" },
        { label: "Lifespan", value: "Typically 5 to 7 years in captivity, some past 10, a real multi-year commitment.", source: "giant-millipede-cost-guide" },
        { label: "Adult size", value: "10 to 15 inches (25 to 38 cm)." },
        { label: "Legal, before you buy", value: "Federally the species sits under the plant pest rules and the USDA PPQ 526 permit. Florida requires a state permit, Hawaii omits it from its approved lists, Oregon approves it with no permit, and DC and Montana leave it outside their permitted categories.", source: "giant-millipede-legal-guide" },
        { label: "Enclosure", value: "10 to 15 gallons minimum for one adult, with 36x18x18 inches or a 20 gallon long the common recommendation. Floor space over height, and a tight lid: they climb.", source: "giant-millipede-tank-setup-guide" },
        { label: "More than one", value: "Communal and normal. They cluster even in a big enclosure; what limits a group is crowding. Isopods and springtails are fine as a cleanup crew in a display tank; leave them out of a breeding tank.", source: "giant-millipede-tank-setup-guide" },
        { label: "Temperature", value: "72 to 80°F, usually room temperature. A low-wattage heat mat only if the room runs consistently cold.", source: "giant-millipede-tank-setup-guide" },
        { label: "Humidity", value: "70 to 80%: a third of the substrate kept genuinely moist, misting once or twice daily, cross-ventilation against mold and mites, and a digital hygrometer.", source: "giant-millipede-tank-setup-guide" },
        { label: "Substrate is the diet", value: "4 to 6 inches of pesticide-free topsoil, no coconut fiber, under decaying hardwood and oak, beech, or maple leaf litter, which is the staple food itself. No pine or cedar: the resins are toxic.", source: "giant-millipede-tank-setup-guide" },
        { label: "Produce and calcium", value: "Cucumber, carrot, sweet potato, greens, and a little fruit every two to three days, out before it molds. A cuttlebone or calcium carbonate left in permanently; without it the shell softens and molts fail.", source: "giant-millipede-tank-setup-guide" },
        { label: "Water and light", value: "A shallow dish with pebbles in it so nothing drowns. No lighting; they avoid bright light.", source: "giant-millipede-tank-setup-guide" },
        { label: "Handling, the real risk", value: "It cannot bite or sting. The risk runs the other way: a brittle shell on a heavy body, and a fall from higher than its own body length onto a hard floor can crack it fatally. Over a soft surface near the ground, full body supported, and let it walk onto your hand.", source: "giant-millipede-handling-guide" },
        { label: "The secretion", value: "A curl into a spiral, then a brown or yellow fluid that stings skin and eyes and stains. Wash hands after every session; for eyes, irrigate with saline and get them examined.", source: "giant-millipede-handling-guide" },
        { label: "A millipede that will not come up", value: "It is molting underground, which can take several weeks. A buried millipede is not stressed by you yet; digging it up is how it becomes so.", source: "giant-millipede-handling-guide" },
        { label: "Dehydration", value: "The number one cause of death: shriveled, sluggish, with dry cracking segments. Manageable early by raising humidity, deep-moistening the substrate, and a water dish.", source: "giant-millipede-health-issues-guide" },
        { label: "A failed molt", value: "Often fatal, from low humidity, poor nutrition, or disturbance. Never assist a molt or pull shed skin.", source: "giant-millipede-health-issues-guide" },
        { label: "Bug spray", value: "Every household insecticide is designed to kill arthropods. Ant spray in the kitchen, a plug-in in the hallway, or a dog's flea treatment can kill a healthy animal overnight.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "A power cut, and a trip", value: "It lives at room temperature, so an outage is rarely an emergency. A full water dish, stable humidity, and a checked lid cover a short absence.", source: "invertebrate-emergency-travel-shipping-guide" },
      ],
    },
    emergencyCard: {
      source: "giant-millipede-health-issues-guide",
      heading: "Check humidity and the substrate first, then act on these today. Vets are rarely involved.",
      callNow: [
        "A shriveled, sluggish animal with dry, cracking segments: dehydration, the number one killer",
        "A failed or incomplete molt, often fatal. Never assist a molt or pull shed skin",
        "Frequent cleaning behavior, thrashing, or visible mite clusters near the head or legs",
        "A major crack in the exoskeleton: isolate it in a clean, simple hospital enclosure",
        "Dark lesions, which point to swampy, poorly ventilated substrate",
        "A soft, weak-feeling exoskeleton outside a molt, which points to calcium deficiency",
      ],
      vetLine: "Low humidity drives the dehydration and failed molts; excess wetness with poor airflow drives the mites and lesions; falls cause the injuries. Balanced humidity is the key.",
    },
    routes: [
      { slug: "giant-millipede-cost-guide", line: "$75 to $150 or more for the animal, the same again for setup, and the import rule behind the price." },
      { slug: "giant-millipede-tank-setup-guide", line: "10 to 15 gallons as a floor, 72 to 80F, 70 to 80%, the 4 to 6 inch substrate that is also the food, and why isopods stay out of a breeding tank." },
      { slug: "giant-millipede-feeding-guide", line: "The substrate as the diet, produce every two to three days and out before it molds, calcium left in, and the molt that looks like a fast." },
      { slug: "giant-millipede-handling-guide", line: "Falls rather than bites, what the curl and the secretion mean, and when to leave a buried animal alone." },
      { slug: "giant-millipede-health-issues-guide", line: "Dehydration, failed molts, mites, and the humidity pattern sitting underneath all three." },
      { slug: "giant-millipede-enrichment-guide", line: "Why the substrate is the enrichment, what the tarantula housing study does and does not transfer, and the priority order." },
      { slug: "giant-millipede-legal-guide", line: "The 2006 import ban that never happened, the permit that is real, and the states that differ." },
    ],
    buyList: [
      "A 20 gallon long tank, or a 40-gallon breeder tank or tub",
      "Pesticide-free organic topsoil for a 4 to 6 inch substrate, no coconut fiber",
      "Decaying hardwood and hardwood leaf litter, oak or beech",
      "Cuttlebone or crushed oyster shell, left in permanently",
      "A digital thermometer and hygrometer",
      "A fine mist spray bottle",
      "Cork bark and hides",
      "A small shallow water dish with a few pebbles in it",
      "A secure, tightly fitting lid",
    ],
    faqs: [
      { q: "Why does a giant millipede cost more than other invertebrates?", a: "There is no import ban, but bringing one into the country or across state lines requires a USDA plant pest permit, and the mites wild animals carry are much of the reason imports have dried up. So the animals for sale in the US are captive-bred, from a species that has never bred well in captivity. Limited supply, not care difficulty, is what pushes the price up." },
      { q: "What size enclosure does a giant millipede need?", a: "10 to 15 gallons is the floor for one adult, though many keepers go closer to 36x18x18 inches, about a 40-gallon, or a 20-gallon long. Floor space beats height for a ground-dweller, and the lid has to fit tightly." },
      { q: "What's the most common cause of death in giant millipedes?", a: "Dehydration. Looks shriveled and sluggish, with dry, cracking segments along the body. Insufficient humidity or substrate that isn't holding moisture is behind it, and early on it's manageable: raise humidity, moisten the substrate more deeply, and add a shallow water dish." },
    ],
  },
  {
    id: "hermit-crab",
    name: "Hermit Crab",
    emoji: "🦀",
    difficulty: "Intermediate",
    petType: "Invertebrates",
    image: "/assets/guides/hermit-crab.jpg",
    tagline: "The shell-swapping beach scavenger that is nobody's starter pet!",
    seoTitle: "Hermit Crab Care Guide: Tank, Humidity, and Molting",
    seoDescription: "Hermit crabs are nobody's starter pet. The humidity and heat that keep gills working, substrate deep enough to molt in, two water dishes, and how many shells.",
    funFact: "Hermit crabs don't grow their own shells - they spend their entire lives searching for, trying on, and trading empty snail shells as they grow, and will even form an orderly 'vacancy chain,' lining up by size to swap shells in turn when a larger one becomes available. In the wild, land hermit crabs can live 20 to 30+ years, though most pet hermit crabs sold in beach-town gift shops die within their first year from incorrect humidity and being kept alone.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Pesticides and the power
    // outage row cite the shared invertebrate guides in the sidebar's Health
    // and More list. Reconciled 2026-09-09 after the hermit crab set test
    // (docs/READER_REVIEWS.md), rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Tank", value: "A glass terrarium, 10 gallons for up to two adult crabs and at least 5 more gallons for each crab added, with a glass or acrylic lid that seals in humidity. Cover part of a screen lid with plastic wrap.", source: "hermit-crab-tank-setup-guide" },
        { label: "Group size", value: "At least two. They are social.", source: "hermit-crab-tank-setup-guide" },
        { label: "Temperature", value: "75 to 85°F, the warm side around 80°F, from a side- or back-mounted heat mat. Never under the tank: heat rising through deep substrate can kill a buried, molting crab.", source: "hermit-crab-tank-setup-guide" },
        { label: "Humidity", value: "75 to 85%, on a hygrometer, held with moist substrate, a sealed lid, and a moss pit.", source: "hermit-crab-tank-setup-guide" },
        { label: "Substrate", value: "Play sand and coconut fiber at about 5:1, packed to sandcastle consistency, at least 6 inches deep or 3 times the height of the largest crab. They burrow to molt.", source: "hermit-crab-tank-setup-guide" },
        { label: "Water", value: "Two soakable dishes, one dechlorinated fresh, one marine saltwater from an aquarium salt mix, never table salt. Deep enough to submerge, with an easy way out, since crabs drown.", source: "hermit-crab-tank-setup-guide" },
        { label: "Shells", value: "3 to 5 or more natural, unpainted shells per crab across a range of sizes. Painted shells are toxic.", source: "hermit-crab-tank-setup-guide" },
        { label: "Diet", value: "Varied: cuttlebone for calcium, fresh fruit and vegetables, dried shrimp or insects for protein, leaf litter. Fed in the evening, leftovers out in the morning. No UVB requirement, a 12-hour light cycle.", source: "hermit-crab-tank-setup-guide" },
        { label: "Handling", value: "On a flat open palm, never a closed hand. Lift by the back of the shell, not the legs, and keep it brief.", source: "hermit-crab-handling-guide" },
        { label: "Buried and out of sight", value: "A new arrival digs down for days, sometimes over a week. A molting crab stays buried for weeks to around three months and is never dug up, however long it has been.", source: "hermit-crab-handling-guide" },
        { label: "The first molt", value: "Every pet hermit crab is wild-caught, and the adjustment period is where most deaths happen. Isolate new crabs, change humidity and temperature gradually, and count a crab past the risk only after its first molt in your care.", source: "hermit-crab-health-issues-guide" },
        { label: "Food to avoid", value: "Copper sulfate, toxic to invertebrates, and ethoxyquin, a preservative that hides in fish meal without appearing on the label.", source: "hermit-crab-feeding-guide" },
        { label: "A lost limb", value: "Regrows over successive molts, first as a small bud.", source: "hermit-crab-health-issues-guide" },
        { label: "Budget", value: "$5 to $40 per crab, roughly $90 to $350 for a complete setup, then $10 to $30 a month.", source: "hermit-crab-cost-guide" },
        { label: "Lifespan", value: "10 years or more when kept well, and some reach 30.", source: "hermit-crab-cost-guide" },
        { label: "Adult size", value: "Up to 4 inches (10 cm) across, including legs." },
        { label: "Household pesticides", value: "Every insecticide sold for a home kills arthropods, and ant spray in the kitchen, a plug-in in the hallway, or a dog's flea treatment all reach an enclosure.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "Power outage", value: "The exception among invertebrates: actively heated and humidified, so the risk is a reptile's. A battery backup for the heat and a sealed lid over damp substrate belong in the outage kit.", source: "invertebrate-emergency-travel-shipping-guide" },
      ],
    },
    emergencyCard: {
      source: "hermit-crab-health-issues-guide",
      heading: "Check heat, humidity and substrate depth first, then act on these today. No practical vet care exists for this animal.",
      callNow: [
        "Lethargy, hiding, refusing food, and rapid loss of several limbs: advanced post-purchase stress",
        "An ashy look, lethargy, and an inability to retract fully into the shell: dehydration and gill suffocation",
        "A molt interrupted, or happening in substrate too shallow or dry, which is frequently fatal",
        "Limb loss from stress, fights, mites, or wrong conditions",
        "Mites and mold, from poor hygiene or inadequate ventilation",
      ],
      vetLine: "Correct the husbandry behind it, and isolate any crab that is aggressive, injured, or showing post-purchase stress while it recovers.",
    },
    routes: [
      { slug: "hermit-crab-cost-guide", line: "$5 to $40 for the crab itself, why the setup is the part that actually costs money, and the monthly budget after that." },
      { slug: "hermit-crab-tank-setup-guide", line: "Humidity, temperature, substrate depth, the two water dishes, and the shells that go in the tank." },
      { slug: "hermit-crab-handling-guide", line: "Why handling stays minimal, the open-palm method, and how long a buried crab can stay down." },
      { slug: "hermit-crab-health-issues-guide", line: "Post-purchase stress, dehydration and gill suffocation, bad molts, and what seeking help looks like when there's almost no vet care." },
      { slug: "hermit-crab-feeding-guide", line: "Why one food is not the diet, calcium for the molt, the two additives toxic to invertebrates, and why water is part of feeding." },
      { slug: "hermit-crab-enrichment-guide", line: "What the shell research actually found, how many shells a group needs, and the priority order for everything else." },
    ],
    buyList: [
      "Glass terrarium, 10 gallons for up to two adult crabs, 5 more gallons for each crab added",
      "A glass or acrylic lid that seals humidity in",
      "Play sand and coconut fiber for substrate",
      "Side- or back-mounted heat mat",
      "Thermometer and hygrometer",
      "Two soakable water dishes, ceramic or otherwise non-metal",
      "Dechlorinator",
      "Marine aquarium salt mix",
      "Natural unpainted shells in a range of sizes, several per crab",
      "Climbing branches and cork bark",
      "Cuttlebone or another calcium source",
      "Hermit crab food plus fresh fruit, vegetables, and protein",
    ],
    faqs: [
      { q: "What humidity level do hermit crabs need?", a: "75 to 85% relative humidity, checked on a hygrometer. It isn't optional: the modified gills a hermit crab breathes through must stay moist to work, and humidity below that range leads directly to dehydration and gill suffocation." },
      { q: "When should I never handle my hermit crab?", a: "Never handle a crab that's molting, has just molted, or is buried in the substrate. Molting crabs are extremely vulnerable, and disturbing one during this time can be fatal, it's one of the clearest rules in hermit crab care." },
      { q: "What's the leading cause of death in pet hermit crabs?", a: "Post-purchase stress, since every pet hermit crab is wild-caught rather than captive-bred and goes through real shock from capture, shipping, and a new environment. Watch for lethargy, burrowing, refusing food, and rapid loss of multiple limbs, and know that a crab generally isn't past the risk period until it has molted once successfully in your care." },
    ],
  },
  {
    id: "jumping-spider",
    name: "Jumping Spider",
    emoji: "🕷️",
    difficulty: "Beginner",
    petType: "Invertebrates",
    image: "/assets/guides/jumping-spider.jpg",
    tagline: "The tiny, curious-eyed hunter that watches you back and needs barely any space at all!",
    seoTitle: "Jumping Spider Care Guide: Enclosure, Feeding, and Health",
    seoDescription: "Jumping spider care: a tall enclosure with the door low, feeding by life stage, the never-feed list, and the humidity behind most illness.",
    funFact: "Jumping spiders have some of the best vision of any arthropod, with four pairs of eyes giving them nearly 360-degree awareness and sharp enough focus to visually track and judge the distance of prey before pouncing - hence the name. Many keepers report their jumping spider appearing to watch and turn to follow movement outside the enclosure, genuinely interactive behavior that's unusual for an invertebrate.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Molting, pesticides and the travel and outage plan
    // cite the shared invertebrate guides in the sidebar's Health and More
    // list. Reconciled 2026-09-15 after the jumping spider set test
    // (docs/READER_REVIEWS.md), rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The old hub disagreed with a deep dive on almost every number a buyer
    // would write down, which is how the reader put it: enclosure 5x5x8 inches
    // against the setup guide's 4x4x7 minimum and 8 to 10 inches tall;
    // enclosure price $15 to $30 against the cost guide's $60 to $70;
    // feeder insects $20 to $40 a year against $5 to $15 a month; lifespan 1
    // to 2 years against 1 to 3; temperature 70 to 80F against 72 to 82F;
    // misting "every day or two" against every 2 to 3 days; and "remove
    // anything uneaten after a day" against pulling live prey within a few
    // hours to overnight. None of those figures moved up here; each row now
    // copies the article that owns it.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Budget", value: "$15 to $25 for a captive-bred spiderling, $25 to $60 for a juvenile or sub-adult female, which lives longer. Setup roughly $112 to $150, then $5 to $15 a month in feeders. Few exotic vets treat spiders.", source: "jumping-spider-cost-guide" },
        { label: "Lifespan", value: "Males a few months after maturity, females considerably longer. Expect one to two years in captivity.", source: "jumping-spider-cost-guide" },
        { label: "Adult size", value: "0.5 to 0.75 inches (1.3 to 1.9 cm), females larger than males." },
        { label: "Enclosure", value: "Vertical, about 8 inches (20 cm) tall for an adult, smaller for spiderlings. Front-opening, cross-ventilated, the door low since the silk retreat goes at the top. One spider per enclosure: they eat each other.", source: "jumping-spider-tank-setup-guide" },
        { label: "Temperature", value: "69 to 83°F, which is room temperature for most homes. Below about 70°F, a heat mat on the side wall through a thermostat, never under the substrate.", source: "jumping-spider-tank-setup-guide" },
        { label: "Humidity", value: "50 to 60% for Phidippus species. Mist one corner every few days with dechlorinated water, leaving drinkable droplets rather than soaking, with airflow so humidity does not turn to mold.", source: "jumping-spider-tank-setup-guide" },
        { label: "Substrate and light", value: "Coconut fiber, or fiber and moss, to hold moisture and buffer humidity. Bright light on a 12-hour cycle for a hunter that works by sight, from a daylight lamp around 6,000K on a timer.", source: "jumping-spider-tank-setup-guide" },
        { label: "Feeding, by life stage", value: "Spiderlings every 1 to 2 days on 1 to 2 flightless fruit flies. Juveniles every 2 to 3 days, sub-adults every 2 to 4, adults every 2 to 5, with the abdomen deciding where in that window.", source: "jumping-spider-feeding-guide" },
        { label: "The abdomen is the gauge", value: "Shrunken or wrinkled means hungry, feed early. Plump and wider than the cephalothorax means skip the next one. Feed in the morning, and pull uneaten prey within hours.", source: "jumping-spider-feeding-guide" },
        { label: "What they eat", value: "Live prey only, no plant matter and no commercial spider food. Fruit flies for slings, then small crickets and flies, with flies the low-risk staple. Prey no bigger than the abdomen: an oversized cricket can kill a spider near a molt.", source: "jumping-spider-feeding-guide" },
        { label: "Never feed", value: "Ants, above everything. Hard-shelled beetles, pill bugs, fireflies, other spiders, and any wild-caught insect.", source: "jumping-spider-feeding-guide" },
        { label: "Water", value: "A shallow dish plus the droplets misting leaves on the walls. Never mist the abdomen directly: water between the book-lung plates can suffocate the spider.", source: "jumping-spider-feeding-guide" },
        { label: "A spider that stops eating", value: "Usually premolt fasting, days to weeks before a shed. A healthy adult goes 2 to 3 weeks without food safely; a spiderling has far smaller reserves. Wait 2 to 3 days after a molt before feeding.", source: "jumping-spider-feeding-guide" },
        { label: "Dehydration", value: "One of the commonest killers in captivity: a shriveled abdomen, curled legs and lethargy, from low humidity or no drinkable droplets.", source: "jumping-spider-health-issues-guide" },
        { label: "Molting", value: "Reduced activity, retreating into the silk hammock, and refusing food are the pre-molt signs. Never disturb a spider in its retreat: the new exoskeleton stays soft for hours to days.", source: "invertebrate-molting-guide" },
        { label: "Handling", value: "Minimal, and bites are rare and trivial. Let it walk onto and off your hand, low over a soft surface: a fall is how keepers hurt them.", source: "jumping-spider-handling-guide" },
        { label: "Bug spray", value: "Every household insecticide is designed to kill arthropods. Ant spray, a plug-in, or a dog's flea treatment can kill a healthy spider overnight.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "A power cut, and a trip", value: "The spider lives at room temperature, so an outage is rarely an emergency. A full water dish, stable humidity, and a checked lid cover a short absence.", source: "invertebrate-emergency-travel-shipping-guide" },
      ],
    },
    emergencyCard: {
      source: "jumping-spider-feeding-guide",
      heading: "Check humidity and the water dish first, then act on these today. Few exotic vets treat spiders, so know which one near you will.",
      callNow: [
        "Food refusal running well past two weeks with no molt",
        "No interest in food for a week or more after a molt has completed",
        "A visibly shrunken or wrinkled abdomen, especially with lethargy",
        "Legs curling inward, or an inability to right itself if flipped",
        "Visible injury or fluid leakage",
        "A failed or stuck molt, partially out of the old exoskeleton with no progress for hours",
      ],
      vetLine: "Hobbyist-reported, not veterinary-established. A healthy adult goes 2 to 3 weeks without food safely, so refusal alone is not the alarm; the last three mean act now, and little can be done once a molt has failed.",
    },
    routes: [
      { slug: "jumping-spider-cost-guide", line: "$15 to $60 for the spider, $112 to $150 for setup, and why the short lifespan is the real cost." },
      { slug: "jumping-spider-tank-setup-guide", line: "About 8 inches of height, 69 to 83F, 50 to 60%, and why the door belongs low." },
      { slug: "jumping-spider-feeding-guide", line: "A schedule by life stage, the never-feed list with ants at the top, and how to read a spider that has stopped eating." },
      { slug: "jumping-spider-handling-guide", line: "Why a visual hunter behaves differently in your hand, and why the fall is the risk." },
      { slug: "jumping-spider-health-issues-guide", line: "Dehydration, retained molts, silk impaction, and the humidity underneath all three." },
      { slug: "jumping-spider-enrichment-guide", line: "The cognition literature on this species, and what it actually asks you to put in the enclosure." },
    ],
    buyList: [
      "A small vertical, front-opening enclosure, 4x4x7 inches at the least and taller if you can",
      "Coconut fiber, or a coconut fiber and sphagnum moss blend",
      "Mini cork bark flats, small branches, and artificial or live foliage",
      "A fine mist spray bottle and dechlorinated water",
      "A digital hygrometer",
      "A shallow water dish",
      "A flightless fruit fly culture for a sling, small crickets or flies for an adult",
      "A thermostat, if and only if the room needs supplemental heat",
    ],
    faqs: [
      { q: "What size enclosure does a jumping spider need?", a: "Roughly 8 inches (20 cm) of height for an adult, oriented vertically, with smaller enclosures for spiderlings. Arboreal species: height counts for more than floor." },
      { q: "How often should I feed my jumping spider?", a: "It depends on life stage and varies a fair amount even among adults: spiderlings eat every 1 to 2 days, tapering to roughly every 2 to 5 days by adulthood. The guide is the abdomen, shrunken or wrinkled means feed, plump and noticeably wider than the cephalothorax means skip the next meal." },
      { q: "What should I never feed a jumping spider?", a: "Ants, above all: jumping spiders show an instinctive fear response to them, and an ant can bite or spray formic acid. Also unsafe are hard-shelled beetles, pill bugs, fireflies, and any prey larger than the spider's own body." },
    ],
  },
  {
    id: "hissing-cockroach",
    name: "Madagascar Hissing Cockroach",
    emoji: "🪲",
    difficulty: "Self-Sufficient",
    petType: "Invertebrates",
    image: "/assets/guides/hissing-cockroach.jpg",
    tagline: "Calm, armored, surprisingly clean, and yes, it hisses!",
    seoTitle: "Hissing Cockroach Care Guide: Setup, Feeding, and Laws",
    seoDescription: "Madagascar hissing cockroach care for a colony, not a single roach: the escape barrier that works, the staple food, what a hiss means, and where it is banned.",
    funFact: "Madagascar hissing cockroaches are one of the few insect species where the father plays an active role in rearing offspring. Males guard and protect the female and young after birth, and juveniles stay with the family group for weeks.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pesticides cites the shared invertebrate guides in
    // the sidebar's Health and More list. Reconciled 2026-09-15 after the
    // hissing cockroach set test (docs/READER_REVIEWS.md), rewritten to the
    // template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // What the old hub had wrong, in the reader's order: humidity 50 to 70%
    // against the setup and health guides' 60 to 70%; "temperatures of 75 to
    // 90 degrees F are ideal" running into the 85 to 95F breeding trigger it
    // never mentioned; a Housing section calling smooth sides 10 to 12 inches
    // tall enough to prevent escape and the jelly barrier "a secondary
    // escape-proofing method some keepers use", where the setup guide says a
    // secure lid alone isn't enough and its own FAQ said they scale glass; a
    // setup table totalling $70 to $130 before the animal against the cost
    // guide's $40 to $100 including it; "completely harmless to humans"
    // against the handling guide's leg spines and Salmonella; maturity at 5 to
    // 7 months against the feeding guide's molt count; a protein supplement
    // line against the feeding guide's "hissers are naturally
    // protein-sparing"; and a permanent cuttlebone the feeding guide never
    // mentions at all. None of those figures moved up here.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Budget", value: "Around $3 a nymph, about $24 for a pair, around $65 for a starter colony of 25. Setup roughly $40 to $100 with the animals, then a few dollars a month. Very few vets treat invertebrates.", source: "madagascar-hissing-cockroach-cost-guide" },
        { label: "Lifespan", value: "2 to 5 years, most commonly 2 to 3.", source: "madagascar-hissing-cockroach-cost-guide" },
        { label: "Adult size", value: "2 to 4 inches (5 to 10 cm)." },
        { label: "Enclosure", value: "A 5-gallon tank for a small group, a 10 to 20-plus gallon tank or tub for a colony. Floor space matters more than height.", source: "madagascar-hissing-cockroach-tank-setup-guide" },
        { label: "Not one on its own", value: "They are gregarious, they cluster, and the welfare research that exists is on groups.", source: "madagascar-hissing-cockroach-enrichment-guide" },
        { label: "The escape barrier", value: "They climb smooth glass. A band of petroleum jelly around the top 2 to 3 inches of the interior plus a tight lid makes escapes a non-issue; skip it and you will find roaches loose.", source: "madagascar-hissing-cockroach-tank-setup-guide" },
        { label: "Temperature", value: "75 to 85°F, and room temperature above about 70°F is fine if you are not breeding. Breeding triggers around 85 to 95°F, which is how an accidental population boom starts.", source: "madagascar-hissing-cockroach-tank-setup-guide" },
        { label: "Humidity and substrate", value: "60 to 70%, from daily misting over 2 to 3 inches of coconut fiber, peat, or orchid bark. Egg-crate stacks or cork bark as hides. No lighting: they are nocturnal and prefer the dark.", source: "madagascar-hissing-cockroach-tank-setup-guide" },
        { label: "Male or female", value: "Males carry two large horns behind the head and grow larger. A mixed-sex group breeds; a same-sex group does not.", source: "madagascar-hissing-cockroach-tank-setup-guide" },
        { label: "Feeding", value: "Dry dog food, cat food, or roach chow always available, plus fresh produce 2 to 3 times a week in an amount finished within 24 to 48 hours. The lighter weekly schedule is only a fallback for a small colony.", source: "madagascar-hissing-cockroach-feeding-guide" },
        { label: "What they eat", value: "Romaine and dark greens, carrot, squash, sweet potato, apple, banana, orange, grape. Not a protein-heavy diet, and nothing treated with pesticide.", source: "madagascar-hissing-cockroach-feeding-guide" },
        { label: "Water", value: "A soaked cotton ball or sponge in a shallow dish, or water gel. An open dish drowns small nymphs.", source: "madagascar-hissing-cockroach-feeding-guide" },
        { label: "Why it looks like nothing is eating", value: "They feed after dark. Nymphs also go quiet and eat less before each of their roughly six molts over six to seven months.", source: "madagascar-hissing-cockroach-feeding-guide" },
        { label: "Handling", value: "They do not bite. Docile, but a display animal: lift gently around the thorax or let it walk hand to hand; never pull against the grip of the feet. The leg spines can scratch. Wash hands before and after: Salmonella.", source: "madagascar-hissing-cockroach-handling-guide" },
        { label: "Desiccation and molt", value: "Low humidity causes failed molts and death. A freshly molted roach is soft and white for hours; never handle one then.", source: "madagascar-hissing-cockroach-health-issues-guide" },
        { label: "Mold and mites", value: "From wet food left in and poor airflow. Remove uneaten produce within 24 to 48 hours, ventilate, and deep-clean on a schedule rather than after a problem.", source: "madagascar-hissing-cockroach-health-issues-guide" },
        { label: "Legal, before you buy", value: "Barred in New Hampshire, Montana, Hawaii, and the District of Columbia. Florida requires an agriculture permit, Oregon attaches conditions.", source: "madagascar-hissing-cockroach-legal-guide" },
        { label: "Bug spray", value: "Every household insecticide is designed to kill arthropods. Ant spray in the kitchen, a plug-in in the hallway, or a dog's flea treatment can kill a healthy colony overnight.", source: "invertebrate-pesticide-hazards-guide" },
      ],
    },
    emergencyCard: {
      source: "madagascar-hissing-cockroach-feeding-guide",
      heading: "Check temperature and humidity first, then act on these today. Very few vets treat invertebrates.",
      callNow: [
        "Discharge from the mouth or eyes",
        "Visible sores",
        "Visible weight loss, or a dull-looking exoskeleton",
        "Lethargy beyond normal pre-molt sluggishness",
      ],
      vetLine: "Not eating is usually benign: they feed after dark, nymphs go quiet before a molt, and a cool room slows them. Once several of these signs stack up, a visibly sick hisser commonly survives only 2 to 3 days, so act quickly. A heat mat without a thermostat overheats a tub.",
    },
    routes: [
      { slug: "madagascar-hissing-cockroach-cost-guide", line: "$3 a nymph, $24 a pair, $65 a colony of 25, and a setup total under $100 with the animal in it." },
      { slug: "madagascar-hissing-cockroach-tank-setup-guide", line: "5 gallons as a floor, 75 to 85F, 60 to 70%, and the petroleum jelly band that does the real escape prevention." },
      { slug: "madagascar-hissing-cockroach-feeding-guide", line: "Dry dog food as the staple, produce two or three times a week, and why it looks like nothing is eating." },
      { slug: "madagascar-hissing-cockroach-handling-guide", line: "How the hiss is actually produced, what a graded hiss is telling you, and why pulling against the grip injures them." },
      { slug: "madagascar-hissing-cockroach-health-issues-guide", line: "Desiccation, molting complications, mold and mites, and why prevention does almost all the work." },
      { slug: "madagascar-hissing-cockroach-enrichment-guide", line: "The 2023 welfare framework built for group-housed Gromphadorhina, and what it asks of a colony enclosure." },
      { slug: "madagascar-hissing-cockroach-legal-guide", line: "Four jurisdictions that bar them, the Florida permit filed under agriculture, and three states that never say." },
    ],
    buyList: [
      "A 5 gallon tank as a floor, 10 to 20+ gallons for a colony, with a secure screened lid",
      "Plain petroleum jelly for the escape barrier",
      "Coconut fiber, peat moss or orchid bark substrate",
      "Egg-crate stacks or cork bark hides",
      "Leaf litter and pieces of rotting wood",
      "A shallow dish with a cotton ball or sponge, or a commercial water gel",
      "High-quality dry dog food or commercial roach chow",
      "A spray bottle for misting",
      "A digital thermometer and hygrometer, since the card asks you to check both",
      "A thermostat, only if you are running supplemental heat to breed",
    ],
    faqs: [
      { q: "How much does a Madagascar hissing cockroach cost?", a: "Around $3 for an individual nymph, about $24 for a breeding pair, and around $65 for a starter colony of 25. This species doubles as a feeder insect for reptiles, which keeps pricing low and consistent across most sources." },
      { q: "What temperature and humidity does this species need?", a: "75 to 85°F for general pet-keeping, room temperature above about 70°F is fine if you're not actively breeding. Breeding gets triggered around 85 to 95°F. Humidity should stay at 60 to 70%, maintained through daily misting and moisture-holding substrate." },
      { q: "What's the most common health problem in pet Madagascar hissing cockroaches?", a: "Desiccation. Low humidity causes real problems with molting and can lead to death if left uncorrected. Maintaining 60 to 70% humidity through regular misting and moisture-holding substrate fixes it." },
    ],
  },
  {
    id: "praying-mantis",
    name: "Praying Mantis",
    emoji: "\u{1F997}",
    difficulty: "Self-Sufficient",
    petType: "Invertebrates",
    image: "/assets/guides/praying-mantis.jpg",
    tagline: "Nature's most impressive ambush predator, in a palm-sized package!",
    seoTitle: "Praying Mantis Care Guide: Enclosure, Feeding, and Molting",
    seoDescription: "Praying mantis care hinges on one height: the perch drop that decides whether a molt succeeds. Plus enclosure size, live prey by stage, and egg cases.",
    funFact: "Praying mantises are the only insects known to have a single ear, located in the center of their chest between their hind legs. They use it to detect the ultrasonic calls of hunting bats, letting them dodge mid-flight. They are also the only insect that can turn its head 180 degrees.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pre-molt signs cite the shared invertebrate molting
    // guide in the sidebar's Health and More list. Reconciled 2026-09-15 after
    // the praying mantis set test (docs/READER_REVIEWS.md), rewritten to the
    // template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The old hub carried unverified pricing by its own admission and every
    // one of its figures lost to a deep dive. Retired rather than moved:
    // an enclosure at "$15 to $35" against the cost guide's $60 to $70;
    // feeders at "$30 to $60" a year against $10 to $40 a month; a lifespan
    // of "12 to 18 months" against 6 to 12 for most kept species, which is
    // what both the Chinese mantis care sheet and Animal Diversity Web
    // support; "a 12x12x18 inch mesh or acrylic enclosure" against the setup
    // guide's 8 by 8 by 12; "75 to 85 degrees F" and "72 to 95" against the
    // 70 to 80 the setup guide now carries with a source; a separate line
    // item for the molting stick the cost guide says is the same purchase as
    // the climbing branch; and an FAQ recommending a nymph where the cost
    // guide says buy an adult or subadult. The prey-size rule of "never
    // exceed the space between the mantis's eyes" was hub-only with nothing
    // behind it, and is replaced by the sourced one-third-of-body-length
    // rule now in the setup guide's Diet Basics.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Buy an adult", value: "An adult or subadult, not a nymph. Nymphs are hard to keep alive through their many molts.", source: "praying-mantis-cost-guide" },
        { label: "Enclosure", value: "Length and width at least twice the mantis's body length, height at least three times. 8 by 8 by 12 inches is the adult minimum; a nymph does well in a vented 32-ounce deli cup.", source: "praying-mantis-tank-setup-guide" },
        { label: "The measurement that decides a molt", value: "The drop from perch to floor, at least four times the mantis's length. In the 8 by 8 by 12 box that drop is 12 inches, enough for a mantis up to about three inches; a larger adult needs a taller box.", source: "praying-mantis-tank-setup-guide" },
        { label: "The ceiling", value: "Mesh, screen or something rough the mantis can grip upside down for hours, with the space under it kept clear. Smooth glass at the top causes the most common death in the species.", source: "praying-mantis-enrichment-guide" },
        { label: "Temperature", value: "Room temperature, roughly 70 to 80°F, for Carolina and Chinese mantises, and below 88°F always. Never in direct sun: the enclosure heats fatally fast.", source: "praying-mantis-tank-setup-guide" },
        { label: "Humidity", value: "Species-dependent: a Chinese mantis around 50 to 65%, Ghost and Orchid mantises 70 to 80%. Mist lightly at least once daily; the droplets are how it drinks, and standing water drowns small nymphs.", source: "praying-mantis-tank-setup-guide" },
        { label: "Ventilation", value: "A mesh lid, never solid. Excess humidity without airflow brings mold and internal infection, which kill with no visible sign until too late.", source: "praying-mantis-tank-setup-guide" },
        { label: "Substrate and light", value: "Coconut fiber, soil, bark or paper towel for footing and humidity. No UVB, a normal 12-hour light cycle.", source: "praying-mantis-tank-setup-guide" },
        { label: "Feeding", value: "Live prey only, every other day, as much as it takes in one sitting; the honest range runs every day to every four days by species and condition. Nothing longer than a third of its body.", source: "praying-mantis-tank-setup-guide" },
        { label: "Prey by size", value: "Fruit flies for the smallest nymphs, then bottle flies, small crickets and dubia, with larger crickets and waxworms for a full adult. Dead insects get ignored; hunting live prey is the whole enrichment.", source: "praying-mantis-tank-setup-guide" },
        { label: "Feeding around a molt", value: "Off food usually means a molt is coming: stop offering and pull live prey out, since a cricket chews on a soft mantis. After the molt, wait several hours to a day for the legs and mouthparts to harden.", source: "praying-mantis-tank-setup-guide" },
        { label: "Handling", value: "Calm around people and it rarely bites. Let it walk onto a hand or tool, in a closed room: adults of most kept species fly. Never restrain or squeeze, and nothing at all in the days before a molt.", source: "praying-mantis-handling-guide" },
        { label: "One per enclosure", value: "Cannibalistic at any size difference and often at none. Solo housing outside supervised breeding.", source: "praying-mantis-enrichment-guide" },
        { label: "Budget", value: "$15 to $35 for a Carolina or Chinese mantis, up to $150 for an Orchid. A full setup runs $100 to $145, then $10 to $40 a month in feeders. Exotic vets rarely treat invertebrates.", source: "praying-mantis-cost-guide" },
        { label: "Lifespan", value: "6 to 12 months for most kept species, females outliving males; a few reach around 18 months.", source: "praying-mantis-cost-guide" },
        { label: "Adult size", value: "0.5 to 6 inches (1 to 15 cm) depending on species." },
        { label: "If you get an ootheca", value: "Dozens to hundreds of nymphs hatch within an hour or two of each other, and they eat their siblings. Individual containers and a fruit fly culture are ready before the hatch, not after.", source: "praying-mantis-ootheca-guide" },
        { label: "Pre-molt signs", value: "Off food, dulled color, stillness. Not illness, and not the moment to intervene; leave the shed skin where it falls until the animal has hardened.", source: "invertebrate-molting-guide" },
      ],
    },
    emergencyCard: {
      source: "praying-mantis-health-issues-guide",
      heading: "Check humidity and the ceiling first, then act on these today. Exotic vets rarely treat invertebrates.",
      callNow: [
        "An incomplete shed, or limbs that come out twisted or stuck",
        "A mantis struggling and not progressing during a molt",
        "A mantis that has fallen mid-molt, or lost its grip on the perch",
        "A crooked or deformed limb after a molt, which can make hunting difficult",
        "Mold in the enclosure, or a mantis declining in a tank that is being over-misted",
      ],
      vetLine: "Low humidity drives the mismolts that cause most mantis deaths; high humidity invites mold and infection instead. Regurgitation is usually overfeeding, not illness. A mantis with a crooked limb may need hand-feeding with fine tongs. Little can be done once a molt has failed.",
    },
    routes: [
      { slug: "praying-mantis-cost-guide", line: "$15 to $35 for a common species, $85 to $145 for the setup around it, and the lifespan that changes what you are buying." },
      { slug: "praying-mantis-tank-setup-guide", line: "8 by 8 by 12 as a floor, the perch drop that decides a molt, humidity by species, and what live prey to offer when." },
      { slug: "praying-mantis-handling-guide", line: "Walk it onto your hand, keep the door shut, and the pre-molt window when you do not touch it at all." },
      { slug: "praying-mantis-feeding-guide", line: "Live prey a third of its length every other day, fruit flies to flies and roaches by stage, leftovers out, and the pre-molt refusal that is normal." },
      { slug: "praying-mantis-health-issues-guide", line: "Mismolt, which is most of it, plus dehydration, the opposite mistake, and why going off food is usually fine." },
      { slug: "praying-mantis-enrichment-guide", line: "Why the only enrichment number that matters is a height, what the ceiling has to be, and the space to leave empty." },
      { slug: "praying-mantis-ootheca-guide", line: "What an egg case is, whether a lone female can lay one, and what to have ready before dozens of nymphs arrive." },
    ],
    buyList: [
      "Tall enclosure, at least 8 by 8 by 12 inches for an adult",
      "Mesh, screen or rough material at the top to grip during a molt",
      "Climbing branch that reaches the lid, which is also the molting perch",
      "Coconut fiber, soil, bark or paper towel substrate",
      "Fine mist spray bottle",
      "Fine-tip feeding tongs",
      "Digital thermometer and hygrometer",
      "Fruit fly culture for a nymph, or bottle flies and small crickets for an adult",
      "A vented 32-ounce deli cup, if you are starting with a nymph",
    ],
    faqs: [
      { q: "Can mantids be kept together?", a: "No. They are cannibalistic and will eat each other at any size difference and often at none. Solo housing is the only sensible default outside of deliberate, supervised breeding." },
      { q: "What happens if it is too short?", a: "The animal drops before it is fully out of the old skin, and a mantis that lands part-molted usually ends up with deformed limbs or dies. Failed molts are the leading cause of death in captive mantids and most of them are enclosure geometry." },
      { q: "How long do praying mantises live, and how does that affect budgeting?", a: "Just 6 to 12 months for most kept species: Chinese mantises toward 8 to 12, African mantises closer to 6 to 9, with females typically outliving males. A few species reach around 18 months under excellent care. That makes it a very short commitment, closer to a garden project in length." },
    ],
  },
  {
    id: "stick-insect",
    name: "Stick Insect",
    emoji: "🌿",
    difficulty: "Self-Sufficient",
    petType: "Invertebrates",
    image: "/assets/guides/stick-insect.jpg",
    tagline: "The master of disguise that is literally a twig with legs!",
    seoTitle: "Stick Insect Care Guide: Permits, Setup, and Feeding",
    seoDescription: "Before buying a stick insect: the federal permit hobbyists cannot get and the native species that skip it. Then a tall enclosure, a mesh lid, and host plants.",
    funFact: "Stick insects are parthenogenetic: females can reproduce without males and lay fertile eggs throughout their lives. The eggs of some species can remain viable in soil for years, hatching after the mother is long dead, mimicking plant seeds so perfectly that ants carry them underground.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pesticides and the outage plan cite the shared
    // invertebrate guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the stick insect set test (docs/READER_REVIEWS.md),
    // rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    //
    // The legality line is why this hub graded C+. It said "They are legal,
    // widely available, cheap, hardy" while the cost guide on the same site
    // says keeping a non-native species technically needs a USDA APHIS permit
    // that hobbyists cannot obtain. The reader called it the one contradiction
    // that changes whether a person buys, and the permit is now the first row.
    //
    // Also retired rather than moved: a 30x30x45 cm enclosure against the
    // setup guide's 8x8x12 inches; 68 to 80F against 63 to 77F; 50 to 70%
    // humidity, rising to 70 to 80% for tropicals, against the setup guide's
    // 60 to 80% for tropicals; a mesh enclosure at $25 to $50 against the cost
    // guide's $60 to $70; a checklist line reading "House species separately"
    // next to an article subtitled "And Why You Can Keep More Than One"; and
    // two molt durations on one page, 20 to 60 minutes in one section and 30
    // minutes to over an hour in another. No deep dive states a molt duration,
    // so that figure is retired rather than moved, and it is filed as a gap in
    // docs/READER_LOG.md.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "The permit, first", value: "Non-native species, the common Indian and Vietnamese ones included, technically require a USDA APHIS permit that hobbyists cannot get. Only species native to and collected in your own state are clearly legal without one, and releasing any stick insect or its eggs is prohibited.", source: "stick-insect-cost-guide" },
        { label: "Budget", value: "A few dollars a nymph for common species, often free from keepers, while rare giants can pass $1,000. Setup roughly $77 to $98, then almost nothing: foraged cuttings and water for misting.", source: "stick-insect-cost-guide" },
        { label: "Lifespan", value: "Around a year: 4 to 10 months as a nymph, then 5 to 12 as an adult. Females, which is what hobby stock mostly is, often reach 18 months.", source: "stick-insect-cost-guide" },
        { label: "Adult size", value: "1 to 22 inches (2 to 55 cm) depending on species." },
        { label: "Enclosure", value: "Length and width at least twice the adult's body length, height at least three times, since height is what allows a molt. A single Indian stick insect does fine in about 8 by 8 by 12 inches; a group or a larger species needs more.", source: "stick-insect-tank-setup-guide" },
        { label: "The mesh top", value: "Essential. They hang from the ceiling to molt, and shedding from mesh succeeds far more reliably than from a branch or smooth glass.", source: "stick-insect-tank-setup-guide" },
        { label: "Temperature", value: "Room temperature, roughly 63 to 77°F, for Indian stick insects; tropical species run warmer. Any bulb goes away from the mesh where the insect hangs, and off at night.", source: "stick-insect-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80% for tropical species, far less fussy for Indian ones. Daily light misting with dechlorinated or distilled water over an inch or two of coir, peat, or paper towel, and a hygrometer.", source: "stick-insect-tank-setup-guide" },
        { label: "Food", value: "Leaves, and nothing else. Washed bramble suits almost every kept species; Indian stick insects also take privet and ivy, and rose, hawthorn, oak, and eucalyptus each suit others. Match the plant to the species you have.", source: "stick-insect-tank-setup-guide" },
        { label: "Keeping the leaves alive", value: "Cut stems standing in a jar of water stay good for days. Block the jar's opening so a nymph cannot fall in and drown.", source: "stick-insect-tank-setup-guide" },
        { label: "Water", value: "They drink droplets from misting, not from a dish, and an open reservoir drowns small nymphs.", source: "stick-insect-health-issues-guide" },
        { label: "Failed molts", value: "The single biggest risk, from too little vertical space or low humidity in the days before. It cannot be treated after the fact; the enclosure height and the misting are the whole prevention.", source: "stick-insect-health-issues-guide" },
        { label: "Mold", value: "From an enclosure too damp with poor airflow. Ventilate and change the substrate about weekly.", source: "stick-insect-health-issues-guide" },
        { label: "Handling", value: "Grasp the body or thorax, never a leg: they drop legs to escape, and an adult's lost leg is permanent. A few large species pinch if not used to hands. A dropped leg, a rigid drop, or a defensive scent all mean the session was too rough.", source: "stick-insect-handling-guide" },
        { label: "You will get eggs", value: "Indian and Vietnamese stick insects reproduce without a male. One female founds a colony on her own, and none of it can be released.", source: "stick-insect-handling-guide" },
        { label: "More than one", value: "Herbivorous and non-aggressive, so groups work. Overcrowding shows as missing legs and antennae knocked off during molts: thin the group or enlarge the enclosure.", source: "stick-insect-enrichment-guide" },
        { label: "Bug spray", value: "Every household insecticide is designed to kill arthropods, and foraged foliage carries the same risk from outside.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "A power cut", value: "It lives at room temperature, so an outage is rarely the emergency it is for a reptile or a fish tank.", source: "invertebrate-emergency-travel-shipping-guide" },
      ],
    },
    emergencyCard: {
      source: "stick-insect-health-issues-guide",
      heading: "Check the enclosure height and humidity first, then act on these today. No vet care exists for this animal.",
      callNow: [
        "A shed that does not complete, leaving deformity, which cannot be treated after the fact",
        "A nymph in the water jar that keeps the cut foliage fresh: block the opening",
        "Mold, from an enclosure kept too damp with poor ventilation or infrequent cleaning",
        "A lost leg, which is rough handling; an adult's lost leg is permanent",
      ],
      vetLine: "Prevention through correct enclosure height and misting, tracked with a digital hygrometer rather than guesswork, is the only effective approach.",
    },
    routes: [
      { slug: "stick-insect-cost-guide", line: "The APHIS permit a hobbyist cannot get, a few dollars a nymph, and $1,000 for a rare giant." },
      { slug: "stick-insect-tank-setup-guide", line: "Three times body length in height, 63 to 77F, bramble and the other host plants, and why the lid is mesh." },
      { slug: "stick-insect-feeding-guide", line: "Bramble for nearly every species, the plant list by species, cuttings in a covered jar, washed leaves, and an evening mist to drink." },
      { slug: "stick-insect-handling-guide", line: "Body not leg, the three stress signals including playing dead, and why a colony is fine here." },
      { slug: "stick-insect-health-issues-guide", line: "Molting failure, the drowning risk in the cutting jar, mold, and the leg that never grows back." },
      { slug: "stick-insect-enrichment-guide", line: "A short guide, honestly: height, fresh leaves, humidity, and what the tarantula study does not transfer." },
    ],
    buyList: [
      "A tall mesh-topped enclosure, at least three times body length in height",
      "Coconut coir, peat moss or plain paper towel for substrate",
      "A fine mist spray bottle and dechlorinated or distilled water",
      "A digital hygrometer",
      "A water container for cut stems, with the opening blocked",
      "A host plant you can actually get year round, bramble for most species",
      "A small heat or grow light, only if the room runs cold or dark",
    ],
    faqs: [
      { q: "Do you need a permit to keep a stick insect in the US?", a: "For non-native species, yes. The Indian and Vietnamese stick insects sold in the hobby need a USDA APHIS permit that requires an inspected containment facility, so individual pet owners essentially never get one. A species native to your state and collected there is the clearly legal route. Releasing any stick insect or its eggs is prohibited either way." },
      { q: "What size enclosure does a stick insect need?", a: "Length and width at least twice the adult's body length, height at least three times it. Height is what matters most, since that is what allows a proper molt. One Indian stick insect is fine at roughly 8 by 8 by 12 inches; a group or a larger species needs more." },
      { q: "Can you keep more than one stick insect together?", a: "Yes, generally. Unlike the praying mantis, which is solitary and cannibalistic, stick insects are herbivorous and non-aggressive toward each other. Indian stick insects specifically can be housed in groups without issue." },
    ],
  },
  {
    id: "tarantula",
    name: "Tarantula",
    emoji: "🕷️",
    difficulty: "Beginner",
    petType: "Invertebrates",
    image: "/assets/guides/tarantula.jpg",
    tagline: "The misunderstood gentle giant of the spider world, a surprisingly low-maintenance pet!",
    seoTitle: "Tarantula Care Guide: Enclosure, Feeding, and Molting",
    seoDescription: "Tarantula care built around the fall risk: a wide, low enclosure, no mesh lids, feeding by age, and how to tell normal fasting from a real health problem.",
    funFact: "Tarantulas can live extraordinarily long lives. Females of some species (like the Mexican Red Knee) can live 25 to 30 years in captivity, while males rarely live past 10. A female tarantula may outlive your dog.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Power outage cites the
    // shared invertebrate emergency guide in the sidebar's Health and More
    // list. Reconciled 2026-09-09 after the tarantula set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Enclosure", value: "Horizontal, wider than tall, to limit fall risk. A reasonable adult minimum is around 20x10x10 inches, roughly a 10-gallon, sized to about three times the tarantula's leg span. Keep overall height under about 12 inches.", source: "tarantula-tank-setup-guide" },
        { label: "Substrate", value: "At least 3 inches of coconut fiber, peat, or organic pesticide-free soil, filling roughly half to two-thirds of the enclosure.", source: "tarantula-tank-setup-guide" },
        { label: "Lid", value: "A secure lid, but never mesh, a tarantula's feet can get caught in it and cause real injury. Acrylic with drilled ventilation holes is the better choice.", source: "tarantula-tank-setup-guide" },
        { label: "Humidity", value: "Published targets run from 40 to 60% up to 65 to 75%. Use the lower end for dry-adapted species like the Chilean rose hair. A reliable water dish plus lightly moistened substrate holds it more steadily than heavy misting.", source: "tarantula-tank-setup-guide" },
        { label: "Housing", value: "One tarantula per enclosure. Most species are solitary and cannibalistic, and cohabitation isn't workable regardless of enclosure size.", source: "tarantula-tank-setup-guide" },
        { label: "Feeding schedule", value: "Slings every 2 to 3 days, juveniles roughly every week to two weeks, adults every 1 to 2 weeks, sometimes far less for a slow-metabolism species.", source: "tarantula-feeding-guide" },
        { label: "Not eating", value: "Usually not an emergency. A plump, active spider refusing food for weeks is typically just in premolt. For juveniles specifically, refusing food for more than 6 to 8 weeks alongside weight loss or lethargy is worth a vet consult.", source: "tarantula-feeding-guide" },
        { label: "Handling", value: "Mostly, no. Best kept as a look, don't touch pet: a fall can fatally injure the spider, and a hand, shoulder, or couch cushion is enough height for that.", source: "tarantula-handling-guide" },
        { label: "Budget", value: "$25 to $100 for the spider (common beginner species), $70 to $300 for a complete setup, and $5 to $15 a month after that.", source: "tarantula-cost-guide" },
        { label: "Adult size", value: "2 to 12 inch leg span, depending on species." },
        { label: "Lifespan", value: "15 to 20 years or more for a female Chilean rose hair, and about 5 for a male, 10 at the outside. A female is a long-term commitment, though the ongoing budget stays very small the whole time.", source: "tarantula-cost-guide" },
        { label: "Power outage", value: "A non-event for most tarantulas at home; they don't need supplemental heat in a typical room and can go without food far longer than most pets. The real risk in this corner of pet keeping is in a car or a shipping box, not a home outage.", source: "invertebrate-emergency-travel-shipping-guide" },
        { label: "Quarantine", value: "At least three months apart from any other invertebrate, with its own tools. Long enough for mites, mold and an import's nematodes to show while the setup is still simple.", source: "invertebrate-quarantine-cleaning-and-escapes-guide" },
        { label: "Cleaning and escapes", value: "Uneaten prey out within 24 hours, remains weekly, substrate every 6 to 12 months or at the first mold. An escapee hides low, dark and warm: search at night with a flashlight and bait with water.", source: "invertebrate-quarantine-cleaning-and-escapes-guide" },
      ],
    },
    emergencyCard: {
      source: "tarantula-health-issues-guide",
      heading: "Check the water dish and humidity first, then act on these today. Vet care for tarantulas is limited.",
      callNow: [
        "A shriveled, wrinkled abdomen with lethargy or legs curling tightly under the body (dehydration)",
        "A molt that looks stuck or incomplete",
        "A ruptured abdomen or hemolymph visibly leaking from an injury",
        "Refusing food for more than a month, especially alongside dehydration signs",
      ],
      vetLine: "Prevention matters more than treatment. A shallow water dish and correct humidity prevent most dehydration; never disturb, handle, or feed a molting tarantula.",
    },
    routes: [
      { slug: "tarantula-cost-guide", line: "$25 to $100 for the spider, $70 to $300 for setup, and why the ongoing budget stays small for decades." },
      { slug: "tarantula-handling-guide", line: "Why the answer is almost always no, the real fall risk, and New World versus Old World defenses." },
      { slug: "tarantula-health-issues-guide", line: "Dehydration, stuck molts, injury, and the difference between normal fasting and a real problem." },
      { slug: "tarantula-tank-setup-guide", line: "Enclosure shape and size, substrate depth, the humidity debate, and why mesh lids are out." },
      { slug: "tarantula-feeding-guide", line: "Schedule by life stage, what they eat and what to skip, why a weeks-long premolt fast is normal, and the shriveled abdomen that is the real emergency." },
      { slug: "tarantula-enrichment-guide", line: "What the research on enclosure complexity actually found, and what it didn't." },
      { slug: "tarantula-legal-guide", line: "The species question most states never ask, and where a specific tarantula is restricted regardless of the genus." },
    ],
    buyList: [
      "20x10x10 inch enclosure or larger, wider than tall",
      "Coconut fiber, peat, or organic pesticide-free soil substrate",
      "A secure acrylic lid with drilled ventilation (never mesh)",
      "A hide (cork bark, half-log, or a broken terracotta pot)",
      "A shallow water dish",
      "Live feeder insects (crickets or dubia roaches)",
      "Digital thermometer/hygrometer combo",
    ],
    faqs: [
      { q: "How much does a tarantula cost upfront?", a: "The spider itself runs $25 to $100 for common beginner species, a curly hair or pink toe typically lands at $30 to $40 and a Chilean rose hair nearer $60 to $70. Add the enclosure, substrate, hide, decor, and a water dish, and most first-time setups land in the $70 to $300 range before the spider itself." },
      { q: "What size enclosure does a pet tarantula need?", a: "About 20 by 10 by 10 inches for an adult, roughly a 10-gallon, sized to around three times the leg span. Keep it low, under about 12 inches tall, since a fall is a genuine danger for most tarantulas." },
      { q: "Can you hold a tarantula?", a: "Mostly, no. Most tarantulas, including the Chilean rose hair, are best kept as strictly look, don't touch pets, since a fall can be fatal to the spider and its defenses can hurt you." },
    ],
  },
];
