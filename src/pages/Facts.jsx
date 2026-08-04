import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { slugify } from '@/lib/utils/slugify';
import { seededShuffle } from '@/lib/utils/seededShuffle';
import { truncateDescription } from '@/lib/utils/truncate';
import { motion } from '@/lib/motion-safe';
import { Search } from 'lucide-react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { facts, categories } from '@/lib/data/facts';
import { imagePathFor, absoluteImageFor } from '@/lib/data/factImages';
import FactCard from '@/components/shared/FactCard';
import CrossLinkCta from '@/components/shared/CrossLinkCta';
import FactOrderControl from '@/components/shared/FactOrderControl';
import Pagination from '@/components/shared/Pagination';
import FactModal from '@/components/shared/FactModal';
import ImageLightbox from '@/components/shared/ImageLightbox';

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
  const [imageFact, setImageFact] = useState(null);
  const [page, setPage] = useState(1);
  const listRef = useRef(null);
  // 'daily'   - seeded shuffle that rotates once a day (the default)
  // 'numeric' - by fact number, so #1 to #275 in order
  // 'random'  - a true shuffle, reshuffled on every click of the button
  //
  // This replaced a `randomized` boolean, which could only express two of the
  // three and had no way to say "leave it in numbered order".
  const [order, setOrder] = useState('daily');
  const [randomOrder, setRandomOrder] = useState([]);

  // factNumber is assigned from the canonical file order BEFORE any shuffling,
  // so the "#26" on a card means the same fact tomorrow as it does today.
  const allFacts = useMemo(() => facts.map((f, i) => ({ ...f, factNumber: i + 1 })), []);

  // The default order rotates daily rather than being random per page load.
  // Math.random() here would be a real bug, not just a preference: /facts/ is
  // prerendered, so the static HTML would carry one order and the client would
  // hydrate a different one - the structural mismatch seededShuffle.js was
  // written to avoid. Seeding by the day keeps prerender and client agreeing,
  // keeps ?page= stable while you are browsing, and still gives a repeat
  // visitor a different first screen tomorrow.
  //
  // Seed starts fixed and upgrades after mount, the same as CategoryBrowse.jsx:
  // this page is not rebuilt daily, so deriving the real day during the
  // hydration-critical first render would mismatch whatever day the last
  // deploy happened to build on.
  const [daySeed, setDaySeed] = useState(1);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setDaySeed(new Date().getDate());
  }, []);

  const dailyFacts = useMemo(() => seededShuffle(allFacts, daySeed), [allFacts, daySeed]);
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

  // Apply ?search= once, so the gallery's "search all facts instead" link lands
  // with the term already in the box.
  //
  // Mount only, on purpose. Paginating rewrites location.search without
  // carrying the term, so re-reading it on every change would empty the box the
  // moment you clicked page 2. And the initial state stays '' to match the
  // prerendered HTML, with the term applied after mount, rather than seeding
  // useState from the URL and hydrating against markup that was rendered
  // without it.
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get('search');
    if (initial) setSearch(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    return dailyFacts.filter(f => {
      const matchesCategory = activeCategory === 'All' || f.category === activeCategory; 
      const matchesSearch = !search ||
        f.title.toLowerCase().includes(search.toLowerCase()) || 
        f.animal.toLowerCase().includes(search.toLowerCase()) || 
        f.fact.toLowerCase().includes(search.toLowerCase()); 
      return matchesCategory && matchesSearch; 
    });
  }, [dailyFacts, search, activeCategory]);

  const displayFacts = useMemo(() => {
    if (order === 'numeric') {
      return [...filtered].sort((a, b) => a.factNumber - b.factNumber);
    }
    if (order === 'random' && randomOrder.length > 0) {
      const ids = new Set(filtered.map(f => f.id || f.factNumber));
      return randomOrder.filter(f => ids.has(f.id || f.factNumber));
    }
    return filtered; // 'daily' - `filtered` already comes off the daily order
  }, [filtered, order, randomOrder]);

  // Clicking Random while already on Random reshuffles rather than toggling
  // off, since there is now an explicit way back to either other order.
  const handleRandomize = useCallback(() => {
    setRandomOrder(shuffleArray(filtered));
    setOrder('random');
    setPage(1);
  }, [filtered]);

  const handleOrderChange = useCallback((next) => {
    setOrder(next);
    setRandomOrder([]);
    setPage(1);
  }, []);

  const totalPages = Math.ceil(displayFacts.length / PAGE_SIZE); 
  // Clamped, because page comes from ?page= and nothing stops a stale or
  // hand-edited link asking for a page past the end. Unclamped that renders
  // an empty list with no page highlighted rather than the last page.
  const safePage = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const paginated = displayFacts.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const handleSearchChange = (e) => {
    setSearch(e.target.value); 
    setPage(1); 
    setOrder(o => (o === 'random' ? 'daily' : o)); 
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
  // Real per-fact photo for the share preview when a specific fact is linked
  // (see src/lib/data/factImages.js) - falls back to the generic hero otherwise,
  // since a category/list page has no single representative photo.
  const heroImage = 'https://beastlyfacts.com/assets/hero-1200.jpg';
  const factImage = linkedFact ? absoluteImageFor(linkedFact) : null;
  const pageImage = factImage || heroImage;
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
        <meta property="og:image" content={pageImage} />
        {!factImage && <meta property="og:image:width" content="1200" />}
        {!factImage && <meta property="og:image:height" content="630" />}
        <meta property="og:image:alt" content={linkedFact ? `${linkedFact.animal} - ${linkedFact.title}` : 'Beastly Facts - animal facts collection'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
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
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
              <Link to="/fact-files/" className="inline-flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline p-1.5 -m-1.5">
                Want deeper dives? Browse our Fact Files →
              </Link>
            </div>
          </motion.div>

          <CrossLinkCta to="/gallery/" label="Browse the photo gallery" />

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
          </div>

          <FactOrderControl order={order} onChange={handleOrderChange} onRandomize={handleRandomize} />

          {/* Category chips - real links (not buttons) so the category pages
              are crawlable from /facts/ and from each other; the Ahrefs
              2026-07-16 audit flagged them as having a single inlink. */}
          <div className="flex flex-wrap gap-2 mt-4">
            {allCategories.map(cat => (
              <Link
                key={cat}
                to={slugify(cat) === 'all' ? '/facts/' : `/facts/category/${slugify(cat)}/`}
                onClick={() => { setOrder(o => (o === 'random' ? 'daily' : o)); setRandomOrder([]); }}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${
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
            {`${displayFacts.length} facts found`}
            {order === 'random' && <span className="ml-1 text-secondary font-semibold">· randomized 🎲</span>}
            {order === 'numeric' && <span className="ml-1 text-secondary font-semibold">· numbered</span>}
            {totalPages > 1 && <span>{` · Page ${safePage} of ${totalPages}`}</span>}
          </p>
          
          {/* 🌟 Fully Centered, Safe-Width Upper Pagination Row */}
          <div className="w-full">
            <Pagination page={safePage} totalPages={totalPages} onChange={handlePageChange} />
          </div>
        </div>

        {/* Fact Cards Grid */}
        <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((fact, i) => (
            <div key={fact.id || fact.factNumber} className="relative">
              <span className="absolute top-2 left-2 z-10 bg-primary/80 text-primary-foreground text-xs font-body font-bold px-1.5 py-0.5 rounded-md">
                {`#${fact.factNumber}`}
              </span>
              <FactCard fact={fact} index={i} onOpen={handleOpenFact} onOpenImage={setImageFact} />
            </div>
          ))}
        </div>

        {/* Empty Search Result Fallback */}
        {displayFacts.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span> 
            <p className="font-body font-bold text-foreground">No facts found!</p> 
            <p className="text-sm text-muted-foreground font-body mt-1">Try a different search or category.</p> 
          </div>
        )}

        {/* Lower Pagination Row */}
        <div className="mt-10">
          <Pagination page={safePage} totalPages={totalPages} onChange={handlePageChange} scrollTo={listRef} />
        </div>
      </div>

      <FactModal fact={selectedFact} onClose={handleCloseFact} onOpenImage={setImageFact} />
      <ImageLightbox fact={imageFact} imagePath={imagePathFor(imageFact)} onClose={() => setImageFact(null)} />
    </div>
  );
}