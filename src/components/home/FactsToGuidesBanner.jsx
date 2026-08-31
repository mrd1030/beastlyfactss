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
// "400+ deep dives" is the blog husbandry series (cost, handling, health,
// tank setup, feeding, legal). Species hubs live on /guides/ (100+).
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
          That&rsquo;s just a taste. <span className="text-foreground font-body font-semibold">{`${encyclopediaAnimals.length} species profiles`}</span>, <span className="text-foreground font-body font-semibold">100+ care guides</span>, and <span className="text-foreground font-body font-semibold">400+ deep dives</span> are waiting below.
        </p>
      </motion.div>
    </section>
  );
}
