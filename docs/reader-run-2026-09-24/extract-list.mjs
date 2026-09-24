// Renders one species' set of pages as plain text for a reader test: the care
// guide hub, the encyclopedia entry, and every series guide (cost, handling,
// health issues, tank setup, feeding, enrichment, legal, plus any other
// <species>-*-guide.mdx). A reader agent gets these files and nothing else.
//
//   node scripts/reader-extract.mjs <species-id> [<out-dir>]
//
// What a reader sees that raw MDX would hide: ComparisonTable rows as a real
// table, FunFact and KeyTakeaway as labeled paragraphs, the Sources list, the
// Deep Dive list the page renders (from relatedArticles.js), and a list of
// every link the body carries. Affiliate and internal links become plain text
// in the prose. Nothing here is written back to content.
//
// Written 2026-09-08 after two set tests read hand-stripped text and reported
// "tables render as raw code" and "the hub links to nothing", both artifacts
// of the stripping, not the pages.
import fs from 'node:fs';
import path from 'node:path';
import { getDeepDiveSiblings, getRelatedArticleSlugs, isSharedDeepDiveArticle } from '../src/lib/data/relatedArticles.js';
const species = '';
const outDir = process.argv[2]; fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

const meta = JSON.parse(fs.readFileSync('src/lib/generated/mdx-meta.json', 'utf8')).filter((p) => p.slug);
const posts = meta.map((p) => ({ ...p, _id: p.slug, id: p.slug }));
const titleOf = (slug) => posts.find((p) => p.slug === slug)?.title || slug;
// The sidebar is two lists: Deep Dive (this species' own articles) and
// Health and More (guides shared across the class: quarantine, shedding,
// heat stress, vet trips). Two set tests reported gaps that the shared list
// covered, because it was rendered as bare titles inside one list and the
// reader never opened them. Each shared title now carries its excerpt.
function renderLists(slugs) {
  const own = slugs.filter((s) => !isSharedDeepDiveArticle(s));
  const shared = slugs.filter((s) => isSharedDeepDiveArticle(s));
  const excerptOf = (slug) => posts.find((p) => p.slug === slug)?.excerpt || '';
  return '\n\nDeep Dive list shown on this page (sidebar on desktop, after the FAQ on phones), this species\' own articles:\n'
    + (own.length ? own.map((sl) => '- ' + titleOf(sl)).join('\n') : '- none')
    + '\n\nHealth and More list shown on this page (sidebar, under the Deep Dive), guides shared across the class, each with the one-line summary the site shows:\n'
    + (shared.length ? shared.map((sl) => `- ${titleOf(sl)}${excerptOf(sl) ? ': ' + excerptOf(sl) : ''}`).join('\n') : '- none');
}

// ---------- MDX body to reader text ----------
const stripTags = (s) => s.replace(/<[^>]+>/g, '');

function renderTable(block) {
  const headers = /headers=\{\[(.*?)\]\}/s.exec(block)?.[1] || '';
  const rowsSrc = /rows=\{\[(.*)\]\}/s.exec(block)?.[1] || '';
  // A cell can be a bare JSX element used directly as a row value, not just
  // text wrapped in a <>fragment</> - e.g. <AffiliateLink href="...">Perches</AffiliateLink>
  // as its own array entry. Budgie's cost guide table hit this: any row with
  // one of those failed the whole table's JS-eval parse, and every other row
  // silently vanished behind "[table could not be parsed]" with it. Resolve
  // innermost-first (a component nested inside a fragment) by looping until
  // no more tag pairs remain, turning each into a quoted JS string of its
  // stripped inner text before the final bare-tag strip.
  const clean = (s) => {
    let prev;
    do {
      prev = s;
      s = s
        .replace(/<>(.*?)<\/>/gs, (_, inner) => JSON.stringify(stripTags(inner)))
        .replace(/<([A-Za-z][\w.]*)(?:\s[^>]*)?>(.*?)<\/\1>/gs, (_m, _tag, inner) => JSON.stringify(stripTags(inner)));
    } while (s !== prev);
    return s.replace(/<[^>]+>/g, '');
  };
  let headerCells = [];
  let rows = [];
  try {
    headerCells = new Function(`return [${clean(headers)}]`)();
    rows = new Function(`return [${clean(rowsSrc)}]`)();
  } catch {
    return '[table could not be parsed]';
  }
  const line = (cells) => '| ' + cells.map((c) => String(c ?? '').trim()).join(' | ') + ' |';
  return [line(headerCells), '|' + headerCells.map(() => '---').join('|') + '|', ...rows.map(line)].join('\n');
}

