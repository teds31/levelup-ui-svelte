<script>
	import { slide } from './actions/Slide';
	export let buttonText = '';
	export let isOpen = true;
</script>

<button class="block m-0 border border-solid border-brand-darkGray w-full text-left" on:click={() => (isOpen = !isOpen)}>
	<span class="inline-block mr-1 rotate-90 transition-transform ease duration-300" class:isOpen> &#9650;</span>
	{buttonText}
</button>
<div
	use:slide={{ isOpen, duration: 250 }}
	on:animationEnd={() => console.log('animation ended')}
	class="border border-solid border-t-0 border-brand-darkGray"
>
	<div class="p-1.5">
		<slot />
	</div>
</div>

<style>


	.isOpen {
		transform: rotate(0.5turn);
	}

</style>
