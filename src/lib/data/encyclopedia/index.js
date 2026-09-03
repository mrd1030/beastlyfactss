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

// Category list and difficulty colours live in meta.js so a component that
// only needs those (GuideSpotlight, EncyclopediaTeaser) can import them
// without dragging in the 120KB of animal data above. Re-exported here so
// every existing `from '@/lib/data/encyclopedia'` import keeps working.
export { encyclopediaCategories, difficultyColor } from './meta';
