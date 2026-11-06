// Builds the search index behind Ask Beastly (docs/ASK_BEASTLY.md).
//
// Splits every published piece of content into chunks small enough that the
// /api/ask route can send the best 4 to Haiku as its only sources:
//
//   guide       content/guides/*.mdx and content/blog/*.mdx, split at each ##
//   faq         the frontmatter FAQs of those articles, one chunk per article
//   fun-facts   content/fun-facts/*.mdx, split at each ##
//   fact        one per fact in src/lib/data/facts.js, with its FACT_SOURCES entry
//   beastfile   one per published Beastlypedia entry (/beastlypedia/<id>/)
//   encyclopedia one per encyclopedia animal (/encyclopedia/animal/<id>/)
//   glossary    one per glossary term (/glossary/#<slugify(term)>)
//   hub         each care guide hub (/guides/<id>/): router hubs give their
//               first-week numbers, emergency card and FAQs; dog and cat hubs
//               their written sections, cost table and FAQs
//
// Legal guides are kept with type "legal" so the worker can refuse to send
// them to Haiku. Skipped: Chronicles (content/short-story), content/_scheduled-*,
// the care package sources, noIndex: true, anything not status "published",
// and every Sources / Further Reading section.
//
// Anchors follow TableOfContents.jsx: slugify(heading text), counted across
// h2 and h3 in page order, with -2, -3 suffixes on repeats.
//
// Writes .ask-index/chunks.json. Prints chunk counts by type and the 5
// largest chunks. Run: node scripts/build-ask-index.mjs

import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

import { slugify } from '../src/lib/utils/slugify.js';
import { resolveCostTokens, costTableText } from '../src/lib/costs.js';
import { facts } from '../src/lib/data/facts.js';
import { FACT_SOURCES } from '../src/lib/data/factSources.js';
import { CATEGORIES as GLOSSARY } from '../src/lib/data/glossaryTerms.js';
import { SEARCH_ALIASES } from '../src/lib/data/searchAliases.js';
import { RELATED_ARTICLES } from '../src/lib/data/relatedArticles.js';
import { mammalBeastfiles } from '../src/lib/data/beastlypedia/mammals.js';
import { reptileBeastfiles } from '../src/lib/data/beastlypedia/reptiles.js';
import { amphibianBeastfiles } from '../src/lib/data/beastlypedia/amphibians.js';
import { birdBeastfiles } from '../src/lib/data/beastlypedia/birds.js';
import { marineBeastfiles } from '../src/lib/data/beastlypedia/marine.js';
import { amphibianEncyclopedia } from '../src/lib/data/encyclopedia/amphibians.js';
import { birdEncyclopedia } from '../src/lib/data/encyclopedia/birds.js';
import { catEncyclopedia } from '../src/lib/data/encyclopedia/cats.js';
import { dogEncyclopedia } from '../src/lib/data/encyclopedia/dogs.js';
import { fishEncyclopedia } from '../src/lib/data/encyclopedia/fish.js';
import { geckoEncyclopedia } from '../src/lib/data/encyclopedia/geckos.js';
import { invertebrateEncyclopedia } from '../src/lib/data/encyclopedia/invertebrates.js';
import { lizardEncyclopedia } from '../src/lib/data/encyclopedia/lizards.js';
import { smallMammalEncyclopedia } from '../src/lib/data/encyclopedia/smallMammals.js';
import { snakeEncyclopedia } from '../src/lib/data/encyclopedia/snakes.js';
import { turtleEncyclopedia } from '../src/lib/data/encyclopedia/turtles.js';
import { amphibianGuides } from '../src/lib/data/guides/amphibians.js';
import { birdGuides } from '../src/lib/data/guides/birds.js';
import { catGuides } from '../src/lib/data/guides/cats.js';
import { dogGuides } from '../src/lib/data/guides/dogs.js';
import { fishGuides } from '../src/lib/data/guides/fish.js';
import { geckoGuides } from '../src/lib/data/guides/geckos.js';
import { invertebrateGuides } from '../src/lib/data/guides/invertebrates.js';
import { lizardGuides } from '../src/lib/data/guides/lizards.js';
import { smallMammalGuides } from '../src/lib/data/guides/smallMammals.js';
import { snakeGuides } from '../src/lib/data/guides/snakes.js';
import { turtleGuides } from '../src/lib/data/guides/turtles.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, '.ask-index');
const OUT_FILE = path.join(OUT_DIR, 'chunks.json');

