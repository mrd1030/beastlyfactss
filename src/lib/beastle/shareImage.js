import { lettersOf, score, wordLengths, MAX_GUESSES } from '@/lib/beastle/engine';

// The daily result as a 1080x1080 PNG for the share sheet: the colored grid
// (no letters, so no spoilers), the Beastle icon, the day and the score.
// Drawn in the browser at share time like the quiz cards
// (src/lib/utils/quizShareImage.js). Null wherever canvas or File is missing;
// the share then goes out as text only.
const S = 1080;
const CREAM = '#FFF9EA';
const INK = '#1D3226';
const MUTED = '#5C6B60';
const TILE = { correct: '#154B3D', present: '#D9A441', absent: '#C9C0AF' };
const DISPLAY = "'Schibsted Grotesk', 'Schibsted Grotesk Fallback', sans-serif";
const BODY = "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible Next Fallback', sans-serif";

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function beastleShareImage({ day, guesses, answer, won, streak, hinted = false }) {
  try {
    if (typeof document === 'undefined' || typeof File === 'undefined') return null;
    await Promise.all([
      document.fonts?.load(`800 80px ${DISPLAY}`),
      document.fonts?.load(`700 30px ${BODY}`),
    ]).catch(() => {});
    const icon = await loadImage('/pwa/beastle-192.png');

    const canvas = document.createElement('canvas');
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = CREAM;
    ctx.fillRect(0, 0, S, S);

    // Header: icon, then "Beastle #N" and the score.
    const headerY = 90;
    if (icon) ctx.drawImage(icon, 90, headerY, 150, 150);
    ctx.textAlign = 'left';
    ctx.fillStyle = INK;
    ctx.font = `800 84px ${DISPLAY}`;
    ctx.fillText(`Beastle #${day}`, 270, headerY + 80);
    ctx.fillStyle = MUTED;
    ctx.font = `700 42px ${BODY}`;
    const scoreLine = `${won ? guesses.length : 'X'}/${MAX_GUESSES}${hinted ? '  ·  used a hint' : ''}${streak > 1 ? `  ·  ${streak} day streak` : ''}`;
    ctx.fillText(scoreLine, 272, headerY + 140);

    // The grid, sized to fit the longest name, with gaps between words.
    const letters = lettersOf(answer);
    const lengths = wordLengths(answer);
    const cols = letters.length;
    const wordGap = 34;
    const areaW = S - 180;
    const areaTop = 330;
    const areaH = S - areaTop - 150;
    const gap = 12;
    const tile = Math.min(
      (areaW - wordGap * (lengths.length - 1) - gap * (cols - lengths.length)) / cols,
      (areaH - gap * (MAX_GUESSES - 1)) / MAX_GUESSES,
      110,
    );
    const gridW = tile * cols + gap * (cols - lengths.length) + wordGap * (lengths.length - 1);
    const left = (S - gridW) / 2;
    const rows = guesses.length;
    const gridH = tile * rows + gap * (rows - 1);
    const top = areaTop + (areaH - gridH) / 2;

    guesses.forEach((g, r) => {
      const states = score(g, letters);
      let x = left;
      let i = 0;
      lengths.forEach((len, w) => {
        for (let k = 0; k < len; k++, i++) {
          ctx.fillStyle = TILE[states[i]];
          roundRect(ctx, x, top + r * (tile + gap), tile, tile, tile * 0.18);
          ctx.fill();
          x += tile + (k < len - 1 ? gap : 0);
        }
        if (w < lengths.length - 1) x += wordGap;
      });
    });

    ctx.textAlign = 'center';
    ctx.fillStyle = INK;
    ctx.font = `800 40px ${BODY}`;
    ctx.fillText('beastlyfacts.com/beastle', S / 2, S - 70);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) return null;
    return new File([blob], `beastle-${day}.png`, { type: 'image/png' });
  } catch {
    return null;
  }
}
