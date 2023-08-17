import { c as create_ssr_component, h as add_attribute, b as each, e as escape } from "../../../../chunks/index2.js";
const cowPainting = "/_app/immutable/assets/about-cow.3600035d.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-1xzhc99.svelte-1xzhc99{color:#FF3062}.color-art.svelte-1xzhc99.svelte-1xzhc99{color:#12E599}h1.svelte-1xzhc99.svelte-1xzhc99{font-size:3rem}h2.svelte-1xzhc99.svelte-1xzhc99{font-size:2.7rem}h3.svelte-1xzhc99.svelte-1xzhc99{font-size:1.6rem}p.svelte-1xzhc99.svelte-1xzhc99,li.svelte-1xzhc99.svelte-1xzhc99,li.svelte-1xzhc99.svelte-1xzhc99{font-size:1.1rem;color:#C3C3C3}figcaption.svelte-1xzhc99.svelte-1xzhc99{color:#C3C3C3}@media(max-width: 992px){p.svelte-1xzhc99.svelte-1xzhc99,li.svelte-1xzhc99.svelte-1xzhc99{font-size:1.05rem !important}h1.svelte-1xzhc99.svelte-1xzhc99{font-size:2.5rem !important}h2.svelte-1xzhc99.svelte-1xzhc99{font-size:2rem !important}h3.svelte-1xzhc99.svelte-1xzhc99{font-size:1.3rem !important}}.svelte-1xzhc99.svelte-1xzhc99::-webkit-scrollbar{width:8px;height:8px}.svelte-1xzhc99.svelte-1xzhc99::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-1xzhc99.svelte-1xzhc99::-webkit-scrollbar-thumb{background-color:#575757}.svelte-1xzhc99.svelte-1xzhc99::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-1xzhc99.svelte-1xzhc99::-webkit-scrollbar-corner,.svelte-1xzhc99.svelte-1xzhc99::-webkit-scrollbar-track{background-color:none}section.svelte-1xzhc99.svelte-1xzhc99{margin-bottom:8em}section.svelte-1xzhc99>p.svelte-1xzhc99{width:85%}.mc-c-about--content.svelte-1xzhc99.svelte-1xzhc99{width:85%;display:flex;flex:1 1 auto;flex-wrap:wrap;gap:40px}.mc-c-about--content--text.svelte-1xzhc99.svelte-1xzhc99{flex:1 1 250px}.mc-c-about--content.svelte-1xzhc99 img.svelte-1xzhc99{max-height:40vh;max-width:100%;border-radius:25px}.mc-c-lists.svelte-1xzhc99.svelte-1xzhc99{width:70%}.mc-c-lists--row.svelte-1xzhc99.svelte-1xzhc99{display:flex;flex-wrap:wrap;gap:25px}.mc-c-lists--col.svelte-1xzhc99.svelte-1xzhc99{flex:1 1 30%}.mc-c-lists--col.svelte-1xzhc99 ul.svelte-1xzhc99{list-style-type:none;padding:0;color:#C3C3C3}.mc-c-lists--col.svelte-1xzhc99 li.svelte-1xzhc99{padding-bottom:6px}.mc-c-pfp.svelte-1xzhc99.svelte-1xzhc99{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:25px 16px;margin-top:3em}.mc-c-pfp--item.svelte-1xzhc99.svelte-1xzhc99{flex:0 0 auto}.mc-c-pfp--item.svelte-1xzhc99 figure.svelte-1xzhc99{margin:0}.mc-c-pfp--item.svelte-1xzhc99 figcaption.svelte-1xzhc99{margin-top:5px}.mc-c-pfp--item.svelte-1xzhc99 img.svelte-1xzhc99{transform-origin:center left;width:275px;height:275px;transform:scale(0.96);border-radius:25px;transition:0.25s all}.mc-c-pfp--item.svelte-1xzhc99 img.svelte-1xzhc99:hover{transform:scale(1)}.mc-c-pfp--item.svelte-1xzhc99:not(:first-child) img.svelte-1xzhc99{filter:grayscale(100%);opacity:0.9}.mc-c-pfp--item.svelte-1xzhc99:not(:first-child) img.svelte-1xzhc99:hover{filter:none;opacity:1}@media(max-width: 992px){.mc-c-lists.svelte-1xzhc99.svelte-1xzhc99,.mc-c-about.svelte-1xzhc99.svelte-1xzhc99{width:100%}.mc-c-about--content.svelte-1xzhc99.svelte-1xzhc99{width:100%}}@media(max-width: 768px){section.svelte-1xzhc99>p.svelte-1xzhc99{width:100%}}@media(max-width: 576px){.mc-c-pfp.svelte-1xzhc99.svelte-1xzhc99{justify-content:center}.mc-c-pfp--item.svelte-1xzhc99.svelte-1xzhc99{text-align:center}.mc-c-pfp--item.svelte-1xzhc99 img.svelte-1xzhc99{transform:scale(1)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pfps = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""}

