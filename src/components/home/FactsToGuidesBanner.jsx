import React from 'react';
import { motion } from '@/lib/motion-safe';
// Both counts come from the data, never a literal. They were hardcoded as "63
// species profiles" and "300+ care guides"; the encyclopedia had grown to 103
// and the guides section holds 108, so one number was 40 short and the other
// was claiming roughly three times what exists. A number typed into a sentence
// is wrong the day after it is typed.
//
// Neither import costs the homepage anything: EncyclopediaTeaser already pulls
// encyclopediaAnimals and GuideSpotlight already pulls guides-index, and both
// are homepage sections, so these modules are in the graph either way.
//
// encyclopediaAnimals is the right list to count for "species profiles": every
// dog and cat in it is a named breed. The generic size hubs (dog-universal,
// dog-small-breed, dog-medium-breed, dog-large-breed, cat-universal) live only
// in the guides, so they cannot inflate this number.
import { encyclopediaAnimals } from '@/lib/data/encyclopedia';
import guidesIndex from '@/lib/generated/guides-index.json';

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
          That's just a taste. <span className="text-foreground font-body font-semibold">{`${encyclopediaAnimals.length} species profiles`}</span> and <span className="text-foreground font-body font-semibold">{`${guidesIndex.guides.length} care guides`}</span> are waiting below.
        </p>
      </motion.div>
    </section>
  );
}
