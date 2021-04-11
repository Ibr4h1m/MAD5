const cacheName = 'tourguide-site';
const appShellFiles =  ['index.html',
    'help.html',
    'destinations.html',
    'contact.html',
    'js/main.js',
    'css/style.css',
    'sw.js'
];


self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(appShellFiles);
  })());
});


// Simple Activate since the other one is BS

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});

