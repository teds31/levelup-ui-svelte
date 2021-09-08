<script>
	//animation
	import { fade } from 'svelte/transition';

	// variables
	export let items;
	export let search = '';
	let isFocused = false;

	// bindings
	$: filteredSearch = items.filter((item) => {
		return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});
</script>

<div class="wrapper">
	<label>
		Search Names: <br />
		<input
			type="text"
			placeholder="Search"
			bind:value={search}
			on:focus={() => (isFocused = true)}
		/>
	</label>

	{#if isFocused}
		<ul>
			{#each filteredSearch as item}
				<li
					transition:fade={{ duration: 200 }}
					on:click={() => {
						search = item;
						isFocused = false;
					}}
				>
					{item}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
		display: inline-block;
	}
	ul {
		position: absolute;
		width: 100%;
		border: 1px solid black;
		list-style: none;
		padding: 0;
		margin: 0;
		z-index: 5;
	}
	li {
		text-transform: capitalize;
		padding: 10px;
		cursor: pointer;
		transition: 0.3s background ease;
	}
	li:hover {
		background: var(--listItemBackground, #eee);
	}
</style>
