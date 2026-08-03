import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompactPostCard from '@/components/shared/CompactPostCard';
import articlesIndex from '@/lib/generated/articles-index.json';

// Care categories never belong in a Beastfile. Beastlypedia is explicitly the
// no-husbandry section, and several of these animals are also kept as pets, so
// an animal-name match would happily pull "Axolotl Tank Setup" into a wild
// profile - the axolotl alone has five care guides against two feature pieces.
// relatedFiles is therefore a curated list of slugs in the data, and this is a
// second line of defence in case one gets added by mistake.
const EXCLUDED_CATEGORIES = new Set([
  'Amphibians', 'Reptiles', 'Birds', 'Fish', 'Small Mammals',
  'Dogs', 'Cats', 'Invertebrates', 'Legal',
]);

const bySlug = (() => {
  const list = Array.isArray(articlesIndex)
    ? articlesIndex
    : articlesIndex.articles || Object.values(articlesIndex)[0] || [];
  const map = new Map();
  for (const a of list) map.set(a.slug, a);
  return map;
})();

export default function RelatedFiles({ slugs }) {
  const navigate = useNavigate();

  // Resolve first, then render. A slug that no longer exists (an article
  // renamed or unpublished) drops out silently rather than rendering a card
  // that 404s on click.
  const posts = (slugs || [])
    .map((s) => bySlug.get(s))
    .filter(Boolean)
    .filter((p) => !EXCLUDED_CATEGORIES.has(p.category))
    // CompactPostCard resolves its link as `post.slug?.current || post._id ||
    // post.id`, a shape left over from Sanity. articles-index.json stores slug
    // as a plain string, so without `id` the card builds /blog/undefined/.
    // publishedAt is the same story: the card reads that, the index writes date.
    .map((p) => ({ ...p, id: p.slug, publishedAt: p.date }));

  if (posts.length === 0) return null;

  // bg-muted panel, matching Fun Facts. CompactPostCard is bg-card, and so is
  // the Beastfile block this sits inside, so on the default surface the cards
  // are the same colour as their background and only the hairline border shows.
  return (
    <section className="mt-4 bg-muted/50 border border-border/60 rounded-2xl p-5">
      <h2 className="font-display font-bold text-base text-foreground mb-3">📁 Related Files</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {posts.map((post) => (
          <CompactPostCard
            key={post.slug}
            post={post}
            onClick={() => navigate(`/blog/${post.slug}/`)}
          />
        ))}
      </div>
    </section>
  );
}
