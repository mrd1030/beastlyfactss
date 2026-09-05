import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { Download, Loader2, Mail, LogOut, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';
import { CARE_PACKAGES } from '@/lib/data/carePackages';

// /care-packages/library/
//
// Where a buyer comes back for the file. Not prerendered and noindex,nofollow:
// it renders nothing at all without a signed-in session, same treatment as
// /donate/success/.
//
// Sign-in is an emailed one time code, no password. There are no buyer accounts
// at checkout - Stripe collects an email, the webhook writes it onto the
// purchase row, and proving control of that inbox is what joins the two. A
// password would be one more thing to store, reset and leak for a $8.99 PDF.
//
// The purchase list is read straight from Supabase with the publishable key.
// That is safe because of the RLS policy in supabase/care_package_store.sql:
// a signed-in reader sees only rows whose email matches the address in their
// own token. The download itself does NOT go through that key - the bucket is
// private with no policies at all, and only the /api/care-packages/download
// route in public/_worker.js, which holds the service role key, can mint a
// signed URL.
export default function CarePackageLibrary() {
  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(true);

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [working, setWorking] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  const [purchases, setPurchases] = useState([]);
  const [loadingPurchases, setLoadingPurchases] = useState(false);
  const [busyPackage, setBusyPackage] = useState('');

  // getSession first, then the subscription. The listener alone is not enough:
  // it fires on a change, and an already-signed-in visitor arriving from a
  // bookmark has not changed anything.
  useEffect(() => {
    if (!isSupabaseConfigured) {
      setChecking(false);
      return undefined;
    }
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data?.session ?? null);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next ?? null);
      setChecking(false);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const loadPurchases = useCallback(async () => {
    if (!isSupabaseConfigured || !session) return;
    setLoadingPurchases(true);
    const { data, error: readError } = await supabase
      .from('purchases')
      .select('package_id, edition, created_at')
      .order('created_at', { ascending: false });
    if (readError) {
      setError('Could not load your library. Try again in a moment.');
    } else {
      // One card per package, not per payment: buying the same package twice
      // (a gift, a mis-click) is still one file to download.
      const seen = new Set();
      setPurchases((data || []).filter(row => {
        if (seen.has(row.package_id)) return false;
        seen.add(row.package_id);
        return true;
      }));
    }
    setLoadingPurchases(false);
  }, [session]);

  useEffect(() => { loadPurchases(); }, [loadPurchases]);

  const sendCode = async (e) => {
    e.preventDefault();
    setError('');
    setNotice('');
    setWorking(true);
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        // A buyer has no account before this, so one is created on first
        // sign-in. The address still has to be proved either way, and an
        // account here grants nothing except reading your own purchase rows.
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}/care-packages/library/`,
      },
    });
    setWorking(false);
    if (otpError) {
      setError(otpError.message || 'Could not send that email.');
      return;
    }
    setCodeSent(true);
    setNotice('Check your email and click the sign-in link. If the email also shows a six digit code, you can type it here instead.');
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    setError('');
    setWorking(true);
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token: code.trim(),
      type: 'email',
    });
    setWorking(false);
    if (verifyError) {
      setError(verifyError.message || 'That code did not work. Ask for a new one.');
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setPurchases([]);
    setCodeSent(false);
    setCode('');
    setNotice('');
  };

  const download = async (packageId) => {
    setBusyPackage(packageId);
    setError('');
    try {
      const token = session?.access_token;
      const res = await fetch('/api/care-packages/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ packageId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.url) throw new Error(data?.error || 'Could not start the download.');
      window.location.href = data.url;
    } catch (err) {
      setError(err?.message || 'Could not start the download.');
    } finally {
      setBusyPackage('');
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12">
      <Helmet>
        <title>Your care package library | Beastly Facts</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-bold text-3xl text-foreground mb-2">Your library</h1>
          <p className="font-body text-sm text-muted-foreground mb-8">
            Every care package you have bought, always at the current edition. Corrections are free re-downloads, so this page is worth more than the file on your desktop.
          </p>
        </motion.div>

        {!isSupabaseConfigured && (
          <div className="bg-card border border-border rounded-2xl p-6 text-sm font-body text-muted-foreground">
            Sign-in is not configured on this deployment.
          </div>
        )}

        {isSupabaseConfigured && checking && (
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground font-body">
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Checking your sign-in
          </p>
        )}

        {isSupabaseConfigured && !checking && !session && (
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <Mail className="w-6 h-6 text-secondary mb-3" aria-hidden="true" />
            <h2 className="font-display font-bold text-lg text-foreground mb-1">Sign in with your email</h2>
            <p className="text-sm text-muted-foreground font-body mb-5">
              Use the address you paid with. We will email you a sign-in link. No password, and nothing to remember.
            </p>

            <form onSubmit={sendCode} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="flex-1 bg-background border border-border rounded-full px-4 py-2.5 text-sm font-body text-foreground"
              />
              <button
                type="submit"
                disabled={working}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {working ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : null}
                {codeSent ? 'Send again' : 'Email me a sign-in link'}
              </button>
            </form>

            {codeSent && (
              <form onSubmit={verifyCode} className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-border">
                <input
                  type="text"
                  inputMode="numeric"
                  required
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  placeholder="6 digit code"
                  autoComplete="one-time-code"
                  className="flex-1 bg-background border border-border rounded-full px-4 py-2.5 text-sm font-body text-foreground"
                />
                <button
                  type="submit"
                  disabled={working}
                  className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-muted transition-colors disabled:opacity-60"
                >
                  Sign in
                </button>
              </form>
            )}

            {notice && <p className="text-sm text-muted-foreground font-body mt-4">{notice}</p>}
            {error && <p className="text-sm text-red-500 font-body mt-4">{error}</p>}
          </div>
        )}

        {isSupabaseConfigured && !checking && session && (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <p className="text-sm font-body text-muted-foreground">
                Signed in as <span className="text-foreground font-semibold">{session.user?.email}</span>
              </p>
              <button
                type="button"
                onClick={signOut}
                className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
                Sign out
              </button>
            </div>

            {error && (
              <p className="inline-flex items-start gap-2 text-sm text-red-500 font-body mb-4">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                {error}
              </p>
            )}

            {loadingPurchases && (
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground font-body">
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                Loading your packages
              </p>
            )}

            {!loadingPurchases && purchases.length === 0 && (
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                <h2 className="font-display font-bold text-lg text-foreground mb-1">Nothing here yet</h2>
                <p className="text-sm text-muted-foreground font-body mb-5">
                  No purchases are recorded against this address. If you paid with a different email, sign out and sign in with that one.
                </p>
                <Link
                  to="/care-packages/store/"
                  className="inline-block bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Browse the store
                </Link>
              </div>
            )}

            <div className="space-y-4">
              {purchases.map(row => {
                const pkg = CARE_PACKAGES.find(p => p.id === row.package_id);
                const current = pkg?.version || row.edition;
                const updated = pkg?.version && row.edition && pkg.version !== row.edition;
                return (
                  <div key={row.package_id} className="bg-card border border-border rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="font-display font-bold text-base text-foreground">
                        {pkg?.name || row.package_id}
                      </h2>
                      <p className="text-xs text-muted-foreground font-body mt-0.5">
                        {`Edition ${current}${pkg?.pages ? ` · ${pkg.pages} pages` : ''} · PDF`}
                      </p>
                      {updated && (
                        <p className="text-xs text-secondary font-body font-semibold mt-1">
                          {`Updated since you bought it (you paid for ${row.edition}). The new edition is free.`}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => download(row.package_id)}
                      disabled={busyPackage === row.package_id}
                      className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 flex-shrink-0"
                    >
                      {busyPackage === row.package_id ? (
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      ) : (
                        <Download className="w-4 h-4" aria-hidden="true" />
                      )}
                      Download
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <p className="text-xs text-muted-foreground font-body mt-8">
          Questions about format, printing or refunds are answered on the{' '}
          <Link to="/care-packages/faq/" className="underline hover:text-foreground">care package FAQ</Link>.
        </p>
      </div>
    </div>
  );
}
