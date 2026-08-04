// Annual animal awareness days, used to surface a matching article on the
// homepage while the event is topical.
//
// Dates checked 2026-08-01 against a compiled 2026 calendar (World Animal
// Protection, National Today, National Day Calendar, Awareness Days). Every
// fixed date below was confirmed. Shark Week was corrected from a guessed
// 12-19 July to its real 26 July - 1 August run.
//
// Two exceptions are NOT from that source and are the commonly cited dates:
// International Cat Day (8 Aug) and International Dog Day (26 Aug). That
// calendar is wildlife-focused and lists neither. Worth a check before leaning
// on them.
//
// Some observances float (a given weekday of a month) and are therefore
// declared per-year, exactly like a multi-day run. Where start equals end the
// resolver treats it as a single day, not a run. RE-CHECK FLOATING DATES EACH
// YEAR: an unlisted year simply goes dormant rather than showing a wrong one.
//
// Fixed-date events use `month` + `day`. Events that move each year (Shark Week
// is scheduled by Discovery and shifts annually) use `ranges`, keyed by year,
// and simply go dormant in any year not listed rather than guessing.
//
// `animals` is matched against article titles with matchesAnimal(), the same
// head-noun matcher the encyclopedia and guide pages use, so "Snake" picks up
// "Corn Snake" and "California Kingsnake" without picking up "Snakes and
// Ladders". `categories` is the fallback when no title matches an animal.

export const EVENT_WINDOW_DAYS = 3;

