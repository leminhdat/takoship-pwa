self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
});

self.addEventListener('fetch', (e) => {
  // Đoạn này giúp ứng dụng tải mượt mà hơn bằng cách phản hồi các yêu cầu từ mạng
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
