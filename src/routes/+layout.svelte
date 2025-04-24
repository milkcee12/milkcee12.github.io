<script lang="ts">
  import "$lib/scss/_globals.scss";
</script>

<slot />

<style lang="scss">
  :global(body){
    background-color: $off-white;
    overflow: hidden;
  }
</style>