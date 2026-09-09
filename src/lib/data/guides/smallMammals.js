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
        { label: "Cage size", value: "PetMD lists 24x24x24 inches as the minimum for a single rat and recommends the largest habitat possible beyond that. Because rats must be kept in pairs or small groups, not alone, that minimum is a starting point rather than a target, and PDSA's practical shorthand is worth repeating: cages built for ferrets or chinchillas are usually the right size for rats too.", source: "rat-tank-setup-guide" },
        { label: "Bar spacing", value: "About half an inch (1 to 1.5 cm) or less. The American Fancy Rat and Mouse Association is specific about why: spacing around 3/4 inch is wide enough that even an adult rat can get its head stuck trying to push through, a real injury risk rather than just an escape risk.", source: "rat-tank-setup-guide" },
        { label: "Temperature", value: "RSPCA guidance puts the ideal range at 19 to 23°C, roughly 66 to 73°F, and rats generally do fine across a somewhat broader 64 to 79°F band. Rats cannot sweat or pant, and they regulate body heat largely through their tails, which makes them more heat-sensitive than that broader range might suggest, heat stress becomes a real risk above about 86°F.", source: "rat-tank-setup-guide" },
        { label: "Bedding", value: "Paper-based or cellulose bedding, changed at least twice a week so ammonia does not accumulate between cleanings. Avoid dusty bedding and, per RSPCA guidance, sawdust specifically, along with cedar and pine, whose aromatic oils irritate a rat's already respiratory-sensitive system.", source: "rat-tank-setup-guide" },
        { label: "Wheel", value: "A solid-surface exercise wheel with no wire rungs. Most sources recommend at least 12 inches in diameter, with many experienced keepers and rescues recommending 14 to 16 inches for adult rats, especially males, since a wheel that is too small forces a hunched, arched running posture that is not good for the spine over time.", source: "rat-tank-setup-guide" },
        { label: "Company", value: "Never one. Rats are intensely social and single housing is a welfare problem no amount of enrichment fixes. Two is a minimum and a small same-sex group is better.", source: "rat-enrichment-guide" },
        { label: "Enrichment", value: "A greater total number of enrichment types, listed as nesting material, digging substrate, foraging device, climbing structure, tube, hideaway and suspended area, was associated with more frequent digging, nesting and climbing. Work through the seven categories rather than buying more of what you already have.", source: "rat-enrichment-guide" },
        { label: "Staple diet", value: "A nutritionally complete, rat-specific pelleted diet or lab block as the base of every meal. RSPCA guidance on this is unambiguous: always feed food designed specifically for rats, rather than pellets made for rabbits, guinea pigs, hamsters, or other herbivores.", source: "rat-feeding-guide" },
        { label: "Portions", value: "Feed twice daily, morning and evening, per RSPCA guidance, adjusting the amount so a rat finishes what is offered and holds a healthy weight rather than free-feeding an unlimited bowl. Keep vegetables, fruit, grains, and seeds combined under about 10% of the total diet.", source: "rat-feeding-guide" },
        { label: "Foods to avoid", value: "RSPCA guidance specifically flags onion, citrus fruit, walnuts, rhubarb, grapes, raisins, and chocolate as foods to avoid entirely. Also skip caffeine, alcohol, raw beans, unripe tomato, green or raw potato, and anything salty, sugary, or heavily processed.", source: "rat-feeding-guide" },
        { label: "Water", value: "Fresh water should always be available in a bottle rather than an open bowl, and RSPCA guidance specifically recommends more than one bottle per cage so a blockage or a spot of competition between cage mates never leaves a rat without access.", source: "rat-feeding-guide" },
        { label: "Handling", value: "Pick a rat up using both hands in a scooping motion, one hand under the chest, the other supporting the hindquarters, and hold it close to your body for security, never out at arm's length. Never pick a rat up by the tail: the tail skin can shear away from the tissue underneath under pulling or grasping pressure, an injury called degloving or tail slip.", source: "rat-handling-guide" },
        { label: "Settling in", value: "Give a newly acquired rat a few days to settle into its surroundings before handling begins in earnest, and approach calmly instead of reaching in fast.", source: "rat-handling-guide" },
        { label: "Budget", value: "Roughly $250 to $550 for a properly housed pair. The cage is by far the biggest line item, running anywhere from about $130 for a basic model to $360 for a premium unit. About $20 to $40 a month ongoing, and $60 to $110 for a routine exotic-vet wellness exam.", source: "rat-cost-guide" },
        { label: "Adult size", value: "7 to 10 inches body, plus a 6 to 8 inch scaled tail; 0.8 to 1 lb females, 1 to 1.4 lb males." },
        { label: "Lifespan", value: "Merck Veterinary Manual puts the average pet rat lifespan at 18 to 36 months. Most care organizations, including PDSA, describe it more simply as 2 to 3 years, with some individuals reaching 4.", source: "rat-cost-guide" },
        { label: "Respiratory disease", value: "The one condition every rat owner needs to recognize. A survey of pet ratteries in the northwestern US found virtually all of them, 95%, positive for the bacterium behind it. There is no cure, and Merck is direct about the long-term outlook: rats with the chronic form of this disease rarely live longer than 2 years.", source: "rat-health-issues-guide" },
        { label: "Lumps", value: "Mammary tumors are the most common tumor type in rats, affecting both males and females, not just unspayed females, because rat mammary tissue extends widely under the skin from chin to tail. Any new lump warrants a vet visit. Spaying a female rat before 7 months of age meaningfully lowers her lifetime risk, per Merck guidance.", source: "rat-health-issues-guide" },
        { label: "Grooming", value: "Self-grooming, no routine bathing. Rats wear their nails down through digging and running far more than rabbits or guinea pigs do, and generally only need a check for overgrowth in older or less active animals rather than a fixed trim schedule.", source: "small-mammal-grooming-nails-molting-guide" },
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
      { q: "What size cage does a rat need?", a: "PetMD lists 24x24x24 inches as the minimum for a single rat, recommending the largest habitat possible, and since rats must be kept in pairs or small groups, that minimum applies before adding a second or third rat, not after. PDSA guidance suggests cages built for ferrets or chinchillas are usually a good size." },
      { q: "How many rats should be kept together?", a: "Never one. Rats are intensely social and single housing is a welfare problem no amount of enrichment fixes. Two is a minimum and a small same-sex group is better." },
      { q: "What is the single biggest health risk for pet rats?", a: "Chronic respiratory disease caused by the bacterium Mycoplasma pulmonis. Merck Veterinary Manual calls it the most common health problem in rats, and a survey of pet ratteries in the northwestern US found 95% of them positive for it. Once a rat develops the chronic form, Merck notes it rarely lives longer than 2 years, which makes clean, well-ventilated housing a genuine lifespan issue, not just a comfort one." },
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
    // Item labels are written to match `covers` strings in affiliateProducts.js so the
    // Cost Builder resolves each line to a real product, and the low/high figures are
    // that product's vetted price range rather than an estimate. See
    // scripts/check-cost-coverage.mjs. Lines with no matching product are services.
    // Priced for a pair, which is the minimum this species should be kept in.
    costs: {
      setup: [
        { item: "20-gallon long aquarium (terrestrial setup)", low: 35, high: 60 },
        { item: "Secure mesh lid", low: 35, high: 42 },
        { item: "Solid exercise wheel (10-12 in)", low: 38, high: 42 },
        { item: "Hideouts and tunnels", low: 10, high: 30 },
        { item: "Toys, tunnels, and dig boxes", low: 40, high: 58 },
        { item: "Water bottle and food dishes", low: 3, high: 9 },
        { item: "Digital thermometer and hygrometer", low: 11, high: 19 },
      ],
      annual: [
        { item: "Bedding", low: 18, high: 30 },
        { item: "Hamster pellets or lab blocks", low: 9, high: 14 },
        { item: "Grass hay (unlimited)", low: 18, high: 26 },
        { item: "Sand bath (chinchilla sand)", low: 10, high: 14 },
        { item: "Chew toys (smaller, softer)", low: 10, high: 18 },
        { item: "Exotic vet check", low: 60, high: 130 },
      ],
    },
    sections: {
      housing: `Depth matters more than floor plan. Gerbils are burrowing animals and the single biggest improvement you can make is eight to twelve inches of substrate they can tunnel through. A 20 gallon long tank with a mesh lid suits them better than most wire cages, because a wire cage cannot hold deep bedding and gerbils kick it out.

Mix paper-based bedding with hay or shredded paper so the tunnels hold their shape. Pure fluffy bedding collapses; a mix binds. Once a pair has built a burrow system they will maintain and remodel it for months, and that is the behavior the species is really about.

Bar spacing on any wire section must be half an inch or less. Gerbils are small, determined and good climbers, and a mesh lid needs to be secured rather than rested on top.

Keep them at 65 to 75 degrees F, out of direct sun. A glass tank in a sunny window becomes an oven very quickly.

Keep the humidity low, which is the one environmental number that really matters for this species. Merck advises staying below 40 percent, because above 50 percent gerbils develop nasal dermatitis, the sore-nose condition described in the health section. A gerbil setup in a damp room or a poorly ventilated tank is asking for it.

Skip the plastic. Tubes, wheels and hides in plastic get chewed through fast, and swallowed fragments cause impactions.`,
      diet: `Feed a pelleted diet labeled for gerbils specifically, at 18 to 20 percent protein and roughly 5 to 8 grams per gerbil per day. Merck is unusually direct about this: gerbils fed standard rat or mouse diets develop insidious periodontal disease, obesity, reduced glucose tolerance and diabetic changes in the pancreas, and its stated rule is to always feed diets labeled for the species.

Sunflower seed is the specific thing to keep out. It is high in fat and low in calcium, gerbils will pick it out first given the chance, and on diets above about 4 percent fat they develop raised blood cholesterol, more so in males. Seed mixes are a treat rather than a staple.

Provide hay alongside it, both to eat and to build with.

Fresh food is a small supplement rather than a food group: a little broccoli, carrot, cucumber, apple or dandelion a few times a week is plenty. Too much fresh food causes diarrhea in a species adapted to a dry diet.

Water from a bottle, checked daily. Gerbils drink very little, which makes it easy to miss a bottle that has stopped flowing.

Avoid citrus, onion, garlic, rhubarb, raw beans and anything sugary or sticky.`,
      enrichment: `Keep gerbils in same-sex pairs or small groups. A single gerbil is an unhappy gerbil, and unlike hamsters they are genuinely social.

The catch is that introductions are hard. Adult gerbils that do not already know each other will often fight, sometimes seriously, and a bonded pair can also fall out later in what keepers call declanning. Buy littermates, keep an eye on them, and if a pair does break down they usually cannot be put back together. The split-cage method is the standard way to introduce unfamiliar animals, over one to two weeks.

Give them things to destroy: cardboard tubes, plain toilet rolls, seagrass, untreated hardwood, hay. Gerbils gnaw constantly and a bare tank leads to bar chewing and repetitive digging in one corner.

A sand bath, not a dust bath, keeps the coat in order. Use chinchilla sand rather than the finer dust, and offer it a couple of times a week rather than leaving it in permanently.

Handle low over a surface, scooped in cupped hands. If you must steady a gerbil by the tail, take it at the base only. Merck is explicit that a gerbil lifted by the tail tip degloves: the skin slips off, leaving exposed tissue that goes necrotic and sloughs, and the treatment is prompt amputation of the bare section.`,
      health: `Nasal dermatitis, called sore nose or facial eczema, is the condition Merck describes as common in pet gerbils. It starts as redness around the nostrils and can progress to hair loss and a spreading moist dermatitis, and if it reaches the sinuses it causes appetite loss, weight loss and can kill. The cause is not an infection to begin with: it is porphyrin secretion from the Harderian gland irritating the skin, driven by humidity above 50 percent, overcrowding, or being unable to sand bathe. Fix the environment as well as treating the skin.

Tyzzer's disease is the one that kills fastest. Merck calls it the most frequently described fatal infectious disease of gerbils. It spreads by the fecal-oral route from contaminated bedding, and it presents as sudden death or a very short illness with diarrhea. A hunched, lethargic gerbil with diarrhea needs a vet the same day.

Aural cholesteatoma is the one nobody warns you about. Merck records it in 50 percent of gerbils over two years old: a growth in the ear canal that pushes the eardrum inward, with head tilt as the visible sign, leading to bone damage and inner ear destruction.

Tumors are common with age, at a 25 to 40 percent incidence past two or three years. Scent gland carcinomas in males and ovarian tumors in females account for around 80 percent of them. The scent gland sits as a bare orange-tan oval on the belly, so any lump, ulceration or bleeding there is worth checking early, since marking gland tumors can spread.

Seizures occur in some lines and can look alarming. They typically pass in a few minutes and leave no lasting effects, and anticonvulsants are not usually needed. Merck notes that frequency and severity often decrease with age, but is careful to add that a subset of adults instead get progressively worse, so a gerbil whose seizures are becoming more frequent is not simply growing out of it. Handling gently and often in the first weeks of life suppresses them in predisposed animals.

Overgrown teeth and respiratory infections round out the usual list. Dusty bedding and poor ventilation are behind most respiratory problems.

Because gerbils drink so little, dehydration is easy to miss. Check skin tenting and check the bottle daily.`,
      checklist: [
        "20 gallon long tank or deep-base cage for a pair",
        "At least two gerbils, ideally littermates",
        "8 to 12 inches of bedding for burrowing",
        "Secure mesh lid",
        "Solid 8 in exercise wheel",
        "Pelleted gerbil diet, 18 to 20 percent protein",
        "Hay for eating and tunnel building",
        "Chinchilla sand for bathing",
        "Humidity kept below 40 percent",
        "Cardboard and untreated hardwood to chew",
        "Exotic veterinarian experienced with gerbils"
      ],
    },
    faqs: [
      { q: "Do gerbils smell?", a: "Barely, and it is the main reason people pick them. Gerbils evolved in the Mongolian desert with a physiology built around conserving water, so they produce only a few drops of very concentrated urine a day. A tank with deep bedding, spot-cleaned regularly and fully changed every few weeks, stays far fresher than the equivalent setup for a mouse or a rat." },
      { q: "How deep should gerbil bedding be?", a: "Eight to twelve inches if you can manage it. Gerbils are burrowers and a shallow tray gives them nothing to do, which shows up as bar chewing and digging obsessively in one corner. Mix paper bedding with hay or shredded paper so the tunnels hold rather than collapse. A deep setup is the single biggest quality of life change you can make for this species." },
      { q: "Can gerbils live alone?", a: "They should not. Gerbils are social and a lone animal does poorly. The complication is that they are also territorial: unfamiliar adults often fight, and even an established pair can suddenly fall out, which keepers call declanning. Buy littermates where possible, introduce unfamiliar animals only with the split-cage method over one to two weeks, and separate permanently if a pair breaks down." },
      { q: "Why does my gerbil have a bald orange patch on its belly?", a: "That is the scent gland, and it is normal on both sexes, more prominent in males. Gerbils rub it on objects to mark territory. It is worth checking now and then, because scent gland tumors are one of the more common problems in older gerbils and are usually treatable when found early. Any lump, ulcer or bleeding there needs a vet." },
      { q: "Why is my gerbil having seizures?", a: "Some gerbil lines carry an inherited tendency to brief seizures, usually set off by stress, a sudden noise, or rough handling, and often in younger animals that grow out of it. An episode typically passes in under a minute. Keep the animal somewhere quiet, keep handling sessions short and gentle, and see a vet if seizures are frequent, long, or start in an adult that never had them before." },
      { q: "Should I get a gerbil or a mouse?", a: "Odor is the most practical difference. Gerbils evolved in the Mongolian desert to conserve water and produce only a few drops of concentrated urine a day, making them one of the least smelly small pets you can keep. [Mice](/guides/mouse/), especially males, are near the opposite end of the spectrum: male mouse urine contains trimethylamine, a compound that gives it a distinctly strong smell, so a mouse cage needs more frequent cleaning than a gerbil tank of the same size. Gerbils are also generally the calmer, less easily startled of the two once tame, while mice are smaller, faster, and quicker to bolt. If odor and steadier handling matter most, lean gerbil; if you specifically want the smallest, quickest small mammal on this site, a mouse is that animal." },
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
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "2x4 ft enclosure (bin or modified cage)", low: 60, high: 150 },
        { item: "Solid exercise wheel (10-12 in)", low: 30, high: 50 },
        { item: "Hideout/igloo", low: 10, high: 20 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Supplemental heat source", low: 30, high: 60 },
        { item: "Nail clippers", low: 8, high: 12 },
      ],
      annual: [
        { item: "High-quality cat food", low: 40, high: 70 },
        { item: "Live insects", low: 60, high: 100 },
        { item: "Bedding (paper-based or fleece)", low: 60, high: 100 },
        { item: "Annual vet wellness check (exotic)", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `Hedgehogs need more space than the small round cages commonly sold in pet stores. A minimum of 2 ft x 4 ft of floor space is required for one adult hedgehog, and more is always better. Excellent options include large plastic storage bins modified with ventilation, double-level Critter Nation cages with ramps (that the hedgehog can safely navigate), or DIY C&C cage setups.

Provide a solid exercise wheel 10 to 12 inches in diameter - this is not optional. Hedgehogs can run 5 to 8 miles per night on a wheel. A wheel that is too small (under 10 inches) causes spinal stress. The wheel must have a solid running surface, not bars or mesh, which catch legs and cause injuries. Carolina Storm Wheels and Bucket Wheel are widely recommended.

Temperature is critically important. Hedgehogs must be kept at 72 to 80 degrees F at all times. Below 65 degrees F, African pygmy hedgehogs (the common pet species) can enter a dangerous state of torpor - they are not cold-adapted hibernators, and torpor in pet hedgehogs causes organ damage and can be fatal. Keep the room warm and use a thermostat if necessary.

Bedding should be paper-based (Carefresh, shredded paper) or fleece liners. Never use cedar or pine shavings - the aromatic oils are toxic to small mammals. Provide a cozy hideout (a plastic igloo or small wooden hide box), a food dish, and a water bottle or heavy ceramic water bowl.`,
      diet: `High-quality cat food forms the cornerstone of most pet hedgehog diets. Choose a kibble with a named protein (chicken, turkey) as the first ingredient, low fat content (under 15%), high fiber, and no artificial colors or preservatives. Hedgehog-specific commercial diets exist but vary widely in quality - research ingredients carefully. A mix of 2 to 3 high-quality cat foods provides better nutritional variety than a single option.

Supplement with live insects 3 to 5 times per week. Mealworms (in moderation as they are high in fat and low in calcium), dubia roaches, crickets, and waxworms as an occasional treat are all appropriate. Insects provide protein variety and behavioral enrichment - hedgehogs actively hunt prey and this activity is enriching and natural.

Small amounts of cooked egg, plain cooked chicken, baby food (single-ingredient meat varieties), and low-fat cottage cheese can be offered occasionally for variety. Fresh fruits and vegetables can be offered in tiny quantities: blueberries, apple slices (no seeds), cooked carrot, and leafy greens are safe options. Avoid grapes, raisins, citrus, onion, garlic, and anything with xylitol.

Fresh water must always be available. Some hedgehogs prefer a water bowl over a bottle - offer both initially to see which the hedgehog uses more.`,
      enrichment: `The solid exercise wheel is the single most critical enrichment item and must be provided every night. Without adequate running opportunities, hedgehogs become obese, lethargic, and develop behavioral and health problems. Most hedgehogs run for several hours each night. Accept that this is part of keeping a hedgehog and plan for the wheel noise accordingly.

Provide tunnels (toilet paper rolls, PVC pipes, plastic igloo tunnels), foraging toys (hiding insects or kibble in egg cartons or puzzle feeders), and safe items to explore at various heights. Hedgehogs have excellent senses of smell and will investigate every new scent in their environment. Rotate enrichment items regularly.

Supervised free-roam time in a warm, hedgehog-proofed area (no gaps under furniture large enough for escape, no electrical cords at floor level) is excellent additional enrichment. Many hedgehogs enjoy bath time in a shallow, warm water tub and will swim briefly before toweling off.

Most hedgehogs have a grumpy, defensive reputation - but with patient, consistent handling from a young age, many become quite relaxed and even sociable. Handle at dusk when they are naturally active. Move slowly, support the whole body, and avoid startling them. An anointing hedgehog (self-anointing with unusual scents by licking and spreading saliva on their quills) is engaging and completely normal behavior.`,
      health: `Wobbly Hedgehog Syndrome (WHS) is a progressive and incurable neurological disease caused by a genetic mutation that causes muscle wasting and progressive paralysis, starting in the hindquarters and moving forward. It affects an estimated 1 in 3 African pygmy hedgehogs and has no treatment. A hedgehog with WHS will gradually lose the ability to use its hind legs, then its front legs, and eventually lose the ability to eat. Comfort care and quality of life management with veterinary guidance is the approach.

Obesity is extremely common and leads to fatty liver disease, heart problems, and joint issues. Hedgehogs become obese from overfeeding high-fat insects, insufficient exercise, or inadequate wheel access. Monitor body condition: you should be able to feel but not see the hip bones. A hedgehog that cannot curl into a full ball due to fat deposits is significantly overweight.

Cancer is unfortunately common in hedgehogs over 3 years old - tumors of the uterus, mouth, and mammary glands are most frequently encountered. Annual veterinary examinations with an exotic vet experienced in hedgehogs are strongly recommended from age 2 onward. Spaying females reduces uterine cancer risk significantly.

Torpor (temperature-induced dormancy) in response to cold temperatures is a veterinary emergency in pet hedgehogs. Signs include extreme lethargy, cold body temperature, and difficulty moving. Warm the hedgehog slowly against your body and contact a vet immediately.`,
      checklist: [
        "Minimum 2x4 ft secure enclosure",
        "8 to 12 inch solid exercise wheel",
        "High-quality kitten or adult cat food",
        "Live insects (mealworms, dubia roaches)",
        "Paper-based or fleece bedding",
        "Hideout/igloo",
        "Digital thermometer and hygrometer",
        "Safe foraging toys and tunnels",
        "Nail clippers",
        "Exotic vet experienced with hedgehogs"
      ],
    },
    faqs: [
      { q: "Are hedgehogs nocturnal?", a: "Yes. African pygmy hedgehogs - the standard pet species - are crepuscular to nocturnal, most active from dusk through the night. During daylight hours they will typically sleep in their hideout or curl into a defensive ball. The best time to interact, feed, and observe your hedgehog is in the evening and early night hours. Forcing interaction during the day causes significant stress. If you are primarily a daytime person, a hedgehog's natural schedule may not align well with your lifestyle." },
      { q: "Can hedgehogs run on a wheel?", a: "Yes - and they must. A solid exercise wheel 10 to 12 inches in diameter is one of the most critical pieces of hedgehog equipment. Hedgehogs can run 5 to 8 miles per night and require this nightly exercise for physical and mental health. Without adequate wheel access, hedgehogs become obese, lethargic, and develop health problems including fatty liver disease. The wheel must have a solid running surface - bars or mesh injure feet and legs." },
      { q: "What do hedgehogs eat?", a: "High-quality low-fat cat food forms the backbone of most hedgehog diets. Look for a named protein (chicken, turkey) as the first ingredient and fat content under 15%. Supplement with live insects 3 to 5 times per week - dubia roaches, small mealworms in moderation, and crickets are appropriate. Small amounts of cooked egg, cooked chicken, and safe fruits and vegetables like blueberries, apple, and cooked carrot can be offered as variety. Avoid grapes, raisins, avocado, citrus, onion, garlic, and any xylitol-containing foods." },
      { q: "What is Wobbly Hedgehog Syndrome?", a: "Wobbly Hedgehog Syndrome (WHS) is a progressive, incurable neurological disease caused by a genetic mutation that produces muscle wasting and paralysis. It begins in the hindquarters and moves forward over months to years, eventually affecting the entire body. An estimated 1 in 3 African pygmy hedgehogs is affected. There is no treatment - management focuses on quality of life with veterinary guidance on when euthanasia becomes the compassionate choice." },
      { q: "How long do hedgehogs live?", a: "African pygmy hedgehogs typically live 3 to 6 years in captivity. Some individuals reach 7 to 8 years, but this is the exception. Lifespan is significantly affected by genetics (WHS, cancer predisposition), diet (obesity is extremely common and life-shortening), and access to appropriate veterinary care. Annual check-ups with an exotic vet experienced in hedgehogs from age 2 onward are strongly recommended." },
      { q: "Is a hedgehog related to a porcupine?", a: "No, not closely at all, despite both being spiky. Hedgehogs are small insectivores covered in modified hairs called spines; porcupines are rodents, often much larger, covered in genuinely different quills that detach easily and can lodge in a predator. The two just look superficially similar because both evolved a spiky defense independently." },
      { q: "Is a hedgehog the same as a groundhog?", a: "No, they're not related and don't even look that similar once you know what to look for. A groundhog is a large, spineless burrowing rodent (a type of marmot) native to North America; a hedgehog is a small, spine-covered insectivore. The name similarity is the main source of confusion, not the animals themselves." },
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
      { q: "How much space does a rabbit need?", a: "The House Rabbit Society puts it at 8 square feet of enclosure plus 24 square feet of exercise space for one or two rabbits, with at least 5 hours a day to run in it. In practice that means a foldable metal pen, 4x4 feet or bigger." },
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
    funFact: "Sugar gliders can glide up to 150 feet in the wild using a membrane called a patagium. They steer with their tails and can even do mid-air turns!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x36 in aviary-style cage", low: 150, high: 300 },
        { item: "Solid exercise wheel (glider-specific)", low: 40, high: 70 },
        { item: "Multiple sleeping pouches", low: 30, high: 60 },
        { item: "Branches and climbing structures", low: 25, high: 45 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Bonding pouch", low: 15, high: 25 },
      ],
      annual: [
        { item: "Commercial sugar glider diet (BML/TPG)", low: 200, high: 350 },
        { item: "Fresh fruits, vegetables, and insects", low: 100, high: 180 },
        { item: "Calcium and multivitamin supplements (glider-specific)", low: 20, high: 30 },
        { item: "Electricity (heat, temp-sensitive)", low: 60, high: 100 },
        { item: "Annual vet wellness check (exotic)", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `Sugar gliders require a minimum 24x24x36" aviary-style cage, though larger is strongly recommended. They are highly active gliders and climbers that need vertical space and horizontal bars they can climb throughout. Bar spacing of 1/2 inch or less prevents escape and entrapment.

Provide multiple levels, branches, ropes, and ladders throughout the cage. Multiple sleeping pouches - bonded pairs and groups sleep together in pouches - should be available at different levels. Temperature must stay between 75 and 85 degrees F. Sugar gliders are sensitive to cold and cannot tolerate temperatures below 65 degrees F for any extended period.

Sugar gliders are nocturnal. They sleep through most of the day and become active at dusk. Plan their care, feeding, and interaction around their natural evening and nighttime activity period. Place the cage in an area where nighttime noise and activity won't disturb their sleep.`,
      diet: `Sugar glider nutrition is one of the most complex and debated topics in exotic pet care. The fundamental dietary challenge is that sugar gliders require a very specific calcium-to-phosphorus ratio (close to 2:1 calcium to phosphorus) to prevent Metabolic Bone Disease (MBD/nutritional osteodystrophy). Many common fruits and foods disrupt this ratio.

The most widely used and researched diets are the BML (Bourbon's Modified Leadbeater's) diet and the TPG (The Pet Glider) diet. These commercial or home-prepared formulas are balanced specifically for sugar gliders. Supplement with fresh fruits, vegetables, and occasional live insects (mealworms, crickets). Variety in the fresh food component is important.

Avoid feeding high-phosphorus foods as staples (most nuts and seeds, corn) without careful calcium balancing. Fresh water must always be available in a water bottle. Research the specific diet you choose thoroughly - poorly balanced home-made diets cause rapid onset of MBD in sugar gliders.`,
      enrichment: `A solid exercise wheel (designed for sugar gliders, not a wire hamster wheel which catches legs) is essential - sugar gliders are highly active at night and run extensively. Provide foraging toys, tunnels, rope ladders, glider pouches, and rotating novel objects to maintain engagement.

Social enrichment is the most critical factor in sugar glider wellbeing. Sugar gliders must be kept in pairs or small groups - never alone. A lone sugar glider experiences profound loneliness and frequently develops self-mutilation behaviors (barbering or biting themselves), depression, and shortened lifespan. If you can only commit to one animal, a sugar glider is not appropriate for your situation.

Daily bonding time during their active evening hours is essential. Many keepers carry their gliders in bonding pouches during the day so the animals acclimate to their scent and presence. This is one of the most effective bonding techniques for this species.`,
      health: `Nutritional Osteodystrophy (MBD from calcium-phosphorus imbalance) is the most common serious disease in pet sugar gliders and is entirely preventable with the correct diet. Signs include progressive hind leg weakness, inability to climb, and eventually paralysis and death. A balanced diet with the correct 2:1 calcium-to-phosphorus ratio prevents it. Any glider showing hind leg weakness requires emergency veterinary assessment.

Self-mutilation (self-barbering or chewing of the skin, pouches in males, or tail) is almost always a sign of severe psychological distress from inadequate social contact, inappropriate housing, or undetected pain or infection. A self-mutilating glider requires immediate veterinary assessment and environmental evaluation.

Respiratory infections from drafts, cold temperatures, or stress are common. Sugar gliders are sensitive animals that mask illness - by the time symptoms are obvious, the animal is often significantly compromised. Annual veterinary exams with an exotic vet experienced with sugar gliders are mandatory, not optional.`,
      checklist: [
        "Minimum 24x24x36\" aviary-style cage",
        "Solid exercise wheel (12+ inch)",
        "Multiple sleeping pouches",
        "Commercial sugar glider diet (TPG or Wombaroo)",
        "Fresh fruits, vegetables, and insects",
        "Calcium + multivitamin supplements",
        "Safe foraging toys and tunnels",
        "Branches and climbing structures",
        "Digital thermometer and hygrometer",
        "Exotic veterinarian experienced with gliders"
      ],
    },
    faqs: [
      { q: "Can sugar gliders live alone?", a: "No. A lone sugar glider experiences profound loneliness and frequently develops self-mutilation behaviors - barbering or biting themselves - along with depression and a shortened lifespan. Sugar gliders must be kept in pairs or small groups. If you cannot commit to at least two animals, a sugar glider is not appropriate for your situation. Adoption of bonded pairs is strongly recommended." },
      { q: "What is the correct diet for sugar gliders?", a: "Sugar glider nutrition is complex and highly debated. The most widely used, researched diets are the BML (Bourbon's Modified Leadbeater's) formula and the TPG (The Pet Glider) diet - both are specifically formulated to maintain the critical 2:1 calcium-to-phosphorus ratio that prevents Metabolic Bone Disease. Supplement with fresh fruits, vegetables, and occasional live insects. Research your chosen diet thoroughly before acquiring gliders." },
      { q: "Do sugar gliders need specialized veterinary care?", a: "Yes. Only exotic veterinarians with specific experience in sugar gliders can provide appropriate care. Annual wellness exams are mandatory - sugar gliders mask illness as an evolutionary defense, and by the time symptoms are visible, the animal is usually significantly compromised. Find a glider-experienced exotic vet before acquiring your gliders, not during an emergency." },
      { q: "Are sugar gliders good pets for beginners?", a: "Sugar gliders are not recommended for first-time exotic pet owners. They require a specialized and research-intensive diet, must be kept in same-species groups, are nocturnal and most active when most people are sleeping, need daily bonding time during their active hours, and require exotic veterinary care. They are rewarding for dedicated keepers who fully prepare, but frequently end up in rescue from unprepared owners." },
      { q: "How long do sugar gliders live?", a: "10 to 15 years in captivity with excellent care - appropriate companionship, correct calcium-phosphorus balanced diet, nocturnal scheduling respected, and annual exotic vet exams. Life expectancy drops sharply in isolated animals or those on poorly balanced diets. A sugar glider is a decade-plus commitment." },
      { q: "Is a sugar glider the same as a flying squirrel?", a: "No, despite looking and gliding almost identically. Sugar gliders are marsupials; [flying squirrels](/guides/flying-squirrel/) are true rodents, an unrelated lineage that independently evolved the same wrist-to-ankle gliding membrane. Sugar gliders are also larger and, in the US, are non-native everywhere, while flying squirrels are native wildlife in much of the country and face more complicated, state-by-state legal restrictions as a result." },
      { q: "How can I tell if my sugar glider is male or female?", a: "Males have a visible scent gland as a bald spot on top of the head (and often the chest), plus a pendulous pouch-like structure housing the testes, positioned forward of the vent. Females have a marsupial pouch on the belly, used to carry joeys, which is easy to spot once you know to look for it. Both traits are reliably visible in a healthy adult and don't require a vet to check." },
    ],
  },
];
