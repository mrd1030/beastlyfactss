import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';
import { Link, useLocation } from 'react-router-dom';
import { Search, X, ArrowUp, Hash } from 'lucide-react';
import { CATEGORIES, TOTAL_TERMS } from '@/lib/data/glossaryTerms';
import { slugify } from '@/lib/utils/slugify';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Letters that have at least one term - computed once at module level
const LETTERS_WITH_TERMS = new Set(
  CATEGORIES.flatMap(c => c.terms.map(t => t.term[0].toUpperCase()))
);

// Distinct guides and articles the glossary links out to, for the hero stats.
const LINKED_PAGES = new Set(
  CATEGORIES.flatMap(c => c.terms.flatMap(t => (t.related || []).map(r => r.to)))
).size;

// Inset ring so the highlight isn't clipped by the list's overflow-hidden.
const HASH_HIGHLIGHT_CLASSES = ['ring-2', 'ring-inset', 'ring-secondary/50', 'bg-secondary/10'];

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Wraps every case-insensitive occurrence of `query` in a <mark> so search
// results show why they matched. Plain text in, React nodes out.
function Highlight({ text, query }) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${escapeRegex(query)})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i} className="bg-accent/40 text-foreground rounded-sm px-0.5">{part}</mark>
      : part
  );
}

function TermCard({ term, showCategory, catEmoji, catLabel, query }) {
  const id = slugify(term.term);
  return (
    <div
      id={id}
      className="group px-4 sm:px-5 py-4 scroll-mt-40 transition-colors duration-500 hover:bg-muted/40"
    >
      {showCategory && (
        <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">
          {`${catEmoji} ${catLabel}`}
        </span>
      )}
      <h3 className="font-display font-bold text-base text-foreground mt-0.5 flex items-baseline gap-1.5">
        <span><Highlight text={term.term} query={query} /></span>
        <a
          href={`#${id}`}
          className="text-muted-foreground/40 hover:text-primary opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
          aria-label={`Link to ${term.term}`}
        >
          <Hash className="w-3.5 h-3.5" />
        </a>
      </h3>
      <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">
        <Highlight text={term.definition} query={query} />
      </p>
      {term.related && term.related.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
          <span className="text-[10px] font-body uppercase tracking-wider text-muted-foreground/70 mr-0.5">
            See it in
          </span>
          {term.related.map(r => (
            <Link
              key={r.to}
              to={r.to}
              className="text-[11px] font-body font-medium text-primary/90 hover:text-primary bg-primary/[0.06] hover:bg-primary/10 border border-primary/15 hover:border-primary/40 rounded-full px-2.5 py-0.5 transition-colors"
            >
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function TermList({ children }) {
  return (
    <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-sm">
      {children}
    </div>
  );
}

export default function Glossary() {
  const [query, setQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState(null);
  const location = useLocation();

  // Arriving via a hash link (e.g. from an in-article glossary highlight)
  // doesn't trigger the browser's native scroll-to-anchor behavior - that
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
        el.classList.add(...HASH_HIGHLIGHT_CLASSES);
        highlightTimer = setTimeout(() => {
          el.classList.remove(...HASH_HIGHLIGHT_CLASSES);
        }, 2500);
      } else if (attempts < 20) {
        // The (lazy-loaded, always-unfiltered-by-default) term list may not
        // have painted yet - retry briefly instead of guessing one delay.
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

  const clearFilters = () => {
    setQuery('');
    setActiveLetter(null);
  };

  const trimmedQuery = query.trim();

  const searchResults = useMemo(() => {
    const q = trimmedQuery.toLowerCase();
    if (!q) return null;
    const results = [];
    for (const cat of CATEGORIES) {
      for (const term of cat.terms) {
        const inTerm = term.term.toLowerCase().includes(q);
        const inDefinition = term.definition.toLowerCase().includes(q);
        if (inTerm || inDefinition) {
          results.push({ ...term, catEmoji: cat.emoji, catLabel: cat.label, rank: inTerm ? 0 : 1 });
        }
      }
    }
    // Name matches float above definition-only matches.
    results.sort((a, b) => a.rank - b.rank);
    return results;
  }, [trimmedQuery]);

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
    results.sort((a, b) => a.term.localeCompare(b.term));
    return results;
  }, [activeLetter]);

  const activeResults = searchResults || letterResults;
  const isFiltered = activeResults !== null;

  const DESCRIPTION = `Plain-English glossary of ${TOTAL_TERMS}+ pet care and animal science terms, from husbandry, UVB, and brumation to dog and cat health, genetics, and aquarium chemistry. Every entry links to the guide where it matters.`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pet Care &amp; Animal Science Glossary | Beastly Facts</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/glossary/" />
        <meta property="og:title" content="Pet Care & Animal Science Glossary | Beastly Facts" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/glossary/" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts Pet Care & Animal Science Glossary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta name="twitter:title" content="Pet Care & Animal Science Glossary | Beastly Facts" />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Open book">📖</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Pet Care &amp; Animal Science Glossary
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-xl">
              Plain-English definitions for the terms you will meet in our care guides, health articles, and animal science pieces: husbandry basics, species jargon, vet vocabulary, and genetics. Every entry links back to the page where it matters most.
            </p>
            <dl className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm font-body">
              {[
                [TOTAL_TERMS, 'terms'],
                [CATEGORIES.length, 'categories'],
                [LINKED_PAGES, 'linked guides & articles'],
              ].map(([value, label]) => (
                <div key={label} className="flex items-baseline gap-1.5">
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display font-bold text-xl text-primary leading-none">{value}</dd>
                  <dd className="text-muted-foreground text-xs uppercase tracking-wider">{label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Sticky search + A-Z bar. Sits just under the fixed navbar (h-14). */}
      <div className="sticky top-14 z-20 bg-background/90 backdrop-blur-md border-b border-border/60 supports-[backdrop-filter]:bg-background/75">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 space-y-2.5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder={`Search ${TOTAL_TERMS} terms...`}
              value={query}
              onChange={handleSearchChange}
              aria-label="Search glossary terms"
              className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-border bg-card text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
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

          {/* Scrolls horizontally on phones, fits one row of 26 on wider screens. */}
          <div
            className="flex gap-1 overflow-x-auto pb-0.5 scrollbar-hide sm:grid sm:grid-cols-[repeat(26,minmax(0,1fr))] sm:overflow-visible"
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
                  className={`flex-shrink-0 w-8 h-8 sm:w-auto sm:h-7 rounded-lg text-sm sm:text-xs font-body font-bold transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
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
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 pt-6">

        {/* Category jump nav - only when not filtered */}
        {!isFiltered && (
          <nav aria-label="Browse by category" className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-body font-medium pl-2.5 pr-1.5 py-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <span aria-hidden="true">{cat.emoji}</span>
                {cat.label}
                <span className="text-[10px] font-bold tabular-nums bg-background/80 text-muted-foreground rounded-full px-1.5 py-px">
                  {cat.terms.length}
                </span>
              </a>
            ))}
          </nav>
        )}

        {/* Filtered results (letter or search) */}
        {isFiltered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={activeLetter || trimmedQuery}>
            <div className="flex items-center justify-between gap-3 mb-4">
              <p className="text-xs text-muted-foreground font-body" aria-live="polite">
                {activeLetter
                  ? `${activeResults.length} term${activeResults.length !== 1 ? 's' : ''} starting with “${activeLetter}”`
                  : `${activeResults.length} result${activeResults.length !== 1 ? 's' : ''} for “${trimmedQuery}”`}
              </p>
              <button
                onClick={clearFilters}
                className="text-xs font-body font-medium text-primary hover:underline flex-shrink-0"
              >
                Show all terms
              </button>
            </div>
            {activeResults.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 text-center py-14 px-6">
                <p className="text-sm text-foreground font-body font-medium">
                  {activeLetter
                    ? `No terms start with “${activeLetter}”.`
                    : `Nothing matches “${trimmedQuery}”.`}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  Try a shorter word, or browse by category below.
                </p>
              </div>
            ) : (
              <TermList>
                {activeResults.map(t => (
                  <TermCard
                    key={t.term}
                    term={t}
                    showCategory
                    catEmoji={t.catEmoji}
                    catLabel={t.catLabel}
                    query={searchResults ? trimmedQuery : ''}
                  />
                ))}
              </TermList>
            )}
          </motion.div>
        )}

        {/* All categories - only when not filtered */}
        {!isFiltered && CATEGORIES.map((cat, i) => (
          <motion.section
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="mb-12 scroll-mt-40"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                aria-hidden="true"
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl"
              >
                {cat.emoji}
              </span>
              <div className="min-w-0">
                <h2 className="font-display font-bold text-xl text-foreground leading-tight">
                  {cat.label}
                </h2>
                <p className="text-xs text-muted-foreground font-body">
                  {`${cat.terms.length} term${cat.terms.length !== 1 ? 's' : ''}`}
                </p>
              </div>
            </div>
            <TermList>
              {cat.terms.map(term => (
                <TermCard key={term.term} term={term} />
              ))}
            </TermList>
            <div className="flex justify-end mt-3">
              <a
                href="#top"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-1 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowUp className="w-3 h-3" />
                Back to top
              </a>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
