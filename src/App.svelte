<script>
	let pokemons = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander',
                    'charmeleon', 'charizard', 'squirtle', 'wartortle',
					 'blastoise', 'caterpie', 'metapod', 'butterfree',
					 'weedle', 'kakuna', 'beedrill', 'pidgey',
					 'pidgeotto', 'pidgeot', 'rattata', 'raticate',
					 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu',
					 'raichu', 'sandshrew', 'sandslash', 'nidoran-f',
					 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino',
					 'nidoking', 'clefairy', 'clefable', 'vulpix',
					 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat',
					 'golbat', 'oddish', 'gloom', 'vileplume', 'paras',
					 'parasect', 'venonat', 'venomoth', 'diglett',
					 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck',
					 'mankey', 'primeape', 'growlithe', 'arcanine',
					 'poliwag', 'poliwhirl', 'poliwrath', 'abra',
					 'kadabra', 'alakazam', 'machop', 'machoke',
					 'machamp', 'bellsprout', 'weepinbell', 'victreebel',
					 'tentacool', 'tentacruel', 'geodude', 'graveler',
					 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro',
					 'magnemite', 'magneton', 'farfetchd', 'doduo',
					 'dodrio', 'seel', 'dewgong', 'grimer', 'muk',
					 'shellder', 'cloyster', 'gastly', 'haunter',
					 'gengar', 'onix', 'drowzee', 'hypno', 'krabby',
					 'kingler', 'voltorb', 'electrode', 'exeggcute',
					 'exeggutor', 'cubone', 'marowak', 'hitmonlee',
					 'hitmonchan', 'lickitung', 'koffing', 'weezing',
					 'rhyhorn', 'rhydon', 'chansey', 'tangela',
					 'kangaskhan', 'horsea', 'seadra', 'goldeen',
					 'seaking', 'staryu', 'starmie', 'mr-mime',
					 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir',
					 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto',
					 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon',
					 'omanyte', 'omastar', 'kabuto', 'kabutops',
					 'aerodactyl', 'snorlax', 'articuno', 'zapdos',
					 'moltres', 'dratini', 'dragonair', 'dragonite',
					 'mewtwo', 'mew'];
					 
	var selected = 'bulbasaur';
	$: pokelink = 'https://pokeapi.co/api/v2/pokemon/' + selected;
	var j;
	var c_sprite;
	var c_types = [];
	var c_abilities = [];
	var c_stats = {'hp': 0, 'attack': 0, 'defense': 0, 'special-attack': 0, 'special-defense': 0, 'speed': 0};
	
	// calls update() everytime pokelink changes
	$: {
		update(pokelink);
	}
	
	async function update(plink) {
		const l = await fetch(plink);
		j = await l.json();
		c_sprite = j.sprites.front_default;
		c_types = [];
		c_abilities = [];
		c_stats = {};
		for(const i in j.types) {
			c_types.push(j.types[i].type.name);
		}
		
		for (const i in j.abilities) {
			c_abilities.push(j.abilities[i].ability.name);
		}
		
		for (const i in j.stats) {
			const s_name = j.stats[i].stat.name;
			c_stats[s_name] = j.stats[i].base_stat;
		}
		console.log(c_stats);
	}
</script>

<main>
	<div class="main-body">
		<select bind:value={selected}>
			{#each pokemons as pokemon}
			  <option value={pokemon}>
				{pokemon}
			  </option>
			{/each}
		</select>
		
		<h1>{selected}</h1>
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