<script>
  import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import TimeBlock from "../lib/components/TimeBlock.svelte";
  import ArrowLink from "../lib/components/ArrowLink.svelte";
  import heroFigure from "../lib/img/hero-figure.webp";
  import heroSig from "../lib/img/hero-signature.webp";
  import aboutProfile from "../lib/img/about-profile-1.jpg";

  import { onMount } from "svelte";
  import { pxToFloat } from "../lib/util";

  /** @type {import('./$types').PageData} */
  export let data;

  let timeline, timelineHeight;
  onMount(() => {
    calcTimelineHeight();
  });

  function calcTimelineHeight() {
    let height = pxToFloat(
      getComputedStyle(timeline).getPropertyValue("height")
    );
    timelineHeight = height;
  }
</script>

<svelte:head>
  <title>Milkcee Studios</title>
</svelte:head>

<svelte:window on:resize={calcTimelineHeight} />

<section class="mc-c-hero">
  <div class="mc-c-hero__block--left" />
  <div class="mc-c-hero__block--right" />
  <img class="mc-c-hero__img--sig" src={heroSig} alt="Hero section signature" />
  <img
    class="mc-c-hero__img--figure"
    src={heroFigure}
    alt="Hero section figure"
  />
  <div class="mc-c-hero__explore">
    <p>Explore</p>
    <div class="mc-c-hero__explore__line" />
  </div>
</section>

<Navbar />

<div class="mc-l-container">
  <section>
    <div class="mc-c-title">
      <h2>Featured Work</h2>
      <ArrowLink href="/work" color="art" name="See all work" newTab={false} />
    </div>
    {#if data.error}
    <p>Oops! there was an error loading featured work &#128532;. Please try again.</p>
    {:else}
      <div class="mc-l-timeline" bind:this={timeline}>
        {#each Object.keys(data.timeline) as key, i}
          <TimeBlock id={i} project={data.timeline[key]} {timelineHeight} />
        {/each}
      </div>
    {/if}
  </section>

  <section>
    <div class="mc-l-about">
      <div class="mc-c-about__blurb">
        <div class="mc-c-title">
          <h2>Hello World &#128075;</h2>
          <ArrowLink
            href="/about"
            color="art"
            name="More about me"
            newTab={false}
          />
        </div>
        <div class="mc-c-about__blurb__desc">
          <p>
            Hi there! I'm Michaela or Milkcee, depending on where you found me
            from. I'm a software engineer and illustrator. I read a lot of manga
            and I like to talk about drawing my own comics, but I've only made a
            handful of them.
          </p>
          <p>
            I'm a junior studying <span class="color-tech"
              ><b>Computer Science</b></span
            >
            at
            <span class="color-light"
              ><b>University of Southern California</b></span
            >
            with a minor in <span class="color-art"><b>3-D Animation</b></span>.
            For some reason, I also own a lot of cow-themed merch.
          </p>
        </div>
        <div class="mc-c-about__blurb__social-links">
          <ArrowLink
            href="https://github.com/milkcee12"
            color="tech"
            name="Github"
            arrowColor="white"
            newTab={true}
          />
          <ArrowLink
            href="https://instagram.com/milkcee12"
            color="art"
            name="Instagram"
            arrowColor="white"
            newTab={true}
          />
          <ArrowLink
            href="https://twitter.com/milkcee12"
            color="art"
            name="Twitter"
            arrowColor="white"
            newTab={true}
          />
        </div>
      </div>
      <!-- TODO: Replace with fancy borders -->
      <div class="mc-c-about__profile">
        <img
          class="mc-c-about__profile__img"
          src={aboutProfile}
          alt="About section face profile"
        />
      </div>
    </div>
  </section>
</div>

<Footer />

<style lang="scss">
  .mc-c-hero {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    &__block {
      flex: 1;
      &--left {
        @extend .mc-c-hero__block;
      }
      &--right {
        @extend .mc-c-hero__block;
        background-color: $color-art;
      }
    }

    &__img {
      position: absolute;
      pointer-events: none;
      &--sig {
        @extend .mc-c-hero__img;
        height: 110vh;
        top: -10vh;
        left: calc(50% - 59vh);
        @media (max-width: $breakpoint-md) and (orientation: portrait) {
          height: 80vh;
          left: calc(50% - 45vh);
        }
        @media (max-width: $breakpoint-lg) and (max-height: 415px) and (orientation: landscape) {
          height: 100vh;
          left: calc(50% - 55vh);
        }
      }
      &--figure {
        @extend .mc-c-hero__img;
        height: 102vh;
        top: 2em;
        left: calc(50% - 30vh);

        @media (max-width: $breakpoint-lg) and (max-height: 415px) and (orientation: landscape) {
          left: calc(50% - 30vh);
        }
      }
    }

    // Decorative line on header
    &__explore {
      position: absolute;
      display: flex;
      align-items: center;
      margin-top: calc(100vh - 130px);
      transform: rotate(90deg);
      p {
        flex-grow: 0;
        padding-right: 1em;
      }

      &__line {
        width: 4em;
        flex-grow: 1;
        height: 3px;
        background-color: $color-tech;
      }
    }
  }

  .mc-c-title {
    display: flex;
    align-items: center;
    h2 {
      flex-grow: 0;
      padding-right: 1em;
      color: $color-light;
    }
  }

  .mc-l-container {
    margin-top: 8em;
    @media (max-width: $breakpoint-lg) {
      margin: 3em 2em 0;
    }
    section {
      margin-bottom: 8em;
    }
  }

  .mc-l-timeline {
    width: 80%;
    margin-top: 5em;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: $breakpoint-xxxl) {
      width: 80%;
    }

    @media (max-width: $breakpoint-xl) {
      width: 90%;
    }
    @media (max-width: $breakpoint-lg) {
      width: 100%;
      margin-top: 1em;
    }
  }

  // === ABOUT SECTION ===
  .mc-l-about {
    display: flex;
    column-gap: 10em;
    @media (max-width: $breakpoint-xl) {
      column-gap: 7em;
    }
    @media (max-width: $breakpoint-lg) {
      column-gap: 5em;
    }
    @media (max-width: $breakpoint-md) {
      flex-wrap: wrap;
      row-gap: 3em;
    }
  }
  .mc-c-about {
    &__blurb {
      flex: 3;
      color: $color-muted;

      @media (max-width: $breakpoint-md) {
        flex: 1 0 100%;
      }
      &__social-links {
        display: flex;
      }
    }

    &__profile {
      flex: 2;
      text-align: center;

      @media (max-width: $breakpoint-md) {
        flex: 1 0 100%;
      }
      &__img {
        width: 80%;
        border-radius: 25px;
        @media (max-width: $breakpoint-xl) {
          width: 90%;
        }
        @media (max-width: $breakpoint-lg) {
          width: 100%;
        }
        @media (max-width: $breakpoint-md) {
          width: 60%;
        }
        @media (max-width: $breakpoint-s) {
          width: 80%;
        }
      }
    }
  }
</style>
