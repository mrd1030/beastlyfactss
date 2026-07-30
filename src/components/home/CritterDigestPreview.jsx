import React, { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { client } from '@/lib/sanity';
import groq from 'groq';
import CompactPostCard from '@/components/shared/CompactPostCard';

import { blogPosts as localPosts } from '@/lib/data/newsletters';
// Statically imported, not fetch('/articles.json') - see CategoryBrowse.jsx's
// identical fix for why: a fetch-populated, loading-gated skeleton always
// mismatches a real client's hydration-time first render, since
// prerender.mjs's capture always reflects the post-fetch state.
import articlesIndex from '@/lib/generated/articles-index.json';

const QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, excerpt, mainImage, publishedAt, readTime,
  "category": categories[0]->title,
  "categorySlug": categories[0]->slug.current
}`;

export default function CritterDigestPreview() {
  // Starts empty and merges in via a normal effect-driven update after mount.
  // Skipped during prerendering: prerender.mjs's networkidle0 wait means this
  // fetch always resolves before capture, so the static HTML would show
  // sanityPosts merged into the sorted, sliced top-5 list - not just
  // different text, but a genuinely different SET of posts (different keys,
  // links, images) than a real client's hydration-time first render, which
  // always starts at sanityPosts=[]. That's a structural mismatch (confirmed
  // via a direct hydration test), not a patchable leaf-level difference.
  const [sanityPosts, setSanityPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    client.fetch(QUERY)
      .then(data => setSanityPosts(data))
      .catch(() => {});
  }, []);

  // Helper to safely get slug as string
  const getSlug = (post) => {
    if (!post) return '';
    if (typeof post.slug === 'string') return post.slug;
    if (post.slug?.current) return post.slug.current;
    return post._id || post.id || '';
  };

  // Merge, normalize, and sort
  const allPosts = [
    ...sanityPosts,
    ...localPosts.map(post => ({
      ...post,
      _id: post.id || post._id,
      publishedAt: post.date,
      mainImage: null,
      categorySlug: null,
      slug: { current: getSlug(post) }   // normalize to same shape as Sanity
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
          <Link to="/blog/" className="hidden sm:flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0">
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
            className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-secondary hover:underline"
          >
            View all articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}