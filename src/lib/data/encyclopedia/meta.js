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

// Light-mode text is the -700 shade: every -600 fails WCAG 4.5:1 on its -50
// pill (lime-600 was 2.98:1), while all six -700s clear it at 4.8 to 5.9.
// Flagged by PageSpeed's accessibility audit on every difficulty chip.
export const difficultyColor = {
  "Self-Sufficient": "text-sky-700 bg-sky-50 dark:bg-sky-950 dark:text-sky-400",
  "Beginner": "text-emerald-700 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400",
  "Beginner/Intermediate": "text-lime-700 bg-lime-50 dark:bg-lime-950 dark:text-lime-400",
  "Intermediate": "text-amber-700 bg-amber-50 dark:bg-amber-950 dark:text-amber-400",
  "Intermediate/Advanced": "text-orange-700 bg-orange-50 dark:bg-orange-950 dark:text-orange-400",
  "Advanced": "text-red-700 bg-red-50 dark:bg-red-950 dark:text-red-400",
};
