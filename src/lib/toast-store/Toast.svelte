<script>
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '$lib/Portal.svelte';
	import { toast } from './toast';
	import ToastMessage from './ToastMessage.svelte';
</script>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as message (message)}
			<div
				class="toast"
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				animate:flip
				on:click={() => toast.remove}
			>
				<ToastMessage {message} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}

	.toast {
		background-color: slateblue;
		color: white;
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
	}
</style>
