<script>
  import { onMount, tick } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  let pfps = [];
  onMount(async () => {
    await tick();
    pfps = [...data.pfps].reverse();
  });
</script>

<svelte:head>
  <title>About | Milkcee Studios</title>
</svelte:head>

<div class="mc-l-container">
  <section class="mc-c-about">
    <div class="mc-c-title">
      <h1>
        This site is home to the two things I'm passionate about: <span
          class="color-art">drawing</span
        >
        and <span class="color-tech">programming</span>.
      </h1>
    </div>
    <p>
      I grew up in San Diego as a fine artist. I did a lot of acrylic painting
      and pencil drawings, and even got a few awards for my art. But I was
      always looking for a way to get closer to the art I saw in video games and
      anime I discovered digital art in high school, I was immediately hooked.
    </p>
    <p>
      Studying computer science was more of an afterthought until college, where
      I discovered that I also really liked programming and product design. When
      I'm not glued to my computer, you can find me reading manga, eating
      pastries, or in the Uniqlo graphic tee section.
    </p>
  </section>
  <section>
    <h2>Profile Picture Graveyard &#129702;</h2>
    <p>An overview of how my art style has changed over the years! :)</p>
    <div class="mc-c-pfp">
      {#each pfps as { url, date }}
        <div class="mc-c-pfp--item">
          <img src={url} alt={date} />
          <figcaption>{date}</figcaption>
        </div>
      {/each}
    </div>
  </section>
  <section class="mc-c-lists">
    <h2>Fun Lists &#x1f4dc;</h2>
    <p>Here are some of my favorite things as lists!</p>
    <div class="mc-c-lists--row">
      <div class="mc-c-lists--col">
        <h3>Manga</h3>
        <ul>
          <li>Pandora Hearts</li>
          <li>Blue Period</li>
          <li>Kingdom</li>
          <li>Jigokuraku (Hell's Paradise)</li>
          <li>Hikaru no Go</li>
        </ul>
      </div>
      <div class="mc-c-lists--col">
        <h3>Anime</h3>
        <ul>
          <li>Bleach</li>
          <li>Fairy Tail</li>
          <li>Link Click</li>
          <li>Haikyuu!</li>
          <li>Birdie Wing</li>
        </ul>
      </div>
      <div class="mc-c-lists--col">
        <h3>League of Legends</h3>
        <ul>
          <li>Lux</li>
          <li>Seraphine</li>
          <li>Vel'koz</li>
          <li>Xerath</li>
          <li>Ahri</li>
        </ul>
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  section {
    margin-bottom: 8em;
  }

  .mc-c-about {
    p {
      width: 70%;
    }
  }
  .mc-c-lists {
    width: 70%;
    &--row {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
    }

    &--col {
      flex: 1 1 30%;
      ul {
        list-style-type: none;
        padding: 0;
        color: $color-muted;
      }
      li {
        padding-bottom: 6px;
      }
    }
  }

  .mc-c-pfp {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 18px;

    &--item {
      flex: 0 0 auto;

      figcaption {
        margin-top: 10px;
      }

      img {
        transform-origin: center left;
        width: 275px;
        height: 275px;
        transform: scale(0.96);
        border-radius: 25px;
        transition: 0.25s all;
        &:hover {
          transform: scale(1);
        }
      }
      &:not(:first-child) img {
        filter: grayscale(100%);
        &:hover {
          filter: none;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .mc-c-lists,
    .mc-c-about {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .title {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .title {
      text-align: center;
    }

    .mc-c-pfp {
      justify-content: center;
      &--item {
        text-align: center;
        img {
          transform: scale(1);
        }
      }
    }
  }
</style>
