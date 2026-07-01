import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';
import { allGuides } from '@/lib/data/guides';
import { dogGuides } from '@/lib/data/guides/dogs';
import { catGuides } from '@/lib/data/guides/cats';
import { difficultyColor } from '@/lib/data/encyclopedia';
import { base44 } from '@/api/base44Client';
import { DifficultyLegend } from '@/components/shared/DifficultyLegend';

const guideFilters = [
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

const directMatchCategories = new Set(['Geckos', 'Lizards', 'Snakes', 'Turtles & Tortoises', 'Small Mammals', 'Birds', 'Invertebrates', 'Amphibians']);

const dogSizes = ['All Sizes', 'Small', 'Medium', 'Large'];

const subtypes = {
  Geckos: ['Crested Gecko', 'Leopard Gecko', 'Gargoyle Gecko', 'Mourning Gecko', 'Tokay Gecko', 'African Fat-Tailed Gecko', 'Leaf-Tailed Gecko'],
  Lizards: ['Bearded Dragon', 'Blue Tongue Skink', "Jackson's Chameleon", 'Green Anole', 'Ackie Monitor', 'Savannah Monitor', 'Uromastyx', 'Argentine Black and White Tegu'],
  Snakes: ['Ball Python', 'Corn Snake', 'Hognose Snake', 'Boa Constrictor', 'California Kingsnake', 'Milk Snake'],
  'Turtles & Tortoises': ['Red-Eared Slider', 'Russian Tortoise', 'Sulcata Tortoise', 'Box Turtle'],
  'Small Mammals': ['Rabbit', 'Hedgehog', 'Guinea Pig', 'Chinchilla', 'Ferret', 'Sugar Glider'],
  Birds: ['Budgie', 'Cockatiel', 'Green Cheek Conure', 'Lovebird', 'African Grey Parrot'],
  Dogs: ['Labrador Retriever', 'Golden Retriever', 'German Shepherd', 'French Bulldog', 'Border Collie', 'Siberian Husky'],
  Cats: ['Domestic Shorthair', 'Maine Coon', 'Siamese', 'Ragdoll', 'Bengal', 'Persian'],
  Invertebrates: ['Tarantula', 'Praying Mantis', 'Giant Millipede', 'Emperor Scorpion', 'Madagascar Hissing Cockroach', 'Stick Insect'],
  Amphibians: ["White's Tree Frog", 'Pacman Frog', 'Fire-Bellied Toad', 'Axolotl', 'Tiger Salamander'],
};

const resolveFilter = (slug) => {
  if (!slug) return 'All';
  return guideFilters.find(f =>
    f.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === slug.toLowerCase()
  )?.label ?? 'All';
};

export default function Guides() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();

  const [activeFilter, setActiveFilter] = useState(() => resolveFilter(category));
  const [dogSize, setDogSize] = useState('All Sizes');
  const [activeSubtype, setActiveSubtype] = useState(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  useEffect(() => {
    setActiveFilter(resolveFilter(category));
    setDogSize('All Sizes');
    setActiveSubtype(null);
  }, [category]);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') setIsLegendOpen(false); };
    if (isLegendOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLegendOpen]);

  const filteredGuides = useMemo(() => {
    if (activeFilter === 'All') return allGuides;
    if (activeFilter === 'Dogs') {
      const sized = dogGuides.filter(g => dogSize === 'All Sizes' || g.sizeCategory === dogSize || g.sizeCategory === 'All Sizes');
      return activeSubtype ? sized.filter(g => g.name.includes(activeSubtype)) : sized;
    }
    if (activeFilter === 'Cats') {
      return activeSubtype ? catGuides.filter(g => g.name.includes(activeSubtype)) : catGuides;
    }
    if (directMatchCategories.has(activeFilter)) {
      const byType = allGuides.filter(g => g.petType === activeFilter);
      return activeSubtype ? byType.filter(g => g.name.includes(activeSubtype)) : byType;
    }
    return allGuides;
  }, [activeFilter, dogSize, activeSubtype]);

  const pageTitle = activeFilter === 'All'
    ? 'Care Guides | Beastly Facts'
    : `${activeFilter} Care Guides | Beastly Facts`;

  const pageDescription = activeFilter !== 'All'
    ? `Explore all ${activeFilter} care guides on Beastly Facts — husbandry advice, feeding schedules, housing setups, and health tips for every keeper.`
    : 'Browse our complete library of reptile, bird, mammal, and exotic pet care guides on Beastly Facts. Evidence-based husbandry advice from experienced keepers.';

  const canonical = `https://beastlyfacts.com${location.pathname.replace(/\/$/, '')}/`;
  const shouldNoindex = hasNoindexStateParams(location.search);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content={shouldNoindex ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:alt" content="Beastly Facts — exotic pet care guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Open book">📖</span>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Care Guides
              </h1>
              <button
                onClick={() => setIsLegendOpen(true)}
                title="View Care Difficulty Legend"
                className="p-1 rounded-full text-muted-foreground hover:text-secondary hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50"
              >
                <Info className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Evidence-based husbandry guides for reptiles, birds, mammals, and more.
            </p>
          </motion.div>
          <div className="flex gap-2 mt-5 bg-muted/60 rounded-2xl p-1.5 max-w-sm">
            {[
              { id: 'encyclopedia', label: '📚 Encyclopedia' },
              { id: 'guides', label: '📖 Care Guides' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.id === 'encyclopedia' ? '/encyclopedia/' : '/guides/')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-display font-bold transition-all ${
                  tab.id === 'guides' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {guideFilters.map(f => (
            <button
              key={f.label}
              onClick={() => {
                const slug = f.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                navigate(f.label === 'All' ? '/guides/' : `/guides/category/${slug}/`);
                setDogSize('All Sizes');
                setActiveSubtype(null);
                base44.analytics.track({ eventName: 'guides_category_filter_clicked', properties: { category: f.label } });
              }}
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

        {activeFilter === 'Dogs' && (
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs font-body text-muted-foreground self-center pr-1">Size:</span>
            {dogSizes.map(s => (
              <button key={s} onClick={() => { setDogSize(s); setActiveSubtype(null); }}
                className={`px-3 py-1 rounded-full text-xs font-display font-semibold transition-all ${dogSize === s ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                {s}
              </button>
            ))}
          </div>
        )}

        {activeFilter !== 'All' && subtypes[activeFilter] && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            <button onClick={() => setActiveSubtype(null)}
              className={`px-2.5 py-1 rounded-full text-xs font-body font-semibold transition-all ${activeSubtype === null ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              All
            </button>
            {subtypes[activeFilter].map(sub => (
              <button key={sub}
                onClick={() => {
                  const next = activeSubtype === sub ? null : sub;
                  setActiveSubtype(next);
                  if (next) base44.analytics.track({ eventName: 'guides_subtype_filter_clicked', properties: { subtype: sub, category: activeFilter } });
                }}
                className={`px-2.5 py-1 rounded-full text-xs font-body font-semibold transition-all ${activeSubtype === sub ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {filteredGuides.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-display font-bold text-foreground">No guides found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGuides.map((guide, i) => (
              <GuideCard key={guide.id} guide={guide} index={i} onOpenLegend={() => setIsLegendOpen(true)} />
            ))}
          </div>
        )}
      </div>

      {isLegendOpen && (
        <div
          onMouseDown={() => setIsLegendOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            className="bg-card border border-border p-6 rounded-2xl max-w-2xl w-full shadow-2xl relative"
          >
            <h2 className="text-xl font-bold mb-4 font-display text-foreground">Care Difficulty Legend</h2>
            <DifficultyLegend />
            <button
              onClick={() => setIsLegendOpen(false)}
              className="mt-4 w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-display font-semibold transition-colors hover:opacity-90"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function GuideCard({ guide, index, onOpenLegend }) {
  const diffClass = difficultyColor[guide.difficulty] || 'text-muted-foreground bg-muted';
  const isBreedQuirk = guide.name.includes('Breed Quirks') || guide.name.includes(':');

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.03, 0.4) }} whileHover={{ y: -3 }}>
      <Link to={`/guides/${guide.id}/`} onClick={() => base44.analytics.track({ eventName: 'guide_card_clicked', properties: { guide_id: guide.id, guide_name: guide.name, pet_type: guide.petType, difficulty: guide.difficulty } })}>
        <div className="bg-card border border-border rounded-2xl p-5 hover:border-secondary/40 hover:shadow-md transition-all group h-full flex flex-col">
          {guide.image && (
            <div className="-mx-5 -mt-5 rounded-t-2xl overflow-hidden mb-4 aspect-video">
              <img src={guide.image} alt={guide.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
          )}
          <div className="flex items-start justify-between mb-3">
            <span className="text-3xl">{guide.emoji}</span>
            <div className="flex items-center gap-1.5 flex-wrap justify-end">
              {isBreedQuirk && <span className="text-xs font-display font-semibold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">Breed Quirks</span>}
              {guide.sizeCategory && guide.sizeCategory !== 'All Sizes' && (
                <span className="text-xs font-display font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{guide.sizeCategory}</span>
              )}
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpenLegend(); }}
                className={`text-xs font-display font-semibold px-2 py-0.5 rounded-full hover:opacity-80 transition-all ${diffClass}`}
              >
                {guide.difficulty}
              </button>
            </div>
          </div>
          <h3 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-secondary transition-colors">{guide.name}</h3>
          <p className="text-xs text-muted-foreground font-body mb-2">{guide.petType}</p>
          <p className="text-xs text-muted-foreground font-body leading-relaxed flex-1">{guide.tagline}</p>
          <div className="flex items-center gap-1 mt-4 text-xs font-display font-semibold text-secondary">
            View full guide <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
