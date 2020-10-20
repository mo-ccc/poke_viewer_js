<script>					 
	import OptionMenu from './OptionMenu.svelte';
	import Psprite from './Psprite.svelte';
	import Pstats from './Pstats.svelte';
	import Ptypes from './Ptypes.svelte';
	import Pabilities from './Pabilities.svelte';
	
</script>

<main>
	<div>
		<OptionMenu/>
		<Psprite/>
		<div class="info-container">
			<Ptypes/>
			<Pabilities/>
		</div>
	</div>
	<Pstats/>
</main>

<style>
	main {
		display: block;
		justify-content: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	.info-container {
		display: flex;
		justify-content: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			display: flex;
			align-items: flex-start;
		}
	}
</style>