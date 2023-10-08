<script lang="ts">
  import { pxStringToFloat } from "$lib/util";
  import data from "$lib/json/projects.json";
  import TimeNode from "./TimeNode.svelte";
  import TimelineFill from "./TimelineFill.svelte";
  import { onMount } from "svelte";

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
  <h2>Featured Work &#129466;</h2>
  <div bind:this={timelineGraph}>
    {#each data.projects as project}
      <TimeNode {project} {numProjects}>
        <!-- Timeline fill only created for first node -->
        <TimelineFill {timelineHeight} /> 
      </TimeNode>
    {/each}
  </div>
</section>
