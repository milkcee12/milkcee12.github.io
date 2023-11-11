<script lang="ts">
  import Fa from "svelte-fa";
  import { faArrowRight as rightArrow } from "@fortawesome/free-solid-svg-icons";
  export let href: string;
  export let target: string = "";
  export let colorArt: boolean;
</script>

<div class="color-link" class:color-art={colorArt} class:color-tech={!colorArt}>
  <a {href} {target}
    ><span class="underline">
      <slot /><span class="spacer" /><span class="arrow">
        <Fa icon={rightArrow} />
      </span>
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
      width: calc(100%);
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.5s;
    }
    &.color-art {
      a {
        color: $color-art;
      }
      .underline {
        @include underline;
        background-image: linear-gradient(
          transparent calc(100% - 1.5px),
          $color-art 1.5px
        );
      }
    }
    &.color-tech {
      a {
        color: $color-tech;
      }

      .underline {
        @include underline;
        background-image: linear-gradient(
          transparent calc(100% - 1.5px),
          $color-tech 1.5px
        );
      }
    }

    a {
      transition: all 0.25s ease-out;
      display: inline-block;
      position: relative;
      text-decoration: none;
      line-height: 1.3em;
    }

    .spacer {
      margin-right: 0.5em;
    }

    &:hover {
      .arrow {
        color: $white;
        transform: translateX(2px);
      }

      // a::after {
      //   transform: scaleX(1);
      //   transform-origin: bottom left;
      // }
      .underline {
        background-size: 100% 100%;
      }
    }
  }
</style>
