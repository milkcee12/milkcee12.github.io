import { c as create_ssr_component, v as validate_component, e as escape } from "./index.js";
import { P as PUBLIC_GITHUB_URL } from "./public.js";
import { I as Icon } from "./Icon.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(max-width: 992px){}.svelte-19si3d1.svelte-19si3d1::-webkit-scrollbar,.svelte-19si3d1.svelte-19si3d1::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-19si3d1.svelte-19si3d1::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-navbar.svelte-19si3d1.svelte-19si3d1{display:flex;justify-content:space-between;border-bottom:1.5px solid #FFFFFF;padding:3.5em 3em}@media(max-width: 992px){.mc-c-navbar.svelte-19si3d1.svelte-19si3d1{padding:3.5em 2em}}.mc-c-navbar__links.svelte-19si3d1 a.svelte-19si3d1{padding:0 1em;font-weight:normal;color:#FFFFFF}@media(max-width: 992px){.mc-c-navbar__links.svelte-19si3d1 a.svelte-19si3d1{padding:0 0.3em}}.mc-c-navbar__brand.svelte-19si3d1.svelte-19si3d1{font-size:1.5rem;color:#FFFFFF}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"mc-c-navbar svelte-19si3d1"}"><a href="${"/"}" class="${"mc-c-navbar__brand svelte-19si3d1"}"><b class="${"svelte-19si3d1"}">MC</b></a>
  <div class="${"mc-c-navbar__links svelte-19si3d1"}"><a href="${"/work"}" class="${"svelte-19si3d1"}">Work</a>
    <a href="${"/about"}" class="${"svelte-19si3d1"}">About</a>
    <a href="${"/playground"}" class="${"svelte-19si3d1"}">Playground</a></div>
</nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-r2y96j.svelte-r2y96j{font-size:1.15rem}@media(max-width: 992px){p.svelte-r2y96j.svelte-r2y96j{font-size:1.05rem !important}}.svelte-r2y96j.svelte-r2y96j::-webkit-scrollbar,.svelte-r2y96j.svelte-r2y96j::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-r2y96j.svelte-r2y96j::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-footer__item--updated.svelte-r2y96j.svelte-r2y96j,.mc-c-footer__item--socials.svelte-r2y96j.svelte-r2y96j,.mc-c-footer__item--copyright.svelte-r2y96j.svelte-r2y96j{flex:1}@media(max-width: 768px){.mc-c-footer__item--updated.svelte-r2y96j.svelte-r2y96j,.mc-c-footer__item--socials.svelte-r2y96j.svelte-r2y96j,.mc-c-footer__item--copyright.svelte-r2y96j.svelte-r2y96j{flex-basis:100%;text-align:center;justify-content:center}}.mc-c-footer.svelte-r2y96j.svelte-r2y96j{display:flex;justify-content:space-between;align-items:center;border-top:1.5px solid #FFFFFF;padding:3.5em 4em;color:#C3C3C3}@media(max-width: 992px){.mc-c-footer.svelte-r2y96j.svelte-r2y96j{padding:3.5em 2em}}@media(max-width: 768px){.mc-c-footer.svelte-r2y96j.svelte-r2y96j{padding:2em 2em;flex-wrap:wrap}}.mc-c-footer__item--socials.svelte-r2y96j.svelte-r2y96j{display:flex;justify-content:center}.mc-c-footer__item--socials.svelte-r2y96j a.svelte-r2y96j{color:#FFFFFF;padding:0 0.5em}.mc-c-footer__item--socials.svelte-r2y96j a.svelte-r2y96j:hover{color:#C3C3C3}.mc-c-footer__item--updated.svelte-r2y96j.svelte-r2y96j{text-align:right}",
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
  return `<footer class="${"mc-c-footer svelte-r2y96j"}"><p class="${"mc-c-footer__item--copyright svelte-r2y96j"}">\xA9 2022 All right reserved.</p>
  <div class="${"mc-c-footer__item--socials svelte-r2y96j"}"><a href="${"https://www.instagram.com/milkcee12/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-r2y96j"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:instagram",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a>
    <a href="${"https://github.com/milkcee12/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-r2y96j"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:github",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a>
    <a href="${"https://twitter.com/milkcee12"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-r2y96j"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-brands:twitter",
      width: "25",
      height: "25"
    },
    {},
    {}
  )}</a></div>
  <p class="${"mc-c-footer__item--updated svelte-r2y96j"}">Last updated: <br class="${"svelte-r2y96j"}"> ${escape(date)}</p>
</footer>`;
});
export {
  Footer as F,
  Navbar as N
};
