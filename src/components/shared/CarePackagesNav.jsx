import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TABS = [
  { to: '/care-packages/', label: 'Home' },
  { to: '/care-packages/store/', label: 'Store' },
  { to: '/care-packages/why-we-exist/', label: 'Why We Exist' },
  { to: '/care-packages/faq/', label: 'FAQ' },
];

export default function CarePackagesNav() {
  const { pathname } = useLocation();
  return (
    <nav aria-label="Care packages" className="flex flex-wrap gap-2 mt-5">
      {TABS.map(tab => {
        const active = pathname === tab.to || (tab.to !== '/care-packages/' && pathname.startsWith(tab.to));
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${
              active
                ? 'bg-accent text-accent-foreground'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