// A section longer than this is split at paragraph breaks into parts that
// share its heading and anchor, so one chunk never eats the whole 3,000 token
// budget the worker sends. Words, not tokens: about 1.3 tokens per word.
const MAX_WORDS = 450;

const SKIP_HEADING = /^(sources|references|further reading|sources (and|&) further reading)\b/i;

// ---------------------------------------------------------------- species

const guidesIndex = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'src/lib/generated/guides-index.json'), 'utf8'),
).guides;
// Longest id first, so "leopard-gecko" never claims a "leopard-gecko-morph" slug
// that belongs to a longer id.
const guidesById = [...guidesIndex].sort((a, b) => b.id.length - a.id.length);
const guideNames = new Map(guidesIndex.map((g) => [g.name.toLowerCase(), g.name]));

const guideNameById = new Map(guidesIndex.map((g) => [g.id, g.name]));

// The species an article is about: a care guide id at the front of its slug,
// then a tag that is a care guide name, then its `animal` field (mapped to the
// guide name when it is written as a guide id). Topic tags ("Legal", "UVB",
// "Christmas") never count, so an article with none of these has no species.
// Guide files whose names start with a longer form of the guide id (owner,
// 2026-11-06: every tegu and millipede guide, and the cockroach enrichment
// guide, went into the index with no species, so a species search missed
// them and "what do tegus eat" answered from the hub alone).
const SLUG_PREFIX_ALIASES = {
  'argentine-tegu': 'tegu',
  'giant-millipede': 'millipede',
  'madagascar-hissing-cockroach': 'hissing-cockroach',
};
function speciesFor(fm) {
  const slug = fm.slug || '';
  for (const g of guidesById) {
    if (slug === g.id || slug.startsWith(`${g.id}-`)) return g.name;
  }
  for (const [prefix, id] of Object.entries(SLUG_PREFIX_ALIASES)) {
    if (slug.startsWith(`${prefix}-`) && guideNameById.has(id)) return guideNameById.get(id);
  }
  for (const tag of fm.tags || []) {
    const hit = guideNames.get(String(tag).toLowerCase());
    if (hit) return hit;
  }
  if (fm.animal) return guideNameById.get(String(fm.animal)) || String(fm.animal);
  return null;
}

// ---------------------------------------------------------------- MDX to text

// Turns <ComparisonTable headers={[...]} rows={[...]} /> into one line per row,
// "Header: cell. Header: cell." The literals are our own content files.
function comparisonTableToText(tag) {
  const grab = (name) => {
    const m = tag.match(new RegExp(`${name}=\\{(\\[[\\s\\S]*?\\])\\}\\s*(?:\\w+=|/>)`));
    if (!m) return null;
    try {
      return new Function(`return ${m[1]};`)();
    } catch {
      return null;
    }
  };
  const headers = grab('headers') || [];
  const rows = grab('rows') || [];
  return rows
    .map((row) => row.map((cell, i) => (headers[i] ? `${headers[i]}: ${cell}` : cell)).join('. '))
    .join('\n');
}

