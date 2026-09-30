import {
  ArrowLeftRight, Bird, Cat, Dog, Fish, ListChecks, Puzzle, Rabbit, Scale,
  ShoppingCart, Sparkles, Stethoscope, Turtle,
} from 'lucide-react';
import {
  Chameleon, ElephantFace, FeatherText, FrogFace, Spider, Whale,
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
  'small-and-exotic-pets': Rabbit,
  'turtles-and-tortoises': Turtle,
  'wild-animals': ElephantFace,
};
