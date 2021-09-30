'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "24f4926b2297b04458a44ae65b3db364",
"assets/assets/81064774_2616847731885286_7149650548038303744_n.jpg": "f193857a26f7d92d01c8a19fd3f0fe0f",
"assets/assets/consistech.png": "a3a385f1b32e8828cfe11df22c175039",
"assets/assets/dash.png": "857076d1cae50027917eb05c34b2e2dd",
"assets/assets/df.png": "39cb8e670faf0f8f9c3d88be18a813d3",
"assets/assets/escolar.jpg": "1a55e1c89b0d9ab3f7999ad9d8780cb8",
"assets/assets/icon.png": "3e2806cc039bb9fb2a10ddb9d78a69b5",
"assets/assets/incricao.jpg": "e5bfe49067d833cabc5723aad9e25162",
"assets/assets/isutic.jpg": "9866ef4da125eb09e39fd5f0d137d375",
"assets/assets/isutic.png": "6a0e0decd04063596b930a46a1d61101",
"assets/assets/login.jpg": "dc0081b2ea3ca6828c393be03563091e",
"assets/assets/mbongo.png": "29a1aa4817c660499b4bc7b2374103c9",
"assets/assets/meet.png": "aba63c69e3ec7bda10bd06c5c3249656",
"assets/assets/messe.png": "4488954c4cf4e399e158e852863aebac",
"assets/assets/mixo.png": "7b119ec5d1d9261053df5ced1efed978",
"assets/assets/mvni2.png": "c0f96a022b1473290dde3480533369eb",
"assets/assets/mvni3.jpg": "e3dde6d2e22270dc8fded9a85a6e4f88",
"assets/assets/mvni3.png": "a098c919f5ed925db618f42be5d517e2",
"assets/assets/pay.png": "1f7eaab0b17113d16658bc73db3952e3",
"assets/assets/projecto.jpg": "fd5661f1f26cdac01a23fc4d61cbd0f5",
"assets/assets/trello.png": "8ce3ba67ba1488ad66fc3b19648095d2",
"assets/assets/zap.png": "569c435c606d145dbdce5297cc8ae59e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "97b7520dc0111d219ea30919fb803cdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "17808516f8c35927b80a19718c354ce9",
"icons/Icon-192.png": "d1e95cf99af709651d49861d699d33f0",
"icons/Icon-512.png": "c06b9079d764fababe0a3a512b560611",
"icons/Icon-maskable-192.png": "a9a508bc33290ae7df2793d766c0ebb9",
"icons/Icon-maskable-512.png": "a9a508bc33290ae7df2793d766c0ebb9",
"index.html": "80273a5b5899d3cae4a7d2897b6aad99",
"/": "80273a5b5899d3cae4a7d2897b6aad99",
"main.dart.js": "425dcccb175f2488c0489106b01bac39",
"manifest.json": "f15bb3e2b9b58f49ce1c44101e76cf8c",
"version.json": "8d60496e66e1f0d927774d6dac20edbf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
