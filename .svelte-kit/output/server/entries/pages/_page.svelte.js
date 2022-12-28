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
  code: `.text-tech.svelte-t4qupa.svelte-t4qupa{color:#FF3062}.text-art.svelte-t4qupa.svelte-t4qupa{color:#12E599}.text-muted.svelte-t4qupa.svelte-t4qupa{color:#C3C3C3}@media(max-width: 992px){p.svelte-t4qupa.svelte-t4qupa,li.svelte-t4qupa.svelte-t4qupa{font-size:0.9rem}h3.svelte-t4qupa.svelte-t4qupa{font-size:1.3rem !important}}.svelte-t4qupa.svelte-t4qupa::-webkit-scrollbar,.svelte-t4qupa.svelte-t4qupa::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-t4qupa.svelte-t4qupa::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.block.svelte-t4qupa.svelte-t4qupa{display:flex}.block.svelte-t4qupa .vl.svelte-t4qupa::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.block.svelte-t4qupa:first-child .vl.svelte-t4qupa{margin-top:3em}.block.svelte-t4qupa:first-child .vl.svelte-t4qupa::before{margin-top:0}.block.svelte-t4qupa:last-child .vl.svelte-t4qupa::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}.block.even.svelte-t4qupa.svelte-t4qupa{flex-flow:row-reverse}.block.even.svelte-t4qupa .col.svelte-t4qupa{justify-content:flex-end}.block.even.svelte-t4qupa .col.col-content.svelte-t4qupa::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}.block.odd.svelte-t4qupa .col.col-content.svelte-t4qupa::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}.block.svelte-t4qupa .col.svelte-t4qupa{flex:1;padding-bottom:5em;display:flex;align-items:center}.block.svelte-t4qupa .content.svelte-t4qupa{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.block.svelte-t4qupa .content p.svelte-t4qupa{color:#C3C3C3}.block.svelte-t4qupa .tags.svelte-t4qupa{display:flex;align-self:center;margin-bottom:8em}.block.svelte-t4qupa .tags ul.svelte-t4qupa{display:flex;flex-flow:column;padding:0}.block.svelte-t4qupa .tags li.svelte-t4qupa{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.block.svelte-t4qupa .tags .tag-tech.svelte-t4qupa{border-color:#FF3062}.block.svelte-t4qupa .tags .tag-art.svelte-t4qupa{border-color:#12E599}.block.svelte-t4qupa .vl.svelte-t4qupa{width:3px;background-color:#FFFFFF;margin:0 5em}@media(max-width: 992px){.block.svelte-t4qupa .vl.svelte-t4qupa{margin:0 4em}}@media(max-width: 768px){.block.svelte-t4qupa .vl.svelte-t4qupa{margin:0 3em}.block.svelte-t4qupa .tags.svelte-t4qupa{margin-bottom:6em}.block.svelte-t4qupa .tags li.svelte-t4qupa{font-size:0.9rem}}@media(max-width: 576px){.block.svelte-t4qupa.svelte-t4qupa{margin:0}.block.svelte-t4qupa .vl.svelte-t4qupa{order:-1;margin:0 3em 0}.block.odd.svelte-t4qupa.svelte-t4qupa,.block.even.svelte-t4qupa.svelte-t4qupa{flex-direction:row}.block.odd.svelte-t4qupa .col.svelte-t4qupa,.block.even.svelte-t4qupa .col.svelte-t4qupa{justify-content:flex-start}.block.odd.svelte-t4qupa .col.col-content.svelte-t4qupa::after{content:none}.block.odd.svelte-t4qupa .col.col-content.svelte-t4qupa::before,.block.even.svelte-t4qupa .col.col-content.svelte-t4qupa::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}.block.svelte-t4qupa .col-content.svelte-t4qupa{flex:3;font-size:0.8rem;margin-top:0.3em}.block.svelte-t4qupa .col-content .title.svelte-t4qupa{font-size:1.1rem}.block.svelte-t4qupa .col-tags.svelte-t4qupa{display:none}.block.svelte-t4qupa .vl.svelte-t4qupa{margin-left:0;margin-right:1.5em}}`,
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
  return `<div class="${escape(null_to_empty(`block ${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-t4qupa"}"><div class="${"col col-content svelte-t4qupa"}"><div class="${"content svelte-t4qupa"}"><h3 class="${"title svelte-t4qupa"}">${escape(title)}</h3>
            <p class="${"date svelte-t4qupa"}">${escape(date)}</p>
            <p class="${"blurb svelte-t4qupa"}">${escape(blurb)}</p>
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
    <div class="${"vl svelte-t4qupa"}"></div>
    <div class="${"col col-tags svelte-t4qupa"}"><div class="${"tags svelte-t4qupa"}"><ul class="${"svelte-t4qupa"}">${each(tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-t4qupa"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".text-muted.svelte-h1blv.svelte-h1blv{color:#C3C3C3}@media(max-width: 992px){p.svelte-h1blv.svelte-h1blv,p.svelte-h1blv a.svelte-h1blv{font-size:0.9rem}h2.svelte-h1blv.svelte-h1blv{font-size:1.8rem !important}}.svelte-h1blv.svelte-h1blv::-webkit-scrollbar,.svelte-h1blv.svelte-h1blv::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-h1blv.svelte-h1blv::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.hero.svelte-h1blv.svelte-h1blv{width:100%;height:48em;overflow-x:clip;display:flex}section.hero.svelte-h1blv .block.svelte-h1blv{flex:1}section.hero.svelte-h1blv .right.svelte-h1blv{background-color:#12E599}section.hero.svelte-h1blv img.svelte-h1blv{position:absolute;pointer-events:none}section.hero.svelte-h1blv img.hero-sig.svelte-h1blv{width:85em;left:calc(50% - 32em);top:-10em}section.hero.svelte-h1blv img.hero-figure.svelte-h1blv{width:36em;height:auto;top:2em;left:calc(50% - 15em)}section.hero.svelte-h1blv .explore.svelte-h1blv{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-h1blv .explore p.svelte-h1blv{flex-grow:0;padding-right:1em}section.hero.svelte-h1blv .explore .line.svelte-h1blv{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-h1blv h2.svelte-h1blv{font-size:2.2rem;padding-right:1em}.container.svelte-h1blv .title.svelte-h1blv{display:flex;align-items:center}.container.svelte-h1blv .title h2.svelte-h1blv{flex-basis:content}.container.svelte-h1blv section.svelte-h1blv{padding-bottom:8em}.container.svelte-h1blv .social-links.svelte-h1blv{display:flex}.timeline.svelte-h1blv.svelte-h1blv{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 992px){section.hero.svelte-h1blv.svelte-h1blv{height:40em}section.hero.svelte-h1blv img.hero-sig.svelte-h1blv{width:60em;left:calc(50% - 20em);top:-10em}section.hero.svelte-h1blv img.hero-figure.svelte-h1blv{width:30em;height:auto;top:2em;left:calc(50% - 13em)}section.hero.svelte-h1blv .explore.svelte-h1blv{margin-top:32em}.container.svelte-h1blv.svelte-h1blv{margin:3em 2em 0}.timeline.svelte-h1blv.svelte-h1blv{width:100%;margin-top:1em}}@media(max-width: 768px){section.hero.svelte-h1blv.svelte-h1blv{width:100%;height:36em}section.hero.svelte-h1blv img.hero-sig.svelte-h1blv{width:40em;left:calc(50% - 15em);top:-2em}section.hero.svelte-h1blv img.hero-figure.svelte-h1blv{width:26em;height:auto;top:3em;left:calc(50% - 13em)}section.hero.svelte-h1blv .explore.svelte-h1blv{margin-left:-2em;margin-top:28em}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-h1blv"}"><div class="${"block left svelte-h1blv"}"></div>
    <div class="${"block right svelte-h1blv"}"></div>
    <img class="${"hero-sig svelte-h1blv"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-h1blv"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-h1blv"}"><p class="${"svelte-h1blv"}">Explore</p>
        <div class="${"line svelte-h1blv"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-h1blv"}"><div class="${"title svelte-h1blv"}"><h2 class="${"svelte-h1blv"}">Featured Work</h2>
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
    <section class="${"timeline svelte-h1blv"}">${each(Object.keys(data), (idx) => {
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
    
    <section class="${"svelte-h1blv"}"><h2 class="${"svelte-h1blv"}">Works</h2>
        <p class="${"svelte-h1blv"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-h1blv"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"about svelte-h1blv"}"><h2 class="${"svelte-h1blv"}">Hello World \u{1F44B}</h2>
        <div class="${"text-muted svelte-h1blv"}"><p class="${"svelte-h1blv"}">Hi, my name is Michaela. I also go by Milkcee on my art accounts.</p>
            <p class="${"svelte-h1blv"}">I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]</p></div>
        <div class="${"social-links svelte-h1blv"}">${validate_component(ArrowLink, "ArrowLink").$$render(
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
