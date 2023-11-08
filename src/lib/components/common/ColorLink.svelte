<script lang="ts">
  import Fa from "svelte-fa";
  import { faArrowRight as rightArrow } from "@fortawesome/free-solid-svg-icons";
  export let href: string;
  export let target: string = "";
  export let colorArt: boolean;
</script>

<div class="color-link {colorArt ? 'color-art' : 'color-tech'}">
  <a href="{href}" target="{target}"
    ><slot /><span class="spacer"></span><Fa icon="{rightArrow}" /></a>
</div>

<style lang="scss">
  .color-link {
    font-weight: bold;
    width: fit-content;

    &.color-art a {
      color: $color-art;
    }
    &.color-tech a {
      color: $color-tech;
    }

    .spacer {
      margin-right: 0.5em;
    }
  }
</style>
