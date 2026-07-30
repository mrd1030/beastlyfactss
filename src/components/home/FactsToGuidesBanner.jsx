import React from 'react';
import { motion } from 'framer-motion';

// Slim one-line transition between TrendingFacts and EncyclopediaTeaser/GuideSpotlight -
// breaks up four card-grid sections stacked back to back, without repeating what
// those sections' own header subtitles already say.
export default function FactsToGuidesBanner() {
  return (
    <section className="py-6 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-sm sm:text-base font-body text-muted-foreground">
          That's just a taste. <span className="text-foreground font-display font-semibold">63 species profiles</span> and{' '}
          <span className="text-foreground font-display font-semibold">50+ care guides</span> are waiting below.
        </p>
      </motion.div>
    </section>
  );
}
