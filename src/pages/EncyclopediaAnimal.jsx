import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import { encyclopediaAnimals, difficultyColor } from '@/lib/data/encyclopedia';
import { allGuides } from '@/lib/data/guides';
import { facts } from '@/lib/data/facts';
import { truncateDescription } from '@/lib/utils/truncate';
import { mdxPosts } from '@/lib/mdxPosts';
import { RELATED_ARTICLES } from '@/lib/data/relatedArticles';
import AnimalQuiz from '@/components/encyclopedia/AnimalQuiz';
import AnimalCompare from '@/components/encyclopedia/AnimalCompare';
import { IMAGE_DIMENSIONS } from '@/lib/data/imageDimensions';
import { seriesForSlug, chroniclesPath } from '@/lib/chronicles';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';

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
    // Whole-name containment only - matching on individual shared words
    // (e.g. "dragon") false-matched Komodo Dragon facts onto Bearded Dragon.
    return nameLower.includes(fAnimal) || fAnimal.includes(nameLower);
  }).slice(0, 3);
}

export default function EncyclopediaAnimal() {
  const { id } = useParams();
  const animal = encyclopediaAnimals.find(a => a.id === id);
  const guide = animal?.guideId ? allGuides.find(g => g.id === animal.guideId) : null;

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Helmet>
          <title>Animal Not Found | Beastly Facts</title>
          <meta name="robots" content="noindex" />
        </Helmet>
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
  const relatedArticles = (RELATED_ARTICLES[animal.guideId] || []).map(slug => mdxPosts.find(p => p._id === slug)).filter(Boolean);
  const diffClass = difficultyColor[animal.difficulty] || 'text-muted-foreground bg-muted';
  const bio = animal.bio || {};
  const ogImage = guide?.image
    ? `https://beastlyfacts.com${guide.image}`
    : 'https://beastlyfacts.com/assets/hero-1200.jpg';
  // og:image:width/height must match the actual image's real size - Helmet
  // has no way to "unset" a tag it doesn't declare, so leaving these fixed
  // at 1200x630 would silently misdeclare every animal photo's real dimensions.
  const ogImageDims = (guide?.image && IMAGE_DIMENSIONS[guide.image]) || { width: 1200, height: 630 };
  const pageTitle = `${animal.name} - Encyclopedia | Beastly Facts`;
  const pageDescription = truncateDescription(bio.overview
    || `Learn about the ${animal.name} (${animal.scientific}) - natural habitat, wild diet, lifespan, size, and conservation status.`);
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
        <meta property="og:image:width" content={String(ogImageDims.width)} />
        <meta property="og:image:height" content={String(ogImageDims.height)} />
        <meta property="og:image:alt" content={`${animal.name} - Beastly Facts Encyclopedia`} />
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
                    Detailed overview coming soon. We're expanding the encyclopedia one animal at a time - check back!
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

            {/* Compare */}
            <AnimalCompare animal={animal} key={`compare-${animal.id}`} />

            {/* Test yourself */}
            <AnimalQuiz animal={animal} key={animal.id} />

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

            {/* Newsletter signup */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-sm text-foreground mb-1">Subscribe - it's free</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">New animal facts and care guides straight to your inbox. No spam. 🐾</p>
              <BeehiivSubscribe />
            </div>

            {/* Related deep-dive articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  📰 Deep Dive
                </p>
                <div className="space-y-3">
                  {relatedArticles.map(article => (
                    <Link key={article._id} to={`/blog/${article.slug.current}/`} className="group block">
                      <p className="text-xs font-display font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                        {article.emoji ? `${article.emoji} ` : ''}{article.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Did you know */}
            {guide?.funFact && (
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5">
                <p className="text-xs font-display font-bold text-secondary mb-2">🤓 Did You Know?</p>
                <p className="text-sm font-body text-foreground leading-relaxed">{guide.funFact}</p>
              </div>
            )}

            {/* Related short story */}
            {animal.relatedStory && (
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5">
                <p className="text-xs font-display font-bold text-secondary mb-2">📖 Short Story</p>
                <p className="text-xs text-muted-foreground font-body mb-2">There's a whole fiction series about a {animal.name.toLowerCase()}:</p>
                <Link
                  to={seriesForSlug(animal.relatedStory.slug) ? chroniclesPath(seriesForSlug(animal.relatedStory.slug).id) : `/blog/${animal.relatedStory.slug}/`}
                  className="group block"
                >
                  <p className="text-sm font-display font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                    {animal.relatedStory.title}
                  </p>
                </Link>
              </div>
            )}

            {/* Explore more */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Explore More
              </p>
              <div className="space-y-2">
                <Link
                  to={`/encyclopedia/category/${animal.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/`}
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
