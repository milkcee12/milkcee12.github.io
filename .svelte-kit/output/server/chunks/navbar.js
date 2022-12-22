import { c as create_ssr_component } from "./index.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/"}">MC</a>
    <a href="${"/work"}">Work</a>
    <a href="${"/about"}">About</a>
    <a href="${"/playground"}">Playground</a></nav>`;
});
export {
  Navbar as N
};
