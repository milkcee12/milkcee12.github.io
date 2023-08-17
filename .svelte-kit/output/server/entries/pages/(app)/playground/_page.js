import { createClient } from "@supabase/supabase-js";
import { a as PUBLIC_SUPABASE_URL, b as PUBLIC_SUPABASE_KEY } from "../../../../chunks/public.js";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);
async function load() {
  const fanartModule = /* @__PURE__ */ Object.assign({
    "../../../lib/img/playground/fanart/1.jpg": () => import("../../../../chunks/1.js"),
    "../../../lib/img/playground/fanart/2.jpg": () => import("../../../../chunks/2.js"),
    "../../../lib/img/playground/fanart/3.jpg": () => import("../../../../chunks/3.js")
  });
  const iterableFanartModule = Object.entries(fanartModule);
  const fanart = await Promise.all(
    iterableFanartModule.map(async ([path, resolver]) => {
      const fileData = await resolver().then(({ default: imageUrl }) => {
        let id = parseInt(path.split("/").pop().slice(0, -3));
        return {
          id,
          url: imageUrl
        };
      });
      let { data: playground, error } = await supabase.from("playground").select("*").eq("id", fileData.id);
      if (error) {
        return {
          url: fileData.url,
          error
        };
      }
      return {
        url: fileData.url,
        title: playground[0].title,
        desc: playground[0].desc,
        link: playground[0].external_link,
        year: playground[0].year,
        error
      };
    })
  );
  return {
    fanart
  };
}
export {
  load
};
