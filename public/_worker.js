const POSTS_PER_DAY = 2; // bump this (e.g. 3, 4) for more posts/day - one new fact becomes visible per slot
const DAY_MS = 86400000;
const SLOT_MS = DAY_MS / POSTS_PER_DAY;
const EPOCH = Date.UTC(2026, 0, 1);
const WINDOW = 14 * POSTS_PER_DAY; // ~14 days of backlog regardless of cadence, so a slow Publer poll never misses one
const FALLBACK_IMAGE = 'https://beastlyfacts.com/assets/hero-1200.jpg';

const ARTICLES_WINDOW = 40; // most recent posts

// Mirrors src/lib/utils/slugify.js exactly - must produce identical output,
// since this is how /facts/:slug matches a fact by title on the frontend.
function slugify(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s*&\s*|\s+and\s+/g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Only exact, confirmed species matches - add more as real photos get sourced.
// Anything not listed here falls back to the branded hero image.
// Mirrored in src/lib/data/factImages.js for frontend use (gallery page, the
// Image popup on fact cards, per-fact og:image tags) - this Worker file can't
// import that module, so keep both in sync manually when adding a photo.
const ANIMAL_IMAGES = {
  'Bearded Dragon': '/assets/guides/bearded-dragon.jpg',
  'Leopard Gecko': '/assets/guides/leopard-gecko.jpg',
  'Crested Gecko': '/assets/guides/crested-gecko.jpg',
  'Ball Python': '/assets/guides/ball-python.jpg',
  'Rabbit': '/assets/guides/rabbit.jpg',
  'Guinea Pig': '/assets/guides/guinea-pig.jpg',
  'Hedgehog': '/assets/guides/hedgehog.jpg',
  'Axolotl': '/assets/images/fun-facts-axolotl.jpg',
  'Octopus': '/assets/images/fun-facts-octopus.jpg',
  'Cuttlefish': '/assets/images/fun-facts-cuttlefish.jpg',
  'Boa Constrictor': '/assets/images/fun-facts-boa-constrictor.jpg',
  'Wombat': '/assets/facts/wombat.jpg',
  'Narwhal': '/assets/facts/narwhal.jpg',
  'Honey Badger': '/assets/facts/honey-badger.jpg',
  'Cat': '/assets/facts/cat.jpg',
  'Dog': '/assets/facts/dog.jpg',
  'Parrot': '/assets/facts/parrot.jpg',
  'Chameleon': '/assets/facts/chameleon.jpg',
  'Clownfish': '/assets/facts/clownfish.jpg',
  'Dolphin': '/assets/facts/dolphin.jpg',
  'Dolphins': '/assets/facts/dolphin.jpg',
  'Elephant': '/assets/facts/elephant.jpg',
  'Crow': '/assets/facts/crow.jpg',
  'Leafcutter Ant': '/assets/facts/leafcutter-ant.jpg',
  'Wood Frog': '/assets/facts/wood-frog.jpg',
  'Gecko': '/assets/facts/gecko.jpg',
  'Pangolin': '/assets/facts/pangolin.jpg',
  'African Grey Parrot': '/assets/facts/african-grey-parrot.jpg',
  'Tardigrade': '/assets/facts/tardigrade.jpg',
  'Sloth': '/assets/facts/sloth.jpg',
  'Three-Toed Sloth': '/assets/facts/sloth.jpg',
  'Komodo Dragon': '/assets/facts/komodo-dragon.jpg',
  'Flamingo': '/assets/facts/flamingo.jpg',
  'Seahorse': '/assets/facts/seahorse.jpg',
  'Platypus': '/assets/facts/platypus.jpg',
  'Koala': '/assets/facts/koala.jpg',
  'Giraffe': '/assets/facts/giraffe.jpg',
  'Polar Bear': '/assets/facts/polar-bear.jpg',
  'Shark': '/assets/facts/shark.jpg',
  'Hippo': '/assets/facts/hippo.jpg',
  'Zebra': '/assets/facts/zebra.jpg',
  'Wolf': '/assets/facts/wolf.jpg',
  'Snake': '/assets/facts/snake.jpg',
  'Red Panda': '/assets/facts/red-panda.jpg',
  'Jellyfish': '/assets/facts/jellyfish.jpg',
  'Mantis Shrimp': '/assets/facts/mantis-shrimp.jpg',
  'Sea Otter': '/assets/facts/sea-otter.jpg',
  'Butterfly': '/assets/facts/butterfly.jpg',
  'Starfish': '/assets/facts/starfish.jpg',
  'Hummingbird': '/assets/facts/hummingbird.jpg',
  'Alpaca': '/assets/facts/alpaca.jpg',
  'Armadillo': '/assets/facts/armadillo.jpg',
  'Pufferfish': '/assets/facts/pufferfish.jpg',
  'Tortoise': '/assets/facts/tortoise.jpg',
  'Swift': '/assets/facts/swift.jpg',
  'Deer': '/assets/facts/deer.jpg',
  'Goat': '/assets/facts/goat.jpg',
  'Magpie': '/assets/facts/magpie.jpg',
  'Humpback Whale': '/assets/facts/humpback-whale.jpg',
  'Lemur': '/assets/facts/lemur.jpg',
  'Kangaroo': '/assets/facts/kangaroo.jpg',
  'Honeybee': '/assets/facts/honeybee.jpg',
  'Honey Bee': '/assets/facts/honeybee.jpg',
  'Lyrebird': '/assets/facts/lyrebird.jpg',
  'Mimic Octopus': '/assets/facts/mimic-octopus.jpg',
  'Cricket': '/assets/facts/cricket.jpg',
  'Green Sea Turtle': '/assets/facts/green-sea-turtle.jpg',
  'Common House Spider': '/assets/facts/common-house-spider.jpg',
  'Mayfly': '/assets/facts/mayfly.jpg',
  'Kangaroo Rat': '/assets/facts/kangaroo-rat.jpg',
  'Sphynx Cat': '/assets/facts/sphynx-cat.jpg',
  'Sea Turtles': '/assets/facts/sea-turtles.jpg',
  'Box Turtle': '/assets/facts/box-turtle.jpg',
  'California Sea Lion': '/assets/facts/california-sea-lion.jpg',
  'Owl': '/assets/facts/owl.jpg',
  'Reindeer': '/assets/facts/reindeer.jpg',
  'Chicken': '/assets/facts/chicken.jpg',
  'Cheetah': '/assets/facts/cheetah.jpg',
  'Tamarin Monkeys': '/assets/facts/tamarin-monkeys.jpg',
  'Red-footed Booby': '/assets/facts/red-footed-booby.jpg',
  "Wallace's Flying Frog": '/assets/facts/wallaces-flying-frog.jpg',
  'Gentoo and Adélie Penguin': '/assets/facts/penguin.jpg',
  'Capybara': '/assets/facts/capybara.jpg',
  'Sea Sponge': '/assets/facts/sea-sponge.jpg',
  'Pistol Shrimp': '/assets/facts/pistol-shrimp.jpg',
  'Blobfish': '/assets/facts/blobfish.jpg',
  'Bombardier Beetle': '/assets/facts/bombardier-beetle.jpg',
  'Box Jellyfish': '/assets/facts/box-jellyfish.jpg',
  'Cuban Tree Frog': '/assets/facts/cuban-tree-frog.jpg',
  'Hagfish': '/assets/facts/hagfish.jpg',
  'Hairy Frog': '/assets/facts/hairy-frog.jpg',
  'Pen-tailed Tree Shrew': '/assets/facts/pen-tailed-tree-shrew.jpg',
  'Kookaburra': '/assets/facts/kookaburra.jpg',
  'Electric Eel': '/assets/facts/electric-eel.jpg',
  'Wandering Albatross': '/assets/facts/wandering-albatross.jpg',
  'Woodpecker': '/assets/facts/woodpecker.jpg',
  'Bar-Tailed Godwit': '/assets/facts/bar-tailed-godwit.jpg',
  'Peregrine Falcon': '/assets/facts/peregrine-falcon.jpg',
  'Naked Mole Rat': '/assets/facts/naked-mole-rat.jpg',
  'Anglerfish': '/assets/facts/anglerfish.jpg',
  'Sea Cucumber': '/assets/facts/sea-cucumber.jpg',
  'Ocean Sunfish': '/assets/facts/ocean-sunfish.jpg',
  'Giant Squid': '/assets/facts/giant-squid.jpg',
  'Tuatara': '/assets/facts/tuatara.jpg',
  'American Alligator': '/assets/facts/american-alligator.jpg',
  'Draco Lizard': '/assets/facts/draco-lizard.jpg',
  'Star-Nosed Mole': '/assets/facts/star-nosed-mole.jpg',
  'Bat': '/assets/facts/bat.jpg',
  'Elephant Seal': '/assets/facts/elephant-seal.jpg',
  'Basenji': '/assets/facts/basenji.jpg',
  'Alligator': '/assets/facts/american-alligator.jpg',
  'Vulture': '/assets/facts/vulture.jpg',
  'Dung Beetle': '/assets/facts/dung-beetle.jpg',
  'Sperm Whale': '/assets/facts/sperm-whale.jpg',
  'Vampire Bat': '/assets/facts/vampire-bat.jpg',
  'Firefly': '/assets/facts/firefly.jpg',
  'Quokka': '/assets/facts/quokka.jpg',
  'Shoebill': '/assets/facts/shoebill.jpg',
  'Leafy Sea Dragon': '/assets/facts/leafy-sea-dragon.jpg',
  'Thorny Devil': '/assets/facts/thorny-devil.jpg',
  'Glass Frog': '/assets/facts/glass-frog.jpg',
  'Meerkat': '/assets/facts/meerkat.jpg',
  'Secretary Bird': '/assets/facts/secretary-bird.jpg',
  'Vampire Squid': '/assets/facts/vampire-squid.jpg',
  'Gharial': '/assets/facts/gharial.jpg',
  'Aye-aye': '/assets/facts/aye-aye.jpg',
  'Toco Toucan': '/assets/facts/toco-toucan.jpg',
  'Beagle': '/assets/facts/beagle.jpg',
  'Red Fox': '/assets/facts/red-fox.jpg',
  'Giant Manta Ray': '/assets/facts/giant-manta-ray.jpg',
  'Frilled-necked Lizard': '/assets/facts/frilled-necked-lizard.jpg',
  'Slow Loris': '/assets/facts/slow-loris.jpg',
};

// Per-fact overrides, keyed by fact id - takes priority over ANIMAL_IMAGES.
// Use this whenever two facts share the same animal, so each fact still gets
// its own distinct photo instead of looking like duplicate content in the feed.
//
// Since 2026-08-03 this has become the default landing spot for every new
// fact's photo, not just repeat-animal overrides - the hard rule on this site
// is no two facts ever show the same image. Keying by fact id instead of
// ANIMAL_IMAGES's animal name enforces that automatically: a second fact
// about an animal gets no photo (falls back to the hero image) unless it has
// its own explicit id entry here, instead of silently inheriting whatever
// photo the first fact for that animal used.
const FACT_IMAGES = {
  247: '/assets/facts/penguin-2.jpg', // "Emperors Rarely Reunite"
  248: '/assets/facts/penguin-3.jpg', // "Four Months Without Food"
  249: '/assets/facts/crocodile.jpg', // "Closer to Birds Than Lizards"
  250: '/assets/facts/crocodile-2.jpg', // "Barely Eating Saved Them"
  251: '/assets/facts/tiger.jpg', // "A Species That Fits in a Town"
  252: '/assets/facts/tiger-2.jpg', // "Striped to the Skin"
  253: '/assets/facts/rhino.jpg', // "Horn Is Not Bone or Ivory"
  254: '/assets/facts/rhino-2.jpg', // "It Grows Back"
  255: '/assets/facts/sloth-3.jpg', // "The Weekly Trip That Kills Them"
  256: '/assets/facts/sloth-4.jpg', // "The Fur Is an Ecosystem"
  257: '/assets/facts/fennec-fox.jpg',
  258: '/assets/facts/fennec-fox-2.jpg',
  259: '/assets/facts/fennec-fox-3.jpg',
  260: '/assets/facts/green-anaconda.jpg',
  261: '/assets/facts/green-anaconda-2.jpg',
  262: '/assets/facts/green-anaconda-3.jpg',
  263: '/assets/facts/blue-poison-dart-frog.jpg',
  264: '/assets/facts/blue-poison-dart-frog-2.jpg',
  265: '/assets/facts/blue-poison-dart-frog-3.jpg',
  266: '/assets/facts/victoria-crowned-pigeon.jpg',
  267: '/assets/facts/victoria-crowned-pigeon-2.jpg',
  268: '/assets/facts/victoria-crowned-pigeon-3.jpg',
  269: '/assets/facts/kiwi.jpg',
  270: '/assets/facts/greyhound.jpg',
  271: '/assets/facts/orangutan.jpg',
  272: '/assets/facts/sawfish.jpg',
  273: '/assets/facts/mudskipper.jpg',
  276: '/assets/facts/cassowary.jpg',
  277: '/assets/facts/border-collie.jpg',
  278: '/assets/facts/pronghorn.jpg',
  279: '/assets/facts/lionfish.jpg',
  280: '/assets/facts/coconut-crab.jpg',
  281: '/assets/facts/shima-enaga.jpg',
  282: '/assets/facts/shima-enaga-2.jpg',
  283: '/assets/facts/shima-enaga-3.jpg',
  284: '/assets/facts/gaboon-viper.jpg',
  285: '/assets/facts/gaboon-viper-2.jpg',
  286: '/assets/facts/gaboon-viper-3.jpg',
  274: '/assets/facts/wolverine.jpg',
  275: '/assets/facts/wolverine-2.jpg',
  239: '/assets/facts/cat-9.jpg',
  240: '/assets/facts/cat-10.jpg',
  241: '/assets/facts/lion.jpg',
  242: '/assets/facts/lion-2.jpg',
  243: '/assets/facts/elephant-3.jpg',
  244: '/assets/facts/elephant-4.jpg',
  245: '/assets/facts/honeybee-3.jpg',
  246: '/assets/facts/honeybee-4.jpg',
  151: '/assets/facts/flamingo-3.jpg', // "The One-Leg Trick"; id 21 keeps flamingo.jpg
  81: '/assets/facts/chameleon-2.jpg', // "Color Talk, Not Camouflage"
  88: '/assets/facts/chameleon-3.jpg', // "Chameleon Color Change"
  138: '/assets/facts/chameleon-4.jpg', // "More G's Than a Fighter Jet"
  63: '/assets/facts/dolphin-2.jpg', // "Mirror Test Passers"
  79: '/assets/facts/dolphin-3.jpg', // "Secrets in the Sound"
  105: '/assets/facts/dolphin-4.jpg', // "Glowing Oceans, No Joke!"
  49: '/assets/facts/cat-3.jpg', // "Meow is Mostly for Us"
  50: '/assets/facts/cat-6.jpg', // "Healing Purr?"
  51: '/assets/facts/cat-7.jpg', // "The Righting Reflex"
  52: '/assets/facts/cat-5.jpg', // "Lactose Intolerant Cats"
  53: '/assets/facts/cat-4.jpg', // "Two-Thirds Downtime"
  145: '/assets/facts/cat-2.jpg', // "Can't Taste Sugar"
  148: '/assets/facts/cat-8.jpg', // "Whiskers Check the Gap"
  45: '/assets/facts/dog-6.jpg', // "Unique Nose Prints"
  46: '/assets/facts/dog-4.jpg', // "Dogs Dream Too"
  47: '/assets/facts/dog-2.jpg', // "Touch, Smell and Taste First"
  48: '/assets/facts/dog-5.jpg', // "Mental Fatigue is Real"
  147: '/assets/facts/dog-3.jpg', // "A Nose Built Different"
  83: '/assets/facts/octopus-2.jpg', // "Silent Signals"
  95: '/assets/facts/octopus-3.jpg', // "Octopus Ink Defense"
  102: '/assets/facts/octopus-4.jpg', // "Three-Heart Crew"
  54: '/assets/facts/parrot-2.jpg', // "Parrots Need Company"
  58: '/assets/facts/parrot-3.jpg', // "Mimics Everything"
  40: '/assets/facts/bearded-dragon-2.jpg', // "The Wave of Peace"
  119: '/assets/facts/bearded-dragon-3.jpg', // "Temperature-Switch Dragons"
  86: '/assets/facts/tardigrade-2.jpg', // "The Tardigrade Resilience"
  166: '/assets/facts/tardigrade-3.jpg', // "The Radiation Shield Protein"
  108: '/assets/facts/pangolin-2.jpg', // "Armored Squirrels"
  167: '/assets/facts/pangolin-3.jpg', // "A Tongue Nearly as Long as Its Body"
  195: '/assets/facts/pangolin-4.jpg', // "The Stomach That Chews"
  196: '/assets/facts/pangolin-5.jpg', // "70 Million Insects a Year"
  197: '/assets/facts/pangolin-6.jpg', // "Armor Written Into the Genome"
  198: '/assets/facts/pangolin-7.jpg', // "A DNA Tag for Every Species"
  199: '/assets/facts/pangolin-8.jpg', // "Fingernails, Basically"
  200: '/assets/facts/jellyfish-2.jpg', // "Famous Under the Wrong Name"
  201: '/assets/facts/jellyfish-3.jpg', // "A 72-Hour Rebuild"
  202: '/assets/facts/jellyfish-4.jpg', // "Cells That Switch Careers"
  203: '/assets/facts/jellyfish-5.jpg', // "Smaller Than a Pinky Nail"
  204: '/assets/facts/jellyfish-6.jpg', // "A Silent Worldwide Invasion"
  205: '/assets/facts/dolphin-5.jpg', // "Names on a Watchlist"
  206: '/assets/facts/dolphin-6.jpg', // "Half the Conversation"
  207: '/assets/facts/dolphin-7.jpg', // "The Deliberately Imperfect Copy"
  208: '/assets/facts/dolphin-8.jpg', // "Your Name, Minus the Voice"
  209: '/assets/facts/dolphin-9.jpg', // "Mirror Babies"
  99: '/assets/facts/clownfish-2.jpg', // "Stinging Roommates"
  118: '/assets/facts/clownfish-3.jpg', // "Shrimp Anemone Alliance"
  113: '/assets/facts/narwhal-2.jpg', // "One Big Sensitive Tooth"
  109: '/assets/facts/cuttlefish-2.jpg', // "Living Pixels"
  163: '/assets/facts/starfish-2.jpg', // "Stomach on the Outside"
  152: '/assets/facts/seahorse-2.jpg', // "No Stomach, No Problem"
  161: '/assets/facts/mantis-shrimp-2.jpg', // "Couples Who Share a Burrow"
  171: '/assets/facts/hummingbird-2.jpg', // "Backing Up on the Cheap"
  97: '/assets/facts/african-grey-parrot-2.jpg', // "Birds Can Count"
  153: '/assets/facts/owl-2.jpg', // "Wings Built for Silence"
  154: '/assets/facts/chicken-2.jpg', // "Who's Who in the Flock"
  60: '/assets/facts/crow-2.jpg', // "Crow Tool Users"
  164: '/assets/facts/komodo-dragon-2.jpg', // "A Bite That Won't Clot"
  116: '/assets/facts/gecko-2.jpg', // "Climbing the Walls"
  165: '/assets/facts/box-turtle-2.jpg', // "Sealed Shut Like a Box"
  174: '/assets/facts/american-alligator-2.jpg', // "Spare Teeth on Standby"
  168: '/assets/facts/axolotl-2.jpg', // "Forever Young, Forever Underwater"
  82: '/assets/facts/honeybee-2.jpg', // "The Tiny Yet Mighty"
  91: '/assets/facts/leafcutter-ant-2.jpg', // "Ancient Ant Farmers"
  92: '/assets/facts/sloth-2.jpg', // "Sloth Speedsters"
  159: '/assets/facts/honey-badger-2.jpg', // "The Loose-Skin Escape Artist"
  55: '/assets/facts/rabbit-2.jpg', // "Rabbits Need Exercise"
  112: '/assets/facts/hedgehog-2.jpg', // "Panic Pincushions"
  158: '/assets/facts/cheetah-2.jpg', // "Zero to 45 in 2.5 Seconds"
  156: '/assets/facts/giraffe-2.jpg', // "Same Neck Bones as You"
  157: '/assets/facts/koala-2.jpg', // "Fingerprints Like Ours"
  173: '/assets/facts/capybara-2.jpg', // "Built-In Snorkel Mode"
  172: '/assets/facts/red-panda-2.jpg', // "A Thumb That Isn't a Thumb"
  160: '/assets/facts/sphynx-cat-2.jpg', // "Same Gene, Different Hairdo"
  170: '/assets/facts/platypus-2.jpg', // "Milk Without Nipples"
  76: '/assets/facts/elephant-2.jpg', // "Hear With Their Feet"
  155: '/assets/facts/zebra-2.jpg', // "Stripes That Repel Flies"
  162: '/assets/facts/sea-otter-2.jpg', // "A Million Hairs Per Inch"
  169: '/assets/facts/wolf-2.jpg', // "The Alpha Wolf Myth"
  150: '/assets/facts/guinea-pig-2.jpg', // "The Vitamin C Shortage"
  98: '/assets/facts/wood-frog-2.jpg', // "Quacks Like a Duck, Hops Like a Frog"
  210: '/assets/facts/giraffe-3.jpg', // "They Hum After Dark"
  211: '/assets/facts/giraffe-4.jpg', // "Four Giraffes, Not One"
  212: '/assets/facts/giraffe-5.jpg', // "Drinking Is Harder Than It Looks"
  213: '/assets/facts/giraffe-6.jpg', // "The Eighth Neck Bone"
  214: '/assets/facts/naked-mole-rat-2.jpg', // "A Queen Ruling by Smell"
  215: '/assets/facts/naked-mole-rat-3.jpg', // "Eighteen Minutes, No Oxygen"
  216: '/assets/facts/naked-mole-rat-4.jpg', // "Every Colony Has an Accent"
  217: '/assets/facts/naked-mole-rat-5.jpg', // "The Only Animal That Ignores Acid"
  218: '/assets/facts/clownfish-4.jpg', // "Shrinking to Survive a Heatwave"
  219: '/assets/facts/clownfish-5.jpg', // "The Queue Nobody Jumps"
  220: '/assets/facts/clownfish-6.jpg', // "A Trojan Horse in Slime"
  221: '/assets/facts/clownfish-7.jpg', // "The Thirty-Year Clownfish"
  222: '/assets/facts/wood-frog-3.jpg', // "Alaska Rewrote the Limit"
  223: '/assets/facts/wood-frog-4.jpg', // "Two Antifreezes, Two Schedules"
  224: '/assets/facts/wood-frog-5.jpg', // "Heart First, Legs Later"
  225: '/assets/facts/wood-frog-6.jpg', // "The Frog That Reaches the Arctic"
  226: '/assets/facts/seahorse-3.jpg', // "Dad's Pouch Plays Placenta"
  227: '/assets/facts/seahorse-4.jpg', // "He Traded Away Immune Parts"
  228: '/assets/facts/seahorse-5.jpg', // "A Pouch Full of Seawater"
  229: '/assets/facts/dung-beetle-2.jpg', // "The Dance Before the Roll"
  230: '/assets/facts/dung-beetle-3.jpg', // "Forty Seconds Versus Two Minutes"
  231: '/assets/facts/dung-beetle-4.jpg', // "Tested in a Planetarium"
  232: '/assets/facts/hagfish-2.jpg', // "Seven Times Its Own Volume"
  233: '/assets/facts/slow-loris-2.jpg', // "Venom in Two Parts"
  234: '/assets/facts/slow-loris-3.jpg', // "Built Like the Cat Allergen"
  235: '/assets/facts/slow-loris-4.jpg', // "Teeth Clipped for Sale"
  236: '/assets/facts/chicken-3.jpg', // "The Brain Hides in Back"
  237: '/assets/facts/chicken-4.jpg', // "Killed by a Missing Syringe"
  238: '/assets/facts/chicken-5.jpg', // "Running Headless Is Real"
  287: '/assets/facts/kakapo.jpg',
  288: '/assets/facts/maine-coon.jpg',
  289: '/assets/facts/okapi.jpg',
  290: '/assets/facts/nudibranch.jpg',
  291: '/assets/facts/gila-monster.jpg',
  292: '/assets/facts/kea-2.jpg',
  293: '/assets/facts/dachshund.jpg',
  294: '/assets/facts/pygmy-marmoset.jpg',
  295: '/assets/facts/barreleye-fish.jpg',
  296: '/assets/facts/basilisk-lizard.jpg',
  297: '/assets/facts/discus.jpg',
  298: '/assets/facts/cardinal-tetra.jpg',
  299: '/assets/facts/molly.jpg',
  300: '/assets/facts/flying-squirrel.jpg',
  301: '/assets/facts/platy.jpg',
  302: '/assets/facts/swordtail.jpg',
  303: '/assets/facts/zebra-danio.jpg',
  304: '/assets/facts/bristlenose-pleco.jpg',
  305: '/assets/facts/cherry-shrimp.jpg',
  306: '/assets/facts/amano-shrimp.jpg',
  307: '/assets/facts/ghost-shrimp.jpg',
  308: '/assets/facts/zebra-finch.jpg',
  309: '/assets/facts/parrotlet.jpg',
  310: '/assets/facts/fancy-rat.jpg',
  311: '/assets/facts/fancy-mouse.jpg',
  312: '/assets/facts/red-footed-tortoise.jpg',
  313: '/assets/facts/garter-snake.jpg',
  314: '/assets/facts/rosy-boa.jpg',
  315: '/assets/facts/orca.jpg',
  316: '/assets/facts/pembroke-welsh-corgi.jpg',
  317: '/assets/facts/short-beaked-echidna.jpg',
  318: '/assets/facts/atlantic-puffin.jpg',
  319: '/assets/facts/king-cobra.jpg',
  320: '/assets/facts/satin-bowerbird.jpg',
  321: '/assets/facts/siamese-cat.jpg',
  322: '/assets/facts/aardvark.jpg',
  323: '/assets/facts/dumbo-octopus.jpg',
  324: '/assets/facts/horned-lizard.jpg',
  325: '/assets/facts/bald-eagle.jpg',
  326: '/assets/facts/bald-eagle-2.jpg',
  327: '/assets/facts/bald-eagle-3.jpg',
  328: '/assets/facts/bald-eagle-4.jpg',
  329: '/assets/facts/hoatzin.jpg',
  330: '/assets/facts/norwegian-lundehund.jpg',
  331: '/assets/facts/numbat.jpg',
  332: '/assets/facts/yeti-crab.jpg',
  333: '/assets/facts/marine-iguana.jpg',
  334: '/assets/facts/tasmanian-devil.jpg', // "Biggest Bite for Its Size"
  335: '/assets/facts/matamata.jpg', // "Sucks First, Asks Later"
  336: '/assets/facts/potoo.jpg', // "Watching With Eyes Shut"
  337: '/assets/facts/shiba-inu-2.jpg', // "A Sound All Its Own"
  338: '/assets/facts/frilled-shark.jpg', // "Three and a Half Year Wait"
  339: '/assets/facts/serval-ears.jpg', // "Ears Tuned to Mice"
  340: '/assets/facts/serval-leap.jpg', // "Plucks Birds From the Air"
  341: '/assets/facts/serval-burrow.jpg', // "An Arm Down the Burrow"
  342: '/assets/facts/sea-otter-3.jpg', // "Pockets Under the Arms"
  343: '/assets/facts/hoopoe.jpg', // "The Rotten Nest Trick"
  344: '/assets/facts/manx-cat.jpg', // "Born Without a Tail"
  345: '/assets/facts/maned-wolf.jpg', // "Not Really a Wolf"
  346: '/assets/facts/sarcastic-fringehead.jpg', // "Mouth to Mouth Combat"
  347: '/assets/facts/velvet-worm.jpg', // "The Slime Cannon"
  348: '/assets/facts/tawny-frogmouth.jpg', // "The Branch That Wasn't"
  349: '/assets/facts/xoloitzcuintli.jpg', // "The Aztec Dog That Survived"
  350: '/assets/facts/binturong.jpg', // "The Scent of Popcorn"
  351: '/assets/facts/blue-tongued-skink.jpg', // "A Tongue Built to Startle"
  352: '/assets/facts/immortal-jellyfish.jpg', // "Spare Copies of the Repair Kit"
  93: '/assets/facts/common-house-spider-2.jpg', // "Not Here for the Heat"
  353: '/assets/facts/rabbit-3.jpg', // "The Binky"
  354: '/assets/facts/common-house-spider.jpg', // "Eats Its Own Web"
  355: '/assets/facts/flamingo-2.jpg', // "Head-Flagging Season"
  356: '/assets/facts/kea.jpg', // "The Only Alpine Parrot"
  357: '/assets/facts/shiba-inu.jpg', // "The Cat-Dog"
  // Own photos for the 11 facts that were borrowing another page's (2026-10-18).
  1: '/assets/facts/octopus-5.jpg', // "Three Hearts of Love"
  2: '/assets/facts/hedgehog-3.jpg', // "Spiny Situation"
  5: '/assets/facts/bearded-dragon-4.jpg', // "Mood Ring Lizards"
  6: '/assets/facts/rabbit-4.jpg', // "Purring Bunnies"
  14: '/assets/facts/axolotl-3.jpg', // "Axolotl Superpowers"
  39: '/assets/facts/ball-python.jpg', // "Famous Meal Skippers"
  41: '/assets/facts/leopard-gecko.jpg', // "Tail Fat Reserves"
  42: '/assets/facts/crested-gecko.jpg', // "Rediscovered in 1994"
  56: '/assets/facts/guinea-pig-3.jpg', // "Guinea Pigs Are Social"
  72: '/assets/facts/cuttlefish-3.jpg', // "Stealth Stripes"
  149: '/assets/facts/boa-constrictor.jpg', // "The Blood-Stopping Squeeze"
};

function imageFor(fact) {
  const path = FACT_IMAGES[fact.id] || ANIMAL_IMAGES[fact.animal];
  return path ? `https://beastlyfacts.com${path}` : FALLBACK_IMAGE;
}

// Mirrors PHOTO_CREDITS in src/lib/data/photoCredits.js (author and license
// only): the CC BY and CC BY-SA photos must be credited wherever they are shown,
// and the feed shows them as the item enclosure. Keep in sync by hand, same as
// FACT_IMAGES above.
const PHOTO_CREDITS = {
  '/assets/facts/flamingo.jpg': 'JeffreyGammon, CC BY 4.0',
  '/assets/facts/flamingo-2.jpg': 'Giles Laurent, CC BY-SA 4.0',
  '/assets/facts/quokka.jpg': 'Pikuan, CC BY-SA 3.0',
  '/assets/facts/shoebill.jpg': 'Bob Owen, CC BY 2.0',
  '/assets/facts/leafy-sea-dragon.jpg': 'James Rosindell, CC BY-SA 4.0',
  '/assets/facts/thorny-devil.jpg': 'Bäras, CC BY-SA 3.0',
  '/assets/facts/glass-frog.jpg': 'Mauricio Rivera Correa, CC BY-SA 2.5',
  '/assets/facts/coconut-crab.jpg': 'Drew Avery, CC BY 2.0',
};

// " Photo: <author>, <license>." for a fact whose photo needs it, else "".
function creditFor(fact) {
  const credit = PHOTO_CREDITS[FACT_IMAGES[fact.id] || ANIMAL_IMAGES[fact.animal]];
  return credit ? ` Photo: ${credit}.` : '';
}

function cdata(value) {
  return `<![CDATA[${String(value).replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

function rssDocument(title, link, description, itemsXml) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${title}</title>
    <link>${link}</link>
    <description>${description}</description>${itemsXml}
  </channel>
</rss>`;
}

async function buildFactsFeed(request) {
  const factsRes = await fetch(new URL('/facts.json', request.url));
  const { facts } = await factsRes.json();

  const slotIndex = Math.floor((Date.now() - EPOCH) / SLOT_MS);

  const items = [];
  for (let i = 0; i < WINDOW; i++) {
    const slot = slotIndex - i;
    const idx = ((slot % facts.length) + facts.length) % facts.length;
    const fact = facts[idx];
    const pubDate = new Date(EPOCH + slot * SLOT_MS);
    items.push({ fact, pubDate, guid: `beastlyfacts-slot-${slot}-fact-${fact.id}` });
  }

  const itemsXml = items
    .map(
      ({ fact, pubDate, guid }) => `
    <item>
      <title>${cdata(`${fact.emoji} ${fact.animal}: ${fact.title}. ${fact.fact}`)}</title>
      <link>https://beastlyfacts.com/facts/${slugify(fact.title)}/</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <description>${cdata(`${fact.emoji} ${fact.fact}${creditFor(fact)}`)}</description>
      <enclosure url="${imageFor(fact)}" type="image/jpeg" length="0" />
    </item>`
    )
    .join('');

  return rssDocument(
    'BeastlyFacts - Daily Animal Fact',
    'https://beastlyfacts.com/facts/',
    'A new wild animal fact, every day.',
    itemsXml
  );
}

// Chronicles live at /chronicles/<id>/<part>/, not /blog/<slug>/ - excluded by
// slug prefix, same convention as prerender.mjs/generate-sitemap.js. They come
// through /articles.json in their own `chronicles` array and are merged back
// into the feed below.

// Mirrors CHRONICLES_SERIES in src/lib/chronicles.js / CHRONICLES_PREFIXES in
// prerender.mjs & generate-sitemap.js - stories are matched by slug prefix.
const CHRONICLES_PREFIXES = { dex: 'chronicles-of-dex', otis: 'chronicles-of-otis' };

// Assigns each chronicle its live-site link by computing its 1-based position
// within its series, sorted by date - mirrors groupChronicles() in
// src/lib/chronicles.js so RSS links always match the part number the site itself
// renders. Must run over the FULL list before any date-window slicing, or a
// story could be numbered using only a partial set of its series' parts.
function withChroniclesLinks(chronicles) {
  // Defensive dedupe: a slug should appear once, and numbering silently
  // shifts for the whole series if one ever appears twice.
  const seenSlugs = new Set();
  const deduped = chronicles.filter(s => {
    if (seenSlugs.has(s.slug)) return false;
    seenSlugs.add(s.slug);
    return true;
  });

  const items = [];
  for (const [id, prefix] of Object.entries(CHRONICLES_PREFIXES)) {
    const seriesStories = deduped
      .filter(s => s.slug.startsWith(prefix))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    seriesStories.forEach((s, i) => {
      items.push({
        ...s,
        link: `https://beastlyfacts.com/chronicles/${id}/${i + 1}/`,
        guid: `beastlyfacts-chronicle-${s.slug}`,
      });
    });
  }
  return items;
}

async function buildArticlesFeed(request) {
  const mdxRes = await fetch(new URL('/articles.json', request.url));
  const { articles: mdxArticles, chronicles: mdxChronicles = [] } = await mdxRes.json();

  const blogItems = mdxArticles.map(a => ({
    ...a,
    link: `https://beastlyfacts.com/blog/${a.slug}/`,
    guid: `beastlyfacts-post-${a.slug}`,
  }));
  const chronicleItems = withChroniclesLinks(mdxChronicles);

  const merged = [...blogItems, ...chronicleItems]
    .filter(a => a.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, ARTICLES_WINDOW);

  const itemsXml = merged
    .map(({ title, excerpt, date, image, link, guid }) => {
      const imageUrl = image
        ? (image.startsWith('http') ? image : `https://beastlyfacts.com${image}`)
        : FALLBACK_IMAGE;
      return `
    <item>
      <title>${cdata(excerpt ? `${title}. ${excerpt}` : title)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <description>${cdata(excerpt)}</description>
      <enclosure url="${imageUrl}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join('');

  return rssDocument(
    'BeastlyFacts - Latest Articles',
    'https://beastlyfacts.com/blog/',
    'New care guides, fun facts articles, blog posts, and Chronicles episodes from BeastlyFacts.',
    itemsXml
  );
}

// Beehiiv's magic-link signup redirects the visitor here once the address is
// recorded (see BeehiivSubscribe.jsx). Push a one-line alert to ntfy, the same
// channel the comment moderation alerts use (supabase/schema.sql), then send
// the visitor on to the homepage, which shows a thank-you toast on
// ?subscribed=1. No personal data is involved: Beehiiv does not pass the email
// through the redirect, and the alert says only that someone signed up.
//
// NTFY_SUBSCRIBER_NOTIF is a Cloudflare Pages environment variable, not a
// repo value, so the topic name stays private. With it unset the route still
// redirects and simply sends nothing.
async function notifySubscriber(env) {
  const topic = env?.NTFY_SUBSCRIBER_NOTIF;
  if (!topic) return;
  try {
    await fetch('https://ntfy.sh', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        topic,
        title: 'New Critter Digest subscriber',
        message: 'Someone just signed up through beastlyfacts.com.',
        tags: ['newspaper'],
        priority: 3,
        click: 'https://app.beehiiv.com/',
      }),
    });
  } catch {
    // A failed alert must never break the visitor's redirect.
  }
}


// POST /api/contact  ->  { ok } | { error }
//
// The contact form on /contact/ posts here, and the message goes to Mike as an
// ntfy push, the same channel the subscriber and comment alerts use. Nothing is
// stored: the push is the only copy, which is what the privacy policy says.
//
// The topic comes from NTFY_CONTACT_NOTIF, falling back to
// NTFY_SUBSCRIBER_NOTIF, both Cloudflare Pages environment variables rather
// than repo values: an ntfy topic can be read by anyone who knows its name, so
// it must never reach the browser. With neither set the route answers 503 and
// the form tells the visitor to email instead.
//
// Spam checks, cheap and silent: a hidden "website" field that people never
// see and bots fill in, and a minimum time on the page before sending. Either
// one tripping gets a normal-looking success, so a bot learns nothing.
const CONTACT_LIMITS = { name: 80, email: 120, message: 2000, minMessage: 10, minMs: 3000 };
// Why the person wrote, from the form's selector. Anything not on this list
// falls back to the general label, so a crafted value never reaches the push.
const CONTACT_REASONS = { general: 'Message', error: 'Error report', review: 'Review offer' };

async function handleContact(request, env) {
  if (request.method !== 'POST') return storeJson({ error: 'Method not allowed.' }, 405);
  let body;
  try {
    body = await request.json();
  } catch {
    return storeJson({ error: 'Could not read the form.' }, 400);
  }
  const name = String(body?.name || '').trim();
  const email = String(body?.email || '').trim();
  const message = String(body?.message || '').trim();
  const reason = CONTACT_REASONS[String(body?.reason || '')] || CONTACT_REASONS.general;

  if (String(body?.website || '') !== '' || Number(body?.elapsed) < CONTACT_LIMITS.minMs) {
    return storeJson({ ok: true });
  }
  if (!name || name.length > CONTACT_LIMITS.name) return storeJson({ error: 'Please add your name.' }, 400);
  if (email && (email.length > CONTACT_LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return storeJson({ error: 'That email address does not look right.' }, 400);
  }
  if (message.length < CONTACT_LIMITS.minMessage || message.length > CONTACT_LIMITS.message) {
    return storeJson({ error: `Messages run ${CONTACT_LIMITS.minMessage} to ${CONTACT_LIMITS.message} characters.` }, 400);
  }

  // Turnstile, checked here because nothing else will: the library form's
  // token is verified by Supabase, this one has only us. Skipped entirely
  // until TURNSTILE_SECRET_KEY is set, so the form keeps working while the
  // widget (VITE_TURNSTILE_SITE_KEY) is still off. With the secret set, a
  // missing or bad token is refused with a sentence about the box, and a
  // siteverify outage is treated as a pass rather than a dead form.
  if (env?.TURNSTILE_SECRET_KEY) {
    const token = String(body?.captcha || '');
    if (!token) return storeJson({ error: 'Tick the verification box below, then try again.' }, 400);
    try {
      const form = new FormData();
      form.append('secret', env.TURNSTILE_SECRET_KEY);
      form.append('response', token);
      const ip = request.headers.get('cf-connecting-ip');
      if (ip) form.append('remoteip', ip);
      const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
      const result = await verify.json().catch(() => null);
      if (result && result.success === false) {
        return storeJson({ error: 'The verification did not pass. Tick the box again and resend.' }, 400);
      }
    } catch {
      // siteverify unreachable: let the honeypot and timing checks carry it.
    }
  }

  const topic = env?.NTFY_CONTACT_NOTIF || env?.NTFY_SUBSCRIBER_NOTIF;
  if (!topic) return storeJson({ error: 'The form is not set up yet.' }, 503);

  try {
    const res = await fetch('https://ntfy.sh', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        topic,
        title: `${reason}: ${name}`,
        message: `${email ? `From: ${email}\n\n` : 'No email given.\n\n'}${message}`,
        tags: ['envelope'],
        priority: 4,
        ...(email && { click: `mailto:${email}` }),
      }),
    });
    if (!res.ok) throw new Error(`ntfy ${res.status}`);
  } catch {
    return storeJson({ error: 'The message did not go through.' }, 502);
  }
  return storeJson({ ok: true });
}

// ===========================================================================
// Care package storefront: Stripe Checkout, the purchase webhook, downloads
// ===========================================================================
// Three routes under /api/care-packages/, added to public/_routes.json so they
// reach this Worker at all. Everything else on the site is a static file and
// never gets here.
//
// Why they live in this file rather than in a functions/ directory: Cloudflare
// Pages runs either advanced mode (this _worker.js) or a functions/ folder,
// never both, and a functions/ directory in a project that ships a _worker.js
// is silently ignored. This site has been in advanced mode since the RSS feeds
// were added, so this is where server code goes.
//
// The consequence is that nothing here can import anything: public/ is copied
// verbatim into dist by Vite and never bundled, which is the same constraint
// the ANIMAL_IMAGES note near the top of this file is about. So no
// @supabase/supabase-js and no stripe package - Stripe's REST API and
// Supabase's REST, Auth and Storage APIs are called with plain fetch, which
// they are all designed to support - and the small slice of the catalog these
// routes need is mirrored below by hand.
//
// Environment variables (Cloudflare Pages -> Settings -> Variables and
// Secrets). Full setup, including which values are Sandbox and which are live,
// is in docs/STOREFRONT.md:
//   STRIPE_SECRET_KEY           secret, sk_test_... on the Sandbox
//   STRIPE_WEBHOOK_SECRET       secret, whsec_... for THIS endpoint
//   SUPABASE_URL                the project URL, same one the site uses
//   SUPABASE_SERVICE_ROLE_KEY   secret, sb_secret_... - never in the bundle

// Mirrors src/lib/data/carePackages.js. Kept in sync by hand for the reason
// above, the same deal as ANIMAL_IMAGES: when a price id changes, or a
// `version` is bumped because a corrected edition was uploaded, change it in
// BOTH files.
//
// A package missing here cannot be bought even if the catalog says it can,
// which is the safe direction for the two to disagree in. All 20 are here and
// all 20 carry storefront: 'stripe' and a live price id, so the two agree; a
// package added to the catalog and forgotten here gets a clean 404 from checkout rather than a sale
// nobody can fulfil.
//
// checkout prefers priceIdLive and falls back to priceIdSandbox, so a
// deployment holding a live secret key and a package with only a sandbox id
// gets a clean Stripe error rather than a broken sale. Only hamster was ever
// sold in the Sandbox, so it is the only entry with both.
const CARE_PACKAGE_STORE = {
  'bearded-dragon': {
    name: 'Bearded Dragon Care Package',
    edition: '4.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBp9qtY3Ob6vamuXMA6sD',
  },
  'leopard-gecko': {
    name: 'Leopard Gecko Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBs9qtY3Ob6vaOPtdFLAt',
  },
  goldfish: {
    name: 'Goldfish Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBu9qtY3Ob6vaU6oDSTyD',
  },
  axolotl: {
    name: 'Axolotl Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBw9qtY3Ob6vaRVFVm391',
  },
  budgie: {
    name: 'Budgie Care Package',
    edition: '3.0',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBy9qtY3Ob6vaLv2cNMGc',
  },
  'crested-gecko': {
    name: 'Crested Gecko Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENC19qtY3Ob6vasiNmiLfX',
  },
  'guinea-pig': {
    name: 'Guinea Pig Care Package',
    edition: '3.0',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENC39qtY3Ob6vaks244qto',
  },
  lovebird: {
    name: 'Lovebird Care Package',
    edition: '3.0',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENC89qtY3Ob6vav2ARp6wq',
  },
  'russian-tortoise': {
    name: 'Russian Tortoise Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCB9qtY3Ob6vaTvVBMark',
  },
  'ball-python': {
    name: 'Ball Python Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCE9qtY3Ob6vajtYqePnI',
  },
  'betta-fish': {
    name: 'Betta Fish Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCG9qtY3Ob6vaxKLgeXwO',
  },
  hamster: {
    name: 'Hamster Care Package',
    edition: '3.0',
    priceIdSandbox: 'price_1UC9Up9qtY3Ob6vac8xRLEu2',
    priceIdLive: 'price_1UENBJ9qtY3Ob6vaJcPpuniM',
  },
  rabbit: {
    name: 'Rabbit Care Package',
    edition: '3.0',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCH9qtY3Ob6vaaasv4qjw',
  },
  tarantula: {
    name: 'Tarantula Care Package',
    edition: '3.0',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCK9qtY3Ob6vafJILVYIP',
  },
  // Live prices created 2026-10-01. Only the live ids exist; none of the three
  // was ever sold in the Sandbox.
  cockatiel: {
    name: 'Cockatiel Care Package',
    edition: '3.0',
    priceIdSandbox: '',
    priceIdLive: 'price_1ULwwQ9qtY3Ob6vaZoUuXLtw',
  },
  cockatoo: {
    name: 'Cockatoo Care Package',
    edition: '1.4',
    priceIdSandbox: '',
    priceIdLive: 'price_1ULwwY9qtY3Ob6vaVwNPPWLL',
  },
  'whites-tree-frog': {
    name: "White's Tree Frog Care Package",
    edition: '1.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1ULwwZ9qtY3Ob6vaXWw8eqo1',
  },
  'hognose-snake': {
    name: 'Hognose Snake Care Package',
    edition: '1.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UM5ZC9qtY3Ob6vagncB2NR6',
  },
  'gargoyle-gecko': {
    name: 'Gargoyle Gecko Care Package',
    edition: '1.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UM5ZE9qtY3Ob6va7nQlh94C',
  },
  'african-fat-tail': {
    name: 'African Fat-Tailed Gecko Care Package',
    edition: '1.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UM5ZF9qtY3Ob6vaVvMy9Fdr',
  },
};

// Short on purpose. The URL goes to one browser that is about to use it, so a
// long life buys nothing, and a signed URL is an unauthenticated link to a paid
// file for exactly as long as it is valid.
const SIGNED_URL_SECONDS = 300;
const CARE_PACKAGE_BUCKET = 'care-packages';

const storeJson = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

// One place that knows how to talk to PostgREST/Storage as the service role.
// The service key goes in both headers because Supabase's gateway reads apikey
// and PostgREST reads Authorization.
function supabaseFetch(env, path, init = {}) {
  return fetch(`${env.SUPABASE_URL}${path}`, {
    ...init,
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      'content-type': 'application/json',
      ...(init.headers || {}),
    },
  });
}

function hasSupabaseEnv(env) {
  return Boolean(env?.SUPABASE_URL && env?.SUPABASE_SERVICE_ROLE_KEY);
}

// ---------------------------------------------------------------------------
// POST /api/care-packages/checkout  ->  { url }
// ---------------------------------------------------------------------------
// Creates a hosted Stripe Checkout session and hands back the URL to send the
// buyer to. Nothing about the price comes from the request: the body carries a
// package id, the price id is looked up above, and the amount lives in Stripe.
// A request that could name its own price is a request that could name $0.00.
async function handleCarePackageCheckout(request, env) {
  if (!env?.STRIPE_SECRET_KEY) return storeJson({ error: 'Checkout is not configured.' }, 503);

  // Trimmed, because this value goes straight into a header and a secret pasted
  // into a dashboard field very often arrives with a trailing newline. An
  // invalid header value does not fail at Stripe, it fails when the Request is
  // constructed, which is a thrown TypeError rather than a response.
  const stripeKey = env.STRIPE_SECRET_KEY.trim();

  let body;
  try {
    body = await request.json();
  } catch {
    return storeJson({ error: 'Expected a JSON body.' }, 400);
  }

  const packageId = typeof body?.packageId === 'string' ? body.packageId : '';
  const pkg = CARE_PACKAGE_STORE[packageId];
  if (!pkg) return storeJson({ error: 'This package is not sold here.' }, 404);

  const priceId = pkg.priceIdLive || pkg.priceIdSandbox;
  if (!priceId) return storeJson({ error: 'This package has no price set up yet.' }, 409);

  // The request's own origin, not a hardcoded domain: the buyer has to come
  // back to whichever deployment they started from.
  const origin = new URL(request.url).origin;

  const form = new URLSearchParams({
    mode: 'payment',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    success_url: `${origin}/care-packages/thanks/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/care-packages/${packageId}/`,
    // Checkout collects the email itself. It is the only identifier the buyer
    // and their later library sign-in have in common, so it is what the
    // purchase row is keyed on.
    //
    // 'always', not 'if_required'. With if_required a card payment creates no
    // Customer, the address stays in customer_details on the session, and the
    // charge is left with receipt_email null - so Stripe has nobody to send a
    // receipt to and never sends one, however the account's email settings are
    // configured. Creating the Customer is what gives the payment an address
    // to receipt, and it also means a refund or a support question later has
    // a real record to work from.
    customer_creation: 'always',
    'metadata[package_id]': packageId,
    'metadata[edition]': pkg.edition,
    'payment_intent_data[metadata][package_id]': packageId,
    'payment_intent_data[description]': `${pkg.name} (PDF)`,
  });

  // Wrapped, because fetch rejects rather than resolves when the request cannot
  // be built or sent at all: a malformed key, a header value the runtime
  // refuses, a network failure reaching Stripe. An unhandled rejection here is
  // not our 502 with a readable body, it is Cloudflare's own HTML error page,
  // which the buy button cannot parse and nobody can diagnose from. Every
  // failure that reaches a buyer should look the same and say the same thing.
  let res;
  try {
    res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: form,
    });
  } catch (err) {
    console.error('Stripe checkout request could not be sent', err?.message || err);
    return storeJson({ error: 'Could not start checkout. Please try again.' }, 502);
  }

  const session = await res.json().catch(() => ({}));

  if (!res.ok || !session?.url) {
    // Stripe's own message is useful to us and not to a buyer, and it can name
    // internal ids, so it goes to the log and a flat message goes back.
    console.error('Stripe checkout session failed', session?.error?.message || res.status);
    return storeJson({ error: 'Could not start checkout. Please try again.' }, 502);
  }

  return storeJson({ url: session.url });
}

// ---------------------------------------------------------------------------
// POST /api/care-packages/webhook  ->  Stripe event sink
// ---------------------------------------------------------------------------
// The only thing that grants a package. The success redirect is a courtesy the
// buyer can fake by typing the URL; this is the event Stripe itself sends, and
// it is the one that writes a purchase row.
//
// Signature verification is done here with Web Crypto rather than
// stripe.webhooks.constructEvent, since nothing can be imported. The scheme is
// documented and small: the Stripe-Signature header carries a timestamp and one
// or more v1 HMAC-SHA256 digests over "<timestamp>.<raw body>", keyed with this
// endpoint's signing secret.
//
// Two things are load-bearing:
//   1. The raw body text is hashed, never a re-serialised parse of it. JSON
//      round-tripping reorders keys and drops whitespace, and the digest is
//      over the exact bytes Stripe sent.
//   2. The insert ignores conflicts on stripe_session_id. Stripe retries
//      anything it did not get a 2xx for and can deliver the same event more
//      than once, so "exactly once" is not a property of the delivery. It is a
//      property of the unique constraint in supabase/care_package_store.sql.

// Stripe's own default. A replayed request older than this is rejected even
// with a valid signature, which is what stops a captured delivery being resent
// indefinitely.
const STRIPE_TOLERANCE_SECONDS = 300;

function timingSafeEqualHex(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function stripeHmacHex(secret, payload) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return [...new Uint8Array(mac)].map(b => b.toString(16).padStart(2, '0')).join('');
}

// Returns the parsed event, or null. Deliberately one undifferentiated null:
// telling a caller which part of their forgery was wrong is free help.
async function verifyStripeEvent(rawBody, signatureHeader, secret) {
  if (!signatureHeader) return null;

  let timestamp = '';
  const signatures = [];
  for (const part of signatureHeader.split(',')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (key === 't') timestamp = value;
    if (key === 'v1') signatures.push(value);
  }
  if (!timestamp || signatures.length === 0) return null;

  const age = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (!Number.isFinite(age) || Math.abs(age) > STRIPE_TOLERANCE_SECONDS) return null;

  const expected = await stripeHmacHex(secret, `${timestamp}.${rawBody}`);
  // Stripe sends every signature valid for the endpoint, which is more than one
  // during a secret rotation. Any match is a pass.
  if (!signatures.some(sig => timingSafeEqualHex(sig, expected))) return null;

  try {
    return JSON.parse(rawBody);
  } catch {
    return null;
  }
}

async function handleCarePackageWebhook(request, env) {
  if (!env?.STRIPE_WEBHOOK_SECRET || !hasSupabaseEnv(env)) {
    console.error('Care package webhook env vars missing');
    return new Response('Not configured', { status: 503 });
  }

  const rawBody = await request.text();
  const event = await verifyStripeEvent(
    rawBody,
    request.headers.get('stripe-signature'),
    env.STRIPE_WEBHOOK_SECRET,
  );
  if (!event) return new Response('Invalid signature', { status: 400 });

  // Everything else Stripe is configured to send is acknowledged and dropped.
  // A 2xx on an event we do not act on is correct: a 4xx would put the endpoint
  // into Stripe's retry-then-disable path over an event that was never a
  // problem.
  const handled = ['checkout.session.completed', 'checkout.session.async_payment_succeeded'];
  if (!handled.includes(event.type)) return new Response('Ignored', { status: 200 });

  const session = event.data?.object || {};

  // An unpaid session is not a purchase. This is the case that matters for the
  // delayed payment methods, where completed fires before the money arrives and
  // async_payment_succeeded is the event that counts.
  if (session.payment_status !== 'paid') return new Response('Not paid', { status: 200 });

  const packageId = session.metadata?.package_id || '';
  const email = (session.customer_details?.email || session.customer_email || '').trim().toLowerCase();

  if (!packageId || !email) {
    console.error('Paid session missing package id or email', session.id);
    // 200, not an error: retrying will not add the missing field. This is a row
    // to go and look at by hand rather than a delivery to keep alive.
    return new Response('Incomplete session', { status: 200 });
  }

  const res = await supabaseFetch(env, '/rest/v1/purchases?on_conflict=stripe_session_id', {
    method: 'POST',
    headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' },
    body: JSON.stringify({
      email,
      package_id: packageId,
      stripe_session_id: session.id,
      stripe_payment_intent: typeof session.payment_intent === 'string' ? session.payment_intent : null,
      amount_cents: session.amount_total ?? 0,
      currency: session.currency || 'usd',
      // The edition at the moment of sale, not what they download. metadata is
      // what checkout stamped on the session; the mirror above is the fallback
      // if an older session predates that field.
      edition: session.metadata?.edition || CARE_PACKAGE_STORE[packageId]?.edition || '',
      livemode: Boolean(event.livemode),
    }),
  });

  if (!res.ok) {
    // A 500 here is deliberate and is the one case worth failing loudly: it
    // makes Stripe retry, which is exactly what should happen when the database
    // was briefly unreachable during a real sale.
    console.error('Purchase insert failed', session.id, res.status, await res.text());
    return new Response('Insert failed', { status: 500 });
  }

  return new Response('OK', { status: 200 });
}

// ---------------------------------------------------------------------------
// POST /api/care-packages/download  ->  { url, edition, ... }
// ---------------------------------------------------------------------------
// The paywall. The bucket is private and carries no storage.objects policies
// (see supabase/care_package_store.sql), so this route holding the service role
// key is the only thing in the system that can produce a readable URL for a
// package PDF, and it does so only after finding a purchase row.
//
// Two ways to prove a purchase, because there are two moments a buyer wants the
// file and only one of them involves being signed in:
//
//   { sessionId }   the Stripe Checkout session id, which the success redirect
//                   puts in the URL of /care-packages/thanks/. The buyer has
//                   just paid and has no account yet. Possession of the id is
//                   the proof: Stripe hands it to that browser and to nobody
//                   else, and it unlocks exactly the one package it paid for.
//
//   Authorization: Bearer <supabase access token>   the library, after an email
//                   OTP sign-in. The token is verified against Supabase Auth
//                   and the address in it is matched against the purchase rows.
//
// { confirmOnly: true } answers "does this purchase exist" without minting a
// URL or writing a download row. The thanks page polls that while waiting for
// the webhook to land, and it would otherwise log a download nobody clicked.
async function handleCarePackageDownload(request, env) {
  if (!hasSupabaseEnv(env)) return storeJson({ error: 'Downloads are not configured.' }, 503);

  let body;
  try {
    body = await request.json();
  } catch {
    return storeJson({ error: 'Expected a JSON body.' }, 400);
  }

  const packageId = typeof body?.packageId === 'string' ? body.packageId : '';
  const sessionId = typeof body?.sessionId === 'string' ? body.sessionId : '';
  const confirmOnly = body?.confirmOnly === true;

  const columns = 'select=id,email,package_id,edition';
  let purchase = null;

  if (sessionId) {
    const res = await supabaseFetch(
      env,
      `/rest/v1/purchases?stripe_session_id=eq.${encodeURIComponent(sessionId)}&${columns}&limit=1`,
    );
    if (!res.ok) {
      console.error('Purchase lookup by session failed', res.status);
      return storeJson({ error: 'Could not check that purchase.' }, 500);
    }
    purchase = (await res.json())[0] || null;
  } else {
    const token = (request.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '').trim();
    if (!token) return storeJson({ error: 'Sign in to download.' }, 401);
    if (!packageId) return storeJson({ error: 'Which package?' }, 400);

    // Verified against Supabase Auth rather than decoded here. A JWT read
    // without checking its signature is a claim, not a fact, and the claim in
    // question is which inbox owns the purchase.
    const userRes = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
      headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${token}` },
    });
    const user = userRes.ok ? await userRes.json().catch(() => null) : null;
    const email = user?.email?.trim().toLowerCase();
    if (!email) return storeJson({ error: 'That sign-in has expired. Sign in again.' }, 401);

    // ilike with no wildcards is an exact, case-insensitive match, which is
    // what makes Sam@Example.com at checkout and sam@example.com at sign-in the
    // same person.
    const res = await supabaseFetch(
      env,
      `/rest/v1/purchases?package_id=eq.${encodeURIComponent(packageId)}`
        + `&email=ilike.${encodeURIComponent(email)}&${columns}&order=created_at.asc&limit=1`,
    );
    if (!res.ok) {
      console.error('Purchase lookup by email failed', res.status);
      return storeJson({ error: 'Could not check that purchase.' }, 500);
    }
    purchase = (await res.json())[0] || null;
  }

  if (!purchase) {
    // The same answer whether the purchase does not exist or belongs to someone
    // else. Distinguishing them would turn this into an oracle for "has this
    // address bought this package".
    return storeJson({ error: 'No purchase found for this package.' }, 403);
  }

  const known = CARE_PACKAGE_STORE[purchase.package_id];
  // The edition being served now, not the one bought. This is the whole version
  // story: the file behind the path is current, so this number is what the
  // buyer is about to hold.
  const currentEdition = known?.edition || purchase.edition || '';
  const packageName = known?.name || purchase.package_id;

  if (confirmOnly) {
    return storeJson({
      ok: true,
      packageId: purchase.package_id,
      packageName,
      email: purchase.email,
      edition: currentEdition,
      purchasedEdition: purchase.edition || '',
    });
  }

  // care-packages/<package-id>.pdf. Stable for the life of the package: a
  // corrected edition is a new file at this same path, which is what makes
  // "buy once, every corrected edition is free" a one-step publish rather than
  // a data migration.
  const path = `${purchase.package_id}.pdf`;
  const signRes = await supabaseFetch(
    env,
    `/storage/v1/object/sign/${CARE_PACKAGE_BUCKET}/${path}`,
    { method: 'POST', body: JSON.stringify({ expiresIn: SIGNED_URL_SECONDS }) },
  );
  const signed = signRes.ok ? await signRes.json().catch(() => null) : null;

  if (!signed?.signedURL) {
    console.error('Signed URL failed', path, signRes.status);
    return storeJson({ error: 'The file for this package is not available right now.' }, 500);
  }

  const filename = `${packageName.replace(/[^\w]+/g, '_')}_v${currentEdition || '1'}.pdf`;
  const url = `${env.SUPABASE_URL}/storage/v1${signed.signedURL}&download=${encodeURIComponent(filename)}`;

  // Logged after the URL exists, so the log records URLs actually handed out.
  // Failing to log must never cost the buyer their download, so this is fired
  // and its result only noted.
  try {
    const logRes = await supabaseFetch(env, '/rest/v1/care_package_downloads', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({
        purchase_id: purchase.id,
        email: purchase.email,
        package_id: purchase.package_id,
        edition: currentEdition,
        storage_path: path,
      }),
    });
    if (!logRes.ok) console.error('Download log insert failed', logRes.status);
  } catch (err) {
    console.error('Download log insert threw', err?.message);
  }

  return storeJson({
    url,
    packageId: purchase.package_id,
    packageName,
    edition: currentEdition,
    purchasedEdition: purchase.edition || '',
    expiresInSeconds: SIGNED_URL_SECONDS,
  });
}

