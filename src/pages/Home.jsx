import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Ensure you have react-helmet installed
import HeroSection from '@/components/home/HeroSection';
import TrendingFacts from '@/components/home/TrendingFacts';
import EncyclopediaTeaser from '@/components/home/EncyclopediaTeaser';
import CritterDigestPreview from '@/components/home/CritterDigestPreview';
import GuideSpotlight from '@/components/home/GuideSpotlight';
import QuizTeaser from '@/components/home/QuizTeaser';
import TriviaTeaser from '@/components/home/TriviaTeaser';
import Newsletter from '@/components/shared/Newsletter';
import FactModal from '@/components/shared/FactModal';

export default function Home() {
  const [selectedFact, setSelectedFact] = useState(null);

  return (
    <main>
      {/* SEO: Meta Tags */}
      <Helmet>
        <title>Beastly Facts | Amazing Animal Trivia, Guides & Fun Quizzes</title>
        <meta name="description" content="Explore Beastly Facts to discover mind-blowing animal facts, play engaging wildlife quizzes, and dive deep into the wonders of the animal kingdom. Learn today!" />
      </Helmet>

      {/* SEO: Proper H1 Tag */}
      <h1 className="sr-only">Beastly Facts: The Ultimate Destination for Animal Trivia and Wildlife Guides</h1>

      <HeroSection />
      
    {/* Descriptive content to fix "0 word count" issue */}
<section className="px-6 py-8 mt-8 max-w-4xl mx-auto text-muted-foreground border border-border rounded-2xl bg-card shadow-sm">
  <h2 className="text-xl font-bold text-foreground mb-4"><u>~Welcome to Beastly Facts</u></h2>
  <p className="mb-4">
    At Beastly Facts, we are dedicated to bringing the wonders of the animal kingdom directly to your screen. Whether you are a fan of reptiles, mammals, or deep-sea creatures, our platform offers verified facts, educational guides, and fun interactive quizzes.
  </p>
  <p>
    Our mission is to foster a deeper appreciation for wildlife conservation and biology through accessible, bite-sized information. Explore our encyclopedia, test your knowledge with our trivia, or dive into our specialized care guides fit for a wide variety of animals. Every fact you learn here helps support our community of animal enthusiasts.
  </p>
</section>

      <TrendingFacts onOpenFact={setSelectedFact} />
      <EncyclopediaTeaser />
      <CritterDigestPreview />
      <GuideSpotlight />
      <TriviaTeaser />
      <QuizTeaser />
      <Newsletter />
      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} />
    </main>
  );
}