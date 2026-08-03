// See ./reptiles.js for the documented Beastfile shape.
export const marineBeastfiles = [
  {
    id: 'manta-ray',
    // facts.js files these under the full common name.
    factAnimal: 'Giant Manta Ray',
    name: 'Giant Manta Ray',
    scientific: 'Mobula birostris',
    alsoKnownAs: ['Oceanic Manta', 'Devil Ray'],
    tagline: 'Seven metres across, filter-feeding, and one of the few fish to pass a mirror test.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'The giant manta is the largest ray in the world, reaching around seven metres across the wings, and it eats some of the smallest food in the ocean. It swims with its mouth open, funnelling plankton in with a pair of forward-curling cephalic fins and straining it through gill plates. Despite the old name devil ray it has no sting and poses no danger to people. Mantas have the largest brain relative to body size of any fish, and one study reported behavior consistent with self-recognition in a mirror, which is rare outside a small set of mammals and birds.',
    origin:
      'Tropical, subtropical and warm temperate waters worldwide, mostly offshore and oceanic, gathering at coastal cleaning stations and seasonal feeding grounds.',
    notableTraits: [
      'Wingspan up to about seven metres',
      'Filter-feeds on plankton using cephalic fins and gill plates',
      'The largest brain-to-body ratio of any fish',
      'Has no sting, unlike stingrays',
      'Individually identifiable by the spot pattern on its belly',
    ],
    conservation:
      'Endangered. Mantas are slow to reproduce, often bearing a single pup at long intervals, so populations recover badly from bycatch and from targeted fishing for their gill plates.',
    funFacts: [
      'Every manta has a unique belly spot pattern, so researchers identify individuals by photograph.',
      'It visits cleaning stations on reefs and queues there while small fish pick parasites off its skin.',
      'It breaches clear of the water, and nobody is certain why.',
    ],
    heroImage: '/assets/beastlypedia/manta-ray-hero.jpg',
    heroAlt:
      'A giant manta ray gliding through open blue water seen from below with sunlight above',
    secondaryImage: '/assets/facts/giant-manta-ray.jpg',
    secondaryAlt: 'A giant manta ray swimming with its cephalic fins rolled and mouth closed',
    relatedFiles: [],
  },
  {
    id: 'leafy-sea-dragon',
    name: 'Leafy Sea Dragon',
    scientific: 'Phycodurus eques',
    alsoKnownAs: ['Leafy Seadragon', 'Glauert’s Seadragon'],
    tagline: 'A relative of the seahorse pretending, very convincingly, to be seaweed.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'The leafy sea dragon is a southern Australian fish related to seahorses and pipefish, and its whole strategy is imitation. Leaf-shaped lobes sprout along its body and do nothing for swimming; they exist to break up its outline among kelp and seagrass. Movement comes from two nearly transparent fins that beat fast enough to be almost invisible, so the animal appears to drift. It has no teeth and no stomach, and feeds by sucking tiny crustaceans through a long snout, eating more or less continuously. As with seahorses, the male carries the eggs, in his case fixed to a spongy patch under the tail.',
    origin:
      'Endemic to the southern and western coasts of Australia, in kelp beds, seagrass meadows and rocky reef in relatively shallow, cool water.',
    notableTraits: [
      'Leaf-shaped lobes for camouflage that play no part in swimming',
      'Moves using two near-invisible transparent fins',
      'No teeth and no stomach, so it must feed almost constantly',
      'The male carries the eggs beneath his tail',
      'Cannot curl its tail to grip, unlike a seahorse',
    ],
    conservation:
      'Least Concern on current assessment but protected under Australian law, with collection restricted. Its narrow range makes it sensitive to habitat damage, pollution and warming water.',
    funFacts: [
      'Unlike seahorses it cannot grip with its tail, so a storm can carry one a long way.',
      'The male carries around 250 bright pink eggs on a spongy patch under his tail until they hatch.',
      'Its camouflage is so effective that it is often found only when it moves.',
    ],
    heroImage: '/assets/beastlypedia/leafy-sea-dragon-hero.jpg',
    heroAlt:
      'A leafy sea dragon among kelp with leaf-shaped appendages along its gold and green body',
    secondaryImage: '/assets/facts/leafy-sea-dragon.jpg',
    secondaryAlt: 'Close view of a leafy sea dragon showing its long snout and leaf-like lobes',
    relatedFiles: [],
  },
  {
    id: 'dolphin',
    factAnimal: 'Dolphin',
    name: 'Bottlenose Dolphin',
    scientific: 'Tursiops truncatus',
    tagline: 'Every dolphin invents a name for itself and answers to it for life.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'Bottlenose dolphins are the dolphins most people picture, and the genuinely unusual thing about them is not the acrobatics. Each one develops its own signature whistle in the first months of life and keeps it, which functions as a name. Dolphins copy each other’s whistles to address specific individuals, and they respond to their own, which is a level of referential communication almost nothing outside our own species manages. They also sleep one brain hemisphere at a time, so they never stop surfacing to breathe, and their echolocation resolves objects in water far too murky for any eye.',
    origin:
      'Temperate and tropical waters worldwide, in coastal bays and estuaries as well as open ocean, with resident populations that stay put and offshore populations that range widely.',
    notableTraits: [
      'Invents a signature whistle that works as a name',
      'Sleeps one brain hemisphere at a time',
      'Echolocation fine enough to hunt in zero visibility',
      'Hunts cooperatively, including herding fish onto mudbanks',
      'Lives in fluid social groups that split and re-form',
    ],
    conservation:
      'Least Concern as a species, which hides a lot. Coastal populations sit closest to fishing gear, boat strikes and runoff, and several regional groups are in real trouble while the global total is not.',
    funFacts: [
      'A dolphin will copy another dolphin’s signature whistle to get its attention, which is close to calling someone by name.',
      'Because it sleeps half a brain at a time, one eye stays open and it keeps swimming throughout.',
      'Some populations carry sea sponges on their beaks as foraging tools, a behavior passed from mother to calf.',
    ],
    heroImage: null,
    heroAlt:
      'A bottlenose dolphin breaking the surface of open blue water with its beak and melon clear of the waterline',
    secondaryImage: '/assets/facts/dolphin.jpg',
    secondaryAlt: 'A bottlenose dolphin swimming just below the surface seen from the side',
    relatedFiles: ['do-dolphins-have-names-what-the-research-shows'],
    draft: true,
  },
  {
    id: 'clownfish',
    name: 'Clownfish',
    scientific: 'Amphiprion ocellaris',
    alsoKnownAs: ['Anemonefish', 'False Percula Clownfish'],
    tagline: 'Every clownfish is born male, and the largest one becomes female.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'Clownfish live inside sea anemones whose stinging tentacles kill most other fish, protected by a mucus coat that stops the anemone reading them as prey. A group is a strict queue: one breeding female at the top, one breeding male below her, and a line of smaller non-breeding males waiting. Every clownfish starts male. When the female dies the breeding male changes sex and takes her place, and the next fish in line steps up. The change is irreversible, and it means a certain film would have gone very differently.',
    origin:
      'Warm shallow reefs of the Indo-Pacific, from northern Australia through southeast Asia to Japan, always in or beside a host anemone.',
    notableTraits: [
      'All are born male; the dominant fish becomes female',
      'Immune to its host anemone’s sting via a mucus coat',
      'Rarely strays more than a few metres from its anemone',
      'Strict size-ordered social hierarchy',
      'The change from male to female cannot be reversed',
    ],
    conservation:
      'Least Concern, though the reefs and anemones they depend on are not. Bleaching that kills host anemones removes the habitat even where the fish themselves are untouched.',
    funFacts: [
      'The deal runs both ways: the anemone gets cleaned, defended and fed on scraps.',
      'A clownfish that loses its anemone rarely lasts long in open water.',
      'The mucus coat is partly acquired, and a fish will brush against a new anemone repeatedly before moving in.',
    ],
    heroImage: null,
    heroAlt: 'A clownfish nestled among the tentacles of a sea anemone on a tropical reef',
    secondaryImage: '/assets/facts/clownfish.jpg',
    secondaryAlt: 'A clownfish showing its orange body and white bands edged in black',
    relatedFiles: ['what-finding-nemo-got-wrong-about-clownfish'],
    draft: true,
  },
  {
    id: 'immortal-jellyfish',
    factAnimal: 'Jellyfish',
    name: 'Immortal Jellyfish',
    scientific: 'Turritopsis dohrnii',
    tagline: 'It can run its own life cycle backwards, which is not the same as not dying.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'A jellyfish normally goes one way: polyp fixed to the seabed, then free-swimming medusa, then death. Turritopsis dohrnii can reverse it. Injured, starved or simply stressed, an adult medusa can settle, reabsorb its own tentacles and revert to a polyp colony, its cells converting from one type directly into another. In principle it can do this indefinitely, which is where the name came from. In practice it is a four millimetre animal that gets eaten, infected and killed constantly. Biologically open-ended is not the same as immortal, and the distinction is the whole story.',
    origin:
      'Originally described from the Mediterranean and now recorded worldwide in warm and temperate coastal water, apparently spread in ships’ ballast.',
    notableTraits: [
      'Reverts from adult medusa back to polyp under stress',
      'Cells convert directly from one type to another',
      'About four millimetres across, smaller than a fingernail',
      'Still dies easily to predators and disease',
      'Now found worldwide, likely carried in ballast water',
    ],
    conservation:
      'Not assessed. It is small, widespread and apparently spreading, so it is not a conservation concern; the interest in it is medical rather than protective.',
    funFacts: [
      'The reversal is called transdifferentiation, and cells switching type this cleanly is rare enough that cancer researchers pay attention.',
      'It is a few millimetres across, so most of what kills it never notices it did.',
      'A reverted polyp can bud off new medusae that are genetically identical to the original.',
    ],
    heroImage: null,
    heroAlt:
      'A tiny transparent immortal jellyfish photographed against dark water, its red stomach visible through the bell',
    secondaryImage: '/assets/facts/jellyfish.jpg',
    secondaryAlt: 'A translucent jellyfish drifting in dark water with tentacles trailing',
    relatedFiles: ['immortal-jellyfish-turritopsis-dohrnii-explained'],
    draft: true,
  },
  {
    id: 'seahorse',
    name: 'Seahorse',
    scientific: 'Hippocampus',
    tagline: 'The male gets pregnant, and it is a real pregnancy, not just carrying eggs.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'Seahorses are fish that swim upright, badly, using a small dorsal fin beating dozens of times a second, and grip seagrass with a prehensile tail to avoid being swept away. The famous part is genuine and often undersold. The female deposits eggs into a sealed pouch on the male’s belly, where he fertilises them and then carries them through a real pregnancy: the pouch supplies oxygen, regulates salinity and provides nutrients, and he goes into labour to give birth. They have no stomach, so food passes through fast and they eat almost constantly.',
    origin:
      'Shallow temperate and tropical water worldwide, in seagrass meadows, mangroves, estuaries and coral reef, usually within reach of something to hold on to.',
    notableTraits: [
      'Males carry a true pregnancy in a sealed brood pouch',
      'Prehensile tail for gripping seagrass and coral',
      'No stomach, so it must feed nearly continuously',
      'Eyes move independently of one another',
      'One of the slowest-swimming fish in the ocean',
    ],
    conservation:
      'Varies sharply by species, with several listed as Vulnerable or Endangered. The pressures are trawling, habitat loss in seagrass and mangrove, and collection for traditional medicine and the aquarium trade.',
    funFacts: [
      'The pouch is not a bag he carries. It regulates salinity and delivers oxygen, and the birth is genuine labour.',
      'Some species pair for a season and greet each other every morning with a colour change.',
      'The dwarf seahorse moves so slowly it holds a record as the slowest fish measured.',
    ],
    heroImage: null,
    heroAlt:
      'A seahorse gripping a strand of seagrass with its tail in clear shallow water',
    secondaryImage: '/assets/facts/seahorse.jpg',
    secondaryAlt: 'A seahorse in profile showing its curled tail and tubular snout',
    relatedFiles: ['seahorse-male-pregnancy-how-it-works'],
    draft: true,
  },
  {
    id: 'hagfish',
    name: 'Hagfish',
    scientific: 'Myxinidae',
    alsoKnownAs: ['Slime Eel'],
    tagline: 'A teaspoon of its slime becomes twenty litres in half a second.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'The hagfish is an eel-shaped scavenger with a skull and no jaw, no vertebrae and no paired fins, and it produces the most effective defense in the ocean. Threatened, it releases a small amount of material from glands along its body which, on contact with seawater, expands into litres of fibrous slime within about half a second. A shark that bites a hagfish gets its gills clogged and lets go. The hagfish then ties its own body into a knot and slides the knot down itself to scrape the slime off, which also lets it tear food from a carcass by bracing against its own body.',
    origin:
      'Cold ocean floor worldwide, mostly between a few dozen and a few thousand metres down, burrowing in soft sediment and gathering at carcasses.',
    notableTraits: [
      'Slime that expands to thousands of times its volume in under a second',
      'Ties itself in a knot to clean off and to feed',
      'A skull but no vertebrae, and no jaws',
      'Can absorb nutrients through its skin',
      'Survives hours in water with almost no oxygen',
    ],
    conservation:
      'Most species are unassessed. Some are fished commercially, largely for skin sold as eel leather, and their slow reproduction makes local populations easy to deplete.',
    funFacts: [
      'The slime is threaded through with protein fibres finer than spider silk, which is why it is being studied as a material.',
      'It feeds on carcasses on the seafloor and can go months between meals.',
      'A truck carrying hagfish crashed in Oregon in 2017 and the road had to be washed down with seawater.',
    ],
    heroImage: null,
    heroAlt:
      'A hagfish on a dark seafloor, its pale eel-shaped body curved against the sediment',
    secondaryImage: '/assets/facts/hagfish.jpg',
    secondaryAlt: 'Close view of a hagfish showing its jawless mouth and barbels',
    relatedFiles: ['hagfish-slime-how-it-works'],
    draft: true,
  },
  {
    id: 'shark',
    factAnimal: 'Shark',
    name: 'Sharks',
    // Not a binomial. Selachimorpha covers roughly 500 species and the profile
    // is about the group, the same call made for Tardigrada.
    scientific: 'Selachimorpha',
    tagline: 'Older than trees, older than Saturn’s rings, and barely a threat to anyone.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'Sharks predate trees. The lineage goes back more than 400 million years, which puts it before forests existed and, on current estimates of their age, before Saturn had rings. Around 500 species survive, most of them small, and the overwhelming majority have never harmed anybody: a handful of people die from shark bites worldwide in a typical year, against tens of millions of sharks killed by fishing. Their skeletons are cartilage rather than bone, their teeth are replaced continuously throughout life, and their snouts carry ampullae of Lorenzini, jelly-filled pores that detect the faint electrical fields of a hidden animal.',
    origin:
      'Every ocean, from tropical reef shallows to polar water and the deep sea, with a few species entering rivers and freshwater lakes.',
    notableTraits: [
      'A lineage older than trees by tens of millions of years',
      'Cartilage skeleton rather than bone',
      'Teeth replaced continuously for life',
      'Electroreception through the ampullae of Lorenzini',
      'Skin covered in tooth-like denticles rather than true scales',
    ],
    conservation:
      'Poor and worsening. A large share of assessed shark and ray species are threatened, driven by targeted fishing, the fin trade and bycatch, and slow reproduction means depleted populations recover badly.',
    funFacts: [
      'Shark skin is covered in dermal denticles, structurally teeth, which is why older accounts describe it as sandpaper.',
      'Greenland sharks are estimated to live for centuries, which would make them the longest-lived vertebrates known.',
      'The number of people killed by sharks each year is consistently in the single digits worldwide.',
    ],
    heroImage: null,
    heroAlt:
      'A shark cruising through open blue water seen from the side, with light rippling across its back',
    secondaryImage: '/assets/facts/shark.jpg',
    secondaryAlt: 'A shark swimming in clear water showing its dorsal fin and gill slits',
    relatedFiles: [
      'how-dangerous-are-sharks-really',
      'sharks-are-older-than-trees-and-9-other-facts-that-will-blow-your-mind',
    ],
    draft: true,
  },
  {
    id: 'octopus',
    name: 'Octopus',
    scientific: 'Octopus vulgaris',
    alsoKnownAs: ['Common Octopus'],
    tagline: 'Three hearts, blue blood, and most of its neurons outside its head.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'An octopus runs on a body plan assembled on a completely different branch from ours. Three hearts: two pump blood through the gills, one pumps it to the body, and that third one stops whenever the animal swims, which is part of why octopuses would rather walk. The blood is blue because it carries oxygen on copper-based hemocyanin rather than iron. Around two thirds of its neurons sit in the arms rather than the brain, so an arm can solve a good deal of a problem on its own. It has no bones at all, so anything its beak fits through, it fits through.',
    origin:
      'Temperate and tropical seas worldwide, in rocky reef, seagrass and rubble in shallow coastal water, denning in crevices.',
    notableTraits: [
      'Three hearts, one of which stops while swimming',
      'Blue, copper-based blood',
      'Two thirds of its neurons are in its arms',
      'No bones, so it fits through any gap its beak clears',
      'Changes colour and skin texture in under a second',
    ],
    conservation:
      'Least Concern, and heavily fished. The species is widespread and fast-growing, which buffers it, but octopus fisheries are expanding quickly and are largely unmanaged.',
    funFacts: [
      'It is very likely colour-blind, which makes its colour-matching camouflage a genuinely open question.',
      'Most species are semelparous: they breed once and die, and the female starves guarding her eggs.',
      'A severed arm keeps reacting to stimuli for a while, because the neurons to run it are already in the arm.',
    ],
    heroImage: null,
    heroAlt:
      'An octopus on a rocky seabed with its arms curled beneath it and skin textured to match the rock',
    secondaryImage: '/assets/facts/octopus-2.jpg',
    secondaryAlt: 'An octopus showing its suckered arms and horizontal pupil',
    relatedFiles: [
      'the-octopus-has-three-hearts-and-uses-all-of-them',
      '10-surprising-octopus-facts',
    ],
    draft: true,
  },
  {
    id: 'mantis-shrimp',
    name: 'Mantis Shrimp',
    scientific: 'Odontodactylus scyllarus',
    alsoKnownAs: ['Peacock Mantis Shrimp', 'Stomatopod'],
    tagline: 'The famous eyes are real. The famous conclusion about them is wrong.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'The mantis shrimp is neither a mantis nor a shrimp, and it throws the fastest punch in the animal kingdom: a spring-loaded club that accelerates like a small-calibre bullet, fast enough to boil a bubble of water into existence beside the target and hit it a second time when the bubble collapses. The eyes are the more famous claim and the more misunderstood one. It carries twelve or more photoreceptor types against our three, and it was widely assumed to see colour in unimaginable richness. Testing it in 2014 showed the opposite: it discriminates colours worse than we do. The receptors appear to trade fineness for speed, recognising colour without much processing.',
    origin:
      'Shallow tropical and subtropical Indo-Pacific reefs, in burrows dug in rubble and sand.',
    notableTraits: [
      'A strike that accelerates like a bullet and cavitates the water',
      'Twelve or more photoreceptor types, against three in humans',
      'Poorer fine colour discrimination than a human, despite that',
      'Sees polarised light, including circular polarisation',
      'Neither a mantis nor a shrimp; it is a stomatopod',
    ],
    conservation:
      'Not assessed. Reef degradation is the general pressure, and the brighter species are collected for aquariums, where they are notorious for cracking glass.',
    funFacts: [
      'The strike is so fast the water beside the club vaporises, and the collapsing bubble lands a second hit.',
      'It is the only animal known to detect circularly polarised light.',
      'The 2014 work that overturned the colour claim is a good reminder that more receptors does not mean better vision.',
    ],
    heroImage: null,
    heroAlt:
      'A peacock mantis shrimp at the mouth of its burrow on a reef, its green and orange shell and stalked eyes visible',
    secondaryImage: '/assets/facts/mantis-shrimp.jpg',
    secondaryAlt: 'Close view of a mantis shrimp showing its stalked eyes and raptorial clubs',
    relatedFiles: ['mantis-shrimp-16-color-vision-punch-power'],
    draft: true,
  },
  {
    id: 'cuttlefish',
    name: 'Cuttlefish',
    scientific: 'Sepia officinalis',
    alsoKnownAs: ['Common Cuttlefish'],
    tagline: 'It puts on the best colour display in the ocean and probably cannot see colour.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'A cuttlefish changes the colour, pattern and texture of its skin faster than anything else alive, running millions of pigment cells over layers of reflective ones. It uses this to vanish against sand, to send a rippling wave of dark bands down its body while hunting, and in some species to show courtship colours on one flank and female colouring on the other at the same time. The catch is that it has one visual pigment, so by the usual definition it is colour-blind. How an animal that cannot see colour matches it so precisely is unresolved; the leading idea involves reading colour from the blur its odd W-shaped pupil creates.',
    origin:
      'Coastal waters of the eastern Atlantic, North Sea, Mediterranean and Baltic, over sand and seagrass in relatively shallow water.',
    notableTraits: [
      'Changes colour, pattern and skin texture in under a second',
      'A single visual pigment, so effectively colour-blind',
      'W-shaped pupil, unlike almost anything else',
      'An internal cuttlebone used to control buoyancy',
      'Can display courtship and female colouring on opposite flanks at once',
    ],
    conservation:
      'Near Threatened in parts of its range and heavily fished, particularly in the Mediterranean and the eastern Atlantic. Short lifespans mean populations swing hard year to year.',
    funFacts: [
      'The cuttlebone is a gas-filled internal shell it floods and empties to sink and rise.',
      'Smaller males have been recorded showing female colouring on one side to slip past a larger rival.',
      'It has eight arms and two longer feeding tentacles it fires out to catch prey.',
    ],
    heroImage: null,
    heroAlt:
      'A cuttlefish hovering above sand with its arms held forward and a rippling pattern across its skin',
    secondaryImage: '/assets/facts/cuttlefish-2.jpg',
    secondaryAlt: 'Close view of a cuttlefish showing its W-shaped pupil and fin skirt',
    relatedFiles: ['10-surprising-cuttlefish-facts'],
    draft: true,
  },
  {
    id: 'humpback-whale',
    name: 'Humpback Whale',
    scientific: 'Megaptera novaeangliae',
    tagline: 'Every male in an ocean sings the same song, and the song changes together.',
    habitat: 'Ocean',
    group: 'Marine Life',
    overview:
      'Humpbacks are the whales people know by sound. Males sing long structured songs that run for many minutes and repeat for hours, and the remarkable part is that every male in a population sings essentially the same song at the same time. The song changes across a season, everyone adopts the changes, and new versions spread from one population to the next across an entire ocean basin, which is cultural transmission on a scale nothing else in the sea matches. They also feed by blowing a spiral of bubbles to corral fish into a column, then lunging up through the middle with their mouths open, and they migrate further than almost any mammal.',
    origin:
      'Every major ocean. They feed in cold polar and temperate water in summer and migrate to warm tropical water to breed and calve.',
    notableTraits: [
      'Population-wide song that changes and spreads between oceans',
      'Bubble-net feeding, often in coordinated groups',
      'Flippers up to a third of body length, the longest of any whale',
      'Individually identifiable by the pattern on the tail fluke',
      'Migrations among the longest of any mammal',
    ],
    conservation:
      'Least Concern, and one of the genuine conservation successes. Commercial whaling cut some populations to a few percent of their original numbers, and most have rebuilt substantially since protection.',
    funFacts: [
      'Researchers identify individuals from tail fluke markings the way you would use a fingerprint.',
      'Only males sing, and nobody is certain what the song is for.',
      'Bubble-net feeding is learned, and different groups do it differently.',
    ],
    heroImage: null,
    heroAlt:
      'A humpback whale breaching clear of the ocean surface with water streaming from its long pectoral fin',
    secondaryImage: '/assets/facts/humpback-whale.jpg',
    secondaryAlt: 'A humpback whale tail fluke raised above the water before a dive',
    relatedFiles: ['10-surprising-humpback-whale-facts'],
    draft: true,
  },
];
