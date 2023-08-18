

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6f01bc86.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/stores.0f096d57.js","_app/immutable/chunks/singletons.f5a221c6.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = [];
export const fonts = [];
