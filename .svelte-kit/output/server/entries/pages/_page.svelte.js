import { c as create_ssr_component, e as escape, i as null_to_empty, j as add_attribute, v as validate_component, k as each } from "../../chunks/index.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/footer.js";
const arrowLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".text-tech.svelte-1ah4ixb.svelte-1ah4ixb{color:#FF3062}.text-art.svelte-1ah4ixb.svelte-1ah4ixb{color:#12E599}.text-muted.svelte-1ah4ixb.svelte-1ah4ixb{color:#C3C3C3}@media(max-width: 992px){p.svelte-1ah4ixb.svelte-1ah4ixb,p.svelte-1ah4ixb a.svelte-1ah4ixb{font-size:0.9rem}}.svelte-1ah4ixb.svelte-1ah4ixb::-webkit-scrollbar,.svelte-1ah4ixb.svelte-1ah4ixb::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1ah4ixb.svelte-1ah4ixb::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.arrow-link.svelte-1ah4ixb a.svelte-1ah4ixb{display:flex;align-items:center}",
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
  return `<p class="${"arrow-link svelte-1ah4ixb"}"><a class="${escape(null_to_empty(`text-${color}`), true) + " svelte-1ah4ixb"}"${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : "", 0)}>${escape(name)} ${validate_component(Icon, "Icon").$$render(
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
  code: `.text-tech.svelte-1sovuj0.svelte-1sovuj0{color:#FF3062}.text-art.svelte-1sovuj0.svelte-1sovuj0{color:#12E599}.text-muted.svelte-1sovuj0.svelte-1sovuj0{color:#C3C3C3}@media(max-width: 992px){p.svelte-1sovuj0.svelte-1sovuj0,li.svelte-1sovuj0.svelte-1sovuj0{font-size:0.9rem}h3.svelte-1sovuj0.svelte-1sovuj0{font-size:1.3rem !important}}.svelte-1sovuj0.svelte-1sovuj0::-webkit-scrollbar,.svelte-1sovuj0.svelte-1sovuj0::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1sovuj0.svelte-1sovuj0::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.block.svelte-1sovuj0.svelte-1sovuj0{display:flex}.block.svelte-1sovuj0 .vl.svelte-1sovuj0::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.block.svelte-1sovuj0:first-child .vl.svelte-1sovuj0{margin-top:3em}.block.svelte-1sovuj0:first-child .vl.svelte-1sovuj0::before{margin-top:0}.block.svelte-1sovuj0:last-child .vl.svelte-1sovuj0::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}.block.even.svelte-1sovuj0.svelte-1sovuj0{flex-flow:row-reverse}.block.even.svelte-1sovuj0 .col.svelte-1sovuj0{justify-content:flex-end}.block.even.svelte-1sovuj0 .col.col-content.svelte-1sovuj0::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}.block.odd.svelte-1sovuj0 .col.col-content.svelte-1sovuj0::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}.block.svelte-1sovuj0 .col.svelte-1sovuj0{flex:1;padding-bottom:5em;display:flex;align-items:center}.block.svelte-1sovuj0 .content.svelte-1sovuj0{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.block.svelte-1sovuj0 .content p.svelte-1sovuj0{color:#C3C3C3}.block.svelte-1sovuj0 .tags.svelte-1sovuj0{display:flex;align-self:center;margin-bottom:8em}.block.svelte-1sovuj0 .tags ul.svelte-1sovuj0{display:flex;flex-flow:column;padding:0}.block.svelte-1sovuj0 .tags li.svelte-1sovuj0{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.block.svelte-1sovuj0 .tags .tag-tech.svelte-1sovuj0{border-color:#FF3062}.block.svelte-1sovuj0 .tags .tag-art.svelte-1sovuj0{border-color:#12E599}.block.svelte-1sovuj0 .vl.svelte-1sovuj0{width:3px;background-color:#FFFFFF;margin:0 5em}@media(max-width: 992px){.block.svelte-1sovuj0 .vl.svelte-1sovuj0{margin:0 3em}.block.svelte-1sovuj0 .tags.svelte-1sovuj0{margin-bottom:6em}.block.svelte-1sovuj0 .tags li.svelte-1sovuj0{font-size:0.9rem}}@media(max-width: 768px){.block.svelte-1sovuj0.svelte-1sovuj0{margin:0}.block.svelte-1sovuj0 .vl.svelte-1sovuj0{order:-1;margin:0 3em 0}.block.odd.svelte-1sovuj0.svelte-1sovuj0,.block.even.svelte-1sovuj0.svelte-1sovuj0{flex-direction:row}.block.odd.svelte-1sovuj0 .col.svelte-1sovuj0,.block.even.svelte-1sovuj0 .col.svelte-1sovuj0{justify-content:flex-start}.block.odd.svelte-1sovuj0 .col.col-content.svelte-1sovuj0::after{content:none}.block.odd.svelte-1sovuj0 .col.col-content.svelte-1sovuj0::before,.block.even.svelte-1sovuj0 .col.col-content.svelte-1sovuj0::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}.block.svelte-1sovuj0 .col-content.svelte-1sovuj0{flex:3;font-size:0.8rem;margin-top:0.3em}.block.svelte-1sovuj0 .col-content .title.svelte-1sovuj0{font-size:1.1rem}.block.svelte-1sovuj0 .col-tags.svelte-1sovuj0{display:none}.block.svelte-1sovuj0 .vl.svelte-1sovuj0{margin-left:0;margin-right:1.5em}}`,
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
  return `<div class="${escape(null_to_empty(`block ${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-1sovuj0"}"><div class="${"col col-content svelte-1sovuj0"}"><div class="${"content svelte-1sovuj0"}"><h3 class="${"title svelte-1sovuj0"}">${escape(title)}</h3>
            <p class="${"date svelte-1sovuj0"}">${escape(date)}</p>
            <p class="${"blurb svelte-1sovuj0"}">${escape(blurb)}</p>
            ${validate_component(ArrowLink, "ArrowLink").$$render(
    $$result,
    {
      color: `text-${expandColor}`,
      href: expandHref + ",",
      name: expandName
    },
    {},
    {}
  )}</div></div>
    <div class="${"vl svelte-1sovuj0"}"></div>
    <div class="${"col col-tags svelte-1sovuj0"}"><div class="${"tags svelte-1sovuj0"}"><ul class="${"svelte-1sovuj0"}">${each(tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-1sovuj0"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".text-muted.svelte-mn94ng.svelte-mn94ng{color:#C3C3C3}@media(max-width: 992px){p.svelte-mn94ng.svelte-mn94ng,p.svelte-mn94ng a.svelte-mn94ng{font-size:0.9rem}h2.svelte-mn94ng.svelte-mn94ng{font-size:1.8rem !important}}.svelte-mn94ng.svelte-mn94ng::-webkit-scrollbar,.svelte-mn94ng.svelte-mn94ng::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-mn94ng.svelte-mn94ng::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.hero.svelte-mn94ng.svelte-mn94ng{overflow-x:hidden;height:48em;display:flex}section.hero.svelte-mn94ng .block.svelte-mn94ng{flex:1}section.hero.svelte-mn94ng .right.svelte-mn94ng{background-color:#12E599}section.hero.svelte-mn94ng img.svelte-mn94ng{position:absolute;pointer-events:none}section.hero.svelte-mn94ng img.hero-sig.svelte-mn94ng{width:85em;left:calc(50% - 32em);top:-10em}section.hero.svelte-mn94ng img.hero-figure.svelte-mn94ng{width:36em;height:auto;top:2em;left:calc(50% - 15em)}section.hero.svelte-mn94ng .explore.svelte-mn94ng{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-mn94ng .explore p.svelte-mn94ng{flex-grow:0;padding-right:1em}section.hero.svelte-mn94ng .explore .line.svelte-mn94ng{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-mn94ng h2.svelte-mn94ng{font-size:2.2rem;padding-right:1em}.container.svelte-mn94ng .title.svelte-mn94ng{display:flex;align-items:center}.container.svelte-mn94ng .title h2.svelte-mn94ng{flex-basis:content}.container.svelte-mn94ng section.svelte-mn94ng{padding-bottom:8em}.container.svelte-mn94ng .social-links.svelte-mn94ng{display:flex}.timeline.svelte-mn94ng.svelte-mn94ng{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 992px){section.hero.svelte-mn94ng.svelte-mn94ng{height:40em}section.hero.svelte-mn94ng img.hero-sig.svelte-mn94ng{width:60em;left:calc(50% - 20em);top:-10em}section.hero.svelte-mn94ng img.hero-figure.svelte-mn94ng{width:30em;height:auto;top:2em;left:calc(50% - 13em)}section.hero.svelte-mn94ng .explore.svelte-mn94ng{margin-top:32em}.container.svelte-mn94ng.svelte-mn94ng{margin:3em 2em 0}.timeline.svelte-mn94ng.svelte-mn94ng{width:100%;margin-top:1em}}@media(max-width: 768px){section.hero.svelte-mn94ng.svelte-mn94ng{width:100%;height:36em}section.hero.svelte-mn94ng img.hero-sig.svelte-mn94ng{width:40em;left:calc(50% - 15em);top:-2em}section.hero.svelte-mn94ng img.hero-figure.svelte-mn94ng{width:26em;height:auto;top:3em;left:calc(50% - 13em)}section.hero.svelte-mn94ng .explore.svelte-mn94ng{margin-left:-2em;margin-top:28em}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-mn94ng"}"><div class="${"block left svelte-mn94ng"}"></div>
    <div class="${"block right svelte-mn94ng"}"></div>
    <img class="${"hero-sig svelte-mn94ng"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-mn94ng"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-mn94ng"}"><p class="${"svelte-mn94ng"}">Explore</p>
        <div class="${"line svelte-mn94ng"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-mn94ng"}"><div class="${"title svelte-mn94ng"}"><h2 class="${"svelte-mn94ng"}">Featured Work</h2>
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
    <section class="${"timeline svelte-mn94ng"}">${each(Object.keys(data), (idx) => {
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
    
    <section class="${"svelte-mn94ng"}"><h2 class="${"svelte-mn94ng"}">Works</h2>
        <p class="${"svelte-mn94ng"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-mn94ng"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"about svelte-mn94ng"}"><h2 class="${"svelte-mn94ng"}">Hello World \u{1F44B}</h2>
        <div class="${"text-muted svelte-mn94ng"}"><p class="${"svelte-mn94ng"}">Hi, my name is Michaela. I also go by Milkcee on my art accounts.</p>
            <p class="${"svelte-mn94ng"}">I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]</p></div>
        <div class="${"social-links svelte-mn94ng"}">${validate_component(ArrowLink, "ArrowLink").$$render(
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
