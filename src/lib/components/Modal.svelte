<script>
  import { onMount } from "svelte";
  import { closeModal } from "svelte-modals";
  import ArrowLink from "./ArrowLink.svelte";

  // Provided by <Modals />
  export let isOpen;

  export let imageData;

  // TODO: onMount
  // TODO: Create playgorund database
  // TODO: Get metadata from supabase id
</script>

{#if isOpen}
  <div role="dialog" class="mc-c-modal">
    <div class="mc-c-modal--container">
      <div class="mc-c-modal--close">
        <button on:click={closeModal}>X</button>
      </div>
      <div class="mc-c-modal--content">
        <img src={imageData.url} alt={imageData.title} />
        <div class="mc-c-modal--text">
          <h3>{imageData.title}</h3>
          <p>{imageData.year}</p>
          <p>{imageData.desc}</p>
          <ArrowLink
            href={imageData.link}
            color="art"
            name="See more"
            newTab={true}
          />
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .mc-c-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &--container {
        width: 85%;
    }

    &--close {
        text-align: right;
        button {
            background: none;
            color: $color-light;
            cursor: pointer;
            // TODO: style close button
        }
    }
    &--content {
        margin: auto;
        display: flex;
        gap: 30px;
        background-color: $color-dark;
    }

    &--text {
        padding: 30px 30px 0 0;
    }

    img {
      max-height: 90vh;
      max-width: 80%;
    }
  }
</style>
