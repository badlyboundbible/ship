self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ship-rating').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/style.css'  // Add your stylesheets and scripts if needed
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
