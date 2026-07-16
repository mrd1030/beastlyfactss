import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { facts } from '@/lib/data/facts';

export default function HeroSection() {
  const dailyFact = facts[new Date().getDate() % facts.length];
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

      {/* Floating emojis */}
      {['🦋', '🐾', '🌿', '✨', '🦜'].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl opacity-40 pointer-events-none hidden sm:block"
          style={{ left: `${15 + i * 18}%`, top: `${20 + i * 10}%` }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.3, ease: 'easeInOut' }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-28 w-full flex justify-center">
        <div className="max-w-2xl h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              <Link to="/facts/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-secondary/20"
                >
                  🧠 Start with Verified Facts
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/encyclopedia/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-card/80 border border-border text-muted-foreground font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2"
                >
                  📚 Browse the Encyclopedia
                </motion.button>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground font-body max-w-md mx-auto text-center leading-relaxed">
              Updated weekly with reviewed animal facts, practical pet care tips, and quiz challenges that help you learn faster.
            </p>
          </motion.div>

          {/* Daily Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 max-w-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⭐</span>
              <span className="font-display font-bold text-xs text-secondary">DAILY FACT</span>
            </div>
            <p className="text-sm text-foreground font-body leading-relaxed">
              {dailyFact.emoji} <strong>{dailyFact.title}:</strong> {dailyFact.fact.slice(0, 120)}...
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}