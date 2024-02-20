<script lang="ts">
  import { openModal } from "svelte-modals";
  import GalleryModal from "$lib/components/common/GalleryModal.svelte";
  import Heading from "$lib/components/common/Heading.svelte";
  import LazyImage from "$lib/components/common/LazyImage.svelte";
  import { loadImagesFromModule } from "$lib/util";
  import ImageLoader from "$lib/components/common/ImageLoader.svelte";
  import data from "$lib/data/playground.yml";

  import cowsRoomStill1 from "$lib/images/playground/cows_room_still1.jpg";
  import cowsRoomPlaceholder from "$lib/images/playground/cows_room_placeholder.jpg";
  import cowsRoomVideo from "$lib/images/playground/cows_room.mp4";

  enum Module {
    FEATURED = 0,
    FANART = 1,
  }

  interface PlaygroundYaml {
    id: number;
    title?: string;
    desc: string;
    date: string;
    link?: string;
    link_text?: string;
  }
  let dataTyped: PlaygroundYaml[] = data.images;

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
<p>
  <i>
    View more work at my <a
      href="https://www.instagram.com/milkcee12/"
      target="_blank"
      class="color-art">art account</a>
    or take a peek behind-the-scenes in my
    <a
      href="https://www.instagram.com/soymilkcee12/"
      target="_blank"
      class="color-art">sketch account</a
    >!
  </i>
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
        {@const title = dataTyped[id].title ?? "Untitled"}
        {@const imageData = Object.assign(image, dataTyped[id])}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="item"
          on:click={() => openModal(GalleryModal, { imageData: imageData })}>
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
        {@const title = dataTyped[id].title ?? "Untitled"}
        {@const imageData = Object.assign(image, dataTyped[id])}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="item"
          on:click={() => openModal(GalleryModal, { imageData: imageData })}>
          <div class="hover-overlay" />
          <p>{title}<br /><small><i>{imageData.date}</i></small></p>
          <LazyImage src={image.url} alt={title} />
        </div>
      {/each}
    {/await}
  </div>
</section>

<section id="animation-3d">
  <Heading headingText="3-D Animation" emoji="📚" hasLink={false} />
  <p>Some work produced from my 3-D Animation minor at USC.</p>
  <div class="gallery">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="item"
      on:click={() =>
        openModal(GalleryModal, {
          imageData: {
            url: cowsRoomStill1,
            title: "Cow's Room still",
            date: "2022",
            desc: "Modeled, textured, and rendered in Maya.",
          },
        })}>
      <div class="hover-overlay" />
      <p>Cow's Room still<small><br><i>2022</i></small></p>
      <LazyImage src={cowsRoomStill1} alt="Cow's Room still" />
    </div>
    <div class="item">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video poster={cowsRoomPlaceholder} controls>
        <source src={cowsRoomVideo} type="video/mp4" />
      </video>
    </div>
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
