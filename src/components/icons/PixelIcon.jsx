import React from 'react';
import { PIXEL_ICONS, PIXEL_PALETTE } from '@/components/icons/pixelIcons';

// Each row becomes runs of same-color pixels, so an icon is a few dozen
// rects instead of 256. Built once per icon.
const cache = new Map();
function runsFor(name) {
  if (cache.has(name)) return cache.get(name);
  const runs = [];
  (PIXEL_ICONS[name] || []).forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let end = x + 1;
      while (end < row.length && row[end] === ch) end += 1;
      if (ch !== '.') runs.push({ x, y, w: end - x, fill: PIXEL_PALETTE[ch] });
      x = end;
    }
  });
  cache.set(name, runs);
  return runs;
}

export default function PixelIcon({ name, className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      {runsFor(name).map((r) => <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.w} height="1" fill={r.fill} />)}
    </svg>
  );
}
