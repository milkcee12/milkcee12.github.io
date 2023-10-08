<script lang="ts">
  import Timeline from "$lib/components/timeline/Timeline.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import Navbar from "$lib/components/common/Navbar.svelte";
</script>

<svelte:head>
  <title>Milkcee Studios</title>
</svelte:head>

<HeroSection />
<Navbar />

<div class="container">
  <Timeline />

  <!-- DELETE LATER -->
  <section>temp</section>
  <section>temp</section>
  <section>temp</section>
  <!-- END DELETE -->

  <section id="about">
    <h2>Hello World</h2>
    <p>Hi this is me!</p>
  </section>
</div>
