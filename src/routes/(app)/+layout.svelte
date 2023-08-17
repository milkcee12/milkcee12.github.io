<script>
  import Navbar from "../../lib/components/Navbar.svelte";
  import Footer from "../../lib/components/Footer.svelte";
  import { Modals, closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";
</script>

<Modals>
  <div slot="backdrop" class="backdrop" on:click={closeModal} transition:fade />
</Modals>

<Navbar />
<div class="mc-l-container">
  <slot />
</div>
<Footer />

<style lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
