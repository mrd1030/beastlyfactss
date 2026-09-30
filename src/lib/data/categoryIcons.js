import {
  ArrowLeftRight, Bird, Cat, Compass, Dog, Fish, Puzzle, Scale,
  ShoppingCart, Sparkles, Stethoscope, Turtle,
} from 'lucide-react';
import {
  Chameleon, ElephantFace, FeatherText, FrogFace, Hedgehog, Spider, Whale,
} from '@/components/icons/labIcons';

// A line icon per category in src/lib/data/categories.js. The animals lucide
// itself doesn't draw (frog, chameleon, spider, hedgehog, whale, elephant)
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
  roundups: Compass,
  'short-stories': FeatherText,
  'small-and-exotic-pets': Hedgehog,
  'turtles-and-tortoises': Turtle,
  'wild-animals': ElephantFace,
};
