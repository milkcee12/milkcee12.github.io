import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="container">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
