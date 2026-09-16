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
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry, which no deep dive repeats. Heat stress signs cite
    // the shared small mammal guides in the sidebar's Health and More list.
    // Reconciled 2026-09-15 after the degu set test (docs/READER_REVIEWS.md),
    // rewritten to the template shape 2026-09-16 (docs/HUB_ROUTER_REVIEWS.md):
    // the pellet cap is its own row again, apart from the unlimited hay.
    //
    // This is the second hub after gerbil to reverse the hub-loses default.
    // The old hub was the only page in the set citing the RSPCA, and the
    // reader graded it the densest page there. The solid roof and the birds
    // of prey behind it, the deep dig layer over a solid floor, safe-wood
    // branches and staggered platforms, the case against a glass tank, and
    // coprophagy as a nutritional requirement all moved into the tank setup
    // and feeding guides first, with the RSPCA cited there; the rows below
    // copy them from those articles.
    //
    // What the hub lost, because a deep dive carried the better figure: the
    // cage (24x18x36, against PetMD's 28x18x28 for a pair, now the setup
    // guide's), bar spacing (half an inch, which was right, but the setup
    // guide said an inch and now says PetMD's half), temperature (60 to 72°F
    // with a ceiling of 80, three degrees past the health guide's 77°F
    // emergency line), the wheel (12 inches or more, against the setup
    // guide's 11 to 12), the bath medium (chinchilla dust, a flat reversal
    // of the enrichment guide's sand), the bath length (ten to fifteen
    // minutes, against twenty), the pellet portion (a tablespoon, against
    // the feeding guide's 1 to 2), six inches of substrate (a number the
    // RSPCA does not give), and carrot, sweet potato, beetroot and parsnip
    // as an occasional treat, against the health guide's line that even
    // small amounts of carrot can trigger the disease.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal", value: "Restricted in fifteen jurisdictions and banned outright in eight, the most regulated of the small rodents sold as pets.", source: "degu-legal-guide" },
        { label: "Never one", value: "Two minimum, same-sex or neutered, ideally littermates. Isolation is linked to aggression and self-mutilation, a stronger statement than for most rodents.", source: "degu-enrichment-guide" },
        { label: "The cage", value: "About 28 by 18 by 28 inches minimum for a pair, tall and multi-level, in metal with bar spacing no more than half an inch. Solid shelves, not wire. Not a fish tank or glass vivarium: they cannot breathe in one.", source: "degu-tank-setup-guide" },
        { label: "Solid roof", value: "Their wild predators are birds of prey, so movement overhead frightens them. A solid roof rather than open mesh.", source: "degu-tank-setup-guide" },
        { label: "Temperature", value: "Cool, 65 to 70°F, and never toward 77°F. Away from windows, radiators, and direct sun.", source: "degu-tank-setup-guide" },
        { label: "Substrate and wheel", value: "Dust-free aspen or paper bedding with a deep digging area. A solid wheel of 11 to 12 inches; wire wheels catch toes and a small one arches the spine.", source: "degu-tank-setup-guide" },
        { label: "Sand, not dust", value: "Bathing sand two or three times a week, twenty minutes at a time, sifted and topped up rather than left in. The enrichment guide says sand, not chinchilla dust; the cost guide prices dust, and this card follows the enrichment guide.", source: "degu-enrichment-guide" },
        { label: "Chewing", value: "Mineral and lava blocks, untreated wood, cardboard, apple or willow branches. Anything plastic in the cage will be chewed eventually.", source: "degu-enrichment-guide" },
        { label: "Hay", value: "Unlimited grass hay, timothy, meadow, or orchard, at all times. It is the bulk of the diet and what keeps the teeth worn down.", source: "degu-feeding-guide" },
        { label: "Pellets", value: "Measured, not free-fed: roughly 1 to 2 tablespoons per degu daily. Given the choice they eat pellets over hay and lose the fiber they need.", source: "degu-feeding-guide" },
        { label: "Sugar", value: "Fruit, honey, and any sugary treat avoided almost entirely. Degus develop diabetes so readily they are studied as a model for it.", source: "degu-feeding-guide" },
        { label: "Rabbit food", value: "Never. Rabbit pellets carry a coccidiostat that harms degus, and hamster and gerbil mixes are too high in protein and seed.", source: "degu-feeding-guide" },
        { label: "Orange teeth", value: "Healthy teeth look orange. White or pale teeth in an adult are the sign of a problem.", source: "degu-health-issues-guide" },
        { label: "Never the tail", value: "The skin sloughs off under grasping pressure and does not grow back. Scoop by the body.", source: "degu-handling-guide" },
        { label: "Heat stress signs", value: "Rapid or open-mouth breathing, then drooling, then weakness, with tremors or collapse as the severe stage. Move it to the coolest room, cool it gradually, and get to a vet.", source: "small-mammal-temperature-heat-stress-guide" },
        { label: "Budget", value: "$10 to $50 per degu and you need two. Equipment roughly $375 to $520, most of it a 24x24x48 inch multi-level cage at $280 to $360, and an exotic vet check with dental at $80 to $160 a year.", source: "degu-cost-guide" },
        { label: "Lifespan", value: "5 to 8 years in captivity.", source: "degu-cost-guide" },
        { label: "Adult size", value: "5 to 8 inches (12 to 20 cm) body, plus a 4 to 5 inch tufted tail; 6 to 11 oz." },
      ],
    },
    emergencyCard: {
      source: "degu-health-issues-guide",
      callNow: [
        "Rapid or open-mouth breathing, drooling, weakness, or collapse in a warm room: heatstroke, an emergency above about 77°F",
        "A sudden increase in drinking and urination, with weight change or cloudy eyes: diabetes, manageable if caught but never cured",
        "Labored breathing or nasal discharge",
      ],
      soon: [
        "Drooling or a wet chin, dropping food, weight loss, watery eyes: dental disease, usually filed under anesthesia",
        "Red, swollen, or scabbed footpads: switch to solid flooring now, and a vet if it is infected or not improving",
        "Persistent lethargy",
      ],
      vetLine: "An exotics-experienced vet, registered with before you need one, since degus are a newer pet species and the veterinary picture is still filling in.",
    },
    routes: [
      { slug: "degu-cost-guide", line: "$10 to $50 an animal and you need two, the roughly $375 to $520 of equipment the cage dominates, and the annual table where dental sits alongside hay." },
      { slug: "degu-tank-setup-guide", line: "The 28x18x28 minimum for a pair, the solid roof and deep dig layer, why a glass tank is the wrong box, and the 77°F line that is not a comfort figure." },
      { slug: "degu-feeding-guide", line: "Hay first and pellets measured, the sugar rule that is a metabolic limit rather than a caution, the coccidiostat in rabbit pellets, and six reasons a degu stops eating." },
      { slug: "degu-handling-guide", line: "Never solo and never by the tail, what tail slip actually is, and the diurnal schedule that is most of why people pick this species." },
      { slug: "degu-health-issues-guide", line: "Diabetes as the defining risk, molar malocclusion as the most diagnosed dental disorder, bumblefoot from wire, and why orange teeth are the healthy ones." },
      { slug: "degu-enrichment-guide", line: "The research that found degus bathing more on sand a familiar degu used, what that makes the tray, and the priority order that follows." },
      { slug: "degu-legal-guide", line: "Banned in eight jurisdictions and restricted in fifteen, and the list-drafting accident that explains almost every one of them." },
    ],
    buyList: [
      "A tall multi-level cage, 28x18x28 inches at minimum for a pair",
      "At least two degus, ideally littermates",
      "Solid roof rather than open mesh",
      "Solid shelves and ramps, never wire",
      "Safe-wood branches (pear, apple or beech)",
      "Solid exercise wheel, 11 to 12 inches",
      "Deep paper or aspen bedding, plus a dig area",
      "Unlimited grass hay (timothy, meadow, or orchard)",
      "Sugar-free degu or chinchilla pellets, no molasses",
      "Bath house and bathing sand",
      "Mineral or lava chew blocks and untreated hardwood",
      "Ceramic or metal hides and tunnels",
      "Water bottle and food dishes",
      "Digital thermometer for the room",
      "A ventilated, hard-sided carrier",
      "An exotics vet who sees degus",
    ],
    faqs: [
      { q: "Can I keep just one degu?", a: "No. Degus are highly social and need to live in same-sex pairs or small groups. A solitary degu becomes stressed, which shows up as neurotic or aggressive behavior over time, the direct opposite of the solitary Syrian hamster, which must be housed alone." },
      { q: "Why are degus so prone to diabetes?", a: "They're naturally insulin-resistant, with a genetic predisposition toward diabetes that most small mammals don't share. Even small amounts of fruit, carrot, peas, corn, or sugary treats can trigger the disease, and veterinary literature flags the species as one where that predisposition creates real, ongoing management challenges." },
      { q: "Does a degu need sand or dust for bathing?", a: "A sand or dust bath two to three times a week supports healthy coat condition and is a real physiological need, not optional grooming. Bathing sand is generally the gentler, better-suited choice for degus specifically, finer chinchilla dust is a reasonable alternative but was formulated for chinchilla fur." },
    ],
  },
  {
    id: "mouse",
    name: "Mouse",
    emoji: "\u{1F42D}",
    difficulty: "Beginner",
    petType: "Small Mammals",
    image: "/assets/guides/mouse.jpg",
    tagline: "The pocket-sized speedster that's cheap to keep but easy to underestimate!",
    funFact: "A male mouse's strong smell comes down to one specific chemical, trimethylamine, that shows up heavily in his urine and barely at all in a female's or a rat's. It's why an all-male mouse cage needs cleaning far more often than the equivalent rat setup.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Rewritten to the template shape 2026-09-16
    // (docs/HUB_ROUTER_REVIEWS.md). Reconciled 2026-09-15 after the mouse set test
    // (docs/READER_REVIEWS.md).
    //
    // The reader graded the hub C and named the reason precisely: "I would
    // have bought the wrong cage from it." Its bar spacing said "under half an
    // inch" in the prose and the checklist, against a setup guide that puts
    // the maximum safe spacing at a quarter inch (6mm) and warns that even
    // three-eighths is wide enough for a mouse to squeeze through. The hub's
    // number was double the safe one, so a buyer following the landing page
    // loses the animal. That is the most consequential single defect a batch
    // reader has found.
    //
    // Also retired: "mice shouldn't be housed completely alone unless a vet
    // has specifically advised it", which contradicted the enrichment guide's
    // solitary housing for adult males and contradicted itself inside the same
    // section; a coprophagy rate of "roughly six times a day" against the
    // feeding guide's sourced 9.6 falling to 4.7 on a B12-fortified diet; a
    // bedding line of $12 to $20 against $18 to $30 and a vet line of $40 to
    // $80 against $35 to $75; and a checklist listing only a thermometer where
    // two deep dives require a hygrometer. The hub also never mentioned the
    // set's most surprising instruction, which is that a glass tank is the
    // wrong enclosure for this species.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Bar spacing", value: "No more than about a quarter inch (6mm), and 5mm is sometimes recommended. Cages sold for small animals at three-eighths of an inch still let a determined mouse out.", source: "mouse-tank-setup-guide" },
        { label: "A wire cage, not a tank", value: "An aquarium cannot move air, so ammonia builds. Wire sides and top, a solid floor, and top mesh no larger than about 1cm square.", source: "mouse-tank-setup-guide" },
        { label: "Enclosure size", value: "At least 18 by 18 by 10 inches for 2 to 3 mice, with more floor and real climbing room on shelves and levels always the safer default.", source: "mouse-tank-setup-guide" },
        { label: "Bedding", value: "Dust-free paper, about 2 to 4cm deep, far shallower than a hamster's. No cedar, no aromatic pine, no cotton-wool nesting products.", source: "mouse-tank-setup-guide" },
        { label: "Nesting material", value: "A mouse in a room you find comfortable is below its own comfort range. The research puts the useful amount at six to ten grams, more than most pet cages hold.", source: "mouse-enrichment-guide" },
        { label: "Wheel", value: "Solid, axle-free, 6 to 8 inches rather than a hamster's 10 to 12, and not the only enrichment.", source: "mouse-tank-setup-guide" },
        { label: "Temperature and humidity", value: "64 to 79°F and 30 to 70% humidity. Damp, drafts, dust, and poor ventilation all raise respiratory risk.", source: "mouse-health-issues-guide" },
        { label: "Diet", value: "A pellet formulated for mice or rats at 20 to 25% protein, higher than the 14 to 16% a hamster or gerbil needs, which is why the hamster-and-gerbil tub is wrong.", source: "mouse-feeding-guide" },
        { label: "How to feed it", value: "A measured ration once daily, some of it scattered for foraging. Pea-sized pieces of greens, carrot, pepper, or broccoli daily, pulled before they spoil.", source: "mouse-feeding-guide" },
        { label: "Foods to avoid", value: "Grapes and raisins, rhubarb, citrus, chocolate, caffeine, and alcohol are toxic. Garlic, onion, raw beans, and raw potato out, and lettuce reliably causes diarrhea.", source: "mouse-feeding-guide" },
        { label: "Females in groups, males usually alone", value: "Females need same-sex company, and it is not a close call. Adult males frequently fight seriously, so solitary housing is the common answer, which is a reason to think before choosing males.", source: "mouse-enrichment-guide" },
        { label: "Picking one up", value: "Cup both hands and let it walk on; never scruff or lift by the tail tip. They jump roughly 13 inches straight up and 2 feet along, so handle low over something soft.", source: "mouse-handling-guide" },
        { label: "Cleaning", value: "Spot-clean soiled corners often and leave some familiar bedding at a full clean. Stripping the cage makes a male re-mark it harder.", source: "mouse-health-issues-guide" },
        { label: "Adult size", value: "2 to 3 inches (5 to 8 cm) body, plus a 3 to 4 inch tail, at 1 to 1.6 oz." },
        { label: "Budget", value: "$5 to $20 each, and you are buying two or three. A first setup runs roughly $100 to $210, then $10 to $20 a month. A routine exam at an exotics practice is $35 to $75, and not every vet sees mice.", source: "mouse-cost-guide" },
        { label: "Lifespan", value: "1.5 to 2 years, the shortest commitment of almost any small mammal.", source: "mouse-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "mouse-health-issues-guide",
      callNow: [
        "Any breathing change: sneezing, nasal or eye discharge, labored or noisy breathing, an audible chattering",
        "Sudden weight loss",
      ],
      soon: [
        "A new lump anywhere on the body",
        "Dropped food and drooling",
      ],
      vetLine: "Mice decline quickly once a respiratory infection takes hold, and the organism behind most of it sits asymptomatic for a long stretch before flaring. Confirm ahead of time that a practice sees mice.",
    },
    routes: [
      { slug: "mouse-cost-guide", line: "$5 to $20 a mouse and you are buying two or three, $100 to $210 for the cage around them, and $10 to $20 a month after." },
      { slug: "mouse-tank-setup-guide", line: "Why the glass tank that suits a gerbil is wrong here, the quarter-inch bar spacing that keeps a mouse inside, and bedding shallower than you would guess." },
      { slug: "mouse-feeding-guide", line: "Why a hamster pellet is the wrong tub, portions sized to an ounce-and-a-half animal, and the reason eating droppings is a good sign." },
      { slug: "mouse-handling-guide", line: "The cupped-hand pickup, never the tail tip, and why 13 inches of vertical jump changes where you sit down to do it." },
      { slug: "mouse-health-issues-guide", line: "Respiratory disease as the one to watch, mammary tumors, and why stripping the cage makes the smell worse." },
      { slug: "mouse-enrichment-guide", line: "Six to ten grams of nesting material, the number behind it, and why a mouse in a comfortable room is cold." },
    ],
    buyList: [
      "Wire cage, at least 18 by 18 by 10 inches for two or three mice",
      "Bar spacing no wider than a quarter inch (6mm), 5mm better",
      "Solid cage floor, never wire mesh flooring",
      "Dust-free paper bedding, 2 to 4cm deep",
      "Plain shreddable paper and cardboard, six to ten grams of it",
      "Hideout for the nest to go inside",
      "Solid-surfaced axle-free wheel, 6 to 8 inches",
      "Shelves, ramps and levels for vertical space",
      "Mouse or rat formulated pellet at 20 to 25% protein",
      "Shallow chew-resistant dish, for the fresh food",
      "Chew toys",
      "Digital thermometer and hygrometer",
      "Two or three mice, and females if you want them housed together",
    ],
    faqs: [
      { q: "How tight does the bar spacing need to be for a mouse cage?", a: "No more than about a quarter inch (6mm), and tighter still, down to 5mm, is sometimes recommended. That's tighter than most small pet cages, and mice can squeeze through gaps that would safely contain a hamster." },
      { q: "Is a glass tank a good enclosure for a pet mouse?", a: "No, and this is a real difference from gerbil housing. A glass tank can't move enough air, so ammonia builds up inside it. A well-ventilated wire cage is the better choice for mice specifically." },
      { q: "How much protein do mice need?", a: "More than a hamster or gerbil. General maintenance crude protein for a mouse runs 20 to 25%, with breeding or growing mice needing even more depending on strain, well above the 14 to 16% that's adequate for a gerbil." },
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
    // entry, which no deep dive repeats. Vet trips cite the shared
    // small-mammal guides in the sidebar's Health and More list. Reconciled
    // 2026-09-09 for batch D (docs/READER_REVIEWS.md), rewritten to the template
    // shape 2026-09-16 (docs/HUB_ROUTER_REVIEWS.md). The bar spacing row drops
    // the "1 to 1.5 cm" parenthetical the setup guide carries, since 1.5 cm is
    // 0.59 inch and contradicts the half inch it sits beside.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Cage type", value: "A wire cage with a solid sealed base, never a glass tank. A tank traps the ammonia that drives the respiratory disease rats are prone to.", source: "rat-tank-setup-guide" },
        { label: "Cage size", value: "24x24x24 inches is the minimum for a single rat, and you are keeping at least two, so it is a starting point. Cages built for ferrets or chinchillas are usually the right size.", source: "rat-tank-setup-guide" },
        { label: "Bar spacing", value: "About half an inch or less. At three-quarters of an inch an adult can get its head stuck.", source: "rat-tank-setup-guide" },
        { label: "Temperature", value: "66 to 73°F ideal, fine across 64 to 79°F. They cannot sweat or pant, and heat stress becomes a real risk above about 86°F.", source: "rat-tank-setup-guide" },
        { label: "Bedding", value: "Paper or cellulose, changed at least twice a week so ammonia does not build. No sawdust, cedar, or pine.", source: "rat-tank-setup-guide" },
        { label: "Wheel", value: "Solid-surface, at least 12 inches and ideally 14 to 16 for adults, especially males. A small wheel forces an arched spine.", source: "rat-tank-setup-guide" },
        { label: "Company", value: "Never one. Two is a minimum and a small same-sex group is better; single housing is a welfare problem no enrichment fixes.", source: "rat-enrichment-guide" },
        { label: "Enrichment", value: "Seven categories, nesting material, digging substrate, foraging device, climbing structure, tube, hideaway and suspended area, and more categories beat more of one.", source: "rat-enrichment-guide" },
        { label: "Staple diet", value: "A rat-specific pellet or lab block, never pellets made for rabbits, guinea pigs, or hamsters. Vegetables, fruit, grains, and seeds combined under about 10% of the diet.", source: "rat-feeding-guide" },
        { label: "Portions and water", value: "Twice daily, morning and evening, adjusted so a rat finishes what is offered. Water from bottles, more than one per cage.", source: "rat-feeding-guide" },
        { label: "Foods to avoid", value: "Onion, citrus, walnuts, rhubarb, grapes, raisins, chocolate, caffeine, alcohol, raw beans, unripe tomato, green or raw potato, and anything salty or sugary.", source: "rat-feeding-guide" },
        { label: "Handling", value: "Both hands scooping, one under the chest and one under the hindquarters, held close to the body. Never by the tail: the skin shears away. Give a new rat a few days to settle first.", source: "rat-handling-guide" },
        { label: "Respiratory disease", value: "The condition every owner needs to recognize. A survey found 95% of pet ratteries carry the bacterium, there is no cure, and the chronic form rarely allows more than 2 years.", source: "rat-health-issues-guide" },
        { label: "Lumps", value: "Mammary tumors are the commonest, in both sexes, because the tissue runs from chin to tail. Any new lump is a vet visit; spaying a female before 7 months lowers her risk.", source: "rat-health-issues-guide" },
        { label: "Budget", value: "Roughly $250 to $550 for a properly housed pair, the cage $130 to $360 of it. About $20 to $40 a month, and $60 to $110 for a routine exotic-vet exam, per rat.", source: "rat-cost-guide" },
        { label: "Adult size", value: "7 to 10 inches body, plus a 6 to 8 inch scaled tail; 0.8 to 1 lb females, 1 to 1.4 lb males." },
        { label: "Lifespan", value: "2 to 3 years, some to 4.", source: "rat-cost-guide" },
        { label: "Vet trips", value: "A hard-sided carrier ready before it is needed, and the cage mate along when the clinic allows it.", source: "small-mammal-vet-visits-and-travel-guide" },
      ],
    },
    emergencyCard: {
      source: "rat-health-issues-guide",
      callNow: [
        "Labored or noisy breathing",
        "Sneezing that does not resolve",
        "Head tilt",
        "Any new lump",
      ],
      soon: [
        "A sudden behavior change",
        "General lethargy",
      ],
      vetLine: "An exotic vet experienced with rats, found before you need one. A small animal declines fast, so the first list is not a wait-and-see.",
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
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Rewritten to the template shape 2026-09-16
    // (docs/HUB_ROUTER_REVIEWS.md). Reconciled 2026-09-15 after the flying squirrel set
    // test (docs/READER_REVIEWS.md).
    //
    // No shared small-mammal guide names this species, so unlike the other
    // three species in batch P this hub carries no shared-guide rows. The
    // sidebar gained the vet visits and travel guide, which is the closest
    // shared page and the one the sugar glider already carries, and the legal
    // guide, which is this species' own article and was reachable from
    // nowhere in the sidebar because "legal" is not a standard suffix.
    //
    // Retired rather than moved: a cage at $150 to $300 against the cost
    // guide's $120 to $300; sleeping pouches at $30 to $50 against $25 to $50;
    // climbing structure at $25 to $50 against $20 to $50.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Check the law first", value: "A clean legal yes in nine jurisdictions, yes with a string in four (Texas caps you at 25 and forbids selling), and a permit in nineteen, several of which exist for rehabilitators rather than pet owners. Native wildlife, so the state wildlife agency is the one to ask.", source: "flying-squirrel-legal-guide" },
        { label: "The squirrel, and realistically two", value: "$200 to $450 for a hand-raised baby, bought young at 6 to 8 weeks while the bonding window is open. Intensely social: budget for a same-sex pair from the start.", source: "flying-squirrel-cost-guide" },
        { label: "Setup budget", value: "Roughly $200 to $500 for a pair, and most first-year totals land at $500 to $1,000-plus.", source: "flying-squirrel-cost-guide" },
        { label: "Cage size", value: "Roughly 24x24x36 inches, or 30 by 18 by 36, height first, and bigger wherever you can for a pair. Bar spacing no more than half an inch.", source: "flying-squirrel-tank-setup-guide" },
        { label: "Temperature", value: "65 to 75°F, cooler than a glider, and they struggle with heat, so never much past 80°F. Away from drafts and direct sun.", source: "flying-squirrel-tank-setup-guide" },
        { label: "Light", value: "At least 20 minutes a day of natural daylight or full-spectrum light, since they make some vitamin D through the skin. This sits beside dietary calcium and D3 as the prevention for bone disease.", source: "flying-squirrel-tank-setup-guide" },
        { label: "The wheel", value: "A hamster or rat wheel is dangerous: the center axle bar can injure the spine or tail mid-run. Solid, axle-free, at least 12 inches across.", source: "flying-squirrel-tank-setup-guide" },
        { label: "Where they sleep", value: "Pouches or a nest box hung high, lined with shredded paper or fleece, and more than one resting spot even for a pair, since they den communally. A solid floor with a washable liner under it all.", source: "flying-squirrel-tank-setup-guide" },
        { label: "The diet, in one line", value: "A pelleted rodent-block staple, fresh produce daily, and a protein source several times a week: mealworms, crickets, a little cooked chicken or egg. Nuts, seeds, and dried fruit are occasional treats, not the base.", source: "flying-squirrel-feeding-guide" },
        { label: "When to feed", value: "In the evening. Strictly nocturnal, so a morning feeding misses the appetite window entirely.", source: "flying-squirrel-feeding-guide" },
        { label: "The ratio that matters", value: "Calcium to phosphorus roughly 2:1. Nuts and seeds at wild-forager frequency produce weight and calcium problems fast. No chocolate, dairy, candy, or anything processed or salted.", source: "flying-squirrel-feeding-guide" },
        { label: "Water", value: "A bottle mounted to the cage, sipper tube checked daily.", source: "flying-squirrel-feeding-guide" },
        { label: "Metabolic bone disease", value: "The most common serious problem, almost entirely from a calcium-poor, nut-heavy diet. Early signs are lethargy, reduced appetite, and reluctance to climb; then hind-limb weakness, tremors, fractures, seizures.", source: "flying-squirrel-health-issues-guide" },
        { label: "Teeth", value: "Rootless incisors that grow for life. Gnawing material is a requirement, with an eye on tooth length and alignment.", source: "flying-squirrel-health-issues-guide" },
        { label: "Bonding starts in a pouch", value: "Carried against your body several hours a day before hands-on interaction, over 2 to 8 weeks. Handle at night, in a warm room: a startled, unbonded squirrel glides farther than you expect and may nip.", source: "flying-squirrel-handling-guide" },
        { label: "They hide illness", value: "A prey animal that shows nothing until a condition is advanced. Slightly quieter or eating slightly less can already be real.", source: "flying-squirrel-health-issues-guide" },
        { label: "Sourcing", value: "Some states turn on where the individual animal came from, and the permit picture varies by state; the legal guide's map settles it before you buy.", source: "flying-squirrel-legal-guide" },
      ],
    },
    emergencyCard: {
      source: "flying-squirrel-health-issues-guide",
      callNow: [
        "Reduced appetite, lethargy, or any change in coordination, at the first sign",
        "Hind-limb weakness or tremors, the middle stage of metabolic bone disease",
        "Fractures, paralysis, or seizures, the advanced stage",
      ],
      soon: [
        "Obesity from a nut-and-seed-heavy diet: correct the diet at home, and confirm the adjustment with a vet",
      ],
      vetLine: "Caught early, bone disease is treatable with corrected calcium, vitamin D3, and light exposure under veterinary guidance. Prevention is a rodent-block staple with calcium and D3 from the start.",
    },
    routes: [
      { slug: "flying-squirrel-cost-guide", line: "$200 to $450 a squirrel and you need two, $200 to $500 of cage, and the legal check that comes first." },
      { slug: "flying-squirrel-tank-setup-guide", line: "Tall not wide, half-inch bar spacing, 65 to 75F, and the axle-free wheel that is not optional." },
      { slug: "flying-squirrel-feeding-guide", line: "Rodent block as the base, the 2:1 calcium ratio, and why a nut-and-seed diet is the trap." },
      { slug: "flying-squirrel-handling-guide", line: "Bonding starts in the pouch at 6 to 8 weeks, and what a startled glider does in an open room." },
      { slug: "flying-squirrel-health-issues-guide", line: "Metabolic bone disease first, then the teeth, and why a quieter squirrel is already a sick one." },
      { slug: "flying-squirrel-enrichment-guide", line: "What transfers from the sugar glider, what does not, and why the gnawing is the difference." },
      { slug: "flying-squirrel-legal-guide", line: "Native wildlife rather than exotic pet, state by state, from a $2 permit to an outright ban." },
    ],
    buyList: [
      "A tall aviary-style cage, 24x24x36 inches at the floor and bigger for a pair",
      "Half-inch bar spacing, or narrower",
      "A solid, axle-free wheel at least 12 inches across",
      "Several sleeping pouches or a nest box, hung high",
      "Fleece hammocks and sleep sacks at varied heights",
      "Branches, ropes and climbing structure at varying angles",
      "A washable cage liner rather than loose bedding",
      "A bonding pouch you can carry against your body",
      "Rodent-block staple food",
      "A calcium and vitamin D3 supplement",
      "A full-spectrum light, or a spot with 20 minutes of daylight a day",
      "Gnawing material, since the incisors never stop growing",
    ],
    faqs: [
      { q: "What size cage does a flying squirrel need?", a: "A minimum of roughly 24x24x36 inches, or 30x18x36. Either way, prioritize height over floor space, this is a climbing, gliding animal, and bigger than the stated minimum is always better, especially for a pair or small group." },
      { q: "What do pet flying squirrels eat?", a: "A base of high-quality rodent-block pellets, supplemented daily with fresh produce and a protein source (mealworms, crickets, or a little hard-boiled egg or chicken) several times a week, plus a calcium and vitamin D3 supplement. Nuts and seeds are best treated as occasional treats rather than a staple, even though that's what people picture first." },
      { q: "What is the most common serious health issue in pet flying squirrels?", a: "Metabolic bone disease. It's almost entirely diet-driven, caused by a calcium-poor, phosphorus-heavy diet, typically one built too heavily around nuts and seeds without calcium and vitamin D3 correction, and it's the same underlying risk that makes sugar glider nutrition so unforgiving." },
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
    // Reconciled 2026-09-14 for batch H (docs/READER_REVIEWS.md), rewritten to
    // the template shape 2026-09-16 (docs/HUB_ROUTER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Never just one", value: "A same-sex pair or sibling group. Introductions between unfamiliar adults frequently fail, which is the hardest part of keeping them.", source: "gerbil-handling-guide" },
        { label: "Enclosure", value: "A glass aquarium with a mesh lid, not a wire cage, since wire cannot hold deep bedding. A 20-gallon long is the minimum for a pair; a 40-gallon breeder, about 36 by 18 by 16 inches, is the better target.", source: "gerbil-tank-setup-guide" },
        { label: "Digging depth", value: "6 to 10 inches at minimum, so a pair builds real tunnels. The most commonly under-delivered part of gerbil care.", source: "gerbil-tank-setup-guide" },
        { label: "Substrate", value: "Aspen and paper bedding with some hay worked in holds tunnel shape. No cedar, no aromatic pine, no scented bedding, no fluffy cotton nesting material.", source: "gerbil-tank-setup-guide" },
        { label: "Humidity and temperature", value: "Humidity below 40% with good ventilation: above 50% is where the sore red nose starts. Room temperature, 65 to 75°F.", source: "gerbil-tank-setup-guide" },
        { label: "Wheel", value: "Solid-surface, 8 inches minimum and 10 to 12 better. Wire rungs injure.", source: "gerbil-tank-setup-guide" },
        { label: "Cleaning", value: "Keep some old nesting material aside during a cleanout and put it back. A fully fresh-smelling tank can set cage mates fighting.", source: "gerbil-tank-setup-guide" },
        { label: "Staple diet", value: "A uniform pellet or lab block at 18 to 20% protein and fat at or under about 4%. Seed mixes fail because gerbils eat the sunflower seeds and leave the rest.", source: "gerbil-feeding-guide" },
        { label: "Portion", value: "Roughly 5 to 8 grams, about a tablespoon, per adult per day, once daily. Vegetables every other day, fruit as an occasional treat. Gerbils under 6 months and nursing females need more.", source: "gerbil-feeding-guide" },
        { label: "Foods to avoid", value: "Grapes and raisins, rhubarb, chocolate, onion and garlic, avocado, raw potato, raw kidney beans, and apple seeds, plus processed human food and dairy.", source: "gerbil-feeding-guide" },
        { label: "Sand bath", value: "Chinchilla sand, not the finer dust, a couple of times a week rather than left in. Plus cardboard, seagrass, and untreated hardwood to gnaw.", source: "gerbil-enrichment-guide" },
        { label: "Never by the tail", value: "Grasping pressure strips the skin, and the bare portion has to be amputated. Scoop by the body, low over a surface.", source: "gerbil-handling-guide" },
        { label: "Diarrhea", value: "Tyzzer's disease is the most common infectious disease here and kills quickly. Ruffled fur, hunched posture, poor appetite and diarrhea: a vet immediately.", source: "gerbil-health-issues-guide" },
        { label: "Past two years", value: "Head tilt from a growth in the ear canal occurs in half of gerbils over two, and tumors run at 25 to 40%, most of them the belly scent gland in males and ovaries in females.", source: "gerbil-health-issues-guide" },
        { label: "Legal check", value: "Banned in California, which restricts the whole rodent order, and in Hawaii. Legal in the other 50 of 52 jurisdictions.", source: "gerbil-legal-guide" },
        { label: "Budget", value: "$5 to $50 each and you need at least two, roughly $150 to $350 to set up a pair, about $10 to $20 a month.", source: "gerbil-cost-guide" },
        { label: "Lifespan", value: "2 to 3 years.", source: "gerbil-cost-guide" },
        { label: "Adult size", value: "4 to 5 inches (10 to 13 cm) body, plus a furred tail of similar length; 2 to 4 oz." },
      ],
    },
    emergencyCard: {
      source: "gerbil-health-issues-guide",
      callNow: [
        "Diarrhea, with ruffled fur, a hunched posture, or poor appetite: Tyzzer's disease kills quickly",
        "A tail stripped of its skin, which needs amputating before infection sets in",
      ],
      soon: [
        "A lump along the belly midline",
        "A head tilt",
        "Dropped food or drooling",
        "A nose that stays red or bloody after the humidity has been brought under 40%",
      ],
      vetLine: "Diarrhea in a gerbil is an emergency. The second list is a prompt visit, not a wait, and a red nose is a humidity fix first.",
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
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
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
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
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
    // encyclopedia entry, which no deep dive repeats. No row cites the shared
    // small mammal guides; they sit in the sidebar's Health and More list.
    // Rewritten to the template shape 2026-09-16 (docs/HUB_ROUTER_REVIEWS.md).
    // The old hub put Wobbly Hedgehog Syndrome at 1 in 3, ten times the
    // figure in the health guide written to correct it, and its cold floor at
    // 65°F against the deep dives' 72. Reconciled 2026-09-14 for batch G
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal check", value: "California, Georgia, Hawaii, Pennsylvania, Washington DC, and New York City will not let you keep one, with no permit to apply for. New Jersey has a permit and you need it. Maine and Wisconsin are not permit states, whatever the internet says.", source: "hedgehog-legal-guide" },
        { label: "Enclosure", value: "At least 2 by 3 feet of solid floor, never wire, with roughly three-quarters of it filled with hides and enrichment. Long and wide rather than tall: hedgehogs are poor climbers and get hurt falling.", source: "hedgehog-tank-setup-guide" },
        { label: "Temperature", value: "75 to 85°F, inside a workable 72 to 90°F, from a ceramic heat emitter on a thermostat. Below about 72°F a hedgehog can attempt to hibernate, which can kill it. No light-emitting heat bulbs.", source: "hedgehog-tank-setup-guide" },
        { label: "Humidity and light", value: "Under 40%. Dim light on a consistent 12-hour cycle for a nocturnal animal.", source: "hedgehog-tank-setup-guide" },
        { label: "Substrate", value: "Recycled paper bedding, aspen, or fleece liners, 3 to 4 inches deep where it burrows. Nothing dusty, scented, or with loose fibers that trap toes.", source: "hedgehog-tank-setup-guide" },
        { label: "Wheel", value: "A solid-surface wheel of 10.5 to 12 inches, essential not optional, and cleaned daily: they run and defecate at the same time. Never wire or mesh.", source: "hedgehog-tank-setup-guide" },
        { label: "A hide", value: "The most commonly missing item: 84 percent of animals in a 2024 owner survey had none. A hideout plus a snuggle sack gives it somewhere dark to sleep through the day.", source: "hedgehog-enrichment-guide" },
        { label: "Living alone", value: "Solitary. Adults housed together fight, so solo housing is the correct answer, never a compromise.", source: "hedgehog-enrichment-guide" },
        { label: "Feeding schedule", value: "Once daily in the evening, water available around the clock. Roughly 2 to 3 teaspoons of a protein base plus 1 to 2 teaspoons of chopped produce, adjusted by body condition.", source: "hedgehog-feeding-guide" },
        { label: "Base diet", value: "A hedgehog-specific kibble or a low-fat cat food, roughly 30 to 50% protein and 10 to 20% fat. Insects are a supplement: 5 to 6 mealworms or 1 to 2 crickets, 2 to 3 times a week.", source: "hedgehog-feeding-guide" },
        { label: "Foods to avoid", value: "Avocado is toxic. Raw meat, raw eggs, and dairy cause real problems, and nuts, seeds, and hard raw vegetables are choking hazards.", source: "hedgehog-feeding-guide" },
        { label: "Not eating", value: "Roughly 24 hours is the limit before a vet visit. A newly acquired hedgehog gets closer to 2 nights, since some stress refusal is expected. Check fecal output, not bowl level.", source: "hedgehog-feeding-guide" },
        { label: "Picking one up", value: "Scoop from underneath with flat or cupped hands and let the ball unroll on its own time. Never force a ball open. Huffing and balling are reflexes, not aggression.", source: "hedgehog-handling-guide" },
        { label: "Quilling and self-anointing", value: "Baby quills go at about a month and a heavier round lands around 4 months, with grumpiness that passes within a month. Foaming saliva over its own quills after a new smell is normal, not poisoning.", source: "hedgehog-handling-guide" },
        { label: "Quarantine", value: "At least two weeks for any new arrival, which is how mites are kept out.", source: "hedgehog-health-issues-guide" },
        { label: "Budget", value: "$100 to $300 for the hedgehog, roughly $200 to $400 for the setup, about $20 to $40 a month plus heating. An exotic vet visit is $80 to $200, and an emergency fund of $500 or more is reasonable.", source: "hedgehog-cost-guide" },
        { label: "Lifespan", value: "3 to 6 years typically, some to 8 to 10.", source: "hedgehog-cost-guide" },
        { label: "Adult size", value: "5 to 9 inches (13 to 23 cm); 8 to 24 oz." },
      ],
    },
    emergencyCard: {
      source: "hedgehog-health-issues-guide",
      callNow: [
        "Any wobbling or change in coordination",
        "Difficulty fully curling into a ball",
        "Wheezing, nasal discharge, and lethargy",
        "A body that feels cold, which may be a hibernation attempt: warm it gradually on the way",
      ],
      soon: [
        "Crusting or flaking skin and quill loss",
        "Scaly patches near the base of the quills, which can spread to people",
      ],
      vetLine: "Always see a vet for wobbling or coordination changes, since cold-related sluggishness, minor strokes, and tumors look similar and are far more treatable.",
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
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
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
    // encyclopedia entry, which no deep dive repeats. No row cites the shared
    // small mammal guides; they sit in the sidebar's Health and More list.
    // Built 2026-09-14 for the sugar glider set test (docs/READER_REVIEWS.md),
    // rewritten to the template shape 2026-09-16 (docs/HUB_ROUTER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal check", value: "Illegal in California, Alaska, Hawaii, the District of Columbia, and New York City, effectively illegal in Pennsylvania, permit-required in New Jersey, import-permit in New Mexico. Georgia, Massachusetts, and Wyoming do not ban them, whatever the internet says.", source: "sugar-glider-legal-guide" },
        { label: "Never one glider", value: "Colonial, so two minimum, and solitary housing is a major welfare risk by veterinary consensus. Neutering males avoids breeding and most of the scent marking.", source: "sugar-glider-enrichment-guide" },
        { label: "Cage size", value: "At least 30 by 18 by 36 inches for a pair, and 24 by 24 by 48 or more is the current advice. Height first: this is a climbing, gliding animal.", source: "sugar-glider-tank-setup-guide" },
        { label: "Bar spacing", value: "No more than half an inch. Young gliders squeeze through wider gaps.", source: "sugar-glider-tank-setup-guide" },
        { label: "Temperature", value: "75 to 88°F, in a consistently warm room away from drafts and direct sun. No humidity control, no UVB, ordinary lighting.", source: "sugar-glider-tank-setup-guide" },
        { label: "Cage floor and cover", value: "A solid bottom with washable liners rather than loose bedding. Fleece over the top, back, and sides helps a new glider feel secure.", source: "sugar-glider-tank-setup-guide" },
        { label: "Wheel", value: "A hamster or rat wheel is dangerous, not just the wrong size: the center axle bar can injure a glider's spine or tail. An axle-free design built for gliders.", source: "sugar-glider-tank-setup-guide" },
        { label: "Sleeping pouch", value: "High in the cage, matching the preference for elevated resting spots. A bonding pouch doubles as it and starts the taming.", source: "sugar-glider-tank-setup-guide" },
        { label: "Climbing routes", value: "Branches at varied heights and angles, ropes, and gaps short enough to glide. The test is getting bottom to top and across the cage without touching the bars.", source: "sugar-glider-enrichment-guide" },
        { label: "Diet split", value: "Roughly one-third pelleted kibble, one-third a nectar or sap mix, one-third insects every other day, plus a calcium multivitamin and fresh produce. Leadbeater's, BML, HPW, and Critter Love are the vet-endorsed formulas.", source: "sugar-glider-feeding-guide" },
        { label: "Portion and timing", value: "Roughly 15 to 20% of body weight daily, in the evening, since gliders are nocturnal. Adult males weigh 100 to 160 grams, females 80 to 130. Fruit stays a small portion.", source: "sugar-glider-feeding-guide" },
        { label: "Calcium", value: "A 2:1 calcium-to-phosphorus target and a glider-specific calcium and D3 multivitamin, not a reptile vitamin, because fruit and insects run calcium-poor. Dust the insects.", source: "sugar-glider-feeding-guide" },
        { label: "Foods to avoid", value: "Chocolate, dairy, canned fruit, yogurt drops, peanut butter, and candy. High-oxalate foods that block calcium absorption: raspberries, strawberries, blackberries, spinach, carrots, beets, pears, lettuce, figs, collard greens.", source: "sugar-glider-feeding-guide" },
        { label: "Bonding", value: "Not direct handling. A glider bonds by being carried against your body in a pouch until it learns your scent, after several days of settling in, then one to two hours a day. Keep the room above roughly 68°F: they chill easily.", source: "sugar-glider-handling-guide" },
        { label: "Crabbing", value: "A loud buzzing chatter means frightened. A restrained glider bites, and the bite can be deep.", source: "sugar-glider-handling-guide" },
        { label: "Budget", value: "$200 to $500 each and you need two, so $500 to $1,200 for a pair with setup and $30 to $60 a month. An exotic vet visit is $75 to $200, neutering $100 to $200, and at least $200 in reserve.", source: "sugar-glider-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years in captivity.", source: "sugar-glider-cost-guide" },
        { label: "Adult size", value: "5 to 6 inches (13 to 15 cm) body." },
      ],
    },
    emergencyCard: {
      source: "sugar-glider-health-issues-guide",
      callNow: [
        "Hind-limb weakness, or trembling, at the first sign",
        "Difficulty climbing",
        "Fractures or seizures, the advanced signs",
        "Chewing at its own skin or tail",
      ],
      soon: [
        "Weight gain on a diet heavy in fat or sugar: correct it at home, and confirm the adjustment with a vet",
      ],
      vetLine: "Caught early, hind-limb weakness is treatable with corrected calcium, vitamin D3, and a diet fix. The real fix is a balanced diet from the start.",
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
