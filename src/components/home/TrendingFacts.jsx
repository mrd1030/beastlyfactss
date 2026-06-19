import React, { useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { facts } from '@/lib/data/facts';
import FactCard from '../shared/FactCard';

export default function TrendingFacts({ onOpenFact }) {
  const scrollRef = useRef(null);

  const { data: dynamicFacts = [] } = useQuery({
    queryKey: ['dynamicFacts'],
    queryFn: () => base44.entities.DynamicFact.list('-created_date', 5),
    staleTime: 1000 * 60 * 10,
  });

  // Show newest dynamic facts first, then fill with a random selection of static facts
  const trending = useMemo(() => {
    const needed = Math.max(0, 8 - dynamicFacts.length);
    const dynamicTitles = new Set(dynamicFacts.map(f => f.title));
    const staticPool = facts.filter(f => !dynamicTitles.has(f.title));
    const shuffled = [...staticPool].sort(() => Math.random() - 0.5).slice(0, needed);
    return [...dynamicFacts, ...shuffled].slice(0, 8);
  }, [dynamicFacts]);

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
              <FactCard fact={fact} index={i} onOpen={onOpenFact} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}