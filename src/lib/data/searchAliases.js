// Query aliases for search. Keys are what people actually type (hobby
// nicknames, UK/common-name variants, the classic misspellings), values are
// the canonical string as it appears in guide/encyclopedia data. Everything
// lowercase on both sides: normalizeQuery() lowercases the query before
// lookup and the matchers lowercase the data.
//
// Authoring rules:
// - Only add an alias that does NOT already substring-match the real name.
//   "sulcata" finds "Sulcata Tortoise" via includes() on its own; "african
//   spurred" does not, so only the latter belongs here.
// - Values can be a fragment ("hognose") when that fragment substring-matches
//   the guide name. They do not have to be the full title.
// - Aliases are matched whole-query first, then per word inside longer
//   queries ("bp tank size" becomes "ball python tank size"), so short
//   abbreviations like "bp" are safe. They never fire mid-word.
export const SEARCH_ALIASES = {
  // Amphibians
  'axelotl': 'axolotl',
  'axlotl': 'axolotl',
  'axalotl': 'axolotl',
  'mexican walking fish': 'axolotl',
  'fire belly toad': 'fire-bellied toad',
  'fire bellied toad': 'fire-bellied toad',
  'firebelly toad': 'fire-bellied toad',
  'pac man frog': 'pacman frog',
  'pac-man frog': 'pacman frog',
  'horned frog': 'pacman frog',
  'whites tree frog': "white's tree frog",
  'dumpy frog': "white's tree frog",
  'dumpy tree frog': "white's tree frog",

  // Birds
  'african gray parrot': 'african grey parrot',
  'gray parrot': 'african grey parrot',
  'cag': 'african grey parrot',
  'budgerigar': 'budgie',
  'tiel': 'cockatiel',
  'cockateil': 'cockatiel',
  'gcc': 'green cheek conure',
  'green cheeked conure': 'green cheek conure',
  'love bird': 'lovebird',
  'quaker parrot': 'quaker parakeet',
  'monk parakeet': 'quaker parakeet',
  'monk parrot': 'quaker parakeet',

  // Cats. Guide titles are "<Breed>: Breed Quirks", so "bengal" matches but
  // "bengal cat" does not (the query is longer than the name). These map the
  // "<breed> cat" form people type back to the bare breed.
  'bengal cat': 'bengal',
  'maine coon cat': 'maine coon',
  'main coon': 'maine coon',
  'mainecoon': 'maine coon',
  'persian cat': 'persian',
  'ragdoll cat': 'ragdoll',
  'rag doll': 'ragdoll',
  'siamese cat': 'siamese',
  'scottish fold cat': 'scottish fold',
  'sphynx cat': 'sphynx',
  'sphinx cat': 'sphynx',
  'sphinx': 'sphynx',
  'hairless cat': 'sphynx',
  'dsh': 'domestic shorthair',
  'kitten': 'cat care',
  'kittens': 'cat care',

  // Dogs
  'german sheperd': 'german shepherd',
  'german shepard': 'german shepherd',
  'german shephard': 'german shepherd',
  'gsd': 'german shepherd',
  'lab': 'labrador retriever',
  'labrador retreiver': 'labrador retriever',
  'golden retreiver': 'golden retriever',
  'golden retriver': 'golden retriever',
  'frenchie': 'french bulldog',
  'french bull dog': 'french bulldog',
  'bull dog': 'bulldog',
  'english bulldog': 'bulldog',
  'dachsund': 'dachshund',
  'daschund': 'dachshund',
  'dashund': 'dachshund',
  'doxie': 'dachshund',
  'wiener dog': 'dachshund',
  'weiner dog': 'dachshund',
  'sausage dog': 'dachshund',
  'huskey': 'husky',
  'rottie': 'rottweiler',
  'rotweiler': 'rottweiler',
  'rottweiller': 'rottweiler',
  'puppy': 'dog care',
  'puppies': 'dog care',

  // Fish
  'beta fish': 'betta',
  'beta': 'betta',
  'siamese fighting fish': 'betta',
  'gold fish': 'goldfish',
  'guppies': 'guppy',
  'guppie': 'guppy',
  'mollies': 'molly',
  'molly fish': 'molly',
  'platies': 'platy',
  'platys': 'platy',
  'cory catfish': 'corydoras',
  'cory cat': 'corydoras',
  'cories': 'corydoras',
  'corys': 'corydoras',
  'bristle nose pleco': 'bristlenose pleco',
  'bn pleco': 'bristlenose pleco',
  'angel fish': 'angelfish',
  'oscar fish': 'oscar',
  'koi fish': 'koi',
  'coi': 'koi',
  'coy fish': 'koi',
  'zebrafish': 'zebra danio',
  'zebra fish': 'zebra danio',
  'sword tail': 'swordtail',

  // Geckos
  'leo': 'leopard gecko',
  'leo gecko': 'leopard gecko',
  'leopard geco': 'leopard gecko',
  'leopard geko': 'leopard gecko',
  'lepord gecko': 'leopard gecko',
  'crestie': 'crested gecko',
  'cresties': 'crested gecko',
  'fat tailed gecko': 'african fat-tailed gecko',
  'fat tail gecko': 'african fat-tailed gecko',
  'aft': 'african fat-tailed gecko',
  'leaf tailed gecko': 'leaf-tailed gecko',
  'morning gecko': 'mourning gecko',

  // Lizards
  'beardie': 'bearded dragon',
  'beardies': 'bearded dragon',
  'beardy': 'bearded dragon',
  'bearded dragin': 'bearded dragon',
  'breaded dragon': 'bearded dragon',
  'blue tongued skink': 'blue tongue skink',
  'blue-tongue skink': 'blue tongue skink',
  'bts': 'blue tongue skink',
  'bluey': 'blue tongue skink',
  'ackies': 'ackie monitor',
  'sav': 'savannah monitor',
  'savanna monitor': 'savannah monitor',
  'uro': 'uromastyx',
  'spiny tailed lizard': 'uromastyx',
  'yemen chameleon': 'veiled chameleon',
  'jacksons chameleon': "jackson's chameleon",
  'jackson chameleon': "jackson's chameleon",

  // Snakes
  'bp': 'ball python',
  'ball phyton': 'ball python',
  'ball pyton': 'ball python',
  'royal python': 'ball python',
  'cornsnake': 'corn snake',
  'red rat snake': 'corn snake',
  'king snake': 'kingsnake',
  'cali king': 'california kingsnake',
  'cal king': 'california kingsnake',
  'milksnake': 'milk snake',
  'hog nose': 'hognose',
  'hognosed snake': 'hognose snake',
  'western hognose': 'hognose snake',
  'gardener snake': 'garter snake',
  'garden snake': 'garter snake',
  'gartersnake': 'garter snake',
  'red tail boa': 'boa constrictor',
  'red-tailed boa': 'boa constrictor',
  'red tailed boa': 'boa constrictor',
  'rosey boa': 'rosy boa',

  // Turtles and tortoises
  'red eared slider': 'red-eared slider',
  'red ear slider': 'red-eared slider',
  'res': 'red-eared slider',
  'red footed tortoise': 'red-footed tortoise',
  'red foot tortoise': 'red-footed tortoise',
  'african spurred': 'sulcata tortoise',
  'african spurred tortoise': 'sulcata tortoise',
  'spurred tortoise': 'sulcata tortoise',
  'horsefield tortoise': 'russian tortoise',
  'horsfield tortoise': 'russian tortoise',

  // Small mammals
  'bunny': 'rabbit',
  'bunnies': 'rabbit',
  'cavy': 'guinea pig',
  'cavies': 'guinea pig',
  'ginea pig': 'guinea pig',
  'ginny pig': 'guinea pig',
  'guinie pig': 'guinea pig',
  'hampster': 'hamster',
  'hedgie': 'hedgehog',
  'hedge hog': 'hedgehog',
  'suggie': 'sugar glider',
  // "fancy rat", not "rat": as a bare variant, "rat" substring-matches inside
  // words like "temperature" in glossary definitions.
  'mice': 'mouse',
  'rats': 'fancy rat',

  // Invertebrates
  'preying mantis': 'praying mantis',
  'walking stick': 'stick insect',
  'stick bug': 'stick insect',
  'hisser': 'madagascar hissing cockroach',
  'hissers': 'madagascar hissing cockroach',
  'hissing roach': 'madagascar hissing cockroach',
};
