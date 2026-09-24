import React, { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CompactPostCard from '@/components/shared/CompactPostCard';

// Statically imported, not fetch('/articles.json') - see CategoryBrowse.jsx's
// identical fix for why: a fetch-populated, loading-gated skeleton always
// mismatches a real client's hydration-time first render, since
// prerender.mjs's capture always reflects the post-fetch state.
import articlesIndex from '@/lib/generated/articles-index.json';
import buildStamp from '@/lib/generated/build-stamp.json';
import { siteToday } from '@/lib/utils/date';
import { todaysPicks } from '@/lib/utils/rotation';

export default function CritterDigestPreview() {
  const navigate = useNavigate();

  // The day the picks are for. Starts at the build date so the prerendered
  // HTML and the first client render agree, then upgrades to the real date
  // after mount, the same two-step HeroSection's daily fact uses.
  const [today, setToday] = useState(buildStamp.generatedAt);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setToday(siteToday());
  }, []);

  const getSlug = (post) => post?.slug?.current || '';

  // Five from the rotation (src/lib/utils/rotation.js): a different set every
  // day, every article once per cycle, chosen by number rather than date.
  const previewPosts = todaysPicks(articlesIndex.articles, today).map(post => ({
    ...post,
    _id: post.slug,
    publishedAt: post.date,
    slug: { current: post.slug },
  }));

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
              Today&rsquo;s reads
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              A fresh set from the Critter Digest every day
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
