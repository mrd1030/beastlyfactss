import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Own product, not an affiliate link - no rel="sponsored" (that's reserved
// for the paid/affiliate gear links in ProductCard.jsx). target="_blank"
// because this is a genuine cross-domain link to beastlyfacts.gumroad.com,
// where checkout actually happens.
export default function CarePackageCard({ pkg, variant = 'compact' }) {
  const isFull = variant === 'full';
  const isComingSoon = pkg.status === 'coming-soon';
  const Wrapper = isComingSoon ? 'div' : 'a';
  const wrapperProps = isComingSoon
    ? {}
    : { href: pkg.gumroadUrl, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all ${
        isComingSoon ? 'opacity-80' : 'hover:border-secondary/40 hover:shadow-md'
      }`}
    >
      <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
        {pkg.image ? (
          <img
            src={pkg.image}
            alt={`${pkg.name} cover`}
            loading="lazy"
            // aspect-video (16:9) matches the real Gumroad cover art
            // (670x376) pixel-for-pixel, so object-cover here needs to trim
            // essentially nothing - no letterbox bars, and no crop deep
            // enough to reach the logo badge or title text on the cover.
            // The old aspect-[16/10] container was the actual mismatch;
            // fixing the ratio here made the object-fit choice moot.
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <span className="text-4xl" role="img" aria-label={pkg.animal}>{pkg.emoji || '📘'}</span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-body font-bold tracking-wide uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            {pkg.badge}
          </span>
          {!isComingSoon && <span className="font-display font-bold text-sm text-foreground">{pkg.price}</span>}
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

        {isComingSoon ? (
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-body font-semibold text-muted-foreground">
            Coming soon
          </span>
        ) : (
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-body font-semibold text-secondary">
            Get the guide <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
    </Wrapper>
  );
}
