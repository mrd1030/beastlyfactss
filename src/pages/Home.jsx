import React, { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrendingFacts from '@/components/home/TrendingFacts';
import CategoryGrid from '@/components/home/CategoryGrid';
import GuideSpotlight from '@/components/home/GuideSpotlight';
import QuizTeaser from '@/components/home/QuizTeaser';
import Newsletter from '@/components/shared/Newsletter';
import FactModal from '@/components/shared/FactModal';

export default function Home() {
  const [selectedFact, setSelectedFact] = useState(null);

  return (
    <div>
      <HeroSection />
      <TrendingFacts onOpenFact={setSelectedFact} />
      <CategoryGrid />
      <GuideSpotlight />
      <QuizTeaser />
      <Newsletter />
      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} />
    </div>
  );
}