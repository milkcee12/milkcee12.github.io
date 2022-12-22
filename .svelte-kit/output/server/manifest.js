export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.ico","favicon.png","scss/global.scss"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".scss":"text/x-scss"},
	_: {
		entry: {"file":"_app/immutable/start-13524c31.js","imports":["_app/immutable/start-13524c31.js","_app/immutable/chunks/index-f58f646f.js","_app/immutable/chunks/singletons-d3e9ae1a.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/playground",
				pattern: /^\/playground\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/work",
				pattern: /^\/work\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
