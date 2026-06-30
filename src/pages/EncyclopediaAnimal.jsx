import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import { encyclopediaAnimals, difficultyColor } from '@/lib/data/encyclopedia';
import { allGuides } from '@/lib/data/guides';
import { facts } from '@/lib/data/facts';

function BioField({ label, value }) {
  return (
    <div className="bg-muted/50 rounded-xl p-3">
      <p className="text-xs font-display font-semibold text-muted-foreground mb-1">{label}</p>
      {value
        ? <p className="text-sm font-body text-foreground">{value}</p>
        : <p className="text-sm font-body text-muted-foreground italic">Coming soon</p>
      }
    </div>
  );
}

function getRelatedFacts(animal) {
  const nameLower = animal.name.toLowerCase();
  return facts.filter(f => {
    const fAnimal = f.animal.toLowerCase();
    return nameLower.includes(fAnimal) || fAnimal.split(' ').some(word => word.length > 3 && nameLower.includes(word));
  }).slice(0, 3);
}

export default function EncyclopediaAnimal() {
  const { id } = useParams();
  const animal = encyclopediaAnimals.find(a => a.id === id);
  const guide = animal?.guideId ? allGuides.find(g => g.id === animal.guideId) : null;

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl block mb-3">🔍</span>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">Animal not found</h2>
          <Link to="/encyclopedia/" className="text-secondary text-sm font-display font-semibold hover:underline">
            Browse the encyclopedia →
          </Link>
        </div>
      </div>
    );
  }

  const relatedFacts = getRelatedFacts(animal);
  const diffClass = difficultyColor[animal.difficulty] || 'text-muted-foreground bg-muted';
  const bio = animal.bio || {};
  const ogImage = guide?.image
    ? `https://beastlyfacts.com${guide.image}`
    : 'https://beastlyfacts.com/assets/hero-1200.jpg';
  const pageTitle = `${animal.name} — Encyclopedia | Beastly Facts`;
  const pageDescription = bio.overview
    || `Learn about the ${animal.name} (${animal.scientific}) — natural habitat, wild diet, lifespan, size, and conservation status.`;
  const canonicalUrl = `https://beastlyfacts.com/encyclopedia/animal/${animal.id}/`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${animal.name} — Beastly Facts Encyclopedia`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": pageTitle,
          "description": pageDescription,
          "url": canonicalUrl,
          "author": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com" },
          "publisher": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com" },
          "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
        })}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        {/* Back */}
        <Link
          to="/encyclopedia/"
          className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Encyclopedia
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{animal.emoji}</span>
            <div>
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground leading-tight">
                {animal.name}
              </h1>
              <p className="text-sm text-muted-foreground font-body italic mt-0.5">{animal.scientific}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-display font-semibold text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                  {animal.category}
                </span>
                <span className={`text-xs font-display font-semibold px-2.5 py-0.5 rounded-full ${diffClass}`}>
                  {animal.difficulty} care
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Hero image */}
            {guide?.image && (
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src={guide.image}
                  alt={animal.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Overview */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h2 className="font-display font-bold text-base text-foreground mb-3">🌍 Overview</h2>
              {bio.overview
                ? <p className="text-sm font-body text-muted-foreground leading-relaxed">{bio.overview}</p>
                : <p className="text-sm font-body text-muted-foreground italic leading-relaxed">
                    Detailed overview coming soon. We're expanding the encyclopedia one animal at a time — check back!
                  </p>
              }
            </div>

            {/* Bio stats */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h2 className="font-display font-bold text-base text-foreground mb-4">📋 Quick Facts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <BioField label="Native Range" value={bio.origin} />
                <BioField label="Natural Habitat" value={bio.habitat} />
                <BioField label="Adult Size" value={bio.adultSize} />
                <BioField label="Wild Diet" value={bio.wildDiet} />
                <BioField label="Wild Lifespan" value={bio.wildLifespan} />
                <BioField label="Conservation Status" value={bio.conservation} />
              </div>
            </div>

            {/* Fun facts from facts page */}
            {relatedFacts.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-3">🤩 Fun Facts</h2>
                <div className="space-y-3">
                  {relatedFacts.map(fact => (
                    <div key={fact.id} className="bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3">
                      <p className="text-xs font-display font-bold text-secondary mb-1">{fact.emoji} {fact.title}</p>
                      <p className="text-sm font-body text-foreground leading-relaxed">{fact.fact}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/facts/"
                  className="inline-flex items-center gap-1 mt-4 text-xs font-display font-semibold text-secondary hover:underline"
                >
                  Browse all animal facts <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4">

            {/* Guide CTA */}
            {guide && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  📖 Care Guide
                </p>
                <Link to={`/guides/${guide.id}/`} className="group block">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl flex-shrink-0">{guide.emoji}</span>
                    <div>
                      <p className="font-display font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
                        {guide.name} Care Guide
                      </p>
                      <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">{guide.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-display font-semibold text-secondary">
                    View full guide <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            )}

            {/* Did you know */}
            {guide?.funFact && (
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5">
                <p className="text-xs font-display font-bold text-secondary mb-2">🤓 Did You Know?</p>
                <p className="text-sm font-body text-foreground leading-relaxed">{guide.funFact}</p>
              </div>
            )}

            {/* Explore more */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Explore More
              </p>
              <div className="space-y-2">
                <Link
                  to={`/encyclopedia/category/${animal.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="flex items-center gap-2 text-sm font-display font-semibold text-foreground hover:text-secondary transition-colors py-1"
                >
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  All {animal.category}
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </Link>
                <Link
                  to="/facts/"
                  className="flex items-center gap-2 text-sm font-display font-semibold text-foreground hover:text-secondary transition-colors py-1"
                >
                  <span className="text-base">🤩</span>
                  Animal Fun Facts
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
