export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.725f10a9.js","app":"_app/immutable/entry/app.7124eb3e.js","imports":["_app/immutable/entry/start.725f10a9.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/singletons.6db22e1b.js","_app/immutable/chunks/index.dc6bd2f2.js","_app/immutable/entry/app.7124eb3e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3582ccdd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
