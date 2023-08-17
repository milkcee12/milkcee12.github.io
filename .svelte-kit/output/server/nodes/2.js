

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4a8740b0.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Footer.ae284739.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/index.1c4e5ac3.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = ["_app/immutable/assets/2.fa08f315.css","_app/immutable/assets/Footer.bb6e3ef6.css"];
export const fonts = [];
