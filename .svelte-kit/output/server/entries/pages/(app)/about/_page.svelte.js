import { c as create_ssr_component, h as add_attribute, b as each, e as escape } from "../../../../chunks/index2.js";
const cowPainting = "/_app/immutable/assets/about-cow.3600035d.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-chdqqj.svelte-chdqqj{color:#FF3062}.color-art.svelte-chdqqj.svelte-chdqqj{color:#12E599}h1.svelte-chdqqj.svelte-chdqqj{font-size:3rem}h2.svelte-chdqqj.svelte-chdqqj{font-size:2.7rem}h3.svelte-chdqqj.svelte-chdqqj{font-size:1.6rem}p.svelte-chdqqj.svelte-chdqqj,li.svelte-chdqqj.svelte-chdqqj,li.svelte-chdqqj.svelte-chdqqj{font-size:1.1rem;color:#C3C3C3}figcaption.svelte-chdqqj.svelte-chdqqj{color:#C3C3C3}@media(max-width: 992px){p.svelte-chdqqj.svelte-chdqqj,li.svelte-chdqqj.svelte-chdqqj{font-size:1.05rem !important}h1.svelte-chdqqj.svelte-chdqqj{font-size:2.5rem !important}h2.svelte-chdqqj.svelte-chdqqj{font-size:2rem !important}h3.svelte-chdqqj.svelte-chdqqj{font-size:1.3rem !important}}.svelte-chdqqj.svelte-chdqqj::-webkit-scrollbar,.svelte-chdqqj.svelte-chdqqj::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-chdqqj.svelte-chdqqj::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-chdqqj.svelte-chdqqj{margin-bottom:8em}section.svelte-chdqqj>p.svelte-chdqqj{width:85%}.mc-c-about--content.svelte-chdqqj.svelte-chdqqj{width:85%;display:flex;flex:1 1 auto;flex-wrap:wrap;gap:40px}.mc-c-about--content--text.svelte-chdqqj.svelte-chdqqj{flex:1 1 250px}.mc-c-about--content.svelte-chdqqj img.svelte-chdqqj{max-height:40vh;max-width:100%;border-radius:25px}.mc-c-lists.svelte-chdqqj.svelte-chdqqj{width:70%}.mc-c-lists--row.svelte-chdqqj.svelte-chdqqj{display:flex;flex-wrap:wrap;gap:25px}.mc-c-lists--col.svelte-chdqqj.svelte-chdqqj{flex:1 1 30%}.mc-c-lists--col.svelte-chdqqj ul.svelte-chdqqj{list-style-type:none;padding:0;color:#C3C3C3}.mc-c-lists--col.svelte-chdqqj li.svelte-chdqqj{padding-bottom:6px}.mc-c-pfp.svelte-chdqqj.svelte-chdqqj{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:25px 16px;margin-top:3em}.mc-c-pfp--item.svelte-chdqqj.svelte-chdqqj{flex:0 0 auto}.mc-c-pfp--item.svelte-chdqqj figure.svelte-chdqqj{margin:0}.mc-c-pfp--item.svelte-chdqqj figcaption.svelte-chdqqj{margin-top:5px}.mc-c-pfp--item.svelte-chdqqj img.svelte-chdqqj{transform-origin:center left;width:275px;height:275px;transform:scale(0.96);border-radius:25px;transition:0.25s all}.mc-c-pfp--item.svelte-chdqqj img.svelte-chdqqj:hover{transform:scale(1)}.mc-c-pfp--item.svelte-chdqqj:not(:first-child) img.svelte-chdqqj{filter:grayscale(100%);opacity:0.9}.mc-c-pfp--item.svelte-chdqqj:not(:first-child) img.svelte-chdqqj:hover{filter:none;opacity:1}@media(max-width: 992px){.mc-c-lists.svelte-chdqqj.svelte-chdqqj,.mc-c-about.svelte-chdqqj.svelte-chdqqj{width:100%}.mc-c-about--content.svelte-chdqqj.svelte-chdqqj{width:100%}}@media(max-width: 768px){section.svelte-chdqqj>p.svelte-chdqqj{width:100%}}@media(max-width: 576px){.mc-c-pfp.svelte-chdqqj.svelte-chdqqj{justify-content:center}.mc-c-pfp--item.svelte-chdqqj.svelte-chdqqj{text-align:center}.mc-c-pfp--item.svelte-chdqqj img.svelte-chdqqj{transform:scale(1)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pfps = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""}

