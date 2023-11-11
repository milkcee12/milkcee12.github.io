import { c as create_ssr_component, a as subscribe } from "./ssr.js";
import { p as page } from "./stores.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-gf8qlv.svelte-gf8qlv{text-decoration:none}nav.navbar.svelte-gf8qlv.svelte-gf8qlv{padding:3.5em 3em}.links.svelte-gf8qlv a.svelte-gf8qlv{font-weight:normal;color:#C3C3C3;border-radius:16px;padding:7px 1em;box-sizing:border-box;transition:all 0.25s}.links.svelte-gf8qlv a.svelte-gf8qlv:hover{color:#FFFFFF}.links.svelte-gf8qlv a.active.svelte-gf8qlv{background-color:#232325}.navbar.svelte-gf8qlv.svelte-gf8qlv{display:flex;justify-content:space-between;border-bottom:1.5px solid #FFFFFF;padding:2em 3em}.navbar.svelte-gf8qlv .brand.svelte-gf8qlv{align-self:center;height:fit-content;color:#FFFFFF}.navbar.svelte-gf8qlv .mobile-nav.svelte-gf8qlv{display:none}@media(max-width: 767px){.navbar.svelte-gf8qlv .default-nav.svelte-gf8qlv{display:none}.navbar.svelte-gf8qlv .mobile-nav.svelte-gf8qlv{display:initial}}.hamburger-btn.svelte-gf8qlv.svelte-gf8qlv{fill:#FFFFFF;background:none;border:none}.hamburger-btn.svelte-gf8qlv .svelte-gf8qlv:active{border-style:none}.hamburger-menu.svelte-gf8qlv.svelte-gf8qlv{display:block;z-index:1000;position:fixed;top:0;height:100vh;width:100vw;background-color:#090A0D}.hamburger-menu.svelte-gf8qlv .links.svelte-gf8qlv{display:flex;flex-direction:column}.hamburger-menu.svelte-gf8qlv .links ul.svelte-gf8qlv{padding:0;text-align:center}.hamburger-menu.svelte-gf8qlv .links li.svelte-gf8qlv{list-style:none;padding:1em 0}.hamburger-menu.svelte-gf8qlv .links li.active.svelte-gf8qlv{background-color:#232325}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let path;
  $$result.css.add(css);
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="navbar svelte-gf8qlv"><a href="/" class="brand svelte-gf8qlv" data-svelte-h="svelte-uy2kh4"><b>MC</b></a> <div class="default-nav svelte-gf8qlv"><div class="links svelte-gf8qlv"><a href="/work" class="${["svelte-gf8qlv", path === "/work" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-vii50e">Work</a> <a href="/playground" class="${["svelte-gf8qlv", path === "/playground" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1j2fd0y">Playground</a> <a href="/about" class="${["svelte-gf8qlv", path === "/about" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-141syp8">About</a> <a href="/archive" class="${["svelte-gf8qlv", path === "/archive" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1grpinf">Archive</a> <a href="#" target="_blank" rel="noreferrer" class="svelte-gf8qlv" data-svelte-h="svelte-pf0w4j">Resume</a></div></div> <div class="mobile-nav svelte-gf8qlv"><button class="hamburger-btn svelte-gf8qlv" data-svelte-h="svelte-pxqdsm"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" class="svelte-gf8qlv"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" class="svelte-gf8qlv"></path></svg></button></div></nav> ${``}`;
});
export {
  Navbar as N
};
