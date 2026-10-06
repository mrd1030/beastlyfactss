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
    low: 70, high: 100, product: "perch-yml-dragonwood-32in", checked: '2026-10',
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
    low: 35, high: 125, product: "bird-carrier-wrought-iron-medium-parrot", checked: '2026-10',
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
    low: 60, high: 300, product: "bird-cage-flight-30x18x36-3-8in", checked: '2026-10',
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
    low: 60, high: 300, product: "bird-cage-flight-30x18x36-3-8in", checked: '2026-10',
  },
  // The Prevue F040 is only 20.5 in deep, under a conure cage minimum.
  'cage-conure-24x24x30-half-to-5-8-inch': {
    label: "Cage at least 24 by 24 by 30 inches, bars 1/2 to 5/8 inch apart",
    spec: "24 x 24 x 30 in, 1/2 to 5/8 in bars",
    low: 100, high: 180, product: "bird-cage-36x24x30-half-inch", checked: '2026-10',
  },
  'perches-conure-varied': {
    label: "Perches of varied diameters: natural wood, rope and a grooming perch",
    spec: "conure",
    low: 10, high: 40, product: "bird-perch-czwestc-8pc-apple-wood", checked: '2026-10',
  },
  'toys-shreddable-conure': {
    label: "Foraging and shreddable toys",
    spec: "several",
    low: 30, high: 60, product: "bird-toy-bbjinronjy-sola-ball-2pc", checked: '2026-10',
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
    low: 10, high: 70, product: "bird-perch-czwestc-8pc-apple-wood", checked: '2026-10',
  },
  'pellets-small-22oz': {
    label: "First bag of pellets",
    spec: "22 oz",
    low: 10, high: 15, product: "bird-food-roudybush-daily-small-22oz", checked: '2026-10',
  },
  'toys-quaker-starter': {
    label: "Foraging and shreddable toys, four or five to start",
    spec: "",
    low: 10, high: 75, product: "bird-toys-katumo-small-parrot-variety", checked: '2026-10',
  },
  'bearded-dragon-enclosure-4x2x2-ft-120': {
    label: "Enclosure (4x2x2 ft, ~120 gallons; check the dimensions before you buy)",
    spec: "",
    low: 200, high: 500, product: "pvc-enclosure-4x2x2", checked: '2026-10',
  },
  'bearded-dragon-basking-bulb-dome-fixture': {
    label: "Basking bulb and dome fixture",
    spec: "",
    low: 35, high: 100, product: "basking-bulb-75w", checked: '2026-10',
  },
  'bearded-dragon-dimming-thermostat-safety-shutoff': {
    label: "Dimming thermostat with a safety shutoff",
    spec: "",
    low: 115, high: 160, product: "thermostat-vivarium-electronics-ve-200", checked: '2026-10',
  },
  'bearded-dragon-thermometer-hygrometer-plus-infrared': {
    label: "Thermometer and hygrometer, plus an infrared temp gun",
    spec: "",
    low: 25, high: 80, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'bearded-dragon-substrate-paper-towel-slate': {
    label: "Substrate (paper towel or slate tile)",
    spec: "",
    low: 5, high: 25, product: "slate-tile-daltile-12x12-6pack", checked: '2026-10',
  },
  'bearded-dragon-hides-basking-platform-climbing': {
    label: "Hides, basking platform, climbing decor",
    spec: "",
    low: 40, high: 200, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'bearded-dragon-hammock': {
    label: "Hammock",
    spec: "",
    low: 10, high: 20, product: "bearded-dragon-hammock-triangle", checked: '2026-10',
  },
  'bearded-dragon-shallow-water-dish': {
    label: "Shallow water dish",
    spec: "",
    low: 5, high: 15, product: "shallow-water-dish", checked: '2026-10',
  },
  'bearded-dragon-feeding-tongs': {
    label: "Feeding tongs",
    spec: "",
    low: 5, high: 15, product: "feeding-tongs-lasnten-long-rubber-tip", checked: '2026-10',
  },
  'bearded-dragon-supply-plain-calcium-calcium': {
    label: "First supply of plain calcium, calcium with D3 and a multivitamin",
    spec: "",
    low: 15, high: 20, product: "calcium-zoo-med-without-d3", checked: '2026-10',
  },
  'argentine-tegu-46in-high-output-uvb': {
    label: "46in high output UVB fixture",
    spec: "",
    low: 65, high: 110, product: "argentine-tegu-uvb-46in", checked: '2026-10',
  },
  'argentine-tegu-heavy-duty-thermostat': {
    label: "Heavy duty thermostat",
    spec: "",
    low: 15, high: 50, product: "argentine-tegu-thermostat-heavy-duty", checked: '2026-10',
  },
  'argentine-tegu-automatic-misting-system': {
    label: "Automatic misting system",
    spec: "",
    low: 35, high: 180, product: "automatic-misting-system-fogger", checked: '2026-10',
  },
  'argentine-tegu-deep-substrate-multiple-bags': {
    label: "Deep substrate (multiple bags needed for 12-18in depth)",
    spec: "",
    low: 10, high: 20, product: "substrate-tarantula-coconut-fiber-peat", checked: '2026-10',
  },
  'argentine-tegu-basking-radiant-heat-sources': {
    label: "Basking and radiant heat sources",
    spec: "",
    low: 25, high: 150, product: "high-wattage-basking-fixture", checked: '2026-10',
  },
  'argentine-tegu-full-8x4x4ft-pvc-enclosure': {
    label: "Full 8x4x4ft PVC enclosure, built to order and shipped (the adult size)",
    spec: "",
    low: 2200, high: 3140, product: null, checked: '2026-10',
  },
  'blue-tongue-skink-4x2x2-ft-enclosure-pvc': {
    label: "4x2x2 ft enclosure (PVC preferred)",
    spec: "",
    low: 150, high: 400, product: "pvc-enclosure-4x2x2", checked: '2026-10',
  },
  'blue-tongue-skink-moderate-uvb-t5-ho': {
    label: "Moderate UVB (T5 HO Arcadia 6%)",
    spec: "",
    low: 50, high: 115, product: "uvb-arcadia-forest-6", checked: '2026-10',
  },
  'blue-tongue-skink-basking-bulb-fixture': {
    label: "Basking bulb + fixture",
    spec: "",
    low: 10, high: 40, product: "basking-dome-fixture", checked: '2026-10',
  },
  'blue-tongue-skink-thermostat': {
    label: "Dimming thermostat",
    spec: "",
    low: 40, high: 95, product: "dimming-thermostat-exo-terra-proportional", checked: '2026-10',
  },
  'blue-tongue-skink-digital-thermometer-hygrometer': {
    label: "Digital thermometer and hygrometer",
    spec: "",
    low: 10, high: 25, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'blue-tongue-skink-coconut-fiber-topsoil-substrate': {
    label: "Coconut fiber + topsoil substrate",
    spec: "",
    low: 10, high: 35, product: "substrate-tarantula-coconut-fiber-peat", checked: '2026-10',
  },
  'blue-tongue-skink-large-water-dish': {
    label: "Large water dish",
    spec: "",
    low: 15, high: 30, product: "large-soakable-water-dish", checked: '2026-10',
  },
  'green-anole-24x24x24in-front-opening-terrarium': {
    label: "24x24x24in front-opening terrarium",
    spec: "",
    low: 225, high: 275, product: "green-anole-enclosure-24x24x24", checked: '2026-10',
  },
  'green-anole-basking-heat-bulb-dome': {
    label: "Basking heat bulb and dome fixture",
    spec: "",
    low: 20, high: 35, product: "basking-bulb-75w", checked: '2026-10',
  },
  'green-anole-t5-ho-uvb-fixture': {
    label: "ShadeDweller UVB kit",
    spec: "",
    low: 55, high: 70, product: "uvb-arcadia-shadedweller-7-12in", checked: '2026-10',
  },
  'green-anole-thermometer-hygrometer-combo': {
    label: "Thermometer/hygrometer combo",
    spec: "",
    low: 10, high: 35, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'green-iguana-juvenile-enclosure-4x2x4-ft': {
    label: "Juvenile enclosure, 4x2x4 ft PVC",
    spec: "",
    low: 540, high: 555, product: "ackie-enclosure-reptile-habitats-48x24x48-pvc", checked: '2026-10',
  },
  'green-iguana-t5-ho-uvb-kit': {
    label: "T5 HO UVB kit, 36 inch, 12% or 14% bulb",
    spec: "",
    low: 100, high: 130, product: "arcadia-lumenize-prot5-36in-12pct", checked: '2026-10',
  },
  'green-iguana-halogen-basking-bulbs-75': {
    label: "Halogen basking bulbs, 75 watt, two or three for the juvenile box",
    spec: "",
    low: 25, high: 50, product: "halogen-flood-vinaco-par30-75w-6pack", checked: '2026-10',
  },
  'green-iguana-dimming-thermostat': {
    label: "Dimming thermostat",
    spec: "",
    low: 70, high: 130, product: "dimming-thermostat-exo-terra-proportional", checked: '2026-10',
  },
  'green-iguana-automatic-misting-system': {
    label: "Automatic misting system",
    spec: "",
    low: 180, high: 210, product: "misting-system-mistking-starter-5th-gen", checked: '2026-10',
  },
  'green-iguana-large-soak-able-water': {
    label: "Large soak-able water dish",
    spec: "",
    low: 15, high: 30, product: "large-soakable-water-dish", checked: '2026-10',
  },
  'green-iguana-digital-thermometer-hygrometer': {
    label: "Digital thermometer and hygrometer",
    spec: "",
    low: 10, high: 35, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'jacksons-chameleon-24x24x48-tall-screen-hybrid': {
    label: "24x24x48 in tall screen or hybrid enclosure",
    spec: "",
    low: 120, high: 150, product: null, checked: '2026-10',
  },
  'jacksons-chameleon-uvb-fixture-bulb': {
    label: "UVB fixture and bulb",
    spec: "",
    low: 85, high: 115, product: "uvb-arcadia-forest-6-22in-24w", checked: '2026-10',
  },
  'jacksons-chameleon-halogen-basking-bulb': {
    label: "Halogen basking bulb",
    spec: "",
    low: 20, high: 25, product: null, checked: '2026-10',
  },
  'jacksons-chameleon-dimmer-thermostat-basking-bulb': {
    label: "Dimmer/thermostat for the basking bulb",
    spec: "",
    low: 55, high: 95, product: "dimming-thermostat-exo-terra-proportional", checked: '2026-10',
  },
  'jacksons-chameleon-misting-system-manual-automated': {
    label: "Misting system, manual or automated",
    spec: "",
    low: 35, high: 60, product: "automatic-misting-system-fogger", checked: '2026-10',
  },
  'jacksons-chameleon-live-plants-moisture-retentive': {
    label: "Live plants and moisture-retentive substrate",
    spec: "",
    low: 15, high: 35, product: "live-terrarium-plants", checked: '2026-10',
  },
  'savannah-monitor-halogen-basking-bulb-cluster': {
    label: "Halogen basking bulb (cluster of 2 or more required)",
    spec: "",
    low: 15, high: 30, product: "uromastyx-halogen-flood-bulb-100w", checked: '2026-10',
  },
  'savannah-monitor-substrate-multiple-bags-needed': {
    label: "Substrate (multiple bags needed for 12-24+ inches of depth)",
    spec: "",
    low: 55, high: 65, product: "ackie-substrate-bio-dude-terra-sahara-36qt", checked: '2026-10',
  },
  'uromastyx-large-enclosure-4x2x2-ft': {
    label: "Large enclosure, 4x2x2 ft minimum",
    spec: "",
    low: 280, high: 700, product: "pvc-enclosure-4x2x2", checked: '2026-10',
  },
  'uromastyx-t5-ho-uvb-kit': {
    label: "T5 HO UVB kit, 36 inch, 14%",
    spec: "",
    low: 110, high: 145, product: "arcadia-t5-uvb-36in-14pct-dragon", checked: '2026-10',
  },
  'uromastyx-dimming-thermostat-halogens': {
    label: "Dimming thermostat for the halogens",
    spec: "",
    low: 20, high: 95, product: "dimming-thermostat-exo-terra-proportional", checked: '2026-10',
  },
  'uromastyx-infrared-temperature-gun': {
    label: "Infrared temperature gun",
    spec: "",
    low: 15, high: 30, product: "infrared-temp-gun", checked: '2026-10',
  },
  'veiled-chameleon-strong-uvb-t5-ho': {
    label: "Strong UVB (T5 HO Arcadia 6% or 12%)",
    spec: "",
    low: 70, high: 115, product: "uvb-arcadia-forest-6-22in-24w", checked: '2026-10',
  },
  'veiled-chameleon-dripper-system-automatic-mister': {
    label: "Dripper system and automatic mister",
    spec: "",
    low: 35, high: 100, product: "automatic-misting-system-fogger", checked: '2026-10',
  },
  'veiled-chameleon-laying-bin-moist-sand': {
    label: "Laying bin with moist sand/soil (females)",
    spec: "",
    low: 15, high: 30, product: "storage-tub-sterilite-56qt", checked: '2026-10',
  },
  'conure-snuggle-pouch-bird-tent': {
    label: "Snuggle pouch or bird tent",
    spec: "",
    low: 10, high: 20, product: "bird-snuggle-hut-wontee-large", checked: '2026-10',
  },
  'cockatiel-bag-cockatiel-seed-small': {
    label: "First bag of cockatiel seed, kept to a small part of the diet",
    spec: "",
    low: 10, high: 20, product: null, checked: '2026-10',
  },
  'blue-tongue-skink-multiple-hides-enrichment-items': {
    label: "Multiple hides and enrichment items",
    spec: "",
    low: 20, high: 40, product: "hide-exo-terra-reptile-cave-xl", checked: '2026-10',
  },
  'green-iguana-cypress-mulch-substrate': {
    label: "Cypress mulch substrate",
    spec: "",
    low: 10, high: 20, product: "cypress-mulch-substrate", checked: '2026-10',
  },
  'green-iguana-climbing-branches': {
    label: "Climbing branches",
    spec: "",
    low: 10, high: 20, product: null, checked: '2026-10',
  },
  'uromastyx-digital-thermometer-hygrometer': {
    label: "Digital thermometer and hygrometer",
    spec: "",
    low: 10, high: 20, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'uromastyx-sand-10-lb-bag': {
    label: "Sand, 10 lb bag (a 4x2 ft floor takes at least 2.5 cubic ft)",
    spec: "",
    low: 5, high: 15, product: null, checked: '2026-10',
  },
  'veiled-chameleon-24x24x48-screen-enclosure': {
    label: "24x24x48 in all-screen enclosure",
    spec: "",
    low: 150, high: 300, product: "enclosure-zoo-med-reptibreeze-24x24x48", checked: '2026-10',
  },
  'veiled-chameleon-basking-bulb': {
    label: "Basking bulb",
    spec: "",
    low: 5, high: 40, product: "basking-bulb-75w", checked: '2026-10',
  },
  'veiled-chameleon-live-plants-pothos-hibiscus': {
    label: "Live plants (pothos, hibiscus, ficus)",
    spec: "",
    low: 15, high: 80, product: "live-terrarium-plants", checked: '2026-10',
  },
  'thermo-hygrometer-digital': {
    label: "Digital thermometer and hygrometer",
    spec: "",
    low: 10, high: 20, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'multivitamin-reptivite-2oz': {
    label: "Reptile multivitamin without D3",
    spec: "2 oz",
    low: 5, high: 5, product: "multivitamin-zoo-med-reptivite-without-d3-2oz", checked: '2026-10',
  },
  'soaking-tub-large-38in': {
    label: "Large soaking tub the animal can fully enter",
    spec: "38 x 38 in",
    low: 95, high: 120, product: "soaking-tub-large-38in", checked: '2026-10',
  },
  'feeding-tongs-reptile': {
    label: "Feeding tongs",
    spec: "10 in, 2 pack",
    low: 5, high: 15, product: "feeding-tongs-lasnten-long-rubber-tip", checked: '2026-10',
  },
  'led-daylight-6500k': {
    label: "Daylight LED for brightness and live plants",
    spec: "16 in, 6500 K",
    low: 75, high: 85, product: "grow-light-bio-dude-glow-grow-16in", checked: '2026-10',
  },
  'live-plants-terrarium': {
    label: "Live terrarium plants",
    spec: "several",
    low: 15, high: 35, product: "live-terrarium-plants", checked: '2026-10',
  },
  'calcium-multivitamin-all-in-one': {
    label: "Calcium and multivitamin, all in one",
    spec: "6 oz",
    low: 15, high: 25, product: "calcium-repashy-plus-6oz", checked: '2026-10',
  },
  'calcium-d3-3oz': {
    label: "Calcium with D3",
    spec: "3 oz",
    low: 5, high: 5, product: "calcium-zoo-med-repti-calcium-with-d3-3oz", checked: '2026-10',
  },
  'water-dish-shallow': {
    label: "Shallow water dish",
    spec: "",
    low: 5, high: 15, product: "shallow-water-dish", checked: '2026-10',
  },
  'calcium-multivitamin-miner-all-2pack': {
    label: "Calcium and multivitamin supplements",
    spec: "Miner-All Indoor, 2 x 6 oz",
    low: 20, high: 30, product: "calcium-miner-all-indoor-2pack", checked: '2026-10',
  },
  'fire-skink-enclosure-36x18x18-inch-glass': {
    label: "Enclosure, 36x18x18 inch glass terrarium",
    spec: "",
    low: 200, high: 280, product: "enclosure-repti-zoo-36x18x18-50gal", checked: '2026-10',
  },
  'fire-skink-t5-ho-uvb-kit': {
    label: "T5 HO UVB kit, 36 inch, 6% bulb",
    spec: "",
    low: 95, high: 115, product: "uvb-arcadia-forest-6", checked: '2026-10',
  },
  'fire-skink-basking-bulb-2-pack': {
    label: "Basking bulb (2 pack) and dome fixture",
    spec: "",
    low: 45, high: 45, product: null, checked: '2026-10',
  },
  'fire-skink-dimming-thermostat-basking-bulb': {
    label: "Dimming thermostat, for the basking bulb",
    spec: "",
    low: 25, high: 35, product: "dimming-thermostat-pt02t", checked: '2026-10',
  },
  'fire-skink-coconut-fiber-substrate-6': {
    label: "Coconut fiber substrate, about 6 inches deep (8 to 9 bags)",
    spec: "",
    low: 85, high: 100, product: null, checked: '2026-10',
  },
  'fire-skink-two-hides': {
    label: "Two hides",
    spec: "",
    low: 5, high: 60, product: null, checked: '2026-10',
  },
  'african-fat-tail-enclosure-36x18x18-minimum-check': {
    label: "Enclosure (36x18x18 in minimum; check the dimensions before you buy)",
    spec: "",
    low: 200, high: 260, product: "enclosure-repti-zoo-36x18x18-50gal", checked: '2026-10',
  },
  'african-fat-tail-under-tank-heat-mat': {
    label: "Under-tank heat mat and thermostat",
    spec: "",
    low: 40, high: 70, product: "under-tank-heat-mat-thermostat-kit", checked: '2026-10',
  },
  'african-fat-tail-three-hides-warm-cool': {
    label: "Three hides: warm, cool and humid",
    spec: "",
    low: 20, high: 105, product: "hide-exo-terra-gecko-cave-medium", checked: '2026-10',
  },
  'african-fat-tail-sphagnum-moss-humid-hide': {
    label: "Sphagnum moss for the humid hide",
    spec: "",
    low: 5, high: 15, product: "sphagnum-moss", checked: '2026-10',
  },
  'african-fat-tail-coconut-fiber-reptile-sand': {
    label: "Coconut fiber and reptile sand for the burrowing mix",
    spec: "",
    low: 15, high: 55, product: "substrate-zoo-med-eco-earth-coconut-fiber", checked: '2026-10',
  },
  'african-fat-tail-infrared-temp-gun-mat': {
    label: "Infrared temp gun for the mat's surface",
    spec: "",
    low: 10, high: 25, product: "etekcity-infrared-thermometer-gun", checked: '2026-10',
  },
  'african-fat-tail-low-output-uvb-fixture': {
    label: "Low-output UVB fixture about two-thirds the enclosure length, tube included, optional but beneficial",
    spec: "",
    low: 105, high: 135, product: "arcadia-lumenize-prot5-24in-14w-2-5pct-shadedweller-max", checked: '2026-10',
  },
  'african-fat-tail-plug-timer-light': {
    label: "Plug-in timer for the light",
    spec: "",
    low: 5, high: 20, product: "outlet-timer-bn-link-mechanical", checked: '2026-10',
  },
  'african-fat-tail-feeding-tongs': {
    label: "Feeding tongs",
    spec: "",
    low: 5, high: 15, product: "feeding-tongs-short-soft-tip-4pack", checked: '2026-10',
  },
  'african-fat-tail-cork-flat': {
    label: "Cork flat",
    spec: "",
    low: 5, high: 10, product: null, checked: '2026-10',
  },
  'african-fat-tail-slate-tiles-stacked-low': {
    label: "Slate tiles, stacked low and stable",
    spec: "",
    low: 35, high: 55, product: "slate-tile-daltile-12x12-6pack", checked: '2026-10',
  },
  'african-fat-tail-supply-plain-calcium-calcium': {
    label: "First supply of plain calcium, calcium with D3 and a multivitamin",
    spec: "",
    low: 15, high: 20, product: "calcium-zoo-med-without-d3", checked: '2026-10',
  },
  'crested-gecko-enclosure-18x18x24-minimum-vertical': {
    label: "Enclosure (18x18x24 in minimum, vertical/arboreal; check the dimensions before you buy)",
    spec: "",
    low: 150, high: 200, product: "glass-terrarium-18x18x24", checked: '2026-10',
  },
  'crested-gecko-low-output-uvb-hood': {
    label: "Low-output UVB hood with a 5.0 (5%) T5 HO tube, about two-thirds the enclosure length",
    spec: "",
    low: 45, high: 75, product: "uvb-zoo-med-5-0-t5-ho-14in-hood", checked: '2026-10',
  },
  'crested-gecko-heat-bulb-dome-fixture': {
    label: "Heat bulb and dome fixture (25-40W)",
    spec: "",
    low: 20, high: 40, product: "heat-bulb-zoo-med-basking-spot-25w", checked: '2026-10',
  },
  'crested-gecko-dimming-thermostat': {
    label: "Dimming thermostat",
    spec: "",
    low: 30, high: 35, product: "dimming-thermostat-reptizoo-pid", checked: '2026-10',
  },
  'crested-gecko-substrate-coconut-fiber-2': {
    label: "Substrate: coconut fiber, at least 2 inches deep",
    spec: "",
    low: 15, high: 40, product: "substrate-zoo-med-eco-earth-coconut-fiber", checked: '2026-10',
  },
  'crested-gecko-cork-bark-hides-climbing': {
    label: "Cork bark hides, climbing branches, and plants or vines",
    spec: "",
    low: 45, high: 80, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'crested-gecko-digital-thermometer-hygrometer': {
    label: "Digital thermometer and hygrometer",
    spec: "",
    low: 15, high: 25, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'crested-gecko-fine-misting-bottle-fogger': {
    label: "Fine misting bottle, or a fogger",
    spec: "",
    low: 10, high: 40, product: "fine-mist-spray-bottle", checked: '2026-10',
  },
  'crested-gecko-supply-plain-calcium-dusting': {
    label: "First supply of plain calcium for dusting insects",
    spec: "",
    low: 5, high: 15, product: "calcium-zoo-med-without-d3", checked: '2026-10',
  },
  'crested-gecko-jar-complete-crested-gecko': {
    label: "First jar of complete crested gecko diet",
    spec: "",
    low: 10, high: 25, product: "crested-gecko-diet-repashy-classic-6oz", checked: '2026-10',
  },
  'gargoyle-gecko-arboreal-enclosure-18x18x24-minimum': {
    label: "Arboreal enclosure (18x18x24 in minimum; check the dimensions before you buy)",
    spec: "",
    low: 100, high: 200, product: "glass-terrarium-18x18x24", checked: '2026-10',
  },
  'gargoyle-gecko-low-wattage-heat-bulb': {
    label: "Low-wattage heat bulb and dome fixture (25-40W)",
    spec: "",
    low: 20, high: 40, product: "heat-bulb-zoo-med-basking-spot-25w", checked: '2026-10',
  },
  'gargoyle-gecko-coconut-fiber-bioactive-substrate': {
    label: "Coconut fiber or bioactive substrate",
    spec: "",
    low: 20, high: 40, product: "substrate-zoo-med-eco-earth-coconut-fiber", checked: '2026-10',
  },
  'gargoyle-gecko-cork-bark-branches': {
    label: "Cork bark and branches",
    spec: "",
    low: 20, high: 60, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'gargoyle-gecko-live-artificial-plants': {
    label: "Live or artificial plants",
    spec: "",
    low: 25, high: 45, product: "artificial-terrarium-plants", checked: '2026-10',
  },
  'gargoyle-gecko-magnetic-feeding-ledge': {
    label: "Magnetic feeding ledge",
    spec: "",
    low: 10, high: 20, product: "leaf-tailed-gecko-magnetic-feeding-ledge", checked: '2026-10',
  },
  'gargoyle-gecko-bag-complete-powdered-gecko': {
    label: "First bag of complete powdered gecko diet, 8 oz",
    spec: "",
    low: 20, high: 30, product: "crested-gecko-diet-pangea-watermelon-complete-8oz", checked: '2026-10',
  },
  'gargoyle-gecko-supply-plain-calcium-calcium': {
    label: "First supply of plain calcium and calcium with D3",
    spec: "",
    low: 10, high: 15, product: "calcium-zoo-med-without-d3", checked: '2026-10',
  },
  'leopard-gecko-enclosure-36x18x18-minimum-check': {
    label: "Enclosure (36x18x18 in minimum; check the dimensions before you buy)",
    spec: "",
    low: 50, high: 260, product: "enclosure-repti-zoo-36x18x18-50gal", checked: '2026-10',
  },
  'leopard-gecko-under-tank-heat-mat': {
    label: "Under-tank heat mat and thermostat",
    spec: "",
    low: 50, high: 70, product: "under-tank-heat-mat-thermostat-kit", checked: '2026-10',
  },
  'leopard-gecko-plug-timer-lights': {
    label: "Plug-in timer for the lights",
    spec: "",
    low: 10, high: 20, product: "outlet-timer-bn-link-mechanical", checked: '2026-10',
  },
  'leopard-gecko-digital-thermometer-hygrometer': {
    label: "Digital thermometer and hygrometer",
    spec: "",
    low: 15, high: 40, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'leopard-gecko-substrate-paper-towel-tile': {
    label: "Substrate (paper towel or tile)",
    spec: "",
    low: 10, high: 25, product: "slate-tile-daltile-12x12-6pack", checked: '2026-10',
  },
  'leopard-gecko-hides-water-dish-calcium': {
    label: "Hides, water dish and calcium dish (3 hides minimum)",
    spec: "",
    low: 30, high: 120, product: "hide-exo-terra-gecko-cave-medium", checked: '2026-10',
  },
  'leopard-gecko-supply-plain-calcium-calcium': {
    label: "First supply of plain calcium, calcium with D3 and a multivitamin",
    spec: "",
    low: 15, high: 20, product: "calcium-zoo-med-without-d3", checked: '2026-10',
  },
  'mourning-gecko-12x12x18-front-opening-glass': {
    label: "12x12x18 in front-opening glass terrarium",
    spec: "",
    low: 90, high: 110, product: "terrarium-exo-terra-12x12x18", checked: '2026-10',
  },
  'mourning-gecko-low-output-uvb-t5': {
    label: "Low-output UVB (T5 HO)",
    spec: "",
    low: 45, high: 80, product: "uvb-arcadia-shadedweller-7-12in", checked: '2026-10',
  },
  'mourning-gecko-tight-fitting-escape-proof': {
    label: "Tight-fitting escape-proof lid",
    spec: "",
    low: 20, high: 50, product: null, checked: '2026-10',
  },
  'mourning-gecko-bioactive-coconut-fiber-substrate': {
    label: "Bioactive or coconut fiber substrate",
    spec: "",
    low: 20, high: 40, product: "substrate-zoo-med-eco-earth-coconut-fiber", checked: '2026-10',
  },
  'mourning-gecko-cork-bark-dense-planting': {
    label: "Cork bark and dense planting",
    spec: "",
    low: 15, high: 60, product: "live-terrarium-plants", checked: '2026-10',
  },
  'mourning-gecko-fine-mist-system-manual': {
    label: "Fine mist system or manual misting bottle",
    spec: "",
    low: 5, high: 40, product: "fine-mist-spray-bottle", checked: '2026-10',
  },
  'cgd-powdered-diet-first': {
    label: "First supply of powdered crested gecko diet",
    spec: "6 oz",
    low: 10, high: 25, product: "crested-gecko-diet-repashy-classic-6oz", checked: '2026-10',
  },
  'feeding-ledge-magnetic': {
    label: "Magnetic feeding ledge",
    spec: "",
    low: 10, high: 20, product: "leaf-tailed-gecko-magnetic-feeding-ledge", checked: '2026-10',
  },
  'multivitamin-herptivite': {
    label: "Reptile multivitamin",
    spec: "3.3 oz",
    low: 10, high: 15, product: "reptile-multivitamin-repcal-herptivite", checked: '2026-10',
  },
  'ball-python-enclosure-4x2x2-ft-adult': {
    label: "Enclosure (4x2x2 ft for an adult; check the dimensions before you buy)",
    spec: "",
    low: 100, high: 450, product: "pvc-enclosure-4x2x2", checked: '2026-10',
  },
  'ball-python-heat-source-80-w': {
    label: "Heat source: an 80 W radiant heat panel, or heat tape, an under-tank heater or a ceramic heat emitter",
    spec: "",
    low: 30, high: 95, product: "radiant-heat-panel-reptile-basics-80w", checked: '2026-10',
  },
  'ball-python-thermostat-one-every-heat': {
    label: "Thermostat, one for every heat source",
    spec: "",
    low: 10, high: 100, product: "thermostat-bn-link-on-off", checked: '2026-10',
  },
  'ball-python-thermometers-hygrometer': {
    label: "Thermometers and hygrometer",
    spec: "",
    low: 25, high: 50, product: "digital-thermometer-hygrometer-combo", checked: '2026-10',
  },
  'ball-python-substrate-cypress-mulch-coconut': {
    label: "Substrate (cypress mulch or coconut coir, 3 to 4 inches deep)",
    spec: "",
    low: 10, high: 40, product: "cypress-mulch-substrate", checked: '2026-10',
  },
  'ball-python-two-snug-hides-one': {
    label: "Two snug hides, one warm side and one cool side",
    spec: "",
    low: 45, high: 70, product: "hide-exo-terra-reptile-cave-xl", checked: '2026-10',
  },
  'ball-python-cover-cork-bark-sturdy': {
    label: "Cover: cork bark, a sturdy branch, leaf litter and plants",
    spec: "",
    low: 65, high: 115, product: "cork-bark-round-xl", checked: '2026-10',
  },
  'ball-python-plug-timer-lights': {
    label: "Plug-in timer for the lights",
    spec: "",
    low: 5, high: 15, product: "outlet-timer-bn-link-mechanical", checked: '2026-10',
  },
  'hognose-snake-36x18x18-enclosure-female-minimum': {
    label: "36x18x18 in enclosure (female minimum 36x18x16 in; a male needs only 30x13x13 in; check the dimensions before you buy)",
    spec: "",
    low: 100, high: 260, product: "enclosure-repti-zoo-36x18x18-50gal", checked: '2026-10',
  },
  'hognose-snake-low-wattage-halogen-basking': {
    label: "Low-wattage halogen basking bulb, 50 W",
    spec: "",
    low: 15, high: 25, product: "milk-snake-halogen-bulb-exo-terra-sun-glo-50w", checked: '2026-10',
  },
  'hognose-snake-dome-fixture-basking-bulb': {
    label: "Dome fixture for the basking bulb",
    spec: "",
    low: 10, high: 20, product: "basking-dome-fixture", checked: '2026-10',
  },
  'hognose-snake-dimming-thermostat-basking-bulb': {
    label: "Dimming thermostat, for the basking bulb",
    spec: "",
    low: 20, high: 35, product: "dimming-thermostat-reptizoo-pid", checked: '2026-10',
  },
  'hognose-snake-aspen-coconut-fiber-substrate': {
    label: "Aspen or coconut fiber substrate (deep substrate can take more than one bag)",
    spec: "",
    low: 15, high: 35, product: "aspen-shavings-substrate", checked: '2026-10',
  },
  'hognose-snake-reptile-sand-burrowing-mix': {
    label: "Reptile sand for the burrowing mix",
    spec: "",
    low: 5, high: 15, product: "substrate-zoo-med-reptisand-burrowing", checked: '2026-10',
  },
  'hognose-snake-warm-cool-humid-hides': {
    label: "Warm, cool, and humid hides",
    spec: "",
    low: 15, high: 85, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'hognose-snake-branches-cover': {
    label: "Branches for cover",
    spec: "",
    low: 10, high: 30, product: "climbing-branch-mopani-wood", checked: '2026-10',
  },
  'hognose-snake-leaf-litter-surface-cover': {
    label: "Leaf litter for surface cover",
    spec: "",
    low: 10, high: 20, product: "leaf-litter-joshs-frogs-magnolia", checked: '2026-10',
  },
  'hognose-snake-water-dish-big-enough': {
    label: "Water dish big enough for the snake to get into",
    spec: "",
    low: 5, high: 30, product: "large-soakable-water-dish", checked: '2026-10',
  },
  'hognose-snake-lidded-plastic-tub-feeding': {
    label: "Lidded plastic tub for feeding off the substrate",
    spec: "",
    low: 10, high: 10, product: "storage-tub-sterilite-32qt-latching", checked: '2026-10',
  },
  'hognose-snake-snake-hook': {
    label: "Snake hook",
    spec: "",
    low: 5, high: 15, product: null, checked: '2026-10',
  },
  'hognose-snake-kitchen-scale-grams': {
    label: "Kitchen scale in grams",
    spec: "",
    low: 10, high: 20, product: "gram-scale-etekcity-kitchen", checked: '2026-10',
  },
  'hognose-snake-optional-low-output-t5': {
    label: "Optional low-output T5 UVB fixture about two-thirds the enclosure length, 5.0 or 6% tube included",
    spec: "",
    low: 85, high: 100, product: "uvb-arcadia-forest-6-22in-24w", checked: '2026-10',
  },
  'hognose-snake-optional-night-heat-only': {
    label: "Optional night heat, only if the room drops below 60\u00b0F: heat mat and on/off thermostat",
    spec: "",
    low: 25, high: 40, product: "under-tank-heat-mat-thermostat-kit", checked: '2026-10',
  },
  'california-kingsnake-48x24x24-inch-front-opening': {
    label: "48x24x24 inch front-opening enclosure",
    spec: "",
    low: 280, high: 360, product: "milk-snake-vivarium-wooden-48x24x24", checked: '2026-10',
  },
  'california-kingsnake-cork-bark-hides': {
    label: "Cork bark hides",
    spec: "",
    low: 20, high: 60, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'corn-snake-enclosure-40-gal-breeder': {
    label: "Enclosure (40 gal breeder / 4x2x2 ft PVC)",
    spec: "",
    low: 80, high: 400, product: "tank-aqueon-40-breeder", checked: '2026-10',
  },
  'corn-snake-thermostat': {
    label: "Thermostat",
    spec: "",
    low: 25, high: 100, product: "dimming-thermostat-pt02t", checked: '2026-10',
  },
  'corn-snake-hides-two': {
    label: "Hides (at least two)",
    spec: "",
    low: 10, high: 40, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'corn-snake-water-bowl-decor': {
    label: "Water bowl and decor",
    spec: "",
    low: 15, high: 70, product: "large-soakable-water-dish", checked: '2026-10',
  },
  'corn-snake-optional-uvb-setup': {
    label: "Optional T5 HO UVB, 5.0 or 6%",
    spec: "",
    low: 50, high: 150, product: "uvb-arcadia-forest-6", checked: '2026-10',
  },
  'garter-snake-36x18x18-40-gallon-breeder': {
    label: "36x18x18 in or 40-gallon breeder enclosure",
    spec: "",
    low: 120, high: 260, product: "enclosure-repti-zoo-36x18x18-50gal", checked: '2026-10',
  },
  'garter-snake-under-tank-heater-thermostat': {
    label: "Under-tank heater + thermostat",
    spec: "",
    low: 25, high: 70, product: "under-tank-heat-mat-thermostat-kit", checked: '2026-10',
  },
  'garter-snake-warm-cool-humid-hides': {
    label: "Warm, cool, and humid hides",
    spec: "",
    low: 15, high: 30, product: null, checked: '2026-10',
  },
  'garter-snake-substrate-coconut-fiber-cypress': {
    label: "Substrate (coconut fiber, cypress mulch, or leaf litter)",
    spec: "",
    low: 10, high: 25, product: "cypress-mulch-substrate", checked: '2026-10',
  },
  'heat-mat-thermostat-kit': {
    label: "Under-tank heat mat and thermostat kit",
    spec: "",
    low: 25, high: 40, product: "under-tank-heat-mat-thermostat-kit", checked: '2026-10',
  },
  'aspen-shavings': {
    label: "Aspen shavings substrate",
    spec: "",
    low: 20, high: 35, product: "aspen-shavings-substrate", checked: '2026-10',
  },
  'sphagnum-moss': {
    label: "Sphagnum moss for a humid hide",
    spec: "",
    low: 5, high: 15, product: "sphagnum-moss", checked: '2026-10',
  },
  'water-conditioner': {
    label: "Water conditioner",
    spec: "",
    low: 5, high: 15, product: "water-conditioner", checked: '2026-10',
  },
  'branch-mopani': {
    label: "Climbing branch",
    spec: "mopani wood",
    low: 15, high: 30, product: "climbing-branch-mopani-wood", checked: '2026-10',
  },
  'water-dish-large-soakable2': {
    label: "Large water dish it can soak in",
    spec: "",
    low: 15, high: 30, product: "large-soakable-water-dish", checked: '2026-10',
  },
  'russian-tortoise-tortoise-table-bought-built': {
    label: "Tortoise table, bought or built, 4x2 ft or larger",
    spec: "",
    low: 125, high: 250, product: "tortoise-table", checked: '2026-10',
  },
  'russian-tortoise-t5-ho-uvb-fixture': {
    label: "T5 HO UVB fixture about a third to half the table length, 10 or 12% tube included",
    spec: "",
    low: 60, high: 130, product: "uvb-zoo-med-reptisun-24in-high-output-hood", checked: '2026-10',
  },
  'russian-tortoise-bright-6500-k-daylight': {
    label: "Bright 6500 K daylight LED beside the UVB tube over the warm end, with its plug-in cord adapter",
    spec: "",
    low: 80, high: 100, product: "grow-light-bio-dude-glow-grow-16in", checked: '2026-10',
  },
  'russian-tortoise-infrared-temperature-gun-basking': {
    label: "Infrared temperature gun for the basking surface",
    spec: "",
    low: 15, high: 30, product: "etekcity-infrared-thermometer-gun", checked: '2026-10',
  },
  'russian-tortoise-substrate-50-50-mix': {
    label: "Substrate: a 50/50 mix of topsoil and coconut coir, 6 in deep for an adult",
    spec: "",
    low: 30, high: 70, product: "topsoil-michigan-peat-garden-magic-40lb", checked: '2026-10',
  },
  'russian-tortoise-two-hides-one-warm': {
    label: "Two hides, one warm and dry and one cool and moist lined with damp peat moss, plus cork flats",
    spec: "",
    low: 30, high: 70, product: "peat-moss-espoma-organic", checked: '2026-10',
  },
  'russian-tortoise-dig-box-storage-tub': {
    label: "Dig box: a storage tub of deeper substrate for the 6 to 12 in dig zone",
    spec: "",
    low: 5, high: 15, product: "storage-tub-sterilite-56qt", checked: '2026-10',
  },
  'russian-tortoise-digital-kitchen-scale-grams': {
    label: "Digital kitchen scale in grams",
    spec: "",
    low: 5, high: 20, product: "gram-scale-etekcity-kitchen", checked: '2026-10',
  },
  'russian-tortoise-supply-plain-calcium-without': {
    label: "First supply of plain calcium without D3, a herbivore multivitamin with no added phosphorus, and a cuttlebone",
    spec: "",
    low: 15, high: 30, product: "calcium-zoo-med-without-d3", checked: '2026-10',
  },
  'russian-tortoise-bag-grass-hay': {
    label: "First bag of grass hay",
    spec: "",
    low: 10, high: 15, product: "hay-oxbow-orchard-40oz", checked: '2026-10',
  },
  'box-turtle-enclosure-36x18x18-inch-minimum': {
    label: "Enclosure, 36x18x18 inch minimum",
    spec: "",
    low: 200, high: 275, product: "enclosure-repti-zoo-36x18x18-50gal", checked: '2026-10',
  },
  'red-eared-slider-100-gallon-enclosure-pond': {
    label: "100+ gallon enclosure or pond setup",
    spec: "",
    low: 300, high: 700, product: null, checked: '2026-10',
  },
  'red-eared-slider-powerful-canister-filter-2': {
    label: "Powerful canister filter (2-3x tank volume)",
    spec: "",
    low: 120, high: 340, product: "oscar-fish-canister-filter-fluval-fx4", checked: '2026-10',
  },
  'red-eared-slider-large-basking-platform': {
    label: "Large basking platform",
    spec: "",
    low: 25, high: 70, product: "turtle-basking-platform-turtle-topper-large", checked: '2026-10',
  },
  'red-eared-slider-strong-uvb-t5-ho': {
    label: "Strong UVB (T5 HO)",
    spec: "",
    low: 55, high: 100, product: "uvb-zoo-med-reptisun-24in-high-output-hood", checked: '2026-10',
  },
  'red-eared-slider-basking-heat-lamp': {
    label: "Basking heat lamp",
    spec: "",
    low: 20, high: 40, product: null, checked: '2026-10',
  },
  'red-eared-slider-submersible-water-heater': {
    label: "Submersible water heater",
    spec: "",
    low: 15, high: 60, product: "submersible-aquarium-heater", checked: '2026-10',
  },
  'red-eared-slider-water-quality-test-kit': {
    label: "Water quality test kit",
    spec: "",
    low: 15, high: 40, product: "water-test-kit", checked: '2026-10',
  },
  'sulcata-tortoise-indoor-tortoise-table-hatchling': {
    label: "Indoor tortoise table (hatchling/juvenile)",
    spec: "",
    low: 120, high: 300, product: "tortoise-table", checked: '2026-10',
  },
  'sulcata-tortoise-strong-uvb-arcadia-12': {
    label: "Strong UVB (Arcadia 12%, indoor setups)",
    spec: "",
    low: 60, high: 145, product: "arcadia-t5-uvb-36in-14pct-dragon", checked: '2026-10',
  },
  'sulcata-tortoise-basking-bulb': {
    label: "Basking bulb",
    spec: "",
    low: 20, high: 40, product: null, checked: '2026-10',
  },
  'uvb-t5ho-6pct-36in-kit': {
    label: "Linear T5 HO 6% UVB kit, 36 inch",
    spec: "36 in, 6%",
    low: 95, high: 115, product: "uvb-arcadia-forest-6", checked: '2026-10',
  },
  'basking-bulb-and-dome': {
    label: "Basking bulb and a basking dome fixture",
    spec: "75 W",
    low: 20, high: 35, product: "basking-bulb-75w", checked: '2026-10',
  },
  'thermostat-pt02t': {
    label: "Dimming thermostat",
    spec: "PT02T",
    low: 25, high: 35, product: "dimming-thermostat-pt02t", checked: '2026-10',
  },
  'substrate-coconut-fiber-eco-earth': {
    label: "Coconut fiber substrate",
    spec: "",
    low: 25, high: 40, product: "substrate-zoo-med-eco-earth-coconut-fiber", checked: '2026-10',
  },
  'turtle-pellets-first': {
    label: "First supply of aquatic turtle pellets",
    spec: "",
    low: 5, high: 15, product: "turtle-pellets-mazuri-aquatic", checked: '2026-10',
  },
  'calcium-multivitamin-tortoise': {
    label: "Phosphorus-free calcium and tortoise multivitamin",
    spec: "",
    low: 20, high: 30, product: "calcium-tortoise-turtle-herbivorous-sulcata", checked: '2026-10',
  },
  'forage-seed-mix-tortoise': {
    label: "Tortoise forage seed mix",
    spec: "",
    low: 15, high: 25, product: "tortoise-forage-seed-mix", checked: '2026-10',
  },
  'sulcata-tortoise-outdoor-enclosure-materials-buried': {
    label: "Outdoor enclosure materials + buried fencing",
    spec: "",
    low: 300, high: 1500, product: null, checked: '2026-10',
  },
  'sulcata-tortoise-heated-shelter-materials-heater': {
    label: "Heated shelter (materials + heater)",
    spec: "",
    low: 200, high: 1000, product: null, checked: '2026-10',
  },
  'axolotl-tank-20-gallon-long': {
    label: "Tank, 20-gallon long minimum, 40-gallon breeder better",
    spec: "",
    low: 50, high: 150, product: "tank-20-gallon-long", checked: '2026-10',
  },
  'axolotl-hinged-glass-lid-30': {
    label: "Hinged glass lid, 30 by 12 in for a 20-gallon long",
    spec: "",
    low: 25, high: 40, product: "glass-lid-aqueon-versa-top-30in", checked: '2026-10',
  },
  'axolotl-filtration-low-flow-sponge': {
    label: "Filtration, a low-flow sponge filter, or a canister rated for about 30 gallons with the output through a spray bar",
    spec: "",
    low: 20, high: 160, product: "sponge-filter", checked: '2026-10',
  },
  'axolotl-substrate-fine-sand-under': {
    label: "Substrate: fine sand under 1mm, or bare bottom",
    spec: "",
    low: 10, high: 25, product: null, checked: '2026-10',
  },
  'axolotl-smooth-hide-cave-length': {
    label: "Smooth hide cave, or a length of PVC pipe",
    spec: "",
    low: 10, high: 30, product: "hide-cave-aquarium-decoration", checked: '2026-10',
  },
  'axolotl-aquarium-cooling-fan-room': {
    label: "Aquarium cooling fan, for a room that runs only a little warm",
    spec: "",
    low: 20, high: 35, product: "aquarium-chiller-fan-budget", checked: '2026-10',
  },
  'axolotl-digital-aquarium-thermometer-water': {
    label: "Digital aquarium thermometer for the water",
    spec: "",
    low: 10, high: 15, product: "paizoo-fish-tank-thermometer", checked: '2026-10',
  },
  'axolotl-liquid-water-test-kit': {
    label: "Liquid water test kit for ammonia, nitrite, nitrate and pH",
    spec: "",
    low: 25, high: 40, product: "water-test-kit", checked: '2026-10',
  },
  'axolotl-supply-sinking-pellets-formulated': {
    label: "First supply of sinking pellets formulated for axolotls",
    spec: "",
    low: 10, high: 20, product: "soft-pellets-axolotl", checked: '2026-10',
  },
  'axolotl-chiller': {
    label: "Chiller",
    spec: "",
    low: 150, high: 650, product: "aquarium-chiller-axolotl", checked: '2026-10',
  },
  'whites-tree-frog-artificial-foliage-dense-parts': {
    label: "Artificial foliage for the dense parts",
    spec: "",
    low: 10, high: 20, product: "artificial-terrarium-plants", checked: '2026-10',
  },
  'whites-tree-frog-cork-bark-pvc-pipe': {
    label: "Cork bark and PVC pipe hides",
    spec: "",
    low: 15, high: 30, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'whites-tree-frog-coarse-orchid-bark-coco': {
    label: "Coarse orchid bark, coco husk, or a bioactive soil mix",
    spec: "",
    low: 25, high: 40, product: "orchid-bark-better-gro-8qt", checked: '2026-10',
  },
  'fire-bellied-toad-10-20-gallon-tank': {
    label: "10 to 20 gallon tank, set up as a paludarium",
    spec: "",
    low: 15, high: 40, product: "tank-10-gallon", checked: '2026-10',
  },
  'fire-bellied-toad-small-aquarium-filter-water': {
    label: "Small aquarium filter for the water section",
    spec: "",
    low: 5, high: 15, product: "sponge-filter", checked: '2026-10',
  },
  'pacman-frog-10-20-gallon-terrarium': {
    label: "10-20 gallon terrarium",
    spec: "",
    low: 40, high: 175, product: "terrarium-repti-zoo-24x18x12", checked: '2026-10',
  },
  'pacman-frog-deep-coconut-fiber-topsoil': {
    label: "Deep coconut fiber or topsoil substrate",
    spec: "",
    low: 15, high: 25, product: "topsoil-michigan-peat-garden-magic-40lb", checked: '2026-10',
  },
  'screen-lid-10-gallon': {
    label: "Screen lid for a 10 gallon tank",
    spec: "20x10 in",
    low: 15, high: 25, product: "screen-lid-zilla-20x10", checked: '2026-10',
  },
  'thermometer-digital-3pack': {
    label: "Digital thermometers, 3 pack",
    spec: "",
    low: 10, high: 20, product: "zoo-med-digital-thermometer-3pack", checked: '2026-10',
  },
  'cork-bark-hide-round': {
    label: "Round cork bark hide",
    spec: "",
    low: 10, high: 30, product: "cork-bark-round-hide", checked: '2026-10',
  },
  'uvb-shadedweller-7pct': {
    label: "Low-output 7% UVB kit",
    spec: "ShadeDweller 7%",
    low: 55, high: 70, product: "uvb-arcadia-shadedweller-7-12in", checked: '2026-10',
  },
  'slate-tile-6pack': {
    label: "Slate tiles, 12x12 in, 6 pack",
    spec: "",
    low: 35, high: 60, product: "slate-tile-daltile-12x12-6pack", checked: '2026-10',
  },
  'feeding-tongs-soft-tip': {
    label: "Short soft-tipped feeding tongs",
    spec: "",
    low: 5, high: 15, product: "feeding-tongs-short-soft-tip-4pack", checked: '2026-10',
  },
  'betta-fish-5-gallon-plus-tank': {
    label: "5-gallon-plus tank with a tight-fitting lid and a light, often sold together as a kit",
    spec: "",
    low: 30, high: 100, product: "betta-tank-5-gallon-starter-kit", checked: '2026-10',
  },
  'betta-fish-adjustable-submersible-heater-15': {
    label: "Adjustable submersible heater, 15 to 25 watts for 5 gallons",
    spec: "",
    low: 15, high: 30, product: "betta-heater-hygger-25w", checked: '2026-10',
  },
  'betta-fish-small-air-pump-airline': {
    label: "Small air pump with airline and a check valve, to run the sponge filter",
    spec: "",
    low: 10, high: 15, product: "air-pump-hygger-mini-2-20gal", checked: '2026-10',
  },
  'betta-fish-decor-smooth-hide-cave': {
    label: "Decor: a smooth hide cave, live or soft silk plants, and a resting spot near the surface",
    spec: "",
    low: 10, high: 50, product: "hide-cave-aquarium-decoration", checked: '2026-10',
  },
  'betta-fish-substrate-sand-smooth-gravel': {
    label: "Substrate: sand or smooth gravel",
    spec: "",
    low: 10, high: 20, product: "betta-substrate-caribsea-freshwater-sand", checked: '2026-10',
  },
  'betta-fish-water-conditioner-16-ounce': {
    label: "Water conditioner, a 16-ounce bottle",
    spec: "",
    low: 5, high: 15, product: "api-tap-water-conditioner", checked: '2026-10',
  },
  'betta-fish-small-gravel-vacuum-sized': {
    label: "Small gravel vacuum sized for the tank",
    spec: "",
    low: 10, high: 10, product: null, checked: '2026-10',
  },
  'betta-fish-soft-fine-mesh-net': {
    label: "Soft fine-mesh net, with any clean cup for transfers",
    spec: "",
    low: 5, high: 5, product: "net-aquatop-5in-fine-mesh", checked: '2026-10',
  },
  'betta-fish-supply-betta-specific-pellets': {
    label: "First supply of betta-specific pellets",
    spec: "",
    low: 5, high: 15, product: "betta-food-hikari-bio-gold", checked: '2026-10',
  },
  'betta-fish-supply-freeze-dried-bloodworms': {
    label: "First supply of freeze-dried bloodworms for variety",
    spec: "",
    low: 15, high: 15, product: "freeze-dried-bloodworms-omega-one", checked: '2026-10',
  },
  'goldfish-hang-on-back-filter': {
    label: "Hang-on-back filter moving at least 200 gallons an hour, 10 turnovers of the 20-gallon minimum",
    spec: "",
    low: 50, high: 85, product: "hob-filter-aquaclear-70", checked: '2026-10',
  },
  'goldfish-adjustable-50-watt-heater': {
    label: "Adjustable 50-watt heater rated for up to 20 gallons, optional, only if the room falls below 65\u00b0F",
    spec: "",
    low: 15, high: 40, product: "goldfish-heater-aqueon-50w-adjustable", checked: '2026-10',
  },
  'goldfish-tight-fitting-glass-lid': {
    label: "Tight-fitting glass lid, since goldfish jump",
    spec: "",
    low: 25, high: 30, product: "glass-lid-aqueon-versa-top-30in", checked: '2026-10',
  },
  'goldfish-decor-two-hardy-live': {
    label: "Decor: two hardy live plants such as anubias or java fern, and one smooth piece of driftwood to tie them to",
    spec: "",
    low: 35, high: 65, product: "aquarium-plant-anubias-nana-potted", checked: '2026-10',
  },
  'goldfish-gravel-vacuum-sized-20': {
    label: "Gravel vacuum sized for 20 to 55 gallon tanks",
    spec: "",
    low: 20, high: 25, product: "gravel-vac-python-pro-clean-large", checked: '2026-10',
  },
  'goldfish-two-5-gallon-buckets': {
    label: "Two 5-gallon buckets used only for the tank",
    spec: "",
    low: 10, high: 15, product: null, checked: '2026-10',
  },
  'goldfish-soft-fine-mesh-net': {
    label: "Soft, fine-mesh net and a small transfer bucket",
    spec: "",
    low: 5, high: 15, product: null, checked: '2026-10',
  },
  'goldfish-bare-10-gallon-tank': {
    label: "Bare 10-gallon tank for quarantine, with no substrate or decor",
    spec: "",
    low: 15, high: 30, product: "tank-10-gallon", checked: '2026-10',
  },
  'goldfish-supply-sinking-goldfish-pellets': {
    label: "First supply of sinking goldfish pellets",
    spec: "",
    low: 5, high: 15, product: null, checked: '2026-10',
  },
  'goldfish-supply-goldfish-gel-food': {
    label: "First supply of goldfish gel food for variety",
    spec: "",
    low: 15, high: 25, product: "goldfish-gel-food-repashy-super-gold", checked: '2026-10',
  },
  'angelfish-55-gallon-tank-stand': {
    label: "55-gallon tank and stand (or a 29-gallon tall to start)",
    spec: "",
    low: 290, high: 400, product: "angelfish-tank-tetra-55-gallon", checked: '2026-10',
  },
  'angelfish-aquarium-heater': {
    label: "Aquarium heater",
    spec: "",
    low: 15, high: 35, product: "submersible-aquarium-heater", checked: '2026-10',
  },
  'angelfish-substrate-sand-smooth-gravel': {
    label: "Substrate (sand or smooth gravel)",
    spec: "",
    low: 10, high: 30, product: "betta-substrate-caribsea-freshwater-sand", checked: '2026-10',
  },
  'angelfish-driftwood-tall-plants': {
    label: "Driftwood and tall plants",
    spec: "",
    low: 10, high: 35, product: "driftwood", checked: '2026-10',
  },
  'angelfish-dense-live-silk-plants': {
    label: "Dense live or silk plants",
    spec: "",
    low: 15, high: 60, product: "aquarium-plant-anubias-nana-potted", checked: '2026-10',
  },
  'bristlenose-pleco-20-gallon-long-tank': {
    label: "20 gallon long tank (minimum)",
    spec: "",
    low: 35, high: 80, product: "tank-20-gallon-long", checked: '2026-10',
  },
  'cardinal-tetra-10-20-gallon-tank': {
    label: "10-20 gallon tank",
    spec: "",
    low: 15, high: 150, product: "tank-10-gallon", checked: '2026-10',
  },
  'discus-55-gallon-tank-75': {
    label: "55-gallon tank (or 75-gallon-plus for a larger group)",
    spec: "",
    low: 100, high: 310, product: "angelfish-tank-tetra-55-gallon", checked: '2026-10',
  },
  'discus-canister-filter-sized-well': {
    label: "Canister filter, sized well above the tank's actual volume",
    spec: "",
    low: 150, high: 320, product: "canister-filter-large", checked: '2026-10',
  },
  'guppy-10-gallon-tank': {
    label: "10+ gallon tank",
    spec: "",
    low: 15, high: 80, product: "tank-10-gallon", checked: '2026-10',
  },
  'guppy-aquarium-heater': {
    label: "Aquarium heater",
    spec: "",
    low: 15, high: 30, product: "submersible-aquarium-heater", checked: '2026-10',
  },
  'guppy-gentle-filter': {
    label: "Gentle filter",
    spec: "",
    low: 5, high: 25, product: "sponge-filter", checked: '2026-10',
  },
  'guppy-dense-live-silk-plants': {
    label: "Dense live or silk plants",
    spec: "",
    low: 15, high: 25, product: "aquarium-plant-anubias-nana-potted", checked: '2026-10',
  },
  'koi-1-000-gallon-pond': {
    label: "EPDM pond liner, 15x20 ft",
    spec: "",
    low: 180, high: 250, product: "pond-liner-firestone-epdm-15x20", checked: '2026-10',
  },
  'koi-pond-filtration-system-uv': {
    label: "Pond filtration system + UV clarifier",
    spec: "",
    low: 150, high: 800, product: "pond-filter-totalpond-uv-clarifier", checked: '2026-10',
  },
  'koi-aeration-waterfall-pump': {
    label: "Aeration or waterfall pump",
    spec: "",
    low: 80, high: 250, product: "pond-aerator-aquascape-pond-air-2", checked: '2026-10',
  },
  'koi-predator-netting': {
    label: "Predator netting",
    spec: "",
    low: 15, high: 150, product: "pond-netting-alpinereach-15x20", checked: '2026-10',
  },
  'molly-20-gallon-tank': {
    label: "20-gallon tank",
    spec: "",
    low: 35, high: 150, product: "tank-20-gallon-long", checked: '2026-10',
  },
  'molly-aquarium-salt-optional-long': {
    label: "Aquarium salt (optional, long-lasting)",
    spec: "",
    low: 20, high: 25, product: "aquarium-salt-api-33oz", checked: '2026-10',
  },
  'neon-tetra-gentle-filter': {
    label: "Gentle filter",
    spec: "",
    low: 5, high: 20, product: "sponge-filter", checked: '2026-10',
  },
  'neon-tetra-dense-live-silk-plants': {
    label: "Dense live or silk plants",
    spec: "",
    low: 15, high: 30, product: "aquarium-plant-anubias-nana-potted", checked: '2026-10',
  },
  'oscar-fish-canister-filter': {
    label: "Canister filter",
    spec: "",
    low: 225, high: 350, product: "oscar-fish-canister-filter-fluval-fx4", checked: '2026-10',
  },
  'oscar-fish-75-gallon-glass-aquarium': {
    label: "75-gallon glass aquarium, tank only",
    spec: "",
    low: 230, high: 300, product: null, checked: '2026-10',
  },
  'zebra-danio-10-20-gallon-tank': {
    label: "10-20 gallon tank",
    spec: "",
    low: 15, high: 60, product: "tank-10-gallon", checked: '2026-10',
  },
  'water-test-kit-liquid': {
    label: "Liquid-reagent water test kit",
    spec: "ammonia, nitrite, nitrate, pH",
    low: 25, high: 40, product: "water-test-kit", checked: '2026-10',
  },
  'sand-caribsea-10lb': {
    label: "Aquarium sand, 10 lb bag",
    spec: "",
    low: 10, high: 20, product: "betta-substrate-caribsea-freshwater-sand", checked: '2026-10',
  },
  // 2026-10
  'glass-lid-48in-versa-top': {
    label: "Hinged glass lid, 48 in",
    spec: "fits a 55 gallon",
    low: 80, high: 85, product: "glass-lid-aqueon-versa-top-48in", checked: '2026-10',
  },
  // 2026-10
  'glass-canopy-48x18': {
    label: "Glass canopy set, 48x18 in",
    spec: "fits a 75 gallon",
    low: 85, high: 90, product: "glass-lid-48x18-center-brace", checked: '2026-10',
  },
  'glass-lid-10-gallon': {
    label: "Glass canopy for a 10 gallon tank",
    spec: "20x10 in",
    low: 35, high: 40, product: "glass-canopy-h2pro-20in", checked: '2026-10',
  },
  'fish-food-sinking-wafers': {
    label: "First supply of sinking wafers",
    spec: "",
    low: 5, high: 15, product: "corydoras-hikari-sinking-wafers", checked: '2026-10',
  },
  'fish-food-micro-pellets': {
    label: "First supply of micro pellets",
    spec: "",
    low: 5, high: 10, product: "neon-tetra-food-hikari-micro-pellets", checked: '2026-10',
  },
  'fish-food-guppy': {
    label: "First supply of guppy food",
    spec: "",
    low: 5, high: 10, product: "guppy-food-hikari-tropical-fancy-guppy", checked: '2026-10',
  },
  'fish-food-cichlid-pellets': {
    label: "First supply of cichlid pellets",
    spec: "",
    low: 20, high: 30, product: "oscar-fish-hikari-cichlid-gold-pellets", checked: '2026-10',
  },
  // 2026-10
  'fish-food-discus': {
    label: "First supply of discus food",
    spec: "2.82 oz",
    low: 10, high: 15, product: "discus-food-hikari-bio-gold", checked: '2026-10',
  },
  // 2026-10
  'fish-food-veggie-flakes': {
    label: "First supply of vegetable flakes",
    spec: "2.2 oz",
    low: 15, high: 20, product: "fish-food-omega-one-veggie-kelp-flakes", checked: '2026-10',
  },
  'pond-bacteria-startup': {
    label: "Pond beneficial bacteria",
    spec: "",
    low: 15, high: 25, product: "pond-beneficial-bacteria-aquascape", checked: '2026-10',
  },
  'emperor-scorpion-10-20-gallon-enclosure': {
    label: "10-20 gallon enclosure with secure lid",
    spec: "",
    low: 40, high: 80, product: "scorpion-enclosure-10gal-invertebrate", checked: '2026-10',
  },
  'emperor-scorpion-cork-bark-slabs-flat': {
    label: "Cork bark slabs and flat stones",
    spec: "",
    low: 15, high: 40, product: "cork-bark-round-small", checked: '2026-10',
  },
  'emperor-scorpion-heat-mat-thermostat': {
    label: "Heat mat with thermostat",
    spec: "",
    low: 25, high: 50, product: "under-tank-heat-mat-thermostat-kit", checked: '2026-10',
  },
  'emperor-scorpion-uv-black-light-optional': {
    label: "UV/black light (optional)",
    spec: "",
    low: 15, high: 45, product: "uv-blacklight-uvbeast-v3", checked: '2026-10',
  },
  'hermit-crab-20-gallon-long-tank': {
    label: "20-gallon long tank for a pair (at least 10 gallons per crab; check the dimensions before you buy)",
    spec: "",
    low: 35, high: 60, product: "tank-20-gallon-long", checked: '2026-10',
  },
  'hermit-crab-substrate-sand-coconut-fiber': {
    label: "Substrate (sand and coconut fiber)",
    spec: "",
    low: 10, high: 30, product: "substrate-hermit-crab-flukers-sand-coco", checked: '2026-10',
  },
  'hermit-crab-extra-shells-dishes-hides': {
    label: "Extra shells, dishes, hides, dechlorinator, marine salt",
    spec: "",
    low: 25, high: 60, product: "hermit-crab-shells-natural-12pk", checked: '2026-10',
  },
  'jumping-spider-small-vertical-arboreal-enclosure': {
    label: "Small vertical, arboreal enclosure",
    spec: "",
    low: 45, high: 90, product: "mantis-enclosure-exo-terra-nano-tall", checked: '2026-10',
  },
  'jumping-spider-coconut-fiber-substrate': {
    label: "Coconut fiber substrate",
    spec: "",
    low: 10, high: 40, product: "substrate-zoo-med-eco-earth-coconut-fiber", checked: '2026-10',
  },
  'jumping-spider-artificial-plants-mini-cork': {
    label: "Artificial plants or mini cork bark for climbing and web anchoring",
    spec: "",
    low: 5, high: 15, product: "cork-bark-mini-flats-jumping-spider", checked: '2026-10',
  },
  'praying-mantis-feeding-tongs-fine-tip': {
    label: "Feeding tongs (fine-tip precision, optional)",
    spec: "",
    low: 10, high: 20, product: "feeding-tongs-entomology-forceps-fine-tip", checked: '2026-10',
  },
  'tarantula-enclosure-secure-acrylic-lid': {
    label: "Enclosure with a secure acrylic lid with drilled holes, never mesh: low and wide for a ground-dweller, about 20 by 10 by 10 in and under 12 in tall, or taller with cross-ventilation for a pink toe",
    spec: "",
    low: 20, high: 80, product: null, checked: '2026-10',
  },
  'tarantula-two-shallow-water-dishes': {
    label: "Two shallow water dishes, one kept as a spare",
    spec: "",
    low: 15, high: 30, product: "shallow-water-dish", checked: '2026-10',
  },
  'tarantula-vented-32-oz-deli': {
    label: "Vented 32 oz deli cups, for a catch cup and a spare (a stiff card from home seals the cup)",
    spec: "",
    low: 5, high: 20, product: "deli-cups-dubia-farms-32oz-vented", checked: '2026-10',
  },
  'tarantula-safety-glasses-rehousing-substrate': {
    label: "Safety glasses, for rehousing and substrate changes",
    spec: "",
    low: 5, high: 15, product: "safety-glasses-dewalt-concealer-clear", checked: '2026-10',
  },
  'tarantula-supply-feeder-insects-crickets': {
    label: "First supply of feeder insects, crickets or dubia roaches",
    spec: "",
    low: 15, high: 35, product: "dubia-roaches-bag", checked: '2026-10',
  },
  'tarantula-bag-gut-load-food': {
    label: "First bag of gut-load food for the feeders",
    spec: "",
    low: 5, high: 10, product: "gutload-flukers-high-calcium-dubia-roach-diet-7oz", checked: '2026-10',
  },
  'gh-kh-test-kit': {
    label: "GH and KH test kit",
    spec: "",
    low: 10, high: 15, product: "test-kit-api-gh-kh", checked: '2026-10',
  },
  // 2026-10
  'water-tubes-floral-25pk': {
    label: "Floral water tubes with caps, 25 pack",
    spec: "",
    low: 10, high: 15, product: "water-tubes-royal-imports-25pack", checked: '2026-10',
  },
  'petroleum-jelly': {
    label: "Plain petroleum jelly",
    spec: "7.5 oz",
    low: 5, high: 5, product: "petroleum-jelly-amazon-basics", checked: '2026-10',
  },
  'millipede-substrate-milli-mix': {
    label: "Millipede substrate, 2 quart bag",
    spec: "",
    low: 15, high: 25, product: "giant-millipede-organic-topsoil-substrate", checked: '2026-10',
  },
  'screen-lid-20-long': {
    label: "Screen lid for a 20 gallon long",
    spec: "30x12 in",
    low: 20, high: 45, product: "screen-cover-zilla-30x12", checked: '2026-10',
  },
  'chinchilla-multi-level-cage-solid': {
    label: "Multi-level cage with solid floors",
    spec: "",
    low: 150, high: 400, product: "chinchilla-cage-midwest-critter-nation-double", checked: '2026-10',
  },
  'chinchilla-dust-bath-house-plus': {
    label: "Dust bath house (plus dust)",
    spec: "",
    low: 15, high: 50, product: "chinchilla-dust-bath-house", checked: '2026-10',
  },
  'chinchilla-exercise-wheel-15-larger': {
    label: "Exercise wheel (15\" or larger)",
    spec: "",
    low: 30, high: 120, product: "exercise-wheel-chinchilla", checked: '2026-10',
  },
  'chinchilla-ledges-hides-water-bottle': {
    label: "Ledges, hides, water bottle, dish, chews, and bedding",
    spec: "",
    low: 75, high: 150, product: null, checked: '2026-10',
  },
  'degu-tall-multi-level-cage': {
    label: "Tall multi-level cage, 28x18x28 in minimum for a pair",
    spec: "",
    low: 280, high: 375, product: "chinchilla-cage-midwest-critter-nation-double", checked: '2026-10',
  },
  'degu-12-14-solid-exercise': {
    label: "12-14 in solid exercise wheel",
    spec: "",
    low: 30, high: 75, product: "exercise-wheel-chinchilla", checked: '2026-10',
  },
  'degu-dust-bath-house': {
    label: "Dust bath house",
    spec: "",
    low: 15, high: 30, product: "chinchilla-dust-bath-house", checked: '2026-10',
  },
  'degu-hideouts-tunnels': {
    label: "Hideouts and tunnels",
    spec: "",
    low: 5, high: 30, product: "small-pet-hideout-igloo", checked: '2026-10',
  },
  'degu-water-bottle-food-dishes': {
    label: "Water bottle and food dishes",
    spec: "",
    low: 5, high: 15, product: "small-mammal-bowl-kaytee-vege-t-bowl", checked: '2026-10',
  },
  'ferret-30x24x48-multi-level-cage': {
    label: "30x24x48 in multi-level cage",
    spec: "",
    low: 100, high: 360, product: "chinchilla-cage-midwest-critter-nation-double", checked: '2026-10',
  },
  'ferret-fleece-hammocks-sleep-sacks': {
    label: "Fleece hammocks and sleep sacks",
    spec: "",
    low: 10, high: 40, product: "ferret-hammock-niteangel-nap-sack", checked: '2026-10',
  },
  'ferret-litter-box': {
    label: "Litter box",
    spec: "",
    low: 10, high: 30, product: "litter-box", checked: '2026-10',
  },
  'ferret-toys-tunnels-dig-boxes': {
    label: "Toys, tunnels, and dig boxes",
    spec: "",
    low: 25, high: 60, product: "small-mammal-play-pack-seagrass", checked: '2026-10',
  },
  'ferret-spay-neuter-initial-vaccinations': {
    label: "Spay/neuter + initial vaccinations (if needed)",
    spec: "",
    low: 150, high: 300, product: null, checked: '2026-10',
  },
  'flying-squirrel-tall-aviary-style-cage': {
    label: "Tall aviary-style cage, 24x24x36 in minimum, bars no wider than 1/2 in",
    spec: "",
    low: 120, high: 300, product: null, checked: '2026-10',
  },
  'flying-squirrel-solid-axle-free-exercise': {
    label: "Solid, axle-free exercise wheel (12 in)",
    spec: "",
    low: 30, high: 60, product: "hedgehog-wheel-exotic-nutrition-silent-runner-12in-wide", checked: '2026-10',
  },
  'flying-squirrel-multiple-sleeping-pouches-nest': {
    label: "Multiple sleeping pouches or a nest box",
    spec: "",
    low: 10, high: 50, product: "ferret-hammock-niteangel-nap-sack", checked: '2026-10',
  },
  'flying-squirrel-branches-ropes-climbing-structure': {
    label: "Branches, ropes, and climbing structure",
    spec: "",
    low: 15, high: 50, product: "climbing-branch-mopani-wood", checked: '2026-10',
  },
  'gerbil-secure-mesh-lid': {
    label: "Secure mesh lid",
    spec: "",
    low: 35, high: 45, product: "screen-cover-zilla-30x12", checked: '2026-10',
  },
  'gerbil-solid-exercise-wheel-10': {
    label: "Solid exercise wheel (10-12 in)",
    spec: "",
    low: 20, high: 40, product: "hamster-wheel-niteangel-super-silent-10in", checked: '2026-10',
  },
  'guinea-pig-c-c-cage-similar': {
    label: "C&C cage or similar, sized for a pair",
    spec: "",
    low: 100, high: 140, product: "cc-cage-guinea-pig", checked: '2026-10',
  },
  'guinea-pig-bag-paper-bedding': {
    label: "First bag of paper bedding",
    spec: "",
    low: 15, high: 15, product: "bedding-kaytee-clean-cozy-white", checked: '2026-10',
  },
  'guinea-pig-hay-rack': {
    label: "Hay rack",
    spec: "",
    low: 5, high: 15, product: "hay-manger-kaytee-large", checked: '2026-10',
  },
  'guinea-pig-supply-grass-hay': {
    label: "First supply of grass hay",
    spec: "",
    low: 15, high: 30, product: "timothy-hay-small-pets", checked: '2026-10',
  },
  'guinea-pig-bag-vitamin-c-fortified': {
    label: "First bag of vitamin-C-fortified guinea pig pellets, 5 lb",
    spec: "",
    low: 10, high: 20, product: null, checked: '2026-10',
  },
  'guinea-pig-bottle-vitamin-c-supplement': {
    label: "First bottle of vitamin C supplement, a backup to fresh food",
    spec: "",
    low: 5, high: 15, product: "guinea-pig-vitamin-c-supplement", checked: '2026-10',
  },
  'guinea-pig-heavy-food-dish': {
    label: "Heavy food dish",
    spec: "",
    low: 5, high: 10, product: "small-mammal-bowl-kaytee-vege-t-bowl", checked: '2026-10',
  },
  'guinea-pig-water-bottle': {
    label: "Water bottle",
    spec: "",
    low: 15, high: 15, product: "water-bottle-choco-nose-no-drip", checked: '2026-10',
  },
  'guinea-pig-wooden-hideout-window': {
    label: "Wooden hideout with a window",
    spec: "",
    low: 25, high: 30, product: "guinea-pig-hideout-niteangel-wood-house", checked: '2026-10',
  },
  'guinea-pig-second-hide-seagrass-tunnel': {
    label: "A second hide and a seagrass tunnel, so neither of a pair is cornered",
    spec: "",
    low: 40, high: 60, product: "small-mammal-play-pack-seagrass", checked: '2026-10',
  },
  'guinea-pig-safe-chew-toys-more': {
    label: "Safe chew toys, more than one in a shared cage",
    spec: "",
    low: 10, high: 20, product: "chew-guinea-pig-natural-sticks", checked: '2026-10',
  },
  'guinea-pig-hard-sided-carrier': {
    label: "Hard-sided carrier",
    spec: "",
    low: 30, high: 35, product: "rabbit-carrier-amazon-basics-top-load", checked: '2026-10',
  },
  'guinea-pig-kitchen-scale-reads-grams': {
    label: "Kitchen scale that reads in grams",
    spec: "",
    low: 5, high: 15, product: "gram-scale-etekcity-kitchen", checked: '2026-10',
  },
  'hamster-dwarf-hamster-russian-winter': {
    label: "Dwarf hamster (Russian, Winter White, Roborovski, Chinese)",
    spec: "",
    low: 15, high: 25, product: null, checked: '2026-10',
  },
  'hamster-enclosure-syrian-700-775': {
    label: "Enclosure for a Syrian: 700 to 775 sq in of unbroken floor, a bin, a wire cage with bars no wider than 1/2 in, a glass tank, or a 47-inch acrylic-and-metal cage (about 1,110 sq in; check the floor area before you buy)",
    spec: "",
    low: 30, high: 250, product: "hamster-cage-bucatstate-3-0-47in", checked: '2026-10',
  },
  'hamster-enclosure-dwarf-40-gallon': {
    label: "Enclosure for a dwarf: a 40-gallon breeder tank (36 by 18 in, about 650 sq in) or a bin with the same floor",
    spec: "",
    low: 30, high: 150, product: "tank-aqueon-40-breeder", checked: '2026-10',
  },
  'hamster-solid-exercise-wheel-syrian': {
    label: "Solid exercise wheel for a Syrian, 8 to 11 in",
    spec: "",
    low: 25, high: 40, product: "hamster-wheel-niteangel-super-silent-10in", checked: '2026-10',
  },
  'hamster-solid-exercise-wheel-dwarf': {
    label: "Solid exercise wheel for a dwarf, 6 to 8 in",
    spec: "",
    low: 15, high: 20, product: "wheel-kaytee-silent-spinner-6-5in", checked: '2026-10',
  },
  'hamster-load-paper-based-bedding': {
    label: "First load of paper-based bedding, 6 inches or more",
    spec: "",
    low: 15, high: 35, product: "small-pet-paper-bedding", checked: '2026-10',
  },
  'hamster-hideout': {
    label: "Hideout",
    spec: "",
    low: 10, high: 30, product: "small-pet-hideout-igloo", checked: '2026-10',
  },
  'hamster-burrow-tunnel-connected-cover': {
    label: "A burrow tunnel for connected cover",
    spec: "",
    low: 5, high: 15, product: "burrow-tunnel-composable", checked: '2026-10',
  },
  'hamster-dust-free-non-clumping': {
    label: "Dust-free, non-clumping bath sand, in a heavy dish",
    spec: "",
    low: 20, high: 30, product: "bath-sand-niteangel-desert", checked: '2026-10',
  },
  'hamster-water-bottle-valveless-sipper': {
    label: "Water bottle with a valveless sipper tube",
    spec: "",
    low: 5, high: 10, product: null, checked: '2026-10',
  },
  'hamster-bag-hamster-pellets': {
    label: "First bag of hamster pellets",
    spec: "",
    low: 5, high: 15, product: "hamster-food-oxbow-garden-select", checked: '2026-10',
  },
  'hamster-small-bag-timothy-hay': {
    label: "First small bag of timothy hay, for chewing",
    spec: "",
    low: 5, high: 10, product: null, checked: '2026-10',
  },
  'hamster-small-hard-sided-ventilated': {
    label: "Small hard-sided, ventilated carrier",
    spec: "",
    low: 10, high: 25, product: null, checked: '2026-10',
  },
  'hedgehog-2x3-ft-minimum-enclosure': {
    label: "2x3 ft minimum enclosure (bin or modified cage; check the floor dimensions before you buy)",
    spec: "",
    low: 60, high: 150, product: null, checked: '2026-10',
  },
  'hedgehog-solid-exercise-wheel-10': {
    label: "Solid exercise wheel (10.5-12 in)",
    spec: "",
    low: 30, high: 50, product: "hedgehog-wheel-exotic-nutrition-silent-runner-12in-wide", checked: '2026-10',
  },
  'hedgehog-supplemental-heat-source': {
    label: "Supplemental heat source",
    spec: "",
    low: 20, high: 60, product: "ceramic-heat-emitter-zoo-med-repticare-150w", checked: '2026-10',
  },
  'hedgehog-nail-clippers': {
    label: "Nail clippers",
    spec: "",
    low: 5, high: 15, product: "nail-clippers", checked: '2026-10',
  },
  'mouse-cage-sized-spaced-mice': {
    label: "Cage sized and spaced for mice (18x18x10 in minimum, solid floor)",
    spec: "",
    low: 35, high: 90, product: "mouse-cage-ferplast-favola", checked: '2026-10',
  },
  'mouse-smooth-mouse-sized-exercise': {
    label: "Smooth, mouse-sized exercise wheel (6-8 in)",
    spec: "",
    low: 10, high: 25, product: "wheel-kaytee-silent-spinner-6-5in", checked: '2026-10',
  },
  'mouse-paper-based-bedding': {
    label: "Paper-based bedding",
    spec: "",
    low: 15, high: 30, product: "small-pet-paper-bedding", checked: '2026-10',
  },
  'rat-multi-level-wire-cage': {
    label: "Multi-level wire cage with solid ramped shelves",
    spec: "",
    low: 130, high: 360, product: "chinchilla-cage-midwest-critter-nation-double", checked: '2026-10',
  },
  'rat-hammocks-rats-genuinely-sleep': {
    label: "Hammocks (rats genuinely sleep in these)",
    spec: "",
    low: 5, high: 20, product: "ferret-hammock-niteangel-nap-sack", checked: '2026-10',
  },
  'rat-solid-surface-exercise-wheel': {
    label: "Solid-surface exercise wheel, 12 in or larger",
    spec: "",
    low: 25, high: 45, product: "rat-wheel-exotic-nutrition-silent-runner-12in-regular", checked: '2026-10',
  },
  'rat-chew-toys': {
    label: "Chew toys",
    spec: "",
    low: 5, high: 25, product: "chew-rabbit-bamboo-sticks", checked: '2026-10',
  },
  'sugar-glider-tall-cage-sized-genuinely': {
    label: "Tall cage, sized for a genuinely vertical, climbing pair",
    spec: "",
    low: 200, high: 400, product: "chinchilla-cage-midwest-critter-nation-double", checked: '2026-10',
  },
  'sugar-glider-accessories-hides-glider-safe': {
    label: "Accessories: hides, a glider-safe wheel, dishes, enrichment",
    spec: "",
    low: 50, high: 150, product: null, checked: '2026-10',
  },
  'rabbit-foldable-metal-exercise-pen': {
    label: "Foldable metal exercise pen, 4 by 4 feet or bigger",
    spec: "",
    low: 35, high: 100, product: "rabbit-exercise-pen-midwest-folding-30in", checked: '2026-10',
  },
  'rabbit-washable-flooring-pen-vinyl': {
    label: "Washable flooring for the pen: vinyl, a washable rug, or fleece",
    spec: "",
    low: 10, high: 35, product: null, checked: '2026-10',
  },
  'rabbit-waterproof-tarp-under-pen': {
    label: "Waterproof tarp under the pen",
    spec: "",
    low: 10, high: 25, product: "tarp-xpose-6x8-10mil", checked: '2026-10',
  },
  'rabbit-large-litter-box-cat': {
    label: "Large litter box, cat-litter-box style",
    spec: "",
    low: 35, high: 40, product: "rabbit-litter-pan-ware-jumbo", checked: '2026-10',
  },
  'rabbit-bag-paper-pellet-litter': {
    label: "First bag of paper pellet litter",
    spec: "",
    low: 15, high: 25, product: "litter-so-phresh-paper-pellets-20lb", checked: '2026-10',
  },
  'rabbit-bag-plain-timothy-based': {
    label: "First bag of plain timothy-based pellets",
    spec: "",
    low: 10, high: 20, product: "rabbit-pellet-food-oxbow-garden-select", checked: '2026-10',
  },
  'rabbit-measuring-cup-pellets': {
    label: "Measuring cup for the pellets",
    spec: "",
    low: 5, high: 5, product: null, checked: '2026-10',
  },
  'rabbit-heavy-food-water-dishes': {
    label: "Heavy food and water dishes, two",
    spec: "",
    low: 5, high: 20, product: "small-mammal-bowl-kaytee-vege-t-bowl", checked: '2026-10',
  },
  'rabbit-chew-proof-glass-water': {
    label: "Chew-proof glass water bottle, for a rabbit whose chin gets sore from the bowl",
    spec: "",
    low: 5, high: 15, product: "water-bottle-lixit-glass-16oz", checked: '2026-10',
  },
  'rabbit-hide-top-sit-on': {
    label: "A hide with a top to sit on, or a cardboard castle",
    spec: "",
    low: 10, high: 45, product: null, checked: '2026-10',
  },
  'rabbit-dig-box-storage-tub': {
    label: "Dig box: a storage tub filled with shredded paper, hay or soil",
    spec: "",
    low: 10, high: 15, product: "storage-tub-sterilite-56qt", checked: '2026-10',
  },
  'rabbit-chew-material-bamboo-sticks': {
    label: "Chew material: bamboo sticks, untreated willow, plain cardboard",
    spec: "",
    low: 15, high: 25, product: "chew-rabbit-bamboo-sticks", checked: '2026-10',
  },
  'rabbit-brush-molts': {
    label: "Brush for molts",
    spec: "",
    low: 5, high: 10, product: null, checked: '2026-10',
  },
  'rabbit-cord-protector-tubing-bunny': {
    label: "Cord protector tubing for bunny-proofing",
    spec: "",
    low: 5, high: 15, product: "cord-protector-sungrow-20ft", checked: '2026-10',
  },
  'mineral-chew-blocks': {
    label: "Mineral and lava chew blocks",
    spec: "",
    low: 10, high: 20, product: "chew-chinchilla-mineral-lava-blocks", checked: '2026-10',
  },
  'chinchilla-pellets-first': {
    label: "First bag of chinchilla pellets",
    spec: "",
    low: 10, high: 20, product: "chinchilla-pellets-oxbow-essentials", checked: '2026-10',
  },
  'ferret-food-first': {
    label: "First bag of ferret kibble",
    spec: "",
    low: 20, high: 30, product: "ferret-food-marshall-premium-diet", checked: '2026-10',
  },
  'bonding-pouch': {
    label: "Bonding or sleeping pouch",
    spec: "",
    low: 10, high: 20, product: "sugar-glider-bonding-pouch", checked: '2026-10',
  },
  'bath-sand-small': {
    label: "Bath sand",
    spec: "",
    low: 10, high: 15, product: "bath-sand-supreme-science-selective", checked: '2026-10',
  },
  'sugar-glider-wheel': {
    label: "Glider-safe exercise wheel",
    spec: "",
    low: 45, high: 65, product: "exercise-wheel-sugar-glider", checked: '2026-10',
  },
  'sugar-glider-diet-first': {
    label: "First supply of a formulated glider diet",
    spec: "",
    low: 15, high: 20, product: "sugar-glider-diet-exotic-nutrition-glider-complete", checked: '2026-10',
  },
  'sugar-glider-calcium-vitamin': {
    label: "Glider calcium and multivitamin",
    spec: "",
    low: 15, high: 25, product: "calcium-sugar-glider-vitamin-combo", checked: '2026-10',
  },
  'tokay-terrarium-18x18x36': {
    label: "Front-opening glass terrarium, 18x18x36 in",
    spec: "",
    low: 285, high: 315, product: "tokay-gecko-terrarium-exo-terra-18x18x36", checked: '2026-10',
  },
  'boa-pvc-6x2x2': {
    label: "PVC enclosure, 6x2x2 ft",
    spec: "180 gallon",
    low: 500, high: 530, product: "boa-enclosure-reptile-habitats-6x2x2-pvc", checked: '2026-10',
  },
  'habba-hut-medium': {
    label: "Medium cave hide",
    spec: "",
    low: 10, high: 20, product: "hide-zoomed-habba-hut-medium", checked: '2026-10',
  },
  'thermo-hygrometer-exo-terra-led': {
    label: "LED thermometer and hygrometer bundle",
    spec: "",
    low: 25, high: 40, product: "thermometer-hygrometer-exo-terra-led-bundle", checked: '2026-10',
  },
  // Unlinked on purpose: the rosy boa hub wants a smooth lid, not the coarse Zilla screen the old table linked.
  'smooth-lid-20-long': {
    label: "Smooth, well-fitted lid for a 20 gallon long",
    spec: "30x12 in",
    low: 35, high: 45, product: null, checked: '2026-10',
  },
  // Garden-store prices checked 2026-10-06: topsoil about $2.70 to $3.45 per cu ft, cypress mulch about $1.85 per cu ft.
  'substrate-diy-topsoil-cypress-8x4-deep': {
    label: "Deep moisture-retentive DIY mix of organic topsoil and cypress mulch",
    spec: "12 to 18 in over 8 x 4 ft, 32 to 48 cu ft",
    low: 60, high: 170, product: null, checked: '2026-10',
  },
  // Garden-store prices checked 2026-10-06: topsoil about $2.70 to $3.45 per cu ft, play sand about $10 per cu ft (0.5 cu ft bags at $4.97).
  'substrate-diy-topsoil-sand-8x4-deep': {
    label: "Deep DIY mix of topsoil and play sand",
    spec: "12 to 24 in over 8 x 4 ft, 32 to 64 cu ft",
    low: 160, high: 450, product: null, checked: '2026-10',
  },
  // Three 0.5 cu ft bags of play sand ($15 to $20), one 0.75 cu ft bag of topsoil ($5) and four to five 10 lb bags of excavator clay ($14 each, Amazon 2026-10-06).
  'uromastyx-burrowing-mix-4x2': {
    label: "Burrowing mix of play sand, topsoil and excavator clay",
    spec: "4 in over 4 x 2 ft, 2.5 cu ft",
    low: 70, high: 95, product: "substrate-zoo-med-excavator-clay-10lb", checked: '2026-10',
  },
  'angelfish-led-36-48': {
    label: "Full spectrum aquarium LED, 36 to 48 in",
    spec: "27 W",
    low: 55, high: 60, product: "aquarium-led-nicrew-classicled-plus-36-48", checked: '2026-10',
  },
  // Garden-store price checked 2026-10-06, about $2 to $3.45 a bag.
  'topsoil-two-bags': {
    label: "Two bags of pesticide-free organic topsoil",
    spec: "2 x 0.75 cu ft",
    low: 5, high: 10, product: null, checked: '2026-10',
  },
  'humidifier-on-humidistat': {
    label: "Cool-mist humidifier on a humidistat",
    spec: "",
    low: 70, high: 80, product: "humidifier-everlasting-comfort-6l", checked: '2026-10',
  },
  // Three or four 0.75 cu ft bags of topsoil ($2 to $3.45 each) and three or four 0.5 cu ft bags of play sand ($4.97 each), garden-store prices checked 2026-10-06.
  'substrate-diy-arid-bioactive-4x2': {
    label: "Arid bioactive substrate, a DIY topsoil and play sand mix",
    spec: "4 to 6 in over 4 x 2 ft, 80 to 120 qt",
    low: 20, high: 35, product: null, checked: '2026-10',
  },
  'screen-lid-36x18-with-clips': {
    label: "Screen lid for a 36 x 18 in tank, with heavy-duty clips",
    spec: "",
    low: 60, high: 65, product: "screen-lid-zilla-36x18", checked: '2026-10',
  },
  'che-150w-and-dome': {
    label: "Ceramic heat emitter and a ceramic-socket dome",
    spec: "150 W",
    low: 35, high: 55, product: "ceramic-heat-emitter-zoo-med-repticare-150w", checked: '2026-10',
  },
  'hide-cave-xl': {
    label: "X-large cave hide",
    spec: "",
    low: 20, high: 35, product: "hide-exo-terra-reptile-cave-xl", checked: '2026-10',
  },
  // About four 0.75 cu ft bags of topsoil and three or four 0.5 cu ft bags of play sand, garden-store prices checked 2026-10-06.
  'substrate-diy-topsoil-sand-tortoise-table': {
    label: "Diggable DIY mix of organic topsoil and play sand, 60/40",
    spec: "6 in over a 4 x 2 ft table, about 4 cu ft",
    low: 25, high: 40, product: null, checked: '2026-10',
  },
  'uv-index-meter': {
    label: 'UV index meter',
    spec: 'Solarmeter 6.5R',
    low: 240, high: 265, product: 'uvi-meter-solarmeter-6-5r', checked: '2026-10',
  },
};
