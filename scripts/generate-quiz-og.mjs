// Renders the 1200x630 share card (og:image / twitter:image) for every themed
// quiz and the three classics: the quiz emoji on a card tile, the title and tagline in the site's
// own faces, and the reward card a perfect score earns. No photography: a
// branded card reads better at thumbnail size than any animal photo, and it
// keeps guide and fact photos out of share previews.
//
// Output: public/assets/og/quiz-<id>.jpg, mozjpeg quality 80. The file name
// is the URL platforms cache the card against, so never rename one.
// ThemedQuizPage.jsx and Quiz.jsx (personality) point at this path; a quiz without its card falls back
// to og-default.jpg only if this script was never run, so run it whenever a
// quiz file lands:
//
//   node scripts/generate-quiz-og.mjs            (every quiz missing a card)
//   node scripts/generate-quiz-og.mjs --force    (re-render all of them)
//
// Renders a local HTML string in headless Chrome (puppeteer), which works in
// a cloud session: only external pages fail there.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { themedQuizzes } from '../src/lib/data/quizzes/index.js';
import { classicQuizzes, personalityQuiz } from '../src/lib/data/quizzes/classics.js';

const W = 1200;
const H = 630;
const outDir = 'public/assets/og';
const force = process.argv.includes('--force');
const fontUrl = (f) => pathToFileURL(path.resolve('public/fonts', f)).href;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = (quiz) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: 'Schibsted Grotesk'; src: url('${fontUrl('schibsted-grotesk-var.woff2')}'); font-weight: 400 900; }
@font-face { font-family: 'Atkinson'; src: url('${fontUrl('atkinson-hyperlegible-next-var.woff2')}'); font-weight: 200 800; }
* { margin: 0; box-sizing: border-box; }
body { width: ${W}px; height: ${H}px; background: #F9F1E1; color: #1D3226; font-family: 'Atkinson', sans-serif;
  display: flex; align-items: center; gap: 64px; padding: 0 80px; position: relative; overflow: hidden; }
body::before { content: ''; position: absolute; inset: 0; background:
  radial-gradient(circle at 12% 20%, rgba(181,73,27,0.10), transparent 45%),
  radial-gradient(circle at 95% 95%, rgba(28,76,62,0.12), transparent 50%); }
.tile { position: relative; flex: none; width: 340px; height: 420px; border-radius: 40px;
  background: linear-gradient(145deg, #FBE3D2, #FFF9EE 55%, #D9E9DF); border: 5px solid rgba(181,73,27,0.45);
  display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 18px 40px rgba(29,50,38,0.18); }
.tile .emoji { font-size: 170px; line-height: 1; font-family: 'Noto Color Emoji', sans-serif; }
.tile .num { margin-top: 26px; font-weight: 800; font-size: 26px; letter-spacing: 0.18em; color: #B5491B; }
.text { position: relative; flex: 1; }
.kicker { font-weight: 800; font-size: 26px; letter-spacing: 0.16em; text-transform: uppercase; color: #B5491B; }
h1 { font-family: 'Schibsted Grotesk', sans-serif; font-weight: 800; font-size: 76px; line-height: 1.02; margin-top: 14px; }
.tagline { font-size: 28px; line-height: 1.35; margin-top: 18px; color: #3C5446; }
.reward { display: inline-flex; align-items: center; gap: 14px; margin-top: 30px; padding: 14px 26px; border-radius: 999px;
  background: #1C4C3E; color: #FFF9EE; font-weight: 700; font-size: 26px; }
.reward .e { font-family: 'Noto Color Emoji', sans-serif; font-size: 32px; }
.domain { position: absolute; right: 80px; bottom: 34px; font-weight: 800; font-size: 24px; color: #B5491B; letter-spacing: 0.04em; }
</style></head><body>
<div class="tile"><div class="emoji">${quiz.emoji}</div><div class="num">${quiz.classic ? 'CLASSIC' : `QUIZ #${quiz.number}`}</div></div>
<div class="text">
  <div class="kicker">Beastly Facts Quiz</div>
  <h1>${esc(quiz.title)}</h1>
  <p class="tagline">${esc(quiz.tagline)}</p>
  <div class="reward">${quiz.reward
    ? `<span class="e">${quiz.reward.emoji}</span>Score ${quiz.questions.length}/${quiz.questions.length} to earn ${esc(quiz.reward.title)}`
    : `<span class="e">🐾</span>${esc(quiz.ogLine)}`}</div>
</div>
<div class="domain">beastlyfacts.com</div>
</body></html>`;

fs.mkdirSync(outDir, { recursive: true });
const todo = [...themedQuizzes, ...classicQuizzes, personalityQuiz].filter(q => force || !fs.existsSync(path.join(outDir, `quiz-${q.id}.jpg`)));
if (!todo.length) {
  console.log('Every quiz already has a share card. Pass --force to re-render.');
  process.exit(0);
}

const browser = await puppeteer.launch({ args: ['--no-sandbox', '--allow-file-access-from-files'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  for (const quiz of todo) {
    // A file page, not setContent: an about:blank page may not load the
    // file:// font faces.
    const tmp = path.join(os.tmpdir(), `quiz-og-${quiz.id}.html`);
    fs.writeFileSync(tmp, html(quiz));
    await page.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const png = await page.screenshot({ type: 'png' });
    const out = path.join(outDir, `quiz-${quiz.id}.jpg`);
    await sharp(png).jpeg({ quality: 80, mozjpeg: true }).toFile(out);
    console.log(`wrote ${out}`);
  }
} finally {
  await browser.close();
}
