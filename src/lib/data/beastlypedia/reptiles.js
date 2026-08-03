// Beastfile shape, documented once here since every group file follows it.
//
// Required:
//   id              slug, lowercase and hyphenated, drives /beastlypedia/<id>/
//   name            common name
//   scientific      binomial, rendered in italics
//   tagline         one line, used in the card and the meta description
//   habitat         single label from HABITATS in ./index.js
//   group           one of beastfileGroups
//   overview        3-5 sentences
//   origin          where it is found
//   notableTraits   3-5 short strings
//   conservation    IUCN status plus a sentence of context
//   funFacts        2-4 strings
//   heroImage       landscape preferred; ALWAYS a new image, never a fact photo
//   heroAlt         descriptive alt text
//   secondaryImage  portrait preferred; may reuse an existing /assets/facts photo
//   secondaryAlt    descriptive alt text
//
// Optional:
//   alsoKnownAs     array of alternative common names
//   relatedFiles    article slugs, resolved against mdx-meta at render time
//   encyclopediaId  cross-link to a pet-care Encyclopedia entry where one exists
//
// On images: hero is landscape by preference and secondary is portrait, but
// neither is enforced - the layout handles either. The hard rule is that the
// hero must be its own image. Reusing a fact photo there would put the same
// picture on the card, the profile and the fact feed.
export const reptileBeastfiles = [
  {
    id: 'thorny-devil',
    name: 'Thorny Devil',
    scientific: 'Moloch horridus',
    alsoKnownAs: ['Mountain Devil', 'Thorny Dragon', 'Moloch'],
    tagline: 'A desert lizard that drinks through its skin.',
    habitat: 'Desert',
    group: 'Reptiles',
    overview:
      'The thorny devil is a small lizard of the Australian arid zone, rarely longer than 20 centimetres and covered in conical spines that make it awkward to swallow. It eats almost nothing but ants, taking them one at a time at a rate of a few thousand a day. Its most remarkable trick is not the armour but the plumbing: a network of channels between its scales draws water across the body and into the corners of its mouth by capillary action alone. Standing on damp sand is enough to drink. It moves in a slow, rocking shuffle that reads less like a lizard walking than a leaf caught in a breeze.',
    origin:
      'Endemic to the arid and semi-arid interior of Australia, across Western Australia, the Northern Territory, South Australia and western Queensland.',
    notableTraits: [
      'Skin channels move water to the mouth by capillary action',
      'Eats ants almost exclusively, thousands per day',
      'A false head on the back of the neck to present to predators',
      'Changes colour with temperature, paler when hot',
      'Rocking gait that disguises its outline as it moves',
    ],
    conservation:
      'Least Concern. The species is widespread across a vast and largely undeveloped range, though it depends on healthy ant populations and is vulnerable to habitat change at the edges of its distribution.',
    funFacts: [
      'It can draw water from wet sand without ever lowering its head to drink.',
      'The spiny lump behind its head is a decoy: it tucks the real head down and offers the false one instead.',
      'Despite the name and the armour, it is entirely harmless and has no venom.',
    ],
    heroImage: '/assets/beastlypedia/thorny-devil-hero.jpg',
    heroAlt:
      'A thorny devil lizard walking across red desert sand, its conical spines catching the low sunlight',
    secondaryImage: '/assets/facts/thorny-devil.jpg',
    secondaryAlt:
      'Close view of a thorny devil showing the spines along its back and the false head behind its neck',
    relatedFiles: [],
  },
  {
    id: 'panther-chameleon',
    // The fact database has generic 'Chameleon' entries rather than
    // species-level ones. They are biologically true of panther chameleons, so
    // linking them is deliberate, but note the fact pages say Chameleon.
    factAnimal: 'Chameleon',
    name: 'Panther Chameleon',
    scientific: 'Furcifer pardalis',
    tagline: 'Colour that signals mood, not background, in a different palette per valley.',
    habitat: 'Rainforest',
    group: 'Reptiles',
    overview:
      'The panther chameleon is the one people picture when they picture a chameleon: a stocky Madagascan lizard in bands of turquoise, red and green, with independently swivelling turret eyes and a tongue it fires at prey. The colour change is widely misunderstood. It is not camouflage matching a background. Chameleons shift colour mainly to signal mood, temperature and readiness to breed, and they do it by rearranging nanocrystals in a layer of skin cells to change which wavelengths reflect, rather than by shuffling pigment. Males from different parts of Madagascar carry strikingly different colour schemes, known as locales.',
    origin:
      'Endemic to northern and eastern Madagascar, in coastal lowland forest, scrub and edge habitat, including trees around cultivated land.',
    notableTraits: [
      'Colour signals mood and temperature, not background matching',
      'Changes colour by tuning nanocrystals in the skin, not by moving pigment',
      'Eyes rotate independently for near-360 degree vision',
      'A projectile tongue that can exceed its own body length',
      'Distinct regional colour forms, called locales',
    ],
    conservation:
      'Least Concern, and unusually adaptable for a Madagascan reptile: it tolerates disturbed and edge habitat well. It is collected for the international pet trade, which is regulated by export quota.',
    funFacts: [
      'Males from different valleys look so different that keepers name them by locale, like Ambilobe or Nosy Be.',
      'Each eye moves on its own, so it can watch two directions at once and then converge both on a target.',
      'Females are far smaller and mostly stay a muted brown or peach, turning dark with bright bars only when carrying eggs.',
    ],
    heroImage: '/assets/beastlypedia/panther-chameleon-hero.jpg',
    heroAlt:
      'A male panther chameleon gripping a branch in Madagascan foliage, banded in turquoise and red',
    secondaryImage: '/assets/beastlypedia/panther-chameleon-secondary.jpg',
    secondaryAlt:
      'Close view of a panther chameleon showing its turret eye and the ridge along its head',
    relatedFiles: [],
  },
  {
    id: 'gaboon-viper',
    name: 'Gaboon Viper',
    scientific: 'Bitis gabonica',
    alsoKnownAs: ['Gaboon Adder'],
    tagline: 'The longest fangs of any snake, on an animal you will walk straight past.',
    habitat: 'Rainforest',
    group: 'Reptiles',
    overview:
      'The Gaboon viper is a heavy, slow African snake that has invested everything in not being seen and then in one decisive strike. Its geometric pattern of browns, purples and creams dissolves completely into rainforest leaf litter, and it will lie motionless for days waiting for prey to walk within reach. It has the longest fangs of any snake, around five centimetres, and delivers a large volume of venom. Despite that, it is famously unaggressive: it rarely strikes at people and often gives no warning simply because it does not move at all.',
    origin:
      'Rainforest and adjacent woodland across West, Central and East Africa, in leaf litter on the forest floor.',
    notableTraits: [
      'The longest fangs of any snake, roughly five centimetres',
      'Leaf-litter camouflage that works even in the open',
      'Ambushes by lying still for days at a time',
      'A very broad, flat, triangular head with small nasal horns',
      'Among the heaviest-bodied vipers in the world',
    ],
    conservation:
      'Least Concern, with a wide range, though it is affected by rainforest clearance and is killed on sight in some areas.',
    funFacts: [
      'It holds on after biting rather than striking and releasing, which is unusual for a viper.',
      'Its camouflage is so effective that the main danger to people is stepping on one that was in plain view.',
      'It moves in a straight line, caterpillar-style, rather than the side-to-side motion of most snakes.',
    ],
    heroImage: '/assets/beastlypedia/gaboon-viper-hero.jpg',
    heroAlt:
      'A Gaboon viper resting in rainforest leaf litter, its geometric pattern blending into dead leaves',
    secondaryImage: '/assets/beastlypedia/gaboon-viper-secondary.jpg',
    secondaryAlt:
      'Head-on view of a Gaboon viper showing its broad triangular head and small nasal horns',
    relatedFiles: [],
  },
  {
    id: 'green-anaconda',
    name: 'Green Anaconda',
    scientific: 'Eunectes murinus',
    alsoKnownAs: ['Water Boa'],
    tagline: 'The heaviest snake alive, and almost helpless out of water.',
    habitat: 'Wetlands',
    group: 'Reptiles',
    overview:
      'The green anaconda is the heaviest snake in the world. Reticulated pythons grow longer, but an anaconda is built thicker and can pass 100 kilograms. It is a water animal: eyes and nostrils sit on top of the head so it can lie submerged with almost nothing showing, and its bulk that seems ungainly on land becomes easy movement once it is floating. It kills by constriction, tightening with each exhalation of its prey until circulation fails. Females are substantially larger than males, which is the reverse of most snakes.',
    origin:
      'Tropical South America east of the Andes, especially the Amazon and Orinoco basins and the seasonally flooded grasslands of the Llanos and Pantanal.',
    notableTraits: [
      'The heaviest snake in the world, though not the longest',
      'Eyes and nostrils on top of the head for lying submerged',
      'Kills by constriction, tightening as prey exhales',
      'Females are far larger than males',
      'Gives birth to live young rather than laying eggs',
    ],
    conservation:
      'Not assessed as globally threatened, but the species is hunted for its skin and killed out of fear, and it depends on wetland systems that are being drained and converted.',
    funFacts: [
      'It gives birth to live young, sometimes dozens at a time, rather than laying eggs.',
      'Constriction does not crush bones; it raises internal pressure until blood cannot circulate.',
      'On land its weight makes it slow and awkward, which is why it rarely strays far from water.',
    ],
    heroImage: '/assets/beastlypedia/green-anaconda-hero.jpg',
    heroAlt:
      'A green anaconda partly submerged at the edge of a tropical river with only its head above water',
    secondaryImage: '/assets/beastlypedia/green-anaconda-secondary.jpg',
    secondaryAlt:
      'A green anaconda coiled among wetland vegetation showing its olive skin and black oval blotches',
    relatedFiles: [],
  },
];
