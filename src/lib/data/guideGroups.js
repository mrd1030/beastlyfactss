import { allGuides } from './guides';

// Section headings for the care guide list.
//
// The guides list used to be one flat run of rows. That was fine while each
// guide was a full-width card and the category was obvious from the picture,
// but once both browse pages became the same compact row, a hundred of them
// with no break read as a wall. The encyclopedia already solved this: it
// groups by category and puts an emoji heading above each run. This gives the
// guides the same dividers off the same ordering.
//
// petType is singular for dogs and cats ("Dog", "Cat") and plural everywhere
// else, which is why the filter labels cannot be matched against it directly.
const GROUPS = [
  { label: 'Amphibians', emoji: '🐸' },
  { label: 'Birds', emoji: '🐦' },
  { label: 'Cats', emoji: '🐱', petType: 'Cat' },
  { label: 'Dogs', emoji: '🐶', petType: 'Dog' },
  { label: 'Fish', emoji: '🐠' },
  { label: 'Geckos', emoji: '🦎' },
  { label: 'Invertebrates', emoji: '🕷️' },
  { label: 'Lizards', emoji: '🦎' },
  { label: 'Small Mammals', emoji: '🦔' },
  { label: 'Snakes', emoji: '🐍' },
  { label: 'Turtles & Tortoises', emoji: '🐢' },
];

// Anything whose petType is not one of the eleven above still has to appear,
// so it falls through to a trailing group rather than vanishing from the page.
const OTHER = { label: 'More guides', emoji: '🐾' };

export function groupGuides(guides) {
  const seen = new Set();
  const groups = GROUPS.map((g) => {
    const type = g.petType || g.label;
    const members = guides.filter((guide) => guide.petType === type);
    members.forEach((m) => seen.add(m.id));
    return { name: g.label, emoji: g.emoji, guides: members };
  }).filter((g) => g.guides.length > 0);

  const rest = guides.filter((g) => !seen.has(g.id));
  if (rest.length) groups.push({ name: OTHER.label, emoji: OTHER.emoji, guides: rest });

  return groups;
}

// Group hubs (layout "router" with a `branches` list, e.g. tetras) and the
// species under them. The hub's branches.species list is the roster, so
// membership is derived from it rather than stored on each species: a new
// group is one hub entry and nothing else. Planned species have no id and
// are not members until their guide ships.
export const hubOf = Object.fromEntries(
  allGuides.flatMap((hub) => (hub.branches?.species || [])
    .filter((sp) => sp.id && !sp.planned)
    .map((sp) => [sp.id, hub])),
);
const hubIds = new Set(Object.values(hubOf).map((hub) => hub.id));

// Folds a browse list so each group's species sit together under their hub,
// in list order: [{ hub, members }] for a group, { item } for everything
// else. idOf maps an item to a guide id (a guide's own id, an encyclopedia
// animal's guideId). A block appears where its first member or its hub does.
// The hub's own row, when the list carries it (the guides list), is absorbed
// as the block header; a hub whose members were all filtered out falls back
// to a plain row, and a search that keeps a member but not the hub still
// shows the header so the species reads as part of its group.
export function nestByHub(items, idOf) {
  const out = [];
  const blocks = new Map();
  const blockFor = (hub) => {
    let block = blocks.get(hub.id);
    if (!block) {
      block = { hub, members: [], hubItem: null };
      blocks.set(hub.id, block);
      out.push(block);
    }
    return block;
  };
  for (const item of items) {
    const id = idOf(item);
    if (hubOf[id]) blockFor(hubOf[id]).members.push(item);
    else if (hubIds.has(id)) blockFor(allGuides.find((g) => g.id === id)).hubItem = item;
    else out.push({ item });
  }
  return out.map((entry) => (entry.hub && entry.members.length === 0 ? { item: entry.hubItem } : entry));
}
