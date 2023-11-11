import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.fd8f35d2.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/index.65a935d6.js","_app/immutable/chunks/fa.f7b4b20a.js","_app/immutable/chunks/fa.svelte_svelte_type_style_lang.5e53c3f2.js","_app/immutable/chunks/await_block.dfaf1967.js","_app/immutable/chunks/store.fd2838ef.js","_app/immutable/chunks/index.63b8cf9a.js","_app/immutable/chunks/index.3a7fde4f.js","_app/immutable/chunks/singletons.1ec5ef08.js"];
export const stylesheets = ["_app/immutable/assets/0.2fee61ac.css","_app/immutable/assets/fa.af927694.css"];
export const fonts = [];
