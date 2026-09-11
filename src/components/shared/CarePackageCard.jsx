import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import CarePackageBuyButton from '@/components/shared/CarePackageBuyButton';
import { carePackageBookCover } from '@/lib/data/carePackages';
import { getCarePackageCopy } from '@/lib/data/carePackageCopy';
import { getCarePackageTheme } from '@/lib/data/carePackageThemes';
import '@/styles/care-package-hub.css';

// One package on the hub, the store, and the product page's related strip.
//
// The whole card is the link. The name carries a "stretched link", a pseudo
// element covering the card, so a click anywhere goes where the package
// lives: its product page for a package sold here, its Gumroad listing (a
// genuine cross-domain link, new tab, no rel="sponsored" since it is our own
// product) for one still sold there, and the free guide for one not yet on
// sale anywhere. The two small controls in the footer sit above that pseudo
// element with z-10, so they stay clickable on their own: a secondary buy
// button, since the product page is where buying mainly happens, and the
// free guide link.
//
// The tile shows the package's own cover page as a tilted book on the
// species' hero gradient from carePackageThemes.js, with a glow pooled
// behind it and a rim on the book so it does not sink into the tile: the
// cover art is itself a dark gradient. See .cph-tile in care-package-hub.css.
export default function CarePackageCard({ pkg }) {
  const isStripe = pkg.storefront === 'stripe';
  const isComingSoon = pkg.status === 'coming-soon' && !isStripe;
  const guideHref = `/guides/${pkg.id}/`;
  const productHref = `/care-packages/${pkg.id}/`;
  const theme = getCarePackageTheme(pkg.id);
  // The product page's hook, one line: every cover says a version of "keep
  // your X the right way", so this is what makes fourteen cards differ by
  // more than animal and color.
  const hook = getCarePackageCopy(pkg.id)?.hook;
  const tileStyle = {
    '--t-from': theme.light['hero-from'],
    '--t-via': theme.light['hero-via'],
    '--t-to': theme.light['hero-to'],
    '--t-glow': theme.light.glow,
  };

  const stretched = 'after:absolute after:inset-0 after:content-[""]';
  const title = isStripe ? (
    <Link to={productHref} className={stretched}>{pkg.name}</Link>
  ) : isComingSoon ? (
    <Link to={guideHref} className={stretched}>{pkg.name}</Link>
  ) : (
    <a href={pkg.gumroadUrl} target="_blank" rel="noopener noreferrer" className={stretched}>{pkg.name}</a>
  );

  return (
    <div className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all hover:border-secondary/40 hover:shadow-md hover:-translate-y-0.5">
      <div className="cph-tile" style={tileStyle}>
        <img
          src={carePackageBookCover(pkg)}
          alt={`${pkg.name} cover`}
          loading="lazy"
          decoding="async"
          width="1224"
          height="1584"
          className="cph-tile-book"
        />
      </div>
      <div className="p-4 flex flex-col gap-1.5 flex-1">
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
        <h3 className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors leading-snug">
          {title}
        </h3>
        {hook && <p className="text-sm text-foreground/80 font-body leading-snug line-clamp-2">{hook}</p>}
        <p className="text-xs text-muted-foreground font-body">
          {/* A package that is announced but not built has no page count and no
              edition, and "undefined pages" is worse than saying nothing. */}
          {pkg.pages
            ? `${pkg.pages} pages · PDF${pkg.version ? ` · edition ${pkg.version}` : ''}`
            : 'Printable PDF · in progress'}
        </p>
        <div className="mt-auto pt-2 flex items-center justify-between gap-3">
          {isStripe ? (
            <CarePackageBuyButton
              pkg={pkg}
              appearance="bare"
              className="relative z-10 border border-border text-foreground px-3 py-1.5 text-xs hover:bg-muted transition-colors"
              label={`Buy, ${pkg.price}`}
            />
          ) : isComingSoon ? (
            <span className="text-xs font-body font-semibold text-muted-foreground">In progress</span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-body font-semibold text-secondary">
              On Gumroad <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          )}
          <Link
            to={guideHref}
            className="relative z-10 text-xs font-body font-semibold text-muted-foreground hover:text-foreground hover:underline"
          >
            Free guide
          </Link>
        </div>
      </div>
    </div>
  );
}
