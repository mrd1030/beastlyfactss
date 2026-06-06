import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { guidesExtended } from '@/lib/data/guidesExtended';
import { dogGuides, catGuides } from '@/lib/data/dogCatGuides';
import { difficultyColor } from '@/lib/data/encyclopedia';

const allGuides = [...guidesExtended, ...dogGuides, ...catGuides];

const topFilters = ['All', 'Reptiles & Exotics', 'Dogs', 'Cats'];

const reptileExoticTypes = ['Gecko', 'Lizard', 'Snake', 'Turtle', 'Tortoise', 'Lagomorph', 'Insectivore', 'Cavy', 'Chinchilla', 'Marsupial', 'Parrot', 'Parakeet', 'Bird', 'Small Mammal'];

const dogSizes = ['All Sizes', 'Small', 'Medium', 'Large'];

export default function Guides() {
  const [topFilter, setTopFilter] = useState('All');
  const [dogSize, setDogSize] = useState('All Sizes');
  const [reptileType, setReptileType] = useState('All');

  const reptileSubTypes = useMemo(() => {
    const types = new Set();
    guidesExtended.forEach(g => types.add(g.petType));
    return ['All', ...Array.from(types).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (topFilter === 'All') return allGuides;
    if (topFilter === 'Dogs') {
      return dogGuides.filter(g => dogSize === 'All Sizes' || g.sizeCategory === dogSize || g.sizeCategory === 'All Sizes');
    }
    if (topFilter === 'Cats') return catGuides;
    if (topFilter === 'Reptiles & Exotics') {
      return guidesExtended.filter(g => reptileType === 'All' || g.petType === reptileType);
    }
    return allGuides;
  }, [topFilter, dogSize, reptileType]);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block">📖</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">
              Care Guides
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Evidence-based care guides for reptiles, exotic pets, dogs, and cats. Click any guide to read in full.
            </p>
          </motion.div>

          {/* Top category filter */}
          <div className="flex flex-wrap gap-2 mt-5">
            {topFilters.map(f => (
              <button
                key={f}
                onClick={() => { setTopFilter(f); setDogSize('All Sizes'); setReptileType('All'); }}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                  topFilter === f
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Dog size sub-filter */}
          {topFilter === 'Dogs' && (
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs font-body text-muted-foreground self-center pr-1">Size:</span>
              {dogSizes.map(s => (
                <button
                  key={s}
                  onClick={() => setDogSize(s)}
                  className={`px-3 py-1 rounded-full text-xs font-display font-semibold transition-all ${
                    dogSize === s
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Reptile type sub-filter */}
          {topFilter === 'Reptiles & Exotics' && (
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs font-body text-muted-foreground self-center pr-1">Type:</span>
              {reptileSubTypes.map(t => (
                <button
                  key={t}
                  onClick={() => setReptileType(t)}
                  className={`px-3 py-1 rounded-full text-xs font-display font-semibold transition-all ${
                    reptileType === t
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Guide grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-display font-bold text-foreground">No guides found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((guide, i) => (
              <GuideCard key={guide.id} guide={guide} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GuideCard({ guide, index }) {
  const diffClass = difficultyColor[guide.difficulty] || 'text-muted-foreground bg-muted';
  const isBreedQuirk = guide.name.includes('Breed Quirks') || guide.name.includes(':');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.4) }}
      whileHover={{ y: -3 }}
    >
      <Link to={`/guides/${guide.id}`}>
        <div className="bg-card border border-border rounded-2xl p-5 hover:border-secondary/40 hover:shadow-md transition-all group h-full flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <span className="text-3xl">{guide.emoji}</span>
            <div className="flex items-center gap-1.5 flex-wrap justify-end">
              {isBreedQuirk && (
                <span className="text-xs font-display font-semibold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                  Breed Quirks
                </span>
              )}
              {guide.sizeCategory && guide.sizeCategory !== 'All Sizes' && (
                <span className="text-xs font-display font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {guide.sizeCategory}
                </span>
              )}
              <span className={`text-xs font-display font-semibold px-2 py-0.5 rounded-full ${diffClass}`}>
                {guide.difficulty}
              </span>
            </div>
          </div>
          <h3 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-secondary transition-colors">
            {guide.name}
          </h3>
          <p className="text-xs text-muted-foreground font-body mb-2">{guide.petType}</p>
          <p className="text-xs text-muted-foreground font-body leading-relaxed flex-1">
            {guide.tagline}
          </p>
          <div className="flex items-center gap-1 mt-4 text-xs font-display font-semibold text-secondary">
            View full guide <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}