import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");body{overflow-x:hidden;font-family:"Inter", sans-serif;background-color:#1E1E1E;color:#FFFFFF;padding:0;margin:0}a{color:#12E599;text-decoration:none}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
