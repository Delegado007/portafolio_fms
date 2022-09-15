self.addEventListener('install', event => {
  event.waitUntil(precache())
})

async function precache() {
  const cache = await caches.open("v1")
  return cache.addAll(
    '/',
    '/index.html',
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
    '/assets/captures/ruadis1.webp',
    '/assets/captures/ruadis2.webp',
    '/assets/captures/ruadis3.webp',
    'assets/captures/petgram1.webp',
    'assets/captures/petgram2.webp',
    'assets/captures/petgram3.webp',
    'assets/captures/pokedux1.webp',
    'assets/captures/pokedux2.webp',
    'assets/captures/oyemusica1.webp',
    'assets/captures/oyemusica2.webp',
  )
}