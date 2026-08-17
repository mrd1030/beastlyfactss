import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import CarePackagesNav from '@/components/shared/CarePackagesNav';

const TITLE = 'Why We Exist | Beastly Facts Care Packages';
const DESCRIPTION = 'Why the printable Beastly Facts care packages exist: checked numbers over recycled forum advice, and a standard you can keep by the enclosure.';

export default function CarePackagesWhyWeExist() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/care-packages/why-we-exist/" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/care-packages/why-we-exist/" />
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
            <span className="text-3xl mb-2 block" role="img" aria-label="Lightbulb">💡</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Bad care advice is easy to find. Correct advice should be too.
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-xl">
              Anyone who has looked up husbandry numbers for a new pet knows the problem: three forum
              posts, three different temperature ranges, and no way to tell which one is current.
            </p>
          </motion.div>
          <CarePackagesNav />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-3">The actual problem</h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Most animal care information online was not written to help the animal. It was written to
            rank in search, to fill a forum thread, or to move a product. Numbers get copied from site
            to site until nobody can trace where they came from, and by the time they reach a new pet
            owner they are outdated, vague, or just wrong.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            <div className="rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-950/20 p-4">
              <p className="text-[11px] font-body font-bold tracking-wide uppercase text-rose-600 dark:text-rose-400 mb-2">What that looks like</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground font-body">
                <li>Temperature ranges that vary wildly between sources</li>
                <li>Advice with no citation, no version, no way to verify</li>
                <li>Care sheets padded with filler to look thorough</li>
                <li>Critical safety warnings buried under generic tips</li>
              </ul>
            </div>
            <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-4">
              <p className="text-[11px] font-body font-bold tracking-wide uppercase text-secondary mb-2">What we build instead</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground font-body">
                <li>One checked number per target, not a shrug-worthy range</li>
                <li>Sources you could actually go look up</li>
                <li>Only the information that changes an outcome</li>
                <li>Never rules called out where they cannot be missed</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Why the facts side matters too</h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            The wild animal facts on the rest of this site are not just for fun, though they are that
            too. Getting trivia right is the same discipline as getting husbandry right: check it before
            you publish it. If we would not put a number in a care guide without checking it, we do not
            put it in a fact either.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Why it is printable</h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            A browser tab is easy to lose. A tank thermometer does not link back to a website. The care
            packages exist so the standard you found on the site is still there when you are elbow deep
            in a tank setup with no laptop nearby.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="/care-packages/store/" className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity">
              Browse the store
            </Link>
            <Link to="/care-packages/" className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-muted transition-colors">
              Back to care packages
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
