import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { facts, categories } from '@/lib/data/facts'; 
import FactCard from '@/components/shared/FactCard'; 
import FactModal from '@/components/shared/FactModal'; 

// Reduced footprint size to instantly clear initial painting lag
const PAGE_SIZE = 16; 

// Helper function matching your universal clean-hyphen strategy
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ /g, '-');
};

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

  const [search, setSearch] = useState(''); 
  const [activeCategory, setActiveCategory] = useState('All'); 
  const [selectedFact, setSelectedFact] = useState(null); 
  const [page, setPage] = useState(1); 
  const [randomized, setRandomized] = useState(false); 
  const [randomOrder, setRandomOrder] = useState([]); 

  const allFacts = useMemo(() => facts.map((f, i) => ({ ...f, factNumber: i + 1 })), []); 
  const allCategories = ['All', ...categories.map(c => c.name)]; 

  // Central URL Synchronizer for SEO Parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('category');
    const pageParam = parseInt(params.get('page')) || 1;

    if (catParam) {
      const matchedCat = allCategories.find(c => slugify(c) === catParam);
      setActiveCategory(matchedCat || 'All');
    } else {
      setActiveCategory('All');
    }
    setPage(pageParam);
  }, [location.search, allCategories]);

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

  const handleCategoryChange = (cat) => {
    const urlParams = new URLSearchParams();
    if (slugify(cat) !== 'all') {
      urlParams.set('category', slugify(cat));
    }
    setRandomized(false);
    setRandomOrder([]);
    navigate({ search: urlParams.toString() });
  };

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
              <FactCard fact={fact} index={i} onOpen={setSelectedFact} /> 
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

      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} /> 
    </div>
  );
}