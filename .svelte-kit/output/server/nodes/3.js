import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.fa7b533e.js","_app/immutable/chunks/ArrowLink.c549ad77.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/Footer.ae284739.js"];
export const stylesheets = ["_app/immutable/assets/3.33950384.css","_app/immutable/assets/ArrowLink.53b551ea.css","_app/immutable/assets/Footer.bb6e3ef6.css"];
export const fonts = [];
