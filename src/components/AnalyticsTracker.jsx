import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is loaded and the ID exists
    if (window.gtag && import.meta.env.VITE_GA4_MEASUREMENT_ID) {
      window.gtag('config', import.meta.env.VITE_GA4_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}