import { c as create_ssr_component, b as each, h as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "../../../../chunks/functions.js";
/* empty css                                                          */const Modal_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-dg4hqe.svelte-dg4hqe{font-size:3rem}h2.svelte-dg4hqe.svelte-dg4hqe{font-size:2.7rem}p.svelte-dg4hqe.svelte-dg4hqe{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-dg4hqe.svelte-dg4hqe{font-size:1.05rem !important}h1.svelte-dg4hqe.svelte-dg4hqe{font-size:2.5rem !important}h2.svelte-dg4hqe.svelte-dg4hqe{font-size:2rem !important}}.svelte-dg4hqe.svelte-dg4hqe::-webkit-scrollbar{width:8px;height:8px}.svelte-dg4hqe.svelte-dg4hqe::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-dg4hqe.svelte-dg4hqe::-webkit-scrollbar-thumb{background-color:#575757}.svelte-dg4hqe.svelte-dg4hqe::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-dg4hqe.svelte-dg4hqe::-webkit-scrollbar-corner,.svelte-dg4hqe.svelte-dg4hqe::-webkit-scrollbar-track{background-color:none}section.svelte-dg4hqe.svelte-dg4hqe{margin-bottom:8em}.mc-c-gallery.svelte-dg4hqe.svelte-dg4hqe{display:flex;flex:1;flex-wrap:wrap;justify-content:flex-start;width:100%;gap:1em}.mc-c-gallery--container.svelte-dg4hqe.svelte-dg4hqe{flex:1 1 auto;flex-grow:1;height:40vh;text-align:center;box-sizing:border-box;border-radius:10px}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-dg4hqe.svelte-dg4hqe{height:30vh}}.mc-c-gallery--container.svelte-dg4hqe p.svelte-dg4hqe{color:#FFFFFF;font-size:1.3rem;margin:0;z-index:10;position:relative;top:50%;transform:translateY(-50%);opacity:0;transition:opacity 0.25s;height:0}.mc-c-gallery--container.svelte-dg4hqe.svelte-dg4hqe:hover{cursor:pointer}.mc-c-gallery--container.svelte-dg4hqe:hover p.svelte-dg4hqe{opacity:1}.mc-c-gallery--container.svelte-dg4hqe:hover img.svelte-dg4hqe{opacity:0.4}.mc-c-gallery--container.svelte-dg4hqe img.svelte-dg4hqe{border-radius:10px;max-height:100%;width:100%;min-width:50%;object-fit:cover;object-position:top;transition:opacity 0.25s;position:relative}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-dg4hqe img.svelte-dg4hqe{height:30vh;min-width:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xfty9t_START -->${$$result.title = `<title>Playground | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1xfty9t_END -->`, ""}

<h1 class="svelte-dg4hqe">Playground</h1>
<section class="svelte-dg4hqe"><h2 class="svelte-dg4hqe">Originals 🎈</h2>
  <p class="svelte-dg4hqe">Visions from the worlds inside my head.</p>
  <div class="mc-c-gallery svelte-dg4hqe">${each(data.sections.featured, (image) => {
    return `<div class="mc-c-gallery--container svelte-dg4hqe">${image.error || image.title == null ? `<p class="svelte-dg4hqe">Untitled</p>
          <img${add_attribute("src", image.url, 0)} alt="featured" class="svelte-dg4hqe">` : `<p class="svelte-dg4hqe">${escape(image.title)}</p>
          <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-dg4hqe">`}
      </div>`;
  })}</div></section>
<section class="svelte-dg4hqe"><h2 class="svelte-dg4hqe">Fanart 📹</h2>
  <p class="svelte-dg4hqe">Paying homage to some of my favorite works in pop culture.</p>
  <div class="mc-c-gallery svelte-dg4hqe">${each(data.sections.fanart, (image) => {
    return `<div class="mc-c-gallery--container svelte-dg4hqe">${image.error || image.title == null ? `<p class="svelte-dg4hqe">Untitled</p>
          <img${add_attribute("src", image.url, 0)} alt="fanart" class="svelte-dg4hqe">` : `<p class="svelte-dg4hqe">${escape(image.title)}</p>
          <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-dg4hqe">`}
      </div>`;
  })}</div>
</section>`;
});
export {
  Page as default
};
