<script>
	import Toggle from '$lib/Toggle.svelte';

	// variables
	let isToggled;
</script>

<h1>Welcome to Level UI in Svelte</h1>

<Toggle bind:isToggled />

{#if isToggled}
	<h1>I'm toggled!</h1>
{/if}

<style>
</style>
