// Short tags for the deep-dive articles.
//
// The full titles are written to be clicked in a search result, so they run
// long and conversational ("How Much Does a Ball Python Really Cost?"). That is
// right in a listing and wrong anywhere the article is cited in passing: a
// first-week row, a breadcrumb rung. Those want the subject, not the pitch.
//
// This lived inside GuideDetail.jsx, where the hub's first-week card cites its
// own deep dives. Blog.jsx now needs the same tags for the last breadcrumb rung
// on the 557 articles that resolve to a species, and a second copy of a
// thirty-entry table is a table that drifts, so it moved here.
//
// Matched against the END of the slug because the same suffix serves every
// species: ball-python-feeding-guide and molly-feeding-guide are both "Feeding
// guide".
//
// And against the whole slug, which it did not used to do. Ten of the entries
// below are complete slugs rather than suffixes, the cross-species pieces that
// carry no species prefix of their own: reptile-quarantine-guide,
// bird-emergency-travel-guide, small-mammal-grooming-nails-molting-guide and
// the rest. A pure endsWith('-' + key) test can never match those, since it
// demands a prefix they do not have, so every one of them silently fell through
// to the article's full title. On the axolotl hub that printed "Amphibian
// Quarantine, Acclimation, and Water Hardness" into a row sized for "Cost
// guide", and the arrow ran off the card.
export const SHORT_LABELS = {
  'cost-guide': 'Cost guide',
  'tank-setup-guide': 'Setup guide',
  'feeding-guide': 'Feeding guide',
  'health-issues-guide': 'Health guide',
  'handling-guide': 'Handling guide',
  'enrichment-guide': 'Enrichment guide',
  'legal-guide': 'Legal guide',
  'growth-weight-checks-guide': 'Growth guide',
  'sexing-growth-body-condition-guide': 'Body condition guide',
  'shopping-list': 'Shopping list',
  'temperature-guide': 'Temperature guide',
  'reptile-quarantine-guide': 'Quarantine guide',
  'reptile-shedding-complete-guide': 'Shedding guide',
  'reptile-salmonella-hygiene-guide': 'Hygiene guide',
  'reptile-emergency-plan-guide': 'Emergency plan',
  'small-mammal-temperature-heat-stress-guide': 'Heat and cold guide',
  'small-mammal-grooming-nails-molting-guide': 'Grooming guide',
  'small-mammal-vet-visits-and-travel-guide': 'Vet trips guide',
  'tank-size-bowl-myth': 'Bowl myth guide',
  'quarantine-and-treatment-guide': 'Quarantine guide',
  'power-outage-and-transport-guide': 'Power outage guide',
  'water-parameters-guide': 'Water guide',
  'cycling-guide': 'Cycling guide',
  'humidity-guide': 'Humidity guide',
  'safe-plants-guide': 'Safe plants guide',
  'bird-quarantine-guide': 'Quarantine guide',
  'bird-emergency-travel-guide': 'Emergency plan',
  'pellet-conversion-guide': 'Pellet guide',
  'cere-color-guide': 'Cere color guide',

  // The thirteen that were still falling through to their titles after the
  // whole-slug match above was fixed. Every one is a cross-species piece cited
  // from a first-week row, where the row is sized for two or three words.
  'amphibian-quarantine-and-water-guide': 'Quarantine guide',
  'chelonian-herpesvirus-quarantine-guide': 'Quarantine guide',
  'ferret-adrenal-disease-guide': 'Adrenal disease guide',
  'guinea-pig-scurvy-vitamin-c-guide': 'Vitamin C guide',
  'invertebrate-emergency-travel-shipping-guide': 'Emergency plan',
  'invertebrate-molting-guide': 'Molting guide',
  'invertebrate-pesticide-hazards-guide': 'Pesticide guide',
  'invertebrate-rehousing-guide': 'Rehousing guide',
  'outdoor-reptile-housing-guide': 'Outdoor housing guide',
  'reptile-heating-thermostats-guide': 'Heating guide',
  'reptile-stool-urates-hydration-guide': 'Hydration guide',
  'small-mammal-enterotoxemia-guide': 'Enterotoxemia guide',
  'snake-brumation-guide': 'Brumation guide',
  'tortoise-brumation-guide': 'Brumation guide',
};

// The short tag for a slug, or null when no suffix matches. Callers decide the
// fallback: the hub wants the article's own title trimmed at the colon, the
// breadcrumb wants the same, and neither belongs in here.
export function shortLabelFor(slug) {
  const hit = Object.keys(SHORT_LABELS).find((k) => slug === k || slug.endsWith(`-${k}`));
  return hit ? SHORT_LABELS[hit] : null;
}
