export const lizardGuides = [
  {
    id: "ackie-monitor",
    name: "Ackie Monitor",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Lizards",
    image: "/assets/guides/ackie-monitor.jpg",
    tagline: "The miniature Komodo dragon with a huge personality!",
    seoTitle: "Ackie Monitor Care Guide: Setup, Diet, and Handling",
    seoDescription: "Ackie monitors need more room than most expect: a 5x2.5x4 foot enclosure, a very hot basking surface, deep burrows, and why rodents are the feeding mistake.",
    funFact: "Ackie monitors 'taste' the air constantly with their forked tongues, using their Jacobson's organ to detect prey scent, just like their giant Komodo cousins!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Hygiene cites the shared reptile guides in the
    // sidebar's Health and More list. Rewritten to the template shape
    // 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Reconciled 2026-09-15 after the ackie monitor
    // set test (docs/READER_REVIEWS.md). Difficulty follows the
    // encyclopedia entry, which the same pass moved from Advanced to
    // Intermediate: ReptiFiles rates the species Intermediate and the
    // handling guide already said so, leaving the encyclopedia and the
    // old hub as the only two pages claiming Advanced.
    //
    // The old hub disagreed with the setup and cost guides on almost every
    // number it carried, and all of them are gone rather than moved: the
    // enclosure (6x3x3 ft for a pair, against ReptiFiles' 5 by 2.5 by 4 feet
    // for one adult, which is the setup guide's figure), the basking surface
    // (120 to 150°F in two rows and 130 to 150°F in a third, against 130 to
    // 170), the cool side (80 to 85°F against 75 to 80), and five prices
    // that each differed from the cost guide's table: UVB, the basking bulb,
    // the substrate, the enclosure, and the thermometer gun.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal", value: "40 of 52 jurisdictions place no restriction. Washington DC, Hawaii, New York City, and New Mexico rule it out as a lizard or a monitor generally; New Jersey, Rhode Island, Maine, and West Virginia want a permit.", source: "ackie-monitor-legal-guide" },
        { label: "Day one", value: "Quarantine a new ackie until it has cleared two separate clean fecal checks before it joins an established collection.", source: "ackie-monitor-health-issues-guide" },
        { label: "Enclosure", value: "5 feet long by 2.5 wide by 4 tall minimum for a single adult, larger than the old 4x2x2 standard, because this is one of the most active lizards kept.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Basking surface", value: "130 to 170°F on the stone, measured with an infrared thermometer. Below about 130°F is too cool to synthesize vitamin D, and most keepers under-heat, so the hotter end is the safer mistake. Cool side 75 to 80°F.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Retes stack", value: "Stacked shelves or tiles under the lamp so the ackie picks its own spot along the gradient. With the substrate dam, this is what separates adequate from good.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Substrate", value: "12 to 24 inches of a soil and sand mix that holds a burrow, behind a dam tall enough to hold it, with a damper dig zone so the humid tunnels do not wet the whole arid enclosure. Bark-only or pure sand collapses.", source: "ackie-monitor-tank-setup-guide" },
        { label: "UVB", value: "A 12% desert T5 HO over roughly half the enclosure, targeting a basking UVI of 4.0 to 6.0, higher than most lizards need, with a bright daylight LED, replaced every 12 months.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Feeding schedule", value: "Daily and unlimited up to about 6 months, then every other day, what it finishes in 5 to 10 minutes. Off food usually means dehydration, a shed, a cool basking spot, or parasites.", source: "ackie-monitor-feeding-guide" },
        { label: "Staple food", value: "Gut-loaded black soldier fly larvae, crickets, discoid and dubia roaches, grasshoppers, silkworms, sized to the width of the head. Mealworms and superworms occasionally.", source: "ackie-monitor-feeding-guide" },
        { label: "Not rodents", value: "A rodent-heavy diet is directly linked to the fatty liver that shortens more captive monitor lives than almost anything else. Eggs, quail chicks, and young mice as rare treats.", source: "ackie-monitor-feeding-guide" },
        { label: "Supplements", value: "A light calcium dusting on most feeders at each feeding, skipping calcium-rich isopods and hornworms, and a multivitamin with true vitamin A occasionally rather than weekly. Gut-load every feeder at least 24 hours.", source: "ackie-monitor-feeding-guide" },
        { label: "Weigh it weekly", value: "Wild ackies burn far more than a captive one can, and they are strongly food-motivated. A kitchen scale weekly.", source: "ackie-monitor-health-issues-guide" },
        { label: "Handling", value: "Never grab from above or chase one out of a hide. Let it climb onto you, with tong-feeding as the bonding tool. Fast, and it scratches or nips if startled.", source: "ackie-monitor-handling-guide" },
        { label: "Enrichment", value: "Burrow depth first, then footprint and height, then puzzle feeding, then the humid dig zone, then climbing and rock stacks.", source: "ackie-monitor-enrichment-guide" },
        { label: "Budget", value: "$150 to $450 for the monitor, red ackies at the top. Setup $800 to $1,500 or more, then $40 to $80 a month, most of it feeders and bulbs. A routine exam is $50 to $100.", source: "ackie-monitor-cost-guide" },
        { label: "Adult size", value: "Around 2 feet (0.6 m) typical, reported from 17.3 inches (44 cm) to 30 inches (76 cm)." },
        { label: "Lifespan", value: "15 to 20 years on a demanding setup.", source: "ackie-monitor-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap after any contact, keep the lizard out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "ackie-monitor-health-issues-guide",
      callNow: [
        "Swollen limbs, soft or malformed bones, lethargy, and difficulty moving normally (metabolic bone disease). Always see a vet. A disease of neglect, and one a properly kept ackie should never develop",
        "Decreased appetite, lethargy, weight loss, and irregular stool (internal or external parasites). See a vet for diagnosis and treatment",
        "Impaction, which can become a genuine emergency if severe, linked to inappropriate substrate ingestion or temperatures too low to support proper digestion",
        "Respiratory infection, linked to incorrect temperature or humidity. Always see a vet",
        "A month of feeding adjustment that produces no weight change in an overweight monitor",
      ],
      vetLine: "Nearly everything here comes back to building the ambitious setup this species needs. Weak or absent UVB combined with poor calcium supplementation is the direct cause of MBD, the most serious and most preventable condition on the list. An enclosure too small to support this species' natural activity level contributes directly to obesity. And getting temperature and substrate right prevents both impaction and digestive issues.",
    },
    routes: [
      { slug: "ackie-monitor-cost-guide", line: "$150 to $450 for the animal, red against yellow, the $800 to $1,500 setup itemized, and why the enclosure rather than the monitor is the real commitment." },
      { slug: "ackie-monitor-tank-setup-guide", line: "The 5 by 2.5 by 4 foot minimum, a basking surface hotter than almost any other pet lizard's, two feet of diggable substrate, and what a Retes stack is for." },
      { slug: "ackie-monitor-feeding-guide", line: "Daily for juveniles and every other day after, the insect staples worth building on, why rodents are the mistake, and six reasons an ackie stops eating." },
      { slug: "ackie-monitor-handling-guide", line: "A lizard that does backflips after crickets, tong-feeding as the bonding tool, and the body language that says stop before it bolts." },
      { slug: "ackie-monitor-health-issues-guide", line: "MBD as a disease of neglect, obesity as the captivity-specific risk, the weekly kitchen scale, and impaction from substrate and cold." },
      { slug: "ackie-monitor-enrichment-guide", line: "Eight of eight monitors opening a puzzle tube in ten minutes on the first try, what that evidence does and does not cover, and the burrow depth that outranks it." },
      { slug: "ackie-monitor-legal-guide", line: "Legal in 40 of 52 jurisdictions, the four places no lizard or no monitor qualifies, and the Colorado latitude clause the ackie's range sits right on." },
    ],
    buyList: [
      "A 5 by 2.5 by 4 foot enclosure at minimum, custom or PVC",
      "Substrate dam tall enough to hold the depth",
      "12 to 24 inches of soil and sand mix",
      "Multiple high-wattage basking bulbs and fixtures",
      "Thermostat",
      "Infrared thermometer gun",
      "T5 HO UVB in the 12% desert range",
      "Bright daylight LED",
      "Retes stack, shelves or tiles",
      "Hides and rock stacks",
      "A separate humid dig zone",
      "Gut-loaded feeder insects, or a roach colony",
      "Reptile calcium powder",
      "A multivitamin with true vitamin A",
      "Kitchen scale for weekly weights",
      "Extraction puzzle feeder",
      "Clicker and target stick",
    ],
    faqs: [
      { q: "What size enclosure does an ackie monitor need?", a: "The minimum for a single adult is 5 feet long, 2.5 feet wide, and 4 feet tall. That is bigger than the older 4x2x2 foot standard still quoted for the species, and the reason is activity level: ackies do not thrive in a modest footprint the way a more sedentary lizard might." },
      { q: "Can I feed my ackie monitor mice or rats?", a: "Only as an occasional treat, never a staple or a weekly habit. Mice and rats are calorie-dense, and a rodent-heavy diet is linked to fatty liver disease in captive monitors." },
      { q: "Why are ackie monitors prone to obesity in captivity?", a: "Their wild activity level burns far more energy than most captive setups allow for, and they are strongly food motivated. The fix is to cut feeding frequency and amount, give a large enclosure that encourages movement, and weigh weekly on a kitchen scale." },
    ],
  },
  {
    id: "tegu",
    name: "Argentine Black and White Tegu",
    emoji: "\u{1F98E}",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/tegu.jpg",
    tagline: "The dog-like mega-lizard that can learn its own name!",
    seoTitle: "Argentine Tegu Care Guide: Law, Setup, and Handling",
    seoDescription: "Check the law before a tegu: Florida ban and the states that gate one, the 8x4x4 enclosure, deep substrate, feeding by age, and handling a lizard up to 5 feet.",
    funFact: "Tegus are one of the only reptiles known to have near-endothermic (warm-blooded) properties. During breeding season, their body temperature rises above ambient temperatures!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the handling
    // guide, which is the only page that names its sources and the spread
    // between them. Salmonella, quarantine and the emergency plan cite the
    // shared reptile guides in the sidebar's Health and More list. Rewritten
    // to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md): the diet
    // row names plants, the handling row no longer keeps "the nearest rule"
    // after the sentence defining it. Reconciled 2026-09-15 after the tegu set test
    // (docs/READER_REVIEWS.md).
    //
    // The old hub said in its own comment that its pricing was unverified,
    // and the reader graded it C-: "a lower resolution copy of the setup,
    // enrichment and health guides, and where it differs it is wrong."
    // Retired rather than moved: "Substrate of 4 to 6 inches minimum"
    // against the setup guide's 12 to 18 inches or more, which the
    // enrichment guide calls "the largest single enclosure choice for the
    // species", a third of what the deep dives demand and priced to match at
    // $60 to $120; brumation as "a natural and necessary part of tegu
    // biology" that you must not "prevent or interrupt", where the handling
    // guide says it "isn't required for a non-breeding pet tegu, and
    // skipping it isn't harmful"; a brumation length of 3 to 5 months
    // against 2 to 4 on two deep dives; basking at "100 to 110 degrees F or
    // higher" against 100 to 115; a warm side of 85 to 90 against ambient in
    // the 90s; a thermostat at $40 to $70 against the cost guide's $17 to
    // $23; a UVB line at $80 to $120 against $65 to $75; a vet check at $70
    // to $120 against a $50 to $135 exam; and a setup table topping out near
    // $1,640 on a page whose own cost guide says the build "often exceeds
    // $1,000 to $3,000". The hub also never gave a humidity figure while
    // blaming husbandry for respiratory infection, and never mentioned that
    // Florida banned acquisition in 2021, which the cost guide treats as the
    // first thing a buyer needs to know. All of that is now sourced to a
    // deep dive or gone.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Check the law first", value: "Florida banned new pet tegus on April 29, 2021. Georgia, Alabama, Louisiana, Hawaii, DC, and New York City ban one; New Mexico and New Jersey want permits; Minnesota allows a permitted breeder's only.", source: "argentine-tegu-legal-guide" },
        { label: "Day one", value: "Quarantine 3 to 6 months on plain paper towel with dedicated tools, the quarantined animal serviced last.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "8 by 4 by 4 feet minimum for an adult male, many keepers go to 10 by 5 by 5 or a room. A hatchling starts around 40 gallons and outgrows it inside a year. The ready-made 8-foot PVC unit is 8x2x2, so adult housing is a DIY build.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Temperature", value: "Basking 100 to 110F, warm ambient in the 90s, cool side around 80F, nights to 65F. A cluster of basking bulbs or a radiant heat panel on a heavy-duty thermostat rated for the wattage.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Humidity and substrate", value: "70 to 80%, from 12 to 18 inches or more of cypress mulch, coconut fiber, or topsoil that holds a burrow, a large water tub, and usually an automatic mister. Tegus dig and brumate in that burrow.", source: "argentine-tegu-tank-setup-guide" },
        { label: "UVB", value: "A 46-inch T5 HO at 12 to 14%, over a quarter to half the length on the warm side, targeting a UVI of 3.0 to 4.0, with a 6500K LED, on a 12 to 14 hour day.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Feeding frequency", value: "By age: daily when young, every other day from one to three years, every third day past three. Adults run to obesity, so weigh yours.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Diet", value: "Insects when young, then pre-killed rodents for protein, never live. Vegetables at every stage and more fruit with age: an all-rodent adult diet is the obesity on the emergency card. Lean meat, fish, and eggs as occasional treats.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Supplements", value: "Calcium without D3 on every meal, a multivitamin weekly, at every age.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Never from your hand", value: "A hungry tegu does not distinguish a finger from food. A bowl, tongs, a puzzle feeder, or a separate feeding container, which teaches it the enclosure is not where food appears.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Handling, the honest version", value: "The dog-like temperament is earned through regular supervised handling and free-roam time. Approach from the side, never from above, and never disturb one in its hide. Unlike a monitor, a tegu can drop its tail, and two males fight.", source: "argentine-tegu-handling-guide" },
        { label: "Two handlers", value: "The rule is one handler per 3 to 4 feet of lizard, and a full-grown Argentine is past it: two people for any job that needs it held still.", source: "argentine-tegu-handling-guide" },
        { label: "Brumation", value: "Roughly 2 to 4 months of slowing, eating less, and burrowing from mid-September, even indoors. Harmless to skip, and handling is closed for that season.", source: "argentine-tegu-handling-guide" },
        { label: "Adult size", value: "3 to 5 feet (90 to 150 cm)." },
        { label: "Budget", value: "$200 to $500 for a black and white, blue, or Chacoan tegu, $700 to $1,200 for rare morphs. Setup often exceeds $1,000 to $3,000, then $40 to $100 a month. A routine exam is $50 to $135.", source: "argentine-tegu-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years, some past 30.", source: "argentine-tegu-cost-guide" },
        { label: "Salmonella", value: "Never clean the enclosure in a kitchen sink or a shared bathtub, and children under 5 do not touch reptiles.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "A healthy adult tolerates one cool night. A day or two below the normal night low is when cold stress and respiratory infection become real.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "argentine-tegu-health-issues-guide",
      callNow: [
        "Weakness, swollen joints or legs, tremors, or soft or fractured bones",
        "Nasal discharge or open-mouth breathing",
        "Any tissue protruding from the vent",
      ],
      soon: [
        "Lethargy and appetite loss outside the 2 to 4 month brumation window from mid-September, when both are normal",
        "Weight loss, diarrhea, and skin issues in an imported or wild-caught animal: a fecal exam and treatment",
        "A rounded, heavy body: obesity is common here, and a vet body-condition check settles the diet",
      ],
      vetLine: "An adult tegu's size makes emergency transport difficult, so find a reptile vet before you need one.",
    },
    routes: [
      { slug: "argentine-tegu-legal-guide", line: "Florida's prohibited list with the dates, the closed grandfather window, and the eight other jurisdictions that ban or gate one." },
      { slug: "argentine-tegu-cost-guide", line: "$200 to $500 for the animal, a build that often exceeds $1,000 to $3,000, and why the enclosure you can buy is not the one you need." },
      { slug: "argentine-tegu-tank-setup-guide", line: "8x4x4 as a floor, 100 to 110F basking, 70 to 80% humidity, 12 to 18 inches of substrate, and the feeding schedule by age." },
      { slug: "argentine-tegu-feeding-guide", line: "Five meals a week as a hatchling to two as an adult, the 60/30/10 adult plate, the skull-sized portion, cooked eggs, and brumation versus a real refusal." },
      { slug: "argentine-tegu-handling-guide", line: "Why the dog comparison is earned rather than marketing, reading a tegu by its size, the bite protocol, and the season handling stops." },
      { slug: "argentine-tegu-health-issues-guide", line: "MBD, respiratory infection, parasites and the obesity this species is genuinely prone to, with what each one looks like." },
      { slug: "argentine-tegu-enrichment-guide", line: "Borrowed monitor problem-solving evidence handled honestly, substrate depth as the biggest decision, and puzzle feeding a lizard that will actually work one." },
    ],
    buyList: [
      "8x4x4ft enclosure at minimum, DIY built or ordered direct from a manufacturer",
      "Cluster of basking bulbs or a radiant heat panel, sized to the enclosure",
      "Heavy duty thermostat rated for that wattage",
      "46 inch T5 HO UVB tube in the 12 to 14% range",
      "6500K LED for brightness and live plants",
      "Enough cypress mulch, coconut fiber or organic topsoil for 12 to 18 inches across an 8 by 4 foot floor",
      "Automatic misting system or fogger",
      "Water tub large enough for an adult to fully enter",
      "Hides at both ends of the temperature gradient",
      "Extraction puzzle board",
      "Clicker and target stick",
      "Calcium without D3, plus a reptile multivitamin",
      "Digital thermometer and hygrometer",
    ],
    faqs: [
      { q: "What size enclosure does an Argentine tegu need?", a: "An adult male needs 8 by 4 by 4 feet at minimum; females need somewhat less, though still substantial space. Experienced keepers often go to 10 by 5 by 5 or a dedicated reptile room. A hatchling can start near 40 gallons, but expect to rehouse it within the first year." },
      { q: "Is it legal to buy an Argentine tegu as a pet?", a: "In most states, yes, tegus aren't federally injurious and most state wildlife codes don't mention them at all. Florida is the major exception: since April 29, 2021, new acquisition of a pet tegu has been banned outright under the state's Prohibited species list." },
      { q: "Should I plan the enclosure around brumation?", a: "Yes. Tegus slow down, eat less, and burrow for 2 to 4 months in cooler seasons, indoors included. That is normal for the species, so give the substrate enough depth to support a long burrow instead of trying to prevent it." },
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
    seoTitle: "Bearded Dragon Care Guide: Setup, Diet, and Health",
    seoDescription: "Bearded dragon care from day one: the 4x2x2 enclosure as the adult minimum, UVB and basking heat, the diet that flips from insects to greens, and vet signs.",
    funFact: "Bearded dragons wave at each other as a sign of submission, basically saying 'Hey, you're the boss!'",
    relatedStory: {
      slug: "chronicles-of-dex-the-bearded-dragon-the-sun-the-glass-and-the-cricket-that-got-away",
      title: "Chronicles of Dex: The Sun, the Glass, and the Cricket That Got Away",
    },
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Lifespan is the exception: it comes
    // from the encyclopedia entry, which no deep dive repeats. Day one,
    // shedding, hygiene, and power outage cite the shared reptile guides in
    // the sidebar's Health and More list, which the set test reported as
    // gaps because the reader never opened them. Reconciled
    // 2026-09-08 after the bearded dragon set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "A new dragon is quarantined 3 to 6 months away from any reptile you already keep, on paper towel, with its own tools and a vet workup inside that window.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "4x2x2 ft, about 120 gallons, and that is the adult minimum, not an upgrade for later.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Basking surface", value: "95 to 110°F for adults, 105 to 115°F for juveniles, measured with an infrared thermometer aimed at the surface itself.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Rest of the gradient", value: "Warm side air about 90°F, cool side 75 to 85°F, nights 65 to 75°F. Heat overnight only if the room falls below 65°F, with a ceramic heat emitter.", source: "bearded-dragon-tank-setup-guide" },
        { label: "UVB", value: "A linear T5 HO tube over about two-thirds of the enclosure, 12 to 18 inches from the basking surface, never behind glass. 10 to 14 hours a day, replaced every 6 to 12 months.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Humidity", value: "30 to 40%.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Floor", value: "Paper towel, newspaper, or tile. No loose sand, calcium sand included.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Diet ratio", value: "Juveniles roughly 80% insects and 20% greens. Adults flip to about 80% greens.", source: "bearded-dragon-tank-setup-guide" },
        { label: "Feeding schedule", value: "Hatchlings 2 to 3 times daily, 1 to 4 months twice daily, juveniles once daily, adults once daily or every other day with greens daily and insects a few times a week.", source: "bearded-dragon-feeding-guide" },
        { label: "Calcium", value: "Gut-load the feeders, then dust with plain calcium: near-daily for juveniles, 2 to 3 times a week for adults, calcium with D3 a couple of times a week, a multivitamin once or twice a week.", source: "bearded-dragon-feeding-guide" },
        { label: "Handling", value: "Wait 7 to 14 days before the first session. Scoop from below with all four feet supported. A black beard means the session is over.", source: "bearded-dragon-handling-guide" },
        { label: "Vet", value: "An annual fecal exam with a sample less than 24 hours old, and a vet check before brumation season.", source: "bearded-dragon-health-issues-guide" },
        { label: "Budget", value: "$400 to $800 to set up, $50 to $108 a month, and an emergency fund of a few hundred dollars.", source: "bearded-dragon-cost-guide" },
        { label: "Adult size", value: "16 to 24 inches nose to tail tip, most adults 18 to 22.", source: "bearded-dragon-growth-weight-checks-guide" },
        { label: "Lifespan", value: "10 to 15 years in captivity." },
        { label: "Shedding", value: "Raise humidity toward the high end during the shed, give rough surfaces to rub on, and never pull loose skin. A 30-minute chin-deep soak at cage temperature loosens retained shed.", source: "reptile-shedding-complete-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the dragon out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "65°F is the normal night low. Below 60°F for more than a day or two, add heat, move the animal, or call the sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "bearded-dragon-health-issues-guide",
      callNow: [
        "Tremors or muscle twitching",
        "Swelling in the jaw or limbs",
        "A juvenile refusing food for 2 to 3 days",
        "An adult refusing food for 1 to 2 weeks outside brumation, or any refusal with lethargy, abnormal stool, or a swollen abdomen",
        "No stool for five or more days",
        "A beard that stays dark for extended periods",
        "Difficulty moving or climbing",
        "Labored or open-mouth breathing",
        "Diarrhea, or stool that's runny or foul-smelling for more than 2 days",
        "Stargazing: the head held tilted up and back",
        "Any skin lesions or discoloration",
        "Swollen or bleeding gums, or cheesy material in the mouth",
        "A toe or the tail tip turning dark, dry, or hard",
        "Eyes swollen or closed for more than 2 days",
        "Blistered, blackened, or peeling skin",
        "Tissue protruding from the vent",
      ],
      vetLine: "A reptile vet, not a general clinic. Never dose an over-the-counter dewormer blind: get a fecal exam and treat what it finds.",
    },
    routes: [
      { slug: "bearded-dragon-cost-guide", line: "$40 to $100 for the dragon, $400 to $800 for the setup around it, and the surgery bill correct husbandry prevents." },
      { slug: "bearded-dragon-shopping-list", line: "Every item in the cart with a price range and the reason it is there." },
      { slug: "bearded-dragon-tank-setup-guide", line: "The full temperature table, UVB distance and replacement, humidity, and the substrate that will not impact." },
      { slug: "bearded-dragon-feeding-guide", line: "A plate that flips from mostly insects to mostly greens with age, gut-loading and calcium dust, the foods to avoid, and brumation versus a vet visit." },
      { slug: "bearded-dragon-safe-foods-guide", line: "Staple greens, occasional foods, the daily salad, and the never-feed list." },
      { slug: "bearded-dragon-handling-guide", line: "Wait 7 to 14 days, scoop from below, and the signals that end a session." },
      { slug: "bearded-dragon-health-issues-guide", line: "Metabolic bone disease, impaction, parasites, yellow fungus, atadenovirus, and the list that means the vet today." },
      { slug: "bearded-dragon-brumation-guide", line: "How to tell brumation from illness, the pre-brumation vet check, and what a normal three months looks like." },
      { slug: "bearded-dragon-growth-weight-checks-guide", line: "Weekly weigh-ins, the growth reference by age, and the 10 percent drop that means a vet." },
      { slug: "bearded-dragon-eggs-and-egg-binding-guide", line: "Females lay without a male: the lay box, the digging window, and when it has become egg binding." },
      { slug: "bearded-dragon-enrichment-guide", line: "Climbing, the dig box, foraging, supervised free-roam, and the priority order." },
    ],
    buyList: [
      "4x2x2 ft PVC enclosure",
      "Linear T5 HO UVB kit (Arcadia 14% Dragon or ReptiSun 10.0)",
      "75W basking bulb and a ceramic dome fixture",
      "Dimming thermostat",
      "Digital thermometer and hygrometer for the cool side",
      "Infrared temp gun for the basking surface",
      "Paper towel or tile for the floor",
      "Cork bark hide for the cool end, and a basking platform",
      "Hammock",
      "Dubia roaches or crickets, and feeding tongs",
      "Plain calcium, calcium with D3, and a multivitamin",
      "Shallow water dish",
    ],
    faqs: [
      { q: "How hot does the basking spot need to be?", a: "95 to 110°F on the basking surface for adults, and 105 to 115°F for juveniles, measured with an infrared thermometer aimed at the actual surface rather than the air. That heat comes from a separate basking bulb, not the UVB tube, which supplies UV but little usable heat on its own." },
      { q: "Why has my bearded dragon stopped eating?", a: "Often it's brumation, a shed, or, in females, a gravid cycle before laying, all normal. It becomes a concern when the enclosure's temperature isn't letting the dragon digest, or when refusal comes with lethargy, abnormal stool, or a swollen abdomen." },
      { q: "What is the most common health problem in pet bearded dragons?", a: "Metabolic bone disease. It comes from too little calcium, inadequate or incorrect UVB, or a diet too high in phosphorus relative to calcium, and juveniles under two years old are hit hardest. Almost every case is preventable with correct lighting and supplementation." },
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
    seoTitle: "Blue Tongue Skink Care Guide: Setup, Diet, and Handling",
    seoDescription: "Northern or Indonesian decides the whole setup: the 4x2x2 enclosure both share, the heat and humidity that split them, feeding by age, and reading a huff.",
    funFact: "Blue tongue skinks give live birth instead of laying eggs, and they are one of the largest skink species kept as pets.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size is the exception: it comes
    // from the encyclopedia entry, which no deep dive repeats. Northern and
    // Indonesian animals are two different husbandry problems under one name,
    // so every row the tank setup guide splits by subspecies stays split here
    // rather than being flattened into one range. Day one and power outage
    // cite the shared reptile guides in the sidebar's Health and More list,
    // which the set tests keep reporting as gaps because the reader never
    // opens them. Rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md), with a legal row and the wild-caught
    // settling window. Reconciled 2026-09-09 after the blue tongue
    // skink set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "Quarantine 3 to 6 months on plain paper towel away from other reptiles, with a vet check and fresh fecal sample within two weeks. The display enclosure gets its deep substrate; quarantine does not.", source: "reptile-quarantine-guide" },
        { label: "Which skink is it", value: "Northerns are almost all captive-bred. Indonesians are mostly wild-caught and commonly carry parasites, which changes almost everything below.", source: "blue-tongue-skink-health-issues-guide" },
        { label: "Enclosure", value: "4x2x2 feet minimum for either type, front-opening PVC over glass since it holds humidity, with a solid hide and a water dish big enough to submerge in.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Basking surface", value: "Northern 105 to 115°F, Indonesian 100 to 105°F, from a halogen or deep heat projector on a thermostat. Cool side 70 to 80°F, nights above roughly 70°F for both.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Humidity", value: "Northern around 40%. Indonesian 60 to 80%, from moisture-retentive substrate, misting, and a larger water bowl.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Floor", value: "4 to 6 inches of a soil mix, roughly 60% topsoil to 40% play sand for a Northern, with leaf litter, sphagnum, or coco fiber added for an Indonesian.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO at 5 to 12% depending on hanging height, over half the warm side, replaced every 12 months, with the skink no closer than about 10 inches. An 11 to 13 hour photoperiod.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Diet ratio", value: "Under about 12 months, 70 to 80% animal matter. Adults shift to 40 to 60% animal protein, 45 to 60% greens and vegetables, 5 to 10% fruit.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Feeding schedule", value: "Babies daily with one fast day a week, juveniles 3 to 4 times a week. For adults, veterinary guidance says every 1 to 3 days while once or twice a week circulates widely; the portion is one skull-sized meal, about 1 to 2 tablespoons.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Supplements and weight", value: "Calcium on the feeders, a multivitamin more sparingly. Weigh weekly on a gram scale: a loss of 7 to 10% of body weight is the urgent threshold.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Settling in", value: "A captive-bred skink settles in about 2 weeks; a wild-caught Indonesian can take up to 2 months, hiding and refusing food. Later, brumation is the biggest normal cause of a skink that stops eating for a few months.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Handling", value: "Leave a new skink 2 to 3 weeks, then 5 minutes a day, adding a minute each time it sits still, up to 15. Come in from the side, slide a hand under, support it along your forearm, never by the tail.", source: "blue-tongue-skink-handling-guide" },
        { label: "Reading the animal", value: "Short huffs mean annoyance, tail flicking irritation, long hisses with a puffed, tilted body aggression. At every step: stop and end the session.", source: "blue-tongue-skink-handling-guide" },
        { label: "Legal check", value: "Cleared in 46 of 52 jurisdictions. Hawaii and the District of Columbia do not allow one, New Jersey and West Virginia require a permit, and Minnesota and Maine attach conditions.", source: "blue-tongue-skink-legal-guide" },
        { label: "Budget", value: "Northerns $150 to $250, morphs to $400 to $700; Indonesians $100 to $250. Setup $330 to $635, then about $41 to $69 a month. A routine exam runs $100 to $150, and a wild-caught Indonesian needs a fecal exam and deworming at purchase.", source: "blue-tongue-skink-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years in captivity, some past 30.", source: "blue-tongue-skink-cost-guide" },
        { label: "Adult size", value: "17-24 inches (43-60 cm)." },
        { label: "Power outage", value: "The night low stays above about 70°F. Below that, add heat, move the animal, or call ahead to a sitter.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "blue-tongue-skink-health-issues-guide",
      callNow: [
        "A soft or rubbery jaw, a kinked spine, tremors, or difficulty walking: bone disease, irreversible once advanced",
        "Nasal or oral discharge, bubbling, open-mouth breathing, or wheezing",
        "Retained shed on the toes or tail, or belly scale rot, that has progressed to infection",
      ],
      soon: [
        "A wild-caught or unspecified-origin skink that has not had a fecal exam and deworming",
      ],
      vetLine: "Early respiratory cases often resolve once temperature and humidity are corrected; advanced ones need antibiotics.",
    },
    routes: [
      { slug: "blue-tongue-skink-cost-guide", line: "What the animal costs, why a Northern costs more than an Indonesian, the setup table, the annual running total, and vet costs." },
      { slug: "blue-tongue-skink-tank-setup-guide", line: "The 4x2x2 ft minimum, and the temperature and humidity split that makes a Northern and an Indonesian two different setups." },
      { slug: "blue-tongue-skink-handling-guide", line: "The bluff display, the huff scale, how to pick a heavy lizard up, and how long a session should run." },
      { slug: "blue-tongue-skink-health-issues-guide", line: "Metabolic bone disease, the parasite load that comes with a wild-caught animal, respiratory infection, obesity, retained shed and scale rot." },
      { slug: "blue-tongue-skink-feeding-guide", line: "Schedule by age, the protein-to-greens flip, the portion size, the toxic list, and eight reasons a skink stops eating." },
      { slug: "blue-tongue-skink-enrichment-guide", line: "The mealworm study that reduced hiding, scatter feeding, the dig box, and the priority order to build in." },
    ],
    buyList: [
      "4x2x2 ft front-opening PVC enclosure",
      "T5 HO UVB kit spanning at least half the warm side",
      "Halogen bulb or deep heat projector, and a basking dome fixture",
      "Thermostat for the heat source",
      "Digital thermometer and hygrometer",
      "Topsoil and play sand, or a coco-fiber-based substrate, 4 to 6 inches deep",
      "Leaf litter or sphagnum moss, for an Indonesian setup",
      "Multiple hides, one at each end of the gradient",
      "A water dish large enough for the skink to fully submerge in",
      "Calcium, low or no phosphorus, and a reptile multivitamin",
      "Gut-loaded feeder insects, and soft-tipped feeding tongs",
      "A gram-accurate scale for weekly weigh-ins",
      "A storage tub for a dig box",
    ],
    faqs: [
      { q: "Do Northern and Indonesian skinks need different temperatures?", a: "Yes, slightly. Northern basking surface should run 105 to 115°F, Indonesian basking surface a bit cooler at 100 to 105°F. Both need a cool side of 70 to 80°F and nighttime temperatures staying above roughly 70°F." },
      { q: "Is the cheaper Indonesian skink the better budget choice?", a: "Not usually. Wild-caught Indonesian skinks frequently need a fecal exam and deworming right after purchase, which Northern buyers typically skip, and they take longer to tame. For a first-time keeper, a captive-bred Northern often works out to a comparable total cost with meaningfully lower risk." },
      { q: "What is the first sign of metabolic bone disease in a blue-tongued skink?", a: "A soft or rubbery jaw is often the first thing owners notice, followed by a kinked spine, tremors, and difficulty walking in more advanced cases. It's caused by inadequate UVB and or calcium. This is a vet situation always, and advanced cases are irreversible, which is exactly why UVB and calcium supplementation matter from day one." },
    ],
  },
  {
    id: "fire-skink",
    name: "Fire Skink",
    emoji: "🦎",
    difficulty: "Beginner",
    petType: "Lizards",
    image: "/assets/guides/fire-skink.jpg",
    tagline: "Dressed in red and gold, and determined to stay underground!",
    seoTitle: "Fire Skink Care Guide: Setup, Humidity, and Feeding",
    seoDescription: "Fire skinks are cheap to buy but a 20-year pet: the 36x18x18 floor, the burrowing mix it lives in, the humidity behind most health problems, and feeding.",
    funFact: "Fire skinks are one of the most brightly colored lizards in the hobby and one of the most rarely seen in their own enclosure. Give one a shallow scattering of substrate and it will vanish; give it the 4 to 6 inches it can actually tunnel through and it will build a burrow system, come out to bask, and behave like a completely different animal.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine and hygiene cite the shared reptile
    // guides in the sidebar's Health and More list. Rewritten to the template
    // shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Reconciled 2026-09-15 after the
    // fire skink set test (docs/READER_REVIEWS.md).
    //
    // The old hub's cost table was roughly $200 short of the cost guide's own
    // total, $380 to $500 against $660 to $720, and it disagreed line by line:
    // the enclosure at $202 to $258 against $280, substrate at $10 to $16
    // against $88 to $99 for the eight or nine bags a 6 inch bed actually
    // takes, and no thermostat line at all on a page whose cost guide calls the
    // thermostat the line people try to skip.
    //
    // Also retired rather than moved: a night drop to 70 to 75F against the
    // setup guide's 70F with 65F acceptable; a flat "yes" on whether UVB is
    // needed against the setup guide's "real benefit though technically
    // optional if diet is properly supplemented"; a UVB replacement interval
    // given as both 12 months and 6 to 12 months on the same page; "metabolic
    // bone disease is the main preventable problem" against the health guide's
    // "less common in this species than in some other lizards"; and a substrate
    // depth the page gave three different ways, 4 to 6 inches in the body, 8 to
    // 10 in its FunFact and 6 to 10 in its FAQ. The FunFact above now carries
    // the setup guide's figure.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "Quarantine 3 to 6 months away from any reptile you already keep, with parasite screening, since most fire skinks in the trade are wild-caught.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "36 by 18 by 18 inches minimum for a single adult, floor space over height. One per enclosure: two males fight.", source: "fire-skink-tank-setup-guide" },
        { label: "Temperature", value: "Ambient 80 to 86°F, a basking spot of 92 to 96°F from a halogen on a dimming thermostat, and a night drop to about 70°F, 65°F acceptable.", source: "fire-skink-tank-setup-guide" },
        { label: "The thermostat", value: "A dimming model for the basking bulb, $25 to $35. A $130 on/off unit is the wrong buy: its maker says not to run a basking bulb on one.", source: "fire-skink-cost-guide" },
        { label: "Humidity", value: "60 to 70% ambient, higher overnight, from misting once or twice daily, moist substrate, and a sphagnum humid hide, on a digital probe hygrometer.", source: "fire-skink-tank-setup-guide" },
        { label: "Substrate, the whole job", value: "4 to 6 inches of a tropical mix, roughly 40% topsoil, 40% coconut fiber, 20% fine sand, under leaf litter. Damp enough to hold a burrow, never waterlogged. No dry sand-only setups.", source: "fire-skink-tank-setup-guide" },
        { label: "UVB", value: "Real benefit, technically optional with proper supplementation: a 5 to 6% tube with the basking area 7 to 10 inches below it, replaced every 12 months.", source: "fire-skink-tank-setup-guide" },
        { label: "Feeding", value: "Adults two to three times a week, juveniles daily to every other day, as many insects as it eats in about five minutes, none wider than its head. Released into the leaf litter so finding them is the activity.", source: "fire-skink-tank-setup-guide" },
        { label: "What to feed", value: "Crickets, dubia and discoid roaches, mealworms, superworms, earthworms, hornworms, silkworms, isopods, varied across the week.", source: "fire-skink-tank-setup-guide" },
        { label: "Supplements", value: "Calcium powder at nearly every feeding, and a reptile multivitamin in the rotation.", source: "fire-skink-tank-setup-guide" },
        { label: "Retained shed", value: "From low humidity, and it constricts toes and tail if left. Fix the humidity and the humid hide at home; retained eye caps or a severe case go to a vet.", source: "fire-skink-health-issues-guide" },
        { label: "Handling, honestly", value: "Skittish, fast, and quick to burrow out of sight: a display animal you occasionally interact with. Never by the tail, which drops under grasping pressure, and low over a soft surface.", source: "fire-skink-handling-guide" },
        { label: "Why you never see it", value: "Semi-fossorial, and hiding looks identical to having nothing to do. Deep damp coconut fiber that holds a tunnel, and cork cover at both ends of the gradient so it never trades temperature for security.", source: "fire-skink-enrichment-guide" },
        { label: "Budget", value: "$25 to $40 for a wild-caught skink, more for captive-bred, which tames better. Setup roughly $554 to $627 with a dimming thermostat, then $40 to $65 a month. An annual exotic checkup, with parasite screening for a wild-caught animal.", source: "fire-skink-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years, a two-decade commitment for a cheap lizard.", source: "fire-skink-cost-guide" },
        { label: "Adult size", value: "12 to 15 inches (30 to 38 cm) including tail." },
        { label: "Hygiene", value: "Wash hands with soap after any contact, keep the skink out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "fire-skink-health-issues-guide",
      callNow: [
        "Open-mouth breathing, mucus, and wheezing",
        "Bloating or no stool: substrate impaction",
        "Retained eye caps, or a severe retained shed after home correction has failed",
        "An open or infected wound where the tail dropped",
        "Soft or swollen limbs or a soft jaw: bone disease, less common here but possible with weak UVB and calcium",
      ],
      vetLine: "Low humidity is behind the respiratory infection and poor shedding that make up most of this species' real risk, and dry substrate behind the impaction.",
    },
    routes: [
      { slug: "fire-skink-cost-guide", line: "$25 to $40 for the skink, $554 to $627 for the setup, and the thermostat line people try to skip." },
      { slug: "fire-skink-tank-setup-guide", line: "36x18x18 as a floor, 92 to 96F basking, 60 to 70%, the 4 to 6 inch mix, and what to feed." },
      { slug: "fire-skink-handling-guide", line: "Why this is not the blue-tongued skink, and why the tail is the part to leave alone." },
      { slug: "fire-skink-feeding-guide", line: "Five minutes of insects scattered in the litter, daily young and twice a week adult, dusted every time, and pinky mice monthly at most." },
      { slug: "fire-skink-health-issues-guide", line: "Respiratory infection, retained shed, impaction, and the humidity underneath all three." },
      { slug: "fire-skink-enrichment-guide", line: "The blue-tongue study where skinks stopped hiding, and what it asks of a burrowing lizard's enclosure." },
    ],
    buyList: [
      "A 36x18x18 inch enclosure as a floor, larger for an active species",
      "Organic topsoil, coconut fiber and fine sand for a 4 to 6 inch mix",
      "Leaf litter or sphagnum moss for the surface, and a humid hide",
      "A T5 HO UVB kit, 5 to 6%",
      "A halogen basking bulb and dome fixture",
      "A dimming thermostat for the basking bulb",
      "A digital probe thermometer and hygrometer",
      "Two hides, one at each end of the gradient, plus cork flats",
      "Calcium with D3 and a reptile multivitamin",
      "Feeder insects, varied, and tongs",
    ],
    faqs: [
      { q: "What size enclosure does a fire skink need?", a: "36 by 18 by 18 inches minimum for one adult, and bigger is worth it for an active species. Floor space beats height. Don't house two fire skinks together, especially two males: real fighting risk." },
      { q: "What does a fire skink enclosure setup cost?", a: "Roughly $554 to $627: a 36x18x18 inch enclosure, T5 UVB kit, basking bulb and dome, dimming thermostat, eight or nine bags of coconut fiber, two hides, and a hygrometer. The enclosure dominates, and the thermostat has to be a dimming model, since an on/off unit's maker says not to run a basking bulb on one." },
      { q: "What causes respiratory infection in fire skinks?", a: "Substrate or overall enclosure conditions running too dry, or occasionally too cold. Watch for open-mouth breathing, mucus, and wheezing. See a vet, this needs professional treatment, and prevention is straightforward, maintain 60 to 70% substrate humidity consistently." },
    ],
  },
  {
    id: "green-anole",
    name: "Green Anole",
    emoji: "\u{1F98E}",
    difficulty: "Beginner/Intermediate",
    petType: "Lizards",
    image: "/assets/guides/green-anole.jpg",
    tagline: "The color-changing little acrobat with a signal flag under its chin!",
    seoTitle: "Green Anole Care Guide: Setup, UVB, and Feeding",
    seoDescription: "Green anoles cost little and die young when kept casually. The 24x24x24 setup, real UVB, humidity from misting, what to feed, and which problems need a vet.",
    funFact: "Green anoles change color between green and brown based on temperature, mood, and stress rather than to match their surroundings, which is why the 'American chameleon' nickname is a misnomer. A stressed or cold anole goes brown; a relaxed, warm one goes green.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Salmonella, quarantine and the emergency plan cite
    // the shared reptile guides in the sidebar's Health and More list.
    // Rewritten to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md).
    // Reconciled 2026-09-15 after the green anole set
    // test (docs/READER_REVIEWS.md).
    //
    // The reader graded the old hub C-, and it lost on every number a buyer
    // acts on. Retired rather than moved: "A well-planted 18x18x24 vertical
    // enclosure works for 1 to 2 green anoles" against a setup guide and a
    // cost guide that both say 24x24x24 for one adult; "A male-female pair or
    // a group of females can be housed together", which is the least safe
    // claim in the set and is settled below; an enclosure line of $80 to $150
    // against the cost guide's $250 to $270 and a UVB line of $50 to $90
    // against $95 to $115, with the hub's tables summing to roughly $210 to
    // $405 against a stated total of $390 to $470; "daytime temperatures of
    // 80 to 85 degrees F" against a cool side of 70 to 77; humidity "60 to
    // 80%" against 60 to 70; and "a consistent 12-hour cycle" against a 10 to
    // 14 hour photoperiod. The hub's diet section was the only feeding content
    // in the set, so it is not simply dropped: a sourced Diet Basics section
    // went into the tank setup guide, which is the standing move for a species
    // with no feeding guide, and it carries the portion figure the hub never
    // had.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Enclosure", value: "24 by 24 by 24 inches minimum for one adult, tall and front-opening with good ventilation, and housed alone: two males is an argument that never resolves, and the loser stops feeding.", source: "green-anole-tank-setup-guide" },
        { label: "Temperature", value: "Basking around 90F, cool side 70 to 77F, nights 65 to 75F, from a 60-watt incandescent in a ceramic dome mounted above the mesh, never resting on it: anoles hang inverted on mesh and burn.", source: "green-anole-tank-setup-guide" },
        { label: "Humidity", value: "60 to 70% by day, higher overnight, from morning and evening misting and a cool-mist humidifier or fogger overnight in dry climates, on distilled water.", source: "green-anole-tank-setup-guide" },
        { label: "UVB", value: "Necessary: a UV index of 3.0 to 4.0 at the basking branch from a ShadeDweller kit or a 5 to 6% T5 HO, with a separate 6500K LED, on a 10 to 14 hour day.", source: "green-anole-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber or a 60% topsoil to 40% coconut fiber blend, about 2 inches deep under leaf litter. No gravel, sand, vermiculite, or pesticide residue.", source: "green-anole-tank-setup-guide" },
        { label: "Climbing at every level", value: "Thin branches and stems at varied angles spanning the full height, so it can thermoregulate by moving up toward the lamp and down. Never a wide flat log for a lizard this size.", source: "green-anole-enrichment-guide" },
        { label: "Feeding", value: "A juvenile daily, as much as it takes; an adult two to three feeders every other day, each slightly smaller than the head. Crickets, dubia and discoid nymphs, red runners, fruit flies, black soldier fly larvae.", source: "green-anole-tank-setup-guide" },
        { label: "Supplements", value: "Gut-load feeders 24 to 48 hours, then a light 50/50 calcium and multivitamin dusting at every feeding. A small animal develops a deficiency fast.", source: "green-anole-tank-setup-guide" },
        { label: "Stuck shed", value: "They shed in pieces, and low humidity leaves patches on the toes and tail that constrict circulation. Raise the misting.", source: "green-anole-health-issues-guide" },
        { label: "Water", value: "Droplets, not standing water: a fine mist on foliage and glass once or twice a day. Keep a shallow dish and do not count on it.", source: "green-anole-enrichment-guide" },
        { label: "Handling", value: "A display animal. If you want a lizard to hold often, this is the wrong species.", source: "green-anole-handling-guide" },
        { label: "Adult size", value: "5 to 8 inches (13 to 20 cm), including the tail." },
        { label: "Budget", value: "$5 to $30 for the anole, most under $15, and roughly $390 to $470 for the setup, the terrarium most of it. $20 to $35 a month, and $50 to $100 for a routine exam, with an emergency visit from $150.", source: "green-anole-cost-guide" },
        { label: "Lifespan", value: "3 to 4 years when kept casually, up to 10 with the setup right. The gap is a setup problem, not a species limit.", source: "green-anole-cost-guide" },
        { label: "The law", value: "Unregulated in 37 jurisdictions and restricted in the southeastern states where it is native. Georgia bars it as a pet regardless of origin, so a captive-bred animal from out of state is in the same position as one from a Georgia yard.", source: "green-anole-legal-guide" },
        { label: "Quarantine", value: "3 to 6 months for a new reptile, on plain paper towel with dedicated tools, serviced last.", source: "reptile-quarantine-guide" },
        { label: "Salmonella", value: "Never clean the enclosure or its equipment in a kitchen sink or a shared bathtub, and children under 5 do not touch reptiles or their environments.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "A healthy adult tolerates a few hours to one cool night. A day or two below the normal night low is when cold stress and respiratory infection become real.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "green-anole-health-issues-guide",
      callNow: [
        "Weakness, trembling, a soft or swollen jaw, and difficulty moving normally",
        "Open-mouth breathing, discharge from the eyes or nostrils, and lethargy",
        "Sunken eyes, wrinkled-looking skin, and lethargy",
        "Any new anole, whether or not you see obvious symptoms, for a fecal exam",
      ],
      vetLine: "Weak UVB and calcium cause MBD, arguably the most dangerous issue on this list given how quickly it can progress in such a small animal. A cold or overly wet enclosure causes respiratory infection. Low humidity causes stuck shed. And insufficient misting causes dehydration. Nearly everything here connects directly back to the setup, and a lizard this small has little margin before a developing problem becomes serious.",
    },
    routes: [
      { slug: "green-anole-legal-guide", line: "Why a native species raises a wildlife question rather than an exotic-pet one, and what to check in your own state." },
      { slug: "green-anole-cost-guide", line: "$5 to $30 for the lizard, $390 to $470 for the enclosure around it, and why the cheap price tag is what drives bad setups." },
      { slug: "green-anole-tank-setup-guide", line: "24x24x24 as a floor, 90F basking with the mesh-burn rule, 60 to 70% humidity, real UVB, and what to feed." },
      { slug: "green-anole-feeding-guide", line: "Two or three insects smaller than the head every other day, dusted every time, water as droplets, and the two feeders to skip." },
      { slug: "green-anole-handling-guide", line: "A display animal rather than a held one, what the handling study actually measured, and never taking the tail." },
      { slug: "green-anole-health-issues-guide", line: "MBD, respiratory infection, stuck shed, dehydration and parasites, and which are vet-now against fix-the-setup." },
      { slug: "green-anole-enrichment-guide", line: "Two null-result studies handled honestly, why the enclosure still gets built out, and the cohabitation answer." },
    ],
    buyList: [
      "24x24x24in front-opening terrarium, minimum, for one anole",
      "Basking bulb and ceramic-socket dome, mounted off the mesh",
      "T5 HO UVB in the 5 to 6% range, or an Arcadia ShadeDweller kit",
      "6500K LED for general brightness and live plants",
      "Coconut fiber and organic topsoil, plus leaf litter",
      "Thin branches and stems at varied angles, running the full height",
      "Live or artificial foliage, densely planted",
      "Digital thermometer and hygrometer combo",
      "Fine mist spray bottle, and a shallow dish you don't count on",
      "Calcium and multivitamin powder, or an all-in-one",
      "Crickets, dubia nymphs or flightless fruit flies, sized to the eye gap",
    ],
    faqs: [
      { q: "What size enclosure does a green anole need?", a: "24 by 24 by 24 inches minimum for one adult, and bigger is better. Semi-arboreal, so go tall and front-opening with good ventilation. House anoles one to an enclosure: they don't coexist peacefully." },
      { q: "Can green anoles live together?", a: "The default is one anole per enclosure, since the standard advice is not to house green anoles together at all. Two males is the version that fails fastest: males are display animals with a dewlap built for territorial signaling, and putting two in a shared space produces continuous confrontation until the loser stops feeding." },
      { q: "Do anoles drink from a bowl?", a: "Mostly not. They take droplets off leaves and glass, so misting once or twice a day is how they hydrate. A standing dish is worth having and should not be your hydration plan." },
    ],
  },
  {
    id: "green-iguana",
    name: "Green Iguana",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/green-iguana.jpg",
    tagline: "A six foot arboreal herbivore sold as a six inch hatchling!",
    seoTitle: "Green Iguana Care Guide: Housing, Diet, and Health",
    seoDescription: "Before you buy a green iguana: the 10x5x6 foot adult enclosure no store sells, a strictly plant diet, the heat and UVB it needs, and a lizard up to 7 feet.",
    funFact: "Green iguanas have a pale scale on the top of the head called the parietal eye. It is a genuine third eye with a lens and a retina, wired to the pineal gland rather than to vision, and it detects shadow moving overhead. It is an early warning system for birds of prey.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Day one, hygiene, and power outage cite
    // the shared reptile guides in the sidebar's Health and More list, which
    // the set tests keep reporting as gaps because the reader never opens
    // them. This species has no feeding guide, so the diet rows cite the
    // health issues and enrichment guides, which is where the diet material
    // actually lives. Rewritten to the template shape 2026-09-16
    // (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Reconciled 2026-09-09 after the green iguana set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "Quarantine 3 to 6 months on plain paper towel away from other reptiles, with a vet check and fresh fecal sample within two weeks. In one facility assessment all eight iguanas carried parasites.", source: "reptile-quarantine-guide" },
        { label: "Adult enclosure", value: "10 feet long by 5 wide by 6 tall minimum, some sources 12 by 6 by 6. No commercial enclosure is large enough; it is a custom walk-in build.", source: "green-iguana-tank-setup-guide" },
        { label: "First enclosure", value: "A juvenile can start in a 4x2x4 foot enclosure or a 40 to 55 gallon tank and outgrows it within the first year. Plan the move rather than being surprised by it.", source: "green-iguana-tank-setup-guide" },
        { label: "Temperature", value: "Basking 100 to 120°F, cool end around 80°F, nights not below the low 70s. Two or three 75 watt halogens heat the juvenile box; the adult branch needs a cluster of roughly six over a sturdy perch.", source: "green-iguana-tank-setup-guide" },
        { label: "UVB", value: "High-output T5 HO UVB is required for survival, replaced every 12 months. Glass blocks it entirely, so a sunny window is never a substitute.", source: "green-iguana-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80%, from misting twice daily and a soaking tub the iguana can fully enter. Chronically low humidity leads to dehydration and kidney disease.", source: "green-iguana-tank-setup-guide" },
        { label: "Floor", value: "2 to 4 inches of coconut husk or large-particle cypress mulch. No sand, gravel, corncob, litter, or shavings.", source: "green-iguana-tank-setup-guide" },
        { label: "Climbing", value: "Two-thirds of the length is tail, and this is a climbing animal: vertical space and sturdy branches by the basking zone, not floor area.", source: "green-iguana-tank-setup-guide" },
        { label: "Diet", value: "Plant-based: leave out insects, dog or cat food, and eggs. A published tolerance allows animal protein at under 5% of an adult's diet, but nothing an iguana needs requires it, and too much protein risks gout.", source: "green-iguana-feeding-guide" },
        { label: "Feeding routine", value: "Whole leaves clipped at height where the animal already is, in more than one place, rotated across the week, dusted with a plant-eater supplement.", source: "green-iguana-enrichment-guide" },
        { label: "Handling", value: "From the side; from above reads as an aerial predator. Never by the tail, which drops under light pressure. In breeding season a mature male turns orange, head-bobs, and can be dangerous to keep.", source: "green-iguana-handling-guide" },
        { label: "Housing together", value: "Adults are territorial and adult males fight. One iguana.", source: "green-iguana-enrichment-guide" },
        { label: "Adult size", value: "A male reaches 6 to 7 feet including tail and up to 20 pounds, a different animal from the baby most people bring home.", source: "green-iguana-handling-guide" },
        { label: "First year", value: "An estimated 70% of captive green iguanas die in their first year, from inadequate diet, lighting, and housing.", source: "green-iguana-health-issues-guide" },
        { label: "Budget", value: "Farm-raised babies run $20 to $100, morphs $300 to $1,000 or more. The first-year kit is about $1,041 to $1,105, and the adult enclosure is a second purchase a year or two later. Ongoing $60 to $150 a month.", source: "green-iguana-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years, sometimes 25.", source: "green-iguana-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap after any contact, keep the iguana out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "Not in the guide's cold-floor table: use the tank setup guide's documented nighttime low, the low 70s, as the floor.", source: "reptile-emergency-plan-guide" },
      ],
    },
    emergencyCard: {
      source: "green-iguana-health-issues-guide",
      callNow: [
        "A swollen or rubbery lower jaw",
        "Swollen or bowed hind limbs",
        "Soft bones",
        "Tremors",
        "An inability to lift the trunk while walking",
        "Signs of kidney disease, which follows chronic dehydration, animal protein in the diet, or over-supplemented vitamin D",
        "Mouth rot",
        "Respiratory infection",
        "Skin or fungal infections",
        "A female you suspect is egg bound, whether or not she has ever been near a male",
        "Thermal burns from a heat source the iguana can contact directly",
        "Substrate impaction",
      ],
      vetLine: "Always see a vet for metabolic bone disease and kidney disease: advanced cases need immediate, long-term treatment. Mouth rot, respiratory infection, and skin or fungal infections need professional treatment rather than home correction alone. Egg binding is always an emergency, get to a vet immediately if you suspect it.",
    },
    routes: [
      { slug: "green-iguana-cost-guide", line: "$20 to $100 for the hatchling, about $1,041 to $1,105 for the first-year kit, and why the adult enclosure is a second purchase a year later." },
      { slug: "green-iguana-tank-setup-guide", line: "The 10x5x6 ft adult minimum, the basking and humidity numbers, substrate, UVB, and the vertical space an arboreal lizard needs." },
      { slug: "green-iguana-handling-guide", line: "Claws, tail whipping, tail drop, how to approach, and what breeding season does to a mature male." },
      { slug: "green-iguana-health-issues-guide", line: "Metabolic bone disease, kidney disease, mouth rot, egg binding, burns, and impaction, with the husbandry failure behind each." },
      { slug: "green-iguana-feeding-guide", line: "The greens to build a salad on, the ones that block calcium, why animal protein risks gout, and how often to dust with calcium." },
      { slug: "green-iguana-enrichment-guide", line: "The hatchling sociality research, height and climbing routes, foraging for a herbivore, and why space is the whole problem." },
    ],
    buyList: [
      "Juvenile enclosure, 4x2x4 ft PVC",
      "A plan and a budget for the walk-in adult enclosure",
      "T5 HO UVB kit, 36 inch, 12% or 14% bulb",
      "Halogen basking bulbs, 75 watt, two or three for the juvenile box, roughly six for the adult branch",
      "Dimming thermostat",
      "Misting system starter kit, or a pressure sprayer for twice-daily misting",
      "Coconut husk or large-particle cypress mulch, 2 to 4 inches",
      "A large soaking tub the iguana can fully access",
      "Sturdy climbing branches positioned near the basking zone",
      "Plain newspaper or butcher paper, if you are starting a juvenile on paper",
      "Digital thermometer and hygrometer",
    ],
    faqs: [
      { q: "What size enclosure does an adult green iguana need?", a: "An adult needs at least 10 feet long, 5 wide, and 6 tall, with 12 by 6 by 6 also recommended. Nothing commercial comes that big, so it is a custom walk-in build. A juvenile can start in a 4x2x4 or a 40 to 55 gallon tank, but will outgrow it inside a year." },
      { q: "What does the upfront setup cost?", a: "The first-year kit runs about $1,041 to $1,105 once branches, substrate, a soak tub, and a thermometer are in the pile. The adult enclosure comes a year or two later: a walk-in build is several hundred dollars in materials, a custom builder $1,000 and up, and a made to order 6x3x6 foot box $3,740." },
      { q: "What is the most common health issue in green iguanas?", a: "Metabolic bone disease, probably the most common medical problem in pet iguanas and the disease most commonly seen in lizards generally. Watch for a swollen or rubbery lower jaw, swollen or bowed hind limbs, soft bones, and tremors." },
    ],
  },
  {
    id: "jacksons-chameleon",
    name: "Jackson's Chameleon",
    emoji: "🦎",
    difficulty: "Advanced",
    petType: "Lizards",
    image: "/assets/guides/chameleon.jpg",
    tagline: "The horned, color-shifting dinosaur of the reptile world!",
    seoTitle: "Jackson's Chameleon Care Guide: Setup, Water, and Diet",
    seoDescription: "Jackson's chameleons need cool air, not heat: the 24x24x48 enclosure, the night drop, water as droplets, light supplements to prevent edema, and the law.",
    funFact: "Jackson's chameleons are one of the few chameleon species that give live birth rather than laying eggs. A single birth can produce anywhere from 5 to 30 live offspring after a gestation of roughly 5 to 6 months!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine and hygiene cite the shared guides in
    // the sidebar's Health and More list. Rewritten to the template shape
    // 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Reconciled 2026-09-15 after the Jackson's
    // chameleon set test (docs/READER_REVIEWS.md).
    //
    // The old hub carried veiled chameleon content on a Jackson's page, which
    // is the defect the reader led with: two of its FAQs were about the veiled
    // chameleon, including one giving male veiled size at 18 to 24 inches and
    // 140 to 200 grams on a species the encyclopedia puts at 9 to 13 inches.
    // All three FAQs are now verbatim copies of this species' own deep dives.
    //
    // Also retired rather than moved: daytime ambient 72 to 80F against the
    // setup guide's 68 to 75F, on the one variable both pages call the
    // defining risk; a night floor of 55 to 65F against 50 to 65F; a basking
    // spot given as 85 to 88F in one section and 80 to 85F in the checklist of
    // the same page; "screen construction is non-negotiable" against the setup
    // guide's two or three solid sides; a 12% UVB option nothing in the set
    // defends, against the setup guide's ReptiSun 5.0 or Arcadia Forest 6%; an
    // annual total near $655 against the cost guide's roughly $1,200; a vet
    // range of $70 to $120 against $50 to $100 or more; a setup table with no
    // dimming thermostat line, which the setup guide requires and the cost
    // guide prices at $73 to $93; "Jackson's chameleons live 5 to 10 years"
    // against males 8 to 10 and females 3 to 5; and a litter of 8 to 30
    // against the handling guide's 5 to 30, which the FunFact above now
    // carries correctly. The hub's diet section, the only feeding content in
    // the set, moved into the tank setup guide as a sourced Diet Basics
    // section rather than being dropped.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "Quarantine 3 to 6 months away from any reptile you already keep. A new lizard can look healthy while still shedding mites or a fatal virus.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "24 by 24 by 48 inches tall for an adult, with two or three solid sides rather than full mesh to hold humidity and cut stress. One chameleon per enclosure. A juvenile under about 10 months can start in 16x16x30.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Temperature, the defining difference", value: "Basking around 85°F, but ambient air at 70 to 80°F and a real night drop to 50 to 65°F. No night heat; it works against this montane species, and most captive ones are kept too warm.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Humidity", value: "60 to 100%, from misting every 4 to 8 hours or an automated mister, with a cool-mist humidifier where the room cannot hold it. The misting is also how the animal drinks. Never a fogger while the heat lamp is on.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "UVB", value: "Required: a ReptiSun 5.0 T5 HO or Arcadia Forest 6%, replaced every 6 to 12 months.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Substrate", value: "Bare bottom with paper towel, or a bioactive setup. No loose particulate substrate, which is ingested and causes impaction.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Feeding", value: "No more than five to seven gut-loaded insects at a feeding, none larger than the space between the eyes. Overfeeding drives gout here as readily as too little water.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Supplements, lightly", value: "Calcium once weekly on an adult's diet, a multivitamin once weekly. More is a real risk: avoid products high in vitamin D, and go carefully with synthetic vitamin A, which drives this species' edema and gout.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Dehydration", value: "The most common problem, since they will not drink from a dish. Sunken eyes and lethargy; manageable early by raising misting and dripper output immediately.", source: "jacksons-chameleon-health-issues-guide" },
        { label: "Edema and gout", value: "Fluid sacs under the throat or chest point to over-supplemented vitamin A or D. Swollen joints are gout, from dehydration, overfeeding, or too much protein. Both are a vet visit.", source: "jacksons-chameleon-health-issues-guide" },
        { label: "Handling", value: "Docile for a chameleon, which still means minimal handling. Gaping, sunken eyes, head jerking, swaying, tail curling, and raised front legs all mean stop.", source: "jacksons-chameleon-handling-guide" },
        { label: "Sexing and live birth", value: "Males grow three forward horns; females have little or none. Females bear 5 to 30 live young after roughly 5 to 6 months of gestation, which is the toll behind their shorter lives.", source: "jacksons-chameleon-handling-guide" },
        { label: "Planting density", value: "Layered live plants so the animal can cross the cage at several heights unseen. If you can always spot it immediately, it is too sparse.", source: "jacksons-chameleon-enrichment-guide" },
        { label: "Legal, before you buy", value: "Hawaii and the District of Columbia bar private ownership, New Jersey and West Virginia require a permit, Minnesota and Maine attach conditions. The other 46 jurisdictions place no restriction.", source: "jacksons-chameleon-legal-guide" },
        { label: "Budget", value: "$50 to $250 for the chameleon, and captive-bred is worth the price over a parasitized wild-caught Hawaiian animal. Setup roughly $400 to $525, then $50 to $100 a month. A routine exam runs $50 to $100.", source: "jacksons-chameleon-cost-guide" },
        { label: "Lifespan, by sex", value: "Males 8 to 10 years, females 3 to 5.", source: "jacksons-chameleon-cost-guide" },
        { label: "Adult size", value: "Typically 6 to 10 inches (15 to 25 cm); males up to 15 (38 cm)." },
        { label: "Hygiene", value: "Wash hands with soap after any contact, keep the chameleon out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "jacksons-chameleon-health-issues-guide",
      callNow: [
        "Lethargy, rubbery or bent bones, swollen limbs, and tremors: always see a vet, early cases respond considerably better to treatment than advanced ones",
        "Sunken eyes and lethargy: see a vet if your chameleon doesn't respond to increased misting and dripper output, or shows real lethargy",
        "Swollen joints: always see a vet, and know that full resolution can be genuinely difficult once this develops",
        "Fluid-filled sacs developing under the throat, neck, or chest: see a vet, and review your supplement routine",
        "Eye problems, poor coordination, a weakening grip, and respiratory issues: always see a vet",
      ],
      vetLine: "Insufficient misting causes the dehydration that's the single most common issue in this species. Weak UVB and calcium cause MBD. Overfeeding and dehydration together drive gout. And oversupplementing, specifically vitamin A or D, can cause edema, a genuinely species-specific risk worth watching for. Getting hydration and supplementation calibrated correctly, not just present, prevents most of what's on this list.",
    },
    routes: [
      { slug: "jacksons-chameleon-cost-guide", line: "$90 to $150 for most animals, $400 to $525 of setup, and why males and females live such different lengths of time." },
      { slug: "jacksons-chameleon-tank-setup-guide", line: "24x24x48, 85F basking over 70 to 80F air, the real night drop, the UVB bulbs, and what to feed." },
      { slug: "jacksons-chameleon-handling-guide", line: "The three horns, the stress signals, and the live birth that sets this species apart." },
      { slug: "jacksons-chameleon-feeding-guide", line: "Three insects every other day with a five-to-seven ceiling, water first, calcium weekly, and the vitamin A and D limits that prevent edema." },
      { slug: "jacksons-chameleon-health-issues-guide", line: "Dehydration first, then the edema and gout that come from oversupplementing a species already sensitive to it." },
      { slug: "jacksons-chameleon-enrichment-guide", line: "Why the enrichment problem here is a thermometer, and the planting density test." },
      { slug: "jacksons-chameleon-legal-guide", line: "Barred in the one state where you are most likely to see one, and the four other jurisdictions that reach it." },
    ],
    buyList: [
      "A 24x24x48 inch tall enclosure with two or three solid sides",
      "A T5 HO UVB fixture with a ReptiSun 5.0 or Arcadia Forest 6% bulb",
      "A halogen basking bulb and a dimming thermostat for it",
      "A misting system, manual or automated, plus a dripper",
      "A cool-mist humidifier on a humidistat for the overnight spike",
      "Distilled water for anything that mists or fogs",
      "Live plants, densely, plus climbing branches at several heights",
      "Paper towel for the floor, or a bioactive base if you prefer",
      "A digital thermometer and hygrometer",
      "A calcium supplement and a general vitamin and mineral supplement",
    ],
    faqs: [
      { q: "What size enclosure does an adult Jackson's chameleon need?", a: "24 by 24 by 48 inches for one adult, and bigger is better. A juvenile under about 10 months can sit temporarily in something like 16x16x30. One chameleon per enclosure: males fight." },
      { q: "What temperature does a Jackson's chameleon need, and how does it differ from a veiled chameleon?", a: "Basking near 85°F, much like a veiled chameleon, but the ambient air stays cooler at 70 to 80°F, kept toward the low end, with a real night drop to 50 to 65°F. Night heat is usually unnecessary and can work against a species adapted to cool mountain nights." },
      { q: "What is the most common health problem in Jackson's chameleons?", a: "Dehydration. Like most chameleons, Jackson's won't reliably drink from a standing water dish. Sunken eyes and lethargy are the signs. Caught early it's manageable at home by increasing misting and dripper output. See a vet if your chameleon doesn't respond, or shows real lethargy." },
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
    seoTitle: "Savannah Monitor Care Guide: Setup, Diet, and Handling",
    seoDescription: "Savannah monitors die of the captive diet: the 8x4x4 foot enclosure no store sells, deep burrowing substrate, feeding that avoids obesity, and handling.",
    funFact: "Savannah monitors are built for digging. In the wild they may create burrows several feet deep to escape the African heat. A deep substrate is one of the most important enrichment features you can give them!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Quarantine and hygiene cite the
    // shared reptile guides in the sidebar's Health and More list. Rewritten
    // to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md): the
    // lifespan row keeps the cost guide's overfeeding sentence. Reconciled 2026-09-15 after the
    // savannah monitor set test (docs/READER_REVIEWS.md).
    //
    // This species has no feeding guide, so the diet rows copy the Diet
    // Basics section added to the tank setup guide from LafeberVet and Tree
    // of Life Exotics, the two veterinary sources the set already cites.
    // That section exists because the reader could build the enclosure and
    // not feed the animal: the only schedule anywhere in the set was one
    // hub line no article repeated or sourced.
    //
    // The old hub fought its articles on eight figures, all gone rather than
    // moved: size (3 to 5 ft and 6 to 15+ lbs, against the handling guide's
    // 3 to 4 ft and 8 to 15 lbs, which LafeberVet's own clinic source
    // matches), basking (a 130°F floor against the setup guide's 140 to
    // 150), cool side (78 to 82°F against 75 to 85 with a night drop the hub
    // never mentioned), humidity (60 to 70% in the burrow area against about
    // 50% ambient plus a genuinely humid burrow), substrate (12 inches
    // against 12 to 24 or more, with the shopping checklist carrying the
    // failing figure), the vet exam ($70 to $120 against the cost guide's
    // $50 to $100), the enclosure line ($500 to $1200 for a right-sized
    // build, under the cost guide's $650 to $730 for a wrong-sized one),
    // and lifespan (5 to 8 years against the cost guide's early teens).
    // The old checklist also read "Varied whole prey diet (roaches, eggs,
    // mice, rats)" directly under an argument that rodents are what kill
    // this species.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal", value: "Twelve jurisdictions restrict it, five as bans and seven as paperwork; the other 40 place no restriction. Louisiana names this species on its prohibited list.", source: "savannah-monitor-legal-guide" },
        { label: "Day one", value: "Quarantine 3 to 6 months on plain paper towel away from other reptiles, with a vet check and fresh fecal sample within two weeks.", source: "reptile-quarantine-guide" },
        { label: "Where it came from", value: "Most are wild-caught or farmed in bulk, so many arrive stressed and parasitized. A fecal exam for any new monitor, symptoms or not.", source: "savannah-monitor-cost-guide" },
        { label: "Enclosure", value: "A hatchling starts around 36x24x20 inches; an adult needs 8 by 4 by 4 feet minimum, one per enclosure. The ready-made 8-foot PVC unit is 8x2x2, so adult housing is a DIY build.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Basking", value: "A surface of 140 to 150F on an infrared thermometer, from a cluster of halogen floods on a thermostat. Cool side 75 to 85F, nights 70 to 75F. No ceramic emitters, colored bulbs, or heat mats as the main source.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Humidity and substrate", value: "Around 50% ambient with a genuinely humid burrow, made by pouring water into one area of 12 to 24 inches or more of a soil, sand, and clay mix that holds a tunnel.", source: "savannah-monitor-tank-setup-guide" },
        { label: "UVB", value: "A 10 to 12% T5 HO over roughly half the enclosure, 14 to 16 inches from the basking area, with a 6500K daylight bulb. Around 11 hours in winter, 13 in summer.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Water basin", value: "Large enough to submerge the whole body. A big dry enclosure with a small bowl is not adequate however large the footprint.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Diet", value: "Gut-loaded insects as the staple: dubia, crickets, locusts, superworms, silkworms, crayfish. Lean mice, chicks, or fish occasionally and no more: rodents and fatty food fed often are the obesity that kills this species.", source: "savannah-monitor-tank-setup-guide" },
        { label: "How often", value: "Juveniles daily or every other day, adults two to three times a week. No published portion figure, so a rounded, heavy body shape means too rich, whatever the portion.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Supplements", value: "Calcium on the insects, without D3 under UVB and with D3 without it, at a calcium-to-phosphorus ratio of at least 2:1, plus a weekly multivitamin.", source: "savannah-monitor-tank-setup-guide" },
        { label: "The thing that kills them", value: "In the wild a lean, insect-based diet on a seasonal cycle; in captivity rich food year-round with a fraction of the movement. Obesity and fatty liver are the signature problem.", source: "savannah-monitor-health-issues-guide" },
        { label: "Handling", value: "From underneath, never from above, supporting the body and tail. Hissing, snapping, a puffed throat, standing on the hind limbs, or tail flicking means do not. Adult nail trims can take two or three people.", source: "savannah-monitor-handling-guide" },
        { label: "Feed with tongs", value: "Food in and leftovers out with tongs: a hungry monitor mistakes fingers for prey. Wash hands after handling its food.", source: "savannah-monitor-handling-guide" },
        { label: "Adult size", value: "3 to 4 feet and 8 to 15 pounds, with real teeth, claws, and tail.", source: "savannah-monitor-handling-guide" },
        { label: "Budget", value: "$150 to $300 for a juvenile, $300 to $800 for an adult. Setup well past $500 and sometimes over $1,000, then $30 to $50 a month, and $50 to $100 for a routine exam.", source: "savannah-monitor-cost-guide" },
        { label: "Lifespan", value: "10 to 15 years cited, 15 to 20 achievable, and many die in their early teens or younger from fatty liver, kidney failure, or gout, nearly all from overfeeding.", source: "savannah-monitor-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap after any contact, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "savannah-monitor-health-issues-guide",
      callNow: [
        "Soft or deformed bones, or a fracture",
        "Labored breathing",
      ],
      soon: [
        "A rounded, heavy body and reduced activity: obesity and fatty liver, corrected at home through diet and space, but advanced liver disease may not reverse",
        "Any newly acquired monitor, symptoms or not: a fecal exam, since parasites are common in wild-caught and farmed animals",
      ],
      vetLine: "Workups for obesity, parasites, or bone disease run into the hundreds, and all three are common enough here to budget for. Body condition scoring beats eyeballing an animal you see daily.",
    },
    routes: [
      { slug: "savannah-monitor-cost-guide", line: "$150 to $300 for a juvenile and $300 to $800 for an adult, why that price is part of the problem, a setup that runs past $1,000, and the gap between what this species can live and what it usually does." },
      { slug: "savannah-monitor-tank-setup-guide", line: "The 8x4x4 foot standard and why nothing off the shelf meets it, a 140 to 150F basking surface, two feet of diggable substrate, the full-submersion basin, and what to feed." },
      { slug: "savannah-monitor-feeding-guide", line: "Insects as the staple and rodents as the exception, daily young and two to three times a week adult, calcium weekly without vitamin D, and body condition as the portion." },
      { slug: "savannah-monitor-handling-guide", line: "Why this is not the ackie, the five warning signals that end a session, the grip for when an animal has to be controlled, and the nail trim that takes three people." },
      { slug: "savannah-monitor-health-issues-guide", line: "Obesity and fatty liver disease as the defining problem, the wild feeding rhythm that explains it, MBD, and the parasite screen every new animal needs." },
      { slug: "savannah-monitor-enrichment-guide", line: "Eight of eight monitors opening a puzzle tube in ten minutes, why that evidence is genus-level rather than species-level, and puzzle feeding that adds work instead of calories." },
      { slug: "savannah-monitor-legal-guide", line: "Legal in 40 of 52 jurisdictions, the one state that names this species, and the Arkansas list that clears ten monitors and stops one name short." },
    ],
    buyList: [
      "8x4x4 ft enclosure, realistically a DIY build or a direct order",
      "Cluster of halogen flood bulbs",
      "Thermostat for the basking cluster",
      "Infrared thermometer for surface readings",
      "T5 HO UVB in the 10 to 12% range",
      "6500K daylight bulb",
      "12 to 24+ inches of diggable soil, sand and clay mix",
      "A humid hide and a way to wet one area of substrate",
      "Water basin big enough for full submersion",
      "Rock stacks, logs and varied terrain",
      "Gut-loaded feeder insects",
      "Calcium without D3, and a multivitamin",
      "Feeding tongs",
      "Extraction puzzle feeder",
      "Clicker and target stick",
      "An exotics vet who sees monitors",
    ],
    faqs: [
      { q: "What size enclosure does a savannah monitor need?", a: "A hatchling can start near 36x24x20 inches, but one adult needs 8 by 4 by 4 feet at minimum, which is the current welfare standard rather than excess. Floor space beats height for a ground-dweller, and it's one monitor to an enclosure." },
      { q: "How hot does a savannah monitor's basking spot need to be?", a: "140 to 150F on the basking surface, read directly with an infrared thermometer rather than off an air temperature. Cool side 75 to 85F, nights 70 to 75F." },
      { q: "What and how often does a savannah monitor eat?", a: "Gut-loaded insects as the staple, with lean mice, chicks or freshwater fish in the occasional column. Juveniles eat daily or every other day, adults two to three times a week. Dust with calcium and add a multivitamin weekly." },
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
    seoTitle: "Uromastyx Care Guide: Heat, Diet, and Health",
    seoDescription: "Uromastyx care runs hot and dry: a 110 to 120°F basking surface, the 4x2x2 floor, deep sandy substrate, greens that supply its water, and when to call a vet.",
    funFact: "Uromastyx (also called spiny-tailed lizards) are almost entirely herbivorous. They get nearly all their water from their food and rarely need a standing water dish! They're one of the few reptiles that thrive on seeds.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine and hygiene cite the shared reptile
    // guides in the sidebar's Health and More list. Rewritten to the template
    // shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md): the substrate row keeps
    // the calcium sand warning, feeding keeps "lean toward the less-frequent
    // end". Reconciled 2026-09-15 after the uromastyx set test
    // (docs/READER_REVIEWS.md).
    //
    // The reader's summary of the old hub: it "contradicts four numbers a new
    // keeper will act on". Retired rather than moved:
    // basking 120 to 140F against the setup guide's 110 to 120F (the species
    // check moved the set to the vs guide's veterinary figure), with at least
    // 130F for giant Egyptians; a 12% UVB bulb against the setup guide's 14%
    // and its UVI 4.5 to 6.0 target; substrate "3 to 4 inches deep" and an
    // 80/20 sand-to-soil mix against at least 4 inches of 50/30/20 sand,
    // topsoil and excavator clay; an enclosure at $150 to $300 against the cost
    // guide's $280 to $400; adult size 10 to 18 inches against the
    // encyclopedia's 10 to 30; "seeds form a nutritionally important part of
    // the diet" against the feeding guide's "treat seeds as limited, not a
    // daily component"; "remove any water dish" against the health guide's
    // veterinary guidance to keep one available even if it goes untouched;
    // "supervised handling sessions build trust quickly" against the enrichment
    // guide's "do not treat handling as enrichment for a species that mostly
    // wants to be left on its rock"; and "no insects in the diet" against the
    // enrichment guide's "occasional insects are not a disaster".
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Day one", value: "Quarantine 3 to 6 months away from any reptile you already keep, and two weeks alone to settle before regular handling.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "4 by 2 by 2 feet minimum from day one for species up to about 18 inches; an Egyptian needs up to 8x4x4. One per enclosure. A 20-gallon starter kit is too small.", source: "uromastyx-tank-setup-guide" },
        { label: "Basking, the defining requirement", value: "A basking surface of 110 to 120°F, at least 130°F for the Egyptian, from halogen floods over a stone stack. Cool zone around 85°F, nights around 65°F with no supplemental heat.", source: "uromastyx-tank-setup-guide" },
        { label: "Humidity", value: "20 to 30% ambient on the cool side, dry enough to make a bearded dragon look tropical, with moisture allowed deeper in a burrow. Coastal species like the Yemen want closer to 50%.", source: "uromastyx-tank-setup-guide" },
        { label: "Substrate", value: "Fine sand, or a mix of 50% play sand, 30% topsoil and 20% excavator clay, at least 4 inches deep for burrowing. No calcium sand or walnut shell, both impaction risks. No moisture-holding coco fiber, mulch, or moss.", source: "uromastyx-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb around 14%, targeting a basking UVI of 4.5 to 6.0, with a bright daylight LED bar, replaced every 6 to 12 months.", source: "uromastyx-tank-setup-guide" },
        { label: "Feeding schedule", value: "Juveniles daily. Adults anywhere from 2 to 4 times a week up to daily, and lean toward the less frequent end, since overfeeding is a common mistake. Food down 1 to 2 hours after the basking light comes on.", source: "uromastyx-feeding-guide" },
        { label: "What they eat", value: "Chopped dark leafy greens and edible flowers: collard, dandelion, mustard, turnip, endive, escarole, arugula, hibiscus. Seeds and sprouted lentils in small amounts several times weekly, inside both the feeding guide's limited and the setup guide's regular. Insects optional.", source: "uromastyx-feeding-guide" },
        { label: "A uromastyx that stops eating", value: "1 to 2 weeks of acclimation fasting and a 1 to 2 month brumation slowdown are normal if it stays alert and hydrated. Past a week outside those, or losing more than 5 to 10% of body weight on a weekly weigh-in, it is a vet visit.", source: "uromastyx-feeding-guide" },
        { label: "Where the water comes from", value: "Almost all of it from food, so feed greens before they wilt. A bowl stays available even if it goes untouched.", source: "uromastyx-health-issues-guide" },
        { label: "Impaction and respiratory infection", value: "Bloating or stool that has stopped is a vet visit, not a wait. A lizard sitting with its mouth slightly open, or a bubble at a nostril, is the early sign of humidity too high or heat too low.", source: "uromastyx-health-issues-guide" },
        { label: "Metabolic bone disease", value: "The most common issue in captivity: poor appetite and weakness early, then a soft or hanging jaw, swollen limbs, tremors. Too little calcium or D3, or weak UVB. Always a vet.", source: "uromastyx-health-issues-guide" },
        { label: "Handling", value: "Scoop from below, never from above, whole body supported, 10 to 15 minutes at most. Never by the tail, which does not drop.", source: "uromastyx-handling-guide" },
        { label: "Budget", value: "$150 to $400 for a captive-bred Mali or ornate, $300 to $800 for rarer species. Setup roughly $500 to $900, the enclosure $280 to $400 of it, then $25 to $45 a month. A routine exam runs $50 to $100.", source: "uromastyx-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years, past 25 with excellent care.", source: "uromastyx-cost-guide" },
        { label: "Adult size", value: "10 to 30 inches (25 to 75 cm) depending on species." },
        { label: "Supplements", value: "Phosphorus-free calcium on the greens, more often for juveniles, tapering with age, and a multivitamin roughly weekly to every couple of weeks. UVB, not oral D3.", source: "uromastyx-feeding-guide" },
      ],
    },
    emergencyCard: {
      source: "uromastyx-health-issues-guide",
      callNow: [
        "Bloating, or stool that has stopped: impaction",
        "Open-mouth breathing or discharge from the nose",
        "Any tissue protruding from the vent",
        "Lumps or swelling in the joints or under the skin",
        "Sunken eyes, dull or darkened color, or lethargy: dehydration, which needs a vet rather than a bigger water bowl",
        "Runny or foul-smelling stools",
      ],
      vetLine: "Each of these is on its own a reason to call. Most problems trace back to getting this species' unusually specific heat, humidity, or diet wrong.",
    },
    routes: [
      { slug: "uromastyx-cost-guide", line: "$150 to $400 for the lizard, $500 to $900 of setup, and the starter kits that are sized wrong." },
      { slug: "uromastyx-tank-setup-guide", line: "4x2x2 as a floor, a 110 to 120F basking surface, 20 to 30% humidity, and the substrate recipe." },
      { slug: "uromastyx-feeding-guide", line: "Schedule by age, the near-strict herbivore diet, the treats and foods to avoid, and why a cool basking spot causes weight loss even when it eats." },
      { slug: "uromastyx-handling-guide", line: "Two weeks hands-off, scoop from below, and why the tail is a permanent weapon rather than a sacrifice." },
      { slug: "uromastyx-health-issues-guide", line: "MBD, impaction, respiratory infection, where the water comes from, and the six signs that mean call now." },
      { slug: "uromastyx-enrichment-guide", line: "Heat and a burrow beat every object you can buy, with the priority order to build in." },
    ],
    buyList: [
      "A 4x2x2 ft enclosure as a floor, up to 8x4x4 for a full-grown Egyptian",
      "Halogen flood bulbs and a fixture for the basking stack",
      "A T5 HO UVB kit around 14%, plus a bright daylight LED bar",
      "Stacked stone or slate for the basking stack",
      "Fine sand, topsoil and excavator clay for a 4 inch mix",
      "A digital thermometer and hygrometer, plus an infrared temperature gun",
      "Hides at both ends of the gradient",
      "A shallow water bowl, even though it will mostly go untouched",
      "Calcium and multivitamin supplements",
      "A gram scale for monthly weights",
    ],
    faqs: [
      { q: "What size enclosure does a uromastyx need?", a: "Plan on 4x2x2 feet for species that top out around 18 inches, and up to 8x4x4 for a full-grown Egyptian. Keep it to one animal per enclosure." },
      { q: "How hot does a uromastyx basking spot need to be?", a: "The basking surface has to hit 110 to 120F, and giant Egyptians want at least 130F. Cool side around 85F, night around 65F, usually with no supplemental heat needed." },
      { q: "What's the most common health issue in captive uromastyx?", a: "Metabolic bone disease. The signs are a soft or hanging jaw, swollen limbs, tremors, deformed bones, and lethargy. Behind it: too little calcium or vitamin D3, weak UVB, or a diet too high in phosphorus or oxalates. Severe cases can be fatal, so always see a vet." },
    ],
  },
  {
    id: "veiled-chameleon",
    name: "Veiled Chameleon",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Lizards",
    image: "/assets/guides/veiled-chameleon.jpg",
    tagline: "The helmet-headed climber with independently swiveling eyes!",
    seoTitle: "Veiled Chameleon Care Guide: Setup, Water, and Diet",
    seoDescription: "Veiled chameleons drink only moving water, so the dripper matters: a 24x24x48 cage, heat and UVB, the supplement schedule, and a laying bin for every female.",
    funFact: "Veiled chameleons are remarkably drought-adapted for a chameleon. Native to the mountains of Yemen and Saudi Arabia, they tolerate wider temperature and humidity swings than most other chameleon species. Females are also famous for laying large clutches of infertile eggs even without ever having contact with a male.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine and hygiene cite the
    // shared reptile guides in the sidebar's Health and More list. Rewritten
    // to the template shape 2026-09-16 (archive/docs-completed/HUB_ROUTER_REVIEWS.md). Built
    // 2026-09-14 for the veiled chameleon
    // set test (docs/READER_REVIEWS.md). The old hub's supplement schedule was
    // roughly four times the feeding guide's, on the two supplements that guide
    // says cause gular edema in excess; that is the row to check first if this
    // hub ever drifts again.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each from the article it links to. Rows with no link come from the encyclopedia.",
      rows: [
        { label: "Legal check", value: "Hawaii and Washington DC bar one. New Jersey wants a permit, Minnesota allows one from a permitted breeder. Check the city ordinance too.", source: "veiled-chameleon-legal-guide" },
        { label: "Day one", value: "Quarantine 3 to 6 months in a separate room, with a fecal exam before it meets an established pet.", source: "reptile-quarantine-guide" },
        { label: "Enclosure", value: "24x24x48 inches minimum for an adult, 4x2x4 feet better, screen or hybrid with partly solid sides. A juvenile can start at 18x18x36 but reaches adult size in 6 to 8 months, so buy the adult enclosure now.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Temperature", value: "Basking around 85°F for females and juveniles, 90 to 95°F for adult males. Ambient 72 to 80°F, with a beneficial night drop to 55 to 65°F.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Humidity", value: "40 to 50% by day and 80 to 100% at night, from morning and evening misting plus a dripper or an overnight cool-mist humidifier on distilled water. Plan drainage for the runoff.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Lighting", value: "A linear T5 HO UVB, ReptiSun 5.0 or Arcadia 6%, with the basking branch 6 to 9 inches below it, 12 hours a day, replaced every 6 to 12 months. No coil bulbs.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Water", value: "They drink moving droplets on leaves and never from a dish. A dripper or misting system is an essential, not an accessory.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Substrate", value: "Bare bottom or paper towel; coco fiber for a bioactive build. No sand, gravel, or wood chips, which impact when swallowed in a feeding strike.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Laying bin, females", value: "A female lays eggs with no male present, and without somewhere to lay she risks egg-binding. A moist sand or soil bin 5 to 10 inches deep, permanently available.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Feeding schedule", value: "Babies twice daily as much as they eat; 3 to 6 months 10 to 12 small crickets daily; 6 to 12 months 8 to 10 medium; adults 4 to 6 feeders every other day, females restricted. Nothing bigger than the space between the eyes.", source: "veiled-chameleon-feeding-guide" },
        { label: "Diet", value: "Crickets, dubia, black soldier fly larvae, superworms, silkworms, and locusts rotating, gut-loaded 24 to 48 hours on greens and squash. Hornworms, waxworms, and butterworms are treats, no more than about twice a week.", source: "veiled-chameleon-feeding-guide" },
        { label: "Supplements", value: "Plain calcium at nearly every feeding, calcium with D3 about every other week, and a multivitamin with real vitamin A on the same twice-monthly schedule. D3 is toxic in excess, which is why it is dosed less often.", source: "veiled-chameleon-feeding-guide" },
        { label: "Handling", value: "A solitary display animal. Approach from below with an open palm and let it climb on; hissing, gaping, and darkening mean frightened, so back off.", source: "veiled-chameleon-handling-guide" },
        { label: "Company", value: "Hatchlings reared alone for two months grew up duller. Adults are still never housed together.", source: "veiled-chameleon-enrichment-guide" },
        { label: "Budget", value: "$20 to $100 for a captive-bred juvenile and roughly $400 to $800 for the setup. A routine exam runs $50 to $100; egg-binding runs $200 to $400 medically and $800 to $1,500 or more in surgery.", source: "veiled-chameleon-cost-guide" },
        { label: "Lifespan", value: "Males 6 to 8 years. Females 2 to 6, many not past 2 to 3, from the toll of egg clutches.", source: "veiled-chameleon-cost-guide" },
        { label: "Adult size", value: "Males 18 to 24 inches (46 to 61 cm), females 10 to 14 inches (25 to 36 cm)." },
        { label: "Hygiene", value: "Wash hands with soap after any contact, never clean the enclosure in a kitchen sink or shared bathtub, and children under 5 do not touch reptiles or their environments.", source: "reptile-salmonella-hygiene-guide" },
      ],
    },
    emergencyCard: {
      source: "veiled-chameleon-health-issues-guide",
      callNow: [
        "A soft or bendable rubber jaw, curved or broken limbs, tremors, or an inability to grip branches or shoot the tongue",
        "In a female: restlessness, digging without producing eggs, straining, lethargy, and swelling",
        "Eye discharge, or turret abscesses and infections",
        "Wheezing, gaping, and visible mucus",
      ],
      vetLine: "Egg-binding is the emergency: it can kill within 24 hours, and severe cases often require surgery. Metabolic bone disease caught early is only partly reversible and advanced cases are permanent, so it is a vet visit rather than a wait. Sky-blue spots on the flanks are a normal sign after a female has successfully laid, worth knowing so you don't mistake healthy post-laying color for illness.",
    },
    routes: [
      { slug: "veiled-chameleon-cost-guide", line: "$20 to $100 for the animal, $400 to $800 for the setup, and why a female's vet bill is the line that matters." },
      { slug: "veiled-chameleon-tank-setup-guide", line: "24x24x48 as the floor, the thermal gradient, UVB distance, the laying bin, and why the dripper is not optional." },
      { slug: "veiled-chameleon-feeding-guide", line: "Portions by age, the eye-spacing prey rule, and the supplement schedule that decides whether this animal gets bone disease." },
      { slug: "veiled-chameleon-handling-guide", line: "Why this is a display animal, what gaping and darkening actually mean, and how to pick one up when you must." },
      { slug: "veiled-chameleon-health-issues-guide", line: "Metabolic bone disease, egg-binding, eye problems, respiratory infection, and the signs that mean a vet today." },
      { slug: "veiled-chameleon-enrichment-guide", line: "The isolation-rearing study done on this exact species, planting density, branch diameters, and prey release." },
      { slug: "veiled-chameleon-legal-guide", line: "The two places that ban every lizard without naming one, the permit states, and why your city matters." },
    ],
    buyList: [
      "24x24x48 inch screen or hybrid enclosure, larger if the space allows",
      "Linear T5 HO UVB fixture and tube, ReptiSun 5.0 or Arcadia 6%",
      "Basking bulb",
      "Thermostat, thermometer and hygrometer",
      "Dripper system or automatic mister",
      "Drainage tray or setup for misting runoff",
      "Live plants: pothos, hibiscus, ficus, parlor palm",
      "Branches at varied diameters",
      "Laying bin with 5 to 10 inches of moist sand or soil, for females",
      "Plain calcium without D3 or phosphorus",
      "Calcium with D3, and a multivitamin with a real vitamin A source",
      "Gut-load greens: collard, mustard, dandelion, squash",
      "Varied feeder insects",
      "Reptile vet contact",
    ],
    faqs: [
      { q: "What size enclosure does an adult veiled chameleon need?", a: "24x24x48 inches is the practical floor for an adult, and 4x2x4 feet is better if the space is there. Because they hit adult size in 6 to 8 months, buy the adult enclosure up front rather than planning an upgrade." },
      { q: "Why can't I just use a water dish?", a: "Standing water does not read as drinking water to this species. Only moving droplets on leaves and branches get a response, so refilling a dish more often will not fix hydration. The dripper or misting system is the essential piece, not an accessory." },
      { q: "What is the correct calcium and vitamin schedule for a veiled chameleon?", a: "Plain calcium, no D3 and no phosphorus, on nearly every feeding. Calcium with D3 goes on about every other week, and a multivitamin carrying a real vitamin A source runs on that same twice-monthly schedule. Excess D3 can turn toxic, which is why it's dosed less often." },
    ],
  },
];