function mdxToText(src) {
  let s = resolveCostTokens(src);
  // Cost tables draw their rows from costSheets.js at render time.
  s = s.replace(/<CostTable\s[^>]*\/>/g, (tag) => `\n${costTableText(tag)}\n`);
  // Fragments inside table cells (<>a <AffiliateLink>b</AffiliateLink></>)
  // become plain strings so the table literal can be read.
  s = s.replace(/<>([\s\S]*?)<\/>/g, (_, inner) => JSON.stringify(inner.replace(/<[^>]+>/g, '')));
  s = s.replace(/<Sources>[\s\S]*?<\/Sources>/g, '');
  s = s.replace(/<AlsoConsulted>[\s\S]*?<\/AlsoConsulted>/g, '');
  s = s.replace(/<ComparisonTable\b[\s\S]*?\/>/g, (tag) => `\n${comparisonTableToText(tag)}\n`);
  s = s.replace(/^\s*(import|export)\s.*$/gm, '');
  s = s.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  // Self-closing components carry no prose (CostTable, Figure, CarePackageBlock).
  s = s.replace(/<[A-Z][\w.]*\b(?:[^>]|=>)*?\/>/gs, '');
  // Paired tags keep their inner text (AffiliateLink, FunFact, KeyTakeaway).
  s = s.replace(/<\/?[A-Za-z][\w.]*\b[^>]*>/g, '');
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  s = s.replace(/(\*\*|__)(.+?)\1/g, '$2');
  s = s.replace(/(^|[^*\w])[*_]([^*_\n]+)[*_](?=[^*\w]|$)/g, '$1$2');
  s = s.replace(/`([^`]+)`/g, '$1');
  s = s.replace(/^\s*\|?\s*:?-{3,}.*$/gm, '');
  s = s.replace(/^\s*\|(.*)\|\s*$/gm, (_, row) => row.split('|').map((c) => c.trim()).join('. '));
  s = s.replace(/^\s*---+\s*$/gm, '');
  s = s.replace(/^\s*>\s?/gm, '');
  s = s.replace(/^#\s.*$/gm, '');
  s = s.replace(/[ \t]+/g, ' ');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

function headingText(raw) {
  return mdxToText(raw).replace(/^#+\s*/, '').trim();
}

const wordCount = (t) => (t.match(/\S+/g) || []).length;

// Splits text over MAX_WORDS into parts at paragraph breaks.
function splitLong(text) {
  if (wordCount(text) <= MAX_WORDS) return [text];
  const parts = [];
  let cur = [];
  let n = 0;
  // A single paragraph over the limit (a long list or table) breaks at lines,
  // then a single long line breaks at sentences.
  const pieces = text.split(/\n\s*\n/).flatMap((para) => {
    if (wordCount(para) <= MAX_WORDS) return [para];
    return para.split('\n').flatMap((line) =>
      wordCount(line) <= MAX_WORDS ? [line] : line.split(/(?<=[.!?])\s+/),
    );
  });
  for (const para of pieces) {
    const w = wordCount(para);
    if (n + w > MAX_WORDS && cur.length) {
      parts.push(cur.join('\n\n'));
      cur = [];
      n = 0;
    }
    cur.push(para);
    n += w;
  }
  if (cur.length) parts.push(cur.join('\n\n'));
  return parts;
}

// ---------------------------------------------------------------- articles

function readArticle(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  return { fm: parseYaml(m[1]) || {}, body: m[2] };
}

const isLegal = (fm) => (fm.tags || []).some((t) => /^legal$/i.test(String(t)));

function articleChunks(file, baseType) {
  const art = readArticle(file);
  if (!art) return [];
  const { fm, body } = art;
  if (fm.noIndex === true || fm.status !== 'published') return [];
  const slug = fm.slug || path.basename(file, '.mdx');
  const type = baseType === 'guide' && isLegal(fm) ? 'legal' : baseType;
  const species = speciesFor({ ...fm, slug });
  const url = `/blog/${slug}/`;
  const title = fm.title || slug;

  // Walk the body line by line. h2 starts a section; h2 and h3 both count
  // toward anchor numbering, matching TableOfContents.jsx.
  const seen = new Set();
  const anchorFor = (text) => {
    const id = slugify(text) || 'section';
    let unique = id;
    let i = 2;
    while (seen.has(unique)) unique = `${id}-${i++}`;
    seen.add(unique);
    return unique;
  };

  const sections = [{ heading: '', anchor: '', lines: [] }];
  let inFence = false;
  for (const line of body.split('\n')) {
    if (/^```/.test(line)) inFence = !inFence;
    const h = !inFence && line.match(/^(#{2,3})\s+(.+)$/);
    if (h) {
      const text = headingText(h[2]);
      const anchor = anchorFor(text);
      if (h[1] === '##') {
        sections.push({ heading: text, anchor, lines: [] });
        continue;
      }
    }
    sections[sections.length - 1].lines.push(line);
  }

  const out = [];
  for (const sec of sections) {
    if (sec.heading && SKIP_HEADING.test(sec.heading)) continue;
    const text = mdxToText(sec.lines.join('\n'));
    if (wordCount(text) < 8) continue;
    const parts = splitLong(text);
    parts.forEach((part, i) => {
      out.push({
        slug,
        title,
        heading: sec.heading + (parts.length > 1 ? ` (part ${i + 1})` : ''),
        anchor: sec.anchor,
        url: sec.anchor ? `${url}#${sec.anchor}` : url,
        species,
        type,
        text: part,
      });
    });
  }

  if (Array.isArray(fm.faqs) && fm.faqs.length && type !== 'legal') {
    const text = fm.faqs
      .filter((f) => f && f.q && f.a)
      .map((f) => `Q: ${f.q}\nA: ${mdxToText(String(f.a))}`)
      .join('\n\n');
    splitLong(text).forEach((part, i, all) => {
      out.push({
        slug,
        title,
        heading: `Frequently asked questions${all.length > 1 ? ` (part ${i + 1})` : ''}`,
        anchor: '',
        url,
        species,
        type: 'faq',
        text: part,
      });
    });
  }
  return out;
}

