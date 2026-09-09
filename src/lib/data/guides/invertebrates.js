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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "10+ gallon tank with secure lid", low: 45, high: 90 },
        { item: "Aquarium heater", low: 15, high: 25 },
        { item: "Sponge filter", low: 10, high: 20 },
        { item: "Live plants and driftwood", low: 15, high: 30 },
      ],
      annual: [
        { item: "Sinking algae wafers", low: 10, high: 20 },
        { item: "Blanched vegetables", low: 10, high: 15 },
        { item: "Water conditioner", low: 8, high: 12 },
      ],
    },
    sections: {
      housing: "Amano shrimp can survive in a 5-gallon tank, but 10 gallons or more is a much better fit, since they're larger and more active than most dwarf shrimp and naturally shoal in groups that need real swimming room. They tolerate a fairly wide range of 65 to 82 degrees F, but they hold up better and live longer at the cooler end of that range, since warmer water speeds their metabolism and shortens their lifespan. Keep pH between 6 and 8 with moderately hard water. The single most important piece of equipment is the lid: Amano shrimp are notorious escape artists, especially in the first few days after being introduced to a new tank, and a gap of even a fraction of an inch is enough for one to climb out and turn up dried out on the floor the next morning. Give them driftwood, rocks, and plant surfaces to graze across, since that grazing behavior is most of what makes them worth keeping in the first place.",
      diet: "Amano shrimp have the best algae-eating reputation of any shrimp in the hobby, and it's earned: they'll take on hair algae, thread algae, and even tough black beard algae that most fish and snails leave completely alone, though a well-established beard algae patch is more than any one animal can fully clear. Algae and biofilm alone usually aren't enough food in a tank that's clean or heavily stocked with other grazers, so supplement with sinking algae wafers, blanched zucchini or spinach, and occasional protein like shrimp pellets. A hungry Amano shrimp will actively climb and search the tank rather than wait, which is a useful cue that it's time to feed. Feed enough that a piece of food is gone within a few hours, and remove anything that lingers.",
      enrichment: "Amano shrimp are active and visible for a shrimp, spending much of the day patrolling the tank in search of algae rather than hiding, which makes them a genuinely engaging animal to watch work. They naturally form loose shoals in the wild, and a group of five or more in the aquarium shows more of this natural foraging behavior than one or two shrimp kept alone. Unlike [cherry shrimp](/guides/cherry-shrimp/), Amano shrimp will not turn an aquarium into a breeding colony. Females do carry eggs and release larvae in freshwater, but those larvae need brackish to full-strength salt water to develop and die within hours in a standard freshwater tank, so what you're watching is the natural end of that reproductive attempt rather than the start of new shrimp. This makes Amano shrimp a stable, fixed-size population: buy the number you want to keep, since your tank will not grow the colony for you.",
      health: "Amano shrimp are hardy once settled, but the first week after purchase is the highest-risk period, both for jumping out of an insecure lid and for reacting badly to a mismatch between bag water and tank water. Drip acclimate new arrivals over an hour or two rather than releasing them straight from the bag. As with all shrimp, copper is highly toxic even in trace amounts too small to bother fish, so check that any medication, fertilizer, or tap water source is copper-free before it goes anywhere near the tank. Molting is routine, and a shrimp that looks pale, still, or temporarily hidden for a day is very likely fine, not sick. Because virtually all Amano shrimp sold in stores are wild-caught rather than farm-raised (part of why they typically cost more per shrimp than cherry or ghost shrimp, often $3 to $6 versus a dollar or two), buying from a supplier with a good acclimation and quarantine process measurably improves survival odds in the first few weeks.",
      checklist: [
        "10+ gallon tank",
        "Secure, tight-fitting lid (prolific jumpers)",
        "Heater set toward the cooler end, 68-76°F",
        "pH 6-8, moderately hard water",
        "Driftwood, rocks, and plants for grazing surface",
        "Sinking algae wafers and blanched vegetables",
        "Group of 5-6+ shrimp to see natural shoaling behavior",
        "Drip acclimation for new arrivals",
        "Copper-free medications, fertilizers, and water source",
        "Buy the number you want. They will not breed in your tank",
      ],
    },
    faqs: [
      { q: "Can Amano shrimp breed in a home aquarium?", a: "No, not in freshwater, and this is the single most important thing to know before buying them. Females do carry eggs and release free-swimming larvae, but those larvae need brackish to full-strength salt water within hours of hatching or they die, then require several weeks of brackish development before metamorphosing into juveniles that can return to fresh water. A standard freshwater aquarium can't support any part of that process. Breeding them requires a dedicated saltwater rearing setup and live phytoplankton, which is why the overwhelming majority of Amano shrimp sold in the hobby are wild-caught rather than captive-bred." },
      { q: "Why are Amano shrimp better at algae than other shrimp?", a: "Appetite and size, mostly. Amano shrimp are the largest commonly kept dwarf shrimp species and eat a wider range of algae than cherry shrimp or most algae-eating fish, including hair algae, thread algae, and even tough black beard algae that most tankmates won't touch. They're not a complete solution for an established beard algae outbreak, but for ongoing prevention and general hair and thread algae control, they're considered close to the top of the algae-eating hierarchy in the hobby." },
      { q: "Why is my Amano shrimp missing from the tank?", a: "Check the floor before assuming the worst. Amano shrimp are notorious escape artists, especially in their first few days in a new tank, and can climb out through gaps that look far too small to matter. A dried-out shrimp on the carpet near the tank is a common, if sad, discovery. A genuinely tight-fitting lid with no gaps around cords or filter intakes is the only real prevention." },
      { q: "How big do Amano shrimp get?", a: "Up to about 2 inches (5 cm), making them the largest widely kept dwarf shrimp species, noticeably larger than a cherry shrimp's 1.5 inches or a ghost shrimp's 1 to 2 inches. Females run larger than males." },
      { q: "Do Amano shrimp need a heater?", a: "Usually, since they do best between about 65 and 82°F and most homes run cooler than that, especially in winter. Keeping them toward the lower half of that range if possible actually works in their favor, since Amano shrimp kept warmer tend to have shorter lifespans than those kept cooler and more stable." },
      { q: "Are Amano shrimp good pets for beginners?", a: "Mostly yes, with two catches worth knowing up front. Day to day care is genuinely easy and they're extremely effective algae control, but they're serious escape artists that need a truly secure lid, and unlike cherry shrimp they will never build you a self-sustaining colony, since their larvae can't survive in freshwater. Buy them as a fixed-size cleanup crew rather than an investment in future shrimp, and they're a low-maintenance, highly effective addition to a planted tank." },
    ],
  },
  {
    id: "cherry-shrimp",
    name: "Cherry Shrimp",
    emoji: "🦐",
    difficulty: "Beginner",
    petType: "Invertebrates",
    image: "/assets/guides/cherry-shrimp.jpg",
    tagline: "The tiny, self-multiplying cleanup crew that turns one bag of shrimp into a colony!",
    funFact: "Every color of cherry shrimp in the hobby, from clear to fire-engine red to jet black, is the exact same species. Neocaridina davidi's natural wild coloring is actually a dull, camouflaged greenish-brown; decades of selective breeding by hobbyists produced the entire modern color palette, right down to the graded 'Fire Red' and 'Painted Fire Red' tiers sold today.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "5-10 gallon tank", low: 25, high: 50 },
        { item: "Sponge filter", low: 10, high: 20 },
        { item: "Aquarium heater (if room runs cool)", low: 15, high: 25 },
        { item: "Live plants or moss", low: 15, high: 25 },
        { item: "Mineral/GH supplement", low: 8, high: 15 },
      ],
      annual: [
        { item: "Shrimp-specific sinking pellets", low: 12, high: 25 },
        { item: "Blanched vegetables and Indian almond leaves", low: 10, high: 20 },
        { item: "Water conditioner", low: 8, high: 12 },
      ],
    },
    sections: {
      housing: "A 5-gallon tank is enough to start a small colony, but 10 gallons or more gives you a much more stable, forgiving system, especially since cherry shrimp should only go into a fully established, already-cycled aquarium rather than a brand-new one. They tolerate a wide temperature range of about 65 to 85 degrees F, with the high 60s to high 70s being the most comfortable zone, so a heater is often optional in a warm room but worth having for consistency. Keep pH between 6.5 and 8.0 and moderately hard water, roughly 7 to 14 dGH, since adequate mineral content is what lets a shrimp's new shell harden properly after each molt. Use a sponge filter rather than a standard intake, since cherry shrimp and especially their young are small enough to be pulled into a canister or hang-on-back filter. Dense live plants or moss (Java moss is a favorite) give shrimp grazing surface, shelter for molting, and cover for babies, and they do no damage to real aquarium plants the way some fish do. Avoid any trace of copper in decor, fertilizer, or medication, since copper is toxic to shrimp at concentrations far below what fish tolerate.",
      diet: "Cherry shrimp are constant grazers, spending most of the day picking biofilm, algae, and leftover detritus off every surface in the tank. In an established, well-planted aquarium they can find a meaningful amount of food this way, but a shrimp-specific sinking pellet should still form the base of a deliberate diet, supplemented with blanched zucchini, spinach, or carrot a couple of times a week. Indian almond (catappa) leaves are a popular addition: as they slowly break down they release tannins and become a grazing surface that shrimp will pick at for days. A cuttlebone chip or a commercial mineral supplement helps keep calcium available for molting, especially in softer water. Feed only what a colony clears in a couple of hours, since cherry shrimp are too small to make a visible dent in overfeeding, and excess food fouls water quickly in a small tank.",
      enrichment: "Cherry shrimp are an observation pet through and through: the appeal is watching a colony forage, molt, and breed rather than any interaction with the keeper. Because they breed so readily in plain freshwater, with no special triggers required, a healthy colony gives you an ongoing show of its own. A female develops a yellow 'saddle' of developing eggs behind her head, mates, and then carries 20 to 30 fertilized eggs under her tail (a state called being 'berried') for roughly three to four weeks until they hatch as fully formed miniature shrimp, since unlike Amano shrimp, cherry shrimp have no separate larval stage. Dense moss or plant cover gives newly hatched shrimp somewhere to hide from adults and any fish tankmates. Cherry shrimp are not a handling pet, but many keepers find their constant, unhurried foraging genuinely relaxing to watch.",
      health: "Cherry shrimp are hardy once established, but they're unusually sensitive to sudden shifts in water chemistry, which is why they should always go into a mature, fully cycled tank rather than a new one, and why any water changes should be gradual rather than dramatic. Newly purchased shrimp benefit from drip acclimation over a couple of hours instead of a quick dump-and-go, since even a moderate mismatch in parameters between the bag and your tank can be lethal. Copper is a silent killer: many common fish medications and even some tap water sources contain enough copper to kill an entire colony, so treat any medication as shrimp-unsafe until you've confirmed otherwise. Molting is a routine, frequent event (much more often than in most other invertebrates on this site), and a shrimp that looks like it has doubled overnight or is temporarily hiding after shedding is normal, not sick, though a soft shell that doesn't harden within a day or two usually points to insufficient GH or calcium.",
      checklist: [
        "5-10+ gallon established, fully cycled tank",
        "Sponge filter (standard intakes can pull shrimp in)",
        "Heater if room temperature runs below 65°F",
        "pH 6.5-8.0, moderately hard water (7-14 dGH)",
        "Dense live plants or moss (Java moss is ideal)",
        "Shrimp-specific sinking pellets",
        "Blanched vegetables and Indian almond leaves",
        "Calcium/mineral supplement for molting",
        "Drip acclimation for new arrivals",
        "Copper-free medications and fertilizers only",
      ],
    },
    faqs: [
      { q: "Do cherry shrimp really breed without any effort?", a: "Yes, this is their defining trait. In a stable, established freshwater tank with no special triggers, no separate breeding tank, and no intervention at all, a small starting group of cherry shrimp will become a self-sustaining colony within a few months. A female develops a yellow saddle of eggs, mates, and carries 20 to 30 fertilized eggs for roughly three to four weeks before they hatch as fully formed miniature shrimp. If you don't want a growing colony, keep a smaller group and expect it to grow anyway, since there's no reliable way to keep cherry shrimp without eventual breeding." },
      { q: "Why are some cherry shrimp more red than others?", a: "Grading. Every cherry shrimp is the same species, Neocaridina davidi, whose wild coloring is actually a dull, translucent greenish-brown. Decades of selective breeding produced a hierarchy of red intensity that the hobby broadly recognizes, from a lightly spotted 'regular' grade up through Sakura and Fire Red to Painted Fire Red and the deepest 'Bloody Mary' shrimp with essentially no clear patches left. Price climbs with grade too, often $2 to $4 for a common red shrimp up to $7 to $10 or more for Painted Fire Red or Bloody Mary, but a lower-grade shrimp is exactly as healthy and easy to keep." },
      { q: "Are cherry shrimp only available in red?", a: "No, red is just the most popular line. The same species has been selectively bred into entirely separate color lines including blue (Blue Velvet, Blue Dream), yellow, orange, chocolate brown, black, and green, plus a 'Rili' pattern that leaves clear bands across an otherwise solid color. All of them have identical care requirements; the differences are purely cosmetic." },
      { q: "What size tank do cherry shrimp need?", a: "5 gallons is a workable minimum for a small starting group, but 10 gallons or more is more forgiving and better suited to the colony a healthy group will eventually become. What matters more than raw size is maturity: a cherry shrimp tank needs to be fully cycled before shrimp go in, since they're notably sensitive to the ammonia and nitrite spikes of a brand-new aquarium." },
      { q: "Can cherry shrimp live with ghost shrimp or betta fish?", a: "It depends on the individual. [Ghost shrimp](/guides/ghost-shrimp/) are generally peaceful but will opportunistically prey on smaller or freshly molted cherry shrimp, especially in an underfed or overcrowded tank, so keep both well fed and give cherry shrimp plenty of dense cover if you mix them. [Betta fish](/guides/betta-fish/) are more of a gamble: a betta's temperament varies a lot between individuals, and while adult cherry shrimp are often too fast and too large to be worth the effort, small or newly molted shrimp are genuinely at risk. Dense planting and a well-fed betta improve the odds either way, but neither pairing is a guarantee." },
      { q: "What's the difference between cherry shrimp and Amano shrimp?", a: "Mainly size and breeding. [Amano shrimp](/guides/amano-shrimp/) grow noticeably larger, up to about 2 inches versus a cherry shrimp's 1.5, and are the better algae eater of the two, especially on tougher hair and beard algae. The bigger practical difference is reproduction: cherry shrimp breed prolifically in plain freshwater with zero effort from the keeper, while Amano shrimp cannot complete their life cycle in freshwater at all, so a home colony essentially never happens by accident." },
      { q: "Are cherry shrimp good pets for beginners?", a: "Yes, arguably the single best invertebrate starter on this entire site. They tolerate a wide range of water conditions once established, do real cleanup work grazing algae and biofilm, and multiply into a full colony without any breeding effort from the keeper. The only real beginner trap is adding them to a brand-new, uncycled tank. Wait for your tank to fully cycle first, and a cherry shrimp colony is about as low-maintenance as the aquarium hobby gets." },
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
    funFact: "Scorpions fluoresce a brilliant blue-green color under ultraviolet (UV/black) light. Scientists are not entirely sure why, but the chemical responsible is in the hyaline layer of their exoskeleton. Scorpions do this under natural UV from moonlight too.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "10-20 gallon enclosure with secure lid", low: 40, high: 80 },
        { item: "Moist substrate (coconut fiber + topsoil)", low: 20, high: 35 },
        { item: "Cork bark slabs and flat stones", low: 15, high: 30 },
        { item: "Heat mat with thermostat", low: 30, high: 50 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "UV/black light (optional)", low: 15, high: 25 },
      ],
      annual: [
        { item: "Live feeder insects", low: 50, high: 100 },
        { item: "Substrate replacement", low: 20, high: 35 },
      ],
    },
    sections: {
      housing: "A 10 to 20 gallon terrarium with a secure lid is suitable for 1 to 2 emperor scorpions. They are fossorial (burrowing) animals that need 4 to 6 inches of a moist substrate: a coconut fiber and organic topsoil mix holds burrows well. Provide cork bark slabs or flat stones as alternative hide/basking structures. Temperatures of 76 to 86 degrees F and high humidity (75 to 85%) are required. A small shallow water dish must always be present. These are tropical forest scorpions from West Africa and need warmth and moisture.",
      diet: `Emperor scorpions eat live insects. Crickets and dubia roaches form the most practical staple prey. Mealworms, superworms, and the occasional waxworm are acceptable supplements. Prey size should not exceed the scorpion's body length (excluding tail). Always offer prey with feeding tongs rather than by hand - a startled scorpion may sting a hand it encounters unexpectedly.

Adults eat every 7 to 14 days, reflecting their naturally slow metabolism. Juveniles need food more frequently, every 4 to 7 days. Remove any uneaten prey within 24 hours: crickets left in the enclosure overnight will stress or even bite the scorpion during molting.

Scorpions naturally fast for extended periods, especially in the weeks before molting. A scorpion that refuses food for 2 to 4 weeks is not ill - it is likely entering premolt. Do not attempt to force-feed or disturb a scorpion that is fasting and becoming increasingly sluggish. This is completely normal behavior.`,
      enrichment: `Emperor scorpions are primarily nocturnal hunters. During the day they will remain inside their burrow or beneath cork bark. At night they emerge to hunt, burrow, and rearrange their environment. Watching this activity under dim red or UV light (which doesn't disrupt their cycle) is the primary enrichment the keeper enjoys.

A UV/black light is an extraordinary tool for observing emperor scorpions. They fluoresce a vivid blue-green color under UV light - the same chemical responsible for the fluorescence is present in moonlight wavelengths in the wild, and scorpions are believed to use this fluorescence to calibrate their light-sensing. Shining a UV light on the enclosure at night (from above) allows you to see exactly where the scorpion is without disturbing it.

Experienced keepers can handle emperor scorpions. They are one of the most mild-mannered scorpion species, but their large chelae (claws) can deliver a painful pinch and they will sting if cornered or dropped. The venom is described as similar to a bee sting - painful but not medically serious for most healthy adults. Avoid handling if allergic to insect stings. Never handle over hard floors.`,
      health: `Dehydration is the most common cause of health decline in emperor scorpions. Maintain the substrate moisture diligently: the lower layers should feel damp, not wet, while the upper layers can be slightly drier. Always keep a shallow water dish filled with dechlorinated water. Scorpions do drink.

Failed molts are the second major risk. The scorpion will burrow deeply before molting, emerge pale and soft (the old exoskeleton split and separated), and spend several days hardening. If humidity is insufficient, the molt can fail - the scorpion becomes trapped in its old exoskeleton and dies. Never disturb a scorpion during this process.

If housing multiple individuals, watch carefully for cannibalism. Emperor scorpions can cohabitate in groups, but males may be killed by females after mating. If breeding is not intended, house them individually or in proven female groups. Mite infestations (tiny white mites visible in the substrate) are addressed with a full substrate replacement.`,
      checklist: [
        "10 to 20 gallon enclosure with secure lid",
        "4 to 6 inch moist substrate (coconut fiber and topsoil mix)",
        "Cork bark slabs and flat stones for hides",
        "Small shallow water dish (always filled)",
        "Digital thermometer and hygrometer",
        "Heat mat or low-wattage heat lamp with thermostat",
        "Live feeder insects (crickets, dubia roaches)",
        "Feeding tongs",
        "UV/black light for night viewing (optional but fun)",
        "Wash hands after any handling",
      ],
    },
    faqs: [
      { q: "Is the emperor scorpion's sting dangerous?", a: "Emperor scorpions are among the least venomous of all scorpion species commonly kept as pets. Their sting is generally described as comparable to a bee sting - painful and producing localized swelling, but not medically serious for most healthy adults without insect sting allergies. They also have large, powerful chelae (claws) that can deliver a painful pinch independent of the sting. Despite their imposing size, their defensive response is slow and predictable. Never handle over hard floors, and treat any sting as you would a bee sting." },
      { q: "Why do scorpions glow under UV light?", a: "All scorpions, including emperor scorpions, fluoresce a brilliant blue-green color under ultraviolet (black) light. The fluorescence comes from a chemical compound in the hyaline layer of their exoskeleton. Scientists believe the fluorescence may help scorpions detect UV light from the moon and stars to calibrate their nocturnal activity cycles, or may play a role in predator detection. Practically, it means that a UV/black light is the easiest way to locate scorpions at night without disturbing their behavior. A single UV flashlight is one of the most worthwhile scorpion-keeping accessories." },
      { q: "What do emperor scorpions eat?", a: "Live insects. Crickets and dubia roaches are the most practical staple prey. Mealworms, superworms, and occasional waxworms round out the diet. Adults eat every 7 to 14 days, reflecting their slow tropical metabolism. Juveniles eat more frequently, every 4 to 7 days. Always offer prey with feeding tongs and remove uneaten prey within 24 hours - crickets left overnight near a molting or freshly molted scorpion will attack it. A scorpion refusing food for 2 to 4 weeks is not ill; it is likely entering premolt and should not be disturbed." },
      { q: "Can emperor scorpions be housed together?", a: "Emperor scorpions are one of the few scorpion species that can cohabitate in same-sex groups with adequate space, hides, and food. A group of 3 to 5 females in a 20-gallon or larger enclosure is the most stable arrangement. Males are riskier: mixed-sex groups frequently result in the male being killed by females after mating. If you house a group, watch carefully for any scorpion that consistently fails to access food or appears stressed and withdrawn - subordinate individuals in small enclosures can starve." },
      { q: "How do I know if my scorpion is about to molt?", a: "Watch for: extended food refusal (several weeks to over a month), increasingly sluggish movement, and the scorpion spending significantly more time buried in the substrate or wedged under a hide. The abdomen may appear lighter or the old exoskeleton slightly dull. When you notice these signs, remove all prey insects from the enclosure immediately. Never disturb a buried or hiding scorpion during this period. After the molt, the new exoskeleton takes several days to fully harden - do not feed until the scorpion is active and its chelae appear dark and hardened." },
      { q: "Are emperor scorpions good pets for beginners?", a: "Yes, with the understanding that this is a look-don't-touch pet. They're one of the least venomous, most docile scorpion species and genuinely low-maintenance once set up, but they're not a handling animal the way a bearded dragon or a rat is, the relationship is built through observation, not physical interaction." },
      { q: "Is an emperor scorpion as dangerous as a deathstalker scorpion?", a: "Not remotely. An emperor scorpion's sting is comparable to a bee sting - uncomfortable but not medically serious for a healthy adult. The deathstalker (Leiurus quinquestriatus), a completely different, much smaller desert species, has venom potent enough to be genuinely dangerous, especially to children or anyone with an allergic reaction, and isn't a species kept casually as a pet. The two get confused because both look intimidating, but their sting risk isn't in the same category." },
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
    funFact: "Despite looking like a smaller, cheaper cousin of the cherry and Amano shrimp sold right next to them in the store, ghost shrimp aren't closely related to either. They belong to the genus Palaemonetes in the family Palaemonidae, while cherry and Amano shrimp both belong to the unrelated family Atyidae, and each lineage independently evolved from marine ancestors into fresh water at a different point in history. Their famous hardiness is exactly why they're sold cheaply in bulk as feeder shrimp for larger fish, even though plenty of keepers keep them purely as pets.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "5-10 gallon tank", low: 25, high: 50 },
        { item: "Gentle sponge filter", low: 10, high: 20 },
        { item: "Heater (if room runs cool)", low: 15, high: 25 },
        { item: "Substrate and simple hides/plants", low: 10, high: 20 },
      ],
      annual: [
        { item: "Algae wafers and general fish food", low: 8, high: 18 },
        { item: "Water conditioner", low: 8, high: 12 },
      ],
    },
    sections: {
      housing: "A 5-gallon tank is a workable minimum for a small group, and 10 gallons gives a colony more stability and room to forage, similar to the space guidance for cherry shrimp. Ghost shrimp are far more tolerant of a wide temperature (roughly 65 to 85 degrees F) and hardness range than most other freshwater shrimp, which is a big part of why they're sold so cheaply and shipped in such bulk, though tolerant doesn't mean thriving in anything: stable, dechlorinated water and a cycled tank still matter for a shrimp meant to live its full one to two year lifespan rather than a few feeder-tank weeks. Keep pH between 6.5 and 8.0. A gentle sponge filter protects them the same way it protects cherry and Amano shrimp, and light planting gives them somewhere to retreat, though ghost shrimp are noticeably bolder and more visible during the day than most dwarf shrimp, which spend more time hidden.",
      diet: "Ghost shrimp are true scavengers and among the least fussy eaters on this site. In a community tank they'll happily clean up uneaten flake, pellets, and biofilm, and a colony can get by on leftovers alone in a moderately stocked tank. That said, a shrimp kept as a deliberate pet rather than an afterthought does better with intentional feeding: an algae wafer every day or two for a small group, supplemented with blanched vegetables and the occasional protein source. Their scavenging habits are also exactly why they were historically sold as tank cleanup crew, long before 'cleanup crew shrimp' became its own selling point in the hobby.",
      enrichment: "Ghost shrimp are unusually bold and active for a shrimp: rather than hiding through the day like most dwarf shrimp species, they wander openly in search of food, which makes them easy and satisfying to actually watch. Their near-total transparency is itself part of the appeal, since it's possible to see a female's developing eggs, a full digestive tract after feeding, or even a heartbeat with a careful look. Unlike [Amano shrimp](/guides/amano-shrimp/), true Palaemonetes paludosus can complete their entire life cycle in freshwater, and hobbyists have successfully bred them at home, though it's inconsistent rather than reliable: the free-swimming larvae need very fine food and are easy prey for tankmates, and shipments sold as 'ghost shrimp' sometimes mix in other Palaemonetes species that need a trace of brackish water to raise larvae successfully. Treat any breeding as a bonus rather than something to plan around.",
      health: "Ghost shrimp are the hardiest of the shrimp on this site and tolerate a wider margin of error than cherry or Amano shrimp, but that reputation comes with a real caveat: shrimp sold cheaply and in bulk as feeders are often shipped and housed in crowded, poorly maintained tanks before they ever reach a home aquarium, so a batch that looks stressed or has early losses often reflects that history rather than anything wrong with the species itself or your setup. As with all shrimp, they're highly sensitive to copper even at levels safe for fish, so confirm any medication or fertilizer is invertebrate-safe first. If housing multiple shrimp species together, keep in mind that ghost shrimp are opportunistic and will sometimes prey on smaller or freshly molted tankmates such as young [cherry shrimp](/guides/cherry-shrimp/), particularly if the tank is underfed or overcrowded, so feed generously and provide dense cover if you're mixing species.",
      checklist: [
        "5-10+ gallon tank",
        "Gentle sponge filter",
        "Heater if room runs below 65°F",
        "pH 6.5-8.0 (tolerates a wide hardness range, 5-15 dGH)",
        "Light planting or hides for cover",
        "Algae wafers and general fish food",
        "Copper-free medications and fertilizers",
        "Dense cover if mixing with smaller shrimp species",
        "Buy from a source with healthy-looking stock (feeder tanks vary)",
      ],
    },
    faqs: [
      { q: "Are ghost shrimp and glass shrimp the same thing?", a: "Usually, yes. Both names are commonly used for shrimp in the genus Palaemonetes, and the most common aquarium species, Palaemonetes paludosus, is sold under either name depending on the store. Adding to the confusion, other translucent shrimp, including whisker shrimp and occasionally young Amano shrimp, are sometimes mislabeled as ghost shrimp too. If a species label matters to you, such as for breeding, ask before buying rather than assuming the tag is precise." },
      { q: "Why are ghost shrimp sold so cheap?", a: "Mainly hardiness and demand as feeder stock. Ghost shrimp tolerate a wider range of water conditions and rougher shipping than cherry or Amano shrimp, which makes them cheap and easy to breed and move in bulk, often well under a dollar each (sometimes 30 to 60 cents at big chain stores). A large share of that supply is sold specifically as feeders for larger predatory fish, which keeps prices low across the board, even for shrimp bought specifically to be kept as pets rather than food." },
      { q: "Will ghost shrimp breed in my tank?", a: "Possibly, unlike Amano shrimp. True Palaemonetes paludosus can complete their whole life cycle in freshwater, and home breeding has been done successfully, but it's inconsistent rather than reliable the way cherry shrimp breeding is: the free-swimming larvae need very fine food and are easily eaten by tankmates before reaching adulthood. Treat any surviving young as a pleasant surprise rather than something to count on." },
      { q: "Are ghost shrimp related to cherry shrimp or Amano shrimp?", a: "Not closely. Ghost shrimp belong to the genus Palaemonetes in the family Palaemonidae, while [cherry shrimp](/guides/cherry-shrimp/) and [Amano shrimp](/guides/amano-shrimp/) both belong to the unrelated family Atyidae. All three ended up on the same aquarium store shelf by convergent lifestyle, small, algae-tolerant freshwater scavengers, rather than by shared ancestry." },
      { q: "Can ghost shrimp live with cherry shrimp?", a: "Often, but not risk-free. Ghost shrimp are generally peaceful scavengers, but they're larger than a cherry shrimp and will opportunistically eat a smaller or freshly molted one, especially in an underfed or crowded tank. Keeping the colony well fed and giving cherry shrimp dense plant cover meaningfully reduces the risk, but it isn't a guaranteed-safe pairing." },
      { q: "How long do ghost shrimp live?", a: "About 1 to 2 years with stable water quality, though this varies a lot with history: a ghost shrimp bought as a pet from a well-maintained tank tends to live longer than one that spent time in a crowded feeder tank first. In the wild, most ghost shrimp live on a roughly one-year cycle." },
      { q: "Are ghost shrimp good pets for beginners?", a: "Yes, genuinely one of the easiest and cheapest ways into shrimp keeping. They tolerate a wider margin of error than cherry or Amano shrimp, do real scavenging work, and are bold enough to actually watch during the day rather than hiding. The only real downside is the feeder-tank reputation; buying from a healthier-looking source than the bargain bin gives you a noticeably better start." },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "20-gallon+ enclosure", low: 40, high: 80 },
        { item: "Deep substrate (coconut fiber, topsoil, hardwood)", low: 20, high: 40 },
        { item: "Cork bark hides", low: 10, high: 20 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
      ],
      annual: [
        { item: "Fresh vegetables", low: 30, high: 60 },
        { item: "Substrate replacement", low: 20, high: 40 },
        { item: "Cuttlebone or crushed eggshell", low: 5, high: 10 },
      ],
    },
    sections: {
      housing: "A 20-gallon long terrarium (or equivalent) comfortably houses 2 to 3 adult North American giant millipedes (Narceus americanus) or African giant millipedes (Archispirostreptus gigas). Deep substrate (4 to 6 inches minimum) is essential as millipedes spend most of their time burrowing through and consuming it. Use a mixture of coconut fiber, organic topsoil (no fertilizers or pesticides), rotting hardwood (never pine or cedar), and leaf litter. This substrate IS their diet as well as their habitat. Temperatures of 72 to 80 degrees F are suitable for most pet species. Humidity should be high (70 to 80%) with adequate ventilation to prevent mold issues.",
      diet: "Millipedes are detritivores: they eat decaying organic matter. Their primary diet is the substrate itself (rotting wood and leaf litter). Supplement with fresh vegetables: sweet potato, cucumber, zucchini, carrots, apple slices, and leafy greens. Rotate offerings and remove uneaten fresh food within 24 to 48 hours to prevent mold. Calcium is critical for their exoskeleton: offer cuttlebone pieces or crushed eggshell in the enclosure at all times. Avoid acidic fruits and vegetables (citrus, tomatoes).",
      enrichment: `Millipedes are nocturnal detritivores - they spend most of their time buried in the substrate, emerging at night to graze on decaying organic matter. Cork bark slabs, flat pieces of rotting hardwood, and varied substrate layers (different textures at different depths) provide natural enrichment for burrowing. Watch them emerge in the evening and methodically traverse the enclosure.

They are one of the most docile invertebrate pets and among the safest for beginners. They will walk slowly and steadily across hands and forearms, rarely making sudden moves. When threatened, they curl into a tight spiral - this is their primary defense mechanism. They may also secrete mild defensive chemicals (benzoquinones) that can temporarily stain skin a yellow-brown color. Wash hands thoroughly after handling. The stain fades within a few days.

Their enrichment needs are simple: fresh substrate, fresh food, and the right conditions. They are fascinating display animals that interact with their environment in a subtle, unhurried way that is genuinely relaxing to observe.`,
      health: "Substrate quality is the defining factor in millipede health. Poor substrate (wrong moisture level, wrong composition, lack of calcium) leads to failed molts and skeletal deformities. They molt periodically (burrowing deep to do so) and are vulnerable during this time. Never disturb a molting millipede. Common concerns include dehydration, mite infestations (treat with substrate replacement and drying one section of the enclosure), and calcium deficiency. Millipedes can live 5 to 10 years with appropriate care.",
      checklist: [
        "20-gallon+ enclosure with ventilation",
        "4 to 6 inch deep substrate (coconut fiber, organic topsoil, rotting hardwood, leaf litter)",
        "Cuttlebone or crushed eggshell (always in enclosure)",
        "Cork bark hides",
        "Digital thermometer and hygrometer",
        "Fresh vegetables (sweet potato, cucumber, carrot, leafy greens)",
        "Rotting hardwood pieces and leaf litter (replenish regularly)",
        "Spray bottle for humidity management",
        "Secure ventilated lid",
        "Wash hands after handling (defensive secretions)",
      ],
    },
    faqs: [
      { q: "Do millipedes actually have a thousand legs?", a: "No - despite the name (milli = thousand, pede = foot), no millipede species has exactly 1,000 legs. Most common pet species have between 40 and 400 legs. Until 2021 no species with over 750 legs had been documented. Then Eumillipes persephone, discovered 60 meters underground in Australia, was confirmed with 1,306 legs - the first true 'millipede' by the literal definition. Your Giant African Millipede almost certainly has somewhere between 200 and 400 legs." },
      { q: "Are giant millipedes safe to handle?", a: "Yes - they are one of the most handleable invertebrate pets. They walk slowly and steadily across hands and forearms, rarely make sudden moves, and have no venom or biting mechanism. When threatened, they curl into a tight defensive spiral. Their primary defense is secreting mild benzoquinone compounds from pores along their body segments, which can temporarily stain skin a yellow-brown color and cause mild irritation. Wash hands thoroughly after handling and avoid touching your eyes. The stain fades within a few days." },
      { q: "What do giant millipedes eat?", a: "They are detritivores - in nature they eat decaying organic matter, and in captivity their primary food is the substrate itself (rotting wood and leaf litter). Supplement with fresh soft vegetables: sweet potato, cucumber, zucchini, carrot, apple slices, and leafy greens. Calcium is essential for their exoskeleton - keep cuttlebone or crushed eggshell in the enclosure at all times. Remove fresh food within 24 to 48 hours to prevent mold. Avoid acidic fruits (citrus, tomatoes) and anything that has been treated with pesticides." },
      { q: "How long do giant millipedes live?", a: "5 to 10 years with appropriate care, making them one of the longer-lived invertebrate pets. The key to longevity is substrate quality - millipedes continuously burrow through and ingest their substrate, so maintaining proper moisture levels, rotting hardwood content, and consistent calcium supplementation directly determines their health and lifespan. They molt periodically by burrowing deep into the substrate; never disturb a burrowed millipede that hasn't surfaced for several days, as it may be mid-molt." },
      { q: "How important is calcium for millipedes?", a: "Critical. Millipedes are continuously rebuilding their exoskeleton and require constant dietary calcium. Without adequate calcium, their segments become soft, they fail to molt cleanly, and skeletal deformities develop over successive molts. The simplest solution is to leave a piece of cuttlebone in the enclosure at all times - millipedes will gnaw on it as needed. Crushed eggshell works as well. This single addition prevents the most common long-term health problem in captive millipedes." },
      { q: "Are giant millipedes good pets for kids?", a: "Yes, genuinely one of the safest invertebrates to introduce a child to. They have no venom, no bite, move slowly, and tolerate gentle handling well. The only real caution is washing hands afterward, since their defensive secretions can temporarily stain skin." },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Priced for a small group (2-3 crabs), since solo housing isn't appropriate.
    costs: {
      setup: [
        { item: "10-20+ gallon tank (for a group)", low: 60, high: 120 },
        { item: "Heat mat (side-mounted)", low: 10, high: 20 },
        { item: "Hygrometer and thermometer", low: 15, high: 25 },
        { item: "Deep sand/coconut fiber substrate", low: 20, high: 40 },
        { item: "Large soak-able water dish", low: 10, high: 15 },
        { item: "Spare shells (2-3 per crab)", low: 15, high: 30 },
        { item: "Climbing branches and cork bark", low: 15, high: 30 },
      ],
      annual: [
        { item: "Hermit crab food + varied fresh food", low: 30, high: 60 },
        { item: "Substrate replacement", low: 20, high: 40 },
        { item: "Marine salt mix (saltwater pool)", low: 10, high: 20 },
      ],
    },
    sections: {
      housing: "A 10-gallon tank is an absolute floor, but 20 gallons or more is far more appropriate - and necessary for a group, since hermit crabs are social and should be kept with at least 2 to 3 others, not alone. This is one of the most under-communicated requirements in the pet trade. Humidity must stay at 70 to 80%, measured with a hygrometer rather than guessed, since hermit crabs breathe through modified gills that need consistently moist air; a secure lid, substrate misting, and a mostly covered tank all help maintain this. Deep substrate - a sand and coconut fiber mix at least three times the crab's body length - is essential, since crabs burrow completely underground to molt, sometimes for weeks at a time. Provide both a freshwater pool and a marine saltwater pool, each deep enough to submerge in but with an easy exit ramp to prevent drowning, using only dechlorinated water. Keep temperatures at 75 to 85 degrees F, and always have 2 to 3 spare empty shells per crab, slightly larger than their current one, available so they can upgrade as they grow.",
      diet: "Hermit crabs are omnivorous scavengers. A commercial hermit crab food can form a base, but a genuinely varied diet of fresh fruit, vegetables, unseasoned meat, and calcium sources like cuttlebone or crushed eggshell makes a real difference in health and molt success. Avoid pre-packaged shells or substrate treated with paint, dye, or chemicals, and never offer any food that has been near soap, pesticides, or copper-based products - all are toxic to hermit crabs. Feed daily in a shallow dish and remove uneaten fresh food within a day to prevent mold in the humid enclosure.",
      enrichment: "Hermit crabs are highly social, and keeping a single crab alone is a well-documented contributor to poor health and a shortened lifespan - groups of several allow the natural social interaction this species needs. Climbing branches, cork bark, and fishnet or plastic mesh support their active, exploratory nature. Always keep several appropriately sized spare shells available so crabs can choose and switch between them, which is itself a form of enrichment as much as a physical necessity. A crab that suddenly burrows and disappears for weeks is very likely beginning to molt, not sick or dead - resist the urge to dig them up to check.",
      health: "Incorrect humidity is the single leading cause of death in pet hermit crabs - too dry an enclosure causes their gills to dry out and the crab to slowly suffocate. Molting is a vulnerable, weeks-long underground process, and a buried, motionless crab should never be dug up or disturbed. Shell shortage stress occurs when no appropriately sized replacement shells are available, forcing crabs to fight over shells or remain in an outgrown one that restricts their growth. Isolation stress from being kept alone is a well-documented contributor to premature death. Avoid painted, glued, or otherwise 'decorative' shells sometimes sold in stores, which can be toxic or physically restrictive.",
      checklist: [
        "10-20+ gallon tank for a group of 2-3+ crabs",
        "Secure lid to retain humidity",
        "Hygrometer and thermometer",
        "70-80% humidity, 75-85°F temperature",
        "Deep sand/coconut fiber substrate (3x crab body length)",
        "Freshwater and marine saltwater pools with exit ramps (dechlorinated)",
        "2-3 extra appropriately sized shells per crab",
        "Climbing branches and cork bark",
        "Calcium sources (cuttlebone, crushed eggshell)",
        "Varied fresh food; avoid painted shells and chemical-treated decor",
      ],
    },
    faqs: [
      { q: "Can hermit crabs live alone?", a: "They shouldn't, long term. Hermit crabs are social animals, and isolation is a well-documented contributor to stress and shortened lifespan. Keep at least 2 to 3 together, and preferably more." },
      { q: "Why is my hermit crab buried and not moving?", a: "Almost always molting - a normal process that can take several weeks underground. Never dig up a buried crab to check on it; disturbing a molting hermit crab can be fatal." },
      { q: "How long do hermit crabs live?", a: "In the wild, land hermit crabs can live 20 to 30 years or more. Sadly, most pet hermit crabs die within their first year due to incorrect humidity and being kept alone. With proper humidity, a social group, and appropriately sized spare shells, captive lifespans of a decade or more are genuinely achievable." },
      { q: "Do hermit crabs need salt water?", a: "Yes, along with fresh water - both pools should be available at all times, deep enough to submerge in but with an easy exit ramp, using only dechlorinated water for each." },
      { q: "Why does my hermit crab need extra shells?", a: "As they grow, hermit crabs need to move into progressively larger shells. Without 2 to 3 appropriately sized spares always available, they can become stressed, fight with tankmates over shells, or be forced to stay in a restrictive shell that stunts their growth." },
      { q: "Are hermit crabs good pets for beginners?", a: "The reputation says yes; the reality says be careful. Hermit crabs are sold as a simple starter pet, but they're social animals that need to be kept in groups, require humidity precise enough to need an actual hygrometer, and most pet-store hermit crabs die within their first year from exactly those two things being skipped. Done right, they're rewarding; done the way they're usually sold, they aren't the easy pet the packaging suggests." },
      { q: "How can I tell if my hermit crab is male or female?", a: "It's genuinely hard without close inspection. Hermit crabs are sexed by checking for gonopores, small paired openings at the base of certain walking legs, present on females and absent on males, but they're small and easy to miss unless you know exactly where to look. Most keepers don't reliably sex their hermit crabs, and it doesn't affect care either way." },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "Small tall enclosure (5x5x8 in or similar)", low: 15, high: 30 },
        { item: "Climbing branches and cork bark (miniature)", low: 10, high: 20 },
        { item: "Feeding tongs (fine-tip precision)", low: 8, high: 15 },
      ],
      annual: [
        { item: "Live feeder insects (crickets, fruit flies)", low: 20, high: 40 },
      ],
    },
    sections: {
      housing: "A small enclosure is not just acceptable but preferred - something around 5x5x8 inches works well for one adult regal jumping spider (Phidippus regius), the most common pet species. Taller than wide is ideal since jumping spiders climb constantly. Ventilation is essential, via a mesh top or side vents, since stagnant air causes health problems. Furnish with climbing branches, cork bark, and artificial plants, which jumping spiders use both for exploring and for building silk hammock retreats where they sleep and molt. Light misting every day or two maintains humidity and gives them water droplets to drink. Room temperature of 70 to 80 degrees F is fine without any supplemental heating in most homes.",
      diet: "Jumping spiders eat live prey exclusively. Appropriately sized crickets, flightless fruit flies (ideal for juveniles), and small roaches work well, sized no larger than the spider's body. Offer prey 2 to 3 times a week and remove anything uneaten after a day. Unlike web-building spiders, jumping spiders are active visual hunters that stalk and pounce on prey rather than waiting passively - watching this hunting behavior is one of the most rewarding parts of keeping the species.",
      enrichment: "Jumping spiders are unusually curious and visually engaged with their surroundings for an invertebrate, often turning to track movement and appearing to observe their keeper. Climbing branches and varied décor support their naturally exploratory behavior. Some keepers offer brief, supervised free-roam time in a small, secure, escape-proof space. Handling should stay minimal - they're delicate and can jump or fall - though many individuals are calm enough to gently walk onto an open hand for a short supervised moment.",
      health: "Molting is the most vulnerable period in a jumping spider's life, just as it is for tarantulas - never disturb a molting spider, and avoid offering live prey right before or after a molt. Dehydration is preventable with regular light misting and a small water source. A short natural lifespan of only 1 to 2 years is completely normal for this species and not a sign of poor care. Mite issues are uncommon but possible in an unclean enclosure, so remove uneaten prey and old webbing periodically.",
      checklist: [
        "Small, tall enclosure (5x5x8 inches or similar)",
        "Ventilated, secure lid",
        "Climbing branches and cork bark",
        "Light misting for humidity and drinking water",
        "Small live prey (crickets, flightless fruit flies)",
        "Room temperature 70-80°F (no heating needed)",
        "Feeding tongs",
        "Patience - they're an observation pet, not a handling pet",
      ],
    },
    faqs: [
      { q: "Are jumping spiders dangerous?", a: "No. Jumping spiders have very mild venom meant for tiny insect prey, are extremely reluctant to bite, and are essentially harmless to humans. A bite, in the rare event one happens, is typically compared to a mosquito bite at most." },
      { q: "How long do jumping spiders live?", a: "1 to 2 years is typical for most pet species, sometimes slightly longer for well-cared-for females. This short natural lifespan is completely normal for the species and isn't a sign that something went wrong." },
      { q: "Can you handle a jumping spider?", a: "Gently and briefly. They aren't a cuddly pet and can jump or fall unexpectedly, but many individuals are calm enough to walk onto an open hand for a short, supervised moment. Regular or prolonged handling isn't recommended." },
      { q: "What do jumping spiders eat?", a: "Live prey only - appropriately sized crickets, flightless fruit flies, and small roaches, offered 2 to 3 times a week and sized no larger than the spider's body." },
      { q: "Do jumping spiders need a big enclosure?", a: "No - quite the opposite. Jumping spiders generally do better in smaller enclosures, where locating prey is easier and the space feels less overwhelming. Height matters more than footprint, since they spend most of their time climbing." },
      { q: "Are jumping spiders good pets for beginners?", a: "Yes, one of the more approachable invertebrates to start with. They need very little space, are essentially harmless to humans, and their curious, visually engaged behavior makes them genuinely interesting to observe, this isn't a handling pet, but it's a low-cost, low-commitment way to get into invertebrate keeping." },
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
    emoji: "🦗",
    difficulty: "Self-Sufficient",
    petType: "Invertebrates",
    image: "/assets/guides/praying-mantis.jpg",
    tagline: "Nature's most impressive ambush predator, in a palm-sized package!",
    funFact: "Praying mantises are the only insects known to have a single ear, located in the center of their chest between their hind legs. They use it to detect the ultrasonic calls of hunting bats, letting them dodge mid-flight. They are also the only insect that can turn its head 180 degrees.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "Tall vertical mesh or acrylic enclosure", low: 15, high: 35 },
        { item: "Vertical branch or stick for molting", low: 5, high: 10 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Fine misting bottle", low: 5, high: 10 },
      ],
      annual: [
        { item: "Fruit flies and live feeder insects", low: 30, high: 60 },
      ],
    },
    sections: {
      housing: "Most pet mantis species (Ghost Mantis, Chinese Mantis, African Flower Mantis) need a small vertical enclosure. A tall deli cup (for nymphs) to a 12x12x18 inch mesh or acrylic enclosure (for adults) is appropriate. The rule of thumb is 3 times the mantis length in height and 2 times in width. Cross-ventilation is critical. Mantises molt hanging from the top of the enclosure so adequate height is non-negotiable. Provide a stick or branch angled from floor to ceiling for perching and molting. Temperature ranges from 72 to 95 degrees F depending on species. Most common pet species do well at 75 to 85 degrees F.",
      diet: `Mantises eat live prey exclusively. Match the prey size to the mantis: fruit flies (Drosophila melanogaster, the small species) for early nymph stages, progressing to bottle flies, small crickets, and small dubia roaches as the mantis grows. Adult mantises can handle larger crickets, mealworms, waxworms, and bottle flies. Prey should never exceed the space between the mantis's eyes in width.

Feed every 2 to 3 days. Mantises will fast in the days before molting - do not offer prey during this time and remove any uneaten insects promptly. After molting, wait until the mantis's legs and mouthparts are fully hardened (several hours to a day) before offering food. Adult females require more frequent feeding than males and have significantly longer lifespans.

Prey variety is beneficial. Waxworms are high in fat and should be treats rather than staples. Bottle flies (blue or green bottle flies in pupae form, which you hatch at home) are one of the best feeders for many mantis species - appropriately sized, easy to culture, and eagerly taken.`,
      enrichment: `Mantises are highly visual, active hunters that track and stalk prey with their distinctive head-turning behavior. Watching a mantis hunt - the slow, swaying approach followed by a lightning-fast strike - is one of the most captivating behaviors in the invertebrate hobby. The prey of the day (and the hunting sequence) is the primary enrichment.

Provide varied perching structures at different heights: branches, cork bark, artificial plants, and vertical surfaces. Mantises naturally vary their position throughout the day. Some docile species (Orchid Mantis, African Flower Mantis) can be gently handled - allow them to walk voluntarily from hand to hand. They may bite if startled or if fingers smell like prey.

Their "alien" compound eyes, remarkable camouflage, and astonishing hunting behaviors make mantises among the most visually engaging invertebrate pets. They are genuinely fascinating display animals.`,
      health: `Failed molts are the primary cause of mantis death in captivity. The mantis hangs upside down from the enclosure top to molt, pulling free of its old exoskeleton. If the enclosure is too short, too humid, too dry, or if the mantis is disturbed during this process, the molt fails and the mantis dies or is permanently injured. Always ensure adequate height (3 times the mantis length minimum) and an appropriate perch from which to hang.

Maintain appropriate humidity for the species by misting one side of the enclosure once daily. Dehydration causes failed molts. Overcrowding and cannibalism are serious risks - always house mantises individually, one per enclosure. Even a mantis kept alone for weeks has been known to cannibalize a newly housed enclosure mate.

Most pet mantis species have lifespans of 12 to 18 months. The hobby cycle for mantises is acquisition as a nymph, raising through multiple molts to adulthood, and a relatively short adult phase. Females live significantly longer than males.`,
      checklist: [
        "Tall vertical mesh or acrylic enclosure (3x height rule)",
        "Vertical branch or stick for molting",
        "Species-appropriate temperature range",
        "Fruit flies (for nymphs) and appropriate live insects for adults",
        "Feeding tongs or forceps",
        "Fine misting bottle (daily humidity maintenance)",
        "Digital thermometer and hygrometer",
        "House individually (cannibalistic species)",
        "Never disturb during molt",
        "Secure ventilated lid",
      ],
    },
    faqs: [
      { q: "How long do praying mantises live?", a: "Most pet species live 12 to 18 months total. Females live significantly longer than males - males often die shortly after their final molt to adulthood, while females continue living and laying eggs for months. The typical keeper experience is acquiring a nymph, raising it through 6 to 9 molts over several months, enjoying the adult phase, and then the cycle ends. If you want continuous mantis keeping, plan to culture your own oothecae (egg cases) or establish a reliable supplier for juveniles." },
      { q: "Can praying mantises be kept together?", a: "Never. Praying mantises are solitary, highly territorial, and cannibalistic with any insect they can catch - including a sibling they have lived next to for weeks. Even a mantis kept in complete isolation for months will immediately attempt to eat a newly introduced individual. Always house one per enclosure, no exceptions. The only intended exception is brief supervised mating, and even then the female frequently eats the male during or after the process." },
      { q: "What do praying mantises eat?", a: "Live prey exclusively, sized to the mantis. Early nymphs eat fruit flies (Drosophila melanogaster). As they grow, progress to bottle flies, small crickets, and appropriately sized dubia roaches. Adults can handle larger crickets, mealworms, waxworms, and bottle flies. Prey should never exceed the space between the mantis's eyes in width. Feed every 2 to 3 days and always remove uneaten prey promptly - stress from live prey in the enclosure can interfere with molting." },
      { q: "What causes failed molts in mantises?", a: "The top three causes are: enclosure too short (the mantis needs 3x its body length in height to hang and pull free of the old exoskeleton), humidity too low (dry conditions make the old skin brittle and hard to exit), and being disturbed during the molt. Never handle, disturb, or offer food when a mantis is hanging still from the cage top - this is pre-molt positioning. A mantis that gets stuck in a molt almost always dies. Prevention is the only viable approach." },
      { q: "Can praying mantises be handled?", a: "Many docile species tolerate gentle handling well - Ghost Mantis, African Flower Mantis, and Chinese Mantis are commonly reported as calm on the hand. They may bite if startled or if fingers smell like prey (from handling insects), but the bite of most pet mantises is minor - more surprise than damage. Always let the mantis walk voluntarily onto your hand rather than grabbing it. Some individuals are more defensive than others; read the individual animal's posture before attempting contact." },
      { q: "Are praying mantises good pets for beginners?", a: "Yes, as a display animal rather than a handling one. They're inexpensive, low-maintenance, and genuinely fascinating to watch hunt, but they must be housed alone (they're cannibalistic) and only live 12 to 18 months as adults, so go in knowing this is a shorter, more observational relationship than most other invertebrate pets on this site." },
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
