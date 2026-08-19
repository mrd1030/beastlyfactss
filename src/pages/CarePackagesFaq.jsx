import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import CarePackagesNav from '@/components/shared/CarePackagesNav';

const TITLE = 'Care Package FAQ | Beastly Facts';
const DESCRIPTION = 'Answers about format, printing, refunds, and updates for the Beastly Facts printable care packages.';

const FAQS = [
  {
    q: 'What format are the care packages in?',
    a: 'Every package is a PDF. Print the whole thing, print just the high-use pages, or keep it on a tablet or phone next to the enclosure.',
  },
  {
    q: 'How long are they?',
    a: "Each package runs 15 to 23 pages depending on species. Every one covers setup, diet, health red flags, and an owner routine - the exact page count is listed on that package's card in the store.",
  },
  {
    q: 'Is this a subscription?',
    a: 'No. Each package is a one time purchase, $8.99, yours to keep. No recurring charge.',
  },
  {
    q: 'Do these replace the free guides on the rest of the site?',
    a: 'No. They are the same research and the same standards, reformatted into an offline manual. The site stays free. The packages exist for when you want a printable, all in one reference.',
  },
  {
    q: 'What if a package gets updated later?',
    a: 'If a package is revised, the file behind your purchase updates too. You can always re-download the current version from your Gumroad library.',
  },
  {
    q: 'What if it is not what I expected?',
    a: 'Reach out through Gumroad and we will sort it out. These are small, honest products, not something we want you stuck with if it genuinely does not fit your situation.',
  },
  {
    q: 'Are these a substitute for a vet?',
    a: "No. Each package is a husbandry reference for day to day care, not a substitute for a vet who is experienced with your pet's species. For anything urgent or health related, a vet is always the right call.",
  },
  {
    q: 'Do I need to already know how to care for this animal?',
    a: 'No. Each package is written for beginner and intermediate keepers, with a quick species profile up front and a first 30 days checklist to get set up correctly from day one.',
  },
];

export default function CarePackagesFaq() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/care-packages/faq/" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/care-packages/faq/" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Question mark">❓</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Questions before you buy.
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-xl">
              Straight answers about format, printing, and what happens after checkout.
            </p>
          </motion.div>
          <CarePackagesNav />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          {FAQS.map(f => (
            <details key={f.q} className="group bg-card border border-border rounded-2xl overflow-hidden">
              <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-body font-bold text-sm text-foreground">
                {f.q}
                <span className="text-secondary text-lg leading-none flex-shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm text-muted-foreground font-body leading-relaxed">{f.a}</p>
            </details>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h2 className="font-display font-bold text-lg text-foreground mb-1">Still have a question?</h2>
            <p className="text-sm text-muted-foreground font-body">Browse the packages themselves, each product page has the full breakdown.</p>
          </div>
          <Link
            to="/care-packages/store/"
            className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Browse the store
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
