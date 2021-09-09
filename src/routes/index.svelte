<script>
	import Accordion from '$lib/Accordion.svelte';
	import Field from '$lib/Field.svelte';
	import SearchFilter from '$lib/SearchFilter.svelte';
	import Toggle from '$lib/Toggle.svelte';

	// variables
	let isToggled;
	let items = ['scott', 'teddy', 'carmen', 'wes', 'chiquito'];
	let search = '';
	let text = '';
	let range = 0;
</script>

<h1>Welcome to Level UI in Svelte</h1>
<hr />
<h2>Toggle Slide Button</h2>
<Toggle bind:isToggled />
<br />
<hr />
<br />
<h2>Accordion Button</h2>
<Accordion isOpen={false} buttonText="Do I need a credit card?">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam architecto ipsa dicta.
		Quidem laborum debitis numquam? Dicta, sunt deleniti!
	</p>
</Accordion>
<br />
<hr />
<br />
<h2>Filtered Search</h2>
<h3>{search}</h3>
<SearchFilter {items} bind:search />
<br />
<hr />
<br />
<h2>Fields/Inputs</h2>
<Field bind:value={text} label="Text Input" instructions="Type here" placeholder="Text" />
<h3>{text}</h3>
<br />
<Field type="number" value={0} label="Number" />
<br />
<Field type="range" bind:value={range} label="Range" />
<h3>{range}</h3>
<br />
<hr />
<br />
