import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/lib/data/categories';

// The three lists below are hardcoded mirrors (same convention as prerender.mjs
// and generate-sitemap.js) rather than imports, so this page doesn't pull the
// full facts/guides/encyclopedia datasets into its chunk.

// Mirrors `categories` in src/lib/data/facts.js (slugs via slugify)
const FACT_CATEGORIES = [
  { label: 'Birds', emoji: '🦜', slug: 'birds' },
  { label: 'Dogs & Cats', emoji: '🐾', slug: 'dogs-and-cats' },
  { label: 'Mammals', emoji: '🦁', slug: 'mammals' },
  { label: 'Ocean', emoji: '🐬', slug: 'ocean' },
  { label: 'Reptiles', emoji: '🦎', slug: 'reptiles' },
  { label: 'Weird & Wonderful', emoji: '🦄', slug: 'weird-and-wonderful' },
];

// Mirrors guideFilters in src/pages/Guides.jsx (excluding 'All')
const GUIDE_CATEGORIES = [
  { label: 'Amphibians', emoji: '🐸', slug: 'amphibians' },
  { label: 'Birds', emoji: '🐦', slug: 'birds' },
  { label: 'Cats', emoji: '🐱', slug: 'cats' },
  { label: 'Dogs', emoji: '🐶', slug: 'dogs' },
  { label: 'Fish', emoji: '🐠', slug: 'fish' },
  { label: 'Geckos', emoji: '🦎', slug: 'geckos' },
  { label: 'Invertebrates', emoji: '🕷️', slug: 'invertebrates' },
  { label: 'Lizards', emoji: '🦎', slug: 'lizards' },
  { label: 'Small Mammals', emoji: '🦔', slug: 'small-mammals' },
  { label: 'Snakes', emoji: '🐍', slug: 'snakes' },
  { label: 'Turtles & Tortoises', emoji: '🐢', slug: 'turtles-tortoises' },
];

// Mirrors encyclopediaCategories in src/lib/data/encyclopedia/index.js
const ENCYCLOPEDIA_CATEGORIES = [
  { label: 'Amphibians', emoji: '🐸', slug: 'amphibians' },
  { label: 'Birds', emoji: '🐦', slug: 'birds' },
  { label: 'Cats', emoji: '🐱', slug: 'cats' },
  { label: 'Dogs', emoji: '🐶', slug: 'dogs' },
  { label: 'Fish', emoji: '🐠', slug: 'fish' },
  { label: 'Geckos', emoji: '🦎', slug: 'geckos' },
  { label: 'Invertebrates', emoji: '🕷️', slug: 'invertebrates' },
  { label: 'Lizards', emoji: '🦎', slug: 'lizards' },
  { label: 'Small Mammals', emoji: '🦔', slug: 'small-mammals' },
  { label: 'Snakes', emoji: '🐍', slug: 'snakes' },
  { label: 'Turtles & Tortoises', emoji: '🐢', slug: 'turtles-tortoises' },
];

const SECTIONS = [
  {
    id: 'facts',
    emoji: '🧠',
    title: 'Fun Facts',
    blurb: 'Bite-sized "wait, REALLY?!" animal facts, filtered by animal group.',
    viewAll: { to: '/facts/', label: 'All facts' },
    items: FACT_CATEGORIES.map(c => ({
      key: c.slug, emoji: c.emoji, label: c.label, to: `/facts/category/${c.slug}/`,
    })),
  },
  {
    id: 'digest',
    emoji: '📰',
    title: 'Critter Digest',
    blurb: 'In-depth articles, husbandry deep-dives, and pet tips from the blog.',
    viewAll: { to: '/blog/', label: 'All articles' },
    items: CATEGORIES.map(c => ({
      key: c.slug,
      emoji: c.emoji,
      label: c.label,
      description: c.description,
      to: c.slug === 'short-stories' ? '/chronicles/dex/' : `/blog/category/${c.slug}/`,
    })),
  },
  {
    id: 'guides',
    emoji: '📋',
    title: 'Care Guides',
    blurb: 'Practical care and husbandry guides, organised by animal type.',
    viewAll: { to: '/guides/', label: 'All guides' },
    items: GUIDE_CATEGORIES.map(c => ({
      key: c.slug, emoji: c.emoji, label: c.label, to: `/guides/category/${c.slug}/`,
    })),
  },
  {
    id: 'encyclopedia',
    emoji: '📚',
    title: 'Encyclopedia',
    blurb: 'Species profiles covering temperament, lifespan, diet, and care needs.',
    viewAll: { to: '/encyclopedia/', label: 'Browse all' },
    items: ENCYCLOPEDIA_CATEGORIES.map(c => ({
      key: c.slug, emoji: c.emoji, label: c.label, to: `/encyclopedia/category/${c.slug}/`,
    })),
  },
];

const PAGE_DESCRIPTION = 'Every category on Beastly Facts in one place. Browse fun animal facts, Critter Digest articles, care guides, and encyclopedia species groups.';

export default function Categories() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Browse by Category | Beastly Facts</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/categories/" />
        <meta property="og:title" content="Browse by Category | Beastly Facts" />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content="https://beastlyfacts.com/categories/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - browse by category" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Browse by Category | Beastly Facts" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Browse by Category | Beastly Facts",
          "description": PAGE_DESCRIPTION,
          "url": "https://beastlyfacts.com/categories/",
          "publisher": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com" }
        })}</script>
      </Helmet>
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="File cabinet">🗂️</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">Browse by Category</h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Everything on Beastly Facts, organised by animal type. Fun facts, articles, care guides, and species profiles.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-12">
        {SECTIONS.map((section, si) => (
          <section key={section.id}>
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                  <span role="img" aria-hidden="true">{section.emoji}</span>
                  {section.title}
                </h2>
                <p className="text-xs text-muted-foreground font-body mt-1">{section.blurb}</p>
              </div>
              <Link
                to={section.viewAll.to}
                className="text-xs font-display font-semibold text-secondary hover:underline whitespace-nowrap flex-shrink-0"
              >
                {section.viewAll.label} →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: si * 0.05 + i * 0.02 }}
                  whileHover={{ y: -2 }}
                >
                  <Link to={item.to}>
                    <div className="bg-card border border-border rounded-xl p-3.5 hover:border-secondary/40 hover:shadow-md transition-all group h-full">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl flex-shrink-0">{item.emoji}</span>
                        <span className="font-display font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-tight">
                          {item.label}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-[11px] text-muted-foreground font-body leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
