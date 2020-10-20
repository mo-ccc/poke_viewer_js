<script>					 
	import OptionMenu from './OptionMenu.svelte';

	var c_sprite;
	var c_types = [];
	var c_abilities = [];
	var c_stats = {'hp': 0, 'attack': 0, 'defense': 0, 'special-attack': 0, 'special-defense': 0, 'speed': 0};
	
	// calls update() everytime pokelink changes
	
</script>

<main>
	<div>
		<OptionMenu/>
		<img src={c_sprite}/>
		<div class="contiii">
			<div class="conti">
				<h4>types:</h4>
				{#each c_types as ct}
				  <h5>{ct}</h5>
				{/each}
			</div>

			<div class="conti">
				<h4>abilities:</h4>
				{#each c_abilities as ct}
				  <h5>{ct}</h5>
				{/each}
			</div>
		</div>
	</div>
	<div class="stat-box">
		<h6>hp: {c_stats['hp']}</h6>
		<progress class="stats" value={c_stats['hp']/255}/>
		<h6>attack: {c_stats['attack']}</h6>
		<progress class="stats" value={c_stats['attack']/190}/>
		<h6>special attack: {c_stats['special-attack']}</h6>
		<progress class="stats" value={c_stats['special-attack']/180}/>
		<h6>defense: {c_stats['defense']}</h6>
		<progress class="stats" value={c_stats['defense']/230}/>
		<h6>special-defense: {c_stats['special-defense']}</h6>
		<progress class="stats" value={c_stats['special-defense']/230}/>
		<h6>speed: {c_stats['speed']}</h6>
		<progress class="stats" value={c_stats['speed']/180}/>
	</div>
	
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
	
	.stat-box {
		text-align: left;
		padding-left: 20px;
		padding-top: 10px;
	}
	
	.stats {
		display: block;
		margin-bottom: 10px;
		width: 200px;
		height: 5px;
		background-color: green;
	}
	
	h6 {
		margin: 0px;
	}
	
	h5, h4 {
		margin-top: 5px;
		margin-bottom: 5px;
	}
	
	.contiii {
		display: flex;
		justify-content: center;
	}
	
	.conti {
		width: 100px;
		margin-right: 10px;
		margin-left: 10px;
		padding: 10px;
		border: 1px black solid;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			display: flex;
		}
		
		.stat-box {
			padding-top: 10%;
		}
	}
</style>