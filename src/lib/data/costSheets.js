// One cost sheet per animal: which master items (costItems.js) its cost guide
// prices, and the handful of figures that are the animal's own.
//
//   animal      what the animal itself costs, [low, high]
//   monthly     the ongoing monthly figure the guide states, [low, high]
//   vetExam     a routine exam, [low, high]
//   necessities rows of the setup table; their sum IS the setup total
//   extras      rows of the extras table, never counted in the total
//
// A row is { item, text?, qty? }. `text` is the row as the reader sees it,
// with the linked words in [square brackets]; without it the row shows the
// item's label, linked whole. `qty` multiplies the item's price. A row may
// carry its own { low, high, why } only when the item's price genuinely does
// not fit this animal; scripts/check-cost-tables.mjs lists every such row.
//
// These figures reach the page through placeholders that are filled in at
// build time (src/lib/costs.js): %%setup:<id>%%, %%animal:<id>%%,
// %%monthly:<id>%%, %%vet:<id>%% and %%price:<item>%%. Never type a total
// by hand anywhere a placeholder can go.
export const COST_SHEETS = {
  'ackie-monitor': {
    animal: [150, 450],
    monthly: [40, 80],
    vetExam: [50, 100],
    necessities: [
      { item: 'enclosure-60x30x48', text: 'Enclosure at least 5 by 2.5 by 4 feet, custom or PVC (check the dimensions before you buy)' },
      { item: 'substrate-diy-topsoil-sand-60x30-deep', text: 'Deep burrowing substrate, a DIY topsoil and play sand mix 12 to 24 inches deep (bagged bioactive mixes cost several times more at this depth)' },
      { item: 'uvb-t5ho-12pct-36in-kit', text: 'Linear T5 HO 12% desert [UVB fixture] spanning roughly half the enclosure (check the length against your enclosure), tube included' },
      { item: 'basking-bulb-100w-2pack', text: '[Two 100 W basking bulbs], more wattage in a cold room' },
      { item: 'basking-fixture-dome-150w', qty: 2, text: 'Two [dome lamps] rated for at least 100 W, one for each bulb' },
      { item: 'thermostat-dimming', text: '[Dimming thermostat]' },
      { item: 'retes-stack-slate', text: '[Retes stack] (basking shelves or tiles)' },
      { item: 'hides-large-lizard', text: 'Hides' },
      { item: 'infrared-thermometer', text: '[Infrared thermometer gun]' },
      { item: 'calcium-plain-8oz', text: 'First supply of [plain calcium]' },
      { item: 'multivitamin-vitamin-a-3oz', text: 'First supply of a [multivitamin with true vitamin A]' },
      { item: 'kitchen-scale-grams', text: '[Kitchen scale that reads in grams] for weekly weights' },
    ],
    extras: [
      { item: 'daylight-led-16in', text: '[Bright daylight LED] beside the UVB (check the length against your enclosure)' },
      { item: 'puzzle-feeder-reptile-extraction', text: '[Extraction puzzle feeder]' },
      { item: 'clicker-target-stick', text: '[Clicker and target stick]' },
    ],
  },
  'african-grey-parrot': {
    animal: [1000, 4000],
    monthly: [50, 100],
    vetExam: [150, 300],
    necessities: [
      { item: 'cage-parrot-36x24x48-bars-075-1in', text: 'Cage at least 36 by 24 by 48 inches with bars 3/4 to 1 inch apart, powder-coated steel (check the dimensions and bar spacing before you buy)' },
      { item: 'perches-varied-large-parrot', text: 'Natural wood, rope and cement perches in varied diameters, sized for a large parrot' },
      { item: 'uvb-avian-compact-kit', text: '[Avian UVB lamp and fixture], mounted 12 to 18 inches from the perch' },
      { item: 'foraging-toys-large-parrot-set', text: '[Foraging toys built for a large parrot]' },
      { item: 'dish-stainless-bolt-on-30oz', qty: 2, text: 'Two [stainless bolt-on dishes], one for food and one for water' },
      { item: 'carrier-medium-large-parrot', text: 'Travel carrier sized for a grey, for vet visits' },
      { item: 'cage-cover-large', text: '[Breathable cage cover] for 10 to 12 hours of darkness (check it fits your cage)' },
      { item: 'mist-bottle', text: '[Fine mist spray bottle] for bathing' },
      { item: 'gram-scale-aviary-perch', text: '[Gram scale with a perch]' },
    ],
    extras: [
      { item: 'play-stand-large-parrot', text: '[Large parrot play stand] for the daily hours out of the cage' },
      { item: 'air-purifier-hepa-room', text: '[HEPA air purifier] for the powder down' },
    ],
  },
};
