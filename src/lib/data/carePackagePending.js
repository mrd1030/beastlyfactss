// Known edits waiting for each care package's next edition, shown on the
// product page under the version history as "Coming in the next edition".
//
// Why this exists: the books are rebuilt all at once, not one fix at a time,
// so a correction can be live on the site for weeks before the matching
// package carries it. A buyer deserves to know that before paying, and a
// buyer who already has the book deserves to know what will change. Each
// entry says what the book says now, what it will say, and links the site
// page the fix comes from, which is the source of truth (docs/RULES.md:
// the deep dives own the numbers).
//
// Only settled, reader-facing fixes go here: a figure, a safety instruction,
// a legal status. Glossary cleanups, gear rows and wording-only edits stay in
// FIX_PACKAGES.md. An item that is still being decided (which page wins) is
// not listed until it is settled. When the edition ships, delete the
// package's entries here and add the edition's history line in
// carePackages.js.
//
// Keyed by package id. Fields: text (what changes, present tense, one
// sentence), from (site path), fromLabel (that page's name).

export const CARE_PACKAGE_PENDING = {
  'crested-gecko': [
    {
      text: 'The line that says to skip the bulb and thermostat when the room holds the range adds that the thermometers stay in either way.',
      from: '/blog/crested-gecko-tank-setup-guide/',
      fromLabel: 'Crested Gecko Tank Setup',
    },
    {
      text: 'The space for two females changes from double an 18x18x36 inch enclosure to double the 18x18x24 inch single-adult minimum.',
      from: '/blog/crested-gecko-tank-setup-guide/',
      fromLabel: 'Crested Gecko Tank Setup',
    },
    {
      text: 'The cool area at the floor changes from 70 to 75 F to 72 to 75 F, so the floor sits at the line where lethargy sets in rather than below it.',
      from: '/blog/crested-gecko-tank-setup-guide/',
      fromLabel: 'Crested Gecko Tank Setup',
    },
  ],
  'russian-tortoise': [
    {
      text: 'Adult size changes from 5 to 10 inches to 5 to 9 inches, matching the largest verified animals at about 22 cm.',
      from: '/blog/russian-tortoise-handling-guide/',
      fromLabel: 'Russian Tortoise Handling',
    },
  ],
  'axolotl': [
    {
      text: 'Gloves change from nitrile to powder-free vinyl wetted with dechlorinated water, with nitrile as the fallback and never latex.',
      from: '/blog/axolotl-handling-guide/',
      fromLabel: 'Axolotl Handling',
    },
    {
      text: 'Arkansas moves from unclear to banned: the axolotl is on the prohibited list, and only an animal owned before May 16, 2024 and registered by June 30, 2025 may still be kept. The counts on the law page change to banned in 7 and unclear in none.',
      from: '/blog/axolotl-legal-guide/',
      fromLabel: 'Axolotl Legal Guide',
    },
    {
      text: 'Vermont changes from "permit, not for pets" to a permit at the Commissioner\'s discretion, decided case by case.',
      from: '/blog/axolotl-legal-guide/',
      fromLabel: 'Axolotl Legal Guide',
    },
  ],
  'whites-tree-frog': [
    {
      text: 'The version history still describes the glove rule as powder-free nitrile; it will read vinyl first, nitrile as the fallback, never latex, as the book body and the site already do.',
      from: '/blog/whites-tree-frog-handling-guide/',
      fromLabel: "White's Tree Frog Handling",
    },
  ],
  'cockatoo': [
    {
      text: 'Sexual maturity changes from 3 to 4 years (5 to 6 in large species) to roughly 5 to 7 years, when aggression tends to rise.',
      from: '/blog/cockatoo-handling-guide/',
      fromLabel: 'Cockatoo Handling',
    },
    {
      text: 'Vermont changes from banned to a permit at the Commissioner\'s discretion, decided case by case.',
      from: '/blog/cockatoo-legal-guide/',
      fromLabel: 'Cockatoo Legal Guide',
    },
  ],
};

export function carePackagePending(id) {
  return CARE_PACKAGE_PENDING[id] || [];
}
