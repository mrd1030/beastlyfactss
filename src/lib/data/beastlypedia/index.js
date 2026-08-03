import { mammalBeastfiles } from './mammals.js';
import { reptileBeastfiles } from './reptiles.js';
import { amphibianBeastfiles } from './amphibians.js';
import { birdBeastfiles } from './birds.js';
import { marineBeastfiles } from './marine.js';

// Beastlypedia is the wild-animal counterpart to the Encyclopedia: educational
// profiles with no care advice and no difficulty rating. Kept as plain data
// rather than MDX because a Beastfile is a record of fields, not prose - which
// also keeps it out of the ~1MB MDX chunk that /content lazy-loads.
//
// Individual entries are called Beastfiles. That word is deliberately absent
// from the card UI (see BeastfileCard) and lives only in headings and copy.
export const beastfiles = [
  ...mammalBeastfiles,
  ...reptileBeastfiles,
  ...amphibianBeastfiles,
  ...birdBeastfiles,
  ...marineBeastfiles,
];

// The index filter vocabulary. Mammals, Reptiles and Birds match facts.js's own
// categories exactly, so a Beastfile's group can be used to pull related facts
// without a translation table. The two that do not line up:
//   Marine Life -> facts.js calls this "Ocean"
//   Amphibians  -> facts.js files these under "Weird & Wonderful" or "Reptiles"
// factCategoryFor() below is the single place that reconciles them, so nothing
// else has to know.
export const beastfileGroups = [
  { name: 'Mammals', emoji: '🦁', slug: 'mammals' },
  { name: 'Reptiles', emoji: '🦎', slug: 'reptiles' },
  { name: 'Amphibians', emoji: '🐸', slug: 'amphibians' },
  { name: 'Birds', emoji: '🦜', slug: 'birds' },
  { name: 'Marine Life', emoji: '🐬', slug: 'marine-life' },
  { name: 'Other', emoji: '🦄', slug: 'other' },
];

const GROUP_TO_FACT_CATEGORY = {
  'Marine Life': 'Ocean',
  Other: 'Weird & Wonderful',
};

export function factCategoryFor(group) {
  return GROUP_TO_FACT_CATEGORY[group] || group;
}

export function getBeastfile(id) {
  if (!id) return null;
  return beastfiles.find((b) => b.id === id) || null;
}

// Habitat is a label on the card, not a primary filter at launch. Exported so
// the card and the profile page render the same set rather than each inventing
// their own casing.
export const HABITATS = [
  'Desert',
  'Rainforest',
  'Ocean',
  'Freshwater',
  'Forest',
  'Savannah',
  'Wetlands',
  'Mountains',
  'Arctic',
  'Grassland',
];
