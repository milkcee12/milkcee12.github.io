import { c as create_ssr_component, i as add_attribute, v as validate_component } from "../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../chunks/footer.js";
const heroFigure = "/_app/immutable/assets/hero-figure-ec669444.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.hero.svelte-av2wsi.svelte-av2wsi{height:48em;display:flex}section.hero.svelte-av2wsi .block.svelte-av2wsi{flex:1}section.hero.svelte-av2wsi .right.svelte-av2wsi{background-color:#12E599}section.hero.svelte-av2wsi img.svelte-av2wsi{position:absolute;pointer-events:none}section.hero.svelte-av2wsi img.hero-sig.svelte-av2wsi{width:85em;left:50%;margin-left:-32em;margin-top:-10em}section.hero.svelte-av2wsi img.hero-figure.svelte-av2wsi{width:36em;height:auto;top:2em;left:50%;margin-left:-15em}section.hero.svelte-av2wsi .explore.svelte-av2wsi{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-av2wsi .explore p.svelte-av2wsi{flex-grow:0;padding-right:1em}section.hero.svelte-av2wsi .explore .line.svelte-av2wsi{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-av2wsi h2.svelte-av2wsi{font-size:2.2rem}.container.svelte-av2wsi section.svelte-av2wsi{padding-bottom:8em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-av2wsi"}"><div class="${"block left svelte-av2wsi"}"></div>
    <div class="${"block right svelte-av2wsi"}"></div>
    <img class="${"hero-sig svelte-av2wsi"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-av2wsi"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-av2wsi"}"><p class="${"svelte-av2wsi"}">Explore</p>
        <div class="${"line svelte-av2wsi"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-av2wsi"}"><section class="${"svelte-av2wsi"}"><h2 class="${"svelte-av2wsi"}">Timeline</h2>
        <p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-av2wsi"}"><h2 class="${"svelte-av2wsi"}">Works</h2>
        <p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-av2wsi"}"><h2 class="${"svelte-av2wsi"}">Hello World</h2>
        <p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
