import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { guidesExtended } from '@/lib/data/guidesExtended';
import { dogGuides, catGuides } from '@/lib/data/dogCatGuides';
import { difficultyColor } from '@/lib/data/encyclopedia';
import { base44 } from '@/api/base44Client';

const allGuides = [...guidesExtended, ...dogGuides, ...catGuides];

const topFilters = [
  { label: 'All', emoji: '🐾' },
  { label: 'Geckos', emoji: '🦎' },
  { label: 'Lizards', emoji: '🦎' },
  { label: 'Snakes', emoji: '🐍' },
  { label: 'Turtles & Tortoises', emoji: '🐢' },
  { label: 'Small Mammals', emoji: '🦔' },
  { label: 'Birds', emoji: '🐦' },
  { label: 'Dogs', emoji: '🐶' },
  { label: 'Cats', emoji: '🐱' },
  { label: 'Invertebrates', emoji: '🕷️' },
  { label: 'Amphibians', emoji: '🐸' },
];

// petType values in guidesExtended now match encyclopedia categories exactly
const directMatchCategories = new Set(['Geckos', 'Lizards', 'Snakes', 'Turtles & Tortoises', 'Small Mammals', 'Birds', 'Invertebrates', 'Amphibians']);

const dogSizes = ['All Sizes', 'Small', 'Medium', 'Large'];

const subtypes = {
  Geckos: ['Crested Gecko', 'Leopard Gecko', 'Gargoyle Gecko', 'Mourning Gecko', 'Tokay Gecko', 'African Fat-Tailed Gecko', 'Leaf-Tailed Gecko'],
  Lizards: ['Bearded Dragon', 'Blue Tongue Skink', 'Jackson\'s Chameleon', 'Green Anole', 'Ackie Monitor', 'Savannah Monitor', 'Uromastyx', 'Argentine Black and White Tegu'],
  Snakes: ['Ball Python', 'Corn Snake', 'Hognose Snake', 'Boa Constrictor', 'California Kingsnake', 'Milk Snake'],
  'Turtles & Tortoises': ['Red-Eared Slider', 'Russian Tortoise', 'Sulcata Tortoise', 'Box Turtle'],
  'Small Mammals': ['Rabbit', 'Hedgehog', 'Guinea Pig', 'Chinchilla', 'Ferret', 'Sugar Glider'],
  Birds: ['Budgie', 'Cockatiel', 'Green Cheek Conure', 'Lovebird', 'African Grey Parrot'],
  Dogs: ['Labrador Retriever', 'Golden Retriever', 'German Shepherd', 'French Bulldog', 'Border Collie', 'Siberian Husky'],
  Cats: ['Domestic Shorthair', 'Maine Coon', 'Siamese', 'Ragdoll', 'Bengal', 'Persian'],
  Invertebrates: ['Tarantula', 'Praying Mantis', 'Giant Millipede', 'Emperor Scorpion', 'Madagascar Hissing Cockroach', 'Stick Insect'],
  Amphibians: ['White\'s Tree Frog', 'Pacman Frog', 'Fire-Bellied Toad', 'Axolotl', 'Tiger Salamander'],
};

export default function Guides() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [dogSize, setDogSize] = useState('All Sizes');
  const [activeSubtype, setActiveSubtype] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return allGuides;
    if (activeFilter === 'Dogs') {
      const sized = dogGuides.filter(g => dogSize === 'All Sizes' || g.sizeCategory === dogSize || g.sizeCategory === 'All Sizes');
      if (activeSubtype) return sized.filter(g => g.name.includes(activeSubtype));
      return sized;
    }
    if (activeFilter === 'Cats') {
      if (activeSubtype) return catGuides.filter(g => g.name.includes(activeSubtype));
      return catGuides;
    }
    if (directMatchCategories.has(activeFilter)) {
      const byType = guidesExtended.filter(g => g.petType === activeFilter);
      if (activeSubtype) return byType.filter(g => g.name.includes(activeSubtype));
      return byType;
    }
    return allGuides;
  }, [activeFilter, dogSize, activeSubtype]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pet Care Guides | Reptiles, Dogs, Cats & Exotic Pets | Beastly Facts</title>
        <meta name="description" content="Browse evidence-based care guides for reptiles, exotic pets, dogs, and cats on Beastly Facts. Covering housing, diet, health, and enrichment for over 50 species." />
        <link rel="canonical" href="https://beastlyfacts.com/encyclopedia?tab=guides" />
        <meta property="og:title" content="Pet Care Guides | Reptiles, Dogs, Cats & Exotic Pets | Beastly Facts" />
        <meta property="og:description" content="Browse evidence-based care guides for reptiles, exotic pets, dogs, and cats. Covering housing, diet, health, and enrichment for over 50 species." />
        <meta property="og:url" content="https://beastlyfacts.com/encyclopedia?tab=guides" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:alt" content="Beastly Facts — pet care guides for reptiles, dogs, cats and exotic pets" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pet Care Guides | Beastly Facts" />
        <meta name="twitter:description" content="Browse evidence-based care guides for reptiles, exotic pets, dogs, and cats." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Open book">📖</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-1">
              Care Guides
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Evidence-based care guides for reptiles, exotic pets, dogs, and cats.
            </p>
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mt-5">
            {topFilters.map(f => (
              <button
                key={f.label}
                onClick={() => { setActiveFilter(f.label); setDogSize('All Sizes'); setActiveSubtype(null); base44.analytics.track({ eventName: 'guides_category_filter_clicked', properties: { category: f.label } }); }}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1.5 ${
                  activeFilter === f.label
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{f.emoji}</span> {f.label}
              </button>
            ))}
          </div>

          {/* Dog size sub-filter */}
          {activeFilter === 'Dogs' && (
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs font-body text-muted-foreground self-center pr-1">Size:</span>
              {dogSizes.map(s => (
                <button
                  key={s}
                  onClick={() => { setDogSize(s); setActiveSubtype(null); }}
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

          {/* Subtype filter — shown when a specific category is active */}
          {activeFilter !== 'All' && subtypes[activeFilter] && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              <button
                onClick={() => setActiveSubtype(null)}
                className={`px-2.5 py-1 rounded-full text-xs font-body font-semibold transition-all ${
                  activeSubtype === null
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                All
              </button>
              {subtypes[activeFilter].map(sub => (
                <button
                  key={sub}
                  onClick={() => { const next = activeSubtype === sub ? null : sub; setActiveSubtype(next); if (next) base44.analytics.track({ eventName: 'guides_subtype_filter_clicked', properties: { subtype: sub, category: activeFilter } }); }}
                  className={`px-2.5 py-1 rounded-full text-xs font-body font-semibold transition-all ${
                    activeSubtype === sub
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {sub}
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
      <Link to={`/guides/${guide.id}`} onClick={() => base44.analytics.track({ eventName: 'guide_card_clicked', properties: { guide_id: guide.id, guide_name: guide.name, pet_type: guide.petType, difficulty: guide.difficulty } })}>
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