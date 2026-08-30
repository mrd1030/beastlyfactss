import React from 'react';

// A tinted full-bleed band behind a group of homepage sections. See the
// "Homepage section bands and dividers" block at the foot of src/index.css for
// the tint values and why they are absolute colours per theme rather than
// alpha over a token.
//
// This wraps sections rather than being applied inside each one, because the
// point is to group them: TrendingFacts and FactPhotoStrip share a band because
// they are the same subject, and the band is what says so. Applying a
// background per section would just produce eleven stripes.
//
// `edged` opts the band into the scale motif in the side gutters. It only
// renders above 1400px, where max-w-6xl leaves room for it.
export default function SectionBand({ tone = 'warm', edged = false, children }) {
  const cls = [
    'home-band',
    tone === 'cool' ? 'home-band--cool' : 'home-band--warm',
    edged ? 'home-band--edged' : '',
  ].filter(Boolean).join(' ');

  return <div className={cls}>{children}</div>;
}
