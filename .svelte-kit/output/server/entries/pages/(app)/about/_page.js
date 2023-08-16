async function load() {
  const module = /* @__PURE__ */ Object.assign({ "../../../lib/img/about-fun-pfp/2020-03.jpg": () => import("../../../../chunks/2020-03.js"), "../../../lib/img/about-fun-pfp/2020-05.jpg": () => import("../../../../chunks/2020-05.js"), "../../../lib/img/about-fun-pfp/2020-09.jpg": () => import("../../../../chunks/2020-09.js"), "../../../lib/img/about-fun-pfp/2020-10.jpg": () => import("../../../../chunks/2020-10.js"), "../../../lib/img/about-fun-pfp/2021-06.jpg": () => import("../../../../chunks/2021-06.js"), "../../../lib/img/about-fun-pfp/2021-07.png": () => import("../../../../chunks/2021-07.js"), "../../../lib/img/about-fun-pfp/2021-11.jpg": () => import("../../../../chunks/2021-11.js"), "../../../lib/img/about-fun-pfp/2022-10.jpg": () => import("../../../../chunks/2022-10.js"), "../../../lib/img/about-fun-pfp/2023-01.jpg": () => import("../../../../chunks/2023-01.js") });
  const iterableModule = Object.entries(module);
  const options = { year: "numeric", month: "long" };
  const pfps = await Promise.all(
    iterableModule.map(async ([path, resolver]) => {
      const pfpData = await resolver().then(({ default: imageUrl }) => {
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
    pfps
  };
}
export {
  load
};
