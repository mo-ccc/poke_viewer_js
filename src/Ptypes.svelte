<script>
	import {c_types} from './store.js'
	
	var types = [];
	
	// when the c_types in store changes update types to the new value
	c_types.subscribe(value => {
		types = value;
	});
</script>

<main>
	<h4>types:</h4>
	<!-- for each type make a h5 element -->
	{#each types as ct}
	  <h5>{ct}</h5>
	{/each}
</main>

<style>
	main {
		width: 100px;
		margin-right: 10px;
		margin-left: 10px;
		padding: 10px;
		border: 1px black solid;
	}
	
	h5, h4 {
		margin-top: 5px;
		margin-bottom: 5px;
	}
</style>