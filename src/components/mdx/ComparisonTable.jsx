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
    </div>
  );
}
