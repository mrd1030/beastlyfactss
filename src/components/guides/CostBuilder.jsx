import React, { useState } from 'react';
import { Calculator, ShoppingCart } from 'lucide-react';
import { getAffiliateForItem, RETAILERS } from '@/lib/data/affiliateProducts';

// Joins retailer labels naturally: "Amazon", "Amazon and Chewy", "Amazon, Chewy and Impact".
function joinLabels(labels) {
  if (labels.length <= 1) return labels[0] || '';
  return `${labels.slice(0, -1).join(', ')} and ${labels[labels.length - 1]}`;
}

function formatRange(r) {
  return r.low === r.high ? `$${r.low}` : `$${r.low}-$${r.high}`;
}

function sumRange(items, checked) {
  return items.reduce(
    (acc, item, i) => (checked[i] ? { low: acc.low + item.low, high: acc.high + item.high } : acc),
    { low: 0, high: 0 }
  );
}

function ItemLabel({ text, textClassName }) {
  const product = getAffiliateForItem(text);

  if (!product) {
    return <span className={textClassName}>{text}</span>;
  }

  const retailerLabel = RETAILERS[product.retailer]?.label || 'Amazon';

  return (
    <span className="relative inline-flex items-center gap-1 group/aff min-w-0">
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={(e) => e.stopPropagation()}
        title={`Paid link - opens the product on ${retailerLabel}`}
        className={`${textClassName} underline decoration-dotted decoration-current/40 underline-offset-2 hover:text-secondary transition-colors truncate`}
      >
        {text}
      </a>
      <ShoppingCart className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" aria-hidden="true" />
      {product.image && (
        <span className="pointer-events-none absolute left-0 bottom-full mb-2 z-20 hidden group-hover/aff:block group-focus-within/aff:block">
          <img
            src={product.image}
            alt={product.product}
            className="w-24 h-24 object-cover rounded-lg border border-border shadow-lg bg-white"
          />
        </span>
      )}
    </span>
  );
}

function CostSection({ title, items, checked, onToggle }) {
  return (
    <div className="mb-5 last:mb-0">
      <h3 className="font-display font-bold text-sm text-foreground mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <label
            key={item.item}
            className="flex items-center justify-between gap-3 text-xs font-body bg-muted/50 rounded-xl px-3 py-2.5 cursor-pointer"
          >
            <span className="flex items-center gap-2 min-w-0">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => onToggle(i)}
                className="accent-secondary w-3.5 h-3.5 flex-shrink-0"
              />
              <ItemLabel
                text={item.item}
                textClassName={checked[i] ? 'text-foreground' : 'text-muted-foreground line-through'}
              />
            </span>
            <span className="text-muted-foreground flex-shrink-0 whitespace-nowrap">
              {item.low === item.high ? `$${item.low}` : `$${item.low}-$${item.high}`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function CostBuilder({ guide }) {
  const costs = guide.costs;
  const [checkedSetup, setCheckedSetup] = useState(() => (costs?.setup || []).map(() => true));
  const [checkedAnnual, setCheckedAnnual] = useState(() => (costs?.annual || []).map(() => true));

  if (!costs) return null;

  const setupTotal = sumRange(costs.setup, checkedSetup);
  const annualTotal = sumRange(costs.annual, checkedAnnual);
  const matchedProducts = [...(costs.setup || []), ...(costs.annual || [])]
    .map((i) => getAffiliateForItem(i.item))
    .filter(Boolean);
  const hasAffiliateLinks = matchedProducts.length > 0;
  const retailerLabels = joinLabels([...new Set(matchedProducts.map((p) => RETAILERS[p.retailer]?.label || 'Amazon'))]);

  const toggleSetup = (i) => setCheckedSetup(prev => prev.map((v, idx) => (idx === i ? !v : v)));
  const toggleAnnual = (i) => setCheckedAnnual(prev => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <h2 className="font-display font-bold text-base text-foreground mb-1 flex items-center gap-2">
        <Calculator className="w-4 h-4" /> Cost Builder
      </h2>
      <p className="text-xs text-muted-foreground font-body mb-4">
        Uncheck anything you already have to see your real total.
      </p>

      <CostSection title="One-Time Setup" items={costs.setup} checked={checkedSetup} onToggle={toggleSetup} />
      <CostSection title="Ongoing (Per Year)" items={costs.annual} checked={checkedAnnual} onToggle={toggleAnnual} />

      <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground font-body mb-0.5">Setup total</p>
          <p className="font-display font-bold text-lg text-foreground">{formatRange(setupTotal)}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-body mb-0.5">Per year after</p>
          <p className="font-display font-bold text-lg text-foreground">{formatRange(annualTotal)}</p>
        </div>
      </div>
      <p className="text-[10px] text-muted-foreground/70 font-body mt-3 italic">
        Rough estimates to help you plan - actual prices vary by region and retailer.
        {hasAffiliateLinks && ` Underlined items are paid ${retailerLabels} links - we may earn a commission at no extra cost to you.`}
      </p>
    </div>
  );
}
