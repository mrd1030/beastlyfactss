import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';

// Public VAPID key only - safe to ship client-side. It just proves to the
// push service which server is allowed to send to a subscription; the
// private key that actually signs sends lives only in the Supabase edge
// function's secrets (see supabase/functions/send-notification).
const VAPID_PUBLIC_KEY = 'BCRnhiBTSkzZJE86IOPyvyp-qsFZgcr1hYYZ4zTlWw8z2fb9hVlVVTQet5RPCKjYVYn_M7i_nM4JaGa1On4ASSg';

function urlBase64ToUint8Array(base64) {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const raw = atob((base64 + padding).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}

export function isPushSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
}

export async function getExistingSubscription() {
  if (!isPushSupported()) return null;
  const reg = await navigator.serviceWorker.ready;
  return reg.pushManager.getSubscription();
}

export async function subscribeToPush() {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return null;

  const reg = await navigator.serviceWorker.ready;
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

export async function unsubscribeFromPush() {
  const sub = await getExistingSubscription();
  if (sub) await sub.unsubscribe();
}
