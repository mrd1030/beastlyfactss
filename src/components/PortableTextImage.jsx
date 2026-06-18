import React from 'react';
import { urlFor } from '../lib/sanityImage';

export default function PortableTextImage({ value, link, alt }) {
  if (!value?.asset?._ref) return null;

  const altText = alt || value.alt || value.caption || 'Blog image';
  const linkUrl = link || value.link || value.href || null;

  // Generate responsive WebP + JPG srcsets
  const webpSrcSet = [
    urlFor(value).width(400).quality(75).format('webp').url() + ' 400w',
    urlFor(value).width(800).quality(75).format('webp').url() + ' 800w',
    urlFor(value).width(1200).quality(75).format('webp').url() + ' 1200w',
  ].join(', ');

  const jpgSrcSet = [
    urlFor(value).width(400).quality(80).format('jpg').url() + ' 400w',
    urlFor(value).width(800).quality(80).format('jpg').url() + ' 800w',
    urlFor(value).width(1200).quality(80).format('jpg').url() + ' 1200w',
  ].join(', ');

  const imageElement = (
    <picture>
      <source srcSet={webpSrcSet} sizes="(max-width: 768px) 100vw, 900px" type="image/webp" />
      <source srcSet={jpgSrcSet} sizes="(max-width: 768px) 100vw, 900px" type="image/jpeg" />
      <img
        src={urlFor(value).width(900).quality(80).format('jpg').url()}
        alt={altText}
        className={`rounded-2xl shadow-md w-full max-w-2xl max-h-[500px] object-contain transition-shadow ${
          linkUrl ? 'cursor-pointer hover:shadow-xl' : ''
        }`}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );

  return (
    <figure className="my-8 flex justify-center">
      {linkUrl ? (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {imageElement}
        </a>
      ) : (
        imageElement
      )}

      {/* Optional caption */}
      {value.caption && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground italic max-w-2xl">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}