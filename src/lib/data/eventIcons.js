import { Bird, Cat, Dog, Fish, PawPrint, Rabbit, Rat, Sprout, Turtle, Waves } from 'lucide-react';
import { Bat, BearFace, Bee, CatBig, Chameleon, Elephant, FrogFace, Gecko, HorseHead, Penguin, Shark, Whale } from '@/components/icons/labIcons';

// Line icons for the homepage animal-day band, in place of each event's emoji.
// Lucide's core set plus its lab set (src/components/icons/labIcons.jsx). An
// event missing here, or one no icon draws (a snake, a sloth), gets the paw.
export const EVENT_ICONS = {
  'bat-week': Bat,
  'national-black-cat-day': Cat,
  'international-cat-day': Cat,
  'polar-bear-week': BearFace,
  'world-jellyfish-day': Waves,
  'world-oceans-day': Waves,
  'world-octopus-day': Waves,
  'international-snow-leopard-day': CatBig,
  'world-lion-day': CatBig,
  'international-tiger-day': CatBig,
  'international-jaguar-day': CatBig,
  'international-cheetah-day': CatBig,
  'national-bird-day': Bird,
  'world-parrot-day': Bird,
  'christmas-bird-count': Bird,
  'world-falconry-day': Bird,
  'world-penguin-day': Penguin,
  'world-frog-day': FrogFace,
  'world-bee-day': Bee,
  'national-honey-bee-day': Bee,
  'world-turtle-day': Turtle,
  'world-sea-turtle-day': Turtle,
  'world-lizard-day': Gecko,
  'reptile-awareness-day': Chameleon,
  'world-elephant-day': Elephant,
  'international-dog-day': Dog,
  'national-mutt-day': Dog,
  'international-wolf-day': Dog,
  'shark-awareness-day': Shark,
  'shark-week': Shark,
  'hagfish-day': Fish,
  'world-dolphin-day': Whale,
  'international-rabbit-day': Rabbit,
  'fancy-rat-and-mouse-day': Rat,
  'national-day-of-the-horse': HorseHead,
  'evolution-day': Sprout,
};

export const eventIcon = (event) => EVENT_ICONS[event.id] ?? PawPrint;
