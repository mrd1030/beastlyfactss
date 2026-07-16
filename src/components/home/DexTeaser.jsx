import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { CHRONICLES_SERIES, chroniclesPath } from '@/lib/chronicles';

// Alt text mirrors each series' own hero-image frontmatter (imageAlt) so this
// teaser and the story's own page describe the same photo the same way.
const HERO_ALT = {
  dex: 'Dex the bearded dragon basking regally under his terrarium light',
  otis: 'House rabbit sitting alert and regal at the edge of a garden, surveying his territory',
};

export default function DexTeaser() {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-xl block mb-1">📖</span>
          <h2 className="font-display font-bold text-lg sm:text-xl text-foreground">
            Chronicles: Original Fiction
          </h2>
          <p className="text-xs text-muted-foreground font-body mt-0.5">
            Short stories told entirely from the animal's point of view
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHRONICLES_SERIES.map((series, i) => (
            <motion.div
              key={series.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl overflow-hidden flex items-center gap-4 p-4"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={`/assets/images/${series.id}/${series.id}-chron1.jpg`}
                  alt={HERO_ALT[series.id] || `${series.character} - Beastly Facts fiction series`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-1 leading-tight">
                  {series.emoji} Chronicles of {series.character}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-3 leading-relaxed">
                  {series.blurb}
                </p>
                <Link to={chroniclesPath(series.id)} className="w-fit">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-bold text-sm py-2.5 px-5 rounded-xl shadow-lg shadow-secondary/20"
                  >
                    <BookOpen className="w-4 h-4" /> Read the Chronicles <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
