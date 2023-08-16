import { c as create_ssr_component, d as add_attribute, o as onDestroy, f as spread, h as escape_object, i as createEventDispatcher, v as validate_component, e as escape } from "./index.js";
import { P as PUBLIC_GITHUB_URL } from "./public.js";
import { c as checkIconState, g as generateIcon } from "./functions.js";
const resume = "/_app/immutable/assets/MichaelaChang_Resume-29cc4c2d.pdf";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(max-width: 992px){}.svelte-vrwchf.svelte-vrwchf::-webkit-scrollbar,.svelte-vrwchf.svelte-vrwchf::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-vrwchf.svelte-vrwchf::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-navbar.svelte-vrwchf.svelte-vrwchf{display:flex;justify-content:space-between;border-bottom:1.5px solid #FFFFFF;padding:3.5em 3em}@media(max-width: 992px){.mc-c-navbar.svelte-vrwchf.svelte-vrwchf{padding:3.5em 2em}}.mc-c-navbar__links.svelte-vrwchf a.svelte-vrwchf{padding:0 1em;font-weight:normal;color:#FFFFFF}@media(max-width: 992px){.mc-c-navbar__links.svelte-vrwchf a.svelte-vrwchf{padding:0 0.3em}}.mc-c-navbar__brand.svelte-vrwchf.svelte-vrwchf{font-size:1.5rem;color:#FFFFFF}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"mc-c-navbar svelte-vrwchf"}"><a href="${"/"}" class="${"mc-c-navbar__brand svelte-vrwchf"}"><b class="${"svelte-vrwchf"}">MC</b></a>
  <div class="${"mc-c-navbar__links svelte-vrwchf"}"><a href="${"/work"}" class="${"svelte-vrwchf"}">Work</a>
    <a href="${"/art"}" class="${"svelte-vrwchf"}">Art</a>
    <a href="${"/about"}" class="${"svelte-vrwchf"}">About</a>
    <a${add_attribute("href", resume, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-vrwchf"}">Resume</a></div>
</nav>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    name: "",
    loading: null,
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1tbvfgx.svelte-1tbvfgx{font-size:1.15rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-1tbvfgx.svelte-1tbvfgx{font-size:1.05rem !important}}.svelte-1tbvfgx.svelte-1tbvfgx::-webkit-scrollbar,.svelte-1tbvfgx.svelte-1tbvfgx::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1tbvfgx.svelte-1tbvfgx::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-footer__item--updated.svelte-1tbvfgx.svelte-1tbvfgx,.mc-c-footer__item--socials.svelte-1tbvfgx.svelte-1tbvfgx,.mc-c-footer__item--copyright.svelte-1tbvfgx.svelte-1tbvfgx{flex:1}@media(max-width: 768px){.mc-c-footer__item--updated.svelte-1tbvfgx.svelte-1tbvfgx,.mc-c-footer__item--socials.svelte-1tbvfgx.svelte-1tbvfgx,.mc-c-footer__item--copyright.svelte-1tbvfgx.svelte-1tbvfgx{flex-basis:100%;text-align:center;justify-content:center}}.mc-c-footer.svelte-1tbvfgx.svelte-1tbvfgx{display:flex;justify-content:space-between;align-items:center;border-top:1.5px solid #FFFFFF;padding:3.5em 4em;color:#C3C3C3}@media(max-width: 992px){.mc-c-footer.svelte-1tbvfgx.svelte-1tbvfgx{padding:3.5em 2em}}@media(max-width: 768px){.mc-c-footer.svelte-1tbvfgx.svelte-1tbvfgx{padding:2em 2em;flex-wrap:wrap}}.mc-c-footer__item--socials.svelte-1tbvfgx.svelte-1tbvfgx{display:flex;justify-content:center}.mc-c-footer__item--socials.svelte-1tbvfgx a.svelte-1tbvfgx{color:#FFFFFF;padding:0 0.5em}.mc-c-footer__item--socials.svelte-1tbvfgx a.svelte-1tbvfgx:hover{color:#C3C3C3}.mc-c-footer__item--updated.svelte-1tbvfgx.svelte-1tbvfgx{text-align:right}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date;
  fetch(PUBLIC_GITHUB_URL).then((response) => response.json()).then((commits) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var dateISO = new Date(commits[0].commit.committer.date);
    date = dateISO.toLocaleDateString("en-US", options);
  }).catch(function(err) {
    date = null;
  });
  $$result.css.add(css);
  return `<footer class="${"mc-c-footer svelte-1tbvfgx"}"><p class="${"mc-c-footer__item--copyright svelte-1tbvfgx"}">\xA9 2022 All right reserved.</p>
  <div class="${"mc-c-footer__item--socials svelte-1tbvfgx"}"><a href="${"https://www.instagram.com/milkcee12/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1tbvfgx"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:instagram",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a>
    <a href="${"https://github.com/milkcee12/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1tbvfgx"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:github",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a>
    <a href="${"https://twitter.com/milkcee12"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1tbvfgx"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:twitter",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a></div>
  <p class="${"mc-c-footer__item--updated svelte-1tbvfgx"}">Last updated: <br class="${"svelte-1tbvfgx"}"> ${escape(date)}</p>
</footer>`;
});
export {
  Footer as F,
  Icon as I,
  Navbar as N
};
