import { c as create_ssr_component, h as add_attribute, o as onDestroy, j as spread, k as escape_object, l as createEventDispatcher, v as validate_component, e as escape } from "./index2.js";
import { P as PUBLIC_GITHUB_URL } from "./public.js";
import { c as checkIconState, g as generateIcon } from "./functions.js";
const resume = "/_app/immutable/assets/MichaelaChang_Resume.29cc4c2d.pdf";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(max-width: 992px){}.svelte-1r4yoli.svelte-1r4yoli::-webkit-scrollbar{width:8px;height:8px}.svelte-1r4yoli.svelte-1r4yoli::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-1r4yoli.svelte-1r4yoli::-webkit-scrollbar-thumb{background-color:#575757}.svelte-1r4yoli.svelte-1r4yoli::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-1r4yoli.svelte-1r4yoli::-webkit-scrollbar-corner,.svelte-1r4yoli.svelte-1r4yoli::-webkit-scrollbar-track{background-color:none}.mc-c-navbar.svelte-1r4yoli.svelte-1r4yoli{display:flex;justify-content:space-between;border-bottom:1.5px solid #FFFFFF;padding:3.5em 3em}@media(max-width: 992px){.mc-c-navbar.svelte-1r4yoli.svelte-1r4yoli{padding:3.5em 2em}}.mc-c-navbar__links.svelte-1r4yoli a.svelte-1r4yoli{padding:0 1em;font-weight:normal;color:#FFFFFF}@media(max-width: 992px){.mc-c-navbar__links.svelte-1r4yoli a.svelte-1r4yoli{padding:0 0.3em}}.mc-c-navbar__brand.svelte-1r4yoli.svelte-1r4yoli{font-size:1.5rem;color:#FFFFFF}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="mc-c-navbar svelte-1r4yoli"><a href="/" class="mc-c-navbar__brand svelte-1r4yoli"><b class="svelte-1r4yoli">MC</b></a>
  <div class="mc-c-navbar__links svelte-1r4yoli"><a href="/work" class="svelte-1r4yoli">Work</a>
    <a href="/playground" class="svelte-1r4yoli">Playground</a>
    <a href="/about" class="svelte-1r4yoli">About</a>
    <a${add_attribute("href", resume, 0)} target="_blank" rel="noreferrer" class="svelte-1r4yoli">Resume</a></div>
</nav>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
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
  code: "p.svelte-ri7ne8.svelte-ri7ne8{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-ri7ne8.svelte-ri7ne8{font-size:1.05rem !important}}.svelte-ri7ne8.svelte-ri7ne8::-webkit-scrollbar{width:8px;height:8px}.svelte-ri7ne8.svelte-ri7ne8::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-ri7ne8.svelte-ri7ne8::-webkit-scrollbar-thumb{background-color:#575757}.svelte-ri7ne8.svelte-ri7ne8::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-ri7ne8.svelte-ri7ne8::-webkit-scrollbar-corner,.svelte-ri7ne8.svelte-ri7ne8::-webkit-scrollbar-track{background-color:none}.mc-c-footer__item--updated.svelte-ri7ne8.svelte-ri7ne8,.mc-c-footer__item--socials.svelte-ri7ne8.svelte-ri7ne8,.mc-c-footer__item--copyright.svelte-ri7ne8.svelte-ri7ne8{flex:1}@media(max-width: 768px){.mc-c-footer__item--updated.svelte-ri7ne8.svelte-ri7ne8,.mc-c-footer__item--socials.svelte-ri7ne8.svelte-ri7ne8,.mc-c-footer__item--copyright.svelte-ri7ne8.svelte-ri7ne8{flex-basis:100%;text-align:center;justify-content:center}}.mc-c-footer.svelte-ri7ne8.svelte-ri7ne8{display:flex;justify-content:space-between;align-items:center;border-top:1.5px solid #FFFFFF;padding:3.5em 4em;color:#C3C3C3}@media(max-width: 992px){.mc-c-footer.svelte-ri7ne8.svelte-ri7ne8{padding:3.5em 2em}}@media(max-width: 768px){.mc-c-footer.svelte-ri7ne8.svelte-ri7ne8{padding:2em 2em;flex-wrap:wrap}}.mc-c-footer__item--socials.svelte-ri7ne8.svelte-ri7ne8{display:flex;justify-content:center}.mc-c-footer__item--socials.svelte-ri7ne8 a.svelte-ri7ne8{color:#FFFFFF;padding:0 0.5em}.mc-c-footer__item--socials.svelte-ri7ne8 a.svelte-ri7ne8:hover{color:#C3C3C3}.mc-c-footer__item--updated.svelte-ri7ne8.svelte-ri7ne8{text-align:right}",
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
  return `<footer class="mc-c-footer svelte-ri7ne8"><p class="mc-c-footer__item--copyright svelte-ri7ne8">© 2022 All right reserved.</p>
  <div class="mc-c-footer__item--socials svelte-ri7ne8"><a href="https://www.instagram.com/milkcee12/" target="_blank" rel="noreferrer" class="svelte-ri7ne8">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:instagram",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a>
    <a href="https://github.com/milkcee12/" target="_blank" rel="noreferrer" class="svelte-ri7ne8">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:github",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a>
    <a href="https://twitter.com/milkcee12" target="_blank" rel="noreferrer" class="svelte-ri7ne8">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:twitter",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a></div>
  <p class="mc-c-footer__item--updated svelte-ri7ne8">Last updated: <br class="svelte-ri7ne8"> ${escape(date)}</p>
</footer>`;
});
export {
  Footer as F,
  Icon as I,
  Navbar as N
};
