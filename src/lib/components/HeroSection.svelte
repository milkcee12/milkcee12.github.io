<script lang="ts">
  import { slide, fly } from "svelte/transition";
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from "svelte";
  import figure from "$lib/images/hero_figure.webp";
  import signature from "$lib/images/hero_signature.webp";

  let transitionOnLoad: boolean = false;
  onMount(() => {
    transitionOnLoad = true;
  });
</script>

<section id="hero">
  <!-- Allows svelte transitions on load -->
  {#if transitionOnLoad}
    <div class="left" />
    <div class="right" in:slide={{ axis: "y", duration: 1000, easing: cubicInOut }} />
    <img class="signature" src={signature} alt="Hero section signature" in:slide={{ axis: "y", duration: 1000, easing: cubicInOut }} />
    <img class="figure" src={figure} alt="Hero section figure" in:fly={{ delay: 500, duration: 800, easing: cubicInOut }} />
  {/if}
</section>

<style lang="scss">
  #hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100%;
    margin-bottom: 0;
    pointer-events: none;

    .left {
      grid-column-start: 1;
      justify-self: stretch;
      background-color: $off-black;
    }
    .right {
      grid-column-start: 2;
      justify-self: stretch;
      background-color: $green;
    }

    .signature {
      position: absolute;
      height: 110vh;
      top: -10vh;
      left: calc(50% - 59vh);
      @include respond-to("medium") {
        @media (orientation: portrait) {
          height: 80vh;
          left: calc(50% - 45vh);
        }
      }
      @include respond-to("large") {
        @media (orientation: landscape) {
          height: 100vh;
          left: calc(50% - 55vh);
        }
      }
    }

    .figure {
      position: absolute;
      height: 102vh;
      top: 2em;
      left: calc(50% - 30vh);
      @include respond-to("large") {
        @media (orientation: landscape) {
          left: calc(50% - 30vh);
        }
      }
    }
  }
</style>
