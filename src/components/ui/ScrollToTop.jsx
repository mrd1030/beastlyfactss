import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        // A hash means something on the page wants to scroll itself into view
        // (e.g. the Glossary's own hash-target effect) - resetting to the top
        // here would win the race and undo that, since this component has no
        // way to know what the target position should be.
        if (hash) return;
        // Going back should land where you left, not at the top. The browser
        // already restores the scroll position of a history entry it is
        // returning to, and this effect was overwriting it on every POP: back
        // out of a deep dive and the hub you came from reopened at the masthead
        // with your place in a long page gone. A new page (PUSH) or a replaced
        // one still starts at the top, which is the case this component exists
        // for.
        if (navigationType === 'POP') return;
        window.scrollTo(0, 0);
    }, [pathname, hash, navigationType]);

    return null;
}
