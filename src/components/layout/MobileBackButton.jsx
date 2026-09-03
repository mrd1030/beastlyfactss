import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

// Child routes that should show back button on mobile
const CHILD_ROUTES = ['/guides/'];

export default function MobileBackButton({ pageTitle }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // Trailing slash stripped first: Cloudflare serves the listing as /guides/
  // while prerender.mjs renders it as /guides, and "/guides/".startsWith
  // ("/guides/") is true, so the real visitor's first render grew a Back
  // button the prerendered HTML did not have, a structural mismatch that
  // failed hydration on /guides/ for everyone.
  const path = pathname.replace(/\/+$/, '');
  const isChildRoute = CHILD_ROUTES.some(prefix => path.startsWith(prefix));

  if (!isChildRoute) return null;

  return (
    /* Only rendered on mobile; parent Navbar hides logo when this mounts */
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="flex items-center gap-1 text-sm font-body font-semibold text-foreground hover:text-secondary transition-colors no-select p-2 -m-2"
    >
      <ChevronLeft className="w-5 h-5" />
      Back
    </button>
  );
}