// Every storefront route is POST. A GET that fell through to the RSS builder
// below would answer a checkout request with an XML feed and a 200, so unknown
// paths and wrong methods are answered explicitly here rather than left to it.
async function handleCarePackageStore(request, env, pathname) {
  if (request.method !== 'POST') {
    return storeJson({ error: 'Method not allowed.' }, 405);
  }
  if (pathname === '/api/care-packages/checkout') return handleCarePackageCheckout(request, env);
  if (pathname === '/api/care-packages/webhook') return handleCarePackageWebhook(request, env);
  if (pathname === '/api/care-packages/download') return handleCarePackageDownload(request, env);
  return storeJson({ error: 'Not found.' }, 404);
}

// ===========================================================================
// Ask Beastly: POST /api/ask  (docs/ASK_BEASTLY.md)
// ===========================================================================
// A reader question answered ONLY from our own content. The search index is
// the ask-index D1 database (binding ASK_DB), loaded at build time by
// scripts/load-ask-index.mjs: chunks_a / chunks_b with FTS5 tables, and
// ask_meta naming the live slot plus the lookups this file cannot import
// (searchAliases.js, the species list, the legal matrix jurisdictions).
//
// Order of checks, cheapest first, and none of them ever shows the reader an
// error: anything that is not an answer comes back as a result the page
// handles by showing the plain search results it already has.
//   1. Turnstile (TURNSTILE_SECRET_KEY, same as the contact form)
//   2. 12 questions per visitor per hour (ASK_KV; the visitor key is a hash of
//      the IP and the Eastern date, and the IP itself is never stored)
//   3. legal questions never reach the model: link the legal pages instead
//   4. search; a weak best match returns no_match without calling the model
//   5. 1,000 answers per day (ASK_KV, resets at midnight Eastern)
//   6. the model call (step 4 of the build)

