import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { hasNoindexStateParams } from '@/lib/seo/queryRobots';
import { useLocation, useParams, Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { Info, Search } from 'lucide-react';
import { allGuides } from '@/lib/data/guides';
import { guideCategoryDescription } from '@/lib/seo/categoryDescriptions';
import { dogGuides } from '@/lib/data/guides/dogs';
import { catGuides } from '@/lib/data/guides/cats';
import { difficultyColor } from '@/lib/data/encyclopedia';
import BrowseRow from '@/components/shared/BrowseRow';
import { groupGuides } from '@/lib/data/guideGroups';
import { DifficultyLegend } from '@/components/shared/DifficultyLegend';
import { trackEvent } from '@/lib/analytics';

const guideFilters = [
  { label: 'All', emoji: '🐾' },
  { label: 'Amphibians', emoji: '🐸' },
  { label: 'Birds', emoji: '🐦' },
  { label: 'Cats', emoji: '🐱' },
  { label: 'Dogs', emoji: '🐶' },
  { label: 'Fish', emoji: '🐠' },
  { label: 'Geckos', emoji: '🦎' },
  { label: 'Invertebrates', emoji: '🕷️' },
  { label: 'Lizards', emoji: '🦎' },
  { label: 'Small Mammals', emoji: '🦔' },
  { label: 'Snakes', emoji: '🐍' },
  { label: 'Turtles & Tortoises', emoji: '🐢' },
];

const directMatchCategories = new Set(['Geckos', 'Lizards', 'Snakes', 'Turtles & Tortoises', 'Small Mammals', 'Birds', 'Invertebrates', 'Amphibians', 'Fish']);

const dogSizes = ['All Sizes', 'Small', 'Medium', 'Large'];

const toSlug = (label) => label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

const subtypes = {
  Geckos: ['African Fat-Tailed Gecko', 'Crested Gecko', 'Gargoyle Gecko', 'Leaf-Tailed Gecko', 'Leopard Gecko', 'Mourning Gecko', 'Tokay Gecko'],
  Lizards: ['Ackie Monitor', 'Argentine Black and White Tegu', 'Bearded Dragon', 'Blue Tongue Skink', 'Green Anole', "Jackson's Chameleon", 'Savannah Monitor', 'Uromastyx', 'Veiled Chameleon'],
  Snakes: ['Ball Python', 'Boa Constrictor', 'California Kingsnake', 'Corn Snake', 'Hognose Snake', 'Milk Snake'],
  'Turtles & Tortoises': ['Box Turtle', 'Red-Eared Slider', 'Russian Tortoise', 'Sulcata Tortoise'],
  'Small Mammals': ['Chinchilla', 'Ferret', 'Guinea Pig', 'Hedgehog', 'Rabbit', 'Sugar Glider'],
  Birds: ['African Grey Parrot', 'Budgie / Parakeet', 'Canary', 'Cockatiel', 'Cockatoo', 'Green Cheek Conure', 'Lovebird'],
  Dogs: ['Labrador Retriever', 'Golden Retriever', 'German Shepherd', 'French Bulldog', 'Border Collie', 'Siberian Husky'],
  Cats: ['Domestic Shorthair', 'Maine Coon', 'Siamese', 'Ragdoll', 'Bengal', 'Persian'],
  Invertebrates: ['Emperor Scorpion', 'Giant African Millipede', 'Hermit Crab', 'Jumping Spider', 'Madagascar Hissing Cockroach', 'Praying Mantis', 'Stick Insect', 'Tarantula'],
  Amphibians: ['Axolotl', 'Fire-Bellied Toad', 'Pacman Frog', 'Tiger Salamander', "White's Tree Frog"],
  Fish: ['Angelfish', 'Betta Fish', 'Corydoras Catfish', 'Goldfish', 'Guppy', 'Koi', 'Neon Tetra', 'Oscar'],
};

const resolveFilter = (slug) => {
  if (!slug) return 'All';
  return guideFilters.find(f => toSlug(f.label) === slug.toLowerCase())?.label ?? 'All';
};

export default function Guides() {
  const location = useLocation();
  const { category } = useParams();

  const [activeFilter, setActiveFilter] = useState(() => resolveFilter(category));
  const [dogSize, setDogSize] = useState('All Sizes');
  const [activeSubtype, setActiveSubtype] = useState(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [search, setSearch] = useState('');

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
    let base;
    if (activeFilter === 'All') {
      base = allGuides;
    } else if (activeFilter === 'Dogs') {
      const sized = dogGuides.filter(g => dogSize === 'All Sizes' || g.sizeCategory === dogSize || g.sizeCategory === 'All Sizes');
      base = activeSubtype ? sized.filter(g => g.name.includes(activeSubtype)) : sized;
    } else if (activeFilter === 'Cats') {
      base = activeSubtype ? catGuides.filter(g => g.name.includes(activeSubtype)) : catGuides;
    } else if (directMatchCategories.has(activeFilter)) {
      const byType = allGuides.filter(g => g.petType === activeFilter);
      base = activeSubtype ? byType.filter(g => g.name.includes(activeSubtype)) : byType;
    } else {
      base = allGuides;
    }

    const q = search.trim().toLowerCase();
    if (!q) return base;
    return base.filter(g => g.name.toLowerCase().includes(q) || g.petType.toLowerCase().includes(q));
  }, [activeFilter, dogSize, activeSubtype, search]);

  // The rows carry no picture big enough to signal what a guide is about, so
  // the headings are what break the list up. See guideGroups.js.
  const groupedGuides = useMemo(() => groupGuides(filteredGuides), [filteredGuides]);

  const pageTitle = activeFilter === 'All'
    ? 'Care Guides | Beastly Facts'
    : `${activeFilter} Care Guides | Beastly Facts`;

  // The visible H1 carries the category too. It used to read "Care Guides" on
  // all 11 category pages while the title tag above already named the category,
  // so a reader landing on /guides/category/dogs/ got a heading that could have
  // belonged to any of them, and the 11 pages shared one H1. "for <Category>"
  // rather than "<Category> Care Guides" because the filter labels are plurals
  // and read wrong in front of a noun ("Dogs Care Guides", "Fish Care Guides").
  const pageHeading = activeFilter === 'All'
    ? 'Care Guides'
    : `Care Guides for ${activeFilter}`;

  // One description per category, naming the species that category actually
  // holds. See src/lib/seo/categoryDescriptions.js for why.
  const pageDescription = activeFilter !== 'All'
    ? guideCategoryDescription(activeFilter)
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
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - exotic pet care guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Open book">📖</span>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                {pageHeading}
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
          <div className="flex gap-2 mt-5 bg-muted/60 border border-border rounded-2xl p-1.5 max-w-sm">
            {[
              { id: 'encyclopedia', label: '📚 Encyclopedia' },
              { id: 'guides', label: '📖 Care Guides' },
            ].map(tab => {
              const destination = tab.id === 'encyclopedia'
                ? (activeFilter === 'All' ? '/encyclopedia/' : `/encyclopedia/category/${toSlug(activeFilter)}/`)
                : '/guides/';

              return (
                <Link
                  key={tab.id}
                  to={destination}
                  state={{ returnTo: destination }}
                  className={`flex-1 py-2 px-3 rounded-xl text-center text-xs font-body font-bold transition-all ${
                    tab.id === 'guides' ? 'bg-card border border-border shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

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
        <div className="flex flex-wrap items-center gap-y-2 mb-3 text-xs font-body">
          {guideFilters.map((f, i) => {
            const slug = f.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
            return (
              <React.Fragment key={f.label}>
                {i > 0 && <span className="text-muted-foreground/40 mx-2.5" aria-hidden="true">&middot;</span>}
                <Link
                  to={f.label === 'All' ? '/guides/' : `/guides/category/${slug}/`}
                  onClick={() => {
                    setDogSize('All Sizes');
                    setActiveSubtype(null);
                    trackEvent('guides_category_filter_clicked', { category: f.label });
                  }}
                  className={`inline-flex items-center gap-1.5 pb-1 border-b-2 whitespace-nowrap transition-colors ${
                    activeFilter === f.label
                      ? 'border-secondary text-foreground font-semibold'
                      : 'border-transparent text-muted-foreground font-medium hover:text-foreground'
                  }`}
                >
                  <span>{f.emoji}</span>{` ${f.label}`}
                </Link>
              </React.Fragment>
            );
          })}
        </div>

        {activeFilter === 'Dogs' && (
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs font-body text-muted-foreground self-center pr-1">Size:</span>
            {dogSizes.map(s => (
              <button key={s} onClick={() => { setDogSize(s); setActiveSubtype(null); }}
                className={`px-3 py-1 rounded-full text-xs font-body font-semibold transition-all ${dogSize === s ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
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
                  if (next) trackEvent('guides_subtype_filter_clicked', { subtype: sub, category: activeFilter });
                }}
                className={`px-2.5 py-1 rounded-full text-xs font-body font-semibold transition-all ${activeSubtype === sub ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {groupedGuides.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-body font-bold text-foreground">No guides found</p>
          </div>
        ) : (
          groupedGuides.map((group) => (
            <motion.div key={group.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                <span>{group.emoji}</span>{` ${group.name}`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {group.guides.map((guide) => (
                  <BrowseRow
                    key={guide.id}
                    to={`/guides/${guide.id}/`}
                    name={guide.name}
                    subtitle={guide.tagline}
                    image={guide.image}
                    emoji={guide.emoji}
                    difficulty={guide.difficulty}
                    difficultyClass={difficultyColor[guide.difficulty]}
                    onOpenLegend={() => setIsLegendOpen(true)}
                    returnTo={activeFilter === 'All' ? '/guides/' : `/guides/category/${toSlug(activeFilter)}/`}
                  />
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {isLegendOpen && (
        <div
          onMouseDown={() => setIsLegendOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            className="bg-card border border-border p-6 rounded-2xl max-w-2xl w-full shadow-2xl relative landscape:max-h-[85dvh] landscape:overflow-y-auto"
          >
            <h2 className="text-xl font-bold mb-4 font-display text-foreground">Care Difficulty Legend</h2>
            <DifficultyLegend />
            <button
              onClick={() => setIsLegendOpen(false)}
              className="mt-4 w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-body font-semibold transition-colors hover:opacity-90"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

