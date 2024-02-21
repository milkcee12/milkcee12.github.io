<script lang="ts">
  import { openModal } from "svelte-modals";
  import GalleryModal from "$lib/components/common/GalleryModal.svelte";
  import Heading from "$lib/components/common/Heading.svelte";
  import LazyImage from "$lib/components/common/LazyImage.svelte";
  import { PlaygroundModule } from "$lib/imageModules";

  import cowsRoomStill1 from "$lib/images/playground/cows_room_still1.jpg";
  import cowsRoomPlaceholder from "$lib/images/playground/cows_room_placeholder.jpg";
  import cowsRoomVideo from "$lib/images/playground/cows_room.mp4";
  import ImageGallery from "$lib/components/ImageGallery.svelte";
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
  <ImageGallery module={PlaygroundModule.FEATURED} />
</section>

<section id="fanart">
  <Heading headingText="Fanart" emoji="📸" hasLink={false} />
  <p>Paying homage to some of my favorite works by other artists.</p>
  <ImageGallery module={PlaygroundModule.FANART} />
</section>

<section id="animation-3d">
  <Heading headingText="3-D Animation" emoji="📚" hasLink={false} />
  <p>Some work produced from my 3-D Animation minor at USC.</p>
  <ImageGallery module={PlaygroundModule.ANIMATION_3D} />
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
