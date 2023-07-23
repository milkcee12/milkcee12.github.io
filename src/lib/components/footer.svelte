<script>
  import { PUBLIC_GITHUB_URL } from "$env/static/public";
  import Icon from "@iconify/svelte";

  let date;
  fetch(PUBLIC_GITHUB_URL)
    .then((response) => response.json())
    .then((commits) => {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var dateISO = new Date(commits[0].commit.committer.date);
      date = dateISO.toLocaleDateString("en-US", options);
    })
    .catch(function (err) {
      date = null;
    });
</script>

<footer class="mc-c-footer">
  <p class="mc-c-footer__item--copyright">© 2022 All right reserved.</p>
  <div class="mc-c-footer__item--socials">
    <a
      href="https://www.instagram.com/milkcee12/"
      target="_blank"
      rel="noreferrer"
      ><Icon icon="fa6-brands:instagram" width="25" height="25" /></a
    >
    <a href="https://github.com/milkcee12/" target="_blank" rel="noreferrer"
      ><Icon icon="fa6-brands:github" width="25" height="25" /></a
    >
    <a href="https://twitter.com/milkcee12" target="_blank" rel="noreferrer"
      ><Icon icon="fa6-brands:twitter" width="25" height="25" /></a
    >
  </div>
  <p class="mc-c-footer__item--updated">Last updated: <br /> {date}</p>
</footer>

<style lang="scss">
  %item {
    flex: 1;

    @media (max-width: $breakpoint-md) {
      flex-basis: 100%;
      text-align: center;
      justify-content: center;
    }
  }

  .mc-c-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1.5px solid $color-light;
    padding: 3.5em 4em;
    color: $color-muted;

    @media (max-width: $breakpoint-lg) {
      padding: 3.5em 2em;
    }

    @media (max-width: $breakpoint-md) {
      padding: 2em 2em;
      flex-wrap: wrap;
    }

    &__item {
      &--copyright {
        @extend %item;
      }

      &--socials {
        @extend %item;
        display: flex;
        justify-content: center;

        a {
          color: $color-light;
          padding: 0 0.5em;
          &:hover {
            color: $color-muted;
          }
        }
      }

      &--updated {
        @extend %item;
        text-align: right;
      }
    }
  }
</style>
