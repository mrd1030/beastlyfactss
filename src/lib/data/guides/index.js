import { geckoGuides } from './geckos';
import { lizardGuides } from './lizards';
import { snakeGuides } from './snakes';
import { turtleGuides } from './turtles';
import { smallMammalGuides } from './smallMammals';
import { birdGuides } from './birds';
import { invertebrateGuides } from './invertebrates';
import { amphibianGuides } from './amphibians';
import { dogGuides } from './dogs';
import { catGuides } from './cats';

export const allGuides = [
  ...geckoGuides,
  ...lizardGuides,
  ...snakeGuides,
  ...turtleGuides,
  ...smallMammalGuides,
  ...birdGuides,
  ...invertebrateGuides,
  ...amphibianGuides,
  ...dogGuides,
  ...catGuides,
];
