import { c as create_ssr_component } from "./ssr.js";
async function loadImagesFromModule(module) {
  const iterableModule = Object.entries(module);
  const images = await Promise.all(
    iterableModule.map(async ([filepath, resolver]) => {
      const imageData = await resolver().then(
        ({ default: imageUrl }) => {
          let filename = filepath.split("\\").pop().split("/").pop();
          filename = filename.replace(/\.[^/.]+$/, "");
          return {
            filename,
            url: imageUrl
          };
        }
      );
      return imageData;
    })
  );
  return images;
}
const ImageLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="loading" data-svelte-h="svelte-1meiooq"><p>Loading...</p> <img src="https://media.tenor.com/30iGQ7phGQ4AAAAC/lazy-egg-lazy.gif" alt="Loading GIF"></div>`;
});
export {
  ImageLoader as I,
  loadImagesFromModule as l
};
