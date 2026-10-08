// The groups the animal picker on the legal map and the hub's animal list are
// laid out in. Hardcoded on purpose: these are display headings, not a taxonomy,
// and an animal belongs to whichever group a reader would look under first.
//
// Order inside a group is A to Z by display name, decided at render time, so a
// new matrix row only needs its id added to one list here. An id in the matrix
// that appears in no list lands under "Other" rather than vanishing from the
// picker, and an id listed here that is not in the matrix is ignored, so a
// group can be filled in ahead of its rows.

export const LEGAL_GROUPS = [
  {
    label: 'Reptiles',
    ids: [
      'ackie-monitor', 'argentine-tegu', 'ball-python', 'bearded-dragon',
      'blue-tongue-skink', 'boa-constrictor', 'box-turtle', 'burmese-python',
      'chameleon-jackson', 'corn-snake', 'crested-gecko', 'garter-snake',
      'green-anole', 'green-iguana', 'hognose-snake', 'kingsnake',
      'leopard-gecko', 'milk-snake', 'nile-monitor', 'red-eared-slider',
      'red-footed-tortoise', 'rosy-boa', 'russian-tortoise', 'savannah-monitor',
      'snapping-turtle', 'sulcata-tortoise', 'tokay-gecko', 'veiled-chameleon',
    ],
  },
  {
    label: 'Amphibians',
    ids: ['axolotl', 'tiger-salamander'],
  },
  {
    label: 'Birds',
    ids: ['african-grey-parrot', 'cockatoo', 'quaker-parakeet'],
  },
  {
    label: 'Small mammals',
    ids: [
      'chinchilla', 'degu', 'ferret', 'flying-squirrel', 'gerbil', 'guinea-pig',
      'hamster', 'hedgehog', 'prairie-dog', 'rabbit', 'sugar-glider',
    ],
  },
  {
    label: 'Larger mammals',
    ids: ['bengal-cat', 'capybara', 'fennec-fox', 'savannah-cat', 'serval'],
  },
  {
    label: 'Invertebrates',
    ids: ['emperor-scorpion', 'giant-millipede', 'hissing-cockroach', 'tarantula'],
  },
];

// Resolves the groups against the matrix's animals: drops ids with no row,
// sorts each group A to Z by name, and appends an "Other" group for any row no
// list claims. Returns only groups with at least one animal.
export function groupLegalAnimals(animals) {
  const byName = (a, b) => animals[a].name.localeCompare(animals[b].name);
  const claimed = new Set();
  const groups = LEGAL_GROUPS.map(({ label, ids }) => {
    const present = ids.filter((id) => animals[id]);
    present.forEach((id) => claimed.add(id));
    return { label, ids: present.sort(byName) };
  });
  const other = Object.keys(animals).filter((id) => !claimed.has(id)).sort(byName);
  if (other.length) groups.push({ label: 'Other', ids: other });
  return groups.filter((g) => g.ids.length);
}
