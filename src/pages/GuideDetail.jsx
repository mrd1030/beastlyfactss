import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ArrowLeft, Printer, Check, ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { allGuides } from '@/lib/data/guides';
import { encyclopediaAnimals, difficultyColor } from '@/lib/data/encyclopedia';
import { firsthandNote } from '@/lib/data/firsthand';
import { facts } from '@/lib/data/facts';
import { getRelatedFacts } from '@/lib/utils/matchAnimal';
import { relatedPosts } from '@/lib/relatedPosts';
import { getRelatedArticleSlugs } from '@/lib/data/relatedArticles';
import DeepDiveList from '@/components/shared/DeepDiveList';
import { CARE_PACKAGES } from '@/lib/data/carePackages';
import { truncateDescription } from '@/lib/utils/truncate';
import { DifficultyLegend } from '@/components/shared/DifficultyLegend';
import SaveButton from '@/components/shared/SaveButton';
import TableOfContents from '@/components/blog/TableOfContents';
import HeroImage from '@/components/shared/HeroImage';
import CostBuilder from '@/components/guides/CostBuilder';
import { IMAGE_DIMENSIONS } from '@/lib/data/imageDimensions';
import { seriesForSlug, chroniclesPath } from '@/lib/chronicles';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';

const sectionMeta = [
  { key: 'housing',    icon: '🏠', label: 'Housing & Setup' },
  { key: 'diet',       icon: '🥗', label: 'Diet & Feeding' },
  { key: 'enrichment', icon: '🎮', label: 'Enrichment & Handling' },
  { key: 'health',     icon: '💊', label: 'Health & Common Issues' },
];

