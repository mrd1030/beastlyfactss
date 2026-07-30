import React, { useState } from 'react';

export default function LocalImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  width,
  height,
  fullSize = false,
  variant,
  ...props
}) {
  const [thumbFailed, setThumbFailed] = useState(false);
  const isLocalAsset = typeof src === 'string' && src.startsWith('/assets/');

  if (!isLocalAsset || fullSize) {
    return <img src={src} alt={alt} className={className} loading={loading} width={width} height={height} {...props} />;
  }

  const match = src.match(/\.(jpg|jpeg|png|webp)$/i);
  const ext = match?.[1]?.toLowerCase() || 'jpg';
  const base = src.replace(new RegExp(`\\.${ext}$`, 'i'), '');
  // 'card' = a larger 640x480 variant for ~320-380px photo-led cards
  // (GuideSpotlight/EncyclopediaTeaser) - the default -thumb tier is a
  // 240x240 square meant for small icon-sized slots and visibly blurs when
  // upscaled to a 4:3 card that size.
  const suffix = variant === 'card' ? '-card' : '-thumb';
  const thumbWebp = `${base}${suffix}.webp`;
  const thumbJpg = `${base}${suffix}.jpg`;

  if (thumbFailed) {
    return <img src={src} alt={alt} className={className} loading={loading} width={width} height={height} {...props} />;
  }

  return (
    <picture>
      <source srcSet={thumbWebp} type="image/webp" />
      <source srcSet={thumbJpg} type="image/jpeg" />
      <img
        src={thumbJpg}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        onError={() => setThumbFailed(true)}
        {...props}
      />
    </picture>
  );
}
