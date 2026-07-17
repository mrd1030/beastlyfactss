import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { slugify } from '@/lib/utils/slugify';
import { truncateDescription } from '@/lib/utils/truncate';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { facts, categories } from '@/lib/data/facts'; 
import FactCard from '@/components/shared/FactCard'; 
import FactModal from '@/components/shared/FactModal'; 

// Reduced footprint size to instantly clear initial painting lag
const PAGE_SIZE = 16; 


function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Facts() {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug, factCat } = useParams();

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFact, setSelectedFact] = useState(null);
  const [page, setPage] = useState(1);
  const [randomized, setRandomized] = useState(false);
  const [randomOrder, setRandomOrder] = useState([]);

  const allFacts = useMemo(() => facts.map((f, i) => ({ ...f, factNumber: i + 1 })), []);
  const allCategories = useMemo(() => ['All', ...categories.map(c => c.name)], []);

  // /facts/:slug is a direct link to one specific fact (used by the social
  // feed - see public/_worker.js) - matched by slugified title since facts
  // have no dedicated id-based permalink field.
  const linkedFact = useMemo(() => {
    if (!slug) return null;
    return allFacts.find(f => slugify(f.title) === slug) || null;
  }, [slug, allFacts]);

  // Central URL synchronizer. /facts/category/:factCat is the canonical
  // category URL; legacy ?category= links get replace-redirected onto it so
  // old bookmarks and shares still land on the right filter.
  useEffect(() => {
    if (slug) return; // a fact permalink is open - leave list state alone

    const params = new URLSearchParams(location.search);
    const legacyCat = params.get('category');
    if (legacyCat) {
      params.delete('category');
      const matched = allCategories.find(c => slugify(c) === legacyCat);
      navigate({
        pathname: matched && matched !== 'All' ? `/facts/category/${slugify(matched)}/` : '/facts/',
        search: params.toString(),
      }, { replace: true });
      return;
    }

    if (factCat) {
      const matchedCat = allCategories.find(c => slugify(c) === factCat);
      if (!matchedCat || matchedCat === 'All') {
        navigate('/facts/', { replace: true });
        return;
      }
      setActiveCategory(matchedCat);
    } else {
      setActiveCategory('All');
    }
    setPage(parseInt(params.get('page')) || 1);
  }, [slug, factCat, location.search, allCategories, navigate]);

  // The URL is the source of truth for which fact is open, in both
  // directions: a direct /facts/:slug link opens the right modal, and
  // clearing the slug (browser back, or handleCloseFact below) closes it.
  useEffect(() => {
    setSelectedFact(linkedFact);
  }, [linkedFact]);

  // Fact permalinks are clean (/facts/<slug>/, no category or page carried
  // along); the list URL the user came from rides in history state so closing
  // the modal returns to the same filtered view.
  const handleOpenFact = (fact) => {
    navigate(`/facts/${slugify(fact.title)}/`, {
      state: { from: `${location.pathname}${location.search}` },
    });
  };

  const handleCloseFact = () => {
    navigate(location.state?.from || '/facts/');
  };

  const filtered = useMemo(() => {
    return allFacts.filter(f => {
      const matchesCategory = activeCategory === 'All' || f.category === activeCategory; 
      const matchesSearch = !search ||
        f.title.toLowerCase().includes(search.toLowerCase()) || 
        f.animal.toLowerCase().includes(search.toLowerCase()) || 
        f.fact.toLowerCase().includes(search.toLowerCase()); 
      return matchesCategory && matchesSearch; 
    });
  }, [allFacts, search, activeCategory]);

  const displayFacts = useMemo(() => {
    if (randomized && randomOrder.length > 0) { 
      const ids = new Set(filtered.map(f => f.id || f.factNumber)); 
      return randomOrder.filter(f => ids.has(f.id || f.factNumber)); 
    }
    return filtered; 
  }, [filtered, randomized, randomOrder]);

  const handleRandomize = useCallback(() => {
    if (!randomized) { 
      setRandomOrder(shuffleArray(filtered)); 
      setRandomized(true); 
    } else {
      setRandomized(false); 
      setRandomOrder([]); 
    }
    setPage(1); 
  }, [randomized, filtered]);

  const totalPages = Math.ceil(displayFacts.length / PAGE_SIZE); 
  const paginated = displayFacts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE); 

  const handleSearchChange = (e) => {
    setSearch(e.target.value); 
    setPage(1); 
    setRandomized(false); 
    setRandomOrder([]); 
  };

  const handlePageChange = (newPage) => {
    const urlParams = new URLSearchParams(location.search);
    if (newPage > 1) {
      urlParams.set('page', newPage.toString());
    } else {
      urlParams.delete('page');
    }
    navigate({ search: urlParams.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🌟 Clean Sliding Page Window Logic (Max 5 buttons visible)
  const visiblePages = useMemo(() => {
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }, [page, totalPages]);

  // 🌟 Centered & Compact Pagination Component
  const renderPagination = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex items-center justify-center gap-2 bg-card border border-border/60 p-1.5 rounded-xl shadow-sm max-w-max mx-auto">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/60 border border-border/50 text-muted-foreground disabled:opacity-40 hover:text-foreground hover:border-secondary/40 transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="hidden sm:flex items-center gap-1">
          {visiblePages[0] > 1 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="w-8 h-8 rounded-lg text-xs font-display font-bold text-muted-foreground hover:border-border border border-transparent transition-all"
              >
                1
              </button>
              {visiblePages[0] > 2 && <span className="text-muted-foreground text-xs px-0.5">...</span>}
            </>
          )}

          {visiblePages.map(p => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className={`w-8 h-8 rounded-lg text-xs font-display font-bold transition-all ${
                p === page
                  ? 'bg-secondary text-secondary-foreground shadow-sm'
                  : 'bg-transparent border border-transparent text-muted-foreground hover:border-border'
              }`}
            >
              {p}
            </button>
          ))}

          {visiblePages[visiblePages.length - 1] < totalPages && (
            <>
              {visiblePages[visiblePages.length - 1] < totalPages - 1 && <span className="text-muted-foreground text-xs px-0.5">...</span>}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="w-8 h-8 rounded-lg text-xs font-display font-bold text-muted-foreground hover:border-border border border-transparent transition-all"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <span className="sm:hidden text-xs font-display font-bold px-2 text-muted-foreground">
          {page} / {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/60 border border-border/50 text-muted-foreground disabled:opacity-40 hover:text-foreground hover:border-secondary/40 transition-all"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  const pageTitle = linkedFact
    ? `${linkedFact.animal}: ${linkedFact.title} | Beastly Facts`
    : activeCategory === 'All'
      ? 'Fun Animal Facts | Beastly Facts'
      : `${activeCategory} Facts | Beastly Facts`;
  const pageDescription = linkedFact
    ? truncateDescription(`${linkedFact.emoji} ${linkedFact.fact}`)
    : activeCategory === 'All'
      ? 'Browse hundreds of mind-blowing animal facts on Beastly Facts - from weird reptile behaviours to surprising dog science and wild animal trivia.'
      : `Discover the most surprising and fascinating ${activeCategory} facts on Beastly Facts - curated, verified, and genuinely mind-blowing.`;
  const canonicalPath = linkedFact
    ? `https://beastlyfacts.com/facts/${slugify(linkedFact.title)}/`
    : activeCategory === 'All'
      ? 'https://beastlyfacts.com/facts/'
      : `https://beastlyfacts.com/facts/category/${slugify(activeCategory)}/`;
  // Direct fact links aren't prerendered (Facts.jsx is already flagged CPU-heavy
  // in prerender.mjs, and 173 more renders isn't worth it just for this) - noindex
  // is the honest signal, same as this site's other client-JS-only routes.
  const shouldNoindex = Boolean(linkedFact) || hasNoindexStateParams(location.search);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalPath} />
        {page > 1 && <link rel="prev" href={`${canonicalPath}${page === 2 ? '' : `?page=${page - 1}`}`} />}
        {page < totalPages && <link rel="next" href={`${canonicalPath}?page=${page + 1}`} />}
        <meta name="robots" content={shouldNoindex ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalPath} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - animal facts collection" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Brain">🧠</span> 
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Fun Animal Facts
            </h1> 
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Mind-blowing facts that will make you say "wait, REALLY?!" 🤯
            </p>
            <Link to="/fact-files/" className="inline-flex items-center gap-1 mt-2 text-xs font-display font-semibold text-secondary hover:underline">
              Want deeper dives? Browse our Fact Files →
            </Link>
          </motion.div>

          {/* Search + Randomize */}
          <div className="flex gap-2 mt-6 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /> 
              <input
                type="text"
                placeholder="Search facts..."
                value={search} 
                onChange={handleSearchChange}
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground" 
              />
            </div>
            <button
              onClick={handleRandomize}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-display font-bold border transition-all flex-shrink-0 ${
                randomized
                  ? 'bg-secondary text-secondary-foreground border-secondary' 
                  : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-secondary/40' 
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" /> Randomize 
            </button>
          </div>

          {/* Category chips - real links (not buttons) so the category pages
              are crawlable from /facts/ and from each other; the Ahrefs
              2026-07-16 audit flagged them as having a single inlink. */}
          <div className="flex flex-wrap gap-2 mt-4">
            {allCategories.map(cat => (
              <Link
                key={cat}
                to={slugify(cat) === 'all' ? '/facts/' : `/facts/category/${slugify(cat)}/`}
                onClick={() => { setRandomized(false); setRandomOrder([]); }}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-secondary text-secondary-foreground shadow-md shadow-secondary/20'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-secondary/30'
                }`}
              >
                {cat === 'All' ? '✨ All' : `${categories.find(c => c.name === cat)?.emoji || ''} ${cat}`}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        {/* Status Text + Upper Page Controller */}
        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <p className="text-xs text-muted-foreground font-body">
            {displayFacts.length} facts found 
            {randomized && <span className="ml-1 text-secondary font-semibold">· randomized 🎲</span>} 
            {totalPages > 1 && ` · Page ${page} of ${totalPages}`} 
          </p>
          
          {/* 🌟 Fully Centered, Safe-Width Upper Pagination Row */}
          <div className="w-full">
            {renderPagination()}
          </div>
        </div>

        {/* Fact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((fact, i) => (
            <div key={fact.id || fact.factNumber} className="relative">
              <span className="absolute top-2 left-2 z-10 bg-primary/80 text-primary-foreground text-xs font-display font-bold px-1.5 py-0.5 rounded-md">
                #{fact.factNumber} 
              </span>
              <FactCard fact={fact} index={i} onOpen={handleOpenFact} />
            </div>
          ))}
        </div>

        {/* Empty Search Result Fallback */}
        {displayFacts.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span> 
            <p className="font-display font-bold text-foreground">No facts found!</p> 
            <p className="text-sm text-muted-foreground font-body mt-1">Try a different search or category.</p> 
          </div>
        )}

        {/* Lower Pagination Row */}
        <div className="mt-10">
          {renderPagination()}
        </div>
      </div>

      <FactModal fact={selectedFact} onClose={handleCloseFact} /> 
    </div>
  );
}