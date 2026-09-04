import React, { useState, useEffect } from 'react';
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
import buildStamp from '@/lib/generated/build-stamp.json';
import { byReleaseThenDate, siteToday } from '@/lib/utils/date';

export default function CritterDigestPreview() {
  const navigate = useNavigate();

  // The cutoff that separates released from scheduled. Starts at the build date
  // so the prerendered order and the first client render agree, then upgrades to
  // the real date after mount. Without the two-step a visitor arriving days after
  // a deploy would sort differently from the static HTML, which is the hydration
  // mismatch HeroSection's daily fact works around the same way.
  const [cutoff, setCutoff] = useState(buildStamp.generatedAt);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setCutoff(siteToday());
  }, []);

  // Helper to safely get slug as string
  const getSlug = (post) => {
    if (!post) return '';
    if (typeof post.slug === 'string') return post.slug;
    if (post.slug?.current) return post.slug.current;
    return post._id || post.id || '';
  };

  // Merge, normalize, and sort. Released posts lead, newest first; posts whose
  // date has not arrived yet, and whose date getDisplayDate() therefore hides,
  // fall to the back in soonest-first order. Sorting on date alone put the
  // furthest-future article in slot one, so all five cards showed no date.
  // Every source here is a static import, so this
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
  ].sort(byReleaseThenDate(cutoff));

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
              Latest articles
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              From the blog: comparisons, health, and the deep dives that sit on each guide.
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

        {/* sm:hidden, same as the other home sections: the header above already
            carries a "View all articles" link that is hidden:sm:flex, so without
            this the desktop layout rendered the same link twice. */}
        <div className="text-center mt-6 sm:hidden">
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
