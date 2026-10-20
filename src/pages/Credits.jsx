import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';
import { Camera as BadgeIcon } from 'lucide-react';
import { PageBadge } from '@/components/shared/IconChip';
import { PHOTO_CREDITS } from '@/lib/data/photoCredits';

// The public credits page the CC BY and CC BY-SA licenses call for. Every
// photo listed here also carries its credit where it is shown (the fact
// lightbox, the Beastfile that uses it); this page is the one place that
// lists them all. Noindex like /terms/: it is for readers and for the
// photographers, not for search.
const linkClass = 'text-secondary hover:underline font-medium';

export default function Credits() {
  const credits = Object.entries(PHOTO_CREDITS);
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Photo Credits | Beastly Facts</title>
        <meta name="description" content="Credits for the Creative Commons photos on Beastly Facts, with the photographer, the license and a link to each original on Wikimedia Commons." />
        <link rel="canonical" href="https://beastlyfacts.com/credits/" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <PageBadge icon={BadgeIcon} color="teal" />
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">Photo Credits</h1>
            <p className="text-xs text-muted-foreground font-body">Last updated: October 20, 2026</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="text-sm text-muted-foreground font-body leading-relaxed space-y-3 mb-8">
            <p>Many images on Beastly Facts were created for the site with AI tools: created with Grok, or with Adobe Firefly. Some fact-card photos are licensed from Adobe Stock contributors (stock.adobe.com), and we're replacing those with our own over time.</p>
            <p>The photos below came from Wikimedia Commons under Creative Commons licenses that ask for a visible credit, so each one is credited where it appears and listed here with its photographer, its license and a link to the original.</p>
          </div>

          <ul className="divide-y divide-border/60 border-y border-border/60">
            {credits.map(([path, c]) => (
              <li key={path} className="py-3 text-sm font-body leading-relaxed">
                <span className="font-bold text-foreground">{c.subject}</span>
                <span className="text-muted-foreground">
                  {' '}by {c.author},{' '}
                  <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>{c.license}</a>
                  {' '}(<a href={c.source} target="_blank" rel="noopener noreferrer" className={linkClass}>original on Wikimedia Commons</a>)
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
