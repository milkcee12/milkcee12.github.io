function load() {
  const pfpDirectory = /* @__PURE__ */ Object.assign({ "../../../lib/img/about-fun-pfp/2020-03.jpg": () => import("../../../../chunks/2020-03.js"), "../../../lib/img/about-fun-pfp/2020-05.jpg": () => import("../../../../chunks/2020-05.js"), "../../../lib/img/about-fun-pfp/2020-09.jpg": () => import("../../../../chunks/2020-09.js"), "../../../lib/img/about-fun-pfp/2020-10.jpg": () => import("../../../../chunks/2020-10.js"), "../../../lib/img/about-fun-pfp/2021-06.jpg": () => import("../../../../chunks/2021-06.js"), "../../../lib/img/about-fun-pfp/2021-07.png": () => import("../../../../chunks/2021-07.js"), "../../../lib/img/about-fun-pfp/2021-11.jpg": () => import("../../../../chunks/2021-11.js"), "../../../lib/img/about-fun-pfp/2022-10.jpg": () => import("../../../../chunks/2022-10.js"), "../../../lib/img/about-fun-pfp/2023-01.jpg": () => import("../../../../chunks/2023-01.js") });
  const options = { year: "numeric", month: "long" };
  const pfps = [];
  for (const modulePath in pfpDirectory) {
    pfpDirectory[modulePath]().then(({ default: imageUrl }) => {
      let filename = imageUrl.split("/").pop();
      let date = new Date(filename.substring(0, filename.length - 3));
      let dateVerbose = date.toLocaleDateString("en-US", options);
      pfps.push({ url: imageUrl, date: dateVerbose });
    });
  }
  console.log(pfps);
  return {
    pfps
  };
}
export {
  load
};
