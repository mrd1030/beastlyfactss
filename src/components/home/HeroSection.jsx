import React, { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import { truncateDescription } from '@/lib/utils/truncate';

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
      colors: ['#FF8C42', '#00B8A9', '#FFD93D', '#E8336D'],
    });
  };

  return (
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
      {/* ==================== OPTIMIZED HERO IMAGE ==================== */}
      <div className="absolute inset-0">
        <picture>
          <source
            srcSet="/assets/hero-400.webp 400w, /assets/hero-800.webp 800w, /assets/hero-1200.webp 1200w, /assets/hero-1600.webp 1600w"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            type="image/webp"
          />
          <source
            srcSet="/assets/hero-400.jpg 400w, /assets/hero-800.jpg 800w, /assets/hero-1200.jpg 1200w, /assets/hero-1600.jpg 1600w"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            type="image/jpeg"
          />
          <img
            src="/assets/hero-1200.jpg"
            alt="Majestic lion, colorful macaw, and bearded dragon in nature"
            className="w-full h-full object-cover"
            fetchpriority="high"
            width="1200"
            height="800"
            decoding="async"
          />
        </picture>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      {/* Floating emojis - purely decorative.
          The position lives on a PLAIN span, not on the motion.span, because
          framer-motion does not emit its `style` prop into the prerendered
          HTML. When it was a motion.span the markup shipped with no left/top at
          all, so all five stacked at the same spot on first paint and only
          jumped to their real positions once framer hydrated (on mobile, after
          the vendor chunk lands several seconds in). That was a measurable
          layout shift caused entirely by decoration nobody is reading. Static
          markup carries the position now, and the inner motion.span only
          animates transforms, which cannot affect layout. */}
      {['🦋', '🐾', '🌿', '✨', '🦜'].map((emoji, i) => (
        <span
          key={i}
          className="absolute hidden sm:block pointer-events-none"
          style={{ left: `${15 + i * 18}%`, top: `${20 + i * 10}vh` }}
        >
          <motion.span
            className="block text-2xl opacity-40"
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.3, ease: 'easeInOut' }}
          >
            {emoji}
          </motion.span>
        </span>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-28 w-full flex justify-center">
        <div className="max-w-2xl h-full flex flex-col items-center justify-center">
          {/* Deliberately NOT animated in, same reasoning as the daily fact
              card below. framer-motion does not emit its styles into the
              prerendered HTML, so this block ships as a bare <div> and only
              gets its opacity/transform once framer hydrates. Removing the
              entrance animation from the fact card took desktop CLS from 0.291
              to 0.121, and this is the last motion wrapper left inside the
              element PageSpeed still names as the sole shift culprit. It is
              above the fold and already in the HTML, so it should just be
              visible. */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-background font-display font-semibold text-xs px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Facts that roar. Guides that care.
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
              <span className="text-foreground">Curated animal facts</span>
              <br />
              <span className="text-secondary">and practical care advice</span>
              <br />
              <span className="text-foreground">for curious families and animal lovers.</span>
            </h1>

           <p className="text-base sm:text-lg text-foreground/80 font-body max-w-lg mx-auto mb-6 text-center leading-relaxed">
  Discover verified wild facts, beginner-friendly pet care guides, and short quizzes designed to make every visit quick, fun, and useful.
</p>

            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <MotionLink
                to="/facts/"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-secondary/20"
              >
                Start with Verified Facts
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
                className="bg-card/80 border border-border text-muted-foreground font-display font-bold text-sm py-3 px-6 rounded-xl"
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
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 max-w-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⭐</span>
              <span className="font-display font-bold text-xs text-secondary">DAILY FACT</span>
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
                className="mt-3 text-xs font-display font-bold text-secondary hover:text-secondary/80 transition-colors"
              >
                ✨ I Learned Something!
              </button>
            ) : (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block mt-3 text-xs font-display font-bold text-teal"
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