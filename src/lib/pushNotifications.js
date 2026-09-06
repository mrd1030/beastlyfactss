import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';

// Public VAPID key only - safe to ship client-side. It just proves to the
// push service which server is allowed to send to a subscription; the
// private key that actually signs sends lives only in the Supabase edge
// function's secrets (see supabase/functions/send-notification).
// Duplicated in public/sw.js for the pushsubscriptionchange handler (a
// static file that can't import this module) - keep the two in sync.
const VAPID_PUBLIC_KEY = 'BCRnhiBTSkzZJE86IOPyvyp-qsFZgcr1hYYZ4zTlWw8z2fb9hVlVVTQet5RPCKjYVYn_M7i_nM4JaGa1On4ASSg';

// Remembers that this device asked for notifications at some point, which the
// push subscription itself can't tell us once it's gone. Android reinstalls
// the WebAPK whenever Chrome re-mints it, and that reinstall can drop the push
// subscription (and sometimes the notification permission with it) while every
// other bit of site storage survives. Without this flag that looks identical to
// a user who never opted in, so the Pack card quietly went back to "Enable" and
// the pings just stopped.
const OPT_IN_KEY = 'beastly-push-opt-in';

export function getPushOptIn() {
  try {
    return localStorage.getItem(OPT_IN_KEY) === 'true';
  } catch {
    return false;
  }
}

function setPushOptIn(value) {
  try {
    if (value) localStorage.setItem(OPT_IN_KEY, 'true');
    else localStorage.removeItem(OPT_IN_KEY);
  } catch {
    // Private mode or storage disabled - the toggle still works for this
    // session, it just can't self-heal after an app update.
  }
}

function urlBase64ToUint8Array(base64) {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const raw = atob((base64 + padding).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}

export function isPushSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
}

// navigator.serviceWorker.ready never settles while nothing is registered for
// this scope, so awaiting it bare can leave the opt-in card stuck reading
// "Enable" forever on a launch where registration failed. Give it a couple of
// seconds, then fall back to whatever registration actually exists.
function getReadyRegistration() {
  return Promise.race([
    navigator.serviceWorker.ready,
    new Promise((resolve) => {
      setTimeout(() => resolve(navigator.serviceWorker.getRegistration()), 2000);
    }),
  ]).catch(() => null);
}

async function createSubscription(reg) {
  const subscription =
    (await reg.pushManager.getSubscription()) ||
    (await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    }));

  const json = subscription.toJSON();
  if (isSupabaseConfigured) {
    const { error } = await supabase
      .from('push_subscriptions')
      .insert({ endpoint: json.endpoint, p256dh: json.keys.p256dh, auth: json.keys.auth });
    // 23505 = unique_violation on the endpoint column - this device already
    // subscribed, which is exactly the state we want, not a failure.
    if (error && error.code !== '23505') throw error;
  }
  return subscription;
}

export async function getExistingSubscription() {
  if (!isPushSupported()) return null;
  const reg = await getReadyRegistration();
  if (!reg) return null;
  const sub = await reg.pushManager.getSubscription();
  // Backfill for devices that subscribed before this flag existed, so the
  // first app update after this ships can already heal itself rather than
  // needing one more round of enable-it-again.
  if (sub) setPushOptIn(true);
  return sub;
}

export async function subscribeToPush() {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return null;

  const reg = await getReadyRegistration();
  if (!reg) return null;

  const subscription = await createSubscription(reg);
  setPushOptIn(true);
  return subscription;
}

// Silently puts a dropped subscription back for a device that already opted
// in. Only ever runs when the OS permission is still granted, so it can't
// raise a permission prompt without a user gesture; if the WebAPK update took
// the permission too, this returns null and NotificationOptIn asks for it back
// with one tap instead of pretending nothing was ever enabled.
export async function restorePushSubscription() {
  if (!isPushSupported()) return null;

  const reg = await getReadyRegistration();
  if (!reg) return null;

  const existing = await reg.pushManager.getSubscription();
  if (existing) {
    setPushOptIn(true);
    return existing;
  }

  if (!getPushOptIn()) return null;
  if (Notification.permission !== 'granted') return null;

  return createSubscription(reg).catch(() => null);
}

export async function unsubscribeFromPush() {
  setPushOptIn(false);
  const sub = await getExistingSubscription();
  if (sub) await sub.unsubscribe();
}
