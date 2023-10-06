import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.a371df35.js","_app/immutable/chunks/ArrowLink.d0f453f7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3582ccdd.js","_app/immutable/chunks/Icon.aa87506e.js","_app/immutable/chunks/Footer.7ceb9127.js","_app/immutable/chunks/stores.690daa7f.js","_app/immutable/chunks/singletons.8d50b7cc.js","_app/immutable/chunks/index.dc6bd2f2.js"];
export const stylesheets = ["_app/immutable/assets/3.ec3b93e9.css","_app/immutable/assets/ArrowLink.86a66d21.css","_app/immutable/assets/Footer.8dd84e9f.css"];
export const fonts = [];
