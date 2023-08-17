import { c as create_ssr_component, b as each, e as escape, h as add_attribute } from "../../../../chunks/index2.js";
import "../../../../chunks/functions.js";
/* empty css                                                          */const Modal_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-15u6qx6.svelte-15u6qx6{font-size:3rem}h2.svelte-15u6qx6.svelte-15u6qx6{font-size:2.7rem}p.svelte-15u6qx6.svelte-15u6qx6{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-15u6qx6.svelte-15u6qx6{font-size:1.05rem !important}h1.svelte-15u6qx6.svelte-15u6qx6{font-size:2.5rem !important}h2.svelte-15u6qx6.svelte-15u6qx6{font-size:2rem !important}}.svelte-15u6qx6.svelte-15u6qx6::-webkit-scrollbar{width:8px;height:8px}.svelte-15u6qx6.svelte-15u6qx6::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-15u6qx6.svelte-15u6qx6::-webkit-scrollbar-thumb{background-color:#575757}.svelte-15u6qx6.svelte-15u6qx6::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-15u6qx6.svelte-15u6qx6::-webkit-scrollbar-corner,.svelte-15u6qx6.svelte-15u6qx6::-webkit-scrollbar-track{background-color:none}section.svelte-15u6qx6.svelte-15u6qx6{margin-bottom:8em}.mc-c-gallery.svelte-15u6qx6.svelte-15u6qx6{display:flex;flex:1;flex-wrap:wrap;justify-content:flex-start;width:100%;gap:1em}.mc-c-gallery--container.svelte-15u6qx6.svelte-15u6qx6{flex:1 1 auto;flex-grow:1;height:40vh;text-align:center}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-15u6qx6.svelte-15u6qx6{height:30vh}}.mc-c-gallery--container.svelte-15u6qx6 p.svelte-15u6qx6{color:#FFFFFF;font-size:1.3rem;margin:0;z-index:10;position:relative;top:50%;transform:translateY(-50%);opacity:0;transition:opacity 0.25s;height:0}.mc-c-gallery--container.svelte-15u6qx6.svelte-15u6qx6:hover{cursor:pointer}.mc-c-gallery--container.svelte-15u6qx6:hover p.svelte-15u6qx6{opacity:1}.mc-c-gallery--container.svelte-15u6qx6:hover img.svelte-15u6qx6{opacity:0.4}.mc-c-gallery--container.svelte-15u6qx6 img.svelte-15u6qx6{border-radius:10px;max-height:100%;width:100%;min-width:50%;object-fit:cover;object-position:top;transition:opacity 0.25s;position:relative}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-15u6qx6 img.svelte-15u6qx6{height:30vh;min-width:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xfty9t_START -->${$$result.title = `<title>Playground | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1xfty9t_END -->`, ""}

<h1 class="svelte-15u6qx6">Playground</h1>
<section class="svelte-15u6qx6"><h2 class="svelte-15u6qx6">Fanart</h2>
  <p class="svelte-15u6qx6">Paying homage to some of my favorite works in pop culture.</p>
  <div class="mc-c-gallery svelte-15u6qx6">${each(data.fanart, (image) => {
    return `<div class="mc-c-gallery--container svelte-15u6qx6">${!image.error ? `<p class="svelte-15u6qx6">${escape(image.title)}</p>
          <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-15u6qx6">` : `<img${add_attribute("src", image.url, 0)} alt="fanart" class="svelte-15u6qx6">`}
      </div>`;
  })}</div>
</section>`;
});
export {
  Page as default
};
