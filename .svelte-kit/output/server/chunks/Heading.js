import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                  */const ColorLink_svelte_svelte_type_style_lang = "";
const Heading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".heading.svelte-m8pjs8.svelte-m8pjs8{margin-block-start:2em;margin-bottom:2em;display:flex;flex-wrap:wrap;align-items:center;column-gap:3em;row-gap:1em}.heading.svelte-m8pjs8 h2.svelte-m8pjs8{margin:0}.heading.svelte-m8pjs8 .emoji.svelte-m8pjs8{display:inline-block;background:none;animation:svelte-m8pjs8-infiniteFloating 2.5s ease-in-out infinite}@keyframes svelte-m8pjs8-infiniteFloating{0%{transform:scale(1.1);transform:rotate(-5deg) translateY(3px)}50%{transform:scale(1);transform:translateY(-3px) rotate(5deg)}100%{transform:rotate(-5deg) translateY(3px)}}",
  map: null
};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { emoji } = $$props;
  let { headingText } = $$props;
  let { hasLink } = $$props;
  if ($$props.emoji === void 0 && $$bindings.emoji && emoji !== void 0)
    $$bindings.emoji(emoji);
  if ($$props.headingText === void 0 && $$bindings.headingText && headingText !== void 0)
    $$bindings.headingText(headingText);
  if ($$props.hasLink === void 0 && $$bindings.hasLink && hasLink !== void 0)
    $$bindings.hasLink(hasLink);
  $$result.css.add(css);
  return `<div class="heading svelte-m8pjs8"><h2 class="svelte-m8pjs8">${escape(headingText)} <span class="emoji svelte-m8pjs8">${escape(emoji)}</span></h2> ${hasLink ? `${slots.default ? slots.default({}) : ``}` : ``} </div>`;
});
export {
  Heading as H
};
