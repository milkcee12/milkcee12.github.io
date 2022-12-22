import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { N as Navbar } from "../../chunks/navbar.js";
const heroFigure = "/_app/immutable/assets/hero-figure-ec669444.png";
const heroSig = "/_app/immutable/assets/hero-signature-ca3c2809.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.hero.svelte-1d205l4.svelte-1d205l4{height:45em;display:flex}section.hero.svelte-1d205l4 .block.svelte-1d205l4{flex:1}section.hero.svelte-1d205l4 .right.svelte-1d205l4{background-color:#12E599}section.hero.svelte-1d205l4 img.svelte-1d205l4{position:absolute}section.hero.svelte-1d205l4 img.hero-sig.svelte-1d205l4{width:80em;left:50%;margin-left:-30em;margin-top:-5em}section.hero.svelte-1d205l4 img.hero-figure.svelte-1d205l4{width:36em;height:auto;top:2em;left:50%;margin-left:-18em}section.hero.svelte-1d205l4 .explore.svelte-1d205l4{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-1d205l4 .explore p.svelte-1d205l4{flex-grow:0;padding-right:1em}section.hero.svelte-1d205l4 .explore .line.svelte-1d205l4{width:4em;flex-grow:1;height:2.5px;background-color:#FF3062}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-1d205l4"}"><div class="${"block left svelte-1d205l4"}"></div>
    <div class="${"block right svelte-1d205l4"}"></div>
    <img class="${"hero-sig svelte-1d205l4"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-1d205l4"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-1d205l4"}"><p class="${"svelte-1d205l4"}">Explore</p>
        <div class="${"line svelte-1d205l4"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<section><h2>Timeline</h2>
    <p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p></section>

<section><h2>Works</h2>
    <p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p></section>

<section><h2>Hello World</h2>
    <p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>
</section>`;
});
export {
  Page as default
};
