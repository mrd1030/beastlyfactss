import React, { useEffect, useState } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { useIsMobileViewport } from '@/lib/hooks/useIsMobileViewport';
import { isPushSupported, getExistingSubscription, subscribeToPush, unsubscribeFromPush } from '@/lib/pushNotifications';

// Mobile-only entry point on purpose, same as the swipe gestures and the
// enlarged tap targets elsewhere in this pass: push itself works fine in a
// desktop browser too, but this round of "make it feel like an app" changes
// is scoped to not add anything new to the desktop site's surface.
export default function NotificationOptIn() {
  const isMobile = useIsMobileViewport();
  const [supported, setSupported] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isPushSupported()) return;
    setSupported(true);
    getExistingSubscription().then((sub) => setSubscribed(!!sub));
  }, []);

  if (!isMobile || !supported) return null;

  const handleToggle = async () => {
    setBusy(true);
    try {
      if (subscribed) {
        await unsubscribeFromPush();
        setSubscribed(false);
      } else {
        const sub = await subscribeToPush();
        setSubscribed(!!sub);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
        {subscribed ? <Bell className="w-5 h-5 text-secondary" /> : <BellOff className="w-5 h-5 text-muted-foreground" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-sm text-foreground">
          {subscribed ? "You're getting notified" : 'Get notified about new posts'}
        </p>
        <p className="text-xs text-muted-foreground font-body mt-0.5">
          {subscribed ? 'Turn off any time.' : 'A ping when a new fact, guide, or article goes up. No spam.'}
        </p>
      </div>
      <button
        onClick={handleToggle}
        disabled={busy}
        className={`flex-shrink-0 px-4 py-3 sm:py-2 rounded-xl text-xs font-body font-bold transition-colors disabled:opacity-50 ${
          subscribed
            ? 'bg-muted text-muted-foreground hover:bg-muted/80'
            : 'bg-secondary text-secondary-foreground hover:opacity-90'
        }`}
      >
        {busy ? '...' : subscribed ? 'Turn off' : 'Enable'}
      </button>
    </div>
  );
}
