import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { facts as staticFacts, categories } from '@/lib/data/facts';
import FactCard from '@/components/shared/FactCard';
import FactModal from '@/components/shared/FactModal';

const PAGE_SIZE = 36;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Facts() {
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('category') || 'All';

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedFact, setSelectedFact] = useState(null);
  const [page, setPage] = useState(1);
  const [randomized, setRandomized] = useState(false);
  const [randomOrder, setRandomOrder] = useState([]);

  const { data: dynamicFacts = [] } = useQuery({
    queryKey: ['dynamicFacts'],
    queryFn: () => base44.entities.DynamicFact.list('-created_date', 200),
  });

  // Build numbered facts:
  // Static facts: id 1 = oldest = #1
  // Dynamic facts: numbered after static (oldest dynamic = staticCount+1, newest = highest number)
  // Display order: newest 8 dynamic facts first (no number badge shown differently), then ALL facts #1 onwards
  const allFacts = useMemo(() => {
    const staticCount = staticFacts.length;
    // Static facts numbered #1 (oldest) upward — staticFacts array is oldest-first by id
    const staticNumbered = staticFacts.map((f, i) => ({ ...f, factNumber: i + 1 }));
    // Dynamic facts: list comes back newest-first from API (-created_date)
    // Assign numbers: oldest dynamic = staticCount+1, so reverse to assign then re-reverse
    const dynamicOldestFirst = [...dynamicFacts].reverse();
    const dynamicNumbered = dynamicOldestFirst.map((f, i) => ({
      ...f,
      isDynamic: true,
      factNumber: staticCount + i + 1,
    }));
    // newest 8 dynamic facts (already newest-first in original dynamicFacts)
    const newest8 = dynamicNumbered.slice().reverse().slice(0, 8);
    // All facts in numbered order #1 → highest
    const allNumbered = [...staticNumbered, ...dynamicNumbered];
    // Final display: newest 8 first (tagged), then full numbered list
    const newest8Ids = new Set(newest8.map(f => f.id || f.factNumber));
    return [
      ...newest8.map(f => ({ ...f, isNewest: true })),
      ...allNumbered.filter(f => !newest8Ids.has(f.id || f.factNumber)),
    ];
  }, [dynamicFacts]);

  const allCategories = ['All', ...categories.map(c => c.name)];

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
      // Apply random order to filtered set
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

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
    setRandomized(false);
    setRandomOrder([]);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
    setRandomized(false);
    setRandomOrder([]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block">🧠</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Fun Animal Facts
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Mind-blowing facts that will make you say "wait, REALLY?!" 🤯
            </p>
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

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
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

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <p className="text-xs text-muted-foreground font-body mb-6">
          {displayFacts.length} facts found
          {randomized && <span className="ml-1 text-secondary font-semibold">· randomized 🎲</span>}
          {totalPages > 1 && ` · Page ${page} of ${totalPages}`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((fact, i) => (
            <div key={fact.id || `d-${fact.factNumber}-${i}`} className="relative">
              {fact.isNewest ? (
                <span className="absolute top-2 left-2 z-10 bg-secondary text-secondary-foreground text-xs font-display font-bold px-1.5 py-0.5 rounded-md">
                  NEW ✨
                </span>
              ) : (
                <span className="absolute top-2 left-2 z-10 bg-primary/80 text-primary-foreground text-xs font-display font-bold px-1.5 py-0.5 rounded-md">
                  #{fact.factNumber}
                </span>
              )}
              <FactCard fact={fact} index={i} onOpen={setSelectedFact} />
            </div>
          ))}
        </div>

        {displayFacts.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-display font-bold text-foreground">No facts found!</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Try a different search or category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              disabled={page === 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card border border-border text-sm font-display font-semibold disabled:opacity-40 hover:border-secondary/40 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <div className="flex gap-1">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`w-8 h-8 rounded-lg text-xs font-display font-bold transition-all ${
                    p === page
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:border-secondary/40'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              disabled={page === totalPages}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card border border-border text-sm font-display font-semibold disabled:opacity-40 hover:border-secondary/40 transition-all"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} />
    </div>
  );
}