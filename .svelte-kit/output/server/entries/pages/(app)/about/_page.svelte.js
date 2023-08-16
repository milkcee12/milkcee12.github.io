import { c as create_ssr_component, k as each, d as add_attribute, e as escape } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-idkxy2.svelte-idkxy2{color:#FF3062}.color-art.svelte-idkxy2.svelte-idkxy2{color:#12E599}h1.svelte-idkxy2.svelte-idkxy2{font-size:3rem}h2.svelte-idkxy2.svelte-idkxy2{font-size:2.7rem}h3.svelte-idkxy2.svelte-idkxy2{font-size:1.6rem}p.svelte-idkxy2.svelte-idkxy2,li.svelte-idkxy2.svelte-idkxy2{font-size:1.15rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-idkxy2.svelte-idkxy2,li.svelte-idkxy2.svelte-idkxy2{font-size:1.05rem !important}h1.svelte-idkxy2.svelte-idkxy2{font-size:2.5rem !important}h2.svelte-idkxy2.svelte-idkxy2{font-size:2rem !important}h3.svelte-idkxy2.svelte-idkxy2{font-size:1.3rem !important}}.svelte-idkxy2.svelte-idkxy2::-webkit-scrollbar,.svelte-idkxy2.svelte-idkxy2::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-idkxy2.svelte-idkxy2::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-idkxy2.svelte-idkxy2{margin-bottom:8em}.mc-c-about.svelte-idkxy2 p.svelte-idkxy2{width:70%}.mc-c-lists.svelte-idkxy2.svelte-idkxy2{width:70%}.mc-c-lists--row.svelte-idkxy2.svelte-idkxy2{display:flex;flex-wrap:wrap;gap:25px}.mc-c-lists--col.svelte-idkxy2.svelte-idkxy2{flex:1 1 30%}.mc-c-lists--col.svelte-idkxy2 ul.svelte-idkxy2{list-style-type:none;padding:0;color:#C3C3C3}.mc-c-lists--col.svelte-idkxy2 li.svelte-idkxy2{padding-bottom:6px}.mc-c-pfp.svelte-idkxy2.svelte-idkxy2{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:18px}.mc-c-pfp--item.svelte-idkxy2.svelte-idkxy2{flex:0 0 auto}.mc-c-pfp--item.svelte-idkxy2 p.svelte-idkxy2{margin-top:10px}.mc-c-pfp--item.svelte-idkxy2 img.svelte-idkxy2{transform-origin:center left;width:275px;height:275px;transform:scale(0.96);border-radius:25px;transition:0.25s all}.mc-c-pfp--item.svelte-idkxy2 img.svelte-idkxy2:hover{transform:scale(1)}.mc-c-pfp--item.svelte-idkxy2:not(:first-child) img.svelte-idkxy2{filter:grayscale(100%)}.mc-c-pfp--item.svelte-idkxy2:not(:first-child) img.svelte-idkxy2:hover{filter:none}@media(max-width: 992px){.mc-c-lists.svelte-idkxy2.svelte-idkxy2,.mc-c-about.svelte-idkxy2.svelte-idkxy2{width:100%}}@media(max-width: 768px){}@media(max-width: 576px){.mc-c-pfp.svelte-idkxy2.svelte-idkxy2{justify-content:center}.mc-c-pfp--item.svelte-idkxy2.svelte-idkxy2{text-align:center}.mc-c-pfp--item.svelte-idkxy2 img.svelte-idkxy2{transform:scale(1)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pfps = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""}

<div class="${"mc-l-container svelte-idkxy2"}"><section class="${"mc-c-about svelte-idkxy2"}"><div class="${"mc-c-title svelte-idkxy2"}"><h1 class="${"svelte-idkxy2"}">This site is home to the two things I&#39;m passionate about: <span class="${"color-art svelte-idkxy2"}">drawing</span>
        and <span class="${"color-tech svelte-idkxy2"}">programming</span>.
      </h1></div>
    <p class="${"svelte-idkxy2"}">I grew up in San Diego as a fine artist. I did a lot of acrylic painting
      and pencil drawings, and even got a few awards for my art. But I was
      always looking for a way to get closer to the art I saw in video games and
      anime I discovered digital art in high school, I was immediately hooked.
    </p>
    <p class="${"svelte-idkxy2"}">Studying computer science was more of an afterthought until college, where
      I discovered that I also really liked programming and product design. When
      I&#39;m not glued to my computer, you can find me reading manga, eating
      pastries, or in the Uniqlo graphic tee section.
    </p></section>
  <section class="${"svelte-idkxy2"}"><h2 class="${"svelte-idkxy2"}">Profile Picture Graveyard \u{1FAA6}</h2>
    <p class="${"svelte-idkxy2"}">An overview of how my art style has changed over the years! :)</p>
    <div class="${"mc-c-pfp svelte-idkxy2"}">${each(pfps, ({ url, date }) => {
    return `<div class="${"mc-c-pfp--item svelte-idkxy2"}"><img${add_attribute("src", url, 0)}${add_attribute("alt", date, 0)} class="${"svelte-idkxy2"}">
          <p class="${"svelte-idkxy2"}">${escape(date)}</p>
        </div>`;
  })}</div></section>
  <section class="${"mc-c-lists svelte-idkxy2"}"><h2 class="${"svelte-idkxy2"}">Fun Lists \u{1F4DC}</h2>
    <p class="${"svelte-idkxy2"}">Here are some of my favorite things as lists!</p>
    <div class="${"mc-c-lists--row svelte-idkxy2"}"><div class="${"mc-c-lists--col svelte-idkxy2"}"><h3 class="${"svelte-idkxy2"}">Manga</h3>
        <ul class="${"svelte-idkxy2"}"><li class="${"svelte-idkxy2"}">Pandora Hearts</li>
          <li class="${"svelte-idkxy2"}">Blue Period</li>
          <li class="${"svelte-idkxy2"}">Kingdom</li>
          <li class="${"svelte-idkxy2"}">Jigokuraku (Hell&#39;s Paradise)</li>
          <li class="${"svelte-idkxy2"}">Hikaru no Go</li></ul></div>
      <div class="${"mc-c-lists--col svelte-idkxy2"}"><h3 class="${"svelte-idkxy2"}">Anime</h3>
        <ul class="${"svelte-idkxy2"}"><li class="${"svelte-idkxy2"}">Bleach</li>
          <li class="${"svelte-idkxy2"}">Fairy Tail</li>
          <li class="${"svelte-idkxy2"}">Link Click</li>
          <li class="${"svelte-idkxy2"}">Haikyuu!</li>
          <li class="${"svelte-idkxy2"}">Birdie Wing</li></ul></div>
      <div class="${"mc-c-lists--col svelte-idkxy2"}"><h3 class="${"svelte-idkxy2"}">League of Legends</h3>
        <ul class="${"svelte-idkxy2"}"><li class="${"svelte-idkxy2"}">Lux</li>
          <li class="${"svelte-idkxy2"}">Seraphine</li>
          <li class="${"svelte-idkxy2"}">Vel&#39;koz</li>
          <li class="${"svelte-idkxy2"}">Xerath</li>
          <li class="${"svelte-idkxy2"}">Ahri</li></ul></div></div></section>
</div>`;
});
export {
  Page as default
};
