import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

const keys = ["fanart", "featured"];
const sections = [];

/** @type {import('./$types').PageLoad} */
export async function load() {
    const modules = [
        import.meta.glob('../../../lib/img/playground/fanart/*',),
        import.meta.glob('../../../lib/img/playground/featured/*',),
    ]

    for (let i = 0; i < modules.length; i++) {
        const iterableModule = Object.entries(modules[i]);

        const section = await Promise.all(
            iterableModule.map(async ([path, resolver]) => {
                // Resolve image src from file system
                const fileData = await resolver().then(({ default: imageUrl }) => {
                    let id = parseInt(path.split('/').pop().slice(0, -3));
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

        sections[keys[i]] = section;
    }


    return {
        sections,
    }
}