// Maps a guide's `id` to deep-dive MDX article slugs (content/guides/*.mdx)
// that cover the same animal in more depth than the structured care guide -
// lets GuideDetail.jsx surface them as further reading instead of leaving
// them discoverable only via the blog list/search.
export const RELATED_ARTICLES = {
  'betta-fish': ['betta-fish-water-parameters-guide'],
  'budgie': ['budgie-cere-color-guide'],
  'veiled-chameleon': ['chameleon-hydration-drippers-misters-fogging'],
  'chameleon': ['chameleon-hydration-drippers-misters-fogging'],
  'cockatoo': ['cockatoo-screaming-feather-plucking-explained'],
  'ferret': ['ferret-adrenal-disease-guide'],
  'goldfish': ['goldfish-tank-size-bowl-myth'],
  'tarantula': ['invertebrate-molting-guide'],
  'hermit-crab': ['invertebrate-molting-guide'],
  'jumping-spider': ['invertebrate-molting-guide'],
  'praying-mantis': ['praying-mantis-ootheca-guide'],
  'rabbit': ['rabbit-gi-stasis-guide'],
  'ball-python': ['snake-brumation-guide'],
  'corn-snake': ['snake-brumation-guide'],
  'dog-universal': ['dog-bloat-gdv-guide'],
  'dog-large-breed': ['dog-bloat-gdv-guide'],
  'dog-labrador': ['dog-bloat-gdv-guide'],
  'dog-german-shepherd': ['dog-bloat-gdv-guide'],
  'cat-universal': ['cat-hairball-vs-vomiting-guide'],
  'cat-domestic-shorthair': ['cat-hairball-vs-vomiting-guide'],
  'hamster': ['hamster-vs-guinea-pig-guide'],
  'guinea-pig': ['hamster-vs-guinea-pig-guide'],
  'bearded-dragon': ['bearded-dragon-vs-leopard-gecko-guide'],
  'leopard-gecko': ['bearded-dragon-vs-leopard-gecko-guide'],
};
