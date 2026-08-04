import React from 'react';
import { motion } from '@/lib/motion-safe';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CompactPostCard from '@/components/shared/CompactPostCard';

import { blogPosts as localPosts } from '@/lib/data/newsletters';
// Statically imported, not fetch('/articles.json') - see CategoryBrowse.jsx's
// identical fix for why: a fetch-populated, loading-gated skeleton always
// mismatches a real client's hydration-time first render, since
// prerender.mjs's capture always reflects the post-fetch state.
import articlesIndex from '@/lib/generated/articles-index.json';

export default function CritterDigestPreview() {
  const navigate = useNavigate();

  // Helper to safely get slug as string
  const getSlug = (post) => {
    if (!post) return '';
    if (typeof post.slug === 'string') return post.slug;
    if (post.slug?.current) return post.slug.current;
    return post._id || post.id || '';
  };

  // Merge, normalize, and sort. Every source here is a static import, so this
  // list is identical during prerendering and at hydration time. (It used to
  // also merge in effect-fetched CMS posts, which made the prerendered top-5 a
  // genuinely different SET of posts - different keys, links, images - than a
  // real client's hydration-time first render, which always started from an
  // empty array. That structural mismatch is gone with the fetch.)
  const allPosts = [
    ...localPosts.map(post => ({
      ...post,
      _id: post.id || post._id,
      publishedAt: post.date,
      mainImage: null,
      categorySlug: null,
      slug: { current: getSlug(post) }   // normalize to the { current } shape the cards expect
    })),
    ...articlesIndex.articles.map(post => ({
      ...post,
      _id: post.slug,
      publishedAt: post.date,
      slug: { current: post.slug },
    })),
  ].sort((a, b) => {
    const dateA = new Date(a.publishedAt || a.date || 0);
    const dateB = new Date(b.publishedAt || b.date || 0);
    return dateB - dateA;
  });

  const previewPosts = allPosts.slice(0, 5);

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-6"
        >
          <div>
            <span className="text-2xl block mb-1">📰</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Latest Articles
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Care guides, deep-dives, and more from our blog
            </p>
          </div>
          <Link to="/blog/" className="hidden sm:flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline flex-shrink-0 p-2 -m-2">
            View all articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="space-y-3">
          {previewPosts.map((post, i) => {
            const postSlug = getSlug(post);

            return (
              <motion.div
                key={post._id || post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <CompactPostCard
                  post={post}
                  onClick={() => navigate(`/blog/${postSlug}/`)}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-1.5 text-sm font-body font-bold text-secondary hover:underline p-2 -m-2"
          >
            View all articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}