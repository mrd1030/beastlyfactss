// See ./reptiles.js for the documented Beastfile shape.
export const mammalBeastfiles = [
  {
    id: 'pangolin',
    name: 'Pangolin',
    scientific: 'Pholidota',
    alsoKnownAs: ['Scaly Anteater'],
    tagline: 'The only mammal covered in scales, and the most trafficked one on Earth.',
    habitat: 'Forest',
    group: 'Mammals',
    overview:
      'A pangolin is a mammal wearing armour made of the same protein as your fingernails. Its overlapping keratin scales cover everything but the face and belly, and when threatened it rolls into a ball so tight that big cats generally give up. It has no teeth at all. Instead it tears open ant and termite nests with heavy front claws and collects insects on a tongue that, in the largest species, is longer than its own body and anchors near the pelvis rather than in the mouth. Eight species survive, four in Africa and four in Asia.',
    origin:
      'Sub-Saharan Africa and across South and Southeast Asia, from savannah and open woodland to tropical forest, with some species largely arboreal and others burrowing.',
    notableTraits: [
      'The only mammals with true keratin scales',
      'Rolls into a sphere so tight most predators cannot open it',
      'A tongue longer than its body, anchored near the pelvis',
      'No teeth; swallows small stones that grind food in the stomach',
      'Closes its nostrils and ears while feeding to keep ants out',
    ],
    conservation:
      'All eight species are threatened, several critically. Pangolins are widely described as the most trafficked wild mammal in the world, taken for their scales and meat, and international commercial trade has been banned under CITES since 2017.',
    funFacts: [
      'The scales are keratin, the same material as human fingernails and rhino horn, and have no proven medicinal value.',
      'It has no teeth, so it swallows small stones that grind the insects up inside a muscular stomach.',
      'While feeding it can close its nostrils and ears, sealing itself against the ants it is eating.',
    ],
    heroImage: '/assets/beastlypedia/pangolin-hero.jpg',
    heroAlt:
      'A pangolin walking across dry ground at dusk, its overlapping keratin scales catching the low light',
    secondaryImage: '/assets/facts/pangolin-3.jpg',
    secondaryAlt: 'A pangolin with its scaled tail curled beside its body',
    relatedFiles: ['pangolins-the-most-trafficked-mammal-nobody-knows'],
  },
  {
    id: 'fennec-fox',
    name: 'Fennec Fox',
    scientific: 'Vulpes zerda',
    tagline: 'The smallest fox alive, built almost entirely around its ears.',
    habitat: 'Desert',
    group: 'Mammals',
    overview:
      'The fennec is the smallest fox in the world, usually well under two kilograms, and it carries ears that would look excessive on an animal five times the size. Those ears are not mainly for hearing, though the hearing is excellent. They are radiators: a large surface area threaded with blood vessels that sheds heat into the air, which is how a small mammal survives a Saharan afternoon. It spends the heat of the day underground in burrows dug into sand, emerges at night, and can go long stretches without drinking, taking most of its water from food.',
    origin:
      'The Sahara and the arid belt across North Africa, east into the Sinai and Arabian deserts, in sandy country stable enough to hold a burrow.',
    notableTraits: [
      'Ears up to around 15 centimetres, used to shed body heat',
      'Thick fur on the soles of the feet for walking on hot sand',
      'Can survive long periods without drinking free water',
      'Nocturnal, sheltering in sand burrows through the day',
      'Unusually social for a fox, living in small family groups',
    ],
    conservation:
      'Least Concern. The population is not considered broadly threatened, though the species is trapped for the exotic pet trade and for sale to tourists in parts of its range.',
    funFacts: [
      'Its ears are the largest of any canid relative to body size, at close to a third of its body length.',
      'The soles of its feet are furred, which insulates against hot sand and improves grip on loose dunes.',
      'An adult typically weighs less than a domestic cat.',
    ],
    heroImage: '/assets/beastlypedia/fennec-fox-hero.jpg',
    heroAlt:
      'A fennec fox on pale desert sand at golden hour with its enormous ears held upright',
    secondaryImage: '/assets/beastlypedia/fennec-fox-secondary.jpg',
    secondaryAlt: 'Close portrait of a fennec fox, its oversized ears dominating the frame',
    relatedFiles: [],
  },
  {
    id: 'capybara',
    name: 'Capybara',
    scientific: 'Hydrochoerus hydrochaeris',
    alsoKnownAs: ['Carpincho', 'Water Hog'],
    tagline: 'The largest rodent on Earth, and improbably calm about everything.',
    habitat: 'Wetlands',
    group: 'Mammals',
    overview:
      'A capybara is a rodent the size of a large dog, reaching around 50 kilograms, and it is built for water. Its eyes, ears and nostrils sit high on the head so it can stay almost entirely submerged while still watching and breathing, and its feet are partly webbed. It grazes on grasses and aquatic plants, lives in groups that can swell to dozens around good water in the dry season, and answers danger by heading straight for the river. Its famous tolerance of other animals is real enough that photographs of birds, monkeys and turtles perched on capybaras are unremarkable in its range.',
    origin:
      'Across most of South America east of the Andes, in wetlands, flooded grassland, marshes and the margins of rivers and lakes.',
    notableTraits: [
      'The largest living rodent, up to roughly 50 kilograms',
      'Eyes, ears and nostrils set high for staying submerged',
      'Partially webbed feet and a strong swimmer',
      'Can stay underwater for several minutes to avoid predators',
      'Lives in groups, sometimes very large ones in the dry season',
    ],
    conservation:
      'Least Concern. Populations are stable across a wide range, though capybaras are hunted locally for meat and hide and are affected by wetland drainage.',
    funFacts: [
      'It can sleep in water, keeping only its nose above the surface.',
      'Its teeth never stop growing, so constant grazing on tough grasses keeps them worn down.',
      'Other species routinely rest on top of capybaras, which is why they turn up in so many unlikely photographs.',
    ],
    heroImage: '/assets/beastlypedia/capybara-hero.jpg',
    heroAlt: 'A capybara at the edge of a river in soft morning light with reeds behind it',
    secondaryImage: '/assets/facts/capybara-2.jpg',
    secondaryAlt: 'A capybara at the water margin, its blunt muzzle and small ears clearly visible',
    relatedFiles: [],
  },
  {
    id: 'narwhal',
    name: 'Narwhal',
    scientific: 'Monodon monoceros',
    alsoKnownAs: ['Unicorn of the Sea'],
    tagline: 'An Arctic whale whose tusk is really a tooth grown through its lip.',
    habitat: 'Arctic',
    group: 'Mammals',
    overview:
      'The narwhal is a medium-sized whale of the high Arctic, and the tusk is the thing everyone knows about it. It is not a horn: it is a canine tooth, almost always the left one, that grows straight through the upper lip and can pass three metres. It spirals, always counter-clockwise. Mostly males carry one. The tusk is dense with nerve endings, which has led to the idea that it works as a sensor sampling the water, though narwhals have also been filmed using it to stun fish. They dive extremely deep beneath sea ice and spend their entire lives in Arctic water.',
    origin:
      'The Arctic waters of Canada, Greenland, Norway and Russia, following seasonal sea ice and wintering in deep, densely iced offshore areas.',
    notableTraits: [
      'The tusk is an elongated left canine tooth, not a horn',
      'It always spirals counter-clockwise',
      'Dives beyond 1,500 metres, among the deepest of any marine mammal',
      'Has no dorsal fin, which suits life under sea ice',
      'The tusk carries millions of nerve connections to its surface',
    ],
    conservation:
      'Least Concern overall, but narwhals are unusually exposed to a warming Arctic: they are tied to sea ice, they use a small number of wintering areas, and they are highly sensitive to underwater noise as shipping routes open.',
    funFacts: [
      'A very small number of narwhals grow two tusks.',
      'It has no dorsal fin, most likely because one would be a liability under a ceiling of ice.',
      'Medieval traders sold narwhal tusks as unicorn horn, at prices that could exceed their weight in gold.',
    ],
    heroImage: '/assets/beastlypedia/narwhal-hero.jpg',
    heroAlt:
      'A narwhal at the surface among Arctic sea ice with its long spiral tusk clear of the water',
    secondaryImage: '/assets/facts/narwhal-2.jpg',
    secondaryAlt: 'A narwhal breaking the surface in cold Arctic water, mottled grey skin visible',
    relatedFiles: ['narwhal-facts-the-real-unicorn-of-the-sea'],
  },
  {
    id: 'aye-aye',
    name: 'Aye-Aye',
    scientific: 'Daubentonia madagascariensis',
    tagline: 'A nocturnal lemur that hunts grubs by tapping on wood and listening.',
    habitat: 'Rainforest',
    group: 'Mammals',
    overview:
      'The aye-aye is the largest nocturnal primate and one of the stranger animals in Madagascar, which is a competitive field. It finds food by percussive foraging: it taps a branch with a long thin middle finger, listens with oversized ears for the hollow sound of a tunnel underneath, gnaws through the wood with rodent-like incisors that never stop growing, and hooks the grub out with that same finger. No other primate does this. The combination of teeth, ears and a skeletal probing finger has no close parallel in the group, and for a long time the aye-aye was misclassified as a rodent.',
    origin:
      'Endemic to Madagascar, in rainforest, dry forest and coastal forest, and increasingly in cultivated land near what woodland remains.',
    notableTraits: [
      'Locates grubs by tapping wood and listening for hollows',
      'A skeletal middle finger with a ball-and-socket joint for extracting them',
      'Continuously growing incisors, unusual for a primate',
      'The largest nocturnal primate in the world',
      'Enormous ears tuned to faint sounds inside timber',
    ],
    conservation:
      'Endangered. Habitat loss is the main pressure, compounded in some communities by a superstition treating the animal as an omen of misfortune, which leads to aye-ayes being killed on sight.',
    funFacts: [
      'It fills the ecological role woodpeckers occupy elsewhere. Madagascar has no woodpeckers.',
      'The middle finger has a ball-and-socket joint, so it rotates almost freely while probing.',
      'Its incisors grow continuously, which is why early naturalists filed it among the rodents.',
    ],
    // Pending: the first hero was rejected in review for an anatomically wrong
    // extra finger. Renders the "image pending" block until replaced.
    heroImage: null,
    heroAlt: 'An aye-aye clinging to a branch at night, its huge orange eyes reflecting the light',
    secondaryImage: '/assets/facts/aye-aye.jpg',
    secondaryAlt: 'An aye-aye in darkness showing its large bare ears and coarse black fur',
    relatedFiles: [],
  },
];
