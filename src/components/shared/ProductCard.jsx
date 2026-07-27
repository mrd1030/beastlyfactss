import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
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
        <p className="font-display font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
          {product.product}
        </p>
        {(product.rating != null || product.price) && (
          <div className="flex items-center gap-2 mt-1">
            {product.rating != null && (
              <span className="flex items-center gap-0.5 text-xs font-body text-amber-500">
                <Star className="w-3 h-3 fill-amber-500" />
                {product.rating.toFixed(1)}
              </span>
            )}
            {product.price && (
              <span className="text-xs font-body text-muted-foreground">{product.price}</span>
            )}
          </div>
        )}
        <div className="mt-auto pt-2 flex items-center gap-1 text-xs font-display font-semibold text-secondary">
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
