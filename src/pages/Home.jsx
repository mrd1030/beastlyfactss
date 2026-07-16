import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
const TrendingFacts = lazy(() => import('@/components/home/TrendingFacts'));
const EncyclopediaTeaser = lazy(() => import('@/components/home/EncyclopediaTeaser'));
const CritterDigestPreview = lazy(() => import('@/components/home/CritterDigestPreview'));
const DexTeaser = lazy(() => import('@/components/home/DexTeaser'));
const GuideSpotlight = lazy(() => import('@/components/home/GuideSpotlight'));
const Newsletter = lazy(() => import('@/components/shared/Newsletter'));
import FactModal from '@/components/shared/FactModal';

export default function Home() {
  const [selectedFact, setSelectedFact] = useState(null);

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

      
      <HeroSection />

      <Suspense fallback={null}>
        <TrendingFacts onOpenFact={setSelectedFact} />
        {/* Reference content: animal profiles + care guides, together */}
        <EncyclopediaTeaser />
        <GuideSpotlight />
        {/* Editorial content: articles + fiction, together */}
        <CritterDigestPreview />
        <DexTeaser />
        <Newsletter />
      </Suspense>
      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} />
    </main>
  );
}