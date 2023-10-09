<script lang="ts">
  import { page } from "$app/stores";

  let path: string;
  let open: Boolean;

  // Used for active class
  $: path = $page.url.pathname;
</script>

<nav class="navbar">
  <a href="/" class="brand"><b>MC</b></a>
  <div class="default-nav">
    <div class="links">
      <a href="/work">Work</a>
      <a href="/playground">Playground</a>
      <a href="/about">About</a>
      <a href="/archive">Archive</a>
      <a href="#" target="_blank" rel="noreferrer">Resume</a>
    </div>
  </div>

  <div class="mobile-nav">
    <button class="hamburger-btn" on:click={() => (open = !open)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path
          d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
        />
      </svg>
    </button>
  </div>
</nav>

{#if open}
  <div class="hamburger-menu">
    <div class="navbar">
      <a href="/" class="brand"><b>MC</b></a>
      <button class="hamburger-btn" on:click={() => (open = !open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.2em"
          viewBox="0 0 384 512"
          ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <style>
            svg {
              fill: #ffffff;
            }
          </style><path
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          /></svg
        >
      </button>
    </div>
    <div class="links">
      <ul>
        <li><a href="/work">Work</a></li>
        <li><a href="/playground">Playground</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/archive">Archive</a></li>
        <li><a href="#" target="_blank" rel="noreferrer">Resume</a></li>
      </ul>
    </div>
  </div>
{/if}

<style lang="scss">
  nav.navbar {
    padding: 3.5em 3em;
  }

  .links a {
    font-weight: normal;
    color: $light-gray;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1.5px solid $white;
    padding: 2em 3em;

    .links a {
      padding: 7px 1em;
      box-sizing: border-box;
      border-radius: 16px;
      transition: all 0.25s;
    }

    .brand {
      align-self: center;
      height: fit-content;
      color: $white;
    }

    .mobile-nav {
      display: none;
    }

    @include respond-to("small") {
      .default-nav {
        display: none;
      }

      .mobile-nav {
        display: initial;
      }

      .hamburger-btn {
        fill: $white;
        background: none;
        border: none;
      }
    }
  }

  .hamburger-menu {
    display: block;
    z-index: 1000;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: $off-black;

    .links {
      display: flex;
      flex-direction: column;

      li {
        list-style: none;
        padding: 1em 0;
      }
    }
  }
</style>
