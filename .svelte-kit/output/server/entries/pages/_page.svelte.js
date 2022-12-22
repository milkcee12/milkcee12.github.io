import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { N as Navbar } from "../../chunks/navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<p>This is the hero section</p>
${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>`;
});
export {
  Page as default
};
