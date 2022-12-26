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
  code: `.text-tech.svelte-1sn9iot.svelte-1sn9iot{color:#FF3062}.text-art.svelte-1sn9iot.svelte-1sn9iot{color:#12E599}@media(max-width: 992px){p.svelte-1sn9iot.svelte-1sn9iot,li.svelte-1sn9iot.svelte-1sn9iot{font-size:0.9rem}h3.svelte-1sn9iot.svelte-1sn9iot{font-size:1.3rem !important}}.svelte-1sn9iot.svelte-1sn9iot::-webkit-scrollbar,.svelte-1sn9iot.svelte-1sn9iot::-webkit-scrollbar-thumb{width:15px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-1sn9iot.svelte-1sn9iot::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.block.svelte-1sn9iot.svelte-1sn9iot{display:flex}.block.svelte-1sn9iot .vl.svelte-1sn9iot::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;margin-top:3em;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.block.svelte-1sn9iot:first-child .vl.svelte-1sn9iot{margin-top:3em}.block.svelte-1sn9iot:first-child .vl.svelte-1sn9iot::before{margin-top:0}.block.svelte-1sn9iot:last-child .vl.svelte-1sn9iot::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 6.25em)}.block.odd.svelte-1sn9iot.svelte-1sn9iot{flex-flow:row-reverse}.block.odd.svelte-1sn9iot .col.svelte-1sn9iot{justify-content:flex-end}.block.odd.svelte-1sn9iot .col.col-content.svelte-1sn9iot::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}.block.even.svelte-1sn9iot .col.col-content.svelte-1sn9iot::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}.block.svelte-1sn9iot .col.svelte-1sn9iot{flex:1;padding-bottom:5em;display:flex;align-items:center}.block.svelte-1sn9iot .content.svelte-1sn9iot{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.block.svelte-1sn9iot .content p.svelte-1sn9iot{color:#C3C3C3}.block.svelte-1sn9iot .tags.svelte-1sn9iot{display:flex;align-self:center;margin-bottom:8em}.block.svelte-1sn9iot .tags ul.svelte-1sn9iot{display:flex;flex-flow:column;padding:0}.block.svelte-1sn9iot .tags li.svelte-1sn9iot{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.block.svelte-1sn9iot .tags .tag-tech.svelte-1sn9iot{border-color:#FF3062}.block.svelte-1sn9iot .tags .tag-art.svelte-1sn9iot{border-color:#12E599}.block.svelte-1sn9iot .vl.svelte-1sn9iot{width:3px;background-color:#FFFFFF;margin:0 5em}@media(max-width: 992px){.block.svelte-1sn9iot .vl.svelte-1sn9iot{margin:0 3em}.block.svelte-1sn9iot .tags.svelte-1sn9iot{margin-bottom:6em}.block.svelte-1sn9iot .tags li.svelte-1sn9iot{font-size:0.9rem}}@media(max-width: 768px){.block.svelte-1sn9iot.svelte-1sn9iot{margin:0}.block.svelte-1sn9iot .vl.svelte-1sn9iot{order:-1;margin:0 3em 0}.block.odd.svelte-1sn9iot.svelte-1sn9iot,.block.even.svelte-1sn9iot.svelte-1sn9iot{flex-direction:row}.block.odd.svelte-1sn9iot .col.svelte-1sn9iot,.block.even.svelte-1sn9iot .col.svelte-1sn9iot{justify-content:flex-start}.block.even.svelte-1sn9iot .col.col-content.svelte-1sn9iot::after{content:none}.block.even.svelte-1sn9iot .col.col-content.svelte-1sn9iot::before,.block.odd.svelte-1sn9iot .col.col-content.svelte-1sn9iot::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-5px}.block.svelte-1sn9iot .col-content.svelte-1sn9iot{flex:3;font-size:0.9rem;margin-top:0.3em}.block.svelte-1sn9iot .col-content .title.svelte-1sn9iot{font-size:1.2rem}.block.svelte-1sn9iot .tags.svelte-1sn9iot{margin-left:2em;margin-bottom:4em}.block.svelte-1sn9iot .vl.svelte-1sn9iot{margin-left:0;margin-right:1.5em}}`,
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
  return `<div class="${"block " + escape(id2 % 2 === 0 ? "even" : "odd", true) + " svelte-1sn9iot"}"><div class="${"col col-content svelte-1sn9iot"}"><div class="${"content svelte-1sn9iot"}"><h3 class="${"title svelte-1sn9iot"}">${escape(title)}</h3>
            <p class="${"date svelte-1sn9iot"}">${escape(date)}</p>
            <p class="${"blurb svelte-1sn9iot"}">${escape(blurb)}</p>
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
    <div class="${"vl svelte-1sn9iot"}"></div>
    <div class="${"col svelte-1sn9iot"}"><div class="${"tags svelte-1sn9iot"}"><ul class="${"svelte-1sn9iot"}">${each(tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.type}`), true) + " svelte-1sn9iot"}">${escape(tag.name)}</li>`;
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
    <section class="${"timeline svelte-n47lnz"}">${validate_component(TimelineElem, "TimelineElem").$$render(
    $$result,
    {
      id: ++id,
      title: "Milkcee Studios",
      date: "2022",
      blurb: "Designed my portfolio website. Implemented using SvelteKit and MySQL.",
      expandName: "View the creation process",
      expandHref: "#",
      expandColor: "text-art",
      tags: [
        { name: "Front-End", type: "tech" },
        { name: "Back-End", type: "tech" },
        { name: "UI/UX", type: "art" }
      ]
    },
    {},
    {}
  )}

        ${validate_component(TimelineElem, "TimelineElem").$$render(
    $$result,
    {
      id: ++id,
      title: "Trojan Dining",
      date: "2021 - Present",
      blurb: "Student-first redesign of the USC Residential Dining Menu website. Implemented using React.js.",
      expandName: "View case study",
      expandHref: "#",
      expandColor: "text-tech",
      tags: [{ name: "Front-End", type: "tech" }, { name: "UI/UX", type: "art" }]
    },
    {},
    {}
  )}</section>
    
    <section class="${"svelte-n47lnz"}"><h2 class="${"svelte-n47lnz"}">Works</h2>
        <p class="${"svelte-n47lnz"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-n47lnz"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-n47lnz"}"><h2 class="${"svelte-n47lnz"}">Hello World \u{1F44B}</h2>
        <p class="${"svelte-n47lnz"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-n47lnz"}">kit.svelte.dev</a> to read the documentation</p></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
