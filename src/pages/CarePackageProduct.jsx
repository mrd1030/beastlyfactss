import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { Check, FileText, RefreshCw, Printer } from 'lucide-react';
import { CARE_PACKAGES } from '@/lib/data/carePackages';
import CarePackagesNav from '@/components/shared/CarePackagesNav';
import CarePackageBuyButton from '@/components/shared/CarePackageBuyButton';
import PageNotFound from '@/lib/PageNotFound';

// One product page per package sold here, at /care-packages/<id>/.
//
// This is the page Gumroad used to host for us, and it has to do the same job:
// cover, price, what is actually inside, which edition you get, and what
// happens when that edition is corrected. Thin is the failure mode to avoid -
// a page that is a cover and a button is one Google has no reason to rank and
// a buyer has no reason to trust.
//
// Only packages with storefront: 'stripe' get one. A Gumroad package's product
// page is still on Gumroad, and an id that is not in the catalog at all is a
// 404, same as any other unknown URL.
const BASE = 'https://beastlyfacts.com';

function formatEditionDate(iso) {
  if (!iso) return '';
  // Parsed as UTC rather than local: a bare YYYY-MM-DD is UTC midnight, which
  // renders as the previous day for anyone west of Greenwich if it goes
  // through the local-time formatter.
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export default function CarePackageProduct() {
  const { packageId } = useParams();
  const pkg = CARE_PACKAGES.find(p => p.id === packageId);

  if (!pkg || pkg.storefront !== 'stripe') {
    return <PageNotFound />;
  }

  const url = `${BASE}/care-packages/${pkg.id}/`;
  const title = `${pkg.name} | Beastly Facts`;
  const description = pkg.blurb;
  const cover = pkg.image || pkg.cover;
  const coverUrl = cover?.startsWith('http') ? cover : `${BASE}${cover || '/assets/og-default.jpg'}`;
  const editionDate = formatEditionDate(pkg.versionDate);
  const amount = pkg.price?.replace(/[^\d.]/g, '') || '';

  // Product schema rather than the site-wide Article shape: this page is a
  // thing for sale, and the offer is what a rich result needs. availability is
  // InStock unconditionally because a PDF cannot run out.
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.name,
    description: pkg.blurb,
    image: coverUrl,
    brand: { '@type': 'Brand', name: 'Beastly Facts' },
    category: 'Pet care guide',
    offers: {
      '@type': 'Offer',
      url,
      price: amount,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Beastly Facts' },
    },
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={coverUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={coverUrl} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav aria-label="Breadcrumb" className="text-xs font-body text-muted-foreground mb-3">
              <Link to="/care-packages/" className="hover:text-foreground hover:underline">Care packages</Link>
              <span className="mx-1.5" aria-hidden="true">/</span>
              <Link to="/care-packages/store/" className="hover:text-foreground hover:underline">Store</Link>
              <span className="mx-1.5" aria-hidden="true">/</span>
              <span className="text-foreground">{pkg.animal}</span>
            </nav>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-start">
              <div className="rounded-2xl overflow-hidden border border-border bg-muted aspect-video">
                {cover ? (
                  <img
                    src={cover}
                    alt={`${pkg.name} cover`}
                    className="w-full h-full object-cover"
                    width="670"
                    height="376"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl" role="img" aria-label={pkg.animal}>
                    {pkg.emoji || '📘'}
                  </div>
                )}
              </div>

              <div>
                <span className="text-[11px] font-body font-bold tracking-wide uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                  {pkg.badge}
                </span>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-3 mb-3">
                  {pkg.name}
                </h1>
                <p className="font-body text-sm text-muted-foreground mb-4">{pkg.blurb}</p>

                <div className="flex flex-wrap items-baseline gap-3 mb-4">
                  <span className="font-display font-bold text-2xl text-foreground">{pkg.price}</span>
                  <span className="text-xs font-body text-muted-foreground">
                    {`One time purchase · ${pkg.pages} page PDF · edition ${pkg.version}${editionDate ? ` · ${editionDate}` : ''}`}
                  </span>
                </div>

                <CarePackageBuyButton pkg={pkg} className="w-full sm:w-auto" />

                <p className="text-xs font-body text-muted-foreground mt-3">
                  Paid through Stripe. The download link arrives on the next page, and it stays in{' '}
                  <Link to="/care-packages/library/" className="underline hover:text-foreground">your library</Link>{' '}
                  for as long as the package exists.
                </p>
              </div>
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
          <h2 className="font-display font-bold text-xl text-foreground mb-3">What this package covers</h2>
          <ul className="space-y-2">
            {pkg.bullets.map(b => (
              <li key={b} className="flex gap-2.5 text-sm text-muted-foreground font-body">
                <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {Array.isArray(pkg.contents) && pkg.contents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-12"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-1">What is inside</h2>
            <p className="text-sm text-muted-foreground font-body mb-4">
              {`The package's own contents page, all ${pkg.pages} pages of it. Nothing here is a teaser for something sold separately.`}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {pkg.contents.map(section => (
                <div key={section.label} className="bg-card border border-border rounded-2xl p-5">
                  <h3 className="font-body font-bold text-sm text-foreground mb-2">{section.label}</h3>
                  <ul className="space-y-1">
                    {section.items.map(item => (
                      <li key={item} className="text-sm text-muted-foreground font-body flex gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
          <h2 className="font-display font-bold text-xl text-foreground mb-4">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-card border border-border rounded-2xl p-5">
              <RefreshCw className="w-5 h-5 text-secondary mb-2" aria-hidden="true" />
              <h3 className="font-body font-bold text-sm text-foreground mb-1">Every corrected edition is free</h3>
              <p className="text-sm text-muted-foreground font-body">
                {`You are buying edition ${pkg.version}. When a correction ships, the file behind your download becomes the new edition and your library shows which one you are holding. Buy once, no upgrade to pay for.`}
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <Printer className="w-5 h-5 text-secondary mb-2" aria-hidden="true" />
              <h3 className="font-body font-bold text-sm text-foreground mb-1">Print what matters</h3>
              <p className="text-sm text-muted-foreground font-body">
                The high-use pages, targets, checklists, routines, and logs, are marked so you can print just those and keep the rest as reference on a phone or tablet.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <FileText className="w-5 h-5 text-secondary mb-2" aria-hidden="true" />
              <h3 className="font-body font-bold text-sm text-foreground mb-1">No link clutter inside</h3>
              <p className="text-sm text-muted-foreground font-body">
                The PDF has no external links and no calls to action back to the site. It is a reference document, not a funnel.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mt-12 bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-display font-bold text-lg text-foreground mb-1">
            {`The free ${pkg.animal.toLowerCase()} guide is still free`}
          </h2>
          <p className="text-sm text-muted-foreground font-body mb-4">
            {`This package is the same research as our ${pkg.animal.toLowerCase()} care guide, reformatted into an offline manual with the checklists, logs, and triage tables the web pages do not carry. Read the free guide first and buy this only if you want it in your hands.`}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/guides/${pkg.id}/`}
              className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-muted transition-colors"
            >
              {`Read the free ${pkg.animal} guide`}
            </Link>
            <Link
              to="/care-packages/faq/"
              className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-muted transition-colors"
            >
              Format, printing and refunds
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8"
        >
          <div>
            <p className="font-display font-bold text-lg text-foreground">{`${pkg.name}, ${pkg.price}`}</p>
            <p className="text-sm text-muted-foreground font-body">
              {`Edition ${pkg.version}${editionDate ? `, published ${editionDate}` : ''}. Not a substitute for a vet.`}
            </p>
          </div>
          <CarePackageBuyButton pkg={pkg} />
        </motion.section>
      </div>
    </div>
  );
}
