import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { RETAILERS } from '@/lib/data/affiliateProducts';
import LocalImage from '@/components/shared/LocalImage';

export default function ProductCard({ product, onSelect, className = '' }) {
  const retailerLabel = RETAILERS[product.retailer]?.label || 'Amazon';
  const sharedClassName = `group flex gap-3 bg-card border border-border rounded-2xl p-4 hover:border-secondary/40 hover:shadow-md transition-all ${className}`;
  const content = (
    <>
      {product.image && (
        <LocalImage
          src={product.image}
          alt={product.product}
          className="w-16 h-16 object-cover rounded-xl border border-border flex-shrink-0 bg-white"
          loading="lazy"
        />
      )}
      <div className="min-w-0 flex flex-col">
        <p className="font-body font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
          {product.product}
        </p>
        {/* The star rating is deliberately not shown. The number in the data
            file was copied from the retailer at research time and never
            refreshed, so on the page it read as a live rating it is not. The
            price range is kept because it is presented as a range, not a fact. */}
        {product.price && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-body text-muted-foreground">{product.price}</span>
          </div>
        )}
        <div className="mt-auto pt-2 flex items-center gap-1 text-xs font-body font-semibold text-secondary">
          <ShoppingCart className="w-3.5 h-3.5 flex-shrink-0" />
          {onSelect ? `See on ${retailerLabel}` : `Shop on ${retailerLabel}`}
        </div>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(product)}
        className={`${sharedClassName} text-left w-full`}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={sharedClassName}
    >
      {content}
    </a>
  );
}
