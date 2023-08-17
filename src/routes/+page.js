import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

/** @type {import('./$types').PageLoad} */
export async function load() {
    // Get main timeline nodes
    const { data, error } = await supabase
        .from('projects')
        .select(`project_id, title, blurb, see_more, url, start_yr, end_yr, project_type:tag_types(name)`)
        .eq('is_featured', true)
        .order('start_yr', { ascending: false });

    // Get corresponding project tags
    for (let key in data) {
        const { data: tags, error } = await supabase
            .from('project_tags')
            .select(`
        tags (name, type: tag_types(name))
    `)
            .eq('project_id', data[key].project_id);

        data[key]["tags"] = tags;
    }

    return { timeline: data, error: error };
}
