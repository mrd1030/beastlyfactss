import React, { useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import FactCard from '../shared/FactCard';

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
  const trending = useMemo(() => {
    const offset = facts.length ? new Date().getDate() % facts.length : 0;
    return [...facts.slice(offset), ...facts.slice(0, offset)].slice(0, 8);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-2xl mb-1 block">🔥</span>
            <h2 className="font-display font-bold text-2xl text-foreground">Trending Facts</h2>
            <p className="text-sm text-muted-foreground font-body mt-1">The wildest facts everyone's talking about</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll(-1)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors" aria-label="Scroll left">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll(1)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors" aria-label="Scroll right">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex justify-start gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', alignItems: 'flex-start' }}
        >
          {trending.map((fact, i) => (
            <div key={fact.id || fact.title} className="min-w-[260px] max-w-[280px] snap-start flex-shrink-0">
              <FactCard fact={fact} index={i} onOpen={onOpenFact} onOpenImage={onOpenImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
