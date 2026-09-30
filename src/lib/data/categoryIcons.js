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
