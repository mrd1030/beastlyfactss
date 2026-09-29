// Draws a player's quiz card as a 1080x1080 PNG so Share can attach the card
// they actually earned, not just a link. Messaging apps show an attached image
// as a real picture; the link preview underneath only ever shows the quiz's
// generic share card (public/assets/og/quiz-<id>.jpg).
//
// Built in the browser at share time with a canvas, so nothing is hosted.
// Returns null wherever the canvas or the platform can't do it, and the
// caller falls back to a text-only share.

import { toast } from '@/components/ui/use-toast';

const S = 1080;
const CREAM = '#F9F1E1';
const INK = '#1D3226';
const MUTED = '#3C5446';
const ORANGE = '#B5491B';
const DISPLAY = "'Schibsted Grotesk', 'Schibsted Grotesk Fallback', sans-serif";
const BODY = "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible Next Fallback', sans-serif";

// Greedy word wrap against the real measured width.
function wrap(ctx, text, maxWidth) {
  const lines = [''];
  for (const word of text.split(' ')) {
    const probe = lines[lines.length - 1] ? `${lines[lines.length - 1]} ${word}` : word;
    if (ctx.measureText(probe).width <= maxWidth || !lines[lines.length - 1]) lines[lines.length - 1] = probe;
    else lines.push(word);
  }
  return lines;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// "the Cleanup Crew Check quiz", but "The Bearded Dragon Boss quiz": share
// text wrote "on the The Bearded Dragon Boss quiz" for titles that already
// start with "The".
export function quizPhrase(title, { quoted = false } = {}) {
  const name = quoted ? `"${title}"` : title;
  return /^the\s/i.test(title) ? `${name} quiz` : `the ${name} quiz`;
}

// The share message for any scored quiz. A perfect score cannot be beaten,
// so it asks whether they know as much instead of daring them to beat it.
export function scoreShareText({ emoji, title, score, total }) {
  const quiz = quizPhrase(title);
  return score === total
    ? `${emoji} I got a perfect ${score}/${total} on ${quiz} at BeastlyFacts. Think you know as much as me?`
    : `${emoji} Check out ${quiz} at BeastlyFacts and try to beat my ${score}/${total}!`;
}

// kicker: small orange line above the emoji ("Reward card earned").
// line: the score line under the blurb ("8/8 on Cleanup Crew Check").
export async function quizShareImage({ emoji, title, blurb, kicker, line, fileName }) {
  try {
    if (typeof document === 'undefined' || typeof File === 'undefined') return null;
    // The site faces are usually loaded already; this just makes sure the
    // canvas doesn't draw before they are.
    await Promise.all([
      document.fonts?.load(`800 80px ${DISPLAY}`),
      document.fonts?.load(`700 30px ${BODY}`),
    ]).catch(() => {});

    const canvas = document.createElement('canvas');
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = CREAM;
    ctx.fillRect(0, 0, S, S);

    // The card itself, echoing the on-site ResultCard: warm gradient, orange rim.
    const pad = 90;
    const grad = ctx.createLinearGradient(pad, pad, S - pad, S - pad);
    grad.addColorStop(0, '#FBE3D2');
    grad.addColorStop(0.55, '#FFF9EE');
    grad.addColorStop(1, '#D9E9DF');
    ctx.save();
    ctx.shadowColor = 'rgba(29,50,38,0.18)';
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 16;
    roundRect(ctx, pad, pad, S - pad * 2, S - pad * 2 - 60, 56);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'rgba(181,73,27,0.45)';
    roundRect(ctx, pad, pad, S - pad * 2, S - pad * 2 - 60, 56);
    ctx.stroke();

    const cx = S / 2;
    const maxText = S - pad * 2 - 120;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    ctx.fillStyle = ORANGE;
    ctx.font = `800 30px ${BODY}`;
    ctx.letterSpacing = '6px';
    ctx.fillText(kicker.toUpperCase(), cx, 250);
    ctx.letterSpacing = '0px';

    ctx.font = '180px sans-serif';
    ctx.fillText(emoji, cx, 470);

    ctx.fillStyle = INK;
    let size = 92;
    ctx.font = `800 ${size}px ${DISPLAY}`;
    while (ctx.measureText(title).width > maxText && size > 56) {
      size -= 4;
      ctx.font = `800 ${size}px ${DISPLAY}`;
    }
    ctx.fillText(title, cx, 630);

    let y = 700;
    if (blurb) {
      ctx.fillStyle = MUTED;
      ctx.font = `400 34px ${BODY}`;
      for (const l of wrap(ctx, blurb, maxText).slice(0, 3)) {
        ctx.fillText(l, cx, y);
        y += 46;
      }
    }

    ctx.fillStyle = ORANGE;
    ctx.font = `700 34px ${BODY}`;
    for (const l of wrap(ctx, line, maxText).slice(0, 2)) {
      ctx.fillText(l, cx, y + 24);
      y += 46;
    }

    ctx.fillStyle = INK;
    ctx.font = `800 36px ${BODY}`;
    ctx.fillText('beastlyfacts.com', cx, S - 58);

    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (!blob) return null;
    return new File([blob], fileName, { type: 'image/png' });
  } catch {
    return null;
  }
}

// Share sheets only earn their place on phones. Desktop Chrome and Edge have
// navigator.share too, but it opens the Windows or macOS share panel, whose
// "Copy" copies the attached image or nothing, never the text and link. So a
// desktop copies the message straight to the clipboard and says so, and a
// phone gets the share sheet with the card picture attached.
// A touch-first device counts even when userAgentData says otherwise:
// Android tablets report mobile: false and still have a share sheet worth
// using. Touchscreen laptops keep a fine primary pointer, so they copy.
const onPhone = () => navigator.userAgentData?.mobile === true
  || (window.matchMedia?.('(pointer: coarse)').matches ?? false);

// Whether to offer a separate image share: on phones only. Plain Share sends
// text and link only, because an attached file switches the Android sheet to
// its image layout, which has no Copy, and apps like Threads keep the
// picture and drop the text. Phones without a share sheet (the in-app
// browsers of Reddit, Instagram and the like) still get the button: the
// picture opens full screen to press and hold instead (showImageToSave).
export const canShareImage = () => typeof navigator !== 'undefined' && onPhone();

// For browsers with no share sheet: the picture full screen with a note to
// press and hold it, which saves or shares an image even inside in-app
// browsers. Plain DOM so any page can call it without a component.
function showImageToSave(file) {
  const src = URL.createObjectURL(file);
  const overlay = document.createElement('div');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Your result picture');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:200;background:rgba(10,20,15,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Your result picture';
  img.style.cssText = 'max-width:100%;max-height:70vh;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.4);';
  const note = document.createElement('p');
  note.textContent = 'Press and hold the picture to save or share it.';
  note.style.cssText = 'color:#FFF9EE;font:600 16px system-ui,sans-serif;text-align:center;margin:0;';
  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = 'Done';
  close.style.cssText = 'background:#FFF9EE;color:#1D3226;font:700 15px system-ui,sans-serif;border:0;border-radius:12px;padding:10px 28px;';
  const done = () => {
    overlay.remove();
    URL.revokeObjectURL(src);
  };
  close.addEventListener('click', done);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) done(); });
  overlay.append(img, note, close);
  document.body.appendChild(overlay);
}

