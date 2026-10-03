// Encyclopedia metadata that is safe to import on its own: the category list
// and the difficulty pill colours. Split out of index.js so the homepage and
// other lightweight consumers can use these without pulling the animal data
// barrel (~120KB) into their chunk. index.js re-exports both.
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

// Light mode: -800 text on a -100 pill. The earlier -700 on -50 passed WCAG
// but the -50 pill all but vanished on the cream cards, amber worst of all;
// -100 reads as a pill and -800 on -100 clears 4.5:1 with room to spare.
// Amber alone gets -200: yellow on cream still washed out at -100.
// Flagged first by PageSpeed's accessibility audit, then by eye on a phone.
export const difficultyColor = {
  "Self-Sufficient": "text-sky-800 bg-sky-100 dark:bg-sky-950 dark:text-sky-400",
  "Beginner": "text-emerald-800 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400",
  "Beginner/Intermediate": "text-lime-800 bg-lime-100 dark:bg-lime-950 dark:text-lime-400",
  "Intermediate": "text-amber-800 bg-amber-200 dark:bg-amber-950 dark:text-amber-400",
  "Intermediate/Advanced": "text-orange-800 bg-orange-100 dark:bg-orange-950 dark:text-orange-400",
  "Advanced": "text-red-800 bg-red-100 dark:bg-red-950 dark:text-red-400",
};
