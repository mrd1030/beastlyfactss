import React from 'react';
import DeepDiveList from '@/components/shared/DeepDiveList';
import { primaryGuideId, speciesNameFor } from '@/lib/data/relatedArticles';

// The curated same-species list (own articles only; the shared "Health and
// More" material stays in the sidebar), rendered after the FAQ below lg. On
// desktop the sticky sidebar's Deep Dive shows the same list beside the
// article, so this block is hidden there rather than shown twice. It stays
// in the DOM at every width, so the links are in the prerendered HTML. so an article ends on
// its own series instead of a paragraph of "see our cost guide" sentences.
//
// This is the first place the list appears in the prerendered HTML: the
// sidebar copy sits behind a client-side effect (see PostSidebar), so until
// now a crawler never saw the species siblings at all. The MDX bodies still
// carry their own in-body links; scripts/check-internal-links.mjs counts only
// those, on purpose, and this block does not change that count.
//
function speciesLabel(slug) {
  const name = speciesNameFor(slug);
  return name ? `📰 More on the ${name}` : '📰 More on this topic';
}

function hubFor(slug) {
  const id = primaryGuideId(slug);
  return id ? { id, name: speciesNameFor(slug) || id } : null;
}

export default function MoreOnSpecies({ currentSlug, articles, onSelectPost }) {
  if (!articles || articles.length === 0) return null;
  return (
    <div className="mt-8 space-y-5 lg:hidden">
      <DeepDiveList
        articles={articles}
        onSelect={onSelectPost}
        ownTitle={speciesLabel(currentSlug)}
        show="own"
        hub={hubFor(currentSlug)}
      />
    </div>
  );
}
