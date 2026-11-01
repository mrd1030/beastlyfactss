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
    id: "black-skirt-tetra", name: "Black Skirt Tetra", scientific: "Gymnocorymbus ternetzi",
    category: "Fish", emoji: "🐠", difficulty: "Beginner", guideId: "black-skirt-tetra", available: true, image: "/assets/guides/black-skirt-tetra.jpg",
    bio: {
      overview: "The black skirt tetra is a hardy, deep-bodied schooling fish from the Rio Paraguay basin in South America, also sold as the black widow tetra. It eats almost anything and handles a wide range of water, but it nips fins, so it is kept in a school of 12 and away from slow, long-finned fish. The white skirt and long-fin forms are the same species, and so are fluorescent GloFish Skirt Tetras.",
      origin: "Rio Paraguay and Guaporé basins (Brazil, Bolivia, Argentina)",
      habitat: "Small, slow-moving creeks and streams under dense overhanging vegetation, and plant beds in floodplain oxbow lakes",
      adultSize: "About 2-2.5 inches (5-6 cm) in aquariums; up to 3 inches (7.5 cm)",
      wildDiet: "Worms, small crustaceans and insects",
      wildLifespan: "Not documented in the wild; about 3-5 years in captivity",
      conservation: "Least Concern (IUCN)",
      history: "George Albert Boulenger described the species in 1895 as Tetragonopterus ternetzi, from fish collected at Descalvados in Mato Grosso, Brazil, and named it for the Swiss-born naturalist Carl Ternetz, who assembled the collection. Carl Eigenmann moved it into the genus Gymnocorymbus in 1910. A relative in the same genus, Gymnocorymbus bondi, honors Frank Bond, father of the ornithologist James Bond, whose name Ian Fleming borrowed for his spy.",
    },
  },
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
  {
    id: "rummy-nose-tetra", name: "Rummy-Nose Tetra", scientific: "Petitella bleheri (formerly Hemigrammus bleheri)",
    category: "Fish", emoji: "🐠", difficulty: "Intermediate", guideId: "rummy-nose-tetra", available: true, image: "/assets/guides/rummy-nose-tetra.jpg",
    bio: {
      overview: "The rummy-nose tetra is a slim schooling fish from the blackwater rivers of the Rio Negro and Rio Meta basins, named for the bright red that covers its head. It schools so tightly that physicists use it to study how groups of animals move together, and the red fades when a fish is stressed or kept in poor conditions. Most fish sold under the name are Petitella bleheri; two close look-alikes, P. rhodostoma and P. georgiae, are sometimes sold under the same label.",
      origin: "Rio Negro and Rio Meta basins (Brazil and Colombia)",
      habitat: "Tannin-stained, very acidic blackwater rivers and flooded forest streams, with few aquatic plants",
      adultSize: "About 1.5-2 inches (4-5 cm)",
      wildDiet: "Omnivorous: microcrustaceans, insect larvae, filamentous algae and plant fragments, shifting with the flood season",
      wildLifespan: "Not documented in the wild; about 5 years in captivity",
      conservation: "Least Concern (IUCN)",
      history: "Géry and Mahnert described the species in 1986 from the Rio Negro in Brazil and named it for Heiko Bleher, the explorer and ornamental fish wholesaler who collected specimens there. It sat in the genus Hemigrammus until a 2020 study moved it, along with the original rummy-nose tetra described by Ahl in 1924, into Petitella. In Brazil's Amazonas state it ranks second among exported aquarium fish, behind only the cardinal tetra.",
    },
  },
];
