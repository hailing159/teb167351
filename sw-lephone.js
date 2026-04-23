const CACHE_NAME = 'lephone-v10';
const CACHE_URLS = ['./'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('notificationclick', event => {event.notification.close();const chatId=event.notification.data&&event.notification.data.chatId;event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(clients=>{const client=clients.find(c=>c.visibilityState==='visible')||clients[0];if(client){client.focus();return new Promise(resolve=>{setTimeout(()=>{client.postMessage({type:'open_chat',chatId:chatId});resolve();},800);});}return self.clients.openWindow('./').then(newClient=>{if(newClient&&chatId){setTimeout(()=>newClient.postMessage({type:'open_chat',chatId:chatId}),2000);}});}).catch(()=>{}));});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const reqUrl = new URL(event.request.url);
  if (reqUrl.protocol === 'blob:' || reqUrl.protocol === 'data:') return;
  if (reqUrl.origin !== self.location.origin) return;
  const dest = event.request.destination;
  const allowedDest = ['document','script','style','image','font','manifest','worker','audio','video','track'];
  if (dest && !allowedDest.includes(dest)) return;
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
  const isHTML = dest === 'document' || reqUrl.pathname.endsWith('.html') || reqUrl.pathname === '/' || reqUrl.pathname.endsWith('/');
  if (isHTML) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request).then(cached => cached || new Response('', { status: 504, statusText: 'Offline' })))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => new Response('', { status: 504, statusText: 'Offline' }))
  );
});