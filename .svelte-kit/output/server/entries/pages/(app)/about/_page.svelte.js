import { c as create_ssr_component, d as add_attribute, k as each, e as escape } from "../../../../chunks/index.js";
const cowPainting = "/_app/immutable/assets/about-cow-3600035d.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-1emqext.svelte-1emqext{color:#FF3062}.color-art.svelte-1emqext.svelte-1emqext{color:#12E599}h1.svelte-1emqext.svelte-1emqext{font-size:3rem}h2.svelte-1emqext.svelte-1emqext{font-size:2.7rem}h3.svelte-1emqext.svelte-1emqext{font-size:1.6rem}p.svelte-1emqext.svelte-1emqext,li.svelte-1emqext.svelte-1emqext,li.svelte-1emqext.svelte-1emqext{font-size:1.15rem;color:#C3C3C3}figcaption.svelte-1emqext.svelte-1emqext{color:#C3C3C3}@media(max-width: 992px){p.svelte-1emqext.svelte-1emqext,li.svelte-1emqext.svelte-1emqext{font-size:1.05rem !important}h1.svelte-1emqext.svelte-1emqext{font-size:2.5rem !important}h2.svelte-1emqext.svelte-1emqext{font-size:2rem !important}h3.svelte-1emqext.svelte-1emqext{font-size:1.3rem !important}}.svelte-1emqext.svelte-1emqext::-webkit-scrollbar,.svelte-1emqext.svelte-1emqext::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1emqext.svelte-1emqext::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-1emqext.svelte-1emqext{margin-bottom:8em}section.svelte-1emqext>p.svelte-1emqext{width:85%}.mc-c-about--content.svelte-1emqext.svelte-1emqext{width:85%;display:flex;flex:1 1 auto;flex-wrap:wrap;gap:40px}.mc-c-about--content--text.svelte-1emqext.svelte-1emqext{flex:1 1 250px}.mc-c-about--content.svelte-1emqext img.svelte-1emqext{height:min(356px, 75%);width:min(475px, 100%);border-radius:25px}.mc-c-lists.svelte-1emqext.svelte-1emqext{width:70%}.mc-c-lists--row.svelte-1emqext.svelte-1emqext{display:flex;flex-wrap:wrap;gap:25px}.mc-c-lists--col.svelte-1emqext.svelte-1emqext{flex:1 1 30%}.mc-c-lists--col.svelte-1emqext ul.svelte-1emqext{list-style-type:none;padding:0;color:#C3C3C3}.mc-c-lists--col.svelte-1emqext li.svelte-1emqext{padding-bottom:6px}.mc-c-pfp.svelte-1emqext.svelte-1emqext{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:25px 16px;margin-top:3em}.mc-c-pfp--item.svelte-1emqext.svelte-1emqext{flex:0 0 auto}.mc-c-pfp--item.svelte-1emqext figure.svelte-1emqext{margin:0}.mc-c-pfp--item.svelte-1emqext figcaption.svelte-1emqext{margin-top:5px}.mc-c-pfp--item.svelte-1emqext img.svelte-1emqext{transform-origin:center left;width:275px;height:275px;transform:scale(0.96);border-radius:25px;transition:0.25s all}.mc-c-pfp--item.svelte-1emqext img.svelte-1emqext:hover{transform:scale(1)}.mc-c-pfp--item.svelte-1emqext:not(:first-child) img.svelte-1emqext{filter:grayscale(100%);opacity:0.9}.mc-c-pfp--item.svelte-1emqext:not(:first-child) img.svelte-1emqext:hover{filter:none;opacity:1}@media(max-width: 992px){.mc-c-lists.svelte-1emqext.svelte-1emqext,.mc-c-about.svelte-1emqext.svelte-1emqext{width:100%}.mc-c-about--content.svelte-1emqext.svelte-1emqext{width:100%}}@media(max-width: 768px){section.svelte-1emqext>p.svelte-1emqext{width:100%}}@media(max-width: 576px){.mc-c-pfp.svelte-1emqext.svelte-1emqext{justify-content:center}.mc-c-pfp--item.svelte-1emqext.svelte-1emqext{text-align:center}.mc-c-pfp--item.svelte-1emqext img.svelte-1emqext{transform:scale(1)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pfps = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""}