const ASK = {
  maxQuestion: 300,
  perVisitorPerHour: 12,
  answersPerDay: 1000,
  candidates: 40,
  topK: 4,
  tokenBudget: 3000,
  tokensPerWord: 1.35,
  // A best match must clear both to count. Tuned against the reader test.
  minScore: 4,
  minCoverage: 0.5,
  // With no animal named there is nothing to anchor the search, so more of
  // the question has to be in the chunk.
  minCoverageNoSpecies: 0.67,
};

const ASK_STOPWORDS = new Set((
  'a about after again all am an and any are as at be because been before being below between both but by can ' +
  'could did do does doing down during each few for from further had has have having he her here hers him his how ' +
  'i if in into is it its itself just me more most my myself no nor not now of off on once only or other our ours ' +
  'out over own same she should so some such than that the their theirs them then there these they this those ' +
  'through to too under until up very was we were what when where which while who whom why will with would you ' +
  'your yours yourself im ive id dont doesnt isnt cant wont thing things get got getting really much many lot ' +
  'pet pets ok okay need want know tell please one ones also best good ideal right proper stop start make way ways'
).split(' '));

// Care words: when the question has one, guide sections outrank fact cards.
// Words readers use for the same thing the guides call something else. A
// question word matches its whole group, in the search and in coverage.
const ASK_SYNONYMS = [
  ['tank', 'enclosure', 'cage', 'terrarium', 'vivarium', 'habitat', 'aquarium'],
  ['eat', 'eating', 'feed', 'feeding', 'food', 'diet', 'appetite'],
  ['cost', 'price', 'expensive', 'cheap', 'budget'],
  ['temperature', 'temp', 'heat', 'warm', 'basking'],
  ['sick', 'ill', 'illness', 'disease', 'symptoms'],
  ['big', 'size', 'large', 'length'],
  ['live', 'lifespan', 'old', 'age'],
  ['poop', 'pooped', 'pooping', 'poo', 'stool', 'droppings', 'feces', 'fecal'],
  ['baby', 'babies', 'hatchling', 'hatchlings', 'juvenile', 'juveniles', 'young'],
];
const ASK_SYNONYM_OF = new Map(ASK_SYNONYMS.flatMap((g) => g.map((w) => [w, g])));

