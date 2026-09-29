// Critter Keeper: the bearded dragon's care rules. Every range and rule here
// comes from the site's own bearded dragon guides, so the game teaches what
// the guides say. If a guide changes, change it here too.

const blog = (slug) => `/blog/${slug}/`;

export const GUIDES = {
  tank: { to: blog('bearded-dragon-tank-setup-guide'), label: 'tank setup guide' },
  feeding: { to: blog('bearded-dragon-feeding-guide'), label: 'feeding guide' },
  foods: { to: blog('bearded-dragon-safe-foods-guide'), label: 'safe foods guide' },
  health: { to: blog('bearded-dragon-health-issues-guide'), label: 'health issues guide' },
  handling: { to: blog('bearded-dragon-handling-guide'), label: 'handling guide' },
  enrichment: { to: blog('bearded-dragon-enrichment-guide'), label: 'enrichment guide' },
  growth: { to: blog('bearded-dragon-growth-weight-checks-guide'), label: 'growth and weight guide' },
  uvb: { to: blog('why-bearded-dragons-need-uvb-lighting-and-why-skipping-it-is-deadly'), label: 'UVB lighting guide' },
  bioactive: { to: blog('bioactive-setups-bearded-dragons'), label: 'bioactive setup guide' },
};

// Time: the dragon arrives at 4 months old and ages a week for every real
// day, so he grows into an adult (18 months) in about two months of play.
// Feeding, water and supplements run on real days.
export const START_AGE_DAYS = 120;
export const AGE_SPEED = 7;
export const ADULT_AGE_DAYS = 548;
export const SETTLE_DAYS = 7; // wait 7 to 14 days before handling
export const LIGHTS_ON = 8;
export const LIGHTS_OFF = 21; // 13 hours, inside the guides' 10 to 14

// Tank setup guide, "Temperature Gradient".
export const RANGES = {
  juvenile: { basking: [105, 115] },
  adult: { basking: [95, 110] },
  cool: [75, 85],
  humidity: [30, 40],
};

export const TANKS = {
  20: { label: '20 gallon', outgrownAt: 180 },
  40: { label: '40 gallon', outgrownAt: 300 },
  120: { label: '4x2x2 ft (about 120 gallons)', outgrownAt: Infinity },
};

// gut: how fast a loose substrate builds impaction risk while he eats on it.
export const SUBSTRATES = {
  sand: { label: 'Calcium sand', loose: true, gut: 0.6 },
  walnut: { label: 'Crushed walnut shell', loose: true, gut: 0.6 },
  paper: { label: 'Paper towel', loose: false },
  tile: { label: 'Tile', loose: false },
  // Bioactive guide: 4 to 6 inches of arid bioactive substrate in a 4x2x2 or
  // larger, with a cleanup crew that needs a few weeks to establish. Still a
  // loose substrate, for experienced keepers.
  bioactive: { label: 'Bioactive', loose: true, gut: 0.15, bio: true },
};
export const BIO_ESTABLISH_DAYS = 3; // a few weeks of dragon time

// Floor decor spots per tank size: a bigger tank has room for more. The
// branch and hammock are placed freely and do not use these.
export const TANK_SLOTS = {
  20: ['cool'],
  40: ['cool', 'middle'],
  120: ['cool', 'middle', 'warm'],
};

export const UVB_TYPES = {
  none: { label: 'No UVB, just the heat lamp', factor: 0 },
  t8: { label: 'T8 UVB tube', factor: 0.7, lifeMonths: 6 },
  t5: { label: 'T5 HO UVB tube with reflector', factor: 1, lifeMonths: 12 },
};

export const UVB_MOUNTS = {
  mesh: { label: 'Over the mesh lid', factor: 1 },
  glass: { label: 'Behind a glass or plastic cover', factor: 0 },
};

// The guides' simple, safe setup, one tap away in the tank panel.
export const BASIC_SETUP = {
  tank: '120',
  substrate: 'tile',
  uvb: 't5',
  mount: 'mesh',
  heat: 'halogen',
  basking: 105,
  cool: 80,
  humidity: 35,
};

export const HEAT_SOURCES = {
  halogen: { label: 'Halogen basking bulb' },
  rock: { label: 'Heat rock' },
};

// The pet store starter kit the game opens with. Almost everything in it is
// something the guides warn about, so the first job is fixing the tank.
export const STARTER_SETUP = {
  tank: '20',
  substrate: 'sand',
  uvb: 'none',
  mount: 'glass',
  heat: 'rock',
  basking: 90,
  cool: 72,
  humidity: 55,
};

// Feeding guide and safe foods guide.
export const INSECTS = {
  dubia: { label: 'Dubia roaches', kind: 'staple' },
  bsfl: { label: 'Black soldier fly larvae', kind: 'staple' },
  crickets: { label: 'Crickets', kind: 'staple' },
  silkworms: { label: 'Silkworms', kind: 'staple', water: 6 },
  hornworms: { label: 'Hornworms', kind: 'occasional', water: 12 },
  superworms: { label: 'Superworms', kind: 'adultOnly', fat: 4 },
  waxworms: { label: 'Waxworms', kind: 'treat', fat: 7 },
  wild: { label: 'Bugs caught in the yard', kind: 'wild' },
  fireflies: { label: 'Fireflies', kind: 'toxic' },
};

