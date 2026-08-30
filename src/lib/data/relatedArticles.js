// Maps a guide's `id` to deep-dive MDX article slugs (content/guides/*.mdx)
// that cover the same animal in more depth than the structured care guide -
// lets GuideDetail.jsx surface them as further reading instead of leaving
// them discoverable only via the blog list/search.
export const RELATED_ARTICLES = {
  'betta-fish': ['betta-fish-water-parameters-guide', 'betta-fish-cost-guide', 'betta-fish-handling-guide', 'betta-fish-health-issues-guide', 'betta-fish-tank-setup-guide', 'betta-fish-feeding-guide'],
  'budgie': ['budgie-cere-color-guide', 'budgie-cost-guide', 'budgie-handling-guide', 'budgie-health-issues-guide', 'budgie-tank-setup-guide', 'budgie-enrichment-guide'],
  'cockatiel': ['cockatiel-cost-guide', 'cockatiel-handling-guide', 'cockatiel-health-issues-guide', 'cockatiel-tank-setup-guide', 'cockatiel-feeding-guide'],
  'veiled-chameleon': ['chameleon-hydration-drippers-misters-fogging', 'veiled-chameleon-cost-guide', 'veiled-chameleon-handling-guide', 'veiled-chameleon-health-issues-guide', 'veiled-chameleon-tank-setup-guide'],
  'chameleon': ['chameleon-hydration-drippers-misters-fogging', 'jacksons-chameleon-cost-guide', 'jacksons-chameleon-handling-guide', 'jacksons-chameleon-health-issues-guide', 'jacksons-chameleon-tank-setup-guide'],
  'ferret': ['ferret-adrenal-disease-guide', 'ferret-legal-guide', 'ferret-cost-guide', 'ferret-handling-guide', 'ferret-health-issues-guide', 'ferret-tank-setup-guide', 'ferret-feeding-guide'],
  'goldfish': ['goldfish-tank-size-bowl-myth', 'goldfish-cost-guide', 'goldfish-handling-guide', 'goldfish-health-issues-guide', 'goldfish-tank-setup-guide', 'goldfish-feeding-guide', 'goldfish-enrichment-guide'],
  'tarantula': ['invertebrate-molting-guide', 'tarantula-cost-guide', 'tarantula-handling-guide', 'tarantula-health-issues-guide', 'tarantula-tank-setup-guide', 'tarantula-feeding-guide'],
  'hermit-crab': ['invertebrate-molting-guide', 'hermit-crab-cost-guide', 'hermit-crab-handling-guide', 'hermit-crab-health-issues-guide', 'hermit-crab-tank-setup-guide'],
  'axolotl': ['axolotl-legal-guide', 'axolotl-cost-guide', 'axolotl-handling-guide', 'axolotl-health-issues-guide', 'axolotl-tank-setup-guide', 'axolotl-enrichment-guide'],
  'chinchilla': ['chinchilla-legal-guide', 'chinchilla-cost-guide', 'chinchilla-handling-guide', 'chinchilla-health-issues-guide', 'chinchilla-tank-setup-guide', 'chinchilla-feeding-guide'],
  'praying-mantis': ['praying-mantis-ootheca-guide', 'praying-mantis-cost-guide', 'praying-mantis-handling-guide', 'praying-mantis-health-issues-guide', 'praying-mantis-tank-setup-guide'],
  'rabbit': ['rabbit-gi-stasis-guide', 'rabbit-cost-guide', 'rabbit-handling-guide', 'rabbit-health-issues-guide', 'rabbit-tank-setup-guide', 'rabbit-feeding-guide'],
  'ball-python': ['snake-brumation-guide', 'ball-python-legal-guide', 'ball-python-cost-guide', 'ball-python-handling-guide', 'ball-python-health-issues-guide', 'ball-python-tank-setup-guide'],
  'corn-snake': ['snake-brumation-guide', 'corn-snake-cost-guide', 'corn-snake-handling-guide', 'corn-snake-health-issues-guide', 'corn-snake-tank-setup-guide', 'corn-snake-feeding-guide'],
  // Dogs and cats. Unlike the species above, these guides have no standard
  // deep-dive quintet to auto-detect, so without an entry here a breed page
  // links to none of the cross-breed condition hubs and the hubs stay
  // reachable only by search. Every hub is listed against the breeds the
  // research actually supports, not every breed it could conceivably touch.
  // When a new hub or dog/cat article ships, wire it in here too.
  'dog-universal': ['inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'dog-bloat-gdv-guide', 'why-your-dog-needs-daily-exercise', 'the-best-dog-toys-for-big-and-small-dogs-a-2026-guide', 'alpha-wolf-myth-what-the-research-actually-says', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you'],
  'dog-small-breed': ['ivdd-and-chondrodystrophy-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'the-best-dog-toys-for-big-and-small-dogs-a-2026-guide'],
  'dog-medium-breed': ['pet-obesity-body-condition-guide'],
  'dog-large-breed': ['hip-and-elbow-dysplasia-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'dog-bloat-gdv-guide', 'the-best-dog-toys-for-big-and-small-dogs-a-2026-guide'],
  'dog-beagle': ['inherited-eye-disease-dogs-cats-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'why-your-dog-needs-daily-exercise'],
  'dog-border-collie': ['inherited-eye-disease-dogs-cats-guide', 'why-your-dog-needs-daily-exercise', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you'],
  'dog-bulldog': ['inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'brachycephalic-airway-syndrome-boas-guide', 'ivdd-and-chondrodystrophy-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide'],
  'dog-dachshund': ['inherited-eye-disease-dogs-cats-guide', 'ivdd-and-chondrodystrophy-guide', 'periodontal-dental-disease-guide'],
  'dog-french-bulldog': ['inherited-eye-disease-dogs-cats-guide', 'brachycephalic-airway-syndrome-boas-guide', 'ivdd-and-chondrodystrophy-guide', 'french-bulldog-feeding-guide'],
  'dog-german-shepherd': ['inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'dog-bloat-gdv-guide', 'german-shepherd-feeding-guide', 'golden-retriever-vs-german-shepherd-guide', 'why-your-dog-needs-daily-exercise', 'alpha-wolf-myth-what-the-research-actually-says'],
  'dog-golden-retriever': ['inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'dog-bloat-gdv-guide', 'golden-retriever-feeding-guide', 'golden-retriever-vs-german-shepherd-guide'],
  'dog-labrador': ['inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'dog-bloat-gdv-guide', 'why-your-dog-needs-daily-exercise'],
  'dog-rottweiler': ['inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'pet-obesity-body-condition-guide', 'dog-bloat-gdv-guide', 'why-your-dog-needs-daily-exercise', 'alpha-wolf-myth-what-the-research-actually-says'],
  'dog-siberian-husky': ['inherited-eye-disease-dogs-cats-guide', 'hip-and-elbow-dysplasia-guide', 'why-your-dog-needs-daily-exercise', 'alpha-wolf-myth-what-the-research-actually-says'],
  'cat-universal': ['inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you'],
  'cat-american-shorthair': ['feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them'],
  'cat-bengal': ['inherited-eye-disease-dogs-cats-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them'],
  'cat-domestic-shorthair': ['feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them'],
  'cat-maine-coon': ['inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'hip-and-elbow-dysplasia-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide'],
  'cat-persian': ['inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'brachycephalic-airway-syndrome-boas-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide'],
  'cat-ragdoll': ['feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide', 'periodontal-dental-disease-guide', 'cat-hairball-vs-vomiting-guide'],
  'cat-scottish-fold': ['inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'pet-obesity-body-condition-guide'],
  'cat-siamese': ['inherited-eye-disease-dogs-cats-guide', 'feline-kidney-disease-ckd-pkd-guide', 'periodontal-dental-disease-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you'],
  'cat-sphynx': ['inherited-eye-disease-dogs-cats-guide', 'cardiomyopathy-in-cats-and-dogs-guide', 'periodontal-dental-disease-guide', 'why-cats-need-mental-enrichment-and-how-boredom-can-break-them', 'when-your-pet-wont-stop-pacing-or-hiding-what-anxious-pet-behavior-is-really-telling-you'],
  'hamster': ['hamster-cost-guide', 'hamster-handling-guide', 'hamster-health-issues-guide', 'hamster-tank-setup-guide', 'hamster-feeding-guide'],
  'guinea-pig': ['guinea-pig-scurvy-vitamin-c-guide', 'guinea-pig-cost-guide', 'guinea-pig-handling-guide', 'guinea-pig-health-issues-guide', 'guinea-pig-tank-setup-guide', 'guinea-pig-feeding-guide', 'guinea-pig-enrichment-guide'],
  'degu': ['degu-gerbil-overview', 'degu-cost-guide', 'degu-handling-guide', 'degu-health-issues-guide', 'degu-tank-setup-guide'],
  'gerbil': ['degu-gerbil-overview', 'gerbil-cost-guide', 'gerbil-handling-guide', 'gerbil-health-issues-guide', 'gerbil-tank-setup-guide'],
  'bearded-dragon': ['bearded-dragon-cost-guide', 'bearded-dragon-handling-guide', 'bearded-dragon-health-issues-guide', 'bearded-dragon-tank-setup-guide', 'bearded-dragon-feeding-guide', 'bearded-dragon-enrichment-guide', 'bioactive-setups-bearded-dragons'],
  'leopard-gecko': ['leopard-gecko-cost-guide', 'leopard-gecko-handling-guide', 'leopard-gecko-health-issues-guide', 'leopard-gecko-tank-setup-guide', 'leopard-gecko-feeding-guide', 'leopard-gecko-enrichment-guide'],
  'crested-gecko': ['crested-gecko-cost-guide', 'crested-gecko-handling-guide', 'crested-gecko-health-issues-guide', 'crested-gecko-tank-setup-guide', 'crested-gecko-enrichment-guide'],
  'gargoyle-gecko': ['gargoyle-gecko-cost-guide', 'gargoyle-gecko-handling-guide', 'gargoyle-gecko-health-issues-guide', 'gargoyle-gecko-tank-setup-guide'],
  'mourning-gecko': ['mourning-gecko-cost-guide', 'mourning-gecko-handling-guide', 'mourning-gecko-health-issues-guide', 'mourning-gecko-tank-setup-guide', 'mourning-gecko-feeding-guide'],
  'african-fat-tail': ['african-fat-tail-cost-guide', 'african-fat-tail-handling-guide', 'african-fat-tail-health-issues-guide', 'african-fat-tail-tank-setup-guide', 'african-fat-tail-feeding-guide'],
  'koi': ['koi-cost-guide', 'koi-handling-guide', 'koi-health-issues-guide', 'koi-tank-setup-guide', 'koi-feeding-guide'],
  'conure': ['conure-cost-guide', 'conure-handling-guide', 'conure-health-issues-guide', 'conure-tank-setup-guide'],
  'red-eared-slider': ['red-eared-slider-legal-guide', 'red-eared-slider-cost-guide', 'red-eared-slider-handling-guide', 'red-eared-slider-health-issues-guide', 'red-eared-slider-tank-setup-guide', 'red-eared-slider-feeding-guide'],
  'emperor-scorpion': ['emperor-scorpion-cost-guide', 'emperor-scorpion-handling-guide', 'emperor-scorpion-health-issues-guide', 'emperor-scorpion-tank-setup-guide'],
  'hognose-snake': ['hognose-snake-legal-guide', 'hognose-snake-cost-guide', 'hognose-snake-handling-guide', 'hognose-snake-health-issues-guide', 'hognose-snake-tank-setup-guide'],
  'blue-tongue-skink': ['blue-tongue-skink-cost-guide', 'blue-tongue-skink-handling-guide', 'blue-tongue-skink-health-issues-guide', 'blue-tongue-skink-tank-setup-guide'],
  'whites-tree-frog': ['whites-tree-frog-cost-guide', 'whites-tree-frog-handling-guide', 'whites-tree-frog-health-issues-guide', 'whites-tree-frog-tank-setup-guide'],
  'pacman-frog': ['pacman-frog-cost-guide', 'pacman-frog-handling-guide', 'pacman-frog-health-issues-guide', 'pacman-frog-tank-setup-guide'],
  'sulcata-tortoise': ['sulcata-tortoise-legal-guide', 'sulcata-tortoise-cost-guide', 'sulcata-tortoise-handling-guide', 'sulcata-tortoise-health-issues-guide', 'sulcata-tortoise-tank-setup-guide'],
  'hedgehog': ['hedgehog-cost-guide', 'hedgehog-handling-guide', 'hedgehog-health-issues-guide', 'hedgehog-tank-setup-guide', 'hedgehog-feeding-guide'],
  'lovebird': ['lovebird-cost-guide', 'lovebird-handling-guide', 'lovebird-health-issues-guide', 'lovebird-tank-setup-guide', 'lovebird-enrichment-guide'],
  'guppy': ['guppy-cost-guide', 'guppy-handling-guide', 'guppy-health-issues-guide', 'guppy-tank-setup-guide', 'guppy-feeding-guide'],
  'boa-constrictor': ['boa-constrictor-legal-guide', 'boa-constrictor-cost-guide', 'boa-constrictor-handling-guide', 'boa-constrictor-health-issues-guide', 'boa-constrictor-tank-setup-guide'],
  'sugar-glider': ['sugar-glider-cost-guide', 'sugar-glider-handling-guide', 'sugar-glider-health-issues-guide', 'sugar-glider-tank-setup-guide'],
  'neon-tetra': ['neon-tetra-cost-guide', 'neon-tetra-handling-guide', 'neon-tetra-health-issues-guide', 'neon-tetra-tank-setup-guide'],
  'ackie-monitor': ['ackie-monitor-cost-guide', 'ackie-monitor-handling-guide', 'ackie-monitor-health-issues-guide', 'ackie-monitor-tank-setup-guide'],
  'milk-snake': ['milk-snake-cost-guide', 'milk-snake-handling-guide', 'milk-snake-health-issues-guide', 'milk-snake-tank-setup-guide'],
  'hissing-cockroach': ['madagascar-hissing-cockroach-feeding-guide', 'madagascar-hissing-cockroach-cost-guide', 'madagascar-hissing-cockroach-handling-guide', 'madagascar-hissing-cockroach-health-issues-guide', 'madagascar-hissing-cockroach-tank-setup-guide'],
  'angelfish': ['angelfish-cost-guide', 'angelfish-handling-guide', 'angelfish-health-issues-guide', 'angelfish-tank-setup-guide', 'angelfish-feeding-guide'],
  'uromastyx': ['uromastyx-cost-guide', 'uromastyx-handling-guide', 'uromastyx-health-issues-guide', 'uromastyx-tank-setup-guide'],
  'tokay-gecko': ['tokay-gecko-cost-guide', 'tokay-gecko-handling-guide', 'tokay-gecko-health-issues-guide', 'tokay-gecko-tank-setup-guide'],
  'african-grey': ['african-grey-parrot-legal-guide', 'african-grey-parrot-cost-guide', 'african-grey-parrot-handling-guide', 'african-grey-parrot-health-issues-guide', 'african-grey-parrot-tank-setup-guide'],
  'jumping-spider': ['invertebrate-molting-guide', 'jumping-spider-feeding-guide', 'jumping-spider-cost-guide', 'jumping-spider-handling-guide', 'jumping-spider-health-issues-guide', 'jumping-spider-tank-setup-guide'],
  'savannah-monitor': ['savannah-monitor-cost-guide', 'savannah-monitor-handling-guide', 'savannah-monitor-health-issues-guide', 'savannah-monitor-tank-setup-guide'],
  'russian-tortoise': ['russian-tortoise-cost-guide', 'russian-tortoise-handling-guide', 'russian-tortoise-health-issues-guide', 'russian-tortoise-tank-setup-guide', 'russian-tortoise-enrichment-guide'],
  'cockatoo': ['cockatoo-cost-guide', 'cockatoo-handling-guide', 'cockatoo-health-issues-guide', 'cockatoo-tank-setup-guide', 'cockatoo-screaming-feather-plucking-explained'],
  'stick-insect': ['stick-insect-cost-guide', 'stick-insect-handling-guide', 'stick-insect-health-issues-guide', 'stick-insect-tank-setup-guide'],
  'leaf-tailed-gecko': ['leaf-tailed-gecko-cost-guide', 'leaf-tailed-gecko-handling-guide', 'leaf-tailed-gecko-health-issues-guide', 'leaf-tailed-gecko-tank-setup-guide'],
  'california-kingsnake': ['california-kingsnake-cost-guide', 'california-kingsnake-handling-guide', 'california-kingsnake-health-issues-guide', 'california-kingsnake-tank-setup-guide'],
  'box-turtle': ['box-turtle-legal-guide', 'box-turtle-cost-guide', 'box-turtle-handling-guide', 'box-turtle-health-issues-guide', 'box-turtle-tank-setup-guide'],
  'oscar': ['oscar-fish-cost-guide', 'oscar-fish-handling-guide', 'oscar-fish-health-issues-guide', 'oscar-fish-tank-setup-guide'],
  'canary': ['canary-cost-guide', 'canary-handling-guide', 'canary-health-issues-guide', 'canary-tank-setup-guide'],
  'millipede': ['giant-millipede-cost-guide', 'giant-millipede-handling-guide', 'giant-millipede-health-issues-guide', 'giant-millipede-tank-setup-guide'],
  'corydoras-catfish': ['corydoras-catfish-cost-guide', 'corydoras-catfish-handling-guide', 'corydoras-catfish-health-issues-guide', 'corydoras-catfish-tank-setup-guide'],
  'green-anole': ['green-anole-cost-guide', 'green-anole-handling-guide', 'green-anole-health-issues-guide', 'green-anole-tank-setup-guide'],
  'tegu': ['argentine-tegu-legal-guide', 'argentine-tegu-cost-guide', 'argentine-tegu-handling-guide', 'argentine-tegu-health-issues-guide', 'argentine-tegu-tank-setup-guide'],
  'fire-bellied-toad': ['fire-bellied-toad-cost-guide', 'fire-bellied-toad-handling-guide', 'fire-bellied-toad-health-issues-guide', 'fire-bellied-toad-tank-setup-guide'],
  'tiger-salamander': ['tiger-salamander-legal-guide', 'tiger-salamander-cost-guide', 'tiger-salamander-handling-guide', 'tiger-salamander-health-issues-guide', 'tiger-salamander-tank-setup-guide'],
  'green-iguana': ['iguana-fireskink-quaker-overview', 'green-iguana-cost-guide', 'green-iguana-handling-guide', 'green-iguana-health-issues-guide', 'green-iguana-tank-setup-guide'],
  'fire-skink': ['iguana-fireskink-quaker-overview', 'fire-skink-cost-guide', 'fire-skink-handling-guide', 'fire-skink-health-issues-guide', 'fire-skink-tank-setup-guide'],
  'quaker-parakeet': ['iguana-fireskink-quaker-overview', 'quaker-parakeet-cost-guide', 'quaker-parakeet-handling-guide', 'quaker-parakeet-health-issues-guide', 'quaker-parakeet-tank-setup-guide'],
};

// The standard 5-piece deep-dive quintet's suffixes, in display order.
const STANDARD_SUFFIXES = ['cost-guide', 'handling-guide', 'health-issues-guide', 'tank-setup-guide', 'feeding-guide'];

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
  return [...manual, ...auto];
}

// Reverse lookup: given a deep-dive article's own slug (e.g. the leopard
// gecko feeding guide), find its sibling deep-dive articles for the same
// guide(s), so a reader who lands on one article via a Guide/Encyclopedia
// "Deep Dive" link doesn't lose that thread once they're actually on the
// article. A slug can appear under more than one guide (shared pieces like
// snake-brumation-guide), so this unions every match.
export function getDeepDiveSiblings(slug, posts) {
  if (!slug) return [];
  const siblings = new Set();
  for (const articles of Object.values(RELATED_ARTICLES)) {
    if (articles.includes(slug)) {
      articles.forEach((a) => { if (a !== slug) siblings.add(a); });
    }
  }
  // Auto-detected quintet, same mechanism as getRelatedArticleSlugs: strip a
  // known suffix off this slug to get a candidate guide id, so a species with
  // no RELATED_ARTICLES entry (the normal case now) still gets working
  // sibling navigation while reading one of its own articles.
  if (posts) {
    for (const suffix of STANDARD_SUFFIXES) {
      if (slug.endsWith(`-${suffix}`)) {
        const guideId = slug.slice(0, -(suffix.length + 1));
        getAutoDetectedSlugs(guideId, posts).forEach((a) => { if (a !== slug) siblings.add(a); });
        break;
      }
    }
  }
  return [...siblings];
}
