import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Search, X } from 'lucide-react';
import { AFFILIATE_PRODUCTS, GEAR_CATEGORY_ORDER, GEAR_PET_TYPES, RETAILERS } from '@/lib/data/affiliateProducts';
import { truncateDescription } from '@/lib/utils/truncate';
import ProductCard from '@/components/shared/ProductCard';

const DESCRIPTION = truncateDescription(
  `The exact products we recommend across our care guides: heating, lighting, substrate, enclosures, aquarium gear, and dog, cat, and small-mammal supplies.`
);

const resolvePetType = (slug) => {
  if (!slug) return null;
  return GEAR_PET_TYPES.find(t => t.slug === slug.toLowerCase())?.slug ?? null;
};

// Built from whichever retailers actually have products listed below, so the disclosure
// never over- or under-claims a partnership - it just updates itself as products are added.
// `direction` says where the product links sit relative to this text: 'below' for the
// copy shown before the product grid, 'above' for the copy shown after it.
function disclosureText(direction = 'above') {
  const used = [...new Set(AFFILIATE_PRODUCTS.map(p => p.retailer))].map(r => RETAILERS[r]?.programName || r);
  const programs = used.length > 1
    ? `${used.slice(0, -1).join(', ')} and ${used[used.length - 1]}`
    : (used[0] || 'Amazon Associate');
  return `As an ${programs}, we earn from qualifying purchases through the links ${direction} - at no extra cost to you. We only list products we'd actually recommend to our own pets' keepers.`;
}

export default function Gear() {
  const location = useLocation();
  const { petType } = useParams();
  const [activePetType, setActivePetType] = useState(() => resolvePetType(petType));
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setActivePetType(resolvePetType(petType));
  }, [petType]);

  const activePet = GEAR_PET_TYPES.find(t => t.slug === activePetType);
  const petFilteredProducts = activePetType
    ? AFFILIATE_PRODUCTS.filter(p => p.pets.includes(activePetType))
    : AFFILIATE_PRODUCTS;

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const visibleProducts = trimmedQuery
    ? petFilteredProducts.filter(p => {
        const haystack = [p.product, p.category, ...(p.covers || [])].join(' ').toLowerCase();
        return haystack.includes(trimmedQuery);
      })
    : petFilteredProducts;

  const byCategory = GEAR_CATEGORY_ORDER.map(category => ({
    category,
    products: visibleProducts.filter(p => p.category === category),
  })).filter(group => group.products.length > 0);

  const pageTitle = activePet
    ? `${activePet.label} Gear & Supplies | Beastly Facts`
    : 'Recommended Gear & Supplies | Beastly Facts';
  const pageDescription = activePet
    ? truncateDescription(
        `The exact ${activePet.label.toLowerCase()} products we recommend across our care guides' Cost Builders - heating, lighting, substrate, enclosures, and more.`
      )
    : DESCRIPTION;
  const canonical = `https://beastlyfacts.com${location.pathname.replace(/\/$/, '')}/`;
  const introText = activePet
    ? `The exact ${activePet.label.toLowerCase()} products referenced in our care guides' Cost Builders - filtered to just what applies to these pets.`
    : `The exact products referenced in our care guides' Cost Builders - reptile and amphibian
              heating, lighting, and substrate, plus enclosures, aquarium gear, and dog, cat, and
              small-mammal supplies.`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts recommended gear and supplies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Shopping cart">🛒</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              {activePet ? `${activePet.label} Gear` : 'Recommended Gear'}
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-xl">
              {introText}
            </p>
            <p className="text-[11px] text-muted-foreground/70 font-body italic mt-3 max-w-xl">
              {disclosureText('below')}
            </p>
          </motion.div>

          <div className="relative mt-5 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activePet ? `Search ${activePet.label.toLowerCase()} gear...` : 'Search all gear...'}
              aria-label="Search gear"
              className="w-full pl-9 pr-9 py-2 rounded-full text-sm font-body bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            <Link
              to="/gear/"
              className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1.5 ${
                !activePetType
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>🐾</span> All Pets
            </Link>
            {GEAR_PET_TYPES.map(t => (
              <Link
                key={t.slug}
                to={`/gear/category/${t.slug}/`}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1.5 ${
                  activePetType === t.slug
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{t.emoji}</span> {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        {byCategory.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-display font-bold text-foreground">
              {trimmedQuery ? `No gear matches "${searchQuery.trim()}"` : 'No gear found for this filter yet'}
            </p>
            {trimmedQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-3 text-sm font-display font-semibold text-secondary hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          byCategory.map(({ category, products }) => (
            <div key={category} className="mb-8 last:mb-0">
              <h2 className="font-display font-bold text-lg text-foreground mb-3">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {products.map(product => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          ))
        )}

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-[11px] text-muted-foreground/70 font-body italic mb-4">
            {disclosureText()}
          </p>
          <Link
            to="/guides/"
            className="inline-flex items-center gap-1 text-sm font-display font-semibold text-secondary hover:underline"
          >
            Browse care guides <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
