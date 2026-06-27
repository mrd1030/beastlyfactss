import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/home/HeroSection';
const TrendingFacts = lazy(() => import('@/components/home/TrendingFacts'));
const EncyclopediaTeaser = lazy(() => import('@/components/home/EncyclopediaTeaser'));
const CritterDigestPreview = lazy(() => import('@/components/home/CritterDigestPreview'));
const GuideSpotlight = lazy(() => import('@/components/home/GuideSpotlight'));
const QuizTeaser = lazy(() => import('@/components/home/QuizTeaser'));
const TriviaTeaser = lazy(() => import('@/components/home/TriviaTeaser'));
const Newsletter = lazy(() => import('@/components/shared/Newsletter'));
import FactModal from '@/components/shared/FactModal';

export default function Home() {
  const [selectedFact, setSelectedFact] = useState(null);

  return (
    <main>
      {/* SEO: Meta Tags */}
      <Helmet>
        <title>Beastly Facts | Amazing Animal Trivia, Guides & Fun Quizzes</title>
        <meta name="description" content="Explore Beastly Facts to discover mind-blowing animal facts, engaging wildlife quizzes, and practical care guides for reptiles, mammals, birds and more. Start learning today!" />
        <link rel="canonical" href="https://beastlyfacts.com/" />
        <meta property="og:title" content="Beastly Facts | Amazing Animal Trivia, Guides & Fun Quizzes" />
        <meta property="og:description" content="Explore Beastly Facts to discover mind-blowing animal facts, engaging wildlife quizzes, and practical care guides for reptiles, mammals, birds and more." />
        <meta property="og:url" content="https://beastlyfacts.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.webp" />
        <meta property="og:image:alt" content="Beastly Facts — amazing animal trivia, guides and quizzes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beastly Facts | Amazing Animal Trivia, Guides & Fun Quizzes" />
        <meta name="twitter:description" content="Explore Beastly Facts to discover mind-blowing animal facts, engaging wildlife quizzes, and practical care guides for reptiles, mammals, birds and more." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.webp" />
      </Helmet>

      
      <HeroSection />

      <section className="px-6 py-8 mt-8 max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-sm">
        <div className="px-4 py-6 sm:px-6 items-center text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">Start here: the easiest way into Beastly Facts</h2>
          <p className="text-sm text-center text-muted-foreground font-body leading-relaxed mx-auto max-w-2xl">
            Choose the best first step for your visit: browse curated verified facts, explore our combined encyclopedia & care guides, or launch a short quiz to discover your animal spirit match.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/facts" className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-display font-bold text-secondary-foreground shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-colors">
              Browse curated facts
            </Link>
            <Link to="/encyclopedia" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-display font-bold text-foreground hover:bg-muted transition-colors">
              Explore encyclopedia & guides
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <TrendingFacts onOpenFact={setSelectedFact} />
        <EncyclopediaTeaser />
        <CritterDigestPreview />
        <GuideSpotlight />
        <TriviaTeaser />
        <QuizTeaser />
        <Newsletter />
      </Suspense>
      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} />
    </main>
  );
}