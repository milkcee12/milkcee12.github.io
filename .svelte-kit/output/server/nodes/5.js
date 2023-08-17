import * as universal from '../entries/pages/(app)/playground/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/playground/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/playground/+page.js";
export const imports = ["_app/immutable/nodes/5.b3a17015.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/ArrowLink.8dd0893e.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/index.1c4e5ac3.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = ["_app/immutable/assets/5.72fa7399.css","_app/immutable/assets/ArrowLink.750bb7d1.css"];
export const fonts = [];
