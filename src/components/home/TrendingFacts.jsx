import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import FactCard from '../shared/FactCard';

function rotate(offset) {
  if (!facts.length) return [];
  return [...facts.slice(offset), ...facts.slice(0, offset)].slice(0, 8);
}

export default function TrendingFacts({ onOpenFact, onOpenImage }) {
  const scrollRef = useRef(null);

  // Facts rotated by day (same idiom as HeroSection's daily fact) rather than
  // Math.random(): this route is in prerender.mjs's STATIC_ROUTES, so a random
  // shuffle would bake one order into the static HTML and pick a different one
  // the moment React hydrates client-side - visibly reordering the cards right
  // after every load. A previous version also merged in "dynamic" facts fetched
  // via Base44 here - that call never once returned data (auth on it is broken)
  // and its own request handling was forcing this carousel to load scrolled to
  // its far right edge. Removed rather than worked around; it wasn't providing anything.
  //
  // The day-of-month rotation itself still isn't safe to compute inline
  // during render, though: prerender.mjs bakes in whatever day it happens to
  // build on, and this page isn't rebuilt daily, so a real visitor hydrating
  // on a later day than the last deploy would compute a different offset than
  // what's in the static HTML - a full 8-card reorder mismatch, exactly the
  // kind of thing that makes React discard hydration and re-render the whole
  // root (see HeroSection.jsx's dailyFact for the same fix, same reasoning).
  // +1 on the real offset so this row's first card never matches
  // HeroSection's dailyFact, which uses the same day-of-month rotation on the
  // same array; the fixed default offset (1) mirrors that same intent for the
  // pre-hydration render without needing "today".
  const [trending, setTrending] = useState(() => rotate(1));
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    const offset = (new Date().getDate() % facts.length + 1) % facts.length;
    setTrending(rotate(offset));
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-2xl mb-1 block">🔥</span>
            <h2 className="font-display font-bold text-2xl text-foreground">Trending Facts</h2>
            <p className="text-sm text-muted-foreground font-body mt-1">The wildest facts everyone's talking about</p>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Link to="/facts/" className="hidden sm:flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0 p-2 -m-2">
              Browse all facts <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex gap-2">
              <button onClick={() => scroll(-1)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors" aria-label="Scroll left">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => scroll(1)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors" aria-label="Scroll right">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex justify-start gap-4 overflow-x-auto overflow-y-hidden py-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', alignItems: 'flex-start' }}
        >
          {trending.map((fact, i) => (
            <div key={fact.id || fact.title} className="min-w-[260px] max-w-[280px] snap-start flex-shrink-0">
              <FactCard fact={fact} index={i} onOpen={onOpenFact} onOpenImage={onOpenImage} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5 sm:hidden">
          <Link to="/facts/" className="inline-flex items-center gap-1 text-sm font-display font-bold text-secondary p-2 -m-2">
            Browse all facts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
