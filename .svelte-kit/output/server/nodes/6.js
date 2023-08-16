

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.f5b39d1e.js","_app/immutable/chunks/index.8c87a89b.js"];
export const stylesheets = [];
export const fonts = [];
