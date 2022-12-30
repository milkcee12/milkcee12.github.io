import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");.color-tech{color:#FF3062}.color-art{color:#12E599}.color-muted{color:#C3C3C3}@media(max-width: 992px){p,li,p a,li a{font-size:0.9rem}h2{font-size:1.8rem !important}h3{font-size:1.3rem !important}}*::-webkit-scrollbar,*::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}*::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}body{overflow:overlay;overflow-x:clip;font-family:"Inter", sans-serif;background-color:#1E1E1E;color:#FFFFFF;padding:0;margin:0}body>div{min-height:100vh;display:flex;flex-direction:column}a{color:#12E599;text-decoration:none;font-weight:bold}.mc-l-container{flex:1;margin:8em 3em 0}@media(max-width: 992px){.mc-l-container{margin:6em 3em 0}}@media(max-width: 768px){.mc-l-container{margin:4em 2em 0}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
