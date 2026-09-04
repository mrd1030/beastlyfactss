import React, { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
// The build-time card index, NOT the `allGuides` barrel this used to import.
// That barrel re-exports the full text of all 78 guides - sections, FAQs, cost
// tables - which bundled to 507 KB, and this component renders 11 cards from
// seven scalar fields. Importing it put half a megabyte of guide prose in the
// homepage's entry graph, where it competed with the document and the hero
// image for bandwidth on mobile. See scripts/generate-guides-index.js; the
// slim index is 23 KB and carries the same records in the same order.
import guidesIndex from '@/lib/generated/guides-index.json';
import { difficultyColor } from '@/lib/data/encyclopedia/meta';
import { hashString } from '@/lib/utils/seededShuffle';
import LocalImage from '@/components/shared/LocalImage';

// One guide per pet type so the sample reflects the site's actual range
// instead of whichever category happens to sit first in the index. Covers
// every petType used across src/lib/data/guides/* - add new categories here
// as they're introduced so this list stays exhaustive.
const SAMPLE_PET_TYPES = [
  'Dog', 'Cat', 'Birds', 'Fish', 'Small Mammals',
  'Lizards', 'Snakes', 'Geckos', 'Turtles & Tortoises',
  'Invertebrates', 'Amphibians',
];

// Every guide bucketed by pet type, not one hardcoded pick per type. This used
// to be `SAMPLE_PET_TYPES.map(t => guides.find(g => g.petType === t))` at module
// scope, which is fully deterministic: the same 11 of 108 guides on every visit
// forever (dog-universal, cat-universal, african-grey, angelfish...). The other
// 97 had no route through this section at all.
const GUIDE_BUCKETS = SAMPLE_PET_TYPES
  .map(petType => [petType, guidesIndex.guides.filter(g => g.petType === petType)])
  .filter(([, list]) => list.length > 0);

// Rotates which guide represents each pet type while keeping exactly one slot
// per type, so Dog, Cat and every other category stay present on every render.
// The seed mixes the day with a per-type hash so the 11 cards advance out of
// step with each other instead of all turning over together.
function pickFeatured(daySeed) {
  return GUIDE_BUCKETS.map(([petType, list]) => list[(daySeed + hashString(petType)) % list.length]);
}

// Index 0 of each bucket on the hydration-critical first render. prerender.mjs
// renders with the effect below skipped, so this is exactly what it bakes into
// the static HTML. Deriving the real day inline during render instead is the
// React #418/#423 mismatch already fixed everywhere else on this page: the site
// is not rebuilt daily, so any real visitor would land on a different day than
// the deploy and reorder all 11 cards out from under hydration. The images here
// are loading="lazy" and this section sits ~5,000px down, so the post-mount swap
// costs no wasted fetches - nothing has started loading yet.
const DEFAULT_FEATURED = GUIDE_BUCKETS.map(([, list]) => list[0]);

export default function GuideSpotlight() {
  const [featured, setFeatured] = useState(DEFAULT_FEATURED);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setFeatured(pickFeatured(new Date().getDate()));
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-6"
        >
          <div>
            <span className="text-2xl block mb-1">📖</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Care guides
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              {`A rotating pick from ${guidesIndex.guides.length}+ species guides. Each one links out to deep dives on setup, diet, health, handling, cost, and the law.`}
            </p>
          </div>
          <Link to="/guides/" className="hidden sm:flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline flex-shrink-0 p-2 -m-2">
            All guides <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((guide, i) => {
            const diffClass = difficultyColor[guide.difficulty] || 'text-muted-foreground bg-muted';
            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={`/guides/${guide.id}/`}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all duration-200 group h-full flex flex-col">
                    <div className="aspect-[4/3] w-full overflow-hidden relative bg-muted">
                      {guide.image ? (
                        <LocalImage
                          src={guide.image}
                          alt={guide.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          width={320}
                          height={240}
                          variant="card"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl">
                          {guide.emoji}
                        </div>
                      )}
                      <span className={`absolute top-2 left-2 text-xs font-body font-semibold px-2 py-0.5 rounded-full whitespace-nowrap bg-card/90 backdrop-blur-sm shadow-sm ${diffClass}`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-base font-display font-bold leading-snug text-foreground group-hover:text-secondary transition-colors mb-1 line-clamp-1">
                        {guide.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-2 flex-1">
                        {guide.tagline}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/60">
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {guide.petType}
                        </span>
                        <span className="flex items-center gap-0.5 text-xs font-body font-semibold text-secondary">
                          Read guide <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-5 sm:hidden">
          <Link to="/guides/" className="inline-flex items-center gap-1 text-sm font-body font-bold text-secondary p-2 -m-2">
            All care guides <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
