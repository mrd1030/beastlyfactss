import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Check, ChevronDown, Download } from 'lucide-react';
import { CARE_PACKAGES } from '@/lib/data/carePackages';
import { getCarePackageCopy } from '@/lib/data/carePackageCopy';
import { getCarePackageTheme, carePackageThemeCss } from '@/lib/data/carePackageThemes';
import CarePackagesNav from '@/components/shared/CarePackagesNav';
import CarePackageBuyButton from '@/components/shared/CarePackageBuyButton';
import CarePackageCard from '@/components/shared/CarePackageCard';
import CarePackagePreviewCarousel from '@/components/shared/CarePackagePreviewCarousel';
import CarePackageComingSoon from '@/pages/CarePackageComingSoon';
import { useCarePackageReveal } from '@/components/shared/CarePackageReveal';
import PageNotFound from '@/lib/PageNotFound';
import '@/styles/care-package-product.css';

// One product page per package sold here, at /care-packages/<id>/.
//
// This is the page Gumroad used to host for us, rebuilt in the shape of the
// nine listings in .gumroad-pages/products/: hero, the care-sheet roulette
// against this guide, six "what's inside" cards, a look-inside carousel, who
// it is for, and a final buy button. What Gumroad never had is kept from the
// first version of this page: the Product schema, the edition line, the free
// guide cross link, and the library sentence.
//
// Three files feed it. carePackages.js has the facts (price, pages, edition,
// contents), carePackageCopy.js has the pitch, carePackageThemes.js has the
// colors. A package with storefront: 'stripe' but no copy entry falls back to
// the catalog's own blurb and bullets, so a half-wired package sells through a
// plain page rather than a broken one.
//
// Only packages with storefront: 'stripe' get one. A Gumroad package's product
// page is still on Gumroad, and an id that is not in the catalog at all is a
// 404, same as any other unknown URL.
const BASE = 'https://beastlyfacts.com';

function formatEditionDate(iso, options) {
  if (!iso) return '';
  // Parsed as UTC rather than local: a bare YYYY-MM-DD is UTC midnight, which
  // renders as the previous day for anyone west of Greenwich if it goes
  // through the local-time formatter.
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { timeZone: 'UTC', ...options });
}

