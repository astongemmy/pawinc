  self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('paw_cache').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/adminIndex.html',
       '/Css/PAW.css',
       '/Css/PAW_responsive.css',
       '/Css/fonts.css',
       '/Css/animate.css',
       '/Css/all.css',
       '/Js/PAW.js',
       '/user.json'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 alert(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
