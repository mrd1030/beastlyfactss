// A second, finer tag for articles: the topic inside their category. Only the
// Wild Animals category uses topics so far; each is a filtered view at
// /blog/category/wild-animals/<topic>/, prerendered but noindex with its
// canonical on the category page, so the category page stays the indexed one.
// Plain data (no icons) so prerender.mjs can import it; Blog.jsx adds icons.
// The same field can later carry pet topics for an animal-plus-topic filter.
// Every Wild Animals article must have one, or it drops out of every filter.

export const WILD_TOPICS = [
  { slug: 'wild-abilities', label: 'Wild abilities' },
  { slug: 'myths-busted', label: 'Myths busted' },
  { slug: 'conservation', label: 'Conservation' },
  { slug: 'animal-days', label: 'Animal days' },
  { slug: 'spotlights', label: 'Spotlights' },
];

export const ARTICLE_TOPIC = {
  // Wild abilities: how a body or a behavior actually works.
  'a-rhino-horn-is-made-of-keratin': 'wild-abilities',
  'constriction-does-not-crush-or-suffocate': 'wild-abilities',
  'crocodiles-survived-what-killed-the-dinosaurs': 'wild-abilities',
  'crows-are-smarter-than-you-think-and-they-probably-already-know-it': 'wild-abilities',
  'dung-beetles-navigate-by-the-milky-way': 'wild-abilities',
  'elephants-talk-below-human-hearing': 'wild-abilities',
  'gaboon-viper-longest-fangs-any-snake': 'wild-abilities',
  'hagfish-slime-how-it-works': 'wild-abilities',
  'how-a-glass-frog-hides-its-own-blood': 'wild-abilities',
  'immortal-jellyfish-turritopsis-dohrnii-explained': 'wild-abilities',
  'mantis-shrimp-16-color-vision-punch-power': 'wild-abilities',
  'naked-mole-rat-breaks-the-rules-for-mammals': 'wild-abilities',
  'seahorse-male-pregnancy-how-it-works': 'wild-abilities',
  'slow-loris-the-only-venomous-primate': 'wild-abilities',
  'tardigrades-the-toughest-creatures-on-earth-and-in-space': 'wild-abilities',
  'the-octopus-has-three-hearts-and-uses-all-of-them': 'wild-abilities',
  'why-a-sloth-climbs-down-to-defecate': 'wild-abilities',
  'why-wombats-produce-cube-shaped-droppings': 'wild-abilities',
  'wood-frog-freezes-solid-and-survives': 'wild-abilities',

  // Myths busted: a common belief, checked against the research.
  'alpha-wolf-myth-what-the-research-actually-says': 'myths-busted',
  'argentine-tegus-are-not-venomous': 'myths-busted',
  'chameleons-do-not-change-color-to-match-their-background': 'myths-busted',
  'do-dolphins-have-names-what-the-research-shows': 'myths-busted',
  'giraffe-heart-myth-what-the-research-shows': 'myths-busted',
  'how-dangerous-are-sharks-really': 'myths-busted',
  'penguins-do-not-mate-for-life': 'myths-busted',
  'what-finding-nemo-got-wrong-about-clownfish': 'myths-busted',

  // Conservation: numbers, threats and what a species does for its habitat.
  'every-wild-tiger-would-fit-in-a-small-town': 'conservation',
  'pangolins-the-most-trafficked-mammal-nobody-knows': 'conservation',
  'sea-otters-salt-marsh-erosion-elkhorn-slough': 'conservation',

  // Animal days: the awareness days and where they came from.
  'international-sloth-day': 'animal-days',
  'international-wombat-day': 'animal-days',
  'reptile-awareness-day': 'animal-days',
  'world-animal-day': 'animal-days',
  'world-octopus-day': 'animal-days',

  // Spotlights: one animal, the whole picture.
  'honey-badgers-the-toughest-little-troublemakers-on-the-planet': 'spotlights',
  'lions-are-the-only-social-cat': 'spotlights',
  'the-platypus-natures-most-wonderfully-bizarre-mammal': 'spotlights',
  'shima-enaga-japans-snow-fairy-bird': 'spotlights',
  'wolverine-facts-the-toughest-animal-pound-for-pound': 'spotlights',
  'ultimate-birdwatching-guide-best-places-times-tips-2026': 'spotlights',
};
