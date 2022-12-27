<script>
    import Icon from '@iconify/svelte';
    export let href, name, color, arrowColor, newTab;
</script>

<p class="arrow-link"><a class={`text-${color}`} href={href} target={newTab ? '_blank' : ''} >{name} <Icon icon="radix-icons:triangle-right" width="20" height="20" color={arrowColor ? arrowColor : color} /></a></p>

<style lang="scss">
    .arrow-link {
        a {
            display: flex;
            align-items: center;
        }
    }
</style>
