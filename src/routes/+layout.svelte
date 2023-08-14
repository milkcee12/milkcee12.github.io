<slot />

<style lang="scss" global>
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700;900&display=swap');
  body {
    overflow: overlay;
    overflow-x: hidden;
  }

  body {
    position: relative;
    font-family: "Albert Sans", sans-serif;
    background-color: $color-dark;
    color: $color-light;
    padding: 0;
    margin: 0;
  }
  body > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  a {
    color: $color-art;
    text-decoration: none;
    font-weight: bold;
  }
  .mc-l-container {
    flex: 1;
    margin: 6em 3em 0;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: $breakpoint-lg) {
      margin: 6em 3em 0;
    }

    @media (max-width: $breakpoint-md) {
      margin: 4em 2em 0;
    }
  }
</style>
