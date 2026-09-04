#!/usr/bin/env node
// Merge src/lib/data/legalStatus.additions.json into legalStatus.json.
// Never overwrites a cell that already exists.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const matrixPath = path.join(root, 'src/lib/data/legalStatus.json');
const addPath = path.join(root, 'src/lib/data/legalStatus.additions.json');

const legal = JSON.parse(fs.readFileSync(matrixPath, 'utf8'));
const add = JSON.parse(fs.readFileSync(addPath, 'utf8'));

let added = 0;
let skipped = 0;

for (const [id, src] of Object.entries(add.source || {})) {
  if (!legal.sources[id]) {
    legal.sources[id] = src;
    console.log('source', id);
  }
}

for (const [animal, cells] of Object.entries(add.cells || {})) {
  if (!legal.animals[animal]) {
    console.warn('unknown animal', animal);
    continue;
  }
  for (const [jid, cell] of Object.entries(cells)) {
    if (legal.animals[animal].jurisdictions[jid]) {
      skipped += 1;
      continue;
    }
    legal.animals[animal].jurisdictions[jid] = cell;
    added += 1;
    console.log('+', animal, jid, cell.status);
  }
}

legal.coverage.perAnimal = {};
for (const [id, animal] of Object.entries(legal.animals)) {
  const checked = Object.keys(animal.jurisdictions).filter(
    (c) => legal.jurisdictions[c]?.level !== 'city',
  ).length;
  legal.coverage.perAnimal[id] = { checked, of: 51 };
}

fs.writeFileSync(matrixPath, JSON.stringify(legal, null, 2) + '\n');
console.log(`wrote ${matrixPath} added=${added} skipped=${skipped}`);
