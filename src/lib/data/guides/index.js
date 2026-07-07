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
import { fishGuides } from './fish';

export const allGuides = [
  ...amphibianGuides,
  ...birdGuides,
  ...catGuides,
  ...dogGuides,
  ...fishGuides,
  ...geckoGuides,
  ...invertebrateGuides,
  ...lizardGuides,
  ...smallMammalGuides,
  ...snakeGuides,
  ...turtleGuides,
];
