// The master price list. Every priced line in a cost guide table comes from
// here, through that animal's sheet in costSheets.js, so one price lives in
// one place: change it here and every table that uses the item, every total
// it feeds, and every title, FAQ, hub line or overview quoting that total
// changes on the next build.
//
// One entry per item at one spec. A 22 inch and a 36 inch UVB kit are two
// items; so are a dimming and an on/off thermostat. The id says the spec.
//
//   label    what the item is, in plain words (the table row's default text)
//   spec     the size, wattage or capacity that defines it, or ""
//   low/high whole dollars, already rounded outward to $5 (owner rule); a
//            single figure is low === high and prints as "about $X"
//   product  the affiliateProducts.js slug that strictly matches, or null
//   checked  the month the price was last checked (record only, never shown)
//
// scripts/check-cost-tables.mjs fails the build on an unknown product, a
// figure off the $5 grid, or an item no sheet uses.
export const COST_ITEMS = {
  'enclosure-60x30x48': {
    label: 'Enclosure at least 5 by 2.5 by 4 feet, custom or PVC',
    spec: '60 x 30 x 48 in',
    low: 475, high: 1475, product: null, checked: '2026-10',
  },
  'substrate-diy-topsoil-sand-60x30-deep': {
    label: 'Deep burrowing substrate, a DIY topsoil and play sand mix 12 to 24 inches deep',
    spec: '12 to 24 in over 5 x 2.5 ft',
    low: 120, high: 240, product: null, checked: '2026-10',
  },
  'uvb-t5ho-12pct-36in-kit': {
    label: 'Linear T5 HO 12% UVB fixture, 36 inch, tube included',
    spec: '36 in, 12%',
    low: 110, high: 130, product: 'arcadia-lumenize-prot5-36in-12pct', checked: '2026-10',
  },
  // $11.99 for the linked 2 pack (owner, 2026-10-06), rounded outward.
  'basking-bulb-100w-2pack': {
    label: 'Two 100 W basking bulbs',
    spec: '2 x 100 W, E26',
    low: 10, high: 15, product: 'basking-bulb-lucky-herp-100w-2pack', checked: '2026-10',
  },
  'basking-fixture-dome-150w': {
    label: 'Dome lamp rated for at least 100 W',
    spec: 'ceramic socket, rated to 150 W',
    low: 25, high: 40, product: 'high-wattage-basking-fixture', checked: '2026-10',
  },
  'thermostat-dimming': {
    label: 'Dimming thermostat',
    spec: 'dimming, PID',
    low: 25, high: 80, product: 'dimming-thermostat-pt02t', checked: '2026-10',
  },
  'retes-stack-slate': {
    label: 'Retes stack (basking shelves or tiles)',
    spec: '12 x 12 in slate, 6 pack',
    low: 50, high: 100, product: 'slate-tile-daltile-12x12-6pack', checked: '2026-10',
  },
  'hides-large-lizard': {
    label: 'Hides',
    spec: 'large lizard',
    low: 20, high: 40, product: null, checked: '2026-10',
  },
  'infrared-thermometer': {
    label: 'Infrared thermometer gun',
    spec: '',
    low: 15, high: 40, product: 'infrared-temp-gun', checked: '2026-10',
  },
  'calcium-plain-8oz': {
    label: 'First supply of plain calcium',
    spec: '8 oz, no D3, no phosphorus',
    low: 10, high: 15, product: 'calcium-zoo-med-without-d3', checked: '2026-10',
  },
  'multivitamin-vitamin-a-3oz': {
    label: 'First supply of a multivitamin with true vitamin A',
    spec: '3 oz, preformed vitamin A',
    low: 5, high: 15, product: 'vitamin-repashy-vitamin-a-plus', checked: '2026-10',
  },
  'kitchen-scale-grams': {
    label: 'Kitchen scale that reads in grams',
    spec: '1 g steps',
    low: 10, high: 15, product: 'gram-scale-etekcity-kitchen', checked: '2026-10',
  },
  'daylight-led-16in': {
    label: 'Bright daylight LED',
    spec: '16 in, 6500 K',
    low: 75, high: 85, product: 'grow-light-bio-dude-glow-grow-16in', checked: '2026-10',
  },
  'puzzle-feeder-reptile-extraction': {
    label: 'Extraction puzzle feeder',
    spec: '',
    low: 15, high: 25, product: 'reptile-extraction-puzzle-board', checked: '2026-10',
  },
  'clicker-target-stick': {
    label: 'Clicker and target stick',
    spec: '',
    low: 5, high: 15, product: 'target-stick-clicker', checked: '2026-10',
  },
  // Parrots. No cage in the catalog meets 36x24x48 with 3/4 to 1 in bars in
  // powder-coated steel (the stainless one is far above this range).
  'cage-parrot-36x24x48-bars-075-1in': {
    label: 'Cage at least 36 by 24 by 48 inches, bars 3/4 to 1 inch apart, powder-coated',
    spec: '36 x 24 x 48 in, 3/4 to 1 in bars',
    low: 250, high: 800, product: null, checked: '2026-10',
  },
  'perches-varied-large-parrot': {
    label: 'Natural wood, rope and cement perches in varied diameters',
    spec: 'large parrot',
    low: 10, high: 25, product: null, checked: '2026-10',
  },
  // PetSmart $64.99 regular; LLL Reptile, Arcata Pet and others $74.99 to $91.99.
  'uvb-avian-compact-kit': {
    label: 'Avian UVB lamp and fixture',
    spec: 'compact, 12 to 18 in from the perch',
    low: 60, high: 95, product: 'uvb-arcadia-puresun-compact-bird-kit', checked: '2026-10',
  },
  'foraging-toys-large-parrot-set': {
    label: 'Foraging toys built for a large parrot',
    spec: '5 piece set',
    low: 40, high: 50, product: 'cockatoo-foraging-toys-large-parrot', checked: '2026-10',
  },
  'dish-stainless-bolt-on-30oz': {
    label: 'Stainless bolt-on dish',
    spec: '30 oz',
    low: 15, high: 20, product: 'coop-cup-prevue-30oz-bolt-on', checked: '2026-10',
  },
  // PetSmart and Chewy, carriers sold for greys: $36.99 (A&E large) to $124.99
  // (Prevue Playtop); the catalog has none at this size.
  'carrier-medium-large-parrot': {
    label: 'Travel carrier sized for a grey',
    spec: 'medium to large parrot',
    low: 35, high: 125, product: null, checked: '2026-10',
  },
  'cage-cover-large': {
    label: 'Breathable cage cover for nighttime darkness',
    spec: 'flat-top cages up to about 37 x 25 x 48 in',
    low: 40, high: 40, product: 'cage-cover-prevue-good-night-large', checked: '2026-10',
  },
  'mist-bottle': {
    label: 'Fine mist spray bottle',
    spec: '',
    low: 5, high: 15, product: 'fine-mist-spray-bottle', checked: '2026-10',
  },
  'gram-scale-aviary-perch': {
    label: 'Gram scale with a perch',
    spec: '1 g steps, perch top',
    low: 30, high: 40, product: 'african-grey-parrot-digital-gram-scale', checked: '2026-10',
  },
  // PetSmart and Walmart $249.99, Tractor Supply $209.99 (Prevue 3180).
  'play-stand-large-parrot': {
    label: 'Large parrot play stand',
    spec: 'about 30 x 22 x 73 in, rolling',
    low: 205, high: 250, product: 'play-stand-prevue-large-parrot', checked: '2026-10',
  },
  'air-purifier-hepa-room': {
    label: 'HEPA air purifier',
    spec: 'rated for a large room',
    low: 90, high: 110, product: 'air-purifier-levoit-core300-p', checked: '2026-10',
  },
  // Small birds. The Prevue F040 flight cage is 31 x 20.5 in with 1/2 in bars:
  // it fits budgies, canaries, cockatiels and lovebirds, not finches (3/8 in)
  // or parrotlets (1/4 in).
  'cage-flight-24x18x18-half-inch': {
    label: "Wide flight cage, at least 24 by 18 by 18 inches, bars no wider than 1/2 inch",
    spec: "24 x 18 x 18 in, 1/2 in bars",
    low: 175, high: 300, product: "bird-cage-prevue-steel-flight-large", checked: '2026-10',
  },
  'perches-small-bird-varied': {
    label: "Wood perches in varied diameters, sized for a small bird",
    spec: "small bird",
    low: 10, high: 25, product: "bird-perches", checked: '2026-10',
  },
  'bath-bird-clip-on': {
    label: "Shallow clip-on bird bath",
    spec: "",
    low: 10, high: 20, product: "canary-shallow-bird-bath", checked: '2026-10',
  },
  'cuttlebone-small': {
    label: "Cuttlebone",
    spec: "5 in",
    low: 5, high: 5, product: "bird-cuttlebone-prevue-5in", checked: '2026-10',
  },
  'pellets-canary-first-bag': {
    label: "First bag of canary pellets",
    spec: "1.25 lb",
    low: 10, high: 20, product: "bird-food-lafebers-premium-canaries-1-25lb", checked: '2026-10',
  },
  // Amazon $13.64 for the 3 pack (2026-10-06).
  'egg-food-first-supply': {
    label: "First supply of egg food",
    spec: "3 x 5 oz",
    low: 10, high: 15, product: "egg-food-higgins-3pack", checked: '2026-10',
  },
  'carrier-small-bird': {
    label: "Small-bird travel carrier",
    spec: "soft-sided, with perch",
    low: 15, high: 20, product: "bird-travel-carrier-perch", checked: '2026-10',
  },
  // No catalog cage has bars this narrow; the Prevue F040 is 1/2 in.
  'cage-flight-24x14x18-3-8-inch': {
    label: "Long flight cage, at least 24 by 14 by 18 inches, bars no wider than 3/8 inch",
    spec: "24 x 14 x 18 in, 3/8 in bars",
    low: 175, high: 300, product: null, checked: '2026-10',
  },
  'dishes-clamp-on-small-bird': {
    label: "Clamp-on food and water dishes",
    spec: "4 pack",
    low: 10, high: 20, product: "bird-feeding-dishes-okllen-4pack", checked: '2026-10',
  },
  'cuttlebone-2pack': {
    label: "Cuttlebone or mineral block",
    spec: "2 pack",
    low: 5, high: 15, product: "bird-cuttlebone-penn-plax-2ct", checked: '2026-10',
  },
  'perches-small-bird-apple-wood': {
    label: "Natural wood perches in varied diameters, sized for a small bird",
    spec: "0.6 to 1 in, 8 piece",
    low: 10, high: 25, product: "bird-perch-czwestc-8pc-apple-wood", checked: '2026-10',
  },
  'toys-shreddable-small-bird': {
    label: "Foraging and shreddable toys for a small beak",
    spec: "2 pack",
    low: 10, high: 25, product: "bird-toy-bbjinronjy-sola-ball-2pc", checked: '2026-10',
  },
  'pellets-small-parrot-first-bag': {
    label: "First bag of small parrot pellets",
    spec: "44 oz",
    low: 15, high: 25, product: "bird-food-roudybush-daily-mini-44oz", checked: '2026-10',
  },
  'millet-spray-first': {
    label: "First spray millet, for taming rewards",
    spec: "7 oz",
    low: 5, high: 10, product: "bird-treat-kaytee-spray-millet-7oz", checked: '2026-10',
  },
  // No catalog cage has 1/4 in bars.
  'cage-small-parrot-18x18x24-quarter-inch': {
    label: "Cage at least 18 by 18 by 24 inches, bars 1/4 inch apart",
    spec: "18 x 18 x 24 in, 1/4 in bars",
    low: 175, high: 300, product: null, checked: '2026-10',
  },
  // The Prevue F040 is only 20.5 in deep, under a conure cage minimum.
  'cage-conure-24x24x30-half-to-5-8-inch': {
    label: "Cage at least 24 by 24 by 30 inches, bars 1/2 to 5/8 inch apart",
    spec: "24 x 24 x 30 in, 1/2 to 5/8 in bars",
    low: 100, high: 180, product: null, checked: '2026-10',
  },
  'perches-conure-varied': {
    label: "Perches of varied diameters: natural wood, rope and a grooming perch",
    spec: "conure",
    low: 20, high: 40, product: null, checked: '2026-10',
  },
  'toys-shreddable-conure': {
    label: "Foraging and shreddable toys",
    spec: "several",
    low: 30, high: 60, product: "bird-toy-bbjinronjy-sola-ball-2pc", checked: '2026-10',
  },
  // The catalog pouch is a sugar glider pouch, not a bird tent.
  'snuggle-tent-bird': {
    label: "Snuggle pouch or bird tent",
    spec: "",
    low: 10, high: 20, product: null, checked: '2026-10',
  },
  'budgie-wide-flight-style-cage': {
    label: "Wide flight-style cage: at least 18 by 18 by 18 in for one bird, about 30 by 18 by 18 for a pair, bars half an inch or less apart",
    spec: "",
    low: 100, high: 300, product: "bird-cage-prevue-steel-flight-large", checked: '2026-10',
  },
  'budgie-perches-varied-diameter-texture': {
    label: "Perches of varied diameter and texture",
    spec: "",
    low: 15, high: 25, product: "bird-perches", checked: '2026-10',
  },
  'budgie-foraging-toy-part-daily': {
    label: "A foraging toy for part of the daily ration",
    spec: "",
    low: 10, high: 25, product: "bird-toy-kyouki-foraging-box", checked: '2026-10',
  },
  'budgie-breathable-cage-cover-dark': {
    label: "Breathable cage cover for the dark hours",
    spec: "",
    low: 30, high: 55, product: "cage-cover-prevue-good-night-large", checked: '2026-10',
  },
  'budgie-small-nail-clippers': {
    label: "Small nail clippers",
    spec: "",
    low: 5, high: 15, product: "nail-clippers-pet-republique-small-animal", checked: '2026-10',
  },
  'budgie-styptic-powder': {
    label: "Styptic powder",
    spec: "",
    low: 5, high: 15, product: "styptic-powder-kwik-stop", checked: '2026-10',
  },
  'budgie-bag-budgie-pellets': {
    label: "First bag of budgie pellets",
    spec: "",
    low: 10, high: 20, product: "bird-food-zupreem-fruitblend-parakeet-2lb", checked: '2026-10',
  },
  'budgie-small-bag-budgie-seed': {
    label: "First small bag of budgie seed, for the daily teaspoon",
    spec: "",
    low: 5, high: 15, product: null, checked: '2026-10',
  },
  'cockatiel-wide-flight-style-cage': {
    label: "Wide flight-style cage at least 20 by 20 by 30 in, 24 by 24 by 30 in for easier movement, bars half an inch or less apart and running vertically",
    spec: "",
    low: 180, high: 290, product: "bird-cage-prevue-steel-flight-large", checked: '2026-10',
  },
  'cockatiel-night-light-bird-s': {
    label: "Night light for the bird's room, against night frights",
    spec: "",
    low: 10, high: 20, product: "nightlight-amber-plug-in", checked: '2026-10',
  },
  'cockatiel-nail-clippers-sized-small': {
    label: "Nail clippers sized for a small bird",
    spec: "",
    low: 5, high: 10, product: "nail-clippers-pet-republique-small-animal", checked: '2026-10',
  },
  'cockatiel-styptic-powder-made-birds': {
    label: "Styptic powder made for birds",
    spec: "",
    low: 5, high: 10, product: "styptic-powder-kwik-stop", checked: '2026-10',
  },
  'cockatiel-bag-cockatiel-pellets': {
    label: "First bag of cockatiel pellets",
    spec: "",
    low: 10, high: 20, product: "bird-food-zupreem-fruitblend-cockatiel-2lb", checked: '2026-10',
  },
  'lovebird-powder-coated-stainless-flight': {
    label: "Powder-coated or stainless flight-style cage: at least 18 by 18 by 24 in for one bird, 24 by 18 by 24 for a pair, bars 3/8 to 5/8 in apart",
    spec: "",
    low: 80, high: 240, product: "bird-cage-prevue-steel-flight-large", checked: '2026-10',
  },
  'lovebird-perches-varied-diameter-material': {
    label: "Perches of varied diameter and material, about 3/8 to 1/2 in across",
    spec: "",
    low: 20, high: 35, product: null, checked: '2026-10',
  },
  'lovebird-shreddable-chew-toys-soft': {
    label: "Shreddable and chew toys, soft wood included",
    spec: "",
    low: 20, high: 40, product: "bird-toy-bbjinronjy-sola-ball-2pc", checked: '2026-10',
  },
  'lovebird-plain-breathable-cage-cover': {
    label: "Plain breathable cage cover for the dark hours",
    spec: "",
    low: 25, high: 65, product: "cage-cover-prevue-good-night-large", checked: '2026-10',
  },
  'cockatoo-cage-36-24-48': {
    label: "Cage at least 36 by 24 by 48 in, heavy gauge, bars 3/4 in for Goffin's and galah and up to 1 in for the large species: heavy-gauge powder-coated steel at the low end, stainless steel at the high",
    spec: "",
    low: 850, high: 2200, product: "cockatoo-cage-stainless-steel-large", checked: '2026-10',
  },
  'cockatoo-padlocks-spring-clips-every': {
    label: "Padlocks or spring clips for every door and feeder hatch",
    spec: "",
    low: 15, high: 40, product: null, checked: '2026-10',
  },
  'cockatoo-play-stand-sized-large': {
    label: "A play stand sized for a large parrot",
    spec: "",
    low: 250, high: 250, product: "play-stand-prevue-large-parrot", checked: '2026-10',
  },
  'cockatoo-perches-3-4-2': {
    label: "Perches 3/4 to 2 in across, varied diameter and material",
    spec: "",
    low: 40, high: 100, product: "perch-yml-dragonwood-32in", checked: '2026-10',
  },
  'cockatoo-stainless-bolt-on-dishes': {
    label: "Stainless bolt-on dishes, one for food and one for water, and swing-out feeders",
    spec: "",
    low: 30, high: 70, product: "coop-cup-prevue-30oz-bolt-on", checked: '2026-10',
  },
  'cockatoo-destructible-foraging-toy-set': {
    label: "A destructible foraging toy set sized for a large beak",
    spec: "",
    low: 25, high: 90, product: "cockatoo-foraging-toys-large-parrot", checked: '2026-10',
  },
  'cockatoo-supply-palm-shredding': {
    label: "First supply of palm for shredding",
    spec: "",
    low: 5, high: 15, product: "shredder-planet-pleasures-zig-zag", checked: '2026-10',
  },
  'cockatoo-large-travel-carrier': {
    label: "Large travel carrier",
    spec: "",
    low: 80, high: 200, product: null, checked: '2026-10',
  },
  'cockatoo-styptic-powder-made-birds': {
    label: "Styptic powder made for birds, for the first aid kit",
    spec: "",
    low: 10, high: 10, product: "styptic-powder-kwik-stop", checked: '2026-10',
  },
  'cockatoo-bag-formulated-large-parrot': {
    label: "First bag of formulated large-parrot pellets",
    spec: "",
    low: 25, high: 100, product: "bird-food-lafebers-premium-parrots-25lb", checked: '2026-10',
  },
  // No catalog cage is deep enough: the Prevue F040 is 20.5 in deep, the
  // Prevue 5 ft wrought iron flight cage 23 in.
  'cage-quaker-24x24x36-half-to-5-8-inch': {
    label: "Cage at least 24 by 24 by 36 inches, heavy-gauge bars 1/2 to 5/8 inch apart",
    spec: "24 x 24 x 36 in, 1/2 to 5/8 in bars",
    low: 150, high: 300, product: null, checked: '2026-10',
  },
  'perches-quaker-natural-wood': {
    label: "Natural wood perches, three or four",
    spec: "manzanita or similar",
    low: 30, high: 70, product: null, checked: '2026-10',
  },
  'pellets-small-22oz': {
    label: "First bag of pellets",
    spec: "22 oz",
    low: 10, high: 15, product: "bird-food-roudybush-daily-small-22oz", checked: '2026-10',
  },
  'toys-quaker-starter': {
    label: "Foraging and shreddable toys, four or five to start",
    spec: "",
    low: 25, high: 75, product: null, checked: '2026-10',
  },
  'uv-index-meter': {
    label: 'UV index meter',
    spec: 'Solarmeter 6.5R',
    low: 240, high: 265, product: 'uvi-meter-solarmeter-6-5r', checked: '2026-10',
  },
};
