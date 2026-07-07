import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { slugify } from '@/lib/utils/slugify';
import { motion } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';
import { client } from '@/lib/sanity';
import { fetchCategories } from '@/lib/sanityCategories';
import groq from 'groq';
import { CATEGORIES } from '@/lib/data/categories';
import CompactPostCard from '@/components/shared/CompactPostCard';
import { base44 } from '@/api/base44Client';
import { searchLocalContent } from '@/lib/localSearch';

function LocalResultRow({ result }) {
  return (
    <Link
      to={result.to}
      className="flex items-start gap-3 bg-card border border-border rounded-xl p-3 hover:border-secondary/40 hover:shadow-sm transition-all group"
    >
      <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-muted flex items-center justify-center text-xl">
        {result.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
          <span className="text-[10px] font-display font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-1.5 py-0.5 rounded-full">
            {result.type}
          </span>
        </div>
        <h3 className="font-display font-bold text-sm text-foreground leading-snug group-hover:text-secondary transition-colors line-clamp-1">
          {result.title}
        </h3>
        {result.subtitle && (
          <p className="text-xs text-muted-foreground font-body line-clamp-1 mt-0.5">
            {result.subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}

const SEARCH_QUERY = groq`*[_type == "post" && defined(slug.current) && (
  title match $q ||
  excerpt match $q ||
  $q in tags
)] | order(publishedAt desc) {
  _id, title, slug, excerpt, mainImage, publishedAt, readTime,
  "category": categories[0]->title,
  "categorySlug": categories[0]->slug.current,
  "tags": tags
}`;


export default function Search() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(urlParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('relevance');
  const [activeCategory, setActiveCategory] = useState('');
  const [sanityCategories, setSanityCategories] = useState([]);
  const debounceRef = useRef(null);
  const hasSearched = useRef(false);

  const runSearch = useCallback((q) => {
    if (!q.trim()) { setResults([]); setLoading(false); return; }
    setLoading(true);
    client.fetch(SEARCH_QUERY, { q: `*${q}*` })
      .then(data => { setResults(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // Load Sanity categories on mount
  useEffect(() => {
    fetchCategories().then(cats => setSanityCategories(cats.filter(c => c.count > 0))).catch(() => {});
  }, []);

  // Run on mount if ?q= param present
  useEffect(() => {
    if (query) { runSearch(query); hasSearched.current = true; }
  }, []);

  const handleInput = (val) => {
    setQuery(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const url = new URL(window.location);
      if (val) url.searchParams.set('q', val); else url.searchParams.delete('q');
      window.history.replaceState({}, '', url);
      runSearch(val);
      if (val.trim()) {
        base44.analytics.track({ eventName: 'search_performed', properties: { query: val } });
        hasSearched.current = true;
      }
    }, 400);
  };

  // Safe matching internally using slugify
  const filtered = results.filter(p =>
    !activeCategory || 
    slugify(p.categorySlug) === slugify(activeCategory) || 
    slugify(p.category) === slugify(activeCategory) ||
    (p.tags || []).some(t => slugify(t) === slugify(activeCategory))
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'relevance') return 0;
    const da = new Date(a.publishedAt), db = new Date(b.publishedAt);
    return sort === 'newest' ? db - da : da - db;
  });

  // Guides/encyclopedia/glossary live in static data, not Sanity, so they need
  // their own client-side match - the query above only ever searches blog posts.
  const localResults = useMemo(() => searchLocalContent(query), [query]);
  const localResultsFlat = [...localResults.guides, ...localResults.encyclopedia, ...localResults.glossary];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{query.trim() ? `Search: "${query.trim()}" | Beastly Facts` : 'Search Animal Care Guides & Articles | Beastly Facts'}</title>
        <meta name="description" content="Search Beastly Facts for animal care guides, fun facts, reptile husbandry tips, and pet care articles. Find exactly what you need from our growing library." />
        <link rel="canonical" href="https://beastlyfacts.com/search/" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Search | Beastly Facts" />
        <meta property="og:description" content="Search animal care guides, fun facts, and pet care articles on Beastly Facts." />
        <meta property="og:url" content="https://beastlyfacts.com/search/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Search | Beastly Facts" />
        <meta name="twitter:description" content="Search animal care guides, fun facts, and pet care articles on Beastly Facts." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Search">🔍</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Search Care Guides & Articles
            </h1>

            {/* Search bar */}
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={e => handleInput(e.target.value)}
                placeholder="Search care guides and articles…"
                className="w-full bg-card border border-border rounded-2xl pl-12 pr-12 py-3.5 text-base font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground shadow-sm"
              />
              {query && (
                <button onClick={() => { setQuery(''); setResults([]); }} className="absolute right-4 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        {/* Guides / Encyclopedia / Glossary matches - static data, matched instantly client-side */}
        {query.trim() && localResultsFlat.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-body text-muted-foreground mb-3">
              {localResultsFlat.length} guide{localResultsFlat.length !== 1 ? 's' : ''} & reference match{localResultsFlat.length !== 1 ? 'es' : ''} for "{query}"
            </p>
            <div className="space-y-2">
              {localResultsFlat.map(result => (
                <LocalResultRow key={result.key} result={result} />
              ))}
            </div>
          </div>
        )}

        {/* Category filter chips */}
        {results.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setActiveCategory('')}
              className={`text-xs font-display font-semibold px-3 py-1 rounded-full transition-all ${!activeCategory ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
            >
              All
            </button>
            {CATEGORIES.filter(c => results.some(r => slugify(r.categorySlug) === slugify(c.slug) || slugify(r.category) === slugify(c.slug) || (r.tags || []).some(t => slugify(t) === slugify(c.slug)))).map(c => (
              <button
                key={c.slug}
                onClick={() => setActiveCategory(activeCategory === c.slug ? '' : c.slug)}
                className={`text-xs font-display font-semibold px-3 py-1 rounded-full transition-all flex items-center gap-1 ${activeCategory === c.slug ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
              >
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
        )}

        {/* Sort + count */}
        {hasSearched.current && query && (
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-body text-muted-foreground">
              {loading ? 'Searching…' : `${sorted.length} result${sorted.length !== 1 ? 's' : ''} for "${query}"`}
            </p>
            {results.length > 1 && (
              <div className="flex gap-2">
                {['relevance', 'newest', 'oldest'].map(s => (
                  <button key={s} onClick={() => setSort(s)}
                    className={`text-xs font-display font-semibold px-2.5 py-1 rounded-full transition-all ${sort === s ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-muted rounded-xl animate-pulse" />)}
          </div>
        )}

        {/* Results */}
        {!loading && sorted.length > 0 && (
          <div className="space-y-3">
            {sorted.map((post, i) => (
              <motion.div key={post._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                <CompactPostCard 
                  post={post} 
                  onClick={() => navigate(`/blog?post=${post.slug?.current || post._id}`)} 
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && hasSearched.current && query && sorted.length === 0 && localResultsFlat.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">😔</span>
            <p className="font-display font-bold text-foreground text-lg">No results found</p>
            <p className="text-sm text-muted-foreground font-body mt-1 mb-6">Try different keywords or browse by category.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.slice(0, 6).map(c => {
                const cleanSlug = slugify(c.slug || c.label);
                return (
                  <Link 
                    key={c.slug} 
                    to={`/blog/category/${cleanSlug}/`}
                    className="text-xs font-display font-semibold px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-secondary/40 transition-all flex items-center gap-1"
                  >
                    {c.emoji} {c.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Pre-search state - Browse popular categories */}
        {!loading && !hasSearched.current && (
          <div className="py-8">
            <p className="text-sm font-body text-muted-foreground mb-4">Browse popular categories:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(sanityCategories.length > 0 ? sanityCategories : CATEGORIES).map(c => {
                const local = CATEGORIES.find(lc => lc.slug === c.slug || lc.label?.toLowerCase() === c.title?.toLowerCase());
                const emoji = local?.emoji || '🐾';
                const label = c.title || local?.label || c.slug;
                
                const cleanSlug = slugify(c.slug || label);

                return (
                  <Link 
                    key={c.slug || label} 
                    to={`/blog/category/${cleanSlug}/`}
                    className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:border-secondary/40 hover:shadow-sm transition-all group"
                  >
                    <span className="text-xl">{emoji}</span>
                    <span className="text-sm font-display font-semibold text-foreground group-hover:text-secondary transition-colors">{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}