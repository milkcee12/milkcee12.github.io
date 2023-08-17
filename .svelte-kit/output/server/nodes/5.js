import * as universal from '../entries/pages/(app)/playground/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/playground/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/playground/+page.js";
export const imports = ["_app/immutable/nodes/5.551b079a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/ArrowLink.c549ad77.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/index.1c4e5ac3.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = ["_app/immutable/assets/5.7eb4e548.css","_app/immutable/assets/ArrowLink.53b551ea.css"];
export const fonts = [];
