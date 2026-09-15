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
        { label: "Cycling", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. All three, not just one. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Quarantine", value: "Two to four weeks in a separate, already-cycled tank before a new amano shrimp joins an established display. Virtually every amano shrimp sold in the trade is wild-caught rather than farm-raised, so quarantine gives any hitchhiking parasites, pests, or simply a stressed animal time to show itself.", source: "amano-shrimp-handling-guide" },
        { label: "Drip acclimation", value: "Roughly one to two hours, at one to two drops per second, running a slow siphon from the destination tank into the transport container. A bigger gap between your water and theirs calls for three or four hours. A shrimp thrown straight into different water can go into osmotic shock, which is a known trigger for failed, often fatal molts.", source: "amano-shrimp-handling-guide" },
        { label: "Tank size", value: "A 10-gallon tank is a practical minimum. Their bioload is low enough that they can live in most nano tanks or larger as long as the lid is secure, but a small group technically surviving in 5 gallons isn't the same as thriving with room to actually forage.", source: "amano-shrimp-tank-setup-guide" },
        { label: "How many", value: "One shrimp per 2 gallons, so five in a 10-gallon. Their bioload is low enough that a tank already fighting an algae outbreak can carry more than five without a water quality problem, but more shrimp in the same algae only means the supply runs out sooner.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Temperature", value: "64 to 82°F covers the tolerated range, but shrimp kept toward the cooler two-thirds of that band, roughly the upper 60s to mid-70s, tend to live longer, since warmer water speeds up metabolism and shortens lifespan. Set a heater conservatively rather than pushing it toward the top of the range.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Water chemistry", value: "pH 6.0 to 7.5, with carbonate hardness in the 2 to 8 dKH range as a reasonable target alongside it.", source: "amano-shrimp-tank-setup-guide" },
        { label: "General hardness", value: "A working range of roughly 4 to 15 dGH, with many keepers targeting 6 to 8 dGH specifically, because that is what supplies the calcium and other minerals this species needs to build a new shell every molt. Too little and a shrimp can't harden its new exoskeleton; too much and the old one can become too rigid to break out of cleanly.", source: "amano-shrimp-tank-setup-guide" },
        { label: "The lid", value: "Not optional. Amano shrimp are well known escape artists, especially in their first few days in a new tank, and a gap of even a fraction of an inch around a cord or filter intake is enough for one to climb out and turn up dried out the next morning. A tight-fitting glass or acrylic lid, with any gaps sealed.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Filter intake, not flow", value: "A sponge filter matters because it blocks a standard intake from pulling in or injuring a shrimp, particularly one that has just molted and is a weak swimmer for a short while. It is an intake-safety choice rather than a statement about how much flow the species can handle: this is a fast-stream animal that does not want still water.", source: "amano-shrimp-tank-setup-guide" },
        { label: "Copper", value: "Shrimp carry copper-based hemocyanin in their blood rather than iron-based hemoglobin, which is exactly why free copper is so disproportionately dangerous to them. A 2025 study put the acute lethal threshold at 1.15 mg/L, and shrimp pre-exposed below that lost their normal ability to detect food odors. Common copper-based fish medications and some plant fertilizers run 0.15 to 0.20 mg/L, squarely inside the range where shrimp show measurable harm.", source: "amano-shrimp-health-issues-guide" },
        { label: "Water conditioner", value: "Always run tap water through a water conditioner before it goes anywhere near the tank, dechlorinating it and neutralizing chloramine and heavy metals that are otherwise harmful to invertebrates.", source: "amano-shrimp-tank-setup-guide" },
        { label: "What they eat", value: "They take on hair algae and thread algae readily, and unlike most fish and snails they'll also pick at black beard algae. The gap is flat, tightly adhered algae: they won't get at the tougher types like green spot algae, and cyanobacteria isn't a true algae at all and gets left alone.", source: "amano-shrimp-feeding-guide" },
        { label: "Algae runs out", value: "Algae is a starting food supply, not a renewable one, and a hungry group works through it faster than most people expect. If the tank is clean, supplement. A hungry amano gives an honest signal first: it climbs the glass and decor actively searching rather than sitting still and waiting.", source: "amano-shrimp-feeding-guide" },
        { label: "How often to feed", value: "Lightly, and only every couple of days rather than heavily every day. Shrimp getting plenty of easy wafers and pellets stop bothering with algae, which defeats the point of keeping them. Offer a small amount, remove anything left after a few hours, and let them stay motivated to work the tank.", source: "amano-shrimp-feeding-guide" },
        { label: "Feed in more than one spot", value: "Amanos are assertive, and a single wafer becomes one shrimp's wafer.", source: "amano-shrimp-enrichment-guide" },
        { label: "Molting", value: "A failed molt, sometimes called the White Ring of Death, is what happens when the old shell splits all the way around the body instead of opening cleanly at the head. Most molting failures trace back to unstable water parameters, particularly swings in GH and KH around a water change, and a diet short on calcium. There is no treatment once one starts failing.", source: "amano-shrimp-health-issues-guide" },
        { label: "Handling", value: "A soft, fine-mesh net, guiding the shrimp in gently instead of chasing it around the tank. Keep it in water as much as possible during any transfer, and be extra careful around one that has molted recently, since it is soft and swimming weakly at exactly the wrong moment for a rough net chase.", source: "amano-shrimp-handling-guide" },
        { label: "Eggs that never hatch", value: "Normal, not a health problem. A female carries fertilized eggs and they hatch into free-swimming larvae on schedule, but those larvae need brackish or marine water within their earliest stages, which a freshwater display can't provide. It is the direct result of this species' amphidromous life cycle and the reason almost every amano in the trade is a wild-caught adult.", source: "amano-shrimp-health-issues-guide" },
        { label: "Sick tank check", value: "Clear water doesn't mean safe water. Ammonia, nitrite, and low dissolved oxygen are all invisible. Test the water before assuming illness.", source: "spotting-a-sick-fish-guide" },
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
        { label: "Tank size", value: "5 gallons is a commonly cited practical minimum. Shrimp can technically survive in a 2-gallon nano tank, but 10 gallons or larger suits a healthy, self-sustaining breeding colony, since more water volume buffers the small, constant parameter shifts a growing colony naturally causes.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Mature, not just cycled", value: "A tank needs to be fully mature, not just cycled, before shrimp go in: the biofilm a shrimp grazes takes longer to arrive than the bacteria that clear ammonia. Ammonia and nitrite should both read zero at all times.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Water hardness", value: "The single most shrimp-specific requirement. The floor is a GH of 6 degrees (about 110 ppm) and a KH of 2 degrees (about 40 ppm). The tighter target, and the one that most reliably supports a full, hard molt, is roughly 6 to 8 dGH and 2 to 4 dKH alongside a pH of 6.5 to 7.5. Mineral hardness is what a shrimp pulls calcium from to build a new shell after every molt, so a tank that's too soft leads directly to failed and soft molts.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Temperature", value: "A comfortable range of 60 to 82\u00B0F, with 72 to 76\u00B0F optimal, and an outer tolerated range as wide as 57 to 86\u00B0F. Most home rooms sit comfortably inside this species' range without any supplemental heat at all. A heater is still worth having if your room regularly runs cooler than the high 50s, or if you want a stable, warmer setpoint for more consistent growth and breeding.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Filtration", value: "A sponge filter, or a standard filter with its intake covered by a pre-filter sponge. An uncovered filter intake can pull baby shrimp in, and adult shrimp aren't entirely safe from a strong intake either. Gentle water movement also better matches the calmer water this species is used to.", source: "cherry-shrimp-tank-setup-guide" },
        { label: "Water changes", value: "Limit them to roughly 10% a week, or 20% every two weeks. Larger or more frequent changes shock shrimp even when the new water itself is clean and dechlorinated.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Grazing surface", value: "Dense live plants or moss, driftwood and leaf litter. This is the whole thing for a grazing animal: surface area is what a cherry shrimp spends its day on, and a bare tank with a food dish is the impoverished version.", source: "cherry-shrimp-enrichment-guide" },
        { label: "A colony, not a few", value: "More than a handful. Cherry shrimp are more active, more visible and more confident in a colony, and ten or more is a sensible starting point in a tank of reasonable size. A pair or trio spends most of its time hidden.", source: "cherry-shrimp-enrichment-guide" },
        { label: "Diet", value: "Mostly grazing. In an established, well-planted tank a colony finds a meaningful amount of its own food picking biofilm, algae and detritus off every surface, with a sinking wafer a couple of times a week on top of that rather than as the base of the diet.", source: "cherry-shrimp-feeding-guide" },
        { label: "Portion", value: "A piece of food no larger than a pea, or a quarter of a small wafer, is enough for a colony of 10 to 20 shrimp. Feed only what the colony clears within 2 to 3 hours, and if food from the last feeding is still sitting there, skip the next one rather than adding more on top of it.", source: "cherry-shrimp-feeding-guide" },
        { label: "Calcium for the molt", value: "A quality sinking food, occasional blanched vegetables, and stable water hardness cover most of that need without a dedicated supplement.", source: "cherry-shrimp-feeding-guide" },
        { label: "Leave the shed shell", value: "It's safe, and generally a good idea, to leave a molted exoskeleton in the tank for a day or two rather than removing it. The shrimp that just molted, and its tankmates, will pick it apart to reclaim the calcium and minerals already locked inside it. The only real exception is a tank already dealing with a parasite or bacterial problem.", source: "cherry-shrimp-feeding-guide" },
        { label: "Molt frequency", value: "An adult sheds roughly every 3 to 4 weeks, with younger shrimp molting even more often as they grow. A shrimp that hides and stays still for a few days right after a normal molt is not showing signs of a problem, that's just the vulnerable window while a fresh shell hardens.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Copper, the one to take seriously", value: "Shrimp tolerate almost no copper at all, at concentrations that wouldn't register as a concern for most fish. A 2014 toxicity study on a related freshwater shrimp found a 96-hour lethal concentration of just 0.0313 mg/L, by far the most toxic of five metals tested, with a proposed biologically safe target closer to 0.003 mg/L.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Where copper hides", value: "Many common fish medications, some plant fertilizers, and pesticide treatments used on store-bought aquarium plants before sale. Quarantine new plants in clean water for at least five days, with daily water changes, before they go anywhere near a shrimp tank. Never treat a shared shrimp-and-fish tank with a copper-based medication.", source: "cherry-shrimp-health-issues-guide" },
        { label: "Acclimation", value: "A slow drip rather than a quick float-and-dump, roughly one drop per one to two seconds until the water volume in the acclimation container has doubled, which takes 60 to 90 minutes for most home setups. Shrimp regulate their internal water balance far less efficiently than fish do, so a sudden shift in pH, hardness or temperature can trigger osmotic shock.", source: "cherry-shrimp-handling-guide" },
        { label: "Quarantine", value: "At least two weeks in a separate, established tank before adding new shrimp to an existing colony, longer if you want extra confidence. Some specialty retailers quarantine for a full 30 days before shrimp are even offered for sale.", source: "cherry-shrimp-handling-guide" },
        { label: "Handling", value: "Netting is the only real contact this species gets, and take your time doing it: transfer shock kills more shrimp than the destination tank does.", source: "cherry-shrimp-enrichment-guide" },
        { label: "Budget, the shrimp", value: "Standard grades cluster closer to $4 to $5 a shrimp, and the deepest-colored grades run $6 to $8. Buying in a small group rather than one or two lowers the per-shrimp price, and it gives a young colony a healthier starting gene pool.", source: "cherry-shrimp-cost-guide" },
        { label: "Budget, the setup", value: "Roughly $45 to $110. The one recurring cost the table leaves out is a mineral or GH-boosting supplement, typically a few dollars every few months. The test kit is a purchase you'll rely on repeatedly rather than a one-off, since cherry shrimp tolerate very little ammonia or nitrite.", source: "cherry-shrimp-cost-guide" },
        { label: "Vet costs", value: "Not applicable in the traditional sense. There's essentially no practical veterinary care available for aquarium invertebrates this small, so husbandry and prevention do all the work here, not treatment after the fact.", source: "cherry-shrimp-cost-guide" },
        { label: "Lifespan", value: "Up to 2 years under ideal, stable conditions, though shrimp in a typical home aquarium often average closer to just the first year.", source: "cherry-shrimp-cost-guide" },
        { label: "Never release them", value: "The U.S. Fish and Wildlife Service's 2025 ecological risk screening rates *Neocaridina davidi* a High overall invasion risk for the contiguous United States, with a strong climate match in the Great Lakes region, peninsular Florida, the southern Great Plains, and parts of the Rocky Mountains. Find a local fish store or online forum to rehome extras.", source: "cherry-shrimp-cost-guide" },
        { label: "Adult size", value: "Up to about 1.5 inches (4 cm)." },
        { label: "Filter maintenance", value: "Rinse media in tank water only. Mechanical media goes first in the flow so large particles don't clog the biological stage and create the low-oxygen dead zones that stop those bacteria working.", source: "aquarium-filtration-guide" },
        { label: "Water chemistry, the wider picture", value: "KH is the buffer holding pH in place, and dosing pH-up or pH-down against it is how keepers crash a tank. Test the source water and work with what it gives you rather than chasing a number.", source: "freshwater-ph-gh-kh-guide" },
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
        { label: "Enclosure size", value: "A 10-gallon, roughly 20x10x12 inches, is the accepted minimum for one adult. Groups or extra enrichment want 20 to 30 gallons or more, with more hides than animals if you cohabitate. The lid has to be secure and tight-fitting: these are capable climbers and genuine escape artists.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Humidity", value: "Target 70 to 90%, and 75 to 80% is the practical sweet spot. Keep the substrate damp, not soggy, and mist as needed, often daily or every other day. Condensation on the walls or visible mold means it's too wet, dry, cracked substrate means it's too dry.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Temperature", value: "An ambient range of 75 to 85°F is the target, with 70 to 90°F as the outer limits as long as a gradient exists. A side-mounted heat mat on a thermostat creates a mild warm side, around 85 to 90°F at its warmest point, while leaving a cooler area available.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Substrate depth", value: "5 to 6 inches minimum, and deeper is better, because the species uses that depth to burrow rather than decorate. Coco fiber, peat, soil-based mixes, or commercial products all work, kept damp but well-aerated.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Lighting", value: "No UVB is required. Emperor scorpions are nocturnal and don't rely on UV exposure for vitamin D synthesis the way many reptiles do. A normal 12-hour light, 12-hour dark photoperiod works well.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Hides", value: "In a communal setup this is not decoration, it is the mechanism that makes grouping work. Every animal needs somewhere to be that is not somewhere another animal already is, and the standard failure is one good hide and three scorpions.", source: "emperor-scorpion-enrichment-guide" },
        { label: "Diet", value: "The whole diet is gut-loaded feeder insects. Crickets and dubia roaches are the reliable staples, with locusts and the occasional mealworm or superworm for variety. An adult tears prey apart with its pincers rather than the stinger.", source: "emperor-scorpion-feeding-guide" },
        { label: "Feeding frequency", value: "Juveniles and nymphs every 2 to 4 days, since they're growing and more voracious. Adults once a week is standard, sometimes 2 to 3 insects. Keep prey no larger than the abdomen.", source: "emperor-scorpion-feeding-guide" },
        { label: "How to offer it", value: "Nocturnal sit-and-wait predators. Release live prey in the evening rather than presenting it with tongs, and let the animal hunt.", source: "emperor-scorpion-enrichment-guide" },
        { label: "Fasting", value: "This species can safely fast for a month or two, particularly before a molt, and refusing food in that window is normal. Always remove any uneaten prey within 24 hours.", source: "emperor-scorpion-feeding-guide" },
        { label: "Supplements", value: "Not directly. Supplement the food, not the scorpion: gut-load feeders for at least 24 hours on fresh produce or a commercial gut-load before offering them.", source: "emperor-scorpion-feeding-guide" },
        { label: "Never feed", value: "Never feed wild-caught insects, pesticide and parasite risk are both real concerns. Fireflies are genuinely toxic to scorpions and must never be offered.", source: "emperor-scorpion-feeding-guide" },
        { label: "Handling", value: "Handling stresses the animal and carries real risk on both sides. Falls are the leading concern for the scorpion, a drop can cause serious injury. If handling is genuinely necessary, use long forceps with soft padding, or let the scorpion walk onto a tool or your hand over a soft, low surface. Never grab by the tail or body roughly.", source: "emperor-scorpion-handling-guide" },
        { label: "Pinch versus sting", value: "Emperor scorpions are far more likely to pinch with their pedipalps than to sting. The venom is mild and mainly defensive, and a sting is not particularly dangerous: expect localized pain, redness, and swelling instead of systemic illness. The exception is a person already sensitive to bites and stings.", source: "emperor-scorpion-handling-guide" },
        { label: "Molting", value: "Remove live prey and avoid handling entirely for days to weeks around a molt. A freshly molted scorpion's new exoskeleton is too soft to protect it against predators or other scorpions, which makes this the single most vulnerable period in the animal's life.", source: "emperor-scorpion-tank-setup-guide" },
        { label: "Budget", value: "$25 to $100 for a captive-bred specimen, with juveniles toward the lower end and larger adults or proven breeders toward the higher end. Roughly $80 to $250 for the setup before the scorpion.", source: "emperor-scorpion-cost-guide" },
        { label: "Vet costs", value: "Exotic vets experienced with invertebrates are uncommon, and most routine issues are managed by keepers directly through husbandry correction. When professional care is genuinely needed, expect exotic vet exam fees in the $80 to $200-plus range, with limited treatment options available for many invertebrate conditions.", source: "emperor-scorpion-cost-guide" },
        { label: "Lifespan", value: "5 to 8 years in captivity is the usual figure, and the full reported range runs 4 to 9.", source: "emperor-scorpion-cost-guide" },
        { label: "Adult size", value: "7 to 8 inches (18 to 20 cm)." },
        { label: "Rehousing", value: "A move is the single most likely moment for an escape or an injury, and it is worth planning as a procedure rather than improvising it at the sink.", source: "invertebrate-rehousing-guide" },
        { label: "Pesticides", value: "An invertebrate has no defense against household insecticide, and the routes into an enclosure are more numerous than most keepers expect.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "Power outage and travel", value: "Temperature and humidity are what fail first in an outage, and shipping an invertebrate has its own rules.", source: "invertebrate-emergency-travel-shipping-guide" },
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
        { label: "Where yours came from", value: "Feeder-tank stress, the leading cause of early losses. Quality Marine is upfront that most ghost shrimp in the trade move through as live feed, not as a display animal raised with pet-quality standards. Writing about feeder animals in general, AquariumStoreDepot describes exactly what that means in practice: \"These fish are not pets. They receive no disease screening, no quarantine period, and minimal care.\" Watch for lethargy, staying hidden far more than the first day or two of normal settling-in, refusing food, and rapid, unexplained losses within a small group shortly after purchase.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Recovery first", value: "The item that matters most and the one no care sheet lists. Acclimate slowly, then give them a quiet, stable, planted tank and low expectations for the first two weeks. Losses in that window are common and are usually not something you did.", source: "ghost-shrimp-enrichment-guide" },
        { label: "Tank size", value: "5 gallons is the workable minimum according to The Shrimp Farm, and 10 gallons gives a small colony more stability and room to forage. Bigger is always more forgiving with water quality, but ghost shrimp don't demand the larger footprint some other species do.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Temperature and water chemistry", value: "72 to 82\u00B0F is the commonly cited comfortable range, with tolerance stretching noticeably wider on both ends. Aim for pH 7 to 8 and general hardness of 3 to 15 dGH. Wide tolerance doesn't mean water quality stops mattering: ammonia and nitrite still need to read zero before stocking.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Filtration", value: "A gentle sponge filter is the standard, sensible choice. It keeps water clean without a current strong enough to stress a small shrimp, and critically, it has no exposed intake tube capable of pulling in a shrimp or a freshly molted individual the way a standard hang-on-back filter's intake can.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Copper", value: "The one rule that's non-negotiable. Commonly cited safety thresholds put copper at roughly 0.03 mg/L or lower as the ceiling for invertebrates, and copper-based fish medications, some plant fertilizers, and old copper plumbing are all realistic exposure routes. Confirm any medication or fertilizer is explicitly invertebrate-safe before using it.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Cover, and why", value: "Dense live plants and a piece of driftwood give a molting shrimp somewhere to disappear during the hours it's soft and defenseless after shedding its shell, real cover against both predatory fish and other ghost shrimp, which will opportunistically target a freshly molted tankmate.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Molting, what normal looks like", value: "A shrimp about to molt typically goes still and stops eating for an hour or more beforehand, normal behavior worth recognizing rather than mistaking for illness. Younger shrimp molt roughly weekly, older shrimp roughly monthly.", source: "ghost-shrimp-health-issues-guide" },
        { label: "Molting, what failure looks like", value: "Most failures trace back to water parameters and diet, specifically inadequate calcium and general hardness leaving a new shell unable to harden. The most serious version is the white ring of death, a solid band where the shell should split cleanly at the head, trapping the animal between old and new exoskeleton. It's frequently fatal.", source: "ghost-shrimp-health-issues-guide" },
        { label: "The shells they leave", value: "Leave discarded shells in the tank, since the shrimp eat them and recover the minerals.", source: "ghost-shrimp-enrichment-guide" },
        { label: "Feeding", value: "A small amount every day or two is plenty for a modestly stocked tank, since ghost shrimp scavenge a meaningful share of their food on their own. Offer only what a sinking wafer or a few pellets provide, and remove anything still sitting on the substrate after a few hours.", source: "ghost-shrimp-feeding-guide" },
        { label: "Not an algae crew", value: "Some, but they're better described as an all-purpose detritivore than a dedicated algae specialist. Quality Marine specifically notes they're \"not known for eating algae\" but do \"an excellent job cleaning up the detritus around the tank,\" while other sources report them grazing on soft brush algae too. Either way, don't count on them to control a serious algae problem the way an Amano shrimp would.", source: "ghost-shrimp-feeding-guide" },
        { label: "Why you don't see them", value: "This species is largely nocturnal, staying hidden among vegetation by day and emerging at night to feed. It's one of the more interesting things to watch with a flashlight after dark, a translucent shrimp working its way across the substrate, picking through diatoms and detritus that a daytime glance at the tank would never reveal was even there.", source: "ghost-shrimp-feeding-guide" },
        { label: "Supplements", value: "No dedicated supplement is required. A varied diet, mostly self-sourced scavenging plus an occasional sinking wafer with some protein and plant content built in, covers their nutritional needs, including the calcium that supports healthy molting.", source: "ghost-shrimp-feeding-guide" },
        { label: "Tankmates", value: "Prey or predator depending on size. Ghost shrimp large enough to have reached roughly 1.5 inches are usually too big for most bettas to bother with, while smaller or juvenile shrimp are at risk. The short version for stocking purposes: think about size in both directions before adding any tankmate, not just whether the pairing has a reputation for being \"peaceful.\"", source: "ghost-shrimp-tank-setup-guide" },
        { label: "They eat each other", value: "A real and documented risk, not a rare exception. Freshly molted individuals of any species, including their own, are especially vulnerable since a new shell takes hours to days to harden. Dense hiding cover and generous, consistent feeding both measurably reduce how often it happens.", source: "ghost-shrimp-feeding-guide" },
        { label: "Getting them into the tank", value: "Use a soft aquarium net rather than your hands, keep the shrimp in water as much as possible, and never scoop them out and drop them into different water without acclimating first. Their thin, permeable exoskeleton makes them far more sensitive to sudden change than most fish.", source: "ghost-shrimp-handling-guide" },
        { label: "Drip acclimation", value: "A slow drip, commonly run for 1 to 2 hours, lets a shrimp adjust gradually instead of being shocked by an abrupt change, and it meaningfully reduces the risk of a failed molt or death shortly after introduction. Shrimp can't quickly regulate their internal water balance the way fish can.", source: "ghost-shrimp-handling-guide" },
        { label: "Quarantine", value: "A 2 to 4 week quarantine in a separate tank before adding new shrimp to an established one is the standard precaution, long enough for anything the shrimp was carrying to show itself before it can spread.", source: "ghost-shrimp-handling-guide" },
        { label: "Budget", value: "Often well under $1 each in bulk as feeder stock, and roughly $1 to $3 each bought individually as pets. Core equipment runs roughly $40 to $130, and ongoing costs are minimal, since ghost shrimp scavenge a meaningful share of their own food.", source: "ghost-shrimp-cost-guide" },
        { label: "Vet costs", value: "There's essentially no practical veterinary care available for a freshwater invertebrate this small, so husbandry and prevention do all the work here.", source: "ghost-shrimp-cost-guide" },
        { label: "Lifespan", value: "Roughly one year on average in a home aquarium is what most sources converge on, with some individuals reaching closer to two years under good, stable conditions. Shorter than an Amano shrimp's typical 2 to 3 years.", source: "ghost-shrimp-cost-guide" },
        { label: "Not one species", value: "The name covers several translucent Palaemon and similar species sold interchangeably, and a single bag can contain more than one. That is why care advice for them varies so much and why some individuals behave differently from others.", source: "ghost-shrimp-enrichment-guide" },
        { label: "Breeding", value: "A 1990 laboratory study tested Palaemonetes paludosus across salinities from 0 to 35 ppt and found egg hatching and successful metamorphosis reliably limited to a 0 to 5 ppt band, so true freshwater is inside the viable window rather than excluded from it. The larvae can survive there, but the odds improve with a trace of salinity, which is why home breeding is hit-or-miss rather than reliable.", source: "ghost-shrimp-tank-setup-guide" },
        { label: "Whether they feel it", value: "Nothing on the species, partly because \"ghost shrimp\" is not one species. Birch and colleagues applied an eight criterion framework to over 300 scientific publications and concluded decapod crustaceans are probably sentient. The UK then extended animal welfare law to cover them, shrimp included.", source: "ghost-shrimp-enrichment-guide" },
        { label: "Cycling, the finish line", value: "The cycle is done when a full dose of ammonia reads zero within 24 hours, nitrite also reads zero, and nitrate has started building up. All three, not just one. Most fishless cycles run four to six weeks at a warm, stable temperature.", source: "aquarium-cycling-guide" },
        { label: "Filter maintenance", value: "Rinse media in tank water only. Mechanical media goes first in the flow so large particles don't clog the biological stage and create the low-oxygen dead zones that stop those bacteria working.", source: "aquarium-filtration-guide" },
        { label: "Water chemistry, the wider picture", value: "KH is the buffer holding pH in place, and dosing pH-up or pH-down against it is how keepers crash a tank. Test the source water and work with what it gives you rather than chasing a number.", source: "freshwater-ph-gh-kh-guide" },
        { label: "A hot week", value: "Reach for room air conditioning and a fan first, treat frozen bottles as a genuine last resort rather than a daily habit, and keep the aeration running no matter what else you're doing. Warmer water holds less dissolved oxygen at the same moment the animals need more of it.", source: "cooling-an-aquarium-without-a-chiller-guide" },
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
        { label: "The animal", value: "The millipede itself typically runs $75 to $150 or more, a real step up in price for an invertebrate, driven entirely by the supply situation rather than anything about the animal's care difficulty.", source: "giant-millipede-cost-guide" },
        { label: "Why it costs that", value: "The USDA maintains an import embargo on giant African millipedes, tied to concerns about a potentially damaging mite species found on imported animals, and a plant pest permit is required to keep this species. Most giant millipedes available in the US today are captive-bred or from older stock rather than freshly imported, which keeps supply genuinely limited.", source: "giant-millipede-cost-guide" },
        { label: "Setup budget", value: "Roughly $75 to $150 for the tank, substrate, leaf litter, a hygrometer, and a spray bottle.", source: "giant-millipede-cost-guide" },
        { label: "Ongoing costs", value: "Minimal. Fresh produce and periodic substrate or leaf litter replenishment make up nearly the entire monthly cost, just a few dollars.", source: "giant-millipede-cost-guide" },
        { label: "Vet costs", value: "Essentially none. Invertebrate-experienced exotic vets exist but are rarely needed, most issues are managed through husbandry alone.", source: "giant-millipede-cost-guide" },
        { label: "Legal, before you buy", value: "A USDA PPQ 526 permit applies federally, since millipedes fall under the federal plant pest definition. States then diverge more than people expect: Florida requires a permit from its Department of Agriculture, Hawaii excludes the species by omission from its approved lists, Oregon names it as approved with no permit, and the District of Columbia and Montana both leave it outside their permitted categories.", source: "giant-millipede-legal-guide" },
        { label: "Enclosure size", value: "A minimum of 10 to 15 gallons for one adult, with many keepers recommending something closer to a 36x18x18 inch enclosure, roughly a 40-gallon equivalent, or a 20 gallon long tank. Floor space matters more than height for this ground-dwelling species.", source: "giant-millipede-tank-setup-guide" },
        { label: "The lid", value: "A secure, tightly fitting lid is essential, millipedes are capable climbers and genuine escape artists.", source: "giant-millipede-tank-setup-guide" },
        { label: "More than one", value: "Fine and normal. This is a communal species that will cluster together even in a large enclosure, as long as space, hides and food are all abundant. What limits a group is crowding: every extra animal wants more floor and more substrate of its own.", source: "giant-millipede-tank-setup-guide" },
        { label: "Temperature", value: "72 to 80°F suits this species well, and normal room temperature is often sufficient without any additional heat source. A low-wattage heat mat is only worth adding if your space runs consistently cold.", source: "giant-millipede-tank-setup-guide" },
        { label: "Humidity", value: "70 to 80%, achieved by keeping roughly a third of the substrate genuinely moist, misting once or twice daily, and ensuring good cross-ventilation to prevent mold and mite problems. Monitor with a digital hygrometer rather than guessing.", source: "giant-millipede-tank-setup-guide" },
        { label: "Substrate, the whole job", value: "4 to 6 inches of pesticide-free organic topsoil mixed with coconut fiber, along with decaying hardwood and hardwood leaf litter, oak and beech both work well. Avoid softwoods like pine and cedar entirely, their resins are toxic to this species, and never use any substrate material that's been treated with pesticides.", source: "giant-millipede-tank-setup-guide" },
        { label: "Food", value: "The substrate is most of the diet. Decaying hardwood and pesticide-free hardwood leaf litter, oak, beech and maple, is the staple food itself. Fresh produce is a supplement on top of that: cucumber, carrot, sweet potato and leafy greens, plus small amounts of fruit such as apple, banana, melon or mango, offered every two to three days and taken back out before it molds.", source: "giant-millipede-tank-setup-guide" },
        { label: "Calcium", value: "Stays in permanently instead of going in on a schedule, a cuttlebone or powdered calcium carbonate left on the substrate for the animal to gnaw when it needs it. Skip it and the exoskeleton goes soft and the molts start failing.", source: "giant-millipede-tank-setup-guide" },
        { label: "Water", value: "A small shallow dish with a few pebbles dropped in so nothing drowns in it.", source: "giant-millipede-tank-setup-guide" },
        { label: "Lighting", value: "None required. This species actively avoids bright light. If you're running live plants in a bioactive setup, a low-output 6500K plant light is the only lighting worth adding.", source: "giant-millipede-tank-setup-guide" },
        { label: "Isopods", value: "Resist the common instinct to add isopods as a cleanup crew alongside your millipede. Isopods can actually harass or weaken millipedes in a shared enclosure, an unexpected conflict that's worth knowing about before you set up a combined bioactive tank.", source: "giant-millipede-tank-setup-guide" },
        { label: "Handling, the real risk", value: "A giant millipede has a heavy body and a genuinely brittle exoskeleton, and a fall from even a modest height, higher than the animal's own body length, onto a hard surface can crack the shell and prove fatal. Handle over a soft surface close to the ground, support the full body, and never grab from above, let the millipede walk onto your hand instead.", source: "giant-millipede-handling-guide" },
        { label: "The secretion", value: "A millipede that has decided you might be a threat curls into a tight spiral first, and if that does not settle things it releases a brown or yellow fluid. The fluid carries benzoquinones, mild irritants that can sting skin and eyes in someone sensitive and leave a temporary stain. Keep it away from your eyes and mouth, and wash your hands thoroughly after a session.", source: "giant-millipede-handling-guide" },
        { label: "A millipede that will not come up", value: "Millipedes molt underground, a buried one must not be disturbed, and a molt may take several weeks. A buried millipede is not stressed by you yet. Digging it up is how it becomes so.", source: "giant-millipede-handling-guide" },
        { label: "Dehydration", value: "The number one cause of death in this species. Watch for a shriveled, sluggish appearance and dry, cracking segments along the body. Manageable early, raise humidity, moisten the substrate more deeply, and provide a shallow water dish.", source: "giant-millipede-health-issues-guide" },
        { label: "A failed molt", value: "Often fatal, and caused by low humidity, poor nutrition, or disturbance during the vulnerable molting process. Never assist a molt or attempt to remove shed skin yourself, this can cause real harm.", source: "giant-millipede-health-issues-guide" },
        { label: "Mites", value: "Not every mite is a problem, and many species living alongside a captive millipede are harmless. A heavy infestation shows up as unusually frequent cleaning behavior, thrashing, or visible mite clusters concentrated near the head or legs. Never use pesticides or mite sprays, these are toxic to millipedes and can kill the animal you're trying to help.", source: "giant-millipede-health-issues-guide" },
        { label: "Lifespan", value: "5 to 7 years in the wild, and up to 10 years in captivity. This is remarkable longevity for an invertebrate, considerably longer than the praying mantis, jumping spider, or hissing cockroach, and worth factoring into your decision as a real, multi-year commitment.", source: "giant-millipede-cost-guide" },
        { label: "Adult size", value: "10 to 15 inches (25 to 38 cm)." },
        { label: "Bug spray", value: "A millipede is an arthropod and every insecticide sold for use inside a home is designed to kill arthropods. A healthy animal can be found dead the morning after an ordinary household task, a can of ant spray used in the kitchen, a plug-in device switched on in the hallway, a dog treated for fleas on the living room rug.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "First aid for the secretion", value: "Wash the affected skin thoroughly with soap and water, and for the eyes, irrigate with saline or water and then get them examined. That is the opposite of what a tarantula's urticating hairs call for, which is why one invertebrate first-aid routine does not cover them all.", source: "invertebrate-rehousing-guide" },
        { label: "A power cut, and a trip", value: "A millipede is kept at whatever temperature the room already sits at, so a power cut is rarely the emergency it would be for a reptile or a fish tank. A full, shallow water dish refilled the morning you go, stable humidity, and a checked lid do more for a short absence than any attempt to pre-feed.", source: "invertebrate-emergency-travel-shipping-guide" },
      ],
    },
    emergencyCard: {
      source: "giant-millipede-health-issues-guide",
      callNow: [
        "A shriveled, sluggish appearance and dry, cracking segments along the body",
        "A molt that has been disturbed, or shed skin still attached, which is never to be assisted or pulled off by hand",
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
        { label: "Tank", value: "Use a glass terrarium, roughly a 10-gallon tank for 2 to 3 small crabs, more for larger crabs or bigger groups. The lid needs to seal in humidity, glass or acrylic works best; if you're using a screen lid, cover part of it with plastic wrap or tape to help retain moisture.", source: "hermit-crab-tank-setup-guide" },
        { label: "Group size", value: "Keep at least two crabs together, they're a genuinely social species.", source: "hermit-crab-tank-setup-guide" },
        { label: "Temperature", value: "Aim for 75 to 85°F, with the warm side around 80°F. Use a side- or back-mounted heat mat. Never place a heat mat under the tank, heat rising up through deep substrate can be dangerous, even fatal, to a crab that's buried or molting underneath.", source: "hermit-crab-tank-setup-guide" },
        { label: "Humidity", value: "Maintain 75 to 85% relative humidity. Monitor with a hygrometer, and maintain the range through a combination of moist substrate, a well-sealed lid, and a dedicated moss pit.", source: "hermit-crab-tank-setup-guide" },
        { label: "Substrate", value: "Mix play sand and coconut fiber at roughly a 5:1 ratio, aiming for a 'sandcastle consistency' that holds a tunnel shape when packed. Depth is at least 6 inches, or about 3 times the height of your largest crab, since hermit crabs burrow to molt and need genuine room to do it.", source: "hermit-crab-tank-setup-guide" },
        { label: "Water", value: "Two separate soakable water dishes, one with dechlorinated fresh water, one with marine saltwater made from an aquarium salt mix, never table salt. Both should be deep enough for a crab to fully submerge but include an easy way to climb back out, hermit crabs can and do drown if they can't exit.", source: "hermit-crab-tank-setup-guide" },
        { label: "Shells", value: "Offer multiple natural, unpainted shells per crab, ideally 3 to 5 or more, spanning a range of sizes so your crab has room to size up as it grows. Painted shells are toxic and should never go in the enclosure.", source: "hermit-crab-tank-setup-guide" },
        { label: "Diet", value: "Offer a varied diet with calcium sources like cuttlebone, fresh fruit and vegetables, protein like dried shrimp or insects, and leaf litter. Feed in the evening, since they're most active at night, and remove leftovers the next morning.", source: "hermit-crab-tank-setup-guide" },
        { label: "Lighting", value: "A standard 12-hour light, 12-hour dark cycle works well. Hermit crabs are nocturnal, and there's no established UVB requirement for this species.", source: "hermit-crab-tank-setup-guide" },
        { label: "Handling", value: "Let the crab sit on a flat, open palm instead of closing your hand around it. If you need to move it, lift from the back of the shell, not by grabbing at the legs or claws directly. Keep sessions brief.", source: "hermit-crab-handling-guide" },
        { label: "Buried and out of sight", value: "A newly disturbed crab, or one that's just arrived in a new home, commonly digs down and stays out of sight for days, sometimes over a week, while it settles in. A molting crab can stay buried considerably longer, anywhere from several weeks up to around three months, and should not be dug up or disturbed during that time no matter how long it's been.", source: "hermit-crab-handling-guide" },
        { label: "The first molt", value: "Every pet hermit crab is wild-caught, not captive-bred, and this adjustment period is where most hermit crab deaths actually happen. Quarantine and isolate new crabs, and improve humidity and temperature gradually rather than making sudden changes. A hermit crab generally isn't considered past the PPS risk period until it has successfully molted once in your care.", source: "hermit-crab-health-issues-guide" },
        { label: "Budget", value: "$3 to $40 per crab, roughly $130 to $450 for a complete setup, and around $10 to $30 a month after that.", source: "hermit-crab-cost-guide" },
        { label: "Lifespan", value: "Hermit crabs can live 10 to 20 years or more when kept well.", source: "hermit-crab-cost-guide" },
        { label: "Adult size", value: "Up to 4 inches (10 cm) across, including legs." },
        { label: "Molting", value: "Burrowing completely underground and disappearing from view is the sign, and several weeks buried, depending on size, is the normal duration. Never disturb a molting invertebrate, which here means no digging up a buried hermit crab to check on it.", source: "invertebrate-molting-guide" },
        { label: "Household pesticides", value: "Every insecticide sold for use inside a home is designed to kill arthropods, and an invertebrate pet has none of the safety margin a dog or cat gets. A can of ant spray used in the kitchen, a plug-in device switched on in the hallway, or a dog treated for fleas on the living room rug are all routes into an enclosure.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "Power outage", value: "Hermit crabs are the real exception in this group. They're actively heated and humidified rather than kept at a comfortable room temperature, which puts their outage risk much closer to a reptile's or a fish's than to a tarantula's. A battery-powered backup for the heat source and a plan for holding humidity, a sealed lid and damp substrate, belongs in your outage kit.", source: "invertebrate-emergency-travel-shipping-guide" },
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
        { label: "The spider", value: "$15 to $60. Captive-bred spiderlings run $15 to $25. Juvenile or sub-adult females, generally more prized than males since they live considerably longer, run $25 to $60. Named regional color forms cost more than standard animals.", source: "jumping-spider-cost-guide" },
        { label: "Setup budget", value: "Roughly $112 to $150, and the enclosure is most of it at $60 to $70. Coconut fiber substrate, mini cork bark or artificial plants, a fine mist spray bottle and a digital hygrometer make up the rest.", source: "jumping-spider-cost-guide" },
        { label: "Ongoing costs", value: "Roughly $5 to $15 a month. Feeder insects make up nearly the entire monthly cost.", source: "jumping-spider-cost-guide" },
        { label: "Vet costs", value: "Effectively none. Exotic vets rarely treat spiders, and the large majority of health issues in this species trace back to the enclosure environment rather than anything requiring professional treatment.", source: "jumping-spider-cost-guide" },
        { label: "Lifespan", value: "Males typically live 8 to 12 months after reaching maturity, while females live longer, 1.5 to 3 years. A realistic overall range to expect is 1 to 3 years.", source: "jumping-spider-cost-guide" },
        { label: "Adult size", value: "0.5 to 0.75 inches (1.3 to 1.9 cm), females larger than males." },
        { label: "Enclosure size", value: "A minimum of about 4 by 4 by 7 inches, vertically oriented, works for an adult, and something closer to 8 to 10 inches tall gives more genuine climbing room. This is an arboreal species, up and down space matters more than floor area.", source: "jumping-spider-tank-setup-guide" },
        { label: "One per enclosure", value: "Use a front-opening design with cross-ventilation, and house one spider per enclosure, they're cannibalistic toward each other.", source: "jumping-spider-tank-setup-guide" },
        { label: "Temperature", value: "72 to 82°F suits this species well, and normal room temperature is usually fine without any supplemental heat at all. If your space runs consistently below about 70°F, a thermostat-controlled heat mat on the side wall works, but never place heat under the substrate, and never run one without a thermostat.", source: "jumping-spider-tank-setup-guide" },
        { label: "Humidity", value: "Target 50 to 60% for Phidippus species like the regal jumping spider, tropical genera need more. Mist one corner of the enclosure every 2 to 3 days with dechlorinated water, and aim to leave drinkable droplets rather than soaking everything. Good ventilation matters here too, humidity without airflow invites mold.", source: "jumping-spider-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber, or a coconut fiber and sphagnum moss blend, about an inch or two deep, helps buffer humidity swings between mistings. Avoid sand or vermiculite, and skip using bare paper towel as a long-term substrate, it doesn't hold moisture well enough.", source: "jumping-spider-tank-setup-guide" },
        { label: "Lighting", value: "This species is diurnal and genuinely relies on vision to hunt, so provide bright ambient light on a normal 12-hour day and night cycle. UVB is not required for this species.", source: "jumping-spider-tank-setup-guide" },
        { label: "Where the door goes", value: "Jumping spiders build their silk retreat near the top of the enclosure, so it's worth positioning your access opening lower or to the side.", source: "jumping-spider-tank-setup-guide" },
        { label: "Feeding, by life stage", value: "Spiderlings every 1 to 2 days on 1 to 2 flightless fruit flies. Small to mid juveniles every 2 to 3 days. Sub-adults every 2 to 4 days. Adults every 2 to 5 days, with the abdomen deciding where in that window a given spider sits.", source: "jumping-spider-feeding-guide" },
        { label: "The abdomen is the gauge", value: "A shrunken or wrinkled abdomen means it's hungry and can be fed early. A plump, rounded abdomen noticeably wider than the cephalothorax means skip the next feeding. Feed in the morning, jumping spiders are visual daytime hunters, and pull uneaten live prey within a few hours to overnight so it doesn't harass or injure the spider, especially near a molt.", source: "jumping-spider-feeding-guide" },
        { label: "What they eat", value: "An obligate carnivore, no plant matter and no commercial spider food. Flightless fruit flies are the staple for slings and small juveniles. Pinhead-to-small crickets, houseflies, and bluebottle or greenbottle flies work for juveniles through adults, flies in particular are a preferred, low-injury-risk staple since they can't bite back or burrow.", source: "jumping-spider-feeding-guide" },
        { label: "Prey size", value: "Keep prey noticeably smaller than the spider, roughly no bigger than the abdomen, matched to the size of the chelicerae. Oversized prey is the most repeated safety warning here, a cricket that's too big can injure or kill a jumping spider, especially near a molt.", source: "jumping-spider-feeding-guide" },
        { label: "Never feed", value: "Ants, repeatedly named as the single most important thing to avoid, they can bite or spray formic acid, and jumping spiders show an instinctive fear response to them. Hard-shelled beetles and pill bugs, too tough to bite through effectively. Fireflies. Other spiders, a real cannibalism and injury risk. Wild-caught or unknown insects, especially anything from an area treated with pesticides.", source: "jumping-spider-feeding-guide" },
        { label: "Supplements", value: "Spiders can't be dusted with supplement powder, which makes what the feeders ate the only nutrition that reaches them, so gut-loading the feeders is the whole supplement routine.", source: "jumping-spider-feeding-guide" },
        { label: "Water", value: "A shallow water dish, plus the drinking droplets the misting leaves on the walls. Never mist the spider's abdomen directly, water can seep between the book-lung plates and cause suffocation.", source: "jumping-spider-feeding-guide" },
        { label: "A spider that stops eating", value: "Usually premolt fasting, which commonly starts days to weeks before shedding. After a molt, new fangs are soft and can't safely bite or digest prey, so wait about 2 to 3 days before offering food again. A healthy adult can safely go roughly 2 to 3 weeks without eating. Spiderlings have much smaller reserves and shouldn't be left that long.", source: "jumping-spider-feeding-guide" },
        { label: "Dehydration", value: "The single most common problem, and honestly the leading cause of death in captive jumping spiders. Watch for curled legs and general lethargy. It's caused by humidity running too low or an absence of drinkable water droplets.", source: "jumping-spider-health-issues-guide" },
        { label: "Retained molt", value: "A spider that gets stuck in its old exoskeleton during a molt can lose limbs or die. This is caused by insufficient humidity in the lead-up to molting. Once a molt has genuinely failed, there's little that can be done. Never feed or disturb a spider that's in or approaching a molt.", source: "jumping-spider-health-issues-guide" },
        { label: "Heat", value: "Heat stress comes from direct sunlight or an unregulated heat mat, and it's manageable by correcting placement and always running supplemental heat through a thermostat if you use it at all.", source: "jumping-spider-health-issues-guide" },
        { label: "Handling", value: "Minimal handling is the right approach. If you do handle one, let it walk freely onto and off your hand instead of grabbing or restraining it, they're genuinely fragile, and a fall, even a short one, can rupture the abdomen and prove fatal. Always handle low, over a soft surface.", source: "jumping-spider-handling-guide" },
        { label: "What enrichment means here", value: "A jumping spider navigates by sight in a way almost no other invertebrate does, and a bare acrylic cube gives those eyes nothing. Vary the surfaces, depths and textures inside the enclosure: cork bark mini flats, small branches, and artificial or live foliage create the layered, three-dimensional space a salticid actually reads.", source: "jumping-spider-enrichment-guide" },
        { label: "They know who you are", value: "A 2024 paper in eLife documents individual recognition in Phidippus regius. Interaction with human caretakers during handling and maintenance is mentioned in the salticid literature as a form of behavioral enrichment, so keep it brief, low to a soft surface, and never over a hard floor.", source: "jumping-spider-enrichment-guide" },
        { label: "Molting", value: "A spider that has sealed itself into a retreat is likely molting, and interrupting that is dangerous. Normal molting signs and a failed molt look different, and the difference is worth knowing before it happens.", source: "invertebrate-molting-guide" },
        { label: "Bug spray", value: "A spider is an arthropod and every insecticide sold for use inside a home is designed to kill arthropods. A healthy, well-fed pet spider can be found dead in its enclosure the morning after an ordinary household task, a can of ant spray used in the kitchen, a plug-in device switched on in the hallway, a dog treated for fleas on the living room rug.", source: "invertebrate-pesticide-hazards-guide" },
        { label: "Rehousing", value: "The catch cup and card method, worked low over a larger tub so a bolt or a fall goes nowhere, and never during a molt.", source: "invertebrate-rehousing-guide" },
        { label: "A power cut, and a trip", value: "A jumping spider lives at whatever temperature the room already sits at, so a power cut is rarely the emergency it would be for a reptile or a fish tank. A full, shallow water dish refilled the morning you go, stable humidity, and a checked lid do more for a short absence than any attempt to pre-feed.", source: "invertebrate-emergency-travel-shipping-guide" },
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
      vetLine: "The last few of these are treated as urgent, warranting an exotic-animal vet rather than a wait-and-see approach. Everything above them is read against the abdomen first: a healthy adult can safely go roughly 2 to 3 weeks without eating, and older adults are anecdotally reported tolerating a month or more, particularly around a molt or egg-guarding, none of that alone is cause for alarm.",
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "10-gallon terrarium with secure lid", low: 30, high: 60 },
        { item: "Coconut fiber or bark chip substrate", low: 15, high: 25 },
        { item: "Cork bark tubes or egg cartons", low: 10, high: 20 },
        { item: "Shallow water dish with sponge insert", low: 5, high: 10 },
        { item: "Digital thermometer", low: 10, high: 15 },
      ],
      annual: [
        { item: "Fresh fruits, vegetables, and dry kibble", low: 30, high: 60 },
        { item: "Substrate replacement", low: 15, high: 25 },
      ],
    },
    sections: {
      housing: `A 10-gallon terrarium with a tight, secure lid is a reasonable starting point for a small colony of 10 to 20 individuals. For larger colonies (which they become quickly), upgrade to a 20-gallon or larger rubbermaid-style container with a ventilated lid. Madagascar hissing cockroaches are exceptional climbers on rough surfaces - any textured wall, wood, or mesh can be scaled. Smooth glass or smooth plastic sides at least 10 to 12 inches tall will prevent escape. Petroleum jelly applied near the top edge (a "barrier" band) is a secondary escape-proofing method some keepers use.

Use coconut fiber or bark chip substrate 2 to 3 inches deep. Add cork bark tubes, egg carton sections stacked vertically, or cardboard tubes - these create the dense, structured hides this social species prefers. They pile together in these structures during the day and emerge at night.

Temperatures of 75 to 90 degrees F are ideal. Ambient room temperature above 70 degrees F usually suffices without supplemental heating. Moderate humidity of 50 to 70% is appropriate. Avoid overly wet conditions, which encourage mold.`,
      diet: `Madagascar hissing cockroaches are detritivores that are not picky. The core of their diet is fresh fruits and vegetables: apple slices, banana, carrot, sweet potato, leafy greens (collard greens, romaine), and cucumber are all accepted eagerly. Rotate offerings to provide variety.

Supplement with a protein source: dry dog or cat kibble (grain-free or basic formulation) provides the amino acids needed for healthy molting and breeding. Oatmeal, dry whole-grain cereal, and bran are also accepted as carbohydrate supplementation.

Remove all fresh food within 24 to 48 hours before mold develops. Provide cuttlebone or crushed eggshell pieces constantly - calcium is critical for successful molting in cockroaches as in all invertebrates. Fresh water must be available at all times, but use a shallow dish with a sponge, cotton ball, or pebbles inside to prevent smaller individuals from drowning.`,
      enrichment: `Madagascar hissing cockroaches are social, colony-living animals - their primary enrichment comes from appropriate group dynamics. They maintain a social hierarchy, with males competing for dominance through physical pushing contests and the remarkable hissing displays. Watching these contests is genuinely fascinating. Males hiss aggressively during territorial and mating encounters; both sexes produce a startle hiss when suddenly disturbed.

They are completely harmless to humans: they do not bite, they have no venom, and they do not sting. They are one of the best invertebrate species for children and beginners due to their large size, slow movement, predictable behavior, and tolerance of handling. Allow them to walk across open palms - they are unhurried and easy to manage.

Cork bark tubes, stacked egg carton sections, and cardboard tubes give the colony the dense social spaces they seek naturally. This is especially important for juveniles and molting adults, who need secure, enclosed spaces to complete their molts safely. A well-furnished enclosure with adequate hiding space dramatically reduces molting failures.`,
      health: `Madagascar hissing cockroaches are exceptionally hardy with few health problems when kept in appropriate conditions. The most common issues are all avoidable: overcrowding (which causes stress, increased male aggression, and premature deaths), failed molts from insufficient humidity or inadequate hides, and mite infestations from a too-wet substrate.

Mites show as tiny white or brown specks visible on the cockroaches or moving through the substrate. Treat by removing all cockroaches, discarding the old substrate completely, cleaning and drying the enclosure, and starting fresh. Increase ventilation and allow the substrate to dry slightly between mistings.

Escaped cockroaches are the most serious concern for many keepers: check the lid and escape barrier routinely. Males fight - in overcrowded conditions with too few hides, subordinate males can be killed. Provide enough structure that all individuals can find secure shelter simultaneously. This species can live 2 to 5 years, and colonies grow rapidly once established.`,
      checklist: [
        "10-gallon terrarium with secure, tight lid",
        "Coconut fiber or bark chip substrate",
        "Cork bark tubes or egg carton for hiding",
        "Fresh fruits, vegetables, and dry kibble",
        "Cuttlebone or crushed eggshell for calcium",
        "Shallow water dish with sponge insert",
        "Digital thermometer",
        "Moderate humidity (50 to 70%)",
        "Spray bottle for misting",
        "Secure lid (excellent climbers)",
      ],
    },
    faqs: [
      { q: "Why do Madagascar hissing cockroaches hiss?", a: "By forcing air through modified abdominal spiracles (breathing openings). Unlike most insect sounds produced by wing-rubbing or leg-rubbing, the hiss is produced by expelling air - a unique mechanism in the insect world. Males use a distinctive multi-hiss pattern during dominance contests with other males, and a different pattern during mating. Both males and females produce a single sharp startle hiss when suddenly disturbed by a predator (or a surprised keeper). The sound is much louder than you would expect from an insect." },
      { q: "Are Madagascar hissing cockroaches safe to handle?", a: "Yes - they are one of the best invertebrate options for beginners, particularly children, because they have no bite, no sting, no venom, and no urticating hairs. They move slowly and predictably, are large enough to observe and handle comfortably, and are very tolerant of gentle handling. They may hiss when first picked up (startle hiss) and may grip with strong tarsal claws, but they cannot harm you. Wash hands before and after handling. Their size - up to 3 inches - makes them significantly easier to handle than smaller invertebrates." },
      { q: "What do hissing cockroaches eat?", a: "Fresh fruits and vegetables form the core of their diet: apple, banana, carrot, sweet potato, leafy greens, and cucumber are all eagerly accepted. Supplement with protein: dry dog or cat kibble, dried cat food, or mealworm powder provides the amino acids needed for healthy molting and breeding. Calcium from cuttlebone or crushed eggshell must be available at all times for successful molting. Fresh water must always be accessible in a shallow dish with pebbles or a sponge insert to prevent drowning. Remove fresh food within 24 to 48 hours to prevent mold." },
      { q: "How do I stop hissing cockroaches from escaping?", a: "Their climbing ability on textured surfaces is remarkable - they can scale glass, most plastics, and any rough surface. Smooth glass or smooth plastic walls at least 10 to 12 inches tall are the primary barrier for most housing. A secondary layer is a 2 to 3 inch band of petroleum jelly applied near the top interior edge of the enclosure - cockroaches will not cross this. The most critical point is the lid: a lid that doesn't seal completely against the sides is the number-one escape vector. Inspect the seal regularly, especially if the population is growing." },
      { q: "How fast do hissing cockroach colonies grow?", a: "Very fast. Females are ovoviviparous - they carry the egg case internally and give birth to 20 to 60 live nymphs per clutch, with nymphs reaching sexual maturity in 5 to 7 months. A small starting group of mixed males and females can produce hundreds of individuals within a year. If you don't want a colony, keep only same-sex groups. Many keepers intentionally maintain large colonies because hissers make excellent feeder insects for reptiles and amphibians, making them doubly useful in a multi-pet household." },
      { q: "Are Madagascar hissing cockroaches good pets for kids?", a: "Yes, they're one of the better invertebrate choices for children specifically. No bite, no sting, no venom, slow and predictable movement, and a size that's easy to see and handle without being intimidating. The hiss startles people the first time, but it's harmless, and kids tend to find it more fascinating than scary." },
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
        { label: "Buy an adult", value: "Buy an adult or subadult, not a nymph. Nymphs are genuinely difficult to keep alive through their many molts, and a beginner is much better served starting with an animal that's already past that fragile early stage.", source: "praying-mantis-cost-guide" },
        { label: "Enclosure size", value: "Length and width should each be at least twice the mantis's body length, and height at least three times its length. A reasonable adult enclosure runs around 8 inches long, 8 inches wide, and 12 inches tall as a minimum. Nymphs do well in something much smaller, a vented 32-ounce deli cup works fine at that stage.", source: "praying-mantis-tank-setup-guide" },
        { label: "The measurement that decides a molt", value: "The drop from the top of the perch to the floor, which wants to be at least four times the mantis's length. On an 8 by 8 by 12 enclosure with the perch reaching the lid, that drop is 12 inches, enough for a mantis up to about three inches. A larger adult wants a taller box than the stated minimum.", source: "praying-mantis-tank-setup-guide" },
        { label: "What the ceiling has to be", value: "Something the mantis can grip securely upside down for hours: mesh, screen or a rough surface. Smooth glass or plastic at the top is a hazard, and adding mesh or a piece of rough material to hang from is a two minute fix that prevents the most common cause of death in the species.", source: "praying-mantis-enrichment-guide" },
        { label: "Keep the top clear", value: "Keep the center of the upper enclosure clear. Structure that fills the space directly under the ceiling is structure the mantis can hit on the way down during a molt.", source: "praying-mantis-enrichment-guide" },
        { label: "Temperature", value: "Most commonly kept species, Carolina and Chinese mantises among them, do fine at normal room temperature, which in practice means roughly 70 to 80\u00B0F. Stay below 88\u00B0F. A small heat mat is only necessary if your home runs genuinely cool. Never place the enclosure in direct sunlight, the confined space heats up fast enough to be fatal.", source: "praying-mantis-tank-setup-guide" },
        { label: "Humidity", value: "Species-dependent, and the spread is wide: a temperate Chinese mantis sits around 50 to 65%, while tropical species like Ghost and Orchid mantises want 70 to 80%. Mist lightly at least once daily, more often in a mesh enclosure. Those droplets are also how a mantis drinks, though heavy standing water is a drowning risk for small nymphs.", source: "praying-mantis-tank-setup-guide" },
        { label: "Ventilation", value: "A mesh or ventilated lid, never solid glass or plastic. Airflow is what keeps the mold and internal infection that excess humidity brings out of the enclosure, and that failure mode kills quietly, with no visible symptom until it is too late.", source: "praying-mantis-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber, plain soil, bark, or even paper towel all work well. Substrate here serves two purposes: giving the mantis stable footing and helping hold humidity at the level you're aiming for.", source: "praying-mantis-tank-setup-guide" },
        { label: "Lighting", value: "No special lighting or UVB is needed. A normal household light cycle, roughly 12 hours of light a day, is sufficient.", source: "praying-mantis-tank-setup-guide" },
        { label: "Feeding", value: "Live prey only. Offer food every other day, as much as the mantis will take in one sitting. The honest range across species runs from every day to every four days, set by the species, the prey, the mantis's size and whether it is already well fed or looking thin.", source: "praying-mantis-tank-setup-guide" },
        { label: "Prey size", value: "Nothing longer than about a third of the mantis's own length. Fruit flies carry the smallest nymphs, then bottle flies, small crickets and appropriately sized dubia roaches as it grows, with larger crickets, waxworms and bottle flies available to a full adult.", source: "praying-mantis-tank-setup-guide" },
        { label: "Live prey, not dead", value: "Mantises are visual ambush hunters that respond to movement, and most will ignore a dead insect entirely. Live flying prey is also the closest thing to enrichment this animal has, since hunting is most of its behavioral repertoire.", source: "praying-mantis-enrichment-guide" },
        { label: "Feeding around a molt", value: "A mantis going off food is usually about to molt, so stop offering and pull anything live back out: a cricket left in with a soft, newly molted mantis will chew on it. After a molt, wait until the legs and mouthparts have hardened, several hours to a day, before offering anything.", source: "praying-mantis-tank-setup-guide" },
        { label: "Handling", value: "Let the mantis walk onto your hand or a tool rather than grabbing it. Handle only in a closed room. Mantises jump, and the winged adults of most commonly kept species fly, so an animal that startles off your hand can cross the room. Never restrain or squeeze a mantis, their bodies are delicate in ways that aren't always obvious.", source: "praying-mantis-handling-guide" },
        { label: "Hands off before a molt", value: "Avoid handling in the days leading up to a molt. A pre-molt mantis is at its most physically vulnerable, and handling during this window raises real risk of a failed or fatal molt. If your mantis has stopped eating and seems unusually still, treat that as a signal to leave it alone entirely.", source: "praying-mantis-handling-guide" },
        { label: "One per enclosure", value: "They are cannibalistic and will eat each other at any size difference and often at none. Solo housing is the only sensible default outside of deliberate, supervised breeding.", source: "praying-mantis-enrichment-guide" },
        { label: "Budget, the animal", value: "Common species like Carolina and Chinese mantises run $15 to $35. Ghost mantises run $15 to $75 depending on age and quality. Orchid mantises, prized for their striking appearance, can reach $150. Most species stay well under $75 even as full adults.", source: "praying-mantis-cost-guide" },
        { label: "Budget, the setup", value: "The three required lines, enclosure, substrate, and branches or mesh, come to about $85 to $115. The spray bottle and tongs take a full first-time setup to roughly $100 to $145. Add the mantis and most buyers are between $115 and $220.", source: "praying-mantis-cost-guide" },
        { label: "Ongoing costs", value: "Roughly $10 to $40 a month, almost all of it live feeder insects. Fruit fly cultures run $5 to $10 each, and crickets cost roughly 10 to 50 cents apiece depending on size.", source: "praying-mantis-cost-guide" },
        { label: "Vet costs", value: "Essentially none. Exotic vets rarely treat invertebrates, and mantis care is entirely husbandry-based. Correct humidity, proper feeding, and careful handling around molting time do far more for a mantis's health than any veterinary intervention could.", source: "praying-mantis-cost-guide" },
        { label: "Lifespan", value: "Most commonly kept mantis species live just 6 to 12 months total, Chinese mantises toward 8 to 12 months, African mantises closer to 6 to 9 months, with females typically outliving males. A small number of species can reach around 18 months under excellent care.", source: "praying-mantis-cost-guide" },
        { label: "Adult size", value: "0.5 to 6 inches (1 to 15 cm) depending on species." },
        { label: "If you get an ootheca", value: "An ootheca can release dozens to hundreds of tiny nymphs within a short window, often within an hour or two of each other. Mantis nymphs are highly cannibalistic toward their siblings, so individual containers and a fruit fly culture need to be ready before the hatch, not after.", source: "praying-mantis-ootheca-guide" },
        { label: "Pre-molt signs", value: "An invertebrate about to molt goes off food, dulls in color and becomes still. That is not illness and it is not the moment to intervene: leave it alone, and leave the old shed skin where it falls until the animal has hardened.", source: "invertebrate-molting-guide" },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Host plant leaves are often free (garden/hedge cuttings), so annual
    // food cost is low compared to most other pets on this list.
    costs: {
      setup: [
        { item: "Tall mesh enclosure", low: 25, high: 50 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Fine misting bottle", low: 5, high: 10 },
      ],
      annual: [
        { item: "Host plant cuttings (often free if garden-sourced)", low: 0, high: 40 },
      ],
    },
    sections: {
      housing: "A tall, well-ventilated mesh enclosure is essential. The rule is at least 3 times the insect's body length in height and 2 times in width, to allow molting (they hang and pull free of their old exoskeleton). A 30x30x45 cm or larger mesh enclosure suits most adult species. Ventilation is critical: still air causes respiratory problems. Keep fresh host plant cuttings in a vase of water (covered so insects cannot drown) inside the enclosure. Temperatures of 68 to 80 degrees F suit most temperate and tropical species.",
      diet: `Stick insects eat leaves of specific host plants, and the species must match the plant. Indian stick insects (Carausius morosus, the most common and beginner-friendly species) readily accept bramble (blackberry), rose, hawthorn, privet, ivy, and oak - providing multiple options ensures the insect always has fresh food when one plant is out of season.

Always have fresh cuttings available. Replace them every 2 to 3 days or when leaves begin wilting significantly. Stand the cuttings in a small container of water (sealed around the stems so insects cannot drown) inside the enclosure - this keeps leaves fresh much longer than dry cuttings.

Rinse all leaves thoroughly before offering to remove pesticide residue. Stick insects will refuse and eventually starve rather than eat a plant species they don't accept. Do not offer unfamiliar plants without confirming they are a valid host for your species. Thoroughly research the specific host plant requirements before acquiring any stick insect species.`,
      enrichment: `Stick insects are observation animals - their enrichment comes from their environment and their behavior, not from interaction. Provide an abundance of twigs, branches, and the host plant itself as climbing surfaces, camouflage backdrop, and molting sites. The more the enclosure resembles a hedge or woodland interior, the more natural behavior you will observe.

Watch for three primary behaviors: feeding (the slow, methodical leaf-eating), molting (a rare and dramatic event where the insect hangs and pulls free of its old exoskeleton over 20 to 60 minutes), and the classic "swaying" behavior - the insect rocks slowly side to side to mimic a twig moving in a breeze. This convincing predator-avoidance behavior is one of nature's finest performances.

Most stick insect species can be handled but are fragile. Never grab a limb - they detach limbs under stress as a survival mechanism (autotomy), and while juvenile limbs regrow at the next molt, adult limbs do not. Always let the insect walk voluntarily onto an open palm. Their lightweight, delicate bodies make them one of the most fragile invertebrate pets.`,
      health: `Molting is the primary health risk in captive stick insects. The insect hangs from a branch or the enclosure top, splits its old exoskeleton along the back, and slowly pulls free - this process takes 30 minutes to over an hour for large species. Any disturbance during this process can cause a fatal, trapped molt. Any enclosure insufficiency (too short, too dry, too crowded) dramatically increases molt failure rate.

Maintain humidity around 50 to 70% for most temperate species, higher (70 to 80%) for tropical species. Mist the leaves once daily with a fine spray - stick insects drink by licking water droplets from leaf surfaces. They rarely or never drink from standing water. Desiccation during molt is the most common cause of death.

After each molt, inspect the insect carefully. Missing limbs or deformed antennae indicate poor molting conditions. Monitor for droppings (small, hard pellets scattered on the floor) - absence of droppings for several days combined with an inactive insect suggests illness or premolt. Lifespan is typically 6 to 18 months depending on species and sex.`,
      checklist: [
        "Tall mesh enclosure (3x body height minimum)",
        "Fresh host plant cuttings (bramble, rose, privet)",
        "Covered water vase for plant cuttings",
        "Twigs and branches for perching",
        "Digital thermometer and hygrometer",
        "Fine misting bottle (daily leaf misting for drinking water)",
        "Mesh lid (never glass or solid plastic)",
        "House species separately (most are docile but competitive for food)",
        "Rinse all leaves before offering",
        "Know your species' specific host plant",
      ],
    },
    faqs: [
      { q: "Are stick insects good beginner invertebrates?", a: "Indian stick insects (Carausius morosus) are widely considered one of the most beginner-friendly invertebrate pets. They are legal, widely available, cheap, hardy, and their care is minimal once you establish a supply of host plant cuttings. The single most important requirement is identifying the right host plant before you acquire the animal - bramble (blackberry), rose, hawthorn, privet, and ivy are all accepted by Indian stick insects and are accessible in most regions. Many other stick insect species have narrower host plant requirements and are better suited to experienced keepers." },
      { q: "Can stick insects reproduce without a male?", a: "Yes - most common pet stick insect species are parthenogenetic, meaning females reproduce without males and lay fertile eggs throughout their lives. Indian stick insects and several other popular species are entirely or predominantly female in captivity. The eggs of some species are so well-adapted for dispersal that ants carry them underground, where they can remain viable for years before hatching - mimicking plant seeds in both size, shape, and chemical signals. A single female stick insect can produce dozens to hundreds of eggs over her lifetime." },
      { q: "What do stick insects eat?", a: "Only the leaves of specific host plants - the exact species required depends on the stick insect species. Indian stick insects accept bramble (blackberry), rose, hawthorn, privet, and ivy. Always rinse leaves thoroughly to remove pesticide residue. Keep fresh cuttings standing in a water container inside the enclosure (seal around the stems so insects cannot drown) and replace every 2 to 3 days as leaves wilt. Stick insects will starve rather than eat a plant they don't recognize - confirming host plant compatibility before acquiring any species is not optional." },
      { q: "What causes failed molts in stick insects?", a: "The same three factors that cause failed molts in mantises: enclosure too short (stick insects need 3x their body length in height to hang and pull free of the old exoskeleton), humidity too low (causing the old skin to harden before the insect fully exits), and disturbance during the process. Daily misting of the enclosure's leaves is how stick insects drink and how humidity is maintained. A properly sized, well-ventilated, regularly misted enclosure eliminates the majority of molt failures. Never pick up a stick insect that is hanging still and seems rigid - it is almost certainly mid-molt." },
      { q: "How long do stick insects live?", a: "6 to 18 months depending on species and sex - females living longer than males in most species. Indian stick insects typically live 12 to 18 months for females and 6 to 8 months for males. Because of this relatively short lifespan and their prolific egg production, many keepers maintain a continuous cycle: collecting eggs (dropped on the enclosure floor) and incubating them in a separate container on moist substrate. New nymphs hatch in 2 to 4 months for Indian stick insects, allowing the keeper to maintain a continuous population." },
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
