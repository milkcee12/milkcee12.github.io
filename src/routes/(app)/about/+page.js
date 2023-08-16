/** @type {import('./$types').PageLoad} */
export async function load() {
    const module = import.meta.glob(
        '/src/lib/img/about-fun-pfp/*',
    );
    const iterableModule = Object.entries(module);
    const options = { year: "numeric", month: "long" };

    const pfps = await Promise.all(
        iterableModule.map(async ([url]) => {
            let filename = url.split("/").pop();
            let date = new Date(filename.substring(0, filename.length - 3));
            let dateVerbose = date.toLocaleDateString("en-US", options);
            return { url: url, date: dateVerbose };
        })
    )

    return {
        pfps: pfps,
    }
}