import { c as create_ssr_component, e as escape, i as null_to_empty, j as add_attribute, v as validate_component } from "./index.js";
import { I as Icon } from "./Icon.js";
const ArrowLink_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-cpzn7z.svelte-cpzn7z{color:#FF3062}.color-art.svelte-cpzn7z.svelte-cpzn7z{color:#12E599}.color-muted.svelte-cpzn7z.svelte-cpzn7z{color:#C3C3C3}.color-light.svelte-cpzn7z.svelte-cpzn7z{color:#FFFFFF}.color-dark.svelte-cpzn7z.svelte-cpzn7z{color:#090A0D}p.svelte-cpzn7z.svelte-cpzn7z,p.svelte-cpzn7z a.svelte-cpzn7z{font-size:1.15rem}@media(max-width: 992px){p.svelte-cpzn7z.svelte-cpzn7z,p.svelte-cpzn7z a.svelte-cpzn7z{font-size:1.05rem !important}}.svelte-cpzn7z.svelte-cpzn7z::-webkit-scrollbar,.svelte-cpzn7z.svelte-cpzn7z::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-cpzn7z.svelte-cpzn7z::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-arrow-link.svelte-cpzn7z a.svelte-cpzn7z{display:flex;align-items:center}",
  map: null
};
const ArrowLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href, name, color, arrowColor = false, newTab } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.arrowColor === void 0 && $$bindings.arrowColor && arrowColor !== void 0)
    $$bindings.arrowColor(arrowColor);
  if ($$props.newTab === void 0 && $$bindings.newTab && newTab !== void 0)
    $$bindings.newTab(newTab);
  $$result.css.add(css);
  return `<p class="${"mc-c-arrow-link svelte-cpzn7z"}"><a class="${escape(null_to_empty(`color-${color}`), true) + " svelte-cpzn7z"}"${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : "", 0)}>${escape(name)}
    ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "radix-icons:triangle-right",
      width: "20",
      height: "20",
      color: arrowColor ? arrowColor : color
    },
    {},
    {}
  )}</a>
</p>`;
});
export {
  ArrowLink as A
};
