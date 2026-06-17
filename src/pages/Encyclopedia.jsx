import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import { encyclopediaAnimals, encyclopediaCategories, difficultyColor, DifficultyLegend } from '@/lib/data/encyclopedia';
import { guidesExtended } from '@/lib/data/guidesExtended';
import { dogGuides, catGuides } from '@/lib/data/dogCatGuides';
import { base44 } from '@/api/base44Client';

// --- SEO HOOKS ---
function useDocumentTitle(title) { useEffect(() => { document.title = title; }, [title]); }
function useMetaDescription(description) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [description]);
}

const allGuides = [...guidesExtended, ...dogGuides, ...catGuides];
const TABS = [{ id: 'encyclopedia', label: '📚 Encyclopedia' }, { id: 'guides', label: '📖 Care Guides' }];
const guideFilters = [
  { label: 'All', emoji: '🐾' }, { label: 'Geckos', emoji: '🦎' }, { label: 'Lizards', emoji: '🦎' },
  { label: 'Snakes', emoji: '🐍' }, { label: 'Turtles & Tortoises', emoji: '🐢' },
  { label: 'Small Mammals', emoji: '🦔' }, { label: 'Birds', emoji: '🐦' },
  { label: 'Dogs', emoji: '🐶' }, { label: 'Cats', emoji: '🐱' },
  { label: 'Invertebrates', emoji: '🕷️' }, { label: 'Amphibians', emoji: '🐸' },
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
  const [activeTab, setActiveTab] = useState('encyclopedia');
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All');
  const [dogSize, setDogSize] = useState('All Sizes');
  const [activeSubtype, setActiveSubtype] = useState(null);

  const filteredEncyclopedia = useMemo(() => {
    return encyclopediaAnimals.filter(a => {
      const matchesCat = activeCategory === 'All' || a.category === activeCategory;
      const q = search.toLowerCase();
      return matchesCat && (!q || a.name.toLowerCase().includes(q) || a.scientific.toLowerCase().includes(q) || a.category.toLowerCase().includes(q));
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const cats = activeCategory === 'All' ? encyclopediaCategories.map(c => c.name) : [activeCategory];
    return cats.map(cat => ({
      name: cat,
      emoji: encyclopediaCategories.find(c => c.name === cat)?.emoji || '🦎',
      animals: filteredEncyclopedia.filter(a => a.category === cat),
    })).filter(g => g.animals.length > 0);
  }, [filteredEncyclopedia, activeCategory]);

  const filteredGuides = useMemo(() => {
    if (activeFilter === 'All') return allGuides;
    if (activeFilter === 'Dogs') {
      const sized = dogGuides.filter(g => dogSize === 'All Sizes' || g.sizeCategory === dogSize);
      return activeSubtype ? sized.filter(g => g.name.includes(activeSubtype)) : sized;
    }
    if (activeFilter === 'Cats' && activeSubtype) return catGuides.filter(g => g.name.includes(activeSubtype));
    if (directMatchCategories.has(activeFilter)) {
      const byType = guidesExtended.filter(g => g.petType === activeFilter);
      return activeSubtype ? byType.filter(g => g.name.includes(activeSubtype)) : byType;
    }
    return allGuides;
  }, [activeFilter, dogSize, activeSubtype]);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground">Encyclopedia & Care Guides</h1>
          <div className="flex gap-2 mt-5 bg-muted/60 rounded-2xl p-1.5 max-w-sm">
            {TABS.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 py-2 px-3 rounded-xl text-xs font-display font-bold ${activeTab === tab.id ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'encyclopedia' ? (
        <EncyclopediaTab search={search} setSearch={setSearch} activeCategory={activeCategory} setActiveCategory={setActiveCategory} grouped={grouped} navigate={navigate} onOpenLegend={() => setIsLegendOpen(true)} />
      ) : (
        <GuidesTab activeFilter={activeFilter} setActiveFilter={setActiveFilter} dogSize={dogSize} setDogSize={setDogSize} activeSubtype={activeSubtype} setActiveSubtype={setActiveSubtype} filteredGuides={filteredGuides} onOpenLegend={() => setIsLegendOpen(true)} />
      )}

      {isLegendOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card p-6 rounded-2xl max-w-2xl w-full border border-border shadow-2xl">
            <h2 className="text-xl font-bold mb-4 font-display">Care Difficulty Legend</h2>
            <DifficultyLegend />
            <button onClick={() => setIsLegendOpen(false)} className="mt-6 w-full bg-secondary text-secondary-foreground py-2.5 rounded-xl font-bold text-sm">Close</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function EncyclopediaTab({ search, setSearch, activeCategory, setActiveCategory, grouped, navigate, onOpenLegend }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-card border border-border rounded-xl px-4 py-2.5 mb-6 text-sm" />
      {grouped.map((group) => (
        <div key={group.name} className="mb-10">
          <h2 className="font-bold text-lg mb-3">{group.emoji} {group.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {group.animals.map((animal) => <AnimalRow key={animal.id} animal={animal} onOpenLegend={onOpenLegend} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function GuidesTab({ activeFilter, setActiveFilter, dogSize, setDogSize, activeSubtype, setActiveSubtype, filteredGuides, onOpenLegend }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGuides.map((guide, i) => <GuideCard key={guide.id} guide={guide} index={i} onOpenLegend={onOpenLegend} />)}
      </div>
    </div>
  );
}

function AnimalRow({ animal, onOpenLegend }) {
  const diffClass = difficultyColor[animal.difficulty] || 'bg-muted';
  return (
    <div className="flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3">
      <span className="text-xl">{animal.emoji} {animal.name}</span>
      <button onClick={(e) => { e.preventDefault(); onOpenLegend(); }} className={`text-xs px-2 py-0.5 rounded-full ${diffClass}`}>{animal.difficulty}</button>
    </div>
  );
}

function GuideCard({ guide, index, onOpenLegend }) {
  const diffClass = difficultyColor[guide.difficulty] || 'bg-muted';
  return (
    <div className="bg-card border border-border rounded-2xl p-5 h-full">
      <div className="flex justify-between mb-3">
        <span className="text-3xl">{guide.emoji}</span>
        <button onClick={(e) => { e.preventDefault(); onOpenLegend(); }} className={`text-xs px-2 py-0.5 rounded-full ${diffClass}`}>{guide.difficulty}</button>
      </div>
      <h3 className="font-bold">{guide.name}</h3>
      <p className="text-sm text-muted-foreground">{guide.tagline}</p>
    </div>
  );
}
