import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, b as each, i as is_promise, n as noop, m as missing_component } from "../../chunks/ssr.js";
import { F as Fa } from "../../chunks/fa.js";
import { faInstagram, faLinkedinIn, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { w as writable } from "../../chunks/index.js";
const _globals = "";
const PUBLIC_GITHUB_URL = "https://api.github.com/repos/milkcee12/milkcee12.github.io/commits";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-y2y5bt.svelte-y2y5bt{color:#C3C3C3;display:flex;justify-content:space-between;align-items:center;border-top:1.5px solid #C3C3C3;padding:3.5em 4em}@media(max-width: 767px){footer.svelte-y2y5bt.svelte-y2y5bt{flex-direction:column;text-align:center;padding:2.5em 4em}}footer.svelte-y2y5bt .item.svelte-y2y5bt{flex:1;padding:0.5em 2em}footer.svelte-y2y5bt .socials.svelte-y2y5bt{display:flex;justify-content:center}footer.svelte-y2y5bt .socials a.svelte-y2y5bt{color:#FFFFFF;padding:0 0.5em;transition:all 0.25s}footer.svelte-y2y5bt .socials a.svelte-y2y5bt:hover{color:#C3C3C3}footer.svelte-y2y5bt .last-updated.svelte-y2y5bt{text-align:right}@media(max-width: 767px){footer.svelte-y2y5bt .last-updated.svelte-y2y5bt{text-align:center}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lastUpdatedDate;
  fetch(PUBLIC_GITHUB_URL).then((response) => response.json()).then((commits) => {
    var dateISO = new Date(commits[0].commit.committer.date);
    lastUpdatedDate = dateISO.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }).catch(function(err) {
    lastUpdatedDate = "-";
  });
  $$result.css.add(css$1);
  return `<footer class="svelte-y2y5bt"><p class="item svelte-y2y5bt" data-svelte-h="svelte-pa3axe">© 2023 All rights reserved.</p> <div class="socials item svelte-y2y5bt"><a href="https://www.instagram.com/milkcee12/" target="_blank" class="svelte-y2y5bt">${validate_component(Fa, "Fa").$$render($$result, { icon: faInstagram, size: "1.5x" }, {}, {})}</a> <a href="https://www.linkedin.com/in/michaela-chang/" target="_blank" class="svelte-y2y5bt">${validate_component(Fa, "Fa").$$render($$result, { icon: faLinkedinIn, size: "1.5x" }, {}, {})}</a> <a href="https://twitter.com/milkcee12" target="_blank" class="svelte-y2y5bt">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "1.5x" }, {}, {})}</a> <a href="https://github.com/milkcee12/" target="_blank" class="svelte-y2y5bt">${validate_component(Fa, "Fa").$$render($$result, { icon: faGithub, size: "1.5x" }, {}, {})}</a></div> <p class="last-updated item svelte-y2y5bt">Last updated:<br>${escape(lastUpdatedDate)}</p> </footer>`;
});
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
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``} ${slots.default ? slots.default({}) : ` ${each($modals, (modal, i) => {
    return ` ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` ${slots.loading ? slots.loading({}) : ``} `;
      }
      return function(component) {
        return ` ${validate_component(component || missing_component, "svelte:component").$$render(
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
        )} `;
      }(__value);
    }(getComponent(modal.component))}` : ` ${validate_component(modal.component || missing_component, "svelte:component").$$render(
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
  })} `}`;
});
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const disableScrollHandling = /* @__PURE__ */ client_method("disable_scroll_handling");
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mobile-wrapper.svelte-177jhjc{position:relative;overflow-x:hidden;min-height:100vh;display:flex;flex-direction:column}.backdrop.svelte-177jhjc{cursor:pointer;z-index:100;position:fixed;top:0;bottom:0;right:0;left:0;background:rgba(0, 0, 0, 0.7)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let scrollYState;
  const snapshot = {
    capture: () => window.scrollY,
    restore: (value) => scrollYState = value
  };
  afterNavigate(() => {
    disableScrollHandling();
    setTimeout(
      () => {
        scrollTo({
          top: scrollYState ?? 0,
          behavior: "instant"
        });
      },
      300
    );
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  $$result.css.add(css);
  data.pathname;
  return `<div><div class="mobile-wrapper svelte-177jhjc">${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div> ${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    backdrop: () => {
      return `<div slot="backdrop" class="backdrop svelte-177jhjc"></div>`;
    },
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Layout as default
};
