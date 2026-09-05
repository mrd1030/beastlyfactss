import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Own product, not an affiliate link - no rel="sponsored" (that's reserved
// for the paid/affiliate gear links in ProductCard.jsx). target="_blank"
// because this is a genuine cross-domain link to beastlyfacts.gumroad.com,
// where checkout actually happens.
//
// The outer element is a div, not a link, because every card also carries
// an internal link to the species' free guide, and a link cannot nest inside
// a link. The cover and the "Get the guide" row are the Gumroad links.
export default function CarePackageCard({ pkg, variant = 'compact' }) {
  const isFull = variant === 'full';
  const isComingSoon = pkg.status === 'coming-soon';
  const cover = pkg.image || pkg.cover;
  const guideHref = `/guides/${pkg.id}/`;
  const shopProps = { href: pkg.gumroadUrl, target: '_blank', rel: 'noopener noreferrer' };

  const coverImg = cover ? (
    <img
      src={cover}
      alt={`${pkg.name} cover`}
      loading="lazy"
      // aspect-video (16:9) matches the real Gumroad cover art (670x376)
      // pixel-for-pixel, so object-cover trims essentially nothing on a live
      // card. A coming-soon card shows the guide hero instead, which is a
      // wider crop, so object-cover does real work there.
      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
    />
  ) : (
    <span className="text-4xl" role="img" aria-label={pkg.animal}>{pkg.emoji || '📘'}</span>
  );

  return (
    <div
      className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all ${
        isComingSoon ? '' : 'hover:border-secondary/40 hover:shadow-md'
      }`}
    >
      <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
        {isComingSoon ? coverImg : <a {...shopProps} aria-label={`${pkg.name} on Gumroad`} className="block w-full h-full">{coverImg}</a>}
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-body font-bold tracking-wide uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            {pkg.badge}
          </span>
          {isComingSoon ? (
            <span className="text-[11px] font-body font-semibold uppercase tracking-wide text-muted-foreground">Listing soon</span>
          ) : (
            <span className="font-display font-bold text-sm text-foreground">{pkg.price}</span>
          )}
        </div>
        <h3 className="font-display font-bold text-lg text-foreground">{pkg.name}</h3>
        <p className="text-xs text-muted-foreground font-body">
          {isComingSoon
            ? `${pkg.pages} pages · rebuilt on the current template`
            : `${pkg.pages} pages · PDF · print or view${pkg.version ? ` · v${pkg.version}` : ''}`}
        </p>

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

        <div className="mt-2 flex items-center justify-between gap-3">
          {isComingSoon ? (
            <span className="text-sm font-body font-semibold text-muted-foreground">In progress</span>
          ) : (
            <a {...shopProps} className="inline-flex items-center gap-1 text-sm font-body font-semibold text-secondary hover:underline">
              Get the guide <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          <Link to={guideHref} className="text-xs font-body font-semibold text-muted-foreground hover:text-foreground hover:underline">
            {isComingSoon ? 'Read the free guide' : 'Free guide'}
          </Link>
        </div>
      </div>
    </div>
  );
}
