import { createClient } from '@sanity/client';

/**
 * Points at the same public, read-only Sanity project + dataset the
 * beastlyfactss website already uses. This app never imports code from
 * that repo and never writes to Sanity — it only reads the public
 * content API, so beastlyfactss stays untouched.
 */
export const SANITY_PROJECT_ID = process.env.EXPO_PUBLIC_SANITY_PROJECT_ID ?? '7nqbs1gk';
export const SANITY_DATASET = process.env.EXPO_PUBLIC_SANITY_DATASET ?? 'production';
const SANITY_API_VERSION = process.env.EXPO_PUBLIC_SANITY_API_VERSION ?? '2025-05-26';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
  // No token: this client is read-only by construction. If the dataset
  // ever requires auth for reads, add EXPO_PUBLIC_SANITY_READ_TOKEN here —
  // never a write-scoped token.
});

export function sanityImageUrl(source: { asset?: { _ref?: string } } | null | undefined, width = 400) {
  const ref = source?.asset?._ref;
  if (!ref) return null;
  // ref shape: image-<assetId>-<width>x<height>-<format>
  const match = /^image-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/.exec(ref);
  if (!match) return null;
  const [, assetId, , , format] = match;
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${assetId}-${width}x${width}.${format}?w=${width}`;
}
