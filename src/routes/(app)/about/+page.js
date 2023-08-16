/** @type {import('./$types').PageLoad} */
export async function load() {
    const module = import.meta.glob(
        '../../../lib/img/about-fun-pfp/*',
    );
    const iterableModule = Object.entries(module);
    const options = { year: "numeric", month: "long" };

    const pfps = await Promise.all(
        iterableModule.map(async([path, resolver]) => {
            const pfpData = await resolver().then(({default: imageUrl}) => {
                let date = new Date(path.substring(0, path.length - 3));
                let dateVerbose = date.toLocaleDateString("en-US", options);
                return { 
                    url: imageUrl, 
                    date: dateVerbose 
                };
            });
            return pfpData;
        })
    );

    return {
        pfps: pfps,
    }
}