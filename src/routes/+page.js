import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sosljyjiiejzxtbmguax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvc2xqeWppaWVqenh0Ym1ndWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3Nzg3ODAsImV4cCI6MTk4NzM1NDc4MH0.AnkqtBmgZo8sIaIWPgu7cCzgbPD7y_UDbB-UExJVCS8';
// console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

/** @type {import('./$types').PageLoad} */
export async function load() {
    try {
        const { data: featured, error } = await supabase
            .from('projects')
            .select(`
            project_id, title, blurb, see_more, start_yr, end_yr, project_type:tag_types(name)
            `)
            .eq('is_featured', true);

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
