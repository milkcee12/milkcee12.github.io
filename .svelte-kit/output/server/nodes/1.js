

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.90313ba0.js","_app/immutable/chunks/index.8c87a89b.js","_app/immutable/chunks/singletons.ba7b1d55.js","_app/immutable/chunks/index.2677f4be.js"];
export const stylesheets = [];
export const fonts = [];
