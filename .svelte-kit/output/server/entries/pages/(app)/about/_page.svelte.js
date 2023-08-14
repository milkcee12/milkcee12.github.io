import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { A as ArrowLink } from "../../../../chunks/ArrowLink.js";
const resume = "/_app/immutable/assets/MichaelaChang_Resume-29cc4c2d.pdf";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-axop31.svelte-axop31{color:#FF3062}.color-art.svelte-axop31.svelte-axop31{color:#12E599}h1.svelte-axop31.svelte-axop31{font-size:2.3rem}h2.svelte-axop31.svelte-axop31{font-size:2rem}h3.svelte-axop31.svelte-axop31{font-size:1.6rem}p.svelte-axop31.svelte-axop31,li.svelte-axop31.svelte-axop31{font-size:1.15rem}@media(max-width: 992px){p.svelte-axop31.svelte-axop31,li.svelte-axop31.svelte-axop31{font-size:1.05rem !important}h2.svelte-axop31.svelte-axop31{font-size:1.8rem !important}h3.svelte-axop31.svelte-axop31{font-size:1.3rem !important}}.svelte-axop31.svelte-axop31::-webkit-scrollbar,.svelte-axop31.svelte-axop31::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-axop31.svelte-axop31::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-axop31.svelte-axop31{margin-bottom:8em}.mc-c-title.svelte-axop31.svelte-axop31{width:80%}.mc-c-lists.svelte-axop31.svelte-axop31{width:70%}.mc-c-lists.svelte-axop31 h2.svelte-axop31{font-size:2em}.mc-c-lists--row.svelte-axop31.svelte-axop31{display:flex;flex-wrap:wrap;gap:25px}.mc-c-lists--col.svelte-axop31.svelte-axop31{flex:1 1 30%}.mc-c-lists--col.svelte-axop31 ul.svelte-axop31{list-style-type:none;padding:0;color:#C3C3C3}.mc-c-lists--col.svelte-axop31 li.svelte-axop31{padding-bottom:6px}@media(max-width: 992px){.mc-c-lists.svelte-axop31.svelte-axop31{width:100%}}@media(max-width: 768px){}@media(max-width: 576px){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""}

<section class="${"mc-c-title svelte-axop31"}"><h1 class="${"svelte-axop31"}">This site is a love letter to the two things I cherish: <span class="${"color-art svelte-axop31"}">drawing</span>
    and <span class="${"color-tech svelte-axop31"}">programming</span>.
  </h1>
  <p class="${"svelte-axop31"}">Here is a little blurb that talks more about my intended disciplines.</p>

  ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: resume,
      color: "art",
      name: "Resume",
      newTab: true
    },
    {},
    {}
  )}</section>
<section class="${"mc-c-lists svelte-axop31"}"><h2 class="${"svelte-axop31"}">Fun Lists</h2>
  <p class="${"svelte-axop31"}">Art and code isn&#39;t all I do, here are some of my favorite things as lists!
  </p>
  <div class="${"mc-c-lists--row svelte-axop31"}"><div class="${"mc-c-lists--col svelte-axop31"}"><h3 class="${"svelte-axop31"}">Manga</h3>
      <ul class="${"svelte-axop31"}"><li class="${"svelte-axop31"}">Pandora Hearts</li>
        <li class="${"svelte-axop31"}">Blue Period</li>
        <li class="${"svelte-axop31"}">Kingdom</li>
        <li class="${"svelte-axop31"}">Jigokuraku (Hell&#39;s Paradise)</li>
        <li class="${"svelte-axop31"}">Hikaru no Go</li></ul></div>
    <div class="${"mc-c-lists--col svelte-axop31"}"><h3 class="${"svelte-axop31"}">Anime</h3>
      <ul class="${"svelte-axop31"}"><li class="${"svelte-axop31"}">Bleach</li>
        <li class="${"svelte-axop31"}">Fairy Tail</li>
        <li class="${"svelte-axop31"}">Link Click</li>
        <li class="${"svelte-axop31"}">Haikyuu!</li>
        <li class="${"svelte-axop31"}">Birdie Wing</li></ul></div>
    <div class="${"mc-c-lists--col svelte-axop31"}"><h3 class="${"svelte-axop31"}">League of Legends</h3>
      <ul class="${"svelte-axop31"}"><li class="${"svelte-axop31"}">Lux</li>
        <li class="${"svelte-axop31"}">Seraphine</li>
        <li class="${"svelte-axop31"}">Vel&#39;koz</li>
        <li class="${"svelte-axop31"}">Xerath</li>
        <li class="${"svelte-axop31"}">Ahri</li></ul></div></div>
</section>`;
});
export {
  Page as default
};
