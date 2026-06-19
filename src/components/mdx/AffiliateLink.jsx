import React from 'react';

export default function AffiliateLink({ 
  href, 
  children, 
  product = '', 
  className = '' 
}) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-flex items-center gap-1.5 font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors ${className}`}
    >
      {children}
      {product && (
        <span className="text-xs text-muted-foreground font-normal">({product})</span>
      )}
    </a>
  );
}
