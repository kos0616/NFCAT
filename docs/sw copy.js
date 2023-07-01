self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("nfcat-store")
      .then((cache) => cache.addAll(["index.html", "script.js"]))
  );
});

self.addEventListener("fetch", (e) => {
  alert(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
