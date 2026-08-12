// See ./reptiles.js for the documented Beastfile shape.
export const birdBeastfiles = [
  {
    id: 'shoebill',
    name: 'Shoebill',
    scientific: 'Balaeniceps rex',
    alsoKnownAs: ['Whalehead', 'Shoebill Stork'],
    tagline: 'A metre-tall bird that hunts by standing perfectly still for hours.',
    habitat: 'Wetlands',
    group: 'Birds',
    overview:
      'The shoebill is a very large grey wading bird of central African swamps, and the bill is the point: a huge clog-shaped structure with a hooked tip and sharp edges, capable of taking lungfish, catfish, water snakes and even young crocodiles. Its hunting style is patience taken to an extreme. It stands motionless over floating vegetation, sometimes for hours, then collapses forward in a single violent lunge that scoops fish and water together, and it discards the vegetation before swallowing. Despite the common name it is not closely related to storks; it sits nearer pelicans.',
    origin:
      'Freshwater swamps and papyrus marshes in eastern tropical Africa, notably South Sudan, Uganda, Zambia and parts of the Congo basin.',
    notableTraits: [
      'A broad shoe-shaped bill with hooked tip and cutting edges',
      'Hunts by standing motionless, sometimes for hours',
      'Takes large prey including lungfish and young crocodiles',
      'Stands up to around 1.4 metres tall',
      'Clatters its bill loudly as a display, like a machine gun',
    ],
    conservation:
      'Vulnerable, with a small and declining population. The main pressures are drainage and conversion of swamp habitat, disturbance at nests, and capture for the international bird trade.',
    funFacts: [
      'Its main display is a rapid bill clattering that sounds mechanical rather than birdlike.',
      'It usually raises only one chick, even when two hatch.',
      'Its unblinking stare is largely down to how slowly it moves; the stillness is the hunting strategy.',
    ],
    heroImage: '/assets/beastlypedia/shoebill-hero.jpg',
    heroAlt:
      'A shoebill standing among African wetland reeds with its enormous shoe-shaped bill in profile',
    secondaryImage: '/assets/facts/shoebill.jpg',
    secondaryAlt: 'Close view of a shoebill showing the hooked tip of its huge bill and pale eye',
    relatedFiles: [],
  },
  {
    id: 'victoria-crowned-pigeon',
    name: 'Victoria Crowned Pigeon',
    scientific: 'Goura victoria',
    tagline: 'A turkey-sized pigeon wearing a crown of lace.',
    habitat: 'Rainforest',
    group: 'Birds',
    overview:
      'This is the largest pigeon in the world, blue-grey and roughly the size of a turkey, with a maroon breast, a deep red eye and an upright fan of lacy, white-tipped crest feathers. It spends most of its time walking the forest floor of New Guinea, foraging for fallen fruit, seeds and small invertebrates, and flies up into trees mainly to roost or escape. Pairs are long-lasting and both parents share incubation. Like all pigeons it feeds its chick on crop milk, a protein-rich secretion produced in the crop rather than any kind of true milk.',
    origin:
      'Lowland and swamp forest of northern New Guinea and nearby islands, mostly on the ground below closed canopy.',
    notableTraits: [
      'The largest pigeon species in the world',
      'A fan-shaped crest of lacy white-tipped feathers',
      'Spends most of its life walking the forest floor',
      'Feeds its chick on crop milk, as all pigeons do',
      'Loud wing claps used in display',
    ],
    conservation:
      'Near Threatened and declining, hunted for meat and for its plumes, and losing lowland forest to logging. Its habit of feeding on the ground in the open makes it easy to hunt.',
    funFacts: [
      'Both parents produce crop milk, so a male pigeon can feed a chick as well as a female.',
      'The crest is not a crown of stiff spikes; each feather ends in a small white lace-like tip.',
      'It is one of only a handful of pigeon species large enough to be mistaken for a game bird.',
    ],
    heroImage: '/assets/beastlypedia/victoria-crowned-pigeon-hero.jpg',
    heroAlt:
      'A Victoria crowned pigeon walking on a rainforest floor showing its blue-grey plumage and lacy crest',
    secondaryImage: '/assets/beastlypedia/victoria-crowned-pigeon-secondary.jpg',
    secondaryAlt:
      'Close portrait of a Victoria crowned pigeon showing its lace-tipped crest and red eye',
    relatedFiles: [],
  },
  {
    id: 'emperor-penguin',
    factAnimal: 'Penguin',
    name: 'Emperor Penguin',
    scientific: 'Aptenodytes forsteri',
    tagline: 'Penguins do not mate for life, and the huddle is a moving machine.',
    habitat: 'Arctic',
    group: 'Birds',
    overview:
      'Emperor penguins breed through the Antarctic winter, on sea ice, in the dark, which is a set of conditions nothing else attempts. The male incubates a single egg on his feet under a fold of skin for around two months without eating, losing a large fraction of his body weight while the female is at sea feeding. The huddle they form is not a static scrum: it moves in slow waves as birds on the windward edge shuffle toward the middle, so exposure gets shared out. The lifelong-devotion story is the one thing here that is not true. Most pairs re-pair with someone else the following season.',
    origin:
      'Antarctic coastal sea ice, breeding in colonies on fast ice attached to the continent and feeding in the surrounding Southern Ocean.',
    notableTraits: [
      'Breeds through the Antarctic winter on sea ice',
      'The male incubates the egg on his feet for around two months',
      'Huddles rotate so exposure is shared',
      'Dives deeper than any other bird',
      'Most pairs change partners between seasons',
    ],
    conservation:
      'Near Threatened and directly exposed to sea ice loss. The species breeds on fast ice, so ice that forms late or breaks up early can wipe out a colony’s entire season.',
    funFacts: [
      'Mating for life is largely a myth here; the great majority of pairs re-pair the next season.',
      'The huddle moves in slow waves, so no bird stays on the cold edge for long.',
      'Males can lose close to half their body weight over the incubation fast.',
    ],
    heroImage: '/assets/beastlypedia/emperor-penguin-hero.jpg',
    heroAlt:
      'An emperor penguin standing on Antarctic sea ice in low light, its orange ear patches and pale bill visible',
    secondaryImage: '/assets/facts/penguin-2.jpg',
    secondaryAlt: 'An emperor penguin in profile on ice',
    relatedFiles: ['penguins-do-not-mate-for-life'],
  },
  {
    id: 'crow',
    name: 'Crow',
    scientific: 'Corvus',
    alsoKnownAs: ['Carrion Crow', 'American Crow'],
    tagline: 'It remembers your face, holds a grudge, and tells other crows about you.',
    habitat: 'Forest',
    group: 'Birds',
    overview:
      'Crows recognise individual human faces and remember them for years. In the experiments that established this, researchers wearing a particular mask trapped and released crows; birds later scolded that mask on sight, including birds that had never been caught, which means the information spread socially. They make and modify tools, solve multi-step puzzles that require doing something useless-looking first, and drop hard-shelled food onto roads for cars to crack. Several species gather around a dead crow in a way that looks ceremonial and appears to be about learning what killed it.',
    origin:
      'Almost everywhere. Forest, farmland, coast and city across Europe, Asia, Africa, the Americas and Australia, with cities suiting them particularly well.',
    notableTraits: [
      'Recognises and remembers individual human faces',
      'Passes information about specific people to other crows',
      'Makes and modifies tools',
      'Solves puzzles requiring several steps in order',
      'Gathers around dead crows, apparently to learn the danger',
    ],
    conservation:
      'Least Concern for most species and increasing in many places. Crows adapt to human landscapes better than almost any other bird, which is why they are one of very few animals doing well out of urbanisation.',
    funFacts: [
      'Crows that were never trapped will still scold the mask, so the grudge is being passed on.',
      'Some have been recorded dropping nuts onto pedestrian crossings and waiting for the lights.',
      'New Caledonian crows make hooked tools from twigs, shaping them rather than just picking them up.',
    ],
    heroImage: '/assets/beastlypedia/crow-hero.jpg',
    heroAlt:
      'A crow perched on a bare branch against an overcast sky, its glossy black plumage and heavy bill visible',
    secondaryImage: '/assets/facts/crow.jpg',
    secondaryAlt: 'A crow in profile showing its glossy black feathers and thick bill',
    relatedFiles: ['crows-are-smarter-than-you-think-and-they-probably-already-know-it'],
  },
  {
    id: 'shima-enaga',
    name: 'Shima Enaga',
    scientific: 'Aegithalos caudatus japonicus',
    alsoKnownAs: ['Snow Fairy', 'Japanese Long-tailed Tit', 'Shimaenaga'],
    tagline: 'A wild bird so round and white it gets mistaken for a plush toy.',
    habitat: 'Woodland',
    group: 'Birds',
    overview:
      "The shima enaga is a subspecies of long-tailed tit found only on Hokkaido, Japan's northernmost main island, where it has picked up the nickname \"snow fairy.\" Adults lose the dark eye markings that juveniles and mainland Japanese long-tailed tits both have, ending up with a completely white face, and in cold weather they fluff their feathers for insulation until the whole body reads as a round white puff with a long black-and-white tail stuck on the back. The bird is barely bigger than a ping pong ball with feathers, roughly 14cm long including a tail that makes up close to half of that. The name enaga comes from hishaku, the long-handled ladle its silhouette is said to resemble.",
    origin:
      "Exclusively the island of Hokkaido, in deciduous and mixed woodland. It doesn't occur naturally anywhere else, mainland Japan's long-tailed tit subspecies keep the dark eye-stripe this one lacks.",
    notableTraits: [
      'Adults have a completely white face, unlike other long-tailed tit subspecies',
      'Fluffs into a round shape in cold weather for insulation, not just for looks',
      'Roughly 14cm long, and close to half of that is tail',
      'Found only on Hokkaido, nowhere else in the wild',
      'Travels in family flocks of half a dozen or more outside breeding season',
    ],
    conservation:
      "Not separately assessed, but the parent species, the long-tailed tit, is IUCN Least Concern with a large, stable range across Europe and Asia. The Hokkaido population isn't considered at risk.",
    funFacts: [
      'Its diet is almost entirely insects and their eggs and larvae, especially moth and butterfly eggs, even in the depths of a Hokkaido winter.',
      'Long-tailed tits build an enclosed, elastic nest from moss and lichen bound with spider silk, which lets the whole structure stretch as the chicks inside grow.',
      'That same nest gets lined with well over a thousand small feathers for insulation, more feathers than the bird itself will ever wear at once.',
    ],
    heroImage: '/assets/beastlypedia/shima-enaga-hero.jpg',
    heroAlt: 'A shima enaga with a completely white face perched on a bare branch, its round fluffed body and long black-and-white tail visible',
    secondaryImage: '/assets/facts/shima-enaga.jpg',
    secondaryAlt: 'A shima enaga perched among bare winter twigs, showing its white face and dark wing markings',
    relatedFiles: ['shima-enaga-japans-snow-fairy-bird'],
  },
];
