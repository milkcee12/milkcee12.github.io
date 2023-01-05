import { c as create_ssr_component, e as escape, i as null_to_empty, j as add_attribute, v as validate_component, k as each } from "../../chunks/index.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/Footer.js";
const ArrowLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".color-tech.svelte-1su6xts.svelte-1su6xts{color:#FF3062}.color-art.svelte-1su6xts.svelte-1su6xts{color:#12E599}.color-muted.svelte-1su6xts.svelte-1su6xts{color:#C3C3C3}@media(max-width: 992px){p.svelte-1su6xts.svelte-1su6xts,p.svelte-1su6xts a.svelte-1su6xts{font-size:0.9rem}}.svelte-1su6xts.svelte-1su6xts::-webkit-scrollbar,.svelte-1su6xts.svelte-1su6xts::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1su6xts.svelte-1su6xts::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-arrow-link.svelte-1su6xts a.svelte-1su6xts{display:flex;align-items:center}",
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
  return `<p class="${"mc-c-arrow-link svelte-1su6xts"}"><a class="${escape(null_to_empty(`color-${color}`), true) + " svelte-1su6xts"}"${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : "", 0)}>${escape(name)} ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "radix-icons:triangle-right",
      width: "20",
      height: "20",
      color: arrowColor ? arrowColor : color
    },
    {},
    {}
  )}</a></p>`;
});
const TimeBlock_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.color-tech.svelte-12z0h6z.svelte-12z0h6z{color:#FF3062}.color-art.svelte-12z0h6z.svelte-12z0h6z{color:#12E599}.color-muted.svelte-12z0h6z.svelte-12z0h6z{color:#C3C3C3}@media(max-width: 992px){p.svelte-12z0h6z.svelte-12z0h6z,li.svelte-12z0h6z.svelte-12z0h6z{font-size:0.9rem}h3.svelte-12z0h6z.svelte-12z0h6z{font-size:1.3rem !important}}.svelte-12z0h6z.svelte-12z0h6z::-webkit-scrollbar,.svelte-12z0h6z.svelte-12z0h6z::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-12z0h6z.svelte-12z0h6z::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-timeblock__col--tags.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock__col--content.svelte-12z0h6z.svelte-12z0h6z{flex:1;padding-bottom:5em;display:flex;align-items:center}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock__col--content.svelte-12z0h6z.svelte-12z0h6z{justify-content:flex-start}}.nofill.svelte-12z0h6z.svelte-12z0h6z{height:0 !important;display:none !important}.nofill.svelte-12z0h6z .svelte-12z0h6z::after{display:none !important}.mc-c-timeblock.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock.--odd.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock.--even.svelte-12z0h6z.svelte-12z0h6z{display:flex}@media(max-width: 768px){.mc-c-timeblock.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock.--odd.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock.--even.svelte-12z0h6z.svelte-12z0h6z{margin:0}}@media(max-width: 576px){.mc-c-timeblock.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock.--odd.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock.--even.svelte-12z0h6z.svelte-12z0h6z{flex-direction:row;margin:0 0 0 0.5em}}@media(max-width: 576px){.mc-c-timeblock__col--content.svelte-12z0h6z.svelte-12z0h6z{flex:3;font-size:0.8rem;margin-top:0.3em}}.--even.svelte-12z0h6z .mc-c-timeblock__col--content.svelte-12z0h6z{order:2}.--even.svelte-12z0h6z .mc-c-timeblock__col--content.svelte-12z0h6z::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}@media(max-width: 576px){.--even.svelte-12z0h6z .mc-c-timeblock__col--content.svelte-12z0h6z::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.--odd.svelte-12z0h6z .mc-c-timeblock__col--content.svelte-12z0h6z::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}@media(max-width: 576px){.--odd.svelte-12z0h6z .mc-c-timeblock__col--content.svelte-12z0h6z::after{content:none}}@media(max-width: 576px){.--odd.svelte-12z0h6z .mc-c-timeblock__col--content.svelte-12z0h6z::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.mc-c-timeblock__col--content__bubble.svelte-12z0h6z.svelte-12z0h6z{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.mc-c-timeblock__col--content__bubble.svelte-12z0h6z p.svelte-12z0h6z{color:#C3C3C3}.mc-c-timeblock__col--content__bubble__date.svelte-12z0h6z.svelte-12z0h6z{margin-top:0.3em}.mc-c-timeblock__col--content__bubble__title.svelte-12z0h6z.svelte-12z0h6z{margin-bottom:0.3em}@media(max-width: 576px){.mc-c-timeblock__col--content__bubble__title.svelte-12z0h6z.svelte-12z0h6z{font-size:1.1rem}}.mc-c-timeblock.--even.svelte-12z0h6z .mc-c-timeblock__col--tags.svelte-12z0h6z{order:0;justify-content:flex-end}.mc-c-timeblock__col--tags.svelte-12z0h6z.svelte-12z0h6z{align-self:center;margin-bottom:6em}@media(max-width: 768px){.mc-c-timeblock__col--tags.svelte-12z0h6z.svelte-12z0h6z{margin-bottom:7em}}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-12z0h6z.svelte-12z0h6z{display:none}}.mc-c-timeblock__col--tags.svelte-12z0h6z ul.svelte-12z0h6z{display:flex;flex-flow:column;padding:0}.mc-c-timeblock__col--tags.svelte-12z0h6z li.svelte-12z0h6z{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.mc-c-timeblock__col--tags.svelte-12z0h6z .tag-tech.svelte-12z0h6z{border-color:#FF3062}.mc-c-timeblock__col--tags.svelte-12z0h6z .tag-art.svelte-12z0h6z{border-color:#12E599}.mc-c-timeblock.--even.svelte-12z0h6z .mc-c-timeblock__vl.svelte-12z0h6z{order:1}.mc-c-timeblock__vl.svelte-12z0h6z.svelte-12z0h6z{display:grid;flex:0 1 auto;margin:0 5em}@media(max-width: 992px){.mc-c-timeblock__vl.svelte-12z0h6z.svelte-12z0h6z{margin:0 4em}}@media(max-width: 768px){.mc-c-timeblock__vl.svelte-12z0h6z.svelte-12z0h6z{margin:0 3em}}@media(max-width: 576px){.mc-c-timeblock__vl.svelte-12z0h6z.svelte-12z0h6z{order:-1;margin:0 2em 0 0}}.mc-c-timeblock__vl--empty.svelte-12z0h6z.svelte-12z0h6z,.mc-c-timeblock__vl--fill.svelte-12z0h6z.svelte-12z0h6z{grid-column-start:1;grid-row-start:1}.mc-c-timeblock__vl--fill.svelte-12z0h6z.svelte-12z0h6z{display:none}.mc-c-timeblock__vl--empty.svelte-12z0h6z.svelte-12z0h6z{background-color:#FFFFFF;width:3px}.mc-c-timeblock__vl--empty.svelte-12z0h6z.svelte-12z0h6z::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.mc-c-timeblock.svelte-12z0h6z:first-child .mc-c-timeblock__vl.svelte-12z0h6z{margin-top:3em}.mc-c-timeblock.svelte-12z0h6z:first-child .mc-c-timeblock__vl--empty.svelte-12z0h6z::before{margin-top:0}.mc-c-timeblock.svelte-12z0h6z:first-child .mc-c-timeblock__vl--fill.svelte-12z0h6z{display:block;position:absolute;height:50px;background-color:#12E599;width:3px;z-index:9;transition:height 0.15s ease}.mc-c-timeblock.svelte-12z0h6z:first-child .mc-c-timeblock__vl--fill.svelte-12z0h6z::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="%2312E599" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;z-index:10;text-align:center;right:1em;top:calc(100% - 1.94em)}.mc-c-timeblock.svelte-12z0h6z:last-child .mc-c-timeblock__vl--empty.svelte-12z0h6z::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}`,
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

<div class="${escape(null_to_empty(`mc-c-timeblock --${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-12z0h6z"}"><div class="${"mc-c-timeblock__col--content svelte-12z0h6z"}"><div class="${"mc-c-timeblock__col--content__bubble svelte-12z0h6z"}"><h3 class="${"mc-c-timeblock__col--content__bubble_title svelte-12z0h6z"}">${escape(project.title)}</h3>
            <p class="${"mc-c-timeblock__col--content__bubble_date svelte-12z0h6z"}">${escape(project.end_yr === null ? `${project.start_yr} - Present` : project.end_yr == project.start_yr ? `project.end_yr` : `${project.start_yr} - ${project.end_yr}`)}</p>
            <p class="${"mc-c-timeblock__col--content__bubble_blurb svelte-12z0h6z"}">${escape(project.blurb)}</p>
            ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      color: project.project_type.name,
      href: project.url ? project.url : `#`,
      name: project.see_more,
      newTab: project.url ? true : false
    },
    {},
    {}
  )}</div></div>
    <div class="${"mc-c-timeblock__vl svelte-12z0h6z"}"${add_attribute("this", vLine, 0)}><div class="${"mc-c-timeblock__vl--empty svelte-12z0h6z"}"></div>
        <div class="${"mc-c-timeblock__vl--fill svelte-12z0h6z"}"${add_attribute("this", vFill, 0)}></div></div>
    <div class="${"mc-c-timeblock__col--tags svelte-12z0h6z"}"><div class="${"tags svelte-12z0h6z"}"><ul class="${"svelte-12z0h6z"}">${each(project.tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-12z0h6z"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 992px){p.svelte-1y2y4t5.svelte-1y2y4t5,p.svelte-1y2y4t5 a.svelte-1y2y4t5{font-size:0.9rem}h2.svelte-1y2y4t5.svelte-1y2y4t5{font-size:1.8rem !important}}.svelte-1y2y4t5.svelte-1y2y4t5::-webkit-scrollbar,.svelte-1y2y4t5.svelte-1y2y4t5::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1y2y4t5.svelte-1y2y4t5::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-hero.svelte-1y2y4t5.svelte-1y2y4t5{width:100%;height:100vh;overflow-x:hidden;display:flex}.mc-c-hero__block--right.svelte-1y2y4t5.svelte-1y2y4t5,.mc-c-hero__block--left.svelte-1y2y4t5.svelte-1y2y4t5{flex:1}.mc-c-hero__block--right.svelte-1y2y4t5.svelte-1y2y4t5{background-color:#12E599}.mc-c-hero__img--figure.svelte-1y2y4t5.svelte-1y2y4t5,.mc-c-hero__img--sig.svelte-1y2y4t5.svelte-1y2y4t5{position:absolute;pointer-events:none}.mc-c-hero__img--sig.svelte-1y2y4t5.svelte-1y2y4t5{height:110vh;left:calc(50% - 35em);top:-10em}@media(max-width: 768px) and (orientation: portrait){.mc-c-hero__img--sig.svelte-1y2y4t5.svelte-1y2y4t5{height:80vh;left:calc(50% - 20em);top:-2em}}.mc-c-hero__img--figure.svelte-1y2y4t5.svelte-1y2y4t5{height:102vh;top:2em;left:calc(50% - 19em)}@media(max-width: 768px) and (orientation: portrait){.mc-c-hero__img--figure.svelte-1y2y4t5.svelte-1y2y4t5{left:calc(50% - 16em)}}.mc-c-hero__explore.svelte-1y2y4t5.svelte-1y2y4t5{position:absolute;display:flex;align-items:center;margin-top:calc(100vh - 130px);transform:rotate(90deg)}.mc-c-hero__explore.svelte-1y2y4t5 p.svelte-1y2y4t5{flex-grow:0;padding-right:1em}.mc-c-hero__explore__line.svelte-1y2y4t5.svelte-1y2y4t5{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.mc-c-title.svelte-1y2y4t5.svelte-1y2y4t5{display:flex;align-items:center}.mc-c-title.svelte-1y2y4t5 h2.svelte-1y2y4t5{flex-grow:0;font-size:2.2rem;padding-right:1em}@media(max-width: 992px){.mc-l-container.svelte-1y2y4t5.svelte-1y2y4t5{margin:3em 2em 0}}.mc-l-container.svelte-1y2y4t5 section.svelte-1y2y4t5{margin-bottom:8em}.mc-l-timeline.svelte-1y2y4t5.svelte-1y2y4t5{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 1200px){.mc-l-timeline.svelte-1y2y4t5.svelte-1y2y4t5{width:90%}}@media(max-width: 992px){.mc-l-timeline.svelte-1y2y4t5.svelte-1y2y4t5{width:100%;margin-top:1em}}.mc-c-about__blurb.svelte-1y2y4t5.svelte-1y2y4t5{color:#C3C3C3}.mc-c-about__social-links.svelte-1y2y4t5.svelte-1y2y4t5{display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let timeline, timelineHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}



<section class="${"mc-c-hero svelte-1y2y4t5"}"><div class="${"mc-c-hero__block--left svelte-1y2y4t5"}"></div>
    <div class="${"mc-c-hero__block--right svelte-1y2y4t5"}"></div>
    <img class="${"mc-c-hero__img--sig svelte-1y2y4t5"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"mc-c-hero__img--figure svelte-1y2y4t5"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"mc-c-hero__explore svelte-1y2y4t5"}"><p class="${"svelte-1y2y4t5"}">Explore</p>
        <div class="${"mc-c-hero__explore__line svelte-1y2y4t5"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"mc-l-container svelte-1y2y4t5"}"><div class="${"mc-c-title svelte-1y2y4t5"}"><h2 class="${"svelte-1y2y4t5"}">Featured Work</h2>
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
    <section class="${"mc-l-timeline svelte-1y2y4t5"}"${add_attribute("this", timeline, 0)}>${each(Object.keys(data), (idx) => {
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
  })}</section>
    
    <section class="${"svelte-1y2y4t5"}"><div class="${"mc-c-title svelte-1y2y4t5"}"><h2 class="${"svelte-1y2y4t5"}">Playground</h2>
            ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "/playground",
      color: "art",
      name: "See all",
      newTab: false
    },
    {},
    {}
  )}</div>
        <p class="${"svelte-1y2y4t5"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1y2y4t5"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-1y2y4t5"}"><div class="${"mc-c-title svelte-1y2y4t5"}"><h2 class="${"svelte-1y2y4t5"}">Hello World \u{1F44B}</h2>
            </div>
        <div class="${"mc-c-about__blurb svelte-1y2y4t5"}"><p class="${"svelte-1y2y4t5"}">Hi, my name is Michaela. I also go by Milkcee on my art accounts.</p>
            <p class="${"svelte-1y2y4t5"}">I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]</p></div>
        <div class="${"mc-c-about__social-links svelte-1y2y4t5"}">${validate_component(ArrowLink, "ArrowLink").$$render(
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
  )}</div></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
