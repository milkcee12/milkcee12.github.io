import { createClient } from "@supabase/supabase-js";
import { a as PUBLIC_SUPABASE_URL, b as PUBLIC_SUPABASE_KEY } from "../../../../chunks/public.js";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);
const keys = ["fanart", "featured"];
const sections = [];
async function load() {
  const modules = [
    /* @__PURE__ */ Object.assign({ "../../../lib/img/playground/fanart/001.jpg": () => import("../../../../chunks/001.js"), "../../../lib/img/playground/fanart/002.jpg": () => import("../../../../chunks/002.js"), "../../../lib/img/playground/fanart/003.jpg": () => import("../../../../chunks/003.js"), "../../../lib/img/playground/fanart/004.jpg": () => import("../../../../chunks/004.js"), "../../../lib/img/playground/fanart/005.jpg": () => import("../../../../chunks/005.js") }),
    /* @__PURE__ */ Object.assign({ "../../../lib/img/playground/featured/006.jpg": () => import("../../../../chunks/006.js"), "../../../lib/img/playground/featured/007.jpg": () => import("../../../../chunks/007.js"), "../../../lib/img/playground/featured/008.jpg": () => import("../../../../chunks/008.js"), "../../../lib/img/playground/featured/009.jpg": () => import("../../../../chunks/009.js"), "../../../lib/img/playground/featured/010.jpg": () => import("../../../../chunks/010.js"), "../../../lib/img/playground/featured/011.jpg": () => import("../../../../chunks/011.js") })
  ];
  let { data: playground, error } = await supabase.from("playground").select("*").order("id", { ascending: true });
  for (let i = 0; i < modules.length; i++) {
    const iterableModule = Object.entries(modules[i]);
    const section = await Promise.all(
      iterableModule.map(async ([path, resolver]) => {
        const fileData = await resolver().then(({ default: imageUrl }) => {
          let id = parseInt(path.split("/").pop().slice(0, -3));
          return {
            id,
            url: imageUrl
          };
        });
        let imageData = null;
        if (fileData.id <= playground.length) {
          imageData = playground[fileData.id - 1];
        }
        if (error || imageData == null) {
          return {
            url: fileData.url,
            error
          };
        }
        return {
          url: fileData.url,
          title: imageData.title,
          desc: imageData.desc,
          link: imageData.external_link,
          year: imageData.year,
          error
        };
      })
    );
    sections[keys[i]] = section;
  }
  return {
    sections
  };
}
export {
  load
};
