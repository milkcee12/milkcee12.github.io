<script lang="ts">
  import { slide, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { onMount } from "svelte";
  import figure from "$lib/images/hero_figure.webp";
  import signature from "$lib/images/hero_signature.webp";
  import { faArrowRightLong as arrow } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  let transitionOnLoad: boolean = false;
  onMount(() => {
    transitionOnLoad = true;
  });
</script>

<section id="hero">
  <!-- Allows svelte transitions on load -->
  {#if transitionOnLoad}
    <div class="left" />
    <div
      class="right"
      in:slide={{ axis: "y", duration: 1000, easing: cubicInOut }} />
    <img
      class="signature"
      src={signature}
      alt="Hero section signature"
      in:fly={{ delay: 400, duration: 800, easing: cubicInOut }} />
    <img
      class="figure"
      src={figure}
      alt="Hero section figure"
      in:fly={{ delay: 100, duration: 500, easing: cubicInOut }} />
    <div class="explore" in:fly={{ delay: 400, duration: 800, easing: cubicInOut }}>
      <p>Explore</p>
      <div class="arrow">
        <Fa icon={arrow} class="color-tech" />
      </div>
    </div>
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
    position: relative;

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
        height: 80vh;
        left: calc(50% - 45vh);
      }
      @include respond-to("large") {
        height: 100vh;
        left: calc(50% - 55vh);
      }
    }

    .figure {
      position: absolute;
      height: 102vh;
      top: 2em;
      left: calc(50% - 30vh);
      @include respond-to("large") {
        left: calc(50% - 30vh);
      }
    }

    .explore {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.6em;
      transform: rotate(90deg);
      bottom: 6em;
      left: 1.5em;

      p {
        margin: 0;
      }

      .arrow {
        margin-top: 0.25em;
        font-size: large;
        animation: pendulum 3s infinite ease-in-out;
      }

      @keyframes pendulum {
        0%,
        100% {
          transform: translateX(0em);
        }
        50% {
          transform: translateX(0.8em);
        }
      }
    }
  }
</style>
