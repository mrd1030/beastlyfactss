const CACHE_NAME = "beastlyfacts-v2";
// Separate from CACHE_NAME on purpose: this holds pages explicitly saved to
// Pack (see the CACHE_SAVED_PAGE message below) and must survive a runtime
// cache-name bump on its own version track, not get swept by activate's
// "delete anything that isn't the current CACHE_NAME" cleanup.
const SAVED_CACHE_NAME = "beastlyfacts-saved-v1";

// facts.json carries the full fact text inline (not just a title), so
// precaching it actually makes the whole Facts feed browsable offline from
// first install - unlike articles.json, which is a title/excerpt index with
// no article body, precaching that would only fake offline support.
const PRECACHE_URLS = ["/facts.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== SAVED_CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  // Cross-origin requests (GTM, analytics) are never worth caching and can
  // throw on opaque no-cors responses - scope runtime caching to the app's
  // own origin only.
  if (new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return response;
      })
      // caches.match() (called on the global CacheStorage, not a specific
      // Cache) searches every open cache, so this also serves anything
      // that only ever landed in SAVED_CACHE_NAME.
      .catch(() => caches.match(req))
  );
});

// Fired by FavoritesContext when something is saved to / removed from Pack,
// so that page's real content (not just its listing metadata) is fetched
// and kept available offline independent of whether it's ever been visited.
self.addEventListener("message", (event) => {
  const { type, url } = event.data || {};
  if (!url) return;

  if (type === "CACHE_SAVED_PAGE") {
    event.waitUntil(
      caches.open(SAVED_CACHE_NAME).then((cache) =>
        fetch(url)
          .then((response) => {
            if (response.ok) return cache.put(url, response);
          })
          .catch(() => {})
      )
    );
  } else if (type === "UNCACHE_SAVED_PAGE") {
    event.waitUntil(
      caches.open(SAVED_CACHE_NAME).then((cache) => cache.delete(url))
    );
  }
});

// Fired by the browser when a push arrives from the Supabase edge function
// (see supabase/functions/send-notification) - the payload is whatever JSON
// that function sent as the push message body.
self.addEventListener("push", (event) => {
  let data = { title: "Beastly Facts", body: "New content is up!", url: "/" };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch {
    // Non-JSON payload - fall back to the defaults above rather than drop
    // the notification entirely.
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/pwa/icon-256.png",
      badge: "/pwa/icon-256.png",
      data: { url: data.url },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(url) && "focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// Fired by the browser when it rotates or expires a push subscription on its
// own (token aging, a browser update, battery policy). Without this handler
// the subscription silently dies: the phone still holds notification
// permission, but pings stop and the Pack card falls back to "Enable" as if
// the user never opted in. Resubscribe with the same key and register the
// fresh endpoint straight with Supabase - no page is open when this fires,
// so the REST call has to happen here. The dead endpoint's old row is pruned
// by send-notification the next time it gets a 404/410 for it.
//
// VAPID_PUBLIC_KEY is duplicated from src/lib/pushNotifications.js and the
// two must stay in sync by hand (same arrangement as FACT_IMAGES in
// _worker.js). The Supabase URL and anon key are the public client-side
// values that already ship in the app bundle; RLS decides what they can
// touch (insert-only on this table), not their visibility.
const VAPID_PUBLIC_KEY = "BCRnhiBTSkzZJE86IOPyvyp-qsFZgcr1hYYZ4zTlWw8z2fb9hVlVVTQet5RPCKjYVYn_M7i_nM4JaGa1On4ASSg";
const SUPABASE_URL = "https://ipqqeofzlwvfnunduuru.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcXFlb2Z6bHd2Zm51bmR1dXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNTg2MzUsImV4cCI6MjA5NzczNDYzNX0.Ai1fuNqEvUKvIA1YSkMg0CMDh6hUO85h3a_0hGeEjok";

function urlBase64ToUint8Array(base64) {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const raw = atob((base64 + padding).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}

self.addEventListener("pushsubscriptionchange", (event) => {
  event.waitUntil(
    self.registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      })
      .then((subscription) => {
        const json = subscription.toJSON();
        // Plain insert, matching subscribeToPush() in the app: anon is
        // insert-only on this table, so the on_conflict upsert form is not
        // available to it. A 409 duplicate means this endpoint is already
        // registered, which is success, and fetch() does not throw on it.
        return fetch(`${SUPABASE_URL}/rest/v1/push_subscriptions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ endpoint: json.endpoint, p256dh: json.keys.p256dh, auth: json.keys.auth }),
        });
      })
      // Resubscribing can legitimately fail (permission since revoked at the
      // OS level) - there is nothing useful to do about it from here.
      .catch(() => {})
  );
});
