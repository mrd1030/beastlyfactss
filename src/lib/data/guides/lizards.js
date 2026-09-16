export const lizardGuides = [
  {
    id: "ackie-monitor",
    name: "Ackie Monitor",
    emoji: "🦎",
    difficulty: "Intermediate",
    petType: "Lizards",
    image: "/assets/guides/ackie-monitor.jpg",
    tagline: "The miniature Komodo dragon with a huge personality!",
    funFact: "Ackie monitors 'taste' the air constantly with their forked tongues, using their Jacobson's organ to detect prey scent, just like their giant Komodo cousins!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Hygiene and the thermostat probe cite the shared
    // reptile guides in the sidebar's Health and More list. Reconciled
    // 2026-09-15 after the ackie monitor
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "41 of the 52 jurisdictions place no restriction on it at all.", source: "ackie-monitor-legal-guide" },
        { label: "Day one", value: "Quarantine any new ackie until it's cleared two separate clean fecal checks before introducing it to an established collection, and maintain good general hygiene.", source: "ackie-monitor-health-issues-guide" },
        { label: "Enclosure", value: "The minimum for a single adult is 5 feet long by 2.5 feet wide by 4 feet tall, larger than the older 4x2x2 foot standard often quoted for this species.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Basking surface", value: "Roughly 130 to 170°F, measured directly on the basking stone or stack with an infrared thermometer, not air temperature.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Cool side", value: "Around 75 to 80°F, giving a real thermal gradient across the enclosure.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Humidity", value: "Ackies need both dry and humid zones, and most of the moisture should live underground rather than in the air.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Substrate", value: "12 to 24 inches of a soil and sand mix that holds a proper burrow, contained with a substrate dam tall enough to hold that depth.", source: "ackie-monitor-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb in the 12% desert range, spanning roughly half the enclosure over the basking area, replaced every 12 months. Target a basking-area UVI of 4.0 to 6.0, meaningfully higher than most other commonly kept lizards need.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture.", source: "reptile-heating-thermostats-guide" },
        { label: "Feeding schedule", value: "Hatchlings and juveniles up to about 6 months are fed daily and allowed to eat as much as they want. Subadults and adults eat every other day, roughly what the animal finishes within a 5 to 10 minute window rather than food left available indefinitely.", source: "ackie-monitor-feeding-guide" },
        { label: "Food and supplements", value: "Well-gutloaded insects: black soldier fly larvae, crickets, discoid roaches, dubia roaches, grasshoppers, and silkworms. Size prey to roughly the width of the ackie's head, not bigger. Lightly dust most insect feeders with a reptile calcium powder at each feeding, skipping isopods and hornworms since they're already calcium-rich.", source: "ackie-monitor-feeding-guide" },
        { label: "Not rodents", value: "Don't make rodents a dietary staple. Mice and rats are calorie-dense, and a rodent-heavy diet is directly linked to the fatty liver disease that shortens more captive monitor lifespans than almost anything else.", source: "ackie-monitor-feeding-guide" },
        { label: "Weigh it weekly", value: "Reduce feeding frequency and amount, provide a genuinely large enclosure, and weigh the monitor weekly with a kitchen scale to track trends.", source: "ackie-monitor-health-issues-guide" },
        { label: "Handling", value: "Never grab an ackie from above or chase it out of a hide, which triggers a real prey-flight response rather than building trust.", source: "ackie-monitor-handling-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the lizard out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Budget", value: "$150 to $450 for the monitor, with red ackies at the top of that. Setup runs $800 to $1,500 or more, and upkeep roughly $40 to $80 a month, most of it feeder insects and electricity for the high-wattage basking bulbs.", source: "ackie-monitor-cost-guide" },
        { label: "Adult size", value: "Around 2 feet (0.6 m) typical, reported from 17.3 inches (44 cm) to 30 inches (76 cm)." },
        { label: "Lifespan", value: "15 to 20 years with proper housing and care.", source: "ackie-monitor-cost-guide" },
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
      { slug: "ackie-monitor-legal-guide", line: "Legal in 41 of 52 jurisdictions, the four places no lizard or no monitor qualifies, and the Colorado latitude clause the ackie's range sits right on." },
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
    funFact: "Tegus are one of the only reptiles known to have near-endothermic (warm-blooded) properties. During breeding season, their body temperature rises above ambient temperatures!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the handling
    // guide, which is the only page that names its sources and the spread
    // between them. Salmonella and quarantine cite the shared reptile guides
    // in the sidebar's Health and More list. Reconciled 2026-09-15 after the
    // tegu set test
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Check the law first", value: "Since April 29, 2021, new acquisition of a pet tegu has been banned outright in Florida under the state's Prohibited species list, and the grandfather window closed on July 28, 2021.", source: "argentine-tegu-legal-guide" },
        { label: "Enclosure size", value: "8 feet by 4 feet by 4 feet is the minimum for an adult male, with females needing somewhat less but still substantial space.", source: "argentine-tegu-tank-setup-guide" },
        { label: "The enclosure you can actually buy", value: "A ready made 8ft PVC modular enclosure is actually 8x2x2ft, a partial match on length only, well short of the full 8x4x4ft footprint an adult tegu needs.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Temperature", value: "Basking area 100 to 115F, warm ambient in the 90s, cool side around 80F, with nighttime allowed to drop to 65F without triggering brumation.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Humidity", value: "70 to 80%, maintained through deep, moisture retentive substrate, live plants in a bioactive style setup, a large water tub, and often an automatic misting system.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Substrate depth", value: "Deep, 12 to 18 inches or more, of an absorbent, burrow supporting mix: cypress mulch, coconut fiber, organic topsoil, or a bioactive blend.", source: "argentine-tegu-tank-setup-guide" },
        { label: "UVB", value: "Strong UVB is required. For an enclosure this large, a 46 inch T5 HO bulb in the 12 to 14% range, spanning a quarter to half the enclosure's length on the warm side, targeting a basking area UVI of 3.0 to 4.0.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Feeding frequency", value: "Set by age rather than by size. Feed a young tegu every day. From one to three years old, every other day. Past three years, every third day.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Diet", value: "Young tegus are primarily insectivorous, then the protein moves to appropriately sized pre-killed or frozen-thawed rodents.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Supplements", value: "A calcium supplement without D3 goes on or in every meal, and a multivitamin once a week.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Adult size", value: "3 to 5 feet (90 to 150 cm)." },
        { label: "Handling", value: "The nearest rule is one handler per 3 to 4 feet, and a full-grown Argentine is past it: two people for any job that needs it held still. Tegus need regular, supervised handling and free roam time to develop and keep it. From the side, never from above, and never disturb one in its hide.", source: "argentine-tegu-handling-guide" },
        { label: "Budget, the animal", value: "Standard black and white tegus, along with blue and Chacoan morphs, typically run $200 to $500.", source: "argentine-tegu-cost-guide" },
        { label: "Budget, the setup", value: "Often exceeding $1,000 to $3,000.", source: "argentine-tegu-cost-guide" },
        { label: "Ongoing and vet", value: "Roughly $40 to $100 or more a month. A routine exotic exam runs $50 to $135, with emergency visits starting around $150 to $300 before diagnostics.", source: "argentine-tegu-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years is typical, with some individuals documented living past 30 under excellent care.", source: "argentine-tegu-cost-guide" },
        { label: "Salmonella", value: "Never clean the enclosure, water dish or any equipment in a kitchen sink or a bathtub people also use. Children younger than 5 should not handle or touch reptiles or their environments at all.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Quarantine", value: "Longer than the two to four weeks that gets repeated informally: the Merck Veterinary Manual recommends 3 to 6 months for a new reptile.", source: "reptile-quarantine-guide" },
      ],
    },
    emergencyCard: {
      source: "argentine-tegu-health-issues-guide",
      callNow: [
        "Weakness, decreased appetite, swollen joints or legs, tremors, or soft or fractured bones",
        "Lethargy, appetite loss, nasal discharge, or open mouth breathing",
        "Any tissue protruding from the vent, which is an emergency",
        "Weight loss, diarrhea, and skin issues, more common in imported or wild caught animals (parasites). See a vet for a fecal exam and treatment",
        "Obesity, genuinely common in this species: worth having a vet assess body condition periodically to confirm you're on track",
      ],
      vetLine: "Weak UVB and calcium cause MBD, especially consequential given how fast and large this species grows. Poor temperature or humidity control, harder to maintain consistently in a large enclosure, causes respiratory infection. And continuing a juvenile feeding schedule into adulthood causes the obesity that's common in this species. An adult tegu's size makes emergency transport genuinely difficult, so find a reptile vet before you need one.",
    },
    routes: [
      { slug: "argentine-tegu-legal-guide", line: "Florida's prohibited list with the dates, the closed grandfather window, and the eight other jurisdictions that ban or gate one." },
      { slug: "argentine-tegu-cost-guide", line: "$200 to $500 for the animal, a build that often exceeds $1,000 to $3,000, and why the enclosure you can buy is not the one you need." },
      { slug: "argentine-tegu-tank-setup-guide", line: "8x4x4 as a floor, 100 to 115F basking, 70 to 80% humidity, 12 to 18 inches of substrate, and the feeding schedule by age." },
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
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
      { slug: "bearded-dragon-feeding-guide", line: "Schedule by age, the insect-to-greens flip, gut-loading and dusting, and eight reasons a dragon stops eating." },
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
    funFact: "Blue tongue skinks give live birth instead of laying eggs, and they are one of the largest skink species kept as pets.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size is the exception: it comes
    // from the encyclopedia entry, which no deep dive repeats. Northern and
    // Indonesian animals are two different husbandry problems under one name,
    // so every row the tank setup guide splits by subspecies stays split here
    // rather than being flattened into one range. Day one cites the shared
    // reptile guide in the sidebar's Health and More list, which the set
    // tests keep reporting as a gap because the reader never opens it.
    // Reconciled 2026-09-09 after the blue tongue
    // skink set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Which skink is it", value: "Most Indonesian skinks sold in the US pet trade are wild-caught, and wild-caught animals commonly carry parasite loads picked up before import. Northern skinks are almost universally captive-bred.", source: "blue-tongue-skink-health-issues-guide" },
        { label: "Enclosure", value: "Adult minimum is 4x2x2 feet, roughly 8 square feet of floor space, for either type.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Basking surface", value: "Northern basking surface: 105 to 115°F. Indonesian basking surface: slightly cooler, 100 to 105°F.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Rest of the gradient", value: "Cool side (both): 70 to 80°F. Nighttime: stays above roughly 70°F for both types.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Humidity", value: "Northerns need relatively low humidity, around 40%. Indonesians need considerably more, 60 to 80%.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Floor", value: "A naturalistic soil mix works for both, roughly 60% topsoil to 40% play sand for Northerns, with Indonesian setups benefiting from added moisture-retentive elements, leaf litter, sphagnum moss, or a coco-fiber-based product. Keep it 4 to 6 inches deep.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb anywhere from 5 to 12% output, picked against how high above the basking area it will hang, spanning at least half the enclosure on the warm side, replaced every 12 months regardless of whether it still visibly lights up.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Diet ratio", value: "Young skinks, under about 12 months and by some guidance up to 24, need a protein-heavy diet, roughly 70 to 80% animal matter. Mature adults shift toward plant-heavy, roughly 40 to 60% animal protein and 45 to 60% leafy greens and vegetables, with about 5 to 10% fruit as treats.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Feeding schedule", value: "Babies, hatching to 3 to 5 months, are fed daily, sometimes 2 to 3 times a day, plus one designated fasting day a week. Juveniles, roughly 3 to 10 months, 3 to 4 times a week. Subadults and adults eat every 1 to 3 days on veterinary guidance; leaner schedules of once or twice a week circulate widely, and the veterinary interval is the one to follow.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Supplements", value: "Dust feeder insects with calcium, low or no phosphorus, frequency ranges from every feeding to a few times a week depending on the product and source.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Handling", value: "Leave a new skink alone for 2 to 3 weeks before attempting to handle it, giving it time to settle into its enclosure and start eating normally. Never lift or hold one by the tail.", source: "blue-tongue-skink-handling-guide" },
        { label: "The skink", value: "Northern (Australian) blue-tongued skinks typically run $150 for babies up to $250 for adults, with high-color or rare morphs reaching $400 to $700.", source: "blue-tongue-skink-cost-guide" },
        { label: "Budget", value: "Roughly $330 to $635 to set up, and total initial investment with the animal commonly lands between $430 and $1,335. Ongoing, roughly $490 to $830 a year, or about $41 to $69 a month once averaged out.", source: "blue-tongue-skink-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years is the commonly cited average, with well-documented cases living past 30.", source: "blue-tongue-skink-cost-guide" },
        { label: "Adult size", value: "17-24 inches (43-60 cm)." },
      ],
    },
    emergencyCard: {
      source: "blue-tongue-skink-health-issues-guide",
      callNow: [
        "A soft or rubbery jaw",
        "A kinked spine",
        "Tremors",
        "Difficulty walking",
        "A wild-caught or unspecified-origin skink that has not had a fecal exam and deworming",
        "Nasal or oral discharge",
        "Bubbling",
        "Open-mouth breathing",
        "Wheezing",
        "Retained shed on the toes or tail that has progressed to infection",
        "Scale rot on the belly that has progressed to infection",
      ],
      vetLine: "Metabolic bone disease is a vet situation always, and advanced cases are irreversible. Early respiratory cases often resolve once temperature and humidity are corrected, advanced cases need a vet and antibiotics. Always see a vet for a fecal exam and appropriate deworming, fenbendazole for roundworms and pinworms, praziquantel for tapeworms and flukes, if you've acquired a wild-caught or unspecified-origin skink.",
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
    tagline: "Spectacular red and gold, and it will spend most of its life underground!",
    funFact: "Fire skinks are one of the most brightly colored lizards in the hobby and one of the most rarely seen in their own enclosure. Give one a shallow scattering of substrate and it will vanish; give it the 4 to 6 inches it can actually tunnel through and it will build a burrow system, come out to bask, and behave like a completely different animal.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine cites the shared reptile guide
    // in the sidebar's Health and More list. Reconciled 2026-09-15 after the
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "The skink", value: "$25 to $40 for the common wild-caught or imported animals.", source: "fire-skink-cost-guide" },
        { label: "Setup budget", value: "Roughly $660 to $720, line by line: a 36x18x18 inch glass terrarium at $280, a 36 inch T5 HO UVB kit with a 6% bulb at $99, a basking bulb two-pack and dome at $43, a thermostat at $130, eight to nine bags of coconut fiber at $88 to $99, two hides at $8 to $60, and a digital thermometer and hygrometer at $11.", source: "fire-skink-cost-guide" },
        { label: "Monthly", value: "Roughly $40 to $65: feeder insects at $10 to $25 across two to three feedings a week, a $6 tub of calcium with D3 that lasts a few months, and substrate at $22 to $33 a month once a full replacement every three to four months is spread out.", source: "fire-skink-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years, a long commitment for a lizard this small and this affordable to acquire.", source: "fire-skink-cost-guide" },
        { label: "Adult size", value: "12 to 15 inches (30 to 38 cm) including tail." },
        { label: "Enclosure size", value: "36 inches long by 18 inches wide by 18 inches tall as a minimum for a single adult, larger is genuinely worth it since this is an active species. Don't house multiple fire skinks together, especially two males, real fighting risk.", source: "fire-skink-tank-setup-guide" },
        { label: "Temperature", value: "Ambient 80 to 86°F, with a basking spot around 92 to 96°F, and a night drop to about 70°F, 65°F is acceptable.", source: "fire-skink-tank-setup-guide" },
        { label: "Humidity", value: "60 to 70% ambient, higher overnight. Achieved through misting once or twice daily, keeping the substrate itself consistently moist, and providing a humid hide lined with sphagnum moss.", source: "fire-skink-tank-setup-guide" },
        { label: "Substrate, the whole job", value: "4 to 6 inches of a loose, moisture-retentive tropical mix, a DIY blend of roughly 40% topsoil, 40% coconut fiber, and 20% fine sand works well, topped with leaf litter or sphagnum moss.", source: "fire-skink-tank-setup-guide" },
        { label: "UVB", value: "UVB offers real benefit though is technically optional if diet is properly supplemented. A lower-output UVB tube in the 5 to 6% range, positioned so the basking area sits 7 to 10 inches below the lamp, replaced every 12 months, is a reasonable, well-supported choice.", source: "fire-skink-tank-setup-guide" },
        { label: "Feeding", value: "An insectivore, fed live. Full-grown adults eat two to three times a week depending on body condition, juveniles daily to every other day.", source: "fire-skink-tank-setup-guide" },
        { label: "What to feed", value: "Dust with a calcium powder at nearly every feeding, and add a reptile multivitamin to the rotation.", source: "fire-skink-tank-setup-guide" },
        { label: "Respiratory infection", value: "Open-mouth breathing, mucus, and wheezing. Caused by substrate or overall enclosure conditions running too dry, or occasionally too cold.", source: "fire-skink-health-issues-guide" },
        { label: "Handling, honestly", value: "Fire skinks aren't defensive or bitey in any meaningful sense, but they are notably skittish, fast-moving, and prone to burrowing out of sight the moment they feel exposed. Never grab or restrain by the tail.", source: "fire-skink-handling-guide" },
        { label: "Quarantine", value: "Quarantine periods of 3 to 6 months for new reptiles are recommended.", source: "reptile-quarantine-guide" },
      ],
    },
    emergencyCard: {
      source: "fire-skink-health-issues-guide",
      callNow: [
        "Open-mouth breathing, mucus, and wheezing: see a vet, this needs professional treatment",
        "Substrate impaction: see a vet if suspected",
        "Metabolic bone disease, less common in this species than in some other lizards but still possible if UVB and calcium supplementation are inadequate: see a vet",
        "Retained eye caps or a severe case of retained shed should prompt a vet visit rather than repeated home attempts",
        "A dropped tail: minor cases are manageable on their own, an open or infected wound needs a vet",
      ],
      vetLine: "Low humidity is directly responsible for the respiratory infection and poor shedding that make up most of this species' real health risk. Dry substrate causes impaction. And rough handling causes preventable tail loss. This is a species where getting the moisture and substrate depth right, more than any other single factor, determines how healthy and how visible your fire skink actually is.",
    },
    routes: [
      { slug: "fire-skink-cost-guide", line: "$25 to $40 for the skink, $660 to $720 for the setup, and the thermostat line people try to skip." },
      { slug: "fire-skink-tank-setup-guide", line: "36x18x18 as a floor, 92 to 96F basking, 60 to 70%, the 4 to 6 inch mix, and what to feed." },
      { slug: "fire-skink-handling-guide", line: "Why this is not the blue-tongued skink, and why the tail is the part to leave alone." },
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
      { q: "What does a fire skink enclosure setup cost?", a: "Roughly $660 to $720: a 36x18x18 inch enclosure, T5 UVB kit, basking bulb and dome, dimming thermostat, eight or nine bags of coconut fiber, two hides, and a hygrometer. The enclosure and thermostat dominate." },
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
    funFact: "Green anoles change color between green and brown based on temperature, mood, and stress rather than to match their surroundings, which is why the 'American chameleon' nickname is a misnomer. A stressed or cold anole goes brown; a relaxed, warm one goes green.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Salmonella and quarantine cite the shared reptile
    // guides in the sidebar's Health and More list. Reconciled 2026-09-15
    // after the green anole set
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Enclosure size", value: "24 inches long by 24 inches wide by 24 inches tall as a minimum for one adult, larger is better. Don't house multiple anoles together, they don't coexist peacefully.", source: "green-anole-tank-setup-guide" },
        { label: "Temperature", value: "Basking spot around 90F, cool side 70 to 77F, nighttime 65 to 75F. A 60-watt incandescent basking bulb in a ceramic-socket dome works well. Mount the heat lamp above or outside the enclosure's mesh top, not resting directly on it.", source: "green-anole-tank-setup-guide" },
        { label: "Humidity", value: "60 to 70% during the day, higher overnight. Achieve this through morning and evening misting, and a cool-mist humidifier or fogger overnight in dry climates, using distilled water.", source: "green-anole-tank-setup-guide" },
        { label: "UVB", value: "Genuinely necessary for this diurnal species. Target a UV index of 3.0 to 4.0 at the basking branch, using an Arcadia ShadeDweller kit or a T5 HO bulb in the 5 to 6% range, paired with a separate 6500K LED. Run a 10 to 14 hour photoperiod.", source: "green-anole-tank-setup-guide" },
        { label: "Substrate", value: "Coconut fiber or a tropical soil blend, roughly 60% organic topsoil to 40% coconut fiber, layered about 2 inches deep with leaf litter on top.", source: "green-anole-tank-setup-guide" },
        { label: "Feeding", value: "A juvenile eats daily, as much as it will take; an adult gets two to three feeders every other day.", source: "green-anole-tank-setup-guide" },
        { label: "Prey size", value: "Slightly smaller than the anole's head.", source: "green-anole-tank-setup-guide" },
        { label: "Supplements", value: "Gut-load and hydrate feeders for 24 to 48 hours before they go in, then dust them: a light dusting of a 50/50 calcium and multivitamin mix at every feeding, or a single all-in-one calcium-plus-vitamin powder used the same way.", source: "green-anole-tank-setup-guide" },
        { label: "Water", value: "Anoles drink droplets, not standing water. A fine mist spray bottle once or twice a day, aimed at foliage and glass, is how hydration actually happens for this species.", source: "green-anole-enrichment-guide" },
        { label: "Handling", value: "Green anoles generally make better display animals than a pet you take out and handle regularly.", source: "green-anole-handling-guide" },
        { label: "Adult size", value: "5 to 8 inches (13 to 20 cm), including the tail." },
        { label: "Budget, the animal", value: "Most sell for under $15, some as low as $5, with $5 to $30 covering the range you'll typically see.", source: "green-anole-cost-guide" },
        { label: "Budget, the setup", value: "Roughly $390 to $470.", source: "green-anole-cost-guide" },
        { label: "Ongoing costs", value: "Roughly $20 to $35 a month, modest.", source: "green-anole-cost-guide" },
        { label: "Lifespan", value: "Casually kept green anoles are often reported living just 3 to 4 years, while with appropriate care one can live up to 10 years and possibly longer.", source: "green-anole-cost-guide" },
        { label: "The law", value: "Unregulated in 38 jurisdictions and restricted in the southeastern states where it is native, because *Anolis carolinensis* is the only anole native to the United States and native wildlife rules routinely reach captive-bred animals bought in a shop.", source: "green-anole-legal-guide" },
        { label: "Salmonella", value: "Never clean the enclosure, water dish or any equipment in a kitchen sink or a bathtub people also use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Quarantine", value: "Longer than the two to four weeks that gets repeated informally: the Merck Veterinary Manual recommends 3 to 6 months for a new reptile.", source: "reptile-quarantine-guide" },
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
    funFact: "Green iguanas have a pale scale on the top of the head called the parietal eye. It is a genuine third eye with a lens and a retina, wired to the pineal gland rather than to vision, and it detects shadow moving overhead. It is an early warning system for birds of prey.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in `source`, and that article is where it changes; the
    // hub keeps no number of its own. Day one and hygiene cite the shared
    // reptile guides in the sidebar's Health and More list, which the set
    // tests keep reporting as gaps because the reader never opens them. This
    // species has no feeding guide, so the diet row cites the health issues
    // guide, which is where the diet material actually lives. Reconciled
    // 2026-09-09 after the green iguana set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Adult enclosure", value: "A single adult needs a minimum of 10 feet long by 5 feet wide by 6 feet tall, some vet and husbandry sources recommend 12 by 6 by 6. No commercial enclosure is large enough, this has to be a custom, walk-in build.", source: "green-iguana-tank-setup-guide" },
        { label: "First enclosure", value: "A juvenile can start temporarily in something like a 4x2x4 foot enclosure or a 40 to 55 gallon tank, but outgrows it within the first year, plan for the move into adult housing rather than being surprised by it.", source: "green-iguana-tank-setup-guide" },
        { label: "Temperature", value: "Basking area 100 to 120°F, cool end around 80°F, nighttime not dropping below the low 70s°F.", source: "green-iguana-tank-setup-guide" },
        { label: "UVB", value: "High-output T5 HO UVB is required for survival in this species, not a nice-to-have, replaced every 12 months regardless of whether the bulb still produces visible light.", source: "green-iguana-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80%, through misting twice daily with a pressure sprayer or an automated misting system, plus a large soaking tub the iguana can fully access.", source: "green-iguana-tank-setup-guide" },
        { label: "Floor", value: "2 to 4 inches of coconut husk or large-particle cypress mulch, sized specifically to reduce impaction risk.", source: "green-iguana-tank-setup-guide" },
        { label: "Diet", value: "Strictly plant-based: no insects, no dog or cat food, no eggs, ever.", source: "green-iguana-health-issues-guide" },
        { label: "Handling", value: "Approaching from directly above triggers a strong defensive response, it reads as an aerial predator attack to the iguana, approach from the side instead.", source: "green-iguana-handling-guide" },
        { label: "Housing together", value: "Adults are territorial. Adult males will fight each other, and a breeding-season male can be genuinely dangerous to the person keeping him.", source: "green-iguana-enrichment-guide" },
        { label: "Adult size", value: "An adult male green iguana reaches 6 to 7 feet including tail and up to 20 pounds, a completely different animal from the small, manageable baby most people bring home.", source: "green-iguana-handling-guide" },
        { label: "First year", value: "An estimated 70% of captive green iguanas die within their first year of life, and inadequate diet, lighting, and housing are named as the leading cause.", source: "green-iguana-health-issues-guide" },
        { label: "The iguana", value: "Farm-raised babies are cheap, commonly $20 to $100.", source: "green-iguana-cost-guide" },
        { label: "Budget", value: "Baby green iguanas are farm-raised and inexpensive, commonly $20 to $100. The first-year kit runs about $985 to $1,100. The hatchling setup and the adult enclosure are two different purchases a year or two apart. Ongoing, roughly $60 to $150 a month, covering fresh produce, calcium and multivitamin supplements, substrate, and meaningful electricity to heat and light a large enclosure.", source: "green-iguana-cost-guide" },
        { label: "Lifespan", value: "With excellent care, green iguanas live 15 to 20 years, sometimes 25.", source: "green-iguana-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, keep reptiles out of the kitchen entirely, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
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
      { slug: "green-iguana-cost-guide", line: "$20 to $100 for the hatchling, about $985 to $1,100 for the first-year kit, and why the adult enclosure is a second purchase a year later." },
      { slug: "green-iguana-tank-setup-guide", line: "The 10x5x6 ft adult minimum, the basking and humidity numbers, substrate, UVB, and the vertical space an arboreal lizard needs." },
      { slug: "green-iguana-handling-guide", line: "Claws, tail whipping, tail drop, how to approach, and what breeding season does to a mature male." },
      { slug: "green-iguana-health-issues-guide", line: "Metabolic bone disease, kidney disease, mouth rot, egg binding, burns, and impaction, with the husbandry failure behind each." },
      { slug: "green-iguana-feeding-guide", line: "The greens to build the salad on, which ones block calcium, why animal protein risks gout, and the calcium schedule by age." },
      { slug: "green-iguana-enrichment-guide", line: "The hatchling sociality research, height and climbing routes, foraging for a herbivore, and why space is the whole problem." },
    ],
    buyList: [
      "Juvenile enclosure, 4x2x4 ft PVC",
      "A plan and a budget for the walk-in adult enclosure",
      "T5 HO UVB kit, 36 inch, 12% or 14% bulb",
      "Halogen basking bulbs, 75 watt, two or three",
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
      { q: "What does the upfront setup cost?", a: "The first-year kit runs about $985 to $1,100 once branches, substrate, a soak tub, and a thermometer are in the pile. The adult enclosure comes a year or two later: a walk-in build is several hundred dollars in materials, a custom builder $1,000 and up, and a made to order 6x3x6 foot box $3,740." },
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
    funFact: "Jackson's chameleons are one of the few chameleon species that give live birth rather than laying eggs. A single birth can produce anywhere from 5 to 30 live offspring after a gestation of roughly 5 to 6 months!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine cites the shared guide in the sidebar's
    // Health and More list. Reconciled 2026-09-15 after the Jackson's
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "The chameleon", value: "$50 to $250. Common animals typically run $90 to $150, with prized, highly colored specimens of the primary subspecies reaching $250.", source: "jacksons-chameleon-cost-guide" },
        { label: "Setup budget", value: "Roughly $400 to $525: a 24x24x48 inch tall screen or hybrid enclosure at $155 to $195, a UVB fixture and bulb at $95 to $115, a halogen basking bulb at $18 to $25, a dimmer or thermostat for it at $73 to $93, a misting system at $35 to $60, and live plants with moisture-retentive substrate at $18 to $35.", source: "jacksons-chameleon-cost-guide" },
        { label: "Lifespan, by sex", value: "Males commonly live 8 to 10 years. Females live considerably shorter, typically 3 to 5 years, tied to the physical toll of giving birth to live young repeatedly.", source: "jacksons-chameleon-cost-guide" },
        { label: "Adult size", value: "9 to 13 inches (23 to 33 cm)." },
        { label: "Enclosure size", value: "24 inches long by 24 inches wide by 48 inches tall for a single adult, larger is better. House one chameleon per enclosure, males will fight.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "The walls", value: "Favor an enclosure with two or three solid sides rather than full mesh, this helps hold humidity and genuinely reduces stress compared to an all-screen setup.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Temperature, the defining difference", value: "Basking spot around 85°F, similar to the veiled chameleon, but ambient air should stay considerably cooler, 68 to 75°F, with a genuine night drop to 50 to 65°F.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Humidity", value: "Daytime humidity around 30 to 50%, rising to 75 to 100% overnight, achieved through morning and evening misting, an automated mister for consistency, and a cool-mist humidifier on a humidistat for the overnight spike.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "UVB", value: "UVB is required, a Zoo Med ReptiSun 5.0 T5 HO or Arcadia Forest 6% bulb, replaced every 6 to 12 months.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Substrate", value: "Bare bottom with paper towel is the simplest, most manageable choice, though a bioactive substrate setup works too if you prefer. Avoid loose, particulate substrate that could be accidentally ingested and cause impaction.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Water and equipment", value: "Use distilled water in misters and foggers to avoid mineral buildup and equipment damage, and disinfect misting equipment regularly. Never run a fogger while the heat lamp is on, the combination can create dangerous conditions inside the enclosure.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Feeding", value: "Offer no more than five to seven insects at a feeding, none larger than the space between the chameleon's eyes. Gut-load the insects before they go in.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Supplements, lightly", value: "Supplement lightly, on a weekly rhythm: calcium dusted onto an adult's non-breeding diet once weekly, and a general vitamin and mineral supplement that may go on once weekly too.", source: "jacksons-chameleon-tank-setup-guide" },
        { label: "Dehydration", value: "Genuinely the most common problem in this species, as with most chameleons, which won't reliably drink from a standing water dish. Watch for sunken eyes and lethargy. Manageable at home early, increase misting and dripper output immediately.", source: "jacksons-chameleon-health-issues-guide" },
        { label: "Handling", value: "Jackson's chameleons are among the more docile chameleons kept as pets, and more laid-back than the veiled chameleon, but more docile for a chameleon still means minimal handling, not a hands-on relationship.", source: "jacksons-chameleon-handling-guide" },
        { label: "Legal, before you buy", value: "Hawaii and the District of Columbia bar private ownership. New Jersey requires a possession permit, and Minnesota and Maine attach conditions.", source: "jacksons-chameleon-legal-guide" },
        { label: "Quarantine", value: "Quarantine periods of 3 to 6 months for new reptiles are recommended.", source: "reptile-quarantine-guide" },
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
      { slug: "jacksons-chameleon-tank-setup-guide", line: "24x24x48, 85F basking over 68 to 75F air, the real night drop, the UVB bulbs, and what to feed." },
      { slug: "jacksons-chameleon-handling-guide", line: "The three horns, the stress signals, and the live birth that sets this species apart." },
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
      { q: "What temperature does a Jackson's chameleon need, and how does it differ from a veiled chameleon?", a: "Basking near 85°F, much like a veiled chameleon, but the ambient air stays cooler at 68 to 75°F, with a real night drop to 50 to 65°F. Night heat is usually unnecessary and can work against a species adapted to cool mountain nights." },
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
    funFact: "Savannah monitors are built for digging. In the wild they may create burrows several feet deep to escape the African heat. A deep substrate is one of the most important enrichment features you can give them!",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Quarantine and hygiene cite the
    // shared reptile guides in the sidebar's Health and More list.
    // Reconciled 2026-09-15 after the
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal", value: "Eleven jurisdictions restrict it, five as outright bans and six as paperwork, and the other 41 place no restriction at all.", source: "savannah-monitor-legal-guide" },
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Parasites", value: "A fecal exam is worth doing proactively for any newly acquired savannah monitor rather than waiting for symptoms.", source: "savannah-monitor-health-issues-guide" },
        { label: "Adult size", value: "3 to 4 feet long and 8 to 15 pounds, genuinely large and strong enough that adult handling calls for real caution.", source: "savannah-monitor-handling-guide" },
        { label: "Enclosure", value: "A hatchling can start around 36x24x20 inches, but a single adult needs an 8-foot by 4-foot by 4-foot enclosure at minimum. Floor space matters more than height, and it is one monitor per enclosure. A ready-made 8ft PVC modular enclosure is actually 8x2x2ft, a partial match on length only, well short of the 8x4x4ft footprint an adult needs.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Basking", value: "Basking surface temperature should reach 140 to 150F, measured directly with an infrared thermometer rather than an air temperature reading. Cool side should run 75 to 85F, with nighttime dropping to around 70 to 75F.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Humidity", value: "Around 50% ambient, with access to a genuinely humid burrow where conditions run considerably wetter.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Substrate", value: "Deep is the operative word, 12 to 24 inches or more of a diggable soil, sand, and clay mix that genuinely holds a burrow shape.", source: "savannah-monitor-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb in the 10 to 12% range, spanning roughly half the enclosure, positioned 14 to 16 inches from the basking area.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Water basin", value: "Large enough for the monitor to fully submerge its entire body, not just a shallow dish.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Diet", value: "The staple is gut-loaded insects: dubia roaches, crickets, locusts, superworms, silkworms, grasshoppers, crayfish and other low-fat foods. Lean mice, chicks or freshwater fish belong in the occasional column and stay there, because rodents and fatty foods fed too often lead to severe obesity and organ disease. Juveniles eat daily or every other day. Adults eat two to three times a week.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Supplements", value: "Dust insects with calcium, without D3 where UVB is running and with D3 where it is not, and add a multivitamin weekly.", source: "savannah-monitor-tank-setup-guide" },
        { label: "The thing that kills them", value: "In captivity that rhythm disappears and animals get fed rich food year-round with a fraction of the activity level, which is why obesity and hepatic lipidosis are the signature problem here.", source: "savannah-monitor-health-issues-guide" },
        { label: "Handling", value: "Pick up from underneath rather than from above, since reaching down from above mimics a predator attack and triggers defensive reactions.", source: "savannah-monitor-handling-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Budget", value: "Juveniles run $150 to $300 and adults $300 to $800. Setup commonly runs well past $500 and sometimes exceeds $1,000, and upkeep is roughly $30 to $50 a month.", source: "savannah-monitor-cost-guide" },
        { label: "Lifespan", value: "Commonly cited at 10 to 15 years, with 15 to 20 achievable under excellent husbandry.", source: "savannah-monitor-cost-guide" },
      ],
    },
    emergencyCard: {
      source: "savannah-monitor-health-issues-guide",
      callNow: [
        "A rounded, heavy body shape, reduced activity, and general lethargy (obesity and hepatic lipidosis). Manageable at home through diet correction and a properly large enclosure, but advanced liver or organ disease needs a vet and may not be fully reversible by then",
        "Soft or deformed bones and fractures (metabolic bone disease). Always see a vet",
        "Laboured breathing from temperatures running too low or humidity mismanaged (respiratory infection). Always see a vet, this needs antibiotics",
        "Any newly acquired monitor, symptoms or not: a fecal exam, since parasites are genuinely common in wild-caught and farmed animals",
      ],
      vetLine: "Exotic vet workups for obesity, parasites, or metabolic bone disease can run into the hundreds, and given how common these issues are in this species, it's worth budgeting for rather than hoping to avoid. Body condition scoring is a more honest read on weight than eyeballing an animal you see every day.",
    },
    routes: [
      { slug: "savannah-monitor-cost-guide", line: "$150 to $300 for a juvenile and $300 to $800 for an adult, why that price is part of the problem, a setup that runs past $1,000, and the gap between what this species can live and what it usually does." },
      { slug: "savannah-monitor-tank-setup-guide", line: "The 8x4x4 foot standard and why nothing off the shelf meets it, a 140 to 150F basking surface, two feet of diggable substrate, the full-submersion basin, and what to feed." },
      { slug: "savannah-monitor-handling-guide", line: "Why this is not the ackie, the five warning signals that end a session, the grip for when an animal has to be controlled, and the nail trim that takes three people." },
      { slug: "savannah-monitor-health-issues-guide", line: "Obesity and fatty liver disease as the defining problem, the wild feeding rhythm that explains it, MBD, and the parasite screen every new animal needs." },
      { slug: "savannah-monitor-enrichment-guide", line: "Eight of eight monitors opening a puzzle tube in ten minutes, why that evidence is genus-level rather than species-level, and puzzle feeding that adds work instead of calories." },
      { slug: "savannah-monitor-legal-guide", line: "Legal in 41 of 52 jurisdictions, the one state that names this species, and the Arkansas list that clears ten monitors and stops one name short." },
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
    funFact: "Uromastyx (also called spiny-tailed lizards) are almost entirely herbivorous. They get nearly all their water from their food and rarely need a standing water dish! They're one of the few reptiles that thrive on seeds.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes;
    // the hub keeps no number of its own. Adult size comes from the
    // encyclopedia entry. Quarantine cites the shared reptile guide in the
    // sidebar's Health and More list. Reconciled 2026-09-15 after the
    // uromastyx set test
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
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "The lizard", value: "$150 to $400 for a common captive-bred Mali or ornate uromastyx, with hatchlings toward the lower end and adults higher.", source: "uromastyx-cost-guide" },
        { label: "Setup budget", value: "Roughly $500 to $900. The enclosure is the biggest single expense at $280 to $400, and it needs to be 4x2x2 feet at minimum from day one rather than a smaller size you'll upgrade later.", source: "uromastyx-cost-guide" },
        { label: "Monthly", value: "Roughly $25 to $45 a month for fresh greens and produce, seeds, supplements, and the cost of running high-wattage bulbs.", source: "uromastyx-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years is the number most commonly cited for this species.", source: "uromastyx-cost-guide" },
        { label: "Adult size", value: "10 to 30 inches (25 to 75 cm) depending on species." },
        { label: "Enclosure size", value: "4 feet long by 2 feet wide by 2 feet tall is the minimum for species up to about 18 inches. Larger species, the Egyptian uromastyx especially, need up to 8x4x4 feet for a full-grown adult. House one uromastyx per enclosure.", source: "uromastyx-tank-setup-guide" },
        { label: "Basking, the defining requirement", value: "Basking surface temperature needs to reach 110 to 120°F, with the giant Egyptian species needing at least 130°F. Cool zone should sit around 85°F, with nighttime dropping to around 65°F, usually without needing supplemental night heat.", source: "uromastyx-tank-setup-guide" },
        { label: "Humidity, the other one", value: "Uromastyx need humidity low enough to make a bearded dragon look tropical by comparison, just 20 to 30% ambient, measured on the cool side. High humidity makes this species genuinely sick.", source: "uromastyx-tank-setup-guide" },
        { label: "Substrate", value: "Fine sand or a sandy soil mix, or a DIY blend of roughly 50% play sand, 30% topsoil, and 20% excavator clay, packed at least 4 inches deep to support burrowing.", source: "uromastyx-tank-setup-guide" },
        { label: "UVB", value: "Strong UVB is required, not optional, for this diurnal species. A high-output T5 HO bulb in the 14% range, targeting a basking-area UVI of 4.5 to 6.0, paired with a bright daylight LED bar.", source: "uromastyx-tank-setup-guide" },
        { label: "Feeding schedule", value: "Babies and juveniles get fresh vegetables and greens daily, as much as they'll clean up in one sitting. Adults: anywhere from 2 to 4 times a week up to 5 to 7 days a week.", source: "uromastyx-feeding-guide" },
        { label: "What they eat", value: "The bulk of the diet is dark leafy greens and edible flowers, chopped or shredded, not whole leaves, which are a choking and impaction risk especially for young animals: collard greens, dandelion greens and flowers, mustard and turnip greens, endive, escarole, arugula, watercress, and hibiscus leaves and flowers.", source: "uromastyx-feeding-guide" },
        { label: "Where the water comes from", value: "These lizards get almost all of their water from food, so feed greens before they wilt.", source: "uromastyx-health-issues-guide" },
        { label: "Metabolic bone disease", value: "The most common issue in captivity. Watch for a soft or hanging jaw, swollen limbs, tremors, deformed bones, and lethargy, though the early signs are behavioral: poor appetite, weakness, and an inability to walk normally.", source: "uromastyx-health-issues-guide" },
        { label: "Handling", value: "Scoop from below rather than reaching down from above, which reads as a predatory approach and triggers defensive hissing and tail-whipping. Give a newly acquired uromastyx about two weeks alone to settle in before attempting regular handling.", source: "uromastyx-handling-guide" },
        { label: "Quarantine", value: "Quarantine periods of 3 to 6 months for new reptiles are recommended.", source: "reptile-quarantine-guide" },
      ],
    },
    emergencyCard: {
      source: "uromastyx-health-issues-guide",
      callNow: [
        "Lumps or swelling in the joints or under the skin",
        "Runny or foul-smelling stools",
        "Dull or darkened coloration",
        "Sunken eyes or lethargy",
        "Open-mouth breathing or discharge from the nose",
        "Any tissue protruding from the vent",
      ],
      vetLine: "Uromastyx are hardy desert specialists, and most health problems trace directly back to getting this species' unusually specific heat, humidity, or dietary needs wrong. Dehydration looks like loose skin, sunken eyes, dull color, and lethargy. A lizard showing those needs a vet, not a bigger water bowl.",
    },
    routes: [
      { slug: "uromastyx-cost-guide", line: "$150 to $400 for the lizard, $500 to $900 of setup, and the starter kits that are sized wrong." },
      { slug: "uromastyx-tank-setup-guide", line: "4x2x2 as a floor, a 110 to 120F basking surface, 20 to 30% humidity, and the substrate recipe." },
      { slug: "uromastyx-feeding-guide", line: "A herbivore's schedule by age, the greens list, where seeds actually belong, and how to read a fast." },
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
    tagline: "The Arabian casque-crowned climber often called the most forgiving chameleon to start with!",
    funFact: "Veiled chameleons are remarkably drought-adapted for a chameleon. Native to the mountains of Yemen and Saudi Arabia, they tolerate wider temperature and humidity swings than most other chameleon species. Females are also famous for laying large clutches of infertile eggs even without ever having contact with a male.",
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Built 2026-09-14 for the veiled
    // chameleon set test (docs/READER_REVIEWS.md). The old hub's supplement schedule was
    // roughly four times the feeding guide's, on the two supplements that guide
    // says cause gular edema in excess; that is the row to check first if this
    // hub ever drifts again.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Hawaii and Washington DC are the two places you cannot keep one, and neither ban is written about chameleons: DC permits only non-venomous snakes, fish and turtles, so every lizard is out, and Hawaii bars anything not on an approved list.", source: "veiled-chameleon-legal-guide" },
        { label: "Enclosure", value: "2 feet by 2 feet by 4 feet (24x24x48 inches) is the practical minimum for an adult, bigger, 4x2x4 feet, is better if you have the space.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Enclosure type", value: "Hybrid enclosures, with partially solid sides, hold humidity better and are increasingly preferred.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Temperature", value: "Basking spot around 85°F for females and juveniles, up to 90 to 95°F for adult males. Ambient temperature 72 to 80°F, with a beneficial night drop to 55 to 65°F.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Humidity", value: "40 to 50% during the day and 80 to 100% at night, raised through misting sessions morning and evening plus a dripper or an overnight cool-mist humidifier using distilled water.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Lighting", value: "A linear T5 HO UVB tube (ReptiSun 5.0 or Arcadia 6% are the commonly recommended options) spanning the enclosure, with the basking branch positioned roughly 6 to 9 inches below it. Replace the bulb every 6 to 12 months regardless of whether it still visibly lights up.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Water", value: "Veiled chameleons do not recognize standing water as something to drink. They only respond to moving droplets on leaves and branches. A dripper or misting system is a genuine essential, not an accessory.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Substrate", value: "Bare bottom or paper towel is the safest, easiest option.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Laying bin, females", value: "Keep a moist sand or soil bin, roughly 5 to 10 inches deep, permanently available, not something you set up only once she shows signs of needing it.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Feeding schedule", value: "Babies at 1 to 3 months eat as much as they'll eat, roughly twice daily. Juveniles at 3 to 6 months take around 10 to 12 small crickets daily. Sub-adults at 6 to 12 months take 8 to 10 medium crickets daily or every other day. Adults from 12 months take roughly 4 to 6 feeders every other day, and adult females specifically should be fed a somewhat restricted amount.", source: "veiled-chameleon-feeding-guide" },
        { label: "Prey size", value: "Size prey to the space between your chameleon's eyes, nothing bigger.", source: "veiled-chameleon-feeding-guide" },
        { label: "Supplements", value: "Dust feeders with plain calcium, no D3, no phosphorus, at nearly every feeding.", source: "veiled-chameleon-feeding-guide" },
        { label: "Handling", value: "Solitary, territorial display animals that generally don't tolerate handling well. Approach slowly from below with your palm open and let the chameleon choose to climb onto your hand rather than grabbing from above, which reads as a predator attack.", source: "veiled-chameleon-handling-guide" },
        { label: "Budget", value: "$20 to $100 for a captive-bred juvenile, and roughly $400 to $800 for the upfront setup.", source: "veiled-chameleon-cost-guide" },
        { label: "The emergency that costs most", value: "Egg-binding in females is the emergency risk: medical management runs $200 to $400, and surgery can run $800 to $1,500 or more.", source: "veiled-chameleon-cost-guide" },
        { label: "Lifespan", value: "Males commonly live 6 to 8 years. Females typically live considerably shorter, often just 2 to 6 years, and many don't make it past 2 to 3, driven by the physical toll of producing egg clutches.", source: "veiled-chameleon-cost-guide" },
        { label: "Adult size", value: "Males 18 to 24 inches (46 to 61 cm), females 10 to 14 inches (25 to 36 cm)." },
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
