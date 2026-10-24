// Wrong answers for the Beastle bonus round, tighter than the pool's six
// broad groups. Before this, a squid clue drew a cockroach, a dung beetle and
// a koi, and "the colossal _____" gave it away; an antler clue drew three
// animals with no antlers. bonus.js reads both maps from KIN_FROM_DAY on.

// Close relatives, keyed by pool answer. Two of the three wrong answers come
// from the same kin first, so a squid fact is answered against octopuses and
// cuttlefish. An answer missing here falls back to its group, as before.
const KIN_LISTS = {
  'dog breed': ['BASENJI', 'BEAGLE', 'BORDER COLLIE', 'BULLDOG', 'COLLIE', 'CORGI', 'DACHSHUND', 'DOG', 'FRENCH BULLDOG', 'GERMAN SHEPHERD', 'GOLDEN RETRIEVER', 'GREYHOUND', 'HUSKY', 'LABRADOR', 'NORWEGIAN LUNDEHUND', 'RETRIEVER', 'ROTTWEILER', 'SHEPHERD', 'SHIBA INU'],
  'wild dog': ['WOLF', 'RED FOX', 'FENNEC FOX'],
  'cat breed': ['AMERICAN SHORTHAIR', 'BENGAL', 'CAT', 'DOMESTIC SHORTHAIR', 'MAINE COON', 'PERSIAN', 'RAGDOLL', 'SCOTTISH FOLD', 'SIAMESE', 'SPHYNX'],
  'wild cat': ['CHEETAH', 'LION', 'TIGER', 'SERVAL'],
  'rodent and rabbit': ['CHINCHILLA', 'DEGU', 'GERBIL', 'GUINEA PIG', 'HAMSTER', 'MOUSE', 'RAT', 'KANGAROO RAT', 'MOLE RAT', 'CAPYBARA', 'SQUIRREL', 'FLYING SQUIRREL', 'RABBIT'],
  marsupial: ['KANGAROO', 'KOALA', 'QUOKKA', 'WOMBAT', 'SUGAR GLIDER', 'TASMANIAN DEVIL', 'NUMBAT'],
  'large plant eater': ['ALPACA', 'DEER', 'GIRAFFE', 'GOAT', 'HIPPO', 'OKAPI', 'PRONGHORN', 'REINDEER', 'RHINOCEROS', 'ZEBRA', 'ELEPHANT'],
  'sea mammal': ['DOLPHIN', 'HUMPBACK WHALE', 'NARWHAL', 'ORCA', 'SPERM WHALE', 'WHALE', 'ELEPHANT SEAL', 'SEA LION', 'SEA OTTER'],
  primate: ['AYE-AYE', 'LEMUR', 'ORANGUTAN', 'PYGMY MARMOSET', 'SLOW LORIS', 'TAMARIN', 'TREE SHREW'],
  'odd mammal': ['AARDVARK', 'ARMADILLO', 'ECHIDNA', 'HEDGEHOG', 'MOLE', 'PANGOLIN', 'PLATYPUS', 'SLOTH'],
  carnivore: ['FERRET', 'HONEY BADGER', 'MEERKAT', 'RED PANDA', 'WOLVERINE', 'POLAR BEAR'],
  bat: ['BAT', 'VAMPIRE BAT'],
  gecko: ['CRESTED GECKO', 'FAT-TAILED', 'GARGOYLE GECKO', 'GECKO', 'LEAF-TAILED', 'LEOPARD GECKO', 'MOURNING GECKO', 'TOKAY GECKO'],
  snake: ['ANACONDA', 'BALL PYTHON', 'BOA CONSTRICTOR', 'CORN SNAKE', 'GABOON VIPER', 'GARTER SNAKE', 'HOGNOSE', 'KING COBRA', 'KINGSNAKE', 'MILK SNAKE', 'ROSY BOA', 'SNAKE'],
  'turtle and tortoise': ['BOX TURTLE', 'MATAMATA TURTLE', 'RED-EARED', 'RED-FOOTED', 'RUSSIAN TORTOISE', 'SEA TURTLE', 'SULCATA TORTOISE', 'TORTOISE'],
  crocodilian: ['ALLIGATOR', 'CROCODILE', 'GHARIAL'],
  lizard: ['ACKIE MONITOR', 'ANOLE', 'BASILISK LIZARD', 'BEARDED DRAGON', 'BLUE TONGUE', 'CHAMELEON', 'DRACO LIZARD', 'DRAGON', 'FIRE SKINK', 'FRILLED LIZARD', 'GILA MONSTER', 'HORNED LIZARD', 'IGUANA', 'JACKSONS CHAMELEON', 'KOMODO DRAGON', 'MARINE IGUANA', 'PANTHER CHAMELEON', 'SAVANNAH MONITOR', 'TEGU', 'THORNY DEVIL', 'UROMASTYX', 'VEILED CHAMELEON', 'TUATARA'],
  parrot: ['AFRICAN GREY', 'BUDGIE', 'COCKATIEL', 'COCKATOO', 'CONURE', 'KAKAPO', 'KEA', 'LOVEBIRD', 'PARROT', 'PARROTLET', 'QUAKER PARAKEET'],
  'water bird': ['ATLANTIC PUFFIN', 'PENGUIN', 'WANDERING ALBATROSS', 'FLAMINGO', 'GODWIT', 'SHOEBILL'],
  'bird of prey': ['BALD EAGLE', 'OWL', 'PEREGRINE FALCON', 'VULTURE', 'SECRETARY BIRD'],
  'ground bird': ['CASSOWARY', 'KIWI', 'CHICKEN', 'HOATZIN', 'CROWNED PIGEON'],
  'perching bird': ['CANARY', 'CROW', 'HUMMINGBIRD', 'KOOKABURRA', 'LYREBIRD', 'MAGPIE', 'POTOO', 'SATIN BOWERBIRD', 'SHIMA ENAGA', 'SWIFT', 'TOCO TOUCAN', 'WOODPECKER', 'ZEBRA FINCH'],
  cephalopod: ['CUTTLEFISH', 'DUMBO OCTOPUS', 'GIANT SQUID', 'MIMIC OCTOPUS', 'OCTOPUS', 'VAMPIRE SQUID'],
  crustacean: ['AMANO SHRIMP', 'CHERRY SHRIMP', 'COCONUT CRAB', 'GHOST SHRIMP', 'HERMIT CRAB', 'MANTIS SHRIMP', 'PISTOL SHRIMP', 'YETI CRAB'],
  insect: ['BOMBARDIER BEETLE', 'BUTTERFLY', 'COCKROACH', 'CRICKET', 'DUNG BEETLE', 'FIREFLY', 'HONEYBEE', 'LEAFCUTTER ANT', 'MANTIS', 'MAYFLY', 'PRAYING MANTIS', 'STICK INSECT'],
  'spider and kin': ['HOUSE SPIDER', 'JUMPING SPIDER', 'SCORPION', 'SPIDER', 'TARANTULA', 'MILLIPEDE'],
  'soft sea animal': ['BOX JELLYFISH', 'JELLYFISH', 'NUDIBRANCH', 'SEA CUCUMBER', 'SEA SPONGE', 'STARFISH', 'TARDIGRADE'],
  'aquarium fish': ['ANGELFISH', 'BETTA', 'CARDINAL TETRA', 'CORYDORAS', 'DISCUS', 'GOLDFISH', 'GUPPY', 'KOI', 'MOLLY', 'NEON TETRA', 'OSCAR', 'PLATY', 'PLECO', 'SWORDTAIL', 'ZEBRA DANIO', 'CLOWNFISH'],
  'sea fish': ['ANGLERFISH', 'BARRELEYE FISH', 'BLOBFISH', 'FRILLED SHARK', 'HAGFISH', 'OCEAN SUNFISH', 'MANTA RAY', 'SAWFISH', 'SHARK', 'LIONFISH', 'PUFFERFISH', 'ELECTRIC EEL', 'MUDSKIPPER', 'LEAFY SEADRAGON', 'SEADRAGON', 'SEAHORSE'],
  frog: ['DART FROG', 'FIRE-BELLIED', 'FLYING FROG', 'GLASS FROG', 'HAIRY FROG', 'PACMAN FROG', 'TREE FROG', 'WOOD FROG'],
  salamander: ['AXOLOTL', 'SALAMANDER', 'TIGER SALAMANDER'],
};

