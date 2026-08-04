// `to` overrides the default /blog/category/<slug>/ destination.
//
// Three of these categories no longer have a listing page of their own: the
// route only exists in public/_redirects to 301 somewhere better. Without an
// override, every link the site draws from this list points at a redirect,
// which wastes a hop for a reader and is an audit finding for a crawler.
// Whoever adds one of these next: check _redirects before trusting the slug.
export const CATEGORIES = [
  { slug: 'amphibians', label: 'Amphibians', emoji: '🐸', description: 'Frogs, axolotls, salamanders and other amphibian care guides.' },
  // Sanity still has a handful of posts tagged with this category directly (independent
  // of the MDX taxonomy) - keep it listed until those posts are retagged to "Fish" in
  // Sanity Studio, or this becomes an orphaned pill with real content nobody can browse to.
  { slug: 'aquatic-life', label: 'Aquatic Life', emoji: '🐟', description: 'General aquatic and underwater habitat content.' },
  { slug: 'birds', label: 'Birds', emoji: '🦜', description: 'Parrots, budgies, cockatiels and all feathered friends.' },
  { slug: 'cats', label: 'Cats', emoji: '🐱', description: 'Cat care, health, breeds, and everything feline.' },
  { slug: 'comparisons', label: 'Comparisons', emoji: '🆚', description: 'Head-to-head species comparisons to help you pick the right pet.' },
  { slug: 'dogs', label: 'Dogs', emoji: '🐶', description: 'Dog care, training, breed guides, and more.' },
  { slug: 'fish', label: 'Fish', emoji: '🐠', description: 'Betta, goldfish, guppies, koi, tetras and other fish and aquarium care guides.' },
  { slug: 'fun-facts', label: 'Fun Facts', emoji: '🤩', to: '/fact-files/', description: 'Wild, weird, and wonderful animal facts.' },
  { slug: 'invertebrates', label: 'Invertebrates', emoji: '🕷️', description: 'Tarantulas, mantises, snails, and exotic inverts.' },
  { slug: 'legal', label: 'Legal', emoji: '⚖️', description: 'State-by-state legality and permit guides for exotic pets.' },
  { slug: 'pet-care', label: 'Pet Care', emoji: '🩺', description: 'General pet health, nutrition, and husbandry tips.' },
  { slug: 'product-picks', label: 'Product Picks', emoji: '🛒', to: '/gear/', description: 'Gear and product recommendations for pet owners.' },
  { slug: 'reptiles', label: 'Reptiles', emoji: '🦎', description: 'Snakes, geckos, bearded dragons and all reptile guides.' },
  { slug: 'roundups', label: 'Roundups', emoji: '🧭', description: 'Multi-pet roundups comparing care needs and commitments side by side.' },
  { slug: 'short-stories', label: 'Short Stories', emoji: '📖', to: '/chronicles/dex/', description: 'The chronicles of Dex, Otis, and friends - pet fiction with heart.' },
  { slug: 'small-and-exotic-pets', label: 'Small & Exotic Pets', emoji: '🦔', description: 'Hedgehogs, rabbits, ferrets, sugar gliders and more.' },
  { slug: 'turtles-and-tortoises', label: 'Turtles & Tortoises', emoji: '🐢', description: 'Red-eared sliders, sulcata tortoises, and other shelled-reptile care guides.' },
  { slug: 'wild-animals', label: 'Wild Animals', emoji: '🦁', description: 'Wildlife, conservation, and wild animal facts.' },
];

export const getCategoryBySlug = (slug) => CATEGORIES.find(c => c.slug === slug);