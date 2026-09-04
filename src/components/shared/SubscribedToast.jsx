import { useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

// Shows the "you're in" toast when the visitor arrives from the /subscribed/
// worker redirect (public/_worker.js) with ?subscribed=1, then removes the
// parameter so a reload or a shared link does not repeat it. Mount-only on
// purpose: the redirect is a full page load, so there is no client-side
// navigation to listen for, and reading window.location here rather than
// during render keeps the prerendered HTML and the hydrating client identical.
export default function SubscribedToast() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__IS_PRERENDER__) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('subscribed') !== '1') return;
    toast({
      title: "You're in.",
      description: "Check your inbox for the welcome email. If it's not there in a few minutes, look in spam and drag it out so the next one lands.",
    });
    params.delete('subscribed');
    const rest = params.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${rest ? `?${rest}` : ''}${window.location.hash}`);
  }, []);
  return null;
}
