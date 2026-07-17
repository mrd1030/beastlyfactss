import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { AFFILIATE_PRODUCTS } from '@/lib/data/affiliateProducts';

export default function AffiliateLink({
  href,
  children,
  product = '',
  className = ''
}) {
  const matched = AFFILIATE_PRODUCTS.find((p) => p.link === href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group/aff relative inline-flex items-center gap-1 font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors ${className}`}
    >
      {children}
      <ShoppingCart className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" aria-hidden="true" />
      {product && (
        <span className="text-xs text-muted-foreground font-normal">({product})</span>
      )}
      {matched?.image && (
        <span className="pointer-events-none absolute left-0 bottom-full mb-2 z-20 hidden group-hover/aff:block group-focus-within/aff:block">
          <img
            src={matched.image}
            alt={matched.product}
            className="w-24 h-24 object-cover rounded-lg border border-border shadow-lg bg-white"
          />
        </span>
      )}
    </a>
  );
}
