// Held back until each species ships, one species a day (owner, 2026-11-01).
// Nothing imports this file; it sits with the held guides, outside the data
// folders the build checks scan. The cost sheets stay live in costSheets/fish.js. On a species' ship day, move its object back into
// the live array in src/lib/data/encyclopedia/fish.js (alphabetical by id), move its six guides from
// content/_scheduled-tetras/ into content/guides/ with the ship date, and drop `planned: true` from its row
// in the tetras group entry in src/lib/data/guides/fish.js. Then add its line to
// RELATED_ARTICLES in src/lib/data/relatedArticles.js, copied from 'ember-tetra'
// (the nine shared aquarium guides plus power-outage-pets-guide), so its hub
// sidebar carries the shared guides.
export const scheduledTetraAnimals = [
  {
    id: "glowlight-tetra", name: "Glowlight Tetra", scientific: "Hemigrammus erythrozonus",
    category: "Fish", emoji: "🐠", difficulty: "Beginner", guideId: "glowlight-tetra", available: true, image: "/assets/guides/glowlight-tetra.jpg",
    bio: {
      overview: "The glowlight tetra is a slim, translucent schooling fish from the Essequibo River in Guyana, named for the glowing red-orange stripe that runs from its head to its tail. It is peaceful, easy to feed and adaptable, and it shows its best color in soft, acidic water and a group of 10 or more.",
      origin: "Essequibo River basin, Guyana",
      habitat: "Forest tributaries off the main river channel, in water stained dark brown with tannins",
      adultSize: "About 1.6 inches (4 cm)",
      wildDiet: "Worms, small crustaceans and plants",
      wildLifespan: "Not documented in the wild; about 2-4 years in captivity",
      conservation: "Least Concern (IUCN)",
      history: "Marion Durbin described the species in 1909 from fish collected on the 1908 Indiana University and Carnegie Museum expedition to British Guiana. Its name, erythrozonus, means red-banded, for the stripe along its side. The glowlight reached the aquarium trade from Guyana in the 1930s, and an early identification as Hyphessobrycon gracilis was later rejected.",
    },
  },
];