export default function CarePackageProduct() {
  const { packageId } = useParams();
  const pkg = CARE_PACKAGES.find(p => p.id === packageId);
  const rootRef = useRef(null);
  useCarePackageReveal(rootRef);

  // A package that is announced but not built gets the same URL and a
  // different page, so the link in a newsletter or a card never has to change
  // when it goes on sale. Anything else with no storefront here is still a 404.
  if (pkg?.storefront === 'soon') {
    return <CarePackageComingSoon pkg={pkg} />;
  }

  if (!pkg || pkg.storefront !== 'stripe') {
    return <PageNotFound />;
  }

  const copy = getCarePackageCopy(pkg.id);
  const theme = getCarePackageTheme(pkg.id);
  const url = `${BASE}/care-packages/${pkg.id}/`;
  const title = `${pkg.name} | Beastly Facts`;
  const description = pkg.blurb;
  // Two covers. `cover` is the guide hero, landscape, and stays the OG image
  // because link previews want 1.91:1. The hero shows the package's own cover
  // page instead, rendered from the PDF by render-care-package-previews.mjs,
  // as a portrait book: it is the actual product, and the edition badge sits
  // on the thing it describes.
  const cover = pkg.image || pkg.cover;
  const coverUrl = cover?.startsWith('http') ? cover : `${BASE}${cover || '/assets/og-default.jpg'}`;
  const bookCover = `/assets/care-packages/${pkg.id}/cover.jpg`;
  const sampleHref = pkg.samplePages ? `/assets/care-packages/${pkg.id}/sample.pdf` : null;
  // Three other packages for the strip at the bottom: same catalog section
  // first, then the rest of the catalog in its own order. Only packages that
  // can actually be bought somewhere.
  const related = CARE_PACKAGES
    .filter(p => p.id !== pkg.id && (p.storefront === 'stripe' || p.status === 'live'))
    .sort((a, b) => Number(b.badge === pkg.badge) - Number(a.badge === pkg.badge))
    .slice(0, 3);
  const editionDate = formatEditionDate(pkg.versionDate, { year: 'numeric', month: 'long', day: 'numeric' });
  const editionShort = formatEditionDate(pkg.versionDate, { year: 'numeric', month: 'short' });
  const amount = pkg.price?.replace(/[^\d.]/g, '') || '';
  const animalLower = pkg.animal.toLowerCase();

  const hook = copy?.hook || pkg.name;
  const heroParagraph = copy?.heroParagraph || pkg.blurb;
  const heroTicks = copy?.heroTicks || [`${pkg.pages} pages, print or view`, 'Beginner and intermediate friendly', 'No external links inside the PDF'];
  const inside = copy?.inside || pkg.bullets.map(b => ({ emoji: '📄', title: b.split(',')[0], line: b }));
  const previews = copy?.previews || [];

  // Product schema rather than the site-wide Article shape: this page is a
  // thing for sale, and the offer is what a rich result needs. availability is
  // InStock unconditionally because a PDF cannot run out.
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.name,
    description: pkg.blurb,
    image: [`${BASE}${bookCover}`, coverUrl],
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
    <div ref={rootRef} className={`cp-page cp-theme-${pkg.id} min-h-screen font-body antialiased`}>
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
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>
      {/* The theme's variables, scoped to this wrapper. A style element in the
          tree rather than in Helmet so it prerenders with the page and never
          waits on hydration. */}
      <style dangerouslySetInnerHTML={{ __html: carePackageThemeCss(pkg.id) }} />

      {/* HERO */}
      <header className="cp-hero">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs mb-6">
              <Link to="/care-packages/" className="cp-hero-link">Care packages</Link>
              <span className="mx-1.5 opacity-60" aria-hidden="true">/</span>
              <Link to="/care-packages/store/" className="cp-hero-link">Store</Link>
              <span className="mx-1.5 opacity-60" aria-hidden="true">/</span>
              <span>{pkg.animal}</span>
            </nav>
            <p className="cp-hero-eyebrow inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4">
              {theme.motion?.eyebrowIcon && (
                <span
                  className="cp-hero-eyebrow-icon"
                  style={theme.motion.eyebrowMotion ? { animation: theme.motion.eyebrowMotion } : undefined}
                  aria-hidden="true"
                >
                  {theme.motion.eyebrowIcon}
                </span>
              )}
              Printable owner manual
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-5 drop-shadow-sm">
              {hook}
            </h1>
            <p className="text-lg opacity-90 max-w-lg mb-6">{heroParagraph}</p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <CarePackageBuyButton
                pkg={pkg}
                appearance="bare"
                className="cp-hero-btn px-6 py-3.5 text-base transition-transform"
                label={`Get the guide, ${pkg.price}`}
              />
              <span className="text-sm opacity-85">One time purchase · Instant PDF download</span>
            </div>
            {sampleHref && (
              <p className="-mt-5 mb-8 text-sm opacity-85">
                {'Not sure yet? '}
                <a href={sampleHref} download className="cp-hero-link underline opacity-100 inline-flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  {`Download the first ${pkg.samplePages} pages free`}
                </a>
                {', contents page included.'}
              </p>
            )}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-85">
              {heroTicks.map(t => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative cp-reveal flex justify-center lg:justify-end">
            <div className="relative w-[68%] sm:w-[52%] lg:w-[64%] max-w-sm">
              <div
                className="cp-cover cp-book rounded-lg overflow-hidden"
                style={theme.motion?.coverMotion ? { animation: theme.motion.coverMotion } : undefined}
              >
                <img
                  src={bookCover}
                  alt={`${pkg.name}, the cover page of the printable PDF`}
                  className="w-full h-auto block"
                  width="1224"
                  height="1584"
                  fetchPriority="high"
                />
              </div>
              <div className="cp-edition-badge absolute -bottom-4 -left-6 sm:-left-8 rounded-2xl shadow-xl px-4 py-3">
                <p className="font-display font-bold text-xl leading-none">{`Edition ${pkg.version}`}</p>
                <p className="cp-accent-text text-xs mt-1">{editionShort ? `${editionShort} · ${pkg.pages} pages` : `${pkg.pages} pages`}</p>
              </div>
            </div>
          </div>
        </div>

        <svg className="cp-wave relative block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0,20 C220,58 460,4 720,28 C980,52 1220,10 1440,32 L1440,60 L0,60 Z" />
        </svg>
      </header>

      <main>
        {/* CARE-SHEET ROULETTE vs THIS GUIDE */}
        {copy?.roulette && copy?.answers && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
            <div className="cp-reveal grid gap-6 sm:grid-cols-2">
              <div className="cp-roulette rounded-2xl p-6">
                <p className="cp-label mb-3">Care-sheet roulette</p>
                <ul className="space-y-2.5 text-sm">
                  {copy.roulette.map(r => <li key={r}>{r}</li>)}
                </ul>
              </div>
              <div className="cp-answers rounded-2xl p-6">
                <p className="cp-label mb-3">This guide</p>
                <ul className="space-y-2.5 text-sm">
                  {copy.answers.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* WHAT'S INSIDE */}
        <section className="cp-band py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="cp-reveal mb-10 max-w-xl">
              <p className="cp-label cp-accent-text mb-2">{`What's inside · ${pkg.pages} pages`}</p>
              <h2 className="font-display font-bold text-3xl tracking-tight">Everything from first setup to daily routine.</h2>
            </div>
            <div className="cp-reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {inside.map(card => (
                <div key={card.title} className="cp-card rounded-xl p-5">
                  <p className="text-2xl mb-2" aria-hidden="true">{card.emoji}</p>
                  <h3 className="font-bold mb-1">{card.title}</h3>
                  <p className="cp-muted text-sm">{card.line}</p>
                </div>
              ))}
            </div>

            {Array.isArray(pkg.contents) && pkg.contents.length > 0 && (
              <details className="cp-contents cp-reveal cp-card rounded-xl mt-6 group">
                <summary className="flex items-center justify-between gap-4 p-5">
                  <span>
                    <span className="font-bold block">Every page, section by section</span>
                    <span className="cp-muted text-sm">{`The package's own contents page, all ${pkg.pages} pages of it. Nothing here is a teaser for something sold separately.`}</span>
                  </span>
                  <ChevronDown className="cp-contents-chevron w-5 h-5 flex-shrink-0" aria-hidden="true" />
                </summary>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 px-5 pb-5">
                  {pkg.contents.map(section => (
                    <div key={section.label}>
                      <h3 className="font-bold text-sm mb-2">{section.label}</h3>
                      <ul className="space-y-1">
                        {section.items.map(item => (
                          <li key={item} className="cp-muted text-sm flex gap-2">
                            <span className="cp-bullet mt-2 w-1 h-1 rounded-full flex-shrink-0" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        </section>

        {/* LOOK INSIDE */}
        {previews.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
            <div className="cp-reveal mb-8 max-w-xl">
              <p className="cp-label cp-accent-text mb-2">Take a look inside</p>
              <h2 className="font-display font-bold text-3xl tracking-tight">{copy?.previewHeadline || 'A look at the pages.'}</h2>
            </div>
            <div className="cp-reveal">
              <CarePackagePreviewCarousel packageId={pkg.id} packageName={pkg.name} previews={previews} />
              <p className="cp-muted text-sm mt-6 text-center">Click a page to see it at full size. The contents page is complete; the others fade out where the paid content starts.</p>
              {sampleHref && (
                <div className="cp-card rounded-2xl p-5 mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-bold">{`The first ${pkg.samplePages} pages, free`}</p>
                    <p className="cp-muted text-sm">{`Pages 1 to ${pkg.samplePages} as a PDF: the contents page and the introduction, so you can see every page the full package covers. None of the care guide itself.`}</p>
                  </div>
                  <a href={sampleHref} download className="cp-outline-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-colors flex-shrink-0">
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download the sample
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* WHO IT'S FOR */}
        {copy?.whoFor && copy?.whatNot && (
          <section className="cp-panel py-16">
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 grid gap-8 sm:grid-cols-2">
              <div className="cp-reveal">
                <h2 className="font-display font-bold text-2xl mb-3">Who this is for</h2>
                <ul className="cp-panel-muted space-y-2 text-sm">
                  {copy.whoFor.map(w => <li key={w}>{w}</li>)}
                </ul>
              </div>
              <div className="cp-reveal">
                <h2 className="font-display font-bold text-2xl mb-3">What it's not</h2>
                <ul className="cp-panel-muted space-y-2 text-sm">
                  {copy.whatNot.map(w => <li key={w}>{w}</li>)}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section id="buy" className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-12 text-center">
          <p className="cp-label cp-accent-text mb-3">Ready when you are</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4">{pkg.name}</h2>
          <p className="cp-muted mb-8 max-w-md mx-auto">
            {`${pkg.pages} pages. PDF. Print it or keep it open on your phone, tablet, or computer. Yours the moment you check out.`}
          </p>
          <CarePackageBuyButton
            pkg={pkg}
            appearance="bare"
            className="cp-cta-btn px-8 py-4 text-lg transition-transform"
            label={`I want this, ${pkg.price}`}
          />
          <p className="cp-muted mt-4 text-xs max-w-lg mx-auto">
            {`Edition ${pkg.version}${editionDate ? `, published ${editionDate}` : ''}. Paid through Stripe. The download link arrives on the next page, and it stays in `}
            <Link to="/care-packages/library/" className="underline">your library</Link>
            {' for as long as the package exists, always as the current edition. Not a substitute for a vet.'}
          </p>
        </section>

        {/* MORE PACKAGES */}
        {related.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
            <div className="cp-reveal">
              <p className="cp-label cp-accent-text mb-2">More care packages</p>
              <h2 className="font-display font-bold text-2xl tracking-tight mb-5">Same format, other animals.</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map(p => <CarePackageCard key={p.id} pkg={p} />)}
              </div>
              <p className="cp-muted text-sm mt-4">
                <Link to="/care-packages/store/" className="underline">Every package in the store</Link>
              </p>
            </div>
          </section>
        )}

        {/* FREE GUIDE, FAQ, NAV */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
          <div className="cp-card rounded-2xl p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg mb-1">{`The free ${animalLower} guide is still free`}</h2>
            <p className="cp-muted text-sm mb-4">
              {`This package is the same research as our ${animalLower} care guide, reformatted into an offline manual with the checklists, logs, and triage tables the web pages do not carry. Read the free guide first and buy this only if you want it in your hands.`}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to={`/guides/${pkg.id}/`} className="cp-outline-btn px-5 py-2.5 rounded-full font-bold text-sm transition-colors">
                {`Read the free ${pkg.animal} guide`}
              </Link>
              <Link to="/care-packages/faq/" className="cp-outline-btn px-5 py-2.5 rounded-full font-bold text-sm transition-colors">
                Format, printing and refunds
              </Link>
            </div>
          </div>
          <div className="cp-rule border-t mt-10 pt-2">
            <CarePackagesNav />
          </div>
        </section>
      </main>
    </div>
  );
}
