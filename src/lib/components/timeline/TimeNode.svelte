<script lang="ts">
  import ColorLink from "../common/ColorLink.svelte";

  export let project: any;
  export let numProjects: number;

  let isCurrentProject: boolean = project.end_date;
  let hasLink: boolean = project.hasOwnProperty("link");
  let isReverse: boolean = project.id % 2 == 0;
  let isFirstChild: boolean = project.id == 1;
  let isLastChild: boolean = project.id == numProjects;

  let node: HTMLElement;
  let isNodeVisited: boolean = false;
  function updateNodeVisited() {
    let scrollPos: number = window.scrollY;
    let nodePos: number = node.getBoundingClientRect().top + scrollPos;
    let visitedThreshold = scrollPos + window.innerHeight * 0.25 - 16 * 2.6;

    isNodeVisited = nodePos < visitedThreshold;
  }
</script>

<svelte:window
  on:load={updateNodeVisited}
  on:scroll={updateNodeVisited}
  on:resize={updateNodeVisited} />

<div class="time-node" class:reverse={isReverse}>
  <!-- Tags -->
  <div class="tags">
    <div class="tech-tags">
      <ul>
        {#each project.tags.tech as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    </div>
    <div class="art-tags">
      <ul>
        {#each project.tags.art as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Centerline -->
  <div
    class="node"
    class:first={isFirstChild}
    class:visited={isNodeVisited}
    bind:this={node}>
    <!-- Adds timeline fill component -->
    {#if isFirstChild}
      <slot />
    {/if}
    {#if isLastChild}
      <svg
        class="down-arrow"
        style="width: 32px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
    {/if}
  </div>

  <!-- Info bubble -->
  <div class="bubble">
    <div class="bubble-tail" />
    <div class="bubble-content">
      <h3 class="title">{project.title}</h3>
      <p>
        <i
          >{project.start_date} — {isCurrentProject
            ? project.end_date
            : "Present"}</i>
      </p>
      <p>{project.desc}</p>
      {#if hasLink}
        <p>
          <ColorLink
            href={project.link}
            target="_blank"
            colorArt={project.tags.art.length > project.tags.tech.length}
            >{project.link_text}</ColorLink>
        </p>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .time-node {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;

    @include respond-to("small") {
      grid-template-columns: 0.5fr 2fr;
    }

    .bubble {
      display: grid;
    }
    .bubble-tail {
      position: absolute;
      content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
      margin-top: 2.5em;
      justify-self: flex-start;
      transform: translateX(-1.6em);
    }

    &.reverse {
      .bubble-tail {
        content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
        margin-top: 2.5em;
        justify-self: flex-end;
        transform: translateX(1.6em);

        // All tails point left on mobile devices
        @include respond-to("small") {
          justify-self: flex-start;
          content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
          transform: translateX(-1.6em);
        }
      }
      .bubble {
        order: 0;
      }
      .node {
        order: 1;
      }
      .tags {
        justify-self: start;
        order: 2;
      }

      @include respond-to("small") {
        .bubble {
          order: 1;
        }
        .node {
          order: 0;
        }
      }
    }
    .bubble-content {
      border: 3px solid $white;
      border-radius: 0.8em;
      padding: 2em 2.5em;
      margin-bottom: 5em;

      .title {
        margin-top: 0.5em;
        margin-bottom: 1em;
      }

      p {
        color: $light-gray;
      }
    }

    .node {
      margin: 0 auto;

      @include respond-to("small") {
        margin: 0 3em 0 1em;
      }

      // White timeline line
      background-color: $white;
      width: 3px;

      // First timeline node has shorter vertical line
      &.first {
        margin-top: 3em;
      }

      // Circle node shape
      @mixin circle-node {
        content: "";
        z-index: 102;
        display: block;
        position: relative;
        width: 15px;
        height: 15px;
        margin-top: 3em;
        border: 3px solid $color-art;
        border-radius: 50%;
        right: 0.5em;
      }

      &::before {
        @include circle-node;
        background-color: $white;
      }
      &.visited::before {
        @include circle-node;
        background-color: $color-art;
      }
      &.first::before {
        @include circle-node;
        background-color: $white;
        margin-top: 0;
      }
      &.first.visited::before {
        @include circle-node;
        background-color: $color-art;
        margin-top: 0;
      }

      // Last timeline node has arrow
      .down-arrow {
        fill: $white;
        display: block;
        width: 32px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        top: calc(100% - 5.6em);
        z-index: 100;
      }
    }

    .tags {
      justify-self: end;
      margin-top: 2em;

      ul {
        padding: 0;
        margin-block-start: 0;
        margin-block-end: 0;
      }

      li {
        list-style: none;
        border-left: 6px solid $light-gray;
        padding-left: 1.2em;
        padding-bottom: 0.5em;
        color: $light-gray;
      }
      .tech-tags li {
        border-color: $color-tech;
      }
      .art-tags li {
        border-color: $color-art;
      }

      @include respond-to("small") {
        display: none;
      }
    }
  }
</style>
