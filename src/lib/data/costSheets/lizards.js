// Cost sheets for the lizard hubs (guides/lizards.js) (see ../costSheets.js for the row format).
export const lizardSheets = {
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
};
