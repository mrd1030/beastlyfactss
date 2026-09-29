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

export default function ComparisonTable({
  headers = [], 
  rows = [], 
  className = '',
  linkCovers = false,
}) {
  if (!headers.length || !rows.length) return null;

  return (
    <div className={`not-prose my-8 overflow-x-auto rounded-xl border border-border ${className}`}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-4 py-3 text-left font-body font-semibold text-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-4 py-3 text-muted-foreground"
                >
                  {linkCovers && cellIndex === 0 ? linkedCell(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {needsPriceNote(rows, linkCovers) && (
        <p className="px-4 py-2 border-t border-border text-xs font-body text-muted-foreground">
          Typical price ranges across retailers, not current Amazon prices.
        </p>
      )}
    </div>
  );
}
