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
		client: {"start":"_app/immutable/entry/start.9662f90f.js","app":"_app/immutable/entry/app.633492e6.js","imports":["_app/immutable/entry/start.9662f90f.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/singletons.fe28bf71.js","_app/immutable/chunks/index.dc6bd2f2.js","_app/immutable/entry/app.633492e6.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3582ccdd.js"],"stylesheets":[],"fonts":[]},
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
