// The first-week card is a card, not the deep dives again in a different font.
// Decided 2026-09-15 after a count: batch A hubs carried 13 rows and about 340
// words, batch P carried 32 rows and about 1,300, and nothing in the process
// ever pushed back, because every reader gap and every check finding was
// answered by adding a row. The rabbit and bearded dragon hubs are the
// templates RULES names, and they never moved: 15 rows/321 words and 18
// rows/388 words. The five template hubs the batch prompt names sit between 14
// and 18 rows and between 321 and 456 words, so the cap is the top of that
// range, not an average of it: 18 rows, 500 words.
//
// Rows are combined, not added. Two rows from the same deep dive that answer
// the same first-week question are one row with a broader label; a row that is
// not a decision a keeper makes in week one belongs in the deep dive the route
// line already points at.
import fs from 'fs';
import path from 'path';

const MAX_ROWS = 18;
const MAX_WORDS = 500;

const files = fs.readdirSync('src/lib/data/guides').filter((f) => f.endsWith('.js') && f !== 'index.js');
const hubs = [];
for (const f of files) {
  const m = await import(path.resolve('src/lib/data/guides', f));
  for (const k of Object.keys(m)) {
    if (!Array.isArray(m[k])) continue;
    for (const g of m[k]) if (g && g.layout === 'router' && g.firstWeek) hubs.push({ file: f, ...g });
  }
}

const over = [];
for (const g of hubs) {
  const rows = g.firstWeek.rows.length;
  const words = g.firstWeek.rows.reduce((a, r) => a + String(r.value).trim().split(/\s+/).length, 0);
  if (rows > MAX_ROWS || words > MAX_WORDS) over.push({ id: g.id, file: g.file, rows, words });
}

const totalRows = hubs.reduce((a, g) => a + g.firstWeek.rows.length, 0);
const totalWords = hubs.reduce((a, g) => a + g.firstWeek.rows.reduce((b, r) => b + String(r.value).trim().split(/\s+/).length, 0), 0);
console.log(
  `Hub first-week cards: ${hubs.length} router hubs, ${totalRows} rows (${(totalRows / hubs.length).toFixed(1)} per hub), ` +
    `${totalWords} words (${Math.round(totalWords / hubs.length)} per hub). Cap: ${MAX_ROWS} rows, ${MAX_WORDS} words.`
);

if (over.length) {
  console.log(`\n${over.length} over the cap:`);
  for (const o of over.sort((a, b) => b.rows - a.rows)) {
    console.log(`  ${o.id.padEnd(26)} ${String(o.rows).padStart(2)} rows  ${String(o.words).padStart(4)} words  (${o.file})`);
  }
  console.error(
    `\nHub row check FAILED: ${over.length} hub(s) over ${MAX_ROWS} rows or ${MAX_WORDS} words. ` +
      `Combine rows that share a source, or move the row into the deep dive its route already points at. Do not just delete a figure a keeper needs.`
  );
  process.exit(1);
}
console.log('Every router hub is within the rabbit and bearded dragon sizes.');
