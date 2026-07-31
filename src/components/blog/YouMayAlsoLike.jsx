import React, { useMemo } from 'react';
import { motion } from '@/lib/motion-safe';
import CompactPostCard from '@/components/shared/CompactPostCard';
import { mdxPosts } from '@/lib/mdxPosts';
import { slugify } from '@/lib/utils/slugify';

// 4, matching what the old Sanity-backed version rendered (it sliced the
// fetched results to 4). The selection logic below can produce more, so this
// keeps the visible card count unchanged by the migration.
const RELATED_LIMIT = 4;

// Sorted once at module load from a static import (mdx-meta.json), so the
// order is byte-identical during prerendering and at hydration time. Every
// entry carries a real `date`, so nothing here falls back to a live clock.
const postsByDateDesc = [...mdxPosts].sort(
  (a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0)
);

const idOf = (post) => post._id || post.slug?.current || post.id;

export default function YouMayAlsoLike({ currentPostId, categorySlug, onSelectPost }) {
  const related = useMemo(() => {
    if (!currentPostId) return [];

    const candidates = postsByDateDesc.filter(p => idOf(p) !== currentPostId);

    // The caller only has a categorySlug for posts that carry one; MDX posts
    // carry a human-readable `category` instead, so fall back to the current
    // post's own category. Matching goes through slugify on both sides, the
    // same way Search.jsx reconciles the two shapes.
    const currentPost = postsByDateDesc.find(p => idOf(p) === currentPostId);
    const wanted = slugify(categorySlug || currentPost?.category || '');

    const sameCategory = wanted
      ? candidates.filter(
          p => slugify(p.categorySlug) === wanted || slugify(p.category) === wanted
        ).slice(0, RELATED_LIMIT)
      : [];

    if (sameCategory.length >= RELATED_LIMIT) return sameCategory;

    // Top up with the most recent posts from any category, mirroring the old
    // fallback query that ran whenever the category match came up short.
    const picked = new Set(sameCategory.map(idOf));
    const filler = candidates
      .filter(p => !picked.has(idOf(p)))
      .slice(0, RELATED_LIMIT - sameCategory.length);

    return [...sameCategory, ...filler];
  }, [currentPostId, categorySlug]);

  if (related.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-12 pt-8 border-t border-border"
    >
      <h2 className="font-display font-bold text-xl text-foreground mb-4">
        You May Also Like
      </h2>
      <div className="space-y-3">
        {related.map((post, i) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <CompactPostCard post={post} onClick={() => onSelectPost(post)} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
