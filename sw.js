const CACHE_NAME = 'tourguide-site';
const CACHE_URLS =  ['index.html',
    'help.html',
    'destinations.html',
    'contact.html',
    'js/main.js',
    'css/style.css',
    'sw.js'
];


/*
                     'images/cambridge-1.png',
                     'images/cambridge-2.png',
                     'images/logo.png',
                     'images/london-1.png',
                     'images/london-2.png',
                     'images/manchester-1.png',
                     'images/manchester-2.png',
                     'images/me.png',
*/

//set up cache and files to add to it
//...

//add all URLs to cache when installed
self.addEventListener("install", function(event){
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                //add all URLs to cache
                return cache.addAll(CACHE_URLS);
            })
    );
});

//On activate update the cache with the new version and clean out old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName.startsWith('tourguide-site') && CACHE_NAME !== cacheName) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


//add all URLs to cache when installed
//...
//user has navigated to page - fetch required assets
self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            //check whether asset is in cache
            if(response){
                //asset in cache, so return it
                console.log(`Return ${event.request.url} from cache`);
                return response;
            }
            //asset not in cache so fetch asset from network
            console.log(`Fetch ${event.request.url} from network`);
            return fetch(event.request);
        })
    );
});