function mdxFiles(dir) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.mdx'))
    .sort()
    .map((f) => path.join(full, f));
}

// ---------------------------------------------------------------- build

const chunks = [];

for (const f of [...mdxFiles('content/guides'), ...mdxFiles('content/blog')]) {
  chunks.push(...articleChunks(f, 'guide'));
}
for (const f of mdxFiles('content/fun-facts')) {
  chunks.push(...articleChunks(f, 'fun-facts'));
}

for (const fact of facts) {
  const slug = slugify(fact.title);
  const source = FACT_SOURCES[fact.id] || null;
  chunks.push({
    slug,
    title: fact.title,
    heading: '',
    anchor: '',
    url: `/facts/${slug}/`,
    species: fact.animal || null,
    type: 'fact',
    text: fact.fact + (source ? `\nSource: ${source}` : ''),
    factId: fact.id,
    source,
  });
}

const beastfiles = [
  ...mammalBeastfiles,
  ...reptileBeastfiles,
  ...amphibianBeastfiles,
  ...birdBeastfiles,
  ...marineBeastfiles,
].filter((b) => !b.draft);

for (const b of beastfiles) {
  const lines = [
    b.tagline,
    b.alsoKnownAs?.length ? `Also known as: ${b.alsoKnownAs.join(', ')}.` : '',
    b.scientific ? `Scientific name: ${b.scientific}.` : '',
    b.overview,
    b.origin ? `Where it lives: ${b.origin}` : '',
    b.notableTraits?.length ? `Notable traits: ${b.notableTraits.join('. ')}.` : '',
    b.conservation ? `Conservation: ${b.conservation}` : '',
    ...(b.funFacts || []),
  ].filter(Boolean);
  splitLong(lines.join('\n\n')).forEach((part, i, all) => {
    chunks.push({
      slug: b.id,
      title: `${b.name} Beastfile`,
      heading: all.length > 1 ? `Part ${i + 1}` : '',
      anchor: '',
      url: `/beastlypedia/${b.id}/`,
      species: b.name,
      type: 'beastfile',
      text: part,
    });
  });
}

const encyclopedia = [
  ...amphibianEncyclopedia,
  ...birdEncyclopedia,
  ...catEncyclopedia,
  ...dogEncyclopedia,
  ...fishEncyclopedia,
  ...geckoEncyclopedia,
  ...invertebrateEncyclopedia,
  ...lizardEncyclopedia,
  ...smallMammalEncyclopedia,
  ...snakeEncyclopedia,
  ...turtleEncyclopedia,
];

const ENC_LABELS = {
  overview: '',
  origin: 'Origin',
  habitat: 'Wild habitat',
  adultSize: 'Adult size',
  wildDiet: 'Wild diet',
  wildLifespan: 'Wild lifespan',
  conservation: 'Conservation',
  history: 'History',
};

