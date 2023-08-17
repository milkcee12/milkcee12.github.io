

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6751b979.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Footer.2026ab58.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/index.1c4e5ac3.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = ["_app/immutable/assets/2.2ef1d584.css","_app/immutable/assets/Footer.1754833a.css"];
export const fonts = [];
