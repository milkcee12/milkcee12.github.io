import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
