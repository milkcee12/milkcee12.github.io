<script lang="ts">
  import Heading from "$lib/components/common/Heading.svelte";
  import data from "$lib/data/yml/archive.yml";
  import LazyImage from "$lib/components/common/LazyImage.svelte";
  import { loadImagesFromModule } from "$lib/util";

  let projects: any = data.projects;

  async function loadArchiveThumbnails() {
    const module = import.meta.glob("$lib/images/archive/*");
    let thumbnails = await loadImagesFromModule(module);
    return thumbnails;
  }

  function mergeThumbnailData(thumbnails: any) {
    let merged: any[] = new Array();
    for (let i = 0; i < projects.length; i++) {
      merged.push({
        ...projects[i],
        ...thumbnails.find(
          (itmInner: any) => parseInt(itmInner.filename) === projects[i].id
        ),
      });
    }
    return merged;
  }
</script>

<svelte:head>
  <title>Archive | Milkcee Studios</title>
</svelte:head>

<Heading headingText="Archive" emoji="📷🗂️" hasLink={false}></Heading>
<p>
  Older and smaller projects for record-keeping. Game jams, hackathons, and
  other projects that didn't make the main page.
</p>

<div class="gallery">
  {#await loadArchiveThumbnails() then thumbnails}
    {#each mergeThumbnailData(thumbnails) as project}
      <div class="item">
        <a href={project.slug}>
          <div class="thumbnail">
            <LazyImage src={project.url} alt={project.filename} />
          </div>
          <div class="project-info">
            <h3>{project.title}</h3>
            <p><small><i>{project.type}</i></small></p>
            <p><small><i>{project.date}</i></small></p>
          </div>
        </a>
      </div>
    {/each}
  {/await}
</div>

<style lang="scss">
  .gallery {
    margin-top: 4em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;

    @include respond-to("medium") {
      grid-template-columns: 1fr 1fr;
    }

    @include respond-to("small") {
      grid-template-columns: 1fr;
    }

    .thumbnail {
      height: 15em;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.7;
      }
    }

    a {
      text-decoration: none;
    }

    .project-info {
      h3 {
        margin-bottom: 0;
        margin-top: 0.5em;
      }

      p {
        margin: 0;
      }
    }
  }
</style>
