<script>
  import Icon from "@iconify/svelte";
  export let href = "#",
    name,
    color,
    arrowColor = false,
    newTab = false,
    alignRight = false;
</script>

<p class={`mc-c-arrow-link ${alignRight ? "align-right" : ""}`}>
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
    display: flex;
    
    a {
      width: fit-content;
      display: flex;
      align-items: center;
    }

    &.align-right {
      justify-content: flex-end;
    }
  }
</style>
