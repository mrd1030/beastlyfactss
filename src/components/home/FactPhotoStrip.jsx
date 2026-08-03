import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import { imagePathFor } from '@/lib/data/factImages';
import LocalImage from '@/components/shared/LocalImage';

const STRIP_COUNT = 14;

// TrendingFacts renders the 8 facts starting at its own offset, directly above
// this. Starting here at offset + 8 continues that run instead of showing the
// same eight photos the cards already carry.
const TRENDING_TAKE = 8;

// Only facts with a resolved photo. Every fact has one today, but a newly added
// fact whose image has not landed yet would otherwise punch a hole in the strip.
const withPhotos = facts
  .map((fact) => ({ fact, imagePath: imagePathFor(fact) }))
  .filter((f) => f.imagePath);

function rotate(offset) {
  if (!withPhotos.length) return [];
  return [...withPhotos.slice(offset), ...withPhotos.slice(0, offset)].slice(0, STRIP_COUNT);
}

export default function FactPhotoStrip({ onOpenFact }) {
  const scrollRef = useRef(null);

  // Same day-of-month rotation and prerender guard as TrendingFacts and
  // HeroSection. Computing the offset inline during render would bake the build
  // day into the static HTML and pick a different one on hydration, reordering
  // the whole strip right after load. The fixed default mirrors the real
  // offset's intent without needing "today".
  const [visible, setVisible] = useState(() => rotate(1 + TRENDING_TAKE));
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    const trendingOffset = (new Date().getDate() % facts.length + 1) % facts.length;
    setVisible(rotate((trendingOffset + TRENDING_TAKE) % withPhotos.length));
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  if (!visible.length) return null;

  return (
    <section className="pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-2xl mb-1 block">📸</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Fact Photos
            </h2>
            <p className="text-sm text-muted-foreground font-body mt-1">
              {`Every fact has its own photo. All ${withPhotos.length} of them are in the gallery.`}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/gallery/"
              className="flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0 p-2 -m-2"
            >
              Open the gallery <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Scroll photos left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Scroll photos right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto overflow-y-hidden pb-2 -mx-4 px-4 snap-x scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {visible.map(({ fact, imagePath }) => (
            <button
              key={fact.id}
              type="button"
              onClick={() => onOpenFact?.(fact)}
              className="group snap-start flex-shrink-0 w-28 sm:w-32 text-left focus:outline-none"
              aria-label={`Open the fact: ${fact.title}`}
            >
              <span className="relative block w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-border group-hover:border-secondary/50 group-focus:border-secondary/50 transition-colors">
                <LocalImage
                  src={imagePath}
                  alt={`${fact.animal}, ${fact.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={128}
                  height={128}
                />
                {/* Fixed black, not a theme token: this sits on a photo, and
                    bg-foreground would invert to a pale wash in dark mode. */}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 pt-6 pb-1.5">
                  <span className="block text-[11px] font-display font-bold text-white truncate">
                    {fact.animal}
                  </span>
                </span>
              </span>
              <span className="block text-[11px] text-muted-foreground font-body mt-1.5 leading-snug line-clamp-2 group-hover:text-secondary transition-colors">
                {fact.title}
              </span>
            </button>
          ))}
        </div>

        <div className="text-center mt-4 sm:hidden">
          <Link
            to="/gallery/"
            className="inline-flex items-center gap-1 text-sm font-display font-bold text-secondary p-2 -m-2"
          >
            Open the gallery <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
