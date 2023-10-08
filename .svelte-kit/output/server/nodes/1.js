

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9abe8356.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/stores.20f72157.js","_app/immutable/chunks/singletons.6db22e1b.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = [];
export const fonts = [];
