import { c as create_ssr_component } from "./index.js";
const navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-wdglzt{color:#FFFFFF}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><a href="${"/"}" class="${"svelte-wdglzt"}">MC</a>
    <a href="${"/work"}" class="${"svelte-wdglzt"}">Work</a>
    <a href="${"/about"}" class="${"svelte-wdglzt"}">About</a>
    <a href="${"/playground"}" class="${"svelte-wdglzt"}">Playground</a>
</nav>`;
});
export {
  Navbar as N
};
