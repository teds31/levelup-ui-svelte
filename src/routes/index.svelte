<script>
	import Accordion from '$lib/Accordion.svelte';
	import Toggle from '$lib/Toggle.svelte';

	// variables
	let isToggled;
</script>

<h1>Welcome to Level UI in Svelte</h1>

<Toggle bind:isToggled />
<br />
<hr />
<br />
<Accordion isOpen={false} buttonText="Do I need a credit card?">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam architecto ipsa dicta.
		Quidem laborum debitis numquam? Dicta, sunt deleniti!
	</p>
</Accordion>
