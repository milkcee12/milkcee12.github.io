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
        <Icon
          icon="mingcute:close-line"
          width="25"
          height="25"
          color="color-light"
          on:click={closeModal}
        />
      </div>
      <div class="mc-c-modal--content">
        {#if imageData.title == null}
          <div class="mc-c-modal--image">
            <img src={imageData.url} alt="playground-art" />
          </div>
          <div class="mc-c-modal--text">
            <div class="mc-c-modal--text--title">
              <h3>Untitled</h3>
              <p>Year</p>
            </div>
            <p>-</p>
          </div>
        {:else}
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
        {/if}
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
      max-width: 90vw;
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
      pointer-events: all;
      display: flex;
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      justify-content: center;
      background-color: $color-dark-gray;
      border-radius: 15px;
      overflow: hidden;
      border: $color-gray 1px solid;
      overflow-y: scroll;
    }

    &--text {
      padding: 20px 40px;
      flex: 5 0 20%;
      background-color: $color-dark-accent;
      margin: 20px;
      border-radius: 15px;
      box-sizing: border-box;
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
      max-width: 75%;
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
      &--container {
        height: 85vh;
      }
      &--text {
        flex: 1;
        flex-basis: 100%;
      }
      &--image {
        flex-basis: 100%;
        max-width: 100%;
        max-height: 70%;
        flex: 1;
      }
    }
  }
</style>
