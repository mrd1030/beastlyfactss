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
  248: '/assets/facts/penguin-3.jpg', // "Sixty Five Days Without Food"
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
  151: '/assets/facts/flamingo-2.jpg', // "The One-Leg Trick" - id 21 keeps flamingo.jpg
  81: '/assets/facts/chameleon-2.jpg', // "Color-Changing Camouflage"
  88: '/assets/facts/chameleon-3.jpg', // "Chameleon Color Change"
  138: '/assets/facts/chameleon-4.jpg', // "Faster Than a Fighter Pilot"
  63: '/assets/facts/dolphin-2.jpg', // "Mirror Test Passers"
  79: '/assets/facts/dolphin-3.jpg', // "Secrets in the Sound"
  105: '/assets/facts/dolphin-4.jpg', // "Glowing Oceans, No Joke!"
  49: '/assets/facts/cat-3.jpg', // "Meow is Just for Us"
  50: '/assets/facts/cat-6.jpg', // "Healing Purr"
  51: '/assets/facts/cat-7.jpg', // "Always Landing Right"
  52: '/assets/facts/cat-5.jpg', // "Lactose Intolerant Cats"
  53: '/assets/facts/cat-4.jpg', // "70% of Life Asleep"
  145: '/assets/facts/cat-2.jpg', // "Can't Taste Sugar"
  148: '/assets/facts/cat-8.jpg', // "Built-In Measuring Tape"
  45: '/assets/facts/dog-6.jpg', // "Unique Nose Prints"
  46: '/assets/facts/dog-4.jpg', // "Dogs Dream Too"
  47: '/assets/facts/dog-2.jpg', // "Born Blind and Deaf"
  48: '/assets/facts/dog-5.jpg', // "Mental Fatigue is Real"
  147: '/assets/facts/dog-3.jpg', // "A Nose Built Different"
  83: '/assets/facts/octopus-2.jpg', // "Silent Signals"
  95: '/assets/facts/octopus-3.jpg', // "Octopus Ink Defense"
  102: '/assets/facts/octopus-4.jpg', // "Silent Swimmers"
  54: '/assets/facts/parrot-2.jpg', // "Parrots Need Company"
  58: '/assets/facts/parrot-3.jpg', // "Mimics Everything"
  40: '/assets/facts/bearded-dragon-2.jpg', // "The Wave of Peace"
  119: '/assets/facts/bearded-dragon-3.jpg', // "Temperature-Switch Dragons"
  86: '/assets/facts/tardigrade-2.jpg', // "The Tardigrade Resilience"
  166: '/assets/facts/tardigrade-3.jpg', // "The Radiation Shield Protein"
  108: '/assets/facts/pangolin-2.jpg', // "Armored Squirrels"
  167: '/assets/facts/pangolin-3.jpg', // "A Tongue Longer Than Its Body"
  195: '/assets/facts/pangolin-4.jpg', // "The Stomach That Chews"
  196: '/assets/facts/pangolin-5.jpg', // "70 Million Insects a Year"
  197: '/assets/facts/pangolin-6.jpg', // "Armor Written Into the Genome"
  198: '/assets/facts/pangolin-7.jpg', // "Scales With a Return Address"
  199: '/assets/facts/pangolin-8.jpg', // "Fingernails, Basically"
  200: '/assets/facts/jellyfish-2.jpg', // "Famous Under the Wrong Name"
  201: '/assets/facts/jellyfish-3.jpg', // "A 72-Hour Rebuild"
  202: '/assets/facts/jellyfish-4.jpg', // "Cells That Switch Careers"
  203: '/assets/facts/jellyfish-5.jpg', // "Smaller Than a Pinky Nail"
  204: '/assets/facts/jellyfish-6.jpg', // "A Silent Worldwide Invasion"
  205: '/assets/facts/dolphin-5.jpg', // "Names on a Watchlist"
  206: '/assets/facts/dolphin-6.jpg', // "Half the Conversation"
  207: '/assets/facts/dolphin-7.jpg', // "The Deliberately Imperfect Copy"
  208: '/assets/facts/dolphin-8.jpg', // "Your Name in Someone Else's Voice"
  209: '/assets/facts/dolphin-9.jpg', // "Mirror Babies"
  99: '/assets/facts/clownfish-2.jpg', // "Fluffy Fish Friends"
  118: '/assets/facts/clownfish-3.jpg', // "Shrimp Anemone Alliance"
  113: '/assets/facts/narwhal-2.jpg', // "Super Sneaky Narwhal"
  109: '/assets/facts/cuttlefish-2.jpg', // "Underwater Fireworks"
  163: '/assets/facts/starfish-2.jpg', // "Stomach on the Outside"
  152: '/assets/facts/seahorse-2.jpg', // "No Stomach, No Problem"
  161: '/assets/facts/mantis-shrimp-2.jpg', // "Married for Twenty Years"
  171: '/assets/facts/hummingbird-2.jpg', // "Flying Backwards, Sleeping Like the Dead"
  97: '/assets/facts/african-grey-parrot-2.jpg', // "Birds Can Count"
  153: '/assets/facts/owl-2.jpg', // "Wings Built for Silence"
  154: '/assets/facts/chicken-2.jpg', // "Never Forgets a Flockmate"
  60: '/assets/facts/crow-2.jpg', // "Crow Tool Users"
  164: '/assets/facts/komodo-dragon-2.jpg', // "A Bite That Won't Clot"
  116: '/assets/facts/gecko-2.jpg', // "Climbing the Walls"
  165: '/assets/facts/box-turtle-2.jpg', // "Sealed Shut Like a Box"
  174: '/assets/facts/american-alligator-2.jpg', // "2,000 Teeth and Counting"
  168: '/assets/facts/axolotl-2.jpg', // "Forever Young, Forever Underwater"
  82: '/assets/facts/honeybee-2.jpg', // "The Tiny Yet Mighty"
  91: '/assets/facts/leafcutter-ant-2.jpg', // "The Snack Time Ant"
  92: '/assets/facts/sloth-2.jpg', // "Sloth Speedsters"
  159: '/assets/facts/honey-badger-2.jpg', // "The Loose-Skin Escape Artist"
  55: '/assets/facts/rabbit-2.jpg', // "Rabbits Need Exercise"
  112: '/assets/facts/hedgehog-2.jpg', // "Cuddle Drones"
  158: '/assets/facts/cheetah-2.jpg', // "Zero to Sixty in Seconds"
  156: '/assets/facts/giraffe-2.jpg', // "Same Neck Bones as You"
  157: '/assets/facts/koala-2.jpg', // "Fingerprints Like Ours"
  173: '/assets/facts/capybara-2.jpg', // "Built-In Snorkel Mode"
  172: '/assets/facts/red-panda-2.jpg', // "A Thumb That Isn't a Thumb"
  160: '/assets/facts/sphynx-cat-2.jpg', // "Always Running Warm"
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
  220: '/assets/facts/clownfish-6.jpg', // "Not Immune, Just Unsalted"
  221: '/assets/facts/clownfish-7.jpg', // "Thirty Years in One Anemone"
  222: '/assets/facts/wood-frog-3.jpg', // "Alaska Rewrote the Limit"
  223: '/assets/facts/wood-frog-4.jpg', // "Two Antifreezes, Two Schedules"
  224: '/assets/facts/wood-frog-5.jpg', // "It Restarts From the Middle"
  225: '/assets/facts/wood-frog-6.jpg', // "The Only Frog Above the Arctic Circle"
  226: '/assets/facts/seahorse-3.jpg', // "A Placenta Made of Skin"
  227: '/assets/facts/seahorse-4.jpg', // "He Broke His Immune System First"
  228: '/assets/facts/seahorse-5.jpg', // "Seawater Comes In With the Eggs"
  229: '/assets/facts/dung-beetle-2.jpg', // "The Dance Before the Roll"
  230: '/assets/facts/dung-beetle-3.jpg', // "Forty Seconds Versus Two Minutes"
  231: '/assets/facts/dung-beetle-4.jpg', // "Tested in a Planetarium"
  232: '/assets/facts/hagfish-2.jpg', // "Seven Times Its Own Volume"
  233: '/assets/facts/slow-loris-2.jpg', // "Venom in Two Parts"
  234: '/assets/facts/slow-loris-3.jpg', // "Built Like the Cat Allergen"
  235: '/assets/facts/slow-loris-4.jpg', // "Teeth Removed With Pliers"
  236: '/assets/facts/chicken-3.jpg', // "The Brain Stem Sits Low"
  237: '/assets/facts/chicken-4.jpg', // "Killed by a Missing Syringe"
  238: '/assets/facts/chicken-5.jpg', // "Running Headless Is Real"
  287: '/assets/facts/kakapo.jpg',
  288: '/assets/facts/maine-coon.jpg',
  289: '/assets/facts/okapi.jpg',
  290: '/assets/facts/nudibranch.jpg',
  291: '/assets/facts/gila-monster.jpg',
  292: '/assets/facts/kea.jpg',
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
};

