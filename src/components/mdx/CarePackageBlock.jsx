import React from 'react';
import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';
import {
  CARE_PACKAGES,
  carePackageBookCover,
  carePackageHome,
  carePackageAnimalInSentence,
  carePackageSampleHref,
} from '@/lib/data/carePackages';

// The in-article card for the matching printable care package. It sits on two
// guides per species only, the tank setup guide and the health issues guide,
// as the last element after <Sources>, because those are the two guides the
// package genuinely carries: the housing section with its setup checklist,
// and the health section with its symptom table and emergency card. Never on
// handling, enrichment, cost or shared articles (docs/RULES.md). The wording
// follows the guide it sits on, and every card offers the free sample first.
export default function CarePackageBlock({ animal, variant = 'setup' }) {
  const pkg = CARE_PACKAGES.find(p => p.id === animal);
  // A package sold here (storefront: 'stripe') shows whatever its status
  // says; a coming-soon package with no listing anywhere stays silent in the
  // article until the status flips to 'live'.
  if (!pkg || (pkg.status === 'coming-soon' && pkg.storefront !== 'stripe')) return null;

  const href = pkg.storefront === 'stripe' ? `/care-packages/${pkg.id}/` : '/care-packages/store/';
  const sampleHref = carePackageSampleHref(pkg);
  const lead = variant === 'health'
    ? `A sick ${carePackageAnimalInSentence(pkg)} is no time to be scrolling. The `
    : 'The ';
  const tail = variant === 'health'
    ? ` puts these red flags, a symptom quick reference and an emergency card on paper, in a ${pkg.pages}-page PDF, ${pkg.price}.`
    : ` carries this setup as a checklist with the targets to hit, in a ${pkg.pages}-page PDF you can keep by the ${carePackageHome(pkg)}, ${pkg.price}.`;

  return (
    <div className="my-8 rounded-2xl border border-secondary/30 border-l-4 border-l-secondary bg-secondary/5 p-5 flex items-center gap-4">
      <img
        src={pkg.thumbnail || carePackageBookCover(pkg)}
        alt={`${pkg.name} cover`}
        loading="lazy"
        className="hidden sm:block w-16 h-16 object-cover rounded-xl border border-border flex-shrink-0 bg-white"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-xs font-body font-bold uppercase tracking-wider text-secondary mb-1">
          <Printer className="h-3.5 w-3.5" /> Printable Guide
        </div>
        <p className="text-foreground font-body text-sm">
          {/* Single strings either side of the link: this block is prerendered
              inside articles, and text beside {expressions} renders as several
              nodes that the captured HTML merges, failing hydration. See main.jsx. */}
          {lead}
          <Link to={href} className="font-semibold underline decoration-secondary/40 hover:decoration-secondary">
            {pkg.name}
          </Link>
          {tail}
        </p>
        {sampleHref && (
          <p className="font-body text-sm mt-2">
            <a href={sampleHref} download className="font-semibold text-secondary underline decoration-secondary/40 hover:decoration-secondary">
              {`Read the first ${pkg.samplePages} pages free`}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
