import { c as create_ssr_component, e as escape, f as null_to_empty, h as add_attribute, v as validate_component, b as each } from "../../chunks/index2.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/Footer.js";
/* empty css                                                    */const css$2 = {
  code: ".color-tech.svelte-1bfkvqw.svelte-1bfkvqw{color:#FF3062}.color-art.svelte-1bfkvqw.svelte-1bfkvqw{color:#12E599}.color-muted.svelte-1bfkvqw.svelte-1bfkvqw{color:#C3C3C3}.color-light.svelte-1bfkvqw.svelte-1bfkvqw{color:#FFFFFF}.color-dark.svelte-1bfkvqw.svelte-1bfkvqw{color:#090A0D}p.svelte-1bfkvqw.svelte-1bfkvqw,p.svelte-1bfkvqw a.svelte-1bfkvqw{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-1bfkvqw.svelte-1bfkvqw,p.svelte-1bfkvqw a.svelte-1bfkvqw{font-size:1.05rem !important}}.svelte-1bfkvqw.svelte-1bfkvqw::-webkit-scrollbar{width:8px;height:8px}.svelte-1bfkvqw.svelte-1bfkvqw::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-1bfkvqw.svelte-1bfkvqw::-webkit-scrollbar-thumb{background-color:#575757}.svelte-1bfkvqw.svelte-1bfkvqw::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-1bfkvqw.svelte-1bfkvqw::-webkit-scrollbar-corner,.svelte-1bfkvqw.svelte-1bfkvqw::-webkit-scrollbar-track{background-color:none}.mc-c-arrow-link.svelte-1bfkvqw.svelte-1bfkvqw{display:flex}.mc-c-arrow-link.svelte-1bfkvqw a.svelte-1bfkvqw{width:fit-content;display:flex;align-items:center}.mc-c-arrow-link.align-right.svelte-1bfkvqw.svelte-1bfkvqw{justify-content:flex-end}",
  map: null
};
const ArrowLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "#", name, color, arrowColor = false, newTab = false, alignRight = false } = $$props;
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
  if ($$props.alignRight === void 0 && $$bindings.alignRight && alignRight !== void 0)
    $$bindings.alignRight(alignRight);
  $$result.css.add(css$2);
  return `<p class="${escape(null_to_empty(`mc-c-arrow-link ${alignRight ? "align-right" : ""}`), true) + " svelte-1bfkvqw"}"><a class="${escape(null_to_empty(`color-${color}`), true) + " svelte-1bfkvqw"}"${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : "", 0)}>${escape(name)}
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
const TimeBlock_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.color-tech.svelte-1flgr28.svelte-1flgr28{color:#FF3062}.color-art.svelte-1flgr28.svelte-1flgr28{color:#12E599}.color-muted.svelte-1flgr28.svelte-1flgr28{color:#C3C3C3}.color-light.svelte-1flgr28.svelte-1flgr28{color:#FFFFFF}.color-dark.svelte-1flgr28.svelte-1flgr28{color:#090A0D}h3.svelte-1flgr28.svelte-1flgr28{font-size:1.6rem}p.svelte-1flgr28.svelte-1flgr28,li.svelte-1flgr28.svelte-1flgr28,li.svelte-1flgr28.svelte-1flgr28{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-1flgr28.svelte-1flgr28,li.svelte-1flgr28.svelte-1flgr28{font-size:1.05rem !important}h3.svelte-1flgr28.svelte-1flgr28{font-size:1.3rem !important}}.svelte-1flgr28.svelte-1flgr28::-webkit-scrollbar{width:8px;height:8px}.svelte-1flgr28.svelte-1flgr28::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-1flgr28.svelte-1flgr28::-webkit-scrollbar-thumb{background-color:#575757}.svelte-1flgr28.svelte-1flgr28::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-1flgr28.svelte-1flgr28::-webkit-scrollbar-corner,.svelte-1flgr28.svelte-1flgr28::-webkit-scrollbar-track{background-color:none}.mc-c-timeblock__col--tags.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock__col--content.svelte-1flgr28.svelte-1flgr28{flex:1;padding-bottom:5em;display:flex;align-items:center}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock__col--content.svelte-1flgr28.svelte-1flgr28{justify-content:flex-start}}.nofill.svelte-1flgr28.svelte-1flgr28{height:0 !important;display:none !important}.nofill.svelte-1flgr28 .svelte-1flgr28::after{display:none !important}.mc-c-timeblock.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock.--odd.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock.--even.svelte-1flgr28.svelte-1flgr28{display:flex}@media(max-width: 768px){.mc-c-timeblock.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock.--odd.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock.--even.svelte-1flgr28.svelte-1flgr28{margin:0}}@media(max-width: 576px){.mc-c-timeblock.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock.--odd.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock.--even.svelte-1flgr28.svelte-1flgr28{flex-direction:row;margin:0 0 0 0.5em}}@media(max-width: 576px){.mc-c-timeblock__col--content.svelte-1flgr28.svelte-1flgr28{flex:3;font-size:0.8rem;margin-top:0.3em}}.--even.svelte-1flgr28 .mc-c-timeblock__col--content.svelte-1flgr28{order:2}.--even.svelte-1flgr28 .mc-c-timeblock__col--content.svelte-1flgr28::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}@media(max-width: 576px){.--even.svelte-1flgr28 .mc-c-timeblock__col--content.svelte-1flgr28::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.--odd.svelte-1flgr28 .mc-c-timeblock__col--content.svelte-1flgr28::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}@media(max-width: 576px){.--odd.svelte-1flgr28 .mc-c-timeblock__col--content.svelte-1flgr28::after{content:none}}@media(max-width: 576px){.--odd.svelte-1flgr28 .mc-c-timeblock__col--content.svelte-1flgr28::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.mc-c-timeblock__col--content__bubble.svelte-1flgr28.svelte-1flgr28{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.mc-c-timeblock__col--content__bubble.svelte-1flgr28 p.svelte-1flgr28{color:#C3C3C3}.mc-c-timeblock__col--content__bubble__date.svelte-1flgr28.svelte-1flgr28{margin-top:0.3em}.mc-c-timeblock__col--content__bubble__title.svelte-1flgr28.svelte-1flgr28{margin-bottom:0.3em}@media(max-width: 576px){.mc-c-timeblock__col--content__bubble__title.svelte-1flgr28.svelte-1flgr28{font-size:1.1rem}}.mc-c-timeblock.--even.svelte-1flgr28 .mc-c-timeblock__col--tags.svelte-1flgr28{order:0;justify-content:flex-end}.mc-c-timeblock__col--tags.svelte-1flgr28.svelte-1flgr28{align-self:center;margin-bottom:6em}@media(max-width: 768px){.mc-c-timeblock__col--tags.svelte-1flgr28.svelte-1flgr28{margin-bottom:7em}}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-1flgr28.svelte-1flgr28{display:none}}.mc-c-timeblock__col--tags.svelte-1flgr28 ul.svelte-1flgr28{display:flex;flex-flow:column;padding:0}.mc-c-timeblock__col--tags.svelte-1flgr28 li.svelte-1flgr28{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.mc-c-timeblock__col--tags.svelte-1flgr28 .tag-tech.svelte-1flgr28{border-color:#FF3062}.mc-c-timeblock__col--tags.svelte-1flgr28 .tag-art.svelte-1flgr28{border-color:#12E599}.mc-c-timeblock.--even.svelte-1flgr28 .mc-c-timeblock__vl.svelte-1flgr28{order:1}.mc-c-timeblock__vl.svelte-1flgr28.svelte-1flgr28{display:grid;flex:0 1 auto;margin:0 5em}@media(max-width: 992px){.mc-c-timeblock__vl.svelte-1flgr28.svelte-1flgr28{margin:0 4em}}@media(max-width: 768px){.mc-c-timeblock__vl.svelte-1flgr28.svelte-1flgr28{margin:0 3em}}@media(max-width: 576px){.mc-c-timeblock__vl.svelte-1flgr28.svelte-1flgr28{order:-1;margin:0 2em 0 0}}.mc-c-timeblock__vl--empty.svelte-1flgr28.svelte-1flgr28,.mc-c-timeblock__vl--fill.svelte-1flgr28.svelte-1flgr28{grid-column-start:1;grid-row-start:1}.mc-c-timeblock__vl--fill.svelte-1flgr28.svelte-1flgr28{display:none}.mc-c-timeblock__vl--empty.svelte-1flgr28.svelte-1flgr28{background-color:#FFFFFF;width:3px}.mc-c-timeblock__vl--empty.svelte-1flgr28.svelte-1flgr28::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.mc-c-timeblock.svelte-1flgr28:first-child .mc-c-timeblock__vl.svelte-1flgr28{margin-top:3em}.mc-c-timeblock.svelte-1flgr28:first-child .mc-c-timeblock__vl--empty.svelte-1flgr28::before{margin-top:0}.mc-c-timeblock.svelte-1flgr28:first-child .mc-c-timeblock__vl--fill.svelte-1flgr28{display:block;position:absolute;height:0;background-color:#12E599;width:3px;z-index:9;transition:height 0.1s ease}.mc-c-timeblock.svelte-1flgr28:first-child .mc-c-timeblock__vl--fill.svelte-1flgr28::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="%2312E599" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;z-index:10;text-align:center;right:1em;top:calc(100% - 2em)}.mc-c-timeblock.svelte-1flgr28:last-child .mc-c-timeblock__vl--empty.svelte-1flgr28{display:flex;flex-direction:column;justify-content:space-between}.mc-c-timeblock.svelte-1flgr28:last-child .mc-c-timeblock__vl--empty.svelte-1flgr28::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');width:32px;height:32px;position:relative;text-align:center;right:1em}`,
  map: null
};
const TimeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id, project, timelineHeight } = $$props;
  let vLine, vFill;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.timelineHeight === void 0 && $$bindings.timelineHeight && timelineHeight !== void 0)
    $$bindings.timelineHeight(timelineHeight);
  $$result.css.add(css$1);
  return `

<div class="${escape(null_to_empty(`mc-c-timeblock --${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-1flgr28"}"><div class="mc-c-timeblock__col--content svelte-1flgr28"><div class="mc-c-timeblock__col--content__bubble svelte-1flgr28"><h3 class="mc-c-timeblock__col--content__bubble_title svelte-1flgr28">${escape(project.title)}</h3>
      <p class="mc-c-timeblock__col--content__bubble_date svelte-1flgr28">${escape(!project.end_yr ? `${project.start_yr} - Present` : project.end_yr == project.start_yr ? `${project.end_yr}` : `${project.start_yr} - ${project.end_yr}`)}</p>
      <p class="mc-c-timeblock__col--content__bubble_blurb svelte-1flgr28">${escape(project.blurb)}</p>
      ${project.see_more ? `${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      color: project.project_type.name,
      href: project.url ? project.url : `#`,
      name: project.see_more,
      newTab: project.url ? true : false
    },
    {},
    {}
  )}` : ``}</div></div>
  <div class="mc-c-timeblock__vl svelte-1flgr28"><div class="mc-c-timeblock__vl--empty svelte-1flgr28"${add_attribute("this", vLine, 0)}></div>
    <div class="mc-c-timeblock__vl--fill svelte-1flgr28"${add_attribute("this", vFill, 0)}></div></div>
  <div class="mc-c-timeblock__col--tags svelte-1flgr28"><div class="tags svelte-1flgr28"><ul class="svelte-1flgr28">${each(project.tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-1flgr28"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure.754e2dd3.webp";
const heroSig = "/_app/immutable/assets/hero-signature.147470d3.webp";
const aboutProfile = "/_app/immutable/assets/about-profile-1.ffd31c60.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-4g75oi.svelte-4g75oi{color:#FF3062}.color-art.svelte-4g75oi.svelte-4g75oi{color:#12E599}.color-light.svelte-4g75oi.svelte-4g75oi{color:#FFFFFF}h2.svelte-4g75oi.svelte-4g75oi{font-size:2.7rem}p.svelte-4g75oi.svelte-4g75oi{font-size:1.1rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-4g75oi.svelte-4g75oi{font-size:1.05rem !important}h2.svelte-4g75oi.svelte-4g75oi{font-size:2rem !important}}.svelte-4g75oi.svelte-4g75oi::-webkit-scrollbar{width:8px;height:8px}.svelte-4g75oi.svelte-4g75oi::-webkit-scrollbar-track{background-clip:content-box;border:2px solid transparent}.svelte-4g75oi.svelte-4g75oi::-webkit-scrollbar-thumb{background-color:#575757}.svelte-4g75oi.svelte-4g75oi::-webkit-scrollbar-thumb:hover{background-color:#4e4e4e}.svelte-4g75oi.svelte-4g75oi::-webkit-scrollbar-corner,.svelte-4g75oi.svelte-4g75oi::-webkit-scrollbar-track{background-color:none}.mc-c-hero.svelte-4g75oi.svelte-4g75oi{width:100%;height:100vh;overflow-x:hidden;display:flex}.mc-c-hero__block--right.svelte-4g75oi.svelte-4g75oi,.mc-c-hero__block--left.svelte-4g75oi.svelte-4g75oi{flex:1}.mc-c-hero__block--right.svelte-4g75oi.svelte-4g75oi{background-color:#12E599}.mc-c-hero__img--figure.svelte-4g75oi.svelte-4g75oi,.mc-c-hero__img--sig.svelte-4g75oi.svelte-4g75oi{position:absolute;pointer-events:none}.mc-c-hero__img--sig.svelte-4g75oi.svelte-4g75oi{height:110vh;top:-10vh;left:calc(50% - 59vh)}@media(max-width: 768px) and (orientation: portrait){.mc-c-hero__img--sig.svelte-4g75oi.svelte-4g75oi{height:80vh;left:calc(50% - 45vh)}}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--sig.svelte-4g75oi.svelte-4g75oi{height:100vh;left:calc(50% - 55vh)}}.mc-c-hero__img--figure.svelte-4g75oi.svelte-4g75oi{height:102vh;top:2em;left:calc(50% - 30vh)}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--figure.svelte-4g75oi.svelte-4g75oi{left:calc(50% - 30vh)}}.mc-c-hero__explore.svelte-4g75oi.svelte-4g75oi{position:absolute;display:flex;align-items:center;margin-top:calc(100vh - 130px);transform:rotate(90deg)}.mc-c-hero__explore.svelte-4g75oi p.svelte-4g75oi{flex-grow:0;padding-right:1em}.mc-c-hero__explore__line.svelte-4g75oi.svelte-4g75oi{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.mc-c-title.svelte-4g75oi.svelte-4g75oi{display:flex;align-items:center}.mc-c-title.svelte-4g75oi h2.svelte-4g75oi{flex-grow:0;padding-right:1em;color:#FFFFFF}.mc-l-container.svelte-4g75oi.svelte-4g75oi{margin-top:8em}@media(max-width: 992px){.mc-l-container.svelte-4g75oi.svelte-4g75oi{margin:3em 2em 0}}.mc-l-container.svelte-4g75oi section.svelte-4g75oi{margin-bottom:8em}.mc-l-timeline.svelte-4g75oi.svelte-4g75oi{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 1600px){.mc-l-timeline.svelte-4g75oi.svelte-4g75oi{width:80%}}@media(max-width: 1200px){.mc-l-timeline.svelte-4g75oi.svelte-4g75oi{width:90%}}@media(max-width: 992px){.mc-l-timeline.svelte-4g75oi.svelte-4g75oi{width:100%;margin-top:1em}}.mc-l-about.svelte-4g75oi.svelte-4g75oi{display:flex;column-gap:10em}@media(max-width: 1200px){.mc-l-about.svelte-4g75oi.svelte-4g75oi{column-gap:7em}}@media(max-width: 992px){.mc-l-about.svelte-4g75oi.svelte-4g75oi{column-gap:5em}}@media(max-width: 768px){.mc-l-about.svelte-4g75oi.svelte-4g75oi{flex-wrap:wrap;row-gap:3em}}.mc-c-about__blurb.svelte-4g75oi.svelte-4g75oi{flex:3;color:#C3C3C3}@media(max-width: 768px){.mc-c-about__blurb.svelte-4g75oi.svelte-4g75oi{flex:1 0 100%}}.mc-c-about__blurb__social-links.svelte-4g75oi.svelte-4g75oi{display:flex}.mc-c-about__profile.svelte-4g75oi.svelte-4g75oi{flex:2;text-align:center}@media(max-width: 768px){.mc-c-about__profile.svelte-4g75oi.svelte-4g75oi{flex:1 0 100%}}.mc-c-about__profile__img.svelte-4g75oi.svelte-4g75oi{width:80%;border-radius:25px}@media(max-width: 1200px){.mc-c-about__profile__img.svelte-4g75oi.svelte-4g75oi{width:90%}}@media(max-width: 992px){.mc-c-about__profile__img.svelte-4g75oi.svelte-4g75oi{width:100%}}@media(max-width: 768px){.mc-c-about__profile__img.svelte-4g75oi.svelte-4g75oi{width:60%}}@media(max-width: 576px){.mc-c-about__profile__img.svelte-4g75oi.svelte-4g75oi{width:80%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let timeline, timelineHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1pqj0d0_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1pqj0d0_END -->`, ""}



