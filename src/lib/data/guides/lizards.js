export const lizardGuides = [
  {
    id: "ackie-monitor",
    name: "Ackie Monitor",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/ackie-monitor.jpg",
    tagline: "The miniature Komodo dragon with a huge personality!",
    funFact: "Ackie monitors 'taste' the air constantly with their forked tongues, using their Jacobson's organ to detect prey scent, just like their giant Komodo cousins!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "6x3x3 ft+ enclosure", low: 300, high: 600 },
        { item: "Deep substrate (12 in+ sandy soil mix)", low: 80, high: 150 },
        { item: "High-wattage basking bulb + fixture", low: 30, high: 60 },
        { item: "Quality thermostat", low: 40, high: 70 },
        { item: "Strong desert UVB (T5 HO Arcadia Dragon 12%)", low: 70, high: 110 },
        { item: "Infrared thermometer gun", low: 25, high: 40 },
        { item: "Cork bark and rock structures", low: 40, high: 80 },
        { item: "Water dish", low: 10, high: 20 },
      ],
      annual: [
        { item: "Large insect variety", low: 200, high: 350 },
        { item: "Calcium and multivitamin supplements", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (high-wattage basking)", low: 100, high: 180 },
        { item: "Annual vet wellness check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `A 6x3x3 ft enclosure is the minimum for a pair of ackie monitors - and ackies do well and often prefer living in bonded pairs or trios when raised together. Single animals can be kept in slightly smaller spaces but will benefit from the larger footprint for activity and thermal gradient establishment.

The deep substrate is the defining feature of an ackie monitor setup. A minimum of 12 inches of a sandy soil mixture (60% organic topsoil, 40% playsand is a common ratio) must be provided. Ackies are native to the arid rocky outcrops of western and central Australia and spend large portions of their time burrowing to thermoregulate. Burrowing is not optional behavior - it is essential for health and wellbeing.

The basking spot temperature is the most critical parameter: 120 to 150 degrees F at the surface directly under the basking light. This sounds extreme because it is - ackie monitors require these temperatures to fully thermoregulate, activate their immune system, and digest prey efficiently. Without adequate basking temperatures, even an otherwise well-kept ackie will show chronic health problems, poor growth, and reduced lifespan. Use high-wattage halogen or flood bulbs and verify surface temperatures with an infrared temperature gun.

Strong desert UVB (T5 HO Arcadia Dragon 12% or equivalent) on a 10 to 12 hour cycle is mandatory. The cool side of the enclosure should be 80 to 85 degrees F ambient. Humidity in the burrow area (achieved by allowing one section of the substrate to stay slightly more moist than the rest) should be 40 to 60%.`,
      diet: `Ackie monitors are primarily insectivorous in the wild, and their captive diet should reflect this. Large dubia roaches, crickets, superworms, hornworms, and silkworms form the core of a balanced diet. Gut-load all insects 24 to 48 hours before feeding - the nutritional quality of a gut-loaded insect versus an empty one is dramatically different.

Adult ackies can be offered occasional pinky or fuzzy mice as a protein supplement - not as a staple. Whole prey items offer nutritional completeness when used judiciously. Eggs (quail or scrambled chicken eggs) are another excellent nutritional supplement offered occasionally.

Feed juveniles daily with as many insects as they will actively pursue and eat. Adults eat 3 to 5 times per week. Reduce feeding frequency if the animal is becoming visibly obese (fat deposits around the neck, limbs, and tail base). Dust prey with calcium w/D3 and a reptile multivitamin on a consistent schedule.

Fresh water in a shallow dish must always be available. Many ackies will soak in their water dish, which supports hydration and shedding. Replace the water daily.`,
      enrichment: `The deep substrate is the most important enrichment - ackies spend significant time excavating burrow systems that can extend 12 to 24 inches underground. Providing adequate substrate depth allows this natural behavior. Watching an ackie monitor engineer a complex burrow system is one of the most impressive behaviors in the reptile hobby.

Add rock structures (securely stacked so they cannot topple and crush the monitor), cork bark pieces at the surface for additional hiding and temperature regulation spots, and branches for climbing. Ackies are more terrestrial than truly arboreal but will use low branches and rock edges frequently.

Foraging enrichment dramatically improves quality of life for intelligent monitor lizards. Hide insects in the substrate, under rocks, and inside cork bark. Vary feeding locations. Offer live insects that require pursuit. Ackies in enriched environments with foraging opportunities show dramatically more natural, active behavior than those fed in predictable ways.

Young ackies can be fast and defensive and may bite. Consistent, patient handling from a young age produces remarkably tame animals. Adults often become confident and genuinely interactive, approaching their keepers and exploring hands voluntarily.`,
      health: `Inadequate basking temperature is the most common and most serious husbandry failure in ackie monitors. An ackie that cannot reach 130 to 150 degrees F at the basking surface cannot fully activate its immune system, cannot adequately digest food, and cannot thermoregulate its core body temperature. This leads to chronic immune suppression, poor growth, repeated infections, and a significantly shortened lifespan. Invest in high-quality, high-wattage bulbs and verify temperatures regularly.

Metabolic Bone Disease (MBD) from inadequate UVB or calcium supplementation presents as weak, trembling limbs, rubber jaw, difficulty climbing, and lethargy. Strong UVB and consistent supplementation prevent it.

Parasites - particularly pentastomids (tongue worms) in wild-caught animals - are a significant concern. Source captive-bred animals from reputable breeders whenever possible. Wild-caught ackies frequently carry heavy parasite loads that require veterinary treatment. Annual fecal exams are recommended for all monitors.

Respiratory infections and scale rot can occur if humidity and temperatures are incorrect. Always have a reptile veterinarian with monitor experience identified before acquiring an ackie. These are rewarding but high-maintenance animals that deserve expert veterinary care.`,
      checklist: ["6x3x3 ft+ enclosure", "Deep substrate (12 inch+ sandy soil mix)", "High-wattage basking bulb (120 to 150 degrees F surface)", "Quality thermostat", "Strong desert UVB (T5 HO Arcadia Dragon 12%)", "Digital thermometer (IR gun recommended)", "Calcium w/D3 + multivitamin", "Large insect variety", "Cork bark and rock structures", "Water dish + humid microhabitat area"],
    },
    faqs: [
      { q: "How hot does an ackie monitor's basking spot need to be?", a: "120 to 150 degrees F at the basking surface, measured with an infrared temperature gun. This is the most critical parameter in ackie monitor care and the most commonly failed. Without adequate basking temperatures, ackies cannot fully thermoregulate, digest food, or activate their immune systems - leading to chronic health problems. High-wattage halogen or flood bulbs achieve these temperatures effectively." },
      { q: "Can ackie monitors be kept in pairs or groups?", a: "Yes - ackies often do well and sometimes prefer living in bonded pairs or trios when raised together from a young age. Cohab success depends on having adequate space (6x3x3 ft minimum for a pair), multiple basking sites, and deep substrate for individual burrowing. Monitor for aggression and be prepared to separate if conflict arises." },
      { q: "What do ackie monitors eat?", a: "Primarily insects in captivity: large dubia roaches, crickets, superworms, hornworms, and silkworms are the staples. Adults can have occasional pinky or fuzzy mice as a protein supplement and quail or scrambled eggs periodically. Gut-load all insects 24 to 48 hours before feeding. Feed juveniles daily, adults 3 to 5 times per week." },
      { q: "How big do ackie monitors get?", a: "Adults typically reach 24 to 28 inches total length - significantly smaller than most other monitor species, which is one reason ackies are popular. They are powerfully built for their size, with strong legs, sharp claws, and an active, energetic temperament. Their manageable size combined with their big personality makes them the most popular dwarf monitor in the hobby." },
      { q: "Are ackie monitors good pets?", a: "Yes, for experienced keepers ready for their specific requirements. Ackies are intelligent, active, and become remarkably tame with patient, consistent handling from a young age - many seek out their keepers and explore hands and arms voluntarily. The key commitments are the extreme basking temperatures (verified with an IR gun), deep burrowing substrate, and a diverse insect-heavy diet." },
    ],
  },
  {
    id: "tegu",
    name: "Argentine Black and White Tegu",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/tegu.jpg",
    tagline: "The dog-like mega-lizard that can learn its own name!",
    funFact: "Tegus are one of the only reptiles known to have near-endothermic (warm-blooded) properties. During breeding season, their body temperature rises above ambient temperatures!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Adult housing is often custom-built; setup range reflects that.
    costs: {
      setup: [
        { item: "8x4x4 ft+ custom enclosure or room", low: 500, high: 1200 },
        { item: "High-wattage basking setup", low: 40, high: 70 },
        { item: "Strong desert UVB (T5 HO 12%+)", low: 80, high: 120 },
        { item: "Substrate (4-6 in soil/sand mix)", low: 60, high: 120 },
        { item: "Large water tub for soaking", low: 30, high: 60 },
        { item: "Quality thermostat", low: 40, high: 70 },
      ],
      annual: [
        { item: "Whole prey and varied diet (rats, eggs, protein)", low: 250, high: 450 },
        { item: "Calcium and multivitamin supplements", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 80, high: 120 },
        { item: "Electricity (high-wattage basking)", low: 120, high: 220 },
        { item: "Annual vet wellness check", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `Argentine black and white tegus are among the largest lizards kept as pets and require enclosures that reflect their impressive size. Adults typically reach 3.5 to 4.5 ft for males and 2.5 to 3.5 ft for females, with some males exceeding 5 ft. The minimum enclosure for an adult is 8x4x4 ft, and many dedicated keepers build entire rooms for their tegus - a converted bedroom or large wooden enclosure the size of a garden shed.

A very hot basking spot of 100 to 110 degrees F or higher is required at the surface. Tegus are from the subtropical and tropical regions of South America and require intense heat for digestion and immune function. The ambient warm side should be 85 to 90 degrees F and the cool side 75 to 80 degrees F. Strong desert UVB (T5 HO Arcadia Dragon 12%) is mandatory.

Substrate of 4 to 6 inches minimum is needed for natural burrowing behavior. A 50/50 mix of organic topsoil and play sand works well, as does a commercial reptile bedding mix. Tegus burrow extensively and need substrate they can actually dig into.

Brumation - a winter dormancy period lasting several months - is a natural and necessary part of tegu biology. Beginning in autumn, tegus slow down, stop eating, and eventually become largely inactive. Provide a cool (55 to 65 degrees F), dark brumation space, or allow them to burrow in their enclosure. Do not try to prevent or interrupt brumation; forced wakefulness causes significant health problems.`,
      diet: `Argentine tegus are true omnivores with a wide-ranging diet that changes with age. Juveniles and young adults eat primarily animal protein: whole prey items like appropriately sized rats and chicks, organ meats (heart, liver), lean ground turkey, and eggs. As tegus mature, plant matter becomes an increasingly important part of the diet - mature adults may be 40 to 60% plant-based in the warmer months.

Whole prey items are ideal for the protein component: rats (frozen/thawed), quail eggs, raw whole chicken or turkey pieces, and shrimp provide nutritional variety. Eggs - especially raw scrambled or hard-boiled - are an excellent regular protein source. Avoid exclusively feeding one prey type.

Plant matter includes dark leafy greens (collard, mustard, dandelion greens), squash, berries (in moderation), and seasonal fruits as treats. Do not over-supplement with fruit, which is high in sugar. Supplement all food with calcium w/D3 and a reptile multivitamin on a regular schedule.

Never feed dog or cat food as a staple - the preservatives, artificial additives, and non-nutritional fillers are inappropriate for tegus despite the protein content. Fresh water must always be available in a large tub they can soak in.`,
      enrichment: `Argentine tegus are often described as the most dog-like of all reptiles - and this is not hyperbole. Well-socialized adult tegus recognize their names, come when called, follow their keepers around the house, seek out physical contact, and form genuine bonds over time. They are some of the most cognitively sophisticated reptiles accessible to hobbyists.

Provide supervised free-roaming time daily in a tegu-proofed area. Tegus explore confidently, investigate novel objects with their tongues, and interact with household pets (under supervision) and family members. Puzzle feeders, hiding food in different locations, introducing novel safe objects, and training sessions - where the tegu learns to touch a target stick for food rewards - are all excellent enrichment.

Handling from a young age produces the most socialized adults. Juvenile tegus can be fast and defensive. Consistent calm handling sessions, even short ones, over weeks and months produce remarkable results. Adult tegus that have been consistently handled are generally very calm large animals.

Brumation period enrichment means preparing an appropriate cool, dark space and respecting the natural dormancy. Do not disturb a brumating tegu unnecessarily. Check on the animal briefly every 1 to 2 weeks to confirm it is alive and healthy, and offer water occasionally, but do not force feeding or activity.`,
      health: `Inadequate enclosure size is the most common welfare problem in tegus. A tegu kept in a small enclosure cannot properly thermoregulate, cannot exercise, and cannot express natural behavior - this leads to physical and psychological deterioration. If you cannot provide an 8x4x4 ft or larger adult setup, a tegu is not the right animal for your situation.

Metabolic Bone Disease from inadequate UVB or calcium is less common in tegus than in some other species when husbandry is correct, but still possible. Strong UVB and consistent supplementation prevent it.

Parasites - particularly internal parasites - are common in tegus, especially those sourced from unknown backgrounds or import chains. Annual fecal exams with a reptile vet are recommended. Tegus sourced from reputable captive breeders typically have fewer parasite issues.

These are powerful animals. A tame adult tegu can still cause injury unintentionally - their claws and tail are strong. Approach with confidence, never fear, and never force interactions. A veterinarian with large lizard experience is an essential part of responsible tegu ownership. Annual wellness checks are strongly recommended for all adult tegus.`,
      checklist: ["8x4x4 ft+ custom enclosure or room", "Very hot basking spot (100 to 110 degrees F+)", "Strong desert UVB (T5 HO 12%+)", "4 to 6 inch substrate (soil/sand mix)", "Large water tub for soaking", "Quality thermostat", "Whole prey and varied diet", "Calcium and multivitamin", "Enrichment objects and puzzle feeders", "Brumation space (cool, dark area)"],
    },
    faqs: [
      { q: "Are tegus really like dogs?", a: "In many meaningful ways, yes. Well-socialized tegus recognize and respond to their names, come when called, follow their keepers around, seek physical contact, and form genuine bonds that deepen over years. They are widely regarded as the most dog-like reptile accessible to hobbyists. This intelligence also means they require enrichment, space, and interaction to thrive." },
      { q: "What is brumation and do tegus need it?", a: "Brumation is a natural winter dormancy period lasting 3 to 5 months, typically beginning in autumn. Tegus slow dramatically, stop eating, and become largely inactive. This is normal and essential biology - do not attempt to prevent or interrupt it. Provide a cool (55 to 65 degrees F), dark space for brumation. Forced wakefulness during this period causes significant stress and health problems." },
      { q: "How big do tegus get?", a: "Argentine black and white tegu males typically reach 3.5 to 4.5 feet, with some exceeding 5 feet. Females are 2.5 to 3.5 feet. They are powerfully muscled animals - an adult male tegu is a substantial animal requiring an 8x4x4 ft minimum enclosure, and many experienced keepers convert entire rooms to accommodate them properly." },
      { q: "What do tegus eat?", a: "True omnivores with age-dependent ratios. Juveniles eat primarily animal protein: whole prey (rats, quail, chicks), organ meats, raw eggs, and lean ground turkey. As they mature, plant matter becomes increasingly important - adults may be 40 to 60% plant-based during the warmer months. Eggs are an excellent regular protein source at any age. Avoid dog or cat food as a staple." },
      { q: "How long do tegus live?", a: "15 to 20 years with appropriate care, proper diet, adequate housing, and annual wellness veterinary checks. A tegu is a multi-decade commitment. Their cognitive sophistication and social bonding make them deeply rewarding animals - but only for keepers who can genuinely provide the space, time, and resources their long lives require." },
    ],
  },
  {
    id: "bearded-dragon",
    name: "Bearded Dragon",
    emoji: "🦎",
    difficulty: "Beginner/Intermediate",
    petType: "Lizards",
    image: "/assets/guides/bearded-dragon.jpg",
    tagline: "The chill, cuddly lizard that changes color with its mood!",
    funFact: "Bearded dragons wave at each other as a sign of submission, basically saying 'Hey, you're the boss!'",
    relatedStory: {
      slug: "chronicles-of-dex-the-bearded-dragon-the-sun-the-glass-and-the-cricket-that-got-away",
      title: "Chronicles of Dex: The Sun, the Glass, and the Cricket That Got Away",
    },
    // Rough starting ranges, not verified current pricing - reviewed by
    // Mike before treating these as accurate for readers.
    costs: {
      setup: [
        { item: "4x2x2 ft enclosure (PVC or wood/glass)", low: 200, high: 400 },
        { item: "T5 HO UVB fixture + bulb", low: 60, high: 100 },
        { item: "Basking bulb + fixture", low: 20, high: 40 },
        { item: "Infrared thermometer gun", low: 15, high: 30 },
        { item: "Substrate (tile or reptile carpet)", low: 20, high: 40 },
        { item: "Branches, hides, and decor", low: 30, high: 60 },
        { item: "Food and water dishes", low: 10, high: 20 },
      ],
      annual: [
        { item: "UVB bulb replacement (every 6-12 months)", low: 60, high: 100 },
        { item: "Basking bulb replacement", low: 15, high: 25 },
        { item: "Feeder insects (dubia, BSFL, crickets)", low: 200, high: 400 },
        { item: "Leafy greens and vegetables", low: 150, high: 250 },
        { item: "Calcium and multivitamin supplements", low: 20, high: 30 },
        { item: "Electricity (heat and lighting)", low: 80, high: 150 },
        { item: "Annual vet wellness check", low: 50, high: 100 },
      ],
    },
    sections: {
      housing: `Adult bearded dragons need a minimum 4x2x2 ft enclosure, and larger is always better. Juveniles can start smaller but reach their adult size relatively quickly, so investing in the correct adult enclosure from the start makes practical sense. PVC or wooden enclosures with glass fronts retain heat better than glass tanks and are widely preferred by experienced keepers.

The basking spot is the most critical element of a bearded dragon setup. A surface temperature of 100 to 115 degrees F is required under the basking light - this is not optional. Bearded dragons are ectotherms that need intense heat to digest food properly, support their immune system, and regulate their metabolism. Without an adequate basking spot, food sits undigested and the dragon becomes chronically ill. Measure the basking surface with an infrared temperature gun, not a stick-on thermometer.

A strong full-spectrum desert UVB light is non-negotiable. Use a T5 HO UVB bulb - the Arcadia Dragon 12% or Zoo Med T5 HO Reptisun 10.0 are current industry standards. Bearded dragons need intense UVB for vitamin D3 synthesis and calcium metabolism. Compact or coil UVB bulbs are inadequate. Replace UVB bulbs every 6 to 12 months even if they still appear to emit light, as UV output degrades before visible light does.

Substrate should be easy to clean and safe if accidentally ingested. Reptile carpet, ceramic tile, or paper towels work well for juveniles. Adults can be kept on a sand-soil mix (ReptiSand or a DIY 50/50 topsoil and playsand) if the enclosure is set up correctly and the dragon is well-fed. Loose calcium sand should be avoided entirely.`,
      diet: `Bearded dragons are omnivores with age-dependent dietary requirements. Juveniles (under 12 months) should eat approximately 70 to 80% live insects and 20 to 30% leafy greens and vegetables. As they approach adulthood, the ratio flips: adults thrive on 70 to 80% leafy greens and vegetables with 20 to 30% insects. This shift mirrors their natural dietary habits in the wild.

Staple insect feeders include dubia roaches (the gold standard), black soldier fly larvae (BSFL/CalciWorms), and crickets. Mealworms can be offered occasionally as a treat. Waxworms should be strictly limited - they are extremely high in fat and act like candy. Hornworms are excellent for hydration and variety. Always gut-load insects 24 to 48 hours before feeding, and dust with calcium w/D3 at every juvenile feeding and 3 to 4 times per week for adults.

Staple greens include collard greens, mustard greens, dandelion greens (pesticide-free), turnip greens, and endive. These are nutrient-dense and form the backbone of an adult's vegetable intake. Offer a variety and rotate frequently. Kale and spinach are fine in moderation but should not be the only green. Avoid iceberg lettuce (no nutritional value) and avocado (toxic).

Fresh water in a shallow dish should always be available. Bearded dragons often bathe rather than drink from a dish - a 15-minute warm bath 2 to 3 times per week provides supplemental hydration and helps with shedding. Multivitamin supplementation once per week in addition to calcium is recommended.`,
      enrichment: `Bearded dragons are one of the most interactive and personable reptiles available in the hobby. Many individuals become genuinely tame and seek out interaction with their keepers. Consistent, gentle handling from a young age is the most important factor in producing a calm, social adult.

Provide climbing structures - thick branches, cork bark platforms, and rock formations - that allow the dragon to bask at different heights. A dig box filled with moist coconut fiber or organic topsoil gives them an outlet for their natural digging behavior. Many bearded dragons enjoy supervised free-roam time in a safe, warm room.

Bearded dragons have been observed enjoying watching television, following the movements of animals on screen, and interacting with mirrors. While these are anecdotal, they suggest a cognitive engagement with their environment that is worth supporting. Novel objects, different safe foods offered as enrichment, and changes to the enclosure layout all provide mental stimulation.

Shedding is a natural process that should not require intervention when husbandry is correct. Ensure adequate hydration through bathing during shed periods. Juvenile bearded dragons shed frequently (every few weeks) as they grow rapidly. Adults shed less often. Never peel or force shed off - this damages the underlying skin.`,
      health: `Metabolic Bone Disease (MBD) is the most common serious health problem in bearded dragons and is entirely preventable. It results from inadequate UVB lighting, insufficient calcium supplementation, or both. Early signs include leg trembling, difficulty walking, soft or rubbery jaw, lethargy, and loss of appetite. Advanced MBD causes permanent skeletal deformities. Invest in quality UVB lighting and maintain a consistent supplementation schedule.

Impaction occurs when a bearded dragon ingests substrate material that forms a blockage in the intestinal tract. Loose particulate substrates (especially calcium sand) are the primary cause. Signs include straining to defecate, a hard swollen abdomen, lethargy, and hind leg weakness. Treatment requires veterinary intervention. Using tile, carpet, or paper substrate for juveniles eliminates this risk.

Parasites - particularly pinworms and coccidia - are very common in bearded dragons, including those from reputable breeders. Annual fecal exams are strongly recommended even for apparently healthy animals. Many parasitic infections are subclinical (the dragon appears healthy) but cause chronic stress on the immune system.

Yellow Fungal Disease (CANV, caused by Nannizziopsis guarroi) is a serious and often fatal fungal infection that presents as yellow, discolored, necrotic skin lesions. Any unusual skin lesion warrants immediate veterinary assessment. Adenovirus (Atadenovirus) is a common and poorly understood viral infection that can cause neurological symptoms, failure to thrive, and immunosuppression. Annual wellness visits with a reptile-experienced veterinarian are essential.`,
      checklist: ["4x2x2 ft enclosure", "High-output desert UVB (T5 HO)", "Powerful basking bulb (100 to 115 degrees F)", "Digital thermometer (infrared gun recommended)", "Calcium w/D3 + multivitamin", "Ceramic food and water dishes", "Juvenile insects (dubia, BSFL, crickets)", "Leafy greens daily", "Reptile carpet or tile substrate", "Branches and hides for enrichment"],
    },
    faqs: [
      { q: "How big do bearded dragons get?", a: "Adult bearded dragons (Pogona vitticeps) reach 16 to 24 inches total length and 300 to 500 grams, with males typically larger than females. Most reach adult size by 12 to 18 months, though they continue filling out through their second year." },
      { q: "What do bearded dragons eat?", a: "Juveniles (under 12 months) eat roughly 70% live insects and 30% leafy greens daily. Adults flip this ratio to 70% leafy greens and 30% insects every other day. Staple feeders include dubia roaches, black soldier fly larvae, and crickets. Staple greens include collard greens, mustard greens, and dandelion greens. Avocado, fireflies, and rhubarb are toxic and must be avoided." },
      { q: "Do bearded dragons need UVB?", a: "Yes, absolutely - this is non-negotiable. Bearded dragons require strong desert UVB lighting (T5 HO Arcadia Dragon 12% or equivalent) on a 12-hour cycle. Without adequate UVB they cannot metabolize calcium, which causes Metabolic Bone Disease (MBD). Replace UVB bulbs every 6 to 12 months even if they still emit visible light, as UV output degrades before the visible light does." },
      { q: "What is brumation in bearded dragons?", a: "Brumation is a hibernation-like state triggered by shorter days and cooler temperatures, typically in autumn and winter. Signs include prolonged sleep, reduced appetite, and decreased activity lasting weeks to months. A healthy dragon in brumation should still drink water when offered. Always have a vet rule out illness before assuming brumation, as the two can look identical." },
      { q: "How long do bearded dragons live?", a: "Bearded dragons typically live 10 to 15 years in captivity with proper care. Key longevity factors are correct UVB, a varied diet, regular parasite screening via annual fecal exams with a reptile vet, and avoiding obesity. Females may have shorter lifespans than males if allowed to produce eggs frequently without adequate calcium reserves." },
    ],
  },
  {
    id: "blue-tongue-skink",
    name: "Blue Tongue Skink",
    emoji: "🦎",
    difficulty: "Beginner/Intermediate",
    petType: "Lizards",
    image: "/assets/guides/blue-tongue-skink.jpg",
    tagline: "The chunky, blue-tongued charmer who loves a good meal!",
    funFact: "Blue tongue skinks give live birth and are one of the largest skink species kept as pets. Adults can reach 18 to 24 inches!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "4x2x2 ft enclosure", low: 150, high: 300 },
        { item: "Moderate UVB (T5 HO Arcadia 6%)", low: 50, high: 90 },
        { item: "Basking bulb + fixture", low: 20, high: 40 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Coconut fiber + topsoil substrate", low: 20, high: 35 },
        { item: "Large water dish", low: 15, high: 25 },
        { item: "Multiple hides and enrichment items", low: 20, high: 40 },
      ],
      annual: [
        { item: "Leafy greens and vegetables", low: 150, high: 250 },
        { item: "Insect and protein feeders", low: 100, high: 200 },
        { item: "Calcium and multivitamin supplements", low: 20, high: 30 },
        { item: "UVB bulb replacement", low: 60, high: 100 },
        { item: "Electricity (heat and lighting)", low: 60, high: 100 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 4x2x2 ft enclosure is the minimum for a single adult blue tongue skink, though larger is always preferable. Blue tongues are terrestrial lizards - floor space matters far more than height. They are active, exploratory animals that will walk laps of their enclosure daily when conditions are correct, so generous floor space meaningfully improves their quality of life.

The basking spot is critical. Surface temperatures of 95 to 110 degrees F are required under the basking area, with the exact target depending on subspecies (Northern blue tongues prefer the higher end). The ambient warm side should be 80 to 85 degrees F, and the cool side 70 to 75 degrees F. Measure with an infrared temperature gun. An under-tank heater used alongside an overhead basking light creates the most naturalistic gradient.

Moderate UVB (T5 HO 5 to 6%, or Arcadia 6% Forest Bulb) is strongly recommended. While blue tongue skinks can survive without UVB when supplementation is excellent, UVB-exposed animals show better bone density, more natural behavior, and improved overall health outcomes. Run UVB on a 10 to 12 hour cycle.

Substrate should be 3 to 4 inches deep and appropriate for burrowing: coconut fiber, a topsoil/coconut fiber mix, or a similar moisture-retaining substrate. Blue tongue skinks like to burrow partially and benefit from substrate depth. Provide multiple hides (at least two, warm and cool ends) and a fresh water dish large enough to soak in.`,
      diet: `Blue tongue skinks are omnivores that require a carefully balanced diet split between animal protein and plant matter. The ideal ratio for most adult Northern blue tongue skinks (Tiliqua scincoides intermedia) is approximately 40 to 60% vegetables and leafy greens, 30 to 40% protein sources, and no more than 5 to 10% fruit.

Staple vegetables and greens include collard greens, mustard greens, dandelion greens, squash, green beans, and bell peppers. Dark leafy greens should form the bulk of the plant portion. Rotate variety regularly. Avoid spinach, beet greens, and other high-oxalate foods as primary staples.

Protein sources include gut-loaded insects (dubia roaches, crickets, black soldier fly larvae), lean cooked chicken or turkey, hard-boiled eggs, and high-quality low-grain cat or dog food as an occasional addition. Different subspecies have different protein needs: Northern blue tongues are higher-protein feeders from tropical, prey-rich environments, while Indonesian subspecies (Merauke, Halmahera, Kei Island) tolerate less protein and more plant matter.

Dust food with calcium w/D3 powder 2 to 3 times per week and a reptile multivitamin once per week. Fresh water should always be available. Obesity from overfeeding high-fat protein sources or fruit is one of the most common husbandry mistakes - feed appropriate portions and monitor body condition (ribs should be slightly palpable but not prominently visible).`,
      enrichment: `Blue tongue skinks are among the most interactive and personable lizards kept as pets. Many individuals become remarkably tame and genuinely seem to enjoy human interaction. Consistent, gentle handling from a young age produces calm, confident adults that tolerate and even seek out contact.

Provide at least two hides (one warm, one cool), a dig area where the skink can partially burrow, and objects for exploration - cork bark, flat rocks, and varied substrate textures. Blue tongue skinks are intelligent and benefit from environmental novelty. Rearranging furniture occasionally, offering food in different locations (foraging enrichment), and introducing safe novel objects all help prevent boredom.

Supervised free-roam time in a warm, safe room is excellent enrichment. Blue tongues are ground-level explorers that move with purpose and investigate new environments confidently. Many keepers allow their skinks to roam a section of floor under supervision regularly.

Bathing in a shallow warm water tub for 15 to 20 minutes once or twice a week provides hydration, supports shedding, and keeps the skin healthy. Many blue tongue skinks enjoy soaking and become visibly relaxed in warm water.`,
      health: `Obesity is the most common chronic health problem in pet blue tongue skinks. It results from overfeeding protein-rich foods (especially cat/dog food and waxworms), excessive fruit, and insufficient exercise in small enclosures. Obese blue tongue skinks develop fatty liver disease, cardiac problems, and shortened lifespans. Monitor body condition regularly - a healthy skink should feel firm and muscular, not squishy.

Respiratory infections typically result from temperatures that are too low or humidity that is too high. Blue tongue skinks in cool, damp conditions develop bacterial respiratory infections that require veterinary antibiotic treatment. Ensure the basking spot is hot enough and the enclosure has appropriate ventilation.

Parasites are common, particularly in animals sourced from unknown backgrounds or wild-caught situations. Annual fecal exams with a reptile vet are recommended for all blue tongue skinks. Many carry subclinical parasite loads that, when combined with stress, can become active problems.

Subspecies identification matters for care. Northern blue tongue skinks and Indonesian subspecies have different temperature, humidity, and dietary requirements. Research the specific subspecies you are keeping. Annual wellness checks with a reptile-experienced veterinarian are strongly recommended.`,
      checklist: ["4x2x2 ft enclosure", "Moderate UVB (T5 HO Arcadia 6%)", "Basking bulb (95 to 110 degrees F)", "Digital thermometer and hygrometer", "Coconut fiber + topsoil mix substrate", "Calcium and multivitamin supplements", "Leafy greens and vegetables", "Quality insect feeders", "Large water dish", "Multiple hides and enrichment items"],
    },
    faqs: [
      { q: "What do blue-tongue skinks eat?", a: "Blue-tongue skinks are omnivores that need variety. A good adult diet is roughly 60% animal protein and 40% vegetables and greens. Protein sources include cooked turkey, chicken, low-fat dog food as an occasional base, dubia roaches, and cooked eggs. Vegetables should include collard greens, dandelion greens, squash, and bell peppers. Fruit can be offered as an occasional treat under 5% of the diet. Avoid avocado, onion, rhubarb, and high-oxalate foods like spinach in large quantities." },
      { q: "How big do blue-tongue skinks get?", a: "Adults reach 18 to 24 inches in total length and typically weigh 400 to 600 grams. Northern blue-tongue skinks tend toward the larger end of that range. They are stocky, robust lizards with a wide blunt head and the distinctive blue tongue that flashes as a warning display. They are fully grown by 2 to 3 years of age, though they continue to fill out until age 4." },
      { q: "Do blue-tongue skinks need UVB?", a: "Yes, and this is now the strong consensus of reptile veterinary professionals. Blue-tongue skinks benefit significantly from moderate UVB (T5 HO Arcadia 6% or equivalent). UVB supports calcium metabolism and D3 synthesis, reduces disease risk, and improves long-term health outcomes. Keepers maintained blue-tongues for years without UVB, but skeletal and immune health is measurably better with it. A 12-hour light cycle that includes UVB is considered standard modern husbandry." },
      { q: "Are blue-tongue skinks good pets?", a: "Blue-tongue skinks are excellent pets for keepers with some reptile experience. They are diurnal (active during the day), large enough to handle comfortably, and develop recognizable personalities - many become quite bold and interactive. They are generally reluctant to bite but will hiss and display their blue tongue when threatened. Their varied omnivorous diet requires more food preparation than insect-only reptiles, but the feeding process becomes an enriching routine." },
      { q: "How long do blue-tongue skinks live?", a: "With good care, blue-tongue skinks commonly live 15 to 25 years in captivity, with some individuals exceeding 25 years. Northern blue-tongue skinks in particular are known for their robust constitution and longevity. This makes them a genuine long-term commitment - annual wellness checks with a reptile-experienced vet are recommended, especially as the skink ages past 10 years." },
    ],
  },
  {
    id: "green-anole",
    name: "Green Anole",
    emoji: "🦎",
    difficulty: "Beginner/Intermediate",
    petType: "Lizards",
    image: "/assets/guides/green-anole.jpg",
    tagline: "America's tiny chameleon: the little green lizard that turns brown with its mood!",
    funFact: "Green anoles can change color from bright green to brown depending on temperature, stress, or mood, earning them the nickname 'American chameleon,' though they're not true chameleons at all!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "18x18x24 in tall planted enclosure", low: 80, high: 150 },
        { item: "UVB (T5 HO 5-6%)", low: 50, high: 90 },
        { item: "Basking bulb", low: 15, high: 30 },
        { item: "Dense live plants", low: 25, high: 45 },
        { item: "Thin branches and cork bark", low: 15, high: 25 },
        { item: "Automatic mister or manual misting bottle", low: 10, high: 40 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
      ],
      annual: [
        { item: "Small feeder insects (crickets, fruit flies)", low: 60, high: 120 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "UVB bulb replacement", low: 50, high: 90 },
        { item: "Electricity (heat and lighting)", low: 30, high: 50 },
        { item: "Annual vet wellness check", low: 40, high: 80 },
      ],
    },
    sections: {
      housing: `A well-planted 18x18x24" vertical enclosure works for 1 to 2 green anoles. Never house two males together - they fight aggressively and will injure or kill each other. A male-female pair or a group of females can be housed together in a sufficiently large and well-planted enclosure.

These are arboreal lizards requiring height and dense vegetation. Live plants - pothos, bromeliads, ficus pumila - are strongly recommended. Anoles drink water droplets from leaves after misting and rarely drink from standing water dishes. Dense plantings are therefore both enrichment and a critical hydration mechanism.

Maintain daytime temperatures of 80 to 85 degrees F with a basking spot of 90 degrees F, dropping to 65 to 75 degrees F at night. Humidity should be 60 to 80%. UVB (T5 HO 5 to 6%) is essential for health and calcium metabolism. An automatic misting system set for morning and evening replicates natural rainfall cycles and ensures adequate hydration.`,
      diet: `Green anoles are insectivores. Feed small live insects: appropriately sized crickets, small dubia roaches, fruit flies (for hatchlings and small juveniles), and waxworms as occasional treats. Prey should be no wider than the space between the anole's eyes - this small lizard has a small mouth and appropriately sized prey prevents choking.

Feed daily for juveniles, every other day for adults. Gut-load all feeder insects 24 to 48 hours before offering. Dust with calcium w/D3 every 2 to 3 feedings and a reptile multivitamin once weekly.

Green anoles are delicate animals and their small size means nutritional deficiencies develop quickly. Consistent, appropriate supplementation is critical. Never offer oversized prey - stress from struggling to swallow inappropriate prey is real and harmful.`,
      enrichment: `Dense vertical plantings at multiple levels, thin branches for perching, cork bark, and live plant cover create the ideal environment. Green anoles are best enjoyed as a display species - their natural behaviors (dewlap displays, color changes from green to brown, territorial posturing, hunting behavior) are fascinating to observe through the glass.

Frequent handling causes significant and cumulative stress. Green anoles are not handling animals - keep interaction minimal. The dewlap display (a bright red throat fan extended for territorial communication) and color-shifting in response to temperature, mood, and stress are the primary visual appeal.

A dripper system or automatic misting system running twice daily (morning and late afternoon) replicates natural rain cycles, triggers activity and feeding responses, provides drinking water on leaves, and maintains appropriate humidity. This is one of the most important environmental features for anole health.`,
      health: `Dehydration is the most common cause of declining health in green anoles. They rarely drink from standing water and must have water droplets available on leaves after misting. A green anole with sunken eyes is severely dehydrated and requires immediate intervention: increase misting frequency and provide a shallow water dish with a small sponge or pebbles to prevent drowning.

Poor UVB causes calcium deficiency and MBD, which presents as muscle trembling, inability to climb, and soft jaw in these small lizards. Quality UVB on a consistent 12-hour cycle prevents this entirely.

Stress from over-handling, male-male aggression, or overly sparse housing causes immune suppression, anorexia, and shortened lifespan. Green anoles are sensitive animals that require precise husbandry and a low-stress environment. Retained shed on toes can cause constriction and digit loss - consistent humidity prevents it. Annual veterinary checks with an exotic animal vet are recommended.`,
      checklist: [
        "18x18x24\"+ tall planted enclosure",
        "UVB T5 HO (5 to 6%)",
        "Basking bulb (90 degrees F hot spot)",
        "Dense live plants (pothos, bromeliads)",
        "Thin branches and cork bark",
        "Automatic mister or daily hand misting (x2)",
        "Digital thermometer and hygrometer",
        "Small live feeder insects (crickets, fruit flies)",
        "Calcium w/D3 + multivitamin supplements",
        "Reptile-savvy exotic veterinarian",
      ],
    },
    faqs: [
      { q: "Are green anoles good pets to handle?", a: "Green anoles are better appreciated as display animals than handling pets. They are sensitive to stress, and frequent handling causes immune suppression and shortened lifespan. Their natural behaviors - dewlap displays, color shifts from green to brown, territorial posturing, and active hunting - are the primary appeal and are best observed through the glass." },
      { q: "Why does my green anole turn brown?", a: "Color change in green anoles is triggered by temperature, stress, mood, and ambient conditions - not just camouflage. A cold or stressed anole turns brown; a warm, relaxed anole is bright green. This color-shifting ability is why they are sometimes called 'American chameleons,' though they are not true chameleons. Brown color alone is not a sign of illness." },
      { q: "What do green anoles eat?", a: "Green anoles are strict insectivores. Feed small live insects - appropriately sized crickets, small dubia roaches, and fruit flies for juveniles and smaller adults. Prey should be no wider than the space between the anole's eyes. Feed daily for juveniles, every other day for adults. Gut-load all insects 24 to 48 hours before offering." },
      { q: "How big do green anoles get?", a: "Adults reach 5 to 8 inches total length - most of which is the slender, whip-like tail. They are lightweight, delicate animals. Males develop a distinctive red dewlap (throat fan) used in territorial and courtship displays. Two males should never be housed together as they fight aggressively." },
      { q: "Do green anoles need UVB?", a: "Yes, UVB is essential. A T5 HO 5 to 6% UVB bulb on a 12-hour cycle supports calcium metabolism and vitamin D3 synthesis. Without adequate UVB, green anoles develop calcium deficiency and metabolic bone disease. A proper automatic misting system is equally critical - they drink from water droplets on leaves and rarely from standing water dishes." },
    ],
  },
  {
    id: "chameleon",
    name: "Jackson's Chameleon",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/chameleon.jpg",
    tagline: "The horned, color-shifting dinosaur of the reptile world!",
    funFact: "Jackson's chameleons are one of the few chameleon species that give live birth rather than laying eggs. Females can birth 8 to 30 live young!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x48 in all-screen enclosure", low: 150, high: 300 },
        { item: "Strong UVB (T5 HO Arcadia 6-12%)", low: 70, high: 110 },
        { item: "Basking bulb", low: 20, high: 40 },
        { item: "Dripper system and automatic mister", low: 50, high: 100 },
        { item: "Live plants (pothos, ficus)", low: 40, high: 80 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
      ],
      annual: [
        { item: "Gut-loaded feeder insects (variety)", low: 150, high: 300 },
        { item: "Calcium w/ and w/o D3 + multivitamin", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (heat, lighting, mister)", low: 50, high: 90 },
        { item: "Annual vet wellness check (chameleon-experienced)", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: `A 24x24x48" all-screen enclosure is the minimum for a single adult Jackson's chameleon. Screen construction is non-negotiable - stagnant air in glass or plastic enclosures causes rapid onset respiratory infections in chameleons. Airflow must be constant and significant. Many experienced keepers use screen cages outdoors in appropriate climates, which is close to ideal.

Live plants are essential, not decorative. Pothos, ficus, hibiscus, and dracaena provide natural humidity regulation, visual barriers for security, resting surfaces, and environmental complexity. Bare enclosures produce chronically stressed, sick chameleons. Aim for at least 60 to 70% plant coverage of the enclosure interior.

Temperature requirements: daytime ambient of 72 to 80 degrees F with a basking spot of 85 to 88 degrees F. Jackson's chameleons prefer cooler temperatures than most other chameleon species - they originate from the cool highlands of East Africa and Hawaii's Maui island. Nighttime temperatures can drop to 55 to 65 degrees F, which is actually beneficial. Never allow temperatures to exceed 90 degrees F. Strong UVB (T5 HO Arcadia 6% or 12%) is mandatory.

A dripper system and/or automatic misting system is required for hydration. Chameleons almost never drink from standing water - they drink water droplets from leaves and their environment after rainfall. A dripper creating slow drips onto leaves for 30 to 60 minutes morning and afternoon, combined with a fine misting system that runs for 3 to 5 minutes several times daily, meets hydration and humidity needs.`,
      diet: `Jackson's chameleons eat live insects exclusively. The variety of feeder insects is one of the most important factors in long-term health. Offer crickets, dubia roaches, hornworms, silkworms, black soldier fly larvae, and blue bottle flies. Each insect species has a different nutritional profile, and rotation provides comprehensive nutrition. Avoid relying on a single feeder type.

Gut-loading feeder insects 24 to 48 hours before feeding is critical. Feed insects a high-quality commercial gut-load or fresh vegetables (collard greens, mustard greens, sweet potato, carrot, apple). The chameleon's nutrition is entirely dependent on what its prey ate. An unloaded cricket offers minimal nutritional value.

Feed juveniles daily (as many as they will eat in 15 minutes). Feed adults every other day, offering 5 to 10 appropriately sized insects. Prey should be no larger than the width of the chameleon's head. Overfeeding causes obesity, which stresses the liver and reproductive system.

Supplementation schedule: calcium without D3 at every or every-other feeding, calcium with D3 twice weekly, and a reptile multivitamin once per week. Jackson's chameleons are sensitive to over-supplementation as much as under-supplementation. Follow this schedule precisely.`,
      enrichment: `Dense, multi-level branching is the most important structural enrichment. Chameleons are almost entirely arboreal and spend their lives navigating through a three-dimensional network of branches and leaves. Horizontal branches at multiple heights, thin perching vines at the top (where they feel safest), and thick branches lower for basking create the complexity they need.

The dripper and misting system doubles as enrichment - chameleons investigate and drink droplets naturally and actively. Watching a chameleon track and hunt live prey is a major appeal of keeping them; the prey variety itself provides mental engagement.

Handle minimally. Chameleons are not handling animals. Stress is a primary health concern - a chronically stressed chameleon will stop eating, develop immune suppression, and die. Many chameleons spend their entire lives in their enclosure without needing to be handled. When handling is necessary (for veterinary visits, enclosure cleaning), move slowly, allow the chameleon to walk onto your hand voluntarily, and keep sessions as brief as possible.

Jackson's chameleons are live-bearing (viviparous), unlike most chameleon species that lay eggs. A gravid female needs adequate nutrition and a suitable warm, humid hiding area. Breeding is not recommended without extensive experience.`,
      health: `Chameleons are masters of concealing illness. By the time a chameleon shows obvious signs of sickness - color changes, sunken eyes, closed eyes during the day, gaping mouth, lethargy - it has usually been ill for some time and is severely compromised. Attentive daily observation of baseline behavior is essential. Know what your chameleon's normal colors, activity level, and feeding response look like.

Dehydration is the single most common cause of early death in pet chameleons. Sunken eyes (the most visible sign), dark coloration, and lethargy indicate dehydration. A chameleon that is not drinking needs immediate intervention: long misting sessions, paper towel soaks, and veterinary care if the animal does not rehydrate quickly. Maintain the dripper and misting schedule without gaps.

Metabolic Bone Disease (MBD) from inadequate UVB or supplementation causes swollen limbs, deformities, and difficulty moving. Maintain proper UVB schedules, replace UVB bulbs on schedule, and follow supplementation protocols exactly.

Respiratory infections result from stagnant air and temperature fluctuations. The all-screen enclosure mandate is specifically to prevent this. Female Jackson's chameleons can develop reproductive problems (dystocia, retained offspring) that require veterinary intervention. Find a reptile vet with chameleon experience before you need one - do not wait for an emergency to identify your veterinary resource.`,
      checklist: ["24x24x48\" all-screen enclosure", "Strong UVB lighting (T5 HO Arcadia 6% or 12%)", "Basking bulb (80 to 85 degrees F hot spot)", "Dripper system and automatic mister", "Live plants (pothos, ficus)", "Gut-loaded feeder insects", "Calcium w/D3 and without D3 supplements", "Multivitamin supplement", "Digital thermometer and hygrometer", "Reptile vet with chameleon experience"],
    },
    faqs: [
      { q: "Are chameleons hard to keep?", a: "Chameleons are widely considered one of the most demanding reptiles in the hobby and are not recommended for first-time reptile keepers. They require very specific conditions: all-screen enclosures for ventilation, precise temperature gradients, high humidity with a wet-dry cycle, strong UVB lighting, live gut-loaded insects at every feeding, and a dripper or automatic misting system for hydration. They are also highly stress-sensitive - improper conditions or a high-traffic cage location cause rapid health decline. Experienced keepers find them deeply rewarding; beginners often experience significant losses." },
      { q: "Why do chameleons change color?", a: "Chameleons change color primarily to communicate mood, social status, and reproductive readiness - not primarily for camouflage as commonly believed. Bright, vivid colors often signal excitement, territorial aggression, or a male displaying to a female. Dark, muted colors typically indicate stress, illness, or cold. The color change is achieved by manipulating nanocrystals within specialized skin cells called iridophores, which reflect different wavelengths of light depending on their arrangement." },
      { q: "How do I get my chameleon to drink water?", a: "Chameleons rarely drink from standing water bowls - in the wild, they drink droplets from leaves after rain. Provide water by misting the enclosure 2 to 3 times daily so the chameleon can drink from leaves and cage walls. A dripper system that slowly keeps leaves wet is highly effective. Always use dechlorinated or filtered water. Signs of dehydration include sunken eyes, lethargy, and yellow-orange urates - the urate portion of droppings should be white, not yellow." },
      { q: "How big do veiled chameleons get?", a: "Male veiled chameleons typically reach 18 to 24 inches total length and 140 to 200 grams - they are among the larger chameleon species kept in captivity. Females are noticeably smaller at 10 to 13 inches, but require more advanced care because they are prone to reproductive issues. Females produce infertile eggs even without a male and must have a deep laying box available at all times to prevent fatal egg-binding." },
      { q: "How long do chameleons live?", a: "Captive-bred veiled chameleons live 5 to 8 years with optimal care, with males often outliving females (females that lay frequent clutches have significantly shortened lifespans). Jackson's chameleons live 5 to 10 years. Panther chameleons live 3 to 7 years. Wild-caught chameleons rarely survive long in captivity due to extreme capture stress. Regular access to a vet experienced with chameleons dramatically improves outcomes at any age." },
    ],
  },
  {
    id: "savannah-monitor",
    name: "Savannah Monitor",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/savannah-monitor.jpg",
    tagline: "The powerful, intelligent monitor that needs serious space and a serious keeper!",
    funFact: "Savannah monitors are built for digging. In the wild they may create burrows several feet deep to escape the African heat. A deep substrate is one of the most important enrichment features you can give them!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    // Adult housing is often custom-built; setup range reflects that.
    costs: {
      setup: [
        { item: "8x4x4 ft+ custom enclosure or room", low: 500, high: 1200 },
        { item: "12 in+ deep substrate (topsoil/sand mix)", low: 100, high: 200 },
        { item: "High-wattage basking bulb + fixture", low: 30, high: 60 },
        { item: "Strong desert UVB (T5 HO Arcadia Dragon 12%)", low: 70, high: 110 },
        { item: "Quality thermostat", low: 40, high: 70 },
        { item: "Infrared thermometer gun", low: 25, high: 40 },
        { item: "Large water tub for soaking", low: 30, high: 60 },
      ],
      annual: [
        { item: "Varied diet (roaches, eggs, occasional mice/rats)", low: 250, high: 450 },
        { item: "Calcium and multivitamin supplements", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (high-wattage basking)", low: 120, high: 220 },
        { item: "Annual vet wellness check", low: 70, high: 120 },
      ],
    },
    sections: {
      housing: "Adult savannah monitors can reach 3 to 5 ft and require enormous enclosures. A minimum 8x4x4 ft is recommended, and many keepers build custom rooms. Deep substrate (12 inches or more of a 50/50 topsoil/sand mix) is essential for burrowing and thermoregulation. A very hot basking spot (130 to 150 degrees F surface) is critical. Ambient warm side: 90 to 95 degrees F. Cool side: 78 to 82 degrees F. Strong desert UVB (Arcadia Dragon 12%) is mandatory. High humidity (60 to 70%) in the cool/burrow area, low humidity under the basking spot.",
      diet: `Savannah monitors are carnivores that benefit from a varied diet reflecting their natural feeding habits. In the wild, savannah monitors eat a wide variety of invertebrates, small vertebrates, and eggs - not primarily rodents. Research consistently shows that monitors fed primarily on mice and rats develop severe obesity, fatty liver disease, and cardiac problems. An invertebrate-heavy diet is significantly healthier.

Appropriate feeders include large dubia roaches, superworms, crickets, hornworms, silkworm pupae, and large insects. Whole prey items - appropriate-sized mice, rats (infrequently), raw quail, feeder fish, and whole raw eggs - provide variety and nutritional completeness. Eggs (raw chicken or quail) are an excellent regular food item.

Feed juveniles daily. Feed adults 3 to 5 times per week. Watch body condition carefully - a healthy savannah monitor has visible muscle tone but no pronounced fat deposits on the neck or limbs. Obesity is one of the most common and serious welfare problems in pet savannah monitors.`,
      enrichment: `Deep burrowing substrate is the most important enrichment. Savannah monitors in the wild create burrows many feet deep. A minimum of 12 inches of substrate (topsoil/sand mix) allows natural burrowing behavior that is fundamental to their physical and psychological wellbeing.

Provide large rock structures (securely stacked), cork bark hides, climbing logs and branches, and a large water tub for soaking. Savannah monitors can become remarkably tame and interactive with consistent, confident handling from a young age. Mental stimulation through foraging enrichment (hiding prey in substrate or under rocks), novel objects, and varied prey items prevents the boredom that leads to stereotypic pacing behavior.

Free-roam time in a safe, supervised area provides exercise and exploration opportunities beyond the enclosure. Savannah monitors that are handled regularly and given enrichment opportunities are genuinely engaging, interactive animals.`,
      health: `Obesity from an all-rodent diet is the most common and serious welfare problem in savannah monitors. Whole-mammal diets (exclusively mice and rats) cause progressive fatty liver disease, cardiovascular problems, and lifespan reduction to 5 to 8 years instead of the 15 to 20 years possible with appropriate care. An invertebrate-diverse diet with only occasional whole prey mammals dramatically improves long-term health outcomes.

Metabolic Bone Disease from inadequate UVB causes soft bones and skeletal deformities. Strong desert UVB (Arcadia Dragon 12%) is mandatory and should run on a consistent schedule. Replace bulbs on schedule - UV output degrades before visible light does.

These are powerful animals. Adult savannah monitors can inflict significant injuries with their tail (whipping), claws, and jaws. Approach with confidence and calm, never fear or aggression. Annual veterinary wellness checks with a reptile vet experienced in monitor lizards are essential.`,
      checklist: [
        "8x4x4 ft+ custom enclosure or room",
        "12 inch+ deep substrate (topsoil/sand mix)",
        "High-wattage basking bulb (130 to 150 degrees F surface)",
        "Strong desert UVB (T5 HO Arcadia Dragon 12%)",
        "Quality thermostat",
        "Digital thermometer (IR gun essential)",
        "Large water tub for soaking",
        "Varied whole prey diet (roaches, eggs, mice, rats)",
        "Calcium + multivitamin supplements",
        "Reptile vet with monitor lizard experience",
      ],
    },
    faqs: [
      { q: "What is the biggest mistake in savannah monitor care?", a: "Feeding primarily or exclusively rodents. A diet of mice and rats causes severe obesity, fatty liver disease, and cardiovascular problems that dramatically shorten lifespan to 5 to 8 years instead of the 15 to 20 years achievable with appropriate care. Wild savannah monitors eat primarily invertebrates. An invertebrate-heavy diet - dubia roaches, superworms, eggs, large insects - is the correct dietary model, with whole prey mammals offered only occasionally." },
      { q: "How big do savannah monitors get?", a: "Adults typically reach 3 to 5 feet in total length and weigh 6 to 15+ lbs. This is a large, powerful animal requiring enormous housing - 8x4x4 ft at minimum, and many dedicated keepers build custom rooms. Prospective owners should research adult size requirements thoroughly before acquiring a hatchling." },
      { q: "Do savannah monitors become tame?", a: "Yes, with consistent confident handling from a young age, many savannah monitors become remarkably calm and tolerant. Adult tame monitors can be handled confidently and even enjoy interaction. The key is consistent calm handling that builds trust - never fear or forced interaction. Adults that were handled regularly as juveniles are dramatically different animals from those that were not." },
      { q: "How hot does a savannah monitor's basking spot need to be?", a: "130 to 150 degrees F at the surface, measured with an infrared temperature gun. Without adequate basking temperatures, savannah monitors cannot properly thermoregulate, digest food, or activate their immune systems. High-wattage halogen or flood bulbs in a quality fixture achieve these temperatures." },
      { q: "How long do savannah monitors live?", a: "With an invertebrate-based diet, appropriate housing (8x4x4 ft+), correct basking temperatures, and regular veterinary care, savannah monitors can live 15 to 20 years. The species has a reputation for short captive lifespans because most are fed primarily rodents - this is an entirely preventable outcome." },
    ],
  },
  {
    id: "uromastyx",
    name: "Uromastyx",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Lizards",
    image: "/assets/guides/uromastyx.jpg",
    tagline: "The colorful, seed-eating desert dragon that thrives on extreme heat!",
    funFact: "Uromastyx (also called spiny-tailed lizards) are almost entirely herbivorous. They get nearly all their water from their food and rarely need a standing water dish! They're one of the few reptiles that thrive on seeds.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "4x2x2 ft+ enclosure", low: 150, high: 300 },
        { item: "High-wattage basking bulb + fixture", low: 25, high: 45 },
        { item: "Quality thermostat", low: 40, high: 70 },
        { item: "Strong desert UVB (T5 HO Arcadia Dragon 12%)", low: 70, high: 110 },
        { item: "Sandy desert substrate", low: 20, high: 35 },
        { item: "Infrared thermometer gun", low: 25, high: 40 },
      ],
      annual: [
        { item: "Dark leafy greens daily", low: 100, high: 180 },
        { item: "Seeds and legumes", low: 30, high: 60 },
        { item: "Calcium and multivitamin supplements", low: 20, high: 30 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (high-wattage basking)", low: 70, high: 120 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `Adults need a minimum 4x2x2 ft enclosure. Uromastyx are desert lizards from North Africa and the Middle East requiring extremely hot basking spots. A surface temperature of 120 to 140 degrees F at the basking site is not optional - it is biologically critical for digestion, immune function, and thermoregulation. Without adequate basking heat, uromastyx cannot function properly.

The cool side should remain at 80 to 90 degrees F ambient. Strong T5 HO desert UVB (Arcadia Dragon 12% or equivalent) is mandatory and should run on a 10 to 12 hour cycle. Use a sandy desert substrate - fine play sand or an 80/20 sand-to-soil mix - 3 to 4 inches deep for natural digging behavior. Humidity should be kept very low (20 to 30%), mimicking their arid native habitat. A water dish is typically unnecessary and can raise humidity to unhealthy levels.

Enclosure temperatures must be measured with an infrared temperature gun for accuracy. A high-wattage halogen or flood bulb on a quality thermostat achieves the required basking surface temperature.`,
      diet: `Uromastyx are primarily herbivores and enthusiastic seed-eaters - this is relatively unusual among reptiles and makes them interesting to feed. Staple greens include collard greens, mustard greens, dandelion greens, endive, and escarole. Dark leafy greens should form the bulk of plant matter offered.

Seeds form a nutritionally important part of the diet: millet, lentils, split peas, various legume seeds, and quinoa are all appropriate. Offer seeds mixed into the greens or provided separately. Uromastyx eat them with obvious enthusiasm. Seeds provide protein, fat, and trace minerals that complement the leafy green base.

Do not provide a water dish as part of the regular setup - uromastyx get adequate hydration from their food, and a water dish raises humidity significantly, which is inappropriate for this arid-adapted species. Dust greens with calcium 2 to 3 times per week and a reptile multivitamin once weekly. Avoid high-oxalate foods like spinach as primary staples.`,
      enrichment: `Uromastyx are active, curious lizards that explore their enclosure during the warm hours of the day and engage with their environment in ways that many reptiles do not. They can become remarkably personable - many develop what keepers describe as dog-like personalities, seeking interaction and responding to their keeper's presence.

Provide rock stacks (securely stacked to prevent toppling), cork bark hides, and burrowing substrate deep enough for natural digging behavior. Uromastyx enjoy rearranging their environment and will push cork bark and rocks around to suit their preferences. This is entirely normal and engaging to watch.

Foraging enrichment is highly effective: hide seeds in the substrate, under rocks, or in puzzle feeders to encourage natural searching behavior. Supervised handling sessions build trust quickly with this species. Most uromastyx become calm and manageable adults with consistent, gentle interaction.`,
      health: `Inadequate basking temperature is the most common and most serious husbandry failure in uromastyx. A basking surface temperature below 120 degrees F means the uromastyx cannot properly thermoregulate its core body temperature, digest food, or activate immune responses. This leads to chronic digestive problems, immune suppression, and a dramatically shortened lifespan. Monitor basking temperatures regularly.

Metabolic Bone Disease from inadequate UVB or calcium supplementation causes softened bones and skeletal deformities. Strong UVB and consistent calcium supplementation prevent it. Respiratory infections can occur if humidity rises too high - keep the enclosure dry and well-ventilated.

Impaction from moist substrate is possible if the sandy substrate is kept too wet. Keep it dry throughout. Annual wellness checks with a reptile veterinarian experienced in lizards are strongly recommended.`,
      checklist: [
        "4x2x2 ft+ enclosure",
        "High-wattage basking bulb (120 to 140 degrees F surface)",
        "Quality thermostat",
        "Strong desert UVB (T5 HO Arcadia Dragon 12%)",
        "Sandy desert substrate (fine sand/soil mix, 3 to 4 inch deep)",
        "Digital thermometer (IR gun essential)",
        "Calcium + multivitamin supplements",
        "Staple dark leafy greens daily",
        "Seeds and legumes (millet, lentils, split peas)",
        "Reptile vet experienced with uromastyx",
      ],
    },
    faqs: [
      { q: "Do uromastyx need a water dish?", a: "No - and providing one is actively discouraged for most setups. Uromastyx are adapted to extremely arid environments and get all necessary hydration from their food. A water dish raises enclosure humidity significantly, which is inappropriate for this desert-adapted species. Remove any water dish from a standard uromastyx setup and rely on fresh vegetables for hydration." },
      { q: "How hot does the basking spot need to be for uromastyx?", a: "120 to 140 degrees F at the surface, measured with an infrared temperature gun. This is biologically critical - uromastyx cannot digest food, activate immune function, or properly thermoregulate without access to these extreme surface temperatures. High-wattage halogen or flood bulbs on a quality thermostat are the standard approach." },
      { q: "What do uromastyx eat?", a: "Dark leafy greens (collard greens, mustard greens, dandelion greens, endive, escarole) form the plant base. Uniquely, they are enthusiastic seed-eaters - millet, lentils, split peas, and various legume seeds are a nutritionally important supplement. They are nearly entirely herbivorous with no insects in the diet. Keep humidity very low (20 to 30%) and do not provide a water dish." },
      { q: "How big do uromastyx get?", a: "10 to 18 inches total length, depending on the species. Ornate uromastyx and Egyptian uromastyx are among the larger commonly kept species. All are stocky, heavyset lizards with thick, spiny tails used for defense. They reach adult size by 3 to 5 years of age." },
      { q: "How long do uromastyx live?", a: "15 to 20+ years in captivity with appropriate care - primarily the correct extreme basking temperatures (120 to 140 degrees F surface), dry conditions (20 to 30% humidity), a primarily herbivorous diet with seeds, and strong desert UVB. They are hardy animals once their specific needs are met." },
    ],
  },
  {
    id: "veiled-chameleon",
    name: "Veiled Chameleon",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Lizards",
    image: "/assets/guides/veiled-chameleon.jpg",
    tagline: "The Arabian casque-crowned climber often called the most forgiving chameleon to start with!",
    funFact: "Veiled chameleons are remarkably drought-adapted for a chameleon. Native to the mountains of Yemen and Saudi Arabia, they tolerate wider temperature and humidity swings than most other chameleon species. Females are also famous for laying large clutches of infertile eggs even without ever having contact with a male.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "24x24x48 in all-screen enclosure", low: 150, high: 300 },
        { item: "Strong UVB (T5 HO Arcadia 6% or 12%)", low: 70, high: 110 },
        { item: "Basking bulb", low: 20, high: 40 },
        { item: "Dripper system and automatic mister", low: 50, high: 100 },
        { item: "Live plants (pothos, hibiscus, ficus)", low: 40, high: 80 },
        { item: "Laying bin with moist sand/soil (females)", low: 15, high: 30 },
      ],
      annual: [
        { item: "Gut-loaded feeder insects (variety)", low: 150, high: 280 },
        { item: "Calcium w/ and w/o D3 + multivitamin", low: 25, high: 35 },
        { item: "UVB bulb replacement", low: 70, high: 110 },
        { item: "Electricity (heat, lighting, mister)", low: 50, high: 90 },
        { item: "Annual vet wellness check (chameleon-experienced)", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `A 24x24x48 inch or larger all-screen enclosure is the minimum for one adult veiled chameleon. Screen construction is mandatory, not optional - stagnant air in glass or plastic enclosures causes rapid-onset respiratory infections in chameleons of every species. Dense live plants (pothos, hibiscus, ficus) covering 60 to 70% of the enclosure interior provide humidity regulation, visual security, and climbing structure. Bare enclosures produce chronically stressed animals.

Veiled chameleons tolerate warmer basking temperatures than most other chameleon species: a basking spot of 85 to 95 degrees F for adults is appropriate, with ambient daytime temperatures of 75 to 85 degrees F. Nighttime temperatures can drop to 65 to 75 degrees F. Strong UVB lighting (T5 HO Arcadia 6% or 12%) is mandatory for calcium metabolism.

A dripper and/or automatic misting system is required, since chameleons rarely drink from standing water and instead drink droplets from leaves after simulated rainfall. Just as important and specific to this species: a deep laying bin of moist sand or soil must be available at all times, regardless of whether a female has ever been near a male - she will lay infertile eggs on her own schedule and needs somewhere to dig, or she risks fatal egg-binding.`,
      diet: `Veiled chameleons are primarily insectivorous. Offer a rotating variety of crickets, dubia roaches, superworms, silkworms, hornworms, and black soldier fly larvae - variety in feeder species is one of the most important factors in long-term health. Gut-load all feeders 24 to 48 hours before offering them.

Unusually among chameleons, veiled chameleons also opportunistically eat plant matter in the wild, including leaves and flowers such as hibiscus. Offering occasional leafy greens or hibiscus flowers alongside their insect diet reflects natural behavior and provides some supplemental hydration and nutrition, though insects should remain the dietary foundation.

Feed juveniles daily, offering as much as they'll consume in about 15 minutes. Feed adults every other day, offering 5 to 10 appropriately sized insects - no larger than the width of the chameleon's head. Dust feeders with calcium without D3 at most feedings, calcium with D3 twice weekly, and a reptile multivitamin once a week.`,
      enrichment: `Multi-level branching is the most important structural enrichment, since veiled chameleons are almost entirely arboreal and spend their lives navigating a three-dimensional network of branches and leaves. The large casque (the helmet-like structure on top of the head) helps condense atmospheric moisture and plays a role in thermoregulation and visual signaling to other chameleons.

Color changes are primarily a communication tool - signaling mood, temperature, and social or reproductive status - rather than camouflage as commonly assumed. Bright colors often indicate excitement or a display; dark, muted tones typically signal stress or cold.

Handle minimally. Chameleons are display and observation animals rather than handling pets, and unnecessary handling is a significant stress factor. When handling is required for husbandry or veterinary reasons, move slowly and let the chameleon walk onto your hand voluntarily. Always keep a laying bin available for females at all times - this is enrichment and a genuine health necessity in one.`,
      health: `Dehydration is the most common cause of early death in pet chameleons of any species. Sunken eyes, dark coloration, and lethargy are the key warning signs, and any chameleon showing them needs immediate long misting sessions and, if it doesn't improve quickly, veterinary care. Maintain the dripper and misting schedule without gaps.

Egg-binding (dystocia) is a serious and species-specific health risk for female veiled chameleons, since they lay eggs whether or not they've mated. A female without an appropriate laying bin available at all times, or one that strains and appears lethargic without laying, needs prompt veterinary attention - this is a genuine emergency.

Metabolic bone disease from inadequate UVB or supplementation causes swollen limbs and deformities. Respiratory infections follow stagnant air and poor ventilation, which is exactly why the all-screen enclosure requirement exists. Find a reptile vet experienced with chameleons before you need one.`,
      checklist: [
        "24x24x48\" all-screen enclosure",
        "Strong UVB lighting (T5 HO Arcadia 6% or 12%)",
        "Basking bulb (85 to 95°F hot spot for adults)",
        "Dripper system and automatic mister",
        "Live plants (pothos, hibiscus, ficus)",
        "Laying bin with moist sand/soil, always available (females)",
        "Gut-loaded feeder insects",
        "Calcium w/ and w/o D3 supplements",
        "Reptile multivitamin",
        "Reptile vet with chameleon experience",
      ],
    },
    faqs: [
      { q: "Are veiled chameleons good for beginners?", a: "They're often called the most forgiving chameleon species to start with, since they tolerate a wider range of temperature and humidity than most other chameleons. That said, they're still not a true beginner reptile - they require an all-screen enclosure, strong UVB, a dripper or misting system, live plants, and daily gut-loaded insects. Compared to other chameleon species they're relatively approachable; compared to a leopard gecko or bearded dragon, they remain considerably more demanding." },
      { q: "Why does my female veiled chameleon keep laying eggs without a male?", a: "This is completely normal. Female veiled chameleons produce infertile egg clutches on a regular cycle regardless of whether they've ever had contact with a male. Because of this, every female needs a deep laying bin of moist sand or soil available at all times - without one, she can develop fatal egg-binding trying to lay in an unsuitable space." },
      { q: "What is the casque for?", a: "The casque is the helmet-like structure on top of a veiled chameleon's head. It helps condense atmospheric moisture (functioning almost like a small collection surface in humid air), assists with thermoregulation, and plays a role in visual signaling and species recognition. Casque size and shape also differ notably between males and females, with males developing a substantially larger casque." },
      { q: "How big do veiled chameleons get?", a: "Males typically reach 18 to 24 inches in total length and 140 to 200 grams, making them one of the larger chameleon species kept in captivity. Females are noticeably smaller at 10 to 14 inches, but require equally attentive care since they're prone to reproductive complications like egg-binding." },
      { q: "How long do veiled chameleons live?", a: "5 to 8 years is typical with optimal care. Males often outlive females, since females that lay frequent egg clutches over their lifetime tend to have measurably shortened lifespans. Consistent UVB, proper hydration, and a laying bin for females all meaningfully improve longevity." },
    ],
  },
];
