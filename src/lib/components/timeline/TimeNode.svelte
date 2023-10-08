<script lang="ts">
    export let project: any;

    let isCurrentProject: Boolean = project.end_date;
    let hasLink: Boolean = project.hasOwnProperty("link");
    let isEven: Boolean = project.id % 2 == 0;
</script>

<div 
    class="time-node {isEven ? "reverse" : ""}">

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

    <div class="node {project.id == 1 ? "first" : ""}"></div>
    
    <div class="bubble">
        <h3>{project.title}</h3>
        <p>{project.start_date} — {isCurrentProject ? project.end_date : "Present"}</p>
        <p>{project.desc}</p>
        {#if hasLink}
            <a href={project.link} target="_blank">{project.link_text}</a>
        {/if}
    </div>
</div>

<style lang="scss">
.time-node {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;

    @include respond-to('small') {
        grid-template-columns: 0.5fr 2fr;
    }

    &.reverse {
        .bubble { order: 0; }
        .node { order: 1; }
        .tags {
            justify-self: start; 
            order: 2; 
        }

        @include respond-to('small') {
            .bubble { order: 1; }
            .node { order: 0; }
        }
    }

    .bubble {
        border: 3px solid $white;
        border-radius: 0.8em;
        padding: 1em 2em;
        margin-bottom: 5em
    }

    .node {
        margin: 0 5em;
        @include respond-to('small') {
            margin: 0 2em;
        }

        // White timeline line
        background-color: $white;
        width: 3px;

        // First timeline node has offset vertical line
        &.first {
            margin-top: 3em;
            &::before {
                margin-top: 0;
            }
        }

        // Circle node shape
        &::before {
          content: "";
          z-index: 10;
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

        ul { padding: 0; }

        li {
            list-style: none;
            border-left: 6px solid $light-gray;
            padding-left: 1.2em;
        }
        .tech-tags li { border-color: $color-tech; }
        .art-tags li { border-color: $color-art; }

        @include respond-to('small') {
            display: none;
        }
    }
}
</style>
