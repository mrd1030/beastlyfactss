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
  // sheets treat it as "sending the picture", but files and a url can't
  // reliably travel together in one share() call, so the article link rides
  // along in `text` instead - it's included on every path below.
  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const articleUrl = window.location.href;
    const description = caption || alt || document.title;
    const title = document.title;
    const textWithLink = `${description}\n\n${articleUrl}`;

    if (navigator.share && navigator.canShare) {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const filename = src.split('/').pop() || 'image.jpg';
        const file = new File([blob], filename, { type: blob.type || 'image/jpeg' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title, text: textWithLink });
          return;
        }
      } catch (err) {
        if (err?.name === 'AbortError') return;
        // Fetch/File construction failed (offline, CORS, unsupported type) -
        // fall through to sharing the article link below rather than dead-ending.
      }
    }

    // No file-sharing support: share the article itself rather than a bare
    // image file with no way back to it, the article's own preview card
    // still shows this image further down the page.
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url: articleUrl });
        return;
      } catch (err) {
        if (err?.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(textWithLink);
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
