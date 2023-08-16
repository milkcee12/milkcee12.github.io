<script>
  import { onMount } from "svelte";
  import { closeModal } from 'svelte-modals'
  import ArrowLink from "./ArrowLink.svelte";

    // Provided by <Modals />
    export let isOpen;

    export let src;
    export let id;

    const data;
    onMount(async() => {
        // TODO: Create playgorund database
        // TODO: Get metadata from supabase id
    });
</script>

{#if isOpen}
  <div role="dialog" class="mc-c-modal">
    <div class="mc-c-modal--contents">
      <div class="mc-c-modal--close">
        <button on:click={closeModal}>OK</button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
    .mc-c-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        /* allow click-through to backdrop */
        pointer-events: none;
    }
</style>
