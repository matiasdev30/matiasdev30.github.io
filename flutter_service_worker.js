'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "bf185d454b600aac5fb3d1e14844242a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f6f5651bbdcbeaba007811de7037f803",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cbd5d8ec84f9c2f91237346c9097226c",
".git/logs/refs/heads/master": "cbd5d8ec84f9c2f91237346c9097226c",
".git/logs/refs/remotes/origin/master": "d727a753715ac57538afad3a91b7a054",
".git/objects/13/b77d66fec1d67f5c582f0251373ba229651e29": "c81f1f629c08b7c06b7670a2689ad9d3",
".git/objects/16/da2c15884316f127da02579893502d3691c28d": "613a0139a8934874011f1b3e464b3216",
".git/objects/1e/2cea7e070b78f39fc2ef3af768322385570c33": "0481aae441130a1d369b65882c84a581",
".git/objects/23/84a60ad798a0fb543a285c6a63c77a1dda562e": "0eaac4667d3a738ff6df62d2bf16d1b1",
".git/objects/2c/139a365444be93f53f45db15439ef34a6aee24": "538482d436ac0f0617c58759da63e4e3",
".git/objects/2e/f1fab1b36484ed67e868fcd0f733f7d68a5451": "81ab9e8e898b47e6d9785a97c52aaa4b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/40/09e305dfc55e840f97d43a63535690604ff946": "c51f6343a4aeaecd708f2de167a2165e",
".git/objects/40/53a3e95a0ad390e48dadd9e3c97b73ac4748de": "238197738aa8f23f2dbcd60a60cc9054",
".git/objects/43/a5af09209db9ecd85c8c42195e5172de8539cb": "8c292370b462a0d0369c8c1aecee2c7a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/e0680de6a05fc2a37aa6142cdaccb45a4a1291": "e72667ca6ace9c2da546e28d57761e4d",
".git/objects/63/fe25cb8fc70135cfebe634d6bf28957f0c23a1": "e0a25593061995ee23768d2f9121c8ae",
".git/objects/66/00040f14072330885c8e457ed258ebd5e84504": "9be370e4d0d496c9df473702c76a2ee8",
".git/objects/6a/77dbe1265e125459fac1d1e0c2e782cd1e1def": "a91d911ba0fbc83be5e85cd17b44ad1b",
".git/objects/6f/4aa507f8bef706bf439783bafca75ab1fc88c4": "63f99c88e7ce9c8204ea0f6a13319e76",
".git/objects/75/fe8736f82e85496f41d624a12d336412bc5208": "66da7a506d02f2ae9a29fa0f9c9c165d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/35cb1feed5643eae43d6eed8f10e4a4ba1fda7": "c2e2842173996b5867bcffd563559776",
".git/objects/8d/a63092bab6fa3cba16a7b2b802a9b0f7d79cd4": "cb6b648f5549db3388c2c9fcc434ac07",
".git/objects/8e/240725c19f7f3a4a0da8d811710e275ae21d40": "9cd3d014eae87cf6df43a0583f368e99",
".git/objects/90/37c4ce6baccb0aba9cc09deb78336e4f9fc7cb": "0e80cc18ffb77983b83ff09e34883853",
".git/objects/95/f31e567b1b95ad6f37d3a8950a96ef51ab5730": "13e55044a85596b35badaa4d9d5c145c",
".git/objects/9b/6249a6b82fd44399b668f925fc711143fc0b4b": "2b90f899e403b2965e2326bd717dfd2f",
".git/objects/9e/4dc4f6b0e6f6cf9f842bbed26db5cf5b617f54": "42430acc2e95bbf33a2491b8b09119dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/c7a920e8bdea2a659470f4f8a1d0c7750690d5": "937f8d2f3ea47463e223054725750487",
".git/objects/a3/d6eb282b120419022c6f30b8c2cffdf815584d": "a27ea3cfbb492a514dbd458a5b3b7330",
".git/objects/a5/92c7278bfe6d6ff65760a54da2c02b2446dd95": "5174334434d8412e113486e3584d143e",
".git/objects/a6/11863aaa9461bbe03688e74ddee8c9ccc8745c": "0c751d58319e9ecdb36465228dbbe13f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/eeeb82a5b00dc223df2dce6d476ef32dfa906c": "b053f7747644c0e0ebb64f9d7e279ccd",
".git/objects/b8/395294c6c32ca115c39379f519e9cea378cbb4": "5e52f90e54620aa115623596af46511e",
".git/objects/b9/40b351773783ea73c03684326b427a83448c95": "1741f14a0806e7717680467ae8627271",
".git/objects/c6/03d0c543c7bba1d99aeb25c7fedd644c2d535e": "7972ee5109f4d9c0d0fd7d2f11b91bfa",
".git/objects/c8/f71092861d705478a8e0d199bc3a1d9afebb9c": "453de577aae54739c75b20db5284e061",
".git/objects/cf/613224967fb2bef80e5af29709649d42e22133": "95e474221d2e067ba08cb6a192465870",
".git/objects/d1/a8d4bfe31e43dc37aed462273a4474e1e00c3c": "0df3aa0fbc1e3384e5ce38d38ebf8b4a",
".git/objects/d8/9caed62635a85a40a38702d83762210c8d1e2b": "075f221015c3f7341886feae2d9dedae",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/7c64aeee684a7ac67ec8994f02e42854cce9ff": "73027a7ab996a2122b7b39319aabecc5",
".git/objects/f0/9180ce3fe6a7bc3e833b842ab852881f143f67": "4c9b008c22bfea7906318ffacda80951",
".git/objects/fa/1497bb242f149af503aad46409ddaa281004af": "209dd2ba91b48b1288abbf5779a8543c",
".git/objects/fe/2b71b591c1267dcd7c7dcfec8b7faa2cc79858": "63ebad995f5ff7b23308ac581da52bf4",
".git/refs/heads/master": "63cfaf7fa16d18259d52a42de668a175",
".git/refs/remotes/origin/master": "63cfaf7fa16d18259d52a42de668a175",
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
"index.html": "f6f84bc1ae3fe2451d489ef8e9632e5a",
"/": "f6f84bc1ae3fe2451d489ef8e9632e5a",
"main.dart.js": "f83808cd8a406e9f26b227dd38175865",
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
