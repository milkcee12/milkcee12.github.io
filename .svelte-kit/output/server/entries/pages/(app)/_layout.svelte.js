import { c as create_ssr_component, a as subscribe, b as each, i as is_promise, n as noop, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
import { N as Navbar, F as Footer } from "../../../chunks/Footer.js";
import { w as writable } from "../../../chunks/index.js";
const exitBeforeEnter = writable(false);
const transitioning = writable(null);
const modals = writable([]);
function isLazyModal(component) {
  return typeof component.prototype === "undefined";
}
async function getComponent(component) {
  return component().then((res) => res.default);
}
const Modals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  let $transitioning, $$unsubscribe_transitioning;
  let $$unsubscribe_exitBeforeEnter;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  $$unsubscribe_transitioning = subscribe(transitioning, (value) => $transitioning = value);
  $$unsubscribe_exitBeforeEnter = subscribe(exitBeforeEnter, (value) => value);
  $$unsubscribe_modals();
  $$unsubscribe_transitioning();
  $$unsubscribe_exitBeforeEnter();
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``}

${slots.default ? slots.default({}) : `
  ${each($modals, (modal, i) => {
    return `
    ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
        ${slots.loading ? slots.loading({}) : ``}
      `;
      }
      return function(component) {
        return `
        ${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          Object.assign(
            {},
            {
              isOpen: i === $modals.length - 1 && !$transitioning
            },
            modal.props
          ),
          {},
          {}
        )}
      `;
      }(__value);
    }(getComponent(modal.component))}` : `
      ${validate_component(modal.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        {
          isOpen: i === $modals.length - 1 && !$transitioning
        },
        modal.props
      ),
      {},
      {}
    )}`}`;
  })}
`}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 992px){}.svelte-16i9z1o::-webkit-scrollbar,.svelte-16i9z1o::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-16i9z1o::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.backdrop.svelte-16i9z1o{z-index:99;position:fixed;top:0;bottom:0;right:0;left:0;background:rgba(0, 0, 0, 0.7)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    backdrop: () => {
      return `<div slot="backdrop" class="backdrop svelte-16i9z1o"></div>`;
    }
  })}

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<div class="mc-l-container svelte-16i9z1o">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
