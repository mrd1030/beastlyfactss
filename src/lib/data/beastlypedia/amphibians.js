// See ./reptiles.js for the documented Beastfile shape.
export const amphibianBeastfiles = [
  {
    id: 'glass-frog',
    name: 'Glass Frog',
    scientific: 'Centrolenidae',
    tagline: 'You can watch its heart beat through its own skin.',
    habitat: 'Rainforest',
    group: 'Amphibians',
    overview:
      'Glass frogs are small Central and South American tree frogs, usually lime green from above and almost transparent underneath. Turn one over and the abdominal skin shows the heart, liver and looping gut directly. The transparency is not a trick of the light: these frogs genuinely lack the pigment layer that makes most animals opaque on the belly. Research has shown the effect works as camouflage from below by softening the frog outline against a backlit leaf, rather than by making it invisible outright. Males of many species guard the eggs, which are laid on leaves overhanging water so the tadpoles drop straight in.',
    origin:
      'Humid montane and lowland rainforest from southern Mexico through Central America and into the Andes and Amazon basin.',
    notableTraits: [
      'Transparent abdominal skin showing heart, liver and gut',
      'Bones appear green in some species',
      'Eggs laid on leaves above water so tadpoles drop in on hatching',
      'Males of many species guard the clutch',
      'Rarely larger than three centimetres',
    ],
    conservation:
      'Varies sharply by species; several are threatened. Glass frogs depend on clean, fast streams and intact forest, which makes them sensitive to deforestation, water pollution and the amphibian chytrid fungus.',
    funFacts: [
      'While sleeping, some glass frogs move almost all their red blood cells into the liver, which makes them close to twice as transparent.',
      'The transparency works by blurring the frog outline against a lit leaf rather than by hiding it entirely.',
      'In some species even the bones carry a green tint.',
    ],
    heroImage: '/assets/beastlypedia/glass-frog-hero.jpg',
    heroAlt:
      'A glass frog on a backlit green leaf with its translucent underside showing internal organs',
    secondaryImage: '/assets/facts/glass-frog.jpg',
    secondaryAlt: 'A glass frog resting on a wet leaf, its translucent skin catching the light',
    relatedFiles: [],
  },
  {
    id: 'blue-poison-dart-frog',
    name: 'Blue Poison Dart Frog',
    scientific: 'Dendrobates tinctorius "azureus"',
    alsoKnownAs: ['Okopipi'],
    tagline: 'Bright enough to be a warning, and only toxic because of what it eats.',
    habitat: 'Rainforest',
    group: 'Amphibians',
    overview:
      'This is a small cobalt-blue frog, spotted with black, from a handful of forest islands in southern Suriname. The color is aposematic: it advertises toxicity rather than hiding it, and predators learn to leave it alone. The important detail is that the toxicity is borrowed. Poison dart frogs do not manufacture their alkaloid defenses from scratch; they sequester them from a diet of mites, ants and other small arthropods. Raised on captive-bred insects, they are effectively harmless, which is why frogs in collections carry no danger at all.',
    origin:
      'The Sipaliwini savannah of southern Suriname, in small patches of rainforest surrounded by open grassland, effectively isolated from one another.',
    notableTraits: [
      'Toxicity is acquired from wild prey, not produced by the frog',
      'Bright blue as a warning rather than camouflage',
      'Each individual carries a unique pattern of black spots',
      'Males carry tadpoles on their backs to water',
      'Active by day, unlike most frogs',
    ],
    conservation:
      'The wider species is not considered broadly threatened, but this blue form has a very small and fragmented range, which leaves it exposed to habitat change and collection.',
    funFacts: [
      'Captive-bred individuals are not poisonous, because they never eat the wild arthropods the toxins come from.',
      'The black spotting is individual, so a frog can be identified the way you would identify a person by fingerprints.',
      'Despite the family name, only a few species were ever used to tip blowdarts, and this is not one of them.',
    ],
    heroImage: '/assets/beastlypedia/blue-poison-dart-frog-hero.jpg',
    heroAlt:
      'A blue poison dart frog on a wet dark leaf, its cobalt skin marked with black spots',
    secondaryImage: '/assets/beastlypedia/blue-poison-dart-frog-secondary.jpg',
    secondaryAlt: 'Close view of a blue poison dart frog on a mossy stem, glossy skin and black spots',
    relatedFiles: [],
  },
  {
    id: 'axolotl',
    name: 'Axolotl',
    scientific: 'Ambystoma mexicanum',
    alsoKnownAs: ['Mexican Walking Fish'],
    tagline: 'A salamander that never grows up, and regrows almost anything.',
    habitat: 'Freshwater',
    group: 'Amphibians',
    overview:
      'The axolotl is a salamander that stays a larva for life. Most amphibians metamorphose, losing their gills and moving onto land; the axolotl keeps its feathery external gills, keeps its tail fin and simply breeds in the larval form, a condition called neoteny. It is also the most capable regenerator among vertebrates, rebuilding not just limbs but jaw, spinal cord and parts of the heart and brain, with little or no scarring. It is abundant in laboratories and home aquariums worldwide, and almost gone from the single wild place it comes from.',
    origin:
      'Endemic to the lake system of Xochimilco in Mexico City, now reduced to a network of canals and channels that is a fraction of the original wetland.',
    notableTraits: [
      'Stays in larval form for life, keeping external gills',
      'Regrows limbs, spinal cord, jaw and parts of the heart and brain',
      'Regenerates with little or no scar tissue',
      'Breathes through gills, skin and simple lungs',
      'Wild color is dark and mottled; the familiar pink is a captive variant',
    ],
    conservation:
      'Critically Endangered in the wild, with surveys finding very few remaining individuals, driven by urban expansion, water quality and introduced fish. The species is nonetheless extremely common in captivity, which makes its status easy to misread.',
    funFacts: [
      'The pale pink axolotl everyone recognizes is a captive-bred variant. Wild ones are dark, mottled and much harder to see.',
      'It can regrow the same limb repeatedly without the result degrading.',
      'Injected with the right hormone it can be forced to metamorphose into a land salamander, which does not happen naturally.',
    ],
    heroImage: '/assets/beastlypedia/axolotl-hero.jpg',
    heroAlt:
      'An axolotl in clear freshwater with its feathery external gills fanned out',
    secondaryImage: '/assets/facts/axolotl-2.jpg',
    secondaryAlt: 'An axolotl resting on a dark substrate, gills and permanent smile visible',
    encyclopediaId: 'axolotl',
    relatedFiles: ['the-incredible-axolotl-nature-s-smiling-salamander', '10-surprising-axolotl-facts'],
  },
];
