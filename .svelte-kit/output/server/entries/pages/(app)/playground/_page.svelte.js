import { c as create_ssr_component, f as add_attribute, v as validate_component, i as is_promise, n as noop, b as each, e as escape } from "../../../../chunks/ssr.js";
/* empty css                                                   */import { H as Heading } from "../../../../chunks/Heading.js";
import { l as loadImagesFromModule, I as ImageLoader } from "../../../../chunks/ImageLoader.js";
const Modal_svelte_svelte_type_style_lang = "";
const LazyImage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-1aegm6i{opacity:0;transition:opacity 1s ease-out;height:100%;width:100%;object-fit:cover;object-position:top center}img.visible.svelte-1aegm6i{opacity:1}img.radius.svelte-1aegm6i{border-radius:1em}",
  map: null
};
const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { borderRadius = true } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  $$result.css.add(css$1);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" class="${[
    "svelte-1aegm6i",
    " " + (borderRadius ? "radius" : "")
  ].join(" ").trim()}">`;
});
const next_id = 12;
const images = [
  {
    id: 1,
    title: "Beneath the Fireflies",
    desc: "Jellal and Erza from Fairy Tail, one of my favorite anime ships to this day. A redraw of a 2020 illutration that I thought was my best work yet (at the time).",
    date: "2023",
    link: "https://www.instagram.com/p/Cvfk8EoIIOy/?img_index=2",
    link_text: "See the original piece!"
  },
  {
    id: 2,
    title: "Coronation",
    desc: "Kieran and Lauren from Purple Hyacinth, a webtoon I really enjoy! Winner of the 2022 Purple Hyacinth fanart contest. This won me the drawing tablet I use today :)",
    date: "2022",
    link: "https://www.instagram.com/p/CaxpNBmPXvu/?img_index=1",
    link_text: "See closeups and progress shots"
  },
  {
    id: 3,
    title: "Innocent",
    desc: "Another Purple Hyacinth painting, this time playing around with textures and trippy effects :)",
    date: "2022"
  },
  {
    id: 4,
    title: "The Act",
    desc: "Adam Bahri from The Guy Upstairs! Totally sane, handsome, green flag boyfriend material. Tried a more comic-like sketching style where all the shading is done before you add any colors.",
    date: "2023",
    link: "https://www.instagram.com/p/CpLqVVfPoGf/?img_index=1",
    link_text: "Meme redraw 😛"
  },
  {
    id: 5,
    title: "Thalael",
    desc: "Fanart of Thalia and Arael, characters from The Pendant of Hyacinth. Love how the lighting turned out :)) Won 4th place in @rileyquinnart's 100k DTIYS.",
    date: "2022"
  },
  {
    id: 6,
    title: "Toy Dragon",
    desc: "A complete redraw of an older piece! Although I draw a lot of people these days, I used to love drawing backgrounds and especially clouds. I wanted to try my hand at Studio Ghibli vibes in this piece.",
    date: "2022",
    link: "https://www.instagram.com/p/Cl9cAfIP5SA/?img_index=1",
    link_text: "See the original piece!"
  },
  {
    id: 7,
    title: "Iris",
    desc: "An original character of mine. Hopefully you'll see her in a story or comic someday 😉",
    date: "2023"
  },
  {
    id: 8,
    title: "Portrait of a Time Reaper",
    desc: "Another original character of mine! The Time Reaper, a cynical lender who deals in time—he loans and collects time from mortals.",
    date: "2022"
  },
  {
    id: 9,
    title: "By the Windowsill",
    desc: "Two characters I really love to draw. No set story for them yet, but here's a universe where they attend a magic academy together.",
    date: "2022"
  },
  {
    id: 10,
    title: "The Grand Duckess",
    desc: "All hail the superior duck.",
    date: "2021"
  },
  {
    id: 11,
    title: "Cafe",
    desc: "Warm and glowy vibes with my character Rain. Every single part of the background was hand-drawn and took insanely long 😭",
    date: "2022",
    link: "https://www.instagram.com/p/Ce9FIUEltTt/?img_index=3",
    link_text: "See closeups"
  },
  {
    id: 12,
    title: "Preparation",
    desc: "A world exploration where Rain is priestess of the moon.",
    date: "2022"
  }
];
const jsonData = {
  next_id,
  images
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gallery.svelte-1nnitwy.svelte-1nnitwy{display:flex;flex:1;flex-wrap:wrap;justify-content:flex-start;width:100%;gap:1em}.gallery.svelte-1nnitwy .item.svelte-1nnitwy{flex:1 1 auto;flex-grow:1;height:19em;box-sizing:border-box;position:relative;text-align:center;transition:all 0.25s;border-radius:1em;transition:opacity 0.5s}.gallery.svelte-1nnitwy .item p.svelte-1nnitwy{color:#FFFFFF;margin-inline:1em;font-size:1.2em;max-width:100%;top:0;margin:auto;position:absolute;left:0;right:0;opacity:0}.gallery.svelte-1nnitwy .item .hover-overlay.svelte-1nnitwy{position:absolute;justify-self:flex-start;width:100%;height:100%;background-color:none;border-radius:1em;transition:all 0.5s ease-out}.gallery.svelte-1nnitwy .item.svelte-1nnitwy:hover{cursor:pointer}.gallery.svelte-1nnitwy .item:hover .hover-overlay.svelte-1nnitwy{background-color:rgba(9, 10, 13, 0.6)}.gallery.svelte-1nnitwy .item:hover p.svelte-1nnitwy{animation:svelte-1nnitwy-float 0.7s forwards}@keyframes svelte-1nnitwy-float{from{top:0%}70%{top:52%}to{transform:translateY(-50%);top:50%;opacity:1}}@keyframes svelte-1nnitwy-float-reverse{from{transform:translateY(-50%);top:50%;opacity:1}30%{top:52%}to{top:0%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var Module = /* @__PURE__ */ ((Module2) => {
    Module2[Module2["FEATURED"] = 0] = "FEATURED";
    Module2[Module2["FANART"] = 1] = "FANART";
    return Module2;
  })(Module || {});
  let jsonDataTyped = jsonData.images;
  const modules = [
    /* @__PURE__ */ Object.assign({ "/src/lib/images/playground/featured/006.jpg": () => import("../../../../chunks/006.js"), "/src/lib/images/playground/featured/007.jpg": () => import("../../../../chunks/007.js"), "/src/lib/images/playground/featured/008.jpg": () => import("../../../../chunks/008.js"), "/src/lib/images/playground/featured/009.jpg": () => import("../../../../chunks/009.js"), "/src/lib/images/playground/featured/010.jpg": () => import("../../../../chunks/010.js"), "/src/lib/images/playground/featured/011.jpg": () => import("../../../../chunks/011.js"), "/src/lib/images/playground/featured/012.jpg": () => import("../../../../chunks/012.js") }),
    /* @__PURE__ */ Object.assign({ "/src/lib/images/playground/fanart/001.jpg": () => import("../../../../chunks/001.js"), "/src/lib/images/playground/fanart/002.jpg": () => import("../../../../chunks/002.js"), "/src/lib/images/playground/fanart/003.jpg": () => import("../../../../chunks/003.js"), "/src/lib/images/playground/fanart/004.jpg": () => import("../../../../chunks/004.js"), "/src/lib/images/playground/fanart/005.jpg": () => import("../../../../chunks/005.js") })
  ];
  async function getImageMapFromModule(index) {
    let images2 = await loadImagesFromModule(modules[index]);
    return images2;
  }
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xfty9t_START -->${$$result.title = `<title>Playground | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-1xfty9t_END -->`, ""} <p data-svelte-h="svelte-1om5mrm">A page dedicated to all the smaller, one-off projects I&#39;ve done throughout the
  years. Click on the the images to learn more about them!</p> <section id="featured">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      headingText: "Originals",
      emoji: "🎈",
      hasLink: false
    },
    {},
    {}
  )} <p data-svelte-h="svelte-5yjoun">Visions from the worlds inside my head.</p> <div class="gallery svelte-1nnitwy">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(ImageLoader, "ImageLoader").$$render($$result, {}, {}, {})} `;
    }
    return function(images2) {
      return ` ${each(images2, (image) => {
        let id = parseInt(image.filename) - 1, title = jsonDataTyped[id].title ?? "Untitled";
        Object.assign(image, jsonDataTyped[id]);
        return `     <div class="item svelte-1nnitwy"><div class="hover-overlay svelte-1nnitwy"></div> <p class="svelte-1nnitwy">${escape(title)}</p> ${validate_component(LazyImage, "LazyImage").$$render($$result, { src: image.url, alt: title }, {}, {})} </div>`;
      })} `;
    }(__value);
  }(getImageMapFromModule(Module.FEATURED))}</div></section> <section id="fanart">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      headingText: "Fanart",
      emoji: "📸",
      hasLink: false
    },
    {},
    {}
  )} <p data-svelte-h="svelte-j6nb4o">Paying homage to some of my favorite works by other artists.</p> <div class="gallery svelte-1nnitwy">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(ImageLoader, "ImageLoader").$$render($$result, {}, {}, {})} `;
    }
    return function(images2) {
      return ` ${each(images2, (image) => {
        let id = parseInt(image.filename) - 1, title = jsonDataTyped[id].title ?? "Untitled";
        Object.assign(image, jsonDataTyped[id]);
        return `     <div class="item svelte-1nnitwy"><div class="hover-overlay svelte-1nnitwy"></div> <p class="svelte-1nnitwy">${escape(title)}</p> ${validate_component(LazyImage, "LazyImage").$$render($$result, { src: image.url, alt: title }, {}, {})} </div>`;
      })} `;
    }(__value);
  }(getImageMapFromModule(Module.FANART))}</div> </section>`;
});
export {
  Page as default
};
