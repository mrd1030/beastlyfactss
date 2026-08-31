// Client-side search over the site's non-article static data (care guides,
// encyclopedia entries, glossary terms, Beastlypedia entries). Blog/guide
// articles are searched separately in Search.jsx straight from mdxPosts, so
// they are deliberately not duplicated here.
//
// Matching stays plain lowercase includes(), but the query goes through
// normalizeQuery() first: a site-specific alias map (searchAliases.js) expands
// hobby nicknames and known misspellings ("beardie", "bp", "axelotl") into the
// canonical name, and both the canonical and the raw string are matched so
// alias expansion can only add results, never hide them. correctQuery() is the
// separate last-resort typo pass (1-2 letter edits against species vocabulary)
// that callers run only after a search comes back empty - it is never applied
// here, so the navbar dropdown stays alias-only with no mid-typing rewrites.
import { allGuides } from '@/lib/data/guides';
import { encyclopediaAnimals } from '@/lib/data/encyclopedia';
import { CATEGORIES as GLOSSARY_CATEGORIES } from '@/lib/data/glossaryTerms';
import { beastfiles } from '@/lib/data/beastlypedia';
import { mdxPosts } from '@/lib/mdxPosts';
import { isChroniclesPost } from '@/lib/chronicles';
import { slugify } from '@/lib/utils/slugify';
import { SEARCH_ALIASES } from '@/lib/data/searchAliases';

const MAX_PER_TYPE = 6;

function matches(text, variants) {
  if (typeof text !== 'string') return false;
  const lower = text.toLowerCase();
  return variants.some(v => lower.includes(v));
}

// Longest aliases first so "leo gecko" wins before "leo" gets a chance to
// rewrite part of it. Word-boundary regexes so "leo" never fires inside
// "leopard" and "bp" never fires inside a longer word.
const ALIAS_MATCHERS = Object.entries(SEARCH_ALIASES)
  .sort((a, b) => b[0].length - a[0].length)
  .map(([alias, canonical]) => ({
    re: new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'),
    canonical,
  }));

// Expands aliases in a query. Returns:
//   raw        the trimmed, lowercased input
//   canonical  the query with aliases replaced (=== raw when nothing matched)
//   variants   deduped [canonical, raw] - matchers check all of them
//   didYouMean canonical when it differs from raw, else null
export function normalizeQuery(query) {
  const raw = query.trim().toLowerCase();
  if (!raw) return { raw, canonical: raw, variants: [], didYouMean: null };

  // Whole-query lookup is the common case (someone types just "beardie");
  // the regex pass handles aliases embedded in longer queries. hasOwn so a
  // query like "constructor" can't pull an inherited Object property.
  let canonical = Object.hasOwn(SEARCH_ALIASES, raw) ? SEARCH_ALIASES[raw] : undefined;
  if (!canonical) {
    canonical = raw;
    for (const { re, canonical: replacement } of ALIAS_MATCHERS) {
      canonical = canonical.replace(re, replacement);
    }
  }

  const changed = canonical !== raw;
  return {
    raw,
    canonical,
    variants: changed ? [canonical, raw] : [raw],
    didYouMean: changed ? canonical : null,
  };
}

// Bounded Levenshtein: bails with max + 1 as soon as the distance can no
// longer come in under max, so scanning the whole vocabulary stays cheap.
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      curr[j] = Math.min(
        prev[j] + 1,
        curr[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      if (curr[j] < rowMin) rowMin = curr[j];
    }
    if (rowMin > max) return max + 1;
    prev = curr;
  }
  return prev[b.length];
}

// Species vocabulary for the typo pass, built lazily - only a zero-hit
// search ever needs it. knownWords (every word of 4+ letters from guide,
// encyclopedia and Beastfile names) are treated as already correct and never
// rewritten. Correction targets are those same words plus single-word alias
// keys, so a near-miss like "beardi" corrects to "beardie" and normalizeQuery
// then carries it to "bearded dragon". Fragments of multi-word alias keys are
// deliberately neither: correcting "gecco" to "geco" (a piece of the
// "leopard geco" alias) would strand the query on a misspelling that matches
// nothing on its own - and treating "geco" as known would block its own
// correction to "gecko".
let vocab = null;
let knownWords = null;
function buildVocab() {
  const real = new Set();
  const addWords = (s) => {
    if (typeof s !== 'string') return;
    s.toLowerCase().split(/[^a-z']+/).forEach(w => {
      const word = w.replace(/^'+|'+$/g, '');
      if (word.length >= 4) real.add(word);
    });
  };
  allGuides.forEach(g => addWords(g.name));
  encyclopediaAnimals.forEach(a => addWords(a.name));
  beastfiles.forEach(b => {
    addWords(b.name);
    (b.alsoKnownAs || []).forEach(addWords);
  });
  knownWords = real;
  const targets = new Set(real);
  Object.keys(SEARCH_ALIASES).forEach(k => {
    if (k.length >= 4 && !k.includes(' ')) targets.add(k);
  });
  vocab = [...targets];
}