export const KIN = Object.fromEntries(
  Object.entries(KIN_LISTS).flatMap(([kin, answers]) => answers.map((a) => [a, kin])),
);

// Hand-picked wrong answers for animals whose facts name a feature no close
// relative in the pool shares (antlers, a tusk, a trunk, a male pregnancy),
// so even kin decoys leave one obvious choice. Two that fit the fact are
// drawn, and the third choice is always an easy miss from another group.
// Names that are not pool
// answers are plain wrong answers with no journal page; BEASTFILE_CANDIDATES.md
// lists them in case any get a Beastfile. None may share the clue's feature,
// or the question would have two right answers (no echidna for the egg-laying
// platypus, no giant panda for the bamboo-gripping red panda).
export const DECOY_OVERRIDES = {
  DEER: ['Moose', 'Elk', 'Reindeer'],
  NARWHAL: ['Walrus', 'Beluga Whale', 'Elephant Seal'],
  ELEPHANT: ['Tapir', 'Proboscis Monkey', 'Hippo'],
  SEAHORSE: ['Pipefish', 'Leafy Sea Dragon', 'Weedy Seadragon'],
  HEDGEHOG: ['Porcupine', 'Echidna', 'Tenrec'],
  PANGOLIN: ['Armadillo', 'Aardvark', 'Anteater'],
  RHINOCEROS: ['Hippo', 'Tapir', 'Cape Buffalo'],
  MOLE: ['Shrew', 'Desman', 'Hedgehog'],
  PLATYPUS: ['Beaver', 'Otter', 'Muskrat'],
  KOALA: ['Wombat', 'Sloth', 'Tree Kangaroo'],
  'RED PANDA': ['Raccoon', 'Kinkajou', 'Binturong'],
  'SLOW LORIS': ['Bushbaby', 'Tarsier', 'Lemur'],
  AXOLOTL: ['Newt', 'Hellbender', 'Tiger Salamander'],
  BAT: ['Flying Squirrel', 'Sugar Glider', 'Colugo'],
};
