// The printable PDF care packages. Kept manually in sync with wherever each
// one sells (same pattern as affiliateProducts.js for gear) - re-check
// price/page-count/cover URL here if anything changes at the seller.
//
// status: 'live' has a real Gumroad product (image + gumroadUrl set) and shows
// in the buyable grid. status: 'coming-soon' has neither yet - it renders in
// the teaser row with `cover` (the guide hero under public/assets/guides) in
// place of the Gumroad cover art. Flip to 'live' and fill in image/gumroadUrl
// once the Gumroad listing is actually published, matching the pattern below.
//
// pages and version on a coming-soon entry describe the current build in
// content/CAREPACKAGE Guides/rebuilt, which is what will be listed. On a live
// entry they describe the edition a buyer receives today, which can lag the
// current build until the listing is refreshed.
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
    storefront: 'gumroad',
    price: '$8.99',
    pages: 22,
    version: '2.0',
    image: 'https://public-files.gumroad.com/8z1vvv1brh27j8fn12mt5s4izm0z',
    thumbnail: 'https://public-files.gumroad.com/9ws8etux5l8qfmyh2sr8dut7ijx6',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/beardeddragoncarepackage',
    blurb: 'Complete 22-page printable guide with temperature targets, diet ratios by age, health triage, an owner log, and enrichment checklists.',
    bullets: [
      'Housing, heat and UVB, substrate, handling, diet, and enrichment in one guide',
      'Health section with red flags, metabolic bone disease and impaction, respiratory infection and yellow fungus, and brumation, stuck shed, and glass surfing guidance',
      'Shopping list, first 30 days checklist, owner log, and a daily and weekly routine',
    ],
  },
  {
    id: 'leopard-gecko',
    animal: 'Leopard Gecko',
    name: 'Leopard Gecko Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 22,
    version: '1.0',
    image: 'https://public-files.gumroad.com/j6l5pdwxluup1tlalmbc88e6mqrx',
    thumbnail: 'https://public-files.gumroad.com/tybf6l6ifh28suw17ffp9grc9hvc',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/leopardgeckocarepackage',
    blurb: 'Complete 22-page printable guide with belly-heat setup, the three-hide humidity system, insect-only feeding by age, and health triage.',
    bullets: [
      'Housing, belly heat and the three-hide humidity system, optional UVB, diet by age, handling, and enrichment in one guide',
      'Health section with red flags, cryptosporidiosis, metabolic bone disease and impaction, and shedding, tail loss, egg binding, and prolapse guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily, weekly, and seasonal routine',
    ],
  },
  {
    id: 'goldfish',
    animal: 'Goldfish',
    name: 'Goldfish Care Package',
    badge: 'Fish',
    emoji: '🐟',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 21,
    version: '1.0',
    image: 'https://public-files.gumroad.com/2icuul18qkr60te6v8e1jzqi3vvm',
    thumbnail: 'https://public-files.gumroad.com/argmi0d5wsmwqbxpdw62dxnds5lc',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/goldfishcarepackage',
    blurb: 'Complete 21-page printable guide with tank size, filtration turnover, water quality targets, swim bladder notes, and daily and weekly maintenance routines.',
    bullets: [
      'Tank size, filtration and cycling, water quality, diet, and common mistakes',
      'Red flags, swim bladder disease, ich and fin rot, cycling failure and dropsy, and handling and slime-coat stress guidance',
      'Water quality targets, shopping list, and a daily and weekly routine',
    ],
  },
  {
    id: 'axolotl',
    animal: 'Axolotl',
    name: 'Axolotl Care Package',
    badge: 'Amphibian',
    emoji: '🦎',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 20,
    version: '1.0',
    image: 'https://public-files.gumroad.com/6zba9255p5yhte5abvd08avjulcv',
    thumbnail: 'https://public-files.gumroad.com/9a7uvtx8g31j8hg6b7rg2vo5hm5y',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/axolotlcarepackage',
    blurb: 'Complete 20-page printable guide with cold-water temps, filtration, health triage, enrichment, and owner checklists.',
    bullets: [
      'Tank size, water temperature and quality, filtration, substrate, diet, handling, and enrichment in one guide',
      'Health section with red flags, fungal infection, impaction, and heat-stress guidance',
      'Shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
  },
  {
    id: 'budgie',
    animal: 'Budgie',
    name: 'Budgie Care Package',
    badge: 'Bird',
    emoji: '🐦',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 20,
    version: '1.0',
    image: 'https://public-files.gumroad.com/m7ggu288hajb3rfxo87uzmpr45xz',
    thumbnail: 'https://public-files.gumroad.com/x2s9l37sjyg3l8rz916xcx8esgaa',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/budgiecarepackage',
    blurb: 'Complete 20-page printable guide with cage setup, diet ratios, health triage, enrichment, and owner checklists.',
    bullets: [
      'Cage size, bar spacing, diet ratios, handling, and enrichment in one guide',
      'Health section with red flags, fatty liver and scaly face mites, and respiratory disease and egg binding guidance',
      'Shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
  },
  {
    id: 'crested-gecko',
    animal: 'Crested Gecko',
    name: 'Crested Gecko Care Package',
    badge: 'Reptile',
    emoji: '🦎',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 21,
    version: '1.0',
    image: 'https://public-files.gumroad.com/vv8vahkgez2zvg8bq2roehqhmwkq',
    thumbnail: 'https://public-files.gumroad.com/8xkdq3iw5r3h7fqod023nyjy2vrj',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/crestedgeckocarepackage',
    blurb: 'Complete 21-page printable guide with humidity cycling, CGD feeding, health triage, enrichment, and owner checklists.',
    bullets: [
      'Housing, temperature and humidity cycling, substrate, handling, diet, and enrichment in one guide',
      'Health section with red flags, stuck shed and metabolic bone disease, and floppy tail syndrome, impaction, and tail loss guidance',
      'Shopping list, first 30 days checklist, symptom table, and a daily and weekly routine',
    ],
  },
  {
    id: 'guinea-pig',
    animal: 'Guinea Pig',
    name: 'Guinea Pig Care Package',
    badge: 'Mammal',
    emoji: '🐹',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 22,
    version: '1.0',
    image: 'https://public-files.gumroad.com/q7ktcgzkfrj13zgu1p9e56q757i5',
    thumbnail: 'https://public-files.gumroad.com/59ii344dycv65lha734so9mcfzgr',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/guineapigcarepackage',
    blurb: 'Complete 22-page printable guide with housing space, vitamin C targets, diet ratios, health triage, and owner checklists.',
    bullets: [
      'Housing, temperature, substrate, handling, diet, and enrichment in one guide',
      'Health section with red flags, vitamin C deficiency and dental disease, GI stasis and respiratory infection, and bladder stones and ovarian cyst guidance',
      'Budget tiers, shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
  },
  {
    id: 'lovebird',
    animal: 'Lovebird',
    name: 'Lovebird Care Package',
    badge: 'Bird',
    emoji: '❤️',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 21,
    version: '1.0',
    image: 'https://public-files.gumroad.com/4wkkh3y7p00uqewtojfjxmv0j91s',
    thumbnail: 'https://public-files.gumroad.com/jkkxrzyi49dldkfkjwao2k2jcykz',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/lovebirdcarepackage',
    blurb: 'Complete 21-page printable guide with cage sizing, bar spacing, diet ratios, single-vs-pair guidance, and owner checklists.',
    bullets: [
      'Housing, bar spacing, diet, handling, and enrichment in one guide',
      'Health section with red flags, chronic egg-laying and egg binding, PBFD and respiratory disease, and feather plucking and behavioral health guidance',
      'Budget tiers, shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
  },
  {
    id: 'russian-tortoise',
    animal: 'Russian Tortoise',
    name: 'Russian Tortoise Care Package',
    badge: 'Reptile',
    emoji: '🐢',
    status: 'live',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 21,
    version: '1.0',
    image: 'https://public-files.gumroad.com/1gh7for81hcwsfl7gx1n2hnyi8d7',
    thumbnail: 'https://public-files.gumroad.com/o992usdmn5u75b1xeegohxnti3n7',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/russiantortoisecarepackage',
    blurb: 'Complete 21-page printable guide with housing, heat and UVB targets, diet, brumation guidance, health triage, and owner checklists.',
    bullets: [
      'Housing, temperature/UVB, substrate, diet, brumation and seasonal care, handling, and enrichment in one guide',
      'Health section with red flags, metabolic bone disease and pyramiding, and respiratory infection, shell rot, and parasite guidance',
      'Shopping list, first 30 days checklist, symptom reference, and a daily and weekly routine',
    ],
  },
  {
    id: 'ball-python',
    animal: 'Ball Python',
    name: 'Ball Python Care Package',
    badge: 'Reptile',
    emoji: '🐍',
    status: 'coming-soon',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 35,
    version: '2.2',
    cover: '/assets/guides/ball-python.jpg',
    blurb: 'Complete 34-page printable guide with thermostat and probe placement, the humidity range that decides everything, a full prey chart, health triage, and printable owner tools.',
    bullets: [
      'Housing, temperature and humidity, substrate, handling, feeding by age, and enrichment in one guide',
      'Health section with red flags, respiratory infection and scale rot, mouth rot, mites and thermal burns, and stuck shed, feeding refusal and regurgitation guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
  },
  {
    id: 'betta-fish',
    animal: 'Betta Fish',
    name: 'Betta Fish Care Package',
    badge: 'Fish',
    emoji: '🐠',
    status: 'coming-soon',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 37,
    version: '2.2',
    cover: '/assets/guides/betta-fish.jpg',
    blurb: 'Complete 36-page printable guide with tank and heater targets, the water numbers that actually matter, a full fishless cycling walkthrough, health triage, and owner checklists.',
    bullets: [
      'Tank, heater and filter, water parameters, cycling and water changes, diet, and enrichment in one guide',
      'Health section with red flags, fin rot, ich and velvet, swim bladder, dropsy and columnaris, and stress, aggression and tankmate guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
  },
  {
    id: 'hamster',
    animal: 'Hamster',
    name: 'Hamster Care Package',
    badge: 'Mammal',
    emoji: '🐹',
    status: 'coming-soon',
    // Off sale again, deliberately. The Stripe storefront was proved end to end
    // on this package in the Sandbox (see docs/STOREFRONT.md), and 'gumroad'
    // here is what takes the buy button off the card, drops the product page,
    // and removes it from the prerender list and the sitemap. Nothing else is
    // torn down: the Sandbox price, the edition date and the contents list all
    // stay, so switching this one word back to 'stripe' puts it on sale again
    // with no other change.
    //
    // Do NOT flip it back before the product page is rebuilt in the landing
    // page style, see the phase 2 section of docs/STOREFRONT.md. The page it
    // would sell through today is the plain one, not the one the nine Gumroad
    // listings set the bar at.
    storefront: 'gumroad',
    stripePriceIdSandbox: 'price_1UC9Up9qtY3Ob6vac8xRLEu2',
    price: '$8.99',
    pages: 37,
    version: '2.2',
    versionDate: '2026-09-05',
    cover: '/assets/guides/hamster.jpg',
    blurb: 'Complete 37-page printable guide with the floor space and bedding depth the starter kit gets wrong, species differences, wet tail triage, and owner checklists.',
    bullets: [
      'Enclosure size and bedding depth, the wheel and sand bath, species differences and handling, diet, and enrichment in one guide',
      'Health section with red flags, wet tail, dental disease, tumors and respiratory infection, and diabetes, torpor and cheek pouch impaction guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
    // The package's own contents page, section by section, for the "what is
    // inside" block on the product page. This is the page a buyer would have
    // seen on the Gumroad listing, so it is transcribed from the real table of
    // contents in content/CAREPACKAGE Guides/source/hamster.html rather than
    // written fresh. Re-transcribe it if the package is rebuilt.
    contents: [
      {
        label: 'Getting started',
        items: ['How to use this package'],
      },
      {
        label: 'Quick profile',
        items: ['Quick profile', 'Cost overview'],
      },
      {
        label: 'Full care guide',
        items: [
          'Enclosure size and the starter-kit problem',
          'Bedding depth, and the study behind it',
          'The wheel, the sand bath and the rest',
          'Temperature, torpor and lighting',
          'Choosing a hamster, and where from',
          'Diet and the schedule disagreement',
          'Portions, scattering and weaning',
          'Food chart and the never-feed list',
          'Why a hamster stops eating',
          'Handling: getting it right',
          'The first week and common mistakes',
          'Enrichment: what the research says',
        ],
      },
      {
        label: 'Health and common issues',
        items: [
          'Health red flags and the exotic vet',
          'Wet tail',
          'Overgrown incisors and tumors',
          'Respiratory infection and diabetes',
          'Torpor, and telling it from death',
          'Lifespan, ageing and the end',
          'Where hamsters are not legal',
        ],
      },
      {
        label: 'Quick reference',
        items: ['Setup checklist and targets', 'Emergency and quick targets card'],
      },
      {
        label: 'Owner tools',
        items: [
          'Budget and shopping list',
          'First 30 days checklist',
          'Symptom quick reference',
          'Daily, weekly and seasonal routine',
          'Power outages, travel and transport',
          'Pet-sitter sheet',
          'Owner log',
          'Equipment, cleaning and vet log',
        ],
      },
      {
        label: 'Reference',
        items: ['Glossary', 'Sources and further reading', 'Version history and about'],
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
    storefront: 'gumroad',
    price: '$8.99',
    pages: 40,
    version: '2.1',
    cover: '/assets/guides/rabbit.jpg',
    blurb: 'Complete 39-page printable guide with the real space standard, unlimited hay and why it is the whole diet, three pages on GI stasis, bonding a pair, and owner checklists.',
    bullets: [
      'Housing and space, flooring and litter training, handling, diet by life stage, and enrichment in one guide',
      'Health section with red flags, GI stasis, dental disease and flystrike, and snuffles, uterine cancer, E. cuniculi and sore hocks guidance',
      'Setup checklist, budget and shopping list, first 30 days checklist, symptom quick reference, owner log, and a daily and weekly routine',
    ],
  },
  {
    id: 'tarantula',
    animal: 'Tarantula',
    name: 'Tarantula Care Package',
    badge: 'Invertebrate',
    emoji: '🕷️',
    status: 'coming-soon',
    storefront: 'gumroad',
    price: '$8.99',
    pages: 44,
    version: '2.2',
    cover: '/assets/guides/tarantula.jpg',
    blurb: 'Complete 43-page printable guide with why the enclosure is low and wide, substrate depth by species type, the fasting that is normal, the dehydration that is not, molting start to finish, and a safe rehousing method.',
    bullets: [
      'Enclosure shape and substrate, humidity and ventilation, why handling is off the table, feeding by life stage, and enrichment in one guide',
      'Health section with red flags, dehydration, molting start to finish, and falls, mites, oral nematodes and DKS guidance',
      'Setup checklist, budget and shopping list, first 90 days checklist, symptom quick reference, molt and feeding logs, and a routine',
    ],
  },
];