function imageFor(fact) {
  const path = FACT_IMAGES[fact.id] || ANIMAL_IMAGES[fact.animal];
  return path ? `https://beastlyfacts.com${path}` : FALLBACK_IMAGE;
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
      <description>${cdata(`${fact.emoji} ${fact.fact}`)}</description>
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
// which is the safe direction for the two to disagree in. All 14 are here and
// all 14 carry storefront: 'stripe', so the two agree; a package added to the
// catalog and forgotten here gets a clean 404 from checkout rather than a sale
// nobody can fulfil.
//
// checkout prefers priceIdLive and falls back to priceIdSandbox, so a
// deployment holding a live secret key and a package with only a sandbox id
// gets a clean Stripe error rather than a broken sale. Only hamster was ever
// sold in the Sandbox, so it is the only entry with both.
const CARE_PACKAGE_STORE = {
  'bearded-dragon': {
    name: 'Bearded Dragon Care Package',
    edition: '3.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBp9qtY3Ob6vamuXMA6sD',
  },
  'leopard-gecko': {
    name: 'Leopard Gecko Care Package',
    edition: '2.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBs9qtY3Ob6vaOPtdFLAt',
  },
  goldfish: {
    name: 'Goldfish Care Package',
    edition: '2.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBu9qtY3Ob6vaU6oDSTyD',
  },
  axolotl: {
    name: 'Axolotl Care Package',
    edition: '2.2',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBw9qtY3Ob6vaRVFVm391',
  },
  budgie: {
    name: 'Budgie Care Package',
    edition: '2.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENBy9qtY3Ob6vaLv2cNMGc',
  },
  'crested-gecko': {
    name: 'Crested Gecko Care Package',
    edition: '2.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENC19qtY3Ob6vasiNmiLfX',
  },
  'guinea-pig': {
    name: 'Guinea Pig Care Package',
    edition: '2.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENC39qtY3Ob6vaks244qto',
  },
  lovebird: {
    name: 'Lovebird Care Package',
    edition: '2.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENC89qtY3Ob6vav2ARp6wq',
  },
  'russian-tortoise': {
    name: 'Russian Tortoise Care Package',
    edition: '2.2',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCB9qtY3Ob6vaTvVBMark',
  },
  'ball-python': {
    name: 'Ball Python Care Package',
    edition: '2.2',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCE9qtY3Ob6vajtYqePnI',
  },
  'betta-fish': {
    name: 'Betta Fish Care Package',
    edition: '2.2',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCG9qtY3Ob6vaxKLgeXwO',
  },
  hamster: {
    name: 'Hamster Care Package',
    edition: '2.3',
    priceIdSandbox: 'price_1UC9Up9qtY3Ob6vac8xRLEu2',
    priceIdLive: 'price_1UENBJ9qtY3Ob6vaJcPpuniM',
  },
  rabbit: {
    name: 'Rabbit Care Package',
    edition: '2.1',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCH9qtY3Ob6vaaasv4qjw',
  },
  tarantula: {
    name: 'Tarantula Care Package',
    edition: '2.3',
    priceIdSandbox: '',
    priceIdLive: 'price_1UENCK9qtY3Ob6vafJILVYIP',
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

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith('/api/care-packages/')) {
      return handleCarePackageStore(request, env, pathname);
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
