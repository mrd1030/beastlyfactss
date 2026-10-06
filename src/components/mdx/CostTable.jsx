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
};

const DEFAULT_HEADERS = {
  necessities: ['Item', 'Cost Range'],
  extras: ['Extra', 'Cost Range'],
};

// "[Dimming thermostat] for the basking bulb": the bracketed words become the
// link to the item's product. With no product the brackets just drop away.
function rowText(row) {
  const item = COST_ITEMS[row.item];
  const text = row.text || (item.product ? `[${item.label}]` : item.label);
  const product = item.product && PRODUCTS[item.product];
  const parts = text.split(/\[([^\]]+)\]/);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 && product
        ? <AffiliateLink key={i} href={product.link} product={product.product}>{part}</AffiliateLink>
        : part))}
    </>
  );
}

// A cost guide table drawn from the animal's sheet in costSheets.js, so its
// prices and total always match the master list. Use in MDX as
// <CostTable guide="ackie-monitor" section="necessities" />.
export default function CostTable({ guide, section = 'necessities', headers }) {
  const sheet = COST_SHEETS[guide];
  if (!sheet || !sheet[section]) return null;
  const rows = sheet[section].map((row) => [rowText(row), formatRange(rowRange(row), ' - ')]);
  const footer = rows.length > 1
    ? [FOOTER_LABELS[section] || 'Total', formatRange(sectionTotal(guide, section), ' - ')]
    : undefined;
  return <ComparisonTable headers={headers || DEFAULT_HEADERS[section] || DEFAULT_HEADERS.necessities} rows={rows} footer={footer} />;
}
