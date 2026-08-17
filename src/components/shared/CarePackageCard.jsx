import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Own product, not an affiliate link - no rel="sponsored" (that's reserved
// for the paid/affiliate gear links in ProductCard.jsx). target="_blank"
// because this is a genuine cross-domain link to beastlyfacts.gumroad.com,
// where checkout actually happens.
export default function CarePackageCard({ pkg, variant = 'compact' }) {
  const isFull = variant === 'full';
  return (
    <a
      href={pkg.gumroadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all"
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={pkg.image}
          alt={`${pkg.name} cover`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-body font-bold tracking-wide uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            {pkg.badge}
          </span>
          <span className="font-display font-bold text-sm text-foreground">{pkg.price}</span>
        </div>
        <h3 className="font-display font-bold text-lg text-foreground">{pkg.name}</h3>
        <p className="text-xs text-muted-foreground font-body">{pkg.pages} pages &middot; PDF &middot; print or tablet</p>

        {isFull ? (
          <ul className="mt-1 space-y-1.5 text-sm text-muted-foreground font-body flex-1">
            {pkg.bullets.map(b => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary flex-shrink-0" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground font-body flex-1">{pkg.blurb}</p>
        )}

        <span className="mt-2 inline-flex items-center gap-1 text-sm font-body font-semibold text-secondary">
          Get the guide <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
  );
}
