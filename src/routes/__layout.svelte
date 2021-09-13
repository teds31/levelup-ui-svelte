<script>
	import '$lib/style.css';
	import '../styles/tailwind-output.css';
</script>

<div class="body-wrapper">
	<slot />
</div>

<style>
	.body-wrapper {
		margin: 1rem;
		padding-bottom: 2rem;
		height: 100vh;
	}
</style>
