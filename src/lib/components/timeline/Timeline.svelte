<script lang="ts">
    import data from "$lib/json/projects.json";
    import TimeNode from "./TimeNode.svelte";
</script>

<section id="timeline">
    <h2>Featured Work &#129466;</h2>
    {#each data.projects as project}
        <TimeNode project={project} />
    {/each}
</section>