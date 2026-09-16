export const invertebrateGuides = [
  {
    id: "amano-shrimp",
    name: "Amano Shrimp",
    emoji: "🦐",
    difficulty: "Beginner/Intermediate",
    petType: "Invertebrates",
    image: "/assets/guides/amano-shrimp.jpg",
    tagline: "The champion algae eater that can't reproduce in your freshwater tank, no matter how long you keep it!",
    funFact: "Amano shrimp can't reproduce in a home freshwater aquarium at all. Females carry eggs and release free-swimming larvae just fine, but those larvae need brackish to full-strength salt water to survive past their first few hours of life, then must be raised through several weeks of saltwater development before metamorphosing into juveniles that can return to fresh water. Because of this, almost every Amano shrimp sold in stores today is wild-caught, not captive-bred.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Cycling, quarantine and the sick-tank check cite
    // the shared aquarium guides in the sidebar's Health and More list.
    // Reconciled 2026-09-15 after the amano shrimp set test
    // (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Cycling", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. All three, not just one.", source: "aquarium-cycling-guide" },
        { label: "Tank size", value: "A 10-gallon tank is a practical minimum. One shrimp per 2 gallons, so five in a 10-gallon.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Temperature", value: "64 to 82°F covers the tolerated range, but shrimp kept toward the cooler two-thirds of that band, roughly the upper 60s to mid-70s, tend to live longer, since warmer water speeds up metabolism and shortens lifespan.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 6.0 to 7.5, with carbonate hardness in the 2 to 8 dKH range as a reasonable target alongside it. A working range of roughly 4 to 15 dGH, with many keepers targeting 6 to 8 dGH specifically, because that is what supplies the calcium and other minerals this species needs to build a new shell every molt.", source: "amano-shrimp-tank-setup-guide" },
        { label: "The lid and the filter", value: "A tight-fitting glass or acrylic lid, with any gaps sealed. A sponge filter matters because it blocks a standard intake from pulling in or injuring a shrimp, particularly one that has just molted and is a weak swimmer for a short while.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Feeding", value: "They take on hair algae and thread algae readily, and unlike most fish and snails they'll also pick at black beard algae. Algae is a starting food supply, not a renewable one, and a hungry group works through it faster than most people expect. If the tank is clean, supplement. Lightly, and only every couple of days rather than heavily every day.", source: "amano-shrimp-feeding-guide" },
        { label: "Copper", value: "A 2025 study put the acute lethal threshold at 1.15 mg/L, and shrimp pre-exposed below that lost their normal ability to detect food odors. Common copper-based fish medications and some plant fertilizers run 0.15 to 0.20 mg/L, squarely inside the range where shrimp show measurable harm.", source: "amano-shrimp-health-issues-guide" },
        { label: "Molting", value: "Most molting failures trace back to unstable water parameters, particularly swings in GH and KH around a water change, and a diet short on calcium. There is no treatment once one starts failing.", source: "amano-shrimp-health-issues-guide" },
        { label: "Quarantine and acclimation", value: "Two to four weeks in a separate, already-cycled tank before a new amano shrimp joins an established display. Roughly one to two hours, at one to two drops per second, running a slow siphon from the destination tank into the transport container.", source: "amano-shrimp-handling-guide" },
        { label: "Budget", value: "Roughly $5 to $12 each, cheaper per animal in a group. The core equipment runs roughly $60 to $150: a 10-gallon tank at $18 to $30, a heater at $18 to $30, a sponge filter at $8 to $15, and driftwood or plants for grazing at $15 to $30.", source: "amano-shrimp-cost-guide" },
        { label: "Adult size", value: "Up to about 2 inches (5 cm); large for a dwarf shrimp, though bamboo and vampire shrimp are bigger still." },
        { label: "Lifespan", value: "2 to 3 years in captivity, with shrimp kept toward the cooler end of their comfortable temperature range sometimes living longer still.", source: "amano-shrimp-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "amano-shrimp-health-issues-guide",
      callNow: [
        "A shell split all the way around the body instead of opening cleanly at the head (a failed molt, the White Ring of Death). There is no direct medical treatment once a molt starts failing; the fix is prevention, stable mineral content and a calcium-inclusive diet",
        "Any copper-based fish medication or plant fertilizer about to go near the tank. Check the label first: the formulations around 0.15 to 0.20 mg/L free copper that are considered safe for treating fish sit squarely inside the range where shrimp show measurable harm",
        "A whole group dying suddenly with no obvious warning signs. The honest first question isn't what disease this is, it's what changed in the water: a copper exposure, an ammonia or pH swing, a rushed water change",
        "Shrimp that have lost their normal ability to detect food odors, the sublethal copper harm that shows up well before outright death",
      ],
      vetLine: "Invertebrates lack the adaptive immune system vertebrates rely on and depend instead on more basic, innate defenses, so a healthy shrimp doesn't usually just catch an illness out of nowhere the way a fish might. Infections and parasites do happen, but stress from poor water quality is usually what opens the door rather than a stable shrimp getting unlucky. Test your water first when something goes wrong.",
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
      "A separate cycled tank for quarantine",
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
    funFact: "Every color of cherry shrimp in the hobby, from clear to fire-engine red to jet black, is the exact same species. Neocaridina davidi's natural wild coloring is actually a dull, camouflaged greenish-brown; decades of selective breeding by hobbyists produced the entire modern color palette, right down to the graded 'Fire Red' and 'Painted Fire Red' tiers sold today.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Filter maintenance, water chemistry
    // and summer cooling cite the shared aquarium guides in the sidebar's
    // Health and More list. Reconciled 2026-09-15 after the cherry shrimp set
    // test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Tank size", value: "5 gallons is a commonly cited practical minimum. Shrimp can technically survive in a 2-gallon nano tank, but 10 gallons or larger suits a healthy, self-sustaining breeding colony, since more water volume buffers the small, constant parameter shifts a growing colony naturally causes. A sponge filter, or a standard filter with its intake covered by a pre-filter sponge.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Mature, not just cycled", value: "A tank needs to be fully mature, not just cycled, before shrimp go in: the biofilm a shrimp grazes takes longer to arrive than the bacteria that clear ammonia. Ammonia and nitrite should both read zero at all times.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Water hardness", value: "The floor is a GH of 6 degrees (about 110 ppm) and a KH of 2 degrees (about 40 ppm). The tighter target, and the one that most reliably supports a full, hard molt, is roughly 6 to 8 dGH and 2 to 4 dKH alongside a pH of 6.5 to 7.5.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Temperature", value: "A comfortable range of 60 to 82°F, with 72 to 76°F optimal, and an outer tolerated range as wide as 57 to 86°F.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Water changes", value: "Limit them to roughly 10% a week, or 20% every two weeks.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Grazing surface and group size", value: "Dense live plants or moss, driftwood and leaf litter. More than a handful. Cherry shrimp are more active, more visible and more confident in a colony, and ten or more is a sensible starting point in a tank of reasonable size.", source: "cherry-shrimp-enrichment-guide" },
        { label: "Feeding", value: "A piece of food no larger than a pea, or a quarter of a small wafer, is enough for a colony of 10 to 20 shrimp. A quality sinking food, occasional blanched vegetables, and stable water hardness cover most of that need without a dedicated supplement.", source: "cherry-shrimp-feeding-guide" },
        { label: "Copper", value: "Shrimp tolerate almost no copper at all, at concentrations that wouldn't register as a concern for most fish. A 2014 toxicity study on a related freshwater shrimp found a 96-hour lethal concentration of just 0.0313 mg/L, by far the most toxic of five metals tested, with a proposed biologically safe target closer to 0.003 mg/L. Many common fish medications, some plant fertilizers, and pesticide treatments used on store-bought aquarium plants before sale.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Acclimation and quarantine", value: "A slow drip rather than a quick float-and-dump, roughly one drop per one to two seconds until the water volume in the acclimation container has doubled, which takes 60 to 90 minutes for most home setups. At least two weeks in a separate, established tank before adding new shrimp to an existing colony, longer if you want extra confidence.", source: "cherry-shrimp-handling-guide" },
        { label: "Budget", value: "Standard grades cluster closer to $4 to $5 a shrimp, and the deepest-colored grades run $6 to $8. Roughly $45 to $110.", source: "cherry-shrimp-cost-guide" },
        { label: "Lifespan", value: "Up to 2 years under ideal, stable conditions, though shrimp in a typical home aquarium often average closer to just the first year.", source: "cherry-shrimp-cost-guide" },
        { label: "Adult size", value: "Up to about 1.5 inches (4 cm)." },
      ],
    },
    emergencyCard: {
      source: "cherry-shrimp-health-issues-guide",
      callNow: [
        "A complete white band around the middle of the shrimp's body instead of a clean split at the head, the \"white ring of death\"",
        "A shrimp whose body has visibly separated from its shell",
        "Stillness and hiding that lasts well beyond a few days after a molt",
        "Sudden losses across the colony with no obvious cause",
        "A shrimp that looks pale or ashy",
      ],
      vetLine: "There's essentially no practical veterinary care available for an animal this small, so this list is entirely about prevention. Nearly everything on it traces back to water stability and mineral content, exactly what a mature, properly cycled tank with gradual water changes prevents. A failed molt is usually fatal once it happens, which makes stable GH, gradual water changes and a properly fed colony the real point of leverage. A water test kit is the tool that actually tells you which of these causes you're dealing with rather than guessing.",
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
    tagline: "One of the largest scorpions in the world, and one of the least venomous pet scorpions!",
    funFact: "Emperor scorpions fluoresce a brilliant blue-green under UV/black light. Scientists aren't entirely sure why, but the compound responsible sits in the hyaline layer of their exoskeleton, and scorpions do this under natural UV from moonlight too, not just an artificial black light.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size and lifespan come from the
    // encyclopedia entry. Rehousing, pesticides and the emergency plan cite the
    // shared invertebrate guides in the sidebar's Health and More list. Built
    // 2026-09-15 for the emperor scorpion set test (docs/READER_REVIEWS.md),
    // which found the old hub wrong against its own deep dives on substrate
    // depth, humidity, temperature, adult and juvenile feeding frequency, the
    // fasting window, prey size, and enclosure size, and telling readers to feed
    // with tongs while the enrichment guide says to release prey and let the
    // animal hunt.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Banned in New York City, Hawaii, and the District of Columbia, permit-only in Maine and Rhode Island, unclear in Idaho and Arkansas, and named as legal in Montana. Check before buying.", source: "emperor-scorpion-legal-guide" },
        { label: "Enclosure size", value: "A 10-gallon, roughly 20x10x12 inches, is the accepted minimum for one adult. The lid has to be secure and tight-fitting: these are capable climbers and genuine escape artists.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Heat, humidity and substrate", value: "Target 70 to 90%, and 75 to 80% is the practical sweet spot. Keep the substrate damp, not soggy, and mist as needed, often daily or every other day. An ambient range of 75 to 85°F is the target, with 70 to 90°F as the outer limits as long as a gradient exists. 5 to 6 inches minimum, and deeper is better, because the species uses that depth to burrow rather than decorate. Coco fiber, peat, soil-based mixes, or commercial products all work, kept damp but well-aerated. No UVB is required.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Hides", value: "In a communal setup this is not decoration, it is the mechanism that makes grouping work.", source: "emperor-scorpion-enrichment-guide" },
        { label: "Feeding", value: "The whole diet is gut-loaded feeder insects. Juveniles and nymphs every 2 to 4 days, since they're growing and more voracious. Adults once a week is standard, sometimes 2 to 3 insects. Keep prey no larger than the abdomen. This species can safely fast for a month or two, particularly before a molt, and refusing food in that window is normal. Always remove any uneaten prey within 24 hours. Supplement the food, not the scorpion: gut-load feeders for at least 24 hours on fresh produce or a commercial gut-load before offering them. Never feed wild-caught insects, pesticide and parasite risk are both real concerns. Fireflies are genuinely toxic to scorpions and must never be offered.", source: "emperor-scorpion-feeding-guide" },
        { label: "How to offer it", value: "Release live prey in the evening rather than presenting it with tongs, and let the animal hunt.", source: "emperor-scorpion-enrichment-guide" },
        { label: "Handling", value: "Falls are the leading concern for the scorpion, a drop can cause serious injury. If handling is genuinely necessary, use long forceps with soft padding, or let the scorpion walk onto a tool or your hand over a soft, low surface.", source: "emperor-scorpion-handling-guide" },
        { label: "Molting", value: "Remove live prey and avoid handling entirely for days to weeks around a molt.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Budget", value: "$25 to $100 for a captive-bred specimen, with juveniles toward the lower end and larger adults or proven breeders toward the higher end. Roughly $80 to $250 for the setup before the scorpion.", source: "emperor-scorpion-cost-guide" },
        { label: "Lifespan", value: "5 to 8 years in captivity is the usual figure, and the full reported range runs 4 to 9.", source: "emperor-scorpion-cost-guide" },
        { label: "Adult size", value: "7 to 8 inches (18 to 20 cm)." },
      ],
    },
    emergencyCard: {
      source: "emperor-scorpion-health-issues-guide",
      callNow: [
        "A stuck molt: difficulty shedding the old exoskeleton, stuck pieces of shed, and lethargy around molt time. Incomplete molts often need experienced intervention and are frequently fatal without it",
        "Severe dehydration: lethargy, a shriveled appearance, sunken features, and reduced activity. Advanced cases can be fatal",
        "Open wounds showing signs of infection",
        "A complete refusal to eat for an extended period after a molt",
      ],
      vetLine: "Veterinary options for invertebrates remain genuinely limited, which is exactly why prevention through correct humidity and substrate depth is the primary strategy here, not a backup plan. Mild dehydration, minor mites, and early humidity-related lethargy are generally manageable once husbandry is corrected.",
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
      "Under-tank heat mat with a thermostat",
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
    tagline: "The nearly transparent, famously cheap cleanup crew that's sold as fish food as often as it's kept as a pet!",
    funFact: "Despite looking like a smaller, cheaper cousin of the cherry and Amano shrimp sold right next to them in the store, ghost shrimp aren't closely related to either. They belong to the family Palaemonidae, while cherry and Amano shrimp both belong to the unrelated family Atyidae, and each lineage independently evolved from marine ancestors into fresh water at a different point in history. Their famous hardiness is exactly why they're sold cheaply in bulk as feeder shrimp for larger fish, even though plenty of keepers keep them purely as pets.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Cycling, filtration, water chemistry,
    // summer cooling and the molting guide cite the shared guides in the
    // sidebar's Health and More list. Reconciled 2026-09-15 after the ghost
    // shrimp set test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Where yours came from", value: "Feeder-tank stress, the leading cause of early losses. Watch for lethargy, staying hidden far more than the first day or two of normal settling-in, refusing food, and rapid, unexplained losses within a small group shortly after purchase.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Recovery first", value: "Acclimate slowly, then give them a quiet, stable, planted tank and low expectations for the first two weeks. Leave discarded shells in the tank, since the shrimp eat them and recover the minerals.", source: "ghost-shrimp-enrichment-guide" },
        { label: "The tank", value: "5 gallons is the workable minimum according to The Shrimp Farm, and 10 gallons gives a small colony more stability and room to forage. 72 to 82°F is the commonly cited comfortable range, with tolerance stretching noticeably wider on both ends. Aim for pH 7 to 8 and general hardness of 3 to 15 dGH. A gentle sponge filter is the standard, sensible choice.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Copper", value: "Commonly cited safety thresholds put copper at roughly 0.03 mg/L or lower as the ceiling for invertebrates, and copper-based fish medications, some plant fertilizers, and old copper plumbing are all realistic exposure routes. Confirm any medication or fertilizer is explicitly invertebrate-safe before using it.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Molting", value: "Most failures trace back to water parameters and diet, specifically inadequate calcium and general hardness leaving a new shell unable to harden. It's frequently fatal.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Feeding", value: "A small amount every day or two is plenty for a modestly stocked tank, since ghost shrimp scavenge a meaningful share of their food on their own. Some, but they're better described as an all-purpose detritivore than a dedicated algae specialist. No dedicated supplement is required. A real and documented risk, not a rare exception. Dense hiding cover and generous, consistent feeding both measurably reduce how often it happens.", source: "ghost-shrimp-feeding-guide" },
        { label: "Getting them in", value: "A slow drip, commonly run for 1 to 2 hours, lets a shrimp adjust gradually instead of being shocked by an abrupt change, and it meaningfully reduces the risk of a failed molt or death shortly after introduction. A 2 to 4 week quarantine in a separate tank before adding new shrimp to an established one is the standard precaution, long enough for anything the shrimp was carrying to show itself before it can spread.", source: "ghost-shrimp-handling-guide" },
        { label: "Budget", value: "Often well under $1 each in bulk as feeder stock, and roughly $1 to $3 each bought individually as pets. Core equipment runs roughly $40 to $130, and ongoing costs are minimal, since ghost shrimp scavenge a meaningful share of their own food.", source: "ghost-shrimp-cost-guide" },
        { label: "Lifespan", value: "Roughly one year on average in a home aquarium is what most sources converge on, with some individuals reaching closer to two years under good, stable conditions.", source: "ghost-shrimp-cost-guide" },
        { label: "Cycling, the finish line", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. All three, not just one.", source: "aquarium-cycling-guide" },
      ],
    },
    emergencyCard: {
      source: "ghost-shrimp-health-issues-guide",
      callNow: [
        "Lethargy, staying hidden far more than the first day or two of normal settling-in, refusing food, and rapid, unexplained losses within a small group shortly after purchase",
        "A solid band that forms around the shrimp's body where the shell should split cleanly at the head, trapping the animal between old and new exoskeleton",
        "A copper-based medication, or a fertilizer or algae treatment not explicitly labeled invertebrate-safe, about to go near the tank",
      ],
      vetLine: "Nearly everything on this list traces back to four habits: quarantine new arrivals, confirm the tank is cycled before stocking, keep copper at zero, and maintain stable water chemistry for reliable molting. A water conditioner on every water change and a water test kit to confirm ammonia and nitrite read zero before stocking prevent far more than anything applied after symptoms show up.",
    },
    routes: [
      { slug: "ghost-shrimp-cost-guide", line: "Under $1 as feeder stock against $1 to $3 as a pet, and why the cheapest source is rarely the healthiest." },
      { slug: "ghost-shrimp-tank-setup-guide", line: "5 gallons as a floor, 72 to 82F, pH 7 to 8, and the sponge filter that exists for the intake." },
      { slug: "ghost-shrimp-feeding-guide", line: "A wafer every day or two, why they are not an algae crew, and the cannibalism nobody warns about." },
      { slug: "ghost-shrimp-handling-guide", line: "Net rather than hands, drip for 1 to 2 hours, quarantine two to four weeks, and what stress looks like." },
      { slug: "ghost-shrimp-health-issues-guide", line: "Copper at 0.03 mg/L, the feeder-tank history behind most early losses, and the white ring of death." },
      { slug: "ghost-shrimp-enrichment-guide", line: "Recovery as the real enrichment, the decapod sentience review, and why one bag holds several species." },
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
      { q: "Why are ghost shrimp so sensitive to copper?", a: "Like all freshwater shrimp, their gills and exoskeleton absorb dissolved metals efficiently, and copper is toxic to them at concentrations that barely register for fish. Commonly cited safety thresholds put copper at roughly 0.03 mg/L or lower as the ceiling for invertebrates, and copper-based fish medications, some plant fertilizers, and old copper plumbing are all realistic exposure routes. Keep it as close to zero as possible and confirm any medication or fertilizer is explicitly invertebrate-safe before using it." },
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
    tagline: "The gentle detritivore that works as a living composting machine!",
    funFact: "Despite their name, millipedes do not have 1,000 legs. Most species have 40 to 400 legs. However, a species discovered in 2021 (Eumillipes persephone) was found 60 meters underground in Australia and has a record 1,306 legs, making it the only true millipede.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pesticides, rehousing first aid and the travel and
    // outage plan cite the shared invertebrate guides in the sidebar's Health
    // and More list. Reconciled 2026-09-15 after the giant millipede set test
    // (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Budget", value: "The millipede itself typically runs $75 to $150 or more, a real step up in price for an invertebrate, driven entirely by the supply situation rather than anything about the animal's care difficulty. Roughly $75 to $150 for the tank, substrate, leaf litter, a hygrometer, and a spray bottle.", source: "giant-millipede-cost-guide" },
        { label: "Legal, before you buy", value: "A USDA PPQ 526 permit applies federally, since millipedes fall under the federal plant pest definition.", source: "giant-millipede-legal-guide" },
        { label: "Enclosure", value: "A minimum of 10 to 15 gallons for one adult, with many keepers recommending something closer to a 36x18x18 inch enclosure, roughly a 40-gallon equivalent, or a 20 gallon long tank. A secure, tightly fitting lid is essential, millipedes are capable climbers and genuine escape artists. None required.", source: "giant-millipede-tank-setup-guide" },
        { label: "Heat, humidity and substrate", value: "72 to 80°F suits this species well, and normal room temperature is often sufficient without any additional heat source. 70 to 80%, achieved by keeping roughly a third of the substrate genuinely moist, misting once or twice daily, and ensuring good cross-ventilation to prevent mold and mite problems. 4 to 6 inches of pesticide-free organic topsoil mixed with coconut fiber, along with decaying hardwood and hardwood leaf litter, oak and beech both work well. Avoid softwoods like pine and cedar entirely, their resins are toxic to this species, and never use any substrate material that's been treated with pesticides.", source: "giant-millipede-tank-setup-guide" },
        { label: "Food and water", value: "The substrate is most of the diet. Fresh produce is a supplement on top of that: cucumber, carrot, sweet potato and leafy greens, plus small amounts of fruit such as apple, banana, melon or mango, offered every two to three days and taken back out before it molds. Stays in permanently instead of going in on a schedule, a cuttlebone or powdered calcium carbonate left on the substrate for the animal to gnaw when it needs it. A small shallow dish with a few pebbles dropped in so nothing drowns in it.", source: "giant-millipede-tank-setup-guide" },
        { label: "Handling", value: "Handle over a soft surface close to the ground, support the full body, and never grab from above, let the millipede walk onto your hand instead. Keep it away from your eyes and mouth, and wash your hands thoroughly after a session. Millipedes molt underground, a buried one must not be disturbed, and a molt may take several weeks.", source: "giant-millipede-handling-guide" },
        { label: "What kills them", value: "The number one cause of death in this species. Watch for a shriveled, sluggish appearance and dry, cracking segments along the body. Manageable early, raise humidity, moisten the substrate more deeply, and provide a shallow water dish. Often fatal, and caused by low humidity, poor nutrition, or disturbance during the vulnerable molting process. Never assist a molt or attempt to remove shed skin yourself, this can cause real harm.", source: "giant-millipede-health-issues-guide" },
        { label: "Lifespan", value: "5 to 7 years in the wild, and up to 10 years in captivity.", source: "giant-millipede-cost-guide" },
        { label: "Adult size", value: "10 to 15 inches (25 to 38 cm)." },
      ],
    },
    emergencyCard: {
      source: "giant-millipede-health-issues-guide",
      callNow: [
        "A shriveled, sluggish appearance and dry, cracking segments along the body",
        "A failed or incomplete molt, often fatal: never assist a molt or attempt to remove shed skin yourself, this can cause real harm",
        "Unusually frequent cleaning behavior, thrashing, or visible mite clusters concentrated near the head or legs",
        "A major crack in the exoskeleton, which calls for isolating the animal in a clean, simplified hospital enclosure while it recovers",
        "Dark lesions, which point to substrate that's swampy and poorly ventilated, worth correcting immediately",
        "A soft, weak-feeling exoskeleton, which points to calcium deficiency",
      ],
      vetLine: "Low humidity causes both the dehydration and failed molts that account for most serious health problems in this species. Excess wetness combined with poor airflow invites both mite overgrowth and necrotic lesions instead. And falls, entirely preventable through careful handling, cause most physical injuries. Balanced humidity, more than anything else, is the real key to this species' health.",
    },
    routes: [
      { slug: "giant-millipede-cost-guide", line: "$75 to $150 or more for the animal, the same again for setup, and the import rule behind the price." },
      { slug: "giant-millipede-tank-setup-guide", line: "10 to 15 gallons as a floor, 72 to 80F, 70 to 80%, the 4 to 6 inch substrate that is also the food, and why isopods stay out." },
      { slug: "giant-millipede-handling-guide", line: "Falls rather than bites, what the curl and the secretion mean, and when to leave a buried animal alone." },
      { slug: "giant-millipede-health-issues-guide", line: "Dehydration, failed molts, mites, and the humidity pattern sitting underneath all three." },
      { slug: "giant-millipede-enrichment-guide", line: "Why the substrate is the enrichment, what the tarantula housing study does and does not transfer, and the priority order." },
      { slug: "giant-millipede-legal-guide", line: "The 2006 import ban that never happened, the permit that is real, and the states that differ." },
    ],
    buyList: [
      "A 20 gallon long tank, or a 40-gallon breeder tank or tub",
      "Pesticide-free organic topsoil and coconut fiber for a 4 to 6 inch substrate",
      "Decaying hardwood and hardwood leaf litter, oak or beech",
      "Cuttlebone or crushed oyster shell, left in permanently",
      "A digital thermometer and hygrometer",
      "A fine mist spray bottle",
      "Cork bark and hides",
      "A small shallow water dish with a few pebbles in it",
      "A secure, tightly fitting lid",
    ],
    faqs: [
      { q: "Why does a giant millipede cost more than other invertebrates?", a: "Imports are under a USDA embargo, prompted by concerns about a potentially damaging mite species found on imported animals, and keeping one requires a plant pest permit. So the animals for sale in the US are captive-bred or older stock instead of fresh imports. Limited supply, not care difficulty, is what pushes the price up." },
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
    tagline: "The shell-swapping beach scavenger whose 'easy starter pet' reputation badly undersells what it actually needs!",
    funFact: "Hermit crabs don't grow their own shells - they spend their entire lives searching for, trying on, and trading empty snail shells as they grow, and will even form an orderly 'vacancy chain,' lining up by size to swap shells in turn when a larger one becomes available. In the wild, land hermit crabs can live 20 to 30+ years, though most pet hermit crabs sold in beach-town gift shops die within their first year from incorrect humidity and being kept alone.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Molting, pesticides, and
    // the power outage row cite the shared invertebrate guides in the sidebar's
    // Health and More list. Reconciled 2026-09-09 after the hermit crab set
    // test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Tank", value: "Use a glass terrarium, roughly a 10-gallon tank for 2 to 3 small crabs, more for larger crabs or bigger groups. Keep at least two crabs together, they're a genuinely social species.", source: "hermit-crab-tank-setup-guide" },
        { label: "Heat, humidity and substrate", value: "Aim for 75 to 85°F, with the warm side around 80°F. Never place a heat mat under the tank, heat rising up through deep substrate can be dangerous, even fatal, to a crab that's buried or molting underneath. Maintain 75 to 85% relative humidity. Monitor with a hygrometer, and maintain the range through a combination of moist substrate, a well-sealed lid, and a dedicated moss pit. Mix play sand and coconut fiber at roughly a 5:1 ratio, aiming for a 'sandcastle consistency' that holds a tunnel shape when packed. Depth is at least 6 inches, or about 3 times the height of your largest crab, since hermit crabs burrow to molt and need genuine room to do it.", source: "hermit-crab-tank-setup-guide" },
        { label: "Water and shells", value: "Two separate soakable water dishes, one with dechlorinated fresh water, one with marine saltwater made from an aquarium salt mix, never table salt. Offer multiple natural, unpainted shells per crab, ideally 3 to 5 or more, spanning a range of sizes so your crab has room to size up as it grows. Painted shells are toxic and should never go in the enclosure.", source: "hermit-crab-tank-setup-guide" },
        { label: "Diet", value: "Offer a varied diet with calcium sources like cuttlebone, fresh fruit and vegetables, protein like dried shrimp or insects, and leaf litter. Feed in the evening, since they're most active at night, and remove leftovers the next morning.", source: "hermit-crab-tank-setup-guide" },
        { label: "Handling", value: "Let the crab sit on a flat, open palm instead of closing your hand around it. A newly disturbed crab, or one that's just arrived in a new home, commonly digs down and stays out of sight for days, sometimes over a week, while it settles in. A molting crab can stay buried considerably longer, anywhere from several weeks up to around three months, and should not be dug up or disturbed during that time no matter how long it's been.", source: "hermit-crab-handling-guide" },
        { label: "The first molt", value: "Every pet hermit crab is wild-caught, not captive-bred, and this adjustment period is where most hermit crab deaths actually happen. Quarantine and isolate new crabs, and improve humidity and temperature gradually rather than making sudden changes.", source: "hermit-crab-health-issues-guide" },
        { label: "Budget", value: "$3 to $40 per crab, roughly $130 to $450 for a complete setup, and around $10 to $30 a month after that.", source: "hermit-crab-cost-guide" },
        { label: "Lifespan", value: "Hermit crabs can live 10 to 20 years or more when kept well.", source: "hermit-crab-cost-guide" },
        { label: "Adult size", value: "Up to 4 inches (10 cm) across, including legs." },
        { label: "Power outage", value: "Hermit crabs are the real exception in this group. A battery-powered backup for the heat source and a plan for holding humidity, a sealed lid and damp substrate, belongs in your outage kit.", source: "invertebrate-emergency-travel-shipping-guide" },
      ],
    },
    emergencyCard: {
      source: "hermit-crab-health-issues-guide",
      callNow: [
        "Lethargy, burrowing and staying hidden, refusing food, and rapid loss of multiple limbs, which is a particularly strong indicator of advanced post-purchase stress",
        "An ashy appearance, lethargy, and an inability to fully retract into the shell, the signs of dehydration and gill suffocation",
        "A molt that was interrupted, or one happening in substrate that's too shallow or dry, which is frequently fatal",
        "Limb loss from stress, fights with cage-mates, mites, or generally wrong conditions",
        "Mites and mold, generally traceable to poor hygiene or inadequate ventilation in the enclosure",
      ],
      vetLine: "There's essentially no practical veterinary care available for this species, so the real response to a sick or stressed hermit crab is correcting the husbandry issue behind it, and isolating any crab that's aggressive, injured, or showing PPS signs from the rest of the group while it recovers.",
    },
    routes: [
      { slug: "hermit-crab-cost-guide", line: "$3 to $40 for the crab itself, why the setup is the part that actually costs money, and the monthly budget after that." },
      { slug: "hermit-crab-tank-setup-guide", line: "Humidity, temperature, substrate depth, the two water dishes, and the shells that go in the tank." },
      { slug: "hermit-crab-handling-guide", line: "Why handling stays minimal, the open-palm method, and how long a buried crab can stay down." },
      { slug: "hermit-crab-health-issues-guide", line: "Post-purchase stress, dehydration and gill suffocation, bad molts, and what seeking help looks like when there's almost no vet care." },
      { slug: "hermit-crab-feeding-guide", line: "What to feed and how often, calcium going into a molt, the two additives toxic to invertebrates, and why one commercial food is not the diet." },
      { slug: "hermit-crab-enrichment-guide", line: "What the shell research actually found, how many shells a group needs, and the priority order for everything else." },
    ],
    buyList: [
      "Glass terrarium, roughly 10 gallons for 2 to 3 small crabs and larger for a bigger group",
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
      { q: "When should I never handle my hermit crab?", a: "Never handle a crab that's molting, has recently changed shells, or is buried in the substrate. Molting crabs are extremely vulnerable, and disturbing one during this time can be fatal, it's one of the clearest rules in hermit crab care." },
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
    funFact: "Jumping spiders have some of the best vision of any arthropod, with four pairs of eyes giving them nearly 360-degree awareness and sharp enough focus to visually track and judge the distance of prey before pouncing - hence the name. Many keepers report their jumping spider appearing to watch and turn to follow movement outside the enclosure, genuinely interactive behavior that's unusual for an invertebrate.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Molting, pesticides, rehousing and the travel and
    // outage plan cite the shared invertebrate guides in the sidebar's Health
    // and More list. Reconciled 2026-09-15 after the jumping spider set test
    // (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Budget", value: "$15 to $60. Captive-bred spiderlings run $15 to $25. Roughly $112 to $150, and the enclosure is most of it at $60 to $70. Roughly $5 to $15 a month.", source: "jumping-spider-cost-guide" },
        { label: "Lifespan", value: "Males typically live 8 to 12 months after reaching maturity, while females live longer, 1.5 to 3 years. A realistic overall range to expect is 1 to 3 years.", source: "jumping-spider-cost-guide" },
        { label: "Adult size", value: "0.5 to 0.75 inches (1.3 to 1.9 cm), females larger than males." },
        { label: "Enclosure size", value: "A minimum of about 4 by 4 by 7 inches, vertically oriented, works for an adult, and something closer to 8 to 10 inches tall gives more genuine climbing room. Use a front-opening design with cross-ventilation, and house one spider per enclosure, they're cannibalistic toward each other.", source: "jumping-spider-tank-setup-guide" },
        { label: "Heat, humidity and substrate", value: "72 to 82°F suits this species well, and normal room temperature is usually fine without any supplemental heat at all. Target 50 to 60% for Phidippus species like the regal jumping spider, tropical genera need more. Mist one corner of the enclosure every 2 to 3 days with dechlorinated water, and aim to leave drinkable droplets rather than soaking everything. Coconut fiber, or a coconut fiber and sphagnum moss blend, about an inch or two deep, helps buffer humidity swings between mistings. This species is diurnal and genuinely relies on vision to hunt, so provide bright ambient light on a normal 12-hour day and night cycle.", source: "jumping-spider-tank-setup-guide" },
        { label: "Feeding", value: "Spiderlings every 1 to 2 days on 1 to 2 flightless fruit flies. Small to mid juveniles every 2 to 3 days. Sub-adults every 2 to 4 days. Adults every 2 to 5 days, with the abdomen deciding where in that window a given spider sits. A shrunken or wrinkled abdomen means it's hungry and can be fed early. A plump, rounded abdomen noticeably wider than the cephalothorax means skip the next feeding. Flightless fruit flies are the staple for slings and small juveniles. Keep prey noticeably smaller than the spider, roughly no bigger than the abdomen, matched to the size of the chelicerae.", source: "jumping-spider-feeding-guide" },
        { label: "Never feed", value: "Ants, repeatedly named as the single most important thing to avoid, they can bite or spray formic acid, and jumping spiders show an instinctive fear response to them.", source: "jumping-spider-feeding-guide" },
        { label: "Water", value: "A shallow water dish, plus the drinking droplets the misting leaves on the walls. Never mist the spider's abdomen directly, water can seep between the book-lung plates and cause suffocation.", source: "jumping-spider-feeding-guide" },
        { label: "What kills them", value: "The single most common problem, and honestly the leading cause of death in captive jumping spiders. Watch for curled legs and general lethargy. It's caused by humidity running too low or an absence of drinkable water droplets. A spider that gets stuck in its old exoskeleton during a molt can lose limbs or die. This is caused by insufficient humidity in the lead-up to molting.", source: "jumping-spider-health-issues-guide" },
        { label: "Handling", value: "Minimal handling is the right approach. Always handle low, over a soft surface.", source: "jumping-spider-handling-guide" },
      ],
    },
    emergencyCard: {
      source: "jumping-spider-feeding-guide",
      callNow: [
        "Food refusal running well past two weeks with no molt ever occurring",
        "No interest in food for a week or more after a molt has already completed",
        "A visibly shrunken or wrinkled abdomen, especially paired with lethargy",
        "Legs curling inward, or an inability to right itself if flipped",
        "Visible injury or fluid leakage",
        "A failed or stuck molt, a spider partially out of its old exoskeleton with no progress for several hours",
      ],
      vetLine: "None of this is veterinary-established, it is hobbyist-reported. A healthy adult can safely go roughly 2 to 3 weeks without eating, and older adults are anecdotally reported tolerating a month or more, particularly around a molt or egg-guarding, none of that alone is cause for alarm. The last few of these are treated as urgent, warranting an exotic-animal vet rather than a wait-and-see approach.",
    },
    routes: [
      { slug: "jumping-spider-cost-guide", line: "$15 to $60 for the spider, $112 to $150 for setup, and why the short lifespan is the real cost." },
      { slug: "jumping-spider-tank-setup-guide", line: "4x4x7 inches as a floor, 72 to 82F, 50 to 60%, and why the door belongs low." },
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
      { q: "What size enclosure does a jumping spider need?", a: "About 4 by 4 by 7 inches, oriented vertically, is the minimum for an adult, and 8 to 10 inches tall gives real climbing room. Arboreal species: height counts for more than floor." },
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
    tagline: "Calm, armored, surprisingly clean - and yes, it hisses!",
    funFact: "Madagascar hissing cockroaches are one of the few insect species where the father plays an active role in rearing offspring. Males guard and protect the female and young after birth, and juveniles stay with the family group for weeks.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pesticides, rehousing and the travel and outage plan
    // cite the shared invertebrate guides in the sidebar's Health and More
    // list. Reconciled 2026-09-15 after the hissing cockroach set test
    // (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Budget", value: "Individual nymphs run around $3 each. A breeding pair runs about $24, and a starter colony of 25 runs around $65. Roughly $40 to $100, animal included. A few dollars a month.", source: "madagascar-hissing-cockroach-cost-guide" },
        { label: "Lifespan", value: "2 to 5 years is the typical range, most commonly 2 to 3, with 4 to 5 achievable under excellent care.", source: "madagascar-hissing-cockroach-cost-guide" },
        { label: "Adult size", value: "2 to 4 inches (5 to 10 cm)." },
        { label: "Enclosure and the escape barrier", value: "A 5-gallon tank works as a minimum for a small group. A 10-20+ gallon tank or plastic tub suits a larger colony better, floor space matters more here than height for this ground-dwelling species. Madagascar hissing cockroaches are excellent climbers, capable of scaling smooth glass with ease. Smear a band of plain petroleum jelly around the top 2 to 3 inches of the enclosure interior, combined with a secure, tight-fitting lid, and escapes become a non-issue. None needed.", source: "madagascar-hissing-cockroach-tank-setup-guide" },
        { label: "Heat, humidity and substrate", value: "75 to 85°F for general pet-keeping, room temperature above about 70°F is genuinely fine if you're not actively trying to breed them. Breeding specifically gets triggered around 85 to 95°F, worth knowing if you want to avoid an accidental population boom. 60 to 70%, maintained through daily misting and a substrate that holds moisture well. Coconut fiber, peat moss, or orchid bark, 2 to 3 inches deep, supports this species' semi-burrowing habits well. Provide egg-crate stacks or cork bark as hides, they'll use these constantly.", source: "madagascar-hissing-cockroach-tank-setup-guide" },
        { label: "Not one on its own", value: "They are gregarious, they cluster, and the welfare research that exists is on groups.", source: "madagascar-hissing-cockroach-enrichment-guide" },
        { label: "Feeding", value: "Keep a dry protein source available, high-quality dry dog food, cat food, or a commercial roach chow, and top it up with fresh produce 2 to 3 times a week in a quantity the colony finishes within 24 to 48 hours so leftovers don't mold. A water source that can't drown a roach: a cotton ball or sponge saturated with water in a shallow dish, or a commercial water gel, changed regularly, since an open dish poses a real drowning risk to small nymphs.", source: "madagascar-hissing-cockroach-feeding-guide" },
        { label: "Handling", value: "Pick one up gently around the thorax, or let it walk from hand to hand instead of gripping it. Wash your hands before and after handling: they can carry Salmonella like most reptiles and invertebrates.", source: "madagascar-hissing-cockroach-handling-guide" },
        { label: "What goes wrong", value: "Low humidity causes real problems with molting and can lead to death if left uncorrected. The fix is straightforward, maintain 60 to 70% humidity through regular misting and a moisture-holding coconut fiber substrate. Never handle a roach during or immediately after a molt. Remove any uneaten fresh food within 24 to 48 hours, ensure the enclosure has adequate airflow, and do a deeper clean periodically rather than only when a problem appears.", source: "madagascar-hissing-cockroach-health-issues-guide" },
        { label: "Legal, before you buy", value: "Four jurisdictions bar them: New Hampshire, Montana, Hawaii and the District of Columbia. Florida requires an agriculture permit rather than a wildlife one.", source: "madagascar-hissing-cockroach-legal-guide" },
      ],
    },
    emergencyCard: {
      source: "madagascar-hissing-cockroach-feeding-guide",
      callNow: [
        "Inactivity, or lying in one place",
        "Failure to hiss when handled",
        "Lethargy beyond normal pre-molt sluggishness",
        "A dull-looking exoskeleton",
        "Visible weight loss",
        "Discharge from the mouth or eyes",
        "Visible sores",
        "Abnormal feces",
      ],
      vetLine: "A visibly sick hisser is reported to commonly survive only about 2 to 3 days once symptoms are obvious, which argues for acting quickly, checking temperature and humidity and consulting an exotics-experienced vet, rather than waiting once multiple symptoms stack up.",
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
    funFact: "Praying mantises are the only insects known to have a single ear, located in the center of their chest between their hind legs. They use it to detect the ultrasonic calls of hunting bats, letting them dodge mid-flight. They are also the only insect that can turn its head 180 degrees.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pre-molt appearance, rehousing, pesticides and the
    // emergency plan cite the shared invertebrate guides in the sidebar's
    // Health and More list. Reconciled 2026-09-15 after the praying mantis
    // set test (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Budget", value: "Buy an adult or subadult, not a nymph. Common species like Carolina and Chinese mantises run $15 to $35. The three required lines, enclosure, substrate, and branches or mesh, come to about $85 to $115. Roughly $10 to $40 a month, almost all of it live feeder insects.", source: "praying-mantis-cost-guide" },
        { label: "Lifespan", value: "Most commonly kept mantis species live just 6 to 12 months total, Chinese mantises toward 8 to 12 months, African mantises closer to 6 to 9 months, with females typically outliving males.", source: "praying-mantis-cost-guide" },
        { label: "Adult size", value: "0.5 to 6 inches (1 to 15 cm) depending on species." },
        { label: "Enclosure size", value: "Length and width should each be at least twice the mantis's body length, and height at least three times its length. A reasonable adult enclosure runs around 8 inches long, 8 inches wide, and 12 inches tall as a minimum. The drop from the top of the perch to the floor, which wants to be at least four times the mantis's length.", source: "praying-mantis-tank-setup-guide" },
        { label: "What the ceiling has to be", value: "Something the mantis can grip securely upside down for hours: mesh, screen or a rough surface. Keep the center of the upper enclosure clear. They are cannibalistic and will eat each other at any size difference and often at none.", source: "praying-mantis-enrichment-guide" },
        { label: "Heat, humidity and ventilation", value: "Most commonly kept species, Carolina and Chinese mantises among them, do fine at normal room temperature, which in practice means roughly 70 to 80°F. Stay below 88°F. Species-dependent, and the spread is wide: a temperate Chinese mantis sits around 50 to 65%, while tropical species like Ghost and Orchid mantises want 70 to 80%. Mist lightly at least once daily, more often in a mesh enclosure. A mesh or ventilated lid, never solid glass or plastic. Coconut fiber, plain soil, bark, or even paper towel all work well.", source: "praying-mantis-tank-setup-guide" },
        { label: "Feeding", value: "Live prey only. Offer food every other day, as much as the mantis will take in one sitting. Nothing longer than about a third of the mantis's own length. Fruit flies carry the smallest nymphs, then bottle flies, small crickets and appropriately sized dubia roaches as it grows, with larger crickets, waxworms and bottle flies available to a full adult. A mantis going off food is usually about to molt, so stop offering and pull anything live back out: a cricket left in with a soft, newly molted mantis will chew on it.", source: "praying-mantis-tank-setup-guide" },
        { label: "Live prey, not dead", value: "Mantises are visual ambush hunters that respond to movement, and most will ignore a dead insect entirely.", source: "praying-mantis-enrichment-guide" },
        { label: "Handling", value: "Let the mantis walk onto your hand or a tool rather than grabbing it. Handle only in a closed room. Avoid handling in the days leading up to a molt.", source: "praying-mantis-handling-guide" },
      ],
    },
    emergencyCard: {
      source: "praying-mantis-health-issues-guide",
      callNow: [
        "An incomplete shed, or limbs that come out twisted or stuck",
        "A mantis struggling and not progressing during what should be a molt",
        "A mantis that has fallen mid-molt, or lost its grip on the perch",
        "A crooked or deformed limb after a molt, which can make normal hunting difficult",
        "Regurgitation, which can come from overfeeding rather than illness",
        "Mold visible in the enclosure, or a mantis declining in a tank that is being over-misted",
      ],
      vetLine: "Exotic vets rarely treat invertebrates, so this list leans almost entirely on prevention rather than treatment. Humidity that's too low is the single biggest driver of the mismolt risk that accounts for most mantis deaths, and humidity that's too high invites mold and internal infection instead. A mantis that survives a mismolt with a crooked limb may need hand-feeding with fine-tip tongs going forward. There is little to be done once a molt has genuinely failed.",
    },
    routes: [
      { slug: "praying-mantis-cost-guide", line: "$15 to $35 for a common species, $85 to $145 for the setup around it, and the lifespan that changes what you are buying." },
      { slug: "praying-mantis-tank-setup-guide", line: "8 by 8 by 12 as a floor, the perch drop that decides a molt, humidity by species, and what live prey to offer when." },
      { slug: "praying-mantis-handling-guide", line: "Walk it onto your hand, keep the door shut, and the pre-molt window when you do not touch it at all." },
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
    funFact: "Stick insects are parthenogenetic: females can reproduce without males and lay fertile eggs throughout their lives. The eggs of some species can remain viable in soil for years, hatching after the mother is long dead, mimicking plant seeds so perfectly that ants carry them underground.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Pesticides, molting and the travel and outage plan
    // cite the shared invertebrate guides in the sidebar's Health
    // and More list. Reconciled 2026-09-15 after the stick insect set test
    // (docs/READER_REVIEWS.md).
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "The permit, first", value: "In the United States, keeping non-native stick insect species, which includes the common Indian and Vietnamese stick insects widely sold in the hobby, technically requires a USDA APHIS permit under the Plant Protection Act.", source: "stick-insect-cost-guide" },
        { label: "Budget", value: "Often just a few dollars per nymph for common species, Indian stick insects especially, and sometimes given away free by keepers since many species reproduce prolifically. Roughly $77 to $98 for a tall, mesh-topped enclosure, substrate and a spray bottle, with the enclosure most of it.", source: "stick-insect-cost-guide" },
        { label: "Lifespan", value: "Around one year is typical, roughly 4 to 10 months as a nymph followed by 5 to 12 months as an adult.", source: "stick-insect-cost-guide" },
        { label: "Adult size", value: "1 to 22 inches (2 to 55 cm) depending on species." },
        { label: "Enclosure and the mesh top", value: "Length and width should each be at least twice the adult's body length, and height should be at least three times body length. Height is the detail that actually matters most, since it's what allows a proper molt. A mesh or netting lid is essential, not just for ventilation, but because stick insects hang from the top of the enclosure to molt, and shedding from mesh succeeds far more reliably than from a branch alone.", source: "stick-insect-tank-setup-guide" },
        { label: "Heat, humidity and substrate", value: "Many commonly kept species, Indian stick insects especially, do perfectly well at normal room temperature, roughly 63 to 77°F. Varies by species, tropical types want 60 to 80%, while Indian stick insects are considerably more forgiving. Achieve this through daily light misting with dechlorinated or distilled water, combined with an inch or two of moisture-holding substrate, and track it with a digital hygrometer rather than guessing. Coconut coir, peat moss, or plain paper towel all work, holding humidity and absorbing waste.", source: "stick-insect-tank-setup-guide" },
        { label: "Food", value: "Leaves, and that is the entire diet. Almost every commonly kept stick insect eats washed bramble, the blackberry stems that grow in any hedgerow, and it goes species by species from there: Indian stick insects also take privet and ivy, while rose, hawthorn, oak and eucalyptus each suit different species. Block the opening of the water container so nothing can fall in, because a nymph drowned in a jar of stems is the routine avoidable loss in this hobby.", source: "stick-insect-tank-setup-guide" },
        { label: "Water", value: "Stick insects drink water droplets rather than from a dish, so a reliable spray bottle and a consistent schedule is the hydration plan. An open water reservoir is a drowning risk for small nymphs.", source: "stick-insect-health-issues-guide" },
        { label: "Failed molts", value: "The single biggest risk for a pet stick insect: a shed that doesn't complete properly, resulting in deformity or death. It's caused by insufficient vertical space or humidity that's too low leading up to the molt.", source: "stick-insect-health-issues-guide" },
        { label: "Handling", value: "Gently grasp the body or thorax if you need to move a stick insect, and never grab a leg. Unlike the praying mantis, which is solitary and cannibalistic, stick insects are herbivorous and non-aggressive toward each other, and Indian stick insects specifically can be housed in groups without issue.", source: "stick-insect-handling-guide" },
      ],
    },
    emergencyCard: {
      source: "stick-insect-health-issues-guide",
      callNow: [
        "A shed that doesn't complete properly, which results in deformity or death",
        "Too little vertical space for the insect to hang freely while shedding, or humidity too low in the days before the molt",
        "Small nymphs can drown in an open water reservoir used to keep cut host-plant foliage fresh",
        "Mold, from an enclosure kept too damp combined with poor ventilation or infrequent cleaning",
        "A lost leg, a genuine and common outcome of rough handling, and an adult's lost leg is permanent",
      ],
      vetLine: "This isn't something to treat after the fact. Prevention through correct enclosure height and misting, tracked with a digital hygrometer rather than guesswork, is really the only effective approach.",
    },
    routes: [
      { slug: "stick-insect-cost-guide", line: "The APHIS permit a hobbyist cannot get, a few dollars a nymph, and $1,000 for a rare giant." },
      { slug: "stick-insect-tank-setup-guide", line: "Three times body length in height, 63 to 77F, bramble and the other host plants, and why the lid is mesh." },
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
      { q: "Do you need a permit to keep a stick insect in the US?", a: "Technically, yes, for non-native species. The common Indian and Vietnamese stick insects sold in the hobby fall under the Plant Protection Act, and the USDA APHIS permit requires import into an inspected containment facility. Hobbyists cannot meet that bar, so those permits are essentially never issued to individual pet owners. What is clearly legal without one is generally a species native to your own state and collected there. Releasing any stick insect or its eggs is prohibited either way. Check current USDA rules for your own situation before buying." },
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
    funFact: "Tarantulas can live extraordinarily long lives. Females of some species (like the Mexican Red Knee) can live 25 to 30 years in captivity, while males typically live only 5 to 7 years. A female tarantula may outlive your dog.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Power outage cites the
    // shared invertebrate emergency guide in the sidebar's Health and More
    // list. Reconciled 2026-09-09 after the tarantula set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Enclosure", value: "Horizontal, wider than tall, to limit fall risk. A reasonable adult minimum is around 20x10x10 inches, roughly a 10-gallon, sized to about three times the tarantula's leg span. Keep overall height under about 12 inches.", source: "tarantula-tank-setup-guide" },
        { label: "Substrate", value: "At least 3 inches of coconut fiber, peat, or organic pesticide-free soil, filling roughly half to two-thirds of the enclosure.", source: "tarantula-tank-setup-guide" },
        { label: "Lid", value: "A secure lid, but never mesh, a tarantula's feet can get caught in it and cause real injury. Acrylic with drilled ventilation holes is the better choice.", source: "tarantula-tank-setup-guide" },
        { label: "Humidity", value: "Sources genuinely disagree: some recommend a moderate 40 to 60% for dry-adapted species, others suggest 65 to 75%. A reliable water dish plus lightly moistened substrate is more consistent than heavy misting either way.", source: "tarantula-tank-setup-guide" },
        { label: "Housing", value: "One tarantula per enclosure. Most species are solitary and cannibalistic, and cohabitation isn't workable regardless of enclosure size.", source: "tarantula-tank-setup-guide" },
        { label: "Feeding schedule", value: "Slings every 2 to 3 days, juveniles roughly every week to two weeks (sources disagree on the exact number), adults every 1 to 2 weeks, sometimes far less for a slow-metabolism species.", source: "tarantula-feeding-guide" },
        { label: "Not eating", value: "Usually not an emergency. A plump, active spider refusing food for weeks is typically just in premolt. For juveniles specifically, refusing food for more than 6 to 8 weeks alongside weight loss or lethargy is worth a vet consult.", source: "tarantula-feeding-guide" },
        { label: "Handling", value: "Mostly, no. Best kept as a look, don't touch pet: a fall can rupture the abdomen and is often fatal, and a hand, shoulder, or couch cushion is enough height for that.", source: "tarantula-handling-guide" },
        { label: "Budget", value: "$25 to $100 for the spider (common beginner species), $70 to $300 for a complete setup, and $5 to $15 a month after that.", source: "tarantula-cost-guide" },
        { label: "Adult size", value: "2 to 12 inch leg span, depending on species." },
        { label: "Lifespan", value: "15 to 20 years or more for a female Chilean rose hair, typically 4 to 7 for a male. A female is a long-term commitment, though the ongoing budget stays very small the whole time.", source: "tarantula-cost-guide" },
        { label: "Power outage", value: "A non-event for most tarantulas at home; they don't need supplemental heat in a typical room and can go without food far longer than most pets. The real risk in this corner of pet keeping is in a car or a shipping box, not a home outage.", source: "invertebrate-emergency-travel-shipping-guide" },
      ],
    },
    emergencyCard: {
      source: "tarantula-health-issues-guide",
      callNow: [
        "A shriveled, wrinkled abdomen with lethargy or legs curling tightly under the body (dehydration)",
        "A molt that looks stuck or incomplete",
        "A ruptured abdomen or hemolymph visibly leaking from an injury",
        "Refusing food for more than a month, especially alongside dehydration signs",
      ],
      vetLine: "Vet care for tarantulas is limited and prevention matters more than treatment. A shallow water dish and correct humidity prevent most dehydration cases; never disturb, handle, or feed a molting tarantula.",
    },
    routes: [
      { slug: "tarantula-cost-guide", line: "$25 to $100 for the spider, $70 to $300 for setup, and why the ongoing budget stays small for decades." },
      { slug: "tarantula-handling-guide", line: "Why the answer is almost always no, the real fall risk, and New World versus Old World defenses." },
      { slug: "tarantula-health-issues-guide", line: "Dehydration, stuck molts, injury, and the difference between normal fasting and a real problem." },
      { slug: "tarantula-tank-setup-guide", line: "Enclosure shape and size, substrate depth, the humidity debate, and why mesh lids are out." },
      { slug: "tarantula-feeding-guide", line: "Schedule by life stage, what's actually safe to feed, and the honest range for how long a tarantula can fast." },
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
      { q: "How much does a tarantula cost upfront?", a: "The spider itself runs $25 to $100 for common beginner species, a Chilean rose hair or curly hair typically lands at $20 to $50. Add the enclosure, substrate, hide, decor, and a water dish, and most first-time setups land in the $70 to $300 range before the spider itself." },
      { q: "What size enclosure does a pet tarantula need?", a: "About 20 by 10 by 10 inches for an adult, roughly a 10-gallon, sized to around three times the leg span. Keep it low, under about 12 inches tall, since a fall is a genuine danger for most tarantulas." },
      { q: "Can you hold a tarantula?", a: "Mostly, no. Most tarantulas, including the Chilean rose hair, are best kept as strictly look, don't touch pets, since a fall can be fatal to the spider and its defenses can hurt you." },
    ],
  },
];
