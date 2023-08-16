import { c as create_ssr_component, k as each, d as add_attribute, e as escape } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-kp3dpj.svelte-kp3dpj{color:#FF3062}.color-art.svelte-kp3dpj.svelte-kp3dpj{color:#12E599}h1.svelte-kp3dpj.svelte-kp3dpj{font-size:3rem}h2.svelte-kp3dpj.svelte-kp3dpj{font-size:2.7rem}h3.svelte-kp3dpj.svelte-kp3dpj{font-size:1.6rem}p.svelte-kp3dpj.svelte-kp3dpj,li.svelte-kp3dpj.svelte-kp3dpj,li.svelte-kp3dpj.svelte-kp3dpj{font-size:1.15rem;color:#C3C3C3}figcaption.svelte-kp3dpj.svelte-kp3dpj{color:#C3C3C3}@media(max-width: 992px){p.svelte-kp3dpj.svelte-kp3dpj,li.svelte-kp3dpj.svelte-kp3dpj{font-size:1.05rem !important}h1.svelte-kp3dpj.svelte-kp3dpj{font-size:2.5rem !important}h2.svelte-kp3dpj.svelte-kp3dpj{font-size:2rem !important}h3.svelte-kp3dpj.svelte-kp3dpj{font-size:1.3rem !important}}.svelte-kp3dpj.svelte-kp3dpj::-webkit-scrollbar,.svelte-kp3dpj.svelte-kp3dpj::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-kp3dpj.svelte-kp3dpj::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-kp3dpj.svelte-kp3dpj{margin-bottom:8em}section.svelte-kp3dpj>p.svelte-kp3dpj{width:70%}.mc-c-lists.svelte-kp3dpj.svelte-kp3dpj{width:70%}.mc-c-lists--row.svelte-kp3dpj.svelte-kp3dpj{display:flex;flex-wrap:wrap;gap:25px}.mc-c-lists--col.svelte-kp3dpj.svelte-kp3dpj{flex:1 1 30%}.mc-c-lists--col.svelte-kp3dpj ul.svelte-kp3dpj{list-style-type:none;padding:0;color:#C3C3C3}.mc-c-lists--col.svelte-kp3dpj li.svelte-kp3dpj{padding-bottom:6px}.mc-c-pfp.svelte-kp3dpj.svelte-kp3dpj{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:25px 16px;margin-top:3em}.mc-c-pfp--item.svelte-kp3dpj.svelte-kp3dpj{flex:0 0 auto}.mc-c-pfp--item.svelte-kp3dpj figure.svelte-kp3dpj{margin:0}.mc-c-pfp--item.svelte-kp3dpj figcaption.svelte-kp3dpj{margin-top:5px}.mc-c-pfp--item.svelte-kp3dpj img.svelte-kp3dpj{transform-origin:center left;width:275px;height:275px;transform:scale(0.96);border-radius:25px;transition:0.25s all}.mc-c-pfp--item.svelte-kp3dpj img.svelte-kp3dpj:hover{transform:scale(1)}.mc-c-pfp--item.svelte-kp3dpj:not(:first-child) img.svelte-kp3dpj{filter:grayscale(100%)}.mc-c-pfp--item.svelte-kp3dpj:not(:first-child) img.svelte-kp3dpj:hover{filter:none}@media(max-width: 992px){.mc-c-lists.svelte-kp3dpj.svelte-kp3dpj,.mc-c-about.svelte-kp3dpj.svelte-kp3dpj{width:100%}}@media(max-width: 768px){section.svelte-kp3dpj>p.svelte-kp3dpj{width:100%}}@media(max-width: 576px){.mc-c-pfp.svelte-kp3dpj.svelte-kp3dpj{justify-content:center}.mc-c-pfp--item.svelte-kp3dpj.svelte-kp3dpj{text-align:center}.mc-c-pfp--item.svelte-kp3dpj img.svelte-kp3dpj{transform:scale(1)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pfps = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""}

<div class="${"mc-l-container svelte-kp3dpj"}"><section class="${"mc-c-about svelte-kp3dpj"}"><div class="${"mc-c-title svelte-kp3dpj"}"><h1 class="${"svelte-kp3dpj"}">This site is home to the two things I&#39;m passionate about: <span class="${"color-art svelte-kp3dpj"}">drawing</span>
        and <span class="${"color-tech svelte-kp3dpj"}">programming</span>.
      </h1></div>
    <p class="${"svelte-kp3dpj"}">I grew up in San Diego as a fine artist. I did a lot of acrylic painting
      and pencil drawings, and even got a few awards for my art. But I was
      always looking for a way to get closer to the art I saw in video games and
      anime I discovered digital art in high school, I was immediately hooked.
    </p>
    <p class="${"svelte-kp3dpj"}">Studying computer science was more of an afterthought until college, where
      I discovered that I also really liked programming and product design. When
      I&#39;m not glued to my computer, you can find me reading manga, eating
      pastries, or in the Uniqlo graphic tee section.
    </p></section>
  <section class="${"svelte-kp3dpj"}"><h2 class="${"svelte-kp3dpj"}">Profile Picture Graveyard \u{1FAA6}</h2>
    <p class="${"svelte-kp3dpj"}">An overview of how my art has changed over the years! Some of these are
      original characters, and some are fictional personas of myself.
    </p>
    <div class="${"mc-c-pfp svelte-kp3dpj"}">${each(pfps, ({ url, date }) => {
    return `<div class="${"mc-c-pfp--item svelte-kp3dpj"}"><figure class="${"svelte-kp3dpj"}"><img${add_attribute("src", url, 0)}${add_attribute("alt", date, 0)} class="${"svelte-kp3dpj"}">
            <figcaption class="${"svelte-kp3dpj"}">${escape(date)}</figcaption></figure>
        </div>`;
  })}</div></section>
  <section class="${"mc-c-lists svelte-kp3dpj"}"><h2 class="${"svelte-kp3dpj"}">Fun Lists \u{1F4DC}</h2>
    <p class="${"svelte-kp3dpj"}">Here are some of my favorite things as lists!</p>
    <div class="${"mc-c-lists--row svelte-kp3dpj"}"><div class="${"mc-c-lists--col svelte-kp3dpj"}"><h3 class="${"svelte-kp3dpj"}">Manga</h3>
        <ul class="${"svelte-kp3dpj"}"><li class="${"svelte-kp3dpj"}">Pandora Hearts</li>
          <li class="${"svelte-kp3dpj"}">Blue Period</li>
          <li class="${"svelte-kp3dpj"}">Kingdom</li>
          <li class="${"svelte-kp3dpj"}">Jigokuraku (Hell&#39;s Paradise)</li>
          <li class="${"svelte-kp3dpj"}">Hikaru no Go</li></ul></div>
      <div class="${"mc-c-lists--col svelte-kp3dpj"}"><h3 class="${"svelte-kp3dpj"}">Anime</h3>
        <ul class="${"svelte-kp3dpj"}"><li class="${"svelte-kp3dpj"}">Bleach</li>
          <li class="${"svelte-kp3dpj"}">Fairy Tail</li>
          <li class="${"svelte-kp3dpj"}">Link Click</li>
          <li class="${"svelte-kp3dpj"}">Haikyuu!</li>
          <li class="${"svelte-kp3dpj"}">Birdie Wing</li></ul></div>
      <div class="${"mc-c-lists--col svelte-kp3dpj"}"><h3 class="${"svelte-kp3dpj"}">League of Legends</h3>
        <ul class="${"svelte-kp3dpj"}"><li class="${"svelte-kp3dpj"}">Lux</li>
          <li class="${"svelte-kp3dpj"}">Seraphine</li>
          <li class="${"svelte-kp3dpj"}">Vel&#39;koz</li>
          <li class="${"svelte-kp3dpj"}">Xerath</li>
          <li class="${"svelte-kp3dpj"}">Ahri</li></ul></div></div></section>
</div>`;
});
export {
  Page as default
};
