<script lang="ts">
  import Fa from "svelte-fa";
  import { faArrowRight as rightArrow } from "@fortawesome/free-solid-svg-icons";
  export let href: string;
  export let target: string = "";
  export let colorArt: boolean;
</script>

<div class="color-link" class:color-art={colorArt} class:color-tech={!colorArt}>
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
      transition: all 0.25s ease-out;
    }

    @mixin underline {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      top: 1.25em;
      height: 1.5px;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      background-color: $white;
    }
    &.color-art a {
      color: $color-art;

      &::after {
        @include underline;
        background-color: $color-art;
      }
    }
    &.color-tech a {
      color: $color-tech;

      &::after {
        @include underline;
        background-color: $color-tech;
      }
    }

    a {
      transition: all 0.25s ease-out;
      display: inline-block;
      position: relative;
    text-decoration: none;
    }

    .spacer {
      margin-right: 0.5em;
    }

    &:hover {
      .arrow {
        color: $white;
        transform: translateX(2px);
      }

      a::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
</style>
