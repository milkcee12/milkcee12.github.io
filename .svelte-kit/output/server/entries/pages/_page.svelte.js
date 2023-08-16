import { c as create_ssr_component, e as escape, f as null_to_empty, h as add_attribute, v as validate_component, b as each } from "../../chunks/index2.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/Footer.js";
const ArrowLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".color-tech.svelte-1vsvwu9.svelte-1vsvwu9{color:#FF3062}.color-art.svelte-1vsvwu9.svelte-1vsvwu9{color:#12E599}.color-muted.svelte-1vsvwu9.svelte-1vsvwu9{color:#C3C3C3}.color-light.svelte-1vsvwu9.svelte-1vsvwu9{color:#FFFFFF}.color-dark.svelte-1vsvwu9.svelte-1vsvwu9{color:#090A0D}p.svelte-1vsvwu9.svelte-1vsvwu9,p.svelte-1vsvwu9 a.svelte-1vsvwu9{font-size:1.15rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-1vsvwu9.svelte-1vsvwu9,p.svelte-1vsvwu9 a.svelte-1vsvwu9{font-size:1.05rem !important}}.svelte-1vsvwu9.svelte-1vsvwu9::-webkit-scrollbar,.svelte-1vsvwu9.svelte-1vsvwu9::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1vsvwu9.svelte-1vsvwu9::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-arrow-link.svelte-1vsvwu9 a.svelte-1vsvwu9{display:flex;align-items:center}",
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
  $$result.css.add(css$2);
  return `<p class="mc-c-arrow-link svelte-1vsvwu9"><a class="${escape(null_to_empty(`color-${color}`), true) + " svelte-1vsvwu9"}"${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : "", 0)}>${escape(name)}
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
  code: `.color-tech.svelte-11b7yqt.svelte-11b7yqt{color:#FF3062}.color-art.svelte-11b7yqt.svelte-11b7yqt{color:#12E599}.color-muted.svelte-11b7yqt.svelte-11b7yqt{color:#C3C3C3}.color-light.svelte-11b7yqt.svelte-11b7yqt{color:#FFFFFF}.color-dark.svelte-11b7yqt.svelte-11b7yqt{color:#090A0D}h3.svelte-11b7yqt.svelte-11b7yqt{font-size:1.6rem}p.svelte-11b7yqt.svelte-11b7yqt,li.svelte-11b7yqt.svelte-11b7yqt,li.svelte-11b7yqt.svelte-11b7yqt{font-size:1.15rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-11b7yqt.svelte-11b7yqt,li.svelte-11b7yqt.svelte-11b7yqt{font-size:1.05rem !important}h3.svelte-11b7yqt.svelte-11b7yqt{font-size:1.3rem !important}}.svelte-11b7yqt.svelte-11b7yqt::-webkit-scrollbar,.svelte-11b7yqt.svelte-11b7yqt::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-11b7yqt.svelte-11b7yqt::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-timeblock__col--tags.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock__col--content.svelte-11b7yqt.svelte-11b7yqt{flex:1;padding-bottom:5em;display:flex;align-items:center}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock__col--content.svelte-11b7yqt.svelte-11b7yqt{justify-content:flex-start}}.nofill.svelte-11b7yqt.svelte-11b7yqt{height:0 !important;display:none !important}.nofill.svelte-11b7yqt .svelte-11b7yqt::after{display:none !important}.mc-c-timeblock.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock.--odd.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock.--even.svelte-11b7yqt.svelte-11b7yqt{display:flex}@media(max-width: 768px){.mc-c-timeblock.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock.--odd.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock.--even.svelte-11b7yqt.svelte-11b7yqt{margin:0}}@media(max-width: 576px){.mc-c-timeblock.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock.--odd.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock.--even.svelte-11b7yqt.svelte-11b7yqt{flex-direction:row;margin:0 0 0 0.5em}}@media(max-width: 576px){.mc-c-timeblock__col--content.svelte-11b7yqt.svelte-11b7yqt{flex:3;font-size:0.8rem;margin-top:0.3em}}.--even.svelte-11b7yqt .mc-c-timeblock__col--content.svelte-11b7yqt{order:2}.--even.svelte-11b7yqt .mc-c-timeblock__col--content.svelte-11b7yqt::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}@media(max-width: 576px){.--even.svelte-11b7yqt .mc-c-timeblock__col--content.svelte-11b7yqt::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.--odd.svelte-11b7yqt .mc-c-timeblock__col--content.svelte-11b7yqt::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}@media(max-width: 576px){.--odd.svelte-11b7yqt .mc-c-timeblock__col--content.svelte-11b7yqt::after{content:none}}@media(max-width: 576px){.--odd.svelte-11b7yqt .mc-c-timeblock__col--content.svelte-11b7yqt::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.mc-c-timeblock__col--content__bubble.svelte-11b7yqt.svelte-11b7yqt{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.mc-c-timeblock__col--content__bubble.svelte-11b7yqt p.svelte-11b7yqt{color:#C3C3C3}.mc-c-timeblock__col--content__bubble__date.svelte-11b7yqt.svelte-11b7yqt{margin-top:0.3em}.mc-c-timeblock__col--content__bubble__title.svelte-11b7yqt.svelte-11b7yqt{margin-bottom:0.3em}@media(max-width: 576px){.mc-c-timeblock__col--content__bubble__title.svelte-11b7yqt.svelte-11b7yqt{font-size:1.1rem}}.mc-c-timeblock.--even.svelte-11b7yqt .mc-c-timeblock__col--tags.svelte-11b7yqt{order:0;justify-content:flex-end}.mc-c-timeblock__col--tags.svelte-11b7yqt.svelte-11b7yqt{align-self:center;margin-bottom:6em}@media(max-width: 768px){.mc-c-timeblock__col--tags.svelte-11b7yqt.svelte-11b7yqt{margin-bottom:7em}}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-11b7yqt.svelte-11b7yqt{display:none}}.mc-c-timeblock__col--tags.svelte-11b7yqt ul.svelte-11b7yqt{display:flex;flex-flow:column;padding:0}.mc-c-timeblock__col--tags.svelte-11b7yqt li.svelte-11b7yqt{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.mc-c-timeblock__col--tags.svelte-11b7yqt .tag-tech.svelte-11b7yqt{border-color:#FF3062}.mc-c-timeblock__col--tags.svelte-11b7yqt .tag-art.svelte-11b7yqt{border-color:#12E599}.mc-c-timeblock.--even.svelte-11b7yqt .mc-c-timeblock__vl.svelte-11b7yqt{order:1}.mc-c-timeblock__vl.svelte-11b7yqt.svelte-11b7yqt{display:grid;flex:0 1 auto;margin:0 5em}@media(max-width: 992px){.mc-c-timeblock__vl.svelte-11b7yqt.svelte-11b7yqt{margin:0 4em}}@media(max-width: 768px){.mc-c-timeblock__vl.svelte-11b7yqt.svelte-11b7yqt{margin:0 3em}}@media(max-width: 576px){.mc-c-timeblock__vl.svelte-11b7yqt.svelte-11b7yqt{order:-1;margin:0 2em 0 0}}.mc-c-timeblock__vl--empty.svelte-11b7yqt.svelte-11b7yqt,.mc-c-timeblock__vl--fill.svelte-11b7yqt.svelte-11b7yqt{grid-column-start:1;grid-row-start:1}.mc-c-timeblock__vl--fill.svelte-11b7yqt.svelte-11b7yqt{display:none}.mc-c-timeblock__vl--empty.svelte-11b7yqt.svelte-11b7yqt{background-color:#FFFFFF;width:3px}.mc-c-timeblock__vl--empty.svelte-11b7yqt.svelte-11b7yqt::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.mc-c-timeblock.svelte-11b7yqt:first-child .mc-c-timeblock__vl.svelte-11b7yqt{margin-top:3em}.mc-c-timeblock.svelte-11b7yqt:first-child .mc-c-timeblock__vl--empty.svelte-11b7yqt::before{margin-top:0}.mc-c-timeblock.svelte-11b7yqt:first-child .mc-c-timeblock__vl--fill.svelte-11b7yqt{display:block;position:absolute;height:0;background-color:#12E599;width:3px;z-index:9;transition:height 0.1s ease}.mc-c-timeblock.svelte-11b7yqt:first-child .mc-c-timeblock__vl--fill.svelte-11b7yqt::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="%2312E599" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;z-index:10;text-align:center;right:1em;top:calc(100% - 2em)}.mc-c-timeblock.svelte-11b7yqt:last-child .mc-c-timeblock__vl--empty.svelte-11b7yqt{display:flex;flex-direction:column;justify-content:space-between}.mc-c-timeblock.svelte-11b7yqt:last-child .mc-c-timeblock__vl--empty.svelte-11b7yqt::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');width:32px;height:32px;position:relative;text-align:center;right:1em}`,
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

<div class="${escape(null_to_empty(`mc-c-timeblock --${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-11b7yqt"}"><div class="mc-c-timeblock__col--content svelte-11b7yqt"><div class="mc-c-timeblock__col--content__bubble svelte-11b7yqt"><h3 class="mc-c-timeblock__col--content__bubble_title svelte-11b7yqt">${escape(project.title)}</h3>
      <p class="mc-c-timeblock__col--content__bubble_date svelte-11b7yqt">${escape(!project.end_yr ? `${project.start_yr} - Present` : project.end_yr == project.start_yr ? `${project.end_yr}` : `${project.start_yr} - ${project.end_yr}`)}</p>
      <p class="mc-c-timeblock__col--content__bubble_blurb svelte-11b7yqt">${escape(project.blurb)}</p>
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
  <div class="mc-c-timeblock__vl svelte-11b7yqt"><div class="mc-c-timeblock__vl--empty svelte-11b7yqt"${add_attribute("this", vLine, 0)}></div>
    <div class="mc-c-timeblock__vl--fill svelte-11b7yqt"${add_attribute("this", vFill, 0)}></div></div>
  <div class="mc-c-timeblock__col--tags svelte-11b7yqt"><div class="tags svelte-11b7yqt"><ul class="svelte-11b7yqt">${each(project.tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-11b7yqt"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure.754e2dd3.webp";
const heroSig = "/_app/immutable/assets/hero-signature.147470d3.webp";
const aboutProfile = "/_app/immutable/assets/about-profile-1.ffd31c60.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-6pgivz.svelte-6pgivz{color:#FF3062}.color-art.svelte-6pgivz.svelte-6pgivz{color:#12E599}.color-light.svelte-6pgivz.svelte-6pgivz{color:#FFFFFF}h2.svelte-6pgivz.svelte-6pgivz{font-size:2.7rem}p.svelte-6pgivz.svelte-6pgivz{font-size:1.15rem;color:#C3C3C3}@media(max-width: 992px){p.svelte-6pgivz.svelte-6pgivz{font-size:1.05rem !important}h2.svelte-6pgivz.svelte-6pgivz{font-size:2rem !important}}.svelte-6pgivz.svelte-6pgivz::-webkit-scrollbar,.svelte-6pgivz.svelte-6pgivz::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-6pgivz.svelte-6pgivz::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-hero.svelte-6pgivz.svelte-6pgivz{width:100%;height:100vh;overflow-x:hidden;display:flex}.mc-c-hero__block--right.svelte-6pgivz.svelte-6pgivz,.mc-c-hero__block--left.svelte-6pgivz.svelte-6pgivz{flex:1}.mc-c-hero__block--right.svelte-6pgivz.svelte-6pgivz{background-color:#12E599}.mc-c-hero__img--figure.svelte-6pgivz.svelte-6pgivz,.mc-c-hero__img--sig.svelte-6pgivz.svelte-6pgivz{position:absolute;pointer-events:none}.mc-c-hero__img--sig.svelte-6pgivz.svelte-6pgivz{height:110vh;top:-10vh;left:calc(50% - 59vh)}@media(max-width: 768px) and (orientation: portrait){.mc-c-hero__img--sig.svelte-6pgivz.svelte-6pgivz{height:80vh;left:calc(50% - 45vh)}}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--sig.svelte-6pgivz.svelte-6pgivz{height:100vh;left:calc(50% - 55vh)}}.mc-c-hero__img--figure.svelte-6pgivz.svelte-6pgivz{height:102vh;top:2em;left:calc(50% - 30vh)}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--figure.svelte-6pgivz.svelte-6pgivz{left:calc(50% - 30vh)}}.mc-c-hero__explore.svelte-6pgivz.svelte-6pgivz{position:absolute;display:flex;align-items:center;margin-top:calc(100vh - 130px);transform:rotate(90deg)}.mc-c-hero__explore.svelte-6pgivz p.svelte-6pgivz{flex-grow:0;padding-right:1em}.mc-c-hero__explore__line.svelte-6pgivz.svelte-6pgivz{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.mc-c-title.svelte-6pgivz.svelte-6pgivz{display:flex;align-items:center}.mc-c-title.svelte-6pgivz h2.svelte-6pgivz{flex-grow:0;padding-right:1em;color:#FFFFFF}.mc-l-container.svelte-6pgivz.svelte-6pgivz{margin-top:8em}@media(max-width: 992px){.mc-l-container.svelte-6pgivz.svelte-6pgivz{margin:3em 2em 0}}.mc-l-container.svelte-6pgivz section.svelte-6pgivz{margin-bottom:8em}.mc-l-timeline.svelte-6pgivz.svelte-6pgivz{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 1600px){.mc-l-timeline.svelte-6pgivz.svelte-6pgivz{width:80%}}@media(max-width: 1200px){.mc-l-timeline.svelte-6pgivz.svelte-6pgivz{width:90%}}@media(max-width: 992px){.mc-l-timeline.svelte-6pgivz.svelte-6pgivz{width:100%;margin-top:1em}}.mc-l-about.svelte-6pgivz.svelte-6pgivz{display:flex;column-gap:10em}@media(max-width: 1200px){.mc-l-about.svelte-6pgivz.svelte-6pgivz{column-gap:7em}}@media(max-width: 992px){.mc-l-about.svelte-6pgivz.svelte-6pgivz{column-gap:5em}}@media(max-width: 768px){.mc-l-about.svelte-6pgivz.svelte-6pgivz{flex-wrap:wrap;row-gap:3em}}.mc-c-about__blurb.svelte-6pgivz.svelte-6pgivz{flex:3;color:#C3C3C3}@media(max-width: 768px){.mc-c-about__blurb.svelte-6pgivz.svelte-6pgivz{flex:1 0 100%}}.mc-c-about__blurb__social-links.svelte-6pgivz.svelte-6pgivz{display:flex}.mc-c-about__profile.svelte-6pgivz.svelte-6pgivz{flex:2;text-align:center}@media(max-width: 768px){.mc-c-about__profile.svelte-6pgivz.svelte-6pgivz{flex:1 0 100%}}.mc-c-about__profile__img.svelte-6pgivz.svelte-6pgivz{width:80%;border-radius:25px}@media(max-width: 1200px){.mc-c-about__profile__img.svelte-6pgivz.svelte-6pgivz{width:90%}}@media(max-width: 992px){.mc-c-about__profile__img.svelte-6pgivz.svelte-6pgivz{width:100%}}@media(max-width: 768px){.mc-c-about__profile__img.svelte-6pgivz.svelte-6pgivz{width:60%}}@media(max-width: 576px){.mc-c-about__profile__img.svelte-6pgivz.svelte-6pgivz{width:80%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let timeline, timelineHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1pqj0d0_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1pqj0d0_END -->`, ""}



<section class="mc-c-hero svelte-6pgivz"><div class="mc-c-hero__block--left svelte-6pgivz"></div>
  <div class="mc-c-hero__block--right svelte-6pgivz"></div>
  <img class="mc-c-hero__img--sig svelte-6pgivz"${add_attribute("src", heroSig, 0)} alt="Hero section signature">
  <img class="mc-c-hero__img--figure svelte-6pgivz"${add_attribute("src", heroFigure, 0)} alt="Hero section figure">
  <div class="mc-c-hero__explore svelte-6pgivz"><p class="svelte-6pgivz">Explore</p>
    <div class="mc-c-hero__explore__line svelte-6pgivz"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="mc-l-container svelte-6pgivz"><section class="svelte-6pgivz"><div class="mc-c-title svelte-6pgivz"><h2 class="svelte-6pgivz">Featured Work</h2>
      ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "/work",
      color: "art",
      name: "See all",
      newTab: false
    },
    {},
    {}
  )}</div>
    <div class="mc-l-timeline svelte-6pgivz"${add_attribute("this", timeline, 0)}>${each(Object.keys(data), (idx) => {
    return `${validate_component(TimeBlock, "TimeBlock").$$render(
      $$result,
      {
        id: idx,
        project: data[idx],
        timelineHeight
      },
      {},
      {}
    )}`;
  })}</div></section>

  <section class="svelte-6pgivz"><div class="mc-l-about svelte-6pgivz"><div class="mc-c-about__blurb svelte-6pgivz"><div class="mc-c-title svelte-6pgivz"><h2 class="svelte-6pgivz">Hello World 👋</h2>
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
        <div class="mc-c-about__blurb__desc svelte-6pgivz"><p class="svelte-6pgivz">Hi there! I&#39;m Michaela or Milkcee, depending on where you found me
            from. I&#39;m a software engineer and illustrator. I read a lot of manga
            and I like to talk about drawing my own comics, but I&#39;ve only made a
            handful of them.
          </p>
          <p class="svelte-6pgivz">I&#39;m a junior studying <span class="color-tech svelte-6pgivz"><b class="svelte-6pgivz">Computer Science</b></span>
            at
            <span class="color-light svelte-6pgivz"><b class="svelte-6pgivz">University of Southern California</b></span>
            with a minor in <span class="color-art svelte-6pgivz"><b class="svelte-6pgivz">3-D Animation</b></span>.
            For some reason, I also own a lot of cow-themed merch.
          </p></div>
        <div class="mc-c-about__blurb__social-links svelte-6pgivz">${validate_component(ArrowLink, "ArrowLink").$$render(
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
      
      <div class="mc-c-about__profile svelte-6pgivz"><img class="mc-c-about__profile__img svelte-6pgivz"${add_attribute("src", aboutProfile, 0)} alt="About section face profile"></div></div></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
