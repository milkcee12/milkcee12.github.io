import { c as create_ssr_component, f as add_attribute, v as validate_component, b as each, e as escape } from "../../chunks/ssr.js";
import { F as Fa } from "../../chunks/fa.js";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { H as Heading } from "../../chunks/Heading.js";
import { N as Navbar } from "../../chunks/Navbar.js";
const next_id = 5;
const projects = [
  {
    id: 1,
    title: "Google STEP Internship",
    start_date: "May 2023",
    end_date: "Aug 2023",
    desc: "An unforgettable summer in New York City eating food, making memories, and building new features in Google Ads. My tech stack was Angular, Java, Dart, HTML, and CSS.",
    tags: {
      tech: [
        "Front-End",
        "Back-End"
      ],
      art: [
        "UI/UX"
      ]
    }
  },
  {
    id: 2,
    title: "Milkcee Studios",
    start_date: "Dec 2022",
    end_date: "",
    desc: "What you're looking at right now! Started as a winter break project and built up little by little. Created from scratch with SvelteKit, TypeScript, and Sass.",
    tags: {
      tech: [
        "Front-End",
        "Back-End"
      ],
      art: [
        "UI/UX",
        "Illustration"
      ]
    },
    link: "https://milkcee12.github.io/",
    link_text: "Don't click this!"
  },
  {
    id: 3,
    title: "Trojan Dining",
    start_date: "2021",
    end_date: "",
    desc: "Student-first redesign of the USC Residential Dining Menu website. Implemented using React.js.",
    tags: {
      tech: [
        "Front-End"
      ],
      art: [
        "UI/UX"
      ]
    }
  },
  {
    id: 4,
    title: "Milkbook",
    start_date: "2021",
    end_date: "",
    desc: "A sporadically-updated webcomic of personal experiences and wandering thoughts.",
    tags: {
      tech: [],
      art: [
        "Illustration",
        "Writing"
      ]
    },
    link: "https://www.webtoons.com/en/canvas/milkbox/list?title_no=693909",
    link_text: "Read the comic"
  }
];
const data = {
  next_id,
  projects
};
const css$5 = {
  code: ".color-link.svelte-11ks8s9.svelte-11ks8s9{font-weight:bold;width:fit-content}.color-link.svelte-11ks8s9 .arrow.svelte-11ks8s9{display:inline-block;transition:all 0.25s ease-out}.color-link.color-art.svelte-11ks8s9 a.svelte-11ks8s9{color:#12E599}.color-link.color-art.svelte-11ks8s9 .underline.svelte-11ks8s9{width:100%;background-repeat:no-repeat;background-size:0% 100%;transition:background-size 0.5s;background-image:linear-gradient(transparent calc(100% - 1.5px), #12E599 1.5px)}.color-link.color-tech.svelte-11ks8s9 a.svelte-11ks8s9{color:#FF3062}.color-link.color-tech.svelte-11ks8s9 .underline.svelte-11ks8s9{width:100%;background-repeat:no-repeat;background-size:0% 100%;transition:background-size 0.5s;background-image:linear-gradient(transparent calc(100% - 1.5px), #FF3062 1.5px)}.color-link.svelte-11ks8s9 a.svelte-11ks8s9{transition:all 0.25s ease-out;display:inline-block;position:relative;text-decoration:none;line-height:1.3em}.color-link.svelte-11ks8s9 .spacer.svelte-11ks8s9{margin-right:0.5em}.color-link.svelte-11ks8s9:hover .arrow.svelte-11ks8s9{color:#FFFFFF;transform:translateX(2px)}.color-link.svelte-11ks8s9:hover .underline.svelte-11ks8s9{background-size:100% 100%}",
  map: null
};
const ColorLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { target = "" } = $$props;
  let { colorArt } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.colorArt === void 0 && $$bindings.colorArt && colorArt !== void 0)
    $$bindings.colorArt(colorArt);
  $$result.css.add(css$5);
  return `<div class="${[
    "color-link svelte-11ks8s9",
    (colorArt ? "color-art" : "") + " " + (!colorArt ? "color-tech" : "")
  ].join(" ").trim()}"><a${add_attribute("href", href, 0)}${add_attribute("target", target, 0)} class="svelte-11ks8s9"><span class="underline svelte-11ks8s9">${slots.default ? slots.default({}) : ``}<span class="spacer svelte-11ks8s9"></span><span class="arrow svelte-11ks8s9">${validate_component(Fa, "Fa").$$render($$result, { icon: faArrowRight }, {}, {})}</span></span></a> </div>`;
});
const TimeNode_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: `.time-node.svelte-1u7413j.svelte-1u7413j{display:grid;grid-template-columns:1fr 0.5fr 1fr}@media(max-width: 767px){.time-node.svelte-1u7413j.svelte-1u7413j{grid-template-columns:0.5fr 2fr}}.time-node.svelte-1u7413j .bubble.svelte-1u7413j{display:grid}.time-node.svelte-1u7413j .bubble-tail.svelte-1u7413j{position:absolute;content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');margin-top:2.5em;justify-self:flex-start;transform:translateX(-1.6em)}.time-node.reverse.svelte-1u7413j .bubble-tail.svelte-1u7413j{content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');margin-top:2.5em;justify-self:flex-end;transform:translateX(1.6em)}@media(max-width: 767px){.time-node.reverse.svelte-1u7413j .bubble-tail.svelte-1u7413j{justify-self:flex-start;content:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');transform:translateX(-1.6em)}}.time-node.reverse.svelte-1u7413j .bubble.svelte-1u7413j{order:0}.time-node.reverse.svelte-1u7413j .node.svelte-1u7413j{order:1}.time-node.reverse.svelte-1u7413j .tags.svelte-1u7413j{justify-self:start;order:2}@media(max-width: 767px){.time-node.reverse.svelte-1u7413j .bubble.svelte-1u7413j{order:1}.time-node.reverse.svelte-1u7413j .node.svelte-1u7413j{order:0}}.time-node.svelte-1u7413j .bubble-content.svelte-1u7413j{border:3px solid #FFFFFF;border-radius:0.8em;padding:2em 2.5em;margin-bottom:5em}.time-node.svelte-1u7413j .bubble-content .title.svelte-1u7413j{margin-top:0.5em;margin-bottom:1em}.time-node.svelte-1u7413j .bubble-content p.svelte-1u7413j{color:#C3C3C3}.time-node.svelte-1u7413j .node.svelte-1u7413j{margin:0 auto;background-color:#FFFFFF;width:3px}@media(max-width: 767px){.time-node.svelte-1u7413j .node.svelte-1u7413j{margin:0 3em 0 1em}}.time-node.svelte-1u7413j .node.first.svelte-1u7413j{margin-top:3em}.time-node.svelte-1u7413j .node.svelte-1u7413j::before{content:"";z-index:102;display:block;position:relative;width:15px;height:15px;margin-top:3em;border:3px solid #12E599;border-radius:50%;right:0.5em;background-color:#FFFFFF}.time-node.svelte-1u7413j .node.visited.svelte-1u7413j::before{content:"";z-index:102;display:block;position:relative;width:15px;height:15px;margin-top:3em;border:3px solid #12E599;border-radius:50%;right:0.5em;background-color:#12E599}.time-node.svelte-1u7413j .node.first.svelte-1u7413j::before{content:"";z-index:102;display:block;position:relative;width:15px;height:15px;margin-top:3em;border:3px solid #12E599;border-radius:50%;right:0.5em;background-color:#FFFFFF;margin-top:0}.time-node.svelte-1u7413j .node.first.visited.svelte-1u7413j::before{content:"";z-index:102;display:block;position:relative;width:15px;height:15px;margin-top:3em;border:3px solid #12E599;border-radius:50%;right:0.5em;background-color:#12E599;margin-top:0}.time-node.svelte-1u7413j .node .down-arrow.svelte-1u7413j{fill:#FFFFFF;display:block;width:32px;position:relative;left:50%;transform:translateX(-50%);top:calc(100% - 5.6em);z-index:100}.time-node.svelte-1u7413j .tags.svelte-1u7413j{justify-self:end;margin-top:2em}.time-node.svelte-1u7413j .tags ul.svelte-1u7413j{padding:0;margin-block-start:0;margin-block-end:0}.time-node.svelte-1u7413j .tags li.svelte-1u7413j{list-style:none;border-left:6px solid #C3C3C3;padding-left:1.2em;padding-bottom:0.5em;color:#C3C3C3}.time-node.svelte-1u7413j .tags .tech-tags li.svelte-1u7413j{border-color:#FF3062}.time-node.svelte-1u7413j .tags .art-tags li.svelte-1u7413j{border-color:#12E599}@media(max-width: 767px){.time-node.svelte-1u7413j .tags.svelte-1u7413j{display:none}}`,
  map: null
};
const TimeNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { numProjects } = $$props;
  let isCurrentProject = project.end_date;
  let hasLink = project.hasOwnProperty("link");
  let isReverse = project.id % 2 == 0;
  let isFirstChild = project.id == 1;
  let isLastChild = project.id == numProjects;
  let node;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.numProjects === void 0 && $$bindings.numProjects && numProjects !== void 0)
    $$bindings.numProjects(numProjects);
  $$result.css.add(css$4);
  return ` <div class="${["time-node svelte-1u7413j", isReverse ? "reverse" : ""].join(" ").trim()}"> <div class="tags svelte-1u7413j"><div class="tech-tags"><ul class="svelte-1u7413j">${each(project.tags.tech, (tag) => {
    return `<li class="svelte-1u7413j">${escape(tag)}</li>`;
  })}</ul></div> <div class="art-tags"><ul class="svelte-1u7413j">${each(project.tags.art, (tag) => {
    return `<li class="svelte-1u7413j">${escape(tag)}</li>`;
  })}</ul></div></div>  <div class="${[
    "node svelte-1u7413j",
    (isFirstChild ? "first" : "") + " "
  ].join(" ").trim()}"${add_attribute("this", node, 0)}> ${isFirstChild ? `${slots.default ? slots.default({}) : ``}` : ``} ${isLastChild ? `<svg class="down-arrow svelte-1u7413j" style="width: 32px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>` : ``}</div>  <div class="bubble svelte-1u7413j"><div class="bubble-tail svelte-1u7413j"></div> <div class="bubble-content svelte-1u7413j"><h3 class="title svelte-1u7413j">${escape(project.title)}</h3> <p class="svelte-1u7413j"><i>${escape(project.start_date)} — ${escape(isCurrentProject ? project.end_date : "Present")}</i></p> <p class="svelte-1u7413j">${escape(project.desc)}</p> ${hasLink ? `<p class="svelte-1u7413j">${validate_component(ColorLink, "ColorLink").$$render(
    $$result,
    {
      href: project.link,
      target: "_blank",
      colorArt: project.tags.art.length > project.tags.tech.length
    },
    {},
    {
      default: () => {
        return `${escape(project.link_text)}`;
      }
    }
  )}</p>` : ``}</div></div> </div>`;
});
const TimelineFill_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".timeline-fill.svelte-1xb3eig{z-index:100}.fill.svelte-1xb3eig{height:0;margin:0 auto;position:absolute;background-color:#12E599;width:3px}.down-arrow.svelte-1xb3eig{z-index:101;fill:#12E599;width:32px;position:relative;left:50%;transform:translateX(-50%);display:none}",
  map: null
};
const TimelineFill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { timelineHeight } = $$props;
  let fill;
  let arrow;
  if ($$props.timelineHeight === void 0 && $$bindings.timelineHeight && timelineHeight !== void 0)
    $$bindings.timelineHeight(timelineHeight);
  $$result.css.add(css$3);
  return ` <div class="timeline-fill svelte-1xb3eig"><div class="fill svelte-1xb3eig"${add_attribute("this", fill, 0)}></div> <svg class="down-arrow svelte-1xb3eig" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 32px;"${add_attribute("this", arrow, 0)}><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg> </div>`;
});
const Timeline_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".heading-spacer.svelte-17yoicl{margin-bottom:4em}.timeline-graph.svelte-17yoicl{width:80%;margin:auto}@media(max-width: 1200px){.timeline-graph.svelte-17yoicl{width:100%}}",
  map: null
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let timelineGraph;
  let timelineHeight;
  let numProjects = Object.keys(data.projects).length;
  function calcTimelineData() {
    timelineHeight = 0;
  }
  $$result.css.add(css$2);
  {
    calcTimelineData();
  }
  return ` <section id="timeline"><div class="heading-spacer svelte-17yoicl">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      headingText: "Featured Work",
      emoji: "🦺",
      hasLink: true
    },
    {},
    {
      default: () => {
        return `${validate_component(ColorLink, "ColorLink").$$render($$result, { href: "/work", colorArt: true }, {}, {
          default: () => {
            return `See all work`;
          }
        })}`;
      }
    }
  )}</div> <div class="timeline-graph svelte-17yoicl"${add_attribute("this", timelineGraph, 0)}>${each(data.projects, (project) => {
    return `${validate_component(TimeNode, "TimeNode").$$render($$result, { project, numProjects }, {}, {
      default: () => {
        return ` ${validate_component(TimelineFill, "TimelineFill").$$render($$result, { timelineHeight }, {}, {})} `;
      }
    })}`;
  })}</div> </section>`;
});
const HeroSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#hero.svelte-11pz8uo.svelte-11pz8uo{display:grid;grid-template-columns:1fr 1fr;height:100vh;width:100%;margin-bottom:0;pointer-events:none}#hero.svelte-11pz8uo .left.svelte-11pz8uo{grid-column-start:1;justify-self:stretch;background-color:#090A0D}#hero.svelte-11pz8uo .right.svelte-11pz8uo{grid-column-start:2;justify-self:stretch;background-color:#12E599}#hero.svelte-11pz8uo .signature.svelte-11pz8uo{position:absolute;height:110vh;top:-10vh;left:calc(50% - 59vh)}@media(max-width: 992px){#hero.svelte-11pz8uo .signature.svelte-11pz8uo{height:80vh;left:calc(50% - 45vh)}}@media(max-width: 1200px){#hero.svelte-11pz8uo .signature.svelte-11pz8uo{height:100vh;left:calc(50% - 55vh)}}#hero.svelte-11pz8uo .figure.svelte-11pz8uo{position:absolute;height:102vh;top:2em;left:calc(50% - 30vh)}@media(max-width: 1200px){#hero.svelte-11pz8uo .figure.svelte-11pz8uo{left:calc(50% - 30vh)}}",
  map: null
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section id="hero" class="svelte-11pz8uo"> ${``} </section>`;
});
const homeAboutProfile = "/_app/immutable/assets/home_about-profile.b43a35a6.webp";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#about.svelte-1p9jx43 .content.svelte-1p9jx43{display:flex;flex-wrap:wrap;gap:8em;margin-top:2em}@media(max-width: 1200px){#about.svelte-1p9jx43 .content.svelte-1p9jx43{gap:5em}}@media(max-width: 992px){#about.svelte-1p9jx43 .content.svelte-1p9jx43{flex-direction:column;gap:3em}}#about.svelte-1p9jx43 .content .blurb.svelte-1p9jx43{flex:3;display:flex;flex-flow:column}#about.svelte-1p9jx43 .content .blurb .socials.svelte-1p9jx43{margin-top:1.5em;display:flex;gap:1.75em;flex-wrap:wrap}#about.svelte-1p9jx43 .content .profile.svelte-1p9jx43{flex:2;text-align:center}#about.svelte-1p9jx43 .content .profile img.svelte-1p9jx43{width:100%;border-radius:1.25em}@media(max-width: 992px){#about.svelte-1p9jx43 .content .profile img.svelte-1p9jx43{width:60%}}@media(max-width: 767px){#about.svelte-1p9jx43 .content .profile img.svelte-1p9jx43{width:80%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1pqj0d0_START -->${$$result.title = `<title>Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1pqj0d0_END -->`, ""} ${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="container">${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})} <section id="about" class="svelte-1p9jx43"><div class="content svelte-1p9jx43"><div class="blurb svelte-1p9jx43">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      headingText: "Hello World!",
      emoji: "👋",
      hasLink: true
    },
    {},
    {
      default: () => {
        return `${validate_component(ColorLink, "ColorLink").$$render($$result, { href: "/about", colorArt: true }, {}, {
          default: () => {
            return `More about me`;
          }
        })}`;
      }
    }
  )} <p data-svelte-h="svelte-1gaau6r">I&#39;m Michaela or Milkcee, depending on where you found me
          from. I&#39;m a junior studying
          <span class="color-tech"><b>Computer Science</b></span>
          at
          <span class="color-white"><b>University of Southern California</b></span>
          with a minor in <span class="color-art"><b>3-D Animation</b></span>.
          For some reason, I also own a lot of cow-themed stuff.</p> <div class="socials svelte-1p9jx43">${validate_component(ColorLink, "ColorLink").$$render(
    $$result,
    {
      href: "https://github.com/milkcee12/",
      target: "_blank",
      colorArt: false
    },
    {},
    {
      default: () => {
        return `Github`;
      }
    }
  )} ${validate_component(ColorLink, "ColorLink").$$render(
    $$result,
    {
      href: "https://www.instagram.com/milkcee12/",
      target: "_blank",
      colorArt: true
    },
    {},
    {
      default: () => {
        return `Instagram`;
      }
    }
  )} ${validate_component(ColorLink, "ColorLink").$$render(
    $$result,
    {
      href: "https://twitter.com/milkcee12",
      target: "_blank",
      colorArt: true
    },
    {},
    {
      default: () => {
        return `Twitter`;
      }
    }
  )}</div></div> <div class="profile svelte-1p9jx43" data-svelte-h="svelte-7h73g3"><img${add_attribute("src", homeAboutProfile, 0)} alt="Profile drawing" class="svelte-1p9jx43"></div></div></section> </div>`;
});
export {
  Page as default
};
