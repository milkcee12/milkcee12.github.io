<script lang="ts">
  import { lerp } from "$lib/util";

  export let timelineHeight: number;

  let timelineStart: number;
  let computedTimelineHeight: number;
  let fill: HTMLElement;
  let arrow: SVGSVGElement;

  $: if (fill && timelineHeight) updateTimelineHeight();

  // Equivalent to 4.3em when default font size is 16px.
  const TIMELINE_OFFSET = 4.3 * 16;

  function updateTimelineFill() {
    let scrollDiff = Math.max(
      0,
      window.scrollY - timelineStart + window.innerHeight * 0.25
    );
    let newHeight: number = lerp(
      0,
      computedTimelineHeight,
      Math.min(1.0, scrollDiff / computedTimelineHeight)
    );
    fill.style.height = `${newHeight}px`;

    if (newHeight > 0) {
      arrow.style.display = "block";
      arrow.style.top = `calc(
      ${getComputedStyle(fill).getPropertyValue("height")} 
      - 1.3em)`;
    } else {
      arrow.style.display = "none";
    }
  }

  function updateTimelineHeight() {
    timelineStart = fill.getBoundingClientRect().top + window.scrollY;
    computedTimelineHeight = timelineHeight - TIMELINE_OFFSET;
    updateTimelineFill();
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
  on:scroll={throttle(updateTimelineFill, 10)} />

<div class="timeline-fill">
  <div class="fill" bind:this={fill} />
  <svg
    class="down-arrow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style="width: 32px;"
    bind:this={arrow}
    ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
</div>

<style lang="scss">
  .timeline-fill {
    z-index: 100;
  }
  .fill {
    height: 0;
    margin: 0 auto;
    position: absolute;
    background-color: $green;
    width: 3px;
  }

  .down-arrow {
    z-index: 101;
    fill: $green;
    width: 32px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
</style>
