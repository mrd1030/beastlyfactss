import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import SectionBand from '@/components/home/SectionBand';
import SectionDivider from '@/components/home/SectionDivider';
import FactModal from '@/components/shared/FactModal';
import ImageLightbox from '@/components/shared/ImageLightbox';
import { imagePathFor } from '@/lib/data/factImages';
import { getHomeChild, preloadHomeChildren } from '@/lib/homePreload';

// Renders one of Home's preloaded sections. NOT React.lazy()+Suspense:
// that always suspended on hydration's first render even after preloading
// (see homePreload.js for why) - this instead reads a synchronous cache
// that's already populated by the time hydration runs for a fresh page
// load. The only case where the cache can still be empty on first render is
// client-side navigation TO "/" from another page (no hydration involved,
// so no mismatch risk) - preloadHomeChildren() is memoized, so calling it
// again here just resolves once the modules land and re-renders normally.
function HomeChild({ name, ...props }) {
  const [, setTick] = useState(0);
  const Comp = getHomeChild(name);

  useEffect(() => {
    if (Comp) return;
    preloadHomeChildren().then(() => setTick((n) => n + 1));
  }, [Comp]);

  if (!Comp) return null;
  return <Comp {...props} />;
}

export default function Home() {
  const [selectedFact, setSelectedFact] = useState(null);
  const [imageFact, setImageFact] = useState(null);

  return (
    <main>
      {/* SEO: Meta Tags */}
      <Helmet>
        <title>Beastly Facts | Animal Trivia & Care Guides</title>
        <meta name="description" content="Explore Beastly Facts to discover mind-blowing animal facts and practical care guides for reptiles, mammals, birds, and more." />
        <link rel="canonical" href="https://beastlyfacts.com/" />
        <meta property="og:title" content="Beastly Facts | Animal Trivia & Care Guides" />
        <meta property="og:description" content="Explore Beastly Facts to discover mind-blowing animal facts and practical care guides for reptiles, mammals, birds, and more." />
        <meta property="og:url" content="https://beastlyfacts.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - amazing animal trivia and care guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beastly Facts | Animal Trivia & Care Guides" />
        <meta name="twitter:description" content="Explore Beastly Facts to discover mind-blowing animal facts and practical care guides for reptiles, mammals, birds, and more." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
      </Helmet>

      
      <HeroSection onOpenFact={setSelectedFact} />

      <HomeChild name="FeaturedEvent" />

      {/* Three tinted bands and two dividers, grouping the eleven sections into
          the four blocks they already were in intent: facts, browse, reference,
          editorial. Nothing here reorders or re-scopes a section - the bands are
          the only thing that says where one block ends, on a page that below the
          hero was a single flat colour for ~7,700px. See the CSS at the foot of
          src/index.css. Purely presentational wrappers, so this has no effect on
          homePreload.js: all eleven chunks still fire their import() in one tick
          and hydration still waits on the same Promise.allSettled. */}
      <SectionBand tone="warm" edged>
        <HomeChild name="TrendingFacts" onOpenFact={setSelectedFact} onOpenImage={setImageFact} />
        {/* Directly under the fact cards: the strip continues the same rotation
            they use, and gives /gallery/ a real entry point. It had exactly one
            inbound link site-wide, on the Facts page. */}
        <HomeChild name="FactPhotoStrip" onOpenFact={setSelectedFact} />
      </SectionBand>

      <HomeChild name="FactsToGuidesBanner" />

      <SectionDivider />

      <HomeChild name="CategoryBrowse" />

      {/* Reference content: animal profiles + care guides, together.
          Beastlypedia leads it because the wild-animal thread runs unbroken
          from TrendingFacts through CategoryBrowse into here, and the fact
          database is mostly wild animals. The handover to pet care happens
          once, at EncyclopediaTeaser, instead of twice. */}
      <SectionBand tone="cool" edged>
        <HomeChild name="BeastlypediaTeaser" />
        <HomeChild name="EncyclopediaTeaser" />
        <HomeChild name="GuideSpotlight" />
      </SectionBand>

      <SectionDivider />

      {/* Editorial content: articles + fiction, together */}
      <SectionBand tone="warm" edged>
        <HomeChild name="CritterDigestPreview" />
        <HomeChild name="DexTeaser" />
      </SectionBand>

      <HomeChild name="Newsletter" />
      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} onOpenImage={setImageFact} />
      <ImageLightbox fact={imageFact} imagePath={imagePathFor(imageFact)} onClose={() => setImageFact(null)} />
    </main>
  );
}