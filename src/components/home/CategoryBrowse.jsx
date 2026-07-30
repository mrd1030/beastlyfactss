import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Search as SearchIcon } from 'lucide-react';
import { slugify } from '@/lib/utils/slugify';
import { getCategoryBySlug } from '@/lib/data/categories';
import CompactPostCard from '@/components/shared/CompactPostCard';

// Only categories with a real, browsable body of MDX content - several slugs
// defined in categories.js (aquatic-life, comparisons, pet-care, product-picks,
// wild-animals, cats, dogs, site-news) currently have 0-4 articles and would
// look sparse or broken showing "random picks" from an almost-empty pool.
// Fun Facts and Short Stories are excluded too since they already have their
// own dedicated homepage sections (TrendingFacts, DexTeaser).
const FRONT_LABEL = 'Reptiles';
const BACK_LABEL = 'Legal';
const MIDDLE_LABELS = ['Fish', 'Invertebrates', 'Small & Exotic Pets', 'Birds', 'Amphibians', 'Roundups', 'Turtles & Tortoises'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CategoryBrowse() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(FRONT_LABEL);
  const [preview, setPreview] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  // Reptiles pinned first, Legal pinned last, the rest shuffled - computed
  // once per mount so the row doesn't reshuffle on unrelated re-renders.
  const order = useMemo(() => [FRONT_LABEL, ...shuffle(MIDDLE_LABELS), BACK_LABEL], []);

  useEffect(() => {
    fetch('/articles.json')
      .then(r => r.json())
      .then(data => setArticles(data.articles || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading) return;
    const pool = articles.filter(a => a.category === selected);
    setPreview(shuffle(pool).slice(0, 6));
  }, [selected, articles, loading]);

  const handleSelect = (label) => setSelected(label);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchInput.trim();
    if (import.meta.env.MODE === 'production' && window.gtag && q) {
      window.gtag('event', 'search', { search_term: q });
    }
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
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-display font-semibold border transition-all ${
                  isActive
                    ? 'bg-secondary text-secondary-foreground border-secondary'
                    : 'bg-card border-border text-foreground hover:border-secondary/40'
                }`}
              >
                <span aria-hidden="true">{meta?.emoji}</span>
                {label}
              </button>
            );
          })}

          {/* Direct links to the other two site sections - these actually
              navigate on click, unlike the category chips above, so they're
              visually marked with an arrow to signal the difference. */}
          <Link
            to="/guides/"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-display font-semibold border border-dashed border-border text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-all"
          >
            Guides <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/encyclopedia/"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-display font-semibold border border-dashed border-border text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-all"
          >
            Encyclopedia <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/blog/"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-display font-semibold border border-dashed border-border text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-all"
          >
            More <ArrowRight className="w-3.5 h-3.5" />
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
                <span aria-hidden="true">{selectedMeta?.emoji}</span> {selected}
              </h3>
              <Link
                to={`/blog/category/${selectedSlug}/`}
                className="flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0"
              >
                View More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {loading ? (
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 bg-muted rounded-xl animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-3">
                {preview.map((post) => (
                  <CompactPostCard
                    key={post.slug}
                    post={{ ...post, publishedAt: post.date, slug: { current: post.slug } }}
                    onClick={() => navigate(`/blog/${post.slug}/`)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
