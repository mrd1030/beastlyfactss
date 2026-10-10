// Uploads rendered pin cards to the beastlyfacts-pins R2 bucket, served at
// https://pins.beastlyfacts.com/<out>.jpg. No site build is involved, so a
// batch is importable into Publer the moment this finishes.
//
// Usage:
//   node scripts/upload-pins.mjs <spec.json | batch.json> [--4x5]   (--4x5 with a spec uploads the feed cards)
// Takes the same spec file as generate-pins.mjs (or a pinterest batch) and uploads each
// social-batches/pins/<out>.jpg, then fetches every public url and fails
// unless all of them answer 200.
//
// Needs wrangler signed in (`npx wrangler login` once, in a real terminal).
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const BUCKET = 'beastlyfacts-pins';
const PUBLIC = 'https://pins.beastlyfacts.com';

const specPath = process.argv[2];
if (!specPath) {
  console.error('usage: node scripts/upload-pins.mjs <spec.json>');
  process.exit(1);
}
// A Publer batch file works too: the cards are read off its media urls.
const input = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const specs = input.posts
  ? input.posts.flatMap((p) => p.media).filter((m) => m.startsWith(PUBLIC + '/')).map((m) => ({ out: m.slice(PUBLIC.length + 1).replace(/\.jpg$/, '') }))
  : input.map((s) => (process.argv.includes('--4x5') ? { ...s, out: `${s.out}-4x5` } : s));

const missing = specs.filter((s) => !fs.existsSync(`social-batches/pins/${s.out}.jpg`));
if (missing.length) {
  console.error(`not rendered yet, run generate-pins.mjs first: ${missing.map((s) => s.out).join(', ')}`);
  process.exit(1);
}

for (const { out } of specs) {
  execFileSync('npx', ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${out}.jpg`,
    '--file', `social-batches/pins/${out}.jpg`, '--content-type', 'image/jpeg', '--remote'],
  { stdio: ['ignore', 'ignore', 'inherit'], shell: process.platform === 'win32' });
  console.log(`uploaded ${out}.jpg`);
}

const bad = [];
for (const { out } of specs) {
  const res = await fetch(`${PUBLIC}/${out}.jpg`, { method: 'HEAD' });
  if (res.status !== 200) bad.push(`${out}.jpg (${res.status})`);
}
if (bad.length) {
  console.error(`uploaded but not publicly reachable: ${bad.join(', ')}`);
  process.exit(1);
}
console.log(`${specs.length} pins live at ${PUBLIC}`);
