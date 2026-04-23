const CACHE_NAME = 'lephone-v8';
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
  if (reqUrl.origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request).then(response => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || new Response('', { status: 504, statusText: 'Offline' })))
  );
});