<script lang="ts">
  import Heading from "$lib/components/common/Heading.svelte";
  import ImageLoader from "$lib/components/common/ImageLoader.svelte";
  import aboutImage from "$lib/images/about/glasses-cow.jpg";
  import { loadImagesFromModule } from "$lib/util";

  async function loadProfilePictures() {
    const module = import.meta.glob("$lib/images/about/profile-pictures/*");
    let profilePictures = await loadImagesFromModule(module);
    return profilePictures.reverse();
  }
</script>

<svelte:head>
  <title>About | Milkcee Studios</title>
</svelte:head>

<section id="about">
  <h1>
    This site is home to the two crafts I love: <span class="color-art"
      >drawing</span>
    and <span class="color-tech">programming</span>.
  </h1>
  <div class="content">
    <img src={aboutImage} alt="Painting of a cow with glasses" />
    <div class="text">
      <p>
        I knew on my first pencil strokes that I loved art. I grew up in San
        Diego dreaming of going to art school, but I ended up in computer
        science out of filial piety. Unlike art, programming was a long game—it
        wasn't until I began to relish small victories and work late nights of
        my own accord, I realized that I also fell in love with programming.
        <br /><br />
        When I'm not glued to my computer
        <a
          class="color-art"
          href="https://www.instagram.com/milkcee12/"
          target="_blank">painting imaginary worlds</a>
        or
        <a
          class="color-tech"
          href="https://github.com/milkcee12/"
          target="_blank">building software</a
        >, you can find me reading manga, eating pastries, or in the Uniqlo
        graphic tee section 😋
      </p>
    </div>
  </div>
</section>

<section id="profile-graveyard">
  <Heading headingText="Profile Picture Graveyard" emoji="🪦" hasLink={false} />
  <p>🕴️ Hover over the pictures (or tap if you're on mobile)!</p>
  <div class="profile-gallery">
    {#await loadProfilePictures()}
      <ImageLoader />
    {:then profilePictures}
      {#each profilePictures as { url, filename }}
        <div class="profile-item">
          <figure>
            <div class="img-wrapper"><img src={url} alt={filename} /></div>
            <figcaption>{filename}</figcaption>
          </figure>
        </div>
      {/each}
    {/await}
  </div>
</section>

<section id="lists">
  <Heading headingText="Fun Lists" emoji="📜" hasLink={false} />
  <p>
    Wow you really looked through the website, here's a prize! 🏆 Some of my
    favorite things as lists.
  </p>
  <div class="list-flex">
    <div class="list-col">
      <h3>Manga</h3>
      <ul>
        <li>Pandora Hearts</li>
        <li>Blue Period</li>
        <li>Kingdom</li>
        <li>Jigokuraku (Hell's Paradise)</li>
        <li>Hikaru no Go</li>
      </ul>
    </div>
    <div class="list-col">
      <h3>Anime</h3>
      <ul>
        <li>Bleach</li>
        <li>Fairy Tail</li>
        <li>Link Click</li>
        <li>Haikyuu!</li>
        <li>Birdie Wing</li>
      </ul>
    </div>
    <div class="list-col">
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
  h1 {
    margin-top: 0;
    width: 90%;
    @include respond-to(medium) {
      width: 100%;
    }
  }
  #about {
    .content {
      width: 85%;
      display: flex;
      flex: 1 1 auto;
      flex-wrap: wrap;
      gap: 2.5em;

      .text {
        flex: 1 1 250px;
      }

      img {
        max-height: 40vh;
        max-width: 100%;
        border-radius: 1.25em;
      }
    }
  }
  #profile-graveyard {
    .profile-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 1.5em 1.5em;
      margin-top: 3em;

      .profile-item {
        flex: 0 0 auto;
        figure {
          margin: 0;
        }
        figcaption {
          text-align: center;
          margin-top: 0.75em;
        }

        .img-wrapper {
          display: block;
          width: 260px;
          height: 260px;
          overflow: hidden;
          border-radius: 1em;

          img {
            width: 100%;
            border-radius: 1em;
            transform-origin: center center;
            transition: 0.5s all;
            &:hover {
              transform: scale(1.05);
            }
          }
        }
        &:not(:first-child) img {
          filter: grayscale(100%);
          opacity: 0.9;
          &:hover {
            filter: none;
            opacity: 1;
          }
        }
      }
    }
  }

  #lists {
    width: 70%;
    .list-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5em;

      @include respond-to("small") {
        flex-direction: column;
      }

      .list-col {
        flex: 1 1 30%;
        ul {
          list-style-type: none;
          padding: 0;
          color: $light-gray;
        }
        li {
          padding-bottom: 0.5em;
        }
      }
    }
  }
</style>
