import { c as create_ssr_component, i as add_attribute, v as validate_component } from "../../chunks/index.js";
import { N as Navbar, I as Icon, F as Footer } from "../../chunks/footer.js";
const heroFigure = "/_app/immutable/assets/hero-figure-932cc342.png";
const heroSig = "/_app/immutable/assets/hero-signature-a659ed62.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `.text-tech.svelte-17dzgm7.svelte-17dzgm7{color:#FF3062}.svelte-17dzgm7.svelte-17dzgm7::-webkit-scrollbar,.svelte-17dzgm7.svelte-17dzgm7::-webkit-scrollbar-thumb{width:18px;border-radius:13px;background-clip:padding-box;border:6px solid transparent}.svelte-17dzgm7.svelte-17dzgm7::-webkit-scrollbar-thumb{box-shadow:inset 0 0 0 10px}section.hero.svelte-17dzgm7.svelte-17dzgm7{height:48em;display:flex}section.hero.svelte-17dzgm7 .block.svelte-17dzgm7{flex:1}section.hero.svelte-17dzgm7 .right.svelte-17dzgm7{background-color:#12E599}section.hero.svelte-17dzgm7 img.svelte-17dzgm7{position:absolute;pointer-events:none}section.hero.svelte-17dzgm7 img.hero-sig.svelte-17dzgm7{width:85em;left:50%;margin-left:-32em;margin-top:-10em}section.hero.svelte-17dzgm7 img.hero-figure.svelte-17dzgm7{width:36em;height:auto;top:2em;left:50%;margin-left:-15em}section.hero.svelte-17dzgm7 .explore.svelte-17dzgm7{position:absolute;display:flex;align-items:center;margin-top:38em;transform:rotate(90deg)}section.hero.svelte-17dzgm7 .explore p.svelte-17dzgm7{flex-grow:0;padding-right:1em}section.hero.svelte-17dzgm7 .explore .line.svelte-17dzgm7{width:4em;flex-grow:1;height:3px;background-color:#FF3062}.container.svelte-17dzgm7 h2.svelte-17dzgm7{font-size:2.2rem}.container.svelte-17dzgm7 section.svelte-17dzgm7{padding-bottom:8em}.timeline.svelte-17dzgm7.svelte-17dzgm7{width:80%;margin-top:5em;margin-left:auto;margin-right:auto}.timeline.svelte-17dzgm7 .block.svelte-17dzgm7{display:flex}.timeline.svelte-17dzgm7 .block.svelte-17dzgm7:after{content:"";position:absolute;width:15px;height:15px;background-color:#FFFFFF;border:3px solid #12E599;border-radius:50%;margin-top:3em;margin-left:auto;margin-right:auto;left:0;right:0;text-align:center}.timeline.svelte-17dzgm7 .block:first-child .vl.svelte-17dzgm7{margin-top:3em}.timeline.svelte-17dzgm7 .block:last-child .vl.svelte-17dzgm7::after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');position:relative;text-align:center;right:1em;top:calc(100% - 2em)}.timeline.svelte-17dzgm7 .block .col.svelte-17dzgm7{flex:1;padding-bottom:5em;display:flex;align-items:center}.timeline.svelte-17dzgm7 .block .col.flex-end.svelte-17dzgm7{justify-content:flex-end}.timeline.svelte-17dzgm7 .block .col.left-arrow.svelte-17dzgm7:before{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-right:-6px}.timeline.svelte-17dzgm7 .block .col.right-arrow.svelte-17dzgm7:after{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');align-self:flex-start;margin-top:2.7em;margin-left:-6px}.timeline.svelte-17dzgm7 .block .title.svelte-17dzgm7{font-size:1.5rem}.timeline.svelte-17dzgm7 .block .content.svelte-17dzgm7{border:3px solid #FFFFFF;border-radius:0.8em;padding:1em 2em}.timeline.svelte-17dzgm7 .block .content p.svelte-17dzgm7{color:#C3C3C3}.timeline.svelte-17dzgm7 .block .content a.svelte-17dzgm7{display:flex;justify-content:flex-end;align-items:center}.timeline.svelte-17dzgm7 .block .tags.svelte-17dzgm7{display:flex;align-self:center;margin-bottom:8em}.timeline.svelte-17dzgm7 .block .tags ul.svelte-17dzgm7{display:flex;flex-flow:column;padding:0}.timeline.svelte-17dzgm7 .block .tags li.svelte-17dzgm7{font-size:1.1rem;font-weight:bold;list-style:none;border-left:6px solid #C3C3C3;padding:0.2em 0 0.2em 1.2em}.timeline.svelte-17dzgm7 .block .tags .tag-tech.svelte-17dzgm7{border-color:#FF3062}.timeline.svelte-17dzgm7 .block .tags .tag-art.svelte-17dzgm7{border-color:#12E599}.timeline.svelte-17dzgm7 .block .vl.svelte-17dzgm7{width:3px;background-color:#FFFFFF;margin:0 5em}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t6sc9g_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-t6sc9g_END -->`, ""}