for (const a of encyclopedia) {
  if (a.available === false) continue;
  const bio = a.bio || {};
  const lines = [a.scientific ? `Scientific name: ${a.scientific}.` : ''];
  for (const [key, label] of Object.entries(ENC_LABELS)) {
    if (bio[key]) lines.push(label ? `${label}: ${bio[key]}` : bio[key]);
  }
  for (const [key, val] of Object.entries(bio)) {
    if (!(key in ENC_LABELS) && typeof val === 'string') lines.push(val);
  }
  splitLong(lines.filter(Boolean).join('\n\n')).forEach((part, i, all) => {
    chunks.push({
      slug: a.id,
      title: `${a.name} Encyclopedia Profile`,
      heading: all.length > 1 ? `Part ${i + 1}` : '',
      anchor: '',
      url: `/encyclopedia/animal/${a.id}/`,
      species: a.name,
      type: 'encyclopedia',
      text: part,
    });
  });
}

const hubs = [
  ...amphibianGuides, ...birdGuides, ...catGuides, ...dogGuides, ...fishGuides, ...geckoGuides,
  ...invertebrateGuides, ...lizardGuides, ...smallMammalGuides, ...snakeGuides, ...turtleGuides,
];
const humanize = (key) => key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (c) => c.toUpperCase());
const money = (n) => `$${Number(n).toLocaleString('en-US')}`;

// Dog and cat hubs are named like page titles ("Maine Coon: Breed Quirks",
// "Cat Care: The Essentials", "Small Breed Dogs"); their chunks carry the
// plain animal so a species search finds them.
const hubSpecies = (g) => {
  if (/:\s*Breed Quirks$/.test(g.name)) return g.name.replace(/:\s*Breed Quirks$/, '');
  if (/^cat-/.test(g.id)) return 'Cat';
  if (/^dog-/.test(g.id)) return 'Dog';
  return g.name;
};
const hubTitle = (g) => (/:|Dogs$/.test(g.name) ? g.name : `${g.name} Care Guide`);

