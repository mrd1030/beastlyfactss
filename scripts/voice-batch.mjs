// Batch rewrite for the back catalog, driven by check-voice.mjs findings.
//
// The model gets the rulebook (cached), the article, and the exact findings,
// and returns the whole file with only the flagged sentences changed. Every
// result is validated before it can touch content/: frontmatter identical
// except the faqs block, same internal links, same components, body length
// within 15 percent, no dashes. Anything else is rejected and listed.
//
// Setup, once:
//   1. Create an API key at https://console.anthropic.com/settings/keys
//   2. Put it in .env as ANTHROPIC_API_KEY=sk-ant-...   (.env is gitignored)
//   3. npm install (the SDK is already a devDependency)
//
// Run, in order:
//   node scripts/check-voice.mjs --json .voice-batch/findings.json
//   node scripts/voice-batch.mjs build            writes requests + cost estimate
//   node scripts/voice-batch.mjs submit           sends the batch, prints the id
//   node scripts/voice-batch.mjs status           poll until "ended"
//   node scripts/voice-batch.mjs collect          validates, writes .voice-batch/out/<slug>.mdx
//   node scripts/voice-batch.mjs apply            copies accepted files into content/
//   git diff                                      read it, then commit by series
//
// Options: --model claude-opus-5 (default) | claude-sonnet-5
//          --effort medium (default) | low | high
//          --limit N   only the first N articles (for a trial run)
//          --slug X    one article
import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : def; };
const MODEL = opt('--model', 'claude-opus-5');
const EFFORT = opt('--effort', 'medium');
const LIMIT = Number(opt('--limit', 0));
const ONLY_SLUG = opt('--slug', null);

const DIR = '.voice-batch';
const FINDINGS = path.join(DIR, 'findings.json');
const REQUESTS = path.join(DIR, 'requests.json');
const BATCH_ID = path.join(DIR, 'batch-id.txt');
const OUT = path.join(DIR, 'out');
const REJECTS = path.join(DIR, 'rejected.json');
fs.mkdirSync(OUT, { recursive: true });

