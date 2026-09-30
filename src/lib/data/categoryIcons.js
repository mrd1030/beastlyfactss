import {
  ArrowLeftRight, Bird, Cat, Compass, Dog, Fish, PawPrint, Puzzle, Scale, ScrollText,
  ShoppingCart, Sparkles, Stethoscope, Turtle, Waves,
} from 'lucide-react';
import { Chameleon, FrogFace, Hedgehog, Spider } from '@/components/icons/labIcons';

// A line icon per category in src/lib/data/categories.js. The frog,
// chameleon, spider and hedgehog come from @lucide/lab, since lucide itself
// has none of them.
export const CATEGORY_ICONS = {
  amphibians: FrogFace,
  'aquatic-life': Waves,
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
  'short-stories': ScrollText,
  'small-and-exotic-pets': Hedgehog,
  'turtles-and-tortoises': Turtle,
  'wild-animals': PawPrint,
};
