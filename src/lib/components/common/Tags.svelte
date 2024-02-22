<script lang="ts">
  export let tags: string[];
</script>

<div class="tags">
  {#each tags as tag}
    <p>{tag}</p>
  {/each}
</div>

<style lang="scss">
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0 0.7em;

        p {
            padding: 0.4em 1.3em;
            background-color: $dark-gray;
            border-radius: 1em;
            margin-top: 0;
        }
    }
</style>
