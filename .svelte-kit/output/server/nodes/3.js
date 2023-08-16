import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.26c8fcde.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Footer.98b23f61.js","_app/immutable/chunks/index.8c87a89b.js"];
export const stylesheets = ["_app/immutable/assets/3.d8890494.css","_app/immutable/assets/Footer.1754833a.css"];
export const fonts = [];
