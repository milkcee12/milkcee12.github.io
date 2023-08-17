import { c as create_ssr_component, b as each, e as escape, h as add_attribute } from "../../../../chunks/index2.js";
import "../../../../chunks/functions.js";
/* empty css                                                          */const Modal_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-fjvcxz.svelte-fjvcxz{font-size:3rem}h2.svelte-fjvcxz.svelte-fjvcxz{font-size:2.7rem}p.svelte-fjvcxz.svelte-fjvcxz{font-size:1.15rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-fjvcxz.svelte-fjvcxz{font-size:1.05rem !important}h1.svelte-fjvcxz.svelte-fjvcxz{font-size:2.5rem !important}h2.svelte-fjvcxz.svelte-fjvcxz{font-size:2rem !important}}.svelte-fjvcxz.svelte-fjvcxz::-webkit-scrollbar,.svelte-fjvcxz.svelte-fjvcxz::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-fjvcxz.svelte-fjvcxz::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-fjvcxz.svelte-fjvcxz{margin-bottom:8em}.mc-c-gallery.svelte-fjvcxz.svelte-fjvcxz{display:flex;flex:1;flex-wrap:wrap;justify-content:flex-start;width:100%;gap:1em}.mc-c-gallery--container.svelte-fjvcxz.svelte-fjvcxz{flex:1 1 auto;flex-grow:1;height:40vh;text-align:center}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-fjvcxz.svelte-fjvcxz{height:30vh}}.mc-c-gallery--container.svelte-fjvcxz p.svelte-fjvcxz{color:#FFFFFF;font-size:1.3rem;margin:0;z-index:10;position:relative;top:50%;transform:translateY(-50%);opacity:0;transition:opacity 0.25s;height:0}.mc-c-gallery--container.svelte-fjvcxz.svelte-fjvcxz:hover{cursor:pointer}.mc-c-gallery--container.svelte-fjvcxz:hover p.svelte-fjvcxz{opacity:1}.mc-c-gallery--container.svelte-fjvcxz:hover img.svelte-fjvcxz{opacity:0.4}.mc-c-gallery--container.svelte-fjvcxz img.svelte-fjvcxz{border-radius:10px;max-height:100%;width:100%;min-width:50%;object-fit:cover;object-position:top;transition:opacity 0.25s;position:relative}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-fjvcxz img.svelte-fjvcxz{height:30vh;min-width:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xfty9t_START -->${$$result.title = `<title>Playground | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1xfty9t_END -->`, ""}

<h1 class="svelte-fjvcxz">Playground</h1>
<section class="svelte-fjvcxz"><h2 class="svelte-fjvcxz">Fanart</h2>
  <p class="svelte-fjvcxz">Paying homage to some of my favorite works in pop culture.</p>
  <div class="mc-c-gallery svelte-fjvcxz">${each(data.fanart, (image) => {
    return `<div class="mc-c-gallery--container svelte-fjvcxz">${!image.error ? `<p class="svelte-fjvcxz">${escape(image.title)}</p>
          <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-fjvcxz">` : `<img${add_attribute("src", image.url, 0)} alt="fanart" class="svelte-fjvcxz">`}
      </div>`;
  })}</div>
</section>`;
});
export {
  Page as default
};
