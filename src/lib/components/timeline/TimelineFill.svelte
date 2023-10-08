<script lang="ts">
  import { clamp } from "$lib/util";

  export let timelineHeight: number;
  let fill: HTMLElement;
  let arrow: SVGSVGElement;

  function updateFill() {
    let scrollPos: number = window.scrollY;
    // Should not start filling timeline until past the hero section and navbar
    // window.innerHeight calculations approximates the size of the mentioned elements
    let newHeight: number = clamp(
      scrollPos - window.innerHeight,
      80,
      timelineHeight
    );
    fill.style.height = `calc(${newHeight}px - 4.3em)`;
    arrow.style.top = `calc(${getComputedStyle(fill).getPropertyValue("height")} - 1.3em)`;
  }

  // Adapted from https://www.sitepoint.com/throttle-scroll-events/
  function throttle(fn: Function, wait: number) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
</script>

<svelte:window
  on:scroll={throttle(updateFill, 10)}
  on:resize={throttle(updateFill, 10)}
/>

<div class="fill" bind:this={fill} />
<svg
  class="down-arrow"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  style="width: 32px;"
  bind:this={arrow}
  ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
  /></svg
>

<style lang="scss">
  .fill {
    margin: 0 auto;
    position: absolute;
    background-color: $green;
    width: 3px;
    z-index: 100;
  }

  .down-arrow {
    fill: $green;
    width: 32px;
    position: relative; 
    left: 50%;
    transform: translateX(-50%);
    z-index: 102;
  }
</style>
