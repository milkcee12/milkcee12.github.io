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
  code: `.text-tech.svelte-uk4qsu.svelte-uk4qsu{color:#FF3062}.text-art.svelte-uk4qsu.svelte-uk4qsu{color:#12E599}@media(max-width: 992px){p.svelte-uk4qsu.svelte-uk4qsu,li.svelte-uk4qsu.svelte-uk4qsu{font-size:0.9rem}h3.svelte-uk4qsu.svelte-uk4qsu{font-size:1.3rem !important}}.svelte-uk4qsu.svelte-uk4qsu::-webkit-scrollbar,.svelte-uk4qsu.svelte-uk4qsu::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-uk4qsu.svelte-uk4qsu::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.block.svelte-uk4qsu.svelte-uk4qsu{display:flex}.block.svelte-uk4qsu .vl.svelte-uk4qsu::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.block.svelte-uk4qsu:first-child .vl.svelte-uk4qsu{margin-top:3em}.block.svelte-uk4qsu:first-child .vl.svelte-uk4qsu::before{margin-top:0}.block.svelte-uk4qsu:last-child .vl.svelte-uk4qsu::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}.block.even.svelte-uk4qsu.svelte-uk4qsu{flex-flow:row-reverse}.block.even.svelte-uk4qsu .col.svelte-uk4qsu{justify-content:flex-end}.block.even.svelte-uk4qsu .col.col-content.svelte-uk4qsu::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}.block.odd.svelte-uk4qsu .col.col-content.svelte-uk4qsu::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}.block.svelte-uk4qsu .col.svelte-uk4qsu{flex:1;padding-bottom:5em;display:flex;align-items:center}.block.svelte-uk4qsu .content.svelte-uk4qsu{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.block.svelte-uk4qsu .content p.svelte-uk4qsu{color:#C3C3C3}.block.svelte-uk4qsu .tags.svelte-uk4qsu{display:flex;align-self:center;margin-bottom:8em}.block.svelte-uk4qsu .tags ul.svelte-uk4qsu{display:flex;flex-flow:column;padding:0}.block.svelte-uk4qsu .tags li.svelte-uk4qsu{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.block.svelte-uk4qsu .tags .tag-tech.svelte-uk4qsu{border-color:#FF3062}.block.svelte-uk4qsu .tags .tag-art.svelte-uk4qsu{border-color:#12E599}.block.svelte-uk4qsu .vl.svelte-uk4qsu{width:3px;background-color:#FFFFFF;margin:0 5em}@media(max-width: 992px){.block.svelte-uk4qsu .vl.svelte-uk4qsu{margin:0 3em}.block.svelte-uk4qsu .tags.svelte-uk4qsu{margin-bottom:6em}.block.svelte-uk4qsu .tags li.svelte-uk4qsu{font-size:0.9rem}}@media(max-width: 768px){.block.svelte-uk4qsu.svelte-uk4qsu{margin:0}.block.svelte-uk4qsu .vl.svelte-uk4qsu{order:-1;margin:0 3em 0}.block.odd.svelte-uk4qsu.svelte-uk4qsu,.block.even.svelte-uk4qsu.svelte-uk4qsu{flex-direction:row}.block.odd.svelte-uk4qsu .col.svelte-uk4qsu,.block.even.svelte-uk4qsu .col.svelte-uk4qsu{justify-content:flex-start}.block.odd.svelte-uk4qsu .col.col-content.svelte-uk4qsu::after{content:none}.block.odd.svelte-uk4qsu .col.col-content.svelte-uk4qsu::before,.block.even.svelte-uk4qsu .col.col-content.svelte-uk4qsu::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}.block.svelte-uk4qsu .col-content.svelte-uk4qsu{flex:3;font-size:0.8rem;margin-top:0.3em}.block.svelte-uk4qsu .col-content .title.svelte-uk4qsu{font-size:1.1rem}.block.svelte-uk4qsu .col-tags.svelte-uk4qsu{display:none}.block.svelte-uk4qsu .vl.svelte-uk4qsu{margin-left:0;margin-right:1.5em}}`,
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
  return `<div class="${escape(null_to_empty(`block ${id % 2 === 0 ? "even" : "odd"}`), true) + " svelte-uk4qsu"}"><div class="${"col col-content svelte-uk4qsu"}"><div class="${"content svelte-uk4qsu"}"><h3 class="${"title svelte-uk4qsu"}">${escape(title)}</h3>
            <p class="${"date svelte-uk4qsu"}">${escape(date)}</p>
            <p class="${"blurb svelte-uk4qsu"}">${escape(blurb)}</p>
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
    <div class="${"vl svelte-uk4qsu"}"></div>
    <div class="${"col col-tags svelte-uk4qsu"}"><div class="${"tags svelte-uk4qsu"}"><ul class="${"svelte-uk4qsu"}">${each(tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.tags.type.name}`), true) + " svelte-uk4qsu"}">${escape(tag.tags.name)}</li>`;
  })}</ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 992px){p.svelte-18y1amk.svelte-18y1amk,p.svelte-18y1amk a.svelte-18y1amk{font-size:0.9rem}h2.svelte-18y1amk.svelte-18y1amk{font-size:1.8rem !important}}.svelte-18y1amk.svelte-18y1amk::-webkit-scrollbar,.svelte-18y1amk.svelte-18y1amk::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-18y1amk.svelte-18y1amk::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.hero.svelte-18y1amk.svelte-18y1amk{overflow-x:hidden;height:48em;display:flex}section.hero.svelte-18y1amk .block.svelte-18y1amk{flex:1}section.hero.svelte-18y1amk .right.svelte-18y1amk{background-color:#12E599}section.hero.svelte-18y1amk img.svelte-18y1amk{position:absolute;pointer-events:none}section.hero.svelte-18y1amk img.hero-sig.svelte-18y1amk{width:85em;left:calc(50% - 32em);top:-10em}section.hero.svelte-18y1amk img.hero-figure.svelte-18y1amk{width:36em;height:auto;top:2em;left:calc(50% - 15em)}section.hero.svelte-18y1amk .explore.svelte-18y1amk{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-18y1amk .explore p.svelte-18y1amk{flex-grow:0;padding-right:1em}section.hero.svelte-18y1amk .explore .line.svelte-18y1amk{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-18y1amk h2.svelte-18y1amk{font-size:2.2rem;padding-right:1em}.container.svelte-18y1amk .title.svelte-18y1amk{display:flex;align-items:center}.container.svelte-18y1amk .title h2.svelte-18y1amk{flex-basis:content}.container.svelte-18y1amk section.svelte-18y1amk{padding-bottom:8em}.timeline.svelte-18y1amk.svelte-18y1amk{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}@media(max-width: 992px){section.hero.svelte-18y1amk.svelte-18y1amk{height:40em}section.hero.svelte-18y1amk img.hero-sig.svelte-18y1amk{width:60em;left:calc(50% - 20em);top:-10em}section.hero.svelte-18y1amk img.hero-figure.svelte-18y1amk{width:30em;height:auto;top:2em;left:calc(50% - 13em)}section.hero.svelte-18y1amk .explore.svelte-18y1amk{margin-top:32em}.container.svelte-18y1amk.svelte-18y1amk{margin:3em 2em 0}.timeline.svelte-18y1amk.svelte-18y1amk{width:100%;margin-top:1em}}@media(max-width: 768px){section.hero.svelte-18y1amk.svelte-18y1amk{width:100%;height:36em}section.hero.svelte-18y1amk img.hero-sig.svelte-18y1amk{width:40em;left:calc(50% - 15em);top:-2em}section.hero.svelte-18y1amk img.hero-figure.svelte-18y1amk{width:26em;height:auto;top:3em;left:calc(50% - 13em)}section.hero.svelte-18y1amk .explore.svelte-18y1amk{margin-left:-2em;margin-top:28em}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-18y1amk"}"><div class="${"block left svelte-18y1amk"}"></div>
    <div class="${"block right svelte-18y1amk"}"></div>
    <img class="${"hero-sig svelte-18y1amk"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-18y1amk"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-18y1amk"}"><p class="${"svelte-18y1amk"}">Explore</p>
        <div class="${"line svelte-18y1amk"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-18y1amk"}"><div class="${"title svelte-18y1amk"}"><h2 class="${"svelte-18y1amk"}">Featured Work</h2>
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
    <section class="${"timeline svelte-18y1amk"}">${each(Object.keys(data), (idx) => {
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
  })}
        </section>
    
    <section class="${"svelte-18y1amk"}"><h2 class="${"svelte-18y1amk"}">Works</h2>
        <p class="${"svelte-18y1amk"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-18y1amk"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-18y1amk"}"><h2 class="${"svelte-18y1amk"}">Hello World \u{1F44B}</h2>
        <p class="${"svelte-18y1amk"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-18y1amk"}">kit.svelte.dev</a> to read the documentation</p></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
