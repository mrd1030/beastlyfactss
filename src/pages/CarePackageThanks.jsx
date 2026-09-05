import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { CheckCircle, Download, Loader2, AlertCircle } from 'lucide-react';

// /care-packages/thanks/?session_id=cs_...
//
// Where Stripe sends the buyer after a successful payment. Not prerendered and
// noindex,nofollow: it renders nothing without a session id, and the copy on it
// is for one person who just paid, same treatment as /donate/success/.
//
// The session id in the URL is what proves the purchase here. The buyer has no
// account yet, and Stripe hands that id to their browser and to nobody else,
// so it is the only credential that exists at this moment. It unlocks exactly
// the one package it paid for, and the library at /care-packages/library/ is
// the durable way back in.
//
// The wait loop matters more than it looks. The redirect and the webhook are
// two independent deliveries racing each other, and the browser usually wins,
// so on arrival the purchase row very often does not exist yet. Showing "no
// purchase found" for that first second would be both wrong and alarming, so
// the page polls quietly and only gives up after a real delay.
const POLL_INTERVAL_MS = 1500;
const POLL_TIMEOUT_MS = 30000;

export default function CarePackageThanks() {
  const [params] = useSearchParams();
  const sessionId = params.get('session_id') || '';

  const [state, setState] = useState(sessionId ? 'waiting' : 'no-session');
  const [purchase, setPurchase] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const cancelled = useRef(false);

  useEffect(() => {
    if (!sessionId) return undefined;
    cancelled.current = false;
    const startedAt = Date.now();
    let timer;

    const poll = async () => {
      if (cancelled.current) return;
      try {
        const res = await fetch('/api/care-packages/download', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId, confirmOnly: true }),
        });
        const data = await res.json().catch(() => ({}));

        if (cancelled.current) return;

        if (res.ok && data?.ok) {
          setPurchase(data);
          setState('ready');
          return;
        }

        // 403 here means "not recorded yet", not "not yours": the row is
        // created by the webhook, and until it lands there is nothing to
        // match. Anything else is a real failure and not worth retrying at.
        if (res.status !== 403 && res.status !== 404) {
          setError(data?.error || 'Could not confirm that purchase.');
          setState('failed');
          return;
        }
      } catch {
        // A dropped request mid-poll is not a verdict. Fall through and retry
        // until the timeout decides.
      }

      if (Date.now() - startedAt > POLL_TIMEOUT_MS) {
        setState('slow');
        return;
      }
      timer = setTimeout(poll, POLL_INTERVAL_MS);
    };

    poll();
    return () => {
      cancelled.current = true;
      clearTimeout(timer);
    };
  }, [sessionId]);

  const handleDownload = useCallback(async () => {
    setDownloading(true);
    setError('');
    try {
      const res = await fetch('/api/care-packages/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.url) throw new Error(data?.error || 'Could not start the download.');
      // The signed URL carries Content-Disposition: attachment, so this starts
      // a download and leaves the page where it is.
      window.location.href = data.url;
    } catch (err) {
      setError(err?.message || 'Could not start the download.');
    } finally {
      setDownloading(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16">
      <Helmet>
        <title>Thank you | Beastly Facts</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 text-center"
      >
        {state === 'no-session' ? (
          <>
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
            <h1 className="font-display font-bold text-2xl text-foreground mb-2">Nothing to show here</h1>
            <p className="text-sm text-muted-foreground font-body mb-6">
              This page needs a checkout session to look up, and there is not one in the URL. If you have bought a package, your library has it.
            </p>
          </>
        ) : (
          <>
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" aria-hidden="true" />
            <h1 className="font-display font-bold text-2xl text-foreground mb-2">Thank you</h1>
            <p className="text-sm text-muted-foreground font-body mb-6">
              {purchase?.packageName
                ? `${purchase.packageName}, edition ${purchase.edition}, is yours. A Stripe receipt is on its way to ${purchase.email}.`
                : 'Your payment went through. Setting up your download now.'}
            </p>
          </>
        )}

        {state === 'waiting' && (
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground font-body">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Confirming with Stripe
          </p>
        )}

        {state === 'ready' && (
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {downloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                Preparing your file
              </>
            ) : (
              <>
                <Download className="w-4 h-4" aria-hidden="true" />
                Download the PDF
              </>
            )}
          </button>
        )}

        {state === 'slow' && (
          <p className="text-sm text-muted-foreground font-body">
            Your payment is confirmed but the download is taking longer than usual to appear. It will be in your library shortly. If it is not there in a few minutes, get in touch and we will sort it out.
          </p>
        )}

        {state === 'failed' && (
          <p className="text-sm text-red-500 font-body">{error}</p>
        )}

        {state === 'ready' && error && (
          <p className="text-sm text-red-500 font-body mt-3">{error}</p>
        )}

        <div className="mt-8 pt-6 border-t border-border text-sm font-body">
          <p className="text-muted-foreground mb-3">
            Every corrected edition of this package is a free re-download, so keep the library link rather than the file.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/care-packages/library/"
              className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-bold hover:bg-muted transition-colors"
            >
              Open your library
            </Link>
            <Link
              to="/care-packages/store/"
              className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-bold hover:bg-muted transition-colors"
            >
              Back to the store
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
