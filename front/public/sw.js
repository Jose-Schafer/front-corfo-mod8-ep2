const CACHE_NAME = "caching";
const urlsToCache = [
  "/",
  "/index.html",
  "/main.js",
  "/vite.svg",
  "/icons/icon-192x192.png",
  "/static/json/doctors.json",
  "/static/json/more-doctors.json",
  "/static/img/doctor-1.png",
  "/static/img/doctor-2.png",
  "/static/img/doctor-3.png",
  "/static/img/doctor-4.png",
  "/static/img/facebook-icon.png",
  "/static/img/favicon.ico",
  "/static/img/gediatria.png",
  "/static/img/gediatria_h540.png",
  "/static/img/instagram-icon.png",
  "/static/img/rayos_x.png",
  "/static/img/rayos_x_h540.png",
  "/static/img/traumatologia.png",
  "/static/img/traumatologia_h540.png",
  "/static/img/twitter-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
      );
    }),
  );
});