for (const g of hubs) {
  const add = (heading, text) => {
    const clean = mdxToText(String(text || ''));
    if (wordCount(clean) < 8) return;
    splitLong(clean).forEach((part, i, all) => {
      chunks.push({
        slug: g.id,
        title: hubTitle(g),
        heading: heading + (all.length > 1 ? ` (part ${i + 1})` : ''),
        anchor: '',
        url: `/guides/${g.id}/`,
        species: hubSpecies(g),
        type: 'hub',
        text: part,
      });
    });
  };
  if (g.firstWeek?.rows?.length) {
    add('The first week', g.firstWeek.rows.map((r) => `${r.label}: ${r.value}`).join('\n'));
  }
  const card = g.emergencyCard;
  if (card?.callNow?.length) {
    add('Emergency card', [
      card.heading || 'Call the vet now if you see any of these.',
      ...card.callNow,
      ...(card.soon?.length ? [card.soonHeading || 'Book a vet visit promptly for these.', ...card.soon] : []),
      card.vetLine || '',
    ].join('\n'));
  }
  for (const [key, text] of Object.entries(g.sections || {})) {
    if (typeof text === 'string') add(humanize(key), text);
  }
  if (g.costs && typeof g.costs === 'object') {
    const lines = [];
    for (const [group, items] of Object.entries(g.costs)) {
      if (!Array.isArray(items)) continue;
      for (const it of items) {
        if (it?.item && it.low != null) lines.push(`${humanize(group)}: ${it.item}: ${it.low === it.high ? `about ${money(it.low)}` : `${money(it.low)} to ${money(it.high)}`}`);
      }
    }
    if (lines.length) add('Costs', lines.join('\n'));
  }
  if (Array.isArray(g.faqs) && g.faqs.length) {
    add('Frequently asked questions', g.faqs.filter((f) => f?.q && f?.a).map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'));
  }
}

for (const cat of GLOSSARY) {
  for (const t of cat.terms) {
    const anchor = slugify(t.term);
    chunks.push({
      slug: anchor,
      title: t.term,
      heading: cat.label,
      anchor,
      url: `/glossary/#${anchor}`,
      species: null,
      type: 'glossary',
      text:
        `${t.term}: ${t.definition}` +
        (t.aliases?.length ? `\nAlso called: ${t.aliases.join(', ')}.` : ''),
    });
  }
}

chunks.forEach((c, i) => {
  c.id = i + 1;
  c.words = wordCount(c.text);
});

// Lookup data the worker reads from ask_meta, since it cannot import modules:
//   aliases   SEARCH_ALIASES, nickname -> canonical name
//   species   every species a chunk carries, with its care guide id when it has
//             one (the UI pulls that hub's emergency card)
//   states    the legal matrix jurisdictions, name -> /exotic-pet-laws/state/<slug>/
//   legal     the legal matrix animals, for /exotic-pet-laws/<id>/
//   facts     every fact page's url, species and title, for "show me a fun
//             fact" and "chicken facts" (the worker picks one here and reads
//             that one row by its key)
//   common    words in more than 5% of the searchable chunks, with how many
//             chunks hold them. The worker leaves them out of its any-word
//             search, where "eat" or "tank" made the index score thousands
//             of rows (about 3,200 rows read per search on a test night).
//   catalog   what the care guides cover, for "what animals do you have":
//             the eleven category pages in the order the guides page shows
//             them, each with its /guides/category/<slug>/ and the names of
//             the animals and breeds in it, plus the total. Counted here,
//             never typed into the worker, so a new guide changes the reply
//             on the next build. Group hubs (the tetra and livebearer pages,
//             the dog and cat essentials and the dog size pages) are not
//             animals and are left out.
//   gift      per species (keyed the way its chunks name it: "Cat", "Dog",
//             "Bearded Dragon"), the pages a gift question links: its
//             enrichment guide (e), its gear page (g, only for animals in
//             gear-by-animal.json) and its hub (hub), for "what is a good
//             gift for my hamster" (owner, 2026-11-03). Only keys that
//             exist are written. The enrichment article is
//             <guideId>-enrichment-guide when that is published, else the
//             enrichment article RELATED_ARTICLES lists for the hub that
//             starts with the animal's first name word (bengal-cat-, not
//             cat-, for the Bengal), else the first one listed.
const LEGAL =JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/data/legalStatus.json'), 'utf8'));
const stateSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const guideIdByName = new Map(guidesIndex.map((g) => [g.name.toLowerCase(), g.id]));
const speciesNames = [...new Set(chunks.map((c) => c.species).filter(Boolean))];
function commonWords(list, share) {
  const df = new Map();
  for (const c of list) {
    const words = new Set(`${c.title} ${c.heading} ${c.text}`.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 1));
    for (const w of words) df.set(w, (df.get(w) || 0) + 1);
  }
  const min = Math.ceil(list.length * share);
  return Object.fromEntries([...df].filter(([, n]) => n > min).sort((a, b) => b[1] - a[1]));
}

// The category labels and slugs as src/pages/Guides.jsx has them; petType is
// singular for dogs and cats ("Dog", "Cat") and plural everywhere else.
const CATALOG_GROUPS = [
  ['Amphibians'], ['Birds'], ['Cats', 'Cat'], ['Dogs', 'Dog'], ['Fish'], ['Geckos'], ['Invertebrates'],
  ['Lizards'], ['Small Mammals'], ['Snakes'], ['Turtles & Tortoises'],
];
const isGroupHub = (g) => g.layout === 'group' || /: The Essentials$|\bBreed Dogs$/.test(g.name);
const catalogGroups = CATALOG_GROUPS.map(([label, petType = label]) => ({
  label,
  slug: label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
  names: hubs
    .filter((g) => g.petType === petType && !isGroupHub(g))
    .map((g) => g.name.replace(/:\s*Breed Quirks$/, ''))
    .sort((a, b) => a.localeCompare(b)),
})).filter((g) => g.names.length);
const catalog = {
  total: catalogGroups.reduce((n, g) => n + g.names.length, 0),
  groups: catalogGroups,
};

