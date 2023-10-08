<script lang="ts">
    import { page } from "$app/stores";
    let path: string;
  
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
      <a href="#" class={path == "/archive" ? "active" : ""}>Archive</a>
      <a href="#" target="_blank" rel="noreferrer">Resume</a>
    </div>
  </nav>
  
  <style lang="scss">
    .mc-c-navbar {
      display: flex;
      justify-content: space-between;
      border-bottom: 1.5px solid $white;
      padding: 3.5em 3em;

      &__links a {
        padding: 7px 1em;
        font-weight: normal;
        color: $light-gray;
        box-sizing: border-box;
        border-radius: 16px;
        transition: all 0.25s;
      }
  
      &__brand {
        color: $white;
      }
    }
  </style>