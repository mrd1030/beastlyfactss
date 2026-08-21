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
