import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

/** @type {import('./$types').PageLoad} */
export async function load() {
    const fanartModule = import.meta.glob(
        '../../../lib/img/playground/fanart/*',
    );
    const iterableFanartModule = Object.entries(fanartModule);

    const fanart = await Promise.all(
        iterableFanartModule.map(async ([path, resolver]) => {
            // Resolve image src from file system
            const fileData = await resolver().then(({ default: imageUrl }) => {
                let id = parseInt(path.split('/').pop().slice(0,-3));
                return {
                    id: id,
                    url: imageUrl,
                };
            });

            // Get data related to illustration from database
            let { data: playground, error } = await supabase
                .from('playground')
                .select('*')
                .eq('id', fileData.id);
            
            if (error || playground === undefined || playground.length == 0) {
                return { 
                    url: fileData.url, 
                    error: error
                };
            }
            return {
                url: fileData.url, 
                title: playground[0].title,
                desc: playground[0].desc,
                link: playground[0].external_link,
                year: playground[0].year, 
                error: error,
            };
        })
    );

    return {
        fanart: fanart,
    }
}