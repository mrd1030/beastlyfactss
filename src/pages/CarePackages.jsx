import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CARE_PACKAGES, CARE_PACKAGE_GROUPS, carePackageBookCover, isCarePackageBuyable } from '@/lib/data/carePackages';
import CarePackagesNav from '@/components/shared/CarePackagesNav';
import CarePackageCard from '@/components/shared/CarePackageCard';
import '@/styles/care-package-hub.css';

const TITLE = 'Printable Care Packages | Beastly Facts';
const DESCRIPTION = 'Printable PDF owner manuals for reptiles, birds, fish, and small mammals. Same research standards as our free guides, formatted to keep by the enclosure.';

const FEATURES = [
  { emoji: '📖', title: 'The first pages are free', body: 'Every package has a free sample on its page: the contents page and the introduction as a PDF, so you see every page it covers before you buy.' },
  { emoji: '🖨️', title: 'Print what matters', body: 'Temperature targets, shopping lists, first-30-days plans, and daily routines designed to live near the habitat.' },
  { emoji: '⚠️', title: 'Clear Never rules', body: 'Safety-critical mistakes are called out plainly so common beginner errors are harder to miss.' },
  { emoji: '🔁', title: 'Every corrected edition is free', body: 'Buy once. When a correction ships, the file behind your download becomes the new edition, and your library shows which one you hold.' },
];

// One featured package per catalog section, in section order, from the
// buyable ones. A reptile, a bird, a fish and a mammal together say "range"
// in a way three reptiles in a row do not.
function pickFeatured(count) {
  const buyable = CARE_PACKAGES.filter(isCarePackageBuyable);
  const picked = [];
  for (const group of CARE_PACKAGE_GROUPS) {
    const hit = buyable.find(p => group.badges.includes(p.badge) && !picked.includes(p));
    if (hit) picked.push(hit);
    if (picked.length === count) break;
  }
  for (const p of buyable) {
    if (picked.length === count) break;
    if (!picked.includes(p)) picked.push(p);
  }
  return picked;
}

export default function CarePackages() {
  const buyable = CARE_PACKAGES.filter(isCarePackageBuyable);
  const inProgress = CARE_PACKAGES.filter(p => !isCarePackageBuyable(p));
  const featured = pickFeatured(4);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/care-packages/" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/care-packages/" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      <header className="cph-hero">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="cph-hero-eyebrow inline-flex items-center gap-2 text-xs font-body font-bold tracking-widest uppercase mb-4">
              <span aria-hidden="true">🖨️</span> Printable owner manuals
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-5">
              Clear husbandry standards for animals you actually keep.
            </h1>
            <p className="cph-hero-muted font-body text-lg max-w-lg mb-6">
              Our research-backed guides, turned into offline owner manuals: setup targets, health triage, checklists, and routines you can keep by the enclosure.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link to="/care-packages/store/" className="cph-hero-btn inline-flex items-center px-6 py-3 rounded-full font-body font-bold text-sm transition-transform">
                {`Browse all ${buyable.length}, $8.99 each`}
              </Link>
              <Link to="/care-packages/why-we-exist/" className="cph-hero-ghost inline-flex items-center px-5 py-3 rounded-full font-body font-bold text-sm transition-colors">
                Why these exist
              </Link>
            </div>
            <ul className="cph-hero-muted flex flex-wrap gap-x-6 gap-y-2 text-sm font-body">
              <li>✓ 34 to 44 pages each</li>
              <li>✓ Free first pages on every package</li>
              <li>✓ No external links inside the PDF</li>
            </ul>
          </div>
          <div className="cph-fan px-2 sm:px-6">
            {featured.map(pkg => (
              <Link key={pkg.id} to={isCarePackageBuyable(pkg) && pkg.storefront === 'stripe' ? `/care-packages/${pkg.id}/` : '/care-packages/store/'} className="cph-fan-book block" aria-label={pkg.name}>
                <img
                  src={carePackageBookCover(pkg)}
                  alt={`${pkg.name} cover`}
                  width="1224"
                  height="1584"
                  className="w-full h-auto rounded-[5px]"
                  fetchPriority="high"
                />
              </Link>
            ))}
          </div>
        </div>
        <svg className="cph-wave relative block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0,20 C220,58 460,4 720,28 C980,52 1220,10 1440,32 L1440,60 L0,60 Z" />
        </svg>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <CarePackagesNav />

        <section className="mt-10">
          <div className="flex items-end justify-between gap-3 mb-4">
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">One from each shelf</h2>
              <p className="text-sm text-muted-foreground font-body">
                {`${buyable.length} packages on sale, $8.99 each${inProgress.length > 0 ? `, and ${inProgress.length} more rebuilt and waiting to be listed` : ''}.`}
              </p>
            </div>
            <Link to="/care-packages/store/" className="text-sm font-body font-semibold text-secondary hover:underline flex-shrink-0">
              {`See all ${buyable.length} in the store`} &rarr;
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map(pkg => (
              <CarePackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display font-bold text-xl text-foreground mb-4">Built for real keepers</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-5">
                <span className="text-2xl mb-2 block" aria-hidden="true">{f.emoji}</span>
                <h3 className="font-body font-bold text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-lg text-foreground mb-1">Questions before you buy?</h2>
            <p className="text-sm text-muted-foreground font-body">Format, printing, refunds, and how the library works are answered on the FAQ page.</p>
          </div>
          <Link
            to="/care-packages/faq/"
            className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Read the FAQ
          </Link>
        </section>
      </div>
    </div>
  );
}
