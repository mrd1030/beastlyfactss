import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'general',
    label: 'General Husbandry',
    emoji: '🏠',
    terms: [
      { term: 'Husbandry', definition: 'The overall practice of caring for an animal: housing, diet, temperature, enrichment, and health monitoring, all together.' },
      { term: 'Enclosure', definition: 'The tank, terrarium, or cage an animal lives in.' },
      { term: 'Substrate', definition: 'The material lining the bottom of an enclosure — sand, soil, reptile carpet, paper towel, and so on.', related: [{ label: 'Bearded Dragon Care Guide', to: '/guides/bearded-dragon/' }] },
      { term: 'Thermal gradient', definition: 'A range of temperatures across an enclosure, from a warm basking side to a cooler side, so the animal can move around to self-regulate its body temperature.' },
      { term: 'Basking spot', definition: 'The warmest point in an enclosure, usually directly under a heat lamp, where an animal sits to raise its body temperature.', related: [{ label: 'Bearded Dragon Care Guide', to: '/guides/bearded-dragon/' }] },
      { term: 'Photoperiod', definition: 'The daily light/dark cycle an animal is exposed to. Matching natural day length affects appetite, behavior, and breeding cycles.' },
      { term: 'Bioactive setup', definition: 'An enclosure stocked with live plants and a "cleanup crew" of invertebrates (springtails, isopods) that break down waste naturally, cutting down on manual cleaning.' },
      { term: 'Cohabitation', definition: 'Housing more than one animal in the same enclosure. Often discouraged for solitary species, where it causes stress or fighting.' },
      { term: 'Morph', definition: 'A genetic color or pattern variation within a species — common talk in ball python and gecko keeping especially.' },
      { term: 'Hide', definition: 'A small enclosed space (cave, log, box) where an animal can retreat to feel secure. Used across nearly every reptile and small mammal setup.' },
    ],
  },
  {
    id: 'reptiles',
    label: 'Reptiles & Amphibians',
    emoji: '🦎',
    terms: [
      { term: 'Ectotherm', definition: 'An animal that relies on its environment, not its own metabolism, to regulate body temperature. This is the whole reason basking spots and heat lamps matter so much for reptiles.' },
      { term: 'UVB', definition: 'A type of ultraviolet light reptiles need to produce vitamin D3 and properly absorb calcium. Without it, even a perfect diet can still lead to bone disease.', related: [{ label: 'Bearded Dragon Care Guide', to: '/guides/bearded-dragon/' }] },
      { term: 'Gut-loading', definition: 'Feeding nutritious food to feeder insects (crickets, dubia roaches) 24–48 hours before they\'re fed to a pet, so the pet absorbs those nutrients secondhand.', related: [{ label: 'Bearded Dragon Care Guide', to: '/guides/bearded-dragon/' }] },
      { term: 'Dusting', definition: 'Coating feeder insects in calcium or vitamin powder right before feeding, as another route for supplementation.' },
      { term: 'Brumation', definition: 'A reptile\'s version of hibernation: a stretch of reduced activity, appetite, and metabolism triggered by shorter days and cooler temperatures.' },
      { term: 'Shedding (ecdysis)', definition: 'The process of periodically shedding an outer layer of skin as an animal grows.', related: [{ label: 'Bearded Dragon Care Guide', to: '/guides/bearded-dragon/' }] },
      { term: 'Neoteny', definition: 'When an animal keeps its juvenile features into adulthood instead of fully maturing — like axolotls, which keep their gills and "baby face" for life.', related: [{ label: '10 Surprising Axolotl Facts', to: '/blog/10-surprising-axolotl-facts/' }] },
      { term: 'Impaction', definition: 'A blockage in the digestive tract, often from ingesting loose substrate. A common and largely preventable reptile emergency.', related: [{ label: 'Bearded Dragon Care Guide', to: '/guides/bearded-dragon/' }] },
      { term: 'Metabolic Bone Disease (MBD)', definition: 'A serious but preventable condition from insufficient UVB or calcium, causing soft bones, tremors, and — if untreated — permanent deformities.', related: [{ label: 'Bearded Dragon Care Guide', to: '/guides/bearded-dragon/' }] },
      { term: 'Dimorphism', definition: 'Visible physical differences between males and females of the same species (size, color, or certain features).' },
    ],
  },
  {
    id: 'turtles',
    label: 'Turtles & Tortoises',
    emoji: '🐢',
    terms: [
      { term: 'Carapace', definition: 'The top half of a turtle or tortoise\'s shell.', related: [{ label: 'Box Turtle Care Guide', to: '/guides/box-turtle/' }] },
      { term: 'Plastron', definition: 'The bottom half of the shell, facing the ground or water below.', related: [{ label: 'Box Turtle Care Guide', to: '/guides/box-turtle/' }] },
      { term: 'Scute', definition: 'One of the individual plates that make up the outer layer of a shell, similar to how scales make up a snake\'s skin.', related: [{ label: 'Sulcata Tortoise Care Guide', to: '/guides/sulcata-tortoise/' }] },
      { term: 'Basking platform', definition: 'A dry area in or above an aquatic turtle\'s enclosure where it can climb out of the water to bask under heat and UVB. Essential for species like red-eared sliders, which need to fully dry off regularly to stay healthy.', related: [{ label: 'Red-Eared Slider Care Guide', to: '/guides/red-eared-slider/' }] },
      { term: 'Pyramiding', definition: 'An abnormal, pyramid-like growth pattern in a tortoise\'s shell scutes. Usually caused by too much protein, too little humidity, or inconsistent UVB during growth — and almost entirely preventable with correct husbandry.', related: [{ label: 'Sulcata Tortoise Care Guide', to: '/guides/sulcata-tortoise/' }] },
      { term: 'Cycling', definition: 'Building up a colony of beneficial bacteria in an aquatic enclosure\'s filter before adding an animal, so waste gets safely broken down instead of building up as toxic ammonia.', related: [{ label: 'Red-Eared Slider Care Guide', to: '/guides/red-eared-slider/' }] },
      { term: 'Graze', definition: 'The natural feeding style of tortoises like Russian and Sulcata tortoises, which eat low to the ground on grasses and weeds rather than hunting live prey.', related: [{ label: 'Russian Tortoise Care Guide', to: '/guides/russian-tortoise/' }] },
      { term: 'Outdoor enclosure', definition: 'A larger, weatherproofed outdoor housing setup that big tortoise species like Sulcatas typically graduate to as adults, since they outgrow any reasonable indoor tank.', related: [{ label: 'Sulcata Tortoise Care Guide', to: '/guides/sulcata-tortoise/' }] },
    ],
  },
  {
    id: 'health',
    label: 'Health & Medical',
    emoji: '🩺',
    terms: [
      { term: 'Quarantine', definition: 'Keeping a newly acquired animal separate from existing pets for a set period, to watch for illness or parasites before introducing them.' },
      { term: 'Fecal exam', definition: 'A vet test that checks a stool sample for parasites. Recommended annually even for animals that seem perfectly healthy.' },
      { term: 'Subclinical', definition: 'Describes an illness or parasite that\'s present in an animal without producing visible symptoms — the animal looks fine but is still affected.' },
    ],
  },
  {
    id: 'birds',
    label: 'Birds & Small Mammals',
    emoji: '🦜',
    terms: [
      { term: 'Cere', definition: 'The small patch of skin just above a bird\'s beak, often used to help determine sex in species like budgies.' },
      { term: 'Crop', definition: 'A pouch in a bird\'s throat used to store food before digestion.' },
      { term: 'Fledging', definition: 'The stage when a young bird grows its flight feathers and learns to fly, typically just before or as it leaves the nest.', related: [{ label: 'Cockatiel Care Guide', to: '/guides/cockatiel/' }] },
      { term: 'Feather molt', definition: 'The process of shedding and regrowing feathers. A stressful, nutrient-demanding period that calls for extra care and a slightly adjusted diet.', related: [{ label: 'African Grey Parrot Care Guide', to: '/guides/african-grey/' }] },
      { term: 'Flight feathers', definition: 'The long, primary feathers on a bird\'s wings that provide lift and steering during flight.' },
      { term: 'Wing clipping', definition: 'Trimming a pet bird\'s flight feathers to limit flight distance. A genuinely debated practice among bird keepers — worth understanding both sides before deciding.', related: [{ label: 'Budgie Care Guide', to: '/guides/budgie/' }] },
      { term: 'Preening', definition: 'A bird\'s grooming behavior: using its beak to clean, align, and waterproof its feathers.' },
      { term: 'Preen gland', definition: 'The gland near the base of a bird\'s tail (also called the uropygial gland) that produces the oil used during preening.' },
      { term: 'Flock animal', definition: 'Describes species like budgies and cockatiels that are highly social by nature in the wild, and can develop stress or behavioral issues if kept alone without enough daily interaction.', related: [{ label: 'Lovebird Care Guide', to: '/guides/lovebird/' }] },
      { term: 'Foraging', definition: 'A bird\'s natural food-searching behavior. Many enrichment toys are built to encourage foraging instead of simply offering food in an open dish, which keeps a bird mentally engaged.' },
      { term: 'Mimicry', definition: 'The ability of species like African Grey Parrots to copy sounds and human speech — closely tied to their intelligence and need for ongoing mental stimulation.', related: [{ label: 'African Grey Parrot Care Guide', to: '/guides/african-grey/' }] },
      { term: 'Dewlap', definition: 'Loose skin under the chin or neck, seen in some reptiles and a few mammals — sometimes involved in temperature regulation or display.' },
      { term: 'Self-sufficient', definition: 'BeastlyFacts\' shorthand for low-maintenance species, mostly invertebrates, that need minimal daily hands-on care once their setup is correctly built.' },
    ],
  },
  {
    id: 'dogs-cats',
    label: 'Dogs & Cats',
    emoji: '🐕',
    terms: [
      { term: 'Socialization', definition: 'Exposing a puppy or kitten to new people, animals, and environments during a critical early window, so they grow into a confident, well-adjusted adult.', related: [{ label: 'Labrador Retriever Care Guide', to: '/guides/dog-labrador/' }] },
      { term: 'Breed standard', definition: 'The official set of physical and temperament traits a kennel club defines for a breed, used in showing and breeding.' },
      { term: 'Spay / neuter', definition: 'Surgical sterilization: spay for females, neuter for males. Reduces certain health risks and unwanted litters.' },
      { term: 'Brachycephalic', definition: 'Having a short, flat skull shape, as seen in French Bulldogs and Persian cats. Comes with specific breathing and heat-tolerance considerations worth knowing before bringing one home.', related: [{ label: 'French Bulldog Care Guide', to: '/guides/dog-french-bulldog/' }] },
      { term: 'Double coat', definition: 'A coat with two layers: a soft insulating undercoat and a coarser top layer. Common in Siberian Huskies and Golden Retrievers, and the reason these breeds shed heavily during seasonal blowouts.', related: [{ label: 'Siberian Husky Care Guide', to: '/guides/dog-siberian-husky/' }] },
      { term: 'Working / herding breed', definition: 'A breed group originally developed for a job like herding livestock, as with Border Collies. Often means very high exercise and mental stimulation needs in a pet setting.', related: [{ label: 'Border Collie Care Guide', to: '/guides/dog-border-collie/' }] },
      { term: 'Recall', definition: 'A dog\'s trained response to return to its owner when called. One of the most foundational obedience behaviors to teach early.' },
      { term: 'Bunting', definition: 'When a cat rubs or headbutts a person or object with its forehead, depositing scent from glands there. A sign of trust and affection, not aggression.', related: [{ label: 'Domestic Shorthair Care Guide', to: '/guides/cat-domestic-shorthair/' }] },
      { term: 'Polydactyl', definition: 'Having extra toes — a genetic trait that shows up occasionally in certain cat lines, Maine Coons especially.', related: [{ label: 'Maine Coon Care Guide', to: '/guides/cat-maine-coon/' }] },
      { term: 'Litter box aversion', definition: 'When a cat starts avoiding its litter box. Usually points to a medical issue, stress, or dissatisfaction with the box or litter type itself rather than "bad behavior."' },
      { term: 'Resource guarding', definition: 'Defensive behavior (growling, snapping, blocking) around food, toys, or space, used to protect something the animal sees as valuable. Common in both dogs and cats and very manageable with the right approach.' },
    ],
  },
  {
    id: 'invertebrates',
    label: 'Invertebrates',
    emoji: '🕷️',
    terms: [
      { term: 'Exoskeleton', definition: 'The hard external shell that supports and protects an invertebrate\'s body, doing the job a vertebrate\'s internal skeleton does.', related: [{ label: 'Tarantula Care Guide', to: '/guides/tarantula/' }] },
      { term: 'Molting', definition: 'The process of shedding an old exoskeleton to grow a new, larger one underneath — since a hard shell can\'t stretch the way skin can.', related: [{ label: 'Emperor Scorpion Care Guide', to: '/guides/emperor-scorpion/' }] },
      { term: 'Instar', definition: 'A developmental stage between molts. An insect like a stick insect or praying mantis passes through several instars on its way to adulthood.', related: [{ label: 'Stick Insect Care Guide', to: '/guides/stick-insect/' }, { label: 'Praying Mantis Care Guide', to: '/guides/praying-mantis/' }] },
      { term: 'Ootheca', definition: 'The foam-like protective egg case a female praying mantis produces, usually stuck to a branch or enclosure wall.', related: [{ label: 'Praying Mantis Care Guide', to: '/guides/praying-mantis/' }] },
      { term: 'Urticating hairs', definition: 'Tiny barbed hairs that New World tarantulas (species from the Americas) can kick off their abdomen as a defense — mildly irritating to skin and eyes, which is why handling needs care.', related: [{ label: 'Tarantula Care Guide', to: '/guides/tarantula/' }] },
      { term: 'Pedipalps', definition: 'The small, leg-like appendages near a spider or scorpion\'s mouth, used for sensing food and surroundings.', related: [{ label: 'Emperor Scorpion Care Guide', to: '/guides/emperor-scorpion/' }] },
      { term: 'Hemolymph', definition: 'The fluid that circulates nutrients through an invertebrate\'s body — the rough equivalent of blood, though it doesn\'t carry oxygen the same way vertebrate blood does.' },
      { term: 'Communal setup', definition: 'Housing multiple invertebrates of the same species together. Works for some species (certain roaches, millipedes) but can turn deadly for solitary, cannibalistic ones like tarantulas.', related: [{ label: 'Hissing Cockroach Care Guide', to: '/guides/hissing-cockroach/' }, { label: 'Millipede Care Guide', to: '/guides/millipede/' }] },
      { term: 'Humidity gradient', definition: 'A range of moisture levels across an enclosure, letting an animal move to its preferred zone — the invertebrate and amphibian equivalent of a thermal gradient.', related: [{ label: 'Millipede Care Guide', to: '/guides/millipede/' }] },
      { term: 'Substrate depth', definition: 'How thick the substrate layer is in an enclosure. Burrowing species like emperor scorpions and many tarantulas need significantly deeper substrate than a non-burrowing species would.', related: [{ label: 'Emperor Scorpion Care Guide', to: '/guides/emperor-scorpion/' }] },
    ],
  },
];

