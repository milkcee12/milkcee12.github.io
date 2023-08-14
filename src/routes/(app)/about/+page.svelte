<svelte:head>
  <title>About | Milkcee Studios</title>
</svelte:head>

<section class="mc-c-title">
  <h1>
    This site is a love letter to the two things I cherish: <span
      class="color-art">drawing</span
    >
    and <span class="color-tech">programming</span>.
  </h1>
  <p>Here is a little blurb that talks more about my intended disciplines.</p>
</section>
<section class="mc-c-lists">
  <h2>Fun Lists</h2>
  <p>
    Art and code isn't all I do, here are some of my favorite things as lists!
  </p>
  <div class="mc-c-lists--row">
    <div class="mc-c-lists--col">
      <h3>Manga</h3>
      <ul>
        <li>Chainsaw Man</li>
      </ul>
    </div>
    <div class="mc-c-lists--col">
      <h3>Anime</h3>
    </div>
    <div class="mc-c-lists--col">
      <h3>League of Legends</h3>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    margin-bottom: 8em;
  }
  .mc-c-title {
    width: 70%;
    h1 {
      font-size: 2em;
    }
  }

  .mc-c-lists {
    h2 {
      font-size: 2em;
    }
    &--row {
      display: flex;
    }

    &--col {
      flex: 1;
      ul {
        list-style-type: none;
        padding: 0;
        color: $color-muted;
      }
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
  }
</style>
