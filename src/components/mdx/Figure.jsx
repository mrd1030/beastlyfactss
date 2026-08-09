import React, { useState, useEffect } from 'react';
import { Share2, Download, Check, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from '@/lib/motion-safe';

export default function Figure({
  src,
  alt = '',
  caption = '',
  className = '',
  shareable = false,
}) {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Escape-to-close and a scroll-locked background while open, same pattern
  // ImageLightbox.jsx uses. Scoped to lightboxOpen so nothing runs, and
  // nothing needs cleaning up, for the vast majority of Figures a reader
  // never opens.
  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

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
    // caption/alt describe what's IN the picture (fine for a figcaption or
    // screen reader, wrong tone for a share). The page's own meta description
    // is already written as what the article is ABOUT, use that instead.
    const description = document.querySelector('meta[name="description"]')?.content || document.title;
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

  // The download control is a real <a href target="_blank"> below, not a
  // button - a genuine link click is the one mechanism every browser treats
  // as a normal navigation rather than a script action. Two scripted
  // techniques were tried here already and both failed on real devices:
  // blob-url + <a download> (WebKit mostly ignores the download attribute)
  // and a plain window.open() call (DuckDuckGo's popup/script protections
  // silently swallowed it). This handler only intercepts the click when it
  // can offer something strictly better than that plain link navigation -
  // the real native "choose where to save" dialog, desktop Chrome/Edge only.
  // Everywhere else it does nothing and lets the link's own href/target
  // open the image in a new tab, where the user long-presses to save it.
  const handleDownload = async (e) => {
    if (!window.showSaveFilePicker) return;

    e.preventDefault();
    e.stopPropagation();
    const filename = src.split('/').pop() || 'image.jpg';

    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [{ description: 'Image', accept: { [blob.type || 'image/jpeg']: ['.jpg', '.jpeg'] } }],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (err) {
      if (err?.name === 'AbortError') return; // user cancelled the picker
      // Fetch/save failed some other way - fall back to the same plain
      // open-in-new-tab behavior non-picker browsers get by default.
      window.open(src, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative group">
        {/* A <button> wrapping the <img>, kept as a SIBLING of the
            download/share overlay below rather than a parent of it - both
            hang off this same relative div, and the overlay paints on top via
            absolute positioning. A click on Download/Share hits that overlay
            element directly; it never reaches this button's onClick at all,
            regardless of whether the click handler happens to call
            stopPropagation. Nesting <a>/<button> inside this button would
            be invalid HTML and risk exactly the interference this avoids by
            construction instead. */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={alt ? `View larger: ${alt}` : 'View larger image'}
          className="block w-full text-left cursor-zoom-in bg-transparent border-0 p-0 m-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
        >
          <img
            src={src}
            alt={alt}
            className="w-full rounded-xl border border-border shadow-sm"
            loading="lazy"
          />
        </button>
        {/* Purely decorative, pointer-events-none so it can never intercept a
            click - cursor-zoom-in alone has no equivalent on touch, so this
            gives mobile readers a visible reason to tap. Bottom-left,
            deliberately the opposite corner from Download/Share. */}
        <div className="absolute bottom-3 left-3 flex items-center justify-center text-white bg-black/70 backdrop-blur-sm p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <Maximize2 className="w-4 h-4" />
        </div>
        {shareable && (
          <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              aria-label="Download this image"
              title="Download"
              className="flex items-center justify-center text-white bg-black/70 backdrop-blur-sm p-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
            >
              {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            </a>
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share this image"
              title="Share"
              className="flex items-center justify-center text-white bg-black/70 backdrop-blur-sm p-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground font-body italic">
          {caption}
        </figcaption>
      )}

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Enlarged image'}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-card text-foreground shadow-lg hover:bg-muted transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={src}
                alt={alt}
                className="w-full max-h-[90vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}
