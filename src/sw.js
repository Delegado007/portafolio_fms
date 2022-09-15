self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  if (!event.request.url.startsWith('chrome-extension') || !event.request.url.includes('extension') && event.request.url.startsWith('http')) {
    event.waitUntil(updateCache(request));
  }
});

async function precache() {
  const cache = await caches.open("v1")
  return cache.addAll([
    '/',
    '/index.html',
    '/main.js',
    '/assets/code.png',
    '/assets/rocket.png',
    '/assets/html5.png',
    '/assets/css3.png',
    '/assets/javascript.png',
    '/assets/react.png',
    '/assets/redux.png',
    '/assets/webpack.png',
    '/assets/styled-components.png',
    '/assets/postgresql.png',
    '/assets/graphql.png',
    '/assets/git.png',
    '/assets/tailwindCSS.png',
    '/assets/bootstrap.png',
    '/assets/node.png',
    '/assets/jsonWebTokens.png',
    '/assets/passport.png',
    '/assets/sequelize.png',
    '/assets/favicon-32x32.png',
    '/assets/logo.png',
    '/assets/captures/ruadis1.webp',
    '/assets/captures/ruadis2.webp',
    '/assets/captures/ruadis3.webp',
    '/assets/captures/petgram1.webp',
    '/assets/captures/petgram2.webp',
    '/assets/captures/petgram3.webp',
    '/assets/captures/pokedux1.webp',
    '/assets/captures/pokedux2.webp',
    '/assets/captures/oyemusica1.webp',
    '/assets/captures/oyemusica2.webp',
    '/assets/captures/ruadisdb1.webp',
    '/assets/captures/ruadisdb2.webp',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open("v1");
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open('v1');
  const response = await fetch(request);
  return cache.put(request, response);
}