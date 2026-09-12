import React from 'react';
import { Check, Copy } from 'lucide-react';
import { BRAND } from '@/lib/utils/seo';

// A citation someone can take away without retyping it.
//
// This exists because the legal pages are built to be cited: by a herp society
// answering the same question for the tenth time, by a rescue, by a reporter on
// deadline after an escaped python. The failure mode without it is not that
// nobody credits the site, it is that they retype the URL and get it wrong.
//
// Two formats, and the HTML one is not an afterthought. A plain-text citation
// produces an unlinked mention; the snippet produces a link. Offering both costs
// one more string.
//
// No accessed date is baked in. At build time that would be the build date
// rather than the reader's, and a confidently wrong date inside someone else's
// published citation is worse than no date at all.
const FORMATS = [
  { key: 'text', label: 'Text' },
  { key: 'html', label: 'HTML' },
];

export default function CitationBox({ title, url, verified }) {
  const [format, setFormat] = React.useState('text');
  const [copied, setCopied] = React.useState(false);
  const fieldRef = React.useRef(null);
  const timer = React.useRef(null);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  // Straight quotes rather than curly. These strings get pasted into code as
  // often as into prose, and a curly quote inside an attribute is a bug the
  // person pasting it has to find.
  const plain = verified
    ? `${BRAND}, "${title}", ${verified}. ${url}`
    : `${BRAND}, "${title}". ${url}`;
  const html = `<a href="${url}">${title}</a>, ${BRAND}`;
  const value = format === 'text' ? plain : html;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard access needs a secure context and can be refused outright.
      // Selecting the field means the reader can still finish the job with a
      // keyboard, which is the whole point of it being a real input.
      const el = fieldRef.current;
      if (el) {
        el.focus();
        el.select();
        try {
          document.execCommand('copy');
        } catch {
          /* Nothing left to try: the text is selected and visible. */
        }
      }
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mt-12 rounded-xl border border-border bg-card p-5">
      <h2 className="font-display font-bold text-lg text-foreground mb-1">Cite this page</h2>
      <p className="text-sm font-body text-muted-foreground mb-4">
        Every entry here is quoted from the statute or regulation it comes from, with the date it was
        last read against the published text.
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        {FORMATS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFormat(f.key)}
            aria-pressed={format === f.key}
            className={`rounded-full px-3 py-1 text-xs font-body font-semibold border transition-colors ${
              format === f.key
                ? 'bg-primary text-primary-foreground border-transparent'
                : 'border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        {/* A real input rather than a <pre>, so the fallback path has something
            selectable and a reader can drag-select on a phone. readOnly rather
            than disabled: a disabled field cannot be selected or copied. */}
        <textarea
          ref={fieldRef}
          readOnly
          rows={format === 'text' ? 3 : 2}
          value={value}
          onFocus={(e) => e.target.select()}
          aria-label={`Citation for this page, ${format === 'text' ? 'plain text' : 'HTML'} format`}
          className="flex-1 resize-none rounded-lg border border-border bg-background p-3 text-xs font-mono text-foreground leading-relaxed"
        />
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-4 py-2.5 text-sm font-body font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Announced rather than only shown, so the confirmation is not colour and
          an icon alone. */}
      <p className="sr-only" role="status" aria-live="polite">
        {copied ? 'Citation copied to the clipboard' : ''}
      </p>
    </section>
  );
}
