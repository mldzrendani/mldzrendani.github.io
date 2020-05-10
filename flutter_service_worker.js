'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "91dd24ead17c1f462b5581c45c2a8284",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "4afbabeecaf2f244b29e84d6bc1868f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2717510d2f46a15b58f6ec670ebb7576",
".git/logs/refs/heads/master": "2717510d2f46a15b58f6ec670ebb7576",
".git/logs/refs/remotes/origin/master": "f7bffdd8d45f6654f7b4a915302364b5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7b/20c51a633c83e4dc73798839b8e45c2bd65168": "43962ebca1b2ff0b80d9c7903228520d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/0dc594a469fccf4e3b41cdaa22b24996a9f786": "442caa9628988527db195bda72004ab9",
".git/objects/aa/92a4bf5939f25774cf6831ad955dcd7afa861d": "bc9cfcc036870c45e92400db0fe65fad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f0/7cb0752ccb1cc5f948eedffae5eadac97a6804": "a1db16e181f90ded3a1d60d2486a9b54",
".git/refs/heads/master": "9d0ce7cbf94fc9072d8089ff8ce7f779",
".git/refs/remotes/origin/master": "9d0ce7cbf94fc9072d8089ff8ce7f779",
"assets/AssetManifest.json": "5a76e53f73fd7d4bd514ea3301e9ed2b",
"assets/assets/fonts/OpenSans-Bold.ttf": "0062c34665a3fc0f2278cd4e955702ec",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/Quicksand-Bold.ttf": "809cd8ab97c465b57cb1a44b1795f12c",
"assets/assets/fonts/Quicksand-Light.ttf": "5d51b01f8405b8c5ae5df55a8c3019cc",
"assets/assets/fonts/Quicksand-Medium.ttf": "f65d1a07e0f4521c99d900e31e4bc530",
"assets/assets/fonts/Quicksand-Regular.ttf": "678b12a6a938c32eb5fa88f2f439c2df",
"assets/FontManifest.json": "2bd7efd1a036359a325b93bc758d6bd0",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "817d3fd1e88f9cd00b309b5f7cb1af49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8f809c395a1798bcec05bf5ef7ae6b0a",
"/": "8f809c395a1798bcec05bf5ef7ae6b0a",
"main.dart.js": "396a5ab4bcb7c919d766c3c5e99a73f5",
"manifest.json": "f3535890290047a619fa839a10bd3776"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
