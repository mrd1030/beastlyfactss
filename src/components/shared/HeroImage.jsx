import React from 'react';
import { IMAGE_DIMENSIONS } from '@/lib/data/imageDimensions';

// The one image on a page that is its LCP element: the article featured image
// and the guide hero. Three things differ from LocalImage:
//   - never loading="lazy" and fetchpriority="high" (lowercase: React 18 passes
//     unknown lowercase attributes through untouched). Lighthouse's LCP
//     discovery checklist failed on both counts and the image was fetched
//     twice on the live site, once late.
//   - the "-hero" webp tier from scripts/generate-thumbnails.js as 1x/2x
//     density candidates, with the original JPEG as the <img src> fallback.
//     Density descriptors rather than width descriptors so nothing here has to
//     know each source file's real width.
//   - width/height from IMAGE_DIMENSIONS when the path is known there, so the
//     box is reserved before the bytes arrive (the "media element lacking an
//     explicit size" layout shift on article pages).
// Only images/ and guides/ get the tier, so any other path renders a plain
// <img>: a <source> that 404s does not fall back to the next candidate.
const HERO_TIER_PATH = /^\/assets\/(images|guides)\/.+\.(jpe?g|png)$/i;

export default function HeroImage({ src, alt = '', className = '', width, height, ...props }) {
  const dims = (typeof src === 'string' && IMAGE_DIMENSIONS[src]) || null;
  const w = width ?? dims?.width;
  const h = height ?? dims?.height;
  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={w}
      height={h}
      decoding="async"
      fetchpriority="high"
      {...props}
    />
  );
  if (typeof src !== 'string' || !HERO_TIER_PATH.test(src)) return img;
  const base = src.replace(/\.(jpe?g|png)$/i, '');
  return (
    <picture>
      <source type="image/webp" srcSet={`${base}-hero.webp 1x, ${base}-hero@2x.webp 2x`} />
      {img}
    </picture>
  );
}
