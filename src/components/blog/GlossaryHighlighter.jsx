import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '@/lib/data/glossaryTerms';
import { slugify } from '@/lib/utils/slugify';

// A term heading like "Shedding (ecdysis)" or "Metabolic Bone Disease (MBD)"
// is really two matchable names for the same entry — split them so either
// wording found in an article resolves to the right glossary anchor.
function extractAliases(termHeading) {
  const parenMatch = termHeading.match(/^(.+?)\s*\(([^)]+)\)$/);
  if (parenMatch) return [parenMatch[1].trim(), parenMatch[2].trim()];
  return [termHeading.trim()];
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Built once at module load — CATEGORIES is static data.
const ALIAS_MAP = new Map(); // lowercased alias -> { slug, definition, displayTerm }
for (const cat of CATEGORIES) {
  for (const t of cat.terms) {
    const slug = slugify(t.term);
    for (const alias of extractAliases(t.term)) {
      const key = alias.toLowerCase();
      if (!ALIAS_MAP.has(key)) ALIAS_MAP.set(key, { slug, definition: t.definition, displayTerm: t.term });
    }
  }
}
// Longest aliases first, so e.g. "Metabolic Bone Disease" wins over any
// shorter alias that might otherwise match a substring of it first.
const SORTED_ALIASES = [...ALIAS_MAP.keys()].sort((a, b) => b.length - a.length);
const MATCH_REGEX = SORTED_ALIASES.length
  ? new RegExp(`\\b(${SORTED_ALIASES.map(escapeRegex).join('|')})\\b`, 'gi')
  : null;

const SKIP_TAGS = new Set(['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']);

function buildHighlightNode(matchedText, info, navigate) {
  const wrapper = document.createElement('span');
  wrapper.className = 'relative inline-block group/gloss';

  const link = document.createElement('a');
  link.href = `/glossary/#${info.slug}`;
  link.textContent = matchedText;
  link.className = 'bg-secondary/10 hover:bg-secondary/20 border-b border-dotted border-secondary/70 text-foreground rounded px-0.5 -mx-0.5 transition-colors cursor-help';
  link.setAttribute('aria-describedby', `gloss-tip-${info.slug}`);
  link.addEventListener('click', (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(`/glossary/#${info.slug}`);
  });
  wrapper.appendChild(link);

  const tooltip = document.createElement('span');
  tooltip.id = `gloss-tip-${info.slug}`;
  tooltip.setAttribute('role', 'tooltip');
  tooltip.className = 'pointer-events-none absolute left-0 bottom-full mb-1.5 z-20 hidden group-hover/gloss:block group-focus-within/gloss:block w-64 max-w-[80vw]';
  tooltip.innerHTML = `<span class="block bg-card border border-border rounded-xl shadow-lg px-3 py-2 text-xs leading-relaxed text-muted-foreground text-left">` +
    `<span class="block font-display font-bold text-foreground mb-0.5">${escapeHtml(info.displayTerm)}</span>` +
    `${escapeHtml(info.definition)}` +
    `<span class="block mt-1 text-[10px] font-semibold text-secondary">View in Glossary →</span>` +
    `</span>`;
  wrapper.appendChild(tooltip);

  return wrapper;
}

function hasSkippedAncestor(node, container) {
  let el = node.parentElement;
  while (el && el !== container) {
    if (SKIP_TAGS.has(el.tagName)) return true;
    el = el.parentElement;
  }
  return false;
}

// Scans already-rendered article content for known glossary terms (same DOM
// -scanning approach as TableOfContents, rather than requiring every MDX/
// Sanity/local post to hand-mark every occurrence) and highlights the FIRST
// occurrence of each term found, linking it to its Glossary entry.
export default function GlossaryHighlighter({ contentRef, watch }) {
  const navigate = useNavigate();

  useEffect(() => {
    const container = contentRef.current;
    if (!container || !MATCH_REGEX) return;

    const usedSlugs = new Set();

    // Snapshot text nodes before mutating — a live TreeWalker can skip or
    // reprocess nodes if the DOM changes underneath it mid-walk.
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() && !hasSkippedAncestor(node, container)) textNodes.push(node);
    }

    for (const textNode of textNodes) {
      const text = textNode.nodeValue;
      MATCH_REGEX.lastIndex = 0;
      let match;
      let cursor = 0;
      let didMatch = false;
      const frag = document.createDocumentFragment();

      while ((match = MATCH_REGEX.exec(text))) {
        const info = ALIAS_MAP.get(match[1].toLowerCase());
        if (!info || usedSlugs.has(info.slug)) continue;

        usedSlugs.add(info.slug);
        didMatch = true;
        frag.appendChild(document.createTextNode(text.slice(cursor, match.index)));
        frag.appendChild(buildHighlightNode(match[1], info, navigate));
        cursor = match.index + match[1].length;
      }

      if (didMatch) {
        frag.appendChild(document.createTextNode(text.slice(cursor)));
        textNode.replaceWith(frag);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentRef, watch]);

  return null;
}
