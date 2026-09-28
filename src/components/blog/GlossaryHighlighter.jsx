import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '@/lib/data/glossaryTerms';
import { slugify } from '@/lib/utils/slugify';

// A term heading like "Shedding (ecdysis)" or "Metabolic Bone Disease (MBD)"
// is really two matchable names for the same entry - split them so either
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

// Built once at module load - CATEGORIES is static data.
// An all-caps alias is an acronym and only matches written in capitals: the
// match is otherwise case-insensitive, which had "boas" (the snakes) linking
// to BOAS the airway syndrome, and "cites" the verb to CITES.
const isAcronym = (alias) => alias === alias.toUpperCase() && /[A-Z]/.test(alias);
// onlyIn/skipIn (see glossaryTerms.js) are tested with a global copy so every
// place the phrase occurs in the text can be checked against the match.
const globalize = (re) => (re ? new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`) : null);

// Whether some match of `re` in `text` spans the whole [start, end) range.
function phraseCovers(re, text, start, end) {
  re.lastIndex = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index <= start && m.index + m[0].length >= end) return true;
    if (m.index > start) return false;
    if (!m[0].length) re.lastIndex++;
  }
  return false;
}

const ALIAS_MAP = new Map(); // lowercased alias -> { slug, definition, displayTerm, exact, onlyIn, skipIn }
for (const cat of CATEGORIES) {
  for (const t of cat.terms) {
    const slug = slugify(t.term);
    for (const alias of extractAliases(t.term)) {
      const key = alias.toLowerCase();
      if (!ALIAS_MAP.has(key)) {
        ALIAS_MAP.set(key, {
          slug, definition: t.definition, displayTerm: t.term, exact: isAcronym(alias) ? alias : null,
          onlyIn: globalize(t.onlyIn), skipIn: globalize(t.skipIn),
        });
      }
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

// Touch has no hover, so on a phone the first tap on a term used to jump
// straight to the Glossary with no hint of why the word was marked. Touch
// now works the way iOS Safari treats hover content and Tippy.js recommends:
// the first tap opens the definition, a second tap on the term (or a tap on
// the definition itself) goes to the Glossary, and a tap anywhere else
// closes it. Mouse and keyboard are unchanged: hover or focus shows it,
// click goes. The CSS hover rule is limited to (hover: hover) devices, or
// iOS would spend the first tap on a hover and need a third to navigate.
function isTouchTap(pointerType) {
  if (pointerType) return pointerType !== 'mouse';
  return window.matchMedia?.('(hover: none)').matches ?? false;
}

function openTip(wrapper, tooltip) {
  wrapper.dataset.open = 'true';
  wrapper.firstChild.setAttribute('aria-expanded', 'true');
  Object.assign(tooltip.style, { display: 'block', pointerEvents: 'auto', left: '', top: '', bottom: '' });
  // Keep it on screen: a term near the right edge would push a 16rem box off
  // the side, and one near the top of the viewport has no room above.
  const r = tooltip.getBoundingClientRect();
  // clientWidth, not innerWidth: on a phone innerWidth can report the zoomed-out
  // layout width and leave the box hanging off the visible edge.
  const overflowRight = r.right - (document.documentElement.clientWidth - 8);
  if (overflowRight > 0) tooltip.style.left = `${-Math.min(overflowRight, r.left - 8)}px`;
  if (r.top < 8) Object.assign(tooltip.style, { top: '100%', bottom: 'auto', marginTop: '6px' });
}

// The one tap-opened definition, if any. Module-level with a single
// document listener, so a tap anywhere outside it closes it no matter which
// run of the effect below built the term (a re-run skips terms it already
// wrapped, which used to leave them tied to a listener that was gone).
const openState = { current: null };
if (typeof document !== 'undefined') {
  document.addEventListener('pointerdown', (e) => {
    if (openState.current && !openState.current.contains(e.target)) {
      closeTip(openState.current);
      openState.current = null;
    }
  }, true);
}

function closeTip(wrapper) {
  if (!wrapper) return;
  delete wrapper.dataset.open;
  wrapper.firstChild.setAttribute('aria-expanded', 'false');
  // The tapped term keeps focus, and focus-within would hold it open.
  if (wrapper.contains(document.activeElement)) document.activeElement.blur();
  wrapper.lastChild.removeAttribute('style');
}

function buildHighlightNode(matchedText, info, navigate) {
  const wrapper = document.createElement('span');
  wrapper.className = 'relative inline-block group/gloss';

  const go = () => {
    closeTip(openState.current);
    openState.current = null;
    navigate(`/glossary/#${info.slug}`);
  };

  let pointerType = '';
  const link = document.createElement('a');
  link.href = `/glossary/#${info.slug}`;
  link.textContent = matchedText;
  link.className = 'bg-secondary/10 hover:bg-secondary/20 border-b border-dotted border-secondary/70 text-foreground rounded px-0.5 -mx-0.5 transition-colors cursor-help';
  link.setAttribute('aria-describedby', `gloss-tip-${info.slug}`);
  link.addEventListener('pointerdown', (e) => { pointerType = e.pointerType; });
  link.addEventListener('click', (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (isTouchTap(pointerType) && openState.current !== wrapper) {
      closeTip(openState.current);
      openTip(wrapper, tooltip);
      openState.current = wrapper;
      return;
    }
    go();
  });
  wrapper.appendChild(link);

  const tooltip = document.createElement('span');
  tooltip.id = `gloss-tip-${info.slug}`;
  tooltip.setAttribute('role', 'tooltip');
  tooltip.className = 'pointer-events-none absolute left-0 bottom-full mb-1.5 z-20 hidden [@media(hover:hover)]:group-hover/gloss:block group-focus-within/gloss:block w-64 max-w-[80vw]';
  tooltip.innerHTML = `<span class="block bg-card border border-border rounded-xl shadow-lg px-3 py-2 text-xs leading-relaxed text-muted-foreground text-left">` +
    `<span class="block font-body font-bold text-foreground mb-0.5">${escapeHtml(info.displayTerm)}</span>` +
    `${escapeHtml(info.definition)}` +
    `<span class="block mt-1 text-[10px] font-semibold text-secondary">View in Glossary →</span>` +
    `</span>`;
  // Only reachable when a tap opened it: hover tooltips stay
  // pointer-events-none so they never block the text under them.
  tooltip.addEventListener('click', (e) => { e.preventDefault(); go(); });
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
    // Skipped during prerendering: this effect directly mutates the DOM
    // (splitting text nodes to wrap glossary terms in links), which can
    // settle before prerender.mjs captures the page, baking the
    // glossary-highlighted markup into the static HTML. A real client's
    // hydration-time first render always shows the original, unmodified
    // MDX/Sanity text (this effect hasn't run yet), so the prerendered
    // version mismatches - a text-node-split structural mismatch, not just
    // a style difference. Same class of issue as BeastlyBuddy's
    // footerVisible/BottomTabs' tabWidth, just DOM-mutation-driven instead
    // of state-driven.
    if (window.__IS_PRERENDER__) return;
    const container = contentRef.current;
    if (!container || !MATCH_REGEX) return;

    const scan = () => {
      const usedSlugs = new Set();

      // Snapshot text nodes before mutating - a live TreeWalker can skip or
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
          if (info.exact && match[1] !== info.exact) continue;
          const end = match.index + match[1].length;
          if (info.onlyIn && !phraseCovers(info.onlyIn, text, match.index, end)) continue;
          if (info.skipIn && phraseCovers(info.skipIn, text, match.index, end)) continue;

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
    };

    // Reached by a link from another article, the new article's body is a
    // code chunk that may still be downloading: MdxArticleBody shows a
    // [data-mdx-loading] placeholder, and scanning that finds nothing. Wait
    // for the real text to replace it, then scan. A direct load already has
    // the text in place, so it scans straight away.
    if (!container.querySelector('[data-mdx-loading]')) {
      scan();
      return;
    }
    const observer = new MutationObserver(() => {
      if (container.querySelector('[data-mdx-loading]')) return;
      observer.disconnect();
      scan();
    });
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentRef, watch]);

  return null;
}
