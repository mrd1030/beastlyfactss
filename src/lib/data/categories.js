export const CATEGORIES = [
  { slug: 'amphibians', label: 'Amphibians', emoji: '🐸', description: 'Frogs, axolotls, salamanders and other amphibian care guides.' },
  { slug: 'aquatic-life', label: 'Aquatic Life', emoji: '🐟', description: 'Fish, turtles, axolotls and underwater habitat guides.' },
  { slug: 'birds', label: 'Birds', emoji: '🦜', description: 'Parrots, budgies, cockatiels and all feathered friends.' },
  { slug: 'cats', label: 'Cats', emoji: '🐱', description: 'Cat care, health, breeds, and everything feline.' },
  { slug: 'dogs', label: 'Dogs', emoji: '🐶', description: 'Dog care, training, breed guides, and more.' },
  { slug: 'fun-facts', label: 'Fun Facts', emoji: '🤩', description: 'Wild, weird, and wonderful animal facts.' },
  { slug: 'invertebrates', label: 'Invertebrates', emoji: '🕷️', description: 'Tarantulas, mantises, snails, and exotic inverts.' },
  { slug: 'pet-care', label: 'Pet Care', emoji: '🩺', description: 'General pet health, nutrition, and husbandry tips.' },
  { slug: 'product-picks', label: 'Product Picks', emoji: '🛒', description: 'Gear and product recommendations for pet owners.' },
  { slug: 'reptiles', label: 'Reptiles', emoji: '🦎', description: 'Snakes, geckos, bearded dragons and all reptile guides.' },
  { slug: 'small-and-exotic-pets', label: 'Small & Exotic Pets', emoji: '🦔', description: 'Hedgehogs, rabbits, ferrets, sugar gliders and more.' },
  { slug: 'wild-animals', label: 'Wild Animals', emoji: '🦁', description: 'Wildlife, conservation, and wild animal facts.' },
];

export const getCategoryBySlug = (slug) => CATEGORIES.find(c => c.slug === slug);