<script>
	import marked from 'marked';
	export let text = '';
	let markdownText = text;
	$: {
		markdownText = marked(text);
	}
</script>

<div class="wrapper">
	<textarea id="" cols="30" rows="10" bind:value={text} />
	<div>
		<!-- markup sanitized -->
		{@html markdownText}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		gap: 3rem;
		margin: 1rem;
	}
	textarea {
		border: 1px solid black;
	}
</style>
