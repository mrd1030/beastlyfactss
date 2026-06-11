import fs from 'node:fs';
import { facts, categories } from '../src/lib/data/facts.js';

// 1. Manually format the facts array so each object is on its own line
const factsString = facts
  .map(f => JSON.stringify(f)) // Turn each object into a one-line JSON string
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