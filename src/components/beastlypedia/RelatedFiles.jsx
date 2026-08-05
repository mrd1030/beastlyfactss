import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompactPostCard from '@/components/shared/CompactPostCard';

// Takes already-resolved cards rather than slugs.
//
// This used to import the whole generated articles index, 182KB, to look up one
// or two slugs. It is only ever rendered on a Beastfile, so every Beastfile page
// downloaded the metadata for all 396 articles to draw at most two cards.
// scripts/generate-beastlypedia-index.js resolves them at build time now, into
// exactly the fields CompactPostCard reads.
//
// The care-category exclusion moved to that script too. Beastlypedia is
// explicitly the no-husbandry section, and several of these animals are also
// kept as pets, so an article filed under Reptiles or Amphibians must never
// surface here. Enforcing it at build time means a bad entry shows up in the
// generator's output instead of being silently dropped in the browser.
export default function RelatedFiles({ posts, returnTo, returnLabel }) {
  const navigate = useNavigate();

  if (!posts?.length) return null;

  return (
    <section className="mt-4 bg-muted/50 border border-border/60 rounded-2xl p-5">
      <h2 className="font-display font-bold text-base text-foreground mb-3">📁 Related Files</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {posts.map((post) => (
          <CompactPostCard
            key={post.slug}
            post={post}
            // Carries where the reader came from, so Blog.jsx can offer
            // "Back to <animal>" instead of dropping them into the blog
            // listing they never visited. Same mechanism as FactFileRow.
            onClick={() => navigate(`/blog/${post.slug}/`, {
              state: { from: 'beastlypedia', returnTo, returnLabel },
            })}
          />
        ))}
      </div>
    </section>
  );
}
