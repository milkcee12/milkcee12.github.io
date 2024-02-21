<script lang="ts">
  import Heading from "$lib/components/common/Heading.svelte";
  import LazyImage from "$lib/components/common/LazyImage.svelte";
  import data from "$lib/data/yml/archive.yml";

// TODO: Add image resolver for archive folder (it will hold project thumbnails) 

  let projects: any = data.projects;
</script>

<svelte:head>
  <title>Archive | Milkcee Studios</title>
</svelte:head>

<Heading headingText="Archive" emoji="📷🗂️" hasLink={false}></Heading>
<p>
  Older and smaller projects for record-keeping. Game jams, hackathons, and
  other projects that didn't make the main page.
</p>

{#each projects as project}
  <a href={project.slug}
    ><p>{project.title}<br /><small><i>{project.date}</i></small></p>
    <!-- <LazyImage src={image.url} alt={title} /> -->
  </a>
{/each}
