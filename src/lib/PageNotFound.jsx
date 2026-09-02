import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
    const location = useLocation();
    const navigate = useNavigate();
    const navigationType = useNavigationType();
    // Filled in after mount, not during render: 404.html is one static file
    // that prerender.mjs captured for its own probe path, and it is served for
    // every missing URL. Rendering the real path on the first pass made the
    // text differ from the captured HTML on every 404, which failed hydration.
    const [pageName, setPageName] = useState('');
    useEffect(() => {
        if (window.__IS_PRERENDER__) return;
        setPageName(location.pathname.substring(1));
    }, [location.pathname]);
    // 'PUSH' means this entry was reached by clicking something (a Link, a
    // navigate() call) during the current session - i.e. a broken internal
    // link. Landing here directly (typed URL, bookmark, external link) is
    // reported as 'POP' on the very first render, so "Go Back" only shows
    // when it actually leads somewhere on the site.
    const cameFromSite = navigationType === 'PUSH';

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Helmet>
                <title>Page Not Found | Beastly Facts</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="text-center max-w-md">
                <span className="text-5xl block mb-4" role="img" aria-label="See-no-evil monkey">🙈</span>
                <h1 className="font-display font-bold text-3xl text-foreground mb-2">404 - Page Not Found</h1>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                    {"We couldn't find "}<span className="font-semibold text-foreground">{pageName ? `"${pageName}"` : 'that page'}</span>{'. It may have moved, or it never existed in the first place.'}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    {cameFromSite && (
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-1.5 border border-border text-foreground px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-colors hover:bg-muted"
                        >
                            <ArrowLeft className="w-4 h-4" /> Go Back
                        </button>
                    )}
                    <Link
                        to="/"
                        className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-opacity hover:opacity-90"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/encyclopedia/"
                        className="text-sm font-body font-semibold text-secondary hover:underline"
                    >
                        Browse the Encyclopedia →
                    </Link>
                </div>
            </div>
        </div>
    );
}
