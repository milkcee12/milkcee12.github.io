import { c as create_ssr_component, e as escape, i as add_attribute, v as validate_component, j as each, k as null_to_empty } from "../../chunks/index.js";
import { I as Icon, N as Navbar, F as Footer } from "../../chunks/footer.js";
const timelineElem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.text-tech.svelte-n0kkv5.svelte-n0kkv5{color:#FF3062}.text-art.svelte-n0kkv5.svelte-n0kkv5{color:#12E599}.svelte-n0kkv5.svelte-n0kkv5::-webkit-scrollbar,.svelte-n0kkv5.svelte-n0kkv5::-webkit-scrollbar-thumb{width:18px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-n0kkv5.svelte-n0kkv5::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}.block.svelte-n0kkv5.svelte-n0kkv5{display:flex}.block.svelte-n0kkv5 .vl.svelte-n0kkv5::before{content:"";z-index:10;display:block;position:relative;width:15px;height:15px;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;right:0.5em}.block.svelte-n0kkv5:first-child .vl.svelte-n0kkv5{margin-top:3em}.block.svelte-n0kkv5:last-child .vl.svelte-n0kkv5::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 3.25em)}.block.odd.svelte-n0kkv5.svelte-n0kkv5{flex-flow:row-reverse}.block.odd.svelte-n0kkv5 .col.svelte-n0kkv5{justify-content:flex-end}.block.odd.svelte-n0kkv5 .col.col-content.svelte-n0kkv5::before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}.block.even.svelte-n0kkv5 .col.col-content.svelte-n0kkv5::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}.block.svelte-n0kkv5 .col.svelte-n0kkv5{flex:1;padding-bottom:5em;display:flex;align-items:center;width:100%}.block.svelte-n0kkv5 .title.svelte-n0kkv5{font-size:1.5rem}.block.svelte-n0kkv5 .content.svelte-n0kkv5{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.block.svelte-n0kkv5 .content p.svelte-n0kkv5{color:#C3C3C3}.block.svelte-n0kkv5 .content a.svelte-n0kkv5{display:flex;justify-content:flex-end;align-items:center}.block.svelte-n0kkv5 .tags.svelte-n0kkv5{display:flex;align-self:center;margin-bottom:8em}.block.svelte-n0kkv5 .tags ul.svelte-n0kkv5{display:flex;flex-flow:column;padding:0}.block.svelte-n0kkv5 .tags li.svelte-n0kkv5{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.block.svelte-n0kkv5 .tags .tag-tech.svelte-n0kkv5{border-color:#FF3062}.block.svelte-n0kkv5 .tags .tag-art.svelte-n0kkv5{border-color:#12E599}.block.svelte-n0kkv5 .vl.svelte-n0kkv5{width:3px;background-color:#FFFFFF;margin:0 5em}`,
  map: null
};
const TimelineElem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id: id2, title, date, blurb, expand, expandHref, tags } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id2 !== void 0)
    $$bindings.id(id2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.blurb === void 0 && $$bindings.blurb && blurb !== void 0)
    $$bindings.blurb(blurb);
  if ($$props.expand === void 0 && $$bindings.expand && expand !== void 0)
    $$bindings.expand(expand);
  if ($$props.expandHref === void 0 && $$bindings.expandHref && expandHref !== void 0)
    $$bindings.expandHref(expandHref);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$1);
  return `<div class="${"block " + escape(id2 % 2 === 0 ? "even" : "odd", true) + " svelte-n0kkv5"}"><div class="${"col col-content svelte-n0kkv5"}"><div class="${"content svelte-n0kkv5"}"><h3 class="${"title svelte-n0kkv5"}">${escape(title)}</h3>
            <p class="${"date svelte-n0kkv5"}">${escape(date)}</p>
            <p class="${"blurb svelte-n0kkv5"}">${escape(blurb)}</p>
            <p class="${"expand svelte-n0kkv5"}"><a${add_attribute("href", expandHref, 0)} class="${"svelte-n0kkv5"}">${escape(expand)} ${validate_component(Icon, "Icon").$$render($$result, { icon: "radix-icons:triangle-right" }, {}, {})}</a></p></div></div>

    <div class="${"vl svelte-n0kkv5"}"></div>

    <div class="${"col svelte-n0kkv5"}"><div class="${"tags svelte-n0kkv5"}"><ul class="${"svelte-n0kkv5"}">${each(tags, (tag) => {
    return `<li class="${escape(null_to_empty(`tag-${tag.type}`), true) + " svelte-n0kkv5"}">${escape(tag.name)}</li>`;
  })}
                </ul></div></div>
</div>`;
});
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-2hln8r.svelte-2hln8r::-webkit-scrollbar,.svelte-2hln8r.svelte-2hln8r::-webkit-scrollbar-thumb{width:18px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-2hln8r.svelte-2hln8r::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.hero.svelte-2hln8r.svelte-2hln8r{height:48em;display:flex}section.hero.svelte-2hln8r .block.svelte-2hln8r{flex:1}section.hero.svelte-2hln8r .right.svelte-2hln8r{background-color:#12E599}section.hero.svelte-2hln8r img.svelte-2hln8r{position:absolute;pointer-events:none}section.hero.svelte-2hln8r img.hero-sig.svelte-2hln8r{width:85em;left:50%;margin-left:-32em;margin-top:-10em}section.hero.svelte-2hln8r img.hero-figure.svelte-2hln8r{width:36em;height:auto;top:2em;left:50%;margin-left:-15em}section.hero.svelte-2hln8r .explore.svelte-2hln8r{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-2hln8r .explore p.svelte-2hln8r{flex-grow:0;padding-right:1em}section.hero.svelte-2hln8r .explore .line.svelte-2hln8r{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-2hln8r h2.svelte-2hln8r{font-size:2.2rem}.container.svelte-2hln8r section.svelte-2hln8r{padding-bottom:8em}.timeline.svelte-2hln8r.svelte-2hln8r{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}",
  map: null
};
let id = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-2hln8r"}"><div class="${"block left svelte-2hln8r"}"></div>
    <div class="${"block right svelte-2hln8r"}"></div>
    <img class="${"hero-sig svelte-2hln8r"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-2hln8r"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-2hln8r"}"><p class="${"svelte-2hln8r"}">Explore</p>
        <div class="${"line svelte-2hln8r"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-2hln8r"}"><h2 class="${"svelte-2hln8r"}">Featured Work</h2>
    <section class="${"timeline svelte-2hln8r"}">${validate_component(TimelineElem, "TimelineElem").$$render(
    $$result,
    {
      id: ++id,
      title: "Milkcee Studios",
      date: "2022",
      blurb: "Designed my portfolio website. Implemented using SvelteKit and MySQL.",
      expand: "View the creation process",
      expandHref: "#",
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
      expand: "View case study",
      expandHref: "#",
      tags: [{ name: "Front-End", type: "tech" }, { name: "UI/UX", type: "art" }]
    },
    {},
    {}
  )}</section>
    
    <section class="${"svelte-2hln8r"}"><h2 class="${"svelte-2hln8r"}">Works</h2>
        <p class="${"svelte-2hln8r"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-2hln8r"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-2hln8r"}"><h2 class="${"svelte-2hln8r"}">Hello World \u{1F44B}</h2>
        <p class="${"svelte-2hln8r"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-2hln8r"}">kit.svelte.dev</a> to read the documentation</p></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
