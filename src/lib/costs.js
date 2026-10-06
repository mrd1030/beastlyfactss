// Turns the master price list (data/costItems.js) and the per-animal sheets
// (data/costSheets.js) into the figures the site prints. Plain ESM with
// explicit extensions so the Node build scripts can import it as well as Vite.
import { COST_ITEMS } from './data/costItems.js';
import { COST_SHEETS } from './data/costSheets.js';

const money = (n) => '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// "$880 to $2,230" in prose, "$880 - $2,230" in a table cell; one figure
// reads "about $5" either way.
export function formatRange([low, high], sep = ' to ') {
  return low === high ? `about ${money(low)}` : `${money(low)}${sep}${money(high)}`;
}

export function rowRange(row) {
  // A one-off row (the animal itself, a first exam) carries its own figures
  // and no item; so does a row that overrides its item's price.
  if (row.low != null) return [row.low, row.high];
  const item = COST_ITEMS[row.item];
  if (!item) throw new Error(`costSheets: unknown item "${row.item}"`);
  const qty = row.qty || 1;
  return [item.low * qty, item.high * qty];
}

export function sectionTotal(guide, section) {
  const sheet = COST_SHEETS[guide];
  if (!sheet) throw new Error(`costSheets: no sheet for "${guide}"`);
  return (sheet[section] || []).reduce(
    ([low, high], row) => { const [l, h] = rowRange(row); return [low + l, high + h]; },
    [0, 0],
  );
}

// The figure behind one placeholder, as [low, high].
export function costFigure(kind, key) {
  if (kind === 'price') {
    const item = COST_ITEMS[key];
    if (!item) throw new Error(`cost placeholder: unknown item "${key}"`);
    return [item.low, item.high];
  }
  const sheet = COST_SHEETS[key];
  if (!sheet) throw new Error(`cost placeholder: no sheet for "${key}"`);
  if (kind === 'setup') return sectionTotal(key, 'necessities');
  // The gear alone: the setup rows that are items, without one-off rows such
  // as the animal itself or a first exam.
  if (kind === 'gear') {
    return (sheet.necessities || []).filter((r) => r.item).reduce(
      ([low, high], r) => { const [l, h] = rowRange(r); return [low + l, high + h]; }, [0, 0]);
  }
  const field = { animal: 'animal', monthly: 'monthly', vet: 'vetExam', annual: 'annual' }[kind];
  if (!field || !sheet[field]) throw new Error(`cost placeholder: "${kind}" not set for "${key}"`);
  return sheet[field];
}

// %%setup:ackie-monitor%% -> "$880 to $2,230". Not braces: in an MDX body a
// {...} is a JavaScript expression. Filled before MDX compiles (vite.config.js)
// and wherever a script reads the raw file, so headings, titles, FAQs and the
// prerendered HTML all carry the plain figure. An unknown placeholder throws,
// which fails the build rather than printing the token.
export const COST_TOKEN = /%%(setup|gear|animal|monthly|vet|annual|price):([a-z0-9-]+)%%/g;

export function resolveCostTokens(text) {
  if (typeof text !== 'string' || !text.includes('%%')) return text;
  // "about %%price:x%%" stays one "about" when the figure is a single price,
  // which formatRange already prints as "about $N".
  return text.replace(/(\babout )?%%(setup|gear|animal|monthly|vet|annual|price):([a-z0-9-]+)%%/g, (_, about, kind, key) => {
    const figure = formatRange(costFigure(kind, key));
    return about && !figure.startsWith('about') ? about + figure : figure;
  });
}

// The products each <CostTable> in a raw MDX file links, so scripts that find
// an article's affiliate links by reading the file (the disclosure check, the
// per-animal gear lists) see the table rows the component draws at render.
export function costTableProducts(text) {
  const tables = [];
  for (const m of String(text).matchAll(/<CostTable\s+guide="([^"]+)"\s+section="([^"]+)"/g)) {
    const rows = (COST_SHEETS[m[1]] || {})[m[2]] || [];
    tables.push({
      guide: m[1],
      section: m[2],
      products: rows.map((r) => r.item && COST_ITEMS[r.item] && COST_ITEMS[r.item].product).filter(Boolean),
    });
  }
  return tables;
}

// Fills every placeholder in a data structure (the hub files wrap their
// export in this), returning a copy.
export function fillCostTokens(value) {
  if (typeof value === 'string') return resolveCostTokens(value);
  if (Array.isArray(value)) return value.map(fillCostTokens);
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fillCostTokens(v)]));
  }
  return value;
}
