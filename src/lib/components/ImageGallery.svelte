<script lang="ts">
  import LazyImage from "./common/LazyImage.svelte";
  import { openModal } from "svelte-modals";
  import GalleryModal from "$lib/components/common/GalleryModal.svelte";
  import ImageLoader from "$lib/components/common/ImageLoader.svelte";
  import { loadImagesFromModule } from "$lib/util";
  import { playgroundModules, PlaygroundModule } from "$lib/imageModules";
  import data from "$lib/data/playground.yml";

  export let module: PlaygroundModule;
  let dataTyped: PlaygroundYaml[] = data.images;

  interface PlaygroundYaml {
    id: number;
    title?: string;
    desc: string;
    date: number;
    link?: string;
    link_text?: string;
    video?: boolean;
  }

  async function getImageMapFromModule(index: PlaygroundModule) {
    let images = await loadImagesFromModule(playgroundModules[index]);
    return images;
  }
</script>

<div class="gallery">
  {#await getImageMapFromModule(module)}
    <ImageLoader />
  {:then images}
    {#each images as image}
      {#if !image.filename.includes("-video")}
        {@const id = parseInt(image.filename) - 1}
        {@const title = dataTyped[id].title ?? "Untitled"}
        {@const isVideo = dataTyped[id].video ?? false}
        {@const imageData = Object.assign(image, dataTyped[id])}

        {#if isVideo}
          <div class="item">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video poster={image.url} controls>
              <source src={image.url.replace(".jpg", "-video.mp4")} type="video/mp4" />
            </video>
          </div>
        {:else}
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="item"
            on:click={() => openModal(GalleryModal, { imageData: imageData })}>
            <div class="hover-overlay" />
            <p>{title}<br /><small><i>{imageData.date}</i></small></p>
            <LazyImage src={image.url} alt={title} />
          </div>
        {/if}
      {/if}
    {/each}
  {/await}
</div>

<style lang="scss">
  .gallery {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    gap: 1em;

    .item {
      flex: 1 1 auto;
      flex-grow: 1;
      height: 19em;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      transition: all 0.25s;
      border-radius: 1em;
      transition: opacity 0.5s;

      video {
        border-radius: 1em;
        height: 100%;
        max-width: 100%;
      }

      p {
        color: $white;
        margin-inline: 1em;
        font-size: 1.2em;
        max-width: 100%;
        top: 0;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        opacity: 0;
        // animation: float-reverse 0.6s;
      }

      .hover-overlay {
        position: absolute;
        justify-self: flex-start;
        width: 100%;
        height: 100%;
        background-color: none;
        border-radius: 1em;
        transition: all 0.5s ease-out;
      }

      &:hover {
        cursor: pointer;

        .hover-overlay {
          background-color: rgba(9, 10, 13, 0.6);
        }

        p {
          animation: float 0.7s forwards;
        }
      }

      @keyframes float {
        from {
          top: 0%;
        }
        70% {
          top: 52%;
        }
        to {
          transform: translateY(-50%);
          top: 50%;
          opacity: 1;
        }
      }
      @keyframes float-reverse {
        from {
          transform: translateY(-50%);
          top: 50%;
          opacity: 1;
        }
        30% {
          top: 52%;
        }
        to {
          top: 0%;
        }
      }
    }
  }
</style>
