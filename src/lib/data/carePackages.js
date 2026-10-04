// The printable PDF care packages. All 20 sell here, through Stripe, so this
// file is the catalog rather than a mirror of someone else's listing.
//
// status records whether a package ever had a Gumroad listing, and now only
// decides the teaser row for one that sells nowhere. Nothing sells nowhere,
// so isCarePackageBuyable is true for all 20. Read storefront, not status,
// when the question is "can this be bought".
// Both use `cover`, the guide hero under public/assets/guides, as the card and
// product page art; nothing is loaded from Gumroad's CDN any more.
//
// pages, version and versionDate describe the current build in
// content/CAREPACKAGE Guides/rebuilt, rendered from the source HTML of the same
// version. That is also the edition in the Supabase bucket, so re-upload the
// PDF whenever these change.
//
// samplePages is how many pages the free sample PDF at
// public/assets/care-packages/<id>/sample.pdf carries, printed by
// scripts/build-care-package-sample.mjs when it builds the file. Rebuild the
// sample whenever the package is rebuilt, and copy the number here.
//
// contents is the package's own contents page, section by section, parsed from
// the source HTML's table of contents rather than transcribed. Regenerate it
// when a package is rebuilt (the parser is described in docs/SHOP_PLAN.md).
//
// history and legalAsOf are optional, and only packages rebuilt on the current
// outline carry them. history is the book's own version-history list, copied
// from its back page (newest first, one entry per edition); the product page
// shows it under "What changed" so a buyer holding an older printout can see
// what moved. legalAsOf is the month the book's state legal status was last
// read; bump it after the monthly legal check even when nothing changed, since
// only a real change to the book needs a new edition.
//
// ---------------------------------------------------------------------------
// storefront: where the buy button goes
// ---------------------------------------------------------------------------
// 'gumroad' sends the buyer to gumroadUrl. 'stripe' sells it here, through the
// /api/care-packages/ routes in public/_worker.js and the product page at
// /care-packages/<id>/. One field per package so the catalog moves across one
// package at a time rather than all at once, and so a half-configured entry
// fails loudly instead of quietly selling the wrong thing.
//
// Two price id fields, never one:
//
//   stripePriceIdSandbox   a price on the Stripe Sandbox / test mode. Test
//                          cards only, no real money, and it is what every
//                          test purchase runs through.
//   stripePriceId          a price on the live Stripe account. Added ALONGSIDE
//                          the sandbox id when a package actually goes on
//                          sale, never in place of it.
//
// Keeping them in separate fields is what stops a sandbox price ever being
// pasted into a live checkout. The Worker mirrors both ids (it cannot import
// this file - see the note in public/_worker.js) and prefers the live one,
// falling back to the sandbox id, so a deployment holding a live secret key
// and a package with only a sandbox id gets a clean Stripe error rather than
// a broken sale. Change a price id or a version in BOTH files.
//
// The PDF a buyer downloads lives in the private Supabase bucket at
// care-packages/<id>.pdf, and `version` is the edition served from it. Publish
// a correction by uploading the new file over that same path and bumping
// `version` here in the same commit - see docs/STOREFRONT.md.
export const CARE_PACKAGES = [
  {
    id: 'bearded-dragon',
    animal: 'Bearded Dragon',
    name: 'Bearded Dragon Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENBp9qtY3Ob6vamuXMA6sD',
    price: '$8.99',
    pages: 50,
    version: '4.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/bearded-dragon.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/beardeddragoncarepackage',
    blurb: 'Complete 50-page printable guide with temperature and UVB (ultraviolet B) targets, feeding by age, choosing a healthy dragon, brumation, the law in every state, seven health pages, and the owner tools.',
    bullets: [
      'The enclosure and where it goes, the temperature gradient, thermostats and probes, UVB (ultraviolet B) tube and distance, substrate and bioactive setups, and cleaning in one guide',
      'Feeding by age, insects, greens and supplements, handling and body language, choosing a dragon and quarantine, eggs and brumation, the law in every state, and seven health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage and heat-wave plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Morphs, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Size, Type & Where It Goes",
          "The Temperature Gradient & Heat",
          "Thermostats, Probes & Timers",
          "UVB: Tube, Strength & Mounting Distance",
          "UVB: Meter & Daylight Lamp",
          "Substrate, Furnishings & Bioactive Setups",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet by Age",
          "Feeder Insects & Gut-Loading",
          "Safe Greens & Vegetables",
          "Fruit, Treats & the Never-Feed List",
          "Supplements: Calcium, Vitamin D3 & Multivitamin",
          "Growth, Weight & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "Body Language: Beard, Color, Arm-Wave & Glass Surfing",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Dragon, Quarantine & the First Vet Visit",
          "Sexing & Females That Lay",
          "Egg Binding",
          "Brumation",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Bearded Dragon Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Metabolic Bone Disease",
          "Impaction, Dehydration & Prolapse",
          "Respiratory Infection, Atadenovirus & Yellow Fungus",
          "Parasites, Mouth Rot & Eye Problems",
          "Shedding, Tail and Toe Rot & Burns",
          "Reading Poop, Urates & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Monthly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to H",
          "Glossary, I to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "4.1", date: "Oct 2026", text: "Now 50 pages. Safety: every perch and hide top kept at or below the UVB tube's chart distance; tube 10 to 14% to its own chart. Costs: every item priced and rounded to the nearest $5; setup $575 to $1,280, monthly $75 to $145, the budget now over two pages. Other changes are wording only." },
      { edition: "4.0", date: "Oct 2026", text: "Rebuilt on the current outline, 48 pages. Safety: hatchlings under about 1 month fed 2 to 3 times daily, 1 to 4 months twice daily, juveniles to 18 months once daily with a fresh salad every day, adults insects a few times a week; plain calcium near-daily for juveniles; multivitamin 1 to 2 times a week; feeders gut-loaded 24 to 72 hours on calcium-rich foods; setup checklist UVB distance corrected to 16 to 18 in; stuck shed loosened with a 30-minute chin-deep soak; handling sessions built up to 10 to 15 minutes; egg binding is a vet visit after more than 24 to 48 hours of digging or straining. Legal: a new page on the law in all 52 jurisdictions. Other changes are wording only." },
      { edition: "3.2", date: "Oct 2026", text: "Safety: first vet exam within 48 hours; Salmonella precautions for children under 5, adults 65 and older, anyone with a weakened immune system; calcium with D3 twice weekly for adults; outage floor 60°F (16°C); probe clipped, never taped; lamps 4 to 6 in above, basking surface under 122°F (50°C); UVB 16 to 18 in, 11 to 12 through mesh; yellow fungus, vet at the first patch. Costs: updated. Other changes are wording only." },
      { edition: "3.1", date: "Sep 2026", text: "Safety: quarantine for a new reptile now 3 to 6 months; discolored urates no longer blamed on excess calcium. Other changes are wording only." },
      { edition: "3.0", date: "Sep 2026", text: "Rebuilt, 34 pages. Safety: plain calcium daily, with D3 as a backup." },
      { edition: "2.0", date: "Aug 2026", text: "Second edition, 22 pages. Replaced by 3.0." },
    ],
  },
  {
    id: 'leopard-gecko',
    animal: 'Leopard Gecko',
    name: 'Leopard Gecko Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENBs9qtY3Ob6vaOPtdFLAt',
    price: '$8.99',
    pages: 52,
    version: '3.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/leopard-gecko.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/leopardgeckocarepackage',
    blurb: 'Complete 52-page printable guide with belly heat and the three hides, optional low-output UVB (ultraviolet B), insect feeding by age and gut-loading, choosing a healthy gecko, the law in every state, seven health pages, and the owner tools.',
    bullets: [
      'The enclosure and where it goes, the temperature gradient and belly heat, heat mats, thermostats and probes, optional low-output UVB (ultraviolet B), substrate and the three hides, and cleaning in one guide',
      'Feeding by age, insects, gut-loading and supplements, growth and body condition, handling and body language, choosing a gecko and quarantine, eggs, shedding and brumation, the law in every state, and seven health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage, heat and travel plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Morphs, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Size, Type & Where It Goes",
          "The Temperature Gradient & Belly Heat",
          "Heat Mats, Thermostats, Probes & Timers",
          "UVB: Low Output, Optional & Worth It",
          "UVB: Meter & Schedule",
          "Substrate, Furnishings & the Three Hides",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet & Feeding by Age",
          "Feeder Insects: Staples, Treats & Never",
          "Gut-Loading: What to Feed the Feeders",
          "Treats, Refusals & the Never-Feed List",
          "Supplements: Calcium, Vitamin D3 & Multivitamin",
          "Growth, Weight & the Tail",
          "Body Condition: Thin, Ideal & Overweight",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "Body Language: Tail, Sounds & Posture",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Gecko, Quarantine & the First Vet Visit",
          "Sexing & Females That Lay",
          "Egg Binding",
          "The Shed Cycle & Brumation",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Leopard Gecko Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Cryptosporidiosis: Stick Tail Disease",
          "Metabolic Bone Disease",
          "Impaction, Dehydration & Prolapse",
          "Respiratory Infection, Parasites & Mites",
          "Stuck Shed, Tail Loss & Burns",
          "Reading Poop, Urates & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Monthly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to H",
          "Glossary, I to Z",
          "Sources",
          "Sources, Continued",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.1", date: "Oct 2026", text: "Now 52 pages. Safety: UVB is a 24 in low-output tube, about two-thirds of the enclosure, with its own heights: 8 to 14 in over mesh or 10 to 18 in inside, 12 to 14 or 14 to 18 for pale morphs. Costs: every item priced and rounded to the nearest $5; setup $315 to $760, monthly $30 to $85, the budget now over two pages. Other changes are wording only." },
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 49 pages. Safety: probe on a clip or suction cup, never tape; lamps 4 to 6 in above the gecko; cool side 70 to 77°F (21 to 25°C); nights in the 70s, outage floor 65°F (18°C); lights 14 hours in summer, 12 in winter; UVI 0.6 to 1.4 at the basking spot; 7% T5 tube 10 to 18 in over a screen lid or 12 to 20 in inside, 16 to 18 and 18 to 20 in for pale morphs, replaced every 6 to 12 months; first vet exam within 72 hours; laying over in under 48 hours, past that a same-day vet; appetite loss with a thinning tail to a vet; stuck shed in a 30-minute soak; slow tail swish with arched back is the warning; pinky mouse once a week at most; no corncob or walnut shell bedding. Legal: a new page, all 52 jurisdictions. Costs: equipment $175 to $495, $325 to $710 with the first vet exam, $20 to $82 a month. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: quarantine for a new gecko 3 to 6 months in a separate room; second thermometer read daily; full Salmonella hygiene rules; dehydration soak 15 to 20 minutes. Other changes are wording only." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 34 pages. Safety: calcium with D3 as a backup for setups without UVB, not a routine dust. Other changes are wording only." },
      { edition: "1.0", date: "2026", text: "First edition, 22 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'goldfish',
    animal: 'Goldfish',
    name: 'Goldfish Care Package',
    badge: 'Fish',
    emoji: '🐟',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENBu9qtY3Ob6vaU6oDSTyD',
    price: '$8.99',
    pages: 49,
    version: '3.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/goldfish.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/goldfishcarepackage',
    blurb: 'Complete 49-page printable guide with tank size and filtration targets, cycling and water testing, feeding by age, choosing a healthy goldfish, quarantine, the Minnesota and New York rules on keeping goldfish and never releasing them, six health pages, and the owner tools.',
    bullets: [
      'Tank size and the bowl myth, water temperature, filter sizing and media, cycling with or without a fish, water targets and testing, water changes, and substrate, plants and decor in one guide',
      'Feeding by age, the never-feed list, handling and body language, choosing a healthy goldfish, quarantine, spawning, heat waves and pond winters, the Minnesota and New York rules on keeping and never releasing goldfish, and six health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage and heat-wave plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Goldfish, Varieties, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Tank Size, Type & the Bowl Myth",
          "Water Temperature, Heater & Lid",
          "Filtration: Sizing the Filter",
          "Filter Media, Air Pump & Maintenance",
          "Cycling, With or Without a Fish",
          "Water Targets & Testing",
          "Water Changes, Cleaning & Hygiene",
          "Substrate, Plants & Decor",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet by Age",
          "Pellets, Gel, Flake & Presentation",
          "Vegetables, Protein Foods & Treats",
          "The Never-Feed List",
          "When a Goldfish Stops Eating",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling: Net and Cup, Never Hands",
          "Normal Behavior & Body Language",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Healthy Goldfish & Bringing It Home",
          "Quarantine & the Hospital Tank",
          "Sexing, Spawning & Fry",
          "Heat Waves, Pond Winters & Moving Outdoors",
        ],
      },
      {
        label: "The Law",
        items: [
          "Never Release a Goldfish: the Law",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Ammonia Poisoning & Ich",
          "Fin Rot, Fungus, Ulcers, Popeye & Dropsy",
          "Flukes, Anchor Worm & Velvet",
          "Swim Bladder Disorder & Constipation",
          "Reading Waste & When Euthanasia Is Kindest",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup Costs",
          "Budget: Running Costs & Shopping List",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to H",
          "Glossary, I to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.1", date: "Oct 2026", text: "Now 49 pages. Costs: every item priced and rounded to the nearest $5; setup $310 to $615, monthly $10 to $30, the budget now over two pages. Other changes are wording only." },
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 48 pages. Safety: pH 6.5 to 7.5; fishless cycle dosed to 3 ppm; fish-in change of at least a third at 0.1 ppm; bag floated 20 to 30 minutes; adults fed once a day or the same ration split in two, no fasting day; ich treated with salt or malachite green until spots gone for days, heat no higher than 75°F; anchor worm dose 0.066 mg/L; no home antibiotic for fin rot; floor bare, or sand or gravel at least 1/2 in across; temperature changes no faster than 1°F an hour; outage surface agitation every 10 to 15 minutes in a small tank, 20 to 30 in a larger one; goldfish and koi can cross; never feed bread, refined starches, raw meat, cheese or onions. Legal: a new page on never releasing a goldfish, Minnesota and New York rules. Costs: equipment $105 to $270, monthly $10 to $30. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: turnover raised to 10 times an hour; KH retargeted to 100 ppm and up; GH 60 to 180 ppm; quarantine raised to a 30-day minimum; fish-in action line 0.1 to 0.25 ppm. Replaced by 3.0." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 39 pages, with a fish-in cycling plan, a power-outage plan and a pet-sitter sheet. Replaced by 2.1." },
      { edition: "1.0", date: "Aug 2026", text: "First edition, 21 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'axolotl',
    animal: 'Axolotl',
    name: 'Axolotl Care Package',
    badge: 'Amphibian',
    emoji: '🦎',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENBw9qtY3Ob6vaRVFVm391',
    price: '$8.99',
    pages: 46,
    version: '3.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/axolotl.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/axolotlcarepackage',
    blurb: 'Complete 46-page printable guide with the cold-water setup and cooling plan, the nitrogen cycle, feeding by age, choosing a healthy axolotl, the law in every state, six health pages, and the owner tools.',
    bullets: [
      'Tank size and where it goes, the temperature numbers that matter, chillers and fans, the nitrogen cycle, filtration and flow, substrate and hides, and cleaning in one guide',
      'Feeding by age, worms and pellets, handling and body language, choosing an axolotl and quarantine, pairs and breeding, the law in every state, and six health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage and heat-wave plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Morphs, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Tank Size, Type & Where It Goes",
          "Temperature: The Numbers That Matter",
          "Chillers, Fans & Cooling Without One",
          "Water Quality & the Nitrogen Cycle",
          "Filtration, Flow & Lighting",
          "Substrate, Hides & Furnishings",
          "Water Changes, Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet & Feeding by Age",
          "Worms, Pellets & Frozen Foods",
          "The Never-Feed List & Supplements",
          "Growth, Size & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Moving an Axolotl",
          "Body Language & Normal Behavior",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing an Axolotl, Quarantine & the First Vet Visit",
          "Sexing, Pairs & Breeding",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is an Axolotl Legal Where You Live?",
          "The Federal Rule, Virginia & Why the Bans Exist",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Heat Stress & Reading the Gills",
          "Fungal & Bacterial Infection",
          "Impaction, Floating & Waste",
          "Ammonia Burns, Parasites, Eyes & Obesity",
          "Tubbing, Cooling & Salt Baths",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Monthly Costs & Vet Fees",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to L",
          "Glossary, M to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.1", date: "Oct 2026", text: "Now 46 pages. Costs: every item priced and rounded to the nearest $5; setup $185 to $530, or $335 to $1,180 with a chiller, monthly $15 to $45. Other changes are wording only." },
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 45 pages. Safety: water 60 to 64°F (15.6 to 17.8°C); adult worms cut into head-sized pieces; a meal is what it takes in 5 to 10 minutes; any ammonia or nitrite means changing at least a third of the water, 50 percent or more if climbing; fishless cycle dosed to 3 ppm, done when a full dose reads 0 within 24 hours; touch only with clean disposable nitrile gloves; soft net for seconds only; tools in bleach at 30 mL per liter for 30 minutes, rinsed and dried; maturity about 10 months for males, 12 to 18 for females; adult size 9 to 12 in; antibiotic doses removed. Legal: two pages, all 52 jurisdictions; West Virginia permit-only, New Jersey a named ban. Costs: setup $120 to $375, $270 to $775 with a chiller. Other changes are wording only." },
      { edition: "2.2", date: "Sep 2026", text: "Legal: every state re-read against its own rule; the District of Columbia and New Mexico moved to banned; Wyoming, Alabama, Vermont, Massachusetts, Hawaii, Rhode Island, Minnesota and Arkansas added. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: salt bath 10 to 15 g/L for 10 minutes a published ceiling, not a dose; temperature changes no faster than 1°F an hour; quarantine 6 to 8 weeks; ascites and the refrigerator stopgap covered. Other changes are wording only." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt on the current template, 41 pages." },
      { edition: "1.0", date: "Aug 2026", text: "First edition, 20 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'budgie',
    animal: 'Budgie',
    name: 'Budgie Care Package',
    badge: 'Bird',
    emoji: '🐦',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENBy9qtY3Ob6vaLv2cNMGc',
    price: '$8.99',
    pages: 52,
    version: '3.0',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/budgie.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/budgiecarepackage',
    blurb: 'Complete 52-page printable guide with real cage size and bar spacing, bird-proofing the house, converting a seed eater to pellets, the daily scale, one budgie or two, hens and egg laying, seven health pages, and the owner tools.',
    bullets: [
      'Cage size, bar spacing and placement, perches and dishes, temperature, light and sleep, air quality and household hazards, and cleaning in one guide',
      'Pellets, seed and converting a seed eater, fresh food and the never-feed list, the daily scale, handling, flock needs and body language, flight and first aid, choosing a budgie and quarantine, sexing by cere, hens and egg binding, and seven health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage, heat and travel plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Colors, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Cage Size, Bar Spacing & Placement",
          "Perches, Dishes & What to Leave Out",
          "Temperature, Light & Sleep",
          "Air Quality: Fumes & Airborne Hazards",
          "Metals, Pets, Plants & Everyday Traps",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet: Pellets, Seed & Grit",
          "Converting a Seed Eater to Pellets",
          "Vegetables, Fruit & Fresh Food",
          "Treats, Supplements & the Never-Feed List",
          "Weight, Body Condition & the Daily Scale",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "One Budgie or Two, Flock Needs & Company",
          "Body Language & Normal Behavior",
          "Enrichment & Common Mistakes",
          "Flight & Wing Clipping",
          "Nails, Beak, Blood Feathers & First Aid",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Budgie",
          "Quarantine & the First Vet Visit",
          "Sexing by Cere & the Color Exceptions",
          "Hens, Hormones & Chronic Egg Laying",
          "Egg Binding",
          "Molt & Seasonal Changes",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Obesity, Fatty Liver, Lipomas & Tumors",
          "Breathing Problems, Psittacosis & Goiter",
          "Polyomavirus, French Molt & Beak and Feather Disease",
          "Scaly Face Mites, Canker & Avian Gastric Yeast",
          "Feather Plucking & Feather Loss",
          "Reading Droppings & Water",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Monthly Costs & the Vet",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to L",
          "Glossary, M to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 52 pages. Safety: cage at least 18×18×18 in for one bird, about 30×18×18 in for a pair; bars half an inch or less apart; room 65 to 85°F (18 to 29°C), ideal 70 to 75°F (21 to 24°C); full-spectrum bird UV light 10 to 12 hours a day without unfiltered sunlight; diet change too fast above 1 to 2% weight lost in a week, vet at 10%; seed about 1 level teaspoon daily; egg binding warmth 75 to 80°F (24 to 27°C); bleach 1 part to 32 parts water; pastel and solid-color cere mutations need a DNA test; first vet exam within one to two weeks, checkup yearly, twice better; medicine doses removed. Costs: every item priced and rounded to the nearest $5; setup $315 to $750 with the bird; first exam $45 to $65; $25 to $60 a month with the exam spread out, $20 to $55 without; bare-minimum first year about $600; the budget now over two pages. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: no more than 12 hours without eating; no preventive antibiotic in quarantine; doxycycline 30 days for a budgerigar; a broken blood feather handled with firm pressure, never pulled at home; daily weighing. Other changes are wording only. Replaced by 3.0." },
      { edition: "2.0", date: "Sep 2026", text: "Full rebuild, 39 pages. Diet rewritten around 60 to 80% pellets. Replaced by 2.1." },
      { edition: "1.0", date: "Aug 2026", text: "First edition, 20 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'crested-gecko',
    animal: 'Crested Gecko',
    name: 'Crested Gecko Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENC19qtY3Ob6vasiNmiLfX',
    price: '$8.99',
    pages: 48,
    version: '3.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/crested-gecko.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/crestedgeckocarepackage',
    blurb: 'Complete 48-page printable guide with the humidity cycle and the 85°F ceiling, UVB, feeding by age, choosing a healthy gecko, the law in every state, six health pages, and the owner tools.',
    bullets: [
      'The vertical enclosure and where it goes, temperature and the 85°F ceiling, the humidity cycle, misting and airflow, UVB (ultraviolet B) and day length, substrate and bioactive setups, and cleaning in one guide',
      'Feeding by age, complete diet powder, insects and supplements, handling and body language, choosing a gecko and quarantine, eggs and the winter slowdown, the law in every state, and six health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, heat-wave and outage plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Morphs, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "The Vertical Enclosure & Where It Goes",
          "Temperature, the 85°F Ceiling & Heat Control",
          "The Humidity Cycle, Misting & Airflow",
          "UVB Light & the Day Length",
          "Substrate, Furnishings & Bioactive Setups",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet & Feeding by Age",
          "Complete Diet Powder: Mixing, Rotation & Refusals",
          "Feeder Insects & Gut-Loading",
          "Fruit, Treats & the Never-Feed List",
          "Calcium, Vitamin D3 & the Supplement Jar",
          "Growth, Weight & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "Body Language & Normal Behavior",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Gecko, Quarantine & the First Vet Visit",
          "Sexing & Females That Lay",
          "Egg Binding",
          "Shedding & the Winter Slowdown",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Crested Gecko Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Metabolic Bone Disease",
          "Floppy Tail Syndrome & Tail Loss",
          "Stuck Shed, Respiratory Infection & Skin Trouble",
          "Impaction, Parasites & Overheating",
          "Reading Droppings, Urates & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Monthly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Heat Waves, Power Outages, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to G",
          "Glossary, H to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.1", date: "Oct 2026", text: "Now 48 pages. Safety: UVB tube now 12 in, about two-thirds of the 18 in top. Costs: every item priced and rounded to the nearest $5; setup $355 to $590, monthly $40 to $55, the budget now over two pages. Other changes are wording only." },
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 47 pages. Safety: lamps 4 to 6 in above the gecko, probe clipped, never taped; over 80°F too warm, lamp off once the room reaches 82°F; overheated gecko cooled with all heat off and a shallow dish of room-temperature water, vet if unresponsive or breathing hard after 10 to 15 minutes; one heavy mist at lights-out, humidity 45 to 50% by late afternoon; dish water tap, filtered or spring, never distilled alone; UVB 24 in low-output T5 HO, UVI 0.6 to 1.4, replaced every 6 to 12 months; substrate at least 2 in; hatchlings in 12×12×12 in until 12 to 13 g, handling from 10 to 15 g in sessions from about 5 minutes, sexing at 18 to 25 g; insects no wider than the space between the eyes, gut-loaded 24 to 72 hours, calcium-dusted, no D3 or multivitamin; no mealworms or superworms; hornworms captive-bred only; dishes disinfected daily, enclosure weekly, bleach wet 10 minutes; weigh monthly; dropped tail on paper towel, swollen stump to a vet; lay box half moist coconut fiber, half fir bark; gravid female off food, weak or straining to a vet same day. Legal: a new page, all 52 jurisdictions. Costs: most geckos under $100, rare morphs from $1,000; vet visit $40 to $70. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: quarantine for a new reptile now 3 to 6 months, no longer ended by one clear fecal test; children under 5 kept from handling; a gritty or discolored urate corrected with misting. Other changes are wording only." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 34 pages. Safety: nothing dusted into the complete diet powder." },
      { edition: "1.0", date: "2026", text: "First edition, 21 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'guinea-pig',
    animal: 'Guinea Pig',
    name: 'Guinea Pig Care Package',
    badge: 'Mammal',
    emoji: '🐹',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENC39qtY3Ob6vaks244qto',
    price: '$8.99',
    pages: 51,
    version: '3.0',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/guinea-pig.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/guineapigcarepackage',
    blurb: 'Complete 51-page printable guide with the real floor space standard, unlimited hay, the daily vitamin C rule, bonding a pair, choosing a healthy guinea pig, the law in every state, eleven health pages, and the owner tools.',
    bullets: [
      'Enclosure size and where it goes, temperature, humidity and heat stress, bedding, hides and cage layout, and cleaning, water and hygiene in one guide',
      'Diet by age with unlimited hay, the daily vitamin C rule, vegetables and pellets, handling, grooming and body language, pairs and bonding, choosing a guinea pig and quarantine, the law in every state, and eleven health pages from GI (gastrointestinal) stasis and scurvy to antibiotics and anesthesia',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage, heat wave and travel plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Coat Types, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Size, Type & Where It Goes",
          "Temperature, Humidity & Heat Stress",
          "Bedding, Hides & Cage Layout",
          "Cleaning, Water & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet by Age & Unlimited Hay",
          "Vitamin C: the Daily Rule",
          "Vegetables & Pellets",
          "Fruit, Treats & the Never-Feed List",
          "Weight & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "Grooming, Nails & Coats",
          "Sounds & Body Language",
          "Pairs, Groups & Who Lives Together",
          "Introducing & Bonding Two Guinea Pigs",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Healthy Guinea Pig & Quarantine",
          "Sexing, Neutering & the Breeding Deadline",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Guinea Pig Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags, the 8 to 12 Hour Rule & Finding a Vet",
          "Gastrointestinal Stasis & a Pig That Stops Eating",
          "Dental Disease",
          "Scurvy: Stages, Treatment & Recovery",
          "Respiratory Infection & Pneumonia",
          "Bladder Stones & Urinary Problems",
          "Ovarian Cysts, Pregnancy & Spaying",
          "Mites, Lice, Ringworm, Lumps, Bumblefoot & Boar Butt",
          "Antibiotics & Enterotoxemia",
          "Anesthesia, Travel & the Vet Visit",
          "Reading Droppings, Urine & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Monthly Costs & the Vet",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to G",
          "Glossary, H to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 51 pages. Safety: hay about 80% of the diet; pellets about 1/8 cup (2 tablespoons) per guinea pig daily; about 1 cup leafy greens within 1 to 2 cups produce; room 65 to 79°F (18 to 26°C), 30 to 60% humidity; heat stress from 75°F (24°C), most often above 82°F (28°C); bottle or heavy bowl, nothing added to the water; nails every 6 to 8 weeks; any steady weight fall is a vet call; no overnight fast before anesthesia; usable antibiotics: trimethoprim-sulfamethoxazole, chloramphenicol, fluoroquinolones; neutered boar off sows until the vet clears it; older boar's pouch cleaned as the vet shows; mite and ringworm treatment left to the vet; 2 to 4 sq ft more floor per extra guinea pig. Legal: 52 jurisdictions, Hawaii import permit. Costs: every item priced and rounded to the nearest $5; setup $300 to $470; a pair $75 to $185 a month with food, bedding and the vitamin C supplement, food alone $30 to $70 for one and $60 to $135 for a pair; the budget now over two pages. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: heat danger line 80°F (27°C), heat stress from 75°F (24°C); antibiotics by drug class; fast before anesthesia 1 to 2 hours; nails every 6 to 8 weeks; short coats brushed every few days. Other changes are wording only." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 39 pages. Safety: vitamin C by body weight, 10 to 25 mg/kg for a healthy adult and 30 mg/kg or more when growing, pregnant, nursing or ill. Replaced by 3.0." },
      { edition: "1.0", date: "Aug 2026", text: "First edition, 22 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'lovebird',
    animal: 'Lovebird',
    name: 'Lovebird Care Package',
    badge: 'Bird',
    emoji: '❤️',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENC89qtY3Ob6vav2ARp6wq',
    price: '$8.99',
    pages: 49,
    version: '3.0',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/lovebird.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/lovebirdcarepackage',
    blurb: 'Complete 49-page printable guide with the one-bird-or-two decision, real cage size and bar spacing, bird-proofing the house, converting a seed eater to pellets, the daily scale, hens and egg laying, six health pages, and the owner tools.',
    bullets: [
      'Cage size, bar spacing and where it goes, perches and dishes, temperature, light and sleep, fumes, air quality and bird-proofing, and cleaning and bathing in one guide',
      'Pellets, seed and portions, converting a seed eater, greens, fruit and the never-feed list, supplements and the grit myth, the daily scale, handling and the bite problem, one bird or two, choosing a lovebird and quarantine, hens and egg binding, and six health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage, heat and travel plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Colors, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Cage Size, Bar Spacing & Where It Goes",
          "Perches, Dishes & What to Leave Out",
          "Temperature, Light & Sleep",
          "Household Hazards: Fumes & Air Quality",
          "Bird-Proofing & the Slow Poisons",
          "Cleaning, Bathing & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet: Pellets, Seed & Portions",
          "Converting a Seed Eater to Pellets",
          "Safe Vegetables, Greens & Herbs",
          "Fruit, Treats & the Never-Feed List",
          "Supplements, Calcium & the Grit Myth",
          "Weight, Body Condition & the Daily Scale",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling, Taming & the Bite Problem",
          "Body Language, Normal Noise & When It Is Not",
          "One Bird or Two",
          "Wing Clipping & Flight",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Lovebird, Quarantine & the First Vet Visit",
          "Sexing, Hens & Chronic Egg Laying",
          "Egg Binding",
          "Molt, Hormonal Seasons & Seasonal Behavior",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Psittacine Beak & Feather Disease and Polyomavirus",
          "Respiratory Disease & Psittacosis",
          "Feather Plucking & Behavioral Health",
          "Nutritional Disease, Gut Problems & Injuries",
          "Reading Droppings, Urates & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: the Bird, Yearly Costs & the Vet",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to L",
          "Glossary, M to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 49 pages. Safety: pellets 75 to 80% of the diet, fresh food 20 to 25%; seed a measured 1 to 2 teaspoons a day; a supervised session out of the cage every day, no fixed hours for a single bird; daily weighing, a diet change too fast above 1 to 2% body weight lost in a week; quarantine 30 to 45 days, up to 90 for a household with several birds; a bath offered daily; sick-bird warmth 75 to 80°F (24 to 27°C). Costs: every item priced and rounded to the nearest $5; setup $275 to $600, $300 to $650 with the first vet checkup; $20 to $40 a month; the budget now over two pages. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: daily weighing; a broken blood feather handled with firm pressure, never pulled at home; incubation 18 to 24 days. Other changes are wording only." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 38 pages. Safety: diet moved to 75 to 80% pellets; an itemized budget. Replaced by 3.0." },
      { edition: "1.0", date: "Aug 2026", text: "First edition, 21 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'russian-tortoise',
    animal: 'Russian Tortoise',
    name: 'Russian Tortoise Care Package',
    badge: 'Reptile',
    emoji: '🐢',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENCB9qtY3Ob6vaTvVBMark',
    price: '$8.99',
    pages: 51,
    version: '3.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/russian-tortoise.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/russiantortoisecarepackage',
    blurb: 'Complete 51-page printable guide with basking and UVB targets, outdoor pens, feeding by age, choosing a healthy tortoise, brumation, the law in every state, seven health pages, and the owner tools.',
    bullets: [
      'The enclosure and where it goes, temperature and night lows, thermostats and timers, UVB (ultraviolet B) tube and distance, humidity and substrate, outdoor pens, and cleaning in one guide',
      'Feeding by age, weeds and hay, calcium and water, handling and daily rhythm, choosing a tortoise and quarantine, eggs and brumation, the law in every state, and seven health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage and heat-wave plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Size, Type & Where It Goes",
          "Temperature, Basking & Night Lows",
          "Thermostats, Timers & Thermometers",
          "UVB: Tube, Strength & Mounting Distance",
          "Humidity, Substrate & Furnishings",
          "Outdoor Pens & Escape-Proofing",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet by Age & How Much",
          "Weeds, Hay & Growing Your Own",
          "Fruit, Protein & the Never-Feed List",
          "Calcium, Multivitamin & Water",
          "Growth, Weight & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Hygiene",
          "Daily Rhythm, Courtship & Living Alone",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Tortoise, Quarantine & the First Vet Visit",
          "Sexing & Females That Lay",
          "Egg Binding",
          "Brumation: the Decision & the Protocol",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Russian Tortoise Legal Where You Live?",
          "The Four-Inch Rule & the Trade",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Metabolic Bone Disease & Pyramiding",
          "Respiratory Infection & Herpesvirus",
          "Shell Rot, Shell Trauma & Abscesses",
          "Parasites & Hexamita",
          "Vitamin A, Bladder Stones & Beak Overgrowth",
          "Reading Droppings, Urates & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Yearly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to M",
          "Glossary, N to Z",
          "Sources",
          "Sources, Continued",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.1", date: "Oct 2026", text: "51 pages. Costs: every item priced and rounded to the nearest $5; setup $490 to $935, yearly $370 to $695, the budget now over two pages. Other changes are wording only." },
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 49 pages. Safety: basking surface about 95°F (35°C); adult surface humidity 40 to 50%; substrate 4 in juvenile, 6 in adult, dig zone 6 to 12 in; daytime air 75 to 85°F; UVB tube 14 to 16 in through mesh, 17 to 20 in without, replaced every 6 to 12 months, never past 12; growing tortoises fed daily as much as they eat, adults a shell-sized daily portion; multivitamin lightly, no weekly schedule; hatchlings soaked daily 15 to 30 minutes; first vet exam within a week; substrate fully replaced every 3 to 6 months; car trips below 65°F over 30 minutes get a wrapped hand warmer, checked every 20 to 30 minutes. Legal: own section, all 52 jurisdictions and the eleven with stricter local rules. Costs: first checkup about $75; start-up $497 to $1,250; forty years $14,600 to $28,600. Other changes are wording only." },
      { edition: "2.3", date: "Oct 2026", text: "Safety: enclosure 7×3.5 ft; adults soaked weekly, juveniles twice a week, never unattended; vitamin D3 only when a vet asks; no fruit; pen walls about 2 ft with an inward lip, buried 12 in. Legal: West Virginia added, so 5 states require a permit." },
      { edition: "2.2", date: "Sep 2026", text: "Legal: Colorado bans the species, and more states were found to require a permit or attach a condition." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: brumation at 35 to 50°F, ideally 41°F, for at most 10 to 14 weeks by size, after a 1 to 3 week fast at 70 to 80°F, and not under about 4 years old; quarantine six months with testing; medicine doses removed." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 37 pages. Replaced by 3.0." },
      { edition: "1.0", date: "Aug 2026", text: "First edition, 21 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'ball-python',
    animal: 'Ball Python',
    name: 'Ball Python Care Package',
    badge: 'Reptile',
    emoji: '🐍',
    status: 'coming-soon',
    storefront: 'stripe',
    stripePriceId: 'price_1UENCE9qtY3Ob6vajtYqePnI',
    price: '$8.99',
    pages: 49,
    version: '3.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/ball-python.jpg',
    blurb: 'Complete 49-page printable guide with thermostat and probe placement, humidity through the shed, feeding by age, why a ball python stops eating, choosing a healthy snake, the law in every state, seven health pages, and the owner tools.',
    seoDescription: '49-page printable ball python guide: thermostat and probe placement, the humidity range that decides everything, feeding by age and the never-feed list, and health triage.',
    bullets: [
      'The enclosure and where it goes, the temperature gradient and heat sources, thermostats and probes, humidity and optional ultraviolet light, substrate and hides, and cleaning in one guide',
      'Feeding by age, prey, thawing and why a ball python stops eating, handling and body language, choosing a snake and quarantine, females and egg binding, the winter appetite dip, the law in every state, and seven health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage and heat-wave plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Morphs, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Size, Type & Where It Goes",
          "The Temperature Gradient & Heat Sources",
          "Thermostats & Probes",
          "Humidity, Light & Optional Ultraviolet",
          "Substrate, Hides & Cover",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet & Feeding by Age",
          "Prey Types & the Never-Feed List",
          "Thawing, Warming & Freezer Storage",
          "Why a Ball Python Stops Eating",
          "Growth, Weight & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "Body Language, Normal Behavior & Escapes",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Snake, Quarantine & the First Vet Visit",
          "Telling Male from Female",
          "Females, Follicles & Egg Binding",
          "The Winter Appetite Dip & Brumation",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Ball Python Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Respiratory Infection & Scale Rot",
          "Mouth Rot, Mites & Thermal Burns",
          "Internal Parasites, Regurgitation & Obesity",
          "Inclusion Body Disease & Prolapse",
          "Shedding, Stuck Shed & Eye Caps",
          "Reading Droppings, Urates & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Yearly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment, Quarantine & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to I",
          "Glossary, L to Z",
          "Sources",
          "Sources, Continued",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.1", date: "Oct 2026", text: "Now 49 pages. Costs: every item priced and rounded to the nearest $5; setup $510 to $1,245, yearly $290 to $635, the budget now over two pages. Other changes are wording only." },
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 48 pages. Safety: probe on the floor of the warm hide, clip or suction cup, never tape; first vet exam within 72 hours, no later than two weeks; shed 4 to 7 days after the eyes clear; after a regurgitation skip a feeding cycle and call the vet; prey no wider than mid-body, 10 to 15% of body weight, fuzzies to hoppers, adult mice to small rats, medium rat for most adults; no supplements; never live prey, insects or meat pieces; first meal after one to two weeks; young snake refusing twice weighed weekly, any loss to a vet; stools one or two a month, none for a month while eating to a vet; overweight snake gets smaller or less frequent prey; bowl and decor scrubbed weekly in 3% bleach for 10 minutes; substrate changed monthly if messy, every 3 months at most; young female fasting at 800 to 1,000 g, maturity about 1,500 g at 27 to 31 months (males 16 to 18), 10% loss the line, weakness or lethargy near laying to a vet; sunken eyes with lethargy to a vet; stuck shed in a humidity chamber up to an hour, or a 30-minute soak. Legal: a new page, all 52 jurisdictions. Costs: equipment $220 to $840, running $210 to $550 a year. Other changes are wording only." },
      { edition: "2.2", date: "Sep 2026", text: "Safety: quarantine 3 to 6 months; first vet exam within two weeks, with a fecal sample; second thermometer read daily; overhead heaters 4 to 6 in above reach; prey warmth by touch; frozen prey never refrozen; Salmonella precautions for adults over 65, children under 5 kept from reptiles. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: baseline humidity 55 to 65%; 70 to 80% through a shed. Other changes are wording only." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 34 pages, with substrate and handling on their own pages and the full handling guidance restored." },
      { edition: "1.0", date: "Sep 2026", text: "First edition, 33 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'betta-fish',
    animal: 'Betta Fish',
    name: 'Betta Fish Care Package',
    badge: 'Fish',
    emoji: '🐠',
    status: 'coming-soon',
    storefront: 'stripe',
    stripePriceId: 'price_1UENCG9qtY3Ob6vaxKLgeXwO',
    price: '$8.99',
    pages: 54,
    version: '3.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/betta-fish.jpg',
    blurb: 'Complete 54-page printable guide with tank and heater targets, the water numbers that actually matter, fishless and fish-in cycling, feeding and why a betta stops eating, choosing a healthy betta, quarantine, eight health pages, and the owner tools.',
    seoDescription: '54-page printable betta guide: tank and heater targets, the water numbers that matter, a full fishless cycling walkthrough, and health triage.',
    bullets: [
      'Tank size and where it goes, the heater and thermometer, filtration and gentle flow, the nitrogen cycle and fishless cycling, water testing and changes, and plants and decor in one guide',
      'Feeding and why a betta stops eating, handling, body language and bubble nests, choosing a healthy betta, quarantine and tankmates, and eight health pages from red flags to medication rules',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, power outage plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Tank Size, Type & Where It Goes",
          "Temperature, Heater & Thermometer",
          "Filtration & Gentle Flow",
          "The Nitrogen Cycle & Fishless Cycling",
          "Fish-In Cycling & When a Cycle Stalls",
          "Water Quality, Testing & Hardness",
          "Water Changes & Conditioner",
          "Substrate, Plants, Light & Decor",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet & Feeding Schedule",
          "Pellets, Protein Foods & the Food Chart",
          "Treats & the Never-Feed List",
          "Why a Betta Stops Eating",
          "Body Condition & Portion Control",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling: Net, Cup & Never Bare Hands",
          "Body Language, Flaring & Bubble Nests",
          "Enrichment: What the Research Says",
          "Common Mistakes & Myths",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Healthy Betta & Bringing It Home",
          "Quarantine & the Hospital Tank",
          "Tankmates",
          "Males, Females, Bubble Nests & Fry",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Testing the Water First",
          "Finding a Vet & When It Is a Vet's Job",
          "Fin Rot, Regrowth & Clamped Fins",
          "Ich & Velvet",
          "Columnaris",
          "Swim Bladder, Dropsy & Fish Tuberculosis",
          "Reading Waste, Breathing & Oxygen",
          "Medication Rules & When a Fish Will Not Recover",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Running Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages",
          "Travel, Transport & Moving",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment, Water Change & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to F",
          "Glossary, G to M",
          "Glossary, N to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    history: [
      { edition: "3.1", date: "Oct 2026", text: "Now 54 pages. Costs: every item priced and rounded to the nearest $5; setup $150 to $360, running costs $10 to $25 a month, the budget now over two pages. Other changes are wording only." },
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 53 pages. Safety: weekly water change 25 to 30%; float 20 to 30 minutes, slow mixing past a 10°F gap; ich by heat to 86°F (30°C) with an air stone for two weeks, or aquarium salt at a tablespoon per 5 gal; fishless cycle dosed to 3 ppm, done when a full dose reads zero in 24 hours, 4 to 6 weeks and up to 8; fish-in action line 0.1 ppm, a third of the water, 50% or more if climbing; hospital tank 10 to 20 gal, bare; tankmates need 10 to 20 gal, ghost shrimp past 1.5 in, sorority at 10 gal with cover; no heat source in an outage; a bag no more than a third water; pellet about 35% protein and 5% fat; aquarium salt for ich only, fin rot dosed to a label or a vet. Costs: setup $105 to $280 before the fish, $110 to $310 all in. Other changes are wording only." },
      { edition: "2.2", date: "Sep 2026", text: "Safety: quarantine 30 days minimum; salt ended with repeated water changes once the infection clears; aeration first in a blackout; fish-in action line 0.1 to 0.25 ppm. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Spacing rules only. No words and no figures changed." },
      { edition: "2.0", date: "Sep 2026", text: "Safety: feeding window 1 to 2 minutes. Costs: running costs $10 to $25 a month, $120 to $300 a year." },
      { edition: "1.0", date: "Sep 2026", text: "First edition, 36 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'hamster',
    animal: 'Hamster',
    name: 'Hamster Care Package',
    badge: 'Mammal',
    emoji: '🐹',
    status: 'coming-soon',
    // The product page is the landing-page one (phase 2 in docs/STOREFRONT.md,
    // the plan in docs/SHOP_PLAN.md), skinned by carePackageThemes.js and
    // written in carePackageCopy.js. Setting this back to 'gumroad' takes the
    // buy button off the card, drops the product page, and removes it from the
    // prerender list and the sitemap, with nothing else torn down. gumroadUrl
    // is kept on every entry so that rollback stays a one-word edit.
    storefront: 'stripe',
    stripePriceIdSandbox: 'price_1UC9Up9qtY3Ob6vac8xRLEu2',
    stripePriceId: 'price_1UENBJ9qtY3Ob6vaJcPpuniM',
    price: '$8.99',
    pages: 47,
    version: '3.0',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/hamster.jpg',
    blurb: 'Complete 47-page printable guide with the floor space and bedding depth the starter kit gets wrong, choosing a species, wet tail triage, torpor told apart from death, the law in every state, seven health pages, and the owner tools.',
    bullets: [
      'Enclosure size and bar spacing, bedding depth and the study behind it, temperature, humidity and light, the wheel and sand bath, and cleaning in one guide',
      'Diet and the schedule, fresh foods, treats and the never-feed list, water, weight and aging, handling and body language, choosing a species, sexing and litters, torpor, the law in every state, and seven health pages from wet tail to antibiotics',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage, heat wave and travel plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Size, Bar Spacing & Where It Goes",
          "Bedding Depth & the Study Behind It",
          "Temperature, Humidity & Light",
          "The Wheel, the Sand Bath & the Furnishings",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet, the Schedule & Weaning",
          "Fresh Foods, Hay & Protein",
          "Treats & the Never-Feed List",
          "Water & Why a Hamster Stops Eating",
          "Growth, Weight, Body Condition & Aging",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "Normal Behavior & Body Language",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Species & Housing Company",
          "A Healthy Hamster, the First Days & the First Vet Visit",
          "Sexing, Breeding & Litters",
          "Torpor: Cold, Short Days & Telling It From Death",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Hamster Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Wet Tail",
          "Overgrown Incisors & Cheek Pouch Problems",
          "Tumors, Skin Problems & Diabetes",
          "Respiratory Infection & Heat Stress",
          "Antibiotics: Ask Before the First Dose",
          "Reading the Signs, Hydration & Germs You Can Catch",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Yearly Costs & the Vet",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to H",
          "Glossary, I to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 47 pages. Safety: weaning about 20 days (3 to 4 weeks in one reference); a new hamster left alone 24 hours; Chinese hamsters live alone; spot-clean daily, full clean weekly for a small cage or every few weeks for a deep one, nest and hoard returned; adult Syrian 3 to 5 oz (85 to 140 g); humidity 40 to 60%; water 9 to 12 ml a day, no glass tube for a Syrian; wet tail fatal within 24 to 48 hours untreated; protein target figure removed. Legal: 48 states, the District of Columbia and New York City legal, Hawaii barred, Oregon unclear; some states name only the Syrian. Costs: every item priced and rounded to the nearest $5; setup $165 to $550 with the animal ($185 to $550 with a Syrian, $165 to $430 with a dwarf); $10 to $25 a month, $140 to $265 a year before the vet; wellness exam $80 to $115; the budget now over two pages. Other changes are wording only." },
      { edition: "2.3", date: "Sep 2026", text: "Legal: Oregon added, rule unclear, so ask the state wildlife agency before buying." },
      { edition: "2.2", date: "Sep 2026", text: "Safety: torpor line 41°F (5°C), short days a further trigger; heat ceiling 80°F (27°C); antibiotic never-give list; fatal diarrhea three to five days after a dose. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Tightened from 42 pages to 36, with no husbandry figure, red flag or target changed." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 42 pages, with bedding depth, species choice, wet tail and torpor on their own pages. Replaced by 3.0." },
      { edition: "1.0", date: "Sep 2026", text: "First edition, 22 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'rabbit',
    animal: 'Rabbit',
    name: 'Rabbit Care Package',
    badge: 'Mammal',
    emoji: '🐰',
    status: 'coming-soon',
    storefront: 'stripe',
    stripePriceId: 'price_1UENCH9qtY3Ob6vaaasv4qjw',
    price: '$8.99',
    pages: 50,
    version: '3.0',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/rabbit.jpg',
    blurb: 'Complete 50-page printable guide with the real space standard, unlimited hay as the base of the diet, two pages on GI (gastrointestinal) stasis, bonding a pair, spay and neuter, the law in every state, eight health pages, and the owner tools.',
    seoDescription: '50-page printable rabbit guide: the real space standard, unlimited hay as the base of the diet, two pages on GI (gastrointestinal) stasis, bonding a pair, and the law by state.',
    bullets: [
      'Enclosure size and where it goes, flooring, the litter box and litter, temperature, heat and cold, indoors versus outdoors, rabbit-proofing the room, and cleaning in one guide',
      'Diet by age with hay first, greens, vegetables and pellets, handling and body language, bonding a companion, choosing a rabbit and quarantine, spay and neuter, the law in every state, and eight health pages from GI (gastrointestinal) stasis to the RHDV2 (rabbit hemorrhagic disease virus 2) vaccine',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage and heat wave plan, leaving town and moving, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Breeds, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Size, Type & Where It Goes",
          "Flooring, the Litter Box & Litter",
          "Temperature, Heat & Cold",
          "Indoors Versus Outdoors",
          "Rabbit-Proofing the Room",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet by Age",
          "Hay: the Base of the Diet",
          "Greens, Vegetables & Pellets",
          "Treats, the Never-Feed List & Water",
          "Growth, Weight & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Building Trust",
          "Body Language & Normal Behavior",
          "Enrichment & Common Mistakes",
          "Companionship & Bonding",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Rabbit, Quarantine & the First Vet Visit",
          "Sexing, Spay & Neuter",
          "Molting, Grooming & Nails",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Rabbit Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "GI Stasis: What It Is & Why Rabbits Get It",
          "GI Stasis: Signs, What to Do & Prevention",
          "Dental Disease",
          "Flystrike & Snuffles",
          "Sore Hocks, Bladder Stones, Uterine Cancer & a Parasite",
          "Rabbit Hemorrhagic Disease Vaccine & Antibiotics",
          "Reading Droppings & Cecotropes",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Monthly & Yearly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages & Heat Waves",
          "Leaving Town, Transport & Moving",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Care, Vet & Bonding Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to G",
          "Glossary, H to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 50 pages. Safety: first vaccine dose from 4 weeks, a second 21 days later, then yearly; uterine cancer risk up to 80% by 3 years in some strains; neuter bucks at 10 to 12 weeks once the testicles descend, does around 6 months; room 61 to 72°F (16 to 22°C), heat line about 80°F (26 to 27°C), temperature plus humidity 150 or less; vegetables at least 2 cups per 6 lb (2.7 kg) daily, 3 or more leafy greens; even one maggot is a flystrike emergency; scent glands cleaned by a vet or groomer; brushing weekly, daily in a molt; bladder stone signs: frequent urination, teeth grinding, weight loss. Legal: 52 jurisdictions, legal in 50, unclear in Minnesota and Nevada. Costs: every item priced and rounded to the nearest $5; setup $250 to $545; food and litter $60 to $135 a month; first year $1,320 to $3,045, later years $900 to $1,895; the budget now over two pages. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: comfortable range 61 to 72°F, heat ceiling 80°F; nails and scent glands every 6 to 8 weeks; fast before surgery up to 3 hours, eating again within 2 to 3 hours; stasis at 8 to 12 hours. Other changes are wording only." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 39 pages. Replaced by 3.0." },
      { edition: "1.0", date: "Sep 2026", text: "First edition, 22 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'tarantula',
    animal: 'Tarantula',
    name: 'Tarantula Care Package',
    badge: 'Invertebrate',
    emoji: '🕷️',
    status: 'coming-soon',
    storefront: 'stripe',
    stripePriceId: 'price_1UENCK9qtY3Ob6vafJILVYIP',
    price: '$8.99',
    pages: 49,
    version: '3.0',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/tarantula.jpg',
    blurb: 'Complete 49-page printable guide to the beginner tarantulas, with why the enclosure is low and wide, the tree-dwelling pink toe setup, the water dish that prevents the leading cause of death, the fasting that is normal, molting start to finish, a safe rehousing method, the law in every state, and six health pages.',
    seoDescription: '49-page printable tarantula guide: low, wide enclosures, the pink toe setup, normal fasting against dehydration, molting, safe rehousing, and the law by state.',
    bullets: [
      'Enclosure shape and size, tree-dwelling enclosures and slings, temperature, humidity, water and ventilation, substrate and hides, and cleaning and escapes in one guide',
      'Diet by age, feeder insects and gut-loading, why a tarantula stops eating, body condition, why handling is off the table, choosing a spider and quarantine, rehousing, molting on two pages, sexing and mature males, the law in every state, and six health pages from dehydration to DKS (dyskinetic syndrome)',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage, travel and shipping plan, pet-sitter sheet, and the owner, molt and vet logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species Covered, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Enclosure Shape, Size & Where It Goes",
          "Arboreal Enclosures & Housing a Sling",
          "Temperature, Heat & Light",
          "Humidity, Water & Ventilation",
          "Substrate, Hides & Furnishings",
          "Cleaning, Hygiene & Escapes",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet by Age",
          "Feeder Insects & the Never-Feed List",
          "Gut-Loading, Not Supplements",
          "Why a Tarantula Stops Eating",
          "Body Condition & Growth",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling: Why the Answer Is No",
          "Body Language & Normal Behavior",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Spider, Quarantine & Finding a Vet",
          "Rehousing: the Cup and Card Method",
          "Molting: the Cycle",
          "Molting: What to Do and Never Do",
          "Sexing, Mature Males & Eggs",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Tarantula Legal Where You Live?",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Dehydration & Reading the Abdomen",
          "Falls, Injuries & Stuck Molts",
          "Oral Nematodes, Mites & Mold",
          "Dyskinetic Syndrome (DKS) & Pesticides",
          "Urticating Hairs, Bites & Your Own Safety",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget & Shopping List",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Yearly Routine",
          "Power Outages, Travel, Transport & Shipping",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Molt Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to H",
          "Glossary, I to Z",
          "Sources",
          "Sources, Continued",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 49 pages, scoped to the beginner species. Safety: male rose hair about 5 years, 10 at the outside; quarantine apart, own tools, until the spider has fed, drunk and settled; humidity 40 to 60% rose hair, about 65 to 80% pink toe; comfortable to 85°F (29°C); slings at room temperature, 68 to 75°F (20 to 24°C), no added heat; molt 15 minutes to several hours; a round abdomen means fewer meals; slings drink from damp substrate, bottle cap as first dish; oral nematodes: isolate at once and see a vet, euthanasia by a vet only, never freezing alone; bites: soap and water, tetanus checked; hairs in an eye: never flushed or rubbed, eye doctor the same day. Legal: 52 jurisdictions, Maine's three species, Oregon's continental-stock condition, four states unclear. Costs: every item priced and rounded to the nearest $5; setup $105 to $305, $130 to $405 with the spider; $75 to $235 a year, about $5 to $20 a month. Other changes are wording only." },
      { edition: "2.3", date: "Sep 2026", text: "Legal: Oregon, New Mexico and New Jersey added to the legality table." },
      { edition: "2.2", date: "Sep 2026", text: "Safety: a hair in the eye shielded rather than flushed, with an eye doctor the same day; breathing trouble after hair exposure an emergency room visit; pesticide foggers added; no trip-length day count printed." },
      { edition: "2.1", date: "Sep 2026", text: "Spacing only; no content changed." },
      { edition: "2.0", date: "Sep 2026", text: "Rebuilt, 43 pages. Replaced by 3.0." },
      { edition: "1.0", date: "Sep 2026", text: "First edition, 22 pages. Replaced by 2.0." },
    ],
  },
  {
    id: 'cockatiel',
    animal: 'Cockatiel',
    name: 'Cockatiel Care Package',
    badge: 'Bird',
    emoji: '🐦',
    status: 'coming-soon',
    // Live price created 2026-10-01, matching priceIdLive in
    // CARE_PACKAGE_STORE in public/_worker.js. The PDF has to be in the bucket
    // before this ships to main, or a buyer pays and the download fails.
    storefront: 'stripe',
    stripePriceId: 'price_1ULwwQ9qtY3Ob6vaZoUuXLtw',
    price: '$8.99',
    pages: 52,
    version: '3.0',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/cockatiel.jpg',
    blurb: 'Complete 52-page printable guide with cage size and the bar spacing that is a safety limit, the night light that prevents night fright injuries, converting a seed eater to pellets, chronic egg laying and egg binding, seven health pages, and the owner tools.',
    seoDescription: '52-page printable cockatiel guide: cage size and bar spacing, night frights, converting a seed eater to pellets, chronic egg laying, and health triage.',
    bullets: [
      'Cage size, bar spacing and placement, perches and dishes, temperature, light, sleep and night frights, fumes, feather dust and household hazards, and cleaning in one guide',
      'Pellets, seed and converting a seed eater, fresh food and the never-feed list, the daily scale, handling, one cockatiel or two, reading the crest, flight and first aid, choosing a cockatiel and quarantine, sexing, chronic egg laying and egg binding, and seven health pages',
      'Setup checklist, emergency card, budget, first 30 days, symptom reference, routine, outage, heat and travel plan, pet-sitter sheet, and the logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "The Species, Colors, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Cage Size, Bar Spacing & Placement",
          "Perches, Dishes & What to Leave Out",
          "Temperature, Light, Sleep & Night Frights",
          "Air Quality: Fumes & Feather Dust",
          "Metals, Pets, Plants & Everyday Traps",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet: Pellets, Seed & How Much",
          "Converting a Seed Eater to Pellets",
          "Vegetables, Fruit & Fresh Food",
          "Treats, Supplements & the Never-Feed List",
          "Weight, Body Condition & the Daily Scale",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Taming",
          "One Cockatiel or Two",
          "Body Language & Reading the Crest",
          "Enrichment & Common Mistakes",
          "Flight & Wing Clipping",
          "Nails, Beak, Blood Feathers & First Aid",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Cockatiel",
          "Quarantine & the First Vet Visit",
          "Sexing by Plumage & the Color Exceptions",
          "Hens, Hormones & Chronic Egg Laying",
          "Egg Binding",
          "Molt & Seasonal Changes",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Red Flags & Finding a Vet",
          "Vitamin A, Calcium, Obesity & Fatty Liver",
          "Breathing Problems & Psittacosis",
          "Beak and Feather Disease & Polyomavirus",
          "Giardia, Gastric Yeast, Rope & Metal",
          "Feather Plucking & Feather Loss",
          "Reading Droppings & Water",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Ongoing Costs & the Vet",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
          "Enrichment Checklist & Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to L",
          "Glossary, M to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 52 pages. Safety: perches 5/8 to 1.5 in (1.6 to 3.8 cm); a sick or egg-bound bird kept at 75 to 80°F (24 to 27°C); cage minimum 20×20×30 in, 24×24×30 in for easier movement, vertical bars; a seed-fed bird gets 1.5 to 2 level teaspoons a day; pellet conversion: never more than 12 hours without food, slow down at 1 to 2% weight loss in a week, call the vet at 10%; a completed clutch stays the full 19 to 21 days; bleach at 1 part to 32 parts water; medicine doses removed. Costs: every item priced and rounded to the nearest $5; setup $370 to $765 with the bird; $180 to $360 a year ($15 to $30 a month) plus vet exams. Other changes are wording only." },
      { edition: "1.3", date: "Oct 2026", text: "Outside sources named in the care text rewritten as plain statements. Other changes are wording only. Replaced by 3.0." },
      { edition: "1.2", date: "Oct 2026", text: "Safety: daily bath and weigh-in (1 to 2% weekly limit in a diet change); two cocks, not two hens, as the no-egg pairing; quarantine 30 to 45 days, up to 90 for an established flock; an hour or more out of the cage daily; sick-bird warmth 80°F; the 24-hour droppings rule. Costs: upkeep $200 to $350 a year before the exam. Replaced by 1.3." },
      { edition: "1.1", date: "Sep 2026", text: "Safety: a broken blood feather gets firm pressure, never pulled at home; egg-binding warmth 80 to 85°F; multi-bird quarantine 90 days; no fixed interval for wing feather regrowth. Replaced by 1.2." },
      { edition: "1.0", date: "Sep 2026", text: "First edition. Replaced by 1.1." },
    ],
  },
  {
    id: 'cockatoo',
    animal: 'Cockatoo',
    name: 'Cockatoo Care Package',
    badge: 'Bird',
    emoji: '🦜',
    status: 'coming-soon',
    // Same as the cockatiel above: live price created 2026-10-01, PDF to the
    // bucket before main.
    storefront: 'stripe',
    stripePriceId: 'price_1ULwwY9qtY3Ob6vaVwNPPWLL',
    price: '$8.99',
    pages: 49,
    version: '1.4',
    versionDate: '2026-10-03',
    samplePages: 6,
    cover: '/assets/guides/cockatoo.jpg',
    blurb: 'Complete 49-page printable guide with an honest decision test, six species compared, training and foraging as the plan against plucking and screaming, feather dust and your own lungs, and a succession plan for a bird that may outlive you.',
    seoDescription: '49-page printable cockatoo guide: an honest decision test, six species compared, training and foraging against plucking, and a succession plan.',
    bullets: [
      'The decision test and species comparison, cage, locks and placement, light and sleep, feather dust and air quality, household hazards, diet and foraging in one guide',
      'Behavior and health sections with training, bites and sexual maturity, over-bonding and screaming, egg laying, plucking and the molt differential, beak and feather disease, and obesity, lipomas and fatty liver',
      'Legal status by state, a succession plan, setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, and the owner and vet logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "Is a Cockatoo Right for You? The Honest Test",
          "Which Cockatoo: Size, Price, Noise & Temperament",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "Cage Size, Bar Gauge, Locks & Placement",
          "Perches, Play Stands & Out-of-Cage Space",
          "Light, Sleep & the 10 to 12 Hour Rule",
          "Feather Dust, Air Quality & Your Own Lungs",
          "Household Hazards & Bird-Proofing",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet: Pellets, Seed & Converting a Seed Eater",
          "Safe Vegetables, Greens & Fruit",
          "Nuts, Treats & the Never-Feed List",
          "Foraging: Filling the Gap a Bowl Leaves",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Training, and Why It Comes First",
          "Handling, Step-Up, Bites & Sexual Maturity",
          "Over-Bonding, Separation Anxiety & Independence",
          "Screaming, Noise & the Household Reality",
          "Wing Clipping & Flight",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Quarantine & Adding a Second Bird",
          "Sexing, Weight & Body Condition",
          "Hens, Hormones & Chronic Egg Laying",
          "The Sixty-Year Bird: Succession & Rehoming",
        ],
      },
      {
        label: "The Law",
        items: [
          "Legal Status, the Wildlife Trade Treaty & State Rules",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Health Red Flags & What to Tell the Vet",
          "Feather-Destructive Behavior, Molt & the Differential",
          "Beak & Feather Disease & Other Viruses",
          "Obesity, Lipomas & Fatty Liver",
          "Psittacosis, Respiratory Disease, Metals & Injuries",
          "Reading Droppings & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Every Year After That",
          "First 30 Days Checklist",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to C",
          "Glossary, D to N",
          "Glossary, P to Z",
          "Sources & Further Reading",
          "Sources, Continued",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "1.4", date: "Oct 2026", text: "Aligned to the current layout: cover icon, section order, page pointers, a units note on the how-to page, new glossary entries, and outside names removed from the care text. Costs: every item priced and rounded to the nearest $5; setup $2,270 to $6,410 with the bird and first exam, $875 to $1,995 a year; the budget now runs over two pages. Other changes are wording only." },
      { edition: "1.3", date: "Oct 2026", text: "Outside sources named in the care text rewritten as plain statements; every source is still credited on the sources pages. Other changes are wording only." },
      { edition: "1.2", date: "Oct 2026", text: "Safety: life span 25 to 45 years, larger species 70 to 80 or more; fresh food 20 to 25% of the diet, seed under about 10%; a daily bath and weigh-in; quarantine 30 to 45 days; sick-bird carrier 75 to 80°F (24 to 27°C). Legal: New Jersey permit, Vermont ban, Massachusetts by species. Costs: budget rebuilt on current prices. Other changes are wording only." },
      { edition: "1.1", date: "Sep 2026", text: "Safety: a broken blood feather gets firm pressure, never pulled at home; daily weighing; multi-bird quarantine 90 days; training built from 5 to 10 minutes to two 20-minute sessions; a laying hen with no egg in 48 hours is an emergency; a rehomed bird's withdrawal goes to a vet check. Other changes are wording only." },
      { edition: "1.0", date: "Sep 2026", text: "First edition. Replaced by 1.1." },
    ],
  },
  {
    id: 'whites-tree-frog',
    animal: "White's Tree Frog",
    name: "White's Tree Frog Care Package",
    badge: 'Amphibian',
    emoji: '🐸',
    status: 'coming-soon',
    // Same as the birds above: live price created 2026-10-01, PDF to the
    // bucket before main.
    storefront: 'stripe',
    stripePriceId: 'price_1ULwwZ9qtY3Ob6vaXWw8eqo1',
    price: '$8.99',
    pages: 42,
    version: '1.1',
    versionDate: '2026-10-03',
    samplePages: 4,
    cover: '/assets/guides/whites-tree-frog.jpg',
    blurb: 'Complete 42-page printable guide with the vertical enclosure, a humidity cycle that dips instead of sitting high, the water that is safe to mist with, feeding by size and age, the ridge test that catches obesity early, and seven health pages.',
    seoDescription: "42-page printable White's tree frog guide: the vertical enclosure, a humidity cycle that dips, safe misting water, and the ridge test that catches obesity.",
    bullets: [
      'The vertical enclosure and where it goes, the temperature gradient, the humidity cycle, safe misting water, UVB (ultraviolet B) light, substrate and plants, and cleaning without soap in one guide',
      'Feeding by size and age, feeders and supplements, the ridge test, handling with plain water, size-matched groups and sexing, choosing a frog and quarantine, and seven health pages from obesity and chytrid to red-leg and metabolic bone disease',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, outage and travel plan, pet-sitter sheet, and the owner and vet logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "The Vertical Enclosure & Where It Goes",
          "The Temperature Gradient & Heating",
          "The Humidity Cycle That Dips",
          "The Water That Is Safe to Mist With",
          "Ultraviolet B (UVB) Light & the Day Length",
          "Substrate, Plants & Furnishings",
          "Cleaning Without Soap, and Household Chemicals",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Feeding by Size & Age",
          "Feeder Insects, Treats & Supplements",
          "Body Condition: Reading the Tympanum Ridges",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling With Plain Water & No Soap",
          "Shedding, Color, Calling & Normal Behavior",
          "Common Mistakes & Enrichment",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Frog, Quarantine & the Law",
          "Group Housing by Size, Sexing & Breeding",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Health Red Flags & Finding a Vet",
          "Obesity, Fatty Eyes & Fatty Liver",
          "Chytridiomycosis",
          "Red-Leg Syndrome & Bacterial Infection",
          "Metabolic Bone Disease & Vitamin A",
          "Skin Injuries, Chemical Exposure & Dehydration",
          "Impaction, Parasites & Shedding Problems",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Yearly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Heat Waves, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to H",
          "Glossary, I to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    history: [
      { edition: "1.1", date: "Oct 2026", text: "Aligned to the current layout: cover icon, section order, page pointers, a units note, the thermostat probe mounting and a longer glossary, 42 pages. Costs: every item priced and rounded to the nearest $5; setup $305 to $595, yearly $150 to $245 in supplies. Other changes are wording only." },
      { edition: "1.0", date: "Oct 2026", text: "First edition, 39 pages." },
    ],
  },

  {
    id: 'hognose-snake',
    animal: 'Hognose Snake',
    name: 'Hognose Snake Care Package',
    badge: 'Reptile',
    emoji: '🐍',
    status: 'coming-soon',
    // Live price created 2026-10-02, PDF to the bucket before main.
    storefront: 'stripe',
    stripePriceId: 'price_1UM5ZC9qtY3Ob6vagncB2NR6',
    price: '$8.99',
    pages: 47,
    version: '1.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/hognose-snake.jpg',
    blurb: 'Complete 47-page printable guide to the western hognose with the enclosure sized by sex, dry air at 30 to 50% humidity, prey by gram weight fed in a separate container, the venom question answered from the bite research, a state-by-state legal summary, and six health pages.',
    seoDescription: '47-page printable western hognose guide: the dry setup, prey by gram weight, the venom question from the bite research, and a state-by-state legal summary.',
    bullets: [
      'The enclosure sized by sex, the temperature gradient, every heat source on a thermostat, dry air and the one humid hide, optional UVB (ultraviolet B) light, and deep digging substrate on the cool end in one guide',
      'Prey by gram weight, frozen-thawed and fed in a separate container, the refusing hognose, the hood and the death act, the venom question, a state-by-state legal summary, and six health pages from respiratory infection and scale rot to the winter slowdown',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, outage and travel plan, pet-sitter sheet, and the owner, equipment, quarantine and vet logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "Which Hognose This Is, Size & Lifespan",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "The Enclosure, Sized by Sex & Age",
          "The Temperature Gradient",
          "Heat Sources, Thermostats & Probes",
          "Dry Air, the Humid Hide & Ultraviolet Light",
          "Deep Bedding, Digging & Cleaning",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Prey Size & Feeding Schedule",
          "Frozen Prey: Thawing, Storage & Where to Feed",
          "The Refusing Hognose",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling & Hygiene",
          "Hooding, Hissing & Playing Dead",
          "The Venom Question & Bites",
          "Enrichment & Common Mistakes",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Hognose, Quarantine & the First Vet Visit",
          "Telling the Sex, Weight & Body Condition",
          "Females, Eggs & Eggs That Get Stuck",
          "The Winter Slowdown",
        ],
      },
      {
        label: "The Law",
        items: [
          "Is a Hognose Legal Where You Live?",
          "States With Conditions",
          "States Where It Is Legal",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Health Red Flags & Finding a Vet",
          "Respiratory & Belly-Scale Infections",
          "Blockages, Regurgitated Meals & Obesity",
          "Mites & Internal Parasites",
          "Shedding, Mouth Infections, Burns & Tissue at the Vent",
          "Reading Droppings & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget: Setup & Shopping List",
          "Budget: Yearly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment, Quarantine & Vet Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to D",
          "Glossary, E to N",
          "Glossary, O to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "1.1", date: "Oct 2026", text: "Aligned to the current layout: cover icon, section order and names, page pointers, a separate page for where the sources disagree, and added glossary entries on a third glossary page. Costs: every item priced and rounded to the nearest $5; setup $390 to $850, yearly $235 to $390, the budget now over two pages. Other changes are wording only." },
      { edition: "1.0", date: "Oct 2026", text: "First edition, 44 pages." },
    ],
  },
  {
    id: 'gargoyle-gecko',
    animal: 'Gargoyle Gecko',
    name: 'Gargoyle Gecko Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'coming-soon',
    // Live price created 2026-10-02, PDF to the bucket before main.
    storefront: 'stripe',
    stripePriceId: 'price_1UM5ZE9qtY3Ob6va7nQlh94C',
    price: '$8.99',
    pages: 42,
    version: '1.1',
    versionDate: '2026-10-03',
    samplePages: 4,
    cover: '/assets/guides/gargoyle-gecko.jpg',
    blurb: 'Complete 42-page printable guide with the tall, cluttered enclosure, a gentle warm spot under an 86°F ceiling, a humidity cycle that dries out every day, powder and insects by age, the tail that grows back, and six health pages.',
    seoDescription: '42-page printable gargoyle gecko guide: the 86°F ceiling, a humidity cycle that dries out daily, powder plus insects by age, and floppy tail prevention.',
    bullets: [
      'The tall enclosure and where it goes, the gradient and the 86°F ceiling, the daily humidity cycle, UVB (ultraviolet B) light, substrate and clutter, and cleaning and hygiene in one guide',
      'Powder and insects by age, feeders and supplements, the never-feed list, weight in grams, handling and the tail that grows back, sexing and eggs, quarantine, and six health pages from metabolic bone disease and floppy tail to stuck shed and respiratory infection',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, heat wave and outage plan, pet-sitter sheet, and the owner and equipment logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "The Vertical Enclosure & Where It Goes",
          "The Gradient & the 86°F Ceiling",
          "The Humidity Cycle, Misting & Airflow",
          "UVB (Ultraviolet B) Light & the Day Length",
          "Substrate, Clutter & Furnishings",
          "Cleaning & Hygiene",
        ],
      },
      {
        label: "Feeding",
        items: [
          "Diet & Feeding by Age",
          "Complete Diet Powder: Mixing & Rotation",
          "Feeder Insects & Supplements",
          "Treats, the Never-Feed List & Appetite",
          "Weight, Growth & Body Condition",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling, the Bite & the Tail",
          "Shedding, Seasonal Slowdown & Behavior",
          "Common Mistakes & Enrichment",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Gecko, Quarantine & the Law",
          "Sexing, Single Housing & Pairs",
          "Females, Eggs & Egg Binding",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Health Red Flags & Finding a Vet",
          "Metabolic Bone Disease",
          "Floppy Tail Syndrome & Tail Loss",
          "Stuck Shed, Toe Loss & Respiratory Infection",
          "Overheating, Dehydration & Reading Droppings",
          "Parasites, Blockages, Mouth Rot & More",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget & Shopping List",
          "Budget: Yearly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Heat Waves, Power Outages, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment & Vet Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to H",
          "Glossary, I to Z",
          "Sources",
          "Where the Sources Disagree, Version History & About",
        ],
      },
    ],
    history: [
      { edition: "1.1", date: "Oct 2026", text: "Aligned to the current layout: cover icon, section order, page pointers, a units note and glossary entry, and one outside organization name taken out of the care text. Safety: UVB is a 12 in 5.0 (5%) T5 HO tube, with the basking spot 6 to 12 in below it. Costs: every item priced and rounded to the nearest $5; setup $335 to $630, yearly $320 to $565; the budget now over two pages. Other changes are wording only." },
      { edition: "1.0", date: "Oct 2026", text: "First edition, 41 pages." },
    ],
  },
  {
    id: 'african-fat-tail',
    animal: 'African Fat-Tailed Gecko',
    name: 'African Fat-Tailed Gecko Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'coming-soon',
    // Live price created 2026-10-02, PDF to the bucket before main.
    storefront: 'stripe',
    stripePriceId: 'price_1UM5ZF9qtY3Ob6vaVvMy9Fdr',
    price: '$8.99',
    pages: 45,
    version: '1.1',
    versionDate: '2026-10-03',
    samplePages: 5,
    cover: '/assets/guides/african-fat-tail.jpg',
    blurb: 'Complete 45-page printable guide with every way it differs from a leopard gecko, belly heat on a thermostat, a 50 to 70% enclosure with a humid hide at 70 to 80%, a soil mix it can burrow in, feeding by age, and seven health pages.',
    seoDescription: '45-page printable African fat-tailed gecko guide: how it differs from a leopard gecko, belly heat, the humid hide that stops stuck shed, and feeding by age.',
    bullets: [
      'Every way it differs from a leopard gecko, the floor-space enclosure, belly heat on a thermostat with the probe in the right place, humidity and the three hides, a substrate for a burrower, and the light cycle with optional UVB (ultraviolet B) in one guide',
      'Five feeding pages from hatchling portions to the never-feed list, handling a calm gecko, sexing and the tail as the body condition gauge, females and the laying box, choosing a gecko and quarantine, and seven health pages from retained shed to egg binding',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, outage and travel plan, pet-sitter sheet, and the owner, equipment and vet logs',
    ],
    contents: [
      {
        label: "Getting Started",
        items: [
          "How to Use This Package",
        ],
      },
      {
        label: "Profile",
        items: [
          "Quick Profile & Cost Overview",
          "Fat-Tail or Leopard Gecko? The Differences",
        ],
      },
      {
        label: "Housing & Environment",
        items: [
          "A Floor-Space Enclosure & Where It Goes",
          "Belly Heat, the Thermostat & the Probe",
          "Humidity & the Three Hides",
          "Light Cycle & UVB (Ultraviolet B) Light",
          "UVB Upkeep, Going Without & Vitamin D3",
          "Substrate for a Burrower, Furnishings & Cleaning",
        ],
      },
      {
        label: "Feeding",
        items: [
          "What African Fat-Tailed Geckos Eat",
          "Feeding Schedule by Age & How Much",
          "Feeder Insects: Staples, Treats & Never",
          "Gut-Loading & Calcium Dusting",
          "Why It Stops Eating & When to Worry",
        ],
      },
      {
        label: "Handling & Behavior",
        items: [
          "Handling a Calm Gecko",
          "Shedding, Seasons, Sounds & Behavior",
          "Common Mistakes & Enrichment",
        ],
      },
      {
        label: "Arrival & Life Stages",
        items: [
          "Choosing a Gecko, Quarantine & the Law",
          "Sexing, Weight & Body Condition",
          "Females, Eggs & the Laying Box",
        ],
      },
      {
        label: "Health & Common Issues",
        items: [
          "Health Red Flags & Finding a Vet",
          "Retained Shed & Eye Problems",
          "Metabolic Bone Disease & Vitamin Problems",
          "Impaction & Respiratory Infection",
          "Egg Binding, Prolapse & Male Problems",
          "Parasites, Mouth Rot, Tail Loss & Burns",
          "Reading Poop & Hydration",
        ],
      },
      {
        label: "Quick Reference",
        items: [
          "Setup Checklist & Targets",
          "Emergency & Quick Targets Card",
        ],
      },
      {
        label: "Owner Tools",
        items: [
          "Budget & Shopping List",
          "Budget: Yearly Costs",
          "First 30 Days",
          "Symptom Quick Reference",
          "Daily, Weekly & Seasonal Routine",
          "Power Outages, Travel & Transport",
          "Pet-Sitter Sheet",
          "Owner Log",
          "Equipment, Supplement & Vet Log",
        ],
      },
      {
        label: "Reference",
        items: [
          "Glossary, A to I",
          "Glossary, M to Z",
          "Sources",
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    history: [
      { edition: "1.1", date: "Oct 2026", text: "Aligned to the current layout: cover icon, section order, page pointers, a separate page for where the sources disagree, and a units entry in the glossary. Costs: every item priced and rounded to the nearest $5; setup $485 to $835, yearly $270 to $570; the budget now over two pages. Other changes are wording only." },
      { edition: "1.0", date: "Oct 2026", text: "First edition, 42 pages." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers the hub, the store and the cards share
// ---------------------------------------------------------------------------

// The catalog sections. Badge values above map onto these; a badge that is
// not listed lands in the last group rather than vanishing.
export const CARE_PACKAGE_GROUPS = [
  { id: 'reptiles', label: 'Reptiles', badges: ['Reptile'] },
  { id: 'birds', label: 'Birds', badges: ['Bird'] },
  { id: 'fish-and-amphibians', label: 'Fish and amphibians', badges: ['Fish', 'Amphibian'] },
  { id: 'small-mammals', label: 'Small mammals', badges: ['Mammal'] },
  { id: 'invertebrates', label: 'Invertebrates', badges: ['Invertebrate'] },
];

export function groupCarePackages(list) {
  const known = new Set(CARE_PACKAGE_GROUPS.flatMap(g => g.badges));
  return CARE_PACKAGE_GROUPS.map((g, i) => ({
    ...g,
    items: list.filter(pkg => g.badges.includes(pkg.badge) || (i === CARE_PACKAGE_GROUPS.length - 1 && !known.has(pkg.badge))),
  })).filter(g => g.items.length > 0);
}

// A package can be bought if it sells here or still sells on Gumroad. This,
// not `status` alone, is what every "on sale" count and every featured row
// keys on, so the copy stays right as packages move across one at a time.
export function isCarePackageBuyable(pkg) {
  return pkg.storefront === 'stripe' || pkg.status === 'live';
}

// The package's own cover page, rendered from the PDF by
// scripts/render-care-package-previews.mjs. Portrait, letter aspect. Every
// package in the catalog has one.
export function carePackageBookCover(pkg) {
  // Except a package that has not been built. There is no cover page to render
  // when there is no PDF, so it falls back to the guide hero rather than
  // pointing at a file that 404s on every card that shows it.
  if (pkg.storefront === 'soon') return pkg.cover;
  return `/assets/care-packages/${pkg.id}/cover.jpg`;
}

// What the animal lives in, by the naming rule in docs/RULES.md: Tank for fish
// and axolotls, Cage for birds and cage mammals, Housing for rabbits,
// Enclosure for everything else. The in-article card says "keep by the cage",
// not "keep by the enclosure", for a budgie.
const CARE_PACKAGE_HOME = {
  'betta-fish': 'tank', goldfish: 'tank', axolotl: 'tank',
  budgie: 'cage', lovebird: 'cage', cockatiel: 'cage', cockatoo: 'cage',
  'guinea-pig': 'cage', hamster: 'cage',
  rabbit: 'housing',
};
export function carePackageHome(pkg) {
  return CARE_PACKAGE_HOME[pkg.id] || 'enclosure';
}

// The animal as it reads mid-sentence: lowercase, except a name that is a
// proper noun ("White's tree frog", "Russian tortoise", "African fat-tailed gecko").
export function carePackageAnimalInSentence(pkg) {
  return pkg.animal
    .split(' ')
    .map(w => (/^(White's|Russian|African)$/.test(w) ? w : w.toLowerCase()))
    .join(' ');
}

// Where a card's "Read the first N pages free" link goes: the package's own
// page, scrolled to its sample box, so the reader sees what the package is
// before the download. Only a package with a page here gets the link.
export function carePackageSampleHref(pkg) {
  return pkg.samplePages && pkg.storefront === 'stripe' ? `/care-packages/${pkg.id}/#sample` : null;
}
