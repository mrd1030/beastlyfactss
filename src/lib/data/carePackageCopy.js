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
//   previews         the interior pages in the carousel, rendered by
//                    scripts/render-care-package-previews.mjs to
//                    public/assets/care-packages/<id>/page-<N>.jpg. `page` is
//                    the PDF's own page number, and `alt` says what is on it
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
};

export function getCarePackageCopy(id) {
  return CARE_PACKAGE_COPY[id] || null;
}
