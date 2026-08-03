// Emits the Beastlypedia route list for prerender.mjs and generate-sitemap.js.
//
// Why this exists rather than a third hardcoded array: both of those scripts
// currently hand-mirror the encyclopedia and guide ID lists in comments that
// say "mirrors <source>.js". Those mirrors drift the moment someone adds an
// animal and updates only one of them, and the failure is quiet - a page that
// renders fine for a visitor but never gets prerendered or listed in the
// sitemap. Beastlypedia is going from 1 entry to 15, so it would drift almost
// immediately.
//
// Runs before `vite build` (see package.json), so the JSON is always in step
// with the data and never needs hand-editing.
import fs from 'node:fs';
import path from 'node:path';

import { beastfiles, beastfileGroups } from '../src/lib/data/beastlypedia/index.js';

const outPath = path.join(process.cwd(), 'src/lib/generated/beastlypedia-index.json');

// Only groups that actually have entries get a route. Prerendering an empty
// filter page would put a dead end in the sitemap.
const populatedGroupSlugs = beastfileGroups
  .filter((g) => beastfiles.some((b) => b.group === g.name))
  .map((g) => g.slug);

const payload = {
  ids: beastfiles.map((b) => b.id).sort(),
  groupSlugs: populatedGroupSlugs,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);

console.log(
  `Beastlypedia index: ${payload.ids.length} beastfiles, ${payload.groupSlugs.length} group pages`
);
