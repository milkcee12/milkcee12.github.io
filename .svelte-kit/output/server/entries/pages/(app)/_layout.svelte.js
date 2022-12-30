import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"mc-l-container"}">${slots.default ? slots.default({}) : ``}</div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
