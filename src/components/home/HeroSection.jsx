import React, { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import { truncateDescription } from '@/lib/utils/truncate';

// Imported rather than referenced as /assets/hero-*.ext from public/, so Vite
// emits them with a content hash in the filename. That is what lets public/_headers
// cache them for a year as immutable: a changed hero is a changed URL, so nobody
// is ever served a stale one, and there is no rename to remember.
//
// This is deliberately NOT the image used for og:image and twitter:image. Those
// point at the unhashed public/assets/og-default.jpg, because social platforms
// cache share cards by URL and a hashed name would break every link already
// shared. Same picture, two different jobs, opposite requirements. See the note
// in public/_headers.
import hero400Avif from '@/assets/hero-400.avif';
import hero800Avif from '@/assets/hero-800.avif';
import hero1200Avif from '@/assets/hero-1200.avif';
import hero1600Avif from '@/assets/hero-1600.avif';
import hero400Webp from '@/assets/hero-400.webp';
import hero800Webp from '@/assets/hero-800.webp';
import hero1200Webp from '@/assets/hero-1200.webp';
import hero1600Webp from '@/assets/hero-1600.webp';
import hero400Jpg from '@/assets/hero-400.jpg';
import hero800Jpg from '@/assets/hero-800.jpg';
import hero1200Jpg from '@/assets/hero-1200.jpg';
import hero1600Jpg from '@/assets/hero-1600.jpg';

// The image dissolves rather than being cut off: its own alpha ramps out over
// the last third, revealing the page background, so there is no hard bottom
// edge for the text panel to fight. A tint laid over the top cannot do this,
// it only fakes it against one known background colour.
const MASK = 'linear-gradient(to bottom, black 0%, black 68%, transparent 96%)';

const srcSet = (a, b, c, d) => `${a} 400w, ${b} 800w, ${c} 1200w, ${d} 1600w`;
const HERO_AVIF = srcSet(hero400Avif, hero800Avif, hero1200Avif, hero1600Avif);
const HERO_WEBP = srcSet(hero400Webp, hero800Webp, hero1200Webp, hero1600Webp);
const HERO_JPG = srcSet(hero400Jpg, hero800Jpg, hero1200Jpg, hero1600Jpg);

// A single animated element, not <Link><motion.button>...</motion.button></Link> -
// nesting a <button> inside an <a> is invalid HTML content-model nesting, and
// Lighthouse's touch-target audit was flagging both as two overlapping,
// zero-spacing tap targets occupying the same box.
const MotionLink = motion(Link);

export default function HeroSection({ onOpenFact }) {
  // facts[0] on the hydration-critical first render, not
  // facts[new Date().getDate() % facts.length] computed inline: prerender.mjs
  // bakes in whatever "today" resolves to at build/deploy time, but this page
  // isn't rebuilt daily - any real visitor hydrating on a later calendar day
  // than the last deploy would compute a different index than what's in the
  // static HTML, a genuine text mismatch (React error #418/#423) that was
  // forcing a full client re-render (and the large layout shift that comes
  // with it) on every day but the one the site happened to be built on.
  // Deferring the real day-based pick to a post-mount effect (skipped during
  // prerendering, same as this app's other date/random-driven state) matches
  // prerendered HTML exactly on first paint, then upgrades right after.
  const [dailyFact, setDailyFact] = useState(() => facts[0]);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setDailyFact(facts[new Date().getDate() % facts.length]);
  }, []);
  const [learned, setLearned] = useState(false);

  const handleLearned = async () => {
    setLearned(true);
    const { default: confetti } = await import('canvas-confetti');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#E4632F', '#D9A441', '#FFD93D', '#E8336D'],
    });
  };

  return (
   <section className="relative flex flex-col items-center px-0 pt-0 pb-10">
        {/* ==================== HERO IMAGE ====================
            Contained rather than full-bleed, and at a fixed 3:2 that never
            changes across breakpoints, so the photograph is shown WHOLE at
            every width. The old treatment was an absolutely positioned
            min-h-screen background with object-cover, which on a 412x823 phone
            threw away 67% of the image width - enough that the bearded dragon
            in the previous hero was cropped out of the frame entirely and only
            the macaw survived.
            Top corners are rounded-2xl to match the site's cards (the daily
            fact card below uses the same). The bottom is deliberately square
            and fades into the page instead, so the image reads as part of the
            page rather than a floating tile. */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
          <picture>
            {/* AVIF first: <picture> takes the first source whose type the
                browser accepts, so order is the negotiation. The preload in
                index.html must name this same format or the preloaded file is
                fetched at high priority and discarded. */}
            <source srcSet={HERO_AVIF} sizes="100vw" type="image/avif" />
            <source srcSet={HERO_WEBP} sizes="100vw" type="image/webp" />
            <source srcSet={HERO_JPG} sizes="100vw" type="image/jpeg" />
            <img
              src={hero1200Jpg}
              alt="Majestic lion, colorful macaw, and bearded dragon in nature"
              className="h-full w-full object-cover"
              style={{ maskImage: MASK, WebkitMaskImage: MASK }}
              fetchpriority="high"
              width="1200"
              height="800"
              decoding="async"
            />
          </picture>

        </div>

      {/* Content */}
        {/* The text block, deliberately overlapping the image rather than
            sitting below it. It carries the page background as its own
            surface, so every character is on a flat colour at full contrast in
            both themes: no scrim, no negotiation with whatever the photograph
            happens to be doing. Inset from the image on both sides and pulled
            up so it reads as a panel resting ON the picture, while leaving the
            top two thirds of the photo completely clear.
            It is a real card, not a hole: bg-card sits a shade off the page
            background, with the same border and rounding the site's other
            cards use, and a shadow so it reads as resting ON the photograph
            rather than punched out of it. border-b-0 because the bottom edge
            runs on into the page rather than closing. */}
        <div className="relative z-[5] w-full max-w-[760px] -mt-[20vw] sm:-mt-[17vw] px-3 sm:px-5 flex flex-col items-center">
          <div className="w-full flex flex-col items-center">
          {/* Deliberately NOT animated in, same reasoning as the daily fact
              card below. framer-motion does not emit its styles into the
              prerendered HTML, so this block ships as a bare <div> and only
              gets its opacity/transform once framer hydrates. Removing the
              entrance animation from the fact card took desktop CLS from 0.291
              to 0.121, and this is the last motion wrapper left inside the
              element PageSpeed still names as the sole shift culprit. It is
              above the fold and already in the HTML, so it should just be
              visible. */}
          <div className="w-full rounded-[20px] sm:rounded-3xl border border-border/70 bg-card/[0.72] backdrop-blur-[10px] px-[18px] pt-[18px] pb-4 sm:px-7 sm:pt-6 sm:pb-[22px] shadow-[0_14px_30px_hsl(var(--foreground)/0.1)] text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-background font-body font-semibold text-xs px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Facts that roar. Guides that care.
            </div>

            <h1 className="font-display font-bold leading-[1.15] mb-4 text-[clamp(1.9rem,4.6vw,3.3rem)]">
              <span className="text-foreground">Wild facts. Pet care.</span>
              <br />
              <span className="text-secondary">We looked it up.</span>
              <br />
              <span className="text-foreground">So you don&rsquo;t have to.</span>
            </h1>

           <p className="text-base sm:text-lg text-foreground/80 font-body max-w-lg mx-auto mb-6 text-center leading-relaxed">
  Discover verified wild facts, beginner-friendly pet care guides, and short quizzes designed to make every visit quick, fun, and useful.
</p>

            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <MotionLink
                to="/facts/"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-secondary text-secondary-foreground font-body font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-secondary/20"
              >
                Show me something wild
                <ArrowRight className="w-4 h-4" />
              </MotionLink>
              {/* Only the destination word goes orange, and only in dark mode,
                  where muted-foreground on the dark card is too quiet to read
                  as a second call to action. Light mode already has the
                  contrast. No flex on this one any more: with the emoji gone it
                  is plain text, and an anonymous flex item would swallow the
                  space before the span. */}
              <MotionLink
                to="/encyclopedia/"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-card/80 border border-border text-muted-foreground font-body font-bold text-sm py-3 px-6 rounded-xl"
              >
                Browse the <span className="dark:text-secondary">Encyclopedia</span>
              </MotionLink>
            </div>

            <p className="text-xs text-muted-foreground font-body max-w-md mx-auto text-center leading-relaxed">
              Updated weekly with reviewed animal facts, practical pet care tips, and quiz challenges that help you learn faster.
            </p>
          </div>

          {/* Daily Fact - deliberately NOT animated in.
              Lighthouse flagged this exact element under "avoid non-composited
              animations" ("Effect has unsupported timing parameters", the
              delay), and a non-composited animation runs on the main thread and
              can feed CLS. It is also above the fold, so a 0.3s delay meant
              prerendered content sat invisible waiting for framer to hydrate.
              The markup is already in the HTML; it should simply be visible. */}
          <div className="mt-5 sm:mt-6 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 max-w-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⭐</span>
              <span className="font-body font-bold text-xs text-secondary">DAILY FACT</span>
            </div>
            <p className="text-sm text-foreground font-body leading-relaxed">
              {`${dailyFact.emoji} `}
              <strong>{`${dailyFact.title}:`}</strong>
              {` ${truncateDescription(dailyFact.fact, 120)} `}
              <button
                onClick={() => onOpenFact?.(dailyFact)}
                className="inline-flex align-text-bottom text-secondary hover:text-secondary/80 transition-colors p-2 -m-2"
                aria-label={`Read the full fact about ${dailyFact.animal}`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </p>
            {!learned ? (
              <button
                onClick={handleLearned}
                className="mt-3 text-xs font-body font-bold text-secondary hover:text-secondary/80 transition-colors"
              >
                ✨ I Learned Something!
              </button>
            ) : (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block mt-3 text-xs font-body font-bold text-teal"
              >
                🎉 +1 Brain Cell!
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}