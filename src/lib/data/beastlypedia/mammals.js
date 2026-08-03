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
    heroImage: '/assets/beastlypedia/aye-aye-hero.jpg',
    heroAlt: 'An aye-aye clinging to a branch at night, its huge orange eyes reflecting the light',
    secondaryImage: '/assets/facts/aye-aye.jpg',
    secondaryAlt: 'An aye-aye in darkness showing its large bare ears and coarse black fur',
    relatedFiles: [],
  },
  {
    id: 'giraffe',
    name: 'Giraffe',
    scientific: 'Giraffa camelopardalis',
    tagline: 'The famous oversized heart is a myth. What is actually going on is stranger.',
    habitat: 'Savannah',
    group: 'Mammals',
    overview:
      'Everyone is taught that a giraffe needs an enormous heart to push blood two metres uphill to its brain, usually quoted at around 11 kilograms. Measured properly, a giraffe heart is 0.5 to 0.6 percent of body mass, which is an ordinary mammalian heart. The pressure it generates is genuinely extreme, roughly twice ours, but it comes from a thick-walled left ventricle with a small chamber rather than sheer size. The rest of the system is the interesting part: tight skin on the legs acting like a compression stocking, and a mesh of vessels at the base of the skull that buffers the pressure change when the head goes down to drink.',
    origin:
      'Fragmented populations across sub-Saharan Africa, in savannah, open woodland and scrub where acacia and similar trees grow.',
    notableTraits: [
      'Heart is an ordinary size for the body, despite the myth',
      'Blood pressure roughly twice that of a human',
      'Tight leg skin that works like a compression stocking',
      'Seven neck vertebrae, the same number as a human',
      'Males fight by swinging their necks, called necking',
    ],
    conservation:
      'Vulnerable, with numbers down sharply over recent decades and some populations in far worse shape than the overall figure suggests. Habitat loss and fragmentation are the main pressures.',
    funFacts: [
      'The 25 pound heart figure traces to a single 1955 paper that was already contradicted and went unchecked for decades.',
      'It has seven neck vertebrae, exactly as many as you do. They are just very long.',
      'A giraffe can go longer without water than a camel of the same size.',
    ],
    heroImage: '/assets/beastlypedia/giraffe-hero.jpg',
    heroAlt:
      'An adult giraffe standing in profile on open savanna with its neck raised and acacia trees behind',
    secondaryImage: '/assets/facts/giraffe.jpg',
    secondaryAlt: 'A giraffe head and neck in profile against a pale sky',
    relatedFiles: ['giraffe-heart-myth-what-the-research-shows'],
  },
  {
    id: 'slow-loris',
    name: 'Slow Loris',
    // Genus level: several species share the venom trait and the profile is
    // about all of them.
    scientific: 'Nycticebus',
    tagline: 'The only venomous primate, and the reason is a gland in its elbow.',
    habitat: 'Rainforest',
    group: 'Mammals',
    overview:
      'The slow loris is the only primate known to be venomous, and it produces the venom in an unusual way. A gland on the inside of the upper arm secretes an oil, and the animal licks it, mixing the secretion with saliva to activate it. The resulting bite can cause severe swelling and, in rare cases, anaphylaxis in humans. Mothers groom it into their infants before leaving them parked on a branch. Everything else about the animal follows from moving slowly in the dark: huge forward-facing eyes with a reflective layer behind the retina, a deliberate hand-over-hand climb, and a grip it can hold for hours.',
    origin:
      'Rainforest and bamboo forest across southeast Asia and northeast India, from Bangladesh through Indochina to Indonesia and the Philippines.',
    notableTraits: [
      'The only primate known to be venomous',
      'Venom activated by licking a gland on the upper arm',
      'A reflective layer behind the retina for night vision',
      'Moves slowly and deliberately rather than leaping',
      'Can grip a branch for hours without tiring',
    ],
    conservation:
      'Poor across the genus, with several species Endangered or Critically Endangered. The pet trade is a direct driver: animals have their teeth cut out to make them safe to handle, which frequently kills them.',
    funFacts: [
      'A mother licks venom into her infant’s fur before leaving it parked on a branch.',
      'The videos of lorises raising their arms are usually not enjoyment; that posture is how it reaches the venom gland.',
      'It is one of very few mammals where venom appears to be used against its own species.',
    ],
    heroImage: '/assets/beastlypedia/slow-loris-hero.jpg',
    heroAlt:
      'A slow loris gripping a branch at night in rainforest, its large round eyes reflecting the light',
    secondaryImage: '/assets/facts/slow-loris.jpg',
    secondaryAlt: 'A slow loris clinging to a branch showing its large forward-facing eyes',
    relatedFiles: ['slow-loris-the-only-venomous-primate'],
  },
  {
    id: 'african-elephant',
    factAnimal: 'Elephant',
    name: 'African Elephant',
    scientific: 'Loxodonta africana',
    tagline: 'Most of an elephant herd’s conversation happens below what you can hear.',
    habitat: 'Savannah',
    group: 'Mammals',
    overview:
      'Elephants talk mostly in frequencies below human hearing. Their rumbles run down to around 14 hertz, low enough that the sound carries for kilometres across open country instead of dissipating, and part of it travels through the ground as well as the air. Elephants pick up those vibrations through their feet and trunk and can orient toward a call from far outside sight. The trunk itself is a boneless structure of tens of thousands of muscle units, precise enough to pick up a single seed and strong enough to break a branch. Herds are matriarchies led by the oldest female, whose memory of water in a drought year is a survival asset for everyone.',
    origin:
      'Sub-Saharan Africa, in savannah, open woodland, marsh and semi-desert, with the largest remaining populations in southern and eastern Africa.',
    notableTraits: [
      'Rumbles below human hearing that carry for kilometres',
      'Detects ground vibration through its feet',
      'A trunk with tens of thousands of muscle units and no bone',
      'Matriarchal herds led by the oldest female',
      'Investigates and returns to the bones of its dead',
    ],
    conservation:
      'Endangered. Ivory poaching remains a pressure, but habitat loss and the fragmentation of migration routes are now at least as serious, and elephants and farmers increasingly end up on the same land.',
    funFacts: [
      'Part of the call travels through the ground, and an elephant can pick it up through its feet.',
      'The trunk has no bone at all, and it can both uproot a tree and pick up a single seed.',
      'Elephants return to the bones of dead relatives and handle them, which nothing has fully explained.',
    ],
    heroImage: '/assets/beastlypedia/african-elephant-hero.jpg',
    heroAlt:
      'An African elephant standing on open savanna at golden hour with its ears spread and trunk lowered',
    secondaryImage: '/assets/facts/elephant.jpg',
    secondaryAlt: 'An African elephant in profile showing its trunk and large ear',
    relatedFiles: ['elephants-talk-below-human-hearing'],
  },
  {
    id: 'sloth',
    name: 'Three-Toed Sloth',
    factAnimal: 'Sloth',
    scientific: 'Bradypus variegatus',
    tagline: 'It climbs all the way down once a week to defecate, and it often dies doing it.',
    habitat: 'Rainforest',
    group: 'Mammals',
    overview:
      'A sloth is built around an extremely poor diet. Leaves give up very little energy, so it moves slowly, keeps a low body temperature, and takes days to digest a meal in a multi-chambered stomach. The strangest consequence is the weekly trip. Roughly once a week a three-toed sloth climbs all the way to the forest floor to defecate, where it cannot walk and has to drag itself by its front claws. A large share of sloth deaths from predation happen during those trips, which is a striking amount of risk for something with an easy alternative. Its coat, meanwhile, is a habitat: grooved hairs hold moisture, grow algae, and house moths.',
    origin:
      'Lowland and montane rainforest from Central America into northern South America, spending nearly all of its life in the canopy.',
    notableTraits: [
      'Descends to the ground about once a week to defecate',
      'Cannot walk on the ground and drags itself by the front claws',
      'Grooved hairs that grow algae found almost nowhere else',
      'A multi-chambered stomach that takes days to process leaves',
      'Can turn its head roughly 270 degrees',
    ],
    conservation:
      'Least Concern for this species, though other sloths are not so lucky. Road building and forest fragmentation are the practical threats, because a sloth crossing open ground is nearly defenceless.',
    funFacts: [
      'The weekly descent accounts for a large share of all sloth predation deaths.',
      'Moths live in the fur and lay their eggs in the dung during that trip.',
      'Wild sloths look green because of algae growing in grooves along each hair.',
    ],
    heroImage: '/assets/beastlypedia/sloth-hero.jpg',
    heroAlt:
      'A three-toed sloth hanging beneath a branch in rainforest canopy with its long curved claws hooked over the wood',
    secondaryImage: '/assets/facts/sloth.jpg',
    secondaryAlt: 'A three-toed sloth clinging to a tree trunk, face toward the camera',
    relatedFiles: ['why-a-sloth-climbs-down-to-defecate'],
  },
  {
    id: 'gray-wolf',
    factAnimal: 'Wolf',
    name: 'Gray Wolf',
    scientific: 'Canis lupus',
    tagline: 'There is no alpha wolf. The researcher who popularised the idea spent years retracting it.',
    habitat: 'Forest',
    group: 'Mammals',
    overview:
      'The alpha wolf is one of the most successful pieces of misinformation in popular biology, and it came from watching the wrong wolves. The early studies observed unrelated captive animals thrown together in an enclosure, which produced constant status fights that looked like a dominance ladder. Wild packs are not like that. A wild pack is a family: a breeding pair and their offspring from several years, and the parents lead for the same reason parents usually do. David Mech, whose 1970 book put the term into circulation, has spent decades trying to get it withdrawn, including asking his publisher to stop printing it.',
    origin:
      'Forest, tundra, mountain and grassland across North America, Europe and Asia, in what remains of a range that once covered most of the northern hemisphere.',
    notableTraits: [
      'Packs are families, not ranked strangers',
      'Howls carry for several kilometres',
      'Can cover tens of kilometres in a day while hunting',
      'Bite force among the strongest of any canid',
      'Breeding pair usually leads because they are the parents',
    ],
    conservation:
      'Least Concern globally, which conceals wide regional variation. Wolves have recovered strongly in parts of Europe and North America while remaining absent from most of their historical range and contentious wherever they return.',
    funFacts: [
      'The researcher most responsible for the alpha idea asked his own publisher to stop reprinting the book.',
      'Pups are raised by the whole pack, not only the parents.',
      'Wolves rarely fight for rank in the wild; there is nothing to fight over in a family.',
    ],
    heroImage: '/assets/beastlypedia/gray-wolf-hero.jpg',
    heroAlt:
      'A grey wolf standing in snow at the edge of conifer forest, looking directly toward the camera',
    secondaryImage: '/assets/facts/wolf.jpg',
    secondaryAlt: 'A grey wolf in profile with thick winter coat',
    relatedFiles: ['alpha-wolf-myth-what-the-research-actually-says'],
  },
  {
    id: 'lion',
    name: 'Lion',
    scientific: 'Panthera leo',
    tagline: 'The only cat that lives in a group, and the females run it.',
    habitat: 'Savannah',
    group: 'Mammals',
    overview:
      'Of roughly forty cat species, the lion is the only one that genuinely lives socially. A pride is built around related females who stay for life, hunt together and raise cubs communally, often nursing each other’s young. Males are transient by comparison: they arrive in coalitions, hold tenure for a few years, and are pushed out by the next group. Cooperative hunting is what group living buys, letting lions take prey far larger than an individual could manage. The mane appears to advertise condition to other lions rather than protect the neck, and it darkens with age and testosterone.',
    origin:
      'Savannah, grassland and open woodland in sub-Saharan Africa, with a single small remnant population of Asiatic lions in the Gir Forest of India.',
    notableTraits: [
      'The only truly social cat',
      'Prides are built around related females who stay for life',
      'Males hold tenure in coalitions for only a few years',
      'Females nurse each other’s cubs',
      'A roar audible from around eight kilometres away',
    ],
    conservation:
      'Vulnerable, with the population down substantially over recent decades. The pressures are habitat loss, declining prey, and conflict with livestock farmers.',
    funFacts: [
      'Lionesses in a pride often give birth around the same time and raise the cubs as one group.',
      'The mane seems to signal condition to other lions rather than shield the neck in fights.',
      'A male coalition that takes over a pride will usually kill the cubs of the previous males.',
    ],
    heroImage: '/assets/beastlypedia/lion-hero.jpg',
    heroAlt:
      'A male lion lying on open savanna grass at golden hour, mane full, looking into the distance',
    secondaryImage: '/assets/facts/lion.jpg',
    secondaryAlt: 'A lion in profile showing its full mane',
    relatedFiles: ['lions-are-the-only-social-cat'],
  },
  {
    id: 'tiger',
    name: 'Tiger',
    scientific: 'Panthera tigris',
    tagline: 'Every wild tiger left would fit inside one small town.',
    habitat: 'Forest',
    group: 'Mammals',
    overview:
      'The tiger is the largest cat alive and there are only a few thousand left in the wild, a number small enough that the entire global wild population would fit into a modest town. It hunts alone, mostly at night, relying on a short explosive charge rather than a chase, and can take prey several times its own weight. The stripes are not only on the fur: shave a tiger and the pattern is still there in the skin, and every animal’s arrangement is unique. Individuals hold large territories and advertise them by scent and by scratch marks, which is why they need intact forest rather than fragments.',
    origin:
      'Forest, mangrove and grassland across scattered parts of Asia, from India and Nepal through southeast Asia to the Russian Far East, in a fraction of the historical range.',
    notableTraits: [
      'The largest cat species alive',
      'Stripes are in the skin as well as the fur, and unique to each animal',
      'Hunts alone, usually at night, by ambush',
      'Holds very large individual territories',
      'Unusually willing to swim, unlike most cats',
    ],
    conservation:
      'Endangered. Poaching, prey depletion and the fragmentation of forest into patches too small to hold a territory are the main pressures, though a few countries have posted real increases.',
    funFacts: [
      'Shave a tiger and the stripes are still there, because the pattern is in the skin.',
      'More tigers live in captivity in some countries than exist in the wild worldwide.',
      'Unlike most cats it swims readily and will cross rivers to hunt.',
    ],
    heroImage: '/assets/beastlypedia/tiger-hero.jpg',
    heroAlt:
      'A wild tiger walking through tall grass at the edge of forest, striped flank catching the light',
    secondaryImage: '/assets/facts/tiger.jpg',
    secondaryAlt: 'A tiger facing the camera showing its striped face and white ruff',
    relatedFiles: ['every-wild-tiger-would-fit-in-a-small-town'],
  },
  {
    id: 'rhinoceros',
    factAnimal: 'Rhino',
    name: 'Rhinoceros',
    // Family level: the horn structure and the poaching pressure apply across
    // all five surviving species.
    scientific: 'Rhinocerotidae',
    tagline: 'The horn is not ivory and not bone. It is the same protein as your fingernails.',
    habitat: 'Savannah',
    group: 'Mammals',
    overview:
      'A rhino horn has no bony core. It grows out of the skin and is compacted keratin the whole way through, the same protein as hair, hooves and fingernails, which makes it structurally closer to an enormous callus than to a cow’s horn. Because there is no bone and it grows continuously from the base, it regrows after being cut above the growth plate, and that is what makes dehorning usable as an anti-poaching measure. It is not a clean fix. Dehorned rhinos are still killed, and the horn does real work in defense and in disputes. Five species survive, and two of them are down to a few dozen animals.',
    origin:
      'Savannah, grassland and swamp in southern and eastern Africa, and forest and floodplain grassland in India, Nepal and southeast Asia.',
    notableTraits: [
      'Horn is compacted keratin with no bony core',
      'Regrows after being cut above the growth plate',
      'Poor eyesight offset by excellent hearing and smell',
      'Five surviving species, two of them nearly gone',
      'Can reach around 50 kilometres an hour despite its bulk',
    ],
    conservation:
      'Severe and uneven. White and greater one-horned rhinos have recovered substantially from very low numbers, while the Javan and Sumatran species are Critically Endangered with populations counted in dozens.',
    funFacts: [
      'Rhino horn has the same composition as your fingernails, which is worth remembering given what it sells for.',
      'Dehorning works as a deterrent but does not stop poaching outright.',
      'The northern white rhino is down to two females, both unable to carry a pregnancy.',
    ],
    heroImage: '/assets/beastlypedia/rhinoceros-hero.jpg',
    heroAlt:
      'A rhinoceros standing in open grassland in profile, its horn and heavy folded skin clearly visible',
    secondaryImage: '/assets/facts/rhino.jpg',
    secondaryAlt: 'A rhinoceros head in profile showing the horn and small eye',
    relatedFiles: ['a-rhino-horn-is-made-of-keratin'],
  },
  {
    id: 'wombat',
    name: 'Wombat',
    scientific: 'Vombatus ursinus',
    alsoKnownAs: ['Common Wombat', 'Bare-Nosed Wombat'],
    tagline: 'The only animal that produces cube-shaped droppings, and it does it on purpose.',
    habitat: 'Forest',
    group: 'Mammals',
    overview:
      'The wombat is the only animal known to produce cubic faeces, and the mechanism was worked out only recently. The last stretch of intestine has walls of varying stiffness, so as the very dry contents are squeezed along, the flexible sections push outward and the rigid sections hold, forming flat faces and corners. The point appears to be that cubes do not roll: a wombat marks territory by leaving droppings on rocks and logs, and a round one would fall off. The rest of the animal is built for digging, including a rump reinforced with cartilage that it uses to block a burrow entrance and crush anything that follows it in.',
    origin:
      'Forest, heath and mountain country in southeastern Australia and Tasmania, in extensive burrow systems.',
    notableTraits: [
      'Produces cube-shaped droppings, unique among animals',
      'A cartilage-reinforced rump used to block burrows',
      'A backward-facing pouch so digging does not fill it with soil',
      'Digests for up to two weeks, producing very dry waste',
      'Burrow systems that can run tens of metres',
    ],
    conservation:
      'Least Concern for the common wombat, though the northern hairy-nosed wombat is Critically Endangered and confined to a tiny area. Vehicle strikes and mange are the practical pressures.',
    funFacts: [
      'Cubes do not roll off the rocks and logs a wombat uses as scent posts, which appears to be the point.',
      'Its pouch opens backwards, so it does not fill with dirt while digging.',
      'It can block a burrow with its rump and crush a predator against the roof.',
    ],
    heroImage: '/assets/beastlypedia/wombat-hero.jpg',
    heroAlt:
      'A wombat standing at the entrance to its burrow on grassy ground, stocky body and broad nose visible',
    secondaryImage: '/assets/facts/wombat.jpg',
    secondaryAlt: 'A wombat grazing on grass, seen from the side',
    relatedFiles: ['why-wombats-produce-cube-shaped-droppings'],
  },
  {
    id: 'honey-badger',
    name: 'Honey Badger',
    scientific: 'Mellivora capensis',
    alsoKnownAs: ['Ratel'],
    tagline: 'Loose skin, a bad attitude, and genuine resistance to cobra venom.',
    habitat: 'Savannah',
    group: 'Mammals',
    overview:
      'The honey badger’s reputation is mostly earned, and the reasons are structural. Its skin is thick and remarkably loose, so an animal that grabs it finds the badger able to rotate inside its own hide and bite back. It also carries a mutation in the receptor that snake neurotoxins target, the same adaptation the mongoose has, which gives it real resistance to cobra venom rather than simple bravado. It digs constantly, raids bee nests for larvae as much as honey, and has been recorded using objects to climb, which is rare outside the primates and a handful of birds.',
    origin:
      'Sub-Saharan Africa through the Arabian peninsula and into southwest Asia and India, across savannah, grassland, desert edge and forest.',
    notableTraits: [
      'Skin loose enough to turn inside its own hide',
      'A receptor mutation giving real resistance to snake venom',
      'Raids bee nests mainly for the larvae',
      'Recorded using objects as tools to climb',
      'Digs powerfully with long front claws',
    ],
    conservation:
      'Least Concern, with a very wide range. Locally it is killed by beekeepers and farmers, and it takes losses from poisoned bait set for other animals.',
    funFacts: [
      'Its venom resistance comes from the same kind of receptor change that protects the mongoose.',
      'The loose skin is the actual trick: a predator gets a grip on hide, not on badger.',
      'One studied individual repeatedly stacked objects to escape an enclosure.',
    ],
    heroImage: '/assets/beastlypedia/honey-badger-hero.jpg',
    heroAlt:
      'A honey badger walking across dry ground, its black body and broad white back stripe clearly visible',
    secondaryImage: '/assets/facts/honey-badger.jpg',
    secondaryAlt: 'A honey badger in profile showing its pale back stripe and heavy claws',
    relatedFiles: ['honey-badgers-the-toughest-little-troublemakers-on-the-planet'],
  },
  {
    id: 'platypus',
    name: 'Platypus',
    scientific: 'Ornithorhynchus anatinus',
    tagline: 'Lays eggs, detects electricity, has venom, and glows under ultraviolet light.',
    habitat: 'Freshwater',
    group: 'Mammals',
    overview:
      'The platypus was assumed to be a hoax when the first specimen reached Britain, and the animal has kept adding to the case ever since. It is a mammal that lays eggs. It hunts with its eyes, ears and nostrils shut, navigating entirely by electroreceptors in its bill that pick up the muscle activity of prey buried in silt. Males carry a venomous spur on each hind ankle, capable of causing pain severe enough to resist morphine. It has no stomach, so the oesophagus runs straight to the intestine. Its fur fluoresces blue-green under ultraviolet light, and nobody yet knows why.',
    origin:
      'Freshwater rivers, streams and lakes in eastern Australia and Tasmania, denning in burrows dug into the bank.',
    notableTraits: [
      'A mammal that lays eggs',
      'Hunts by electroreception with eyes and ears closed',
      'Males have a venomous spur on each hind ankle',
      'No stomach at all',
      'Fur that fluoresces under ultraviolet light',
    ],
    conservation:
      'Near Threatened and declining. Drought, river regulation, land clearing along banks and drowning in illegal net traps are the main pressures, and the range has already contracted.',
    funFacts: [
      'It closes its eyes, ears and nostrils underwater and finds prey purely by electric field.',
      'The venom will not kill a person but the pain is severe and can last for weeks.',
      'It has ten sex chromosomes, where most mammals manage with two.',
    ],
    heroImage: '/assets/beastlypedia/platypus-hero.jpg',
    heroAlt:
      'A platypus swimming at the surface of a still river, its bill and dense brown fur visible',
    secondaryImage: '/assets/facts/platypus.jpg',
    secondaryAlt: 'A platypus on a riverbank showing its bill and webbed forefeet',
    relatedFiles: ['the-platypus-natures-most-wonderfully-bizarre-mammal'],
  },
  {
    id: 'wolverine',
    name: 'Wolverine',
    scientific: 'Gulo gulo',
    alsoKnownAs: ['Glutton', 'Skunk Bear'],
    tagline: 'Thirty pounds of animal that drives bears off kills and crushes frozen bone.',
    habitat: 'Arctic',
    group: 'Mammals',
    overview:
      'The wolverine is the largest land-dwelling member of the weasel family and weighs about as much as a mid-sized dog, which makes its reputation for driving wolves and bears off carcasses look absurd until you see the skull. It has a specialised upper molar rotated sideways, letting it shear through meat and bone frozen solid, which is the difference between finding a winter carcass and being able to eat one. Individuals range enormously, hundreds of square kilometres each, and females need deep spring snowpack to den, which ties the species directly to a warming climate in a way that is hard to design around.',
    origin:
      'Boreal forest, tundra and mountains across northern North America, Scandinavia, Russia and parts of central Asia.',
    notableTraits: [
      'A sideways-rotated molar for shearing frozen meat and bone',
      'Drives larger predators off carcasses despite its size',
      'Individual ranges covering hundreds of square kilometres',
      'Females need deep spring snow to den',
      'Broad feet that work like snowshoes',
    ],
    conservation:
      'Least Concern globally but thin and patchy nearly everywhere, and warming is the structural problem: less reliable spring snowpack removes the denning conditions the species depends on.',
    funFacts: [
      'The species name Gulo gulo means glutton twice over.',
      'It caches food in snow, which works as a natural refrigerator through the winter.',
      'Its fur resists frost build-up, which is why it was traditionally used to trim parka hoods.',
    ],
    heroImage: '/assets/beastlypedia/wolverine-hero.jpg',
    heroAlt:
      'A wolverine moving across deep snow in boreal forest, its dark coat and pale flank stripe visible',
    secondaryImage: '/assets/facts/wolverine.jpg',
    secondaryAlt: 'A wolverine in profile on snow showing its dense dark coat and pale flank stripe',
    relatedFiles: ['wolverine-facts-the-toughest-animal-pound-for-pound'],
  },
];
