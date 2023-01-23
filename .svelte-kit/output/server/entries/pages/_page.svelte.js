import { c as create_ssr_component, e as escape, i as null_to_empty, j as add_attribute, v as validate_component, k as each } from "../../chunks/index.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/Footer.js";
const ArrowLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".color-tech.svelte-111pp0z.svelte-111pp0z{color:#FF3062}.color-art.svelte-111pp0z.svelte-111pp0z{color:#12E599}.color-muted.svelte-111pp0z.svelte-111pp0z{color:#C3C3C3}p.svelte-111pp0z.svelte-111pp0z,p.svelte-111pp0z a.svelte-111pp0z{font-size:1.1rem}@media(max-width: 992px){p.svelte-111pp0z.svelte-111pp0z,p.svelte-111pp0z a.svelte-111pp0z{font-size:1rem !important}}.svelte-111pp0z.svelte-111pp0z::-webkit-scrollbar,.svelte-111pp0z.svelte-111pp0z::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-111pp0z.svelte-111pp0z::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-arrow-link.svelte-111pp0z a.svelte-111pp0z{display:flex;align-items:center}",
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
  return `<p class="${"mc-c-arrow-link svelte-111pp0z"}"><a class="${escape(null_to_empty(`color-${color}`), true) + " svelte-111pp0z"}"${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : "", 0)}>${escape(name)} ${validate_component(Icon, "Icon").$$render(
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
  code: `.color-tech.svelte-1ri1qe4.svelte-1ri1qe4{color:#FF3062}.color-art.svelte-1ri1qe4.svelte-1ri1qe4{color:#12E599}.color-muted.svelte-1ri1qe4.svelte-1ri1qe4{color:#C3C3C3}p.svelte-1ri1qe4.svelte-1ri1qe4,li.svelte-1ri1qe4.svelte-1ri1qe4{font-size:1.1rem}@media(max-width: 992px){p.svelte-1ri1qe4.svelte-1ri1qe4,li.svelte-1ri1qe4.svelte-1ri1qe4{font-size:1rem !important}h3.svelte-1ri1qe4.svelte-1ri1qe4{font-size:1.3rem !important}}.svelte-1ri1qe4.svelte-1ri1qe4::-webkit-scrollbar,.svelte-1ri1qe4.svelte-1ri1qe4::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1ri1qe4.svelte-1ri1qe4::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-timeblock__col--tags.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock__col--content.svelte-1ri1qe4.svelte-1ri1qe4{flex:1;padding-bottom:5em;display:flex;align-items:center}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock__col--content.svelte-1ri1qe4.svelte-1ri1qe4{justify-content:flex-start}}.nofill.svelte-1ri1qe4.svelte-1ri1qe4{height:0 !important;display:none !important}.nofill.svelte-1ri1qe4 .svelte-1ri1qe4::after{display:none !important}.mc-c-timeblock.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock.--odd.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock.--even.svelte-1ri1qe4.svelte-1ri1qe4{display:flex}@media(max-width: 768px){.mc-c-timeblock.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock.--odd.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock.--even.svelte-1ri1qe4.svelte-1ri1qe4{margin:0}}@media(max-width: 576px){.mc-c-timeblock.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock.--odd.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock.--even.svelte-1ri1qe4.svelte-1ri1qe4{flex-direction:row;margin:0 0 0 0.5em}}@media(max-width: 576px){.mc-c-timeblock__col--content.svelte-1ri1qe4.svelte-1ri1qe4{flex:3;font-size:0.8rem;margin-top:0.3em}}.--even.svelte-1ri1qe4 .mc-c-timeblock__col--content.svelte-1ri1qe4{order:2}.--even.svelte-1ri1qe4 .mc-c-timeblock__col--content.svelte-1ri1qe4::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}@media(max-width: 576px){.--even.svelte-1ri1qe4 .mc-c-timeblock__col--content.svelte-1ri1qe4::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.--odd.svelte-1ri1qe4 .mc-c-timeblock__col--content.svelte-1ri1qe4::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}@media(max-width: 576px){.--odd.svelte-1ri1qe4 .mc-c-timeblock__col--content.svelte-1ri1qe4::after{content:none}}@media(max-width: 576px){.--odd.svelte-1ri1qe4 .mc-c-timeblock__col--content.svelte-1ri1qe4::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.mc-c-timeblock__col--content__bubble.svelte-1ri1qe4.svelte-1ri1qe4{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.mc-c-timeblock__col--content__bubble.svelte-1ri1qe4 p.svelte-1ri1qe4{color:#C3C3C3}.mc-c-timeblock__col--content__bubble__date.svelte-1ri1qe4.svelte-1ri1qe4{margin-top:0.3em}.mc-c-timeblock__col--content__bubble__title.svelte-1ri1qe4.svelte-1ri1qe4{margin-bottom:0.3em}@media(max-width: 576px){.mc-c-timeblock__col--content__bubble__title.svelte-1ri1qe4.svelte-1ri1qe4{font-size:1.1rem}}.mc-c-timeblock.--even.svelte-1ri1qe4 .mc-c-timeblock__col--tags.svelte-1ri1qe4{order:0;justify-content:flex-end}.mc-c-timeblock__col--tags.svelte-1ri1qe4.svelte-1ri1qe4{align-self:center;margin-bottom:6em}@media(max-width: 768px){.mc-c-timeblock__col--tags.svelte-1ri1qe4.svelte-1ri1qe4{margin-bottom:7em}}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-1ri1qe4.svelte-1ri1qe4{display:none}}.mc-c-timeblock__col--tags.svelte-1ri1qe4 ul.svelte-1ri1qe4{display:flex;flex-flow:column;padding:0}.mc-c-timeblock__col--tags.svelte-1ri1qe4 li.svelte-1ri1qe4{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.mc-c-timeblock__col--tags.svelte-1ri1qe4 .tag-tech.svelte-1ri1qe4{border-color:#FF3062}.mc-c-timeblock__col--tags.svelte-1ri1qe4 .tag-art.svelte-1ri1qe4{border-color:#12E599}.mc-c-timeblock.--even.svelte-1ri1qe4 .mc-c-timeblock__vl.svelte-1ri1qe4{order:1}.mc-c-timeblock__vl.svelte-1ri1qe4.svelte-1ri1qe4{display:grid;flex:0 1 auto;margin:0 5em}@media(max-width: 992px){.mc-c-timeblock__vl.svelte-1ri1qe4.svelte-1ri1qe4{margin:0 4em}}@media(max-width: 768px){.mc-c-timeblock__vl.svelte-1ri1qe4.svelte-1ri1qe4{margin:0 3em}}@media(max-width: 576px){.mc-c-timeblock__vl.svelte-1ri1qe4.svelte-1ri1qe4{order:-1;margin:0 2em 0 0}}.mc-c-timeblock__vl--empty.svelte-1ri1qe4.svelte-1ri1qe4,.mc-c-timeblock__vl--fill.svelte-1ri1qe4.svelte-1ri1qe4{grid-column-start:1;grid-row-start:1}.mc-c-timeblock__vl--fill.svelte-1ri1qe4.svelte-1ri1qe4{display:none}.mc-c-timeblock__vl--empty.svelte-1ri1qe4.svelte-1ri1qe4{background-color:#FFFFFF;width:3px}.mc-c-timeblock__vl--empty.svelte-1ri1qe4.svelte-1ri1qe4::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.mc-c-timeblock.svelte-1ri1qe4:first-child .mc-c-timeblock__vl.svelte-1ri1qe4{margin-top:3em}.mc-c-timeblock.svelte-1ri1qe4:first-child .mc-c-timeblock__vl--empty.svelte-1ri1qe4::before{margin-top:0}.mc-c-timeblock.svelte-1ri1qe4:first-child .mc-c-timeblock__vl--fill.svelte-1ri1qe4{display:block;position:absolute;height:50px;background-color:#12E599;width:3px;z-index:9;transition:height 0.15s ease}.mc-c-timeblock.svelte-1ri1qe4:first-child .mc-c-timeblock__vl--fill.svelte-1ri1qe4::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="%2312E599" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;z-index:10;text-align:center;right:1em;top:calc(100% - 1.94em)}.mc-c-timeblock.svelte-1ri1qe4:last-child .mc-c-timeblock__vl--empty.svelte-1ri1qe4::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}`,
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

<div class="${escape(null_to_empty(`mc-c-timeblock --${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-1ri1qe4"}"><div class="${"mc-c-timeblock__col--content svelte-1ri1qe4"}"><div class="${"mc-c-timeblock__col--content__bubble svelte-1ri1qe4"}"><h3 class="${"mc-c-timeblock__col--content__bubble_title svelte-1ri1qe4"}">${escape(project.title)}</h3>
            <p class="${"mc-c-timeblock__col--content__bubble_date svelte-1ri1qe4"}">${escape(project.end_yr === null ? `${project.start_yr} - Present` : project.end_yr == project.start_yr ? `project.end_yr` : `${project.start_yr} - ${project.end_yr}`)}</p>
            <p class="${"mc-c-timeblock__col--content__bubble_blurb svelte-1ri1qe4"}">${escape(project.blurb)}</p>
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
    <div class="${"mc-c-timeblock__vl svelte-1ri1qe4"}"${add_attribute("this", vLine, 0)}><div class="${"mc-c-timeblock__vl--empty svelte-1ri1qe4"}"></div>
        <div class="${"mc-c-timeblock__vl--fill svelte-1ri1qe4"}"${add_attribute("this", vFill, 0)}></div></div>
    <div class="${"mc-c-timeblock__col--tags svelte-1ri1qe4"}"><div class="${"tags svelte-1ri1qe4"}"><ul class="${"svelte-1ri1qe4"}">${each(project.tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-1ri1qe4"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-754e2dd3.webp";
const heroSig = "/_app/immutable/assets/hero-signature-147470d3.webp";
const aboutProfile = "/_app/immutable/assets/about-profile-1-ffd31c60.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-ay4rr9.svelte-ay4rr9,p.svelte-ay4rr9 a.svelte-ay4rr9{font-size:1.1rem}@media(max-width: 992px){p.svelte-ay4rr9.svelte-ay4rr9,p.svelte-ay4rr9 a.svelte-ay4rr9{font-size:1rem !important}h2.svelte-ay4rr9.svelte-ay4rr9{font-size:1.8rem !important}}.svelte-ay4rr9.svelte-ay4rr9::-webkit-scrollbar,.svelte-ay4rr9.svelte-ay4rr9::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-ay4rr9.svelte-ay4rr9::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-hero.svelte-ay4rr9.svelte-ay4rr9{width:100%;height:100vh;overflow-x:hidden;display:flex}.mc-c-hero__block--right.svelte-ay4rr9.svelte-ay4rr9,.mc-c-hero__block--left.svelte-ay4rr9.svelte-ay4rr9{flex:1}.mc-c-hero__block--right.svelte-ay4rr9.svelte-ay4rr9{background-color:#12E599}.mc-c-hero__img--figure.svelte-ay4rr9.svelte-ay4rr9,.mc-c-hero__img--sig.svelte-ay4rr9.svelte-ay4rr9{position:absolute;pointer-events:none}.mc-c-hero__img--sig.svelte-ay4rr9.svelte-ay4rr9{height:110vh;top:-10vh;left:calc(50% - 59vh)}@media(max-width: 768px) and (orientation: portrait){.mc-c-hero__img--sig.svelte-ay4rr9.svelte-ay4rr9{height:80vh;left:calc(50% - 45vh)}}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--sig.svelte-ay4rr9.svelte-ay4rr9{height:100vh;left:calc(50% - 55vh)}}.mc-c-hero__img--figure.svelte-ay4rr9.svelte-ay4rr9{height:102vh;top:2em;left:calc(50% - 30vh)}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--figure.svelte-ay4rr9.svelte-ay4rr9{left:calc(50% - 30vh)}}.mc-c-hero__explore.svelte-ay4rr9.svelte-ay4rr9{position:absolute;display:flex;align-items:center;margin-top:calc(100vh - 130px);transform:rotate(90deg)}.mc-c-hero__explore.svelte-ay4rr9 p.svelte-ay4rr9{flex-grow:0;padding-right:1em}.mc-c-hero__explore__line.svelte-ay4rr9.svelte-ay4rr9{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.mc-c-title.svelte-ay4rr9.svelte-ay4rr9{display:flex;align-items:center}.mc-c-title.svelte-ay4rr9 h2.svelte-ay4rr9{flex-grow:0;font-size:2.2rem;padding-right:1em;color:#FFFFFF}@media(max-width: 992px){.mc-l-container.svelte-ay4rr9.svelte-ay4rr9{margin:3em 2em 0}}.mc-l-container.svelte-ay4rr9 section.svelte-ay4rr9{margin-bottom:8em}.mc-l-timeline.svelte-ay4rr9.svelte-ay4rr9{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 1200px){.mc-l-timeline.svelte-ay4rr9.svelte-ay4rr9{width:90%}}@media(max-width: 992px){.mc-l-timeline.svelte-ay4rr9.svelte-ay4rr9{width:100%;margin-top:1em}}.mc-l-about.svelte-ay4rr9.svelte-ay4rr9{display:flex;column-gap:10em}@media(max-width: 1200px){.mc-l-about.svelte-ay4rr9.svelte-ay4rr9{column-gap:7em}}@media(max-width: 992px){.mc-l-about.svelte-ay4rr9.svelte-ay4rr9{column-gap:5em}}@media(max-width: 768px){.mc-l-about.svelte-ay4rr9.svelte-ay4rr9{flex-wrap:wrap;row-gap:3em}}.mc-c-about__blurb.svelte-ay4rr9.svelte-ay4rr9{flex:3;color:#C3C3C3}@media(max-width: 768px){.mc-c-about__blurb.svelte-ay4rr9.svelte-ay4rr9{flex:1 0 100%}}.mc-c-about__blurb__social-links.svelte-ay4rr9.svelte-ay4rr9{display:flex}.mc-c-about__profile.svelte-ay4rr9.svelte-ay4rr9{flex:2;text-align:center}@media(max-width: 768px){.mc-c-about__profile.svelte-ay4rr9.svelte-ay4rr9{flex:1 0 100%}}.mc-c-about__profile__img.svelte-ay4rr9.svelte-ay4rr9{width:80%;border-radius:25px}@media(max-width: 1200px){.mc-c-about__profile__img.svelte-ay4rr9.svelte-ay4rr9{width:90%}}@media(max-width: 992px){.mc-c-about__profile__img.svelte-ay4rr9.svelte-ay4rr9{width:100%}}@media(max-width: 768px){.mc-c-about__profile__img.svelte-ay4rr9.svelte-ay4rr9{width:60%}}@media(max-width: 576px){.mc-c-about__profile__img.svelte-ay4rr9.svelte-ay4rr9{width:80%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let timeline, timelineHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}



<section class="${"mc-c-hero svelte-ay4rr9"}"><div class="${"mc-c-hero__block--left svelte-ay4rr9"}"></div>
    <div class="${"mc-c-hero__block--right svelte-ay4rr9"}"></div>
    <img class="${"mc-c-hero__img--sig svelte-ay4rr9"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"mc-c-hero__img--figure svelte-ay4rr9"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"mc-c-hero__explore svelte-ay4rr9"}"><p class="${"svelte-ay4rr9"}">Explore</p>
        <div class="${"mc-c-hero__explore__line svelte-ay4rr9"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"mc-l-container svelte-ay4rr9"}"><div class="${"mc-c-title svelte-ay4rr9"}"><h2 class="${"svelte-ay4rr9"}">Featured Work</h2>
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
    <section class="${"mc-l-timeline svelte-ay4rr9"}"${add_attribute("this", timeline, 0)}>${each(Object.keys(data), (idx) => {
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
    
    <section class="${"svelte-ay4rr9"}"><div class="${"mc-c-title svelte-ay4rr9"}"><h2 class="${"svelte-ay4rr9"}">Playground</h2>
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
        <p class="${"svelte-ay4rr9"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-ay4rr9"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-ay4rr9"}"><div class="${"mc-l-about svelte-ay4rr9"}"><div class="${"mc-c-about__blurb svelte-ay4rr9"}"><div class="${"mc-c-title svelte-ay4rr9"}"><h2 class="${"svelte-ay4rr9"}">Hello World \u{1F44B}</h2>
                    ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "/about",
      color: "art",
      name: "See all",
      newTab: false
    },
    {},
    {}
  )}</div>
                <div class="${"mc-c-about__blurb__desc svelte-ay4rr9"}"><p class="${"svelte-ay4rr9"}">Hi there! I&#39;m Michaela or Milkcee, depending on where you found me from.</p>
                    <p class="${"svelte-ay4rr9"}">I&#39;m an artist and a programmer, with a small fixation on cute cows. I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]</p></div>
                <div class="${"mc-c-about__blurb__social-links svelte-ay4rr9"}">${validate_component(ArrowLink, "ArrowLink").$$render(
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
            
            <div class="${"mc-c-about__profile svelte-ay4rr9"}"><img class="${"mc-c-about__profile__img svelte-ay4rr9"}"${add_attribute("src", aboutProfile, 0)} alt="${"About section face profile"}"></div></div></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
