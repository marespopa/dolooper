if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const o=e=>s(e,n),r={module:{uri:n},exports:t,require:o};a[n]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LP-lq39LqUZ0bq7OtKGk8/_buildManifest.js",revision:"803c78cdb4032dd7c87485b18ca6b1a3"},{url:"/_next/static/LP-lq39LqUZ0bq7OtKGk8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/147-cedc62521500ec58.js",revision:"cedc62521500ec58"},{url:"/_next/static/chunks/578-9eb769cbb25b304c.js",revision:"9eb769cbb25b304c"},{url:"/_next/static/chunks/64-86155b73e55becba.js",revision:"86155b73e55becba"},{url:"/_next/static/chunks/661-57f0c66f98660c6b.js",revision:"57f0c66f98660c6b"},{url:"/_next/static/chunks/891-71ab8a3f2b34bfe3.js",revision:"71ab8a3f2b34bfe3"},{url:"/_next/static/chunks/framework-ac88a2a245aea9ab.js",revision:"ac88a2a245aea9ab"},{url:"/_next/static/chunks/main-697f2a296c0e4d7c.js",revision:"697f2a296c0e4d7c"},{url:"/_next/static/chunks/pages/_app-5eeea54c53d106b3.js",revision:"5eeea54c53d106b3"},{url:"/_next/static/chunks/pages/_error-f165129afb6f7685.js",revision:"f165129afb6f7685"},{url:"/_next/static/chunks/pages/index-21a0759b14b98dc8.js",revision:"21a0759b14b98dc8"},{url:"/_next/static/chunks/pages/overview-d9097ac0927bbd97.js",revision:"d9097ac0927bbd97"},{url:"/_next/static/chunks/pages/planning-c787c17b76a11881.js",revision:"c787c17b76a11881"},{url:"/_next/static/chunks/pages/privacy-policy-e575b362caf8394c.js",revision:"e575b362caf8394c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/53a9169c96cbb4d8.css",revision:"53a9169c96cbb4d8"},{url:"/_next/static/css/a829ddf17802a90b.css",revision:"a829ddf17802a90b"},{url:"/_next/static/media/1060bab20f18b5c2.p.woff2",revision:"d5de368ad6cb9721be72319431de3adb"},{url:"/_next/static/media/8ed0c04f7e5d7b36.woff2",revision:"d9e0d8b1dd2f16658a138c486b5c8c76"},{url:"/_next/static/media/b1464bad92c88a2d.woff2",revision:"86d7730928022ce4a8457e979238654b"},{url:"/_next/static/media/c528baaebca50056.woff2",revision:"b043858588196a795ae0613d36b0b7d4"},{url:"/_next/static/media/df4ba022c23c08de.woff2",revision:"60883f3586a85c7be1f5aa9e985aea48"},{url:"/_next/static/media/logo-dark.01f1764b.svg",revision:"ba7cbfa55b60a077e6cb4cc1b108d94f"},{url:"/_next/static/media/logo-light.838f1f81.svg",revision:"32f0fa0cc817d5d1e5afbfaf4d019509"},{url:"/favicon.ico",revision:"57f1d1bd5627b6fb9302afd3fadaa57a"},{url:"/favicon/android-chrome-192x192.png",revision:"bfd4225f702beb015f56e06c76305a48"},{url:"/favicon/android-chrome-512x512.png",revision:"24d06a5e080b9b96b1099c81cca4fc93"},{url:"/favicon/apple-touch-icon.png",revision:"72faa903103313f6b959b72ef7e439ce"},{url:"/favicon/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon/favicon-16x16.png",revision:"f2da8f68f9859d8d4af8e004d79cbef6"},{url:"/favicon/favicon-32x32.png",revision:"8b3174c4aed3db4abd27115004c4c03e"},{url:"/favicon/favicon.ico",revision:"57f1d1bd5627b6fb9302afd3fadaa57a"},{url:"/favicon/mstile-150x150.png",revision:"62bb03b3e0dcee753c1b8d910aeacf8f"},{url:"/favicon/safari-pinned-tab.svg",revision:"7ee65def51cab1bcdc11d406411fff0d"},{url:"/favicon/site.webmanifest",revision:"2b416c1d5bc2477dea1b272d12da5d16"},{url:"/logo-dark.svg",revision:"ba7cbfa55b60a077e6cb4cc1b108d94f"},{url:"/logo-light.svg",revision:"32f0fa0cc817d5d1e5afbfaf4d019509"},{url:"/logo.svg",revision:"5735d7853ca638868da79d1e19e38179"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