export const ANIMAL_EVENTS = [
  {
    id: 'national-bird-day', name: 'National Bird Day', emoji: '🦜',
    month: 1, day: 5,
    animals: ['Parrot', 'African Grey Parrot', 'Canary', 'Cockatoo', 'Lovebird', 'Crow'],
    categories: ['Birds'],
    blurb: 'A day for the birds, and we have plenty.',
  },
  {
    id: 'world-wildlife-day', name: 'World Wildlife Day', emoji: '🌍',
    month: 3, day: 3,
    animals: ['Pangolin', 'Naked Mole Rat', 'Giraffe', 'Slow Loris'],
    categories: ['Wild Animals'],
    blurb: 'For the species most people never get to see.',
  },
  {
    id: 'world-frog-day', name: 'World Frog Day', emoji: '🐸',
    month: 3, day: 20,
    animals: ['Wood Frog', 'Pacman Frog', 'Whites Tree Frog', 'Fire-Bellied Toad'],
    categories: ['Amphibians'],
    blurb: 'Amphibian day. The wood frog alone earns it.',
  },
  {
    id: 'world-penguin-day', name: 'World Penguin Day', emoji: '🐧',
    month: 4, day: 25,
    animals: ['Penguin'],
    categories: ['Wild Animals', 'Aquatic Life'],
    blurb: 'Cold water, formal wear.',
  },
  {
    id: 'world-bee-day', name: 'World Bee Day', emoji: '🐝',
    month: 5, day: 20,
    animals: ['Bee', 'Dung Beetle', 'Praying Mantis', 'Jumping Spider'],
    categories: ['Invertebrates'],
    blurb: 'Invertebrates do the work nobody credits them for.',
  },
  {
    id: 'world-turtle-day', name: 'World Turtle Day', emoji: '🐢',
    month: 5, day: 23,
    animals: ['Turtle', 'Tortoise', 'Box Turtle', 'Russian Tortoise', 'Sulcata Tortoise'],
    categories: ['Turtles & Tortoises'],
    blurb: 'Slow, ancient, and frequently outliving their owners.',
  },
  {
    id: 'world-oceans-day', name: 'World Oceans Day', emoji: '🌊',
    month: 6, day: 8,
    animals: ['Octopus', 'Dolphin', 'Shark', 'Jellyfish', 'Mantis Shrimp', 'Seahorse', 'Narwhal', 'Hagfish'],
    categories: ['Aquatic Life'],
    blurb: 'The ocean is still where the strangest animals live.',
  },
  {
    id: 'world-snake-day', name: 'World Snake Day', emoji: '🐍',
    month: 7, day: 16,
    animals: ['Snake', 'Ball Python', 'Corn Snake', 'Milk Snake', 'Hognose Snake', 'Boa Constrictor'],
    categories: ['Reptiles'],
    blurb: 'Snakes get a bad reputation and almost none of it holds up.',
  },
  {
    id: 'international-cat-day', name: 'International Cat Day', emoji: '🐱',
    month: 8, day: 8,
    animals: ['Cat'],
    categories: ['Cats'],
    blurb: 'They invented the meow specifically for us.',
  },
  {
    id: 'world-lion-day', name: 'World Lion Day', emoji: '🦁',
    month: 8, day: 10,
    animals: ['Lion'],
    categories: ['Wild Animals'],
    blurb: 'The one big cat that actually lives in groups.',
  },
  {
    id: 'world-elephant-day', name: 'World Elephant Day', emoji: '🐘',
    month: 8, day: 12,
    animals: ['Elephant'],
    categories: ['Wild Animals'],
    blurb: 'The largest land animal, and one of the few that mourns.',
  },
  {
    id: 'world-lizard-day', name: 'World Lizard Day', emoji: '🦎',
    month: 8, day: 14,
    animals: ['Gecko', 'Bearded Dragon', 'Ackie Monitor', 'Veiled Chameleon', 'Green Anole', 'Uromastyx', 'Argentine Tegu', 'Blue-Tongue Skink'],
    categories: ['Reptiles'],
    blurb: 'Half this site is lizards. This is our day.',
  },
  {
    id: 'international-dog-day', name: 'International Dog Day', emoji: '🐶',
    month: 8, day: 26,
    animals: ['Dog'],
    categories: ['Dogs'],
    blurb: 'Three eyelids, unique nose prints, and they dream about you.',
  },
  {
    id: 'world-rhino-day', name: 'World Rhino Day', emoji: '🦏',
    month: 9, day: 22,
    animals: ['Rhino', 'Rhinoceros'],
    categories: ['Wild Animals'],
    blurb: 'Armoured, short-sighted, and running out of time.',
  },
  {
    id: 'world-animal-day', name: 'World Animal Day', emoji: '🐾',
    month: 10, day: 4,
    animals: [],
    // 'Fun Facts' dropped when that category was retired - it now matches
    // nothing, and the four features that were in it moved to Wild Animals.
    categories: ['Wild Animals'],
    blurb: 'Every animal gets a turn today.',
  },
  {
    id: 'world-octopus-day', name: 'World Octopus Day', emoji: '🐙',
    month: 10, day: 8,
    animals: ['Octopus'],
    categories: ['Aquatic Life'],
    blurb: 'Three hearts, nine brains, and no bones at all.',
  },
  {
    id: 'international-sloth-day', name: 'International Sloth Day', emoji: '🦥',
    month: 10, day: 20,
    animals: ['Sloth'],
    categories: ['Wild Animals'],
    blurb: 'Slow on purpose. It works.',
  },
  {
    id: 'reptile-awareness-day', name: 'Reptile Awareness Day', emoji: '🦎',
    month: 10, day: 21,
    animals: ['Gecko', 'Snake', 'Turtle', 'Tortoise', 'Bearded Dragon', 'Chameleon'],
    categories: ['Reptiles', 'Turtles & Tortoises'],
    blurb: 'The whole reptile shelf, all at once.',
  },
  {
    id: 'world-pangolin-day', name: 'World Pangolin Day', emoji: '🦔',
    ranges: { 2026: { start: '02-21', end: '02-21' } },
    animals: ['Pangolin'],
    categories: ['Wild Animals'],
    blurb: 'The most trafficked wild mammal almost nobody can name.',
  },
  {
    id: 'world-parrot-day', name: 'World Parrot Day', emoji: '🦜',
    month: 5, day: 31,
    animals: ['Parrot', 'African Grey Parrot', 'Cockatoo', 'Lovebird'],
    categories: ['Birds'],
    blurb: 'Loud, long-lived, and smarter than the cage suggests.',
  },
  {
    id: 'world-sea-turtle-day', name: 'World Sea Turtle Day', emoji: '🐢',
    month: 6, day: 16,
    animals: ['Turtle', 'Sea Turtle', 'Box Turtle'],
    categories: ['Turtles & Tortoises', 'Aquatic Life'],
    blurb: 'Older than most of what shares the ocean with them.',
  },
  {
    id: 'world-croc-day', name: 'World Croc Day', emoji: '🐊',
    month: 6, day: 17,
    animals: ['Crocodile', 'Alligator', 'Caiman'],
    categories: ['Reptiles'],
    blurb: 'Survivors of everything that killed the dinosaurs.',
  },
  {
    id: 'world-giraffe-day', name: 'World Giraffe Day', emoji: '🦒',
    month: 6, day: 21,
    animals: ['Giraffe'],
    categories: ['Wild Animals'],
    blurb: 'The tallest animal alive, and the blood pressure to match.',
  },
  {
    id: 'shark-awareness-day', name: 'Shark Awareness Day', emoji: '🦈',
    month: 7, day: 14,
    animals: ['Shark'],
    categories: ['Aquatic Life'],
    blurb: 'The numbers are nothing like the reputation.',
  },
  {
    id: 'international-wolf-day', name: 'International Wolf Day', emoji: '🐺',
    month: 8, day: 13,
    animals: ['Wolf'],
    categories: ['Wild Animals'],
    blurb: 'The alpha wolf was a captive-study artefact, not a wild fact.',
  },
  {
    id: 'national-honey-bee-day', name: 'National Honey Bee Day', emoji: '🐝',
    month: 8, day: 15,
    animals: ['Bee', 'Honeybee'],
    categories: ['Invertebrates'],
    blurb: 'They vote on where to live, and the vote is a dance.',
  },
  {
    id: 'world-dolphin-day', name: 'World Dolphin Day', emoji: '🐬',
    month: 9, day: 12,
    animals: ['Dolphin'],
    categories: ['Aquatic Life'],
    blurb: 'They use names. Actual names, for each other.',
  },
  {
    id: 'international-rabbit-day', name: 'International Rabbit Day', emoji: '🐰',
    ranges: { 2026: { start: '09-26', end: '09-26' } },
    animals: ['Rabbit'],
    categories: ['Small & Exotic Pets'],
    blurb: 'Not a starter pet, whatever the pet shop implied.',
  },
  {
    id: 'international-wombat-day', name: 'International Wombat Day', emoji: '🐨',
    month: 10, day: 22,
    animals: ['Wombat'],
    categories: ['Wild Animals'],
    blurb: 'Yes, the droppings really are cubes. Here is how.',
  },
  {
    id: 'national-axolotl-day', name: 'National Axolotl Day', emoji: '🦎',
    month: 11, day: 12,
    animals: ['Axolotl'],
    categories: ['Amphibians'],
    blurb: 'Permanently juvenile, endlessly regenerating, nearly extinct in the wild.',
  },
  {
    id: 'international-tiger-day', name: 'International Tiger Day', emoji: '🐅',
    month: 7, day: 29,
    animals: ['Tiger'],
    // 'tiger' is a whole word in 'Tiger Salamander', so the amphibian guides
    // matched Tiger Day. It is a modifier there, not the animal.
    exclude: ['Tiger Salamander'],
    categories: ['Wild Animals'],
    blurb: 'Every wild tiger left could fit in a single small town.',
  },
  {
    // Discovery schedules this and it moves every year, so there is no formula
    // to derive it from. Add each year as it is announced; an unlisted year
    // simply never matches rather than showing a wrong window. The 2026 run is
    // 26 July to 1 August, which puts International Tiger Day (29 July) inside
    // it - the exact-date tier keeps that day for the tiger.
    id: 'shark-week', name: 'Shark Week', emoji: '🦈',
    ranges: {
      2026: { start: '07-26', end: '08-01' },
    },
    animals: ['Shark'],
    categories: ['Aquatic Life'],
    blurb: 'Sharks are older than trees. That is the whole pitch.',
  },
];
