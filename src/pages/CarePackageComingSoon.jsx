import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import CarePackagesNav from '@/components/shared/CarePackagesNav';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';
import { carePackageThemeCss, getCarePackageTheme } from '@/lib/data/carePackageThemes';
import '@/styles/care-package-product.css';

// The landing page for a package that is announced but not written, at the
// same /care-packages/<id>/ URL it will keep once it goes on sale. Rendered by
// CarePackageProduct for any entry with storefront: 'soon'.
//
// It is deliberately not the product page with the buy button hidden. That page
// is built on assets a package that does not exist cannot have: a rendered
// cover page, a sample PDF, six preview images, a contents list. Reusing it
// would mean either shipping broken images or writing placeholder claims about
// a file nobody has made yet, and a pre-launch page that invents a page count
// is a page that lies to the first person who reads it.
//
// So the only product art here is the mock cover below, built from the guide
// hero and the series' own type rather than from a PDF. It is labelled as a
// mockup on the page because it is one.
const BASE = 'https://beastlyfacts.com';

// Every line traceable to the species' own guides, which is the whole point:
// this package will be built from them, so the page can promise their contents
// without inventing anything.
const INSIDE = [
  {
    title: 'The enclosure, sized for a climber',
    line: '18 by 18 by 24 inches as the standard minimum for one adult, vertical because the species is arboreal, and 24x18x24 for a group of two to four.',
  },
  {
    title: 'Humidity that dips instead of sitting high',
    line: 'A 50 to 60% baseline with misting spikes to 70 to 80%, then allowed to fall back. Constant unbroken humidity is what invites the bacterial and red-leg problems.',
  },
  {
    title: 'The water that is safe to mist with',
    line: 'Dechlorinated tap or spring water only. Distilled and reverse osmosis water are not electrolyte balanced and can kill an amphibian outright.',
  },
  {
    title: 'Obesity read off the tympanum',
    line: 'This is the signature risk for a frog nicknamed dumpy. The line is fat visibly bulging over the eardrum and armpits, not general roundness.',
  },
  {
    title: 'Health triage worth having before you need it',
    line: 'Chytridiomycosis, red-leg syndrome, bacterial and skin infections, and metabolic bone disease, each with the husbandry pattern behind it.',
  },
  {
    title: 'The owner tools the series carries',
    line: 'Setup checklist, budget and shopping list, first 30 days, symptom quick reference, a pet-sitter sheet, and the daily and weekly routine.',
  },
];

// The free guides this package will be built from. Linking them is the honest
// thing to do on a page with nothing to sell: everything here is already
// readable for nothing.
const GUIDES = [
  { slug: 'whites-tree-frog-cost-guide', label: 'Cost', line: 'The frog at $20 to $60, a $200 to $400 setup, and $13 to $24 a month after that.' },
  { slug: 'whites-tree-frog-tank-setup-guide', label: 'Tank setup', line: 'The 18x18x24 minimum, the temperature gradient, substrate, UVB, and safe water.' },
  { slug: 'whites-tree-frog-feeding-guide', label: 'Feeding', line: 'What to offer, how often by size and age, gut loading, dusting, and the ridge test.' },
  { slug: 'whites-tree-frog-handling-guide', label: 'Handling', line: 'Why plain water beats soap, when gloves are safer, and how long a session runs.' },
  { slug: 'whites-tree-frog-health-issues-guide', label: 'Health issues', line: 'Obesity, chytridiomycosis, red-leg syndrome, and metabolic bone disease.' },
  { slug: 'whites-tree-frog-enrichment-guide', label: 'Enrichment', line: 'Layered planting, broad perches near the top, and the one rule for group housing.' },
];

