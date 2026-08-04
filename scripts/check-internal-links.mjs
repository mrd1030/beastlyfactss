// Fails the build if any article has fewer than MIN in-body internal links.
//
// This exists because the rule was being kept by hand and quietly stopped. In
// July 2026 all 322 published articles carried in-body links, median 7, minimum
// 1. From 1 August the median fell to 2 and ten articles shipped with none at
// all. Nothing flagged it, because nothing was checking.
//
// "In-body" is the important part. Every article already gets links from the
// Related Files and You May Also Like components, so counting rendered anchors
// makes an orphaned article look fine. An earlier audit of the built output
// reported zero articles below three links for exactly that reason. Only
// markdown links written into the prose count here.
import fs from 'node:fs';
import path from 'node:path';

const MIN = Number(process.env.MIN_INTERNAL_LINKS) || 1;
const CONTENT = 'content';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

const files = walk(CONTENT);
const offenders = [];

for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8');
  const body = raw.replace(/^---[\s\S]*?\r?\n---\r?\n/, '');
  // A markdown link whose target is site-relative. Excludes external links,
  // anchors and image embeds.
  const links = [...body.matchAll(/(?<!!)\[[^\]]+\]\((\/[^)#]*)\)/g)].map((m) => m[1]);
  const unique = new Set(links);
  if (unique.size < MIN) {
    offenders.push({ file: f.replace(/\\/g, '/'), count: unique.size });
  }
}

if (offenders.length === 0) {
  console.log(`Internal links: all ${files.length} articles carry at least ${MIN} in-body link.`);
  process.exit(0);
}

console.error('');
console.error(`Internal link check FAILED: ${offenders.length} of ${files.length} articles have fewer than ${MIN} in-body internal link(s).`);
console.error('');
for (const o of offenders) console.error(`  ${String(o.count).padStart(2)}  ${o.file}`);
console.error('');
console.error('Every article needs at least one link into another page on the site, written');
console.error('into the prose rather than left to the Related Files component. House style is');
console.error('a sentence that earns the link, for example:');
console.error('  The same thing happened with [the wombat\'s cube-shaped droppings](/blog/why-wombats-produce-cube-shaped-droppings/).');
console.error('');
console.error('Set MIN_INTERNAL_LINKS=0 to bypass, but that is what let this regress before.');
process.exit(1);
