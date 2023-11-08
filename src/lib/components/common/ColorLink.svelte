<script lang="ts">
  import Fa from "svelte-fa";
  import { faArrowRight as rightArrow } from "@fortawesome/free-solid-svg-icons";
  export let href: string;
  export let target: string = "";
  export let colorArt: boolean;
</script>

<div class="color-link {colorArt ? 'color-art' : 'color-tech'}">
  <a {href} {target}
    ><slot /><span class="spacer" /><span class="arrow">
      <Fa icon={rightArrow} />
    </span></a>
</div>

<style lang="scss">
  .color-link {
    font-weight: bold;
    width: fit-content;

    .arrow {
      display: inline-block;
    }

    &:hover {
      .arrow {
        animation: infinitePointing 1.5s ease-in-out infinite;
      }
    }

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

  @keyframes infinitePointing {
    50% {
      transform: translateX(2px);
    }
  }
</style>