const GEAR_IDS = new Set(
  JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/generated/gear-by-animal.json'), 'utf8')).animals.map((a) => a.id),
);
const guideTitleBySlug = new Map(chunks.filter((c) => c.type === 'guide').map((c) => [c.slug, c.title]));
function enrichmentSlug(g) {
  const own = `${g.id}-enrichment-guide`;
  if (guideTitleBySlug.has(own)) return own;
  const listed = (RELATED_ARTICLES[g.id] || []).filter((s) => s.endsWith('-enrichment-guide') && guideTitleBySlug.has(s));
  const first = hubSpecies(g).toLowerCase().split(/[\s-]+/)[0];
  return listed.find((s) => s.startsWith(`${first}-`)) || listed[0] || null;
}
const gift = {};
for (const g of hubs) {
  const name = hubSpecies(g);
  if (gift[name]) continue;
  const e = enrichmentSlug(g);
  gift[name] = {
    // The animal the article names ("Dog" from "Dog Enrichment: ..."), so a
    // breed that borrows the dog or cat guide links it under that name.
    ...(e && { e: `/blog/${e}/`, t: guideTitleBySlug.get(e).split(':')[0].replace(/\s*enrichment.*$/i, '').trim() }),
    ...(GEAR_IDS.has(g.id) && { g: `/gear/animal/${g.id}/` }),
    hub: g.id,
  };
}

const meta = {
  aliases: SEARCH_ALIASES,
  species: speciesNames
    .map((name) => ({ name, guideId: guideIdByName.get(name.toLowerCase()) || null }))
    .sort((a, b) => b.name.length - a.name.length),
  states: Object.entries(LEGAL.jurisdictions)
    .map(([code, j]) => ({ name: j.name, slug: stateSlug(j.name), code: code.toLowerCase() }))
    .sort((a, b) => b.name.length - a.name.length),
  legal: Object.entries(LEGAL.animals)
    .map(([id, a]) => ({ id, name: a.name, article: a.article || null }))
    .sort((a, b) => b.name.length - a.name.length),
  facts: chunks.filter((c) => c.type === 'fact').map((c) => ({ url: c.url, species: c.species, title: c.title })),
  common: commonWords(chunks.filter((c) => c.type !== 'legal'), 0.05),
  catalog,
  gift,
};

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(chunks));
fs.writeFileSync(path.join(OUT_DIR, 'meta.json'), JSON.stringify(meta));

// Every legal matrix cell, so a legal question naming an animal and a state
// is answered with the matrix's own words (status, cite, quote, note, existing
// owners, local ordinances, date checked) and never by the model.
const legalCells = [];
for (const [animalId, a] of Object.entries(LEGAL.animals)) {
  for (const [code, c] of Object.entries(a.jurisdictions || {})) {
    legalCells.push({
      animal: animalId,
      code: code.toLowerCase(),
      status: c.status,
      cite: c.cite || '',
      quote: c.quote || '',
      note: c.note || '',
      grandfathered: c.grandfathered?.detail || '',
      localOverride: c.localOverride ? 1 : 0,
      verifiedOn: c.verifiedOn || '',
    });
  }
}
fs.writeFileSync(path.join(OUT_DIR, 'legal.json'), JSON.stringify(legalCells));

// ---------------------------------------------------------------- report

const byType = {};
for (const c of chunks) byType[c.type] = (byType[c.type] || 0) + 1;
console.log(`Ask index: ${chunks.length} chunks -> ${path.relative(ROOT, OUT_FILE)}`);
for (const [type, n] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${type.padEnd(13)} ${n}`);
}
const totalWords = chunks.reduce((s, c) => s + c.words, 0);
console.log(`  total words   ${totalWords}`);
console.log(`  legal cells   ${legalCells.length}`);
console.log(`  meta          ${Object.keys(meta.aliases).length} aliases, ${meta.species.length} species, ${meta.states.length} jurisdictions, ${meta.legal.length} legal animals`);
console.log(`  catalog       ${catalog.total} animals in ${catalog.groups.length} groups: ${catalog.groups.map((g) => `${g.label} ${g.names.length}`).join(', ')}`);
console.log(`  gift          ${Object.keys(gift).length} species, ${Object.values(gift).filter((x) => x.e).length} with an enrichment guide, ${Object.values(gift).filter((x) => x.g).length} with a gear page`);
console.log('5 largest chunks:');
for (const c of [...chunks].sort((a, b) => b.words - a.words).slice(0, 5)) {
  console.log(`  ${String(c.words).padStart(5)} words  ${c.type}  ${c.url}  ${c.heading}`);
}
