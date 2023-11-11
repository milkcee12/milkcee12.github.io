<script lang="ts">
  import { openModal } from "svelte-modals";
  import Modal from "$lib/components/common/Modal.svelte";
  import Heading from "$lib/components/common/Heading.svelte";
  import LazyImage from "$lib/components/common/LazyImage.svelte";
  import { loadImagesFromModule } from "$lib/util";
  import ImageLoader from "$lib/components/common/ImageLoader.svelte";
  import jsonData from "$lib/json/playground.json";

  enum Module {
    FEATURED = 0,
    FANART = 1,
  }

  interface PlaygroundJSON {
    id: number;
    title?: string;
    desc: string;
    date: string;
    link?: string;
    link_text?: string;
  }
  let jsonDataTyped: PlaygroundJSON[] = jsonData.images;

  const modules = [
    import.meta.glob("$lib/images/playground/featured/*"),
    import.meta.glob("$lib/images/playground/fanart/*"),
  ];

  async function getImageMapFromModule(index: Module) {
    let images = await loadImagesFromModule(modules[index]);
    return images;
  }
</script>

<svelte:head>
  <title>Playground | Milkcee Studios</title>
</svelte:head>

<p>
  A page dedicated to all the smaller, one-off projects I've done throughout the
  years. Click on the the images to learn more about them!
</p>

<section id="featured">
  <Heading headingText="Originals" emoji="🎈" hasLink={false} />
  <p>Visions from the worlds inside my head.</p>
  <div class="gallery">
    {#await getImageMapFromModule(Module.FEATURED)}
      <ImageLoader />
    {:then images}
      {#each images as image}
        {@const id = parseInt(image.filename) - 1}
        {@const title = jsonDataTyped[id].title ?? "Untitled"}
        {@const imageData = Object.assign(image, jsonDataTyped[id])}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="item"
          on:click={() => openModal(Modal, { imageData: imageData })}>
          <div class="hover-overlay" />
          <p>{title}<br /><small><i>{imageData.date}</i></small></p>
          <LazyImage src={image.url} alt={title} />
        </div>
      {/each}
    {/await}
  </div>
</section>

<section id="fanart">
  <Heading headingText="Fanart" emoji="📸" hasLink={false} />
  <p>Paying homage to some of my favorite works by other artists.</p>
  <div class="gallery">
    {#await getImageMapFromModule(Module.FANART)}
      <ImageLoader />
    {:then images}
      {#each images as image}
        {@const id = parseInt(image.filename) - 1}
        {@const title = jsonDataTyped[id].title ?? "Untitled"}
        {@const imageData = Object.assign(image, jsonDataTyped[id])}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="item"
          on:click={() => openModal(Modal, { imageData: imageData })}>
          <div class="hover-overlay" />
          <p>{title}<br /><small><i>{imageData.date}</i></small></p>
          <LazyImage src={image.url} alt={title} />
        </div>
      {/each}
    {/await}
  </div>
</section>

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
