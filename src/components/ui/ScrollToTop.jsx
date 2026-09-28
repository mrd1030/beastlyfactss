import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Scroll positions by history entry key. Mirrored to sessionStorage so a
// reload, or coming back from another site, still lands where you were.
const STORAGE_KEY = 'beastly-scroll-positions';
const RESTORE_WINDOW_MS = 3000;
let positions = {};
try { positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {}; } catch { /* none saved */ }
const persist = () => {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions)); } catch { /* ignore */ }
};

export default function ScrollToTop() {
    const location = useLocation();
    const { pathname, hash, key } = location;
    const navigationType = useNavigationType();
    const keyRef = useRef(key);

    // The browser's own restoration runs the moment back is pressed, before
    // the previous page has re-rendered its lazy-loaded body, so the page is
    // still short and the position clamps to near the top. Take it over.
    useEffect(() => {
        if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    }, []);

    // Layout effect so the key flips before any scroll event from the new
    // page's first paint can be recorded against the page just left.
    useLayoutEffect(() => { keyRef.current = key; }, [key]);

    useEffect(() => {
        let frame = 0;
        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                positions[keyRef.current] = window.scrollY;
            });
        };
        const onHide = () => persist();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('pagehide', onHide);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('pagehide', onHide);
            cancelAnimationFrame(frame);
            persist();
        };
    }, []);

    useEffect(() => {
        persist();
        // A hash means something on the page wants to scroll itself into view
        // (e.g. the Glossary's own hash-target effect) - resetting to the top
        // here would win the race and undo that, since this component has no
        // way to know what the target position should be.
        if (hash) return;
        // A new page (PUSH) or a replaced one starts at the top.
        if (navigationType !== 'POP') {
            window.scrollTo(0, 0);
            return;
        }
        // Back/forward (and a reload): return to where this entry was left.
        // The page may still be loading its body, so keep trying each frame
        // until it is tall enough, and give up the moment the reader scrolls
        // or taps on their own.
        const target = positions[key];
        if (!target) return;
        let raf = 0;
        let done = false;
        const started = performance.now();
        const stop = () => {
            done = true;
            cancelAnimationFrame(raf);
            ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(t => window.removeEventListener(t, stop));
        };
        ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(t => window.addEventListener(t, stop, { passive: true }));
        const tick = () => {
            if (done) return;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo(0, Math.min(target, max));
            if (max >= target || performance.now() - started > RESTORE_WINDOW_MS) stop();
            else raf = requestAnimationFrame(tick);
        };
        tick();
        return stop;
    }, [pathname, hash, key, navigationType]);

    return null;
}
