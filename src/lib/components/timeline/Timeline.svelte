<script lang="ts">
  import { pxStringToFloat } from "$lib/util";
  import data from "$lib/json/projects.json";
  import TimeNode from "./TimeNode.svelte";
  import TimelineFill from "./TimelineFill.svelte";
  import { onMount } from "svelte";
  import ColorLink from "../common/ColorLink.svelte";

  let timelineGraph: HTMLElement, timelineHeight: number;

  let numProjects: number = Object.keys(data.projects).length;

  function calcTimelineHeight() {
    timelineHeight = timelineGraph
      ? pxStringToFloat(
          getComputedStyle(timelineGraph).getPropertyValue("height")
        )
      : 0;
  }

  onMount(() => {
    calcTimelineHeight();
  });
</script>

<svelte:window on:resize={calcTimelineHeight} />

<section id="timeline">
  <div class="heading">
    <h2>Featured Work &#129466;</h2>
    <ColorLink href="/work" colorArt={true}>See all work</ColorLink>
  </div>
  <div class="timeline-graph" bind:this={timelineGraph}>
    {#each data.projects as project}
      <TimeNode {project} {numProjects}>
        <!-- TimelineFill only created for first node -->
        <TimelineFill {timelineHeight} />
      </TimeNode>
    {/each}
  </div>
</section>

<style lang="scss">
  .timeline-graph {
    width: 80%;
    margin: auto;
    @include respond-to("large") {
      width: 100%;
    }
  }
</style>
