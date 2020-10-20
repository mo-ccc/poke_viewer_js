<script>
	import {c_stats} from './store.js'
	
	// dictionary for stats
	var stats = {'hp': 0, 'attack': 0, 'defense': 0, 'special-attack': 0, 'special-defense': 0, 'speed': 0};
	
	// if the store value of c_stats changes set var stats to the new value
	c_stats.subscribe(value => {
		stats = value;
	});
</script>

<main>
		<!-- hp stat bar -->
		<h6>hp: {stats['hp']}</h6>
		<progress class="stats" value={stats['hp']/255}/>
		
		<!-- attack stat bar -->
		<h6>attack: {stats['attack']}</h6>
		<progress class="stats" value={stats['attack']/190}/>
		
		<!-- special attack stat bar -->
		<h6>special attack: {stats['special-attack']}</h6>
		<progress class="stats" value={stats['special-attack']/180}/>
		
		<!-- defense stat bar -->
		<h6>defense: {stats['defense']}</h6>
		<progress class="stats" value={stats['defense']/230}/>
		
		<!-- special defense stat bar -->
		<h6>special-defense: {stats['special-defense']}</h6>
		<progress class="stats" value={stats['special-defense']/230}/>
		
		<!-- speed stat bar -->
		<h6>speed: {stats['speed']}</h6>
		<progress class="stats" value={stats['speed']/180}/>
</main>

<style>
	main {
		text-align: left;
		margin-left: 20px;
		margin-top: 40px;
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
	

</style>