

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6b1cc8b9.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/index.65a935d6.js","_app/immutable/chunks/Navbar.7e19a31b.js","_app/immutable/chunks/stores.d6e8c524.js","_app/immutable/chunks/singletons.1ec5ef08.js","_app/immutable/chunks/index.63b8cf9a.js","_app/immutable/chunks/index.3a7fde4f.js"];
export const stylesheets = ["_app/immutable/assets/Navbar.8986b8cf.css"];
export const fonts = [];
