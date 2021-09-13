<script>
	export let isToggled = false;
	export let label = '';
</script>

<label>
	{label}
	<input type="checkbox" checked={isToggled} />
	<div class="toggle" />
</label>

<style>
	label {
		--width: 60px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
		display: flex;
		font-size: 26px;
	}
	.toggle {
		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--radius);
		border: solid 1px #333;
		transition: background 0.3s ease;
		background-color: var(--toggleButtonColor, white);

		margin-right: 5px;
	}
	.toggle::after {
		content: '';
		position: absolute;
		top: -0.25px;
		left: -0.5px;
		height: var(--height);
		width: 50%;
		border-radius: var(--radius);
		background-color: var(--toggleButtonColor, darkslateblue);
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	input {
		display: none;
	}

	input:checked + .toggle {
		background-color: var(--toggleCheckedBackgroundColor, green);
	}
	input:checked + .toggle::after {
		transform: translate3d(100%, 0, 0);
		transition: transform 0.3s ease;
	}
</style>
