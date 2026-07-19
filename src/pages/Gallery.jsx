import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { facts, categories } from '@/lib/data/facts';
import { imagePathFor } from '@/lib/data/factImages';
import FactModal from '@/components/shared/FactModal';
import ImageLightbox from '@/components/shared/ImageLightbox';

const PAGE_SIZE = 30;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [selectedFact, setSelectedFact] = useState(null);
  const [imageFact, setImageFact] = useState(null);

  const allCategories = useMemo(() => ['All', ...categories.map(c => c.name)], []);

  // Only facts with a real, dedicated photo - a newly added fact without one
  // yet shouldn't show up here as a broken/generic thumbnail.
  const withPhotos = useMemo(
    () => facts.map(f => ({ fact: f, imagePath: imagePathFor(f) })).filter(f => f.imagePath),
    []
  );

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return withPhotos;
    return withPhotos.filter(({ fact }) => fact.category === activeCategory);
  }, [withPhotos, activeCategory]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Photo Gallery | Beastly Facts</title>
        <meta name="description" content="Browse every real animal photo from Beastly Facts in one gallery - hover to preview, click to read the fact behind it." />
        <link rel="canonical" href="https://beastlyfacts.com/gallery/" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Photo Gallery | Beastly Facts" />
        <meta property="og:description" content="Browse every real animal photo from Beastly Facts in one gallery - hover to preview, click to read the fact behind it." />
        <meta property="og:url" content="https://beastlyfacts.com/gallery/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Gallery | Beastly Facts" />
        <meta name="twitter:description" content="Browse every real animal photo from Beastly Facts in one gallery - hover to preview, click to read the fact behind it." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Camera">📸</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Photo Gallery
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Every real animal photo behind our facts, in one place. Hover to preview, click to read the fact.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-6">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-secondary text-secondary-foreground shadow-md shadow-secondary/20'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-secondary/30'
                }`}
              >
                {cat === 'All' ? '✨ All' : `${categories.find(c => c.name === cat)?.emoji || ''} ${cat}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <p className="text-xs text-muted-foreground font-body text-center mb-6">
          {filtered.length} photos {totalPages > 1 && `· Page ${page} of ${totalPages}`}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {paginated.map(({ fact, imagePath }, i) => (
            <motion.button
              key={fact.id || fact._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % PAGE_SIZE) * 0.02, duration: 0.3 }}
              onClick={() => setSelectedFact(fact)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-muted border border-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
              aria-label={`${fact.animal}: ${fact.title}`}
            >
              <img
                src={imagePath}
                alt={`${fact.animal} - ${fact.title}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="text-left">
                  <p className="text-[10px] font-display font-bold uppercase tracking-wider text-white/70">
                    {fact.category}
                  </p>
                  <p className="text-xs font-display font-bold text-white leading-tight mt-0.5">
                    {fact.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">📷</span>
            <p className="font-display font-bold text-foreground">No photos in this category yet!</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => handlePageChange(p)}
                className={`w-8 h-8 rounded-lg text-xs font-display font-bold transition-all ${
                  p === page
                    ? 'bg-secondary text-secondary-foreground shadow-sm'
                    : 'bg-card border border-border text-muted-foreground hover:border-secondary/40'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} onOpenImage={setImageFact} />
      <ImageLightbox fact={imageFact} imagePath={imagePathFor(imageFact)} onClose={() => setImageFact(null)} />
    </div>
  );
}
