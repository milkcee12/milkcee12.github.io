

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/archive/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a080b303.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/index.65a935d6.js"];
export const stylesheets = [];
export const fonts = [];
