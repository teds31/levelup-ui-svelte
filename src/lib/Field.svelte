<script>
	// variables
	export let label = '';
	export let instructions = '';
	export let style = '';
	export let value;
	export let placeholder = '';
	export let type = 'text';

	// logic
	function handleInput(e) {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	}
</script>

<div {style}>
	<label>
		{#if label}
			<span>
				{label}
			</span>
		{/if}
		{#if instructions}
			<span class="instructions">
				{instructions}
			</span>
		{/if}
		<input {type} {value} {placeholder} on:input={handleInput} />
	</label>
</div>

<style>
	.instructions {
		opacity: 0.7;
		font-size: var(--instructionsFontSize, 14px);
	}
</style>
