import React, { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { encyclopediaCategories, encyclopediaAnimals } from '@/lib/data/encyclopedia';
import { seededShuffle } from '@/lib/utils/seededShuffle';
import LocalImage from '@/components/shared/LocalImage';

const PREVIEW_COUNT = 8;

const categoryPreview = encyclopediaCategories.map(cat => ({
  ...cat,
  count: encyclopediaAnimals.filter(a => a.category === cat.name).length,
}));

// A rotating subset, not the full category list: every category rendered a
// 640x480 "card" image up front (loading="lazy" or not - Lighthouse's mobile
// run still counted them all), which was most of this homepage's "Improve
// image delivery" flag. Capped to PREVIEW_COUNT and rotated by day (same
// seeded-shuffle idiom as CategoryBrowse.jsx/HeroSection.jsx) rather than a
// fixed slice, so this stays a changing preview - not a static, permanently-
// identical-every-visit subset - while /encyclopedia/ still has the full grid.
// Fixed default (first PREVIEW_COUNT, unshuffled) on the hydration-critical
// first render, upgraded to the real day's rotation in an effect: shuffling
// by new Date().getDate() inline here would reintroduce the exact hydration
// mismatch bug (React errors #418/#423) already fixed elsewhere on this page.
function defaultPreview() {
  return categoryPreview.slice(0, PREVIEW_COUNT);
}

export default function EncyclopediaTeaser() {
  const [visibleCategories, setVisibleCategories] = useState(defaultPreview);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    const seed = new Date().getDate();
    setVisibleCategories(seededShuffle(categoryPreview, seed).slice(0, PREVIEW_COUNT));
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-5"
        >
          <div>
            <span className="text-2xl block mb-1">📚</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Animal Encyclopedia
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              {`Animal profiles for ${encyclopediaCategories.length} categories of reptiles, birds & more`}
            </p>
          </div>
          <Link to="/encyclopedia/" className="hidden sm:flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline flex-shrink-0 p-2 -m-2">
            Browse all animals <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {visibleCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/encyclopedia/category/${cat.slug}/`}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all duration-200 group h-full flex flex-col">
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-muted">
                    {cat.image ? (
                      <LocalImage
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={320}
                        height={240}
                        variant="card"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">{cat.emoji}</div>
                    )}
                    <span className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-base shadow-sm">
                      {cat.emoji}
                    </span>
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <p className="text-base font-body font-bold text-foreground group-hover:text-secondary transition-colors mb-0.5">
                      {cat.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      {`${cat.count} animal profile${cat.count !== 1 ? 's' : ''}`}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5 sm:hidden">
          <Link to="/encyclopedia/" className="inline-flex items-center gap-1 text-sm font-body font-bold text-secondary p-2 -m-2">
            Browse all animals <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}