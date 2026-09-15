export const smallMammalGuides = [
  {
    id: "chinchilla",
    name: "Chinchilla",
    emoji: "🐭",
    difficulty: "Intermediate/Advanced",
    petType: "Small Mammals",
    image: "/assets/guides/chinchilla.jpg",
    tagline: "The incredibly soft, high-jumping rodent that needs dust baths!",
    funFact: "Chinchillas can jump up to 6 feet high and can rotate their ears 180 degrees! Their fur is so dense they can have up to 80 hairs per follicle, versus 2 to 3 for humans.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size and lifespan come from the
    // encyclopedia entry, which no deep dive repeats. The antibiotics, cold
    // tolerance, and vet trips rows cite the shared small-mammal guides in
    // the sidebar's Health and More list. Reconciled 2026-09-09 for batch C
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Cage", value: "A reasonable minimum is around 24 by 24 by 36 inches, tall and multi-level with solid, non-wire floors and shelves. Bigger is better for a species this active. Metal beats plastic, since chinchillas chew constantly and ingested plastic can cause a fatal blockage.", source: "chinchilla-tank-setup-guide" },
        { label: "Wheel", value: "A solid metal wheel, 15 inches or larger. Never an exercise ball, a genuine overheating and injury risk for this species specifically.", source: "chinchilla-tank-setup-guide" },
        { label: "Temperature", value: "Ideal room temperature is 50 to 68°F, kept cool and dry. Add the Fahrenheit temperature to the humidity percentage; treat a combined total over 150 as dangerous territory.", source: "chinchilla-tank-setup-guide" },
        { label: "Cold tolerance", value: "Far more cold-tolerant than heat-tolerant: comfortable down into the 35 to 45°F range with proper shelter.", source: "small-mammal-temperature-heat-stress-guide" },
        { label: "Dust bath", value: "Chinchilla dust, never sand or water, 2 to 3 times a week (some owners go daily), for 10 to 30 minutes at a time, using 1 to 2 inches of dust in a shallow container. Remove the container afterward.", source: "chinchilla-tank-setup-guide" },
        { label: "Diet", value: "Grass hay should make up 80 to 90% of the diet, available at all times. Add plain, hay-based pellets, roughly 16 to 20% protein and 15 to 35% fiber, at about 1 to 2 tablespoons a day.", source: "chinchilla-tank-setup-guide" },
        { label: "Treats", value: "A small fraction of the diet, a few times a week rather than daily, somewhere under 5 to 10% of total intake.", source: "chinchilla-feeding-guide" },
        { label: "Not eating", value: "A chinchilla off food for more than 12 to 24 hours should be seen the same day. No droppings at all for about 12 hours is treated as needing immediate attention.", source: "chinchilla-feeding-guide" },
        { label: "Handling", value: "Both hands, body fully supported against your chest (a football hold). Never lift by the tail tip or grab at the fur, which can trigger fur slip.", source: "chinchilla-handling-guide" },
        { label: "Budget", value: "$455 to $1,225 for a complete setup. Roughly $30 to $85 a month ongoing. An annual exotic vet checkup runs $50 to $100 or more.", source: "chinchilla-cost-guide" },
        { label: "Adult size", value: "9 to 15 inches; 1 to 2 lbs." },
        { label: "Lifespan", value: "Commonly 10 to 20 years in captivity; wild longevity for this species has not been well studied." },
        { label: "Antibiotics", value: "Certain ordinary antibiotics can wipe out a chinchilla's gut bacteria and let toxin-producing Clostridium take over, a reaction that can kill within days. Raise the drug list with your vet before any antibiotic starts.", source: "small-mammal-enterotoxemia-guide" },
        { label: "Vet trips", value: "A ventilated, hard-sided small-animal carrier, ready before a trip is ever needed rather than bought the morning of an appointment.", source: "small-mammal-vet-visits-and-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "chinchilla-health-issues-guide",
      callNow: [
        "Drooling",
        "Changes in appetite or stool",
        "Diarrhea",
        "Any respiratory signs",
        "Any indication of heat stress (lethargy, panting, bright red mucous membranes)",
      ],
      vetLine: "An exotic vet experienced with chinchillas, found before you need one. This species masks illness well and can decline fast once symptoms become visible, so call sooner rather than waiting to see if things improve.",
    },
    routes: [
      { slug: "chinchilla-cost-guide", line: "$455 to $1,225 for a complete setup, $30 to $85 a month, and the air conditioning cost most owners don't factor in." },
      { slug: "chinchilla-tank-setup-guide", line: "The cage, the 150 rule for heat danger, and dust baths done right." },
      { slug: "chinchilla-feeding-guide", line: "The hay-first schedule, why cecotropes matter, and the honest list of reasons a chinchilla stops eating." },
      { slug: "chinchilla-handling-guide", line: "The football hold, the fragile skeleton, and what fur slip actually means." },
      { slug: "chinchilla-health-issues-guide", line: "Dental disease, heat stroke, GI problems, fur chewing, ringworm, and fur ring, with what causes each." },
      { slug: "chinchilla-enrichment-guide", line: "The cage-complexity study that dropped fur chewing with a floor change, and the priority order that follows from it." },
      { slug: "chinchilla-legal-guide", line: "Why the California and Texas ban claims are false, and the one real CITES detail worth knowing." },
    ],
    buyList: [
      "24x24x36 inch multi-level metal cage",
      "15 inch or larger solid exercise wheel",
      "Dust bath house and chinchilla dust",
      "Platforms and hideouts at varied heights",
      "Water bottle and food dishes",
      "Safe chew toys (mineral, pumice, untreated wood)",
      "Digital thermometer and hygrometer",
      "Unscented paper bedding or fleece",
      "Timothy or orchard grass hay",
      "Plain, chinchilla-specific pellets",
    ],
    faqs: [
      { q: "Can chinchillas take water baths?", a: "No. Their fur is dense enough, among the densest of any mammal, that trapped moisture promotes fungal growth rather than washing anything away. Dust baths are the only safe option." },
      { q: "Why does my chinchilla eat its own droppings?", a: "This is normal and necessary, not illness. Chinchillas are hindgut fermenters that produce a distinct soft dropping called a cecotrope, mostly overnight, and eat it to send food through the gut a second time. Their small intestine only captures part of the nutrients from their very fibrous diet on the first pass, and a chinchilla prevented from doing this can become nutrient deficient." },
      { q: "What is fur slip in chinchillas?", a: "It's a protective defense mechanism where a grabbed, mishandled, or overexcited chinchilla releases a large patch of fur all at once, revealing smooth skin underneath. It's not painful and not an injury in the traditional sense, but the fur can take several months to grow back, and it often regrows a slightly different shade." },
    ],
  },
  {
    id: "degu",
    name: "Degu",
    emoji: "🐭",
    difficulty: "Intermediate",
    petType: "Small Mammals",
    image: "/assets/guides/degu.jpg",
    tagline: "The daytime rodent that cannot eat sugar and will not live alone!",
    funFact: "Degus are one of the few mammals that cannot metabolize dietary sugar properly. They have an unusual insulin structure and develop diabetes and cataracts on a diet most other rodents handle fine, which is why a single grape can matter here in a way it never would for a hamster.",
    // Labels match `covers` strings in affiliateProducts.js and the figures are those
    // products' vetted prices. See scripts/check-cost-coverage.mjs. Note there is no
    // degu-specific pellet product wired up yet, so that line stays unmatched.
    // Priced for a pair, which is the minimum this species should be kept in.
    costs: {
      setup: [
        { item: "24x24x48 in multi-level cage", low: 280, high: 360 },
        { item: "12-14 in solid exercise wheel", low: 55, high: 75 },
        { item: "Dust bath house + chinchilla dust", low: 15, high: 25 },
        { item: "Hideouts and tunnels", low: 10, high: 30 },
        { item: "Water bottle and food dishes", low: 3, high: 9 },
        { item: "Digital thermometer and hygrometer", low: 11, high: 19 },
      ],
      annual: [
        { item: "Grass hay (unlimited)", low: 18, high: 26 },
        { item: "Sugar-free degu or chinchilla pellets", low: 40, high: 70 },
        { item: "Chinchilla dust (ongoing)", low: 10, high: 16 },
        { item: "Chew toys (mineral/pumice)", low: 10, high: 16 },
        { item: "Bedding", low: 18, high: 30 },
        { item: "Exotic vet check, including dental", low: 80, high: 160 },
      ],
    },
    sections: {
      housing: `A pair needs at least 24x18x36 inches with multiple solid levels, and vertical space matters as much as floor area. The RSPCA is specific about this: wild degus climb onto the branches of shrubs and small trees, so they want safe-wood branches (pear, apple or beech), platforms at different heights to jump between, and stable rock formations to scramble on. Use wire with bar spacing of half an inch or less, and solid shelves rather than mesh, which injures feet. Glass tanks are a poor choice: degus are active and produce a lot of dust, and a tank cannot ventilate it.

Fit a solid roof. Degus are prey animals whose main wild predators are birds of prey, and they are genuinely frightened by movement above them. A solid top rather than an open mesh one makes a visible difference to how settled they are.

Give them a deep substrate layer to dig in. Degus are burrowers and a cage with a shallow tray is a cage they will spend their time trying to escape. Six inches of paper-based bedding or a dig box the full width of the cage will be used constantly.

Everything wooden will be destroyed. Degu incisors are open-rooted and grow for life, and they chew structurally rather than idly. Plastic shelves, plastic hides and plastic wheels last days. Use ceramic, metal and untreated hardwood, and expect to replace chew wood weekly.

Keep them at 60 to 72 degrees F. Like chinchillas they overheat easily and cannot cope above about 80, and a degu breathing rapidly with a wet chin in a warm room is in trouble.`,
      diet: `Unlimited grass hay is the base of the diet and must be there all the time. It supplies the fiber that keeps the gut moving and the abrasion that keeps continuously growing teeth worn down.

Pellets must be sugar-free, and the RSPCA is clear that hay matters more than the pellets do. Use a dedicated degu pellet, or a guinea pig or chinchilla nugget provided it contains no molasses, at roughly a tablespoon per degu per day. Foods formulated for rabbits, hamsters and gerbils are not suitable, and neither are chinchilla mixes with dried fruit in them.

No fruit, no honey sticks, no yoghurt drops. This is not a general caution about treats: degus have an atypical insulin and a genuine inability to handle simple sugars, and diabetes in a pet degu shows up as cataracts, weight loss and excessive drinking. Carrot, sweet potato, beetroot and parsnip are all higher-sugar vegetables, so they belong in very small pieces as an occasional treat rather than as part of the daily bowl. Commercial small-animal treats are frequently too sugary to use at all. Safe extras are leafy greens, dandelion and plantain.

Let them eat their own droppings. Degus are coprophagic and the RSPCA treats this as a nutritional requirement rather than a habit to discourage: they need it to get essential nutrients and keep the gut working.

Healthy adult degus have orange incisors. White or very pale teeth in an adult are a sign of poor health, not good hygiene, and teeth should be checked weekly for color, length and shape.`,
      enrichment: `Degus are diurnal, which is the main reason people choose them: they are awake and interactive during the day rather than at two in the morning. That also means they need genuine daytime stimulation.

They must be kept in at least a pair, and preferably a same-sex group from the same litter. A lone degu is a welfare problem, not a preference. Introducing unfamiliar adults is difficult and often fails, so buy littermates or an already-bonded group rather than planning to add later.

Provide a solid running wheel of 12 inches or more, tunnels, ceramic hides, platforms at different heights and a permanent dig area. Rotate cardboard and chew wood weekly.

They need a dust bath two or three times a week for ten to fifteen minutes, using chinchilla dust rather than sand. Their coat goes greasy and matted without it.

Never pick a degu up by the tail. The skin sheds away as a predator defense, the exposed section is then lost, and it does not grow back.`,
      health: `Diabetes and cataracts are the signature problem and are almost entirely dietary. Watch for cloudy eyes, drinking far more than usual, and weight loss on a normal appetite. Opaque whitening of the eye is on the RSPCA's daily check list for exactly this reason.

Dental disease is the other common one. Open-rooted teeth that are not worn down overgrow, and the first signs are drooling, wetness around the mouth, dropping food, weight loss and a preference for softer items. Only a vet should correct overgrown or misaligned teeth. This needs a proper oral examination, usually under anesthetic, not a visual check of the front teeth alone.

Vitamin A deficiency and liver disease both appear on the RSPCA's list of conditions degu keepers should learn to recognize, alongside diabetes, tail loss, heat stroke and respiratory infection. Degus are a relatively new pet species and the veterinary picture is still filling in, which is a good argument for registering with an exotics vet who actually sees them.

Bumblefoot comes from wire flooring and dirty bedding. Respiratory infections come from dusty bedding and poor ventilation, and a degu with laboured breathing or a discharge from the nose needs seeing quickly.

Heat stress is an emergency. Above roughly 80 degrees F expect rapid breathing, lethargy and a wet chin, and cool the animal gradually rather than with ice.

Find an exotics vet before you need one. Degus are not a species every small animal practice sees regularly.`,
      checklist: [
        "24x18x36 in minimum multi-level cage for a pair",
        "At least two degus, ideally littermates",
        "Solid 12 in or larger exercise wheel",
        "Unlimited grass hay (Timothy or orchard)",
        "Sugar-free pellets, no fruit or molasses",
        "Deep substrate or a dedicated dig box",
        "Chinchilla dust and a bath house",
        "Untreated hardwood chew, replaced weekly",
        "Room kept between 60 and 72 degrees F",
        "Exotic veterinarian experienced with degus"
      ],
    },
    faqs: [
      { q: "Can degus eat fruit?", a: "No. Degus have an unusual insulin structure and cannot process dietary sugar the way most rodents can, so fruit, carrot, sweetcorn, honey treats and yoghurt drops all carry a real risk of diabetes and the cataracts that follow it. This is not the usual advice to go easy on treats; it is a species-level metabolic limitation. Safe extras are leafy greens, dandelion, plantain and the occasional plain oat or single sunflower seed." },
      { q: "Can I keep a single degu?", a: "You should not. Degus live in colonies of up to a hundred animals in the wild with cooperative burrowing and sentry duty, and a lone degu shows real distress: repetitive behavior, bar chewing and lethargy. Keep at least two. The practical catch is that introducing unfamiliar adults frequently fails, so buy littermates or an established same-sex group rather than planning to add a companion later." },
      { q: "Why are my degu's teeth orange?", a: "That is what a healthy adult degu's teeth look like. The enamel takes on an orange to deep yellow color as the animal matures. It is white or very pale teeth in an adult that signal a problem, usually a diet short on the minerals and fiber the species needs." },
      { q: "Are degus awake during the day?", a: "Yes, and it is the main reason people pick them over hamsters. Degus are diurnal, so they are active and sociable during normal waking hours instead of starting at midnight. They do take naps through the day, and they are noisy: the species has a large vocal repertoire and a bonded pair chatters constantly." },
      { q: "What happens if a degu's tail comes off?", a: "The skin of the tail is designed to strip away if a predator grabs it, leaving the animal free but exposing the vertebrae, which then die back and are lost. It does not regrow. Never lift or restrain a degu by the tail, and scoop from underneath with both hands instead." },
    ],
  },
  {
    id: "mouse",
    name: "Fancy Mouse",
    emoji: "🐭",
    difficulty: "Beginner",
    petType: "Small Mammals",
    image: "/assets/guides/mouse.jpg",
    tagline: "The pocket-sized speedster that's cheap to keep but easy to underestimate!",
    funFact: "A male mouse's strong smell comes down to one specific chemical, trimethylamine, that shows up heavily in his urine and barely at all in a female's or a rat's. It's why an all-male mouse cage needs cleaning far more often than the equivalent rat setup.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Priced for a small group, since mice should not be kept alone.
    costs: {
      setup: [
        { item: "18x18x10 in cage for 2-3 mice", low: 35, high: 70 },
        { item: "Smooth exercise wheel (mouse-sized)", low: 12, high: 20 },
        { item: "Paper-based bedding", low: 12, high: 20 },
        { item: "Hideouts and tunnels", low: 10, high: 20 },
        { item: "Water bottle and food dishes", low: 8, high: 15 },
        { item: "Chew toys and enrichment", low: 10, high: 20 },
        { item: "Digital thermometer", low: 10, high: 15 },
      ],
      annual: [
        { item: "Mouse-specific pellets or lab blocks", low: 20, high: 35 },
        { item: "Fresh vegetables (small amounts)", low: 20, high: 35 },
        { item: "Bedding (ongoing)", low: 40, high: 70 },
        { item: "Chew toys and enrichment refresh", low: 10, high: 18 },
        { item: "Annual exotic vet wellness check", low: 40, high: 80 },
      ],
    },
    sections: {
      housing: `A commonly cited minimum for a small group of 2 to 3 mice is an 18x18x10 inch cage, and because mice are prolific escape artists, wire mesh spacing needs to be under half an inch, tighter than almost any other small pet on this site. A solid floor is essential; wire flooring injures small feet just as it does in rats and hamsters.

Use paper-based bedding rather than wood shavings, for the same respiratory reasons as every other small rodent here, and never use a wood cage, since urine soaks into the wood and the resulting ammonia buildup drives respiratory disease. A smooth, non-perforated exercise wheel gives mice a safe way to burn off energy, and most take to it enthusiastically.

Keep the room in the same general range as rats and hamsters, roughly 64 to 79 degrees F, away from damp and drafts, which is specifically flagged as a driver of respiratory infection in mice. Because male mice mark territory heavily and their urine carries a distinctly strong odor, plan on more frequent spot-cleaning for an all-male or mixed cage than you would for the equivalent rat setup.`,
      diet: `A mouse-specific pelleted diet or lab block should form the base of the diet, alongside small daily portions of fresh vegetables. Mice are omnivores in the wild, eating seeds, plant matter, insects, and even carrion opportunistically, and a pelleted diet formulated specifically for mice covers that range of needs more reliably than a seed mix, which invites the same selective, fatty-piece-picking behavior seen in rats and hamsters.

Mice also practice coprophagy, eating some of their own droppings, roughly six times a day. Like in [degus](/guides/degu/), this is normal, necessary behavior that lets them extract nutrients a single pass through the gut misses, not something to try to prevent.

Keep treats and fruit occasional rather than routine, and always provide fresh water via a properly positioned sipper bottle, checked daily since a clogged spout is easy to miss on an animal that drinks so little at a time.`,
      enrichment: `Mice are naturally social, but sex matters more here than it does for rats. Females of most lines get along well in same-sex groups and are the more straightforward choice if you want a group. Intact adult males frequently fight, especially if they're unfamiliar with each other or can smell females nearby, so male mice are usually kept singly, paired with a desexed female, or in a stable group of littermates established before weaning and never added to afterward. Whatever the arrangement, mice shouldn't be housed completely alone unless a vet has specifically advised it for an individual animal's welfare.

Provide tunnels, climbing structures, chew blocks, and a smooth exercise wheel, and rotate items regularly since mice investigate novelty quickly. Nesting material that mice can shred and arrange themselves is both enrichment and a genuine behavioral need.

Mice are quicker and more easily startled than rats, and most individuals don't tame down to the same degree of confident handling. Short, frequent, gentle handling sessions from a young age produce the calmest results, but expect a mouse to stay a faster-moving, more reactive pet than a rat even with consistent socialization.`,
      health: `Respiratory infection is common in mice, worsened by damp conditions, drafts, and dusty bedding, the same Mycoplasma pulmonis risk that affects rats. Watch for labored or noisy breathing (affected mice can make an audible chattering sound), squinting, and discharge from the eyes or nose, and see a vet promptly since small animals decline quickly.

Mice have continuously growing incisors, and overgrown teeth cause difficulty eating, weight loss, and mouth trauma if there isn't enough hard material to gnaw on. Regular access to wooden chew blocks is the main prevention, alongside a vet check if you notice dropped food or reluctance to eat.

Tumors, including mammary tumors, become more common as mice age, similar to rats, though mouse mammary tumors are more often adenocarcinomas, a form more likely to be malignant than the typically benign fibroadenomas common in rats. Any new lump is worth a veterinary opinion rather than a wait-and-see approach, and unspayed females on breeding lines carry a higher mammary tumor risk specifically.`,
      checklist: [
        "18x18x10 in minimum cage for 2 to 3 mice",
        "Compatible same-sex group, or a solo/paired male if needed",
        "Bar spacing under 1/2 in",
        "Smooth, non-perforated exercise wheel",
        "Paper-based bedding (never wood shavings or a wood cage)",
        "Mouse-specific pellets or lab blocks",
        "Fresh vegetables in small daily amounts",
        "Wooden chew blocks for tooth wear",
        "Frequent spot-cleaning for odor control",
        "Exotic veterinarian experienced with mice"
      ],
    },
    faqs: [
      { q: "Can mice be kept alone?", a: "Not by default. Mice are social animals and solitary housing is generally considered stressful for them, recommended only when a vet has specifically advised it for an individual animal, usually because of unmanageable aggression. Most mice should be kept in a compatible group of their own species rather than alone." },
      { q: "Do male and female mice need to be housed differently?", a: "Yes, this is one of the bigger practical differences between the sexes in mice. Females of most lines get along well in same-sex groups and are the easier choice if you want more than one mouse without much fuss. Intact adult males are much more prone to fighting, especially with unfamiliar males or when they can smell females nearby, so males are usually kept singly, paired with a desexed female, or in a stable littermate group that was established before weaning and never has animals added or removed afterward." },
      { q: "Why do mice smell more than other small pets?", a: "It comes down to a specific chemical. Male mouse urine contains trimethylamine, a compound that produces a notably pungent smell and is barely present in females and essentially absent in rat urine. Males also scent-mark and urinate considerably more than females as a territorial behavior, so an all-male or mixed mouse cage needs more frequent spot-cleaning than the equivalent rat or gerbil setup to stay on top of the odor." },
      { q: "How long do mice live?", a: "Pet fancy mice typically live 1.5 to 2 years, genuinely shorter than the 2 to 3 years typical of pet rats despite the two being closely related. It's one of the shortest lifespans among the small mammals on this site, so it's worth going in expecting a briefer companionship than a rat, hamster, or gerbil would offer." },
      { q: "Are mice as easy to tame as rats?", a: "Generally, no. Mice are smaller, faster, and more easily startled than rats, and most individuals don't reach the same level of confident, seek-out-interaction handling that a well-socialized rat does, even with frequent, gentle handling from a young age. That doesn't make them bad pets, just a faster-moving, more reactive one that rewards patience rather than one you can expect to relax into a lap." },
      { q: "What's the difference between a mouse and a rat?", a: "They're closely related rodents but different species with meaningfully different care needs. [Rats](/guides/rat/) are larger, generally calmer, and more consistently hand-tameable, and are widely considered one of the more trainable small pets available. Mice are smaller, faster, and more easily startled, and male mice specifically are more prone to fighting each other and to producing a stronger odor than male rats. If you want the more interactive, dog-like companion, most keepers find rats the easier match; if you want the smallest, quickest small mammal on this site and don't mind a shorter lifespan and stronger smell, a mouse is that animal." },
    ],
  },
  {
    id: "rat",
    name: "Fancy Rat",
    emoji: "🐀",
    difficulty: "Beginner",
    petType: "Small Mammals",
    image: "/assets/guides/rat.jpg",
    tagline: "The whip-smart, deeply social rodent that will learn its own name!",
    funFact: "Rats can be trained to respond to their own name, give a high-five, and fetch a ball using the same reward-based methods used on dogs. That knack for learning is also why lab rats have been the standard animal for maze and memory research for more than a century.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Grooming, heat stress signs, and vet
    // trips cite the shared small-mammal guides in the sidebar's Health and
    // More list. Reconciled 2026-09-09 for batch D (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Cage type", value: "A wire cage, never a glass tank. A tank, even a large one, traps ammonia far more effectively than an open wire cage does, and rats are unusually prone to exactly the chronic respiratory disease that kind of buildup drives. A well-built wire cage with a solid, sealed base solves this the way a tank simply cannot.", source: "rat-tank-setup-guide" },
        { label: "Cage size", value: "24x24x24 inches is the minimum for a single rat, and bigger is better beyond that. Because rats must be kept in pairs or small groups, not alone, that minimum is a starting point rather than a target. The practical shorthand: cages built for ferrets or chinchillas are usually the right size for rats too.", source: "rat-tank-setup-guide" },
        { label: "Bar spacing", value: "About half an inch (1 to 1.5 cm) or less. Spacing around 3/4 inch is wide enough that even an adult rat can get its head stuck trying to push through, a real injury risk rather than just an escape risk.", source: "rat-tank-setup-guide" },
        { label: "Temperature", value: "The ideal range is 19 to 23°C, roughly 66 to 73°F, and rats generally do fine across a somewhat broader 64 to 79°F band. Rats cannot sweat or pant, and they regulate body heat largely through their tails, which makes them more heat-sensitive than that broader range might suggest, heat stress becomes a real risk above about 86°F.", source: "rat-tank-setup-guide" },
        { label: "Bedding", value: "Paper-based or cellulose bedding, changed at least twice a week so ammonia does not accumulate between cleanings. Avoid dusty bedding, sawdust specifically, along with cedar and pine, whose aromatic oils irritate a rat's already respiratory-sensitive system.", source: "rat-tank-setup-guide" },
        { label: "Wheel", value: "A solid-surface exercise wheel with no wire rungs, at least 12 inches in diameter and ideally 14 to 16 inches for adult rats, especially males, since a wheel that is too small forces a hunched, arched running posture that is not good for the spine over time.", source: "rat-tank-setup-guide" },
        { label: "Company", value: "Never one. Rats are intensely social and single housing is a welfare problem no amount of enrichment fixes. Two is a minimum and a small same-sex group is better.", source: "rat-enrichment-guide" },
        { label: "Enrichment", value: "A greater total number of enrichment types, listed as nesting material, digging substrate, foraging device, climbing structure, tube, hideaway and suspended area, was associated with more frequent digging, nesting and climbing. Work through the seven categories rather than buying more of what you already have.", source: "rat-enrichment-guide" },
        { label: "Staple diet", value: "A nutritionally complete, rat-specific pelleted diet or lab block as the base of every meal. Always feed food designed specifically for rats, never pellets made for rabbits, guinea pigs, hamsters, or other herbivores.", source: "rat-feeding-guide" },
        { label: "Portions", value: "Feed twice daily, morning and evening, adjusting the amount so a rat finishes what is offered and holds a healthy weight rather than free-feeding an unlimited bowl. Keep vegetables, fruit, grains, and seeds combined under about 10% of the total diet.", source: "rat-feeding-guide" },
        { label: "Foods to avoid", value: "Avoid onion, citrus fruit, walnuts, rhubarb, grapes, raisins, and chocolate entirely. Also skip caffeine, alcohol, raw beans, unripe tomato, green or raw potato, and anything salty, sugary, or heavily processed.", source: "rat-feeding-guide" },
        { label: "Water", value: "Fresh water should always be available in a bottle rather than an open bowl, and more than one bottle per cage, so a blockage or a spot of competition between cage mates never leaves a rat without access.", source: "rat-feeding-guide" },
        { label: "Handling", value: "Pick a rat up using both hands in a scooping motion, one hand under the chest, the other supporting the hindquarters, and hold it close to your body for security, never out at arm's length. Never pick a rat up by the tail: the tail skin can shear away from the tissue underneath under pulling or grasping pressure, an injury called degloving or tail slip.", source: "rat-handling-guide" },
        { label: "Settling in", value: "Give a newly acquired rat a few days to settle into its surroundings before handling begins in earnest, and approach calmly instead of reaching in fast.", source: "rat-handling-guide" },
        { label: "Budget", value: "Roughly $250 to $550 for a properly housed pair. The cage is by far the biggest line item, running anywhere from about $130 for a basic model to $360 for a premium unit. About $20 to $40 a month ongoing, and $60 to $110 for a routine exotic-vet wellness exam.", source: "rat-cost-guide" },
        { label: "Adult size", value: "7 to 10 inches body, plus a 6 to 8 inch scaled tail; 0.8 to 1 lb females, 1 to 1.4 lb males." },
        { label: "Lifespan", value: "The average pet rat lives 18 to 36 months, usually described more simply as 2 to 3 years, with some individuals reaching 4.", source: "rat-cost-guide" },
        { label: "Respiratory disease", value: "The one condition every rat owner needs to recognize. A survey of pet ratteries in the northwestern US found virtually all of them, 95%, positive for the bacterium behind it. There is no cure, and a rat with the chronic form rarely lives longer than 2 years.", source: "rat-health-issues-guide" },
        { label: "Lumps", value: "Mammary tumors are the most common tumor type in rats, affecting both males and females, not just unspayed females, because rat mammary tissue extends widely under the skin from chin to tail. Any new lump warrants a vet visit. Spaying a female rat before 7 months of age meaningfully lowers her lifetime risk.", source: "rat-health-issues-guide" },
        { label: "Grooming", value: "Rats wear their nails down naturally through digging and running far more than rabbits or guinea pigs do, and generally only need a check for overgrowth in older or less active animals rather than a fixed trim schedule.", source: "small-mammal-grooming-nails-molting-guide" },
        { label: "Heat stress signs", value: "Rapid or open-mouth breathing first, then excess drooling or salivation, then weakness and reluctance to move, with tremors, convulsions, collapse, or unconsciousness as the severe stage. Move the animal to the coolest available room, offer cool, not ice-cold, water, cool it gradually, and get to a vet immediately.", source: "small-mammal-temperature-heat-stress-guide" },
        { label: "Vet trips", value: "A ventilated, hard-sided small-animal carrier, ready before a trip is ever needed rather than bought the morning of an appointment. For a bonded pair, the cage mate comes along when the visit or recovery allows it.", source: "small-mammal-vet-visits-and-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "rat-health-issues-guide",
      callNow: [
        "Labored or noisy breathing",
        "Sneezing that doesn't resolve",
        "Any new lump",
        "Head tilt",
        "Sudden behavior change",
        "General lethargy",
      ],
      vetLine: "An exotic vet experienced with rats, found before you need one. See a vet promptly for the first three, don't wait to see if it clears up on its own given how quickly a small animal can decline. The last three are a reason to book a routine visit.",
    },
    routes: [
      { slug: "rat-cost-guide", line: "Why the budget starts at two rats, what a properly sized cage actually costs, and the monthly total most first-timers underestimate." },
      { slug: "rat-tank-setup-guide", line: "Why a wire cage beats a tank, the real minimum size, bar spacing, room temperature, and the wheel that is bigger than you think." },
      { slug: "rat-feeding-guide", line: "Why hamster food is not rat food, the twice-daily portion rule, and the foods to keep away from a rat entirely." },
      { slug: "rat-handling-guide", line: "Why rats rarely bite, what allogrooming looks like, the two-handed scoop, and the tail rule that never bends." },
      { slug: "rat-health-issues-guide", line: "Chronic respiratory disease, mammary and pituitary tumors, kidney disease, and the signs that mean a vet now." },
      { slug: "rat-enrichment-guide", line: "The pet rat study that found variety, not any one item, is what changes behavior, and the seven categories to cover." },
    ],
    buyList: [
      "At least two rats, same-sex",
      "Multi-level wire cage with solid ramped shelves",
      "Solid-surface exercise wheel",
      "Hammocks and suspended platforms",
      "Hideouts, at least one per rat",
      "Tunnels, climbing structures, and a dig box",
      "Nesting material and things to shred",
      "Paper-based or cellulose bedding",
      "Food dishes and more than one water bottle",
      "Chew toys",
      "Rat-specific pellets or lab blocks",
      "Digital thermometer",
    ],
    faqs: [
      { q: "What size cage does a rat need?", a: "24x24x24 inches is the minimum for a single rat, with the largest habitat possible better still, and since rats must be kept in pairs or small groups that minimum applies before adding a second or third rat, not after. Cages built for ferrets or chinchillas are usually a good size." },
      { q: "How many rats should be kept together?", a: "Never one. Rats are intensely social and single housing is a welfare problem no amount of enrichment fixes. Two is a minimum and a small same-sex group is better." },
      { q: "What is the single biggest health risk for pet rats?", a: "Chronic respiratory disease caused by the bacterium Mycoplasma pulmonis, the most common health problem in rats. A survey of pet ratteries in the northwestern US found 95% of them positive for it. Once a rat develops the chronic form it rarely lives longer than 2 years, which makes clean, well-ventilated housing a genuine lifespan issue, not just a comfort one." },
    ],
  },
  {
    id: "ferret",
    name: "Ferret",
    emoji: "🦡",
    difficulty: "Intermediate",
    petType: "Small Mammals",
    image: "/assets/guides/ferret.jpg",
    tagline: "The slinky escape artist that sleeps 18 hours and wreaks havoc in the other 6!",
    funFact: "Ferrets do a 'war dance' when they're excited: a frenzied hopping, bouncing, and sideways leaping display also called the 'dooking.' Dooking means your ferret is having the time of their life!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Vet trips cites the shared
    // small-mammal guide in the sidebar's Health and More list. Reconciled
    // 2026-09-09 for batch C (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Cage", value: "For a pair, at least 30 by 24 by 48 inches, adding roughly 4 additional square feet of floor space for each ferret beyond that. A double-unit multi-level cage with solid levels and a covered ramp is the most consistently recommended setup. Bar spacing one inch or less.", source: "ferret-tank-setup-guide" },
        { label: "Temperature", value: "Keep the room in the 50 to 75°F range, and treat anything above about 80 to 85°F as a real heatstroke risk. No supplemental heat source is needed indoors.", source: "ferret-tank-setup-guide" },
        { label: "Bedding", value: "Washable fabric hammocks and sleep sacks for sleeping. A corner litter box with non-clumping, dust-free litter, paper or pelleted. Never cedar or pine shavings.", source: "ferret-tank-setup-guide" },
        { label: "Out-of-cage time", value: "Several hours of supervised out-of-cage play daily, during their active window, is a requirement, not a bonus. Ferrets denied playtime spent more time lying awake with their eyes open, screeched more, and sat and stood less.", source: "ferret-enrichment-guide" },
        { label: "Ferret-proofing", value: "Block every gap larger than about one inch, secure cabinets and low openings, and remove any rubber or foam items they could chew and swallow, a direct GI blockage risk.", source: "ferret-tank-setup-guide" },
        { label: "Diet", value: "A high-quality, ferret-specific dry kibble, roughly 32 to 40% protein, free-fed around the clock for healthy adults. Never fruits, vegetables, grains, dairy, or chocolate.", source: "ferret-feeding-guide" },
        { label: "Not eating", value: "A healthy adult can develop dangerous blood sugar drops within a single day of not eating. Appetite loss is treated as needing same-day veterinary attention, not a few days of watching.", source: "ferret-feeding-guide" },
        { label: "Nipping", value: "Normal in kits, usually play, teething, fear, or overstimulation, peaking around 3 to 4 months old. Never pop or flick the nose, which increases fear-based biting; redirect to a toy instead.", source: "ferret-handling-guide" },
        { label: "Budget", value: "$300 to $700 to set up. Roughly $50 to $60 a month for a pair. Lifetime vet cost is commonly estimated at $3,000 to $8,000 or more.", source: "ferret-cost-guide" },
        { label: "Adult size", value: "13 to 16 inches body length; males significantly larger." },
        { label: "Lifespan", value: "5 to 9 years on average for US pet ferrets today. Older sources citing 10 to 15 years reflect a healthier population than what's typical now.", source: "ferret-cost-guide" },
        { label: "Adrenal disease", value: "Symmetrical hair loss starting at the tail base and moving toward the head over weeks to months, skin usually healthy, is the hallmark sign, unlike normal seasonal shedding, which is diffuse and resolves within a few weeks.", source: "ferret-adrenal-disease-guide" },
        { label: "Vaccines", value: "Canine distemper (nearly always fatal in ferrets) and rabies, plus annual bloodwork starting at age 2 to 3 for early disease detection.", source: "ferret-health-issues-guide" },
        { label: "Vet trips", value: "A ventilated, hard-sided small-animal carrier, ready before a trip is ever needed rather than bought the morning of an appointment.", source: "small-mammal-vet-visits-and-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "ferret-health-issues-guide",
      callNow: [
        "Urinary blockage in males (a hormone-driven enlarged prostate)",
        "Sudden collapse or seizure (insulinoma)",
        "Vomiting, appetite loss, and lethargy after swallowing rubber or foam (GI blockage)",
      ],
      vetLine: "A ferret-experienced exotic vet, found before you need one. All three are genuine emergencies that need immediate veterinary care, not a wait-and-see approach.",
    },
    routes: [
      { slug: "ferret-cost-guide", line: "$75 to $400 for the ferret, $300 to $700 for the setup, and the $3,000 to $8,000 lifetime vet cost most owners don't budget for." },
      { slug: "ferret-tank-setup-guide", line: "Cage size for a pair, why overheating is the real danger, and the ferret-proofing that matters as much as the cage." },
      { slug: "ferret-feeding-guide", line: "Free-feeding kibble, the fastest gut transit of any common pet mammal, and the honest list of reasons a ferret stops eating." },
      { slug: "ferret-handling-guide", line: "Why kits nip, the right way to respond, and the coat patterns linked to congenital deafness." },
      { slug: "ferret-health-issues-guide", line: "Adrenal disease, insulinoma, GI blockage, and canine distemper, with why middle age is the real turning point." },
      { slug: "ferret-enrichment-guide", line: "The 2022 surveys on what ferrets actually enjoy, and the specific behavior that shows up when they don't get it." },
      { slug: "ferret-legal-guide", line: "Banned in California and Hawaii, restricted in NYC, and the petition that could change California's ban." },
      { slug: "ferret-adrenal-disease-guide", line: "The hair loss pattern that separates adrenal disease from normal shedding, and what the neutering-age link actually shows." },
    ],
    buyList: [
      "30x24x48 inch double-unit multi-level cage",
      "Fleece hammocks and sleep sacks",
      "Corner litter box with paper or pelleted litter",
      "Tunnels and a dig box",
      "Rotating toys (never latex or foam rubber)",
      "Sipper water bottle",
      "High-quality, ferret-specific dry kibble",
      "A ferret-proofed free-roam room",
    ],
    faqs: [
      { q: "What size cage does a ferret need?", a: "For a pair, at least 30 by 24 by 48 inches, plus about 4 square feet of floor for each ferret beyond two. Experienced owners and exotic vets point to the double-unit multi-level cage with solid levels and a covered ramp. Bar spacing: one inch or less." },
      { q: "What ferret health issues count as a real emergency?", a: "A urinary blockage in males from an adrenal-related enlarged prostate, a sudden collapse or seizure from insulinoma, and a GI blockage from swallowed rubber or foam are all genuine emergencies that need immediate veterinary care, not a wait-and-see approach." },
      { q: "Is adrenal disease curable in ferrets?", a: "It's treatable and often manageable long-term, but not always fully curable, especially if both adrenal glands are affected or if surgery isn't a safe option. Many ferrets live comfortably for years with appropriate medical management even without a full cure." },
    ],
  },
  {
    id: "flying-squirrel",
    name: "Flying Squirrel",
    emoji: "🐿️",
    difficulty: "Advanced",
    petType: "Small Mammals",
    image: "/assets/guides/flying-squirrel.jpg",
    tagline: "The tiny gliding rodent that evolved the same trick as a sugar glider, completely independently!",
    funFact: "Flying squirrels are true rodents, not marsupials, so despite gliding the same way on the same kind of wrist-to-ankle membrane, they aren't closely related to sugar gliders at all. It's convergent evolution: two unrelated animals independently landing on the same solution.",
    // Verified against real research in the flying squirrel deep-dive articles
    // (content/guides/flying-squirrel-cost-guide.mdx and siblings).
    // Legal status varies significantly by US state since this is a native wildlife
    // species in much of its range, unlike the non-native sugar glider - a
    // dedicated legal-guide research pass still has not been done. Do not state
    // specific state legality here.
    costs: {
      setup: [
        { item: "24x24x36 in aviary-style cage", low: 150, high: 300 },
        { item: "Solid exercise wheel (glider/squirrel-safe)", low: 40, high: 70 },
        { item: "Multiple sleeping pouches", low: 30, high: 50 },
        { item: "Branches, ropes, and climbing structure", low: 25, high: 50 },
      ],
      annual: [
        { item: "Varied nuts, seeds, fruit, vegetables, and protein", low: 360, high: 720 },
        { item: "Calcium and multivitamin supplements", low: 20, high: 30 },
        { item: "Annual exotic vet wellness check", low: 75, high: 150 },
      ],
    },
    sections: {
      housing: "A tall, multi-level aviary-style cage, 24x24x36 inches at an absolute minimum and larger where possible, suits this genuinely active, vertically-oriented species. Provide multiple sleeping pouches at different heights along with branches, ropes, and ladders for climbing and gliding practice. Keep the room around 65 to 75 degrees F; this species is native to temperate North American forests, tolerates a cool room well, but struggles with heat, so avoid letting it climb much past 80 degrees F, and keep the cage away from cold drafts too. Unlike a sugar glider, flying squirrels can synthesize some vitamin D through skin exposure to light, so regular access to natural daylight or full-spectrum lighting alongside dietary calcium is generally recommended. Flying squirrels are nocturnal and most active at dusk and through the night, so plan feeding and interaction around their schedule, not a daytime one.",
      diet: "A varied omnivorous diet of nuts, seeds, fruit, vegetables, and a protein or insect component, with calcium and multivitamin supplementation to prevent the same calcium-phosphorus imbalance risk seen in sugar gliders. Avoid an all-seed or nut-heavy diet, both for calcium balance and because the fat content drives obesity in a captive animal that's naturally far more active than its cage allows.",
      enrichment: "Deeply social, a solitary flying squirrel is a stressed one, and they should be kept in same-sex or bonded pairs and small groups, closely paralleling the sugar glider's social requirement. Hand-raised, captive-bred joeys imprint readily and often bond very closely with a consistent handler, commonly carried in a bonding pouch during the day so they acclimate to a keeper's scent ahead of active evening handling sessions. Wild-caught or late-socialized animals are considerably more skittish and not a realistic pet.",
      health: "Metabolic bone disease from inadequate calcium relative to phosphorus is the same underlying risk seen in sugar gliders, driven by an unbalanced, seed-heavy diet without supplementation. Unlike sugar gliders, which are marsupials, flying squirrels are true rodents with continuously growing incisors, so dental disease from inadequate wear is a real, if secondary, risk worth watching for alongside the diet-driven issues. Obesity from excess nuts or sugary fruit relative to a captive animal's activity level is also common. As with most small exotic mammals, illness is often hidden until it's advanced; a flying squirrel that's lethargic or off its food needs prompt exotic veterinary attention, not a wait-and-see approach.",
      checklist: [
        "24x24x36 in+ aviary-style cage",
        "Multiple sleeping pouches at varied heights",
        "Branches, ropes, and climbing structure",
        "Solid exercise wheel (glider/squirrel-safe)",
        "Varied nuts, seeds, fruit, vegetables, and protein",
        "Calcium and multivitamin supplements",
        "Same-sex or bonded pair/small group housing",
        "Bonding pouch for daytime carrying",
        "Nocturnal-schedule handling and feeding",
        "Exotic veterinarian experienced with flying squirrels",
      ],
    },
    faqs: [
      { q: "Is it legal to own a pet flying squirrel?", a: "It depends heavily on your state, more so than for most pets on this site. Because the Southern flying squirrel is native wildlife across much of the eastern US, several states regulate it under wildlife and game laws rather than exotic-pet rules, a meaningfully different category than how most states treat the non-native sugar glider. Some states permit documented captive-bred animals while restricting wild-caught ones; others restrict native flying squirrels more broadly. Check your specific state's wildlife agency before acquiring one." },
      { q: "What's the difference between a flying squirrel and a sugar glider?", a: "They're not related at all, despite looking and gliding almost identically. Flying squirrels are true rodents; [sugar gliders](/guides/sugar-glider/) are marsupials, an unrelated lineage that independently evolved the same wrist-to-ankle gliding membrane. Flying squirrels are smaller and lighter, and their legal status is more complicated in the US since they're native wildlife rather than an exotic species everywhere." },
      { q: "Can a flying squirrel live alone?", a: "Not well. Flying squirrels are deeply social and a solitary animal is a genuinely stressed one, closely mirroring the same requirement in sugar gliders. Plan for a same-sex or bonded pair, or a small group, rather than a single animal." },
      { q: "How long do flying squirrels live?", a: "3 to 6 years is typical in the wild, sources vary within that range; captive individuals with good care commonly average around 10 years, and well-documented pets have lived past 19, meaningfully longer than most people expect from an animal this small." },
      { q: "Are flying squirrels good pets for beginners?", a: "No. Between the specialized calcium-balanced diet, mandatory social housing, a nocturnal schedule that demands evening commitment, and legal status that genuinely varies by state, this is an advanced exotic pet in the same tier as the sugar glider, not a casual first exotic." },
    ],
  },
  {
    id: "gerbil",
    name: "Gerbil",
    emoji: "🐭",
    difficulty: "Beginner",
    petType: "Small Mammals",
    image: "/assets/guides/gerbil.jpg",
    tagline: "The tidy desert burrower that wants deep bedding, not a bare cage floor!",
    funFact: "Gerbils came out of the Mongolian desert with a water-conserving physiology that makes them one of the least smelly pets you can keep. They produce only a few drops of highly concentrated urine a day, so a well-kept gerbil tank barely registers compared with a mouse or a rat.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats.
    //
    // This species reversed the usual pattern. The old hub was the only page
    // citing Merck, and on protein, fat, portion, humidity, lifespan and tail
    // degloving it was right while the deep dives had drifted. Those figures
    // were moved into the deep dives first, verified against Merck, and the
    // rows below copy them from there. Aural cholesteatoma and seizures were
    // hub-only too and are now sections of the health guide.
    // Reconciled 2026-09-14 for batch H (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Never just one", value: "Gerbils are social and should not be kept alone, so you are buying a same-sex pair or sibling group rather than an animal. Introductions between unfamiliar adults frequently fail, which is the hardest part of keeping them.", source: "gerbil-handling-guide" },
        { label: "Enclosure", value: "A glass aquarium with a secure wire-mesh lid, not a wire cage, since wire construction can't hold the depth of bedding this species needs. A 20-gallon long works as a minimum for a pair, and a 40-gallon breeder, roughly 36 by 18 by 16 inches, is genuinely the better target.", source: "gerbil-tank-setup-guide" },
        { label: "Digging depth", value: "6 to 10 inches at minimum, and some welfare-focused sources recommend even more, so a pair can build real tunnel systems instead of surface burrows. It is the most commonly under-delivered part of gerbil care.", source: "gerbil-tank-setup-guide" },
        { label: "Substrate mix", value: "Aspen shavings and paper-based bedding with some hay worked in holds tunnel shape well. Avoid cedar entirely, skip aromatic non-kiln-dried pine, and avoid scented bedding and fluffy cotton-style nesting material.", source: "gerbil-tank-setup-guide" },
        { label: "Humidity", value: "Below 40%, with good ventilation. Above 50% is where gerbils start developing nasal dermatitis, the sore-nose condition, and below 40% is the level that prevents it.", source: "gerbil-tank-setup-guide" },
        { label: "Temperature", value: "Normal room temperature, 65 to 75°F, suits this species well without any special heating or cooling.", source: "gerbil-tank-setup-guide" },
        { label: "Wheel", value: "A solid-surface exercise wheel, 8 inches minimum, 10 to 12 inches is better. Wire-rung wheels are a real injury risk.", source: "gerbil-tank-setup-guide" },
        { label: "Cleaning", value: "Keep some old, familiar-smelling nesting material aside during cleanouts and put it back afterward. Gerbils are strongly scent-driven, and a completely fresh-smelling environment after a full clean can cause temporary stress or even conflict between cage mates.", source: "gerbil-tank-setup-guide" },
        { label: "Staple diet", value: "A uniform pelleted diet or lab block, since a gerbil can't pick favorites out of it. Aim for 18 to 20% protein and keep fat at or under about 4%: past that, gerbils develop raised blood cholesterol, more pronounced in males.", source: "gerbil-feeding-guide" },
        { label: "Reading the bag", value: "The American Gerbil Society's 14% protein is a floor, not a target, and many products labeled simply \"Hamster and Gerbil Food\" miss even that, since they're really formulated for hamsters. Check the guaranteed analysis panel.", source: "gerbil-feeding-guide" },
        { label: "Portion", value: "Roughly 5 to 8 grams, about a tablespoon, of pellets per adult gerbil per day, fed once daily. Fresh vegetables every other day or a few times weekly, and fruit as an occasional weekly indulgence.", source: "gerbil-feeding-guide" },
        { label: "Seed mixes", value: "Gerbils selectively eat the fatty seeds, sunflower especially, and leave the balanced components behind, so a bag that looks nutritionally complete on the label doesn't get eaten that way.", source: "gerbil-feeding-guide" },
        { label: "Foods to avoid", value: "Grapes and raisins, rhubarb, chocolate, onion and garlic, avocado, raw potato, raw kidney beans, and apple seeds, plus salty, sugary, or processed human food and dairy. Watery lettuce can cause diarrhea.", source: "gerbil-feeding-guide" },
        { label: "Sand bath", value: "Chinchilla sand rather than the finer dust, offered a couple of times a week rather than left in permanently. It is what keeps the coat in order.", source: "gerbil-enrichment-guide" },
        { label: "Things to destroy", value: "Cardboard tubes, plain toilet rolls, seagrass, untreated hardwood, hay. Gerbils gnaw constantly, and a bare tank leads to bar chewing and repetitive digging in one corner.", source: "gerbil-enrichment-guide" },
        { label: "Never by the tail", value: "Grasping pressure causes tail slip, where the skin and fur come away and the whole tail can be lost. Scoop by the body instead, low over a surface.", source: "gerbil-handling-guide" },
        { label: "If it happens", value: "The skin slips away and the tissue underneath, now exposed, dies, and the bare portion has to be amputated as soon as possible to prevent infection setting in, so this is a vet visit rather than something to watch.", source: "gerbil-health-issues-guide" },
        { label: "Diarrhea", value: "Tyzzer's disease is the most common infectious disease in this species and can progress to death quickly. Ruffled fur, lethargy, a hunched posture, poor appetite and diarrhea: see a vet immediately.", source: "gerbil-health-issues-guide" },
        { label: "Head tilt", value: "Aural cholesteatoma, which occurs in half of gerbils over two years old: a growth in the ear canal that pushes the eardrum inward, eventually causing bone damage and inner ear destruction. Head tilt is the visible sign.", source: "gerbil-health-issues-guide" },
        { label: "Lumps on the belly", value: "Tumors run at a 25 to 40% incidence past two or three years, and scent gland carcinomas in males plus ovarian tumors in females account for roughly 80% of them. The gland sits as a bare orange-tan oval on the midline.", source: "gerbil-health-issues-guide" },
        { label: "Seizures", value: "They occur in some lines and are uncommon in many pet strains. They commonly start at 2 to 3 months old, get more frequent and severe up to about 6 months, then decline. An episode lasts several minutes and leaves no permanent damage, and medication is not usually needed.", source: "gerbil-health-issues-guide" },
        { label: "Legal check", value: "Worth settling before you buy: at least one state bans this species outright, and the rules are written in a way that catches it by absence rather than by name.", source: "gerbil-legal-guide" },
        { label: "Budget", value: "$5 to $50 each and you need at least two, roughly $150 to $350 to set up a pair, and about $10 to $20 a month once the annual supply costs are spread out.", source: "gerbil-cost-guide" },
        { label: "Lifespan", value: "2 to 3 years is the normal lifespan for this species.", source: "gerbil-cost-guide" },
        { label: "Adult size", value: "4 to 5 inches (10 to 13 cm) body, plus a furred tail of similar length; 2 to 4 oz." },
        { label: "Getting one to the vet", value: "A hard-sided carrier with familiar bedding inside, the cage mate travelling along wherever the clinic allows it, and no long pre-surgery fast: the overnight fast a dog gets before anesthesia is wrong for a small mammal this size.", source: "small-mammal-vet-visits-and-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "gerbil-health-issues-guide",
      callNow: [
        "Diarrhea, don't wait on this one",
        "A tail stripped of its skin, since the bare portion needs amputating before infection sets in",
        "A lump along the belly midline",
        "A head tilt",
        "Dropped food or drooling",
        "A nose that looks persistently red or bloody",
      ],
      vetLine: "Diarrhea in a gerbil is an emergency, see a vet immediately, since Tyzzer's disease can progress to death quickly if untreated.",
    },
    routes: [
      { slug: "gerbil-cost-guide", line: "$5 to $50 a gerbil and you need two, the $150 to $350 pair setup, and why the monthly figure is smaller than it looks." },
      { slug: "gerbil-tank-setup-guide", line: "Why it has to be glass, the 6-to-10-inch digging depth most starter kits can't hold, and the humidity number that prevents sore nose." },
      { slug: "gerbil-feeding-guide", line: "The 18 to 20% protein target, the 4% fat ceiling, and why a seed mix that looks complete on the label doesn't get eaten that way." },
      { slug: "gerbil-handling-guide", line: "Same-sex pairs, day-active hours, and the one rule that matters most: never by the tail." },
      { slug: "gerbil-health-issues-guide", line: "Tyzzer's disease as a same-day emergency, cholesteatoma in half of gerbils past two years, tumors, seizures, and tail degloving." },
      { slug: "gerbil-enrichment-guide", line: "The burrow study, the sand bath, and a priority list you can shop from." },
      { slug: "gerbil-legal-guide", line: "Where a gerbil is banned, and the exception-by-absence trap that catches it." },
    ],
    buyList: [
      "20-gallon long glass tank for a pair, 40-gallon breeder preferred",
      "Secure wire-mesh lid",
      "Aspen shavings and paper-based bedding, enough for 6 to 10 inches",
      "Hay, worked into the substrate to hold tunnel shape",
      "Solid exercise wheel, 8 inches minimum",
      "Chinchilla sand and a sand bath dish",
      "Hideouts and rigid tunnels",
      "Untreated wood and cardboard to gnaw",
      "Water bottle and food dish",
      "Digital thermometer and hygrometer",
      "Pelleted gerbil diet at 18 to 20% protein",
    ],
    faqs: [
      { q: "What is the best staple food for a gerbil?", a: "The best base is a uniform pelleted diet or lab block made for gerbils, since a gerbil can't pick favorites out of it. Aim for 18 to 20% protein and keep fat at or under about 4%. The American Gerbil Society's 14% is a floor rather than a target, and many bags labeled 'Hamster and Gerbil Food' miss even that." },
      { q: "How deep should gerbil bedding be?", a: "6 to 10 inches of digging depth at minimum, and some welfare-focused sources go further, so a pair can build real tunnels instead of surface burrows. It is the most commonly under-delivered part of gerbil care." },
      { q: "Can you pick a gerbil up by the tail?", a: "Never. Grasping pressure causes tail slip, where the skin and fur come away and the whole tail can be lost. That one needs a vet. Scoop by the body." },
    ],
  },
  {
    id: "guinea-pig",
    name: "Guinea Pig",
    emoji: "🐹",
    difficulty: "Beginner",
    petType: "Small Mammals",
    image: "/assets/guides/guinea-pig.jpg",
    tagline: "The vocal, social little veggie lover that needs a friend!",
    funFact: "Guinea pigs have over 11 different vocalizations. They 'wheek' when excited about food and 'purr' when content (similar to cats but much louder)!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size and lifespan come from
    // the encyclopedia entry, which no deep dive repeats. Nails and vet trips
    // cite the shared small mammal guides in the sidebar's Health and More
    // list. Reconciled 2026-09-08 after the guinea pig set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Enclosure", value: "7.5 square feet minimum for one, 10.5 for a pair (and a pair is the recommended minimum), more for a larger group. Solid floor, never wire.", source: "guinea-pig-tank-setup-guide" },
        { label: "Temperature", value: "65 to 79°F. Heatstroke becomes a real risk above 80°F, so the gap between the comfortable ceiling and the danger line is a single degree.", source: "guinea-pig-tank-setup-guide" },
        { label: "Bedding", value: "Paper-based bedding, kiln-dried pine, or fleece liners. Never cedar, raw pine, or sawdust.", source: "guinea-pig-tank-setup-guide" },
        { label: "Company", value: "Pairs or small groups, not solitary. Guinea pigs housed alone tend to become withdrawn or depressed.", source: "guinea-pig-tank-setup-guide" },
        { label: "Diet", value: "Grass hay unlimited, roughly 80% of the diet. About 1/8 cup (about 2 tablespoons) of vitamin-C-fortified pellets per guinea pig, and roughly 1 cup of fresh leafy greens.", source: "guinea-pig-tank-setup-guide" },
        { label: "Vitamin C", value: "10 to 25 mg/kg a day for a healthy adult, 30 mg/kg or more if growing, pregnant, lactating, or ill, roughly 20 to 25 mg a day for a typical adult. A quarter of a medium bell pepper covers it.", source: "guinea-pig-scurvy-vitamin-c-guide" },
        { label: "Not eating", value: "Call a vet at 8 to 12 hours without eating or producing droppings. Once GI stasis sets in, it can become life-threatening within 24 to 48 hours.", source: "guinea-pig-feeding-guide" },
        { label: "Handling", value: "Approach from the side, never above. One hand under the chest behind the front legs, the other supporting the hindquarters. Stay low, a fall can be fatal.", source: "guinea-pig-handling-guide" },
        { label: "Budget", value: "$10 to $60 from a shelter, around $50 at a pet store. $100 to $250 to set up. $33 to $70 a month for one, $60 to $135 for a pair.", source: "guinea-pig-cost-guide" },
        { label: "Adult size", value: "8 to 12 inches, 1.5 to 2.6 lbs." },
        { label: "Lifespan", value: "4 to 8 years." },
        { label: "Nails", value: "A trim roughly every 6 to 8 weeks, with styptic powder within reach before you start, a flashlight held behind dark nails to find the quick.", source: "small-mammal-grooming-nails-molting-guide" },
        { label: "Vet trips", value: "Don't withhold food the way you would for a dog or cat, guinea pigs and rabbits can't vomit and don't need a long pre-op fast. Bring the cage mate along when the visit allows it.", source: "small-mammal-vet-visits-and-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "guinea-pig-health-issues-guide",
      callNow: [
        "Refusal to eat",
        "Drooling",
        "Labored breathing",
        "Diarrhea",
        "Lethargy",
        "A hunched posture",
      ],
      vetLine: "A cavy-savvy exotic vet, found before you need one. Guinea pigs hide illness well, so an annual wellness exam matters even when everything looks fine.",
    },
    routes: [
      { slug: "guinea-pig-cost-guide", line: "$10 to $60 for the animal, $100 to $250 to set up, and why the budget really needs to plan for two." },
      { slug: "guinea-pig-tank-setup-guide", line: "The 7.5 to 10.5 square foot minimum, temperature, bedding, and why vitamin C makes this diet different from a rabbit's or hamster's." },
      { slug: "guinea-pig-scurvy-vitamin-c-guide", line: "What scurvy actually looks like by stage, why fortified pellets alone aren't enough, and the real daily numbers." },
      { slug: "guinea-pig-feeding-guide", line: "Schedule, life-stage differences, safe and toxic foods, and the honest range of reasons a guinea pig stops eating." },
      { slug: "guinea-pig-handling-guide", line: "The correct two-handed pickup, why staying low matters, and the stress signs that mean the session is over." },
      { slug: "guinea-pig-health-issues-guide", line: "Respiratory infection, dental disease, GI stasis, bladder stones, and ovarian cysts, with what to watch for and when to call." },
      { slug: "guinea-pig-enrichment-guide", line: "Hideouts, foraging enrichment that replaces up to 80% of a wild guinea pig's day, and supervised floor time." },
    ],
    buyList: [
      "C&C cage or similar (7.5 sq ft minimum, 10.5 for a pair)",
      "Paper-based bedding, kiln-dried pine, or fleece liners",
      "Multiple hideouts and tunnels",
      "Hay rack and unlimited grass hay",
      "Vitamin-C-fortified guinea pig pellets",
      "Fresh vegetables, bell pepper especially",
      "Vitamin C supplement (backup, not a replacement for fresh food)",
      "Water bottle and food dishes",
      "Nail clippers and styptic powder",
      "Safe chew toys",
    ],
    faqs: [
      { q: "How much space does a guinea pig need?", a: "About 7.5 square feet, roughly 30 by 36 inches, for one, and 10.5 for a pair, with more for a larger group. Bigger is always better: guinea pigs are active and use the room." },
      { q: "How long can a guinea pig safely go without eating?", a: "Not long. Sources say call a vet after 8 to 12 hours with no eating and no droppings, since guinea pig digestion depends on constant food throughput. Once GI stasis sets in, it can become life-threatening inside 24 to 48 hours." },
      { q: "Why is vitamin C such a big deal for guinea pigs specifically?", a: "Guinea pigs, like humans, can't produce their own vitamin C, which makes deficiency a species-specific concern. It weakens the immune system, slows wound healing, and disrupts normal bone and tooth development, and it's almost entirely preventable through diet." },
    ],
  },
  {
    id: "hamster",
    name: "Hamster",
    emoji: "🌰",
    difficulty: "Beginner",
    petType: "Small Mammals",
    image: "/assets/guides/hamster.jpg",
    tagline: "The pouch-stuffing solo escape artist that needs way more space than the pet store box!",
    funFact: "A hamster's cheek pouches can stretch back past its shoulders when fully packed with food, holding roughly a fifth of the hamster's own body weight.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Reconciled 2026-09-08
    // after the hamster set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "Legal in every US state except Hawaii, which bans hamsters outright with no permit route.", source: "hamster-legal-guide" },
        { label: "Enclosure", value: "Roughly 700 to 775 square inches of unbroken floor for a Syrian, around 600 for dwarf species, more always better. Bar spacing no more than 1/2 inch for Syrians, 1/4 inch for smaller species.", source: "hamster-tank-setup-guide" },
        { label: "Temperature", value: "65 to 75°F, held steady. Under 60°F risks torpor, a hibernation-like state; over 80°F risks heat stress.", source: "hamster-tank-setup-guide" },
        { label: "Bedding", value: "At least 6 inches of dust-free paper bedding or aspen shavings, a welfare requirement, not decoration. Never cedar or pine.", source: "hamster-tank-setup-guide" },
        { label: "Wheel", value: "Solid surface, no rungs. 8 to 11 inches for a Syrian, 6 to 8 for a dwarf. Too small forces an arched running posture that's hard on the spine.", source: "hamster-tank-setup-guide" },
        { label: "Sand bath", value: "A dust-free, non-clumping sand bath is a species essential, not an extra, for working coat and skin oils out.", source: "hamster-tank-setup-guide" },
        { label: "Company", value: "Syrian hamsters are strictly solitary, and housing two together leads to fighting. This is one of the most common and preventable hamster-owner mistakes there is.", source: "hamster-handling-guide" },
        { label: "Diet", value: "A nutritionally complete hamster pellet or lab block as the staple, not a loose seed mix. Small daily fresh vegetables, under about 10% of the diet combined with fruit.", source: "hamster-feeding-guide" },
        { label: "Not eating", value: "6 to 12 hours without eating is worth watching, 12 to 24 hours warrants a vet call, 24+ hours is critical, 48+ life-threatening. A day of no visible eating can also just mean a hamster is working through a cheek-pouch hoard.", source: "hamster-feeding-guide" },
        { label: "Handling", value: "Let it wake up and orient itself before reaching in, never grab from above. Scoop from below with both hands. Syrians are the easiest to handle; dwarfs and Roborovski are faster and more nip-prone.", source: "hamster-handling-guide" },
        { label: "Budget", value: "$15 to $25 for a Syrian ($8 to $30 for dwarfs, $5 to $15 rescue). $150 to $350 to set up. $15 to $50 a month.", source: "hamster-cost-guide" },
        { label: "Adult size", value: "5 to 7 inches, 4 to 7 oz." },
        { label: "Lifespan", value: "A large veterinary study found a median age at death of 1.75 years. Syrians tend toward 2 to 3 years, dwarf species often 1.5 to 2.5.", source: "hamster-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "hamster-health-issues-guide",
      callNow: [
        "Watery diarrhea or a wet, matted rear end (wet tail, fatal within 24 to 48 hours untreated)",
        "Dropped food or drooling",
        "Sudden weight loss",
        "A lump or growth",
        "Labored breathing",
      ],
      vetLine: "An exotic vet, found before you need one. Wet tail is a same-day emergency, not a wait-and-see situation; most of the rest of this list is prevented through clean, dust-free bedding and a stress-free setup.",
    },
    routes: [
      { slug: "hamster-cost-guide", line: "$15 to $30 for the animal, $150 to $350 to set up, and what a median 1.75-year lifespan means for the budget." },
      { slug: "hamster-tank-setup-guide", line: "The real floor space (bigger than any starter kit), bar spacing, bedding depth, wheel size, and the sand bath most kits skip." },
      { slug: "hamster-feeding-guide", line: "Free-choice versus scheduled feeding, safe and toxic foods, and how to tell cheek-pouch hoarding from real appetite loss." },
      { slug: "hamster-handling-guide", line: "Why species matters more than you'd think, the correct scoop-from-below technique, and why waking a sleeping hamster gets you bitten." },
      { slug: "hamster-health-issues-guide", line: "Wet tail, overgrown incisors, tumors, respiratory infections, and diabetes in dwarf species." },
      { slug: "hamster-enrichment-guide", line: "The bedding-depth study behind the numbers above, correct wheel sizing, and what wire-gnawing actually means." },
    ],
    buyList: [
      "700 to 775+ sq in cage for a Syrian, 600+ for a dwarf (bin, wire with tight bar spacing, or glass tank)",
      "6+ inches of paper-based or aspen bedding",
      "8 to 11 inch solid-surface exercise wheel (Syrian) or 6 to 8 inch (dwarf)",
      "Dust-free, non-clumping sand bath",
      "Hideout and chew toys",
      "Hamster-specific pellets or lab blocks",
      "Food and water dishes or a sipper bottle",
      "Digital thermometer",
    ],
    faqs: [
      { q: "What size enclosure does a hamster need?", a: "Current welfare guidance puts a Syrian at roughly 700 to 775 square inches of unbroken floor, and dwarf species near 600, with more always better. A 40-gallon breeder suits dwarfs; a Syrian wants something closer to a 75-gallon." },
      { q: "What is wet tail and why is it so dangerous?", a: "Wet tail (proliferative ileitis) is a bacterial condition tied to stress that a large veterinary study found to be both the most common diagnosed condition and the leading specific cause of death in pet hamsters, present in roughly 7 to 8% of hamsters studied. It hits young Syrians between 3 and 10 weeks old hardest and can be fatal within 24 to 48 hours without treatment, making it a same-day emergency, not a wait-and-see situation." },
      { q: "Can two Syrian hamsters be housed together so they have a friend?", a: "No. Syrian hamsters are strictly solitary, and housing two together leads to fighting. This is one of the most common and preventable hamster-owner mistakes there is." },
    ],
  },
  {
    id: "hedgehog",
    name: "Hedgehog",
    emoji: "🦔",
    difficulty: "Intermediate",
    petType: "Small Mammals",
    image: "/assets/guides/hedgehog.jpg",
    tagline: "The spiky little explorer that runs on a wheel all night!",
    funFact: "When threatened, hedgehogs roll into a tight ball and can make a variety of cute snuffling and hissing sounds. They're surprisingly vocal!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Vet trips and grooming
    // cite the shared small mammal guides in the sidebar's Health and More
    // list. The old hub put Wobbly Hedgehog Syndrome at 1 in 3, ten times the
    // figure in the health guide written to correct it, and its cold floor at
    // 65°F against the deep dives' 72. Reconciled 2026-09-14 for batch G
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "California, Georgia, Hawaii, Pennsylvania, Washington DC, and New York City will not let you keep one, and none of them has a pet permit to apply for. New Jersey has one and you need it. Maine and Wisconsin get listed as permit states online and neither one is.", source: "hedgehog-legal-guide" },
        { label: "Enclosure", value: "A minimum of 2 by 3 feet of solid floor space, six square feet, and bigger is fine as long as you fill roughly three-quarters of it with hides and enrichment items. The floor must be solid, never wire, which catches limbs and causes real injuries.", source: "hedgehog-tank-setup-guide" },
        { label: "Temperature", value: "75 to 85°F ideally, inside a workable 72 to 90°F. Below about 72°F, hedgehogs can attempt to hibernate, a dangerous, potentially fatal response in a species not built to survive it safely in captivity.", source: "hedgehog-tank-setup-guide" },
        { label: "Heat source", value: "A ceramic heat emitter on a thermostat, necessary for nearly every keeper, since very few homes stay consistently warm enough without one. Avoid light-emitting heat bulbs specifically, which disrupt the day and night cycle and can contribute to triggering hibernation attempts.", source: "hedgehog-tank-setup-guide" },
        { label: "Humidity", value: "Low, under 40%. A home that runs very dry can leave a hedgehog with itchy, flaky skin, and a humidifier nudging the room up toward that ceiling handles it.", source: "hedgehog-tank-setup-guide" },
        { label: "Substrate", value: "Recycled paper bedding, aspen shavings, or fleece liners, 3 to 4 inches deep wherever the hedgehog burrows. Nothing rough, dusty, or scented, and nothing with loose fibers or frayed fabric, which can trap toes and limbs.", source: "hedgehog-tank-setup-guide" },
        { label: "Lighting", value: "Dim, on a consistent 12-hour light and dark cycle. This is a nocturnal species, and bright, constant lighting is genuinely disruptive rather than a minor annoyance.", source: "hedgehog-tank-setup-guide" },
        { label: "Wheel", value: "A large, solid-surface exercise wheel, 10.5 to 12 inches in diameter, is essential, not optional. Avoid wire or mesh wheels entirely, they cause serious foot and leg injuries.", source: "hedgehog-tank-setup-guide" },
        { label: "Wheel cleaning", value: "Daily. They run and defecate at the same time, and the mess is not optional. In the owner survey, the keepers who consulted a vet were the ones likelier to do it.", source: "hedgehog-enrichment-guide" },
        { label: "A hide", value: "The most commonly missing item and one of the cheapest to fix: 84 percent of animals in a 2024 owner survey had none. A hideout plus fleece liners or a snuggle sack gives a nocturnal animal somewhere dark to sleep through the day.", source: "hedgehog-enrichment-guide" },
        { label: "Floor space", value: "Well past half a square meter, which 68 percent of surveyed animals were housed below. Long and wide rather than tall, with a solid floor: hedgehogs are poor climbers and can be injured falling.", source: "hedgehog-enrichment-guide" },
        { label: "Living alone", value: "African pygmy hedgehogs are solitary and adults housed together fight. Solo housing is the correct answer for this species, never a compromise.", source: "hedgehog-enrichment-guide" },
        { label: "Foraging", value: "Scatter feeding, insects released into a dig box of safe substrate, and food hidden inside cardboard or under objects all turn a bowl into a search. Live insects are the strongest version.", source: "hedgehog-enrichment-guide" },
        { label: "Feeding schedule", value: "Once daily, in the evening, which matches a nocturnal animal's activity. Water stays available around the clock via bottle or bowl, checked daily.", source: "hedgehog-feeding-guide" },
        { label: "Portion", value: "Roughly 2 to 3 teaspoons of a protein base plus 1 to 2 teaspoons of chopped produce, adjusted by body condition rather than a flat number. Portions generally shrink a bit with age and activity level.", source: "hedgehog-feeding-guide" },
        { label: "Base diet", value: "A high-quality hedgehog-specific kibble, or a high-quality, low-fat cat food used as a base, moderate to high protein (roughly 30 to 50% dry matter) and moderate fat (10 to 20% dry matter).", source: "hedgehog-feeding-guide" },
        { label: "Insects", value: "A supplement, not the daily centerpiece: 5 to 6 mealworms or 1 to 2 crickets, 2 to 3 times a week and up to 3 to 4 times weekly. Gut-load them for a day or two first. Waxworms are treat-only, too fatty for a staple.", source: "hedgehog-feeding-guide" },
        { label: "Foods to avoid", value: "Avocado is toxic. Raw meat, raw eggs, and dairy all cause real problems. Nuts, seeds, and hard raw vegetables like uncooked carrot are choking hazards, so cook vegetables before offering them.", source: "hedgehog-feeding-guide" },
        { label: "Not eating", value: "Roughly 24 hours is the outer limit before a vet visit is warranted. For a newly acquired hedgehog still adjusting, breeders treat it more loosely, around 2 nights, since some stress-related refusal is expected. Check fecal output, not bowl level.", source: "hedgehog-feeding-guide" },
        { label: "Picking one up", value: "Scoop from underneath and the sides using flat or cupped hands, like a shovel rather than a grip, and let the ball unroll on its own timeline. Never force a ball open: it teaches the hedgehog that handling means being restrained.", source: "hedgehog-handling-guide" },
        { label: "Huffing and balling", value: "Defensive reflexes, not aggression, and not a sign you're doing anything wrong. A hedgehog carries around 5,000 to 7,000 quills, smooth and unbarbed so they don't embed in skin, but a balled-up one can still genuinely poke.", source: "hedgehog-handling-guide" },
        { label: "Quilling", value: "Baby quills out, adult ones in, in episodes: the nest spines go at about a month old and a heavier round lands around 4 months. Expect more grumpiness and more balling up, and expect each episode to pass within a month or so.", source: "hedgehog-handling-guide" },
        { label: "Self-anointing", value: "A new or interesting smell sets it off, and the hedgehog foams and spreads saliva across its own quills. It looks alarming and is completely normal, not a seizure or a sign of poisoning. Wash your hands afterward before touching your eyes or mouth.", source: "hedgehog-handling-guide" },
        { label: "Quarantine", value: "Mites are most commonly brought in by a new hedgehog that wasn't properly quarantined, so quarantining any new arrival for at least two weeks is the real prevention.", source: "hedgehog-health-issues-guide" },
        { label: "Wobbly Hedgehog Syndrome", value: "Older figures put it at roughly 10% of captive hedgehogs. A more recent 20-year study across multiple US veterinary institutions found a lower confirmed rate, closer to 3%, with average onset around 3.3 years. Progression to full paralysis usually runs 9 to 15 months.", source: "hedgehog-health-issues-guide" },
        { label: "Weight", value: "Watch for a hedgehog that can't fully curl into a ball anymore or struggles to walk or use its wheel. Take weight off gradually: rapid loss can trigger the fatty liver problem it's meant to prevent.", source: "hedgehog-health-issues-guide" },
        { label: "Budget", value: "$100 to $300 for the hedgehog, roughly $200 to $400 for the setup, and about $20 to $40 a month. Heating electricity adds more in colder months, and this species needs consistent warmth year round.", source: "hedgehog-cost-guide" },
        { label: "Vet costs", value: "$80 to $200 for an exotic vet visit, which is the kind of vet this species needs. Respiratory infection treatment with medication commonly reaches $200 to $400, and an emergency fund of $500 or more is a reasonable planning number.", source: "hedgehog-cost-guide" },
        { label: "Lifespan", value: "3 to 6 years typically, with some individuals reaching 8 to 10 years under excellent care. Age 5 is generally considered senior for a hedgehog.", source: "hedgehog-cost-guide" },
        { label: "Adult size", value: "5 to 9 inches (13 to 23 cm); 8 to 24 oz." },
        { label: "Getting one to the vet", value: "A hard-sided carrier with a towel or familiar bedding inside, and no long pre-surgery fast: the overnight fast a dog gets before anesthesia is wrong for a small mammal this size.", source: "small-mammal-vet-visits-and-travel-guide" },
        { label: "Grooming", value: "Nail trims and coat checks look like tidiness chores and are actually health checks. Work them into the handling routine rather than treating them as a separate event.", source: "small-mammal-grooming-nails-molting-guide" },
      ],
    },
    emergencyCard: {
      source: "hedgehog-health-issues-guide",
      callNow: [
        "Any wobbling or change in coordination",
        "Difficulty fully curling into a ball",
        "Wheezing, nasal discharge, and lethargy",
        "A body that feels cold, which may be a hibernation attempt",
        "Crusting or flaking skin and quill loss",
        "Scaly patches near the base of the quills, which is zoonotic",
      ],
      vetLine: "Always see a vet for any wobbling or coordination changes, since several other conditions, cold-related sluggishness, minor strokes, and tumors, can look similar and are far more treatable.",
    },
    routes: [
      { slug: "hedgehog-cost-guide", line: "$100 to $300 for the animal, $200 to $400 to set up, $20 to $40 a month, and why the legal question comes before any of it." },
      { slug: "hedgehog-tank-setup-guide", line: "The 2 by 3 foot floor, the 72 to 90°F range that is the whole ballgame, and the lightless heat emitter that holds it." },
      { slug: "hedgehog-feeding-guide", line: "Evening feeding, the portion by body condition, the foods that are genuinely toxic, and the 24-hour rule for a hedgehog that stops eating." },
      { slug: "hedgehog-handling-guide", line: "What huffing and balling actually mean, the scoop that works, quilling, and why self-anointing is not a seizure." },
      { slug: "hedgehog-health-issues-guide", line: "Wobbly Hedgehog Syndrome at 3% rather than the 10% everyone repeats, obesity, mites, ringworm, and the cold that starts most of it." },
      { slug: "hedgehog-enrichment-guide", line: "The 2024 owner survey: 84 percent with no hide, 68 percent under half a square meter, 17 percent with no wheel." },
      { slug: "hedgehog-legal-guide", line: "The six places you cannot keep one, quoted from the regulations, and the two permit states that turn out not to exist." },
    ],
    buyList: [
      "Enclosure with at least 2 by 3 feet of solid floor",
      "Large solid-surface exercise wheel, 10.5 to 12 inches",
      "Ceramic heat emitter and thermostat",
      "Digital thermometer and hygrometer",
      "Hideout, plus fleece liners or a snuggle sack",
      "Recycled paper bedding, aspen shavings, or fleece",
      "High-quality hedgehog kibble or low-fat cat food",
      "Live insects (mealworms, crickets, dubia roaches)",
      "Food dish and water bottle or bowl",
      "Nail clippers",
      "Exotic vet experienced with hedgehogs",
    ],
    faqs: [
      { q: "How common is Wobbly Hedgehog Syndrome?", a: "Older figures put it at roughly 10% of captive hedgehogs. A more recent 20-year study across multiple US veterinary institutions found a lower confirmed rate, closer to 3%, with average onset around 3.3 years. It's real and serious when it happens, just less common than the older number implies." },
      { q: "How long can a hedgehog go without eating?", a: "Multiple sources converge on roughly 24 hours as the outer limit before a vet visit is warranted. For a newly acquired hedgehog still adjusting, breeders are a bit more lenient, around 2 nights, before recommending a call for help, since some initial stress-related refusal is expected." },
      { q: "Are hedgehogs as cuddly as hamsters or guinea pigs?", a: "No, and the marketing that shelves them together oversells the resemblance. A hedgehog tolerates handling instead of seeking it out, and its temperature needs sit closer to a reptile's than a pocket pet's." },
    ],
  },
  {
    id: "rabbit",
    name: "Rabbit",
    emoji: "🐰",
    // Beginner/Intermediate by the site's own legend (DifficultyLegend):
    // routine husbandry, no heat or UVB to balance, a hay-first diet, but a
    // real learning curve most beginner species lack (the exotic vet, the
    // eight-hour stasis clock, the near-mandatory spay, the space). One
    // notch above the guinea pig, which is Beginner. Settled 2026-09-08
    // after a set test had it at Intermediate for a day.
    difficulty: "Beginner/Intermediate",
    petType: "Small Mammals",
    image: "/assets/guides/rabbit.jpg",
    tagline: "The gentle, litter-trainable companion that loves to binky!",
    funFact: "Rabbits can jump up to 4 feet high and run up to 25 mph. They're surprisingly athletic!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. The last four rows cite the shared
    // small-mammal guides in the sidebar's Health and More list (heat,
    // nails, molting, vet trips), which the set tests kept reporting as
    // gaps because the reader never opened them. Reconciled 2026-09-08 after the rabbit set
    // test (docs/READER_REVIEWS.md) found the old hub contradicting the deep
    // dives on the vet clock, greens, hay share, lifespan, and vet schedule.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Space", value: "8 square feet of enclosure plus 24 square feet of exercise space. In practice a foldable metal exercise pen, 4 feet by 4 feet or bigger.", source: "rabbit-tank-setup-guide" },
        { label: "Time out", value: "At least 5 hours a day to run, and permanent access to a run or a rabbit-proofed room is what the welfare research points at.", source: "rabbit-tank-setup-guide" },
        { label: "Floor", value: "No wire flooring. Vinyl or linoleum over plywood, washable rugs, or fleece.", source: "rabbit-tank-setup-guide" },
        { label: "Hay", value: "Unlimited grass hay, 80 to 85% of the diet. Alfalfa is for babies, juveniles, and nursing does, not healthy adults.", source: "rabbit-feeding-guide" },
        { label: "Pellets and greens", value: "Roughly 1/8 to 1/4 cup of high-fiber timothy pellets per 5 to 6 lbs of body weight daily, and chopped vegetables scaled to body weight with at least 3 varieties of leafy greens.", source: "rabbit-feeding-guide" },
        { label: "Litter", value: "A large cat-litter-box style box with paper-based or wood-pellet litter and hay in or over it. Never clumping litter, pine, or cedar.", source: "rabbit-tank-setup-guide" },
        { label: "Company", value: "A neutered, opposite-sex pair close in age. Solitary rabbits showed less behavior of every kind.", source: "rabbit-enrichment-guide" },
        { label: "Vet", value: "A rabbit-savvy exotic vet, found before you need one. Twice-yearly wellness exams, and ask about the RHDV2 vaccine.", source: "rabbit-health-issues-guide" },
        { label: "Spay or neuter", value: "$150 to $500 or more, budgeted separately. Adoption fees often include it.", source: "rabbit-cost-guide" },
        { label: "Budget", value: "$150 to $600 to set up, $60 to $100 a month, and a $500 to $1,000 emergency fund.", source: "rabbit-cost-guide" },
        { label: "Lifespan", value: "8 to 12 years indoors, some to 14 or beyond. Outdoor rabbits average about 3 to 5.", source: "rabbit-tank-setup-guide" },
        { label: "Heat", value: "Comfortable at 61 to 72°F. Risk climbs once the room passes about 80°F. Indoors, a draft or damp bedding causes more trouble than a cool room.", source: "small-mammal-temperature-heat-stress-guide" },
        { label: "Nails", value: "A trim roughly every 6 to 8 weeks, with styptic powder within reach before you start, one or two nails per sitting for a rabbit that fights it.", source: "small-mammal-grooming-nails-molting-guide" },
        { label: "Molting", value: "A rabbit cannot vomit swallowed fur, so a heavy molt is a GI risk: brush through it and keep the hay in front of them.", source: "small-mammal-grooming-nails-molting-guide" },
        { label: "Vet trips", value: "A sturdy hard-sided carrier the rabbit cannot chew through, secured in the car, with the cage mate along and food in front of them.", source: "small-mammal-vet-visits-and-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "rabbit-health-issues-guide",
      callNow: [
        "No food or droppings for 8 hours. Twelve is already an emergency.",
        "A bloated or tense abdomen",
        "Hunched posture, or teeth grinding at a harsh, audible pitch",
        "Visible fly eggs or maggots in fur",
        "Open-mouth breathing or persistent discharge",
        "Sudden lethargy or hiding",
      ],
      vetLine: "Rabbits need a rabbit-savvy exotic vet, not a standard small-animal clinic. Find one before you need one.",
    },
    routes: [
      { slug: "rabbit-cost-guide", line: "What the pen, the spay, and the first year really cost, and why the emergency fund is not optional." },
      { slug: "rabbit-tank-setup-guide", line: "The space standard, why indoors nearly doubles the lifespan, flooring, and litter training in one move." },
      { slug: "rabbit-feeding-guide", line: "Hay, pellets, and greens by life stage, the toxic list, and the reasons a rabbit stops eating." },
      { slug: "rabbit-gi-stasis-guide", line: "The emergency itself: what normal droppings look like, the early signs, and why waiting is dangerous." },
      { slug: "rabbit-health-issues-guide", line: "Dental disease, flystrike, uterine cancer, RHDV2, and the list of signs that mean the vet today." },
      { slug: "rabbit-handling-guide", line: "The two-hand lift, the football hold, why trancing is fear and not calm, and the stress signs." },
      { slug: "rabbit-enrichment-guide", line: "Why a bonded pair and a permanent run change more than any toy, then the dig box and the rest." },
    ],
    buyList: [
      "Foldable metal exercise pen, 4 by 4 feet or bigger",
      "Large cat-litter-box style litter box",
      "Paper-based or compressed wood-pellet litter",
      "Grass hay (timothy, orchard, or meadow) and a hay feeder",
      "Plain timothy-based pellets",
      "Heavy food and water dishes, or a bottle",
      "Washable flooring: vinyl, rugs, or fleece, with a tarp under the pen",
      "Hides, tunnels, and cardboard boxes to shred",
      "A dig box",
      "Nail clippers",
      "A carrier",
      "Bunny-proofing: cord covers and baseboard protection",
    ],
    faqs: [
      { q: "What is the most common rabbit emergency?", a: "GI stasis, where a rabbit's gut slows down or stops entirely, allowing gas to build up. A rabbit that hasn't eaten or passed stool in 8 to 12 hours is an emergency, not a wait-and-see situation, with eight hours the point to call a vet and twelve the point it is already urgent." },
      { q: "How much space does a rabbit need?", a: "8 square feet of enclosure plus 24 square feet of exercise space for one or two rabbits, with at least 5 hours a day to run in it. In practice that means a foldable metal pen, 4x4 feet or bigger." },
      { q: "How should I choose a companion rabbit?", a: "Neutered, opposite sex is the usual recommendation, and the research adds a detail worth knowing: a larger age difference was associated with a lower friendship index, so pairing animals closer in age is the better bet." },
    ],
  },
  {
    id: "sugar-glider",
    name: "Sugar Glider",
    emoji: "🐿️",
    difficulty: "Advanced",
    petType: "Small Mammals",
    image: "/assets/guides/sugar-glider.jpg",
    tagline: "The tiny, gliding, social marsupial that needs a colony and lots of enrichment!",
    funFact: "Sugar gliders can glide up to 165 feet in the wild using a membrane called a patagium. They steer with their tails and can even do mid-air turns!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult body length comes from the
    // encyclopedia entry, which no deep dive repeats. Vet trips and grooming
    // cite the shared small mammal guides in the sidebar's Health and More
    // list. Built 2026-09-14 for the sugar glider set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Illegal statewide in California, Alaska, and Hawaii, effectively illegal in Pennsylvania where possession permits exist on paper but are almost never granted, banned in the District of Columbia and in New York City, permit-required in New Jersey, and import-permit-required in New Mexico. Generally legal everywhere else: Georgia, Massachusetts, and Wyoming are frequently misreported online as banning them and do not.", source: "sugar-glider-legal-guide" },
        { label: "Never one glider", value: "Sugar gliders are colonial and should be kept in pairs or small groups. That is the natural history and the veterinary consensus, and solitary housing is treated as a major welfare risk. Two minimum, more if you have the space, and neutering males avoids both breeding and a good deal of the scent marking.", source: "sugar-glider-enrichment-guide" },
        { label: "Cage size", value: "A minimum of roughly 30 by 18 by 36 inches for a pair, though many current keepers recommend going larger still, 24 by 24 by 48 inches or more. Whatever footprint you choose, prioritize vertical space, this is a climbing, gliding animal.", source: "sugar-glider-tank-setup-guide" },
        { label: "Bar spacing", value: "No more than half an inch. Young gliders are small enough to squeeze through wider gaps, and escape-proofing matters more with this species than the cage's overall size might suggest.", source: "sugar-glider-tank-setup-guide" },
        { label: "Temperature", value: "75 to 88°F is the comfortable range. Keep the cage away from drafts and direct sun, and place it in a consistently warm part of the house rather than somewhere temperature fluctuates a lot through the day.", source: "sugar-glider-tank-setup-guide" },
        { label: "Humidity and lighting", value: "No special humidity control is needed for this species, and ordinary household lighting is sufficient. There is no UVB requirement the way many reptiles have.", source: "sugar-glider-tank-setup-guide" },
        { label: "Cage floor", value: "A solid cage bottom with washable liners or trays underneath the main living area, rather than loose bedding that accumulates waste and becomes harder to keep clean.", source: "sugar-glider-tank-setup-guide" },
        { label: "Wheel", value: "A standard hamster or rat wheel is genuinely dangerous for a sugar glider, not just the wrong size. Many of those wheels have a center axle bar running through the middle, and that bar can seriously injure a glider's spine or tail during use. Look specifically for an axle-free design built for this species.", source: "sugar-glider-tank-setup-guide" },
        { label: "Sleeping pouch", value: "Position the sleeping pouch high in the cage, matching this species' natural preference for elevated, secure resting spots. A bonding pouch doubles as this resting spot and is also the starting point for taming.", source: "sugar-glider-tank-setup-guide" },
        { label: "Cage cover", value: "Cover part of the cage with fleece, over the top, back, and sides. It helps a new or still-bonding glider feel more secure, and supports the taming process.", source: "sugar-glider-tank-setup-guide" },
        { label: "Climbing routes", value: "Branches at varied heights and angles, ropes, and gaps small enough to cross with a short glide give them routes instead of a ladder. The test is whether a glider can get from the bottom to the top and across the cage without touching the bars.", source: "sugar-glider-enrichment-guide" },
        { label: "Diet split", value: "Roughly one-third nutritionally balanced pelleted kibble, one-third a nectar or sap-based mixture, and one-third a small number of insects offered every other day, a calcium-based multivitamin, and a variety of fresh vegetables and fruits.", source: "sugar-glider-feeding-guide" },
        { label: "Formulated diets", value: "Established, vet-endorsed formulated diets include Leadbeater's mixture, Bourbon's Modified Leadbeater's (BML), High Protein Wombaroo (HPW), Critter Love Complete, and Exotic Nutrition diets.", source: "sugar-glider-feeding-guide" },
        { label: "Portion and timing", value: "Roughly 15 to 20% of body weight daily, offered in the evening since gliders are nocturnal. Kibble can stay available at all times, while the fresh, nectar, insect, and produce components are given daily, with insects every other day. Keep fruit to a small portion.", source: "sugar-glider-feeding-guide" },
        { label: "Calcium to phosphorus", value: "The target dietary calcium-to-phosphorus ratio is roughly 2:1, with 1.5:1 to 2:1 also given.", source: "sugar-glider-feeding-guide" },
        { label: "Supplements", value: "A calcium and vitamin D3 multivitamin made specifically for sugar gliders, not a reptile vitamin, is essential because the typical fruit-and-insect diet runs phosphorus-rich and calcium-poor. Dust or gut-load insects with calcium before feeding, and sprinkle the multivitamin on food.", source: "sugar-glider-feeding-guide" },
        { label: "Foods to avoid", value: "Chocolate and dairy, canned fruit for its excess sodium and preservatives, and any pesticide-treated produce. Foods high in oxalates that impair calcium absorption, including raspberries, strawberries, blackberries, spinach, carrots, beets, pears, lettuce, figs, and collard greens. Skip yogurt drops, peanut butter, pasta, rice, and human candy entirely.", source: "sugar-glider-feeding-guide" },
        { label: "Adult weight", value: "Adult males typically weigh 100 to 160 grams and adult females 80 to 130 grams.", source: "sugar-glider-feeding-guide" },
        { label: "Bonding", value: "Direct handling isn't where this starts. Gliders bond by being carried against your body in a dedicated bonding pouch, absorbing your scent over time until they recognize you as safe. Plan for one to two hours of daily interaction once bonding is underway, and a settling-in period of several days before starting interactive handling at all.", source: "sugar-glider-handling-guide" },
        { label: "Handling room", value: "Gliders chill easily, keep the space above roughly 68°F during sessions.", source: "sugar-glider-handling-guide" },
        { label: "Crabbing", value: "A loud buzzing or chattering sound, the signature defensive response when a glider feels frightened. Gliders aren't easily handled by strangers and will often bite, vocalize, or urinate if forcibly restrained, and a frightened glider's bite can be surprisingly deep.", source: "sugar-glider-handling-guide" },
        { label: "Budget", value: "$200 to $500 each, and you need two, with standard greys toward the lower end and rescue gliders $50 to $200. Roughly $500 to $1,200 upfront for a pair, and $30 to $60 a month. Most keepers report a full first-year cost, gliders plus setup, in the $800 to $1,500-plus range.", source: "sugar-glider-cost-guide" },
        { label: "Vet costs", value: "An exotic vet visit runs $75 to $200. Neutering a male, commonly recommended, runs $100 to $200. No vaccines are needed for this species. Budget at least $200 for unexpected care, sugar gliders can decline quickly when something goes wrong nutritionally.", source: "sugar-glider-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years in captivity, commonly cited around 12 to 15.", source: "sugar-glider-cost-guide" },
        { label: "Adult size", value: "5 to 6 inches (13 to 15 cm) body." },
        { label: "Getting one to the vet", value: "A hard-sided carrier with a towel or a familiar pouch inside, the cage mate travelling along wherever the clinic allows it, and no long pre-surgery fast: the overnight fast a dog gets before anesthesia is wrong for a small mammal this size.", source: "small-mammal-vet-visits-and-travel-guide" },
        { label: "Grooming", value: "Nail trims, coat checks, and scent glands look like tidiness chores and are actually health checks. Work them into the handling routine rather than treating them as a separate event.", source: "small-mammal-grooming-nails-molting-guide" },
      ],
    },
    emergencyCard: {
      source: "sugar-glider-health-issues-guide",
      callNow: [
        "Hind-limb weakness progressing toward paralysis",
        "Trembling",
        "Difficulty climbing",
        "Fractures or seizures, which are the advanced signs",
        "Chewing at their own skin or tail",
        "A diet imbalanced the other way, too much fat or sugar: manageable at home, but worth a vet visit to confirm the adjustments rather than guessing",
      ],
      vetLine: "Always see a vet at the first sign of hind-limb weakness or trembling. Caught early, this is treatable with corrected calcium, vitamin D3, and an overall diet fix. The real fix, though, is prevention, feeding a properly balanced diet from the start, not waiting for symptoms to appear.",
    },
    routes: [
      { slug: "sugar-glider-cost-guide", line: "$200 to $500 each and you need two, a $500 to $1,200 setup, and the first-year number most keepers report." },
      { slug: "sugar-glider-tank-setup-guide", line: "Cage height over width, half-inch bar spacing, 75 to 88°F, and the wheel that can injure a glider's spine." },
      { slug: "sugar-glider-feeding-guide", line: "The thirds, the formulated diets, portion by body weight, and the calcium ratio that prevents paralysis." },
      { slug: "sugar-glider-handling-guide", line: "Why bonding starts in a pouch, what crabbing means, and why a lone glider is harder to reach." },
      { slug: "sugar-glider-health-issues-guide", line: "Metabolic bone disease, obesity, self-mutilation, dental disease, and why more calcium is not the answer." },
      { slug: "sugar-glider-enrichment-guide", line: "The colony requirement, the honest caveat on the self-mutilation claim, height, and routes between things." },
      { slug: "sugar-glider-legal-guide", line: "The states and cities that restrict them, and the bans that turn out not to exist." },
    ],
    buyList: [
      "Tall cage, at least roughly 30 by 18 by 36 inches for a pair, bar spacing half an inch or less",
      "A second glider, never just one",
      "Glider-safe axle-free exercise wheel",
      "Bonding pouch",
      "Sleeping pouch, positioned high in the cage",
      "Branches, ropes, and climbing structures at varied heights",
      "Fleece to cover the top, back, and sides",
      "Solid cage bottom with washable liners or trays",
      "A formulated sugar glider diet",
      "Calcium and vitamin D3 multivitamin made for sugar gliders",
      "Insects for gut-loading and dusting",
      "Exotic vet contact, found before you need one",
    ],
    faqs: [
      { q: "What kind of exercise wheel and substrate should a sugar glider cage use?", a: "A glider-safe, axle-free exercise wheel, not a standard rodent wheel. Wheels built for hamsters or rats often have a center axle bar that can seriously injure a glider's spine or tail during use. For the cage floor, a solid bottom with washable liners or trays underneath works best, rather than loose bedding that accumulates waste and becomes harder to keep clean." },
      { q: "How do you bond with a sugar glider?", a: "Through a dedicated bonding pouch, not direct handling from day one. Gliders bond by being carried against your body in the pouch, absorbing your scent over time until they recognize you as safe. Veterinary guidance recommends a settling-in period of several days before starting interactive handling, and one to two hours of daily interaction once bonding is underway." },
      { q: "Is it true that sugar gliders are banned in Georgia?", a: "No, this is a common misconception. Georgia explicitly allows sugar gliders to be kept as pets without a license, as long as the owner has documentation showing the animal came from a USDA-inspected and regulated source." },
    ],
  },
];
