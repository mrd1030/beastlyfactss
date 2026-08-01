import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import FactModal from '@/components/shared/FactModal';
import ImageLightbox from '@/components/shared/ImageLightbox';
import { imagePathFor } from '@/lib/data/factImages';
import { getHomeChild, preloadHomeChildren } from '@/lib/homePreload';

// Renders one of Home's 8 preloaded sections. NOT React.lazy()+Suspense:
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
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - amazing animal trivia and care guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beastly Facts | Animal Trivia & Care Guides" />
        <meta name="twitter:description" content="Explore Beastly Facts to discover mind-blowing animal facts and practical care guides for reptiles, mammals, birds, and more." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>

      
      <HeroSection onOpenFact={setSelectedFact} />

      <HomeChild name="FeaturedEvent" />
      <HomeChild name="TrendingFacts" onOpenFact={setSelectedFact} onOpenImage={setImageFact} />
      <HomeChild name="FactsToGuidesBanner" />
      <HomeChild name="CategoryBrowse" />
      {/* Reference content: animal profiles + care guides, together */}
      <HomeChild name="EncyclopediaTeaser" />
      <HomeChild name="GuideSpotlight" />
      {/* Editorial content: articles + fiction, together */}
      <HomeChild name="CritterDigestPreview" />
      <HomeChild name="DexTeaser" />
      <HomeChild name="Newsletter" />
      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} onOpenImage={setImageFact} />
      <ImageLightbox fact={imageFact} imagePath={imagePathFor(imageFact)} onClose={() => setImageFact(null)} />
    </main>
  );
}