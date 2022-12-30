import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

/** @type {import('./$types').PageLoad} */
export async function load() {
    try {
        const { data: featured, error } = await supabase
            .from('projects')
            .select(`
            project_id, title, blurb, see_more, url, start_yr, end_yr, project_type:tag_types(name)
            `)
            .eq('is_featured', true)
            .order('start_yr', {ascending: false});

        if (error) throw error;

        for (let idx in featured) {
            const { data: tags, error } = await supabase
            .from('project_tags')
            .select(`
                tags (name, type: tag_types(name))
            `)
            .eq('project_id', featured[idx].project_id);

            featured[idx].tags = tags;

            if (error) throw error;
        }

        return featured;
    }
    catch (error) {
        if (error instanceof Error) {
            return { 'status': error };
        }
    }
}
