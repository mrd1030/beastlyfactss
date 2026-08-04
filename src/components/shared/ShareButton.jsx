import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

/**
 * Share control: the native sheet where the browser offers one, clipboard
 * everywhere else, with the copied state handled here.
 *
 * Written as a component because ten files already carry their own copy of this
 * same navigator.share/clipboard dance (FactCard, FactModal, ImageLightbox,
 * Gallery, Pack, Quiz, PostEngagement, AnimalCompare, AnimalQuiz,
 * KnowledgeQuiz). An eleventh copy was not worth writing. Those can migrate to
 * this over time; nothing forces them to at once.
 *
 * @param {string} title  share sheet title
 * @param {string} text   share sheet body, also the clipboard prefix
 * @param {string} url    absolute or path-relative; a path is resolved against
 *                        the current origin, so callers do not have to know it
 */
export default function ShareButton({
  title,
  text,
  url,
  label = 'Share',
  className = '',
  iconOnly = false,
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const absolute = /^https?:\/\//.test(url) ? url : `${window.location.origin}${url}`;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: absolute });
        return;
      } catch (err) {
        // Dismissing the sheet rejects with AbortError. That is a decision, not
        // a failure, so it must not fall through to silently copying instead.
        if (err?.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${text} ${absolute}`.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard needs a secure context and permission. Nothing useful to do
      // if it is refused, and an error toast here would be worse than silence.
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Share ${title}`}
      className={
        className ||
        'flex items-center gap-1.5 text-xs font-display font-bold text-muted-foreground hover:text-secondary transition-colors px-3 py-2 rounded-xl border border-border bg-card hover:border-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50'
      }
    >
      {copied ? <Check className="w-4 h-4 text-secondary" /> : <Share2 className="w-4 h-4" />}
      {!iconOnly && <span>{copied ? 'Copied!' : label}</span>}
    </button>
  );
}
