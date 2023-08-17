export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.ico","favicon.png"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.2cb83cc2.js","app":"_app/immutable/entry/app.6ab981af.js","imports":["_app/immutable/entry/start.2cb83cc2.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/singletons.08f635a1.js","_app/immutable/chunks/index.dc6bd2f2.js","_app/immutable/entry/app.6ab981af.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3582ccdd.js"],"stylesheets":[],"fonts":[]},
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
