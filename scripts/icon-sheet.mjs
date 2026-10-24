// Contact sheet for the hand-drawn animal-day icons in
// src/components/icons/dayIconNodes.js: each one at 96, 24 and 16 px beside
// two lucide lab icons drawn the same way, so a new icon can be judged at the
// size the band actually shows it (14px) and not only blown up.
//
// Usage:
//   node scripts/icon-sheet.mjs [out.png]      -> social-batches/pins/_icon-sheet.png
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import * as lab from '@lucide/lab';
import * as ours from '../src/components/icons/dayIconNodes.js';

const out = process.argv[2] || 'social-batches/pins/_icon-sheet.png';
const icons = [...Object.entries(ours), ['bat (lab)', lab.bat], ['catBig (lab)', lab.catBig]];

const svgOf = (nodes, size) => {
  const body = nodes.map(([tag, attrs]) => {
    const a = Object.entries(attrs).filter(([k]) => k !== 'key').map(([k, v]) => `${k}="${v}"`).join(' ');
    return `<${tag} ${a}/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#113b30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
};

const ROW = 130; const W = 420;
const H = ROW * icons.length + 10;
const composites = [];
let y = 10;
for (const [name, nodes] of icons) {
  composites.push({ input: Buffer.from(svgOf(nodes, 96)), left: 20, top: y });
  composites.push({ input: Buffer.from(svgOf(nodes, 24)), left: 140, top: y + 36 });
  composites.push({ input: Buffer.from(svgOf(nodes, 16)), left: 180, top: y + 40 });
  const label = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="30"><text x="0" y="22" font-family="Arial" font-size="18" fill="#444">${name}</text></svg>`;
  composites.push({ input: Buffer.from(label), left: 220, top: y + 34 });
  y += ROW;
}
fs.mkdirSync(path.dirname(out), { recursive: true });
await sharp({ create: { width: W, height: H, channels: 3, background: '#fbf7ef' } }).composite(composites).png().toFile(out);
console.log(`${icons.length} icons -> ${out}`);
