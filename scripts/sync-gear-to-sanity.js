#!/usr/bin/env node
/**
 * Usage: node scripts/sync-gear-to-sanity.js
 *
 * Pushes src/lib/data/affiliateProducts.js (the master gear list) into
 * Sanity as `product` documents, so the Product Recommendation block in
 * Studio can reference one instead of re-typing its name/link/image every
 * time it's mentioned in a post.
 *
 * Upsert-only - a product removed from affiliateProducts.js is NOT deleted
 * from Sanity, so posts that already reference it keep working. Re-run this
 * any time affiliateProducts.js changes.
 *
 * Requires: SANITY_WRITE_TOKEN environment variable. Create one at
 * sanity.io/manage -> this project -> API -> Tokens ("Editor" permission is
 * enough), then add it to .env as SANITY_WRITE_TOKEN=...
 */

import 'dotenv/config';
import { createClient } from '@sanity/client';
import process from 'process';

import { AFFILIATE_PRODUCTS } from '../src/lib/data/affiliateProducts.js';
import { projectId, dataset, apiVersion } from '../shared/sanityConfig.js';

const token = process.env.SANITY_WRITE_TOKEN;

if (!token) {
  console.error('❌  Missing SANITY_WRITE_TOKEN environment variable.');
  console.error('   Create one at sanity.io/manage -> this project -> API -> Tokens (Editor permission), then add it to .env.');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

// Product images live as static site assets (public/assets/images/affiliate/*),
// not Sanity-uploaded images, so `imageUrl` needs an absolute URL to render
// correctly both in Studio's own preview and on the live site.
const SITE_ORIGIN = 'https://beastlyfacts.com';

async function run() {
  console.log(`Syncing ${AFFILIATE_PRODUCTS.length} products to Sanity (${projectId}/${dataset})...`);

  const tx = client.transaction();
  for (const p of AFFILIATE_PRODUCTS) {
    tx.createOrReplace({
      _id: `product-${p.slug}`,
      _type: 'product',
      slug: p.slug,
      productName: p.product,
      category: p.category,
      retailer: p.retailer,
      affiliateUrl: p.link,
      imageUrl: p.image.startsWith('http') ? p.image : `${SITE_ORIGIN}${p.image}`,
    });
  }
  await tx.commit();

  console.log(`Done - ${AFFILIATE_PRODUCTS.length} product documents synced.`);
}

run().catch((err) => {
  console.error('Sync failed:', err.message);
  process.exit(1);
});
