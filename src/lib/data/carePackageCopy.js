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
      'A 45-page printable manual with the cold-water setup, the cooling plan for summer, a fishless cycling walkthrough, choosing a healthy axolotl, the law in every state, and the health section for what actually goes wrong.',
    heroTicks: ['45 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
    roulette: [
      'A tank set up like a warm-water community aquarium',
      'No real cycling before the axolotl goes in',
      'Water temperature nobody is actually checking',
      'No idea what fungal infection or impaction looks like',
    ],
    answers: [
      'A real cold-water tank setup, with the temperature numbers that matter and how to hold them in summer',
      'A fishless cycling walkthrough, and what to do if ammonia shows up',
      'Water targets and testing stated plainly, with the early warnings that mean a change is due',
      'Fungal and bacterial infection, impaction, floating and heat stress, each on its own page',
    ],
    inside: [
      { emoji: '🧊', title: 'Cold-water setup', line: 'Tank size and where it goes, the temperature numbers that matter, chillers, fans and cooling without one, substrate, hides and cleaning.' },
      { emoji: '💧', title: 'Filtration, cycling and water', line: 'Water quality and the nitrogen cycle, filtration, flow and lighting, water changes and hygiene.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Red flags and finding a vet, heat stress and the gills, fungal and bacterial infection, impaction and floating, ammonia burns, parasites and eyes.' },
      { emoji: '🥗', title: 'Diet by age', line: 'Feeding by age, worms, pellets and frozen foods, the never-feed list and supplements, growth and body condition.' },
      { emoji: '🤝', title: 'Handling, arrival and the law', line: 'Handling and moving an axolotl, body language, choosing one and quarantine, sexing and pairs, and where an axolotl is legal.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'Temperature: the numbers that matter' },
      { page: 13, alt: 'Diet and feeding by age' },
      { page: 25, alt: 'Heat stress and reading the gills' },
      { page: 31, alt: 'Emergency and quick targets card' },
      { page: 34, alt: 'Symptom quick reference table' },
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
      'A 50-page printable manual with basking, UVB and diet targets split by age, thermostat and UVB distance guidance, choosing a healthy dragon, the law in every state, and health triage, not one blurry range copied across a dozen care sheets.',
    heroTicks: ['50 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
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
      { emoji: '🏠', title: 'Housing and setup', line: 'The enclosure and where it goes, the temperature gradient, thermostats and probes, UVB tube and distance, substrate, bioactive setups and cleaning.' },
      { emoji: '🥗', title: 'Diet by age', line: 'Feeding by age, feeder insects and gut-loading, safe greens, the never-feed list, and calcium, vitamin D3 and multivitamin on their own page.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Metabolic bone disease, impaction and dehydration, respiratory infection, atadenovirus and yellow fungus, parasites, shedding, burns, and reading poop.' },
      { emoji: '🪟', title: 'Handling and behavior', line: 'Handling and taming, the beard, color changes, arm-waving and glass surfing explained, and enrichment that works.' },
      { emoji: '🥚', title: 'Arrival, eggs and the law', line: 'Choosing a healthy dragon and quarantine, sexing, eggs and egg binding, brumation, and where a bearded dragon is legal.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Bold Never rules, impossible to miss.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'The temperature gradient and heat' },
      { page: 13, alt: 'Diet by age' },
      { page: 28, alt: 'Metabolic bone disease' },
      { page: 35, alt: 'Emergency and quick targets card' },
      { page: 39, alt: 'Symptom quick reference table' },
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
      'A 48-page printable manual with the humidity cycle and the 85°F ceiling a crested gecko actually needs, diet powder on a real schedule, choosing a healthy gecko, the law in every state, and health triage, not a setup that quietly punishes small mistakes.',
    heroTicks: ['48 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
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
      { emoji: '💧', title: 'Humidity cycling', line: 'Temperature and the 85°F ceiling, heat control, the daily humidity cycle, misting and airflow, and UVB light and day length.' },
      { emoji: '🥗', title: 'Diet on a schedule', line: 'Feeding by age, complete diet powder mixing, rotation and refusals, feeder insects and gut-loading, the never-feed list, and calcium on its own page.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Metabolic bone disease, floppy tail syndrome and tail loss, stuck shed and respiratory infection, impaction, parasites, overheating, and reading droppings.' },
      { emoji: '🏠', title: 'Housing and handling', line: 'The vertical enclosure and where it goes, substrate and bioactive setups, cleaning, handling and taming, body language, and enrichment.' },
      { emoji: '🥚', title: 'Arrival, eggs and the law', line: 'Choosing a healthy gecko and quarantine, sexing, eggs and egg binding, shedding and the winter slowdown, and where a crested gecko is legal.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'Temperature, the 85°F ceiling and heat control' },
      { page: 12, alt: 'Diet and feeding by age' },
      { page: 27, alt: 'Metabolic bone disease' },
      { page: 33, alt: 'Emergency and quick targets card' },
      { page: 37, alt: 'Symptom quick reference table' },
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
      'A 48-page printable manual with the exact tank size, filtration, cycling and water targets goldfish actually need, feeding by age, quarantine, the Minnesota and New York rules on never releasing one, and health triage, not bowl-era advice recycled across the internet.',
    heroTicks: ['48 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
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
      { emoji: '🪣', title: 'Tank and filtration', line: 'Tank size, type and the bowl myth, water temperature, heater and lid, filter sizing, filter media and the air pump, substrate, plants and decor.' },
      { emoji: '💧', title: 'Cycling and water', line: 'Cycling with or without a fish, water targets and testing, water changes, cleaning and hygiene.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Red flags and finding a vet, ammonia poisoning and ich, fin rot, fungus, ulcers and dropsy, flukes, anchor worm and velvet, swim bladder disorder, and reading waste.' },
      { emoji: '🥗', title: 'Feeding by age', line: 'Diet by age, pellets, gel and flake, vegetables, protein foods and treats, the never-feed list, and what to do when a goldfish stops eating.' },
      { emoji: '🐟', title: 'Arrival, spawning and the law', line: 'Choosing a healthy goldfish, quarantine and the hospital tank, sexing, spawning and fry, heat waves and pond winters, and the Minnesota and New York rules on never releasing a goldfish.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'Tank size, type and the bowl myth' },
      { page: 14, alt: 'Diet by age' },
      { page: 28, alt: 'Ammonia poisoning and ich' },
      { page: 34, alt: 'Emergency and quick targets card' },
      { page: 37, alt: 'Symptom quick reference table' },
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
      'A 52-page printable manual with belly heat, thermostat and probe placement, the three-hide humidity system, diet and gut-loading by age, choosing a healthy gecko, the law in every state, and health triage, not a forum-average guess.',
    heroTicks: ['52 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
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
      { emoji: '🏜️', title: 'Housing and setup', line: 'The enclosure and where it goes, the temperature gradient and belly heat, heat mats, thermostats and probes, optional UVB, substrate, the three hides and cleaning.' },
      { emoji: '🥗', title: 'Diet by age', line: 'Feeding by age, feeder insects and gut-loading, treats, refusals and the never-feed list, calcium, vitamin D3 and multivitamin on their own page, and growth and body condition.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Stick tail disease, metabolic bone disease, impaction, dehydration and prolapse, respiratory infection, parasites and mites, stuck shed, tail loss, burns, and reading poop.' },
      { emoji: '🪟', title: 'Handling and behavior', line: 'Handling and taming, the tail, sounds and posture explained, and enrichment that works.' },
      { emoji: '🥚', title: 'Arrival, eggs and the law', line: 'Choosing a healthy gecko and quarantine, sexing, eggs and egg binding, the shed cycle and brumation, and where a leopard gecko is legal.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, routine, outage plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'The temperature gradient and belly heat' },
      { page: 13, alt: 'Diet and feeding by age' },
      { page: 29, alt: 'Cryptosporidiosis: stick tail disease' },
      { page: 36, alt: 'Emergency and quick targets card' },
      { page: 40, alt: 'Symptom quick reference table' },
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
      'A 51-page printable manual with real UVB and basking targets, the brumation decision and protocol, outdoor pens and escape-proofing, honest space requirements, the law in every state, and health triage, not the small starter tank they are usually sold with.',
    heroTicks: ['51 pages, print or view', 'Beginner and intermediate friendly', 'No external links inside the PDF'],
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
      { emoji: '🏜️', title: 'Housing and UVB', line: 'The enclosure and where it goes, temperature, basking and night lows, thermostats and timers, UVB tube and distance, humidity, substrate and cleaning.' },
      { emoji: '🌿', title: 'Outdoors and diet', line: 'Outdoor pens and escape-proofing, diet by age and how much, weeds, hay and growing your own, the never-feed list, and calcium and water on their own page.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Metabolic bone disease and pyramiding, respiratory infection and herpesvirus, shell rot and abscesses, parasites, vitamin A, bladder stones and beak overgrowth, and reading droppings.' },
      { emoji: '❄️', title: 'Behavior and brumation', line: 'Handling, daily rhythm, courtship and living alone, enrichment, and the brumation decision and protocol, so winter is not left to chance.' },
      { emoji: '⚖️', title: 'Arrival, eggs and the law', line: 'Choosing a tortoise, quarantine and the first vet visit, sexing, eggs and egg binding, and where a Russian tortoise is legal, with the four-inch rule.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, routine, outage and heat-wave plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'Print-first pages, clearly marked.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'Temperature, basking and night lows' },
      { page: 13, alt: 'Diet by age and how much' },
      { page: 28, alt: 'Metabolic bone disease and pyramiding' },
      { page: 35, alt: 'Emergency and quick targets card' },
      { page: 39, alt: 'Symptom quick reference table' },
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
      'A 49-page printable manual with enclosure and heat, the humidity range that decides everything, prey and thawing, why a ball python stops eating, choosing a healthy snake, the law in every state, seven health pages, and the printable owner tools.',
    heroTicks: ['49 pages, print or view', 'Beginner to intermediate', 'No external links inside the PDF'],
    roulette: [
      'A heat mat running bare, with no thermostat in sight',
      'Humidity ranges that swing 20 points between care sheets',
      'A snake that refuses food, and a forum that says it is dying',
      'Scale rot and respiratory infection nobody described until they were advanced',
    ],
    answers: [
      'Every heat source through a thermostat, with where the probe goes and why',
      'The humidity range that decides everything, and the substrate that holds it',
      'Why a ball python stops eating, the causes checked in order, and when a fast needs a vet',
      'Respiratory infection, scale rot, mouth rot, mites and burns, each described before it is advanced',
    ],
    inside: [
      { emoji: '🏠', title: 'Housing and heat', line: 'The enclosure and where it goes, the temperature gradient and heat sources, thermostats and probes, humidity and light, substrate, hides and cleaning.' },
      { emoji: '🐭', title: 'Prey and feeding', line: 'Feeding by age, prey types and the never-feed list, thawing and freezer storage, why a ball python stops eating, and growth and body condition.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Respiratory infection and scale rot, mouth rot, mites and burns, parasites, regurgitation and obesity, inclusion body disease, shedding, and reading droppings.' },
      { emoji: '🐍', title: 'Handling and behavior', line: 'Handling and taming, body language, normal behavior and escapes, and enrichment that works.' },
      { emoji: '🥚', title: 'Arrival, eggs and the law', line: 'Choosing a healthy snake and quarantine, telling male from female, follicles and egg binding, the winter appetite dip, and where a ball python is legal.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The pages that stop the guessing.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'The temperature gradient and heat sources' },
      { page: 12, alt: 'Diet and feeding by age' },
      { page: 26, alt: 'Respiratory infection and scale rot' },
      { page: 33, alt: 'Emergency and quick targets card' },
      { page: 37, alt: 'Symptom quick reference table' },
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
      'A 53-page printable manual with tank, heater and lid, a fishless cycling walkthrough, the water numbers that actually matter, feeding without overfeeding, choosing a healthy betta and quarantine, eight health pages with dosing limits, and a power outage plan.',
    heroTicks: ['53 pages, print or view', 'Beginner friendly', 'No external links inside the PDF'],
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
      { emoji: '🪣', title: 'Tank, heater and lid', line: 'Tank size, type and where it goes, the heater and thermometer, filtration and gentle flow, substrate, plants and decor, and cleaning.' },
      { emoji: '💧', title: 'The nitrogen cycle', line: 'The nitrogen cycle and fishless cycling, fish-in cycling and a stalled cycle, water testing and hardness, water changes and conditioner.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Red flags and testing the water first, finding a vet, fin rot, ich and velvet, columnaris, swim bladder, dropsy and fish tuberculosis, and medication rules.' },
      { emoji: '🥣', title: 'Diet', line: 'The feeding schedule, pellets and the food chart, treats and the never-feed list, why a betta stops eating, and body condition.' },
      { emoji: '🐟', title: 'Handling, arrival and behavior', line: 'Handling, body language, flaring and bubble nests, enrichment from the research, choosing a healthy betta, quarantine, tankmates and fry.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist and targets, emergency card, budget and shopping list, first 30 days, symptom reference, power outage plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The pages that keep the water at zero.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'Temperature, heater and thermometer' },
      { page: 15, alt: 'Diet and feeding schedule' },
      { page: 31, alt: 'Ich and velvet' },
      { page: 37, alt: 'Emergency and quick targets card' },
      { page: 40, alt: 'Symptom quick reference table' },
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

  // The two birds below were written from their own source HTML, edition 1.2,
  // the same way as the four above.

  cockatiel: {
    hook: 'A twenty-five-year cockatiel starts with the food bowl and a night light.',
    heroParagraph:
      'A 41-page printable manual with the cage and the bar spacing that is a safety limit, the night light that stops night frights, five ways to convert a seed eater, the levers that prevent chronic egg laying, nine health pages, and the printable owner tools.',
    heroTicks: ['41 pages, print or view', 'Beginner friendly', 'No external links inside the PDF'],
    roulette: [
      'A seed bowl sold as a complete diet',
      'A tall, narrow cage bought for its looks',
      'A bird thrashing in the dark at 2am, and nobody saying why',
      'A hen laying clutch after clutch with no male in the house',
    ],
    answers: [
      '75 to 80 percent pellets, five ways to convert a seed eater, and the weight loss that means slow down',
      'A 20 by 20 inch floor, a 24 by 24 by 30 inch target, width over height, and bars at half an inch',
      'Night frights explained, and the dim night light that prevents the injury this species is known for',
      'The trigger list for chronic laying, why the eggs stay where they are, and egg binding as a same-day emergency',
    ],
    inside: [
      { emoji: '🏠', title: 'Cage, placement and hazards', line: 'Cage size and the half-inch bar spacing, perches and dishes, where the cage goes, and the household hazards page, starting with nonstick pan fumes (PTFE).' },
      { emoji: '🪟', title: 'Sleep and night frights', line: '10 to 12 hours of real darkness, the dim night light that prevents the signature injury, and day length as the hormone lever.' },
      { emoji: '🥗', title: 'Diet and pellet conversion', line: 'The 75 to 80 percent pellet target, five conversion methods, vegetable and fruit charts, and the never-feed list.' },
      { emoji: '🤝', title: 'Handling and the crest', line: 'Taming in steps, reading the crest, one bird or two, wing clipping from both sides, sexing, and the daily gram scale.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Chronic egg laying and egg binding, vitamin A and fatty liver, psittacosis, beak and feather disease (PBFD), Giardia and plucking, molt, and quarantine.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The pages that make a five-year bird a twenty-five-year one.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'Light, sleep and night frights, with the darkness and light targets' },
      { page: 8, alt: 'Household hazards and bird-proofing, starting with nonstick pan fumes' },
      { page: 28, alt: 'Setup checklist and targets' },
      { page: 30, alt: 'Budget and shopping list' },
      { page: 32, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'New cockatiel owners buying the cage before the bird',
      'Keepers with a bird on a seed mix who want it on pellets without a hunger strike',
      'Anyone with a hen who has started laying, before it turns into a habit',
    ],
    whatNot: [
      'Not a substitute for an avian veterinarian',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  cockatoo: {
    hook: 'Four to six hours most days, for decades. Take the honest test first.',
    heroParagraph:
      'A 47-page printable manual with a decision test written to talk some readers out of the bird, six species compared, training and foraging as the plan against plucking and screaming, feather dust and your own lungs, seven health pages, state legal status, and a succession plan.',
    heroTicks: ['47 pages, print or view', 'Advanced, not a first parrot', 'No external links inside the PDF'],
    roulette: [
      'A hand-raised baby sold on the cuddling, and nothing about the bird at eight years old',
      'Constant one-on-one time in the first weeks, then a bird that screams when that person leaves the room',
      'Plucking blamed on boredom before anyone has seen a vet',
      'A bird that can live 70 years, and no plan for who takes it next',
    ],
    answers: [
      'Nine questions to answer out loud before you buy, and an honest case for adoption',
      'Independence built from day one: several people in rotation, a stand worth being on, and departures made boring',
      'Medical causes ruled out first, then training, foraging, sleep and routine in order of value',
      'A succession page: a named guardian, a sanctuary fallback, money attached, and the will',
    ],
    inside: [
      { emoji: '⚖️', title: 'The honest test', line: 'Nine questions to answer before you buy, six species compared on size, price, noise and temperament, and where the bird comes from.' },
      { emoji: '🏠', title: 'Housing, dust and hazards', line: 'Cage size, bar gauge and padlocks, the play stand, 10 to 12 hours of darkness, feather dust and the HEPA air purifier, and the fumes from overheated nonstick pans (PTFE).' },
      { emoji: '🥗', title: 'Diet and foraging', line: 'The 75 to 80 percent pellet target, converting a seed eater, the never-feed list, nuts as training pay, and nothing in a bowl.' },
      { emoji: '🤝', title: 'Training and behavior', line: 'Training sessions, bites and sexual maturity, over-bonding and independence, screaming, wing clipping, and hormones.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Plucking and the molt differential, beak and feather disease (PBFD), obesity, lipomas and fatty liver, psittacosis, droppings, and quarantine.' },
      { emoji: '🧰', title: 'The long view and owner tools', line: 'Legal status by state, a succession plan, setup checklist, emergency card, budget, first 30 days, symptom reference, and the logs.' },
    ],
    previewHeadline: 'The pages to read before the bird, and the ones to keep after.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 5, alt: 'Is a cockatoo right for you? The nine-question honest test' },
      { page: 31, alt: 'The sixty-year bird: succession and rehoming plan' },
      { page: 32, alt: 'Setup checklist and targets' },
      { page: 34, alt: 'Budget and shopping list' },
      { page: 36, alt: 'Symptom quick reference table' },
    ],
    whoFor: [
      'Anyone deciding whether to buy a cockatoo, before they meet the baby',
      'Owners of a cockatoo that screams, plucks or has become a one-person bird',
      'Keepers who want a written plan for a bird that may outlive them',
    ],
    whatNot: [
      'Not a substitute for an avian veterinarian or a certified parrot behavior consultant',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  // Written from the source HTML, edition 1.0, the same way as the birds.

  'whites-tree-frog': {
    hook: 'An easy frog for sixteen years, if someone counts the crickets.',
    heroParagraph:
      'A 39-page printable manual with the vertical enclosure, a humidity cycle that dips instead of sitting high, the water that is safe to mist with, feeding by size and age, the ridge test that catches obesity early, seven health pages, and the printable owner tools.',
    heroTicks: ['39 pages, print or view', 'Beginner friendly', 'No external links inside the PDF'],
    roulette: [
      'A care sheet that says "high humidity," and an enclosure that never dries out',
      'Untreated tap water in the mister, or distilled water because it sounds purer',
      'A frog that eats everything offered, fed everything offered',
      'Two frogs of different sizes sharing one enclosure',
    ],
    answers: [
      'A 50 to 60 percent baseline, misted to 70 to 80 once or twice a day and then left to dry back, with a chart of the cycle',
      'Dechlorinated tap or spring water only, and why distilled and reverse-osmosis water can be fatal to a frog',
      '3 to 4 insects, 2 to 3 times a week for an adult, and the eardrum ridge test that shows obesity before the waistline does',
      'Size-matched groups only, because this frog will try to swallow anything that fits, a smaller frog included',
    ],
    inside: [
      { emoji: '🏠', title: 'The vertical enclosure', line: 'The 18 by 18 by 24 inch minimum measured in height, where it goes, the gentle temperature gradient, and every heat source outside the glass.' },
      { emoji: '💧', title: 'Humidity and safe water', line: 'The cycle that dips after each misting, ventilation, the water that is safe to mist with, UVB (ultraviolet B) light, substrate and plants.' },
      { emoji: '🥣', title: 'Feeding and the ridge test', line: 'Feeding by size and age, staples and treats, gut-loading and dusting, and the fat ridges above the eardrum that read body condition.' },
      { emoji: '🤲', title: 'Handling, groups and quarantine', line: 'Plain water and no soap, size-matched groups and sexing, choosing a frog, six to eight weeks of quarantine, and normal behavior.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Obesity and fatty liver, chytrid, red-leg, metabolic bone disease and vitamin A, skin and chemical injuries, impaction and parasites.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, outage plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The cycle chart, the ridge test, and the card that lives by the enclosure.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'The humidity cycle that dips, with a chart of the evening misting spike and the dry-back' },
      { page: 14, alt: 'Body condition: reading the fat ridges above the eardrum, three readings' },
      { page: 21, alt: 'Obesity, fatty eyes and fatty liver: causes, signs and recovery' },
      { page: 28, alt: 'Emergency and quick targets card, to print and post near the enclosure' },
      { page: 29, alt: 'Budget and shopping list, setup and yearly costs' },
    ],
    whoFor: [
      "New White's tree frog owners setting up the enclosure before the frog comes home",
      'Keepers whose frog is filling out over the eardrums, or whose enclosure never dries',
      'Anyone keeping two or more frogs together, or bringing a new one home to a group',
    ],
    whatNot: [
      'Not a substitute for a veterinarian who sees amphibians',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },


  // Written from the source HTML, edition 1.0, the same way as the tree frog.

  'hognose-snake': {
    hook: 'The hood and the hiss are a bluff. The dry air is the real rule.',
    heroParagraph:
      'A 44-page printable manual with the enclosure sized by sex, a dry setup at 30 to 50% humidity, prey by gram weight, what the hood, the hiss and the death act mean, the venom question answered from the bite research, a state-by-state legal summary, seven health pages, and the printable owner tools.',
    heroTicks: ['44 pages, print or view', 'Intermediate level', 'No external links inside the PDF'],
    roulette: [
      'Misting advice borrowed from a tropical snake, for an animal from the dry prairie',
      'An adult still fed every week, because that is what it ate as a hatchling',
      'A snake that hoods, hisses and rolls over, and a forum that calls it aggressive or dying',
      '"Venomous" on one page, "harmless" on the next, and no word on whether it is legal where you live',
    ],
    answers: [
      '30 to 50% humidity, no misting, and one humid hide for shedding, because damp air is the root of respiratory infection and scale rot',
      "Prey sized by the snake's weight in grams, every 5 to 7 days while young and about every two weeks as an adult, fed in a separate container",
      'The hood, the hiss and the death act explained as bluff, and the one sign that is not the act: limp with no trigger',
      'Rear-fanged and mildly venomous, from two bite studies, and all 50 states, the District of Columbia and New York City sorted into legal, conditional, permit-only and banned',
    ],
    inside: [
      { emoji: '🏠', title: 'Dry, deep housing', line: 'The enclosure sized by sex, a 90 to 95°F basking surface, nights at room temperature but no colder than 60°F, every heat source on a thermostat, optional UVB (ultraviolet B) light, and 3 to 6 inches of substrate, deepest at the cool end.' },
      { emoji: '🐭', title: 'Feeding by gram weight', line: "Prey by the snake's weight, frozen-thawed and fed in a separate container, safe thawing, the adult schedule that prevents obesity, and the refusing hognose." },
      { emoji: '🐍', title: 'The bluff and the venom', line: 'Hooding, hissing and playing dead, what two bite studies found, how feeding bites happen, and cool water over the face to make a snake let go.' },
      { emoji: '⚖️', title: 'The law, state by state', line: 'Legal in 27, conditional in 15, permit-only in 4 and banned in 6, with which hognose each rule reaches. Three of the six bans reach only the native hognoses.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Respiratory infection and scale rot, impaction, regurgitation and obesity, mites and Cryptosporidium, stuck shed, mouth rot, burns, prolapse, and the winter slowdown.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, outage plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The gradient, the venom page, and the card that lives by the enclosure.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 7, alt: 'The temperature gradient: basking 90 to 95°F, cool side 70 to 75°F, nights at room temperature but no colder than 60°F' },
      { page: 15, alt: 'The venom question and bites: rear-fanged and mildly venomous, two bite studies, and what to do if a snake holds on' },
      { page: 25, alt: 'Respiratory and belly-scale infections: one cause, too much moisture, with signs and the vet response for each' },
      { page: 32, alt: 'Emergency and quick targets card, to print and post near the enclosure' },
      { page: 33, alt: 'Budget and shopping list, setup and yearly costs' },
    ],
    whoFor: [
      'New western hognose owners setting up the enclosure before the snake comes home',
      'Keepers whose hognose hoods, plays dead or turns down food, and want to know which of those is normal',
      'Anyone checking whether a hognose is legal in their state, or their city, before buying one',
    ],
    whatNot: [
      'Not a substitute for a veterinarian who sees reptiles',
      'Not legal advice: a summary of state rules as of October 2026, to confirm with your state and city',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  'gargoyle-gecko': {
    hook: 'It needs heat, and it cannot take much of it.',
    heroParagraph:
      'A 41-page printable manual with the tall, cluttered enclosure, a gentle warm spot under an 86°F ceiling, a humidity cycle that dries out every day, powder and insects on a real schedule, six health pages, and the printable owner tools.',
    heroTicks: ['41 pages, print or view', 'Beginner friendly', 'No external links inside the PDF'],
    roulette: [
      'A care sheet that says "no heat needed," and an enclosure with no warm spot at all',
      'Humidity held high around the clock, or left to sit dry for days',
      'Insects called an optional treat, the way crested gecko sheets describe them',
      'A tall enclosure with bare glass walls, and a gecko sleeping upside down on them',
    ],
    answers: [
      'A basking spot of 82 to 85°F on a thermostat, a 70 to 75°F cool end, and the 86°F ceiling and 65°F floor printed as limits, not targets',
      'A heavy evening mist, then a dry-back toward 50 percent before the next one, with a chart of the daily cycle',
      'Complete diet powder every 2 to 3 days and dusted, gut-loaded insects 1 to 2 times a week for an adult, checked against its weight in grams',
      'Branches and cork from the floor to the top, because sleeping on bare glass is what bends the tail into floppy tail syndrome',
    ],
    inside: [
      { emoji: '🏠', title: 'The tall, cluttered enclosure', line: 'The 18 by 18 by 24 inch minimum measured in height, where it goes, safe substrates, and branches and cork from the floor to the top.' },
      { emoji: '🌡️', title: 'The gradient and the ceiling', line: 'An 82 to 85°F basking spot, the 86°F limit and 65°F floor, a thermostat on every bulb, the daily wet-dry cycle, and UVB (ultraviolet B) light.' },
      { emoji: '🦗', title: 'Powder and insects', line: 'Complete diet powder and live insects by age, gut-loading and two dusting jars, the never-feed list, and a growth table in grams.' },
      { emoji: '🤲', title: 'Handling, the bite and the tail', line: "Two weeks to settle, a bite that can break skin, a tail that grows back unlike a crested gecko's, sexing, eggs, and quarantine." },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Metabolic bone disease, floppy tail and tail loss, stuck shed and toe loss, respiratory infection, overheating, parasites and mouth rot.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, heat wave and outage plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The heat limit, the feeding schedule, and the card that lives by the enclosure.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 6, alt: 'The gradient and the 86°F ceiling: the temperature table with its two limits, and the bulb on a thermostat' },
      { page: 11, alt: 'Diet and feeding by age: complete diet powder and live insects, with the schedule for juveniles and adults' },
      { page: 24, alt: 'Floppy tail syndrome and tail loss: cause, signs and treatment for each, and the test of where the gecko sleeps' },
      { page: 29, alt: 'Emergency and quick targets card, to print and post near the enclosure' },
      { page: 30, alt: 'Budget and shopping list, setup and yearly costs' },
    ],
    whoFor: [
      'New gargoyle gecko owners setting up the enclosure before the gecko comes home',
      'Crested gecko keepers adding a gargoyle, who need the differences spelled out',
      'Anyone whose room runs warm in summer, or whose gecko sleeps on the glass',
    ],
    whatNot: [
      'Not a substitute for a veterinarian who treats reptiles',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

  // Written from the source HTML, edition 1.0, the same way as the tree frog.

  'african-fat-tail': {
    hook: 'Not a leopard gecko with a different pattern. The difference is one damp box.',
    heroParagraph:
      'A 42-page printable manual with every way it differs from a leopard gecko, belly heat on a thermostat with the probe where it belongs, the humid hide that keeps skin off the toes, a soil mix it can burrow in, feeding by age, seven health pages, and the printable owner tools.',
    heroTicks: ['42 pages, print or view', 'Beginner friendly', 'No external links inside the PDF'],
    roulette: [
      'A leopard gecko care sheet at 30 to 40 percent humidity, and old skin ringing the toes after every shed',
      'A heat mat plugged straight into the wall, or a probe taped to the back of the mat',
      '"Pure sand" in one post and "never loose substrate" in the next, for a gecko that digs',
      'A feeding chart that counts days, for a gecko that can go weeks without eating and be fine',
    ],
    answers: [
      '50 to 70 percent through the enclosure and a humid hide held at 70 to 80, the one box that prevents almost all stuck shed',
      '88 to 92°F (31 to 33°C) at the warm side surface, on a thermostat, with the probe flat on the warm hide floor and a second thermometer beside it',
      'A 70/30 topsoil and play sand mix at least 4 inches deep for healthy adults, and paper towel for juveniles, quarantine and any unwell gecko',
      'Daily feeding for hatchlings easing to 3 to 4 times a week for adults, corrected by the tail: as thick as the neck or thicker',
    ],
    inside: [
      { emoji: '🦎', title: 'Not a leopard gecko', line: 'Origin, humidity, temperament, substrate, heat, enclosure, nest temperature and price side by side, and what carries across.' },
      { emoji: '🏜️', title: 'Housing, heat and the humid hide', line: 'The 36 by 18 by 18 inch minimum or a 40-gallon breeder with the same floor, a heat mat on a thermostat, three hides, the burrowing mix, and optional UVB (ultraviolet B).' },
      { emoji: '🦗', title: 'Feeding by age', line: 'Five feeding pages: hatchling portions to adult intervals, staples, treats and the never-feed list, gut-loading and dusting, and why it stops eating.' },
      { emoji: '🤲', title: 'Handling, females and quarantine', line: 'A calm gecko handled low and never by the tail, sexing and body condition, the laying box every female needs, and 3 to 6 months of quarantine.' },
      { emoji: '⚠️', title: 'Health and red flags', line: 'Retained shed and eye problems, metabolic bone disease, impaction and respiratory infection, egg binding and prolapse, parasites, mouth rot, tail loss and burns.' },
      { emoji: '🧰', title: 'Owner tools', line: 'Setup checklist, emergency card, budget and shopping list, first 30 days, symptom reference, outage plan, pet-sitter sheet, and the logs.' },
    ],
    previewHeadline: 'The side-by-side, the probe and the hide, and the card that lives by the enclosure.',
    previews: [
      { page: 2, alt: "What's inside: the contents page, every page of the package listed" },
      { page: 5, alt: 'Fat-tail or leopard gecko: origin, humidity, temperament, substrate, belly heat, enclosure and price side by side' },
      { page: 7, alt: 'Belly heat, the thermostat and the probe: warm side, cool side and night targets, and where the probe goes' },
      { page: 8, alt: 'Humidity and the three hides: 50 to 70 percent in the enclosure and a humid hide held at 70 to 80' },
      { page: 23, alt: 'Retained shed and eye problems: cause, signs, response and recovery for skin stuck on the toes and tail tip' },
      { page: 30, alt: 'Emergency and quick targets card, to print and post near the enclosure' },
    ],
    whoFor: [
      'New African fat-tailed gecko owners setting up the enclosure before the gecko comes home',
      'Leopard gecko keepers adding a fat-tail, or running one from a leopard gecko care sheet',
      'Keepers whose gecko keeps leaving old skin on its toes or tail tip',
    ],
    whatNot: [
      'Not a substitute for a veterinarian who sees reptiles',
      'Not a live website mirror, a clean printable package instead',
      'Not a subscription, one purchase and every corrected edition is free',
    ],
  },

};

export function getCarePackageCopy(id) {
  return CARE_PACKAGE_COPY[id] || null;
}
