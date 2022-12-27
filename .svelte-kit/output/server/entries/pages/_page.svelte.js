import { c as create_ssr_component, e as escape, i as null_to_empty, j as add_attribute, v as validate_component, k as each } from "../../chunks/index.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/footer.js";
const arrowLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".text-tech.svelte-koiqe3.svelte-koiqe3{color:#FF3062}.text-art.svelte-koiqe3.svelte-koiqe3{color:#12E599}@media(max-width: 992px){p.svelte-koiqe3.svelte-koiqe3,p.svelte-koiqe3 a.svelte-koiqe3{font-size:0.9rem}}.svelte-koiqe3.svelte-koiqe3::-webkit-scrollbar,.svelte-koiqe3.svelte-koiqe3::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-koiqe3.svelte-koiqe3::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.arrow-link.svelte-koiqe3 a.svelte-koiqe3{display:flex;justify-content:flex-end;align-items:center}",
  map: null
};
const ArrowLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href, name, color } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  return `<p class="${"arrow-link svelte-koiqe3"}"><a class="${escape(null_to_empty(color), true) + " svelte-koiqe3"}"${add_attribute("href", href, 0)}>${escape(name)} ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "radix-icons:triangle-right",
      width: "20",
      height: "20"
    },
    {},
    {}
  )}</a></p>`;
});
const timelineElem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.text-tech.svelte-6upgsg.svelte-6upgsg{color:#FF3062}.text-art.svelte-6upgsg.svelte-6upgsg{color:#12E599}@media(max-width: 992px){p.svelte-6upgsg.svelte-6upgsg,li.svelte-6upgsg.svelte-6upgsg{font-size:0.9rem}h3.svelte-6upgsg.svelte-6upgsg{font-size:1.3rem !important}}.svelte-6upgsg.svelte-6upgsg::-webkit-scrollbar,.svelte-6upgsg.svelte-6upgsg::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-6upgsg.svelte-6upgsg::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.block.svelte-6upgsg.svelte-6upgsg{display:flex}.block.svelte-6upgsg .vl.svelte-6upgsg::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.block.svelte-6upgsg:first-child .vl.svelte-6upgsg{margin-top:3em}.block.svelte-6upgsg:first-child .vl.svelte-6upgsg::before{margin-top:0}.block.svelte-6upgsg:last-child .vl.svelte-6upgsg::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}.block.odd.svelte-6upgsg.svelte-6upgsg{flex-flow:row-reverse}.block.svelte-6upgsg .col.svelte-6upgsg{flex:1;padding-bottom:5em;display:flex;align-items:center}.block.svelte-6upgsg .content.svelte-6upgsg{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.block.svelte-6upgsg .content p.svelte-6upgsg{color:#C3C3C3}.block.svelte-6upgsg .tags.svelte-6upgsg{display:flex;align-self:center;margin-bottom:8em}.block.svelte-6upgsg .tags ul.svelte-6upgsg{display:flex;flex-flow:column;padding:0}.block.svelte-6upgsg .tags li.svelte-6upgsg{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.block.svelte-6upgsg .tags .tag-tech.svelte-6upgsg{border-color:#FF3062}.block.svelte-6upgsg .tags .tag-art.svelte-6upgsg{border-color:#12E599}.block.svelte-6upgsg .vl.svelte-6upgsg{width:3px;background-color:#FFFFFF;margin:0 5em}.block.svelte-6upgsg:last-child .vl.svelte-6upgsg::after{top:calc(100% - 3.25em)}@media(max-width: 992px){.block.svelte-6upgsg .vl.svelte-6upgsg{margin:0 3em}.block.svelte-6upgsg .tags.svelte-6upgsg{margin-bottom:6em}.block.svelte-6upgsg .tags li.svelte-6upgsg{font-size:0.9rem}}@media(max-width: 768px){.block.svelte-6upgsg.svelte-6upgsg{margin:0}.block.svelte-6upgsg .vl.svelte-6upgsg{order:-1;margin:0 3em 0}.block.odd.svelte-6upgsg.svelte-6upgsg,.block.even.svelte-6upgsg.svelte-6upgsg{flex-direction:row}.block.svelte-6upgsg .col-content.svelte-6upgsg{flex:3;font-size:0.9rem;margin-top:0.3em}.block.svelte-6upgsg .col-content .title.svelte-6upgsg{font-size:1.2rem}.block.svelte-6upgsg .tags.svelte-6upgsg{margin-left:2em;margin-bottom:4em}.block.svelte-6upgsg .vl.svelte-6upgsg{margin-left:0;margin-right:1.5em}}`,
  map: null
};
const TimelineElem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id: id2, title, date, blurb, expandName, expandHref, expandColor, tags } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id2 !== void 0)
    $$bindings.id(id2);
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
  return `<div class="${"block $" + escape(id2 % 2 === 0 ? "even" : "odd", true) + " svelte-6upgsg"}"><div class="${"col col-content svelte-6upgsg"}"><div class="${"content svelte-6upgsg"}"><h3 class="${"title svelte-6upgsg"}">${escape(title)}</h3>
            <p class="${"date svelte-6upgsg"}">${escape(date)}</p>
            <p class="${"blurb svelte-6upgsg"}">${escape(blurb)}</p>
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
    <div class="${"vl svelte-6upgsg"}"></div>
    <div class="${"col svelte-6upgsg"}"><div class="${"tags svelte-6upgsg"}"><ul class="${"svelte-6upgsg"}">${each(tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-6upgsg"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 992px){p.svelte-n47lnz.svelte-n47lnz,p.svelte-n47lnz a.svelte-n47lnz{font-size:0.9rem}h2.svelte-n47lnz.svelte-n47lnz{font-size:1.8rem !important}}.svelte-n47lnz.svelte-n47lnz::-webkit-scrollbar,.svelte-n47lnz.svelte-n47lnz::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-n47lnz.svelte-n47lnz::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.hero.svelte-n47lnz.svelte-n47lnz{overflow-x:hidden;height:48em;display:flex}section.hero.svelte-n47lnz .block.svelte-n47lnz{flex:1}section.hero.svelte-n47lnz .right.svelte-n47lnz{background-color:#12E599}section.hero.svelte-n47lnz img.svelte-n47lnz{position:absolute;pointer-events:none}section.hero.svelte-n47lnz img.hero-sig.svelte-n47lnz{width:85em;left:calc(50% - 32em);top:-10em}section.hero.svelte-n47lnz img.hero-figure.svelte-n47lnz{width:36em;height:auto;top:2em;left:calc(50% - 15em)}section.hero.svelte-n47lnz .explore.svelte-n47lnz{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-n47lnz .explore p.svelte-n47lnz{flex-grow:0;padding-right:1em}section.hero.svelte-n47lnz .explore .line.svelte-n47lnz{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-n47lnz h2.svelte-n47lnz{font-size:2.2rem;padding-right:1em}.container.svelte-n47lnz .title.svelte-n47lnz{display:flex;align-items:center}.container.svelte-n47lnz section.svelte-n47lnz{padding-bottom:8em}.timeline.svelte-n47lnz.svelte-n47lnz{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 992px){section.hero.svelte-n47lnz.svelte-n47lnz{height:40em}section.hero.svelte-n47lnz img.hero-sig.svelte-n47lnz{width:60em;left:calc(50% - 20em);top:-10em}section.hero.svelte-n47lnz img.hero-figure.svelte-n47lnz{width:30em;height:auto;top:2em;left:calc(50% - 13em)}section.hero.svelte-n47lnz .explore.svelte-n47lnz{margin-top:32em}.container.svelte-n47lnz.svelte-n47lnz{margin:3em 2em 0}.container.svelte-n47lnz .title h2.svelte-n47lnz{flex:1}.timeline.svelte-n47lnz.svelte-n47lnz{width:100%;margin-top:1em}}@media(max-width: 768px){section.hero.svelte-n47lnz.svelte-n47lnz{width:100%;height:36em}section.hero.svelte-n47lnz img.hero-sig.svelte-n47lnz{width:40em;left:calc(50% - 15em);top:-2em}section.hero.svelte-n47lnz img.hero-figure.svelte-n47lnz{width:26em;height:auto;top:3em;left:calc(50% - 13em)}section.hero.svelte-n47lnz .explore.svelte-n47lnz{margin-left:-2em;margin-top:28em}}",
  map: null
};
let id = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-n47lnz"}"><div class="${"block left svelte-n47lnz"}"></div>
    <div class="${"block right svelte-n47lnz"}"></div>
    <img class="${"hero-sig svelte-n47lnz"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-n47lnz"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-n47lnz"}"><p class="${"svelte-n47lnz"}">Explore</p>
        <div class="${"line svelte-n47lnz"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-n47lnz"}"><div class="${"title svelte-n47lnz"}"><h2 class="${"svelte-n47lnz"}">Featured Work</h2>
        <p class="${"svelte-n47lnz"}"><a href="${"/work"}" class="${"svelte-n47lnz"}">See all ${validate_component(Icon, "Icon").$$render($$result, { icon: "radix-icons:triangle-right" }, {}, {})}</a></p></div>
    <section class="${"timeline svelte-n47lnz"}">${each(Object.keys(data), (idx) => {
    return `${validate_component(TimelineElem, "TimelineElem").$$render(
      $$result,
      {
        id: ++id,
        title: data[idx].title,
        date: data[idx].end_yr === null ? `${data[idx].start_yr}` : `${data[idx].start_yr} to ${data[idx].end_yr}`,
        blurb: data[idx].blurb,
        expandName: data[idx].see_more,
        expandColor: data[idx].project_type.name,
        expandHref: "#",
        tags: data[idx].tags
      },
      {},
      {}
    )}`;
  })}
        </section>
    
    <section class="${"svelte-n47lnz"}"><h2 class="${"svelte-n47lnz"}">Works</h2>
        <p class="${"svelte-n47lnz"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-n47lnz"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-n47lnz"}"><h2 class="${"svelte-n47lnz"}">Hello World \u{1F44B}</h2>
        <p class="${"svelte-n47lnz"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-n47lnz"}">kit.svelte.dev</a> to read the documentation</p></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
