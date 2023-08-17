

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.57f87d66.js","_app/immutable/chunks/index.3582ccdd.js"];
export const stylesheets = [];
export const fonts = [];
