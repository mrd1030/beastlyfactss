import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { CATEGORIES, TOTAL_TERMS } from '@/lib/data/glossaryTerms';
import { slugify } from '@/lib/utils/slugify';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Letters that have at least one term — computed once at module level
const LETTERS_WITH_TERMS = new Set(
  CATEGORIES.flatMap(c => c.terms.map(t => t.term[0].toUpperCase()))
);

function TermCard({ term, showCategory, catEmoji, catLabel }) {
  return (
    <div id={slugify(term.term)} className="border-b border-border pb-4 last:border-0 scroll-mt-24 rounded-lg transition-colors duration-500">
      {showCategory && (
        <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">
          {catEmoji} {catLabel}
        </span>
      )}
      <h3 className="font-display font-bold text-base text-foreground mt-0.5">{term.term}</h3>
      <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">{term.definition}</p>
      {term.related && term.related.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {term.related.map(r => (
            <Link
              key={r.to}
              to={r.to}
              className="text-[11px] font-body text-primary/80 hover:text-primary border border-primary/20 hover:border-primary/40 rounded-full px-2.5 py-0.5 transition-colors"
            >
              {r.label} →
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Glossary() {
  const [query, setQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState(null);
  const location = useLocation();

  // Arriving via a hash link (e.g. from an in-article glossary highlight)
  // doesn't trigger the browser's native scroll-to-anchor behavior — that
  // only fires on a real page load, not a client-side route change, and
  // CSS :target doesn't re-evaluate on history.pushState() either, so the
  // scroll AND the "you're here" highlight both need to be done by hand.
  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));

    let attempts = 0;
    let cancelled = false;
    let highlightTimer;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('ring-2', 'ring-secondary/50', 'bg-secondary/5');
        highlightTimer = setTimeout(() => {
          el.classList.remove('ring-2', 'ring-secondary/50', 'bg-secondary/5');
        }, 2500);
      } else if (attempts < 20) {
        // The (lazy-loaded, always-unfiltered-by-default) term list may not
        // have painted yet — retry briefly instead of guessing one delay.
        attempts += 1;
        setTimeout(tryScroll, 50);
      }
    };
    tryScroll();

    return () => { cancelled = true; clearTimeout(highlightTimer); };
  }, [location.hash]);

  const handleLetterClick = (letter) => {
    setQuery('');
    setActiveLetter(prev => prev === letter ? null : letter);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setActiveLetter(null);
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const results = [];
    for (const cat of CATEGORIES) {
      for (const term of cat.terms) {
        if (term.term.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q)) {
          results.push({ ...term, catEmoji: cat.emoji, catLabel: cat.label });
        }
      }
    }
    return results;
  }, [query]);

  const letterResults = useMemo(() => {
    if (!activeLetter) return null;
    const results = [];
    for (const cat of CATEGORIES) {
      for (const term of cat.terms) {
        if (term.term[0].toUpperCase() === activeLetter) {
          results.push({ ...term, catEmoji: cat.emoji, catLabel: cat.label });
        }
      }
    }
    return results;
  }, [activeLetter]);

  const activeResults = searchResults || letterResults;
  const isFiltered = activeResults !== null;

  const DESCRIPTION = `Plain-English glossary of ${TOTAL_TERMS}+ exotic pet and reptile care terms — from husbandry and UVB to molting, brumation, and beyond. Essential reading for new keepers.`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Reptile &amp; Exotic Pet Care Glossary | Beastly Facts</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/glossary/" />
        <meta property="og:title" content="Reptile & Exotic Pet Care Glossary | Beastly Facts" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/glossary/" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts Reptile & Exotic Pet Care Glossary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta name="twitter:title" content="Reptile & Exotic Pet Care Glossary | Beastly Facts" />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Open book">📖</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Reptile &amp; Exotic Pet Glossary
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-xl">
              Plain-English definitions for {TOTAL_TERMS}+ care terms — from husbandry basics to species-specific jargon.
              Every entry links back to the guide where it matters most.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">

        {/* A–Z letter filter */}
        <div
          className="flex gap-1 overflow-x-auto pb-1 mt-4 mb-4 scrollbar-hide"
          role="navigation"
          aria-label="Browse by letter"
        >
          {ALPHABET.map(letter => {
            const hasTerms = LETTERS_WITH_TERMS.has(letter);
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => hasTerms && handleLetterClick(letter)}
                aria-pressed={isActive}
                aria-disabled={!hasTerms}
                className={`flex-shrink-0 w-8 h-8 rounded-lg text-sm font-display font-bold transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : hasTerms
                      ? 'bg-muted text-foreground hover:bg-primary/10 hover:text-primary cursor-pointer'
                      : 'text-muted-foreground/25 cursor-default pointer-events-none'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search terms..."
            value={query}
            onChange={handleSearchChange}
            className="w-full pl-9 pr-9 py-3 rounded-xl border border-border bg-card text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category jump nav — only when not filtered */}
        {!isFiltered && (
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs font-body font-medium px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {cat.emoji} {cat.label}
              </a>
            ))}
          </div>
        )}

        {/* Filtered results (letter or search) */}
        {isFiltered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={activeLetter || query}>
            {activeResults.length === 0 ? (
              <p className="text-sm text-muted-foreground font-body text-center py-16">
                {activeLetter
                  ? `No terms starting with "${activeLetter}".`
                  : `No terms matching “${query}” — try a shorter word.`}
              </p>
            ) : (
              <>
                <p className="text-xs text-muted-foreground font-body mb-4">
                  {activeLetter
                    ? `${activeResults.length} term${activeResults.length !== 1 ? 's' : ''} starting with "${activeLetter}"`
                    : `${activeResults.length} result${activeResults.length !== 1 ? 's' : ''}`}
                </p>
                <div className="space-y-4">
                  {activeResults.map(t => (
                    <TermCard key={t.term} term={t} showCategory catEmoji={t.catEmoji} catLabel={t.catLabel} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* All categories — only when not filtered */}
        {!isFiltered && CATEGORIES.map((cat, i) => (
          <motion.section
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="mb-12 scroll-mt-20"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-5 flex items-center gap-2">
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.label}
            </h2>
            <div className="space-y-4">
              {cat.terms.map(term => (
                <TermCard key={term.term} term={term} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
