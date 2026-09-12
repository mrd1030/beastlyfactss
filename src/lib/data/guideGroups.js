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
