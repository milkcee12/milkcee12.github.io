import { createClient } from "@supabase/supabase-js";
import { a as PUBLIC_SUPABASE_URL, b as PUBLIC_SUPABASE_KEY } from "../../chunks/public.js";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);
async function load() {
  const { data, error } = await supabase.from("projects").select(`project_id, title, blurb, see_more, url, start_yr, end_yr, project_type:tag_types(name)`).eq("is_featured", true).order("start_yr", { ascending: false });
  for (let key in data) {
    const { data: tags, error: error2 } = await supabase.from("project_tags").select(`
        tags (name, type: tag_types(name))
    `).eq("project_id", data[key].project_id);
    data[key]["tags"] = tags;
  }
  return { timeline: data, error };
}
export {
  load
};
