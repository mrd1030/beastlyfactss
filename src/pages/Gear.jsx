import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { AFFILIATE_PRODUCTS, GEAR_CATEGORY_ORDER, RETAILERS } from '@/lib/data/affiliateProducts';
import { truncateDescription } from '@/lib/utils/truncate';

const DESCRIPTION = truncateDescription(
  `The exact products we recommend across our care guides - heating, lighting, substrate, enclosures, aquarium gear, and dog, cat, and small-mammal supplies - real products, one shoppable list.`
);

// Built from whichever retailers actually have products listed below, so the disclosure
// never over- or under-claims a partnership - it just updates itself as products are added.
function disclosureText() {
  const used = [...new Set(AFFILIATE_PRODUCTS.map(p => p.retailer))].map(r => RETAILERS[r]?.programName || r);
  const programs = used.length > 1
    ? `${used.slice(0, -1).join(', ')} and ${used[used.length - 1]}`
    : (used[0] || 'Amazon Associate');
  return `As an ${programs}, we earn from qualifying purchases through the links above - at no extra cost to you. We only list products we'd actually recommend to our own pets' keepers.`;
}

function ProductCard({ product }) {
  const retailerLabel = RETAILERS[product.retailer]?.label || 'Amazon';
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex gap-3 bg-card border border-border rounded-2xl p-4 hover:border-secondary/40 hover:shadow-md transition-all"
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.product}
          className="w-16 h-16 object-cover rounded-xl border border-border flex-shrink-0 bg-white"
          loading="lazy"
        />
      )}
      <div className="min-w-0 flex flex-col">
        <p className="font-display font-bold text-sm text-foreground group-hover:text-secondary transition-colors leading-snug">
          {product.product}
        </p>
        <div className="mt-auto pt-2 flex items-center gap-1 text-xs font-display font-semibold text-secondary">
          <ShoppingCart className="w-3.5 h-3.5 flex-shrink-0" />
          Shop on {retailerLabel}
        </div>
      </div>
    </a>
  );
}

export default function Gear() {
  const byCategory = GEAR_CATEGORY_ORDER.map(category => ({
    category,
    products: AFFILIATE_PRODUCTS.filter(p => p.category === category),
  })).filter(group => group.products.length > 0);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Recommended Gear & Supplies | Beastly Facts</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/gear/" />
        <meta property="og:title" content="Recommended Gear & Supplies | Beastly Facts" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beastlyfacts.com/gear/" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts recommended gear and supplies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta name="twitter:title" content="Recommended Gear & Supplies | Beastly Facts" />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Shopping cart">🛒</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Recommended Gear
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-xl">
              The exact products referenced in our care guides' Cost Builders - reptile and amphibian
              heating, lighting, and substrate, plus enclosures, aquarium gear, and dog, cat, and
              small-mammal supplies.
            </p>
            <p className="text-[11px] text-muted-foreground/70 font-body italic mt-3 max-w-xl">
              {disclosureText()}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        {byCategory.map(({ category, products }) => (
          <div key={category} className="mb-8 last:mb-0">
            <h2 className="font-display font-bold text-lg text-foreground mb-3">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {products.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        ))}

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