// Words that say "tell me about this animal" and nothing more specific. A
// question that names a species and only these ("how do I take care of a
// leopard gecko") is answered from the species' hub.
const ASK_BROAD = new Set('take care caring look after raise raising keep keeping basics basic tips guide beginner beginners start starting new owner everything own owning'.split(' '));

// Care guides are split by topic (cost / feeding / handling / health / tank
// setup / enrichment), so a question about one topic should favor that guide.
const ASK_GUIDE_TOPICS = [
  [/\b(tank\w*|enclosure\w*|cage\w*|terrarium|vivarium|aquarium|setup|set up|temperature\w*|temp|heat\w*|basking|humid\w*|lamp\w*|uvb|light\w*|substrate|bedding|clean\w*)\b/, 'tank-setup'],
  [/\b(eat\w*|feed\w*|fed|food\w*|diet|treat\w*|appetite)\b/, 'feeding'],
  [/\b(cost\w*|price\w*|expensive|cheap|budget|afford\w*)\b/, 'cost'],
  [/\b(sick\w*|ill|illness|disease\w*|vet|symptom\w*|infection\w*|parasite\w*|swollen|letharg\w*)\b/, 'health'],
  [/\b(handl\w*|hold\w*|pick\w* up|bite\w*|biting|tame|taming)\b/, 'handling'],
  [/\b(enrich\w*|bored\w*|toy\w*|play\w*)\b/, 'enrichment'],
];

