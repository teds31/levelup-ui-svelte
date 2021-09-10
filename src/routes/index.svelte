<script>
	import Accordion from '$lib/Accordion.svelte';
	import Field from '$lib/Field.svelte';
	import Markdown from '$lib/Markdown.svelte';
	import Modal from '$lib/Modal.svelte';
	import SearchFilter from '$lib/SearchFilter.svelte';
	import Space from '$lib/Space.svelte';
	import Toggle from '$lib/Toggle.svelte';
	import Toast from '$lib/toast-store/Toast.svelte';
	import { toast } from '$lib/toast-store/toast';

	// variables
	let isToggled;
	let items = ['scott', 'teddy', 'carmen', 'wes', 'chiquito'];
	let search = '';
	let text = '';
	let range = 0;
	let isModalOpen = false;
</script>

<h1>Welcome to Level UI in Svelte</h1>
<hr />
<h2>Toggle Slide Button</h2>
<Toggle bind:isToggled />
<Space />
<h2>Accordion Button</h2>
<Accordion isOpen={false} buttonText="Do I need a credit card?">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam architecto ipsa dicta.
		Quidem laborum debitis numquam? Dicta, sunt deleniti!
	</p>
</Accordion>
<Space />
<h2>Filtered Search</h2>
<h3>{search}</h3>
<SearchFilter {items} bind:search />
<Space />
<h2>Fields/Inputs</h2>
<Field bind:value={text} label="Text Input" instructions="Type here" placeholder="Text" />
<h3>{text}</h3>
<br />
<Field type="number" value={0} label="Number" />
<br />
<Field type="range" bind:value={range} label="Range" />
<h3>{range}</h3>
<Space />
<h2>Markdown Component</h2>
<p>Type anything</p>

<Markdown />
<Space />
<h2>Modal</h2>
<Modal {isModalOpen}>
	<Field bind:value={text} label="Text Input" instructions="Type here" placeholder="Text" />
</Modal>
<button on:click={() => (isModalOpen = true)}>Open Modal</button>
<Space />
<h2>Toast Messages</h2>
<Toast />
<button on:click={() => toast.send('TOAST MESSAGE' + ' ' + Math.random())}>Open Toast</button>
<Space />
