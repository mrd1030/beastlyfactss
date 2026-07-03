import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Helmet>
                <title>Page Not Found | Beastly Facts</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="text-center max-w-md">
                <span className="text-5xl block mb-4" role="img" aria-label="See-no-evil monkey">🙈</span>
                <h1 className="font-display font-bold text-3xl text-foreground mb-2">404 — Page Not Found</h1>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                    We couldn't find <span className="font-semibold text-foreground">"{pageName}"</span>.
                    It may have moved, or it never existed in the first place.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-opacity hover:opacity-90"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/encyclopedia/"
                        className="text-sm font-display font-semibold text-secondary hover:underline"
                    >
                        Browse the Encyclopedia →
                    </Link>
                </div>
            </div>
        </div>
    );
}
