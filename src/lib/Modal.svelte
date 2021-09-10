<script>
	import { fly, fade } from 'svelte/transition';
	import Portal from './Portal.svelte';

	export let isModalOpen = false;
	export let background = true;

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<Portal>
		<div class="modal-wrapper" transition:fly={{ opacity: 0, y: 100 }}>
			<button on:click={closeModal} aria-label="Close Modal">Close</button>
			<slot />
		</div>
		{#if background}
			<div class="background" on:click={closeModal} transition:fade />
		{/if}
	</Portal>
{/if}

<style>
	.modal-wrapper {
		height: 200px;
		background: white;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
		position: fixed;
		inset: 100px 0 0;
		min-width: 320px;
		max-width: 530px;
		margin: 0 auto;
		width: 100%;
		z-index: 101;
	}
	.background {
		background-color: black;
		opacity: 0.7;
		cursor: pointer;
		inset: 0;
		position: fixed;
		z-index: 100;
	}
</style>
