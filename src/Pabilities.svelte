<script>
	import {c_abilities} from './store.js'
	
	var abilities = [];
	
	// when the c_abilities in store changes update types to the new value
	c_abilities.subscribe(value => {
		abilities = value;
	});
</script>

<main>
	<h4>abilities:</h4>
	<!-- for each ability make a h5 element -->
	{#each abilities as ability}
	  <h5>{ability}</h5>
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