// The printable PDF care packages sold on Gumroad. Kept manually in sync with
// the seller dashboard (same pattern as affiliateProducts.js for gear) -
// re-check price/page-count/cover URL here if anything changes on Gumroad.
export const CARE_PACKAGES = [
  {
    id: 'bearded-dragon',
    animal: 'Bearded Dragon',
    name: 'Bearded Dragon Care Package',
    badge: 'Reptile',
    price: '$8.99',
    pages: 20,
    image: 'https://public-files.gumroad.com/n809bew9fom3ys5uyd4s0etgi9oq',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/beardeddragoncarepackage',
    blurb: 'Complete 20-page printable guide with temps, diet ratios, health triage, enrichment, and owner checklists.',
    bullets: [
      'Housing, heat and UVB, substrate, handling, diet, and enrichment in one guide',
      'Health section with red flags, stuck shed, and glass surfing guidance',
      'Shopping list, first 30 days checklist, and a daily and weekly routine',
    ],
  },
  {
    id: 'leopard-gecko',
    animal: 'Leopard Gecko',
    name: 'Leopard Gecko Care Package',
    badge: 'Reptile',
    price: '$8.99',
    pages: 17,
    image: 'https://public-files.gumroad.com/n7nuagfjubnwmqae2xin5q5yacxh',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/leopardgeckocarepackage',
    blurb: 'Complete 17-page printable guide with belly heat standards, moist hide setup, feeding by age, and stuck shed guidance.',
    bullets: [
      'Belly heat, humidity, substrate, handling, and diet by age',
      'MBD overview, stuck shed, and impaction guidance',
      'Setup checklist, temperature targets, and a daily and weekly routine',
    ],
  },
  {
    id: 'goldfish',
    animal: 'Goldfish',
    name: 'Goldfish Care Package',
    badge: 'Fish',
    price: '$8.99',
    pages: 16,
    image: 'https://public-files.gumroad.com/7efj98l6jaewr6u92xdop8tj9kjg',
    gumroadUrl: 'https://beastlyfacts.gumroad.com/l/goldfishcarepackage',
    blurb: 'Complete 16-page printable guide with tank volume, filtration, water targets, swim bladder notes, and maintenance routines.',
    bullets: [
      'Tank size, filtration, water quality, diet, and common mistakes',
      'Red flag symptoms, swim bladder notes, and disease guidance',
      'Water quality targets, shopping list, and a daily and weekly routine',
    ],
  },
];
