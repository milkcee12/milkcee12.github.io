<script>
    import '$lib/scss/global.scss'
    import Footer from "$lib/components/common/Footer.svelte";
  </script>

<div class="mobile-wrapper">
  <slot />
  <Footer />
</div>

<style lang="scss">
  .mobile-wrapper {
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
