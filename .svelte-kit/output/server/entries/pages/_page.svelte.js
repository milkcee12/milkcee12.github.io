import { c as create_ssr_component, i as add_attribute, v as validate_component } from "../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../chunks/footer.js";
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-kye9e.svelte-kye9e::-webkit-scrollbar,.svelte-kye9e.svelte-kye9e::-webkit-scrollbar-thumb{width:18px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-kye9e.svelte-kye9e::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.hero.svelte-kye9e.svelte-kye9e{height:48em;display:flex}section.hero.svelte-kye9e .block.svelte-kye9e{flex:1}section.hero.svelte-kye9e .right.svelte-kye9e{background-color:#12E599}section.hero.svelte-kye9e img.svelte-kye9e{position:absolute;pointer-events:none}section.hero.svelte-kye9e img.hero-sig.svelte-kye9e{width:85em;left:50%;margin-left:-32em;margin-top:-10em}section.hero.svelte-kye9e img.hero-figure.svelte-kye9e{width:36em;height:auto;top:2em;left:50%;margin-left:-15em}section.hero.svelte-kye9e .explore.svelte-kye9e{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-kye9e .explore p.svelte-kye9e{flex-grow:0;padding-right:1em}section.hero.svelte-kye9e .explore .line.svelte-kye9e{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-kye9e h2.svelte-kye9e{font-size:2.2rem}.container.svelte-kye9e section.svelte-kye9e{padding-bottom:8em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-kye9e"}"><div class="${"block left svelte-kye9e"}"></div>
    <div class="${"block right svelte-kye9e"}"></div>
    <img class="${"hero-sig svelte-kye9e"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-kye9e"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-kye9e"}"><p class="${"svelte-kye9e"}">Explore</p>
        <div class="${"line svelte-kye9e"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-kye9e"}"><section class="${"svelte-kye9e"}"><h2 class="${"svelte-kye9e"}">Timeline</h2>
        <p class="${"svelte-kye9e"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-kye9e"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-kye9e"}"><h2 class="${"svelte-kye9e"}">Works</h2>
        <p class="${"svelte-kye9e"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-kye9e"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-kye9e"}"><h2 class="${"svelte-kye9e"}">Hello World</h2>
        <p class="${"svelte-kye9e"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-kye9e"}">kit.svelte.dev</a> to read the documentation</p></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
