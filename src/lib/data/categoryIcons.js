import {
  ArrowLeftRight, Bird, Cat, Dog, Fish, LayoutGrid, ListChecks, Megaphone, PawPrint, Puzzle, Rabbit, Scale,
  ShoppingCart, Sparkles, Stethoscope, Turtle, Worm,
} from 'lucide-react';
import {
  Chameleon, ElephantFace, FeatherText, FrogFace, Gecko, Spider, Whale,
} from '@/components/icons/labIcons';

// A line icon per category in src/lib/data/categories.js. The animals lucide
// itself doesn't draw (frog, chameleon, spider, whale, elephant)
// and the quill come from @lucide/lab.
// The categories that are a kind of animal, as opposed to a topic (Legal,
// Comparisons, Roundups...). The Articles page lists the two apart.
export const ANIMAL_CATEGORY_SLUGS = new Set([
  'amphibians', 'aquatic-life', 'birds', 'cats', 'dogs', 'fish', 'invertebrates',
  'reptiles', 'small-and-exotic-pets', 'turtles-and-tortoises', 'wild-animals',
]);

export const CATEGORY_ICONS = {
  amphibians: FrogFace,
  'aquatic-life': Whale,
  birds: Bird,
  cats: Cat,
  comparisons: ArrowLeftRight,
  dogs: Dog,
  enrichment: Puzzle,
  fish: Fish,
  'fun-facts': Sparkles,
  invertebrates: Spider,
  legal: Scale,
  'pet-care': Stethoscope,
  'product-picks': ShoppingCart,
  reptiles: Chameleon,
  roundups: ListChecks,
  'short-stories': FeatherText,
  'site-news': Megaphone,
  'small-and-exotic-pets': Rabbit,
  'turtles-and-tortoises': Turtle,
  'wild-animals': ElephantFace,
};

// The animal groups the browse pages filter by, keyed by the label they show:
// Guides and Encyclopedia (and the guide groups under them), Beastlypedia,
// the Gallery (fact categories) and Gear. One icon per kind of animal
// everywhere it appears, matching CATEGORY_ICONS above where they overlap.
export const GROUP_ICONS = {
  All: LayoutGrid,
  'All Pets': LayoutGrid,
  'More guides': PawPrint,
  Amphibians: FrogFace,
  Birds: Bird,
  Cats: Cat,
  Dogs: Dog,
  'Dogs & Cats': PawPrint,
  Fish: Fish,
  'Fish & Aquatic': Fish,
  Geckos: Gecko,
  Invertebrates: Spider,
  Lizards: Chameleon,
  Mammals: ElephantFace,
  'Marine Life': Whale,
  Ocean: Whale,
  Reptiles: Chameleon,
  'Reptiles, Amphibians & Bugs': Chameleon,
  'Small Mammals': Rabbit,
  Snakes: Worm,
  'Turtles & Tortoises': Turtle,
  'Weird & Wonderful': Sparkles,
  Other: Sparkles,
};
