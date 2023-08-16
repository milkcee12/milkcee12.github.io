async function load() {
  const module = /* @__PURE__ */ Object.assign({ "/src/lib/img/about-fun-pfp/2020-03.jpg": () => import("../../../../chunks/2020-03.js"), "/src/lib/img/about-fun-pfp/2020-05.jpg": () => import("../../../../chunks/2020-05.js"), "/src/lib/img/about-fun-pfp/2020-09.jpg": () => import("../../../../chunks/2020-09.js"), "/src/lib/img/about-fun-pfp/2020-10.jpg": () => import("../../../../chunks/2020-10.js"), "/src/lib/img/about-fun-pfp/2021-06.jpg": () => import("../../../../chunks/2021-06.js"), "/src/lib/img/about-fun-pfp/2021-07.png": () => import("../../../../chunks/2021-07.js"), "/src/lib/img/about-fun-pfp/2021-11.jpg": () => import("../../../../chunks/2021-11.js"), "/src/lib/img/about-fun-pfp/2022-10.jpg": () => import("../../../../chunks/2022-10.js"), "/src/lib/img/about-fun-pfp/2023-01.jpg": () => import("../../../../chunks/2023-01.js") });
  const iterableModule = Object.entries(module);
  const options = { year: "numeric", month: "long" };
  const pfps = await Promise.all(
    iterableModule.map(async ([url]) => {
      let filename = url.split("/").pop();
      let date = new Date(filename.substring(0, filename.length - 3));
      let dateVerbose = date.toLocaleDateString("en-US", options);
      return { url, date: dateVerbose };
    })
  );
  return {
    pfps
  };
}
export {
  load
};
