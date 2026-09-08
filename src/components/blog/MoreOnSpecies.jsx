import React from 'react';
import DeepDiveList from '@/components/shared/DeepDiveList';
import { getListingGuides } from '@/lib/data/relatedArticles';

// The curated same-species list (own articles only; the shared "Health and
// More" material stays in the sidebar), rendered after the FAQ so an article ends on
// its own series instead of a paragraph of "see our cost guide" sentences.
//
// This is the first place the list appears in the prerendered HTML: the
// sidebar copy sits behind a client-side effect (see PostSidebar), so until
// now a crawler never saw the species siblings at all. The MDX bodies still
// carry their own in-body links; scripts/check-internal-links.mjs counts only
// those, on purpose, and this block does not change that count.
//
// The label comes from the guide id, title-cased, because the blog route does
// not import the 32KB guide index just for a name (same reasoning as
// DeepDiveList's "Health and More" heading). An article listed under several
// guides (the shared quarantine and hygiene pieces) gets a generic label.
const NAME_FIXES = {
  'jacksons-chameleon': "Jackson's Chameleon",
  'whites-tree-frog': "White's Tree Frog",
  'african-grey': 'African Grey',
  'african-fat-tail': 'African Fat-Tailed Gecko',
  'blue-tongue-skink': 'Blue-Tongued Skink',
  'hissing-cockroach': 'Madagascar Hissing Cockroach',
};

function speciesLabel(slug) {
  // getListingGuides returns real guide ids ('tegu') and, for a standard
  // suffix slug, a synthetic 'auto:<species>' key ('auto:argentine-tegu').
  // The auto key carries the fuller species name, so it wins the label; the
  // real ids decide whether this is one species or a shared article.
  const ids = [...getListingGuides(slug)];
  const real = ids.filter(id => !id.startsWith('auto:'));
  const auto = ids.find(id => id.startsWith('auto:'));
  if (real.length > 1) return '📰 More on this topic';
  const id = auto ? auto.slice(5) : real[0];
  if (!id) return '📰 More on this topic';
  const name = NAME_FIXES[id] || id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `📰 More on the ${name}`;
}

export default function MoreOnSpecies({ currentSlug, articles, onSelectPost }) {
  if (!articles || articles.length === 0) return null;
  return (
    <div className="mt-8 space-y-5">
      <DeepDiveList
        articles={articles}
        onSelect={onSelectPost}
        ownTitle={speciesLabel(currentSlug)}
        show="own"
      />
    </div>
  );
}
