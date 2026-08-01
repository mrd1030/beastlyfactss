import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Search as SearchIcon } from 'lucide-react';
import { slugify } from '@/lib/utils/slugify';
import { getCategoryBySlug } from '@/lib/data/categories';
import CompactPostCard from '@/components/shared/CompactPostCard';
import { seededShuffle, hashString } from '@/lib/utils/seededShuffle';
import { trackEvent } from '@/lib/analytics';
// Statically imported, not fetch('/articles.json') in a useEffect like
// before: that always started with loading:true, and prerender.mjs's
// networkidle0 wait meant the static HTML always captured the post-fetch
// (loading:false, real content) state - a real client's hydration-time first
// render can never match that (it always starts at the useState default),
// which was severe enough to make React discard hydration and re-render the
// whole page. A static import resolves synchronously and identically on
// both sides, so there's no fetch-timing race left to mismatch.
import articlesIndex from '@/lib/generated/articles-index.json';

// Only categories with enough MDX content to fill this browser's 6-article
// preview without looking sparse. Still excluded for that reason: comparisons,
// pet-care, cats, dogs (2 to 4 articles each), product-picks (now a redirect to
// /gear/), and site-news. Fun Facts and Short Stories are excluded for a
// different reason: they already have dedicated homepage sections
// (TrendingFacts, DexTeaser).
//
// Wild Animals and Aquatic Life were previously excluded as near-empty. That
// stopped being true once the Sanity content moved into MDX, and posts can now
// carry several categories, so they sit here on the same >=6 rule as the rest.
const FRONT_LABEL = 'Reptiles';
const BACK_LABEL = 'Legal';
const MIDDLE_LABELS = ['Fish', 'Invertebrates', 'Small & Exotic Pets', 'Birds', 'Amphibians', 'Wild Animals', 'Aquatic Life', 'Roundups', 'Turtles & Tortoises'];

export default function CategoryBrowse() {
  const [selected, setSelected] = useState(FRONT_LABEL);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  // Fixed on the hydration-critical first render, not new Date().getDate()
  // computed inline: prerender.mjs bakes in whatever day it happens to build
  // on, and this page isn't rebuilt daily, so a real visitor hydrating on a
  // later day than the last deploy would derive a different seed than what's
  // baked into the static HTML - reshuffling both the category chip order and
  // the preview articles, a structural mismatch severe enough to make React
  // discard hydration and re-render the whole root (see HeroSection.jsx's
  // dailyFact for the same fix, same reasoning). Upgraded to the real day
  // right after mount, skipped during prerendering itself.
  const [daySeed, setDaySeed] = useState(1);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setDaySeed(new Date().getDate());
  }, []);

  // Reptiles pinned first, Legal pinned last, the rest shuffled - recomputed
  // only when daySeed upgrades post-mount, not on unrelated re-renders.
  const order = useMemo(() => [FRONT_LABEL, ...seededShuffle(MIDDLE_LABELS, daySeed), BACK_LABEL], [daySeed]);

  const preview = useMemo(() => {
    // Matches against every category a post is filed under, so a piece tagged
    // both Aquatic Life and Wild Animals shows up under either chip.
    const pool = articlesIndex.articles.filter(a =>
      (a.categories?.length ? a.categories : [a.category]).includes(selected)
    );
    const seed = daySeed + hashString(selected);
    return seededShuffle(pool, seed).slice(0, 6);
  }, [selected, daySeed]);

  const handleSelect = (label) => setSelected(label);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchInput.trim();
    if (q) trackEvent('search', { search_term: q });
    navigate(q ? `/blog/?search=${encodeURIComponent(q)}` : '/blog/');
  };

  const selectedSlug = slugify(selected);
  const selectedMeta = getCategoryBySlug(selectedSlug);

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-2xl block mb-1">🐾</span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
            The Beastly Hub
          </h2>
          <p className="text-xs text-muted-foreground font-body mt-0.5">
            Everything on the site starts here - pick a category or search for something specific
          </p>
        </motion.div>

        {/* Search bar */}
        <form onSubmit={handleSearchSubmit} className="flex max-w-sm mb-5">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by title..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full bg-card border border-border border-r-0 rounded-l-xl pl-10 pr-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            aria-label="Search"
            className="flex items-center justify-center px-4 rounded-r-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors flex-shrink-0"
          >
            <SearchIcon className="w-4 h-4" />
          </button>
        </form>

        {/* Category chips */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {order.map((label) => {
            const meta = getCategoryBySlug(slugify(label));
            const isActive = selected === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => handleSelect(label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-display font-semibold border transition-colors ${
                  isActive
                    ? 'bg-secondary text-secondary-foreground border-secondary'
                    : 'bg-card border-border text-foreground hover:border-secondary/40'
                }`}
              >
                <span aria-hidden="true">{meta?.emoji}</span>{label}
              </button>
            );
          })}

          {/* Direct links to the other two site sections - these actually
              navigate on click, unlike the category chips above, so they're
              visually marked with an arrow to signal the difference. */}
          <Link
            to="/guides/"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-display font-semibold border border-dashed border-border text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-colors"
          >
            Guides <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/encyclopedia/"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-display font-semibold border border-dashed border-border text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-colors"
          >
            Encyclopedia <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/blog/"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-display font-semibold border border-dashed border-border text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-colors"
          >
            More Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Preview panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-card/50 border border-border rounded-2xl p-4 sm:p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-1.5">
                <span aria-hidden="true">{selectedMeta?.emoji}</span>{selected}
              </h3>
              <Link
                to={`/blog/category/${selectedSlug}/`}
                className="flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0 p-2 -m-2"
              >
                View More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {preview.map((post) => (
                <CompactPostCard
                  key={post.slug}
                  post={{ ...post, publishedAt: post.date, slug: { current: post.slug } }}
                  onClick={() => navigate(`/blog/${post.slug}/`)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