export const DUSTS = {
  none: { label: 'No dusting' },
  calcium: { label: 'Plain calcium' },
  d3: { label: 'Calcium with D3' },
  multi: { label: 'Multivitamin' },
};

export const PLANTS = {
  collard: { label: 'Collard greens', kind: 'staple' },
  mustard: { label: 'Mustard greens', kind: 'staple' },
  dandelion: { label: 'Dandelion greens', kind: 'staple' },
  squash: { label: 'Grated winter squash', kind: 'staple' },
  kale: { label: 'Kale', kind: 'occasional' },
  romaine: { label: 'Romaine', kind: 'occasional' },
  spinach: { label: 'Spinach', kind: 'oxalate' },
  iceberg: { label: 'Iceberg lettuce', kind: 'iceberg' },
  papaya: { label: 'Papaya', kind: 'fruit' },
  figs: { label: 'Figs', kind: 'fruit' },
  avocado: { label: 'Avocado', kind: 'toxic' },
  onion: { label: 'Onion', kind: 'toxic' },
};

export const HANDLE_LENGTHS = {
  short: { label: '5 minutes', minutes: 5 },
  right: { label: '15 minutes', minutes: 15 },
  long: { label: '45 minutes', minutes: 45 },
};

export const ENRICHMENT = {
  dig: { label: 'Dig box' },
  roam: { label: 'Free roam, 15 minutes' },
  hunt: { label: 'Insect hunt' },
  climb: { label: 'Climb the branch' },
};

// Growth guide weight table, midpoints, by age in days.
export const GROWTH = [
  [0, 5], [60, 25], [105, 60], [165, 140], [270, 250], [365, 350], [548, 400],
];

// What the player sees for each problem, and which guide explains it.
export const CONDITIONS = {
  poisoned: {
    label: 'Poisoned',
    symptoms: 'He ate something toxic. This is an emergency.',
    guide: 'foods', vet: true, weight: 70,
  },
  burn: {
    label: 'Burned',
    symptoms: 'Blistered, blackened skin on his belly.',
    cause: 'Heat rocks and an overhot basking surface burn. Use a halogen bulb above him instead.',
    guide: 'health', vet: true, weight: 35,
  },
  respiratory: {
    label: 'Respiratory infection',
    symptoms: 'Nasal discharge, mucus and noisy, open-mouth breathing.',
    cause: 'An enclosure that is too cool or too humid. Humidity belongs at 30 to 40%.',
    guide: 'health', vet: true, weight: 40,
  },
  parasites: {
    label: 'Parasites',
    symptoms: 'Runny, foul stool, weight loss and a poor appetite.',
    cause: 'Wild-caught insects can carry parasites. Feed captive-bred insects only.',
    guide: 'health', vet: true, weight: 25,
  },
  impaction: {
    label: 'Impaction',
    symptoms: 'No stool for days while he is still eating, and his back legs look weak.',
    cause: 'Loose substrate, prey that is too big, and a basking spot too cold to digest.',
    guide: 'health', vet: false, weight: 30,
  },
  mbd: {
    label: 'Metabolic bone disease',
    symptoms: 'Lower appetite and energy.',
    cause: 'Not enough UVB or calcium. It hits juveniles hardest, and crooked bones stay crooked for life.',
    guide: 'uvb', vet: false, weight: 30,
  },
  dehydration: {
    label: 'Dehydrated',
    symptoms: 'Wrinkled skin outside a shed, sunken eyes and thick saliva.',
    cause: 'Fresh water daily, a 15 to 20 minute soak once or twice a week, and misted salad.',
    guide: 'growth', vet: false, weight: 25,
  },
  stuckShed: {
    label: 'Stuck shed',
    symptoms: 'Rings of old skin are stuck around his toes.',
    cause: 'Stuck shed cuts off circulation and can cost toes. A warm soak loosens it. Never peel it.',
    guide: 'health', vet: false, weight: 15,
  },
  d3: {
    label: 'Too much vitamin D3',
    symptoms: 'He has had calcium with D3 at almost every meal.',
    cause: 'Calcium with D3 a couple of times a week, never at every feeding. Use plain calcium the rest of the time.',
    guide: 'feeding', vet: false, weight: 15,
  },
  obesity: {
    label: 'Overweight',
    symptoms: 'Bulging fat pads on his head, armpit rolls and a tail base thicker than his thighs.',
    cause: 'Fewer fatty feeders like waxworms and superworms, more greens, more climbing and free roam.',
    guide: 'growth', vet: false, weight: 15,
  },
  stress: {
    label: 'Stressed',
    symptoms: 'Black beard and dark skin on his back and sides.',
    cause: 'Let him settle for a week before handling, keep sessions to about 15 minutes, and give him room.',
    guide: 'handling', vet: false, weight: 15,
  },
};

export const MBD_STAGES = [
  [60, 'Lower appetite and energy.'],
  [40, 'Trouble walking, and he no longer lifts his body clear of the floor.'],
  [25, 'Twitching toes and a swollen, rubbery lower jaw.'],
];
