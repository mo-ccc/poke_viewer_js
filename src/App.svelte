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
	
	$: {
		update(pokelink);
	}
	
	async function update(plink) {
		const l = await fetch(plink);
		j = await l.json();
		c_sprite = j.sprites.front_default;
		c_types = [];
		c_abilities = [];
		for(const i in j.types) {
			c_types.push(j.types[i].type.name);
		}
		
		for (const i in j.abilities) {
			c_abilities.push(j.abilities[i].ability.name);
		}
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
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	.contiii {
		display: flex;
		justify-content: center;
	}
	
	.conti {
		width: 100px;
		margin-left: 20px;
		padding: 10px;
		border: 1px black solid;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>