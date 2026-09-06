import React, { useEffect, useState } from 'react';
import { Bell, BellOff, BellRing } from 'lucide-react';
import { useIsMobileViewport } from '@/lib/hooks/useIsMobileViewport';
import {
  isPushSupported,
  getExistingSubscription,
  getPushOptIn,
  restorePushSubscription,
  subscribeToPush,
  unsubscribeFromPush,
} from '@/lib/pushNotifications';

// Mobile-only entry point on purpose, same as the swipe gestures and the
// enlarged tap targets elsewhere in this pass: push itself works fine in a
// desktop browser too, but this round of "make it feel like an app" changes
// is scoped to not add anything new to the desktop site's surface.
export default function NotificationOptIn() {
  const isMobile = useIsMobileViewport();
  const [supported, setSupported] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  // Opted in on this device, but the subscription is gone and the permission
  // went with it - an Android WebAPK update is what does this. Say so rather
  // than falling back to the first-run "Get notified" pitch, which is what
  // made it look like the setting had silently reset itself.
  const [interrupted, setInterrupted] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isPushSupported()) return;
    setSupported(true);

    let cancelled = false;
    (async () => {
      const sub = await getExistingSubscription();
      if (cancelled) return;
      if (sub) {
        setSubscribed(true);
        return;
      }
      if (!getPushOptIn()) return;

      // Permission survived the update, so the subscription can come back
      // without asking for anything.
      const restored = await restorePushSubscription();
      if (cancelled) return;
      setSubscribed(!!restored);
      setInterrupted(!restored);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!isMobile || !supported) return null;

  const handleToggle = async () => {
    setBusy(true);
    try {
      if (subscribed) {
        await unsubscribeFromPush();
        setSubscribed(false);
        setInterrupted(false);
      } else {
        const sub = await subscribeToPush();
        setSubscribed(!!sub);
        setInterrupted(!sub && interrupted);
      }
    } finally {
      setBusy(false);
    }
  };

  const icon = subscribed ? (
    <Bell className="w-5 h-5 text-secondary" />
  ) : interrupted ? (
    <BellRing className="w-5 h-5 text-secondary" />
  ) : (
    <BellOff className="w-5 h-5 text-muted-foreground" />
  );

  const title = subscribed
    ? "You're getting notified"
    : interrupted
      ? 'Notifications got switched off'
      : 'Get notified about new posts';

  const detail = subscribed
    ? 'Turn off any time.'
    : interrupted
      ? 'An app update reset them on this device. Tap to turn them back on.'
      : 'A ping when a new fact, guide, or article goes up. No spam.';

  const label = subscribed ? 'Turn off' : interrupted ? 'Turn back on' : 'Enable';

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-sm text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground font-body mt-0.5">{detail}</p>
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
        {busy ? '...' : label}
      </button>
    </div>
  );
}
