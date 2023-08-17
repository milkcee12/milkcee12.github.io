import { c as create_ssr_component, b as each, e as escape, h as add_attribute } from "../../../../chunks/index2.js";
import "../../../../chunks/functions.js";
/* empty css                                                          */const Modal_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-dqwujc.svelte-dqwujc{font-size:3rem}h2.svelte-dqwujc.svelte-dqwujc{font-size:2.7rem}p.svelte-dqwujc.svelte-dqwujc{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-dqwujc.svelte-dqwujc{font-size:1.05rem !important}h1.svelte-dqwujc.svelte-dqwujc{font-size:2.5rem !important}h2.svelte-dqwujc.svelte-dqwujc{font-size:2rem !important}}.svelte-dqwujc.svelte-dqwujc::-webkit-scrollbar,.svelte-dqwujc.svelte-dqwujc::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-dqwujc.svelte-dqwujc::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-dqwujc.svelte-dqwujc{margin-bottom:8em}.mc-c-gallery.svelte-dqwujc.svelte-dqwujc{display:flex;flex:1;flex-wrap:wrap;justify-content:flex-start;width:100%;gap:1em}.mc-c-gallery--container.svelte-dqwujc.svelte-dqwujc{flex:1 1 auto;flex-grow:1;height:40vh;text-align:center}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-dqwujc.svelte-dqwujc{height:30vh}}.mc-c-gallery--container.svelte-dqwujc p.svelte-dqwujc{color:#FFFFFF;font-size:1.3rem;margin:0;z-index:10;position:relative;top:50%;transform:translateY(-50%);opacity:0;transition:opacity 0.25s;height:0}.mc-c-gallery--container.svelte-dqwujc.svelte-dqwujc:hover{cursor:pointer}.mc-c-gallery--container.svelte-dqwujc:hover p.svelte-dqwujc{opacity:1}.mc-c-gallery--container.svelte-dqwujc:hover img.svelte-dqwujc{opacity:0.4}.mc-c-gallery--container.svelte-dqwujc img.svelte-dqwujc{border-radius:10px;max-height:100%;width:100%;min-width:50%;object-fit:cover;object-position:top;transition:opacity 0.25s;position:relative}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-dqwujc img.svelte-dqwujc{height:30vh;min-width:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xfty9t_START -->${$$result.title = `<title>Playground | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1xfty9t_END -->`, ""}

<h1 class="svelte-dqwujc">Playground</h1>
<section class="svelte-dqwujc"><h2 class="svelte-dqwujc">Fanart</h2>
  <p class="svelte-dqwujc">Paying homage to some of my favorite works in pop culture.</p>
  <div class="mc-c-gallery svelte-dqwujc">${each(data.fanart, (image) => {
    return `<div class="mc-c-gallery--container svelte-dqwujc">${!image.error ? `<p class="svelte-dqwujc">${escape(image.title)}</p>
          <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-dqwujc">` : `<img${add_attribute("src", image.url, 0)} alt="fanart" class="svelte-dqwujc">`}
      </div>`;
  })}</div>
</section>`;
});
export {
  Page as default
};
