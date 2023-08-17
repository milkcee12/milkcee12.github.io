<script>
  import Icon from "@iconify/svelte";
  import { closeModal } from "svelte-modals";
  import ArrowLink from "./ArrowLink.svelte";
  import { fade } from "svelte/transition";

  // Provided by <Modals />
  export let isOpen;

  export let imageData;
</script>

{#if isOpen}
  <div role="dialog" class="mc-c-modal" transition:fade|global>
    <div class="mc-c-modal--container">
      <div class="mc-c-modal--close">
        <!-- <button on:click={closeModal}>X</button> -->
        <Icon
          icon="mingcute:close-line"
          width="25"
          height="25"
          color="color-light"
          on:click={closeModal}
        />
      </div>
      <div class="mc-c-modal--content">
        <div class="mc-c-modal--image">
          <img src={imageData.url} alt={imageData.title} />
        </div>
        <div class="mc-c-modal--text">
          <div class="mc-c-modal--text--title">
            <h3>{imageData.title}</h3>
            <p>{imageData.year}</p>
          </div>
          <p>{imageData.desc}</p>
          {#if imageData.link}
            <div class="md-c-modal--text--link">
              <ArrowLink
                href={imageData.link}
                color="art"
                name="See more"
                newTab={true}
                alignRight={true}
              />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .mc-c-modal {
    position: fixed;
    top: 0;
    bottom: 2em;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    pointer-events: none;

    &--container {
      height: 90vh;
      width: 90vw;
    }

    &--close {
      text-align: right;
      button {
        background: none;
        color: $color-light;
        cursor: pointer;
      }
    }
    &--content {
      display: flex;
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      justify-content: center;
      background-color: $color-dark;
      border: $color-gray 1px solid;
    }

    &--text {
      padding: 30px;
      flex: 2 0 20%;
      pointer-events: all;
      &--title {
        h3 {
          margin-bottom: 0;
        }
        p {
          margin-top: 5px;
        }
      }
    }

    &--image {
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 100%;
      width: 75%;
      flex: 7 1 70%;
      background-color: black;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 992px) {
    .mc-c-modal {
      &--content {
      }
      &--text {
        flex: 1;
        flex-basis: 100%;
      }
      &--image {
        max-height: 70%;
        flex: 1;
      }
    }
  }
</style>
