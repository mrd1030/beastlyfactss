import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from '@/lib/motion-safe';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

/**
 * Save-to-Pack toggle for content that isn't a fact (guides, encyclopedia
 * animals, beastlypedia entries, blog articles). Facts keep their own
 * heart on FactCard/FactModal, tied to isFavorite/toggleFavorite - this is
 * the equivalent for everything FavoritesContext.savedContent covers.
 *
 * @param {'guide'|'encyclopedia'|'beastlypedia'|'article'} type
 * @param {string} id        stable id/slug within `type`
 * @param {string} title     shown on the Pack row
 * @param {string} subtitle  small muted label on the Pack row (e.g. category)
 * @param {string} url       path-relative link back to this page
 */
export default function SaveButton({
  type,
  id,
  title,
  subtitle = '',
  url,
  label = 'Save',
  className = '',
  iconOnly = false,
}) {
  const { toggleSavedContent, isContentSaved } = useFavoritesCtx();
  const saved = isContentSaved(type, id);

  return (
    <button
      type="button"
      onClick={() => toggleSavedContent({ type, id, title, subtitle, url })}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${title} from your Pack` : `Save ${title} to your Pack`}
      className={`flex items-center gap-1.5 text-xs font-body font-bold transition-colors ${iconOnly ? 'p-3 sm:px-3 sm:py-2' : 'px-3 py-2'} rounded-xl border focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 ${
        saved
          ? 'bg-hotpink/10 border-hotpink/30 text-hotpink'
          : 'text-muted-foreground bg-card border-border hover:border-hotpink/40 hover:text-hotpink'
      } ${className}`}
    >
      <motion.span whileTap={{ scale: 1.4, rotate: 15 }} className="inline-flex">
        <Heart className={`w-4 h-4 ${saved ? 'fill-hotpink text-hotpink' : ''}`} />
      </motion.span>
      {!iconOnly && <span>{saved ? 'Saved' : label}</span>}
    </button>
  );
}
