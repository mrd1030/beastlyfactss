// The sales copy for each product page at /care-packages/<id>/, keyed by
// package id. The catalog in carePackages.js carries the facts (price, pages,
// edition, contents); this file carries the pitch, and the two are kept apart
// so the catalog stays scannable.
//
// The shape is the skeleton the nine Gumroad listings used
// (.gumroad-pages/products/<id>.html), section by section:
//
//   hook             the headline. One claim, not the product name
//   heroParagraph    one sentence under it. Page count in words, matching the
//                    edition in the catalog
//   heroTicks        three short reassurances under the button
//   roulette         four frustrations the free care sheets cause
//   answers          four lines answering them one for one, same order
//   inside           six cards: emoji, title, one line
//   previewHeadline  the line above the carousel
//   previews         the pages in the carousel and lightbox, rendered by
//                    scripts/render-care-package-previews.mjs to
//                    public/assets/care-packages/<id>/page-<N>.jpg. `page` is
//                    the PDF's own page number, and `alt` says what is on it.
//                    Page 2, the contents page, is always first: it is the
//                    one page that shows a buyer everything they are getting.
//                    Pages from the first care guide page onward are baked
//                    with a blur below the top third, so pick pages whose
//                    title and opening make the case on their own
//   whoFor           three lines
//   whatNot          three lines
//
// Every line is a claim about the PDF, so it has to be true of the edition in
// the bucket. Check against content/CAREPACKAGE Guides/source/<id>.html, not
// memory. No dashes, US spelling, per docs/RULES.md.

