import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Stamps a small, semi-transparent "beastlyfacts.com" watermark in the
// bottom-right corner of each given image, in place. The Figure component's
// shareable infographics are built specifically to be shared and downloaded,
// and real-world testing showed the article link doesn't reliably survive
// that trip (some share targets drop it, DuckDuckGo mangled it into a
// broken url). The watermark is what keeps attribution intact regardless of
// how the picture actually travels once it leaves the article.
//
// Takes explicit file paths as CLI args rather than scanning every Figure
// image in content/, so re-running it never double-stamps an already
// watermarked file. Call it once per newly installed infographic, then
// regenerate thumbnails so the derived -thumb/-card tiers pick it up too.
async function watermark(filePath) {
  const absPath = path.isAbsolute(filePath) ? filePath : path.join(rootDir, filePath);
  const image = sharp(absPath);
  const meta = await image.metadata();

  const fontSize = Math.round(meta.width * 0.018);
  const paddingX = Math.round(fontSize * 0.9);
  const paddingY = Math.round(fontSize * 0.55);
  const text = 'beastlyfacts.com';
  const textWidth = Math.round(text.length * fontSize * 0.58);
  const pillWidth = textWidth + paddingX * 2;
  const pillHeight = fontSize + paddingY * 2;
  const margin = Math.round(meta.width * 0.015);

  const svg = `
    <svg width="${pillWidth}" height="${pillHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${pillWidth}" height="${pillHeight}" rx="${pillHeight / 2}" fill="black" fill-opacity="0.45" />
      <text x="${pillWidth / 2}" y="${pillHeight / 2}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${fontSize}"
        fill="white" fill-opacity="0.85">${text}</text>
    </svg>`;

  // .jpeg() is load-bearing, not a style choice: without it sharp preserves
  // whatever format the input happened to be and toBuffer() just returns
  // that encoding, regardless of the .jpg extension on absPath. Three
  // infographics (box-turtle, hedgehog, ackie-monitor) were fed PNG sources
  // and came out the other end as PNG bytes wearing a .jpg filename, 2-3MB
  // each instead of a few hundred KB, since PNG is lossless and this
  // watermark step is the last thing that touches the file before it ships.
  const buffer = await image
    .composite([{
      input: Buffer.from(svg),
      left: meta.width - pillWidth - margin,
      top: meta.height - pillHeight - margin,
    }])
    .jpeg({ quality: 85 })
    .toBuffer();

  // Written to a temp file and renamed over the original rather than
  // overwritten directly - sharp can still hold a read handle on absPath at
  // this point, and Windows throws on that same-file write race.
  const tmpPath = `${absPath}.tmp`;
  fs.writeFileSync(tmpPath, buffer);
  fs.renameSync(tmpPath, absPath);
  console.log(`Watermarked ${filePath}`);
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node scripts/add-watermark.mjs <path1> <path2> ...');
  process.exit(1);
}

for (const f of files) {
  await watermark(f);
}
