import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function Figure({
  src,
  alt = '',
  caption = '',
  className = '',
  shareable = false,
}) {
  const [copied, setCopied] = useState(false);

  // window/document access stays inside the handler (not render), same rule
  // ImageLightbox follows, so this is safe under prerendering.
  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = window.location.href;
    const title = document.title;
    const text = caption || alt || title;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        if (err?.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${text} ${url}`.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard needs a secure context and permission; nothing useful to do
      // if it's refused, and an error toast here would be worse than silence.
    }
  };

  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative group">
        <img
          src={src}
          alt={alt}
          className="w-full rounded-xl border border-border shadow-sm"
          loading="lazy"
        />
        {shareable && (
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share this image"
            className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-body font-bold text-white bg-foreground/70 backdrop-blur-sm px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
          >
            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Share'}</span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground font-body italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
