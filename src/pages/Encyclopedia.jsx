import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Info } from 'lucide-react';
import { encyclopediaAnimals, encyclopediaCategories, difficultyColor } from '@/lib/data/encyclopedia';
import { allGuides } from '@/lib/data/guides';
import { dogGuides } from '@/lib/data/guides/dogs';
import { catGuides } from '@/lib/data/guides/cats';
import { base44 } from '@/api/base44Client';
import { DifficultyLegend } from '@/components/shared/DifficultyLegend';

// Tabs
const TABS = [
  { id: 'encyclopedia', label: '📚 Encyclopedia' },
  { id: 'guides', label: '📖 Care Guides' },
];

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

export default function Encyclopedia() {
  const navigate = useNavigate();
  const location = useLocation();

  const { encCat, guideFilter } = useParams();
  const isGuidesPath = location.pathname.startsWith('/encyclopedia/guides');
  const initialTab = isGuidesPath ? 'guides' : 'encyclopedia';

  const resolveEncCat = (slug) => {
    if (!slug) return 'All';
    const found = encyclopediaCategories.find(c =>
      c.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === slug.toLowerCase()
    );
    return found ? found.name : 'All';
  };

  const resolveGuideFilter = (slug) => {
    if (!slug) return 'All';
    const found = guideFilters.find(f =>
      f.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/ /g, '-') === slug.toLowerCase()
    );
    return found ? found.label : 'All';
  };

  const [activeTab, setActiveTab] = useState(initialTab);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(() => resolveEncCat(encCat));
  const [activeFilter, setActiveFilter] = useState(() => resolveGuideFilter(guideFilter));
  const [dogSize, setDogSize] = useState('All Sizes');
  const [activeSubtype, setActiveSubtype] = useState(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  // Sync state when route params change (e.g. back/forward)
  useEffect(() => {
    setActiveTab(location.pathname.startsWith('/encyclopedia/guides') ? 'guides' : 'encyclopedia');
    setActiveCategory(resolveEncCat(encCat));
    setActiveFilter(resolveGuideFilter(guideFilter));
  }, [encCat, guideFilter, location.pathname]);

  // Keyboard listener to close popup modal on "Escape" keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLegendOpen(false);
      }
    };

    if (isLegendOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLegendOpen]);

  // Encyclopedia filtering
  const filteredEncyclopedia = useMemo(() => {
    return encyclopediaAnimals.filter(a => {
      const matchesCat = activeCategory === 'All' || a.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch = !q ||
        a.name.toLowerCase().includes(q) ||
        a.scientific.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const cats = activeCategory === 'All'
      ? encyclopediaCategories.map(c => c.name)
      : [activeCategory];
    return cats.map(cat => ({
      name: cat,
      emoji: encyclopediaCategories.find(c => c.name === cat)?.emoji || '🦎',
      animals: filteredEncyclopedia.filter(a => a.category === cat),
    })).filter(g => g.animals.length > 0);
  }, [filteredEncyclopedia, activeCategory]);

  // Guides filtering
  const filteredGuides = useMemo(() => {
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
      const byType = allGuides.filter(g => g.petType === activeFilter);
      if (activeSubtype) return byType.filter(g => g.name.includes(activeSubtype));
      return byType;
    }
    return allGuides;
  }, [activeFilter, dogSize, activeSubtype]);

  const isGuides = activeTab === 'guides';
  const encTitle = isGuides
    ? (activeFilter === 'All' ? 'Care Guides | Beastly Facts' : `${activeFilter} Care Guides | Beastly Facts`)
    : (activeCategory === 'All' ? 'Encyclopedia & Care Guides | Beastly Facts' : `${activeCategory} Care Guides & Facts | Beastly Facts`);
  const encDescription = isGuides
    ? (activeFilter !== 'All'
        ? `Explore all ${activeFilter} care guides on Beastly Facts — husbandry advice, feeding schedules, housing setups, and health tips for every keeper.`
        : 'Browse our complete library of reptile, bird, mammal, and exotic pet care guides on Beastly Facts. Evidence-based husbandry advice from experienced keepers.')
    : `Explore our detailed encyclopedia and care guides for ${activeCategory === 'All' ? 'all your pets' : activeCategory}. Everything you need to know about husbandry, health, and happiness.`;
  const encCanonical = `https://beastlyfacts.com${location.pathname.replace(/\/$/, '')}/`;
  const shouldNoindex = hasNoindexStateParams(location.search);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{encTitle}</title>
        <meta name="description" content={encDescription} />
        <link rel="canonical" href={encCanonical} />
        <meta name="robots" content={shouldNoindex ? 'noindex,follow' : 'index,follow'} />
        <meta property="og:title" content={encTitle} />
        <meta property="og:description" content={encDescription} />
        <meta property="og:url" content={encCanonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:alt" content="Beastly Facts — encyclopedia and care guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={encTitle} />
        <meta name="twitter:description" content={encDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Books">📚</span>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Encyclopedia & Care Guides
              </h1>
              {/* Interactive ! Circle Icon Button */}
              <button
                onClick={() => setIsLegendOpen(true)}
                title="View Care Difficulty Legend"
                className="p-1 rounded-full text-muted-foreground hover:text-secondary hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50"
              >
                <Info className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </motion.div>
          <div className="flex gap-2 mt-5 bg-muted/60 rounded-2xl p-1.5 max-w-sm">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.id === 'guides' ? '/encyclopedia/guides' : '/encyclopedia')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-display font-bold transition-all ${
                  activeTab === tab.id ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'encyclopedia' ? (
        <EncyclopediaTab
          search={search}
          setSearch={setSearch}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          grouped={grouped}
          navigate={navigate}
          onOpenLegend={() => setIsLegendOpen(true)}
        />
      ) : (
        <GuidesTab
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          dogSize={dogSize}
          setDogSize={setDogSize}
          activeSubtype={activeSubtype}
          setActiveSubtype={setActiveSubtype}
          filteredGuides={filteredGuides}
          onOpenLegend={() => setIsLegendOpen(true)}
          navigate={navigate}
        />
      )}

      {/* Difficulty Legend Popup Modal Overlay */}
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

function EncyclopediaTab({ search, setSearch, activeCategory, setActiveCategory, grouped, navigate, onOpenLegend }) {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        <div className="relative max-w-sm mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => { setActiveCategory('All'); navigate('/encyclopedia/'); }}
            className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
              activeCategory === 'All' ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            ✨ All
          </button>
          {encyclopediaCategories.map(cat => (
            <button
              key={cat.name}
              onClick={() => {
                const urlSlug = cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                navigate(`/encyclopedia/category/${urlSlug}`);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                activeCategory === cat.name ? 'bg-secondary text-secondary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {grouped.map((group) => (
          <motion.div key={group.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
              <span>{group.emoji}</span> {group.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {group.animals.map((animal) => (
                <AnimalRow key={animal.id} animal={animal} onOpenLegend={onOpenLegend} />
              ))}
            </div>
          </motion.div>
        ))}

        {grouped.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-display font-bold text-foreground">Nothing found</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Try a different search or category.</p>
          </div>
        )}
      </div>
    </div> 
  );
} 

function GuidesTab({ activeFilter, setActiveFilter, dogSize, setDogSize, activeSubtype, setActiveSubtype, filteredGuides, onOpenLegend, navigate }) {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-3">
          {guideFilters.map(f => (
            <button
              key={f.label}
              onClick={() => {
                const slug = f.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                navigate(f.label === 'All' ? '/encyclopedia/guides' : `/encyclopedia/guides/${slug}`);
                setDogSize('All Sizes'); setActiveSubtype(null);
                base44.analytics.track({ eventName: 'guides_category_filter_clicked', properties: { category: f.label } });
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1.5 ${
                activeFilter === f.label ? 'bg-accent text-accent-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{f.emoji}</span> {f.label}
            </button>
          ))}
        </div>

        {/* Dog size sub-filter */}
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

        {/* Subtype filter */}
        {activeFilter !== 'All' && subtypes[activeFilter] && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            <button onClick={() => setActiveSubtype(null)}
              className={`px-2.5 py-1 rounded-full text-xs font-body font-semibold transition-all ${activeSubtype === null ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              All
            </button>
            {subtypes[activeFilter].map(sub => (
              <button key={sub} onClick={() => { const next = activeSubtype === sub ? null : sub; setActiveSubtype(next); if (next) base44.analytics.track({ eventName: 'guides_subtype_filter_clicked', properties: { subtype: sub, category: activeFilter } }); }}
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
              <GuideCard key={guide.id} guide={guide} index={i} onOpenLegend={onOpenLegend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AnimalRow({ animal, onOpenLegend }) {
  const diffClass = difficultyColor[animal.difficulty] || 'text-muted-foreground bg-muted';

  if (animal.available && animal.guideId) {
    return (
      <Link to={`/guides/${animal.guideId}/`}>
        <motion.div whileHover={{ x: 3 }}
          className="flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3 hover:border-secondary/40 hover:shadow-sm transition-all group cursor-pointer">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xl flex-shrink-0">{animal.emoji}</span>
            <div className="min-w-0">
              <p className="font-display font-semibold text-sm text-foreground truncate">{animal.name}</p>
              <p className="text-xs text-muted-foreground font-body italic truncate">{animal.scientific}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpenLegend(); }}
              className={`text-xs font-display font-semibold px-2 py-0.5 rounded-full hover:opacity-80 transition-all ${diffClass}`}
            >
              {animal.difficulty}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-secondary transition-colors" />
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-between bg-card/50 border border-border/50 rounded-xl px-4 py-3 opacity-60">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-xl flex-shrink-0 grayscale">{animal.emoji}</span>
        <div className="min-w-0">
          <p className="font-display font-semibold text-sm text-foreground truncate">{animal.name}</p>
          <p className="text-xs text-muted-foreground font-body italic truncate">{animal.scientific}</p>
        </div>
      </div>
      <button 
        onClick={(e) => { e.preventDefault(); onOpenLegend(); }}
        className={`text-xs font-display font-semibold px-2 py-0.5 rounded-full hover:opacity-80 transition-all ${diffClass}`}
      >
        {animal.difficulty}
      </button>
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
              <img
                src={guide.image}
                alt={guide.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
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