

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.cdfadeb2.js","_app/immutable/chunks/scheduler.d494b5de.js","_app/immutable/chunks/index.65a935d6.js"];
export const stylesheets = [];
export const fonts = [];