export const CARE_PACKAGE_COPY = {
  hamster: {
    hook: 'The starter kit is too small and too shallow. Start here instead.',
    heroParagraph:
      'A 37-page printable manual with the floor space and bedding depth the pet-shop kit cannot hold, wet tail recognized on sight, torpor told apart from death, and the routines that make a short life a good one.',
    heroTicks: [
      '37 pages, print or view',
      'Syrian and dwarf, every portion by species',
      'No external links inside the PDF',
    ],
    roulette: [
      'Cage sizes that range from a shoebox to a sixth of a room',
      'Bedding advice measured in inches of liner, never in burrows',
      'Diarrhea that looks minor, and a hamster that is gone in two days',
      'A cold, stiff hamster in January and no way to tell torpor from death',
    ],
    answers: [
      'One unbroken floor space target, in inches and centimetres, for Syrians and for dwarfs',
      'The bedding depth study, with the three numbers that reorder everything',
      'Wet tail on its own page, so you act the same day and not the day after',
      'A torpor checklist that says what to check, in what order, before you assume the worst',
    ],
    inside: [
      {
        emoji: '🏠',
        title: 'Enclosure and bedding',
        line: 'Floor space, bar spacing, and the depth that makes cage choice and bedding depth the same decision.',
      },
      {
        emoji: '🛞',
        title: 'The wheel, the sand bath and the rest',
        line: 'Solid wheel sizes by species, why the odometer is not a welfare score, and the sand bath that is not optional.',
      },
      {
        emoji: '🥣',
        title: 'Diet by species',
        line: 'The pellet staple, portions, scatter feeding, the never-feed list, and why a hamster stops eating.',
      },
      {
        emoji: '⚠️',
        title: 'Health and red flags',
        line: 'Wet tail, overgrown incisors, tumors, respiratory infection, diabetes, and torpor told apart from death.',
      },
      {
        emoji: '🌡️',
        title: 'Temperature and handling',
        line: 'The one threshold that matters, why there is no heat lamp, and handling that stops the biting before it starts.',
      },
      {
        emoji: '🧰',
        title: 'Owner tools',
        line: 'Setup checklist, emergency card, first 30 days, symptom reference, pet-sitter sheet, and the logs.',
      },
    ],
    previewHeadline: 'The pages you will actually print.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Enclosure size and the starter-kit problem, with the side view diagram of a deep-bedded enclosure' },
      { page: 7, alt: 'Bedding depth table, and the study behind it' },
      { page: 19, alt: 'Wet tail: cause, signs, response and recovery on one page' },
      { page: 26, alt: 'Emergency and quick targets card, to print and post by the enclosure' },
      { page: 29, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New hamster owners about to buy a cage, before they buy the wrong one',
      'Keepers whose hamster chews the bars and want to know what that is telling them',
      'Anyone who wants the emergency card on the wall and the logs in a drawer',
    ],
    whatNot: [
      'Not a substitute for a vet that actually sees rodents',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },
  // The nine below started as the Gumroad listings in .gumroad-pages/products/
  // and were rewritten against the rebuilt editions: page counts, and every
  // "inside" line, now describe the file in the bucket rather than the 20 to
  // 22 page first editions Gumroad sold.

  axolotl: {
    hook: 'Cold water and a real cycle, not a bare bowl.',
    heroParagraph:
      'A 42-page printable manual with the cold-water setup, the cooling plan for summer, a cycling walkthrough with or without the axolotl in the tank, and the health section for what actually goes wrong.',
    heroTicks: ['42 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'A tank set up like a warm-water community aquarium',
      'No real cycling before the axolotl goes in',
      'Water temperature nobody is actually checking',
      'No idea what fungal infection or impaction looks like',
    ],
    answers: [
      'A real cold-water tank setup, with the temperature numbers that matter and how to hold them in summer',
      'A cycling plan, with or without the axolotl already in the tank',
      'Water targets and testing stated plainly, with the early warnings that mean a change is due',
      'Fungal and bacterial infection, impaction, floating and heat stress, each on its own page',
    ],
    inside: [
      { emoji: '🧊', title: 'Cold-water setup', line: 'Tank size, the temperature numbers that matter, cooling methods and the summer plan.' },
      { emoji: '💧', title: 'Filtration, cycling and water', line: 'Flow, cycling with or without an axolotl, water targets and testing, water changes and early warnings.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Heat stress and reading the gills, fungal and bacterial infection, impaction and floating, burns and injuries.' },
      { emoji: '🥗', title: 'Diet, morphs and tankmates', line: 'Feeding by age, staples and the never-feed list, choosing an axolotl, housing together and tankmates.' },
      { emoji: '🛁', title: 'Tubbing and salt baths', line: 'The tubbing, cooling and salt bath methods, when to use them and when not to.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 8, alt: 'Temperature: the numbers that matter' },
      { page: 11, alt: 'Cycling, with or without an axolotl' },
      { page: 24, alt: 'Heat stress and reading the gills' },
      { page: 30, alt: 'Emergency and quick targets card' },
      { page: 33, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New axolotl owners setting up a proper cold-water tank',
      'Keepers who want one consistent cycling and water standard',
      'Anyone who wants to catch fungal issues or heat stress early',
    ],
    whatNot: [
      'Not a substitute for an aquatic-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  'bearded-dragon': {
    hook: "Basking temps you don't have to guess at.",
    heroParagraph:
      'A 35-page printable manual with basking, UVB and diet targets split by age, thermostat and UVB distance guidance, and health triage, not one blurry range copied across a dozen care sheets.',
    heroTicks: ['35 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'Basking temps that vary 15+ degrees between sources',
      'UVB replacement schedules nobody agrees on',
      'No idea what glass surfing even means',
      'Stuck shed advice that quietly makes it worse',
    ],
    answers: [
      'One basking target, split by age, with the why',
      'UVB distance, replacement interval and thermostat placement stated plainly',
      'Glass surfing explained, with the actual fix',
      'Stuck shed and brumation handled the safe way, step by step',
    ],
    inside: [
      { emoji: '🏠', title: 'Housing and setup', line: 'Enclosure, temperature, UVB and humidity, thermostats, timers and UVB distance, substrate and furnishings.' },
      { emoji: '🥗', title: 'Diet by age', line: 'Feeding by age, feeder insects, safe greens and vegetables, fruit, extras and the never-feed list.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Metabolic bone disease and impaction, respiratory infection, ADV and yellow fungus, parasites, mouth rot and eye problems.' },
      { emoji: '🪟', title: 'Brumation and shedding', line: 'Brumation, stuck shed and glass surfing, explained and fixed, plus reading poop and keeping a dragon hydrated.' },
      { emoji: '🥚', title: 'Sexing, growth and eggs', line: 'Sexing, growth and body condition, and females, eggs and egg binding.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Bold Never rules, impossible to miss.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Temperature, UVB and humidity targets' },
      { page: 9, alt: 'Diet and feeding by age' },
      { page: 17, alt: 'Metabolic bone disease and impaction' },
      { page: 23, alt: 'Emergency and quick targets card' },
      { page: 26, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New bearded dragon owners setting up correctly the first time',
      'Keepers who want a single offline reference instead of scattered tabs',
      'Anyone who prefers clear checklists over long internet rabbit holes',
    ],
    whatNot: [
      'Not a substitute for a reptile-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  budgie: {
    hook: '"Easy first bird" isn\'t the same as easy cage.',
    heroParagraph:
      'A 40-page printable manual with real cage size and bar spacing minimums, a plan for converting a seed eater to pellets, bird-proofing the house, and the health section for the mistakes that actually shorten a budgie\'s life.',
    heroTicks: ['40 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'A cage sized for the bird, not for flight and exercise',
      'A seed-only diet that skips the nutrients pellets provide',
      'No idea what fatty liver or scaly face mites look like',
      'Bar spacing nobody checked against a real minimum',
    ],
    answers: [
      'Real cage size, bar spacing and placement minimums, checked and dated',
      'A pellet-forward diet plan, with the method for converting a seed eater',
      'Fatty liver, mites, respiratory disease and egg binding called out plainly',
      'Setup checklist, first 30 days, and a quarantine plan for a second bird',
    ],
    inside: [
      { emoji: '📐', title: 'Cage and setup', line: 'Cage size, bar spacing and placement, perches and dishes, light and sleep, household hazards and bird-proofing.' },
      { emoji: '🥗', title: 'Diet', line: 'Pellets, seed and converting a seed eater, safe vegetables and herbs, fruit, treats and the never-feed list.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Fatty liver and tumors, respiratory disease and psittacosis, polyomavirus and PBFD, scaly face mites and goiter.' },
      { emoji: '🤝', title: 'Handling and social needs', line: 'One budgie or two and the talking trade-off, taming and the bite problem, wing clipping and flight.' },
      { emoji: '🥚', title: 'Hens and eggs', line: 'Sexing by cere, hormones and chronic egg laying, and egg binding on its own page.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 5, alt: 'Cage size, bar spacing and placement' },
      { page: 10, alt: 'Diet: pellets, seed and converting a seed eater' },
      { page: 20, alt: 'Obesity, fatty liver and tumors' },
      { page: 29, alt: 'Emergency and quick targets card' },
      { page: 32, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New budgie owners setting up their first cage correctly',
      'Keepers who want one consistent standard, not seed-cup advice',
      'Anyone who wants to catch fatty liver or mites early',
    ],
    whatNot: [
      'Not a substitute for an avian-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  'crested-gecko': {
    hook: 'Forgiving in some ways. Unforgiving in others.',
    heroParagraph:
      'A 34-page printable manual with the humidity cycle and the 85°F ceiling a crested gecko actually needs, diet powder on a real schedule, and health triage, not a setup that quietly punishes small mistakes.',
    heroTicks: ['34 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'Humidity that spikes and crashes instead of cycling',
      'Diet powder treated as a rough guess, not a schedule',
      'Stuck shed and MBD nobody explained how to spot',
      'Floppy tail syndrome dismissed as "just how they sit"',
    ],
    answers: [
      'A real humidity cycle, with misting, ventilation and the temperature ceiling stated plainly',
      'Complete diet powder mixed, portioned and rotated on an actual schedule',
      'Stuck shed and MBD called out where you cannot miss them',
      'Floppy tail syndrome, impaction and overheating treated as real signals',
    ],
    inside: [
      { emoji: '💧', title: 'Humidity cycling', line: 'Temperature, humidity and the 85°F ceiling, misting, ventilation and lighting.' },
      { emoji: '🥗', title: 'Diet on a schedule', line: 'Feeding by age, complete diet powder mixing and rotation, feeder insects, fruit and the never-feed list.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'MBD and floppy tail syndrome, impaction, stuck shed and respiratory infection, dehydration, tail loss and overheating.' },
      { emoji: '🏠', title: 'Housing and handling', line: 'Enclosure, common mistakes and enrichment, and reading poop and keeping a gecko hydrated.' },
      { emoji: '🥚', title: 'Sexing, growth and eggs', line: 'Sexing, growth and body condition, and females, eggs and egg binding.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Temperature, humidity and the 85°F ceiling' },
      { page: 9, alt: 'Complete diet powder: mixing, portions and rotation' },
      { page: 16, alt: 'Metabolic bone disease and floppy tail syndrome' },
      { page: 22, alt: 'Emergency and quick targets card' },
      { page: 25, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New crested gecko owners setting up a consistent enclosure',
      'Keepers who want one real humidity and feeding standard',
      'Anyone who wants to catch stuck shed or MBD early',
    ],
    whatNot: [
      'Not a substitute for a reptile-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  goldfish: {
    hook: "Stop guessing your goldfish's tank targets.",
    heroParagraph:
      'A 40-page printable manual with the exact tank size, filtration, cycling and water targets goldfish actually need, feeding by age, and health triage, not bowl-era advice recycled across the internet.',
    heroTicks: ['40 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      '"A bowl is fine to start"',
      'No real cycling before the fish goes in',
      'No idea what a red flag symptom actually looks like',
      'Advice with no source, no version, no way to check it',
    ],
    answers: [
      'Real tank size and filtration targets, no bowls',
      'A cycling plan before the fish ever goes in, and the water tests that prove it',
      'Ammonia poisoning, ich, fin rot, swim bladder disorder and dropsy called out clearly',
      'Every number sourced, versioned and dated, printed and kept by the tank',
    ],
    inside: [
      { emoji: '🪣', title: 'Tank and filtration', line: 'Tank size and the bowl myth, filtration, filter media and maintenance, substrate, plants and decor.' },
      { emoji: '💧', title: 'Cycling and water', line: 'Cycling the tank, water targets and testing, water changes and early warnings.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Ammonia poisoning and ich, fin rot, fungus and dropsy, swim bladder disorder and minor conditions.' },
      { emoji: '🥗', title: 'Feeding by age', line: 'Pellets and presentation, staple foods and vegetables, protein foods, treats and the never-feed list.' },
      { emoji: '🐟', title: 'Varieties and tankmates', line: 'Varieties, tankmates and sexing, growth and lifespan, handling, quarantine and settling in.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Tank size and the bowl myth' },
      { page: 9, alt: 'Cycling the tank' },
      { page: 23, alt: 'Ammonia poisoning and ich' },
      { page: 28, alt: 'Emergency and quick targets card' },
      { page: 31, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New goldfish owners setting up a proper tank for the first time',
      'Intermediate keepers who want one consistent standard',
      'Anyone tired of bowl advice and scattered forum threads',
    ],
    whatNot: [
      'Not a substitute for an aquatic-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  'guinea-pig': {
    hook: 'Two facts drive most vet visits. This covers both.',
    heroParagraph:
      'A 41-page printable manual with the real floor space standard, the hay that is 80 percent of the diet, the vitamin C guinea pigs cannot make on their own, bonding a pair, and eleven pages of health triage.',
    heroTicks: ['41 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'A cage sized for the pet store display, not real life',
      'Vitamin C treated as optional instead of daily',
      'Dental disease and GI stasis nobody explained',
      'Bladder stones dismissed as "just getting older"',
    ],
    answers: [
      'Real floor space, shape and flooring requirements, checked and dated',
      'Daily vitamin C targets, and scurvy by stage if they were missed',
      'Dental disease and GI stasis called out where you cannot miss them, with the 8 to 12 hour rule',
      'Bladder stones and ovarian cysts covered as the real health issues they are',
    ],
    inside: [
      { emoji: '📐', title: 'Housing and space', line: 'Enclosure size, shape and flooring, bedding, hides and layout, heat stress and household climate.' },
      { emoji: '🌾', title: 'Hay, vitamin C and diet', line: 'Hay as the 80 percent, daily vitamin C, daily vegetables and greens, pellets, treats and the never-feed list.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'GI stasis and bloat, dental disease, scurvy, respiratory infection, bladder stones, ovarian cysts, mites and antibiotics.' },
      { emoji: '🤝', title: 'Pairs and handling', line: 'Choosing pairs and groups, introducing and bonding two guinea pigs, handling, sounds and body language.' },
      { emoji: '✂️', title: 'Grooming and the vet', line: 'Nails, coats and boar cleaning, sexing and neutering, and the anesthesia and vet conversation.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 5, alt: 'Enclosure size, shape and flooring' },
      { page: 13, alt: 'Vitamin C: the rule that makes this species different' },
      { page: 19, alt: 'GI stasis, bloat and a pig that stops eating' },
      { page: 30, alt: 'Emergency and quick targets card' },
      { page: 33, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New guinea pig owners setting up the right amount of space',
      'Keepers of pairs who want one consistent standard',
      'Anyone who wants to catch dental or bladder issues early',
    ],
    whatNot: [
      'Not a substitute for an exotics-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  'leopard-gecko': {
    hook: 'The belly heat number that actually matters.',
    heroParagraph:
      'A 35-page printable manual with belly heat, thermostat and probe placement, the three-hide humidity system, diet and gut-loading by age, and health triage, not a forum-average guess.',
    heroTicks: ['35 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'Belly heat ranges that swing 10 degrees between sources',
      'No mention of humidity until shed already gets stuck',
      'Cryptosporidiosis warning signs buried three replies deep',
      'Diet advice that never changes by age or size',
    ],
    answers: [
      'One belly heat target, with where the thermostat probe goes',
      'The three-hide humidity system built in from day one',
      'Stick tail disease and MBD called out where you cannot miss them',
      'Diet and gut-loading broken out by age, not one generic list',
    ],
    inside: [
      { emoji: '🏜️', title: 'Housing and setup', line: 'Enclosure, temperature, humidity and the three hides, thermostats, probes and UVB distance, substrate and furnishings.' },
      { emoji: '🥗', title: 'Diet by age', line: 'Feeding by age, feeder insects, gut-loading, treats, refusals and the never-feed list.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Stick tail disease and MBD, impaction, stuck shed and respiratory infection, parasites, eye caps and tail loss.' },
      { emoji: '🪟', title: 'Shedding and brumation', line: 'Shedding, brumation and behavior, and reading poop and keeping a gecko hydrated.' },
      { emoji: '🥚', title: 'Sexing, growth and eggs', line: 'Sexing, growth and body condition, and females, eggs and egg binding.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Temperature, humidity and the three hides' },
      { page: 9, alt: 'Diet and feeding by age' },
      { page: 17, alt: 'Stick tail disease and metabolic bone disease' },
      { page: 23, alt: 'Emergency and quick targets card' },
      { page: 26, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New leopard gecko owners setting up their first habitat',
      'Intermediate keepers who want one consistent standard',
      'Anyone who prefers a printable manual over scattered advice',
    ],
    whatNot: [
      'Not a substitute for a reptile-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  lovebird: {
    hook: "Solo or paired isn't a small decision.",
    heroParagraph:
      'A 39-page printable manual that walks through the one-bird-or-two decision that shapes everything else, plus real cage sizing, converting a seed eater, bird-proofing the house, and health triage.',
    heroTicks: ['39 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'Solo versus pair decided by accident, not on purpose',
      "A cage sized like it's for a smaller, quieter bird",
      'Chronic egg laying nobody explained how to prevent',
      'Feather plucking dismissed instead of investigated',
    ],
    answers: [
      'The one-bird-or-two decision explained up front',
      'Real cage size, bar spacing and placement minimums',
      'Chronic egg laying and egg binding covered plainly, egg binding on its own page',
      'Feather plucking treated as the health signal it is',
    ],
    inside: [
      { emoji: '💞', title: 'One bird or two', line: 'The decision that shapes bonding, behavior and health, plus handling, taming and the bite problem.' },
      { emoji: '📐', title: 'Cage and setup', line: 'Cage size, bar spacing and placement, perches and dishes, light and sleep, household hazards and bird-proofing.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'PBFD and polyomavirus, respiratory disease and psittacosis, feather plucking, nutritional disease, mites and injuries.' },
      { emoji: '🥗', title: 'Diet', line: 'Pellets, seeds and converting a seed eater, safe vegetables and herbs, fruit, extras and the never-feed list.' },
      { emoji: '🥚', title: 'Hens and eggs', line: 'Sexing, weight and body condition, chronic egg laying, egg binding, molt, hormones and seasonal behavior.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 5, alt: 'Cage size, bar spacing and placement' },
      { page: 9, alt: 'One bird or two' },
      { page: 18, alt: 'Egg binding' },
      { page: 27, alt: 'Emergency and quick targets card' },
      { page: 30, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New lovebird owners deciding between one bird or a pair',
      'Keepers who want a real cage size, not a starter-kit guess',
      'Anyone who wants to catch egg laying issues or plucking early',
    ],
    whatNot: [
      'Not a substitute for an avian-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  'russian-tortoise': {
    hook: 'An animal that can outlive its owner deserves the setup right.',
    heroParagraph:
      'A 38-page printable manual with real UVB and basking targets, the brumation decision and protocol, outdoor housing and escape-proofing, honest space requirements, and health triage, not the small starter tank they are usually sold with.',
    heroTicks: ['38 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      "A small starter tank that's outgrown within a year",
      'UVB treated as optional instead of required',
      "No plan for winter, brumation just happens or doesn't",
      'Pyramiding and shell rot nobody explained how to spot',
    ],
    answers: [
      'Real long-term space requirements, indoors and out, checked and dated',
      'UVB, basking and night low targets stated plainly, with the equipment that controls them',
      'The brumation decision and the protocol, indoor or out',
      'Pyramiding, shell rot and MBD called out where you cannot miss them',
    ],
    inside: [
      { emoji: '🏜️', title: 'Housing and UVB', line: 'Enclosure size and the table question, temperature, basking and night lows, UVB and lighting, humidity and the moist hide.' },
      { emoji: '🌿', title: 'Outdoors and diet', line: 'Outdoor housing and escape-proofing, what a steppe grazer actually eats, weeds and growing your own, the never-feed list.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'MBD and pyramiding, respiratory infection and herpesvirus, shell rot and abscesses, parasites, vitamin A deficiency and beak overgrowth.' },
      { emoji: '❄️', title: 'Brumation and seasonal care', line: 'The brumation decision and the protocol, so winter is not left to chance.' },
      { emoji: '⚖️', title: 'Sexing, eggs and the law', line: 'Sexing, growth and body condition, females and egg binding, and the four-inch rule.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Temperature, basking and night lows' },
      { page: 11, alt: 'Diet: what a steppe grazer actually eats' },
      { page: 18, alt: 'Metabolic bone disease and pyramiding' },
      { page: 27, alt: 'Emergency and quick targets card' },
      { page: 30, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New Russian tortoise owners setting up correctly the first time',
      'Keepers weighing indoor winter against brumation',
      'Anyone who wants to catch pyramiding or shell issues early',
    ],
    whatNot: [
      'Not a substitute for a reptile-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  // The four below never had a Gumroad listing. Written from the source HTML:
  // the cover, "How to use this package", the quick profile, and the page
  // titles, so every claim is a page in the file.

  'ball-python': {
    hook: 'Every heat source on a thermostat. Everything else follows.',
    heroParagraph:
      'A 34-page printable manual with enclosure and heat, the humidity range that decides everything, a prey chart and thawing method, the seven reasons a ball python stops eating, six health pages, and the printable owner tools.',
    heroTicks: ['34 pages, print or view', 'Beginner to intermediate', 'No external links inside the PDF'],
    roulette: [
      'A heat mat running bare, with no thermostat in sight',
      'Humidity ranges that swing 20 points between care sheets',
      'A snake that refuses food, and a forum that says it is dying',
      'Scale rot and respiratory infection nobody described until they were advanced',
    ],
    answers: [
      'Every heat source through a thermostat, with where the probe goes and why',
      'The humidity range that decides everything, and the substrate that holds it',
      'The seven reasons a ball python stops eating, and the one that is illness',
      'Respiratory infection, scale rot, mouth rot, mites and burns, each described before it is advanced',
    ],
    inside: [
      { emoji: '🏠', title: 'Housing and heat', line: 'Enclosure, temperature, humidity and lighting, thermostats, probes and heat sources, substrate and furnishings.' },
      { emoji: '🐭', title: 'Prey and feeding', line: 'Feeding by age, a full prey chart and the never-feed list, thawing, presentation and refusals.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Respiratory infection and scale rot, mouth rot, mites and thermal burns, parasites, regurgitation, obesity and IBD.' },
      { emoji: '🐍', title: 'Shedding and behavior', line: 'Shedding, refusal and defensive behavior, and reading poop and keeping a ball python hydrated.' },
      { emoji: '🤲', title: 'Handling, first days and eggs', line: 'Handling and the first days, common mistakes and enrichment, and females, eggs and egg binding.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The pages that stop the guessing.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Temperature, humidity and lighting' },
      { page: 11, alt: 'Prey chart and the never-feed list' },
      { page: 16, alt: 'Respiratory infection and scale rot' },
      { page: 22, alt: 'Emergency and quick targets card' },
      { page: 25, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New ball python owners buying the enclosure before the snake',
      'Keepers whose snake has stopped eating and want the seven reasons in order',
      'Anyone who wants the setup audited against real targets rather than a forum average',
    ],
    whatNot: [
      'Not a substitute for a reptile-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  'betta-fish': {
    hook: 'The tank is cycled before the fish goes in. Everything else is detail.',
    heroParagraph:
      'A 37-page printable manual with tank, heater and lid, a fishless cycling walkthrough, the water numbers that actually matter, feeding without overfeeding, five health pages with dosing limits, and a blackout plan.',
    heroTicks: ['37 pages, print or view', 'Beginner friendly', 'No external links inside the PDF'],
    roulette: [
      'A bowl on a desk, room temperature, no filter',
      '"Add the fish and the tank will cycle itself"',
      'Fin rot treated with whatever the pet shop had on the shelf',
      'Flakes twice a day, and a bloated betta by month two',
    ],
    answers: [
      '5 gallons minimum, heated, filtered, cycled and lidded, with the reason for each',
      'A fishless cycling walkthrough, step by step, started while the fish is still in the shop',
      'Fin rot, ich, velvet and columnaris, with dosing and duration limits',
      'A pellet staple, a feeding schedule, and why a betta stops eating',
    ],
    inside: [
      { emoji: '🪣', title: 'Tank, heater and lid', line: 'Tank size, the heater and the lid, and the temperature held steady, never room temperature.' },
      { emoji: '💧', title: 'The nitrogen cycle', line: 'Filtration and the nitrogen cycle, fishless cycling step by step, water quality and testing, water changes and keeping the cycle.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Fin rot and ich, velvet and columnaris, swim bladder, dropsy and mycobacteriosis, and finding a vet.' },
      { emoji: '🥣', title: 'Diet', line: 'The feeding schedule, why a betta stops eating, the food chart and the never-feed list.' },
      { emoji: '🐟', title: 'Behavior and tankmates', line: 'Reading a healthy betta, stress signals and behavior, tankmates, and enrichment from the research.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist and water targets, emergency card, budget and shopping list, first 30 days, symptom reference, blackout plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The pages that keep the water at zero.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'Fishless cycling, step by step' },
      { page: 8, alt: 'Water quality and testing' },
      { page: 18, alt: 'Fin rot and ich' },
      { page: 24, alt: 'Emergency and quick targets card' },
      { page: 27, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New betta owners who have not bought the tank yet, which is the right time',
      'Keepers with a bowl or an unheated tank who want to fix it this week',
      'Anyone whose betta looks unwell and wants to test the water before medicating',
    ],
    whatNot: [
      'Not a substitute for an aquatic-experienced veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  rabbit: {
    hook: 'Real space, unlimited hay, and GI stasis caught early.',
    heroParagraph:
      'A 40-page printable manual with the space standard the pet aisle ignores, the hay-first diet that prevents most of what goes wrong, three pages on GI stasis, bonding a pair, why spaying is not optional, and the printable owner tools.',
    heroTicks: ['40 pages, print or view', 'Beginner to intermediate', 'No external links inside the PDF'],
    roulette: [
      'A hutch a fraction of the size a rabbit needs',
      'Pellets as the meal and hay as the bedding',
      'A rabbit off its food, and a plan to see how it looks tomorrow',
      'An unspayed female and a cancer risk nobody mentioned',
    ],
    answers: [
      '8 square feet of enclosure plus 24 of exercise, 5 hours a day, in feet and metres',
      'Grass hay as 80 to 85 percent of the diet, unlimited, with greens and pellets by life stage',
      'GI stasis on three pages, with the 8 to 12 hour rule that makes it an emergency and not a wait-and-see',
      'Spay and neuter explained with the evidence, alongside bonding a companion',
    ],
    inside: [
      { emoji: '🏠', title: 'Housing and space', line: 'Housing and space, flooring, litter training and rabbit-proofing, indoors, outdoors and temperature.' },
      { emoji: '🌾', title: 'Diet: hay first', line: 'Hay first, greens, pellets and the never-feed list, and feeding by life stage.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'GI stasis on three pages, dental disease, flystrike and snuffles, E. cuniculi, sore hocks, bladder sludge and RHDV2.' },
      { emoji: '🤲', title: 'Handling and trust', line: 'Picking a rabbit up, building trust and reading a rabbit, common mistakes, and enrichment from the research.' },
      { emoji: '💞', title: 'Bonding and neutering', line: 'Bonding and companionship, spay and neuter and why it is not optional, grooming, nails and molting.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, droppings reference, blackout plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The pages that catch it early.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 5, alt: 'Housing and space' },
      { page: 8, alt: 'Diet: hay first' },
      { page: 18, alt: 'GI stasis: recognizing it' },
      { page: 27, alt: 'Emergency and quick targets card' },
      { page: 30, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New rabbit owners before the hutch and before the rabbit',
      'Keepers who want a bonded pair and a plan to get there',
      'Anyone who wants the emergency card on the wall and the 8 to 12 hour rule in their head',
    ],
    whatNot: [
      'Not a substitute for a rabbit-savvy veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  tarantula: {
    hook: 'Keep it low, keep the water dish full, and leave it alone.',
    heroParagraph:
      'A 44-page printable manual with an enclosure built low so a fall cannot kill, substrate depth by species type, the water that prevents the most common cause of death, molting start to finish, a safe rehousing method, and where tarantulas are banned.',
    heroTicks: ['44 pages, print or view', 'Beginner friendly', 'No external links inside the PDF'],
    roulette: [
      'A tall glass enclosure and a heavy-bodied spider with somewhere to fall from',
      'A spider that has not eaten in six weeks, and an owner sure it is dying',
      'A molt that looks like death, and a hand that reaches in to check',
      'Urticating hairs in an eye, and advice to flush it',
    ],
    answers: [
      'Enclosure shape, size and the lid, floor width sized to leg span and height kept low',
      'Why a tarantula stops eating: the fasting that is normal against the dehydration that is not',
      'Molting on two pages, the cycle, and what to do and never do',
      'Urticating hairs, bites and your own safety, with the first aid clinical sources actually describe',
    ],
    inside: [
      { emoji: '🏠', title: 'Enclosure and substrate', line: 'Enclosure shape, size and the lid, substrate, hide and furnishing by type, temperature, humidity and ventilation.' },
      { emoji: '💧', title: 'Water and feeding', line: 'Water and what actually kills tarantulas, feeding by life stage, the prey chart and the never-feed list, why a tarantula stops eating.' },
      { emoji: '🕸️', title: 'Molting and rehousing', line: 'Molting, the cycle and what to do and never do, and rehousing, when and how to prepare and the method.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Dehydration and falls, molt complications, mites and mold, nematodes, DKS and pesticides, and what is not a red flag.' },
      { emoji: '🚫', title: 'Handling and the law', line: 'Why the answer to handling is no, what interacting actually looks like, urticating hairs and bites, and where tarantulas are not legal.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, blackout plan, pet-sitter sheet, and the molt and maintenance logs.' },
    ],
    previewHeadline: 'The pages that keep a spider off the floor.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Enclosure: shape, size and the lid' },
      { page: 9, alt: 'Water, and what actually kills tarantulas' },
      { page: 14, alt: 'Molting: what to do and never do' },
      { page: 30, alt: 'Emergency and quick targets card' },
      { page: 33, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New keepers choosing the enclosure before the spider',
      'Keepers whose tarantula has stopped eating and want to know whether to worry',
      'Anyone facing a first molt or a first rehousing',
    ],
    whatNot: [
      'Not a substitute for a vet that sees invertebrates',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

};

export function getCarePackageCopy(id) {
  return CARE_PACKAGE_COPY[id] || null;
}
