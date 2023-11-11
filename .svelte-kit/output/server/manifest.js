export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.590ba45f.js","app":"_app/immutable/entry/app.7a55563b.js","imports":["_app/immutable/entry/start.590ba45f.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/singletons.5be13dd9.js","_app/immutable/chunks/index.63b8cf9a.js","_app/immutable/entry/app.7a55563b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/index.65a935d6.js"],"stylesheets":[],"fonts":[]},
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
