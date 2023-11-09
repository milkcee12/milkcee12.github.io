<script lang="ts">
  import Heading from "$lib/components/common/Heading.svelte";
  import { onMount } from "svelte";
  import aboutImage from "$lib/images/about/glasses-cow.jpg";

  let profilePictures: any;
  $: profilePictures;

  export async function importProfilePictures() {
    const module = import.meta.glob(
      "../../../lib/images/about/profile-pictures/*"
    );
    const iterableModule = Object.entries(module);
    const options: any = { year: "numeric", month: "long" };

    profilePictures = await Promise.all(
      iterableModule.map(async ([path, resolver]) => {
        const profilePictureData: any = await resolver().then(
          ({ default: imageUrl }: any) => {
            let date = new Date(path.substring(0, path.length - 3));
            let dateVerbose = date.toLocaleDateString("en-US", options);
            return {
              url: imageUrl,
              date: dateVerbose,
            };
          }
        );
        return profilePictureData;
      })
    );

    profilePictures.reverse();
    // console.log(profilePictures);
  }

  onMount(() => {
    importProfilePictures();
  });
</script>

<svelte:head>
  <title>About | Milkcee Studios</title>
</svelte:head>

<section id="about">
  <h1>
    This site is home to the two things I'm passionate about: <span
      class="color-art">drawing</span>
    and <span class="color-tech">programming</span>.
  </h1>
  <div class="content">
    <img src={aboutImage} alt="Painting of a cow with glasses" />

    <!-- TODO: Revise text here bc it's cringe :( -->
    <div class="text">
      <p>
        I grew up in San Diego as a fine artist. I did a lot of acrylic painting
        and pencil drawings, and even got a few awards for my art. But I was
        always looking for a way to get closer to the art I saw in video games
        and anime—when I discovered digital art in high school, I was
        immediately hooked.
      </p>
      <p>
        Studying computer science was more of an afterthought until college,
        where I discovered that I also really liked programming and product
        design. When I'm not glued to my computer, you can find me reading
        manga, eating pastries, or in the Uniqlo graphic tee section.
      </p>
    </div>
  </div>
</section>

<section id="profile-graveyard">
  <Heading
    headingText="Profile Picture Graveyard"
    emoji="&#129702;"
    hasLink={false} />
  <p>Hover over the pictures! :)</p>
  <div class="profile-gallery">
    {#if profilePictures}
      {#each profilePictures as { url, date }}
        <div class="profile-item">
          <figure>
            <img src={url} alt={date} />
            <figcaption>{date}</figcaption>
          </figure>
        </div>
      {/each}
    {/if}
  </div>
</section>

<section id="lists">
  <Heading headingText="Fun Lists" emoji="&#x1f4dc;" hasLink={false} />
  <p>
    Wow you really looked through the website. As a prize (lol?) here are some
    of my favorite things as lists.
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
        border-radius: 25px;
      }
    }
  }
  #profile-graveyard {
    .profile-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 1.5em 1em;
      margin-top: 3em;

      .profile-item {
        flex: 0 0 auto;
        figure {
          margin: 0;
        }
        figcaption {
          text-align: center;
          margin-top: 0.25em;
        }

        img {
          transform-origin: center left;
          width: 275px;
          height: 275px;
          transform-origin: center center;
          transform: scale(0.96);
          border-radius: 25px;
          transition: 0.25s all;
          &:hover {
            transform: scale(1);
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

      @include respond-to('small') {
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
