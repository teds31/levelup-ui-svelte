<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { toast } from './toast';

	export let message = '';
	export const duration = 1000;
	let progress = tweened(100, { duration: 1000 });
	onMount(() => {
		toastProgress();
	});

	async function toastProgress() {
		await progress.set(0);
		toast.remove();
	}
</script>

<div style={`width: ${$progress}%; height: 10px; background: white`} />
<p>
	{message}
</p>

<style>
	p {
		margin: 0;
	}
</style>
