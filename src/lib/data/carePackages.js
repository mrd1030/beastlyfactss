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
    pages: 48,
    version: '4.0',
    versionDate: '2026-10-02',
    samplePages: 5,
    cover: '/assets/guides/bearded-dragon.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/beardeddragoncarepackage',
    blurb: 'Complete 48-page printable guide with temperature and UVB targets, feeding by age, choosing a healthy dragon, brumation, the law in every state, seven health pages, and the owner tools.',
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
          "Budget & Shopping List",
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
      { edition: "4.0", date: "Oct 2026", text: "Rebuilt on the current outline, 48 pages. Safety: hatchlings under about 1 month fed 2 to 3 times daily, 1 to 4 months twice daily, juveniles to 18 months once daily with a fresh salad every day, adults insects a few times a week; plain calcium near-daily for juveniles; multivitamin 1 to 2 times a week; feeders gut-loaded 24 to 72 hours on calcium-rich foods; setup checklist UVB distance corrected to 16 to 18 in; stuck shed loosened with a 30-minute chin-deep soak; handling sessions built up to 10 to 15 minutes; egg binding is a vet visit after more than 24 to 48 hours of digging or straining. Legal: a new page on the law in all 52 jurisdictions. Other changes are wording only." },
      { edition: "3.2", date: "Oct 2026", text: "Safety: first vet exam within 48 hours; Salmonella precautions for children under 5, adults 65 and older, and anyone with a weakened immune system; calcium with D3 twice weekly for adults; 60°F (16°C) outage floor; thermostat probe clipped, never taped; lamps at least 4 to 6 in above the dragon, basking surface never above 122°F (50°C); UVB tube 16 to 18 in, 11 to 12 through mesh; yellow fungus outlook now guarded to grave, so see a vet at the first patch. Costs: setup, vet and monthly costs updated, greens included. Other changes are wording only." },
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
    pages: 49,
    version: '3.0',
    versionDate: '2026-10-02',
    samplePages: 5,
    cover: '/assets/guides/leopard-gecko.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/leopardgeckocarepackage',
    blurb: 'Complete 49-page printable guide with belly heat and the three hides, optional low-output UVB, insect feeding and gut-loading by age, choosing a healthy gecko, the law in every state, seven health pages, and the owner tools.',
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
          "Budget & Shopping List",
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
          "Where the Sources Disagree",
          "Version History & About",
        ],
      },
    ],
    legalAsOf: 'October 2026',
    history: [
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 49 pages, with new pages on sexing and laying, growth, and body condition. Safety: thermostat probe on a clip or suction cup, never tape; lamps 4 to 6 in above the gecko; cool side 70 to 77°F (21 to 25°C); nights in the 70s, floor 65°F (18°C), outage floor raised from 60; lights 14 hours in summer, 12 in winter; UVI 0.6 to 1.4 at the basking spot; a 7% T5 tube 10 to 18 in over a screen lid or 12 to 20 in inside, 16 to 18 and 18 to 20 in for pale morphs; tube replaced every 6 to 12 months by model; first vet exam within 72 hours; laying over in under 48 hours, past that a same-day vet; appetite loss with a thinning tail a vet visit; stuck shed loosened with a 30-minute soak; a slow tail swish with an arched back is the warning, a rapid flick is excitement; a pinky mouse once a week at most; no corncob or walnut shell bedding. Legal: a new page on the law in all 52 jurisdictions. Costs: every total adds up its own rows: $175 to $495 of equipment, $325 to $710 with the first vet exam, $20 to $82 a month, the yearly exam its own line. Other changes, adult length and lifespan among them, are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: quarantine for a new gecko raised to 3 to 6 months in a separate room; a second thermometer read daily; full Salmonella hygiene rules; dehydration soak 15 to 20 minutes. Other changes are wording only." },
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
    pages: 40,
    version: '2.1',
    versionDate: '2026-09-05',
    samplePages: 5,
    cover: '/assets/guides/goldfish.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/goldfishcarepackage',
    blurb: 'Complete 40-page printable guide with tank size, filtration turnover, water quality targets, swim bladder notes, and daily and weekly maintenance routines.',
    bullets: [
      'Tank size, filtration and cycling, water quality, diet, and common mistakes',
      'Red flags, swim bladder disease, ich and fin rot, cycling failure and dropsy, and handling and slime-coat stress guidance',
      'Water quality targets, shopping list, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile', 'Cost, Commitment & Fun Facts'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Tank Size & the Bowl Myth',
          'Filtration: Sizing the Filter',
          'Filter Media & Maintenance',
          'Cycling, With or Without a Fish',
          'Water Targets & Testing',
          'Water Changes & Early Warnings',
          'Substrate, Plants & Decor',
          'Handling, Quarantine & Settling In',
          'Feeding by Age',
          'Pellets, Presentation & Pond Feeding',
          'Staple Foods & Vegetables',
          'Protein Foods',
          'Treats, Extras & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Varieties, Tankmates & Sexing',
          'Growth, Body Condition & Lifespan',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Ammonia Poisoning & Ich',
          'Fin Rot, Fungus & Dropsy',
          'Swim Bladder Disorder & Minor Conditions',
          'Behavior, Spawning & Reading Waste',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Maintenance Log',
          'Enrichment Checklist & Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources', 'Version History & About'],
      },
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
    pages: 42,
    version: '2.2',
    versionDate: '2026-09-06',
    samplePages: 6,
    cover: '/assets/guides/axolotl.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/axolotlcarepackage',
    blurb: 'Complete 42-page printable guide with cold-water temps, filtration, health triage, enrichment, and owner checklists.',
    bullets: [
      'Tank size, water temperature and quality, filtration, substrate, diet, handling, and enrichment in one guide',
      'Health section with red flags, fungal infection, impaction, and heat-stress guidance',
      'Shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile', 'Cost, Commitment & Fun Facts', 'Where Axolotls Are Legal'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Tank Size & the Cold-Water Setup',
          'Temperature: The Numbers That Matter',
          'Cooling Methods & the Summer Plan',
          'Filtration & Flow',
          'Cycling, With or Without an Axolotl',
          'Water Targets & Testing',
          'Water Changes & Early Warnings',
          'Substrate, Hides & Decor',
          'Choosing an Axolotl, Morphs & Sexing',
          'Housing Together & Tankmates',
          'Bringing One Home, Quarantine & Handling',
          'Diet & Feeding by Age',
          'Staples, Treats & the Never-Feed List',
          'Common Mistakes',
          'Enrichment: Hides, Foraging & Novelty',
          'Growth, Body Condition & Reading Waste',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags',
          'Heat Stress & Reading the Gills',
          'Fungal & Bacterial Infection',
          'Impaction, Floating & Gas',
          'Burns, Injuries & Other Conditions',
          'Tubbing, Cooling & Salt Baths',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Heat Waves & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Maintenance Log',
          'Enrichment Checklist & Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources', 'Where Sources Disagree, Version History & About'],
      },
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
    pages: 40,
    version: '2.1',
    versionDate: '2026-09-05',
    samplePages: 4,
    cover: '/assets/guides/budgie.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/budgiecarepackage',
    blurb: 'Complete 40-page printable guide with cage setup, diet ratios, health triage, enrichment, and owner checklists.',
    bullets: [
      'Cage size, bar spacing, diet ratios, handling, and enrichment in one guide',
      'Health section with red flags, fatty liver and scaly face mites, and respiratory disease and egg binding guidance',
      'Shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Cage Size, Bar Spacing & Placement',
          'Perches, Dishes & What to Leave Out',
          'Light, Sleep & Household Climate',
          'Household Hazards & Bird-Proofing',
          'One Budgie or Two, and the Talking Trade-Off',
          'Diet: Pellets, Seed & Converting a Seed Eater',
          'Safe Vegetables, Greens & Herbs',
          'Fruit, Treats & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Handling, Taming & the Bite Problem',
          'Wing Clipping & Flight',
          'Sexing by Cere, Weight & Body Condition',
          'Hens, Hormones & Chronic Egg Laying',
          'Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Obesity, Fatty Liver & Tumors',
          'Respiratory Disease & Psittacosis',
          'Polyomavirus, French Moult & PBFD',
          'Scaly Face Mites, Megabacteriosis & Goiter',
          'Feather Plucking & Behavioral Health',
          'Molt & Seasonal Behavior',
          'Reading Droppings & Hydration',
          'Quarantine & Adding a Second Bird',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: [
          'Glossary',
          'Sources & Further Reading',
          'Where the Sources Disagree, Version History & About',
        ],
      },
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
    pages: 47,
    version: '3.0',
    versionDate: '2026-10-02',
    samplePages: 5,
    cover: '/assets/guides/crested-gecko.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/crestedgeckocarepackage',
    blurb: 'Complete 47-page printable guide with the humidity cycle and the 85°F ceiling, UVB, feeding by age, choosing a healthy gecko, the law in every state, six health pages, and the owner tools.',
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
          "Budget & Shopping List",
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
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 47 pages. Safety: heat lamps at least 4 to 6 in above the gecko, on a thermostat probe clipped, never taped; long stretches over 80°F already too warm, the lamp off in a heat wave once the room itself reaches 82°F, and an overheated gecko moved somewhere cooler with every heat source off, a shallow dish of room-temperature water, no ice or cold water, and a vet if still unresponsive or breathing hard after 10 to 15 minutes. One heavy mist at lights-out, drying to 45 to 50% by late afternoon; dish water from the tap, a filter or a spring, never distilled alone. UVB from a 24 in low-output T5 HO tube for a UVI of 0.6 to 1.4, replaced every 6 to 12 months by model; substrate at least 2 in deep; hatchlings in a 12×12×12 in grow-out enclosure until about 12 to 13 g, handling from 10 to 15 g, sex read from the hemipenal bulge at 18 to 25 g, not from age. Insects no wider than the space between the eyes, gut-loaded 24 to 72 hours and dusted with calcium before each insect feeding, with no separate vitamin D3 or multivitamin schedule; mealworms and superworms skipped, waxworms an occasional treat, hornworms captive-bred only; leftover diet out the next morning, food and water dishes washed and disinfected daily, and a non-bioactive enclosure fully cleaned and disinfected at least weekly, bleach left wet at least 10 minutes. Weigh at least monthly, and every few days while off food or in a winter slowdown; a dropped tail kept on paper towel until the stump seals, and a swollen stump to the vet; a lay box of slightly moist coconut fiber and fir bark, half and half, and a gravid female who stops eating, turns weak or strains past her laying date to the vet the same day. Legal: a new page on the law in all 52 jurisdictions. Costs: most normal geckos under $100 and rare morphs upward of $1,000; a routine exotic vet visit $40 to $70. Other changes are wording only." },
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
    pages: 41,
    version: '2.1',
    versionDate: '2026-09-05',
    samplePages: 4,
    cover: '/assets/guides/guinea-pig.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/guineapigcarepackage',
    blurb: 'Complete 41-page printable guide with housing space, vitamin C targets, diet ratios, health triage, and owner checklists.',
    bullets: [
      'Housing, temperature, substrate, handling, diet, and enrichment in one guide',
      'Health section with red flags, vitamin C deficiency and dental disease, GI stasis and respiratory infection, and bladder stones and ovarian cyst guidance',
      'Budget tiers, shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Enclosure Size, Shape & Flooring',
          'Bedding, Hides & Cage Layout',
          'Temperature, Heat Stress & Household Climate',
          'Common Mistakes, Enrichment & Floor Time',
          'Pairs and Groups: Choosing Your Guinea Pigs',
          'Introducing & Bonding Two Guinea Pigs',
          'Handling, Sounds & Body Language',
          'Hay: the 80% Nobody Budgets For',
          'Vitamin C: the Rule That Makes This Species Different',
          'Daily Vegetables & Greens',
          'Pellets, Fruit, Treats & the Never-Feed List',
          'Grooming, Nails, Coats & Boar Cleaning',
          'Sexing, Neutering & the Breeding Deadline',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & the 8 to 12 Hour Rule',
          'GI Stasis, Bloat & a Pig That Stops Eating',
          'Dental Disease & Malocclusion',
          'Scurvy: Stages, Treatment & Recovery',
          'Respiratory Infection & Pneumonia',
          'Bladder Stones & Urinary Disease',
          'Ovarian Cysts & Reproductive Disease',
          'Mites, Lice, Ringworm, Lumps & Bumblefoot',
          'Antibiotics & Enterotoxemia',
          'Anesthesia & the Vet Conversation',
          'Droppings, Weight & Body Condition',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Heat Waves, Power Outages & Travel',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources & Further Reading', 'Version History & About'],
      },
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
    pages: 39,
    version: '2.1',
    versionDate: '2026-09-05',
    samplePages: 4,
    cover: '/assets/guides/lovebird.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/lovebirdcarepackage',
    blurb: 'Complete 39-page printable guide with cage sizing, bar spacing, diet ratios, single-vs-pair guidance, and owner checklists.',
    bullets: [
      'Housing, bar spacing, diet, handling, and enrichment in one guide',
      'Health section with red flags, chronic egg-laying and egg binding, PBFD and respiratory disease, and feather plucking and behavioral health guidance',
      'Budget tiers, shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Cage Size, Bar Spacing & Placement',
          'Perches, Dishes & What to Leave Out',
          'Light, Sleep & Household Climate',
          'Household Hazards & Bird-Proofing',
          'One Bird or Two: the Decision That Shapes Everything',
          'Diet: Pellets, Seeds & Converting a Seed Eater',
          'Safe Vegetables, Greens & Herbs',
          'Fruit, Extras & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Handling, Taming & the Bite Problem',
          'Wing Clipping & Flight',
          'Sexing, Weight & Body Condition',
          'Hens, Hormones & Chronic Egg Laying',
          'Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'PBFD & Polyomavirus',
          'Respiratory Disease & Psittacosis',
          'Feather Plucking & Behavioral Health',
          'Nutritional Disease, Mites & Injuries',
          'Molt, Hormones & Seasonal Behavior',
          'Reading Droppings & Hydration',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Vet Log',
          'Enrichment Checklist & Log',
        ],
      },
      {
        label: 'Reference',
        items: [
          'Glossary',
          'Sources & Further Reading',
          'Where the Sources Disagree, Version History & About',
        ],
      },
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
    pages: 41,
    version: '2.3',
    versionDate: '2026-10-02',
    samplePages: 4,
    cover: '/assets/guides/russian-tortoise.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/russiantortoisecarepackage',
    blurb: 'Complete 41-page printable guide with housing, heat and UVB targets, diet, brumation guidance, health triage, and owner checklists.',
    bullets: [
      'Housing, temperature/UVB, substrate, diet, brumation and seasonal care, handling, and enrichment in one guide',
      'Health section with red flags, metabolic bone disease and pyramiding, and respiratory infection, shell rot, and parasite guidance',
      'Shopping list, first 30 days checklist, symptom reference, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Enclosure Size, Type & the Table Question',
          'Temperature, Basking & Night Lows',
          'UVB, Lighting & the Equipment That Controls It',
          'Humidity, Substrate & the Moist Hide',
          'Outdoor Housing & Escape-Proofing',
          'Handling, Temperament & Why Males Live Alone',
          'Diet: What a Steppe Grazer Actually Eats',
          'Weeds, Grazing & Growing Your Own',
          'Fruit, Protein, Supplements & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Sexing, Growth & Body Condition',
          'Females, Eggs & Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Metabolic Bone Disease & Pyramiding',
          'Respiratory Infection & Herpesvirus',
          'Shell Rot, Trauma & Abscesses',
          'Parasites, the Fecal Test & Quarantine',
          'Vitamin A Deficiency, Cloacoliths & Beak Overgrowth',
          'Brumation: the Decision and the Protocol',
          'Reading Droppings, Urates & Hydration',
        ],
      },
      {
        label: 'Quick Reference',
        items: [
          'The Law & the Four-Inch Rule',
          'The Law, State by State',
          'Setup Checklist & Targets',
          'Emergency & Quick Targets Card',
        ],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment, Supplement & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Glossary, Continued', 'Sources', 'Where the Sources Disagree & Version History'],
      },
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
    pages: 48,
    version: '3.0',
    versionDate: '2026-10-02',
    samplePages: 5,
    cover: '/assets/guides/ball-python.jpg',
    blurb: 'Complete 48-page printable guide with thermostat and probe placement, humidity through the shed, feeding by age, why a ball python stops eating, choosing a healthy snake, the law in every state, seven health pages, and the owner tools.',
    seoDescription: '48-page printable ball python guide: thermostat and probe placement, the humidity range that decides everything, a full prey chart, and health triage.',
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
          "Budget & Shopping List",
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
      { edition: "3.0", date: "Oct 2026", text: "Rebuilt on the current outline, 48 pages. Safety: a refusal checked in order, temperature and humidity first, then a shed, stress and the October to March season; thermostat probe on the floor of the warm hide, on a clip or suction cup, never tape; first vet exam within 72 hours, no later than two weeks; the shed about 4 to 7 days after the eyes clear; after a regurgitation, skip a feeding cycle and call the vet; prey no wider than the snake at mid-body and 10 to 15% of its body weight, fuzzies to hoppers, adult mice to small rats, a medium rat for most adults; no supplements; never live prey, insects or pieces of meat; the first meal after one to two weeks, and a young snake that refuses twice weighed weekly, any loss to a vet; one or two stools a month, a month with none while eating a reason to watch, then a vet; an overweight snake gets smaller or less frequent prey, never skipped meals; bowl and decor scrubbed weekly in 3% bleach for 10 minutes, substrate changed monthly if messy and every 3 months at most; a new page on females, follicles and egg binding: a young female fasting around 800 to 1,000 g, maturity around 1,500 g at about 27 to 31 months (males 16 to 18), a 10% loss the line, and weakness or lethargy around laying time a prompt vet visit; sunken eyes with lethargy a vet; stuck shed loosened in a humidity chamber for up to an hour, or the 30-minute soak; new handlers seated. Legal: a new page on the law in all 52 jurisdictions. Costs: equipment $220 to $840 and running costs $210 to $550 a year. Other changes are wording only." },
      { edition: "2.2", date: "Sep 2026", text: "Safety: quarantine for a new snake 3 to 6 months; first vet exam within two weeks, with a fecal sample; a second thermometer read daily; any overhead heater at least 4 to 6 in above the snake's reach; prey warmth judged by touch, with no core temperature; frozen prey never refrozen; Salmonella precautions widened to adults over 65, with children under 5 kept from reptiles and their enclosures. Other changes are wording only." },
      { edition: "2.1", date: "Sep 2026", text: "Safety: baseline humidity 55 to 65%, down from 55 to 70%; 70 to 80% through a shed. Other changes are wording only." },
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
    pages: 37,
    version: '2.2',
    versionDate: '2026-09-05',
    samplePages: 4,
    cover: '/assets/guides/betta-fish.jpg',
    blurb: 'Complete 37-page printable guide with tank and heater targets, the water numbers that actually matter, a full fishless cycling walkthrough, health triage, and owner checklists.',
    seoDescription: '37-page printable betta guide: tank and heater targets, the water numbers that matter, a full fishless cycling walkthrough, and health triage.',
    bullets: [
      'Tank, heater and filter, water parameters, cycling and water changes, diet, and enrichment in one guide',
      'Health section with red flags, fin rot, ich and velvet, swim bladder, dropsy and columnaris, and stress, aggression and tankmate guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Tank, Heater & Lid',
          'Filtration & the Nitrogen Cycle',
          'Fishless Cycling, Step by Step',
          'Water Quality & Testing',
          'Water Changes & Keeping the Cycle',
          'Diet & Feeding Schedule',
          'Why a Betta Stops Eating',
          'Food Chart & the Never-Feed List',
          'Common Mistakes',
          'Enrichment: What the Research Says',
          'Reading a Healthy Betta & Body Condition',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & First Response',
          'Finding a Vet & What to Tell Them',
          'Fin Rot & Ich',
          'Velvet & Columnaris',
          'Swim Bladder, Dropsy & Mycobacteriosis',
          'Stress Signals & Behavior',
          'Tankmates',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Water Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages & the Blackout Plan',
          'Travel, Transport & Moving',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment, Water Change & Vet Log',
          'Enrichment Checklist & Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources', 'Version History & About'],
      },
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
    pages: 37,
    version: '2.3',
    versionDate: '2026-09-06',
    samplePages: 5,
    cover: '/assets/guides/hamster.jpg',
    blurb: 'Complete 37-page printable guide with the floor space and bedding depth the starter kit gets wrong, species differences, wet tail triage, and owner checklists.',
    bullets: [
      'Enclosure size and bedding depth, the wheel and sand bath, species differences and handling, diet, and enrichment in one guide',
      'Health section with red flags, wet tail, dental disease, tumors and respiratory infection, and diabetes, torpor and cheek pouch impaction guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile', 'Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Enclosure Size & the Starter-Kit Problem',
          'Bedding Depth, and the Study Behind It',
          'The Wheel, the Sand Bath & the Rest',
          'Temperature, Torpor & Lighting',
          'Choosing a Hamster, and Where From',
          'Diet & the Schedule Disagreement',
          'Portions, Scattering & Weaning',
          'Food Chart & the Never-Feed List',
          'Why a Hamster Stops Eating',
          'Handling: Getting It Right',
          'The First Week & Common Mistakes',
          'Enrichment: What the Research Says',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & the Exotic Vet',
          'Wet Tail',
          'Overgrown Incisors & Tumors',
          'Respiratory Infection & Diabetes',
          'Torpor, and Telling It From Death',
          'Lifespan, Aging & the End',
          'Where Hamsters Are Not Legal',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment, Cleaning & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources & Further Reading', 'Version History & About'],
      },
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
    pages: 40,
    version: '2.1',
    versionDate: '2026-09-05',
    samplePages: 4,
    cover: '/assets/guides/rabbit.jpg',
    blurb: 'Complete 40-page printable guide with the real space standard, unlimited hay and why it is the whole diet, three pages on GI stasis, bonding a pair, and owner checklists.',
    seoDescription: '40-page printable rabbit guide: the real space standard, why unlimited hay is the whole diet, three pages on GI stasis, and bonding a pair.',
    bullets: [
      'Housing and space, flooring and litter training, handling, diet by life stage, and enrichment in one guide',
      'Health section with red flags, GI stasis, dental disease and flystrike, and snuffles, uterine cancer, E. cuniculi and sore hocks guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Housing & Space',
          'Flooring, Litter Training & Rabbit-Proofing',
          'Indoors, Outdoors & Temperature',
          'Diet: Hay First',
          'Greens, Pellets & the Never-Feed List',
          'Feeding by Life Stage',
          'Handling: Picking a Rabbit Up',
          'Building Trust & Reading a Rabbit',
          'Common Mistakes',
          'Enrichment: What the Research Says',
          'Bonding & Companionship',
          'Spay, Neuter & Why It Isn\'t Optional',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & the Rabbit-Savvy Vet',
          'GI Stasis: Recognizing It',
          'GI Stasis: Warning Signs',
          'GI Stasis: Treatment & Prevention',
          'Dental Disease',
          'Flystrike & Snuffles',
          'E. cuniculi, Sore Hocks, Bladder Sludge & RHDV2',
          'Grooming, Nails & Molting',
          'Reading Droppings & Cecotropes',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages & the Blackout Plan',
          'Travel, Transport & Moving',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment, Vet & Bonding Log',
          'Enrichment Checklist & Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources & Further Reading', 'Version History & About'],
      },
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
    pages: 44,
    version: '2.3',
    versionDate: '2026-09-06',
    samplePages: 5,
    cover: '/assets/guides/tarantula.jpg',
    blurb: 'Complete 44-page printable guide with why the enclosure is low and wide, substrate depth by species type, the fasting that is normal, the dehydration that is not, molting start to finish, and a safe rehousing method.',
    seoDescription: '44-page printable tarantula guide: low, wide enclosures, substrate depth by type, normal fasting vs. dehydration, molting, and safe rehousing.',
    bullets: [
      'Enclosure shape and substrate, humidity and ventilation, why handling is off the table, feeding by life stage, and enrichment in one guide',
      'Health section with red flags, dehydration, molting start to finish, and falls, mites, oral nematodes and DKS guidance',
      'Setup checklist, budget and shopping list, first 90 days checklist, symptom quick reference, molt and feeding logs, and a routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile', 'Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Enclosure: Shape, Size & the Lid',
          'Substrate, Hide & Furnishing by Type',
          'Temperature, Humidity & Ventilation',
          'Water, and What Actually Kills Tarantulas',
          'Diet & Feeding by Life Stage',
          'Prey Chart & the Never-Feed List',
          'Why a Tarantula Stops Eating',
          'Molting: the Cycle',
          'Molting: What to Do and Never Do',
          'Handling: Why the Answer Is No',
          'What Interacting Actually Looks Like',
          'Urticating Hairs, Bites & Your Own Safety',
          'Rehousing: When & How to Prepare',
          'Rehousing: the Method',
          'Common Mistakes',
          'Enrichment: What the One Study Says',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags',
          'What Isn\'t a Red Flag, and Finding a Vet',
          'Dehydration & Falls',
          'Molt Complications, Mites & Mold',
          'Nematodes, DKS & Pesticides',
          'Sexing, Growth & Lifespan',
          'Where Tarantulas Are Not Legal',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages & the Blackout Plan',
          'Travel, Transport & Moving',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Acquisition & Molt Log',
          'Equipment & Maintenance Log',
          'Enrichment Checklist & Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources', 'Version History & About'],
      },
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
    pages: 41,
    version: '1.3',
    versionDate: '2026-10-02',
    samplePages: 4,
    cover: '/assets/guides/cockatiel.jpg',
    blurb: 'Complete 41-page printable guide with cage size and the bar spacing that is a safety limit, the night light that prevents night frights, five ways to convert a seed eater to pellets, chronic egg laying and egg binding, and owner checklists.',
    seoDescription: '41-page printable cockatiel guide: cage size and bar spacing, night frights, converting a seed eater to pellets, chronic egg laying, and health triage.',
    bullets: [
      'Cage size and placement, perches, light and sleep, household hazards, one bird or two, diet and pellet conversion, handling and the crest, and wing clipping in one guide',
      'Health section with red flags, vitamin A, calcium and fatty liver, respiratory disease and psittacosis, beak and feather disease, Giardia and plucking, molt, and chronic egg laying and egg binding guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Full Care Guide',
        items: [
          'Cage Size, Bar Spacing & Placement',
          'Perches, Dishes & What to Leave Out',
          'Light, Sleep & Night Frights',
          'Household Hazards & Bird-Proofing',
          'One Cockatiel or Two, and the Whistling Trade-Off',
          'Diet: Pellets, Seed & Converting a Seed Eater',
          'Safe Vegetables, Greens & Herbs',
          'Fruit, Treats & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Handling, Taming & Reading the Crest',
          'Wing Clipping & Flight',
          'Sexing, Weight & Body Condition',
          'Hens, Hormones & Chronic Egg Laying',
          'Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Vitamin A, Calcium & Fatty Liver',
          'Respiratory Disease & Psittacosis',
          'PBFD (Psittacine Beak & Feather Disease), Polyomavirus & Other Viral Disease',
          'Foreign Bodies, Heavy Metal, Mites & Injuries',
          'Feather Plucking & Behavioral Health',
          'Molt & Seasonal Behavior',
          'Reading Droppings & Hydration',
          'Quarantine & Adding a Second Bird',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary, A to M', 'Glossary, N to Z', 'Sources & Further Reading', 'Where the Sources Disagree, Version History & About'],
      },
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
    pages: 47,
    version: '1.3',
    versionDate: '2026-10-02',
    samplePages: 6,
    cover: '/assets/guides/cockatoo.jpg',
    blurb: 'Complete 47-page printable guide with an honest decision test, six species compared, training and foraging as the plan against plucking and screaming, feather dust and your own lungs, and a succession plan for a bird that may outlive you.',
    seoDescription: '47-page printable cockatoo guide: an honest decision test, six species compared, training and foraging against plucking, and a succession plan.',
    bullets: [
      'The decision test and species comparison, cage, locks and placement, light and sleep, feather dust and air quality, household hazards, diet and foraging in one guide',
      'Behavior and health sections with training, bites and sexual maturity, over-bonding and screaming, egg laying, plucking and the molt differential, beak and feather disease, and obesity, lipomas and fatty liver',
      'Legal status by state, a succession plan, setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, and the owner and vet logs',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Before You Commit',
        items: [
          'Quick Profile & Cost Overview',
          'Is a Cockatoo Right for You? The Honest Test',
          'Which Cockatoo: Size, Price, Noise & Temperament',
        ],
      },
      {
        label: 'Housing & Environment',
        items: [
          'Cage Size, Bar Gauge, Locks & Placement',
          'Perches, Play Stands & Out-of-Cage Space',
          'Light, Sleep & the 10 to 12 Hour Rule',
          'Feather Dust, Air Quality & Your Own Lungs',
          'Household Hazards & Bird-Proofing',
        ],
      },
      {
        label: 'Diet',
        items: [
          'Diet: Pellets, Seed & Converting a Seed Eater',
          'Safe Vegetables, Greens & Fruit',
          'Nuts, Treats & the Never-Feed List',
          'Foraging: Filling the Gap a Bowl Leaves',
        ],
      },
      {
        label: 'Behavior & Handling',
        items: [
          'Training, and Why It Comes First',
          'Handling, Step-Up, Bites & Sexual Maturity',
          'Over-Bonding, Separation Anxiety & Independence',
          'Screaming, Noise & the Household Reality',
          'Wing Clipping & Flight',
          'Sexing, Weight & Body Condition',
          'Hens, Hormones & Chronic Egg Laying',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Feather-Destructive Behavior, Molt & the Differential',
          'Beak & Feather Disease & Other Viruses',
          'Obesity, Lipomas & Fatty Liver',
          'Psittacosis, Respiratory Disease, Metals & Injuries',
          'Reading Droppings & Hydration',
          'Quarantine & Adding a Second Bird',
        ],
      },
      {
        label: 'The Long View',
        items: ['Legal Status, the Wildlife Trade Treaty & State Rules', 'The Sixty-Year Bird: Succession & Rehoming'],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days Checklist',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Glossary, Continued', 'Glossary, Continued', 'Sources & Further Reading', 'Sources, Continued', 'Where the Sources Disagree, Version History & About'],
      },
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
    pages: 39,
    version: '1.0',
    versionDate: '2026-10-01',
    samplePages: 4,
    cover: '/assets/guides/whites-tree-frog.jpg',
    blurb: 'Complete 39-page printable guide with the vertical enclosure, a humidity cycle that dips instead of sitting high, the water that is safe to mist with, feeding by size and age, the ridge test that catches obesity early, and seven health pages.',
    seoDescription: "39-page printable White's tree frog guide: the vertical enclosure, a humidity cycle that dips, safe misting water, and the ridge test that catches obesity.",
    bullets: [
      'The vertical enclosure and where it goes, the temperature gradient, the humidity cycle, safe misting water, UVB (ultraviolet B) light, substrate and plants, and cleaning without soap in one guide',
      'Feeding by size and age, feeders and supplements, the ridge test, handling with plain water, size-matched groups and sexing, choosing a frog and quarantine, and seven health pages from obesity and chytrid to red-leg and metabolic bone disease',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, outage and travel plan, pet-sitter sheet, and the owner and vet logs',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Housing & Environment',
        items: [
          'The Vertical Enclosure & Where It Goes',
          'The Temperature Gradient & Heating',
          'The Humidity Cycle That Dips',
          'The Water That Is Safe to Mist With',
          'Ultraviolet (UVB) Light & the Day Length',
          'Substrate, Plants & Furnishings',
          'Cleaning Without Soap, and Household Chemicals',
        ],
      },
      {
        label: 'Feeding',
        items: [
          'Feeding by Size & Age',
          'Feeder Insects, Treats & Supplements',
          'Body Condition: Reading the Tympanum Ridges',
        ],
      },
      {
        label: 'Handling, Company & Behavior',
        items: [
          'Handling With Plain Water & No Soap',
          'Group Housing by Size, Sexing & Breeding',
          'Choosing a Frog, Quarantine & the Law',
          'Common Mistakes & Enrichment',
          'Shedding, Color, Calling & Normal Behavior',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & Finding a Vet',
          'Obesity, Fatty Eyes & Fatty Liver',
          'Chytridiomycosis',
          'Red-Leg Syndrome & Bacterial Infection',
          'Metabolic Bone Disease & Vitamin A',
          'Skin Injuries, Chemical Exposure & Dehydration',
          'Impaction, Parasites & Shedding Problems',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Heat Waves, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources', 'Where the Sources Disagree, Version History & About'],
      },
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
    pages: 44,
    version: '1.0',
    versionDate: '2026-10-02',
    samplePages: 5,
    cover: '/assets/guides/hognose-snake.jpg',
    blurb: 'Complete 44-page printable guide to the western hognose with the enclosure sized by sex, dry air at 30 to 50% humidity, prey by gram weight fed in a separate container, the venom question answered from the bite research, a state-by-state legal summary, and seven health pages.',
    seoDescription: '44-page printable western hognose guide: the dry setup, prey by gram weight, the venom question from the bite research, and a state-by-state legal summary.',
    bullets: [
      'The enclosure sized by sex, the temperature gradient, every heat source on a thermostat, dry air and the one humid hide, optional UVB (ultraviolet B) light, and deep digging substrate on the cool end in one guide',
      'Prey by gram weight, frozen-thawed and fed in a separate container, the refusing hognose, the hood and the death act, the venom question, a state-by-state legal summary, and seven health pages from respiratory infection and scale rot to the winter slowdown',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, outage and travel plan, pet-sitter sheet, and the owner, equipment, quarantine and vet logs',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview', 'Which Hognose This Is, Size & Lifespan'],
      },
      {
        label: 'Housing & Environment',
        items: [
          'The Enclosure, Sized by Sex & Age',
          'The Temperature Gradient',
          'Heat Sources, Thermostats & Probes',
          'Dry Air, the Humid Hide & Ultraviolet Light',
          'Deep Bedding, Digging & Cleaning',
        ],
      },
      {
        label: 'Feeding',
        items: [
          'Prey Size & Feeding Schedule',
          'Frozen Prey: Thawing, Storage & Where to Feed',
          'The Refusing Hognose',
        ],
      },
      {
        label: 'Behavior & Handling',
        items: [
          'Hooding, Hissing & Playing Dead',
          'The Venom Question & Bites',
          'Handling & Hygiene',
          'Enrichment & Common Mistakes',
        ],
      },
      {
        label: 'Arrival & Life Stages',
        items: [
          'Choosing a Hognose, Quarantine & the First Vet Visit',
          'Telling the Sex, Weight & Body Condition',
          'Females, Eggs & Eggs That Get Stuck',
        ],
      },
      {
        label: 'The Law',
        items: [
          'Is a Hognose Legal Where You Live?',
          'States With Conditions',
          'States Where It Is Legal',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & Finding a Vet',
          'Respiratory & Belly-Scale Infections',
          'Blockages, Regurgitated Meals & Obesity',
          'Mites & Internal Parasites',
          'Shedding, Mouth Infections, Burns & Tissue at the Vent',
          'The Winter Slowdown',
          'Reading Droppings & Hydration',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment, Quarantine & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary, A to H', 'Glossary, H to Z', 'Sources', 'Where the Sources Disagree, Version History & About'],
      },
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
    pages: 41,
    version: '1.0',
    versionDate: '2026-10-02',
    samplePages: 4,
    cover: '/assets/guides/gargoyle-gecko.jpg',
    blurb: 'Complete 41-page printable guide with the tall, cluttered enclosure, a gentle warm spot under an 86°F ceiling, a humidity cycle that dries out every day, powder and insects by age, the tail that grows back, and six health pages.',
    seoDescription: '41-page printable gargoyle gecko guide: the 86°F ceiling, a humidity cycle that dries out daily, powder plus insects by age, and floppy tail prevention.',
    bullets: [
      'The tall enclosure and where it goes, the gradient and the 86°F ceiling, the daily humidity cycle, UVB (ultraviolet B) light, substrate and clutter, and cleaning and hygiene in one guide',
      'Powder and insects by age, feeders and supplements, the never-feed list, weight in grams, handling and the tail that grows back, sexing and eggs, quarantine, and six health pages from metabolic bone disease and floppy tail to stuck shed and respiratory infection',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, heat wave and outage plan, pet-sitter sheet, and the owner and equipment logs',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview'],
      },
      {
        label: 'Housing & Environment',
        items: [
          'The Vertical Enclosure & Where It Goes',
          'The Gradient & the 86°F Ceiling',
          'The Humidity Cycle, Misting & Airflow',
          'UVB (Ultraviolet B) Light & the Day Length',
          'Substrate, Clutter & Furnishings',
          'Cleaning & Hygiene',
        ],
      },
      {
        label: 'Feeding',
        items: [
          'Diet & Feeding by Age',
          'Complete Diet Powder: Mixing & Rotation',
          'Feeder Insects & Supplements',
          'Treats, the Never-Feed List & Appetite',
          'Weight, Growth & Body Condition',
        ],
      },
      {
        label: 'Handling, Behavior & Breeding',
        items: [
          'Handling, the Bite & the Tail',
          'Sexing, Single Housing & Pairs',
          'Females, Eggs & Egg Binding',
          'Choosing a Gecko, Quarantine & the Law',
          'Common Mistakes & Enrichment',
          'Shedding, Seasonal Slowdown & Behavior',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & Finding a Vet',
          'Metabolic Bone Disease',
          'Floppy Tail Syndrome & Tail Loss',
          'Stuck Shed, Toe Loss & Respiratory Infection',
          'Overheating, Dehydration & Reading Droppings',
          'Parasites, Blockages, Mouth Rot & More',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Heat Waves, Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary, A to H', 'Glossary, I to Z', 'Sources', 'Where the Sources Disagree, Version History & About'],
      },
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
    pages: 42,
    version: '1.0',
    versionDate: '2026-10-02',
    samplePages: 5,
    cover: '/assets/guides/african-fat-tail.jpg',
    blurb: 'Complete 42-page printable guide with every way it differs from a leopard gecko, belly heat on a thermostat, a 50 to 70% enclosure with a humid hide at 70 to 80%, a soil mix it can burrow in, feeding by age, and seven health pages.',
    seoDescription: '42-page printable African fat-tailed gecko guide: how it differs from a leopard gecko, belly heat, the humid hide that stops stuck shed, and feeding by age.',
    bullets: [
      'Every way it differs from a leopard gecko, the floor-space enclosure, belly heat on a thermostat with the probe in the right place, humidity and the three hides, a substrate for a burrower, and the light cycle with optional UVB (ultraviolet B) in one guide',
      'Five feeding pages from hatchling portions to the never-feed list, handling a calm gecko, sexing and the tail as the body condition gauge, females and the laying box, choosing a gecko and quarantine, and seven health pages from retained shed to egg binding',
      'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom quick reference, outage and travel plan, pet-sitter sheet, and the owner, equipment and vet logs',
    ],
    contents: [
      {
        label: 'Getting Started',
        items: ['How to Use This Package'],
      },
      {
        label: 'Quick Profile',
        items: ['Quick Profile & Cost Overview', 'Fat-Tail or Leopard Gecko? The Differences'],
      },
      {
        label: 'Housing & Environment',
        items: [
          'A Floor-Space Enclosure & Where It Goes',
          'Belly Heat, the Thermostat & the Probe',
          'Humidity & the Three Hides',
          'Substrate for a Burrower & Furnishings',
          'Light Cycle & UVB (Ultraviolet B) Light',
        ],
      },
      {
        label: 'Feeding',
        items: [
          'What African Fat-Tailed Geckos Eat',
          'Feeding Schedule by Age & How Much',
          'Feeder Insects: Staples, Treats & Never',
          'Gut-Loading & Calcium Dusting',
          'Why It Stops Eating & When to Worry',
        ],
      },
      {
        label: 'Handling, Females & Behavior',
        items: [
          'Handling a Calm Gecko',
          'Sexing, Weight & Body Condition',
          'Females, Eggs & the Laying Box',
          'Choosing a Gecko, Quarantine & the Law',
          'Common Mistakes & Enrichment',
          'Shedding, Seasons, Sounds & Behavior',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & Finding a Vet',
          'Retained Shed & Eye Problems',
          'Metabolic Bone Disease & Vitamin Problems',
          'Impaction & Respiratory Infection',
          'Egg Binding, Prolapse & Male Problems',
          'Parasites, Mouth Rot, Tail Loss & Burns',
          'Reading Poop & Hydration',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Targets', 'Emergency & Quick Targets Card'],
      },
      {
        label: 'Owner Tools',
        items: [
          'Budget & Shopping List',
          'First 30 Days',
          'Symptom Quick Reference',
          'Daily, Weekly & Seasonal Routine',
          'Power Outages, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment, Supplement & Vet Log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary, A to I', 'Glossary, M to Z', 'Sources', 'Where the Sources Disagree, Version History & About'],
      },
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
