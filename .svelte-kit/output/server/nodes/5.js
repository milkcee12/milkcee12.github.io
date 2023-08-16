

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/playground/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.1f0eb745.js","_app/immutable/chunks/index.8c87a89b.js"];
export const stylesheets = ["_app/immutable/assets/5.c480e8e0.css"];
export const fonts = [];
