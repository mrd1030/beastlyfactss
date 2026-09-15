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
    // encyclopedia entry. Quarantine, hygiene, the thermostat probe and the
    // power-outage line cite the shared reptile guides in the sidebar's
    // Health and More list. Reconciled 2026-09-15 after the ackie monitor
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
        { label: "Legal", value: "41 of the 52 jurisdictions place no restriction on it at all. The four places it is unavailable, Washington DC, Hawaii, New York City and New Mexico, are not reacting to this species so much as to lizards or monitors in general, and New Jersey, Rhode Island and Maine want a permit.", source: "ackie-monitor-legal-guide" },
        { label: "Day one", value: "Quarantine any new ackie until it's cleared two separate clean fecal checks before introducing it to an established collection, and maintain good general hygiene.", source: "ackie-monitor-health-issues-guide" },
        { label: "Enclosure", value: "The minimum for a single adult is 5 feet long by 2.5 feet wide by 4 feet tall, larger than the older 4x2x2 foot standard often quoted for this species. The reason is directly tied to how active ackies actually are: this isn't an animal that thrives in a modest footprint the way a more sedentary lizard might.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Basking surface", value: "Roughly 130 to 170°F, measured directly on the basking stone or stack with an infrared thermometer, not air temperature. A reading below about 130°F is too cool for this species to properly synthesize vitamin D. Most keepers under-provide heat rather than over-provide it, so erring toward the hotter end is usually the safer mistake.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Cool side", value: "Around 75 to 80°F, giving a real thermal gradient across the enclosure.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture. For an overhead source, follow your controller's own instruction and confirm the result with independent checks.", source: "reptile-heating-thermostats-guide" },
        { label: "Retes stack", value: "Stacked shelves or tiles positioned under the basking lamp let your ackie choose its exact preferred basking spot along a genuine temperature gradient, rather than being stuck with one uniform hot zone. Combined with the substrate dam, this is what separates an adequate setup from a good one.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Substrate", value: "12 to 24 inches of a soil and sand mix that holds a proper burrow, contained with a substrate dam tall enough to hold that depth. Avoid shallow bark-only setups or dry, pure sand, both of which collapse and fail to support the burrowing this species relies on. Budget for multiple bags rather than assuming a single one will cover it.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Why depth, really", value: "Ackies are obligate burrowers that construct extensive tunnel systems, and depth is the single largest housing choice you make for them. A shallow layer is bedding, not a burrow. A separate damper dig zone lets them excavate humid tunnels without keeping the whole arid enclosure wet.", source: "ackie-monitor-enrichment-guide" },
        { label: "Humidity", value: "Ackies need both dry and humid zones, and most of the moisture should live underground rather than in the air. That is exactly why deep, moisture-holding substrate matters so much: it is doing real thermoregulatory and hydration work, not just providing digging material.", source: "ackie-monitor-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb in the 12% desert range, spanning roughly half the enclosure over the basking area, replaced every 12 months. Target a basking-area UVI of 4.0 to 6.0, meaningfully higher than most other commonly kept lizards need. Bright daylight LED alongside it supports this full-sun species.", source: "ackie-monitor-tank-setup-guide" },
        { label: "Feeding schedule", value: "Hatchlings and juveniles up to about 6 months are fed daily and allowed to eat as much as they want. Subadults and adults eat every other day, roughly what the animal finishes within a 5 to 10 minute window rather than food left available indefinitely. Small, frequent meals are healthier here than large, occasional ones.", source: "ackie-monitor-feeding-guide" },
        { label: "Staple food", value: "Well-gutloaded insects: black soldier fly larvae, crickets, discoid roaches, dubia roaches, grasshoppers, and silkworms. Mealworms and superworms are occasional additions rather than the base, being higher in fat with harder exoskeletons. Size prey to roughly the width of the ackie's head, not bigger.", source: "ackie-monitor-feeding-guide" },
        { label: "Not rodents", value: "Don't make rodents a dietary staple. Mice and rats are calorie-dense, and a rodent-heavy diet is directly linked to the fatty liver disease that shortens more captive monitor lifespans than almost anything else. Eggs, quail chicks, and young mice or rats are fine as occasional treats, genuinely sparingly.", source: "ackie-monitor-feeding-guide" },
        { label: "Supplements", value: "Lightly dust most insect feeders with a reptile calcium powder at each feeding, skipping isopods and hornworms since they're already calcium-rich. Use a multivitamin containing true vitamin A, not just beta-carotene, occasionally rather than on a fixed weekly schedule, since over-supplementing is a real risk here.", source: "ackie-monitor-feeding-guide" },
        { label: "Gut-load first", value: "Gutload every feeder insect at least 24 hours before offering it, since what the insect ate is most of what the ackie gets out of it.", source: "ackie-monitor-feeding-guide" },
        { label: "Weigh it weekly", value: "Ackies are naturally so active that they burn far more energy in the wild than most captive setups allow for, and combined with their strong food motivation that creates real overfeeding risk. Reduce feeding frequency and amount, provide a genuinely large enclosure, and weigh the monitor weekly with a kitchen scale to track trends.", source: "ackie-monitor-health-issues-guide" },
        { label: "Handling", value: "Never grab an ackie from above or chase it out of a hide, which triggers a real prey-flight response rather than building trust. Let the monitor voluntarily climb onto you instead, and use tong-feeding as the main bonding tool. Tame ackies become interactive over time, but they're fast and can scratch or nip if startled.", source: "ackie-monitor-handling-guide" },
        { label: "Enrichment", value: "Substrate deep enough for a real burrow system first, then enclosure footprint and height since this is an active forager, then puzzle and extraction feeding, then a separate humid dig zone, then climbing structure and rock stacks.", source: "ackie-monitor-enrichment-guide" },
        { label: "Why puzzles work here", value: "Eight juvenile black-throated monitors were presented with a transparent tube containing food. All eight worked out how to open it within ten minutes, on the first trial. Those are Varanus albigularis results and the ackie is Varanus acanthurus, so this is genus-level evidence: what transfers is that varanids solve novel food problems fast.", source: "ackie-monitor-enrichment-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, keep the lizard out of the kitchen, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Budget", value: "$150 to $450 for the monitor, with red ackies at the top of that. Setup runs $800 to $1,500 or more, and upkeep roughly $40 to $80 a month, most of it feeder insects and electricity for the high-wattage basking bulbs.", source: "ackie-monitor-cost-guide" },
        { label: "Adult size", value: "Around 2 feet (0.6 m) typical, reported from 17.3 inches (44 cm) to 30 inches (76 cm)." },
        { label: "Lifespan", value: "15 to 20 years with proper housing and care. That is a long-term commitment layered on a demanding setup, worth weighing both factors together rather than focusing on the animal's relatively modest purchase price.", source: "ackie-monitor-cost-guide" },
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
    // between them. Salmonella, thermostats, stool and hydration, quarantine
    // and the emergency plan cite the shared reptile guides in the sidebar's
    // Health and More list. Reconciled 2026-09-15 after the tegu set test
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
        { label: "Check the law first", value: "Since April 29, 2021, new acquisition of a pet tegu has been banned outright in Florida under the state's Prohibited species list, and the grandfather window closed on July 28, 2021. Georgia, Alabama, Louisiana, Hawaii, the District of Columbia and New York City ban one as a pet, New Mexico requires an import permit, New Jersey a permit under a closed-list code, and Minnesota allows one only from a permitted breeder. Alabama bans at genus level, so a Colombian tegu is caught too.", source: "argentine-tegu-legal-guide" },
        { label: "Enclosure size", value: "8 feet by 4 feet by 4 feet is the minimum for an adult male, with females needing somewhat less but still substantial space. Many experienced keepers aim for 10 feet by 5 feet by 5 feet or, where possible, a dedicated reptile room. Hatchlings can start in something smaller, around 40 gallons, but grow fast enough that rehousing within the first year is standard.", source: "argentine-tegu-tank-setup-guide" },
        { label: "The enclosure you can actually buy", value: "A ready made 8ft PVC modular enclosure is actually 8x2x2ft, a partial match on length only, well short of the full 8x4x4ft footprint an adult tegu needs. True adult sized housing for this species is typically a DIY build or ordered direct from a manufacturer.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Temperature", value: "Basking area 100 to 115F, warm ambient in the 90s, cool side around 80F, with nighttime allowed to drop to 65F without triggering brumation. This species needs a powerful heat source, a cluster of basking bulbs, a radiant heat panel, or both, run through a real heavy duty thermostat rated for the wattage a setup this size actually draws.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Humidity", value: "70 to 80%, maintained through deep, moisture retentive substrate, live plants in a bioactive style setup, a large water tub, and often an automatic misting system. Manually misting an 8 foot enclosure consistently isn't realistic for most keepers.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Substrate depth", value: "Deep, 12 to 18 inches or more, of an absorbent, burrow supporting mix: cypress mulch, coconut fiber, organic topsoil, or a bioactive blend. Reaching that depth across an 8 by 4 foot floor takes considerably more than a pack or two. Avoid dry, dusty substrate that doesn't hold a burrow shape.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Why the depth", value: "Tegus dig, extensively, and will build a burrow they sleep in and brumate in. Depth is the largest single enclosure choice for the species, and a shallow layer is just bedding.", source: "argentine-tegu-enrichment-guide" },
        { label: "UVB", value: "Strong UVB is required. For an enclosure this large, a 46 inch T5 HO bulb in the 12 to 14% range, spanning a quarter to half the enclosure's length on the warm side, targeting a basking area UVI of 3.0 to 4.0. Add a 6500K LED for brightness and to support live plants. Run a 12 to 14 hour photoperiod.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Feeding frequency", value: "Set by age rather than by size. Feed a young tegu every day. From one to three years old, every other day. Past three years, every third day. Adult tegus are prone to obesity, so weigh yours regularly and give it the room and the time to move.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Diet", value: "Young tegus are primarily insectivorous, then the protein moves to appropriately sized pre-killed or frozen-thawed rodents. Live rodents are not worth the injury risk. Lean ground meat, fish and raw eggs are occasional treats. Offer a variety of vegetables alongside smaller amounts of fruit, and expect fruit to matter more as the animal ages.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Supplements", value: "A calcium supplement without D3 goes on or in every meal, and a multivitamin once a week. That does not change with age.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Never from your hand", value: "A hungry tegu is a voracious feeder and will not distinguish a finger from the food, so use a bowl, tongs, a puzzle feeder, or a separate paper-lined feeding container, which has the added effect of teaching the animal that its usual enclosure is not where food appears.", source: "argentine-tegu-tank-setup-guide" },
        { label: "Puzzle feeding", value: "A container with visible food that has to be opened, food under a moveable object, food buried in a new spot. A tegu will work sliders and lift-out plugs, which is exactly what a bearded dragon will not do.", source: "argentine-tegu-enrichment-guide" },
        { label: "A soak big enough to get into", value: "Tegus soak readily, and a container large enough to fully enter supports hydration and shedding. It is genuinely passive: you provide it, the animal decides. Larger tubs are worth it for an adult.", source: "argentine-tegu-enrichment-guide" },
        { label: "Adult size", value: "3 to 5 feet (90 to 150 cm)." },
        { label: "Two handlers", value: "The nearest rule is one handler per 3 to 4 feet, and a full-grown Argentine is past it: two people for any job that needs it held still.", source: "argentine-tegu-handling-guide" },
        { label: "Handling, the honest version", value: "The dog-like temperament is real and it is earned, not automatic. Tegus need regular, supervised handling and free roam time to develop and keep it. Skip that socialization and you get a considerably more defensive animal instead, and a bite from an animal this size is powerful.", source: "argentine-tegu-handling-guide" },
        { label: "Approach", value: "From the side, never from above, and never disturb one in its hide. Hatchlings at 7 to 10 inches read anything swooping down as a predator and are more likely to run than bite.", source: "argentine-tegu-handling-guide" },
        { label: "Tail autotomy", value: "Unlike monitors, tegus can drop their tails as a defense mechanism, which surprises keepers coming from a savannah monitor. It matters most with flighty subadults or a newly acquired animal that hasn't settled.", source: "argentine-tegu-handling-guide" },
        { label: "Brumation", value: "Argentine tegus slow down, eat less, and burrow for roughly 2 to 4 months during cooler periods, even when kept as pets indoors, triggered by shortening day length and changes in humidity and pressure rather than temperature alone. It isn't required for a non-breeding pet tegu and skipping it isn't harmful, though many keepers find allowing it improves feeding response afterward. For handling, that season is closed: a burrow counts as a hide, so leave it.", source: "argentine-tegu-handling-guide" },
        { label: "Budget, the animal", value: "Standard black and white tegus, along with blue and Chacoan morphs, typically run $200 to $500. Rare designer morphs, albino, high white, and various patterned lines, push considerably higher, $700 to $1,200 or more for the rarest combinations.", source: "argentine-tegu-cost-guide" },
        { label: "Budget, the setup", value: "Often exceeding $1,000 to $3,000. The adult enclosure alone is custom built at 8 by 4 by 4 feet minimum and routinely runs into the thousands, then add powerful basking and radiant heat, a 46 inch high output UVB fixture, and enough substrate for 12 to 18 inches of depth.", source: "argentine-tegu-cost-guide" },
        { label: "Ongoing costs", value: "Roughly $40 to $100 or more a month. A varied omnivore diet, rodents, insects, eggs, ground meats, fruit, and vegetables, plus meaningful electricity for heating and lighting a large enclosure.", source: "argentine-tegu-cost-guide" },
        { label: "Vet costs", value: "A routine exotic exam runs $50 to $135, with emergency visits starting around $150 to $300 before diagnostics. An adult tegu's size makes transport to a vet logistically difficult, so establish a relationship with a reptile vet early, before you need one urgently.", source: "argentine-tegu-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years is typical, with some individuals documented living past 30 under excellent care. Combined with the setup cost, this is a genuinely serious, multi-decade financial and space commitment.", source: "argentine-tegu-cost-guide" },
        { label: "Salmonella", value: "A completely healthy-looking reptile can carry and shed Salmonella with no outward sign, and the route is hands and surfaces to mouth rather than bites. Never clean the enclosure, water dish or any equipment in a kitchen sink or a bathtub people also use. Children younger than 5 should not handle or touch reptiles or their environments at all.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Thermostat", value: "The probe goes at the animal's level, never taped to the back of a heat mat and never left up near the fixture reading room air. A basic on/off unit suits a mat; a basking bulb or radiant heat panel benefits from a pulse proportional or dimming controller, which holds a steadier output instead of swinging fully on and off.", source: "reptile-heating-thermostats-guide" },
        { label: "Quarantine", value: "Longer than the two to four weeks that gets repeated informally: the Merck Veterinary Manual recommends 3 to 6 months for a new reptile. A bare enclosure on plain paper towel, so mites and abnormal stool show against a blank background, with dedicated tools and the quarantined animal serviced last, after every other animal.", source: "reptile-quarantine-guide" },
        { label: "Power outage", value: "A healthy adult in most commonly kept species tolerates a few hours to one cool night without real harm. The risk climbs with time, not with a single cold hour: a day or two below the species' normal nighttime low is when cold stress and secondary respiratory infection become a real concern.", source: "reptile-emergency-plan-guide" },
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
    // rather than being flattened into one range. Day one, shedding, hygiene,
    // and power outage cite the shared reptile guides in the sidebar's Health
    // and More list, which the set tests keep reporting as gaps because the
    // reader never opens them. Reconciled 2026-09-09 after the blue tongue
    // skink set test (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Which skink is it", value: "Most Indonesian skinks sold in the US pet trade are wild-caught, and wild-caught animals commonly carry parasite loads picked up before import. Northern skinks are almost universally captive-bred. Knowing which one you have changes almost everything below.", source: "blue-tongue-skink-health-issues-guide" },
        { label: "Enclosure", value: "Adult minimum is 4x2x2 feet, roughly 8 square feet of floor space, for either type. Bigger is always better. Front-opening PVC enclosures are preferred over glass since they hold humidity more effectively, which matters more for Indonesian skinks specifically.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Basking surface", value: "Northern basking surface: 105 to 115°F. Indonesian basking surface: slightly cooler, 100 to 105°F.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Rest of the gradient", value: "Cool side (both): 70 to 80°F. Nighttime: stays above roughly 70°F for both types. A heat source (halogen or a deep heat projector) is required, mounted with a basking dome fixture and run on a thermostat, which is what holds the surface inside those ranges instead of letting an unregulated bulb climb past them and burn the animal.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Humidity", value: "Northerns need relatively low humidity, around 40%. Indonesians need considerably more, 60 to 80%. Achieve the higher Indonesian range through moisture-retentive substrate, regular misting, and a larger water bowl.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Floor", value: "A naturalistic soil mix works for both, roughly 60% topsoil to 40% play sand for Northerns, with Indonesian setups benefiting from added moisture-retentive elements, leaf litter, sphagnum moss, or a coco-fiber-based product. Keep it 4 to 6 inches deep.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb anywhere from 5 to 12% output, picked against how high above the basking area it will hang, spanning at least half the enclosure on the warm side, replaced every 12 months regardless of whether it still visibly lights up. Keep the skink no closer than about 10 inches from the bulb.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Photoperiod", value: "Run a photoperiod of roughly 11 to 13 hours depending on season for either type.", source: "blue-tongue-skink-tank-setup-guide" },
        { label: "Diet ratio", value: "Young skinks, under about 12 months and by some guidance up to 24, need a protein-heavy diet, roughly 70 to 80% animal matter. Mature adults shift toward plant-heavy, roughly 40 to 60% animal protein and 45 to 60% leafy greens and vegetables, with about 5 to 10% fruit as treats.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Feeding schedule", value: "Babies, hatching to 3 to 5 months, are fed daily, sometimes 2 to 3 times a day, plus one designated fasting day a week. Juveniles, roughly 3 to 10 months, 3 to 4 times a week. Subadults and adults eat every 1 to 3 days on veterinary guidance; leaner schedules of once or twice a week circulate widely, and the veterinary interval is the one to follow.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Portion", value: "One meal roughly the size of the skink's own skull, or about 1 to 2 tablespoons for an adult, is the commonly cited portion.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Supplements", value: "Dust feeder insects with calcium, low or no phosphorus, frequency ranges from every feeding to a few times a week depending on the product and source. A separate multivitamin is used more sparingly, once or twice a week to once or twice a month.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Weight checks", value: "Sources converge in the 7 to 10% body-weight-loss range as an urgent threshold, weighing weekly on a gram-accurate scale and keeping a log is the standard way to catch a slow decline before it becomes obvious.", source: "blue-tongue-skink-feeding-guide" },
        { label: "Handling", value: "Leave a new skink alone for 2 to 3 weeks before attempting to handle it, giving it time to settle into its enclosure and start eating normally. Build trust gradually through food-based interaction, and let handling follow from there.", source: "blue-tongue-skink-handling-guide" },
        { label: "Session length", value: "Start at 5 minutes a day, adding a minute each time the skink sits still, until it holds still for at least 15 minutes. Start a juvenile or a new wild-caught Indonesian at the 5-minute end. A settled captive-bred Northern can run to the full 15 minutes.", source: "blue-tongue-skink-handling-guide" },
        { label: "Picking one up", value: "Come in from the side, where it can see you. Slide a hand under the body and support the whole animal along your forearm, tail included. Never lift or hold one by the tail. Wash your hands first, so they do not smell like a food item.", source: "blue-tongue-skink-handling-guide" },
        { label: "Reading the animal", value: "Short snorts or huffs mean annoyance, tail flicking or wagging means irritation, and long huffs or hisses with the body tilted and puffed up mean the skink has moved on to aggression. What to do is the same at every step: stop, take your hands out, and end the session there.", source: "blue-tongue-skink-handling-guide" },
        { label: "Enrichment", value: "Scatter food across the substrate. Hide portions under cork and leaf litter. Vary where the food appears from day to day, so the search stays a search. Blue tongues are terrestrial and cover ground, so footprint beats height every time.", source: "blue-tongue-skink-enrichment-guide" },
        { label: "The skink", value: "Northern (Australian) blue-tongued skinks typically run $150 for babies up to $250 for adults, with high-color or rare morphs reaching $400 to $700. Indonesian skinks are noticeably cheaper, generally $100 to $250.", source: "blue-tongue-skink-cost-guide" },
        { label: "Budget", value: "Roughly $330 to $635 to set up, and total initial investment with the animal commonly lands between $430 and $1,335. Ongoing, roughly $490 to $830 a year, or about $41 to $69 a month once averaged out.", source: "blue-tongue-skink-cost-guide" },
        { label: "Vet", value: "A routine exam runs roughly $100 to $150, with annual checkups recommended for any skink. Wild-caught Indonesian skinks frequently need a fecal exam and deworming treatment right after purchase, an added cost that Northern buyers usually skip entirely.", source: "blue-tongue-skink-cost-guide" },
        { label: "Lifespan", value: "15 to 20 years is the commonly cited average, with well-documented cases living past 30.", source: "blue-tongue-skink-cost-guide" },
        { label: "Adult size", value: "17-24 inches (43-60 cm)." },
        { label: "Shedding", value: "Raise humidity toward the high end during the shed, give rough surfaces to rub on, and never pull loose skin. A 30-minute chin-deep soak at cage temperature loosens retained shed.", source: "reptile-shedding-complete-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, keep reptiles out of the kitchen entirely, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "The normal night low stays above about 70°F. Act below 70°F: add heat, move the animal, or call ahead to a sitter.", source: "reptile-emergency-plan-guide" },
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
    funFact: "Fire skinks are one of the most brightly colored lizards in the hobby and one of the most rarely seen in their own enclosure. Give one four inches of substrate and it will vanish; give it eight to ten and it will build a burrow system, come out to bask, and behave like a completely different animal.",
    // Labels match `covers` strings in affiliateProducts.js and the figures are those
    // products' vetted prices. See scripts/check-cost-coverage.mjs.
    costs: {
      setup: [
        { item: "36x18x18 in enclosure", low: 202, high: 258 },
        { item: "Moist substrate (coconut fiber + topsoil)", low: 10, high: 16 },
        { item: "Halogen basking bulb + fixture", low: 18, high: 25 },
        { item: "Moderate UVB (T5 HO Arcadia 6%)", low: 95, high: 115 },
        { item: "Cork bark slabs and flat stones", low: 28, high: 40 },
        { item: "Sphagnum moss for moist hide", low: 8, high: 14 },
        { item: "Shallow water dish", low: 8, high: 14 },
        { item: "Digital thermometer and hygrometer", low: 11, high: 19 },
      ],
      annual: [
        { item: "Live insects (crickets, dubia, worms)", low: 200, high: 380 },
        { item: "Calcium w/D3 + multivitamin", low: 15, high: 25 },
        { item: "UVB bulb replacement (every 6-12 months)", low: 111, high: 141 },
        { item: "Feeding tongs", low: 8, high: 14 },
        { item: "Electricity for heat and lighting", low: 70, high: 140 },
        { item: "Exotic vet check", low: 70, high: 150 },
      ],
    },
    sections: {
      housing: `A single adult wants 36x18x18 inches as a floor-space-first enclosure. Height is close to irrelevant here; fire skinks are terrestrial and fossorial, and the useful dimension is length and depth.

Substrate is the whole game with this species. Use four to six inches of a mix that holds a tunnel. ReptiFiles gives 40 percent organic topsoil, 40 percent coconut fiber and 20 percent fine sand, kept slightly damp, with leaf litter on top. A fire skink in shallow bedding hides in one corner under a hide and looks permanently nervous. The same animal in deep substrate builds a burrow, uses the whole enclosure and comes out to bask.

Provide a basking surface of 92 to 96 degrees F, a cool end of 75 to 85, and a night drop to 70 to 75. Use a halogen flood on a dimmer rather than a ceramic emitter, since these animals do respond to visible basking light.

Fit UVB. A linear T5 at 5 to 6 percent across part of the enclosure is right; a small coil bulb is not. Humidity should sit at 60 to 70 percent, which deep damp substrate largely does on its own, topped up by misting morning and evening. Ventilate enough that it dries a little between mistings.

Include a humid hide, a shallow water dish big enough to sit in, and plenty of cork bark and leaf cover. A skink that feels exposed will not come out.`,
      diet: `Fire skinks are insectivores with an appetite. Feed a rotation of appropriately sized live insects: dubia roaches, crickets, black soldier fly larvae, silkworms and the occasional superworm. Adults eat twice a week, juveniles daily to every other day. Offer as much as the animal clears in about five minutes, with no feeder bigger than its head.

Gut load the insects for at least 24 hours before offering them, on greens, squash and a commercial gut-load. An insect that has eaten nothing is close to an empty shell nutritionally.

Dust with a plain calcium at most feedings and a calcium with D3 plus a multivitamin once or twice a week, adjusted down if your UVB is strong and well positioned. Metabolic bone disease is the main nutritional failure in this species and it comes from the calcium and UVB side rather than from protein.

Some individuals take small amounts of soft fruit or the occasional pinky as adults. Neither is necessary and neither should be routine.

Keep fresh water available at all times in a dish heavy enough not to be tipped or buried.`,
      enrichment: `The enrichment for a fire skink is mostly the substrate, and it is not a nice-to-have. Depth, moisture and leaf litter turn a hiding animal into an active one.

Add cork bark tunnels, flat stones near the basking area, sphagnum-stuffed hides and a dense litter layer. Live plants such as pothos survive in a fire skink enclosure better than they do with larger lizards, though the digging will disturb roots.

Feed with tongs or scatter feed into the litter. Scatter feeding gets them foraging through the leaves, which is what they do in the wild and is the easiest natural behavior to encourage.

Handling is possible but should be earned slowly. Fire skinks are fast and initially flighty, and a stressed one will drop its tail. Start with tong feeding, then short sessions low over a soft surface. Many settle into being reliably handleable; some never do.

Keep one per enclosure unless you have real experience. Males will fight, and mixed pairs need enough space and hides for the female to get away.`,
      health: `Metabolic bone disease is the main preventable problem, from insufficient UVB, insufficient calcium, or both. Watch for tremors, a soft or bowed jaw, difficulty lifting the body off the floor and a reluctance to climb.

Retained shed on the toes and tail tip is the most common minor complaint and is nearly always a humidity problem. A humid hide and a slightly damp substrate layer usually resolve it. Rings of retained skin left in place can cut off circulation.

Impaction is the reason to avoid sand, gravel and any loose particulate that does not hold moisture. A soil and coco fiber mix is both better for burrowing and safer to swallow incidentally.

Wild-caught animals are still common in this trade and often arrive with parasite loads, dehydration and injuries. Ask about origin. A captive-bred fire skink costs more and starts far healthier, and a fresh import should have a fecal check early.

Mouth rot and respiratory infections follow from enclosures that are wet rather than humid, with no ventilation or no thermal gradient.`,
      checklist: [
        "36x18x18 in front-opening terrarium",
        "4 to 6 inches of topsoil, coco fiber and sand",
        "Leaf litter layer and cork bark cover",
        "Halogen basking bulb on a dimmer, 92 to 96 F",
        "Linear T5 UVB, 5 to 6 percent",
        "Humid hide and shallow water dish",
        "Digital thermometer and hygrometer",
        "Varied live insects, gut loaded",
        "Calcium and D3 plus multivitamin",
        "Exotic veterinarian experienced with skinks"
      ],
    },
    faqs: [
      { q: "Why does my fire skink hide all the time?", a: "Almost always because the substrate is too shallow. Fire skinks are burrowers, and in four inches of bedding the only option is to wedge under a hide and stay there. At six to ten inches of a soil and coco fiber mix that holds a tunnel, they build a burrow system and start using the whole enclosure, basking in the open and foraging through the leaf litter. Depth of substrate changes this species more than any other single factor." },
      { q: "Do fire skinks need UVB?", a: "Yes. They are diurnal and bask, and while some keepers raise them without UVB using heavy D3 supplementation, the results are far more consistent with it. Use a linear T5 at 5 to 6 percent over part of the enclosure rather than a compact coil, mount it at the distance the manufacturer specifies, and replace it every twelve months even though it still emits visible light." },
      { q: "Can you handle a fire skink?", a: "Some, with patience. They are fast and start out flighty, and a stressed one can drop its tail, which regrows but never matches. Build up through tong feeding first, then short sessions held low over a soft surface so a jump does not end badly. Plenty of fire skinks become reliably handleable adults, and some simply stay display animals. Buying captive bred makes a calm outcome much more likely." },
      { q: "Is my fire skink wild caught?", a: "Quite possibly, and it is worth asking directly. A large share of fire skinks in the trade are still imported, and wild-caught animals typically arrive dehydrated, carrying parasites, and sometimes with injuries or missing toes. They can settle in well, but they need a fecal test and a quiet acclimation period. Captive-bred animals cost more and start much healthier." },
      { q: "How big do fire skinks get?", a: "About 12 to 15 inches including the tail, with the body itself a good deal shorter than that suggests. They are heavy-bodied for their length rather than lanky. That size makes a 36x18x18 inch enclosure a comfortable adult home for one animal, prioritizing floor area over height since they spend their time on and under the ground." },
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
    // hub keeps no number of its own. Day one, hygiene, and power outage cite
    // the shared reptile guides in the sidebar's Health and More list, which
    // the set tests keep reporting as gaps because the reader never opens
    // them. This species has no feeding guide, so the diet rows cite the
    // health issues and enrichment guides, which is where the diet material
    // actually lives. Reconciled 2026-09-09 after the green iguana set test
    // (docs/READER_REVIEWS.md).
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Adult enclosure", value: "A single adult needs a minimum of 10 feet long by 5 feet wide by 6 feet tall, some vet and husbandry sources recommend 12 by 6 by 6. No commercial enclosure is large enough, this has to be a custom, walk-in build.", source: "green-iguana-tank-setup-guide" },
        { label: "First enclosure", value: "A juvenile can start temporarily in something like a 4x2x4 foot enclosure or a 40 to 55 gallon tank, but outgrows it within the first year, plan for the move into adult housing rather than being surprised by it.", source: "green-iguana-tank-setup-guide" },
        { label: "Temperature", value: "Basking area 100 to 120°F, cool end around 80°F, nighttime not dropping below the low 70s°F. Heat via a cluster of halogen bulbs, roughly six bulbs to adequately cover an adult's basking branch, positioned over a sturdy climbing perch.", source: "green-iguana-tank-setup-guide" },
        { label: "UVB", value: "High-output T5 HO UVB is required for survival in this species, not a nice-to-have, replaced every 12 months regardless of whether the bulb still produces visible light. Glass blocks UVB entirely, so a sunny window is never an adequate substitute.", source: "green-iguana-tank-setup-guide" },
        { label: "Humidity", value: "60 to 80%, through misting twice daily with a pressure sprayer or an automated misting system, plus a large soaking tub the iguana can fully access. Chronically low humidity is directly linked to dehydration and kidney disease.", source: "green-iguana-tank-setup-guide" },
        { label: "Floor", value: "2 to 4 inches of coconut husk or large-particle cypress mulch, sized specifically to reduce impaction risk. Avoid sand, gravel, corncob bedding, kitty litter, and wood shavings entirely.", source: "green-iguana-tank-setup-guide" },
        { label: "Climbing", value: "Roughly two-thirds of an iguana's total length is tail, and this is fundamentally a climbing animal that needs genuine vertical space and sturdy branches positioned near the basking zone, not just floor area.", source: "green-iguana-tank-setup-guide" },
        { label: "Diet", value: "Strictly plant-based: no insects, no dog or cat food, no eggs, ever. Too much animal protein in that diet is one of the husbandry failures behind kidney disease, along with chronic dehydration and over-supplementing vitamin D.", source: "green-iguana-health-issues-guide" },
        { label: "Feeding routine", value: "Clip whole leaves at height so feeding happens where the animal already is. Put food in more than one place, rotate greens across the week so the salad is not identical every day, and dust with a plant-eater supplement.", source: "green-iguana-enrichment-guide" },
        { label: "Handling", value: "Approaching from directly above triggers a strong defensive response, it reads as an aerial predator attack to the iguana, approach from the side instead. The tail can drop under grasping pressure, even fairly light pressure, so never grab or restrain by the tail.", source: "green-iguana-handling-guide" },
        { label: "Breeding season", value: "Testosterone-driven aggression in mature males is real and can transform a previously calm, handleable iguana into an unpredictable one for a period each year, head-bobbing, color intensifying toward orange or red, and territorial chasing or biting.", source: "green-iguana-handling-guide" },
        { label: "Housing together", value: "Adults are territorial. Adult males will fight each other, and a breeding-season male can be genuinely dangerous to the person keeping him.", source: "green-iguana-enrichment-guide" },
        { label: "Parasite screening", value: "Do not skip parasite screening, given what the captive welfare assessment found: eight iguanas observed over 22 days in an exotic animal facility, and all eight carried endoparasites.", source: "green-iguana-enrichment-guide" },
        { label: "Adult size", value: "An adult male green iguana reaches 6 to 7 feet including tail and up to 20 pounds, a completely different animal from the small, manageable baby most people bring home.", source: "green-iguana-handling-guide" },
        { label: "Lifespan", value: "With excellent care, green iguanas live 15 to 20 years, sometimes 25.", source: "green-iguana-cost-guide" },
        { label: "First year", value: "An estimated 70% of captive green iguanas die within their first year of life, and inadequate diet, lighting, and housing are named as the leading cause.", source: "green-iguana-health-issues-guide" },
        { label: "The iguana", value: "Farm-raised babies are cheap, commonly $20 to $100. Morph lines cost considerably more: albino, hypomelanistic, axanthic, and purple translucent animals commonly run $300 to $1,000 or more.", source: "green-iguana-cost-guide" },
        { label: "Budget", value: "$700 to $2,500 or more upfront, and it is two purchases. Ongoing, roughly $60 to $150 a month, covering fresh produce, calcium and multivitamin supplements, substrate, and meaningful electricity to heat and light a large enclosure.", source: "green-iguana-cost-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact, keep reptiles out of the kitchen entirely, and never clean an enclosure, water dish, or equipment in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage", value: "This species is not in the guide's cold-floor table. Its rule for a species that is not listed: check its tank setup guide for the documented nighttime low and use that as your floor.", source: "reptile-emergency-plan-guide" },
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
      { q: "How can I tell if my Jackson's chameleon is male or female?", a: "By the horns. Male Jackson's chameleons grow three distinct horns on the front of the face, giving them a small Triceratops-like look, while females typically have no horns or only tiny, rudimentary nubs. It's one of the clearest, easiest sexing calls of any commonly kept reptile." },
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
    // the hub keeps no number of its own. Quarantine, hygiene, the thermostat
    // probe and the power-outage line cite the shared reptile guides in the
    // sidebar's Health and More list. Reconciled 2026-09-15 after the
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
        { label: "Legal", value: "Eleven jurisdictions restrict it, five as outright bans and six as paperwork, and the other 41 place no restriction at all. Louisiana is the one state that decided about this species in particular, naming Varanus exanthematicus on its prohibited nonnative list.", source: "savannah-monitor-legal-guide" },
        { label: "Day one", value: "A new lizard is quarantined 3 to 6 months away from any reptile you already keep, in a separate room on plain paper towel, with its own tools, and a vet check within two weeks of acquiring it with a fresh fecal sample.", source: "reptile-quarantine-guide" },
        { label: "Where it came from", value: "Many are wild-caught or farmed in bulk for the pet trade, which keeps supply high and price low, and also means a real share arrive stressed, parasitized, and with a shorter life expectancy than a captive-bred animal would have.", source: "savannah-monitor-cost-guide" },
        { label: "Parasites", value: "Genuinely common in this species, particularly wild-caught or farmed animals. A fecal exam is worth doing proactively for any newly acquired savannah monitor rather than waiting for symptoms.", source: "savannah-monitor-health-issues-guide" },
        { label: "Adult size", value: "3 to 4 feet long and 8 to 15 pounds, genuinely large and strong enough that adult handling calls for real caution. Sharp teeth, strong claws, and a whip-capable tail are all real defensive tools on an animal this size.", source: "savannah-monitor-handling-guide" },
        { label: "Enclosure", value: "A hatchling can start around 36x24x20 inches, but a single adult needs an 8-foot by 4-foot by 4-foot enclosure at minimum. This is the current welfare standard and reflects genuine need, not excess. Floor space matters more than height, and it is one monitor per enclosure.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Nothing fits", value: "A ready-made 8ft PVC modular enclosure is actually 8x2x2ft, a partial match on length only, well short of the 8x4x4ft footprint an adult needs. True adult-sized housing for this species is typically a DIY build or ordered direct from a manufacturer.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Basking", value: "Basking surface temperature should reach 140 to 150F, measured directly with an infrared thermometer rather than an air temperature reading. Use a cluster of halogen flood bulbs on a thermostat: this species needs multiple bulbs working together to create adequate heat across a large enclosure.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Cool side and night", value: "Cool side should run 75 to 85F, with nighttime dropping to around 70 to 75F. Avoid ceramic heat emitters, red or blue bulbs, or heat mats as the primary basking heat source, they don't provide the intensity this species needs.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture. For an overhead source, follow your controller's own instruction and confirm the result with independent checks.", source: "reptile-heating-thermostats-guide" },
        { label: "Humidity", value: "Around 50% ambient, with access to a genuinely humid burrow where conditions run considerably wetter. Achieve this by pouring water directly into the deep substrate in one area and providing a humid hide, rather than trying to raise ambient humidity across the whole enclosure.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Substrate", value: "Deep is the operative word, 12 to 24 inches or more of a diggable soil, sand, and clay mix that genuinely holds a burrow shape. A topsoil and play sand blend, or a product like Zoo Med Excavator Clay, both work. Avoid shallow substrate or loose, particulate-only setups that collapse rather than holding tunnels.", source: "savannah-monitor-tank-setup-guide" },
        { label: "UVB", value: "A T5 HO bulb in the 10 to 12% range, spanning roughly half the enclosure, positioned 14 to 16 inches from the basking area. Pair with a bright 6500K daylight bulb. Adjust photoperiod seasonally, around 11 hours in winter, 13 in summer.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Water basin", value: "Large enough for the monitor to fully submerge its entire body, not just a shallow dish. Combined with the humid burrow, this genuinely matters for hydration and shedding, and a big, dry enclosure with just a small water bowl isn't adequate regardless of how large the dry footprint is.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Diet", value: "The staple is gut-loaded insects: dubia roaches, crickets, locusts, superworms, silkworms, grasshoppers, crayfish and other low-fat foods. Lean mice, chicks or freshwater fish belong in the occasional column and stay there, because rodents and fatty foods fed too often lead to severe obesity and organ disease. Skip processed meats and dog or cat food entirely.", source: "savannah-monitor-tank-setup-guide" },
        { label: "How often", value: "Juveniles eat daily or every other day. Adults eat two to three times a week.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Supplements", value: "Dust insects with calcium, without D3 where UVB is running and with D3 where it is not, and add a multivitamin weekly. The calcium supplement should be low in or free of phosphorus, at a minimum calcium to phosphorus ratio of 2:1.", source: "savannah-monitor-tank-setup-guide" },
        { label: "Portion", value: "No published figure puts a number on the portion, so frequency and food choice do most of the work. An animal putting on a rounded, heavy body shape is being fed too richly whatever the portion size says.", source: "savannah-monitor-tank-setup-guide" },
        { label: "The thing that kills them", value: "In the wild, savannah monitors eat a lean, largely insect-based diet on a seasonal cycle. In captivity that rhythm disappears and animals get fed rich food year-round with a fraction of the activity level, which is why obesity and hepatic lipidosis are the signature problem here.", source: "savannah-monitor-health-issues-guide" },
        { label: "Handling", value: "Pick up from underneath rather than from above, since reaching down from above mimics a predator attack and triggers defensive reactions. Support the full body and tail. As adults grow, routine tasks like nail trims may genuinely require two or three people experienced with reptile restraint.", source: "savannah-monitor-handling-guide" },
        { label: "Stop signals", value: "Hissing, open-mouthed snapping, puffing out the throat, standing up on the hind limbs, and flicking the tail. Do not attempt handling while any of those is on display unless you are an experienced reptile handler.", source: "savannah-monitor-handling-guide" },
        { label: "Feed with tongs", value: "Put food in and take leftovers out with tongs, because a hungry monitor may mistake moving fingers for prey, and wash your hands after handling its food. Keep the nails trimmed, since they can become very sharp and painful.", source: "savannah-monitor-handling-guide" },
        { label: "Enrichment", value: "Substrate deep enough for a real burrow with a damp lower layer first, then enclosure floor area, then puzzle and extraction feeding delivering the existing ration, then a humid retreat, then target and station training, then scent novelty, and rearrangement last.", source: "savannah-monitor-enrichment-guide" },
        { label: "Hygiene", value: "Wash hands with soap right after any contact, and never clean the enclosure in a kitchen sink or a bathtub people use.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Budget", value: "Juveniles run $150 to $300 and adults $300 to $800. Setup commonly runs well past $500 and sometimes exceeds $1,000, and upkeep is roughly $30 to $50 a month. A routine annual exam runs $50 to $100.", source: "savannah-monitor-cost-guide" },
        { label: "Lifespan", value: "Commonly cited at 10 to 15 years, with 15 to 20 achievable under excellent husbandry. Many pet savannah monitors die well before that, in their early teens or younger, from fatty liver disease, kidney failure, or gout, nearly all tied directly to overfeeding.", source: "savannah-monitor-cost-guide" },
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
    // Router hub (docs/RULES.md, Hubs). Every figure below is copied from the
    // deep dive named in its `source`, and that article is where it changes; the
    // hub keeps no number of its own. Adult size comes from the encyclopedia
    // entry, which no deep dive repeats. Quarantine, hygiene, the thermostat
    // probe and the emergency plan cite the shared reptile guides in the
    // sidebar's Health and More list. Built 2026-09-14 for the veiled chameleon
    // set test (docs/READER_REVIEWS.md). The old hub's supplement schedule was
    // roughly four times the feeding guide's, on the two supplements that guide
    // says cause gular edema in excess; that is the row to check first if this
    // hub ever drifts again.
    layout: "router",
    firstWeek: {
      intro: "The numbers a new owner needs in the first week, each taken from the article that explains it.",
      rows: [
        { label: "Legal check", value: "Hawaii and Washington DC are the two places you cannot keep one, and neither ban is written about chameleons: DC permits only non-venomous snakes, fish and turtles, so every lizard is out, and Hawaii bars anything not on an approved list. New Jersey wants a permit, and Minnesota allows one obtained from a permitted breeder. Check your city ordinance too.", source: "veiled-chameleon-legal-guide" },
        { label: "Enclosure", value: "2 feet by 2 feet by 4 feet (24x24x48 inches) is the practical minimum for an adult, bigger, 4x2x4 feet, is better if you have the space. Juveniles can start smaller, around 18x18x36 inches, but veiled chameleons reach adult size in just 6 to 8 months, so plan and budget for the adult enclosure from the start.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Enclosure type", value: "A screen enclosure is the traditional choice and provides excellent airflow. Hybrid enclosures, with partially solid sides, hold humidity better and are increasingly preferred. Glass terrariums can work but need serious attention to ventilation, and most aren't large enough for an adult anyway.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Temperature", value: "Basking spot around 85°F for females and juveniles, up to 90 to 95°F for adult males. Ambient temperature 72 to 80°F, with a beneficial night drop to 55 to 65°F.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Humidity", value: "40 to 50% during the day and 80 to 100% at night, raised through misting sessions morning and evening plus a dripper or an overnight cool-mist humidifier using distilled water.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Lighting", value: "A linear T5 HO UVB tube (ReptiSun 5.0 or Arcadia 6% are the commonly recommended options) spanning the enclosure, with the basking branch positioned roughly 6 to 9 inches below it. UVB and daylight lighting both run 12 hours a day. Replace the bulb every 6 to 12 months regardless of whether it still visibly lights up. Skip compact or coil-style UVB bulbs.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Water", value: "Veiled chameleons do not recognize standing water as something to drink. They only respond to moving droplets on leaves and branches. A water dish alone will not keep your chameleon hydrated, no matter how often you refill it. A dripper or misting system is a genuine essential, not an accessory.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Drainage", value: "Daily misting produces real runoff, and the enclosure needs somewhere for that water to go.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Substrate", value: "Bare bottom or paper towel is the safest, easiest option. Coco fiber or a soil-based mix works for planted, bioactive setups. Avoid sand, gravel, and wood chips, all carry a real impaction risk if ingested during a feeding strike.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Laying bin, females", value: "Even a female with no male present will produce eggs, and without somewhere appropriate to lay them, she's at real risk of egg-binding. Keep a moist sand or soil bin, roughly 5 to 10 inches deep, permanently available, not something you set up only once she shows signs of needing it.", source: "veiled-chameleon-tank-setup-guide" },
        { label: "Feeding schedule", value: "Babies at 1 to 3 months eat as much as they'll eat, roughly twice daily. Juveniles at 3 to 6 months take around 10 to 12 small crickets daily. Sub-adults at 6 to 12 months take 8 to 10 medium crickets daily or every other day. Adults from 12 months take roughly 4 to 6 feeders every other day, and adult females specifically should be fed a somewhat restricted amount.", source: "veiled-chameleon-feeding-guide" },
        { label: "Prey size", value: "Size prey to the space between your chameleon's eyes, nothing bigger.", source: "veiled-chameleon-feeding-guide" },
        { label: "Diet", value: "Primarily insectivorous, built on genuine variety: crickets, dubia roaches, black soldier fly larvae, superworms, silkworms, and locusts as rotating staples. Hornworms, waxworms, and butterworms are higher in fat or water and belong in treat territory, no more than about twice a week.", source: "veiled-chameleon-feeding-guide" },
        { label: "Supplements", value: "Dust feeders with plain calcium, no D3, no phosphorus, at nearly every feeding. Separately, use a calcium with D3 supplement about every other week, and a multivitamin with a real vitamin A source on roughly the same twice-monthly schedule. D3 specifically can become toxic in excess, which is exactly why it's dosed less often than plain calcium.", source: "veiled-chameleon-feeding-guide" },
        { label: "Gut-loading", value: "Gut-load feeder insects on collard greens, mustard greens, dandelion, and squash for 24 to 48 hours before offering them.", source: "veiled-chameleon-feeding-guide" },
        { label: "Handling", value: "Solitary, territorial display animals that generally don't tolerate handling well. Approach slowly from below with your palm open and let the chameleon choose to climb onto your hand rather than grabbing from above, which reads as a predator attack. Keep sessions infrequent.", source: "veiled-chameleon-handling-guide" },
        { label: "Reading a defensive display", value: "Hissing, gaping, inflating or flattening the body, and darkening color are all stress and defense signals. A darkened, gaping chameleon isn't aggressive in the way that word implies, it's frightened, and treating the display as a warning to back off gets better results.", source: "veiled-chameleon-handling-guide" },
        { label: "Rearing and company", value: "Hatchlings reared in isolation for their first two months grew into animals that were more submissive, darker and duller in color, and worse at finding food. That is not a license to house adults together, because adults are territorial and cohabiting them goes badly.", source: "veiled-chameleon-enrichment-guide" },
        { label: "Budget", value: "$20 to $100 for a captive-bred juvenile, and roughly $400 to $800 for the upfront setup. Experienced keepers commonly report around $500 for a complete single-animal setup, with elaborate builds reaching $1,200 or more.", source: "veiled-chameleon-cost-guide" },
        { label: "The emergency that costs most", value: "Egg-binding in females is the emergency risk: medical management runs $200 to $400, and surgery can run $800 to $1,500 or more.", source: "veiled-chameleon-cost-guide" },
        { label: "Lifespan", value: "Males commonly live 6 to 8 years. Females typically live considerably shorter, often just 2 to 6 years, and many don't make it past 2 to 3, driven by the physical toll of producing egg clutches.", source: "veiled-chameleon-cost-guide" },
        { label: "Adult size", value: "Males 18 to 24 inches (46 to 61 cm), females 10 to 14 inches (25 to 36 cm)." },
        { label: "Quarantine", value: "A new lizard can look completely healthy while it is still shedding mites or a fatal virus, so a real quarantine runs months rather than weeks, in its own enclosure in a separate room, with a fecal exam and a vet workup before it meets an established pet.", source: "reptile-quarantine-guide" },
        { label: "Thermostat probe", value: "The probe reads at the animal's level, not up in the airspace near the fixture. For an overhead source, follow your controller's own instruction and confirm the result with independent checks.", source: "reptile-heating-thermostats-guide" },
        { label: "Hygiene", value: "Wash hands with soap and running water immediately after any contact with the chameleon, its enclosure, or anything that has touched either. Never clean the enclosure or its water bowl in a kitchen sink or a shared bathtub. Children younger than 5 should not handle or touch reptiles or their environments.", source: "reptile-salmonella-hygiene-guide" },
        { label: "Power outage or a sitter", value: "Check this species' tank setup guide for the documented nighttime low and use that as the floor, which for a veiled chameleon is the 55 to 65°F night drop it already wants.", source: "reptile-emergency-plan-guide" },
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
