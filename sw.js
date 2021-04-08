self.addEventListener('install', function(event){
    console.log("SW Installed");
    event.waitUntil(
            caches.open('static')
            .then(function(cache){
            /*cache.add('/');
            cache.add('/index.html');
            cache.add('/js/main.js');*/
            cache.addAll([
                '/',
                '/index.html',
                '/contact.html',
                '/destinations.html',
                '/help.html',
                '/js/main.js',
                '/css/style.css'
            ]);
        })
    );
});

self.addEventListener('activate', function(event){
    console.log("SW Activated");
});

/*self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(res){
            if (res){
                return res;
            } else{
                return fetch(event.request);
            }
        })
    )
})*/