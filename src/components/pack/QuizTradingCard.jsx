import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { Share2, RotateCcw } from 'lucide-react';
import LocalImage from '@/components/shared/LocalImage';

// Score bands drive the card's frame, the way a trading card's rarity does.
// Tying the treatment to the result is the whole point: a shelf of these should
// read at a glance, and a perfect run should look different from a scraped pass.
// Colours come from the site's own palette rather than literal gold and silver,
// which would sit outside the theme and break in dark mode.
function tierFor(score, total) {
  const ratio = total > 0 ? score / total : 0;
  if (ratio === 1) {
    return {
      label: 'Perfect',
      frame: 'from-amber-300 via-yellow-200 to-amber-400 dark:from-amber-500 dark:via-yellow-400 dark:to-amber-600',
      badge: 'bg-amber-400 text-amber-950',
      glow: 'shadow-[0_0_0_1px_rgba(251,191,36,0.35),0_8px_24px_-8px_rgba(251,191,36,0.5)]',
    };
  }
  if (ratio >= 0.7) {
    return {
      label: 'Expert',
      frame: 'from-secondary/70 via-secondary/40 to-secondary/70',
      badge: 'bg-secondary text-secondary-foreground',
      glow: 'shadow-[0_0_0_1px_hsl(var(--secondary)/0.3),0_8px_24px_-10px_hsl(var(--secondary)/0.45)]',
    };
  }
  if (ratio >= 0.4) {
    return {
      label: 'Tracker',
      frame: 'from-muted-foreground/30 via-muted-foreground/15 to-muted-foreground/30',
      badge: 'bg-muted text-foreground',
      glow: 'shadow-md',
    };
  }
  return {
    label: 'Rookie',
    frame: 'from-border via-border/50 to-border',
    badge: 'bg-muted text-muted-foreground',
    glow: 'shadow-sm',
  };
}

export default function QuizTradingCard({ result, onShare, removeSlot }) {
  const { animalName, animalImage, animalEmoji, animalCategory, animalId, score, total } = result;
  const tier = tierFor(score, total);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`relative rounded-xl p-[2px] bg-gradient-to-br ${tier.frame} ${tier.glow}`}
    >
      {/* Inner card sits on the app's own surface so only the 2px frame carries
          the tier colour - a fully tinted card would fight everything else in
          the Pack grid. */}
      <div className="relative bg-card rounded-[10px] p-2 h-full flex flex-col">
        {removeSlot}

        <div className="flex items-center justify-between gap-1 mb-1.5 pr-5">
          <span className="text-[8px] font-display font-bold uppercase tracking-wider text-muted-foreground truncate">
            {animalCategory || 'Encyclopedia'}
          </span>
          <span className={`text-[8px] font-display font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${tier.badge}`}>
            {tier.label}
          </span>
        </div>

        {/* Square, because the -thumb variant these load is itself square:
            asking for any other ratio would just crop a already-small image
            for nothing. */}
        <div className="relative rounded-md overflow-hidden border border-border/60 bg-muted aspect-square mb-2">
          {animalImage ? (
            <LocalImage
              src={animalImage}
              alt={animalName}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">
              {animalEmoji || '🐾'}
            </div>
          )}
          {animalEmoji && (
            <span className="absolute bottom-1 left-1 text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              {animalEmoji}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-xs text-foreground leading-tight text-center line-clamp-2">
          {animalName}
        </h3>

        <p className="text-center mt-0.5 mb-2">
          <span className="font-display font-bold text-lg text-foreground tabular-nums">{score}</span>
          <span className="font-display font-bold text-[11px] text-muted-foreground tabular-nums">{`/${total}`}</span>
        </p>

        {/* Stacked rather than side by side: at this width two buttons in a row
            leave no room for their labels. mt-auto pins them to the bottom so
            they line up across cards even when a name wraps to two lines. */}
        <div className="flex flex-col gap-1 mt-auto">
          <button
            onClick={onShare}
            className="flex items-center justify-center gap-1 text-[10px] font-display font-bold px-1.5 py-1.5 rounded-md bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
          >
            <Share2 className="w-3 h-3" /> Share
          </button>
          <Link
            to={`/encyclopedia/animal/${animalId}/`}
            className="flex items-center justify-center gap-1 text-[10px] font-display font-bold px-1.5 py-1.5 rounded-md bg-muted hover:bg-accent text-foreground transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Retake
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
