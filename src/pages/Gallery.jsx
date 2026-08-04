import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { Heart, Share2, Check, Search } from 'lucide-react';
import { facts, categories } from '@/lib/data/facts';
import { imagePathFor } from '@/lib/data/factImages';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { slugify } from '@/lib/utils/slugify';
import FactModal from '@/components/shared/FactModal';
import ImageLightbox from '@/components/shared/ImageLightbox';
import Pagination from '@/components/shared/Pagination';
import CrossLinkCta from '@/components/shared/CrossLinkCta';
import FactOrderControl from '@/components/shared/FactOrderControl';
import { seededShuffle } from '@/lib/utils/seededShuffle';

const PAGE_SIZE = 30;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('daily');
  const [randomOrder, setRandomOrder] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const listRef = useRef(null);
  const [page, setPage] = useState(1);

  // Read ?page= back on mount and on any history move, so back and forward
  // return to the page you were on rather than silently resetting to 1.
  useEffect(() => {
    const p = parseInt(new URLSearchParams(location.search).get('page'), 10);
    setPage(Number.isFinite(p) && p > 0 ? p : 1);
  }, [location.search]);
  const [selectedFact, setSelectedFact] = useState(null);
  const [imageFact, setImageFact] = useState(null);
  const { toggleFavorite, isFavorite } = useFavoritesCtx();
  const [copiedId, setCopiedId] = useState(null);

  // Same handler FactCard uses, including the URL it builds. Sharing an image
  // shares its fact page, and that page's og:image is this exact photo (see
  // Facts.jsx, which resolves og:image through absoluteImageFor), so the
  // preview shows the picture rather than the generic hero.
  const handleShare = (e, fact) => {
    e.stopPropagation();
    const factsPageUrl = `${window.location.origin}/facts/${slugify(fact.title)}/`;
    const factId = fact.id || fact._id;

    if (navigator.share) {
      navigator.share({
        title: fact.title,
        text: `${fact.emoji || '🐾'} ${fact.fact}`,
        url: factsPageUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${fact.emoji || '🐾'} ${fact.fact} ${factsPageUrl}`);
      setCopiedId(factId);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const allCategories = useMemo(() => ['All', ...categories.map(c => c.name)], []);

  // Only facts with a real, dedicated photo - a newly added fact without one
  // yet shouldn't show up here as a broken/generic thumbnail.
  //
  // factNumber comes off the canonical file position, before any filtering or
  // shuffling, so "Numbered" here means the same sequence as the numbers shown
  // on the cards over on /facts/.
  const withPhotos = useMemo(
    () => facts
      .map((f, i) => ({ fact: f, factNumber: i + 1, imagePath: imagePathFor(f) }))
      .filter(f => f.imagePath),
    []
  );

  // Same day-seeded rotation as /facts/, and for the same reason: /gallery/ is
  // prerendered, so a Math.random() order would leave the static HTML and the
  // hydrating client disagreeing. See the note on seededShuffle.js. The seed
  // starts fixed and upgrades after mount because this page is not rebuilt
  // daily.
  const [daySeed, setDaySeed] = useState(1);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setDaySeed(new Date().getDate());
  }, []);

  const dailyPhotos = useMemo(() => seededShuffle(withPhotos, daySeed), [withPhotos, daySeed]);

  // Same three fields Facts.jsx searches (title, animal, fact text), so a term
  // that finds something on one page finds the same fact on the other.
  const matchesSearch = (fact, q) =>
    !q ||
    fact.title.toLowerCase().includes(q) ||
    fact.animal.toLowerCase().includes(q) ||
    fact.fact.toLowerCase().includes(q);

  const query = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    return dailyPhotos.filter(({ fact }) =>
      (activeCategory === 'All' || fact.category === activeCategory) && matchesSearch(fact, query)
    );
  }, [dailyPhotos, activeCategory, query]);

  const displayPhotos = useMemo(() => {
    if (order === 'numeric') return [...filtered].sort((a, b) => a.factNumber - b.factNumber);
    if (order === 'random' && randomOrder.length > 0) {
      const keep = new Set(filtered.map(p => p.factNumber));
      return randomOrder.filter(p => keep.has(p.factNumber));
    }
    return filtered; // 'daily' - filtered already comes off the daily order
  }, [filtered, order, randomOrder]);

  const handleRandomize = () => {
    const a = [...filtered];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setRandomOrder(a);
    setOrder('random');
    setPageParam(1);
  };

  const handleOrderChange = (next) => {
    setOrder(next);
    setRandomOrder([]);
    setPageParam(1);
  };

  // Why an empty result is empty, so the message can name the real cause. The
  // category filter is nearly always it: every fact currently has a photo, so
  // "no photo yet" was describing a state that does not exist while the actual
  // reason (a category pill still selected) went unmentioned.
  const matchesIgnoringCategory = useMemo(
    () => (query ? withPhotos.filter(({ fact }) => matchesSearch(fact, query)).length : 0),
    [withPhotos, query]
  );
  const matchesWithoutPhotos = useMemo(
    () => (query ? facts.filter(f => matchesSearch(f, query)).length : 0),
    [query]
  );

  const totalPages = Math.ceil(displayPhotos.length / PAGE_SIZE);
  // Clamped, because page comes from ?page= and nothing stops a stale or
  // hand-edited link asking for a page past the end. Unclamped that renders
  // an empty list with no page highlighted rather than the last page.
  const safePage = Math.min(Math.max(1, page), Math.max(1, totalPages));
  const paginated = displayPhotos.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const setPageParam = (newPage) => {
    const params = new URLSearchParams(location.search);
    if (newPage > 1) params.set('page', String(newPage));
    else params.delete('page');
    navigate({ search: params.toString() }, { replace: false });
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPageParam(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to page 1 on every keystroke: without it, typing while on page 4 of a
  // wide result set drops you onto an empty page of a much shorter one.
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPageParam(1);
  };

  // No scrolling here. Pagination handles it, and only for the copy below
  // the grid, since the one above it is already at the top.
  const handlePageChange = (newPage) => setPageParam(newPage);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Photo Gallery | Beastly Facts</title>
        <meta name="description" content="Browse every real animal photo from Beastly Facts in one gallery - hover to preview, click to read the fact behind it." />
        <link rel="canonical" href="https://beastlyfacts.com/gallery/" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Photo Gallery | Beastly Facts" />
        <meta property="og:description" content="Browse every real animal photo from Beastly Facts in one gallery - hover to preview, click to read the fact behind it." />
        <meta property="og:url" content="https://beastlyfacts.com/gallery/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Gallery | Beastly Facts" />
        <meta name="twitter:description" content="Browse every real animal photo from Beastly Facts in one gallery - hover to preview, click to read the fact behind it." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Camera">📸</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Photo Gallery
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Every real animal photo behind our facts, in one place. Hover to preview, click to read the fact.
            </p>
          </motion.div>

          <CrossLinkCta to="/facts/" label="Browse all facts as cards" />

          {/* Search */}
          <div className="mt-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search photos..."
                value={search}
                onChange={handleSearchChange}
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <FactOrderControl order={order} onChange={handleOrderChange} onRandomize={handleRandomize} className="mt-4" />

          <div className="flex flex-wrap gap-2 mt-4">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-secondary text-secondary-foreground shadow-md shadow-secondary/20'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-secondary/30'
                }`}
              >
                {cat === 'All' ? '✨ All' : `${categories.find(c => c.name === cat)?.emoji || ''} ${cat}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <p className="text-xs text-muted-foreground font-body text-center mb-4">
          {`${displayPhotos.length} photos${totalPages > 1 ? ` · Page ${safePage} of ${totalPages}` : ''}`}
        </p>

        {/* No scrollTo on this one: it sits above the grid, so you are already
            where a scroll would put you. */}
        <div className="mb-6">
          <Pagination page={safePage} totalPages={totalPages} onChange={handlePageChange} />
        </div>

        <div ref={listRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* A div, not a button, because the save and share controls are
              themselves buttons and nesting interactive elements is invalid and
              breaks keyboard behaviour. The tile itself is a button filling the
              square, with the actions as siblings stacked above it. */}
          {paginated.map(({ fact, imagePath }, i) => {
            const factId = fact.id || fact._id;
            const fav = isFavorite(factId);
            return (
              <motion.div
                key={factId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % PAGE_SIZE) * 0.02, duration: 0.3 }}
                className="group relative aspect-square rounded-xl overflow-hidden bg-muted border border-border/60"
              >
                <button
                  type="button"
                  onClick={() => setSelectedFact(fact)}
                  className="absolute inset-0 w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-xl"
                  aria-label={`${fact.animal}: ${fact.title}`}
                >
                  <img
                    src={imagePath}
                    alt={`${fact.animal} - ${fact.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="text-left">
                      <p className="text-[10px] font-body font-bold uppercase tracking-wider text-white/70">
                        {fact.category}
                      </p>
                      <p className="text-xs font-body font-bold text-white leading-tight mt-0.5">
                        {fact.title}
                      </p>
                    </div>
                  </div>
                </button>

                {/* group-focus-within keeps these reachable by keyboard, where
                    there is no hover to reveal them. A saved fact stays visible
                    so the state is readable without hovering every tile. */}
                <div
                  className={`absolute top-2 right-2 z-10 flex gap-1.5 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 ${
                    fav ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(factId); }}
                    className="p-1.5 rounded-full bg-black/55 backdrop-blur-sm text-white hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 transition-colors"
                    aria-label={fav ? `Remove ${fact.title} from your Pack` : `Save ${fact.title} to your Pack`}
                    aria-pressed={fav}
                  >
                    <Heart className={`w-3.5 h-3.5 ${fav ? 'fill-secondary text-secondary' : ''}`} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleShare(e, fact)}
                    className="p-1.5 rounded-full bg-black/55 backdrop-blur-sm text-white hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 transition-colors"
                    aria-label={`Share ${fact.title}`}
                  >
                    {copiedId === factId
                      ? <Check className="w-3.5 h-3.5 text-secondary" />
                      : <Share2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {displayPhotos.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">{search ? '🔍' : '📷'}</span>
            {search ? (
              <>
                <p className="font-body font-bold text-foreground">
                  {matchesIgnoringCategory > 0
                    ? `No ${activeCategory} photos match "${search}"`
                    : `No photos match "${search}"`}
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {matchesIgnoringCategory > 0 ? (
                    // The commonest case by far: the term does match, just not
                    // inside the category still selected above.
                    <>
                      {`${matchesIgnoringCategory} ${matchesIgnoringCategory === 1 ? 'photo matches' : 'photos match'} in other categories. `}
                      <button
                        type="button"
                        onClick={() => handleCategoryChange('All')}
                        className="font-body font-semibold text-secondary hover:underline"
                      >
                        Search all categories →
                      </button>
                    </>
                  ) : matchesWithoutPhotos > 0 ? (
                    // Only reachable once a fact exists without a photo. None do
                    // today, so this is a graceful fallback rather than a state
                    // anyone can currently hit.
                    <>
                      Some matching facts have no photo yet.{' '}
                      <Link to={`/facts/?search=${encodeURIComponent(search)}`} className="font-body font-semibold text-secondary hover:underline">
                        Search all facts instead →
                      </Link>
                    </>
                  ) : (
                    <>
                      Nothing matches that yet.{' '}
                      <Link to={`/facts/?search=${encodeURIComponent(search)}`} className="font-body font-semibold text-secondary hover:underline">
                        Try searching all facts →
                      </Link>
                    </>
                  )}
                </p>
              </>
            ) : (
              <p className="font-body font-bold text-foreground">No photos in this category yet!</p>
            )}
          </div>
        )}

        <div className="mt-10">
          <Pagination
            page={safePage}
            totalPages={totalPages}
            onChange={handlePageChange}
            scrollTo={listRef}
          />
        </div>
      </div>

      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} onOpenImage={setImageFact} />
      <ImageLightbox fact={imageFact} imagePath={imagePathFor(imageFact)} onClose={() => setImageFact(null)} />
    </div>
  );
}
