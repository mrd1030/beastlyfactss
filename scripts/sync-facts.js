import fs from 'node:fs';
import { facts, categories } from '../src/lib/data/facts.js';
import { FACT_IMAGES } from '../src/lib/data/factImages.js';

// `photo` is the fact's own dedicated image, and only that: the name-keyed
// ANIMAL_IMAGES fallback is deliberately not consulted. The social feed poster
// reads this field to pick facts it can post, and a fact sharing a guide hero
// by animal name is not a fact with a photo of its own.

// 1. Manually format the facts array so each object is on its own line
const factsString = facts
  .map(f => JSON.stringify(FACT_IMAGES[f.id] ? { ...f, photo: FACT_IMAGES[f.id] } : f))
  .join(',\n  ');             // Join them with a comma and a new line

// 2. Build the final JSON structure
const fileContent = `{
  "facts": [
  ${factsString}
  ],
  "categories": ${JSON.stringify(categories, null, 2)}
}`;

// 3. Write to public/facts.json
fs.writeFileSync('./public/facts.json', fileContent);

console.log('Successfully synced with custom formatting!');