function renderBody(body, slug) {
  const links = [];
  let text = body;
  text = text.replace(/<ComparisonTable[\s\S]*?\]\}\s*\/>/g, (m) => '\n' + renderTable(m) + '\n');
  text = text.replace(/<Sources>([\s\S]*?)<\/Sources>/g, (_, inner) =>
    '\nSources listed on this page:\n' + inner.replace(/\]\([^)]*\)/g, ']').replace(/\[([^\]]*)\]/g, '$1'));
  text = text.replace(/<FunFact>([\s\S]*?)<\/FunFact>/g, (_, inner) => '\nFun fact box: ' + inner.trim() + '\n');
  text = text.replace(/<KeyTakeaway>([\s\S]*?)<\/KeyTakeaway>/g, (_, inner) => '\nKey takeaway box: ' + inner.trim() + '\n');
  text = text.replace(/<Figure[^>]*caption="([^"]*)"[^>]*\/>/g, '\n[photo: $1]\n');
  text = text.replace(/<CarePackageBlock[^>]*\/>/g, '\n[card: the printable care package for this species, with its price and a link to the store]\n');
  text = text.replace(/<AffiliateLink[^>]*>([\s\S]*?)<\/AffiliateLink>/g, '$1');
  text = text.replace(/<(VetDisclaimer|LegalDisclaimer|AffiliateDisclosure)[^>]*\/>/g, (m) =>
    m.includes('Vet') ? '[Not veterinary advice notice]' : m.includes('Legal') ? '[Legal disclaimer notice]' : '[Affiliate disclosure notice]');
  text = text.replace(/\[([^\]]*)\]\((\/[^)\s]+)\)/g, (_, t, u) => { links.push(`${t} -> ${u}`); return t; });
  text = text.replace(/^# .*$/m, '');
  text = text.replace(/^---$/gm, '');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/\n{3,}/g, '\n\n').trim();
  const dd = getDeepDiveSiblings(slug, posts, { fromGuideId: species, limit: 40 });
  return text
    + '\n\n---\nInternal links in the body (anchor -> page):\n' + (links.length ? links.map((l) => '- ' + l).join('\n') : '- none')
    + renderLists(dd);
}

function frontmatterFaqs(fm) {
  const out = [];
  const re = /- q: "(.*)"\s*\n\s*a: "(.*)"/g;
  let m;
  while ((m = re.exec(fm))) out.push(`Q: ${m[1]}\nA: ${m[2]}`);
  return out.length ? '\n\nFAQ shown under the article:\n' + out.join('\n\n') : '';
}

const slugs = process.argv.slice(3);
slugs.forEach((slug, i) => {
  const f = ['guides', 'blog', 'fun-facts', 'short-story'].map((d) => path.join('content', d, slug + '.mdx')).find((p) => fs.existsSync(p));
  if (!f) { console.error('missing ' + slug); return; }
  const raw = fs.readFileSync(f, 'utf8');
  const [fm, body] = raw.split(/\n---\n/, 2).length === 2 ? raw.split(/\n---\n/, 2) : ['', raw];
  const title = /^title: "(.*)"$/m.exec(fm)?.[1] || slug;
  let rendered;
  try { rendered = renderBody(body, slug); } catch { rendered = renderBody.toString() && body; }
  fs.writeFileSync(path.join(outDir, `${String(i + 1).padStart(2, '0')}-${slug}.txt`), `ARTICLE: ${title}\n\n` + rendered + frontmatterFaqs(fm) + '\n');
});
console.log(outDir + ': ' + slugs.length);
