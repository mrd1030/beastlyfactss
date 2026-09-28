import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { ShoppingCart } from 'lucide-react';
import { AFFILIATE_PRODUCTS } from '@/lib/data/affiliateProducts';
import ProductModal from '@/components/shared/ProductModal';

export default function AffiliateLink({
  href,
  children,
  product = '',
  className = ''
}) {
  const matched = AFFILIATE_PRODUCTS.find((p) => p.link === href);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // A catalog product opens the same popup the gear cards use, so every
  // product link on the site behaves one way. The href stays real: modified
  // clicks (new tab, new window) and no-JS readers still go to the retailer,
  // and a link to something not in the catalog has no popup to show.
  const handleClick = (e) => {
    if (!matched) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer sponsored"
      title={product || undefined}
      className={`group/aff relative inline-flex items-center gap-1 font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors ${className}`}
    >
      {children}
      <ShoppingCart className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" aria-hidden="true" />
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
    {open && createPortal(<ProductModal product={matched} onClose={close} />, document.body)}
    </>
  );
}
