import { c as create_ssr_component, e as escape, i as null_to_empty, j as add_attribute, v as validate_component, k as each } from "../../chunks/index.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/footer.js";
const arrowLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".color-tech.svelte-1su6xts.svelte-1su6xts{color:#FF3062}.color-art.svelte-1su6xts.svelte-1su6xts{color:#12E599}.color-muted.svelte-1su6xts.svelte-1su6xts{color:#C3C3C3}@media(max-width: 992px){p.svelte-1su6xts.svelte-1su6xts,p.svelte-1su6xts a.svelte-1su6xts{font-size:0.9rem}}.svelte-1su6xts.svelte-1su6xts::-webkit-scrollbar,.svelte-1su6xts.svelte-1su6xts::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1su6xts.svelte-1su6xts::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-arrow-link.svelte-1su6xts a.svelte-1su6xts{display:flex;align-items:center}",
  map: null
};
const ArrowLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href, name, color, arrowColor, newTab } = $$props;
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
const timelineElem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.color-tech.svelte-1ji3po.svelte-1ji3po{color:#FF3062}.color-art.svelte-1ji3po.svelte-1ji3po{color:#12E599}.color-muted.svelte-1ji3po.svelte-1ji3po{color:#C3C3C3}@media(max-width: 992px){p.svelte-1ji3po.svelte-1ji3po,li.svelte-1ji3po.svelte-1ji3po{font-size:0.9rem}h3.svelte-1ji3po.svelte-1ji3po{font-size:1.3rem !important}}.svelte-1ji3po.svelte-1ji3po::-webkit-scrollbar,.svelte-1ji3po.svelte-1ji3po::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1ji3po.svelte-1ji3po::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-timeblock.--odd.svelte-1ji3po.svelte-1ji3po,.mc-c-timeblock.--even.svelte-1ji3po.svelte-1ji3po{display:flex}@media(max-width: 768px){.mc-c-timeblock.--odd.svelte-1ji3po.svelte-1ji3po,.mc-c-timeblock.--even.svelte-1ji3po.svelte-1ji3po{margin:0}}@media(max-width: 576px){.mc-c-timeblock.--odd.svelte-1ji3po.svelte-1ji3po,.mc-c-timeblock.--even.svelte-1ji3po.svelte-1ji3po{flex-direction:row;margin:0 0 0 0.5em}}.mc-c-timeblock__col--tags.svelte-1ji3po.svelte-1ji3po,.mc-c-timeblock__col--content.svelte-1ji3po.svelte-1ji3po{flex:1;padding-bottom:5em;display:flex;align-items:center}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-1ji3po.svelte-1ji3po,.mc-c-timeblock__col--content.svelte-1ji3po.svelte-1ji3po{justify-content:flex-start}}.mc-c-timeblock.--even.svelte-1ji3po.svelte-1ji3po{flex-flow:row-reverse}@media(max-width: 576px){.mc-c-timeblock.--even.svelte-1ji3po.svelte-1ji3po{flex-flow:row}}@media(max-width: 576px){.mc-c-timeblock__col--content.svelte-1ji3po.svelte-1ji3po{flex:3;font-size:0.8rem;margin-top:0.3em}}.--even.svelte-1ji3po .mc-c-timeblock__col--content.svelte-1ji3po{justify-content:flex-end}.--even.svelte-1ji3po .mc-c-timeblock__col--content.svelte-1ji3po::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}@media(max-width: 576px){.--even.svelte-1ji3po .mc-c-timeblock__col--content.svelte-1ji3po::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.--odd.svelte-1ji3po .mc-c-timeblock__col--content.svelte-1ji3po::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}@media(max-width: 576px){.--odd.svelte-1ji3po .mc-c-timeblock__col--content.svelte-1ji3po::after{content:none}}@media(max-width: 576px){.--odd.svelte-1ji3po .mc-c-timeblock__col--content.svelte-1ji3po::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}}.mc-c-timeblock__col--content__bubble.svelte-1ji3po.svelte-1ji3po{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.mc-c-timeblock__col--content__bubble.svelte-1ji3po p.svelte-1ji3po{color:#C3C3C3}.mc-c-timeblock__col--content__bubble__date.svelte-1ji3po.svelte-1ji3po{margin-top:0.3em}.mc-c-timeblock__col--content__bubble__title.svelte-1ji3po.svelte-1ji3po{margin-bottom:0.3em}@media(max-width: 576px){.mc-c-timeblock__col--content__bubble__title.svelte-1ji3po.svelte-1ji3po{font-size:1.1rem}}.mc-c-timeblock.--even.svelte-1ji3po .mc-c-timeblock__col--tags.svelte-1ji3po{justify-content:flex-end}.mc-c-timeblock__col--tags.svelte-1ji3po.svelte-1ji3po{align-self:center;margin-bottom:6em}@media(max-width: 768px){.mc-c-timeblock__col--tags.svelte-1ji3po.svelte-1ji3po{margin-bottom:7em}}@media(max-width: 576px){.mc-c-timeblock__col--tags.svelte-1ji3po.svelte-1ji3po{display:none}}.mc-c-timeblock__col--tags.svelte-1ji3po ul.svelte-1ji3po{display:flex;flex-flow:column;padding:0}.mc-c-timeblock__col--tags.svelte-1ji3po li.svelte-1ji3po{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.mc-c-timeblock__col--tags.svelte-1ji3po .tag-tech.svelte-1ji3po{border-color:#FF3062}.mc-c-timeblock__col--tags.svelte-1ji3po .tag-art.svelte-1ji3po{border-color:#12E599}.mc-c-timeblock__vl.svelte-1ji3po.svelte-1ji3po{width:3px;background-color:#FFFFFF;margin:0 5em}@media(max-width: 992px){.mc-c-timeblock__vl.svelte-1ji3po.svelte-1ji3po{margin:0 4em}}@media(max-width: 768px){.mc-c-timeblock__vl.svelte-1ji3po.svelte-1ji3po{margin:0 3em}}@media(max-width: 576px){.mc-c-timeblock__vl.svelte-1ji3po.svelte-1ji3po{order:-1;margin:0 2em 0 0}}.mc-c-timeblock__vl.svelte-1ji3po.svelte-1ji3po::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.mc-c-timeblock.svelte-1ji3po:first-child .mc-c-timeblock__vl.svelte-1ji3po{margin-top:3em}.mc-c-timeblock.svelte-1ji3po:first-child .mc-c-timeblock__vl.svelte-1ji3po::before{margin-top:0}.mc-c-timeblock.svelte-1ji3po:last-child .mc-c-timeblock__vl.svelte-1ji3po::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}`,
  map: null
};
const TimelineElem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id, title, date, blurb, expandName, expandHref, expandColor, tags } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.blurb === void 0 && $$bindings.blurb && blurb !== void 0)
    $$bindings.blurb(blurb);
  if ($$props.expandName === void 0 && $$bindings.expandName && expandName !== void 0)
    $$bindings.expandName(expandName);
  if ($$props.expandHref === void 0 && $$bindings.expandHref && expandHref !== void 0)
    $$bindings.expandHref(expandHref);
  if ($$props.expandColor === void 0 && $$bindings.expandColor && expandColor !== void 0)
    $$bindings.expandColor(expandColor);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty(`mc-c-timeblock --${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-1ji3po"}"><div class="${"mc-c-timeblock__col--content svelte-1ji3po"}"><div class="${"mc-c-timeblock__col--content__bubble svelte-1ji3po"}"><h3 class="${"mc-c-timeblock__col--content__bubble_title svelte-1ji3po"}">${escape(title)}</h3>
            <p class="${"mc-c-timeblock__col--content__bubble_date svelte-1ji3po"}">${escape(date)}</p>
            <p class="${"mc-c-timeblock__col--content__bubble_blurb svelte-1ji3po"}">${escape(blurb)}</p>
            ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      color: expandColor,
      href: expandHref + ",",
      name: expandName
    },
    {},
    {}
  )}</div></div>
    <div class="${"mc-c-timeblock__vl svelte-1ji3po"}"></div>
    <div class="${"mc-c-timeblock__col--tags svelte-1ji3po"}"><div class="${"tags svelte-1ji3po"}"><ul class="${"svelte-1ji3po"}">${each(tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-1ji3po"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 992px){p.svelte-1ephx79.svelte-1ephx79,p.svelte-1ephx79 a.svelte-1ephx79{font-size:0.9rem}h2.svelte-1ephx79.svelte-1ephx79{font-size:1.8rem !important}}.svelte-1ephx79.svelte-1ephx79::-webkit-scrollbar,.svelte-1ephx79.svelte-1ephx79::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1ephx79.svelte-1ephx79::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.mc-c-hero.svelte-1ephx79.svelte-1ephx79{width:100%;height:48em;overflow-x:hidden;display:flex}@media(max-width: 992px){.mc-c-hero.svelte-1ephx79.svelte-1ephx79{height:40em}}@media(max-width: 768px){.mc-c-hero.svelte-1ephx79.svelte-1ephx79{width:100%;height:36em}}.mc-c-hero__block--right.svelte-1ephx79.svelte-1ephx79,.mc-c-hero__block--left.svelte-1ephx79.svelte-1ephx79{flex:1}.mc-c-hero__block--right.svelte-1ephx79.svelte-1ephx79{background-color:#12E599}.mc-c-hero__img--figure.svelte-1ephx79.svelte-1ephx79,.mc-c-hero__img--sig.svelte-1ephx79.svelte-1ephx79{position:absolute;pointer-events:none}.mc-c-hero__img--sig.svelte-1ephx79.svelte-1ephx79{width:85em;left:calc(50% - 32em);top:-10em}@media(max-width: 992px){.mc-c-hero__img--sig.svelte-1ephx79.svelte-1ephx79{width:60em;left:calc(50% - 20em);top:-10em}}@media(max-width: 768px){.mc-c-hero__img--sig.svelte-1ephx79.svelte-1ephx79{width:40em;left:calc(50% - 15em);top:-2em}}.mc-c-hero__img--figure.svelte-1ephx79.svelte-1ephx79{width:36em;height:auto;top:2em;left:calc(50% - 15em)}@media(max-width: 992px){.mc-c-hero__img--figure.svelte-1ephx79.svelte-1ephx79{width:30em;height:auto;top:2em;left:calc(50% - 13em)}}@media(max-width: 768px){.mc-c-hero__img--figure.svelte-1ephx79.svelte-1ephx79{width:26em;height:auto;top:3em;left:calc(50% - 13em)}}.mc-c-hero__explore.svelte-1ephx79.svelte-1ephx79{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}@media(max-width: 992px){.mc-c-hero__explore.svelte-1ephx79.svelte-1ephx79{margin-top:32em}}@media(max-width: 768px){.mc-c-hero__explore.svelte-1ephx79.svelte-1ephx79{margin-left:-2em;margin-top:28em}}.mc-c-hero__explore.svelte-1ephx79 p.svelte-1ephx79{flex-grow:0;padding-right:1em}.mc-c-hero__explore__line.svelte-1ephx79.svelte-1ephx79{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.mc-c-title.svelte-1ephx79.svelte-1ephx79{display:flex;align-items:center}.mc-c-title.svelte-1ephx79 h2.svelte-1ephx79{flex-grow:0;font-size:2.2rem;padding-right:1em}@media(max-width: 992px){.mc-l-container.svelte-1ephx79.svelte-1ephx79{margin:3em 2em 0}}.mc-l-container.svelte-1ephx79 section.svelte-1ephx79{margin-bottom:8em}.mc-l-timeline.svelte-1ephx79.svelte-1ephx79{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 1200px){.mc-l-timeline.svelte-1ephx79.svelte-1ephx79{width:90%}}@media(max-width: 992px){.mc-l-timeline.svelte-1ephx79.svelte-1ephx79{width:100%;margin-top:1em}}.mc-c-about__blurb.svelte-1ephx79.svelte-1ephx79{color:#C3C3C3}.mc-c-about__social-links.svelte-1ephx79.svelte-1ephx79{display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"mc-c-hero svelte-1ephx79"}"><div class="${"mc-c-hero__block--left svelte-1ephx79"}"></div>
    <div class="${"mc-c-hero__block--right svelte-1ephx79"}"></div>
    <img class="${"mc-c-hero__img--sig svelte-1ephx79"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"mc-c-hero__img--figure svelte-1ephx79"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"mc-c-hero__explore svelte-1ephx79"}"><p class="${"svelte-1ephx79"}">Explore</p>
        <div class="${"mc-c-hero__explore__line svelte-1ephx79"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"mc-l-container svelte-1ephx79"}"><div class="${"mc-c-title svelte-1ephx79"}"><h2 class="${"svelte-1ephx79"}">Featured Work</h2>
        ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "/work",
      color: "art",
      name: "See all"
    },
    {},
    {}
  )}</div>
    <section class="${"mc-l-timeline svelte-1ephx79"}">${each(Object.keys(data), (idx) => {
    return `${validate_component(TimelineElem, "TimelineElem").$$render(
      $$result,
      {
        id: idx,
        title: data[idx].title,
        date: data[idx].end_yr === null ? `${data[idx].start_yr} - Present` : `${data[idx].start_yr === data[idx].end_yr ? `${data[idx].start_yr}` : `${data[idx].start_yr} - ${data[idx].end_yr}`}`,
        blurb: data[idx].blurb,
        expandName: data[idx].see_more,
        expandColor: data[idx].project_type.name,
        expandHref: "#",
        tags: data[idx].tags
      },
      {},
      {}
    )}`;
  })}</section>
    
    <section class="${"svelte-1ephx79"}"><div class="${"mc-c-title svelte-1ephx79"}"><h2 class="${"svelte-1ephx79"}">Playground</h2>
            ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "/playground",
      color: "art",
      name: "See all"
    },
    {},
    {}
  )}</div>
        <p class="${"svelte-1ephx79"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1ephx79"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"mc-c-about svelte-1ephx79"}"><h2 class="${"svelte-1ephx79"}">Hello World \u{1F44B}</h2>
        <div class="${"mc-c-about__blurb svelte-1ephx79"}"><p class="${"svelte-1ephx79"}">Hi, my name is Michaela. I also go by Milkcee on my art accounts.</p>
            <p class="${"svelte-1ephx79"}">I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]</p></div>
        <div class="${"mc-c-about__social-links svelte-1ephx79"}">${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      href: "https://github.com/milkcee12",
      color: "tech",
      name: "Github",
      arrowColor: "white",
      newTab: "true"
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
      newTab: "true"
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
      newTab: "true"
    },
    {},
    {}
  )}</div></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
