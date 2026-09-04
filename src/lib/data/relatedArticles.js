// Maps a guide's `id` to deep-dive MDX article slugs (content/guides/*.mdx)
// that cover the same animal in more depth than the structured care guide -
// lets GuideDetail.jsx surface them as further reading instead of leaving
// them discoverable only via the blog list/search.
export const RELATED_ARTICLES = {
  'betta-fish': ['betta-fish-water-parameters-guide', 'betta-fish-cost-guide', 'betta-fish-handling-guide', 'betta-fish-health-issues-guide', 'betta-fish-tank-setup-guide', 'betta-fish-feeding-guide', 'betta-fish-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'budgie': ['budgie-cere-color-guide', 'budgie-cost-guide', 'budgie-handling-guide', 'budgie-health-issues-guide', 'budgie-tank-setup-guide', 'budgie-enrichment-guide', 'bird-household-hazards-guide', 'avian-gastric-yeast-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'cockatiel': ['cockatiel-cost-guide', 'cockatiel-handling-guide', 'cockatiel-health-issues-guide', 'cockatiel-tank-setup-guide', 'cockatiel-feeding-guide', 'cockatiel-enrichment-guide', 'bird-household-hazards-guide', 'avian-gastric-yeast-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'veiled-chameleon': ['chameleon-hydration-drippers-misters-fogging', 'veiled-chameleon-cost-guide', 'veiled-chameleon-handling-guide', 'veiled-chameleon-health-issues-guide', 'veiled-chameleon-tank-setup-guide', 'veiled-chameleon-enrichment-guide', 't5-vs-compact-uvb-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'chameleon': ['chameleon-hydration-drippers-misters-fogging', 'jacksons-chameleon-cost-guide', 'jacksons-chameleon-handling-guide', 'jacksons-chameleon-health-issues-guide', 'jacksons-chameleon-tank-setup-guide', 'jacksons-chameleon-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'ferret': ['ferret-adrenal-disease-guide', 'ferret-legal-guide', 'ferret-cost-guide', 'ferret-handling-guide', 'ferret-health-issues-guide', 'ferret-tank-setup-guide', 'ferret-feeding-guide', 'ferret-enrichment-guide'],
  'cherry-shrimp': ['aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'amano-shrimp': ['aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'ghost-shrimp': ['aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'goldfish': ['goldfish-tank-size-bowl-myth', 'goldfish-cost-guide', 'goldfish-handling-guide', 'goldfish-health-issues-guide', 'goldfish-tank-setup-guide', 'goldfish-feeding-guide', 'goldfish-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'tarantula': ['invertebrate-molting-guide', 'tarantula-cost-guide', 'tarantula-handling-guide', 'tarantula-health-issues-guide', 'tarantula-tank-setup-guide', 'tarantula-feeding-guide', 'tarantula-enrichment-guide'],
  'hermit-crab': ['invertebrate-molting-guide', 'hermit-crab-cost-guide', 'hermit-crab-handling-guide', 'hermit-crab-health-issues-guide', 'hermit-crab-tank-setup-guide', 'hermit-crab-enrichment-guide'],
  'axolotl': ['axolotl-legal-guide', 'axolotl-cost-guide', 'axolotl-handling-guide', 'axolotl-health-issues-guide', 'axolotl-tank-setup-guide', 'axolotl-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'reptile-salmonella-hygiene-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'amphibian-tubbing-and-salt-baths-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'chinchilla': ['chinchilla-legal-guide', 'chinchilla-cost-guide', 'chinchilla-handling-guide', 'chinchilla-health-issues-guide', 'chinchilla-tank-setup-guide', 'chinchilla-feeding-guide', 'chinchilla-enrichment-guide', 'small-mammal-enterotoxemia-guide', 'small-mammal-temperature-heat-stress-guide'],
  'praying-mantis': ['praying-mantis-ootheca-guide', 'praying-mantis-cost-guide', 'praying-mantis-handling-guide', 'praying-mantis-health-issues-guide', 'praying-mantis-tank-setup-guide', 'praying-mantis-enrichment-guide'],
  'rabbit': ['rabbit-gi-stasis-guide', 'rabbit-cost-guide', 'rabbit-handling-guide', 'rabbit-health-issues-guide', 'rabbit-tank-setup-guide', 'rabbit-feeding-guide', 'rabbit-enrichment-guide', 'small-mammal-enterotoxemia-guide', 'small-mammal-temperature-heat-stress-guide'],
  'ball-python': ['snake-brumation-guide', 'ball-python-legal-guide', 'ball-python-cost-guide', 'ball-python-handling-guide', 'ball-python-health-issues-guide', 'ball-python-tank-setup-guide', 'ball-python-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  'corn-snake': ['snake-brumation-guide', 'corn-snake-cost-guide', 'corn-snake-handling-guide', 'corn-snake-health-issues-guide', 'corn-snake-tank-setup-guide', 'corn-snake-feeding-guide', 'corn-snake-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  'garter-snake': ['garter-snake-legal-guide', 'garter-snake-cost-guide', 'garter-snake-handling-guide', 'garter-snake-health-issues-guide', 'garter-snake-tank-setup-guide', 'garter-snake-feeding-guide', 'garter-snake-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  // Dogs and cats. Unlike the species above, these guides have no standard
  // deep-dive quintet to auto-detect, so without an entry here a breed page
  // links to none of the cross-breed condition hubs and the hubs stay
  // reachable only by search. Every hub is listed against the breeds the
  // research actually supports, not every breed it could conceivably touch.
  // When a new hub or dog/cat article ships, wire it in here too.
  'dog-universal': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'dog-bloat-gdv-guide', 'why-your-dog-needs-daily-exercise', 'the-best-dog-toys-for-big-and-small-dogs-a-2026-guide', 'alpha-wolf-myth-what-the-research-actually-says', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you', 'dog-enrichment-guide'],
  'dog-small-breed': ['ivdd-and-chondrodystrophy-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'the-best-dog-toys-for-big-and-small-dogs-a-2026-guide', 'dog-enrichment-guide', 'dachshund-enrichment-guide'],
  'dog-medium-breed': ['pet-obesity-body-condition-guide', 'dog-enrichment-guide'],
  'dog-large-breed': ['hip-and-elbow-dysplasia-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'dog-bloat-gdv-guide', 'the-best-dog-toys-for-big-and-small-dogs-a-2026-guide', 'dog-enrichment-guide'],
  'dog-beagle': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'why-your-dog-needs-daily-exercise', 'dog-enrichment-guide', 'beagle-enrichment-guide'],
  'dog-border-collie': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'why-your-dog-needs-daily-exercise', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you', 'dog-enrichment-guide', 'border-collie-enrichment-guide'],
  'dog-bulldog': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'brachycephalic-airway-syndrome-boas-guide', 'ivdd-and-chondrodystrophy-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'dog-enrichment-guide', 'bulldog-enrichment-guide', 'french-bulldog-enrichment-guide'],
  'dog-dachshund': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'ivdd-and-chondrodystrophy-guide', 'periodontal-dental-disease-guide', 'dog-enrichment-guide', 'dachshund-enrichment-guide'],
  'dog-french-bulldog': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'brachycephalic-airway-syndrome-boas-guide', 'ivdd-and-chondrodystrophy-guide', 'french-bulldog-feeding-guide', 'dog-enrichment-guide', 'french-bulldog-enrichment-guide'],
  'dog-german-shepherd': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'dog-bloat-gdv-guide', 'german-shepherd-feeding-guide', 'golden-retriever-vs-german-shepherd-guide', 'why-your-dog-needs-daily-exercise', 'alpha-wolf-myth-what-the-research-actually-says', 'dog-enrichment-guide'],
  'dog-golden-retriever': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'dog-bloat-gdv-guide', 'golden-retriever-feeding-guide', 'golden-retriever-vs-german-shepherd-guide', 'dog-enrichment-guide', 'labrador-enrichment-guide'],
  'dog-labrador': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'dog-bloat-gdv-guide', 'why-your-dog-needs-daily-exercise', 'dog-enrichment-guide', 'labrador-enrichment-guide'],
  'dog-rottweiler': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'pet-obesity-body-condition-guide', 'dog-bloat-gdv-guide', 'why-your-dog-needs-daily-exercise', 'alpha-wolf-myth-what-the-research-actually-says', 'dog-enrichment-guide'],
  'dog-siberian-husky': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'why-your-dog-needs-daily-exercise', 'alpha-wolf-myth-what-the-research-actually-says', 'dog-enrichment-guide', 'siberian-husky-enrichment-guide'],
  'cat-universal': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you', 'cat-enrichment-guide'],
  'cat-american-shorthair': ['pet-dna-test-results-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'cat-enrichment-guide'],
  'cat-bengal': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'cat-enrichment-guide', 'bengal-cat-enrichment-guide'],
  'cat-domestic-shorthair': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'cat-enrichment-guide'],
  'cat-maine-coon': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'hip-and-elbow-dysplasia-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide', 'cat-enrichment-guide'],
  'cat-persian': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'brachycephalic-airway-syndrome-boas-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide', 'cat-enrichment-guide', 'persian-cat-enrichment-guide'],
  'cat-ragdoll': ['pet-dna-test-results-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide', 'cat-enrichment-guide'],
  'cat-scottish-fold': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'cat-enrichment-guide'],
  'cat-siamese': ['pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'periodontal-dental-disease-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you', 'cat-enrichment-guide'],
  'cat-sphynx': ['conformation-breeding-laws-guide', 'pet-dna-test-results-guide', 'inherited-eye-disease-dogs-cats-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'periodontal-dental-disease-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you', 'cat-enrichment-guide', 'sphynx-cat-enrichment-guide'],
  'hamster': ['hamster-cost-guide', 'hamster-handling-guide', 'hamster-health-issues-guide', 'hamster-tank-setup-guide', 'hamster-feeding-guide', 'hamster-enrichment-guide', 'small-mammal-enterotoxemia-guide', 'small-mammal-temperature-heat-stress-guide'],
  'rat': ['rat-cost-guide', 'rat-handling-guide', 'rat-health-issues-guide', 'rat-tank-setup-guide', 'rat-feeding-guide', 'rat-enrichment-guide'],
  'guinea-pig': ['guinea-pig-scurvy-vitamin-c-guide', 'guinea-pig-cost-guide', 'guinea-pig-handling-guide', 'guinea-pig-health-issues-guide', 'guinea-pig-tank-setup-guide', 'guinea-pig-feeding-guide', 'guinea-pig-enrichment-guide', 'small-mammal-enterotoxemia-guide', 'small-mammal-temperature-heat-stress-guide'],
  'degu': ['degu-gerbil-overview', 'degu-cost-guide', 'degu-handling-guide', 'degu-health-issues-guide', 'degu-tank-setup-guide', 'degu-enrichment-guide', 'small-mammal-enterotoxemia-guide', 'small-mammal-temperature-heat-stress-guide'],
  'gerbil': ['degu-gerbil-overview', 'gerbil-cost-guide', 'gerbil-handling-guide', 'gerbil-health-issues-guide', 'gerbil-tank-setup-guide', 'gerbil-enrichment-guide', 'small-mammal-temperature-heat-stress-guide'],
  'bearded-dragon': ['bearded-dragon-cost-guide', 'bearded-dragon-handling-guide', 'bearded-dragon-health-issues-guide', 'bearded-dragon-tank-setup-guide', 'bearded-dragon-feeding-guide', 'bearded-dragon-enrichment-guide', 'bioactive-setups-bearded-dragons', 'bearded-dragon-shopping-list', 't5-vs-compact-uvb-guide', 'bearded-dragon-safe-foods-guide', 'reptile-emergency-plan-guide', 'bearded-dragon-brumation-guide', 'bearded-dragon-eggs-and-egg-binding-guide', 'bearded-dragon-growth-weight-checks-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'outdoor-reptile-housing-guide'],
  'leopard-gecko': ['leopard-gecko-cost-guide', 'leopard-gecko-handling-guide', 'leopard-gecko-health-issues-guide', 'leopard-gecko-tank-setup-guide', 'leopard-gecko-feeding-guide', 'leopard-gecko-enrichment-guide', 't5-vs-compact-uvb-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'crested-gecko': ['crested-gecko-cost-guide', 'crested-gecko-handling-guide', 'crested-gecko-health-issues-guide', 'crested-gecko-tank-setup-guide', 'crested-gecko-enrichment-guide', 't5-vs-compact-uvb-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'gargoyle-gecko': ['gargoyle-gecko-cost-guide', 'gargoyle-gecko-handling-guide', 'gargoyle-gecko-health-issues-guide', 'gargoyle-gecko-tank-setup-guide', 'gargoyle-gecko-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'mourning-gecko': ['mourning-gecko-cost-guide', 'mourning-gecko-handling-guide', 'mourning-gecko-health-issues-guide', 'mourning-gecko-tank-setup-guide', 'mourning-gecko-feeding-guide', 'mourning-gecko-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'african-fat-tail': ['african-fat-tail-cost-guide', 'african-fat-tail-handling-guide', 'african-fat-tail-health-issues-guide', 'african-fat-tail-tank-setup-guide', 'african-fat-tail-feeding-guide', 'african-fat-tail-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'koi': ['koi-cost-guide', 'koi-handling-guide', 'koi-health-issues-guide', 'koi-tank-setup-guide', 'koi-feeding-guide', 'koi-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'conure': ['conure-cost-guide', 'conure-handling-guide', 'conure-health-issues-guide', 'conure-tank-setup-guide', 'conure-enrichment-guide', 'bird-household-hazards-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'red-eared-slider': ['red-eared-slider-legal-guide', 'red-eared-slider-cost-guide', 'red-eared-slider-handling-guide', 'red-eared-slider-health-issues-guide', 'red-eared-slider-tank-setup-guide', 'red-eared-slider-feeding-guide', 'red-eared-slider-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'tortoise-brumation-guide', 'tortoise-sexing-eggs-and-egg-binding-guide', 'herbivorous-reptile-safe-plants-guide'],
  'emperor-scorpion': ['emperor-scorpion-cost-guide', 'emperor-scorpion-handling-guide', 'emperor-scorpion-health-issues-guide', 'emperor-scorpion-tank-setup-guide', 'emperor-scorpion-enrichment-guide'],
  'hognose-snake': ['hognose-snake-legal-guide', 'hognose-snake-cost-guide', 'hognose-snake-handling-guide', 'hognose-snake-health-issues-guide', 'hognose-snake-tank-setup-guide', 'hognose-snake-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  'blue-tongue-skink': ['blue-tongue-skink-cost-guide', 'blue-tongue-skink-handling-guide', 'blue-tongue-skink-health-issues-guide', 'blue-tongue-skink-tank-setup-guide', 'blue-tongue-skink-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'whites-tree-frog': ['whites-tree-frog-cost-guide', 'whites-tree-frog-handling-guide', 'whites-tree-frog-health-issues-guide', 'whites-tree-frog-tank-setup-guide', 'whites-tree-frog-enrichment-guide', 'reptile-salmonella-hygiene-guide', 'amphibian-tubbing-and-salt-baths-guide'],
  'pacman-frog': ['pacman-frog-cost-guide', 'pacman-frog-handling-guide', 'pacman-frog-health-issues-guide', 'pacman-frog-tank-setup-guide', 'pacman-frog-enrichment-guide', 'reptile-salmonella-hygiene-guide', 'amphibian-tubbing-and-salt-baths-guide'],
  'sulcata-tortoise': ['sulcata-tortoise-legal-guide', 'sulcata-tortoise-cost-guide', 'sulcata-tortoise-handling-guide', 'sulcata-tortoise-health-issues-guide', 'sulcata-tortoise-tank-setup-guide', 'sulcata-tortoise-enrichment-guide', 'reptile-emergency-plan-guide', 'chelonian-herpesvirus-quarantine-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'tortoise-brumation-guide', 'tortoise-sexing-eggs-and-egg-binding-guide', 'herbivorous-reptile-safe-plants-guide', 'outdoor-reptile-housing-guide'],
  'hedgehog': ['hedgehog-cost-guide', 'hedgehog-handling-guide', 'hedgehog-health-issues-guide', 'hedgehog-tank-setup-guide', 'hedgehog-feeding-guide', 'hedgehog-enrichment-guide'],
  'lovebird': ['lovebird-cost-guide', 'lovebird-handling-guide', 'lovebird-health-issues-guide', 'lovebird-tank-setup-guide', 'lovebird-enrichment-guide', 'bird-household-hazards-guide', 'avian-gastric-yeast-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'guppy': ['guppy-cost-guide', 'guppy-handling-guide', 'guppy-health-issues-guide', 'guppy-tank-setup-guide', 'guppy-feeding-guide', 'guppy-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'boa-constrictor': ['boa-constrictor-legal-guide', 'boa-constrictor-cost-guide', 'boa-constrictor-handling-guide', 'boa-constrictor-health-issues-guide', 'boa-constrictor-tank-setup-guide', 'boa-constrictor-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  'sugar-glider': ['sugar-glider-cost-guide', 'sugar-glider-handling-guide', 'sugar-glider-health-issues-guide', 'sugar-glider-tank-setup-guide', 'sugar-glider-enrichment-guide'],
  'neon-tetra': ['neon-tetra-cost-guide', 'neon-tetra-handling-guide', 'neon-tetra-health-issues-guide', 'neon-tetra-tank-setup-guide', 'neon-tetra-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'ackie-monitor': ['ackie-monitor-cost-guide', 'ackie-monitor-handling-guide', 'ackie-monitor-health-issues-guide', 'ackie-monitor-tank-setup-guide', 'ackie-monitor-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'milk-snake': ['milk-snake-cost-guide', 'milk-snake-handling-guide', 'milk-snake-health-issues-guide', 'milk-snake-tank-setup-guide', 'milk-snake-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  'hissing-cockroach': ['madagascar-hissing-cockroach-feeding-guide', 'madagascar-hissing-cockroach-cost-guide', 'madagascar-hissing-cockroach-handling-guide', 'madagascar-hissing-cockroach-health-issues-guide', 'madagascar-hissing-cockroach-tank-setup-guide', 'madagascar-hissing-cockroach-enrichment-guide'],
  'angelfish': ['angelfish-cost-guide', 'angelfish-handling-guide', 'angelfish-health-issues-guide', 'angelfish-tank-setup-guide', 'angelfish-feeding-guide', 'angelfish-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'uromastyx': ['uromastyx-cost-guide', 'uromastyx-handling-guide', 'uromastyx-health-issues-guide', 'uromastyx-tank-setup-guide', 'uromastyx-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'herbivorous-reptile-safe-plants-guide', 'outdoor-reptile-housing-guide'],
  'tokay-gecko': ['tokay-gecko-cost-guide', 'tokay-gecko-handling-guide', 'tokay-gecko-health-issues-guide', 'tokay-gecko-tank-setup-guide', 'tokay-gecko-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'african-grey': ['african-grey-parrot-legal-guide', 'african-grey-parrot-cost-guide', 'african-grey-parrot-handling-guide', 'african-grey-parrot-health-issues-guide', 'african-grey-parrot-tank-setup-guide', 'african-grey-parrot-enrichment-guide', 'african-grey-parrot-feeding-guide', 'bird-household-hazards-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'jumping-spider': ['invertebrate-molting-guide', 'jumping-spider-feeding-guide', 'jumping-spider-cost-guide', 'jumping-spider-handling-guide', 'jumping-spider-health-issues-guide', 'jumping-spider-tank-setup-guide', 'jumping-spider-enrichment-guide'],
  'savannah-monitor': ['savannah-monitor-cost-guide', 'savannah-monitor-handling-guide', 'savannah-monitor-health-issues-guide', 'savannah-monitor-tank-setup-guide', 'savannah-monitor-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'russian-tortoise': ['russian-tortoise-cost-guide', 'russian-tortoise-handling-guide', 'russian-tortoise-health-issues-guide', 'russian-tortoise-tank-setup-guide', 'russian-tortoise-enrichment-guide', 'reptile-emergency-plan-guide', 'chelonian-herpesvirus-quarantine-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'tortoise-brumation-guide', 'tortoise-sexing-eggs-and-egg-binding-guide', 'herbivorous-reptile-safe-plants-guide', 'outdoor-reptile-housing-guide'],
  'red-footed-tortoise': ['red-footed-tortoise-cost-guide', 'red-footed-tortoise-handling-guide', 'red-footed-tortoise-health-issues-guide', 'red-footed-tortoise-tank-setup-guide', 'red-footed-tortoise-feeding-guide', 'red-footed-tortoise-enrichment-guide', 'reptile-emergency-plan-guide', 'chelonian-herpesvirus-quarantine-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'tortoise-brumation-guide', 'tortoise-sexing-eggs-and-egg-binding-guide', 'herbivorous-reptile-safe-plants-guide', 'outdoor-reptile-housing-guide'],
  'cockatoo': ['cockatoo-cost-guide', 'cockatoo-handling-guide', 'cockatoo-health-issues-guide', 'cockatoo-tank-setup-guide', 'cockatoo-screaming-feather-plucking-explained', 'cockatoo-enrichment-guide', 'bird-household-hazards-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'stick-insect': ['stick-insect-cost-guide', 'stick-insect-handling-guide', 'stick-insect-health-issues-guide', 'stick-insect-tank-setup-guide', 'stick-insect-enrichment-guide'],
  'leaf-tailed-gecko': ['leaf-tailed-gecko-cost-guide', 'leaf-tailed-gecko-handling-guide', 'leaf-tailed-gecko-health-issues-guide', 'leaf-tailed-gecko-tank-setup-guide', 'leaf-tailed-gecko-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'california-kingsnake': ['california-kingsnake-cost-guide', 'california-kingsnake-handling-guide', 'california-kingsnake-health-issues-guide', 'california-kingsnake-tank-setup-guide', 'california-kingsnake-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  'rosy-boa': ['rosy-boa-legal-guide', 'rosy-boa-cost-guide', 'rosy-boa-handling-guide', 'rosy-boa-health-issues-guide', 'rosy-boa-tank-setup-guide', 'rosy-boa-feeding-guide', 'rosy-boa-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'snake-sexing-growth-body-condition-guide'],
  'box-turtle': ['box-turtle-legal-guide', 'box-turtle-cost-guide', 'box-turtle-handling-guide', 'box-turtle-health-issues-guide', 'box-turtle-tank-setup-guide', 'box-turtle-enrichment-guide', 'reptile-emergency-plan-guide', 'chelonian-herpesvirus-quarantine-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'tortoise-brumation-guide', 'tortoise-sexing-eggs-and-egg-binding-guide', 'herbivorous-reptile-safe-plants-guide', 'outdoor-reptile-housing-guide'],
  'oscar': ['oscar-fish-cost-guide', 'oscar-fish-handling-guide', 'oscar-fish-health-issues-guide', 'oscar-fish-tank-setup-guide', 'oscar-fish-feeding-guide', 'oscar-fish-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'canary': ['canary-cost-guide', 'canary-handling-guide', 'canary-health-issues-guide', 'canary-tank-setup-guide', 'canary-enrichment-guide', 'bird-household-hazards-guide', 'avian-gastric-yeast-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'millipede': ['giant-millipede-cost-guide', 'giant-millipede-handling-guide', 'giant-millipede-health-issues-guide', 'giant-millipede-tank-setup-guide', 'giant-millipede-enrichment-guide'],
  'corydoras-catfish': ['corydoras-catfish-cost-guide', 'corydoras-catfish-handling-guide', 'corydoras-catfish-health-issues-guide', 'corydoras-catfish-tank-setup-guide', 'corydoras-catfish-enrichment-guide', 'aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'green-anole': ['green-anole-cost-guide', 'green-anole-handling-guide', 'green-anole-health-issues-guide', 'green-anole-tank-setup-guide', 'green-anole-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'tegu': ['argentine-tegu-legal-guide', 'argentine-tegu-cost-guide', 'argentine-tegu-handling-guide', 'argentine-tegu-health-issues-guide', 'argentine-tegu-tank-setup-guide', 'argentine-tegu-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'outdoor-reptile-housing-guide'],
  'fire-bellied-toad': ['fire-bellied-toad-cost-guide', 'fire-bellied-toad-handling-guide', 'fire-bellied-toad-health-issues-guide', 'fire-bellied-toad-tank-setup-guide', 'fire-bellied-toad-enrichment-guide', 'reptile-salmonella-hygiene-guide', 'amphibian-tubbing-and-salt-baths-guide'],
  'tiger-salamander': ['tiger-salamander-legal-guide', 'tiger-salamander-cost-guide', 'tiger-salamander-handling-guide', 'tiger-salamander-health-issues-guide', 'tiger-salamander-tank-setup-guide', 'tiger-salamander-enrichment-guide', 'reptile-salmonella-hygiene-guide', 'amphibian-tubbing-and-salt-baths-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'green-iguana': ['iguana-fireskink-quaker-overview', 'green-iguana-cost-guide', 'green-iguana-handling-guide', 'green-iguana-health-issues-guide', 'green-iguana-tank-setup-guide', 'green-iguana-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide', 'herbivorous-reptile-safe-plants-guide', 'outdoor-reptile-housing-guide'],
  'fire-skink': ['iguana-fireskink-quaker-overview', 'fire-skink-cost-guide', 'fire-skink-handling-guide', 'fire-skink-health-issues-guide', 'fire-skink-tank-setup-guide', 'fire-skink-enrichment-guide', 'reptile-emergency-plan-guide', 'reptile-stool-urates-hydration-guide', 'reptile-salmonella-hygiene-guide', 'reptile-heating-thermostats-guide', 'reptile-quarantine-guide'],
  'quaker-parakeet': ['iguana-fireskink-quaker-overview', 'quaker-parakeet-cost-guide', 'quaker-parakeet-handling-guide', 'quaker-parakeet-health-issues-guide', 'quaker-parakeet-tank-setup-guide', 'quaker-parakeet-enrichment-guide', 'bird-household-hazards-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  // These species already get their own standard quintet auto-detected by
  // suffix; each entry below exists solely to attach the cross-species
  // articles on top of that, per getRelatedArticleSlugs' union behavior.
  'parrotlet': ['bird-household-hazards-guide', 'avian-gastric-yeast-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'zebra-finch': ['bird-household-hazards-guide', 'avian-gastric-yeast-guide', 'bird-quarantine-guide', 'bird-droppings-guide', 'bird-photoperiod-sleep-guide'],
  'bristlenose-pleco': ['aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
  'cardinal-tetra': ['aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'discus': ['aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'molly': ['aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'platy': ['aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'swordtail': ['aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide'],
  'zebra-danio': ['aquarium-power-outage-and-transport-guide', 'aquarium-cycling-guide', 'aquarium-filtration-guide', 'freshwater-ph-gh-kh-guide', 'fish-quarantine-and-treatment-guide', 'spotting-a-sick-fish-guide', 'cooling-an-aquarium-without-a-chiller-guide'],
};

// The standard deep-dive set's suffixes, in display order. This list does three
// jobs: it drives auto-detection below, it fixes the order articles appear in on
// a guide page, and getDeepDiveSiblings sorts tied siblings by position in it.
//
// enrichment-guide joined the set once the enrichment articles started landing.
// Before that it was a five-piece quintet, and an enrichment article could only
// reach a guide page through a hand-written RELATED_ARTICLES entry, which put it
// wherever that entry happened to list it: fifth on one species, seventh on
// another. It is sixth here because that is where it belongs, after feeding.
const STANDARD_SUFFIXES = ['cost-guide', 'handling-guide', 'health-issues-guide', 'tank-setup-guide', 'feeding-guide', 'enrichment-guide'];

// Position in STANDARD_SUFFIXES, matched against the END of the slug rather than
// against `${guideId}-${suffix}`. That matters for the handful of species whose
// article prefix differs from their guide id (african-grey vs
// african-grey-parrot-, tegu vs argentine-tegu-, hissing-cockroach vs
// madagascar-hissing-cockroach-): those articles are wired by hand and would
// otherwise sort as unrecognised extras. Anything that is not one of the six
// sorts after all of them.
function standardRank(slug) {
  const i = STANDARD_SUFFIXES.findIndex((suffix) => slug.endsWith(`-${suffix}`));
  return i === -1 ? STANDARD_SUFFIXES.length : i;
}

// Auto-detects a guide's standard deep-dive articles by matching mdxPosts
// slugs against `${guideId}-${suffix}`, so the Deep Dive block starts working
// the moment a species' articles are written, no entry in RELATED_ARTICLES
// above required. Only picks up suffixes that actually exist as files, since
// not every species has all 5 (e.g. some geckos have no feeding guide).
function getAutoDetectedSlugs(guideId, posts) {
  const known = new Set(posts.map((p) => p._id));
  return STANDARD_SUFFIXES
    .map((suffix) => `${guideId}-${suffix}`)
    .filter((slug) => known.has(slug));
}

// The single source GuideDetail.jsx and EncyclopediaAnimal.jsx should call
// instead of indexing RELATED_ARTICLES directly. Unions the auto-detected
// quintet with whatever RELATED_ARTICLES already lists (legal guides,
// disease-specific extras, shared cross-species pieces, or a guide id that
// doesn't share its articles' slug prefix, like 'dog-german-shepherd' ->
// 'german-shepherd-feeding-guide'), manual entries first so an existing
// species' curated order and extras are unaffected by this addition.
export function getRelatedArticleSlugs(guideId, posts) {
  const manual = RELATED_ARTICLES[guideId] || [];
  const manualSet = new Set(manual);
  const auto = getAutoDetectedSlugs(guideId, posts).filter((slug) => !manualSet.has(slug));
  // Sorted into the standard order rather than returned manual-first. The old
  // order put every hand-written entry ahead of every auto-detected one, so a
  // curated extra like snake-brumation-guide led the list while the article's
  // own cost guide sat below it, and an enrichment article landed fifth, sixth
  // or seventh depending on which of the six the manual entry happened to name.
  // Sorting by STANDARD_SUFFIXES gives every guide page the same sequence.
  //
  // Stable sort, so the six standard pieces come first in their fixed order and
  // everything else keeps the curated order it was written in, after them.
  return [...manual, ...auto].sort((a, b) => standardRank(a) - standardRank(b));
}

// How many siblings the Deep Dive block shows. A species article never reaches
// this: its quintet is at most four siblings plus the odd curated extra. The
// cap exists for cross-species articles, where the candidate pool runs to 15
// and the tail of it is unrelated.
const DEEP_DIVE_LIMIT = 6;

// Every guide that lists an article, manual entries plus the auto-detected
// quintet. This set is the relatedness signal the ranking below runs on: two
// articles filed under nearly the same guides are about nearly the same thing,
// and two that share only one guide out of twenty are not.
function getListingGuides(slug) {
  const guides = new Set();
  for (const [guideId, articles] of Object.entries(RELATED_ARTICLES)) {
    if (articles.includes(slug)) guides.add(guideId);
  }
  for (const suffix of STANDARD_SUFFIXES) {
    if (slug.endsWith(`-${suffix}`)) {
      // Namespaced so an auto-detected guide can never collide with a real key
      guides.add(`auto:${slug.slice(0, -(suffix.length + 1))}`);
      break;
    }
  }
  return guides;
}

function getPostCategories(post) {
  if (!post) return [];
  if (Array.isArray(post.categories) && post.categories.length) return post.categories;
  const c = post.category;
  if (!c) return [];
  const one = typeof c === 'string' ? c : c.title;
  return one ? [one] : [];
}

// Position in the quintet's display order, so tied siblings come out
// cost -> handling -> health -> tank setup -> feeding, the same sequence the
// Guide and Encyclopedia pages use. Anything that is not a quintet piece sorts
// after all of them.
function getSuffixOrder(slug) {
  const i = STANDARD_SUFFIXES.findIndex((suffix) => slug.endsWith(`-${suffix}`));
  return i === -1 ? STANDARD_SUFFIXES.length : i;
}

// Reverse lookup: given a deep-dive article's own slug (e.g. the leopard
// gecko feeding guide), find its sibling deep-dive articles, so a reader who
// lands on one article via a Guide/Encyclopedia "Deep Dive" link doesn't lose
// that thread once they're actually on the article.
//
// This used to union the ENTIRE article list of every guide that mentioned the
// slug, uncapped and in whatever order the guide ids happened to sit in the
// object literal above. That is fine for a species article, which belongs to
// one guide and gets its own clean quintet back. It falls apart for a
// cross-species piece: cardiomyopathy-in-cats-and-dogs-guide is listed under 11
// guides (dog-universal, dog-large-breed, cat-universal and eight cat breeds),
// so it returned 15 articles whose only connection was "some guide that also
// links cardiomyopathy links these too". A heart-disease article was
// recommending dog toys and the alpha wolf myth.
//
// So candidates are ranked rather than dumped. The score is the overlap between
// the two articles' guide sets (shared / union), which is self-normalising: an
// article listed under twenty guides does not out-rank a tight match just by
// being everywhere. Same category breaks ties, then quintet display order, then
// slug so the result is stable.
//
// Species behaviour is unchanged by construction: every quintet sibling shares
// the same single guide set, scores a perfect 1, and comes back in display
// order, well inside the cap.
//
// The ranking is the fallback, not the primary path. It is what a reader gets
// when we do not know where they came from: a direct landing, a search result,
// a shared link. When we do know, `fromGuideId` short-circuits all of it (see
// below), because continuing the exact list the reader was just looking at
// beats any similarity score.
export function getDeepDiveSiblings(slug, posts, { fromGuideId = null, limit = DEEP_DIVE_LIMIT } = {}) {
  if (!slug) return [];

  // If we know which guide the reader clicked through from, that guide's own
  // curated list IS the thread, and no amount of ranking beats just continuing
  // it. dog-universal lists bloat, dysplasia and exercise next to this article;
  // cat-persian lists kidney disease and hairballs. Both are correct answers to
  // "what else is like this", for different readers, which is exactly why the
  // context-free ranking below cannot get this case right on its own. Curated
  // order is kept as written: it is an editorial choice, so reordering the
  // array in this file is how you change what shows.
  //
  // Only honoured when that guide really does list this article, so a stale
  // value left in sessionStorage from an earlier click cannot pull an unrelated
  // list onto a page.
  if (fromGuideId) {
    const fromList = getRelatedArticleSlugs(fromGuideId, posts);
    if (fromList.includes(slug)) {
      const known = posts?.length
        ? new Set(posts.map((p) => p.slug?.current || p._id || p.id))
        : null;
      return fromList
        .filter((a) => a !== slug && (!known || known.has(a)))
        .slice(0, limit);
    }
  }

  const listingGuides = getListingGuides(slug);
  const candidates = new Set();
  for (const guideId of listingGuides) {
    const articles = RELATED_ARTICLES[guideId];
    if (articles) articles.forEach((a) => { if (a !== slug) candidates.add(a); });
  }
  // Auto-detected quintet, same mechanism as getRelatedArticleSlugs: strip a
  // known suffix off this slug to get a candidate guide id, so a species with
  // no RELATED_ARTICLES entry (the normal case now) still gets working
  // sibling navigation while reading one of its own articles.
  if (posts) {
    for (const suffix of STANDARD_SUFFIXES) {
      if (slug.endsWith(`-${suffix}`)) {
        const guideId = slug.slice(0, -(suffix.length + 1));
        getAutoDetectedSlugs(guideId, posts).forEach((a) => { if (a !== slug) candidates.add(a); });
        break;
      }
    }
  }
  if (candidates.size === 0) return [];

  const postBySlug = new Map();
  for (const p of posts || []) {
    const key = p.slug?.current || p._id || p.id;
    if (key) postBySlug.set(key, p);
  }
  const ownCategories = new Set(getPostCategories(postBySlug.get(slug)));

  return [...candidates]
    // A slug with no article behind it would otherwise take up one of the
    // limited slots and then be dropped by the caller, shortening the list.
    .filter((candidate) => postBySlug.size === 0 || postBySlug.has(candidate))
    .map((candidate) => {
      const theirGuides = getListingGuides(candidate);
      let shared = 0;
      for (const g of theirGuides) if (listingGuides.has(g)) shared += 1;
      const union = listingGuides.size + theirGuides.size - shared;
      return {
        slug: candidate,
        overlap: union > 0 ? shared / union : 0,
        sameCategory: getPostCategories(postBySlug.get(candidate))
          .some((c) => ownCategories.has(c)) ? 1 : 0,
        order: getSuffixOrder(candidate),
      };
    })
    .sort((a, b) => (
      b.overlap - a.overlap
      || b.sameCategory - a.sameCategory
      || a.order - b.order
      || a.slug.localeCompare(b.slug)
    ))
    .slice(0, limit)
    .map((x) => x.slug);
}
