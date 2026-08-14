import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { CARE_PACKAGES } from '@/lib/data/carePackages';
import CarePackagesNav from '@/components/shared/CarePackagesNav';
import CarePackageCard from '@/components/shared/CarePackageCard';

const TITLE = 'Care Package Store | Beastly Facts';
const DESCRIPTION = 'Every Beastly Facts printable care package in one place - bearded dragon, leopard gecko, and goldfish owner manuals, $8.99 each.';

const HOW_IT_WORKS = [
  { title: 'Print-first pages', body: 'The high-use tools, targets, shopping lists, and routines, are marked so you can print just those and keep the rest as reference.' },
  { title: 'Built for real use', body: 'Bold Never rules call out the mistakes that cause the most harm. No external links or website CTAs inside the document itself.' },
  { title: 'Not a vet replacement', body: "Each package is a husbandry reference, not a substitute for a vet familiar with your pet's species." },
];

export default function CarePackagesStore() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/care-packages/store/" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/care-packages/store/" />
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
            <span className="text-3xl mb-2 block" role="img" aria-label="Shopping bag">🛍️</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Every care package, in one place.
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-xl">
              Printable PDF owner manuals built from the same research standards as the rest of the site.
              Each link opens the product page in a new tab, so you keep your spot here.
            </p>
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
          <div className="mb-4">
            <h2 className="font-display font-bold text-xl text-foreground">Care packages</h2>
            <p className="text-sm text-muted-foreground font-body">3 packages, $8.99 each. One time purchase, yours to keep.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {CARE_PACKAGES.map(pkg => (
              <CarePackageCard key={pkg.id} pkg={pkg} variant="full" />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-12"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-1">How every package works</h2>
          <p className="text-sm text-muted-foreground font-body mb-4">Same format across the catalog, so you know what you're getting.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {HOW_IT_WORKS.map(h => (
              <div key={h.title} className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-body font-bold text-sm text-foreground mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{h.body}</p>
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
            <h2 className="font-display font-bold text-lg text-foreground mb-1">Questions before you buy?</h2>
            <p className="text-sm text-muted-foreground font-body">Format, printing, and refunds are answered on the FAQ page.</p>
          </div>
          <Link
            to="/care-packages/faq/"
            className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-muted transition-colors flex-shrink-0"
          >
            Read the FAQ
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