export default function CarePackageComingSoon({ pkg }) {
  const theme = getCarePackageTheme(pkg.id);
  const url = `${BASE}/care-packages/${pkg.id}/`;
  const title = `${pkg.name}, coming soon | Beastly Facts`;
  const description = `The printable ${pkg.animal} owner manual is in progress. Read the free guides it is being built from, and get told when it lands.`;
  const coverUrl = `${BASE}${pkg.cover}`;

  return (
    <div className={`cp-page cp-theme-${pkg.id} min-h-screen font-body antialiased`}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={coverUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* No Product schema. There is no product, no price to quote and no
            availability to claim, and marking an unbuilt file as InStock is
            the kind of thing that earns a manual action. */}
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: carePackageThemeCss(pkg.id) }} />

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
              In progress
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-5 drop-shadow-sm">
              {"The frog whose biggest risk is being fed too well."}
            </h1>
            <p className="text-lg opacity-90 max-w-lg mb-6">
              {"A White's tree frog is forgiving about almost everything except the two things people get wrong: humidity that never drops, and a frog quietly eaten into obesity. The printable manual for both is being written now."}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#notify" className="cp-hero-btn px-6 py-3.5 text-base transition-transform inline-flex items-center gap-2">
                Tell me when it lands
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <span className="text-sm opacity-85">{"Not on sale yet · the free guides are"}</span>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-85">
              {['Built from the guides below', 'Print or view, like the other 14', 'No external links inside the PDF'].map(t => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* The mock cover. Not a render of a PDF, because there is no PDF:
              the guide photo under the series' own type, so the page shows
              what is coming without pretending the file exists. */}
          <div className="relative flex flex-col items-center lg:items-end gap-3">
            <div className="relative w-[68%] sm:w-[52%] lg:w-[64%] max-w-sm">
              <div
                className="cp-cover cp-book rounded-lg overflow-hidden"
                style={theme.motion?.coverMotion ? { animation: theme.motion.coverMotion } : undefined}
              >
                <div
                  className="relative w-full flex flex-col text-white"
                  style={{ aspectRatio: '1224 / 1584', background: 'linear-gradient(160deg, #10281c 0%, #18402c 52%, #24593c 100%)' }}
                >
                  <div className="px-[8%] pt-[9%]">
                    <p className="text-[0.55rem] sm:text-[0.62rem] font-bold tracking-[0.22em] uppercase" style={{ color: '#f2c265' }}>
                      Beastly Facts
                    </p>
                    <p className="text-[0.5rem] sm:text-[0.56rem] tracking-[0.16em] uppercase opacity-70 mt-1">
                      Printable owner manual
                    </p>
                  </div>
                  <div className="px-[8%] mt-[6%]">
                    <h2 className="font-display font-bold leading-[1.05] text-[1.35rem] sm:text-[1.7rem]">
                      {"White's Tree Frog"}
                    </h2>
                    <p className="font-display font-bold leading-tight text-[0.95rem] sm:text-[1.15rem] opacity-90">
                      Care Package
                    </p>
                    <span className="block w-10 h-[2px] mt-[5%]" style={{ background: '#f2c265' }} aria-hidden="true" />
                  </div>
                  <div className="mt-[7%] mx-[8%] rounded-md overflow-hidden border" style={{ borderColor: 'rgba(242,194,101,0.35)' }}>
                    <img
                      src={pkg.cover}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: '4 / 3' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <ul className="px-[8%] mt-[7%] space-y-[3%] text-[0.5rem] sm:text-[0.58rem] leading-snug opacity-90">
                    <li>Housing, heat and humidity targets</li>
                    <li>Feeding, and the obesity check</li>
                    <li>Health triage and red flags</li>
                    <li>Checklists, logs and routines</li>
                  </ul>
                  <div className="mt-auto px-[8%] pb-[8%]">
                    <span className="block w-full h-px mb-[4%]" style={{ background: 'rgba(242,194,101,0.3)' }} aria-hidden="true" />
                    <p className="text-[0.48rem] sm:text-[0.54rem] tracking-[0.14em] uppercase opacity-75">
                      Edition 1.0 · in progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs opacity-70">Mockup, not the finished cover</p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <CarePackagesNav />
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-display font-bold text-2xl mb-2">What it will cover</h2>
        <p className="cp-muted text-sm mb-6 max-w-2xl">
          Every line below is already researched and already on the site. The package is that work, reorganized into something you can print and keep by the enclosure.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {INSIDE.map(item => (
            <div key={item.title} className="cp-card rounded-2xl p-5">
              <h3 className="font-display font-bold text-base mb-1">{item.title}</h3>
              <p className="cp-muted text-sm leading-relaxed">{item.line}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="notify" className="cp-panel scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="font-display font-bold text-2xl mb-2">Want to know when it is ready?</h2>
          <p className="cp-panel-muted text-sm mb-6">
            It goes out in The Critter Digest, the same newsletter the rest of the site uses. No separate list, and no extra email for signing up here.
          </p>
          <div className="max-w-sm mx-auto text-left">
            <BeehiivSubscribe />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="font-display font-bold text-2xl mb-2">Read it free in the meantime</h2>
        <p className="cp-muted text-sm mb-6 max-w-2xl">
          Nothing in the package is being held back from the site. These are the guides it is built from, and they stay free whether you ever buy anything or not.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {GUIDES.map(g => (
            <Link key={g.slug} to={`/blog/${g.slug}/`} className="cp-card rounded-2xl p-4 group flex gap-3 items-start">
              <div className="min-w-0">
                <p className="font-body font-bold text-sm group-hover:underline">{g.label}</p>
                <p className="cp-muted text-xs leading-relaxed mt-0.5">{g.line}</p>
              </div>
              <ChevronRight className="cp-arrow w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="cp-muted text-sm mt-6">
          {'Or start at the '}
          <Link to={`/guides/${pkg.id}/`} className="cp-accent-text font-semibold underline">
            {`free ${pkg.animal} care guide`}
          </Link>
          {'. The other fourteen packages are in the '}
          <Link to="/care-packages/store/" className="cp-accent-text font-semibold underline">store</Link>
          {'.'}
        </p>
      </section>
    </div>
  );
}
