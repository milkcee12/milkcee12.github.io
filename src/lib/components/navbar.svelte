<nav class="mc-c-navbar">
  <a href="/" class="mc-c-navbar__brand"><b>MC</b></a>
  <div class="mc-c-navbar__links">
    <a href="/work">Work</a>
    <a href="/about">About</a>
    <a href="/playground">Playground</a>
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
      padding: 0 1em;
      font-weight: normal;
      color: $color-light;

      @media (max-width: $breakpoint-lg) {
        padding: 0 0.3em;
      }
    }

    &__brand {
      font-size: 1.5rem;
      color: $color-light;
    }
  }
</style>