// Clipboard API first; the hidden-textarea fallback covers browsers that
// block it. Runs inside the click, before anything is awaited, so the
// browser still counts it as user-initiated.
function copyText(text) {
  const done = () => toast({ title: 'Copied to your clipboard', description: 'Paste it anywhere to share your result.' });
  const fallback = () => {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      const ok = document.execCommand('copy');
      el.remove();
      if (ok) done();
      else toast({ title: 'Could not copy', description: text });
    } catch {
      toast({ title: 'Could not copy', description: text });
    }
  };
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done, fallback);
  else fallback();
}

// Shares text + link. On a phone the card image rides along when the
// platform takes files, and the link goes in the text as well as url because
// several share targets drop `url` once a file is attached. `image` is
// optional: cards with no picture share text and link only.
export async function shareQuizResult({ title, text, url, image }) {
  // A phone with no share sheet (an in-app browser) asking for the picture
  // gets it full screen to press and hold, and the text goes to the
  // clipboard alongside it.
  if (!navigator.share && image && onPhone()) {
    copyText(`${text} ${url}`);
    const file = await image;
    if (file) showImageToSave(file);
    return;
  }
  if (!navigator.share || !onPhone()) {
    copyText(`${text} ${url}`);
    return;
  }
  const file = await image;
  if (file && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ title, text: `${text} ${url}`, files: [file] });
      return;
    } catch (e) {
      if (e?.name === 'AbortError') return;
      // Anything else (a lost user gesture, a target that refuses files):
      // fall through to the plain share.
    }
  }
  navigator.share({ title, text, url }).catch(() => {});
}
