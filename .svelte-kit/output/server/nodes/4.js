import * as universal from '../entries/pages/(app)/about/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/about/+page.js";
export const imports = ["_app/immutable/nodes/4.c1021d9d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3582ccdd.js"];
export const stylesheets = ["_app/immutable/assets/4.a31fe27f.css"];
export const fonts = [];
