import React from 'react';
import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';
import { CARE_PACKAGES } from '@/lib/data/carePackages';

// Soft, in-article plug for the matching printable care package. Modeled on
// KeyTakeaway's card shape so it reads as "related resource," not an ad.
// Links to the on-site store (not straight to Gumroad) so a reader who just
// wants to look never leaves the site to do it.
export default function CarePackageBlock({ animal }) {
  const pkg = CARE_PACKAGES.find(p => p.id === animal);
  if (!pkg) return null;

  return (
    <div className="my-8 rounded-2xl border border-secondary/30 border-l-4 border-l-secondary bg-secondary/5 p-5 flex items-center gap-4">
      <img
        src={pkg.image}
        alt={`${pkg.name} cover`}
        loading="lazy"
        className="hidden sm:block w-16 h-16 object-cover rounded-xl border border-border flex-shrink-0 bg-white"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-xs font-body font-bold uppercase tracking-wider text-secondary mb-1">
          <Printer className="h-3.5 w-3.5" /> Printable Guide
        </div>
        <p className="text-foreground font-body text-sm">
          Want this as a printable reference? The{' '}
          <Link to="/care-packages/store/" className="font-semibold underline decoration-secondary/40 hover:decoration-secondary">
            {pkg.name}
          </Link>{' '}
          turns this guide into a {pkg.pages}-page PDF you can keep by the enclosure, {pkg.price}.
        </p>
      </div>
    </div>
  );
}
