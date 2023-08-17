import { c as create_ssr_component, b as each, h as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "../../../../chunks/functions.js";
/* empty css                                                          */const Modal_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1by3qu5.svelte-1by3qu5{font-size:3rem}h2.svelte-1by3qu5.svelte-1by3qu5{font-size:2.7rem}p.svelte-1by3qu5.svelte-1by3qu5{font-size:1.15rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-1by3qu5.svelte-1by3qu5{font-size:1.05rem !important}h1.svelte-1by3qu5.svelte-1by3qu5{font-size:2.5rem !important}h2.svelte-1by3qu5.svelte-1by3qu5{font-size:2rem !important}}.svelte-1by3qu5.svelte-1by3qu5::-webkit-scrollbar,.svelte-1by3qu5.svelte-1by3qu5::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1by3qu5.svelte-1by3qu5::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.svelte-1by3qu5.svelte-1by3qu5{margin-bottom:8em}.mc-c-gallery.svelte-1by3qu5.svelte-1by3qu5{display:flex;flex:1;flex-wrap:wrap;justify-content:flex-start;width:100%;gap:1em}.mc-c-gallery--container.svelte-1by3qu5.svelte-1by3qu5{flex:1 1 auto;flex-grow:1;height:40vh}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-1by3qu5.svelte-1by3qu5{height:30vh}}.mc-c-gallery--container.svelte-1by3qu5.svelte-1by3qu5:hover{cursor:pointer}.mc-c-gallery--container.svelte-1by3qu5 img.svelte-1by3qu5{border-radius:10px;max-height:100%;width:100%;min-width:50%;object-fit:cover;object-position:top}@media(max-aspect-ratio: 1/1){.mc-c-gallery--container.svelte-1by3qu5 img.svelte-1by3qu5{height:30vh;min-width:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xfty9t_START -->${$$result.title = `<title>Playground | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1xfty9t_END -->`, ""}

<h1 class="svelte-1by3qu5">Playground</h1>
<section class="svelte-1by3qu5"><h2 class="svelte-1by3qu5">Fanart</h2>
  <div class="mc-c-gallery svelte-1by3qu5">${each(data.fanart, (image) => {
    return `<div class="mc-c-gallery--container svelte-1by3qu5">${!image.error ? `<img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-1by3qu5">
          <p class="svelte-1by3qu5">${escape(image.title)}</p>` : `<img${add_attribute("src", image.url, 0)} alt="fanart" class="svelte-1by3qu5">`}
      </div>`;
  })}</div>
</section>`;
});
export {
  Page as default
};
