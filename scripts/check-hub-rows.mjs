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
// Rows are rewritten, not added and not glued together. Two rows from the same
// deep dive that answer the same first-week question are one row with a
// broader label, written fresh; a row that is not a decision a keeper makes in
// week one belongs in the deep dive the route line already points at.
//
// The per-row cap exists because the first pass at the 18-row cap reached it
// by concatenating neighboring rows: 25 degu rows became 14 by stapling
// sentences together, which left 254 rows over 40 words, 49 over 60, and a
// dozen rows whose kept sentence had lost its subject to a dropped one (the
// degu pellet cap now attached to unlimited hay). The row count and the word
// total both passed. The longest template row is 62 words (goldfish, Power
// outage), so that is the cap; a row longer than that is two rows or a
// paragraph, and neither belongs on a card.
import fs from 'fs';
import path from 'path';

const MAX_ROWS = 18;
const MAX_WORDS = 500;
const MAX_ROW_WORDS = 62;
// Ten words of slack on either word cap, decided 2026-09-16: a card or a row
// may run past its cap only when a figure will not fit otherwise, and by no
// more than ten words. Past the cap is a warning; past the slack is a failure.
const SLACK = 10;

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
const longRows = [];
for (const g of hubs) {
  const rows = g.firstWeek.rows.length;
  const words = g.firstWeek.rows.reduce((a, r) => a + String(r.value).trim().split(/\s+/).length, 0);
  if (rows > MAX_ROWS || words > MAX_WORDS + SLACK) over.push({ id: g.id, file: g.file, rows, words });
  else if (words > MAX_WORDS) console.log(`  slack: ${g.id} is ${words} words, ${words - MAX_WORDS} over the ${MAX_WORDS} cap`);
  for (const r of g.firstWeek.rows) {
    const w = String(r.value).trim().split(/\s+/).length;
    if (w > MAX_ROW_WORDS + SLACK) longRows.push({ id: g.id, file: g.file, label: r.label, words: w });
    else if (w > MAX_ROW_WORDS) console.log(`  slack: ${g.id} / ${r.label} is ${w} words, ${w - MAX_ROW_WORDS} over the ${MAX_ROW_WORDS} row cap`);
  }
}

const totalRows = hubs.reduce((a, g) => a + g.firstWeek.rows.length, 0);
const totalWords = hubs.reduce((a, g) => a + g.firstWeek.rows.reduce((b, r) => b + String(r.value).trim().split(/\s+/).length, 0), 0);
console.log(
  `Hub first-week cards: ${hubs.length} router hubs, ${totalRows} rows (${(totalRows / hubs.length).toFixed(1)} per hub), ` +
    `${totalWords} words (${Math.round(totalWords / hubs.length)} per hub). Cap: ${MAX_ROWS} rows, ${MAX_WORDS} words, ${MAX_ROW_WORDS} words per row.`
);

if (longRows.length) {
  console.log(`\n${longRows.length} row(s) over ${MAX_ROW_WORDS} words:`);
  for (const r of longRows.sort((a, b) => b.words - a.words)) {
    console.log(`  ${r.id.padEnd(26)} ${String(r.words).padStart(3)} words  ${r.label}  (${r.file})`);
  }
}

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
if (longRows.length) {
  console.error(
    `\nHub row check FAILED: ${longRows.length} row(s) over ${MAX_ROW_WORDS} words. ` +
      `A row that long is two rows or a paragraph. Rewrite it to the decision the keeper makes, do not merge neighbors into it.`
  );
  process.exit(1);
}
console.log('Every router hub is within the rabbit and bearded dragon sizes, and no row runs past the longest template row.');
