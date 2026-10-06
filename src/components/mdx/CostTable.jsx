import React from 'react';
import ComparisonTable from './ComparisonTable';
import AffiliateLink from './AffiliateLink';
import { COST_SHEETS } from '@/lib/data/costSheets';
import { COST_ITEMS } from '@/lib/data/costItems';
import { AFFILIATE_PRODUCTS } from '@/lib/data/affiliateProducts';
import { rowRange, formatRange, sectionTotal } from '@/lib/costs';

const PRODUCTS = Object.fromEntries(AFFILIATE_PRODUCTS.map((p) => [p.slug, p]));

// The bottom row: the setup total for the necessities (the same figure the
// heading and every %%setup%% placeholder print), and what the extras come to
// if a keeper buys every one.
const FOOTER_LABELS = {
  necessities: 'Setup total',
  extras: 'All the extras together',
  optional: 'Total',
};

const DEFAULT_HEADERS = {
  necessities: ['Item', 'Cost Range'],
  extras: ['Extra', 'Cost Range'],
};

// "[Dimming thermostat] for the basking bulb": the bracketed words become the
// link to the item's product. With no product the brackets just drop away.
function rowText(row) {
  if (!row.item) return row.text;
  const item = COST_ITEMS[row.item];
  const text = row.text || (item.product ? `[${item.label}]` : item.label);
  // row.products links each bracket in turn (a "bulb and dome" row); without
  // it every bracket links the item's own product.
  const slugs = row.products || [item.product];
  const parts = text.split(/\[([^\]]+)\]/);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return part;
        const product = PRODUCTS[slugs[Math.min((i - 1) / 2, slugs.length - 1)]];
        return product
          ? <AffiliateLink key={i} href={product.link} product={product.product}>{part}</AffiliateLink>
          : part;
      })}
    </>
  );
}

// A cost guide table drawn from the animal's sheet in costSheets.js, so its
// prices and total always match the master list. Use in MDX as
// <CostTable guide="ackie-monitor" section="necessities" />. total={false}
// drops the footer, for a table of swap-in rows whose own sum means nothing
// (the hamster's Syrian rows, which replace the dwarf's).
export default function CostTable({ guide, section = 'necessities', headers, total = true }) {
  const sheet = COST_SHEETS[guide];
  if (!sheet || !sheet[section]) return null;
  const rows = sheet[section].map((row) => [rowText(row), formatRange(rowRange(row), ' - ')]);
  const footer = total && rows.length > 1
    ? [(section === 'necessities' && sheet.totalLabel) || FOOTER_LABELS[section] || 'Total', formatRange(sectionTotal(guide, section), ' - ')]
    : undefined;
  return <ComparisonTable headers={headers || DEFAULT_HEADERS[section] || DEFAULT_HEADERS.necessities} rows={rows} footer={footer} />;
}
