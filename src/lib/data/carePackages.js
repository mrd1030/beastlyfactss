// The printable PDF care packages. Kept manually in sync with wherever each
// one sells (same pattern as affiliateProducts.js for gear) - re-check
// price/page-count/cover URL here if anything changes at the seller.
//
// status: 'live' has a real Gumroad product (gumroadUrl set) and shows in the
// buyable grid. status: 'coming-soon' renders in the teaser row. Both use
// `cover`, the guide hero under public/assets/guides, as the card and product
// page art; nothing is loaded from Gumroad's CDN any more.
//
// pages, version and versionDate describe the current build in
// content/CAREPACKAGE Guides/rebuilt, rendered from the source HTML of the same
// version. For a package sold here that is also the edition in the bucket, so
// re-upload the PDF whenever these change. The Gumroad listings still carry the
// first editions and are refreshed separately.
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
    pages: 35,
    version: '3.1',
    versionDate: '2026-09-05',
    samplePages: 4,
    cover: '/assets/guides/bearded-dragon.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/beardeddragoncarepackage',
    blurb: 'Complete 35-page printable guide with temperature targets, diet ratios by age, health triage, an owner log, and enrichment checklists.',
    bullets: [
      'Housing, heat and UVB, substrate, handling, diet, and enrichment in one guide',
      'Health section with red flags, metabolic bone disease and impaction, respiratory infection and yellow fungus, and brumation, stuck shed, and glass surfing guidance',
      'Shopping list, first 30 days checklist, owner log, and a daily and weekly routine',
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
          'Housing & Enclosure',
          'Temperature, UVB & Humidity',
          'Thermostats, Timers & UVB Distance',
          'Substrate, Furnishings & Handling',
          'Diet & Feeding by Age',
          'Feeder Insects: Staples, Treats & Never',
          'Safe Greens & Vegetables',
          'Fruit, Extras & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Sexing, Growth & Body Condition',
          'Females, Eggs & Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Metabolic Bone Disease & Impaction',
          'Respiratory Infection, ADV & Yellow Fungus',
          'Parasites, Mouth Rot, Tail Rot & Eye Problems',
          'Brumation, Stuck Shed & Glass Surfing',
          'Reading Poop & Keeping a Dragon Hydrated',
        ],
      },
      {
        label: 'Quick Reference',
        items: ['Setup Checklist & Temperature Targets', 'Emergency & Quick Targets Card'],
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
    id: 'leopard-gecko',
    animal: 'Leopard Gecko',
    name: 'Leopard Gecko Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'live',
    storefront: 'stripe',
    stripePriceId: 'price_1UENBs9qtY3Ob6vaOPtdFLAt',
    price: '$8.99',
    pages: 35,
    version: '2.1',
    versionDate: '2026-09-05',
    samplePages: 4,
    cover: '/assets/guides/leopard-gecko.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/leopardgeckocarepackage',
    blurb: 'Complete 35-page printable guide with belly-heat setup, the three-hide humidity system, insect-only feeding by age, and health triage.',
    bullets: [
      'Housing, belly heat and the three-hide humidity system, optional UVB, diet by age, handling, and enrichment in one guide',
      'Health section with red flags, cryptosporidiosis, metabolic bone disease and impaction, and shedding, tail loss, egg binding, and prolapse guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily, weekly, and seasonal routine',
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
          'Housing & Enclosure',
          'Temperature, Humidity & the Three Hides',
          'Thermostats, Probes & UVB Distance',
          'Substrate, Furnishings & Handling',
          'Diet & Feeding by Age',
          'Feeder Insects: Staples, Treats & Never',
          'Gut-Loading: What to Feed the Feeders',
          'Treats, Refusals & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Sexing, Growth & Body Condition',
          'Females, Eggs & Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Stick Tail Disease & Metabolic Bone Disease',
          'Impaction, Stuck Shed & Respiratory Infection',
          'Parasites, Eye Caps, Tail Loss & Other Problems',
          'Shedding, Brumation & Behavior',
          'Reading Poop & Keeping a Gecko Hydrated',
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
          'Equipment, Supplement & Vet Log',
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
    pages: 34,
    version: '2.1',
    versionDate: '2026-09-06',
    samplePages: 4,
    cover: '/assets/guides/crested-gecko.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/crestedgeckocarepackage',
    blurb: 'Complete 34-page printable guide with humidity cycling, CGD feeding, health triage, enrichment, and owner checklists.',
    bullets: [
      'Housing, temperature and humidity cycling, substrate, handling, diet, and enrichment in one guide',
      'Health section with red flags, stuck shed and metabolic bone disease, and floppy tail syndrome, impaction, and tail loss guidance',
      'Shopping list, first 30 days checklist, symptom table, and a daily and weekly routine',
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
          'Housing & Enclosure',
          'Temperature, Humidity & the 85°F Ceiling',
          'Misting, Ventilation & Lighting',
          'Substrate, Furnishings & Handling',
          'Diet & Feeding by Age',
          'Complete Diet Powder: Mixing, Portions & Rotation',
          'Feeder Insects: Staples, Treats & Never',
          'Fruit, Extras & the Never-Feed List',
          'Common Mistakes & Enrichment',
          'Sexing, Growth & Body Condition',
          'Females, Eggs & Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Metabolic Bone Disease & Floppy Tail Syndrome',
          'Impaction, Stuck Shed & Respiratory Infection',
          'Parasites, Dehydration, Tail Loss & Overheating',
          'Shedding, Seasonal Slowdown & Behavior',
          'Reading Poop & Keeping a Gecko Hydrated',
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
          'Outages, Heatwaves, Travel & Transport',
          'Pet-Sitter Sheet',
          'Owner Log',
          'Equipment, Supplement & Vet Log',
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
    pages: 38,
    version: '2.2',
    versionDate: '2026-09-06',
    samplePages: 4,
    cover: '/assets/guides/russian-tortoise.jpg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/russiantortoisecarepackage',
    blurb: 'Complete 38-page printable guide with housing, heat and UVB targets, diet, brumation guidance, health triage, and owner checklists.',
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
        items: ['Glossary', 'Sources', 'Where the Sources Disagree & Version History'],
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
    pages: 34,
    version: '2.2',
    versionDate: '2026-09-06',
    samplePages: 4,
    cover: '/assets/guides/ball-python.jpg',
    blurb: 'Complete 34-page printable guide with thermostat and probe placement, the humidity range that decides everything, a full prey chart, health triage, and printable owner tools.',
    bullets: [
      'Housing, temperature and humidity, substrate, handling, feeding by age, and enrichment in one guide',
      'Health section with red flags, respiratory infection and scale rot, mouth rot, mites and thermal burns, and stuck shed, feeding refusal and regurgitation guidance',
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
          'Housing & Enclosure',
          'Temperature, Humidity & Lighting',
          'Thermostats, Probes & Heat Sources',
          'Substrate & Furnishings',
          'Handling & First Days',
          'Diet & Feeding by Age',
          'Prey Chart & the Never-Feed List',
          'Thawing, Presentation & Refusals',
          'Common Mistakes & Enrichment',
          'Sexing, Growth & Body Condition',
          'Females, Eggs & Egg Binding',
        ],
      },
      {
        label: 'Health & Common Issues',
        items: [
          'Health Red Flags & What to Tell the Vet',
          'Respiratory Infection & Scale Rot',
          'Mouth Rot, Mites & Thermal Burns',
          'Parasites, Regurgitation, Obesity & IBD',
          'Shedding, Refusal & Defensive Behavior',
          'Reading Poop & Keeping a Ball Python Hydrated',
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
          'Equipment, Quarantine & Vet Log',
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
          'Lifespan, Ageing & the End',
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
  return `/assets/care-packages/${pkg.id}/cover.jpg`;
}
