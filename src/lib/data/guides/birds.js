export const birdGuides = [
  {
    id: "african-grey",
    name: "African Grey Parrot",
    emoji: "🦜",
    difficulty: "Advanced",
    petType: "Birds",
    image: "/assets/guides/african-grey.jpg",
    tagline: "The genius of the parrot world, one of the most intelligent animals on Earth!",
    funFact: "African Greys have the cognitive ability of a 5-year-old child and can learn over 1,000 words. The famous parrot Alex could identify colors, shapes, and even understand the concept of 'same' and 'different'!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "36x24x48 in cage (larger preferred)", low: 300, high: 600 },
        { item: "Multiple textured perches", low: 30, high: 60 },
        { item: "Full-spectrum UVB light", low: 40, high: 70 },
        { item: "Foraging and puzzle toys", low: 40, high: 80 },
        { item: "Sleep cage or covered area", low: 80, high: 150 },
        { item: "Misting bottle", low: 8, high: 15 },
      ],
      annual: [
        { item: "High-quality parrot pellets", low: 150, high: 250 },
        { item: "Fresh vegetables and limited fruit", low: 150, high: 250 },
        { item: "Rotating toys", low: 80, high: 150 },
        { item: "Annual avian vet exam + bloodwork", low: 150, high: 300 },
      ],
    },
    sections: {
      housing: `African grey parrots require significantly more space than their body size might suggest. A minimum cage of 36x24x48 inches is required, though 48x36x60 inches or larger is strongly preferred. African greys need room to climb, flap, and move. Bar spacing of 3/4 to 1 inch. Stainless steel cages are the safest long-term investment.

Position the cage at eye level against a wall (providing psychological security) and away from the kitchen, drafts, and direct sunlight. Cooking fumes - especially from overheated non-stick cookware - are instantly lethal to birds. African greys are sensitive to environmental stress and benefit from a stable, consistent location.

Provide multiple perches of different diameters and textures: natural wood (manzanita, java, natural branch), rope, and cement perches help maintain foot health. Vary perch heights and placement throughout the cage. A separate sleep cage in a quiet, dark room used consistently each night provides the 10 to 12 hours of uninterrupted sleep African greys need.

Full-spectrum UVB lighting during daytime hours supports vitamin D3 synthesis and healthy calcium metabolism. African greys are notably prone to calcium deficiency and UVB exposure is a meaningful preventative measure.`,
      diet: `High-quality formulated pellets (Harrison's, Roudybush, or Lafeber's) should make up 60 to 70% of an African grey's daily intake. Pellets provide complete, balanced nutrition that seed-only diets cannot replicate. Transitioning from seeds to pellets takes patience - weeks of gradually mixing pellets into seed while monitoring weight - but is one of the most important health investments for a long-lived bird.

Fresh vegetables should constitute 20 to 30% of the diet. Leafy greens (kale, chard, romaine, dandelion), bell peppers, broccoli, carrots, sweet potato, and squash are excellent choices. Rotate offerings daily. Dark leafy greens provide Vitamin A - African greys are particularly prone to Vitamin A deficiency, which suppresses the immune system and causes respiratory and skin problems.

Fruit should be limited to 5 to 10% of diet (high sugar). Nuts (almond, walnut, Brazil nut) can be used as training rewards but are high in fat. Strictly avoid avocado, chocolate, caffeine, onion, garlic, alcohol, xylitol, and high-salt foods - these are toxic to birds. Fresh water changed twice daily is essential.`,
      enrichment: `African greys are frequently cited as the most cognitively sophisticated of all parrot species, with the intellectual capacity of a 5-year-old human child. Without adequate mental stimulation and social interaction, African greys develop severe behavioral problems: feather destructive behavior, excessive screaming, self-mutilation, and stereotypic compulsive behaviors.

Provide a rotating selection of foraging toys, puzzle feeders, shreddable toys, and novel objects every day. Training sessions using positive reinforcement (food rewards for tricks, words, and target behaviors) are excellent daily enrichment that strengthen the bird-keeper bond. African greys learn quickly - they need new challenges regularly.

Provide a minimum of 2 to 4 hours of supervised out-of-cage time daily in a bird-safe environment. A playstand outside the cage stocked with toys and foraging opportunities extends their active territory meaningfully.

Social interaction with their primary human is irreplaceable. African greys form intense pair bonds that transfer to a primary human caregiver in captivity. This requires a significant daily time commitment for the life of the bird - often 40 to 60+ years. Consider this seriously before acquiring an African grey.`,
      health: `Feather Destructive Behavior (FDB) - feather plucking or barbering - is the most visible sign of psychological distress. Causes include boredom, loneliness, hormonal imbalance, nutritional deficiency, infections, and allergies. Addressing FDB requires identifying the underlying cause through veterinary and behavioral assessment. It is rarely simple to resolve.

Psittacine Beak and Feather Disease (PBFD) is a serious viral disease that attacks feather follicles and the immune system. Symptoms include abnormal feather growth and progressive immune failure. There is no cure. Test all new birds before contact with existing birds.

Calcium deficiency manifests as seizures and muscle weakness in African greys - they are metabolically predisposed to this condition more than most parrots. UVB exposure and adequate dietary calcium are preventative. Aspergillosis (fungal respiratory infection) is also common, particularly in birds with compromised immune systems.

Annual avian veterinary exams including complete blood panel are essential. Find an avian vet before you need one. African greys can live 40 to 60 years - establish a long-term veterinary relationship early.`,
      checklist: [
        "Minimum 36x24x48\" cage (larger preferred)",
        "High-quality parrot pellets (Harrison's or Roudybush)",
        "Fresh vegetables and limited fruit daily",
        "Multiple textured perches",
        "Foraging toys and puzzle feeders",
        "UVB light (full spectrum, 10 to 12 hours/day)",
        "Shower or misting bottle for bathing",
        "Safe chew toys (bird-safe wood, rope)",
        "Sleep cage or covered area",
        "Avian veterinarian experienced with parrots"
      ],
    },
    faqs: [
      { q: "How intelligent are African grey parrots?", a: "African greys are widely considered the most cognitively sophisticated parrots, with the intellectual capacity equivalent to a 5-year-old human child. The famous research parrot Alex demonstrated the ability to identify colors, shapes, and materials, count small quantities, and understand the concept of same and different - all in response to open-ended questions, not fixed cues. Most pet African greys do not reach Alex's level, but they demonstrate extraordinary contextual understanding that consistently surprises their keepers." },
      { q: "What should African grey parrots eat?", a: "60 to 70% of the diet should be high-quality formulated pellets (Harrison's, Roudybush, or Lafeber's) providing complete balanced nutrition. 20 to 30% should be fresh vegetables daily - leafy greens, bell peppers, broccoli, carrot, and sweet potato. African greys are particularly prone to Vitamin A deficiency, which suppresses immunity and causes respiratory and skin problems. Dark orange and green vegetables are the most important corrective. Limit fruit to 5 to 10% of the diet due to high sugar content." },
      { q: "How long do African grey parrots live?", a: "40 to 60 years in captivity with excellent care, and some individuals have exceeded 70 years. This makes the African grey one of the longest-lived companion animals available. The commitment is profound - most African greys outlive their original keepers and require provisions in estate plans for their long-term care. Entering into ownership of an African grey without explicit planning for their entire lifespan is a common ethical failure that leads to rehoming trauma for an emotionally sensitive species." },
      { q: "What causes feather plucking in African greys?", a: "Feather destructive behavior (plucking or barbering) is the most common behavioral problem in African greys and has multiple possible causes: boredom, inadequate social contact, hormonal imbalance, nutritional deficiency (especially Vitamin A), bacterial or fungal skin infections, heavy metal toxicity, and allergies. It is rarely simple to resolve and requires systematic veterinary and behavioral investigation. Prevention through adequate enrichment, social interaction, proper diet, and regular veterinary care is far more effective than treating established plucking." },
      { q: "Are African greys prone to calcium deficiency?", a: "Yes - African greys are metabolically predisposed to calcium deficiency more than most parrot species. Calcium deficiency causes muscle tremors, weakness, and in severe cases seizures. The two key preventatives are dietary calcium (dark leafy greens, calcium-enriched pellets, and limited dairy products) and UVB lighting, which enables Vitamin D3 synthesis and calcium absorption. An avian vet-quality UV-B bulb (not a reptile basking bulb) positioned appropriately within the cage is a meaningful investment for this species." },
    ],
  },
  {
    id: "budgie",
    name: "Budgie",
    emoji: "🐦",
    difficulty: "Beginner",
    petType: "Birds",
    image: "/assets/guides/budgie.jpg",
    tagline: "The cheerful, chatty little parakeet that's perfect for first-time bird owners!",
    funFact: "Budgies can learn to talk and have been known to learn over 1,700 words! The Guinness World Record holder was a budgie named Puck who knew 1,728 words, more than any other bird on record!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "18x18x24 in cage (larger preferred)", low: 50, high: 100 },
        { item: "Perches of varied diameters", low: 15, high: 25 },
        { item: "Swing", low: 6, high: 12 },
        { item: "Ladder", low: 4, high: 8 },
        { item: "Foraging toys", low: 10, high: 20 },
        { item: "Food and water dishes", low: 10, high: 20 },
        { item: "Cuttlebone or mineral block", low: 5, high: 12 },
        { item: "Nail clippers", low: 8, high: 12 },
      ],
      annual: [
        { item: "Budgie pellets or seed mix", low: 50, high: 80 },
        { item: "Fresh vegetables", low: 60, high: 100 },
        { item: "Millet sprays (treats)", low: 15, high: 25 },
        { item: "Annual avian vet check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A minimum cage size of 18x18x24 inches is required for a single budgie, but larger is strongly preferred - budgies are active, agile flyers that need space to move. Bar spacing of 1/2 inch or less is essential; wider bars allow a budgie's head to get stuck. The cage orientation should prioritize width over height to allow lateral flight.

Position the cage at eye level, away from the kitchen (cooking fumes are lethal to birds), drafts, and direct sunlight. Budgies feel secure when they can see the room from a stable, elevated position. Cover the cage at night to provide 10 to 12 hours of darkness and uninterrupted sleep.

Provide multiple perches of different diameters (3/8 to 3/4 inch) and textures: natural wood, rope, and a cement perch for nail maintenance. Perches at different heights allow the bird to choose its comfort zone. Include a swing - budgies love to rock and sway.

Budgies are highly social animals and suffer psychologically when kept alone. A bonded pair of budgies is far happier than a solo bird. If you want a talking budgie, keep a single male with very intensive daily interaction - but be honest about the time commitment this requires.`,
      diet: `A high-quality small parrot pellet (Harrison's Fine, Roudybush, or Lafeber's Nutriberries) should make up 60 to 70% of a budgie's diet. Seed-only diets are nutritionally deficient - they are high in fat and carbohydrates and lack essential vitamins, minerals, and amino acids. Budgies fed seed exclusively develop fatty liver disease, nutritional deficiencies, and shortened lifespans.

Supplement daily with fresh vegetables: broccoli florets, carrot strips, leafy greens (kale, spinach, dandelion), bell pepper, and cucumber. Introduce new vegetables gradually. Many budgies initially refuse new foods - persistence and offering the same food repeatedly over days or weeks usually succeeds. Offer the same foods you eat alongside them to encourage trying new things.

Millet sprays are the equivalent of candy - budgies love them but they are very high in fat and should be offered as treats only (a small piece 2 to 3 times per week maximum). Fruit can be offered in tiny amounts. Fresh water changed daily is essential.

Iodine deficiency (causing goiter - thyroid enlargement) is common in seed-fed budgies. Pellets prevent this. If feeding seeds, provide a cuttlebone and a mineral block which provide trace minerals including iodine.`,
      enrichment: `Budgies are playful, curious birds that thrive with an abundance of toys and daily interaction. Rotate toys regularly to maintain novelty - a toy ignored for a week often becomes fascinating again when reintroduced after a break. Provide swings, ladders, bells, foraging toys (pellets hidden in a puzzle feeder or wrapped in paper), shreddable toys (paper strips, palm fronds, thin cardboard), and mirrors if kept solo.

Daily supervised out-of-cage time in a bird-safe room is important. Bird-proof the room: remove or cover mirrors (birds fly into them), ensure ceiling fans are off, cover windows with sheer curtains, remove toxic plants, and secure all open water sources. Let the budgie fly freely for 30 to 60 minutes minimum.

Male budgies are more likely to talk and vocalize extensively. With patient, consistent repetition of words and phrases during daily interaction, many males learn words, phrases, and even entire songs. Talking is not guaranteed but more common in single males who bond closely with their keeper.

Budgies benefit enormously from having a companion budgie. Two budgies together play, preen each other, communicate constantly, and are dramatically more active and engaged than solo birds. If you plan to keep a single budgie, plan to spend several hours per day actively interacting.`,
      health: `Respiratory infections are common in budgies and can progress quickly. Signs include sneezing, nasal discharge, tail bobbing with each breath (a sign of labored breathing), fluffed feathers, and voice changes. Any budgie showing labored breathing requires immediate veterinary attention. Respiratory infections are serious and respond poorly to delays in treatment.

Scaly face mites (Knemidocoptes pilae) cause crusty, porous growths on the beak, cere (the fleshy area above the beak), and sometimes feet. The mites are treated with an antiparasitic medication prescribed by an avian vet. They spread between birds and should be treated promptly.

Psittacosis (Chlamydiosis, parrot fever) is a bacterial infection transmissible to humans. Signs in budgies include lethargy, nasal discharge, eye discharge, and weight loss. It is treatable with antibiotics. Any new budgie should be tested for psittacosis or treated prophylactically.

Obesity from seed-heavy diets leads to fatty liver disease (hepatic lipidosis), which causes lethargy, labored breathing, and abdominal distension. A pellet-based diet with limited seeds prevents this. Annual avian veterinary wellness checks are strongly recommended.`,
      checklist: [
        "Minimum 18x18x24\" cage (larger preferred)",
        "High-quality budgie pellets or seed mix",
        "Fresh vegetables (broccoli, carrots, greens)",
        "Multiple perches of different diameters",
        "Swings, ladders, and foraging toys",
        "Millet sprays for treats",
        "Shower or misting bottle",
        "Safe shreddable toys (paper, cardboard)",
        "Nail clippers",
        "Avian veterinarian contact"
      ],
    },
    faqs: [
      { q: "Can budgies learn to talk?", a: "Yes, many can - males are significantly more likely to learn words and phrases than females. The Guinness World Record for most words learned by a bird belongs to a budgie: Puck, who knew 1,728 words. A single male budgie bonded closely to one person and kept in a relatively quiet environment with consistent repetition of words is the setup most likely to produce a talking bird. Talking is never guaranteed, but males in stimulating environments frequently learn their owner's names, phrases, and full sentences over time." },
      { q: "How long do budgies live?", a: "7 to 12 years with proper care - a lifespan commonly cut short by seed-only diets, which cause fatty liver disease, nutritional deficiencies, and immune suppression. Wild budgies are not adapted to eat seeds as their primary food; seeds are a dry-season fallback, not a dietary staple. Pellet-based diets with daily vegetables are directly linked to longer, healthier lifespans. An avian veterinary wellness check every 1 to 2 years catches common problems early." },
      { q: "Do budgies need a companion?", a: "They are far happier with one. Budgies are highly social flock animals - a bonded pair will preen each other, communicate constantly, sleep together, and show significantly more active and engaged behavior than a solo bird. A single budgie is not necessarily miserable, but requires several hours of intensive daily human interaction as a substitute for a flock companion. If you can't provide that reliably, a bonded pair of budgies is the far better choice for the bird's wellbeing." },
      { q: "What is the best diet for a budgie?", a: "60 to 70% high-quality small parrot pellets (Harrison's Fine, Roudybush, or Lafeber's Nutriberries), supplemented with daily fresh vegetables. Seed mix should be no more than 10 to 20% of the diet, offered in foraging toys rather than open dishes. Millet spray is a high-fat treat to be limited to small amounts 2 to 3 times per week. A cuttlebone provides calcium and trace minerals. The most important dietary change for most budgies is reducing seed and adding pellets - this single step dramatically improves health outcomes." },
      { q: "Are budgies as easy as they are marketed?", a: "They are one of the simpler birds to keep, but are frequently sold as minimal-care starter pets when the reality is more involved. A properly cared-for budgie needs a cage larger than typical starter cages (18x18x24 inches minimum), daily fresh vegetables, regular out-of-cage time in a bird-proofed space, an avian vet relationship, and either a companion bird or several hours of human interaction per day. Within those parameters, they are genuinely manageable and rewarding for first-time bird owners." },
    ],
  },
  {
    id: "canary",
    name: "Canary",
    emoji: "🐦",
    difficulty: "Beginner",
    petType: "Birds",
    image: "/assets/guides/canary.jpg",
    tagline: "The classic singing songbird that's happiest observed, not handled!",
    funFact: "Only male canaries sing (with rare exceptions), and their song is directly tied to testosterone and daylight length. Centuries of selective breeding have produced distinct song 'breeds,' like the Roller canary, bred specifically for the complexity, tone, and softness of its song rather than for appearance.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "Flight cage (24-30 in wide)", low: 60, high: 120 },
        { item: "Perches of varied diameters", low: 15, high: 25 },
        { item: "Shallow bath dish", low: 8, high: 15 },
        { item: "Cuttlebone or mineral block", low: 5, high: 10 },
      ],
      annual: [
        { item: "Seed mix or pellets", low: 50, high: 80 },
        { item: "Fresh greens and vegetables", low: 50, high: 90 },
        { item: "Egg food (molting/breeding season)", low: 15, high: 25 },
        { item: "Annual avian vet check", low: 40, high: 70 },
      ],
    },
    sections: {
      housing: "A flight cage at least 24 to 30 inches wide is far better than a typical small cage, since canaries are active fliers that need horizontal space more than height. Provide multiple natural perches of varying diameter positioned so the bird can fly lengthwise across the cage. Position away from drafts, kitchen fumes (which are lethal to birds), and direct sun. Canaries do best kept singly or in a compatible pair - males housed together, especially during breeding season, will often fight. Cover the cage at night to provide a consistent 10 to 12 hours of uninterrupted darkness for sleep.",
      diet: "A high-quality canary or finch seed mix can form a base, but a pelleted diet or seed heavily supplemented with fresh greens (dandelion, spinach, chickweed) and vegetables closes the nutritional gaps that come with a seed-only diet. Egg food - hard-boiled egg mixed with bread or a commercial egg food supplement - provides valuable protein, especially important during molting and breeding season. A cuttlebone or mineral block supplies calcium and trace minerals. Provide fresh water daily.",
      enrichment: "Canaries are primarily an observation and listening bird rather than a hands-on interactive pet - most do not enjoy handling and are happiest simply watched and listened to. Provide a shallow bath dish, since canaries bathe enthusiastically and regularly. Natural light exposure supports healthy singing behavior and normal molt cycles. Swings and simple toys add modest enrichment, though canaries are far less toy-driven than parrots. A stable, calm, consistent daily routine matters more to their wellbeing than direct interaction ever will.",
      health: "Mites, including scaly-leg mites, cause crusty growths on the legs and beak and are treatable with an avian-specific antiparasitic. Respiratory infections show as tail-bobbing with each breath, labored breathing, and fluffed feathers, and require urgent veterinary attention. Obesity from seed-heavy diets is common and preventable with a more balanced diet. Egg-binding can occur in females even without a male present, since a single hen can still lay infertile eggs - watch for straining, fluffed and lethargic behavior, and seek veterinary care immediately if suspected. Annual avian veterinary checkups are recommended.",
      checklist: [
        "Flight cage at least 24-30 inches wide",
        "Multiple perches of varying diameter",
        "High-quality seed mix or pellets",
        "Fresh greens and vegetables daily",
        "Egg food during molting/breeding season",
        "Cuttlebone or mineral block",
        "Shallow bath dish",
        "Cage cover for nighttime darkness",
        "Avian veterinarian contact",
      ],
    },
    faqs: [
      { q: "Do canaries need a companion?", a: "Not necessarily. Unlike flock parrots, many canaries thrive alone and are actually calmer and sing more without competition from another male in the room. A compatible pair can work, but males housed together frequently fight, especially during breeding season." },
      { q: "Why won't my canary sing?", a: "A few possibilities: it may be a hen rather than a male (only males typically sing), it may be going through a molt (birds sing far less during this period), or it could simply be an individual quirk, since not every male canary sings constantly. Stress or illness can also suppress singing, so rule those out if the change is sudden." },
      { q: "Can canaries be handled?", a: "Generally, no. Canaries are an observation bird that stresses easily with handling, and most are content simply being watched and listened to rather than physically interacted with." },
      { q: "What do canaries eat?", a: "A quality seed mix or pellet diet as a base, with daily fresh greens and vegetables to fill nutritional gaps, plus egg food during breeding and molting season for extra protein." },
      { q: "How long do canaries live?", a: "8 to 10 years is typical, with some canaries reaching 12 to 15 years under excellent care." },
    ],
  },
  {
    id: "cockatiel",
    name: "Cockatiel",
    emoji: "🦜",
    difficulty: "Beginner",
    petType: "Birds",
    image: "/assets/guides/cockatiel.jpg",
    tagline: "The whistling, crested charmer that's the perfect first parrot!",
    funFact: "Cockatiels are masters of mimicry. Males especially love to learn whistled tunes and will serenade you (and any reflective surface) for hours. Many can even learn short phrases!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x30 in cage (larger preferred)", low: 80, high: 160 },
        { item: "Perches of varied diameters", low: 20, high: 35 },
        { item: "Nightlight (prevents night frights)", low: 10, high: 15 },
        { item: "Cuttlebone and mineral block", low: 5, high: 10 },
        { item: "Foraging and shreddable toys", low: 20, high: 40 },
      ],
      annual: [
        { item: "Cockatiel pellets", low: 70, high: 110 },
        { item: "Fresh vegetables", low: 80, high: 130 },
        { item: "Toys (rotating)", low: 40, high: 70 },
        { item: "Annual avian vet check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `A minimum cage of 24x24x30 inches is required for a cockatiel, though 30x24x36 inches or larger is strongly preferred. Cockatiels are active climbers and benefit from vertical space. Bar spacing of 1/2 to 3/4 inch is appropriate - never wider, which risks head entrapment.

Position the cage at eye level, against a wall (for psychological security), away from the kitchen, drafts, and direct sunlight. Kitchen fumes - particularly from overheated non-stick (PTFE/Teflon) cookware - are instantly lethal to all birds. Cooking with non-stick in a home with birds requires replacing non-stick with stainless steel or cast iron.

Provide a variety of perch types and diameters (1/2 to 3/4 inch): natural wood (manzanita, dragonwood, natural branch), rope, and a cement perch for nail maintenance. Varying perch diameter prevents the foot fatigue and pressure sores that occur when birds grip the same diameter all day. Offer a swing - cockatiels frequently sleep on swings.

A nightlight in the bird's room is strongly recommended to prevent night frights (sudden terrified thrashing in complete darkness that can cause injuries). A sleep cage in a quiet room with a consistent 10 to 12 hour dark period supports healthy sleep and hormonal regulation.`,
      diet: `High-quality cockatiel pellets (Harrison's Fine, Roudybush, or Lafeber's Nutriberries) should constitute 60 to 70% of a cockatiel's diet. Seed-only diets cause fatty liver disease, vitamin A and D deficiency, and significantly shortened lifespan. The pellet transition from seeds is often a weeks-long process - mix pellets gradually into seed while monitoring weight, and offer both in separate dishes initially.

Fresh vegetables should be offered daily: leafy greens (kale, chard, romaine, dandelion), broccoli, carrots, bell peppers, cooked sweet potato, and snap peas. Rotate variety to provide diverse micronutrients. Many cockatiels initially refuse vegetables - offer consistently, with persistence, alongside their regular food. Eating alongside the bird and pretending to eat the same vegetables often encourages them to try.

Seed mix in small amounts (about 1 teaspoon per day) can serve as enrichment offered in a foraging toy rather than in a dish. Millet spray is a high-value treat to be used sparingly. Provide a cuttlebone and mineral block at all times for calcium and trace minerals - especially important for females who can develop egg-binding without adequate calcium.

Fresh water changed daily (cockatiels frequently bathe in their water dish, contaminating it quickly). A separate shallow bathing dish offered several times per week is appreciated.`,
      enrichment: `Cockatiels are social, affectionate, and highly communicative birds that need meaningful daily interaction. Plan for a minimum of 2 hours of supervised out-of-cage time in a bird-safe room. A cockatiel that is cage-confined all day will become stressed, loud, and eventually develop behavioral problems or feather destructive behavior.

Male cockatiels are natural musicians - they learn and endlessly perform whistled tunes and songs. Whistling with your cockatiel, playing music, and teaching simple songs are among the most rewarding interactions with this species. Many males also learn phrases and words, particularly in quiet environments where they bond closely with one person.

Provide foraging toys, shreddable toys (paper, palm leaf, soft wood), bells, swings, and a mirror if the bird is kept alone (mirrors provide company but prevent bonding with humans in some individuals). Rotate toys weekly to maintain novelty.

Cockatiels do best with a companion - either another cockatiel or a very attentive human who provides several hours of interaction daily. Solitary cockatiels that receive inadequate social contact develop chronic stress that manifests as excessive screaming, feather problems, and illness.`,
      health: `Night frights are a distinctive cockatiel health concern: a nocturnal disturbance (a car headlight sweeping across the wall, a loud noise, a moth bumping against the window) causes sudden terrified thrashing and wing-beating in the dark. The bird can injure itself severely on cage bars, perches, and toys. A nightlight prevents night frights by ensuring the bird can orient itself if startled. A calm owner response - quietly turning on a light and speaking soothingly - helps the bird settle.

Respiratory infections present as tail bobbing with each breath, labored breathing, nasal discharge, voice changes, and lethargy. Any difficulty breathing is an avian emergency - birds deteriorate rapidly when respiratory function is compromised. Seek veterinary care the same day.

Egg binding (a retained, stuck, or abnormally positioned egg) is an emergency in female cockatiels. Chronic egg laying exhausts the female's calcium reserves and can cause severe metabolic depletion. Minimize hormonal triggers: 10 to 12 hours of darkness per night, limit handling of the lower back and vent area, remove nesting materials, and do not provide enclosed hiding spaces. A cuttlebone and mineral block provide calcium to support egg shell formation when laying does occur.

Feather destructive behavior and chronic screaming indicate inadequate enrichment, social needs, or medical problems. Annual avian veterinary exams are essential. Cockatiels can live 15 to 25 years with excellent care - this is a genuine long-term commitment.`,
      checklist: [
        "Minimum 24x24x30\" cage (larger preferred)",
        "High-quality cockatiel pellets (Harrison's or Roudybush)",
        "Fresh vegetables and limited fruit daily",
        "Variety of natural wood and rope perches",
        "Cuttlebone and mineral block",
        "Foraging toys and shreddable toys",
        "Nightlight (to prevent night frights)",
        "Misting bottle or shower perch for bathing",
        "Sleep cover or sleep cage",
        "Avian veterinarian experienced with parrots",
      ],
    },
    faqs: [
      { q: "Do cockatiels talk or just whistle?", a: "Males are more whistlers than talkers, and many never speak a clear word - but what they do instead is extraordinary. Male cockatiels learn and endlessly perform complex whistled tunes, songs, and melodic phrases with remarkable fidelity. Females very rarely talk or whistle to any significant degree. Males in households where they hear consistent speech can learn words and phrases, particularly if kept as a single bird bonded to one person. The 'Happy Birthday' melody and the Andy Griffith Show theme are infamous for becoming permanent fixtures in many cockatiel households." },
      { q: "What are night frights in cockatiels?", a: "Night frights are a distinctive cockatiel behavior where a sudden disturbance in darkness - a car headlight sweeping across the wall, a loud noise, a moth hitting the window - triggers terrified, violent thrashing and wing-beating inside the cage. The bird can seriously injure itself on cage bars, perches, and toys. Cockatiels are significantly more prone to this than most parrots. Prevention: a nightlight in the bird's room eliminates the problem almost entirely. Response: calmly turn on a light and speak soothingly until the bird settles." },
      { q: "How long do cockatiels live?", a: "15 to 25 years with excellent care - a lifespan frequently shortened by seed-only diets, respiratory infections, and untreated illness that could have been caught at an annual avian vet exam. Many cockatiels bought as children's starter pets outlive the child's time at home. This is a legitimate long-term commitment. Establishing an avian veterinary relationship, converting to a pellet-based diet, and committing to the bird's social needs for its entire life are the foundational requirements for a long-lived cockatiel." },
      { q: "Do cockatiels need a companion?", a: "They benefit significantly from companionship. A bonded pair of cockatiels preens each other, communicates constantly, and shows far greater engagement and activity than a solo bird. A solo cockatiel that receives insufficient daily human interaction develops chronic stress: excessive screaming, feather problems, and immune suppression. The minimum for a solo cockatiel is 2+ hours of direct daily interaction. If your schedule is unpredictable, a bonded pair of cockatiels is the more humane choice." },
      { q: "What should I do if my female cockatiel keeps laying eggs?", a: "Chronic egg laying is medically serious. Each egg depletes significant calcium reserves, and birds that lay repeatedly without adequate calcium develop metabolic bone disease, muscle weakness, and are at risk of egg binding - a life-threatening emergency. To reduce laying: provide 14 to 16 hours of darkness per night, avoid handling the lower back and vent area (this is a mating trigger), remove all nesting materials and enclosed hiding spaces, and keep a cuttlebone and mineral block available at all times. Consult an avian vet if laying is frequent and persistent." },
    ],
  },
  {
    id: "cockatoo",
    name: "Cockatoo",
    emoji: "🦜",
    difficulty: "Advanced",
    petType: "Birds",
    image: "/assets/guides/cockatoo.jpg",
    tagline: "The affectionate, screaming, decades-long commitment of a parrot that bonds almost too well!",
    funFact: "Cockatoos are considered the most affection-dependent parrots in aviculture. In the wild they maintain near-constant physical contact with their flock and mate, and a captive cockatoo often expects the same level of contact from its owner - which is exactly why the species has one of the highest rates of severe feather-plucking and behavioral problems of any commonly kept parrot when that need isn't met.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "3x2x4 ft heavy-gauge cage with locks", low: 500, high: 1200 },
        { item: "Destructible wood chew toys (initial supply)", low: 60, high: 120 },
        { item: "Foraging toys", low: 50, high: 100 },
        { item: "Cage-specific padlocks", low: 15, high: 30 },
      ],
      annual: [
        { item: "Large parrot pellets", low: 200, high: 350 },
        { item: "Fresh vegetables, fruit, and nuts", low: 200, high: 350 },
        { item: "Toys (rotating, heavy destruction rate)", low: 150, high: 300 },
        { item: "Annual avian vet exam + bloodwork", low: 150, high: 300 },
      ],
    },
    sections: {
      housing: "Provide the largest cage that can reasonably fit in your home - a minimum of 3x2x4 feet, with larger strongly preferred, since cockatoos are large, powerful birds that need real room to climb, stretch, and flap. Cage bars must be heavy-gauge metal, since cockatoos have immensely strong beaks capable of bending weaker cages or working open standard latches; many owners add cage-specific padlocks for this reason. Position the cage in a social area of the home, since isolation is especially damaging to this species. Keep a constant supply of destructible wood toys available, since chewing is a critical behavioral outlet and supports beak health.",
      diet: "A high-quality large parrot pellet should form 60 to 70% of the diet, supplemented daily with fresh vegetables, fruit, and a rotating variety of nuts (almonds and in-shell walnuts are excellent for foraging and enrichment). Seed-only diets cause the same fatty liver disease and nutritional deficiencies seen in smaller parrots, at greater scale given a cockatoo's size and long lifespan. Foraging-based feeding - food hidden in puzzle toys or wrapped in paper - is strongly recommended, both for nutritional enrichment and to occupy a bird that's otherwise prone to problem behaviors out of sheer boredom.",
      enrichment: "This is the single most important factor in a cockatoo's long-term wellbeing. Cockatoos require hours of daily direct interaction and are widely considered unsuitable for owners who are away from home for long stretches without a plan for companionship. Without adequate attention, cockatoos are highly prone to feather-destructive behavior, self-mutilation, excessive screaming, and severe anxiety. Provide a large, rotating supply of destructible wood and foraging toys, daily supervised out-of-cage time, and consistent physical affection - most cockatoos crave cuddling and close physical contact more than almost any other parrot. A realistic, honest assessment of available daily time is essential before acquiring this species.",
      health: "Feather-destructive behavior (plucking and self-mutilation) is extremely common in captive cockatoos and is very often behavioral or psychological - insufficient attention, boredom, or anxiety - rather than purely medical, though a vet should always rule out underlying illness or nutritional causes first. Screaming is a natural cockatoo vocalization but becomes excessive and distressing for the household when the bird's social needs aren't being met. Psittacine beak and feather disease (PBFD) is a serious viral concern in parrots, and screening new birds is recommended. Cockatoos can live 40 to 60 years or more, meaning many owners need a long-term care plan since the bird may well outlive them. Annual avian veterinary checkups are essential.",
      checklist: [
        "Large cage (3x2x4 ft minimum, heavy-gauge bars with secure locks)",
        "High-quality large parrot pellets",
        "Fresh vegetables, fruit, and nuts daily",
        "Foraging toys",
        "Constant supply of destructible wood chew toys",
        "Hours of daily direct interaction",
        "Social placement within the home",
        "Cage-specific padlocks",
        "Avian veterinarian contact",
        "A realistic long-term care plan (40-60+ year lifespan)",
      ],
    },
    faqs: [
      { q: "Are cockatoos good pets?", a: "They can be deeply affectionate and rewarding companions, but they're widely regarded as one of the most demanding parrots to keep responsibly. They need hours of daily interaction, are prone to severe behavioral problems like screaming and feather plucking without it, and can live 40 to 60+ years - meaning the commitment often outlasts an owner's active caregiving years. They aren't recommended for first-time bird owners or households that can't offer near-daily direct attention." },
      { q: "Why do cockatoos scream?", a: "Screaming is a natural, far-carrying flock-contact call used in the wild to locate other flock members. In captivity, it becomes excessive when a cockatoo's social and attention needs aren't being met, or as a learned behavior if screaming reliably gets a reaction from the owner." },
      { q: "Why is my cockatoo plucking its feathers?", a: "Feather-destructive behavior is very often linked to insufficient social interaction, boredom, or anxiety, though a vet should always rule out underlying medical or nutritional causes first. It's one of the most common and serious welfare issues in captive cockatoos and is far easier to prevent than to reverse once it becomes established." },
      { q: "How long do cockatoos live?", a: "40 to 60 years is typical, with some individuals living even longer. This exceptionally long lifespan means most people who acquire a cockatoo need a realistic plan for its care well into the future, potentially including rehoming arrangements later in life." },
      { q: "How much attention do cockatoos need?", a: "More than almost any other commonly kept parrot. Cockatoos evolved to maintain near-constant physical contact with their flock, and captive birds often expect the same level of attention from their owner. Hours of daily direct interaction are typically necessary to prevent serious behavioral problems." },
    ],
  },
  {
    id: "conure",
    name: "Green Cheek Conure",
    emoji: "🦜",
    difficulty: "Intermediate",
    petType: "Birds",
    image: "/assets/guides/conure.jpg",
    tagline: "The clownish, cuddly little conure that never stops entertaining!",
    funFact: "Green cheek conures are notorious for learning to hang upside down, play dead, and roll over on command. They're often called the 'class clown' of the parrot world and learn tricks faster than almost any other small parrot!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x30 in+ cage (larger preferred)", low: 100, high: 180 },
        { item: "Perches of varied diameters", low: 20, high: 40 },
        { item: "Foraging and shreddable toys", low: 30, high: 60 },
        { item: "Snuggle pouch or bird tent", low: 10, high: 20 },
      ],
      annual: [
        { item: "Small parrot pellets", low: 80, high: 120 },
        { item: "Fresh vegetables and limited fruit", low: 80, high: 140 },
        { item: "Toys (rotating)", low: 50, high: 90 },
        { item: "Annual avian vet check", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `A minimum cage of 24x24x30 inches is required for a green cheek conure, though 24x24x36 inches or larger is strongly preferred. Green cheeks are active and athletic birds that need room to climb, swing, and flap. Bar spacing of 1/2 to 3/4 inch prevents head entrapment. Stainless steel or powder-coated wrought iron cages from reputable manufacturers are the safest options.

Position the cage at eye level against a wall, away from the kitchen (cooking fumes are lethal to birds), drafts, and direct sunlight. Conures feel most secure when perched at human eye level with a stable background. Avoid positioning the cage where foot traffic passes on all sides - birds feel exposed and stressed when movement surrounds them from every direction.

Provide multiple perches of varying diameters (3/8 to 3/4 inch): natural wood perches in various sizes, a rope perch for foot exercise, and a cement perch for nail maintenance. A swing, ladders, and elevated platforms make the cage more enriching. At least one perch near the top provides the high-elevation security birds naturally prefer.

Cover at night with a breathable cage cover and ensure 10 to 12 hours of darkness. Green cheeks are less prone to night frights than cockatiels but still benefit from consistent darkness for hormonal health and proper sleep. A covered sleep cage in a quiet, dark room is ideal.`,
      diet: `High-quality small parrot pellets (Harrison's Fine, Roudybush Maintenance, or Lafeber's Nutriberries) should constitute 60 to 70% of a green cheek conure's nutritional intake. Seed-only diets cause the same pattern of nutritional deficiency seen in all parrots: fatty liver, vitamin A and D deficiency, immune suppression, and significantly shortened lifespan. Pellet transition from seeds typically takes weeks of patient gradual mixing.

Fresh vegetables should be offered daily: dark leafy greens (kale, chard, romaine, dandelion), bell peppers (excellent Vitamin A source), broccoli, carrot, cooked sweet potato, and snap peas. Varied daily vegetable offerings provide comprehensive micronutrients. Many green cheeks are adventurous eaters - introduce new foods consistently and they usually adapt.

Fruit in small quantities (a few blueberries, a slice of apple or mango) can be offered as enrichment treats. Seed mix in small amounts can be used in foraging toys rather than fed from an open dish. Strictly avoid avocado, chocolate, caffeine, onion, garlic, and xylitol. Fresh water changed daily (or twice daily if the bird bathes in it).`,
      enrichment: `Green cheek conures are often described as the "apartment parrot" - quieter than most conure species, intensely affectionate, and highly playful. They earn the nickname "class clown" for their habit of hanging upside down, playing dead, rolling over, and generally making a spectacle of themselves. This playful intelligence requires significant daily enrichment.

Provide a rotating selection of foraging toys, shreddable toys (palm leaf mats, paper, thin wood pieces, cork), trick training props, and a snuggle pouch or bird tent for the green cheek's characteristic love of burrowing and cuddling. Green cheeks adore being under clothing, snuggled against a warm neck, or tucked in a shirt pocket.

Minimum 2 to 3 hours of supervised out-of-cage time daily in a bird-safe space is required. Green cheeks bond intensely to their primary human and will seek out contact, follow you from room to room, and vocalize to maintain contact with you. This relationship is deeply rewarding but requires consistent daily availability.

Green cheeks are highly trainable using positive reinforcement. Target training (touching a target stick for a food reward), step-up training, and trick training (wave, spin, turn around, lie down) are all achievable with this intelligent species and provide excellent daily mental stimulation.`,
      health: `Feather destructive behavior (FDB) - plucking or barbering feathers - is the most visible sign of chronic psychological distress in green cheek conures. It ranges from over-preening to complete removal of contour feathers. Causes include boredom, inadequate social contact, dietary deficiency, hormonal imbalance, infections, and allergies. Identifying the underlying cause requires veterinary and behavioral assessment. Prevention through adequate enrichment and social interaction is the best approach.

Respiratory infections progress rapidly in birds. Signs include breathing with the tail visibly bobbing, nasal discharge, fluffed feathers, voice changes, and lethargy. Birds mask illness as an evolutionary defense mechanism - by the time symptoms are visible, the bird is usually significantly compromised. Seek avian veterinary care the day symptoms appear.

Proventricular Dilatation Disease (PDD) - also called Avian Bornavirus disease - is a neurological disease that affects the nerves of the digestive tract, causing the proventriculus (stomach) to dilate and preventing normal digestion. Signs include weight loss, regurgitation, and neurological symptoms. It is caused by Avian Bornavirus (ABV), which can spread between birds. There is no cure, but supportive management can extend quality life.

Annual avian veterinary wellness examinations are essential. Green cheek conures can live 15 to 25 years - a long-term commitment that requires a consistent relationship with an avian veterinarian.`,
      checklist: [
        "24x24x30\"+ cage (larger preferred)",
        "High-quality small parrot pellets",
        "Fresh vegetables daily (greens, peppers, broccoli)",
        "Variety of perches (natural wood, rope, different diameters)",
        "Foraging toys and shreddable toys",
        "Trick training props (target stick, cups)",
        "Snuggle pouch or bird tent",
        "Misting bottle or shower perch for bathing",
        "Night cover (10 to 12 hours darkness)",
        "Avian veterinarian experienced with conures",
      ],
    },
    faqs: [
      { q: "Are green cheek conures noisy?", a: "They are among the quietest of all conure species - which is why they are often called the 'apartment parrot.' That said, quiet is relative: green cheeks still have contact calls, alarm vocalizations, and excited chatter that can be heard across a room. They are not the piercing, apartment-wall-penetrating screaming of sun conures or nanday conures. For someone weighing noise level as a factor, green cheeks are a genuinely good middle ground: small-parrot personality without small-parrot silence." },
      { q: "Can green cheek conures learn tricks and talk?", a: "They are exceptional trick learners - target training, wave, spin, roll over, play dead, and retrieving small objects are all achievable with consistent positive reinforcement training. Many green cheeks also learn a small vocabulary of words and phrases, though their speech is less clear and their vocabulary smaller than budgies or cockatiels. If talking is the primary goal, a budgie is a more reliable choice. If trainability and interactive play are the goal, green cheeks are excellent." },
      { q: "How long do green cheek conures live?", a: "15 to 25 years with excellent care - a lifespan that far exceeds what many keepers expect when they first encounter this relatively small bird. The full lifespan requires high-quality nutrition (pellet-based diet, daily vegetables), regular avian veterinary care, adequate daily enrichment, and consistent social interaction with their primary human. Green cheeks form intense bonds with their person; birds that are neglected or rehomed multiple times often have significantly shortened lifespans from chronic stress." },
      { q: "Are green cheek conures suitable for first-time bird owners?", a: "They're a reasonable step up from cockatiels and budgies but are more demanding than either. Green cheeks need a minimum of 2 to 3 hours of direct daily interaction, comprehensive bird-proofing for free-roam time, a pellet-based diet, and an avian veterinary relationship. Someone with no bird experience who genuinely commits to these requirements can keep a green cheek successfully. Someone expecting a low-maintenance pet will struggle. Previous bird experience or serious prior research makes the transition significantly smoother." },
      { q: "Are green cheek conures affectionate?", a: "Extremely - this is their defining characteristic. Green cheeks seek physical contact constantly: burrowing under collars, riding inside shirt pockets, pressing against a warm neck, and demanding to be held during any quiet activity. They bond so intensely to their primary human that some green cheeks become jealous of attention given to other people, other pets, or even devices. Snuggle pouches (small fabric tents attached to cage or stand) are popular because green cheeks will choose to hang out inside them for hours." },
    ],
  },
  {
    id: "lovebird",
    name: "Lovebird",
    emoji: "❤️",
    difficulty: "Intermediate",
    petType: "Birds",
    image: "/assets/guides/lovebird.jpg",
    tagline: "The feisty, affectionate little parrot that bonds deeply with its person!",
    funFact: "Lovebirds mate for life in the wild and are famous for their strong pair bonds. They even feed each other and sit side-by-side for hours! This is where they got their name.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x24 in+ cage (larger preferred)", low: 80, high: 150 },
        { item: "Perches and swings", low: 20, high: 35 },
        { item: "Shreddable toys", low: 20, high: 40 },
        { item: "Sleep tent", low: 10, high: 20 },
      ],
      annual: [
        { item: "Small parrot pellets", low: 70, high: 110 },
        { item: "Fresh vegetables", low: 80, high: 130 },
        { item: "Toys (rotating)", low: 40, high: 70 },
        { item: "Annual avian vet check + psittacosis testing", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `Lovebirds are small but intensely active and need more cage space than their size implies. A minimum of 24x24x24 inches is required, though 30x24x30 inches or larger is preferred. Bar spacing of 1/2 inch is appropriate. Lovebirds are powerful chewers - cage bars should be thick enough to resist their strong beaks, and any cage with powder coating should be confirmed non-toxic.

Provide multiple perches at different heights and diameters (1/2 to 3/4 inch), swings, and a variety of toys. Natural wood perches are preferred over dowels for foot health. Position the cage at eye level, away from the kitchen, drafts, and direct sunlight. Lovebirds are highly alert and feel most secure when positioned at human eye level with a wall behind the cage.

Provide a sleep area - many lovebirds prefer a small sleeping tent or covered corner for nighttime, and benefit from 10 to 12 hours of covered darkness. Some lovebirds will enthusiastically shred fabric, so inspect sleeping tents regularly for loose threads.

Lovebirds are highly social within their species. A bonded pair of lovebirds is happier and healthier than a solo bird, and bonded pairs often have less aggressive territorial behavior toward humans. Introducing a second lovebird requires a careful slow-introduction process.`,
      diet: `High-quality small parrot pellets (Harrison's Fine, Roudybush, or Lafeber's Nutriberries) should constitute 60 to 70% of the diet. A seed-only diet causes the same nutritional deficiencies seen in other parrots: fatty liver, vitamin deficiencies, and shortened lifespan. Pellet transition from seeds is often challenging with lovebirds - they are stubborn - but persistence pays off.

Fresh vegetables should be offered daily: bell peppers, leafy greens, broccoli, carrots, cooked sweet potato, and snap peas are all excellent choices. Lovebirds tend to be bolder about trying new foods than some other parrot species. Use the basket trick - weaving vegetables and herbs through the cage bars - to encourage foraging for fresh foods.

Millet is a high-fat treat that lovebirds love intensely. Limit to a small piece 2 to 3 times per week. A seed mix can be offered as enrichment in a foraging toy rather than as the primary food source. Strictly avoid avocado, chocolate, caffeine, onion, garlic, and xylitol. Fresh water changed daily.`,
      enrichment: `Lovebirds are nicknamed the "pocket parrot" - they are intensely bonded, affectionate, and active little birds with large personalities. Enrichment is not optional; without adequate stimulation, lovebirds become cage-bound, hormonal, territorial, and difficult.

Shreddable toys are lovebird favorites: palm leaf mats, paper strips, thin cardboard tubes, and soft wood pieces allow them to display their natural nesting and foraging behaviors. Swings and ladders get heavy use. Provide foraging toys where food is hidden - this is a much more enriching way to offer seeds or pellets than in an open dish.

Daily supervised out-of-cage time of at least 1 to 2 hours in a bird-safe space allows flying, exploring, and interaction with their keeper. Many lovebirds become remarkably affectionate and social with their primary human, seeking contact, playing peekaboo, and vocalizing extensively in response to interaction.

Lovebirds can be territorial with other bird species and with other lovebirds of different sex unless properly bonded. House only with thoroughly bonded partners and never mix lovebirds with other parrot species in the same cage without extensive supervised introductions.`,
      health: `Respiratory infections are common in lovebirds and progress rapidly. Signs include breathing with the tail bobbing, nasal discharge, fluffed feathers, and sitting low on a perch. Seek veterinary care promptly - birds mask illness and by the time symptoms are visible, the bird is usually significantly ill.

Egg binding is a life-threatening emergency in female lovebirds. A hen unable to pass an egg develops rapidly worsening distress, sitting puffed on the cage floor, straining, and visibly distressed. This requires immediate emergency veterinary intervention. Minimize hormonal triggers (long daylight hours, nesting materials, excessive handling of the back) to reduce egg-laying stimulation in female lovebirds.

Psittacosis (Chlamydiosis) is a bacterial infection that can spread to humans. Annual testing or monitoring for this disease is recommended. Any new lovebird should be tested or treated prophylactically.

Obesity from seed-heavy diets causes fatty liver disease in lovebirds just as in other parrots. Annual avian veterinary wellness checks are strongly recommended, particularly blood panels for birds on seed-heavy diets.`,
      checklist: [
        "Minimum 24x24x24\" cage (larger preferred)",
        "High-quality lovebird or small parrot pellets",
        "Fresh vegetables and limited fruit",
        "Multiple perches, swings, and ladders",
        "Lots of shreddable toys (paper, cardboard)",
        "Foraging toys and puzzle feeders",
        "Millet sprays for treats",
        "Safe chew toys (bird-safe wood)",
        "Nail clippers",
        "Avian veterinarian experienced with lovebirds"
      ],
    },
    faqs: [
      { q: "Do lovebirds need to be kept in pairs?", a: "The old myth that a solo lovebird will die of loneliness is not literally true - solo lovebirds can live long healthy lives. However, a solo lovebird requires intensive daily human interaction (several hours of direct engagement) as a substitute for a flock companion. A bonded pair of lovebirds is generally healthier, happier, and easier to keep because the birds meet each other's social needs. If your schedule cannot guarantee consistent daily time with the bird, a bonded pair is the more humane choice." },
      { q: "Can lovebirds learn to talk?", a: "Occasionally, but lovebirds are not known as talkers. Unlike budgies or African greys, speech is rare and the vocabulary stays very small when it does occur. What lovebirds excel at instead is vocalization, contact calling, and developing a strong interactive bond with their keeper. If talking ability is important to you, a budgie or a cockatiel (males) are more reliable choices. Lovebirds compensate with personality, affection, and playfulness." },
      { q: "Do lovebirds bite?", a: "Yes - lovebirds have a strong beak for their size and will use it when frightened, territorial, or over-stimulated. Consistent calm handling from a young age, respecting the bird's signals (fluffing, lunging, eye pinning), and never reaching into the cage when the bird is in a territorial mood significantly reduces biting. Lovebirds that are handled regularly from a young age and bonded to a primary human are generally no worse than any other small parrot, and many are remarkably gentle with their person." },
      { q: "What should lovebirds eat?", a: "60 to 70% of the diet should be high-quality small parrot pellets (Harrison's Fine, Roudybush, or Lafeber's Nutriberries). Fresh vegetables daily - leafy greens, bell peppers, broccoli, carrot, and cooked sweet potato - make up the remainder. Limit seed mix to use as enrichment in foraging toys rather than as a dietary staple. Millet is a high-fat treat to be used sparingly. Seed-only diets cause fatty liver disease, vitamin deficiencies, and significantly shortened lifespan in lovebirds just as in all parrots." },
      { q: "How long do lovebirds live?", a: "10 to 20 years with excellent care - a lifespan that surprises many keepers who assume small birds have short lives. The full 20-year potential requires a pellet-based diet, regular avian veterinary care, adequate enrichment and social contact, and minimizing hormonal stress (particularly in egg-laying females). Lovebirds rehomed in middle age after years of poor nutrition often have reduced lifespans. Starting with proper care from day one makes a measurable difference in long-term health." },
    ],
  },
];
