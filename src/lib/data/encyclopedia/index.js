import { geckoEncyclopedia } from './geckos';
import { lizardEncyclopedia } from './lizards';
import { snakeEncyclopedia } from './snakes';
import { turtleEncyclopedia } from './turtles';
import { smallMammalEncyclopedia } from './smallMammals';
import { birdEncyclopedia } from './birds';
import { dogEncyclopedia } from './dogs';
import { catEncyclopedia } from './cats';
import { invertebrateEncyclopedia } from './invertebrates';
import { amphibianEncyclopedia } from './amphibians';

export const encyclopediaAnimals = [
  ...geckoEncyclopedia,
  ...lizardEncyclopedia,
  ...snakeEncyclopedia,
  ...turtleEncyclopedia,
  ...smallMammalEncyclopedia,
  ...birdEncyclopedia,
  ...dogEncyclopedia,
  ...catEncyclopedia,
  ...invertebrateEncyclopedia,
  ...amphibianEncyclopedia,
];

export const encyclopediaCategories = [
  { name: "Geckos", emoji: "🦎", slug: "geckos" },
  { name: "Lizards", emoji: "🦎", slug: "lizards" },
  { name: "Snakes", emoji: "🐍", slug: "snakes" },
  { name: "Turtles & Tortoises", emoji: "🐢", slug: "turtles-tortoises" },
  { name: "Small Mammals", emoji: "🦔", slug: "small-mammals" },
  { name: "Birds", emoji: "🐦", slug: "birds" },
  { name: "Dogs", emoji: "🐶", slug: "dogs" },
  { name: "Cats", emoji: "🐱", slug: "cats" },
  { name: "Invertebrates", emoji: "🕷️", slug: "invertebrates" },
  { name: "Amphibians", emoji: "🐸", slug: "amphibians" },
];

export const difficultyColor = {
  "Self-Sufficient": "text-sky-600 bg-sky-50 dark:bg-sky-950 dark:text-sky-400",
  "Beginner": "text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400",
  "Intermediate": "text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-400",
  "Advanced": "text-red-600 bg-red-50 dark:bg-red-950 dark:text-red-400",
};
