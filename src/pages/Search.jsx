import React, { useState, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { slugify } from '@/lib/utils/slugify';
import { motion } from '@/lib/motion-safe';
import { Search as SearchIcon, X } from 'lucide-react';
import { trackSearch, trackEvent } from '@/lib/analytics';
import { CATEGORIES } from '@/lib/data/categories';
import { mdxPosts } from '@/lib/mdxPosts';
import { isChroniclesPost } from '@/lib/chronicles';
import CompactPostCard from '@/components/shared/CompactPostCard';
import { searchLocalContent, normalizeQuery, correctQuery } from '@/lib/localSearch';

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
          <span className="text-[10px] font-body font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-1.5 py-0.5 rounded-full">
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

// Blog posts are MDX-only now, so the searchable set is a static import that
// resolves synchronously and identically on both sides of hydration - no
// fetch, no loading state, no empty first render to mismatch against.
// Chronicles stories are excluded here for the same reason Blog.jsx and
// localSearch.js exclude them: they read at /chronicles/, not in the blog.
const searchablePosts = mdxPosts.filter(p => !isChroniclesPost(p));

// Variants come from normalizeQuery: the canonical (alias-expanded) query
// plus the raw string, so "beardie" reaches bearded dragon articles too, not
// just the guide that localSearch.js covers.
const matchesQuery = (post, variants) =>
  [post.title, post.excerpt, ...(post.tags || [])]
    .some(text => typeof text === 'string' && variants.some(v => text.toLowerCase().includes(v)));

const EMPTY_LOCAL = { guides: [], encyclopedia: [], glossary: [], beastlypedia: [], articles: [] };
const countLocal = (local) =>
  local.guides.length + local.encyclopedia.length + local.beastlypedia.length + local.glossary.length;

// "Short Stories" is a real category on MDX posts, but /blog/category/short-stories/
// 301s to /chronicles/ (see public/_redirects, mirrored in prerender.mjs), so
// it isn't a blog category anyone should be sent to browse.
const BROWSE_CATEGORIES = CATEGORIES.filter(c => c.slug !== 'short-stories');

export default function Search() {
  const navigate = useNavigate();
  const { query: queryParam } = useParams();
  // Legacy fallback: a /search/?q=... link shared before this moved to a path
  // segment (/search/:query/) still resolves on first load. Read once here;
  // every write from this page on uses the path form via handleInput below.
  const initialQuery = queryParam
    ? decodeURIComponent(queryParam)
    : new URLSearchParams(window.location.search).get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState('relevance');
  const [activeCategory, setActiveCategory] = useState('');
  // Sticky once a real query has been entered, exactly like the ref it
  // replaces - but as state, since results are derived during render now and
  // nothing else re-renders this component when the flag flips.
  const [hasSearched, setHasSearched] = useState(Boolean(initialQuery));
  // The typo rescue waits until typing settles (the same 400ms pause the URL
  // update below uses), so a partial word like "beard" never flashes a
  // correction mid-keystroke. Alias expansion has no such delay - it is an
  // exact map lookup and inert on partial words.
  const [settledQuery, setSettledQuery] = useState(initialQuery);
  // Set by "Search instead for" on a corrected search; suppresses the typo
  // rescue until the query changes again.
  const [forceRaw, setForceRaw] = useState(false);
  const debounceRef = useRef(null);

  // Newest-first to match the old `| order(publishedAt desc)` query, so the
  // default "relevance" sort (deliberately a no-op) keeps the same ordering.
  // Articles and local content resolve in one memo because the typo rescue
  // may only rewrite the query once BOTH came back empty.
  const { results, localResults, didYouMean, rescued } = useMemo(() => {
    const norm = normalizeQuery(query);
    if (!norm.raw) return { results: [], localResults: EMPTY_LOCAL, didYouMean: null, rescued: false };

    const byDate = (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt);
    let articles = searchablePosts.filter(p => matchesQuery(p, norm.variants));
    let local = searchLocalContent(query);
    let suggestion = norm.didYouMean;
    let rescuedFlag = false;

    // Last resort, after aliases found nothing: 1-2 letter typo correction,
    // adopted only when the corrected query actually produces results.
    if (!articles.length && !countLocal(local) && !forceRaw && settledQuery === query) {
      const corrected = correctQuery(norm.canonical);
      if (corrected) {
        const cNorm = normalizeQuery(corrected);
        const cArticles = searchablePosts.filter(p => matchesQuery(p, cNorm.variants));
        const cLocal = searchLocalContent(corrected);
        if (cArticles.length || countLocal(cLocal)) {
          articles = cArticles;
          local = cLocal;
          suggestion = cNorm.canonical;
          rescuedFlag = true;
        }
      }
    }

    return { results: articles.sort(byDate), localResults: local, didYouMean: suggestion, rescued: rescuedFlag };
  }, [query, settledQuery, forceRaw]);

  const handleInput = (val) => {
    setQuery(val);
    setForceRaw(false);
    if (val.trim()) setHasSearched(true);
    // trackSearch debounces and dedupes on its own, so it is safe to call on
    // every keystroke rather than nesting it inside the timeout below. It
    // reports `search`; the debounced `search_performed` below is a separate,
    // coarser event kept from when this page reported to base44 instead of GA4.
    trackSearch(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSettledQuery(val);
      navigate(val ? `/search/${encodeURIComponent(val)}/` : '/search/', { replace: true });
      if (val.trim()) {
        trackEvent('search_performed', { query: val });
      }
    }, 400);
  };

  // Safe matching internally using slugify
  const filtered = results.filter(p =>
    !activeCategory ||
    slugify(p.category) === slugify(activeCategory) ||
    (p.tags || []).some(t => slugify(t) === slugify(activeCategory))
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'relevance') return 0;
    const da = new Date(a.publishedAt), db = new Date(b.publishedAt);
    return sort === 'newest' ? db - da : da - db;
  });

  // Care guides, encyclopedia entries and glossary terms aren't blog posts, so
  // they get their own compact match list above the article results.
  // localResults.articles is deliberately NOT spread in: it searches the same
  // MDX posts `results` already covers (capped at 6, without images, dates,
  // category filtering or sorting), so including it would list every article
  // match twice.
  const localResultsFlat = [...localResults.guides, ...localResults.encyclopedia, ...localResults.beastlypedia, ...localResults.glossary];

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
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Search | Beastly Facts" />
        <meta name="twitter:description" content="Search animal care guides, fun facts, and pet care articles on Beastly Facts." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
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
                <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-2 p-2 -m-2">
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        {/* Did-you-mean: never a silent rewrite. The input and URL keep the
            raw string; this line says what the results actually show. A
            rescued (typo-corrected) search offers a way back to the literal
            query; an alias expansion doesn't need one, since the raw string's
            own matches are already included alongside. */}
        {didYouMean && (
          <p className="mb-4 text-sm font-body text-muted-foreground">
            {rescued ? (
              <>
                Showing results for <span className="font-semibold text-foreground">{didYouMean}</span>{'. '}
                <button
                  type="button"
                  onClick={() => setForceRaw(true)}
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  {`Search instead for "${query.trim()}"`}
                </button>
              </>
            ) : (
              <>Including results for <span className="font-semibold text-foreground">{didYouMean}</span>.</>
            )}
          </p>
        )}

        {/* Guides / Encyclopedia / Glossary matches - static data, matched instantly client-side */}
        {query.trim() && localResultsFlat.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-body text-muted-foreground mb-3">
              {`${localResultsFlat.length} guide${localResultsFlat.length !== 1 ? 's' : ''} & reference match${localResultsFlat.length !== 1 ? 'es' : ''} for "${query}"`}
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
          <div className="flex flex-wrap items-center gap-y-2 mb-4 text-xs font-body">
            {[{ slug: '', label: 'All' }, ...CATEGORIES.filter(c => results.some(r => slugify(r.category) === slugify(c.slug) || (r.tags || []).some(t => slugify(t) === slugify(c.slug))))].map((c, i) => {
              const isActive = c.slug === '' ? !activeCategory : activeCategory === c.slug;
              return (
                <React.Fragment key={c.slug || 'all'}>
                  {i > 0 && <span className="text-muted-foreground/40 mx-2.5" aria-hidden="true">&middot;</span>}
                  <button
                    type="button"
                    onClick={() => setActiveCategory(c.slug === '' ? '' : (activeCategory === c.slug ? '' : c.slug))}
                    className={`inline-block pb-1 border-b-2 whitespace-nowrap transition-colors ${
                      isActive ? 'border-secondary text-foreground font-semibold' : 'border-transparent text-muted-foreground font-medium hover:text-foreground'
                    }`}
                  >
                    {c.slug === '' ? 'All' : `${c.emoji} ${c.label}`}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Sort + count */}
        {hasSearched && query && (
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-body text-muted-foreground">
              {`${sorted.length} result${sorted.length !== 1 ? 's' : ''} for "${query}"`}
            </p>
            {results.length > 1 && (
              <div className="flex gap-2">
                {['relevance', 'newest', 'oldest'].map(s => (
                  <button key={s} onClick={() => setSort(s)}
                    className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full transition-all ${sort === s ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Results */}
        {sorted.length > 0 && (
          <div className="space-y-3">
            {sorted.map((post, i) => (
              <motion.div key={post._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                <CompactPostCard
                  post={post}
                  onClick={() => navigate(`/blog/${post.slug?.current || post._id || post.id}/`)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {hasSearched && query && sorted.length === 0 && localResultsFlat.length === 0 && (
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
                    className="text-xs font-body font-semibold px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-secondary/40 transition-all flex items-center gap-1"
                  >
                    {`${c.emoji} ${c.label}`}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Pre-search state - Browse popular categories */}
        {!hasSearched && (
          <div className="py-8">
            <p className="text-sm font-body text-muted-foreground mb-4">Browse popular categories:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BROWSE_CATEGORIES.map(c => (
                <Link
                  key={c.slug}
                  // c.to for the categories whose route is only a 301. Same
                  // reason as the Navbar menu. See categories.js.
                  to={c.to || `/blog/category/${c.slug}/`}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:border-secondary/40 hover:shadow-sm transition-all group"
                >
                  <span className="text-xl">{c.emoji}</span>
                  <span className="text-sm font-body font-semibold text-foreground group-hover:text-secondary transition-colors">{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}