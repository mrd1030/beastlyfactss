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
  'uv-index-meter': {
    label: 'UV index meter',
    spec: 'Solarmeter 6.5R',
    low: 240, high: 265, product: 'uvi-meter-solarmeter-6-5r', checked: '2026-10',
  },
};
