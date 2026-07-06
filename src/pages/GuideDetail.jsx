import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Printer, Check, ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { allGuides } from '@/lib/data/guides';
import { encyclopediaAnimals, difficultyColor } from '@/lib/data/encyclopedia';
import { facts } from '@/lib/data/facts';
import { truncateDescription } from '@/lib/utils/truncate';
import { DifficultyLegend } from '@/components/shared/DifficultyLegend';
import CostBuilder from '@/components/guides/CostBuilder';
import { IMAGE_DIMENSIONS } from '@/lib/data/imageDimensions';

const sectionMeta = [
  { key: 'housing',    icon: '🏠', label: 'Housing & Setup' },
  { key: 'diet',       icon: '🥗', label: 'Diet & Feeding' },
  { key: 'enrichment', icon: '🎮', label: 'Enrichment & Handling' },
  { key: 'health',     icon: '💊', label: 'Health & Common Issues' },
];

export default function GuideDetail() {
  const { id } = useParams();
  const guide = allGuides.find(g => g.id === id);
  const encAnimal = encyclopediaAnimals.find(a => a.guideId === id);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const legendTriggerRef = useRef(null);
  const legendModalRef = useRef(null);

  const relatedFacts = guide ? facts.filter(f => {
    const fAnimal = f.animal.toLowerCase();
    const gName = guide.name.toLowerCase();
    // Whole-name containment only — matching on individual shared words
    // (e.g. "dragon") false-matched Komodo Dragon facts onto Bearded Dragon.
    return gName.includes(fAnimal) || fAnimal.includes(gName);
  }).slice(0, 3) : [];

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

  const handlePrint = () => {
    const sections = [
      { title: '🏠 Housing', content: guide.sections.housing },
      { title: '🥗 Diet', content: guide.sections.diet },
      { title: '🎮 Enrichment', content: guide.sections.enrichment },
      { title: '💊 Health', content: guide.sections.health },
    ];

    const checklistHTML = guide.sections.checklist
      .map(item => `☐  ${item}`)
      .join('<br>');

    const printHTML = `
      <html>
        <head>
          <title>${guide.emoji} ${guide.name} — Care Guide</title>
          <style>
            @media print {
              .section { 
                page-break-inside: avoid; 
                break-inside: avoid;
              }
              .checklist-section {
                page-break-inside: avoid;
                break-inside: avoid;
              }
            }
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              padding: 32px 40px; 
              line-height: 1.65; 
              color: #222; 
              max-width: 820px;
              margin: 0 auto;
            }
            h1 { font-size: 24px; margin-bottom: 4px; }
            h2 { font-size: 17px; margin-top: 26px; margin-bottom: 10px; border-bottom: 1.5px solid #eee; padding-bottom: 6px; }
            .section { margin-bottom: 22px; }
            .checklist { 
              font-size: 13.5px; 
              line-height: 2; 
              background: #f8f9fa; 
              padding: 20px 22px; 
              border-radius: 10px;
              margin-top: 12px;
            }
            .footer { 
              margin-top: 40px; 
              font-size: 10.5px; 
              color: #888; 
              border-top: 1px solid #ddd; 
              padding-top: 14px; 
            }
            .tagline {
              font-style: italic;
              color: #444;
              margin: 16px 0 24px;
            }
          </style>
        </head>
        <body>
          <h1>${guide.emoji} ${guide.name}</h1>
          <p style="color: #555; font-size: 13.5px; margin-top: -4px;">${guide.petType} • ${guide.difficulty} level</p>
          <p class="tagline">${guide.tagline}</p>

          ${sections.map(section => `
            <div class="section">
              <h2>${section.title}</h2>
              <div style="white-space: pre-wrap; font-size: 14px; color: #333;">
                ${section.content}
              </div>
            </div>
          `).join('')}

          <div class="checklist-section">
            <h2>✅ Complete Care Checklist</h2>
            <div class="checklist">
              ${checklistHTML}
            </div>
          </div>

          <div class="footer">
            Printed from BeastlyFacts.com • ${new Date().toLocaleDateString()} • Keep this guide handy! 🐾
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
          <Link to="/guides/" className="text-secondary text-sm font-display font-semibold hover:underline">
            Browse all guides →
          </Link>
        </div>
      </div>
    );
  }

  const diffClass = difficultyColor[guide.difficulty] || 'text-muted-foreground bg-muted';

  const ogImage = guide.image
    ? `https://beastlyfacts.com${guide.image}`
    : 'https://beastlyfacts.com/assets/hero-1200.jpg';
  // og:image:width/height must match the actual image's real size — Helmet
  // has no way to "unset" a tag it doesn't declare, so leaving these fixed
  // at 1200x630 would silently misdeclare every guide photo's real dimensions.
  const ogImageDims = (guide.image && IMAGE_DIMENSIONS[guide.image]) || { width: 1200, height: 630 };

  const guideTitle = `${guide.name} Care Guide | Beastly Facts`;
  const guideDescription = truncateDescription(guide.tagline
    ? `${guide.tagline} Full care guide covering housing, diet, enrichment, and health for ${guide.name}.`
    : `Complete care guide for ${guide.name} — covering housing, diet, enrichment, and health. Evidence-based advice for ${guide.petType} keepers.`);
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
        <meta property="og:image:alt" content={`${guide.name} care guide — Beastly Facts`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={guideTitle} />
        <meta name="twitter:description" content={guideDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": guideTitle,
          "description": guideDescription,
          "url": canonicalUrl,
          "author": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com" },
          "publisher": { "@type": "Organization", "name": "Beastly Facts", "url": "https://beastlyfacts.com", "logo": { "@type": "ImageObject", "url": "https://beastlyfacts.com/assets/hero-1200.jpg" } },
          "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
        <Link
          to="/guides/"
          className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Guides
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{guide.emoji}</span>
              <div>
                <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground leading-tight">
                  {guide.name}
                </h1>
                <p className="text-sm text-muted-foreground font-body mt-0.5">{guide.petType}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <button
                    ref={legendTriggerRef}
                    onClick={() => setIsLegendOpen(true)}
                    className={`text-xs font-display font-semibold px-2.5 py-0.5 rounded-full hover:opacity-80 transition-all ${diffClass}`}
                  >
                    {guide.difficulty}
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={handlePrint}
              className="flex-shrink-0 flex items-center gap-1.5 text-xs font-display font-semibold text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 px-3 py-2 rounded-xl transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print Checklist
            </button>
          </div>
          <p className="text-base text-foreground font-body italic mb-4">{guide.tagline}</p>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Fun fact */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3">
              <p className="text-sm font-body text-foreground">
                <span className="font-display font-bold text-secondary">🤓 Did you know?</span>{' '}
                {guide.funFact}
              </p>
            </div>

            {/* Hero image */}
            {guide.image && (
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src={guide.image}
                  alt={`${guide.name} — ${guide.petType}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Sections */}
            {sectionMeta.map(({ key, icon, label }) => (
              <div key={key} className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  {icon} {label}
                </h2>
                <div className="text-sm text-muted-foreground font-body leading-relaxed space-y-3">
                  {guide.sections[key].split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Checklist */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h2 className="font-display font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                ✅ Complete Care Checklist
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {guide.sections.checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground font-body bg-muted/50 rounded-xl p-2.5">
                    <Check className="w-3.5 h-3.5 text-teal mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Cost builder */}
            <CostBuilder guide={guide} />

            {/* FAQ */}
            {guide.faqs?.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  ❓ Frequently Asked Questions
                </h2>
                <div className="space-y-1">
                  {guide.faqs.map((faq, i) => (
                    <div key={i} className="border border-border/60 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-display font-semibold text-sm text-foreground">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-3 text-sm text-muted-foreground font-body leading-relaxed border-t border-border/40">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back to browse */}
            <div className="flex items-center gap-2 text-sm font-display font-semibold text-muted-foreground">
              <Link to="/encyclopedia/" className="hover:text-secondary transition-colors flex items-center gap-1">
                Browse all animals <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4">

            {/* Encyclopedia link */}
            {encAnimal && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  📚 Encyclopedia
                </p>
                <Link to={`/encyclopedia/animal/${encAnimal.id}/`} className="group block">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl flex-shrink-0">{encAnimal.emoji}</span>
                    <div>
                      <p className="font-display font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
                        {encAnimal.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-body italic mt-0.5">{encAnimal.scientific}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-display font-semibold text-secondary">
                    Animal facts & overview <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            )}

            {/* Related short story */}
            {guide.relatedStory && (
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5">
                <p className="text-xs font-display font-bold text-secondary mb-2">📖 Short Story</p>
                <p className="text-xs text-muted-foreground font-body mb-2">There's a whole fiction series about a {guide.name.toLowerCase()}:</p>
                <Link to={`/blog/${guide.relatedStory.slug}/`} className="group block">
                  <p className="text-xs font-display font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                    {guide.relatedStory.title}
                  </p>
                </Link>
              </div>
            )}

            {/* Related fun facts */}
            {relatedFacts.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  🤩 Fun Facts
                </p>
                <div className="space-y-3">
                  {relatedFacts.map(fact => (
                    <div key={fact.id} className="bg-secondary/5 border border-secondary/20 rounded-xl px-3 py-2.5">
                      <p className="text-xs font-display font-bold text-secondary mb-1">{fact.emoji} {fact.title}</p>
                      <p className="text-xs font-body text-foreground leading-relaxed">{fact.fact}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/facts/"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-display font-semibold text-secondary hover:underline"
                >
                  All animal facts <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Explore more */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Explore More
              </p>
              <div className="space-y-2">
                <Link
                  to="/guides/"
                  className="flex items-center gap-2 text-sm font-display font-semibold text-foreground hover:text-secondary transition-colors py-1"
                >
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  All Care Guides
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </Link>
                <Link
                  to="/facts/"
                  className="flex items-center gap-2 text-sm font-display font-semibold text-foreground hover:text-secondary transition-colors py-1"
                >
                  <span className="text-base">🤩</span>
                  Animal Fun Facts
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
            className="bg-card border border-border p-6 rounded-2xl max-w-2xl w-full shadow-2xl relative"
          >
            <h2 className="text-xl font-bold mb-4 font-display text-foreground">Care Difficulty Legend</h2>
            <DifficultyLegend />
            <button 
              onClick={() => setIsLegendOpen(false)}
              className="mt-4 w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-display font-semibold transition-colors hover:opacity-90"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}