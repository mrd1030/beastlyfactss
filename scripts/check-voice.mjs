// Voice checker: finds the patterns that make an article read as assembled.
//
// Every rule here is a rule in docs/RULES.md ("Writing an article"). This
// script exists because those rules were kept by hand and drifted: an
// audit in September 2026 found "genuinely" in 562 of 772 articles, 242 of
// them three or more times, and 198 articles whose FAQ was the body with a
// question mark glued on. Nothing was checking.
//
// Usage:
//   node scripts/check-voice.mjs                    report everything, exit 0
//   node scripts/check-voice.mjs --strict           exit 1 if any error
//   node scripts/check-voice.mjs --since 2026-09-07 only articles dated on/after
//   node scripts/check-voice.mjs --json out.json    write findings for voice-batch.mjs
//   node scripts/check-voice.mjs --slug betta-fish-cost-guide
//   node scripts/check-voice.mjs --match cost-guide   slugs matching a regex
//   node scripts/check-voice.mjs --limit 20          first N after filtering
//   node scripts/check-voice.mjs --write-baseline   snapshot today's failures
//
// `build` runs it with --strict. Articles listed in scripts/voice-baseline.json
// (the back catalog as it stood when the rules shipped) are skipped, so new
// articles must pass while the catalog gets fixed by the batch rewrite
// (scripts/voice-batch.mjs). After each batch lands, run --write-baseline
// again and the list shrinks. It is a ratchet: it only ever gets shorter.
//
// Errors are the rules with a number attached. Warnings are the cadence
// rules where a count is a smell, not a violation.
import fs from 'node:fs';
import path from 'node:path';
import { firsthandNote } from '../src/lib/data/firsthand.js';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const STRICT = flag('--strict');
const SINCE = opt('--since');
const JSON_OUT = opt('--json');
const ONLY_SLUG = opt('--slug');
const MATCH = opt('--match') ? new RegExp(opt('--match')) : null;
const LIMIT = Number(opt('--limit') || 0);
const WRITE_BASELINE = flag('--write-baseline');
const BASELINE_FILE = 'scripts/voice-baseline.json';
const BASELINE = new Set(fs.existsSync(BASELINE_FILE) ? JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8')) : []);

const CONTENT_DIRS = ['content/blog', 'content/guides', 'content/fun-facts'];

// ---------- rules ----------
const INTENSIFIER = /\b(genuinely|actually|really|the real)\b/gi;
const SELF_REFERENCE = /\b(on this site|this site's|elsewhere on this site|already covered|covered (?:in|by) our|covered here|covered on this site|our \w+(?: \w+)? guide covers|as covered in)\b/gi;
const CONTRAST_CLOSER = /\b(rather than|,\s*not\s+(just\s+)?(a|an|the|because|what|whether|how|which|when|if)\b)/gi;
// Comma doing a dash's job: a comma followed by a fresh clause subject.
const COMMA_SPLICE = /,\s+(it is|it's|that is|that's|they are|they're|this is|there is|there's)\b/gi;
const DASH = /[\u2013\u2014]/g;
const FIRST_PERSON_KEEPER = /\b(I keep|I've kept|I have kept|I raised|in my experience|my own (dragons?|rabbits?|dogs?|cats?|snakes?|geckos?|birds?|tank|enclosure))\b/gi;
const OPENER_LINK = /\]\(\//;
const FAQ_LINK = /\]\(/;
const MAX_CONTRAST = 2;
const MAX_SPLICE_WARN = 2;
const FAQ_OVERLAP = 0.3;

// ---------- helpers ----------
function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

function splitFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { fm: '', body: raw };
  return { fm: m[1], body: raw.slice(m[0].length) };
}

const fmField = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?\\s*$`, 'm'));
  return m ? m[1].trim() : '';
};

// FAQ answers, from the `faqs:` list. Quoted single-line values only, which
// is every FAQ on the site.
function faqAnswers(fm) {
  return [...fm.matchAll(/^\s+a:\s*"((?:[^"\\]|\\.)*)"\s*$/gm)].map((m) => m[1]);
}
function faqQuestions(fm) {
  return [...fm.matchAll(/^\s+-\s+q:\s*"((?:[^"\\]|\\.)*)"\s*$/gm)].map((m) => m[1]);
}
const MAX_FAQ_WORDS = 70;

// Body prose only: no Sources block, no components, no code, no link URLs.
function prose(body) {
  return body
    .replace(/<Sources>[\s\S]*?<\/Sources>/g, '')
    .replace(/^## Sources[\s\S]*$/m, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/^import .*$/gm, '')
    .replace(/^export .*$/gm, '');
}

const words = (s) => (s.toLowerCase().match(/[a-z0-9']+/g) || []);
function shingles(ws, n = 10) {
  const set = new Set();
  for (let i = 0; i + n <= ws.length; i += 1) set.add(ws.slice(i, i + n).join(' '));
  return set;
}

function firstSentence(text) {
  const t = text.replace(/^#.*$/gm, '').replace(/^\s+/, '');
  const m = t.match(/^[\s\S]*?[.!?](\s|$)/);
  return (m ? m[0] : t.slice(0, 300)).trim();
}

// ---------- check one article ----------
function check(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const { fm, body } = splitFrontmatter(raw);
  const slug = fmField(fm, 'slug') || path.basename(file, '.mdx');
  const date = fmField(fm, 'date') || fmField(fm, 'lastUpdated') || '';
  const errors = [];
  const warnings = [];
  const add = (list, rule, detail) => list.push({ rule, detail });

  const text = prose(body);

  // Dashes anywhere, frontmatter included.
  const dashCount = (raw.match(DASH) || []).length;
  if (dashCount) add(errors, 'dash', `${dashCount} em/en dash(es)`);

  // Intensifiers: none in headings, none in the first sentence, at most one
  // per section, never two in one paragraph.
  // The H1 is the series title ("How Much Does X Really Cost?"), a naming
  // decision rather than a sentence, so it warns. H2 and H3 are errors.
  const headings = body.match(/^#{1,3} .*$/gm) || [];
  for (const h of headings) {
    const hit = h.match(INTENSIFIER);
    if (!hit) continue;
    if (h.startsWith('# ')) add(warnings, 'intensifier-title', `"${h.trim()}"`);
    else add(errors, 'intensifier-heading', `"${h.trim()}"`);
  }
  const lede = firstSentence(text);
  if (INTENSIFIER.test(lede)) add(errors, 'intensifier-lede', `"${lede.slice(0, 140)}"`);
  INTENSIFIER.lastIndex = 0;
  const sections = text.split(/^#{2,3} .*$/m);
  sections.forEach((sec, i) => {
    const hits = sec.match(INTENSIFIER) || [];
    if (hits.length > 1) add(errors, 'intensifier-section', `section ${i}: ${hits.length} (${hits.slice(0, 4).join(', ')})`);
    for (const para of sec.split(/\n\s*\n/)) {
      const ph = para.match(INTENSIFIER) || [];
      if (ph.length > 1) add(errors, 'intensifier-paragraph', `"${para.trim().slice(0, 120)}"`);
    }
  });

  // Contrast closers and comma splices: cadence counts.
  const contrast = (text.match(CONTRAST_CLOSER) || []).length;
  if (contrast > MAX_CONTRAST) add(warnings, 'contrast-cadence', `${contrast} "X, not Y" / "rather than" (limit ${MAX_CONTRAST})`);
  // Warning only: a comma before "it is" can be a subordinate clause, so the
  // count is a smell for a human or the batch editor, never a build failure.
  const splices = text.match(COMMA_SPLICE) || [];
  if (splices.length > MAX_SPLICE_WARN) add(warnings, 'comma-splice', `${splices.length} comma-as-dash clauses (${splices.slice(0, 3).map((s) => s.trim()).join(' | ')})`);

  // Opener and closer. The first paragraph is about the animal, with no link
  // in it: the care-guide link moves to the end of the first section. The
  // last paragraph is not a link dump: three or more links in it, or the
  // "browse the rest of our" sentence, is the site talking to itself. In
  // September 2026 this was 561 openers and 423 closers. Links are never
  // removed to satisfy either rule, only moved and given a sentence each.
  const paras = body
    .replace(/<Sources>[\s\S]*?<\/Sources>/g, '')
    .replace(/^## Sources[\s\S]*$/m, '')
    .split(/\n\s*\n/)
    .map((x) => x.trim())
    .filter((x) => x && !/^(#|<|import |---|!\[)/.test(x));
  if (paras.length) {
    const first = paras[0];
    const last = paras[paras.length - 1];
    if (OPENER_LINK.test(first)) add(errors, 'opener-link', `first paragraph carries a link: "${first.slice(0, 120)}"`);
    // A pill row ("[Cost](/..) · [Handling](/..) · ...") is navigation, not a
    // prose closer, so it is exempt from the link count.
    const pillRow = /^(\[[^\]]+\]\([^)]+\)\s*(·\s*)?)+$/.test(last);
    const closerLinks = (last.match(/\]\(\//g) || []).length;
    if (closerLinks >= 3 && !pillRow) add(errors, 'closer-dump', `${closerLinks} links in the closing paragraph`);
    if (/browse the (rest of our|full)/i.test(last)) add(errors, 'closer-dump', '"browse the rest of our" closer');
  }

  // Linking (RULES, Linking, 2026-09-08). The series pass is done: sibling-link
  // is an error. self-reference and section-link were warnings until the
  // cross-species pass finished on 2026-09-16; all three are errors now.
  //   self-reference: the site talking about itself.
  //   sibling-link: more than one link to the same species' own guides or hub;
  //     the Deep Dive carries those, prose gets one only when it is the answer.
  //   section-link: a link before the first H2; the first section is about
  //     the animal.
  const selfRefs = slug === 'welcome-to-beastlyfacts' ? [] : (text.match(SELF_REFERENCE) || []);
  if (selfRefs.length) add(errors, 'self-reference', `${selfRefs.length}: ${[...new Set(selfRefs.map((x) => x.toLowerCase()))].slice(0, 3).join(' | ')}`);
  const suffixMatch = slug.match(/^(.*)-(cost|handling|health-issues|tank-setup|feeding|enrichment|legal)-guide$/);
  if (suffixMatch) {
    const prefix = suffixMatch[1];
    const sib = new RegExp(`\\]\\((?:/blog/${prefix}-(?:cost|handling|health-issues|tank-setup|feeding|enrichment|legal)-guide/?|/guides/${prefix}/?)\\)`, 'g');
    const sibCount = (body.match(sib) || []).length;
    if (sibCount > 1) add(errors, 'sibling-link', `${sibCount} links to the species' own guides or hub (limit 1)`);
  }
  // vs guides and overviews link both animals in the opener by design, the
  // fun-facts posts carry each fact as an H3 so every link sits before the
  // first H2, the welcome post is about the site, and a legacy post with no
  // H2 at all has no first section to protect.
  const linksBothByDesign = /-vs-|-overview$|^10-surprising-|^fun-facts-|^welcome-to-beastlyfacts$/.test(slug) || !/\n## /.test(body);
  const firstSection = body.split(/\n## /)[0];
  const firstLinks = (firstSection.match(/\]\(\//g) || []).length;
  if (firstLinks && !linksBothByDesign) add(errors, 'section-link', `${firstLinks} link(s) before the first H2`);

  // FAQ that photocopies the body.
  const answers = faqAnswers(fm);
  if (answers.length) {
    const bodySh = shingles(words(text));
    let copied = 0;
    for (const a of answers) {
      const aw = words(a);
      if (aw.length < 12) continue;
      let hit = 0; let total = 0;
      for (let i = 0; i + 10 <= aw.length; i += 1) { total += 1; if (bodySh.has(aw.slice(i, i + 10).join(' '))) hit += 1; }
      if (total && hit / total > FAQ_OVERLAP) copied += 1;
    }
    if (copied) add(errors, 'faq-copied', `${copied} of ${answers.length} FAQ answers repeat the body`);
  }

  // FAQ hygiene: no intensifiers in a question or answer (a 40-word answer
  // has no room for filler), and answers that run long are usually a rewrite
  // that grew instead of answering. The first batch grew every rewritten
  // answer by 40 to 70 percent and smuggled in unsourced claims doing it.
  for (const q of faqQuestions(fm)) {
    if (q.match(INTENSIFIER)) add(errors, 'intensifier-faq', `question "${q.slice(0, 100)}"`);
  }
  for (const a of answers) {
    // Blog.jsx prints FAQ answers as plain text and the FAQPage schema takes
    // the same string, so a markdown link renders as "[text](/url/)" on the
    // page. Keep the anchor text, put the link in the body instead.
    if (FAQ_LINK.test(a)) add(errors, 'faq-link', `answer carries a markdown link: "${a.slice(0, 100)}"`);
    if (a.match(INTENSIFIER)) add(errors, 'intensifier-faq', `answer "${a.slice(0, 100)}"`);
    if (words(a).length > MAX_FAQ_WORDS) add(warnings, 'faq-long', `${words(a).length} words: "${a.slice(0, 80)}"`);
  }

  // The excerpt is the card and meta text: an intensifier there is filler in
  // the one line that has the least room for it.
  const excerpt = fmField(fm, 'excerpt');
  if (excerpt && excerpt.match(INTENSIFIER)) add(errors, 'intensifier-excerpt', `"${excerpt.slice(0, 100)}"`);

  // First person on a species nobody here has kept.
  if (!firsthandNote(slug)) {
    const fp = text.match(FIRST_PERSON_KEEPER);
    if (fp) add(errors, 'first-person', `documentary page says "${fp[0]}"`);
  }

  return { file, slug, date, errors, warnings };
}

// ---------- run ----------
const files = CONTENT_DIRS.flatMap((d) => walk(d));
const results = [];
for (const f of files) {
  const r = check(f);
  if (ONLY_SLUG && r.slug !== ONLY_SLUG) continue;
  if (MATCH && !MATCH.test(r.slug)) continue;
  if (SINCE && (!r.date || r.date < SINCE)) continue;
  results.push(r);
}

if (WRITE_BASELINE) {
  const failing = results.filter((r) => r.errors.length).map((r) => r.slug).sort();
  fs.writeFileSync(BASELINE_FILE, `${JSON.stringify(failing, null, 0).replace(/,/g, ',\n')}\n`);
  console.log(`Baseline written: ${failing.length} slugs in ${BASELINE_FILE}. --strict skips these until they are fixed and the baseline is rewritten.`);
  process.exit(0);
}

// --limit counts articles that still fail, so repeated runs on one series
// walk through it instead of returning the same already-clean files.
if (LIMIT) {
  const failing = results.filter((r) => r.errors.length).slice(0, LIMIT);
  results.length = 0;
  results.push(...failing);
}
const withErrors = results.filter((r) => r.errors.length && !(STRICT && BASELINE.has(r.slug)));
const skipped = STRICT ? results.filter((r) => r.errors.length && BASELINE.has(r.slug)).length : 0;
const withWarnings = results.filter((r) => r.warnings.length && !r.errors.length);
const ruleCounts = {};
for (const r of withErrors) for (const e of r.errors) ruleCounts[e.rule] = (ruleCounts[e.rule] || 0) + 1;

if (JSON_OUT) {
  fs.writeFileSync(JSON_OUT, JSON.stringify(results.filter((r) => r.errors.length || r.warnings.length), null, 2));
}

const scope = SINCE ? `dated ${SINCE} or later` : 'all';
console.log(`Voice check: ${results.length} articles (${scope}), ${withErrors.length} with errors, ${withWarnings.length} warnings only${skipped ? `, ${skipped} legacy failures skipped via baseline` : ''}.`);
if (Object.keys(ruleCounts).length) {
  console.log('Errors by rule: ' + Object.entries(ruleCounts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(', '));
}
const show = ONLY_SLUG || withErrors.length <= 40 ? withErrors : withErrors.slice(0, 40);
for (const r of show) {
  console.log(`\n${r.file}`);
  for (const e of r.errors) console.log(`  ERROR ${e.rule}: ${e.detail}`);
  for (const w of r.warnings) console.log(`  warn  ${w.rule}: ${w.detail}`);
}
if (withErrors.length > show.length) console.log(`\n... ${withErrors.length - show.length} more. Use --json to get all of them.`);

if (STRICT && withErrors.length) {
  console.error(`\nVoice check FAILED: ${withErrors.length} article(s) break rules in docs/RULES.md. Fix the sentences, not the checker.`);
  process.exit(1);
}
