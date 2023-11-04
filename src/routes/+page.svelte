<script lang="ts">
  import Timeline from "$lib/components/timeline/Timeline.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import Navbar from "$lib/components/common/Navbar.svelte";
  import ColorLink from "$lib/components/common/ColorLink.svelte";
</script>

<svelte:head>
  <title>Milkcee Studios</title>
</svelte:head>

<HeroSection />
<Navbar />

<div class="container">
  <Timeline />

  <section id="about">
    <div class="heading">
      <h2>Hello World &#128075;</h2>
      <ColorLink href="/about" colorArt={true}>More about me</ColorLink>
    </div>
    <p>Hi this is me!</p>
  </section>
</div>
