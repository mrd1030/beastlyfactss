import React from 'react';

export default function LocalImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  width,
  height,
  ...props
}) {
  const isLocalAsset = typeof src === 'string' && src.startsWith('/assets/');

  if (!isLocalAsset) {
    return <img src={src} alt={alt} className={className} loading={loading} width={width} height={height} {...props} />;
  }

  const match = src.match(/\.(jpg|jpeg|png|webp)$/i);
  const ext = match?.[1]?.toLowerCase() || 'jpg';
  const base = src.replace(new RegExp(`\\.${ext}$`, 'i'), '');
  const thumbWebp = `${base}-thumb.webp`;
  const thumbJpg = `${base}-thumb.jpg`;

  return (
    <picture>
      <source srcSet={thumbWebp} type="image/webp" />
      <source srcSet={thumbJpg} type="image/jpeg" />
      <img src={thumbJpg} alt={alt} className={className} loading={loading} width={width} height={height} {...props} />
    </picture>
  );
}