<section class="${"hero svelte-17dzgm7"}"><div class="${"block left svelte-17dzgm7"}"></div>
    <div class="${"block right svelte-17dzgm7"}"></div>
    <img class="${"hero-sig svelte-17dzgm7"}"${add_attribute("src", heroSig, 0)} alt="${"Hero section signature"}">
    <img class="${"hero-figure svelte-17dzgm7"}"${add_attribute("src", heroFigure, 0)} alt="${"Hero section figure"}">
    <div class="${"explore svelte-17dzgm7"}"><p class="${"svelte-17dzgm7"}">Explore</p>
        <div class="${"line svelte-17dzgm7"}"></div></div></section>

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"container svelte-17dzgm7"}"><h2 class="${"svelte-17dzgm7"}">Featured Work</h2>
    <section class="${"timeline svelte-17dzgm7"}"><div class="${"block svelte-17dzgm7"}"><div class="${"col flex-end svelte-17dzgm7"}"><div class="${"tags svelte-17dzgm7"}"><ul class="${"svelte-17dzgm7"}"><li class="${"tag-tech svelte-17dzgm7"}">Front-End</li>
                        <li class="${"tag-tech svelte-17dzgm7"}">Back-End</li>
                        <li class="${"tag-art svelte-17dzgm7"}">UI/UX</li></ul></div></div>

            <div class="${"vl svelte-17dzgm7"}"></div>

            <div class="${"col left-arrow svelte-17dzgm7"}"><div class="${"content svelte-17dzgm7"}"><h3 class="${"title svelte-17dzgm7"}">Milkcee Studios</h3>
                    <p class="${"date svelte-17dzgm7"}">2022</p>
                    <p class="${"blurb svelte-17dzgm7"}">Designed my portfolio website. Implemented using SvelteKit and MySQL.</p>
                    <p class="${"expand svelte-17dzgm7"}"><a href="${"#"}" class="${"svelte-17dzgm7"}">View the creation process ${validate_component(Icon, "Icon").$$render($$result, { icon: "radix-icons:triangle-right" }, {}, {})}</a></p></div></div></div>

        <div class="${"block svelte-17dzgm7"}"><div class="${"col right-arrow svelte-17dzgm7"}"><div class="${"content svelte-17dzgm7"}"><h3 class="${"title svelte-17dzgm7"}">Trojan Dining</h3>
                    <p class="${"date svelte-17dzgm7"}">2021 - Present</p>
                    <p class="${"blurb svelte-17dzgm7"}">Student-first redesign of the USC Residential Dining Menu website. Implemented using React.js.</p>
                    <p class="${"expand svelte-17dzgm7"}"><a class="${"text-tech svelte-17dzgm7"}" href="${"#"}">View the creation process ${validate_component(Icon, "Icon").$$render($$result, { icon: "radix-icons:triangle-right" }, {}, {})}</a></p></div></div>

            <div class="${"vl svelte-17dzgm7"}"></div>

            <div class="${"col svelte-17dzgm7"}"><div class="${"tags svelte-17dzgm7"}"><ul class="${"svelte-17dzgm7"}"><li class="${"tag-tech svelte-17dzgm7"}">Front-End</li>
                        <li class="${"tag-art svelte-17dzgm7"}">UI/UX</li></ul></div></div></div></section>
    
    <section class="${"svelte-17dzgm7"}"><h2 class="${"svelte-17dzgm7"}">Works</h2>
        <p class="${"svelte-17dzgm7"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-17dzgm7"}">kit.svelte.dev</a> to read the documentation</p></section>
    
    <section class="${"svelte-17dzgm7"}"><h2 class="${"svelte-17dzgm7"}">Hello World \u{1F44B}</h2>
        <p class="${"svelte-17dzgm7"}">Visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-17dzgm7"}">kit.svelte.dev</a> to read the documentation</p></section></div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
