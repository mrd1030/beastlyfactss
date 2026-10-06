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
      { item: 'basking-bulbs-100w-pair-with-fixtures', text: '[Two 100 W basking bulbs] and fixtures rated for them, more wattage in a cold room' },
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
};
