import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { RETAILERS } from '@/lib/data/affiliateProducts';

export default function ProductCard({ product, className = '' }) {
  const retailerLabel = RETAILERS[product.retailer]?.label || 'Amazon';
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group flex gap-3 bg-card border border-border rounded-2xl p-4 hover:border-secondary/40 hover:shadow-md transition-all ${className}`}
    >
      {product.image && (
        <img
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
        <div className="mt-auto pt-2 flex items-center gap-1 text-xs font-display font-semibold text-secondary">
          <ShoppingCart className="w-3.5 h-3.5 flex-shrink-0" />
          Shop on {retailerLabel}
        </div>
      </div>
    </a>
  );
}