<section class="mc-c-hero svelte-4g75oi"><div class="mc-c-hero__block--left svelte-4g75oi"></div>
  <div class="mc-c-hero__block--right svelte-4g75oi"></div>
  <img class="mc-c-hero__img--sig svelte-4g75oi"${add_attribute("src", heroSig, 0)} alt="Hero section signature">
  <img class="mc-c-hero__img--figure svelte-4g75oi"${add_attribute("src", heroFigure, 0)} alt="Hero section figure">
  <div class="mc-c-hero__explore svelte-4g75oi"><p class="svelte-4g75oi">Explore</p>
    <div class="mc-c-hero__explore__line svelte-4g75oi"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="mc-l-container svelte-4g75oi"><section class="svelte-4g75oi"><div class="mc-c-title svelte-4g75oi"><h2 class="svelte-4g75oi">Featured Work</h2>
      ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "/work",
      color: "art",
      name: "See all work",
      newTab: false
    },
    {},
    {}
  )}</div>
    ${data.error ? `<p class="svelte-4g75oi">Oops! there was an error loading featured work 😔. Please try again.</p>` : `<div class="mc-l-timeline svelte-4g75oi"${add_attribute("this", timeline, 0)}>${each(Object.keys(data.timeline), (key, i) => {
    return `${validate_component(TimeBlock, "TimeBlock").$$render(
      $$result,
      {
        id: i,
        project: data.timeline[key],
        timelineHeight
      },
      {},
      {}
    )}`;
  })}</div>`}</section>

  <section class="svelte-4g75oi"><div class="mc-l-about svelte-4g75oi"><div class="mc-c-about__blurb svelte-4g75oi"><div class="mc-c-title svelte-4g75oi"><h2 class="svelte-4g75oi">Hello World 👋</h2>
          ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "/about",
      color: "art",
      name: "More about me",
      newTab: false
    },
    {},
    {}
  )}</div>
        <div class="mc-c-about__blurb__desc svelte-4g75oi"><p class="svelte-4g75oi">Hi there! I&#39;m Michaela or Milkcee, depending on where you found me
            from. I&#39;m a software engineer and illustrator. I read a lot of manga
            and I like to talk about drawing my own comics, but I&#39;ve only made a
            handful of them.
          </p>
          <p class="svelte-4g75oi">I&#39;m a junior studying <span class="color-tech svelte-4g75oi"><b class="svelte-4g75oi">Computer Science</b></span>
            at
            <span class="color-light svelte-4g75oi"><b class="svelte-4g75oi">University of Southern California</b></span>
            with a minor in <span class="color-art svelte-4g75oi"><b class="svelte-4g75oi">3-D Animation</b></span>.
            For some reason, I also own a lot of cow-themed merch.
          </p></div>
        <div class="mc-c-about__blurb__social-links svelte-4g75oi">${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "https://github.com/milkcee12",
      color: "tech",
      name: "Github",
      arrowColor: "white",
      newTab: true
    },
    {},
    {}
  )}
          ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "https://instagram.com/milkcee12",
      color: "art",
      name: "Instagram",
      arrowColor: "white",
      newTab: true
    },
    {},
    {}
  )}
          ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "https://twitter.com/milkcee12",
      color: "art",
      name: "Twitter",
      arrowColor: "white",
      newTab: true
    },
    {},
    {}
  )}</div></div>
      
      <div class="mc-c-about__profile svelte-4g75oi"><img class="mc-c-about__profile__img svelte-4g75oi"${add_attribute("src", aboutProfile, 0)} alt="About section face profile"></div></div></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
