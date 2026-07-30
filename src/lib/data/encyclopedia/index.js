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
import { fishEncyclopedia } from './fish';

export const encyclopediaAnimals = [
  ...amphibianEncyclopedia,
  ...birdEncyclopedia,
  ...catEncyclopedia,
  ...dogEncyclopedia,
  ...fishEncyclopedia,
  ...geckoEncyclopedia,
  ...invertebrateEncyclopedia,
  ...lizardEncyclopedia,
  ...smallMammalEncyclopedia,
  ...snakeEncyclopedia,
  ...turtleEncyclopedia,
];

export const encyclopediaCategories = [
  { name: "Amphibians", emoji: "🐸", slug: "amphibians", image: "/assets/encyclopedia/amphibians-category.jpg" },
  { name: "Birds", emoji: "🐦", slug: "birds", image: "/assets/encyclopedia/birds-category.jpg" },
  { name: "Cats", emoji: "🐱", slug: "cats", image: "/assets/encyclopedia/cats-category.jpg" },
  { name: "Dogs", emoji: "🐶", slug: "dogs", image: "/assets/encyclopedia/dogs-category.jpg" },
  { name: "Fish", emoji: "🐠", slug: "fish", image: "/assets/encyclopedia/fish-category.jpg" },
  { name: "Geckos", emoji: "🦎", slug: "geckos", image: "/assets/encyclopedia/geckos-category.jpg" },
  { name: "Invertebrates", emoji: "🕷️", slug: "invertebrates", image: "/assets/encyclopedia/invertebrates-category.jpg" },
  { name: "Lizards", emoji: "🦎", slug: "lizards", image: "/assets/encyclopedia/lizards-category.jpg" },
  { name: "Small Mammals", emoji: "🦔", slug: "small-mammals", image: "/assets/encyclopedia/small-mammals-category.jpg" },
  { name: "Snakes", emoji: "🐍", slug: "snakes", image: "/assets/encyclopedia/snakes-category.jpg" },
  { name: "Turtles & Tortoises", emoji: "🐢", slug: "turtles-tortoises", image: "/assets/encyclopedia/turtles-tortoises-category.jpg" },
];

export const difficultyColor = {
  "Self-Sufficient": "text-sky-600 bg-sky-50 dark:bg-sky-950 dark:text-sky-400",
  "Beginner": "text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400",
  "Beginner/Intermediate": "text-lime-600 bg-lime-50 dark:bg-lime-950 dark:text-lime-400",
  "Intermediate": "text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-400",
  "Intermediate/Advanced": "text-orange-600 bg-orange-50 dark:bg-orange-950 dark:text-orange-400",
  "Advanced": "text-red-600 bg-red-50 dark:bg-red-950 dark:text-red-400",
};
