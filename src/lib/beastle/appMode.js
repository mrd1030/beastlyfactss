// The installed Beastle app is the same site with its own manifest
// (public/beastle-manifest.json), so it has to recognize itself on launch.
// Runs in main.jsx before hydrateRoot, while the splash screen still covers
// the page: it only adds a class to <html>, and CSS swaps the site's header,
// footer and tabs for the Beastle bar (see index.css). Nothing React renders
// changes, so hydration is untouched.
const FLAG = 'beastle-app';
const CHECKED = 'beastle-app-checked';

export function initBeastleAppMode() {
  try {
    const standalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
    const params = new URLSearchParams(window.location.search);

    // Android and desktop launch through start_url, which carries ?app=beastle.
    if (params.get('app') === 'beastle') {
      sessionStorage.setItem(FLAG, '1');
      params.delete('app');
      const qs = params.toString();
      window.history.replaceState(window.history.state, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`);
    } else if (standalone && !sessionStorage.getItem(CHECKED) && window.location.pathname.startsWith('/beastle')) {
      // iOS home screen apps may open the saved page rather than start_url.
      // The main app always opens on "/", so a standalone session whose first
      // page is /beastle/ is the Beastle app.
      sessionStorage.setItem(FLAG, '1');
    }
    sessionStorage.setItem(CHECKED, '1');

    if (standalone && sessionStorage.getItem(FLAG)) {
      document.documentElement.classList.add('beastle-app');
    }
  } catch { /* storage blocked: stay the normal site */ }
}

export function isBeastleApp() {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('beastle-app');
}
