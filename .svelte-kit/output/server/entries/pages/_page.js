import { createClient } from "@supabase/supabase-js";
import { a as PUBLIC_SUPABASE_URL, b as PUBLIC_SUPABASE_KEY } from "../../chunks/public.js";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);
async function load() {
  try {
    const { data: featured, error } = await supabase.from("projects").select(`
            project_id, title, blurb, see_more, start_yr, end_yr, project_type:tag_types(name)
            `).eq("is_featured", true);
    if (error)
      throw error;
    for (let idx in featured) {
      const { data: tags, error: error2 } = await supabase.from("project_tags").select(`
                tags (name, type: tag_types(name))
            `).eq("project_id", featured[idx].project_id);
      featured[idx].tags = tags;
      if (error2)
        throw error2;
    }
    return featured;
  } catch (error) {
    if (error instanceof Error) {
      return { "status": error };
    }
  }
}
export {
  load
};
