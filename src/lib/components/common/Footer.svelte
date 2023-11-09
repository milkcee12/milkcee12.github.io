<script lang="ts">
  import { PUBLIC_GITHUB_URL } from "$env/static/public";
  import Fa from "svelte-fa";
  import {
    faLinkedinIn as linkedin,
    faInstagram as instagram,
    faTwitter as twitter,
    faGithub as github,
  } from "@fortawesome/free-brands-svg-icons";

  let lastUpdatedDate: string;
  fetch(PUBLIC_GITHUB_URL)
    .then((response) => response.json())
    .then((commits) => {
      var dateISO = new Date(commits[0].commit.committer.date);
      lastUpdatedDate = dateISO.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    })
    .catch(function (err) {
      lastUpdatedDate = "-";
    });
</script>

<footer>
  <p class="item">© 2023 All rights reserved.</p>
  <div class="socials item">
    <a href="https://www.instagram.com/milkcee12/" target="_blank"
      ><Fa icon={instagram} size="1.5x" /></a>
    <a href="https://www.linkedin.com/in/michaela-chang/" target="_blank"
      ><Fa icon={linkedin} size="1.5x" /></a>
    <a href="https://twitter.com/milkcee12" target="_blank"
      ><Fa icon={twitter} size="1.5x" /></a>
    <a href="https://github.com/milkcee12/" target="_blank"
      ><Fa icon={github} size="1.5x" /></a>
  </div>
  <p class="last-updated item">Last updated:<br />{lastUpdatedDate}</p>
</footer>

<style lang="scss">
  footer {
    color: $light-gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1.5px solid $light-gray;
    padding: 3.5em 4em;

    @include respond-to("small") {
      flex-direction: column;
      text-align: center;
      padding: 2.5em 4em;
    }

    .item {
      flex: 1;
      padding: 0.5em 2em;
    }

    .socials {
      display: flex;
      justify-content: center;
      a {
        color: $white;
        padding: 0 0.5em;
        transition: all 0.25s;
        &:hover {
          color: $light-gray;
        }
      }
    }

    .last-updated {
      text-align: right;
      @include respond-to("small") {
        text-align: center;
      }
    }
  }
</style>
