import React from 'react';
import AffiliateLink from './AffiliateLink';
import { getAffiliateForItem } from '@/lib/data/affiliateProducts';

// linkCovers: a row whose first cell is plain text matching a product's
// `covers` exactly renders as that product's link, the same match the hub
// What to buy lists use. Blog.jsx turns it on for cost guides only, so a
// cost table links its gear without affiliate links in the paragraphs.
// A first cell that is already JSX (a hand-written <AffiliateLink>) is left
// alone.
function linkedCell(cell) {
  if (typeof cell !== 'string') return cell;
  const product = getAffiliateForItem(cell);
  return product
    ? <AffiliateLink href={product.link} product={product.product}>{cell}</AffiliateLink>
    : cell;
}

function hasAffiliateLink(node) {
  if (Array.isArray(node)) return node.some(hasAffiliateLink);
  if (!React.isValidElement(node)) return false;
  return node.type === AffiliateLink || hasAffiliateLink(node.props?.children);
}

// A table that puts a dollar figure beside an Amazon link gets a note saying
// the figure is a category estimate. The Associates Program Policies only
// allow Amazon prices that come from the Creators API or PA API, so these
// ranges must never read as the linked listing's current price.
function needsPriceNote(rows, linkCovers) {
  const hasPrice = rows.some((row) => row.some((cell) => typeof cell === 'string' && /\$\d/.test(cell)));
  if (!hasPrice) return false;
  return rows.some((row) =>
    hasAffiliateLink(row[0]) || (linkCovers && typeof row[0] === 'string' && getAffiliateForItem(row[0]))
  );
}

// tierColumn: the index of a column holding a feeding tier ("Staple",
// "Never"...). Those cells render as a colored pill, green for everyday
// through red for never. Opt-in per table, so a "Never" in any other table
// stays plain text. An unknown tier word falls back to gray.
const TIER_STYLES = {
  'staple': 'text-emerald-800 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400',
  // Not orange: tailwind.config.js overrides `orange` with one brand hex, so
  // orange-100 and friends don't exist on this site.
  'occasional': 'text-yellow-800 bg-yellow-100 dark:bg-yellow-950 dark:text-yellow-400',
  'treat only': 'text-amber-900 bg-amber-200 dark:bg-amber-900 dark:text-amber-200',
  'topper only': 'text-amber-900 bg-amber-200 dark:bg-amber-900 dark:text-amber-200',
  'rare': 'text-amber-900 bg-amber-200 dark:bg-amber-900 dark:text-amber-200',
  'never': 'text-red-800 bg-red-100 dark:bg-red-950 dark:text-red-400',
};
const TIER_FALLBACK = 'text-slate-700 bg-slate-100 dark:bg-slate-800 dark:text-slate-300';

function tierCell(cell) {
  if (typeof cell !== 'string') return cell;
  const style = TIER_STYLES[cell.trim().toLowerCase()] || TIER_FALLBACK;
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${style}`}>
      {cell}
    </span>
  );
}

const STACK_TEXT_LENGTH = 30;

function textLength(node) {
  if (typeof node === 'string' || typeof node === 'number') return String(node).length;
  if (Array.isArray(node)) return node.reduce((sum, n) => sum + textLength(n), 0);
  if (React.isValidElement(node)) return textLength(node.props?.children);
  return 0;
}

// A short price cell ("$475 - $1,475", "about $5", "$20 - $40 a year")
// should never break mid-range; a column made only of them keeps its figures,
// and its header, on one line so the item column takes the squeeze instead.
const PRICE_CELL = /^\s*(about |roughly |~)?\$[\d,]+(\.\d+)?(\s*(-|to)\s*\$[\d,]+(\.\d+)?)?\+?(\s+(a|per)\s+\w+)?\s*$/i;

export default function ComparisonTable({
  headers = [],
  rows = [],
  className = '',
  linkCovers = false,
  tierColumn,
  footer,
}) {
  if (!headers.length || !rows.length) return null;

  // Phones: a table of 3+ columns with sentences in it squeezes every column
  // to a sliver, so below md each row stacks into a card. The first cell (and
  // a tier pill) is the title line; every other cell gets its header as a
  // small label above it. Tables of short values (cost Low / High, two-column
  // cost tables) fit a phone fine and stay tables.
  const stacked = headers.length >= 3
    && rows.some((row) => row.slice(1).some((cell) => textLength(cell) > STACK_TEXT_LENGTH));
  const isTitleCell = (i) => i === 0 || i === tierColumn;
  const s = (mobile, desktop) => (stacked ? `${mobile} ${desktop}` : '');
  const priceColumns = new Set(headers.map((_, i) => i).filter((i) => i > 0
    && rows.every((row) => typeof row[i] === 'string' && PRICE_CELL.test(row[i]))));
  const nowrap = (i) => (priceColumns.has(i) ? ' whitespace-nowrap' : '');

  return (
    <div className={`not-prose my-8 overflow-x-auto rounded-xl border border-border ${className}`}>
      <table className={`w-full text-sm ${s('block', 'md:table')}`}>
        <thead className={s('hidden', 'md:table-header-group')}>
          <tr className="border-b border-border bg-muted/50">
            {headers.map((header, index) => (
              <th 
                key={index} 
                className={`px-4 py-3 text-left font-body font-semibold text-foreground${nowrap(index)}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={s('block', 'md:table-row-group')}>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b border-border last:border-0 hover:bg-muted/30 transition-colors ${s('block py-3 space-y-1.5', 'md:table-row md:py-0')}`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  data-label={stacked && !isTitleCell(cellIndex) ? headers[cellIndex] || undefined : undefined}
                  // Padding is set per layout, never as a base class: py-3
                  // beside py-0 resolves by CSS order, not class order.
                  className={`px-4 text-muted-foreground${nowrap(cellIndex)} ${
                    !stacked ? 'py-3'
                    : isTitleCell(cellIndex)
                      ? `block py-0 md:table-cell md:py-3 ${cellIndex === 0 ? 'font-semibold text-foreground md:font-normal md:text-muted-foreground' : ''}`
                      : 'block py-0 md:table-cell md:py-3 before:block before:text-xs before:font-semibold before:text-foreground/70 before:content-[attr(data-label)] md:before:content-none'
                  }`}
                >
                  {cellIndex === tierColumn
                    ? tierCell(cell)
                    : linkCovers && cellIndex === 0 ? linkedCell(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* footer: one summary row (a cost table's total), set off in bold. */}
        {footer && (
          <tfoot className={s('block', 'md:table-footer-group')}>
            <tr className={`border-t-2 border-border bg-muted/50 ${s('block py-3', 'md:table-row md:py-0')}`}>
              {footer.map((cell, i) => (
                <td key={i} className={`px-4 py-3 font-body font-semibold text-foreground${nowrap(i)}`}>{cell}</td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
      {needsPriceNote(rows, linkCovers) && (
        <p className="px-4 py-2 border-t border-border text-xs font-body text-muted-foreground">
          Typical price ranges across retailers.
        </p>
      )}
    </div>
  );
}
