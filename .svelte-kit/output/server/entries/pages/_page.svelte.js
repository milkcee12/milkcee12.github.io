import { c as create_ssr_component, e as escape, i as null_to_empty, v as validate_component, j as add_attribute, k as each } from "../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../chunks/Footer.js";
import { A as ArrowLink } from "../../chunks/ArrowLink.js";
const TimeBlock_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.color-tech.svelte-d4z4kr.svelte-d4z4kr{color:#FF3062}.color-art.svelte-d4z4kr.svelte-d4z4kr{color:#12E599}.color-muted.svelte-d4z4kr.svelte-d4z4kr{color:#C3C3C3}.color-light.svelte-d4z4kr.svelte-d4z4kr{color:#FFFFFF}.color-dark.svelte-d4z4kr.svelte-d4z4kr{color:#090A0D}h3.svelte-d4z4kr.svelte-d4z4kr{font-size:1.6rem}p.svelte-d4z4kr.svelte-d4z4kr,li.svelte-d4z4kr.svelte-d4z4kr{font-size:1.15rem}@media(max-width: 992px){p.svelte-d4z4kr.svelte-d4z4kr,li.svelte-d4z4kr.svelte-d4z4kr{font-size:1.05rem !important}h3.svelte-d4z4kr.svelte-d4z4kr{font-size:1.3rem !important}}.svelte-d4z4kr.svelte-d4z4kr::-webkit-scrollbar,.svelte-d4z4kr.svelte-d4z4kr::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-d4z4kr.svelte-d4z4kr::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-timeblock__col--tags.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock__col--content.svelte-d4z4kr.svelte-d4z4kr{flex:1;padding-bottom:5em;display:flex;align-items:center}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock__col--content.svelte-d4z4kr.svelte-d4z4kr{justify-content:flex-start}}.nofill.svelte-d4z4kr.svelte-d4z4kr{height:0 !important;display:none !important}.nofill.svelte-d4z4kr .svelte-d4z4kr::after{display:none !important}.mc-c-timeblock.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock.--odd.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock.--even.svelte-d4z4kr.svelte-d4z4kr{display:flex}@media(max-width: 768px){.mc-c-timeblock.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock.--odd.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock.--even.svelte-d4z4kr.svelte-d4z4kr{margin:0}}@media(max-width: 576px){.mc-c-timeblock.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock.--odd.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock.--even.svelte-d4z4kr.svelte-d4z4kr{flex-direction:row;margin:0 0 0 0.5em}}@media(max-width: 576px){.mc-c-timeblock__col--content.svelte-d4z4kr.svelte-d4z4kr{flex:3;font-size:0.8rem;margin-top:0.3em}}.--even.svelte-d4z4kr .mc-c-timeblock__col--content.svelte-d4z4kr{order:2}.--even.svelte-d4z4kr .mc-c-timeblock__col--content.svelte-d4z4kr::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}@media(max-width: 576px){.--even.svelte-d4z4kr .mc-c-timeblock__col--content.svelte-d4z4kr::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.--odd.svelte-d4z4kr .mc-c-timeblock__col--content.svelte-d4z4kr::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}@media(max-width: 576px){.--odd.svelte-d4z4kr .mc-c-timeblock__col--content.svelte-d4z4kr::after{content:none}}@media(max-width: 576px){.--odd.svelte-d4z4kr .mc-c-timeblock__col--content.svelte-d4z4kr::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.mc-c-timeblock__col--content__bubble.svelte-d4z4kr.svelte-d4z4kr{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.mc-c-timeblock__col--content__bubble.svelte-d4z4kr p.svelte-d4z4kr{color:#C3C3C3}.mc-c-timeblock__col--content__bubble__date.svelte-d4z4kr.svelte-d4z4kr{margin-top:0.3em}.mc-c-timeblock__col--content__bubble__title.svelte-d4z4kr.svelte-d4z4kr{margin-bottom:0.3em}@media(max-width: 576px){.mc-c-timeblock__col--content__bubble__title.svelte-d4z4kr.svelte-d4z4kr{font-size:1.1rem}}.mc-c-timeblock.--even.svelte-d4z4kr .mc-c-timeblock__col--tags.svelte-d4z4kr{order:0;justify-content:flex-end}.mc-c-timeblock__col--tags.svelte-d4z4kr.svelte-d4z4kr{align-self:center;margin-bottom:6em}@media(max-width: 768px){.mc-c-timeblock__col--tags.svelte-d4z4kr.svelte-d4z4kr{margin-bottom:7em}}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-d4z4kr.svelte-d4z4kr{display:none}}.mc-c-timeblock__col--tags.svelte-d4z4kr ul.svelte-d4z4kr{display:flex;flex-flow:column;padding:0}.mc-c-timeblock__col--tags.svelte-d4z4kr li.svelte-d4z4kr{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.mc-c-timeblock__col--tags.svelte-d4z4kr .tag-tech.svelte-d4z4kr{border-color:#FF3062}.mc-c-timeblock__col--tags.svelte-d4z4kr .tag-art.svelte-d4z4kr{border-color:#12E599}.mc-c-timeblock.--even.svelte-d4z4kr .mc-c-timeblock__vl.svelte-d4z4kr{order:1}.mc-c-timeblock__vl.svelte-d4z4kr.svelte-d4z4kr{display:grid;flex:0 1 auto;margin:0 5em}@media(max-width: 992px){.mc-c-timeblock__vl.svelte-d4z4kr.svelte-d4z4kr{margin:0 4em}}@media(max-width: 768px){.mc-c-timeblock__vl.svelte-d4z4kr.svelte-d4z4kr{margin:0 3em}}@media(max-width: 576px){.mc-c-timeblock__vl.svelte-d4z4kr.svelte-d4z4kr{order:-1;margin:0 2em 0 0}}.mc-c-timeblock__vl--empty.svelte-d4z4kr.svelte-d4z4kr,.mc-c-timeblock__vl--fill.svelte-d4z4kr.svelte-d4z4kr{grid-column-start:1;grid-row-start:1}.mc-c-timeblock__vl--fill.svelte-d4z4kr.svelte-d4z4kr{display:none}.mc-c-timeblock__vl--empty.svelte-d4z4kr.svelte-d4z4kr{background-color:#FFFFFF;width:3px}.mc-c-timeblock__vl--empty.svelte-d4z4kr.svelte-d4z4kr::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.mc-c-timeblock.svelte-d4z4kr:first-child .mc-c-timeblock__vl.svelte-d4z4kr{margin-top:3em}.mc-c-timeblock.svelte-d4z4kr:first-child .mc-c-timeblock__vl--empty.svelte-d4z4kr::before{margin-top:0}.mc-c-timeblock.svelte-d4z4kr:first-child .mc-c-timeblock__vl--fill.svelte-d4z4kr{display:block;position:absolute;height:0;background-color:#12E599;width:3px;z-index:9;transition:height 0.1s ease}.mc-c-timeblock.svelte-d4z4kr:first-child .mc-c-timeblock__vl--fill.svelte-d4z4kr::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="%2312E599" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;z-index:10;text-align:center;right:1em;top:calc(100% - 2em)}.mc-c-timeblock.svelte-d4z4kr:last-child .mc-c-timeblock__vl--empty.svelte-d4z4kr{display:flex;flex-direction:column;justify-content:space-between}.mc-c-timeblock.svelte-d4z4kr:last-child .mc-c-timeblock__vl--empty.svelte-d4z4kr::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');width:32px;height:32px;position:relative;text-align:center;right:1em}`,
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

<div class="${escape(null_to_empty(`mc-c-timeblock --${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-d4z4kr"}"><div class="${"mc-c-timeblock__col--content svelte-d4z4kr"}"><div class="${"mc-c-timeblock__col--content__bubble svelte-d4z4kr"}"><h3 class="${"mc-c-timeblock__col--content__bubble_title svelte-d4z4kr"}">${escape(project.title)}</h3>
      <p class="${"mc-c-timeblock__col--content__bubble_date svelte-d4z4kr"}">${escape(!project.end_yr ? `${project.start_yr} - Present` : project.end_yr == project.start_yr ? `${project.end_yr}` : `${project.start_yr} - ${project.end_yr}`)}</p>
      <p class="${"mc-c-timeblock__col--content__bubble_blurb svelte-d4z4kr"}">${escape(project.blurb)}</p>
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
  <div class="${"mc-c-timeblock__vl svelte-d4z4kr"}"><div class="${"mc-c-timeblock__vl--empty svelte-d4z4kr"}"${add_attribute("this", vLine, 0)}></div>
    <div class="${"mc-c-timeblock__vl--fill svelte-d4z4kr"}"${add_attribute("this", vFill, 0)}></div></div>
  <div class="${"mc-c-timeblock__col--tags svelte-d4z4kr"}"><div class="${"tags svelte-d4z4kr"}"><ul class="${"svelte-d4z4kr"}">${each(project.tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-d4z4kr"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-754e2dd3.webp";
const heroSig = "/_app/immutable/assets/hero-signature-147470d3.webp";
const aboutProfile = "/_app/immutable/assets/about-profile-1-ffd31c60.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-tech.svelte-wg6uj.svelte-wg6uj{color:#FF3062}.color-art.svelte-wg6uj.svelte-wg6uj{color:#12E599}.color-light.svelte-wg6uj.svelte-wg6uj{color:#FFFFFF}h2.svelte-wg6uj.svelte-wg6uj{font-size:2rem}p.svelte-wg6uj.svelte-wg6uj,p.svelte-wg6uj a.svelte-wg6uj{font-size:1.15rem}@media(max-width: 992px){p.svelte-wg6uj.svelte-wg6uj,p.svelte-wg6uj a.svelte-wg6uj{font-size:1.05rem !important}h2.svelte-wg6uj.svelte-wg6uj{font-size:1.8rem !important}}.svelte-wg6uj.svelte-wg6uj::-webkit-scrollbar,.svelte-wg6uj.svelte-wg6uj::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-wg6uj.svelte-wg6uj::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-hero.svelte-wg6uj.svelte-wg6uj{width:100%;height:100vh;overflow-x:hidden;display:flex}.mc-c-hero__block--right.svelte-wg6uj.svelte-wg6uj,.mc-c-hero__block--left.svelte-wg6uj.svelte-wg6uj{flex:1}.mc-c-hero__block--right.svelte-wg6uj.svelte-wg6uj{background-color:#12E599}.mc-c-hero__img--figure.svelte-wg6uj.svelte-wg6uj,.mc-c-hero__img--sig.svelte-wg6uj.svelte-wg6uj{position:absolute;pointer-events:none}.mc-c-hero__img--sig.svelte-wg6uj.svelte-wg6uj{height:110vh;top:-10vh;left:calc(50% - 59vh)}@media(max-width: 768px) and (orientation: portrait){.mc-c-hero__img--sig.svelte-wg6uj.svelte-wg6uj{height:80vh;left:calc(50% - 45vh)}}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--sig.svelte-wg6uj.svelte-wg6uj{height:100vh;left:calc(50% - 55vh)}}.mc-c-hero__img--figure.svelte-wg6uj.svelte-wg6uj{height:102vh;top:2em;left:calc(50% - 30vh)}@media(max-width: 992px) and (max-height: 415px) and (orientation: landscape){.mc-c-hero__img--figure.svelte-wg6uj.svelte-wg6uj{left:calc(50% - 30vh)}}.mc-c-hero__explore.svelte-wg6uj.svelte-wg6uj{position:absolute;display:flex;align-items:center;margin-top:calc(100vh - 130px);transform:rotate(90deg)}.mc-c-hero__explore.svelte-wg6uj p.svelte-wg6uj{flex-grow:0;padding-right:1em}.mc-c-hero__explore__line.svelte-wg6uj.svelte-wg6uj{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.mc-c-title.svelte-wg6uj.svelte-wg6uj{display:flex;align-items:center}.mc-c-title.svelte-wg6uj h2.svelte-wg6uj{flex-grow:0;font-size:2.2rem;padding-right:1em;color:#FFFFFF}.mc-l-container.svelte-wg6uj.svelte-wg6uj{margin-top:8em}@media(max-width: 992px){.mc-l-container.svelte-wg6uj.svelte-wg6uj{margin:3em 2em 0}}.mc-l-container.svelte-wg6uj section.svelte-wg6uj{margin-bottom:8em}.mc-l-timeline.svelte-wg6uj.svelte-wg6uj{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 1600px){.mc-l-timeline.svelte-wg6uj.svelte-wg6uj{width:80%}}@media(max-width: 1200px){.mc-l-timeline.svelte-wg6uj.svelte-wg6uj{width:90%}}@media(max-width: 992px){.mc-l-timeline.svelte-wg6uj.svelte-wg6uj{width:100%;margin-top:1em}}.mc-l-about.svelte-wg6uj.svelte-wg6uj{display:flex;column-gap:10em}@media(max-width: 1200px){.mc-l-about.svelte-wg6uj.svelte-wg6uj{column-gap:7em}}@media(max-width: 992px){.mc-l-about.svelte-wg6uj.svelte-wg6uj{column-gap:5em}}@media(max-width: 768px){.mc-l-about.svelte-wg6uj.svelte-wg6uj{flex-wrap:wrap;row-gap:3em}}.mc-c-about__blurb.svelte-wg6uj.svelte-wg6uj{flex:3;color:#C3C3C3}@media(max-width: 768px){.mc-c-about__blurb.svelte-wg6uj.svelte-wg6uj{flex:1 0 100%}}.mc-c-about__blurb__social-links.svelte-wg6uj.svelte-wg6uj{display:flex}.mc-c-about__profile.svelte-wg6uj.svelte-wg6uj{flex:2;text-align:center}@media(max-width: 768px){.mc-c-about__profile.svelte-wg6uj.svelte-wg6uj{flex:1 0 100%}}.mc-c-about__profile__img.svelte-wg6uj.svelte-wg6uj{width:80%;border-radius:25px}@media(max-width: 1200px){.mc-c-about__profile__img.svelte-wg6uj.svelte-wg6uj{width:90%}}@media(max-width: 992px){.mc-c-about__profile__img.svelte-wg6uj.svelte-wg6uj{width:100%}}@media(max-width: 768px){.mc-c-about__profile__img.svelte-wg6uj.svelte-wg6uj{width:60%}}@media(max-width: 576px){.mc-c-about__profile__img.svelte-wg6uj.svelte-wg6uj{width:80%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let timeline, timelineHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1pqj0d0_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1pqj0d0_END -->`, ""}



<section class="${"mc-c-hero svelte-wg6uj"}"><div class="${"mc-c-hero__block--left svelte-wg6uj"}"></div>
  <div class="${"mc-c-hero__block--right svelte-wg6uj"}"></div>
  <img class="${"mc-c-hero__img--sig svelte-wg6uj"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
  <img class="${"mc-c-hero__img--figure svelte-wg6uj"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
  <div class="${"mc-c-hero__explore svelte-wg6uj"}"><p class="${"svelte-wg6uj"}">Explore</p>
    <div class="${"mc-c-hero__explore__line svelte-wg6uj"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"mc-l-container svelte-wg6uj"}"><section class="${"svelte-wg6uj"}"><div class="${"mc-c-title svelte-wg6uj"}"><h2 class="${"svelte-wg6uj"}">Featured Work</h2>
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
    <div class="${"mc-l-timeline svelte-wg6uj"}"${add_attribute("this", timeline, 0)}>${each(Object.keys(data), (idx) => {
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

  <section class="${"svelte-wg6uj"}"><div class="${"mc-c-title svelte-wg6uj"}"><h2 class="${"svelte-wg6uj"}">Playground</h2>
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
    <p class="${"svelte-wg6uj"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-wg6uj"}">kit.svelte.dev</a> to read the documentation
    </p></section>

  <section class="${"svelte-wg6uj"}"><div class="${"mc-l-about svelte-wg6uj"}"><div class="${"mc-c-about__blurb svelte-wg6uj"}"><div class="${"mc-c-title svelte-wg6uj"}"><h2 class="${"svelte-wg6uj"}">Hello World \u{1F44B}</h2>
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
        <div class="${"mc-c-about__blurb__desc svelte-wg6uj"}"><p class="${"svelte-wg6uj"}">Hi there! I&#39;m Michaela or Milkcee, depending on where you found me
            from.
          </p>
          <p class="${"svelte-wg6uj"}">I&#39;m an artist and software engineer with a lot of cow-themed merch.
            I&#39;m a junior studying <span class="${"color-tech svelte-wg6uj"}"><b class="${"svelte-wg6uj"}">Computer Science</b></span>
            at
            <span class="${"color-light svelte-wg6uj"}"><b class="${"svelte-wg6uj"}">University of Southern California</b></span>
            with a minor in <span class="${"color-art svelte-wg6uj"}"><b class="${"svelte-wg6uj"}">3-D Animation</b></span>.
          </p></div>
        <div class="${"mc-c-about__blurb__social-links svelte-wg6uj"}">${validate_component(ArrowLink, "ArrowLink").$$render(
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
      
      <div class="${"mc-c-about__profile svelte-wg6uj"}"><img class="${"mc-c-about__profile__img svelte-wg6uj"}"${add_attribute("src", aboutProfile, 0)} alt="${"About section face profile"}"></div></div></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
