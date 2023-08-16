<script>
  import Navbar from "../../lib/components/Navbar.svelte";
  import Footer from "../../lib/components/Footer.svelte";
  import { Modals, closeModal} from "svelte-modals";
</script>

<Modals>
  <div slot="backdrop" class="backdrop" on:click={closeModal} />
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
