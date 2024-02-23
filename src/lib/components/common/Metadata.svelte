<script lang="ts">
  export let type: string, date: string;
  export let link: string = "";
  export let linkText: string;
</script>

<div class="metadata">
  <div class="metadata-item">
    <h4>Type</h4>
    <p>{type}</p>
  </div>
  <div class="metadata-item">
    <h4>Timeline</h4>
    <p>{date}</p>
  </div>
  <div class="metadata-item">
    <h4>Link</h4>
    <p>
      {#if link}
        <a href={link} target="_blank">{linkText}</a>
      {:else}
        N/A
      {/if}
    </p>
  </div>
</div>

<style lang="scss">
  .metadata {
    display: flex;
    flex-wrap: wrap;
    gap: 1em 6em;

    .metadata-item {
      h4 {
        margin-bottom: 0.5em;
      }
      p {
        margin: 0;
      }
    }
  }
</style>
