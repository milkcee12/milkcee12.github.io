<script>
  import resume from "../pdf/MichaelaChang_Resume.pdf";
  import { page } from "$app/stores";
  let path;

  $: path = $page.url.pathname;
</script>

<nav class="mc-c-navbar">
  <a href="/" class="mc-c-navbar__brand"><b>MC</b></a>
  <div class="mc-c-navbar__links">
    <a href="/work" class={path == "/work" ? "active" : ""}>Work</a>
    <a href="/playground" class={path == "/playground" ? "active" : ""}
      >Playground</a
    >
    <a href="/about" class={path == "/about" ? "active" : ""}>About</a>
    <a href={resume} target="_blank" rel="noreferrer">Resume</a>
  </div>
</nav>

<style lang="scss">
  .mc-c-navbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1.5px solid $color-light;
    padding: 3.5em 3em;
    @media (max-width: $breakpoint-lg) {
      padding: 3.5em 2em;
    }

    &__links a {
      padding: 7px 1em;
      font-weight: normal;
      color: $color-muted;
      box-sizing: border-box;
      border-radius: 16px;
      transition: all 0.25s;

      &.active {
        color: $color-light;
        background-color: $color-dark-accent;
      }

      &:hover {
        color: $color-light;
        background-color: $color-dark-accent;
      }

      @media (max-width: $breakpoint-lg) {
        padding: 7px 0.3em;
        &.active {
          background-color: transparent;
          font-weight: bold;
        }
      }
    }

    &__brand {
      font-size: 1.5rem;
      color: $color-light;
    }
  }
</style>
