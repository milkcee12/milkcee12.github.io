<script lang="ts">
  import ColorLink from "./ColorLink.svelte";

  export let emoji: String;
  export let headingText: String;
  export let hasLink: Boolean;
</script>

<div class="heading">
  <h2>{headingText} <span class="emoji">{emoji}</span></h2>
  {#if hasLink}
    <slot />
  {/if}
</div>

<style lang="scss">
  .heading {
    margin-block-start: 2em;
    margin-bottom: 2em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 3em;
    row-gap: 1em;

    h2 {
      margin: 0;
    }

    .emoji {
      display: inline-block;
      background: none;
      animation: infiniteFloating 2.5s ease-in-out infinite;
    }
  }

  @keyframes infiniteFloating {
    0% {
      transform: scale(1.1);
      transform: rotate(-5deg) translateY(3px);
    }
    50% {
      transform: scale(1);
      transform: translateY(-3px) rotate(5deg);
    }
    100% {
      transform: rotate(-5deg) translateY(3px);
    }
  }
</style>