<section class="${"mc-c-about svelte-1emqext"}"><div class="${"mc-c-title svelte-1emqext"}"><h1 class="${"svelte-1emqext"}">This site is home to the two things I&#39;m passionate about: <span class="${"color-art svelte-1emqext"}">drawing</span>
      and <span class="${"color-tech svelte-1emqext"}">programming</span>.
    </h1></div>
  <div class="${"mc-c-about--content svelte-1emqext"}"><img${add_attribute("src", cowPainting, 0)} alt="${"Cow Painting"}" class="${"svelte-1emqext"}">
    <div class="${"mc-c-about--content--text svelte-1emqext"}"><p class="${"svelte-1emqext"}">I grew up in San Diego as a fine artist. I did a lot of acrylic painting
        and pencil drawings, and even got a few awards for my art. But I was
        always looking for a way to get closer to the art I saw in video games
        and anime I discovered digital art in high school, I was immediately
        hooked.
      </p>
      <p class="${"svelte-1emqext"}">Studying computer science was more of an afterthought until college,
        where I discovered that I also really liked programming and product
        design. When I&#39;m not glued to my computer, you can find me reading
        manga, eating pastries, or in the Uniqlo graphic tee section.
      </p></div></div></section>
<section class="${"svelte-1emqext"}"><h2 class="${"svelte-1emqext"}">Profile Picture Graveyard \u{1FAA6}</h2>
  <p class="${"svelte-1emqext"}">An overview of how my art has changed over the years! Some of these are
    original characters, and some are fictional personas of myself.
  </p>
  <div class="${"mc-c-pfp svelte-1emqext"}">${each(pfps, ({ url, date }) => {
    return `<div class="${"mc-c-pfp--item svelte-1emqext"}"><figure class="${"svelte-1emqext"}"><img${add_attribute("src", url, 0)}${add_attribute("alt", date, 0)} class="${"svelte-1emqext"}">
          <figcaption class="${"svelte-1emqext"}">${escape(date)}</figcaption></figure>
      </div>`;
  })}</div></section>
<section class="${"mc-c-lists svelte-1emqext"}"><h2 class="${"svelte-1emqext"}">Fun Lists \u{1F4DC}</h2>
  <p class="${"svelte-1emqext"}">Here are some of my favorite things as lists!</p>
  <div class="${"mc-c-lists--row svelte-1emqext"}"><div class="${"mc-c-lists--col svelte-1emqext"}"><h3 class="${"svelte-1emqext"}">Manga</h3>
      <ul class="${"svelte-1emqext"}"><li class="${"svelte-1emqext"}">Pandora Hearts</li>
        <li class="${"svelte-1emqext"}">Blue Period</li>
        <li class="${"svelte-1emqext"}">Kingdom</li>
        <li class="${"svelte-1emqext"}">Jigokuraku (Hell&#39;s Paradise)</li>
        <li class="${"svelte-1emqext"}">Hikaru no Go</li></ul></div>
    <div class="${"mc-c-lists--col svelte-1emqext"}"><h3 class="${"svelte-1emqext"}">Anime</h3>
      <ul class="${"svelte-1emqext"}"><li class="${"svelte-1emqext"}">Bleach</li>
        <li class="${"svelte-1emqext"}">Fairy Tail</li>
        <li class="${"svelte-1emqext"}">Link Click</li>
        <li class="${"svelte-1emqext"}">Haikyuu!</li>
        <li class="${"svelte-1emqext"}">Birdie Wing</li></ul></div>
    <div class="${"mc-c-lists--col svelte-1emqext"}"><h3 class="${"svelte-1emqext"}">League of Legends</h3>
      <ul class="${"svelte-1emqext"}"><li class="${"svelte-1emqext"}">Lux</li>
        <li class="${"svelte-1emqext"}">Seraphine</li>
        <li class="${"svelte-1emqext"}">Vel&#39;koz</li>
        <li class="${"svelte-1emqext"}">Xerath</li>
        <li class="${"svelte-1emqext"}">Ahri</li></ul></div></div>
</section>`;
});
export {
  Page as default
};