// Last-resort typo rescue, run by callers only when a search returned nothing.
// Corrects each word toward the species vocabulary within 1-2 letter edits,
// gated by word length so short words never get swapped for each other
// ("cats" must not become "rats" on a site whose vocabulary has both):
//   under 4 letters          never corrected
//   4-7 letters              1 edit max, and only toward a word of 5+ letters
//   8+ letters               2 edits max
// Returns the corrected query, or null when nothing qualified.
export function correctQuery(query) {
  const raw = query.trim().toLowerCase();
  if (!raw) return null;
  if (!vocab) buildVocab();

  let changed = false;
  const corrected = raw.split(/\s+/).map(token => {
    if (token.length < 4 || !/^[a-z']+$/.test(token) || knownWords.has(token)) return token;
    const maxDist = token.length >= 8 ? 2 : 1;
    let best = null;
    let bestDist = maxDist + 1;
    for (const word of vocab) {
      if (token.length < 8 && word.length < 5) continue;
      const d = editDistance(token, word, maxDist);
      if (d < bestDist) {
        bestDist = d;
        best = word;
        if (d === 1) break;
      }
    }
    if (best) {
      changed = true;
      return best;
    }
    return token;
  }).join(' ');

  return changed ? corrected : null;
}

export function searchLocalContent(query) {
  const { variants } = normalizeQuery(query);
  if (!variants.length) return { guides: [], encyclopedia: [], glossary: [], beastlypedia: [], articles: [] };

  const guides = allGuides
    .filter(g => matches(g.name, variants) || matches(g.tagline, variants) || matches(g.petType, variants))
    .slice(0, MAX_PER_TYPE)
    .map(g => ({
      key: `guide-${g.id}`,
      type: 'Care Guide',
      emoji: g.emoji || '📖',
      title: g.name,
      subtitle: g.tagline,
      to: `/guides/${g.id}/`,
    }));

  const encyclopedia = encyclopediaAnimals
    .filter(a => matches(a.name, variants) || matches(a.scientific, variants) || matches(a.category, variants))
    .slice(0, MAX_PER_TYPE)
    .map(a => ({
      key: `enc-${a.id}`,
      type: 'Encyclopedia',
      emoji: a.emoji || '📚',
      title: a.name,
      subtitle: a.scientific,
      to: `/encyclopedia/animal/${a.id}/`,
    }));

  const beastlypedia = beastfiles
    .filter(b => matches(b.name, variants) || matches(b.scientific, variants) || matches(b.tagline, variants) || matches(b.group, variants) || (b.alsoKnownAs || []).some(a => matches(a, variants)))
    .slice(0, MAX_PER_TYPE)
    .map(b => ({
      key: `beastfile-${b.id}`,
      type: 'Beastlypedia',
      emoji: '🐾',
      title: b.name,
      subtitle: b.tagline || b.scientific,
      to: `/beastlypedia/${b.id}/`,
    }));

  const glossary = [];
  GLOSSARY_CATEGORIES.forEach(cat => {
    cat.terms.forEach(t => {
      if (glossary.length >= MAX_PER_TYPE) return;
      if (matches(t.term, variants) || matches(t.definition, variants)) {
        glossary.push({
          key: `gloss-${slugify(t.term)}`,
          type: 'Glossary',
          emoji: cat.emoji || '📘',
          title: t.term,
          subtitle: t.definition,
          to: `/glossary#${slugify(t.term)}`,
        });
      }
    });
  });

  const articles = mdxPosts
    .filter(p => !isChroniclesPost(p))
    .filter(p => matches(p.title, variants) || matches(p.excerpt, variants) || (p.tags || []).some(t => matches(t, variants)))
    .slice(0, MAX_PER_TYPE)
    .map(p => ({
      key: `article-${p._id}`,
      type: 'Article',
      emoji: p.emoji || '📰',
      title: p.title,
      subtitle: p.excerpt,
      to: `/blog/${p.slug.current}/`,
    }));

  return { guides, encyclopedia, glossary, beastlypedia, articles };
}
