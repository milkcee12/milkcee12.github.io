<script>
  import ArrowLink from "../../../lib/components/ArrowLink.svelte";
</script>

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

<style lang="scss">
  section {
    margin-bottom: 8em;
  }
  .mc-c-title {
    width: 80%;
  }

  .mc-c-lists {
    width: 70%;
    h2 {
      font-size: 2em;
    }
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

  @media (max-width: 992px) {
    .mc-c-lists {
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
  }
</style>
