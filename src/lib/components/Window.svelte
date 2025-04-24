<script lang="ts">
    import {clamp} from '$lib/ts/math';

    export let doEnableControls: boolean = false;
    export let title: string;
    export let iconUrl: string | null = null;

    type Vector2 = {x: number, y: number};

    let windowDOM: HTMLElement;
    let lastMousePos: Vector2 = {x: 0, y:0};

    function close() 
    {
        windowDOM.remove();
    }

    function dragStart(e: MouseEvent) 
    {
        // Force window to the top of the render stack.
        windowDOM.parentNode?.appendChild(windowDOM);

        lastMousePos = {x: e.clientX, y: e.clientY};
        document.onmousemove = dragFollow;
        document.onmouseup = dragStop;
    }

    function dragFollow(e: MouseEvent) 
    {
        let currMousePos = {x: e.clientX, y: e.clientY};
        let deltaMousePos = {
            x: currMousePos.x - lastMousePos.x, 
            y: currMousePos.y - lastMousePos.y
        };
        lastMousePos = currMousePos;

        windowDOM.style.left = 
            clamp(windowDOM.offsetLeft + deltaMousePos.x, 0, window.innerWidth - 10) + "px";
        windowDOM.style.top = 
            clamp(windowDOM.offsetTop + deltaMousePos.y, 0, window.innerHeight - 10) + "px";
    }

    function dragStop() 
    {
        document.onmousemove = null;
        document.onmouseup = null;
    }
</script>

<section bind:this={windowDOM}>
    <div class="window risograph">
        <div 
        class="window-bar risograph" 
        on:mousedown={dragStart} 
        role="menubar" 
        tabindex="0"
        >
            <div class="window-bar--icon">
                {#if iconUrl}
                    <img src={iconUrl} alt="{title} window icon" />
                {/if}
            </div>
            <p class="window-bar--title">{title}</p>
        
            <div class="window-bar--controls">
                {#if doEnableControls}
                    <button on:click={close} role="menuitem">X</button>
                {/if}
            </div>
        </div>

        <div class="window-content">
            <slot />
        </div>
    </div>
</section>

<style lang="scss">
    section {
        position: absolute;
        z-index: 10;
    }

    .window {
        background-color: $light-teal;
    }

    .window-bar {
        background-color: $dark-blue;
        color: $off-white;
        left: 0;
        right: 0;
        height: 2.5em;
        padding: 0 .5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        rotate: -0.2deg;
        cursor: move;

        &--icon {
            width: 1.5em;
            height: 1.5em;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &--title {
            margin: 0;
            justify-self: center;
            font-size: 1.2em;
        }

        &--controls {
            min-width: 1.5em;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            button {
                background-color: $light-blue;
                color: $dark-blue;
                padding: 0;
                margin: 0;
                width: 1.15em;
                height: 1.3em;
                font-size: 1.3em;
                outline: none;
                border: none;
                cursor: pointer;
                rotate: 1.2deg;
            }
        }
    }

    .window-content {
        left: 0;
        right: 0;
        padding: 1em 2.5em;
    }
</style>
