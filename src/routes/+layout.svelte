<script lang="ts">
  import "$lib/scss/_globals.scss";
  import Footer from "$lib/components/common/Footer.svelte";
  import { Modals, closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";
  import { disableScrollHandling, onNavigate } from "$app/navigation";

  export let data;

  // Allows page transition without snapping scroll back to top
  onNavigate(() => {
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

<Modals>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
    transition:fade|global={{ duration: 200 }} />
</Modals>

<style lang="scss">
  .mobile-wrapper {
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .backdrop {
    cursor: pointer;
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.85);
  }
</style>
