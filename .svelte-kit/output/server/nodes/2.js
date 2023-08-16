

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.97c08764.js","_app/immutable/chunks/index.8c87a89b.js","_app/immutable/chunks/Footer.98b23f61.js","_app/immutable/chunks/index.2677f4be.js"];
export const stylesheets = ["_app/immutable/assets/2.2ef1d584.css","_app/immutable/assets/Footer.1754833a.css"];
export const fonts = [];
