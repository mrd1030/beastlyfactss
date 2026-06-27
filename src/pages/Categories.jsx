import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/lib/data/categories';
import { client } from '@/lib/sanity';
import groq from 'groq';

export default function Categories() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const query = groq`*[_type == "post" && defined(slug.current)] {
      "cats": categories[]->slug.current,
      "tags": tags
    }`;
    client.fetch(query).then(posts => {
      const c = {};
      posts.forEach(p => {
        const all = [...(p.cats || []), ...(p.tags || [])];
        all.forEach(s => { if (s) c[s] = (c[s] || 0) + 1; });
      });
      setCounts(c);
    }).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Browse by Category | Beastly Facts</title>
        <meta name="description" content="Explore Beastly Facts articles and care guides by animal category — reptiles, dogs, cats, birds, exotic pets, and more. Find exactly what you're looking for." />
        <link rel="canonical" href="https://beastlyfacts.com/categories" />
        <meta property="og:title" content="Browse by Category | Beastly Facts" />
        <meta property="og:description" content="Explore Beastly Facts articles and care guides by animal category — reptiles, dogs, cats, birds, exotic pets, and more." />
        <meta property="og:url" content="https://beastlyfacts.com/categories" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:alt" content="Beastly Facts — browse by category" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Browse by Category | Beastly Facts" />
        <meta name="twitter:description" content="Explore Beastly Facts articles and care guides by animal category." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Browse by Category | Beastly Facts",
          "description": "Explore Beastly Facts articles and care guides by animal category — reptiles, dogs, cats, birds, exotic pets, and more.",
          "url": "https://beastlyfacts.com/categories",
          "publisher": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com" }
        })}</script>
      </Helmet>
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="File cabinet">🗂️</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">Browse by Category</h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Explore care guides, fun facts, and expert tips organised by animal type.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }}
            >
              <Link to={`/category/${cat.slug}`}>
                <div className="bg-card border border-border rounded-2xl p-5 hover:border-secondary/40 hover:shadow-md transition-all group h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{cat.emoji}</span>
                    {counts[cat.slug] > 0 && (
                      <span className="text-xs font-display font-semibold bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                        {counts[cat.slug]} articles
                      </span>
                    )}
                  </div>
                  <h2 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-secondary transition-colors">
                    {cat.label}
                  </h2>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed flex-1">{cat.description}</p>
                  <div className="mt-4 text-xs font-display font-semibold text-secondary flex items-center gap-1">
                    Browse articles →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}