<script lang="ts">
  export let src: string;
  export let alt: string;
  export let borderRadius = true;
  let visible = false;

  function visibleToggle() {
    visible = !visible;
  }
</script>

<img
  {src}
  {alt}
  loading="lazy"
  on:load={visibleToggle}
  class:visible
  class:radius={borderRadius} />

<style lang="scss">
  img {
    opacity: 0;
    transition: opacity 1s ease-out;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top center;

    &.visible {
      opacity: 1;
    }

    &.radius {
      border-radius: 1em;
    }
  }
</style>
