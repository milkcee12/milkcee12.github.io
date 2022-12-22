import { c as create_ssr_component } from "./index.js";
const navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-13mc7uy.svelte-13mc7uy{display:flex;justify-content:space-between;border-bottom:2px solid #FFFFFF;padding:3.5em 3em}nav.svelte-13mc7uy .nav-links a.svelte-13mc7uy{padding:0 1em}nav.svelte-13mc7uy .nav-brand.svelte-13mc7uy{font-size:1.5rem}a.svelte-13mc7uy.svelte-13mc7uy{color:#FFFFFF}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-13mc7uy"}"><a href="${"/"}" class="${"nav-brand svelte-13mc7uy"}"><b>MC</b></a>
    <div class="${"nav-links"}"><a href="${"/work"}" class="${"svelte-13mc7uy"}">Work</a>
        <a href="${"/about"}" class="${"svelte-13mc7uy"}">About</a>
        <a href="${"/playground"}" class="${"svelte-13mc7uy"}">Playground</a></div>
</nav>`;
});
export {
  Navbar as N
};
