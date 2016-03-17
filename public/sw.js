console.log('started ServiceWorker');


this.addEventListener('install', function(event) {
    console.log('start install')
    event.waitUntil(
        caches.open('first-cache').then(function(cache) {
            return cache.addAll([
                '../styles/style.css',
                '../js/app.js',
                '../images/logo.png',
                '../images/header-small.jpg',
                '../images/icon_sprite.png',
            ]);
        })
    );
});
this.addEventListener('activate', function(event) {
	console.log('activated', event);
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
          return response || fetch(event.request)
      })
  );
});
this.addEventListener('push', function(event) {
	console.log('pushed', event);
});
this.addEventListener('message', function(event) {
	console.log('message received', event);
});