import LEGAL_GUIDES from '@/lib/generated/legal-guides.json';

// A matrix row names its guide in `article` as soon as the guide is written,
// but a guide written ahead waits in content/_scheduled-* until its release
// day, and linking it before then sends a reader to a 404. legal-guides.json
// is generated from the published articles only, so it is the list of guides
// that are actually live. Map pages, state pages and the hub ask through here.
const LIVE = new Set(LEGAL_GUIDES.map((g) => `/blog/${g.slug}/`));

export function liveLegalArticle(animal) {
  return animal?.article && LIVE.has(animal.article) ? animal.article : null;
}
