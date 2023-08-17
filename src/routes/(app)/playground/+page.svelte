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
  <div class="mc-c-gallery">
    {#each data.fanart as image}
      <div class="mc-c-gallery--container">
        {#if !image.error}
          <img 
            src={image.url} 
            alt={image.title} 
            on:click={openModal(Modal, {imageData: image})}/>
          <p>{image.title}</p>
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

      @media (max-aspect-ratio: 1/1) {
        height: 30vh;
      }

      &:hover {
        cursor: pointer;
      }

      img {
        border-radius: 10px;
        max-height: 100%;
        width: 100%;
        min-width: 50%;
        object-fit: cover;
        object-position: top;

        @media (max-aspect-ratio: 1/1) {
          height: 30vh;
          min-width: 0;
        }
      }
    }
  }
</style>
