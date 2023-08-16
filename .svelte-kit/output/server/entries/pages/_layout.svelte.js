import { c as create_ssr_component } from "../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700;900&display=swap");.color-tech{color:#FF3062}.color-art{color:#12E599}.color-muted{color:#C3C3C3}.color-light{color:#FFFFFF}.color-dark{color:#090A0D}h1{font-size:3rem}h2{font-size:2.7rem}h3{font-size:1.6rem}p,li,p a,li{font-size:1.15rem;color:#C3C3C3}figcaption{color:#C3C3C3}@media(max-width: 992px){p,li,p a,li a{font-size:1.05rem !important}h1{font-size:2.5rem !important}h2{font-size:2rem !important}h3{font-size:1.3rem !important}}*::-webkit-scrollbar,*::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}*::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}body{overflow:overlay;overflow-x:hidden}body{position:relative;font-family:"Albert Sans", sans-serif;background-color:#090A0D;color:#FFFFFF;padding:0;margin:0}body>div{min-height:100vh;display:flex;flex-direction:column}a{color:#12E599;text-decoration:none;font-weight:bold}.mc-l-container{flex:1;margin:6em 3em 0;width:80%;margin-left:auto;margin-right:auto}@media(max-width: 992px){.mc-l-container{margin:6em 3em 0}}@media(max-width: 768px){.mc-l-container{margin:4em 2em 0}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
