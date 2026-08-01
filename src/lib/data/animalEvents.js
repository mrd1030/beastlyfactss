// Annual animal awareness days, used to surface a matching article on the
// homepage while the event is topical.
//
// VERIFY BEFORE RELYING ON THESE DATES. They are the widely-published fixed
// dates for each observance, but several of these days are promoted by more
// than one organisation on more than one date, and nothing here has been
// checked against a primary source the way the legal guides were. Correcting a
// date is a one-line edit and needs no code change.
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
    categories: ['Wild Animals', 'Fun Facts'],
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
    // Discovery schedules this and it moves every year, so there is no formula
    // to derive it from. Add each year as it is announced; an unlisted year
    // simply never matches rather than showing a wrong window.
    id: 'shark-week', name: 'Shark Week', emoji: '🦈',
    ranges: {
      2026: { start: '07-12', end: '07-19' },
    },
    animals: ['Shark'],
    categories: ['Aquatic Life'],
    blurb: 'Sharks are older than trees. That is the whole pitch.',
  },
];
