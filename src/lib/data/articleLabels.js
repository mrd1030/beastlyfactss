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
// Matched against the END of the slug, not the whole of it, because the same
// suffix serves every species: ball-python-feeding-guide and molly-feeding-guide
// are both "Feeding guide".
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
};

// The short tag for a slug, or null when no suffix matches. Callers decide the
// fallback: the hub wants the article's own title trimmed at the colon, the
// breadcrumb wants the same, and neither belongs in here.
export function shortLabelFor(slug) {
  const hit = Object.keys(SHORT_LABELS).find((k) => slug.endsWith(`-${k}`));
  return hit ? SHORT_LABELS[hit] : null;
}
