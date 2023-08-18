import { c as create_ssr_component, b as each, g as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "../../../../chunks/functions.js";
/* empty css                                                          */const Modal_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1fjef6p.svelte-1fjef6p{font-size:2.7rem}p.svelte-1fjef6p.svelte-1fjef6p{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-1fjef6p.svelte-1fjef6p{font-size:1.05rem !important}h2.svelte-1fjef6p.svelte-1fjef6p{font-size:2rem !important}}.svelte-1fjef6p.svelte-1fjef6p::-webkit-scrollbar{width:8px;height:8px}.svelte-1fjef6p.svelte-1fjef6p::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-1fjef6p.svelte-1fjef6p::-webkit-scrollbar-thumb{background-color:#575757}.svelte-1fjef6p.svelte-1fjef6p::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-1fjef6p.svelte-1fjef6p::-webkit-scrollbar-corner,.svelte-1fjef6p.svelte-1fjef6p::-webkit-scrollbar-track{background-color:none}section.svelte-1fjef6p.svelte-1fjef6p{margin-bottom:8em}.mc-c-gallery.svelte-1fjef6p.svelte-1fjef6p{display:flex;flex:1;flex-wrap:wrap;justify-content:flex-start;width:100%;gap:1em}.mc-c-gallery--container.svelte-1fjef6p.svelte-1fjef6p{flex:1 1 auto;flex-grow:1;height:40vh;text-align:center;box-sizing:border-box;border-radius:10px}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-1fjef6p.svelte-1fjef6p{height:30vh}}.mc-c-gallery--container.svelte-1fjef6p p.svelte-1fjef6p{color:#FFFFFF;font-size:1.3rem;margin:0;z-index:10;position:relative;top:50%;transform:translateY(-50%);opacity:0;transition:opacity 0.25s;height:0}.mc-c-gallery--container.svelte-1fjef6p.svelte-1fjef6p:hover{cursor:pointer}.mc-c-gallery--container.svelte-1fjef6p:hover p.svelte-1fjef6p{opacity:1}.mc-c-gallery--container.svelte-1fjef6p:hover img.svelte-1fjef6p{opacity:0.4}.mc-c-gallery--container.svelte-1fjef6p img.svelte-1fjef6p{border-radius:10px;height:100%;width:100%;min-width:50%;object-fit:cover;object-position:top;transition:opacity 0.25s;position:relative}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-1fjef6p img.svelte-1fjef6p{height:30vh;min-width:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xfty9t_START -->${$$result.title = `<title>Playground | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1xfty9t_END -->`, ""}

<p class="svelte-1fjef6p">A page dedicated to all the smaller, one-off projects I&#39;ve done throughout the
  years. Click on the the images to learn more about them!
</p>
<section class="svelte-1fjef6p"><h2 class="svelte-1fjef6p">Originals 🎈</h2>
  <p class="svelte-1fjef6p">Visions from the worlds inside my head.</p>
  <div class="mc-c-gallery svelte-1fjef6p">${each(data.sections.featured, (image) => {
    return `<div class="mc-c-gallery--container svelte-1fjef6p">${image.error || image.title == null ? `<p class="svelte-1fjef6p">Untitled</p>
          <img${add_attribute("src", image.url, 0)} alt="featured" class="svelte-1fjef6p">` : `<p class="svelte-1fjef6p">${escape(image.title)}</p>
          <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-1fjef6p">`}
      </div>`;
  })}</div></section>
<section class="svelte-1fjef6p"><h2 class="svelte-1fjef6p">Fanart 📹</h2>
  <p class="svelte-1fjef6p">Paying homage to some of my favorite works in pop culture.</p>
  <div class="mc-c-gallery svelte-1fjef6p">${each(data.sections.fanart, (image) => {
    return `<div class="mc-c-gallery--container svelte-1fjef6p">${image.error || image.title == null ? `<p class="svelte-1fjef6p">Untitled</p>
          <img${add_attribute("src", image.url, 0)} alt="fanart" class="svelte-1fjef6p">` : `<p class="svelte-1fjef6p">${escape(image.title)}</p>
          <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-1fjef6p">`}
      </div>`;
  })}</div>
</section>`;
});
export {
  Page as default
};
