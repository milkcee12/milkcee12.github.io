

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7daac500.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/index.65a935d6.js","_app/immutable/chunks/Navbar.81e6d4a6.js","_app/immutable/chunks/stores.a28894b1.js","_app/immutable/chunks/singletons.e2191208.js","_app/immutable/chunks/index.63b8cf9a.js","_app/immutable/chunks/index.3a7fde4f.js"];
export const stylesheets = ["_app/immutable/assets/Navbar.8986b8cf.css"];
export const fonts = [];
