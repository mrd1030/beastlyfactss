// Attribution for the photos that require a visible credit wherever they are
// shown: the CC BY and CC BY-SA files from Wikimedia Commons. IMAGE_CREDITS.md
// holds the full table (including the CC0 and public domain photos, which need
// no line); this is the subset the site has to display. Keyed by the same
// site-relative path FACT_IMAGES / ANIMAL_IMAGES and the Beastfiles use, so
// anything that knows which photo it is showing can look the credit up. Rendered
// by ImageLightbox, under a Beastfile's secondary image, on /credits/, and in
// the corner of a social card by scripts/generate-pins.mjs. public/_worker.js
// keeps its own copy for the RSS feed, same as it does for FACT_IMAGES.
export const PHOTO_CREDITS = {
  '/assets/facts/flamingo.jpg': {
    subject: 'American flamingo',
    author: 'JeffreyGammon',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:American_Flamingo_JG.jpg',
  },
  '/assets/facts/flamingo-2.jpg': {
    subject: 'Greater flamingo pair',
    author: 'Giles Laurent',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg',
  },
  '/assets/facts/quokka.jpg': {
    subject: 'Quokka',
    author: 'Pikuan',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Quokka_at_rottnest_(cropped).jpg',
  },
  '/assets/facts/shoebill.jpg': {
    subject: 'Shoebill',
    author: 'Bob Owen',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Balaeniceps_rex_-Ueno_Zoo,_Tokyo,_Japan-8a.jpg',
  },
  '/assets/facts/leafy-sea-dragon.jpg': {
    subject: 'Leafy sea dragon',
    author: 'James Rosindell',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Leafy_Seadragon_on_Kangaroo_Island.jpg',
  },
  '/assets/facts/thorny-devil.jpg': {
    subject: 'Thorny devil',
    author: 'Bäras',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Thornydevil.jpg',
  },
  '/assets/facts/glass-frog.jpg': {
    subject: 'Glass frog (Rulyrana susatamai)',
    author: 'Mauricio Rivera Correa',
    license: 'CC BY-SA 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/',
    source: 'https://commons.wikimedia.org/wiki/File:Cochranella_susatamai03.jpg',
  },
  '/assets/facts/coconut-crab.jpg': {
    subject: 'Coconut crab',
    author: 'Drew Avery',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Coconut_Crab_Birgus_latro.jpg',
  },
};

// The credit entry for a site-relative image path, or null when the photo
// needs no credit (owner, stock, generated, CC0 and public domain photos).
export function creditFor(imagePath) {
  return (imagePath && PHOTO_CREDITS[imagePath]) || null;
}

// One-line form for places that cannot carry links: captions, RSS, cards.
export function creditText(imagePath) {
  const credit = creditFor(imagePath);
  return credit ? `Photo: ${credit.author}, ${credit.license}` : null;
}
