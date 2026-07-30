import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { allGuides } from '@/lib/data/guides';
import { difficultyColor } from '@/lib/data/encyclopedia';
import LocalImage from '@/components/shared/LocalImage';

// One guide per pet type so the sample reflects the site's actual range
// instead of whichever category happens to sit first in allGuides. Covers
// every petType used across src/lib/data/guides/* - add new categories here
// as they're introduced so this list stays exhaustive.
const SAMPLE_PET_TYPES = [
  'Dog', 'Cat', 'Birds', 'Fish', 'Small Mammals',
  'Lizards', 'Snakes', 'Geckos', 'Turtles & Tortoises',
  'Invertebrates', 'Amphibians',
];
const featured = SAMPLE_PET_TYPES
  .map(petType => allGuides.find(g => g.petType === petType))
  .filter(Boolean);

export default function GuideSpotlight() {
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
              Sample Guides
            </h2>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Detailed, research-backed guides for pets
            </p>
          </div>
          <Link to="/guides/" className="hidden sm:flex items-center gap-1 text-xs font-display font-semibold text-secondary hover:underline flex-shrink-0">
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
                      <span className={`absolute top-2 left-2 text-xs font-display font-semibold px-2 py-0.5 rounded-full whitespace-nowrap bg-card/90 backdrop-blur-sm shadow-sm ${diffClass}`}>
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
                        <span className="flex items-center gap-0.5 text-xs font-display font-semibold text-secondary">
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
          <Link to="/guides/" className="inline-flex items-center gap-1 text-sm font-display font-bold text-secondary">
            All care guides <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}