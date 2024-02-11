<script lang="ts">
  import { closeModal } from "svelte-modals";
  import Fa from "svelte-fa";
  import { faXmark as closeIcon } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
  import ColorLink from "./ColorLink.svelte";

  export let isOpen: boolean; // Required for svelte-modals
  export let imageData: any;
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fade|global>
    <div class="container">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="close" on:click={closeModal}>
        <Fa icon={closeIcon} />
      </div>
      <div class="content">
        <div class="image">
          <img src={imageData.url} alt={imageData.title} />
        </div>
        <div class="text">
          <h3>{imageData.title ?? "Untitled"}</h3>
          <p><i>{imageData.date ?? "Unknown year"}</i></p>
          <p>{imageData.desc ?? "-"}</p>
          {#if imageData.link}
            <ColorLink href={imageData.link} target="_blank" colorArt={true}
              >{imageData.link_text}</ColorLink>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    pointer-events: none;

    .container {
      height: 90vh;
      max-width: 90vw;
      position: relative;
    }

    .close {
      pointer-events: all;
      color: $white;
      right: 0;
      font-size: x-large;
      position: absolute;
      margin: 0.4em 0.5em;
      z-index: 102;
      &:hover {
        cursor: pointer;
      }
    }

    .content {
      pointer-events: all;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      background-color: $dark-gray;
      border-radius: 1em;
      border: $gray 1px solid;
      box-sizing: border-box;
    }

    .text {
      padding: 1em 2em;
      flex: 5 0 20%;
      background-color: $dark-gray;
      margin: 1em;
      border-radius: 1em;
      box-sizing: border-box;

      h3 {
        margin-top: 1.5em;
      }
    }

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 100%;
      max-width: 75%;
      flex: 7 1 70%;
      background-color: $off-black;
      position: relative;
      border-radius: 1em 0 0 1em;

      img {
        position: absolute;
        max-height: 100%;
        max-width: 100%;
      }
    }

    @include respond-to("medium") {
      .content {
        flex-direction: column;
      }

      .text {
        h3 {
          margin-top: 0.25em;
        }
      }

      .image {
        border-radius: 1em 1em 0 0;
        max-width: 100%;
        max-height: 70%;
      }
    }
  }
</style>
