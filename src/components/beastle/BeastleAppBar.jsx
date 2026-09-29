import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/lib/hooks/useLocalStorage';

// Header and tab bar for the installed Beastle app. Always rendered and
// hidden by CSS unless <html> has .beastle-app (see appMode.js and the
// [data-beastle-app-only] rules in index.css), so the prerendered HTML and
// the first client render match whichever mode the page opens in.
const TILE_COLORS = ['bg-primary', 'bg-accent', 'bg-muted-foreground/50', 'bg-accent'];

function TileMark() {
  return (
    <span className="grid grid-cols-2 gap-0.5" aria-hidden="true">
      {TILE_COLORS.map((c, i) => <span key={i} className={`w-2.5 h-2.5 rounded-[3px] ${c}`} />)}
    </span>
  );
}

const TABS = [
  { to: '/beastle/', label: 'Beastle', icon: TileMark },
  { to: '/pack/', label: 'My Pack', icon: Heart },
];

export default function BeastleAppBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // The site Navbar holds the theme switch, and it is hidden in the app.
  const [dark, setDark] = useDarkMode();
  const onTab = TABS.some(({ to }) => pathname.startsWith(to.replace(/\/$/, '')));

  return (
    <div data-beastle-app-only>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border navbar-safe-top">
        <div className="flex items-center h-14 px-4 gap-3">
          {onTab ? (
            <span className="flex items-center gap-2">
              <TileMark />
              <span className="font-display font-bold text-lg text-foreground">Beastle</span>
            </span>
          ) : (
            <button type="button" onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm font-body font-bold text-foreground" aria-label="Back">
              <ArrowLeft className="w-5 h-5" /> Back
            </button>
          )}
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="ml-auto p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun className="w-5 h-5 text-sunny" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
          </button>
        </div>
      </header>
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border no-select"
        style={{ paddingBottom: 'var(--safe-area-inset-bottom)' }}
        aria-label="Beastle navigation"
      >
        <div className="flex items-stretch h-14">
          {TABS.map(({ to, label, icon: Icon }) => {
            const active = pathname.startsWith(to.replace(/\/$/, ''));
            return (
              <Link
                key={to}
                to={to}
                className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] font-body font-bold transition-colors ${active ? 'text-secondary' : 'text-muted-foreground'}`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
