/** @type {import('./$types').PageLoad} */
export function load() {
    const pfpDirectory = import.meta.glob("../../../lib/img/about-fun-pfp/*");
    const options = { year: 'numeric', month: 'long' };

    const pfps = [];
    for (const modulePath in pfpDirectory) {
        pfpDirectory[modulePath]().then(({ default: imageUrl }) => {

            let filename = imageUrl.split("/").pop();
            let date = new Date(filename.substring(0, filename.length - 3));
            let dateVerbose = date.toLocaleDateString('en-US', options);
            pfps.push({ url: imageUrl, date: dateVerbose });
        });
    }

    console.log(pfps);

    return {
        pfps: pfps,
    }
}