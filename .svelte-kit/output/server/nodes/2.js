

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3909b8c1.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Footer.8240fd61.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/index.1c4e5ac3.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = ["_app/immutable/assets/2.c50a972a.css","_app/immutable/assets/Footer.10cf7bca.css"];
export const fonts = [];