<section class="mc-c-about svelte-1xzhc99"><div class="mc-c-title svelte-1xzhc99"><h1 class="svelte-1xzhc99">This site is home to the two things I&#39;m passionate about: <span class="color-art svelte-1xzhc99">drawing</span>
      and <span class="color-tech svelte-1xzhc99">programming</span>.
    </h1></div>
  <div class="mc-c-about--content svelte-1xzhc99"><img${add_attribute("src", cowPainting, 0)} alt="Cow Painting" class="svelte-1xzhc99">
    <div class="mc-c-about--content--text svelte-1xzhc99"><p class="svelte-1xzhc99">I grew up in San Diego as a fine artist. I did a lot of acrylic painting
        and pencil drawings, and even got a few awards for my art. But I was
        always looking for a way to get closer to the art I saw in video games
        and anime—when I discovered digital art in high school, I was immediately
        hooked.
      </p>
      <p class="svelte-1xzhc99">Studying computer science was more of an afterthought until college,
        where I discovered that I also really liked programming and product
        design. When I&#39;m not glued to my computer, you can find me reading
        manga, eating pastries, or in the Uniqlo graphic tee section.
      </p></div></div></section>
<section class="svelte-1xzhc99"><h2 class="svelte-1xzhc99">Profile Picture Graveyard 🪦</h2>
  <p class="svelte-1xzhc99">An overview of how my art has changed over the years! Some of these are
    original characters, and some are fictional personas of myself.
  </p>
  <div class="mc-c-pfp svelte-1xzhc99">${each(pfps, ({ url, date }) => {
    return `<div class="mc-c-pfp--item svelte-1xzhc99"><figure class="svelte-1xzhc99"><img${add_attribute("src", url, 0)}${add_attribute("alt", date, 0)} class="svelte-1xzhc99">
          <figcaption class="svelte-1xzhc99">${escape(date)}</figcaption></figure>
      </div>`;
  })}</div></section>
<section class="mc-c-lists svelte-1xzhc99"><h2 class="svelte-1xzhc99">Fun Lists 📜</h2>
  <p class="svelte-1xzhc99">Here are some of my favorite things as lists!</p>
  <div class="mc-c-lists--row svelte-1xzhc99"><div class="mc-c-lists--col svelte-1xzhc99"><h3 class="svelte-1xzhc99">Manga</h3>
      <ul class="svelte-1xzhc99"><li class="svelte-1xzhc99">Pandora Hearts</li>
        <li class="svelte-1xzhc99">Blue Period</li>
        <li class="svelte-1xzhc99">Kingdom</li>
        <li class="svelte-1xzhc99">Jigokuraku (Hell&#39;s Paradise)</li>
        <li class="svelte-1xzhc99">Hikaru no Go</li></ul></div>
    <div class="mc-c-lists--col svelte-1xzhc99"><h3 class="svelte-1xzhc99">Anime</h3>
      <ul class="svelte-1xzhc99"><li class="svelte-1xzhc99">Bleach</li>
        <li class="svelte-1xzhc99">Fairy Tail</li>
        <li class="svelte-1xzhc99">Link Click</li>
        <li class="svelte-1xzhc99">Haikyuu!</li>
        <li class="svelte-1xzhc99">Birdie Wing</li></ul></div>
    <div class="mc-c-lists--col svelte-1xzhc99"><h3 class="svelte-1xzhc99">League of Legends</h3>
      <ul class="svelte-1xzhc99"><li class="svelte-1xzhc99">Lux</li>
        <li class="svelte-1xzhc99">Seraphine</li>
        <li class="svelte-1xzhc99">Vel&#39;koz</li>
        <li class="svelte-1xzhc99">Xerath</li>
        <li class="svelte-1xzhc99">Ahri</li></ul></div></div>
</section>`;
});
export {
  Page as default
};
