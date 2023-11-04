<script lang="ts">
  import Fa from "svelte-fa";
  import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
  export let href: string;
  export let target: string = "";
  export let colorArt: boolean;
</script>

<div class="color-link {colorArt ? 'color-art' : 'color-tech'}">
  <a {href} {target}><slot /> <Fa icon={faCaretRight} /></a>
</div>

<style lang="scss">
  .color-link {
    font-weight: bold;

    &.color-art a {
      color: $color-art;
    }
    &.color-tech a {
      color: $color-tech;
    }
  }
</style>
