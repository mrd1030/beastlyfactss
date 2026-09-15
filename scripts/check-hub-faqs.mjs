// Every router hub FAQ must be a verbatim copy, question AND answer, of a FAQ
// in one of that hub's own deep dives (RULES, Hubs). Comparing only the
// questions is not enough: batch J shipped three questions lifted correctly
// with all three answers reworded, and a question-only check reports that hub
// as clean. Run after any hub rebuild.
import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('src/lib/data/guides').filter(f => f.endsWith('.js') && f !== 'index.js');
const mods = {};
for (const f of files) {
  const m = await import(path.resolve('src/lib/data/guides', f));
  for (const k of Object.keys(m)) if (Array.isArray(m[k])) mods[f] = m[k];
}

// frontmatter FAQ extractor: returns [{q,a}] for a slug
const faqCache = new Map();
function ddFaqs(slug) {
  if (faqCache.has(slug)) return faqCache.get(slug);
  const p = `content/guides/${slug}.mdx`;
  let out = [];
  if (fs.existsSync(p)) {
    const t = fs.readFileSync(p, 'utf8');
    const fm = t.split(/^---$/m)[1] || '';
    const block = fm.split(/^faqs:/m)[1];
    if (block) {
      const re = /^  - q: "((?:[^"\\]|\\.)*)"\n    a: "((?:[^"\\]|\\.)*)"/gm;
      let m;
      while ((m = re.exec(block))) out.push({ q: unesc(m[1]), a: unesc(m[2]) });
    }
  }
  faqCache.set(slug, out);
  return out;
}
function unesc(s) {
  return s.replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

const rows = [];
for (const [file, list] of Object.entries(mods)) {
  for (const g of list) {
    if (!g.firstWeek) continue; // router hubs only
    const own = (g.routes || []).map(r => r.slug);
    const pool = [];
    for (const s of own) for (const f of ddFaqs(s)) pool.push({ ...f, slug: s });
    const res = (g.faqs || []).map(h => {
      const hq = unesc(h.q), ha = unesc(h.a);
      const qHit = pool.find(p => p.q === hq);
      const bothHit = pool.find(p => p.q === hq && p.a === ha);
      const aHit = pool.find(p => p.a === ha);
      return { q: hq, qMatch: !!qHit, aMatch: !!bothHit, aOnly: !!aHit, from: qHit?.slug };
    });
    rows.push({ file, id: g.id, n: res.length, res, routes: own.length });
  }
}

let cleanN = 0, qOnlyN = 0, writtenN = 0;
const bad = [];
for (const r of rows) {
  const written = r.res.filter(x => !x.aMatch);
  if (written.length === 0) { cleanN++; continue; }
  const qOnly = written.filter(x => x.qMatch).length;
  const none = written.filter(x => !x.qMatch).length;
  bad.push({ ...r, qOnly, none, written: written.length });
}
console.log(`Router hubs checked: ${rows.length}`);
console.log(`Clean (all FAQs verbatim q+a from an own deep dive): ${cleanN}`);
console.log(`With at least one non-verbatim FAQ: ${bad.length}\n`);
bad.sort((a, b) => b.written - a.written || a.id.localeCompare(b.id));
for (const b of bad) {
  console.log(`${b.id.padEnd(26)} ${b.written}/${b.n} non-verbatim   (question matched but answer reworded: ${b.qOnly}; question not in any own deep dive: ${b.none})`);
  for (const x of b.res.filter(y => !y.aMatch)) {
    console.log(`    ${x.qMatch ? 'ANSWER REWORDED' : 'WRITTEN        '}  ${x.q.slice(0, 88)}`);
  }
}
