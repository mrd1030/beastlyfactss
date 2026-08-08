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
  //
  // Two things both have to survive every fallback: the picture itself (not
  // the article's own og:image, usually an unrelated featured photo) and a
  // way back to the article. Sharing an actual File is what makes most share
  // sheets treat it as "sending the picture", but in practice a lot of mobile
  // browsers report navigator.share without real navigator.canShare({files})
  // support (confirmed: falls through on this site across Messages, X,
  // Instagram, Threads, and email alike, so it's the browser, not the
  // target). For that fallback, sharing the article's url would resolve to
  // the article's own og:image, not this infographic - sharing the image's
  // own url instead means an unfurled preview shows the right picture. The
  // article link still rides along as plain text, most share targets
  // auto-linkify a bare url even without building a card for it.
  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const articleUrl = window.location.href;
    const absoluteImageUrl = new URL(src, window.location.origin).href;
    const description = caption || alt || document.title;
    const title = document.title;
    const textWithArticleLink = `${description}\n\n${articleUrl}`;

    if (navigator.share && navigator.canShare) {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const filename = src.split('/').pop() || 'image.jpg';
        const file = new File([blob], filename, { type: blob.type || 'image/jpeg' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title, text: textWithArticleLink });
          return;
        }
      } catch (err) {
        if (err?.name === 'AbortError') return;
        // Fetch/File construction failed (offline, CORS, unsupported type) -
        // fall through to url-based sharing below rather than dead-ending.
      }
    }

    // No file-sharing support: share the image's own url so an unfurled
    // preview shows the infographic itself, with the article link kept as
    // plain text in `text` rather than lost entirely.
    if (navigator.share) {
      try {
        await navigator.share({ title, text: textWithArticleLink, url: absoluteImageUrl });
        return;
      } catch (err) {
        if (err?.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(textWithArticleLink);
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
            className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-body font-bold text-white bg-black/70 backdrop-blur-sm px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
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
