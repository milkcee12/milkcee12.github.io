import { c as create_ssr_component, f as add_attribute, v as validate_component, i as is_promise, n as noop, b as each, e as escape } from "../../../../chunks/ssr.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { l as loadImagesFromModule, I as ImageLoader } from "../../../../chunks/ImageLoader.js";
const aboutImage = "/milkcee12.github.io/_app/immutable/assets/glasses-cow.3600035d.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-yga0su.svelte-yga0su{margin-top:0;width:90%}@media(max-width: 992px){h1.svelte-yga0su.svelte-yga0su{width:100%}}#about.svelte-yga0su .content.svelte-yga0su{width:85%;display:flex;flex:1 1 auto;flex-wrap:wrap;gap:2.5em}#about.svelte-yga0su .content .text.svelte-yga0su{flex:1 1 250px}#about.svelte-yga0su .content img.svelte-yga0su{max-height:40vh;max-width:100%;border-radius:1.25em}#profile-graveyard.svelte-yga0su .profile-gallery.svelte-yga0su{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:1.5em 1.5em;margin-top:3em}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item.svelte-yga0su{flex:0 0 auto}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item figure.svelte-yga0su{margin:0}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item figcaption.svelte-yga0su{text-align:center;margin-top:0.75em}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item .img-wrapper.svelte-yga0su{display:block;width:260px;height:260px;overflow:hidden;border-radius:1em}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item .img-wrapper img.svelte-yga0su{width:100%;border-radius:1em;transform-origin:center center;transition:0.5s all}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item .img-wrapper img.svelte-yga0su:hover{transform:scale(1.05)}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item:not(:first-child) img.svelte-yga0su{filter:grayscale(100%);opacity:0.9}#profile-graveyard.svelte-yga0su .profile-gallery .profile-item:not(:first-child) img.svelte-yga0su:hover{filter:none;opacity:1}#lists.svelte-yga0su.svelte-yga0su{width:70%}#lists.svelte-yga0su .list-flex.svelte-yga0su{display:flex;flex-wrap:wrap;gap:1.5em}@media(max-width: 767px){#lists.svelte-yga0su .list-flex.svelte-yga0su{flex-direction:column}}#lists.svelte-yga0su .list-flex .list-col.svelte-yga0su{flex:1 1 30%}#lists.svelte-yga0su .list-flex .list-col ul.svelte-yga0su{list-style-type:none;padding:0;color:#C3C3C3}#lists.svelte-yga0su .list-flex .list-col li.svelte-yga0su{padding-bottom:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function loadProfilePictures() {
    const module = /* @__PURE__ */ Object.assign({ "/src/lib/images/about/profile-pictures/2020-03.jpg": () => import("../../../../chunks/2020-03.js"), "/src/lib/images/about/profile-pictures/2020-05.jpg": () => import("../../../../chunks/2020-05.js"), "/src/lib/images/about/profile-pictures/2020-09.jpg": () => import("../../../../chunks/2020-09.js"), "/src/lib/images/about/profile-pictures/2020-10.jpg": () => import("../../../../chunks/2020-10.js"), "/src/lib/images/about/profile-pictures/2021-06.jpg": () => import("../../../../chunks/2021-06.js"), "/src/lib/images/about/profile-pictures/2021-07.png": () => import("../../../../chunks/2021-07.js"), "/src/lib/images/about/profile-pictures/2021-11.jpg": () => import("../../../../chunks/2021-11.js"), "/src/lib/images/about/profile-pictures/2022-10.jpg": () => import("../../../../chunks/2022-10.js"), "/src/lib/images/about/profile-pictures/2023-01.jpg": () => import("../../../../chunks/2023-01.js") });
    let profilePictures = await loadImagesFromModule(module);
    return profilePictures.reverse();
  }
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16leftl_START -->${$$result.title = `<title>About | Milkcee Studios</title>`, ""}<!-- HEAD_svelte-16leftl_END -->`, ""} <section id="about" class="svelte-yga0su" data-svelte-h="svelte-6zbsw"><h1 class="svelte-yga0su">This site is home to the two crafts I love: <span class="color-art">drawing</span>
    and <span class="color-tech">programming</span>.</h1> <div class="content svelte-yga0su"><img${add_attribute("src", aboutImage, 0)} alt="Painting of a cow with glasses" class="svelte-yga0su"> <div class="text svelte-yga0su"><p>I knew on my first pencil strokes that I loved art. I grew up in San
        Diego dreaming of going to art school, but I ended up in computer
        science out of filial piety. Unlike art, programming was a long game—it
        wasn&#39;t until I began to relish small victories and work late nights of
        my own accord, I realized that I also fell in love with programming.
        <br><br>
        When I&#39;m not glued to my computer
        <a class="color-art" href="https://www.instagram.com/milkcee12/" target="_blank">painting imaginary worlds</a>
        or
        <a class="color-tech" href="https://github.com/milkcee12/" target="_blank">building software</a>, you can find me reading manga, eating pastries, or in the Uniqlo
        graphic tee section 😋</p></div></div></section> <section id="profile-graveyard" class="svelte-yga0su">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      headingText: "Profile Picture Graveyard",
      emoji: "🪦",
      hasLink: false
    },
    {},
    {}
  )} <p data-svelte-h="svelte-4seqo3">🕴️ Hover over the pictures (or tap if you&#39;re on mobile)!</p> <div class="profile-gallery svelte-yga0su">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(ImageLoader, "ImageLoader").$$render($$result, {}, {}, {})} `;
    }
    return function(profilePictures) {
      return ` ${each(profilePictures, ({ url, filename }) => {
        return `<div class="profile-item svelte-yga0su"><figure class="svelte-yga0su"><div class="img-wrapper svelte-yga0su"><img${add_attribute("src", url, 0)}${add_attribute("alt", filename, 0)} class="svelte-yga0su"></div> <figcaption class="svelte-yga0su">${escape(filename)}</figcaption></figure> </div>`;
      })} `;
    }(__value);
  }(loadProfilePictures())}</div></section> <section id="lists" class="svelte-yga0su">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      headingText: "Fun Lists",
      emoji: "📜",
      hasLink: false
    },
    {},
    {}
  )} <p data-svelte-h="svelte-dc3ghv">Wow you really looked through the website, here&#39;s a prize! 🏆 Some of my
    favorite things as lists.</p> <div class="list-flex svelte-yga0su" data-svelte-h="svelte-zmbw3w"><div class="list-col svelte-yga0su"><h3>Manga</h3> <ul class="svelte-yga0su"><li class="svelte-yga0su">Pandora Hearts</li> <li class="svelte-yga0su">Blue Period</li> <li class="svelte-yga0su">Kingdom</li> <li class="svelte-yga0su">Jigokuraku (Hell&#39;s Paradise)</li> <li class="svelte-yga0su">Hikaru no Go</li></ul></div> <div class="list-col svelte-yga0su"><h3>Anime</h3> <ul class="svelte-yga0su"><li class="svelte-yga0su">Bleach</li> <li class="svelte-yga0su">Fairy Tail</li> <li class="svelte-yga0su">Link Click</li> <li class="svelte-yga0su">Haikyuu!</li> <li class="svelte-yga0su">Birdie Wing</li></ul></div> <div class="list-col svelte-yga0su"><h3>League of Legends</h3> <ul class="svelte-yga0su"><li class="svelte-yga0su">Lux</li> <li class="svelte-yga0su">Seraphine</li> <li class="svelte-yga0su">Vel&#39;koz</li> <li class="svelte-yga0su">Xerath</li> <li class="svelte-yga0su">Ahri</li></ul></div></div> </section>`;
});
export {
  Page as default
};
