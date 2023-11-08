<script lang="ts">
  import Timeline from "$lib/components/timeline/Timeline.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import Navbar from "$lib/components/common/Navbar.svelte";
  import ColorLink from "$lib/components/common/ColorLink.svelte";
  import homeAboutProfile from "$lib/images/home_about-profile.webp";
  import Heading from "$lib/components/common/Heading.svelte";
</script>

<svelte:head>
  <title>Milkcee Studios</title>
</svelte:head>

<HeroSection />
<Navbar />

<div class="container">
  <Timeline />

  <section id="about">
    <div class="content">
      <div class="blurb">
        <Heading headingText="Hello World!" emoji="&#128075;" hasLink={true}>
          <ColorLink href="/about" colorArt={true}>More about me</ColorLink></Heading>
        <p>
          Hi there! I'm Michaela or Milkcee, depending on where you found me
          from. I'm a software engineer by day and painter by night. I read a
          lot of manga and I talk about drawing my own comics but I've only made
          a handful of them.<br /><br />
          I'm a junior studying
          <span class="color-tech"><b>Computer Science</b></span>
          at
          <span class="color-white"
            ><b>University of Southern California</b></span>
          with a minor in <span class="color-art"><b>3-D Animation</b></span>.
          For some reason, I also own a lot of cow-themed stuff.
        </p>
        <div class="socials">
          <ColorLink
            href="https://github.com/milkcee12/"
            target="_blank"
            colorArt={false}>Github</ColorLink>
          <ColorLink
            href="https://www.instagram.com/milkcee12/"
            target="_blank"
            colorArt={true}>Instagram</ColorLink>
          <ColorLink
            href="https://twitter.com/milkcee12"
            target="_blank"
            colorArt={true}>Twitter</ColorLink>
        </div>
      </div>
      <div class="profile">
        <img src={homeAboutProfile} alt="Profile drawing" />
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  p {
    color: $light-gray;
  }

  #about {
    .content {
      display: flex;
      flex-wrap: wrap;
      gap: 8em;
      margin-top:2em;

      @include respond-to("large") {
        gap: 5em;
      }

      @include respond-to("medium") {
        flex-direction: column;
        gap: 3em;
      }

      @include respond-to("small") {
      }

      .blurb {
        flex: 3;
        display: flex;
        flex-flow: column;

        .socials {
          margin-top: 1.5em;
          display: flex;
          gap: 1.75em;
          flex-wrap: wrap;
        }
      }

      .profile {
        flex: 2;
        text-align: center;
        img {
          width: 100%;
          border-radius: 1.25em;

          @include respond-to("medium") {
            width: 60%;
          }

          @include respond-to("small") {
            width: 80%;
          }
        }
      }
    }
  }
</style>
