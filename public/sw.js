const CACHE_PREFIX = "deivid-souza-site";
const CACHE_VERSION = "v1";
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;
const BASE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, "");

const pageUrl = (path = "/") => `${BASE_PATH}${path}`;

const PRECACHE_URLS = [
  pageUrl("/"),
  pageUrl("/acompanhamento/"),
  pageUrl("/resultados/"),
  pageUrl("/planos/"),
  pageUrl("/contato/"),
  pageUrl("/brand/deivid-souza-logo.webp"),
  pageUrl("/favicon.svg"),
  pageUrl("/resultados/aluna-antes.jpeg"),
  pageUrl("/resultados/aluna-depois-01.jpeg"),
  pageUrl("/resultados/aluna-depois-02.jpeg"),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.allSettled(
          PRECACHE_URLS.map((url) => cache.add(url)),
        ),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME,
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

const timeout = (milliseconds) =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("network-timeout")), milliseconds),
  );

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await Promise.race([
      fetch(request),
      timeout(3500),
    ]);

    if (response && response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch {
    return (
      (await cache.match(request)) ||
      (await cache.match(pageUrl("/")))
    );
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (
    url.pathname.includes("/_next/static/") ||
    /\.(?:css|js|webp|jpe?g|png|svg|woff2?)$/i.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(request));
  }
});
