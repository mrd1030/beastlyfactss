import React from 'react';
import { urlFor } from '@/lib/sanityImage';

export default function SanityImage({
  image,
  alt = '',
  width = 800,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
  priority = false,
  quality = 75,
}) {
  if (!image?.asset?._ref) {
    return null;
  }

  // Generate responsive WebP srcset
  const webpSrcSet = [
    urlFor(image).width(400).quality(quality).format('webp').url() + ' 400w',
    urlFor(image).width(800).quality(quality).format('webp').url() + ' 800w',
    urlFor(image).width(1200).quality(quality).format('webp').url() + ' 1200w',
  ].join(', ');

  // Generate JPG fallback srcset
  const jpgSrcSet = [
    urlFor(image).width(400).quality(quality + 5).format('jpg').url() + ' 400w',
    urlFor(image).width(800).quality(quality + 5).format('jpg').url() + ' 800w',
    urlFor(image).width(1200).quality(quality + 5).format('jpg').url() + ' 1200w',
  ].join(', ');

  return (
    <picture>
      {/* WebP - Modern browsers */}
      <source 
        srcSet={webpSrcSet} 
        sizes={sizes} 
        type="image/webp" 
      />
      
      {/* JPG Fallback */}
      <source 
        srcSet={jpgSrcSet} 
        sizes={sizes} 
        type="image/jpeg" 
      />

      {/* Final img tag */}
      <img
        src={urlFor(image).width(width).quality(quality + 5).format('jpg').url()}
        alt={alt || image.alt || 'Image'}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        width={width}
        height={Math.round(width * 0.66)} // Approximate 3:2 aspect ratio
        decoding="async"
      />
    </picture>
  );
}