const TOTAL_TERMS = CATEGORIES.reduce((sum, c) => sum + c.terms.length, 0);
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Letters that have at least one term — computed once at module level
const LETTERS_WITH_TERMS = new Set(
  CATEGORIES.flatMap(c => c.terms.map(t => t.term[0].toUpperCase()))
);

function TermCard({ term, showCategory, catEmoji, catLabel }) {
  return (
    <div className="border-b border-border pb-4 last:border-0">
      {showCategory && (
        <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">
          {catEmoji} {catLabel}
        </span>
      )}
      <h3 className="font-display font-bold text-base text-foreground mt-0.5">{term.term}</h3>
      <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">{term.definition}</p>
      {term.related && term.related.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {term.related.map(r => (
            <Link
              key={r.to}
              to={r.to}
              className="text-[11px] font-body text-primary/80 hover:text-primary border border-primary/20 hover:border-primary/40 rounded-full px-2.5 py-0.5 transition-colors"
            >
              {r.label} →
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Glossary() {
  const [query, setQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setQuery('');
    setActiveLetter(prev => prev === letter ? null : letter);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setActiveLetter(null);
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const results = [];
    for (const cat of CATEGORIES) {
      for (const term of cat.terms) {
        if (term.term.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q)) {
          results.push({ ...term, catEmoji: cat.emoji, catLabel: cat.label });
        }
      }
    }
    return results;
  }, [query]);

  const letterResults = useMemo(() => {
    if (!activeLetter) return null;
    const results = [];
    for (const cat of CATEGORIES) {
      for (const term of cat.terms) {
        if (term.term[0].toUpperCase() === activeLetter) {
          results.push({ ...term, catEmoji: cat.emoji, catLabel: cat.label });
        }
      }
    }
    return results;
  }, [activeLetter]);

  const activeResults = searchResults || letterResults;
  const isFiltered = activeResults !== null;

  const DESCRIPTION = `Plain-English glossary of ${TOTAL_TERMS}+ exotic pet and reptile care terms — from husbandry and UVB to molting, brumation, and beyond. Essential reading for new keepers.`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Reptile &amp; Exotic Pet Care Glossary | Beastly Facts</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/glossary/" />
        <meta property="og:title" content="Reptile & Exotic Pet Care Glossary | Beastly Facts" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/glossary/" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts Reptile & Exotic Pet Care Glossary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta name="twitter:title" content="Reptile & Exotic Pet Care Glossary | Beastly Facts" />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Open book">📖</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Reptile &amp; Exotic Pet Glossary
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-xl">
              Plain-English definitions for {TOTAL_TERMS}+ care terms — from husbandry basics to species-specific jargon.
              Every entry links back to the guide where it matters most.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">

        {/* A–Z letter filter */}
        <div
          className="flex gap-1 overflow-x-auto pb-1 mt-4 mb-4 scrollbar-hide"
          role="navigation"
          aria-label="Browse by letter"
        >
          {ALPHABET.map(letter => {
            const hasTerms = LETTERS_WITH_TERMS.has(letter);
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => hasTerms && handleLetterClick(letter)}
                aria-pressed={isActive}
                aria-disabled={!hasTerms}
                className={`flex-shrink-0 w-8 h-8 rounded-lg text-sm font-display font-bold transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : hasTerms
                      ? 'bg-muted text-foreground hover:bg-primary/10 hover:text-primary cursor-pointer'
                      : 'text-muted-foreground/25 cursor-default pointer-events-none'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search terms..."
            value={query}
            onChange={handleSearchChange}
            className="w-full pl-9 pr-9 py-3 rounded-xl border border-border bg-card text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category jump nav — only when not filtered */}
        {!isFiltered && (
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs font-body font-medium px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {cat.emoji} {cat.label}
              </a>
            ))}
          </div>
        )}

        {/* Filtered results (letter or search) */}
        {isFiltered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={activeLetter || query}>
            {activeResults.length === 0 ? (
              <p className="text-sm text-muted-foreground font-body text-center py-16">
                {activeLetter
                  ? `No terms starting with "${activeLetter}".`
                  : `No terms matching “${query}” — try a shorter word.`}
              </p>
            ) : (
              <>
                <p className="text-xs text-muted-foreground font-body mb-4">
                  {activeLetter
                    ? `${activeResults.length} term${activeResults.length !== 1 ? 's' : ''} starting with "${activeLetter}"`
                    : `${activeResults.length} result${activeResults.length !== 1 ? 's' : ''}`}
                </p>
                <div className="space-y-4">
                  {activeResults.map(t => (
                    <TermCard key={t.term} term={t} showCategory catEmoji={t.catEmoji} catLabel={t.catLabel} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* All categories — only when not filtered */}
        {!isFiltered && CATEGORIES.map((cat, i) => (
          <motion.section
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="mb-12 scroll-mt-20"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-5 flex items-center gap-2">
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.label}
            </h2>
            <div className="space-y-4">
              {cat.terms.map(term => (
                <TermCard key={term.term} term={term} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
