// Annual animal awareness days, used to surface a matching article on the
// homepage while the event is topical.
//
// Dates checked 2026-08-01 against a compiled 2026 calendar (World Animal
// Protection, National Today, National Day Calendar, Awareness Days). Every
// fixed date below was confirmed. Shark Week was corrected from a guessed
// 12-19 July to its real July 26th - August 1st run.
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
    id: 'world-otter-day', name: 'World Otter Day', emoji: '🦦',
    // Floating: the last Wednesday in May, per the International Otter
    // Survival Fund, which created the day. https://www.otter.org/world-otter-day
    ranges: { 2026: { start: '05-27', end: '05-27' }, 2027: { start: '05-26', end: '05-26' } },
    animals: ['Otter', 'Sea Otter'],
    categories: ['Wild Animals'],
    blurb: 'Every otter, river and sea, gets its day.',
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
    // matchesAnimal is head-final, so "Lions Are the Only Social Cat" reads as
    // a cat article and lands here. A lion IS a cat and the matcher is right in
    // general, but this day is about the one on the sofa. Same narrow fix the
    // tiger/salamander case uses: exclude it here, not in the shared matcher.
    exclude: ['Lion'],
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
    blurb: 'Armored, short-sighted, and running out of time.',
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
    // Floating: the third Saturday in October, per AIUNAU, the Colombian
    // foundation that created the day in 2010. It was hardcoded to October 20th
    // here until 2026-09-22, which is the same error most published calendars
    // carry: October 20th was the third Saturday in 2013 and got copied forward.
    // https://aiunau.org/en/activities/sloth-international-day/
    ranges: { 2026: { start: '10-17', end: '10-17' }, 2027: { start: '10-16', end: '10-16' } },
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
    ranges: { 2026: { start: '02-21', end: '02-21' }, 2027: { start: '02-20', end: '02-20' } },
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
    blurb: 'The alpha wolf was a captive-study artifact, not a wild fact.',
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
    id: 'sea-otter-awareness-week', name: 'Sea Otter Awareness Week', emoji: '🦦',
    // Floating: the last full week of September, Sunday to Saturday, per
    // Defenders of Wildlife, one of its organizers.
    // https://defenders.org/sea-otter-awareness-week
    ranges: { 2026: { start: '09-20', end: '09-26' }, 2027: { start: '09-19', end: '09-25' } },
    animals: ['Sea Otter'],
    categories: ['Wild Animals'],
    blurb: 'The densest fur on Earth, and no blubber under it.',
  },
  {
    id: 'international-rabbit-day', name: 'International Rabbit Day', emoji: '🐰',
    ranges: { 2026: { start: '09-26', end: '09-26' }, 2027: { start: '09-25', end: '09-25' } },
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
    // Mexico's Día Nacional del Ajolote, February 1st, declared by the Senate
    // in 2018 and marking the axolotl genome paper (Nature, 1 Feb 2018). It sat
    // on November 12th here until 2026-10-18; nothing anywhere supports that
    // date. https://www.uaeh.edu.mx/suma/noticias/noticia/600
    month: 2, day: 1,
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
    // July 26th to August 1st, which puts International Tiger Day (July 29th) inside
    // it - the exact-date tier keeps that day for the tiger.
    id: 'shark-week', name: 'Shark Week', emoji: '🦈',
    ranges: {
      2026: { start: '07-26', end: '08-01' },
    },
    animals: ['Shark'],
    categories: ['Aquatic Life'],
    blurb: 'Sharks are older than trees. That is the whole pitch.',
  },

  // November and December 2026, added 2026-10-18 so every week from late
  // October to mid December carries at least two days. Each date was checked
  // against the founding organization; the sources and the ones whose origin
  // is unverified are in docs/NOV_DEC_ANIMAL_DAYS.md.
  {
    id: 'hagfish-day', name: 'Hagfish Day', emoji: '🐟',
    // Floating: WhaleTimes, which created it in 2009, posts the date each
    // year; it falls on the third Wednesday of October. https://whaletimes.org/
    ranges: { 2026: { start: '10-21', end: '10-21' }, 2027: { start: '10-20', end: '10-20' } },
    animals: ['Hagfish'],
    categories: ['Aquatic Life'],
    blurb: 'A pint of slime in under half a second.',
  },
  {
    id: 'international-snow-leopard-day', name: 'International Snow Leopard Day', emoji: '🐆',
    // Set by the 12 range-country governments in the Bishkek Declaration,
    // October 23, 2013. https://snowleopard.org/the-silent-roar-heard-around-the-world-every-october/
    month: 10, day: 23,
    // Never the bare 'Leopard': it would pick up the leopard gecko.
    animals: ['Snow Leopard'],
    categories: ['Wild Animals'],
    blurb: 'The big cat that cannot roar.',
  },
  {
    id: 'bat-week', name: 'Bat Week', emoji: '🦇',
    // October 24th to 31st every year, per the National Park Service and BLM,
    // both Bat Week partners.
    // https://www.nps.gov/articles/000/bat-week-international.htm
    ranges: { 2026: { start: '10-24', end: '10-31' }, 2027: { start: '10-24', end: '10-31' } },
    animals: ['Bat'],
    categories: ['Wild Animals'],
    blurb: 'Not blind, and in trouble every winter.',
  },
  {
    id: 'national-black-cat-day', name: 'National Black Cat Day', emoji: '🐈‍⬛',
    // Cats Protection (UK), launched October 27, 2011.
    // https://www.cats.org.uk/cats-blog/history-of-national-black-cat-day
    month: 10, day: 27,
    animals: ['Cat'],
    exclude: ['Lion', 'Big Cat'],
    categories: ['Cats'],
    blurb: 'The wait for a home got shorter. It took a campaign.',
  },
  {
    id: 'world-lemur-day', name: 'World Lemur Day', emoji: '🐒',
    // Floating: the last Friday in October, per the Lemur Conservation
    // Network. https://www.lemurconservationnetwork.org/world-lemur-day/
    ranges: { 2026: { start: '10-30', end: '10-30' }, 2027: { start: '10-29', end: '10-29' } },
    animals: ['Lemur', 'Aye-Aye'],
    categories: ['Wild Animals'],
    blurb: 'The most threatened mammal group on Earth.',
  },
  {
    id: 'polar-bear-week', name: 'Polar Bear Week', emoji: '🐻‍❄️',
    // Polar Bears International sets the week each year ("the first week of
    // November"); past runs do not follow a rule, so add 2027 when PBI posts it.
    // https://polarbearsinternational.org/news-media/events/polar-bear-week/
    ranges: { 2026: { start: '11-01', end: '11-07' } },
    animals: ['Polar Bear'],
    categories: ['Wild Animals'],
    blurb: 'Waiting on Hudson Bay to freeze.',
  },
  {
    id: 'world-jellyfish-day', name: 'World Jellyfish Day', emoji: '🪼',
    // Date consistent across sources, no founder anywhere. Aquariums mark it.
    month: 11, day: 3,
    animals: ['Jellyfish'],
    categories: ['Aquatic Life', 'Invertebrates'],
    blurb: 'No brain, no heart, and one species that ages backwards.',
  },
  {
    id: 'world-numbat-day', name: 'World Numbat Day', emoji: '🐜',
    // Floating: the first Saturday in November, per Project Numbat, which
    // started it at Perth Zoo in 2015.
    // https://www.numbat.org.au/news/2015/10/15/celebrate-world-numbat-day-on-saturday-7-november
    ranges: { 2026: { start: '11-07', end: '11-07' }, 2027: { start: '11-06', end: '11-06' } },
    animals: ['Numbat'],
    categories: ['Wild Animals'],
    blurb: 'Down to about 300, and now off the endangered list.',
  },
  {
    id: 'fancy-rat-and-mouse-day', name: 'Fancy Rat & Mouse Day', emoji: '🐀',
    // The American Fancy Rat & Mouse Association. https://www.afrma.org/
    month: 11, day: 12,
    animals: ['Rat', 'Mouse'],
    exclude: ['Naked Mole Rat', 'Mole Rat'],
    categories: ['Small & Exotic Pets'],
    blurb: 'Bred for temperament for over a century.',
  },
  {
    id: 'steve-irwin-day', name: 'Steve Irwin Day', emoji: '🐊',
    // Australia Zoo, since 2007, on the birthday of Harriet the Galapagos
    // tortoise, not the anniversary of his death.
    // https://www.australiazoo.com.au/whats-on/events/steve-irwin-day/
    month: 11, day: 15,
    animals: ['Crocodile', 'Tortoise'],
    categories: ['Wild Animals'],
    blurb: 'Set on a tortoise birthday, and the tortoise had a myth.',
  },
  {
    id: 'world-falconry-day', name: 'World Falconry Day', emoji: '🦅',
    // International Association for Falconry, marking UNESCO's listing of
    // falconry on November 16, 2010. https://iaf.org/word-falconry-day/
    month: 11, day: 16,
    animals: ['Falcon', 'Hawk', 'Eagle'],
    categories: ['Birds', 'Wild Animals'],
    blurb: 'Falconers helped bring the peregrine back.',
  },
  {
    id: 'world-anteater-day', name: 'World Anteater Day', emoji: '🐜',
    // Instituto Jurumi and Instituto Tamanduá, 2014, moved from 29 to 19
    // November in 2020. Many calendars still print the 29th.
    // https://prefeitura.pbh.gov.br/fundacao-de-parques-e-zoobotanica/informacoes/educacao-ambiental/datas-comemorativas/dia-mundial-do-tamandua
    month: 11, day: 19,
    animals: ['Anteater'],
    categories: ['Wild Animals'],
    blurb: 'A tongue longer than its head, and roads it cannot cross.',
  },
  {
    id: 'evolution-day', name: 'Evolution Day', emoji: '🧬',
    // On the Origin of Species went on sale November 24, 1859. The date is
    // settled; no organization claims the day.
    // https://darwin-online.org.uk/DarwinCensus.html
    month: 11, day: 24,
    // Every animal, so it matches none, same as World Animal Day.
    animals: [],
    categories: ['Wild Animals'],
    blurb: 'The book did not sell out the way the story says.',
  },
  {
    id: 'international-jaguar-day', name: 'International Jaguar Day', emoji: '🐆',
    // Jaguar 2030 Statement (14 range countries, 2018), launched at CBD COP14.
    // https://www.internationaljaguarday.org/
    month: 11, day: 29,
    animals: ['Jaguar'],
    categories: ['Wild Animals'],
    blurb: 'Near Threatened overall. Nearly every population is worse.',
  },
  {
    id: 'national-mutt-day', name: 'National Mutt Day', emoji: '🐕',
    // December 2nd (also July 31st). Date verified on the day's own site; the
    // founder credit circulates only on aggregators.
    // https://www.theholidayguild.com/nationalmuttday
    month: 12, day: 2,
    animals: ['Dog'],
    categories: ['Dogs'],
    blurb: 'Breed explains about a tenth of what a dog does.',
  },
  {
    id: 'international-cheetah-day', name: 'International Cheetah Day', emoji: '🐆',
    // Cheetah Conservation Fund, 2010, on the birthday of Khayam.
    // https://cheetah.org/press-releases/cheetah-conservation-fund-conservation-leads-global-celebration-of-international-cheetah-day-4-december/
    month: 12, day: 4,
    animals: ['Cheetah'],
    categories: ['Wild Animals'],
    blurb: 'The fastest cat cannot roar, and cannot keep it up.',
  },
  {
    id: 'national-llama-day', name: 'National Llama Day', emoji: '🦙',
    // Date consistent across sources, no founder found.
    month: 12, day: 9,
    animals: ['Llama', 'Alpaca'],
    categories: ['Pet Care'],
    blurb: 'They mostly spit at each other.',
  },
  {
    id: 'national-day-of-the-horse', name: 'National Day of the Horse', emoji: '🐴',
    // S.Res.452 (2004) named December 13, 2004, only; the American Horse
    // Council has kept it every year since.
    // https://www.congress.gov/108/bills/sres452/BILLS-108sres452ats.pdf
    month: 12, day: 13,
    animals: ['Horse'],
    categories: ['Pet Care'],
    blurb: 'They doze standing up. They dream lying down.',
  },
  {
    id: 'monkey-day', name: 'Monkey Day', emoji: '🐒',
    // Casey Sorrow and Eric Millikin, 2000.
    month: 12, day: 14,
    animals: ['Monkey', 'Marmoset', 'Capuchin'],
    categories: ['Wild Animals'],
    blurb: 'Its founder says do not buy one.',
  },
  {
    id: 'christmas-bird-count', name: 'Christmas Bird Count', emoji: '🐦',
    // Audubon, December 14th to January 5th every year. activeWindow() cannot
    // span New Year inside one year's range, so the run is declared to 31
    // December and the article carries the full window.
    // https://www.audubon.org/community-science/christmas-bird-count/join-christmas-bird-count
    ranges: { 2026: { start: '12-14', end: '12-31' }, 2027: { start: '12-14', end: '12-31' } },
    animals: ['Crow', 'Eagle', 'Cardinal'],
    categories: ['Birds'],
    blurb: 'It started as the alternative to a shooting contest.',
  },
];
