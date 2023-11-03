<script lang="ts">
	// import type { SpinnerTypes } from './types/spinner.type';
	export let color: string = '#FF3E00';
	export let unit: string = 'px';
	export let duration: string = '1s';
	export let size: string | number = '60';
	export let pause: boolean = false;
</script>

<div
	class="wrapper"
	style="--size: {size}{unit}; --color: {color}; --duration: {duration}; --duration: {duration};"
>
	<div class="circle" class:pause-animation={pause} />
</div>

<style>
	.wrapper {
		width: var(--size);
		height: var(--size);
	}
	.circle {
		width: var(--size);
		height: var(--size);
		background-color: var(--color);
		animation-duration: var(--duration);
		border-radius: 100%;
		display: inline-block;
		animation: scaleOut var(--duration) ease-in-out infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes scaleOut {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>