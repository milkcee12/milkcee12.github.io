import { c as create_ssr_component, k as each, d as add_attribute, e as escape } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-1ushxgq.svelte-1ushxgq{color:#FF3062}.color-art.svelte-1ushxgq.svelte-1ushxgq{color:#12E599}h1.svelte-1ushxgq.svelte-1ushxgq{font-size:3rem}h2.svelte-1ushxgq.svelte-1ushxgq{font-size:2.7rem}h3.svelte-1ushxgq.svelte-1ushxgq{font-size:1.6rem}p.svelte-1ushxgq.svelte-1ushxgq,li.svelte-1ushxgq.svelte-1ushxgq,li.svelte-1ushxgq.svelte-1ushxgq{font-size:1.15rem;color:#C3C3C3}figcaption.svelte-1ushxgq.svelte-1ushxgq{color:#C3C3C3}@media(max-width: 992px){p.svelte-1ushxgq.svelte-1ushxgq,li.svelte-1ushxgq.svelte-1ushxgq{font-size:1.05rem !important}h1.svelte-1ushxgq.svelte-1ushxgq{font-size:2.5rem !important}h2.svelte-1ushxgq.svelte-1ushxgq{font-size:2rem !important}h3.svelte-1ushxgq.svelte-1ushxgq{font-size:1.3rem !important}}.svelte-1ushxgq.svelte-1ushxgq::-webkit-scrollbar,.svelte-1ushxgq.svelte-1ushxgq::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1ushxgq.svelte-1ushxgq::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-1ushxgq.svelte-1ushxgq{margin-bottom:8em}.mc-c-about.svelte-1ushxgq p.svelte-1ushxgq{width:70%}.mc-c-lists.svelte-1ushxgq.svelte-1ushxgq{width:70%}.mc-c-lists--row.svelte-1ushxgq.svelte-1ushxgq{display:flex;flex-wrap:wrap;gap:25px}.mc-c-lists--col.svelte-1ushxgq.svelte-1ushxgq{flex:1 1 30%}.mc-c-lists--col.svelte-1ushxgq ul.svelte-1ushxgq{list-style-type:none;padding:0;color:#C3C3C3}.mc-c-lists--col.svelte-1ushxgq li.svelte-1ushxgq{padding-bottom:6px}.mc-c-pfp.svelte-1ushxgq.svelte-1ushxgq{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:18px}.mc-c-pfp--item.svelte-1ushxgq.svelte-1ushxgq{flex:0 0 auto}.mc-c-pfp--item.svelte-1ushxgq figcaption.svelte-1ushxgq{margin-top:10px}.mc-c-pfp--item.svelte-1ushxgq img.svelte-1ushxgq{transform-origin:center left;width:275px;height:275px;transform:scale(0.96);border-radius:25px;transition:0.25s all}.mc-c-pfp--item.svelte-1ushxgq img.svelte-1ushxgq:hover{transform:scale(1)}.mc-c-pfp--item.svelte-1ushxgq:not(:first-child) img.svelte-1ushxgq{filter:grayscale(100%)}.mc-c-pfp--item.svelte-1ushxgq:not(:first-child) img.svelte-1ushxgq:hover{filter:none}@media(max-width: 992px){.mc-c-lists.svelte-1ushxgq.svelte-1ushxgq,.mc-c-about.svelte-1ushxgq.svelte-1ushxgq{width:100%}}@media(max-width: 768px){}@media(max-width: 576px){.mc-c-pfp.svelte-1ushxgq.svelte-1ushxgq{justify-content:center}.mc-c-pfp--item.svelte-1ushxgq.svelte-1ushxgq{text-align:center}.mc-c-pfp--item.svelte-1ushxgq img.svelte-1ushxgq{transform:scale(1)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pfps = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""}

<div class="${"mc-l-container svelte-1ushxgq"}"><section class="${"mc-c-about svelte-1ushxgq"}"><div class="${"mc-c-title svelte-1ushxgq"}"><h1 class="${"svelte-1ushxgq"}">This site is home to the two things I&#39;m passionate about: <span class="${"color-art svelte-1ushxgq"}">drawing</span>
        and <span class="${"color-tech svelte-1ushxgq"}">programming</span>.
      </h1></div>
    <p class="${"svelte-1ushxgq"}">I grew up in San Diego as a fine artist. I did a lot of acrylic painting
      and pencil drawings, and even got a few awards for my art. But I was
      always looking for a way to get closer to the art I saw in video games and
      anime I discovered digital art in high school, I was immediately hooked.
    </p>
    <p class="${"svelte-1ushxgq"}">Studying computer science was more of an afterthought until college, where
      I discovered that I also really liked programming and product design. When
      I&#39;m not glued to my computer, you can find me reading manga, eating
      pastries, or in the Uniqlo graphic tee section.
    </p></section>
  <section class="${"svelte-1ushxgq"}"><h2 class="${"svelte-1ushxgq"}">Profile Picture Graveyard \u{1FAA6}</h2>
    <p class="${"svelte-1ushxgq"}">An overview of how my art style has changed over the years! :)</p>
    <div class="${"mc-c-pfp svelte-1ushxgq"}">${each(pfps, ({ url, date }) => {
    return `<div class="${"mc-c-pfp--item svelte-1ushxgq"}"><img${add_attribute("src", url, 0)}${add_attribute("alt", date, 0)} class="${"svelte-1ushxgq"}">
          <figcaption class="${"svelte-1ushxgq"}">${escape(date)}</figcaption>
        </div>`;
  })}</div></section>
  <section class="${"mc-c-lists svelte-1ushxgq"}"><h2 class="${"svelte-1ushxgq"}">Fun Lists \u{1F4DC}</h2>
    <p class="${"svelte-1ushxgq"}">Here are some of my favorite things as lists!</p>
    <div class="${"mc-c-lists--row svelte-1ushxgq"}"><div class="${"mc-c-lists--col svelte-1ushxgq"}"><h3 class="${"svelte-1ushxgq"}">Manga</h3>
        <ul class="${"svelte-1ushxgq"}"><li class="${"svelte-1ushxgq"}">Pandora Hearts</li>
          <li class="${"svelte-1ushxgq"}">Blue Period</li>
          <li class="${"svelte-1ushxgq"}">Kingdom</li>
          <li class="${"svelte-1ushxgq"}">Jigokuraku (Hell&#39;s Paradise)</li>
          <li class="${"svelte-1ushxgq"}">Hikaru no Go</li></ul></div>
      <div class="${"mc-c-lists--col svelte-1ushxgq"}"><h3 class="${"svelte-1ushxgq"}">Anime</h3>
        <ul class="${"svelte-1ushxgq"}"><li class="${"svelte-1ushxgq"}">Bleach</li>
          <li class="${"svelte-1ushxgq"}">Fairy Tail</li>
          <li class="${"svelte-1ushxgq"}">Link Click</li>
          <li class="${"svelte-1ushxgq"}">Haikyuu!</li>
          <li class="${"svelte-1ushxgq"}">Birdie Wing</li></ul></div>
      <div class="${"mc-c-lists--col svelte-1ushxgq"}"><h3 class="${"svelte-1ushxgq"}">League of Legends</h3>
        <ul class="${"svelte-1ushxgq"}"><li class="${"svelte-1ushxgq"}">Lux</li>
          <li class="${"svelte-1ushxgq"}">Seraphine</li>
          <li class="${"svelte-1ushxgq"}">Vel&#39;koz</li>
          <li class="${"svelte-1ushxgq"}">Xerath</li>
          <li class="${"svelte-1ushxgq"}">Ahri</li></ul></div></div></section>
</div>`;
});
export {
  Page as default
};
