<script lang="ts">
  import { pxStringToFloat } from "$lib/util";
  import data from "$lib/data/yml/projects.yml";
  import TimeNode from "./TimeNode.svelte";
  import TimelineFill from "./TimelineFill.svelte";
  import { onMount } from "svelte";
  import ColorLink from "$lib/components/common/ColorLink.svelte";
  import Heading from "$lib/components/common/Heading.svelte";

  let timelineGraph: HTMLElement;
  let timelineHeight: number;
  let numProjects: number = Object.keys(data.projects).length;

  $: calcTimelineData();
  function calcTimelineData() {
    timelineHeight = timelineGraph
      ? pxStringToFloat(
          getComputedStyle(timelineGraph).getPropertyValue("height")
        )
      : 0;
  }

  onMount(() => {
    calcTimelineData();
  });
</script>

<svelte:window
  on:resize={calcTimelineData}
  on:load={calcTimelineData} />

<section id="timeline">
  <div class="heading-spacer">
    <Heading headingText="Featured Work" emoji="🦺" hasLink={true}>
      <ColorLink href="/work" colorArt={true}>See all work</ColorLink>
    </Heading>
  </div>
  <div class="timeline-graph" bind:this={timelineGraph}>
    {#each data.projects as project, i}
      <TimeNode {project} {numProjects} {i}>
        <!-- TimelineFill only created for first node -->
        <TimelineFill {timelineHeight} />
      </TimeNode>
    {/each}
  </div>
</section>

<style lang="scss">
  .heading-spacer {
    margin-bottom: 4em;
  }
  .timeline-graph {
    width: 80%;
    margin: auto;
    @include respond-to("large") {
      width: 100%;
    }
  }
</style>
