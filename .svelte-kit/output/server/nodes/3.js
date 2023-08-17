import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.fe2c739a.js","_app/immutable/chunks/ArrowLink.8dd0893e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/Footer.2026ab58.js"];
export const stylesheets = ["_app/immutable/assets/3.0ddd0e61.css","_app/immutable/assets/ArrowLink.750bb7d1.css","_app/immutable/assets/Footer.1754833a.css"];
export const fonts = [];
