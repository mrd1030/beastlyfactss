import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ChevronRight } from 'lucide-react';
import LocalImage from '@/components/shared/LocalImage';

// The compact browse row, shared by the encyclopedia and the care guides.
//
// Both pages used to render their own thing. The encyclopedia listed animals as
// these rows and the guides listed cards with a full-width image, and on a phone
// one of those cards filled the viewport: four animals fit in the space a single
// guide took. Card and row are now the same component, so the two halves of the
// same browse experience cannot drift again the way the duplicated GuideCard
// did.
//
// `subtitle` is the only thing that differs between the callers. Animals carry a
// scientific name; guides carry a tagline. Both sit in the same slot in the same
// italic, because in both cases it is the secondary identifier under the name.
const difficultyFallback = 'text-muted-foreground bg-muted';

export default function BrowseRow({
  to,
  name,
  subtitle,
  image,
  emoji,
  difficulty,
  difficultyClass,
  onOpenLegend,
  returnTo,
  available = true,
}) {
  const diffClass = difficultyClass || difficultyFallback;

  // The difficulty chip opens the legend rather than following the row's link,
  // so it has to stop the click from reaching the <Link> wrapping it.
  const chip = difficulty ? (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpenLegend?.(); }}
      className={`text-xs font-body font-semibold px-2 py-0.5 rounded-full hover:opacity-80 transition-all ${diffClass}`}
    >
      {difficulty}
    </button>
  ) : null;

  // The wrapper carries the size and the flex-shrink-0, not the image.
  // LocalImage renders <picture><img/></picture>, so a class on the image lands
  // inside the picture while the picture itself stays the flex item and is free
  // to shrink. With a long subtitle pushing the row, that squeezed a 40px
  // thumbnail to 22px on the guides list while the encyclopedia, whose
  // subtitles are short scientific names, never generated enough pressure to
  // show it.
  const thumb = image ? (
    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
      <LocalImage
        src={image}
        alt={name}
        loading="lazy"
        variant="card"
        className={`w-full h-full object-cover${available ? '' : ' grayscale'}`}
      />
    </div>
  ) : (
    <span className={`text-xl flex-shrink-0${available ? '' : ' grayscale'}`}>{emoji}</span>
  );

  const label = (
    <div className="flex items-center gap-3 min-w-0">
      {thumb}
      <div className="min-w-0">
        <p className="font-body font-semibold text-sm text-foreground truncate">{name}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground font-body italic truncate">{subtitle}</p>
        )}
      </div>
    </div>
  );

  // An unavailable entry is a placeholder for something not written yet, so it
  // is dimmed and carries no link and no chevron: nothing to navigate to.
  if (!available) {
    return (
      <div className="flex items-center justify-between bg-card/50 border border-border/50 rounded-xl px-4 py-3 opacity-60">
        {label}
        {chip}
      </div>
    );
  }

  return (
    <Link to={to} state={{ returnTo }}>
      <motion.div
        whileHover={{ x: 3 }}
        className="flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3 hover:border-secondary/40 hover:shadow-sm transition-all group cursor-pointer"
      >
        {label}
        <div className="flex items-center gap-2 flex-shrink-0">
          {chip}
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-secondary transition-colors" />
        </div>
      </motion.div>
    </Link>
  );
}
