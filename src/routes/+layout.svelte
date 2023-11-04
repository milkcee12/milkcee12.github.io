<script lang="ts">
  import "$lib/scss/global.scss";
  import Footer from "$lib/components/common/Footer.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { afterNavigate, disableScrollHandling } from "$app/navigation";

  export let data: any;

  onMount(async () => {
    disableScrollHandling();
  });

  afterNavigate(() => {
    disableScrollHandling();
    setTimeout(() => {
      scrollTo({ top: 0, behavior: "instant" });
    }, 300);
  });
</script>

{#key data.pathname}
  <div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
    <div class="mobile-wrapper">
      <slot />
      <Footer />
    </div>
  </div>
{/key}

<style lang="scss">
  .mobile-wrapper {
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
