

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.01bc0fc8.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/index.65a935d6.js","_app/immutable/chunks/stores.5a4d7f85.js","_app/immutable/chunks/singletons.1cc93f3c.js","_app/immutable/chunks/index.63b8cf9a.js"];
export const stylesheets = [];
export const fonts = [];
