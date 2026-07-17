// Maps a guide's `id` to deep-dive MDX article slugs (content/guides/*.mdx)
// that cover the same animal in more depth than the structured care guide -
// lets GuideDetail.jsx surface them as further reading instead of leaving
// them discoverable only via the blog list/search.
export const RELATED_ARTICLES = {
  'betta-fish': ['betta-fish-water-parameters-guide', 'betta-fish-vs-goldfish-guide'],
  'budgie': ['budgie-cere-color-guide', 'budgie-vs-cockatiel-guide', 'budgie-cost-guide', 'budgie-handling-guide', 'budgie-health-issues-guide', 'budgie-tank-setup-guide'],
  'cockatiel': ['budgie-vs-cockatiel-guide'],
  'veiled-chameleon': ['chameleon-hydration-drippers-misters-fogging'],
  'chameleon': ['chameleon-hydration-drippers-misters-fogging'],
  'cockatoo': ['cockatoo-screaming-feather-plucking-explained'],
  'ferret': ['ferret-adrenal-disease-guide'],
  'goldfish': ['goldfish-tank-size-bowl-myth', 'betta-fish-vs-goldfish-guide'],
  'tarantula': ['invertebrate-molting-guide'],
  'hermit-crab': ['invertebrate-molting-guide'],
  'jumping-spider': ['invertebrate-molting-guide'],
  'praying-mantis': ['praying-mantis-ootheca-guide'],
  'rabbit': ['rabbit-gi-stasis-guide', 'rabbit-cost-guide', 'rabbit-handling-guide', 'rabbit-health-issues-guide', 'rabbit-tank-setup-guide'],
  'ball-python': ['snake-brumation-guide', 'ball-python-vs-corn-snake-guide', 'ball-python-cost-guide', 'ball-python-handling-guide', 'ball-python-health-issues-guide', 'ball-python-tank-setup-guide'],
  'corn-snake': ['snake-brumation-guide', 'ball-python-vs-corn-snake-guide', 'corn-snake-cost-guide', 'corn-snake-handling-guide', 'corn-snake-health-issues-guide', 'corn-snake-tank-setup-guide'],
  'dog-universal': ['dog-bloat-gdv-guide'],
  'dog-large-breed': ['dog-bloat-gdv-guide'],
  'dog-labrador': ['dog-bloat-gdv-guide'],
  'dog-german-shepherd': ['dog-bloat-gdv-guide'],
  'cat-universal': ['cat-hairball-vs-vomiting-guide'],
  'cat-domestic-shorthair': ['cat-hairball-vs-vomiting-guide'],
  'hamster': ['hamster-vs-guinea-pig-guide'],
  'guinea-pig': ['hamster-vs-guinea-pig-guide', 'guinea-pig-scurvy-vitamin-c-guide'],
  'bearded-dragon': ['bearded-dragon-vs-leopard-gecko-guide', 'bearded-dragon-cost-guide', 'bearded-dragon-handling-guide', 'bearded-dragon-health-issues-guide', 'bearded-dragon-tank-setup-guide'],
  'leopard-gecko': ['bearded-dragon-vs-leopard-gecko-guide', 'leopard-gecko-vs-crested-gecko-guide', 'leopard-gecko-cost-guide', 'leopard-gecko-handling-guide', 'leopard-gecko-health-issues-guide', 'leopard-gecko-tank-setup-guide'],
  'crested-gecko': ['leopard-gecko-vs-crested-gecko-guide', 'crested-gecko-cost-guide', 'crested-gecko-handling-guide', 'crested-gecko-health-issues-guide', 'crested-gecko-tank-setup-guide'],
};
