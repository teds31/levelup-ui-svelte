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
	import PrimaryBtn from '$lib/PrimaryBtn.svelte';
	import DarkBtn from '$lib/DarkBtn.svelte';

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
<!-- Toggle Slide Button  -->
<h2>Toggle Slide Button</h2>
<Toggle bind:isToggled />
<Space />
<!-- Accordion Component -->
<h2>Accordion Button</h2>
<Accordion isOpen={false} buttonText="Do I need a credit card?">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam architecto ipsa dicta.
		Quidem laborum debitis numquam? Dicta, sunt deleniti!
	</p>
</Accordion>
<Space />
<!-- Search Filter Input  -->
<h2>Filtered Search</h2>
<h3>{search}</h3>
<SearchFilter {items} bind:search />
<Space />
<!-- Reusable Field Inputs  -->
<h2>Fields/Inputs</h2>
<Field bind:value={text} label="Text Input" instructions="Type here" placeholder="Text" />
<h3>{text}</h3>
<br />
<Field type="number" value={0} label="Number" />
<br />
<Field type="range" bind:value={range} label="Range" />
<h3>{range}</h3>

<!-- Markdown component  -->
<Space />
<h2>Markdown Component</h2>
<p>Type anything</p>
<Markdown />
<Space />
<!-- Modal Component  -->
<h2>Modal</h2>
<Modal bind:isModalOpen background={false}>
	<Field bind:value={text} label="Text Input" instructions="Type here" placeholder="Text" />
</Modal>
<button on:click={() => (isModalOpen = true)}>Open Modal</button>
<Space />
<!-- Toast Messages  -->
<h2>Toast Messages</h2>
<Toast />
<button on:click={() => toast.send('TOAST MESSAGE' + ' ' + Math.random())}>Open Toast</button>
<Space />
<!-- Buttons  -->
<h2>Buttons</h2>
<br />
<div class="flex gap-8">
	<div class="flex-col">
		Primary Button
		<br />
		<PrimaryBtn text="Submit" />
	</div>
	<div>
		Black Button
		<br />
		<DarkBtn />
	</div>
</div>
<br /><br />
