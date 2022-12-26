<script>
    import Icon from '@iconify/svelte';
    export let href, name, color;
</script>

<p class="arrow-link"><a class={color} href={href}>{name} <Icon icon="radix-icons:triangle-right" width="20" height="20" /></a></p>

<style lang="scss">
    .arrow-link {
        a {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
</style>