// .env loader, so the key never has to be exported by hand.
if (fs.existsSync('.env')) {
  for (const line of fs.readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const RULES = fs.readFileSync('docs/RULES.md', 'utf8');

const SYSTEM = `You are the second-pass editor for BeastlyFacts, a pet care site written by one person, Mike. Your job is to make an article sound like a person made a call, without changing a single fact, number, source, link, or component.

The house rulebook follows. The "Writing an article" section is the part that matters here. Apply it literally.

<rulebook>
${RULES}
</rulebook>

Editing contract:
- Return the COMPLETE file, frontmatter and body, inside one \`\`\`mdx fence and nothing else.
- Change only what the findings require. Untouched sentences stay byte-identical.
- Never add, remove, or change a markdown link target, an <AffiliateLink>, a <Sources> block, or any JSX component. You may move the care-guide link sentence out of the first sentence to the end of the first section; its target stays the same.
- Frontmatter stays identical except the faqs block when a faq-copied finding is present. Do not touch dates.
- No em or en dashes. A comma is not a dash substitute: split the sentence or use a colon.
- Delete an intensifier if the sentence survives without it. If it does not, the sentence had no claim: rewrite it to make one.
- A copied FAQ answer becomes two or three sentences that answer the question the worried owner is asking. It may use a fact from the body. It may not reuse the body's sentences.
- Cadence findings ("X, not Y", "rather than", comma-as-dash): vary the shape. Period first, colon second. Do not replace every instance with the same new shape.
- Do not add warmth, jokes, or first person. Do not add a disclosure line. Do not add new claims.`;

function readFindings() {
  if (!fs.existsSync(FINDINGS)) throw new Error(`Run: node scripts/check-voice.mjs --json ${FINDINGS}`);
  let list = JSON.parse(fs.readFileSync(FINDINGS, 'utf8')).filter((r) => r.errors.length);
  if (ONLY_SLUG) list = list.filter((r) => r.slug === ONLY_SLUG);
  if (LIMIT) list = list.slice(0, LIMIT);
  return list;
}

function buildRequest(r) {
  const article = fs.readFileSync(r.file, 'utf8');
  const findings = [...r.errors.map((e) => `- ERROR ${e.rule}: ${e.detail}`), ...r.warnings.map((w) => `- warn ${w.rule}: ${w.detail}`)].join('\n');
  return {
    custom_id: r.slug.slice(0, 64),
    params: {
      model: MODEL,
      max_tokens: 16000,
      output_config: { effort: EFFORT },
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [{
        role: 'user',
        content: `Findings for ${r.file}:\n${findings}\n\nThe file:\n\`\`\`mdx\n${article}\n\`\`\``,
      }],
    },
  };
}

// ---------- validation of a returned file ----------
const fmOf = (s) => (s.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [, ''])[1];
const bodyOf = (s) => s.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
// Drop the faqs block: everything from `faqs:` to the next top-level key or
// the end of the frontmatter. (JS has no \Z, hence the end-of-input lookahead.)
const stripFaqs = (fm) => fm.replace(/^faqs:[\s\S]*?(?=\n[A-Za-z#]|(?![\s\S]))/m, '');
const linkSet = (s) => new Set([...s.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]).sort());
const componentSig = (s) => (s.match(/<[A-Z][A-Za-z]*/g) || []).sort().join(',');
const affiliateSig = (s) => (s.match(/href="[^"]+"/g) || []).sort().join(',');
const wc = (s) => (s.match(/\S+/g) || []).length;

function validate(original, candidate) {
  const problems = [];
  if (/[–—]/.test(candidate)) problems.push('contains a dash');
  if (stripFaqs(fmOf(original)).trim() !== stripFaqs(fmOf(candidate)).trim()) problems.push('frontmatter changed outside faqs');
  const lo = [...linkSet(original)].join('|'); const lc = [...linkSet(candidate)].join('|');
  if (lo !== lc) problems.push('internal links changed');
  if (componentSig(original) !== componentSig(candidate)) problems.push('components changed');
  if (affiliateSig(original) !== affiliateSig(candidate)) problems.push('affiliate links changed');
  const a = wc(bodyOf(original)); const b = wc(bodyOf(candidate));
  if (Math.abs(a - b) / a > 0.15) problems.push(`body length moved ${a} -> ${b} words`);
  const so = original.match(/<Sources>[\s\S]*?<\/Sources>/); const sc = candidate.match(/<Sources>[\s\S]*?<\/Sources>/);
  if ((so && so[0]) !== (sc && sc[0])) problems.push('Sources block changed');
  return problems;
}

function extractMdx(text) {
  const m = text.match(/```mdx\r?\n([\s\S]*?)\r?\n```\s*$/) || text.match(/```(?:mdx)?\r?\n([\s\S]*?)```/);
  return m ? m[1] : null;
}

// ---------- commands ----------
async function main() {
  const client = ['submit', 'status', 'collect'].includes(cmd) ? new Anthropic() : null;

  if (cmd === 'build') {
    const list = readFindings();
    const requests = list.map(buildRequest);
    fs.writeFileSync(REQUESTS, JSON.stringify(requests, null, 1));
    const inChars = requests.reduce((n, q) => n + q.params.messages[0].content.length, 0);
    const inTok = Math.round(inChars / 4);
    const outTok = Math.round(inTok * 0.9); // the whole file comes back
    const sysTok = Math.round(SYSTEM.length / 4);
    const price = { 'claude-opus-5': [5, 25], 'claude-sonnet-5': [2, 10], 'claude-fable-5-1': [10, 50] }[MODEL] || [5, 25];
    const cost = ((inTok + sysTok * 0.1 * requests.length) * price[0] + outTok * price[1]) / 1e6 * 0.5;
    console.log(`${requests.length} requests written to ${REQUESTS}`);
    console.log(`Rough tokens: ${inTok.toLocaleString()} in, ${outTok.toLocaleString()} out (batch price, cached system prompt)`);
    console.log(`Rough cost on ${MODEL}: about $${cost.toFixed(2)}`);
    return;
  }

  if (cmd === 'submit') {
    const requests = JSON.parse(fs.readFileSync(REQUESTS, 'utf8'));
    const batch = await client.messages.batches.create({ requests });
    fs.writeFileSync(BATCH_ID, batch.id);
    console.log(`Batch ${batch.id} submitted: ${batch.processing_status}. Poll with: node scripts/voice-batch.mjs status`);
    return;
  }

  if (cmd === 'status') {
    const id = fs.readFileSync(BATCH_ID, 'utf8').trim();
    const b = await client.messages.batches.retrieve(id);
    console.log(`${id}: ${b.processing_status}`, b.request_counts);
    return;
  }

  if (cmd === 'collect') {
    const id = fs.readFileSync(BATCH_ID, 'utf8').trim();
    const b = await client.messages.batches.retrieve(id);
    if (b.processing_status !== 'ended') { console.log(`Not finished: ${b.processing_status}`); return; }
    const findings = JSON.parse(fs.readFileSync(FINDINGS, 'utf8'));
    const bySlug = Object.fromEntries(findings.map((r) => [r.slug.slice(0, 64), r]));
    const rejected = [];
    let accepted = 0;
    for await (const result of await client.messages.batches.results(id)) {
      const r = bySlug[result.custom_id];
      if (!r) continue;
      if (result.result.type !== 'succeeded') { rejected.push({ slug: r.slug, why: result.result.type }); continue; }
      const text = result.result.message.content.filter((c) => c.type === 'text').map((c) => c.text).join('');
      const candidate = extractMdx(text);
      if (!candidate) { rejected.push({ slug: r.slug, why: 'no mdx fence in reply' }); continue; }
      const original = fs.readFileSync(r.file, 'utf8');
      const problems = validate(original, candidate);
      if (problems.length) { rejected.push({ slug: r.slug, why: problems.join('; ') }); continue; }
      fs.writeFileSync(path.join(OUT, `${r.slug}.mdx`), candidate.endsWith('\n') ? candidate : `${candidate}\n`);
      accepted += 1;
    }
    fs.writeFileSync(REJECTS, JSON.stringify(rejected, null, 2));
    console.log(`Accepted ${accepted}, rejected ${rejected.length} (see ${REJECTS}). Accepted files are in ${OUT}/, nothing in content/ has changed yet.`);
    return;
  }

  if (cmd === 'apply') {
    const findings = JSON.parse(fs.readFileSync(FINDINGS, 'utf8'));
    let n = 0;
    for (const r of findings) {
      const src = path.join(OUT, `${r.slug}.mdx`);
      if (!fs.existsSync(src)) continue;
      fs.copyFileSync(src, r.file);
      n += 1;
    }
    console.log(`Applied ${n} files into content/. Now: node scripts/check-voice.mjs, then git diff, then commit by series.`);
    return;
  }

  console.log('Commands: build | submit | status | collect | apply');
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
