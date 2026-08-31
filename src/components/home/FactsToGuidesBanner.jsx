import React from 'react';
import { motion } from '@/lib/motion-safe';
// The species count reads from the data rather than being typed in. It said 63
// while the encyclopedia had grown to 103, and a literal is wrong the day after
// it is written. The import is free: EncyclopediaTeaser, also a homepage
// section, already pulls encyclopediaAnimals, so the module is in the graph
// either way.
//
// encyclopediaAnimals is the right list to count: every dog and cat in it is a
// named breed. The generic size hubs (dog-universal, dog-small-breed,
// dog-medium-breed, dog-large-breed, cat-universal) exist only in the guides,
// so they cannot inflate this number.
//
// "300+ care guides" stays a literal, and stays deliberately low. A care guide
// here is a deep-dive article (cost, handling, health issues, tank setup,
// feeding), not a card on /guides/ - that page shows one card per animal, 108
// of them, which is a different thing entirely. The real deep-dive count is
// 449. DO NOT "correct" 300+ upward to match it; the understatement is the
// point.
import { encyclopediaAnimals } from '@/lib/data/encyclopedia';

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
          That's just a taste. <span className="text-foreground font-body font-semibold">{`${encyclopediaAnimals.length} species profiles`}</span> and <span className="text-foreground font-body font-semibold">300+ care guides</span> are waiting below.
        </p>
      </motion.div>
    </section>
  );
}
