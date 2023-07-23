<script>
  import Icon from "@iconify/svelte";
  export let href,
    name,
    color,
    arrowColor = false,
    newTab;
</script>

<p class="mc-c-arrow-link">
  <a class={`color-${color}`} {href} target={newTab ? "_blank" : ""}
    >{name}
    <Icon
      icon="radix-icons:triangle-right"
      width="20"
      height="20"
      color={arrowColor ? arrowColor : color}
    /></a
  >
</p>

<style lang="scss">
  .mc-c-arrow-link {
    a {
      display: flex;
      align-items: center;
    }
  }
</style>
