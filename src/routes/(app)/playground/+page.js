import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

const keys = ["fanart", "featured"];
const sections = [];

// Last ID: 11
/** @type {import('./$types').PageLoad} */
export async function load() {
    const modules = [
        import.meta.glob('../../../lib/img/playground/fanart/*',),
        import.meta.glob('../../../lib/img/playground/featured/*',),
    ]

    // Get all playground illustratoins from database
    let { data: playground, error } = await supabase
        .from('playground')
        .select('*')
        .order('id', { ascending: true });

    // Map database information to files
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

                // Map image file to database data
                let imageData = null;
                if (fileData.id <= playground.length) {
                    imageData = playground[fileData.id - 1];
                }

                if (error || imageData == null) {
                    return {
                        url: fileData.url,
                        error: error
                    };
                }
                return {
                    url: fileData.url,
                    title: imageData.title,
                    desc: imageData.desc,
                    link: imageData.external_link,
                    year: imageData.year,
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