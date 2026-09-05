import React, { useEffect, useRef } from 'react';

// Cloudflare Turnstile, for the one form on this site that can make us send an
// email to an address someone else typed.
//
// The library sign-in form will happily email any address entered into it, and
// the Supabase publishable key that drives it ships in the bundle, so
// Supabase's /auth/v1/otp endpoint is reachable by anyone with or without our
// page. A check in the form would therefore be theatre. CAPTCHA configured in
// Supabase is not: with it enabled, Supabase rejects any OTP request that does
// not carry a valid token, whoever sends it and from wherever.
//
// This component is the browser half of that. It renders nothing at all until
// VITE_TURNSTILE_SITE_KEY is set, so it can ship before the keys exist and
// before CAPTCHA is switched on in Supabase, with no window where sign-in is
// broken. Turn it on in this order:
//
//   1. Cloudflare -> Turnstile -> add a widget for beastlyfacts.com.
//   2. Set VITE_TURNSTILE_SITE_KEY in Cloudflare Pages and redeploy, so this
//      widget starts rendering and sign-in starts sending a token.
//   3. Supabase -> Authentication -> Attack Protection -> enable CAPTCHA
//      (Turnstile) with the secret key.
//
// Doing 3 before 2 breaks every sign-in, because Supabase would start demanding
// a token the page is not yet sending.
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export const isTurnstileEnabled = Boolean(SITE_KEY);

// render=explicit so nothing renders until we ask, which keeps the widget out
// of any other form that happens to be on the page.
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

// One shared promise: the script is fetched once per page even if the widget
// mounts, unmounts and remounts.
let scriptPromise = null;

// Turnstile's own theme: 'auto' follows prefers-color-scheme, which is the
// wrong signal here. This site's dark mode is class based (tailwind.config.js
// darkMode: ["class"], toggled on documentElement by useLocalStorage), so a
// reader on a light OS who has chosen dark on the site would get a white
// widget on a dark card. Read the class the site actually sets.
const siteTheme = () =>
  (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
    ? 'dark'
    : 'light';

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.turnstile);
    script.onerror = () => {
      // Let a later mount try again rather than caching the failure forever.
      scriptPromise = null;
      reject(new Error('Turnstile failed to load'));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

// onToken is called with a token on success and with '' whenever the token
// stops being usable, so a caller can simply gate on truthiness.
//
// resetSignal: bump this number after every attempt. A Turnstile token is
// single use, so a second send with the same token is rejected. Resetting
// hands the caller a fresh one.
// onUnavailable fires when the widget cannot be shown at all, which in practice
// means the script was blocked: a Content-Security-Policy missing
// challenges.cloudflare.com from script-src or frame-src, an extension, or a
// network that drops it. A caller should stop requiring a token at that point,
// because there is no way for the visitor to produce one and the alternative is
// a button that never works.
export default function TurnstileWidget({ onToken, onUnavailable, resetSignal = 0, className = '' }) {
  const container = useRef(null);
  const widgetId = useRef(null);
  // Held in a ref so the mount effect can stay dependency-free without
  // capturing a stale callback.
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;
  const onUnavailableRef = useRef(onUnavailable);
  onUnavailableRef.current = onUnavailable;
  // Which theme the current widget was drawn in, so the observer below only
  // redraws when it actually changed rather than on every class mutation.
  const themeRef = useRef(null);

  useEffect(() => {
    if (!SITE_KEY) return undefined;
    // Never during prerender: this page is prerendered (see prerender.mjs) and
    // an iframe injected into the captured HTML would be both meaningless and
    // a hydration mismatch.
    if (typeof window === 'undefined' || window.__IS_PRERENDER__) return undefined;

    let cancelled = false;
    let observer;

    const draw = (turnstile) => {
      if (cancelled || !container.current) return;
      if (widgetId.current) {
        turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
      themeRef.current = siteTheme();
      widgetId.current = turnstile.render(container.current, {
        sitekey: SITE_KEY,
        theme: themeRef.current,
        callback: token => onTokenRef.current(token),
        'expired-callback': () => onTokenRef.current(''),
        'error-callback': () => onTokenRef.current(''),
      });
    };

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !turnstile) return;
        draw(turnstile);

        // Turnstile has no API to restyle a widget in place, so following the
        // site's theme toggle means tearing it down and drawing it again. That
        // discards any solved token, which is why onToken is cleared first:
        // the caller must not be left holding a token for a widget that no
        // longer exists.
        observer = new MutationObserver(() => {
          if (siteTheme() === themeRef.current) return;
          onTokenRef.current('');
          draw(turnstile);
        });
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class'],
        });
      })
      .catch(() => {
        // A blocked or failed script must not strand the buyer with a form
        // that refuses to submit. Say so, so the caller drops the token
        // requirement and lets the request through. Supabase is still the one
        // enforcing: with CAPTCHA on there it rejects the request and the
        // buyer sees a real error instead of a dead button.
        onTokenRef.current('');
        if (onUnavailableRef.current) onUnavailableRef.current();
      });

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!resetSignal || !widgetId.current || !window.turnstile) return;
    window.turnstile.reset(widgetId.current);
    onTokenRef.current('');
  }, [resetSignal]);

  if (!SITE_KEY) return null;
  return <div ref={container} className={className} />;
}
