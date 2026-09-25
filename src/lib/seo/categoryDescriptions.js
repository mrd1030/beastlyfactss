// Meta descriptions for the 11 guide category pages, one per category rather
// than a single template with the name slotted in.
//
// The template these replaced ("Explore all X care guides ... husbandry advice,
// feeding schedules, housing setups ... for every keeper") said nothing a
// searcher could act on, and its vocabulary was reptile-hobby language that
// read wrong on Dogs and Cats. Naming the actual species a category holds is
// both more honest and more useful in a result list: someone scanning for
// "crested gecko" can see the page has one.
//
// A meta description is not a ranking signal and Google rewrites these freely.
// The payoff is click-through and accuracy, not position.
//
// Each is 150 to 160 characters, per docs/RULES.md. Keys must match the
// guideFilters labels in Guides.jsx exactly. Counts ("and four more") are real
// and come from guides-index.json, so they need updating when a category gains
// or loses a guide.
export const GUIDE_CATEGORY_DESCRIPTIONS = {
  'Geckos': "Leopard gecko, crested gecko, tokay and four more gecko care guides. Enclosure size and setup, what they cost, handling, feeding, and the health problems to expect.",
  'Lizards': "Bearded dragon, blue tongue skink, tegu and eight more lizard care guides. Enclosure size and heating, cost, handling, feeding, and common health problems.",
  'Snakes': "Ball python, corn snake, hognose and five more snake care guides. Enclosure setup and heating, feeding size and schedule, handling, cost, and health problems.",
  'Turtles & Tortoises': "Red-eared slider, sulcata, Russian tortoise, box turtle and red-footed tortoise care guides. Enclosure size, diet, cost, lifespan, and health problems.",
  'Small Mammals': "Rabbit, guinea pig, hamster, ferret and eight more small pet care guides. Cage size and setup, what they cost, handling, feeding, and health problems.",
  'Birds': "Budgie, cockatiel, African grey, conure and six more pet bird care guides. Cage size, diet, what they cost, taming and handling, and common health problems.",
  'Dogs': "Dog care basics, size-by-size needs, and breed quirk guides for labradors, german shepherds, huskies and seven more. Temperament, grooming, and health risks.",
  'Cats': "Cat care basics plus breed quirk guides for maine coons, bengals, ragdolls, siamese and five more. What each breed is like to live with, and its health risks.",
  'Invertebrates': "Tarantula, jumping spider, hermit crab, mantis and seven more invertebrate care guides. Enclosure setup, feeding, humidity, cost, and molting problems.",
  'Amphibians': "Axolotl, pacman frog, White's tree frog, fire-bellied toad and tiger salamander care guides. Tank and enclosure setup, water and humidity, feeding, cost, and health problems.",
  'Fish': "Betta, goldfish, guppy, oscar and eleven more fish care guides. Tank size and cycling, water parameters, tank mates, what they cost, and common diseases.",
};

// Falls back to the old shape for any category without an entry, so a new
// filter label ships with a sane description instead of an empty tag.
export function guideCategoryDescription(category) {
  return GUIDE_CATEGORY_DESCRIPTIONS[category]
    || `Care guides for ${category} on Beastly Facts. What they cost, what they eat, how to handle them, and the health problems worth knowing about first.`;
}