export default function GuideDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const guide = allGuides.find(g => g.id === id);
  const encAnimal = encyclopediaAnimals.find(a => a.guideId === id);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const legendTriggerRef = useRef(null);
  const legendModalRef = useRef(null);
  const contentRef = useRef(null);

  // Two hub shapes (docs/RULES.md, Hubs). A router hub (layout: 'router')
  // carries a first-week card of numbers copied from its deep dives, an
  // emergency card, one routing line per deep dive, a buy list without
  // prices, and three copied FAQs; the deep dives are the source of every
  // figure. The legacy shape is the old full care sheet (housing, diet,
  // enrichment, health, checklist, cost builder, FAQ) and still renders for
  // every species that has not been reconciled yet.
  const isRouter = guide?.layout === 'router';
  const titleOf = (slug) => relatedPosts.find(p => p._id === slug)?.title || slug;
  // The first-week rows cite their source as a short tag ("Feeding guide")
  // rather than the full article title, which runs to a line on its own.
  const SHORT_LABELS = { 'cost-guide': 'Cost guide', 'tank-setup-guide': 'Setup guide', 'feeding-guide': 'Feeding guide', 'health-issues-guide': 'Health guide', 'handling-guide': 'Handling guide', 'enrichment-guide': 'Enrichment guide', 'legal-guide': 'Legal guide', 'growth-weight-checks-guide': 'Growth guide', 'sexing-growth-body-condition-guide': 'Body condition guide', 'shopping-list': 'Shopping list', 'temperature-guide': 'Temperature guide', 'reptile-quarantine-guide': 'Quarantine guide', 'reptile-shedding-complete-guide': 'Shedding guide', 'reptile-salmonella-hygiene-guide': 'Hygiene guide', 'reptile-emergency-plan-guide': 'Emergency plan', 'small-mammal-temperature-heat-stress-guide': 'Heat and cold guide', 'small-mammal-grooming-nails-molting-guide': 'Grooming guide', 'small-mammal-vet-visits-and-travel-guide': 'Vet trips guide', 'tank-size-bowl-myth': 'Bowl myth guide', 'quarantine-and-treatment-guide': 'Quarantine guide', 'power-outage-and-transport-guide': 'Power outage guide', 'water-parameters-guide': 'Water guide', 'cycling-guide': 'Cycling guide', 'humidity-guide': 'Humidity guide', 'safe-plants-guide': 'Safe plants guide', 'bird-quarantine-guide': 'Quarantine guide', 'bird-emergency-travel-guide': 'Emergency plan', 'cere-color-guide': 'Cere color guide' };
  const shortLabel = (slug) => {
    const hit = Object.keys(SHORT_LABELS).find(k => slug.endsWith(`-${k}`));
    return hit ? SHORT_LABELS[hit] : titleOf(slug).split(':')[0];
  };

  const handleBack = () => {
    const returnTo = location.state?.returnTo;
    if (returnTo) {
      navigate(returnTo);
      return;
    }

    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate('/guides/');
  };

  // Same split as the encyclopedia page: a legal guide gets its own card rather
  // than sitting in the deep-dive list, because it answers a different question
  // from the husbandry articles around it.
  const allRelatedArticles = guide
    ? getRelatedArticleSlugs(guide.id, relatedPosts).map(slug => relatedPosts.find(p => p._id === slug)).filter(Boolean)
    : [];
  const legalArticles = allRelatedArticles.filter(a => a.category === 'Legal');
  const relatedArticles = allRelatedArticles.filter(a => a.category !== 'Legal');

  const relatedFacts = guide ? getRelatedFacts(guide.name, facts) : [];
  // Only 3 animals have a printable package right now (testing setup before
  // more get made) - undefined for everything else, so the sidebar card below
  // just doesn't render.
  const carePackage = guide ? CARE_PACKAGES.find(p => p.id === guide.id) : null;

  // Modal keyboard handling: Escape closes, Tab is trapped inside, and focus
  // returns to the trigger button on close.
  useEffect(() => {
    if (!isLegendOpen) return;

    const modal = legendModalRef.current;
    const focusables = modal
      ? modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      : [];
    if (focusables.length) focusables[0].focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLegendOpen(false);
        return;
      }
      if (e.key === 'Tab' && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      legendTriggerRef.current?.focus();
    };
  }, [isLegendOpen]);

  // The print icon prints two free cards and nothing else: the emergency
  // card (the health guide's call-the-vet list) and the setup checklist (the
  // buy list plus the first-week numbers). The full care sheet is the paid
  // care package (docs/STOREFRONT.md), so the old print-the-whole-guide
  // modal is gone and the button only appears once a species has an
  // emergency card, which only router hubs carry.
  const canPrintCards = !!(guide?.emergencyCard && guide?.firstWeek);
  const handlePrintCards = () => {
    const esc = (v) => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const card = guide.emergencyCard;
    const rows = guide.firstWeek?.rows || [];
    const buy = guide.buyList || [];
    const packageLine = carePackage
      ? `${esc(carePackage.name)}: ${carePackage.pages} pages, PDF, ${esc(carePackage.price)}${carePackage.status === 'live' ? '' : ', listing soon'}, at beastlyfacts.com/care-packages/`
      : '';
    const footer = `<div class="footer">Free from BeastlyFacts.com &bull; ${new Date().toLocaleDateString()}${packageLine ? ' &bull; ' + packageLine : ''}</div>`;
    const printHTML = `
      <html>
        <head>
          <title>${esc(guide.emoji)} ${esc(guide.name)} care cards</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; padding: 28px 36px; line-height: 1.55; color: #222; max-width: 760px; margin: 0 auto; }
            .card { page-break-after: always; break-after: page; }
            .card:last-child { page-break-after: auto; break-after: auto; }
            h1 { font-size: 22px; margin: 0 0 2px; }
            h2 { font-size: 15px; margin: 22px 0 8px; border-bottom: 1.5px solid #eee; padding-bottom: 5px; }
            .sub { color: #555; font-size: 13px; margin: 0 0 14px; }
            ul { padding-left: 20px; margin: 0 0 14px; font-size: 14px; }
            li { margin-bottom: 5px; }
            .vet { font-size: 13.5px; background: #f8f9fa; border-radius: 10px; padding: 12px 14px; margin: 0 0 16px; }
            .fill { font-size: 13px; line-height: 2.2; margin-bottom: 8px; }
            .fill span { display: inline-block; min-width: 200px; border-bottom: 1px solid #999; margin-left: 6px; }
            .checklist { font-size: 13.5px; line-height: 2; background: #f8f9fa; padding: 14px 18px; border-radius: 10px; }
            table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
            td { padding: 5px 4px; border-bottom: 1px solid #eee; vertical-align: top; }
            td:first-child { font-weight: 600; color: #555; width: 30%; white-space: nowrap; }
            .from { font-size: 11px; color: #777; margin-top: 10px; }
            .footer { margin-top: 26px; font-size: 10.5px; color: #888; border-top: 1px solid #ddd; padding-top: 10px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>${esc(guide.emoji)} ${esc(guide.name)} emergency card</h1>
            <p class="sub">Call the vet now if you see any of these.</p>
            <ul>${card.callNow.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
            ${card.vetLine ? `<p class="vet">${esc(card.vetLine)}</p>` : ''}
            <div class="fill">Vet:<span></span><br>Phone:<span></span><br>Emergency clinic:<span></span></div>
            ${card.source ? `<p class="from">From ${esc(titleOf(card.source))}, beastlyfacts.com/blog/${esc(card.source)}/</p>` : ''}
            ${footer}
          </div>
          <div class="card">
            <h1>${esc(guide.emoji)} ${esc(guide.name)} setup checklist</h1>
            <p class="sub">What to have before the animal arrives, then the first-week numbers.</p>
            <div class="checklist">${buy.map(item => `&#9744;&nbsp; ${esc(item)}`).join('<br>')}</div>
            <h2>First week numbers</h2>
            <table>${rows.map(r => `<tr><td>${esc(r.label)}</td><td>${esc(r.value)}</td></tr>`).join('')}</table>
            ${footer}
          </div>
        </body>
      </html>
    `;

    const w = window.open('', '_blank');
    if (!w) return; // popup blocked
    w.document.write(printHTML);
    w.document.close();
    w.print();
  };

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Helmet>
          <title>Guide Not Found | Beastly Facts</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-center">
          <span className="text-4xl block mb-3">🔍</span>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">Guide not found</h2>
          <Link to="/guides/" className="text-secondary text-sm font-body font-semibold hover:underline">
            Browse all guides →
          </Link>
        </div>
      </div>
    );
  }

  const diffClass = difficultyColor[guide.difficulty] || 'text-muted-foreground bg-muted';
  const firsthand = firsthandNote(guide.id);

  const ogImage = guide.image
    ? `https://beastlyfacts.com${guide.image}`
    : 'https://beastlyfacts.com/assets/og-default.jpg';
  // og:image:width/height must match the actual image's real size - Helmet
  // has no way to "unset" a tag it doesn't declare, so leaving these fixed
  // at 1200x630 would silently misdeclare every guide photo's real dimensions.
  const ogImageDims = (guide.image && IMAGE_DIMENSIONS[guide.image]) || { width: 1200, height: 630 };

  const guideTitle = `${guide.name} Care Guide | Beastly Facts`;
  // The "for {name}" suffix must never get clipped by truncation, so trim the
  // variable tagline to fit the remaining budget instead of truncating the
  // whole concatenated string (which was cutting off the animal's name).
  const guideDescription = guide.tagline
    ? (() => {
        const suffix = ` Full care guide covering housing, diet, enrichment, and health for ${guide.name}.`;
        return `${truncateDescription(guide.tagline, 155 - suffix.length)}${suffix}`;
      })()
    : truncateDescription(`Complete care guide for ${guide.name} - covering housing, diet, enrichment, and health. Evidence-based advice for ${guide.petType} keepers.`);
  const canonicalUrl = `https://beastlyfacts.com/guides/${guide.id}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beastlyfacts.com/" },
      { "@type": "ListItem", "position": 2, "name": "Care Guides", "item": "https://beastlyfacts.com/guides/" },
      { "@type": "ListItem", "position": 3, "name": `${guide.name} Care Guide`, "item": canonicalUrl },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Care for a ${guide.name}`,
    "description": guideDescription,
    "image": ogImage,
    "step": isRouter
      ? guide.routes.map(({ slug, line }) => ({
        "@type": "HowToStep",
        "name": titleOf(slug),
        "text": line,
        "url": `https://beastlyfacts.com/blog/${slug}/`,
      }))
      : sectionMeta.map(({ key, label }) => ({
        "@type": "HowToStep",
        "name": label,
        "text": guide.sections[key],
      })),
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{guideTitle}</title>
        <meta name="description" content={guideDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={guideTitle} />
        <meta property="og:description" content={guideDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content={String(ogImageDims.width)} />
        <meta property="og:image:height" content={String(ogImageDims.height)} />
        <meta property="og:image:alt" content={`${guide.name} care guide - Beastly Facts`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={guideTitle} />
        <meta name="twitter:description" content={guideDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": guideTitle,
          "description": guideDescription,
          "image": ogImage,
          "url": canonicalUrl,
          "author": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com" },
          "publisher": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com", "logo": { "@type": "ImageObject", "url": "https://beastlyfacts.com/assets/og-default.jpg" } },
          "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>
      {guide.faqs?.length > 0 && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": guide.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a },
            })),
          })}</script>
        </Helmet>
      )}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        {/* Back */}
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-muted-foreground hover:text-foreground transition-colors p-2 -mx-2 -mt-2 mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Guides
        </button>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-4xl sm:text-5xl flex-shrink-0">{guide.emoji}</span>
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground leading-tight truncate">
                {guide.name}
              </h1>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <SaveButton
                type="guide"
                id={guide.id}
                title={guide.name}
                subtitle={guide.petType}
                url={`/guides/${guide.id}/`}
                iconOnly
              />
              {canPrintCards && (
                <button
                  type="button"
                  onClick={handlePrintCards}
                  title="Print the emergency card and setup checklist"
                  className="flex items-center gap-1.5 text-xs font-body font-semibold text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 p-3 sm:px-3 sm:py-2 rounded-xl transition-colors"
                >
                  <Printer className="w-4 h-4" /> <span className="hidden sm:inline">Print care cards</span>
                </button>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-body mt-2">{guide.petType}</p>
          <div className="flex items-center gap-2 mt-1.5 mb-4">
            <button
              ref={legendTriggerRef}
              onClick={() => setIsLegendOpen(true)}
              className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full hover:opacity-80 transition-all ${diffClass}`}
            >
              {guide.difficulty}
            </button>
          </div>
          <p className="text-base text-foreground font-body italic mb-4">{guide.tagline}</p>
          {firsthand && (
            <p className="text-xs font-body font-semibold text-primary mb-4 flex items-start gap-1.5">
              <span aria-hidden="true">🐾</span>
              <span>{firsthand}</span>
            </p>
          )}

          {/* Mobile-only: the sidebar's TOC (below) sits in a column that
              collapses to the bottom of the page once the grid drops to a
              single column - same issue as Blog.jsx had, same fix. */}
          <div className="lg:hidden">
            <TableOfContents contentRef={contentRef} watch={guide.id} skipText={guide.name} collapsible />
          </div>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-5" ref={contentRef}>

            {/* Fun fact */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3">
              <p className="text-sm font-body text-foreground">
                <span className="font-body font-bold text-secondary">🤓 Did you know?</span>
                {` ${guide.funFact}`}
              </p>
            </div>

            {/* Hero image */}
            {guide.image && (
              <div className="rounded-2xl overflow-hidden aspect-video">
                <HeroImage
                  src={guide.image}
                  alt={`${guide.name} - ${guide.petType}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Router hub: first week, emergency card, routes, buy list */}
            {isRouter && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-2 flex items-center gap-2">
                  🗓️ The first week
                </h2>
                {guide.firstWeek.intro && (
                  <p className="text-sm text-muted-foreground font-body mb-4">{guide.firstWeek.intro}</p>
                )}
                <dl className="divide-y divide-border/60">
                  {guide.firstWeek.rows.map((row) => (
                    <div key={row.label} className="py-2.5 grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-4 gap-y-0.5">
                      <dt className="text-xs font-body font-bold text-foreground uppercase tracking-wide pt-0.5">{row.label}</dt>
                      <dd className="text-sm text-muted-foreground font-body leading-relaxed">
                        {row.value}
                        {row.source && (
                          <Link to={`/blog/${row.source}/`} className="ml-1.5 whitespace-nowrap text-xs font-semibold text-secondary hover:underline">
                            {`${shortLabel(row.source)} →`}
                          </Link>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {isRouter && guide.emergencyCard && (
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-2 flex items-center gap-2">
                  🚨 Emergency card
                </h2>
                <p className="text-sm text-muted-foreground font-body mb-3">Call the vet now if you see any of these.</p>
                <ul className="space-y-1.5 mb-4">
                  {guide.emergencyCard.callNow.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground font-body">
                      <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {guide.emergencyCard.vetLine && (
                  <p className="text-sm text-foreground font-body font-semibold mb-3">{guide.emergencyCard.vetLine}</p>
                )}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-body">
                  {guide.emergencyCard.source && (
                    <Link to={`/blog/${guide.emergencyCard.source}/`} className="font-semibold text-secondary hover:underline">
                      {`From ${titleOf(guide.emergencyCard.source)} →`}
                    </Link>
                  )}
                  {canPrintCards && (
                    <button type="button" onClick={handlePrintCards} className="inline-flex items-center gap-1 font-semibold text-muted-foreground hover:text-foreground">
                      <Printer className="w-3.5 h-3.5" /> Print this card
                    </button>
                  )}
                </div>
              </div>
            )}

            {isRouter && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  📰 Where to go next
                </h2>
                <div className="divide-y divide-border/60">
                  {guide.routes.map(({ slug, line }) => (
                    <Link key={slug} to={`/blog/${slug}/`} className="group block py-3">
                      <p className="text-sm font-body font-bold text-foreground group-hover:text-secondary transition-colors leading-snug flex items-start gap-1.5">
                        <span className="flex-1">{titleOf(slug)}</span>
                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-secondary" />
                      </p>
                      <p className="text-sm text-muted-foreground font-body mt-0.5">{line}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {isRouter && guide.buyList?.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                  🛒 What to buy
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {guide.buyList.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground font-body bg-muted/50 rounded-xl p-2.5">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                {(() => {
                  const costRoute = guide.routes.find(r => /-(cost-guide|shopping-list)$/.test(r.slug));
                  return costRoute ? (
                    <p className="text-xs text-muted-foreground font-body mt-4">
                      Prices and the reasoning behind each item are in{' '}
                      <Link to={`/blog/${costRoute.slug}/`} className="font-semibold text-secondary hover:underline">{titleOf(costRoute.slug)}</Link>.
                    </p>
                  ) : null;
                })()}
              </div>
            )}

            {/* Legacy hub: the full care sheet */}
            {!isRouter && sectionMeta.map(({ key, icon, label }) => (
              <div key={key} className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  {`${icon} ${label}`}
                </h2>
                <div className="text-sm text-muted-foreground font-body leading-relaxed space-y-3">
                  {guide.sections[key].split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Checklist */}
            {!isRouter && (
            <div className="bg-card border border-border rounded-2xl p-5">
              <h2 className="font-display font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                ✅ Complete Care Checklist
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {guide.sections.checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground font-body bg-muted/50 rounded-xl p-2.5">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Cost builder */}
            {!isRouter && <CostBuilder guide={guide} />}

            {/* FAQ */}
            {guide.faqs?.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  ❓ Frequently Asked Questions
                </h2>
                <div className="space-y-1">
                  {guide.faqs.map((faq, i) => (
                    <details key={i} name={`faq-${guide.id}`} className="group border border-border/60 rounded-xl overflow-hidden">
                      <summary className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="font-body font-semibold text-sm text-foreground">{faq.q}</span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="px-4 pb-3 text-sm text-muted-foreground font-body leading-relaxed border-t border-border/40">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Back to browse */}
            <div className="flex items-center gap-2 text-sm font-body font-semibold text-muted-foreground">
              <Link to="/encyclopedia/" className="hover:text-secondary transition-colors flex items-center gap-1 p-2 -m-2">
                Browse all animals <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4">

            {/* Hidden below lg: the collapsible instance above the article
                already covers mobile. */}
            <div className="hidden lg:block">
              <TableOfContents contentRef={contentRef} watch={guide.id} skipText={guide.name} />
            </div>

            {/* Encyclopedia link */}
            {encAnimal && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  📚 Encyclopedia
                </p>
                <Link to={`/encyclopedia/animal/${encAnimal.id}/`} state={{ returnTo: location.state?.returnTo || '/guides/' }} className="group block">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl flex-shrink-0">{encAnimal.emoji}</span>
                    <div>
                      <p className="font-body font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
                        {encAnimal.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-body italic mt-0.5">{encAnimal.scientific}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-body font-semibold text-secondary">
                    Animal facts & overview <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            )}

            {/* Newsletter signup */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-sm text-foreground mb-1">Subscribe - it's free</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">New care guides straight to your inbox. No spam. 🐾</p>
              <BeehiivSubscribe />
            </div>

            {/* Printable care package, sold, never printed free. The price
                line is the same shape CarePackageCard uses on the store page. */}
            {carePackage && (
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5">
                <p className="text-xs font-body font-semibold text-secondary uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  🖨️ Printable Guide
                </p>
                <Link to={carePackage.status === 'live' ? '/care-packages/store/' : '/care-packages/'} className="group block">
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={carePackage.thumbnail || carePackage.cover}
                      alt={`${carePackage.name} cover`}
                      loading="lazy"
                      className="w-12 h-12 object-cover rounded-lg border border-border flex-shrink-0 bg-white"
                    />
                    <div>
                      <p className="font-body font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
                        {carePackage.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-body mt-0.5">
                        {`${carePackage.pages} pages · PDF · ${carePackage.price}${carePackage.status === 'live' ? '' : ' · listing soon'}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-body font-semibold text-secondary">
                    {carePackage.status === 'live' ? 'Get the printable PDF' : 'See all care packages'} <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            )}

            {/* Legal guide, kept above and apart from the deep-dive list */}
            {legalArticles.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  ⚖️ Legal Guide
                </p>
                <div className="space-y-3">
                  {legalArticles.map(article => (
                    <Link key={article._id} to={`/blog/${article.slug.current}/`} className="group block">
                      <p className="text-xs font-body font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                        {article.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related deep-dive articles */}
            <DeepDiveList articles={relatedArticles} guideId={guide.id} />

            {/* Related short story */}
            {guide.relatedStory && (
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5">
                <p className="text-xs font-body font-bold text-secondary mb-2">📖 Short Story</p>
                <p className="text-xs text-muted-foreground font-body mb-2">{`There's a whole fiction series about a ${guide.name.toLowerCase()}:`}</p>
                <Link
                  to={seriesForSlug(guide.relatedStory.slug) ? chroniclesPath(seriesForSlug(guide.relatedStory.slug).id) : `/blog/${guide.relatedStory.slug}/`}
                  className="group block"
                >
                  <p className="text-xs font-body font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                    {guide.relatedStory.title}
                  </p>
                </Link>
              </div>
            )}

            {/* Related fun facts */}
            {relatedFacts.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  🤩 Fun Facts
                </p>
                <div className="space-y-3">
                  {relatedFacts.map(fact => (
                    <div key={fact.id} className="bg-secondary/5 border border-secondary/20 rounded-xl px-3 py-2.5">
                      <p className="text-xs font-body font-bold text-secondary mb-1">{`${fact.emoji} ${fact.title}`}</p>
                      <p className="text-xs font-body text-foreground leading-relaxed">{fact.fact}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/facts/"
                  className="inline-flex items-center gap-1 mt-1 text-xs font-body font-semibold text-secondary hover:underline p-2 -mx-2 -mb-2"
                >
                  All animal facts <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Explore more */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Explore More
              </p>
              <div className="space-y-2">
                <Link
                  to="/guides/"
                  className="flex items-center gap-2 text-sm font-body font-semibold text-foreground hover:text-secondary transition-colors py-1"
                >
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  All Care Guides
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </Link>
                <Link
                  to="/facts/"
                  className="flex items-center gap-2 text-sm font-body font-semibold text-foreground hover:text-secondary transition-colors py-1"
                >
                  <span className="text-base">🤩</span>
                  Animal Fun Facts
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </Link>
                <Link
                  to="/gear/"
                  className="flex items-center gap-2 text-sm font-body font-semibold text-foreground hover:text-secondary transition-colors py-1"
                >
                  <span className="text-base">🛒</span>
                  Recommended Gear
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Difficulty Legend Popup Modal Overlay */}
      {isLegendOpen && (
        <div 
          onClick={() => setIsLegendOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div
            ref={legendModalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Care difficulty legend"
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border p-6 rounded-2xl max-w-2xl w-full shadow-2xl relative landscape:max-h-[85dvh] landscape:overflow-y-auto"
          >
            <h2 className="text-xl font-bold mb-4 font-display text-foreground">Care Difficulty Legend</h2>
            <DifficultyLegend />
            <button
              onClick={() => setIsLegendOpen(false)}
              className="mt-4 w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-body font-semibold transition-colors hover:opacity-90"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}