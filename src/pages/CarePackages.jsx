import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { CARE_PACKAGES } from '@/lib/data/carePackages';
import CarePackagesNav from '@/components/shared/CarePackagesNav';
import CarePackageCard from '@/components/shared/CarePackageCard';

const TITLE = 'Printable Care Packages | Beastly Facts';
const DESCRIPTION = 'Printable PDF owner manuals for reptiles, birds, fish, and small mammals. Same research standards as our free guides, formatted to keep by the enclosure.';

const FEATURES = [
  { emoji: '🖨️', title: 'Print what matters', body: 'Temperature targets, shopping lists, first-30-days plans, and daily routines designed to live near the habitat.' },
  { emoji: '⚠️', title: 'Clear Never rules', body: 'Safety-critical mistakes are called out plainly so common beginner errors are harder to miss.' },
  { emoji: '📴', title: 'Offline and focused', body: 'No external link clutter in the packages. Just the standards, triage notes, and tools.' },
];

export default function CarePackages() {
  const live = CARE_PACKAGES.filter(pkg => pkg.status === 'live');
  const comingSoon = CARE_PACKAGES.filter(pkg => pkg.status === 'coming-soon');

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
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Printer">🖨️</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Clear husbandry standards for animals you actually keep.
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-xl">
              These printable care packages turn our research-backed guides into offline owner manuals:
              setup targets, health triage, checklists, and routines you can keep by the enclosure.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-xs font-body text-muted-foreground">
              <span>Beginner to intermediate</span>
              <span>Print-first tools</span>
              <span>No fluff, no external link clutter</span>
            </div>
          </motion.div>
          <CarePackagesNav />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4"
        >
          <div className="flex items-end justify-between gap-3 mb-4">
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">Care packages</h2>
              <p className="text-sm text-muted-foreground font-body">Opens the product page in a new tab.</p>
            </div>
            <Link to="/care-packages/store/" className="text-sm font-body font-semibold text-secondary hover:underline flex-shrink-0">
              View full store &rarr;
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {live.map(pkg => (
              <CarePackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </motion.section>

        {comingSoon.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-10"
          >
            <div className="mb-4">
              <h2 className="font-display font-bold text-xl text-foreground">Coming soon</h2>
              <p className="text-sm text-muted-foreground font-body">In production now - not purchasable yet.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comingSoon.map(pkg => (
                <CarePackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-12"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-4">Built for real keepers</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-5">
                <span className="text-2xl mb-2 block" aria-hidden="true">{f.emoji}</span>
                <h3 className="font-body font-bold text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{f.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h2 className="font-display font-bold text-lg text-foreground mb-1">Curious why these exist?</h2>
            <p className="text-sm text-muted-foreground font-body">The reasoning behind turning free guides into printable manuals.</p>
          </div>
          <Link
            to="/care-packages/why-we-exist/"
            className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Why We Exist
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
