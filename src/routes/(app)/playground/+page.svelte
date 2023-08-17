<script>
  import { openModal } from "svelte-modals";
  import Modal from "../../../lib/components/Modal.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Playground | Milkcee Studios</title>
</svelte:head>

<h1>Playground</h1>
<section>
  <h2>Fanart</h2>
  <p>Paying homage to some of my favorite works in pop culture.</p>
  <div class="mc-c-gallery">
    {#each data.fanart as image}
      <div class="mc-c-gallery--container">
        {#if !image.error}
          <p>{image.title}</p>
          <img
            src={image.url}
            alt={image.title}
            on:click={openModal(Modal, { imageData: image })}
          />
        {:else}
          <img src={image.url} alt="fanart" />
        {/if}
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    margin-bottom: 8em;
  }
  .mc-c-gallery {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    gap: 1em;

    &--container {
      flex: 1 1 auto;
      flex-grow: 1;
      height: 40vh;
      text-align: center;

      @media (max-aspect-ratio: 1/1) {
        height: 30vh;
      }

      p {
        color: $color-light;
        font-size: 1.3rem;
        margin: 0;
        z-index: 10;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: opacity 0.25s;
        height: 0;
      }

      &:hover {
        cursor: pointer;

        p {
          opacity: 1;
        }

        img {
          opacity: 0.4;
        }
      }

      img {
        border-radius: 10px;
        max-height: 100%;
        width: 100%;
        min-width: 50%;
        object-fit: cover;
        object-position: top;
        transition: opacity 0.25s;
        position: relative;

        @media (max-aspect-ratio: 1/1) {
          height: 30vh;
          min-width: 0;
        }
      }
    }
  }
</style>