<section class="mc-c-about svelte-chdqqj"><div class="mc-c-title svelte-chdqqj"><h1 class="svelte-chdqqj">This site is home to the two things I&#39;m passionate about: <span class="color-art svelte-chdqqj">drawing</span>
      and <span class="color-tech svelte-chdqqj">programming</span>.
    </h1></div>
  <div class="mc-c-about--content svelte-chdqqj"><img${add_attribute("src", cowPainting, 0)} alt="Cow Painting" class="svelte-chdqqj">
    <div class="mc-c-about--content--text svelte-chdqqj"><p class="svelte-chdqqj">I grew up in San Diego as a fine artist. I did a lot of acrylic painting
        and pencil drawings, and even got a few awards for my art. But I was
        always looking for a way to get closer to the art I saw in video games
        and anime—when I discovered digital art in high school, I was immediately
        hooked.
      </p>
      <p class="svelte-chdqqj">Studying computer science was more of an afterthought until college,
        where I discovered that I also really liked programming and product
        design. When I&#39;m not glued to my computer, you can find me reading
        manga, eating pastries, or in the Uniqlo graphic tee section.
      </p></div></div></section>
<section class="svelte-chdqqj"><h2 class="svelte-chdqqj">Profile Picture Graveyard 🪦</h2>
  <p class="svelte-chdqqj">An overview of how my art has changed over the years! Some of these are
    original characters, and some are fictional personas of myself.
  </p>
  <div class="mc-c-pfp svelte-chdqqj">${each(pfps, ({ url, date }) => {
    return `<div class="mc-c-pfp--item svelte-chdqqj"><figure class="svelte-chdqqj"><img${add_attribute("src", url, 0)}${add_attribute("alt", date, 0)} class="svelte-chdqqj">
          <figcaption class="svelte-chdqqj">${escape(date)}</figcaption></figure>
      </div>`;
  })}</div></section>
<section class="mc-c-lists svelte-chdqqj"><h2 class="svelte-chdqqj">Fun Lists 📜</h2>
  <p class="svelte-chdqqj">Here are some of my favorite things as lists!</p>
  <div class="mc-c-lists--row svelte-chdqqj"><div class="mc-c-lists--col svelte-chdqqj"><h3 class="svelte-chdqqj">Manga</h3>
      <ul class="svelte-chdqqj"><li class="svelte-chdqqj">Pandora Hearts</li>
        <li class="svelte-chdqqj">Blue Period</li>
        <li class="svelte-chdqqj">Kingdom</li>
        <li class="svelte-chdqqj">Jigokuraku (Hell&#39;s Paradise)</li>
        <li class="svelte-chdqqj">Hikaru no Go</li></ul></div>
    <div class="mc-c-lists--col svelte-chdqqj"><h3 class="svelte-chdqqj">Anime</h3>
      <ul class="svelte-chdqqj"><li class="svelte-chdqqj">Bleach</li>
        <li class="svelte-chdqqj">Fairy Tail</li>
        <li class="svelte-chdqqj">Link Click</li>
        <li class="svelte-chdqqj">Haikyuu!</li>
        <li class="svelte-chdqqj">Birdie Wing</li></ul></div>
    <div class="mc-c-lists--col svelte-chdqqj"><h3 class="svelte-chdqqj">League of Legends</h3>
      <ul class="svelte-chdqqj"><li class="svelte-chdqqj">Lux</li>
        <li class="svelte-chdqqj">Seraphine</li>
        <li class="svelte-chdqqj">Vel&#39;koz</li>
        <li class="svelte-chdqqj">Xerath</li>
        <li class="svelte-chdqqj">Ahri</li></ul></div></div>
</section>`;
});
export {
  Page as default
};
