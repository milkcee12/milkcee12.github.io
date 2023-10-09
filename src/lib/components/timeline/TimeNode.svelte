<script lang="ts">
  export let project: any;
  export let numProjects: number;

  let isCurrentProject: Boolean = project.end_date;
  let hasLink: Boolean = project.hasOwnProperty("link");
  let isReverse: Boolean = project.id % 2 == 0;
  let isFirstChild: Boolean = project.id == 1;
  let isLastChild: Boolean = project.id == numProjects;
</script>

<div class="time-node {isReverse ? 'reverse' : ''}">
  <div class="tags">
    <ul>
      <div class="tech-tags">
        {#each project.tags.tech as tag}
          <li>{tag}</li>
        {/each}
      </div>
      <div class="art-tags">
        {#each project.tags.art as tag}
          <li>{tag}</li>
        {/each}
      </div>
    </ul>
  </div>

  <div class="node {isFirstChild ? 'first' : ''}">
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
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
        /></svg
      >
    {/if}
  </div>

  <div class="bubble">
    <h3>{project.title}</h3>
    <p>
      {project.start_date} — {isCurrentProject ? project.end_date : "Present"}
    </p>
    <p>{project.desc}</p>
    {#if hasLink}
      <p><a href={project.link} target="_blank">{project.link_text}</a></p>
    {/if}
  </div>
</div>

<style lang="scss">
  .time-node {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;

    @include respond-to("small") {
      grid-template-columns: 0.5fr 2fr;
    }

    &.reverse {
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

    .bubble {
      border: 3px solid $white;
      border-radius: 0.8em;
      padding: 1em 2em;
      margin-bottom: 5em;

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
        &::before {
          margin-top: 0;
        }
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
      }

      // Circle node shape
      &::before {
        content: "";
        z-index: 101;
        display: block;
        position: relative;
        width: 15px;
        height: 15px;
        margin-top: 3em;
        background-color: $white;
        border: 3px solid $color-art;
        border-radius: 50%;
        right: 0.5em;
      }
    }

    .tags {
      justify-self: end;
      margin-top: 2em;

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        border-left: 6px solid $light-gray;
        padding-left: 1.2em;
        padding-bottom: 0.5em;
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