const ASK_CARE_RE = /\b(feed\w*|fed|food|foods|eat\w*|diet|tank\w*|enclosure\w*|cage\w*|setup|set up|habitat|vivarium|terrarium|aquarium|sick\w*|ill|illness|disease\w*|vet|vets|health\w*|symptom\w*|temperature\w*|temp|temps|heat\w*|humid\w*|lamp\w*|uvb|light\w*|cost\w*|price\w*|expensive|cheap|budget|substrate|bedding|clean\w*|handl\w*)\b/;
const ASK_LEGAL_RE = /\b(legal|illegal|legally|allowed to (own|have|keep|buy)|permit|permits|permitted|licen[cs]e\w*|banned|outlawed|laws?|(what|which) states?|where can (i|you) (own|have|keep|buy|get))\b/;
// Health words in the question or the sources sent turn on the emergency card.
const ASK_HEALTH_RE = /\b(not eating|won'?t eat|stopped eating|refus\w* (to eat|food)|letharg\w*|bleed\w*|prolaps\w*|swollen|swelling|breathing|gasping|wheez\w*|seizure\w*|convuls\w*)\b/;

function easternDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(now);
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Lookups change only when a build loads a new slot, so one isolate keeps
// them for a few minutes instead of reading ask_meta on every question.
let askMetaCache = null;
async function askMeta(db) {
  if (askMetaCache && Date.now() - askMetaCache.at < 300000) return askMetaCache;
  const { results } = await db.prepare('SELECT key, value FROM ask_meta').all();
  const m = Object.fromEntries(results.map((r) => [r.key, r.value]));
  // The table set the load wrote: 'live' (incremental), or 'a' / 'b' from
  // before it.
  if (!/^[a-z]+$/.test(m.slot || '')) throw new Error('ask index has no live slot');
  const parse = (v, fallback) => { try { return JSON.parse(v); } catch { return fallback; } };
  const aliases = Object.entries(parse(m.aliases, {})).sort((x, y) => y[0].length - x[0].length);
  askMetaCache = {
    at: Date.now(),
    slot: m.slot,
    aliases: aliases.map(([from, to]) => [new RegExp(`\\b${escapeRe(from)}\\b`, 'g'), to.toLowerCase()]),
    species: parse(m.species, []),
    states: parse(m.states, []),
    legal: parse(m.legal, []),
  };
  return askMetaCache;
}

function askNormalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9'\- ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// First name in `list` (longest first) found as whole words in q, plural ok.
function askFindName(q, list) {
  for (const item of list) {
    const name = item.name.toLowerCase();
    if (new RegExp(`\\b${escapeRe(name)}(e?s)?\\b`).test(q)) return item;
  }
  return null;
}

// Legal questions get links, never a model summary: the matrix cells change
// monthly and quote statutes.
// A state by name, or by its postal code after "in" or "for" ("legal in ny").
// Codes only count there, so "me", "or" and "in" elsewhere never match.
function askFindState(q, states) {
  const byName = askFindName(q, states);
  if (byName) return byName;
  const m = q.match(/\b(?:in|for)\s+([a-z]{2,3})\b/);
  return m ? states.find((s) => s.code === m[1]) || null : null;
}

function askLegalLinks(q, meta) {
  const links = [];
  const state = askFindState(q, meta.states);
  const animal = askFindName(q, meta.legal);
  if (state) links.push({ title: `${state.name} exotic pet laws`, url: `/exotic-pet-laws/state/${state.slug}/` });
  if (animal) {
    links.push({ title: `${animal.name} laws in every state`, url: `/exotic-pet-laws/${animal.id}/` });
    if (animal.article) links.push({ title: `Is a ${animal.name.toLowerCase()} legal? The full guide`, url: animal.article });
  }
  if (!links.length) links.push({ title: 'Exotic pet laws by state', url: '/exotic-pet-laws/' });
  return links;
}

// The legal matrix's own answer for one animal in one state, word for word:
// status, cite, quote, note, existing owners, local ordinances, date checked.
// Only when the question names both; otherwise the reply is links alone. A
// cell with no row was never read and comes back as status null, which the
// page shows as "Not checked yet", never as unrestricted.
async function askLegalCell(db, q, meta) {
  const state = askFindState(q, meta.states);
  const animal = askFindName(q, meta.legal);
  if (!state || !animal) return null;
  const row = await db
    .prepare(`SELECT status, cite, quote, note, grandfathered, local_override, verified_on FROM legal_${meta.slot} WHERE animal = ?1 AND code = ?2`)
    .bind(animal.id, state.code)
    .first();
  return {
    animal: animal.name,
    state: state.name,
    status: row?.status || null,
    cite: row?.cite || '',
    quote: row?.quote || '',
    note: row?.note || '',
    grandfathered: row?.grandfathered || '',
    localOverride: Boolean(row?.local_override),
    verifiedOn: row?.verified_on || '',
  };
}

// A rough stem for the coverage check, close enough to the index's porter
// stemming that "biting" finds "bite" and "feeding" finds "feed".
const askStem = (t) => {
  const base = t.length > 4 ? t.replace(/(ing|ed|es|s)$/, '') : t;
  return base.slice(0, 5);
};

// Finds the chunks that answer q. Returns { chunks, species, best } where
// chunks is empty when the best match is too weak to send anywhere.
// A follow-up ("what about babies?") carries the conversation's previous
// question into the search, so its animal and topic come along. Only the
// question text: the previous answer never goes back to the model, which
// would let it answer from itself instead of the sections. A question that
// names a different animal is a new conversation (followUp: false).
async function askRetrieve(db, question, context = null) {
  const meta = await askMeta(db);
  const expand = (text) => {
    let out = askNormalize(text);
    for (const [re, to] of meta.aliases) out = out.replace(re, to);
    return out;
  };
  const qOwn = expand(question);
  const ownSpecies = askFindName(qOwn, meta.species);
  const prev = context?.prev ? expand(context.prev) : '';
  const prevSpecies = prev ? askFindName(prev, meta.species) : null;
  const followUp = Boolean(prev) && (!ownSpecies || !prevSpecies || ownSpecies.name === prevSpecies.name);
  const q = followUp && !ownSpecies ? `${qOwn} ${prev}` : qOwn;

  const species = askFindName(q, meta.species);
  const speciesWords = new Set(species ? askNormalize(species.name).split(/[\s-]+/) : []);
  const tokens = [...new Set(
    q.split(/[\s-]+/).map((t) => t.replace(/'s$|'/g, '')).filter((t) => t.length > 1 && !ASK_STOPWORDS.has(t)),
  )];
  if (!tokens.length) return { chunks: [], species, best: null, legal: false, meta, q, qOwn, followUp };

  // "Can I have a hedgehog in California" never says "legal": a state name
  // with own / have / keep / buy / get is a legal question too.
  // Judged on the reader's own words: a follow-up is legal only if it asks a
  // legal question, though the animal may come from the conversation.
  const legal = ASK_LEGAL_RE.test(qOwn)
    || (Boolean(askFindState(qOwn, meta.states)) && /\b(own|have|keep|buy|get|bring)\b/.test(qOwn));
  // A legal question is answered from the law matrix, never from these
  // chunks, so it skips the search and the rows it would read.
  if (legal) return { chunks: [], species, best: null, legal, meta, q, qOwn, followUp };

  const table = `chunks_${meta.slot}`;
  const fts = `${table}_fts`;
  // The question's own words: not the species name, and with a species named
  // not the "tell me about it" words either.
  const content = tokens.filter((t) => !speciesWords.has(t) && !(species && ASK_BROAD.has(t)));
  const broad = Boolean(species) && content.length === 0;
  const term = (t) => `"${t.replace(/"/g, '')}"`;
  const anyOf = (list) => [...new Set(list.flatMap((t) => ASK_SYNONYM_OF.get(t) || [t]))].map(term).join(' OR ');
  const allOf = (list) => list.map((t) => `(${(ASK_SYNONYM_OF.get(t) || [t]).map(term).join(' OR ')})`).join(' AND ');
  const sql = `SELECT c.id, c.slug, c.title, c.heading, c.url, c.species, c.type, c.text, c.words,
      bm25(${fts}, 4.0, 4.0, 3.0, 1.0) AS rank
    FROM ${fts} JOIN ${table} c ON c.id = ${fts}.rowid
    WHERE ${fts} MATCH ?1 AND c.type != 'legal'
    ORDER BY rank LIMIT ${ASK.candidates}`;
  const search = async (match) => (await db.prepare(sql).bind(match).all()).results;

  // Rows read are a daily budget (5M on the free plan), so the species goes
  // inside the MATCH: the index intersects it with the question's words
  // instead of finding every chunk on the site that mentions "eat" and
  // filtering afterwards (about 110 rows read instead of 6,000). The phrase
  // also reaches longer names: "tortoise" finds "Sulcata Tortoise".
  let rows = [];
  if (species) {
    const name = `species : ${term(askNormalize(species.name))}`;
    rows = await search(content.length ? `${name} AND {title heading text} : (${anyOf(content)})` : name);
  }
  // No species, or nothing for it: every word first, which reads little,
  // then any word when that finds too few.
  if (!rows.length) {
    if (tokens.length > 1) rows = await search(allOf(tokens));
    if (rows.length < ASK.topK) rows = await search(anyOf(tokens));
  }

  // Coverage: the share of the question's own words (not the species name)
  // that a chunk contains, matched on a short stem.
  const care = ASK_CARE_RE.test(q);
  const topics = ASK_GUIDE_TOPICS.filter(([re]) => re.test(q)).map(([, suffix]) => suffix);
  const scored = rows.map((r) => {
    const has = (text) => (t) => (ASK_SYNONYM_OF.get(t) || [t]).some((v) => text.includes(askStem(v)));
    const hay = `${r.title} ${r.heading} ${r.text}`.toLowerCase();
    const coverage = content.length ? content.filter(has(hay)).length / content.length : 1;
    // A section whose heading names what was asked is usually the answer.
    const heading = (r.heading || '').toLowerCase();
    const headingCoverage = content.length && heading ? content.filter(has(heading)).length / content.length : 0;
    let boost = 1;
    if (care) boost = r.type === 'guide' || r.type === 'faq' || r.type === 'hub' ? 1.3 : r.type === 'fact' ? 0.6 : 0.85;
    if (topics.some((t) => r.slug.includes(`-${t}`))) boost *= 1.6;
    if (broad && r.type === 'hub') boost *= 3;
    return { ...r, coverage, score: -r.rank * (0.5 + coverage) * (1 + 0.5 * headingCoverage) * boost };
  }).sort((a, b) => b.score - a.score);

  const best = scored[0] || null;
  const minCoverage = species ? ASK.minCoverage : ASK.minCoverageNoSpecies;
  if (!best || best.coverage < minCoverage || best.score < ASK.minScore) {
    return { chunks: [], species, best, legal, meta, q, qOwn, followUp };
  }
  const chunks = [];
  let budget = ASK.tokenBudget;
  for (const r of scored) {
    const cost = Math.ceil((r.words || 0) * ASK.tokensPerWord);
    if (cost > budget && chunks.length) continue;
    chunks.push(r);
    budget -= cost;
    if (chunks.length === ASK.topK) break;
  }
  return { chunks, species, best, legal, meta, q, qOwn, followUp, ranked: scored.slice(0, 8) };
}

async function askLimit(env, request) {
  if (!env.ASK_KV) return { ok: true };
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const day = easternDate();
  const visitor = (await sha256Hex(`${ip}|${day}`)).slice(0, 24);
  const hour = Math.floor(Date.now() / 3600000);
  const key = `ask:v:${visitor}:${hour}`;
  const used = Number(await env.ASK_KV.get(key)) || 0;
  if (used >= ASK.perVisitorPerHour) return { ok: false };
  await env.ASK_KV.put(key, String(used + 1), { expirationTtl: 3700 });
  return { ok: true };
}

const askDayKey = () => `ask:day:${easternDate()}`;
async function askDailyUsed(env) {
  if (!env.ASK_KV) return 0;
  return Number(await env.ASK_KV.get(askDayKey())) || 0;
}
async function askCountAnswer(env) {
  if (!env.ASK_KV) return;
  const used = await askDailyUsed(env);
  await env.ASK_KV.put(askDayKey(), String(used + 1), { expirationTtl: 172800 });
}

async function askVerifyTurnstile(env, request, token) {
  if (!env?.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;
  try {
    const form = new FormData();
    form.append('secret', env.TURNSTILE_SECRET_KEY);
    form.append('response', token);
    const ip = request.headers.get('cf-connecting-ip');
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
    const out = await res.json().catch(() => null);
    return !(out && out.success === false);
  } catch {
    return true; // siteverify unreachable: the per-visitor limit still holds
  }
}

async function handleAsk(request, env, ctx) {
  if (request.method !== 'POST') return storeJson({ error: 'Method not allowed.' }, 405);
  const quiet = (result, extra = {}) => storeJson({ result, answer: '', links: [], emergency: false, ...extra });

  let body;
  try {
    body = await request.json();
  } catch {
    return quiet('unavailable');
  }
  const question = String(body?.question || '').replace(/\s+/g, ' ').trim().slice(0, ASK.maxQuestion);
  // The conversation's previous question, for a follow-up. Text only.
  const prev = String(body?.context?.prev || '').replace(/\s+/g, ' ').trim().slice(0, ASK.maxQuestion);
  const context = prev.length >= 3 ? { prev } : null;
  if (question.length < 3) return quiet('unavailable');
  if (!env.ASK_DB) return quiet('unavailable');

  if (!(await askVerifyTurnstile(env, request, String(body?.captcha || '')))) return quiet('unavailable');

  const log = (result, slugs = []) => askLog(env, ctx, question, slugs, result);

  // The sharetest project (beastlyfactss-sharetest.pages.dev) is where Ask
  // Beastly is built and tested: there the per-visitor hourly limit is off
  // and answers carry the chunks the model saw, for the source check. Keyed
  // on the host, so beastlyfacts.com always has the limit and never returns
  // sources, with nothing to switch back at launch. The daily cap still
  // applies everywhere.
  const testing = new URL(request.url).hostname.endsWith('beastlyfactss-sharetest.pages.dev');

  if (!testing && !(await askLimit(env, request)).ok) {
    log('capped');
    return quiet('capped');
  }

  let found;
  try {
    found = await askRetrieve(env.ASK_DB, question, context);
  } catch {
    return quiet('unavailable');
  }

  const species = found.species
    ? { name: found.species.name, guideId: found.species.guideId || null }
    : null;

  if (found.legal) {
    log('legal');
    let legal = null;
    try {
      legal = await askLegalCell(env.ASK_DB, found.q, found.meta);
    } catch {
      // No matrix table yet (an index loaded before it existed): links alone.
    }
    return storeJson({ result: 'legal', answer: '', links: askLegalLinks(found.q, found.meta), legal, emergency: false, species, followUp: found.followUp });
  }

  if (!found.chunks.length) {
    log('no_match', found.best ? [found.best.slug] : []);
    return quiet('no_match', { species, followUp: found.followUp });
  }

  const slugs = [...new Set(found.chunks.map((c) => c.slug))];
  // Health words in the question, or a health guide section as the best
  // match that names one. Any matched section was too loose: feeding and
  // substrate sections mention breathing or swelling in passing.
  const top = found.chunks[0];
  const emergency = ASK_HEALTH_RE.test(found.qOwn)
    || Boolean(top && /-health/.test(top.slug) && ASK_HEALTH_RE.test(top.text.toLowerCase()));

  if ((await askDailyUsed(env)) >= ASK.answersPerDay) {
    log('capped', slugs);
    return quiet('capped', { species, emergency });
  }

  // Any failure from here on is 'refused': the reader gets the matched pages
  // as plain links and the search results the page already shows.
  const fallback = () => storeJson({ result: 'refused', answer: '', links: askLinks(found.chunks), emergency, species, followUp: found.followUp });
  if (!env.ANTHROPIC_API_KEY) {
    log('refused', slugs);
    return fallback();
  }

  let reply;
  try {
    await askCountAnswer(env);
    reply = await askHaiku(env, question, found.chunks, found.followUp ? prev : '');
  } catch {
    log('refused', slugs);
    return fallback();
  }
  if (reply.kind === 'refused') {
    log('refused', slugs);
    return fallback();
  }
  if (reply.kind === 'no_answer') {
    log('no_match', slugs);
    return quiet('no_match', { species, followUp: found.followUp });
  }

  log('answered', slugs);
  return storeJson({
    result: 'answered',
    answer: reply.answer,
    links: askLinks(found.chunks, reply.best),
    emergency,
    species,
    followUp: found.followUp,
    ...(testing && { sources: found.chunks.map((c) => ({ url: c.url, title: askSourceTitle(c), text: c.text })) }),
  });
}

// ---------------------------------------------------------------------------
// The model call. Plain fetch, no SDK: this file ships unbundled.
// ---------------------------------------------------------------------------
// Claude Haiku 5.5 rejects any non-default temperature with a 400, so none is
// sent. Thinking is turned off (allowed at its default medium effort) so all
// 300 tokens go to the answer. The system prompt carries a cache marker; at
// about 150 tokens it is under the 512 token minimum and simply does not
// cache, which costs nothing.
const ASK_MODEL = 'claude-haiku-5-5';
const ASK_SYSTEM = `You answer animal and pet care questions for Beastly Facts using ONLY the text inside <sources>.
Rules:
- 2 to 3 short sentences. Plain words. No em or en dashes.
- If the sources do not answer the question, reply exactly: NO_ANSWER
- Never add facts, numbers, doses, or brands that are not in the sources.
- Keep hedges from the sources (can, may, often). Do not make them stronger.
- Never give medication doses. Never say a symptom is fine to wait out.
- Speak to the reader directly. Never mention the sources, "Source 2", or "the sources say".
- End with the title of the one source that answers best, in the form: READ: <title>`;

const askSourceTitle = (c) => (c.heading ? `${c.title}: ${c.heading}` : c.title);
const askEscape = (t) => String(t).replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function askHaiku(env, question, chunks, prevQuestion = '') {
  const sources = chunks
    .map((c, i) => `<source index="${i + 1}" title="${askEscape(askSourceTitle(c)).replace(/"/g, "'")}">\n${askEscape(c.text)}\n</source>`)
    .join('\n');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2026-10-21',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: ASK_MODEL,
      max_tokens: 300,
      thinking: { type: 'disabled' },
      system: [{ type: 'text', text: ASK_SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: `<sources>\n${sources}\n</sources>\n\n${prevQuestion ? `Earlier question: ${askEscape(prevQuestion)}\n` : ''}Question: ${askEscape(question)}` }],
    }),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}`);
  const msg = await res.json();
  if (msg.stop_reason === 'refusal') return { kind: 'refused' };
  const text = (msg.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('').trim();
  return askParseReply(text, chunks, msg.stop_reason);
}

// Splits the model's reply into the answer and the source it named, and
// cleans the answer: no dashes (number ranges become "to"), no half sentence
// left by a max_tokens cut.
function askParseReply(text, chunks, stopReason) {
  if (!text || /^NO_ANSWER\b/.test(text) || /\bNO_ANSWER\s*$/.test(text)) return { kind: 'no_answer' };
  let answer = text;
  let best = null;
  const read = answer.match(/\n?\s*READ:\s*(.+?)\s*$/i);
  if (read) {
    answer = answer.slice(0, read.index).trim();
    const named = read[1].toLowerCase().replace(/[*_"]/g, '').trim();
    best = chunks.find((c) => askSourceTitle(c).toLowerCase() === named)
      || chunks.find((c) => named.includes(c.title.toLowerCase()) || c.title.toLowerCase().includes(named))
      || null;
  }
  answer = answer
    .replace(/(\d)\s*[\u2013\u2014]\s*(\d)/g, '$1 to $2')
    .replace(/\s*[\u2013\u2014]\s*/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
  if (stopReason === 'max_tokens') {
    const end = Math.max(answer.lastIndexOf('. '), answer.lastIndexOf('! '), answer.lastIndexOf('? '));
    answer = end > 0 ? answer.slice(0, end + 1) : answer;
  }
  if (!answer) return { kind: 'no_answer' };
  return { kind: 'answer', answer, best };
}

// One link per page, in the order the chunks ranked.
function askLinks(chunks, first = null) {
  const ordered = first ? [first, ...chunks.filter((c) => c !== first)] : chunks;
  const seen = new Set();
  const links = [];
  for (const c of ordered) {
    // One link per page. By path, not slug: a hub and its encyclopedia
    // profile share an id.
    const page = c.url.split('#')[0];
    if (seen.has(page)) continue;
    seen.add(page);
    links.push({ title: c.title, url: c.url });
  }
  return links.slice(0, 3);
}

// Every request goes to Supabase ask_log: the question, the slugs matched and
// the result. No IP address, no visitor key. Never blocks or breaks the reply.
function askLog(env, ctx, question, matchedSlugs, result) {
  if (!hasSupabaseEnv(env)) return;
  const write = supabaseFetch(env, '/rest/v1/ask_log', {
    method: 'POST',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ question, matched_slugs: matchedSlugs, result }),
  }).catch(() => {});
  if (ctx?.waitUntil) ctx.waitUntil(write);
}

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/ask' || pathname === '/api/ask/') {
      return handleAsk(request, env, ctx);
    }

    if (pathname.startsWith('/api/care-packages/')) {
      return handleCarePackageStore(request, env, pathname);
    }

    if (pathname === '/api/contact' || pathname === '/api/contact/') {
      return handleContact(request, env);
    }

    if (pathname === '/subscribed' || pathname === '/subscribed/') {
      const alert = notifySubscriber(env);
      // waitUntil lets the alert finish after the redirect has been sent.
      if (ctx?.waitUntil) ctx.waitUntil(alert); else await alert;
      return Response.redirect(new URL('/?subscribed=1', request.url).toString(), 302);
    }

    const rss =
      pathname === '/articles.xml' ? await buildArticlesFeed(request) : await buildFactsFeed(request);

    return new Response(rss, {
      headers: { 'content-type': 'application/rss+xml; charset=utf-8' },
    });
  },
};
