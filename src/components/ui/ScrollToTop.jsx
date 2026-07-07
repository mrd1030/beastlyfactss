import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // A hash means something on the page wants to scroll itself into view
        // (e.g. the Glossary's own hash-target effect) - resetting to the top
        // here would win the race and undo that, since this component has no
        // way to know what the target position should be.
        if (hash) return;
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}